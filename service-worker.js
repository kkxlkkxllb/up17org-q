if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,f,r)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const n={uri:location.origin+c.slice(1)};return Promise.all(f.map(c=>{switch(c){case"exports":return i;case"module":return n;default:return e(c)}})).then(e=>{const c=r(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-17d1bea3"],(function(e){"use strict";e.setCacheNameDetails({prefix:"up17org-q"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/c0155344d336103c2b6a0b28cc510750.js",revision:"523776f1432df8c1cf79f3366de1d4ae"},{url:"/css/app.9ed26476.css",revision:"a578188e62285c3c87d62a1fe4cd6045"},{url:"/css/vendor.79af69d5.css",revision:"6995068ae896770e6b05ae28940b5bb1"},{url:"/favicon.ico",revision:"9aa58ed61da288cb38460f32025f82ab"},{url:"/fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"/fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"/fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"/fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"/fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"/fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"/fonts/arial.ttf",revision:"5995c725ca5a13be62d3dc75c2fc59fc"},{url:"/fonts/arial.ttf.js",revision:"ffd341585027158a19192264e770c453"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.3a3e0eb8.woff",revision:"2cfd66c1c5370b239746ff14c6d07e73"},{url:"/fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.404ad2ff.woff2",revision:"61bc143dec7039dd6aac95721ddc4522"},{url:"/fonts/iconfont.ttf",revision:"86e25ddb3bcf60f57e0d88012e2bd625"},{url:"/fonts/iconfont.woff",revision:"9f5ba4d8efb7cdd6876cfd41cfdf812c"},{url:"/fonts/iconfont.woff2",revision:"9bb4a9a155355473c1bb76adc757e1c4"},{url:"/icons/apple-icon-120x120.png",revision:"c9920835d2adb9f6ab6a79a27f220a3a"},{url:"/icons/apple-icon-152x152.png",revision:"9df9e65a1d2c6df3bd9143666b0e8c63"},{url:"/icons/apple-icon-167x167.png",revision:"4300c6c136c06abcd781aa18644dd7a3"},{url:"/icons/apple-icon-180x180.png",revision:"88dbf3d9e8269f1298486d103e22a57c"},{url:"/icons/favicon-128x128.png",revision:"9aa58ed61da288cb38460f32025f82ab"},{url:"/icons/favicon-16x16.png",revision:"b918a92d6f22a3e6a8a8160c604969ef"},{url:"/icons/favicon-32x32.png",revision:"b918a92d6f22a3e6a8a8160c604969ef"},{url:"/icons/favicon-96x96.png",revision:"669fef97e45a1bd33cfd02d283a25cf6"},{url:"/icons/icon-128x128.png",revision:"9aa58ed61da288cb38460f32025f82ab"},{url:"/icons/icon-192x192.png",revision:"e258bf4c038730925d686d98eedc57a5"},{url:"/icons/icon-256x256.png",revision:"689a4766f4ff2db132d8a548819eb3ad"},{url:"/icons/icon-384x384.png",revision:"cda067cc596a28727e1c083595706245"},{url:"/icons/icon-512x512.png",revision:"809ce7218f8893cbb3d2de02bb88e73c"},{url:"/icons/ms-icon-144x144.png",revision:"de2db8f66a2bc17437027e98eeaf4aba"},{url:"/icons/safari-pinned-tab.svg",revision:"de8107bed7f087fb443d8e36855e7467"},{url:"/imgs/circle_1.svg",revision:"2dce5a6a252896fc1266e26df1a90a5b"},{url:"/imgs/circle_2.svg",revision:"bac6956e87d3eb314ba79f0212b33f4e"},{url:"/imgs/circle_3.svg",revision:"26cde197caa93f1bb8ef83cf8d7442c1"},{url:"/imgs/circle_4.svg",revision:"4728e0ce4c08e81263cbbf8b19940d30"},{url:"/imgs/circle_5.svg",revision:"9bc29b2715a8d4d2ea889203e654ec2c"},{url:"/imgs/circle_6.svg",revision:"ff3a08f42cae6c1ca29c613f26b25927"},{url:"/imgs/circle_7.svg",revision:"9298a92f5ed4e7dd9fbac5f4313e06f0"},{url:"/imgs/circle_8.svg",revision:"1df544f5f81c508d14fd2839f49d8150"},{url:"/index.html",revision:"99f510de85121543c08fa39bc848ea60"},{url:"/js/2.97da1bd5.js",revision:"9a2ad6d27391d382acf340979bb035f4"},{url:"/js/app.da1877e3.js",revision:"304291becbd97f4b5a3f934cefc70df7"},{url:"/js/offcanvas.worker.301c3916.worker.js",revision:"57ded69e1007c79a96593ba749877aae"},{url:"/js/vendor.b80e5b51.js",revision:"bcdf16a992f35020f4bf8bd4c752c0ac"},{url:"/manifest.json",revision:"8aa841b94153aff875096f35d0c3dd81"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
