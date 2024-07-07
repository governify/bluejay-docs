"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={title:"Docker Compose",description:"Docker Compose deployed locally",sidebar_position:1,hide_table_of_contents:!1},i="Docker Compose Deployment",s={unversionedId:"development/setup-development-environment/docker-compose",id:"development/setup-development-environment/docker-compose",title:"Docker Compose",description:"Docker Compose deployed locally",source:"@site/docs/development/setup-development-environment/docker-compose.md",sourceDirName:"development/setup-development-environment",slug:"/development/setup-development-environment/docker-compose",permalink:"/development/setup-development-environment/docker-compose",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/development/setup-development-environment/docker-compose.md",tags:[],version:"current",lastUpdatedBy:"JaviFdez7",lastUpdatedAt:1720380794,formattedLastUpdatedAt:"Jul 7, 2024",sidebarPosition:1,frontMatter:{title:"Docker Compose",description:"Docker Compose deployed locally",sidebar_position:1,hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"Setup Development Environment",permalink:"/development/setup-development-environment/intro"},next:{title:"Nodejs",permalink:"/development/setup-development-environment/nodejs/intro"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"1. Clone Repo",id:"1-clone-repo",level:2},{value:"2. Add &#39;.env&#39; file",id:"2-add-env-file",level:2},{value:"2.1 Create Github token",id:"21-create-github-token",level:3},{value:"3. Deploy with Docker Compose",id:"3-deploy-with-docker-compose",level:2},{value:"4. Create scopes.json",id:"4-create-scopesjson",level:2},{value:"5. Useful commands and information",id:"5-useful-commands-and-information",level:3},{value:"6. Create a new TPA for the project",id:"6-create-a-new-tpa-for-the-project",level:2},{value:"7. Compute the TPA",id:"7-compute-the-tpa",level:2},{value:"8. Next Steps",id:"8-next-steps",level:2}],c={toc:p},d="wrapper";function u(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"docker-compose-deployment"},"Docker Compose Deployment"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"This guide deploys bluejay with the docker ecosystem in a local/development environment. During this guide the system is deployed with docker, a class is created, a TPA is created for that class and a calculation is carried out to display the first points on the graphs."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Windows OS, Linux or macOS with the following installed packages:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"docker"),(0,a.kt)("li",{parentName:"ul"},"docker-compose (version 1.27 or greater)"))),(0,a.kt)("li",{parentName:"ul"},"Ports 80, 443 open on the server."),(0,a.kt)("li",{parentName:"ul"},"In case you are running a linux machine, you need to asociate the host.docker.internal url to 172.17.0.1 (docker's gateway)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ssh"},"host-manager -add host.docker.internal 172.17.0.1\n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Most of Bluejay's Docker images are built using the linux/amd64 platform. If using a computer with an ARM processor (such as a ",(0,a.kt)("strong",{parentName:"p"},"Mac with Apple Silicon")," or a ",(0,a.kt)("strong",{parentName:"p"},"PC with Snapdragon X"),"), see more details in ",(0,a.kt)("a",{parentName:"p",href:"#3-deploy-with-docker-compose"},"section 3")," below. Please note that some Docker or OS updates may break compatibility with amd64 images.")),(0,a.kt)("h2",{id:"1-clone-repo"},"1. Clone Repo"),(0,a.kt)("p",null,"Clone latest release of ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/governify/bluejay-infrastructure"},"Bluejay Infrastructure repository"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/governify/bluejay-infrastructure.git\n")),(0,a.kt)("h2",{id:"2-add-env-file"},"2. Add '.env' file"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file is used to configure environmental variables used in your specific deployment. The content of this file must be the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# GENERAL (Mandatory for deployment)\n\nGOV_INFRASTRUCTURE=http://host.docker.internal:5200/api/v1/public/infrastructure-local.yaml \n# For service registry\n\nNODE_ENV=development \n# Development environment\n\n\n# Repository branch\nASSETS_REPOSITORY_BRANCH=develop \n# Repository of static files\n\n# Influx database url\nINFLUX_URL=http://host.docker.internal:5002\n\n# Event collector\nKEY_GITHUB=<key> \n# In the section below we will specify how to generate this token\n\n# Frontends access account\nUSER_RENDER=bluejay\nPASS_RENDER=bluejay\nUSER_ASSETS=bluejay\nPASS_ASSETS=bluejay\n# Here you can stablish the credentials to acces Bluejay's frontend\n\n# Assets manager\nKEY_ASSETS_MANAGER_PRIVATE=bluejay-assets-private-key\n# Internal key\n\n# Scope manager\nKEY_SCOPE_MANAGER=bluejay-scopes-private-key\n# Internal key\n\n# Compose config\nCOMPOSE_HTTP_TIMEOUT=200\n")),(0,a.kt)("h3",{id:"21-create-github-token"},"2.1 Create Github token"),(0,a.kt)("p",null,"Generating a Github token is an essential step. With this key Blujay is able to communicate with the app to retrieve information about the repository that you want to audit. This token is not generated in any specific repo, it serves as a personal private API key in your account."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Navigate to your github account and then go to  ",(0,a.kt)("inlineCode",{parentName:"li"},"Settings>Developer Settings")," (at the end of the menu)."),(0,a.kt)("li",{parentName:"ul"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Personal access tokens > Tokens (classic)")),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Generate new token > Generate new token (classic)")," "),(0,a.kt)("li",{parentName:"ul"},"The scopes you select are up to you, but you need at least ",(0,a.kt)("strong",{parentName:"li"},"repository"),", ",(0,a.kt)("strong",{parentName:"li"},"project")," and ",(0,a.kt)("strong",{parentName:"li"},"user")," access."),(0,a.kt)("li",{parentName:"ul"},"Click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Generate token")," and make sure to copy the given key and paste it into ",(0,a.kt)("inlineCode",{parentName:"li"},"KEY_GITHUB")," in the ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file.")),(0,a.kt)("h2",{id:"3-deploy-with-docker-compose"},"3. Deploy with Docker Compose"),(0,a.kt)("p",null,"Now we can deploy the system with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker-compose -f docker-bluejay/docker-compose-local.yaml --env-file .env up -d \n")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If using a computer with an ARM processor (such as a ",(0,a.kt)("strong",{parentName:"p"},"Mac with Apple Silicon")," or a ",(0,a.kt)("strong",{parentName:"p"},"PC with Snapdragon X"),"), modify the ",(0,a.kt)("inlineCode",{parentName:"p"},"version")," in the docker-compose-local.yaml file to ",(0,a.kt)("inlineCode",{parentName:"p"},"2.4")," and add ",(0,a.kt)("inlineCode",{parentName:"p"},"platform: linux/amd64")," to each service that fails to launch. Alternatively, set the environment variable ",(0,a.kt)("inlineCode",{parentName:"p"},"DOCKER_DEFAULT_PLATFORM")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"linux/amd64"),".")),(0,a.kt)("p",null,"Navigate to localhost:5100 to access the main page of Bluejay. A prompt like the following will pop up in your browser, where have to input the ",(0,a.kt)("inlineCode",{parentName:"p"},"USER_RENDER")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"PASS_RENDER")," values specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file:\n",(0,a.kt)("img",{alt:"Login",src:n(8281).Z,width:"395",height:"278"})),(0,a.kt)("p",null,"Governify ecosystem with bluejay services should have been deployed in your machine."),(0,a.kt)("h2",{id:"4-create-scopesjson"},"4. Create scopes.json"),(0,a.kt)("p",null,"Within the ",(0,a.kt)("inlineCode",{parentName:"p"},"assets/private/scope-manager")," directory, you will discover a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"scopes.json.example"),". This file serves as a blueprint, guiding us in the creation of our custom ",(0,a.kt)("inlineCode",{parentName:"p"},"scopes.json"),", which will be located within the same directory as the example. You can copy the following contents into your scopes file as a test, although the ",(0,a.kt)("inlineCode",{parentName:"p"},"scopes.json.example")," file already includes this content. We will use a test repository to audit our first project and which you can find on github: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/governify/bluejay-showcase"},"bluejay-showcase")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "development": [\n        {\n            "classId": "showcase",\n            "identities": [],\n            "credentials": [],\n            "projects": [\n                {\n                    "name": "bluejay-showcase",\n                    "owner": "L2",\n                    "teamId": "08",\n                    "projectId": "showcase-GH-governify_bluejay-showcase",\n                    "notifications": {\n                        "email": ""\n                    },\n                    "credentials": [],\n                    "identities": [\n                        {\n                            "source": "github",\n                            "repository": "bluejay-showcase",\n                            "repoOwner": "governify"\n                        }\n                    ],\n                    "members": [\n                        {\n                            "memberId": "Javi_Fdez",\n                            "identities": [\n                                {\n                                    "source": "github",\n                                    "username": "JaviFdez7"\n                                }\n                            ],\n                            "credentials": []\n                        },\n                        {\n                            "memberId": "Pablo_Fdez",\n                            "identities": [\n                                {\n                                    "source": "github",\n                                    "username": "pafmon"\n                                }\n                            ],\n                            "credentials": []\n                        }\n                    ]\n                }\n            ]\n        }\n    ]\n}\n')),(0,a.kt)("p",null,"The scope directory should look like this:\n",(0,a.kt)("img",{alt:"scopes.json",src:n(9784).Z,width:"1920",height:"1030"})),(0,a.kt)("p",null,"Now you have to restart the ",(0,a.kt)("inlineCode",{parentName:"p"},"scope-manager")," container in docker. Once restarted you will be able to view the showcase project in the user interface\n",(0,a.kt)("img",{alt:"BJ",src:n(1705).Z,width:"1465",height:"797"})),(0,a.kt)("h3",{id:"5-useful-commands-and-information"},"5. Useful commands and information"),(0,a.kt)("p",null,"If you modify the scopes.json to add more projects or make any change after deploying the ecosystem, you will have to restart the ",(0,a.kt)("inlineCode",{parentName:"p"},"scope-manager")," container."),(0,a.kt)("p",null,"To stop the containers use:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-bluejay/docker-compose-local.yaml --env-file .env stop\n")),(0,a.kt)("p",null,"You can easily restart them using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-bluejay/docker-compose-local.yaml --env-file .env start\n")),(0,a.kt)("p",null,"If you made a change in the configuration you will have to re-compose the containers using ",(0,a.kt)("inlineCode",{parentName:"p"},"down"),"and then using ",(0,a.kt)("inlineCode",{parentName:"p"},"up")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"up -d")," again:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose -f docker-bluejay/docker-compose-local.yaml --env-file .env down # stop and remove containers\n\ndocker-compose -f docker-bluejay/docker-compose-local.yaml --env-file .env up -d # deploy\n")),(0,a.kt)("h2",{id:"6-create-a-new-tpa-for-the-project"},"6. Create a new TPA for the project"),(0,a.kt)("p",null,"The TPA you are going to create provides information about the number of issues in progress that the members of the repository have in the project. You can find the complete TPA in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/governify/zoo/blob/main/bluejay/tpa/showcase/v1.1/tpa-showcase-v1.1.json"},"zoo repository"),"."),(0,a.kt)("p",null,"In the user interface, click on the project's Create TPA button located under Other Projects\n",(0,a.kt)("img",{alt:"Create-TPA",src:n(8080).Z,width:"1812",height:"883"})),(0,a.kt)("p",null,"You have now created the TPA for the test project. This is what you will see in the user interface. It is time to compute this TPA to see how the work team is performing."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Created-TPA",src:n(7893).Z,width:"1817",height:"867"})),(0,a.kt)("h2",{id:"7-compute-the-tpa"},"7. Compute the TPA"),(0,a.kt)("p",null,"From the user interface, we click on the TPA button in the project and access the TPA details. In this new menu we click on Calculate Metrics. We enter the time and date you are currently on (take into account the time zone and enter exactly 1 hour (59 minutes and 59 seconds) for this test) and click on compute."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Calculate-metrics",src:n(3273).Z,width:"1833",height:"862"})),(0,a.kt)("p",null," Now you must wait about 10 seconds or access the reporter logs, which will notify you when the elements have been inserted into the graphs."),(0,a.kt)("p",null,"Then access the dashboard with the following credentials:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"User: ",(0,a.kt)("strong",{parentName:"li"},"governify-admin")),(0,a.kt)("li",{parentName:"ul"},"Password: ",(0,a.kt)("strong",{parentName:"li"},"governify-project")," ")),(0,a.kt)("p",null,"And see the information that has been generated according to the data from the github repository"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"grafana-points",src:n(9661).Z,width:"1746",height:"641"})),(0,a.kt)("h2",{id:"8-next-steps"},"8. Next Steps"),(0,a.kt)("p",null,"For more information on how a TPA works, visit our documentation on ",(0,a.kt)("a",{parentName:"p",href:"/customization/agreement-modeling/team-practices-agreements"},"TPA configurations"),"."),(0,a.kt)("p",null,"If you want to know the complete architecture of the ecosystem, visit the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.governify.io/architecture/intro"},"governify architecture documentation"),"."),(0,a.kt)("p",null,"If you find any errors or want to propose any improvements to the documentation, follow this ",(0,a.kt)("a",{parentName:"p",href:"https://docs.governify.io/development/contributing/contributing-to-docs"},"contribution guide")))}u.isMDXComponent=!0},3273:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/calculate-metrics-258d2ea1b01cc5b0d031fcfd0eff9d4c.png"},8080:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/create-tpa-a76cfa33d1c0fd73b368e097554e9f02.png"},7893:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/created-tpa-1dd5ddec8ef848c6831c5a7f8c851901.png"},9661:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/grafana-points-2f114b41f458579ddad5dacc2272dfc4.png"},8281:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/login-render-f0e0d06929064c7faa96ee3411493789.png"},1705:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/render-bluejay-0c105eedbb4d0f84109054caf6c7d332.png"},9784:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/scopes-baf296b2b7972e46f6d3b7b26f6679ee.png"}}]);