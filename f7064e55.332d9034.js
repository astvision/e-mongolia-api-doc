(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{123:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(132),c=t(126),o=t(143),s=t(144),i=t(139);function m(e){var a=e.data;return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},a&&a.map((function(e){var a=e.id,t=e.idKey,l=e.name;return n.a.createElement("div",{key:a,className:Object(c.a)("col","col--6")},n.a.createElement("div",{className:"card-demo",style:{margin:"5px 0"}},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__header"},n.a.createElement("a",{href:"https://e-mongolia.mn/service/"+t,rel:"noreferrer noopener",target:"_blank"},n.a.createElement("b",null,l))))))}))))}function u(e){var a=e.data,t=Object.keys(a),l=t[0],r=Array.from(t,(function(e,a){return{label:e,value:e}}));return n.a.createElement(o.a,{defaultValue:l,values:r,block:!0},t.map((function(e){return n.a.createElement(s.a,{value:e},n.a.createElement(m,{data:a[e]}))})))}function d(){var e=Object(i.usePluginData)("data-loader"),a=e.mobileData,t=e.operatorData,l=e.portalData;return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--12"},n.a.createElement(o.a,{defaultValue:"mobile",values:[{label:"\u041c\u043e\u0431\u0430\u0439\u043b \u0441\u0438\u0441\u0442\u0435\u043c",value:"mobile"},{label:"\u041f\u043e\u0440\u0442\u0430\u043b \u0441\u0438\u0441\u0442\u0435\u043c",value:"portal"},{label:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0441\u0438\u0441\u0442\u0435\u043c",value:"operator"}],block:!0},n.a.createElement(s.a,{value:"mobile"},n.a.createElement(u,{data:a})),n.a.createElement(s.a,{value:"portal"},n.a.createElement(u,{data:l})),n.a.createElement(s.a,{value:"operator"},n.a.createElement(u,{data:t})))))}a.default=function(){return n.a.createElement(r.a,{title:"\u04ae\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u04af\u04af\u0434",description:"E-mongolia \u0441\u0438\u0441\u0442\u0435\u043c \u0434\u044d\u044d\u0440\u0445 \u04af\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u04af\u04af\u0434"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"}},n.a.createElement("h1",{style:{marginTop:"1rem"}},"\u04ae\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u04af\u04af\u0434")),n.a.createElement(d,null)))}},143:function(e,a,t){"use strict";var l=t(0),n=t.n(l),r=t(133),c=t(126),o=t(60),s=t.n(o);const i=37,m=39;a.a=function(e){const{lazy:a,block:t,defaultValue:o,values:u,groupId:d,className:b}=e,{tabGroupChoices:v,setTabGroupChoices:E}=Object(r.a)(),[f,p]=Object(l.useState)(o),h=l.Children.toArray(e.children);if(null!=d){const e=v[d];null!=e&&e!==f&&u.some((a=>a.value===e))&&p(e)}const N=e=>{p(e),null!=d&&E(d,e)},y=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},b)},u.map((({value:e,label:a})=>n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":f===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,a,t)=>{switch(t.keyCode){case m:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case i:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(y,e.target,e)},onFocus:()=>N(e),onClick:()=>{N(e)}},a)))),a?Object(l.cloneElement)(h.filter((e=>e.props.value===f))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},h.map(((e,a)=>Object(l.cloneElement)(e,{key:a,hidden:e.props.value!==f})))))}},144:function(e,a,t){"use strict";var l=t(3),n=t(0),r=t.n(n);a.a=function({children:e,hidden:a,className:t}){return r.a.createElement("div",Object(l.a)({role:"tabpanel"},{hidden:a,className:t}),e)}}}]);