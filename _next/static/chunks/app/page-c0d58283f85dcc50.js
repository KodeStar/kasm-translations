(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{2601:function(e,t,n){"use strict";var r,o;e.exports=(null==(r=n.g.process)?void 0:r.env)&&"object"==typeof(null==(o=n.g.process)?void 0:o.env)?n.g.process:n(8960)},431:function(e,t,n){Promise.resolve().then(n.bind(n,5003))},4377:function(e,t,n){"use strict";var r=n(2601);let o=r.env.GITHUB_ACTIONS||!1,s="",i="";if(o){let e=r.env.GITHUB_REPOSITORY.replace(/.*?\//,"");s="/".concat(e,"/"),i="/".concat(e)}e.exports={output:"export",assetPrefix:s,basePath:i}},5003:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return a}});var r=n(7437),o=n(2265),s=n(4377),i=n.n(s);function l(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter(Boolean).join(" ")}function a(){let e=e=>"".concat(i().basePath).concat(e),[t,n]=(0,o.useState)(null),[s,a]=(0,o.useState)(""),[c,u]=(0,o.useState)(null),[d,f]=(0,o.useState)("agents");async function m(t){let n=await fetch(e("/locales/"+t+"/common.json"));if(!n.ok)throw Error("Failed to fetch data");return n.json()}(0,o.useEffect)(()=>{console.log(i());let e=async()=>{let e=await m("en");n(e)};e()},[]);let h=async()=>{u(null);try{let e=await m(s);u(e)}catch(e){u(null)}},p=(e,t,n)=>{if(Object.keys(c).length>0){let r={...c};r[e][t]=n.target.value,u(r)}};return(0,r.jsxs)("main",{className:"flex min-h-screen flex-col items-center justify-between p-10",children:[(0,r.jsxs)("div",{className:"relative flex mb-10 w-full max-w-lg",children:[(0,r.jsx)("input",{type:"text",className:"w-full rounded-l-md border-transparent",onChange:e=>{a(e.target.value)},placeholder:"i.e. de or de-AT"}),(0,r.jsx)("button",{className:"inline-flex items-center gap-x-1.5 rounded-r-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",type:"button",onClick:h,children:"Search"}),(0,r.jsx)("button",{className:"ml-10 inline-flex items-center gap-x-1.5 rounded-md bg-blue-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500",type:"button",onClick:()=>{var e,t;return e="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(c,null,"	")),void((t=document.createElement("a")).setAttribute("href",e),t.setAttribute("download","common.json"),document.body.appendChild(t),t.click(),t.remove())},children:"Export"}),(0,r.jsx)("div",{className:"text-xs absolute -top-6 left-0",children:"Set country code to translate"})]}),(0,r.jsxs)("div",{className:"flex rounded-lg overflow-hidden w-full max-w-7xl",children:[(0,r.jsx)("div",{className:"w-full max-w-xs",children:t&&(()=>{let e=t&&Object.keys(t);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"sm:hidden",children:[(0,r.jsx)("label",{htmlFor:"tabs",className:"sr-only",children:"Select a tab"}),(0,r.jsx)("select",{id:"tabs",name:"tabs",className:"block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500",defaultValue:e&&e.find(e=>e===d),children:e&&e.map(e=>(0,r.jsx)("option",{children:e},e||"tab"))})]}),(0,r.jsx)("div",{className:"hidden sm:block",children:(0,r.jsx)("nav",{className:"isolate flex flex-col divide-x divide-gray-200 rounded-lg shadow","aria-label":"Tabs",children:e&&e.map(e=>(0,r.jsxs)("button",{type:"button",onClick:()=>f(e),className:l(e===d?"text-gray-900 bg-gray-100":"text-gray-500 hover:text-gray-700 hover:bg-gray-50 bg-white","group relative min-w-0 flex-1 overflow-hidden py-4 px-4 text-center text-sm font-medium focus:z-10"),"aria-current":e===d?"page":void 0,children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)("span",{"aria-hidden":"true",className:l(e===d?"bg-blue-500":"bg-transparent","absolute inset-y-0 left-0 w-1")})]},e||"buttontab"))})})]})})()}),(0,r.jsx)("div",{className:"w-full flex-grow bg-gray-100 p-3",children:t&&Object.keys(t).map(e=>Object.keys(t[e]).map(n=>(0,r.jsxs)("div",{className:l("flex flex-col bg-gray-50 mb-3 p-2 px-10",e===d?"":"hidden"),children:[(0,r.jsx)("div",{className:"opacity-60 text-xs",children:t[e][n]}),c&&(0,r.jsxs)("div",{className:"relative mt-2",children:[(0,r.jsx)("input",{type:"text",className:"peer block w-full border-0 bg-gray-50 p-0 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6",defaultValue:c[e][n],onChange:t=>p(e,n,t)}),(0,r.jsx)("div",{className:"absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-blue-500","aria-hidden":"true"})]})]},e+"."+n)))})]})]})}},8960:function(e){!function(){var t={229:function(e){var t,n,r,o=e.exports={};function s(){throw Error("setTimeout has not been defined")}function i(){throw Error("clearTimeout has not been defined")}function l(e){if(t===setTimeout)return setTimeout(e,0);if((t===s||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:s}catch(e){t=s}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var a=[],c=!1,u=-1;function d(){c&&r&&(c=!1,r.length?a=r.concat(a):u=-1,a.length&&f())}function f(){if(!c){var e=l(d);c=!0;for(var t=a.length;t;){for(r=a,a=[];++u<t;)r&&r[u].run();u=-1,t=a.length}r=null,c=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new m(e,t)),1!==a.length||c||l(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var s=n[e]={exports:{}},i=!0;try{t[e](s,s.exports,r),i=!1}finally{i&&delete n[e]}return s.exports}r.ab="//";var o=r(229);e.exports=o}()},622:function(e,t,n){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),o=Symbol.for("react.element"),s=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var r,a={},c=null,u=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(u=t.ref),t)s.call(t,r)&&!l.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:c,ref:u,props:a,_owner:i.current}}t.jsx=a,t.jsxs=a},7437:function(e,t,n){"use strict";e.exports=n(622)}},function(e){e.O(0,[971,596,744],function(){return e(e.s=431)}),_N_E=e.O()}]);