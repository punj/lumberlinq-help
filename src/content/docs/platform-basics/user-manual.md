---
title: Dashboard, Utility, Storage & Support — User Manual
description: The Dashboard landing page, calculation utilities, file storage, and support tickets in LumberLinq.
---

*Also searched as: dashboard home, ctrl+k, quick search, global search, unified search, records mode, stock mode, calculator, storage full, out of space, guided tour, walkthrough, help desk, AI chat, ask AI, linc, chatbot, support ticket, keyboard shortcuts, hotkeys.*

## Dashboard

Open **Main Menu → Dashboard** — usually the landing page after login, at `/dashboard-v7`. It's the management view for high-level business visibility: consignments, inventory, payments, and reconciliation, all in one place, updating live within a couple of seconds of a change elsewhere in the app.

![Header controls](/screenshots/reports/global-01-header-company-id-help-font-theme.png)

![Dashboard header](/screenshots/dashboard/dashboard__header__01.png)

Not every section is visible to every user — several require a specific permission (Financial Health needs finance access, Inventory Snapshot needs inventory access, Mill Tasks needs process/mill access, Recent Activity needs a user-management permission). If a section is missing for you, that's expected, not a bug.

**What it shows:** Business Pulse KPI cards (Business Partners, Consignments, Stock Units, Volume, Pieces), My Active Mill Tasks (if you have any assigned), Financial Health, Inventory Snapshot, a Reconciliation ring, volume/product/trade-type charts, Recent Activity, and upcoming departures/arrivals.

![Business Pulse KPI cards](/screenshots/dashboard/dashboard__business-pulse__01.png)

![Inventory Snapshot](/screenshots/dashboard/dashboard__inventory-snapshot__01.png)

![Dashboard charts](/screenshots/dashboard/dashboard__charts__01.png)

![Recent Activity](/screenshots/dashboard/dashboard__recent-activity__01.png)

**Using it effectively** — the dashboard is a navigation aid, not a data entry tool:
- Pending reconciliation not zero → open the consignment or the Reconciliation Report
- Volume trend drops sharply → check Tally Sheets for missing entries and Inventory for recent adjustments
- Financial Health shows overdue → open the Financial Report or the consignment's Financials & Payments tab
- A Mill Task looks stuck → open Inventory → Processing to review, complete, or cancel it

Financial Health and the Reconciliation ring always reflect all-time data — they are not affected by any date range filter used elsewhere on the dashboard.

Admin, Super Admin, and Root users also have a separate, more detailed **Command Center** page — see its own section in the sidebar.

## Unified Search

Press **/** anywhere in the app (as long as you're not currently typing in a text field), or click the search icon in the header, to open Unified Search — one search box covering both record lookup and stock lookup, plus a built-in calculator. It replaced two separate older dialogs (previously called Quick Search and Global Search); if you used LumberLinq before, "Quick Search" is still the name shown, but it now opens the combined dialog below rather than a standalone one, and it opens with **/**, not Ctrl+K.

![Unified Search — Auto mode](/screenshots/platform-basics/platform-basics__unified-search-auto__01.png)

Four modes are shown as buttons across the top:

### Auto

The default mode when you open the dialog. It reads what you typed and decides for you: if it looks like a size/dimension (a word like `girth`/`width`/`thickness`/`length`, a comparator like `over`/`under`/`between`, or a plain `4in x 3in x 8ft` shorthand), it searches **Stock**; otherwise it searches **Records**. A small note above the results says which one it picked ("Searching as Records" / "Searching as Stock"), so you're never guessing. If you type a plain calculation instead — `150*3`, `(200+50)/4` — the answer appears inline instead of search results; tap it (or press Enter) to open the full **Calculator** mode with that answer already filled in.

### Records

Finds a record by name or reference number across six areas at once: Stock Units, Consignments, Business Partners, Products, Locations, and Users. Results appear grouped under each area as you type; click a result (or use the arrow keys and Enter) to jump straight to that record. Type at least 2 characters to search — short reference codes (like a 3-letter product code) match from 2 characters, longer names need 4+. Only areas you have permission to view show up in results. Each area shows up to 8 matches at a time; add another word or the full reference number to narrow it down if you don't see what you want. Unified Search remembers your last 5 searches (shown as pills when you open it with nothing typed) — click a pill to repeat it, or its × to remove it. Click the **?** icon inside the search box for a quick reminder of what each area covers. Records mode is a separate permission from Stock mode — by default only Admins have it, but it can be granted to any custom role from Manage Roles.

Records mode also matches sidebar menu pages by name — type a screen's name (like "Reports" or "Manage Roles") and a **Pages** group shows up alongside any record matches, so you can jump straight to a screen without hunting through the sidebar. Only pages you have access to ever show up here. Below the results, an **Ask Linc** card opens the AI Help chat with what you typed already filled in — handy when what you're looking for isn't a record or a page, but a question about how something works.

### Stock

A fast, phone-call-style lookup for stock, similar to how Quick Tally parses a spoken measurement. It parses species, origin, and quality automatically, and understands two kinds of size search:

- **Exact size**, positional shorthand: `4in x 3in x 8ft teak` (three numbers = square sawn) or `90cm x 230cm ghana teak` (two numbers = round girth × length).
- **Size ranges**, with a comparator and a named measurement: `girth over 90cm ghana teak`, `width between 6 and 10 inch`, `length under 12ft`.

Every measurement always needs an explicit unit (`cm`, `mm`, `in`/`"`, or `ft`/`'`) — a bare number is never guessed at a default unit, since guessing silently returns the wrong stock. Results show grouped into **Available Now**, **Pending Stock-In**, **In Process**, and **Arriving/Departing/Preparing**.

**Pending Stock-In** covers stock that's been tallied on a Stock-In (BUY) Transport Unit but hasn't been received into Inventory yet — so it's real, but not yet part of your available stock figures. Click a Pending Stock-In result to jump straight to that Transport Unit and receive it into Inventory yourself; Stock mode never receives stock automatically.

A chip row above the results shows what was understood from your text — a chip with a question-mark icon means that part was fuzzy-matched (close but not exact), not a guaranteed match. If a typed word is a plausible but uncertain match for a product name, a **"Did you mean?"** row shows the closest candidates instead of silently guessing — pick the right one and the search re-runs with it locked in.

Stock mode is a separate permission from Records mode above — by default only Admins have it, but it can be granted to any custom role from Manage Roles.

**Ask AI (Forest plan)** — inside Stock mode, click the **Ask AI** toggle to switch to AI-assisted parsing for messier or more conversational phrasing than the regular parser handles. Type your question and click **Ask AI** — this is a manual, explicit action (it never runs automatically while typing) because each request uses AI credits from your plan. Ask AI only translates your text into search terms — it never invents or shows a number that isn't backed by real inventory. Ask AI requires the **Forest** plan and draws from the same AI credit pool as AI Import for tally sheets, charged by how much text is processed, not a flat fee per search; you'll see a warning at 80%, 90%, 95%, and 100% of your credit limit used. Without AI credits or on a lower plan, the regular (non-AI) Stock search still works at no credit cost.

### Calculator

A real 4-function calculator you can type or tap into — handy for a quick price/CBM total without leaving the page you're on. Nothing entered here is saved. Reach it by clicking the Calculator button inside Unified Search, by tapping a math answer shown in Auto mode, or by pressing **Ctrl+Alt+C** anywhere in the app to jump straight into it.

![Unified Search — Calculator mode](/screenshots/platform-basics/platform-basics__unified-search-calculator__01.png)

## Keyboard Shortcuts

Press **?** anywhere in the app (not while typing in a text field) to open the full Keyboard Shortcuts list — every shortcut across LumberLinq in one place, grouped by where it applies (Unified Search, tally entry, forms, the photo viewer, and the calculator). You can also reach it from the **?** help icon inside Unified Search's own help panel.

![Keyboard Shortcuts dialog](/screenshots/platform-basics/platform-basics__keyboard-shortcuts__01.png)

## Product Tour

The first time you land on a main app page after logging in, LumberLinq walks you through the header controls with a short guided tour: the navigation menu, the LumberLinq logo (click it to return to the Dashboard from anywhere), Language, Font Size, Theme, Dark Mode, your profile menu, and the Help & Support icon. Click the **×** on any step to dismiss the tour early — it won't pop up again on its own once you've seen it or dismissed it.

![Product Tour — first step](/screenshots/platform-basics/platform-basics__product-tour-step__01.png)

Many individual pages — Dashboard, Shipments, Tally Sheet, Reports, Business Partner, Products, Loading Site, Users, each of the four Inventory pages, RBAC Settings, and Subscription Management — also show their own short walkthrough the first time you open that page, pointing out the buttons and sections specific to that screen.

**Replay the tour anytime:** click the **?** help icon in the header (it has a subtle pulse until you've seen the tour for the first time) or open your profile menu and click **Product Tour** — both restart the same header walkthrough from the beginning, even if you've already seen or dismissed it before.

## Utility

Open **Main Menu → Utility** for four built-in calculation tools, so timber teams can do everyday conversions and sums without a separate spreadsheet or a phone calculator: **Calculator**, **Cost Estimate**, **Unit Conversion**, and **Generate Slab**.

### Calculator

A plain arithmetic calculator, just like the one on your phone — for quick sums that don't need a tally sheet or a saved record. Nothing you enter here is saved.

### Unit Conversion

Convert a measurement from one unit to another — e.g. centimetres to inches, feet to metres, CBM to CFT. Enter the source value, pick From/To units, set decimal places, and the result updates automatically. Click **Reverse** to flip direction, **Add** to keep a row for reference while working on another conversion, **Clear** to reset.

### Cost Estimate (Volume Estimates)

Calculate the total volume of a timber lot from its dimensions without creating a full tally sheet — useful for quotations and purchasing decisions. Enter Width, Thickness, Length, and Quantity per size batch; CBM, CFT, and totals calculate automatically. Add more rows for different sizes. If results look wrong, it's almost always a unit mismatch — check every unit field. Optional rate fields let you see estimated value alongside volume.

### Generate Slab

For slab-priced markets (smaller cross-sections priced differently than larger ones). Enter a base Rate, Slab CFT, Slab Price Size, Slab Size, and how many Upper/Lower slab steps to generate, then click **Calculate**. Review the full rate table on the Slab Price tab and export or copy it for buyers.

## Storage

Open **Main Menu → User → Storage** to see how much file storage your company is using and list all uploaded files.

The top section shows Used storage, Storage quota, Free storage, File count, and Usage percentage. If used storage approaches or exceeds quota, new uploads will fail — upgrade your plan or delete unnecessary files.

Storage aggregates files from every module: general documents, Stock Unit/site photos, Business Partner documents, consignment documents, and location documents. The file list shows type, name, size, uploader, and upload date.

**If an upload fails:** confirm free space is greater than the file size; if storage is full, upgrade or delete old files; if space looks fine but it still fails, use Refresh and try again; very large files may simply time out — try compressing or splitting them.

## Support Tickets

Open **Main Menu → Support → Support Tickets** to create and track help requests without leaving LumberLinq.

![Ticket list](/screenshots/reports/support-01-ticket-list-rich.png)

The ticket list shows category, subject, status (Open, In Progress, Resolved, Closed), and dates. Click **New Ticket** to create one:

![New ticket form](/screenshots/reports/support-03-new-ticket-form.png)

![Category dropdown](/screenshots/reports/support-04-new-ticket-category-dropdown.png)

**For faster resolution, include:** the exact module and action, the Stock Unit ID/Consignment BL number/tally reference involved, the product or business partner name, a screenshot of the error, and your Company ID (Company Profile → Identity tab).

![Ticket detail](/screenshots/reports/support-02-ticket-detail.png)

Open any ticket to see the full conversation and reply with more information. Tickets are visible to all admins and the user who created them.

## Plan Limits — What Can Get Restricted

Depending on your subscription package, limits may apply to: storage quota, number of users, AI credits (for AI Import), tally sheets, consignments, Stock Units, product catalog entries, Business Partner records, priority support, and Analytics/App Usage report access. If you can't create a new record, upload a file, or invite a user, check your current plan limits on the Subscription page before assuming it's a technical error.
