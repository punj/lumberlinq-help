---
title: Consignments — FAQ
description: Frequently asked questions about the Consignments module in LumberLinq.
---

*Also searched as: shipment, shipments, BL, bill of lading, packing list, container, sea port, vessel, ETA, ETD, financials tab.*

## What is a consignment in LumberLinq?

A consignment is a movement record for timber goods. It can include parties, route details, Stock Units, documents, invoice values, payments, status, and export/share controls.

## Which consignment types are supported?

The supported types are Export, Import, Domestic Sale, Domestic Purchase, and Trading.

## Can I search consignments by BL number?

Yes. Use the global search or the BL number column filter on the Consignments list.

## What actions are available from the consignment list?

The list provides view, share, download/export, edit, payment quick panel, and delete actions.

## Why can I not add a Stock Unit to a consignment?

Only eligible units are listed: not already in another consignment, and with a Direction that fits the deal (Stock Out on a sale, Stock In on a purchase). Receiving is not required — link before or after. Also check the consignment is not Closed/Cancelled or an already-departed sale, and type part of the Stock Unit ID, Transport ID, container / truck number or product name. See [Buying and Selling Timber](/inventory/buy-sell-stock-in-out-consignment/).

## Can I upload consignment documents?

Yes. The Documents tab supports document numbers and file uploads for consignment-related document categories.

## Can I see consignment parties clearly?

Yes. The Deal tab shows the shipper (seller), consignee (buyer), notify party and the references; the Route & Timing tab shows the countries and destination.

## Can I track payments?

Yes. Use the Money tab to record payment terms (required once an invoice amount is entered), payment history, invoice totals, received/paid amounts, and outstanding balances.

## Can I export a consignment?

Yes. The export dialog supports format and visibility options, including Excel, PDF, and bundle-style export choices.

## Can I share consignment details with another party?

Yes. The share action supports public, protected, and private links with expiry, access limits, download permission, and document access settings.

## What happens when a consignment is locked?

The consignment is marked as locked and normal editing is prevented. A lock is permanent: you type LOCK to confirm and there is no unlock, so lock only when everything is final.

## Does changing the status change my stock?

No. Stock goes up only when you receive a Stock In into inventory and down only when you confirm a Stock Out. The status only shows where the deal is. On a purchase, Arrived, Unstuffing and Delivered offer to receive the goods.

## Why can I not choose an earlier status or Cancelled?

Stock was already received through that consignment, so its status can only move forward (for example Arrived to Delivered to Closed).

## Why does an orange note appear under "Invoice per CBM"?

Your invoice amount per CBM is 3 times higher or lower than your earlier consignments of the same type and currency (at least 3 are needed). It is only a reminder to check for a typing mistake; it never blocks saving.

## Can the arrival be on the same day as the departure?

Yes. Only an arrival earlier than the departure is refused.

## Where do inventory and reconciliation fit?

Inventory controls whether Stock Units are available for a consignment. The Inventory Overview, In/Out ledger, adjustment dialog, processing runs, reconciliation report, and inventory report support consignment readiness and stock visibility.

## Is the Consignments module mobile responsive?

Yes. The Consignments list adapts to a narrow viewport for search, review, and follow-up actions.

## Who decides which consignment fields a share link shows?

Company admins, in Main Menu → Consignments → Consignment Field Access. For each field choose Hidden or View for "Anyone with the link" and for "LumberLinq users only". Group switches hide a whole group, and the buttons Preview as visitor, Presets and History are at the top of the screen.

## Why does a file not show on my consignment share link?

Each file has its own setting: Anyone with the link, LumberLinq users only, or My team only. A Public link shows only "Anyone with the link" files, a Protected link also shows "LumberLinq users only" files, and "My team only" files are never shown to outsiders.

## Why is there no download icon on a shared consignment?

Download permission is off unless you turn it on for that link.
