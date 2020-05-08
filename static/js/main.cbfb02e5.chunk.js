(this["webpackJsonpimage-recognition"]=this["webpackJsonpimage-recognition"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},30:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(6),o=a.n(i),r=(a(13),a(1)),l=a(2),c=a(4),m=a(3),u=(a(14),a(7)),h=a.n(u),d=function(e){var t=e.onRouteChange;return e.isSignedIn?s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signout")},className:"f3 link dim black underline pa3 pointer"},"Sign Out")):s.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},s.a.createElement("p",{onClick:function(){return t("signin")},className:"f3 link dim black underline pa3 pointer"},"Signin"),s.a.createElement("p",{onClick:function(){return t("register")},className:"f3 link dim black underline pa3 pointer"},"Register"))},p=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onEmailChange=function(e){n.setState({signInEmail:e.target.value})},n.onPasswordChange=function(e){n.setState({signInPassword:e.target.value})},n.onSubmitSignIn=function(){var e=n.props,t=e.onRouteChange,a=e.loadUser;fetch("http://localhost:3001/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.signInEmail,password:n.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id&&(a(e),t("home"))}))},n.state={signInEmail:"",signInPassword:""},n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("article",{className:"br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5  center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("div",{className:"measure"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Sign In"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",id:"email-address",name:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",onChange:this.onPasswordChange}))),s.a.createElement("div",{className:""},s.a.createElement("input",{onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),s.a.createElement("div",{className:"lh-copy mt3"}))))}}]),a}(n.Component),g=function(){return s.a.createElement("div",{className:"ma4 mt0"})},b=function(e){var t=e.onInputChange,a=e.onSubmit;return s.a.createElement("div",null,s.a.createElement("p",{className:"f3"},"This Magic Brain will detect faces in your pictures"),s.a.createElement("div",{className:"center"},s.a.createElement("div",{className:"center pa4 br3 shadow-5"},s.a.createElement("input",{className:"f4 pa2 w-70 center",type:"text",onChange:t}),s.a.createElement("button",{className:"w-30 grow f4 ph3 pv2 dib white bg-light-purple",onClick:a},"Detect"))))},f=function(e){var t=e.user;return console.log(t),s.a.createElement("div",null,s.a.createElement("div",{className:"white f3"},"".concat(t.name.toUpperCase(),", your current rank is ").concat(t.entries)),s.a.createElement("div",{className:"white f1"},"#5"))},w=(a(30),function(e){var t=e.ImageURL,a=e.box;return s.a.createElement("div",{className:"center ma"},s.a.createElement("div",{className:"absolute mt2"},s.a.createElement("img",{id:"inputImage",alt:"",src:t,width:"500px",heigh:"auto"}),s.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),E=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onNameChange=function(e){n.setState({name:e.target.value})},n.onEmailChange=function(e){n.setState({email:e.target.value})},n.onPasswordChange=function(e){n.setState({password:e.target.value})},n.onRegisterClick=function(){var e=n.props,t=e.onRouteChange,a=e.loadUser;fetch("http://localhost:3001/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:n.state.name,email:n.state.email,password:n.state.password})}).then((function(e){return e.json()})).then((function(e){e.id&&(a(e),t("home"))}))},n.state={name:"",email:"",password:""},n}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("article",{className:"br3 ba  b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5  center"},s.a.createElement("main",{className:"pa4 black-80"},s.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},s.a.createElement("legend",{className:"f4 fw6 ph0 mh0"},"Register"),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"Name"},"Name"),s.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"text",name:"Name",id:"Name"})),s.a.createElement("div",{className:"mt3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),s.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address"})),s.a.createElement("div",{className:"mv3"},s.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),s.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",autoComplete:"true"}))),s.a.createElement("div",{className:"lh-copy mt3"},s.a.createElement("p",{onClick:this.onRegisterClick,className:"f6 link dim black db pointer"},"Register"))))}}]),a}(s.a.Component),v={particles:{number:{value:30,density:{enable:!0,value_area:800}}}},N={input:"",imageURL:"",box:{},route:"signin",isSignedIn:!1,user:{id:"",name:"",email:"",entries:"",joined:""}},C=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(r.a)(this,a),(e=t.call(this)).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputImage"),n=Number(a.width),s=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*s,rightCol:n-t.right_col*n,bottomRow:s-t.bottom_row*s}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.InputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageURL:e.state.input}),fetch("http://localhost:3001/imageUrl",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({imageUrl:e.state.input})}).then((function(e){return e.json()})).then((function(t){t&&fetch("http://localhost:3001/image",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})).catch(console.log),e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return console.log(e)}))},e.onRouteChange=function(t){"signout"===t?e.setState(N):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.state=N,e}return Object(l.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(h.a,{className:"particles",params:v}),s.a.createElement(d,{isSignedIn:this.state.isSignedIn,onRouteChange:this.onRouteChange}),"home"===this.state.route?s.a.createElement("div",null,s.a.createElement(g,null),s.a.createElement(f,{user:this.state.user}),s.a.createElement(b,{onInputChange:this.InputChange,onSubmit:this.onButtonSubmit}),s.a.createElement(w,{ImageURL:this.state.imageURL,box:this.state.box})):"signin"===this.state.route?s.a.createElement(p,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):s.a.createElement(E,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(31);o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(32)}},[[8,1,2]]]);
//# sourceMappingURL=main.cbfb02e5.chunk.js.map