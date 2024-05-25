"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[829],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):A(A({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(d,A(A({ref:t},p),{},{components:n})):r.createElement(d,A({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,A=new Array(o);A[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,A[1]=s;for(var i=2;i<o;i++)A[i]=n[i];return r.createElement.apply(null,A)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>A,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var r=n(7462),a=(n(7294),n(3905));const o={title:"Docker Compose (production)",description:"Docker Compose (production)",sidebar_position:1,hide_table_of_contents:!1},A="Docker Compose (production) Deployment",s={unversionedId:"deployment/docker-compose",id:"deployment/docker-compose",title:"Docker Compose (production)",description:"Docker Compose (production)",source:"@site/docs/deployment/docker-compose.md",sourceDirName:"deployment",slug:"/deployment/docker-compose",permalink:"/deployment/docker-compose",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/deployment/docker-compose.md",tags:[],version:"current",lastUpdatedBy:"Manuel Otero Barbas\xe1n",lastUpdatedAt:1716631360,formattedLastUpdatedAt:"May 25, 2024",sidebarPosition:1,frontMatter:{title:"Docker Compose (production)",description:"Docker Compose (production)",sidebar_position:1,hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"Infrastructure",permalink:"/infrastructure"},next:{title:"Docker Compose (development) Quickstart",permalink:"/deployment/docker-compose-local-quickstart"}},l={},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Infrastructure setup",id:"infrastructure-setup",level:2},{value:"Advanced Infrastructure Deploy",id:"advanced-infrastructure-deploy",level:2}],p={toc:i},u="wrapper";function c(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker-compose-production-deployment"},"Docker Compose (production) Deployment"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This guide deploys bluejay with the docker ecosystem and serve it by means of an nginx proxy."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Linux server with the following installed packages:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"docker"),(0,a.kt)("li",{parentName:"ul"},"docker-compose (version 1.27 or greater)"))),(0,a.kt)("li",{parentName:"ul"},"A domain with the ability to modify DNS records."),(0,a.kt)("li",{parentName:"ul"},"Ports 80, 443 open on the server. ")),(0,a.kt)("h2",{id:"infrastructure-setup"},"Infrastructure setup"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1.")," Create the following DNS A records, pointing to your server IP. If you are deploying locally you can add these to your hosts file pointing to your machine but it only will be accessible by you."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"ui.bluejay.",(0,a.kt)("em",{parentName:"li"},"[YourDomain]")),(0,a.kt)("li",{parentName:"ul"},"registry.bluejay.",(0,a.kt)("em",{parentName:"li"},"[YourDomain]")),(0,a.kt)("li",{parentName:"ul"},"reporter.bluejay.",(0,a.kt)("em",{parentName:"li"},"[YourDomain]")),(0,a.kt)("li",{parentName:"ul"},"dashboard.bluejay.",(0,a.kt)("em",{parentName:"li"},"[YourDomain]")),(0,a.kt)("li",{parentName:"ul"},"scopes.bluejay.",(0,a.kt)("em",{parentName:"li"},"[YourDomain]")),(0,a.kt)("li",{parentName:"ul"},"assets.bluejay.",(0,a.kt)("em",{parentName:"li"},"[YourDomain]")),(0,a.kt)("li",{parentName:"ul"},"director.bluejay.",(0,a.kt)("em",{parentName:"li"},"[YourDomain]")),(0,a.kt)("li",{parentName:"ul"},"join.bluejay.",(0,a.kt)("em",{parentName:"li"},"[YourDomain]"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2.")," Clone latest release of Falcon Infrastructure repository ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/governify/bluejay-infrastructure"},"Falcon Infrastructure"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/governify/bluejay-infrastructure.git\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3.")," Edit ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," located at the root of the folder. This file contains all the environmental variables for the system to work as intended. By now you should at least fill the first three variables concerning the deployment. Bear in mind that both ",(0,a.kt)("em",{parentName:"p"},"SERVICES_PREFIX")," and ",(0,a.kt)("em",{parentName:"p"},"DNS_SUFIX")," must start with a dot and end without it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# GENERAL (Mandatory for deployment)\nSERVICES_PREFIX=                    # Ex: .bluejay\nDNS_SUFFIX=                         # Ex: .bluejay\nSERVER_IP=                          # Ex: .bluejay\n\n# Infrastructure config file path. No need to be modified\nGOV_INFRASTRUCTURE=http://bluejay-assets-manager/api/v1/public/infrastructure.yaml\n\n# EVENT COLLECTOR\nKEY_GITHUB=                         # Token\nKEY_PIVOTAL=                        # Token\nKEY_HEROKU=                         # Token\nKEY_TRAVIS_PUBLIC=                  # Token\nKEY_TRAVIS_PRIVATE=                 # Token\nKEY_CODECLIMATE=                    # Token\nKEY_PSEUDONYMIZER=                  # Token\n\n# FRONTENDS ACCESS ACCOUNT\nUSER_RENDER=governify-admin         # UI Access user\nPASS_RENDER=governify-project       # UI Access pass\nUSER_ASSETS=governify-admin         # Assets Access user\nPASS_ASSETS=governify-project       # Assets Access pass\n\n# ASSETS MANAGER\nKEY_ASSETS_MANAGER_PRIVATE={{RANDOM_KEY1}}  # No need to modify\n\n# SCOPE MANAGER\nKEY_SCOPE_MANAGER={{RANDOM_KEY2}}           # No need to modify\n\n# COMPOSE CONFIG\nCOMPOSE_HTTP_TIMEOUT=200                    # No need to modify\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4.")," Deploy the system with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./utils/deploy.sh\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5.")," (Optional) When the deployment is done, create the SSL certificates for your deployment using ",(0,a.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Lets Encript"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./utils/init-letsencrypt.sh\n")),(0,a.kt)("p",null,"Governify ecosystem with bluejay services should have been deployed in your machine."),(0,a.kt)("h2",{id:"advanced-infrastructure-deploy"},"Advanced Infrastructure Deploy"),(0,a.kt)("p",null,"To start you should download the infrastructure:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"curl https://github.com/governify/bluejay-infrastructure/archive/2.2.0.zip -LO\n")),(0,a.kt)("p",null,"Unzip it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"unzip 2.2.0.zip\ncd /bluejay-infrastructure-2.2.0\n")),(0,a.kt)("p",null,"Now, open a terminal in the root folder and execute setupAdvanced.sh script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./setupAdvanced.sh \n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setup Wizard",src:n(8081).Z,width:"776",height:"170"})),(0,a.kt)("p",null,'You have to input "1" and press enter in order to go to the configuration menu.'),(0,a.kt)("p",null,"You should now follow the steps in order to accomplish the system deployment. This are the different options:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Setup Wizard",src:n(8198).Z,width:"776",height:"214"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"1. (Optional) Docker and Docker Compose installation (yum/AWS):")," When used it installs all the needed tools for the system to function  using yum package manager."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"2. Environment variables setup:")," It opens with ",(0,a.kt)("inlineCode",{parentName:"p"},"nano")," the file .env to enter the different environment variables the system needs to function properly. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# GENERAL (Mandatory for deployment)\nSERVICES_PREFIX=                    # Ex: .bluejay\nDNS_SUFFIX=                         # Ex: .domain.com\nSERVER_IP=                          # Ex: .54.165.211.5\n\n# EVENT COLLECTOR\nKEY_GITHUB=                         # Token\nKEY_PIVOTAL=                        # Token\nKEY_HEROKU=                         # Token\nKEY_TRAVIS_PUBLIC=                  # Token\nKEY_TRAVIS_PRIVATE=                 # Token\nKEY_CODECLIMATE=                    # Token\nKEY_PSEUDONYMIZER=                  # Token\n\n# FRONTENDS ACCESS ACCOUNT\nUSER_RENDER=governify-admin         # UI Access user\nPASS_RENDER=governify-project       # UI Access pass\nUSER_ASSETS=governify-admin         # Assets Access user\nPASS_ASSETS=governify-project       # Assets Access pass\n\n# ASSETS MANAGER\nKEY_ASSETS_MANAGER_PRIVATE={{RANDOM_KEY1}}  # No need to modify\n\n# SCOPE MANAGER\nKEY_SCOPE_MANAGER={{RANDOM_KEY2}}           # No need to modify\n\n# COMPOSE CONFIG\nCOMPOSE_HTTP_TIMEOUT=200 \n")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The first three variables are mandatory for the system to be deployed. If you also want to set up the default tokens for the different APIs you can do it now but is not necessary yet.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"3. (Optional) Automatic DNS records generation (DynaHosting):")," In case you have a Dyna Hosting account, you can generate DNS records using this option. When used you will be prompted to enter user and password and it will automatically create them using the domain entered previously in the .env file. If you prefer you can create your DNS records on your own using your provider."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"- ui.bluejay.*[YourDomain]*\n- registry.bluejay.*[YourDomain]*\n- reporter.bluejay.*[YourDomain]*\n- dashboard.bluejay.*[YourDomain]*\n- scopes.bluejay.*[YourDomain]*\n- assets.bluejay.*[YourDomain]*\n- director.bluejay.*[YourDomain]*\n- join.bluejay.*[YourDomain]*\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"4. System deployment:")," This option will pull the docker images and deploy the system. It will ask if you want to instantiate an nginx in the system to work as a reverse proxy. In case you want to use an existing reverse proxy in your machine you can disable it."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"5. (Optional) Lets-encrypt automatic certificates generation:")," It automatically generates free SSL certificates using ",(0,a.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encript")," authority."))}c.isMDXComponent=!0},8198:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"},8081:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);