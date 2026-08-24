---
title: Reports — FAQ
description: Frequently asked questions about LumberLinq's reports.
---

**"Which report should I use for a specific buyer or supplier?"** — use the Business Partner Report. Search for the partner by name, pick a date range, and it shows their shipment totals, payment breakdown, products, and loading sites, split by whether they were the seller or the buyer.

**"Which report should I use for consignment performance?"** — use the Consignment Report. It covers totals, CBM, pieces, trade type, parties, ports, BL number, and payment status, with an Overview, Transactions, and Financial tab.

**"Which report should I use for receivables and payables?"** — use the Financial Report. It has actual received, actual paid, receivable, payable, and overdue figures, plus By Currency, Partners, Trend, and Transactions tabs.

**"Which report should I use for stock and mill processing?"** — use the Inventory Report (available stock, movements, adjustments, processing runs) and the Operators Report (which mill operator ran which jobs, and how efficiently). Both only appear if the Inventory module is turned on for your account.

**"Why can't I see the Reconciliation Report or the Users Report?"** — both are plan-gated. The app shows "Available on Tree and above." If your current plan doesn't include them, you'll see an upgrade screen instead of the report. Check **Company > Subscription** to see your plan and upgrade options.

**"Why is the Inventory Report (or Operators Report) missing from my Reports menu?"** — these two only show up when the Inventory module is enabled for your account. That's a separate module switch from the plan-gating on Reconciliation/Users — it depends on your plan tier and any add-ons, not a permission that can be granted directly. If you believe your account should have Inventory, check with your account admin or LumberLinq support.

**"Why don't I see any Export buttons?"** — export buttons only show if you have the Report Export permission. Ask your account admin to grant it if you need to export.

**"Why is there no PDF button on some reports?"** — Reconciliation and Operators only support Excel export, there's no PDF option for either. Users and App Usage (Analytics) have no export option at all.

**"Can I export reports?"** — yes, on every report except Users and App Usage (Analytics). Most support both Excel and PDF; Reconciliation and Operators are Excel-only.

**"Why is a report empty after I click Generate?"** — check your date range and any other filters (trade type, status, currency, or the partner search box on the Business Partner Report), then click Generate again. An empty result usually just means no records match your current filters.

**"What's the difference between a report's own PDF export and the 'Full Report' PDF button?"** — the Reports module's PDF export (on the Consignment Report, for example) covers many records at once, filtered by your date range. The Full Report button on a single consignment's edit screen, or the PDF icon on a single Stock Unit, generates a one-record PDF for just that item, no filters, no report screen involved.

**"What's the 'Charts & Stats' option in the Export dialog?"** — that's a separate feature from the Reports module. When you export a Consignment or Tally Sheet to Excel from its own Export dialog (not from the Reports menu) and turn on Charts & Stats, LumberLinq adds Net CBM / Net CFT bar charts and a size-distribution table into the workbook. It only appears when there's more than one Stock Unit in the export.

**"Why does a total show a dash (—) instead of a number?"** — this happens on multi-currency reports (Business Partner, Consignment, Financial) when at least one transaction is in a different currency and no exchange rate is available for it. Rather than show a blended total that mixes currencies incorrectly, LumberLinq withholds the number until a rate is available.
