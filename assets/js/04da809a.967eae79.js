"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[578],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=o,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={title:"Kubernetes",description:"Kubernetes",sidebar_position:3,hide_table_of_contents:!1},l="Kubernetes Deployment",i={unversionedId:"deployment/kubernetes",id:"deployment/kubernetes",title:"Kubernetes",description:"Kubernetes",source:"@site/docs/deployment/kubernetes.md",sourceDirName:"deployment",slug:"/deployment/kubernetes",permalink:"/deployment/kubernetes",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/deployment/kubernetes.md",tags:[],version:"current",lastUpdatedBy:"JaviFdez7",lastUpdatedAt:1717658953,formattedLastUpdatedAt:"Jun 6, 2024",sidebarPosition:3,frontMatter:{title:"Kubernetes",description:"Kubernetes",sidebar_position:3,hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"Docker Compose (development)",permalink:"/deployment/docker-compose-local"},next:{title:"Architecture",permalink:"/development/architecture/intro"}},s={},u=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Infrastructure setup",id:"infrastructure-setup",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kubernetes-deployment"},"Kubernetes Deployment"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This guide will help you deploy Governify-Falcon in a Kubernetes cluster."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kubernetes cluster with HELM installed"),(0,o.kt)("li",{parentName:"ul"},"A domain with the ability to modify DNS records."),(0,o.kt)("li",{parentName:"ul"},"Ports 80, 443 open for the cluster.")),(0,o.kt)("h2",{id:"infrastructure-setup"},"Infrastructure setup"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create Namespace")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$    kubectl create namespace governify-falcon\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Install Contour")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$    kubectl apply -f https://projectcontour.io/quickstart/contour.yaml\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Wait a few minutes and get the Load Balancer IP Address")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$    (kubectl get -n projectcontour service envoy -o json) | jq -r '.status.loadBalancer.ingress[0].ip'\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Install CertManager")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$    kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.1.0/cert-manager.yaml\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Create a values.yaml file with the following content")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"    global:\n        node_env: production\n        gov_infrastructure: http://falcon-assets-manager/api/v1/public/infrastructure.yaml\n        services_prefix: .<infrastructure-prefix>\n        dns_suffix: .<your-DNS-zone>\n        login_user: governify-admin\n        login_password: governify-project\n    \n    assets_manager:\n        private_key: somerandomkey\n")),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"Install charts")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$    helm repo add governify https://governify.github.io/helm-charts\n$    helm repo update\n$    helm install -f values.yaml falcon governify/Governify-Falcon\n")),(0,o.kt)("p",null,"More information about the configuration options available for Governify-Falcon HELM chart can be found at our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/governify/helm-charts/tree/main/infrastructure/Governify-Falcon"},"HELM Charts repository"),"."))}d.isMDXComponent=!0}}]);