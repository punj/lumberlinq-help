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
4. **Update the status** as the goods travel (Planned → … → In Transit → Arrived). Changing the status moves **no stock**.
5. **When the goods arrive** (status **Arrived**, **Unstuffing** or **Delivered** on a purchase consignment, with Inventory switched on) the app shows a banner *"Goods have arrived — ready to receive into inventory?"* and asks **Receive into Inventory?** after you save. Press it: now the stock goes **UP**, the Stock Unit locks, and the Consignment's **Status becomes permanently read-only** (see "Status Is Locked").
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

The status is a label for where the deal is. **It never changes the numbers in your Lots.** It only (a) shows on the list, (b) decides which Overview card the unit appears in, and (c) for a **purchase** consignment, three statuses trigger the offer to receive the goods.

| Group | Status | What it means | Effect |
|---|---|---|---|
| Planning | **Draft**, **Confirmed**, **Planned** | The deal is being prepared. | No inventory card, no stock change. |
| At origin (sea/air) | **Stuffing**, **Stuffed**, **Gate Out** | Loading the container / leaving the gate. Hidden for domestic road/rail trade. | Stock Unit shows in "In Consignment" (Stuffing) or "In Transit" (Stuffed, Gate Out). No stock change. |
| Moving | **In Transit** | On the way. | Shows in "In Transit". On a **sale** consignment, from here on **no new Stock Unit can be added**. |
| At destination | **Arrived 📥**, **Unstuffing 📥**, **Delivered 📥** | Reached the destination. The 📥 mark means: on an **Import / Domestic Purchase** consignment these three offer **Receive into Inventory** for linked Stock In units not yet received. | Receiving (stock UP) only happens when **you** press it. |
| Closed | **Closed**, **Cancelled** | Finished or called off. | No new Stock Units can be added. Closed shows the material as out of the pipeline; **Cancelled does not put stock back** — if stock numbers are wrong, use Add Adjustment. |

Other rules about status:
- **Status Is Locked once received.** After any linked Stock In unit has been received into inventory, the Consignment's status cannot be changed any more (no override), so the stock history and the timeline can never disagree.
- Domestic consignments (Domestic Sale / Domestic Purchase) hide the sea/air steps (Stuffing, Stuffed, Gate Out, Unstuffing).
- Every status change sends a notification and is written to the Consignment's history.
- **Lock** is separate from status: Lock (edit screen) freezes the whole Consignment against edits; only an admin can unlock.

## The Stock Units Tab — Which Stock Units Appear and Which Do Not

On the Consignment's **Stock Units** tab you search and add Stock Units. The search starts only after you type something. You can search by **Stock Unit ID** (SU-000123), **Transport ID**, **container / truck number**, or **product name**.

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

A Consignment form has **six tabs**. Tabs are always clickable, in any order. A ✓ on a tab means it has real content and nothing wrong; a red **\*** on a tab means it has validation errors. A red star on a field means it is required. A strip under the title shows the **BL No** (or **Bill No** for domestic trade) from every tab once it is filled. Fields your role is not allowed to see may be hidden.

### Tab 1 — Consignment Details (the deal and the route)

- **Consignment Type\*** — Export, Import, Domestic Sale, Domestic Purchase or Trading. It decides which other fields appear, whether it is a sale or a purchase, and which Stock Units you can add.
- **Mode of Transport\*** — Sea, Air, Road or Rail. It decides which route fields appear.
- **Consignment Date\***.
- **Status** — the lifecycle status (see above), grouped by phase. Locked once inventory has been received. A small hint below it says what the status means for inventory.
- **Final Destination** — country (not for domestic).
- **Incoterms\*** — export, import and trading only (FOB, CIF…); decides who pays freight and insurance. Not shown for domestic trade.
- **Estimated Departure** and **Estimated Arrival** — arrival cannot be before departure.
- **Port & Carrier Details** (Sea or Air): Port of Loading\*, Port of Discharge\*, Shipping Line (or Custom Shipping Line), Vessel Name and Voyage Number (sea) or Flight Number (air).
- **Road Transport Details**: From Location\*, To Location\*, Vehicle / LR No\*, Transporter Name\*.
- **Rail Movement Details**: Origin Station / ICD, Destination Station / ICD, Rail Operator (all optional).

### Tab 2 — Consignment Info (the parties)

- **Shipper\*** (who sends), **Consignee\*** (who receives), **Notify Party** (who is told on arrival, often an agent or bank). All are picked from your **Business Partners** (create them first). **At least one of Shipper, Consignee or Notify Party must be your own company**; depending on the type your company may be filled in and locked for you.
- **Export / Import only:** Exporter Ref No, Buyer Order No, Country of Origin, Country of Destination.
- **Domestic only:** **Buyer Tax Number\*** and **Delivery Contact\***.

### Tab 3 — Stock Units (what is in the deal)

Search and add the Stock Units (see the section above). Each added unit shows as a card: Stock Unit ID, product, Transport ID, unit and seal numbers, mode, volume (CBM) and pieces. A note says units added to a new Consignment are linked when you save. A banner explains when adding is switched off. The small ? icon next to the search box explains that only trucks matching the deal are shown. The tab shows a count of linked units.

### Tab 4 — Documents (numbers and files)

- **Bill of Lading No** (international; **Bill No** for domestic trade). It is marked required (\*) for **sea** consignments, with the message "Required for export"; for domestic it says "Bill number is required".
- **BL Type** (sea): Original or Surrendered.
- **Packing List No** (international) and **Commercial Invoice No**.
- **Upload cards** for the files themselves: BL, Certificate of Origin and Phytosanitary (international), E-Waybill (road and rail), Invoice, and Other. Drag files in or Browse. Each file has its own visibility: Anyone with the link / LumberLinq users only / My team only (see sharing).
- The tab shows a count of files.

### Tab 5 — Financials & Payments (the money)

- **Invoice Details:** Currency (fixed automatically for domestic trade), Exchange rate to your reporting currency (only when the currency differs from your reporting currency; the converted amount is shown beside it), **Total Invoice Amount**, **Insurance Value**, **Freight Terms**.
- **Payment terms** — shown as **Customer Payment Terms** on a sale (Export, Domestic Sale), **Supplier Payment Terms** on a purchase (Import, Domestic Purchase) and **Payment Terms** on Trading. Choose from Immediate / Advance, Cash on Delivery, L/C Sight, L/C Usance (days), DP, DA, Open Account (days), Net 7 / 15 / 30 / 45 / 60 / 90 days, or Other (Custom); **Days** or **Custom Terms** boxes appear when the choice needs them. The **Due Date** is worked out from the terms. Press **Save Terms** to save them on an existing Consignment.
- **Payment summary cards** (after the Consignment is saved): **Invoice Amount**, **Received** and **Outstanding Receivable** (sales), **Paid Out** and **Outstanding Payable** (purchases), and **Payment Status** (unpaid, partly paid, paid or fully paid, overdue).
- **Payment History → Record Payment:** Type (Trading only), Payment Date\*, Payment Mode, Reference No (bank ID, cheque no.), Amount\*, Currency, Exchange Rate, Notes. You can **edit** an entry later. Record every part-payment; the outstanding amount updates itself. Payments are counted in the Consignment's currency.

### Tab 6 — Dispatch & Notes (who and why)

- **Created By** (filled by the app), **Approved By** (the person who approved it internally) and **Remarks** (internal notes).

### Buttons at the top of the form

**Lock** (freeze the Consignment), **Export** (PDF/Excel report), **Full Report** (PDF), **Full Trace** and **Stock Statement** (when Inventory is on), **Reset**, and **Save / Update Consignment**. On a phone these sit behind the ⋯ button.

## Photos — When and Where

Photos are added on the **Stock Unit** page, **Photos** tab, in categories **Front, Stack, Back, BL, Document, Other**. They are not needed to receive or confirm stock, but they are good proof.
- **Purchase:** photograph the load when it arrives and when unloaded (stack, front, back), plus the BL and any surveyor report.
- **Sale:** photograph the stacked and loaded timber and the closed container/truck before it leaves.
- Photo and file counts show as small chips on the Stock Unit list and on each Consignment row (tap for the categories). Photos are included in the **Bundle** export and the **Download pack** of a share link (if the link is allowed to show them).
- Consignment-level files (BL, invoice, certificates) go on the Consignment's **Documents** tab.

## Status Is Locked — What to Do

After a Stock In has been received through a Consignment, the status field is greyed out with the note "Inventory has already been received — status is locked." This is on purpose; it cannot be overridden. You can still edit most other fields unless the Consignment is **Locked**. If the status you wanted is wrong for the real world, add a note in **Remarks** and correct stock quantities with an Adjustment.

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
| **Wrong Consignment status** | Change it on Tab 1 (or the quick Change Status action on the list), unless the status is locked because stock was received. A purchase's accidental "Arrived" before real arrival only offers the receive prompt; nothing moves until you press Receive. |
| **Consignment cancelled** | Cancelling does not touch Lot quantities. If stock numbers need correcting, use Add Adjustment. |
| **Wrong payment amount or date** | Edit the entry in Payment History, or record a correcting entry with a note. |
| **A wrong adjustment** | Fix it with another adjustment (the old one stays on record). |
| **Consignment locked by mistake** | Ask an admin to unlock it. |

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

**"I cannot change the Consignment status."** Stock was already received through it, so the status is locked. The Consignment may also be Locked by an admin.

**"I cannot receive the Stock Unit."** It needs a Product, a Location, a Transport Mode (not for opening stock) and at least one saved tally row.

**"Confirm Stock-Out is refused."** A row has no stock, or asks for more than is free (unless "Let sales continue past available stock" is on), or the tally has unsaved rows. The message lists the rows to fix.
