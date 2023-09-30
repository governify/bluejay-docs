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
The `.env` file is used to configure environmental variables used in your specific deployment. The content of this file must be the following:
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
Generating a Github token is an essential step. With this key Blujay is able to communicate with the app to retrieve information about the repository that you want to audit. This token is not generated in any specific repo, it serves as a personal private API key in your account.
- Navigate to your github account and then go to  `Settings>Developer Settings` (at the end of the menu).
- Go to `Personal access tokens > Tokens (classic)`
- Click on `Generate new token > Generate new token (classic)` 
- The scopes you select are up to you, but you need at least repository access.
- Click on `Generate token` and make sure to copy the given key and paste it into `KEY_GITHUB` in the `.env` file.

## 3. Create scopes.json
Within the `assets/private/scope-manager` directory, you will discover a file named `scopes.json.example`. This file serves as a blueprint, guiding us in the creation of our custom `scopes.json`, which will be located within the same directory as the example. You can copy the following contents into your scopes file as a test.
```
{
    "development": [
        {
            "classId": "test",
            "identities": [],
            "credentials": [],
            "projects": [
                {
                    "name": "Bluejay test",
                    "projectId": "project01",
                    "owner": "governify",
                    "identities": [
                        {
                            "source": "github",
                            "repository": "bluejay-infrastructure",
                            "repoOwner": "governify"
                        }
                    ],
                    "members": [
                        {
                            "memberId": 1,
                            "identities": [
                                {
                                    "source": "github",
                                    "username": "<YourGHname>"
                                }
                            ],
                            "credentials": []
                        }
                    ],
                    "credentials": []
                }
            ]
        }
    ]
}
```
If you modify this file to add more projects or make any change, you will have to restart the `render` and `scope-manager` containers.

## 4. Deploy with Docker Compose
Now we can deploy the system with the following command:
```
docker-compose -f docker-bluejay/docker-compose-local.yaml --env-file .env up -d 
```

Navigate to localhost:5100 to access the main page of Bluejay. A prompt like the following will pop up in your browser, where have to input the `USER_RENDER` and `PASS_RENDER` values specified in the `.env` file:
![Login](../../static/img/deployment/docker-quickstart/login-render.png)
![BJ](../../static/img/deployment/docker-quickstart/render-bluejay.png)

Governify ecosystem with bluejay services should have been deployed in your machine.

To stop the containers use:
```
docker-compose -f docker-bluejay/docker-compose-local.yaml --env-file .env stop
``` 

You can easily restart them using:
```
docker-compose -f docker-bluejay/docker-compose-local.yaml --env-file .env start
``` 

If you made a change in the configuration you will have to re-compose the containers using `down`and then using `up` or `up -d` again:

```
docker-compose -f docker-bluejay/docker-compose-local.yaml --env-file .env down # stop and remove containers

docker-compose -f docker-bluejay/docker-compose-local.yaml --env-file .env up -d # deploy
``` 