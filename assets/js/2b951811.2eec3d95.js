"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[661],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3815:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={title:"Team Practices Agreements",description:"Team Practices Agreements",sidebar_position:1,hide_table_of_contents:!1},o="Team Practices Agreements (TPA)",s={unversionedId:"customization/agreement-modeling/team-practices-agreements",id:"customization/agreement-modeling/team-practices-agreements",title:"Team Practices Agreements",description:"Team Practices Agreements",source:"@site/docs/customization/agreement-modeling/team-practices-agreements.md",sourceDirName:"customization/agreement-modeling",slug:"/customization/agreement-modeling/team-practices-agreements",permalink:"/customization/agreement-modeling/team-practices-agreements",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/customization/agreement-modeling/team-practices-agreements.md",tags:[],version:"current",lastUpdatedBy:"Manuel Otero Barbas\xe1n",lastUpdatedAt:1718262564,formattedLastUpdatedAt:"Jun 13, 2024",sidebarPosition:1,frontMatter:{title:"Team Practices Agreements",description:"Team Practices Agreements",sidebar_position:1,hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"Dashboards",permalink:"/customization/dashboards"},next:{title:"Metrics",permalink:"/customization/agreement-modeling/metrics"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"General Structure",id:"general-structure",level:2},{value:"Creating a new agreement",id:"creating-a-new-agreement",level:2},{value:"Context",id:"context",level:3},{value:"Validity",id:"validity",level:4},{value:"Infrastructure",id:"infrastructure",level:4},{value:"Definitions",id:"definitions",level:4},{value:"Terms",id:"terms",level:3},{value:"Metrics",id:"metrics",level:4},{value:"Guarantees",id:"guarantees",level:4}],m={toc:c},d="wrapper";function p(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"team-practices-agreements-tpa"},"Team Practices Agreements (TPA)"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Bluejay use Team Practice Agreements (TPAs) instead of Service Level Agreements (SLAs) since the purpose of TPAs is auditing agile teams. Nevertheless, they are the same concept and thus, TPAs must follow ",(0,r.kt)("a",{parentName:"p",href:"https://docs.governify.io/about/iAgree"},"iAgree Syntax")," just like SLAs in Governify Infrastructure."),(0,r.kt)("p",null,"TPAs are defined as a JSON or YAML documents that contain all the information to model, measure and audit one or more proccesses or information related with online services. The goal of this file is to provide enough information to retrieve data from the services and measure that the guarantees specified in the agreement are being followed."),(0,r.kt)("h2",{id:"general-structure"},"General Structure"),(0,r.kt)("mermaid",{value:"graph TD\n    A[Agreement] --\x3e B(Context)\n    A --\x3e C(Terms)\n    B --\x3e D(Infrastructure)\n    B --\x3e E(Definitions)\n    B --\x3e H(Validity)\n    C --\x3eF(Metrics)\n    C --\x3eG(Guarantees)"}),(0,r.kt)("h2",{id:"creating-a-new-agreement"},"Creating a new agreement"),(0,r.kt)("p",null,"We can start a new agreement with the following template and fill all the required data to create one new custom agreement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "Governify Agreement Template",\n    "version": "1.0.0",\n    "type": "agreement",\n    "context": {\n        "validity": {\n            "initial": "2020-01-01",\n            "timeZone": "America/Los_Angeles"\n        },\n        "infrastructure": {\n        },\n        "definitions": {\n            "schemas": {},\n            "scopes": {},\n            "collectors": {},\n            "dashboards": {}\n        }\n    },\n    "terms": {\n        "metrics": {},\n        "guarantees": []\n    }\n}\n')),(0,r.kt)("h3",{id:"context"},"Context"),(0,r.kt)("p",null,"The context contains the information related about the services for which the data is being extracted and aditional information about the agreement, such as initial/end vality date, time zone, etc."),(0,r.kt)("h4",{id:"validity"},"Validity"),(0,r.kt)("p",null,"The context should specify the validity of the agreement with an initial date and the TimeZone where is being applied. (This timezone is used for metrics and guarantees where the date is a condition factor)\nExample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "validity": {\n        "initial": "2020-01-01",\n        "timeZone": "America/Los_Angeles"\n    }\n}\n')),(0,r.kt)("h4",{id:"infrastructure"},"Infrastructure"),(0,r.kt)("p",null,"Contains the information about which services should be used to compute the metrics."),(0,r.kt)("p",null,"In order to retrieve the data and communicate to the different microservices of the Governify ecosystem, the URLs where each component will be deployed should be specified. This should be done in the infrastructure object, as the following example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "infrastructure": {\n        "registry": "http://localhost:8081/api/v6",\n        "reporter": "http://reporter.bluejay.governify.io/api/v4",\n        "render": "https://ui.bluejay.governify.io/render?model=https://registry.bluejay.governify.io/api/v6/agreements/tpa-1010101010&view=/renders/tpa/default.html&ctrl=/renders/tpa/default.js",\n        "dashboard": "http://dashboard.bluejay.governify.io",\n        "scopeManager": "https://sm.bluejay.governify.io/api/v1"\n    }\n}\n')),(0,r.kt)("h4",{id:"definitions"},"Definitions"),(0,r.kt)("p",null,"The most important part in the definitions is the scope. The scope defines for which service/person/process applies the metric.\nIf we want to measure a company, we can have for example 3 scopes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Project"),(0,r.kt)("li",{parentName:"ul"},"Team"),(0,r.kt)("li",{parentName:"ul"},"Member\nThis scope are shared with the metric at the time of computing the metric, so, if we want to calculate for example one metric for all the projects we only have to specify:\n",(0,r.kt)("inlineCode",{parentName:"li"},"project: *"))),(0,r.kt)("p",null,"Scope examples from Team Practice Agreement:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "scopes": {\n        "development": {\n            "project": {\n                "name": "Project",\n                "description": "Project",\n                "type": "string",\n                "default": "1010101010"\n            },\n            "class": {\n                "name": "Class",\n                "description": "Group some projects",\n                "type": "string",\n                "default": "2020202020"\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"In the definitions object, the services used for collecting information should be specified, in order to be able to compute the metrics values. For example, this is the specification for the event collector in a Team Practices agreement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "computers": {\n        "eventcomputer": {\n            "url": "http://event.collector.bluejay.governify.io",\n            "endpoint": "/computations",\n            "apiVersion": "2",\n            "config": {\n                "scopeManager": "http://sm.bluejay.governify.io/api/v1/scopes/development"\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"And finally, to be able to visualize all the data from the guarantees and metrics specified, at least one dashboard must be specified. You can see all the dashboard configuration in the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.governify.io/development/services/dashboard"},"Dashboard Modeling")," section. One simple dashboard configuration could be:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "dashboards": {\n        "team-dashboard":{\n            "default": true,\n            "overlay": "/blocks/overlay.js",\n            "base": "/blocks/base.json",\n            "modifier": "/blocks/modifier.js",\n            "config": {\n                "blocks": [\n                    {\n                        "type": "time-graph",\n                        "guarantee": "NUMBER_MASTER_PR_MERGE_WEEKLY_OVER_1_OR_EQUAL",\n                        "config": {\n                        }\n                    }\n                ]\n            }\n        }\n    }\n}\n\n')),(0,r.kt)("h3",{id:"terms"},"Terms"),(0,r.kt)("p",null,"The agreement terms are composed by two parts; metrics, and guarantees. The sections below explain how to model each one of them."),(0,r.kt)("h4",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,"Every metric in the agreement contains all the necessary information to retrieve specific data from the services and get a final value (Boolean, Integer, String, etc.) from this data. The metric configuration is dependant of the collector used. This is an example from a Team Practice agreement using the Event Collector."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "PERCENTAGE_OPENPR_FINISHEDSTORIES_BIND": {\n        "collector": {\n            "$ref": "#/context/definitions/collectors/eventcollector"\n        },\n        "measure": {\n            "computing": "actual",\n            "element": {\n                "percentage": {\n                    "related": {\n                        "github": {\n                            "allPR": {\n                                "head": {\n                                    "ref": "#CONTAINS(primary_resources.0.id)#"\n                                }\n                            }\n                        },\n                        "window": 86400\n                    }\n                }\n            },\n            "event": {\n                "pivotal": {\n                    "activity": {\n                        "highlight": "finished"\n                    }\n                }\n            },\n            "scope": {\n                "$ref": "#/context/definitions/scopes/development"\n            }\n        }\n    }\n}\n')),(0,r.kt)("p",null,"You can see a complete guide about metric modelling in the ",(0,r.kt)("a",{parentName:"p",href:"/customization/agreement-modeling/metrics"},"Metrics section"),"."),(0,r.kt)("h4",{id:"guarantees"},"Guarantees"),(0,r.kt)("p",null,"The guarantees specify the quality or performance that the metrics should have. The objective is a formula that can be composed from one or more metrics. The window object refers to the calculation timing, where the period is used for how the period of time are splitted in time. "),(0,r.kt)("p",null,"For example for a daily period there will be one data point for each day, and the metric is calculated from all the data from that day. This is an example using the metric from the previous example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "75_PERCENT_NEWBRANCH_STARTEDSTORIES_WITHIN_A_DAY_BIND",\n    "description": "At least 75% of started stories must match a creation of a branch within a day.",\n    "scope": {\n        "$ref": "#/context/definitions/scopes/development"\n    },\n    "of": [\n        {\n            "scope": {\n                "project": "1010101010"\n            },\n            "objective": "PERCENTAGE_NEWBRANCH_STARTEDSTORIES_BIND >= 75",\n            "with": {\n                "PERCENTAGE_NEWBRANCH_STARTEDSTORIES_BIND": {}\n            },\n            "window": {\n                "type": "static",\n                "period": "daily",\n                "initial": "2018-01-01"\n            }\n        }\n    ]\n}\n')),(0,r.kt)("p",null,"You can see a complete guide about guarantees modelling in the ",(0,r.kt)("a",{parentName:"p",href:"/customization/agreement-modeling/guarantees"},"Guarantees section"),"."))}p.isMDXComponent=!0}}]);