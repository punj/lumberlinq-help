---
title: Subscriptions & Billing — User Manual
description: Managing your LumberLinq plan, payments, and limits.
---

## Accessing Subscription Settings

Open **Main Menu → Company → Subscription**. This page shows your current plan name and status, billing period, limits (tallies, shipments, users, storage, AI Chat messages), payment history, and options to upgrade, downgrade, or cancel.

![Current subscription](/screenshots/reports/subscription-component-01-current-subscription.png)

## Trial Plan

All new accounts start on a Trial Plan with full feature access for a limited period. When the trial expires, you enter a **Grace Period** (a short additional window to upgrade without losing data). After the grace period, data is preserved but access is restricted until a paid plan is activated.

## Upgrading Your Plan

1. Go to **Subscription** from the sidebar.
2. Click **Upgrade** or **Change Plan**.
3. Browse available plans and select the one that fits your needs.
4. Choose billing frequency — monthly or annual (annual is typically discounted).
5. Click **Subscribe / Pay**.
6. Complete payment via the payment gateway (Razorpay, Stripe, or PhonePe depending on your region).
7. After successful payment, your plan upgrades immediately and limits are updated.

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

- **Razorpay** — UPI, net banking, credit/debit cards (India)
- **Stripe** — International credit/debit cards
- **PhonePe** — UPI (India)

## Promo Codes

If you have a promo code, enter it on the payment screen before completing the transaction. Discounts are applied automatically.

## Plan Limits and Limit Banners

Each plan has limits on:
- **Tally sheets** — maximum number of tallies
- **Consignments** — maximum number of consignments
- **Users** — number of team members you can invite
- **Storage** — file/photo storage quota
- **AI Chat (Linc)** — daily message limit per user

When you approach a limit, a **Plan Limit Banner** appears at the top of the relevant module page. When a limit is reached, you cannot create new records of that type until you upgrade or delete old records.

## Downloading Your Invoice

From **Subscription → Payment History**, click the download icon next to any paid invoice. The invoice downloads as a PDF.

![Transaction history](/screenshots/reports/subscription-component-02-transaction-history.png)

## What Happens If Payment Fails?

1. You receive an email notification.
2. Your current plan continues briefly during a retry window.
3. If retries fail, you are moved to the Grace Period.
4. Update your payment method from Subscription → Payment Methods and retry.

## Cancelling a Subscription

Go to Subscription → click **Cancel Plan**. Cancellation takes effect at the end of the current billing period. Data is retained until the account is fully deactivated.
