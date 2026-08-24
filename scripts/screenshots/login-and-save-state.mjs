// Produces auth-state.json (the saved login session capture.mjs reuses).
// Ported from the proven VPS tool (tms-sb/tools/screenshot-capture), extended 2026-08-24 with
// a third login mode and CLI-flag credential support.
//
// Three modes:
//
//   1. AUTOMATED (headless — the only mode that works with no display, e.g. on the VPS).
//      Fills the login form itself. Only works for plain email/password accounts, and only
//      while Turnstile (the login CAPTCHA) is disabled — a script can't solve a CAPTCHA, and it
//      can't drive a "Continue with Google/Microsoft" OAuth flow either (that needs a real
//      provider login screen, which this mode never opens).
//        LUMBERLINQ_EMAIL=you@example.com LUMBERLINQ_PASSWORD='...' node login-and-save-state.mjs --mode=automated
//        node login-and-save-state.mjs --mode=automated --email=you@example.com --password='...'
//
//   2. INTERACTIVE (headed — needs a real display, so localhost, not the VPS). Opens a real,
//      full Chromium window Playwright launches and controls. You log in yourself — plain
//      email/password, social login, Turnstile, whatever your account actually needs, since
//      it's a genuine browser a human is driving. Press Enter here when you're on the
//      Dashboard, and the session is saved. THIS is the answer to "log in once, including
//      social login, and never need to log in again" — no CDP setup required.
//        node login-and-save-state.mjs --mode=interactive
//        (or just: node login-and-save-state.mjs — this is the default when no mode is given
//         and LUMBERLINQ_EMAIL/PASSWORD aren't set)
//
//   3. CDP-ATTACH (localhost only). Genuinely reuses your own, already-open Chrome — but Chrome
//      has to be RELAUNCHED with remote debugging turned on first; a normal already-running
//      Chrome window can't be attached to as-is, Chrome only opens that door if the flag was
//      present at startup. Once that's done, if you're already logged into LumberLinq in a tab
//      there, no separate login step happens at all — this just reads that tab's live session.
//
//        Close Chrome completely first (check Task Manager — no chrome.exe left), then:
//          "C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222
//        Log into LumberLinq normally in that window (or you're probably already logged in, if
//        this is your regular profile). Then, in a separate terminal:
//          node login-and-save-state.mjs --mode=cdp-attach
//
//      Only really worth it over mode 2 if you specifically want to reuse a session you already
//      have open rather than logging in one more time in a script-launched window. Doesn't
//      close your browser afterward — it's yours, not something this script owns.

import { chromium } from 'playwright';
import fs from 'node:fs';
import 'dotenv/config';

function parseArgs() {
  const args = {};
  for (const arg of process.argv.slice(2)) {
    const m = arg.match(/^--([^=]+)=(.*)$/);
    if (m) args[m[1]] = m[2];
  }
  return args;
}
const cliArgs = parseArgs();

const BASE_URL = process.env.BASE_URL || 'https://app.lumberlinq.com';
const OUT = process.env.AUTH_STATE || './auth-state.json';
// CLI flags win over env vars if both are given — env vars stay supported since they're the
// safer default (a value passed via `KEY=value node script.js` doesn't show up in `ps aux` to
// other users on a shared machine the way a literal --password=... argument would).
const EMAIL = cliArgs.email || process.env.LUMBERLINQ_EMAIL;
const PASSWORD = cliArgs.password || process.env.LUMBERLINQ_PASSWORD;
const FORCE = process.env.FORCE_RELOGIN === 'true' || cliArgs.force === 'true';
const CDP_URL = cliArgs['cdp-url'] || process.env.CDP_URL || 'http://localhost:9222';

// Explicit --mode wins; otherwise auto-pick the same way the original script did (email+password
// present -> automated, else interactive) so existing usage keeps working unchanged.
const MODE = cliArgs.mode || (EMAIL && PASSWORD ? 'automated' : 'interactive');

const SIGN_IN_EMAIL = 'input[type="email"][placeholder="Email"]';

const TOUR_KEYS = [
  'header', 'shipments', 'tallysheet', 'reports', 'business-partner', 'products',
  'loading-site', 'users', 'dashboard-v7', 'inventory-overview', 'inventory-in-out',
  'inventory-processing', 'inventory-operators', 'rbac-settings', 'subscription-management',
];
const COOKIE_CONSENT_KEY = 'll_cookie_consent';

async function seedTourAndConsentFlags(context) {
  await context.addInitScript(
    ({ tourKeys, cookieKey }) => {
      tourKeys.forEach((k) => localStorage.setItem(`tms_tour_${k}_v1`, '1'));
      localStorage.setItem(cookieKey, JSON.stringify({ analytics: true }));
    },
    { tourKeys: TOUR_KEYS, cookieKey: COOKIE_CONSENT_KEY },
  );
}

async function automatedLogin() {
  if (!EMAIL || !PASSWORD) {
    console.error('--mode=automated needs credentials: LUMBERLINQ_EMAIL/PASSWORD env vars, or --email=/--password= flags.');
    process.exit(1);
  }
  console.log('Automated headless login (Turnstile assumed OFF, plain email/password only) — no browser window will appear.');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext();
  await seedTourAndConsentFlags(context);
  const page = await context.newPage();

  await page.goto(`${BASE_URL}/login`);
  await page.waitForTimeout(1500);

  const signInForm = page.locator('form').filter({ has: page.locator(SIGN_IN_EMAIL) });
  await signInForm.locator('input[type="email"]').fill(EMAIL);
  await signInForm.locator('input[type="password"]').fill(PASSWORD);
  await signInForm.locator('button[type="submit"]').click();

  await page.waitForURL((url) => !url.pathname.includes('/login'), { timeout: 20000 });

  if (page.url().includes('/confirm-logout-devices')) {
    console.log('Hit the single-session conflict gate — logging out the other device to continue.');
    await page.locator('button', { hasText: 'Log out & continue' }).click();
    await page.waitForURL((url) => !url.pathname.includes('/login') && !url.pathname.includes('/confirm-logout-devices'), { timeout: 20000 });
  }

  if (page.url().includes('/login') || page.url().includes('/confirm-logout-devices')) {
    console.error('Still not past login/confirm-logout after submit — check SELECTORS in this');
    console.error('file against the real form/dialog, or confirm Turnstile is actually disabled.');
    await browser.close();
    process.exit(1);
  }

  await context.storageState({ path: OUT });
  console.log(`Saved session to ${OUT}. Logged in as ${EMAIL}.`);
  await browser.close();
}

async function interactiveLogin() {
  console.log('════════════════════════════════════════════════════════════');
  console.log('LumberLinq screenshot-capture — interactive login');
  console.log('A real, script-launched Chromium window is about to open — this is a genuine');
  console.log('browser, so plain email/password, social login (Google/Microsoft/etc), and');
  console.log('Turnstile all work normally. This needs a real display — run it locally, not');
  console.log('on the VPS.');
  console.log('════════════════════════════════════════════════════════════');
  console.log(`Opening ${BASE_URL}/login ...`);
  console.log('1. Log in however this account actually logs in.');
  console.log('2. Wait until you land on the Dashboard, fully logged in.');
  console.log('3. Come back to THIS terminal and press Enter.');
  console.log('════════════════════════════════════════════════════════════');

  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(`${BASE_URL}/login`);

  await new Promise((resolve) => {
    process.stdin.resume();
    process.stdin.once('data', () => resolve());
  });

  if (page.url().includes('/login')) {
    console.warn('WARNING: the browser is still on the login page. Did the login actually complete?');
    console.warn('Saving anyway, but expect capture.mjs to fail if this session is not authenticated.');
  }

  await context.storageState({ path: OUT });
  console.log(`\nSaved session to ${OUT}.`);
  console.log(`\nIf capture.mjs runs on the VPS, not here: scp ${OUT} <user>@<vps>:/path/to/screenshot-capture/auth-state.json`);
  await browser.close();
}

async function cdpAttachLogin() {
  console.log('════════════════════════════════════════════════════════════');
  console.log(`CDP-attach mode — connecting to an already-running Chrome at ${CDP_URL}`);
  console.log('This only works if Chrome was launched with --remote-debugging-port matching');
  console.log('that URL (a normal, already-open Chrome window can\'t be attached to — see this');
  console.log('file\'s own header comment for the exact relaunch command). Not for the VPS —');
  console.log('this attaches to a browser on the SAME machine the script is running on.');
  console.log('════════════════════════════════════════════════════════════');

  let browser;
  try {
    browser = await chromium.connectOverCDP(CDP_URL);
  } catch (err) {
    console.error(`Could not connect to Chrome at ${CDP_URL}: ${err.message}`);
    console.error('Make sure Chrome is running with --remote-debugging-port=9222 (or pass');
    console.error('--cdp-url=... / set CDP_URL if you used a different port).');
    process.exit(1);
  }

  const contexts = browser.contexts();
  if (!contexts.length) {
    console.error('Connected, but that Chrome has no open windows/tabs at all.');
    process.exit(1);
  }
  // A normal single-profile Chrome only ever has one context — contexts only multiply with
  // incognito windows or multiple profiles, neither of which this assumes.
  const context = contexts[0];

  const host = new URL(BASE_URL).host;
  let targetPage = context.pages().find((p) => p.url().includes(host));
  if (!targetPage) {
    console.log(`No open tab currently on ${host} — opening one now. Make sure you're logged in`);
    console.log('to LumberLinq in this Chrome profile, or this will just save a logged-out session.');
    targetPage = await context.newPage();
    await targetPage.goto(`${BASE_URL}/dashboard-v7`, { waitUntil: 'load', timeout: 30000 });
    await targetPage.waitForTimeout(2000);
  }

  if (targetPage.url().includes('/login')) {
    console.warn('That tab is sitting on the login page, not logged in. Log in in that Chrome');
    console.warn('window first, then re-run this.');
    process.exit(1);
  }

  await context.storageState({ path: OUT });
  console.log(`\nSaved session to ${OUT}, reusing your already-open Chrome — no fresh login needed.`);
  // Deliberately does NOT call browser.close() — this is the user's real browser, launched and
  // owned by them, not something this script should ever shut down.
}

async function main() {
  if (fs.existsSync(OUT) && !FORCE) {
    console.log(`${OUT} already exists — skipping login (reusing the existing session).`);
    console.log('Re-running login while that session is still valid would trigger a single-');
    console.log('session conflict on the real account, not just refresh things harmlessly.');
    console.log('If it has actually expired (capture.mjs starts failing everywhere), delete');
    console.log(`${OUT} first, or run with --force=true / FORCE_RELOGIN=true.`);
    process.exit(0);
  }

  if (MODE === 'automated') await automatedLogin();
  else if (MODE === 'cdp-attach') await cdpAttachLogin();
  else if (MODE === 'interactive') await interactiveLogin();
  else {
    console.error(`Unknown --mode=${MODE}. Use automated, interactive, or cdp-attach.`);
    process.exit(1);
  }

  console.log('\nThis file is equivalent to being logged into that account — treat it like a');
  console.log('password: never commit it, never paste its contents anywhere.');
  process.exit(0);
}

main();
