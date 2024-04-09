---
title: Collector-events
description: Collector-events
hide_table_of_contents: false
sidebar_position: 1
---

# Collector-events

---

### Calculation time of a repository with High activity vs Low activity

Calculations for TPAs whose repositories contain more information (issues, comments, pull requests, etc.) take longer to compute compared to those with less information. However, the difference is small. Nevertheless, it should be studied on a case-by-case basis depending on the project repository and the TPA used to obtain a detailed understanding of the difference to take it into account.

## Performance

### Collector-events slowdown

It has been observed that the `collector-events` experiences slowdowns at times, leading to a significant increase in computation times. When the collector is stable, computation times also stabilize. However, when it becomes destabilized, computation times spike. When does this destabilization occur?

The solution to this slowdown is to restart the `collector-events`, whether in production or development environments.

Below, several potential reasons for this occurrence are considered:

- Does the `collector-events` destabilize after performing calculations over long periods?
    - It remains stable even during large calculations.

Calculations have been conducted over extensive periods (months). Subsequently, calculations are repeated over shorter periods (hours), resulting in the expected execution times.

- Does it become unstable over the course of several days, indicating that the collector remains inactive for extended periods without being restarted?
    - It remains stable over the course of several days.

After 4 days without any calculations being performed by the `collector-events` and the registry, calculations are executed over short periods (hours), yielding the anticipated execution times.

### Reason on the cause of collector-events slowdown

This issue may arise due to various reasons:

- **Activation of too many automatic calculations that are not evenly distributed over time**. If a new calculation is initiated before the previous one is completed, calculations will accumulate, causing the system to "slow down" due to the aforementioned single-threaded calculation resolution problem.
- The aforementioned scenario may also occur when launching **too many manual calculations or through a combination of automatic and manual calculations**.
