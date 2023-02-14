import{u as X,a as Y,b as ee,c as te,d as re,e as ne,h as N}from"./@vueuse-a3c89100.js";import{aE as R,bh as oe,u as E,w as ae,b2 as se,r as p,c as le,aD as c,br as ie}from"./@vue-2f9bc0b9.js";import{T as de}from"./@ctrl-43a4208a.js";const G="reveal-effect",O=`x-${G}`,ce={borderColor:"rgba(200, 200, 200, .4)",bgColor:"rgba(200, 200, 200, .2)"},H={borderColor:"rgba(100, 100, 100, .4)",bgColor:"rgba(100, 100, 100, .2)"},_={...H,borderWidth:1,borderGradientSize:100,bgGradientSize:130,light:X(),clickEffect:!0,disabled:!1};function ue(n,e){e===void 0&&(e={});var a=e.insertAt;if(!(!n||typeof document>"u")){var o=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",a==="top"&&o.firstChild?o.insertBefore(t,o.firstChild):o.appendChild(t),t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n))}}var fe=`.x-reveal-effect {\r
  --xBorderWidth: 1px;\r
  --xBorderImage: unset;\r
  --xRadialGradient: none;\r
  --xSplash: none;\r
  position: relative;\r
}\r
\r
.x-reveal-effect::after {\r
  content: '';\r
  position: absolute;\r
  top: 0;\r
  right: 0;\r
  bottom: 0;\r
  left: 0;\r
  border: var(--xBorderWidth) solid transparent;\r
  border-image: var(--xBorderImage);\r
\r
  background-image: var(--xRadialGradient), var(--xSplash);\r
  background-origin: border-box;\r
  transition: opacity 1.5s;\r
  border-radius: inherit;\r
  transform: translateZ(0);\r
\r
  pointer-events: none;\r
  /* z-index: 1; */\r
}`;ue(fe);function j(n,e,a,o=0){const t=n-a.x,u=e-a.y;return t>=-o&&t<=a.width+o&&u>=-o&&u<=a.height+o}const{x:pe,y:ve}=Y({initialValue:{x:null,y:null},type:"client"}),C=R([]);oe(()=>{C.forEach(n=>{n.update()})});let v=R({});function ge(n){v=R(n)}function he(n,e){const a={el:n,update:Z,mount:I,unmount:J},o=1e3,t=ee(n),u=r=>typeof r=="function"?r(t):E(r),$=(r,s)=>{var d;let l;for(let x=0;x<r.length;x++)if((l=u((d=r[x])==null?void 0:d[s]))!=null)return l},U=r=>{const s={};for(const l in r)s[l]=u(r[l]);return s},{pressed:z}=te({target:t});ae(z,async r=>{r?(f.value&&await k(),g.value=1):f.value?(h.value=300,se(g)):await k()});const g=p(0),h=p(o),f=p(!1),W=p(!1),T=re(g,{duration:h,disabled:W,transition:[0,0,.5,0],onStarted:async()=>{f.value=!0},onFinished:async()=>{f.value=!1,z.value||await k()}}),A=[0,25,75],V=[0,75,125],P=le(()=>V.map((r,s)=>A[s]+(r-A[s])*T.value));function k(){h.value=1,g.value=0,W.value=!1;const r=p(!1);return requestAnimationFrame(()=>{requestAnimationFrame(async()=>{h.value=o,f.value=!1,r.value=!0})}),ne(r).toBeTruthy()}let B={x:null,y:null},S=!1,w=!1;function Z(r){const s=pe.value,l=ve.value;if(s==null||l==null)return;const d=t.getBoundingClientRect();t.classList.add(O),r&&(e=r);const M=$([e,v,_],"light")?ce:H;let i=U({..._,...v,...e,borderColor:N(e,"borderColor")?u(e.borderColor):$([v,M],"borderColor"),bgColor:N(e,"bgColor")?u(e.bgColor):$([v,M],"bgColor")});if(i.borderWidth&&j(s,l,d,i.borderGradientSize)){const m=s-d.x,y=l-d.y;c(()=>t.style.setProperty("--xBorderImage",`radial-gradient(${i.borderGradientSize}px at ${m}px ${y}px, ${i.borderColor}, transparent) 1`)),c(()=>t.style.setProperty("--xBorderWidth",`${i.borderWidth}px`)),S=!0}else S&&(c(()=>F()),S=!1);const q=j(s,l,d);if((q||f.value)&&i.bgColor){const m=B.x-d.x,y=B.y-d.y;if(q?(B={x:s,y:l},c(()=>t.style.setProperty("--xRadialGradient",`radial-gradient(${i.bgGradientSize}px at ${m}px ${y}px, ${i.bgColor}, transparent 100%)`))):c(()=>t.style.removeProperty("--xRadialGradient")),f.value&&i.clickEffect){const L=new de(i.bgColor),K=L.setAlpha(L.getAlpha()*(.1+(1-.1)*(1-T.value))).toHex8String(),Q=`radial-gradient(${i.bgGradientSize}px at ${m}px ${y}px, transparent ${P.value[0]}%, ${K} ${P.value[1]}%, transparent ${P.value[2]}%)`;c(()=>t.style.setProperty("--xSplash",Q))}else c(()=>t.style.removeProperty("--xSplash"));w=!0}else w&&(c(()=>D()),w=!1)}function D(){["xRadialGradient","xSplash"].forEach(r=>{t.style.removeProperty(`--${r}`)})}function F(){["xBorderImage","xBorderWidth"].forEach(r=>{t.style.removeProperty(`--${r}`)})}function I(){C.includes(a)||C.push(a)}function J(){D(),F(),ie(C,a),t.classList.remove(O)}return I(),a}const b=new WeakMap,xe={mounted(n,e){var o;const a=he(n,{...e.value,light:E((o=e.value)==null?void 0:o.light)??e.modifiers.light});b.set(n,a)},updated(n,e){var a,o;(o=b.get(n))==null||o.update({...e.value,light:E((a=e.value)==null?void 0:a.light)??e.modifiers.light})},unmounted(n){var e;(e=b.get(n))==null||e.unmount(),b.delete(n)}},Pe={name:G,setDefaultProps:ge,install(n){n.directive(G,xe)}};export{Pe as R};
