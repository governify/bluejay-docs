"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[48],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,i=function(e,t){if(null==e)return{};var r,a,i={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||s;return r?a.createElement(h,n(n({ref:t},p),{},{components:r})):a.createElement(h,n({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,n=new Array(s);n[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,n[1]=o;for(var c=2;c<s;c++)n[c]=r[c];return a.createElement.apply(null,n)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2966:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=r(7462),i=(r(7294),r(3905));const s={title:"Register New Teams",description:"Register New Teams",sidebar_position:1,hide_table_of_contents:!1},n="Register New Teams",o={unversionedId:"guides/user-guides/register-new-teams",id:"guides/user-guides/register-new-teams",title:"Register New Teams",description:"Register New Teams",source:"@site/docs/guides/user-guides/register-new-teams.md",sourceDirName:"guides/user-guides",slug:"/guides/user-guides/register-new-teams",permalink:"/guides/user-guides/register-new-teams",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/guides/user-guides/register-new-teams.md",tags:[],version:"current",lastUpdatedBy:"Rafael Fresno",lastUpdatedAt:1714209497,formattedLastUpdatedAt:"Apr 27, 2024",sidebarPosition:1,frontMatter:{title:"Register New Teams",description:"Register New Teams",sidebar_position:1,hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"Guarantees",permalink:"/customization/agreement-modeling/guarantees"},next:{title:"Update Registered Teams",permalink:"/guides/user-guides/update-registered-teams"}},l={},c=[{value:"Join",id:"join",level:2},{value:"Full register",id:"full-register",level:3},{value:"Simplified register",id:"simplified-register",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...s}=e;return(0,i.kt)(u,(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"register-new-teams"},"Register New Teams"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"As explained ",(0,i.kt)("a",{parentName:"p",href:"http://localhost:3000/customization/configuration#scope-file"},"here"),", the scope.json contains all the information about courses, teams and members available as an API (Scope Manager) for the other components to have access to it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Successful Join",src:r(3061).Z,width:"1050",height:"778"})),(0,i.kt)("h2",{id:"join"},"Join"),(0,i.kt)("p",null,'For making the process of adding teams to be audited in the system more intuitive, "Join" is another microservice serving a simple frontend which is enough for this purpose. It gives the teams the ability to register by themselves into the system without the need of an administrator to do it.'),(0,i.kt)("p",null,"By default, it can be accessed through https://join","[BLUEJAY_SERVICES_PREFIX][BLUEJAY_DNS_SUFFIX]"," (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://join.bluejay.mydomain.org"},"https://join.bluejay.mydomain.org"),") in case Bluejay is deployed in the cloud or by accessing to http://localhost:6001 if it is deployed locally."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Bear in mind")," that when registering a team to a course, the system will look for:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("strong",{parentName:"p"},"TPA template")," called the same as the course in the assets folder ",(0,i.kt)("inlineCode",{parentName:"p"},"/public/renders/tpa")," and use it to generate the TPA for the team. In case there this template does not exist, it will use template.yaml as TPA template. For more information about the TPA refer to the Agreement Modeling section.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"A ",(0,i.kt)("strong",{parentName:"p"},"director script")," and a ",(0,i.kt)("strong",{parentName:"p"},"json")," called both the same as the course in the assets folder ",(0,i.kt)("inlineCode",{parentName:"p"},"/public/director"),". The json contains the execution information (interval, start and end) to enable it at the Director to call the script. In case these files don't exist, the director won't be called. These files have to be configured for the system to automatically generate data about the team. For example, to automatically compute metrics for a course named ",(0,i.kt)("inlineCode",{parentName:"p"},"class01")," the files would be the following: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/governify/bluejay-infrastructure/blob/main/assets/public/director/class01.js"},"class01.js")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/governify/bluejay-infrastructure/blob/main/assets/public/director/class01.json"},"class01.json"),"."))),(0,i.kt)("h3",{id:"full-register"},"Full register"),(0,i.kt)("p",null,"It offers an interface that works in three steps:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1."),' First the GitHub Repository URL is entered and "Check" button is pressed. It will check for any mistakes on the info.yml file and, if everything is ok a second section will appear. In case you still don\'t have the info.yml file in the root of your repo (main or master branch) you can check this ',(0,i.kt)("a",{parentName:"p",href:"https://github.com/governify/audited-project-template/blob/main/info.yml"},"template")," or this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/governifyauditor/goldenflow-showcase-project/blob/main/info.yml"},"example")," and add it before continuing."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"2."),' A new input will appear asking for the Course name will appear. By pressing "Join" the system will check that this course exists in the scopes.json. If it doesn\'t add an object for storing a new course with a name for the course of your desire. Remember to restart the Scope Manager before continuing if you modified the scopes.json.'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"3.")," If the course exists and the project was not registered previously, there will appear a success message and the system will be already registered! A badge with it's markdown will appear for teams to copy it into their README.md file for ease of access and they can click on it to access the dashboard. If the team had already registered before the badge will appear but it won't register the team again."),(0,i.kt)("h3",{id:"simplified-register"},"Simplified register"),(0,i.kt)("p",null,"If the administrator wants to give users the ability to register to the system but don't needs the teams to select a course, it can be passed as a parametter in the URL simplifiying the process:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"1.")," By accessing to the URL followed by ?course=coursename (e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://join.bluejay.mydomain.org?course=computerscience"},"https://join.bluejay.mydomain.org?course=computerscience"),") a simplified view will appear. It will ask for the repository URL and, by clicking register, it will check the info.yml and, if succedes, add the team to the project. Remember the course has to be already created in the scopes.json file or it won't let the team to register. A badge will appear for users to access to their dashboard"))}d.isMDXComponent=!0},3061:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/success-f4e5691ca623d4992204b921ab04219d.png"}}]);