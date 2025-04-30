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

:::tip
It is highly recommended to return original array as evidences if you can make all the computation with it. If you want to return other things as metrics ***do not forget*** to also include the array.
:::

:::danger
Please check metric type ***value*** for agregated calculations because you might need to add it there.
:::

Once done that, you can complete the addition following the tutorial.

### Adding new metrics

In order to add a new metric. You will have to follow these steps. Do not forget to understand them because this will help you a lot in the future and it also will allow you to code faster and avoid problems.

:::important
Please bear in mind that some steps are ***identical*** to adding new-sources tutorial. Those steps will be marked with an asterisk (*). We strongly recommend also visiting [adding new sources](adding-new-sources.md) sections because both parts of the documentation are very close to each other and the only difference is that here we will focus on adding a new metric in an already integrated API.
:::

### 1. Forking official repo *

In order to develop anything, you will have to fork [collector-events](https://github.com/governify/collector-events) repository. Do not forget to fork the ***develop*** branch. Then, clone the fork and check [***setup developent eviroment section***](../setup-development-environment/intro.md) before proceeding.

### 2. Design new metric and define enviroment

Design a TPA that uses the API that you want to extend and see which endpoints we should add in the collector. Let's pretend that we want to extend Github API. We should think about a metric that can lead to a guarantee in a TPA, for example: "NUMBER_GITHUB_MERGE_PR", which will measure the number of merged Pull requests in a repository. If we have setted up developement eviroment properly, we will have an example TPA. We should create another one from it and remove the other metrics. Once we have done that, we will add our desired metric following the correct format and notation. In this case, we will add something like this inside ***metrics*** property in the new TPA:

```json
"metrics": {
    "NUMBER_GITHUB_MERGE_PR": {
        "collector": {
            "$ref": "#/context/definitions/collectors/eventcollector"
        },
        "measure": {
            "computing": "actual",
            "element": "number",
            "event": {
                "github": {
                    "mergedPR": {}
                }
            },
            "scope": {
                "$ref": "#/context/definitions/scopes/development"
            }
        }
    }
}
```

:::important
See how we defined an event using the existing source name (**github**) and a new endpoint type (**mergedPR**). This will be essential later, so keep that in mind. See how we defined our metric type using the property ***"element"***. To keep it simple, we are going to use type number.
:::

Now, we will need to specify in the guarantees the new metric to be able to use it in a reasonable way. Let's add a new metric in ***guarantees*** property.

:::important
Please follow all recommendations in order to make it understandable for registry and collector-events. Remember that your TPA ***must*** follow [iAgre specification](https://docs.governify.io/references/iAgree)
:::

```json
    "guatantees": [
        {
            "id": "NUMBER_MASTER_PR_MERGE_WEEKLY_OVER_1_OR_EQUAL",
            "notes": "#### Description\r\n```\r\nTP-1: At least 75% of delivered stories(PT) must match a the merge of a PR into master within a day.",
            "description": "At least 75% of delivered stories must match the merge of a PR into master within a day.",
            "scope": {
                "$ref": "#/context/definitions/scopes/development"
            },
            "of": [
                {
                    "scope": {
                        "project": "1010101010"
                    },
                    "objective": "NUMBER_GITHUB_MERGE_PR >= 1",
                    "with": {
                        "NUMBER_GITHUB_MERGE_PR": {}
                    },
                    "window": {
                        "type": "static",
                        "period": "weekly",
                        "initial": "2018-01-01"
                    }
                }
            ]
        }
    ]
```

:::important
Note that the used our new metric (**NUMBER_GITHUB_MERGE_PR**) in ***"with"*** property.
:::

At this point, we have a very clear and detailed view of what we want to include in the collector-events. We will need to add a metric in n existing source, which is ***github***, with a new eventType called ***mergedPR***, which is a type ***number*** metric. In case you are using a new metric type, do not forget to implement it first.

#### 2.1 Credentials and permissions (if needed)

In case you need some sort of token and external data to retrieve metrics go to ***scopes.json*** file, in scope-manager, and add there all the data (if its not already added). In ***identities*** property you can add an object specifying all the url params that you want to include.

```json
{
    "development": [
        {
            "classId": "class01",
            "identities": [],
            "credentials": [],
            "projects": [
                {
                    "projectId": "project01",
                    "identities": [
                        {
                            "source": "github",
                            "repository": "repo01",
                            "repoOwner": "owner01"
                        }
                    ],
                    "credentials": [
                        {
                          "source": "github",
                          "apiKey": "githubToken"
                        }
                    ]
                }
            ]
        }
    ]
}
```

:::tip
Bear in mind that credentials are included in ***credentials*** property. You can add there your API tokens securely.
:::

### 3. Add desired endpoints sourcesManager.json

It is time to define our endpoints. You have to go to ***./configurations/sourcesManager.json***. This file contains all the information related with the things you can include inside the events. In this json you will find for each evenType, the metrics available to use in the TPAs. As we wrote:

```json
    "event": {
        "github": {
            "mergedPR": {}
        }
    }
```

We will have to serch the endpointType called ***github***, because its the source we are trying to extend. Then, we add a property called ***mergedPR***, which will be consistent with everything previously defined in the TPA. In our example, we will have to include this:

```json
    "endpoints": {
        "github": {
            "mergedPR": {
                "endpoint": "/repos/{github.repoOwner}/{github.repository}/pulls?state=closed",
                "payloadDate": "merged_at"
            }
        },
    }
```

We are saying that our collector will have an endpoint whose type will be ***"github"*** (the one refered in the TPA). This new type will have a metric called ***"mergedPR"*** (the refered in the TPA). You will also have to specify two things for each new metric. The property "endpoint" tells us about the url for your API that your specific fetcher will use, and the other one, "payloadDate" points at the date property that Bluejay will use to compare data for filtering by dates. If you need any parameters in your url (such as repository name or anything), use the following notation: `[endpointType].[neededParamName]`. Eg: github.repoOwner. Please make sure that your ***neededParamName*** is the same as the one defined in scopes.json.

:::important
We use ***github.repoOwner*** because in scope.json we defined a **source** with some variables that had to be added in your API calls. Please use the same names that you included here before. Otherwise your will have a tone of weird problems.

```text
    "identities": [
        {
            "source": "github",
            "repository": "repo01",
            "repoOwner": "owner01"
        }
    ]
```

:::

If you want to include more than one metric, add the other metrics in the sane one. Look at this example were there are more than one metric defined for a single endpointType:

```json
    "travis": {
        "builds_public": {
            "endpoint": "/repo/{github.repoOwner}%2F{github.repository}/builds",
            "payloadDate": "started_at"
        },
        "builds_private": {
            "endpoint": "/repo/{github.repoOwner}%2F{github.repository}/builds",
            "payloadDate": "started_at"
        }
    },
```

### 4. Extending the specific fetcher

Now you can extend the specific fetcher. It is very important to understand a few things. Go to ***getInfo*** function. This is the main function. It ***MUST*** return a promise and receive the options as a param, so do not change that. Here you will have to create a case where the endpoint is the one refered to your new metric. In that case add your code and return the correct object. Remember that the data treatment you will have to do must result into an array, because the collector will manage it and process the data by itself following the specified metric type. There is not any guide which you have to follow a 100%, so make sure to check the other fetchers in order to have an idea of which implementation adapts better to your case. You will find some usefull functions in ***./controllers/fetcher/fetcherUtils.js***.

If you want more information, feel free to click [here](https://github.com/governify/collector-events/blob/main/DEVELOPING%20METRICS.md) to see a full example assuming we are adding a more complex **Github** metric using Github's GraphQL API as a new metric to Collector events.

---
