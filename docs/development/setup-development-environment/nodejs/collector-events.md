---
title: Collector-Events
description: Collector-Events deployed locally
sidebar_position: 1 # Sets this doc to the first position in the sidebar
hide_table_of_contents: false
---

# Deploying Collector-Events with NodeJS

---

## Pre-requirements
You must have the system deployed with [Docker Compose](/development/setup-development-environment/docker-compose).

For the correct functioning of the Collector-Event microservice, it's also necessary to deploy the [`Scope-Manager`](/development/setup-development-environment/nodejs/scopes-manager) microservice with NodeJS.

## Develop a feature in Collector-Events

To develop a feature with `Collector-Events` is as simple as shutting the microservice's container down and then starting the microservice cloned from GitHub.

1. Stop the container with this command or using the docker desktop application UI:
```
docker stop bluejay-collector-events
```

2. Clone the microservice:
```
git clone https://github.com/governify/collector-events
```

3. Open the microservice and configure the .env file:
TODO

4. Install the dependencies and start the microservice:
```
npm i
node index
```

It will start in the same port as the container was and will be properly connected to the entire infrastructure.

## More information about Collector-Events
Visit the [governify documentation](https://docs.governify.io/development/services/collectors/collector-events) to learn more about how the `collector-events` works.

Visit the [`collector-events` repository documentation](https://github.com/governify/collector-events?tab=readme-ov-file#governify-events-collector) to learn more about how the `collector-events` works.



