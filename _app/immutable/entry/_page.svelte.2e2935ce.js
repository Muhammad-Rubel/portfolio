import{S as je,i as De,s as Be,k as h,q as L,a as A,l as d,m as f,r as W,h as i,c as P,n as s,M as Oe,b as re,C as l,u as ne,D as we,G as Ie,N as Ve,O as qe,g as he,v as Ue,f as Ge,d as me,P as mt,x as Qe,y as Ee,z as Te,A as ye,B as ke,E as He,F as Le,Q as gt}from"../chunks/index.dd423551.js";import{D as vt,A as _t,B as bt,G as wt,h as We}from"../chunks/index.c18f6e87.js";function Xe(r,e,t){const a=r.slice();return a[1]=e[t],a}function Je(r,e,t){const a=r.slice();return a[1]=e[t],a}function Ye(r){let e,t=r[1]+"",a,o;return{c(){e=h("p"),a=L(t),o=A(),this.h()},l(p){e=d(p,"P",{class:!0});var n=f(e);a=W(n,t),o=P(n),n.forEach(i),this.h()},h(){s(e,"class","mb-4 text-lg")},m(p,n){re(p,e,n),l(e,a),l(e,o)},p(p,n){n&1&&t!==(t=p[1]+"")&&ne(a,t)},d(p){p&&i(e)}}}function Ze(r){let e,t,a,o,p,n,_=r[1].label+"",c,m,g,E;return{c(){e=h("li"),t=h("a"),a=h("span"),o=L("▹"),p=A(),n=h("span"),c=L(_),E=A(),this.h()},l(u){e=d(u,"LI",{});var v=f(e);t=d(v,"A",{href:!0,target:!0,"aria-label":!0,class:!0});var y=f(t);a=d(y,"SPAN",{class:!0});var q=f(a);o=W(q,"▹"),q.forEach(i),p=P(y),n=d(y,"SPAN",{});var x=f(n);c=W(x,_),x.forEach(i),y.forEach(i),E=P(v),v.forEach(i),this.h()},h(){s(a,"class","text-green"),s(t,"href",m=r[1].url),s(t,"target","_blank"),s(t,"aria-label",g="link to "+r[1].label),s(t,"class","custom-transition w-max text-base hover:text-green")},m(u,v){re(u,e,v),l(e,t),l(t,a),l(a,o),l(t,p),l(t,n),l(n,c),l(e,E)},p(u,v){v&1&&_!==(_=u[1].label+"")&&ne(c,_),v&1&&m!==(m=u[1].url)&&s(t,"href",m),v&1&&g!==(g="link to "+u[1].label)&&s(t,"aria-label",g)},d(u){u&&i(e)}}}function xt(r){let e,t,a,o,p,n,_=r[0].title+"",c,m,g,E,u,v,y,q,x,T,k,U,G,R,K,J,ae=r[0].description,V=[];for(let b=0;b<ae.length;b+=1)V[b]=Ye(Je(r,ae,b));let X=r[0].expertiseAreas,N=[];for(let b=0;b<X.length;b+=1)N[b]=Ze(Xe(r,X,b));return{c(){e=h("section"),t=h("h2"),a=h("span"),o=L("01."),p=A(),n=h("span"),c=L(_),m=A(),g=h("div"),E=h("div");for(let b=0;b<V.length;b+=1)V[b].c();u=A(),v=h("ul");for(let b=0;b<N.length;b+=1)N[b].c();y=A(),q=h("div"),x=h("div"),T=h("img"),G=A(),R=h("span"),K=A(),J=h("span"),this.h()},l(b){e=d(b,"SECTION",{id:!0,class:!0});var w=f(e);t=d(w,"H2",{class:!0});var S=f(t);a=d(S,"SPAN",{class:!0});var B=f(a);o=W(B,"01."),B.forEach(i),p=P(S),n=d(S,"SPAN",{class:!0});var te=f(n);c=W(te,_),te.forEach(i),S.forEach(i),m=P(w),g=d(w,"DIV",{class:!0});var j=f(g);E=d(j,"DIV",{class:!0});var $=f(E);for(let F=0;F<V.length;F+=1)V[F].l($);u=P($),v=d($,"UL",{class:!0});var ie=f(v);for(let F=0;F<N.length;F+=1)N[F].l(ie);ie.forEach(i),$.forEach(i),y=P(j),q=d(j,"DIV",{class:!0});var de=f(q);x=d(de,"DIV",{class:!0});var le=f(x);T=d(le,"IMG",{src:!0,alt:!0,class:!0}),G=P(le),R=d(le,"SPAN",{class:!0}),f(R).forEach(i),K=P(le),J=d(le,"SPAN",{class:!0}),f(J).forEach(i),le.forEach(i),de.forEach(i),j.forEach(i),w.forEach(i),this.h()},h(){var b,w,S,B;s(a,"class","text-2xl text-green"),s(n,"class","relative after:absolute after:left-full after:top-1/2 after:ml-4 after:h-[1px] after:w-[150px] after:bg-lightest-navy after:lg:w-[300px]"),s(t,"class","mb-10 flex items-center justify-start space-x-4 text-[clamp(26px,5vw,32px)]"),s(v,"class","mt-5 grid grid-cols-2 gap-2"),s(E,"class","lg:w-3/5"),Oe(T.src,k=(w=(b=r[0])==null?void 0:b.image)==null?void 0:w.src)||s(T,"src",k),s(T,"alt",U=(B=(S=r[0])==null?void 0:S.image)==null?void 0:B.alt),s(T,"class","h-full w-full rounded object-cover object-center"),s(R,"class","absolute top-5 left-5 z-[-1] h-full w-full rounded border-2 border-green transition-all duration-300 ease-in-out group-hover:top-3 group-hover:left-3"),s(J,"class","absolute top-0 left-0 z-0 h-full w-full bg-navy bg-opacity-30"),s(x,"class","group relative h-60 w-48 rounded md:h-64 md:w-52 lg:h-[370px] lg:w-[300px]"),s(q,"class","mt-12 flex justify-center lg:mt-0 lg:w-2/5"),s(g,"class","items-start justify-between lg:flex lg:space-x-10"),s(e,"id","about"),s(e,"class","custom-container section-py")},m(b,w){re(b,e,w),l(e,t),l(t,a),l(a,o),l(t,p),l(t,n),l(n,c),l(e,m),l(e,g),l(g,E);for(let S=0;S<V.length;S+=1)V[S]&&V[S].m(E,null);l(E,u),l(E,v);for(let S=0;S<N.length;S+=1)N[S]&&N[S].m(v,null);l(g,y),l(g,q),l(q,x),l(x,T),l(x,G),l(x,R),l(x,K),l(x,J)},p(b,[w]){var S,B,te,j;if(w&1&&_!==(_=b[0].title+"")&&ne(c,_),w&1){ae=b[0].description;let $;for($=0;$<ae.length;$+=1){const ie=Je(b,ae,$);V[$]?V[$].p(ie,w):(V[$]=Ye(ie),V[$].c(),V[$].m(E,u))}for(;$<V.length;$+=1)V[$].d(1);V.length=ae.length}if(w&1){X=b[0].expertiseAreas;let $;for($=0;$<X.length;$+=1){const ie=Xe(b,X,$);N[$]?N[$].p(ie,w):(N[$]=Ze(ie),N[$].c(),N[$].m(v,null))}for(;$<N.length;$+=1)N[$].d(1);N.length=X.length}w&1&&!Oe(T.src,k=(B=(S=b[0])==null?void 0:S.image)==null?void 0:B.src)&&s(T,"src",k),w&1&&U!==(U=(j=(te=b[0])==null?void 0:te.image)==null?void 0:j.alt)&&s(T,"alt",U)},i:we,o:we,d(b){b&&i(e),Ie(V,b),Ie(N,b)}}}function Et(r,e,t){let{data:a}=e;return r.$$set=o=>{"data"in o&&t(0,a=o.data)},[a]}class yt extends je{constructor(e){super(),De(this,e,Et,xt,Be,{data:0})}}function et(r,e,t){const a=r.slice();return a[13]=e[t],a}function tt(r){let e,t;return{c(){e=h("span"),t=L("This field is required"),this.h()},l(a){e=d(a,"SPAN",{class:!0});var o=f(e);t=W(o,"This field is required"),o.forEach(i),this.h()},h(){s(e,"class","absolute top-full right-0 text-xs text-pink/80")},m(a,o){re(a,e,o),l(e,t)},d(a){a&&i(e)}}}function lt(r){let e,t;return{c(){e=h("span"),t=L("This field is required"),this.h()},l(a){e=d(a,"SPAN",{class:!0});var o=f(e);t=W(o,"This field is required"),o.forEach(i),this.h()},h(){s(e,"class","absolute top-full right-0 text-xs text-pink/80")},m(a,o){re(a,e,o),l(e,t)},d(a){a&&i(e)}}}function at(r){let e,t;return{c(){e=h("span"),t=L("This field is required"),this.h()},l(a){e=d(a,"SPAN",{class:!0});var o=f(e);t=W(o,"This field is required"),o.forEach(i),this.h()},h(){s(e,"class","absolute top-full right-0 text-xs text-pink/80")},m(a,o){re(a,e,o),l(e,t)},d(a){a&&i(e)}}}function st(r){let e,t,a,o,p;var n=r[13].icon;function _(c){return{props:{className:"h-full w-full hover:text-green transform hover:scale-110 custom-transition"}}}return n&&(t=Qe(n,_())),{c(){e=h("a"),t&&Ee(t.$$.fragment),a=A(),this.h()},l(c){e=d(c,"A",{href:!0,target:!0,"aria-label":!0,class:!0});var m=f(e);t&&Te(t.$$.fragment,m),a=P(m),m.forEach(i),this.h()},h(){s(e,"href",o=r[13].link),s(e,"target","_blank"),s(e,"aria-label","link to social media"),s(e,"class","flex h-6 w-6 items-center justify-center")},m(c,m){re(c,e,m),t&&ye(t,e,null),l(e,a),p=!0},p(c,m){if(m&1&&n!==(n=c[13].icon)){if(t){Ue();const g=t;me(g.$$.fragment,1,0,()=>{ke(g,1)}),Ge()}n?(t=Qe(n,_()),Ee(t.$$.fragment),he(t.$$.fragment,1),ye(t,e,a)):t=null}(!p||m&1&&o!==(o=c[13].link))&&s(e,"href",o)},i(c){p||(t&&he(t.$$.fragment,c),p=!0)},o(c){t&&me(t.$$.fragment,c),p=!1},d(c){c&&i(e),t&&ke(t)}}}function kt(r){let e,t,a,o,p,n,_=r[0].title+"",c,m,g,E,u,v=r[0].description+"",y,q,x,T=r[0].formTitle+"",k,U,G,R,K,J,ae,V,X,N,b,w,S,B,te,j,$=r[0].buttonLabel+"",ie,de,le,F,O,oe=r[0].socialMediaTitle+"",Y,se,pe,ue,be,I,M=r[4]&&tt(),C=r[5]&&lt(),Z=r[6]&&at(),ce=r[0].socialMedia,H=[];for(let D=0;D<ce.length;D+=1)H[D]=st(et(r,ce,D));const ge=D=>me(H[D],1,1,()=>{H[D]=null});return{c(){e=h("section"),t=h("h2"),a=h("span"),o=L("04."),p=A(),n=h("span"),c=L(_),m=A(),g=h("div"),E=h("div"),u=h("p"),y=L(v),q=A(),x=h("p"),k=L(T),U=A(),G=h("div"),R=h("div"),K=h("input"),J=A(),M&&M.c(),ae=A(),V=h("div"),X=h("input"),N=A(),C&&C.c(),b=A(),w=h("div"),S=h("textarea"),B=A(),Z&&Z.c(),te=A(),j=h("button"),ie=L($),de=A(),le=h("div"),F=h("div"),O=h("p"),Y=L(oe),se=A(),pe=h("div");for(let D=0;D<H.length;D+=1)H[D].c();this.h()},l(D){e=d(D,"SECTION",{id:!0,class:!0});var z=f(e);t=d(z,"H2",{class:!0});var Q=f(t);a=d(Q,"SPAN",{class:!0});var ve=f(a);o=W(ve,"04."),ve.forEach(i),p=P(Q),n=d(Q,"SPAN",{class:!0});var Se=f(n);c=W(Se,_),Se.forEach(i),Q.forEach(i),m=P(z),g=d(z,"DIV",{class:!0});var fe=f(g);E=d(fe,"DIV",{class:!0});var xe=f(E);u=d(xe,"P",{class:!0});var Me=f(u);y=W(Me,v),Me.forEach(i),q=P(xe),x=d(xe,"P",{class:!0});var Ce=f(x);k=W(Ce,T),Ce.forEach(i),U=P(xe),G=d(xe,"DIV",{class:!0});var _e=f(G);R=d(_e,"DIV",{class:!0});var Ae=f(R);K=d(Ae,"INPUT",{type:!0,placeholder:!0,name:!0,class:!0}),J=P(Ae),M&&M.l(Ae),Ae.forEach(i),ae=P(_e),V=d(_e,"DIV",{class:!0});var Pe=f(V);X=d(Pe,"INPUT",{type:!0,name:!0,placeholder:!0,class:!0}),N=P(Pe),C&&C.l(Pe),Pe.forEach(i),b=P(_e),w=d(_e,"DIV",{class:!0});var Ne=f(w);S=d(Ne,"TEXTAREA",{placeholder:!0,class:!0}),f(S).forEach(i),B=P(Ne),Z&&Z.l(Ne),Ne.forEach(i),te=P(_e),j=d(_e,"BUTTON",{class:!0});var ee=f(j);ie=W(ee,$),ee.forEach(i),_e.forEach(i),xe.forEach(i),de=P(fe),le=d(fe,"DIV",{class:!0});var $e=f(le);F=d($e,"DIV",{class:!0});var Fe=f(F);O=d(Fe,"P",{class:!0});var Re=f(O);Y=W(Re,oe),Re.forEach(i),se=P(Fe),pe=d(Fe,"DIV",{class:!0});var ze=f(pe);for(let Ke=0;Ke<H.length;Ke+=1)H[Ke].l(ze);ze.forEach(i),Fe.forEach(i),$e.forEach(i),fe.forEach(i),z.forEach(i),this.h()},h(){s(a,"class","text-2xl text-green"),s(n,"class","relative text-lightest-slate after:absolute after:left-full after:top-1/2 after:ml-4 after:h-[1px] after:w-[150px] after:bg-lightest-navy after:lg:w-[300px]"),s(t,"class","mb-10 flex items-center justify-start space-x-4 text-[clamp(26px,5vw,32px)]"),s(u,"class","mb-4 text-lg"),s(x,"class","mb-4 text-lg"),s(K,"type","text"),s(K,"placeholder","Name*"),s(K,"name","name"),s(K,"class","custom-transition w-full rounded border-2 border-light-navy bg-light-navy py-2 px-4 text-base text-light-slate focus:border-green/40"),s(R,"class","relative"),s(X,"type","email"),s(X,"name","name"),s(X,"placeholder","Email*"),s(X,"class","custom-transition w-full rounded border-2 border-light-navy bg-light-navy py-2 px-4 text-base text-light-slate focus:border-green/40"),s(V,"class","relative"),s(S,"placeholder","Message*"),s(S,"class","custom-transition h-32 w-full rounded border-2 border-light-navy bg-light-navy py-2 px-4 text-base text-light-slate focus:border-green/40"),s(w,"class","relative"),s(j,"class","btn-primary custom-transition px-6 text-base hover:bg-green-tint"),s(G,"class","space-y-6"),s(E,"class","lg:w-3/5"),s(O,"class","mb-4 text-lg"),s(pe,"class","flex items-start justify-start space-x-4"),s(F,"class","rounded"),s(le,"class","mt-12 flex justify-center lg:mt-0 lg:w-2/5"),s(g,"class","items-start justify-between lg:flex lg:space-x-16"),s(e,"id","contact"),s(e,"class","custom-container section-py")},m(D,z){re(D,e,z),l(e,t),l(t,a),l(a,o),l(t,p),l(t,n),l(n,c),l(e,m),l(e,g),l(g,E),l(E,u),l(u,y),l(E,q),l(E,x),l(x,k),l(E,U),l(E,G),l(G,R),l(R,K),Ve(K,r[1]),l(R,J),M&&M.m(R,null),l(G,ae),l(G,V),l(V,X),Ve(X,r[2]),l(V,N),C&&C.m(V,null),l(G,b),l(G,w),l(w,S),Ve(S,r[3]),l(w,B),Z&&Z.m(w,null),l(G,te),l(G,j),l(j,ie),l(g,de),l(g,le),l(le,F),l(F,O),l(O,Y),l(F,se),l(F,pe);for(let Q=0;Q<H.length;Q+=1)H[Q]&&H[Q].m(pe,null);ue=!0,be||(I=[qe(K,"input",r[8]),qe(X,"input",r[9]),qe(S,"input",r[10]),qe(j,"click",r[7])],be=!0)},p(D,[z]){if((!ue||z&1)&&_!==(_=D[0].title+"")&&ne(c,_),(!ue||z&1)&&v!==(v=D[0].description+"")&&ne(y,v),(!ue||z&1)&&T!==(T=D[0].formTitle+"")&&ne(k,T),z&2&&K.value!==D[1]&&Ve(K,D[1]),D[4]?M||(M=tt(),M.c(),M.m(R,null)):M&&(M.d(1),M=null),z&4&&X.value!==D[2]&&Ve(X,D[2]),D[5]?C||(C=lt(),C.c(),C.m(V,null)):C&&(C.d(1),C=null),z&8&&Ve(S,D[3]),D[6]?Z||(Z=at(),Z.c(),Z.m(w,null)):Z&&(Z.d(1),Z=null),(!ue||z&1)&&$!==($=D[0].buttonLabel+"")&&ne(ie,$),(!ue||z&1)&&oe!==(oe=D[0].socialMediaTitle+"")&&ne(Y,oe),z&1){ce=D[0].socialMedia;let Q;for(Q=0;Q<ce.length;Q+=1){const ve=et(D,ce,Q);H[Q]?(H[Q].p(ve,z),he(H[Q],1)):(H[Q]=st(ve),H[Q].c(),he(H[Q],1),H[Q].m(pe,null))}for(Ue(),Q=ce.length;Q<H.length;Q+=1)ge(Q);Ge()}},i(D){if(!ue){for(let z=0;z<ce.length;z+=1)he(H[z]);ue=!0}},o(D){H=H.filter(Boolean);for(let z=0;z<H.length;z+=1)me(H[z]);ue=!1},d(D){D&&i(e),M&&M.d(),C&&C.d(),Z&&Z.d(),Ie(H,D),be=!1,mt(I)}}}function St(r,e,t){let{data:a}=e,o="",p="",n="",_=!1,c=!1,m=!1;const g=q=>/\S+@\S+\.\S+/.test(q),E=()=>{o||t(4,_=!0),p||t(5,c=!0),n||t(6,m=!0),g(p)||t(5,c=!0),!_&&!c&&!m&&(t(1,o=""),t(2,p=""),t(3,n=""))};function u(){o=this.value,t(1,o)}function v(){p=this.value,t(2,p)}function y(){n=this.value,t(3,n)}return r.$$set=q=>{"data"in q&&t(0,a=q.data)},[a,o,p,n,_,c,m,E,u,v,y]}class $t extends je{constructor(e){super(),De(this,e,St,kt,Be,{data:0})}}function rt(r,e,t){const a=r.slice();return a[3]=e[t],a}function it(r,e,t){const a=r.slice();return a[6]=e[t],a[8]=t,a}function nt(r){let e,t=r[6].company+"",a,o,p,n,_;function c(){return r[2](r[8])}return{c(){e=h("button"),a=L(t),o=A(),this.h()},l(m){e=d(m,"BUTTON",{class:!0});var g=f(e);a=W(g,t),o=P(g),g.forEach(i),this.h()},h(){s(e,"class",p="whitespace-nowrap border-b-2 px-4 py-2 text-[13px] md:border-l-2 md:border-b-0 "+(r[1]===r[8]?"border-green text-green":"border-lightest-navy"))},m(m,g){re(m,e,g),l(e,a),l(e,o),n||(_=qe(e,"click",c),n=!0)},p(m,g){r=m,g&1&&t!==(t=r[6].company+"")&&ne(a,t),g&2&&p!==(p="whitespace-nowrap border-b-2 px-4 py-2 text-[13px] md:border-l-2 md:border-b-0 "+(r[1]===r[8]?"border-green text-green":"border-lightest-navy"))&&s(e,"class",p)},d(m){m&&i(e),n=!1,_()}}}function ot(r){let e,t,a,o,p=r[3]+"",n,_;return{c(){e=h("li"),t=h("span"),a=L("▹"),o=A(),n=L(p),_=A(),this.h()},l(c){e=d(c,"LI",{class:!0});var m=f(e);t=d(m,"SPAN",{class:!0});var g=f(t);a=W(g,"▹"),g.forEach(i),o=P(m),n=W(m,p),_=P(m),m.forEach(i),this.h()},h(){s(t,"class","absolute top-0 left-0 text-green"),s(e,"class","relative pl-7 text-base")},m(c,m){re(c,e,m),l(e,t),l(t,a),l(e,o),l(e,n),l(e,_)},p(c,m){m&3&&p!==(p=c[3]+"")&&ne(n,p)},d(c){c&&i(e)}}}function Tt(r){var $,ie,de,le,F,O,oe,Y,se,pe,ue,be;let e,t,a,o,p,n,_=r[0].title+"",c,m,g,E,u,v,y,q=((de=(ie=($=r[0])==null?void 0:$.experiences)==null?void 0:ie[r[1]])==null?void 0:de.position)+"",x,T,k,U,G=((O=(F=(le=r[0])==null?void 0:le.experiences)==null?void 0:F[r[1]])==null?void 0:O.company)+"",R,K,J,ae,V,X=((se=(Y=(oe=r[0])==null?void 0:oe.experiences)==null?void 0:Y[r[1]])==null?void 0:se.date)+"",N,b,w,S=r[0].experiences,B=[];for(let I=0;I<S.length;I+=1)B[I]=nt(it(r,S,I));let te=(be=(ue=(pe=r[0])==null?void 0:pe.experiences)==null?void 0:ue[r[1]])==null?void 0:be.workingAreas,j=[];for(let I=0;I<te.length;I+=1)j[I]=ot(rt(r,te,I));return{c(){e=h("section"),t=h("h2"),a=h("span"),o=L("02."),p=A(),n=h("span"),c=L(_),m=A(),g=h("div"),E=h("div");for(let I=0;I<B.length;I+=1)B[I].c();u=A(),v=h("div"),y=h("h3"),x=L(q),T=A(),k=h("a"),U=L("@ "),R=L(G),ae=A(),V=h("p"),N=L(X),b=A(),w=h("ul");for(let I=0;I<j.length;I+=1)j[I].c();this.h()},l(I){e=d(I,"SECTION",{id:!0,class:!0});var M=f(e);t=d(M,"H2",{class:!0});var C=f(t);a=d(C,"SPAN",{class:!0});var Z=f(a);o=W(Z,"02."),Z.forEach(i),p=P(C),n=d(C,"SPAN",{class:!0});var ce=f(n);c=W(ce,_),ce.forEach(i),C.forEach(i),m=P(M),g=d(M,"DIV",{class:!0});var H=f(g);E=d(H,"DIV",{class:!0});var ge=f(E);for(let fe=0;fe<B.length;fe+=1)B[fe].l(ge);ge.forEach(i),u=P(H),v=d(H,"DIV",{class:!0});var D=f(v);y=d(D,"H3",{class:!0});var z=f(y);x=W(z,q),T=P(z),k=d(z,"A",{href:!0,target:!0,"aria-label":!0,class:!0});var Q=f(k);U=W(Q,"@ "),R=W(Q,G),Q.forEach(i),z.forEach(i),ae=P(D),V=d(D,"P",{class:!0});var ve=f(V);N=W(ve,X),ve.forEach(i),b=P(D),w=d(D,"UL",{class:!0});var Se=f(w);for(let fe=0;fe<j.length;fe+=1)j[fe].l(Se);Se.forEach(i),D.forEach(i),H.forEach(i),M.forEach(i),this.h()},h(){var I,M,C,Z,ce,H;s(a,"class","text-2xl text-green"),s(n,"class","relative after:absolute after:left-full after:top-1/2 after:ml-4 after:h-[1px] after:w-[70px] after:bg-lightest-navy after:lg:w-[300px]"),s(t,"class","mb-10 flex items-center justify-start space-x-4 text-[clamp(26px,5vw,32px)] text-lightest-slate"),s(E,"class","mb-8"),s(k,"href",K=(C=(M=(I=r[0])==null?void 0:I.experiences)==null?void 0:M[r[1]])==null?void 0:C.website),s(k,"target","_blank"),s(k,"aria-label",J="link to "+((H=(ce=(Z=r[0])==null?void 0:Z.experiences)==null?void 0:ce[r[1]])==null?void 0:H.company)),s(k,"class","text-green underline-offset-2 hover:underline"),s(y,"class","mb-0.5 text-[22px] font-medium text-lightest-slate"),s(V,"class","mt-2 font-mono text-[13px]"),s(w,"class","mt-6 space-y-2.5"),s(v,"class","py-2.5 px-1 md:py-0"),s(g,"class","items-start justify-start md:flex md:space-x-4"),s(e,"id","experience"),s(e,"class","section-py mx-auto max-w-[700px] px-6")},m(I,M){re(I,e,M),l(e,t),l(t,a),l(a,o),l(t,p),l(t,n),l(n,c),l(e,m),l(e,g),l(g,E);for(let C=0;C<B.length;C+=1)B[C]&&B[C].m(E,null);l(g,u),l(g,v),l(v,y),l(y,x),l(y,T),l(y,k),l(k,U),l(k,R),l(v,ae),l(v,V),l(V,N),l(v,b),l(v,w);for(let C=0;C<j.length;C+=1)j[C]&&j[C].m(w,null)},p(I,[M]){var C,Z,ce,H,ge,D,z,Q,ve,Se,fe,xe,Me,Ce,_e,Ae,Pe,Ne;if(M&1&&_!==(_=I[0].title+"")&&ne(c,_),M&3){S=I[0].experiences;let ee;for(ee=0;ee<S.length;ee+=1){const $e=it(I,S,ee);B[ee]?B[ee].p($e,M):(B[ee]=nt($e),B[ee].c(),B[ee].m(E,null))}for(;ee<B.length;ee+=1)B[ee].d(1);B.length=S.length}if(M&3&&q!==(q=((ce=(Z=(C=I[0])==null?void 0:C.experiences)==null?void 0:Z[I[1]])==null?void 0:ce.position)+"")&&ne(x,q),M&3&&G!==(G=((D=(ge=(H=I[0])==null?void 0:H.experiences)==null?void 0:ge[I[1]])==null?void 0:D.company)+"")&&ne(R,G),M&3&&K!==(K=(ve=(Q=(z=I[0])==null?void 0:z.experiences)==null?void 0:Q[I[1]])==null?void 0:ve.website)&&s(k,"href",K),M&3&&J!==(J="link to "+((xe=(fe=(Se=I[0])==null?void 0:Se.experiences)==null?void 0:fe[I[1]])==null?void 0:xe.company))&&s(k,"aria-label",J),M&3&&X!==(X=((_e=(Ce=(Me=I[0])==null?void 0:Me.experiences)==null?void 0:Ce[I[1]])==null?void 0:_e.date)+"")&&ne(N,X),M&3){te=(Ne=(Pe=(Ae=I[0])==null?void 0:Ae.experiences)==null?void 0:Pe[I[1]])==null?void 0:Ne.workingAreas;let ee;for(ee=0;ee<te.length;ee+=1){const $e=rt(I,te,ee);j[ee]?j[ee].p($e,M):(j[ee]=ot($e),j[ee].c(),j[ee].m(w,null))}for(;ee<j.length;ee+=1)j[ee].d(1);j.length=te.length}},i:we,o:we,d(I){I&&i(e),Ie(B,I),Ie(j,I)}}}function At(r,e,t){let{data:a}=e,o=0;const p=n=>{t(1,o=n)};return r.$$set=n=>{"data"in n&&t(0,a=n.data)},[a,o,p]}class Pt extends je{constructor(e){super(),De(this,e,At,Tt,Be,{data:0})}}function Nt(r){let e,t,a,o,p,n;return{c(){e=He("svg"),t=He("title"),a=L("External Link"),o=He("path"),p=He("polyline"),n=He("line"),this.h()},l(_){e=Le(_,"svg",{xmlns:!0,role:!0,viewBox:!0,fill:!0,stroke:!0,"stroke-width":!0,"stroke-linecap":!0,"stroke-linejoin":!0,class:!0});var c=f(e);t=Le(c,"title",{});var m=f(t);a=W(m,"External Link"),m.forEach(i),o=Le(c,"path",{d:!0}),f(o).forEach(i),p=Le(c,"polyline",{points:!0}),f(p).forEach(i),n=Le(c,"line",{x1:!0,y1:!0,x2:!0,y2:!0}),f(n).forEach(i),c.forEach(i),this.h()},h(){s(o,"d","M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"),s(p,"points","15 3 21 3 21 9"),s(n,"x1","10"),s(n,"y1","14"),s(n,"x2","21"),s(n,"y2","3"),s(e,"xmlns","http://www.w3.org/2000/svg"),s(e,"role","img"),s(e,"viewBox","0 0 24 24"),s(e,"fill","none"),s(e,"stroke","currentColor"),s(e,"stroke-width","2"),s(e,"stroke-linecap","round"),s(e,"stroke-linejoin","round"),s(e,"class",r[0])},m(_,c){re(_,e,c),l(e,t),l(t,a),l(e,o),l(e,p),l(e,n)},p(_,[c]){c&1&&s(e,"class",_[0])},i:we,o:we,d(_){_&&i(e)}}}function It(r,e,t){let{className:a=""}=e;return r.$$set=o=>{"className"in o&&t(0,a=o.className)},[a]}class jt extends je{constructor(e){super(),De(this,e,It,Nt,Be,{className:0})}}const Dt=""+new URL("../assets/syself.com.cfea4913.png",import.meta.url).href,ct=[{tag:"Featured",name:"Dr. Berg Website",description:"Dr. Berg's Health Products and Keto Diet Website is a comprehensive platform that offers a wide range of health products, valuable insights on the keto diet, and information on various health issues. Developed with SvelteKit, Typescript, and Tailwind CSS, the website delivers a seamless and informative user experience. The project's primary objective was to create an all-encompassing website that provides users with a holistic approach to health and wellness. The Dr. Berg's Health Products and Keto Diet Website exemplifies your expertise in creating an encompassing and dynamic web platform. By skillfully integrating SvelteKit, Typescript, Tailwind CSS, and APIs, you've crafted a website that provides valuable health insights, a diverse range of products, and interactive BMI calculators to support users' health and wellness journeys. This project showcases your dedication to building user-friendly and informative web experiences that contribute to a healthier lifestyle",image:{alt:"Dr. Berg Website",src:vt},url:"https://www.drberg.com",github:"https://github.com/Muhammad-Rubel",madeAt:"SR Web Studio",technologies:["SvelteKit","TailwindCSS","TypeScript"]},{tag:"Featured",name:"Syself Website",description:"Syself is the leading modern European cloud infrastructure service provider, offering cutting-edge solutions to businesses and individuals. The Syself website, developed with SvelteKit, Typescript, and Tailwind CSS, showcases a state-of-the-art user interface that highlights the company's commitment to excellence and innovation in cloud services. With a focus on modern UI design, responsiveness, and a powerful calculator tool, the website provides a seamless and informative experience to users seeking advanced cloud solutions.",image:{alt:"Syself Website",src:Dt},url:"https://syself.com",github:"https://github.com/Muhammad-Rubel",madeAt:"Fiverr",technologies:["SvelteKit","TailwindCSS","TypeScript"]},{tag:"Featured",name:"Aaron N Brock Portfolio",description:"The Aaron N. Brock Portfolio Website is a visually stunning showcase of the client's work and accomplishments. Built with cutting-edge technologies, including SvelteKit, Typescript, and Tailwind CSS, the website offers a seamless and captivating user experience. The project's primary focus was to create a modern and dynamic portfolio that not only highlights the client's expertise but also stands out as a work of art in itself.One of the standout features of the website is the captivating SVG animations that bring life to the user interface. These animations enhance the visual appeal and leave a lasting impression on visitors. The challenge of implementing background blob SVGs was masterfully conquered, creating a unique and eye-catching backdrop that complements the overall design.",image:{alt:"Aaron N Brock Portfolio",src:_t},url:"https://aaronnbrock.com",github:"https://github.com/Muhammad-Rubel",madeAt:"Fiverr",technologies:["SvelteKit","TailwindCSS","TypeScript","Blob SVGs"]},{tag:"Featured",name:"Bona Botse Website",description:"The Bona Botse Motivation and Mind Freshness Training Website is an inspiring platform dedicated to offering top-notch training and coaching services in motivation and mental well-being. Built with SvelteKit, Typescript, and Tailwind CSS, the website delivers a seamless user experience and a visually captivating interface. The project's main objective was to create an empowering website that effectively communicates the importance of motivation and maintaining a fresh and positive mindset.",image:{alt:"Bona Botse Website",src:bt},url:"https://bonabotse.co.za",github:"https://github.com/Muhammad-Rubel",madeAt:"Fiverr",technologies:["SvelteKit","TailwindCSS","TypeScript"]}];function ut(r,e,t){const a=r.slice();return a[1]=e[t],a[3]=t,a}function ft(r,e,t){const a=r.slice();return a[4]=e[t],a}function ht(r){let e,t=r[4]+"",a,o;return{c(){e=h("li"),a=L(t),o=A(),this.h()},l(p){e=d(p,"LI",{class:!0});var n=f(e);a=W(n,t),o=P(n),n.forEach(i),this.h()},h(){s(e,"class","mr-1.5 mb-1 rounded-full bg-green-tint px-3 text-[13px] font-medium text-green/80 last-of-type:mr-0")},m(p,n){re(p,e,n),l(e,a),l(e,o)},p:we,d(p){p&&i(e)}}}function dt(r){let e,t,a,o,p,n,_,c,m,g=r[1].tag+"",E,u,v,y=r[1].name+"",q,x,T,k,U=r[1].madeAt+"",G,R,K,J,ae=r[1].description+"",V,X,N,b,w,S,B,te,j,$,ie,de,le=r[1].technologies,F=[];for(let O=0;O<le.length;O+=1)F[O]=ht(ft(r,le,O));return B=new wt({props:{className:"h-5 w-5"}}),$=new jt({props:{className:"h-5 w-5"}}),{c(){e=h("div"),t=h("div"),a=h("img"),p=A(),n=h("span"),_=A(),c=h("div"),m=h("p"),E=L(g),u=A(),v=h("h3"),q=L(y),x=A(),T=h("p"),k=L("Made at: "),G=L(U),R=A(),K=h("p"),J=h("span"),V=L(ae),X=A(),N=h("ul");for(let O=0;O<F.length;O+=1)F[O].c();b=A(),w=h("div"),S=h("a"),Ee(B.$$.fragment),te=A(),j=h("a"),Ee($.$$.fragment),ie=A(),this.h()},l(O){e=d(O,"DIV",{class:!0});var oe=f(e);t=d(oe,"DIV",{class:!0});var Y=f(t);a=d(Y,"IMG",{src:!0,alt:!0,class:!0}),p=P(Y),n=d(Y,"SPAN",{class:!0}),f(n).forEach(i),Y.forEach(i),_=P(oe),c=d(oe,"DIV",{class:!0});var se=f(c);m=d(se,"P",{class:!0});var pe=f(m);E=W(pe,g),pe.forEach(i),u=P(se),v=d(se,"H3",{class:!0});var ue=f(v);q=W(ue,y),ue.forEach(i),x=P(se),T=d(se,"P",{class:!0});var be=f(T);k=W(be,"Made at: "),G=W(be,U),be.forEach(i),R=P(se),K=d(se,"P",{class:!0});var I=f(K);J=d(I,"SPAN",{class:!0});var M=f(J);V=W(M,ae),M.forEach(i),I.forEach(i),X=P(se),N=d(se,"UL",{class:!0});var C=f(N);for(let ge=0;ge<F.length;ge+=1)F[ge].l(C);C.forEach(i),b=P(se),w=d(se,"DIV",{class:!0});var Z=f(w);S=d(Z,"A",{href:!0,"aria-label":!0,class:!0});var ce=f(S);Te(B.$$.fragment,ce),ce.forEach(i),te=P(Z),j=d(Z,"A",{href:!0,"aria-label":!0,class:!0});var H=f(j);Te($.$$.fragment,H),H.forEach(i),Z.forEach(i),se.forEach(i),ie=P(oe),oe.forEach(i),this.h()},h(){Oe(a.src,o=r[1].image.src)||s(a,"src",o),s(a,"alt",r[1].image.alt),s(a,"class","h-full w-full object-cover object-center bg-blend-color-dodge lg:h-auto"),s(n,"class","absolute top-0 left-0 z-0 h-full w-full bg-navy bg-opacity-30"),s(t,"class","absolute top-0 left-0 z-[-1] h-full w-full justify-center lg:flex lg:w-[55%] "+((r[3]+1)%2!==0?"":"lg:right-0 lg:left-auto")),s(m,"class","mb-2.5 font-mono text-[13px] text-green"),s(v,"class","mb-2.5 text-[clamp(24px,_5vw,_28px)] text-white lg:mb-5"),s(T,"class","mb-2.5 font-mono text-[13px]"),s(J,"class","line-clamp-6"),s(K,"class","rounded py-5 text-base text-light-slate lg:bg-light-navy lg:p-6"),s(N,"class","flex flex-wrap justify-start lg:mt-6 "+((r[3]+1)%2===0?"":"lg:justify-end")),s(S,"href",r[1].github),s(S,"aria-label","link to github"),s(S,"class","custom-transition text-light-slate hover:text-green"),s(j,"href",r[1].url),s(j,"aria-label","link to "+r[1].name),s(j,"class","custom-transition text-light-slate hover:text-green"),s(w,"class","mt-5 flex items-center justify-start space-x-6 "+((r[3]+1)%2===0?"":"lg:justify-end")),s(c,"class","relative bg-navy bg-opacity-90 p-6 py-16 md:px-10 lg:w-[55%] lg:bg-transparent lg:py-4 "+((r[3]+1)%2===0?"":"ml-auto lg:text-right")),s(e,"class","relative w-full shadow-xl lg:shadow-none")},m(O,oe){re(O,e,oe),l(e,t),l(t,a),l(t,p),l(t,n),l(e,_),l(e,c),l(c,m),l(m,E),l(c,u),l(c,v),l(v,q),l(c,x),l(c,T),l(T,k),l(T,G),l(c,R),l(c,K),l(K,J),l(J,V),l(c,X),l(c,N);for(let Y=0;Y<F.length;Y+=1)F[Y]&&F[Y].m(N,null);l(c,b),l(c,w),l(w,S),ye(B,S,null),l(w,te),l(w,j),ye($,j,null),l(e,ie),de=!0},p(O,oe){if(oe&0){le=O[1].technologies;let Y;for(Y=0;Y<le.length;Y+=1){const se=ft(O,le,Y);F[Y]?F[Y].p(se,oe):(F[Y]=ht(se),F[Y].c(),F[Y].m(N,null))}for(;Y<F.length;Y+=1)F[Y].d(1);F.length=le.length}},i(O){de||(he(B.$$.fragment,O),he($.$$.fragment,O),de=!0)},o(O){me(B.$$.fragment,O),me($.$$.fragment,O),de=!1},d(O){O&&i(e),Ie(F,O),ke(B),ke($)}}}function Bt(r){let e,t,a,o,p,n,_=r[0].title+"",c,m,g,E,u,v=ct.filter(pt),y=[];for(let x=0;x<v.length;x+=1)y[x]=dt(ut(r,v,x));const q=x=>me(y[x],1,1,()=>{y[x]=null});return{c(){e=h("section"),t=h("h2"),a=h("span"),o=L("03."),p=A(),n=h("span"),c=L(_),m=A(),g=h("div"),E=h("div");for(let x=0;x<y.length;x+=1)y[x].c();this.h()},l(x){e=d(x,"SECTION",{id:!0,class:!0});var T=f(e);t=d(T,"H2",{class:!0});var k=f(t);a=d(k,"SPAN",{class:!0});var U=f(a);o=W(U,"03."),U.forEach(i),p=P(k),n=d(k,"SPAN",{class:!0});var G=f(n);c=W(G,_),G.forEach(i),k.forEach(i),m=P(T),g=d(T,"DIV",{class:!0});var R=f(g);E=d(R,"DIV",{class:!0});var K=f(E);for(let J=0;J<y.length;J+=1)y[J].l(K);K.forEach(i),R.forEach(i),T.forEach(i),this.h()},h(){s(a,"class","text-2xl text-green"),s(n,"class","relative after:absolute after:left-full after:top-1/2 after:ml-4 after:h-[1px] after:w-[70px] after:bg-lightest-navy after:lg:w-[300px]"),s(t,"class","mb-10 flex items-center justify-start space-x-4 text-[clamp(26px,5vw,32px)] text-lightest-slate"),s(E,"class","mb-8 space-y-8 md:space-y-16"),s(g,"class","flex items-start justify-start space-x-4"),s(e,"id","work"),s(e,"class","custom-container section-py")},m(x,T){re(x,e,T),l(e,t),l(t,a),l(a,o),l(t,p),l(t,n),l(n,c),l(e,m),l(e,g),l(g,E);for(let k=0;k<y.length;k+=1)y[k]&&y[k].m(E,null);u=!0},p(x,[T]){if((!u||T&1)&&_!==(_=x[0].title+"")&&ne(c,_),T&0){v=ct.filter(pt);let k;for(k=0;k<v.length;k+=1){const U=ut(x,v,k);y[k]?(y[k].p(U,T),he(y[k],1)):(y[k]=dt(U),y[k].c(),he(y[k],1),y[k].m(E,null))}for(Ue(),k=v.length;k<y.length;k+=1)q(k);Ge()}},i(x){if(!u){for(let T=0;T<v.length;T+=1)he(y[T]);u=!0}},o(x){y=y.filter(Boolean);for(let T=0;T<y.length;T+=1)me(y[T]);u=!1},d(x){x&&i(e),Ie(y,x)}}}const pt=r=>r.tag==="Featured";function Vt(r,e,t){let{data:a}=e;return r.$$set=o=>{"data"in o&&t(0,a=o.data)},[a]}class Mt extends je{constructor(e){super(),De(this,e,Vt,Bt,Be,{data:0})}}function Ct(r){var V,X;let e,t,a,o=r[0].topTitle+"",p,n,_,c=r[0].name+"",m,g,E,u=r[0].subtitle+"",v,y,q,x=r[0].description+"",T,k,U,G,R=((X=(V=r[0])==null?void 0:V.email)==null?void 0:X.label)+"",K,J,ae;return{c(){e=h("section"),t=h("div"),a=h("h2"),p=L(o),n=A(),_=h("h2"),m=L(c),g=A(),E=h("h1"),v=L(u),y=A(),q=h("p"),T=L(x),k=A(),U=h("a"),G=L("✉ "),K=L(R),this.h()},l(N){e=d(N,"SECTION",{id:!0,class:!0});var b=f(e);t=d(b,"DIV",{});var w=f(t);a=d(w,"H2",{class:!0});var S=f(a);p=W(S,o),S.forEach(i),n=P(w),_=d(w,"H2",{class:!0});var B=f(_);m=W(B,c),B.forEach(i),g=P(w),E=d(w,"H1",{class:!0});var te=f(E);v=W(te,u),te.forEach(i),y=P(w),q=d(w,"P",{class:!0});var j=f(q);T=W(j,x),j.forEach(i),k=P(w),U=d(w,"A",{href:!0,"aria-label":!0,class:!0});var $=f(U);G=W($,"✉ "),K=W($,R),$.forEach(i),w.forEach(i),b.forEach(i),this.h()},h(){var N,b,w,S;s(a,"class","mb-2 text-[clamp(14px,_5vw,_16px)] text-green"),s(_,"class","big-heading font-semibold leading-[1.1] text-lightest-slate"),s(E,"class","big-heading font-semibold leading-[1.25] text-slate"),s(q,"class","mt-5 max-w-[540px] text-lg leading-[1.5]"),s(U,"href",J="mailto:"+((b=(N=r[0])==null?void 0:N.email)==null?void 0:b.url)||""),s(U,"aria-label",ae="Email to "+((S=(w=r[0])==null?void 0:w.email)==null?void 0:S.label)),s(U,"class","btn-primary mt-12 inline-block"),s(e,"id","home"),s(e,"class","custom-container flex h-screen items-center justify-center")},m(N,b){re(N,e,b),l(e,t),l(t,a),l(a,p),l(t,n),l(t,_),l(_,m),l(t,g),l(t,E),l(E,v),l(t,y),l(t,q),l(q,T),l(t,k),l(t,U),l(U,G),l(U,K)},p(N,[b]){var w,S,B,te,j,$;b&1&&o!==(o=N[0].topTitle+"")&&ne(p,o),b&1&&c!==(c=N[0].name+"")&&ne(m,c),b&1&&u!==(u=N[0].subtitle+"")&&ne(v,u),b&1&&x!==(x=N[0].description+"")&&ne(T,x),b&1&&R!==(R=((S=(w=N[0])==null?void 0:w.email)==null?void 0:S.label)+"")&&ne(K,R),b&1&&J!==(J="mailto:"+((te=(B=N[0])==null?void 0:B.email)==null?void 0:te.url)||"")&&s(U,"href",J),b&1&&ae!==(ae="Email to "+(($=(j=N[0])==null?void 0:j.email)==null?void 0:$.label))&&s(U,"aria-label",ae)},i:we,o:we,d(N){N&&i(e)}}}function Ht(r,e,t){let{data:a}=e;return r.$$set=o=>{"data"in o&&t(0,a=o.data)},[a]}class Lt extends je{constructor(e){super(),De(this,e,Ht,Ct,Be,{data:0})}}function Wt(r){let e,t,a,o,p,n,_,c,m,g,E;return t=new Lt({props:{data:We.hero}}),o=new yt({props:{data:We.about}}),n=new Pt({props:{data:We.experience}}),c=new Mt({props:{data:We.featuredProjects}}),g=new $t({props:{data:We.contact}}),{c(){e=A(),Ee(t.$$.fragment),a=A(),Ee(o.$$.fragment),p=A(),Ee(n.$$.fragment),_=A(),Ee(c.$$.fragment),m=A(),Ee(g.$$.fragment),this.h()},l(u){gt("svelte-1pmz572",document.head).forEach(i),e=P(u),Te(t.$$.fragment,u),a=P(u),Te(o.$$.fragment,u),p=P(u),Te(n.$$.fragment,u),_=P(u),Te(c.$$.fragment,u),m=P(u),Te(g.$$.fragment,u),this.h()},h(){document.title="Mohammad Robel | Portfolio"},m(u,v){re(u,e,v),ye(t,u,v),re(u,a,v),ye(o,u,v),re(u,p,v),ye(n,u,v),re(u,_,v),ye(c,u,v),re(u,m,v),ye(g,u,v),E=!0},p:we,i(u){E||(he(t.$$.fragment,u),he(o.$$.fragment,u),he(n.$$.fragment,u),he(c.$$.fragment,u),he(g.$$.fragment,u),E=!0)},o(u){me(t.$$.fragment,u),me(o.$$.fragment,u),me(n.$$.fragment,u),me(c.$$.fragment,u),me(g.$$.fragment,u),E=!1},d(u){u&&i(e),ke(t,u),u&&i(a),ke(o,u),u&&i(p),ke(n,u),u&&i(_),ke(c,u),u&&i(m),ke(g,u)}}}class Kt extends je{constructor(e){super(),De(this,e,null,Wt,Be,{})}}export{Kt as default};
