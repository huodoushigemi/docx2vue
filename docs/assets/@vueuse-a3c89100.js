import{c as A,g as q,o as Z,n as z,u as O,r as w,a as k,b as K,d as $,w as M,i as J,e as ee}from"./@vue-2f9bc0b9.js";var H;const F=typeof window<"u",te=e=>typeof e=="function",N=e=>typeof e=="number",ne=e=>typeof e=="string",re=(e,n,t)=>Math.min(t,Math.max(n,e)),Q=()=>{};F&&((H=window==null?void 0:window.navigator)!=null&&H.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);const ye=(e,n)=>Object.prototype.hasOwnProperty.call(e,n);function E(e){return typeof e=="function"?e():O(e)}function R(e,n=!1,t="Timeout"){return new Promise((a,r)=>{setTimeout(n?()=>r(t):a,e)})}function j(e){return e}function L(e){return K()?($(e),!0):!1}function ge(e,n){return A({get(){var t;return(t=e.value)!=null?t:n},set(t){e.value=t}})}function ue(e){return typeof e=="function"?A(e):w(e)}function se(e,n=!0){q()?Z(e):n?e():z(e)}function C(e,n=!1){function t(u,{flush:c="sync",deep:h=!1,timeout:y,throwOnTimeout:v}={}){let g=null;const I=[new Promise(P=>{g=M(e,T=>{u(T)!==n&&(g==null||g(),P(T))},{flush:c,deep:h,immediate:!0})})];return y!=null&&I.push(R(y,v).then(()=>E(e)).finally(()=>g==null?void 0:g())),Promise.race(I)}function a(u,c){if(!J(u))return t(T=>T===u,c);const{flush:h="sync",deep:y=!1,timeout:v,throwOnTimeout:g}=c??{};let _=null;const P=[new Promise(T=>{_=M([e,u],([p,b])=>{n!==(p===b)&&(_==null||_(),T(p))},{flush:h,deep:y,immediate:!0})})];return v!=null&&P.push(R(v,g).then(()=>E(e)).finally(()=>(_==null||_(),E(e)))),Promise.race(P)}function r(u){return t(c=>Boolean(c),u)}function o(u){return a(null,u)}function l(u){return a(void 0,u)}function i(u){return t(Number.isNaN,u)}function f(u,c){return t(h=>{const y=Array.from(h);return y.includes(u)||y.includes(E(u))},c)}function d(u){return s(1,u)}function s(u=1,c){let h=-1;return t(()=>(h+=1,h>=u),c)}return Array.isArray(E(e))?{toMatch:t,toContains:f,changed:d,changedTimes:s,get not(){return C(e,!n)}}:{toMatch:t,toBe:a,toBeTruthy:r,toBeNull:o,toBeNaN:i,toBeUndefined:l,changed:d,changedTimes:s,get not(){return C(e,!n)}}}function we(e){return C(e)}function ae(e,n,t={}){const{immediate:a=!0}=t,r=w(!1);let o=null;function l(){o&&(clearTimeout(o),o=null)}function i(){r.value=!1,l()}function f(...d){l(),r.value=!0,o=setTimeout(()=>{r.value=!1,o=null,e(...d)},E(n))}return a&&(r.value=!0,F&&f()),L(i),{isPending:k(r),start:f,stop:i}}function G(e){var n;const t=E(e);return(n=t==null?void 0:t.$el)!=null?n:t}const S=F?window:void 0;F&&window.document;F&&window.navigator;F&&window.location;function m(...e){let n,t,a,r;if(ne(e[0])||Array.isArray(e[0])?([t,a,r]=e,n=S):[n,t,a,r]=e,!n)return Q;Array.isArray(t)||(t=[t]),Array.isArray(a)||(a=[a]);const o=[],l=()=>{o.forEach(s=>s()),o.length=0},i=(s,u,c)=>(s.addEventListener(u,c,r),()=>s.removeEventListener(u,c,r)),f=M(()=>G(n),s=>{l(),s&&o.push(...t.flatMap(u=>a.map(c=>i(s,u,c))))},{immediate:!0,flush:"post"}),d=()=>{f(),l()};return L(d),d}function oe(e,n=!1){const t=w(),a=()=>t.value=Boolean(e());return a(),se(a,n),t}function ie(e,n={}){const{window:t=S}=n,a=oe(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let r;const o=w(!1),l=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",i):r.removeListener(i))},i=()=>{a.value&&(l(),r=t.matchMedia(ue(e).value),o.value=r.matches,"addEventListener"in r?r.addEventListener("change",i):r.addListener(i))};return ee(i),L(()=>l()),o}const V=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x="__vueuse_ssr_handlers__";V[x]=V[x]||{};V[x];function Oe(e){return ie("(prefers-color-scheme: dark)",e)}function _e(e,n){const t=w(!1);let a=0;return F&&(m(e,"dragenter",r=>{r.preventDefault(),a+=1,t.value=!0}),m(e,"dragover",r=>{r.preventDefault()}),m(e,"dragleave",r=>{r.preventDefault(),a-=1,a===0&&(t.value=!1)}),m(e,"drop",r=>{var o,l;r.preventDefault(),a=0,t.value=!1;const i=Array.from((l=(o=r.dataTransfer)==null?void 0:o.files)!=null?l:[]);n==null||n(i.length===0?null:i)})),{isOverDropZone:t}}function le(e,n={}){const{immediate:t=!0,window:a=S}=n,r=w(!1);let o=0,l=null;function i(s){if(!r.value||!a)return;const u=s-o;e({delta:u,timestamp:s}),o=s,l=a.requestAnimationFrame(i)}function f(){!r.value&&a&&(r.value=!0,l=a.requestAnimationFrame(i))}function d(){r.value=!1,l!=null&&a&&(a.cancelAnimationFrame(l),l=null)}return t&&f(),L(d),{isActive:k(r),pause:d,resume:f}}function Te(e={}){const{type:n="page",touch:t=!0,resetOnTouchEnds:a=!1,initialValue:r={x:0,y:0},window:o=S,eventFilter:l}=e,i=w(r.x),f=w(r.y),d=w(null),s=v=>{n==="page"?(i.value=v.pageX,f.value=v.pageY):n==="client"?(i.value=v.clientX,f.value=v.clientY):n==="movement"&&(i.value=v.movementX,f.value=v.movementY),d.value="mouse"},u=()=>{i.value=r.x,f.value=r.y},c=v=>{if(v.touches.length>0){const g=v.touches[0];n==="page"?(i.value=g.pageX,f.value=g.pageY):n==="client"&&(i.value=g.clientX,f.value=g.clientY),d.value="touch"}},h=v=>l===void 0?s(v):l(()=>s(v),{}),y=v=>l===void 0?c(v):l(()=>c(v),{});return o&&(m(o,"mousemove",h,{passive:!0}),m(o,"dragover",h,{passive:!0}),t&&n!=="movement"&&(m(o,"touchstart",y,{passive:!0}),m(o,"touchmove",y,{passive:!0}),a&&m(o,"touchend",u,{passive:!0}))),{x:i,y:f,sourceType:d}}function Ie(e={}){const{touch:n=!0,drag:t=!0,initialValue:a=!1,window:r=S}=e,o=w(a),l=w(null);if(!r)return{pressed:o,sourceType:l};const i=s=>()=>{o.value=!0,l.value=s},f=()=>{o.value=!1,l.value=null},d=A(()=>G(e.target)||r);return m(d,"mousedown",i("mouse"),{passive:!0}),m(r,"mouseleave",f,{passive:!0}),m(r,"mouseup",f,{passive:!0}),t&&(m(d,"dragstart",i("mouse"),{passive:!0}),m(r,"drop",f,{passive:!0}),m(r,"dragend",f,{passive:!0})),n&&(m(d,"touchstart",i("touch"),{passive:!0}),m(r,"touchend",f,{passive:!0}),m(r,"touchcancel",f,{passive:!0})),{pressed:o,sourceType:l}}var W;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(W||(W={}));var ce=Object.defineProperty,U=Object.getOwnPropertySymbols,fe=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable,Y=(e,n,t)=>n in e?ce(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,ve=(e,n)=>{for(var t in n||(n={}))fe.call(n,t)&&Y(e,t,n[t]);if(U)for(var t of U(n))de.call(n,t)&&Y(e,t,n[t]);return e};const pe={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ve({linear:j},pe);function me([e,n,t,a]){const r=(s,u)=>1-3*u+3*s,o=(s,u)=>3*u-6*s,l=s=>3*s,i=(s,u,c)=>((r(u,c)*s+o(u,c))*s+l(u))*s,f=(s,u,c)=>3*r(u,c)*s*s+2*o(u,c)*s+l(u),d=s=>{let u=s;for(let c=0;c<4;++c){const h=f(u,e,t);if(h===0)return u;const y=i(u,e,t)-s;u-=y/h}return u};return s=>e===n&&t===a?s:i(d(s),n,a)}function Pe(e,n={}){const{delay:t=0,disabled:a=!1,duration:r=1e3,onFinished:o=Q,onStarted:l=Q,transition:i=j}=n,f=A(()=>{const p=O(i);return te(p)?p:me(p)}),d=A(()=>{const p=O(e);return N(p)?p:p.map(O)}),s=A(()=>N(d.value)?[d.value]:d.value),u=w(s.value.slice(0));let c,h,y,v,g;const{resume:_,pause:I}=le(()=>{const p=Date.now(),b=re(1-(y-p)/c,0,1);u.value=g.map((B,D)=>{var X;return B+((X=h[D])!=null?X:0)*f.value(b)}),b>=1&&(I(),o())},{immediate:!1}),P=()=>{I(),c=O(r),h=u.value.map((p,b)=>{var B,D;return((B=s.value[b])!=null?B:0)-((D=u.value[b])!=null?D:0)}),g=u.value.slice(0),v=Date.now(),y=v+c,_(),l()},T=ae(P,t,{immediate:!1});return M(s,()=>{O(a)||(O(t)<=0?P():T.start())},{deep:!0}),M(()=>O(a),p=>{p&&(u.value=s.value.slice(0),I())}),A(()=>{const p=O(a)?s:u;return N(d.value)?p.value[0]:p.value})}export{Te as a,G as b,Ie as c,Pe as d,we as e,_e as f,ye as h,ge as r,Oe as u};
