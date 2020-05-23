(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{48:function(e,n,t){e.exports=t(75)},73:function(e,n,t){},75:function(e,n,t){"use strict";t.r(n);var a=t(15),r=t(14),o=t.n(r),c=t(0),l=t.n(c),u=t(16),s=t(9),i=t(43),m=function(e){return l.a.createElement(s.a.Control,{placeholder:"Filter contacts ",onChange:e.changeFilter})},h=t(79),d=function(e){return l.a.createElement(h.a,{show:e.show,onHide:e.closeConfirmChangeModal},l.a.createElement(h.a.Dialog,null,l.a.createElement(h.a.Header,{closeButton:!0},l.a.createElement(h.a.Title,null,"Update Number")),l.a.createElement(h.a.Body,null,l.a.createElement("p",null,"is already added to phonebook, replace the old number with a new one?")),l.a.createElement(h.a.Footer,null,l.a.createElement(u.a,{variant:"secondary",onClick:e.closeConfirmChangeModal},"Cancel"),l.a.createElement(u.a,{variant:"primary",onClick:e.handleChangeNumberModalOK},"OK"))))},p=function(e){return l.a.createElement("div",null,l.a.createElement(i.a,null,l.a.createElement(s.a,{onSubmit:e.addPerson},l.a.createElement(s.a.Group,{controlId:"PhoneBookForm"},l.a.createElement(s.a.Control,{placeholder:"First name",onChange:function(n){return e.setNewName(n.target.value)},value:e.newName}),l.a.createElement(s.a.Control,{placeholder:"Number",onChange:function(n){return e.setNewPhoneNumber(n.target.value)},value:e.newPhoneNumber}),l.a.createElement(u.a,{variant:"secondary",type:"submit"},"add"))),l.a.createElement(s.a,null,l.a.createElement(s.a.Row,null,l.a.createElement(m,{changeFilter:e.changeFilter})))))},f=t(22),b=t(23),E=t(26),g=t(25),v=t(24),O=t(19),j=t.n(O),N="/api/persons",C=function(){return j.a.get(N).then((function(e){return e.data}))},w=function(e){return j.a.post(N,e).then((function(e){return e.data}))},y=function(e,n){return j.a.put("".concat(N,"/").concat(e),n).then((function(e){return e.data}))},k=function(e){return j.a.delete("".concat(N,"/").concat(e)).then((function(e){return e.data}))},P=function(e){Object(E.a)(t,e);var n=Object(g.a)(t);function t(e){return Object(f.a)(this,t),n.call(this,e)}return Object(b.a)(t,[{key:"handleDelete",value:function(e,n,t){k(e).then((function(a){t(n.filter((function(n){return n.id!==e})))}))}},{key:"render",value:function(){var e=this;return l.a.createElement(v.a.Item,null,this.props.person.name," ",this.props.person.number,l.a.createElement(u.a,{variant:"outline-danger",className:"delete-btn",onClick:function(n){return e.handleDelete(e.props.person.id,e.props.persons,e.props.setPersons)}},"X")," ")}}]),t}(l.a.Component),S=function(e){Object(E.a)(t,e);var n=Object(g.a)(t);function t(e){return Object(f.a)(this,t),n.call(this,e)}return Object(b.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement(v.a,null,this.props.persons.map((function(n){return l.a.createElement(P,{key:n.id,person:n,persons:e.props.persons,setPersons:e.props.setPersons})})))}}]),t}(l.a.Component),F=(t(73),t(74),function(e){var n=e.message;return null===n?null:l.a.createElement("div",{className:n.type},n.message)}),M=function(){var e=Object(c.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],o=Object(c.useState)(""),u=Object(a.a)(o,2),s=u[0],i=u[1],m=Object(c.useState)(""),h=Object(a.a)(m,2),f=h[0],b=h[1],E=Object(c.useState)(!1),g=Object(a.a)(E,2),v=g[0],O=g[1],j=Object(c.useState)(null),N=Object(a.a)(j,2),k=N[0],P=N[1],M=Object(c.useState)(null),B=Object(a.a)(M,2),D=B[0],T=B[1],I=Object(c.useState)(null),K=Object(a.a)(I,2),H=K[0],J=K[1];Object(c.useEffect)((function(){C().then((function(e){console.log("effect response is",e),r(e)}))}),[]);var x=function(){r(t),i(""),b(""),T(null),P(null)},G=function(){O(!1)};return l.a.createElement("div",null,l.a.createElement("h2",{className:"app-title"},"Phonebook"),l.a.createElement(F,{message:H}),l.a.createElement(p,{addPerson:function(e){e.preventDefault();var n={id:t.length+1,name:s,number:f},a=t.filter((function(e){return e.name===n.name}));1===a.length?(P(a[0].id),T(n),O(!0)):a.length>1?(J({type:"error",message:"Oops, more than one person with same name, can't do anything"}),setTimeout((function(){J(null)}),5e3),x()):w(n).then((function(e){r(t.concat(e)),i(""),b(""),J({type:"success",message:"Person '".concat(n.name,"' was added to the server")}),setTimeout((function(){J(null)}),5e3)}))},newName:s,setNewName:i,newPhoneNumber:f,setNewPhoneNumber:b,changeFilter:function(e){var n=e.target.value;C().then((function(e){r(n?e.filter((function(e){return e.name.includes(n)})):e)}))}}),l.a.createElement("br",null),l.a.createElement("h2",{className:"contacts"},"Numbers"),l.a.createElement(S,{persons:t,setPersons:r}),l.a.createElement(d,{show:v,handleChangeNumberModalOK:function(){y(k,D).then((function(e){t[e.id-1]=e,x()})).catch((function(e){J({type:"error",message:"Person '".concat(D.name,"' was already removed from the server")}),setTimeout((function(){J(null)}),5e3)})),G()},closeConfirmChangeModal:G}))};n.default=M;o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(M,null)),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.4a20077e.chunk.js.map