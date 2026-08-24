---
title: Application Settings — Payment Reminders
description: Automatically remind business partners about payments and receive a daily financial report in LumberLinq.
---

*Also searched as: overdue payment emails, invoice reminders, dunning, receivables reminder, daily financial report, payment due notification.*

## How to Access

Open **Main Menu → Company → Application Settings**. Requires Administrator role.

Application Settings is a new settings hub — Payment Reminders is the first section available today, with more (Timezone, Currency, Inventory Policy, Notifications, Branding) shown as "Soon" in the left-hand list.

![Application Settings — Payment Reminders](/screenshots/company/application-settings-payment-reminders.png)

## What It Does

Two things happen once Payment Reminders is turned on:

1. **Business partner reminders.** Your buyer (consignee) gets an email reminder when a payment they owe you is coming due or overdue. Your seller (shipper) gets a softer, informational notice when a payment you owe them is coming due or overdue — never a request, since that payment is on you.
2. **Your daily report.** A summary email — with a PDF attached — listing everything currently due or overdue, both what you're owed and what you owe. Sent to anyone in your company with **Financial Health** access (grant it via **Company → Access Control**).

## Configuring It

- **Enable Payment Reminders** — the master switch. Off by default for every company until an admin turns it on.
- **Start reminding _N_ days before** (1–7, default 3) — the Reminder Timeline preview shows exactly which days a reminder goes out. For 3 days it's every day (3, 2, 1); for longer windows it thins out further from the due date (e.g. 7 days fires on 7, 5, 3, 2, 1) and then fires every day once the item is overdue, until it's settled.
- **Send time & Timezone** — reminders go out once daily at this local time, in the timezone shown (defaults to the timezone on the admin's own profile the first time this is saved; editable afterward).
- **Remind business partners by email** — toggle the external emails on/off independently of your own report.
- **Send me a daily report** — toggle your own summary email on/off.
- **Email / Push** — choose which channel(s) deliver your daily report (business partner reminders are always by email — they don't have app accounts to push to).

## Who Receives the Report

Anyone who is an Administrator, or who holds **Financial Health** access under **Company → Access Control**, receives the daily report automatically — no separate recipient list to manage.
