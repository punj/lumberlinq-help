---
title: Products & Loading Sites — User Manual
description: Step-by-step guide for managing the product catalog and loading sites in LumberLinq.
---

## How to Access Products and Loading Sites

**Products — Sidebar:** Main Menu → **Products** · URL: `/products`
**Loading Sites — Sidebar:** Main Menu → **Loading Sites** · URL: `/loading-sites`

| Module | Create URL | Edit URL |
|--------|------------|----------|
| Products | `/add/product` | `/edit/product/:id` |
| Loading Sites | `/add/loading-sites` | `/edit/loading-sites/:id` |

---

## Products

Use Products to maintain the timber product catalog used in tally sheets, transport units, and reports.

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

## Loading Sites

Use Loading Sites to manage yards, mills, forests, ports, warehouses, and other locations where timber is stored or loaded.

### Open Loading Sites

Open **Loading Sites** from the application menu.

The list shows loading site records and summary cards.

![Loading sites list](/screenshots/products/loading-sites-01-list-page.png)

### Search Loading Sites

Use the search box to filter by site name, contact person, country, state, city, capacity, machines installed, or notes.

![Search loading sites](/screenshots/products/loading-sites-02-search-filter-demo.png)

### Create a Loading Site

1. Click the add loading site action.
2. Enter the site name.
3. Select country, then state and city when available.
4. Add address, postal code, contact person, phone, operating hours, capacity, current volume, machines installed, site type, and notes as needed.
5. Save the loading site.

![Create loading site form](/screenshots/products/loading-sites-04-create-form.png)

### Edit a Loading Site

1. Open the Loading Sites list.
2. Search for the loading site if needed.
3. Open the site row.
4. Update the location, contact, capacity, operating, or notes fields.
5. Save changes.

![Edit loading site form](/screenshots/products/loading-sites-06-edit-form.png)

### Loading Site Validation

The loading site form requires a site name and country. Name length and uniqueness are validated before save.

![Loading site validation](/screenshots/products/loading-sites-05-validation-state.png)

### Delete a Loading Site

Use the delete action from the list or edit page. LumberLinq displays a confirmation dialog before deletion. If the site is linked to containers, measurements, or bills of lading, deletion may be blocked.

![Delete loading site](/screenshots/products/loading-sites-03-delete-confirmation.png)
