---
title: Dashboard, Utility, Storage & Support — User Manual
description: The Dashboard landing page, calculation utilities, file storage, and support tickets in LumberLinq.
---

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

## Quick Search

If your account has Quick Search access, a search icon appears in the header. Click it, or press **/** anywhere in the app (as long as you're not currently typing in a text field), to open Quick Search — a fast, phone-call-style lookup for stock, similar to how Quick Tally parses a spoken measurement. It parses species, origin, and quality automatically, and understands two kinds of size search:

- **Exact size**, positional shorthand: `4in x 3in x 8ft teak` (three numbers = square sawn) or `90cm x 230cm ghana teak` (two numbers = round girth × length).
- **Size ranges**, with a comparator and a named measurement: `girth over 90cm ghana teak`, `width between 6 and 10 inch`, `length under 12ft`.

Every measurement always needs an explicit unit (`cm`, `mm`, `in`/`"`, or `ft`/`'`) — a bare number is never guessed at a default unit, since guessing silently returns the wrong stock. Results show grouped into **Available Now**, **Pending Stock-In**, **In Process**, and **Arriving/Departing/Preparing**.

**Pending Stock-In** covers stock that's been tallied on a Stock-In (BUY) Transport Unit but hasn't been received into Inventory yet — so it's real, but not yet part of your available stock figures. Click a Pending Stock-In result to jump straight to that Transport Unit and receive it into Inventory yourself; Quick Search never receives stock automatically.

A chip row above the results shows what was understood from your text — a chip with a question-mark icon means that part was fuzzy-matched (close but not exact), not a guaranteed match. If a typed word is a plausible but uncertain match for a product name, Quick Search shows a **"Did you mean?"** row with the closest candidates instead of silently guessing — pick the right one and the search re-runs with it locked in.

Quick Search access is a separate permission from other module access — by default only Admins have it, but it can be granted to any custom role from Manage Roles.

### Ask AI (Forest plan)

Inside Quick Search, click the **Ask AI** toggle to switch to AI-assisted parsing for messier or more conversational phrasing than the regular parser handles. Type your question and click **Ask AI** — this is a manual, explicit action (it never runs automatically while typing) because each request uses AI credits from your plan.

Ask AI only translates your text into search terms — it never invents or shows a number that isn't backed by real inventory. The results underneath are the same real stock/process/consignment data as a regular Quick Search.

Ask AI requires the **Forest** plan (LumberLinq's top subscription tier) and draws from the same AI credit pool as AI Import for tally sheets. Credits are charged based on how much text is processed, not a flat fee per search. As your usage approaches your plan's AI credit limit, you'll see a warning at 80%, 90%, 95%, and 100% used. If you're out of AI credits or on a lower plan, the regular (non-AI) Quick Search still works at no credit cost.

## Global Search

Press **Ctrl+K** (or **Cmd+K** on Mac) anywhere in the app, or click the search icon in the header, to open Global Search — a single box that finds a record by name or reference number across six areas at once: Stock Units, Consignments, Business Partners, Products, Locations, and Users. Results appear grouped under each area as you type; click a result (or use the arrow keys and Enter) to jump straight to that record.

Type at least 2 characters to search. Short reference codes (like a 3-letter product code) match from 2 characters; longer names need 4+ characters to search by relevance. Only areas you have permission to view show up in results — if you don't have Business Partner access, for example, Business Partner matches never appear, even if a match exists.

Global Search remembers your last 5 searches (shown as pills when you open it with nothing typed) so you can quickly repeat a recent lookup — click a pill to search it again, or the × on a pill to remove it. Click the **?** icon inside the search box for a quick reminder of what each area covers.

Global Search is a separate permission from Quick Search below — by default only Admins have it, but it can be granted to any custom role from Manage Roles.

Each area shows up to 8 matches at a time — if you're not seeing the exact record you want, add another word or the full reference number to narrow it down.

**Do the math without leaving search:** type a plain calculation like `150*3` or `(200+50)/4` directly into Global Search, and the answer appears instantly instead of search results — no need to open a separate calculator. Tap the answer to open the full calculator and keep working with that number. There's also a dedicated calculator icon inside the search box (or press **Ctrl+Alt+C** anywhere to open the calculator directly) for a real 4-function calculator you can type or tap into — handy for a quick price/CBM total without leaving the page you're on.

## Keyboard Shortcuts

Press **?** anywhere in the app (not while typing in a text field) to open the full Keyboard Shortcuts list — every shortcut across LumberLinq in one place, grouped by where it applies (Global Search, tally entry, forms, the photo viewer, and the calculator). You can also reach it from the **?** help icon inside Global Search's own help panel.

## Product Tour

The first time you land on a main app page after logging in, LumberLinq walks you through the header controls with a short guided tour: the navigation menu, the LumberLinq logo (click it to return to the Dashboard from anywhere), Language, Font Size, Theme, Dark Mode, your profile menu, and the Help & Support icon. Click the **×** on any step to dismiss the tour early — it won't pop up again on its own once you've seen it or dismissed it.

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
