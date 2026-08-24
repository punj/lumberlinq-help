---
title: RBAC & Access Roles — FAQ
description: Frequently asked questions about Role-Based Access Control in LumberLinq.
---

*Also searched as: permissions, roles, access control, who can do what, manage roles, restrict access, custom access, access role, detach and customize.*

**What is RBAC?**

Role-Based Access Control. It lets administrators control which modules and actions each user can access, beyond their broad USER/ADMIN role tier.

**A user says they can't see the Consignments (Shipments) menu — what do I check?**

With RBAC on, open their Access Rights (or check their assigned Role) and confirm the Consignments module is enabled, then save.

**Can I mix a Role with individual overrides?**

Yes. A user's effective access comes from whichever Role they're assigned plus any individual permissions configured directly for them — the Roles tab is for the shared baseline, the User Permissions tab is for one-off adjustments.

**I want the same access for 10 new hires — do I have to configure each one?**

No. Create one Access Role with the right permissions, then assign it to each user instead of configuring 10 users individually.

**Can permissions be changed after inviting a user?**

Yes, any time — open their Access Rights panel and adjust permissions.

**What happens if RBAC is disabled?**

Users get broader role-based access immediately. Saved permission settings and Access Roles are preserved in the database, not deleted, so re-enabling RBAC restores everything exactly as it was.

**Do ADMIN and SUPER_ADMIN need permissions configured?**

No — they always bypass RBAC and see everything, regardless of whether RBAC is on or off.
