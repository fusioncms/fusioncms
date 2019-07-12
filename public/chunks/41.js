(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{OEMf:function(s,t,r){"use strict";r.r(t);var e={data:function(){return{roles:null,errors:{},name:"",email:"",role:null,password:"",passwordConfirmation:"",status:"1"}},computed:{roleOptions:function(){var s=_.filter(this.roles,function(s){return"guest"!==s.handle});return s=_.map(s,function(s){return{label:s.name,value:s.slug}})}},methods:{hasError:function(s){return void 0!==this.errors[s]},getError:function(s){return this.hasError(s)?this.errors[s][0]:""},submit:function(){var s=this;axios.post("/api/users",{name:this.name,email:this.email,password:this.password,password_confirmation:this.passwordConfirmation,role:this.role,status:this.status}).then(function(t){toast("User successfully created","success"),s.$router.push("/users")}).catch(function(t){toast(t.response.data.message,"failed"),s.errors=t.response.data.errors})}},beforeRouteEnter:function(s,t,r){axios.all([axios.get("/api/roles")]).then(axios.spread(function(s,t){r(function(t){t.roles=s.data.data})}))}},a=r("KHd+"),o=Object(a.a)(e,function(){var s=this,t=s.$createElement,r=s._self._c||t;return r("div",[r("portal",{attrs:{to:"title"}},[r("app-title",{attrs:{icon:"user-alt"}},[s._v("Create User")])],1),s._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"content-container"},[r("form",{on:{submit:function(t){return t.preventDefault(),s.submit(t)}}},[r("p-card",[r("div",{staticClass:"row"},[r("div",{staticClass:"col xl:text-right w-full xl:w-1/3"},[r("div",{staticClass:"xl:mr-10"},[r("h3",[s._v("Personal")]),s._v(" "),r("p",{staticClass:"text-sm"},[s._v("Information to identify the user both within the CMS and by means of login.")])])]),s._v(" "),r("div",{staticClass:"col w-full xl:w-2/3"},[r("p-input",{attrs:{name:"name",label:"First Name",autocomplete:"off","has-error":s.hasError("name"),"error-message":s.getError("name"),autofocus:"",required:""},model:{value:s.name,callback:function(t){s.name=t},expression:"name"}}),s._v(" "),r("p-input",{attrs:{type:"email",name:"email",label:"E-mail",autocomplete:"off","has-error":s.hasError("email"),"error-message":s.getError("email"),required:""},model:{value:s.email,callback:function(t){s.email=t},expression:"email"}})],1)]),s._v(" "),r("hr"),s._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col xl:text-right w-full xl:w-1/3"},[r("div",{staticClass:"xl:mr-10"},[r("h3",[s._v("Security")]),s._v(" "),r("p",{staticClass:"text-sm"},[s._v("Secure the account by specifying the role and setting a strong password.")])])]),s._v(" "),r("div",{staticClass:"col w-full xl:w-2/3"},[r("p-select",{attrs:{name:"role",label:"Role",options:s.roleOptions,autocomplete:"off",value:"user","has-error":s.hasError("role"),"error-message":s.getError("role"),required:""},model:{value:s.role,callback:function(t){s.role=t},expression:"role"}}),s._v(" "),r("p-input",{attrs:{type:"password",name:"password",label:"Password",autocomplete:"new-password","has-error":s.hasError("password"),"error-message":s.getError("password"),required:""},model:{value:s.password,callback:function(t){s.password=t},expression:"password"}}),s._v(" "),r("p-input",{attrs:{type:"password",name:"password_confirmation",label:"Confirm Password",autocomplete:"new-password","has-error":s.hasError("password_confirmation"),"error-message":s.getError("password_confirmation"),required:""},model:{value:s.passwordConfirmation,callback:function(t){s.passwordConfirmation=t},expression:"passwordConfirmation"}})],1)])])],1)]),s._v(" "),r("div",{staticClass:"side-container"},[r("form",{on:{submit:function(t){return t.preventDefault(),s.submit(t)}}},[r("p-card",[r("div",{staticClass:"row"},[r("div",{staticClass:"col w-full"},[r("p-select",{attrs:{name:"status",label:"Status",options:[{label:"Enabled",value:"1"},{label:"Disabled",value:"0"}]},model:{value:s.status,callback:function(t){s.status=t},expression:"status"}})],1)]),s._v(" "),r("portal",{attrs:{to:"actions"}},[r("router-link",{staticClass:"button mr-3",attrs:{to:{name:"users"}}},[s._v("Cancel")]),s._v(" "),r("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),s.submit(t)}}},[s._v("Save User")])],1)],1)],1)])])],1)},[],!1,null,null,null);t.default=o.exports}}]);