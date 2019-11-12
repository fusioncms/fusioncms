(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Byip:function(e,t,r){"use strict";r.r(t);var a=r("ke3Z"),o=r("5fFP"),s={data:function(){return{fieldsets:[],creatingFieldset:!1,form:new a.a({name:"",handle:"",description:"",fieldset:null,sidebar:"1",icon:"",route:"",template:"",status:"1"})}},methods:{submit:function(){var e=this;this.form.post("/api/taxonomies").then((function(t){o.a.dispatch("navigation/fetchAdminNavigation"),toast("Taxonomy successfully created","success"),e.$router.push("/taxonomies")})).catch((function(e){toast(e.message,"failed")}))}},beforeRouteEnter:function(e,t,r){axios.all([axios.get("/api/fieldsets")]).then(axios.spread((function(e){r((function(t){t.fieldsets=_.map(e.data.data,(function(e){return{label:e.name,value:e.id}})),t.fieldsets.unshift({label:"None",value:null})}))})))}},i=r("KHd+"),n=Object(i.a)(s,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("portal",{attrs:{to:"title"}},[r("app-title",{attrs:{icon:"sitemap"}},[e._v("Create Taxonomy")])],1),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col w-full"},[r("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[r("p-card",[r("div",{staticClass:"row"},[r("div",{staticClass:"col xxl:text-right w-full xxl:w-1/3"},[r("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[r("h3",[e._v("General")]),e._v(" "),r("p",{staticClass:"text-sm"},[e._v("What will this taxonomy be called and what will it organize?")])])]),e._v(" "),r("div",{staticClass:"col w-full xxl:w-2/3"},[r("p-input",{attrs:{name:"name",label:"Name",help:"What this taxonomy will be called.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),r("p-slug",{attrs:{name:"handle",label:"Handle",help:"A developer-friendly variant of the taxonomy's name.",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}}),e._v(" "),r("p-input",{attrs:{name:"description",label:"Description",help:"Give a short description of what this taxonomy will organize and store.",autocomplete:"off",required:"","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}}),e._v(" "),r("div",{staticClass:"flex"},[e.creatingFieldset?r("p-input",{staticClass:"flex-grow",attrs:{name:"fieldset",label:"Fieldset",help:"What fieldset would you like to create? Don't forget to configure it afterwards.","has-error":e.form.errors.has("fieldset"),"error-message":e.form.errors.get("fieldset")},model:{value:e.form.fieldset,callback:function(t){e.$set(e.form,"fieldset",t)},expression:"form.fieldset"}}):r("p-select",{staticClass:"flex-grow",attrs:{name:"fieldset",label:"Fieldset",help:"What fieldset would you like to attach?",options:e.fieldsets,"has-error":e.form.errors.has("fieldset"),"error-message":e.form.errors.get("fieldset")},model:{value:e.form.fieldset,callback:function(t){e.$set(e.form,"fieldset",t)},expression:"form.fieldset"}}),e._v(" "),r("div",{staticClass:"form__group ml-2"},[r("label",{staticClass:"form__label",attrs:{for:"create_fieldset"}},[e._v(" ")]),e._v(" "),e.creatingFieldset?e._e():r("p-button",{staticClass:"form__select-button font-mono",on:{click:function(t){e.creatingFieldset=!0}}},[e._v("+")]),e._v(" "),e.creatingFieldset?r("div",{staticClass:"flex"},[r("p-button",{staticClass:"form__select-button mr-1",attrs:{theme:"primary"},on:{click:function(e){e.preventDefault()}}},[e._v("Create")]),e._v(" "),r("p-button",{staticClass:"form__select-button",on:{click:function(t){e.creatingFieldset=!1}}},[e._v("Cancel")])],1):e._e()],1)],1)],1)]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col xxl:text-right w-full xxl:w-1/3"},[r("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[r("h3",[e._v("Customize")]),e._v(" "),r("p",{staticClass:"text-sm"},[e._v("Customize how your taxonomy will be found and displayed within the admin control panel.")])])]),e._v(" "),r("div",{staticClass:"col w-full xxl:w-2/3"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col w-full xxl:w-1/2"},[r("p-select",{attrs:{name:"sidebar",label:"Show in Sidebar",help:"Do you want this taxonomy to be shown in the sidebar?",options:[{label:"Show",value:"1"},{label:"Hide",value:"0"}],"has-error":e.form.errors.has("sidebar"),"error-message":e.form.errors.get("sidebar")},model:{value:e.form.sidebar,callback:function(t){e.$set(e.form,"sidebar",t)},expression:"form.sidebar"}})],1),e._v(" "),r("div",{staticClass:"col w-full xxl:w-1/2"},[r("icon-picker",{attrs:{name:"icon",label:"Icon",placeholder:"Search icons...",help:"Choose an icon that best represents your taxonomy.","has-error":e.form.errors.has("icon"),"error-message":e.form.errors.get("icon"),required:""},model:{value:e.form.icon,callback:function(t){e.$set(e.form,"icon",t)},expression:"form.icon"}})],1)])])]),e._v(" "),r("hr"),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col xxl:text-right w-full xxl:w-1/3"},[r("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[r("h3",[e._v("Route")]),e._v(" "),r("p",{staticClass:"text-sm"},[e._v("If your taxonomy will be accessible from the frontend, you may define its route and template here.")])])]),e._v(" "),r("div",{staticClass:"col w-full xxl:w-2/3"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col w-full xxl:w-1/2"},[r("p-input",{attrs:{name:"route",label:"Route",help:"When the URI matches this pattern...",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("route"),"error-message":e.form.errors.get("route")},model:{value:e.form.route,callback:function(t){e.$set(e.form,"route",t)},expression:"form.route"}})],1),e._v(" "),r("div",{staticClass:"col w-full xxl:w-1/2"},[r("p-input",{attrs:{name:"template",label:"Template",help:"Render this template",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("template"),"error-message":e.form.errors.get("template")},model:{value:e.form.template,callback:function(t){e.$set(e.form,"template",t)},expression:"form.template"}})],1)])])])]),e._v(" "),r("portal",{attrs:{to:"actions"}},[r("router-link",{staticClass:"button mr-3",attrs:{to:{name:"taxonomies"}}},[e._v("Go Back")]),e._v(" "),r("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save Taxonomy")])],1)],1)])])],1)}),[],!1,null,null,null);t.default=n.exports},ke3Z:function(e,t,r){"use strict";function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,r,o;return t=e,(r=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&a(t.prototype,r),o&&a(t,o),e}(),s=r("5fFP");function i(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}r.d(t,"a",(function(){return n}));var n=function(){function e(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var a in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors=new o,this.originalData=t,this.hasChanges=!1,this.preventNavigation=r,t)this[a]=t[a]}var t,r,a;return t=e,(r=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var r=this;return new Promise((function(a,o){axios[e](t,r.data()).then((function(e){r.onSuccess(e.data),s.a.commit("form/setPreventNavigation",!1),a(e.data)})).catch((function(e){r.onFailure(e.response.data),o(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}},{key:"onFirstChange",value:function(e){this.hasChanges=!0,this.preventNavigation&&s.a.commit("form/setPreventNavigation",!0)}}])&&i(t.prototype,r),a&&i(t,a),e}()}}]);