---
title: TPA Manager
description: A management system for Team Practice Agreements
hide_table_of_contents: false
sidebar_position: 1

---

# TPA Manager

---

## Overview

The [TPA Manager](https://github.com/governify/TPA-Manager/tree/course-creator-changes) is a web application service that allows users to navigate through their scope, in order to manage courses, Team Practices Agreements (TPAs), and TPA templates. It has been developed using Vue.js 3.

This service emerged to fulfill the need to manage the different courses and their associated projects in a visual way, while also allowing the management of TPA templates and TPAs associated in the infraestructure.

By default, it can be accessed through `https://tpa-manager[BLUEJAY_SERVICES_PREFIX][BLUEJAY_DNS_SUFFIX]` (e.g. https://tpa-manager.bluejay.governify.io) in case Bluejay is deployed in the cloud or by accessing to http://localhost:5173 if it is deployed locally.

## TPA Templates

The TPA Manager introduces the use of TPA Templates, which are designed to simplify and standardize the creation and management of these agreements, adapting them to the specific needs of each course or project. Their use allows administrators to save time and effort in the initial setup of TPAs.

**Structure:**
TPA templates have a similar structure  to a regular TPA, with two key modifications: a `templateId` field is added (which is used when creating an agreement using the template) and the `type` field is changed to `template`. These adaptations allow the template to be identified as a base model for generating new TPAs.

Templates are stored in the database of the [Registry service](https://docs.governify.io/development/services/registry). They are stored in a JSON format that contains the different templates available for use in the agreements. The file is structured as follows:

```json
{
    "id": "tpa-Bluejay-2024",
    "templateId": "template-showcase-v1-0-0",
    "version": "1.0.0",
    "type": "template",
    "context": {},
    "terms": {
        "metrics": {},
        "guarantees": {}
    }
}
```

Last but not least, the way a template should be named is `template-name-version`, with the version formatted as `vX-X-X`.

### Clone TPA Template

A key feature is the ability to clone templates, which is particularly useful for testing or making adjustments without affecting the agreements currently in use. Cloning allows users to experiment with different configurations and make changes as needed. However, templates can only be edited if they are not being used by any course; if a template is in use, its content can only be displayed, ensuring the integrity of active agreements.

<img alt="template cloned" src="/img/development/bluejay-only-services/tpa-manager/template-cloned.png" width="90%" />

## Authorization

Some infrastructure microservices require an authorization key in order to operate.
In this case, when you setup your Bluejay infrastructure you will need to add your auth key, which changes depending if your running the [Scopes Manager service](https://docs.governify.io/development/services/scopes-manager) on console -> `c025ff8502893fc6c5a87cf3febe4882` or on docker -> `bluejay-scopes-private-key`.

To add the authorization, simply open the settings speed dial and press 'Add Authorization'. This will save the authorization in the browser's local storage to maintain it persistently. You can also remove the authorization at any time through the speed dial.

<img alt="add auth" src="/img/development/bluejay-only-services/tpa-manager/add-auth.png" width="60%" />

## bluejayInfra.js file

A JavaScript file has been incorporated to be responsible for managing and serving to the Vue components the different routes of the microservices used in Bluejay.

For an efficient management of the state and reactivity of the application, a store has been created using Pinia, which is a state management library for Vue.js. The different URLs have been defined so that, if we have declared a specific URL in the environment variables file, it will be chosen; otherwise, the default URL will be used.

Then, in order to set Bluejay microservices URLs there are two options to do it: through the .env file or set by hand in the bluejayInfra file the urls to be used.

| Service | Environment variable  | Default value |
| ---- | --------------------- | ------------- |
| TPA Manager | - |  http://localhost:5173 |
| ASSETS_MANAGER_URL | process.env.ASSETS_MANAGER_URL | http://localhost:5200 |
| REGISTRY_URL | process.env.REGISTRY_URL | http://localhost:5400 |
| SCOPE_MANAGER_URL | process.env.SCOPE_MANAGER_URL | http://localhost:5700 |
| COLLECTOR_EVENTS_URL | process.env.COLLECTOR_EVENTS_URL | http://localhost:5500 |
| DASHBOARD_URL | process.env.DASHBOARD_URL | http://localhost:5600 |
| REPORTER_URL | process.env.REPORTER_URL | http://localhost:5300 |
