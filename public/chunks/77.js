(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{zN65:function(e,t,a){"use strict";a.r(t);var i=a("dhqo"),r=a.n(i),s=a("5fFP"),n=a("ke3Z"),l={head:{title:function(){return{inner:"Create a Matrix"}}},data:function(){return{fieldsets:[],matrices:[],form:new n.a({name:"",parent_id:0,handle:"",description:"",type:"collection",fieldset:null,reference_singular:"",reference_plural:"",sidebar:"1",quicklink:"1",icon:"",show_name_field:!0,name_label:"",name_format:"",route:"",template:"",categorizable:"1",creditable:"1",publishable:"1",revision_control:"1",seoable:"1",status:"1"},!0)}},components:{"shared-form":a("uYI7").a},methods:{submit:function(){var e=this;""==this.form.reference_singular&&(this.form.reference_singular=r.a.singular(this.form.name)),""==this.form.reference_plural&&(this.form.reference_plural=r()(this.form.name)),this.form.post("/api/matrices").then((function(t){s.a.dispatch("navigation/fetchAdminNavigation"),toast("Matrix successfully created","success"),e.$router.push("/matrices")})).catch((function(e){toast(e.message,"failed")}))}},beforeRouteEnter:function(e,t,a){axios.all([axios.get("/api/fieldsets"),axios.get("/api/matrices")]).then(axios.spread((function(e,t){a((function(a){a.fieldsets=_.map(e.data.data,(function(e){return{label:e.name,value:e.id}})),a.fieldsets.unshift({label:"None",value:null}),a.matrices=_.map(t.data.data,(function(e){return{label:e.name,value:e.id}})),a.matrices.unshift({label:"None",value:0}),a.form.resetChangeListener()}))})))}},o=a("KHd+"),c=Object(o.a)(l,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("portal",{attrs:{to:"title"}},[t("app-title",{attrs:{icon:"chart-network"}},[this._v("Create Matrix")])],1),this._v(" "),t("shared-form",{attrs:{form:this.form,submit:this.submit,fieldsets:this.fieldsets,matrices:this.matrices}})],1)}),[],!1,null,null,null);t.default=c.exports}}]);