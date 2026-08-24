---
title: Subscriptions & Billing — User Manual
description: Managing your LumberLinq plan, payments, and limits.
---

*Also searched as: billing, upgrade plan, invoice, payment method, grove plan, cancel subscription, downgrade, free trial, promo code, coupon code, add-on.*

## Accessing Subscription Settings

Open **Main Menu → Company → Subscription**. This page shows your current plan name and status, billing period, limits (tallies, shipments, users, storage, AI Chat messages), payment history, and options to upgrade, downgrade, or cancel.

![Current subscription](/screenshots/reports/subscription-component-01-current-subscription.png)

## Trial Plan

All new accounts start on a Trial Plan with full feature access, for a limited number of days. Only one trial is ever allowed per company — you can't restart a trial by picking a different package.

**A trial has no grace period.** It ends exactly on its end date — this is different from a paid plan lapsing (see below, which does get a short grace window).

## What Happens After a Plan Lapses? (trial ends, or a paid renewal fails)

Nothing is deleted and nothing is hidden. Your existing tally sheets, consignments, business partners, and every other record you already created stay fully visible and editable, exactly as before.

What actually happens is a **downgrade**: your account moves onto a lower, limited plan. You can keep using and editing everything you already have — you just can't *create new* records past that lower plan's limits (new tallies, new consignments, new users, etc.) until you subscribe again.

- A **lapsed paid plan** gets a short grace window first (a few days) before the downgrade happens, so a late renewal has a chance to catch up automatically.
- A **lapsed trial** has no grace window — the downgrade happens right at the trial's end date.

To keep full access, renew or upgrade before this happens.

## Upgrading or Renewing Your Plan

1. Go to **Subscription** from the sidebar.
2. Click **Upgrade** or **Change Plan**.
3. Browse available plans and select the one that fits your needs.
4. Choose billing frequency — monthly or annual. **Annual is usually the better deal** — check the current pricing page for the real numbers, since these change over time.
5. Click **Subscribe / Pay**.
6. Complete payment via the payment gateway.
7. After successful payment, your plan upgrades immediately and limits are updated.

Renewing after a lapse (trial ended, or a paid plan downgraded) uses this exact same flow — there's no separate "reactivation" screen.

![Package selection](/screenshots/reports/subscription-component-03-purchase-package-selection.png)

![Package selected](/screenshots/reports/subscription-component-04-package-card-selected.png)

![Currency dropdown](/screenshots/reports/subscription-component-05-currency-dropdown.png)

![Yearly tenure selected](/screenshots/reports/subscription-component-06-yearly-tenure-selected.png)

## Checkout and Payment

![Order summary](/screenshots/reports/subscription-component-08-payment-billing-order-summary.png)

![Terms dialog](/screenshots/reports/subscription-component-09-payment-terms-dialog.png)

![Ready to proceed](/screenshots/reports/subscription-component-10-payment-ready-to-proceed.png)

![Checkout review ready](/screenshots/reports/payment-status-01-checkout-review-ready.png)

After payment, you'll land on a success, pending, or failure screen depending on the gateway's response:

![Payment success — details](/screenshots/reports/payment-status-04-success-details.png)

![Payment pending](/screenshots/reports/payment-status-06-pending-processing.png)

![Payment failure — details](/screenshots/reports/payment-status-07-failure-details.png)

## Payment Methods Supported

The subscription checkout screen uses **Razorpay** or **Cashfree** (UPI, net banking, credit/debit cards, depending on your region) — whichever is configured for your account. Other payment gateways exist elsewhere in LumberLinq but aren't used on this particular screen.

## Promo Codes

If you have a promo code, enter it on the payment screen before completing the transaction. Discounts are applied automatically.

## Plan Limits and Limit Banners

Each plan has limits on:
- **Tally sheets** — maximum number of tallies
- **Consignments** — maximum number of consignments
- **Users** — number of team members you can invite
- **Storage** — file/photo storage quota
- **AI Chat (Linc)** — daily message limit per user
- **AI credits** — shared pool used by AI Import (tally sheets) and, on the Forest plan, Ask AI inside Unified Search's Stock mode. Cost is based on how much text/image content is processed per request, not a flat fee — a Claude-style usage banner warns you at 80%, 90%, 95%, and 100% of your plan's credit limit used.

When you approach a limit, a **Plan Limit Banner** appears at the top of the relevant module page. When a limit is reached, you cannot create new records of that type until you upgrade or delete old records.

## Forest Plan

**Forest** is LumberLinq's top subscription tier. In addition to everything on lower plans, it unlocks:
- **Ask AI** inside Unified Search's Stock mode — AI-assisted natural-language stock lookup (see Dashboard, Utility, Storage & Support → Unified Search)
- Custom branding on exports and share links

If a Forest-only feature is greyed out or missing, check your current plan on this page before assuming it's a technical error.

## Downloading Your Invoice

From **Subscription → Payment History**, click the download icon next to any paid invoice. The invoice downloads as a PDF.

![Transaction history](/screenshots/reports/subscription-component-02-transaction-history.png)

## What Happens If an Auto-Renewal Payment Fails?

1. You receive an email notification.
2. Your access is NOT cut immediately — it continues until your current billing period actually ends.
3. Once that period ends with no successful renewal, the normal lapse handling above applies (grace period, then downgrade if still unresolved).
4. Update your payment method from Subscription → Payment Methods and retry, or complete a fresh purchase from the Subscription page.

## Cancelling a Subscription

Go to Subscription → click **Cancel Plan**. Cancellation takes effect at the end of the current billing period. Data is retained until the account is fully deactivated.
