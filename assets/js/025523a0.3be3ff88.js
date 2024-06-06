"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[890],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(a),p=n,h=u["".concat(s,".").concat(p)]||u[p]||m[p]||i;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},6385:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={title:"Guarantees",description:"Guarantees",hide_table_of_contents:!1,sidebar_position:3},o="Guarantees",l={unversionedId:"customization/agreement-modeling/guarantees",id:"customization/agreement-modeling/guarantees",title:"Guarantees",description:"Guarantees",source:"@site/docs/customization/agreement-modeling/guarantees.md",sourceDirName:"customization/agreement-modeling",slug:"/customization/agreement-modeling/guarantees",permalink:"/customization/agreement-modeling/guarantees",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/customization/agreement-modeling/guarantees.md",tags:[],version:"current",lastUpdatedBy:"JaviFdez7",lastUpdatedAt:1717658953,formattedLastUpdatedAt:"Jun 6, 2024",sidebarPosition:3,frontMatter:{title:"Guarantees",description:"Guarantees",hide_table_of_contents:!1,sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Metrics",permalink:"/customization/agreement-modeling/metrics"},next:{title:"Register New Teams",permalink:"/guides/user-guides/register-new-teams"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Structure",id:"structure",level:2},{value:"List of Guarantees",id:"list-of-guarantees",level:2}],d={toc:c},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"guarantees"},"Guarantees"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"After a Agreement is designed using natural language, it needs to be transformed in order for the system to work with it. iAgree is the syntax used for this transformation, defining what it's called guarantee. The following block belongs to a real guarantee of a an auditing tool used in education for measuring teams behavior:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "OVER_75_PERCENT_STARTEDSTORIES_NEWBRANCH_WITHIN_AN_HOUR",\n    "notes": "At least 75% of started stories in Pivotal Tracker are correlated with the creation of a branch in GitHub within an hour.",\n    "scope": {\n        "project":{\n            "name": "Project",\n            "description": "Project"\n        }\n    },\n    "of": {\n        "scope": {\n            "project": 2317518\n        },\n        "with": {\n            "PERCENTAGE_STARTEDSTORIES_NEWBRANCH": {}\n        },\n        "objective": "PERCENTAGE_STARTEDSTORIES_NEWBRANCH >= 75",        \n        "window":{\n            "type": "static" ,\n            "period": "daily" ,\n            "initial": "2019-03-07"\n        }\n    }    \n}\n')),(0,n.kt)("h2",{id:"structure"},"Structure"),(0,n.kt)("p",null,"A guarantee is composed of:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"id"),": Field for declaring a identification name for it"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"notes"),": It can be filled with descriptive information\nexplaining it but it is not used for the compute of the TP."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"scope"),": The potential scopes which can be used to obtain the actual computation. These are usually referenced from the definitions at the beggining of the TPA. Used also to take default values defined in the scopes in case it is not given in the of.scope value."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"of"),": This field is composed of 4 objects:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"scope"),": This scope defines the actual target of the metrics, that is, if they should be computed for a whole team or each member separately. In the example, as the member is not declared, it will use the information from the whole team."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"with"),": This object should contain one or more metrics. These metrics are the ones the guarantee is going to use inside the objective."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"objective"),': Conformed by one or more metrics and a set of operators. The system will first use the numerical operations to calculate a value, and then, it will compare the values using the logical operator. This will define the values that are considered appropriate for the practice and set up a threshold(Line X). In the example, the result values of the metric "PERCENTAGE_STARTEDSTORIES_NEWBRANCH" have to be equal or greater than 75. '),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"window"),": This contains 3 fields: type is used to define a static or dynamic window(static is usually used), period indicates how frequently the practice adherence will be calculated and initial defines the initial date to start spliting using the period field.")))),(0,n.kt)("h2",{id:"list-of-guarantees"},"List of Guarantees"),(0,n.kt)("p",null,"Here is a table comparing the different guarantees:\nIn order to exemplify this, in ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector/README.md#guarantees"},"this link")," there are a list of guarantees examples. In particular, these guarantees DSLs are contained:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"DSL definition"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Percentage of started stories in Pivotal Tracker correlated with the creation of a branch in GitHub within a day every day by a team"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#75_percent_newbranch_started_stories_within_a_day"},"Show definition"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Percentage of started stories in Pivotal Tracker correlated with the creation of a branch in GitHub using a binding every day by a team"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#75_percent_newbranch_started_stories_within_a_day_bind"},"Show definition"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Percentage of finished stories in Pivotal Tracker correlated with the opening of a PR in GitHub within a day every day by a team"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#75_percent_master_pr_open_finsh_stories_within_a_day"},"Show definition"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Percentage of finished stories in Pivotal Tracker correlated with the opening of a PR in GitHub using a binding every day by a team"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#75_percent_master_pr_open_finsh_stories_within_a_day_bind"},"Show definition"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Percentage of delivered stories in Pivotal Tracker correlated with the merge of a branch in GitHub within a day every day by a team"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#75_percent_master_pr_merge_delvr_stories_within_a_day"},"Show definition"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Percentage of delivered stories in Pivotal Tracker correlated with the merge of a branch in GitHub using a binding every day by a team"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#75_percent_master_pr_merge_delvr_stories_within_a_day_bind"},"Show definition"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Percentage of merged PR in GitHub correlated with a release in heroku within one hour every day by a team"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#75_percent_master_pr_merge_deploy_within_a_day"},"Show definition"))))),(0,n.kt)("p",null,"There is another ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/isa-group/governify-examples/blob/master/metrics/event-collector#coverage_delta_variation_higher_equal_zero"},"example")," using CodeClimate's coverage of the Delta Variation between the last day and the penultimate day, every day by a team."))}m.isMDXComponent=!0}}]);