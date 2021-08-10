(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{171:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var a=n(2),r=n(32),c=n.n(r),o=n(8),s=n(9),i=n.n(s),u=n(14),l=n(20),d=n(21),j=n(10),p=n(28);n(173),n(76);p.a.initializeApp({apiKey:"AIzaSyBVOwU0RhCp2tc9cah0-o7gMTszjtaZIoI",authDomain:"curso-react-udemy-786ae.firebaseapp.com",projectId:"curso-react-udemy-786ae",storageBucket:"curso-react-udemy-786ae.appspot.com",messagingSenderId:"810572685553",appId:"1:810572685553:web:26059ee9297712ebf48950",measurementId:"G-YKCSDCJQDF"});var b=p.a.firestore(),h=new p.a.auth.GoogleAuthProvider,f=n(35),m=n.n(f),O=n(34),g=n(6),x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(l.a)(t,2),r=n[0],c=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;c(t)},s=function(e){var t=e.target;c(Object(g.a)(Object(g.a)({},r),{},Object(O.a)({},t.name,t.value)))};return[r,s,o]},v={login:"[Auth] Login",logout:"[Auth] Logout",uiSetError:"[UI] Set Error",uiRemoveError:"[UI] Remove Error",uiStartLoading:"[UI] Start Loading",uiFinishLoading:"[UI] Finish Loading",notesAddNew:"[Notes] New Note",notesActive:"[Notes] Set Active Note",notesLoad:"[Notes] Load Notes",notesUpdated:"[Notes] Updated Note",notesFileUrl:"[Notes] Updated Image URL",notesDelete:"[Notes] Delete Note",notesLogoutCleaning:"[Notes] Logout Cleaning"},y=function(e){return{type:v.uiSetError,payload:e}},_=function(){return{type:v.uiRemoveError}},w=function(){return{type:v.uiFinishLoading}},N=n(22),k=n.n(N),C=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a,r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dne8hzs6i/upload",(n=new FormData).append("upload_preset","curso-react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dne8hzs6i/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return r=e.sent,e.abrupt("return",r.secure_url);case 15:return e.next=17,a.json();case 17:throw e.sent;case 18:e.next=23;break;case 20:throw e.prev=20,e.t0=e.catch(4),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,20]])})));return function(t){return e.apply(this,arguments)}}(),L=function(){var e=Object(u.a)(i.a.mark((function e(t){var n,a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(g.a)({id:e.id},e.data()))})),console.log(a),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(e,t){return{type:v.notesActive,payload:Object(g.a)({id:e},t)}},E=function(e,t){return{type:v.notesAddNew,payload:Object(g.a)({id:e},t)}},I=function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,L(e);case 2:a=t.sent,n(A(a));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},A=function(e){return{type:v.notesLoad,payload:e}},D=function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n,a){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().auth.uid,e.url||delete e.url,delete(c=Object(g.a)({},e)).id,t.next=6,b.doc("".concat(r,"/journal/notes/").concat(e.id)).update(c).catch((function(){return k.a.fire("Oops!","Something went wrong, try saving your note again!","error")}));case 6:n(U(e.id,c)),k.a.fire("Saved",'Note with title "'.concat(e.title,'" saved successfully!'),"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},U=function(e,t){return{type:v.notesUpdated,payload:{id:e,note:Object(g.a)({id:e},t)}}},P=function(e){return{type:v.notesDelete,payload:e}},R=function(e,t){return function(n){n({type:v.uiStartLoading}),p.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;console.log(t),n(F(t.uid,t.displayName)),n(_()),n(w())})).catch((function(){n(w()),k.a.fire("Oops!","There were no accounts found with the provided credentials.","error")}))}},F=function(e,t){return{type:v.login,payload:{uid:e,displayName:t}}},z=function(){return{type:v.logout}},T=n(1),G=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})),n=t.loading,a=t.msgError,r=x({email:"",password:""}),c=Object(l.a)(r,2),s=c[0],i=c[1],u=s.email,j=s.password,b=function(){return m.a.isEmail(u)?j.length<1?(e(y("Please fill the password field.")),!1):(e(_()),!0):(e(y("E-mail is not valid.")),!1)};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("h3",{className:"auth__title",children:"Login"}),a&&Object(T.jsx)("div",{className:"auth__alert-error",children:a}),Object(T.jsxs)("form",{onSubmit:function(t){t.preventDefault(),b()&&e(R(u,j))},className:"animate__animated animate__fadeIn animate__faster",children:[Object(T.jsx)("input",{type:"text",placeholder:"E-mail",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:i}),Object(T.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:j,onChange:i}),Object(T.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:n,children:"Login"}),Object(T.jsxs)("div",{className:"auth__social-networks",children:[Object(T.jsx)("p",{children:" Login with social networks "}),Object(T.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){p.a.auth().signInWithPopup(h).then((function(t){var n=t.user;e(F(n.uid,n.displayName))}))}))},children:[Object(T.jsx)("div",{className:"google-icon-wrapper",children:Object(T.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(T.jsx)("p",{className:"btn-text",children:Object(T.jsx)("b",{children:"Sign in with Google"})})]})]}),Object(T.jsx)(d.b,{to:"/auth/register",className:"link",children:" Create new account "})]})]})},B=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).msgError,n=x({name:"",email:"",password:"",password2:""}),a=Object(l.a)(n,2),r=a[0],c=a[1],s=r.name,j=r.email,b=r.password,h=r.password2,f=function(){return 0===s.trim().length?(e(y("name is required")),!1):m.a.isEmail(j)?b!==h||b.length<6?(e(y("Password should be at least 6 characters and match with each other.")),!1):(e(_()),!0):(e(y("email is not valid")),!1)};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)("h3",{className:"auth__title",children:"Register"}),Object(T.jsxs)("form",{onSubmit:function(t){t.preventDefault(),f()&&e(function(e,t,n){return function(a){p.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(u.a)(i.a.mark((function e(t){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.user,e.next=3,r.updateProfile({displayName:n});case 3:console.log(r),a(F(r.uid,r.displayName));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){k.a.fire("Oops!",e.message,"error")}))}}(j,b))},className:"animate__animated animate__fadeIn animate__faster",children:[t&&Object(T.jsx)("div",{className:"auth__alert-error",children:t}),Object(T.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:s,onChange:c}),Object(T.jsx)("input",{type:"text",placeholder:"E-mail",name:"email",className:"auth__input",autoComplete:"off",value:j,onChange:c}),Object(T.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:b,onChange:c}),Object(T.jsx)("input",{type:"password",placeholder:"Confirm password",name:"password2",className:"auth__input",value:h,onChange:c}),Object(T.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",children:" Register "}),Object(T.jsx)(d.b,{to:"/auth/login",className:"link",children:" Already registered? "})]})]})},W=function(){return Object(T.jsx)("div",{className:"auth__main",children:Object(T.jsx)("div",{className:"auth__box-container",children:Object(T.jsxs)(j.d,{children:[Object(T.jsx)(j.b,{exact:!0,path:"/auth/login",component:G}),Object(T.jsx)(j.b,{exact:!0,path:"/auth/register",component:B}),Object(T.jsx)(j.a,{to:"/auth/login"})]})})})},J=n(36),q=n.n(J),K=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active,n=q()(t.date);return Object(T.jsxs)("div",{className:"notes__appbar",children:[Object(T.jsxs)("span",{children:[" ",n.format("ll")," "]}),Object(T.jsx)("input",{id:"fileSelector",type:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(u.a)(i.a.mark((function t(n,a){var r,c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=a().notes.active,k.a.fire({title:"Uploading...",text:"Please wait...",allowOutsideClick:!1,showConfirmButton:!1,willOpen:function(){k.a.showLoading()}}),t.next=4,C(e);case 4:c=t.sent,r.url=c,n(D(r)),k.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(T.jsxs)("div",{children:[Object(T.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:" Picture "}),Object(T.jsx)("button",{className:"btn",onClick:function(){e(D(t))},children:" Save "})]})]})},M=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active,n=x(t),r=Object(l.a)(n,3),c=r[0],s=r[1],d=r[2],j=c.body,p=c.title,h=Object(a.useRef)(t.id);Object(a.useEffect)((function(){t.id!==h.current&&(d(t),h.current=t.id)}),[t,d]),Object(a.useEffect)((function(){e(S(c.id,Object(g.a)({},c)))}),[c,e]);return Object(T.jsxs)("div",{className:"notes__main-content",children:[Object(T.jsx)(K,{}),Object(T.jsxs)("div",{className:"notes__content",children:[Object(T.jsx)("input",{type:"text",placeholder:"Put a title here",className:"notes__title-input",autoComplete:"off",name:"title",value:p,onChange:s}),Object(T.jsx)("textarea",{placeholder:"What happened today?",className:"notes__textarea",name:"body",value:j,onChange:s}),t.url&&Object(T.jsx)("div",{className:"notes__image",children:Object(T.jsx)("img",{src:t.url,alt:"imagen"})})]}),Object(T.jsx)("button",{className:"btn btn-danger",onClick:function(){var t;e((t=h.current,function(){var e=Object(u.a)(i.a.mark((function e(n,a){var r;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=a().auth.uid,e.next=3,b.doc("".concat(r,"/journal/notes/").concat(t)).delete();case 3:n(P(t));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()))},children:" Delete "})]})},V=function(){return Object(T.jsxs)("div",{className:"nothing__main-content",children:[Object(T.jsxs)("p",{children:["Select something",Object(T.jsx)("br",{}),"or create a new entry!"]}),Object(T.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},X=function(e){var t=e.id,n=e.date,a=e.title,r=e.body,c=e.url,s=Object(o.b)(),i=q()(n),u={date:n,title:a,body:r,url:c};return Object(T.jsx)("div",{onClick:function(){s(S(t,u))},children:Object(T.jsxs)("div",{className:"journal__entry pointer",children:[c&&Object(T.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(c,")")}}),Object(T.jsxs)("div",{className:"journal__entry-body",children:[Object(T.jsxs)("p",{className:"journal__entry-title",children:[" ",a," "]}),Object(T.jsxs)("p",{className:"journal__entry-content",children:[" ",r," "]})]}),Object(T.jsxs)("div",{className:"journal__entry-date-box",children:[Object(T.jsxs)("span",{children:[" ",i.format("dddd")," "]}),Object(T.jsxs)("h4",{children:[" ",i.format("Do")," "]})]})]})})},Q=function(){var e=Object(o.c)((function(e){return e.notes})).notes;return Object(T.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(T.jsx)(X,Object(g.a)({},e),e.id)}))})},Y=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(T.jsxs)("aside",{className:"journal__sidebar",children:[Object(T.jsxs)("div",{className:"journal__sidebar-navbar",children:[Object(T.jsxs)("h3",{className:"mt-5",children:[Object(T.jsx)("i",{className:"far fa-moon"}),Object(T.jsxs)("span",{children:[" ",t," "]})]}),Object(T.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(u.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.auth().signOut();case 2:t(z()),t({type:v.notesLogoutCleaning});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Logout"})]}),Object(T.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(u.a)(i.a.mark((function e(t,n){var a,r,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,r={title:"",body:"",date:(new Date).getTime()},e.next=4,b.collection("".concat(a,"/journal/notes")).add(r);case 4:c=e.sent,t(S(c.id,r)),t(E(c.id,r));case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(T.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(T.jsx)("p",{className:"mt-5",children:" New Entry "})]}),Object(T.jsx)(Q,{})]})},Z=function(){var e=Object(o.c)((function(e){return e.notes})).active;return Object(T.jsxs)("div",{className:"journal__main-content",children:[Object(T.jsx)(Y,{}),Object(T.jsx)("main",{children:e?Object(T.jsx)(M,{}):Object(T.jsx)(V,{})})]})},H=n(37),$=["isLoggedIn","component"],ee=function(e){var t=e.isLoggedIn,n=e.component;Object(H.a)(e,$);return Object(T.jsx)(j.b,{component:function(e){return t?Object(T.jsx)(j.a,{to:"/"}):Object(T.jsx)(n,Object(g.a)({},e))}})},te=["isLoggedIn","component"],ne=function(e){var t=e.isLoggedIn,n=e.component;Object(H.a)(e,te);return Object(T.jsx)(j.b,{component:function(e){return t?Object(T.jsx)(n,Object(g.a)({},e)):Object(T.jsx)(j.a,{to:"/auth/login"})}})},ae=function(){var e=Object(o.b)(),t=Object(a.useState)(!0),n=Object(l.a)(t,2),r=n[0],c=n[1],s=Object(a.useState)(!1),b=Object(l.a)(s,2),h=b[0],f=b[1];return console.log(h),Object(a.useEffect)((function(){p.a.auth().onAuthStateChanged(function(){var t=Object(u.a)(i.a.mark((function t(n){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(null===n||void 0===n?void 0:n.uid)?(e(F(n.uid,n.displayName)),f(!0),e(I(n.uid))):f(!1),c(!1);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}),[e,c,f]),r?Object(T.jsx)("div",{className:"spinner round"}):Object(T.jsx)(d.a,{children:Object(T.jsx)("div",{children:Object(T.jsxs)(j.d,{children:[Object(T.jsx)(ee,{isLoggedIn:h,component:W,path:"/auth"}),Object(T.jsx)(ne,{exact:!0,isLoggedIn:h,path:"/",component:Z}),Object(T.jsx)(j.a,{to:"/auth/login"})]})})})},re=n(29),ce=n(64),oe=n(45),se={notes:[],active:null},ie={loading:!1,msgError:null},ue="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||re.c,le=Object(re.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.login:return{uid:t.payload.uid,name:t.payload.displayName};case v.logout:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.uiSetError:return Object(g.a)(Object(g.a)({},e),{},{msgError:t.payload});case v.uiRemoveError:return Object(g.a)(Object(g.a)({},e),{},{msgError:null});case v.uiStartLoading:return Object(g.a)(Object(g.a)({},e),{},{loading:!0});case v.uiFinishLoading:return Object(g.a)(Object(g.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.notesActive:return Object(g.a)(Object(g.a)({},e),{},{active:Object(g.a)({},t.payload)});case v.notesAddNew:return Object(g.a)(Object(g.a)({},e),{},{notes:[t.payload].concat(Object(oe.a)(e.notes))});case v.notesLoad:return Object(g.a)(Object(g.a)({},e),{},{notes:Object(oe.a)(t.payload)});case v.notesUpdated:return Object(g.a)(Object(g.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case v.notesDelete:return Object(g.a)(Object(g.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case v.notesLogoutCleaning:return{initialState:se};default:return e}}}),de=Object(re.d)(le,ue(Object(re.a)(ce.a))),je=function(){return Object(T.jsx)(o.a,{store:de,children:Object(T.jsx)(ae,{})})};n(171);c.a.render(Object(T.jsx)(je,{}),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.53f78a76.chunk.js.map