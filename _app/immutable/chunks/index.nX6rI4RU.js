import{n as x,D as H,E as J,g as F,r as v,i as N,F as I,G as K,H as Q,I as z,d as U,J as V,K as k,L as q,M as T,N as A,O as W,P as X,Q as Y,R as Z,S as tt}from"./scheduler.72nQceUx.js";const L=typeof window<"u";let et=L?()=>window.performance.now():()=>Date.now(),j=L?t=>requestAnimationFrame(t):x;const y=new Set;function B(t){y.forEach(e=>{e.c(t)||(y.delete(e),e.f())}),y.size!==0&&j(B)}function nt(t){let e;return y.size===0&&j(B),{promise:new Promise(n=>{y.add(e={c:t,f:n})}),abort(){y.delete(e)}}}const S=new Map;let O=0;function st(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function it(t,e){const n={stylesheet:J(e),rules:{}};return S.set(t,n),n}function D(t,e,n,s,c,f,l,i=0){const u=16.666/s;let r=`{
`;for(let d=0;d<=1;d+=u){const p=e+(n-e)*f(d);r+=d*100+`%{${l(p,1-p)}}
`}const $=r+`100% {${l(n,1-n)}}
}`,o=`__svelte_${st($)}_${i}`,m=H(t),{stylesheet:g,rules:a}=S.get(m)||it(m,t);a[o]||(a[o]=!0,g.insertRule(`@keyframes ${o} ${$}`,g.cssRules.length));const _=t.style.animation||"";return t.style.animation=`${_?`${_}, `:""}${o} ${s}ms linear ${c}ms 1 both`,O+=1,o}function rt(t,e){const n=(t.style.animation||"").split(", "),s=n.filter(e?f=>f.indexOf(e)<0:f=>f.indexOf("__svelte")===-1),c=n.length-s.length;c&&(t.style.animation=s.join(", "),O-=c,O||at())}function at(){j(()=>{O||(S.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&F(e)}),S.clear())})}let w;function ot(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function C(t,e,n){t.dispatchEvent(K(`${e?"intro":"outro"}${n}`))}const E=new Set;let h;function ht(){h={r:0,c:[],p:h}}function mt(){h.r||v(h.c),h=h.p}function ft(t,e){t&&t.i&&(E.delete(t),t.i(e))}function gt(t,e,n,s){if(t&&t.o){if(E.has(t))return;E.add(t),h.c.push(()=>{E.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}const ut={duration:0};function pt(t,e,n,s){let f=e(t,n,{direction:"both"}),l=s?0:1,i=null,u=null,r=null,$;function o(){r&&rt(t,r)}function m(a,_){const d=a.b-l;return _*=Math.abs(d),{a:l,b:a.b,d,duration:_,start:a.start,end:a.start+_,group:a.group}}function g(a){const{delay:_=0,duration:d=300,easing:p=Q,tick:M=x,css:P}=f||ut,R={start:et()+_,b:a};a||(R.group=h,h.r+=1),"inert"in t&&(a?$!==void 0&&(t.inert=$):($=t.inert,t.inert=!0)),i||u?u=R:(P&&(o(),r=D(t,l,a,d,_,p,P)),a&&M(0,1),i=m(R,d),I(()=>C(t,a,"start")),nt(b=>{if(u&&b>u.start&&(i=m(u,d),u=null,C(t,i.b,"start"),P&&(o(),r=D(t,l,i.b,i.duration,0,p,f.css))),i){if(b>=i.end)M(l=i.b,1-l),C(t,i.b,"end"),u||(i.b?o():--i.group.r||v(i.group.c)),i=null;else if(b>=i.start){const G=b-i.start;l=i.a+i.d*p(G/i.duration),M(l,1-l)}}return!!(i||u)}))}return{run(a){N(f)?ot().then(()=>{f=f({direction:a?"in":"out"}),g(a)}):g(a)},end(){o(),i=u=null}}}function yt(t,e,n){const s=t.$$.props[e];s!==void 0&&(t.$$.bound[s]=n,n(t.$$.ctx[s]))}function wt(t){t&&t.c()}function xt(t,e){t&&t.l(e)}function lt(t,e,n){const{fragment:s,after_update:c}=t.$$;s&&s.m(e,n),I(()=>{const f=t.$$.on_mount.map(W).filter(N);t.$$.on_destroy?t.$$.on_destroy.push(...f):v(f),t.$$.on_mount=[]}),c.forEach(I)}function ct(t,e){const n=t.$$;n.fragment!==null&&(q(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){t.$$.dirty[0]===-1&&(X.push(t),Y(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function vt(t,e,n,s,c,f,l=null,i=[-1]){const u=T;A(t);const r=t.$$={fragment:null,ctx:[],props:f,update:x,not_equal:c,bound:z(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:z(),dirty:i,skip_bound:!1,root:e.target||u.$$.root};l&&l(r.root);let $=!1;if(r.ctx=n?n(t,e.props||{},(o,m,...g)=>{const a=g.length?g[0]:m;return r.ctx&&c(r.ctx[o],r.ctx[o]=a)&&(!r.skip_bound&&r.bound[o]&&r.bound[o](a),$&&dt(t,o)),m}):[],r.update(),$=!0,v(r.before_update),r.fragment=s?s(r.ctx):!1,e.target){if(e.hydrate){Z();const o=U(e.target);r.fragment&&r.fragment.l(o),o.forEach(F)}else r.fragment&&r.fragment.c();e.intro&&ft(t.$$.fragment),lt(t,e.target,e.anchor),tt(),V()}A(u)}class bt{$$=void 0;$$set=void 0;$destroy(){ct(this,1),this.$destroy=x}$on(e,n){if(!N(n))return x;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const c=s.indexOf(n);c!==-1&&s.splice(c,1)}}$set(e){this.$$set&&!k(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const _t="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(_t);export{bt as S,xt as a,gt as b,wt as c,ct as d,mt as e,pt as f,ht as g,yt as h,vt as i,lt as m,ft as t};
