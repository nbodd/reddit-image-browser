"use strict";var precacheConfig=[["/reddit-image-browser/index.html","c057474ccb4f7586e556f795dcbce240"],["/reddit-image-browser/static/css/main.8e00d583.css","a9849b42a1c265a348d2e43c95c9e3a6"],["/reddit-image-browser/static/js/main.c51dcb85.js","3f83e49b0b4cf372d51d54d5e7ed8a35"],["/reddit-image-browser/static/media/brand-icons.13db00b7.eot","13db00b7a34fee4d819ab7f9838cc428"],["/reddit-image-browser/static/media/brand-icons.a046592b.woff","a046592bac8f2fd96e994733faf3858c"],["/reddit-image-browser/static/media/brand-icons.a1a749e8.svg","a1a749e89f578a49306ec2b055c073da"],["/reddit-image-browser/static/media/brand-icons.c5ebe0b3.ttf","c5ebe0b32dc1b5cc449a76c4204d13bb"],["/reddit-image-browser/static/media/brand-icons.e8c322de.woff2","e8c322de9658cbeb8a774b6624167c2c"],["/reddit-image-browser/static/media/flags.9c74e172.png","9c74e172f87984c48ddf5c8108cabe67"],["/reddit-image-browser/static/media/icons.0ab54153.woff2","0ab54153eeeca0ce03978cc463b257f7"],["/reddit-image-browser/static/media/icons.8e3c7f55.eot","8e3c7f5520f5ae906c6cf6d7f3ddcd19"],["/reddit-image-browser/static/media/icons.962a1bf3.svg","962a1bf31c081691065fe333d9fa8105"],["/reddit-image-browser/static/media/icons.b87b9ba5.ttf","b87b9ba532ace76ae9f6edfe9f72ded2"],["/reddit-image-browser/static/media/icons.faff9214.woff","faff92145777a3cbaf8e7367b4807987"],["/reddit-image-browser/static/media/outline-icons.701ae6ab.eot","701ae6abd4719e9c2ada3535a497b341"],["/reddit-image-browser/static/media/outline-icons.82f60bd0.svg","82f60bd0b94a1ed68b1e6e309ce2e8c3"],["/reddit-image-browser/static/media/outline-icons.ad97afd3.ttf","ad97afd3337e8cda302d10ff5a4026b8"],["/reddit-image-browser/static/media/outline-icons.cd6c777f.woff2","cd6c777f1945164224dee082abaea03a"],["/reddit-image-browser/static/media/outline-icons.ef60a4f6.woff","ef60a4f6c25ef7f39f2d25a748dbecfe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/reddit-image-browser/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});