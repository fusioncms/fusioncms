(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"OS/Q":function(e,t,r){"use strict";var a={props:{form:{type:Object,required:!0},flags:{type:Array,required:!0}}},s=r("KHd+"),n=Object(s.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"content-container"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.$parent.submit(t)},"~input":function(t){return e.form.onFirstChange(t)}}},[r("p-card",[r("div",{staticClass:"row"},[r("div",{staticClass:"col form-sidebar"},[r("div",{staticClass:"xl:mr-10"},[r("h3",[e._v("Basic Information")]),e._v(" "),r("p",{staticClass:"text-sm"},[e._v("What is the name and description of this role?")])])]),e._v(" "),r("div",{staticClass:"col form-content"},[r("p-input",{attrs:{name:"name",label:"Name",autocomplete:"off","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name"),autofocus:"",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("p-slug",{attrs:{name:"slug",label:"Slug",autocomplete:"off","has-error":e.form.errors.has("slug"),"error-message":e.form.errors.get("slug"),required:"",watch:e.form.name},model:{value:e.form.slug,callback:function(t){e.$set(e.form,"slug",t)},expression:"form.slug"}}),e._v(" "),r("p-input",{attrs:{name:"description",label:"Description",autocomplete:"off","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description"),required:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col form-sidebar"},[r("div",{staticClass:"xl:mr-10"},[r("h3",[e._v("Attributes")]),e._v(" "),r("p",{staticClass:"text-sm"},[e._v("Assign any additional attribute values for your role.")])])]),e._v(" "),r("div",{staticClass:"col form-content"},[r("p-select",{attrs:{name:"special",label:"Special Flag",options:e.flags,autocomplete:"off","has-error":e.form.errors.has("special"),"error-message":e.form.errors.get("special"),required:""},model:{value:e.form.special,callback:function(t){e.$set(e.form,"special",t)},expression:"form.special"}})],1)])]),e._v(" "),r("portal",{attrs:{to:"actions"}},[r("router-link",{staticClass:"button mr-3",attrs:{to:{name:"roles"}}},[e._v("Go Back")]),e._v(" "),r("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.$parent.submit(t)}}},[e._v("Save Role")])],1)],1)])}),[],!1,null,null,null);t.a=n.exports},WjD0:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},gdbQ:function(e,t,r){"use strict";r.r(t);var a=r("ke3Z"),s={head:{title:function(){return{inner:this.name||"Loading..."}}},data:function(){return{id:Number(this.$route.params.role)||null,flags:[{label:"None",value:""},{label:"All Access",value:"all-access"},{label:"No Access",value:"no-access"}],form:new a.a({name:"",slug:"",description:"",special:""},!0)}},components:{"shared-form":r("OS/Q").a},methods:{submit:function(){var e=this;this.form.patch("/api/roles/".concat(this.id)).then((function(t){toast("Role successfully updated","success"),e.$router.push("/roles")})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,t,r){axios.all([axios.get("/api/roles/"+e.params.role)]).then(axios.spread((function(e){r((function(t){t.role=e.data.data,t.id=e.data.data.id,t.form.name=t.role.name,t.form.slug=t.role.slug,t.form.description=t.role.description,t.form.special=t.role.special||"",t.$emit("updateHead"),t.$nextTick((function(){t.form.resetChangeListener()}))}))})))}},n=r("KHd+"),o=Object(n.a)(s,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("portal",{attrs:{to:"title"}},[t("app-title",{attrs:{icon:"user-shield"}},[this._v("Edit Role")])],1),this._v(" "),t("div",{staticClass:"row"},[t("shared-form",{attrs:{form:this.form,flags:this.flags}})],1)],1)}),[],!1,null,null,null);t.default=o.exports},ke3Z:function(e,t,r){"use strict";r("WjD0");function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,r,s;return t=e,(r=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&a(t.prototype,r),s&&a(t,s),e}(),n=r("5fFP");function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}r.d(t,"a",(function(){return l}));var l=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];o(this,e),this.errors=new s,this.originalData=t,this.hasChanges=!1,this.preventNavigation=r;var a=this;for(var n in this.__data={},t)this[n]=t[n],a.__data[n]=a[n],function(e){Object.defineProperty(a,e,{get:function(){return a.__data[e]},set:function(t){a.__data[e]=t,a.hasChanges||a.onFirstChange()}})}(n)}var t,r,a;return t=e,(r=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var r=this;return new Promise((function(a,s){axios[e](t,r.data()).then((function(e){r.onSuccess(e.data),n.a.commit("form/setPreventNavigation",!1),a(e.data)})).catch((function(e){r.onFailure(e.response.data),s(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}},{key:"onFirstChange",value:function(e){this.hasChanges=!0,this.preventNavigation&&n.a.commit("form/setPreventNavigation",!0)}},{key:"resetChangeListener",value:function(e){this.hasChanges=!1,this.preventNavigation&&n.a.commit("form/setPreventNavigation",!1)}}])&&i(t.prototype,r),a&&i(t,a),e}()}}]);