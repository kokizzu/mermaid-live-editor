import{o as De,t as ye}from"../chunks/index.787ce9b5.js";import{S as Je,a as Ke,I as q,g as Ce,f as qe,b as we,c as le,s as M,i as _e,d as Q,P as Fe,e as Ye}from"../chunks/singletons.b4fafb8c.js";import{b as K}from"../chunks/paths.818c1197.js";function We(t,o){return t==="/"||o==="ignore"?t:o==="never"?t.endsWith("/")?t.slice(0,-1):t:o==="always"&&!t.endsWith("/")?t+"/":t}function Xe(t){return t.split("%25").map(decodeURI).join("%25")}function Ze(t){for(const o in t)t[o]=decodeURIComponent(t[o]);return t}const Qe=["href","pathname","search","searchParams","toString","toJSON"];function et(t,o){const f=new URL(t);for(const c of Qe){let u=f[c];Object.defineProperty(f,c,{get(){return o(),u},enumerable:!0,configurable:!0})}return tt(f),f}function tt(t){Object.defineProperty(t,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}const nt="/__data.json";function at(t){return t.replace(/\/$/,"")+nt}function ze(t){try{return JSON.parse(sessionStorage[t])}catch{}}function Me(t,o){const f=JSON.stringify(o);try{sessionStorage[t]=f}catch{}}function rt(...t){let o=5381;for(const f of t)if(typeof f=="string"){let c=f.length;for(;c;)o=o*33^f.charCodeAt(--c)}else if(ArrayBuffer.isView(f)){const c=new Uint8Array(f.buffer,f.byteOffset,f.byteLength);let u=c.length;for(;u;)o=o*33^c[--u]}else throw new TypeError("value must be a string or TypedArray");return(o>>>0).toString(36)}const fe=window.fetch;window.fetch=(t,o)=>((t instanceof Request?t.method:(o==null?void 0:o.method)||"GET")!=="GET"&&te.delete(ke(t)),fe(t,o));const te=new Map;function ot(t,o){const f=ke(t,o),c=document.querySelector(f);if(c!=null&&c.textContent){const{body:u,...d}=JSON.parse(c.textContent),R=c.getAttribute("data-ttl");return R&&te.set(f,{body:u,init:d,ttl:1e3*Number(R)}),Promise.resolve(new Response(u,d))}return fe(t,o)}function it(t,o,f){if(te.size>0){const c=ke(t,f),u=te.get(c);if(u){if(performance.now()<u.ttl&&["default","force-cache","only-if-cached",void 0].includes(f==null?void 0:f.cache))return new Response(u.body,u.init);te.delete(c)}}return fe(o,f)}function ke(t,o){let c=`script[data-sveltekit-fetched][data-url=${JSON.stringify(t instanceof Request?t.url:t)}]`;if(o!=null&&o.headers||o!=null&&o.body){const u=[];o.headers&&u.push([...new Headers(o.headers)].join(",")),o.body&&(typeof o.body=="string"||ArrayBuffer.isView(o.body))&&u.push(o.body),c+=`[data-hash="${rt(...u)}"]`}return c}const st=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function ct(t){const o=[];return{pattern:t==="/"?/^\/$/:new RegExp(`^${ft(t).map(c=>{const u=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(c);if(u)return o.push({name:u[1],matcher:u[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const d=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(c);if(d)return o.push({name:d[1],matcher:d[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!c)return;const R=c.split(/\[(.+?)\](?!\])/);return"/"+R.map((w,y)=>{if(y%2){if(w.startsWith("x+"))return be(String.fromCharCode(parseInt(w.slice(2),16)));if(w.startsWith("u+"))return be(String.fromCharCode(...w.slice(2).split("-").map(P=>parseInt(P,16))));const p=st.exec(w);if(!p)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,T,U,k,j]=p;return o.push({name:k,matcher:j,optional:!!T,rest:!!U,chained:U?y===1&&R[0]==="":!1}),U?"(.*?)":T?"([^/]*)?":"([^/]+?)"}return be(w)}).join("")}).join("")}/?$`),params:o}}function lt(t){return!/^\([^)]+\)$/.test(t)}function ft(t){return t.slice(1).split("/").filter(lt)}function ut(t,o,f){const c={},u=t.slice(1);let d=0;for(let R=0;R<o.length;R+=1){const l=o[R],w=u[R-d];if(l.chained&&l.rest&&d){c[l.name]=u.slice(R-d,R+1).filter(y=>y).join("/"),d=0;continue}if(w===void 0){l.rest&&(c[l.name]="");continue}if(!l.matcher||f[l.matcher](w)){c[l.name]=w;const y=o[R+1],p=u[R+1];y&&!y.rest&&y.optional&&p&&(d=0);continue}if(l.optional&&l.chained){d++;continue}return}if(!d)return c}function be(t){return t.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function dt({nodes:t,server_loads:o,dictionary:f,matchers:c}){const u=new Set(o);return Object.entries(f).map(([l,[w,y,p]])=>{const{pattern:T,params:U}=ct(l),k={id:l,exec:j=>{const P=T.exec(j);if(P)return ut(P,U,c)},errors:[1,...p||[]].map(j=>t[j]),layouts:[0,...y||[]].map(R),leaf:d(w)};return k.errors.length=k.layouts.length=Math.max(k.errors.length,k.layouts.length),k});function d(l){const w=l<0;return w&&(l=~l),[w,t[l]]}function R(l){return l===void 0?l:[u.has(l),t[l]]}}let ee=class{constructor(o,f){this.status=o,typeof f=="string"?this.body={message:f}:f?this.body=f:this.body={message:`Error: ${o}`}}toString(){return JSON.stringify(this.body)}},He=class{constructor(o,f){this.status=o,this.location=f}};async function pt(t){var o;for(const f in t)if(typeof((o=t[f])==null?void 0:o.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(t).map(async([c,u])=>[c,await u])));return t}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const ht=-1,mt=-2,gt=-3,yt=-4,wt=-5,_t=-6;function bt(t,o){if(typeof t=="number")return u(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const f=t,c=Array(f.length);function u(d,R=!1){if(d===ht)return;if(d===gt)return NaN;if(d===yt)return 1/0;if(d===wt)return-1/0;if(d===_t)return-0;if(R)throw new Error("Invalid input");if(d in c)return c[d];const l=f[d];if(!l||typeof l!="object")c[d]=l;else if(Array.isArray(l))if(typeof l[0]=="string"){const w=l[0],y=o==null?void 0:o[w];if(y)return c[d]=y(u(l[1]));switch(w){case"Date":c[d]=new Date(l[1]);break;case"Set":const p=new Set;c[d]=p;for(let k=1;k<l.length;k+=1)p.add(u(l[k]));break;case"Map":const T=new Map;c[d]=T;for(let k=1;k<l.length;k+=2)T.set(u(l[k]),u(l[k+1]));break;case"RegExp":c[d]=new RegExp(l[1],l[2]);break;case"Object":c[d]=Object(l[1]);break;case"BigInt":c[d]=BigInt(l[1]);break;case"null":const U=Object.create(null);c[d]=U;for(let k=1;k<l.length;k+=2)U[l[k]]=u(l[k+1]);break;default:throw new Error(`Unknown type ${w}`)}}else{const w=new Array(l.length);c[d]=w;for(let y=0;y<l.length;y+=1){const p=l[y];p!==mt&&(w[y]=u(p))}}else{const w={};c[d]=w;for(const y in l){const p=l[y];w[y]=u(p)}}return c[d]}return u(0)}function vt(t){return t.filter(o=>o!=null)}const z=ze(Je)??{},Z=ze(Ke)??{};function ve(t){z[t]=Q()}function Et(t,o){var xe;const f=dt(t),c=t.nodes[0],u=t.nodes[1];c(),u();const d=document.documentElement,R=[],l=[];let w=null;const y={before_navigate:[],after_navigate:[]};let p={branch:[],error:null,url:null},T=!1,U=!1,k=!0,j=!1,P=!1,B=!1,H=!1,F,N=(xe=history.state)==null?void 0:xe[q];N||(N=Date.now(),history.replaceState({...history.state,[q]:N},"",location.href));const ue=z[N];ue&&(history.scrollRestoration="manual",scrollTo(ue.x,ue.y));let V,ne,ae;async function Se(){ae=ae||Promise.resolve(),await ae,ae=null;const e=new URL(location.href),n=W(e,!0);w=null;const r=ne={},a=n&&await he(n);if(r===ne&&a){if(a.type==="redirect")return re(new URL(a.location,e).href,{},[e.pathname],r);F.$set(a.props)}}function Re(e){l.some(n=>n==null?void 0:n.snapshot)&&(Z[e]=l.map(n=>{var r;return(r=n==null?void 0:n.snapshot)==null?void 0:r.capture()}))}function Le(e){var n;(n=Z[e])==null||n.forEach((r,a)=>{var s,i;(i=(s=l[a])==null?void 0:s.snapshot)==null||i.restore(r)})}function Ie(){ve(N),Me(Je,z),Re(N),Me(Ke,Z)}async function re(e,{noScroll:n=!1,replaceState:r=!1,keepFocus:a=!1,state:s={},invalidateAll:i=!1},h,m){return typeof e=="string"&&(e=new URL(e,Ce(document))),ce({url:e,scroll:n?Q():null,keepfocus:a,redirect_chain:h,details:{state:s,replaceState:r},nav_token:m,accepted:()=>{i&&(H=!0)},blocked:()=>{},type:"goto"})}async function Ae(e){return w={id:e.id,promise:he(e).then(n=>(n.type==="loaded"&&n.state.error&&(w=null),n))},w.promise}async function oe(...e){const r=f.filter(a=>e.some(s=>a.exec(s))).map(a=>Promise.all([...a.layouts,a.leaf].map(s=>s==null?void 0:s[1]())));await Promise.all(r)}function Oe(e){var a;p=e.state;const n=document.querySelector("style[data-sveltekit]");n&&n.remove(),V=e.props.page,F=new t.root({target:o,props:{...e.props,stores:M,components:l},hydrate:!0}),Le(N);const r={from:null,to:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter"};y.after_navigate.forEach(s=>s(r)),U=!0}async function Y({url:e,params:n,branch:r,status:a,error:s,route:i,form:h}){let m="never";for(const b of r)(b==null?void 0:b.slash)!==void 0&&(m=b.slash);e.pathname=We(e.pathname,m),e.search=e.search;const v={type:"loaded",state:{url:e,params:n,branch:r,error:s,route:i},props:{constructors:vt(r).map(b=>b.node.component)}};h!==void 0&&(v.props.form=h);let g={},S=!V,A=0;for(let b=0;b<Math.max(r.length,p.branch.length);b+=1){const _=r[b],x=p.branch[b];(_==null?void 0:_.data)!==(x==null?void 0:x.data)&&(S=!0),_&&(g={...g,..._.data},S&&(v.props[`data_${A}`]=g),A+=1)}return(!p.url||e.href!==p.url.href||p.error!==s||h!==void 0&&h!==V.form||S)&&(v.props.page={error:s,params:n,route:{id:(i==null?void 0:i.id)??null},status:a,url:new URL(e),form:h??null,data:S?g:V.data}),v}async function de({loader:e,parent:n,url:r,params:a,route:s,server_data_node:i}){var g,S,A;let h=null;const m={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1},v=await e();if((g=v.universal)!=null&&g.load){let O=function(..._){for(const x of _){const{href:D}=new URL(x,r);m.dependencies.add(D)}};const b={route:{get id(){return m.route=!0,s.id}},params:new Proxy(a,{get:(_,x)=>(m.params.add(x),_[x])}),data:(i==null?void 0:i.data)??null,url:et(r,()=>{m.url=!0}),async fetch(_,x){let D;_ instanceof Request?(D=_.url,x={body:_.method==="GET"||_.method==="HEAD"?void 0:await _.blob(),cache:_.cache,credentials:_.credentials,headers:_.headers,integrity:_.integrity,keepalive:_.keepalive,method:_.method,mode:_.mode,redirect:_.redirect,referrer:_.referrer,referrerPolicy:_.referrerPolicy,signal:_.signal,...x}):D=_;const C=new URL(D,r);return O(C.href),C.origin===r.origin&&(D=C.href.slice(r.origin.length)),U?it(D,C.href,x):ot(D,x)},setHeaders:()=>{},depends:O,parent(){return m.parent=!0,n()}};h=await v.universal.load.call(null,b)??null,h=h?await pt(h):null}return{node:v,loader:e,server:i,universal:(S=v.universal)!=null&&S.load?{type:"data",data:h,uses:m}:null,data:h??(i==null?void 0:i.data)??null,slash:((A=v.universal)==null?void 0:A.trailingSlash)??(i==null?void 0:i.slash)}}function Pe(e,n,r,a,s){if(H)return!0;if(!a)return!1;if(a.parent&&e||a.route&&n||a.url&&r)return!0;for(const i of a.params)if(s[i]!==p.params[i])return!0;for(const i of a.dependencies)if(R.some(h=>h(new URL(i))))return!0;return!1}function pe(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}async function he({id:e,invalidating:n,url:r,params:a,route:s}){if((w==null?void 0:w.id)===e)return w.promise;const{errors:i,layouts:h,leaf:m}=s,v=[...h,m];i.forEach(E=>E==null?void 0:E().catch(()=>{})),v.forEach(E=>E==null?void 0:E[1]().catch(()=>{}));let g=null;const S=p.url?e!==p.url.pathname+p.url.search:!1,A=p.route?s.id!==p.route.id:!1;let O=!1;const b=v.map((E,I)=>{var J;const L=p.branch[I],$=!!(E!=null&&E[0])&&((L==null?void 0:L.loader)!==E[1]||Pe(O,A,S,(J=L.server)==null?void 0:J.uses,a));return $&&(O=!0),$});if(b.some(Boolean)){try{g=await Ve(r,b)}catch(E){return ie({status:E instanceof ee?E.status:500,error:await X(E,{url:r,params:a,route:{id:s.id}}),url:r,route:s})}if(g.type==="redirect")return g}const _=g==null?void 0:g.nodes;let x=!1;const D=v.map(async(E,I)=>{var me;if(!E)return;const L=p.branch[I],$=_==null?void 0:_[I];if((!$||$.type==="skip")&&E[1]===(L==null?void 0:L.loader)&&!Pe(x,A,S,(me=L.universal)==null?void 0:me.uses,a))return L;if(x=!0,($==null?void 0:$.type)==="error")throw $;return de({loader:E[1],url:r,params:a,route:s,parent:async()=>{var Te;const $e={};for(let ge=0;ge<I;ge+=1)Object.assign($e,(Te=await D[ge])==null?void 0:Te.data);return $e},server_data_node:pe($===void 0&&E[0]?{type:"skip"}:$??null,E[0]?L==null?void 0:L.server:void 0)})});for(const E of D)E.catch(()=>{});const C=[];for(let E=0;E<v.length;E+=1)if(v[E])try{C.push(await D[E])}catch(I){if(I instanceof He)return{type:"redirect",location:I.location};let L=500,$;if(_!=null&&_.includes(I))L=I.status??L,$=I.error;else if(I instanceof ee)L=I.status,$=I.body;else{if(await M.updated.check())return await G(r);$=await X(I,{params:a,url:r,route:{id:s.id}})}const J=await Ue(E,C,i);return J?await Y({url:r,params:a,branch:C.slice(0,J.idx).concat(J.node),status:L,error:$,route:s}):await Ne(r,{id:s.id},$,L)}else C.push(void 0);return await Y({url:r,params:a,branch:C,status:200,error:null,route:s,form:n?void 0:null})}async function Ue(e,n,r){for(;e--;)if(r[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await r[e](),loader:r[e],data:{},server:null,universal:null}}}catch{continue}}}async function ie({status:e,error:n,url:r,route:a}){const s={};let i=null;if(t.server_loads[0]===0)try{const g=await Ve(r,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;i=g.nodes[0]??null}catch{(r.origin!==location.origin||r.pathname!==location.pathname||T)&&await G(r)}const m=await de({loader:c,url:r,params:s,route:a,parent:()=>Promise.resolve({}),server_data_node:pe(i)}),v={node:await u(),loader:u,universal:null,server:null,data:null};return await Y({url:r,params:s,branch:[m,v],status:e,error:n,route:null})}function W(e,n){if(_e(e,K))return;const r=se(e);for(const a of f){const s=a.exec(r);if(s)return{id:e.pathname+e.search,invalidating:n,route:a,params:Ze(s),url:e}}}function se(e){return Xe(e.pathname.slice(K.length)||"/")}function je({url:e,type:n,intent:r,delta:a}){var m,v;let s=!1;const i={from:{params:p.params,route:{id:((m=p.route)==null?void 0:m.id)??null},url:p.url},to:{params:(r==null?void 0:r.params)??null,route:{id:((v=r==null?void 0:r.route)==null?void 0:v.id)??null},url:e},willUnload:!r,type:n};a!==void 0&&(i.delta=a);const h={...i,cancel:()=>{s=!0}};return P||y.before_navigate.forEach(g=>g(h)),s?null:i}async function ce({url:e,scroll:n,keepfocus:r,redirect_chain:a,details:s,type:i,delta:h,nav_token:m={},accepted:v,blocked:g}){var D,C,E;const S=W(e,!1),A=je({url:e,type:i,delta:h,intent:S});if(!A){g();return}const O=N;v(),P=!0,U&&M.navigating.set(A),ne=m;let b=S&&await he(S);if(!b){if(_e(e,K))return await G(e);b=await Ne(e,{id:null},await X(new Error(`Not found: ${e.pathname}`),{url:e,params:{},route:{id:null}}),404)}if(e=(S==null?void 0:S.url)||e,ne!==m)return!1;if(b.type==="redirect")if(a.length>10||a.includes(e.pathname))b=await ie({status:500,error:await X(new Error("Redirect loop"),{url:e,params:{},route:{id:null}}),url:e,route:{id:null}});else return re(new URL(b.location,e).href,{},[...a,e.pathname],m),!1;else((D=b.props.page)==null?void 0:D.status)>=400&&await M.updated.check()&&await G(e);if(R.length=0,H=!1,j=!0,ve(O),Re(O),(C=b.props.page)!=null&&C.url&&b.props.page.url.pathname!==e.pathname&&(e.pathname=(E=b.props.page)==null?void 0:E.url.pathname),s){const I=s.replaceState?0:1;if(s.state[q]=N+=I,history[s.replaceState?"replaceState":"pushState"](s.state,"",e),!s.replaceState){let L=N+1;for(;Z[L]||z[L];)delete Z[L],delete z[L],L+=1}}w=null,U?(p=b.state,b.props.page&&(b.props.page.url=e),F.$set(b.props)):Oe(b);const{activeElement:_}=document;if(await ye(),k){const I=e.hash&&document.getElementById(decodeURIComponent(e.hash.slice(1)));n?scrollTo(n.x,n.y):I?I.scrollIntoView():scrollTo(0,0)}const x=document.activeElement!==_&&document.activeElement!==document.body;!r&&!x&&await Ee(),k=!0,b.props.page&&(V=b.props.page),P=!1,y.after_navigate.forEach(I=>I(A)),M.navigating.set(null),j=!1}async function Ne(e,n,r,a){return e.origin===location.origin&&e.pathname===location.pathname&&!T?await ie({status:a,error:r,url:e,route:n}):await G(e)}function G(e){return location.href=e.href,new Promise(()=>{})}function Ge(){let e;d.addEventListener("mousemove",i=>{const h=i.target;clearTimeout(e),e=setTimeout(()=>{a(h,2)},20)});function n(i){a(i.composedPath()[0],1)}d.addEventListener("mousedown",n),d.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(i=>{for(const h of i)h.isIntersecting&&(oe(se(new URL(h.target.href))),r.unobserve(h.target))},{threshold:0});function a(i,h){const m=qe(i,d);if(!m)return;const{url:v,external:g,download:S}=we(m,K);if(g||S)return;const A=le(m);if(!A.reload)if(h<=A.preload_data){const O=W(v,!1);O&&Ae(O)}else h<=A.preload_code&&oe(se(v))}function s(){r.disconnect();for(const i of d.querySelectorAll("a")){const{url:h,external:m,download:v}=we(i,K);if(m||v)continue;const g=le(i);g.reload||(g.preload_code===Fe.viewport&&r.observe(i),g.preload_code===Fe.eager&&oe(se(h)))}}y.after_navigate.push(s),s()}function X(e,n){return e instanceof ee?e.body:t.hooks.handleError({error:e,event:n})??{message:n.route.id!=null?"Internal Error":"Not Found"}}return{after_navigate:e=>{De(()=>(y.after_navigate.push(e),()=>{const n=y.after_navigate.indexOf(e);y.after_navigate.splice(n,1)}))},before_navigate:e=>{De(()=>(y.before_navigate.push(e),()=>{const n=y.before_navigate.indexOf(e);y.before_navigate.splice(n,1)}))},disable_scroll_handling:()=>{(j||!U)&&(k=!1)},goto:(e,n={})=>re(e,n,[]),invalidate:e=>{if(typeof e=="function")R.push(e);else{const{href:n}=new URL(e,location.href);R.push(r=>r.href===n)}return Se()},invalidateAll:()=>(H=!0,Se()),preload_data:async e=>{const n=new URL(e,Ce(document)),r=W(n,!1);if(!r)throw new Error(`Attempted to preload a URL that does not belong to this app: ${n}`);await Ae(r)},preload_code:oe,apply_action:async e=>{if(e.type==="error"){const n=new URL(location.href),{branch:r,route:a}=p;if(!a)return;const s=await Ue(p.branch.length,r,a.errors);if(s){const i=await Y({url:n,params:p.params,branch:r.slice(0,s.idx).concat(s.node),status:e.status??500,error:e.error,route:a});p=i.state,F.$set(i.props),ye().then(Ee)}}else e.type==="redirect"?re(e.location,{invalidateAll:!0},[]):(F.$set({form:null,page:{...V,form:e.data,status:e.status}}),await ye(),F.$set({form:e.data}),e.type==="success"&&Ee())},_start_router:()=>{var e;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{var a;let r=!1;if(Ie(),!P){const s={from:{params:p.params,route:{id:((a=p.route)==null?void 0:a.id)??null},url:p.url},to:null,willUnload:!0,type:"leave",cancel:()=>r=!0};y.before_navigate.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ie()}),(e=navigator.connection)!=null&&e.saveData||Ge(),d.addEventListener("click",n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=qe(n.composedPath()[0],d);if(!r)return;const{url:a,external:s,target:i,download:h}=we(r,K);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const m=le(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||h)return;if(s||m.reload){je({url:a,type:"link"})?P=!0:n.preventDefault();return}const[g,S]=a.href.split("#");if(S!==void 0&&g===location.href.split("#")[0]){if(B=!0,ve(N),p.url=a,M.page.set({...V,url:a}),M.page.notify(),!m.replace_state)return;B=!1,n.preventDefault()}ce({url:a,scroll:m.noscroll?Q():null,keepfocus:m.keep_focus??!1,redirect_chain:[],details:{state:{},replaceState:m.replace_state??a.href===location.href},accepted:()=>n.preventDefault(),blocked:()=>n.preventDefault(),type:"link"})}),d.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formMethod)||r.method)!=="get")return;const i=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(_e(i,K))return;const h=n.target,{keep_focus:m,noscroll:v,reload:g,replace_state:S}=le(h);if(g)return;n.preventDefault(),n.stopPropagation();const A=new FormData(h),O=a==null?void 0:a.getAttribute("name");O&&A.append(O,(a==null?void 0:a.getAttribute("value"))??""),i.search=new URLSearchParams(A).toString(),ce({url:i,scroll:v?Q():null,keepfocus:m??!1,redirect_chain:[],details:{state:{},replaceState:S??i.href===location.href},nav_token:{},accepted:()=>{},blocked:()=>{},type:"form"})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[q]){if(n.state[q]===N)return;const a=z[n.state[q]];if(p.url.href.split("#")[0]===location.href.split("#")[0]){z[N]=Q(),N=n.state[q],scrollTo(a.x,a.y);return}const s=n.state[q]-N;let i=!1;await ce({url:new URL(location.href),scroll:a,keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{N=n.state[q]},blocked:()=>{history.go(-s),i=!0},type:"popstate",delta:s}),i||Le(N)}}),addEventListener("hashchange",()=>{B&&(B=!1,history.replaceState({...history.state,[q]:++N},"",location.href))});for(const n of document.querySelectorAll("link"))n.rel==="icon"&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&M.navigating.set(null)})},_hydrate:async({status:e=200,error:n,node_ids:r,params:a,route:s,data:i,form:h})=>{T=!0;const m=new URL(location.href);({params:a={},route:s={id:null}}=W(m,!1)||{});let v;try{const g=r.map(async(S,A)=>{const O=i[A];return O!=null&&O.uses&&(O.uses=Be(O.uses)),de({loader:t.nodes[S],url:m,params:a,route:s,parent:async()=>{const b={};for(let _=0;_<A;_+=1)Object.assign(b,(await g[_]).data);return b},server_data_node:pe(O)})});v=await Y({url:m,params:a,branch:await Promise.all(g),status:e,error:n,form:h,route:f.find(({id:S})=>S===s.id)??null})}catch(g){if(g instanceof He){await G(new URL(g.location,location.href));return}v=await ie({status:g instanceof ee?g.status:500,error:await X(g,{url:m,params:a,route:s}),url:m,route:s})}Oe(v)}}}async function Ve(t,o){const f=new URL(t);f.pathname=at(t.pathname),f.searchParams.append("x-sveltekit-invalidated",o.map(u=>u?"1":"").join("_"));const c=await fe(f.href);if(!c.ok)throw new ee(c.status,await c.json());return new Promise(async u=>{var p;const d=new Map,R=c.body.getReader(),l=new TextDecoder;function w(T){return bt(T,{Promise:U=>new Promise((k,j)=>{d.set(U,{fulfil:k,reject:j})})})}let y="";for(;;){const{done:T,value:U}=await R.read();if(T&&!y)break;for(y+=!U&&y?`
`:l.decode(U);;){const k=y.indexOf(`
`);if(k===-1)break;const j=JSON.parse(y.slice(0,k));if(y=y.slice(k+1),j.type==="redirect")return u(j);if(j.type==="data")(p=j.nodes)==null||p.forEach(P=>{(P==null?void 0:P.type)==="data"&&(P.uses=Be(P.uses),P.data=w(P.data))}),u(j);else if(j.type==="chunk"){const{id:P,data:B,error:H}=j,F=d.get(P);d.delete(P),H?F.reject(w(H)):F.fulfil(w(B))}}}})}function Be(t){return{dependencies:new Set((t==null?void 0:t.dependencies)??[]),params:new Set((t==null?void 0:t.params)??[]),parent:!!(t!=null&&t.parent),route:!!(t!=null&&t.route),url:!!(t!=null&&t.url)}}function Ee(){const t=document.querySelector("[autofocus]");if(t)t.focus();else{const o=document.body,f=o.getAttribute("tabindex");return o.tabIndex=-1,o.focus({preventScroll:!0}),f!==null?o.setAttribute("tabindex",f):o.removeAttribute("tabindex"),new Promise(c=>{setTimeout(()=>{var u;c((u=getSelection())==null?void 0:u.removeAllRanges())})})}}async function At(t,o,f){const c=Et(t,o);Ye({client:c}),f?await c._hydrate(f):c.goto(location.href,{replaceState:!0}),c._start_router()}export{At as start};
