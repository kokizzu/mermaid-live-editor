import{p as X,d as B,s as Z,D as H,a as F,S as j,b as m,c as I}from"./styles-47a825a5.65e5c605.js";import{G as tt}from"./layout.4ba374b5.js";import{O as l,I as g,N as x,$ as et,P as st,S as G}from"./state.5fda79de.js";import{r as ot}from"./index-5219d011.5f00ed83.js";import"./createText-1f5f8f92.e9b411de.js";const h="rect",C="rectWithTitle",nt="start",ct="end",it="divider",rt="roundedWithTitle",lt="note",at="noteGroup",_="statediagram",dt="state",Et=`${_}-${dt}`,U="transition",St="note",Tt="note-edge",pt=`${U} ${Tt}`,_t=`${_}-${St}`,ut="cluster",Dt=`${_}-${ut}`,ft="cluster-alt",bt=`${_}-${ft}`,V="parent",Y="note",At="state",N="----",ht=`${N}${Y}`,M=`${N}${V}`,W="fill:none",z="fill: #333",q="c",K="text",J="normal";let y={},E=0;const yt=function(t){const n=Object.keys(t);for(const e of n)t[e]},gt=function(t,n){l.trace("Extracting classes"),n.db.clear();try{return n.parser.parse(t),n.db.extract(n.db.getRootDocV2()),n.db.getClasses()}catch(e){return e}};function $t(t){return t==null?"":t.classes?t.classes.join(" "):""}function R(t="",n=0,e="",c=N){const i=e!==null&&e.length>0?`${c}${e}`:"";return`${At}-${t}${i}-${n}`}const A=(t,n,e,c,i,r)=>{const s=e.id,u=$t(c[s]);if(s!=="root"){let T=h;e.start===!0&&(T=nt),e.start===!1&&(T=ct),e.type!==H&&(T=e.type),y[s]||(y[s]={id:s,shape:T,description:G.sanitizeText(s,g()),classes:`${u} ${Et}`});const o=y[s];e.description&&(Array.isArray(o.description)?(o.shape=C,o.description.push(e.description)):o.description.length>0?(o.shape=C,o.description===s?o.description=[e.description]:o.description=[o.description,e.description]):(o.shape=h,o.description=e.description),o.description=G.sanitizeTextOrArray(o.description,g())),o.description.length===1&&o.shape===C&&(o.shape=h),!o.type&&e.doc&&(l.info("Setting cluster for ",s,w(e)),o.type="group",o.dir=w(e),o.shape=e.type===F?it:rt,o.classes=o.classes+" "+Dt+" "+(r?bt:""));const p={labelStyle:"",shape:o.shape,labelText:o.description,classes:o.classes,style:"",id:s,dir:o.dir,domId:R(s,E),type:o.type,padding:15};if(p.centerLabel=!0,e.note){const a={labelStyle:"",shape:lt,labelText:e.note.text,classes:_t,style:"",id:s+ht+"-"+E,domId:R(s,E,Y),type:o.type,padding:15},d={labelStyle:"",shape:at,labelText:e.note.text,classes:o.classes,style:"",id:s+M,domId:R(s,E,V),type:"group",padding:0};E++;const D=s+M;t.setNode(D,d),t.setNode(a.id,a),t.setNode(s,p),t.setParent(s,D),t.setParent(a.id,D);let S=s,f=a.id;e.note.position==="left of"&&(S=a.id,f=s),t.setEdge(S,f,{arrowhead:"none",arrowType:"",style:W,labelStyle:"",classes:pt,arrowheadStyle:z,labelpos:q,labelType:K,thickness:J})}else t.setNode(s,p)}n&&n.id!=="root"&&(l.trace("Setting node ",s," to be child of its parent ",n.id),t.setParent(s,n.id)),e.doc&&(l.trace("Adding nodes children "),xt(t,e,e.doc,c,i,!r))},xt=(t,n,e,c,i,r)=>{l.trace("items",e),e.forEach(s=>{switch(s.stmt){case m:A(t,n,s,c,i,r);break;case H:A(t,n,s,c,i,r);break;case j:{A(t,n,s.state1,c,i,r),A(t,n,s.state2,c,i,r);const u={id:"edge"+E,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:W,labelStyle:"",label:G.sanitizeText(s.description,g()),arrowheadStyle:z,labelpos:q,labelType:K,thickness:J,classes:U};t.setEdge(s.state1.id,s.state2.id,u,E),E++}break}})},w=(t,n=I)=>{let e=n;if(t.doc)for(let c=0;c<t.doc.length;c++){const i=t.doc[c];i.stmt==="dir"&&(e=i.value)}return e},Ct=function(t,n,e,c){l.info("Drawing state diagram (v2)",n),y={},c.db.getDirection();const{securityLevel:i,state:r}=g(),s=r.nodeSpacing||50,u=r.rankSpacing||50;l.info(c.db.getRootDocV2()),c.db.extract(c.db.getRootDocV2()),l.info(c.db.getRootDocV2());const T=c.db.getStates(),o=new tt({multigraph:!0,compound:!0}).setGraph({rankdir:w(c.db.getRootDocV2()),nodesep:s,ranksep:u,marginx:8,marginy:8}).setDefaultEdgeLabel(function(){return{}});A(o,void 0,c.db.getRootDocV2(),T,c.db,!0);let p;i==="sandbox"&&(p=x("#i"+n));const a=i==="sandbox"?x(p.nodes()[0].contentDocument.body):x("body"),d=a.select(`[id="${n}"]`),D=a.select("#"+n+" g");ot(D,o,["barb"],_,n);const S=8;et.insertTitle(d,"statediagramTitleText",r.titleTopMargin,c.db.getDiagramTitle());const f=d.node().getBBox(),L=f.width+S*2,P=f.height+S*2;d.attr("class",_);const O=d.node().getBBox();st(d,P,L,r.useMaxWidth);const k=`${O.x-S} ${O.y-S} ${L} ${P}`;l.debug(`viewBox ${k}`),d.attr("viewBox",k);const Q=document.querySelectorAll('[id="'+n+'"] .edgeLabel .label');for(const $ of Q){const v=$.getBBox(),b=document.createElementNS("http://www.w3.org/2000/svg",h);b.setAttribute("rx",0),b.setAttribute("ry",0),b.setAttribute("width",v.width),b.setAttribute("height",v.height),$.insertBefore(b,$.firstChild)}},Rt={setConf:yt,getClasses:gt,draw:Ct},Ot={parser:X,db:B,renderer:Rt,styles:Z,init:t=>{t.state||(t.state={}),t.state.arrowMarkerAbsolute=t.arrowMarkerAbsolute,B.clear()}};export{Ot as diagram};
