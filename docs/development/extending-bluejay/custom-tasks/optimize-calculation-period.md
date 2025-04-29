---
title: Optimize Calculation Period
description: Optimize
sidebar_position: 4 # Sets this doc to the first position in the sidebar
hide_table_of_contents: false
---

# Optimize Calculation Period

---
Bluejay has an automatic calculation system for its TPAs. However, fetching data and calculating metrics for a course consisting of numerous teams can lead to performance issues.

The **"Optimize Calculation Period"** script aims to resolve the challenge of multiple automatic calculations triggering simultaneously within a course.
It achieves this by **evenly distributing** the execution times for these calculations across a given period of time.

This script is one of the [Custom Tasks of Extending Governify](https://docs.governify.io/development/extending-governify/custom-tasks), and it is stored within the assets-bluejay repository [(link)](https://github.com/governify/assets-bluejay/blob/main/public/director/tasks/utils/optimizeCalculationPeriod/script.js).

In this document, we will discuss how to load, configure, and run the script from the user interface. If you want to see the inner workings of this script, we will provide an explanation of the technical details in the last section.

## Load Optimize Calculation Period

1. Go to  ***ui.bluejay.[YourDomain]***
2. Click on Admin UI
3. Click on the Task Runner tab
4. Open the dropdown and select **optimizeCalculationPeriod.**

![load optimize](/img/development/custom-tasks/optimize/load-optimize.png)

## Configure the script

Let's have a look at the Configuration.json parameters:

- **filenameMustIncludeAll**: *string array*.
  > This field specifies the substrings that must be included in the filenames of computation tasks in the director's folder inside the Bluejay assets. This can be used to filter the tasks by courseName, year, etc. Example name of the files: `tpa-class01-GH-motero2k_Bluejay-test-TPA-23-24.json`

- **startingTime**: *string*.
  > The starting time in 24-hour format (HH:mm) from which the calculations should begin for the teams selected.

- **endingTime**: *string*.
  > The ending time in 24-hour format (HH:mm) by which all calculations should be completed.

- **batchSize**: *int*.
  > This field indicates the number of teams that can be activated at the same time.

**Example:** **5 teams** in a course `class01` with activated automatic calculations at any time. The script with the following configuration will distribute evenly the calculations between `14:00` and `16:00` in batches of `2` teams each.

```json
{
    "filenameMustIncludeAll": ["tpa-","class01"],
    "startingTime": "14:00",
    "endingTime": "16:00",
    "batchSize": 2
}
```

```txt
-----------------------------------------
expected result:
5 teams / 2 teams per batch = 2 batches of 2 + 1 batch of 1, total 3 batches.

-----------------------------------------
batch1 14:00 -> Team1 and Team2
batch2 15:00 -> Team3 and Team4
batch3 16:00 -> Team5 
```

## Run the script

**Click run** and you will see the results in the log of **Result.json:**

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
    "5 files in groups of 2 = 3 ,minutesBetweenRuns: 60",
    #changed configuration files are shown here
    ,
    "script end"
  ]
}
```

:::info bear in mind

- You can check the new dates in the **Task Management** tab
- If you want to execute this script again, you must **turn off and on all automatic calculations in the course** (this resets the launch times to default).
- Bluejay use `tpa-` prefix for the automatic agreements calculations, so it is recommended to use this prefix in the filenameMustIncludeAll field.

:::

---

## Technical details

This section explains line by line the **optimizeCalculationPeriod** [script.js](https://github.com/governify/assets-bluejay/blob/main/public/director/tasks/utils/optimizeCalculationPeriod/script.js).

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

**Config variables**: Extracting and validating the configuration variables.

```js showLineNumbers
    const batchSize = config.batchSize
    const startingTimeZstring = config.startingTime
    const endingTimeZstring = config.endingTime
    const filenameMustIncludeAll = config.filenameMustIncludeAll;

    if(!Array.isArray(filenameMustIncludeAll) || filenameMustIncludeAll.length < 1) throw new Error("filenameMustInclude must be a string array")
    if(typeof startingTimeZstring != "string" || typeof endingTimeZstring != "string") throw new Error("startingTime and endingTime must be strings")

    if(!moment(startingTimeZstring, 'HH:mm', true).isValid()) throw new Error("startingTime is not a valid time in 24h format (HH:mm)")
    if(!moment(endingTimeZstring, 'HH:mm', true).isValid()) throw new Error("endingTime is not a valid time in 24h format (HH:mm)")

    if(typeof batchSize != "number" ) throw new Error("BatchSize must be number")
    if(batchSize<1 || 20<  batchSize) throw new Error("BatchSize out of bounds [0,20]")
```

**Parsing time variables and searching for JSON files.**

The json files (active calculations) are searched in the tasks folder of the bluejay assets. The files are filtered by the filenameMustIncludeAll strings.

```js showLineNumbers
    const startingTime = moment(startingTimeZstring, 'HH:mm');
    const endingTime = moment(endingTimeZstring, 'HH:mm');

    const currentDirectory = path.join(process.cwd(), 'tasks');
    log(`Current directory: ${currentDirectory}`);
    log(`Searching for JSON files containing: ${filenameMustIncludeAll}`);

    const jsonFilesNames = fs.readdirSync(currentDirectory)
    .filter(fileName => fileName.endsWith('.json')) 
    .filter(fileName => filenameMustIncludeAll.every(mustHaveString => fileName.includes(mustHaveString)))
    .map(fileName => path.parse(fileName).name);

    if(jsonFilesNames.length < 1){
      throwError("Automatic computations not found in course containing "+ filenameMustIncludeAll)
    }
    log("Active computations: ")
    log(jsonFilesNames)
```

**Determining the number of batches and the time interval between them.**

```js showLineNumbers
    if(batchSize > jsonFilesNames.length) throwError(`batch number too big (${batchSize}) for ${jsonFilesNames.length} groups`)
    const numberOfBatchs =  Math.ceil(jsonFilesNames.length / batchSize)
    if(numberOfBatchs <1 ) {log("All done, nothing changed");return result}
    const numberOfBatchsNormalized = numberOfBatchs-1
    const timeBetweenRuns = (endingTime.diff(startingTime) / numberOfBatchsNormalized);
    log(`${jsonFilesNames.length} files in groups of ${batchSize} = ${numberOfBatchs} ,minutesBetweenRuns: ${timeBetweenRuns/60000} minutes`)
```

**Adjusting the NEW initial and end dates for each computation task.**

```js showLineNumbers
    jsonFilesNames.forEach((file, index) => {
      const fullFilePath = path.join(currentDirectory, file+".json");

      const content = fs.readFileSync(fullFilePath, 'utf8') 

      const data = JSON.parse(content);

      const initDate = moment.utc(data.init, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
      const endDate = moment.utc(data.end, 'YYYY-MM-DDTHH:mm:ss.SSSZ');

      const adjustedInit = initDate
      .set({hour: startingTime.hours(), minute: startingTime.minutes(), second:0, milisecond:0}) 
      .add((index%numberOfBatchs) * timeBetweenRuns , 'ms');
      const adjustedEnd = endDate
      .set({hour: adjustedInit.hours(), minute: adjustedInit.minutes()})
      
      data.init = adjustedInit.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
      data.end = adjustedEnd.format('YYYY-MM-DDTHH:mm:ss.SSSZ');

      const updatedContent = JSON.stringify(data, null, 2);
      
      fs.writeFileSync(fullFilePath, updatedContent, 'utf8');
      log(`Updated file content:`);
      log(data);
      
    });

    log("script end")
    return result;
    //SCRIPT END

  } catch (error) {
    return { error: error.stack.split('\n').slice(0,10), log: result.log };
  }
};
```
