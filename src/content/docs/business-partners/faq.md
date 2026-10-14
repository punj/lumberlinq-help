---
title: Business Partners — FAQ
description: Frequently asked questions about Business Partners in LumberLinq.
---

*Also searched as: buyer, seller, customer, supplier, vendor, client, party, contact, trading partner, add customer, new supplier, KYC, bank details.*

## Why don't I see Business Partners in my menu?

Business Partners are part of the **Sapling**, **Tree** and **Forest** plans. On the free Seedling plan the module is not shown. If your plan ended and moved you to Seedling, your partners are hidden, not deleted: renewing a plan that includes them brings them back at once. On Sapling the Business Partner Report is not available, because it is made from consignments (a Tree and Forest part).

## What is a Business Partner?

A Business Partner is a buyer, seller, exporter, importer, supplier, trader, or other company used in LumberLinq transactions.

## Why do I need Business Partners?

They are reused across consignments, tally sheets, inventory, documents, and reports so partner information stays consistent.

## What fields are required?

Required fields include Company Name, Party Type, Registration Type, Party Category, Email, Phone 1, Address Line 1, Country, and Zip Code.

## Is the Tax ID or GSTIN required?

No, it is optional. If you enter one it is checked: at least 3 characters, and for a partner in India it must be a valid 15-character GSTIN. Two partners with an empty Tax ID are not treated as duplicates of each other.

## Can I import my parties from Tally?

Yes. On **Business Partners > View Business Partners** click **Import from Tally** and choose a file exported from Tally (Excel or CSV). Keep only the Sundry Debtors and Sundry Creditors in the file. Debtors become Buyers and creditors become Sellers. See "Import Business Partners from Tally" in the user manual.

## Why were some rows not imported?

After the import the result lists every row that was not imported, with the reason. The usual ones: the partner already exists (same name or Tax ID), your plan's Business Partner limit was reached, Address Line 1 is missing, the GSTIN is not valid for India, or the row is a Tally ledger that is not a Sundry Debtor or Sundry Creditor.

## What does Party Type mean?

Party Type defines how the partner is used: Buyer, Seller, or Both.

## Can I make a partner inactive?

Yes. Use the activate/deactivate action from the list or the active toggle in the form. Inactive partners are hidden from new transactions.

## Can I upload files?

Yes, but the partner must be saved first. Open the saved partner and use the Attachments tab.

## Can I add bank accounts?

Yes. Use the Bank Accounts tab and click Add Bank Account.

## Why can I not delete a partner?

Deletion may be blocked if the partner is the owner company or is referenced by active transaction records.

## Why do I see a duplicate warning?

LumberLinq checks for existing partners with the same company name or tax ID before saving.
