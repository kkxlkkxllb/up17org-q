if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return i[e]||(c=new Promise(async c=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=c}else importScripts(e),c()})),c.then(()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]})},c=(c,i)=>{Promise.all(c.map(e)).then(e=>i(1===e.length?e[0]:e))},i={require:Promise.resolve(c)};self.define=(c,r,f)=>{i[c]||(i[c]=Promise.resolve().then(()=>{let i={};const s={uri:location.origin+c.slice(1)};return Promise.all(r.map(c=>{switch(c){case"exports":return i;case"module":return s;default:return e(c)}})).then(e=>{const c=f(...e);return i.default||(i.default=c),i})}))}}define("./service-worker.js",["./workbox-17d1bea3"],(function(e){"use strict";e.setCacheNameDetails({prefix:"up17org-q"}),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"c0155344d336103c2b6a0b28cc510750.js",revision:"523776f1432df8c1cf79f3366de1d4ae"},{url:"c0155344d336103c2b6a0b28cc510750.js.gz",revision:"233b70c39bf9ca65e4fbc11e811073de"},{url:"coi-serviceworker.js",revision:"f5a1adfbcbf36ba2688490c0bba6ae87"},{url:"css/app.805bc481.css",revision:"a3f577c2ad6c8a1a5795d8bba7d28ca4"},{url:"css/vendor.c0874b1c.css",revision:"9e2bfafe51598db4833bc0d481443c88"},{url:"css/vendor.c0874b1c.css.gz",revision:"25f2c3ab38e0aab64aa339ebf6d255f9"},{url:"favicon.ico",revision:"e2ca8b53554aa06bd0b1b07bc524aa2e"},{url:"fonts/KFOkCnqEu92Fr1MmgVxIIzQ.a45108d3.woff",revision:"5cb7edfceb233100075dc9a1e12e8da3"},{url:"fonts/KFOlCnqEu92Fr1MmEU9fBBc-.cea99d3e.woff",revision:"87284894879f5b1c229cb49c8ff6decc"},{url:"fonts/KFOlCnqEu92Fr1MmSU5fBBc-.865f928c.woff",revision:"b00849e00f4c2331cddd8ffb44a6720b"},{url:"fonts/KFOlCnqEu92Fr1MmWUlfBBc-.2267169e.woff",revision:"adcde98f1d584de52060ad7b16373da3"},{url:"fonts/KFOlCnqEu92Fr1MmYUtfBBc-.bac8362e.woff",revision:"bb1e4dc6333675d11ada2e857e7f95d7"},{url:"fonts/KFOmCnqEu92Fr1Mu4mxM.49ae34d4.woff",revision:"60fa3c0614b8fb2f394fa29944c21540"},{url:"fonts/arial.ttf",revision:"5995c725ca5a13be62d3dc75c2fc59fc"},{url:"fonts/arial.ttf.js",revision:"ffd341585027158a19192264e770c453"},{url:"fonts/arial.ttf.js.gz",revision:"ae65c28a56c4e970e0a32a75d0768c9d"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNa.3a3e0eb8.woff",revision:"2cfd66c1c5370b239746ff14c6d07e73"},{url:"fonts/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.404ad2ff.woff2",revision:"61bc143dec7039dd6aac95721ddc4522"},{url:"fonts/iconfont.ttf",revision:"44a70020c44b51bdc446ea872ce7dc02"},{url:"fonts/iconfont.woff",revision:"a8b9fb5d03086315ac67bbdc19be037d"},{url:"fonts/iconfont.woff2",revision:"519f50f5ac976686200e51a466cd0e9b"},{url:"icons/apple-icon-120x120.png",revision:"c9920835d2adb9f6ab6a79a27f220a3a"},{url:"icons/apple-icon-152x152.png",revision:"9df9e65a1d2c6df3bd9143666b0e8c63"},{url:"icons/apple-icon-167x167.png",revision:"4300c6c136c06abcd781aa18644dd7a3"},{url:"icons/apple-icon-180x180.png",revision:"88dbf3d9e8269f1298486d103e22a57c"},{url:"icons/favicon-128x128.png",revision:"94eac99ea9888e7bb771156fd4beaa68"},{url:"icons/favicon-16x16.png",revision:"df5ff7f4728c4ef4b951d46b4136906f"},{url:"icons/favicon-32x32.png",revision:"32d2616fe346c76167dfa19a4061751d"},{url:"icons/favicon-96x96.png",revision:"e2ca8b53554aa06bd0b1b07bc524aa2e"},{url:"icons/icon-128x128.png",revision:"94eac99ea9888e7bb771156fd4beaa68"},{url:"icons/icon-192x192.png",revision:"56d9173bcb292001d480efe9d3f59b13"},{url:"icons/icon-256x256.png",revision:"79cc75801b044606c1beb77221f9c9b7"},{url:"icons/icon-384x384.png",revision:"a3110893391e4edbef04dc974f94e9eb"},{url:"icons/icon-512x512.png",revision:"920056a42693e9eaee173e58b51be9b3"},{url:"icons/ms-icon-144x144.png",revision:"238e89cd577397725c83aafe5f823b1d"},{url:"icons/safari-pinned-tab.svg",revision:"de8107bed7f087fb443d8e36855e7467"},{url:"imgs/circle_1.svg",revision:"2dce5a6a252896fc1266e26df1a90a5b"},{url:"imgs/circle_2.svg",revision:"bac6956e87d3eb314ba79f0212b33f4e"},{url:"imgs/circle_3.svg",revision:"26cde197caa93f1bb8ef83cf8d7442c1"},{url:"imgs/circle_4.svg",revision:"4728e0ce4c08e81263cbbf8b19940d30"},{url:"imgs/circle_5.svg",revision:"9bc29b2715a8d4d2ea889203e654ec2c"},{url:"imgs/circle_6.svg",revision:"ff3a08f42cae6c1ca29c613f26b25927"},{url:"imgs/circle_7.svg",revision:"9298a92f5ed4e7dd9fbac5f4313e06f0"},{url:"imgs/circle_8.svg",revision:"1df544f5f81c508d14fd2839f49d8150"},{url:"index.html",revision:"9ba379a2a5e73537bd96aca0b601f771"},{url:"js/2.97da1bd5.js",revision:"9a2ad6d27391d382acf340979bb035f4"},{url:"js/app.c993cb36.js",revision:"804f0ff01c719370d9fc48186c9f471b"},{url:"js/app.c993cb36.js.gz",revision:"d11b52ebc7bb4062cc3cba1d2e86e901"},{url:"js/offcanvas.worker.86e5ba79.worker.js",revision:"4147949f803ec25ffed9786a51f923db"},{url:"js/offcanvas.worker.86e5ba79.worker.js.gz",revision:"963160fa9a62f9bbe20f00303ae78a0a"},{url:"js/vendor.0fdfe783.js",revision:"92321f16ccc84cde55e1310345f782ea"},{url:"js/vendor.0fdfe783.js.gz",revision:"bc98d7a5583885e44a1f4c672e2f7f19"},{url:"manifest.json",revision:"54f719079588500919cdb8583d89a221"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"),{denylist:[/service-worker\.js$/,/workbox-(.)*\.js$/]}))}));
