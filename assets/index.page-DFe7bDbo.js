import{n as l,ɵ as u,R as m,a,b as o,c as i,o as d,k as r,p as f,l as g,q as b,r as _}from"./index-BbF4Sw3y.js";const h=n=>["/blog/",n],k=(n,s)=>s.attributes.slug;function C(n,s){if(n&1&&(a(0,"a",0)(1,"h2",1),o(2),i(),a(3,"p",2),o(4),i()()),n&2){const t=s.$implicit;g("routerLink",b(3,h,t.attributes.slug)),r(2),_(t.attributes.title),r(2),_(t.attributes.description)}}const e=class e{constructor(){this.posts=l()}};e.ɵfac=function(t){return new(t||e)},e.ɵcmp=u({type:e,selectors:[["app-blog"]],decls:4,vars:0,consts:[[3,"routerLink"],[1,"post__title"],[1,"post__desc"]],template:function(t,p){t&1&&(a(0,"h1"),o(1,"Blog Archive"),i(),d(2,C,5,5,"a",0,k)),t&2&&(r(2),f(p.posts))},dependencies:[m],styles:[`a[_ngcontent-%COMP%] {
      text-align: left;
      display: block;
      margin-bottom: 2rem;
    }

    .post__title[_ngcontent-%COMP%], 
   .post__desc[_ngcontent-%COMP%] {
      margin: 0;
    }`]});let c=e;export{c as default};
