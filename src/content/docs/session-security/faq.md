---
title: Session Security — FAQ
description: Frequently asked questions about LumberLinq's single-session login protection.
---

*Also searched as: logged out on another device, concurrent login, kicked out, session conflict, signed out unexpectedly, sign out everywhere, device management.*

**I got signed out with no warning — why?**

Someone (possibly you, on another device) logged in and confirmed "Continue here" during the conflict dialog, which automatically signs out the other session once confirmed.

**I see a device or location I don't recognise in the login conflict dialog — what should I do?**

Don't confirm it. Cancel the new login attempt and change your password from Account Details — this can indicate someone else has your credentials.

**Can I stay logged in on two devices at once?**

No. LumberLinq allows only one active session per user at a time, regardless of login method.

**Is this different for admins?**

No — session conflict handling applies the same way to every role, including ADMIN and SUPER_ADMIN.

**How do I make sure I'm logged out on a shared computer?**

Always log out explicitly via the avatar menu → Logout, rather than just closing the browser tab.
