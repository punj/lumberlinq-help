---
title: Inventory — User Manual
description: Tracking timber stock from receipt through processing to shipment in LumberLinq.
---

## What is Inventory?

Inventory tracks the lifecycle of timber stock after it has been received from a tally sheet and before it is shipped, processed, or moved out. It answers three questions for operations teams: what stock is available right now, where is it, and what has happened to it over time.

Inventory is the bridge between Tally Sheets and Shipments. A Transport Unit (TU) created in a tally sheet cannot be added to a shipment until it has been received into inventory — this protects data integrity so you never ship stock the system doesn't recognise as officially received.

## How to Access Inventory

Open **Main Menu → Inventory**. Inventory is four separate pages, not tabs on one screen:
- **Overview** — current stock position and the three core actions
- **In/Out** — the movement ledger
- **Processing** — mill/conversion runs (Custom-Made / Re-saw)
- **Operators** — manage mill operators

![Inventory Overview](/screenshots/reports/inventory-01-overview-rich.png)

## Overview — Reading the Stock Position

Open Overview first before planning a shipment or checking site capacity. Stock is grouped into six stages, shown as clickable cards (click a card to filter the site list below it):

- **At Forest** — available stock at a Forest-type loading site
- **In Transit** — stock physically moving (shipment status Stuffed / Gate Out / In Transit)
- **At Mill** — available stock at a Mill-type loading site
- **In Process** — stock currently going through a processing run
- **At Yard** — available stock at a Yard, Warehouse, or Port site
- **In Shipment** — booked into a shipment but not yet physically moving

Alongside the stage cards, KPI totals show available CBM, in-process CBM, in-shipment CBM, CBM shipped this month, and total CBM tied up in open lots.

![Overview — expanded site](/screenshots/reports/inventory-02-overview-expanded-site.png)

## The Three Core Actions

Every stock movement starts from one of three buttons at the top of Overview:
- **Stock In** — receive new stock (requires the Inventory Receive permission)
- **Mill Run** — start a processing/conversion run
- **Send Out** — dispatch stock (requires the Inventory Dispatch permission)

Only the actions your account has permission for are shown — if you don't see Stock In or Send Out, ask an admin to grant it.

## Open Stock Lots

Below the action strip, Overview lists every open stock lot — a batch of stock still available to receive against, process, or dispatch. Click a lot to see its full movement history and its chain — the lineage back to the processing run or tally sheet that produced it. A lot's status is Open, In Process, Depleted, or Closed.

## In/Out — The Movement Ledger

Open **Inventory → In/Out** to see every stock movement in chronological order — the audit trail for inventory. Movement types: **IN** (received), **OUT** (dispatched), **Proc IN** (entered a processing run), **Proc OUT** (produced by a processing run), **In Consignment** (assigned to a shipment), and **Adjustment**. Filter by movement type (chips at the top) or by date range.

![In/Out ledger](/screenshots/reports/inventory-03-in-out-ledger.png)

## Recording an Adjustment

Use **Add Adjustment** (requires the Inventory Adjust permission) only when recorded stock no longer matches physical reality — e.g. after a stocktake, or when a TU was damaged. Fill in: the Transport Unit (search by ID/product/site), CBM delta, Pieces delta (positive to add, negative to reduce), a Reason (Reconciliation Delta, Damage, Moisture/Drying Loss, Measurement Error, Manual Correction, or Other), and notes explaining the correction. Don't use adjustments as a substitute for a normal receipt — if a TU was physically received but never entered, do a proper Stock In instead.

![Adjustment dialog](/screenshots/reports/inventory-04-adjustment-dialog.png)

## Processing — Converting Timber Stock (Custom-Made / Re-saw Runs)

Open **Inventory → Processing** to convert input timber into a different output — the most common case is round logs re-sawn into square/sawn boards (a Custom-Made run). Click **New Processing Run**, select the input Transport Units, and enter the output details; the system can auto-suggest likely inputs based on what you're producing. A run's status is Draft, In Progress, Completed, or Cancelled — cancelling reverses the input TU assignments. A completed run's output can be linked directly to a new tally sheet so the produced volume is measured and recorded in one flow.

![Processing runs](/screenshots/reports/inventory-05-processing-runs.png)

![New processing run — step 1](/screenshots/reports/inventory-06-processing-wizard-step-1.png)

![New processing run — select input TUs](/screenshots/reports/inventory-07-processing-wizard-input-tus.png)

## Mill Operators

Processing runs can be assigned to a Mill Operator — open **Inventory → Operators** to manage your roster. See the Mill Operators & Custom-Made Processing guide for the full operator workflow.

## Common Problems and Fixes

**"I can't add a TU to a shipment"** — the TU hasn't been received into inventory. Go to Overview or In/Out and confirm a receipt (IN) movement exists; if not, check the tally sheet was fully saved, not just filled in.

**"A TU shows unavailable even though it was received"** — check In/Out for an assignment (In Consignment), a Proc IN (currently processing), or confirm it hasn't already shipped.

**"Overview totals look wrong"** — check for an uncommitted adjustment or an open processing run that hasn't been completed; also confirm every tally sheet linked to the affected TUs was actually saved.

**"Which screen for reconciliation?"** — use In/Out for the movement audit trail, and the Reconciliation Report (under Reports) for a structured comparison view.
