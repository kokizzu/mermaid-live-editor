import{S as s,i as n,s as i,v as r}from"../chunks/index-a51dd2ab.js";import{c as t}from"../chunks/singletons-d1fb5791.js";import{b as l}from"../chunks/paths-396f020f.js";t.disable_scroll_handling;const c=t.goto;t.invalidate;t.prefetch;t.prefetch_routes;t.before_navigate;t.after_navigate;function f(o){return r(async()=>{const e=window.location.hash.split("/");let a="edit";e.length>2&&(a=`${e[1]}#${e[2]}`),await c(`${l}/${a}`,{replaceState:!0})}),[]}class d extends s{constructor(e){super(),n(this,e,f,null,i,{})}}export{d as default};
