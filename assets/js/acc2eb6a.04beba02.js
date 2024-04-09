"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=i,h=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const o={title:"Optimize Calculation Period",description:"Optimize",sidebar_position:4,hide_table_of_contents:!1},r="Optimize Calculation Period",s={unversionedId:"development/extending-bluejay/custom-tasks/optimize-calculation-period",id:"development/extending-bluejay/custom-tasks/optimize-calculation-period",title:"Optimize Calculation Period",description:"Optimize",source:"@site/docs/development/extending-bluejay/custom-tasks/optimize-calculation-period.md",sourceDirName:"development/extending-bluejay/custom-tasks",slug:"/development/extending-bluejay/custom-tasks/optimize-calculation-period",permalink:"/development/extending-bluejay/custom-tasks/optimize-calculation-period",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/development/extending-bluejay/custom-tasks/optimize-calculation-period.md",tags:[],version:"current",lastUpdatedBy:"JaviFdez7",lastUpdatedAt:1712693056,formattedLastUpdatedAt:"Apr 9, 2024",sidebarPosition:4,frontMatter:{title:"Optimize Calculation Period",description:"Optimize",sidebar_position:4,hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"Slack",permalink:"/development/integrations/slack"},next:{title:"Setup Development Environment",permalink:"/development/extending-bluejay/setup-dev-env"}},l={},c=[{value:"Load Optimize Calculation Period",id:"load-optimize-calculation-period",level:2},{value:"Configure the script",id:"configure-the-script",level:2},{value:"Run the script",id:"run-the-script",level:2},{value:"Technical details",id:"technical-details",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"optimize-calculation-period"},"Optimize Calculation Period"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Bluejay has an automatic calculation system for its TPAs. However fetching data and calculating metrics of a a course consisting of numerous teams can lead to performance issues."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},'"Optimize Calculation Period"')," aims to resolve the challenge of multiple automatic calculations triggering simultaneously in a course. It achieves this by ",(0,i.kt)("strong",{parentName:"p"},"evenly distributing")," the execution times for these calculations across a given period of time."),(0,i.kt)("p",null,"This script is one of the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.governify.io/development/extending-governify/custom-tasks"},"Custom Tasks of Extending Governify")," and it is stored within the assets-bluejay repository ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/governify/assets-bluejay/blob/main/public/director/tasks/utils/optimizeCalculationPeriod/script.js"},"(link)"),"."),(0,i.kt)("p",null,"In this document, we will discuss how to load, configure, and run the script from the user interface. If you want to see the inner workings of this script, we will provide an explanation of the technical details in the last section."),(0,i.kt)("h2",{id:"load-optimize-calculation-period"},"Load Optimize Calculation Period"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to  ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"ui.bluejay.","[YourDomain]"))," "),(0,i.kt)("li",{parentName:"ol"},"Click on Admin UI"),(0,i.kt)("li",{parentName:"ol"},"Click on Task Runner tab"),(0,i.kt)("li",{parentName:"ol"},"Open the dropdown and select OptimizeCalculationPeriod.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"load optimize",src:n(2283).Z,width:"2680",height:"539"})),(0,i.kt)("h2",{id:"configure-the-script"},"Configure the script"),(0,i.kt)("p",null,"Let's have a look at the Configuration.json parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"courseRegex"),": ",(0,i.kt)("em",{parentName:"li"},"string"),".    ",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"This field specifies the name of the desired course."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"maxMinutesDelay"),": ",(0,i.kt)("em",{parentName:"li"},"int"),". ",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"This value represents the time in minutes between the default calculation date of the course and the furthest calculation. A positive value delays some of the calculations, while a negative value is allowed to anticipate instead of delaying the calculations."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"batchSize"),": ",(0,i.kt)("em",{parentName:"li"},"int"),".",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"This field indicates the number of teams that can be activated at the same hour.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," ",(0,i.kt)("strong",{parentName:"p"},"5 teams")," in a course named ",(0,i.kt)("inlineCode",{parentName:"p"},"class01")," configured to launch automatic calculations at ",(0,i.kt)("inlineCode",{parentName:"p"},"15h00"),"  and these parameters in the config:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},'{\n    "courseRegex": "class01",\n    "maxMinutesDelay": 60,\n    "batchSize": 2\n}\n-----------------------------------------\nexpected result:\n5/2 = 2 + 1, total 3. \n----------------------------------------- \nbtch1 15h -> Team1 and Team2\nbtch2 15h30 -> Team3 and Team4\nbtch3 16h00 -> Team5 \n')),(0,i.kt)("h2",{id:"run-the-script"},"Run the script"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Click run")," and you will see the results on the log of ",(0,i.kt)("strong",{parentName:"p"},"Result.json:")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "date": "2023-10-01T15:40:21.658Z",\n  "log": [\n    "Current directory: /opt/app/tasks",\n    "Searching for JSON files containing: class1",\n    "Active computations: ",\n    [\n      "tpa-class1-GH-motero2k_Bluejay-test-TPA-23-24",\n      "tpa-class1-GH-motero2k_Test-Repo-for-Bluejay-copy1",\n      "tpa-class1-GH-motero2k_Test-Repo-for-Bluejay-copy2",\n      "tpa-class1-GH-motero2k_Test-Repo-for-Bluejay-copy3",\n      "tpa-class1-GH-motero2k_test2-for-bluejay"\n    ],\n    "5 files in groups of 2 = 3 ,minutesBetweenRuns: 30",\n    #changed configuration files are shown here\n    ,\n    "script end"\n  ]\n}\n')),(0,i.kt)("admonition",{title:"bear in mind",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"You can check the new dates in the ",(0,i.kt)("strong",{parentName:"li"},"Task Management")," tab"),(0,i.kt)("li",{parentName:"ul"},"If you want to execute this script again, you must ",(0,i.kt)("strong",{parentName:"li"},"turn on and of all automatic calculations in the course")," (this resets  launch times to default)."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"technical-details"},"Technical details"),(0,i.kt)("p",null,"This section explains line by line the OptimizeCalculationPeriod ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/governify/assets-bluejay/blob/main/public/director/tasks/utils/optimizeCalculationPeriod/script.js"},"script.js"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Imports:")," fs for file writing, path for joining strings as paths and moment to modify the dates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"\"use strict\";\n\nconst fs = require('fs');\nconst path = require('path');\nconst moment = require('moment');\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"These lines belong to the ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/governify/assets-bluejay/blob/main/public/director/tasks/examples/template/script.js"},"script.js template"),".")," This is necessary to execute a custom task a receive a result in the UI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"\nmodule.exports.main = async (config) => {\n  let result = { date: new Date(), log: [] };\n  const log = (data) => {console.log(data);result.log.push(data)};\n  const throwError = (message) => {result.log.push(message); \n  throw new Error(result.log[result.log.length-1])}\n  try {\n    //SCRIPT BEGIN\n")),(0,i.kt)("p",null,"Here we make sure that the ",(0,i.kt)("strong",{parentName:"p"},"batchSize and maxMinutesDelay are integers and contained in a reasonable range.")," maxMinutesDelay can be negative as we stated in the configuration section."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'    if(typeof config.batchSize != "number" ||\n         typeof config.maxMinutesDelay != "number") \n    throw new Error("BatchSize and maxMinutesDelay must be numbers")\n\n    if(config.batchSize<1 || 20<  config.batchSize) \n        throw new Error("BatchSize out of bounds [0,20]");\n    config.batchSize = parseInt(config.batchSize);\n    config.maxMinutesDelay = parseInt(config.maxMinutesDelay);\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"All scripts are executed in ",(0,i.kt)("inlineCode",{parentName:"strong"},"/director"),".")," ",(0,i.kt)("inlineCode",{parentName:"p"},"/director/tasks")," is the folder where automatic calculations configuration files are stored."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"    const currentDirectory = path.join(process.cwd(), 'tasks');\n    log(`Current directory: ${currentDirectory}`);\n    const courseName = config.courseRegex;\n    log(`Searching for JSON files containing: ${courseName}`);\n\n    const jsonFiles = fs.readdirSync(currentDirectory)\n    .filter(file => file.includes('tpa-'+courseName) \n        && file.endsWith('.json')) // Filter files by course and .json extension\n    .map(file => path.parse(file).name); // Get file names without the extension\n")),(0,i.kt)("p",null,"If no automatic calculation files are found or if the batch number is too high, the script will throw an error; otherwise, ",(0,i.kt)("strong",{parentName:"p"},"it will log the name of the files.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'\n    if(jsonFiles.length < 1){\n      throwError("Automatic computations not found in course "+ courseName)\n    }\n    log("Active computations: ")\n    log(jsonFiles)\n\n    if(config.batchSize > jsonFiles.length) \n        throwError(`batch number too big (${config.batchSize}) \n            for ${jsonFiles.length} groups`);\n')),(0,i.kt)("p",null,"The script now gets the ",(0,i.kt)("strong",{parentName:"p"},"number of batches")," (a batch is a group of calculations executed at once) and the ",(0,i.kt)("strong",{parentName:"p"},"time between executions.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'    //number of divisions of the time given\n    const numberOfBatchs =  Math.ceil(jsonFiles.length / config.batchSize) \n    if(numberOfBatchs <=1 ) {log("All done, nothing changed");return result}\n\n    // takes out the intial date (not modified)\n    // 60 min / (4-1) = 20 => i*20 => [00:00, 00:20, 00:40, 00:60]\n    const numberOfBatchsNormalized = numberOfBatchs-1 \n\n    const minutesBetweenRuns = config.maxMinutesDelay / numberOfBatchsNormalized; \n    log(`${jsonFiles.length} files in groups of ${config.batchSize} \n        = ${numberOfBatchs} ,minutesBetweenRuns: ${minutesBetweenRuns}`)\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Stores the dates in variables.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"    jsonFiles.forEach((file, index) => {\n        const fullFilePath = path.join(currentDirectory, file+\".json\");\n      const content = fs.readFileSync(fullFilePath, 'utf8') \n\n      const data = JSON.parse(content);\n\n      const initDate = moment.utc(data.init, 'YYYY-MM-DDTHH:mm:ss.SSSZ');\n      const endDate = moment.utc(data.end, 'YYYY-MM-DDTHH:mm:ss.SSSZ');\n")),(0,i.kt)("p",null,"The script now ",(0,i.kt)("strong",{parentName:"p"},"modifies the original dates")," (course default) to spread the executions ",(0,i.kt)("strong",{parentName:"p"},"using minutesBetweenRuns")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"      //why the %(mod) operation? \n      //Lets say you have 5 computations (index)(C) to do in 2 defined Times(T). \n      //You assign computations C0->T0 C1->T1 \n      // !!start again in Time 0!! \n      //C2-T0, C3->T1, C4->T0... the index can have big values, \n      //mod operation resets them to always keep them within the batches range\n      \n      const adjustedInit = initDate.add(\n            (index%numberOfBatchs) * minutesBetweenRuns *60*1000, 'ms')\n            .format('YYYY-MM-DDTHH:mm:ss.SSSZ');\n            //example: i*20 => [00:00, 00:20, 00:40, 00:60]\n      const adjustedEnd = endDate.add(\n        (index%numberOfBatchs) * minutesBetweenRuns *60*1000, 'ms')\n        .format('YYYY-MM-DDTHH:mm:ss.SSSZ');\n\n      data.init = adjustedInit;\n      data.end = adjustedEnd;\n\n      const updatedContent = JSON.stringify(data, null, 2);\n      \n      fs.writeFileSync(fullFilePath, updatedContent, 'utf8');\n      log(`Updated file content:`);\n      log(data);\n      \n    });\n\n")),(0,i.kt)("p",null,"This is the end of the script. These lines are also from the ",(0,i.kt)("strong",{parentName:"p"},"script.js template")," mentioned above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"    log(\"script end\")\n    return result;\n    //SCRIPT END\n\n  } catch (error) {\n    return { error: error.stack.split('\\n').slice(0,3), log: result.log };\n  }\n};\n")))}m.isMDXComponent=!0},2283:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/load-optimize-90a8f134b0fa5346503a702d0270fa20.png"}}]);