# Screenshot Checklist

Tracks KB screenshots that are stale because of a shipped app change, pending a batch re-shoot.
Per `CLAUDE.md` (main workspace root): KB **text** is updated immediately per change; screenshots
are intentionally deferred and batched. Log every pending item here the moment the underlying
change ships — don't wait for the re-shoot to record it.

When a re-shoot batch happens, replace the screenshot file(s), then move the corresponding row(s)
from **Pending** to **Done** (keep them, don't delete — this file is the history).

## Pending

| Date | Article / Section | Screenshot path | Reason |
|------|--------------------|------------------|--------|
| 2026-08-18 | Application Settings — Payment Reminders | `/screenshots/company/application-settings-payment-reminders.png` | New page shipped (sb v5.22.0/ng v5.36.0) — screenshot doesn't exist yet, needs first capture, not just a re-shoot |
| 2026-08-18 | Tally Sheets — Settings and Configuration | `/screenshots/tally/round-settings-configuration.png` | Round's settings panel replaced the manual "Save Form Settings" button + confirm popup with an auto-save Saving/Saved status indicator + "Save Now" button (ng v5.38.4), matching Square's own change from 2026-08-17 — old screenshot still shows the retired button. Also now stale for a second reason (ng v5.38.9): Quality Grading and Visible Columns were merged into one settings card (previously 2 separate cards) |
| 2026-08-19 | Mill Command Center — all sections | `/screenshots/command-center/command-center__overview__01.png` (+ inventory/floor/money/consignments tabs, and machines page) | Brand-new page (ng v5.42.0/sb v5.28.0) — no screenshots exist yet, needs first capture for every tab plus Machines CRUD |
| 2026-08-19 | Dashboard, Utility, Storage & Support — Quick Search | `/screenshots/platform-basics/quick-search__overlay__01.png` | New feature — Quick Search overlay + parsed-chip row, needs first capture |
| 2026-08-19 | Dashboard, Utility, Storage & Support — Ask AI | `/screenshots/platform-basics/quick-search__ask-ai__01.png` | New feature — Ask AI toggle, credit usage display, and threshold toast, needs first capture |
| 2026-08-19 | Dashboard, Utility, Storage & Support — Quick Search (PENDING STOCK-IN + Did you mean) | `/screenshots/platform-basics/quick-search__overlay__01.png` | Same overlay screenshot area above is now further out of date: new "PENDING STOCK-IN" result group and a "Did you mean?" pick-list for ambiguous fuzzy species matches were added — capture both states in the same re-shoot batch as the other pending Quick Search item |
| 2026-08-20 | Dashboard, Utility, Storage & Support — Global Search | `/screenshots/platform-basics/global-search__overlay__01.png` | Brand-new feature (ng v5.44.22/sb v5.30.7) — grouped results overlay across all 6 record types, needs first capture |
| 2026-08-20 | Dashboard, Utility, Storage & Support — Global Search inline math | `/screenshots/platform-basics/global-search__math-result__01.png` | Brand-new feature — the "= 450" inline computed-answer state, needs first capture |
| 2026-08-20 | Dashboard, Utility, Storage & Support — Global Search calculator | `/screenshots/platform-basics/global-search__calculator__01.png` | Brand-new feature — the calculator dialog opened from Global Search, needs first capture |
| 2026-08-20 | Dashboard, Utility, Storage & Support — Keyboard Shortcuts | `/screenshots/platform-basics/keyboard-shortcuts__dialog__01.png` | Brand-new feature — the "?" shortcuts cheat-sheet dialog, needs first capture |

## Done

| Date logged | Date re-shot | Article / Section | Screenshot path | Reason |
|-------------|--------------|--------------------|------------------|--------|
| _none yet_ | | | | |
