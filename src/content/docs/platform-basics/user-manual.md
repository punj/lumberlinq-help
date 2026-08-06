---
title: Dashboard, Utility, Storage & Support — User Manual
description: The Dashboard landing page, calculation utilities, file storage, and support tickets in LumberLinq.
---

## Dashboard

Open **Main Menu → Dashboard** — usually the landing page after login, at `/dashboard-v7`. It's the management view for high-level business visibility: shipments, inventory, payments, and reconciliation, all in one place, updating live within a couple of seconds of a change elsewhere in the app.

![Header controls](/screenshots/reports/global-01-header-company-id-help-font-theme.png)

Not every section is visible to every user — several require a specific permission (Financial Health needs finance access, Inventory Snapshot needs inventory access, Mill Tasks needs process/mill access, Recent Activity needs a user-management permission). If a section is missing for you, that's expected, not a bug.

**What it shows:** Business Pulse KPI cards (Business Partners, Shipments, Transport Units, Volume, Pieces), My Active Mill Tasks (if you have any assigned), Financial Health, Inventory Snapshot, a Reconciliation ring, volume/product/trade-type charts, Recent Activity, and upcoming departures/arrivals.

**Using it effectively** — the dashboard is a navigation aid, not a data entry tool:
- Pending reconciliation not zero → open the shipment or the Reconciliation Report
- Volume trend drops sharply → check Tally Sheets for missing entries and Inventory for recent adjustments
- Financial Health shows overdue → open the Financial Report or the shipment's Financials & Payments tab
- A Mill Task looks stuck → open Inventory → Processing to review, complete, or cancel it

## Utility

Open **Main Menu → Utility** for three built-in calculation tools, so timber teams can do everyday conversions without a separate spreadsheet: **Cost Estimate**, **Unit Conversion**, and **Generate Slab**.

### Unit Conversion

Convert a measurement from one unit to another — e.g. centimetres to inches, feet to metres, CBM to CFT. Enter the source value, pick From/To units, set decimal places, and the result updates automatically. Click **Reverse** to flip direction, **Add** to keep a row for reference while working on another conversion, **Clear** to reset.

### Cost Estimate (Volume Estimates)

Calculate the total volume of a timber lot from its dimensions without creating a full tally sheet — useful for quotations and purchasing decisions. Enter Width, Thickness, Length, and Quantity per size batch; CBM, CFT, and totals calculate automatically. Add more rows for different sizes. If results look wrong, it's almost always a unit mismatch — check every unit field. Optional rate fields let you see estimated value alongside volume.

### Generate Slab

For slab-priced markets (smaller cross-sections priced differently than larger ones). Enter a base Rate, Slab CFT, Slab Price Size, Slab Size, and how many Upper/Lower slab steps to generate, then click **Calculate**. Review the full rate table on the Slab Price tab and export or copy it for buyers.

## Storage

Open **Main Menu → User → Storage** to see how much file storage your company is using and list all uploaded files.

The top section shows Used storage, Storage quota, Free storage, File count, and Usage percentage. If used storage approaches or exceeds quota, new uploads will fail — upgrade your plan or delete unnecessary files.

Storage aggregates files from every module: general documents, TU/site photos, Business Partner documents, shipment documents, and loading site documents. The file list shows type, name, size, uploader, and upload date.

**If an upload fails:** confirm free space is greater than the file size; if storage is full, upgrade or delete old files; if space looks fine but it still fails, use Refresh and try again; very large files may simply time out — try compressing or splitting them.

## Support Tickets

Open **Main Menu → Support → Support Tickets** to create and track help requests without leaving LumberLinq.

![Ticket list](/screenshots/reports/support-01-ticket-list-rich.png)

The ticket list shows category, subject, status (Open, In Progress, Resolved, Closed), and dates. Click **New Ticket** to create one:

![New ticket form](/screenshots/reports/support-03-new-ticket-form.png)

![Category dropdown](/screenshots/reports/support-04-new-ticket-category-dropdown.png)

**For faster resolution, include:** the exact module and action, the Transport Unit ID/Shipment BL number/tally reference involved, the product or business partner name, a screenshot of the error, and your Company ID (Company Profile → Identity tab).

![Ticket detail](/screenshots/reports/support-02-ticket-detail.png)

Open any ticket to see the full conversation and reply with more information. Tickets are visible to all admins and the user who created them.

## Plan Limits — What Can Get Restricted

Depending on your subscription package, limits may apply to: storage quota, number of users, AI credits (for AI Import), tally sheets, shipments, Transport Units, product catalog entries, Business Partner records, priority support, and Analytics/App Usage report access. If you can't create a new record, upload a file, or invite a user, check your current plan limits on the Subscription page before assuming it's a technical error.
