import{S as wt,i as kt,s as Et,G as ht,H as _t,a as m,d as f,b as r,g as C,I as l,M as ts,e as h,k as x,c as _,m as D,R as It,N as ss,O as ls,P as as,q as re,o as pe,V as ns,t as V,h as $,W as Mt,j as Z,x as Ge,y as qe,z as Je,X as rs,Y as vt,C as Xe,Z as os,f as Wt,l as Zt,p as is,L as cs,_ as fs,n as ds}from"../../chunks/index-74cce875.js";import{b as je,p as Pe,d as Ee,c as Se,a as us}from"../../chunks/api-a1f7356f.js";import{l as ps,a as ms}from"../../chunks/store-f4baad70.js";import{g as hs}from"../../chunks/navigation-0e6511d1.js";import{b as bt}from"../../chunks/paths-396f020f.js";import"../../chunks/index-cc58445c.js";import"../../chunks/singletons-d1fb5791.js";function Ft(s){let e,t,a;return{c(){e=ht("svg"),t=ht("circle"),a=ht("path"),this.h()},l(o){e=_t(o,"svg",{class:!0,xmlns:!0,fill:!0,viewBox:!0});var c=m(e);t=_t(c,"circle",{class:!0,cx:!0,cy:!0,r:!0,stroke:!0,"stroke-width":!0}),m(t).forEach(f),a=_t(c,"path",{class:!0,fill:!0,d:!0}),m(a).forEach(f),c.forEach(f),this.h()},h(){r(t,"class","opacity-25"),r(t,"cx","12"),r(t,"cy","12"),r(t,"r","10"),r(t,"stroke","currentColor"),r(t,"stroke-width","4"),r(a,"class","opacity-75"),r(a,"fill","currentColor"),r(a,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),r(e,"class","animate-spin -ml-1 mr-3 h-5 w-5 text-white"),r(e,"xmlns","http://www.w3.org/2000/svg"),r(e,"fill","none"),r(e,"viewBox","0 0 24 24")},m(o,c){C(o,e,c),l(e,t),l(e,a)},d(o){o&&f(e)}}}function _s(s){let e,t,a,o,c,u,d=s[0]&&Ft();const v=s[2].default,p=ts(v,s,s[1],null);return{c(){e=h("button"),d&&d.c(),t=x(),p&&p.c(),this.h()},l(n){e=_(n,"BUTTON",{type:!0,class:!0});var b=m(e);d&&d.l(b),t=D(b),p&&p.l(b),b.forEach(f),this.h()},h(){r(e,"type","submit"),e.disabled=s[0],r(e,"class",a="inline-flex items-center py-2 px-3 self-end bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none "+(s[0]&&"opacity-50 cursor-not-allowed"))},m(n,b){C(n,e,b),d&&d.m(e,null),l(e,t),p&&p.m(e,null),o=!0,c||(u=It(e,"click",s[3]),c=!0)},p(n,[b]){n[0]?d||(d=Ft(),d.c(),d.m(e,t)):d&&(d.d(1),d=null),p&&p.p&&(!o||b&2)&&ss(p,v,n,n[1],o?as(v,n[1],b,null):ls(n[1]),null),(!o||b&1)&&(e.disabled=n[0]),(!o||b&1&&a!==(a="inline-flex items-center py-2 px-3 self-end bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-cyan-500/50 focus:outline-none "+(n[0]&&"opacity-50 cursor-not-allowed")))&&r(e,"class",a)},i(n){o||(re(p,n),o=!0)},o(n){pe(p,n),o=!1},d(n){n&&f(e),d&&d.d(),p&&p.d(n),c=!1,u()}}}function bs(s,e,t){let{$$slots:a={},$$scope:o}=e,{loading:c=!1}=e;function u(d){ns.call(this,s,d)}return s.$$set=d=>{"loading"in d&&t(0,c=d.loading),"$$scope"in d&&t(1,o=d.$$scope)},[c,o,a,u]}class gt extends wt{constructor(e){super(),kt(this,e,bs,_s,Et,{loading:0})}}function Gt(s,e,t){const a=s.slice();return a[7]=e[t],a}function vs(s){let e,t,a,o,c;return{c(){e=h("input"),this.h()},l(u){e=_(u,"INPUT",{name:!0,id:!0,class:!0,type:!0,step:!0}),this.h()},h(){r(e,"name",t=s[7].name),r(e,"id",a=s[7].name),r(e,"class","rounded-lg p-2 mr-1 border-2 border-gray-300"),r(e,"type",o=s[4](s[7])),e.value=c=s[3](s[7]),r(e,"step","any")},m(u,d){C(u,e,d)},p(u,d){d&1&&t!==(t=u[7].name)&&r(e,"name",t),d&1&&a!==(a=u[7].name)&&r(e,"id",a),d&1&&o!==(o=u[4](u[7]))&&r(e,"type",o),d&1&&c!==(c=u[3](u[7]))&&e.value!==c&&(e.value=c)},d(u){u&&f(e)}}}function gs(s){let e,t,a,o,c,u,d;return{c(){e=h("input"),o=x(),c=h("input"),this.h()},l(v){e=_(v,"INPUT",{type:!0,name:!0,id:!0}),o=D(v),c=_(v,"INPUT",{type:!0,name:!0,id:!0,class:!0}),this.h()},h(){r(e,"type","hidden"),r(e,"name",t=s[7].name),r(e,"id",a=s[7].name),e.value="false",r(c,"type","checkbox"),r(c,"name",u=s[7].name),r(c,"id",d=s[7].name),r(c,"class","rounded-lg p-2 mr-1 border-2 border-gray-300"),c.value="true"},m(v,p){C(v,e,p),C(v,o,p),C(v,c,p)},p(v,p){p&1&&t!==(t=v[7].name)&&r(e,"name",t),p&1&&a!==(a=v[7].name)&&r(e,"id",a),p&1&&u!==(u=v[7].name)&&r(c,"name",u),p&1&&d!==(d=v[7].name)&&r(c,"id",d)},d(v){v&&f(e),v&&f(o),v&&f(c)}}}function qt(s){let e,t,a=s[7].description+"",o,c,u;function d(n,b){return n[7].schema.type==="boolean"?gs:vs}let v=d(s),p=v(s);return{c(){e=h("label"),t=h("span"),o=V(a),c=x(),p.c(),this.h()},l(n){e=_(n,"LABEL",{class:!0,for:!0});var b=m(e);t=_(b,"SPAN",{class:!0});var P=m(t);o=$(P,a),P.forEach(f),c=D(b),p.l(b),b.forEach(f),this.h()},h(){r(t,"class","flex-auto"),r(e,"class","flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"),r(e,"for",u=s[7].name),Mt(e,"hidden",s[7].name==="instance_id")},m(n,b){C(n,e,b),l(e,t),l(t,o),l(e,c),p.m(e,null)},p(n,b){b&1&&a!==(a=n[7].description+"")&&Z(o,a),v===(v=d(n))&&p?p.p(n,b):(p.d(1),p=v(n),p&&(p.c(),p.m(e,null))),b&1&&u!==(u=n[7].name)&&r(e,"for",u),b&1&&Mt(e,"hidden",n[7].name==="instance_id")},d(n){n&&f(e),p.d()}}}function ws(s){let e;return{c(){e=V("Run")},l(t){e=$(t,"Run")},m(t,a){C(t,e,a)},d(t){t&&f(e)}}}function ks(s){let e,t,a=s[0].name+"",o,c,u,d=s[0].description+"",v,p,n,b,P,U,M,O,w=s[0].parameters,k=[];for(let E=0;E<w.length;E+=1)k[E]=qt(Gt(s,w,E));return P=new gt({props:{loading:s[1],$$slots:{default:[ws]},$$scope:{ctx:s}}}),{c(){e=h("div"),t=h("h1"),o=V(a),c=x(),u=h("p"),v=V(d),p=x(),n=h("form");for(let E=0;E<k.length;E+=1)k[E].c();b=x(),Ge(P.$$.fragment),this.h()},l(E){e=_(E,"DIV",{class:!0});var y=m(e);t=_(y,"H1",{class:!0});var A=m(t);o=$(A,a),A.forEach(f),c=D(y),u=_(y,"P",{class:!0});var S=m(u);v=$(S,d),S.forEach(f),p=D(y),n=_(y,"FORM",{});var T=m(n);for(let z=0;z<k.length;z+=1)k[z].l(T);b=D(T),qe(P.$$.fragment,T),T.forEach(f),y.forEach(f),this.h()},h(){r(t,"class","mb-2"),r(u,"class","text-sm mb-4"),r(e,"class","flex shadow-xl rounded-xl p-8 bg-white dark:bg-slate-800 flex-col mt-4 ")},m(E,y){C(E,e,y),l(e,t),l(t,o),l(e,c),l(e,u),l(u,v),l(e,p),l(e,n);for(let A=0;A<k.length;A+=1)k[A]&&k[A].m(n,null);l(n,b),Je(P,n,null),U=!0,M||(O=It(n,"submit",rs(s[2])),M=!0)},p(E,[y]){if((!U||y&1)&&a!==(a=E[0].name+"")&&Z(o,a),(!U||y&1)&&d!==(d=E[0].description+"")&&Z(v,d),y&25){w=E[0].parameters;let S;for(S=0;S<w.length;S+=1){const T=Gt(E,w,S);k[S]?k[S].p(T,y):(k[S]=qt(T),k[S].c(),k[S].m(n,b))}for(;S<k.length;S+=1)k[S].d(1);k.length=w.length}const A={};y&2&&(A.loading=E[1]),y&1024&&(A.$$scope={dirty:y,ctx:E}),P.$set(A)},i(E){U||(re(P.$$.fragment,E),U=!0)},o(E){pe(P.$$.fragment,E),U=!1},d(E){E&&f(e),vt(k,E),Xe(P),M=!1,O()}}}function Es(s,e,t){const a=os();let{instance:o}=e,{path:c}=e;console.log(c);let u=!1;const d=async n=>{t(1,u=!0);const b=new FormData(n.target),P={};for(let O of b){const[w,k]=O;P[w]=k}await(await je(c.method,c.path,null,P)).json();const M=c.path.split("/").pop();a("completed",{name:M}),t(1,u=!1)},v=n=>n.name==="instance_id"?o.id:n.schema.default,p=n=>{const b=n.schema.type;return b==="number"||b==="integer"?"number":b==="boolean"?"checkbox":"text"};return s.$$set=n=>{"instance"in n&&t(5,o=n.instance),"path"in n&&t(0,c=n.path)},[c,u,d,v,p,o]}class Is extends wt{constructor(e){super(),kt(this,e,Es,ks,Et,{instance:5,path:0})}}function Jt(s,e,t){const a=s.slice();return a[13]=e[t],a}function Xt(s,e,t){const a=s.slice();return a[16]=e[t],a}function Yt(s){let e,t=s[16]+"",a,o,c;return{c(){e=h("span"),a=V(t),o=x(),this.h()},l(u){e=_(u,"SPAN",{class:!0});var d=m(e);a=$(d,t),o=D(d),d.forEach(f),this.h()},h(){r(e,"class",c="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "+(s[0][s[16]]?"bg-green-100":"bg-red-100")+" text-"+(s[0][s[16]]?"green-800":"red-800"))},m(u,d){C(u,e,d),l(e,a),l(e,o)},p(u,d){d&1&&c!==(c="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "+(u[0][u[16]]?"bg-green-100":"bg-red-100")+" text-"+(u[0][u[16]]?"green-800":"red-800"))&&r(e,"class",c)},d(u){u&&f(e)}}}function xs(s){let e;return{c(){e=V("Generate Instance")},l(t){e=$(t,"Generate Instance")},m(t,a){C(t,e,a)},d(t){t&&f(e)}}}function Ds(s){let e;return{c(){e=V("Download ZIP")},l(t){e=$(t,"Download ZIP")},m(t,a){C(t,e,a)},d(t){t&&f(e)}}}function Kt(s){let e,t,a,o,c=s[3].task+"",u,d,v,p=s[3].completed+"",n,b,P=s[3].size+"",U,M,O,w,k=parseInt(s[3].progress*100)+"",E,y,A,S,T;return{c(){e=h("div"),t=h("div"),a=h("div"),o=h("span"),u=V(c),d=x(),v=h("span"),n=V(p),b=V("/"),U=V(P),M=x(),O=h("div"),w=h("span"),E=V(k),y=V("%"),A=x(),S=h("div"),T=h("div"),this.h()},l(z){e=_(z,"DIV",{class:!0});var B=m(e);t=_(B,"DIV",{class:!0});var q=m(t);a=_(q,"DIV",{});var ee=m(a);o=_(ee,"SPAN",{class:!0});var F=m(o);u=$(F,c),F.forEach(f),d=D(ee),v=_(ee,"SPAN",{class:!0});var G=m(v);n=$(G,p),b=$(G,"/"),U=$(G,P),G.forEach(f),ee.forEach(f),M=D(q),O=_(q,"DIV",{class:!0});var me=m(O);w=_(me,"SPAN",{class:!0});var oe=m(w);E=$(oe,k),y=$(oe,"%"),oe.forEach(f),me.forEach(f),q.forEach(f),A=D(B),S=_(B,"DIV",{class:!0});var J=m(S);T=_(J,"DIV",{style:!0,class:!0}),m(T).forEach(f),J.forEach(f),B.forEach(f),this.h()},h(){r(o,"class","text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200"),r(v,"class","text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200"),r(w,"class","text-xs font-semibold inline-block text-green-600"),r(O,"class","text-right"),r(t,"class","flex mb-2 items-center justify-between"),Wt(T,"width",parseInt(s[3].progress*100)+"%"),r(T,"class","shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"),r(S,"class","overflow-hidden h-2 mb-2 text-xs flex rounded bg-green-200"),r(e,"class","sticky top-0 flex shadow-xl rounded-xl p-4 bg-slate-100 dark:bg-slate-800 flex-col mt-3")},m(z,B){C(z,e,B),l(e,t),l(t,a),l(a,o),l(o,u),l(a,d),l(a,v),l(v,n),l(v,b),l(v,U),l(t,M),l(t,O),l(O,w),l(w,E),l(w,y),l(e,A),l(e,S),l(S,T)},p(z,B){B&8&&c!==(c=z[3].task+"")&&Z(u,c),B&8&&p!==(p=z[3].completed+"")&&Z(n,p),B&8&&P!==(P=z[3].size+"")&&Z(U,P),B&8&&k!==(k=parseInt(z[3].progress*100)+"")&&Z(E,k),B&8&&Wt(T,"width",parseInt(z[3].progress*100)+"%")},d(z){z&&f(e)}}}function Qt(s){let e,t;return e=new Is({props:{instance:s[0],path:s[13]}}),e.$on("completed",s[9]),{c(){Ge(e.$$.fragment)},l(a){qe(e.$$.fragment,a)},m(a,o){Je(e,a,o),t=!0},p(a,o){const c={};o&1&&(c.instance=a[0]),o&16&&(c.path=a[13]),e.$set(c)},i(a){t||(re(e.$$.fragment,a),t=!0)},o(a){pe(e.$$.fragment,a),t=!1},d(a){Xe(e,a)}}}function ys(s){let e,t,a,o,c,u,d=s[0].label+"",v,p,n,b,P,U,M,O,w=s[0].iiif_url+"",k,E,y,A,S,T,z,B=s[0].id+"",q,ee,F,G,me,oe,J,Ie=new Date(s[0].created*1e3)+"",ze,Ye,te,xe,Ke,Qe,he,ie,De=s[1]?"Connected":"Disconnected",Ne,Ae,et,se,ye,tt,st,_e,X,lt,Ce,at,le,Ve,nt,rt,be,Y,ot,Oe,it,ae,$e,ct,ft,ce,dt,ne,K,ut,Q,Te,ve,fe,pt,Ue,ge,W,mt,xt,we=s[5],L=[];for(let i=0;i<we.length;i+=1)L[i]=Yt(Xt(s,we,i));K=new gt({props:{loading:s[2].all,$$slots:{default:[xs]},$$scope:{ctx:s}}}),K.$on("click",s[6]),Q=new gt({props:{loading:s[2].zip,$$slots:{default:[Ds]},$$scope:{ctx:s}}}),Q.$on("click",s[7]);let R=s[3]&&Kt(s),de=s[4],j=[];for(let i=0;i<de.length;i+=1)j[i]=Qt(Jt(s,de,i));const es=i=>pe(j[i],1,1,()=>{j[i]=null});return{c(){e=h("div"),t=h("div"),a=h("button"),o=V("Delete"),c=x(),u=h("h1"),v=V(d),p=x(),n=h("div"),b=h("div"),P=h("p"),U=V("Manifest URL"),M=x(),O=h("div"),k=V(w),E=x(),y=h("div"),A=h("p"),S=V("Id"),T=x(),z=h("div"),q=V(B),ee=x(),F=h("div"),G=h("p"),me=V("Created"),oe=x(),J=h("div"),ze=V(Ie),Ye=x(),te=h("div"),xe=h("p"),Ke=V("Socket"),Qe=x(),he=h("div"),ie=h("span"),Ne=V(De),et=x(),se=h("div"),ye=h("p"),tt=V("Vikus Viewer"),st=x(),_e=h("div"),X=h("a"),lt=V("Open"),at=x(),le=h("div"),Ve=h("p"),nt=V("Data Dir"),rt=x(),be=h("div"),Y=h("a"),ot=V("Open"),it=x(),ae=h("div"),$e=h("p"),ct=V("Status"),ft=x(),ce=h("div");for(let i=0;i<L.length;i+=1)L[i].c();dt=x(),ne=h("div"),Ge(K.$$.fragment),ut=x(),Ge(Q.$$.fragment),Te=x(),R&&R.c(),ve=x(),fe=h("h2"),pt=V("Advanced Settings"),Ue=x();for(let i=0;i<j.length;i+=1)j[i].c();ge=Zt(),this.h()},l(i){e=_(i,"DIV",{class:!0});var g=m(e);t=_(g,"DIV",{class:!0});var H=m(t);a=_(H,"BUTTON",{class:!0});var ke=m(a);o=$(ke,"Delete"),ke.forEach(f),H.forEach(f),c=D(g),u=_(g,"H1",{});var I=m(u);v=$(I,d),I.forEach(f),g.forEach(f),p=D(i),n=_(i,"DIV",{class:!0});var N=m(n);b=_(N,"DIV",{class:!0});var Be=m(b);P=_(Be,"P",{});var Dt=m(P);U=$(Dt,"Manifest URL"),Dt.forEach(f),M=D(Be),O=_(Be,"DIV",{class:!0});var yt=m(O);k=$(yt,w),yt.forEach(f),Be.forEach(f),E=D(N),y=_(N,"DIV",{class:!0});var Le=m(y);A=_(Le,"P",{});var Vt=m(A);S=$(Vt,"Id"),Vt.forEach(f),T=D(Le),z=_(Le,"DIV",{class:!0});var $t=m(z);q=$($t,B),$t.forEach(f),Le.forEach(f),ee=D(N),F=_(N,"DIV",{class:!0});var Re=m(F);G=_(Re,"P",{});var Pt=m(G);me=$(Pt,"Created"),Pt.forEach(f),oe=D(Re),J=_(Re,"DIV",{class:!0});var St=m(J);ze=$(St,Ie),St.forEach(f),Re.forEach(f),Ye=D(N),te=_(N,"DIV",{class:!0});var He=m(te);xe=_(He,"P",{});var jt=m(xe);Ke=$(jt,"Socket"),jt.forEach(f),Qe=D(He),he=_(He,"DIV",{class:!0});var zt=m(he);ie=_(zt,"SPAN",{class:!0});var Nt=m(ie);Ne=$(Nt,De),Nt.forEach(f),zt.forEach(f),He.forEach(f),et=D(N),se=_(N,"DIV",{class:!0});var Me=m(se);ye=_(Me,"P",{});var At=m(ye);tt=$(At,"Vikus Viewer"),At.forEach(f),st=D(Me),_e=_(Me,"DIV",{class:!0});var Ct=m(_e);X=_(Ct,"A",{target:!0,class:!0,href:!0});var Ot=m(X);lt=$(Ot,"Open"),Ot.forEach(f),Ct.forEach(f),Me.forEach(f),at=D(N),le=_(N,"DIV",{class:!0});var We=m(le);Ve=_(We,"P",{});var Tt=m(Ve);nt=$(Tt,"Data Dir"),Tt.forEach(f),rt=D(We),be=_(We,"DIV",{class:!0});var Ut=m(be);Y=_(Ut,"A",{target:!0,class:!0,href:!0});var Bt=m(Y);ot=$(Bt,"Open"),Bt.forEach(f),Ut.forEach(f),We.forEach(f),it=D(N),ae=_(N,"DIV",{class:!0});var Ze=m(ae);$e=_(Ze,"P",{});var Lt=m($e);ct=$(Lt,"Status"),Lt.forEach(f),ft=D(Ze),ce=_(Ze,"DIV",{class:!0});var Rt=m(ce);for(let ue=0;ue<L.length;ue+=1)L[ue].l(Rt);Rt.forEach(f),Ze.forEach(f),dt=D(N),ne=_(N,"DIV",{class:!0});var Fe=m(ne);qe(K.$$.fragment,Fe),ut=D(Fe),qe(Q.$$.fragment,Fe),Fe.forEach(f),N.forEach(f),Te=D(i),R&&R.l(i),ve=D(i),fe=_(i,"H2",{class:!0});var Ht=m(fe);pt=$(Ht,"Advanced Settings"),Ht.forEach(f),Ue=D(i);for(let ue=0;ue<j.length;ue+=1)j[ue].l(i);ge=Zt(),this.h()},h(){r(a,"class","p-1 pl-2 pr-2 bg-red-700 text-white text-sm font-semibold rounded-md shadow-lg hover:shadow-red-500/50 focus:outline-none"),r(t,"class","absolute top-0 right-0"),r(e,"class","relative "),r(O,"class","flex items-end text-xs"),r(b,"class","flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"),r(z,"class","flex items-end text-xs"),r(y,"class","flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"),r(J,"class","flex items-end text-xs"),r(F,"class","flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"),r(ie,"class",Ae="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "+(s[1]?"bg-green-100":"bg-red-100")+" text-"+(s[1]?"green-800":"red-800")),r(he,"class","flex items-end text-xs"),r(te,"class","flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"),r(X,"target","_blank"),r(X,"class","font-semibold rounded-full px-2 bg-blue-100"),r(X,"href",Ce=Pe+"://"+Ee+":"+Se+"/viewer/?config=../data/"+s[0].id+"/config.json"),r(_e,"class","flex items-end text-xs"),r(se,"class","flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"),r(Y,"target","_blank"),r(Y,"class","font-semibold rounded-full px-2 bg-blue-100"),r(Y,"href",Oe=Pe+"://"+Ee+":"+Se+"/data/"+s[0].id),r(be,"class","flex items-end text-xs"),r(le,"class","flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"),r(ce,"class","flex items-end text-xs"),r(ae,"class","flex items-center pb-2 mb-2 text-sm space-x-12 md:space-x-24 justify-between border-b border-gray-200 dark:border-slate-600"),r(ne,"class","flex justify-between mt-8"),r(n,"class","flex shadow-xl rounded-xl p-8 bg-white dark:bg-slate-800 flex-col mt-7 mb-4"),r(fe,"class","mt-8 mb-6")},m(i,g){C(i,e,g),l(e,t),l(t,a),l(a,o),l(e,c),l(e,u),l(u,v),C(i,p,g),C(i,n,g),l(n,b),l(b,P),l(P,U),l(b,M),l(b,O),l(O,k),l(n,E),l(n,y),l(y,A),l(A,S),l(y,T),l(y,z),l(z,q),l(n,ee),l(n,F),l(F,G),l(G,me),l(F,oe),l(F,J),l(J,ze),l(n,Ye),l(n,te),l(te,xe),l(xe,Ke),l(te,Qe),l(te,he),l(he,ie),l(ie,Ne),l(n,et),l(n,se),l(se,ye),l(ye,tt),l(se,st),l(se,_e),l(_e,X),l(X,lt),l(n,at),l(n,le),l(le,Ve),l(Ve,nt),l(le,rt),l(le,be),l(be,Y),l(Y,ot),l(n,it),l(n,ae),l(ae,$e),l($e,ct),l(ae,ft),l(ae,ce);for(let H=0;H<L.length;H+=1)L[H]&&L[H].m(ce,null);l(n,dt),l(n,ne),Je(K,ne,null),l(ne,ut),Je(Q,ne,null),C(i,Te,g),R&&R.m(i,g),C(i,ve,g),C(i,fe,g),l(fe,pt),C(i,Ue,g);for(let H=0;H<j.length;H+=1)j[H]&&j[H].m(i,g);C(i,ge,g),W=!0,mt||(xt=It(a,"click",s[8]),mt=!0)},p(i,[g]){if((!W||g&1)&&d!==(d=i[0].label+"")&&Z(v,d),(!W||g&1)&&w!==(w=i[0].iiif_url+"")&&Z(k,w),(!W||g&1)&&B!==(B=i[0].id+"")&&Z(q,B),(!W||g&1)&&Ie!==(Ie=new Date(i[0].created*1e3)+"")&&Z(ze,Ie),(!W||g&2)&&De!==(De=i[1]?"Connected":"Disconnected")&&Z(Ne,De),(!W||g&2&&Ae!==(Ae="px-2 inline-flex text-xs leading-5 font-semibold rounded-full "+(i[1]?"bg-green-100":"bg-red-100")+" text-"+(i[1]?"green-800":"red-800")))&&r(ie,"class",Ae),(!W||g&1&&Ce!==(Ce=Pe+"://"+Ee+":"+Se+"/viewer/?config=../data/"+i[0].id+"/config.json"))&&r(X,"href",Ce),(!W||g&1&&Oe!==(Oe=Pe+"://"+Ee+":"+Se+"/data/"+i[0].id))&&r(Y,"href",Oe),g&33){we=i[5];let I;for(I=0;I<we.length;I+=1){const N=Xt(i,we,I);L[I]?L[I].p(N,g):(L[I]=Yt(N),L[I].c(),L[I].m(ce,null))}for(;I<L.length;I+=1)L[I].d(1);L.length=we.length}const H={};g&4&&(H.loading=i[2].all),g&524288&&(H.$$scope={dirty:g,ctx:i}),K.$set(H);const ke={};if(g&4&&(ke.loading=i[2].zip),g&524288&&(ke.$$scope={dirty:g,ctx:i}),Q.$set(ke),i[3]?R?R.p(i,g):(R=Kt(i),R.c(),R.m(ve.parentNode,ve)):R&&(R.d(1),R=null),g&529){de=i[4];let I;for(I=0;I<de.length;I+=1){const N=Jt(i,de,I);j[I]?(j[I].p(N,g),re(j[I],1)):(j[I]=Qt(N),j[I].c(),re(j[I],1),j[I].m(ge.parentNode,ge))}for(ds(),I=de.length;I<j.length;I+=1)es(I);is()}},i(i){if(!W){re(K.$$.fragment,i),re(Q.$$.fragment,i);for(let g=0;g<de.length;g+=1)re(j[g]);W=!0}},o(i){pe(K.$$.fragment,i),pe(Q.$$.fragment,i),j=j.filter(Boolean);for(let g=0;g<j.length;g+=1)pe(j[g]);W=!1},d(i){i&&f(e),i&&f(p),i&&f(n),vt(L,i),Xe(K),Xe(Q),i&&f(Te),R&&R.d(i),i&&f(ve),i&&f(fe),i&&f(Ue),vt(j,i),i&&f(ge),mt=!1,xt()}}}const Vs={id:"test",label:"Disconnected Instance",iiif_url:"http://localhost:5000/instances/test",status:"ok"};async function Os({params:s,fetch:e,session:t,stuff:a}){try{const o=await je("get",`/instances/${s.id}`);return{status:o.status,props:{instance:o.ok&&await o.json()}}}catch(o){return{status:o.status,props:{error:o.message,instance:Vs}}}}function $s(s,e,t){let a;cs(s,ms,w=>t(4,a=w));let{instance:o}=e,c=!1,u={all:!1,zip:!1},d=!1,v=["collection","images","features","similarity","metadata","spritesheets","zip"],p=null;function n(){console.log("connection to websocket"),p&&p.close(),p=new WebSocket(`ws://${Ee}:${us}/instances/${o.id}/ws`),p.onopen=w=>{console.log("eventSource.onopen",w),t(1,c=!0)},p.onerror=w=>{console.log("eventSource.onerror",w),t(1,c=!1)},p.onclose=w=>{console.log("eventSource.onclose",w),t(1,c=!1)},p.onmessage=w=>{const k=JSON.parse(w.data);k.type!="ping"&&console.log(k),k.task&&t(3,d=k)}}const b=setInterval(()=>{c||n()},2e3);fs(()=>{console.log("It's destroyed"),t(1,c=!1),p.close(),clearInterval(b)});const P=async()=>{t(2,u={all:!0,zip:!1});const k=await(await je("POST","/instances/generate",null,{instance_id:o.id})).json();console.log(k),t(2,u={all:!1,zip:!1}),t(0,o=k)},U=async()=>{t(2,u={all:!1,zip:!0}),await(await je("POST","/instances/steps/zip",null,{instance_id:o.id})).json();const k=`${Pe}://${Ee}:${Se}/data/${o.id}/project.zip`;var E=document.createElement("a");E.href=k,E.setAttribute("download","project.zip"),E.click(),t(2,u={all:!1,zip:!1})},M=async()=>{p.close(),(await(await je("DELETE",`/instances/${o.id}`)).json()).status=="deleted"&&(ps(),hs(bt?bt:"/"))};function O({detail:{name:w}}){console.log("formCompleted",w),o&&t(0,o[w]=!0,o)}return console.log("base",bt),s.$$set=w=>{"instance"in w&&t(0,o=w.instance)},s.$$.update=()=>{s.$$.dirty&1&&(console.log(o),t(3,d=!1),t(1,c=!1),n())},[o,c,u,d,a,v,P,U,M,O]}class Ts extends wt{constructor(e){super(),kt(this,e,$s,ys,Et,{instance:0})}}export{Ts as default,Os as load};
