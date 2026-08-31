---
title: Tally Sheets — User Manual
description: Step-by-step guide for creating and managing Round and Square tally sheets in LumberLinq.
---

*Also searched as: log tally, transport unit, measurement sheet, round tally, square tally, timber measurement, CBM calculator, cubic meter, girth, hoppus, wood measurement.*

## Tally Sheet List

There is no menu item literally called "Tally Sheets" — every tally sheet belongs to a Stock Unit, so tally sheets are managed from the **Stock Unit** menu instead. Open **Stock Unit > Stock Units** to view all Stock Units and their tally sheets. The list supports search, table columns, KPI cards, and row actions.

![Stock Units list header](/screenshots/transport-units/transport-units__list-header__01.png)

![Stock Units stats](/screenshots/transport-units/transport-units__stats__01.png)

![Stock Units filter bar](/screenshots/transport-units/transport-units__filter-bar__01.png)

![Stock Units table](/screenshots/transport-units/transport-units__list-table__01.png)

## Create and Edit

Use **Stock Unit > Add Stock Unit** to create a Stock Unit and tally sheet. Every Stock Unit gets its own **Stock Unit ID** automatically (e.g. `SU-000123`) — this is its permanent identity and never needs to be typed in. **Transport ID** is optional — use it only to note the actual truck, container, or vehicle involved; the same Transport ID can be reused if the same vehicle comes back. Required fields are Product and Transport Mode. Product type determines whether the measurement grid opens as Round or Square.

![New Stock Unit button](/screenshots/transport-units/transport-units__new-button__01.png)

![Round — create](/screenshots/tally/round-create.png)

![Round — edit](/screenshots/tally/round-edit.png)

![Square — create](/screenshots/tally/square-create.png)

![Square — edit](/screenshots/tally/square-edit.png)

## Round Tally Sheet

Round tally sheets capture log measurements using Length and Girth. The grid automatically calculates gross and net CBM/CFT values.

Key areas:

- Measurement grid
- Volume calculation columns
- Summary tab

![Round entry grid](/screenshots/tally/round-entry-grid.png)

![First 10 records](/screenshots/tally/round-first-10-records.png)

![Middle records (row 50)](/screenshots/tally/round-middle-records-row-50.png)

![Large dataset (100+ records)](/screenshots/tally/round-large-dataset-100-plus.png)

![Volume calculation columns](/screenshots/tally/round-volume-calculation.png)

![Round summary tab](/screenshots/tally/round-summary.png)

![Empty tally sheet state](/screenshots/tally/round-empty-tally-sheet.png)

## Square Tally Sheet

Square tally sheets capture Width, Thickness, Length, and Pieces. Columns are displayed side-by-side in a wide layout so all key fields are visible together.

![Square entry grid (all columns)](/screenshots/tally/square-entry-grid-fit-all-columns.png)

![Width, Thickness, Length, Pieces entry](/screenshots/tally/square-width-thickness-length-pieces-entry-fit.png)

![Square volume calculation](/screenshots/tally/square-volume-calculation-fit.png)

![Large piece counts](/screenshots/tally/square-large-piece-counts.png)

![Square summary tab](/screenshots/tally/square-summary.png)

## Settings and Configuration

Use **Settings** to control validation rules, unit of measure, allowances, decimal precision, visible columns, and copy behaviour.

Round settings include:

- Divisible by 5
- Length range
- Girth range
- Length UoM
- Girth UoM
- Decimals
- Copy Previous Length
- Add to Length
- Length and Girth Allowances
- Visible columns

Square settings include:

- Width UoM
- Thickness UoM
- Length UoM
- Decimals
- Width, Thickness, and Length Allowances
- Visible columns

![Square settings panel expanded](/screenshots/tally/tally-sheets__settings__01.png)

![Round settings — validation rules](/screenshots/tally/round-settings-validation-rules.png)

![Round settings — configuration](/screenshots/tally/round-settings-configuration.png)

![Square settings — configuration](/screenshots/tally/square-settings-configuration.png)

## Toolbar Features

The tally grid toolbar includes:

- Undo
- Redo
- Go to Row
- Choose Columns
- Export
- Import
- AI Import
- Save

The Export menu shows Excel, PDF, Bundle, and Advanced options.

![Round export menu](/screenshots/tally/round-export-menu.png)

![Square export menu](/screenshots/tally/square-export-menu.png)

## Row Actions

Each editable grid row includes actions for adding a row below and deleting a row. Copy Previous Length is controlled from Settings and applies when adding rows.

![Round — row actions](/screenshots/tally/round-row-actions-add-delete.png)

![Square — row actions](/screenshots/tally/square-row-actions-add-delete.png)

## Status Bar

The status bar shows row count, gross CBM/CFT, unsaved count, save progress, saved state, and readiness.

![Round status bar — unsaved](/screenshots/tally/round-statusbar-unsaved.png)

![Round status bar — saved](/screenshots/tally/round-statusbar-saved.png)

![Square status bar — unsaved](/screenshots/tally/square-statusbar-unsaved.png)

![Square status bar — saved](/screenshots/tally/square-statusbar-saved.png)

## Validation

Validation prevents incomplete or invalid tally data from being saved. Round validation covers required length/girth and configured ranges. Square validation covers required width, thickness, length, and pieces.

If pressing Enter after the last row adds an extra blank row that's never filled in, it's automatically ignored when you save — you don't need to delete it by hand.

![Round validation error](/screenshots/tally/round-validation-error.png)

![Square validation example](/screenshots/tally/square-validation-example.png)

## Mobile View

The Tally Sheet list is responsive and adapts to a narrow viewport.

![Mobile responsive view](/screenshots/tally/round-mobile-responsive.png)

## Import and AI Import

The toolbar includes Import and AI Import actions.

- **Import** supports file-based tally import with configure, upload/map, and preview steps.
- **AI Import** supports image-based extraction for handwritten tally sheets (both Round and Square) and shows AI credit usage. The credit cost is calculated dynamically from how much the photo actually needs to process, not a flat fee per image — the same formula used for Linc AI Help/Assistant.
- On Round sheets, a value the AI cannot read is kept as an empty cell — shown as a dash (—) in the preview — instead of the whole row being dropped. The row stays in its correct position and extraction starts at row 1; fill the value in the grid before saving. The preview header and the "AI data loaded" message tell you how many rows still need a value.
- **Reviewing an import.** Cells the AI wasn't confident about, and cells that look unusual for the sheet (a dropped digit, a value far from the rest), are marked amber. A review bar above the grid shows how many rows need a look, with a **Show only these** filter. Clicking a flagged or errored Length/Girth cell opens a photo helper — a pannable, zoomable view of the photo you uploaded, scrolled to that row so you can check the digits against the paper. On a computer, drag the panel by its title bar to move it and drag its bottom-right corner to resize it; on a phone it sits as a dock at the bottom of the screen. You can turn the photo helper off in **Settings → Configuration Settings → Columns → "AI Import photo helper"**. The amber marker clears when you edit the cell. Always review every row — the AI can only flag the mistakes it noticed.
- On Round sheets, the **Add to Length** setting also applies to AI Import: any length the AI reads as exactly 2 digits (10–99) is expanded by the set value, so sheets that record short lengths without the leading digit come in correctly. 1-digit and 3-digit lengths are left as read. When the sheet has 2-digit lengths, the AI Import dialog shows an inline control to set or adjust the "Add to Length" value for that import, with a live preview and an option to also save it as the sheet's default. Expanded lengths are marked in the grid; the mark clears if you edit the cell.
