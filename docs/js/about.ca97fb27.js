(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0d77":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},e._l(e.items,function(t){return n("v-flex",{key:t.title,attrs:{xs3:""}},[n("v-hover",{scopedSlots:e._u([{key:"default",fn:function(a){var s=a.hover;return n("v-card",{attrs:{tile:""}},[n("v-img",{attrs:{src:i("a531")("./"+t.image),"aspect-ratio":"1.0"}},[n("div",{staticClass:"fill-height",class:s?"bottom-gradient":"none"},[s?n("v-card-title",{staticClass:"white--text headline font-weight-light"},[e._v(e._s(t.title))]):e._e(),s?n("v-card-text",{staticClass:"white--text caption font-weight-light"},[e._v(e._s(t.desc))]):e._e()],1)])],1)}}],null,!0)})],1)}),1)},a=[],s={data:function(){return{items:[{title:"Photorealism",image:"1.png",desc:"Published on C95"},{title:"Signed Distance Field",image:"signed_distance_field.png",desc:"Published on C92"},{title:"Earth Rendering",image:"2.png",desc:"Volume Rendering"},{title:"Atmosphere Rendering",image:"3.png",desc:"Volume Rendering"},{title:"Cornell Box",image:"4.png",desc:"BVH + Next Event Estimation"},{title:"Thin Lens Model",image:"5.png",desc:"Thin Lens Camera Model"},{title:"Diamond",image:"7.png",desc:"Specular + Image Based Lighting"},{title:"Stanford Dragon",image:"8.png",desc:"BVH + Next Event Estimation"},{title:"Glass Balls",image:"9.png",desc:"Specular + Image Based Lighting"}]}}},o=s,r=(i("2ba1"),i("2877")),l=i("6544"),c=i.n(l),d=i("b0af"),u=i("99d9"),m=i("12b2"),p=i("0e8f"),g=i("2b0e"),h=g["a"].extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:function(){return{openTimeout:void 0,closeTimeout:void 0}},methods:{clearDelay:function(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay:function(e,t){var i=this;this.clearDelay();var n=parseInt(this[e+"Delay"],10);this[e+"Timeout"]=setTimeout(t||function(){i.isActive={open:!0,close:!1}[e]},n)}}}),f=i("98a1"),v=i("58df"),b=i("d9bd"),y=Object(v["a"])(h,f["a"]).extend({name:"v-hover",props:{disabled:{type:Boolean,default:!1},value:{type:Boolean,default:void 0}},methods:{onMouseEnter:function(){this.runDelay("open")},onMouseLeave:function(){this.runDelay("close")}},render:function(){if(!this.$scopedSlots.default&&void 0===this.value)return Object(b["b"])("v-hover is missing a default scopedSlot or bound value",this),null;var e=void 0;return this.$scopedSlots.default?e=this.$scopedSlots.default({hover:this.isActive}):this.$slots.default&&1===this.$slots.default.length&&(e=this.$slots.default[0]),Array.isArray(e)&&1===e.length&&(e=e[0]),e&&!Array.isArray(e)&&e.tag?(this.disabled||(e.data=e.data||{},this._g(e.data,{mouseenter:this.onMouseEnter,mouseleave:this.onMouseLeave})),e):(Object(b["b"])("v-hover should only contain a single element",this),e)}}),_=i("adda"),I=i("a722"),x=Object(r["a"])(o,n,a,!1,null,"66b1c094",null);t["default"]=x.exports;c()(x,{VCard:d["a"],VCardText:u["a"],VCardTitle:m["a"],VFlex:p["a"],VHover:y,VImg:_["a"],VLayout:I["a"]})},2322:function(e,t,i){e.exports=i.p+"img/1.576b5b67.png"},"2ba1":function(e,t,i){"use strict";var n=i("4fc3"),a=i.n(n);a.a},"4fc3":function(e,t,i){},7012:function(e,t,i){e.exports=i.p+"img/4.44d80ec5.png"},"823f":function(e,t,i){},"8d95":function(e,t,i){e.exports=i.p+"img/5.392a98d9.png"},a531:function(e,t,i){var n={"./1.png":"2322","./10.png":"ceaa","./2.png":"b5aa","./3.png":"ce48","./4.png":"7012","./5.png":"8d95","./6.png":"b1c8","./7.png":"bdb6","./8.png":"ae14","./9.png":"d98b","./signed_distance_field.png":"b7a4"};function a(e){var t=s(e);return i(t)}function s(e){var t=n[e];if(!(t+1)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return t}a.keys=function(){return Object.keys(n)},a.resolve=s,e.exports=a,a.id="a531"},ae14:function(e,t,i){e.exports=i.p+"img/8.f15a3c62.png"},b1c8:function(e,t,i){e.exports=i.p+"img/6.d4b92ef5.png"},b5aa:function(e,t,i){e.exports=i.p+"img/2.90811c3d.png"},b7a4:function(e,t,i){e.exports=i.p+"img/signed_distance_field.077c27d4.png"},bdb6:function(e,t,i){e.exports=i.p+"img/7.57776a67.png"},ce48:function(e,t,i){e.exports=i.p+"img/3.01fe87f9.png"},ceaa:function(e,t,i){e.exports=i.p+"img/10.74e2c9e7.png"},d98b:function(e,t,i){e.exports=i.p+"img/9.0c7d7116.png"},f820:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{fluid:""}},[n("v-layout",{attrs:{"align-center":"","justify-center":"",column:""}},[n("v-avatar",{attrs:{size:"100"}},[n("v-img",{attrs:{src:i("915e")}})],1),n("h3",{staticClass:"display-3 font-weight-light mb-3"},[e._v("yumcyawiz")]),n("p",[e._v("Hi, I am yumcyawiz.")]),n("p",[e._v("I am an undergraduate student of some research university in Japan,")]),n("p",[e._v("where I major in Applied Mathematics.")]),n("p",[e._v("I like to use programming on some mathematical projects.")]),n("p",[e._v("If you want to contact me, you can use DM on twitter or send me an e-mail to "),n("code",[e._v("hashdolf1923@gmail.com")])]),n("v-timeline",{staticClass:"ma-3"},e._l(e.timelines,function(t){return n("v-timeline-item",{key:t.time,attrs:{color:"red lighten-3"},scopedSlots:e._u([{key:"opposite",fn:function(){return[n("span",[e._v(e._s(t.time))])]},proxy:!0}],null,!0)},[n("v-card",{staticClass:"elevation-2"},[n("v-card-title",{staticClass:"headline font-weight-light"},[e._v(e._s(t.title))]),n("v-card-text",[e._v(e._s(t.desc))])],1)],1)}),1)],1)],1)},a=[],s={data:function(){return{timelines:[{time:"2016/03",title:"Enrolled in Undergraduate",desc:"I enrolled in some research university in japan. I choosed to major in Applied Mathematics."},{time:"2016/12",title:"Joined OSK",desc:"OSK is a programming club in the university. I met a lot of cool guys there."},{time:"2017/08",title:"Joined C92",desc:"I published a book called Signed Distance Field. It is about introduction of Ray Marching with GLSL."},{time:"2018/03",title:"AI Job",desc:"I started working on some company as a machine-learning engineer. I made a face recognition system there."},{time:"2018/09",title:"Fund Intern",desc:"I started to intern on some quantitative hedgefund. I researched on making a smart beta of NIKKEI225 stocks."},{time:"2018/12",title:"Joined C95",desc:"I published a book called Photorealism. It is about theory and implementation of Path Tracing."},{time:"2019/01",title:"Renderer Job",desc:"I started working on some company as a graphics-programmer."}]}}},o=s,r=i("2877"),l=i("6544"),c=i.n(l),d=i("8212"),u=i("b0af"),m=i("99d9"),p=i("12b2"),g=i("a523"),h=i("adda"),f=i("a722"),v=(i("823f"),i("58df")),b=i("6a18"),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},_=Object(v["a"])(b["a"]).extend({name:"v-timeline",props:{alignTop:Boolean,dense:Boolean},computed:{classes:function(){return y({"v-timeline--align-top":this.alignTop,"v-timeline--dense":this.dense},this.themeClasses)}},render:function(e){return e("div",{staticClass:"v-timeline",class:this.classes},this.$slots.default)}}),I=i("9d26"),x=i("b64a"),C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},w=Object(v["a"])(x["a"],b["a"]).extend({name:"v-timeline-item",props:{color:{type:String,default:"primary"},fillDot:Boolean,hideDot:Boolean,icon:String,iconColor:String,large:Boolean,left:Boolean,right:Boolean,small:Boolean},computed:{hasIcon:function(){return!!this.icon||!!this.$slots.icon}},methods:{genBody:function(){return this.$createElement("div",{staticClass:"v-timeline-item__body"},this.$slots.default)},genIcon:function(){return this.$slots.icon?this.$slots.icon:this.$createElement(I["a"],{props:{color:this.iconColor,dark:!this.theme.isDark,small:this.small}},this.icon)},genInnerDot:function(){var e=this.setBackgroundColor(this.color);return this.$createElement("div",C({staticClass:"v-timeline-item__inner-dot"},e),[this.hasIcon&&this.genIcon()])},genDot:function(){return this.$createElement("div",{staticClass:"v-timeline-item__dot",class:{"v-timeline-item__dot--small":this.small,"v-timeline-item__dot--large":this.large}},[this.genInnerDot()])},genOpposite:function(){return this.$createElement("div",{staticClass:"v-timeline-item__opposite"},this.$slots.opposite)}},render:function(e){var t=[this.genBody()];return this.hideDot||t.unshift(this.genDot()),this.$slots.opposite&&t.push(this.genOpposite()),e("div",{staticClass:"v-timeline-item",class:C({"v-timeline-item--fill-dot":this.fillDot,"v-timeline-item--left":this.left,"v-timeline-item--right":this.right},this.themeClasses)},t)}}),D=Object(r["a"])(o,n,a,!1,null,null,null);t["default"]=D.exports;c()(D,{VAvatar:d["a"],VCard:u["a"],VCardText:m["a"],VCardTitle:p["a"],VContainer:g["a"],VImg:h["a"],VLayout:f["a"],VTimeline:_,VTimelineItem:w})}}]);
//# sourceMappingURL=about.ca97fb27.js.map