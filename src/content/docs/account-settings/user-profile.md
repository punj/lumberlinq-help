---
title: User Profile
description: Update your personal details, timezone, mobile number, and password from the Account Details page.
---

Your User Profile stores settings for your individual account. It is separate from Company Profile — Company Profile describes the business; User Profile describes you as the logged-in person. Open at `/edit/account-details`.

## Account Details — Email and Mobile

![Account details page](/screenshots/account/profile-01-account-details.png)

- **Email** — your login address. For email/password accounts this is read-only after registration. For social login accounts (Google, Microsoft, LinkedIn, Facebook) the email comes from the social provider and cannot be changed here.
- **Mobile number** — enter your country code and mobile number. Some workflows trigger OTP verification when the number is changed — complete the verification prompt if it appears.

## Personal Details

Fill in your name, date of birth, gender, and address. Keep your first and last name accurate — they appear in created-by fields on records you create (tally sheets, shipments, etc.) and in the Users Report.

## Timezone

![Timezone section](/screenshots/account/profile-02-timezone-section.png)

The Timezone setting controls how all timestamps display for your account:

- Shipment ETD and ETA dates
- Inventory movement timestamps
- Dashboard date ranges ("today", "this week")
- Support ticket reply times

To change your timezone: select it from the dropdown (e.g., Asia/Kolkata, Europe/London, America/New_York) and click **Save Timezone**.

**Timestamps look wrong (e.g., activities showing at 3 AM when they happened at noon)?** A wrong timezone setting is almost always the cause. Update it here.

## Change Password

![Change password dialog](/screenshots/account/profile-03-change-password-dialog.png)

Click **Change Password** to update your login credentials:

1. Enter your current (old) password
2. Enter a new password that meets the validation requirements shown
3. Confirm the new password — it must match exactly
4. Click **Change Password**

**Validation errors to watch for:**
- Old password incorrect — passwords are case-sensitive
- New password too short or missing required character types — read the validation message carefully
- Confirm password does not match — retype both new password fields

**Social login users:** If you signed in via Google, Microsoft, Facebook, or LinkedIn, your password is managed by that provider. The Change Password option may not appear or may not apply — change your password through your social provider's account settings instead.

## Why Profile Changes Don't Save

- Check for validation errors on any field (highlighted in red)
- Ensure required fields are not empty
- For mobile number changes, complete the OTP verification if prompted
- If the Save button is greyed out, confirm you have actually changed a field value
