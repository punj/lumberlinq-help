---
title: Price Lists — FAQ
description: Frequently asked questions about price lists, partner prices and automatic invoice amounts in LumberLinq.
---

*Also searched as: price list, price module, rate, per cbm, invoice amount, auto total, price version, keep or update, custom copy, price missing.*

## Why don't I see Price Lists in my menu?

Price Lists is an optional paid module, and it also needs the **View prices** right. If your company does not have the module, or your role lacks the right, the menu item and every price box are hidden. Ask your administrator for the right, or your LumberLinq contact for the module.

## Does the Price module change my existing consignments?

No. Nothing is priced until you make a list and a Stock Unit uses it. Prices live in their own table; the only field it may write is the consignment's Total Invoice Amount, and only when that consignment is set to **Auto**.

## What is the difference between Auto and Manual?

**Auto**: the Total Invoice Amount follows the calculated total (goods from the prices, plus freight and insurance, minus discount, plus tax). **Manual**: you type the amount yourself. A consignment that already has a typed amount starts in Manual.

## I changed a price list. Why did my consignment not change?

Each Stock Unit keeps a copy of the list version it started with. When a newer version exists you are asked: **Update** to the new version or **Keep** your current one.

## What does "Custom copy: check the price" mean?

LumberLinq found no list for this unit, partner or company, so it used the first list it could as a starting point. Check the prices, or choose the right list on the Stock Unit or the partner.

## A Stock Unit says "Prices for square tallies are not available yet".

Only round tallies can be priced for now.

## Why does a log have no price?

The list may price by quality and the log has no quality, or its size falls outside the table. Fill in the missing value, or type a price for that log.

## Can I type a price for one log?

Yes: open **Prices** on the unit and type the price. It is marked as typed and stays when you update the list; **Remove typed prices** goes back to the list.

## Why is a line "not in the total"?

Its list uses a different currency from the consignment, so it cannot be added without a rate. Use a list in the consignment's currency.

## Can I change prices on a locked consignment?

No. A locked consignment refuses every price change, and its saved Total Invoice Amount stays as it is. Locking is permanent: there is no unlock.

## Can I delete a price list?

No. **Archive** it: it disappears from new choices, and old consignments keep their copies. **Restore** brings it back.

## Where can I see prices in downloads?

In the Stock Unit download, choose **Every column** (or pick *Price* and *Amount*) for **My team only**. The consignment Excel and the Full Report show a prices block as well. Share links never show prices.
