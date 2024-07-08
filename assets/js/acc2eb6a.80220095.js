"use strict";(self.webpackChunkbluejay_docs=self.webpackChunkbluejay_docs||[]).push([[535],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||r;return n?a.createElement(h,s(s({ref:t},m),{},{components:n})):a.createElement(h,s({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,s=new Array(r);s[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(7462),i=(n(7294),n(3905));const r={title:"Optimize Calculation Period",description:"Optimize",sidebar_position:4,hide_table_of_contents:!1},s="Optimize Calculation Period",o={unversionedId:"development/extending-bluejay/custom-tasks/optimize-calculation-period",id:"development/extending-bluejay/custom-tasks/optimize-calculation-period",title:"Optimize Calculation Period",description:"Optimize",source:"@site/docs/development/extending-bluejay/custom-tasks/optimize-calculation-period.md",sourceDirName:"development/extending-bluejay/custom-tasks",slug:"/development/extending-bluejay/custom-tasks/optimize-calculation-period",permalink:"/development/extending-bluejay/custom-tasks/optimize-calculation-period",draft:!1,editUrl:"https://github.com/governify/bluejay-docs/edit/main/docs/development/extending-bluejay/custom-tasks/optimize-calculation-period.md",tags:[],version:"current",lastUpdatedBy:"JaviFdez7",lastUpdatedAt:1720417917,formattedLastUpdatedAt:"Jul 8, 2024",sidebarPosition:4,frontMatter:{title:"Optimize Calculation Period",description:"Optimize",sidebar_position:4,hide_table_of_contents:!1},sidebar:"defaultSidebar",previous:{title:"Create or Update a Class TPA",permalink:"/development/extending-bluejay/custom-tasks/create-or-update-class-tpa"},next:{title:"Adding New Sources",permalink:"/development/extending-bluejay/adding-new-sources"}},l={},c=[{value:"Load Optimize Calculation Period",id:"load-optimize-calculation-period",level:2},{value:"Configure the script",id:"configure-the-script",level:2},{value:"Run the script",id:"run-the-script",level:2},{value:"Technical details",id:"technical-details",level:2}],m={toc:c},u="wrapper";function p(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"optimize-calculation-period"},"Optimize Calculation Period"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Bluejay has an automatic calculation system for its TPAs. However, fetching data and calculating metrics for a course consisting of numerous teams can lead to performance issues."),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},'"Optimize Calculation Period"')," script aims to resolve the challenge of multiple automatic calculations triggering simultaneously within a course.\nIt achieves this by ",(0,i.kt)("strong",{parentName:"p"},"evenly distributing")," the execution times for these calculations across a given period of time."),(0,i.kt)("p",null,"This script is one of the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.governify.io/development/extending-governify/custom-tasks"},"Custom Tasks of Extending Governify"),", and it is stored within the assets-bluejay repository ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/governify/assets-bluejay/blob/main/public/director/tasks/utils/optimizeCalculationPeriod/script.js"},"(link)"),"."),(0,i.kt)("p",null,"In this document, we will discuss how to load, configure, and run the script from the user interface. If you want to see the inner workings of this script, we will provide an explanation of the technical details in the last section."),(0,i.kt)("h2",{id:"load-optimize-calculation-period"},"Load Optimize Calculation Period"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to  ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"ui.bluejay.","[YourDomain]"))," "),(0,i.kt)("li",{parentName:"ol"},"Click on Admin UI"),(0,i.kt)("li",{parentName:"ol"},"Click on the Task Runner tab"),(0,i.kt)("li",{parentName:"ol"},"Open the dropdown and select ",(0,i.kt)("strong",{parentName:"li"},"optimizeCalculationPeriod."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"load optimize",src:n(2283).Z,width:"2680",height:"539"})),(0,i.kt)("h2",{id:"configure-the-script"},"Configure the script"),(0,i.kt)("p",null,"Let's have a look at the Configuration.json parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"filenameMustIncludeAll"),": ",(0,i.kt)("em",{parentName:"li"},"string array"),".    ",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"This field specifies the substrings that must be included in the filenames of computation tasks in the director's folder inside the Bluejay assets. This can be used to filter the tasks by courseName, year, etc. Example name of the files: ",(0,i.kt)("inlineCode",{parentName:"p"},"tpa-class01-GH-motero2k_Bluejay-test-TPA-23-24.json")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"startingTime"),": ",(0,i.kt)("em",{parentName:"li"},"string"),". ",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"The starting time in 24-hour format (HH:mm) from which the calculations should begin for the teams selected."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"endingTime"),": ",(0,i.kt)("em",{parentName:"li"},"string"),".",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"The ending time in 24-hour format (HH:mm) by which all calculations should be completed."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"batchSize"),": ",(0,i.kt)("em",{parentName:"li"},"int"),".",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"This field indicates the number of teams that can be activated at the same time.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," ",(0,i.kt)("strong",{parentName:"p"},"5 teams")," in a course ",(0,i.kt)("inlineCode",{parentName:"p"},"class01")," with activated automatic calculations at any time. The script with the following configuration will distribute evenly the calculations between ",(0,i.kt)("inlineCode",{parentName:"p"},"14:00")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"16:00")," in batches of ",(0,i.kt)("inlineCode",{parentName:"p"},"2")," teams each."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "filenameMustIncludeAll": ["tpa-","class01"],\n    "startingTime": "14:00",\n    "endingTime": "16:00",\n    "batchSize": 2\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-txt"},"-----------------------------------------\nexpected result:\n5 teams / 2 teams per batch = 2 batches of 2 + 1 batch of 1, total 3 batches.\n\n-----------------------------------------\nbatch1 14:00 -> Team1 and Team2\nbatch2 15:00 -> Team3 and Team4\nbatch3 16:00 -> Team5 \n")),(0,i.kt)("h2",{id:"run-the-script"},"Run the script"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Click run")," and you will see the results in the log of ",(0,i.kt)("strong",{parentName:"p"},"Result.json:")," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "date": "2023-10-01T15:40:21.658Z",\n  "log": [\n    "Current directory: /opt/app/tasks",\n    "Searching for JSON files containing: class1",\n    "Active computations: ",\n    [\n      "tpa-class1-GH-motero2k_Bluejay-test-TPA-23-24",\n      "tpa-class1-GH-motero2k_Test-Repo-for-Bluejay-copy1",\n      "tpa-class1-GH-motero2k_Test-Repo-for-Bluejay-copy2",\n      "tpa-class1-GH-motero2k_Test-Repo-for-Bluejay-copy3",\n      "tpa-class1-GH-motero2k_test2-for-bluejay"\n    ],\n    "5 files in groups of 2 = 3 ,minutesBetweenRuns: 60",\n    #changed configuration files are shown here\n    ,\n    "script end"\n  ]\n}\n')),(0,i.kt)("admonition",{title:"bear in mind",type:"info"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"You can check the new dates in the ",(0,i.kt)("strong",{parentName:"li"},"Task Management")," tab"),(0,i.kt)("li",{parentName:"ul"},"If you want to execute this script again, you must ",(0,i.kt)("strong",{parentName:"li"},"turn off and on all automatic calculations in the course")," (this resets the launch times to default)."),(0,i.kt)("li",{parentName:"ul"},"Bluejay use ",(0,i.kt)("inlineCode",{parentName:"li"},"tpa-")," prefix for the automatic agreements calculations, so it is recommended to use this prefix in the filenameMustIncludeAll field."))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"technical-details"},"Technical details"),(0,i.kt)("p",null,"This section explains line by line the ",(0,i.kt)("strong",{parentName:"p"},"optimizeCalculationPeriod")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/governify/assets-bluejay/blob/main/public/director/tasks/utils/optimizeCalculationPeriod/script.js"},"script.js"),"."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Imports:")," fs for file writing, path for joining strings as paths and moment to modify the dates."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"\"use strict\";\n\nconst fs = require('fs');\nconst path = require('path');\nconst moment = require('moment');\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"These lines belong to the ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/governify/assets-bluejay/blob/main/public/director/tasks/examples/template/script.js"},"script.js template"),".")," This is necessary to execute a custom task a receive a result in the UI:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"\nmodule.exports.main = async (config) => {\n  let result = { date: new Date(), log: [] };\n  const log = (data) => {console.log(data);result.log.push(data)};\n  const throwError = (message) => {result.log.push(message); \n  throw new Error(result.log[result.log.length-1])}\n  try {\n    //SCRIPT BEGIN\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Config variables"),": Extracting and validating the configuration variables."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'    const batchSize = config.batchSize\n    const startingTimeZstring = config.startingTime\n    const endingTimeZstring = config.endingTime\n    const filenameMustIncludeAll = config.filenameMustIncludeAll;\n\n    if(!Array.isArray(filenameMustIncludeAll) || filenameMustIncludeAll.length < 1) throw new Error("filenameMustInclude must be a string array")\n    if(typeof startingTimeZstring != "string" || typeof endingTimeZstring != "string") throw new Error("startingTime and endingTime must be strings")\n\n    if(!moment(startingTimeZstring, \'HH:mm\', true).isValid()) throw new Error("startingTime is not a valid time in 24h format (HH:mm)")\n    if(!moment(endingTimeZstring, \'HH:mm\', true).isValid()) throw new Error("endingTime is not a valid time in 24h format (HH:mm)")\n\n    if(typeof batchSize != "number" ) throw new Error("BatchSize must be number")\n    if(batchSize<1 || 20<  batchSize) throw new Error("BatchSize out of bounds [0,20]")\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Parsing time variables and searching for JSON files.")),(0,i.kt)("p",null,"The json files (active calculations) are searched in the tasks folder of the bluejay assets. The files are filtered by the filenameMustIncludeAll strings."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"    const startingTime = moment(startingTimeZstring, 'HH:mm');\n    const endingTime = moment(endingTimeZstring, 'HH:mm');\n\n    const currentDirectory = path.join(process.cwd(), 'tasks');\n    log(`Current directory: ${currentDirectory}`);\n    log(`Searching for JSON files containing: ${filenameMustIncludeAll}`);\n\n    const jsonFilesNames = fs.readdirSync(currentDirectory)\n    .filter(fileName => fileName.endsWith('.json')) \n    .filter(fileName => filenameMustIncludeAll.every(mustHaveString => fileName.includes(mustHaveString)))\n    .map(fileName => path.parse(fileName).name);\n\n    if(jsonFilesNames.length < 1){\n      throwError(\"Automatic computations not found in course containing \"+ filenameMustIncludeAll)\n    }\n    log(\"Active computations: \")\n    log(jsonFilesNames)\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Determining the number of batches and the time interval between them.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},'    if(batchSize > jsonFilesNames.length) throwError(`batch number too big (${batchSize}) for ${jsonFilesNames.length} groups`)\n    const numberOfBatchs =  Math.ceil(jsonFilesNames.length / batchSize)\n    if(numberOfBatchs <1 ) {log("All done, nothing changed");return result}\n    const numberOfBatchsNormalized = numberOfBatchs-1\n    const timeBetweenRuns = (endingTime.diff(startingTime) / numberOfBatchsNormalized);\n    log(`${jsonFilesNames.length} files in groups of ${batchSize} = ${numberOfBatchs} ,minutesBetweenRuns: ${timeBetweenRuns/60000} minutes`)\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Adjusting the NEW initial and end dates for each computation task.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:"showLineNumbers",showLineNumbers:!0},"    jsonFilesNames.forEach((file, index) => {\n      const fullFilePath = path.join(currentDirectory, file+\".json\");\n\n      const content = fs.readFileSync(fullFilePath, 'utf8') \n\n      const data = JSON.parse(content);\n\n      const initDate = moment.utc(data.init, 'YYYY-MM-DDTHH:mm:ss.SSSZ');\n      const endDate = moment.utc(data.end, 'YYYY-MM-DDTHH:mm:ss.SSSZ');\n\n      const adjustedInit = initDate\n      .set({hour: startingTime.hours(), minute: startingTime.minutes(), second:0, milisecond:0}) \n      .add((index%numberOfBatchs) * timeBetweenRuns , 'ms');\n      const adjustedEnd = endDate\n      .set({hour: adjustedInit.hours(), minute: adjustedInit.minutes()})\n      \n      data.init = adjustedInit.format('YYYY-MM-DDTHH:mm:ss.SSSZ');\n      data.end = adjustedEnd.format('YYYY-MM-DDTHH:mm:ss.SSSZ');\n\n      const updatedContent = JSON.stringify(data, null, 2);\n      \n      fs.writeFileSync(fullFilePath, updatedContent, 'utf8');\n      log(`Updated file content:`);\n      log(data);\n      \n    });\n\n    log(\"script end\")\n    return result;\n    //SCRIPT END\n\n  } catch (error) {\n    return { error: error.stack.split('\\n').slice(0,10), log: result.log };\n  }\n};\n")))}p.isMDXComponent=!0},2283:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/load-optimize-90a8f134b0fa5346503a702d0270fa20.png"}}]);