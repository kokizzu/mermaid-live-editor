import{S as I,i as M,s as j,C as T,k as d,a as w,e as b,l as m,m as _,h as f,c as D,n as h,b as v,D as V,E as $,F as q,g as N,d as z,G as y,o as A,q as C,r as H,H as u,u as L}from"../chunks/index.b6d43b64.js";import{b as k}from"../chunks/paths.9f8dfddb.js";import{i as O,t as W,l as B}from"../chunks/state.9b50e036.js";import{s as F,t as S}from"../chunks/theme.aa733745.js";const G=!0,P=!0,R=!1,x="ignore",Z=Object.freeze(Object.defineProperty({__proto__:null,csr:P,prerender:G,ssr:R,trailingSlash:x},Symbol.toStringTag,{value:"Module"}));function E(n){let o,i,r,l,c,s=n[0].message+"",t;return{c(){o=d("div"),i=d("div"),r=d("div"),l=w(),c=d("div"),t=C(s),this.h()},l(e){o=m(e,"DIV",{class:!0});var a=_(o);i=m(a,"DIV",{class:!0});var p=_(i);r=m(p,"DIV",{class:!0}),_(r).forEach(f),l=D(p),c=m(p,"DIV",{});var g=_(c);t=H(g,s),g.forEach(f),p.forEach(f),a.forEach(f),this.h()},h(){h(r,"class","loader mx-auto svelte-6pksaq"),h(i,"class","text-indigo-100 text-4xl font-bold my-auto"),h(o,"class","w-screen h-screen z-50 absolute left-0 top-0 bg-gray-600 opacity-50 flex align-middle justify-center")},m(e,a){v(e,o,a),u(o,i),u(i,r),u(i,l),u(i,c),u(c,t)},p(e,a){a&1&&s!==(s=e[0].message+"")&&L(t,s)},d(e){e&&f(o)}}}function J(n){let o,i,r,l;const c=n[2].default,s=T(c,n,n[1],null);let t=n[0].loading&&E(n);return{c(){o=d("main"),s&&s.c(),i=w(),t&&t.c(),r=b(),this.h()},l(e){o=m(e,"MAIN",{class:!0});var a=_(o);s&&s.l(a),a.forEach(f),i=D(e),t&&t.l(e),r=b(),this.h()},h(){h(o,"class","h-screen text-primary-content")},m(e,a){v(e,o,a),s&&s.m(o,null),v(e,i,a),t&&t.m(e,a),v(e,r,a),l=!0},p(e,[a]){s&&s.p&&(!l||a&2)&&V(s,c,e,e[1],l?q(c,e[1],a,null):$(e[1]),null),e[0].loading?t?t.p(e,a):(t=E(e),t.c(),t.m(r.parentNode,r)):t&&(t.d(1),t=null)},i(e){l||(N(s,e),l=!0)},o(e){z(s,e),l=!1},d(e){e&&f(o),s&&s.d(e),e&&f(i),t&&t.d(e),e&&f(r)}}}function K(n,o,i){let r,l;y(n,S,t=>i(3,r=t)),y(n,B,t=>i(0,l=t));let{$$slots:c={},$$scope:s}=o;return A(()=>{window.addEventListener("hashchange",()=>{O()}),"serviceWorker"in navigator&&navigator.serviceWorker.register(`${k}/service-worker.js`,{scope:`${k}/`}).then(function(e){console.log("Registration successful, scope is:",e.scope)}).catch(function(e){console.log("Service worker registration failed, error:",e)});const t=window.matchMedia("(prefers-color-scheme: dark)").matches;r.theme===void 0&&F(t?"dark":"light"),S.subscribe(({theme:e,isDark:a})=>{e&&(document.getElementsByTagName("html")[0].setAttribute("data-theme",e),W(a))})}),n.$$set=t=>{"$$scope"in t&&i(1,s=t.$$scope)},[l,s,c]}class ee extends I{constructor(o){super(),M(this,o,K,J,j,{})}}export{ee as component,Z as universal};
