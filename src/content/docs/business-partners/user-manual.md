---
title: Business Partners — User Manual
description: Step-by-step guide for viewing, adding, editing, and managing Business Partners in LumberLinq.
---

*Also searched as: buyer, seller, customer, supplier, vendor, client, party, contact, trading partner, add customer, new supplier, KYC, bank details.*

Business Partners are the companies and contacts your organisation trades with in LumberLinq. A partner can be a buyer, seller, exporter, importer, or both buyer and seller (this is set by the **Party Type** field). Common examples: your buyers, your sellers/suppliers, and other trading contacts.

Business Partners are used across consignments, tally sheets, inventory, documents, and reports.

## How to Create a Business Partner

1. Open **Business Partners > View Business Partners**.
2. Click **New Partner**.
3. On the **Identity** tab, fill in the required fields: Company Name, Party Type (Buyer, Seller, or Both), Registration Type, Tax ID / GSTIN, and Party Category. Contact Person and Reference Code are optional here.
4. Click the **Contact & Location** tab. Fill in Email, Phone 1, Address Line 1, Country, and Zip Code (all required), plus State, City, Phone 2, Address Line 2, and Website if you have them.
5. Click the **Operations** tab if you want to set internal details — Linked User ID, External Code, Tags, or Notes. This tab is optional.
6. Skip the **Attachments** and **Bank Accounts** tabs for now — both only unlock after the partner is saved for the first time.
7. Click **Save Partner** (top-right or bottom-right of the form).

Once saved, the form switches to edit mode and the Attachments and Bank Accounts tabs become usable — see below.

![Create Identity tab](/screenshots/bp/actual-04-create-identity-tab.png)

## View Business Partners

Open **Business Partners > View Business Partners**.

![Business Partner list](/screenshots/bp/actual-01-business-partners-list.png)

The list shows partner name, party type, contact person, phone, tax ID, registration type, country, status, and row actions.

You can:

- Search partners.
- Filter by status.
- Sort table columns.
- Edit a partner.
- Activate or deactivate a partner.
- Delete partners when they are not protected by related records.

## Search Partners

Use the search box to find partners by name, email, contact person, or tax ID.

![Search demo partners](/screenshots/bp/actual-02-search-demo-partners.png)

## Business Partner Form — Tab Reference

The Create/Edit form is split into five tabs, tabbed through in this order: Identity, Contact & Location, Operations, Attachments, Bank Accounts. Field-by-field detail for each tab is below.

### Identity

![Create Identity tab](/screenshots/bp/actual-04-create-identity-tab.png)

Required fields include:

- Company Name
- Party Type
- Registration Type
- Tax ID or GSTIN
- Party Category

Party Type options include Buyer, Seller, and Both.

### Contact & Location

![Create Contact and Location tab](/screenshots/bp/actual-05-create-contact-location-tab.png)

Required fields include:

- Email
- Phone 1
- Address Line 1
- Country
- Zip Code

Country, state, and city fields are selected from dropdowns.

### Operations

![Create Operations tab](/screenshots/bp/actual-06-create-operations-tab.png)

Use Operations for internal details such as linked user ID, external code, tags, and notes.

### Attachments

![Create Attachments tab](/screenshots/bp/actual-07-create-attachments-tab.png)

Attachments are available after the partner is saved.

### Bank Accounts

![Create Bank Accounts tab](/screenshots/bp/actual-08-create-bank-accounts-tab.png)

Click **Add Bank Account** to add banking details such as bank name, account number, IFSC/SWIFT, and currency.

## Edit a Business Partner

1. Open **Business Partners > View Business Partners**.
2. Click the partner's name, or use the edit row action, to open it.
3. Click through the tabs (Identity, Contact & Location, Operations, Attachments, Bank Accounts) and make your changes.
4. Click **Update Partner**.

![Edit Identity tab](/screenshots/bp/actual-09-edit-identity-tab.png)

## Attach Files to a Partner

Attachments only unlock once a partner has been saved at least once.

1. Open the partner from the list.
2. Click the **Attachments** tab.
3. Drag files onto the drop zone, or click **Browse Files** to pick them from your device.
4. Wait for each file to finish uploading (shown by its progress bar and a success checkmark).

Supported use cases include tax certificates, compliance documents, and trade documents.

![Edit Attachments tab](/screenshots/bp/actual-10-edit-attachments-tab.png)

## Maintain Bank Details

1. Open the partner from the list.
2. Click the **Bank Accounts** tab.
3. Click **Add Bank Account** to add a new one, then fill in Bank Name, Account Number, IFSC/SWIFT, and Currency. When typing a new account number, a Confirm Account Number field appears — retype the number there to catch typos (pasting into it is blocked on purpose).
4. To remove an account, click the trash icon on its card.
5. Click **Update Partner** to save your changes.

Existing bank accounts appear as account cards. An already-saved account number is masked; users with the right permission can click the eye icon to reveal it (every reveal is logged).

![Edit Bank Accounts tab](/screenshots/bp/actual-11-edit-bank-accounts-tab.png)

## Activate or Deactivate a Partner

1. Open **Business Partners > View Business Partners**.
2. Find the partner's row and use its status action (activate/deactivate).
3. Confirm the change in the dialog that appears.

![Deactivate confirmation](/screenshots/bp/actual-03-deactivate-confirmation.png)

Inactive partners are hidden from new transactions but remain available for historical records. The owner company cannot be deactivated.
