---
title: Consignments — User Manual
description: Step-by-step guide for creating, editing, and managing consignments in LumberLinq.
---

*Also searched as: shipment, shipments, export order, BL, bill of lading, packing list, container, sea port, vessel, ETA, ETD, financials tab, lock shipment.*

## Purpose

The Consignments module helps timber and logistics teams manage export, import, domestic sale, domestic purchase, and trading consignments in one place. It brings together consignment details, parties, Stock Units, documents, invoice values, payment tracking, export reports, share links, and audit/status information.

## Open the Consignments List

Go to **Consignments > List Consignments**.

The list shows:

- BL number or bill number
- Type
- Date
- Shipper
- Consignee
- Status stepper
- Stock Unit count
- Route summary
- Row actions for view, share, download/export, edit, payments, and delete

![Consignment list page](/screenshots/shipments/shipments-01-list-page.png)

## Search and Filter Consignments

Use the global search box to find consignments by BL number, partner, buyer order number, exporter reference, or related consignment text.

The list also includes column filters for BL number, shipper, consignee, and status. Use these when the global search returns too many results.

![Search and filter](/screenshots/shipments/shipments-02-search-filter.png)

![Column filter](/screenshots/shipments/shipments-03-column-filter.png)

## Create a Consignment

Select **New** from the Consignments list.

The create screen is organised into tabs:

- **Consignment Details**: type, mode, dates, ports, vessel/flight/vehicle details, and Incoterms or payment terms
- **Consignment Info**: shipper, consignee, notify party, exporter reference, buyer order, origin, and destination
- **Stock Units**: search and add available Stock Units
- **Documents**: BL, packing list, invoice, certificate, phyto, fumigation, and other consignment documents
- **Financials & Payments**: invoice amount, currency, insurance, freight terms, payment terms, payment summary, and payment history
- **Dispatch & Notes**: local tax/delivery fields, status, approved by, and remarks

![Create consignment — details tab](/screenshots/shipments/shipments-07-create-details-tab.png)

## Required Field Validation

If required consignment fields are missing, LumberLinq marks the relevant fields and tabs with validation indicators. Complete the mandatory fields before saving.

Common required information includes consignment type, mode of transport, required route details, Incoterms/payment terms, and party information.

![Required field validation](/screenshots/shipments/shipments-08-validation-required-fields.png)

## Edit Consignment Details

Open a consignment from the BL number link or the pencil icon.

Use the edit screen to update:

- Core consignment and route information
- Shipper, consignee, and notify party
- Linked Stock Units
- Document numbers and attachments
- Invoice and payment information
- Consignment status and remarks

![Edit — details tab](/screenshots/shipments/shipments-09-edit-details-tab.png)

![Edit — consignment tab](/screenshots/shipments/shipments-10-consignment-tab.png)

![Party consignment details](/screenshots/shipments/shipments-20-party-consignment-details.png)

![Dispatch & notes tab](/screenshots/shipments/shipments-15-local-goods-audit-tab.png)

## Stock Units

The Stock Units tab lets users search available units and link them to a consignment.

Only eligible, unassigned units are available. If a Stock Unit has not been received into inventory, the system prevents consignment assignment. This protects inventory accuracy before dispatch.

![Stock Units tab](/screenshots/shipments/shipments-11-transport-units-tab.png)

![Stock Units linked](/screenshots/shipments/shipments-21-transport-units-linked.png)

![Consignment view with Stock Units](/screenshots/shipments/shipments-25-shipment-view-with-transport-units.png)

![Second Stock Unit](/screenshots/shipments/shipments-26-shipment-view-second-transport-unit.png)

**Viewing the Stock Units of a Consignment.** On the consignment view page each Stock Unit has its own tab. Inside it you see the same layout as a shared Stock Unit: a strip with the Transport ID or product and small chips, the tabs (Tallysheet, Photos, Summary), and a **Stock Unit details** button that opens the read-only details in a side panel (a sheet on a phone).

## Documents

Use the Documents tab to maintain consignment document numbers and upload files. Supported document areas include BL, packing list, commercial invoice, certificate-related documents, and other attachments.

![Documents tab](/screenshots/shipments/shipments-12-documents-tab.png)

## Financials and Payments

The Financials & Payments tab tracks invoice value, currency, insurance, freight terms, payment terms, due date, payment status, and payment history.

Use **Record Payment** to add a received or paid amount with date, mode, reference number, amount, currency, and notes.

![Financials & payments tab](/screenshots/shipments/shipments-13-financials-payments-tab.png)

![Record payment form](/screenshots/shipments/shipments-14-record-payment-form.png)

![Payments summary](/screenshots/shipments/shipments-22-payments-summary-detailed.png)

![Payments record form](/screenshots/shipments/shipments-23-payments-record-form-detailed.png)

## Export Consignment Reports

Use the **Export** action from the consignment edit screen or the download action from the list. The export dialog supports access-level options, report format choices, watermark, company logo, photo inclusion, UOM row, and chart/stat options where available.

![Export dialog](/screenshots/shipments/shipments-16-export-dialog.png)

![Export with Stock Units](/screenshots/shipments/shipments-24-export-with-transport-units.png)

## Share Consignment Links

Use the share action from the list to create public, protected, or private consignment links. The share dialog lets users control duration, access limits, download permission, and document visibility.

**Show details in link preview** controls the card WhatsApp and other chat apps show when the link is pasted: on a public link it shows the consignment's real details (only what your field-access settings allow); turn it off for a plain card. Protected and Private links always show a locked card with only the Stock Unit count.

![Share menu](/screenshots/shipments/shipments-04-share-menu.png)

**Which files a link shows.** Every uploaded file (BL, invoice, certificates and so on) has its own setting: **Anyone with the link**, **LumberLinq users only**, or **My team only**. A Public link shows only the files marked "Anyone with the link"; a Protected link also shows "LumberLinq users only"; a Private link (your own team) shows all. A file marked "My team only" is never shown to outsiders. In the share dialog you can also hide a whole document type or show only its file name. The download icon appears only when the link's Download permission is on (it is off by default). A document box (for example BL File) appears on the shared page whenever a file of that type is shown, even on a stock-out consignment. The shared consignment page has no Export button; export a consignment inside LumberLinq. A Stock Unit opened from a shared consignment offers a PDF export (when Download permission is on).

## Choosing What a Consignment Link Shows (Consignment Field Access)

Company admins decide, field by field, what Public and Protected consignment links show. Open **Main Menu → Consignments → Consignment Field Access** (admins only).

- Each field has **Hidden** or **View** for **Anyone with the link** and for **LumberLinq users only**. "My team only" always sees everything and cannot be changed.
- The groups (Core Consignment, Route & Vessel, Location & Logistics, Parties, Documents, Financials, Audit) each have a master switch. Switching a group off hides every field of that group for that kind of link, whatever the single field switches say. Switching Documents off also hides the files. The Stock Units group switch does not hide the Stock Units tab.
- **Preview as visitor** shows what each kind of visitor will see, with hidden fields crossed out. It changes nothing.
- **Presets** — **Public (minimal)**, **Buyer** or **Agent**: you see what will be shown and hidden before saving, with a red warning when fields become visible to anyone with the link. Presets never switch on money, tax or audit fields.
- **History** — the last 200 changes: who, when, and what changed.
- Switching one field to View for **Anyone with the link** asks you to confirm first.

## Lock a Consignment

Use the **Lock** action on the edit screen when a consignment should no longer be changed. Locked consignments show a lock badge and prevent normal editing.

![Lock confirmation dialog](/screenshots/shipments/shipments-17-lock-confirmation-dialog.png)

## Read-Only View

The view action opens a read-only consignment view for reviewing consignment details without editing.

![Read-only view](/screenshots/shipments/shipments-18-read-only-view.png)

## Inventory and Reconciliation

Consignment assignment is connected to inventory. Stock Units must be received into inventory before they can be linked to a consignment. Inventory screens help teams review available stock, movement history, adjustments, processing runs, reconciliation, and inventory reports.

![Inventory overview](/screenshots/shipments/shipments-27-inventory-overview.png)

![Inventory in/out ledger](/screenshots/shipments/shipments-28-inventory-in-out-ledger.png)

![Inventory adjustment dialog](/screenshots/shipments/shipments-29-inventory-adjustment-dialog.png)

![Processing runs](/screenshots/shipments/shipments-30-inventory-processing-runs.png)

![Processing run wizard](/screenshots/shipments/shipments-31-processing-run-wizard.png)

![Reconciliation report](/screenshots/shipments/shipments-32-reconciliation-report.png)

![Inventory report](/screenshots/shipments/shipments-33-inventory-report.png)

## Mobile View

The Consignments list is responsive and can be used on smaller screens for search, review, and follow-up actions.

![Mobile list view](/screenshots/shipments/shipments-19-mobile-list-view.png)
