---
title: How Stock Moves — Stock Unit, Lot, Mill Job
description: The three words LumberLinq uses for stock, how wood moves from purchase to sale, which stock is used first, and what happens when you save and confirm a Stock Out.
---

*Also searched as: batch, lot, mill job, processing run, mill run, process, transport unit, TU, stock unit, fifo, oldest first, hold, held, free stock, sold, stock out, stock in, where did it come from, trace to purchase, glossary, terms.*

## Three Words for Stock

| Word | Code | What it is | Older name |
|---|---|---|---|
| **Stock Unit** | `SU-000092` | One load — a container, truck or wagon — with its tally rows (every piece measured). **Stock In** = a load you bought. **Stock Out** = a load you sold. It is the paper record: BL, consignment, supplier or buyer, rows. | Transport Unit, TU |
| **Lot** | `LOT-2026-0031` | A pile of the same wood in your stock: one product, one site, one origin and quality. It holds today's figures — how much is there (net m³, pieces, per size), what is held and what is free. | Batch |
| **Mill Job** | `PR-2026-0022` | Wood sent from a Lot to the mill (sawing, re-saw, custom order). It records what went in, what came out and the waste. What it makes goes into a new Lot. | Process, Processing Run, Mill Run |

## The Flow

```
Stock In (SU)  →  Lot  →  Mill Job (PR)  →  New Lot  →  Stock Out (SU)
 bought           in stock   cut / made       ready stock     sold
```

- A Stock In is **received into** a Lot. A Mill Job **makes** a new Lot. Stock Outs and Mill Jobs always **take from** a Lot.
- A Lot can also be sold straight away (Stock In → Lot → Stock Out) — the Mill Job step is only there when wood is milled.
- A new Lot can go to another Mill Job (re-saw) before it is sold.
- One Lot can hold several Stock Ins (for example 3 containers of the same teak).

## Why They Are Kept Separate

- The **Stock Unit** is the paper record. Once received (Stock In) or confirmed (Stock Out), its rows are locked and never change.
- The **Lot** is the running stock count. It changes every day — sales, mill jobs, adjustments.
- The **Mill Job** is the record of wood turning into other wood, with its waste.

Kept apart, LumberLinq can show the whole path from purchase to sale and account for every m³.

## Example

```
Stock In  SU-000101, SU-000102, SU-000103  (3 containers of teak logs, BL ABC123)
   │  received into
Lot       LOT-2026-0040   Teak logs · Kandla yard · 60 m³
   │  20 m³ sent to mill
Mill Job  PR-2026-0025    in 20 m³ → out 14 m³ · waste 6 m³ (30%)
   │  made
Lot       LOT-2026-0041   Teak sawn 6"×2" · 14 m³
   │  10 m³ sold
Stock Out SU-000110       to a buyer (consignment BL XYZ789)
```

**Where did SU-000110's 10 m³ come from?** From LOT-2026-0041, which PR-2026-0025 made. 10 of that job's 14 m³ output is 10/14 of its input: 14.29 m³ of logs, waste included. Those logs came from LOT-2026-0040 — the oldest Stock In first, SU-000101 (BL ABC123). The Stock Statement ("From purchase", "Where it came from") and Full Trace ("Trace to purchase") show exactly this path.

All figures are **net volume**.

## Oldest First (FIFO) — When, Where and How

LumberLinq uses "oldest first" at two levels.

**1. Which Lot a Stock Out takes from** — when you save its rows (the hold) and again when you confirm it:
- only Lots with the same product, site, origin and quality count;
- for square stock, only Lots that really have that width × thickness and a length **at least as long** as the row (wood is cut down, never made longer) — the shortest length that fits is used first;
- among those, the **oldest Lot first**; if one Lot is not enough, the rest comes from the next oldest;
- wood held by other open Stock Outs and Mill Jobs is never taken.

**2. Which purchase inside a Lot the wood counts against** — a Lot can hold several Stock Ins, so wood leaving it counts against the **oldest Stock In first**. This is used:
- when a **Mill Job finishes** — the split is saved. With *Application Settings → Inventory Policy → "Track which purchase a Mill Job's wood comes from"* on, you see it and can change it on the Record Output screen;
- by the **Stock Statement** ("From purchase", "Where it came from") and **Full Trace** ("Trace to purchase") — the same calculation, followed back through Mill Jobs to the Stock In and its BL.

Corrections are counted in: an adjustment that adds wood adds it (to its own Stock In when it names one); one that takes wood off takes it off.

**Not oldest first:** a Mill Job takes from the Lot you pick for it, and Add Adjustment changes the Lot and size you pick.

## Stock Out — Hold, Sold, Locked

| Step | What you do | What happens to stock |
|---|---|---|
| 1. Save rows | Tally the Stock Out rows. The Stock Picker shows only stock really in the Lots (not stock still waiting to be received). | The wood is **held** for this Stock Out. It is still in the Lot, but it is no longer **free** for anyone else. |
| 2. Change rows before confirm | Edit or delete rows. | Holds update at once; deleted rows release their hold. |
| 3. **Confirm** | Confirm the Stock Out. | Holds become **Sold** lines in the In/Out ledger — one per Lot and size taken (net m³, pieces, origin, quality). The Lots go down. |
| 4. After confirm | — | The rows are **locked for everyone**, admins included. Nothing is deleted or edited. |
| 5. A mistake found later | **Add Adjustment** on that Stock Out's line: "Sent less than recorded" or "Sent more than recorded". | A new adjustment line on that Lot and size. The Stock Out's rows and the consignment / invoice totals stay as they were — fix those separately. |

**Stock In works the same way:** its rows can change until it is **received** into a Lot. After that they are locked, and corrections go through **Reconciliation** or **Add Adjustment**.

## Words You See on the Screens

| Word | Meaning |
|---|---|
| **In stock** | In the Lot right now. |
| **Held** | Kept for an open Stock Out or Mill Job — still in the Lot. |
| **Free** | In stock minus held — what can still be sold or milled. |
| **Sold** | Taken by a confirmed Stock Out. |
| **Sent to mill** / **Made by mill** | Wood a Mill Job took from a Lot / wood it made into a new Lot. |
| **Waste** | What a Mill Job took in minus what it made (m³ and %). |
| **Adjusted** | Changed by Add Adjustment. |
| **Reconciled** | Changed by locking a Stock In's unloading count (what really arrived). |
