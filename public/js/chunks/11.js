(window.webpackJsonp=window.webpackJsonp||[]).push([[11,70],{WjD0:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},iQVT:function(e,t,a){"use strict";a.r(t);var n=a("LvDl"),r=a.n(n),o=a("ke3Z"),i={head:{title:function(){return{inner:this.form.name||"Loading..."}}},components:{"markdown-field":a("qt+H").default},data:function(){return{id:null,ready:!1,placeholders:{},form:new o.a({name:"",handle:"",markdown:"",status:"1"},!0)}},methods:{isArray:function(e){return r.a.isArray(e)},addPlaceholder:function(e,t){var a=this.$refs.markdown.codemirror.getDoc();a.getCursor();t?a.replaceSelection("{{ $".concat(t,"->").concat(e," }}"),a.getSelection()):a.replaceSelection("{{ $".concat(e," }}"),a.getSelection())},updateMarkdown:function(e){this.form.markdown=e},submit:function(){var e=this;this.form.patch("/api/mailables/"+this.id).then((function(t){toast("Mailable successfully updated","success"),e.$router.push("/mailables")})).catch((function(e){toast(e.response.data.message,"failed")}))},placeholderOptions:function(e){var t=[];return r.a.each(e,(function(e){t.push({label:e,value:e})})),t}},beforeRouteEnter:function(e,t,a){axios.all([axios.get("/api/mailables/".concat(e.params.mailable))]).then(axios.spread((function(e){a((function(t){t.id=e.data.data.id,t.placeholders=e.data.data.placeholders,t.ready=!0,t.form.name=e.data.data.name,t.form.handle=e.data.data.handle,t.form.markdown=e.data.data.markdown,t.form.resetChangeListener(),t.$emit("updateHead")}))}))).catch((function(e){a("/mailables"),toast("The requested mailable could not be found","warning")}))}},s=a("KHd+"),l=Object(s.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"mail-bulk"}},[e._v("Edit Mailable")])],1),e._v(" "),a("portal",{attrs:{to:"actions"}},[a("router-link",{staticClass:"button mr-3",attrs:{to:{name:"mailables"}}},[e._v("Go Back")]),e._v(" "),a("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save Mailable")])],1),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("p-card",[a("div",{staticClass:"row"},[a("div",{staticClass:"col form-sidebar"},[a("div",{staticClass:"xxl:mr-10"})]),e._v(" "),a("div",{staticClass:"col form-content"},[a("div",{staticClass:"row mb-6"},[a("div",{staticClass:"col w-full xxl:w-1/2 mb-6"},[a("p-input",{attrs:{name:"name",label:"Name",help:"What this mailable will be called.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"col w-full xxl:w-1/2 mb-6"},[a("p-slug",{attrs:{name:"handle",label:"Handle",help:"A developer-friendly variant of the mailable's name.",autocomplete:"off",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}})],1)]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full"},[e.ready?a("markdown-field",{ref:"markdown",attrs:{field:{name:"Content",handle:"markdown"},value:e.form.markdown},on:{input:e.updateMarkdown}}):e._e()],1)])])])])],1)]),e._v(" "),a("div",{staticClass:"side-container"},[a("p-card",[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full"},[a("p-select",{attrs:{name:"status",label:"Status",options:[{label:"Enabled",value:"1"},{label:"Disabled",value:"0"}]},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)])]),e._v(" "),a("p-card",{staticClass:"mt-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full mailable__placeholders"},[a("label",{staticClass:"form__label"},[e._v("Placeholders")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("Below you will find a variety of values you may reference within your template.")]),e._v(" "),e._l(e.placeholders,(function(t,n){return a("div",{key:n},[e.isArray(t)?e._e():a("p-button",{staticClass:"w-full mb-3 text-xs font-mono",on:{click:function(a){return e.addPlaceholder(t)}}},[e._v("$"+e._s(t))]),e._v(" "),a("p-dropdown",[a("div",{staticClass:"font-mono text-sm"},[e._v("$"+e._s(n))]),e._v(" "),a("div",{staticClass:"form__select-arrow"},[a("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])]),e._v(" "),a("template",{slot:"options"},e._l(t,(function(t,r){return a("p-dropdown-item",{key:r,staticClass:"text-xs font-mono",on:{click:function(a){return e.addPlaceholder(t,n)}}},[e._v("\n                                            "+e._s(t)+"\n                                    ")])})),1)],2)],1)}))],2)])])],1)])],1)}),[],!1,null,null,null);t.default=l.exports},ke3Z:function(e,t,a){"use strict";a("WjD0");function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,a,r;return t=e,(a=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&n(t.prototype,a),r&&n(t,r),e}(),o=a("5fFP");function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}a.d(t,"a",(function(){return l}));var l=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i(this,e),this.errors=new r,this.originalData=t,this.hasChanges=!1,this.preventNavigation=a;var n=this;for(var o in this.__data={},t)this[o]=t[o],n.__data[o]=n[o],function(e){Object.defineProperty(n,e,{get:function(){return n.__data[e]},set:function(t){n.__data[e]=t,n.hasChanges||n.onFirstChange()}})}(o)}var t,a,n;return t=e,(a=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var a=this;return new Promise((function(n,r){axios[e](t,a.data()).then((function(e){a.onSuccess(e.data),o.a.commit("form/setPreventNavigation",!1),n(e.data)})).catch((function(e){a.onFailure(e.response.data),r(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}},{key:"onFirstChange",value:function(e){this.hasChanges=!0,this.preventNavigation&&o.a.commit("form/setPreventNavigation",!0)}},{key:"resetChangeListener",value:function(e){this.hasChanges=!1,this.preventNavigation&&o.a.commit("form/setPreventNavigation",!1)}}])&&s(t.prototype,a),n&&s(t,n),e}()},"qt+H":function(e,t,a){"use strict";a.r(t);var n=a("VrN/"),r=a.n(n),o=a("DlQD"),i=a.n(o);a("RKCW"),a("mki7"),a("19Vz");var s={name:"markdown-fieldtype",data:function(){return{codemirror:null}},props:{field:{type:Object,required:!0},value:{required:!1,default:""}},computed:{preview:function(){var e=i.a.lexer(this.value);return i.a.parser(e)}},mounted:function(){var e=this;this.codemirror=r.a.fromTextArea(document.getElementById(this.field.handle),{theme:"fusion",mode:{name:"gfm",highlightFormatting:!0,fencedCodeBlockHighlighting:!0},lineWrapping:!0,viewportMargin:1/0,keyMap:"sublime"}),setTimeout((function(){e.codemirror.refresh()}),1),this.codemirror.on("change",(function(t){e.$emit("input",t.getValue())}))}},l=a("KHd+"),u=Object(l.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"form__group"},[a("p-tabs",[a("p-tab",{attrs:{name:e.field.name}},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{name:e.field.handle,id:e.field.handle,cols:"30",rows:"12",autofocus:""},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}})]),e._v(" "),a("p-tab",{attrs:{name:"Preview"}},[a("div",{domProps:{innerHTML:e._s(e.preview)}})])],1)],1)}),[],!1,null,null,null);t.default=u.exports}}]);