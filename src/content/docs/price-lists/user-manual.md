---
title: Price Lists — User Manual
description: How to make price lists, link them to your business partners, and see the price of every log, the amount of every Stock Unit and the Total Invoice Amount of a consignment.
---

*Also searched as: price, prices, pricing, rate, rate card, price per cbm, price per cft, price per log, girth price, quality price, invoice amount automatic, auto total, price version, update price list, partner price, sales price list, purchase price list, price column in tally, price in excel.*

## What the Price module is

Price Lists is an **optional paid module**. When your company has it, you can:

- keep **reusable price lists** (for example "Teak logs FOB"), each with its own rule: one price, or a price by girth, by length, by quality, or by girth and quality;
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
2. Give it a name, choose what decides the price (one price, girth, length, quality, or girth and quality), choose **per CBM, per CFT or per log**, and the **currency**. You may also pick an **Incoterm** (for example FOB or CIF) so the list says which delivery term the price is for.
3. Fill in the price table. The **live check** box lets you type one log (length, girth, quality) and shows the price straight away.
4. Save.

Good to know:

- **Versions.** Every real change to the prices makes a new version (v2, v3 …). Changing only the name does not. Old versions are kept, so past consignments never change by themselves.
- **Copy** makes a new list from an existing one. **Archive** hides a list from new choices; **Restore** brings it back. A list cannot be deleted.
- Girth and length are counted in whole centimetres (any fraction is dropped), and each log's amount is rounded to 2 decimals.

## Link a list to a business partner

Each business partner can have a **usual sales list** and a **usual purchase list**. Your company can also have a **standard** list for sales and one for purchases. You set them on the Price Lists screen (the list shows **used by** and who uses it).

When a Stock Unit goes into a consignment, LumberLinq chooses its list in this order:

1. the list chosen on the **Stock Unit itself**, if any;
2. the **partner's usual list** for that direction (a sale uses the buyer, a purchase uses the supplier);
3. your company's **standard list**;
4. otherwise a **Custom copy** of the first list found, with a warning to check the price.

## Prices on a consignment

Open the consignment, then the **Stock Units** tab. The **Prices** block shows each Stock Unit with its price.

- Each round Stock Unit gets a **price line**: a *copy* of the list version, so later changes to the list do not move your prices behind your back. Use **Add price** for a unit that has none. Square tallies are not priced yet.
- **Prices** (on a unit) opens the table of every log with its price and amount. You can **type a different price for one log**; it is marked as typed, and **Remove typed prices** goes back to the list.
- When the list has a **newer version**, you are asked once: **Update to the new version** or **Keep** the one you have. Nothing changes until you choose.
- When you **change the buyer or supplier**, a question card offers the new partner's list (**Use their list**), or you keep the prices you have.
- A **locked** consignment cannot have its prices changed. If a line is in a different currency from the consignment, it is shown as "not in the total".

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
- **Show prices**: the price and amount of every log.

In the tally itself, **Show prices** (next to **Columns**) adds read-only **Price** and **Amount** columns to the table; **Hide prices** removes them. Prices are never stored in the tally.

## Prices in downloads and reports

- **Stock Unit download**: *Price* and *Amount* columns can be chosen (they are part of **Every column**) for files meant for **My team only**, in both Excel and PDF. They are not offered on share links.
- **Consignment Excel**: when Financials is included, the Financials block lists each priced unit and the calculation.
- **Full Report**: the Financial Summary gets a **Prices** table.

Price information is shown only to people who have the *View prices* right.
