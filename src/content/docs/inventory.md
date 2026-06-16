---
title: Inventory
description: Track timber stock from tally receipt through shipment — overview, movement ledger, adjustments, and processing runs.
---

The Inventory module tracks the lifecycle of timber stock after it has been received from tally sheets and before it is shipped, processed, or moved out. It answers three core questions for operations teams: what stock is currently available, where is it located, and what has happened to it over time.

Inventory is the bridge between Tally Sheets and Shipments. A Transport Unit cannot be added to a shipment until it has been received into inventory.

## Overview

Open **Inventory → Overview** for a high-level view of stock across the company. Use this before planning a shipment or reviewing site capacity.

![Inventory Overview](/screenshots/inventory/inventory-01-overview-rich.png)

The overview shows:

- **Available stock** — timber received, not in process, and not yet assigned to a shipment
- **In-process stock** — timber currently in a processing run
- **In-shipment stock** — timber assigned to an active shipment, not yet shipped
- **Shipped stock** — timber that has completed a shipment
- **Stock by loading site** — available stock distributed across yards, mills, ports, and forests
- **Site utilisation** — capacity vs current volume per loading site

![Inventory site detail](/screenshots/inventory/inventory-02-overview-expanded-site.png)

If a Transport Unit is missing from the available list, it is either still in draft tally (not yet received), already assigned to another shipment, currently in a processing run, or already shipped.

## In/Out Ledger

Open **Inventory → In/Out** to see every stock movement in chronological order. This is the audit trail for inventory — use it when you need to understand why a stock balance changed or trace the history of a specific Transport Unit.

![Inventory In/Out ledger](/screenshots/inventory/inventory-03-in-out-ledger.png)

Movement types recorded in the ledger:

| Movement | What it means |
|----------|---------------|
| Receiving | A TU is formally received into inventory after the tally sheet is saved |
| Assignment | A TU is linked to a shipment |
| Release | A TU is removed from a shipment assignment |
| Processing (input) | A TU enters a processing run |
| Processing (output) | New processed stock is created |
| Adjustment | A manual correction to stock quantities |
| Shipment out | Stock is marked as shipped |

When investigating a stock mismatch, filter the ledger by TU, product, loading site, and date range.

## Inventory Adjustments

Use adjustments only to correct inventory — for example after a physical stocktake reveals a discrepancy, or when a TU was damaged and its volume must be reduced.

![Adjustment dialog](/screenshots/inventory/inventory-04-adjustment-dialog.png)

Before saving an adjustment:

1. Confirm you have selected the correct product or Transport Unit
2. Confirm the current stock status
3. Enter the correction value (positive to add, negative to reduce)
4. Write a clear reason in the notes field — future reconciliation depends on this explanation
5. Save and verify the Overview reflects the corrected balance

Do not use adjustments as a substitute for normal receiving or shipment workflows.

## Inventory Processing

Processing runs convert input timber into output stock. For example: round logs processed into sawn boards.

![Processing runs](/screenshots/inventory/inventory-05-processing-runs.png)

**Workflow:**

1. Open **Inventory → Processing** and start a new processing run
2. Select the input Transport Units — the raw material being converted

   ![Processing wizard step 1](/screenshots/inventory/inventory-06-processing-wizard-step-1.png)

3. Choose the input TUs to include

   ![Processing wizard input TUs](/screenshots/inventory/inventory-07-processing-wizard-input-tus.png)

4. Enter processing details: date, notes, output product type
5. Review the output stock values
6. Save or complete the processing run
7. Check In/Out — input TUs show a processing-out movement, output TUs show a receipt

Processing run statuses: **Draft** → **In Progress** → **Completed** or **Cancelled**.

## Common Problems

**"I can't add a TU to a shipment"**
The TU has not been received into inventory. Open In/Out and confirm a receipt movement exists. If not, verify the tally sheet was fully saved.

**"A TU shows as unavailable but I can see it in tally"**
Check if it is already assigned to another shipment, in an active processing run, or already shipped. Filter the In/Out ledger by the TU identifier.

**"Inventory totals look wrong"**
Check for an open processing run that hasn't been completed, or for tally sheet rows that are still unsaved (draft rows are not counted in inventory).

**"Which screen do I use for reconciliation?"**
Use In/Out for the movement audit trail and the **Reconciliation Report** (under Reports) for a structured comparison view.
