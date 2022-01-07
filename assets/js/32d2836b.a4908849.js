"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[7634],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return m}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=t.createContext({}),l=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=l(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?t.createElement(k,c(c({ref:n},u),{},{components:r})):t.createElement(k,c({ref:n},u))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,c=new Array(o);c[0]=d;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var l=2;l<o;l++)c[l]=r[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1933:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var t=r(7462),i=r(3366),o=(r(7294),r(3905)),c=["components"],a={title:"Source Code Directory Structure",sidebar_position:5},s="Source Code Directory Structure",l={unversionedId:"deployment/sourcecode_hierarchical_structure",id:"deployment/sourcecode_hierarchical_structure",isDocsHomePage:!1,title:"Source Code Directory Structure",description:"Linkis source code hierarchical directory structure description, if you want to learn more about Linkis modules, please check Linkis related architecture design",source:"@site/docs/deployment/sourcecode_hierarchical_structure.md",sourceDirName:"deployment",slug:"/deployment/sourcecode_hierarchical_structure",permalink:"/docs/1.0.3/deployment/sourcecode_hierarchical_structure",editUrl:"https://github.com/apache/incubator-linkis-website/edit/dev/docs/deployment/sourcecode_hierarchical_structure.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Source Code Directory Structure",sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Installation Directory Structure",permalink:"/docs/1.0.3/deployment/installation_hierarchical_structure"},next:{title:"Linkis Console Deployment",permalink:"/docs/1.0.3/deployment/web_install"}},u=[],p={toc:u};function d(e){var n=e.components,r=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"source-code-directory-structure"},"Source Code Directory Structure"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Linkis source code hierarchical directory structure description, if you want to learn more about Linkis modules, please check ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.0.3/architecture/overview"},"Linkis related architecture design"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},"|-- assembly-combined-package //Compile the module of the entire project\n|        |-- assembly-combined\n|        |-- bin\n|        |-- config\n|        |-- src\n|-- linkis-commons //Core abstraction, which contains all common modules\n|        |-- linkis-common //Common module, built-in many common tools\n|        |-- linkis-hadoop-common\n|        |-- linkis-httpclient //Java SDK top-level interface\n|        |-- linkis-message-scheduler\n|        |-- linkis-module\n|        |-- linkis-mybatis //SpringCloud's Mybatis module\n|        |-- linkis-protocol\n|        |-- linkis-rpc //RPC module, complex two-way communication based on Feign\n|        |-- linkis-scheduler //General scheduling module\n|        |-- linkis-storage\n|        |\n|-- linkis-computation-governance //computing governance service\n|        |-- linkis-client //Java SDK, users can directly access Linkis through Client\n|        |-- linkis-computation-governance-common\n|        |-- linkis-engineconn\n|        |-- linkis-engineconn-manager\n|        |-- linkis-entrance //General low-level entrance module\n|        |-- linkis-entrance-client\n|        |-- linkis-jdbc-driver\n|        |-- linkis-manager\n|\n|-- linkis-engineconn-plugins\n|        |-- engineconn-plugins\n|        |-- linkis-engineconn-plugin-framework\n|\n|-- linkis-extensions\n|        |-- linkis-io-file-client\n|-- linkis-orchestrator\n|        |-- linkis-code-orchestrator\n|        |-- linkis-computation-orchestrator\n|        |-- linkis-orchestrator-core\n|        |-- plugin\n|-- linkis-public-enhancements //Public enhancement services\n|        |-- linkis-bml // Material library\n|        |-- linkis-context-service //Unified context\n|        |-- linkis-datasource //Data source service\n|        |-- linkis-publicservice //Public Service\n|-- linkis-spring-cloud-services //Microservice governance\n|        |-- linkis-service-discovery\n|        |-- linkis-service-gateway //Gateway\n|-- db //Database information\n|-- license-doc //license details\n|        |-- license //The license of the background project\n|         - ui-license //License of linkis management desk\n|-- tool //Tool script\n|        |-- check.sh\n|        |-- dependencies\n|\n|-- web //Management desk code of linkis\n")))}d.isMDXComponent=!0}}]);