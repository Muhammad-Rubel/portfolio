import{S as Te,i as Ae,s as Ne,k as d,q,a as A,l as p,m as h,r as K,h as o,c as N,n as s,M as ze,b as se,C as l,u as re,D as we,G as Se,N as Me,O as We,g as ce,v as Ke,f as Oe,d as ue,P as xt,x as Qe,y as ge,z as be,A as ve,B as _e,E as Pe,F as De,Q as Et}from"../chunks/index.dd423551.js";import{D as $t,A as kt,B as yt,G as bt,h as Le}from"../chunks/index.aac58703.js";function Xe(r,e,t){const a=r.slice();return a[1]=e[t],a}function Je(r,e,t){const a=r.slice();return a[1]=e[t],a}function Ye(r){let e,t=r[1]+"",a,c;return{c(){e=d("p"),a=q(t),c=A(),this.h()},l(u){e=p(u,"P",{class:!0});var n=h(e);a=K(n,t),c=N(n),n.forEach(o),this.h()},h(){s(e,"class","mb-4 text-lg")},m(u,n){se(u,e,n),l(e,a),l(e,c)},p(u,n){n&1&&t!==(t=u[1]+"")&&re(a,t)},d(u){u&&o(e)}}}function Ze(r){let e,t,a,c,u,n,g=r[1].label+"",f,b,x,E;return{c(){e=d("li"),t=d("a"),a=d("span"),c=q("▹"),u=A(),n=d("span"),f=q(g),E=A(),this.h()},l(S){e=p(S,"LI",{});var $=h(e);t=p($,"A",{href:!0,target:!0,"aria-label":!0,class:!0});var i=h(t);a=p(i,"SPAN",{class:!0});var j=h(a);c=K(j,"▹"),j.forEach(o),u=N(i),n=p(i,"SPAN",{});var k=h(n);f=K(k,g),k.forEach(o),i.forEach(o),E=N($),$.forEach(o),this.h()},h(){s(a,"class","text-green"),s(t,"href",b=r[1].url),s(t,"target","_blank"),s(t,"aria-label",x="link to "+r[1].label),s(t,"class","custom-transition w-max text-base hover:text-green")},m(S,$){se(S,e,$),l(e,t),l(t,a),l(a,c),l(t,u),l(t,n),l(n,f),l(e,E)},p(S,$){$&1&&g!==(g=S[1].label+"")&&re(f,g),$&1&&b!==(b=S[1].url)&&s(t,"href",b),$&1&&x!==(x="link to "+S[1].label)&&s(t,"aria-label",x)},d(S){S&&o(e)}}}function St(r){let e,t,a,c,u,n,g=r[0].title+"",f,b,x,E,S,$,i,j,k,v,_,C,D,H,W,Q,le=r[0].description,M=[];for(let y=0;y<le.length;y+=1)M[y]=Ye(Je(r,le,y));let X=r[0].expertiseAreas,I=[];for(let y=0;y<X.length;y+=1)I[y]=Ze(Xe(r,X,y));return{c(){e=d("section"),t=d("h2"),a=d("span"),c=q("01."),u=A(),n=d("span"),f=q(g),b=A(),x=d("div"),E=d("div");for(let y=0;y<M.length;y+=1)M[y].c();S=A(),$=d("ul");for(let y=0;y<I.length;y+=1)I[y].c();i=A(),j=d("div"),k=d("div"),v=d("img"),D=A(),H=d("span"),W=A(),Q=d("span"),this.h()},l(y){e=p(y,"SECTION",{id:!0,class:!0});var w=h(e);t=p(w,"H2",{class:!0});var m=h(t);a=p(m,"SPAN",{class:!0});var T=h(a);c=K(T,"01."),T.forEach(o),u=N(m),n=p(m,"SPAN",{class:!0});var L=h(n);f=K(L,g),L.forEach(o),m.forEach(o),b=N(w),x=p(w,"DIV",{class:!0});var V=h(x);E=p(V,"DIV",{class:!0});var P=h(E);for(let O=0;O<M.length;O+=1)M[O].l(P);S=N(P),$=p(P,"UL",{class:!0});var ie=h($);for(let O=0;O<I.length;O+=1)I[O].l(ie);ie.forEach(o),P.forEach(o),i=N(V),j=p(V,"DIV",{class:!0});var he=h(j);k=p(he,"DIV",{class:!0});var ae=h(k);v=p(ae,"IMG",{src:!0,alt:!0,class:!0}),D=N(ae),H=p(ae,"SPAN",{class:!0}),h(H).forEach(o),W=N(ae),Q=p(ae,"SPAN",{class:!0}),h(Q).forEach(o),ae.forEach(o),he.forEach(o),V.forEach(o),w.forEach(o),this.h()},h(){var y,w,m,T;s(a,"class","text-2xl text-green"),s(n,"class","relative after:absolute after:left-full after:top-1/2 after:ml-4 after:h-[1px] after:w-[150px] after:bg-lightest-navy after:lg:w-[300px]"),s(t,"class","mb-10 flex items-center justify-start space-x-4 text-[clamp(26px,5vw,32px)]"),s($,"class","mt-5 grid grid-cols-2 gap-2"),s(E,"class","lg:w-3/5"),ze(v.src,_=(w=(y=r[0])==null?void 0:y.image)==null?void 0:w.src)||s(v,"src",_),s(v,"alt",C=(T=(m=r[0])==null?void 0:m.image)==null?void 0:T.alt),s(v,"class","h-full w-full rounded object-cover object-center"),s(H,"class","absolute top-5 left-5 z-[-1] h-full w-full rounded border-2 border-green transition-all duration-300 ease-in-out group-hover:top-3 group-hover:left-3"),s(Q,"class","absolute top-0 left-0 z-0 h-full w-full bg-navy bg-opacity-30"),s(k,"class","group relative h-60 w-48 rounded md:h-64 md:w-52 lg:h-[370px] lg:w-[300px]"),s(j,"class","mt-12 flex justify-center lg:mt-0 lg:w-2/5"),s(x,"class","items-start justify-between lg:flex lg:space-x-10"),s(e,"id","about"),s(e,"class","custom-container section-py")},m(y,w){se(y,e,w),l(e,t),l(t,a),l(a,c),l(t,u),l(t,n),l(n,f),l(e,b),l(e,x),l(x,E);for(let m=0;m<M.length;m+=1)M[m]&&M[m].m(E,null);l(E,S),l(E,$);for(let m=0;m<I.length;m+=1)I[m]&&I[m].m($,null);l(x,i),l(x,j),l(j,k),l(k,v),l(k,D),l(k,H),l(k,W),l(k,Q)},p(y,[w]){var m,T,L,V;if(w&1&&g!==(g=y[0].title+"")&&re(f,g),w&1){le=y[0].description;let P;for(P=0;P<le.length;P+=1){const ie=Je(y,le,P);M[P]?M[P].p(ie,w):(M[P]=Ye(ie),M[P].c(),M[P].m(E,S))}for(;P<M.length;P+=1)M[P].d(1);M.length=le.length}if(w&1){X=y[0].expertiseAreas;let P;for(P=0;P<X.length;P+=1){const ie=Xe(y,X,P);I[P]?I[P].p(ie,w):(I[P]=Ze(ie),I[P].c(),I[P].m($,null))}for(;P<I.length;P+=1)I[P].d(1);I.length=X.length}w&1&&!ze(v.src,_=(T=(m=y[0])==null?void 0:m.image)==null?void 0:T.src)&&s(v,"src",_),w&1&&C!==(C=(V=(L=y[0])==null?void 0:L.image)==null?void 0:V.alt)&&s(v,"alt",C)},i:we,o:we,d(y){y&&o(e),Se(M,y),Se(I,y)}}}function Tt(r,e,t){let{data:a}=e;return r.$$set=c=>{"data"in c&&t(0,a=c.data)},[a]}class At extends Te{constructor(e){super(),Ae(this,e,Tt,St,Ne,{data:0})}}function et(r,e,t){const a=r.slice();return a[13]=e[t],a}function tt(r){let e,t;return{c(){e=d("span"),t=q("This field is required"),this.h()},l(a){e=p(a,"SPAN",{class:!0});var c=h(e);t=K(c,"This field is required"),c.forEach(o),this.h()},h(){s(e,"class","absolute top-full right-0 text-xs text-pink/80")},m(a,c){se(a,e,c),l(e,t)},d(a){a&&o(e)}}}function lt(r){let e,t;return{c(){e=d("span"),t=q("This field is required"),this.h()},l(a){e=p(a,"SPAN",{class:!0});var c=h(e);t=K(c,"This field is required"),c.forEach(o),this.h()},h(){s(e,"class","absolute top-full right-0 text-xs text-pink/80")},m(a,c){se(a,e,c),l(e,t)},d(a){a&&o(e)}}}function at(r){let e,t;return{c(){e=d("span"),t=q("This field is required"),this.h()},l(a){e=p(a,"SPAN",{class:!0});var c=h(e);t=K(c,"This field is required"),c.forEach(o),this.h()},h(){s(e,"class","absolute top-full right-0 text-xs text-pink/80")},m(a,c){se(a,e,c),l(e,t)},d(a){a&&o(e)}}}function st(r){let e,t,a,c,u;var n=r[13].icon;function g(f){return{props:{className:"h-full w-full hover:text-green transform hover:scale-110 custom-transition"}}}return n&&(t=Qe(n,g())),{c(){e=d("a"),t&&ge(t.$$.fragment),a=A(),this.h()},l(f){e=p(f,"A",{href:!0,target:!0,"aria-label":!0,class:!0});var b=h(e);t&&be(t.$$.fragment,b),a=N(b),b.forEach(o),this.h()},h(){s(e,"href",c=r[13].link),s(e,"target","_blank"),s(e,"aria-label","link to social media"),s(e,"class","flex h-6 w-6 items-center justify-center")},m(f,b){se(f,e,b),t&&ve(t,e,null),l(e,a),u=!0},p(f,b){if(b&1&&n!==(n=f[13].icon)){if(t){Ke();const x=t;ue(x.$$.fragment,1,0,()=>{_e(x,1)}),Oe()}n?(t=Qe(n,g()),ge(t.$$.fragment),ce(t.$$.fragment,1),ve(t,e,a)):t=null}(!u||b&1&&c!==(c=f[13].link))&&s(e,"href",c)},i(f){u||(t&&ce(t.$$.fragment,f),u=!0)},o(f){t&&ue(t.$$.fragment,f),u=!1},d(f){f&&o(e),t&&_e(t)}}}function Nt(r){let e,t,a,c,u,n,g=r[0].title+"",f,b,x,E,S,$=r[0].description+"",i,j,k,v=r[0].formTitle+"",_,C,D,H,W,Q,le,M,X,I,y,w,m,T,L,V,P=r[0].buttonLabel+"",ie,he,ae,O,R,ne=r[0].socialMediaTitle+"",J,oe,me,de,ke,B,U=r[4]&&tt(),z=r[5]&&lt(),ee=r[6]&&at(),fe=r[0].socialMedia,G=[];for(let F=0;F<fe.length;F+=1)G[F]=st(et(r,fe,F));const xe=F=>ue(G[F],1,1,()=>{G[F]=null});return{c(){e=d("section"),t=d("h2"),a=d("span"),c=q("04."),u=A(),n=d("span"),f=q(g),b=A(),x=d("div"),E=d("div"),S=d("p"),i=q($),j=A(),k=d("p"),_=q(v),C=A(),D=d("div"),H=d("div"),W=d("input"),Q=A(),U&&U.c(),le=A(),M=d("div"),X=d("input"),I=A(),z&&z.c(),y=A(),w=d("div"),m=d("textarea"),T=A(),ee&&ee.c(),L=A(),V=d("button"),ie=q(P),he=A(),ae=d("div"),O=d("div"),R=d("p"),J=q(ne),oe=A(),me=d("div");for(let F=0;F<G.length;F+=1)G[F].c();this.h()},l(F){e=p(F,"SECTION",{id:!0,class:!0});var Y=h(e);t=p(Y,"H2",{class:!0});var Z=h(t);a=p(Z,"SPAN",{class:!0});var Ee=h(a);c=K(Ee,"04."),Ee.forEach(o),u=N(Z),n=p(Z,"SPAN",{class:!0});var Ie=h(n);f=K(Ie,g),Ie.forEach(o),Z.forEach(o),b=N(Y),x=p(Y,"DIV",{class:!0});var pe=h(x);E=p(pe,"DIV",{class:!0});var ye=h(E);S=p(ye,"P",{class:!0});var He=h(S);i=K(He,$),He.forEach(o),j=N(ye),k=p(ye,"P",{class:!0});var Fe=h(k);_=K(Fe,v),Fe.forEach(o),C=N(ye),D=p(ye,"DIV",{class:!0});var $e=h(D);H=p($e,"DIV",{class:!0});var Ve=h(H);W=p(Ve,"INPUT",{type:!0,placeholder:!0,name:!0,class:!0}),Q=N(Ve),U&&U.l(Ve),Ve.forEach(o),le=N($e),M=p($e,"DIV",{class:!0});var Be=h(M);X=p(Be,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),I=N(Be),z&&z.l(Be),Be.forEach(o),y=N($e),w=p($e,"DIV",{class:!0});var Ce=h(w);m=p(Ce,"TEXTAREA",{placeholder:!0,class:!0}),h(m).forEach(o),T=N(Ce),ee&&ee.l(Ce),Ce.forEach(o),L=N($e),V=p($e,"BUTTON",{class:!0});var te=h(V);ie=K(te,P),te.forEach(o),$e.forEach(o),ye.forEach(o),he=N(pe),ae=p(pe,"DIV",{class:!0});var je=h(ae);O=p(je,"DIV",{class:!0});var qe=h(O);R=p(qe,"P",{class:!0});var Ge=h(R);J=K(Ge,ne),Ge.forEach(o),oe=N(qe),me=p(qe,"DIV",{class:!0});var Re=h(me);for(let Ue=0;Ue<G.length;Ue+=1)G[Ue].l(Re);Re.forEach(o),qe.forEach(o),je.forEach(o),pe.forEach(o),Y.forEach(o),this.h()},h(){s(a,"class","text-2xl text-green"),s(n,"class","relative text-lightest-slate after:absolute after:left-full after:top-1/2 after:ml-4 after:h-[1px] after:w-[150px] after:bg-lightest-navy after:lg:w-[300px]"),s(t,"class","mb-10 flex items-center justify-start space-x-4 text-[clamp(26px,5vw,32px)]"),s(S,"class","mb-4 text-lg"),s(k,"class","mb-4 text-lg"),s(W,"type","text"),s(W,"placeholder","Name*"),s(W,"name","name"),s(W,"class","custom-transition w-full rounded border-2 border-light-navy bg-light-navy py-2 px-4 text-base text-light-slate focus:border-green/40"),s(H,"class","relative"),s(X,"type","email"),s(X,"name","name"),s(X,"placeholder","Email*"),s(X,"class","custom-transition w-full rounded border-2 border-light-navy bg-light-navy py-2 px-4 text-base text-light-slate focus:border-green/40"),s(M,"class","relative"),s(m,"placeholder","Message*"),s(m,"class","custom-transition h-32 w-full rounded border-2 border-light-navy bg-light-navy py-2 px-4 text-base text-light-slate focus:border-green/40"),s(w,"class","relative"),s(V,"class","btn-primary custom-transition px-6 text-base hover:bg-green-tint"),s(D,"class","space-y-6"),s(E,"class","lg:w-3/5"),s(R,"class","mb-4 text-lg"),s(me,"class","flex items-start justify-start space-x-4"),s(O,"class","rounded"),s(ae,"class","mt-12 flex justify-center lg:mt-0 lg:w-2/5"),s(x,"class","items-start justify-between lg:flex lg:space-x-16"),s(e,"id","contact"),s(e,"class","custom-container section-py")},m(F,Y){se(F,e,Y),l(e,t),l(t,a),l(a,c),l(t,u),l(t,n),l(n,f),l(e,b),l(e,x),l(x,E),l(E,S),l(S,i),l(E,j),l(E,k),l(k,_),l(E,C),l(E,D),l(D,H),l(H,W),Me(W,r[1]),l(H,Q),U&&U.m(H,null),l(D,le),l(D,M),l(M,X),Me(X,r[2]),l(M,I),z&&z.m(M,null),l(D,y),l(D,w),l(w,m),Me(m,r[3]),l(w,T),ee&&ee.m(w,null),l(D,L),l(D,V),l(V,ie),l(x,he),l(x,ae),l(ae,O),l(O,R),l(R,J),l(O,oe),l(O,me);for(let Z=0;Z<G.length;Z+=1)G[Z]&&G[Z].m(me,null);de=!0,ke||(B=[We(W,"input",r[8]),We(X,"input",r[9]),We(m,"input",r[10]),We(V,"click",r[7])],ke=!0)},p(F,[Y]){if((!de||Y&1)&&g!==(g=F[0].title+"")&&re(f,g),(!de||Y&1)&&$!==($=F[0].description+"")&&re(i,$),(!de||Y&1)&&v!==(v=F[0].formTitle+"")&&re(_,v),Y&2&&W.value!==F[1]&&Me(W,F[1]),F[4]?U||(U=tt(),U.c(),U.m(H,null)):U&&(U.d(1),U=null),Y&4&&X.value!==F[2]&&Me(X,F[2]),F[5]?z||(z=lt(),z.c(),z.m(M,null)):z&&(z.d(1),z=null),Y&8&&Me(m,F[3]),F[6]?ee||(ee=at(),ee.c(),ee.m(w,null)):ee&&(ee.d(1),ee=null),(!de||Y&1)&&P!==(P=F[0].buttonLabel+"")&&re(ie,P),(!de||Y&1)&&ne!==(ne=F[0].socialMediaTitle+"")&&re(J,ne),Y&1){fe=F[0].socialMedia;let Z;for(Z=0;Z<fe.length;Z+=1){const Ee=et(F,fe,Z);G[Z]?(G[Z].p(Ee,Y),ce(G[Z],1)):(G[Z]=st(Ee),G[Z].c(),ce(G[Z],1),G[Z].m(me,null))}for(Ke(),Z=fe.length;Z<G.length;Z+=1)xe(Z);Oe()}},i(F){if(!de){for(let Y=0;Y<fe.length;Y+=1)ce(G[Y]);de=!0}},o(F){G=G.filter(Boolean);for(let Y=0;Y<G.length;Y+=1)ue(G[Y]);de=!1},d(F){F&&o(e),U&&U.d(),z&&z.d(),ee&&ee.d(),Se(G,F),ke=!1,xt(B)}}}function It(r,e,t){let{data:a}=e,c="",u="",n="",g=!1,f=!1,b=!1;const x=j=>/\S+@\S+\.\S+/.test(j),E=()=>{c||t(4,g=!0),u||t(5,f=!0),n||t(6,b=!0),x(u)||t(5,f=!0),!g&&!f&&!b&&(t(1,c=""),t(2,u=""),t(3,n=""))};function S(){c=this.value,t(1,c)}function $(){u=this.value,t(2,u)}function i(){n=this.value,t(3,n)}return r.$$set=j=>{"data"in j&&t(0,a=j.data)},[a,c,u,n,g,f,b,E,S,$,i]}class jt extends Te{constructor(e){super(),Ae(this,e,It,Nt,Ne,{data:0})}}function rt(r,e,t){const a=r.slice();return a[3]=e[t],a}function it(r,e,t){const a=r.slice();return a[6]=e[t],a[8]=t,a}function nt(r){let e,t=r[6].company+"",a,c,u,n,g;function f(){return r[2](r[8])}return{c(){e=d("button"),a=q(t),c=A(),this.h()},l(b){e=p(b,"BUTTON",{class:!0});var x=h(e);a=K(x,t),c=N(x),x.forEach(o),this.h()},h(){s(e,"class",u="whitespace-nowrap border-b-2 px-4 py-2 text-[13px] md:border-l-2 md:border-b-0 "+(r[1]===r[8]?"border-green text-green":"border-lightest-navy"))},m(b,x){se(b,e,x),l(e,a),l(e,c),n||(g=We(e,"click",f),n=!0)},p(b,x){r=b,x&1&&t!==(t=r[6].company+"")&&re(a,t),x&2&&u!==(u="whitespace-nowrap border-b-2 px-4 py-2 text-[13px] md:border-l-2 md:border-b-0 "+(r[1]===r[8]?"border-green text-green":"border-lightest-navy"))&&s(e,"class",u)},d(b){b&&o(e),n=!1,g()}}}function ot(r){let e,t,a,c,u=r[3]+"",n,g;return{c(){e=d("li"),t=d("span"),a=q("▹"),c=A(),n=q(u),g=A(),this.h()},l(f){e=p(f,"LI",{class:!0});var b=h(e);t=p(b,"SPAN",{class:!0});var x=h(t);a=K(x,"▹"),x.forEach(o),c=N(b),n=K(b,u),g=N(b),b.forEach(o),this.h()},h(){s(t,"class","absolute top-0 left-0 text-green"),s(e,"class","relative pl-7 text-base")},m(f,b){se(f,e,b),l(e,t),l(t,a),l(e,c),l(e,n),l(e,g)},p(f,b){b&3&&u!==(u=f[3]+"")&&re(n,u)},d(f){f&&o(e)}}}function Pt(r){var P,ie,he,ae,O,R,ne,J,oe,me,de,ke;let e,t,a,c,u,n,g=r[0].title+"",f,b,x,E,S,$,i,j=((he=(ie=(P=r[0])==null?void 0:P.experiences)==null?void 0:ie[r[1]])==null?void 0:he.position)+"",k,v,_,C,D=((R=(O=(ae=r[0])==null?void 0:ae.experiences)==null?void 0:O[r[1]])==null?void 0:R.company)+"",H,W,Q,le,M,X=((oe=(J=(ne=r[0])==null?void 0:ne.experiences)==null?void 0:J[r[1]])==null?void 0:oe.date)+"",I,y,w,m=r[0].experiences,T=[];for(let B=0;B<m.length;B+=1)T[B]=nt(it(r,m,B));let L=(ke=(de=(me=r[0])==null?void 0:me.experiences)==null?void 0:de[r[1]])==null?void 0:ke.workingAreas,V=[];for(let B=0;B<L.length;B+=1)V[B]=ot(rt(r,L,B));return{c(){e=d("section"),t=d("h2"),a=d("span"),c=q("02."),u=A(),n=d("span"),f=q(g),b=A(),x=d("div"),E=d("div");for(let B=0;B<T.length;B+=1)T[B].c();S=A(),$=d("div"),i=d("h3"),k=q(j),v=A(),_=d("a"),C=q("@ "),H=q(D),le=A(),M=d("p"),I=q(X),y=A(),w=d("ul");for(let B=0;B<V.length;B+=1)V[B].c();this.h()},l(B){e=p(B,"SECTION",{id:!0,class:!0});var U=h(e);t=p(U,"H2",{class:!0});var z=h(t);a=p(z,"SPAN",{class:!0});var ee=h(a);c=K(ee,"02."),ee.forEach(o),u=N(z),n=p(z,"SPAN",{class:!0});var fe=h(n);f=K(fe,g),fe.forEach(o),z.forEach(o),b=N(U),x=p(U,"DIV",{class:!0});var G=h(x);E=p(G,"DIV",{class:!0});var xe=h(E);for(let pe=0;pe<T.length;pe+=1)T[pe].l(xe);xe.forEach(o),S=N(G),$=p(G,"DIV",{class:!0});var F=h($);i=p(F,"H3",{class:!0});var Y=h(i);k=K(Y,j),v=N(Y),_=p(Y,"A",{href:!0,target:!0,"aria-label":!0,class:!0});var Z=h(_);C=K(Z,"@ "),H=K(Z,D),Z.forEach(o),Y.forEach(o),le=N(F),M=p(F,"P",{class:!0});var Ee=h(M);I=K(Ee,X),Ee.forEach(o),y=N(F),w=p(F,"UL",{class:!0});var Ie=h(w);for(let pe=0;pe<V.length;pe+=1)V[pe].l(Ie);Ie.forEach(o),F.forEach(o),G.forEach(o),U.forEach(o),this.h()},h(){var B,U,z,ee,fe,G;s(a,"class","text-2xl text-green"),s(n,"class","relative after:absolute after:left-full after:top-1/2 after:ml-4 after:h-[1px] after:w-[70px] after:bg-lightest-navy after:lg:w-[300px]"),s(t,"class","mb-10 flex items-center justify-start space-x-4 text-[clamp(26px,5vw,32px)] text-lightest-slate"),s(E,"class","mb-8"),s(_,"href",W=(z=(U=(B=r[0])==null?void 0:B.experiences)==null?void 0:U[r[1]])==null?void 0:z.website),s(_,"target","_blank"),s(_,"aria-label",Q="link to "+((G=(fe=(ee=r[0])==null?void 0:ee.experiences)==null?void 0:fe[r[1]])==null?void 0:G.company)),s(_,"class","text-green underline-offset-2 hover:underline"),s(i,"class","mb-0.5 text-[22px] font-medium text-lightest-slate"),s(M,"class","mt-2 font-mono text-[13px]"),s(w,"class","mt-6 space-y-2.5"),s($,"class","py-2.5 px-1 md:py-0"),s(x,"class","items-start justify-start md:flex md:space-x-4"),s(e,"id","experience"),s(e,"class","section-py mx-auto max-w-[700px] px-6")},m(B,U){se(B,e,U),l(e,t),l(t,a),l(a,c),l(t,u),l(t,n),l(n,f),l(e,b),l(e,x),l(x,E);for(let z=0;z<T.length;z+=1)T[z]&&T[z].m(E,null);l(x,S),l(x,$),l($,i),l(i,k),l(i,v),l(i,_),l(_,C),l(_,H),l($,le),l($,M),l(M,I),l($,y),l($,w);for(let z=0;z<V.length;z+=1)V[z]&&V[z].m(w,null)},p(B,[U]){var z,ee,fe,G,xe,F,Y,Z,Ee,Ie,pe,ye,He,Fe,$e,Ve,Be,Ce;if(U&1&&g!==(g=B[0].title+"")&&re(f,g),U&3){m=B[0].experiences;let te;for(te=0;te<m.length;te+=1){const je=it(B,m,te);T[te]?T[te].p(je,U):(T[te]=nt(je),T[te].c(),T[te].m(E,null))}for(;te<T.length;te+=1)T[te].d(1);T.length=m.length}if(U&3&&j!==(j=((fe=(ee=(z=B[0])==null?void 0:z.experiences)==null?void 0:ee[B[1]])==null?void 0:fe.position)+"")&&re(k,j),U&3&&D!==(D=((F=(xe=(G=B[0])==null?void 0:G.experiences)==null?void 0:xe[B[1]])==null?void 0:F.company)+"")&&re(H,D),U&3&&W!==(W=(Ee=(Z=(Y=B[0])==null?void 0:Y.experiences)==null?void 0:Z[B[1]])==null?void 0:Ee.website)&&s(_,"href",W),U&3&&Q!==(Q="link to "+((ye=(pe=(Ie=B[0])==null?void 0:Ie.experiences)==null?void 0:pe[B[1]])==null?void 0:ye.company))&&s(_,"aria-label",Q),U&3&&X!==(X=(($e=(Fe=(He=B[0])==null?void 0:He.experiences)==null?void 0:Fe[B[1]])==null?void 0:$e.date)+"")&&re(I,X),U&3){L=(Ce=(Be=(Ve=B[0])==null?void 0:Ve.experiences)==null?void 0:Be[B[1]])==null?void 0:Ce.workingAreas;let te;for(te=0;te<L.length;te+=1){const je=rt(B,L,te);V[te]?V[te].p(je,U):(V[te]=ot(je),V[te].c(),V[te].m(w,null))}for(;te<V.length;te+=1)V[te].d(1);V.length=L.length}},i:we,o:we,d(B){B&&o(e),Se(T,B),Se(V,B)}}}function Dt(r,e,t){let{data:a}=e,c=0;const u=n=>{t(1,c=n)};return r.$$set=n=>{"data"in n&&t(0,a=n.data)},[a,c,u]}class Vt extends Te{constructor(e){super(),Ae(this,e,Dt,Pt,Ne,{data:0})}}function Bt(r){let e,t,a,c,u,n;return{c(){e=Pe("svg"),t=Pe("title"),a=q("External Link"),c=Pe("path"),u=Pe("polyline"),n=Pe("line"),this.h()},l(g){e=De(g,"svg",{xmlns:!0,role:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var f=h(e);t=De(f,"title",{});var b=h(t);a=K(b,"External Link"),b.forEach(o),c=De(f,"path",{d:!0}),h(c).forEach(o),u=De(f,"polyline",{points:!0}),h(u).forEach(o),n=De(f,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),h(n).forEach(o),f.forEach(o),this.h()},h(){s(c,"d","M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"),s(u,"points","15 3 21 3 21 9"),s(n,"x1","10"),s(n,"y1","14"),s(n,"x2","21"),s(n,"y2","3"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"role","img"),s(e,"viewBox","0 0 24 24"),s(e,"fill","none"),s(e,"stroke","currentColor"),s(e,"stroke-width","2"),s(e,"stroke-linecap","round"),s(e,"stroke-linejoin","round"),s(e,"class",r[0])},m(g,f){se(g,e,f),l(e,t),l(t,a),l(e,c),l(e,u),l(e,n)},p(g,[f]){f&1&&s(e,"class",g[0])},i:we,o:we,d(g){g&&o(e)}}}function Ct(r,e,t){let{className:a=""}=e;return r.$$set=c=>{"className"in c&&t(0,a=c.className)},[a]}class wt extends Te{constructor(e){super(),Ae(this,e,Ct,Bt,Ne,{className:0})}}const Mt=""+new URL("../assets/syself.com.cfea4913.png",import.meta.url).href,ct=[{tag:"Featured",name:"Dr. Berg Website",description:"Dr. Berg's Health Products and Keto Diet Website is a comprehensive platform that offers a wide range of health products, valuable insights on the keto diet, and information on various health issues. Developed with SvelteKit, Typescript, and Tailwind CSS, the website delivers a seamless and informative user experience. The project's primary objective was to create an all-encompassing website that provides users with a holistic approach to health and wellness. The Dr. Berg's Health Products and Keto Diet Website exemplifies your expertise in creating an encompassing and dynamic web platform. By skillfully integrating SvelteKit, Typescript, Tailwind CSS, and APIs, you've crafted a website that provides valuable health insights, a diverse range of products, and interactive BMI calculators to support users' health and wellness journeys. This project showcases your dedication to building user-friendly and informative web experiences that contribute to a healthier lifestyle",image:{alt:"Dr. Berg Website",src:$t},url:"https://www.drberg.com",github:"https://github.com/Muhammad-Rubel",madeAt:"SR Web Studio",technologies:["SvelteKit","TailwindCSS","TypeScript"]},{tag:"Featured",name:"Syself Website",description:"Syself is the leading modern European cloud infrastructure service provider, offering cutting-edge solutions to businesses and individuals. The Syself website, developed with SvelteKit, Typescript, and Tailwind CSS, showcases a state-of-the-art user interface that highlights the company's commitment to excellence and innovation in cloud services. With a focus on modern UI design, responsiveness, and a powerful calculator tool, the website provides a seamless and informative experience to users seeking advanced cloud solutions.",image:{alt:"Syself Website",src:Mt},url:"https://syself.com",github:"https://github.com/Muhammad-Rubel",madeAt:"Fiverr",technologies:["SvelteKit","TailwindCSS","TypeScript"]},{tag:"Featured",name:"Aaron N Brock Portfolio",description:"The Aaron N. Brock Portfolio Website is a visually stunning showcase of the client's work and accomplishments. Built with cutting-edge technologies, including SvelteKit, Typescript, and Tailwind CSS, the website offers a seamless and captivating user experience. The project's primary focus was to create a modern and dynamic portfolio that not only highlights the client's expertise but also stands out as a work of art in itself.One of the standout features of the website is the captivating SVG animations that bring life to the user interface. These animations enhance the visual appeal and leave a lasting impression on visitors. The challenge of implementing background blob SVGs was masterfully conquered, creating a unique and eye-catching backdrop that complements the overall design.",image:{alt:"Aaron N Brock Portfolio",src:kt},url:"https://aaronnbrock.com",github:"https://github.com/Muhammad-Rubel",madeAt:"Fiverr",technologies:["SvelteKit","TailwindCSS","TypeScript","Blob SVGs"]},{tag:"Featured",name:"Bona Botse Website",description:"The Bona Botse Motivation and Mind Freshness Training Website is an inspiring platform dedicated to offering top-notch training and coaching services in motivation and mental well-being. Built with SvelteKit, Typescript, and Tailwind CSS, the website delivers a seamless user experience and a visually captivating interface. The project's main objective was to create an empowering website that effectively communicates the importance of motivation and maintaining a fresh and positive mindset.",image:{alt:"Bona Botse Website",src:yt},url:"https://bonabotse.co.za",github:"https://github.com/Muhammad-Rubel",madeAt:"Fiverr",technologies:["SvelteKit","TailwindCSS","TypeScript"]}];function ft(r,e,t){const a=r.slice();return a[1]=e[t],a[3]=t,a}function ut(r,e,t){const a=r.slice();return a[4]=e[t],a}function ht(r){let e,t=r[4]+"",a,c;return{c(){e=d("li"),a=q(t),c=A(),this.h()},l(u){e=p(u,"LI",{class:!0});var n=h(e);a=K(n,t),c=N(n),n.forEach(o),this.h()},h(){s(e,"class","mr-1.5 mb-1 rounded-full bg-green-tint px-3 text-[13px] font-medium text-green/80 last-of-type:mr-0")},m(u,n){se(u,e,n),l(e,a),l(e,c)},p:we,d(u){u&&o(e)}}}function dt(r){let e,t,a,c,u,n,g,f,b,x=r[1].tag+"",E,S,$,i=r[1].name+"",j,k,v,_,C=r[1].madeAt+"",D,H,W,Q,le=r[1].description+"",M,X,I,y,w,m,T,L,V,P,ie,he,ae=r[1].technologies,O=[];for(let R=0;R<ae.length;R+=1)O[R]=ht(ut(r,ae,R));return T=new bt({props:{className:"h-5 w-5"}}),P=new wt({props:{className:"h-5 w-5"}}),{c(){e=d("div"),t=d("div"),a=d("img"),u=A(),n=d("span"),g=A(),f=d("div"),b=d("p"),E=q(x),S=A(),$=d("h3"),j=q(i),k=A(),v=d("p"),_=q("Made at: "),D=q(C),H=A(),W=d("p"),Q=d("span"),M=q(le),X=A(),I=d("ul");for(let R=0;R<O.length;R+=1)O[R].c();y=A(),w=d("div"),m=d("a"),ge(T.$$.fragment),L=A(),V=d("a"),ge(P.$$.fragment),ie=A(),this.h()},l(R){e=p(R,"DIV",{class:!0});var ne=h(e);t=p(ne,"DIV",{class:!0});var J=h(t);a=p(J,"IMG",{src:!0,alt:!0,class:!0}),u=N(J),n=p(J,"SPAN",{class:!0}),h(n).forEach(o),J.forEach(o),g=N(ne),f=p(ne,"DIV",{class:!0});var oe=h(f);b=p(oe,"P",{class:!0});var me=h(b);E=K(me,x),me.forEach(o),S=N(oe),$=p(oe,"H3",{class:!0});var de=h($);j=K(de,i),de.forEach(o),k=N(oe),v=p(oe,"P",{class:!0});var ke=h(v);_=K(ke,"Made at: "),D=K(ke,C),ke.forEach(o),H=N(oe),W=p(oe,"P",{class:!0});var B=h(W);Q=p(B,"SPAN",{class:!0});var U=h(Q);M=K(U,le),U.forEach(o),B.forEach(o),X=N(oe),I=p(oe,"UL",{class:!0});var z=h(I);for(let xe=0;xe<O.length;xe+=1)O[xe].l(z);z.forEach(o),y=N(oe),w=p(oe,"DIV",{class:!0});var ee=h(w);m=p(ee,"A",{href:!0,"aria-label":!0,class:!0});var fe=h(m);be(T.$$.fragment,fe),fe.forEach(o),L=N(ee),V=p(ee,"A",{href:!0,"aria-label":!0,class:!0});var G=h(V);be(P.$$.fragment,G),G.forEach(o),ee.forEach(o),oe.forEach(o),ie=N(ne),ne.forEach(o),this.h()},h(){ze(a.src,c=r[1].image.src)||s(a,"src",c),s(a,"alt",r[1].image.alt),s(a,"class","h-full w-full object-cover object-center bg-blend-color-dodge lg:h-auto"),s(n,"class","absolute top-0 left-0 z-0 h-full w-full bg-navy bg-opacity-30"),s(t,"class","absolute top-0 left-0 z-[-1] h-full w-full justify-center lg:flex lg:w-[55%] "+((r[3]+1)%2!==0?"":"lg:right-0 lg:left-auto")),s(b,"class","mb-2.5 font-mono text-[13px] text-green"),s($,"class","mb-2.5 text-[clamp(24px,_5vw,_28px)] text-white lg:mb-5"),s(v,"class","mb-2.5 font-mono text-[13px]"),s(Q,"class","line-clamp-6"),s(W,"class","rounded py-5 text-base text-light-slate lg:bg-light-navy lg:p-6"),s(I,"class","flex flex-wrap justify-start lg:mt-6 "+((r[3]+1)%2===0?"":"lg:justify-end")),s(m,"href",r[1].github),s(m,"aria-label","link to github"),s(m,"class","custom-transition text-light-slate hover:text-green"),s(V,"href",r[1].url),s(V,"aria-label","link to "+r[1].name),s(V,"class","custom-transition text-light-slate hover:text-green"),s(w,"class","mt-5 flex items-center justify-start space-x-6 "+((r[3]+1)%2===0?"":"lg:justify-end")),s(f,"class","relative bg-navy bg-opacity-90 p-6 py-16 md:px-10 lg:w-[55%] lg:bg-transparent lg:py-4 "+((r[3]+1)%2===0?"":"ml-auto lg:text-right")),s(e,"class","relative w-full shadow-xl lg:shadow-none")},m(R,ne){se(R,e,ne),l(e,t),l(t,a),l(t,u),l(t,n),l(e,g),l(e,f),l(f,b),l(b,E),l(f,S),l(f,$),l($,j),l(f,k),l(f,v),l(v,_),l(v,D),l(f,H),l(f,W),l(W,Q),l(Q,M),l(f,X),l(f,I);for(let J=0;J<O.length;J+=1)O[J]&&O[J].m(I,null);l(f,y),l(f,w),l(w,m),ve(T,m,null),l(w,L),l(w,V),ve(P,V,null),l(e,ie),he=!0},p(R,ne){if(ne&0){ae=R[1].technologies;let J;for(J=0;J<ae.length;J+=1){const oe=ut(R,ae,J);O[J]?O[J].p(oe,ne):(O[J]=ht(oe),O[J].c(),O[J].m(I,null))}for(;J<O.length;J+=1)O[J].d(1);O.length=ae.length}},i(R){he||(ce(T.$$.fragment,R),ce(P.$$.fragment,R),he=!0)},o(R){ue(T.$$.fragment,R),ue(P.$$.fragment,R),he=!1},d(R){R&&o(e),Se(O,R),_e(T),_e(P)}}}function Lt(r){let e,t,a,c,u,n,g=r[0].title+"",f,b,x,E,S,$=ct.filter(pt),i=[];for(let k=0;k<$.length;k+=1)i[k]=dt(ft(r,$,k));const j=k=>ue(i[k],1,1,()=>{i[k]=null});return{c(){e=d("section"),t=d("h2"),a=d("span"),c=q("03."),u=A(),n=d("span"),f=q(g),b=A(),x=d("div"),E=d("div");for(let k=0;k<i.length;k+=1)i[k].c();this.h()},l(k){e=p(k,"SECTION",{id:!0,class:!0});var v=h(e);t=p(v,"H2",{class:!0});var _=h(t);a=p(_,"SPAN",{class:!0});var C=h(a);c=K(C,"03."),C.forEach(o),u=N(_),n=p(_,"SPAN",{class:!0});var D=h(n);f=K(D,g),D.forEach(o),_.forEach(o),b=N(v),x=p(v,"DIV",{class:!0});var H=h(x);E=p(H,"DIV",{class:!0});var W=h(E);for(let Q=0;Q<i.length;Q+=1)i[Q].l(W);W.forEach(o),H.forEach(o),v.forEach(o),this.h()},h(){s(a,"class","text-2xl text-green"),s(n,"class","relative after:absolute after:left-full after:top-1/2 after:ml-4 after:h-[1px] after:w-[70px] after:bg-lightest-navy after:lg:w-[300px]"),s(t,"class","mb-10 flex items-center justify-start space-x-4 text-[clamp(26px,5vw,32px)] text-lightest-slate"),s(E,"class","mb-8 space-y-8 md:space-y-16"),s(x,"class","flex items-start justify-start space-x-4"),s(e,"id","work"),s(e,"class","custom-container section-py")},m(k,v){se(k,e,v),l(e,t),l(t,a),l(a,c),l(t,u),l(t,n),l(n,f),l(e,b),l(e,x),l(x,E);for(let _=0;_<i.length;_+=1)i[_]&&i[_].m(E,null);S=!0},p(k,[v]){if((!S||v&1)&&g!==(g=k[0].title+"")&&re(f,g),v&0){$=ct.filter(pt);let _;for(_=0;_<$.length;_+=1){const C=ft(k,$,_);i[_]?(i[_].p(C,v),ce(i[_],1)):(i[_]=dt(C),i[_].c(),ce(i[_],1),i[_].m(E,null))}for(Ke(),_=$.length;_<i.length;_+=1)j(_);Oe()}},i(k){if(!S){for(let v=0;v<$.length;v+=1)ce(i[v]);S=!0}},o(k){i=i.filter(Boolean);for(let v=0;v<i.length;v+=1)ue(i[v]);S=!1},d(k){k&&o(e),Se(i,k)}}}const pt=r=>r.tag==="Featured";function Ht(r,e,t){let{data:a}=e;return r.$$set=c=>{"data"in c&&t(0,a=c.data)},[a]}class Ft extends Te{constructor(e){super(),Ae(this,e,Ht,Lt,Ne,{data:0})}}function Wt(r){var M,X;let e,t,a,c=r[0].topTitle+"",u,n,g,f=r[0].name+"",b,x,E,S=r[0].subtitle+"",$,i,j,k=r[0].description+"",v,_,C,D,H=((X=(M=r[0])==null?void 0:M.email)==null?void 0:X.label)+"",W,Q,le;return{c(){e=d("section"),t=d("div"),a=d("h2"),u=q(c),n=A(),g=d("h2"),b=q(f),x=A(),E=d("h1"),$=q(S),i=A(),j=d("p"),v=q(k),_=A(),C=d("a"),D=q("✉ "),W=q(H),this.h()},l(I){e=p(I,"SECTION",{id:!0,class:!0});var y=h(e);t=p(y,"DIV",{});var w=h(t);a=p(w,"H2",{class:!0});var m=h(a);u=K(m,c),m.forEach(o),n=N(w),g=p(w,"H2",{class:!0});var T=h(g);b=K(T,f),T.forEach(o),x=N(w),E=p(w,"H1",{class:!0});var L=h(E);$=K(L,S),L.forEach(o),i=N(w),j=p(w,"P",{class:!0});var V=h(j);v=K(V,k),V.forEach(o),_=N(w),C=p(w,"A",{href:!0,"aria-label":!0,class:!0});var P=h(C);D=K(P,"✉ "),W=K(P,H),P.forEach(o),w.forEach(o),y.forEach(o),this.h()},h(){var I,y,w,m;s(a,"class","mb-2 text-[clamp(14px,_5vw,_16px)] text-green"),s(g,"class","big-heading font-semibold leading-[1.1] text-lightest-slate"),s(E,"class","big-heading font-semibold leading-[1.25] text-slate"),s(j,"class","mt-5 max-w-[540px] text-lg leading-[1.5]"),s(C,"href",Q="mailto:"+((y=(I=r[0])==null?void 0:I.email)==null?void 0:y.url)||""),s(C,"aria-label",le="Email to "+((m=(w=r[0])==null?void 0:w.email)==null?void 0:m.label)),s(C,"class","btn-primary mt-12 inline-block"),s(e,"id","home"),s(e,"class","custom-container flex h-screen items-center justify-center")},m(I,y){se(I,e,y),l(e,t),l(t,a),l(a,u),l(t,n),l(t,g),l(g,b),l(t,x),l(t,E),l(E,$),l(t,i),l(t,j),l(j,v),l(t,_),l(t,C),l(C,D),l(C,W)},p(I,[y]){var w,m,T,L,V,P;y&1&&c!==(c=I[0].topTitle+"")&&re(u,c),y&1&&f!==(f=I[0].name+"")&&re(b,f),y&1&&S!==(S=I[0].subtitle+"")&&re($,S),y&1&&k!==(k=I[0].description+"")&&re(v,k),y&1&&H!==(H=((m=(w=I[0])==null?void 0:w.email)==null?void 0:m.label)+"")&&re(W,H),y&1&&Q!==(Q="mailto:"+((L=(T=I[0])==null?void 0:T.email)==null?void 0:L.url)||"")&&s(C,"href",Q),y&1&&le!==(le="Email to "+((P=(V=I[0])==null?void 0:V.email)==null?void 0:P.label))&&s(C,"aria-label",le)},i:we,o:we,d(I){I&&o(e)}}}function qt(r,e,t){let{data:a}=e;return r.$$set=c=>{"data"in c&&t(0,a=c.data)},[a]}class Kt extends Te{constructor(e){super(),Ae(this,e,qt,Wt,Ne,{data:0})}}function Ot(r){let e,t,a,c;return{c(){e=Pe("svg"),t=Pe("title"),a=q("Folder"),c=Pe("path"),this.h()},l(u){e=De(u,"svg",{xmlns:!0,role:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var n=h(e);t=De(n,"title",{});var g=h(t);a=K(g,"Folder"),g.forEach(o),c=De(n,"path",{d:!0}),h(c).forEach(o),n.forEach(o),this.h()},h(){s(c,"d","M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"role","img"),s(e,"viewBox","0 0 24 24"),s(e,"fill","none"),s(e,"stroke","currentColor"),s(e,"stroke-width","1"),s(e,"stroke-linecap","round"),s(e,"stroke-linejoin","round"),s(e,"class",r[0])},m(u,n){se(u,e,n),l(e,t),l(t,a),l(e,c)},p(u,[n]){n&1&&s(e,"class",u[0])},i:we,o:we,d(u){u&&o(e)}}}function Ut(r,e,t){let{className:a=""}=e;return r.$$set=c=>{"className"in c&&t(0,a=c.className)},[a]}class zt extends Te{constructor(e){super(),Ae(this,e,Ut,Ot,Ne,{className:0})}}function mt(r,e,t){const a=r.slice();return a[1]=e[t],a[3]=t,a}function gt(r,e,t){const a=r.slice();return a[4]=e[t],a}function vt(r){let e,t=r[4]+"",a,c;return{c(){e=d("li"),a=q(t),c=A(),this.h()},l(u){e=p(u,"LI",{class:!0});var n=h(e);a=K(n,t),c=N(n),n.forEach(o),this.h()},h(){s(e,"class","mr-2.5 mb-1 text-[13px] font-medium text-light-slate last-of-type:mr-0")},m(u,n){se(u,e,n),l(e,a),l(e,c)},p(u,n){n&1&&t!==(t=u[4]+"")&&re(a,t)},d(u){u&&o(e)}}}function _t(r){let e,t,a,c,u,n,g,f,b,x,E,S,$,i,j,k,v=r[1].name+"",_,C,D,H,W=r[1].description+"",Q,le,M,X,I;c=new zt({props:{className:"h-10 w-10 text-green"}}),f=new bt({props:{className:"h-5 w-5"}}),S=new wt({props:{className:"h-5 w-5"}});let y=r[1].technologies,w=[];for(let m=0;m<y.length;m+=1)w[m]=vt(gt(r,y,m));return{c(){e=d("div"),t=d("div"),a=d("div"),ge(c.$$.fragment),u=A(),n=d("div"),g=d("a"),ge(f.$$.fragment),x=A(),E=d("a"),ge(S.$$.fragment),i=A(),j=d("h3"),k=d("a"),_=q(v),D=A(),H=d("p"),Q=q(W),le=A(),M=d("ul");for(let m=0;m<w.length;m+=1)w[m].c();X=A(),this.h()},l(m){e=p(m,"DIV",{class:!0});var T=h(e);t=p(T,"DIV",{});var L=h(t);a=p(L,"DIV",{});var V=h(a);be(c.$$.fragment,V),V.forEach(o),u=N(L),n=p(L,"DIV",{class:!0});var P=h(n);g=p(P,"A",{href:!0,class:!0});var ie=h(g);be(f.$$.fragment,ie),ie.forEach(o),x=N(P),E=p(P,"A",{href:!0,class:!0});var he=h(E);be(S.$$.fragment,he),he.forEach(o),P.forEach(o),L.forEach(o),i=N(T),j=p(T,"H3",{class:!0});var ae=h(j);k=p(ae,"A",{href:!0});var O=h(k);_=K(O,v),O.forEach(o),ae.forEach(o),D=N(T),H=p(T,"P",{class:!0});var R=h(H);Q=K(R,W),R.forEach(o),le=N(T),M=p(T,"UL",{class:!0});var ne=h(M);for(let J=0;J<w.length;J+=1)w[J].l(ne);ne.forEach(o),X=N(T),T.forEach(o),this.h()},h(){s(g,"href",b=r[1].github),s(g,"class","custom-transition text-light-slate hover:text-green"),s(E,"href",$=r[1].url),s(E,"class","custom-transition text-light-slate hover:text-green"),s(n,"class","flex items-center justify-end space-x-4"),s(k,"href",C=r[1].url),s(j,"class","custom-transition mb-2.5 text-[22px] font-semibold text-light-slate hover:text-green"),s(H,"class","font-light-slate text-base"),s(M,"class","flex flex-wrap justify-start lg:mt-6 "),s(e,"class","bg-lightest-navy py-8 px-7 ")},m(m,T){se(m,e,T),l(e,t),l(t,a),ve(c,a,null),l(t,u),l(t,n),l(n,g),ve(f,g,null),l(n,x),l(n,E),ve(S,E,null),l(e,i),l(e,j),l(j,k),l(k,_),l(e,D),l(e,H),l(H,Q),l(e,le),l(e,M);for(let L=0;L<w.length;L+=1)w[L]&&w[L].m(M,null);l(e,X),I=!0},p(m,T){if((!I||T&1&&b!==(b=m[1].github))&&s(g,"href",b),(!I||T&1&&$!==($=m[1].url))&&s(E,"href",$),(!I||T&1)&&v!==(v=m[1].name+"")&&re(_,v),(!I||T&1&&C!==(C=m[1].url))&&s(k,"href",C),(!I||T&1)&&W!==(W=m[1].description+"")&&re(Q,W),T&1){y=m[1].technologies;let L;for(L=0;L<y.length;L+=1){const V=gt(m,y,L);w[L]?w[L].p(V,T):(w[L]=vt(V),w[L].c(),w[L].m(M,null))}for(;L<w.length;L+=1)w[L].d(1);w.length=y.length}},i(m){I||(ce(c.$$.fragment,m),ce(f.$$.fragment,m),ce(S.$$.fragment,m),I=!0)},o(m){ue(c.$$.fragment,m),ue(f.$$.fragment,m),ue(S.$$.fragment,m),I=!1},d(m){m&&o(e),_e(c),_e(f),_e(S),Se(w,m)}}}function Gt(r){var k;let e,t,a=r[0].title+"",c,u,n,g=r[0].viewAchiveLink.label+"",f,b,x,E,S,$=(k=r[0])==null?void 0:k.projects,i=[];for(let v=0;v<$.length;v+=1)i[v]=_t(mt(r,$,v));const j=v=>ue(i[v],1,1,()=>{i[v]=null});return{c(){e=d("section"),t=d("h2"),c=q(a),u=A(),n=d("a"),f=q(g),x=A(),E=d("div");for(let v=0;v<i.length;v+=1)i[v].c();this.h()},l(v){e=p(v,"SECTION",{id:!0,class:!0});var _=h(e);t=p(_,"H2",{class:!0});var C=h(t);c=K(C,a),C.forEach(o),u=N(_),n=p(_,"A",{href:!0,"aria-label":!0,class:!0});var D=h(n);f=K(D,g),D.forEach(o),x=N(_),E=p(_,"DIV",{class:!0});var H=h(E);for(let W=0;W<i.length;W+=1)i[W].l(H);H.forEach(o),_.forEach(o),this.h()},h(){s(t,"class","mb-2.5 text-center text-[clamp(24px,5vw,32px)] text-lightest-slate"),s(n,"href",""),s(n,"aria-label",b="link to "+r[0].viewAchiveLink.label),s(n,"class","text-center font-mono text-sm text-green hover:underline"),s(E,"class","grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"),s(e,"id","otherWorks"),s(e,"class","custom-container section-py")},m(v,_){se(v,e,_),l(e,t),l(t,c),l(e,u),l(e,n),l(n,f),l(e,x),l(e,E);for(let C=0;C<i.length;C+=1)i[C]&&i[C].m(E,null);S=!0},p(v,[_]){var C;if((!S||_&1)&&a!==(a=v[0].title+"")&&re(c,a),(!S||_&1)&&g!==(g=v[0].viewAchiveLink.label+"")&&re(f,g),(!S||_&1&&b!==(b="link to "+v[0].viewAchiveLink.label))&&s(n,"aria-label",b),_&1){$=(C=v[0])==null?void 0:C.projects;let D;for(D=0;D<$.length;D+=1){const H=mt(v,$,D);i[D]?(i[D].p(H,_),ce(i[D],1)):(i[D]=_t(H),i[D].c(),ce(i[D],1),i[D].m(E,null))}for(Ke(),D=$.length;D<i.length;D+=1)j(D);Oe()}},i(v){if(!S){for(let _=0;_<$.length;_+=1)ce(i[_]);S=!0}},o(v){i=i.filter(Boolean);for(let _=0;_<i.length;_+=1)ue(i[_]);S=!1},d(v){v&&o(e),Se(i,v)}}}function Rt(r,e,t){let{data:a}=e;return r.$$set=c=>{"data"in c&&t(0,a=c.data)},[a]}class Qt extends Te{constructor(e){super(),Ae(this,e,Rt,Gt,Ne,{data:0})}}function Xt(r){let e,t,a,c,u,n,g,f,b,x,E,S,$;return t=new Kt({props:{data:Le.hero}}),c=new At({props:{data:Le.about}}),n=new Vt({props:{data:Le.experience}}),f=new Ft({props:{data:Le.featuredProjects}}),x=new Qt({props:{data:Le.noteworthyProjects}}),S=new jt({props:{data:Le.contact}}),{c(){e=A(),ge(t.$$.fragment),a=A(),ge(c.$$.fragment),u=A(),ge(n.$$.fragment),g=A(),ge(f.$$.fragment),b=A(),ge(x.$$.fragment),E=A(),ge(S.$$.fragment),this.h()},l(i){Et("svelte-1pmz572",document.head).forEach(o),e=N(i),be(t.$$.fragment,i),a=N(i),be(c.$$.fragment,i),u=N(i),be(n.$$.fragment,i),g=N(i),be(f.$$.fragment,i),b=N(i),be(x.$$.fragment,i),E=N(i),be(S.$$.fragment,i),this.h()},h(){document.title="Mohammad Robel | Portfolio"},m(i,j){se(i,e,j),ve(t,i,j),se(i,a,j),ve(c,i,j),se(i,u,j),ve(n,i,j),se(i,g,j),ve(f,i,j),se(i,b,j),ve(x,i,j),se(i,E,j),ve(S,i,j),$=!0},p:we,i(i){$||(ce(t.$$.fragment,i),ce(c.$$.fragment,i),ce(n.$$.fragment,i),ce(f.$$.fragment,i),ce(x.$$.fragment,i),ce(S.$$.fragment,i),$=!0)},o(i){ue(t.$$.fragment,i),ue(c.$$.fragment,i),ue(n.$$.fragment,i),ue(f.$$.fragment,i),ue(x.$$.fragment,i),ue(S.$$.fragment,i),$=!1},d(i){i&&o(e),_e(t,i),i&&o(a),_e(c,i),i&&o(u),_e(n,i),i&&o(g),_e(f,i),i&&o(b),_e(x,i),i&&o(E),_e(S,i)}}}class Zt extends Te{constructor(e){super(),Ae(this,e,null,Xt,Ne,{})}}export{Zt as default};
