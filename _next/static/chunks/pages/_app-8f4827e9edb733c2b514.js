_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{0:function(t,e,r){r("GcxT"),t.exports=r("nOHt")},"1TCz":function(t,e,r){"use strict";r.r(e);var n=r("ODXe"),o=r("q1tI"),u=r.n(o),c=(r("jkdO"),r("hmtA"),r("zSBW"));function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var s={slider:[],sliderCurrent:null,pageInfo:{},counter:0,korzina:[]},l=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_SLIDER_ITEMS":return f(f({},t),{},{slider:e.items});case"SET_SLIDER_CURRENT":return f(f({},t),{},{sliderCurrent:e.value});case"SET_PAGE_INFO":return f(f({},t),{},{pageInfo:e.pageInfo});case"PLUS":return f(f({},t),{},{counter:t.counter+1});case"MINUS":return f(f({},t),{},{counter:t.counter-1});default:return t}},p=u.a.createElement;e.default=function(t){var e=t.Component,r=t.pageProps,o=u.a.useReducer(l,s),i=Object(n.a)(o,2),a=i[0],f=i[1];return p(c.a.Provider,{value:{dispatch:f,state:a}},p(e,r))}},GcxT:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r("1TCz")}])},ODXe:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,u=void 0;try{for(var c,i=t[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!e||r.length!==e);n=!0);}catch(a){o=!0,u=a}finally{try{n||null==i.return||i.return()}finally{if(o)throw u}}return r}}(t,e)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,"a",(function(){return o}))},hmtA:function(t,e,r){},jkdO:function(t,e,r){},zSBW:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("q1tI"),o=r.n(n).a.createContext()}},[[0,0,2,1]]]);