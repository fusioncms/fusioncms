(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{Ayh0:function(a,e,t){"use strict";t.r(e);var i=t("uYI7"),r=t("ke3Z"),n=t("dhqo"),s=t.n(n),d=t("5fFP"),o={head:{title:function(){return{inner:this.form.name||"Loading..."}}},data:function(){return{id:null,parent_id:"",fieldsets:[],matrices:[],form:new r.a({parent_id:0,name:"",handle:"",description:"",type:"collection",fieldset:null,reference_singular:"",reference_plural:"",sidebar:"1",quicklink:"1",icon:"",show_name_field:!0,name_label:"",name_format:"",route:"",template:"",categorizable:"1",creditable:"1",publishable:"1",revision_control:"1",seoable:"1",status:"1"},!0)}},components:{"shared-form":i.a},methods:{submit:function(){var a=this;""==this.form.reference_singular&&(this.form.reference_singular=s.a.singular(this.form.name)),""==this.form.reference_plural&&(this.form.reference_plural=s()(this.form.name)),this.form.patch("/api/matrices/"+this.id).then((function(e){d.a.dispatch("navigation/fetchAdminNavigation"),toast("Matrix successfully updated","success"),a.$router.push("/matrices")})).catch((function(a){toast(a.response.data.message,"failed")}))}},beforeRouteEnter:function(a,e,t){axios.all([axios.get("/api/matrices/"+a.params.matrix),axios.get("/api/fieldsets"),axios.get("/api/matrices")]).then(axios.spread((function(a,e,i){t((function(t){t.fieldsets=_.map(e.data.data,(function(a){return{label:a.name,value:a.id}})),t.fieldsets.unshift({label:"None",value:null}),t.matrices=_.map(i.data.data,(function(a){return{label:a.name,value:a.id}})),t.matrices.unshift({label:"None",value:0}),_.remove(t.matrices,(function(e){return e.label==a.data.data.name})),t.id=a.data.data.id,t.form.parent_id=a.data.data.parent_id,t.form.name=a.data.data.name,t.form.handle=a.data.data.handle,t.form.description=a.data.data.description,t.form.type=a.data.data.type,t.form.fieldset=a.data.data.fieldset&&a.data.data.fieldset.id?a.data.data.fieldset.id:null,t.form.reference_singular=a.data.data.reference_singular,t.form.reference_plural=a.data.data.reference_plural,t.form.sidebar=a.data.data.sidebar?"1":"0",t.form.quicklink=a.data.data.quicklink?"1":"0",t.form.icon=a.data.data.icon,t.form.show_name_field=a.data.data.show_name_field,t.form.name_label=a.data.data.name_label,t.form.name_format=a.data.data.name_format,t.form.route=a.data.data.route,t.form.template=a.data.data.template,t.form.revision_control=a.data.data.revision_control?"1":"0",t.form.categorizable=a.data.data.categorizable?"1":"0",t.form.creditable=a.data.data.creditable?"1":"0",t.form.publishable=a.data.data.publishable?"1":"0",t.form.seoable=a.data.data.seoable?"1":"0",t.form.status=a.data.data.status?"1":"0",t.$emit("updateHead"),t.form.resetChangeListener()}))}))).catch((function(a){t("/matrices"),toast("The requested matrix could not be found","warning")}))}},l=t("KHd+"),f=Object(l.a)(o,(function(){var a=this.$createElement,e=this._self._c||a;return e("div",[e("portal",{attrs:{to:"title"}},[e("app-title",{attrs:{icon:"hashtag"}},[this._v("Edit Matrix")])],1),this._v(" "),e("shared-form",{attrs:{id:this.id,form:this.form,submit:this.submit,fieldsets:this.fieldsets,matrices:this.matrices}})],1)}),[],!1,null,null,null);e.default=f.exports}}]);