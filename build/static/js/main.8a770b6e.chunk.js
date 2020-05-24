(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{51:function(e,n,t){e.exports=t(78)},76:function(e,n,t){},78:function(e,n,t){"use strict";t.r(n);var a=t(49),r=t(15),o=t(14),c=t.n(o),l=t(0),u=t.n(l),s=t(16),i=t(9),m=t(45),h=function(e){return u.a.createElement(i.a.Control,{placeholder:"Filter contacts ",onChange:e.changeFilter})},d=t(82),p=function(e){return u.a.createElement(d.a,{show:e.show,onHide:e.closeConfirmChangeModal},u.a.createElement(d.a.Dialog,null,u.a.createElement(d.a.Header,{closeButton:!0},u.a.createElement(d.a.Title,null,"Update Number")),u.a.createElement(d.a.Body,null,u.a.createElement("p",null,"is already added to phonebook, replace the old number with a new one?")),u.a.createElement(d.a.Footer,null,u.a.createElement(s.a,{variant:"secondary",onClick:e.closeConfirmChangeModal},"Cancel"),u.a.createElement(s.a,{variant:"primary",onClick:e.handleChangeNumberModalOK},"OK"))))},f=function(e){return u.a.createElement("div",null,u.a.createElement(m.a,null,u.a.createElement(i.a,{onSubmit:e.addPerson},u.a.createElement(i.a.Group,{controlId:"PhoneBookForm"},u.a.createElement(i.a.Control,{placeholder:"First name",onChange:function(n){return e.setNewName(n.target.value)},value:e.newName}),u.a.createElement(i.a.Control,{placeholder:"Number",onChange:function(n){return e.setNewPhoneNumber(n.target.value)},value:e.newPhoneNumber}),u.a.createElement(s.a,{variant:"secondary",type:"submit"},"add"))),u.a.createElement(i.a,null,u.a.createElement(i.a.Row,null,u.a.createElement(h,{changeFilter:e.changeFilter})))))},b=t(24),E=t(25),g=t(28),v=t(27),O=t(26),j=t(20),N=t.n(j),C="/api/persons",w=function(){return N.a.get(C).then((function(e){return e.data}))},y=function(e){return N.a.post(C,e).then((function(e){return e.data}))},P=function(e,n){return N.a.put("".concat(C,"/").concat(e),n).then((function(e){return e.data}))},k=function(e){return N.a.delete("".concat(C,"/").concat(e)).then((function(e){return e.data}))},S=function(e){Object(g.a)(t,e);var n=Object(v.a)(t);function t(e){return Object(b.a)(this,t),n.call(this,e)}return Object(E.a)(t,[{key:"handleDelete",value:function(e,n,t){k(e).then((function(a){t(n.filter((function(n){return n.id!==e})))}))}},{key:"render",value:function(){var e=this;return u.a.createElement(O.a.Item,null,this.props.person.name," ",this.props.person.number,u.a.createElement(s.a,{variant:"outline-danger",className:"delete-btn",onClick:function(n){return e.handleDelete(e.props.person.id,e.props.persons,e.props.setPersons)}},"X")," ")}}]),t}(u.a.Component),F=function(e){Object(g.a)(t,e);var n=Object(v.a)(t);function t(e){return Object(b.a)(this,t),n.call(this,e)}return Object(E.a)(t,[{key:"render",value:function(){var e=this;return u.a.createElement(O.a,null,this.props.persons.map((function(n){return u.a.createElement(S,{key:n.id,person:n,persons:e.props.persons,setPersons:e.props.setPersons})})))}}]),t}(u.a.Component),M=(t(76),t(77),function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:n.type},n.message)}),T=function(){var e=Object(l.useState)([]),n=Object(r.a)(e,2),t=n[0],o=n[1],c=Object(l.useState)(""),s=Object(r.a)(c,2),i=s[0],m=s[1],h=Object(l.useState)(""),d=Object(r.a)(h,2),b=d[0],E=d[1],g=Object(l.useState)(!1),v=Object(r.a)(g,2),O=v[0],j=v[1],N=Object(l.useState)(null),C=Object(r.a)(N,2),k=C[0],S=C[1],T=Object(l.useState)(null),B=Object(r.a)(T,2),D=B[0],I=B[1],K=Object(l.useState)(null),H=Object(r.a)(K,2),J=H[0],x=H[1];Object(l.useEffect)((function(){w().then((function(e){console.log("getAll response is",e),o(e)}))}),[]);var A=function(){o(t),m(""),E(""),I(null),S(null)},G=function(){A(),j(!1)};return u.a.createElement("div",null,u.a.createElement("h2",{className:"app-title"},"Phonebook"),u.a.createElement(M,{message:J}),u.a.createElement(f,{addPerson:function(e){e.preventDefault();var n={id:t.length+1,name:i,number:b},a=t.filter((function(e){return e.name===n.name}));1===a.length?(S(a[0].id),I(n),j(!0)):a.length>1?(x({type:"error",message:"Oops, more than one person with same name, can't do anything"}),setTimeout((function(){x(null)}),5e3),A()):y(n).then((function(e){o(t.concat(e)),m(""),E(""),x({type:"success",message:"Person '".concat(n.name,"' was added to the server")}),setTimeout((function(){x(null)}),5e3)})).catch((function(e){console.log("Error happend ohoh: ",e.response.data),x({type:"error",message:"Person validation failed: '".concat(e.response.data.error,"'")}),setTimeout((function(){x(null)}),5e3),A()}))},newName:i,setNewName:m,newPhoneNumber:b,setNewPhoneNumber:E,changeFilter:function(e){var n=e.target.value;w().then((function(e){o(n?e.filter((function(e){return e.name.includes(n)})):e)}))}}),u.a.createElement("br",null),u.a.createElement("h2",{className:"contacts"},"Numbers"),u.a.createElement(F,{persons:t,setPersons:o}),u.a.createElement(p,{show:O,handleChangeNumberModalOK:function(){P(k,D).then((function(e){var n=Object(a.a)(t);n=n.map((function(n){return n.id===e.id?e:n})),o(n)})).catch((function(e){x({type:"error",message:"Person '".concat(D.name,"' was already removed from the server realMessage:' ").concat(e)}),setTimeout((function(){x(null)}),5e3)})),G()},closeConfirmChangeModal:G}))};n.default=T;c.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(T,null)),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.8a770b6e.chunk.js.map