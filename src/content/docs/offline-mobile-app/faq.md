---
title: Offline Mode & Mobile App — FAQ
description: Frequently asked questions about LumberLinq's offline Android app.
---

*Also searched as: no internet, no signal, works offline, android app, play store, iphone app, sync issues, sync failed, offline banner.*

**Can I use LumberLinq offline in a web browser?**

No. Offline mode only works in the installed Android app. In a browser, losing your connection behaves like any normal website — pages that need the server won't load until you're back online.

**Can I use LumberLinq on iPhone?**

Not yet. LumberLinq currently only has an Android app — there is no iOS/iPhone app available. On an iPhone you can still use LumberLinq through your mobile browser, but without offline support.

**Why did my data disappear after 15 days offline?**

It didn't disappear from LumberLinq's servers — but for security, a device that hasn't reconnected in 15 days is automatically signed out, and you'll need to log back in with a live connection to continue. This protects your company's data if a device is lost or left unused for a long time.

**What happens to work I did offline if I don't reconnect within 15 days?**

Anything that already finished syncing before the device went stale is safe — it was already saved to LumberLinq. Anything still waiting in the queue on that device when it gets signed out for staleness would need that device to reconnect and log back in to finish uploading, so it's best to reconnect regularly rather than staying offline for long stretches.

**Why can't I open Reports or Consignments while offline?**

Those screens need live data from the server every time, so they're deliberately blocked offline instead of loading and failing partway through. You'll see a "Needs a connection" message, and LumberLinq automatically takes you back to that screen once you're online again.

**My item shows up on the Sync Issues page — what do I do?**

Open the Sync Issues page from the menu and check why it failed. If it's a naming clash on a Product or Location, you can rename it right there and retry. Otherwise, you can discard it — nothing was ever actually saved to LumberLinq, so discarding it doesn't affect anything else.

**I logged into LumberLinq on a shared tablet that someone else used before — is my data private?**

Yes. LumberLinq automatically clears out the previous person's (or previous company's) offline data the moment a different login is detected on the same device, before showing you anything.

**How do I know if the app is currently online or offline?**

A bar appears at the top of the screen saying "You are offline. Some features may not be available." whenever you lose connection, and it disappears automatically as soon as you're back online.
