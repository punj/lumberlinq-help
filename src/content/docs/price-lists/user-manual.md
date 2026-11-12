---
title: Price Lists — User Manual
description: How to make price lists for round logs and sawn (square) timber, link them to your business partners, and see the price of every log or piece group, the amount of every Stock Unit and the Total Invoice Amount of a consignment.
---

*Also searched as: price, prices, pricing, rate, rate card, price per cbm, price per cft, price per log, girth price, quality price, sawn timber price, square tally price, exact size price, price per piece, size matching, 4x3x6 price, invoice amount automatic, auto total, price version, update price list, partner price, sales price list, purchase price list, price column in tally, price in excel.*

## What the Price module is

Price Lists is an **optional paid module**. When your company has it, you can:

- keep **reusable price lists** (for example "Teak logs FOB"), each with its own rule: one price, or a price by girth, by length, by quality, or by girth and quality, for **round logs**, for **sawn (square) timber**, or for both in one list;
- link a list to a **business partner**, so a consignment to that partner picks up the right prices by itself;
- see the **price of every log**, the **amount of every Stock Unit** and a **calculated total** on the consignment;
- let the **Total Invoice Amount** follow those prices automatically, or keep typing it yourself.

If your company does not have the module, nothing changes: you see no Price Lists menu item and no price boxes anywhere. Ask your LumberLinq contact to switch it on.

## Who can see and change prices

| Right | What it allows |
|---|---|
| **View prices** | See the price lists, and the prices on consignments, Stock Units, downloads and the Full Report |
| **Manage price lists** | Make, change, copy and archive price lists and link them to partners |

Managers and Accountants have *View prices* by default. You can give either right to anyone through their role (see **RBAC & Access Roles**; the Price group is shown only when your company has the module). Changing the prices of a consignment also needs the right to edit consignments; choosing a list on a Stock Unit needs the right to add or edit Stock Units.

## Make a price list

1. Open **Directory → Price Lists** and click **New price list**.
2. Under **Parts of this list** tick **Round logs**, **Sawn timber**, or both. A list may have only one part. Sawn timber is explained in the next section.
3. Give it a name, choose what decides the price (one price, girth, length, quality, or girth and quality), choose **per CBM, per CFT or per log**, and the **currency**. You may also pick an **Incoterm** (for example FOB or CIF) so the list says which delivery term the price is for. The **Quality** and **Girth and quality** choices appear only when your company has **Quality Grading** switched on, because they price a log by the quality saved on it. The qualities are the same ones as in your Quality Grading settings (A, B, C, D, with your own names).
4. Fill in the price table. The **live check** box lets you type one log (length, girth, quality) and shows the price straight away.
5. Save.

Tap the **?** next to a heading, or **How this works** at the top, for a short explanation. It opens as a card, so it works on a phone too.

Good to know:

- **Versions.** Every real change to the prices makes a new version (v2, v3 …). Changing only the name does not. Old versions are kept, so past consignments never change by themselves.
- **Copy** makes a new list from an existing one. **Archive** hides a list from new choices; **Restore** brings it back. A list cannot be deleted.
- Girth and length are counted in whole centimetres (any fraction is dropped), and each log's amount is rounded to 2 decimals.

## Sawn (square) timber prices

Tick **Sawn timber** under **Parts of this list** and a **Sawn timber prices** box opens under the round steps. The **currency** and the **Incoterm** you choose for the list are shared by both parts. A sawn tally row is a group of pieces of one size, so the price is worked out for each row. Choose how you want to set it:

**Simple** is the easy way. Pick one thing that decides the price and fill in the numbers:

- **One price**: the same price for every piece.
- **Thickness**: a price for each thickness range.
- **Quality**: a price for each quality (needs **Quality Grading**), plus an **any other piece** price.
- **Quality + thickness**: a table of both.
- **Length**: a price for each length range.
- **Exact sizes**: a price for each listed size, with its quality. Fill the table or type lines such as `4x3x6 QA 315` (width x thickness x length, then the quality code, then the price) in the box and press **Add these lines**. A line without a quality code is for any quality.

In the range tables the ranges join up by themselves: change the **From** or the **To** of one range and its neighbour follows. The first row starts at 0 and the last says "and above".

**Custom rules** is for any other way a customer prices. It is a table of rules, checked from top to bottom; **the first rule that fits a piece sets its price**. Each rule can limit the **thickness, width and length** (a **From** and an **Up to**; an empty box means no limit, and "Up to" does not include that size), the **quality**, and the **species**, and has its own **price**, **unit** (CBM, CFT or piece) and **currency** (or "Same as the list"). Put a rule with no limits last so every piece gets a price. A rule that can never be reached, because an earlier rule already fits everything it fits, is marked **Never used**. **Adjustments** add or take off a percentage or an amount on top of the price a rule gave (for example "quality QA: add 8%"). Pressing **Custom rules** after a Simple setup starts from exactly what Simple wrote; going back to Simple asks first, because it replaces your custom rules.

**Step 2 for sawn timber** chooses what the price is per (**CBM, CFT or Piece**, where a piece price is multiplied by the pieces on the row) and the **units** the sizes are written in: thickness, width and length each have their own unit, offered as **Your company default / Imperial / Metric** and starting from your **Tally Defaults** for square tallies. Changing a unit converts the numbers you already typed.

**Match a piece to a listed size** (Exact sizes): real pieces are rarely exactly 6.00 ft, so for thickness, width and length separately you choose **Exactly** (a piece must have a listed size, so 6.2 ft has no price if only 6 and 6.5 are listed), **Nearest listed size** (the closest listed size; if two are equally close, the longer one) or **Listed size or below** (the longest listed size that is not above the piece). A small table under the choice shows how pieces of your first listed size would be read.

**In plain words** and **Check with a piece** show the result of your settings before you save. A piece that no rule fits has no price, is left out of the total and is listed in the **No price** chip of **Edit prices**.

**Quality Grading** is its own module, with its own plan switch or add-on. Without it the **Quality** choices are hidden, a note says so, and a list that prices by quality cannot be saved. With it, **Quality names** next to the sawn rules opens the same window to rename the qualities.

## Link a list to a business partner

Each business partner can have a **usual sales list** and a **usual purchase list**. Your company can also have a **standard** list for sales and one for purchases. You set them on the Price Lists screen (the list shows **used by** and who uses it).

When a Stock Unit goes into a consignment, LumberLinq chooses its list in this order:

1. the list chosen on the **Stock Unit itself**, if any;
2. the **partner's usual list** for that direction (a sale uses the buyer, a purchase uses the supplier);
3. your company's **standard list**;
4. otherwise a **Custom copy** of the first list found, with a warning to check the price.

The partner list shows **10 partners at a time**, with "Showing 10 of N" and a **Show more** button. Use **All / With a list / No list yet** to find the partners that still have no list, **A–Z** or **No list first** to sort them, and the search box to find one by name. Your own lists are shown A–Z.

## Prices on a consignment

Open the consignment, then the **Stock Units** tab. The **Prices** block shows each Stock Unit with its price.

- Each Stock Unit gets a **price line**: a *copy* of the list version, so later changes to the list do not move your prices behind your back. A round unit uses the round part of the list and a square unit uses its sawn part. Use **Add price** for a unit that has none. A unit on a list that has no part for its kind says "This price list has no sawn prices yet" (or no round prices); choose another list or add that part to the list.
- A Stock Unit is named by its **Transport ID** when it has one, otherwise by its Stock Unit ID.
- **Edit prices** (on a unit) opens a large window over the consignment (the full screen on a phone). Every log is there with its price box and amount, 50 at a time (**Show 50 more**). The chips **All / No price / Typed** show only the logs that need a price, or the ones where someone typed a price, and **Go to log #** jumps to one log. You can **type a different price for one log**; it is saved at once and marked as typed, and **Remove typed prices** goes back to the list. **Done** closes the window. For a **sawn** unit each row is a group of pieces: the window shows the size, length, pieces, quality, net CFT, the price with its unit and money, and the amount, and a price you type is per the unit of the rule that fits. A user who may not edit consignments sees **Prices** instead, to read only.
- **Open all N logs in the Stock Unit** (and the **Unit** button) opens the Stock Unit with the Price and Amount columns already shown in the tally.
- When the list has a **newer version**, you are asked once: **Update to the new version** or **Keep** the one you have. Nothing changes until you choose.
- When you **change the buyer or supplier**, a question card offers the new partner's list (**Use their list**), or you keep the prices you have.
- A **locked** consignment cannot have its prices changed (locking is permanent; there is no unlock). If a line is in a different currency from the consignment, it is converted with a rate (see **Currencies and rates** below); with no rate yet it is shown as "not in the total".

## Currencies and rates

Your price lists can be in different currencies from your consignments. For example a forest in Togo is paid in CFA francs (XOF), the money is sent in USD or EUR, you sell in USD or EUR, and your books are in INR. A consignment always keeps **one** currency for its invoice and payments; a price list in another currency is brought in with a **rate**.

1. Open **Directory → Price Lists** and scroll to **Currencies and rates**.
2. Use **Add a currency** and type **one rate for each currency you deal in**, against your **books currency** (the company currency in your company settings, INR if you have not set one). For example 1 USD = 84.50 INR. Every other pair, such as EUR to XOF, is worked out from these rates.
3. Beside each rate you see today's **reference rate** from a free rate service, with the date and time it was last updated in **your own time zone**. It is only a hint: press **Use** to copy it, or type your own. Nothing changes by itself.
4. On a consignment, a price line in another currency shows **amount × rate = converted amount**, and the totals include it. You can **type a different rate for that consignment**, or press **Use my rates** to go back.

A rate is **saved on the consignment** the next time something changes on it and never moves by itself afterwards; a **locked** consignment keeps its rate for good. If a line has no rate yet, it stays out of the total and the screen tells you which rate is missing. If you change your books currency later, the rates typed for the old one ask to be typed again.

Everywhere a currency is chosen in LumberLinq you now use the same picker: type to search, see the code, name and symbol, with the currencies your company uses most shown first.

## How currency conversion works, in simple words

Think of a money-changer: one rate for each pair, written on the receipt.

1. **A price list has only one currency.** Nothing is converted inside a list or while you build it. The currency there only says what the prices are written in.
2. **Conversion happens on the consignment.** If a unit's price comes from a list in another currency than the consignment, LumberLinq turns it into the consignment's currency. For example, a USD consignment with a EUR list: 1,250.00 EUR becomes 1,349.11 USD.
3. **The rate** comes from your **Currencies and rates** (one rate per currency against your books currency). For a pair like EUR to USD, LumberLinq divides the two: EUR rate ÷ USD rate. You can also type a rate on one consignment.
4. **The rate is saved on the consignment** the next time something changes on it. After that it never moves by itself. **Locking** the consignment keeps the rate for good.
5. **The totals follow:** the Goods total, the calculated total on the Money tab and the Auto Total Invoice Amount all use the converted amounts. The Excel and the Full Report show both amounts and the rate.
6. **No rate yet?** The line stays out of the total, and the screen tells you which rate is missing.

**Payments in your books currency:** each payment can carry its own rate to your books currency (for example INR). When you record a payment in another currency than the consignment's, the rate box fills in from your **Currencies and rates** if you have a rate for it; you can change it. The **Paid Out** card (purchases) and the **Received** card (sales) then show a blue "≈ ₹ amount" line, and the payments table shows the same under **Total Paid** and **Total Received**. If any payment of that kind has no rate yet, the line is hidden rather than showing a partial total. It converts to your books currency only, not to a third currency such as USD.

**What is not converted:** payments and the invoice stay in the consignment's currency. The price of each log in the Stock Unit tally stays in the list's own currency. The consignment's own "rate to your books currency" box is separate and was already there.

**Where you will see conversion:** Price Lists → Currencies and rates · a consignment's Stock Units tab (the rate box on each price line) · the Money tab and the Total Invoice Amount · the consignment Excel and the Full Report.

## The Money tab: calculation and Total Invoice Amount

On the **Money** tab, **Price calculation** shows: goods from the Stock Units, plus **Freight** and **Insurance**, minus a **Discount %** of the goods, plus a **Tax %** on that result, giving the **Calculated total**.

Under it, **Total Invoice Amount** is either:

- **Auto**: the Total Invoice Amount follows the calculated total and its box is greyed; or
- **Manual**: you type it, and the calculation is only for reference.

A consignment that already had a typed invoice amount starts in **Manual**, so nothing is overwritten.

## On the Stock Unit page

Open a Stock Unit and choose **Stock Unit details**. The **Price** card has:

- **Price list (optional)**: the list this unit starts with when it is added to a consignment. The same field is on **New Stock Unit**.
- A chip showing the consignment the unit is in, with **Open consignment**.
- **Show Price and Amount in the table**: closes this panel and turns on the Price and Amount columns in the tally, where all logs are, even thousands, with sorting and fast scrolling. The card also shows the list, the version and the total amount.

In the tally itself, **Show prices** (next to **Columns**) adds read-only **Price** and **Amount** columns to the table, with the currency in the heading; **Hide prices** removes them. A Stock Unit opened from a consignment shows them already. Prices are never stored in the tally, and to change the price of one log you go back to the consignment (**Edit prices**).

## Prices in downloads and reports

- **Stock Unit download**: *Price* and *Amount* columns can be chosen (they are part of **Every column**) for files meant for **My team only**, in both Excel and PDF. They are not offered on share links.
- **Consignment Excel**: when Financials is included, the Financials block lists each priced unit and the calculation.
- **Full Report**: the Financial Summary gets a **Prices** table.

Price information is shown only to people who have the *View prices* right.
