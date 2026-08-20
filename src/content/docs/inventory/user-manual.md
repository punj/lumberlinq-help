---
title: Inventory — User Manual
description: Tracking timber stock from receipt through processing to shipment in LumberLinq.
---

## What is Inventory?

Inventory tracks the lifecycle of timber stock after it has been received from a tally sheet and before it is shipped, processed, or moved out. It answers three questions for operations teams: what stock is available right now, where is it, and what has happened to it over time.

Inventory is the bridge between Tally Sheets and Consignments. A Stock Unit created in a tally sheet cannot be added to a consignment until it has been received into inventory — this protects data integrity so you never ship stock the system doesn't recognise as officially received.

## How to Access Inventory

Open **Main Menu → Inventory**. Inventory is four separate pages, not tabs on one screen:
- **Overview** — current stock position and the three core actions
- **In/Out** — the movement ledger
- **Processing** — mill/conversion runs (Custom-Made / Re-saw)
- **Operators** — manage mill operators

![Inventory Overview](/screenshots/reports/inventory-01-overview-rich.png)

## Overview — Reading the Stock Position

Open Overview first before planning a consignment or checking location capacity. Stock is grouped into six stages, shown as clickable cards (click a card to filter the location list below it):

- **At Forest** — available stock at a Forest-type location
- **In Transit** — stock physically moving (consignment status Stuffed / Gate Out / In Transit)
- **At Mill** — available stock at a Mill-type location
- **In Process** — stock currently going through a processing run
- **At Yard** — available stock at a Yard, Warehouse, or Port location
- **In Consignment** — booked into a consignment but not yet physically moving

Alongside the stage cards, KPI totals show available CBM, in-process CBM, in-consignment CBM, CBM shipped this month, and total CBM tied up in open lots.

![Overview — expanded site](/screenshots/reports/inventory-02-overview-expanded-site.png)

## The Three Core Actions

Every stock movement starts from one of three buttons at the top of Overview:
- **Stock In** — receive new stock (requires the Inventory Receive permission)
- **Mill Run** — start a processing/conversion run
- **Send Out** — dispatch stock (requires the Inventory Dispatch permission)

Only the actions your account has permission for are shown — if you don't see Stock In or Send Out, ask an admin to grant it.

## Open Stock Lots

Below the action strip, Overview lists every open stock lot — a batch of stock still available to receive against, process, or dispatch. Click a lot to see its full movement history and its chain — the lineage back to the processing run or tally sheet that produced it. A lot's status is Open, In Process, Depleted, or Closed.

### What is the Chain?

The Chain is the "family tree" for one specific batch of stock — proof of where it actually came from and where it actually went, all in one place, without you having to manually piece it together from separate purchase, processing, and sale records.

It's not a separate page of its own — you won't find it in the main menu. To see it, open **Inventory → Overview**, find the stock lot you want, and click **View Chain** on that lot to expand its history right there.

A chain can show, depending on that lot's own history:
- **Source Lot** — the earlier stock this lot came from, if it wasn't a brand-new receipt
- **Processing Run** — the mill/re-saw run that turned the source lot into this one, if any
- **This Lot** — the batch you're looking at, with how much was received and how much is still remaining
- **Dispatches** — shipments this lot's stock went out on
- **Output Lots** — if this lot was itself re-sawn into something else, the new lot(s) that came out of it

A lot with no upstream source and no downstream activity yet will just show as new, unprocessed stock — that's normal, not an error.

## In/Out — The Movement Ledger

Open **Inventory → In/Out** to see every stock movement in chronological order — the audit trail for inventory. Movement types: **IN** (received), **OUT** (dispatched), **Proc IN** (entered a processing run), **Proc OUT** (produced by a processing run), **In Consignment** (assigned to a consignment), and **Adjustment**. Filter by movement type (chips at the top) or by date range.

![In/Out ledger](/screenshots/reports/inventory-03-in-out-ledger.png)

## Recording an Adjustment

Use **Add Adjustment** (requires the Inventory Adjust permission) only when recorded stock no longer matches physical reality — e.g. after a stocktake, or when a Stock Unit was damaged. Fill in: the Stock Unit (search by ID/product/location), CBM delta, Pieces delta (positive to add, negative to reduce), a Reason (Reconciliation Delta, Damage, Moisture/Drying Loss, Measurement Error, Manual Correction, or Other), and notes explaining the correction. Don't use adjustments as a substitute for a normal receipt — if a Stock Unit was physically received but never entered, do a proper Stock In instead.

![Adjustment dialog](/screenshots/reports/inventory-04-adjustment-dialog.png)

## Processing — Converting Timber Stock (Custom-Made / Re-saw Runs)

Open **Inventory → Processing** to convert input timber into a different output — the most common case is round logs re-sawn into square/sawn boards (a Custom-Made run). Click **New Processing Run**, select the input Stock Units, and enter the output details; the system can auto-suggest likely inputs based on what you're producing. A run's status is Draft, In Progress, Completed, or Cancelled — cancelling reverses the input Stock Unit assignments. A completed run's output can be linked directly to a new tally sheet so the produced volume is measured and recorded in one flow.

![Processing runs](/screenshots/reports/inventory-05-processing-runs.png)

![New processing run — step 1](/screenshots/reports/inventory-06-processing-wizard-step-1.png)

![New processing run — select input Stock Units](/screenshots/reports/inventory-07-processing-wizard-input-tus.png)

## Mill Operators

Processing runs can be assigned to a Mill Operator — open **Inventory → Operators** to manage your roster. See the Mill Operators & Custom-Made Processing guide for the full operator workflow.

## Common Problems and Fixes

**"I can't add a Stock Unit to a consignment"** — the Stock Unit hasn't been received into inventory. Go to Overview or In/Out and confirm a receipt (IN) movement exists; if not, check the tally sheet was fully saved, not just filled in.

**"A Stock Unit shows unavailable even though it was received"** — check In/Out for an assignment (In Consignment), a Proc IN (currently processing), or confirm it hasn't already shipped.

**"Overview totals look wrong"** — check for an uncommitted adjustment or an open processing run that hasn't been completed; also confirm every tally sheet linked to the affected Stock Units was actually saved.

**"Which screen for reconciliation?"** — use In/Out for the movement audit trail, and the Reconciliation Report (under Reports) for a structured comparison view.
