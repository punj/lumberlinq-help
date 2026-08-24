# Screenshot Checklist

Tracks KB screenshots that are stale or missing because of a shipped app change, pending a batch
re-shoot. Per `CLAUDE.md` (main workspace root): KB **text** is updated immediately per change;
screenshots are intentionally deferred and batched. Log every pending item here the moment the
underlying change ships — don't wait for the re-shoot to record it.

**Priority 1 — no screenshot exists at all.** A reader hits a wall of text with nothing to look
at. Do these first — they're the ones actually making an article harder to follow, not just
slightly out of date.

**Priority 2 — a screenshot exists but is now stale.** The reader still has something to look at,
just not 100% accurate to the current UI. Lower urgency.

When a re-shoot batch happens, replace the screenshot file(s), then move the corresponding row(s)
from **Pending** to **Done** (keep them, don't delete — this file is the history).

## Pending — Priority 1 (no screenshot exists yet)

| Date | Article / Section | Screenshot path | Reason |
|------|--------------------|------------------|--------|
| 2026-08-18 | Application Settings — Payment Reminders | `/screenshots/company/application-settings-payment-reminders.png` | New page shipped (sb v5.22.0/ng v5.36.0) — first capture |
| 2026-08-19 | Mill Command Center — all sections | `/screenshots/command-center/command-center__overview__01.png` (+ inventory/floor/money/consignments tabs, and machines page) | Brand-new page (ng v5.42.0/sb v5.28.0) — first capture for every tab plus Machines CRUD |
| 2026-08-19 | Dashboard, Utility, Storage & Support — Quick Search | `/screenshots/platform-basics/quick-search__overlay__01.png` | New feature — overlay + parsed-chip row, first capture (also capture the "PENDING STOCK-IN" result group and "Did you mean?" fuzzy-match pick-list in the same session, both added after this feature originally shipped) |
| 2026-08-19 | Dashboard, Utility, Storage & Support — Ask AI | `/screenshots/platform-basics/quick-search__ask-ai__01.png` | New feature — Ask AI toggle, credit usage display, threshold toast, first capture |
| 2026-08-20 | Dashboard, Utility, Storage & Support — Global Search | `/screenshots/platform-basics/global-search__overlay__01.png` | Brand-new feature (ng v5.44.22/sb v5.30.7) — grouped results overlay across all 6 record types, first capture |
| 2026-08-20 | Dashboard, Utility, Storage & Support — Global Search inline math | `/screenshots/platform-basics/global-search__math-result__01.png` | Brand-new feature — the "= 450" inline computed-answer state, first capture |
| 2026-08-20 | Dashboard, Utility, Storage & Support — Global Search calculator | `/screenshots/platform-basics/global-search__calculator__01.png` | Brand-new feature — the calculator dialog opened from Global Search, first capture |
| 2026-08-20 | Dashboard, Utility, Storage & Support — Keyboard Shortcuts | `/screenshots/platform-basics/keyboard-shortcuts__dialog__01.png` | Brand-new feature — the "?" shortcuts cheat-sheet dialog, first capture |
| 2026-08-24 | Account — Notification Preferences | `/screenshots/account/account-details__notification-preferences__01.png` | Existing feature documented for the first time — navigate to `app.lumberlinq.com/edit/account-details` (logged in, any role), scroll to Notification Preferences panel |
| 2026-08-24 | Account — Self-Delete Account (Danger Zone) | `/screenshots/account/account-details__danger-zone__01.png` | Existing feature documented for the first time — capture the Danger Zone panel plus the 3-step delete confirmation dialog (sole-admin warning / assign-admin / final email confirm). Navigate to `app.lumberlinq.com/edit/account-details` |
| 2026-08-24 | Dashboard, Utility, Storage & Support — Product Tour | `/screenshots/platform-basics/product-tour__step__01.png` | Existing feature documented for the first time — capture one representative driver.js step overlay from the global tour (triggered via the pulsing "?" help icon in the header, or Profile menu → Product Tour) |
| 2026-08-24 | Inventory — Quality Grading (ALPHA) | `/screenshots/inventory/quality-grading__editor__01.png` | Existing feature documented for the first time — capture the "Rename Grades" dialog (`QualityGradeEditorComponent`), reachable from Tally settings, the Receive/Stock-In wizard, or the Dispatch wizard's quality filter |
| 2026-08-24 | Offline Mode & Mobile App — offline banner | `/screenshots/offline-mobile-app/offline__banner__01.png` | Brand-new category, zero screenshots exist — capture the "You are offline. Some features may not be available." bar on the Android app with connectivity off |
| 2026-08-24 | Offline Mode & Mobile App — Sync Issues page | `/screenshots/offline-mobile-app/sync-issues__page__01.png` | Brand-new category — capture the Sync Issues page showing a failed item with Rename & Retry / Discard actions |
| 2026-08-24 | Offline Mode & Mobile App — "Needs a connection" page | `/screenshots/offline-mobile-app/offline__not-available__01.png` | Brand-new category — capture the redirect page shown when opening an online-only screen (Reports, Export, etc.) while offline |
| 2026-08-24 | Offline Mode & Mobile App — Get the App / install | `/screenshots/offline-mobile-app/get-the-app__banner__01.png` | Brand-new category — capture the in-app "Get the App" banner/QR once the real current install method is confirmed (see open question on Play Store status) |
| 2026-08-24 | Affiliate Program — Apply page | `/screenshots/affiliate-program/apply__form__01.png` | Brand-new category, zero screenshots exist — capture the Become an Affiliate form (`/join-as-affiliate` public, or `/affiliate/apply` logged-in) |
| 2026-08-24 | Affiliate Program — Verification page | `/screenshots/affiliate-program/verification__page__01.png` | Brand-new category — capture Legal & Contact Details / Tax ID / Documents sections at `/affiliate/verification` |
| 2026-08-24 | Affiliate Program — Payout Account page | `/screenshots/affiliate-program/payout-account__form__01.png` | Brand-new category — capture the payout method form at `/affiliate/payout-account` (any one method, e.g. India Bank) |
| 2026-08-24 | Affiliate Program — Dashboard | `/screenshots/affiliate-program/dashboard__overview__01.png` | Brand-new category — capture the Affiliate Dashboard (`/affiliate/dashboard`) showing the referral link card, stat tiles, and tabs |

## Pending — Priority 2 (screenshot exists, now stale)

| Date | Article / Section | Screenshot path | Reason |
|------|--------------------|------------------|--------|
| 2026-08-18 | Tally Sheets — Settings and Configuration | `/screenshots/tally/round-settings-configuration.png` | Round's settings panel replaced the manual "Save Form Settings" button + confirm popup with an auto-save Saving/Saved indicator + "Save Now" button (ng v5.38.4), matching Square's own change. Also stale a second way (ng v5.38.9): Quality Grading and Visible Columns were merged into one settings card (previously 2 separate cards) |

## Done

| Date logged | Date re-shot | Article / Section | Screenshot path | Reason |
|-------------|--------------|--------------------|------------------|--------|
| _none yet_ | | | | |
