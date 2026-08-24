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
