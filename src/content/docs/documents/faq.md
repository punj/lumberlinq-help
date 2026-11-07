---
title: Business Documents — FAQ
description: Frequently asked questions about delivery notes, goods received notes, estimates, statements, receipts, packing lists and proforma invoices in LumberLinq.
---

*Also searched as: documents module, delivery note, challan, GRN, estimate, statement, receipt, packing list, proforma, document number, prefix, Rev 2, logo, signature, stamp.*

## Why don't I see "Documents" in the download window?

Documents is an optional paid module. If your company does not have it, the **Documents** choice, the print icon on payments and the **Statement** button are hidden. Ask your LumberLinq contact for the module.

## Why can't I see Estimate or Proforma?

They print the consignment's prices, so they also need the **Price module**. Without it only the other documents are offered.

## Can I change the language of the documents?

Not yet. All documents are written in English.

## I downloaded the same document twice. Why is the number the same?

On purpose. The same consignment (or payment) always keeps its number. If something on it changed since the last download, the number stays and the page shows **Rev 2** (then Rev 3 and so on).

## Can I change the numbers, for example start with my own prefix?

You can change the **prefix** (for example DN to DLV) in **Company Branding → Documents**, until the first document of that kind has been made. The counter itself always runs on by itself, per year, so numbers never repeat.

## Why is the Delivery Note showing "Delivery Challan"?

For companies in India the Delivery Note carries that small line so it is recognised at checkpoints. Please check the layout with your accountant before you use it to move goods without a sale.

## My logo is missing on the documents.

A custom logo needs **Custom Branding**, and it must be uploaded on **Company Branding**. If there is no logo, your company name is printed with a monogram instead.

## Can I remove "Prepared with LumberLinq"?

Yes, with **Custom Branding**: switch it off in **Company Branding → Documents**. Without it the line stays.

## The Receipt or Statement has no "≈" amount in my books currency.

Every payment and invoice needs a rate to your books currency. If one has none, the line is left out so that you never see a wrong total. Add the rate on the payment or consignment.

## Is this a tax invoice?

No. The Proforma / Commercial Invoice is for customs and the bank. GST tax invoices, e-invoices and e-way bills are not made by LumberLinq.

## Does an Estimate hold my stock?

The Estimate PDF does not. The draft consignment it comes from does: its Stock-Out Stock Units reserve the quantity until the consignment is locked, cancelled or deleted.

## I made a quote and the buyer never answered. Will the stock stay held?

It stays held until someone deals with the draft, but you are told. The Estimate's valid-until date is saved on the consignment (a date you type is saved, an empty box keeps the saved one), and the owner and admins get one summary a day of quotes that expire in 2 days, expire today or expired yesterday (plus older expired ones every Monday). Nothing is released by itself. Download the Estimate again with a later date to keep the quote, or delete the draft consignment to release the stock.

## Can I get a Delivery Note from a Stock Out?

Yes. Open the Stock Unit's **Download** window and choose **Documents**: you can make a **Delivery Note** for that one Stock Unit (a Stock Out) or a **Goods Received Note** for one that was received. They are also available from the consignment, for all its Stock Units together.

## Where do the grade, length and HSN on the documents come from?

The **HSN** is the HS code of the product. The **grade and length** are read from the Stock Unit's tally, for example "Grade A 12, B 8 pcs · 2.40–3.10 m". If a tally has no grades, no grade line is printed.
