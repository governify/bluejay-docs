"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[867],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={title:"Using Slack Hooks",description:"Register Slack Hooks",sidebar_position:3,hide_table_of_contents:!1},r="Using Slack Hooks",s={unversionedId:"guides/user-guides/register-slack-hooks",id:"guides/user-guides/register-slack-hooks",title:"Using Slack Hooks",description:"Register Slack Hooks",source:"@site/docs/guides/user-guides/register-slack-hooks.md",sourceDirName:"guides/user-guides",slug:"/guides/user-guides/register-slack-hooks",permalink:"/guides/user-guides/register-slack-hooks",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/guides/user-guides/register-slack-hooks.md",tags:[],version:"current",lastUpdatedBy:"Manuel Otero Barbas\xe1n",lastUpdatedAt:1720264579,formattedLastUpdatedAt:"Jul 6, 2024",sidebarPosition:3,frontMatter:{title:"Using Slack Hooks",description:"Register Slack Hooks",sidebar_position:3,hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"Register New Teams",permalink:"/guides/user-guides/register-new-teams"}},l={},c=[{value:"Admin Notifications Panel",id:"admin-notifications-panel",level:2},{value:"Students Notifications Panel",id:"students-notifications-panel",level:2}],u={toc:c},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-slack-hooks"},"Using Slack Hooks"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"BLUEJAY has the capability to ",(0,i.kt)("strong",{parentName:"p"},"send reports to a Slack channel")," via a Slack webhook. To activate the slack notifications for a course, navigate to de desired course using the dropdown at ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"ui.bluejay.","[YourDomain]"))," . You must click the ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"Load Course"))," button."),(0,i.kt)("img",{alt:"course selector",src:"/img/guides/slack/courseSelector.png",width:"80%"}),(0,i.kt)("br",null),(0,i.kt)("p",null,"Once you select the desired course, you can see two notification panels\n",(0,i.kt)("a",{parentName:"p",href:"#admin-notifications-panel"},"Admin Notifications Panel"),"\nand\n",(0,i.kt)("a",{parentName:"p",href:"#students-notifications-panel"},"Student Notifications Panel"),". If you do not have any team joined please read ",(0,i.kt)("a",{parentName:"p",href:"/guides/user-guides/register-new-teams"},"Register new Teams"),"."),(0,i.kt)("img",{alt:"slack panel",src:"/img/guides/slack/slackPanel.png",width:"80%"}),"\xa0",(0,i.kt)("h2",{id:"admin-notifications-panel"},"Admin Notifications Panel"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This panel manages the reports of all groups to the admin slack channel."),(0,i.kt)("img",{alt:"adm panel",src:"/img/guides/slack/slack-adm-panel.png",width:"80%"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please follow these steps")," to make it work:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\xa0",(0,i.kt)("strong",{parentName:"p"},"Insert the Slack webhook")," and ",(0,i.kt)("strong",{parentName:"p"},"click Set"),". Here is the ",(0,i.kt)("a",{parentName:"p",href:"https://api.slack.com/messaging/webhooks"},"slack guide to create a webhook")," for a channel.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\xa0",(0,i.kt)("strong",{parentName:"p"},"Choose the frecuency")," of notifications and ",(0,i.kt)("strong",{parentName:"p"},"click Set"),"."),(0,i.kt)("admonition",{parentName:"li",title:"bear in mind",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"The first message will arrive after the time you selected. Then it will repeat at that frequency."),(0,i.kt)("li",{parentName:"ul"},"You can choose Continuously (8 seconds) the first time to check that the system is working.")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\xa0",(0,i.kt)("strong",{parentName:"p"},"Press the Toggle Button"),". This will enable notifications to the admin for current joined groups. If a new group joins later, just deactivate and activate the notifications again. Now you shold see a Slack logo next to the projects where admin notifications are active."))),(0,i.kt)("img",{alt:"active adm notification",src:"/img/guides/slack/active-adm-slack.png",width:"80%"}),(0,i.kt)("h2",{id:"students-notifications-panel"},"Students Notifications Panel"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"This panel manages individual reports sent to each team. It is important to note that all teams should have their Slack webhook configured in their ",(0,i.kt)("a",{parentName:"p",href:"/guides/user-guides/register-new-teams"},"info.yml"),".\nThe top panel toggles all notifications for each group. However, you can toggle each group independently (right switch button)."),(0,i.kt)("img",{alt:"students panel",src:"/img/guides/slack/slack-student-panel.png",width:"80%"}),"\xa0",(0,i.kt)("admonition",{title:"bear in mind",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"If a team does not have the info.yml configured, you can not activate their notifications."),(0,i.kt)("li",{parentName:"ul"},"Whenever you toggle the notifications, it utilizes the frequency set at that particular moment."))),(0,i.kt)("hr",null))}d.isMDXComponent=!0}}]);