---
title: Kubernetes
description: Kubernetes
sidebar_position: 3 # Sets this doc to the first position in the sidebar
hide_table_of_contents: false
---

# Kubernetes Deployment Governify-Falcon

---

This guide will help you deploy Governify-Falcon in a Kubernetes cluster.

## Prerequisites

- Kubernetes cluster with HELM installed
- A domain with the ability to modify DNS records.
- Ports 80, 443 open for the cluster.

## Infrastructure setup

1. Create Namespace

    ```bin/bash
    kubectl create namespace governify-falcon
    ```

2. Install Contour

    ```bin/bash
    kubectl apply -f https://projectcontour.io/quickstart/contour.yaml
    ```

3. Wait a few minutes and get the Load Balancer IP Address

    ```bin/bash
    (kubectl get -n projectcontour service envoy -o json) | jq -r '.status.loadBalancer.ingress[0].ip'
    ```

4. Install CertManager

    ```bin/bash
    kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.1.0/cert-manager.yaml
    ```

5. Create a values.yaml file with the following content

    ```bin/bash
        global:
            node_env: production
            gov_infrastructure: http://falcon-assets-manager/api/v1/public/infrastructure.yaml
            services_prefix: .<infrastructure-prefix>
            dns_suffix: .<your-DNS-zone>
            login_user: governify-admin
            login_password: governify-project
        
        assets_manager:
            private_key: somerandomkey
    ```

6. Install charts

    ```bin/bash
    helm repo add governify https://governify.github.io/helm-charts
    helm repo update
    helm install -f values.yaml falcon governify/Governify-Falcon
    ```

More information about the configuration options available for Governify-Falcon HELM chart can be found at our [HELM Charts repository](https://github.com/governify/helm-charts/tree/main/infrastructure/Governify-Falcon).

## Deploying the system in a Kubernetes cluster Governify-Bluejay

:::caution
For development purposes it is more appropiate to use docker-compose due to its simplicity. Nevertheless, if the production environment is a Kubernetes cluster, it is recommended to test the system on this locally deployed cluster first.
:::

Governify provides Helm charts for deploying Bluejay services inside a Kubernetes cluster. The following steps describe how to locally deploy the infrastructure inside a development cluster (or a single-node cluster like minikube):

### Steps

**1.** Create Namespace

```bin/bash
kubectl create namespace governify-bluejay
```

**2.** Configure kubernetes for assigning NodePorts in range (3000-9000) by adding `--service-node-port-range=3000-6000` to the kubernetes kube-apiserver config file. If using docker-desktop [check this page](https://stackoverflow.com/questions/64758012/location-of-kubernetes-config-directory-with-docker-desktop-on-windows).

**3.** Create a values.yaml file with the following content

```yaml
    global:
        node_env: development
        gov_infrastructure: <assets_call_to_infrastructure-local.yaml>
        login_user: <username>
        login_password: <password>

    assets-manager:
        gov_infrastructure: <local_path_to_infrastructure-local.yaml>
        assets_repository: <repository_url> (defaults to current assets repository inside github governify organization)
        assets_repository_branch: <branch> (default: main)
```

**4.** Install charts

```bin/bash
helm repo add governify https://governify.github.io/helm-charts
helm repo update
helm install -f values.yaml <release_name> governify/<chart_name>
```

More information about the configuration options available for Governify-Bluejay HELM chart can be found at our [HELM Charts repository](https://github.com/governify/helm-charts/tree/main/infrastructure/Governify-Bluejay).
