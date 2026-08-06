---
title: Company Settings — User Manual
description: Managing your company profile, branding, and account-wide inventory toggles in LumberLinq.
---

## How to Access Company Settings

Open **Main Menu → Company → Company Profile**. Requires Administrator role to edit.

Company Settings has three tabs: **Identity**, **Location**, and **Profile**.

![Identity tab — Company ID](/screenshots/reports/company-01-details-identity-company-id.png)

### Identity Tab

Contains the legal and business information for your company:
- **Company ID** — a unique identifier for your account; this is the reference to give LumberLinq support when reporting an issue
- **Company Name** — the trading or legal name of your business
- **Tax ID / GST / VAT**
- **Phone numbers** — primary and secondary, include country code
- **Email** and **Website**
- **Legal Entity Type** — Private Limited, LLP, Partnership, Sole Proprietor, Foreign Entity, etc.
- **Individual / Company** classification

Keep Identity details accurate — they appear on exported PDF documents and in account communications.

### Location Tab

Stores the registered address of your company: Country (required), State/Province, City, Address Line 1 and 2, Postal Code. Select Country first — State and City dropdowns load based on it.

![Location tab](/screenshots/reports/company-02-details-location-tab.png)

### Profile Tab

Stores supplementary business information: Industry Type, Company Size, Role in Company, and (where applicable) a Logo URL.

![Profile tab](/screenshots/reports/company-03-details-profile-tab.png)

## Two Company-Wide Inventory Toggles

Two settings on the Company page control inventory-wide behaviour and don't belong to any single Inventory screen:

- **Allow Stock Oversell** — when enabled, lets a consignment be assigned more volume than is currently available in inventory (useful for pre-selling against expected incoming stock). Leave this off unless your workflow specifically needs it — it removes a safety check.
- **Include Reservations in Available Stock** — controls whether tentatively reserved stock (not yet formally assigned) still counts as "available" in the Inventory Overview totals.

Both are saved independently of the main company form — toggling either takes effect immediately, no separate Save button needed.

## Company Branding

Open **Main Menu → Company → Branding**. Upload your company logo here (PNG or SVG recommended) — it appears on PDF exports and the branding shown on share links.

![Branding — logo upload](/screenshots/reports/company-04-branding-logo.png)

After saving, regenerate any existing share links for the new branding to appear on them; already-downloaded PDFs are not affected.
