import{w as t}from"./index.BIOmDrk3.js";import{p as e,l as o,a as r}from"./state.DA0iOURf.js";const l=e(t({isDark:!1}),o(),"themeStore"),n=new Set(["dark","synthwave","halloween","aqua","forest","luxury","black","dracula"]),p=s=>{s.includes(" ")&&(s=s.split(" ")[1].trim());const a=n.has(s);console.log("Setting theme",s),l.set({theme:s,isDark:a}),r("themeChange",{theme:s,isDark:a})};export{p as s,l as t};
