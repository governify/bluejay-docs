---
title: Configuration
description: Configuration
sidebar_position: 1 # Sets this doc to the first position in the sidebar
hide_table_of_contents: false
---

# Configuration

---

Bluejay should be able to access team data. To achieve this, the API Keys for each team that will be tracked should be provided. There are 2 different files for configuring the system in order to start using it:

* `/.env`: This file contains the environment variables to configure the system, including the different API tokens, as mentioned in the Deployment section.
 
* `/assets/private/scope-manager/scopes.json`: The scope manager is the component serving the information about the projects. This file contains the different tools a team is using as well as information from the members and tokens to access that data.

## Environment File

Here are contained all configuaration variables. Enter here your tokens for the different APIs for the Event Collector to use it by default if it is not given for the project in the scope.json file.

## Scope File

:::info
You can find more information about Scopes file in the [Governify General Documentation](https://docs.governify.io/development/services/scopes-manager#scopes-file)
:::

This file contains all the information from the different courses, teams and members to be identified along the different tools. It is organized with a hierarchy as the following:
 * First it has a first array called development which contains the different classes. 
 * Each class has a projects array containing all the projects (teams) inside that course. 
 * Each project has a members array containing all the members inside that project.
 * Each of these objects (course, project, member) follows the same structure:

Inside each object there is two different arrays:
 * Identities is used to store the information that identifies that object in the different tools. 
 * Credentials have all the tokens needed to obtain information from those tools. 

This file needs to be filled up with the different teams and members for the system to start auditing them. Also any needed credential for each tool has to be inserted. If the tools are public, no token might be needed. In that case, mind the API rate limits. Heroku cannot work without a token. For default keys for not having to fill them in the scopes.json for each project, keep reading.

After modifiying this file, the Scope Manager needs to be restarted for it to serve the new scopes:

```
docker restart bluejay-scope-manager
```