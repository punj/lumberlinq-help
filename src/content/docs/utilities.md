---
title: Utilities
description: Built-in timber calculation tools — unit conversion, volume estimates, and slab price generator.
---

The Utilities module provides practical timber calculation tools built into LumberLinq so you do not need separate spreadsheets for everyday conversions and volume checks. Access all three tools from the main menu under **Utilities**.

## Unit Conversion

Convert measurement values between supported units — for example centimetres to inches, feet to metres, or CBM to CFT.

![Unit conversion tool](/screenshots/utilities/utilities-01-unit-conversion.png)

**How to use:**

1. Enter the source value in the **From Value** field
2. Select the **From Unit** (e.g., centimetres)
3. Select the **To Unit** (e.g., inches)
4. Set **Decimal Places** for how precise the result should be
5. The **Converted Value** updates automatically
6. Click **Reverse** to swap From and To units — useful when checking a conversion in both directions
7. Click **Add** to keep the current row visible while working on another conversion
8. Click **Clear** to reset all fields

Common timber conversions: cm ↔ inches (girth, width, thickness), feet ↔ metres (length), CBM ↔ CFT (volume).

## Volume Estimates

Calculate the total volume of a timber lot from its dimensions without creating a full tally sheet. Useful for quotations, purchasing decisions, and quick volume checks.

![Volume estimates tool](/screenshots/utilities/utilities-02-volume-estimates.png)

**How to use:**

1. Enter **Width**, **Thickness**, **Length**, and **Quantity** for one size batch
2. Select the unit for each dimension (inches, cm, feet, mm)
3. The page calculates **CBM**, **CFT**, and total values automatically
4. Add more rows for different sizes in the same lot

**Common units toggle:** When all rows use the same measurement system, switch on **Common Units** — one unit selector applies to all rows.

![Volume estimates common units toggle](/screenshots/utilities/utilities-03-volume-common-units-toggle.png)

Keep row-specific units when your material list contains mixed measurement systems.

**Optional fields:** Enter a rate per CBM or CFT to see the estimated value alongside the volume total.

**Why results look wrong:** Almost always a unit mismatch. If you entered Width in inches but selected centimetres as the unit, the volume will be incorrect. Check each unit field carefully.

## Slab Generator

Build a size-based pricing rate table when timber is priced by size range. Common in markets where smaller cross-sections are priced lower per CFT than larger ones.

![Slab generator inputs](/screenshots/utilities/utilities-04-slab-generator-inputs.png)

**Inputs:**

| Field | Description |
|-------|-------------|
| Rate | The base rate (per CFT or CBM) |
| Slab CFT | The reference CFT value for the base rate |
| Slab Price Size | The price increment per slab step |
| Slab Size | How many CFT each slab step covers |
| Upper Slabs | How many steps to generate above the base |
| Lower Slabs | How many steps to generate below the base |

Click **Calculate** to generate the slab table. Use the **Slab Price** tab to review the complete rate table.

![Slab generator results](/screenshots/utilities/utilities-05-slab-generator-results.png)

Copy or share the slab table with buyers or use it in quotations.
