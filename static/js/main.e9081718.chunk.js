(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{194:function(e,n,a){e.exports=a(409)},201:function(e,n,a){},409:function(e,n,a){"use strict";a.r(n);var t=a(0),i=a.n(t),r=a(23),o=a.n(r),s=(a(199),a(201),a(17)),l=a(18),c=a(20),u=a(19),d=a(21),m=a(44),p=a.n(m),g=(a(251),a(168)),h=a.n(g),y=a(86),f=a.n(y),C=a(118),E=a.n(C),S=a(178),b=a.n(S),v=a(179),w=a.n(v),k=a(117),O=a.n(k),A=a(180),P=a.n(A),D=a(181),j=a.n(D),I=a(182),K=a.n(I),T=a(183),U=a.n(T),x=a(184),R=a.n(x),V=a(185),W=a.n(V),N=a(186),B=a.n(N),L=a(187),M=a.n(L),q=a(188),F=a.n(q),G=a(189),J=a.n(G),Y=a(190),H=a.n(Y),z=a(191),Q=a.n(z),Z=a(119),X=a.n(Z),$=a(123),_=a.n($),ee=a(22),ne=a(193),ae=a.n(ne),te=a(192),ie=a.n(te),re=a(87),oe=a.n(re),se=a(169),le=a.n(se),ce=a(171),ue=a.n(ce),de=a(36),me=a.n(de),pe=a(15),ge=a.n(pe),he=a(172),ye=a.n(he),fe=a(173),Ce=a.n(fe),Ee=a(43),Se=a.n(Ee),be=function(e){function n(e){var a;return Object(s.a)(this,n),(a=Object(c.a)(this,Object(u.a)(n).call(this,e))).openMenu=function(e){var n=e.currentTarget;a.setState({menu:{anchorEl:n}})},a.closeMenu=function(){a.setState({menu:{anchorEl:null}})},a.handleSettingsClick=function(){a.closeMenu(),a.props.onSettingsClick()},a.handleSignOutClick=function(){a.closeMenu(),a.props.onSignOutClick()},a.state={menu:{anchorEl:null}},a}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,a=e.title,t=e.isSignedIn,r=e.isSigningUp,o=e.isSigningIn,s=this.props,l=s.onSignUpClick,c=s.onSignInClick,u=this.state.menu;return i.a.createElement(le.a,{color:"primary",position:"static"},i.a.createElement(ue.a,{variant:"regular"},i.a.createElement(me.a,{style:{flexGrow:1},color:"inherit",variant:"h6"},a),t&&i.a.createElement(i.a.Fragment,null,i.a.createElement(ye.a,{color:"inherit",onClick:this.openMenu},i.a.createElement(oe.a,null)),i.a.createElement(Ce.a,{anchorEl:u.anchorEl,open:Boolean(u.anchorEl),onClose:this.closeMenu},i.a.createElement(Se.a,{onClick:this.handleSettingsClick},"Settings"),i.a.createElement(Se.a,{onClick:this.handleSignOutClick},"Sign out"))),!t&&i.a.createElement(i.a.Fragment,null,i.a.createElement(ge.a,{className:n.signUpButton,color:"secondary",disabled:r,variant:"contained",onClick:l},"Sign Up"),i.a.createElement(ge.a,{color:"secondary",disabled:o,variant:"contained",onClick:c},"Sign In"))))}}]),n}(t.Component),ve=Object(ee.withStyles)(function(e){return{signUpButton:{marginRight:e.spacing.unit}}})(be),we=function(e){function n(){return Object(s.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,a=e.icon,t=e.text;return i.a.createElement("div",{className:n.center},a,i.a.createElement(me.a,{color:"textSecondary",variant:"h4"},t))}}]),n}(t.Component),ke=Object(ee.withStyles)({center:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textAlign:"center"}})(we),Oe=a(53),Ae=a.n(Oe),Pe=a(27),De=a.n(Pe),je=a(28),Ie=a.n(je),Ke=a(29),Te=a.n(Ke),Ue=a(25),xe=a.n(Ue),Re=a(30),Ve=a.n(Re),We=a(35),Ne=a.n(We),Be={emailAddress:"",password:"",passwordConfirmation:"",errors:null},Le=function(e){function n(e){var a;return Object(s.a)(this,n),(a=Object(c.a)(this,Object(u.a)(n).call(this,e))).signUp=function(){var e=a.state,n=e.emailAddress,t=e.password,i=e.passwordConfirmation,r=Ae()({emailAddress:n,password:t,passwordConfirmation:i},{emailAddress:{email:!0,presence:{allowEmpty:!1}},password:{length:{minimum:6},presence:{allowEmpty:!1}},passwordConfirmation:{equality:"password",length:{minimum:6},presence:{allowEmpty:!1}}});r?a.setState({errors:r}):a.setState({errors:null},function(){a.props.signUp(n,t)})},a.handleExited=function(){a.setState(Be)},a.handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&a.signUp()},a.handleEmailAddressChange=function(e){var n=e.target.value;a.setState({emailAddress:n})},a.handlePasswordChange=function(e){var n=e.target.value;a.setState({password:n})},a.handlePasswordConfirmationChange=function(e){var n=e.target.value;a.setState({passwordConfirmation:n})},a.handleSignUpClick=function(){a.signUp()},a.state=Be,a}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.open,a=e.isSigningUp,t=this.props.onClose,r=this.state,o=r.emailAddress,s=r.password,l=r.passwordConfirmation,c=r.errors;return i.a.createElement(De.a,{open:n,onClose:t,onExited:this.handleExited,onKeyPress:this.handleKeyPress},i.a.createElement(Ie.a,null,"Sign up for an account"),i.a.createElement(Te.a,null,i.a.createElement(xe.a,null,"Create an account to access features that are unavailable to users who haven't signed up."),i.a.createElement("form",null,i.a.createElement(Ne.a,{autoComplete:"email",autoFocus:!0,error:!(!c||!c.emailAddress),fullWidth:!0,helperText:c&&c.emailAddress?c.emailAddress[0]:"",label:"E-mail address",margin:"normal",onChange:this.handleEmailAddressChange,required:!0,type:"email",value:o}),i.a.createElement(Ne.a,{autoComplete:"new-password",error:!(!c||!c.password),fullWidth:!0,helperText:c&&c.password?c.password[0]:"",label:"Password",margin:"normal",onChange:this.handlePasswordChange,required:!0,type:"password",value:s}),i.a.createElement(Ne.a,{autoComplete:"password",error:!(!c||!c.passwordConfirmation),fullWidth:!0,helperText:c&&c.passwordConfirmation?c.passwordConfirmation[0]:"",label:"Password confirmation",margin:"normal",onChange:this.handlePasswordConfirmationChange,required:!0,type:"password",value:l}))),i.a.createElement(Ve.a,null,i.a.createElement(ge.a,{color:"primary",onClick:t},"Cancel"),i.a.createElement(ge.a,{color:"primary",disabled:!o||!s||!l||a,variant:"contained",onClick:this.handleSignUpClick},"Sign Up")))}}]),n}(t.Component),Me={emailAddress:"",password:"",errors:null},qe=function(e){function n(e){var a;return Object(s.a)(this,n),(a=Object(c.a)(this,Object(u.a)(n).call(this,e))).signIn=function(){var e=a.state,n=e.emailAddress,t=e.password,i=Ae()({emailAddress:n,password:t},{emailAddress:{email:!0,presence:{allowEmpty:!1}},password:{length:{minimum:6},presence:{allowEmpty:!1}}});i?a.setState({errors:i}):a.setState({errors:null},function(){a.props.signIn(n,t)})},a.handleExited=function(){a.setState(Me)},a.handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&a.signIn()},a.handleEmailAddressChange=function(e){var n=e.target.value;a.setState({emailAddress:n})},a.handlePasswordChange=function(e){var n=e.target.value;a.setState({password:n})},a.handleSignInClick=function(){a.signIn()},a.state=Me,a}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.open,a=e.isSigningIn,t=this.props,r=t.onClose,o=t.onResetPasswordClick,s=this.state,l=s.emailAddress,c=s.password,u=s.errors;return i.a.createElement(De.a,{open:n,onClose:r,onExited:this.handleExited,onKeyPress:this.handleKeyPress},i.a.createElement(Ie.a,null,"Sign in to your account"),i.a.createElement(Te.a,null,i.a.createElement(xe.a,null,"Some features might be unavailable until you sign in. While you're signed in you can manage your account."),i.a.createElement("form",null,i.a.createElement(Ne.a,{autoComplete:"email",autoFocus:!0,error:!(!u||!u.emailAddress),fullWidth:!0,helperText:u&&u.emailAddress?u.emailAddress[0]:"",margin:"normal",onChange:this.handleEmailAddressChange,placeholder:"E-mail address",required:!0,type:"email",value:l}),i.a.createElement(Ne.a,{autoComplete:"current-password",error:!(!u||!u.password),fullWidth:!0,helperText:u&&u.password?u.password[0]:"",margin:"normal",onChange:this.handlePasswordChange,placeholder:"Password",required:!0,type:"password",value:c}))),i.a.createElement(Ve.a,null,i.a.createElement(ge.a,{color:"primary",onClick:r},"Cancel"),i.a.createElement(ge.a,{color:"primary",variant:"outlined",onClick:o},"Reset Password"),i.a.createElement(ge.a,{color:"primary",disabled:!l||!c||a,variant:"contained",onClick:this.handleSignInClick},"Sign In")))}}]),n}(t.Component),Fe={emailAddress:"",errors:null},Ge=function(e){function n(e){var a;return Object(s.a)(this,n),(a=Object(c.a)(this,Object(u.a)(n).call(this,e))).resetPassword=function(){var e=a.state.emailAddress,n=Ae()({emailAddress:e},{emailAddress:{email:!0,presence:{allowEmpty:!1}}});n?a.setState({errors:n}):a.setState({errors:null},function(){a.props.resetPassword(e)})},a.handleExited=function(){a.setState(Fe)},a.handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&(e.preventDefault(),a.resetPassword())},a.handleEmailAddressChange=function(e){var n=e.target.value;a.setState({emailAddress:n})},a.handleResetPasswordClick=function(){a.resetPassword()},a.state=Fe,a}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.open,a=e.isResettingPassword,t=this.props.onClose,r=this.state,o=r.emailAddress,s=r.errors;return i.a.createElement(De.a,{open:n,onClose:t,onExited:this.handleExited,onKeyPress:this.handleKeyPress},i.a.createElement(Ie.a,null,"Reset your password"),i.a.createElement(Te.a,null,i.a.createElement(xe.a,null,"An e-mail will be sent to your e-mail address containing instructions on how to reset your password."),i.a.createElement("form",null,i.a.createElement(Ne.a,{autoComplete:"email",autoFocus:!0,error:!(!s||!s.emailAddress),fullWidth:!0,helperText:s&&s.emailAddress?s.emailAddress[0]:"",margin:"normal",onChange:this.handleEmailAddressChange,placeholder:"E-mail address",required:!0,type:"email",value:o}))),i.a.createElement(Ve.a,null,i.a.createElement(ge.a,{color:"primary",onClick:t},"Cancel"),i.a.createElement(ge.a,{color:"primary",disabled:!o||a,variant:"contained",onClick:this.handleResetPasswordClick},"Reset Password")))}}]),n}(t.Component),Je=a(177),Ye=a.n(Je),He=a(176),ze=a.n(He),Qe=a(121),Ze=a.n(Qe),Xe=a(120),$e=a.n(Xe),_e=a(65),en=a.n(_e),nn=a(88),an=a.n(nn),tn=a(90),rn=a.n(tn),on=a(175),sn=a.n(on),ln=a(89),cn=a.n(ln),un=a(174),dn=a.n(un),mn=a(122),pn=a.n(mn),gn=function(e){function n(){var e,a;Object(s.a)(this,n);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(i)))).handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&a.props.onOkClick()},a}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.open,n=this.props,a=n.title,t=n.contentText,r=n.cancelText,o=n.okText,s=n.highlightOkButton,l=this.props.onClose,c=this.props,u=c.onCancelClick,d=c.onOkClick;return i.a.createElement(De.a,{open:e,onClose:l,onKeyPress:this.handleKeyPress},a&&i.a.createElement(Ie.a,null,a),t&&i.a.createElement(Te.a,null,i.a.createElement(xe.a,null,t)),(u||d)&&i.a.createElement(Ve.a,null,u&&i.a.createElement(ge.a,{color:"primary",onClick:u},r||"Cancel"),d&&i.a.createElement(ge.a,{color:"primary",variant:s&&"contained",onClick:d},o||"OK")))}}]),n}(t.Component),hn=function(e){function n(e){var a;return Object(s.a)(this,n),(a=Object(c.a)(this,Object(u.a)(n).call(this,e))).openVerifyEmailAddressDialog=function(){a.setState({verifyEmailAddressDialog:{open:!0}})},a.closeVerifyEmailAddressDialog=function(e){a.setState({verifyEmailAddressDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},a.verifyEmailAddress=function(){a.closeVerifyEmailAddressDialog(function(){a.props.onVerifyEmailAddressClick()})},a.state={verifyEmailAddressDialog:{open:!1}},a}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,a=e.user,t=e.isVerifyingEmailAddress,r=this.state.verifyEmailAddressDialog;return i.a.createElement(i.a.Fragment,null,i.a.createElement(xe.a,{className:n.dialogContentText},"This is a summary of your account. You can manage your account throughout all the settings."),i.a.createElement($e.a,null,i.a.createElement(en.a,null,i.a.createElement(an.a,null,i.a.createElement(cn.a,{title:"E-mail address"},i.a.createElement(dn.a,null))),i.a.createElement(rn.a,{primary:a.email,secondary:a.emailVerified?"Verified":"Not verified"}),!a.emailVerified&&i.a.createElement(sn.a,null,i.a.createElement(ge.a,{color:"primary",disabled:t,variant:"contained",onClick:this.openVerifyEmailAddressDialog},"Verify"))),i.a.createElement(en.a,null,i.a.createElement(an.a,null,i.a.createElement(cn.a,{title:"Signed in"},i.a.createElement(pn.a,null))),i.a.createElement(rn.a,{primary:"Signed in",secondary:Ze()(a.metadata.lastSignInTime).format("LLLL")})),i.a.createElement(en.a,null,i.a.createElement(an.a,null,i.a.createElement(cn.a,{title:"Signed up"},i.a.createElement(pn.a,null))),i.a.createElement(rn.a,{primary:"Signed up",secondary:Ze()(a.metadata.creationTime).format("LLLL")}))),i.a.createElement(gn,{open:r.open,title:"Verify e-mail address?",contentText:"An e-mail will be sent to your e-mail address containing instructions on how to verify your e-mail address.",okText:"Verify",highlightOkButton:!0,onClose:this.closeVerifyEmailAddressDialog,onCancelClick:this.closeVerifyEmailAddressDialog,onOkClick:this.verifyEmailAddress}))}}]),n}(t.Component),yn=Object(ee.withStyles)(function(e){return{dialogContentText:{marginTop:"".concat(2*e.spacing.unit,"px")}}})(hn),fn=a(67),Cn=a.n(fn),En=a(66),Sn=a.n(En),bn=a(68),vn=a.n(bn),wn=function(e){function n(){return Object(s.a)(this,n),Object(c.a)(this,Object(u.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.classes,a=e.colors,t=e.types,r=e.primaryColor,o=e.secondaryColor,s=e.type,l=this.props,c=l.onPrimaryColorChange,u=l.onSecondaryColorChange,d=l.onTypeChange;return i.a.createElement(i.a.Fragment,null,i.a.createElement(xe.a,{className:n.dialogContentText},"Customize the look and feel to your own liking. You can reset all changes you've made by clicking Reset."),i.a.createElement(Cn.a,{fullWidth:!0,margin:"normal"},i.a.createElement(Sn.a,null,"Primary color"),i.a.createElement(vn.a,{onChange:c,value:r},a.map(function(e){return i.a.createElement(Se.a,{key:e.id,value:e.id},e.name)}))),i.a.createElement(Cn.a,{fullWidth:!0,margin:"normal"},i.a.createElement(Sn.a,null,"Secondary color"),i.a.createElement(vn.a,{onChange:u,value:o},a.map(function(e){return i.a.createElement(Se.a,{key:e.id,value:e.id},e.name)}))),i.a.createElement(Cn.a,{fullWidth:!0,margin:"normal"},i.a.createElement(Sn.a,null,"Type"),i.a.createElement(vn.a,{onChange:d,value:s},t.map(function(e,n){return i.a.createElement(Se.a,{key:n,value:e},e.charAt(0).toUpperCase()+e.slice(1))}))))}}]),n}(t.Component),kn=Object(ee.withStyles)(function(e){return{dialogContentText:{marginTop:"".concat(2*e.spacing.unit,"px")}}})(wn),On=function(e){function n(e){var a;return Object(s.a)(this,n),(a=Object(c.a)(this,Object(u.a)(n).call(this,e))).handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&a.props.onClose()},a.changeTab=function(e,n){a.setState({selectedTab:n})},a.state={selectedTab:0},a}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.open,a=e.user,t=e.isVerifyingEmailAddress,r=e.colors,o=e.types,s=e.primaryColor,l=e.secondaryColor,c=e.type,u=this.props,d=u.onClose,m=u.onVerifyEmailAddressClick,p=u.onPrimaryColorChange,g=u.onSecondaryColorChange,h=u.onTypeChange,y=u.onResetClick,f=this.state.selectedTab,C=Object(ee.withStyles)({label:{color:"light"===c?"#000000":"#ffffff"}})(ze.a);return i.a.createElement(De.a,{open:n,onClose:d,onKeyPress:this.handleKeyPress},i.a.createElement(Ie.a,null,"Settings"),i.a.createElement(Ye.a,{onChange:this.changeTab,value:f,variant:"fullWidth"},i.a.createElement(C,{label:"Account"}),i.a.createElement(C,{label:"Appearance"})),i.a.createElement(Te.a,null,0===f&&i.a.createElement(yn,{user:a,isVerifyingEmailAddress:t,onVerifyEmailAddressClick:m}),1===f&&i.a.createElement(kn,{colors:r,types:o,primaryColor:s,secondaryColor:l,type:c,onPrimaryColorChange:p,onSecondaryColorChange:g,onTypeChange:h})),i.a.createElement(Ve.a,null,i.a.createElement(ge.a,{color:"primary",onClick:d},"Cancel"),i.a.createElement(ge.a,{color:"primary",variant:"outlined",onClick:function(){setTimeout(y,137.5)}},"Reset"),i.a.createElement(ge.a,{color:"primary",variant:"contained",onClick:d},"OK")))}}]),n}(t.Component),An=function(e){function n(){var e,a;Object(s.a)(this,n);for(var t=arguments.length,i=new Array(t),r=0;r<t;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(i)))).handleKeyPress=function(e){var n=e.key;e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||"Enter"===n&&a.props.signOut()},a}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.open,a=e.isSigningOut,t=this.props.signOut,r=this.props.onClose;return i.a.createElement(De.a,{open:n,onClose:r,onKeyPress:this.handleKeyPress},i.a.createElement(Ie.a,null,"Sign out?"),i.a.createElement(Te.a,null,i.a.createElement(xe.a,null,"While signed out you are unable to manage your profile and conduct other activities that require you to be signed in.")),i.a.createElement(Ve.a,null,i.a.createElement(ge.a,{color:"primary",onClick:r},"Cancel"),i.a.createElement(ge.a,{color:"primary",disabled:a,variant:"contained",onClick:t},"Sign Out")))}}]),n}(t.Component);p.a.initializeApp({apiKey:"AIzaSyDYZOrZVpXkPQD6J31mb9t2eIIxmGEJK-Q",authDomain:"react-material-ui-firebase.firebaseapp.com",databaseURL:"https://react-material-ui-firebase.firebaseio.com",projectId:"react-material-ui-firebase",storageBucket:"react-material-ui-firebase.appspot.com",messagingSenderId:"552659850812"});var Pn=[{id:"red",name:"Red",import:f.a},{id:"pink",name:"Pink",import:E.a},{id:"purple",name:"Purple",import:b.a},{id:"deep-purple",name:"Deep Purple",import:w.a},{id:"indigo",name:"Indigo",import:O.a},{id:"blue",name:"Blue",import:P.a},{id:"light-blue",name:"Light Blue",import:j.a},{id:"cyan",name:"Cyan",import:K.a},{id:"teal",name:"Teal",import:U.a},{id:"green",name:"Green",import:R.a},{id:"light-green",name:"Light Green",import:W.a},{id:"lime",name:"Lime",import:B.a},{id:"yellow",name:"Yellow",import:M.a},{id:"amber",name:"Amber",import:F.a},{id:"orange",name:"Orange",import:J.a},{id:"deep-orange",name:"Deep Orange",import:H.a},{id:"brown",name:"Brown",import:Q.a},{id:"gray",name:"Gray",import:X.a},{id:"blue-gray",name:"Blue Gray",import:_.a}],Dn=["light","dark"],jn={primaryColor:"blue-gray",secondaryColor:"red"},In=Object(ee.createMuiTheme)({palette:{primary:_.a,secondary:f.a,type:"light"},typography:{useNextVariants:!0}}),Kn="React + Material-UI + Firebase",Tn=function(e){function n(e){var a;return Object(s.a)(this,n),(a=Object(c.a)(this,Object(u.a)(n).call(this,e))).updateTheme=function(e,n){var t=a.state,i=t.primaryColor,r=t.secondaryColor,o=t.type;e.primaryColor||(e.primaryColor=i),e.secondaryColor||(e.secondaryColor=r),e.type||(e.type=o),In=Object(ee.createMuiTheme)({palette:{primary:Pn.find(function(n){return n.id===e.primaryColor}).import,secondary:Pn.find(function(n){return n.id===e.secondaryColor}).import,type:e.type},typography:{useNextVariants:!0}}),a.setState({primaryColor:e.primaryColor,secondaryColor:e.secondaryColor,type:e.type},function(){n?localStorage.removeItem("theme"):localStorage.setItem("theme",JSON.stringify({primaryColor:e.primaryColor,secondaryColor:e.secondaryColor,type:e.type}))})},a.resetTheme=function(){a.updateTheme({primaryColor:jn.primaryColor,secondaryColor:jn.secondaryColor,type:"light"},!0)},a.changePrimaryColor=function(e){var n=e.target.value;a.updateTheme({primaryColor:n})},a.changeSecondaryColor=function(e){var n=e.target.value;a.updateTheme({secondaryColor:n})},a.changeType=function(e){var n=e.target.value;a.updateTheme({type:n})},a.showSignUpDialog=function(){a.setState({signUpDialog:{open:!0}})},a.closeSignUpDialog=function(e){a.setState({signUpDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},a.showSignInDialog=function(){a.setState({signInDialog:{open:!0}})},a.closeSignInDialog=function(e){a.setState({signInDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},a.showResetPasswordDialog=function(){a.setState({resetPasswordDialog:{open:!0}})},a.closeResetPasswordDialog=function(e){a.setState({resetPasswordDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},a.showSettingsDialog=function(){a.setState({settingsDialog:{open:!0}})},a.closeSettingsDialog=function(e){a.setState({settingsDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},a.showSignOutDialog=function(){a.setState({signOutDialog:{open:!0}})},a.closeSignOutDialog=function(e){a.setState({signOutDialog:{open:!1}},function(){e&&"function"===typeof e&&e()})},a.openSnackbar=function(e){a.setState({snackbar:{autoHideDuration:2*h()(e).time,message:e,open:!0}})},a.closeSnackbar=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=a.state.snackbar;a.setState({snackbar:{message:e?"":n.message,open:!1}})},a.signUp=function(e,n){a.state.isSignedIn?a.openSnackbar("Signed in users can't sign up"):a.setState({isSigningUp:!0},function(){p.a.auth().createUserWithEmailAndPassword(e,n).then(function(e){a.setState({isSigningUp:!1},function(){a.closeSignUpDialog(function(){var n=e.user.email;a.openSnackbar("Signed up as "+n)})})}).catch(function(e){a.setState({isSigningUp:!1},function(){a.openSnackbar(e.message)})})})},a.signIn=function(e,n){a.state.isSignedIn?a.openSnackbar("Signed in users can't sign in again"):a.setState({isSigningIn:!0},function(){p.a.auth().signInWithEmailAndPassword(e,n).then(function(e){a.setState({isSigningIn:!1},function(){a.closeSignInDialog(function(){var n=e.user,t=n.displayName,i=n.email;a.openSnackbar("Signed in as "+(t||i))})})}).catch(function(e){a.setState({isSigningIn:!1},function(){a.openSnackbar(e.message)})})})},a.resetPassword=function(e){a.state.isSignedIn?a.openSnackbar("Signed in users can't reset their password"):a.setState({isResettingPassword:!0},function(){p.a.auth().sendPasswordResetEmail(e).then(function(){a.setState({isResettingPassword:!1},function(){a.closeResetPasswordDialog(function(){a.openSnackbar("Password reset email sent")})})}).catch(function(e){a.setState({isResettingPassword:!1},function(){a.openSnackbar(e.message)})})})},a.verifyEmailAddress=function(){var e=a.state,n=e.isSignedIn,t=e.isVerifyingEmailAddress,i=e.user;n&&!t&&i&&i.sendEmailVerification().then(function(){a.setState({isVerifyingEmailAddress:!0},function(){a.openSnackbar("Password reset e-mail sent")})}).catch(function(e){a.openSnackbar(e.message)})},a.signOut=function(){a.state.isSignedIn?a.setState({isSigningOut:!0},function(){p.a.auth().signOut().then(function(){a.setState({isSigningOut:!1},function(){a.closeSignOutDialog(function(){a.openSnackbar("Signed out")})})}).catch(function(e){a.setState({isSigningOut:!1},function(){a.closeSignOutDialog(function(){a.openSnackbar(e.message)})})})}):a.openSnackbar("Not signed in")},a.state={primaryColor:jn.primaryColor,secondaryColor:jn.secondaryColor,type:"light",isAuthReady:!1,isSigningUp:!1,isSigningIn:!1,isResettingPassword:!1,isSignedIn:!1,isVerifyingEmailAddress:!1,isSigningOut:!1,user:null,signUpDialog:{open:!1},signInDialog:{open:!1},resetPasswordDialog:{open:!1},settingsDialog:{open:!1},signOutDialog:{open:!1},snackbar:{autoHideDuration:0,message:"",open:!1}},a}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.classes,n=this.state,a=n.primaryColor,t=n.secondaryColor,r=n.type,o=n.isAuthReady,s=n.isSigningUp,l=n.isSigningIn,c=n.isResettingPassword,u=n.isSignedIn,d=n.isVerifyingEmailAddress,m=n.isSigningOut,p=n.user,g=this.state,h=g.signUpDialog,y=g.signInDialog,f=g.resetPasswordDialog,C=g.settingsDialog,E=g.signOutDialog,S=this.state.snackbar;return o?i.a.createElement(ee.MuiThemeProvider,{theme:In},i.a.createElement("div",{style:{minHeight:"100vh",backgroundColor:"dark"===In.palette.type?"#303030":"#fafafa"}},i.a.createElement(ve,{title:Kn,isSignedIn:u,isSigningUp:s,isSigningIn:l,onSignUpClick:this.showSignUpDialog,onSignInClick:this.showSignInDialog,onSettingsClick:this.showSettingsDialog,onSignOutClick:this.showSignOutDialog}),u&&i.a.createElement(ke,{icon:i.a.createElement(oe.a,{className:e.emptyStateIcon,color:"action"}),text:"You are signed in."}),!u&&i.a.createElement(ke,{icon:i.a.createElement(ie.a,{className:e.emptyStateIcon,color:"action"}),text:"You are not signed in."}),!u&&i.a.createElement(Le,{open:h.open,isSigningUp:s,signUp:this.signUp,onClose:this.closeSignUpDialog}),!u&&i.a.createElement(qe,{open:y.open,isSigningIn:l,signIn:this.signIn,onClose:this.closeSignInDialog,onResetPasswordClick:this.showResetPasswordDialog}),!u&&i.a.createElement(Ge,{open:f.open,isResettingPassword:c,resetPassword:this.resetPassword,onClose:this.closeResetPasswordDialog}),u&&i.a.createElement(On,{open:C.open,user:p,isVerifyingEmailAddress:d,colors:Pn,types:Dn,primaryColor:a,secondaryColor:t,type:r,onClose:this.closeSettingsDialog,onVerifyEmailAddressClick:this.verifyEmailAddress,onPrimaryColorChange:this.changePrimaryColor,onSecondaryColorChange:this.changeSecondaryColor,onTypeChange:this.changeType,onResetClick:this.resetTheme}),u&&i.a.createElement(An,{open:E.open,isSigningOut:m,signOut:this.signOut,onClose:this.closeSignOutDialog}),i.a.createElement(ae.a,{autoHideDuration:S.autoHideDuration,message:S.message,open:S.open,onClose:this.closeSnackbar}))):null}},{key:"componentDidMount",value:function(){var e=this,n=JSON.parse(localStorage.getItem("theme"));n&&this.updateTheme(n),this.removeAuthObserver=p.a.auth().onAuthStateChanged(function(n){e.setState({isAuthReady:!0,isSignedIn:!!n,user:n})})}},{key:"componentWillUnmount",value:function(){this.removeAuthObserver()}}]),n}(t.Component),Un=Object(ee.withStyles)(function(e){return{emptyStateIcon:{fontSize:"".concat(12*e.spacing.unit,"px")}}})(Tn);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(Un,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[194,2,1]]]);
//# sourceMappingURL=main.e9081718.chunk.js.map