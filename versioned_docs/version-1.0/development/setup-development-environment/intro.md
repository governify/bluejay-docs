---
title: Setup Development Environment
description: Setup Development Environment
sidebar_position: 1 # Sets this doc to the first position in the sidebar
hide_table_of_contents: false
---

# Setup Development Environment

---

## Overview

Currently, bluejay has 2 different configurations to be deployed on your machine. It is also possible to use a combination of both that helps expand the system. The 2 ways to deploy the system are the following:

- [Docker Compose](/development/setup-development-environment/docker-compose): The system is deployed completely with docker. This environment is useful to check how the final system would behave in production, since a similar configuration is used.

- [Nodejs](/development/setup-development-environment/nodejs/intro): The system is deployed completely or partially in Nodejs. This environment is useful to expand the system with new functionalities.

## Infrastructure

The infrastructure and microservices are already configured to work straight away and be connected (docker or node). All the infrastructure will be exposed so no docker network is needed. All the components will be deployed locally using the following ports:

| Component          | Port        |
|--------------------|-------------|
| Render             | 5100        |
| Assets             | 5200        |
| Reporter           | 5300        |
| Registry           | 5400        |
| Collector-events   | 5500        |
| Dashboard          | 5600        |
| Scopes             | 5700        |
| Director           | 5800        |
| DB-Mongo-Registry  | 5001        |
| DB-Influx-Reporter | 5002        |
| DB-Collector-Redis | 5003        |
