(this["webpackJsonpfast-company"]=this["webpackJsonpfast-company"]||[]).push([[0],{109:function(e,t,n){},123:function(e,t,n){},133:function(e,t,n){},134:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n.n(r),o=n(28),c=n.n(o),a=(n(109),n(77),n(3)),s=n(49),l=n(7),d=n(55),u=n(2),m=function(e){var t=e.qualities;return Object.keys(t).map((function(e){return Object(u.jsx)(d.a,{bg:t[e].color,className:"rounded-pill",color:"blue",style:{marginLeft:"5px"},children:t[e].name},t[e]._id)}))},b=n(4),j=n(71),f=["status"],h=function(e){var t=e.status;Object(b.a)(e,f);return t?Object(u.jsx)(j.a,{}):Object(u.jsx)(j.b,{})},p=n(24),x=n(13),g=function(e){var t=e.user,n=e.index,r=e.onDelete,i=e.onToggleBookmark;return console.log("user.qualities",t.qualities),Object(u.jsxs)("tr",{children:[Object(u.jsx)("td",{children:n}),Object(u.jsx)("td",{children:Object(u.jsx)(x.b,{to:"users/".concat(t._id),children:t.name})}),Object(u.jsx)("td",{children:Object(u.jsx)(m,{qualities:Object.assign({},t.qualities)})}),Object(u.jsx)("td",{children:t.profession.name}),Object(u.jsx)("td",{children:t.completedMeetings}),Object(u.jsx)("td",{children:t.rate}),Object(u.jsx)("td",{children:Object(u.jsx)(p.a,{variant:"light",onClick:function(){return i(t._id)},children:Object(u.jsx)(h,{status:t.bookmark})})}),Object(u.jsx)("td",{children:Object(u.jsx)(p.a,{variant:"warning",onClick:function(){return r(t._id)},children:"Delete"})})]},t._id)},k=n(93),O=n(73),y=function(e){var t=e.onSort,n=e.currentSort,i=e.columns,o=Object(r.useState)(null),c=Object(l.a)(o,2),s=c[0],d=c[1],m=null;return Object(u.jsx)("thead",{children:Object(u.jsx)("tr",{children:i&&Object.keys(i).map((function(e,r){return Object(u.jsxs)("th",{role:i[e].iterator&&"button",onClick:i[e].iterator?function(){return r=i[e].iterator,console.log("item",r),d(r),console.log("currentSort.iterator ",n.iterator),m=n.iterator===r,void t(m?Object(a.a)(Object(a.a)({},n),{},{order:"asc"===n.order?"desc":"asc"}):{iterator:r,order:"asc"});var r}:void 0,children:[i[e].name,s===i[e].iterator?"asc"===n.order?Object(u.jsx)(O.a,{}):Object(u.jsx)(O.b,{}):""]},r)}))})})},v=function(e){var t=e.userCrop,n=e.startIndex,r=e.onDelete,i=e.onToggleBookmark,o=e.onSort,c=e.currentSort,a=t&&t.map((function(e,t){return Object(u.jsx)(g,{user:e,index:n+t+1,onDelete:r,onToggleBookmark:i},e._id)}));return Object(u.jsxs)(k.a,{striped:!0,bordered:!0,hover:!0,children:[Object(u.jsx)(y,{onSort:o,currentSort:c,columns:{index:{},name:{iterator:"name",name:"Name"},qualities:{iterator:"qualities",name:"\u041a\u0430\u0447\u0435\u0441\u0442\u0432\u0430"},profession:{iterator:"profession.name",name:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f"},completedMeetings:{iterator:"completedMeetings",name:"\u0412\u0441\u0442\u0440\u0435\u0442\u0438\u043b\u0441\u044f"},rate:{iterator:"rate",name:"\u041e\u0446\u0435\u043d\u043a\u0430"},bookmark:{iterator:"bookmark",name:"\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435"},delete:{}}}),Object(u.jsx)("tbody",{children:a})]})},E=n(64),F=n(10),M=n.n(F);E.a.propTypes={itemsCount:M.a.number,pageSize:M.a.number,onPageChange:M.a.func,activePage:M.a.number};var w=function(e){var t=e.itemsCount,n=e.pageSize,r=e.onPageChange,i=e.activePage,o=Math.ceil(t/n);if(1===o)return null;for(var c=[],a=function(e){c.push(Object(u.jsx)(E.a.Item,{active:e===i,onClick:function(){return r(e)},children:e},e))},s=1;s<=o;s++)a(s);return Object(u.jsxs)("div",{children:[Object(u.jsx)(E.a,{size:"lg",children:c}),Object(u.jsx)("br",{})]})},L=n(56),N=n.n(L);var S=n(75),_=function(e){var t=e.items,n=(e.valueProperty,e.activeProperty),r=e.onItemSelect,i=e.selected,o=Object.keys(t).map((function(e,o){var c="";return i&&(c=t[e].name===i.name?"active":""),Object(u.jsx)(S.a.Item,{as:"li",onClick:function(){return r(t[e])},className:c,children:t[e][n]},o)}));return Object(u.jsx)(S.a,{as:"ul",children:o})};_.defaultProps={valueProperty:"_id",activeProperty:"name"};var z,C,W,P,q,I,D,A=_,B={doctor:{_id:"67rdca3eeb7f6fgeed471818",name:"\u0414\u043e\u043a\u0442\u043e\u0440"},waiter:{_id:"67rdca3eeb7f6fgeed471820",name:"\u041e\u0444\u0438\u0446\u0438\u0430\u043d\u0442"},physics:{_id:"67rdca3eeb7f6fgeed471814",name:"\u0424\u0438\u0437\u0438\u043a"},engineer:{_id:"67rdca3eeb7f6fgeed471822",name:"\u0418\u043d\u0436\u0435\u043d\u0435\u0440"},actor:{_id:"67rdca3eeb7f6fgeed471824",name:"\u0410\u043a\u0442\u0435\u0440"},cook:{_id:"67rdca3eeb7f6fgeed471829",name:"\u041f\u043e\u0432\u0430\u0440"}},T=[{_id:"67rdca3eeb7f6fgeed471818",name:"\u0414\u043e\u043a\u0442\u043e\u0440"},{_id:"67rdca3eeb7f6fgeed471820",name:"\u041e\u0444\u0438\u0446\u0438\u0430\u043d\u0442"},{_id:"67rdca3eeb7f6fgeed471814",name:"\u0424\u0438\u0437\u0438\u043a"},{_id:"67rdca3eeb7f6fgeed471822",name:"\u0418\u043d\u0436\u0435\u043d\u0435\u0440"},{_id:"67rdca3eeb7f6fgeed471824",name:"\u0410\u043a\u0442\u0435\u0440"},{_id:"67rdca3eeb7f6fgeed471829",name:"\u041f\u043e\u0432\u0430\u0440"}],H={tedious:{_id:"67rdca3eeb7f6fgeed471198",name:"\u041d\u0443\u0434\u0438\u043b\u0430",color:"primary"},strange:{_id:"67rdca3eeb7f6fgeed471100",name:"\u0421\u0442\u0440\u0430\u043d\u043d\u044b\u0439",color:"secondary"},buller:{_id:"67rdca3eeb7f6fgeed4711012",name:"\u0422\u0440\u043e\u043b\u044c",color:"success"},alcoholic:{_id:"67rdca3eeb7f6fgeed471101",name:"\u0410\u043b\u043a\u043e\u0433\u043e\u043b\u0438\u043a",color:"danger"},handsome:{_id:"67rdca3eeb7f6fgeed471102",name:"\u041a\u0440\u0430\u0441\u0430\u0432\u0447\u0438\u043a",color:"info"},uncertain:{_id:"67rdca3eeb7f6fgeed471102",name:"\u041d\u0435\u0443\u0432\u0435\u0440\u0435\u043d\u043d\u044b\u0439",color:"dark"}},R=[{_id:"67rdca3eeb7f6fgeed471815",name:"\u0414\u0436\u043e\u043d \u0414\u043e\u0440\u0438\u0430\u043d",profession:B.doctor,qualities:[H.tedious,H.uncertain,H.strange],completedMeetings:36,rate:2.5,bookmark:!1},{_id:"67rdca3eeb7f6fgeed471816",name:"\u041a\u043e\u043a\u0441",profession:B.doctor,qualities:[H.buller,H.handsome,H.alcoholic],completedMeetings:15,rate:2.5,bookmark:!1},{_id:"67rdca3eeb7f6fgeed471817",name:"\u0411\u043e\u0431 \u041a\u0435\u043b\u0441\u043e",profession:B.doctor,qualities:[H.buller],completedMeetings:247,rate:3.5,bookmark:!1},{_id:"67rdca3eeb7f6fgeed471818",name:"\u0420\u044d\u0439\u0447\u0435\u043b \u0413\u0440\u0438\u043d",profession:B.waiter,qualities:[H.uncertain],completedMeetings:148,rate:3.5,bookmark:!1},{_id:"67rdca3eeb7f6fgeed471819",name:"\u0428\u0435\u043b\u0434\u043e\u043d \u041a\u0443\u043f\u0435\u0440",profession:B.physics,qualities:[H.strange,H.tedious],completedMeetings:37,rate:4.6,bookmark:!1},{_id:"67rdca3eeb7f6fgeed471820",name:"\u041b\u0435\u043e\u043d\u0430\u0440\u0434 \u0425\u043e\u0444\u0441\u0442\u0435\u0434\u0442\u0435\u0440",profession:B.physics,qualities:[H.strange,H.uncertain],completedMeetings:147,rate:3.5,bookmark:!1},{_id:"67rdca3eeb7f6fgeed471821",name:"\u0413\u043e\u0432\u0430\u0440\u0434 \u0412\u043e\u043b\u043e\u0432\u0438\u0446",profession:B.engineer,qualities:[H.strange,H.tedious],completedMeetings:72,rate:3.5,bookmark:!1},{_id:"67rdca3eeb7f6fgeed471822",name:"\u041d\u0438\u043a\u043e\u043b\u0430 \u0422\u0435\u0441\u043b\u0430",profession:B.engineer,qualities:[H.handsome],completedMeetings:72,rate:5,bookmark:!1},{_id:"67rdca3eeb7f6fgeed471823",name:"\u041c\u043e\u043d\u0438\u043a\u0430 \u0413\u0435\u043b\u043b\u0435\u0440",profession:B.cook,qualities:[H.strange,H.uncertain],completedMeetings:17,rate:4.5,bookmark:!1},{_id:"67rdca3eeb7f6fgeed471824",name:"\u0420\u0430\u0442\u0430\u0442\u0443\u0439",profession:B.cook,qualities:[H.handsome,H.buller],completedMeetings:17,rate:4.5,bookmark:!1},{_id:"67rdca3eeb7f6fgeed47181f",name:"\u0414\u0436\u043e\u0443\u0438 \u0422\u0440\u0438\u0431\u0431\u0438\u0430\u043d\u0438",profession:B.actor,qualities:[H.uncertain,H.strange],completedMeetings:434,rate:3.5,bookmark:!1},{_id:"67rdca3eeb7f6fgeed47181r",name:"\u0411\u0440\u044d\u0434 \u041f\u0438\u0442\u0442",profession:B.actor,qualities:[H.handsome],completedMeetings:434,rate:5,bookmark:!1}],U={users:{fetchAll:function(){return new Promise((function(e){window.setTimeout((function(){e(R)}),2e3)}))},getById:function(e){return new Promise((function(t){window.setTimeout((function(){t(R.find((function(t){return t._id===e})))}),1e3)}))}},professions:{fetchAllProfessions:function(){return new Promise((function(e){window.setTimeout((function(){e(T)}),2e3)}))}}},Y=function(e){var t,n=e.length;return Object(u.jsx)("div",{children:Object(u.jsx)("h2",{children:Object(u.jsx)(d.a,{bg:n>0?"primary":"danger",children:(t=n,t>0?"".concat(t,2===t||3===t||4===t?" \u0447\u0435\u043b\u043e\u0432\u0435\u043aa \u0442\u0443\u0441\u0430\u043d\u0435\u0442 \u0441\u0442\u043e\u0431\u043e\u0439 \u0441\u0435\u0433\u043e\u0434\u043d\u044f":" \u0447\u0435\u043b\u043e\u0432\u0435\u043a \u0442\u0443\u0441\u0430\u043d\u0435\u0442 \u0441\u0442\u043e\u0431\u043e\u0439 \u0441\u0435\u0433\u043e\u0434\u043d\u044f"):"\u043d\u0438\u043a\u043e\u0433\u043e \u043d\u0435\u0442")})})})},J=n(8),G=function(e){var t=e.id,n=(e.users,Object(r.useState)()),i=Object(l.a)(n,2),o=i[0],c=i[1];return Object(r.useEffect)((function(){U.users.getById(t).then((function(e){c(e),console.log("dataUsrProfile",e)}))}),[]),o?Object(u.jsxs)("div",{className:"d-flex flex-column flex-shrink-3 p-3",children:[Object(u.jsx)("h1",{children:o.name}),Object(u.jsx)("h2",{children:o.profession.name}),Object(u.jsx)("h3",{children:Object(u.jsx)(m,{qualities:Object.assign({},o.qualities)})}),Object(u.jsxs)("h3",{children:["meetings: ",o.completedMeetings]}),Object(u.jsxs)("h3",{children:["rate: ",o.rate]}),Object(u.jsx)("div",{className:"flex-shrink-2",children:Object(u.jsx)(x.b,{style:{color:"white",textDecoration:"none",fontSize:20,borderRadius:8,fontStyle:"bold",alignItems:"center"},to:"/users",children:Object(u.jsx)("div",{className:"flex-shrink-2",children:Object(u.jsx)(p.a,{size:"lg",className:"mt-2",variant:"secondary",children:"all users"})})})})]}):Object(u.jsx)("h2",{children:"loading..."})},$=function(e){e.props;var t=Object(J.h)().userId,n=Object(r.useState)(1),o=Object(l.a)(n,2),c=o[0],a=o[1],d=Object(r.useState)(),m=Object(l.a)(d,2),b=m[0],j=m[1],f=Object(r.useState)(),h=Object(l.a)(f,2),x=h[0],g=h[1],k=Object(r.useState)({iterator:"name",order:"asc"}),O=Object(l.a)(k,2),y=O[0],E=O[1],F=Object(r.useState)(),M=Object(l.a)(F,2),L=M[0],S=M[1];Object(r.useEffect)((function(){U.users.fetchAll().then((function(e){S(e),console.log("data",e)}))}),[]);Object(r.useEffect)((function(){return U.professions.fetchAllProfessions().then((function(e){return j(Object.assign(e,{allPofession:{name:"all professions"}}))})),console.log("change"),function(){console.log("unmount")}}),[]),Object(r.useEffect)((function(){console.log("selectedProfession",x),a(1)}),[x]);var _=x&&x._id?L.filter((function(e){return e.profession.name===x.name})):L,z=null===_||void 0===_?void 0:_.length,C=function(e,t,n){var r=(t-1)*n;return N()(e).slice(r).take(n).value()}(N.a.orderBy(_,[y.iterator],[y.order]),c,4),W=4*(c-1);return Object(u.jsx)(i.a.Fragment,{children:t?Object(u.jsx)(G,{users:L,id:t}):z&&Object(u.jsxs)("div",{className:"d-flex flex-column p-3",children:[Object(u.jsx)("div",{className:"d-flex flex-direction-row flex-wrap-wrap w-100",children:Object(u.jsx)(Y,{length:z})}),Object(u.jsxs)("div",{className:"d-flex flex-direction-row flex-wrap-wrap w-100",children:[Object(u.jsxs)("div",{className:"d-flex flex-column flex-shrink-3 p-3",children:[b&&Object(u.jsx)(A,{items:b,onItemSelect:function(e){g(e),console.log("params",e)},selected:x,valueProperty:"_id",activeProperty:"name"}),Object(u.jsx)("div",{className:"flex-shrink-2",children:Object(u.jsx)(p.a,{size:"lg",className:"mt-2",variant:"secondary",value:"clear",type:"reset",onClick:function(){g()},children:"Clear"})})]}),Object(u.jsxs)("div",{className:"d-flex flex-column p-3",children:[Object(u.jsx)(v,{userCrop:C,startIndex:W,onDelete:function(e){var t=L.filter((function(t){return t._id!==e}));S(t)},onToggleBookmark:function(e){var t=Object(s.a)(L),n=t.findIndex((function(t){return t._id===e}));t[n].bookmark=!t[n].bookmark,S(t)},onSort:E,currentSort:y}),Object(u.jsx)("div",{className:"d-flex flex-direction-row justify-content-center",children:Object(u.jsx)(w,{itemsCount:z,pageSize:4,onPageChange:function(e){console.log("pageIndx",e),a(e)},activePage:c})})]})]})]})})},K=n(40),Q=n(141),V=n(143),X=n(140),Z=n(142),ee=n(96),te=n(41),ne=Object(te.a)(X.a)(z||(z=Object(K.a)(["\ntext-decoration: none;\n&:hover {\n    background-color: #ced4da;\n    border-radius: 3px;\n}\n"]))),re=Object(te.a)(x.c)(C||(C=Object(K.a)(["\n     text-decoration: none;\n    &:hover {\n        background-color: #ced4da;\n        border-radius: 3px;\n    }\n    &.active {\n        border-radius: 3px;\n        color: #fff;\n        border-color: #16fe5c;\n        background-color: #6c757d;\n        text-color: tomato;\n        text-decoration: none;\n        a:active{\n            color: #fff;\n          }\n    }\n"]))),ie=function(){var e=Object(J.g)(),t=Object(r.useState)(!1),n=Object(l.a)(t,2),i=(n[0],n[1]);return Object(r.useEffect)((function(){setTimeout((function(){i((function(e){return!e}))}),1)}),[1]),Object(u.jsxs)(Q.a,{bg:"light",expand:"lg",children:[Object(u.jsx)(Q.a.Brand,{href:"/",style:{marginLeft:15},children:"Fast Company"}),Object(u.jsx)(Q.a.Toggle,{"aria-controls":"responsive-navbar-nav",style:{marginRight:15}}),Object(u.jsxs)(Q.a.Collapse,{id:"navbarScroll",children:[Object(u.jsxs)(V.a,{className:"mr-auto my-2 my-lg-1",style:{maxHeight:"100px"},navbarScroll:!0,children:[Object(u.jsx)(V.a.Link,{exact:!0,as:re,to:"/",activeStyle:{color:"white",textDecoration:"none"},children:"Home"}),Object(u.jsx)(V.a.Link,{exact:!0,as:re,to:"/users",activeStyle:{color:"white",textDecoration:"none"},children:"Users"}),Object(u.jsxs)(ne,{exact:"true",onMouseLeave:function(){return i(!1)},onMouseOver:function(){return i(!0)},title:"Login",onToggle:function(){"/sign-in"!==e.pathname&&(window.location.href="/sign-in")},id:"navbarScrollingDropdown",children:[Object(u.jsx)(X.a.Item,{href:"/sign-in",to:"/sign-in",as:x.b,children:"Sign In"}),Object(u.jsx)(X.a.Item,{href:"/sign-up",to:"/sign-up",as:x.b,children:"Sign Up"}),Object(u.jsx)(X.a.Divider,{}),Object(u.jsx)(X.a.Item,{href:"#action5",children:"Exit"})]})]}),Object(u.jsx)(V.a,{className:"dropdown-menu-right navbar-right justify-content-end mr-auto my-rg-2",style:{width:"100%",marginRight:15},children:Object(u.jsxs)(Z.a,{className:"d-flex justify-content-end mr-auto my-rg-1",children:[Object(u.jsx)(ee.a,{type:"search",placeholder:"Search",className:"mr-auto","aria-label":"Search"}),Object(u.jsx)(p.a,{variant:"outline-success",children:"Search"})]})})]})]})},oe=(n(123),["title","titleId"]);function ce(){return(ce=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function ae(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function se(e,t){var n=e.title,i=e.titleId,o=ae(e,oe);return r.createElement("svg",ce({width:"833px",height:"637px",viewBox:"0 0 833 637",ref:t,"aria-labelledby":i},o),n?r.createElement("title",{id:i},n):null,W||(W=r.createElement("g",{"data-spirit-id":"right-cactus"},r.createElement("g",{"data-spirit-id":"right-body"},r.createElement("path",{fill:"#29EA90",d:"M565.5,459.5c0,0,13-112,13-136s-27-37-44-37s-44,13-44,37s13,136,13,136H565.5z"}),r.createElement("path",{fill:"#22B562",d:"M546,288c0,0,14,14,19,29s-11,142-11,142h11c0,0,19-126.3,12-145S546,288,546,288z"}),r.createElement("path",{fill:"none",stroke:"#000000",strokeWidth:6,strokeMiterlimit:10,d:"M565.5,459.5c0,0,13-112,13-136s-27-37-44-37           s-44,13-44,37s13,136,13,136H565.5z"}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:535,y1:285,x2:535,y2:276}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:572,y1:303,x2:579,y2:297}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:579,y1:331,x2:589,y2:331}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:569.3,y1:407,x2:576.9,y2:407}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:497,y1:303,x2:490,y2:297}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:490,y1:331,x2:480,y2:331}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:499.7,y1:407,x2:492.1,y2:407}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:573.5,y1:369,x2:582.1,y2:369}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:495.5,y1:369,x2:486.9,y2:369}),r.createElement("g",{"data-spirit-id":"right-eyes"},r.createElement("circle",{cx:516,cy:348,r:4}),r.createElement("circle",{cx:556,cy:348,r:4}))),r.createElement("g",{"data-spirit-id":"right-pot"},r.createElement("g",{display:"none"},r.createElement("polygon",{display:"inline",fill:"#FFFFFF",points:"494.7,497 505,537 565,537 576.3,497  "})),r.createElement("polygon",{fill:"#FFDF54",points:"555,497 546,534 567,534 577,497  "}),r.createElement("polygon",{fill:"#FFDF54",points:"574,505 496,505 494,497 575.5,497  "}),r.createElement("polygon",{fill:"#E2AF13",points:"554.5,500.1 553.1,505 574,505 576,497  "}),r.createElement("g",null,r.createElement("path",{d:"M574.1,497l-9.6,34h-57.9l-9.6-34H574.1 M582,491h-93l13,46h67L582,491L582,491z"})),r.createElement("path",{fill:"#FFFFFF",d:"M582.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32           C586,495.3,584.3,497,582.3,497z"}),r.createElement("path",{fill:"#FFDF54",d:"M582.3,497h-27.8v-39.5h27.8c2.1,0,3.7,1.7,3.7,3.7v32C586,495.3,584.3,497,582.3,497z"}),r.createElement("path",{fill:"none",stroke:"#000000",strokeWidth:6,strokeMiterlimit:10,d:"M582.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32           c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32C586,495.3,584.3,497,582.3,497z"})))),P||(P=r.createElement("g",{"data-spirit-id":"left-cactus"},r.createElement("g",{"data-spirit-id":"left-body"},r.createElement("path",{fill:"#29EA90",d:"M305.5,459.5c0,0,13-42,13-66s-27-37-44-37s-44,13-44,37s13,66,13,66H305.5z"}),r.createElement("path",{fill:"#22B562",d:"M286,360c0,0,15,10,20,25s-12,74-12,74h11c0,0,19-57.7,12-76.3C310,364,286,360,286,360z"}),r.createElement("path",{fill:"none",stroke:"#000000",strokeWidth:6,strokeMiterlimit:10,d:"M305.5,459.5c0,0,13-42,13-66s-27-37-44-37           s-44,13-44,37s13,66,13,66H305.5z"}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:275,y1:356,x2:275,y2:347}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:312,y1:374,x2:319,y2:368}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:319,y1:402,x2:329,y2:402}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:311,y1:440,x2:319,y2:440}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:237,y1:374,x2:230,y2:368}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:230,y1:402,x2:220,y2:402}),r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeLinejoin:"round",strokeMiterlimit:10,x1:238,y1:440,x2:230,y2:440}),r.createElement("g",{"data-spirit-id":"left-eyes"},r.createElement("circle",{cx:256,cy:408,r:4}),r.createElement("circle",{cx:296,cy:408,r:4})),r.createElement("circle",{"data-spirit-id":"left-mouth",cx:275,cy:438,r:7})),r.createElement("g",{"data-spirit-id":"left-pot"},r.createElement("g",{display:"none"},r.createElement("polygon",{display:"inline",fill:"#FFFFFF",points:"234.7,497 245,537 305,537 316.3,497  "})),r.createElement("polygon",{fill:"#FFDF54",points:"295,497 286,534 307,534 317,497  "}),r.createElement("polygon",{fill:"#FFDF54",points:"314,505 236,505 234,497 315.5,497  "}),r.createElement("polygon",{fill:"#E2AF13",points:"294.5,500.1 293.1,505 314,505 316,497  "}),r.createElement("g",null,r.createElement("path",{d:"M314.1,497l-9.6,34h-57.9l-9.6-34H314.1 M322,491h-93l13,46h67L322,491L322,491z"})),r.createElement("path",{fill:"#FFFFFF",d:"M322.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32           C326,495.3,324.3,497,322.3,497z"}),r.createElement("path",{fill:"#FFDF54",d:"M322.3,497h-27.8v-39.5h27.8c2.1,0,3.7,1.7,3.7,3.7v32C326,495.3,324.3,497,322.3,497z"}),r.createElement("path",{fill:"none",stroke:"#000000",strokeWidth:6,strokeMiterlimit:10,d:"M322.3,497h-93c-2.1,0-3.7-1.7-3.7-3.7v-32           c0-2.1,1.7-3.7,3.7-3.7h93c2.1,0,3.7,1.7,3.7,3.7v32C326,495.3,324.3,497,322.3,497z"})))),q||(q=r.createElement("line",{fill:"none",stroke:"#000000",strokeWidth:6,strokeLinecap:"round",strokeMiterlimit:10,x1:159,y1:534,x2:651,y2:534})),I||(I=r.createElement("g",{"data-spirit-id":"bubble"},r.createElement("circle",{fill:"#D1FFFF",cx:198,cy:235,r:62}),r.createElement("g",null,r.createElement("g",null,r.createElement("path",{fill:"none",stroke:"#FFFFFF",strokeWidth:6,strokeLinecap:"round",strokeMiterlimit:10,d:"M155.3,237.4             c0-2.5,0.2-5,0.6-7.5"}),r.createElement("path",{fill:"none",stroke:"#FFFFFF",strokeWidth:6,strokeLinecap:"round",strokeMiterlimit:10,strokeDasharray:"0,4.0691,18.718,0",d:"             M162.5,212.6c4.1-6.4,9.7-11.8,16.4-15.5"}),r.createElement("path",{fill:"none",stroke:"#FFFFFF",strokeWidth:6,strokeLinecap:"round",strokeMiterlimit:10,d:"M178.9,197.1             c2.2-1.2,4.4-2.3,6.8-3.1"}))),r.createElement("path",{fill:"#7FF4FF",d:"M228.2,180.3c8,10.4,12.8,23.5,12.8,37.7c0,34.2-27.8,62-62,62c-10.6,0-20.5-2.6-29.2-7.3         c11.3,14.8,29.2,24.3,49.2,24.3c34.2,0,62-27.8,62-62C261,211.3,247.7,190.8,228.2,180.3z"}),r.createElement("path",{fill:"#7FF4FF",d:"M226.8,183.8c7.5,9.8,12,22.1,12,35.4c0,32.2-26.1,58.3-58.3,58.3c-9.9,0-19.3-2.5-27.5-6.9         c10.7,13.9,27.4,22.9,46.3,22.9c32.2,0,58.3-26.1,58.3-58.3C257.7,213,245.2,193.6,226.8,183.8z"}),r.createElement("g",null,r.createElement("path",{d:"M198,179c30.9,0,56,25.1,56,56s-25.1,56-56,56s-56-25.1-56-56S167.1,179,198,179 M198,173c-34.2,0-62,27.8-62,62           s27.8,62,62,62s62-27.8,62-62S232.2,173,198,173L198,173z"})))),D||(D=r.createElement("g",{"data-spirit-id":"burst"},r.createElement("g",{"data-spirit-id":"burst-strokes"},r.createElement("line",{"data-spirit-id":"bust-stroke-4",fill:"none",stroke:"#000000",strokeWidth:5,strokeLinecap:"round",strokeMiterlimit:10,x1:437,y1:192,x2:437,y2:110}),r.createElement("line",{"data-spirit-id":"bust-stroke-3",fill:"none",stroke:"#000000",strokeWidth:5,strokeLinecap:"round",strokeMiterlimit:10,x1:437.5,y1:360,x2:437.5,y2:278}),r.createElement("line",{"data-spirit-id":"bust-stroke-2",fill:"none",stroke:"#000000",strokeWidth:5,strokeLinecap:"round",strokeMiterlimit:10,x1:480.2,y1:234.8,x2:562.2,y2:234.8}),r.createElement("line",{"data-spirit-id":"bust-stroke-1",fill:"none",stroke:"#000000",strokeWidth:5,strokeLinecap:"round",strokeMiterlimit:10,x1:312.2,y1:235.2,x2:394.2,y2:235.2})),r.createElement("g",{"data-spirit-id":"burst-bubbles"},r.createElement("circle",{"data-spirit-id":"burst-bubble-3",fill:"#36EA96",cx:455.5,cy:215.5,r:9}),r.createElement("circle",{"data-spirit-id":"burst-bubble-2",fill:"#5BD0FB",cx:394.5,cy:206.5,r:6}),r.createElement("circle",{"data-spirit-id":"burst-bubble-1",fill:"#5BD0FB",cx:394.5,cy:266.5,r:6})))))}var le,de,ue=r.forwardRef(se),me=(n.p,n(100)),be=n.n(me),je=n(102),fe=function(){return be.a.loadAnimation({loop:!0,path:"https://s3-us-west-2.amazonaws.com/s.cdpn.io/693612/cactus.json"}).then((function(){je.a.set("svg",{autoAlpha:1})})),Object(u.jsxs)("div",{className:"svg-animation",children:[Object(u.jsx)("h1",{children:"Home under construction"}),Object(u.jsx)(ue,{})]})},he=n(101),pe=n.n(he),xe=(n(133),"abcdefghijklmnopqrstuvwxyz0123456789$+-*/=%\"'#&_(),.;:?!\\|{}<>[]^~\u05e7\u05e8\u05d0\u05d8\u05d5\u05df\u05dd\u05e4][\u05e9\u05d3\u05d2\u05db\u05e2\u05d9\u05d7\u05dc\u05da\u05e3\u05d6\u05e1\u05d1\u05d4\u05e0\u05de\u05e6\u05ea\u05e5./]\u0430\u0431\u0432\u0433\u0434\u0435\u0451\u0436\u0437\u0438\u0439\u043a\u043b\u043c\u043d\u043e\u043f\u0440\u0441\u0442\u0443\u0444\u0445\u0446\u0447\u0448\u0449\u044a\u044b\u044c\u044d\u044e\u044f"),ge=function(e,t){return Math.floor(Math.random()*(t-e))+e},ke=function(){return xe.charAt(Math.floor(Math.random()*xe.length))},Oe=function(){return new Array(ge(15,50)).fill().map((function(e){return ke()}))},ye=function(e){for(var t=[],n=1;n<e.length;n++)Math.random()<.02?t.push(ke()):t.push(e[n]);return t.push(ke()),t},ve=function(e){var t=Object(r.useState)(Oe()),n=Object(l.a)(t,2),i=n[0],o=n[1],c=Object(r.useState)(-50*i.length),a=Object(l.a)(c,2),s=a[0],d=a[1],m=Object(r.useState)(null),b=Object(l.a)(m,2),j=b[0],f=b[1];return Object(r.useEffect)((function(){setTimeout((function(){f(ge(50,100))}),ge(0,8e3))}),[]),pe()((function(){if(e.height&&j){if(s>e.height){o([]);var t=Oe();o(t),d(-44*t.length),f(null),setTimeout((function(){return f(ge(50,100))}),ge(0,8e3))}else d(s+44);o(ye)}}),j),Object(u.jsx)("div",{style:{zIndex:-1,fontFamily:"matrixFont",color:"#20c20e",writingMode:"vertical-rl",textOrientation:"upright",userSelect:"none",whiteSpace:"nowrap",marginTop:s,marginLeft:-15,marginRight:-15,textShadow:"0px 0px 8px rgba(32, 194, 14, 0.8)",fontSize:50},children:i.map((function(e,t){return Object(u.jsx)("a",{style:{marginTop:-12,opacity:t<6?.1+.15*t:1,color:t===i.length-1?"#fff":void 0,textShadow:t===i.length-1?"0px 0px 20px rgba(255, 255, 255, 1)":void 0},children:e},t)}))})},Ee=function(e){var t=Object(r.useRef)(null),n=Object(r.useState)(null),i=Object(l.a)(n,2),o=i[0],c=i[1];Object(r.useEffect)((function(){var e=t.current.getBoundingClientRect();c({width:e.width,height:e.height})}),[]);var a=o?Math.floor(o.width/26):0,s=Object(te.a)(x.c)(le||(le=Object(K.a)(["\n\t&:hover {\n\t\t//box-shadow: 0px 10px 10px -10px rgba(54, 24, 79, 0.5);\n\t\t//transform: translateY(5px);\n\t\tbackground-color: '#20c20e';\n\t\tcolor: white;\n\t}\n\t"]))),d=Object(te.a)(p.a)(de||(de=Object(K.a)(["\n\theight: 70px;\n\tpadding: 0 30px;\n\tborder-radius: 50px;\n\tcursor: pointer;\n\tbox-shadow: 0px 15px 20px rgba(54, 24, 79, 0.5);\n\tz-index: 100;\n\tcolor: #20c20e;\n\tbackground-color: white;\n\ttext-transform: uppercase;\n\tfont-weight: 600;\n\tfont-size: 22px;\n\ttransition: all 0.3s ease;\n\n\t&:hover .my__unique__button {\n\t\tbox-shadow: 0px 10px 10px -10px rgba(54, 24, 79, 0.5);\n\t\ttransform: translateY(5px);\n\t\tbackground: #20c20e;\n\t\tcolor: white;\n\t  }\n\t:hover {\n\t\tbox-shadow: 0px 10px 10px -10px rgba(54, 24, 79, 0.5);\n\t\ttransform: translateY(5px);\n\t\tbackground: '#20c20e';\n\t\tcolor: white;\n\t}\n\t&:focus {\n\t  color: palevioletred;\n\t}\n\t&:active {\n\t  color: red;\n\t}\n  "])));return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{style:{background:"black",position:"fixed",top:0,left:0,bottom:0,right:0,overflow:"ignore",display:"flex",flexDirection:"row",justifyContent:"center"},ref:t,children:new Array(a).fill().map((function(e,t){return Object(u.jsx)(ve,{height:null===o||void 0===o?void 0:o.height},t)}))}),Object(u.jsxs)("div",{className:"not-found",children:[Object(u.jsx)(d,{className:"my__unique__button",variant:"primary",children:Object(u.jsx)(s,{exact:!0,to:"/",style:{color:"#20c20e",textDecoration:"none"},children:"go to home"})}),Object(u.jsx)("form",{className:"four-oh-four-form",children:Object(u.jsx)("input",{type:"text",className:"404-input"})}),Object(u.jsxs)("div",{className:"terminal",children:[Object(u.jsx)("p",{className:"prompt",children:"The page you requested cannot be found. Try click GO HOME: "}),Object(u.jsx)("p",{className:"prompt output new-output"})]})]})]})},Fe=(n(91),function(){return Object(u.jsx)("div",{className:"auth-wrapper",children:Object(u.jsx)("div",{className:"auth-inner",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("h3",{children:"Sign In"}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Email address"}),Object(u.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password"})]}),Object(u.jsx)("div",{className:"form-group",children:Object(u.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(u.jsx)("input",{type:"checkbox",className:"custom-control-input",id:"customCheck1"}),Object(u.jsx)("label",{className:"custom-control-label",htmlFor:"customCheck1",children:"Remember me"})]})}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary btn-block login-btn",children:"Submit"}),Object(u.jsxs)("p",{className:"forgot-password text-right",children:["Forgot ",Object(u.jsx)("a",{href:"#",children:"password?"})]}),Object(u.jsxs)("p",{className:"forgot-password text-right",children:["Not registered?",Object(u.jsx)(x.b,{to:"/sign-up",children:"sign up"})]})]})})})}),Me=function(){return Object(u.jsx)("div",{className:"auth-wrapper",children:Object(u.jsx)("div",{className:"auth-inner",children:Object(u.jsxs)("form",{children:[Object(u.jsx)("h3",{children:"Sign Up"}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"First name"}),Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"First name"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Last name"}),Object(u.jsx)("input",{type:"text",className:"form-control",placeholder:"Last name"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Email address"}),Object(u.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email"})]}),Object(u.jsxs)("div",{className:"form-group",children:[Object(u.jsx)("label",{children:"Password"}),Object(u.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password"})]}),Object(u.jsx)("button",{type:"submit",className:"btn btn-primary btn-block login-btn",children:"Sign Up"}),Object(u.jsxs)("p",{className:"forgot-password text-right",children:["Already registered",Object(u.jsx)(x.b,{to:"/sign-in",children:"sign in?"})]})]})})})};var we=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(x.a,{children:[Object(u.jsx)(ie,{}),Object(u.jsxs)(J.d,{children:[Object(u.jsx)(J.b,{exact:!0,path:"/users/:userId?",render:function(e){return Object(u.jsx)($,Object(a.a)({isAdmin:!1},e))}}),Object(u.jsx)(J.b,{exact:!0,path:"/",component:fe}),Object(u.jsx)(J.b,{exact:!0,path:"/sign-in",component:Fe}),Object(u.jsx)(J.b,{exact:!0,path:"/sign-up",component:Me}),Object(u.jsx)(J.b,{exact:!0,path:"/404",component:Ee}),Object(u.jsx)(J.a,{from:"/admin",to:"/home"}),Object(u.jsx)(J.a,{to:"/404"})]})]})})};c.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(we,{})}),document.getElementById("root"))},91:function(e,t,n){}},[[134,1,2]]]);
//# sourceMappingURL=main.d658d6ee.chunk.js.map