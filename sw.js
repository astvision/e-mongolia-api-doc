!function(e){var t={};function n(s){if(t[s])return t[s].exports;var r=t[s]={i:s,l:!1,exports:{}};return e[s].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(s,r,function(t){return e[t]}.bind(null,r));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=3)}([function(e,t,n){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(e){}},function(e,t,n){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(e){}},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=2},function(e,t,n){"use strict";n.r(t);n(0);n(1);const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},r=e=>[s.prefix,e,s.suffix].filter((e=>e&&e.length>0)).join("-"),a=e=>e||r(s.precache),c=(e,...t)=>{let n=e;return t.length>0&&(n+=` :: ${JSON.stringify(t)}`),n};class o extends Error{constructor(e,t){super(c(e,t)),this.name=e,this.details=t}}const i=new Set;const l=(e,t)=>e.filter((e=>t in e)),h=async({request:e,mode:t,plugins:n=[]})=>{const s=l(n,"cacheKeyWillBeUsed");let r=e;for(const e of s)r=await e.cacheKeyWillBeUsed.call(e,{mode:t,request:r}),"string"==typeof r&&(r=new Request(r));return r},u=async({cacheName:e,request:t,event:n,matchOptions:s,plugins:r=[]})=>{const a=await self.caches.open(e),c=await h({plugins:r,request:t,mode:"read"});let o=await a.match(c,s);for(const t of r)if("cachedResponseWillBeUsed"in t){const r=t.cachedResponseWillBeUsed;o=await r.call(t,{cacheName:e,event:n,matchOptions:s,cachedResponse:o,request:c})}return o},f=async({cacheName:e,request:t,response:n,event:s,plugins:r=[],matchOptions:a})=>{const c=await h({plugins:r,request:t,mode:"write"});if(!n)throw new o("cache-put-with-no-response",{url:(f=c.url,new URL(String(f),location.href).href.replace(new RegExp(`^${location.origin}`),""))});var f;const d=await(async({request:e,response:t,event:n,plugins:s=[]})=>{let r=t,a=!1;for(const t of s)if("cacheWillUpdate"in t){a=!0;const s=t.cacheWillUpdate;if(r=await s.call(t,{request:e,response:r,event:n}),!r)break}return a||(r=r&&200===r.status?r:void 0),r||null})({event:s,plugins:r,response:n,request:c});if(!d)return void 0;const p=await self.caches.open(e),y=l(r,"cacheDidUpdate"),w=y.length>0?await u({cacheName:e,matchOptions:a,request:c}):null;try{await p.put(c,d)}catch(e){throw"QuotaExceededError"===e.name&&await async function(){for(const e of i)await e()}(),e}for(const t of y)await t.cacheDidUpdate.call(t,{cacheName:e,event:s,oldResponse:w,newResponse:d,request:c})},d=async({request:e,fetchOptions:t,event:n,plugins:s=[]})=>{if("string"==typeof e&&(e=new Request(e)),n instanceof FetchEvent&&n.preloadResponse){const e=await n.preloadResponse;if(e)return e}const r=l(s,"fetchDidFail"),a=r.length>0?e.clone():null;try{for(const t of s)if("requestWillFetch"in t){const s=t.requestWillFetch,r=e.clone();e=await s.call(t,{request:r,event:n})}}catch(e){throw new o("plugin-error-request-will-fetch",{thrownError:e})}const c=e.clone();try{let r;r="navigate"===e.mode?await fetch(e):await fetch(e,t);for(const e of s)"fetchDidSucceed"in e&&(r=await e.fetchDidSucceed.call(e,{event:n,request:c,response:r}));return r}catch(e){0;for(const t of r)await t.fetchDidFail.call(t,{error:e,event:n,originalRequest:a.clone(),request:c.clone()});throw e}};let p;async function y(e,t){const n=e.clone(),s={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},r=t?t(s):s,a=function(){if(void 0===p){const e=new Response("");if("body"in e)try{new Response(e.body),p=!0}catch(e){p=!1}p=!1}return p}()?n.body:await n.blob();return new Response(a,r)}function w(e){if(!e)throw new o("add-to-cache-list-unexpected-type",{entry:e});if("string"==typeof e){const t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}const{revision:t,url:n}=e;if(!n)throw new o("add-to-cache-list-unexpected-type",{entry:e});if(!t){const e=new URL(n,location.href);return{cacheKey:e.href,url:e.href}}const s=new URL(n,location.href),r=new URL(n,location.href);return s.searchParams.set("__WB_REVISION__",t),{cacheKey:s.href,url:r.href}}class g{constructor(e){this._cacheName=a(e),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}addToCacheList(e){const t=[];for(const n of e){"string"==typeof n?t.push(n):n&&void 0===n.revision&&t.push(n.url);const{cacheKey:e,url:s}=w(n),r="string"!=typeof n&&n.revision?"reload":"default";if(this._urlsToCacheKeys.has(s)&&this._urlsToCacheKeys.get(s)!==e)throw new o("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(s),secondEntry:e});if("string"!=typeof n&&n.integrity){if(this._cacheKeysToIntegrities.has(e)&&this._cacheKeysToIntegrities.get(e)!==n.integrity)throw new o("add-to-cache-list-conflicting-integrities",{url:s});this._cacheKeysToIntegrities.set(e,n.integrity)}if(this._urlsToCacheKeys.set(s,e),this._urlsToCacheModes.set(s,r),t.length>0){const e=`Workbox is precaching URLs without revision info: ${t.join(", ")}\nThis is generally NOT safe. Learn more at https://bit.ly/wb-precache`;console.warn(e)}}}async install({event:e,plugins:t}={}){const n=[],s=[],r=await self.caches.open(this._cacheName),a=await r.keys(),c=new Set(a.map((e=>e.url)));for(const[e,t]of this._urlsToCacheKeys)c.has(t)?s.push(e):n.push({cacheKey:t,url:e});const o=n.map((({cacheKey:n,url:s})=>{const r=this._cacheKeysToIntegrities.get(n),a=this._urlsToCacheModes.get(s);return this._addURLToCache({cacheKey:n,cacheMode:a,event:e,integrity:r,plugins:t,url:s})}));await Promise.all(o);return{updatedURLs:n.map((e=>e.url)),notUpdatedURLs:s}}async activate(){const e=await self.caches.open(this._cacheName),t=await e.keys(),n=new Set(this._urlsToCacheKeys.values()),s=[];for(const r of t)n.has(r.url)||(await e.delete(r),s.push(r.url));return{deletedURLs:s}}async _addURLToCache({cacheKey:e,url:t,cacheMode:n,event:s,plugins:r,integrity:a}){const c=new Request(t,{integrity:a,cache:n,credentials:"same-origin"});let i,l=await d({event:s,plugins:r,request:c});for(const e of r||[])"cacheWillUpdate"in e&&(i=e);if(!(i?await i.cacheWillUpdate({event:s,request:c,response:l}):l.status<400))throw new o("bad-precaching-response",{url:t,status:l.status});l.redirected&&(l=await y(l)),await f({event:s,plugins:r,response:l,request:e===t?c:new Request(e),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}})}getURLsToCacheKeys(){return this._urlsToCacheKeys}getCachedURLs(){return[...this._urlsToCacheKeys.keys()]}getCacheKeyForURL(e){const t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}async matchPrecache(e){const t=e instanceof Request?e.url:e,n=this.getCacheKeyForURL(t);if(n){return(await self.caches.open(this._cacheName)).match(n)}}createHandler(e=!0){return async({request:t})=>{try{const e=await this.matchPrecache(t);if(e)return e;throw new o("missing-precache-entry",{cacheName:this._cacheName,url:t instanceof Request?t.url:t})}catch(n){if(e)return fetch(t);throw n}}}createHandlerBoundToURL(e,t=!0){if(!this.getCacheKeyForURL(e))throw new o("non-precached-url",{url:e});const n=this.createHandler(t),s=new Request(e);return()=>n({request:s})}}(async()=>{const e=function(){const e=JSON.parse(new URLSearchParams(self.location.search).get("params"));return e.debug&&console.log("[Docusaurus-PWA][SW]: Service Worker params:",e),e}(),t=[{"revision":"aaea55a26b01699e66df9b9ee0c722b8","url":"01a85c17.5aae2fe9.js"},{"revision":"120efe32384292b16cd2244d3df5d6ac","url":"0948b3f2.3904707d.js"},{"revision":"d143e709d06402240b562340c40d117f","url":"1.f6507fff.js"},{"revision":"c1c96dbde8c7c2c061e8deb6c095639e","url":"11d15ff8.bdc48cdb.js"},{"revision":"0f50e6831d14fb7b55489e360e45d747","url":"17896441.e523fbe9.js"},{"revision":"59b6aad6146609ed62ce07c66d22ecb2","url":"19840164.2a294ae1.js"},{"revision":"cea57dfc5583dac67ca5b7f2c7feb007","url":"2.e2648242.js"},{"revision":"a6b75950ba506a22c90efcf8a0c5558d","url":"2738c48a.34408d13.js"},{"revision":"ea4fcbc6a8e9175bb69a3604a851bba6","url":"3.3138c6a6.js"},{"revision":"e04838c09641b05e356ca40c7ad5209c","url":"37.47c16144.js"},{"revision":"3a2aa8548eac3dd152338e73719e5a33","url":"38.82b9da55.js"},{"revision":"045814099cac35026b8136ab575940de","url":"39.423009c7.js"},{"revision":"02f6e498bf3864413c1a992f75b48a38","url":"40.4a17dd1d.js"},{"revision":"c32b38b95577fe96170e762772a8afd9","url":"404.html"},{"revision":"7ec96461fe67201926ae18216a808543","url":"41.1c504774.js"},{"revision":"1870756ea0567e99aea9408883b9fe7b","url":"42da9be5.8e4ebe05.js"},{"revision":"e370cbe764fb3f0a59c7c886878cad52","url":"45acc928.0daaf9ec.js"},{"revision":"a762062caa722b6c522bc288266296d6","url":"4eb630a5.f8aff4cd.js"},{"revision":"3da3a2e2770bcb473c448589c0f6446f","url":"5c4ee1d6.903645b0.js"},{"revision":"856b7ec36382bbb1111835e7b6d4d1fb","url":"66dd989e.01f74dea.js"},{"revision":"3aea7b2cd1a4b55656f3f89499e60334","url":"6875c492.aed66836.js"},{"revision":"736809e08e14cf157f7529aad1674be8","url":"82ba80f0.5ebe1435.js"},{"revision":"4a67bd47472df27f9db48ca4392f3999","url":"843d79fe.a7aa77fa.js"},{"revision":"e6b29f20ac567a7131ecefdc7a7c7da5","url":"8b51e14b.34472673.js"},{"revision":"23206879a7ac119a64ea6fdf2364f324","url":"931a1172.bde7f2b3.js"},{"revision":"377bbc212b88353ecfbf4e4cf4ff4680","url":"9958fd43.da149b3d.js"},{"revision":"26c9e8fa584a5b28854f7f2e07a00c99","url":"99caf125.f2f22819.js"},{"revision":"1be904ddd17119ab83d0298e5faf2d95","url":"a6aa9e1f.f1aa00a3.js"},{"revision":"996c1aaf41fa25da6a5abd4a10a822dd","url":"a9ae89f1.29926310.js"},{"revision":"fc6c69ce6a0013e7d970cd6cf8694901","url":"aeda19be.ec104f64.js"},{"revision":"f086e64fb877d7cd234efd220f5c1c39","url":"blog/hello-world/index.html"},{"revision":"5d02a6a8aa392d44c84cb994b4595ba5","url":"blog/hola/index.html"},{"revision":"4cef851d2208ab15c5d0f6bbf022b5a5","url":"blog/index.html"},{"revision":"42a60647751247d114deb5b6703d4b90","url":"blog/tags/docusaurus/index.html"},{"revision":"816b2272cf2d5b227473e32a591073ec","url":"blog/tags/facebook/index.html"},{"revision":"03516d9dffd2d6ddaa49493e6ad7ae02","url":"blog/tags/hello/index.html"},{"revision":"a91a88897a158c759dbed033694a8b33","url":"blog/tags/hola/index.html"},{"revision":"f33b729baa7c7a7eb02204e93b09a864","url":"blog/tags/index.html"},{"revision":"bb1bb0120af52ba11e5247659618bf6d","url":"blog/welcome/index.html"},{"revision":"d827d6bd3d3658d8b5eb85e1e895a741","url":"c0a4ca73.76fb4954.js"},{"revision":"2d7b27bfa15da09854a12c0171c6d789","url":"ccc49370.d6c8936f.js"},{"revision":"c701afd69e2c87c1783ae2b0d2caa5ba","url":"cooperations/index.html"},{"revision":"214a80809c3026a0d27bf6522f3ffcf8","url":"docs/index.html"},{"revision":"a2a4d762ccf9fffb450733013c8e0132","url":"docs/mdx/index.html"},{"revision":"e60dc506302dfe6edd641efe2e5af13c","url":"docs/mobile/index.html"},{"revision":"60dee3bceaaa96be980fbb01bea80911","url":"docs/operator/index.html"},{"revision":"a15daaec9f46ef52ac450760a85338c2","url":"docs/portal/index.html"},{"revision":"b72efbdf8a215d16bed9b5eae865f90b","url":"docs/service1/index.html"},{"revision":"6cabaa3a8889fa5e90d1d133b7f0985f","url":"docs/service2/index.html"},{"revision":"ccabf503df0d5e46e3b36008b5dd691c","url":"docs/system/index.html"},{"revision":"1ff29d46bd4d6da1bdf0b001abc6a4a7","url":"e019e40a.168c7ea7.js"},{"revision":"44edb1ab5f8ba5b026f8e796e1d0089b","url":"e2e2274d.76b52913.js"},{"revision":"83927e4f7043b42fc7e2359266fd8520","url":"ece76bd1.94f2c088.js"},{"revision":"8160166cf02960ce6a952cc3a45882b4","url":"f47ee060.21f7f592.js"},{"revision":"129cb4f450a0288ba8cd624f94baf629","url":"f7064e55.011a1522.js"},{"revision":"4b75f09b83b5c26af87bc26bac6bb2ad","url":"f976f453.f52e5edc.js"},{"revision":"7b05ec8c9da2d426b29a1a78a9cd8d7d","url":"f994fef5.e31718d9.js"},{"revision":"ef228121751b7af2c46c7f86047b2fe7","url":"fc9ac9ba.8c761613.js"},{"revision":"ff2625b92c0b0c696c411004a71bfa0a","url":"index.html"},{"revision":"c7d3853e8ceadf4c3266a2ca79627a16","url":"main.c80a792d.js"},{"revision":"7d46f56ea0232c01315f25d362194303","url":"manifest.json"},{"revision":"18d6212cef0e5fe54c5d32b77ee46db1","url":"orgData/index.html"},{"revision":"ce5160dfb80844bd3fb2a2248f135ec4","url":"runtime~main.3d182f74.js"},{"revision":"ba48ab8345f3df93cd45b742d40a0b8d","url":"services/index.html"},{"revision":"88d9dba196963819efcd6009aec4b1bc","url":"styles.2132e84a.css"},{"revision":"a4f0ed50f60e19f47ecd1df3aadfead1","url":"styles.b5182510.js"},{"revision":"61f3742eb26977857044a21f29d7dc3f","url":"img/favicon.png"},{"revision":"49bf9eb24ca16a3d78a0a3e3c0e1f428","url":"img/home-page-mobile.svg"},{"revision":"7dcc1e6e941ae7be0375f19dd90bd71c","url":"img/home-page-operator.svg"},{"revision":"aaf36e6cf552b6641e6038db1cb38453","url":"img/home-page-portal.svg"},{"revision":"2abda2c541832c7c716a3e7aadd1ac5a","url":"img/icons/icon-128x128.png"},{"revision":"22112d2cf9929a6b708c7678a3f7b03b","url":"img/icons/icon-144x144.png"},{"revision":"0156ba30931c4a8eae319e75833b39a7","url":"img/icons/icon-192x192.png"},{"revision":"b20a8bd612367094fa27a9b89da8aad5","url":"img/icons/icon-384x384.png"},{"revision":"96a522755e45e7ef69c8263615f0bb7b","url":"img/icons/icon-512x512.png"},{"revision":"31d5d08e3fbaf9c6b2794dc4e9854ae6","url":"img/icons/icon-96x96.png"},{"revision":"620a19db9a8c5103efe4ff57200088ef","url":"img/logo-full.png"},{"revision":"29182bea7ec2f9a4ab34ad17c07ce16f","url":"img/logo-new-dark.svg"},{"revision":"63027a4e2e62b95e1d1d2bd30921a54b","url":"img/logo-new-light.svg"},{"revision":"531f82edc97d07398994fac44e7d3290","url":"img/logo-new.png"},{"revision":"5c58183a82afcfed87072c11468136e4","url":"img/logo-new.svg"}],n=new g;e.offlineMode&&n.addToCacheList(t),await async function(e){}(),self.addEventListener("install",(e=>{e.waitUntil(n.install())})),self.addEventListener("activate",(e=>{e.waitUntil(n.activate())})),self.addEventListener("fetch",(async t=>{if(e.offlineMode){const s=t.request.url,r=function(e){const t=[],n=new URL(e,self.location.href);return n.origin!==self.location.origin||(n.search="",n.hash="",t.push(n.href),n.pathname.endsWith("/")?t.push(`${n.href}index.html`):t.push(`${n.href}/index.html`)),t}(s);for(let a=0;a<r.length;a+=1){const c=r[a],o=n.getCacheKeyForURL(c);if(o){e.debug&&console.log("[Docusaurus-PWA][SW]: serving cached asset",{requestURL:s,possibleURL:c,possibleURLs:r,cacheKey:o}),t.respondWith(caches.match(o));break}}}})),self.addEventListener("message",(async e=>{"SKIP_WAITING"===(e.data&&e.data.type)&&self.skipWaiting()}))})()}]);