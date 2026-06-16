---
title: Storage
description: Monitor your company's file storage usage, quota, and uploaded files across all modules.
---

The Storage module shows how much file storage your company is using and lists all uploaded files. Open at `/storage`.

## Reading Your Storage Usage

![Storage usage and file list](/screenshots/storage/storage-01-usage-and-files.png)

The top section shows:

| Metric | Description |
|--------|-------------|
| Used storage | Total size of all uploaded files (MB or GB) |
| Storage quota | Your plan's maximum allowed storage |
| Free storage | Quota minus used — how much remains |
| File count | Total number of files uploaded |
| Usage percentage | Used ÷ quota × 100 |

If used storage approaches or exceeds the quota, new file uploads will fail. Upgrade your plan or delete unnecessary files to free space.

## What Files Are Counted

Storage aggregates files uploaded across all modules:

- **General documents** — files uploaded without a specific module context
- **Photos** — TU photos and site photos from tally sheets
- **Business Partner documents** — certificates, KYC, licences attached to BP records
- **Shipment documents** — BL, invoice, certificates, and other files on shipments
- **Loading site documents** — files attached to loading site records

The file list shows: file type, name, size, which user uploaded it, and upload date. Use this to identify large or outdated files that can be cleaned up.

## Refreshing the Storage View

![Storage after refresh](/screenshots/storage/storage-02-refreshed-usage.png)

Click **Refresh** to reload the latest usage totals and file list after uploads or cleanup operations.

## When File Uploads Fail

1. Open Storage and confirm remaining free space is greater than the file you are uploading
2. If storage is full, upgrade your plan (see [Subscriptions & Plans](/account-settings/subscriptions/)) or delete files no longer needed
3. If free space is sufficient but upload still fails, click Refresh and try again
4. Very large files may time out — try compressing the file or splitting it into smaller parts
