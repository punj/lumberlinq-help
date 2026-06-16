---
title: Subscriptions & Plans
description: View your current plan, payment history, available packages, and manage upgrades from the Subscriptions page.
---

The Subscriptions module shows your current plan, payment history, available packages, and lets you purchase or upgrade. Open at `/subscriptions`.

## Current Subscription

![Current subscription tab](/screenshots/subscriptions/subscription-component-01-current-subscription.png)

Shows the active package name, billing period, renewal date, and features included in your plan. Check this tab before deciding to upgrade — confirm what your current plan already includes.

## Transaction History

![Transaction history tab](/screenshots/subscriptions/subscription-component-02-transaction-history.png)

Lists all previous payments with date, amount, currency, payment gateway reference, and status. Useful when a payment was made but the plan did not activate, or when your accounts team needs a payment record.

**Payment statuses:**

| Status | Meaning |
|--------|---------|
| Success / Captured | Payment completed — plan is active |
| Pending | Payment initiated, not yet confirmed by the gateway |
| Created / Initiated | Payment order created but not completed by the user |
| Failed | Payment rejected — try again or use a different method |
| Cancelled | Payment abandoned before completion |
| Free Trial | Account is on a trial period with no charge |

![All payment statuses](/screenshots/subscriptions/payment-status-10-transaction-history-all-statuses.png)

## Purchasing or Upgrading a Plan

![Purchase packages tab](/screenshots/subscriptions/subscription-component-03-purchase-package-selection.png)

1. Open the **Purchase** tab
2. Review the available packages and select the one that fits your needs
3. Choose billing currency and tenure (monthly or annual)
4. Continue to checkout — review the order summary
5. Complete payment through the payment gateway
6. After a successful payment, Transaction History shows a **Success** status and the plan activates

## Plan Limits — What Gets Restricted

When a limit is reached, LumberLinq shows a warning banner or blocks the action. Limits that may apply depending on your package:

| Resource | What it controls |
|----------|-----------------|
| Storage quota | Maximum total file storage across all modules |
| Users | Maximum number of active user accounts |
| AI credits | Credits for AI Import (handwritten tally extraction). AI results must always be verified — see the [AI Import disclaimer](/tally-sheets/user-manual/#import-and-ai-import). |
| Tally sheets | Maximum number of tally sheets |
| Shipments | Maximum number of shipments |
| Transport Units | Maximum number of TUs |
| Products | Maximum product catalog entries |
| Business Partners | Maximum BP records |
| Priority support | Faster support response (premium plans) |
| Analytics | Access to the App Usage report |

If a user cannot create a new record, upload a file, or invite a team member, check the current plan limits here before assuming it is a technical error.
