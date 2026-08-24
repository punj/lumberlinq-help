---
title: Offline Mode & Mobile App — User Manual
description: How LumberLinq's Android app works without an internet connection, and how it syncs back up once you're online.
---

*Also searched as: no internet, no signal, works offline, download the app, android app, play store, sync issues, sync failed, offline banner, capacitor app.*

## What Offline Mode Is

LumberLinq's Android app can keep working even when your phone or tablet has no internet connection — useful at a mill or yard with patchy signal. This offline support is only available in the installed **Android app**, not in a regular web browser. If you use LumberLinq in a browser (on desktop or mobile), losing your connection behaves like any normal website: pages that need the server simply won't load until you're back online.

## Getting the Android App

LumberLinq is live on the **Google Play Store** — search for "LumberLinq" or install it directly from [play.google.com/store/apps/details?id=com.lumberlinq.app](https://play.google.com/store/apps/details?id=com.lumberlinq.app). You can also open the **"Get the App"** banner or link inside the LumberLinq web app (app.lumberlinq.com) on your phone, which takes you straight there. There is currently no iPhone/iOS app — LumberLinq is Android-only for now.

## How You Know You're Offline

Whenever the app loses its connection, a bar appears at the top of the screen: **"You are offline. Some features may not be available."** It disappears automatically the moment your connection is back. There's no need to refresh or restart the app — LumberLinq checks your connection continuously in the background.

## What You Can Do Offline

A handful of everyday screens are built to keep working with no connection, because their data is kept saved on your device:

- **Stock Units (Transport Units)** — create new ones, and keep filling in tally rows
- **Business Partners** — view and create
- **Products** — view and create
- **Locations** — view and create

Anything you create or edit in these areas while offline is saved on your device and queued to upload automatically once you're back online.

## What Needs a Live Connection

Some areas genuinely need to talk to the server every time and are not available offline: **Export, Import, Reports, Consignments, and Inventory**, along with Admin screens and shared/public links. If you try to open one of these while offline, LumberLinq shows a plain "Needs a connection" page instead of letting the screen load and fail halfway through. That page automatically sends you back to what you were trying to open the moment your connection returns — you don't need to tap anything or retry manually.

## How Syncing Works When You're Back Online

The instant your connection returns, LumberLinq quietly uploads everything you created or changed while offline — new Stock Units, tally rows, Business Partners, Products, and Locations — in the correct order automatically. While this is happening, you'll see a short progress bar with a small checklist showing which areas are still uploading. Most syncs finish within a few seconds. You don't need to stay on any particular screen for it to happen — it runs in the background.

The app also quietly refreshes some of your offline data (Business Partners, Products, Locations, Stock Units, and your Dashboard numbers) every time you come back online, so what's saved on your device stays reasonably up to date for the next time you go offline.

## The Sync Issues Page

Occasionally, something you created offline can't be saved once it reaches the server — for example, you named a new Product or Location the same as one that already exists. Items like this don't just disappear: they land on the **Sync Issues** page (in the app menu), which you can open whether you're online or offline, since it only reads what's already saved on your device.

On this page, each failed item shows what it was and why it failed. Depending on the problem:

- **Rename & Retry** — for a naming clash on a Product or Location, you can type a new name right there and resend it.
- **Discard** — permanently removes the item. Use this if you no longer want to save it (it was never actually saved to LumberLinq, so nothing else is affected).

Nothing on the Sync Issues page retries automatically — it's designed so you always decide what happens to work that didn't go through cleanly.

## The 15-Day Offline Limit

For security, a device can only stay logged in and working offline for a limited stretch of time (currently 15 days) since its last real connection to LumberLinq. If a device passes that limit without reconnecting, it's automatically signed out the next time you try to use it, and you'll need to log in again with a live connection. This protects your company's data if a phone or tablet is lost, stolen, or simply left unused for a long time. As long as you reconnect every so often — even briefly — this limit never comes into play.

## Switching Users or Companies on the Same Device

If a different person logs into LumberLinq on a device that was previously used by someone else — or if you switch between two different companies on the same device — LumberLinq automatically clears out the previous person's or company's offline data first. This keeps one person from ever seeing, or accidentally overwriting, another person's or company's saved records. You'll briefly see an "account switched" message while this happens. Anything that hadn't finished syncing under the old login is cleared along with it, so make sure your offline work has synced (check the offline banner has disappeared) before handing a shared device to someone else or switching companies.

## How This Connects to Other Modules

Offline mode only affects the Stock Unit, Business Partner, Product, and Location screens described above — every other module behaves the same as it does online, just unavailable until you reconnect. It works alongside [Session Security](/session-security/user-manual/) — the same single-session rule still applies, it's just enforced the next time your device successfully reconnects rather than instantly.
