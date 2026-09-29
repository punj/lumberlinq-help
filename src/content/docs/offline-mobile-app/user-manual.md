---
title: Offline Mode & Mobile App — User Manual
description: Why LumberLinq's Android and iPhone apps work offline, exactly what works without internet, how syncing works, and when unsynced work can be lost.
---

*Also searched as: no internet, no signal, works offline, offline tally, remote site, forest, yard, download the app, android app, iphone app, ios app, play store, app store, sync issues, sync failed, not synced, sync now, last synced, keep offline, offline lock, offline too long, changes waiting, lost changes, offline changes removed.*

## Why the App Works Offline

The offline mode exists for **one main job: preparing tally sheets where there is no signal** — in a forest, a yard, a port or a remote mill. You measure and enter the tally on your phone, and the moment the phone is back in network everything is sent to LumberLinq automatically.

Because of that purpose, **only a limited set of features works offline**. The app is not a full offline copy of LumberLinq — screens that need live company data (inventory, consignments, reports and so on) need the internet.

Offline mode is only in the installed app — **Android** and **iPhone**. In a web browser, losing the connection behaves like any website: pages simply don't load until you are back online.

## Getting the App

- **Android:** [Google Play Store](https://play.google.com/store/apps/details?id=com.lumberlinq.app) — search "LumberLinq".
- **iPhone / iPad:** [App Store](https://apps.apple.com/us/app/lumberlinq/id6805041670) — search "LumberLinq".

**New to LumberLinq on iPhone?** The iPhone app is for signing in only — create your free account first on **app.lumberlinq.com** (or the Android app), then sign in on your iPhone.

**Important:** the first login on a phone must be online. The app saves your data for offline use only after it has synced once.

## What Works Offline

| Area | What is on your phone | Can you change it offline? |
|---|---|---|
| **Stock Units (Transport Units) + tally sheets** | Every unit created in the **last 90 days**, every unit that is **still open**, and any unit you chose to **Keep offline** — with its tally rows, settings, summary and chart (up to 300 units, newest first) | Yes — create new units, and add, edit and delete tally rows, change tally settings |
| **Business Partners** | The full list | Yes — view and create |
| **Products** | The full list | Yes — view and create, add product photos |
| **Locations (Loading Sites)** | The full list | Yes — view and create |
| **Dropdown lists** (buyers, suppliers, products, locations, transport modes, fumigation types, countries) | Complete lists | — used when you fill in forms |
| **Dashboard** | The numbers from your last sync (default date range only) | No |

Offline, the Stock Units, Business Partners, Products and Locations lists can still be **searched, sorted and paged**, using what is saved on your phone. A small note shows how old that offline copy is.

**"Open" Stock Unit** means one that is not locked and not Delivered, Closed or Cancelled.

### Photos and documents offline

- Photos and documents of your **10 newest** Stock Units are saved on the phone automatically.
- For other units, a photo or document is saved on the phone **once you have opened it online**.
- To keep space free, the app removes files you **haven't opened for 30 days**, and keeps all saved files under **300 MB** (the longest-unopened go first). A removed file simply downloads again next time you open it online. Your lists and tally rows are never removed by this.

### Keep offline

Need an older Stock Unit at a remote site? Open the **Stock Units** list, tap the row's menu (**⋮** or **⋯**) and choose **Keep offline**. It is saved on your phone right away (with its tally and files) and stays there until you choose **Remove from offline**.

## What Needs the Internet

These show a **"Needs a connection"** page offline, and bring you back automatically when the connection returns:

- **Inventory** (all of it, including My Tasks and Stock Statement) and the **Command Center**
- **Consignments / Shipments**, **Reports**, **Export and Import**
- **Admin**, **CRM**, **Support Tickets**, **Notifications**, **Profile** and **Settings**
- **Subscription and payment** screens, **sign-up and account setup**, email verification and invitations
- Shared / public links

The **utility** tools (unit conversion, volume estimates, slab generator, calculator) work offline.

## How Syncing Works

- Everything you create or change offline is **saved on the phone** and sent to LumberLinq **automatically** when the connection is back — in the right order, even if the app is in the background.
- Several tally-row saves for the same tally are sent together, so a big tally uploads quickly.
- The app uses the phone's real network signal. On "Wi-Fi connected but no internet", your saves are kept on the phone instead of failing.
- When you come back to the app after a while, it refreshes your offline copy on its own.
- If the server has a problem, the app waits a little longer before each new try (seconds, then minutes). After 10 failed tries the item moves to **Sync Issues**, where you can press **Try again**.
- Photos and documents are never saved twice, even if the upload had to be retried.

### The sync button (top of the screen)

Next to the notification bell you'll see a small cloud:

- **Plain cloud** — everything is saved on LumberLinq.
- **Spinning** — sending now.
- **☁ with a number** — that many changes are waiting on this phone (you're offline, or they're about to be sent).
- **⚠ with a number (amber)** — that many changes were refused by the server — tap to open **Sync Issues**.

Tap it to see **when the phone last synced**, the counts, and a **Sync now** button.

## The Sync Issues Page

Sometimes the server refuses an offline change — for example a new Product or Location with a name that already exists, or a tally that was locked in the meantime. Those changes appear on **Sync Issues** (menu, or the amber ⚠ button):

- **Rename & Retry** — for a name clash on a Product or Location.
- **Try again** — for an item that stopped after too many server failures.
- **Delete** — removes the change for good (it was never saved on LumberLinq).

## Logging Out

Logging out always **syncs first**, so no work is left behind on the phone:

- **Nothing waiting** — you are logged out as usual.
- **Changes waiting and you are online** — the app sends them first ("Syncing before logout…"), then logs you out.
- **Changes waiting and you are offline** — logout is **blocked**: *"5 changes waiting — connect to the internet to sync, then log out."*
- **The server refused some changes** — you see the list and can choose **Delete and log out**, or **Cancel** to keep them and fix them in Sync Issues.

## The 15-Day Offline Limit

For security, a phone can work offline for up to **15 days** after its last real connection.

- **If nothing is waiting to sync** — after 15 days the app logs you out; log in again with internet.
- **If changes are waiting** — the app **locks** instead ("Offline for too long"). Your changes stay safe on the phone, but nothing else is shown. As soon as the phone has internet (and you've logged in again if needed), the app asks **"Sync your old changes?"**:
  - **Yes** — they are sent, then you are logged out.
  - **No** — they are **deleted** ("Your 5 old changes were deleted because you chose No."), then you are logged out.

Connect at least every few days — even briefly — and this limit never comes into play.

## Several People, One Phone

Each phone keeps offline data for **one person and one company** at a time.

- When a **different person** logs in, the previous person's offline data is removed from the phone — **including any changes they had not synced yet**. The previous person is told the next time they log in (on this phone, and in their notifications on any device): *"N changes you made offline on a phone were removed…"*.
- The same happens when you log into a **different company** on the same phone (switching company in the app is blocked while you have changes waiting).
- **Before handing a phone to someone else, make sure the cloud button shows everything is synced.**

## When Offline Work Can Be Lost — and How Much

Offline changes are only ever lost in these cases:

| Situation | What is lost |
|---|---|
| You press **Delete** on Sync Issues, or **Delete and log out** | Only the refused changes you deleted |
| You answer **No** to "Sync your old changes?" after the 15-day lock | All changes that were waiting on that phone |
| A **different person** (or you, into a different company) logs in on the phone before your changes synced | All your changes that were waiting on that phone — you are told on your next login |
| The phone is **lost, broken, reset**, or the app is **uninstalled / its data cleared** before syncing | Everything that had not synced yet |

Everything that **already synced** is safe on LumberLinq in every case. Offline data is not included in Google backups or phone-to-phone transfers, so a new or restored phone always starts fresh from your LumberLinq account.

## How This Connects to Other Modules

Offline mode covers Stock Units with their tally sheets, Business Partners, Products and Locations. Every other module works as usual online. It works alongside [Session Security](/session-security/user-manual/) — the single-session rule is enforced the next time your phone reconnects.
