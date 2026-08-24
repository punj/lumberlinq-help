# KB Screenshot Capture

Ported from the proven tool at `/home/punj/projects/tms-sb/tools/screenshot-capture` on the VPS
— the one that actually produced the `reports-*`/`shipments__*`/`business-partners__*`
screenshots already in this KB, region-cropped (`mode: 'element'`), and the one that hit a real
rate-limit wall on a 59-item run (17 succeeded, then every request started failing) before a
5-second `INTER_ITEM_DELAY_MS` pause between shots fixed it. `capture.mjs` is that same engine,
unchanged. `manifest.mjs` is new — targets `SCREENSHOT_CHECKLIST.md`'s Priority 1 items instead
of the original tool's list. `login-and-save-state.mjs` and `menu.mjs` are extended/new
(2026-08-24) with a third login mode and an interactive menu — see below.

## Easiest way to run it: the menu

```bash
npm install && npm run install-browser
npm run menu
```
Walks you through: reuse an existing session or log in fresh, which login mode, then runs the
capture. Everything below is what the menu does under the hood, for when you want to run a step
directly instead.

## The three login modes

All three end the same way: an `auth-state.json` file that `capture.mjs` reuses. Pick whichever
fits where you're running and how this account logs in.

**1. Automated** — the script fills the login form itself, headless. The *only* mode that works
on a machine with no display (the VPS). Only works for a plain email/password account, and only
while Turnstile (the login CAPTCHA) is off — a script can't solve a CAPTCHA, and it can't drive
a "Continue with Google" OAuth flow either.
```bash
LUMBERLINQ_EMAIL=you@example.com LUMBERLINQ_PASSWORD='...' node login-and-save-state.mjs --mode=automated
# or pass them as flags instead of env vars:
node login-and-save-state.mjs --mode=automated --email=you@example.com --password='...'
```

**2. Interactive** — a real, script-launched Chromium window opens, you log in yourself, press
Enter when you're on the Dashboard. Since it's a genuine browser being driven by a real human,
**social login, Turnstile, anything works normally here.** Needs a real display, so run this on
your own machine, not the VPS. This is the direct answer to "log in once and never need to
again, even with social login" — no extra setup, already logs in exactly like your everyday
browser would.
```bash
node login-and-save-state.mjs --mode=interactive
```
If `capture.mjs` needs to run on the VPS instead, copy the resulting file there afterward:
`scp auth-state.json punj@62.171.153.182:/path/to/this/folder/auth-state.json`

**3. CDP-attach** — genuinely reuses a Chrome window you already have open, with **zero** login
step, IF you're already logged into LumberLinq in it. The catch: Chrome only allows this if it
was launched with a remote-debugging flag *at startup* — your regular, already-running Chrome
can't be attached to as-is.
```bash
# Fully close Chrome first (check Task Manager — no chrome.exe left), then:
"C:\Program Files\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222
# Log into LumberLinq in that window if you aren't already, then in another terminal:
node login-and-save-state.mjs --mode=cdp-attach
```
Localhost only — this attaches to a browser on the same machine the script runs on, it can't
reach across to a browser on your VPS or vice versa. Doesn't close your Chrome afterward; it's
yours.

## Running on the VPS

```bash
ssh punj@62.171.153.182
cd /path/to/this/folder   # wherever you've deployed/copied this scripts/screenshots folder
npm install
npm run install-browser
cp .env.example .env      # defaults already point at app.lumberlinq.com
```
Then either:
- Log in directly there with mode 1 (automated) if this is a plain email/password account and
  Turnstile is off, **or**
- Log in on your own machine with mode 2 or 3, then `scp auth-state.json` up to the VPS.

Once `auth-state.json` is in place:
```bash
tmux new -s screenshots   # survives an SSH disconnect, and you can watch it live
npm run capture
```

For **Quality Grading** and **Inventory** entries, that account needs Forest-tier access. For
the 3 **affiliate-portal** entries, see the two-pass instructions in `.env.example` — those need
a *different*, already-approved affiliate login entirely.

## Never screenshot admin-only pages

**Hard rule (2026-08-24):** no manifest entry may target a page/component gated to
SUPER_ADMIN/ROOT only (Admin → Companies, Company Support, User Management, etc.). This is a
**public** help site — capturing internal admin tooling here would leak its existence and layout
to any visitor. A normal in-app screen that happens to need an elevated *state* to reach (e.g. an
approved affiliate's own dashboard) is fine; a screen whose whole purpose is platform-operator
tooling is not. Check the real route guard (`RoleGuard`/`@PreAuthorize`) before adding a new
entry — don't assume from the route name alone.

## What actually runs

Only `verified: true` manifest entries run by default (6 of 16 — the routes/triggers actually
confirmed against live component source when this manifest was written). Everything else is
marked `verified: false` with a note on exactly what's unconfirmed — a click target, a tab
label, a whole selector path.
```bash
ONLY_VERIFIED=false npm run capture   # attempt the unverified ones too — expect some failures
ONLY_NAMES=command-center__overview__01 npm run capture   # just one entry, e.g. to retry a failure
```
Fix an entry up in `manifest.mjs` as you confirm it (open the page, right-click → Inspect,
update the `selector`, flip to `verified: true`) — same discipline the original tool used.

## Output

PNGs land flat in `./screenshots/`, named `{kb-category}__{region}__{seq}.png`. Sort/copy each
into `../../public/screenshots/<category>/` afterward — same two-step process the last real
batch used (Aug 7 2026: captured flat, then integrated with a human review pass that caught 2
genuinely mislabeled screenshots before they shipped). Don't skip that review step.

`_run-summary.json` (in the output dir) live-updates after every shot — useful if you reattach
to the tmux session partway through a run. Failed items are listed there and in the final log
output, not just silently dropped.
