(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{121:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||c;return n?a.a.createElement(m,i(i({ref:t},s),{},{components:n})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<c;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},122:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},125:function(e,t,n){"use strict";var r=n(0),a=n(126);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},126:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},127:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(125),o=n(122),i=n(60),l=n.n(i);const s=37,u=39;t.a=function(e){const{lazy:t,block:n,defaultValue:i,values:b,groupId:p,className:d}=e,{tabGroupChoices:m,setTabGroupChoices:f}=Object(c.a)(),[O,v]=Object(r.useState)(i),j=r.Children.toArray(e.children);if(null!=p){const e=m[p];null!=e&&e!==O&&b.some((t=>t.value===e))&&v(e)}const g=e=>{v(e),null!=p&&f(p,e)},y=[];return a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":n},d)},b.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===e,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===e}),key:e,ref:e=>y.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case u:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(y,e.target,e)},onFocus:()=>g(e),onClick:()=>{g(e)}},t)))),t?Object(r.cloneElement)(j.filter((e=>e.props.value===O))[0],{className:"margin-vert--md"}):a.a.createElement("div",{className:"margin-vert--md"},j.map(((e,t)=>Object(r.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}},128:function(e,t,n){"use strict";var r=n(3),a=n(0),c=n.n(a);t.a=function({children:e,hidden:t,className:n}){return c.a.createElement("div",Object(r.a)({role:"tabpanel"},{hidden:t,className:n}),e)}},83:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),c=(n(0),n(121)),o=n(127),i=n(128),l={id:"list",title:"\u0425\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0436\u0430\u0433\u0441\u0430\u0430\u043b\u0442"},s={unversionedId:"mobile/service-request/list",id:"mobile/service-request/list",isDocsHomePage:!1,title:"\u0425\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0436\u0430\u0433\u0441\u0430\u0430\u043b\u0442",description:"\u04ae\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 \u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0436\u0430\u0433\u0441\u0430\u0430\u043b\u0442 \u0430\u0432\u0430\u0445",source:"@site/docs\\mobile\\service-request\\list.mdx",slug:"/mobile/service-request/list",permalink:"/docs/mobile/service-request/list",version:"current",sidebar:"docs",previous:{title:"\u041c\u043e\u0431\u0430\u0439\u043b \u0441\u0438\u0441\u0442\u0435\u043c\u0438\u0439\u043d \u0442\u0430\u043d\u0438\u043b\u0446\u0443\u0443\u043b\u0433\u0430",permalink:"/docs/mobile/intro"},next:{title:"\u0425\u04af\u0441\u044d\u043b\u0442 \u04af\u04af\u0441\u0433\u044d\u0445",permalink:"/docs/mobile/service-request/create"}},u=[{value:"\u04ae\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 \u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0436\u0430\u0433\u0441\u0430\u0430\u043b\u0442 \u0430\u0432\u0430\u0445",id:"\u04af\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439-\u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d-\u0436\u0430\u0433\u0441\u0430\u0430\u043b\u0442-\u0430\u0432\u0430\u0445",children:[{value:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0445\u0430\u044f\u0433",id:"\u0441\u0435\u0440\u0432\u0438\u0441-\u0445\u0430\u044f\u0433",children:[]},{value:"Header \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434",id:"header-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434",children:[]},{value:"Query \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434",id:"query-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434",children:[]},{value:"\u0425\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0445\u0430\u0440\u0438\u0443",id:"\u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d-\u0445\u0430\u0440\u0438\u0443",children:[]}]}],b={toc:u};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u04af\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439-\u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d-\u0436\u0430\u0433\u0441\u0430\u0430\u043b\u0442-\u0430\u0432\u0430\u0445"},"\u04ae\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 \u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0436\u0430\u0433\u0441\u0430\u0430\u043b\u0442 \u0430\u0432\u0430\u0445"),Object(c.b)("h3",{id:"\u0441\u0435\u0440\u0432\u0438\u0441-\u0445\u0430\u044f\u0433"},"\u0421\u0435\u0440\u0432\u0438\u0441 \u0445\u0430\u044f\u0433"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"GET https://service.e-mongolia.mn/mobile-api/api/service-request\n")),Object(c.b)("h3",{id:"header-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434"},"Header \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434"),Object(c.b)("p",null,"Header \u0434\u044d\u044d\u0440 ",Object(c.b)("strong",{parentName:"p"},"Authentication token")," \u043e\u0440\u0443\u0443\u043b\u0430\u0445 \u0448\u0430\u0430\u0440\u0434\u043b\u0430\u0433\u0430\u0442\u0430\u0439 \u044e\u043c."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"X-Auth-Token: // string \u0448\u0430\u0430\u0440\u0434\u043b\u0430\u0433\u0430\u0442\u0430\u0439\n")),Object(c.b)("h3",{id:"query-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434"},"Query \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434"),Object(c.b)("p",null,"\u0414\u044d\u044d\u0440\u0445 \u0441\u0435\u0440\u0432\u0438\u0441 \u0445\u0430\u044f\u0433\u044b\u0433 \u0434\u043e\u043e\u0440\u0445 query \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434\u0442\u044d\u0439 \u0446\u0443\u0433 \u0434\u0443\u0443\u0434\u043d\u0430. \u0411\u04af\u0445 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434\u0438\u0439\u0433 \u0431\u0438\u0447\u0438\u0445 \u0448\u0430\u0430\u0440\u0434\u043b\u0430\u0433\u0430\u0433\u04af\u0439. \u0428\u0430\u0430\u0440\u0434\u043b\u0430\u0433\u0430\u0442\u0430\u0439 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434\u044d\u044d \u043e\u0440\u0443\u0443\u043b\u0430\u0445\u0430\u0434 \u0431\u043e\u043b\u043d\u043e."),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"String status // \u0422\u04e9\u043b\u04e9\u0432 Enum:[SUBMITTED, PROCESSING, EDIT, FILE_REQUESTED, PRINTING, COMPLETED, PRINTED, REJECTED, EXPIRED, GRANTED]\nString number // \u0425\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0434\u0443\u0433\u0430\u0430\u0440\nLocalDate createdDate // \u04ae\u04af\u0441\u0433\u044d\u0441\u044d\u043d \u043e\u0433\u043d\u043e\u043e\nint currentPage // \u041e\u0434\u043e\u043e\u0433\u0438\u0439\u043d \u0445\u0443\u0443\u0434\u0430\u0441 (0-\u043e\u043e\u0441 \u044d\u0445\u044d\u043b\u043d\u044d)\nint pageSize // \u041d\u044d\u0433 \u0445\u0443\u0443\u0434\u0441\u0430\u043d\u0434 \u0445\u0430\u0440\u0443\u0443\u043b\u0430\u0445 \u0442\u043e\u043e (default 10)\nString sortDirection // \u042d\u0440\u044d\u043c\u0431\u044d\u043b\u044d\u0445 \u0447\u0438\u0433\u043b\u044d\u043b Enum: [ASC, DESC]\nString[] sortParams // \u042d\u0440\u044d\u043c\u0431\u044d\u043b\u044d\u0445 \u0442\u0430\u043b\u0431\u0430\u0440\u0443\u0443\u0434\n")),Object(c.b)("h3",{id:"\u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d-\u0445\u0430\u0440\u0438\u0443"},"\u0425\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0445\u0430\u0440\u0438\u0443"),Object(c.b)(o.a,{defaultValue:"200",values:[{label:"\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0440\u0438\u0443",value:"200"},{label:"\u0410\u043c\u0436\u0438\u043b\u0442\u0433\u04af\u0439 \u0445\u0430\u0440\u0438\u0443",value:"400"}],mdxType:"Tabs"},Object(c.b)(i.a,{value:"200",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"boolean result; // true\nString message; // null\nObject data {\n  AntdPagination pagination {\n    int currentPage; // \u043e\u0434\u043e\u043e\u0433\u0438\u0439\u043d \u0445\u0443\u0443\u0434\u0430\u0441\u043d\u044b \u0442\u043e\u043e\n    int pageSize; // \u0445\u0443\u0443\u0434\u0430\u0441\u043d\u044b \u043c\u04e9\u0440\u0438\u0439\u043d \u0442\u043e\u043e\n    long total; // \u043d\u0438\u0439\u0442 \u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0442\u043e\u043e\n    Direction sortDirection; // \u044d\u0440\u044d\u043c\u0431\u043b\u044d\u0441\u044d\u043d \u0447\u0438\u0433\u043b\u044d\u043b\n    String[] sortParams; // \u044d\u0440\u044d\u043c\u0431\u043b\u044d\u0441\u044d\u043d \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434\n  }\n  Iterable<T> list // [] \u0425\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0436\u0430\u0433\u0441\u0430\u0430\u043b\u0442\n}\n"))),Object(c.b)(i.a,{value:"400",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-java"}),"boolean result // false\nString message // \u0410\u043b\u0434\u0430\u0430\u043d\u044b \u043c\u0435\u0441\u0441\u0435\u0436\nObject data // null\n")))))}p.isMDXComponent=!0}}]);