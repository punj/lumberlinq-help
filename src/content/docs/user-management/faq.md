---
title: User Management — FAQ
description: Frequently asked questions about managing users, roles, and permissions in LumberLinq.
---

**How do I invite a user?**

Open Main Menu → User → Manage User, click Invite User, enter one or more email addresses, choose a role template if RBAC is enabled, and send the invite.

**Can I invite multiple users at once?**

Yes. Separate email addresses with commas, spaces, or new lines.

**What happens if an email is invalid?**

LumberLinq shows a validation message before the invite is sent.

**Where can I see pending invitations?**

Pending invitations appear below the user table on the Manage User page.

**A user can't see a menu item they should have access to — what do I check?**

Check their permissions in Manage User, check their role (USER-role members need explicit permissions; ADMIN sees everything), and if permissions look correct, ask them to log out and back in to refresh their menu.

**A user I deactivated is still logged in — is that expected?**

Briefly, yes. Deactivation takes effect on their next request; they'll be logged out within minutes as their session token is re-validated.

**Can I give a user read-only access to Reports and nothing else?**

Yes. Set their role to USER and enable only the Reports permission — don't enable anything else.

**What's the difference between deactivating and deleting a user?**

Deactivating blocks login without touching their data — reversible any time. Deleting permanently removes login access; their historical tallies and consignments stay, but the action cannot be undone. Use deactivation unless you specifically need permanent removal.
