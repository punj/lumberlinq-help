---
title: Buying and Selling Timber — Stock In, Stock Out and Consignments
description: A beginner guide to the whole flow — how to buy (Stock In) and sell (Stock Out), what each consignment status does, where stock goes up and down, every consignment tab, and what to do when you make a mistake.
---

*Also searched as: stock in, stock out, purchase, sell, sale, buy, consignment status, receive into inventory, confirm stock out, reconcile, opening stock, flexible layout, standard layout, mistake, wrong entry, correct, adjustment, consignment tabs, how to sell timber, how to buy timber, beginner guide.*

This guide explains, in plain words, how to BUY timber (Stock In), how to SELL timber (Stock Out), what a Consignment is, where stock goes up and down, and what to do when you made a mistake. If you are new to LumberLinq, read the first two sections and the one for what you want to do (buy or sell).

## The 60-Second Picture — Three Records and One Golden Rule

Three records work together:

1. **Stock Unit** (code like `SU-000092`) — one load: a truck, a container or a wagon, with its tally rows (every log or board measured). A Stock Unit has a **Direction**: **Stock In** (a load you bought) or **Stock Out** (a load you sold). A third direction, **Move Between Sites**, moves wood between your own yards and is not used with consignments.
2. **Lot** (code like `LOT-2026-0031`) — the pile of wood you really have in stock: one product, one site, one origin, one quality. All the "how much stock do I have" numbers come from Lots.
3. **Consignment** — the business paper for one deal: who the buyer or seller is, the route, the documents (BL, invoice), the money, the status. One Consignment can hold one or many Stock Units.

**The golden rule: the Consignment and its status NEVER add or remove stock by themselves.** Stock goes **UP** only when a Stock In Stock Unit is **received into inventory** (or when a Mill Job finishes, or an Adjustment adds wood). Stock goes **DOWN** only when a Stock Out is **confirmed** (or wood goes to a Mill Job, or an Adjustment takes wood off). Changing a Consignment's status, linking a Stock Unit to a Consignment, or cancelling a Consignment does **not** change the numbers in your Lots.

So: **Stock Unit = what moved. Lot = what you have. Consignment = the deal and the paperwork.**

## Where Stock Goes Up and Where It Goes Down

| What you do | Does the stock in Lots change? |
|---|---|
| Save a Stock In Stock Unit with its tally rows | No. Nothing is in stock yet. |
| **Receive into Inventory** (Stock In) | **UP.** The unit's net volume and pieces go into a Lot. The Stock Unit locks. |
| **Opening Stock** (wood you already had when you started) — receive it | **UP**, into its own Starting Stock Lot. |
| Save Stock Out rows | No change in the Lot, but the wood is **held** (still in the Lot, no longer free for others). |
| **Confirm Stock-Out** | **DOWN.** Held wood becomes Sold; the Lots go down. The Stock Unit locks. |
| Link a Stock Unit to a Consignment | No. Only paperwork. |
| Change the Consignment status (Planned, In Transit, Arrived, Delivered, Closed, Cancelled…) | No. Only the status and which Overview card shows the unit. |
| Reconcile a Stock In (what really arrived) and lock it | UP or DOWN by the difference, once, if the wood is not already milled or sold. |
| Send wood to a Mill Job | DOWN in the input Lot; a finished job makes a new Lot (UP). |
| Add Adjustment | UP or DOWN by exactly what you enter. Always a new line; nothing old is changed. |

Words you will see on screen: **In stock** (really in the Lot) = **Held** (kept for an open Stock Out or Mill Job) + **Free** (can still be sold or milled).

## How to Create a Stock Unit (Stock In or Stock Out)

1. Open **Stock Unit → New** (or **Inventory → Overview → Opening Stock** for stock you already have).
2. Choose the **Direction**: **Stock In** (you are buying/receiving) or **Stock Out** (you are selling/sending). The Direction cannot be changed after the first save — if it is wrong, create a new Stock Unit.
3. Pick the **Tally Layout**: **Standard Layout** (one product for the whole Stock Unit, chosen now) or **Flexible Layout** (each row has its own product, origin and quality; you pick them while tallying). The layout cannot be changed after saving either. Importing a file is only possible in Standard Layout.
4. Fill Product (Standard), **Location** (the site where the wood is or is going from), and for a real delivery the Transport Mode and Transport ID (container or truck number). Opening stock needs no transport mode.
5. Save, then fill the **Tallysheet** tab: Round = length and girth for each log; Square = thickness × width × length × pieces for each size. Save the rows.
6. Add photos in the **Photos** tab if you want them (see "Photos" below).

## PURCHASE — The Full Process, Step by Step (Buying Timber)

There are two ways. Both end in the same place: the wood sits in a Lot.

### Way A — Purchase with a Consignment (recommended for a real purchase)

1. **Create the Stock Unit as Stock In**, with Product, Location, Transport Mode and the tally rows (what the supplier says was loaded). Take photos if you want proof (see "Photos").
2. **Create the Consignment**: Consignments → New. Choose type **Import** (from another country) or **Domestic Purchase** (same country). Fill the tabs (see "Every Consignment Tab Explained"). Your company must be one of Shipper, Consignee or Notify Party.
3. **Link the Stock Unit**: Consignment → **Stock Units** tab → search and add it. You can do this before or after receiving — the order does not matter.
4. **Update the status** as the goods travel (Planned → … → In Transit → Arrived): press the **Status** button at the top of the form. Changing the status moves **no stock**.
5. **When the goods arrive** (status **Arrived**, **Unstuffing** or **Delivered** on a purchase consignment, with Inventory switched on) the app shows a banner *"Goods have arrived — ready to receive into inventory?"* and asks **Receive into Inventory?** after you save. Press it: now the stock goes **UP**, the Stock Unit locks, and the Consignment's status can from now on only move **forward** (see "After Stock Was Received").
   - You can also receive from the Stock Unit page: ⋮ menu → **Receive into Inventory**.
   - To receive, the Stock Unit needs a **Product**, a **Location**, a **Transport Mode** (not for opening stock) and **at least one saved tally row**. Otherwise the app tells you what is missing.
6. **Reconcile** when you know what really arrived (see "When to Reconcile").
7. **Record the money**: Consignment → Financials & Payments → Invoice Details, Supplier Payment Terms, and **Record Payment** for each payment you make (they show as **Paid Out**; the **Outstanding Payable** updates).
8. When everything is done and paid: set the status **Closed**, then **Lock** the Consignment if you want to protect it.

### Way B — Delivery without a Consignment (domestic delivery, own harvest, transfer)

Create the Stock Unit as Stock In, tally it, and press **Receive into Inventory** on its own page. No Consignment is needed. The Lot will not show Supplier, Purchase Date or Payment (nothing was purchased on paper). If you link a Consignment later, those details appear by themselves — the stock is never added twice.

### Opening Stock (wood you already have when you start)

Inventory → Overview → **Opening Stock**. A Stock Unit opens with Stock In chosen. Pick product, site and origin, save, enter the tally rows (Square: thickness × width × length × pieces; Round: girth × length), save, then ⋮ → **Receive into Inventory**. The stock goes into its own **Starting Stock** Lot and the tally locks. A Consignment is optional. Mill Jobs on opening stock never ask for CONFIRM, because there is nothing to reconcile.

### When to "Receive into Inventory" and When to "Reconcile" — Simple Rule

- **Receive** = "this load is now mine, put it in my stock." Do it when the goods have really arrived (or, for opening stock, right away). Receiving uses the **loading tally** (what the supplier said was loaded).
- **Reconcile** = "this is what I really counted at unloading." Do it **after receiving**, once you have the real count (unloading tally, surveyor report, weighbridge). Locking the reconciliation puts the **real arrived quantity** into stock — for example loaded 19.00 CBM / 500 pcs, counted 18.75 CBM / 495 pcs: stock becomes 18.75 / 495 and the Stock Statement shows a **Reconciled** line of −0.25 CBM / −5 pcs.
- Reconcile **before milling** the wood. If you start a Mill Job on a Lot that has a Stock Unit not reconciled, the app shows a "Check Before You Start" list; starting anyway asks you to type **CONFIRM** once per Stock Unit.
- If the wood is **already milled or sold**, reconciling no longer changes stock; the app offers **Correct with an adjustment** instead.
- A Stock Out has **no Reconciliation tab** — nothing arrives into your stock.

## SELL — The Full Process, Step by Step (Selling Timber)

1. **Check your stock**: Inventory → **Stock in Hand** shows In stock / Held / Free per product and size. Only **Free** wood can be sold.
2. **Create the Stock Unit as Stock Out** with Product (Standard) or per-row product (Flexible), Location (the site the wood leaves from), Transport Mode and Transport ID.
3. **Tally the rows** you are selling. For Square, a row can use stock of the **same length or longer** (it is cut down, never shorter), of a specific **origin** (or **Origin unknown**) and quality. A red chip *"Only X free of Y — tap to fix"* means that row asks for more than is free.
4. **Save.** The wood is now **held** for this Stock Out: still in the Lot, but no longer free for anyone else. If you ask for more than is free, the Save is refused (nothing saved) unless **Application Settings → Inventory Policy → "Let sales continue past available stock"** is ON; then the app asks for a short reason. A row for a size you have **no stock** of is saved in red with no hold; you can send it to the mill with **Request custom-made**, and **Confirm Stock-Out is refused** until every row has stock.
5. **Create the Consignment**: type **Export** (to another country) or **Domestic Sale**. Fill the tabs. Link the Stock Out on the **Stock Units** tab (before or after confirming — the order does not matter, but a Stock Out cannot be added after the sale consignment has departed; see "Stock Units Tab").
6. **Photos and documents**: add photos to the Stock Unit (loading/stack photos are good proof) and upload the BL, invoice and certificates on the Consignment's **Documents** tab.
7. **Confirm Stock-Out** (button on the Stock Unit page; save first if rows are unsaved) **when the truck/container really leaves.** Now the stock goes **DOWN**: the holds become **Sold** lines, the Lots drop, the rows lock for everyone, and the unit is auto-locked.
8. **Update the Consignment status** as it travels (In Transit, Arrived, Delivered). This moves no stock.
9. **Record the money**: Financials & Payments → Total Invoice Amount, **Customer Payment Terms**, then **Record Payment** each time the buyer pays (shown as **Received**; **Outstanding Receivable** updates). The status of payment (unpaid, partly paid, paid, overdue) is worked out for you.
10. **Close** the Consignment when delivered and paid; **Lock** it if you want it protected.

If you have not confirmed yet, you can still change or delete rows and the holds update at once; a deleted row releases its hold. On **Inventory → Stock in Hand**, "Held by open Stock Outs" lists unconfirmed Stock Outs that hold stock and has a **Release** button for a forgotten draft.

## Consignment Status — What Each One Means

The status says where the deal is. **It never changes the numbers in your Lots** — stock goes up only on **Receive into Inventory** and down only on **Confirm Stock-Out**. A status only (a) shows on the list and in the progress strip at the top of the form, (b) decides which Inventory Overview card the Stock Units appear in, and (c) on a **purchase**, three statuses offer you to receive the goods.

### Which statuses you see

The list fits the kind of consignment, so you never see a step that does not exist for it:

| Consignment | Statuses offered |
|---|---|
| **Export** by sea or rail (container) | Draft · Confirmed · Planned · Stuffing · Stuffed · Gate Out · In Transit · Arrived · Delivered · Closed · Cancelled |
| **Export** by air or road | the same without Stuffing, Stuffed and Gate Out |
| **Import** by sea or rail (container) | Draft · Confirmed · Planned · Stuffing · Stuffed · Gate Out (these three are the supplier's steps) · In Transit · **Arrived 📥** · **Unstuffing 📥** · **Delivered 📥** · Closed · Cancelled |
| **Import** by air or road | Draft · Confirmed · Planned · In Transit · **Arrived 📥** · **Delivered 📥** · Closed · Cancelled |
| **Domestic Sale** | Draft · Confirmed · Planned · In Transit · Delivered · Closed · Cancelled |
| **Domestic Purchase** | Draft · Confirmed · Planned · In Transit · **Arrived 📥** · **Delivered 📥** · Closed · Cancelled |

📥 = on a purchase this status offers **Receive into Inventory** for linked Stock In units that are not received yet (needs the Inventory module). Choose the Type and Mode first; the list follows them.

### What each status means and does

| Status | Meaning (sale / purchase) | What it does in LumberLinq |
|---|---|---|
| **Draft** | Being prepared | Nothing changes in stock. Can be saved with little filled in. |
| **Confirmed**, **Planned** | Deal agreed / shipment arranged | Nothing changes in stock. |
| **Stuffing** | You are loading / the supplier is loading | Nothing changes in stock. Stock Units show under **In Consignment**. |
| **Stuffed**, **Gate Out** | Loaded and sealed, left the gate | Nothing changes in stock. Stock Units show under **In Transit**. |
| **In Transit** | On the way to the buyer / on the way to you | Nothing changes in stock. On a **sale**, no new Stock Unit can be added from here on. |
| **Arrived** | Reached the destination / reached your port or yard | **Sale:** nothing changes. **Purchase:** stock does not go up yet; you are asked to **Receive into Inventory**. |
| **Unstuffing** (import by container) | Container is being unloaded | Same as Arrived on a purchase. |
| **Delivered** | The buyer has the goods / the goods are with you | **Sale:** stock goes down only when you **Confirm Stock-Out** on each Stock Unit. **Purchase:** receive any Stock Unit not yet received. |
| **Closed** | Finished and settled | No more Stock Units can be added. Stock quantities do not change. |
| **Cancelled** | Called off | Stock quantities do not change; no more Stock Units can be added. If stock was already received or confirmed, correct it with Add Adjustment. |

### How to change the status

- In the **summary at the top of the form**, press the **Status** button. A list opens with a short meaning under each status, and a panel that says what the selected one does. Press **Set status**, then **Update** (or Save) to keep it. A purchase asks to receive the goods right after the Update when the new status offers it.
- On the **Consignments list**, press the status tag: same list, saved at once.

### What becomes required, step by step

A red **\*** shows only while a field is required. You can save a Draft (or a Cancelled consignment) with little; more is needed as the deal moves on:

- **Always:** Type, Mode, Date, Seller / Shipper and Buyer / Consignee (and your own company must be one of the parties).
- **From the first status after Draft:** Estimated Departure and Estimated Arrival. The same day is fine; arrival must not be earlier than departure.
- **From Gate Out / In Transit onward:** Sea or Air: Port of Loading and Port of Discharge. Sea: Bill of Lading number. Road: From, To, Vehicle / LR No, Transporter. Rail: From and To station. Export and Import: Incoterms. Domestic Sale: Buyer Tax Number and Delivery Contact.
- **Payment terms:** as soon as an invoice amount is entered (any type).

### After stock has been received — the status moves forward only

Once a Stock In has been received through a Consignment, its status can still move **forward** (for example Arrived → Delivered → Closed) but never **back** and never to **Cancelled**, so the stock history and the timeline can never disagree. The Status list then shows only the current and later steps, with a note.

### Other rules

- Every status change sends a notification and is written to the history (see **Activity**).
- **Lock** is separate from status: Lock (edit screen) permanently freezes the whole Consignment against edits — you must type LOCK and it cannot be undone. Lock only when everything is final.

## The Stock Units Tab — Which Stock Units Appear and Which Do Not

On the Consignment's **Stock Units** tab you search and add Stock Units. The **?** beside the tab title shows this same explanation. The search starts only after you type something. You can search by **Stock Unit ID** (SU-000123), **Transport ID**, **container / truck number**, or **product name**.

**A Stock Unit appears in the list when:**
- it belongs to your company;
- it is **not already linked to a Consignment** (one Stock Unit belongs to at most one Consignment);
- its Direction fits the deal: on a **sale** consignment (Export, Domestic Sale) you see **Stock Out** units; on a **purchase** consignment (Import, Domestic Purchase) you see **Stock In** units; on **Trading** you see both; a unit with no direction set shows everywhere;
- it is not a **Move Between Sites** unit and not a **mill output** record (wood a Mill Job produced is already in its output Lot; sell it with a Stock Out).

**A Stock Unit does NOT appear when:** it is already in another Consignment; its Direction is the opposite (a Stock Out never appears on a purchase consignment); it is a Move unit or mill output; or what you typed matches none of ID, Transport ID, container/truck number or product name.

**Received or not does not matter.** A Stock In can be linked before or after it is received; a Stock Out before or after it is confirmed. (Older notes saying "a Stock Unit must be received first" are wrong.)

**When the search box is switched off or adding is refused:**
- the Consignment is **Closed** or **Cancelled** — nothing new can be added;
- a **sale** consignment that has **departed** (In Transit, Arrived, Unstuffing, Delivered) — a brand-new, never-shipped unit cannot be added. A Stock Out that was already confirmed can still be linked afterwards (paperwork that follows the real dispatch);
- the Stock Unit is **in a Mill Job** (In Process) or has a **Custom-Made request** still waiting — finish or cancel that first.

**Removing a Stock Unit from a Consignment** is allowed only if nothing real has happened to it. You **cannot** remove a Stock Out that is already **confirmed**, or a Stock In already **received through this Consignment**. Fix wrong stock with an Adjustment instead. (Opening stock linked for paperwork can be removed; no stock changes.)

If the Stock Unit you expect is missing, check its **Direction** on the Stock Unit screen — a Stock Out will not show on a purchase.

## Every Consignment Tab Explained

### The summary at the top (it stays above every tab)

- **Chips:** the type and the mode; **Unsaved changes** shows when something is not saved yet.
- **Bill of Lading No** (domestic: **Bill No**): press it to jump straight to the field and type.
- **Status** button: opens the status list (see above). The small ▾ at the end folds or opens the rest; on a phone it starts folded.
- **Seller → Buyer** names, and the **progress strip**: each step is done, current or still to come (a cancelled consignment shows a red Cancelled line instead).
- **Stock Units** (count and CBM), **Invoice** and **Outstanding** numbers.
- A **"x/y ready"** ring: press it for what is still missing, and press an item to jump to it. It is a reminder only; it never blocks saving.

The form has **five tabs**, always clickable in any order. A green tick means opened, nothing wrong and it has real content; a red number means that many fields need fixing. (Old links to the 6th tab, Dispatch & Notes, open the first tab: its fields moved there.)

### Tab 1 — Deal (what is this deal?)

- **Type, mode and date:** Consignment Type\*, Mode of Transport\* (Sea, Air, Road, Rail), Consignment Date\*. Pick the type first: it decides which fields appear. A new consignment picks a sensible mode for you (domestic: Road, export / import: Sea); change it if needed. New consignments offer Export, Import, Domestic Sale and Domestic Purchase.
- **References:** **Bill of Lading No** (domestic: **Bill No**; red \* for Sea once the goods leave), **BL Type** (Sea: Original or Surrendered), **Commercial Invoice No**, and for Export / Import **Packing List No**, **Exporter Ref No**, **Buyer Order No**.
- **Parties:** **Shipper** (domestic: **Seller**)\* and **Consignee** (domestic: **Buyer**)\*, and **Notify Party** (Export / Import). Pick them from your Business Partners; the **+** beside a field adds a new one without leaving the form. **At least one of the parties must be your own company**; it is filled in and locked for you where the type makes it obvious (Shipper for Export and Domestic Sale, Consignee for Import and Domestic Purchase).
- **Buyer details (domestic only):** **Buyer Tax Number** and **Delivery Contact**. On a Domestic Sale they are required once the goods leave, and the tax number is taken from the Buyer's Business Partner. On a Domestic Purchase they are optional and your own tax number is filled in.
- **Notes:** Approved By, Remarks (internal).

### Tab 2 — Route & Timing (where does it go and when?)

- **Estimated Departure** and **Estimated Arrival** (required from the first status after Draft; the same day is allowed; a "Transit time" chip shows the days in between).
- **Final Destination**, **Country of Origin**, **Country of Destination** (Export / Import) and **Incoterms** (Export / Import; required once the goods leave).
- **Port & Carrier** (Sea or Air): Port of Loading\*, Port of Discharge\* (pick from the list), Shipping Line (or Other, with a custom name), Vessel Name and Voyage Number (Sea), Flight Number (Air).
- **Road:** From Location\*, To Location\*, Vehicle / LR No\*, Transporter Name\*.
- **Rail:** Origin Station / ICD\*, Destination Station / ICD\*, Rail Operator.
These boxes slide in when you pick the mode.

### Tab 3 — Stock Units (what is in it?)

Search and add Stock Units. The **?** beside the title explains which Stock Units are listed and which are not (see the section above). A bar shows the **totals** of the linked units (units, pieces, CBM, weight). Each added unit is a card: Stock Unit ID, product, Transport ID, unit and seal numbers, mode, volume and pieces. When adding is switched off (Closed, Cancelled, or a sale that has already left) a banner says so.

### Tab 4 — Documents (which papers?)

- **Documents on file:** a checklist of what this kind of consignment normally has (Export / Import: Bill of Lading, Commercial invoice, Packing list, Certificate of Origin, Phytosanitary certificate, Fumigation certificate; Domestic: Bill, Invoice, and for road or rail the E-way bill / LR). A number or an uploaded file counts. It only reminds you.
- **Document numbers:** Certificate of Origin No, Fumigation Certificate No and Insurance details (Export / Import), E-way Bill No (domestic).
- **Upload cards:** **BL File** (domestic: **Bill File**), **E-Waybill / LR** (road and rail), **Certificate of Origin** and **Phytosanitary** (Export / Import), **Invoice**, and **Other Documents** with your own short label. Attach a **fumigation certificate** under Other with the label **Fumigation** (quick label buttons help). Up to 5 files per card; each file has its own visibility (Anyone with the link / LumberLinq users only / My team only).

### Tab 5 — Money (what about the money?)

- **Invoice details:** Currency (fixed for domestic trade), exchange rate to your reporting currency when it differs, **Total Invoice Amount**, **Insurance Value**, **Freight Terms**, and an **Invoice per CBM** hint to catch a mistyped amount.
- **Payment terms** (shown as **Customer Payment Terms** on a sale, **Supplier Payment Terms** on a purchase): choose Immediate / Advance, Cash on Delivery, L/C Sight, L/C Usance (days), DP, DA, Open Account (days), Net 7 / 15 / 30 / 45 / 60 / 90 days, or Other (Custom); Days or Custom Terms appear when needed. They are **required once an invoice amount is entered** (they give the due date and the overdue reminders). They are saved with **Update / Save**, together with everything else; the **Due Date** is worked out for you.
- **Payments** (after the first save): a **paid / received so far** bar, the summary tiles (Invoice Amount, Received and Outstanding Receivable on a sale, Paid Out and Outstanding Payable on a purchase, Payment Status), and **Record Payment** (Date\*, Mode, Reference No, Amount\*, Currency, FX rate, Notes). Payments can be edited or deleted; every part-payment updates the outstanding amount. Payments are counted in the Consignment's currency.

### Buttons at the top of the form

**Activity** (who made it, when it last changed, the status history), **Lock** (permanent), **Export**, **Full Report**, **Full Trace** and **Stock Statement** (when Inventory is on), **Reset**, and **Save / Update Consignment**. On a phone these sit behind the ⋯ button; Back / Next / Save stay at the bottom of the form.

## Photos — When and Where

Photos are added on the **Stock Unit** page, **Photos** tab, in categories **Front, Stack, Back, BL, Document, Other**. They are not needed to receive or confirm stock, but they are good proof.
- **Purchase:** photograph the load when it arrives and when unloaded (stack, front, back), plus the BL and any surveyor report.
- **Sale:** photograph the stacked and loaded timber and the closed container/truck before it leaves.
- Photo and file counts show as small chips on the Stock Unit list and on each Consignment row (tap for the categories). Photos are included in the **Bundle** export and the **Download pack** of a share link (if the link is allowed to show them).
- Consignment-level files (BL, invoice, certificates) go on the Consignment's **Documents** tab.

## After Stock Was Received — Status Moves Forward Only

After a Stock In has been received through a Consignment, the status can still move **forward** (for example Arrived → Delivered → Closed), but not back and not to Cancelled. The Status list shows only the current and later steps and a note says why. This is on purpose, so the stock history and the timeline never disagree. You can still edit most other fields unless the Consignment is **Locked**. If the status you wanted is wrong for the real world, add a note in **Remarks** and correct stock quantities with an Adjustment.

## I Made a Mistake — What Do I Do?

Every stock movement stays on record, so LumberLinq corrects mistakes with **new lines**, not by erasing old ones. Find your case:

| Mistake | What to do |
|---|---|
| **Stock In rows are wrong, not yet received** | Edit, add or delete rows freely, then Save. |
| **Stock In rows are wrong, already received** | Rows are locked for everyone (admins too). If the real arrived count differs from the loading tally, use **Reconciliation** (receive first, then reconcile). If the wood is already milled or sold, use **Inventory → In/Out → Add Adjustment** (pick the Stock In, enter the difference size by size). |
| **Received the wrong Stock Unit by mistake** | It cannot be un-received. Add an Adjustment on its Lot ("Take off stock") with a reason. |
| **Stock Out rows are wrong, not yet confirmed** | Change or delete rows and Save. The holds update at once; deleted rows release their wood. |
| **Stock Out rows are wrong, already confirmed** | Rows are locked. Use **Add Adjustment** on that Stock Out line: **Sent less than recorded** (wood goes back into that Lot and size) or **Sent more than recorded**. The Stock Out rows and the Consignment/invoice totals do **not** change — fix the invoice amount yourself on the Financials tab. |
| **Confirmed the Stock Out too early** | A confirm cannot be undone. If the truck did not leave, use Add Adjustment → Sent less than recorded to put the wood back. |
| **Linked the wrong Stock Unit to a Consignment** | Remove it on the Stock Units tab if it has not been confirmed (Stock Out) or received (Stock In). If it has, you cannot remove it; use an Adjustment for the stock side. |
| **Wrong Consignment status** | Press the **Status** button at the top of the form (or the status tag on the list), choose the right one and Update. If stock was already received through the Consignment, the status can only move forward, never back. A purchase's accidental "Arrived" before real arrival only offers the receive prompt; nothing moves until you press Receive. |
| **Consignment cancelled** | Cancelling does not touch Lot quantities. If stock numbers need correcting, use Add Adjustment. |
| **Wrong payment amount or date** | Edit the entry in Payment History, or record a correcting entry with a note. |
| **A wrong adjustment** | Fix it with another adjustment (the old one stays on record). |
| **Consignment locked by mistake** | A Consignment lock is permanent and cannot be undone in the app, so lock only when everything is final. Contact LumberLinq support if a change is essential. |

**In Flexible Layout** the same rules apply, with these differences: every row has its own product, origin and quality, so a Flexible Stock Out can take several products at once; **Confirm Stock-Out debits each product from its own matching Lot** in one all-or-nothing step (if one product has too little stock, nothing is debited and the message names it); an Adjustment is made per line (Lot · size); a row for a size with no stock shows red and blocks the confirm; importing a file is not available (switch to Standard Layout in a new Stock Unit if you need import). The layout cannot be changed after saving, so if you chose the wrong layout before saving any rows, create a new Stock Unit.

## Quick Checklists

**Buying:** Stock Unit (Stock In) → tally rows → photos → Consignment (Import / Domestic Purchase) → link the Stock Unit → update status → on arrival **Receive into Inventory** (stock UP) → **Reconcile** with the real count → record payments → Close → Lock.

**Selling:** check **Stock in Hand** → Stock Unit (Stock Out) → tally rows → Save (wood held) → Consignment (Export / Domestic Sale) → link the Stock Unit → photos and documents → **Confirm Stock-Out** when the load leaves (stock DOWN) → update status → record payments received → Close → Lock.

**Remember:** status and linking never move stock. **Receive** puts stock in. **Confirm** takes stock out. **Reconcile**, **Adjustment** and **Mill Jobs** correct or convert it.

## Common Questions

**"Why did my stock not go up when I set the status to Delivered?"** Status never moves stock. Press **Receive into Inventory** (banner, prompt after saving, or the Stock Unit's ⋮ menu).

**"Why did my stock not go down when I added the Stock Out to a Consignment?"** Linking is paperwork. Stock goes down when you **Confirm Stock-Out** on the Stock Unit.

**"I cannot find my Stock Unit in the Stock Units tab."** See "Which Stock Units Appear and Which Do Not": it may already be in another Consignment, have the opposite Direction, or be a Move or mill-output record. You also need to type part of its ID, Transport ID, container/truck number or product name.

**"Can I add a Stock Unit to a Consignment before it is received?"** Yes. The order does not matter.

**"Is it OK to receive first and create the Consignment later?"** Yes. When you link the Consignment later, Supplier, Purchase Date and Payment appear on the Lot automatically and the stock is not counted twice.

**"I cannot choose an earlier status (or Cancelled)."** Stock was already received through the Consignment, so the status can only move forward. The Consignment may also be Locked (permanent).

**"I cannot receive the Stock Unit."** It needs a Product, a Location, a Transport Mode (not for opening stock) and at least one saved tally row.

**"Confirm Stock-Out is refused."** A row has no stock, or asks for more than is free (unless "Let sales continue past available stock" is on), or the tally has unsaved rows. The message lists the rows to fix.
