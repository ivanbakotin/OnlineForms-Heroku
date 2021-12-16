(this["webpackJsonpgoogle-forms-clone"]=this["webpackJsonpgoogle-forms-clone"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n(17),r=n.n(s),i=n(4),a=n(3);function o(e){var t=Object(c.useState)(),n=Object(i.a)(t,2),s=n[0],r=n[1];return Object(c.useEffect)((function(){return function(e){fetch(e).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return alert("Website down")}))}(e)}),[]),s}var u=n(9),l=n.n(u),d=n(13);function j(e,t,n){return b.apply(this,arguments)}function b(){return(b=Object(d.a)(l.a.mark((function e(t,n,c){var s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:n,mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)});case 3:return s=e.sent,e.abrupt("return",s.json());case 7:e.prev=7,e.t0=e.catch(0),alert("Website down");case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}function f(e,t,n){try{fetch(e,{method:t,mode:"cors",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)})}catch(c){alert("Website down")}}var O=n(0),h=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],r=o("/api/get_forms");function u(e){f("/api/delete_form","DELETE",{id:e.target.id}),s(n.filter((function(t){return t.id!=e.target.id})))}return Object(c.useEffect)((function(){r&&s(r)}),[r]),Object(O.jsxs)("main",{className:"form-list",children:[Object(O.jsx)("div",{className:"create-new",onClick:function(){j("/api/create_form","POST",{}).then((function(e){return window.location.href="/create_form/".concat(e)}))},children:Object(O.jsx)("p",{children:"Create New Form"})}),Object(O.jsx)("article",{children:null===n||void 0===n?void 0:n.map((function(e){return Object(O.jsxs)("div",{className:"form-div",children:[Object(O.jsx)(a.b,{to:{pathname:"/create_form/".concat(e.id)},children:e.form_title}),Object(O.jsx)("div",{className:"far fa-trash-alt",id:e.id,onClick:u})]},e.id)}))})]})},m=n(48),p=n(47),x=n(7),v=n(14),_=n(12),q=n(22);function g(e){if(!e)return 0;if(!e.length)return 0;var t=e[0].qq_id;return e.forEach((function(e){e.qq_id>t&&(t=e.qq_id+1)})),t}function w(e){if(!e)return 0;if(!e.length)return 0;var t=e[0].question_id;return e.forEach((function(e){e.question_id>t&&(t=e.question_id+1)})),t}var y=Object(q.b)("getFormInfoAsync",function(){var e=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/api/get_form_info","POST",{id:t.form_id});case 2:return n=e.sent,e.abrupt("return",{response:n});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=Object(q.c)({name:"form",initialState:[],reducers:{addQuestion:function(e,t){var n={form_id:t.payload.form_id,question_id:w(e.questions),quest_title:"Question?",question_type:t.payload.question_type,sub_questions:[{qq_id:0,qq_title:"Option"}]};null===e.questions&&(e.questions=[]),e.questions.push(n)},addSubQuestion:function(e,t){var n=e.questions.findIndex((function(e){return e.question_id===t.payload.id})),c={form_id:t.payload.form_id,question_id:t.payload.id,qq_id:g(e.questions[n].sub_questions),qq_title:"Option"};null===e.questions[n].sub_questions&&(e.questions[n].sub_questions=[]),e.questions[n].sub_questions.push(c)},updateQuestion:function(e,t){var n=e.questions.findIndex((function(e){return e.question_id===t.payload.id}));e.questions[n].quest_title=t.payload.value},updateSubQuestion:function(e,t){var n=e.questions.findIndex((function(e){return e.question_id===t.payload.id})),c=e.questions[n].sub_questions.findIndex((function(e){return e.qq_id==t.payload.qq_id}));e.questions[n].sub_questions[c].qq_title=t.payload.value},deleteQuestion:function(e,t){return f("/api/delete_question","DELETE",{value:t.payload.value}),Object(_.a)(Object(_.a)({},e),{},{questions:e.questions.filter((function(e){return e.question_id!=t.payload.value.question_id}))})},deleteSubQuestion:function(e,t){f("/api/delete_quest_sub","DELETE",{value:t.payload.value,qq_id:t.payload.qq_id});var n=e.questions.findIndex((function(e){return e.question_id===t.payload.value.question_id}));return Object(_.a)(Object(_.a)({},e),{},{questions:e.questions.map((function(c,s){return s===n?Object(_.a)(Object(_.a)({},c),{},{sub_questions:e.questions[n].sub_questions.filter((function(e){return e.qq_id!=t.payload.qq_id}))}):c}))})},setRequired:function(e,t){var n=e.questions.findIndex((function(e){return e.question_id===t.payload.id}));e.questions[n].required=!e.questions[n].required},changeType:function(e,t){var n=e.questions.findIndex((function(e){return e.question_id===t.payload.id}));e.questions[n].question_type=t.payload.type},sendQuestionsToApi:function(e){f("/api/update_form_questions","POST",{questions:e.questions})},updateForm:function(e,t){e[t.payload.name]=t.payload.value},sendInfoToApi:function(e){f("/api/update_form_main","POST",{form_title:e.form_title,descrip:e.descrip,form_id:e.id})}},extraReducers:Object(v.a)({},y.fulfilled,(function(e,t){return t.payload.response}))}),C=N.actions,k=C.addQuestion,S=C.updateQuestion,F=C.deleteQuestion,Q=C.deleteSubQuestion,T=C.setRequired,E=C.changeType,P=C.updateForm,I=C.sendQuestionsToApi,L=C.updateSubQuestion,A=C.addSubQuestion,R=C.sendInfoToApi,D=N.reducer;function B(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;return function(){for(var c=arguments.length,s=new Array(c),r=0;r<c;r++)s[r]=arguments[r];t&&clearTimeout(t),t=setTimeout((function(){return e.apply(void 0,s)}),n)}}var U=n(15),J={Paragraph:function(e){var t=e.value,n=e.saveFormQuestions,c=Object(x.b)();return Object(O.jsxs)("div",{className:"paragraph-create",onChange:n,children:[Object(O.jsx)(U.a,{name:"quest_title",onChange:function(e){return c(S({id:t.question_id,value:e.target.value}))},value:t.quest_title}),Object(O.jsx)(U.a,{minRows:3})]})},Checkbox:function(e){var t,n=e.value,c=e.saveFormQuestions,s=Object(x.b)(),r=function(e){s(L({id:n.question_id,qq_id:e.target.id,value:e.target.value}))},i=function(e){return s(Q({value:n,qq_id:e.target.id}))};return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("div",{className:"checkbox-create",onClick:c,children:[Object(O.jsx)(U.a,{onChange:function(e){return s(S({id:n.question_id,value:e.target.value}))},name:"quest_title",value:n.quest_title}),null===n||void 0===n||null===(t=n.sub_questions)||void 0===t?void 0:t.map((function(e){return Object(O.jsxs)("div",{className:"check-box",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{className:"check",type:"checkbox",value:e.qq_title}),Object(O.jsx)("input",{className:"check-input",id:e.qq_id,onChange:r,value:e.qq_title})]}),Object(O.jsx)("div",{id:e.qq_id,onClick:i,className:"fas fa-times"})]},e.qq_id)})),Object(O.jsx)("div",{className:"fas fa-plus",onClick:function(){return s(A({id:n.question_id,form_id:n.form_id}))},children:Object(O.jsx)("input",{placeholder:"Add Option..."})})]})})},Line:function(e){var t=e.value,n=e.saveFormQuestions,c=Object(x.b)();return Object(O.jsxs)("div",{className:"line-create",onChange:n,children:[Object(O.jsx)("input",{name:"quest_title",onChange:function(e){return c(S({id:t.question_id,value:e.target.value}))},value:t.quest_title}),Object(O.jsx)("input",{})]})}},W={Paragraph:function(e){var t=e.value;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{children:t.quest_title}),Object(O.jsx)(U.a,{minRows:3,onChange:function(e){return t.answer_text=e.target.value}})]})},Checkbox:function(e){var t,n=e.value,c=function(e){n.answer_array||(n.answer_array=[]),n.answer_array.includes(e.target.value)?n.answer_array=n.answer_array.filter((function(t){return t!=e.target.value})):n.answer_array.push(e.target.value)};return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h2",{children:n.quest_title}),null===n||void 0===n||null===(t=n.sub_questions)||void 0===t?void 0:t.map((function(e){return Object(O.jsxs)("div",{className:"check-box",children:[Object(O.jsx)("input",{onChange:c,type:"checkbox",id:e.qq_id+""+e.question_id,value:e.qq_title}),Object(O.jsx)("label",{htmlFor:e.qq_id+""+e.question_id,children:e.qq_title})]},e.qq_id)}))]})},Line:function(e){var t=e.value;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{children:t.quest_title}),Object(O.jsx)("input",{type:"text",onChange:function(e){return t.answer_text=e.target.value}})]})}},M=["Checkbox","Paragraph","Line"],G=function(){var e=Object(x.b)(),t=Object(x.c)((function(e){return e.form})),n=Object(c.useCallback)(B((function(){return e(R())})),[]),s=function(t){return e(P({name:t.target.name,value:t.target.value}))};return Object(O.jsxs)("header",{className:"form-header",onChange:n,children:[Object(O.jsx)(U.a,{onChange:s,name:"form_title",value:t.form_title}),Object(O.jsx)(U.a,{onChange:s,name:"descrip",value:t.descrip||"",minRows:3})]})},H=function(e){var t=e.value,n=Object(x.b)();return Object(O.jsxs)("div",{className:"question-options",children:[Object(O.jsx)("div",{className:"far fa-trash-alt",onClick:function(){return n(F({value:t}))}}),Object(O.jsxs)("div",{className:"required",children:[Object(O.jsx)("label",{htmlFor:"required",children:"Required"}),Object(O.jsx)("input",{checked:t.required,id:"required",type:"checkbox",className:"checkbox-fake",onClick:function(){return n(T({id:t.question_id}))}})]}),Object(O.jsx)("div",{children:Object(O.jsx)("select",{value:t.question_type,onChange:function(e){return n(E({id:t.question_id,type:e.target.value}))},name:"type",id:"type",children:M.map((function(e){return Object(O.jsx)("option",{value:e,children:e},e)}))})})]})},z=function(e){var t=e.open,n=e.form_id,c=Object(x.b)();function s(e){c(k({question_type:e.target.getAttribute("name"),form_id:n}))}return t?Object(O.jsxs)("div",{className:"choose-type",children:[Object(O.jsx)("div",{className:"fas fa-check-square",name:"Checkbox",onClick:s}),Object(O.jsx)("div",{className:"fas fa-align-left",name:"Paragraph",onClick:s}),Object(O.jsx)("div",{className:"fab fa-line",name:"Line",onClick:s})]}):null},K=function(e){var t=e.form_id,n=Object(x.c)((function(e){return e.form.questions})),s=Object(c.useState)(!1),r=Object(i.a)(s,2),a=r[0],o=r[1],u=Object(x.b)(),l=Object(c.useCallback)(B((function(){return u(I())})),[]);return Object(O.jsxs)("section",{className:"create-form",children:[Object(O.jsx)(G,{}),Object(O.jsx)(m.a,{component:null,children:null===n||void 0===n?void 0:n.map((function(e){var t=J[e.question_type];return Object(O.jsx)(p.a,{classNames:"example",timeout:{enter:300,exit:300},children:Object(O.jsxs)("div",{className:"question-div",children:[Object(O.jsx)(t,{value:e,saveFormQuestions:l}),Object(O.jsx)(H,{value:e})]})},e.question_id)}))}),Object(O.jsxs)("article",{className:"choose-type-main",children:[Object(O.jsx)("div",{className:"fas fa-plus-circle",onClick:function(){return o(!a)}}),Object(O.jsx)(z,{form_id:t,open:a})]})]})},V=n(5),X=function(e){var t=e.answersQuest;return Object(O.jsx)("section",{className:"responses",children:t&&Object(O.jsx)(O.Fragment,{children:Object.entries(t).map((function(e){return Object(O.jsxs)("article",{children:[Object(O.jsx)("h2",{children:e[1][0].quest_title}),Object(O.jsx)("div",{children:e[1].map((function(e){var t;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:e.answer_text}),null===(t=e.answer_array)||void 0===t?void 0:t.map((function(e){return Object(O.jsx)("p",{children:e})}))]})}))})]})}))})})},Y=function(e){var t=e.answersUser;return Object(O.jsx)("section",{className:"responses",children:t&&Object(O.jsx)(O.Fragment,{children:Object.entries(t).map((function(e,t){return Object(O.jsxs)("article",{children:[Object(O.jsx)("h2",{children:t+1}),Object(O.jsx)("div",{children:e[1].map((function(e){var t;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("p",{children:[e.quest_title,":"]}),Object(O.jsx)("p",{children:e.answer_text}),null===(t=e.answer_array)||void 0===t?void 0:t.map((function(e){return Object(O.jsx)("p",{children:e})}))]})}))})]})}))})})},Z=function(e){var t=e.answersUser,n=e.answersQuest,c=e.form_id;return Object(O.jsxs)("section",{children:[Object(O.jsxs)("div",{className:"nav-links",children:[Object(O.jsx)(a.c,{exact:!0,activeClassName:"selected",to:{pathname:"/create_form/".concat(c,"/response_form")},children:"Questions"}),Object(O.jsx)(a.c,{exact:!0,activeClassName:"selected",to:{pathname:"/create_form/".concat(c,"/response_form/user")},children:"Individuals"})]}),Object(O.jsxs)(V.c,{children:[Object(O.jsx)(V.a,{exact:!0,path:"/create_form/:id/response_form",children:Object(O.jsx)(X,{answersQuest:n})}),Object(O.jsx)(V.a,{exact:!0,path:"/create_form/:id/response_form/user",children:Object(O.jsx)(Y,{answersUser:t})})]})]})},$=function(e){var t=e.form_id,n=Object(V.f)().pathname;return Object(O.jsxs)("nav",{children:[Object(O.jsxs)("div",{className:"nav-options",children:[Object(O.jsx)("div",{className:"fas fa-eye",onClick:function(){window.location.href="".concat(window.location.origin,"\\fillout_form\\").concat(t)}}),Object(O.jsx)("div",{className:"fas fa-share-square",onClick:function(){navigator.clipboard.writeText("".concat(window.location.origin,"\\fillout_form\\").concat(t))}})]}),Object(O.jsxs)("div",{className:"nav-links",children:[Object(O.jsx)(a.c,{exact:!0,activeClassName:"selected",to:{pathname:"/create_form/".concat(t)},children:"Form"}),Object(O.jsx)(a.c,{isActive:function(){return["/create_form/".concat(t,"/response_form"),"/create_form/".concat(t,"/response_form/user")].includes(n)},to:{pathname:"/create_form/".concat(t,"/response_form")},children:"Responses"})]})]})},ee=function(){return Object(O.jsxs)("main",{className:"not-found",children:[Object(O.jsx)("h1",{children:"404 - Not Found!"}),Object(O.jsx)(a.b,{to:"/",children:"Go Home"})]})};function te(e,t){var n={};return e.forEach((function(e){var c=e[t];n[c]||(n[c]=[]),n[c].push(e)})),n}var ne=function(){var e=Object(V.g)().id,t=Object(x.b)();Object(c.useEffect)((function(){return t(y({form_id:e}))}),[]);var n=Object(c.useState)(),s=Object(i.a)(n,2),r=s[0],a=s[1],o=Object(c.useState)(),u=Object(i.a)(o,2),b=u[0],f=u[1];return Object(c.useEffect)((function(){function t(){return(t=Object(d.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j("/api/get_responses","POST",{form_id:e});case 2:n=t.sent,a(te(n,"index_id")),f(te(n,"question_id"));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[]),Object(O.jsxs)("main",{children:[Object(O.jsx)($,{form_id:e}),Object(O.jsxs)(V.c,{children:[Object(O.jsx)(V.a,{exact:!0,path:"/create_form/:id",children:Object(O.jsx)(K,{form_id:e})}),Object(O.jsx)(V.a,{path:"/create_form/:id/response_form",children:Object(O.jsx)(Z,{answersUser:r,answersQuest:b,form_id:e})}),Object(O.jsx)(V.a,{children:Object(O.jsx)(ee,{})})]})]})},ce=function(){var e,t=Object(V.g)().id,n=Object(c.useState)([]),s=Object(i.a)(n,2),r=s[0],a=s[1];return Object(c.useEffect)((function(){function e(){return(e=Object(d.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j("/auth/get_form_info","POST",{id:t});case 2:n=e.sent,a(n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),Object(O.jsxs)("main",{className:"fillout-form",children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("h1",{children:null===r||void 0===r?void 0:r.form_title}),Object(O.jsx)("p",{children:null===r||void 0===r?void 0:r.descrip})]}),Object(O.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(r),j("/auth/send_filled_form","POST",r).then((function(){return window.location.href="/infopage"})).catch((function(){return window.location.href="/infopage"}))},children:[null===r||void 0===r||null===(e=r.questions)||void 0===e?void 0:e.map((function(e){var t=W[e.question_type];return Object(O.jsx)("div",{className:"fillout-quest-div",children:Object(O.jsx)(t,{value:e})},e.question_id)})),Object(O.jsx)("button",{type:"submit",children:"Submit"})]})]})},se=n(30),re=function(e){return Object(se.a)(e),Object(O.jsx)("main",{children:"Success"})},ie=function(){return Object(O.jsxs)("aside",{children:[Object(O.jsx)(a.b,{to:"/",children:"My Forms"}),Object(O.jsx)("div",{onClick:function(){fetch("/auth/logout"),localStorage.clear(),window.location.href="/"},children:"LogOut"})]})},ae=function(){var e,t=Object(c.useState)(!1),n=Object(i.a)(t,2),s=n[0],r=n[1],o=function(){return r(!s)};return Object(O.jsxs)("div",{className:"mobile-menu",children:[Object(O.jsxs)("div",{className:s?"burger-crossed":"burger-bar",onClick:o,children:[Object(O.jsx)("div",{className:"div1"}),Object(O.jsx)("div",{className:"div2"}),Object(O.jsx)("div",{className:"div3"})]}),Object(O.jsxs)("div",{className:s?"mobile-aside":"mobile-hidden",children:[Object(O.jsx)(a.b,{onClick:o,to:"/",children:"My Forms"}),Object(O.jsx)("div",(e={onClick:o},Object(v.a)(e,"onClick",(function(){fetch("/auth/logout"),localStorage.clear(),window.location.href="/"})),Object(v.a)(e,"children","LogOut"),e))]})]})},oe=function(){return Object(O.jsxs)("main",{className:"logged-in-main",children:[Object(O.jsx)(ie,{}),Object(O.jsx)(ae,{}),Object(O.jsxs)(V.c,{children:[Object(O.jsx)(V.a,{exact:!0,path:"/",children:Object(O.jsx)(h,{})}),Object(O.jsx)(V.a,{path:"/create_form/:id",children:Object(O.jsx)(ne,{})}),Object(O.jsx)(V.a,{path:"/fillout_form/:id",children:Object(O.jsx)(ce,{})}),Object(O.jsx)(V.a,{path:"/infopage",children:Object(O.jsx)(re,{})}),Object(O.jsx)(V.a,{children:Object(O.jsx)(ee,{})})]})]})},ue=n(19),le=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)({username:"",password:""}),o=Object(i.a)(r,2),u=o[0],b=o[1],f=Object(c.useState)(""),h=Object(i.a)(f,2),m=h[0],p=h[1];function x(){return(x=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,j("/auth/login","POST",u);case 3:(n=e.sent)===u.username?(localStorage.setItem("user",n),window.location.href="/"):p(n.message);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){b((function(t){return Object(_.a)(Object(_.a)({},t),{},Object(v.a)({},e.target.name,e.target.value))}))}function g(e){s((function(t){return[].concat(Object(ue.a)(t),[e.target.name])}))}function w(e){e.target.value||s((function(t){return Object(ue.a)(t).filter((function(t){return t!=e.target.name}))}))}return Object(O.jsxs)("form",{className:"auth-form",onSubmit:function(e){return x.apply(this,arguments)},children:[Object(O.jsx)("h1",{children:"Login"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{autoComplete:"off",type:"text",onChange:q,onFocus:g,onBlur:w,name:"username",id:"username"}),Object(O.jsx)("label",{className:n.includes("username")?"auth-label":null,htmlFor:"username",children:"Username:"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"password",onFocus:g,onChange:q,onBlur:w,name:"password",id:"password"}),Object(O.jsx)("label",{className:n.includes("password")?"auth-label":null,htmlFor:"password",children:"Password:"})]}),Object(O.jsx)("button",{type:"submit",children:"Login"}),Object(O.jsx)("p",{children:m}),Object(O.jsx)(a.b,{to:"/register",children:"Dont have an account? Register!"})]})},de=function(){var e=Object(c.useState)([]),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(""),o=Object(i.a)(r,2),u=o[0],b=o[1],f=Object(c.useState)({username:"",password:"",confirmpassword:""}),h=Object(i.a)(f,2),m=h[0],p=h[1],x=m.password,q=m.confirmpassword;function g(){return(g=Object(d.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),x!==q){e.next=8;break}return e.next=4,j("/auth/register","POST",m);case 4:!0===(n=e.sent)?window.location.href="/":b(n.message),e.next=9;break;case 8:b("Passwords dont match!");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){p((function(t){return Object(_.a)(Object(_.a)({},t),{},Object(v.a)({},e.target.name,e.target.value))}))}function y(e){s((function(t){return[].concat(Object(ue.a)(t),[e.target.name])}))}function N(e){e.target.value||s((function(t){return Object(ue.a)(t).filter((function(t){return t!=e.target.name}))}))}return Object(O.jsxs)("form",{className:"auth-form",onSubmit:function(e){return g.apply(this,arguments)},children:[Object(O.jsx)("h1",{children:"Register"}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{autoComplete:"off",type:"text",onFocus:y,onChange:w,onBlur:N,name:"username",id:"username"}),Object(O.jsx)("label",{className:n.includes("username")?"auth-label":null,htmlFor:"username",children:"Username:"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"password",onFocus:y,onChange:w,onBlur:N,name:"password",id:"password"}),Object(O.jsx)("label",{className:n.includes("password")?"auth-label":null,htmlFor:"password",children:"Password:"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("input",{type:"password",onFocus:y,onChange:w,onBlur:N,name:"confirmpassword",id:"confirmpassword"}),Object(O.jsx)("label",{className:n.includes("confirmpassword")?"auth-label":null,htmlFor:"confirmpassword",children:"Confirm Password:"})]}),Object(O.jsx)("button",{type:"submit",children:"Register"}),Object(O.jsx)("p",{children:u}),Object(O.jsx)(a.b,{to:"/",children:"Already have an Account? Login!"})]})},je=function(){return Object(O.jsxs)("footer",{children:[Object(O.jsx)("h2",{children:"Copyright@2021"}),Object(O.jsx)("div",{className:"div-down"})]})},be=function(){return Object(O.jsxs)("nav",{children:[Object(O.jsx)("div",{className:"div-up"}),Object(O.jsxs)("h2",{children:["Not a member yet? ",Object(O.jsx)(a.b,{to:"/register",children:"Sign up now!"})]})]})},fe=function(){return Object(O.jsxs)("main",{className:"logged-out-main",children:[Object(O.jsx)(be,{}),Object(O.jsxs)(V.c,{children:[Object(O.jsx)(V.a,{exact:!0,path:"/",children:Object(O.jsx)(le,{})}),Object(O.jsx)(V.a,{path:"/register",children:Object(O.jsx)(de,{})}),Object(O.jsx)(V.a,{path:"/fillout_form/:id",children:Object(O.jsx)(ce,{})}),Object(O.jsx)(V.a,{path:"/infopage",children:Object(O.jsx)(re,{})}),Object(O.jsx)(V.a,{children:Object(O.jsx)(ee,{})})]}),Object(O.jsx)(je,{})]})},Oe=function(){return Object(O.jsx)("div",{className:"loading-circle",children:Object(O.jsx)("div",{})})},he=function(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],s=t[1],r=Object(c.useState)(!1),u=Object(i.a)(r,2),l=u[0],d=u[1],j=o("/auth/islog");return Object(c.useEffect)((function(){j&&(localStorage.setItem("user",j),s(!0),d(!0)),void 0!=j&&d(!0)}),[j]),Object(O.jsx)(a.a,{children:l?n?Object(O.jsx)(oe,{}):Object(O.jsx)(fe,{}):Object(O.jsx)(Oe,{})})},me=Object(q.a)({reducer:{form:D}});n(44);r.a.render(Object(O.jsx)(x.a,{store:me,children:Object(O.jsx)(he,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.f569b898.chunk.js.map