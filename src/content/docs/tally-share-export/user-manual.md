---
title: Sharing & Exporting Tally Sheets — User Manual
description: Creating shareable tally links and exporting tally reports in LumberLinq.
---

*Also searched as: share link, export tally, public link, download tally, tally share, PDF export, excel export, bundle export, zip download, watermark, branding on export.*

## How to Share a Tally Sheet with an External Party

Buyers, surveyors, and freight forwarders can view tally data without a LumberLinq account using shareable links.

**Steps to create a share link:**
1. Open a Stock Unit (**Stock Unit → Stock Units** → click a Stock Unit). You can also use the **⋮** menu on a row of the Stock Units list.
2. Click **Share** in the strip at the top, next to **Stock Unit details**. It shows only if you have the share right and you are online.
3. Choose what you want to make: **LumberLinq users only**, **Anyone with the link**, **My team only**, or **Outside people** (for people without a LumberLinq account, see below). **View shared links** opens the list of links you already made.
4. Set optional: expiry date, download permission, document visibility.
5. Click **Create Link**.
6. Copy the URL or scan the QR code to share.

The **Share** button shows how many links the Stock Unit has, and the menu shows how many are active and how many have been opened.

![Shared Links list](/screenshots/tally-share/links-list.png)

![Create Link form](/screenshots/tally-share/create-link-form.png)

**Share link URL format:**
- Public: `app.lumberlinq.com/s/p/:code`
- Protected: `app.lumberlinq.com/s/r/:code`
- Private: `app.lumberlinq.com/s/x/:code`

## Three Access Levels Explained

**PUBLIC** — Anyone with the URL can view the tally, no login needed. Shows basic volume summary, log count, Stock Unit ID. Does not show internal notes, pricing, or full party details.

**PROTECTED** — Recipient must be logged into a LumberLinq account. Shows all PUBLIC data plus more detailed measurement rows and product information. A link made for **Outside people** (people with no account) also uses these Protected settings, but it asks for a code or password instead of a login (see "Sharing with People Who Have No LumberLinq Account").

**PRIVATE** — Recipient must be logged in and belong to your company or be an explicitly invited party. Shows full tally data including all fields.

![What a recipient sees (public link)](/screenshots/tally-share/public-view.png)

Use the **Access Visibility Panel** (the "eye"/info button inside the share dialog) to see exactly which fields are visible at each access level before sharing.

## Share Link Options

- **Expiry date** — the link stops working after this date; leave blank for no expiry
- **Download permission** — allow the recipient to download a PDF or the whole Download pack (ZIP) from the share view
- **Document access** — control whether uploaded Stock Unit documents (photos, files) are visible in the share view. Each file also has its own setting, see "Which files a link shows" below.
- **Show details in link preview** — when the link is pasted into WhatsApp, Telegram, LinkedIn, Slack and similar apps, the chat shows a card with the details this link is allowed to show (for a public link: product, volume, pieces). Turn it off for a plain card. Protected and Private links always show a locked card with only the number of Stock Units — never volume or product.

**Opening a link on a phone:** a share link opened from WhatsApp or Instagram on a phone with the LumberLinq app opens that link inside the app, not the login page.

**How long a link works:** a link keeps working until its own **Expiry date** (or forever when left blank) — it no longer stops after 3 days on its own.

## Which Files a Link Shows

**Which files a link shows.** Every uploaded file has its own setting: **Anyone with the link**, **LumberLinq users only**, or **My team only**. A Public link shows only the files marked "Anyone with the link". A Protected link shows those plus the files marked "LumberLinq users only". A Private link (your own team) shows every file. A file marked "My team only" is never shown to outsiders. If a customer says a file is missing from a link, check the file's own setting first.

The download icon next to a file appears only when the link has **Download permission** turned on. Download permission is off unless you turn it on for that link.

## What the Shared Stock Unit Page Looks Like

A shared Stock Unit opens as one clean page: a strip at the top with the Transport ID (or the product when there is no Transport ID), the product, and small chips for the location, vehicle type, container or vehicle number and weight. Under it are the tabs (Tallysheet, Photos, Summary), then the tally.

- **Only what the sender allows is shown.** A detail switched off in **Stock Unit Field Access** is missing from the strip and from the details. A tab the sender hid is not in the tab bar. The Stock Unit ID number is not shown on a shared link.
- **Stock Unit details** opens the full read-only details in a side panel (a sheet on a phone). A small note tells the visitor when the sender has hidden some details.
- On a wide screen the strip and the tab bar stay at the top while the visitor scrolls.
- If the sender switched off the whole Stock Unit section, the strip just says **Stock Unit** and there is no details button.
- The same layout is used for each Stock Unit inside a shared or opened Consignment.

## Choosing What a Share Link Shows (Stock Unit Field Access)

Company admins decide, field by field, what Public and Protected links show. Open **Main Menu → Stock Unit → Stock Unit Field Access** (admins only).

- Each field has a **Hidden** or **View** choice for **Anyone with the link** and for **LumberLinq users only**. "My team only" always sees everything and cannot be changed.
- Each group (Stock Unit, Round Tally Grid, Square Tally Grid, Photos, Summary) has a master switch. Switching a group off hides the whole group for that kind of link.
- Some tally columns are marked **Always visible** (Length, Girth, Net Length, Net Girth, Net CBM, Net CFT, Width, Thickness, Pieces). They are needed to read a tally and cannot be hidden.
- The Stock Unit's **Supplier** and **Buyer** are hidden on Public and Protected links until you switch them on.
- Details such as who locked a Stock Unit, over-stock notes and reconciliation figures are never shown on the share page of a Public or Protected link.
- **Reconciliation** is its own group with a single switch. It decides whether the loaded-versus-received figures go into the **Download pack**. It starts **OFF** for Public and Protected links, and even when ON nothing is added for a Stock Unit that is not reconciled yet.
- When a recipient opens a link and you have hidden some Stock Unit details, they see a small note: "Some details are not shared on this link."
- Three more switches control what a PDF made from the link says about you (company name, company logo, footer line); see "Exporting From a Share Link".

Three buttons at the top help with this:
- **Preview as visitor** — shows which fields a visitor of each link type will see, with hidden fields crossed out. It changes nothing.
- **Presets** — start from **Public (minimal)**, **Buyer** or **Agent** instead of switching fields one by one. You see what will be shown and hidden before anything is saved. A red warning appears when a preset makes fields visible to anyone with the link. Presets never switch on supplier, buyer, money or audit fields.
- **History** — the last 200 changes: who changed which setting, when, and from what to what.

Switching a single field to View for **Anyone with the link** asks you to confirm first, because no login is needed to see it.

## Exporting From a Share Link

A person who opens a share link can make a **PDF** of the tally, and only if the link has **Download permission** turned on. Excel and Bundle (ZIP) are available inside LumberLinq when you are signed in; they are not offered on a share link.

- The **Export** menu on a share link lists **PDF** and **Advanced…** (the Advanced window also offers only the PDF). The PDF uses the columns the link is allowed to show.
- When Download permission is off for the link, the Export button is shown greyed out as "Export (download off)".
- A shared **consignment** page also has an **Export** button (a PDF of the consignment details and its Stock Unit list) when Download permission is on.
- Both pages also have a **Download pack** button: one ZIP with the summary PDF, the Excel workbook, the documents and the photos. See "Download Pack for the Recipient" below.

**What the share page and the PDF say about the sender.** This follows three switches in **Stock Unit Field Access** (company name, company logo, footer line), set separately for Anyone with the link and for LumberLinq users only. Company name and logo are **ON by default** (a company can switch them off); the footer line is OFF by default. The same name and logo switches also decide the name and logo in the header of the share page, for Stock Units and for Consignments. With both off, the page header shows no name and no logo, and the PDF has none either:
- Company name on: the sender's name in the header and as the watermark. Off: no name and no watermark.
- Company logo on: the sender's logo (if their plan includes a custom logo). Off, or no custom logo: no logo is shown.
- Footer line on: "Shared by <company> · Link valid until <date> · Powered by LumberLinq". Off: just "Powered by LumberLinq" (no company name).
- A Private link (your own team) always shows your name and logo.

## What a New Share Link Starts With

LumberLinq gives every link type sensible starting settings. You can change all of them for your own company.

| | Anyone with the link | LumberLinq users only | My team only |
|---|---|---|---|
| Who | Anyone (WhatsApp, Facebook, email) | A buyer who has LumberLinq | Your own company (login) |
| Goods details, photos, ports and dates | Shown | Shown | Shown |
| Documents (BL, invoice, packing list) | Not shown, unless the file itself is set to Anyone with the link | Shown by each file's own visibility | Shown |
| Supplier (shipper) | Not shown | Not shown | Shown |
| Invoice amount | Never | Off, you can switch it on | Shown |
| Cost, payment status, margin, who locked it, remarks | Never | Never | Shown |
| Internal IDs | Never | Never | Never |
| Download (PDF) | Off | On | On |
| Company name and logo | On | On | On |
| Link ends after | 30 days | 90 days | No limit |

- A file you upload starts as **My team only**. Set a file to **Anyone with the link** (or **LumberLinq users only**) to let those links show it.
- These starting settings apply to **new companies** and when you press **Reset to default** in Field Access. A company that already changed its settings keeps them.
- In the **Create share link** window the days and the download switch start from the table above, and you can change them for that link.

## Download Pack for the Recipient

If the link has **Download permission** on, the page shows a **Download pack** button (on a Consignment link next to **Export**, on a Stock Unit link above the tally). It opens a small window that lists what is inside, with a switch for each part:

- **Summary PDF** — a premium, printable overview: details, volumes, distribution, tally rows, photos.
- **Excel workbook** — every figure, ready to filter, one sheet per Stock Unit on a Consignment.
- **Documents** — the files, grouped by type (BL, Invoice, certificates...).
- **Photos** — the original photos.

Press **Download** and the page prepares one ZIP, then shows a progress bar while it downloads. A Stock Unit pack also contains a compact **Packing List** PDF for printing, and every pack has a short README.

What the recipient gets always follows the link you created:

- Only fields and columns allowed by the link's Field Access are included. A hidden field is missing from the PDF and the Excel too.
- Files follow their visibility: **Public** files are in every link, **Protected** files in Protected and Private links, **Private** files only in Private links. On a Consignment link, a document type you set to **View only** can be opened on the page but is not put in the pack.
- Your company name, logo and footer line appear only if you switched them on in Stock Unit Field Access.
- The **Reconciliation** figures (loaded vs received) are in the pack only if you switched on the **Reconciliation** row in Consignment or Stock Unit Field Access (it starts OFF) and the Stock Unit is really reconciled.
- The pack is a snapshot taken at download time; later changes are not in it.

Large packs can take a moment to prepare. A pack is limited to about 120 MB; the README lists anything that was left out.

<!-- screenshot to add when taken (see SCREENSHOT_CHECKLIST.md): ![Download pack window](/screenshots/tally-share-export/share-download-pack-window.png) -->

## The Shared Links Window

**Share → View shared links** (or **Share** in the **⋮** menu of a list row) opens all links of that Stock Unit or Consignment as one card per link:

- A counter strip shows how many links there are, how many are active and how many have been opened.
- Tabs filter the list: **All**, **LumberLinq users** and **Outside people**. The search box finds a person's email or number.
- Each card shows what the link is (Code, Shared password, Personal link, LumberLinq users, Anyone with the link, My team only), a colour tag (**Outside people** is violet), an **Opened** tag once someone opened it, the expiry date, a views bar (used / limit), and the **Download** and **Active** switches.
- Buttons on a card: **Copy link**, open, QR code, share on social apps, and — for a personal link — send by email or WhatsApp. **Revoke** switches the link off.
- **Disable all** switches off every link of that record after a confirmation.
- On LumberLinq-user and public links a small tag turns the **link preview card** on or off. Outside-people links never have a preview card.

## Sharing with People Who Have No LumberLinq Account

Use **Share → Outside people** (also in the **New link** menu of the Shared Links window). Pick how the person gets in:

- **Code** — one link for anyone you give it to. The visitor types their name, an email or a WhatsApp number (and optionally a company), and we send a 6-digit code there. The code works for 10 minutes. This proves the contact is real.
- **Shared password** — one link and one password for everybody. The visitor types their name and email (the email is **not** checked) and the password. Send the password apart from the link; it is shown only once, when you create the link.
- **Personal links** (recommended) — one link for each email address or WhatsApp number you list (up to 50 at a time). The link already knows who it is for. You choose **Password | Code**: with **Password** every person types the same password; with **Code** each person gets a code at their own email or WhatsApp number, so there is no password to send. Use the envelope or WhatsApp button on each card to send the link.

Good to know:
- What the visitor sees follows your **Protected** field-access and document settings. Nothing new is shown.
- Default expiry is 7 days (you can pick 24 hours or 30 days). Set the number of views: for Code and Shared password it is the total, for Personal links it is per person.
- Everybody must pass the code or password, also people who are logged into LumberLinq. Links for LumberLinq users keep working as before (login, no password).
- After a correct code or password the visitor stays in for up to 12 hours (or until the link ends).
- Protection: 5 wrong tries from one device lock it for 5 minutes; a new code can be asked after 1 minute and at most 5 times an hour per link. Each company can send at most 50 codes and link emails per 24 hours (all plans).
- Every open is saved in **Share Link Access Audit** with the visitor's name, company and contact, and a tag: contact verified with a code, opened with a personal link, or not verified (typed by the visitor).
- Someone using an old LumberLinq app sees "This link needs a code or password. Please open it in your web browser at app.lumberlinq.com, or update the LumberLinq app."

## Revoking a Share Link

Open **Share → View shared links**, find the link and switch **Active** off (after a confirmation) or click **Revoke**. The link becomes invalid immediately. **Disable all** switches off every link of that Stock Unit.

## How to Download a Tally Report

**From the Stock Units list:** open the row menu (**⋮** on a computer, **⋯** on a phone) and tap **Download**. It is one menu item; the window opens at once. (Inside a tally sheet, the **Export** menu in the toolbar opens the same window under **Advanced…**.)

**Step 1 — Who will see this file?** Pick one of three:

- **My team only** — for people in your company. Every column can be included. This is selected the first time; after that the window starts on the choice you used last.
- **LumberLinq users only** — for people signed in to LumberLinq, any company. Private columns are left out.
- **Anyone** — safe to hand to anyone. Only the basic columns are included.

The columns are decided by this choice and by the tally type. Square tally: Anyone gets Sr. No., Width, Thickness, Length, Pieces and Net CFT (6 columns); LumberLinq users only adds Net CBM (7); My team only also gets Gross CFT and Gross CBM (9 standard columns). Round tally: Anyone 4 columns, LumberLinq users only 5, My team only 9. These are the same rules as share links.

**Step 2 — press Download.** Most people stop here.

**Step 3 (only if you want to change something) — More options:**

- **File type** — **Excel (.xlsx)** (every measurement row and totals, best for analysis), **PDF** (a printable document with your branding) or **Bundle (.zip)** (the Excel plus the original photos and documents of the Stock Unit; it does not contain a PDF). It starts on Excel the first time and then remembers your last choice.
- **Look** — **Colour** (rich colours and coloured charts) or **Print-friendly** (black and white: white banner, black outlines, hatched charts, grey headers; easy to read on a black-and-white printer). The numbers are the same, only the colours change. Excel starts on Colour and PDF on Print-friendly; each is remembered, and a Bundle uses the Excel look. Every Excel sheet prints one A4 page wide.
- **What kind of report?** — **Table only** (just the measurement rows, many to a page), **Report with photos** (details, totals, charts and photos; the usual one) or **Official document** (the report plus your logo, a document number and sign-off lines).
- **Columns** — **Standard columns** (the usual set for your choice, with the names shown), **Every column** (only shown when it adds something, which is for My team only), or **Choose myself** (tick the columns one by one).
  - Columns your choice does not allow are not hidden quietly: they stay in the list, greyed with a padlock, under "Not available for this choice". A button, **Switch to My team only**, lets you change the choice if you need them. Only share that file with people in your company.
  - If you change the choice after picking columns by hand, the columns are reset to what the new choice allows and a note tells you so.
- **Other settings** — **Watermark** for every file type. Company logo, photos, unit row (UOM), company details and charts and stats only change a **PDF**; an Excel file or a Bundle always carries everything your choice allows, so those switches are not shown for them (a short line says so). Below My team only up to four more switches appear: **Include net measurements** (Net Length, Net Girth, or Net Width, Net Thickness, Net Length), **Include net volume** (only for Anyone: the Net CBM / Net CFT it does not get), **Include gross figures** (the Gross columns and totals) and, for Excel and Bundle, **Include Reconciliation** (the team's own inventory sheet). Both start off and show a warning when switched on. A Stock Unit's files are named after the BL number of its consignment when it is in one, otherwise after its Transport ID.
- **Summary** — an Excel file gets a **Summary** sheet and a PDF gets a **Summary** page, like the Summary tab of the Stock Unit (see "The Summary in a Download" below). The **Your company** switch (logo and name) is on by default for every file type.

## Where the Photos Go

Photos are in the PDF when the Photos switch is on (the "Report with photos" and "Official document" kinds), in the Excel file on a Photos sheet, and in the Bundle as the original files (with the documents). Files that are not images, such as a BL or an invoice PDF, cannot go inside a PDF or an Excel file: with such files the download arrives as a ZIP that holds the file and those documents, and a note in the window tells you how many. The totals follow the choice too: Anyone sees Pieces and Net CBM, LumberLinq users only adds Net CFT, My team only also sees the Gross figures. The Reconciliation sheet (the team's own inventory result) is only in a file for My team only.

## The Summary in a Download

With the **Summary** switch on (it is on by default), an Excel file gets a **Summary** sheet and a PDF gets a **Summary** page, laid out like the Summary tab of the Stock Unit: totals, the per-piece distribution, the girth and length distributions with charts (a square tally shows pieces by width and thickness and the size combinations). The numbers are the same as in the app. **Outlier watch** and **Which logs hold your volume** appear only in a file for **My team only**. Switch it off to get a file without it.

## Names in a Download

A file is named after the BL number of the consignment when the Stock Unit is in one, otherwise after its **Transport ID**. The internal Stock Unit number (SU-…) is never printed in a file; the tab names, headings and the certificate number use the Transport ID.

## Watermark

In a PDF the watermark text runs across every page in a light diagonal line, and the numbers stay readable. In Excel it is the tag at the top right of the banner and in the print header of every sheet. Switch it off for none.

## AI Import

Inside a tally sheet, click **Import** in the toolbar, then select **AI Import**. Upload a clear photo of a handwritten tally (good lighting, full page visible), review the extracted rows in the preview and correct any misread values, then click **Confirm Import**.

Each AI Import uses AI credits from your plan — credits are consumed after extraction regardless of whether you confirm the import. AI Import requires the feature to be enabled on your subscription plan. The credit cost is calculated dynamically from how much the photo actually needs to process, not a flat fee per image — the same formula used for Linc AI Help/Assistant, and the same for both Round and Square tally sheets.

## Common Problems

**"A file is missing on my share link"** — check the file's own setting (Anyone with the link / LumberLinq users only / My team only). A Public link shows only files marked "Anyone with the link"; a Protected link also shows "LumberLinq users only"; "My team only" files are never shown to outsiders.

**"There is no download icon"** — turn on **Download permission** for that link. It is off by default. On a Stock Unit link without it, the Export button shows greyed out as "Export (download off)".

**"There is no Excel or Bundle on the share link"** — a share link offers the PDF only. Excel and Bundle are available inside LumberLinq when signed in. The PDF from a share link always uses the Print-friendly (black and white) design.

**"Share link shows 'Login required' even for a Public link"** — check the link format. Public links use `/s/p/:code`; a link starting with `/s/r/` or `/s/x/` is Protected or Private and requires login.

**"The visitor did not get the code"** — check the email or WhatsApp number (WhatsApp needs the country code, like +91 98765 43210) and the spam folder. A new code can be asked after 1 minute. If WhatsApp is not available, the visitor can use email when you allowed both.

**"A link says 'Too many wrong tries'"** — wait 5 minutes and try again, or create a new link.

**"The Share button is missing"** — it needs the share right and an internet connection, and the Stock Unit must be saved.

**"Recipient sees 'Access denied'"** — for Protected/Private links, the recipient must be logged into LumberLinq and their account must belong to your company (or the link has expired).

**"The Bundle has no photos"** — photos must be uploaded to the Stock Unit first, from the tally sheet's Documents tab.

**"Export PDF shows no company logo"** — upload your logo from Main Menu → Company → Branding before exporting.
