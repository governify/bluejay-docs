"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[332],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),d=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=d(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),m=d(r),c=a,g=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return r?n.createElement(g,o(o({ref:e},u),{},{components:r})):n.createElement(g,o({ref:e},u))}));function g(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[m]="string"==typeof t?t:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4604:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const l={title:"Infrastructure",description:"Infrastructure",sidebar_position:2,hide_table_of_contents:!0},o="Infrastructure",i={unversionedId:"infrastructure",id:"infrastructure",title:"Infrastructure",description:"Infrastructure",source:"@site/docs/infrastructure.md",sourceDirName:".",slug:"/infrastructure",permalink:"/infrastructure",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/infrastructure.md",tags:[],version:"current",lastUpdatedBy:"Manuel Otero Barbas\xe1n",lastUpdatedAt:1718271660,formattedLastUpdatedAt:"Jun 13, 2024",sidebarPosition:2,frontMatter:{title:"Infrastructure",description:"Infrastructure",sidebar_position:2,hide_table_of_contents:!0},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/"},next:{title:"Docker Compose (production)",permalink:"/deployment/docker-compose"}},p={},d=[],u={toc:d},m="wrapper";function s(t){let{components:e,...r}=t;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"infrastructure"},"Infrastructure"),(0,a.kt)("hr",null),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The infrastructure files are available in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/governify/assets-bluejay"},"Bluejay Assets Repository"))),(0,a.kt)("p",null,"The services of Bluejay Infrastructure are presented in the table below, along with their local ports, DNS, docker Image and GitHub repository."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Component"),(0,a.kt)("th",{parentName:"tr",align:null},"Local Port"),(0,a.kt)("th",{parentName:"tr",align:null},"DNS"),(0,a.kt)("th",{parentName:"tr",align:null},"Docker Image"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/governify/render"},"Render")),(0,a.kt)("td",{parentName:"tr",align:null},"5100"),(0,a.kt)("td",{parentName:"tr",align:null},"ui.",(0,a.kt)("em",{parentName:"td"},"[domain]")),(0,a.kt)("td",{parentName:"tr",align:null},"governify/render:<vX.X.X/develop>")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/governify/assets-manager"},"Assets")),(0,a.kt)("td",{parentName:"tr",align:null},"5200"),(0,a.kt)("td",{parentName:"tr",align:null},"assets.",(0,a.kt)("em",{parentName:"td"},"[domain]")),(0,a.kt)("td",{parentName:"tr",align:null},"governify/assets-manager:<vX.X.X/develop>")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/governify/reporter"},"Reporter")),(0,a.kt)("td",{parentName:"tr",align:null},"5300"),(0,a.kt)("td",{parentName:"tr",align:null},"reporter.",(0,a.kt)("em",{parentName:"td"},"[domain]")),(0,a.kt)("td",{parentName:"tr",align:null},"governify/reporter:<vX.X.X/develop>")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/governify/registry"},"Registry")),(0,a.kt)("td",{parentName:"tr",align:null},"5400"),(0,a.kt)("td",{parentName:"tr",align:null},"registry.",(0,a.kt)("em",{parentName:"td"},"[domain]")),(0,a.kt)("td",{parentName:"tr",align:null},"governify/registry:<vX.X.X/develop>")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/governify/dashboard"},"Dashboard")),(0,a.kt)("td",{parentName:"tr",align:null},"5600"),(0,a.kt)("td",{parentName:"tr",align:null},"dashboard.",(0,a.kt)("em",{parentName:"td"},"[domain]")),(0,a.kt)("td",{parentName:"tr",align:null},"governify/dashboard:<vX.X.X/develop>")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/governify/director"},"Director")),(0,a.kt)("td",{parentName:"tr",align:null},"5800"),(0,a.kt)("td",{parentName:"tr",align:null},"director.",(0,a.kt)("em",{parentName:"td"},"[domain]")),(0,a.kt)("td",{parentName:"tr",align:null},"governify/director:<vX.X.X/develop>")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/governify/scope-manager"},"Scopes")),(0,a.kt)("td",{parentName:"tr",align:null},"5700"),(0,a.kt)("td",{parentName:"tr",align:null},"scopes.",(0,a.kt)("em",{parentName:"td"},"[domain]")),(0,a.kt)("td",{parentName:"tr",align:null},"governify/scope-manager:<vX.X.X/develop>")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/governify/join-bluejay"},"Join")),(0,a.kt)("td",{parentName:"tr",align:null},"6100"),(0,a.kt)("td",{parentName:"tr",align:null},"join.",(0,a.kt)("em",{parentName:"td"},"[domain]")),(0,a.kt)("td",{parentName:"tr",align:null},"governify/join-bluejay:<vX.X.X/develop>")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/governify/TPA-Manager"},"TPA Manager")),(0,a.kt)("td",{parentName:"tr",align:null},"5173"),(0,a.kt)("td",{parentName:"tr",align:null},"tpa-manager.*","[domain]"),(0,a.kt)("td",{parentName:"tr",align:null},"governify/collector-events:<vX.X.X/develop>")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/governify/collector-events"},"Collector-events")),(0,a.kt)("td",{parentName:"tr",align:null},"5500"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"governify/collector-events:<vX.X.X/develop>")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DB-Mongo-Registry"),(0,a.kt)("td",{parentName:"tr",align:null},"5001"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"mongo")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DB-Influx-Reporter"),(0,a.kt)("td",{parentName:"tr",align:null},"5002"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"influxdb:1.8.4-alpine")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DB-Collector-Redis"),(0,a.kt)("td",{parentName:"tr",align:null},"5003"),(0,a.kt)("td",{parentName:"tr",align:null},"\u274c"),(0,a.kt)("td",{parentName:"tr",align:null},"redis")))))}s.isMDXComponent=!0}}]);