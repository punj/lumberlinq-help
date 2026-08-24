---
title: Session Security — User Manual
description: How LumberLinq's single-session login protection works.
---

*Also searched as: logged out on another device, concurrent login, kicked out, session conflict, signed out unexpectedly, multiple devices, sign out everywhere, device management.*

## One Active Session at a Time

LumberLinq allows only one active login session per user at a time. There's no separate settings page to browse or manage your sessions — instead, the system steps in automatically at the moment a conflict happens.

## Logging In From a New Device While Already Logged In Elsewhere

If you log in from a new device or browser while you're still logged in somewhere else, LumberLinq shows a confirmation dialog with information about the existing session's device and approximate location. You have two choices:

- **Continue here** — signs out the other device and keeps this new login active.
- **Cancel** — abandons this new login attempt, leaving your original session untouched.

This exists to protect against someone else using your account without your knowledge — if the device/location shown isn't familiar, cancel and change your password.

## Being Signed Out By a Login Elsewhere

If someone else (or you, from another device) confirms a login that displaces your current session, you'll see a plain notice explaining that you were signed out because a login happened elsewhere. This dialog can't be dismissed without acknowledging it — click through it and log in again if you still need access.

## Why This Matters for Shared Devices

Because only one session is allowed at a time, don't leave yourself logged in on a shared or public computer — the next person to log in from anywhere (including your own phone) will trigger the conflict dialog, and choosing "Continue here" from their side will sign out the shared device. Always log out explicitly (avatar menu → Logout) when you're done on a device you don't control.

## How This Connects to Other Modules

This applies to every login, regardless of method (email/password or social login). It's unrelated to RBAC — session conflict handling applies the same way to every role, including ADMIN and SUPER_ADMIN.
