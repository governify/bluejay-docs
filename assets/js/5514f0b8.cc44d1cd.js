"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[96],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,g=p["".concat(l,".").concat(m)]||p[m]||c[m]||o;return a?r.createElement(g,i(i({ref:t},d),{},{components:a})):r.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},9104:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={title:"Add new course",description:"How to add a new course to the platform using TPA Manager",sidebar_position:1,hide_table_of_contents:!1},i="Add a new course with TPA Manager",s={unversionedId:"guides/user-guides/add-new-course",id:"guides/user-guides/add-new-course",title:"Add new course",description:"How to add a new course to the platform using TPA Manager",source:"@site/docs/guides/user-guides/add-new-course.md",sourceDirName:"guides/user-guides",slug:"/guides/user-guides/add-new-course",permalink:"/guides/user-guides/add-new-course",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/guides/user-guides/add-new-course.md",tags:[],version:"current",lastUpdatedBy:"Manuel Otero Barbas\xe1n",lastUpdatedAt:1730668714,formattedLastUpdatedAt:"Nov 3, 2024",sidebarPosition:1,frontMatter:{title:"Add new course",description:"How to add a new course to the platform using TPA Manager",sidebar_position:1,hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"Guarantees",permalink:"/customization/agreement-modeling/guarantees"},next:{title:"Register New Teams",permalink:"/guides/user-guides/register-new-teams"}},l={},u=[{value:"Navegate to create a new course",id:"navegate-to-create-a-new-course",level:2},{value:"Create Template from sample",id:"create-template-from-sample",level:2},{value:"Return to Create Course Page and fill the fields",id:"return-to-create-course-page-and-fill-the-fields",level:2}],d={toc:u},p="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"add-a-new-course-with-tpa-manager"},"Add a new course with TPA Manager"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"This tutorial is designed to guide users through the process of creating a new course in the TPA Manager and subsequently joining a team ",(0,n.kt)("a",{parentName:"p",href:"/guides/user-guides/register-new-teams"},"Register new Teams"),". The tutorial is presented in a step-by-step format, ensuring that users can easily follow the instructions and complete the process effectively."),(0,n.kt)("admonition",{title:"bear in mind",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Before starting the tutorial, it's important to note that a valid authorization is required to use some features. ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Since we're in the development environment, the correct authorization depends on where is runing the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.governify.io/development/services/scopes-manager"},"Scopes Manager service"),", on console: ",(0,n.kt)("inlineCode",{parentName:"p"},"c025ff8502893fc6c5a87cf3febe4882")," or docker: ",(0,n.kt)("inlineCode",{parentName:"p"},"bluejay-scopes-private-key"),"  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"/development/bluejay-only-services/tpa-manager#authorization"},"How to add the authorization?"))))),(0,n.kt)("h2",{id:"navegate-to-create-a-new-course"},"Navegate to create a new course"),(0,n.kt)("p",null,"First of all, being on the TPA Manager, you must navigate to the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"Create Course"))," page. You can do this by clicking on the ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},"New Course"))," button."),(0,n.kt)("img",{alt:"home tpa manager",src:"/img/guides/add-new-course/home-tpa-manager.png",width:"80%",style:{boxShadow:"0 0 0 0.1px black"}}),"\xa0",(0,n.kt)("img",{alt:"wrong create course",src:"/img/guides/add-new-course/createcoursewrong.png",width:"90%",style:{boxShadow:"0 0 0 0.1px black"}}),(0,n.kt)("p",null,"So, when on the ",(0,n.kt)("strong",{parentName:"p"},"Create Course")," page, we can see that if none exist previously, a message will appear indicating that a template needs to be created. We can click the ",(0,n.kt)("strong",{parentName:"p"},"Create one!")," button or go to the templates management section by clicking the button in the top right corner."),(0,n.kt)("h2",{id:"create-template-from-sample"},"Create Template from sample"),(0,n.kt)("img",{alt:"create template",src:"/img/guides/add-new-course/create-template-from-sample.png",width:"90%",style:{boxShadow:"0 0 0 0.1px black"}}),"\xa0",(0,n.kt)("p",null,"Once you're in the Templates section, you can create one using different examples provided from a Bluejay repository.\n",(0,n.kt)("strong",{parentName:"p"},"Please follow these steps")," to create one template:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\xa0",(0,n.kt)("strong",{parentName:"li"},"Click create from sample")," ")),(0,n.kt)("img",{alt:"create template dialog",src:"/img/guides/add-new-course/createtemplatedialog.png",width:"50%",style:{boxShadow:"0 0 0 0.1px black"}}),"\xa0",(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\xa0You will see a dialog with the available examples. Choose one and give the template a name."),(0,n.kt)("admonition",{parentName:"li",title:"bear in mind",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Tempate id must be in the format ",(0,n.kt)("inlineCode",{parentName:"li"},"template-<name>-version"))))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\xa0",(0,n.kt)("strong",{parentName:"p"},"Press add Button"),". This will create the template and redirect you to the Templates section. The new template will be listed and you will be able to edit and delete it."))),(0,n.kt)("img",{alt:"template created",src:"/img/guides/add-new-course/templatecreated.png",width:"80%",style:{boxShadow:"0 0 0 0.1px black"}}),"\xa0",(0,n.kt)("h2",{id:"return-to-create-course-page-and-fill-the-fields"},"Return to Create Course Page and fill the fields"),(0,n.kt)("p",null,"Now that we have a template, we can proceed to fill in the necessary details to create the course. The required fields are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"classId"),": Course name."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"templateId"),": Select the template we just created."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"autoRun"),": Configuration for automatic execution (true/false)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"hidden"),": Option to set whether the course will be hidden or visible."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"joinCode"),": Code that students will use to enroll in the course."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"identities"),": Additional identity configurations (optional)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"credentials"),": Additional credentials (optional)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"projects"),": List of projects where teams will be registered later (empty).")),(0,n.kt)("img",{alt:"create course",src:"/img/guides/add-new-course/createcourse.png",width:"90%",style:{boxShadow:"0 0 0 0.1px black"}}),"\xa0",(0,n.kt)("p",null,"Once you have filled in all the fields, click the ",(0,n.kt)("strong",{parentName:"p"},"Create")," button. If the course is created successfully, you will be redirected to home page and you will see the new course listed."),(0,n.kt)("img",{alt:"course created",src:"/img/guides/add-new-course/coursecreated.png",width:"90%",style:{boxShadow:"0 0 0 0.1px black"}}),"\xa0",(0,n.kt)("p",null,"Now that the course has been created, you can proceed to ",(0,n.kt)("a",{parentName:"p",href:"/guides/user-guides/register-new-teams"},"Register new Teams")," to add teams to the course."))}c.isMDXComponent=!0}}]);