(this.webpackJsonpwrites=this.webpackJsonpwrites||[]).push([[0],{21:function(e,t,c){},49:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(12),s=c.n(a),r=(c(21),c(34)),l=c(11),i=c.p+"static/media/writes_blue.7927be20.png",o=c(2),j=function(){var e=new Date,t="",c={};return(e=e.getHours())>=0&&e<12?(t="Morning",c.backgroundColor="chartreuse",c.color="green"):e>=12&&e<19?(t="Afternoon",c.backgroundColor="yellow",c.color="orange"):(t="Night",c.backgroundColor="cornflowerblue",c.color="blue"),Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("h1",{className:"wish_me",style:c,children:["Good ",t]})})},b=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("img",{src:i,alt:"Logo",height:"60px",width:"60px"}),Object(o.jsx)("h1",{className:"head_h",children:"Writes"}),Object(o.jsx)(j,{})]})})})},u=function(){var e=(new Date).getFullYear();return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("footer",{children:Object(o.jsxs)("p",{className:"foot",children:["copyright \xa9 ",e," "]})})})},d=c(24),x=c(27),O=c(32),h=c.n(O),m=c(63),f=function(e){var t=Object(n.useState)("Title"),c=Object(l.a)(t,2),a=c[0],s=c[1],r=Object(n.useState)("Write a note..."),i=Object(l.a)(r,2),j=i[0],b=i[1],u=Object(n.useState)(!1),O=Object(l.a)(u,2),f=O[0],g=O[1],p=Object(n.useState)({title:"",text:""}),N=Object(l.a)(p,2),v=N[0],w=N[1],_=function(e){var t=e.target,c=t.name,n=t.value;w((function(e){return Object(x.a)(Object(x.a)({},e),{},Object(d.a)({},c,n))})),console.log(v)};return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"chota",onDoubleClick:function(){g(!1),s("Title")},children:Object(o.jsx)("form",{children:Object(o.jsxs)("div",{className:"main_note",children:[Object(o.jsx)("input",{className:"inp",type:"text",placeholder:a,autoComplete:"off",name:"title",value:v.title,onChange:_,onClick:function(){g(!0)},maxLength:"15"}),f?Object(o.jsx)("textarea",{className:"txt",row:"",columns:"",placeholder:j,name:"text",value:v.text,onChange:_}):null,f?Object(o.jsx)(m.a,{className:"add_btn",onClick:function(){""===v.title?s("Title not given"):""===v.text?b("Content is Empty"):(e.passNote(v),w({title:"",text:""}),s("Title"))},children:Object(o.jsx)(h.a,{className:"add_icon"})}):null]})})})})},g=c(33),p=c.n(g),N=function(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("div",{className:"crt_form",children:Object(o.jsx)("form",{children:Object(o.jsxs)("div",{className:"crt_note",children:[Object(o.jsx)("h1",{className:"crt_inp",children:e.title}),Object(o.jsx)("p",{row:"",column:"",className:"crt_txt",children:e.text}),Object(o.jsxs)(m.a,{"aria-label":"delete",className:"dlt_btn",onClick:function(){e.deleteItem(e.id)},children:[" ",Object(o.jsx)(p.a,{})]})]})})})})},v=function(e){var t=Object(n.useState)([]),c=Object(l.a)(t,2),a=c[0],s=c[1],i=function(e){s((function(t){return t.filter((function(t,c){return c!==e}))}))};return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(b,{}),Object(o.jsx)(f,{passNote:function(e){s((function(t){return[].concat(Object(r.a)(t),[e])})),console.log(e)}}),Object(o.jsx)("div",{className:"crt_notes",children:a.map((function(e,t){return Object(o.jsx)(N,{id:t,title:e.title,text:e.text,deleteItem:i},t)}))}),Object(o.jsx)(u,{})]})})};s.a.render(Object(o.jsx)(v,{}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.131d5ef2.chunk.js.map