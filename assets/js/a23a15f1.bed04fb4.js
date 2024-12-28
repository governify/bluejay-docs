"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[12],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(o),m=r,h=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return o?n.createElement(h,i(i({ref:t},u),{},{components:o})):n.createElement(h,i({ref:t},u))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3130:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const a={title:"Collector-events performance",description:"Collector-events performance",hide_table_of_contents:!1,sidebar_position:1},i="Collector-events performance",l={unversionedId:"development/architecture/collector-events-performance",id:"development/architecture/collector-events-performance",title:"Collector-events performance",description:"Collector-events performance",source:"@site/docs/development/architecture/collector-events-performance.md",sourceDirName:"development/architecture",slug:"/development/architecture/collector-events-performance",permalink:"/development/architecture/collector-events-performance",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/development/architecture/collector-events-performance.md",tags:[],version:"current",lastUpdatedBy:"JaviFdez7",lastUpdatedAt:1735410099,formattedLastUpdatedAt:"Dec 28, 2024",sidebarPosition:1,frontMatter:{title:"Collector-events performance",description:"Collector-events performance",hide_table_of_contents:!1,sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Architecture",permalink:"/development/architecture/intro"},next:{title:"Bluejay only Services",permalink:"/development/bluejay-only-services/intro"}},s={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Calculation time of a repository with High activity vs Low activity",id:"calculation-time-of-a-repository-with-high-activity-vs-low-activity",level:3},{value:"Performance",id:"performance",level:2},{value:"Collector-events slowdown",id:"collector-events-slowdown",level:3},{value:"Reason on the cause of collector-events slowdown",id:"reason-on-the-cause-of-collector-events-slowdown",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"collector-events-performance"},"Collector-events performance"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"These conclusions are the result of two performance analysis that have been carried out demonstrating what is set out below."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1Upg3FPM2alc0Ys-61MBUJiLufiG5ALuVAVllVsF58PY/edit?usp=sharing"},"Analysis with TPA of 5 guarantees")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.google.com/spreadsheets/d/1Xc7gb1O7iqSB86NvGlywV6z7nmkCe4msFGU3bldWqGo/edit?usp=sharing"},"Analysis with TPA of 10 guarantees"))),(0,r.kt)("h3",{id:"calculation-time-of-a-repository-with-high-activity-vs-low-activity"},"Calculation time of a repository with High activity vs Low activity"),(0,r.kt)("p",null,"Calculations for TPAs whose repositories contain more information (issues, comments, pull requests, etc.) take longer to compute compared to those with less information. However, the difference is small. Nevertheless, it should be studied on a case-by-case basis depending on the project repository and the TPA used to obtain a detailed understanding of the difference to take it into account. You can find evidence in this sheet showing the increase in collector calculation time over time for various projects during the course of ISPP-2024. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/15HNMi1VU1ZUy0s6t1aNuTapS2eRQCLG3Z0iVGgdGEsg/edit?usp=sharing"},"link")),(0,r.kt)("h2",{id:"performance"},"Performance"),(0,r.kt)("h3",{id:"collector-events-slowdown"},"Collector-events slowdown"),(0,r.kt)("p",null,"It has been observed that the ",(0,r.kt)("inlineCode",{parentName:"p"},"collector-events")," experiences slowdowns at times, leading to a significant increase in computation times. When the collector is stable, computation times also stabilize. However, when it becomes destabilized, computation times spike. When does this destabilization occur?"),(0,r.kt)("p",null,"The solution to this slowdown is to restart the ",(0,r.kt)("inlineCode",{parentName:"p"},"collector-events"),", whether in production or development environments."),(0,r.kt)("p",null,"Below, several potential reasons for this occurrence are considered:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does the ",(0,r.kt)("inlineCode",{parentName:"li"},"collector-events")," destabilize after performing calculations over long periods?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It remains stable even during large calculations.")))),(0,r.kt)("p",null,"Calculations have been conducted over extensive periods (months). Subsequently, calculations are repeated over shorter periods (hours), resulting in the expected execution times."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Does it become unstable over the course of several days, indicating that the collector remains inactive for extended periods without being restarted?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It remains stable over the course of several days.")))),(0,r.kt)("p",null,"After 4 days without any calculations being performed by the ",(0,r.kt)("inlineCode",{parentName:"p"},"collector-events")," and the registry, calculations are executed over short periods (hours), yielding the anticipated execution times."),(0,r.kt)("h3",{id:"reason-on-the-cause-of-collector-events-slowdown"},"Reason on the cause of collector-events slowdown"),(0,r.kt)("p",null,"This issue may arise due to various reasons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Activation of too many automatic calculations that are not evenly distributed over time"),'. If a new calculation is initiated before the previous one is completed, calculations will accumulate, causing the system to "slow down" due to the aforementioned single-threaded calculation resolution problem.'),(0,r.kt)("li",{parentName:"ul"},"The aforementioned scenario may also occur when launching ",(0,r.kt)("strong",{parentName:"li"},"too many manual calculations or through a combination of automatic and manual calculations"),".")))}d.isMDXComponent=!0}}]);