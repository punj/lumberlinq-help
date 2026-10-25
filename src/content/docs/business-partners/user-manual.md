---
title: Business Partners — User Manual
description: Step-by-step guide for viewing, adding, editing, and managing Business Partners in LumberLinq.
---

*Also searched as: buyer, seller, customer, supplier, vendor, client, party, contact, trading partner, add customer, new supplier, KYC, bank details.*

Business Partners are the companies and contacts your organisation trades with in LumberLinq. A partner can be a buyer, seller, exporter, importer, or both buyer and seller (this is set by the **Party Type** field). Common examples: your buyers, your sellers/suppliers, and other trading contacts.

Business Partners are used across consignments, tally sheets, inventory, documents, and reports.

> **Plan note.** Business Partners are part of the **Sapling**, **Tree** and **Forest** plans. On the free Seedling plan the Business Partners menu is not shown. On Sapling, Business Partners work as a simple address book (the consignment parts and the Business Partner Report belong to Tree and Forest). Your partners are never deleted: when a plan that includes them is active again, they are all back at once.

## How to Create a Business Partner

1. Open **Business Partners > View Business Partners**.
2. Click **New Partner**.
3. On the **Identity** tab, fill in the required fields: Company Name, Party Type (Buyer, Seller, or Both), Registration Type, and Party Category. Tax ID / GSTIN, Contact Person and Reference Code are optional here.
4. Click the **Contact & Location** tab. Fill in Email, Phone 1, Address Line 1, Country, and Zip Code (all required), plus State, City, Phone 2, Address Line 2, and Website if you have them.
5. Click the **Operations** tab if you want to set internal details — Linked User ID, External Code, Tags, or Notes. This tab is optional.
6. Skip the **Attachments** and **Bank Accounts** tabs for now — both only unlock after the partner is saved for the first time.
7. Click **Save Partner** (top-right or bottom-right of the form).

Once saved, the form switches to edit mode and the Attachments and Bank Accounts tabs become usable — see below.

At the top of the form a **Required fields** bar shows how many of the required fields are filled (for example 2 / 4); it turns green with a tick when all are done. Each field's name sits inside the box and moves up to the top edge when you click or type, so it is never hidden behind what you typed.

![Create Identity tab](/screenshots/bp/actual-04-create-identity-tab.png)

## View Business Partners

Open **Business Partners > View Business Partners**.

![Business Partner list](/screenshots/bp/actual-01-business-partners-list.png)

The list shows partner name, party type, contact person, phone, tax ID, registration type, country, status, and row actions.

**Summary tiles.** Above the list, small tiles show how many active partners you have in total and how many are Buyers, Sellers, or Both. They count your whole company, not only the page on screen, and update by themselves when someone adds or changes a partner.

**Quick filter chips.** Under the filters, tap **All**, **Buyers**, **Sellers**, or **Both** to see only that kind of partner. The chip also narrows the search box results, and the refresh button next to the filters clears it.

**More on each row.** Under the name you see the type, the place as city and country name (for example "Dubai, United Arab Emirates"), the contact person, and the phone number. On a phone the number is a tap-to-call link. The partner's category (Domestic or International) and up to three tags appear as small chips. Bank details are never shown in the list.

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
- Party Category

Tax ID or GSTIN is optional. If you enter one it is checked: at least 3 characters, and for a partner in India it must be a valid 15-character GSTIN.

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

## Import Many Business Partners at Once

On the **View Business Partners** page there is an **Import** button (on a phone it is in the **...** menu):

- **Import** — from an Excel or CSV file. Download the template first: it has the right column headers and an example row.

It opens guided steps: **Upload**, **Map Columns**, **Resolve Values**, **Review**, **Confirm**. Nothing is saved until you confirm at the end.

- A partner with the same name, or the same Tax ID, as one you already have is skipped. It is never overwritten.
- The import follows your plan's Business Partner limit. Rows beyond the limit are skipped and reported as "Plan limit reached".
- Rows that cannot be imported are listed with the reason, for example a missing Address Line 1 or an invalid GSTIN for India. Fix the file and import again; the rows already created are skipped as duplicates.
- Tax ID / GSTIN is optional.

<!-- "Import from Tally" is taken out for now (2026-10-14, owner decision). To bring it back, remove these comment marks.

## Import Business Partners from Tally

Use this when your buyers and suppliers are already in Tally.

1. In Tally, export your list of ledgers (accounts) to Excel or CSV. Keep only the **Sundry Debtors** and **Sundry Creditors**. Other ledgers (bank accounts, duties and taxes, sales and so on) are not business partners and are not imported.
2. In LumberLinq open **Business Partners > View Business Partners** and click **Import from Tally**.
3. Choose your file. If the first rows of the file are a report title, raise **Skip rows at the top** until the column names are the first row.
4. **Map Columns:** LumberLinq recognises the usual Tally column names (name, group such as "Under" or "Parent", GSTIN, address, state, pincode, phone, email). Check the match and fix any column it missed. Name and Address must be matched.
5. **Resolve Values:** if a country, state or city is not an exact match, pick the right one from the suggestions. If a group such as "Bank Accounts" shows up here, choose **Keep as typed**; that row is reported as not imported.
6. **Review**, then **Confirm.** The result shows how many partners were created, how many already existed, how many were over your plan limit, and the reason for every row that was not imported.

What LumberLinq fills in for you:

- Sundry Debtors become **Buyers** and Sundry Creditors become **Sellers**. If the file has no group column, the partner is set to **Both**.
- Registration Type is set to **Company**.
- If the file has no country, the partner gets **your own company's country**.
- Party Category is **Domestic** when the partner is in your company's country and **International** otherwise.
- The Tally ledger name is saved in the partner's **External Code** field so you can match it with Tally later.

Good to know:

- A party listed under both Sundry Debtors and Sundry Creditors is imported once, as whichever row comes first. Change its Party Type to **Both** afterwards if needed.
- "Not Applicable", "NA" or "Unregistered" in the GSTIN column counts as empty, not as a wrong GSTIN.
- If your Tally export uses different column names, use the **Map Columns** step to pick the right column for each field.
-->

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
