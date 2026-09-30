---
title: Session Security — User Manual
description: How LumberLinq's login protection works, and how to see and sign out the devices you are signed in on.
---

*Also searched as: logged out on another device, concurrent login, kicked out, session conflict, signed out unexpectedly, multiple devices, sign out everywhere, device management, where you are signed in, active sessions, sign out other devices, computer and phone at the same time.*

## How Many Devices Can Be Signed In

- **Paid plan:** you can be signed in on **one computer or browser and one phone or tablet app at the same time**. A second computer or browser replaces the first one; a second phone or tablet app replaces the first one. Your other kind of device is never touched. A tablet used in a browser counts as a browser; the LumberLinq app on a tablet counts as an app.
- **Free plan or free trial:** only **one device** at a time.

There is nothing to switch on: LumberLinq steps in at the moment a conflict happens, and you can always review your devices yourself (see below).

## Where You Are Signed In

Open your **Profile** page and scroll to **Where You Are Signed In**. It lists every device that is signed in to your account:

- the device and browser (or the app), the approximate location, and **Online now** (or the time it was last active),
- a **This device** marker on the one you are using,
- a **Browser** or **App** tag on a paid plan.

Press **Sign out** on any device you do not recognise or no longer use, or **Sign out all other devices**. The device you signed out finds its session gone the next time it is used and asks for the login again. A device that has not been used since this screen was added may show as "Unknown device" until it is used once.

## Logging In From a New Device While Already Logged In Elsewhere

If you log in from a new device or browser while you're still logged in on another device **of the same kind** (see above), LumberLinq shows a confirmation dialog with information about the existing session's device and approximate location. You have two choices:

- **Continue here** — signs out the other device and keeps this new login active.
- **Cancel** — abandons this new login attempt, leaving your original session untouched.

This exists to protect against someone else using your account without your knowledge — if the device/location shown isn't familiar, cancel and change your password.

The dialog describes the other session in plain words: the device and browser (or the app — on the phone app it reads like "iPhone (iOS 17.5) - LumberLinq app 5.48.89"), and the approximate location. The confirmation stays open for **10 minutes**. If you wait longer, log in again — nothing changes on your first device until you confirm.

**Even if your other device looks idle.** The confirmation also appears when your other device has been quiet for a while (for example a phone left in a drawer) but is still signed in. Choosing **Continue here** signs it out.

## Being Signed Out By a Login Elsewhere

If someone else (or you, from another device) confirms a login that displaces your current session, you'll see a plain notice explaining that you were signed out because a login happened elsewhere, with the device and approximate location that did it. This dialog can't be dismissed without acknowledging it — click through it and log in again if you still need access.

**A signed-out device stays signed out.** Once you continue on a new device, the old one cannot sign itself back in or take the session back — it has to log in again, and it will ask you to confirm.

If you were signed out from **Where You Are Signed In** on another device, you simply see the normal "session expired, please log in" screen.

## Why This Matters for Shared Devices

Don't leave yourself logged in on a shared or public computer. Always log out explicitly (avatar menu → Logout) when you're done on a device you don't control — or sign that device out later from **Where You Are Signed In** on your own device.

## How This Connects to Other Modules

This applies to every login, regardless of method (email/password, Google, Facebook, Microsoft, LinkedIn or Apple). It's unrelated to RBAC — session handling applies the same way to every role, including ADMIN and SUPER_ADMIN.
