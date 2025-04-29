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

At this point, we have a very clear and detailed view of what we want to include in the collector-events. We will need to add source, which is ***github***, with an eventType called ***mergedPR***, which is a type ***number*** metric. If you want to know about metrics types and adding metrics, check [collecting-new-metrics](collecting-new-metrics.md) section.

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

Go to ***./configurations/authKeys.json*** file and include a key for your API. For our example, you would have to add:

```json
"github": "$_[KEY_GITHUB]",
```

:::important
Take into account that you ***MUST*** name the property as your eventType in your TPA.

```json
    "event": {
        "github": {
            "mergedPR": {}
        }
    }
```

As in the example we added **"github"** as the event name, so we have to use **the same name in authKeys.json**.

:::

#### 3.2 Add desired endpoints sourcesManager.json

It is time to define our endpoints. You have to go to ***./configurations/sourcesManager.json***. This file contains all the information related with the things you can include inside the events. In this json you will find for each evenType, the metrics available to use in the TPAs. As we wrote:

```json
    "event": {
        "github": {
            "mergedPR": {}
        }
    }
```

We will have to include an endpointType called ***github***, and a property called ***mergedPR***, which will be consistent with everything previously defined in the TPA. In our example, we will have to include this:

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

If you want to include more than one metric, instead of creating a new endpointType with the same name, add the other metrics in the sane one. Look at this example were there are more than one metric defined for a single endpointType:

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

#### 3.3 Add minimal authkey in apiv2computationsControllerService.js

We are almost there. The next thing we have to do is adding a minimal authKey in ***./controllers/apiv2computationsControllerService.js*** file. Once again, use the same name for the endpointType, eventType and source. Let's see where we have to add it. Go to the part where you find the following comment: // Minimal authKeys.

You will have to add a new property to authKeys. Its name must be the same as the one defined in other parts, for this example, ***"github"***.

```js
    github: {
      getKey: function () {
        return '';
      }
    }
```

With this property you will have a default auth key for your API and its value will be anempty string ('').

#### 3.4 Make fetcher.js redirect your case to your specific fetcher

Finally, we have to prepare the fetcher to use our specific fetcher, which will manage your new API endpoints. To do so, you will have to create a new file called: `[yourNewAPIYouWantToInclude]Fetcher.js`, where ***yourNewAPIYouWantToInclude*** is the name of the API you are integrating with Collector-events. In this example, you will have to create a file called ***githubFetcher.js***.

:::tip
Remember to add this file in the same folder where *fetcher.js* is located (***./controllers/fetcher/***).
:::

This will allow you to import this fetcher (which can be empty for now) and prepare the main fetcher in order to use your new one.To do this, go to ***./controllers/fetcher/fetcher.js*** and add at the top of the file tge import. For example: 

```js
const githubFetcher = require('./githubFetcher');
```

Now, it's as simple as adding the corresponding *"case"* inside the *"switch"*. For example:

```js
    case 'github':
    options.token =  generateToken(integrations.github.apiKey, authKeys.github.getKey(), 'token ');
    githubFetcher
        .getInfo(options)
        .then((data) => {
        resolve(data);
        }).catch(err => {
        reject(err);
        });
    break;
```

As you can see, the case name ***MUST*** be indentical as the endpointType, in this case, "github". You will have to add the same code except for the fetcher name. A generalist switch case is:

```js
    case 'yourEndpointTypeName':
    yourEndpointTypeNameFetcher
        .getInfo(options)
        .then((data) => {
        resolve(data);
        }).catch(err => {
        reject(err);
        });
    break;
```

In case that you want to include some important information related to the url params, security or any other variable, you can do that using ***integrations***. See those examples:

```js
    options.token = generateToken(integrations.gitlab.apiKey, authKeys.gitlab.getKey(), '');
    options.gitlabApiBaseUrl = integrations.gitlab.gitlabApiBaseUrl;
    options.noCache = json['gitlab']['noCache'];
```

As you can see here, you can add values to your ***options*** object using integrations. There is no need for you to understand how does this data is here, but you have to take into account that these values are the ones defined in ***identities*** and ***credentials*** properties defined in ***scopes.json*** previously mencioned before, so do not forget that. If any information is missing, check that file. Now you are prepared to develop your new fetcher and integrate your API.

### 4. Developing your specific fetcher

If you want more information, please click [here](https://github.com/governify/collector-events/blob/main/CONTRIBUTING.md) to see a full example assuming we are adding **Redmine** as a new source to Collector events.

---
