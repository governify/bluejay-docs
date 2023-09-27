---
title: Optimize Calculation Period
description: Optimize
sidebar_position: 4 # Sets this doc to the first position in the sidebar
hide_table_of_contents: true
---

# Optimize Calculation Period

---

The **"Optimize Calculation Period"** script is stored within the asset manager and aims to resolve the challenge of multiple automatic calculations triggering simultaneously in a course. It achieves this by **evenly distributing** the launch times for these calculations across a given period of time.

This script is one of the [Custom Tasks of Extending Governify](https://docs.governify.io/development/extending-governify/custom-tasks)

## Load Optimize Calculation Period
1. Go to  ***ui.bluejay.[YourDomain]*** 
2. Click on Admin UI
3. Click on Task Runner tab
4. Open the dropdown and select OptimizeCalculationPeriod.


![load optimize](/img/guides/optimize/load-optimize.png)

## Configure the script using Configuration.json

- **courseRegex**: *string*. Course name used to look for activated automatic calculations.
- **maxMinutesDelay**: *int*. Time in minutes to distribute equally all team calculations.
- **batchSize**: *int*. Numbers of teams that can be activated at the same hour.


**Example:** **5 teams** in a course configured to launch automatic calculations at **15h00**  and theese parameters in the config:
```
{
    "courseRegex": "class01",
    "maxMinutesDelay": 60,
    "batchSize": 2
}
-----------------------------------------
5/2 = 2 + 1, total 3. 

----------------------------------------- 
result:
btch1 15h -> Team1 and Team2
btch2 15h30 -> Team3 and Team4
btch3 16h00 -> Team5 
```
## Run the script
**Click run** and you will see the results on the log of **Result.json:** (this is a new example)

![output optimize](/img/guides/optimize/output-optimize.png)



:::info bear in mind
- You can check the new dates in the **Task Managment** tab
- If you want to execute this script again, you must **turn on and of all automatic calculations in the course** (this resets  launch times to default).
:::
---
