import{S as n,i as s,s as a,o as i}from"../chunks/index.2bb936cc.js";import{h as r}from"../chunks/singletons.730fa0a0.js";import{b as c}from"../chunks/paths.5981a1d5.js";const l=r("goto");function m(e){return i(async()=>{const t=window.location.hash.split("/");let o="edit";t.length>2&&(o=`${t[1]}#${t[2]}`),await l(`${c}/${o}`,{replaceState:!0})}),[]}class f extends n{constructor(t){super(),s(this,t,m,null,a,{})}}export{f as component};
