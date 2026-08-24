// Headless batch screenshot capture. Ported near-verbatim from the proven tool at
// /home/punj/projects/tms-sb/tools/screenshot-capture on the VPS (the one that actually
// produced the reports-01..21 / shipments__*/business-partners__* screenshots already in this
// KB, and the one that hit the rate-limit issue this session's "region based script... 70+
// shots... rate limit error... added a pause" question was about). Not rewritten — this engine
// is already tested against real rate limits, real single-session conflicts, and real product
// tour interference. Only manifest.mjs is new, targeting this session's checklist items.
//
// Usage:  node capture.mjs                       (all verified:true entries)
//         ONLY_VERIFIED=false node capture.mjs    (also attempt unverified entries)
//         ONLY_NAMES=a,b,c node capture.mjs       (only these outputName values)

import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import 'dotenv/config';
import { manifest } from './manifest.mjs';

const BASE_URL = process.env.BASE_URL || 'https://app.lumberlinq.com';
const AUTH_STATE = process.env.AUTH_STATE || './auth-state.json';
const OUTPUT_DIR = process.env.OUTPUT_DIR || './screenshots';
const ONLY_VERIFIED = process.env.ONLY_VERIFIED !== 'false';
const MAX_ATTEMPTS = 2;
// Root cause of the "70+ shots, hit a limit, added a pause" incident: tms-sb's RateLimitFilter
// caps every IP at 200 API requests per 60s window. Each page load here bursts ~10-15 XHRs as
// Angular bootstraps — with zero pacing, a real run tripped 429s partway through (17/59
// succeeded, everything after failed). A rate-limited bootstrap call reads as an auth failure
// and redirects to /login, which looks exactly like a dead session. This delay keeps sustained
// request volume under the limit; override via INTER_ITEM_DELAY_MS if the limit itself changes.
const INTER_ITEM_DELAY_MS = Number(process.env.INTER_ITEM_DELAY_MS ?? 5000);

// Every FeatureTourKey the app currently recognizes (tms-ng src/app/services/tour/
// tour.service.ts) — pre-seeded as "already seen" via addInitScript, before any app code runs,
// so no tour popover can appear mid-capture. NOT re-verified against tour.service.ts this
// session — carried over from the original tool as-is; add any newer tour keys here if a run
// shows an unexpected popover.
const TOUR_KEYS = [
  'header', 'shipments', 'tallysheet', 'reports', 'business-partner', 'products',
  'loading-site', 'users', 'dashboard-v7', 'inventory-overview', 'inventory-in-out',
  'inventory-processing', 'inventory-operators', 'rbac-settings', 'subscription-management',
];
const COOKIE_CONSENT_KEY = 'll_cookie_consent';

function log(msg) {
  const ts = new Date().toISOString().replace('T', ' ').split('.')[0];
  process.stdout.write(`[${ts}] ${msg}\n`);
}

// Waits out the app's own loading UI instead of trusting a fixed timeout. Confirmed against
// real component source (2026-08-24): the global route loader is `.global-page-loader`
// (tms-ng src/app/app.component.html:233, shows the "Loading..." logo card seen in a real bad
// capture of /inventory/machines — a fixed 1000ms settle wasn't enough on a slow connection).
// PrimeNG skeleton placeholders use `.p-skeleton`, its spinner renders `.p-progress-spinner`.
// Two-phase on purpose: a naive single "wait until zero loading elements" check races Angular's
// own bootstrap — called right after page.goto(), before Angular has mounted anything, zero
// loading elements is already (vacuously) true, so the check passed instantly and never
// actually waited for the real load. Found 2026-08-24 on command-center__overview__01, which
// kept coming back as a bare gray skeleton even after adding the first version of this check.
// Phase 1 gives the loading UI a real chance to appear at all (skipped if a page never shows
// one); phase 2 waits for it to clear. Both best-effort — never throws, so a page still loading
// past the timeout still gets shot rather than hanging the whole run.
const LOADING_SELECTOR = '.global-page-loader, .p-skeleton, .p-progress-spinner';
async function waitForAppSettled(page, timeoutMs = 10000) {
  try {
    await page.waitForSelector(LOADING_SELECTOR, { state: 'attached', timeout: 2000 });
  } catch {
    // no loading indicator ever showed up in the first 2s — nothing to wait out
  }
  try {
    await page.waitForSelector(LOADING_SELECTOR, { state: 'detached', timeout: timeoutMs });
  } catch {
    // still loading after timeoutMs — proceed anyway, better than hanging the whole run
  }
}

async function shootOne(browser, target) {
  const context = await browser.newContext({
    ...(target.noAuth ? {} : { storageState: AUTH_STATE }),
    viewport: target.viewport ?? { width: 1600, height: 1000 },
    deviceScaleFactor: target.deviceScaleFactor ?? 2,
    colorScheme: target.theme === 'dark' ? 'dark' : 'light',
  });

  await context.addInitScript(
    ({ tourKeys, cookieKey }) => {
      tourKeys.forEach((k) => localStorage.setItem(`tms_tour_${k}_v1`, '1'));
      localStorage.setItem(cookieKey, JSON.stringify({ analytics: true }));
    },
    { tourKeys: TOUR_KEYS, cookieKey: COOKIE_CONSENT_KEY },
  );

  const page = await context.newPage();

  try {
    await page.goto(`${BASE_URL}${target.route}`, { waitUntil: 'load', timeout: 30000 });
    await waitForAppSettled(page);

    if (target.theme === 'dark') {
      await page.evaluate(() => document.documentElement.classList.add('app-dark'));
    }

    for (const action of target.preActions ?? []) {
      try {
      if (action.type === 'click') {
        await page.locator(action.selector).click();
      } else if (action.type === 'waitFor') {
        await page.locator(action.selector).waitFor({ state: 'visible', timeout: action.timeout ?? 10000 });
      } else if (action.type === 'wait') {
        await page.waitForTimeout(action.ms);
      } else if (action.type === 'key') {
        // Keyboard shortcuts here are global @HostListeners on `document`, but a freshly
        // navigated page can still be missing real DOM focus (no element has ever been
        // clicked) — click the body first so the keydown has somewhere real to land. Found
        // 2026-08-24: Ctrl+K and "?" both silently no-op'd without this, on a page that was
        // also still finishing its own bootstrap (see waitForAppSettled above).
        await page.locator('body').click({ position: { x: 10, y: 10 } });
        await page.keyboard.press(action.key);
      } else if (action.type === 'type') {
        await page.keyboard.type(action.text);
      }
      } catch (err) {
        // Re-throw with the specific preAction attached, so a failure names its own selector
        // instead of a bare "Timeout 30000ms exceeded" that could be any of N preActions.
        // Found 2026-08-24 debugging inventory__quality-grading-editor__01's multi-click path.
        throw new Error(`preAction ${JSON.stringify(action)} failed: ${err.message.split('\n')[0]}`);
      }
    }

    const waitSelector = target.waitFor ?? target.selector;
    if (waitSelector) {
      // Visible only proves the CONTAINER rendered — an element-mode crop target like
      // `.cc-shell` is visible immediately, before its own async data has loaded inside it.
      // Found 2026-08-24: this `if` used to skip waitForAppSettled entirely whenever a crop
      // selector was set, which is every element-mode entry — command-center__overview__01
      // came back as a bare loading skeleton because of exactly this. Always settle after.
      await page.locator(waitSelector).first().waitFor({ state: 'visible', timeout: 15000 });
    }
    await waitForAppSettled(page);
    await page.waitForTimeout(target.settleMs ?? 500);

    const outPath = path.join(OUTPUT_DIR, `${target.outputName}.png`);
    if (target.mode === 'element') {
      await page.locator(target.selector).first().screenshot({ path: outPath, animations: 'disabled' });
    } else if (target.mode === 'fullpage') {
      await page.screenshot({ path: outPath, fullPage: true, animations: 'disabled' });
    } else {
      await page.screenshot({ path: outPath, animations: 'disabled' });
    }
    return { ok: true };
  } finally {
    await context.close();
  }
}

async function main() {
  if (!fs.existsSync(AUTH_STATE)) {
    console.error(`Auth state file not found at ${AUTH_STATE}.`);
    console.error('Run login-and-save-state.mjs locally first, then copy the file here.');
    process.exit(1);
  }
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const onlyNames = process.env.ONLY_NAMES
    ? new Set(process.env.ONLY_NAMES.split(',').map((s) => s.trim()).filter(Boolean))
    : null;

  let targets = manifest.filter((t) => (ONLY_VERIFIED ? t.verified !== false : true));
  if (onlyNames) {
    targets = targets.filter((t) => onlyNames.has(t.outputName));
  }
  const skipped = manifest.length - targets.length;
  log(`Loaded ${manifest.length} manifest entries — running ${targets.length}` +
      (skipped ? `, skipping ${skipped} unverified (set ONLY_VERIFIED=false to include them).` : '.'));

  const browser = await chromium.launch({ headless: true });
  const results = { ok: [], failed: [] };
  const startedAt = Date.now();

  for (let i = 0; i < targets.length; i++) {
    const t = targets[i];
    const progress = `[${i + 1}/${targets.length}]`;
    let lastError = null;

    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
      try {
        log(`${progress} ${t.outputName} — ${t.route} (attempt ${attempt}/${MAX_ATTEMPTS})`);
        await shootOne(browser, t);
        log(`${progress} ${t.outputName} — saved`);
        results.ok.push(t.outputName);
        lastError = null;
        break;
      } catch (err) {
        lastError = err.message.split('\n')[0];
        log(`${progress} ${t.outputName} — attempt ${attempt} failed: ${lastError}`);
      }
    }

    if (lastError) {
      results.failed.push({ name: t.outputName, route: t.route, error: lastError });
    }

    fs.writeFileSync(
      path.join(OUTPUT_DIR, '_run-summary.json'),
      JSON.stringify({ total: targets.length, done: i + 1, ...results }, null, 2),
    );

    if (i < targets.length - 1 && INTER_ITEM_DELAY_MS > 0) {
      await new Promise((r) => setTimeout(r, INTER_ITEM_DELAY_MS));
    }
  }

  await browser.close();

  const elapsedSec = Math.round((Date.now() - startedAt) / 1000);
  log(`Done in ${elapsedSec}s — ${results.ok.length} succeeded, ${results.failed.length} failed.`);
  if (results.failed.length) {
    log('Failed items:');
    for (const f of results.failed) log(`  - ${f.name} (${f.route}): ${f.error}`);
  }
}

main().catch((err) => {
  console.error('Fatal error:', err);
  process.exit(1);
});
