(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{FpJd:function(e,t,a){"use strict";var s={data:function(){return{ready:!1,fieldtype:{}}},props:{id:{type:Number,required:!1,default:0},form:{type:Object,required:!0},submit:{required:!0}},watch:{"form.collect_email_addresses":function(e){this.ready&&(!1===e?(this.form.response_receipt=!1,this.removeIdentifiableEmailField()):this.addIdentifiableEmailField())}},methods:{addIdentifiableEmailField:function(){var e=this.form.fieldset.sections[0].handle;this.$bus.$emit("add-field-"+e,{fieldtype:this.fieldtype,name:"E-mail",handle:"identifiable_email_address",settings:{type:"email"}})},removeIdentifiableEmailField:function(){var e=this.form.fieldset.sections[0].handle;this.$bus.$emit("remove-field-"+e,"identifiable_email_address")}},created:function(){axios.all([axios.get("/api/fieldtypes/input")]).then(axios.spread(function(e){this.fieldtype=e.data,this.ready=!0}.bind(this)))}},r=a("KHd+"),o=Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("p-tabs",{attrs:{replace:""}},[a("p-tab",{attrs:{name:"Settings"}},[a("div",{staticClass:"row"},[a("div",{staticClass:"side-container"},[a("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[a("h3",[e._v("General")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("What will this form be called and what will it collect?")])])]),e._v(" "),a("div",{staticClass:"content-container"},[a("p-input",{attrs:{name:"name",label:"Name",help:"What this form will be called.",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),a("p-slug",{attrs:{name:"handle",label:"Handle",help:"A developer-friendly variant of the form's name.",autocomplete:"off",monospaced:"",required:"",delimiter:"_",watch:e.form.name,"has-error":e.form.errors.has("handle"),"error-message":e.form.errors.get("handle")},model:{value:e.form.handle,callback:function(t){e.$set(e.form,"handle",t)},expression:"form.handle"}}),e._v(" "),a("p-input",{attrs:{name:"description",label:"Description",help:"Give a short description of what this form will collect.",autocomplete:"off",required:"","has-error":e.form.errors.has("description"),"error-message":e.form.errors.get("description")},model:{value:e.form.description,callback:function(t){e.$set(e.form,"description",t)},expression:"form.description"}})],1)]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"side-container"},[a("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[a("h3",[e._v("Privacy")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("Customize what identifiable information is collected by this form.")])])]),e._v(" "),a("div",{staticClass:"content-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full"},[a("p-checkbox-group",{staticClass:"mb-0",attrs:{inline:""}},[a("p-checkbox",{attrs:{name:"collect_email_addresses",id:"collect_email_addresses"},model:{value:e.form.collect_email_addresses,callback:function(t){e.$set(e.form,"collect_email_addresses",t)},expression:"form.collect_email_addresses"}},[e._v("Collect email addresses")]),e._v(" "),a("p-checkbox",{attrs:{name:"collect_ip_addresses",id:"collect_ip_addresses"},model:{value:e.form.collect_ip_addresses,callback:function(t){e.$set(e.form,"collect_ip_addresses",t)},expression:"form.collect_ip_addresses"}},[e._v("Collect IP addresses")])],1),e._v(" "),a("p-checkbox-group",{staticClass:"-mt-3",attrs:{inline:"",help:"Respondents will receive a copy of their submission."}},[a("p-checkbox",{attrs:{name:"response_receipt",id:"response_receipt",disabled:!e.form.collect_email_addresses},model:{value:e.form.response_receipt,callback:function(t){e.$set(e.form,"response_receipt",t)},expression:"form.response_receipt"}},[e._v("Response receipts")])],1)],1)])])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"side-container"},[a("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[a("h3",[e._v("Spam")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("Configure methods of spam prevention.")])])]),e._v(" "),a("div",{staticClass:"content-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full"},[a("p-checkbox-group",{attrs:{help:"Be sure to enter your site key and secret key in settings."}},[a("p-checkbox",{attrs:{name:"enable_recaptcha",id:"enable_recaptcha"},model:{value:e.form.enable_recaptcha,callback:function(t){e.$set(e.form,"enable_recaptcha",t)},expression:"form.enable_recaptcha"}},[e._v("Enable Google reCAPTCHA")])],1),e._v(" "),a("p-checkbox-group",{attrs:{help:"A honeypot is a great and native alternative to Google reCAPTCHA. Both options can be safely enabled at the same time."}},[a("p-checkbox",{attrs:{name:"enable_honeypot",id:"enable_honeypot"},model:{value:e.form.enable_honeypot,callback:function(t){e.$set(e.form,"enable_honeypot",t)},expression:"form.enable_honeypot"}},[e._v("Enable Honeypot")])],1)],1)])])]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"side-container"},[a("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[a("h3",[e._v("E-mail")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("Configure who should be notified via email.")])])]),e._v(" "),a("div",{staticClass:"content-container"},[a("p-textarea",{attrs:{name:"send_to",label:"Send notifications to...",help:"List emails as a comma separated list.",placeholder:"marie.c@example.com, nikola.t@example.com","has-error":e.form.errors.has("send_to"),"error-message":e.form.errors.get("send_to")},model:{value:e.form.send_to,callback:function(t){e.$set(e.form,"send_to",t)},expression:"form.send_to"}}),e._v(" "),a("p-input",{attrs:{name:"reply_to",label:"Reply to...",help:"Replies to the confirmation email will be sent to this e-mail. By default this will reference the default email in system settings.",autocomplete:"off","has-error":e.form.errors.has("reply_to"),"error-message":e.form.errors.get("reply_to")},model:{value:e.form.reply_to,callback:function(t){e.$set(e.form,"reply_to",t)},expression:"form.reply_to"}})],1)]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"side-container"},[a("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[a("h3",[e._v("Confirmation")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("Customize the way users receive confirmation that their submissions were successful.")])])]),e._v(" "),a("div",{staticClass:"content-container"},[a("p-radio-group",{attrs:{inline:"",label:"After submitting the form...","has-error":e.form.errors.has("redirect_on_submission"),"error-message":e.form.errors.get("redirect_on_submission")}},[a("p-radio",{attrs:{id:"redirect_on_submission_false",name:"redirect_on_submission","native-value":!1},model:{value:e.form.redirect_on_submission,callback:function(t){e.$set(e.form,"redirect_on_submission",t)},expression:"form.redirect_on_submission"}},[e._v("Redirect to default confirmation page...")]),e._v(" "),a("p-radio",{attrs:{id:"redirect_on_submission_true",name:"redirect_on_submission","native-value":!0},model:{value:e.form.redirect_on_submission,callback:function(t){e.$set(e.form,"redirect_on_submission",t)},expression:"form.redirect_on_submission"}},[e._v("Redirect to custom page...")])],1),e._v(" "),!1===e.form.redirect_on_submission?a("p-input",{attrs:{name:"confirmation_message",label:"Message",help:"This message will be displayed on the confirmation page.",autocomplete:"off","has-error":e.form.errors.has("confirmation_message"),"error-message":e.form.errors.get("confirmation_message"),placeholder:"Thank you! We'll be in touch soon."},model:{value:e.form.confirmation_message,callback:function(t){e.$set(e.form,"confirmation_message",t)},expression:"form.confirmation_message"}}):e._e(),e._v(" "),!0===e.form.redirect_on_submission?a("p-input",{attrs:{name:"redirect_url",label:"URL",help:"The URL to redirect users to after submitting the form.",autocomplete:"off","has-error":e.form.errors.has("redirect_url"),"error-message":e.form.errors.get("redirect_url")},model:{value:e.form.redirect_url,callback:function(t){e.$set(e.form,"redirect_url",t)},expression:"form.redirect_url"}}):e._e()],1)]),e._v(" "),a("hr"),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"side-container"},[a("div",{staticClass:"xxl:mr-10 xxl:mb-0 mb-6"},[a("h3",[e._v("Templates")]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v("Customize the templates used to render your form and thank users for submissions.")])])]),e._v(" "),a("div",{staticClass:"content-container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full xxl:w-1/2"},[a("p-input",{attrs:{name:"form_template",label:"Form Template",help:"What template is responsible for rendering this form?",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("form_template"),"error-message":e.form.errors.get("form_template")},model:{value:e.form.form_template,callback:function(t){e.$set(e.form,"form_template",t)},expression:"form.form_template"}})],1),e._v(" "),a("div",{staticClass:"col w-full xxl:w-1/2"},[a("p-input",{attrs:{name:"thankyou_template",label:"Thank You Template",help:"What template is reponsible for thanking respondents?",autocomplete:"off",monospaced:"","has-error":e.form.errors.has("thankyou_template"),"error-message":e.form.errors.get("thankyou_template")},model:{value:e.form.thankyou_template,callback:function(t){e.$set(e.form,"thankyou_template",t)},expression:"form.thankyou_template"}})],1)])])])]),e._v(" "),a("p-tab",{attrs:{name:"Fields"}},[a("section-builder",{model:{value:e.form.fieldset.sections,callback:function(t){e.$set(e.form.fieldset,"sections",t)},expression:"form.fieldset.sections"}})],1)],1)],1)]),e._v(" "),a("div",{staticClass:"side-container"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("p-card",[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full"},[a("p-select",{attrs:{name:"status",label:"Status",options:[{label:"Enabled",value:!0},{label:"Disabled",value:!1}]},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)]),e._v(" "),a("portal",{attrs:{to:"actions"}},[a("router-link",{staticClass:"button mr-3",attrs:{to:{name:"forms"}}},[e._v("Go Back")]),e._v(" "),a("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save Form")])],1)],1)],1)])])}),[],!1,null,null,null);t.a=o.exports},STDx:function(e,t,a){"use strict";a.r(t);var s=a("ke3Z"),r={data:function(){return{id:null,fieldset:null,form:new s.a({name:"",handle:"",description:"",fieldset:{},collect_email_addresses:!1,collect_ip_addresses:!1,response_receipt:!1,message:"",redirect_on_submission:!1,redirect_url:"",enable_recaptcha:!1,enable_honeypot:!1,send_to:"",reply_to:"",form_template:"",thankyou_template:"",status:!0})}},components:{"shared-form":a("FpJd").a},methods:{submit:function(){var e=this,t={};t.sections=this.form.fieldset.sections,axios.post("/api/fieldsets/".concat(this.form.fieldset.id,"/sections"),t).then((function(t){e.form.patch("/api/forms/"+e.id).then((function(t){toast("Form successfully saved","success"),e.$router.push("/forms")})).catch((function(e){toast(e.message,"failed")}))}))}},beforeRouteEnter:function(e,t,a){axios.all([axios.get("/api/forms/"+e.params.form)]).then(axios.spread((function(e){a((function(t){t.id=e.data.data.id,t.form.name=e.data.data.name,t.form.handle=e.data.data.handle,t.form.description=e.data.data.description,t.form.fieldset=e.data.data.fieldset,t.form.collect_email_addresses=e.data.data.collect_email_addresses,t.form.collect_ip_addresses=e.data.data.collect_ip_addresses,t.form.response_receipt=e.data.data.response_receipt,t.form.message=e.data.data.message,t.form.redirect_on_submission=e.data.data.redirect_on_submission,t.form.redirect_url=e.data.data.redirect_url,t.form.enable_recaptcha=e.data.data.enable_recaptcha,t.form.enable_honeypot=e.data.data.enable_honeypot,t.form.send_to=e.data.data.send_to,t.form.reply_to=e.data.data.reply_to,t.form.form_template=e.data.data.form_template,t.form.thankyou_template=e.data.data.thankyou_template,t.form.status=e.data.data.status}))})))}},o=a("KHd+"),i=Object(o.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("portal",{attrs:{to:"title"}},[t("app-title",{attrs:{icon:"paper-plane"}},[this._v("Edit Form")])],1),this._v(" "),t("shared-form",{attrs:{form:this.form,submit:this.submit,id:this.id,fieldset:this.fieldset}})],1)}),[],!1,null,null,null);t.default=i.exports},WjD0:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},ke3Z:function(e,t,a){"use strict";a("WjD0");function s(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,a,r;return t=e,(a=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&s(t.prototype,a),r&&s(t,r),e}(),o=a("5fFP");function i(e,t){for(var a=0;a<t.length;a++){var s=t[a];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}a.d(t,"a",(function(){return n}));var n=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors=new r,this.originalData=t,this.hasChanges=!1,this.preventNavigation=a;var s=this;for(var o in this.__data={},t)this[o]=t[o],s.__data[o]=s[o],function(e){Object.defineProperty(s,e,{get:function(){return s.__data[e]},set:function(t){s.__data[e]=t,s.hasChanges||s.onFirstChange()}})}(o)}var t,a,s;return t=e,(a=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var a=this;return new Promise((function(s,r){axios[e](t,a.data()).then((function(e){a.onSuccess(e.data),o.a.commit("form/setPreventNavigation",!1),s(e.data)})).catch((function(e){a.onFailure(e.response.data),r(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}},{key:"onFirstChange",value:function(e){this.hasChanges=!0,this.preventNavigation&&o.a.commit("form/setPreventNavigation",!0)}}])&&i(t.prototype,a),s&&i(t,s),e}()}}]);