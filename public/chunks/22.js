(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{WjD0:function(t,e){t.exports="object"==typeof self?self.FormData:window.FormData},ke3Z:function(t,e,r){"use strict";r("WjD0");function a(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors={}}var e,r,n;return e=t,(r=[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t.errors}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}])&&a(e.prototype,r),n&&a(e,n),t}(),s=r("5fFP");function i(t,e){for(var r=0;r<e.length;r++){var a=e[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}r.d(e,"a",(function(){return o}));var o=function(){function t(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors=new n,this.originalData=e,this.hasChanges=!1,this.preventNavigation=r;var a=this;for(var s in this.__data={},e)this[s]=e[s],a.__data[s]=a[s],function(t){Object.defineProperty(a,t,{get:function(){return a.__data[t]},set:function(e){a.__data[t]=e,a.hasChanges||a.onFirstChange()}})}(s)}var e,r,a;return e=t,(r=[{key:"set",value:function(t,e){this.data[t]=e}},{key:"get",value:function(t){return this.data[t]}},{key:"reset",value:function(){for(var t in this.originalData)this[t]=this.originalData[t];this.errors.clear()}},{key:"data",value:function(){var t={};for(var e in this.originalData)t[e]=this[e];return t}},{key:"post",value:function(t){return this.submit("post",t)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"put",value:function(t){return this.submit("put",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(t,e){var r=this;return new Promise((function(a,n){axios[t](e,r.data()).then((function(t){r.onSuccess(t.data),s.a.commit("form/setPreventNavigation",!1),a(t.data)})).catch((function(t){r.onFailure(t.response.data),n(t.response.data)}))}))}},{key:"onSuccess",value:function(t){}},{key:"onFailure",value:function(t){this.errors.record(t)}},{key:"onFirstChange",value:function(t){this.hasChanges=!0,this.preventNavigation&&s.a.commit("form/setPreventNavigation",!0)}},{key:"resetChangeListener",value:function(t){this.hasChanges=!1,this.preventNavigation&&s.a.commit("form/setPreventNavigation",!1)}}])&&i(e.prototype,r),a&&i(e,a),t}()},suyn:function(t,e,r){"use strict";r.r(e);var a=r("ke3Z"),n={name:"loginForm",data:function(){return{form:new a.a({email:"",password:""})}},methods:{submit:function(){var t=this;this.form.post("/login").then((function(e){t.$store.commit("user/setUser",e.data),t.$route.query.redirect?location.href=t.$route.query.redirect:location.href="/"+config.path})).catch((function(t){}))}}},s=r("KHd+"),i={head:{title:function(){return{inner:"Log In"}}},name:"login",components:{"login-form":Object(s.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full max-w-xs",attrs:{id:"login-form"}},[t._m(0),t._v(" "),r("div",{staticClass:"card"},[r("div",{staticClass:"card__body"},[t._m(1),t._v(" "),r("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("p-input",{attrs:{name:"email",label:"E-mail",autocomplete:"off","has-error":t.form.errors.has("email"),"error-message":t.form.errors.get("email"),autofocus:"",required:""},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}}),t._v(" "),r("p-input",{attrs:{name:"password",type:"password",label:"Password",autocomplete:"off","has-error":t.form.errors.has("password"),"error-message":t.form.errors.get("password"),autofocus:"",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}}),t._v(" "),r("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Login")])],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text-center relative mb-10"},[e("img",{attrs:{src:"/img/illustrations/login.svg",alt:"Illustration"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex flex-col items-center leading-none mb-6"},[e("span",{staticClass:"mb-3 text-gray-600 text-sm font-bold "},[this._v("Welcome to")]),this._v(" "),e("span",{staticClass:"font-bold text-xxl"},[this._v("FusionCMS")])])}],!1,null,null,null).exports}},o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gray-200 mx-auto h-full flex flex-1 flex-col items-center justify-center",staticStyle:{transition:"0.1s"}},[r("login-form"),t._v(" "),r("footer",{staticClass:"p-6 text-xs text-gray-600 flex flex-col items-center justify-center leading-loose md:leading-none"},[r("div",{staticClass:"mb-4 flex items-center justify-center"},[r("a",{directives:[{name:"modal",rawName:"v-modal:privacy-policy",arg:"privacy-policy"}],staticClass:"mr-3",attrs:{href:"#"}},[t._v("Privacy Policy")]),t._v(" "),r("a",{directives:[{name:"modal",rawName:"v-modal:tos",arg:"tos"}],attrs:{href:"#"}},[t._v("Terms of Service")])]),t._v(" "),r("span",[t._v("Built with "),r("fa-icon",{staticClass:"text-danger-200 mx-1",attrs:{icon:["fas","heart"]}}),t._v(" + "),r("fa-icon",{staticClass:"text-gray-600 mx-1",attrs:{icon:["fas","coffee"]}}),t._v(" by the efelle team")],1)]),t._v(" "),r("tos-modal"),t._v(" "),r("privacy-modal")],1)}),[],!1,null,null,null);e.default=o.exports}}]);