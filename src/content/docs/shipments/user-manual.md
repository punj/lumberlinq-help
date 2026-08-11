---
title: Consignments — User Manual
description: Step-by-step guide for creating, editing, and managing consignments in LumberLinq.
---

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

![Share menu](/screenshots/shipments/shipments-04-share-menu.png)

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
