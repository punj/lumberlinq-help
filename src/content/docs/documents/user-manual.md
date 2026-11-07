---
title: Business Documents — User Manual
description: Numbered A4 documents from your own data in LumberLinq - delivery note, goods received note, estimate, statement of account, payment receipt, packing list and proforma invoice.
---

*Also searched as: delivery note, delivery challan, goods received note, GRN, estimate, quotation, statement of account, payment receipt, payment advice, packing list, proforma invoice, commercial invoice, document number.*

## What is the Documents module?

Documents is an **optional paid module**. It makes print-ready **A4** documents (PDF, and Excel for three of them) from data you already hold in LumberLinq. It never changes your stock, prices or payments. Every document is written in **English** and carries a **number** such as **DN-2026-0007**.

If your company does not have the module, you will not see the **Documents** choice in the download window, the print icon on payments, or the **Statement** button on business partners. Ask your LumberLinq contact for the module.

## The seven documents

| Document | What it is for | Where you start it |
|---|---|---|
| **Delivery Note** (shown with a small "Delivery Challan" line for companies in India) | Goods leaving your yard. Parties, vehicle, driver, Stock Units with HSN code, a short grade and length description, pieces and net volume. No prices. | Consignment → **Download** → **Documents**, or one Stock Out: the Stock Unit's **Download** → **Documents** |
| **Goods Received Note** | Goods arriving. The supplier's paper figures next to what was counted, with differences shaded. The record for a shortage claim. | Consignment → **Download** → **Documents**, or a received Stock Unit: its **Download** → **Documents** |
| **Estimate** | A price offer from the consignment's priced Stock Units, with valid-until date, terms, discount and total. Needs the **Price module** too. PDF or Excel. | Consignment → **Download** → **Documents** |
| **Packing List** | The whole consignment, grouped by container with seals, HSN code, grade and length, pieces and net volume. No prices. PDF or Excel. | Consignment → **Download** → **Documents** |
| **Proforma / Commercial Invoice** | For customs and the bank. A **Proforma Invoice** until the consignment is locked, then a **Commercial Invoice**. Not a GST tax invoice. Needs the Price module too. | Consignment → **Download** → **Documents** |
| **Payment Receipt** (**Payment Advice** for money paid out) | One page for one payment. | The **print icon** on a payment row (Money tab) |
| **Statement of Account** | What a partner owes you (or you owe them) for a date range, one block per currency, with ageing. PDF or Excel. | **Statement** button on the business partner |

## Estimates and the stock they hold

The Estimate PDF holds nothing by itself. The stock is held by the **draft consignment** it is made from: a Stock-Out Stock Unit in it reserves the quantity until the consignment is locked, cancelled or deleted. So the best way to quote stock you have is a draft consignment: if the buyer agrees, you carry on with the same record.

When you download an Estimate for a consignment that is not locked, its **valid-until date is saved on the consignment**. A date you type is saved; if you leave the box empty the date already saved is kept (a first Estimate gets 14 days from today), so downloading a copy later never extends the quote. Each day the company's owner and admins get **one summary notification** of the quotes that still hold stock and expire in 2 days, expire today or expired yesterday. On Mondays it also lists older expired quotes that still hold stock. **Nothing is released automatically.** To keep a quote, download its Estimate again with a later valid-until date. To release the stock, delete the draft consignment. To go ahead, continue with the consignment. Each person can switch these summaries off in their Notification Preferences.

## Grade, length and HSN on the documents

- **HSN** is the HS code of the product (every product has one). It is printed per Stock Unit on the Delivery Note and the Packing List, and as the HSN codes of the goods on the Proforma / Commercial Invoice.
- **Grade and length** come from the Stock Unit's tally: for example "Grade A 12, B 8 pcs · 2.40–3.10 m". A square tally shows its sizes and length range. A tally with no grades prints no grade line.

## Documents for one Stock Unit

Open the Stock Unit's **Download** window and choose **Documents** next to **Reports**. A **Delivery Note** is for a Stock Out (a Stock Unit leaving your yard, with or without a consignment). A **Goods Received Note** is for a Stock Unit that was received; if no counting was recorded (for example opening stock) it shows only the paper figures.

## How to download a consignment document

1. Open the consignment and click **Download**.
2. At the top choose **Documents** (next to **Reports**).
3. Pick the document. For an **Estimate**, set **Valid until** and, if you like, your own terms. For an Estimate or a Packing List, choose **PDF** or **Excel**.
4. Choose whether to use your logo, colour and footer text, and whether to add your signature and stamp.
5. Click **Download document**.

## How to make a statement

Open **Business Partners**, then use the **Statement** button on the partner's row or on the partner's page. Choose the period (last 90 days, this year, last year, or your own dates) and **PDF** or **Excel**.

## Document numbers

Each document gets a number from its own series, one per company, per document type, per year. The same consignment (or payment) always gets the **same number** when you download it again. If the facts behind it changed since the last download, the number stays and the page shows **Rev 2**. A statement for a different date range gets its own number.

You can change the number prefix (DN, GRN, EST, SOA, RCT, PL, PI) in **Company Branding → Documents** until the first document of that kind has been made. After that it is locked, so numbers never clash.

## Your look and your details (Company Branding → Documents)

- **Brand colour:** top bar, title and table headers. Needs **Custom Branding**; without it the default teal is used. A very light colour gets dark text on the table header automatically.
- **Footer note:** one line at the bottom of every page, for example your website.
- **Bank details:** printed on estimates and proforma invoices.
- **Default terms:** used on estimates unless you type other terms.
- **Signature and stamp:** upload a picture once; it is printed only when "Add my signature and stamp" is on.
- **"Prepared with LumberLinq"** in the footer: can be switched off with **Custom Branding**.
- **Logo:** the one you upload at the top of the same screen. With no logo, your company name is printed with a round monogram.

The paper is always white, so documents print and e-mail cleanly even if your app is in dark theme.

## Good to know

- **No rate on a payment?** The "≈ books currency" line is left out rather than showing a wrong total.
- **Statements never add different currencies together.** Each currency has its own block.
- **A locked consignment** can still make every document, with the same numbers.
- **GST tax invoices, e-invoices and e-way bills** are not made by LumberLinq. Use your accounting software for those.
