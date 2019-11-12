(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{ke3Z:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,n,a;return t=e,(n=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&r(t.prototype,n),a&&r(t,a),e}(),s=n("5fFP");function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,"a",(function(){return o}));var o=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var r in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors=new a,this.originalData=t,this.hasChanges=!1,this.preventNavigation=n,t)this[r]=t[r]}var t,n,r;return t=e,(n=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var n=this;return new Promise((function(r,a){axios[e](t,n.data()).then((function(e){n.onSuccess(e.data),r(e.data)})).catch((function(e){n.onFailure(e.response.data),a(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}},{key:"onFirstChange",value:function(e){this.hasChanges=!0,this.preventNavigation&&s.a.commit("form/setPreventNavigation",!0)}},{key:"onChange",value:function(e){}}])&&i(t.prototype,n),r&&i(t,r),e}()},pMm7:function(e,t,n){"use strict";n.r(t);var r=n("ke3Z"),a={data:function(){return{sections:[],form:new r.a({name:"",handle:""})}},methods:{submit:function(){var e=this;this.form.post("/api/fieldsets").then((function(t){var n={};n.sections=e.sections,axios.post("/api/fieldsets/".concat(t.data.id,"/sections"),n).then((function(t){toast("Fieldset successfully created","success"),e.$router.push("/fieldsets")}))})).catch((function(e){toast(e.message,"failed")}))}}},s=n("KHd+"),i=Object(s.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("portal",{attrs:{to:"title"}},[n("app-title",{attrs:{icon:"ballot"}},[e._v("Create Fieldset")])],1),e._v(" "),n("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[n("p-card",[n("div",{staticClass:"row"},[n("div",{staticClass:"col xxl:text-right w-full xxl:w-1/3 xxxl:w-1/4"},[n("div",{staticClass:"xxl:mr-10"},[n("h3",[e._v("General")]),e._v(" "),n("p",{staticClass:"text-sm"},[e._v("What will this fieldset be called?")])])]),e._v(" "),n("div",{staticClass:"col w-full xxl:w-2/3"},[n("p-input",{attrs:{name:"name",label:"Name",help:"What this fieldset will be called.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),n("p-slug",{attrs:{name:"handle",label:"Handle",help:"A developer-friendly variant of the fieldset's name.",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}})],1)])]),e._v(" "),n("section-builder",{staticClass:"mt-6",model:{value:e.sections,callback:function(t){e.sections=t},expression:"sections"}}),e._v(" "),n("portal",{attrs:{to:"actions"}},[n("router-link",{staticClass:"button mr-3",attrs:{to:{name:"fieldsets"}}},[e._v("Go Back")]),e._v(" "),n("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save Fieldset")])],1)],1)],1)}),[],!1,null,null,null);t.default=i.exports}}]);