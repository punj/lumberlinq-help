---
title: User Management — User Manual
description: Managing team members, roles, and permissions in LumberLinq.
---

Open **Main Menu → User → Manage User** to view all users in your company account, their roles, and their status. This page is only available to ADMIN and SUPER_ADMIN roles.

![Manage User list](/screenshots/reports/users-01-manage-user-list.png)

## Roles in LumberLinq

| Role | Description |
|------|-------------|
| USER | Standard team member. Can access modules their permissions allow. Cannot manage other users. |
| ADMIN | Full data access. Can invite/manage USER-role members. Can configure RBAC permissions. |
| SUPER_ADMIN | All ADMIN capabilities plus can create ADMIN-role users. |

There is also a platform-level ROOT role used only by LumberLinq support staff — not available to company users.

## Role-Based Access Control (RBAC) Permissions

For USER-role members, access to each module is controlled by individual permissions, grouped into 12 modules in the Access Rights panel: Dashboard, Tally Sheet, Consignments (Shipments), Business Partner, Products, Loading Sites, Reports, Storage, Inventory, Process, Support, Users & Company.

Instead of configuring these one user at a time, an admin can also create a reusable **Access Role** (e.g. "Accountant") with a fixed set of permissions and assign it to any number of users — see the RBAC & Access Roles guide.

ADMIN and SUPER_ADMIN bypass RBAC — they have access to everything regardless of permission settings.

![Access rights permission groups](/screenshots/reports/users-08-access-rights-permission-groups.png)

## Inviting a New User

See the Inviting Team Members guide for the full invitation flow.

Summary: **Manage User → Invite User** → enter one or more emails, choose Admin/an Access Role/Custom Access → Send Invite. The user receives an email with a registration link (expires in 24 hours).

![Invite User dialog](/screenshots/users/invite-user__dialog__01.png)

![Pending invitations](/screenshots/reports/users-02-pending-invitations.png)

## Editing a User's Role or Permissions

1. Go to **Manage User**.
2. Click the edit icon next to the user.
3. Change the role or toggle permissions.
4. Save. Changes take effect on the user's next page load (their existing session is not immediately invalidated).

![Access rights panel](/screenshots/reports/users-06-access-rights-panel.png)

![Role template dropdown](/screenshots/reports/users-07-access-rights-role-template-dropdown.png)

## Deactivating a User

Deactivating blocks the user from logging in without deleting their data:
1. Manage User → find the user → click Deactivate.
2. The user sees "Account deactivated" on next login attempt.
3. To reactivate, find the user in Manage User and click Activate.

Use deactivation when a team member leaves — deactivate rather than delete to preserve their historical tally and consignment records.

## Deleting a User

Deletion permanently removes login access. Historical records (tallies, consignments) created by that user are preserved but the user account is gone. This action cannot be undone — use deactivation instead unless permanent removal is required.

## Menu Visibility

The sidebar menu each user sees is based on their role and permissions. If a user says they cannot see a menu item:
1. Check their permissions in Manage User (does the relevant permission exist?).
2. Check their role (USER-role members need explicit permissions; ADMIN sees everything).
3. If permissions look correct, ask the user to log out and back in to refresh their menu.

## Mobile View

Manage User is responsive — tables and controls remain available with scrollable layouts on smaller screens.

![Mobile Manage User](/screenshots/reports/users-09-mobile-manage-user.png)
