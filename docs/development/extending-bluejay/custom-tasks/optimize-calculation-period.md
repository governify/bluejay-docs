---
title: Optimize Calculation Period
description: Optimize
sidebar_position: 4 # Sets this doc to the first position in the sidebar
hide_table_of_contents: false
---

# Optimize Calculation Period

---
Bluejay has an automatic calculation system for its TPAs. However fetching data and calculating metrics of a a course consisting of numerous teams can lead to performance issues.

The **"Optimize Calculation Period"** aims to resolve the challenge of multiple automatic calculations triggering simultaneously in a course. It achieves this by **evenly distributing** the execution times for these calculations across a given period of time.

This script is one of the [Custom Tasks of Extending Governify](https://docs.governify.io/development/extending-governify/custom-tasks) and it is stored within the assets-bluejay repository [(link)](https://github.com/governify/assets-bluejay/blob/main/public/director/tasks/utils/optimizeCalculationPeriod/script.js).

In this document, we will discuss how to load, configure, and run the script from the user interface. If you want to see the inner workings of this script, we will provide an explanation of the technical details in the last section.

## Load Optimize Calculation Period
1. Go to  ***ui.bluejay.[YourDomain]*** 
2. Click on Admin UI
3. Click on Task Runner tab
4. Open the dropdown and select OptimizeCalculationPeriod.


![load optimize](/img/development/custom-tasks/optimize/load-optimize.png)

## Configure the script

Let's have a look at the Configuration.json parameters:

- **courseRegex**: *string*.    
> This field specifies the name of the desired course.
- **maxMinutesDelay**: *int*. 
>This value represents the time in minutes between the default calculation date of the course and the furthest calculation. A positive value delays some of the calculations, while a negative value is allowed to anticipate instead of delaying the calculations.
- **batchSize**: *int*.
>This field indicates the number of teams that can be activated at the same hour.


**Example:** **5 teams** in a course named `class01` configured to launch automatic calculations at `15h00`  and these parameters in the config:
```txt
{
    "courseRegex": "class01",
    "maxMinutesDelay": 60,
    "batchSize": 2
}
-----------------------------------------
expected result:
5/2 = 2 + 1, total 3. 
----------------------------------------- 
btch1 15h -> Team1 and Team2
btch2 15h30 -> Team3 and Team4
btch3 16h00 -> Team5 
```
## Run the script
**Click run** and you will see the results on the log of **Result.json:** 

```json
{
  "date": "2023-10-01T15:40:21.658Z",
  "log": [
    "Current directory: /opt/app/tasks",
    "Searching for JSON files containing: class1",
    "Active computations: ",
    [
      "tpa-class1-GH-motero2k_Bluejay-test-TPA-23-24",
      "tpa-class1-GH-motero2k_Test-Repo-for-Bluejay-copy1",
      "tpa-class1-GH-motero2k_Test-Repo-for-Bluejay-copy2",
      "tpa-class1-GH-motero2k_Test-Repo-for-Bluejay-copy3",
      "tpa-class1-GH-motero2k_test2-for-bluejay"
    ],
    "5 files in groups of 2 = 3 ,minutesBetweenRuns: 30",
    #changed configuration files are shown here
    ,
    "script end"
  ]
}
```

:::info bear in mind
- You can check the new dates in the **Task Management** tab
- If you want to execute this script again, you must **turn on and of all automatic calculations in the course** (this resets  launch times to default).
:::
---

## Technical details

This section explains line by line the OptimizeCalculationPeriod [script.js](https://github.com/governify/assets-bluejay/blob/main/public/director/tasks/utils/optimizeCalculationPeriod/script.js).

**Imports:** fs for file writing, path for joining strings as paths and moment to modify the dates.
```js showLineNumbers
"use strict";

const fs = require('fs');
const path = require('path');
const moment = require('moment');
```
**These lines belong to the [script.js template](https://github.com/governify/assets-bluejay/blob/main/public/director/tasks/examples/template/script.js).** This is necessary to execute a custom task a receive a result in the UI:
```js showLineNumbers

module.exports.main = async (config) => {
  let result = { date: new Date(), log: [] };
  const log = (data) => {console.log(data);result.log.push(data)};
  const throwError = (message) => {result.log.push(message); 
  throw new Error(result.log[result.log.length-1])}
  try {
    //SCRIPT BEGIN
```
Here we make sure that the **batchSize and maxMinutesDelay are integers and contained in a reasonable range.** maxMinutesDelay can be negative as we stated in the configuration section.
```js showLineNumbers
    if(typeof config.batchSize != "number" ||
         typeof config.maxMinutesDelay != "number") 
    throw new Error("BatchSize and maxMinutesDelay must be numbers")

    if(config.batchSize<1 || 20<  config.batchSize) 
        throw new Error("BatchSize out of bounds [0,20]");
    config.batchSize = parseInt(config.batchSize);
    config.maxMinutesDelay = parseInt(config.maxMinutesDelay);
```
**All scripts are executed in `/director`.** `/director/tasks` is the folder where automatic calculations configuration files are stored.
```js showLineNumbers
    const currentDirectory = path.join(process.cwd(), 'tasks');
    log(`Current directory: ${currentDirectory}`);
    const courseName = config.courseRegex;
    log(`Searching for JSON files containing: ${courseName}`);

    const jsonFiles = fs.readdirSync(currentDirectory)
    .filter(file => file.includes('tpa-'+courseName) 
        && file.endsWith('.json')) // Filter files by course and .json extension
    .map(file => path.parse(file).name); // Get file names without the extension
```
If no automatic calculation files are found or if the batch number is too high, the script will throw an error; otherwise, **it will log the name of the files.**
```js showLineNumbers

    if(jsonFiles.length < 1){
      throwError("Automatic computations not found in course "+ courseName)
    }
    log("Active computations: ")
    log(jsonFiles)

    if(config.batchSize > jsonFiles.length) 
        throwError(`batch number too big (${config.batchSize}) 
            for ${jsonFiles.length} groups`);
```
The script now gets the **number of batches** (a batch is a group of calculations executed at once) and the **time between executions.**
```js showLineNumbers
    //number of divisions of the time given
    const numberOfBatchs =  Math.ceil(jsonFiles.length / config.batchSize) 
    if(numberOfBatchs <=1 ) {log("All done, nothing changed");return result}

    // takes out the intial date (not modified)
    // 60 min / (4-1) = 20 => i*20 => [00:00, 00:20, 00:40, 00:60]
    const numberOfBatchsNormalized = numberOfBatchs-1 

    const minutesBetweenRuns = config.maxMinutesDelay / numberOfBatchsNormalized; 
    log(`${jsonFiles.length} files in groups of ${config.batchSize} 
        = ${numberOfBatchs} ,minutesBetweenRuns: ${minutesBetweenRuns}`)
```
**Stores the dates in variables.**
```js showLineNumbers
    jsonFiles.forEach((file, index) => {
        const fullFilePath = path.join(currentDirectory, file+".json");
      const content = fs.readFileSync(fullFilePath, 'utf8') 

      const data = JSON.parse(content);

      const initDate = moment.utc(data.init, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
      const endDate = moment.utc(data.end, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
```
The script now **modifies the original dates** (course default) to spread the executions **using minutesBetweenRuns**
```js showLineNumbers
      //why the %(mod) operation? 
      //Lets say you have 5 computations (index)(C) to do in 2 defined Times(T). 
      //You assign computations C0->T0 C1->T1 
      // !!start again in Time 0!! 
      //C2-T0, C3->T1, C4->T0... the index can have big values, 
      //mod operation resets them to always keep them within the batches range
      
      const adjustedInit = initDate.add(
            (index%numberOfBatchs) * minutesBetweenRuns *60*1000, 'ms')
            .format('YYYY-MM-DDTHH:mm:ss.SSSZ');
            //example: i*20 => [00:00, 00:20, 00:40, 00:60]
      const adjustedEnd = endDate.add(
        (index%numberOfBatchs) * minutesBetweenRuns *60*1000, 'ms')
        .format('YYYY-MM-DDTHH:mm:ss.SSSZ');

      data.init = adjustedInit;
      data.end = adjustedEnd;

      const updatedContent = JSON.stringify(data, null, 2);
      
      fs.writeFileSync(fullFilePath, updatedContent, 'utf8');
      log(`Updated file content:`);
      log(data);
      
    });

```
This is the end of the script. These lines are also from the **script.js template** mentioned above.
```js showLineNumbers
    log("script end")
    return result;
    //SCRIPT END

  } catch (error) {
    return { error: error.stack.split('\n').slice(0,3), log: result.log };
  }
};
```