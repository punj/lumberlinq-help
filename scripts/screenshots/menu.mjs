// Interactive menu tying login-and-save-state.mjs + capture.mjs together, so you don't need to
// remember flags/env vars. Plain Node readline — no extra dependency for a simple text menu.
//
// Usage: node menu.mjs

import readline from 'node:readline';
import { spawn } from 'node:child_process';
import fs from 'node:fs';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const ask = (q) => new Promise((resolve) => rl.question(q, resolve));

function run(cmd, args, env = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { stdio: 'inherit', env: { ...process.env, ...env } });
    child.on('exit', (code) => (code === 0 ? resolve() : reject(new Error(`${cmd} exited with code ${code}`))));
  });
}

async function main() {
  console.log('════════════════════════════════════════════════════════════');
  console.log(' LumberLinq KB Screenshot Capture');
  console.log('════════════════════════════════════════════════════════════\n');

  const authState = process.env.AUTH_STATE || './auth-state.json';
  if (fs.existsSync(authState)) {
    console.log(`Found an existing session: ${authState}`);
    const reuse = await ask('Reuse it (skip login)? [Y/n] ');
    if (reuse.trim().toLowerCase() !== 'n') {
      console.log('Reusing existing session — skipping straight to capture.\n');
      await runCapture();
      rl.close();
      return;
    }
    const del = await ask(`Delete it and log in fresh? [y/N] `);
    if (del.trim().toLowerCase() === 'y') fs.unlinkSync(authState);
    else { console.log('Keeping existing session; leaving it as-is.'); rl.close(); return; }
  }

  console.log('\nWhere are you running this?');
  console.log('  1) Localhost (this machine has a real display)');
  console.log('  2) VPS / headless server (no display)');
  const where = (await ask('> ')).trim();

  if (where === '2') {
    console.log('\nOn a headless VPS, only AUTOMATED login can work here (no display for a');
    console.log('real browser window, and no way to reuse a Chrome you don\'t have open there).');
    console.log('That only works for a plain email/password account with Turnstile disabled.');
    console.log('If this account uses social login, log in on your LOCAL machine instead (option');
    console.log('1, mode 2 or 3 below), then scp the resulting auth-state.json to the VPS.\n');
    console.log('(Note: this plain menu does not mask input — your password will be visible on');
    console.log(' screen as you type it. Use env vars instead if that matters on this machine:');
    console.log(' LUMBERLINQ_EMAIL=... LUMBERLINQ_PASSWORD=... node login-and-save-state.mjs --mode=automated)');
    const email = await ask('Email: ');
    const password = await ask('Password: ');
    await run('node', ['login-and-save-state.mjs', '--mode=automated', `--email=${email}`, `--password=${password}`]);
    await maybeCapture();
    rl.close();
    return;
  }

  console.log('\nHow do you want to log in?');
  console.log('  1) Automated — script fills the login form itself');
  console.log('     (email/password only, Turnstile must be off, no social login)');
  console.log('  2) Interactive — a real browser window opens, you log in yourself');
  console.log('     (works for social login, Turnstile, anything — recommended if unsure)');
  console.log('  3) Reuse an already-open Chrome window via remote debugging');
  console.log('     (genuinely no login step at all, IF that Chrome was relaunched with');
  console.log('      --remote-debugging-port first and you\'re already logged in there)');
  const mode = (await ask('> ')).trim();

  if (mode === '1') {
    console.log('(Note: password will be visible on screen as you type — use env vars instead');
    console.log(' if that matters here: LUMBERLINQ_EMAIL=... LUMBERLINQ_PASSWORD=... node menu.mjs)');
    const email = await ask('Email: ');
    const password = await ask('Password: ');
    await run('node', ['login-and-save-state.mjs', '--mode=automated', `--email=${email}`, `--password=${password}`]);
  } else if (mode === '3') {
    console.log('\nIs Chrome already running with --remote-debugging-port=9222?');
    console.log('If not: fully close Chrome (check Task Manager for chrome.exe), then run:');
    console.log('  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe" --remote-debugging-port=9222');
    console.log('...log into LumberLinq in that window (or confirm you already are), then continue here.');
    await ask('Press Enter once that\'s done... ');
    const cdpUrl = (await ask('CDP URL [http://localhost:9222]: ')).trim() || 'http://localhost:9222';
    await run('node', ['login-and-save-state.mjs', '--mode=cdp-attach', `--cdp-url=${cdpUrl}`]);
  } else {
    await run('node', ['login-and-save-state.mjs', '--mode=interactive']);
  }

  await maybeCapture();
  rl.close();
}

async function maybeCapture() {
  const go = await ask('\nRun the capture now? [Y/n] ');
  if (go.trim().toLowerCase() !== 'n') await runCapture();
}

async function runCapture() {
  const onlyVerified = await ask('Only run confirmed (verified:true) entries? [Y/n] ');
  const env = onlyVerified.trim().toLowerCase() === 'n' ? { ONLY_VERIFIED: 'false' } : {};
  console.log('\nStarting capture — this paces itself (a few seconds between shots) to avoid');
  console.log('the rate limit, so a full run genuinely takes a while. Progress logs as it goes.\n');
  await run('node', ['capture.mjs'], env);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
