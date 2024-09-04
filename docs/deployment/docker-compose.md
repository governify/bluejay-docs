---
title: Docker Compose
description: Docker Compose
sidebar_position: 1 # Sets this doc to the first position in the sidebar
hide_table_of_contents: false
---

# Docker Compose Production Deployment

---

This guide deploys bluejay with the docker ecosystem and serve it by means of an nginx proxy.

## Prerequisites
- Linux server with the following installed packages:
   - docker
   - docker-compose (version 1.27 or greater)
- A domain with the ability to modify DNS records.
- Ports 80, 443 open on the server. 

## Infrastructure setup

**1.** Create the following DNS A records, pointing to your server IP. If you are deploying locally you can add these to your hosts file pointing to your machine but it only will be accessible by you.

- ui.bluejay.*[YourDomain]*
- registry.bluejay.*[YourDomain]*
- reporter.bluejay.*[YourDomain]*
- dashboard.bluejay.*[YourDomain]*
- scopes.bluejay.*[YourDomain]*
- assets.bluejay.*[YourDomain]*
- director.bluejay.*[YourDomain]*
- join.bluejay.*[YourDomain]*

**2.** Clone latest release of Bluejay Infrastructure repository [Bluejay Infrastructure](https://github.com/governify/bluejay-infrastructure):
```
git clone https://github.com/governify/bluejay-infrastructure.git
```

**3.** Edit `.env` located at the root of the folder. This file contains all the environmental variables for the system to work as intended. By now you should at least fill the first three variables concerning the deployment. Bear in mind that both *SERVICES_PREFIX* and *DNS_SUFIX* must start with a dot and end without it.
```yaml
# GENERAL (Mandatory for deployment)
SERVICES_PREFIX=                    # Ex: .bluejay
DNS_SUFFIX=                         # Ex: .bluejay
SERVER_IP=                          # Ex: .bluejay

# Infrastructure config file path. No need to be modified
GOV_INFRASTRUCTURE=http://bluejay-assets-manager/api/v1/public/infrastructure.yaml

# EVENT COLLECTOR
KEY_GITHUB=                         # Token
KEY_PIVOTAL=                        # Token
KEY_HEROKU=                         # Token
KEY_TRAVIS_PUBLIC=                  # Token
KEY_TRAVIS_PRIVATE=                 # Token
KEY_CODECLIMATE=                    # Token
KEY_PSEUDONYMIZER=                  # Token

# FRONTENDS ACCESS ACCOUNT
USER_RENDER=governify-admin         # UI Access user
PASS_RENDER=governify-project       # UI Access pass
USER_ASSETS=governify-admin         # Assets Access user
PASS_ASSETS=governify-project       # Assets Access pass

# ASSETS MANAGER
KEY_ASSETS_MANAGER_PRIVATE={{RANDOM_KEY1}}  # No need to modify

# SCOPE MANAGER
KEY_SCOPE_MANAGER={{RANDOM_KEY2}}           # No need to modify

# COMPOSE CONFIG
COMPOSE_HTTP_TIMEOUT=200                    # No need to modify
```

**4.** Deploy the system with the following command:
```bash
./utils/deploy.sh
```

**5.** (Optional) When the deployment is done, create the SSL certificates for your deployment using [Lets Encript](https://letsencrypt.org/):
```bash
./utils/init-letsencrypt.sh
```

Governify ecosystem with bluejay services should have been deployed in your machine.

## Advanced Infrastructure Deploy
To start you should download the infrastructure:
```bash
curl https://github.com/governify/bluejay-infrastructure/archive/2.2.0.zip -LO
```

Unzip it:
``` bash
unzip 2.2.0.zip
cd /bluejay-infrastructure-2.2.0
``` 

Now, open a terminal in the root folder and execute setupAdvanced.sh script:

```bash
./setupAdvanced.sh 
```
![Setup Wizard](/img/deployment/setup_wizard_main.png)

You have to input "1" and press enter in order to go to the configuration menu.

You should now follow the steps in order to accomplish the system deployment. This are the different options:

![Setup Wizard](/img/deployment/setup_wizard_configure.png)
    
**1. (Optional) Docker and Docker Compose installation (yum/AWS):** When used it installs all the needed tools for the system to function  using yum package manager.

**2. Environment variables setup:** It opens with `nano` the file .env to enter the different environment variables the system needs to function properly. 
```yaml
# GENERAL (Mandatory for deployment)
SERVICES_PREFIX=                    # Ex: .bluejay
DNS_SUFFIX=                         # Ex: .domain.com
SERVER_IP=                          # Ex: .54.165.211.5

# EVENT COLLECTOR
KEY_GITHUB=                         # Token
KEY_PIVOTAL=                        # Token
KEY_HEROKU=                         # Token
KEY_TRAVIS_PUBLIC=                  # Token
KEY_TRAVIS_PRIVATE=                 # Token
KEY_CODECLIMATE=                    # Token
KEY_PSEUDONYMIZER=                  # Token

# FRONTENDS ACCESS ACCOUNT
USER_RENDER=governify-admin         # UI Access user
PASS_RENDER=governify-project       # UI Access pass
USER_ASSETS=governify-admin         # Assets Access user
PASS_ASSETS=governify-project       # Assets Access pass

# ASSETS MANAGER
KEY_ASSETS_MANAGER_PRIVATE={{RANDOM_KEY1}}  # No need to modify

# SCOPE MANAGER
KEY_SCOPE_MANAGER={{RANDOM_KEY2}}           # No need to modify

# COMPOSE CONFIG
COMPOSE_HTTP_TIMEOUT=200 
```

:::note
The first three variables are mandatory for the system to be deployed. If you also want to set up the default tokens for the different APIs you can do it now but is not necessary yet.
:::

**3. (Optional) Automatic DNS records generation (DynaHosting):** In case you have a Dyna Hosting account, you can generate DNS records using this option. When used you will be prompted to enter user and password and it will automatically create them using the domain entered previously in the .env file. If you prefer you can create your DNS records on your own using your provider.

```
- ui.bluejay.*[YourDomain]*
- registry.bluejay.*[YourDomain]*
- reporter.bluejay.*[YourDomain]*
- dashboard.bluejay.*[YourDomain]*
- scopes.bluejay.*[YourDomain]*
- assets.bluejay.*[YourDomain]*
- director.bluejay.*[YourDomain]*
- join.bluejay.*[YourDomain]*
```

**4. System deployment:** This option will pull the docker images and deploy the system. It will ask if you want to instantiate an nginx in the system to work as a reverse proxy. In case you want to use an existing reverse proxy in your machine you can disable it.

**5. (Optional) Lets-encrypt automatic certificates generation:** It automatically generates free SSL certificates using [Let's Encript](https://letsencrypt.org/) authority.