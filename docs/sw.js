if(!self.define){let s,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(i,l)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const o=s=>r(s,n),t={module:{uri:n},exports:u,require:o};e[n]=Promise.all(i.map((s=>t[s]||o(s)))).then((s=>(l(...s),u)))}}define(["./workbox-30e9d199"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/@ctrl-43a4208a.js",revision:null},{url:"assets/@vue-e6c15c36.js",revision:null},{url:"assets/@vueuse-d8de8cc9.js",revision:null},{url:"assets/docx-preview-32015948.js",revision:null},{url:"assets/editor.worker-ef2c91c3.js",revision:null},{url:"assets/github-540f5a2f.svg",revision:null},{url:"assets/gogocode-235ac559.js",revision:null},{url:"assets/index-0d853c30.css",revision:null},{url:"assets/index-6c34862f.js",revision:null},{url:"assets/json.worker-a13ad22d.js",revision:null},{url:"assets/jszip-1c3a6353.js",revision:null},{url:"assets/monaco-editor-4b982060.css",revision:null},{url:"assets/monaco-editor-vue3-6392893e.js",revision:null},{url:"assets/prettier-e74c6c92.js",revision:null},{url:"assets/prettierFormat-3a3234c1.js",revision:null},{url:"assets/round_down-b71e62d1.svg",revision:null},{url:"assets/vue-15e3ffcd.js",revision:null},{url:"assets/vue-5532db34.svg",revision:null},{url:"assets/vue-demi-4ed993c7.js",revision:null},{url:"assets/vue-reveal-effect-94b5d062.js",revision:null},{url:"assets/vue3-sfc-loader-6999a21f.js",revision:null},{url:"assets/word-a6e5b8a9.svg",revision:null},{url:"assets/workbox-window-295a6886.js",revision:null},{url:"index.html",revision:"b843e57f41860328ec50d58afc2e8bae"},{url:"vite.svg",revision:"8e3a10e157f75ada21ab742c022d5430"},{url:"vue-dot-js.png",revision:"c4cdac949ace17f4915cbf2df07fb92d"},{url:"vue-dot-js.png",revision:"c4cdac949ace17f4915cbf2df07fb92d"},{url:"manifest.webmanifest",revision:"3f3728bd9f5f00003987146c36d0aa30"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
