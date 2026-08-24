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
//
// HARD RULE (user instruction, 2026-08-24): screenshots must crop to a whole meaningful REGION —
// a complete card, dialog, or panel that shows what the feature looks like and does — never a
// single isolated element (one button, one field) and never a blind full-page/fullbrowser dump
// with header/sidebar chrome included. Both look unprofessional; think "how does a real SaaS
// product's help doc crop its screenshots" (a whole dialog, a whole settings card), not "crop as
// tight as technically possible" or "just screenshot the whole page so nothing's missed." Default
// to mode:'element' with a selector that wraps the FULL logical unit (e.g. `.p-dialog` for a whole
// dialog, `.cc-shell` for a whole Command Center tab) — not a sub-element inside it. Only use
// mode:'fullpage'/'viewport' when the entire screen genuinely IS the subject (e.g. a standalone
// public landing/apply page with no other page chrome to exclude).

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
  {
    kb: 'platform-basics', outputName: 'platform-basics__unified-search-records__01',
    route: '/dashboard-v7', mode: 'element', selector: '.us-dialog',
    preActions: [
      { type: 'key', key: '/' }, { type: 'wait', ms: 800 },
      { type: 'click', selector: '.us-mode-btn:has-text("Records")' }, { type: 'wait', ms: 400 },
      { type: 'click', selector: '.us-input' },
      { type: 'type', text: 'report' }, { type: 'wait', ms: 1500 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 600,
    verified: false, note: 'Added 2026-08-25. Selectors/preActions confirmed working — a live capture run against app.lumberlinq.com on 2026-08-24 succeeded mechanically (clicked Records tab, typed "report", captured the dialog cleanly). BUT it showed "No matches found" with no "Pages" group and no "Ask Linc" card, because app.lumberlinq.com is still running the pre-this-session frontend build — today\'s Quick Search changes (tms-ng, committed this session) have not been deployed to the live VPS yet. Do NOT use that captured PNG — it shows stale/incorrect UI. Re-run this entry (and flip to verified:true) only AFTER tms-ng is rebuilt and deployed live with this session\'s changes.',
  },
  {
    kb: 'platform-basics', outputName: 'platform-basics__unified-search-stock__01',
    route: '/dashboard-v7', mode: 'element', selector: '.us-dialog',
    preActions: [
      { type: 'key', key: '/' }, { type: 'wait', ms: 800 },
      { type: 'click', selector: '.us-mode-btn:has-text("Stock")' }, { type: 'wait', ms: 400 },
      { type: 'click', selector: '.us-input' },
      { type: 'type', text: '4in x 3in x 8ft teak' }, { type: 'wait', ms: 1500 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 600,
    verified: false, note: 'Added 2026-08-25. Mode button text "Stock" confirmed same way as Records above. Query text is the exact-size example already documented in platform-basics/user-manual.md\'s own Stock mode section. A live run attempt on 2026-08-24 failed clicking the Stock tab button (30s timeout) even though the sibling Records entry\'s click on the same page worked fine moments earlier — plausibly a transient/server-load issue rather than a selector problem, but re-verify the selector on a real page load before assuming it\'s definitely fine. Also blocked by the same stale-deploy issue as the Records entry above — retry only after tms-ng redeploys live.',
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
    // First capture (2026-08-24) showed every text field empty — real, but useless for a reader
    // trying to see what the form looks like filled in. Selectors are real IDs read directly from
    // affiliate-apply.component.html (#aaEmail/#aaPassword/#aaDisplayName/#aaBusinessName/
    // #aaPhone/#aaNote). Country/Payout currency aren't filled here — they already default to
    // India/INR and showed correctly in the first capture.
    preActions: [
      { type: 'click', selector: '#aaEmail' }, { type: 'type', text: 'demo.partner@example.com' },
      { type: 'click', selector: '#aaPassword' }, { type: 'type', text: 'SecurePass123' },
      { type: 'click', selector: '#aaDisplayName' }, { type: 'type', text: 'Alex Carter' },
      { type: 'click', selector: '#aaBusinessName' }, { type: 'type', text: 'Carter Timber Consulting' },
      { type: 'click', selector: '#aaPhone' }, { type: 'type', text: '+1 555 0142' },
      { type: 'click', selector: '#aaNote' }, { type: 'type', text: 'I run a woodworking supplies blog with 15K monthly readers interested in timber sourcing tools.' },
      { type: 'wait', ms: 400 },
    ],
    viewport: { width: 1600, height: 1400 }, settleMs: 1000,
    verified: true, note: 'Route confirmed (public, noAuth). Full form capture, not cropped to a specific card. Re-verify header icons look like guest state, not logged-in — confirmed via code that noAuth uses a fresh context with no storageState, so this is expected page behavior, not a session leak.',
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

  // ── shipments.md — Private share link, logged-out demo. Real link created live 2026-08-24
  // via create-private-link.mjs against consignment id=15 (LLPD-BL-0012, GreenRiver Sustainable
  // Logs -> Continental Veneer GmbH): short code `30ed04d3`. The create-API's raw response body
  // was a red herring ("/tally-sheet/share/30ed04d3", an internal authenticated deep-link, NOT
  // the real short-code URL) -- confirmed by actually testing both URLs logged out: the real
  // `/s/x/:code` prefix (per CLAUDE.md's Share Link System table) correctly redirects to
  // `/login?shareRedirect=true&returnUrl=...`, exactly matching ShareDispatcherComponent's
  // documented PRIVATE-tier behavior. Cropped to `.login-form-panel` (login.component.html) --
  // the whole right-side card including the "Sign in to view this shared link." banner
  // (`.login-share-redirect-banner`), not the full split-screen page (the left hero panel is
  // unrelated to this screenshot's actual subject).
  {
    kb: 'shipments', outputName: 'shipments__private-link-login-required__01',
    route: '/s/x/30ed04d3', mode: 'element', selector: '.login-form-panel', noAuth: true,
    settleMs: 2500,
    viewport: { width: 1600, height: 1000 },
    verified: true, note: 'Live-tested 2026-08-24: /s/x/30ed04d3 redirects to /login?shareRedirect=true, banner confirmed rendered. Real code, not a placeholder.',
  },

  // ── shipments.md — Share Link "Manage Audience" dialog. IMPORTANT: this dialog only applies
  // to PROTECTED-tier links with audienceType SPECIFIC_EMAILS/SPECIFIC_COMPANIES -- NOT Private
  // (confirmed by reading shipment-list.component.ts:1095-1099: audienceType is only ever set
  // when shareAccessMode === 'PROTECTED'). A real Protected+SpecificEmails link was created live
  // 2026-08-24 on consignment id=15 (via create-protected-link.mjs, kept in this folder) --
  // short code `0a86b7ad`, containing real registered user punj@rikexim.com (NOT a fake email:
  // first attempt used partner@example.com and got a real backend 500, because the field
  // actually requires an existing LumberLinq user's email, not any address -- worth a bug report
  // separately, the 500 should be a clean validation error). That link now persists permanently
  // in this consignment's Shared Links list, so this entry reopens the EXISTING row rather than
  // creating a new one each run (avoids accumulating duplicate links on every dry-run/re-run).
  // Manage Audience button: icon="pi pi-users" (real DOM attribute, confirmed via component
  // source), only rendered on rows with a SPECIFIC_EMAILS/SPECIFIC_COMPANIES audienceType.
  // Cropped to `app-share-link-audience-dialog .p-dialog` -- that Angular component selector is
  // a real DOM tag, more precise than text-matching a generic p-dialog (which double-matched the
  // Shared Links list dialog underneath during live testing).
  {
    kb: 'shipments', outputName: 'shipments__share-link-manage-audience__01',
    route: '/consignments/list', mode: 'element', selector: 'app-share-link-audience-dialog .p-dialog',
    preActions: [
      { type: 'click', selector: 'input[formcontrolname="search"]' }, { type: 'type', text: 'LLPD-BL-0012' },
      { type: 'wait', ms: 1200 },
      { type: 'click', selector: 'tr:has-text("LLPD-BL-0012") button.shp-action-btn[icon="pi pi-share-alt"]' },
      { type: 'waitFor', selector: '.share-links-dialog' }, { type: 'wait', ms: 500 },
      { type: 'click', selector: 'tr:has-text("Specific Email Addresses") button[icon="pi pi-users"] >> nth=0' },
      { type: 'wait', ms: 600 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: true, note: 'Live-tested 2026-08-24 end-to-end: dialog opens correctly, shows real content (punj@rikexim.com listed, Add/Close controls). Screenshot visually confirmed as a clean whole-dialog crop. Trial-and-error during setup left 3 duplicate SPECIFIC_EMAILS links on this consignment (harmless clutter, not cleaned up) -- hence `>> nth=0` to pick a consistent one rather than erroring on ambiguity.',
  },

  // ── shipments.md — Share Link Access Audit panel (app-share-link-audit, mounted at
  // shipments.component.html:1668, only visible in isUpdateMode -- i.e. on the EDIT/form route,
  // NOT the /consignments/consignment-view/:encodedId route, which is a DIFFERENT component
  // (ShipmentViewComponent) confirmed by reading shipments-routing.module.ts:50 directly. The
  // correct edit route is /consignments/:encodedId (line 53 of that file).
  //
  // BLOCKED -- real, reproducible app bug found live 2026-08-24, not a script/selector problem:
  // navigating to /consignments/jedR6doeAx6vVplKNnGJuskX (consignment id=15) hangs forever on
  // the global-page-loader ("Loading...") -- confirmed via TWO separate methods (direct URL nav,
  // AND clicking the real Edit/pencil icon from /consignments/list), both hang identically, no
  // console error, no failed HTTP response logged (only an unrelated benign QR-code library
  // warning about an empty qrdata field). This is consignment id=15 specifically -- not
  // re-tested against a different consignment for lack of remaining time budget this session.
  // Worth a real bug report; not fixable from this script.
  {
    kb: 'shipments', outputName: 'shipments__share-link-access-audit__01',
    route: '/consignments/jedR6doeAx6vVplKNnGJuskX', mode: 'element', selector: '.sla-panel',
    preActions: [
      { type: 'click', selector: '.sla-panel-header' }, { type: 'wait', ms: 1200 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 800,
    verified: false, note: 'BLOCKED: the edit route for consignment id=15 hangs forever on the global page loader, reproduced twice via two different navigation methods, no error logged. Route/selector/click-sequence are all correct per source (shipments.component.html:1668, share-link-audit.component.html:8 for the toggle header) -- this is an app bug, not a script bug. Needs either a fix to whatever is hanging, or re-testing against a different consignment.',
  },

  // ── platform-basics.md — Utility tools. Routes confirmed against app-routing.module.ts:482-528.
  // All 4 use the same `.bpf-card` wrapper class for their actual tool content (calculator.
  // component.html:15 also adds `util-calc-card`, but `.bpf-card` alone matches uniquely on each
  // page). Cropped to the card only, not the generic page header -- the tool itself is the
  // meaningful subject here.
  {
    kb: 'platform-basics', outputName: 'platform-basics__utility-calculator__01',
    route: '/utility/calculator', mode: 'element', selector: '.bpf-card',
    viewport: { width: 1600, height: 1000 }, settleMs: 700,
    verified: true, note: 'Route + selector confirmed against calculator.component.html.',
  },
  {
    kb: 'platform-basics', outputName: 'platform-basics__utility-unit-conversion__01',
    route: '/utility/unit-conversion', mode: 'element', selector: '.bpf-card',
    viewport: { width: 1600, height: 1000 }, settleMs: 700,
    verified: true, note: 'Route + selector confirmed against unit-conversion.component.html:21.',
  },
  {
    kb: 'platform-basics', outputName: 'platform-basics__utility-cost-estimate__01',
    route: '/utility/volume-estimates', mode: 'element', selector: '.bpf-card',
    viewport: { width: 1600, height: 1000 }, settleMs: 700,
    verified: true, note: 'Route + selector confirmed against volume-estimate.component.html:19 (route path says "volume-estimates", app-facing label is "Cost Estimate" per app-routing.module.ts:495).',
  },
  {
    kb: 'platform-basics', outputName: 'platform-basics__utility-slab-generator__01',
    route: '/utility/slab-generator', mode: 'element', selector: '.bpf-card',
    viewport: { width: 1600, height: 1000 }, settleMs: 700,
    verified: true, note: 'Route + selector confirmed against slab-generator.component.html:20.',
  },

  // ── company.md — Company Branding page. Route confirmed app-routing.module.ts:346-357
  // (ROLE_ADMIN + ROLE_REGISTRATION, EXTRAS_ACCESS permission -- shiv qualifies as company
  // ADMIN). `.bpf-card` matches whichever of the two mutually-exclusive states actually renders
  // (locked-upsell vs real form) -- company-branding.component.html:16 and :23, same class on
  // both, gated by *ngIf so only one exists in the DOM at a time.
  {
    kb: 'company', outputName: 'company__branding__01',
    route: '/company/branding', mode: 'element', selector: '.bpf-card',
    viewport: { width: 1600, height: 1000 }, settleMs: 800,
    verified: true, note: 'Route + selector confirmed against company-branding.component.html.',
  },

  // ── account.md or platform-basics.md — Notifications history page (distinct from the already-
  // documented Notification Preferences settings). Route confirmed app-routing.module.ts:140-144,
  // no role/permission gate beyond being logged in. Cropped to `.tms-notif-page`, the whole-page
  // wrapper (header + list), confirmed unique via notifications-page.component.html:1.
  {
    kb: 'account', outputName: 'account__notifications-history__01',
    route: '/notifications', mode: 'viewport',
    // NOT mode:'element' -- `.tms-notif-page` wraps the whole scrollable list (shiv has 29 real
    // notifications), and locator.screenshot() captures the FULL element regardless of viewport,
    // producing an unusable 4650px-tall image (confirmed live 2026-08-24). mode:'viewport' shows
    // just what's naturally visible on load -- the correct "whole region" here, not the full list.
    viewport: { width: 1600, height: 1100 }, settleMs: 800,
    verified: true, note: 'Route confirmed against notifications-page.component.html. viewport mode chosen deliberately after element mode produced an oversized image.',
  },

  // ── subscriptions.md — CORRECTED FINDING 2026-08-24: the "subscription-features" and
  // "subscription-history" CHILD ROUTES (app-routing.module.ts:453,463) are DEAD -- confirmed by
  // reading subscription-view-main.component.html:14-33, which renders its OWN hardcoded 3-tab
  // `<p-tabs>` UI (Subscription / Transactions / Purchase, each wrapping a real component:
  // <app-subscription-opted>, <app-transaction-history>, <app-subscription-package>) regardless
  // of which child URL is active -- there's no <router-outlet> consuming those child routes at
  // all. Live-tested: navigating to /subscriptions/subscription-features timed out waiting for
  // `p-card` because a completely different tabbed UI renders instead. The REAL way to reach
  // Transaction History is clicking the "Transactions" tab from any /subscriptions/* route.
  // Whole tabbed card wrapper: `.bpf-card.subscription-card` (subscription-view-main.component.
  // html:14) -- used for both entries below, cropping header+tabs+active panel together.
  {
    kb: 'subscriptions', outputName: 'subscriptions__overview__01',
    route: '/subscriptions/subscription-opted', mode: 'element', selector: '.subscription-card',
    viewport: { width: 1600, height: 1000 }, settleMs: 800,
    verified: true, note: 'Default tab (index 0, "Subscription") -- confirmed real live content: plan name "Forest", active status, customer code, dates. Replaces the originally-planned "Subscription Features" entry, which does not exist as a real live UI.',
  },
  {
    kb: 'subscriptions', outputName: 'subscriptions__transactions__01',
    route: '/subscriptions/subscription-opted', mode: 'element', selector: '.subscription-card',
    preActions: [
      { type: 'click', selector: 'p-tab:has-text("Transactions")' }, { type: 'wait', ms: 1000 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 800,
    verified: true, note: 'Tab label "Transactions" confirmed via translations.ts:644 (subscription.transactions). p-tab is a real PrimeNG component selector.',
  },

  // ── subscriptions.md — Cancel Auto-Pay dialog. BLOCKED, confirmed live 2026-08-24: the whole
  // `.sov-mandate` section (containing the Cancel Auto-Pay trigger button) is gated by
  // `*ngIf="mandateStatus?.hasSub && ..."` (subscription-opted.component.html:103) -- a LIVE
  // gateway mandate-status API call, completely separate from the `purchase.auto_renewal`
  // database column this session flipped to 1 via SQL earlier. Live-tested: `.sov-mandate`
  // element count is 0 for shiv's account -- the DB flag change had no effect on this UI, exactly
  // as warned. This dialog cannot be reached without a real payment-gateway mandate actually
  // existing for the account, which no SQL fix can fake safely (would risk the same "UI says on
  // but no real subscription backs it" problem flagged earlier this session).
  {
    kb: 'subscriptions', outputName: 'subscriptions__cancel-auto-pay__01',
    route: '/subscriptions/subscription-opted', mode: 'element', selector: '.p-dialog:has-text("Cancel Auto-Pay")',
    preActions: [
      { type: 'click', selector: '.sov-mandate-cancel-btn' }, { type: 'wait', ms: 800 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: false, note: 'BLOCKED: mandateStatus.hasSub is false for shiv\'s account (confirmed live), so the trigger button never renders. Needs a real account with an actual gateway-backed recurring mandate -- not fakeable via the DB flag alone.',
  },

  // ── account.md — Notification Bell dropdown. Real audit finding this session: it's not just a
  // list, it has Accept/Decline buttons on unread invite-type notifications
  // (notification-bell.component.html:47-64). Trigger: `.tms-notif-bell-btn` (real button, header
  // .html:197 mounts <app-notification-bell>). Popover content: `.tms-notif-panel` (the p-popover
  // styleClass) -- PrimeNG popovers render into an overlay appended near the trigger, cropped
  // directly rather than via mode:'viewport' since the panel is a fixed-size, self-contained unit.
  {
    kb: 'account', outputName: 'account__notification-bell__01',
    route: '/dashboard-v7', mode: 'element', selector: '.tms-notif-panel',
    preActions: [
      { type: 'click', selector: '.tms-notif-bell-btn' }, { type: 'wait', ms: 900 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: true, note: 'Selectors confirmed against notification-bell.component.html.',
  },

  // ── platform-basics.md — "Ask Linc" AI Help chatbot. Round 2 audit finding: the real desktop
  // launcher is the bottom-right SpeedDial FAB (app.component.html:217-221, buttonStyleClass=
  // "tms-speed-dial-btn"), not a header icon. Menu items built in buildSpeedDialItems()
  // (app.component.ts:657-676) -- "Linc AI Help" (icon pi-comment) only added when
  // `aiChatEnabled` is true (confirmed true for shiv's company via ai_chat_enabled=1 DB check
  // earlier this session), calls `aiChatWidget.toggleChat()` directly, not a route nav.
  {
    kb: 'platform-basics', outputName: 'platform-basics__ask-linc-speeddial__01',
    route: '/dashboard-v7', mode: 'element', selector: '.p-speeddial',
    preActions: [
      { type: 'click', selector: '.p-speeddial-button' }, { type: 'wait', ms: 600 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: true, note: 'Shows the expanded FAB with its 2 action buttons (Linc AI Help, Support Tickets).',
  },
  {
    kb: 'platform-basics', outputName: 'platform-basics__ask-linc-chat-panel__01',
    route: '/dashboard-v7', mode: 'element', selector: '.ai-chat-sidebar',
    preActions: [
      { type: 'click', selector: '.p-speeddial-button' }, { type: 'wait', ms: 600 },
      { type: 'click', selector: '.p-speeddial-action:has(.pi-comment)' }, { type: 'wait', ms: 1200 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 600,
    verified: true, note: 'Drawer styleClass "ai-chat-sidebar" confirmed against ai-chat-widget.component.html:30 -- same class CLAUDE.md rule 21 already references as a confirmed-working dark-mode selector.',
  },

  // ── inventory.md — Add/Edit Operator dialog. Route confirmed inventory-routing.module.ts:19
  // ("operators", parent "inventory" per the already-confirmed Machines page pattern). Multiple
  // "Add Operator" buttons exist for responsive layouts (component.html:29,58,194) -- `>> nth=0`
  // picks whichever renders first. Dialog has no custom styleClass, so cropped via its real
  // translated header text "Add Operator" (translations.ts:1856).
  {
    kb: 'inventory', outputName: 'inventory__add-operator-dialog__01',
    route: '/inventory/operators', mode: 'element', selector: '.p-dialog:has-text("Add Operator")',
    preActions: [
      { type: 'click', selector: 'button:has-text("Add Operator") >> nth=0' }, { type: 'wait', ms: 700 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: true, note: 'Selectors confirmed against operator-dashboard.component.html.',
  },

  // ── tally-sheets.md — AI Import + regular Import dialogs (Round + Square tally lists).
  // BLOCKED, confirmed live 2026-08-24, genuine permission gap not a script bug: real route
  // confirmed as `/new-tallysheet/view?transportId=<encodedId>` (found by clicking a real TU row's
  // eye icon from `/new-tallysheet/transport-unit/view` -- the Stock Units list, 52 real TUs).
  // Opened a real Round tally (22 real rows, transportId jm0Zu5ZUyviP0xFRmH-R00fe) and confirmed
  // via direct locator counts: `.toolbar-group` (2) and `.pi-save` (1) exist -- the toolbar DOES
  // render -- but `.btn-ai`/`.pi-sparkles` (AI Import) AND `.pi-file-import` (regular Import) are
  // BOTH count:0, while Save renders fine. This matches *appHasPermission="'TALLY_AI_IMPORT'"' and
  // 'TALLY_IMPORT'" gating in tallysheet-list-round.component.html:317,326 exactly -- shiv's
  // account (company ADMIN, but this tenant has rbac_enabled=1) does not hold these two specific
  // granular permissions. Not fixable from this script -- needs either granting shiv these RBAC
  // permissions, or testing against a non-RBAC-restricted account.
  {
    kb: 'tally-sheets', outputName: 'tally-sheets__ai-import-round__01',
    route: '/new-tallysheet/view?transportId=jm0Zu5ZUyviP0xFRmH-R00fe', mode: 'element', selector: '.p-dialog:has-text("AI Tallysheet Import")',
    preActions: [{ type: 'click', selector: '.btn.btn-ai' }, { type: 'wait', ms: 800 }],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: false, note: 'BLOCKED: TALLY_AI_IMPORT permission not granted to shiv (confirmed via live locator counts, see block comment above). Real route/dialog header text confirmed correct against source.',
  },
  {
    kb: 'tally-sheets', outputName: 'tally-sheets__ai-import-square__01',
    route: '/new-tallysheet/view?transportId=jm0Zu5ZUyviP0xFRmH-R00fe', mode: 'element', selector: '.p-dialog:has-text("AI Tallysheet Import")',
    preActions: [{ type: 'click', selector: '.btn.btn-ai' }, { type: 'wait', ms: 800 }],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: false, note: 'BLOCKED, same permission gap as the Round entry above. Route here points at a Round TU as a placeholder -- needs a real Square-type transportId substituted once the permission gap is fixed (tallysheet-square-list.component.html:376-381 has the equivalent Square button, same TALLY_AI_IMPORT gate).',
  },
  {
    kb: 'tally-sheets', outputName: 'tally-sheets__import-dialog__01',
    route: '/new-tallysheet/view?transportId=jm0Zu5ZUyviP0xFRmH-R00fe', mode: 'element', selector: '.p-dialog',
    preActions: [{ type: 'click', selector: '.pi-file-import' }, { type: 'wait', ms: 800 }],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: false, note: 'BLOCKED: TALLY_IMPORT permission not granted to shiv (same confirmed live check as above -- .pi-file-import count was 0).',
  },
];
