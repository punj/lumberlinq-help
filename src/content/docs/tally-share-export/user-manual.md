---
title: Sharing & Exporting Tally Sheets — User Manual
description: Creating shareable tally links and exporting tally reports in LumberLinq.
---

## How to Share a Tally Sheet with an External Party

Buyers, surveyors, and freight forwarders can view tally data without a LumberLinq account using shareable links.

**Steps to create a share link:**
1. Open a tally sheet (from **Stock Unit → Stock Units** → click a Stock Unit).
2. Click the **Share** button in the toolbar.
3. Choose an access level (see below).
4. Set optional: expiry date, download permission, document visibility.
5. Click **Create Link**.
6. Copy the URL or scan the QR code to share.

![Shared Links list](/screenshots/tally-share/links-list.png)

![Create Link form](/screenshots/tally-share/create-link-form.png)

**Share link URL format:**
- Public: `app.lumberlinq.com/s/p/:code`
- Protected: `app.lumberlinq.com/s/r/:code`
- Private: `app.lumberlinq.com/s/x/:code`

## Three Access Levels Explained

**PUBLIC** — Anyone with the URL can view the tally, no login needed. Shows basic volume summary, log count, Stock Unit ID. Does not show internal notes, pricing, or full party details.

**PROTECTED** — Recipient must be logged into a LumberLinq account. Shows all PUBLIC data plus more detailed measurement rows and product information.

**PRIVATE** — Recipient must be logged in and belong to your company or be an explicitly invited party. Shows full tally data including all fields.

![What a recipient sees (public link)](/screenshots/tally-share/public-view.png)

Use the **Access Visibility Panel** (the "eye"/info button inside the share dialog) to see exactly which fields are visible at each access level before sharing.

## Share Link Options

- **Expiry date** — the link stops working after this date; leave blank for no expiry
- **Download permission** — allow the recipient to download a PDF from the share view
- **Document access** — control whether uploaded Stock Unit documents (photos, files) are visible in the share view

## Revoking a Share Link

Open the Share dialog on the tally sheet, find the link in the list, and click Delete. The link becomes invalid immediately.

## How to Export a Tally Report

Click **Export** in the tally sheet toolbar. Formats:

- **PDF** — formatted, printable document with company branding
- **Excel (.xlsx)** — full spreadsheet with all measurement rows and summary totals, best for analysis
- **Bundle (ZIP)** — combines the PDF report with all uploaded Stock Unit photos into a single archive

The export dialog also has an Access Level selector (Public/Protected/Private) controlling which columns appear — the same rules as share links.

## Export Options

- **Company logo** — include your uploaded company logo in the PDF header
- **Watermark** — add text (e.g. "DRAFT", "CONFIDENTIAL") across the PDF pages
- **UoM row** — add a row showing units of measurement at the top of the data table
- **Include charts** — add bar charts showing volume per Stock Unit (Excel only, when multiple Stock Units exist)

## Why PDF Has No Photos

Photos are only included in the Bundle format. PDF and Excel exports contain measurement data only.

## AI Import

Inside a tally sheet, click **Import** in the toolbar, then select **AI Import**. Upload a clear photo of a handwritten tally (good lighting, full page visible), review the extracted rows in the preview and correct any misread values, then click **Confirm Import**.

Each AI Import uses AI credits from your plan — credits are consumed after extraction regardless of whether you confirm the import. AI Import requires the feature to be enabled on your subscription plan.

## Common Problems

**"Share link shows 'Login required' even for a Public link"** — check the link format. Public links use `/s/p/:code`; a link starting with `/s/r/` or `/s/x/` is Protected or Private and requires login.

**"Recipient sees 'Access denied'"** — for Protected/Private links, the recipient must be logged into LumberLinq and their account must belong to your company (or the link has expired).

**"Bundle export only produces a PDF, no photos"** — photos must be uploaded to the Stock Unit first, from the tally sheet's Documents tab.

**"Export PDF shows no company logo"** — upload your logo from Main Menu → Company → Branding before exporting.
