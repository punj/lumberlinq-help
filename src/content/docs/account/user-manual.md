---
title: Account, Login & Sign Up — User Manual
description: Creating a LumberLinq account, logging in, and managing your password.
---

## How to Log In

Open **app.lumberlinq.com/login**. You'll see a flip card with Sign In on the front — enter your email and password and click **Sign In**. If Turnstile CAPTCHA is enabled, complete the challenge before proceeding. After a successful login you're redirected to the Dashboard.

![Login page](/screenshots/auth/auth-login__sign-in-card__01.png)

### Social / OAuth Login

LumberLinq supports logging in via Google, Facebook, Microsoft, and LinkedIn. Click the provider's button, authorise with them, and you're returned to LumberLinq automatically. If your email isn't registered yet, a new account is created for you.

### Forgot Password

1. On the login page, click **Forgot Password**.
2. Enter your email address and submit.
3. Check your inbox for a reset link from `no-reply@lumberlinq.com`.
4. Click the reset link (valid for a limited time) and enter a new password.

If the email doesn't arrive within a few minutes, check your spam folder.

### Stay Logged In

LumberLinq uses secure HTTP-only cookies for session management. Sessions persist across browser restarts. If you're logged out unexpectedly, your session may have expired — simply log in again.

### Logging Out

Click your avatar in the top-right header, then click **Logout**.

### Switching Between Companies

If you belong to more than one company account, the same avatar menu shows a **Switch Company** section listing each one — click a company to make it your active company for the session. This only appears if your account has 2+ active company memberships.

![Switch company menu](/screenshots/header/header__company-switcher__01.png)

## How to Create a New Account

On the login page, click **Sign Up** to flip the card to registration.

1. Enter your email address and choose a password (minimum 8 characters).
2. Enter your full name and company name.
3. Complete the Cloudflare Turnstile CAPTCHA.
4. Click **Create Account**.
5. Check your inbox for a verification email and click the link to confirm.
6. After verification, you're redirected to the Account Setup wizard.

![New user sign up form](/screenshots/auth/auth-register__sign-up-card__01.png)

### Account Setup Wizard

After verifying your email, complete the setup wizard before accessing the main application:

1. **Company details** — Company name, country, timezone, currency
2. **Product / Timber type** — optionally set up your first product
3. **Location** — optionally add your first location

You can skip optional steps and complete them later from Main Menu → Company.

### Trial Plan

All new accounts start on a Trial Plan automatically, with full feature access for a limited period. When the trial ends, access is restricted until a paid plan is activated. Upgrade any time from the Subscription page.

### Registering via Invitation

If a company administrator has invited you, use the link in your invitation email — it pre-fills your email and connects you to the correct company account. Don't use the standard sign-up form if you received an invitation link.

### Email Verification Didn't Arrive

1. Check your spam/junk folder.
2. Wait 5 minutes — delivery can be delayed.
3. On the login page, use "Resend verification email" if available.
4. Raise a Support Ticket if it still doesn't arrive.

### Changing Your Password After Registration

Go to your User Profile (avatar → Profile) → Security tab → Change Password.

## Common Login Problems

**"Invalid email or password"** — double-check the email address; passwords are case-sensitive. Use Forgot Password if needed.

**"Account not verified"** — check your inbox for the verification email sent at registration and click its link.

**"Your account has been deactivated"** — contact your company administrator; accounts are deactivated by admins from User Management.

**"AI Chat is not enabled for your account"** — AI Chat (Linc) is tied to your subscription plan. Contact your administrator or check your subscription settings.

**Turnstile CAPTCHA is not loading** — make sure JavaScript is enabled and Cloudflare isn't being blocked by a firewall or ad blocker.
