if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const r=e=>n(e,i),o={module:{uri:i},exports:c,require:r};s[i]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(a(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"6c44345fab21ede4ac443db42d2c3147"},{url:"/_next/static/chunks/499-825ba60f8a174198.js",revision:"ed3eQf6YUqdwwbrwN7ot4"},{url:"/_next/static/chunks/4bd1b696-704dc55da575ac8d.js",revision:"ed3eQf6YUqdwwbrwN7ot4"},{url:"/_next/static/chunks/684-deaf0026ba13cac0.js",revision:"ed3eQf6YUqdwwbrwN7ot4"},{url:"/_next/static/chunks/app/(site)/dashboard/page-7d894399d8b358ca.js",revision:"ed3eQf6YUqdwwbrwN7ot4"},{url:"/_next/static/chunks/app/(site)/page-3fca2d93ed44f244.js",revision:"ed3eQf6YUqdwwbrwN7ot4"},{url:"/_next/static/chunks/app/(site)/trips/%5Bid%5D/page-9cd600bc3bd0ea8c.js",revision:"ed3eQf6YUqdwwbrwN7ot4"},{url:"/_next/static/chunks/app/_not-found/page-5bfe245ad955586d.js",revision:"ed3eQf6YUqdwwbrwN7ot4"},{url:"/_next/static/chunks/app/layout-177a64d083226021.js",revision:"ed3eQf6YUqdwwbrwN7ot4"},{url:"/_next/static/chunks/framework-859199dea06580b0.js",revision:"ed3eQf6YUqdwwbrwN7ot4"},{url:"/_next/static/chunks/main-4ed73c890f023ed6.js",revision:"ed3eQf6YUqdwwbrwN7ot4"},{url:"/_next/static/chunks/main-app-e682e79b64e7b352.js",revision:"ed3eQf6YUqdwwbrwN7ot4"},{url:"/_next/static/chunks/pages/_app-da15c11dea942c36.js",revision:"ed3eQf6YUqdwwbrwN7ot4"},{url:"/_next/static/chunks/pages/_error-cc3f077a18ea1793.js",revision:"ed3eQf6YUqdwwbrwN7ot4"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-68f22649503f8e75.js",revision:"ed3eQf6YUqdwwbrwN7ot4"},{url:"/_next/static/css/37d0e4db7cb1db18.css",revision:"37d0e4db7cb1db18"},{url:"/_next/static/ed3eQf6YUqdwwbrwN7ot4/_buildManifest.js",revision:"175dc86c8fc8db56d259cd965a88daca"},{url:"/_next/static/ed3eQf6YUqdwwbrwN7ot4/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/firebase-messaging-sw.js",revision:"0c0772efe1237da80cc043d1e6ec6fd9"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icons/192.png",revision:"60ba7da9d7732fb529e209f255a89167"},{url:"/manifest.json",revision:"755c1dc76732be405a14cb6b64b370a1"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
