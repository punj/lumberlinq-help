---
title: Shipments — User Manual
description: Step-by-step guide for creating, editing, and managing shipments in LumberLinq.
---

## How to Access Shipments

**Sidebar:** Main Menu → **Shipments**
**URL:** `/shipments`

| Action | How |
|--------|-----|
| View all shipments | Open Shipments from sidebar |
| Create a new shipment | Click **New** from the list |
| Edit a shipment | Click the pencil icon on any row |
| Read-only view | Click the eye icon |
| Share a shipment | Click the share icon |
| Export / download | Click the download icon |
| Record a payment | Click the payment icon |

## Purpose

The Shipments module helps timber and logistics teams manage export, import, domestic sale, domestic purchase, and trading shipments in one place. It brings together shipment details, parties, transport units, documents, invoice values, payment tracking, export reports, share links, and audit/status information.

## Open the Shipments List

Go to **Shipments > List**.

The list shows:

- BL number or bill number
- Shipment type
- Shipment date
- Shipper
- Consignee
- Status stepper
- Transport-unit count
- Route summary
- Row actions for view, share, download/export, edit, payments, and delete

![Shipment list page](/screenshots/shipments/shipments-01-list-page.png)

## Search and Filter Shipments

Use the global search box to find shipments by BL number, partner, buyer order number, exporter reference, or related shipment text.

The list also includes column filters for BL number, shipper, consignee, and status. Use these when the global search returns too many results.

![Search and filter](/screenshots/shipments/shipments-02-search-filter.png)

![Column filter](/screenshots/shipments/shipments-03-column-filter.png)

## Create a Shipment

Select **New** from the Shipments list.

The create screen is organised into tabs:

- **Shipment Details**: shipment type, mode, dates, ports, vessel/flight/vehicle details, and Incoterms or payment terms
- **Consignment Info**: shipper, consignee, notify party, exporter reference, buyer order, origin, and destination
- **Transport Units**: search and add available transport units
- **Documents**: BL, packing list, invoice, certificate, phyto, fumigation, and other shipment documents
- **Financials & Payments**: invoice amount, currency, insurance, freight terms, payment terms, payment summary, and payment history
- **Local Goods & Audit**: local tax/delivery fields, status, approved by, and remarks

![Create shipment — details tab](/screenshots/shipments/shipments-07-create-details-tab.png)

## Required Field Validation

If required shipment fields are missing, LumberLinq marks the relevant fields and tabs with validation indicators. Complete the mandatory fields before saving.

Common required information includes shipment type, mode of transport, required route details, Incoterms/payment terms, and party information.

![Required field validation](/screenshots/shipments/shipments-08-validation-required-fields.png)

## Edit Shipment Details

Open a shipment from the BL number link or the pencil icon.

Use the edit screen to update:

- Core shipment and route information
- Shipper, consignee, and notify party
- Linked transport units
- Document numbers and attachments
- Invoice and payment information
- Shipment status and remarks

![Edit — details tab](/screenshots/shipments/shipments-09-edit-details-tab.png)

![Edit — consignment tab](/screenshots/shipments/shipments-10-consignment-tab.png)

![Party consignment details](/screenshots/shipments/shipments-20-party-consignment-details.png)

![Local goods & audit tab](/screenshots/shipments/shipments-15-local-goods-audit-tab.png)

## Transport Units

The Transport Units tab lets users search available units and link them to a shipment.

Only eligible, unassigned units are available. If a transport unit has not been received into inventory, the system prevents shipment assignment. This protects inventory accuracy before dispatch.

![Transport units tab](/screenshots/shipments/shipments-11-transport-units-tab.png)

![Transport units linked](/screenshots/shipments/shipments-21-transport-units-linked.png)

![Shipment view with transport units](/screenshots/shipments/shipments-25-shipment-view-with-transport-units.png)

![Second transport unit](/screenshots/shipments/shipments-26-shipment-view-second-transport-unit.png)

## Documents

Use the Documents tab to maintain shipment document numbers and upload files. Supported document areas include BL, packing list, commercial invoice, certificate-related documents, and other attachments.

![Documents tab](/screenshots/shipments/shipments-12-documents-tab.png)

## Financials and Payments

The Financials & Payments tab tracks invoice value, currency, insurance, freight terms, payment terms, due date, payment status, and payment history.

Use **Record Payment** to add a received or paid amount with date, mode, reference number, amount, currency, and notes.

![Financials & payments tab](/screenshots/shipments/shipments-13-financials-payments-tab.png)

![Record payment form](/screenshots/shipments/shipments-14-record-payment-form.png)

![Payments summary](/screenshots/shipments/shipments-22-payments-summary-detailed.png)

![Payments record form](/screenshots/shipments/shipments-23-payments-record-form-detailed.png)

## Export Shipment Reports

Use the **Export** action from the shipment edit screen or the download action from the list. The export dialog supports access-level options, report format choices, watermark, company logo, photo inclusion, UOM row, and chart/stat options where available.

![Export dialog](/screenshots/shipments/shipments-16-export-dialog.png)

![Export with transport units](/screenshots/shipments/shipments-24-export-with-transport-units.png)

## Share Shipment Links

Use the share action from the list to create public, protected, or private shipment links. The share dialog lets users control duration, access limits, download permission, and document visibility.

![Share menu](/screenshots/shipments/shipments-04-share-menu.png)

## Lock a Shipment

Use the **Lock** action on the edit screen when a shipment should no longer be changed. Locked shipments show a lock badge and prevent normal editing.

![Lock confirmation dialog](/screenshots/shipments/shipments-17-lock-confirmation-dialog.png)

## Read-Only View

The view action opens a read-only shipment view for reviewing shipment details without editing.

![Read-only view](/screenshots/shipments/shipments-18-read-only-view.png)

## Inventory and Reconciliation

Shipment assignment is connected to inventory. Transport units must be received into inventory before they can be linked to a shipment. Inventory screens help teams review available stock, movement history, adjustments, processing runs, reconciliation, and inventory reports.

![Inventory overview](/screenshots/shipments/shipments-27-inventory-overview.png)

![Inventory in/out ledger](/screenshots/shipments/shipments-28-inventory-in-out-ledger.png)

![Inventory adjustment dialog](/screenshots/shipments/shipments-29-inventory-adjustment-dialog.png)

![Processing runs](/screenshots/shipments/shipments-30-inventory-processing-runs.png)

![Processing run wizard](/screenshots/shipments/shipments-31-processing-run-wizard.png)

![Reconciliation report](/screenshots/shipments/shipments-32-reconciliation-report.png)

![Inventory report](/screenshots/shipments/shipments-33-inventory-report.png)

## Mobile View

The Shipments list is responsive and can be used on smaller screens for search, review, and follow-up actions.

![Mobile list view](/screenshots/shipments/shipments-19-mobile-list-view.png)
