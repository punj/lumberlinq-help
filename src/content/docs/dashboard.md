---
title: Dashboard
description: Use Dashboard V5 as your daily management overview — shipments, inventory, payments, reconciliation, and more at a glance.
---

Dashboard V5 is the main management landing screen for LumberLinq. It gives managers, operations leads, and finance users a consolidated picture of what's happening across the business without navigating to each individual module.

Open it from the main menu or go directly to `/dashboard-v5`.

## What the Dashboard Shows

![Dashboard V5 with live data](/screenshots/dashboard/dashboard-v5-full-data.png)

Dashboard V5 combines information from multiple modules into summary widgets and charts:

| Widget | What it shows |
|--------|---------------|
| Shipment pipeline | Count of active, completed, and pending shipments; total CBM in transit |
| Inventory position | Available stock, in-process stock, and recent movement summary |
| Volume trend (CBM) | Timber volume received, processed, or shipped over time |
| Loading site utilisation | Stock and activity distributed across your loading sites |
| Financial health | Outstanding receivables, payables, and overdue amounts |
| Payment flow | Recent payments received and made; overdue shipment highlights |
| Reconciliation status | Count of pending reconciliation items — ideally zero |
| Processing activity | Count of active processing runs |
| Subscription status | Current plan and any plan limit warnings |

## How to Use the Dashboard

The dashboard is a navigation aid, not a data entry screen. Use it to spot issues, then click through to the relevant module:

- **Pending reconciliation is not zero** → open the shipment or go to the Reconciliation Report to resolve pending items
- **Volume trend drops sharply** → check Tally Sheets for missing entries and Inventory for recent adjustments
- **Loading site utilisation is empty** → confirm TUs are linked to loading sites when created; unlinked TUs do not appear in site utilisation
- **Financial health shows overdue** → open the Financial Report or the specific shipment's Financials & Payments tab and record or chase the payment
- **Processing activity shows active runs** → open Inventory → Processing to review and complete or cancel the runs

## Why a Widget or Chart is Empty

An empty chart or zero count usually means one of:

- No matching data exists for the current period — widen the date filter if one is available
- The underlying module has no records yet — for example, no shipments have been created
- Records exist but have not reached the status the widget expects — for example, a shipment is in draft and not counted as active

## Dashboard V5 vs V3

Dashboard V5 is the current financial and operational dashboard. Dashboard V3 (`/dashboard-v3`) is kept as an archive reference and is not actively maintained.
