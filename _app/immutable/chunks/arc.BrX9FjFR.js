import{a6 as ln,a7 as an,a8 as g,a9 as tn,aa as G,ab as j,ac as _,ad as un,ae as rn,af as K,ag as o,ah as z,ai as sn,aj as on,ak as fn}from"./state.0MJj483v.js";function cn(l){return l.innerRadius}function gn(l){return l.outerRadius}function yn(l){return l.startAngle}function dn(l){return l.endAngle}function mn(l){return l&&l.padAngle}function pn(l,h,E,q,v,A,B,a){var I=E-l,i=q-h,n=B-v,d=a-A,u=d*I-n*i;if(!(u*u<g))return u=(n*(h-A)-d*(l-v))/u,[l+u*I,h+u*i]}function V(l,h,E,q,v,A,B){var a=l-E,I=h-q,i=(B?A:-A)/K(a*a+I*I),n=i*I,d=-i*a,u=l+n,s=h+d,f=E+n,c=q+d,C=(u+f)/2,t=(s+c)/2,m=f-u,y=c-s,R=m*m+y*y,T=v-A,P=u*c-f*s,O=(y<0?-1:1)*K(fn(0,T*T*R-P*P)),S=(P*y-m*O)/R,k=(-P*m-y*O)/R,w=(P*y+m*O)/R,p=(-P*m+y*O)/R,x=S-C,e=k-t,r=w-C,F=p-t;return x*x+e*e>r*r+F*F&&(S=w,k=p),{cx:S,cy:k,x01:-n,y01:-d,x11:S*(v/T-1),y11:k*(v/T-1)}}function hn(){var l=cn,h=gn,E=z(0),q=null,v=yn,A=dn,B=mn,a=null,I=ln(i);function i(){var n,d,u=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-an,c=A.apply(this,arguments)-an,C=un(c-f),t=c>f;if(a||(a=n=I()),s<u&&(d=s,s=u,u=d),!(s>g))a.moveTo(0,0);else if(C>tn-g)a.moveTo(s*G(f),s*j(f)),a.arc(0,0,s,f,c,!t),u>g&&(a.moveTo(u*G(c),u*j(c)),a.arc(0,0,u,c,f,t));else{var m=f,y=c,R=f,T=c,P=C,O=C,S=B.apply(this,arguments)/2,k=S>g&&(q?+q.apply(this,arguments):K(u*u+s*s)),w=_(un(s-u)/2,+E.apply(this,arguments)),p=w,x=w,e,r;if(k>g){var F=sn(k/u*j(S)),L=sn(k/s*j(S));(P-=F*2)>g?(F*=t?1:-1,R+=F,T-=F):(P=0,R=T=(f+c)/2),(O-=L*2)>g?(L*=t?1:-1,m+=L,y-=L):(O=0,m=y=(f+c)/2)}var H=s*G(m),J=s*j(m),M=u*G(T),N=u*j(T);if(w>g){var Q=s*G(y),U=s*j(y),W=u*G(R),X=u*j(R),D;if(C<rn)if(D=pn(H,J,W,X,Q,U,M,N)){var Y=H-D[0],Z=J-D[1],$=Q-D[0],b=U-D[1],nn=1/j(on((Y*$+Z*b)/(K(Y*Y+Z*Z)*K($*$+b*b)))/2),en=K(D[0]*D[0]+D[1]*D[1]);p=_(w,(u-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else p=x=0}O>g?x>g?(e=V(W,X,H,J,s,x,t),r=V(Q,U,M,N,s,x,t),a.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(r.y01,r.x01),!t):(a.arc(e.cx,e.cy,x,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,s,o(e.cy+e.y11,e.cx+e.x11),o(r.cy+r.y11,r.cx+r.x11),!t),a.arc(r.cx,r.cy,x,o(r.y11,r.x11),o(r.y01,r.x01),!t))):(a.moveTo(H,J),a.arc(0,0,s,m,y,!t)):a.moveTo(H,J),!(u>g)||!(P>g)?a.lineTo(M,N):p>g?(e=V(M,N,Q,U,u,-p,t),r=V(H,J,W,X,u,-p,t),a.lineTo(e.cx+e.x01,e.cy+e.y01),p<w?a.arc(e.cx,e.cy,p,o(e.y01,e.x01),o(r.y01,r.x01),!t):(a.arc(e.cx,e.cy,p,o(e.y01,e.x01),o(e.y11,e.x11),!t),a.arc(0,0,u,o(e.cy+e.y11,e.cx+e.x11),o(r.cy+r.y11,r.cx+r.x11),t),a.arc(r.cx,r.cy,p,o(r.y11,r.x11),o(r.y01,r.x01),!t))):a.arc(0,0,u,T,R,t)}if(a.closePath(),n)return a=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,d=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-rn/2;return[G(d)*n,j(d)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:z(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:z(+n),i):h},i.cornerRadius=function(n){return arguments.length?(E=typeof n=="function"?n:z(+n),i):E},i.padRadius=function(n){return arguments.length?(q=n==null?null:typeof n=="function"?n:z(+n),i):q},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:z(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:z(+n),i):A},i.padAngle=function(n){return arguments.length?(B=typeof n=="function"?n:z(+n),i):B},i.context=function(n){return arguments.length?(a=n??null,i):a},i}export{hn as d};
