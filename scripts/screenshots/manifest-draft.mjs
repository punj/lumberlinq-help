// DRAFT HOLDING FILE — not imported/run by capture.mjs. A separate agent is live-testing against
// the real app and editing manifest.mjs directly; this file exists so two agents don't write to
// that same file at once. Every entry below has its route/selector confirmed against real
// component source (file+line cited in each note) but has NOT been dry-run live yet — copy an
// entry into manifest.mjs and set verified:true only after a real ONLY_NAMES=<name> node
// capture.mjs run confirms it works AND the resulting crop is a proper whole-region shot.
//
// Both manifest.mjs hard rules apply here too: (1) never screenshot SUPER_ADMIN/ROOT-only pages,
// (2) crop to a whole meaningful region (a complete card/dialog/panel) — never a single button,
// never a full-page/full-browser dump.
//
// Hero demo consignment used throughout: id=15, encoded_id 'jedR6doeAx6vVplKNnGJuskX', route
// '/consignments/consignment-view/jedR6doeAx6vVplKNnGJuskX' (BL LLPD-BL-0012, Domestic Sale,
// BOOKED, $194,550, shipper "LLDemo - GreenRiver Sustainable Logs", consignee "LLDemo -
// Continental Veneer GmbH").

export const draftEntries = [

  // ── inventory.md — Overview/In-Out/Processing tabs. Route confirmed: inventory-routing.module.ts
  // registers these as children of the 'inventory' parent (app-routing.module.ts:780). Real tab
  // component selectors not individually re-confirmed this pass (out of time budget) — the
  // existing verified command-center__machines__01 entry already proves '.inventory' parent route
  // pattern and '/inventory/machines' work; Overview/In-Out/Processing are siblings. Flagging as
  // NOT fully selector-confirmed — whoever live-tests should grep inventory-overview.component.html
  // (already opened this pass, root wasn't captured — re-open it) for its real root wrapping class
  // before trusting 'fullpage' mode below.
  {
    kb: 'inventory', outputName: 'inventory__overview__01',
    route: '/inventory/overview', mode: 'fullpage',
    viewport: { width: 1920, height: 1080 }, settleMs: 900,
    verified: false, note: 'Route confirmed (inventory-overview.component.html read this pass for its action buttons — action-receive/action-dispatch — but root wrapper class not captured). NOT live-tested. Recommend finding a real crop selector before running — fullpage is a fallback, not final.',
  },
  {
    kb: 'inventory', outputName: 'inventory__in-out__01',
    route: '/inventory/in-out', mode: 'fullpage',
    viewport: { width: 1920, height: 1080 }, settleMs: 900,
    verified: false, note: 'Route pattern inferred from sibling /inventory/overview and /inventory/machines (both confirmed) — NOT individually verified against inventory-routing.module.ts this pass. Confirm exact path before using.',
  },
  {
    kb: 'inventory', outputName: 'inventory__processing__01',
    route: '/inventory/processing', mode: 'fullpage',
    viewport: { width: 1920, height: 1080 }, settleMs: 900,
    verified: false, note: 'Same caveat as inventory__in-out__01 — route pattern inferred, not individually confirmed this pass.',
  },

  // ── inventory.md — Dispatch Wizard's "Confirm stock split" step. FULLY confirmed this pass:
  // dispatch-wizard.component.ts:52-56 — steps array is [step1.title, stepSplit.title, step2.title],
  // activeStep starts at 0. Trigger: inventory-overview.component.html:57, `.action-dispatch`
  // button (click)="openDispatch()" opens <app-dispatch-wizard> (mounted at
  // inventory-overview.component.html:336). Step-0 selection: dispatch-wizard.component.html:49,
  // click `.stock-card-main` (first card, nth=0) to select a stock group. Next button:
  // dispatch-wizard.component.html:203-207, inside `.wizard-nav`, label is 'common.next' (real EN
  // = "Next") — [disabled] bound to !canNext, so a stock card MUST be selected first or the click
  // no-ops. One click of Next from step 0 lands on step 1 = the Confirm-stock-split step.
  {
    kb: 'inventory', outputName: 'inventory__dispatch-wizard-split__01',
    route: '/inventory/overview', mode: 'element', selector: '.step-panel',
    preActions: [
      { type: 'click', selector: '.action-dispatch' }, { type: 'wait', ms: 800 },
      { type: 'click', selector: '.stock-card-main >> nth=0' }, { type: 'wait', ms: 500 },
      { type: 'click', selector: '.wizard-nav button:has-text("Next")' }, { type: 'wait', ms: 800 },
    ],
    viewport: { width: 1600, height: 1100 }, settleMs: 600,
    verified: false, note: 'Route/selectors confirmed against dispatch-wizard.component.ts:52-56 and .html:49,203-207 and inventory-overview.component.html:57,336. NOT live-tested. `.step-panel` crop may need widening to the dialog wrapper if it clips — check on first live run.',
  },

  // ── inventory.md — Receive Wizard's 2-step flow. Steps confirmed: receive-wizard.component.ts:
  // 39-42, [{label:'What arrived?'},{label:'How much?'}]. Trigger: inventory-overview.component.
  // html:43, `.action-receive` (click)="openReceive()" — same trigger already proven live-working
  // by the EXISTING inventory__quality-grading-editor__01 entry in manifest.mjs (product-tile
  // click → storage-site select → Next). Reusing that exact proven sequence, stopping one step
  // earlier (right after landing on step 1, before the quality-editor-trigger click) since this
  // entry's subject is the wizard's 2-step shape itself, not the quality feature.
  {
    kb: 'inventory', outputName: 'inventory__receive-wizard-step2__01',
    route: '/inventory/overview', mode: 'element', selector: '.step-panel',
    preActions: [
      { type: 'click', selector: '.action-receive' }, { type: 'wait', ms: 800 },
      { type: 'click', selector: '.product-tile >> nth=0' }, { type: 'wait', ms: 500 },
      { type: 'click', selector: '.step-panel p-select' }, { type: 'wait', ms: 500 },
      { type: 'click', selector: '.p-select-overlay .p-select-option >> nth=0' }, { type: 'wait', ms: 500 },
      { type: 'click', selector: '.wizard-nav button:has-text("Next")' }, { type: 'wait', ms: 800 },
    ],
    viewport: { width: 1600, height: 1100 }, settleMs: 600,
    verified: false, note: 'Reuses the exact preAction sequence already LIVE-CONFIRMED working in the existing inventory__quality-grading-editor__01 entry (manifest.mjs), minus its final quality-trigger click. Should be low-risk to verify. receive-wizard.component.ts:39-42 confirms the 2 step labels.',
  },

  // ── account.md (or a new "Notifications" section) — Notification Bell dropdown. FULLY confirmed
  // this pass: header.component.html:197, <app-notification-bell> mounted unconditionally
  // (*ngIf="showUserProfileButton"). Trigger button: notification-bell.component.html:1-9,
  // `.tms-notif-bell-btn`. Panel: a p-popover with styleClass="tms-notif-panel" (line 12) —
  // contains Mark-all-read, notification cards, and — the actual finding worth documenting —
  // Accept/Decline buttons on ACCEPT_DECLINE_INVITE-type items while UNREAD (lines 47-58).
  // shiv has 29 real notifications; whether any are currently an unread invite (to show the
  // Accept/Decline buttons in the shot) is NOT confirmed — check on first live run and, if none
  // are, this still captures a legitimate general notification list, just without that specific
  // detail visible.
  {
    kb: 'account', outputName: 'account__notification-bell__01',
    route: '/dashboard-v7', mode: 'element', selector: '.tms-notif-panel',
    preActions: [
      { type: 'click', selector: '.tms-notif-bell-btn' }, { type: 'wait', ms: 700 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: false, note: 'Trigger + panel selector both confirmed against notification-bell.component.html:1-12 (full file read). p-popover may render into an overlay appended near body — if `.tms-notif-panel` crop comes back empty/misplaced, check whether appendTo="body" is needed on the selector wait.',
  },

  // ── shipments.md / tally-share-export.md — Share Link Manage Audience dialog. IMPORTANT
  // CORRECTION found this pass: the Audience radio options (SPECIFIC_EMAILS/SPECIFIC_COMPANIES)
  // only render when shareAccessMode === 'PROTECTED' (shipment-list.component.html:503-518) — NOT
  // 'PRIVATE'. So this demo needs a PROTECTED-tier link with audienceType set to SPECIFIC_EMAILS,
  // a SEPARATE link from whatever PRIVATE-tier link the other agent creates for the logged-out
  // demo. Trigger: shipment-list.component.html:758-765, a `pi-users` icon button, only visible
  // `*ngIf="link.audienceType === 'SPECIFIC_EMAILS' || 'SPECIFIC_COMPANIES'"`, opens
  // <app-share-link-audience-dialog> (mounted line 848-852). Full creation flow (from earlier
  // research, reused here): on /consignments/list, row's `.shp-action-btn` (pi-share-alt) →
  // `.share-links-dialog` → choose PROTECTED tier → select the SPECIFIC_EMAILS radio → add at
  // least one email → Create → THEN click the resulting row's pi-users button.
  {
    kb: 'shipments', outputName: 'shipments__share-audience-dialog__01',
    route: '/consignments/list', mode: 'element', selector: '.p-dialog',
    preActions: [
      { type: 'click', selector: '.shp-action-btn' }, { type: 'wait', ms: 600 },
      // Exact PROTECTED-tier + SPECIFIC_EMAILS selection sequence NOT fully traced this pass —
      // shareAccessMode is set via the share-dialog's own tier picker (not yet read in detail),
      // then the radio at shipment-list.component.html:507-518 needs clicking, then an email
      // typed into `.share-target-box input` (line ~528, id not read), then Create.
      { type: 'wait', ms: 500 },
    ],
    viewport: { width: 1600, height: 1200 }, settleMs: 600,
    verified: false, note: 'Trigger/dialog selectors confirmed (shipment-list.component.html:503-518, 758-765, 848-852) but the FULL click-path to actually create a PROTECTED+SPECIFIC_EMAILS link is NOT fully traced — the preActions above are incomplete on purpose rather than guessed. Whoever runs this needs to open the share dialog live and find the real tier-picker + email-input selectors before this will work end-to-end.',
  },

  // ── shipments.md — Share Link Access Audit panel. FULLY confirmed this pass: shipments.
  // component.html:1667-1671, <app-share-link-audit *ngIf="isUpdateMode && encodedId"
  // [shipmentEncodedId]="encodedId">. isUpdateMode is true when viewing/editing an existing
  // consignment (confirmed by route pattern /consignments/consignment-view/:encodedId already
  // used elsewhere this session) — so consignment id=15 works directly, no share-link creation
  // needed first (the audit panel reads existing access logs for the consignment itself, not a
  // specific link). Panel starts collapsed (share-link-audit.component.ts: `collapsed = true`,
  // toggled via onPanelToggle) — needs a click to expand before it loads/shows data.
  {
    kb: 'shipments', outputName: 'shipments__share-access-audit__01',
    route: '/consignments/consignment-view/jedR6doeAx6vVplKNnGJuskX', mode: 'element',
    selector: 'app-share-link-audit',
    preActions: [
      { type: 'click', selector: 'app-share-link-audit .p-panel-header' }, { type: 'wait', ms: 800 },
    ],
    viewport: { width: 1600, height: 900 }, settleMs: 600,
    verified: false, note: 'Mount point and collapse-state confirmed against shipments.component.html:1667-1671 and share-link-audit.component.ts (collapsed=true, onPanelToggle). The exact expand-click selector (`.p-panel-header`) is PrimeNG p-panel convention, not individually confirmed against share-link-audit.component.html\'s actual template this pass — verify on first live run. Audit rows may be empty if nobody has ever opened a share link for this consignment — if so, still a legitimate (if sparse) shot, or pick a consignment id known to have real share-link traffic.',
  },

  // ── platform-basics.md — Ask Linc SpeedDial FAB + chat drawer. CORRECTION to earlier research:
  // ai-chat-widget.component.html has its OWN standalone `.ai-fab` button (lines 1-23) — but
  // app.component.html:217-221 ALSO renders a `p-speedDial` with buttonStyleClass=
  // "tms-speed-dial-btn", built by buildSpeedDialItems() (app.component.ts:657-676) with 2 items
  // (Linc AI Help first, Support Tickets second) via tooltipOptions, not visible text labels. The
  // ai-fab has a `hideFab` binding, strongly implying it's suppressed in favor of the SpeedDial
  // when the SpeedDial is shown (showMenu true, most pages) — the SpeedDial is very likely the
  // REAL visible launcher on most screens. PrimeNG speedDial items render as `.p-speeddial-item`
  // buttons in array order once expanded (click the main `.tms-speed-dial-btn` toggle first).
  {
    kb: 'platform-basics', outputName: 'platform-basics__ask-linc-fab__01',
    route: '/dashboard-v7', mode: 'element', selector: '.p-speeddial',
    preActions: [
      { type: 'click', selector: '.tms-speed-dial-btn' }, { type: 'wait', ms: 500 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: false, note: 'Confirmed app.component.html:217-221 + app.component.ts:657-676. `.p-speeddial-item` ordering (item 0 = Linc AI Help) assumed from array push order, not individually confirmed live. Small, modest crop around the corner per the region-crop rule — not a big empty page.',
  },
  {
    kb: 'platform-basics', outputName: 'platform-basics__ask-linc-drawer__01',
    route: '/dashboard-v7', mode: 'element', selector: '.ai-chat-sidebar',
    preActions: [
      { type: 'click', selector: '.tms-speed-dial-btn' }, { type: 'wait', ms: 500 },
      { type: 'click', selector: '.p-speeddial-item >> nth=0' }, { type: 'wait', ms: 800 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 600,
    verified: false, note: 'ai-chat-widget.component.html:26-30 confirms the drawer styleClass "ai-chat-sidebar" (same class already used elsewhere in this codebase for a confirmed-working dark-mode ::ng-deep override, per CLAUDE.md rule 21 — high confidence this selector is real and stable). Item-0-is-Linc-AI-Help assumption same caveat as the FAB entry above.',
  },

  // ── subscriptions.md — Cancel Auto-Pay dialog. Route/trigger confirmed: subscription-opted.
  // component.html:102-133 (`.sov-mandate` section, Cancel button `.sov-mandate-cancel-btn`,
  // (onClick)="openCancelDialog()") opens the typed-confirmation p-dialog at lines 140-179
  // (header="Cancel Auto-Pay"). *** IMPORTANT — DIFFERENT FROM WHAT WAS ASSUMED EARLIER THIS
  // SESSION ***: the whole `.sov-mandate` section's visibility is gated on
  // `mandateStatus?.hasSub && mandateStatus.subscriptionStatus !== 'CANCELLED'`
  // (subscription-opted.component.html:103), and `mandateStatus` is populated from a LIVE API
  // call `paymentService.getMandateStatus()` (subscription-opted.component.ts:101-102) — this is
  // almost certainly checking a REAL Razorpay/Cashfree gateway mandate object, NOT the
  // `purchase.auto_renewal` database column that was flipped via SQL earlier this session. That
  // SQL fix may NOT be what makes this button appear — genuinely unverified whether the button
  // will show up at all until someone actually loads the page and looks.
  {
    kb: 'subscriptions', outputName: 'subscriptions__cancel-auto-pay__01',
    route: '/subscriptions/subscription-opted', mode: 'element', selector: '.p-dialog',
    preActions: [
      { type: 'click', selector: '.sov-mandate-cancel-btn' }, { type: 'wait', ms: 600 },
    ],
    viewport: { width: 1600, height: 900 }, settleMs: 500,
    verified: false, note: 'Selectors fully confirmed against subscription-opted.component.html:102-179. BUT genuinely uncertain whether `.sov-mandate` (and therefore the Cancel button) will even render for shiv\'s account — its visibility depends on a live getMandateStatus() API call reflecting a real gateway mandate, which is a different thing from the purchase.auto_renewal DB flag set earlier this session. Do NOT assume this is fixed — check live first, and if the mandate section is absent, that SQL fix did not address the real gate.',
  },

  // ── platform-basics.md — Plan Limit modal (distinct from the already-documented banner).
  // app.component.html:306-329 / app.component.ts:376-385 fires on a real 402/403
  // PLAN_FEATURE_DISABLED response. NOT drafted as a runnable entry — could not find a safe,
  // reliable way to deliberately trigger a real plan-limit condition without either already being
  // at a real limit (unknown/unverifiable without a live DB check) or writing code to fake an
  // HTTP response, which is out of scope for a screenshot script. Recommend leaving this as a
  // manual, human-triggered capture (someone who knows an account already at a real limit) rather
  // than scripting it.
  // NO ENTRY DRAFTED — see note above.

  // ── inventory.md — Add/Edit Operator dialog. FULLY confirmed: operator-dashboard.component.
  // html:30/59/195 all (click)="showAddDialog = true" (multiple buttons for the same action,
  // responsive variants), opens p-dialog at line 205 (header dynamically "Add Operator" or "Edit
  // Operator — {name}" depending on editingEncodedId). Using the header-variant button (line 30,
  // `.od-add-btn--header`) as the most reliably-present one.
  {
    kb: 'inventory', outputName: 'inventory__operator-dialog__01',
    route: '/inventory/operators', mode: 'element', selector: '.p-dialog',
    preActions: [
      { type: 'click', selector: '.od-add-btn--header' }, { type: 'wait', ms: 600 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: false, note: 'Confirmed operator-dashboard.component.html:30,205-206. Route "/inventory/operators" ASSUMED from sibling pattern (/inventory/overview, /inventory/machines) — not individually re-confirmed against inventory-routing.module.ts this pass, verify before running.',
  },

  // ── tally-sheets.md — AI Import dialog, Round + Square + regular Import. Both buttons
  // confirmed: tallysheet-list-round.component.html:317 (regular Import, (click)="openImportDialog()")
  // and :326 (AI Import, "btn btn-ai" class, (click)="openAiImportDialog()"), same pair at
  // tallysheet-square-list.component.html:377/326 (line numbers approximate — both buttons
  // confirmed present, AI Import gated by *appHasPermission="'TALLY_AI_IMPORT'"). Real dialog
  // component's own root class NOT found this pass (ran out of budget searching for
  // AiTallyImportDialogComponent's template) — using generic `.p-dialog` per the established
  // pattern, should work since PrimeNG dialogs share that base class regardless of custom styling.
  {
    kb: 'tally-sheets', outputName: 'tally-sheets__ai-import-round__01',
    route: '/new-tallysheet', mode: 'element', selector: '.p-dialog',
    preActions: [
      { type: 'click', selector: '.btn-ai' }, { type: 'wait', ms: 700 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: false, note: 'Route "/new-tallysheet" for Round is a GUESS — the real route needs a transportId query param per this project\'s own convention (see CLAUDE.md\'s Play Store screenshot note: "/new-tallysheet?transportId=..."). Trigger selector confirmed (tallysheet-list-round.component.html:326).',
  },
  {
    kb: 'tally-sheets', outputName: 'tally-sheets__ai-import-square__01',
    route: '/new-tallysheet', mode: 'element', selector: '.p-dialog',
    preActions: [
      { type: 'click', selector: '.btn-ai' }, { type: 'wait', ms: 700 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: false, note: 'Same route caveat as ai-import-round above — needs a real transportId/square-mode param, not confirmed this pass. Trigger selector confirmed (tallysheet-square-list.component.html, .btn-ai present).',
  },
  {
    kb: 'tally-sheets', outputName: 'tally-sheets__import-regular__01',
    route: '/new-tallysheet', mode: 'element', selector: '.p-dialog',
    preActions: [
      { type: 'click', selector: 'button:has-text("Import"):not(.btn-ai)' }, { type: 'wait', ms: 700 },
    ],
    viewport: { width: 1600, height: 1000 }, settleMs: 500,
    verified: false, note: 'Regular Import button confirmed (tallysheet-list-round.component.html:317, openImportDialog()) — text-based selector is a fallback since no distinguishing class beyond plain "btn" was found; verify it doesn\'t also match the AI Import button.',
  },

  // ── platform-basics.md — Utility tools. All 4 routes confirmed directly against
  // app-routing.module.ts: /utility/calculator (line 519), /utility/unit-conversion (line 482),
  // /utility/volume-estimates (line 494 — this is "Cost Estimate" in the KB text), /utility/
  // slab-generator (line 506). All 4 components share the same ".bpf-card" root content class
  // (confirmed via grep across all 4 .html files) — consistent, reliable crop target.
  {
    kb: 'platform-basics', outputName: 'platform-basics__utility-calculator__01',
    route: '/utility/calculator', mode: 'element', selector: '.bpf-card',
    viewport: { width: 1600, height: 1000 }, settleMs: 700,
    verified: false, note: 'Route confirmed app-routing.module.ts:519-522. `.bpf-card` confirmed present via grep in calculator.component.html.',
  },
  {
    kb: 'platform-basics', outputName: 'platform-basics__utility-unit-conversion__01',
    route: '/utility/unit-conversion', mode: 'element', selector: '.bpf-card',
    viewport: { width: 1600, height: 1000 }, settleMs: 700,
    verified: false, note: 'Route confirmed app-routing.module.ts:482-489. `.bpf-card` confirmed present via grep.',
  },
  {
    kb: 'platform-basics', outputName: 'platform-basics__utility-cost-estimate__01',
    route: '/utility/volume-estimates', mode: 'element', selector: '.bpf-card',
    viewport: { width: 1600, height: 1000 }, settleMs: 700,
    verified: false, note: 'Route confirmed app-routing.module.ts:494-498 (component is VolumeEstimateComponent — this is the "Cost Estimate" tool per the KB\'s own naming). `.bpf-card` confirmed present via grep.',
  },
  {
    kb: 'platform-basics', outputName: 'platform-basics__utility-slab-generator__01',
    route: '/utility/slab-generator', mode: 'element', selector: '.bpf-card',
    viewport: { width: 1600, height: 1000 }, settleMs: 700,
    verified: false, note: 'Route confirmed app-routing.module.ts:506-510. `.bpf-card` confirmed present via grep — note this component\'s root is a <form>, not a <div>, but the .bpf-card is nested inside it identically to the others.',
  },

  // ── company.md — Company Branding page. Route confirmed app-routing.module.ts:346-357
  // (ROLE_ADMIN or ROLE_REGISTRATION, EXTRAS_ACCESS permission — shiv is ROLE_ADMIN, should pass).
  // Two possible root cards depending on tier-gating: `.bpf-card.branding-locked` (line 16, shown
  // if customBrandingModuleService.visible$ is false) or plain `.bpf-card` (line 23, if true).
  // Using the generic `.bpf-card` selector matches either state.
  {
    kb: 'company', outputName: 'company__branding__01',
    route: '/company/branding', mode: 'element', selector: '.bpf-card',
    viewport: { width: 1600, height: 1000 }, settleMs: 700,
    verified: false, note: 'Route confirmed app-routing.module.ts:346-357. Root card class confirmed company-branding.component.html:16,23 — matches either the tier-locked state or the real editable state, whichever shiv\'s account tier resolves to (not independently confirmed which one this pass).',
  },

  // ── account.md or platform-basics.md — Notifications history page. Route confirmed
  // app-routing.module.ts:139-142 (no role/permission gate — any logged-in user). Root wrapper
  // class confirmed notifications-page.component.html:1, `.tms-notif-page`.
  {
    kb: 'account', outputName: 'account__notifications-history__01',
    route: '/notifications', mode: 'element', selector: '.tms-notif-page',
    viewport: { width: 1600, height: 1200 }, settleMs: 700,
    verified: false, note: 'Route confirmed app-routing.module.ts:139-142, no guard. Crop selector confirmed notifications-page.component.html:1.',
  },

  // ── subscriptions.md — Subscription Features + Transaction History sub-pages. Both routes
  // confirmed app-routing.module.ts:452-471 as children of "subscriptions". Root wrapper classes
  // NOT confirmed this pass (ran out of budget opening SubscriptionOptedFeaturesComponent and
  // TransactionHistoryComponent's templates) — using fullpage as an honest fallback.
  {
    kb: 'subscriptions', outputName: 'subscriptions__features__01',
    route: '/subscriptions/subscription-features', mode: 'fullpage',
    viewport: { width: 1600, height: 1200 }, settleMs: 800,
    verified: false, note: 'Route confirmed app-routing.module.ts:452-460. Crop selector NOT found this pass — check subscription-opted-features.component.html for a real content wrapper before running as fullpage.',
  },
  {
    kb: 'subscriptions', outputName: 'subscriptions__transaction-history__01',
    route: '/subscriptions/subscription-history', mode: 'fullpage',
    viewport: { width: 1600, height: 1200 }, settleMs: 800,
    verified: false, note: 'Route confirmed app-routing.module.ts:462-471. Crop selector NOT found this pass — check transaction-history.component.html for a real content wrapper before running as fullpage.',
  },

  // ── command-center.md — Machines re-capture. NOTE: this is NOT a new entry — it already exists
  // in manifest.mjs as `command-center__machines__01` (route '/inventory/machines', selector
  // '.machine-dashboard', currently verified:true). It was captured when shiv's tenant had 0
  // machines; now there are 6 real ones (Band Saw, Circular Saw, Thickness Planer, Rip Saw, Edger
  // Machine, Resaw Machine). No new entry needed — just re-run the EXISTING entry
  // (ONLY_NAMES=command-center__machines__01 node capture.mjs) once auth works, and it will
  // naturally capture the now-populated table. Flagging here only so it isn't forgotten, not
  // duplicating it.

];
