import{S as U,i as J,s as Q,l as V,g as k,d as h,e as q,c as A,a as B,b as S,H as $,O as H,t as O,h as D,j as Z,n as te,I as $e,P as Ee,p as ne,q as N,o as C,k as x,m as z,Q as le,f as oe,R as se,T as Ne,w as M,x as X,y as Y,B as R,U as ve,E as K,V as Se}from"../chunks/index-ce9f2381.js";import{N as qe}from"../chunks/NewInstanceForm-e9550143.js";import{w as ye}from"../chunks/index-8f6252c4.js";import"../chunks/api-1d4496df.js";import"../chunks/navigation-0e6511d1.js";import"../chunks/singletons-d1fb5791.js";const Ae=ye([]),ke=ye([]);function Pe(t){var e=0,n=t.children,i=n&&n.length;if(!i)e=1;else for(;--i>=0;)e+=n[i].value;t.value=e}function Be(){return this.eachAfter(Pe)}function Ce(t,e){let n=-1;for(const i of this)t.call(e,i,++n,this);return this}function Ve(t,e){for(var n=this,i=[n],l,r,o=-1;n=i.pop();)if(t.call(e,n,++o,this),l=n.children)for(r=l.length-1;r>=0;--r)i.push(l[r]);return this}function xe(t,e){for(var n=this,i=[n],l=[],r,o,s,a=-1;n=i.pop();)if(l.push(n),r=n.children)for(o=0,s=r.length;o<s;++o)i.push(r[o]);for(;n=l.pop();)t.call(e,n,++a,this);return this}function ze(t,e){let n=-1;for(const i of this)if(t.call(e,i,++n,this))return i}function Oe(t){return this.eachAfter(function(e){for(var n=+t(e.data)||0,i=e.children,l=i&&i.length;--l>=0;)n+=i[l].value;e.value=n})}function De(t){return this.eachBefore(function(e){e.children&&e.children.sort(t)})}function Te(t){for(var e=this,n=je(e,t),i=[e];e!==n;)e=e.parent,i.push(e);for(var l=i.length;t!==n;)i.splice(l,0,t),t=t.parent;return i}function je(t,e){if(t===e)return t;var n=t.ancestors(),i=e.ancestors(),l=null;for(t=n.pop(),e=i.pop();t===e;)l=t,t=n.pop(),e=i.pop();return l}function Le(){for(var t=this,e=[t];t=t.parent;)e.push(t);return e}function Me(){return Array.from(this)}function Xe(){var t=[];return this.eachBefore(function(e){e.children||t.push(e)}),t}function Ye(){var t=this,e=[];return t.each(function(n){n!==t&&e.push({source:n.parent,target:n})}),e}function*Re(){var t=this,e,n=[t],i,l,r;do for(e=n.reverse(),n=[];t=e.pop();)if(yield t,i=t.children)for(l=0,r=i.length;l<r;++l)n.push(i[l]);while(n.length)}function we(t,e){t instanceof Map?(t=[void 0,t],e===void 0&&(e=Ke)):e===void 0&&(e=He);for(var n=new F(t),i,l=[n],r,o,s,a;i=l.pop();)if((o=e(i.data))&&(a=(o=Array.from(o)).length))for(i.children=o,s=a-1;s>=0;--s)l.push(r=o[s]=new F(o[s])),r.parent=i,r.depth=i.depth+1;return n.eachBefore(be)}function Fe(){return we(this).eachBefore(Ue)}function He(t){return t.children}function Ke(t){return Array.isArray(t)?t[1]:null}function Ue(t){t.data.value!==void 0&&(t.value=t.data.value),t.data=t.data.data}function be(t){var e=0;do t.height=e;while((t=t.parent)&&t.height<++e)}function F(t){this.data=t,this.depth=this.height=0,this.parent=null}F.prototype=we.prototype={constructor:F,count:Be,each:Ce,eachAfter:xe,eachBefore:Ve,find:ze,sum:Oe,sort:De,path:Te,ancestors:Le,descendants:Me,leaves:Xe,links:Ye,copy:Fe,[Symbol.iterator]:Re};function G(t){return t==null?null:Je(t)}function Je(t){if(typeof t!="function")throw new Error;return t}var Qe={depth:-1},ae={},W={};function Ge(t){return t.id}function We(t){return t.parentId}function Ze(){var t=Ge,e=We,n;function i(l){var r=Array.from(l),o=t,s=e,a,f,g,d,I,c,w,P,E=new Map;if(n!=null){const b=r.map((p,m)=>et(n(p,m,l))),T=b.map(fe),y=new Set(b).add("");for(const p of T)y.has(p)||(y.add(p),b.push(p),T.push(fe(p)),r.push(W));o=(p,m)=>b[m],s=(p,m)=>T[m]}for(g=0,a=r.length;g<a;++g)f=r[g],c=r[g]=new F(f),(w=o(f,g,l))!=null&&(w+="")&&(P=c.id=w,E.set(P,E.has(P)?ae:c)),(w=s(f,g,l))!=null&&(w+="")&&(c.parent=w);for(g=0;g<a;++g)if(c=r[g],w=c.parent){if(I=E.get(w),!I)throw new Error("missing: "+w);if(I===ae)throw new Error("ambiguous: "+w);I.children?I.children.push(c):I.children=[c],c.parent=I}else{if(d)throw new Error("multiple roots");d=c}if(!d)throw new Error("no root");if(n!=null){for(;d.data===W&&d.children.length===1;)d=d.children[0],--a;for(let b=r.length-1;b>=0&&(c=r[b],c.data===W);--b)c.data=null}if(d.parent=Qe,d.eachBefore(function(b){b.depth=b.parent.depth+1,--a}).eachBefore(be),d.parent=null,a>0)throw new Error("cycle");return d}return i.id=function(l){return arguments.length?(t=G(l),i):t},i.parentId=function(l){return arguments.length?(e=G(l),i):e},i.path=function(l){return arguments.length?(n=G(l),i):n},i}function et(t){t=`${t}`;let e=t.length;return ee(t,e-1)&&!ee(t,e-2)&&(t=t.slice(0,-1)),t[0]==="/"?t:`/${t}`}function fe(t){let e=t.length;if(e<2)return"";for(;--e>1&&!ee(t,e););return t.slice(0,e)}function ee(t,e){if(t[e]==="/"){let n=0;for(;e>0&&t[--e]==="\\";)++n;if((n&1)===0)return!0}return!1}function L(t,e,n){this.k=t,this.x=e,this.y=n}L.prototype={constructor:L,scale:function(t){return t===1?this:new L(this.k*t,this.x,this.y)},translate:function(t,e){return t===0&e===0?this:new L(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};new L(1,0,0);L.prototype;function ce(t,e,n){const i=t.slice();return i[10]=e[n],i}function ue(t){let e;function n(r,o){return r[5]?nt:tt}let i=n(t),l=i(t);return{c(){l.c(),e=V()},l(r){l.l(r),e=V()},m(r,o){l.m(r,o),k(r,e,o)},p(r,o){i!==(i=n(r))&&(l.d(1),l=i(r),l&&(l.c(),l.m(e.parentNode,e)))},d(r){l.d(r),r&&h(e)}}}function tt(t){let e;return{c(){e=O("+")},l(n){e=D(n,"+")},m(n,i){k(n,e,i)},d(n){n&&h(e)}}}function nt(t){let e;return{c(){e=O("-")},l(n){e=D(n,"-")},m(n,i){k(n,e,i)},d(n){n&&h(e)}}}function he(t){let e,n,i,l;return{c(){e=q("span"),n=q("input"),this.h()},l(r){e=A(r,"SPAN",{class:!0});var o=B(e);n=A(o,"INPUT",{type:!0}),o.forEach(h),this.h()},h(){S(n,"type","checkbox"),S(e,"class","checkbox")},m(r,o){k(r,e,o),$(e,n),n.checked=t[4],i||(l=H(n,"change",t[9]),i=!0)},p(r,o){o&16&&(n.checked=r[4])},d(r){r&&h(e),i=!1,l()}}}function de(t){let e,n,i=t[0].length+"",l,r;return{c(){e=O("("),n=q("span"),l=O(i),r=O(")"),this.h()},l(o){e=D(o,"("),n=A(o,"SPAN",{class:!0});var s=B(n);l=D(s,i),s.forEach(h),r=D(o,")"),this.h()},h(){S(n,"class","count")},m(o,s){k(o,e,s),k(o,n,s),$(n,l),k(o,r,s)},p(o,s){s&1&&i!==(i=o[0].length+"")&&Z(l,i)},d(o){o&&h(e),o&&h(n),o&&h(r)}}}function pe(t){let e=[],n=new Map,i,l,r=t[0];const o=s=>Math.random()*s[3];for(let s=0;s<r.length;s+=1){let a=ce(t,r,s),f=o(a);n.set(f,e[s]=me(f,a))}return{c(){for(let s=0;s<e.length;s+=1)e[s].c();i=V()},l(s){for(let a=0;a<e.length;a+=1)e[a].l(s);i=V()},m(s,a){for(let f=0;f<e.length;f+=1)e[f].m(s,a);k(s,i,a),l=!0},p(s,a){a&11&&(r=s[0],te(),e=$e(e,a,o,1,s,r,n,i.parentNode,Ee,me,i,ce),ne())},i(s){if(!l){for(let a=0;a<r.length;a+=1)N(e[a]);l=!0}},o(s){for(let a=0;a<e.length;a+=1)C(e[a]);l=!1},d(s){for(let a=0;a<e.length;a+=1)e[a].d(s);s&&h(i)}}}function me(t,e){let n,i,l;return i=new Ie({props:{data:e[10].data,children:e[10].children,loaded:e[10].data.loaded,indent:e[1]+24}}),{key:t,first:null,c(){n=V(),M(i.$$.fragment),this.h()},l(r){n=V(),X(i.$$.fragment,r),this.h()},h(){this.first=n},m(r,o){k(r,n,o),Y(i,r,o),l=!0},p(r,o){e=r;const s={};o&1&&(s.data=e[10].data),o&1&&(s.children=e[10].children),o&1&&(s.loaded=e[10].data.loaded),o&2&&(s.indent=e[1]+24),i.$set(s)},i(r){l||(N(i.$$.fragment,r),l=!0)},o(r){C(i.$$.fragment,r),l=!1},d(r){r&&h(n),R(i,r)}}}function it(t){let e,n,i,l,r,o,s=t[2].iiif.type[0]+"",a,f,g,d=t[2].name+"",I,c,w,P,E,b,T,y=t[0].length>0&&ue(t),p=t[0].length>0&&he(t),m=t[0].length>0&&de(t),v=t[5]&&pe(t);return{c(){e=q("div"),n=q("span"),y&&y.c(),i=x(),p&&p.c(),l=x(),r=q("span"),o=q("span"),a=O(s),g=x(),I=O(d),c=x(),m&&m.c(),w=x(),v&&v.c(),P=V(),this.h()},l(u){e=A(u,"DIV",{style:!0,class:!0});var _=B(e);n=A(_,"SPAN",{class:!0});var ie=B(n);y&&y.l(ie),ie.forEach(h),i=z(_),p&&p.l(_),l=z(_),r=A(_,"SPAN",{class:!0});var j=B(r);o=A(j,"SPAN",{class:!0});var re=B(o);a=D(re,s),re.forEach(h),g=z(j),I=D(j,d),c=z(j),m&&m.l(j),j.forEach(h),_.forEach(h),w=z(u),v&&v.l(u),P=V(),this.h()},h(){S(n,"class","toggle svelte-13tyqno"),S(o,"class",f=le(`type ${t[2].iiif.type.toLowerCase()}`)+" svelte-13tyqno"),S(r,"class","name"),oe(e,"padding-left",t[1]+"px"),S(e,"class","entry svelte-13tyqno"),se(e,"loaded",t[3])},m(u,_){k(u,e,_),$(e,n),y&&y.m(n,null),$(e,i),p&&p.m(e,null),$(e,l),$(e,r),$(r,o),$(o,a),$(r,g),$(r,I),$(r,c),m&&m.m(r,null),k(u,w,_),v&&v.m(u,_),k(u,P,_),E=!0,b||(T=[H(n,"click",t[6]),H(r,"click",t[7])],b=!0)},p(u,[_]){u[0].length>0?y?y.p(u,_):(y=ue(u),y.c(),y.m(n,null)):y&&(y.d(1),y=null),u[0].length>0?p?p.p(u,_):(p=he(u),p.c(),p.m(e,l)):p&&(p.d(1),p=null),(!E||_&4)&&s!==(s=u[2].iiif.type[0]+"")&&Z(a,s),(!E||_&4&&f!==(f=le(`type ${u[2].iiif.type.toLowerCase()}`)+" svelte-13tyqno"))&&S(o,"class",f),(!E||_&4)&&d!==(d=u[2].name+"")&&Z(I,d),u[0].length>0?m?m.p(u,_):(m=de(u),m.c(),m.m(r,null)):m&&(m.d(1),m=null),(!E||_&2)&&oe(e,"padding-left",u[1]+"px"),_&8&&se(e,"loaded",u[3]),u[5]?v?(v.p(u,_),_&32&&N(v,1)):(v=pe(u),v.c(),N(v,1),v.m(P.parentNode,P)):v&&(te(),C(v,1,1,()=>{v=null}),ne())},i(u){E||(N(v),E=!0)},o(u){C(v),E=!1},d(u){u&&h(e),y&&y.d(),p&&p.d(),m&&m.d(),u&&h(w),v&&v.d(u),u&&h(P),b=!1,Ne(T)}}}function rt(t,e,n){let{children:i=[]}=e,{indent:l=0}=e,{data:r={}}=e,{depth:o=0}=e,{loaded:s=!1}=e,a=!1,f=i.map(c=>c.data.iiif.type==="Collection").reduce((c,w)=>c||w,!1);function g(){console.log(r,i),n(5,f=!f)}function d(){console.log(r,i),n(4,a=!a)}function I(){a=this.checked,n(4,a)}return t.$$set=c=>{"children"in c&&n(0,i=c.children),"indent"in c&&n(1,l=c.indent),"data"in c&&n(2,r=c.data),"depth"in c&&n(8,o=c.depth),"loaded"in c&&n(3,s=c.loaded)},t.$$.update=()=>{t.$$.dirty&20&&ke.update(c=>(a?c.push(r.id):c.splice(c.indexOf(r.id),1),c))},[i,l,r,s,a,f,g,d,o,I]}class Ie extends U{constructor(e){super(),J(this,e,rt,it,Q,{children:0,indent:1,data:2,depth:8,loaded:3})}}function _e(t){let e,n,i;return n=new Ie({props:{data:t[0].data,children:t[0].children,loaded:t[0].data.loaded,depth:t[0].depth}}),{c(){e=q("div"),M(n.$$.fragment),this.h()},l(l){e=A(l,"DIV",{class:!0});var r=B(e);X(n.$$.fragment,r),r.forEach(h),this.h()},h(){S(e,"class","entries svelte-2pgpqo")},m(l,r){k(l,e,r),Y(n,e,null),i=!0},p(l,r){const o={};r&1&&(o.data=l[0].data),r&1&&(o.children=l[0].children),r&1&&(o.loaded=l[0].data.loaded),r&1&&(o.depth=l[0].depth),n.$set(o)},i(l){i||(N(n.$$.fragment,l),i=!0)},o(l){C(n.$$.fragment,l),i=!1},d(l){l&&h(e),R(n)}}}function lt(t){let e,n,i=t[0]&&_e(t);return{c(){i&&i.c(),e=V()},l(l){i&&i.l(l),e=V()},m(l,r){i&&i.m(l,r),k(l,e,r),n=!0},p(l,[r]){l[0]?i?(i.p(l,r),r&1&&N(i,1)):(i=_e(l),i.c(),N(i,1),i.m(e.parentNode,e)):i&&(te(),C(i,1,1,()=>{i=null}),ne())},i(l){n||(N(i),n=!0)},o(l){C(i),n=!1},d(l){i&&i.d(l),l&&h(e)}}}function ot(t,e,n){let i;ve(t,Ae,r=>n(1,i=r));let l=null;return t.$$.update=()=>{t.$$.dirty&3&&(console.warn("new ",i),i.length>0&&(n(0,l=Ze()(i)),console.log(l)))},[l,i]}class st extends U{constructor(e){super(),J(this,e,ot,lt,Q,{})}}function ge(t){let e,n,i,l;return{c(){e=q("div"),n=O("download thumbnails"),this.h()},l(r){e=A(r,"DIV",{class:!0});var o=B(e);n=D(o,"download thumbnails"),o.forEach(h),this.h()},h(){S(e,"class","button thumbnails svelte-1ud0r6o")},m(r,o){k(r,e,o),$(e,n),i||(l=H(e,"click",t[1]),i=!0)},p:K,d(r){r&&h(e),i=!1,l()}}}function at(t){let e,n=t[0].length&&ge(t);return{c(){e=q("div"),n&&n.c(),this.h()},l(i){e=A(i,"DIV",{class:!0});var l=B(e);n&&n.l(l),l.forEach(h),this.h()},h(){S(e,"class","selected svelte-1ud0r6o")},m(i,l){k(i,e,l),n&&n.m(e,null)},p(i,[l]){i[0].length?n?n.p(i,l):(n=ge(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},i:K,o:K,d(i){i&&h(e),n&&n.d()}}}function ft(t,e,n){let i;ve(t,ke,r=>n(0,i=r));function l(){console.log(i),fetch("http://localhost:5000/thumbnails",{method:"POST",body:JSON.stringify({urls:i})}).then(r=>r.json()).then(r=>{console.log(r)})}return t.$$.update=()=>{t.$$.dirty&1&&console.log(i)},[i,l]}class ct extends U{constructor(e){super(),J(this,e,ft,at,Q,{})}}function ut(t){let e,n,i,l,r,o,s,a;return i=new qe({}),r=new st({}),s=new ct({}),{c(){e=x(),n=q("section"),M(i.$$.fragment),l=x(),M(r.$$.fragment),o=x(),M(s.$$.fragment),this.h()},l(f){Se('[data-svelte="svelte-p6ih27"]',document.head).forEach(h),e=z(f),n=A(f,"SECTION",{});var d=B(n);X(i.$$.fragment,d),l=z(d),X(r.$$.fragment,d),o=z(d),X(s.$$.fragment,d),d.forEach(h),this.h()},h(){document.title="VV IIIF"},m(f,g){k(f,e,g),k(f,n,g),Y(i,n,null),$(n,l),Y(r,n,null),$(n,o),Y(s,n,null),a=!0},p:K,i(f){a||(N(i.$$.fragment,f),N(r.$$.fragment,f),N(s.$$.fragment,f),a=!0)},o(f){C(i.$$.fragment,f),C(r.$$.fragment,f),C(s.$$.fragment,f),a=!1},d(f){f&&h(e),f&&h(n),R(i),R(r),R(s)}}}const vt=!1;class yt extends U{constructor(e){super(),J(this,e,null,ut,Q,{})}}export{yt as default,vt as prerender};