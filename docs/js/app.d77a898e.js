(function(A){function t(t){for(var e,i,o=t[0],s=t[1],l=t[2],c=0,g=[];c<o.length;c++)i=o[c],n[i]&&g.push(n[i][0]),n[i]=0;for(e in s)Object.prototype.hasOwnProperty.call(s,e)&&(A[e]=s[e]);u&&u(t);while(g.length)g.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var A,t=0;t<r.length;t++){for(var a=r[t],e=!0,i=1;i<a.length;i++){var s=a[i];0!==n[s]&&(e=!1)}e&&(r.splice(t--,1),A=o(o.s=a[0]))}return A}var e={},n={app:0},r=[];function i(A){return o.p+"js/"+({about:"about"}[A]||A)+"."+{about:"31127d2c"}[A]+".js"}function o(t){if(e[t])return e[t].exports;var a=e[t]={i:t,l:!1,exports:{}};return A[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(A){var t=[],a=n[A];if(0!==a)if(a)t.push(a[2]);else{var e=new Promise(function(t,e){a=n[A]=[t,e]});t.push(a[2]=e);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.src=i(A),r=function(t){s.onerror=s.onload=null,clearTimeout(l);var a=n[A];if(0!==a){if(a){var e=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,i=new Error("Loading chunk "+A+" failed.\n("+e+": "+r+")");i.type=e,i.request=r,a[1](i)}n[A]=void 0}};var l=setTimeout(function(){r({type:"timeout",target:s})},12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},o.m=A,o.c=e,o.d=function(A,t,a){o.o(A,t)||Object.defineProperty(A,t,{enumerable:!0,get:a})},o.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})},o.t=function(A,t){if(1&t&&(A=o(A)),8&t)return A;if(4&t&&"object"===typeof A&&A&&A.__esModule)return A;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:A}),2&t&&"string"!=typeof A)for(var e in A)o.d(a,e,function(t){return A[t]}.bind(null,e));return a},o.n=function(A){var t=A&&A.__esModule?function(){return A["default"]}:function(){return A};return o.d(t,"a",t),t},o.o=function(A,t){return Object.prototype.hasOwnProperty.call(A,t)},o.p="/resume/",o.oe=function(A){throw console.error(A),A};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=l;r.push([0,"chunk-vendors"]),a()})({0:function(A,t,a){A.exports=a("56d7")},1940:function(A,t,a){A.exports=a.p+"img/parallax.57776a67.png"},"56d7":function(A,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var e=a("2b0e"),n=a("bb71");a("da64");e["a"].use(n["a"],{iconfont:"md"});var r=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("v-app",[a("Header",{attrs:{views:A.views}}),a("v-content",[a("v-container",{attrs:{fluid:""}},[a("v-fade-transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1)],1),a("v-footer",{attrs:{app:""}},[a("v-flex",{attrs:{"text-xs-center":""}},[a("h4",{staticClass:"font-weight-light"},[A._v("© 2019 - yumcyawiz")])])],1)],1)},i=[],o=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-toolbar",{attrs:{app:""}},[e("v-toolbar-title",[e("v-avatar",[e("v-img",{attrs:{src:a("915e")}})],1),A._v("\n    yumcyawiz\n  ")],1),e("v-spacer"),A._l(A.views,function(t){return e("v-toolbar-items",{key:t.title},[e("v-btn",{attrs:{flat:"",to:t.path}},[A._v(A._s(t.title))])],1)})],2)},s=[],l={props:{views:Array}},c=l,u=a("2877"),g=a("6544"),h=a.n(g),p=a("8212"),C=a("8336"),m=a("adda"),B=a("9910"),d=a("71d9"),f=a("2a7f"),v=Object(u["a"])(c,o,s,!1,null,null,null),E=v.exports;h()(v,{VAvatar:p["a"],VBtn:C["a"],VImg:m["a"],VSpacer:B["a"],VToolbar:d["a"],VToolbarItems:f["a"],VToolbarTitle:f["b"]});var Q={name:"App",components:{Header:E},data:function(){return{views:[{title:"Home",icon:"dashboard",path:"/"},{title:"About",icon:"question_answer",path:"/about"}]}}},w=Q,y=a("7496"),I=a("a523"),b=a("549c"),M=a("0789"),D=a("0e8f"),T=a("553a"),x=Object(u["a"])(w,r,i,!1,null,null,null),H=x.exports;h()(x,{VApp:y["a"],VContainer:I["a"],VContent:b["a"],VFadeTransition:M["a"],VFlex:D["a"],VFooter:T["a"]});var Y=a("8c4f"),S=function(){var A=this,t=A.$createElement,e=A._self._c||t;return e("v-container",{attrs:{fluid:""}},[e("v-parallax",{attrs:{src:a("1940")}},[e("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[e("h1",{staticClass:"display-3 font-weight-thin mb-3"},[A._v("Mathematics × Programming")]),e("h4",{staticClass:"subheading font-weight-light"},[A._v("good balance of theory and implementation")])])],1),e("v-card",{attrs:{flat:""}},[e("v-card-title",[e("h2",{staticClass:"diaplay-3 font-weight-light"},[A._v("I am interested in ...")])]),e("v-container",{attrs:{xs12:"",sm6:"",fluid:""}},[e("v-layout",{attrs:{row:"",wrap:""}},A._l(A.cards,function(A){return e("v-flex",{key:A.title,attrs:{xs4:""}},[e("Card",{attrs:{title:A.title,desc:A.desc}})],1)}),1)],1)],1)],1)},F=[],j=function(){var A=this,t=A.$createElement,a=A._self._c||t;return a("v-layout",[a("v-flex",{attrs:{xs12:"",sm6:"","offset-sm3":""}},[a("v-card",[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"title mb-4 font-weight-light"},[A._v(A._s(A.title))]),a("p",{staticClass:"font-weight-light"},[A._v(A._s(A.desc))])])])],1)],1)],1)},R=[],U={props:{title:String,desc:String,image:String}},V=U,Z=a("b0af"),k=a("12b2"),P=a("a722"),W=Object(u["a"])(V,j,R,!1,null,null,null),J=W.exports;h()(W,{VCard:Z["a"],VCardTitle:k["a"],VFlex:D["a"],VLayout:P["a"]});var X={components:{Card:J},data:function(){return{cards:[{title:"Mathematics",desc:"I am interested in various field of Mathematics, such as Statistics, Computational Statistics, Probability, Real Analysis, Functional Analysis, Manifold, Numerical Analysis, Stochastic Differential Equation, Control theory, and Stochastic Control.",image:"cards/mathematics.png"},{title:"Programming",desc:"I like doing programming and making a cool stuff with it. Personally I like to use programming on some mathematical projects such as numerical analysis, machine learning, simulation."},{title:"RayTracing",desc:"RayTracing is a method to generate photorealistic CGs. I am especially interested in Montecarlo RayTracing algorithms such as Path Tracing, Bidirectional Path Tracing, Metropolis Light Transport.",image:"cards/raytracing.png"},{title:"Mathematical Finance",desc:"I like how probability and stochastic differential equation theories are applied in option pricing."},{title:"Quantitative Investment",desc:"Quantitative Investment is a way to compose a financial portfolio with mathematics. I am interested in how to make a low risk portfolio with mathematics."}]}}},N=X,O=a("8b9c"),q=Object(u["a"])(N,S,F,!1,null,null,null),G=q.exports;h()(q,{VCard:Z["a"],VCardTitle:k["a"],VContainer:I["a"],VFlex:D["a"],VLayout:P["a"],VParallax:O["a"]}),e["a"].use(Y["a"]);var K=new Y["a"]({routes:[{path:"/",name:"home",component:G},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))}}]});e["a"].config.productionTip=!1,new e["a"]({router:K,render:function(A){return A(H)}}).$mount("#app")},"915e":function(A,t){A.exports="data:image/jpeg;base64,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"}});
//# sourceMappingURL=app.d77a898e.js.map