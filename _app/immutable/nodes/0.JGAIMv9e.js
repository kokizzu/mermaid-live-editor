import{s as j,z as I,e as u,b as D,p as b,c as m,d as _,g as f,h as E,u as p,j as v,A as M,B as V,C as $,m as k,o as q,t as z,f as A,k as d,l as T}from"../chunks/scheduler.Cj2_EUWt.js";import{S as C,i as L,t as N,b as O}from"../chunks/index.fHxmWqpJ.js";import{b as S}from"../chunks/paths.DJ9r_auQ.js";import{ad as W,i as B,ae as H}from"../chunks/state.D3bQ1g5i.js";import{t as y,s as P}from"../chunks/theme.Cu7BJlvI.js";const R=!0,x=!0,F=!1,G="ignore",ee=Object.freeze(Object.defineProperty({__proto__:null,csr:x,prerender:R,ssr:F,trailingSlash:G},Symbol.toStringTag,{value:"Module"}));function w(n){let o,i,r,l,c,s=n[0].message+"",t;return{c(){o=u("div"),i=u("div"),r=u("div"),l=D(),c=u("div"),t=z(s),this.h()},l(e){o=m(e,"DIV",{class:!0});var a=_(o);i=m(a,"DIV",{class:!0});var h=_(i);r=m(h,"DIV",{class:!0}),_(r).forEach(f),l=E(h),c=m(h,"DIV",{});var g=_(c);t=A(g,s),g.forEach(f),h.forEach(f),a.forEach(f),this.h()},h(){p(r,"class","loader mx-auto svelte-6pksaq"),p(i,"class","my-auto text-4xl font-bold text-indigo-100"),p(o,"class","absolute left-0 top-0 z-50 flex h-screen w-screen justify-center bg-gray-600 align-middle opacity-50")},m(e,a){v(e,o,a),d(o,i),d(i,r),d(i,l),d(i,c),d(c,t)},p(e,a){a&1&&s!==(s=e[0].message+"")&&T(t,s)},d(e){e&&f(o)}}}function J(n){let o,i,r,l;const c=n[2].default,s=I(c,n,n[1],null);let t=n[0].loading&&w(n);return{c(){o=u("main"),s&&s.c(),i=D(),t&&t.c(),r=b(),this.h()},l(e){o=m(e,"MAIN",{class:!0});var a=_(o);s&&s.l(a),a.forEach(f),i=E(e),t&&t.l(e),r=b(),this.h()},h(){p(o,"class","h-screen text-primary-content")},m(e,a){v(e,o,a),s&&s.m(o,null),v(e,i,a),t&&t.m(e,a),v(e,r,a),l=!0},p(e,[a]){s&&s.p&&(!l||a&2)&&M(s,c,e,e[1],l?$(c,e[1],a,null):V(e[1]),null),e[0].loading?t?t.p(e,a):(t=w(e),t.c(),t.m(r.parentNode,r)):t&&(t.d(1),t=null)},i(e){l||(N(s,e),l=!0)},o(e){O(s,e),l=!1},d(e){e&&(f(o),f(i),f(r)),s&&s.d(e),t&&t.d(e)}}}function K(n,o,i){let r,l;k(n,y,t=>i(3,r=t)),k(n,W,t=>i(0,l=t));let{$$slots:c={},$$scope:s}=o;return q(()=>{window.addEventListener("hashchange",()=>{B()}),"serviceWorker"in navigator&&navigator.serviceWorker.register(`${S}/service-worker.js`,{scope:`${S}/`}).then(function(e){console.log("Registration successful, scope is:",e.scope)}).catch(function(e){console.log("Service worker registration failed, error:",e)});const t=window.matchMedia("(prefers-color-scheme: dark)").matches;r.theme===void 0&&P(t?"dark":"light"),y.subscribe(({theme:e,isDark:a})=>{e&&(document.querySelectorAll("html")[0].dataset.theme=e,H(a))})}),n.$$set=t=>{"$$scope"in t&&i(1,s=t.$$scope)},[l,s,c]}class te extends C{constructor(o){super(),L(this,o,K,J,j,{})}}export{te as component,ee as universal};
