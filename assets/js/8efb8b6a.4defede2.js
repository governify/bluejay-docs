"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>f,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||d[p]||r;return n?o.createElement(m,a(a({ref:t},f),{},{components:n})):o.createElement(m,a({ref:t},f))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9055:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const r={title:"Configuration",description:"Configuration",sidebar_position:1,hide_table_of_contents:!1},a="Configuration",s={unversionedId:"customization/configuration",id:"customization/configuration",title:"Configuration",description:"Configuration",source:"@site/docs/customization/configuration.md",sourceDirName:"customization",slug:"/customization/configuration",permalink:"/customization/configuration",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/customization/configuration.md",tags:[],version:"current",lastUpdatedBy:"JaviFdez7",lastUpdatedAt:1735410099,formattedLastUpdatedAt:"Dec 28, 2024",sidebarPosition:1,frontMatter:{title:"Configuration",description:"Configuration",sidebar_position:1,hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"Collecting New Metrics",permalink:"/development/extending-bluejay/collecting-new-metrics"},next:{title:"Dashboards",permalink:"/customization/dashboards"}},l={},c=[{value:"Environment File",id:"environment-file",level:2},{value:"Scope File",id:"scope-file",level:2}],f={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(u,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration"},"Configuration"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Bluejay should be able to access team data. To achieve this, the API Keys for each team that will be tracked should be provided. There are 2 different files for configuring the system in order to start using it:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/.env"),": This file contains the environment variables to configure the system, including the different API tokens, as mentioned in the Deployment section."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"/assets/private/scope-manager/scopes.json"),": The scope manager is the component serving the information about the projects. This file contains the different tools a team is using as well as information from the members and tokens to access that data.")),(0,i.kt)("h2",{id:"environment-file"},"Environment File"),(0,i.kt)("p",null,"Here are contained all configuaration variables. Enter here your tokens for the different APIs for the Event Collector to use it by default if it is not given for the project in the scope.json file."),(0,i.kt)("h2",{id:"scope-file"},"Scope File"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can find more information about Scopes file in the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.governify.io/development/services/scopes-manager#scopes-file"},"Governify General Documentation"))),(0,i.kt)("p",null,"This file contains all the information from the different courses, teams and members to be identified along the different tools. It is organized with a hierarchy as the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"First it has a first array called development which contains the different classes. "),(0,i.kt)("li",{parentName:"ul"},"Each class has a projects array containing all the projects (teams) inside that course. "),(0,i.kt)("li",{parentName:"ul"},"Each project has a members array containing all the members inside that project."),(0,i.kt)("li",{parentName:"ul"},"Each of these objects (course, project, member) follows the same structure:")),(0,i.kt)("p",null,"Inside each object there is two different arrays:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Identities is used to store the information that identifies that object in the different tools. "),(0,i.kt)("li",{parentName:"ul"},"Credentials have all the tokens needed to obtain information from those tools. ")),(0,i.kt)("p",null,"This file needs to be filled up with the different teams and members for the system to start auditing them. Also any needed credential for each tool has to be inserted. If the tools are public, no token might be needed. In that case, mind the API rate limits. Heroku cannot work without a token. For default keys for not having to fill them in the scopes.json for each project, keep reading."),(0,i.kt)("p",null,"After modifiying this file, the Scope Manager needs to be restarted for it to serve the new scopes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"docker restart bluejay-scope-manager\n")))}d.isMDXComponent=!0}}]);