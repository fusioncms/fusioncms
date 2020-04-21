(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{UzRp:function(e,t,n){"use strict";n.r(t),n.d(t,"getNode",(function(){return r}));var s=n("ke3Z"),a={props:{node:{type:Object},nodes:{type:Array,required:!0},menu:{type:Object,required:!0},form:{type:Object,required:!0},submit:{required:!0}},computed:{sections:function(){var e=[],t=[];return this.menu.fieldset&&(e=_.filter(this.menu.fieldset.sections,(function(e){return"body"==e.placement})),t=_.filter(this.menu.fieldset.sections,(function(e){return"sidebar"==e.placement}))),{body:e,sidebar:t}},fields:function(){var e=[],t=[];return this.menu.fieldset&&(e=_.filter(this.menu.fieldset.sections,(function(e){return"body"==e.placement})),e=_.flatMap(e,(function(e){return e.fields})),t=_.filter(this.menu.fieldset.sections,(function(e){return"sidebar"==e.placement})),t=_.flatMap(t,(function(e){return e.fields}))),{body:e,sidebar:t}}}},o=n("KHd+");function r(e,t,n){axios.all([axios.get("/api/menus/"+e+"/nodes/"+t),axios.get("/api/menus/"+e)]).then(axios.spread((function(e,t){e=e.data.data,t=t.data.data;var s={name:e.name,url:e.url,new_window:e.new_window,parent_id:e.parent_id,status:e.status};t.fieldset&&_.forEach(t.fieldset.sections,(function(t){_.forEach(t.fields,(function(t){s[t.handle]=e[t.handle]}))})),n(null,e,t,s)})))}var i={head:{title:function(){return{inner:this.node.name||"Loading..."}}},data:function(){return{menu:{},node:{},nodes:[],form:new s.a({name:"",url:"",new_window:!1,parent_id:0,status:!1},!0)}},components:{"shared-form":Object(o.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form-container",{scopedSlots:e._u([{key:"sidebar",fn:function(){return[n("div",{staticClass:"card"},[n("div",{staticClass:"card__body"},[n("p-toggle",{attrs:{name:"status",label:"Status","true-value":1,"false-value":0},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}}),e._v(" "),n("p-select",{attrs:{name:"new_window",label:"Open link where",help:"Determine where the link should open.",options:[{label:"New Window",value:1},{label:"Same Window",value:0}]},model:{value:e.form.new_window,callback:function(t){e.$set(e.form,"new_window",t)},expression:"form.new_window"}})],1)]),e._v(" "),e._l(e.sections.sidebar,(function(t){return n("div",{key:t.handle,staticClass:"card"},[n("div",{staticClass:"card__header"},[n("h3",{staticClass:"card__title"},[e._v(e._s(t.name))]),e._v(" "),t.description?n("p",{staticClass:"card__subtitle"},[e._v(e._s(t.description))]):e._e()]),e._v(" "),n("div",{staticClass:"card__body"},e._l(t.fields,(function(t){return n(t.type.id+"-fieldtype",{key:t.handle,tag:"component",attrs:{field:t},model:{value:e.form[t.handle],callback:function(n){e.$set(e.form,t.handle,n)},expression:"form[field.handle]"}})})),1)])})),e._v(" "),e.node?n("p-definition-list",[n("p-definition",{attrs:{name:"Status"}},[n("fa-icon",{staticClass:"fa-fw text-xs",class:{"text-success-500":e.node.status,"text-danger-500":!e.node.status},attrs:{icon:["fas","circle"]}}),e._v(" "+e._s(e.node.status?"Enabled":"Disabled")+"\n                ")],1),e._v(" "),n("p-definition",{attrs:{name:"Created At"}},[e._v("\n                    "+e._s(e.$moment(e.node.created_at).format("Y-MM-DD, hh:mm a"))+"\n                ")]),e._v(" "),n("p-definition",{attrs:{name:"Updated At"}},[e._v("\n                    "+e._s(e.$moment(e.node.updated_at).format("Y-MM-DD, hh:mm a"))+"\n                ")])],1):e._e()]},proxy:!0}])},[n("portal",{attrs:{to:"actions"}},[n("div",{staticClass:"buttons"},[e.menu.id?n("router-link",{staticClass:"button",attrs:{to:{name:"menu.nodes",params:{menu:e.menu.id}}}},[e._v("Go Back")]):e._e(),e._v(" "),n("button",{staticClass:"button button--primary",class:{"button--disabled":!e.form.hasChanges},attrs:{type:"submit",disabled:!e.form.hasChanges},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save")])],1)]),e._v(" "),n("div",{staticClass:"card"},[n("div",{staticClass:"card__body"},[n("p-title",{attrs:{name:"name",autocomplete:"off",autofocus:"",required:"","has-error":e.form.errors.has("name"),"error-message":e.form.errors.get("name")},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),n("p-input",{attrs:{name:"url",label:"URL",help:"The URL of the node.",autocomplete:"off",required:"","has-error":e.form.errors.has("url"),"error-message":e.form.errors.get("url")},model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}}),e._v(" "),e.fields.body.length>0?n("p-tabs",e._l(e.sections.body,(function(t){return n("p-tab",{key:t.handle,attrs:{name:t.name}},e._l(t.fields,(function(t){return n("div",{key:t.handle,staticClass:"form__group"},[n(t.type.id+"-fieldtype",{tag:"component",attrs:{field:t},model:{value:e.form[t.handle],callback:function(n){e.$set(e.form,t.handle,n)},expression:"form[field.handle]"}})],1)})),0)})),1):e._e()],1)])],1)}),[],!1,null,null,null).exports},methods:{submit:function(){var e=this;this.form.patch("/api/menus/"+this.menu.id+"/nodes/"+this.node.id).then((function(t){toast("Node saved successfully","success"),e.$router.push("/menus/"+e.menu.id+"/nodes")})).catch((function(e){toast(e.response.data.message,"failed")}))}},beforeRouteEnter:function(e,t,n){r(e.params.menu,e.params.node,(function(e,t,a,o){n(e?function(t){t.$router.push("/menus"),toast(e.toString(),"danger")}:function(e){e.menu=a,e.node=t,e.form=new s.a(o,!0),e.nodes=_.map(a.nodes,(function(e){return{label:e.name,value:e.id}})),e.nodes.unshift({label:"None",value:0}),e.$emit("updateHead"),e.$nextTick((function(){e.form.resetChangeListener()}))})}))}},d=Object(o.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("portal",{attrs:{to:"title"}},[t("app-title",{attrs:{icon:"anchor"}},[this._v("Edit Node")])],1),this._v(" "),t("shared-form",{attrs:{form:this.form,submit:this.submit,menu:this.menu,node:this.node,nodes:this.nodes}})],1)}),[],!1,null,null,null);t.default=d.exports}}]);