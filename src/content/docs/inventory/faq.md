---
title: Inventory — FAQ
description: Frequently asked questions about the Inventory module in LumberLinq.
---

**Why can't I add a Stock Unit to a consignment?**

It hasn't been received into inventory yet. Go to Overview or In/Out and confirm a receipt (IN) movement exists — if not, check the tally sheet was fully saved, not just filled in.

**A Stock Unit shows unavailable even though it was received — why?**

Check In/Out for an assignment (In Consignment), a Proc IN (currently processing), or confirm it hasn't already shipped.

**My Overview totals look wrong — what should I check?**

Look for an uncommitted adjustment or an open processing run that hasn't been completed, and confirm every tally sheet linked to the affected Stock Units was actually saved.

**Which screen should I use for reconciliation?**

Use In/Out for the movement audit trail, and the Reconciliation Report (under Reports) for a structured comparison view.

**What's the difference between the six stock stages?**

At Forest, At Mill, and At Yard are available stock at that location type. In Transit and In Consignment are stock already booked to a consignment (moving vs. not yet moving). In Process is stock currently going through a processing run.

**When should I use Add Adjustment instead of a normal Stock In?**

Only when recorded stock no longer matches physical reality (e.g. after a stocktake or damage) — not as a substitute for a proper receipt. If a Stock Unit was physically received but never entered, do a real Stock In instead.

**Can I undo a processing run?**

Cancel it while it's still Draft or In Progress — cancelling reverses the input Stock Unit assignments. Once Completed, it can't be reversed the same way.

**Where do I find the Chain feature? It's not in the menu.**

That's expected — Chain isn't its own page. Go to **Inventory → Overview**, find the specific stock lot you want to trace, and click **View Chain** on that lot. It's tied to one lot at a time, not something you open on its own.

**What does the Chain actually show me?**

The full history of one specific batch of stock — where it came from (a purchase, or an earlier lot that was re-sawn into this one), what processing turned it into what you're looking at, and where it went afterwards (sold out, or re-sawn again into something else). Think of it as that batch's own family tree, in one place, instead of hunting through separate purchase/processing/sale records yourself.
