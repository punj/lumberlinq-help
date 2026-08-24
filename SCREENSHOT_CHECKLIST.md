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
| 2026-08-24 | Dashboard, Utility, Storage & Support — Unified Search (Records/Stock modes) | `/screenshots/platform-basics/platform-basics__unified-search-records__01.png` (+ `__stock__01`) | Auto and Calculator modes are captured, live, and now in the article (see Done) — Records and Stock modes still need a capture, plus real search text typed in to show results, not an empty box |
| 2026-08-24 | Inventory — Quality Grading (ALPHA) | `/screenshots/inventory/quality-grading__editor__01.png` | Confirmed 2026-08-24 via live test: the full click path (Stock In → product → storage site → Next → quality trigger) works right up to the last step — the quality editor trigger itself never renders because Quality isn't enabled for the capture account's tenant tier. Needs either Quality turned on for that test tenant (Admin → Companies → Company Support → Feature Flags → "Quality Grading", plus "Inventory Module" if not already on), or a different tenant that has it, then a re-run of `inventory__quality-grading-editor__01` in the screenshot tool |
| 2026-08-24 | Offline Mode & Mobile App — offline banner | `/screenshots/offline-mobile-app/offline__banner__01.png` | Brand-new category, zero screenshots exist — capture the "You are offline. Some features may not be available." bar on the Android app with connectivity off |
| 2026-08-24 | Offline Mode & Mobile App — Sync Issues page | `/screenshots/offline-mobile-app/sync-issues__page__01.png` | Brand-new category — capture the Sync Issues page showing a failed item with Rename & Retry / Discard actions |
| 2026-08-24 | Offline Mode & Mobile App — "Needs a connection" page | `/screenshots/offline-mobile-app/offline__not-available__01.png` | Brand-new category — capture the redirect page shown when opening an online-only screen (Reports, Export, etc.) while offline |
| 2026-08-24 | Offline Mode & Mobile App — Get the App / install | `/screenshots/offline-mobile-app/get-the-app__banner__01.png` | Brand-new category — capture the in-app "Get the App" banner/QR once the real current install method is confirmed (see open question on Play Store status) |
| 2026-08-24 | Affiliate Program — Verification page | `/screenshots/affiliate-program/affiliate-program__verification-page__01.png` | Confirmed route (`/affiliate/verification`) in the screenshot tool's manifest — needs a real, already-APPROVED affiliate login (different from the main capture account) to actually reach it. Blocked on the user supplying/approving one |
| 2026-08-24 | Affiliate Program — Payout Account page | `/screenshots/affiliate-program/affiliate-program__payout-account-form__01.png` | Same blocker as Verification page above — needs an approved affiliate login |
| 2026-08-24 | Affiliate Program — Dashboard | `/screenshots/affiliate-program/affiliate-program__dashboard__01.png` | Same blocker as Verification page above — needs an approved affiliate login |

## Pending — Priority 2 (screenshot exists, now stale)

| Date | Article / Section | Screenshot path | Reason |
|------|--------------------|------------------|--------|
| 2026-08-18 | Tally Sheets — Settings and Configuration | `/screenshots/tally/round-settings-configuration.png` | Round's settings panel replaced the manual "Save Form Settings" button + confirm popup with an auto-save Saving/Saved indicator + "Save Now" button (ng v5.38.4), matching Square's own change. Also stale a second way (ng v5.38.9): Quality Grading and Visible Columns were merged into one settings card (previously 2 separate cards) |

## Done

| Date logged | Date re-shot | Article / Section | Screenshot path | Reason |
|-------------|--------------|--------------------|------------------|--------|
| 2026-08-18 | 2026-08-24 | Application Settings — Payment Reminders | `/screenshots/company/application-settings-payment-reminders.png` | First capture — the article already referenced this exact path, it was just missing the file |
| 2026-08-19 | 2026-08-24 | Mill Command Center — Overview tab | `/screenshots/command-center/command-center__overview__01.png` | First capture |
| 2026-08-19 | 2026-08-24 | Mill Command Center — Inventory tab | `/screenshots/command-center/command-center__inventory__01.png` | First capture |
| 2026-08-19 | 2026-08-24 | Mill Command Center — Floor & Yield tab | `/screenshots/command-center/command-center__floor__01.png` | First capture |
| 2026-08-19 | 2026-08-24 | Mill Command Center — Money tab | `/screenshots/command-center/command-center__money__01.png` | First capture |
| 2026-08-19 | 2026-08-24 | Mill Command Center — Consignments tab | `/screenshots/command-center/command-center__consignments__01.png` | First capture |
| 2026-08-19 | 2026-08-24 | Mill Command Center — Machines page | `/screenshots/command-center/command-center__machines__01.png` | First capture |
| 2026-08-20 | 2026-08-24 | Dashboard, Utility, Storage & Support — Keyboard Shortcuts | `/screenshots/platform-basics/platform-basics__keyboard-shortcuts__01.png` | First capture |
| 2026-08-24 | 2026-08-24 | Dashboard, Utility, Storage & Support — Product Tour | `/screenshots/platform-basics/platform-basics__product-tour-step__01.png` | First capture |
| 2026-08-24 | 2026-08-24 | Account — Notification Preferences | `/screenshots/account/account__notification-preferences__01.png` | First capture |
| 2026-08-24 | 2026-08-24 | Account — Self-Delete Account (Danger Zone) | `/screenshots/account/account__danger-zone__01.png` | First capture of the panel itself — the 3-step delete confirmation dialog was deliberately NOT captured (real, consequential destructive action, not something to automate); still a Priority 1 gap if that dialog sequence is wanted later |
| 2026-08-24 | 2026-08-24 | Affiliate Program — Apply page | `/screenshots/affiliate-program/affiliate-program__apply-form__01.png` | First capture of `/join-as-affiliate` (public). One thing worth a manual double-check: the captured header shows the full logged-in-style app chrome even though this was a logged-out capture — possibly just how this page's header always renders, not confirmed either way |
| 2026-08-24 | 2026-08-24 | Dashboard, Utility, Storage & Support — Unified Search (Auto + Calculator modes) | `/screenshots/platform-basics/platform-basics__unified-search-auto__01.png`, `platform-basics__unified-search-calculator__01.png` | Captured, and the whole Unified Search section (`platform-basics/user-manual.md`) rewritten same day to match the real merged component — old separate "Quick Search"/"Global Search" text (and the wrong Ctrl+K shortcut) replaced with one Unified Search section covering all 4 modes (Auto/Records/Stock/Calculator). Matching FAQ entries in `platform-basics/faq.md` and cross-references in `subscriptions/user-manual.md` fixed too |
