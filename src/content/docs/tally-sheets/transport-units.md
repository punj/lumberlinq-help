---
title: Transport Units
description: Understand Transport Units — how they are created, their status lifecycle, and how they connect tally sheets to inventory and shipments.
---

A Transport Unit (TU) is the physical timber lot or container that links tally measurement data to inventory and shipments. Every TU is created from a tally sheet and carries the full context of that measurement: product, loading site, party, volume, and status.

TUs are the central link in the LumberLinq data chain:

**Tally Sheet → Transport Unit → Inventory → Shipment → Report**

## Transport Unit Fields

When creating a TU (during tally sheet creation), these fields define the unit:

| Field | Description |
|-------|-------------|
| Transport ID | Your reference — container number, truck number, vessel hold, or any internal identifier. Must be unique within your account. |
| Product | Determines whether the tally grid is Round (Length + Girth) or Square (Width + Thickness + Length + Pieces). Cannot be changed after saving. |
| Transport Mode | Truck, Vessel, Rail, Air, or Other. Used in reports. |
| Loading Site | Where the timber physically is. Links to your Loading Sites list. Drives site utilisation in the Dashboard. |
| Photos | Site, stacking, or loading photos. Count shown in TU list; included in Bundle exports. |
| Documents | TU-specific files such as weighbridge slips or inspection reports. |

## Viewing All Transport Units

Go to **Tally Sheets → View Transport Units** to see all TUs with their status, volume, photo count, and linked shipment.

![Transport unit list view](/screenshots/tally/tallysheet-transport-01-view-trans.png)

Use search and filters to find TUs by Transport ID, product, loading site, or status.

## Status Lifecycle

A TU moves through these states:

1. **Draft** — tally sheet exists but rows are unsaved or the TU is not yet committed
2. **Received** — TU is saved and received into inventory; now available for shipment
3. **Assigned** — TU is linked to an active shipment; no longer available for other shipments
4. **In Process** — TU is in a processing run; temporarily unavailable
5. **Shipped** — the shipment containing this TU has been completed

## Adding a TU to a Shipment

1. Open the shipment and go to the **Transport Units** tab
2. Search for the TU by Transport ID or product
3. Select it and confirm

If the TU appears in search but cannot be added, see the troubleshooting section below.

## Why a TU Cannot Be Added to a Shipment

| Cause | Fix |
|-------|-----|
| Not received into inventory | Go to **Inventory → In/Out** and confirm a receipt movement exists. If not, verify the tally sheet was fully saved. |
| Already assigned to another shipment | Check the TU's linked shipment reference in the View Transport Units list. A TU can only be in one active shipment at a time. |
| Currently in a processing run | Wait for the processing run to complete, or cancel it if created in error. |
| Already shipped | The TU has completed a prior shipment. Its volume is accounted for and cannot be reshipped. |

## Transport Units in Reports

The **Transport Unit Report** (under Reports) shows all TUs with volume, status, product, loading site, and shipment linkage. Use it to:

- Identify TUs that are in stock but not yet assigned to a shipment
- Review volume shipped in a period
- Audit TU history by product or loading site
