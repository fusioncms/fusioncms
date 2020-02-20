(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{UtPH:function(t,e,n){"use strict";var a={props:{form:{type:Object,required:!0}},computed:{sections:{get:function(){return this.$parent.sections},set:function(t){this.$parent.sections=t}}}},s=n("KHd+"),r=Object(s.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content-container"},[n("form",{on:{submit:function(e){return e.preventDefault(),t.$parent.submit(e)}}},[n("p-card",[n("div",{staticClass:"row"},[n("div",{staticClass:"side-container"},[n("div",{staticClass:"xxl:mr-10"},[n("h3",[t._v("General")]),t._v(" "),n("p",{staticClass:"text-sm"},[t._v("What will this fieldset be called?")])])]),t._v(" "),n("div",{staticClass:"content-container"},[n("p-input",{attrs:{name:"name",label:"Name",help:"What this fieldset will be called.",autocomplete:"off",autofocus:"",required:"","has-error":t.form.errors.has("name"),"error-message":t.form.errors.get("name")},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),t._v(" "),n("p-slug",{attrs:{name:"handle",label:"Handle",help:"A developer-friendly variant of the fieldset's name.",autocomplete:"off",required:"",delimiter:"_",watch:t.form.name,"has-error":t.form.errors.has("handle"),"error-message":t.form.errors.get("handle")},model:{value:t.form.handle,callback:function(e){t.$set(t.form,"handle",e)},expression:"form.handle"}})],1)])]),t._v(" "),n("section-builder",{staticClass:"mt-6",on:{input:t.$parent.sectionsChanged},model:{value:t.sections,callback:function(e){t.sections=e},expression:"sections"}}),t._v(" "),n("portal",{attrs:{to:"actions"}},[n("router-link",{staticClass:"button mr-3",attrs:{to:{name:"fieldsets"}}},[t._v("Go Back")]),t._v(" "),n("button",{staticClass:"button button--primary",class:{"button--disabled":!t.form.hasChanges},attrs:{type:"submit",disabled:!t.form.hasChanges},on:{click:function(e){return e.preventDefault(),t.$parent.submit(e)}}},[t._v("Save")])],1)],1)])}),[],!1,null,null,null);e.a=r.exports},WjD0:function(t,e){t.exports="object"==typeof self?self.FormData:window.FormData},ke3Z:function(t,e,n){"use strict";n("WjD0");function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors={}}var e,n,s;return e=t,(n=[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t.errors}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}])&&a(e.prototype,n),s&&a(e,s),t}(),r=n("5fFP");function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}n.d(e,"a",(function(){return u}));var u=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i(this,t),this.errors=new s,this.originalData=e,this.hasChanges=!1,this.preventNavigation=n;var a=this;for(var r in this.__data={},e)this[r]=e[r],a.__data[r]=a[r],function(t){Object.defineProperty(a,t,{get:function(){return a.__data[t]},set:function(e){a.__data[t]=e,a.hasChanges||a.onFirstChange()}})}(r)}var e,n,a;return e=t,(n=[{key:"set",value:function(t,e){this.data[t]=e}},{key:"get",value:function(t){return this.data[t]}},{key:"reset",value:function(){for(var t in this.originalData)this[t]=this.originalData[t];this.errors.clear()}},{key:"data",value:function(){var t={};for(var e in this.originalData)t[e]=this[e];return t}},{key:"post",value:function(t){return this.submit("post",t)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"put",value:function(t){return this.submit("put",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(t,e){var n=this;return new Promise((function(a,s){axios[t](e,n.data()).then((function(t){n.onSuccess(t.data),r.a.commit("form/setPreventNavigation",!1),a(t.data)})).catch((function(t){n.onFailure(t.response.data),s(t.response.data)}))}))}},{key:"onSuccess",value:function(t){}},{key:"onFailure",value:function(t){this.errors.record(t)}},{key:"onFirstChange",value:function(t){this.hasChanges=!0,this.preventNavigation&&r.a.commit("form/setPreventNavigation",!0)}},{key:"resetChangeListener",value:function(t){this.hasChanges=!1,this.preventNavigation&&r.a.commit("form/setPreventNavigation",!1)}}])&&o(e.prototype,n),a&&o(e,a),t}()},uPdR:function(t,e,n){"use strict";n.r(e);var a=n("ke3Z"),s={head:{title:function(){return{inner:this.form.name||"Loading..."}}},data:function(){return{id:null,sections:[],originalSections:[],loaded:!1,form:new a.a({name:"",handle:""},!0)}},components:{"shared-form":n("UtPH").a},methods:{submit:function(){var t=this;this.form.patch("/api/fieldsets/"+this.id).then((function(e){var n={};n.sections=t.sections,axios.post("/api/fieldsets/".concat(t.id,"/sections"),n).then((function(e){toast("Fieldset successfully updated","success"),t.$router.push("/fieldsets")}))})).catch((function(t){toast(t.response.data.message,"failed")}))},sectionsChanged:function(t){this.loaded&&!this.form.hasChanges&&(_.isEqual(this.originalSections,t)||this.form.onFirstChange())}},beforeRouteEnter:function(t,e,n){axios.all([axios.get("/api/fieldsets/"+t.params.fieldset)]).then(axios.spread((function(t){n((function(e){e.id=t.data.data.id,e.sections=t.data.data.sections,e.originalSections=_.cloneDeep(e.sections),e.form.name=t.data.data.name,e.form.handle=t.data.data.handle,e.loaded=!0,e.$emit("updateHead"),e.form.resetChangeListener()}))}))).catch((function(t){n("/fieldsets"),toast("The requested fieldset could not be found","warning")}))}},r=n("KHd+"),i=Object(r.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("portal",{attrs:{to:"title"}},[e("app-title",{attrs:{icon:"list"}},[this._v("Edit Fieldset")])],1),this._v(" "),e("div",{staticClass:"row"},[e("shared-form",{attrs:{form:this.form}})],1)],1)}),[],!1,null,null,null);e.default=i.exports}}]);