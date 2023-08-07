"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[81],{4826:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var i=a(7462),o=(a(7294),a(3905)),n=a(2004);const r={slug:"/",title:"Overview",sidebar_position:1,description:"Introduction to the project",hide_table_of_contents:!1},s="Overview",c={unversionedId:"overview",id:"overview",title:"Overview",description:"Introduction to the project",source:"@site/docs/overview.mdx",sourceDirName:".",slug:"/",permalink:"/",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/overview.mdx",tags:[],version:"current",lastUpdatedBy:"alesancor1",lastUpdatedAt:1691439351,formattedLastUpdatedAt:"Aug 7, 2023",sidebarPosition:1,frontMatter:{slug:"/",title:"Overview",sidebar_position:1,description:"Introduction to the project",hide_table_of_contents:!1},sidebar:"defaultSidebar",next:{title:"Infrastructure",permalink:"/infrastructure"}},u={},l=[{value:"Bluejay showcase video",id:"bluejay-showcase-video",level:2},{value:"Quick Tour",id:"quick-tour",level:2}],p={toc:l},d="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"As explained in Governify documentation, Governify is a service agreement management framework that boosts the service governance by supporting audits in an automated way. Among its use cases, Governify can be used to ",(0,o.kt)("a",{parentName:"p",href:"https://docs.governify.io/use-cases/auditing-agile"},"audit agile teams"),", which is the purpose for which Bluejay Infrastructure was created."),(0,o.kt)("p",null,"Bluejay Infrastructure is a Governify-based infrastructure that allows to audit agile teams in a simple way. It is composed of a subset of Governify microservices that can be deployed either in a single machine or in a cluster. Bluejay access multiple sources to gather information about development teams, such as GitLab, Jira, Slack, etc. and uses this information to check if those teams are being compliant with a ",(0,o.kt)("a",{parentName:"p",href:"/customization/agreement-modeling/team-practices-agreements"},"Team Practices Agreement (TPA)")," which includes metrics and guarantees related to the agile methodology."),(0,o.kt)("h2",{id:"bluejay-showcase-video"},"Bluejay showcase video"),(0,o.kt)(n.Z,{playing:!0,controls:!0,url:"https://www.youtube.com/watch?v=WathxnobIzc",width:"100%",mdxType:"ReactPlayer"}),(0,o.kt)("h2",{id:"quick-tour"},"Quick Tour"),(0,o.kt)("p",null,"The main interaface is accesible from ui.bluejay.",(0,o.kt)("em",{parentName:"p"},"[YourDomain]"),"\nThe default credentials for this interface are: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"User: governify-admin "),(0,o.kt)("li",{parentName:"ul"},"Password: governify-project")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This credentials can be changed in the .env file.")),(0,o.kt)("p",null,"In this interface you should be able to see a list of all the teams you have in your configuration. By default, it comes with a predefined example project."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Projects list interface of Governify",src:a(4388).Z,width:"1893",height:"732"})),(0,o.kt)("p",null,'To start auditing the example project simply click on the "Create TPA" button right next to the team\'s name (project01). This will create a simple predefined agreement for that team to start auditting it.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Create TPA Button",src:a(9992).Z,width:"468",height:"156"})),(0,o.kt)("p",null,"A new tab will open and, once the agreement is created, the TPA view of the project should appear. It contains information about it along the guarantees and metrics in use."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TPA view",src:a(1985).Z,width:"1050",height:"478"})),(0,o.kt)("p",null,"To calculate data for this project, the top-right blue button ",(0,o.kt)("inlineCode",{parentName:"p"},"Calculate Metrics")," has to be clicked and a form will apear."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Calculate Metrics form",src:a(8071).Z,width:"427",height:"609"})),(0,o.kt)("p",null,"The dates should be the same as the image in order to appear the correct information and the checkbox has to be accepted. By clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"Compute")," button the system will start computing and, if everything goes well, after 5-20 seconds, the ",(0,o.kt)("inlineCode",{parentName:"p"},"TPA data is being generated for the period.")," alert message will change to ",(0,o.kt)("inlineCode",{parentName:"p"},"Points creation ended.")),(0,o.kt)("p",null,"Clicking the ",(0,o.kt)("inlineCode",{parentName:"p"},"Dashboard")," green button at the top-right corner, a new tab will open. The default username and password are governify-admin and governify-project."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This credentials can be changed, once logged, going to the icon in the bottom left part of the Dashboard, clicking on preferences, and accessing the section Change password at the top of the page.")),(0,o.kt)("p",null,"Once logged, the dashboard for the project will be opened where all the audit data can be viewed."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dashboard of the example project",src:a(2126).Z,width:"1050",height:"482"})))}h.isMDXComponent=!0},8071:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/compute_metrics-471bad782b10b7e7346a92a029866bce.png"},9992:(e,t,a)=>{a.d(t,{Z:()=>i});const i="data:image/png;base64,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"},2126:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/dashboard-8360f037d65a1543723f8b4716795b9c.png"},1985:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/tpa_view-b40851ac8d31df0cdc7f15e477404949.png"},4388:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ui-interface-0f66c7883e98397681101202c55cc379.png"}}]);