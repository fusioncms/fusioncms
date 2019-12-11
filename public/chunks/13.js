(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{WjD0:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},WsmK:function(e,t,r){"use strict";var a={data:function(){return{groups:{},groupOptions:[]}},props:{form:{type:Object,required:!0}},watch:{"form.module":function(e){this.setFormGroup(e)}},methods:{setFormGroup:function(e){this.groupOptions=[],this.form.group=0,_.has(this.groups,e)&&(this.groupOptions=this.groups[e],0==this.form.group&&(this.form.group=_.head(this.groupOptions).value))}},created:function(){axios.all([axios.get("/api/taxonomies"),axios.get("/api/matrices")]).then(axios.spread(function(e,t){this.groups.taxonomies=_.map(e.data.data,(function(e){return{label:e.name,value:e.id}})),this.groups.matrices=_.reject(t.data.data,["type","page"]),this.groups.matrices=_.map(this.groups.matrices,(function(e){return{label:e.name,value:e.id}})),this.setFormGroup(this.form.module)}.bind(this)))}},o=r("KHd+"),s=Object(o.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("p-card",[r("div",{staticClass:"row"},[r("div",{staticClass:"col w-full xxl:w-2/3"},[r("p-input",{attrs:{name:"name",label:"Name",help:"What this import feed be called.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("p-slug",{attrs:{name:"handle",label:"Handle",help:"Unique identifier to index this import feed.",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}}),e._v(" "),r("p-input",{attrs:{name:"source",label:"Source",help:"Google Sheets sheet reference URL.",autocomplete:"off",required:"","has-error":e.form.errors.has("source"),"error-message":e.form.errors.get("source")},model:{value:e.form.source,callback:function(t){e.$set(e.form,"source",t)},expression:"form.source"}}),e._v(" "),r("p-select",{attrs:{name:"module",label:"Module",help:"Which module do you wish to import to?",options:[{label:"Users",value:"users"},{label:"Taxonomies",value:"taxonomies"},{label:"Matrices",value:"matrices"}],"has-error":e.form.errors.has("module"),"error-message":e.form.errors.get("module")},model:{value:e.form.module,callback:function(t){e.$set(e.form,"module",t)},expression:"form.module"}}),e._v(" "),e.groupOptions.length>0?r("p-select",{attrs:{name:"group",label:"Group",help:"Which group do you wish to import to?",options:e.groupOptions,"has-error":e.form.errors.has("group"),"error-message":e.form.errors.get("group")},model:{value:e.form.group,callback:function(t){e.$set(e.form,"group",t)},expression:"form.group"}}):e._e(),e._v(" "),r("p-checkbox-group",{attrs:{label:"Strategy",help:"Strategy used when matching record is detected or missing from import (based on an unique identifier).","has-error":e.form.errors.has("strategy"),"error-message":e.form.errors.get("strategy")}},[r("p-checkbox",{attrs:{name:"create",id:"create","native-value":"create"},model:{value:e.form.strategy,callback:function(t){e.$set(e.form,"strategy",t)},expression:"form.strategy"}},[e._v("\n\t\t\t\t\t\t\tCreate "),r("span",{staticClass:"text-gray-500 italic"},[e._v("- Adds new elements if they do not already exist.")])]),e._v(" "),r("p-checkbox",{attrs:{name:"update",id:"update","native-value":"update"},model:{value:e.form.strategy,callback:function(t){e.$set(e.form,"strategy",t)},expression:"form.strategy"}},[e._v("\n\t\t\t\t\t\t\tUpdate "),r("span",{staticClass:"text-gray-500 italic"},[e._v("- Updates elements when matching record is found.")])]),e._v(" "),r("p-checkbox",{attrs:{name:"disable",id:"disable","native-value":"disable"},model:{value:e.form.strategy,callback:function(t){e.$set(e.form,"strategy",t)},expression:"form.strategy"}},[e._v("\n\t\t\t\t\t\t\tDisable "),r("span",{staticClass:"text-gray-500 italic"},[e._v("- Disables any elements that are missing from the import.")])]),e._v(" "),r("p-checkbox",{attrs:{name:"delete",id:"delete","native-value":"delete"},model:{value:e.form.strategy,callback:function(t){e.$set(e.form,"strategy",t)},expression:"form.strategy"}},[e._v("\n\t\t\t\t\t\t\tDelete "),r("span",{staticClass:"text-gray-500 italic"},[e._v("- Deletes any elements that are missing from the import.")])])],1)],1)])])],1)}),[],!1,null,null,null);t.a=s.exports},eI0C:function(e,t,r){"use strict";r.r(t);var a=r("ke3Z"),o={data:function(){return{form:new a.a({name:"",handle:"",source:"",schedule:null,module:"users",group:0,strategy:[],backup:!1})}},components:{"entry-form":r("WsmK").a},methods:{submit:function(){var e=this;this.form.post("/api/imports").then((function(t){toast("Import successfully saved","success"),e.$router.push("/importer/mapping/".concat(t.data.id))})).catch((function(e){toast(e.message,"failed")}))}}},s=r("KHd+"),n=Object(s.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("portal",{attrs:{to:"title"}},[r("app-title",{attrs:{icon:"ship"}},[e._v("Create Import")])],1),e._v(" "),r("portal",{attrs:{to:"actions"}},[r("router-link",{staticClass:"button mr-3",attrs:{to:{name:"importer"}}},[e._v("Go Back")]),e._v(" "),r("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save & Continue")])],1),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"content-container"},[r("entry-form",{attrs:{form:e.form}})],1)])],1)}),[],!1,null,null,null);t.default=n.exports},ke3Z:function(e,t,r){"use strict";r("WjD0");function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,r,o;return t=e,(r=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&a(t.prototype,r),o&&a(t,o),e}(),s=r("5fFP");function n(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}r.d(t,"a",(function(){return i}));var i=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),console.log("form constructor"),this.errors=new o,this.originalData=t,this.hasChanges=!1,this.preventNavigation=r;var a=this;for(var s in this.__data={},t)this[s]=t[s],a.__data[s]=a[s],function(e){Object.defineProperty(a,e,{get:function(){return a.__data[e]},set:function(t){a.__data[e]=t,console.log("change: "+e),a.hasChanges||a.onFirstChange()}})}(s)}var t,r,a;return t=e,(r=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var r=this;return console.log("submit"),new Promise((function(a,o){axios[e](t,r.data()).then((function(e){r.onSuccess(e.data),s.a.commit("form/setPreventNavigation",!1),a(e.data)})).catch((function(e){r.onFailure(e.response.data),o(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}},{key:"onFirstChange",value:function(e){console.log("firstchange:"),this.hasChanges=!0,this.preventNavigation&&s.a.commit("form/setPreventNavigation",!0)}},{key:"resetChangeListener",value:function(e){console.log("reset"),this.hasChanges=!1,this.preventNavigation&&s.a.commit("form/setPreventNavigation",!1)}}])&&n(t.prototype,r),a&&n(t,a),e}()}}]);