(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"OS/Q":function(e,t,s){"use strict";var r={props:{form:{type:Object,required:!0},flags:{type:Array,required:!0}}},a=s("KHd+"),o=Object(a.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content-container"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.$parent.submit(t)},"~input":function(t){return e.form.onFirstChange(t)}}},[s("p-card",[s("div",{staticClass:"row"},[s("div",{staticClass:"col form-sidebar"},[s("div",{staticClass:"xl:mr-10"},[s("h3",[e._v("Basic Information")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("What is the name and description of this role?")])])]),e._v(" "),s("div",{staticClass:"col form-content"},[s("p-input",{attrs:{name:"name",label:"Name",autocomplete:"off","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name"),autofocus:"",required:""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),s("p-slug",{attrs:{name:"slug",label:"Slug",autocomplete:"off","has-error":e.form.errors.has("slug"),"error-message":e.form.errors.get("slug"),required:"",watch:e.form.name},model:{value:e.form.slug,callback:function(t){e.$set(e.form,"slug",t)},expression:"form.slug"}}),e._v(" "),s("p-input",{attrs:{name:"description",label:"Description",autocomplete:"off","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description"),required:""},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col form-sidebar"},[s("div",{staticClass:"xl:mr-10"},[s("h3",[e._v("Attributes")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("Assign any additional attribute values for your role.")])])]),e._v(" "),s("div",{staticClass:"col form-content"},[s("p-select",{attrs:{name:"special",label:"Special Flag",options:e.flags,autocomplete:"off","has-error":e.form.errors.has("special"),"error-message":e.form.errors.get("special"),required:""},model:{value:e.form.special,callback:function(t){e.$set(e.form,"special",t)},expression:"form.special"}})],1)])]),e._v(" "),s("portal",{attrs:{to:"actions"}},[s("router-link",{staticClass:"button mr-3",attrs:{to:{name:"roles"}}},[e._v("Go Back")]),e._v(" "),s("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.$parent.submit(t)}}},[e._v("Save Role")])],1)],1)])}),[],!1,null,null,null);t.a=o.exports},gdbQ:function(e,t,s){"use strict";s.r(t);var r=s("ke3Z"),a={head:{title:function(){return{inner:this.name||"Loading..."}}},data:function(){return{id:Number(this.$route.params.role)||null,flags:[{label:"None",value:""},{label:"All Access",value:"all-access"},{label:"No Access",value:"no-access"}],form:new r.a({name:"",slug:"",description:"",special:""},!0)}},components:{"shared-form":s("OS/Q").a},methods:{submit:function(){var e=this;this.form.patch("/api/roles/".concat(this.id)).then((function(t){toast("Role successfully updated","success"),e.$router.push("/roles")})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,t,s){axios.all([axios.get("/api/roles/"+e.params.role)]).then(axios.spread((function(e){s((function(t){t.role=e.data.data,t.id=e.data.data.id,t.form.name=t.role.name,t.form.slug=t.role.slug,t.form.description=t.role.description,t.form.special=t.role.special||"",t.$emit("updateHead"),t.$nextTick((function(){t.form.resetChangeListener()}))}))})))}},o=s("KHd+"),i=Object(o.a)(a,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("portal",{attrs:{to:"title"}},[t("app-title",{attrs:{icon:"user-shield"}},[this._v("Edit Role")])],1),this._v(" "),t("div",{staticClass:"row"},[t("shared-form",{attrs:{form:this.form,flags:this.flags}})],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);