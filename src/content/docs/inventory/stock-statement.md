---
title: Inventory — Stock Statement
description: Prove what happened to any stock — received, milled with wastage, sold, adjusted and still in stock — like a balance sheet.
---

*Also searched as: stock statement, stock proof, reconcile stock, stock history, what happened to stock unit, batch history, mill wastage, outturn, in and out, hisaab, taalo, balance sheet, customer stock report.*

The **Stock Statement** answers one question with proof: *what happened to this stock?* It shows what came in, what went to the mill (and how much was lost as wastage), what was sold or adjusted, and what is still in stock — and checks every figure against the batch records.

## Opening the Stock Statement

- **Menu:** Inventory → **Stock Statement**
- **From another screen:** press the **Stock Statement** button on
  - a Stock Unit (also after it has been sold),
  - a batch in **Inventory → Overview** (batch detail),
  - a mill job in **Inventory → Processing**,
  - a **Consignment**.
- **From Reports:** Reports → Inventory Report → **Stock Statement**.
- **From Linc AI:** ask "What happened to SU-000058?" and press **View Details**.

## One item

Choose **One item** and type any of these, then press **Show statement**:

| You type | You get |
|---|---|
| Stock Unit ID, e.g. `SU-000058` | the batch it was received into, and every batch milled from it |
| Container / transport ID, e.g. `SUDU1374344` | same as the Stock Unit |
| Batch code, e.g. `LOT-2026-0021` | that batch and everything milled from it |
| Mill job code, e.g. `PR-2026-0022` | the job's input batch and output batch, with wastage |
| BL number | the batches behind that consignment's Stock Units |

## Filter stock

Choose **Filter stock** to prove a whole part of your stock at once:

- **Product, Origin, Site, Quality** — leave any of them empty for "any".
- **Size in any unit** — the box shows how it understood you:

| You type | Understood as |
|---|---|
| `3x2x8 ft` | 3″ × 2″ × 8 ft |
| `4in x 3in x 7ft` | each number with its own unit |
| `76 x 50 mm` | millimetres for both |
| `7.5cm x 5cm x 2.4m` | metric |
| `girth 90cm x 8m` | round logs |

- **From / To** — optional. Everything before the From date becomes **Starting stock**.

The result is grouped by **product · origin · site · quality**. Tap a group to see its batches, and tap a batch to open its own full statement. With a size, the **This size now** column shows how much of that size each batch holds today (the size filter uses batches that still hold that size).

## Reading the statement

**The seal at the top**
- **Balanced** (green) — every batch's closing figure matches its batch record, and stock in equals stock out.
- **Difference found** (red) — at least one batch does not match its record. That batch is marked in red with the record figure and the difference.
- **Period statement** (blue) — the period ends in the past, so closing figures are *as of that date* and are not compared with today's records.

**Balance sheet**

| Stock in | | Stock out and left |
|---|---|---|
| Starting stock | | Sold / dispatched |
| Received | **=** | Sent to mill (output not in this statement) |
| Produced from other batches | | **Mill wastage** |
| Adjustments (net) | | Still in stock |

The coloured bar under it shows where the stock went.

**Mill jobs and wastage** — for each mill job: what went in, what came out, the **wastage** (in − out) with its %, and the outturn %. Example: 11.000 CBM in → 3.070 CBM out = 7.930 CBM wastage (72.1%), outturn 27.9%.

**Batches** (one item) — each batch shows Starting + Received + Produced − To mill − Sold ± Adjusted = **Closing**, a **Matches record** tick, what is **Held** for open sales or mill jobs, and what is **Free** to sell. **Show entries** lists every ledger entry with date, time and a link to the Stock Unit, mill job or consignment. Batches produced by a mill job are shown indented under the batch they came from.

**Timeline** — every entry in date order, in your profile timezone.

## Example — proving a Stock Unit (taalo melavavo)

SU-000058 was received into LOT-2026-0021, and mill job PR-2026-0022 made LOT-2026-0023 from it:

- LOT-2026-0021: 17.876 received − 11.000 to mill = **6.876 CBM left** (208 pcs) ✓
- LOT-2026-0023: 3.070 produced = **3.070 CBM** ✓ — 2.360 held for a sale, 0.710 free
- Balance sheet: **17.876 in = 7.930 mill wastage + 9.946 still in stock** ✓

## Sharing with a customer

Press **PDF** or **Excel**. Both contain the same statement: seal, balance sheet, mill jobs, batches and entries (the PDF lists groups and batches compactly when there are many). Switch **CBM / CFT** on screen as you like; volumes are net.

**Purchase price, supplier and partner names** appear only for **Admin, Super Admin and Root** — on screen and in the files. Everyone else never sees them.

## Linc AI

Linc answers with the same numbers as this screen, in English, Hindi or Gujarati, for example:

- "What happened to SU-000058? How much in stock, milled, sold?"
- "SU-000058 ma shu thayu?"
- "LOT-2026-0021 no hisaab aapo"
- "Prove Algeria stock" / "Algeria stock taalo melavo"
- "Stock statement for 3x2x8 from 1 Sep to 15 Sep"

Press **View Details** on the answer to open the statement.

## Good to know

- Only people with Inventory access can open the Stock Statement, and only when Inventory is turned on for your company.
- A batch created by hand (without a receipt entry) shows its first quantity as **Starting stock**.
- Some entries have no piece count (for example a mill job started without pieces). The statement then says piece totals are indicative; CBM is always exact.
- Filter mode shows up to the newest 500 batches — narrow the filter to see the rest.
