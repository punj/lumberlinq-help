---
title: Inviting Team Members — User Manual
description: Adding new users to your company account in LumberLinq.
---

## How to Invite a New User

Only Admins and Super Admins can invite users.

1. Go to **Main Menu → User → Manage User**.
2. Click **Invite User**.
3. Enter the new user's email address.
4. Select a role: USER, ADMIN, or SUPER_ADMIN.
5. Optionally configure which permissions the user should have (if RBAC is enabled).
6. Click **Send Invitation**.

The invited person receives an email with a registration link, valid for a limited time.

![Invite User dialog](/screenshots/reports/users-03-invite-user-dialog.png)

![Role template dropdown](/screenshots/reports/users-05-role-template-dropdown.png)

## What the Invited User Receives

An email from `no-reply@lumberlinq.com` with a subject like "You've been invited to LumberLinq". It contains a personalised greeting naming the company and a link that pre-registers their email and connects them to your company account.

## Completing the Invitation (Invited User's Steps)

1. Click the link in the invitation email.
2. Set a password (email is pre-filled).
3. Complete the setup — no separate account setup wizard is required; you're added directly to the existing company account.
4. Log in at `app.lumberlinq.com/login`.

## User Roles Explained

| Role | What they can do |
|------|-----------------|
| USER | Access features their permissions allow; cannot manage other users |
| ADMIN | Full access to company data; can invite and manage users with USER role; can access Manage User |
| SUPER_ADMIN | Same as ADMIN but can also create additional ADMIN users |

If RBAC is enabled, USER-role members also need specific permissions (e.g. Tally access, Consignment access) to access each module. These are configured when inviting.

## Managing Existing Users

From **User → Manage User**:
- **Deactivate** a user to block their login without deleting their data
- **Edit** to change role or permissions
- **Delete** to permanently remove a user (use caution — this removes their access permanently)

![Invite validation error](/screenshots/reports/users-04-invite-validation-error.png)

## Blocked Users

If a user is blocked (e.g. for off-topic AI Chat abuse), an Admin can unblock them from User Management.

## Common Problems

**"Invitation link expired"** — ask the admin to send a new invitation. Links expire after a set period.

**"Email not received"** — check spam folder, confirm the admin entered the correct email address, and have the admin resend from Manage User.

**"I received an invite but already have a LumberLinq account"** — click the invite link anyway; it connects your existing account to the new company.
