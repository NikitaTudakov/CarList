(this["webpackJsonplist-of-cars"]=this["webpackJsonplist-of-cars"]||[]).push([[0],{133:function(e,t,n){},134:function(e,t,n){},135:function(e,t,n){},161:function(e,t,n){},162:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(11),r=n.n(c),s=(n(133),n(213)),i=(n(134),n(135),n(110)),l=n.n(i),o=n(193),j=n(3),d=function(){return Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("div",{className:"header__container",children:[Object(j.jsx)("a",{href:"#",className:"header__logo",children:"Logo"}),Object(j.jsxs)("div",{children:[Object(j.jsx)("a",{href:"#",className:"header__login",children:"Username"}),Object(j.jsx)(o.a,{children:Object(j.jsx)(l.a,{style:{color:"black"}})})]})]})})},b=n(14),u=n(92),O="https://test-backend.esverito.com/",h=function(e,t){return fetch("".concat(O).concat(e),t).then((function(e){if(!e.ok)throw"".concat(e.status," - ").concat(e.statusText);return e.json()}))},x=n(111),f=n.n(x),p=n(59),m=n.n(p),g=n(91),v=n.n(g),C=n(90),N=n.n(C),y=m()((function(e){return{root:{flexShrink:0,marginLeft:e.spacing(10)}}}));function S(e){var t=e.count,n=e.page,a=e.rowsPerPage,c=e.onChangePage,r=y(),s=f()();return Object(j.jsxs)("div",{className:r.root,children:[Object(j.jsx)(o.a,{onClick:function(e){c(e,n-1)},disabled:0===n,children:"rtl"===s.direction?Object(j.jsx)(N.a,{}):Object(j.jsx)(v.a,{})}),Object(j.jsx)(o.a,{onClick:function(e){c(e,n+1)},disabled:n>=Math.ceil(t/a)-1,children:"rtl"===s.direction?Object(j.jsx)(v.a,{}):Object(j.jsx)(N.a,{})})]})}var k=m()((function(e){return{paper:{position:"absolute",width:775,backgroundColor:e.palette.background.paper,"border-radius":4,padding:e.spacing(3,4,3),top:"50%",left:"50%",transform:"translate(-50%, -50%)",display:"flex",flexDirection:"column"},textField:{width:"338px",margin:e.spacing(2)},footer:{display:"flex",justifyContent:"flex-end",margin:e.spacing(2)},header:{display:"flex",justifyContent:"space-between"},"button-main":{marginLeft:"10px",backgroundColor:"#22B2BE","&:hover":{backgroundColor:"#22B2BE",opacity:"0.8"}}}})),E=n(210),T=n(211),A=n(199),F=n(81),B=n.n(F),P=function(e){var t=e.handleClose,n=e.open,c=e.car,r=Object(a.useState)(""),s=Object(b.a)(r,2),i=s[0],l=s[1],d=Object(a.useState)(""),u=Object(b.a)(d,2),O=u[0],x=u[1],f=Object(a.useState)(""),p=Object(b.a)(f,2),m=p[0],g=p[1],v=Object(a.useState)(""),C=Object(b.a)(v,2),N=C[0],y=C[1],S=Object(a.useState)(!1),F=Object(b.a)(S,2),P=F[0],w=F[1],D=["FUEL","GAS","HYBRID"];Object(a.useEffect)((function(){l(c.model),x(c.brand),g(c.carNumber),y(c.engineType)}),[n]);var _=k();return Object(j.jsx)(E.a,{open:n,onClose:t,children:Object(j.jsx)("form",{onSubmit:function(e){var n,a;e.preventDefault(),t(),n=c.id,a={brand:O,carNumber:m,engineType:N,model:i},h("api/car/".concat(n),{method:"PATCH",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)})},children:Object(j.jsxs)("div",{className:_.paper,children:[Object(j.jsxs)("div",{className:_.header,children:[Object(j.jsx)("h3",{children:"EDIT CAR INFORMATION"}),Object(j.jsx)(o.a,{onClick:t,children:Object(j.jsx)(B.a,{})})]}),Object(j.jsxs)("div",{className:_.body,children:[Object(j.jsx)(T.a,{required:!0,label:"Brand",variant:"filled",className:_.textField,value:O,onChange:function(e){return x(e.target.value)}}),Object(j.jsx)(T.a,{required:!0,label:"Model",variant:"filled",className:_.textField,value:i,onChange:function(e){return l(e.target.value)}}),Object(j.jsx)(T.a,{required:!0,label:"Car number",variant:"filled",className:_.textField,value:m,onChange:function(e){return g(e.target.value)}}),Object(j.jsx)(T.a,{onBlur:function(){D.includes(N)?w(!1):w(!0)},helperText:D.includes(N)?" ":"Please, choose GAS or FUEL or HYBRID",label:"Engine Type",variant:"filled",className:_.textField,value:N,onChange:function(e){return y(e.target.value)}})]}),Object(j.jsxs)("div",{className:_.footer,children:[Object(j.jsx)(A.a,{required:!0,className:_.button,variant:"outlined",color:"secondary",onClick:t,children:"Cancel"}),Object(j.jsx)(A.a,{disabled:P,className:_["button-main"],variant:"contained",color:"primary",type:"submit",children:"SAVE"})]})]})})})},w=n(201),D=n(205),_=n(204),I=n(202),R=n(200),L=n(206),W=n(209),q=n(203),U=n(198),H=n(112),M=n.n(H),G=n(113),J=n.n(G),Y=m()({table:{minWidth:300}}),K=function(e){var t=e.createOpen,n=Y(),c=Object(a.useState)(!1),r=Object(b.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)(!1),d=Object(b.a)(l,2),x=d[0],f=d[1],p=Object(a.useState)(0),m=Object(b.a)(p,2),g=m[0],v=m[1],C=Object(a.useState)(5),N=Object(b.a)(C,2),y=N[0],k=N[1],E=Object(a.useState)([]),T=Object(b.a)(E,2),A=T[0],F=T[1],B=Object(a.useState)(!1),H=Object(b.a)(B,2),G=H[0],K=H[1],V=Object(a.useState)({}),z=Object(b.a)(V,2),Q=z[0],X=z[1];Object(a.useEffect)((function(){h("api/car/").then((function(e){return F(e.cars)})),i(!1)}),[s,G,t]);return Object(j.jsx)(R.a,{component:U.a,children:Object(j.jsxs)(w.a,{className:n.table,children:[Object(j.jsx)(I.a,{children:Object(j.jsxs)(q.a,{children:[Object(j.jsx)(_.a,{style:{fontWeight:700,cursor:"pointer"},onClick:function(){F(x?Object(u.a)(A).sort((function(e,t){return t.brand.localeCompare(e.brand)})):Object(u.a)(A).sort((function(e,t){return e.brand.localeCompare(t.brand)}))),f((function(e){return!e}))},children:"Brand"}),Object(j.jsx)(_.a,{style:{fontWeight:700},children:"Car Number"}),Object(j.jsx)(_.a,{style:{fontWeight:700},children:"Engine Type"}),Object(j.jsx)(_.a,{style:{fontWeight:700},children:"Model"}),Object(j.jsx)(_.a,{style:{width:160,fontWeight:700},align:"right",children:"Actions"})]})}),Object(j.jsx)(D.a,{children:(y>0?A.slice(g*y,g*y+y):A).map((function(e){return Object(j.jsxs)(q.a,{children:[Object(j.jsx)(_.a,{component:"th",scope:"row",children:e.brand}),Object(j.jsx)(_.a,{children:e.carNumber}),Object(j.jsx)(_.a,{children:e.engineType}),Object(j.jsx)(_.a,{children:e.model}),Object(j.jsxs)(_.a,{style:{width:160},align:"right",children:[Object(j.jsx)(o.a,{onClick:function(){K(!0),X(e)},children:Object(j.jsx)(M.a,{style:{color:"black"}})}),Object(j.jsx)(o.a,{onClick:function(){var t;t="api/car/".concat(e.id),fetch("".concat(O).concat(t),{method:"DELETE"}),i(!0)},children:Object(j.jsx)(J.a,{style:{color:"red"}})})]})]},e.id)}))}),Object(j.jsx)(L.a,{children:Object(j.jsx)(q.a,{children:Object(j.jsx)(W.a,{rowsPerPageOptions:[5,10,25],colSpan:5,count:A.length,rowsPerPage:y,page:g,onChangePage:function(e,t){v(t)},onChangeRowsPerPage:function(e){k(parseInt(e.target.value,10)),v(0)},ActionsComponent:S})})}),Object(j.jsx)(P,{open:G,handleClose:function(){K(!1)},car:Q})]})})},V=function(e){var t=e.handleClose,n=e.open,c=Object(a.useState)(""),r=Object(b.a)(c,2),s=r[0],i=r[1],l=Object(a.useState)(""),d=Object(b.a)(l,2),u=d[0],O=d[1],x=Object(a.useState)(""),f=Object(b.a)(x,2),p=f[0],m=f[1],g=Object(a.useState)(""),v=Object(b.a)(g,2),C=v[0],N=v[1],y=Object(a.useState)(!0),S=Object(b.a)(y,2),F=S[0],P=S[1],w=["GAS","FUEL","HYBRID"],D=k();return Object(j.jsx)(E.a,{open:n,onClose:t,children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault(),t(),function(e,t,n,a){h("api/car/",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({brand:e,model:t,carNumber:n,engineType:a})})}(u,s,p,C),i(""),O(""),m(""),N("")},children:Object(j.jsxs)("div",{className:D.paper,children:[Object(j.jsxs)("div",{className:D.header,children:[Object(j.jsx)("h3",{children:"ADD A NEW CAR"}),Object(j.jsx)(o.a,{onClick:t,children:Object(j.jsx)(B.a,{})})]}),Object(j.jsxs)("div",{className:D.body,children:[Object(j.jsx)(T.a,{required:!0,label:"Brand",variant:"filled",className:D.textField,value:u,onChange:function(e){return O(e.target.value)}}),Object(j.jsx)(T.a,{required:!0,label:"Model",variant:"filled",className:D.textField,value:s,onChange:function(e){return i(e.target.value)}}),Object(j.jsx)(T.a,{required:!0,label:"Car number",variant:"filled",className:D.textField,value:p,onChange:function(e){return m(e.target.value)}}),Object(j.jsx)(T.a,{onBlur:function(){w.includes(C)?P(!1):P(!0)},helperText:w.includes(C)?" ":"Please, choose GAS or FUEL or HYBRID",label:"Engine Type",variant:"filled",className:D.textField,value:C,onChange:function(e){return N(e.target.value)}})]}),Object(j.jsxs)("div",{className:D.footer,children:[Object(j.jsx)(A.a,{className:D.button,variant:"outlined",color:"secondary",onClick:t,children:"Cancel"}),Object(j.jsx)(A.a,{disabled:F,className:D["button-main"],variant:"contained",color:"primary",type:"submit",children:"OK"})]})]})})})},z=(n(161),n(207)),Q=function(){var e=Object(a.useState)(!1),t=Object(b.a)(e,2),n=t[0],c=t[1];return Object(j.jsxs)(z.a,{maxWidth:"lg",className:"list",children:[Object(j.jsxs)(s.a,{className:"list__menu",children:[Object(j.jsx)("h1",{className:"list__title",children:"CAR LIST"}),Object(j.jsx)("button",{className:"list__add",onClick:function(){c(!0)},children:"ADD CAR"}),Object(j.jsx)(V,{open:n,handleClose:function(){c(!1)}})]}),Object(j.jsx)(K,{createOpen:n})]})};var X=function(){return Object(j.jsxs)(s.a,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(Q,{})]})};r.a.render(Object(j.jsx)(X,{}),document.getElementById("root"))}},[[162,1,2]]]);
//# sourceMappingURL=main.dba8bca7.chunk.js.map