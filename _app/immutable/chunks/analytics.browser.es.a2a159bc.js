function et(e,t,n,r,a){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:a;return e===a?n:e}var xe="undefined",tt="object",Pt="any",Et="*",re="__",$e=typeof process<"u"?process:{};$e.env&&$e.env.NODE_ENV;var X=typeof document<"u";$e.versions!=null&&$e.versions.node!=null;typeof Deno<"u"&&Deno.core;X&&window.name==="nodejs"||typeof navigator<"u"&&navigator.userAgent!==void 0&&(navigator.userAgent.includes("Node.js")||navigator.userAgent.includes("jsdom"));function Ot(e,t){return t.charAt(0)[e]()+t.slice(1)}var Bt=Ot.bind(null,"toUpperCase"),Ft=Ot.bind(null,"toLowerCase");function Wt(e){return xt(e)?Bt("null"):typeof e=="object"?Qt(e):Object.prototype.toString.call(e).slice(8,-1)}function Me(e,t){t===void 0&&(t=!0);var n=Wt(e);return t?Ft(n):n}function Ee(e,t){return typeof t===e}var G=Ee.bind(null,"function"),ce=Ee.bind(null,"string"),ae=Ee.bind(null,"undefined"),Xt=Ee.bind(null,"boolean");Ee.bind(null,"symbol");function xt(e){return e===null}function Ht(e){return Me(e)==="number"&&!isNaN(e)}function Gt(e){return Me(e)==="array"}function W(e){if(!Kt(e))return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function Kt(e){return e&&(typeof e=="object"||e!==null)}function Qt(e){return G(e.constructor)?e.constructor.name:null}function Yt(e){return e instanceof Error||ce(e.message)&&e.constructor&&Ht(e.constructor.stackTraceLimit)}function jt(e,t){if(typeof t!="object"||xt(t))return!1;if(t instanceof e)return!0;var n=Me(new e(""));if(Yt(t))for(;t;){if(Me(t)===n)return!0;t=Object.getPrototypeOf(t)}return!1}jt.bind(null,TypeError);jt.bind(null,SyntaxError);function ze(e,t){var n=e instanceof Element||e instanceof HTMLDocument;return n&&t?Zt(e,t):n}function Zt(e,t){return t===void 0&&(t=""),e&&e.nodeName===t.toUpperCase()}function Ue(e){var t=[].slice.call(arguments,1);return function(){return e.apply(void 0,[].slice.call(arguments).concat(t))}}Ue(ze,"form");Ue(ze,"button");Ue(ze,"input");Ue(ze,"select");function nt(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch{return null}}function en(){if(X){var e=navigator,t=e.languages;return e.userLanguage||(t&&t.length?t[0]:e.language)}}function tn(){try{return Intl.DateTimeFormat().resolvedOptions().timeZone}catch{}}function nn(e){return function(t){for(var n,r=Object.create(null),a=/([^&=]+)=?([^&]*)/g;n=a.exec(t);){var u=nt(n[1]),c=nt(n[2]);u.substring(u.length-2)==="[]"?(r[u=u.substring(0,u.length-2)]||(r[u]=[])).push(c):r[u]=c===""||c}for(var s in r){var b=s.split("[");b.length>1&&(rn(r,b.map(function(v){return v.replace(/[?[\]\\ ]/g,"")}),r[s]),delete r[s])}return r}(function(t){if(t){var n=t.match(/\?(.*)/);return n&&n[1]?n[1].split("#")[0]:""}return X&&window.location.search.substring(1)}(e))}function rn(e,t,n){for(var r=t.length-1,a=0;a<r;++a){var u=t[a];if(u==="__proto__"||u==="constructor")break;u in e||(e[u]={}),e=e[u]}e[t[r]]=n}function Ce(){for(var e="",t=0,n=4294967295*Math.random()|0;t++<36;){var r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"[t-1],a=15&n;e+=r=="-"||r=="4"?r:(r=="x"?a:3&a|8).toString(16),n=t%8==0?4294967295*Math.random()|0:n>>4}return e}var be="global",fe=re+"global"+re,de=typeof self===tt&&self.self===self&&self||typeof global===tt&&global.global===global&&global||void 0;function ie(e){return de[fe][e]}function oe(e,t){return de[fe][e]=t}function ge(e){delete de[fe][e]}function me(e,t,n){var r;try{if(Xe(e)){var a=window[e];r=a[t].bind(a)}}catch{}return r||n}de[fe]||(de[fe]={});var je={};function Xe(e){if(typeof je[e]!==xe)return je[e];try{var t=window[e];t.setItem(xe,xe),t.removeItem(xe)}catch{return je[e]=!1}return je[e]=!0}function m(){return m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(this,arguments)}var Z="function",K="undefined",on="@@redux/"+Math.random().toString(36),rt=function(){return typeof Symbol===Z&&Symbol.observable||"@@observable"}(),Ne=" != "+Z;function Nt(e,t,n){var r;if(typeof t===Z&&typeof n===K&&(n=t,t=void 0),typeof n!==K){if(typeof n!==Z)throw new Error("enhancer"+Ne);return n(Nt)(e,t)}if(typeof e!==Z)throw new Error("reducer"+Ne);var a=e,u=t,c=[],s=c,b=!1;function v(){s===c&&(s=c.slice())}function A(){return u}function p(y){if(typeof y!==Z)throw new Error("Listener"+Ne);var T=!0;return v(),s.push(y),function(){if(T){T=!1,v();var P=s.indexOf(y);s.splice(P,1)}}}function j(y){if(!W(y))throw new Error("Act != obj");if(typeof y.type===K)throw new Error("ActType "+K);if(b)throw new Error("Dispatch in reducer");try{b=!0,u=a(u,y)}finally{b=!1}for(var T=c=s,P=0;P<T.length;P++)(0,T[P])();return y}return j({type:"@@redux/INIT"}),(r={dispatch:j,subscribe:p,getState:A,replaceReducer:function(y){if(typeof y!==Z)throw new Error("next reducer"+Ne);a=y,j({type:"@@redux/INIT"})}})[rt]=function(){var y,T=p;return(y={subscribe:function(P){if(typeof P!="object")throw new TypeError("Observer != obj");function I(){P.next&&P.next(A())}return I(),{unsubscribe:T(I)}}})[rt]=function(){return this},y},r}function an(e,t){var n=t&&t.type;return"action "+(n&&n.toString()||"?")+"reducer "+e+" returns "+K}function pe(){var e=[].slice.call(arguments);return e.length===0?function(t){return t}:e.length===1?e[0]:e.reduce(function(t,n){return function(){return t(n.apply(void 0,[].slice.call(arguments)))}})}function un(){var e=arguments;return function(t){return function(n,r,a){var u,c=t(n,r,a),s=c.dispatch,b={getState:c.getState,dispatch:function(v){return s(v)}};return u=[].slice.call(e).map(function(v){return v(b)}),m({},c,{dispatch:s=pe.apply(void 0,u)(c.dispatch)})}}}var Q=re+"anon_id",ee=re+"user_id",ne=re+"user_traits",Ln={__proto__:null,ANON_ID:Q,USER_ID:ee,USER_TRAITS:ne},Y="userId",ue="anonymousId",Te=["bootstrap","params","campaign","initializeStart","initialize","initializeEnd","ready","resetStart","reset","resetEnd","pageStart","page","pageEnd","pageAborted","trackStart","track","trackEnd","trackAborted","identifyStart","identify","identifyEnd","identifyAborted","userIdChanged","registerPlugins","enablePlugin","disablePlugin","online","offline","setItemStart","setItem","setItemEnd","setItemAborted","removeItemStart","removeItem","removeItemEnd","removeItemAborted"],Fe=["name","EVENTS","config","loaded"],g=Te.reduce(function(e,t){return e[t]=t,e},{registerPluginType:function(e){return"registerPlugin:"+e},pluginReadyType:function(e){return"ready:"+e}}),it=/^utm_/,ot=/^an_prop_/,at=/^an_trait_/;function cn(e){var t=e.storage.setItem;return function(n){return function(r){return function(a){if(a.type===g.bootstrap){var u=a.params,c=a.user,s=a.persistedUser,b=a.initialUser,v=s.userId===c.userId;s.anonymousId!==c.anonymousId&&t(Q,c.anonymousId),v||t(ee,c.userId),b.traits&&t(ne,m({},v&&s.traits?s.traits:{},b.traits));var A=Object.keys(a.params);if(A.length){var p=u.an_uid,j=u.an_event,y=A.reduce(function(T,P){if(P.match(it)||P.match(/^(d|g)clid/)){var I=P.replace(it,"");T.campaign[I==="campaign"?"name":I]=u[P]}return P.match(ot)&&(T.props[P.replace(ot,"")]=u[P]),P.match(at)&&(T.traits[P.replace(at,"")]=u[P]),T},{campaign:{},props:{},traits:{}});n.dispatch(m({type:g.params,raw:u},y,p?{userId:p}:{})),p&&setTimeout(function(){return e.identify(p,y.traits)},0),j&&setTimeout(function(){return e.track(j,y.props)},0),Object.keys(y.campaign).length&&n.dispatch({type:g.campaign,campaign:y.campaign})}}return r(a)}}}}function sn(e){return function(t,n){if(t===void 0&&(t={}),n===void 0&&(n={}),n.type===g.setItemEnd){if(n.key===Q)return m({},t,{anonymousId:n.value});if(n.key===ee)return m({},t,{userId:n.value})}switch(n.type){case g.identify:return Object.assign({},t,{userId:n.userId,traits:m({},t.traits,n.traits)});case g.reset:return[ee,Q,ne].forEach(function(r){e.removeItem(r)}),Object.assign({},t,{userId:null,anonymousId:null,traits:{}});default:return t}}}function ut(e){return{userId:e.getItem(ee),anonymousId:e.getItem(Q),traits:e.getItem(ne)}}var We=function(e){return re+"TEMP"+re+e};function ln(e){var t=e.storage,n=t.setItem,r=t.removeItem,a=t.getItem;return function(u){return function(c){return function(s){var b=s.userId,v=s.traits,A=s.options;if(s.type===g.reset&&([ee,ne,Q].forEach(function(y){r(y)}),[Y,ue,"traits"].forEach(function(y){ge(We(y))})),s.type===g.identify){a(Q)||n(Q,Ce());var p=a(ee),j=a(ne)||{};p&&p!==b&&u.dispatch({type:g.userIdChanged,old:{userId:p,traits:j},new:{userId:b,traits:v},options:A}),b&&n(ee,b),v&&n(ne,m({},j,v))}return c(s)}}}}var ye={};function ct(e,t){ye[e]&&G(ye[e])&&(ye[e](t),delete ye[e])}function _t(e,t,n){return new Promise(function(r,a){return t()?r(e):n<1?a(m({},e,{queue:!0})):new Promise(function(u){return setTimeout(u,10)}).then(function(u){return _t(e,t,n-10).then(r,a)})})}function kt(e,t,n){var r=t(),a=e.getState(),u=a.plugins,c=a.queue,s=a.user;if(!a.context.offline&&c&&c.actions&&c.actions.length){var b=c.actions.reduce(function(A,p,j){return u[p.plugin].loaded?(A.process.push(p),A.processIndex.push(j)):(A.requeue.push(p),A.requeueIndex.push(j)),A},{processIndex:[],process:[],requeue:[],requeueIndex:[]});if(b.processIndex&&b.processIndex.length){b.processIndex.forEach(function(A){var p=c.actions[A],j=p.plugin,y=p.payload.type,T=r[j][y];if(T&&G(T)){var P=function(O,N){return O===void 0&&(O={}),N===void 0&&(N={}),[Y,ue].reduce(function($,d){return O.hasOwnProperty(d)&&N[d]&&N[d]!==O[d]&&($[d]=N[d]),$},O)}(p.payload,s);T({payload:P,config:u[j].config,instance:n});var I=y+":"+j;e.dispatch(m({},P,{type:I,_:{called:I,from:"queueDrain"}}))}});var v=c.actions.filter(function(A,p){return!~b.processIndex.indexOf(p)});c.actions=v}}}var Ve=function(e){var t=e.data,n=e.action,r=e.instance,a=e.state,u=e.allPlugins,c=e.allMatches,s=e.store,b=e.EVENTS;try{var v=a.plugins,A=a.context,p=n.type,j=p.match(se),y=t.exact.map(function(I){return I.pluginName});j&&(y=c.during.map(function(I){return I.pluginName}));var T=function(I,O){return function(N,$,d){var f=$.config,U=$.name,M=U+"."+N.type;d&&(M=d.event);var _=N.type.match(se)?function(C,z,B,D,F){return function(q,h){var R=D?D.name:C,J=h&&Pe(h)?h:B;if(D&&(!(J=h&&Pe(h)?h:[C]).includes(C)||J.length!==1))throw new Error("Method "+z+" can only abort "+C+" plugin. "+JSON.stringify(J)+" input valid");return m({},F,{abort:{reason:q,plugins:J,caller:z,_:R}})}}(U,M,O,d,N):function(C,z){return function(){throw new Error(C.type+" action not cancellable. Remove abort in "+z)}}(N,M);return{payload:fn(N),instance:I,config:f||{},abort:_}}}(r,y),P=t.exact.reduce(function(I,O){var N=O.pluginName,$=O.methodName,d=!1;return $.match(/^initialize/)||$.match(/^reset/)||(d=!v[N].loaded),A.offline&&$.match(/^(page|track|identify)/)&&(d=!0),I[""+N]=d,I},{});return Promise.resolve(t.exact.reduce(function(I,O,N){try{var $=O.pluginName;return Promise.resolve(I).then(function(d){function f(){return Promise.resolve(d)}var U=function(){if(t.namespaced&&t.namespaced[$])return Promise.resolve(t.namespaced[$].reduce(function(M,_,C){try{return Promise.resolve(M).then(function(z){return _.method&&G(_.method)?(function(q,h){var R=mt(q);if(R&&R.name===h){var J=mt(R.method);throw new Error([h+" plugin is calling method "+q,"Plugins cant call self","Use "+R.method+" "+(J?"or "+J.method:"")+" in "+h+" plugin insteadof "+q].join(`
`))}}(_.methodName,_.pluginName),Promise.resolve(_.method({payload:z,instance:r,abort:(B=z,D=$,F=_.pluginName,function(q,h){return m({},B,{abort:{reason:q,plugins:h||[D],caller:p,from:F||D}})}),config:ft(_.pluginName,v,u),plugins:v})).then(function(q){var h=W(q)?q:{};return Promise.resolve(m({},z,h))})):z;var B,D,F})}catch(z){return Promise.reject(z)}},Promise.resolve(n))).then(function(M){d[$]=M});d[$]=n}();return U&&U.then?U.then(f):f()})}catch(d){return Promise.reject(d)}},Promise.resolve({}))).then(function(I){return Promise.resolve(t.exact.reduce(function(O,N,$){try{var d=t.exact.length===$+1,f=N.pluginName,U=u[f];return Promise.resolve(O).then(function(M){var _=I[f]?I[f]:{};if(j&&(_=M),Je(_,f))return Re({data:_,method:p,instance:r,pluginName:f,store:s}),Promise.resolve(M);if(Je(M,f))return d&&Re({data:M,method:p,instance:r,store:s}),Promise.resolve(M);if(P.hasOwnProperty(f)&&P[f]===!0)return s.dispatch({type:"queue",plugin:f,payload:_,_:{called:"queue",from:"queueMechanism"}}),Promise.resolve(M);var C=T(I[f],u[f]);return Promise.resolve(U[p]({abort:C.abort,payload:_,instance:r,config:ft(f,v,u),plugins:v})).then(function(z){var B=W(z)?z:{},D=m({},M,B),F=I[f];if(Je(F,f))Re({data:F,method:p,instance:r,pluginName:f,store:s});else{var q=p+":"+f;(q.match(/:/g)||[]).length<2&&!p.match(st)&&!p.match(lt)&&r.dispatch(m({},j?D:_,{type:q,_:{called:q,from:"submethod"}}))}return Promise.resolve(D)})})}catch(M){return Promise.reject(M)}},Promise.resolve(n))).then(function(O){if(!(p.match(se)||p.match(/^registerPlugin/)||p.match(lt)||p.match(st)||p.match(/^params/)||p.match(/^userIdChanged/))){if(b.plugins.includes(p),O._&&O._.originalAction===p)return O;var N=m({},O,{_:{originalAction:O.type,called:O.type,from:"engineEnd"}});At(O,t.exact.length)&&!p.match(/End$/)&&(N=m({},N,{type:O.type+"Aborted"})),s.dispatch(N)}return O})})}catch(I){return Promise.reject(I)}},se=/Start$/,st=/^bootstrap/,lt=/^ready/;function Re(e){var t=e.pluginName,n=e.method+"Aborted"+(t?":"+t:"");e.store.dispatch(m({},e.data,{type:n,_:{called:n,from:"abort"}}))}function ft(e,t,n){var r=t[e]||n[e];return r&&r.config?r.config:{}}function dt(e,t){return t.reduce(function(n,r){return r[e]?n.concat({methodName:e,pluginName:r.name,method:r[e]}):n},[])}function pt(e,t){var n=e.replace(se,""),r=t?":"+t:"";return[""+e+r,""+n+r,n+"End"+r]}function Je(e,t){var n=e.abort;return!!n&&(n===!0||gt(n,t)||n&&gt(n.plugins,t))}function At(e,t){var n=e.abort;if(!n)return!1;if(n===!0||ce(n))return!0;var r=n.plugins;return Pe(n)&&n.length===t||Pe(r)&&r.length===t}function Pe(e){return Array.isArray(e)}function gt(e,t){return!(!e||!Pe(e))&&e.includes(t)}function mt(e){var t=e.match(/(.*):(.*)/);return!!t&&{method:t[1],name:t[2]}}function fn(e){return Object.keys(e).reduce(function(t,n){return n==="type"||(t[n]=W(e[n])?Object.assign({},e[n]):e[n]),t},{})}function dn(e,t,n){var r={};return function(a){return function(u){return function(c){try{var s,b=function(d){return s?d:u(p)},v=c.type,A=c.plugins,p=c;if(c.abort)return Promise.resolve(u(c));if(v===g.enablePlugin&&a.dispatch({type:g.initializeStart,plugins:A,disabled:[],fromEnable:!0,meta:c.meta}),v===g.disablePlugin&&setTimeout(function(){return ct(c.meta.rid,{payload:c})},0),v===g.initializeEnd){var j=t(),y=Object.keys(j),T=y.filter(function(d){return A.includes(d)}).map(function(d){return j[d]}),P=[],I=[],O=c.disabled,N=T.map(function(d){var f=d.loaded,U=d.name,M=d.config;return _t(d,function(){return f({config:M})},1e4).then(function(_){return r[U]||(a.dispatch({type:g.pluginReadyType(U),name:U,events:Object.keys(d).filter(function(C){return!Fe.includes(C)})}),r[U]=!0),P=P.concat(U),d}).catch(function(_){if(_ instanceof Error)throw new Error(_);return I=I.concat(_.name),_})});Promise.all(N).then(function(d){var f={plugins:P,failed:I,disabled:O};setTimeout(function(){y.length===N.length+O.length&&a.dispatch(m({},{type:g.ready},f))},0)})}var $=function(){if(v!==g.bootstrap)return/^ready:([^:]*)$/.test(v)&&setTimeout(function(){return kt(a,t,e)},0),Promise.resolve(function(d,f,U,M,_){try{var C=G(f)?f():f,z=d.type,B=z.replace(se,"");if(d._&&d._.called)return Promise.resolve(d);var D=U.getState(),F=(R=C,(J=D.plugins)===void 0&&(J={}),(ve=d.options)===void 0&&(ve={}),Object.keys(R).filter(function(i){var o=ve.plugins||{};return Xt(o[i])?o[i]:o.all!==!1&&(!J[i]||J[i].enabled!==!1)}).map(function(i){return R[i]}));z===g.initializeStart&&d.fromEnable&&(F=Object.keys(D.plugins).filter(function(i){var o=D.plugins[i];return d.plugins.includes(i)&&!o.initialized}).map(function(i){return C[i]}));var q=F.map(function(i){return i.name}),h=function(i,o,l){var w=pt(i).map(function(S){return dt(S,o)});return o.reduce(function(S,E){var V=E.name,k=pt(i,V).map(function(he){return dt(he,o)}),L=k[0],x=k[1],H=k[2];return L.length&&(S.beforeNS[V]=L),x.length&&(S.duringNS[V]=x),H.length&&(S.afterNS[V]=H),S},{before:w[0],beforeNS:{},during:w[1],duringNS:{},after:w[2],afterNS:{}})}(z,F);return Promise.resolve(Ve({action:d,data:{exact:h.before,namespaced:h.beforeNS},state:D,allPlugins:C,allMatches:h,instance:U,store:M,EVENTS:_})).then(function(i){function o(){var S=function(){if(z.match(se))return Promise.resolve(Ve({action:m({},l,{type:B+"End"}),data:{exact:h.after,namespaced:h.afterNS},state:D,allPlugins:C,allMatches:h,instance:U,store:M,EVENTS:_})).then(function(E){E.meta&&E.meta.hasCallback&&ct(E.meta.rid,{payload:E})})}();return S&&S.then?S.then(function(){return i}):i}if(At(i,q.length))return i;var l,w=function(){if(z!==B)return Promise.resolve(Ve({action:m({},i,{type:B}),data:{exact:h.during,namespaced:h.duringNS},state:D,allPlugins:C,allMatches:h,instance:U,store:M,EVENTS:_})).then(function(S){l=S});l=i}();return w&&w.then?w.then(o):o()})}catch(i){return Promise.reject(i)}var R,J,ve}(c,t,e,a,n)).then(function(d){return s=1,u(d)})}();return Promise.resolve($&&$.then?$.then(b):b($))}catch(d){return Promise.reject(d)}}}}}function pn(e){return function(t){return function(n){return function(r){var a=r.type,u=r.key,c=r.value,s=r.options;if(a===g.setItem||a===g.removeItem){if(r.abort)return n(r);a===g.setItem?e.setItem(u,c,s):e.removeItem(u,s)}return n(r)}}}}var gn=function(){var e=this;this.before=[],this.after=[],this.addMiddleware=function(t,n){e[n]=e[n].concat(t)},this.removeMiddleware=function(t,n){var r=e[n].findIndex(function(a){return a===t});r!==-1&&(e[n]=[].concat(e[n].slice(0,r),e[n].slice(r+1)))},this.dynamicMiddlewares=function(t){return function(n){return function(r){return function(a){var u={getState:n.getState,dispatch:function(s){return n.dispatch(s)}},c=e[t].map(function(s){return s(u)});return pe.apply(void 0,c)(r)(a)}}}}};function mn(e){return function(t,n){t===void 0&&(t={});var r={};if(n.type==="initialize:aborted")return t;if(/^registerPlugin:([^:]*)$/.test(n.type)){var a=vt(n.type,"registerPlugin"),u=e()[a];if(!u||!a)return t;var c=n.enabled,s=u.config;return r[a]={enabled:c,initialized:!!c&&!u.initialize,loaded:!!c&&!!u.loaded({config:s}),config:s},m({},t,r)}if(/^initialize:([^:]*)$/.test(n.type)){var b=vt(n.type,g.initialize),v=e()[b];return v&&b?(r[b]=m({},t[b],{initialized:!0,loaded:!!v.loaded({config:v.config})}),m({},t,r)):t}if(/^ready:([^:]*)$/.test(n.type))return r[n.name]=m({},t[n.name],{loaded:!0}),m({},t,r);switch(n.type){case g.disablePlugin:return m({},t,ht(n.plugins,!1,t));case g.enablePlugin:return m({},t,ht(n.plugins,!0,t));default:return t}}}function vt(e,t){return e.substring(t.length+1,e.length)}function ht(e,t,n){return e.reduce(function(r,a){return r[a]=m({},n[a],{enabled:t}),r},n)}function Tt(e){try{return JSON.parse(JSON.stringify(e))}catch{}return e}var vn={last:{},history:[]};function hn(e,t){e===void 0&&(e=vn);var n=t.options,r=t.meta;if(t.type===g.track){var a=Tt(m({event:t.event,properties:t.properties},Object.keys(n).length&&{options:n},{meta:r}));return m({},e,{last:a,history:e.history.concat(a)})}return e}var yn={actions:[]};function bn(e,t){e===void 0&&(e=yn);var n=t.payload;switch(t.type){case"queue":var r;return r=n&&n.type&&n.type===g.identify?[t].concat(e.actions):e.actions.concat(t),m({},e,{actions:r});case"dequeue":return[];default:return e}}var $t=/#.*$/;function In(e){var t=/(http[s]?:\/\/)?([^\/\s]+\/)(.*)/g.exec(e);return"/"+(t&&t[3]?t[3].split("?")[0].replace($t,""):"")}var Mt,zt,Ut,Ct,wn=function(e){if(e===void 0&&(e={}),!X)return e;var t=document,n=t.title,r=t.referrer,a=window,u=a.location,c=a.innerWidth,s=a.innerHeight,b=u.hash,v=u.search,A=function(j){var y=function(){if(X){for(var T,P=document.getElementsByTagName("link"),I=0;T=P[I];I++)if(T.getAttribute("rel")==="canonical")return T.getAttribute("href")}}();return y?y.match(/\?/)?y:y+j:window.location.href.replace($t,"")}(v),p={title:n,url:A,path:In(A),hash:b,search:v,width:c,height:s};return r&&r!==""&&(p.referrer=r),m({},p,e)},Sn={last:{},history:[]};function Pn(e,t){e===void 0&&(e=Sn);var n=t.options;if(t.type===g.page){var r=Tt(m({properties:t.properties,meta:t.meta},Object.keys(n).length&&{options:n}));return m({},e,{last:r,history:e.history.concat(r)})}return e}Mt=function(){if(!X)return!1;var e=navigator.appVersion;return~e.indexOf("Win")?"Windows":~e.indexOf("Mac")?"MacOS":~e.indexOf("X11")?"UNIX":~e.indexOf("Linux")?"Linux":"Unknown OS"}(),zt=X?document.referrer:null,Ut=en(),Ct=tn();var yt={initialized:!1,sessionId:Ce(),app:null,version:null,debug:!1,offline:!!X&&!navigator.onLine,os:{name:Mt},userAgent:X?navigator.userAgent:"node",library:{name:"analytics",version:"0.12.5"},timezone:Ct,locale:Ut,campaign:{},referrer:zt};function En(e,t){e===void 0&&(e=yt);var n=e.initialized,r=t.campaign;switch(t.type){case g.campaign:return m({},e,{campaign:r});case g.offline:return m({},e,{offline:!0});case g.online:return m({},e,{offline:!1});default:return n?e:m({},yt,e,{initialized:!0})}}var On=["plugins","reducers","storage"];function xn(e,t,n){if(X){var r=window[(n?"add":"remove")+"EventListener"];e.split(" ").forEach(function(a){r(a,t)})}}function jn(e){var t=xn.bind(null,"online offline",function(n){return Promise.resolve(!navigator.onLine).then(e)});return t(!0),function(n){return t(!1)}}function Dt(){return oe("analytics",[]),function(e){return function(t,n,r){var a=e(t,n,r),u=a.dispatch;return Object.assign(a,{dispatch:function(c){return de[fe].analytics.push(c.action||c),u(c)}})}}}function bt(e){return function(){return pe(pe.apply(null,arguments),Dt())}}function Be(e){return e?Gt(e)?e:[e]:[]}function It(e,t,n){e===void 0&&(e={});var r,a,u=Ce();return t&&(ye[u]=(r=t,a=function(c){for(var s,b=c||Array.prototype.slice.call(arguments),v=0;v<b.length;v++)if(G(b[v])){s=b[v];break}return s}(n),function(c){a&&a(c),r(c)})),m({},e,{rid:u,ts:new Date().getTime()},t?{hasCallback:!0}:{})}function Nn(e){e===void 0&&(e={});var t=e.reducers||{},n=e.initialUser||{},r=(e.plugins||[]).reduce(function(i,o){if(G(o))return i.middlewares=i.middlewares.concat(o),i;if(o.NAMESPACE&&(o.name=o.NAMESPACE),!o.name)throw new Error("https://lytics.dev/errors/1");o.config||(o.config={});var l=o.EVENTS?Object.keys(o.EVENTS).map(function(E){return o.EVENTS[E]}):[];i.pluginEnabled[o.name]=!(o.enabled===!1||o.config.enabled===!1),delete o.enabled,o.methods&&(i.methods[o.name]=Object.keys(o.methods).reduce(function(E,V){var k;return E[V]=(k=o.methods[V],function(){for(var L=Array.prototype.slice.call(arguments),x=new Array(k.length),H=0;H<L.length;H++)x[H]=L[H];return x[x.length]=f,k.apply({instance:f},x)}),E},{}),delete o.methods);var w=Object.keys(o).concat(l),S=new Set(i.events.concat(w));if(i.events=Array.from(S),i.pluginsArray=i.pluginsArray.concat(o),i.plugins[o.name])throw new Error(o.name+"AlreadyLoaded");return i.plugins[o.name]=o,i.plugins[o.name].loaded||(i.plugins[o.name].loaded=function(){return!0}),i},{plugins:{},pluginEnabled:{},methods:{},pluginsArray:[],middlewares:[],events:[]}),a=e.storage?e.storage:{getItem:ie,setItem:oe,removeItem:ge},u=function(i){return function(o,l,w){return l.getState("user")[o]||(w&&W(w)&&w[o]?w[o]:ut(i)[o]||ie(We(o))||null)}}(a),c=r.plugins,s=r.events.filter(function(i){return!Fe.includes(i)}).sort(),b=new Set(s.concat(Te).filter(function(i){return!Fe.includes(i)})),v=Array.from(b).sort(),A=function(){return c},p=new gn,j=p.addMiddleware,y=p.removeMiddleware,T=p.dynamicMiddlewares,P=function(){throw new Error("Abort disabled inListener")},I=nn(),O=ut(a),N=m({},O,n,I.an_uid?{userId:I.an_uid}:{},I.an_aid?{anonymousId:I.an_aid}:{});N.anonymousId||(N.anonymousId=Ce());var $=m({enable:function(i,o){return new Promise(function(l){h.dispatch({type:g.enablePlugin,plugins:Be(i),_:{originalAction:g.enablePlugin}},l,[o])})},disable:function(i,o){return new Promise(function(l){h.dispatch({type:g.disablePlugin,plugins:Be(i),_:{originalAction:g.disablePlugin}},l,[o])})}},r.methods),d=!1,f={identify:function(i,o,l,w){try{var S=ce(i)?i:null,E=W(i)?i:o,V=l||{},k=f.user();oe(We(Y),S);var L=S||E.userId||u(Y,f,E);return Promise.resolve(new Promise(function(x){h.dispatch(m({type:g.identifyStart,userId:L,traits:E||{},options:V,anonymousId:k.anonymousId},k.id&&k.id!==S&&{previousId:k.id}),x,[o,l,w])}))}catch(x){return Promise.reject(x)}},track:function(i,o,l,w){try{var S=W(i)?i.event:i;if(!S||!ce(S))throw new Error("EventMissing");var E=W(i)?i:o||{},V=W(l)?l:{};return Promise.resolve(new Promise(function(k){h.dispatch({type:g.trackStart,event:S,properties:E,options:V,userId:u(Y,f,o),anonymousId:u(ue,f,o)},k,[o,l,w])}))}catch(k){return Promise.reject(k)}},page:function(i,o,l){try{var w=W(i)?i:{},S=W(o)?o:{};return Promise.resolve(new Promise(function(E){h.dispatch({type:g.pageStart,properties:wn(w),options:S,userId:u(Y,f,w),anonymousId:u(ue,f,w)},E,[i,o,l])}))}catch(E){return Promise.reject(E)}},user:function(i){if(i===Y||i==="id")return u(Y,f);if(i===ue||i==="anonId")return u(ue,f);var o=f.getState("user");return i?et(o,i):o},reset:function(i){return new Promise(function(o){h.dispatch({type:g.resetStart},o,i)})},ready:function(i){return d&&i({plugins:$,instance:f}),f.on(g.ready,function(o){i(o),d=!0})},on:function(i,o){if(!i||!G(o))return!1;if(i===g.bootstrap)throw new Error(".on disabled for "+i);var l=/Start$|Start:/;if(i==="*"){var w=function(k){return function(L){return function(x){return x.type.match(l)&&o({payload:x,instance:f,plugins:c}),L(x)}}},S=function(k){return function(L){return function(x){return x.type.match(l)||o({payload:x,instance:f,plugins:c}),L(x)}}};return j(w,_e),j(S,ke),function(){y(w,_e),y(S,ke)}}var E=i.match(l)?_e:ke,V=function(k){return function(L){return function(x){return x.type===i&&o({payload:x,instance:f,plugins:c,abort:P}),L(x)}}};return j(V,E),function(){return y(V,E)}},once:function(i,o){if(!i||!G(o))return!1;if(i===g.bootstrap)throw new Error(".once disabled for "+i);var l=f.on(i,function(w){o({payload:w.payload,instance:f,plugins:c,abort:P}),l()});return l},getState:function(i){var o=h.getState();return i?et(o,i):Object.assign({},o)},dispatch:function(i){var o=ce(i)?{type:i}:i;if(Te.includes(o.type))throw new Error("reserved action "+o.type);var l=m({},o,{_:m({originalAction:o.type},i._||{})});h.dispatch(l)},enablePlugin:$.enable,disablePlugin:$.disable,plugins:$,storage:{getItem:a.getItem,setItem:function(i,o,l){h.dispatch({type:g.setItemStart,key:i,value:o,options:l})},removeItem:function(i,o){h.dispatch({type:g.removeItemStart,key:i,options:o})}},setAnonymousId:function(i,o){f.storage.setItem(Q,i,o)},events:{core:Te,plugins:s}},U=r.middlewares.concat([function(i){return function(o){return function(l){return l.meta||(l.meta=It()),o(l)}}},T(_e),dn(f,A,{all:v,plugins:s}),pn(a),cn(f),ln(f),T(ke)]),M={context:En,user:sn(a),page:Pn,track:hn,plugins:mn(A),queue:bn},_=pe,C=pe;if(X&&e.debug){var z=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;z&&(_=z({trace:!0,traceLimit:25})),C=function(){return arguments.length===0?Dt():W(typeof arguments[0])?bt():bt().apply(null,arguments)}}var B,D=function(i){return Object.keys(i).reduce(function(o,l){return On.includes(l)||(o[l]=i[l]),o},{})}(e),F=r.pluginsArray.reduce(function(i,o){var l=o.name,w=o.config,S=o.loaded,E=r.pluginEnabled[l];return i[l]={enabled:E,initialized:!!E&&!o.initialize,loaded:!!S({config:w}),config:w},i},{}),q={context:D,user:N,plugins:F},h=Nt(function(i){for(var o=Object.keys(i),l={},w=0;w<o.length;w++){var S=o[w];typeof i[S]===Z&&(l[S]=i[S])}var E,V=Object.keys(l);try{(function(k){Object.keys(k).forEach(function(L){var x=k[L];if(typeof x(void 0,{type:"@@redux/INIT"})===K||typeof x(void 0,{type:on})===K)throw new Error("reducer "+L+" "+K)})})(l)}catch(k){E=k}return function(k,L){if(k===void 0&&(k={}),E)throw E;for(var x=!1,H={},he=0;he<V.length;he++){var Oe=V[he],Ze=k[Oe],qe=(0,l[Oe])(Ze,L);if(typeof qe===K){var Jt=an(Oe,L);throw new Error(Jt)}H[Oe]=qe,x=x||qe!==Ze}return x?H:k}}(m({},M,t)),q,C(_(un.apply(void 0,U))));h.dispatch=(B=h.dispatch,function(i,o,l){var w=m({},i,{meta:It(i.meta,o,Be(l))});return B.apply(null,[w])});var R=Object.keys(c);h.dispatch({type:g.bootstrap,plugins:R,config:D,params:I,user:N,initialUser:n,persistedUser:O});var J=R.filter(function(i){return r.pluginEnabled[i]}),ve=R.filter(function(i){return!r.pluginEnabled[i]});return h.dispatch({type:g.registerPlugins,plugins:R,enabled:r.pluginEnabled}),r.pluginsArray.map(function(i,o){var l=i.bootstrap,w=i.config,S=i.name;l&&G(l)&&l({instance:f,config:w,payload:i}),h.dispatch({type:g.registerPluginType(S),name:S,enabled:r.pluginEnabled[S],plugin:i}),r.pluginsArray.length===o+1&&h.dispatch({type:g.initializeStart,plugins:J,disabled:ve})}),jn(function(i){h.dispatch({type:i?g.offline:g.online})}),function(i,o,l){setInterval(function(){return kt(i,o,l)},3e3)}(h,A,f),f}var _e="before",ke="after",Ie="cookie",te=Vt(),Lt=De,_n=De;function qt(e){return te?De(e,"",-1):ge(e)}function Vt(){if(te!==void 0)return te;var e="cookiecookie";try{De(e,e),te=document.cookie.indexOf(e)!==-1,qt(e)}catch{te=!1}return te}function De(e,t,n,r,a,u){if(typeof window<"u"){var c=arguments.length>1;return te===!1&&(c?oe(e,t):ie(e)),c?document.cookie=e+"="+encodeURIComponent(t)+(n?"; expires="+new Date(+new Date+1e3*n).toUTCString()+(r?"; path="+r:"")+(a?"; domain="+a:"")+(u?"; secure":""):""):decodeURIComponent((("; "+document.cookie).split("; "+e+"=")[1]||"").split(";")[0])}}var we="localStorage",kn=Xe.bind(null,"localStorage");me("localStorage","getItem",ie);me("localStorage","setItem",oe);me("localStorage","removeItem",ge);var Se="sessionStorage",An=Xe.bind(null,"sessionStorage");me("sessionStorage","getItem",ie);me("sessionStorage","setItem",oe);me("sessionStorage","removeItem",ge);function le(e){var t=e;try{if((t=JSON.parse(e))==="true")return!0;if(t==="false")return!1;if(W(t))return t;parseFloat(t)===t&&(t=parseFloat(t))}catch{}if(t!==null&&t!=="")return t}var Tn=kn(),$n=An(),Mn=Vt();function Rt(e,t){if(e){var n=He(t),r=!Ye(n),a=Ge(n)?le(localStorage.getItem(e)):void 0;if(r&&!ae(a))return a;var u=Ke(n)?le(Lt(e)):void 0;if(r&&u)return u;var c=Qe(n)?le(sessionStorage.getItem(e)):void 0;if(r&&c)return c;var s=ie(e);return r?s:{localStorage:a,sessionStorage:c,cookie:u,global:s}}}function zn(e,t,n){if(e&&!ae(t)){var r={},a=He(n),u=JSON.stringify(t),c=!Ye(a);return Ge(a)&&(r[we]=Ae(we,t,le(localStorage.getItem(e))),localStorage.setItem(e,u),c)?r[we]:Ke(a)&&(r[Ie]=Ae(Ie,t,le(Lt(e))),_n(e,u),c)?r[Ie]:Qe(a)&&(r[Se]=Ae(Se,t,le(sessionStorage.getItem(e))),sessionStorage.setItem(e,u),c)?r[Se]:(r[be]=Ae(be,t,ie(e)),oe(e,t),c?r[be]:r)}}function Un(e,t){if(e){var n=He(t),r=Rt(e,Et),a={};return!ae(r.localStorage)&&Ge(n)&&(localStorage.removeItem(e),a[we]=r.localStorage),!ae(r.cookie)&&Ke(n)&&(qt(e),a[Ie]=r.cookie),!ae(r.sessionStorage)&&Qe(n)&&(sessionStorage.removeItem(e),a[Se]=r.sessionStorage),!ae(r.global)&&Le(n,be)&&(ge(e),a[be]=r.global),a}}function He(e){return e?ce(e)?e:e.storage:Pt}function Ge(e){return Tn&&Le(e,we)}function Ke(e){return Mn&&Le(e,Ie)}function Qe(e){return $n&&Le(e,Se)}function Ye(e){return e===Et||e==="all"}function Le(e,t){return e===Pt||e===t||Ye(e)}function Ae(e,t,n){return{location:e,current:t,previous:n}}var Cn={setItem:zn,getItem:Rt,removeItem:Un};function Dn(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function St(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?wt(Object(n),!0).forEach(function(r){Dn(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wt(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qn(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t={storage:Cn};return Nn(St(St({},t),e))}export{qn as Analytics,Ln as CONSTANTS,g as EVENTS,qn as default,qn as init};
