---
title: Scope-Manager
description: Scope-Manager deployed locally
sidebar_position: 2 # Sets this doc to the first position in the sidebar
hide_table_of_contents: false
---

# Deploying Scope-Manager with NodeJS

---


## Pre-requirements
You must have the system deployed with [Docker Compose](/development/setup-development-environment/docker-compose).

## Develop a feature in Scope-Manager

To develop a feature with `Scope-Manager` is as simple as shutting the microservice's container down and then starting the microservice cloned from GitHub.

1. Stop the container with this command or using the docker desktop application UI:
```
docker stop bluejay-scope-manager
```

2. Clone the microservice:
```
git clone https://github.com/governify/scope-manager.git
```

3. Install the dependencies and start the microservice:
```
npm i
node index
```

It will start in the same port as the container was and will be properly connected to the entire infrastructure.



