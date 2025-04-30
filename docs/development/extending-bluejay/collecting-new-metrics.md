---
title: Collecting New Metrics
description: This section explains how to collect new metrics in Governify.
hide_table_of_contents: false
# sidebar_class_name: external-link::github.com/governify/collector-events/blob/main/DEVELOPING%20METRICS.md # Use this format for external links
---

# Collecting new metrics

## Introducction

In this section you will learn how to include new metrics in a supported API in Bluejay extending ***Collector-events***. Please take into account that the metric that you want to include should add value to the Bluejay and Governify ecosystem, which means that it has to improve somehow the way we monitor TPAs or the information we retrieve about our teams.

:::danger
Do not integrate useless metrics. Take into account that each metric makes sense and is used for simple or complex monitoring, which implies a logic behind its creation. Before adding a new one, please ask yourself how is it useful in a TPA context and in what way is it needed. May be your metric can be calculated as a combination of existing ones.
:::

## Current metrics

As you can imagine, Bluejay already supports a great collection of metrics. Before proceeding, check it up in order to get some inspiration or get to know what is already done. You can find more information about current metrics in [metrics section](./../../customization/agreement-modeling/metrics.md) and [metrics library](https://github.com/governify/governify-examples/tree/master/metrics/event-collector).

:::important
Collector events is always in continuous developement, which means there could be metrics not mentioned in the documentation yet.
:::

## Searching for a new metric

If you are interesting in adding a new metric, you have to think a few things before. If your metric is already implemented, please consider testing it and check it does what is expected. If so, you will have to look for another one. If your metric needs an API ***not*** supported by Collector-events, check [adding new sources tutorial](./adding-new-sources.md) for a better understanding. If your metric is too complex (stdev, weighted average, ...) consider making it a *guarantee* and focus on the simple concepts on it. A very good example is when you want to include a percentage. It is much better for you to add 2 simple metrics (numerator and denominator) and in the *guarantee*  object you can make the percentage easily. We will talk about that later.

Your goal is to find a number that allows you to measure something. This number must be calculated using simple values that you can extract from a supported API. You will also need to make it usefull for auditing a project.

### Good metrics

+ Number PRs merging in the main branch weekly: You can measure that and you likely want to control that in order to ensure a progression in your agile developement teams.

+ Issues passing TTO: This number gives you an overview about how many issues are not passing TTO, which lead to fail the SLA, which leads to problems. This way you can take action and prevent things because you can predict tendences.

### Bad metrics

+ Number of branches in a repository: This number does not give useful information because they are constantly getting created and deleted.

+ Number of contributors in a repository: This metric is not useful because it does not make any sense. The number of people currently working in a project is not the same as the number of contributors. In addition, it barely says something about the situation.

## Adding new metrics

If you have reached this level we will assume that you have a good metric that you want to implement. If so, let's talk about other important things before getting to code.

### Bluejay philosophy

A very important concept that you should know about Bluejay is that its used for auditing. Auditing is a process where you get information about performance, best practices compliance and other relevant terms that are taken seriously. Due to the context, each metric is calculated using some data, which will be sent as ***evidence***. Evidencing metrics is critical because numbers without proves are just numbers. This way to think will allow you to know the type of objects that you will need to return in your functions and how to implement that metric. Bear in mind these tips because they will be relevant later.

### Metrics types

Our metrics can have different types. Here you will have a detailed list of them so you can choose the type of your new metrics. However, we ***strongly recommend*** using type ***number***, because it is the simplest and the easiest to implement.

+ <u>***number:***</u> Metrics type number return the lenght of the array as the result (the metric value) and the array as evidences. For example, if you create a metric called *MERGED_PR_WEEEKLY*, with type number, the lenght of the array will be the value, and the evidences the array itself. This helps you to know that in your fetcher your will have to return an array of merged PRs for your endpointType.  

+ <u>***percentage:***</u> This metric type calculates the proportion of related events compared to the total number of main events. It expects a related definition inside the metric DSL, which describes the secondary event to match. You can use a time window to search for related events occurring around each main event, but by default the window is 4 years. Your fetcher must return an array of main events (e.g., MERGED_PRS), and the logic will use getEventMatches to find how many related events (e.g., REVIEW_COMMENTS) occurred in the window for each. The final value is the percentage: ***(number of matches / total main events) * 100***. The matched related events are returned as evidences.

+ <u>***count:***</u> This type of metric works similarly to percentage, but instead of calculating a ratio, it directly returns the number of matched related events. You have the same window logic here. Your fetcher fetcher must return an array of main events. After finding the related matches using getEventMatches, the count of those matches becomes the metric value. If there are no main events, the result will be *NaN*. As with percentage, all matched related events are returned as evidences

+ <u>***value:***</u> This metric type is used to extract a specific value from each item in the array of main events and calculate an aggregate result (avg, max, min, newest, or oldest). You must define a parameter, which is the property containing the value inside each object (e.g., "metrics.lead_time"). This is parsed and used to extract that value from each object inside the array.
Be advised: **If the array is empty, it returns 0**. The result depends on the return type: avg (average), max (maximum value in the array), min (minimum value in the array), newest (first value in the list) and oldest(last value in the list). The evidences returned will be the same as the main events arrays. This helps you know that your fetcher must return detailed objects with numerical fields you want to measure over. For example, a list of deployments, each with a deployment.duration value.

+ <u>***stdev:***</u> As it name says, this metric type calculates the standard deviation of how main events are distributed over time. It splits the time range (from to to) into periods (e.g., weekly, monthly) using the period defined in the DSL. Then, it counts how many main events fall into each period and calculates the standard deviation of those counts. This helps detect how consistent or variable the activity is over time. The metric returned is the standard deviation value, and the evidences are the main events used for the calculation.

:::important
You can implement percentages or other complex metrics ***without*** using percentage metric type. This can be done with *guarantees* objects in your TPA. Let's see an example:

```json
{
    "id": "ISSUES_PASSING_SLA_PERCENTAGE_OVER_75",
    "notes": "#### Description\r\n```\r\nTP-1: At least 75% of issues should meet the SLA.",
    "description": "At least 75% of issues should pass both TTO and TTR.",
    "scope": {
        "$ref": "#/context/definitions/scopes/development"
    },
    "of": [
        {
            "scope": {
                "project": "1010101010"
            },
            "objective": "(NUMBER_OF_ISSUES_PASSING_SLA/NUMBER_OF_ISSUES*100) >= 75",
            "with": {
                "NUMBER_OF_ISSUES_PASSING_SLA": {},
                "NUMBER_OF_ISSUES": {}
            },
            "window": {
                "type": "static",
                "period": "monthly",
                "initial": "2023-10-01"
            }
        }
    ]
}
```

In this example we are monitoring that issues passing SLA percentage is always greater than or equals to 75. This can be done because we have two type number metrics (NUMBER_OF_ISSUES_PASSING_SLA and NUMBER_OF_ISSUES) that can be used to create this guarantee. This is what we meant when we said that you have to think before adding a new metrics because may be the one you need can be calculated in a similar way to this one.
:::

#### Adding a new metric type

In case none of the current metrics types adapt to your metric, please reconsider implementing it because it might be incorrect. However, it's possible that your metric is correct and you need a new metric type. In that case you will have to do an extra step while developing your metric. This will be extending ***getMetricAndEvidences*** function from main fetcher file (***controllers/fetcher/fetcher.js***). You will have to add a new case for your metric type as follows:

```js
    else if (metricType === 'yournewMetricType') {
    // ... All your code for calculating the metric and the evidences
    resolve({ metric: metric, evidences: evidences });
    }
```

Once done that, you can complete the addition following the tutorial.

### Adding new metrics

If you want more information, feel free to click [here](https://github.com/governify/collector-events/blob/main/DEVELOPING%20METRICS.md) to see a full example assuming we are adding a more complex **Github** metric using Github's GraphQL API as a new metric to Collector events.

---
