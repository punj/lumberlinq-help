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
- **AI Import** reads handwritten tally sheets from photos or a PDF and fills the grid. It is currently available on Round sheets. The credit cost is calculated dynamically from how much each photo or PDF page actually needs to process, not a flat fee — the same formula used for Linc AI Help/Assistant; a PDF is charged per page.

### The AI Import dialog

It has two steps: **Upload** and **Review**.

**Upload step:**

- **"How these rows import"** — a settings card at the top of the dialog with the sheet's Length unit, Girth unit, Decimals, Length/Girth allowances and the Add to Length rule, all editable here. These are the settings that lock once the sheet has more than 10 rows, so set them before a big import — whatever you change is written back to the sheet's Settings. On a sheet that is already locked, the card is read-only and shows "Already set — locked".
- **Add to Length** — turn on if your sheet drops the leading digit (writes 45 for 245). Any length the AI reads as exactly 2 digits (10–99) is then expanded by the set value; 1- and 3-digit lengths are left as read. Expanded lengths are marked in the grid, and the mark clears if you edit the cell.
- **Files** — click or drop photos and/or a PDF. Each file shows as a row you can drag to reorder or remove. A PDF counts as one file; its pages are split automatically (up to 12 pages per import). Rows import in the order the files are listed.
- "See an example the AI can read" opens a sample of a readable sheet.

**Review step:**

- A value the AI cannot read is kept as an empty cell — a dash (—) in the preview — instead of the whole row being dropped. The row stays in position; fill the value in the grid before saving. Numbering is continuous across every page.
- Cells the AI wasn't confident about, and cells that look unusual for the sheet (a dropped digit, a value far from the rest), are marked amber.
- When an import spans more than one page (several photos, or a PDF), a **Pages list** on the left of the preview shows each page with its row range and flag count. Click a page to jump to its rows.
- After import, a review bar above the grid shows how many rows still need attention, with a **Show only these** filter. Clicking a flagged or errored Length/Girth cell opens a **photo helper** — a pannable, zoomable view of the exact page that row came from, scrolled to it. On a computer, drag the panel by its title bar to move it and drag its bottom-right corner to resize it; on a phone it sits as a dock at the bottom of the screen. Turn it off in **Settings → Configuration Settings → Columns → "AI Import photo helper"**.
- The amber marker clears when you edit the cell. Always review every row — the AI can only flag the mistakes it noticed; a plausible-but-wrong digit still needs a human check against the photo.

Credits are only deducted after a successful read, and the dialog shows the exact number used. AI Import requires the feature to be enabled on your subscription plan.

## Section labels (Round sheets)

You can split a Round sheet into named sections. This works on any sheet — one you typed by hand or one filled by AI Import.

- **Add a label:** in edit view, hover a row and click the green bookmark button in the row actions. Type a name (for example "Bundle B") and Save. That row gets a coloured divider, and a **Sections bar** appears above the grid with one chip per section showing its SR range. Click a chip to jump to that section.
- **AI Import pages** show up here automatically as sections named "Page 1", "Page 2", and so on. Click the pencil on a divider to rename one to whatever you want.
- **Remove a label:** open the editor on a labelled row and click Remove.
- Labels are saved with the sheet and stay after you reload.
- Switch how the divider looks — a **Divider label** (default) or an **SR pill** — under **Settings → Configuration Settings → Columns → "Section marker style"**.
- Section labels and the Sections bar are **edit view only**. They never appear on a share link.
