---
title: Products & Locations — User Manual
description: Step-by-step guide for managing the product catalog and locations in LumberLinq.
---

*Also searched as: species catalog, SKU, loading site, loading sites, add product, species list, grade, timber species.*

## Products

Use Products to maintain the timber product catalog used in tally sheets, Stock Units, and reports.

### Open the Product Catalog

Open **Products** from the application menu.

The list shows existing product records and product summary cards.

**Summary tiles.** Above the list, tiles show how many products you have, how many use the Round tally, how many use the Square tally, and how many different species they cover. They count the whole catalog, not only the page on screen, and only products that are active.

**Show inactive.** Products you have deactivated are hidden from the list by default (they are kept in your history and in old records). Tick **Show inactive** under the chips to see them again; each one shows an **Inactive** tag and an **Activate** action. Untick it to hide them. The switch works together with the chips and the search box.

**Quick filter chips.** Tap **All**, **Round**, or **Square** to show only that kind. The chip also narrows what you find with the search box.

**On a phone** each row also shows the product description as one grey line under the formula, species, and code.

![Product list](/screenshots/products/products-01-list-page.png)

### Search Products

Use the search box on the Products list to find products by name, product code, species, HS code, or description.

![Search products](/screenshots/products/products-02-search-filter-demo.png)

### Create a Product

1. Click the add product action from the Products list.
2. Enter a product name.
3. Select the formula:
   - **Round Log** — uses Hoppus-style measurements for round logs.
   - **Square / Sawn** — uses rectangular volume measurement for sawn timber.
4. Enter the HS code.
5. Optionally enter species, product code, and description.
6. Save the product.

At the top of the form a **Required fields** bar shows how many of the required fields are filled (for example 2 / 4); it turns green with a tick when all are done. Each field's name sits inside the box and moves up to the top edge when you click or type, so it is never hidden behind what you typed.

![Create product form](/screenshots/products/products-04-create-form.png)

### Edit a Product

1. Open the Products list.
2. Search for the product if needed.
3. Open the product row.
4. Update the product fields.
5. Save changes.

![Edit product form](/screenshots/products/products-06-edit-form.png)

### Product Validation

The product form requires a product name, formula, and HS code. The HS code must be numeric and within the configured length limits.

![Product validation](/screenshots/products/products-05-validation-state.png)

### Delete a Product

From the product list or edit page, use the delete action. LumberLinq displays a confirmation dialog before deletion. If the product is already used in operational records, deletion can be blocked to protect linked data.

![Delete confirmation](/screenshots/products/products-03-delete-confirmation.png)

---

## Locations

Use Locations to manage yards, mills, forests, ports, warehouses, and other places where timber is stored or loaded.

### Open Locations

Open **Locations** from the application menu.

The list shows location records and summary cards.

**Summary tiles.** Above the list, tiles show how many locations you have and how many of each kind (Yard, Mill, Forest, Port, Warehouse). Only kinds you actually have are shown. They count active locations only.

**Show inactive.** Locations you have deactivated are hidden from the list by default (they are kept in your history). Tick **Show inactive** under the chips to see them again; each one shows an **Inactive** tag and an **Activate** action. Untick it to hide them. The switch works together with the chips and the search box.

**Quick filter chips.** Tap **All** or a kind of site to see only those. The chips appear when you have two or more kinds. The chip also narrows the search box results, and the refresh button clears it.

**More on each row.** Under the name you see the contact person and phone (tap-to-call on a phone), and small chips for the site type, operating hours, capacity, current volume, and machines installed. The country is written as a name, for example "India". If you filled in **Capacity (CBM)**, a thin bar shows how much stock is at the site now against that capacity (for example 420 / 1000 CBM); it turns orange to red above 85%. The stock is the net CBM of the Stock Units at that site that are available or in process; units already shipped no longer count, so the bar goes down as stock leaves.

![Locations list](/screenshots/products/loading-sites-01-list-page.png)

### Search Locations

Use the search box to filter by location name, contact person, country, state, city, capacity, machines installed, or notes.

![Search locations](/screenshots/products/loading-sites-02-search-filter-demo.png)

### Create a Location

1. Click the add location action.
2. Enter the location name.
3. Select country, then state and city when available.
4. Add address, postal code, contact person, phone, operating hours, capacity, current volume, machines installed, site type, and notes as needed.
5. Save the location.

The Location form has three tabs, like the Business Partner form: **Details** (name, contact person, phone, site type), **Address** (country, state, city, address lines, postal code), and **Operations** (operating hours, capacity in CBM, current volume, machines installed, notes). If a required field is missing when you press Save, the form jumps to the tab that has the problem and shows a red "!" on it.

At the top of the form a **Required fields** bar shows how many of the required fields are filled (for example 2 / 4); it turns green with a tick when all are done. Each field's name sits inside the box and moves up to the top edge when you click or type, so it is never hidden behind what you typed.

![Create location form](/screenshots/products/loading-sites-04-create-form.png)

### Edit a Location

1. Open the Locations list.
2. Search for the location if needed.
3. Open the location row.
4. Update the address, contact, capacity, operating, or notes fields.
5. Save changes.

![Edit location form](/screenshots/products/loading-sites-06-edit-form.png)

### Location Validation

The location form requires a name and country. Name length and uniqueness are validated before save.

![Location validation](/screenshots/products/loading-sites-05-validation-state.png)

### Delete a Location

Use the delete action from the list or edit page. LumberLinq displays a confirmation dialog before deletion. If the location is linked to Stock Units, tally sheets, or other operational records, deletion may be blocked.

![Delete location](/screenshots/products/loading-sites-03-delete-confirmation.png)
