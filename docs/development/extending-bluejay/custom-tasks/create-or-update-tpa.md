---
title: Create or Update TPA 
description: Create or Update TPA 
sidebar_position: 4 # Sets this doc to the first position in the sidebar
hide_table_of_contents: false
---

# Update TPA for a class

---

Bluejay allows you to create new TPAs ​​for uncreated projects from templates or update the TPAs ​​of projects that have already been created.

For this, the TPA creation or update script is used. This script allows you to do 2 actions:

- **Create a tpa for an uncreated project** from a template.
- **Update the TPAs of a set of projects** that must include a given chain fragment. All those that meet this criterion will be updated with the TPA from the specified template.

This script is one of the [Custom Tasks of Extending Governify](https://docs.governify.io/development/extending-governify/custom-tasks), and it is stored within the assets-bluejay repository [(link)](https://github.com/governify/assets-bluejay/blob/main/public/director/tasks/utils/createOrUpdateClassTPA/script.js).

In this document, we will discuss how to load, configure, and run the script from the user interface. If you want to see the inner workings of this script, we will provide an explanation of the technical details in the last section.

## Load Optimize Calculation Period

1. Go to  ***ui.bluejay.[YourDomain]***
2. Click on Admin UI
3. Click on the Task Runner tab
4. Open the dropdown and select **createOrUpdateClassTPA.**

![load script](/img/development/custom-tasks/createUpdateTPA/load-script.png)

## Configure the script

- **template**: *string*.
    > A string representing the TPA template to use. This template must be stored in the assets-manager, within public/renders/tpa. The string will be the name of the file without including the .json ending.

- **mode**: *string*.
    > A string representing replace or create, depending on whether we want to replace a TPA for an already created project or create a TPA for an uncreated project.

- **agreementId**: *string*.
    > A string representing the projectId of the project that you want to update or create. In case of replacement, a regexp is used and all projects that comply with the chain will be updated with the new TPA. In case of creating, the specific projectId of the project must be entered.

- **classId**: *string*.
    > Only used in create. A string representing the classId of the class to which the project we want to create belongs.

### Configuration example

#### Replace

Replacing the TPA of all projects that contain "showcase" in their projectId with the template called "template".

```json
{
  "template": "template",
  "mode": "replace",
  "agreementId": "showcase"
}
```

#### Create

Creating a new TPA with the template called "template" for the project with projectId "showcase-GH-governify_bluejay-showcase" belonging to the class with classId "showcase".

```json
{
  "template": "template",
  "mode": "create",
  "agreementId": "showcase-GH-governify_bluejay-showcase",
  "classId": "showcase"
}
```

## Run the script

**Click run** and you will see the results in the log of **Result.json.**

![load script](/img/development/custom-tasks/createUpdateTPA/result.png)

:::info bear in mind
- You will be notified with an error if any field is wrong or with a success message if it has been executed correctly.
:::

---

## Technical details

This section explains line by line the **createOrUpdateClassTPA** [script.js](https://github.com/governify/assets-bluejay/blob/main/public/director/tasks/utils/createOrUpdateClassTPA/script.js).

**Imports:** axios and governify commons to be able to make requests to the endpoints.

```js showLineNumbers
"use strict";
const governify = require('governify-commons');
const axios = require('axios');
```

**Checks:** Checking that all specified parameters are correct.

```js showLineNumbers
module.exports.main = async (config) => {

    // Checkers
    if (!config.template) return "Missing template parameter";
    if (!config.agreementId) return "Missing agreementId parameter";
    if (!config.mode) return "Missing mode parameter";
    if (config.mode === "create" && !config.classId) return "Missing classId parameter for create mode";

    const assetsUrl = `${governify.infrastructure.getServiceURL("internal.assets")}/api/v1/public/renders/tpa/`;
    const registryUrl = `${governify.infrastructure.getServiceURL("internal.registry")}/api/v6/agreements`;
    const templateUrl = (config.template.startsWith("http") ? "" : assetsUrl) + (config.template.includes(".json") ? config.template : `${config.template}.json`);

    const template = await axios.get(templateUrl).then(res => res.data).catch(() => {});
    if (!template) return "Error getting template file";
```

**Creating or Updating the TPA:** creates or replaces the TPA using the specified template for the indicated project or projects.

```js showLineNumbers
    if (config.mode === "create") {
        const tpa = JSON.stringify(template).replace(/1010101010/g, config.agreementId).replace(/2020202020/g, config.classId);
        return await axios.post(`${registryUrl}`, JSON.parse(tpa)).then(() => "Agreement created").catch(() => "Error creating agreement");
    } else if (config.mode === "replace") {
        const tpas = await axios.get(`${registryUrl}`).then(res => res.data?.filter(t => new RegExp(config.agreementId).test(t.id)) ?? []).catch(() => []);
        const errors = [];

        for (const tpa of tpas) {
            await axios.delete(`${registryUrl}/${tpa.id}`).then(() => {
                const tpaId = tpa.id.replace("tpa-", "");
                const classId = tpa.context.definitions.scopes.development.class.default;
                const newTpa = JSON.parse(JSON.stringify(template).replace(/1010101010/g, tpaId).replace(/2020202020/g, classId));
                return axios.post(`${registryUrl}`, newTpa).catch(() => errors.push(`Error on creation while replacing agreement ${tpa.id}`));
            }).catch(() => errors.push(`Error on deletion while replacing agreement ${tpa.id}`));            
        }

        if (errors.length > 0) return "ERRORS:\n" + errors.join("\n");
        else return "Agreements replaced";

    } else {
        return "Invalid mode parameter (create|replace)";
    }
}
```
