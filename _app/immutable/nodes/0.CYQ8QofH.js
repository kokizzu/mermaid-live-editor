import"../chunks/disclose-version.Bg9kRutz.js";import{p as $,f as w,a as q,c as a,n as j,b as o,s as m,t as M}from"../chunks/index.QApgq_fj.js";import{s as T}from"../chunks/render.CIUZrU1-.js";import{i as z}from"../chunks/preload-helper.BsyX2TkG.js";import{t as u,a as p,s as D,b as v}from"../chunks/store.DHY75RMn.js";import{s as O,a as W,t as f}from"../chunks/theme.DzN2UY_a.js";import{b as g}from"../chunks/paths.BRylwNXE.js";import{i as A,aJ as E,aK as H}from"../chunks/state.blCqXciz.js";import{o as J}from"../chunks/index-client.BER_Qkks.js";const K=!0,L=!0,P=!1,R="ignore",Z=Object.freeze(Object.defineProperty({__proto__:null,csr:L,prerender:K,ssr:P,trailingSlash:R},Symbol.toStringTag,{value:"Module"}));var B=u('<div class="absolute left-0 top-0 z-50 flex h-screen w-screen justify-center bg-gray-600 align-middle opacity-50 svelte-6pksaq"><div class="my-auto text-4xl font-bold text-indigo-100 svelte-6pksaq"><div class="loader mx-auto svelte-6pksaq"></div> <div class="svelte-6pksaq"> </div></div></div>'),C=u('<main class="h-screen text-primary-content svelte-6pksaq"><!></main> <!>',1);function ee(h,i){$(i,!0);const[n,_]=D(),b=()=>v(f,"$themeStore",n),c=()=>v(H,"$loadingStateStore",n);J(()=>{window.addEventListener("hashchange",()=>{A()}),"serviceWorker"in navigator&&navigator.serviceWorker.register(`${g}/service-worker.js`,{scope:`${g}/`}).then(function(e){console.log("Registration successful, scope is:",e.scope)}).catch(function(e){console.log("Service worker registration failed, error:",e)});const t=window.matchMedia("(prefers-color-scheme: dark)").matches;b().theme===void 0&&W(t?"dark":"light"),f.subscribe(({theme:e,isDark:s})=>{e&&(document.querySelectorAll("html")[0].dataset.theme=e,E(s))})});var l=C(),r=w(l),k=a(r);O(k,()=>i.children??j),o(r);var S=m(r,2);{var y=t=>{var e=B(),s=a(e),d=m(a(s),2),x=a(d,!0);o(d),o(s),o(e),M(()=>T(x,c().message)),p(t,e)};z(S,t=>{c().loading&&t(y)})}p(h,l),q(),_()}export{ee as component,Z as universal};
