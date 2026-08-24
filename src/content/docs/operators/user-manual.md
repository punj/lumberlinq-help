---
title: Mill Operators & Custom-Made Processing — User Manual
description: Running Custom-Made (Re-saw) processing and managing your mill operator roster in LumberLinq.
---

*Also searched as: machine operators, mill workers, resaw run, custom-made processing, mill tasks, yield, outturn, processing run, performance history.*

## What is Custom-Made / Re-saw Processing?

Custom-Made (also called Re-saw) processing is when input timber — typically round logs — is converted into a different output form, most commonly sawn/square boards. It's run from **Inventory → Processing**. A processing run consumes one or more input Stock Units and produces new output stock; the input Stock Units leave available stock and the output becomes a new open lot.

Each Location also has a **Machines Installed** field listing the equipment at that site. For the full Machine Management page — adding machines, importing them from Locations, and checking their active/needs-attention status — see the **Command Center** guide, which covers the dedicated Machines tab at `/inventory/machines`.

## Starting a Custom-Made Processing Run

1. Open **Inventory → Processing** and click **New Processing Run**.
2. Select the input Stock Units — the system can auto-suggest likely inputs based on what you're producing, learned from past runs.
3. Enter the output product and site.
4. Optionally assign a **Mill Operator** to the run.
5. Save. The run starts as **Draft**, then moves through **In Progress** to **Completed** (or **Cancelled**, which reverses the input Stock Unit assignments).

## Linking a Processing Run's Output to a Tally Sheet

A completed run's output can be linked directly to a new tally sheet, so the produced volume gets measured and recorded in the same flow instead of as a rough estimate. When you return from creating that tally sheet, the processing run screen picks up where you left off and pre-fills the output details (product, CBM, pieces, site) from the tally totals.

## Mill Operators — Managing Your Roster

Open **Inventory → Operators** to manage who can be assigned to processing runs. Each operator has an expertise level — Trainee, Junior, Senior, or Master — plus optional specializations, hire date, and notes.

![Operators list](/screenshots/operators/list-header.png)

![Operators stats](/screenshots/operators/stats.png)

![Operators search and filter](/screenshots/operators/search-filter.png)

**Adding an operator:** click **Add Operator** and choose from users eligible to become one (any user not already linked to an existing operator record). **Editing** reuses the same dialog. **Deactivating** an operator blocks new task assignment but is refused while they still have active tasks — reassign or complete those first. Deactivated operators can be **Reactivated** later; there's no hard delete, so task history is always preserved.

## Operator Performance and Task History

Click an operator to open their Performance dialog — a summary of their stats plus currently assigned and pending tasks. For a full record with its own filters (status, date range), use **View Full History** instead.

## Where "My Tasks" Comes From

There is no standalone "My Tasks" page. If you have active processing runs assigned to you, they appear as a **"My Active Mill Tasks"** card grid on your Dashboard — click a task there to jump straight to that run on the Processing page.

## Common Problems

**"I can't deactivate an operator"** — they still have active (in-progress or draft) tasks assigned. Reassign or complete those tasks first, then deactivate.

**"A processing run has no useful output"** — a run with no input Stock Units selected won't produce meaningful output. Cancel it and start again with the correct inputs.

**"The output tally totals didn't pre-fill"** — this only happens when the run's output was linked to a tally sheet and you returned via the in-app link; a run without that linkage needs output values entered manually.
