---
title: Tally Sheets — User Manual
description: Step-by-step guide for creating and managing Round and Square tally sheets in LumberLinq.
---

## Tally Sheet List

Open **Tallysheet > List Tallysheet** to view transport units and tally sheets. The list supports search, table columns, KPI cards, and row actions.

![Round tally list](/screenshots/tally/round-list-page.png)

![Round search filter](/screenshots/tally/round-search-filter.png)

![Square tally list](/screenshots/tally/square-list-page.png)

![Square search filter](/screenshots/tally/square-search-filter.png)

## Create and Edit

Use **New Tallysheet** to create a transport unit and tally sheet. Required fields include Transport ID, Product, and Transport Mode. Product type determines whether the measurement grid opens as Round or Square.

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

![Round validation error](/screenshots/tally/round-validation-error.png)

![Square validation example](/screenshots/tally/square-validation-example.png)

## Mobile View

The Tally Sheet list is responsive and adapts to a narrow viewport.

![Mobile responsive view](/screenshots/tally/round-mobile-responsive.png)

## Import and AI Import

The toolbar includes Import and AI Import actions.

- **Import** supports file-based tally import with configure, upload/map, and preview steps.
- **AI Import** supports image-based extraction for handwritten tally sheets and shows AI credit usage.
