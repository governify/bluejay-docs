---
title: Adding New Sources
description: Adding new sources to Governify.
hide_table_of_contents: false
sidebar_class_name: external-link::github.com/governify/collector-events/blob/main/CONTRIBUTING.md
---

# Adding new sources

## Introduction

In this section you will learn how to integrate another API into Bluejay extending ***Collector-events***. Please take into account that the API that you want to include should add value to the Bluejay and Governify ecosystem, which means that it has to improve somehow the way we monitor TPAs.

:::danger
You should not integrate APIs such as [jsonplaceholder](https://jsonplaceholder.typicode.com/) or similar because they do not add any value.
:::

## Current sources

If you want to know which sources are currently available in Collector-events check [Governify Collector events official documentation](https://docs.governify.io/development/services/collectors/collector-events#available-sources)

## Searching for a new source

Finding an API usefull for Bluejay can lead to an awesome addition. The best way to do it is looking up project management tools or best practices management APIs. A good example is iTop API, which is included indirectly in Lucid chain API integration but could be added as a new source. We are looking for anything that could be used to monitor developing or support teams. If you have found an API, do not forget to design some metrics in a specific TPA example and start working on it.

## Adding new sources

Once we have found a new source, we have to follow a simple proces before starting to work in API integration.

### 1. Forking official repo

In order to develop anything, you will have to fork [collector-events](https://github.com/governify/collector-events) repository. Do not forget to fork the ***develop*** branch. Then, clone the fork and check [***setup developent eviroment section***](../setup-development-environment/intro.md) before proceeding.

### 2. Design new metrics and define enviroment

Everything is ready to work, but there is a problem. We cannot implement metrics if we do not know what we want to monitor. To solve this issue we will need to design a TPA that uses the API that we want to integrate and see which endpoints we should add in the collector. Let's pretend that we want to integrate Github API assuming that it is not implemented yet. We should think about a metric that can lead to a guarantee in a TPA, for example: "NUMBER_GITHUB_MERGE_PR", which will measure the number of merged Pull requests in a repository. If we have setted up developement eviroment properly, we will have an example TPA. We should create another one from it and remove the other metrics. Once we have done that, we will add our desired metric following the correct format and notation. In this case, we will add something like this inside ***metrics*** property in the new TPA:

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
See how we defined an event with our new source (**github**) and an endpoint type (**mergedPR**). This will be essential later, so keep that in mind.
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

At this point, we have a very clear and detailed view of what we want to include in the collector-events. We will need to add source, which is ***github***, with an eventType called ***mergedPR***, which is a type ***number*** metric.

#### 2.1 Credentials and permissions (if needed)

Ups! It seems that we will need some sort of token and external data to retrieve our metrics. We will need to know the repostiory name and the user to ensure proper monitorization. Luckily, there is something that we can do to solve this problem. We should go to our ***scopes.json*** file, in scope-manager, and add there all the data. In ***identities*** property we can add an object specifying all the url params such as repository and owner. We can also add members data if needed but because this is a simple tutorial we will ignore this part.

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

### 3. Set up Collector-events to start integration

We are ready to implement the API integration. Collector-events has an specific file called ***fetcher.js***. This file manages all the APIs integration logic using other files, also called fetchers. As its names implies, a fetcher is something which makes requests to **fetch** data. In this case, and for a better design purpose, there are many fetchers, one per API/source supported. Your job will be add a new specific fetcher to integrate and manage a new API and make it usable for *fetcher.js*, which is the main one. We will return to this later, because previously we will need to prepare the Collector to use your fetcher. Follow these steps carefully and try to understand everyhing to avoid getting lost during your extension process.

#### 3.1 Add key authKeys.json

Add key in ./configurations/authKeys.json

#### 3.2 Add desired endpoints sourcesManager.json

#### 3.3 Add minimal authkey in apiv2computationsControllerService.js

#### 3.4 Make fetcher.js redirect your case to your specific fetcher

### 4. Developing your specific fetcher

If you want more information, please click [here](https://github.com/governify/collector-events/blob/main/CONTRIBUTING.md) to see a full example assuming we are adding **Redmine** as a new source to Collector events.

---
