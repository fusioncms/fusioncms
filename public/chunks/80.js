(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{MKK0:function(e,t,s){"use strict";s.r(t);var r={head:{title:function(){return{inner:"Create a Role"}}},data:function(){return{errors:{},flags:[{label:"None",value:""},{label:"All Access",value:"all-access"},{label:"No Access",value:"no-access"}],name:"",slug:"",description:"",special:""}},methods:{hasError:function(e){return void 0!==this.errors[e]},getError:function(e){return this.hasError(e)?this.errors[e][0]:""},submit:function(){var e=this;axios.post("/api/roles",{name:this.name,slug:this.slug,description:this.description,special:this.special}).then((function(t){toast("Role successfully created","success"),e.$router.push("/roles")})).catch((function(t){toast(t.response.data.message,"failed"),e.errors=t.response.data.errors}))}}},a=s("KHd+"),o=Object(a.a)(r,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("portal",{attrs:{to:"title"}},[s("app-title",{attrs:{icon:"crown"}},[e._v("Create Role")])],1),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"content-container"},[s("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("p-card",[s("div",{staticClass:"row"},[s("div",{staticClass:"col form-sidebar"},[s("div",{staticClass:"xl:mr-10"},[s("h3",[e._v("Basic Information")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("What is the name and description of this role?")])])]),e._v(" "),s("div",{staticClass:"col form-content"},[s("p-input",{attrs:{name:"name",label:"Name",autocomplete:"off","has-error":e.hasError("name"),"error-message":e.getError("name"),autofocus:"",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),s("p-slug",{attrs:{name:"slug",label:"Slug",autocomplete:"off","has-error":e.hasError("slug"),"error-message":e.getError("slug"),required:"",watch:e.name},model:{value:e.slug,callback:function(t){e.slug=t},expression:"slug"}}),e._v(" "),s("p-input",{attrs:{name:"description",label:"Description",autocomplete:"off","has-error":e.hasError("description"),"error-message":e.getError("description"),required:""},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)]),e._v(" "),s("hr"),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col form-sidebar"},[s("div",{staticClass:"xl:mr-10"},[s("h3",[e._v("Attributes")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("Assign any additional attribute values for your role.")])])]),e._v(" "),s("div",{staticClass:"col form-content"},[s("p-select",{attrs:{name:"special",label:"Special Flag",options:e.flags,autocomplete:"off","has-error":e.hasError("special"),"error-message":e.getError("special"),required:""},model:{value:e.special,callback:function(t){e.special=t},expression:"special"}})],1)])]),e._v(" "),s("portal",{attrs:{to:"actions"}},[s("router-link",{staticClass:"button mr-3",attrs:{to:{name:"roles"}}},[e._v("Cancel")]),e._v(" "),s("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save Role")])],1)],1)])])],1)}),[],!1,null,null,null);t.default=o.exports}}]);