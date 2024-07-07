"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[364],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>v});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=m(n),c=o,v=u["".concat(p,".").concat(c)]||u[c]||s[c]||a;return n?r.createElement(v,l(l({ref:t},d),{},{components:n})):r.createElement(v,l({ref:t},d))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3854:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=n(7462),o=(n(7294),n(3905));const a={title:"Setup Development Environment",description:"Setup Development Environment",sidebar_position:1,hide_table_of_contents:!1},l="Setup Development Environment",i={unversionedId:"development/setup-development-environment/intro",id:"development/setup-development-environment/intro",title:"Setup Development Environment",description:"Setup Development Environment",source:"@site/docs/development/setup-development-environment/intro.md",sourceDirName:"development/setup-development-environment",slug:"/development/setup-development-environment/intro",permalink:"/development/setup-development-environment/intro",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/development/setup-development-environment/intro.md",tags:[],version:"current",lastUpdatedBy:"JaviFdez7",lastUpdatedAt:1720380794,formattedLastUpdatedAt:"Jul 7, 2024",sidebarPosition:1,frontMatter:{title:"Setup Development Environment",description:"Setup Development Environment",sidebar_position:1,hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"Collector-events performance",permalink:"/development/architecture/collector-events-performance"},next:{title:"Docker Compose",permalink:"/development/setup-development-environment/docker-compose"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Infrastructure",id:"infrastructure",level:2}],d={toc:m},u="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"setup-development-environment"},"Setup Development Environment"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Currently, bluejay has 2 different configurations to be deployed on your machine. It is also possible to use a combination of both that helps expand the system. The 2 ways to deploy the system are the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/development/setup-development-environment/docker-compose"},"Docker Compose"),": The system is deployed completely with docker. This environment is useful to check how the final system would behave in production, since a similar configuration is used.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"/development/setup-development-environment/nodejs/intro"},"Nodejs"),": The system is deployed completely or partially in Nodejs. This environment is useful to expand the system with new functionalities."))),(0,o.kt)("h2",{id:"infrastructure"},"Infrastructure"),(0,o.kt)("p",null,"The infrastructure and microservices are already configured to work straight away and be connected (docker or node). All the infrastructure will be exposed so no docker network is needed. All the components will be deployed locally using the following ports:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"Port"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Render"),(0,o.kt)("td",{parentName:"tr",align:null},"5100")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Assets"),(0,o.kt)("td",{parentName:"tr",align:null},"5200")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Reporter"),(0,o.kt)("td",{parentName:"tr",align:null},"5300")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Registry"),(0,o.kt)("td",{parentName:"tr",align:null},"5400")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Collector-events"),(0,o.kt)("td",{parentName:"tr",align:null},"5500")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Dashboard"),(0,o.kt)("td",{parentName:"tr",align:null},"5600")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Scopes"),(0,o.kt)("td",{parentName:"tr",align:null},"5700")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Director"),(0,o.kt)("td",{parentName:"tr",align:null},"5800")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DB-Mongo-Registry"),(0,o.kt)("td",{parentName:"tr",align:null},"5001")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DB-Influx-Reporter"),(0,o.kt)("td",{parentName:"tr",align:null},"5002")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"DB-Collector-Redis"),(0,o.kt)("td",{parentName:"tr",align:null},"5003")))))}s.isMDXComponent=!0}}]);