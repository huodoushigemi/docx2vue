import{U as I,A as x,D as c,aX as T,ay as _,bm as N,aI as ne,aK as K,r as R,e as oe,Q as Z,x as Q,a4 as re,bs as se,bt as ae,am as ie,o as le,c as ce,u as w,y as U,bk as W,z as C,O as $,aj as ue,N as O,i as de,F as H,aH as pe,ak as fe,bp as me,aO as j}from"./@vue-e6c15c36.js";import{R as Y}from"./vue-reveal-effect-94b5d062.js";import{_ as L}from"./monaco-editor-7fb5109a.js";import{f as he,r as ge}from"./@vueuse-d8de8cc9.js";import{v as ve}from"./vue-15e3ffcd.js";import{d as _e}from"./docx-preview-32015948.js";import"./@ctrl-43a4208a.js";import"./jszip-1c3a6353.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const be=""+new URL("1-02f4af48.docx",import.meta.url).href,ye=""+new URL("2-d92cb5f6.docx",import.meta.url).href,we=""+new URL("3-cc554d79.docx",import.meta.url).href,F=""+new URL("word-a6e5b8a9.svg",import.meta.url).href,xe=""+new URL("github-540f5a2f.svg",import.meta.url).href,ke=""+new URL("vue-5532db34.svg",import.meta.url).href,Ee=""+new URL("round_down-b71e62d1.svg",import.meta.url).href,Re={grid:"~ auto-cols-[max-content]","gap-x-4":"",relative:"",my4:"",px5:"",py3:"",shadow:"","bg-white":"",class:""},Le=c("img",{"self-center":"",w12:"",h12:"","row-span-2":"",src:F},null,-1),Pe={"text-lg":"",mb1:"",class:"col-[2]"},Ae={"text-sm":"","c-gray":""},q=I({__name:"File",props:{name:null,desc:null,url:null},emits:["preview"],setup(e,{emit:n}){const t=e;async function o(){const a=await(await window.fetch(t.url)).blob(),p=new File([a],t.name,{type:a.type});return Object.defineProperty(p,"webkitRelativePath",{value:t.name}),p}async function r(){n("preview",await o())}async function s(){const a=document.createElement("a");a.href=URL.createObjectURL(await o()),a.download=t.name,a.click(),URL.revokeObjectURL(a.href)}return(a,p)=>(_(),x("div",Re,[Le,c("span",Pe,T(e.name),1),c("span",Ae,T(e.desc),1),c("button",{absolute:"","bottom-2":"","right-16":"","op-30":"","hover:op-60":"",onClick:r},"预览"),c("button",{absolute:"","bottom-2":"","right-4":"","op-30":"","hover:op-60":"",onClick:s},"下载")]))}}),Se={class:"px4 py1 bg-#0078d7 hover:bg-#005ea9 text-white b-0 leading-6","focus:outline":"~ 2 black offset-1"},M=I({__name:"Button",setup(e){return(n,t)=>{const o=K("reveal-effect");return N((_(),x("button",Se,[ne(n.$slots,"default")])),[[o]])}}}),Ce=I({__name:"SFC",props:{sfc:null,props:null},setup(e){const n=e;let t;const o=R();return oe(()=>{if(!n.sfc)return t==null||t.unmount(),t=null;const r=Z(async()=>(await L(()=>import("./vue3-sfc-loader-6999a21f.js").then(s=>s.v),["./vue3-sfc-loader-6999a21f.js","./docx-preview-32015948.js","./jszip-1c3a6353.js"],import.meta.url)).loadModule("App.vue",{moduleCache:{vue:ve},getFile:()=>n.sfc,addStyle(s){o.value.append(Object.assign(document.createElement("style"),{textContent:s}))}}));t==null||t.unmount(),t=Q(()=>re(r,n.props)),t.mount(o.value)}),(r,s)=>(_(),x("div",{ref_key:"el",ref:o},null,512))}});let D;window.addEventListener("beforeinstallprompt",e=>{e.preventDefault(),D=e,console.log("👍","beforeinstallprompt",e),z.value=!1});const z=R(!0);window.addEventListener("appinstalled",()=>z.value=!0);function Oe(){return{prompt:async()=>await(D==null?void 0:D.prompt()),installed:z}}async function J(e){const n=(await L(()=>import("./gogocode-235ac559.js").then(t=>t.g),["./gogocode-235ac559.js","./docx-preview-32015948.js","./jszip-1c3a6353.js"],import.meta.url)).default;return e.replace(/\{\{\s*(.+?)\s*\}\}/g,(t,o)=>`{{ ${n(o).find("$_$").each(s=>{const a=s.parent(0),p=Ne(s).name;p&&se(p)||(a.node.type=="MemberExpression"&&s.parent(1).node.type!="MemberExpression"?(a.replaceBy(`get('${a.generate()}')`),a.replaceBy(a.node.expression)):a.node.type!="MemberExpression"&&(s.node.name=`get('${s.node.name}')`))}).root().generate({isPretty:!1})} }}`)}function Ne(e){const n=e.parent(0);return n.node.type==="MemberExpression"?n.find("$_$")[0].nodePath.node:e.node}async function $e(e){const n=(await L(()=>import("./gogocode-235ac559.js").then(o=>o.g),["./gogocode-235ac559.js","./docx-preview-32015948.js","./jszip-1c3a6353.js"],import.meta.url)).default,t=n(e).attr("program");if(t.body.length==1&&t.body[0].type==="ExpressionStatement")return["Identifier","MemberExpression"].includes(t.body[0].expression.type)}function X(){let e,n;const t=new Promise((o,r)=>(e=o,n=r));return t.resolve=e,t.reject=n,t}async function je(e){const n=Array.from(e||[]).map(t=>t.webkitGetAsEntry()).filter(t=>t!=null).flat();return await ee(n)}async function ee(e,n=[]){for(const t of e)if(t.isDirectory){const o=t.createReader(),r=X();o.readEntries(s=>ee(s,n).then(r.resolve)),await r}else{const o=X();t.file(r=>{const s=t.fullPath.substring(1),a=Object.defineProperty(r,"webkitRelativePath",{value:s});n.push(a),o.resolve(1)}),await o}return n}function De(e,n=""){const t=Te(e);for(;e=t.pop();)(o=>(n=typeof e=="number"?[]:{})[e]=o)(n);return n}function Te(e){return e.replace(/\\[(.+?)\\]/,".$1").split(".")}async function Ie(e){const n=document.createElement("div");await _e.renderAsync(e,n,void 0,{inWrapper:!1,useBase64URL:!0});for(const t of n.querySelectorAll("*"))for(let o=t.firstChild;o=o==null?void 0:o.nextSibling;)Me(o,o.previousSibling)&&(o.textContent=o.previousSibling.textContent+o.textContent,o.previousSibling.remove());return await Promise.all([...n.querySelectorAll("img")].map(t=>new Promise(o=>(t.onload=o,t.onerror=o)))),n.innerHTML}const te=e=>e.nodeType==3,Ue=e=>(e==null?void 0:e.tagName)==="SPAN"&&e.childNodes.length==1&&te(e.firstChild),We=(e,n)=>e.attributes.length==n.attributes.length&&(e==null?void 0:e.getAttributeNames().every(t=>e.getAttribute(t)==n.getAttribute(t))),Me=(e,n)=>[e,n].every(Ue)&&We(e,n);async function Be(e){const n=g=>{var f;return(f=g.match(/\{\{\s*(.*?)\s*\}\}/))==null?void 0:f[1]},t=g=>g.trim().startsWith("{{")&&g.trim().endsWith("}}"),o=new Set,r=Ve(e.body,"div");for(const g of r.querySelectorAll("*"))for(const f of g.childNodes){if(!te(f))continue;const P=f.textContent.replace(`
`,""),y=f.parentElement,E=f.nextSibling,i=n(P);if(!i)continue;f.textContent=await J(P);const l=await $e(i)?i:null;if(l)if(o.add(l),t(P))if(y.childNodes.length==1)B(y,l);else{const u=e.createElement("span");B(u,l),u.append(f),y.insertBefore(f,E)}else{f.parentNode.removeChild(f);const u=P.match(/(.*?)({{.*?}})(.*)/),[,d,S,A]=u;d&&y.insertBefore(V(G("span",null,d)),E),y.insertBefore(B(e.createElement("span"),l,await J(S)),E),n(A)?y.insertBefore(e.createTextNode(A),E):A&&y.insertBefore(V(G("span",null,A)),E)}}const s=`<template>${r.outerHTML}</template>`,a=`
<script>
export default {
  props: {
    // 哪些字段可以双向绑定，默认全部
    vmodels: Array,
    // known data ${JSON.stringify([...o].reduce((g,f)=>Object.assign(g,De(f)),{}))}
    data: { type: Object, default: () => ({}) }
  },
  computed: {
    edit() {
      const set = new Set(this.vmodels)
      return (prop) => !this.vmodels || set.has(prop)
    }
  },
  methods: {
    onInput({ target }) {
      const prop = target.getAttribute('name')
      this.set(prop, target.textContent)
    },
    getPaths(k) {
      return k.replace(/\\[(.+?)\\]/, '.$1').split('.')
    },
    get(k) {
      return this.getPaths(k).reduce((o, k) => o?.[k], this.data)
    },
    set(k, v) {
      const ks = this.getPaths(k)
      const prop = ks.shift()
      while (k = ks.pop()) (vv => (v = typeof k === 'number' ? [] : {})[k] = vv)(v)
      this._set(prop, v)
    },
    _set(prop, val) {
      if (this.$set) this.$set(this.data, prop, val)
      else this.data[prop] = val
    }
  }
}
<\/script>
`,p=e.querySelectorAll("style"),m=Array.from(p).map(g=>g.textContent).join(`
`),v=Object.assign(e.createElement("style"),{textContent:m});v.setAttribute("scoped",""),v.textContent+=`
  [contenteditable] { background: #7a7a7a12; text-align: center; white-space: break-spaces !important; }
  [contenteditable=false] { cursor: not-allowed; }
  [contenteditable]:empty { padding-left: 1em; padding-right: 1em; }
  [contenteditable]:empty::after { content: '' }
  [contenteditable]:hover { background: #7a7a7a33; }
  `;const b=v==null?void 0:v.outerHTML.replace(/<!--/g,"").replace(/-- ?>/g,""),k=(await L(()=>import("./prettierFormat-3a3234c1.js"),["./prettierFormat-3a3234c1.js","./prettier-e74c6c92.js"],import.meta.url)).default;return k([s,a,b].map(g=>g.trim()).join(`

`).trim())}function Ve(e,n){var o,r;const t=document.createElement(n);return e.getAttributeNames().forEach(s=>t.setAttribute(s,e.getAttribute(s))),t.innerHTML=e.innerHTML,(o=e.parentNode)==null||o.insertBefore(t,e),(r=e.parentNode)==null||r.removeChild(e),t}function B(e,n,t){return n&&(Fe(e,n),V(e)),t&&(e.textContent=t),e}function V(e){const n={fontFamily:"inherit",minHeight:"inherit",fontSize:"inherit"};return e.setAttribute("style",ae(ie([n,e.getAttribute("style")]))),e}function Fe(e,n){return e.id=n,e.setAttribute(":contenteditable",`edit('${n}')`),e.setAttribute("name",n),e.setAttribute("v-on:input","onInput"),e}function G(e,n,t){const o=document.createElement(e);return Object.keys(n??{}).forEach(r=>o.setAttribute(r,n[r])),o.textContent=t,o}const ze={sticky:"!",aic:"",spacex4:"",px4:"","top-0":"","w-full":"",h14:"","box-border":"","bg-white":"","shadow-lg":"","z-9":""},He=c("h1",null,"🔨 Docx To Vue",-1),qe=c("img",{w11:"",h11:"",src:F},null,-1),Je=c("div",{"flex-1":""},null,-1),Xe=c("a",{href:"https://github.com/huodoushigemi/docx2vue",target:"_blank"},[c("img",{src:"https://img.shields.io/github/stars/huodoushigemi/docx2vue.svg?style=for-the-badge"})],-1),Ge=c("a",{href:"https://github.com/huodoushigemi/docx2vue",target:"_blank"},[c("img",{w10:"",src:xe})],-1),Ke={wrap:"","justify-evenly":""},Ze={key:0,class:"animate__flipInX",absolute:"","inset-0":"",col:"",fcc:"",op60:""},Qe=c("img",{w20:"",mb4:"",src:F},null,-1),Ye={key:1,absolute:"","inset-0":"",fcc:"","text-100":"","c-white":"",class:"bg-#0000002f",style:{"backdrop-filter":"blur(24px)"}},et={w80:""},tt=["onClick"],nt=c("img",{w8:"",py2:"",mr4:"",src:ke},null,-1),ot=["onClick"],rt=c("img",{h14:"","scale-75":"",op40:"",hover:"scale-85 op80",src:Ee,alt:"download",title:"download"},null,-1),st=[rt],at=c("h2",null,"示例",-1),it=c("p",null,[c("a",{"c-inherit":"",href:"https://github.com/huodoushigemi/docx2vue",target:"_blank"},"Please give a ⭐️ if this project helped you!")],-1),lt=I({__name:"App",setup(e){const n=Z(async()=>{const i=(await L(()=>import("./monaco-editor-7fb5109a.js").then(u=>u.j),["./monaco-editor-7fb5109a.js","./monaco-editor-4b982060.css"],import.meta.url)).default,l=(await L(()=>import("./monaco-editor-7fb5109a.js").then(u=>u.a),["./monaco-editor-7fb5109a.js","./monaco-editor-4b982060.css"],import.meta.url)).default;return window.MonacoEnvironment={getWorker(u,d){return d==="json"?new i:new l}},L(()=>import("./monaco-editor-vue3-6392893e.js"),["./monaco-editor-vue3-6392893e.js","./monaco-editor-7fb5109a.js","./monaco-editor-4b982060.css"],import.meta.url)}),t=["1","2","3"].map(i=>new URL(Object.assign({"./assets/1.docx":be,"./assets/2.docx":ye,"./assets/3.docx":we})[`./assets/${i}.docx`],self.location).href),o=new Date(1677656217335).toLocaleString(),{prompt:r,installed:s}=Oe(),a=R(),{isOverDropZone:p}=he(a,()=>{}),m=R([]),v=R(),b=ge(R(),{sfc:"",props:{}});le(()=>{a.value.addEventListener("drop",async i=>{var d;const u=(await je((d=i.dataTransfer)==null?void 0:d.items)).filter(S=>S.name.endsWith(".docx"));if(!u.length)return alert("仅支持 docx 类型的文件");m.value=u,h(m.value[0])})});const k=ce({get:()=>JSON.stringify(b.value.props,null,2),set:i=>b.value.props=JSON.parse(i)});async function h(i){const l=await f(i);g(l),v.value=i}function g(i){var d;const l=(d=i.match(/\/\/ known data (.*)/))==null?void 0:d[1],u={vmodels:null,data:{}};l&&(u.data=JSON.parse(l)),b.value={sfc:i,props:u}}async function f(i){const l=await Ie(i).catch(d=>(alert("文件内容读取失败"),Promise.reject(d))),u=new DOMParser().parseFromString(l,"text/html");return await Be(u)}async function P(i){const l=await f(i),u=i.name.replace(".docx",".vue");let d=document.createElement("a");d.download=u,d.href=URL.createObjectURL(new Blob([l])),d.click()}async function y(){for(const i of m.value)await P(i)}function E(i){m.value=[i],h(i)}return(i,l)=>{const u=K("reveal-effect");return _(),x(H,null,[N((_(),x("header",ze,[He,qe,Je,Xe,Ge,w(s)?C("",!0):(_(),U(M,{key:0,onClick:w(r)},{default:W(()=>[O("下载")]),_:1},8,["onClick"]))])),[[u]]),c("main",Ke,[c("article",{ref_key:"dropRef",ref:a,relative:"",my4:"","min-h-842pt":"","bg-white":"","z-1":"",style:{"box-shadow":"0px 5px 30px -10px #0000004f"}},[$(Ce,ue(w(b),{"min-w595pt":""}),null,16),v.value?C("",!0):(_(),x("div",Ze,[Qe,O("将 docx 文件或文件夹拖拽至此")])),w(p)?(_(),x("div",Ye,"+")):C("",!0)],512),c("div",et,[$(w(n),{value:w(k),"onUpdate:value":l[0]||(l[0]=d=>de(k)?k.value=d:null),"bg-gray":"",language:"json",height:300,options:{minimap:{enabled:!1},lineNumbers:"off"},shadow:"",class:"animate__animated animate__flipInX",my4:""},null,8,["value"]),m.value.length?(_(),U(M,{key:0,mt4:"",mb2:"",onClick:y},{default:W(()=>[O("下载全部")]),_:1})):C("",!0),m.value.length?(_(),U(M,{key:1,ml2:"",mt4:"",mb2:"",onClick:l[1]||(l[1]=d=>{m.value=[],b.value=null,v.value=null})},{default:W(()=>[O("X")]),_:1})):C("",!0),(_(!0),x(H,null,pe(m.value,(d,S)=>N((_(),x("div",{key:S,aic:"",pl4:"",mb1:"",h14:"","leading-8":"","cursor-pointer":"",class:fe(["bg-#80808033 hover:bg-#8080804f",d==v.value&&"bg-#00162733!"]),onClick:A=>h(d)},[nt,O(" "+T(d.webkitRelativePath.replace(".docx",".vue"))+" ",1),c("div",{mla:"","box-border":"","leading-0":"",class:"bg-#8080801a hover:bg-#80808066",onClick:me(A=>P(d),["stop"])},st,8,ot)],10,tt)),[[u]])),128))]),l[2]||(j(-1),l[2]=c("article",{"min-w75":"",px4:""},[at,N($(q,{name:"exmaple.docx",desc:"示例文件",url:w(t)[0],onPreview:E},null,8,["url"]),[[u]]),N($(q,{name:"exmaple-img.docx",desc:"带图片的示例",url:w(t)[1],onPreview:E},null,8,["url"]),[[u]])]),j(1),l[2])]),l[3]||(j(-1),l[3]=c("footer",{col:"",fcc:"",mt8:"",h40:"","bg-gray-300":""},[c("p",null,[c("b",null,"Last updated: "+T(w(o)),1)]),it]),j(1),l[3])],64)}}});function ct(e={}){const{immediate:n=!1,onNeedRefresh:t,onOfflineReady:o,onRegistered:r,onRegisteredSW:s,onRegisterError:a}=e;let p,m;const v=async(k=!0)=>{await m};async function b(){if("serviceWorker"in navigator){const{Workbox:k}=await L(()=>import("./workbox-window-295a6886.js"),[],import.meta.url);p=new k("./sw.js",{scope:"./",type:"classic"}),p.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),p.addEventListener("installed",h=>{h.isUpdate||o==null||o()}),p.register({immediate:n}).then(h=>{s?s("./sw.js",h):r==null||r(h)}).catch(h=>{a==null||a(h)})}}return m=b(),v}function ut(e={}){const{immediate:n=!0,onNeedRefresh:t,onOfflineReady:o,onRegistered:r,onRegisteredSW:s,onRegisterError:a}=e,p=R(!1),m=R(!1);return{updateServiceWorker:ct({immediate:n,onNeedRefresh(){p.value=!0,t==null||t()},onOfflineReady(){m.value=!0,o==null||o()},onRegistered:r,onRegisteredSW:s,onRegisterError:a}),offlineReady:m,needRefresh:p}}window.addEventListener("appinstalled",()=>console.log("appinstalled"));ut({onNeedRefresh:()=>confirm("新的内容可用，单击确定按钮进行更新")&&location.reload()});Y.setDefaultProps({borderWidth:2,borderColor:"#0000002f"});Q(lt).use(Y).mount("#app");
