---
title: Dashboard, Utility, Storage & Support — FAQ
description: Frequently asked questions about the Dashboard, calculation utilities, storage, and support tickets in LumberLinq.
---

**A dashboard section is missing for me — is that a bug?**

No — several sections need a specific permission (Financial Health needs finance access, Inventory Snapshot needs inventory access, Mill Tasks needs process access, Recent Activity needs a user-management permission). If you don't have that permission, the section simply doesn't show.

**Why don't Financial Health/Reconciliation change when I pick a different date range?**

They're intentionally all-time figures, independent of any date filter on the dashboard — only the charts (volume, top products, trade type) respond to the date range.

**I don't see a search icon in the header — where's Quick Search?**

Quick Search needs its own permission (`QUICK_SEARCH_ACCESS`), separate from other module access. By default only Admins have it — ask your Admin to grant it to your role via Manage Roles if you need it.

**What's the difference between Global Search and Quick Search?**

Global Search (Ctrl+K) finds a specific record — a Stock Unit, Consignment, Business Partner, Product, Location, or User — by name or reference number. Quick Search (/) is different: it's for finding available inventory by physical dimensions (size, species, origin, quality), like "4in x 3in x 8ft teak". Use Global Search when you know what record you're looking for; use Quick Search when you're asking "do we have any stock like this?"

**I don't see the Global Search icon in the header — why?**

Global Search needs its own permission (`GLOBAL_SEARCH_ACCESS`), separate from Quick Search and from other module access. By default only Admins have it — ask your Admin to grant it to your role via Manage Roles if you need it.

**Why is "Ask AI" greyed out or missing inside Quick Search?**

Ask AI requires the Forest subscription plan. On lower plans, the regular (non-AI) Quick Search still works normally, with no credit cost.

**Does Ask AI cost anything if I don't like the answer?**

Yes — like AI Import for tally sheets, AI credits are consumed once the request is processed, regardless of whether the results are useful.

**What happens when I run low on AI credits?**

You'll see a warning at 80%, 90%, 95%, and 100% of your plan's AI credit limit used. Once credits run out, Ask AI stops working until the next billing cycle or a plan upgrade — the regular Quick Search keeps working with no credit cost.

**How do I see the Product Tour again after dismissing it?**

Click the **?** help icon in the header, or open your profile menu (top right) and click **Product Tour** — either one restarts the guided walkthrough from the beginning.

**Why do my Cost Estimate results look wrong?**

Almost always a unit mismatch — check every unit field carefully, especially when different rows use different units.

**What happens when my storage quota is full?**

New file uploads will fail until you upgrade your plan or delete files you no longer need.

**A file upload keeps failing even though I have free space — what should I try?**

Use the Refresh button on the Storage page and try again. If the file is very large, it may simply be timing out — try compressing or splitting it.

**What should I include in a support ticket for a faster response?**

The exact module and action, the Stock Unit ID / Consignment BL number / tally reference involved, the product or business partner name, a screenshot, and your Company ID (found in Company Profile → Identity tab).

**Who can see my support tickets?**

All admins on your account, plus the user who created the ticket.

**Where do I find my Company ID to include in a ticket?**

Company Profile → Identity tab.
