"use strict";(self.webpackChunklinkis_web_apache=self.webpackChunklinkis_web_apache||[]).push([[5610],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},729:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),a=["components"],c={title:"Exception Catch",sidebar_position:1},l=void 0,p={unversionedId:"development/development_specification/exception_catch",id:"development/development_specification/exception_catch",isDocsHomePage:!1,title:"Exception Catch",description:"1. [Mandatory] For the exception of each small module, a special exception class should be defined to facilitate the subsequent generation of error codes for users. It is not allowed to throw any RuntimeException or directly throw Exception.",source:"@site/docs/development/development_specification/exception_catch.md",sourceDirName:"development/development_specification",slug:"/development/development_specification/exception_catch",permalink:"/docs/next/development/development_specification/exception_catch",editUrl:"https://github.com/apache/incubator-linkis-website/edit/master/docs/development/development_specification/exception_catch.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Exception Catch",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Concurrent",permalink:"/docs/next/development/development_specification/concurrent"},next:{title:"Exception Throws",permalink:"/docs/next/development/development_specification/exception_throws"}},s=[],u={toc:s};function d(e){var t=e.components,n=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("strong",{parentName:"p"},"Mandatory"),"]"," For the exception of each small module, a special exception class should be defined to facilitate the subsequent generation of error codes for users. It is not allowed to throw any RuntimeException or directly throw Exception.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Try not to try-catch a large section of code. This is irresponsible. Please distinguish between stable code and non-stable code when catching. Stable code refers to code that will not go wrong anyway. For the catch of unstable code, try to distinguish the exception types as much as possible, and then do the corresponding exception handling.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("strong",{parentName:"p"},"Mandatory"),"]"," The purpose of catching an exception is to handle it. Don't throw it away without handling it. If you don't want to handle it, please throw the exception to its caller. Note: Do not use e.printStackTrace() under any circumstances! The outermost business users must deal with exceptions and turn them into content that users can understand.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The finally block must close the resource object and the stream object, and try-catch if there is an exception.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"[",(0,i.kt)("strong",{parentName:"p"},"Mandatory"),"]"," Prevent NullPointerException. The return value of the method can be null, and it is not mandatory to return an empty collection, or an empty object, etc., but a comment must be added to fully explain under what circumstances the null value will be returned. RPC and SpringCloud Feign calls all require non-empty judgments."))))}d.isMDXComponent=!0}}]);