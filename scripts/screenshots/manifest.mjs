// Screenshot targets for SCREENSHOT_CHECKLIST.md's Priority 1 items (the ones reachable through
// a normal browser session — see that file for the 4 Offline Mode items and 3 affiliate-portal
// items this deliberately can't/doesn't cover well).
//
// Same entry format as the original tool (tms-sb/tools/screenshot-capture/manifest.mjs) — see
// that file's own header comment for the full field reference. Key field: `verified` — true
// only where the route AND selector/trigger were actually confirmed against the live component
// source THIS session (not guessed, not carried over from an assumption). Everything else is
// `verified: false` with a note on what's unconfirmed. Run with ONLY_VERIFIED=false to attempt
// the unverified ones too — expect some to need a selector fix first.
//
// None of these newer features (Command Center, Affiliate, Account Details' new sections,
// Unified Search) have the #tms-* stable element IDs the original manifest relied on — those
// IDs were added for the Product Tour feature, before any of this existed. So most entries here
// use mode:'fullpage' or 'viewport' (no element selector needed) rather than a guessed ID.
//
// HARD RULE (user instruction, 2026-08-24): NEVER add a manifest entry for any page/component
// gated to SUPER_ADMIN or ROOT only (Admin → Companies, Admin → Company Support, Admin → User
// Management, the "Admin" menu section generally, etc.). This is a PUBLIC help site — capturing
// internal admin tooling here would leak its existence/layout to anyone. Regular in-app screens
// that happen to need an elevated role to reach a specific STATE (e.g. an approved-affiliate
// dashboard) are fine; screens whose entire purpose is platform-operator/admin tooling are not,
// full stop. Verify a candidate route's actual guard (RoleGuard/@PreAuthorize) before adding it,
// don't assume from the route name alone.

export const manifest = [
  // ── company/application-settings-payment-reminders.md ─────────────────────────────────
  // Fully confirmed 2026-08-24 against application-settings.component.ts: activeKey defaults
  // to 'paymentReminders' (line 34) — it's the FIRST/default nav item, no click needed at all.
  // Cropped to `.as-shell` (nav rail + active panel, application-settings.component.html:1)
  // instead of a fullpage shot with the app header.
  {
    kb: 'company', outputName: 'company__payment-reminders__01',
    route: '/settings/application', mode: 'element', selector: '.as-shell',
    viewport: { width: 1920, height: 1080 }, settleMs: 900,
    verified: true, note: 'Payment Reminders confirmed as the default-shown section (activeKey initializer) — no click preAction needed.',
  },

  // ── command-center.md — route confirmed (app-routing.module.ts:839). Tab structure fully
  // confirmed 2026-08-24 against command-center.component.html/.ts: 5 plain <button> tabs inside
  // nav.cc-tabs, each with (click)="setTab('key')"; real EN labels are "Overview" / "Inventory" /
  // "Floor & Yield" (not just "Floor") / "Money" / "Consignments" (translations.ts:1988-1992);
  // default activeTab is 'overview' (component.ts:30). Cropped to `.cc-shell` — the outer div
  // wrapping masthead+tabs+active panel — so the crop keeps tab-selection context, not just the
  // bare panel. ─────────────────────────────────────────────────────────────────────────────
  { kb: 'command-center', outputName: 'command-center__overview__01', route: '/command-center', mode: 'element', selector: '.cc-shell', viewport: { width: 1920, height: 1080 }, settleMs: 900, verified: true, note: 'Default activeTab confirmed as overview (command-center.component.ts:30) — no click needed.' },
  { kb: 'command-center', outputName: 'command-center__inventory__01', route: '/command-center', mode: 'element', selector: '.cc-shell', preActions: [{ type: 'click', selector: '.cc-tabs button:has-text("Inventory")' }, { type: 'wait', ms: 800 }], viewport: { width: 1920, height: 1080 }, settleMs: 900, verified: true },
  { kb: 'command-center', outputName: 'command-center__floor__01', route: '/command-center', mode: 'element', selector: '.cc-shell', preActions: [{ type: 'click', selector: '.cc-tabs button:has-text("Floor & Yield")' }, { type: 'wait', ms: 800 }], viewport: { width: 1920, height: 1080 }, settleMs: 900, verified: true },
  { kb: 'command-center', outputName: 'command-center__money__01', route: '/command-center', mode: 'element', selector: '.cc-shell', preActions: [{ type: 'click', selector: '.cc-tabs button:has-text("Money")' }, { type: 'wait', ms: 800 }], viewport: { width: 1920, height: 1080 }, settleMs: 900, verified: true },
  { kb: 'command-center', outputName: 'command-center__consignments__01', route: '/command-center', mode: 'element', selector: '.cc-shell', preActions: [{ type: 'click', selector: '.cc-tabs button:has-text("Consignments")' }, { type: 'wait', ms: 800 }], viewport: { width: 1920, height: 1080 }, settleMs: 900, verified: true },
  // Machines page — route confirmed directly this session (inventory-routing.module.ts:20,
  // parent path "inventory" registered in app-routing.module.ts:780). Cropped to `.machine-
  // dashboard` (machine-dashboard.component.html:3, confirmed 2026-08-24) instead of a
  // fullpage shot — that div wraps just the page's own header-strip+table, no app chrome.
  { kb: 'command-center', outputName: 'command-center__machines__01', route: '/inventory/machines', mode: 'element', selector: '.machine-dashboard', viewport: { width: 1920, height: 1080 }, settleMs: 1000, verified: true },

  // ── platform-basics.md — Unified Search (replaces the old separate Quick Search/Global
  //    Search checklist entries — confirmed merged this session, unified-search.component.ts).
  //    Key corrected 2026-08-24: a real captured Keyboard Shortcuts dialog (see
  //    platform-basics__keyboard-shortcuts__01) proved the actual "Open search" trigger is "/"
  //    — NOT Ctrl+K as this entry originally assumed. That wrong key is why the first capture
  //    attempt silently rendered the plain Dashboard with no dialog at all. "Open Calculator" is
  //    separately Ctrl+Alt+C per that same dialog — used below for the calculator-tab entry. ──
  {
    kb: 'platform-basics', outputName: 'platform-basics__unified-search-auto__01',
    route: '/dashboard-v7', mode: 'element', selector: '.us-dialog',
    preActions: [{ type: 'key', key: '/' }, { type: 'wait', ms: 1000 }],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: true, note: '"/" trigger confirmed via a real captured Keyboard Shortcuts dialog (corrected from an earlier wrong Ctrl+K guess). Cropped to `.us-dialog` (unified-search.component.html:5) instead of the whole viewport.',
  },
  {
    kb: 'platform-basics', outputName: 'platform-basics__unified-search-calculator__01',
    route: '/dashboard-v7', mode: 'element', selector: '.us-dialog',
    preActions: [{ type: 'key', key: 'Control+Alt+c' }, { type: 'wait', ms: 1000 }],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: true, note: '"Open Calculator" = Ctrl+Alt+C, confirmed via the same real Keyboard Shortcuts dialog capture — opens the calculator mode directly, no tab click needed. Cropped to `.us-dialog`.',
  },

  // ── platform-basics.md — Keyboard Shortcuts dialog. "?" trigger confirmed via a code comment
  //    in header.component.html directly above <app-keyboard-shortcuts>. ────────────────────
  {
    kb: 'platform-basics', outputName: 'platform-basics__keyboard-shortcuts__01',
    route: '/dashboard-v7', mode: 'element', selector: '.ks-dialog',
    preActions: [{ type: 'key', key: 'Shift+Slash' }, { type: 'wait', ms: 1000 }],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: true, note: '"?" trigger confirmed via header.component.html\'s own comment above <app-keyboard-shortcuts>. Cropped to `.ks-dialog` (keyboard-shortcuts.component.html:2) instead of the whole viewport.',
  },

  // ── platform-basics.md — Product Tour. Trigger button ID confirmed directly this session
  //    (header.component.html: id="tms-tour-help"). The resulting popover is driver.js's own
  //    generic .driver-popover class (used by this app elsewhere), reasonably reliable. ──────
  {
    kb: 'platform-basics', outputName: 'platform-basics__product-tour-step__01',
    route: '/dashboard-v7', mode: 'viewport',
    preActions: [{ type: 'click', selector: '#tms-tour-help' }, { type: 'wait', ms: 1200 }],
    waitFor: '.driver-popover',
    viewport: { width: 1600, height: 1000 }, settleMs: 400,
    verified: true,
  },

  // ── account.md — Notification Preferences + Danger Zone. Both fully confirmed 2026-08-24
  // against account-details.component.html/.ts: both sections are gated by *ngIf="isProfileRoute",
  // which is true for EITHER /profile or /edit/account-details (component.ts:1375) — so the
  // route was always fine, only the crop target was unconfirmed. Real EN legend text confirmed
  // via translations.ts ("Notification Preferences" / "Danger Zone"); each renders as its own
  // <p-fieldset>, so `:has-text()` picks the right one without needing a scroll-to-text hack. ──
  {
    kb: 'account', outputName: 'account__notification-preferences__01',
    route: '/edit/account-details', mode: 'element', selector: 'p-fieldset:has-text("Notification Preferences")',
    viewport: { width: 1600, height: 1400 }, settleMs: 800,
    verified: true,
  },
  {
    kb: 'account', outputName: 'account__danger-zone__01',
    route: '/edit/account-details', mode: 'element', selector: 'p-fieldset:has-text("Danger Zone")',
    viewport: { width: 1600, height: 1600 }, settleMs: 800,
    verified: true, note: 'Captures the Danger Zone panel itself only — deliberately does not click into the delete-account confirmation flow (real, consequential action, not something to automate).',
  },

  // ── inventory.md — Quality Grading editor. Real navigation path fully traced and LIVE-TESTED
  // 2026-08-24 (receive-wizard.component.html): route '/inventory/overview' → click
  // `.action-receive` ("Stock In") → wizard opens on step 0 → a live diagnostic run confirmed
  // the wizard opens fine and shows a real product-tile grid, but the first full attempt timed
  // out on the Next-button click — turned out Next stays a real disabled <button> (Playwright's
  // actionability check waits for enabled, then times out) until a REQUIRED "Storage site"
  // `p-select` (line 47-59, no default value) is also chosen, not just a product tile. Added the
  // two extra clicks needed to open that dropdown and pick its first real option
  // (`.p-select-option`, confirmed against primeng-select.mjs's own SelectClasses). The quality
  // field itself only exists on STEP 1, gated by *ngIf="qualityService.qualityEnabled$ | async"
  // — an ALPHA, tier-gated feature (CLAUDE.md package-tier-module-gating) — so this still needs
  // one more live run to confirm Quality is actually enabled for the capture tenant; if it
  // isn't, the trigger simply won't exist and this entry will fail cleanly rather than hang.
  {
    kb: 'inventory', outputName: 'inventory__quality-grading-editor__01',
    route: '/inventory/overview', mode: 'viewport',
    preActions: [
      { type: 'click', selector: '.action-receive' }, { type: 'wait', ms: 800 },
      { type: 'click', selector: '.product-tile >> nth=0' }, { type: 'wait', ms: 500 },
      { type: 'click', selector: '.step-panel p-select' }, { type: 'wait', ms: 500 },
      { type: 'click', selector: '.p-select-overlay .p-select-option >> nth=0' }, { type: 'wait', ms: 500 },
      { type: 'click', selector: '.wizard-nav button:has-text("Next")' }, { type: 'wait', ms: 800 },
      { type: 'click', selector: '.quality-grade-editor-trigger' }, { type: 'wait', ms: 800 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: false, note: 'CONFIRMED 2026-08-24 via two live runs with per-action error logging: every step through clicking Next (open wizard, pick product, pick storage site, advance to step 1) succeeds cleanly — only the final `.quality-grade-editor-trigger` click times out, meaning the quality field never renders at all. This matches *ngIf="qualityService.qualityEnabled$ | async" being false: Quality is simply not enabled for the capture account\'s tenant tier. Not fixable by adjusting this script — needs either enabling Quality for this tenant, or running against a different tenant that has it.',
  },

  // ── affiliate-program.md — routes confirmed directly against app-routing.module.ts this
  //    session (join-as-affiliate is PUBLIC — noAuth:true; the other three need a real approved
  //    affiliate account, a different login from the main capture run — see AFFILIATE_AUTH_STATE
  //    in .env.example. Left verified:false since no selector/crop was confirmed, only the
  //    route — fullpage mode sidesteps needing one, but a human should review the result. ─────
  {
    kb: 'affiliate-program', outputName: 'affiliate-program__apply-form__01',
    route: '/join-as-affiliate', mode: 'fullpage', noAuth: true,
    viewport: { width: 1600, height: 1400 }, settleMs: 1000,
    verified: true, note: 'Route confirmed (public, noAuth). Full form capture, not cropped to a specific card.',
  },
  {
    kb: 'affiliate-program', outputName: 'affiliate-program__verification-page__01',
    route: '/affiliate/verification', mode: 'fullpage',
    viewport: { width: 1600, height: 1600 }, settleMs: 1000,
    verified: false, note: 'Route confirmed; needs a real APPROVED affiliate login (ROLE_AFFILIATE), not the main capture account — see AFFILIATE_AUTH_STATE.',
  },
  {
    kb: 'affiliate-program', outputName: 'affiliate-program__payout-account-form__01',
    route: '/affiliate/payout-account', mode: 'fullpage',
    viewport: { width: 1600, height: 1200 }, settleMs: 1000,
    verified: false, note: 'Route confirmed; same affiliate-login requirement as verification-page above.',
  },
  {
    kb: 'affiliate-program', outputName: 'affiliate-program__dashboard__01',
    route: '/affiliate/dashboard', mode: 'fullpage',
    viewport: { width: 1600, height: 1200 }, settleMs: 1000,
    verified: false, note: 'Route confirmed; same affiliate-login requirement as verification-page above.',
  },
];
