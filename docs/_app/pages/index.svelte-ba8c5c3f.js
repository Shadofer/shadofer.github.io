import{S as A,i as B,s as H,e as f,t as D,k as M,c as _,a as u,h as I,d as o,m as N,b as y,g as T,G as i,H as O,n as $,M as R,Q as U,l as S,N as C,r as E,w as G,O as Q}from"../chunks/index-e11cf551.js";import{g as V}from"../chunks/navigation-0e6511d1.js";import{f as x}from"../chunks/index-f4ce4c8c.js";import"../chunks/singletons-d1fb5791.js";function q(n){let s,a,e,t,l,h,p,r,v,b,k,g;return{c(){s=f("div"),a=f("div"),e=f("button"),t=D("My projects"),l=M(),h=f("div"),p=M(),r=f("button"),v=D("About Me"),this.h()},l(c){s=_(c,"DIV",{});var m=u(s);a=_(m,"DIV",{class:!0});var d=u(a);e=_(d,"BUTTON",{class:!0});var j=u(e);t=I(j,"My projects"),j.forEach(o),l=N(d),h=_(d,"DIV",{}),u(h).forEach(o),p=N(d),r=_(d,"BUTTON",{class:!0});var w=u(r);v=I(w,"About Me"),w.forEach(o),d.forEach(o),m.forEach(o),this.h()},h(){y(e,"class","glow"),y(r,"class","glow"),y(a,"class","center")},m(c,m){T(c,s,m),i(s,a),i(a,e),i(e,t),i(a,l),i(a,h),i(a,p),i(a,r),i(r,v),k||(g=[O(e,"click",n[1]),O(r,"click",n[2])],k=!0)},p:$,i(c){b||R(()=>{b=Q(s,x,{}),b.start()})},o:$,d(c){c&&o(s),k=!1,U(g)}}}function z(n){let s,a,e=n[0]&&q(n);return{c(){s=M(),e&&e.c(),a=S(),this.h()},l(t){C('[data-svelte="svelte-1bolnd8"]',document.head).forEach(o),s=N(t),e&&e.l(t),a=S(),this.h()},h(){document.title="Shadofer Homepage"},m(t,l){T(t,s,l),e&&e.m(t,l),T(t,a,l)},p(t,[l]){t[0]?e?(e.p(t,l),l&1&&E(e,1)):(e=q(t),e.c(),E(e,1),e.m(a.parentNode,a)):e&&(e.d(1),e=null)},i(t){E(e)},o:$,d(t){t&&o(s),e&&e.d(t),t&&o(a)}}}function F(n,s,a){let e=!1;return G(()=>{a(0,e=!0)}),[e,()=>V("projects"),()=>V("aboutme")]}class W extends A{constructor(s){super(),B(this,s,F,z,H,{})}}export{W as default};
