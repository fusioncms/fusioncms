(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{d7LY:function(e,t,s){"use strict";s.r(t);var a={head:{title:function(){return{inner:"Fieldsets"}}},data:function(){return{endpoint:"/datatable/fieldsets"}},methods:{destroy:function(e){axios.delete("/api/fieldsets/"+e).then((function(e){toast("Fieldset successfully deleted.","success"),proton().$emit("refresh-datatable-fieldsets")}))}}},n=s("KHd+"),d=Object(n.a)(a,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("portal",{attrs:{to:"title"}},[s("app-title",{attrs:{icon:"list"}},[e._v("Fieldsets")])],1),e._v(" "),s("portal",{attrs:{to:"actions"}},[s("router-link",{staticClass:"button",attrs:{to:{name:"fieldsets.create"}}},[e._v("Create Fieldset")])],1),e._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"content-container"},[s("p-table",{key:"fieldsets_table",attrs:{endpoint:e.endpoint,id:"fieldsets","sort-by":"name","primary-key":"handle"},scopedSlots:e._u([{key:"name",fn:function(t){return[s("router-link",{attrs:{to:{name:"fieldsets.edit",params:{fieldset:t.record.id}}}},[e._v(e._s(t.record.name))])]}},{key:"handle",fn:function(t){return[s("code",[e._v(e._s(t.record.handle))])]}},{key:"actions",fn:function(t){return[s("p-actions",{key:"fieldset_"+t.record.id+"_actions",attrs:{id:"fieldset_"+t.record.id+"_actions"}},[s("p-dropdown-link",{attrs:{to:{name:"fieldsets.edit",params:{fieldset:t.record.id}}}},[e._v("Edit")]),e._v(" "),s("p-dropdown-link",{directives:[{name:"modal",rawName:"v-modal:delete-fieldset",value:t.record,expression:"table.record",arg:"delete-fieldset"}],attrs:{classes:"link--danger"},on:{click:function(e){e.preventDefault()}}},[e._v("\n                            Delete\n                        ")])],1)]}}])})],1)]),e._v(" "),s("portal",{attrs:{to:"modals"}},[s("p-modal",{key:"delete_fieldset",attrs:{name:"delete-fieldset",title:"Delete Fieldset"},scopedSlots:e._u([{key:"footer",fn:function(t){return[s("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-fieldset",arg:"delete-fieldset"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(s){return e.destroy(t.data.id)}}},[e._v("Delete")]),e._v(" "),s("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-fieldset",arg:"delete-fieldset"}]},[e._v("Cancel")])]}}])},[s("p",[e._v("Are you sure you want to permenantly delete this fieldset?")])])],1)],1)}),[],!1,null,null,null);t.default=d.exports}}]);