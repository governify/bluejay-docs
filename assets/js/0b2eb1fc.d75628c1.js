"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[558],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,v=d["".concat(i,".").concat(u)]||d[u]||m[u]||a;return n?r.createElement(v,p(p({ref:t},c),{},{components:n})):r.createElement(v,p({ref:t},c))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:o,p[1]=l;for(var s=2;s<a;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1661:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={title:"Scope-Manager",description:"Scope-Manager deployed locally",sidebar_position:2,hide_table_of_contents:!1},p="Deploying Scope-Manager with NodeJS",l={unversionedId:"development/setup-development-environment/nodejs/scopes-manager",id:"development/setup-development-environment/nodejs/scopes-manager",title:"Scope-Manager",description:"Scope-Manager deployed locally",source:"@site/docs/development/setup-development-environment/nodejs/scopes-manager.md",sourceDirName:"development/setup-development-environment/nodejs",slug:"/development/setup-development-environment/nodejs/scopes-manager",permalink:"/development/setup-development-environment/nodejs/scopes-manager",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/development/setup-development-environment/nodejs/scopes-manager.md",tags:[],version:"current",lastUpdatedBy:"Manuel Otero Barbas\xe1n",lastUpdatedAt:1738412710,formattedLastUpdatedAt:"Feb 1, 2025",sidebarPosition:2,frontMatter:{title:"Scope-Manager",description:"Scope-Manager deployed locally",sidebar_position:2,hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"Collector-Events",permalink:"/development/setup-development-environment/nodejs/collector-events"},next:{title:"Create or Update TPA",permalink:"/development/extending-bluejay/custom-tasks/create-or-update-tpa"}},i={},s=[{value:"Pre-requirements",id:"pre-requirements",level:2},{value:"Develop a feature in Scope-Manager",id:"develop-a-feature-in-scope-manager",level:2}],c={toc:s},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploying-scope-manager-with-nodejs"},"Deploying Scope-Manager with NodeJS"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"pre-requirements"},"Pre-requirements"),(0,o.kt)("p",null,"You must have the system deployed with ",(0,o.kt)("a",{parentName:"p",href:"/development/setup-development-environment/docker-compose"},"Docker Compose"),"."),(0,o.kt)("h2",{id:"develop-a-feature-in-scope-manager"},"Develop a feature in Scope-Manager"),(0,o.kt)("p",null,"To develop a feature with ",(0,o.kt)("inlineCode",{parentName:"p"},"Scope-Manager")," is as simple as shutting the microservice's container down and then starting the microservice cloned from GitHub."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Stop the container with this command or using the docker desktop application UI:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker stop bluejay-scope-manager\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Clone the microservice:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git clone https://github.com/governify/scope-manager.git\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Install the dependencies and start the microservice:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm i\nnode index\n")),(0,o.kt)("p",null,"It will start in the same port as the container was and will be properly connected to the entire infrastructure."))}m.isMDXComponent=!0}}]);