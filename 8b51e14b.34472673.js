(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{120:function(e,a,t){"use strict";t.d(a,"b",(function(){return o})),t.d(a,"a",(function(){return i}));var n=t(24),r=t(124);function o(){var e=Object(n.default)().siteConfig,a=(e=void 0===e?{}:e).baseUrl,t=void 0===a?"/":a,o=e.url;return{withBaseUrl:function(e,a){return function(e,a,t,n){var o=void 0===n?{}:n,i=o.forcePrependBaseUrl,l=void 0!==i&&i,u=o.absolute,s=void 0!==u&&u;if(!t)return t;if(t.startsWith("#"))return t;if(Object(r.b)(t))return t;if(l)return a+t;var c=t.startsWith(a)?t:a+t.replace(/^\//,"");return s?e+c:c}(o,t,e,a)}}}function i(e,a){return void 0===a&&(a={}),(0,o().withBaseUrl)(e,a)}},124:function(e,a,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!n(e)}t.d(a,"b",(function(){return n})),t.d(a,"a",(function(){return r}))},127:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return r})),t.d(a,"useAllPluginInstancesData",(function(){return o})),t.d(a,"usePluginData",(function(){return i}));var n=t(24);function r(){var e=Object(n.default)().globalData;if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){var a=r()[e];if(!a)throw new Error("Docusaurus plugin global data not found for pluginName="+e);return a}function i(e,a){void 0===a&&(a="default");var t=o(e)[a];if(!t)throw new Error("Docusaurus plugin global data not found for pluginName="+e+" and pluginId="+a);return t}},60:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return s}));var n=t(3),r=t(0),o=t.n(r),i=t(127),l=t(120);function u({icon:e,name:a,count:t}){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col col--12"},o.a.createElement("div",{className:"avatar",style:{margin:".5rem 0 .5rem 0",padding:"5px"}},o.a.createElement("img",{className:"avatar__photo avatar__photo--sm",style:{borderRadius:0},src:e||Object(l.a)("img/logo-new.png")}),o.a.createElement("div",{className:"avatar__intro"},o.a.createElement("h4",{className:"avatar__name"},a),o.a.createElement("small",{className:"avatar__subtitle",style:{fontWeight:600}},"\u04ae\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 \u0442\u043e\u043e: ",t))))))}function s(){const{orgData:e}=Object(i.usePluginData)("data-loader"),[a,t]=Object(r.useState)(e);return o.a.createElement("div",{className:"row"},a.map((({id:e,name:a,count:r,icon:i,subCats:s,open:c})=>o.a.createElement("div",{className:"col col--6",key:e,onClick:()=>(e=>{t((a=>a.map((a=>(a.id===e&&(a.open=!a.open),a)))))})(e)},o.a.createElement("div",{className:"avatar",style:{margin:".5rem 0 .5rem 0",padding:10,borderRadius:10,border:"1px solid rgba(0,0,0,0.08)",cursor:c?"default":"pointer"}},o.a.createElement("img",{className:"avatar__photo avatar__photo--lg",style:{borderRadius:0},src:i||Object(l.a)("img/logo-new.png")}),o.a.createElement("div",{className:"avatar__intro"},o.a.createElement("h4",{className:"avatar__name",style:{fontSize:"1rem"}},a),o.a.createElement("small",{className:"avatar__subtitle",style:{fontWeight:600}},"\u04ae\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 \u0442\u043e\u043e: ",r),s&&s.length>0&&o.a.createElement("small",{className:"avatar__subtitle",style:{fontWeight:600}},"\u0421\u0430\u043b\u0431\u0430\u0440 \u0431\u0430\u0439\u0433\u0443\u0443\u043b\u043b\u0430\u0433\u044b\u043d \u0442\u043e\u043e: ",s.length),c?s&&s.map((e=>o.a.createElement(u,Object(n.a)({key:e.id},e)))):null))))))}}}]);