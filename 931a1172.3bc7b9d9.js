(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{120:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(129),c=t(3),s=t(145),m=t(131);function i(e){var a=e.icon,t=e.name,n=e.count;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--12"},r.a.createElement("div",{className:"avatar",style:{margin:".5rem 0 .5rem 0",padding:"5px"}},r.a.createElement("img",{className:"avatar__photo avatar__photo--sm",style:{borderRadius:0},src:a||Object(m.a)("img/logo-new.png")}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("h4",{className:"avatar__name"},t),r.a.createElement("small",{className:"avatar__subtitle",style:{fontWeight:600}},"\u04ae\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 \u0442\u043e\u043e: ",n))))))}function o(){var e=Object(s.usePluginData)("data-loader").orgData,a=Object(n.useState)(e),t=a[0],l=a[1];return r.a.createElement("div",{className:"row"},t.map((function(e){var a=e.id,t=e.name,n=e.count,s=e.icon,o=e.subCats,u=e.open;return r.a.createElement("div",{className:"col col--6",key:a,onClick:function(){return function(e){l((function(a){return a.map((function(a){return a.id===e&&(a.open=!a.open),a}))}))}(a)}},r.a.createElement("div",{className:"avatar",style:{margin:".5rem 0 .5rem 0",padding:10,borderRadius:10,border:"1px solid rgba(0,0,0,0.08)",cursor:u?"default":"pointer"}},r.a.createElement("img",{className:"avatar__photo avatar__photo--lg",style:{borderRadius:0},src:s||Object(m.a)("img/logo-new.png")}),r.a.createElement("div",{className:"avatar__intro"},r.a.createElement("h4",{className:"avatar__name",style:{fontSize:"1rem"}},t),r.a.createElement("small",{className:"avatar__subtitle",style:{fontWeight:600}},"\u04ae\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 \u0442\u043e\u043e: ",n),o&&o.length>0&&r.a.createElement("small",{className:"avatar__subtitle",style:{fontWeight:600}},"\u0421\u0430\u043b\u0431\u0430\u0440 \u0431\u0430\u0439\u0433\u0443\u0443\u043b\u043b\u0430\u0433\u044b\u043d \u0442\u043e\u043e: ",o.length),u?o&&o.map((function(e){return r.a.createElement(i,Object(c.a)({key:e.id},e))})):null)))})))}a.default=function(){return r.a.createElement(l.a,{title:"\u0425\u0430\u043c\u0442\u0440\u0430\u0433\u0447 \u0431\u0430\u0439\u0433\u0443\u0443\u043b\u043b\u0430\u0433\u0443\u0443\u0434",description:"E-mongolia \u0441\u0438\u0441\u0442\u0435\u043c \u0434\u044d\u044d\u0440\u0445 \u0445\u0430\u043c\u0442\u0440\u0430\u0433\u0447 \u0431\u0430\u0439\u0433\u0443\u0443\u043b\u043b\u0430\u0433\u0443\u0443\u0434"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"}},r.a.createElement("h1",{style:{marginTop:"1rem"}},"\u0425\u0430\u043c\u0442\u0440\u0430\u0433\u0447 \u0431\u0430\u0439\u0433\u0443\u0443\u043b\u043b\u0430\u0433\u0443\u0443\u0434")),r.a.createElement(o,null)))}}}]);