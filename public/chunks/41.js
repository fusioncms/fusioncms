(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{pMm7:function(e,t,s){"use strict";s.r(t);var a=s("ke3Z"),l={data:function(){return{sections:[],form:new a.a({name:"",handle:""})}},methods:{submit:function(){var e=this;this.form.post("/api/fieldsets").then(function(t){var s={},a=e,l=t;s.sections=e.sections,axios.post("/api/fieldsets/".concat(t.data.id,"/sections"),s).then(function(e){toast("Fieldset successfully created","success"),a.$router.push("/fieldsets/edit/"+l.data.id)})}).catch(function(e){toast(e.message,"failed")})}}},r=s("KHd+"),o=Object(r.a)(l,function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("portal",{attrs:{to:"title"}},[s("app-title",{attrs:{icon:"ballot"}},[e._v("Create Fieldset")])],1),e._v(" "),s("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[s("p-card",[s("div",{staticClass:"row"},[s("div",{staticClass:"col xxl:text-right w-full xxl:w-1/3 xxxl:w-1/4"},[s("div",{staticClass:"xxl:mr-10"},[s("h3",[e._v("General")]),e._v(" "),s("p",{staticClass:"text-sm"},[e._v("What will this fieldset be called?")])])]),e._v(" "),s("div",{staticClass:"col w-full xxl:w-2/3"},[s("p-input",{attrs:{name:"name",label:"Name",help:"What this fieldset will be called.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),s("p-slug",{attrs:{name:"handle",label:"Handle",help:"A developer-friendly variant of the fieldset's name.",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}})],1)])]),e._v(" "),s("section-builder",{staticClass:"mt-6",model:{value:e.sections,callback:function(t){e.sections=t},expression:"sections"}}),e._v(" "),s("portal",{attrs:{to:"actions"}},[s("router-link",{staticClass:"button mr-3",attrs:{to:{name:"fieldsets"}}},[e._v("Go Back")]),e._v(" "),s("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save Fieldset")])],1)],1)],1)},[],!1,null,null,null);t.default=o.exports}}]);