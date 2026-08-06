---
title: RBAC & Access Roles — User Manual
description: Configuring Role-Based Access Control and reusable Access Roles in LumberLinq.
---

## What is RBAC?

RBAC (Role-Based Access Control) is LumberLinq's system for controlling which parts of the application each team member can access. Without RBAC, every USER-role account has broad access based only on their role tier. With RBAC enabled, an administrator can restrict a specific user so they can, for example, only access their tally sheets and nothing else, or view Reports without being able to edit any records. ADMIN and SUPER_ADMIN accounts always bypass RBAC and see everything, regardless of its on/off state.

## How to Access RBAC Settings

Open **Main Menu → Company → Access Control**. Requires Administrator role.

![RBAC settings overview](/screenshots/reports/rbac-01-settings-overview.png)

## The RBAC Settings Page

The page opens with a master **on/off toggle** showing current status. When RBAC is off, a short explainer and an Enable button are shown. When RBAC is on, two tabs appear: **User Permissions** and **Roles**.

## User Permissions Tab

Lists every team member with a stats strip (total users, how many are configured, how many have no access yet, average permission coverage). Click **Configure** on a user's row to open their Access Rights panel and toggle individual permissions.

![Configure user sidebar](/screenshots/reports/rbac-02-configure-user-sidebar.png)

## The Access Rights Panel — Permission Modules

Permissions are grouped into 12 modules, each expandable with Enable All / Disable All and per-permission toggles: Dashboard, Tally Sheet, Consignments, Business Partner, Products, Loading Sites, Reports, Storage, Inventory, Process, Support, Users & Company. Save applies immediately on the user's next page load — they don't need to log out.

## Roles Tab — Creating a Reusable Access Role

Instead of configuring permissions one user at a time, create a named **Access Role** once — e.g. "Accountant" or "Yard Supervisor" — with a chosen set of permissions, then assign it to any number of users. Click **New Role**, give it a name, tick the permissions it should include, and save. Editing a role updates every user currently assigned to it immediately. A role can't be deleted while users are still assigned to it — reassign or clear those users first.

![Roles tab](/screenshots/rbac/rbac__roles-tab__01.png)

## Disabling RBAC

Disabling RBAC immediately gives all users broad access based on their role tier. Previously configured permissions and Access Roles are preserved in the database, not deleted — re-enabling RBAC restores everything exactly as it was.

![Disable confirmation dialog](/screenshots/reports/rbac-03-disable-confirmation-dialog.png)

## How RBAC Connects to Other Modules

RBAC governs which sidebar menu items and module actions each user can see across the entire app — a user without the Consignments module enabled won't see the Consignments menu item at all, regardless of any other setting. See the User Management guide for inviting users and setting their initial role.
