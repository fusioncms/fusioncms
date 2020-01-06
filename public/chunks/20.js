(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{OEMf:function(e,t,r){"use strict";r.r(t);var a=r("ke3Z"),s={head:{title:function(){return{inner:"Create a User"}}},data:function(){return{roles:null,form:new a.a({name:"",email:"",role:null,password:"",password_confirmation:"",status:"1"},!0)}},components:{"shared-form":r("jao2").a},computed:{roleOptions:function(){var e=_.filter(this.roles,(function(e){return"guest"!==e.handle}));return e=_.map(e,(function(e){return{label:e.name,value:e.slug}}))}},methods:{submit:function(){var e=this;this.form.post("/api/users").then((function(t){toast("User successfully created","success"),e.$router.push("/users")})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,t,r){axios.all([axios.get("/api/roles")]).then(axios.spread((function(e,t){r((function(t){t.roles=e.data.data}))})))}},o=r("KHd+"),n=Object(o.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("portal",{attrs:{to:"title"}},[t("app-title",{attrs:{icon:"user-alt"}},[this._v("Create User")])],1),this._v(" "),t("div",{staticClass:"row"},[t("shared-form",{attrs:{form:this.form,roleOptions:this.roleOptions}})],1)],1)}),[],!1,null,null,null);t.default=n.exports},WjD0:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},jao2:function(e,t,r){"use strict";var a={props:{form:{type:Object,required:!0},roleOptions:{type:Array,require:!0}}},s=r("KHd+"),o=Object(s.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"row"},[r("div",{staticClass:"content-container"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.$parent.submit(t)},"~input":function(t){return e.form.onFirstChange(t)}}},[r("p-card",[r("div",{staticClass:"row"},[r("div",{staticClass:"col form-sidebar"},[r("div",{staticClass:"xl:mr-10"},[r("h3",[e._v("Personal")]),e._v(" "),r("p",{staticClass:"text-sm"},[e._v("Information to identify the user both within the CMS and by means of login.")])])]),e._v(" "),r("div",{staticClass:"col form-content"},[r("p-input",{attrs:{name:"name",label:"First Name",autocomplete:"off","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name"),autofocus:"",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("p-input",{attrs:{type:"email",name:"email",label:"E-mail",autocomplete:"off","has-error":e.form.errors.has("email"),"error-message":e.form.errors.get("email"),required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col form-sidebar"},[r("div",{staticClass:"xl:mr-10"},[r("h3",[e._v("Security")]),e._v(" "),r("p",{staticClass:"text-sm"},[e._v("Secure the account by specifying the role and setting a strong password.")])])]),e._v(" "),r("div",{staticClass:"col form-content"},[r("p-select",{attrs:{name:"role",label:"Role",options:e.roleOptions,autocomplete:"off",value:"user","has-error":e.form.errors.has("role"),"error-message":e.form.errors.get("role"),required:""},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}}),e._v(" "),r("p-input",{attrs:{type:"password",name:"password",label:"Password",autocomplete:"new-password","has-error":e.form.errors.has("password"),"error-message":e.form.errors.get("password"),required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),r("p-input",{attrs:{type:"password",name:"password_confirmation",label:"Confirm Password",autocomplete:"new-password","has-error":e.form.errors.has("password_confirmation"),"error-message":e.form.errors.get("password_confirmation"),required:""},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1)])])],1)]),e._v(" "),r("div",{staticClass:"side-container"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.$parent.submit(t)}}},[r("p-card",{staticClass:"mb-6"},[r("p-select",{attrs:{name:"status",label:"Status",options:[{label:"Enabled",value:"1"},{label:"Disabled",value:"0"}]},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}}),e._v(" "),r("portal",{attrs:{to:"actions"}},[r("router-link",{staticClass:"button mr-3",attrs:{to:{name:"users"}}},[e._v("Go Back")]),e._v(" "),r("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.$parent.submit(t)}}},[e._v("Save User")])],1)],1)],1),e._v(" "),e._t("side-container")],2)])}),[],!1,null,null,null);t.a=o.exports},ke3Z:function(e,t,r){"use strict";r("WjD0");function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,r,s;return t=e,(r=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&a(t.prototype,r),s&&a(t,s),e}(),o=r("5fFP");function n(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}r.d(t,"a",(function(){return i}));var i=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors=new s,this.originalData=t,this.hasChanges=!1,this.preventNavigation=r;var a=this;for(var o in this.__data={},t)this[o]=t[o],a.__data[o]=a[o],function(e){Object.defineProperty(a,e,{get:function(){return a.__data[e]},set:function(t){a.__data[e]=t,a.hasChanges||a.onFirstChange()}})}(o)}var t,r,a;return t=e,(r=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var r=this;return new Promise((function(a,s){axios[e](t,r.data()).then((function(e){r.onSuccess(e.data),o.a.commit("form/setPreventNavigation",!1),a(e.data)})).catch((function(e){r.onFailure(e.response.data),s(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}},{key:"onFirstChange",value:function(e){this.hasChanges=!0,this.preventNavigation&&o.a.commit("form/setPreventNavigation",!0)}},{key:"resetChangeListener",value:function(e){this.hasChanges=!1,this.preventNavigation&&o.a.commit("form/setPreventNavigation",!1)}}])&&n(t.prototype,r),a&&n(t,a),e}()}}]);