(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{120:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(131),r=t(122),o=t(127),s=t(128),i=t(136);function m({data:e}){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},e&&e.map((({id:e,idKey:a,name:t})=>n.a.createElement("div",{key:e,className:Object(r.a)("col","col--6")},n.a.createElement("div",{className:"card-demo",style:{margin:"5px 0"}},n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__header"},n.a.createElement("a",{href:`https://e-mongolia.mn/service/${a}`,rel:"noreferrer noopener",target:"_blank"},n.a.createElement("b",null,t))))))))))}function u({data:e}){const a=Object.keys(e),t=a[0],l=Array.from(a,((e,a)=>({label:e,value:e})));return n.a.createElement(o.a,{defaultValue:t,values:l,block:!0},a.map((a=>n.a.createElement(s.a,{value:a},n.a.createElement(m,{data:e[a]})))))}function d(){const{mobileData:e,operatorData:a,portalData:t}=Object(i.usePluginData)("data-loader");return n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--12"},n.a.createElement(o.a,{defaultValue:"mobile",values:[{label:"\u041c\u043e\u0431\u0430\u0439\u043b \u0441\u0438\u0441\u0442\u0435\u043c",value:"mobile"},{label:"\u041f\u043e\u0440\u0442\u0430\u043b \u0441\u0438\u0441\u0442\u0435\u043c",value:"portal"},{label:"\u041e\u043f\u0435\u0440\u0430\u0442\u043e\u0440 \u0441\u0438\u0441\u0442\u0435\u043c",value:"operator"}],block:!0},n.a.createElement(s.a,{value:"mobile"},n.a.createElement(u,{data:e})),n.a.createElement(s.a,{value:"portal"},n.a.createElement(u,{data:t})),n.a.createElement(s.a,{value:"operator"},n.a.createElement(u,{data:a})))))}a.default=function(){return n.a.createElement(c.a,{title:"\u04ae\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u04af\u04af\u0434",description:"E-Mongolia \u0441\u0438\u0441\u0442\u0435\u043c \u0434\u044d\u044d\u0440\u0445 \u04af\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u04af\u04af\u0434"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontSize:"20px"}},n.a.createElement("h1",{style:{marginTop:"1rem"}},"\u04ae\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u04af\u04af\u0434")),n.a.createElement(d,null)))}},127:function(e,a,t){"use strict";var l=t(0),n=t.n(l),c=t(125),r=t(122),o=t(60),s=t.n(o);const i=37,m=39;a.a=function(e){const{lazy:a,block:t,defaultValue:o,values:u,groupId:d,className:b}=e,{tabGroupChoices:v,setTabGroupChoices:E}=Object(c.a)(),[p,f]=Object(l.useState)(o),h=l.Children.toArray(e.children);if(null!=d){const e=v[d];null!=e&&e!==p&&u.some((a=>a.value===e))&&f(e)}const N=e=>{f(e),null!=d&&E(d,e)},y=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(r.a)("tabs",{"tabs--block":t},b)},u.map((({value:e,label:a})=>n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":p===e,className:Object(r.a)("tabs__item",s.a.tabItem,{"tabs__item--active":p===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,a,t)=>{switch(t.keyCode){case m:((e,a)=>{const t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()})(e,a);break;case i:((e,a)=>{const t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()})(e,a)}})(y,e.target,e)},onFocus:()=>N(e),onClick:()=>{N(e)}},a)))),a?Object(l.cloneElement)(h.filter((e=>e.props.value===p))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},h.map(((e,a)=>Object(l.cloneElement)(e,{key:a,hidden:e.props.value!==p})))))}},128:function(e,a,t){"use strict";var l=t(3),n=t(0),c=t.n(n);a.a=function({children:e,hidden:a,className:t}){return c.a.createElement("div",Object(l.a)({role:"tabpanel"},{hidden:a,className:t}),e)}}}]);