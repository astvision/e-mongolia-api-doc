(self.webpackChunkapi_doc=self.webpackChunkapi_doc||[]).push([[813],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8215:function(e,t,r){"use strict";var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},1395:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(7294),a=r(944),i=r(6010),o="tabItem_1uMI",c="tabItemActive_2DSg";var l=37,u=39;var s=function(e){var t=e.lazy,r=e.block,s=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=(0,a.Z)(),v=f.tabGroupChoices,b=f.setTabGroupChoices,g=(0,n.useState)(s),y=g[0],h=g[1],k=n.Children.toArray(e.children),O=[];if(null!=d){var j=v[d];null!=j&&j!==y&&p.some((function(e){return e.value===j}))&&h(j)}var x=function(e){var t=e.currentTarget,r=O.indexOf(t),n=p[r].value;h(n),null!=d&&(b(d,n),setTimeout((function(){var e,r,n,a,i,o,l,u;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,r>=0&&i<=u&&a<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},w=function(e){var t,r;switch(e.keyCode){case u:var n=O.indexOf(e.target)+1;r=O[n]||O[0];break;case l:var a=O.indexOf(e.target)-1;r=O[a]||O[O.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":y===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:w,onFocus:x,onClick:x},r)}))),t?(0,n.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},9443:function(e,t,r){"use strict";var n=(0,r(7294).createContext)(void 0);t.Z=n},944:function(e,t,r){"use strict";var n=r(7294),a=r(9443);t.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},2812:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var n=r(2122),a=r(9756),i=(r(7294),r(3905)),o=r(1395),c=r(8215),l={id:"create",title:"\u0425\u04af\u0441\u044d\u043b\u0442 \u04af\u04af\u0441\u0433\u044d\u0445"},u={unversionedId:"mobile/service-request/create",id:"mobile/service-request/create",isDocsHomePage:!1,title:"\u0425\u04af\u0441\u044d\u043b\u0442 \u04af\u04af\u0441\u0433\u044d\u0445",description:"\u04ae\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 \u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u043c\u044d\u0434\u044d\u044d\u043b\u044d\u043b \u04af\u04af\u0441\u0433\u044d\u0445",source:"@site/docs/mobile/service-request/create.mdx",sourceDirName:"mobile/service-request",slug:"/mobile/service-request/create",permalink:"/docs/mobile/service-request/create",version:"current",frontMatter:{id:"create",title:"\u0425\u04af\u0441\u044d\u043b\u0442 \u04af\u04af\u0441\u0433\u044d\u0445"},sidebar:"docs",previous:{title:"\u0425\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0436\u0430\u0433\u0441\u0430\u0430\u043b\u0442",permalink:"/docs/mobile/service-request/list"},next:{title:"\u0425\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0434\u044d\u043b\u0433\u044d\u0440\u044d\u043d\u0433\u04af\u0439",permalink:"/docs/mobile/service-request/detail"}},s=[{value:"\u04ae\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 \u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u043c\u044d\u0434\u044d\u044d\u043b\u044d\u043b \u04af\u04af\u0441\u0433\u044d\u0445",id:"\u04af\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439-\u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d-\u043c\u044d\u0434\u044d\u044d\u043b\u044d\u043b-\u04af\u04af\u0441\u0433\u044d\u0445",children:[{value:"\u0421\u0435\u0440\u0432\u0438\u0441 \u0445\u0430\u044f\u0433",id:"\u0441\u0435\u0440\u0432\u0438\u0441-\u0445\u0430\u044f\u0433",children:[]},{value:"Header \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434",id:"header-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434",children:[]},{value:"Request body",id:"request-body",children:[]},{value:"\u0425\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0445\u0430\u0440\u0438\u0443",id:"\u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d-\u0445\u0430\u0440\u0438\u0443",children:[]}]}],p={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\u04af\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439-\u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d-\u043c\u044d\u0434\u044d\u044d\u043b\u044d\u043b-\u04af\u04af\u0441\u0433\u044d\u0445"},"\u04ae\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 \u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u043c\u044d\u0434\u044d\u044d\u043b\u044d\u043b \u04af\u04af\u0441\u0433\u044d\u0445"),(0,i.kt)("p",null,"\u0422\u04e9\u043b\u0431\u04e9\u0440\u0442\u044d\u0439 \u04af\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d \u0431\u043e\u043b \u0442\u04e9\u043b\u0431\u04e9\u0440 \u0442\u04e9\u043b\u04e9\u0433\u0434\u04e9\u0445 \u04af\u0435\u0434 \u0442\u04e9\u043b\u04e9\u0432 \u043d\u044c \u0441\u043e\u043b\u0438\u0433\u0434\u043e\u043d\u043e, \u0442\u04e9\u043b\u0431\u04e9\u0440\u0433\u04af\u0439 \u04af\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d \u0431\u043e\u043b /service-request/set-submitted-free API-\u0433 \u0434\u0443\u0443\u0434\u0430\u0436 \u0442\u04e9\u043b\u04e9\u0432\u0438\u0439\u0433 \u0441\u043e\u043b\u0438\u043d\u043e."),(0,i.kt)("h3",{id:"\u0441\u0435\u0440\u0432\u0438\u0441-\u0445\u0430\u044f\u0433"},"\u0421\u0435\u0440\u0432\u0438\u0441 \u0445\u0430\u044f\u0433"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"POST https://service.e-mongolia.mn/mobile-api/api/service-request/create\n")),(0,i.kt)("h3",{id:"header-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434"},"Header \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u04af\u04af\u0434"),(0,i.kt)("p",null,"Header \u0434\u044d\u044d\u0440 ",(0,i.kt)("strong",{parentName:"p"},"Authentication token")," \u043e\u0440\u0443\u0443\u043b\u0430\u0445 \u0448\u0430\u0430\u0440\u0434\u043b\u0430\u0433\u0430\u0442\u0430\u0439 \u044e\u043c."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"X-Auth-Token: // string \u0448\u0430\u0430\u0440\u0434\u043b\u0430\u0433\u0430\u0442\u0430\u0439\n")),(0,i.kt)("h3",{id:"request-body"},"Request body"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"String serviceId // \u04ae\u0439\u043b\u0447\u0438\u043b\u0433\u044d\u044d\u043d\u0438\u0439 ID\nObject formData // \nString regnum // \nObject citizen // \nString xypRequestId // \nObject data // \nString representativeType // \nString representativeRegnum // \nString representativeReason // \nString representativeReasonFile // \n")),(0,i.kt)("h3",{id:"\u0445\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d-\u0445\u0430\u0440\u0438\u0443"},"\u0425\u04af\u0441\u044d\u043b\u0442\u0438\u0439\u043d \u0445\u0430\u0440\u0438\u0443"),(0,i.kt)(o.Z,{defaultValue:"200",values:[{label:"\u0410\u043c\u0436\u0438\u043b\u0442\u0442\u0430\u0439 \u0445\u0430\u0440\u0438\u0443",value:"200"},{label:"\u0410\u043c\u0436\u0438\u043b\u0442\u0433\u04af\u0439 \u0445\u0430\u0440\u0438\u0443",value:"400"}],mdxType:"Tabs"},(0,i.kt)(c.Z,{value:"200",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"boolean result; // true\nString message; // null\nObject data\n"))),(0,i.kt)(c.Z,{value:"400",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"boolean result // false\nString message // \u0410\u043b\u0434\u0430\u0430\u043d\u044b \u043c\u0435\u0441\u0441\u0435\u0436\nObject data // null\n")))))}d.isMDXComponent=!0},6010:function(e,t,r){"use strict";function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);