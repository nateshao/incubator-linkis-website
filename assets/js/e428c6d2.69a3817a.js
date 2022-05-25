"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[499],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66290:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={title:"Entrance Architecture Design",sidebar_position:3},c=void 0,l={unversionedId:"architecture/computation_governance_services/entrance",id:"version-1.1.1/architecture/computation_governance_services/entrance",isDocsHomePage:!1,title:"Entrance Architecture Design",description:"The Links task submission portal is used to receive, schedule, forward execution requests, life cycle management services for computing tasks, and can return calculation results, logs, and progress to the caller. It is split from the Entrance of Linkis0.X Native capabilities.",source:"@site/versioned_docs/version-1.1.1/architecture/computation_governance_services/entrance.md",sourceDirName:"architecture/computation_governance_services",slug:"/architecture/computation_governance_services/entrance",permalink:"/docs/latest/architecture/computation_governance_services/entrance",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/versioned_docs/version-1.1.1/architecture/computation_governance_services/entrance.md",tags:[],version:"1.1.1",sidebarPosition:3,frontMatter:{title:"Entrance Architecture Design",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"EngineConnPlugin (ECP) Design",permalink:"/docs/latest/architecture/computation_governance_services/engine/engine_conn_plugin"},next:{title:"Linkis-Client Architecture Design",permalink:"/docs/latest/architecture/computation_governance_services/linkis-cli"}},u=[{value:"EntranceServer",id:"entranceserver",children:[]}],p={toc:u};function m(e){var t=e.components,s=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The Links task submission portal is used to receive, schedule, forward execution requests, life cycle management services for computing tasks, and can return calculation results, logs, and progress to the caller. It is split from the Entrance of Linkis0.X Native capabilities."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Entrance architecture diagram")),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(97178).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Introduction to the second-level module:")),(0,i.kt)("h2",{id:"entranceserver"},"EntranceServer"),(0,i.kt)("p",null,"EntranceServer computing task submission portal service is the core service of Entrance, responsible for the reception, scheduling, execution status tracking, and job life cycle management of Linkis execution tasks. It mainly realizes the conversion of task execution requests into schedulable Jobs, scheduling, applying for Executor execution, job status management, result set management, log management, etc."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Core Class"),(0,i.kt)("th",{parentName:"tr",align:null},"Core Function"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EntranceInterceptor"),(0,i.kt)("td",{parentName:"tr",align:null},"Entrance interceptor is used to supplement the information of the incoming parameter task, making the content of this task more complete. The supplementary information includes: database information supplement, custom variable replacement, code inspection, limit restrictions, etc.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EntranceParser"),(0,i.kt)("td",{parentName:"tr",align:null},"The Entrance parser is used to parse the request parameter Map into Task, and it can also convert Task into schedulable Job, or convert Job into storable Task.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"EntranceExecutorManager"),(0,i.kt)("td",{parentName:"tr",align:null},"Entrance executor management creates an Executor for the execution of EntranceJob, maintains the relationship between Job and Executor, and supports the labeling capabilities requested by Job")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PersistenceManager"),(0,i.kt)("td",{parentName:"tr",align:null},"Persistence management is responsible for job-related persistence operations, such as the result set path, job status changes, progress, etc., stored in the database.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"ResultSetEngine"),(0,i.kt)("td",{parentName:"tr",align:null},"The result set engine is responsible for the storage of the result set after the job is run, and it is saved in the form of a file to HDFS or a local storage directory.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LogManager"),(0,i.kt)("td",{parentName:"tr",align:null},"Log Management is responsible for the storage of job logs and the management of log error codes.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Scheduler"),(0,i.kt)("td",{parentName:"tr",align:null},"The job scheduler is responsible for the scheduling and execution of all jobs, mainly through scheduling job queues.")))))}m.isMDXComponent=!0},97178:function(e,t,n){t.Z=n.p+"assets/images/linkis-entrance-01-3182944fdb0f81758ede7cb2dd109e03.png"}}]);