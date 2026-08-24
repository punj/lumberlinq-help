---
title: Mill Command Center — FAQ
description: Frequently asked questions about the Command Center and Machine management in LumberLinq.
---

*Also searched as: mission control, operations dashboard, machine management, machine dashboard, floor status, money today, needs attention.*

**Who can access the Command Center?**

Admin, Super Admin, and Root users only. It's a separate page from the main Dashboard, built specifically for an owner's/admin's full-business view.

**Is the Command Center the same as the Dashboard?**

No. The main Dashboard (`/dashboard-v7`) is available to any user with Dashboard access. The Command Center is a separate, Admin-only page with its own tabs (Overview, Inventory, Floor, Money, Consignments) and its own Machine management section.

**Why is a tab or section empty for me even though I'm an Admin?**

Each section still checks its own module permission (Inventory, Process, Finance, Consignments). Being an Admin gets you onto the page, but an individual section can still be hidden if that specific permission isn't granted to your account.

**Do the Money Today figures change if I pick a different date range?**

No. Financial Health and Reconciliation figures on the Command Center (and on the main Dashboard) are always calculated across all-time data, not filtered by any date range control.

**How do I add a machine?**

Go to **Main Menu → Inventory → Machines**, click **Add Machine**, and fill in the name and Loading Site. If you already track machines as Loading Sites, use **Import from Locations** instead of re-entering them.

**Does deactivating a machine delete its history?**

No. Deactivating a machine removes it from future assignment but keeps all of its past processing runs intact.

**Does the Command Center update automatically?**

Yes — it refreshes live within a couple of seconds of a relevant change (a tally saved, a payment recorded, a processing run finished), the same as the main Dashboard.
