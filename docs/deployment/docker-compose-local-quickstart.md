---
title: Docker Compose Local Quickstart
description: Docker Compose deployed locally
sidebar_position: 2 # Sets this doc to the first position in the sidebar
hide_table_of_contents: false
---

# Docker Compose Deployment - Quickstart version

---

This guide deploys bluejay with the docker ecosystem in a local/development environment. For a more advanced deployment please refer to [Docker Compose](./docker-compose.md).

## Prerequisites
- Windows OS with the following installed packages:
   - docker
   - docker-compose (version 1.27 or greater)
- Ports 80, 443 open on the server. 

## 1. Clone Repo
Clone latest release of [Bluejay Infrastructure repository](https://github.com/governify/bluejay-infrastructure):
```
git clone https://github.com/governify/bluejay-infrastructure.git
```
## 2. Add '.env' file
**3.** The `.env` file is used to configure environmental variables used in your specific deployment. The content of this file must be the following:
```
# GENERAL (Mandatory for deployment)

GOV_INFRASTRUCTURE=http://host.docker.internal:5200/api/v1/public/infrastructure-local.yaml 
# For service registry

NODE_ENV=development 
# Development environment


# Repository branch
ASSETS_REPOSITORY_BRANCH=develop 
# Repository of static files

# Influx database url
INFLUX_URL=http://host.docker.internal:5002

# Event collector
KEY_GITHUB=<key> 
# In the section below we will specify how to generate this token

# Frontends access account
USER_RENDER=bluejay
PASS_RENDER=bluejay
USER_ASSETS=bluejay
PASS_ASSETS=bluejay
# Here you can stablish the credentials to acces Bluejay's frontend

# Assets manager
KEY_ASSETS_MANAGER_PRIVATE=bluejay-assets-private-key
# Internal key

# Scope manager
KEY_SCOPE_MANAGER=bluejay-scopes-private-key
# Internal key

# Compose config
COMPOSE_HTTP_TIMEOUT=200
```
### 2.1 Create Github token

## 3. Create scopes.json

## 4. Deploy with Docker Compose
Now we can deploy the system with the following command:
```
docker-compose -f docker-bluejay/docker-compose-local.yaml --env-file .env up -d 
```

Navigate to localhost:5100 to access the main page of Bluejay. A prompt like the following will pop up in your browser, where have to input the `USER_RENDER` and `PASS_RENDER` values specified in the `.env` file:
![Login](../../static/img/deployment/docker-quickstart/login-render.png)

Governify ecosystem with bluejay services should have been deployed in your machine.