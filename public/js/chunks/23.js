(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{WjD0:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},cS6j:function(e,t,s){"use strict";s.r(t);var a=s("ke3Z"),r={head:{title:function(){return{inner:this.name||"Loading..."}}},data:function(){return{user:null,id:Number(this.$route.params.user)||null,roles:null,form:new a.a({name:"",email:"",role:null,password:"",password_confirmation:"",status:"1"},!0)}},components:{"shared-form":s("jao2").a},computed:{roleOptions:function(){var e=_.filter(this.roles,(function(e){return"guest"!==e.handle}));return e=_.map(e,(function(e){return{label:e.name,value:e.slug}}))}},methods:{submit:function(){var e=this;this.form.patch("/api/users/".concat(this.id)).then((function(t){toast("User successfully updated","success"),e.$router.push("/users")})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,t,s){axios.all([axios.get("/api/roles"),axios.get("/api/users/"+e.params.user)]).then(axios.spread((function(e,t){s((function(s){s.roles=e.data.data,s.user=t.data.data,s.form.name=s.user.name,s.form.email=s.user.email,s.form.role=s.user.roles[0].slug,s.form.status=s.user.status?"1":"0",s.$emit("updateHead")}))})))}},o=s("KHd+"),n=Object(o.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("portal",{attrs:{to:"title"}},[s("app-title",{attrs:{icon:"user-alt"}},[e._v("Edit User")])],1),e._v(" "),s("shared-form",{attrs:{form:e.form,roleOptions:e.roleOptions},scopedSlots:e._u([{key:"side-container",fn:function(){return[e.user?s("p-card",{staticClass:"text-sm"},[s("div",{staticClass:"flex justify-between"},[s("label",{staticClass:"form__label"},[e._v("Status")]),e._v(" "),e.user.status?s("p",[e._v("Enabled "),s("fa-icon",{staticClass:"text-success-400",attrs:{icon:"circle",size:"xs","fixed-width":""}})],1):s("p",[e._v("Disabled "),s("fa-icon",{staticClass:"text-danger-400",attrs:{icon:"circle",size:"xs","fixed-width":""}})],1)]),e._v(" "),s("div",{staticClass:"flex justify-between"},[s("label",{staticClass:"form__label"},[e._v("Verified")]),e._v(" "),e.user.verified?s("p",[e._v("Yes "),s("fa-icon",{staticClass:"text-success-400",attrs:{icon:"circle",size:"xs","fixed-width":""}})],1):s("p",[e._v("No "),s("fa-icon",{staticClass:"text-danger-400",attrs:{icon:"circle",size:"xs","fixed-width":""}})],1)]),e._v(" "),s("div",{staticClass:"flex justify-between"},[s("label",{staticClass:"form__label"},[e._v("Registered")]),e._v(" "),s("p",[e._v(e._s(e.$moment(e.user.created_at.date).format("L")))])]),e._v(" "),s("div",{staticClass:"flex justify-between"},[s("label",{staticClass:"form__label"},[e._v("Last Login")]),e._v(" "),e.user.logged_in_at?s("p",[e._v(e._s(e.$moment(e.user.logged_in_at.date).format("L")))]):s("p",[e._v("Never")])]),e._v(" "),s("div",{staticClass:"flex justify-between"},[s("label",{staticClass:"form__label"},[e._v("Last Invalid Login")]),e._v(" "),e.user.invalidly_logged_in_at?s("p",[e._v(e._s(e.$moment(e.user.invalidly_logged_in_at.date).format("L")))]):s("p",[e._v("Never")])]),e._v(" "),s("div",{staticClass:"flex justify-between"},[s("label",{staticClass:"form__label"},[e._v("Last Password Change")]),e._v(" "),e.user.password_changed_at?s("p",[e._v(e._s(e.$moment(e.user.password_changed_at.date).format("L")))]):s("p",[e._v("Never")])]),e._v(" "),s("div",{staticClass:"flex justify-between"},[s("label",{staticClass:"form__label"},[e._v("Invalid Login Count")]),e._v(" "),s("p",[e._v(e._s(e.user.invalid_logins))])])]):e._e()]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=n.exports},jao2:function(e,t,s){"use strict";var a={props:{form:{type:Object,required:!0},roleOptions:{type:Array,require:!0}}},r=s("KHd+"),o=Object(r.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row"},[s("div",{staticClass:"content-container"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.$parent.submit(t)},"~input":function(t){return e.form.onFirstChange(t)}}},[s("p-card",[s("div",{staticClass:"row"},[s("div",{staticClass:"col form-sidebar"},[s("div",{staticClass:"xl:mr-10"},[s("h3",[e._v("Personal")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("Information to identify the user both within the CMS and by means of login.")])])]),e._v(" "),s("div",{staticClass:"col form-content"},[s("p-input",{attrs:{name:"name",label:"First Name",autocomplete:"off","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name"),autofocus:"",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),s("p-input",{attrs:{type:"email",name:"email",label:"E-mail",autocomplete:"off","has-error":e.form.errors.has("email"),"error-message":e.form.errors.get("email"),required:""},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1)]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col form-sidebar"},[s("div",{staticClass:"xl:mr-10"},[s("h3",[e._v("Security")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("Secure the account by specifying the role and setting a strong password.")])])]),e._v(" "),s("div",{staticClass:"col form-content"},[s("p-select",{attrs:{name:"role",label:"Role",options:e.roleOptions,autocomplete:"off",value:"user","has-error":e.form.errors.has("role"),"error-message":e.form.errors.get("role"),required:""},model:{value:e.form.role,callback:function(t){e.$set(e.form,"role",t)},expression:"form.role"}}),e._v(" "),s("p-input",{attrs:{type:"password",name:"password",label:"Password",autocomplete:"new-password","has-error":e.form.errors.has("password"),"error-message":e.form.errors.get("password"),required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}}),e._v(" "),s("p-input",{attrs:{type:"password",name:"password_confirmation",label:"Confirm Password",autocomplete:"new-password","has-error":e.form.errors.has("password_confirmation"),"error-message":e.form.errors.get("password_confirmation"),required:""},model:{value:e.form.password_confirmation,callback:function(t){e.$set(e.form,"password_confirmation",t)},expression:"form.password_confirmation"}})],1)])])],1)]),e._v(" "),s("div",{staticClass:"side-container"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.$parent.submit(t)}}},[s("p-card",{staticClass:"mb-6"},[s("p-select",{attrs:{name:"status",label:"Status",options:[{label:"Enabled",value:"1"},{label:"Disabled",value:"0"}]},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}}),e._v(" "),s("portal",{attrs:{to:"actions"}},[s("router-link",{staticClass:"button mr-3",attrs:{to:{name:"users"}}},[e._v("Go Back")]),e._v(" "),s("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.$parent.submit(t)}}},[e._v("Save User")])],1)],1)],1),e._v(" "),e._t("side-container")],2)])}),[],!1,null,null,null);t.a=o.exports},ke3Z:function(e,t,s){"use strict";s("WjD0");function a(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,s,r;return t=e,(s=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&a(t.prototype,s),r&&a(t,r),e}(),o=s("5fFP");function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var s=0;s<t.length;s++){var a=t[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}s.d(t,"a",(function(){return l}));var l=function(){function e(t){var s=arguments.length>1&&void 0!==arguments[1]&&arguments[1];n(this,e),this.errors=new r,this.originalData=t,this.hasChanges=!1,this.preventNavigation=s;var a=this;for(var o in this.__data={},t)this[o]=t[o],a.__data[o]=a[o],function(e){Object.defineProperty(a,e,{get:function(){return a.__data[e]},set:function(t){a.__data[e]=t,a.hasChanges||a.onFirstChange()}})}(o)}var t,s,a;return t=e,(s=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var s=this;return new Promise((function(a,r){axios[e](t,s.data()).then((function(e){s.onSuccess(e.data),o.a.commit("form/setPreventNavigation",!1),a(e.data)})).catch((function(e){s.onFailure(e.response.data),r(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}},{key:"onFirstChange",value:function(e){this.hasChanges=!0,this.preventNavigation&&o.a.commit("form/setPreventNavigation",!0)}},{key:"resetChangeListener",value:function(e){this.hasChanges=!1,this.preventNavigation&&o.a.commit("form/setPreventNavigation",!1)}}])&&i(t.prototype,s),a&&i(t,a),e}()}}]);