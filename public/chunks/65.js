(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{d7LY:function(e,t,a){"use strict";a.r(t);var n={data:function(){return{endpoint:"/datatable/fieldsets"}},methods:{destroy:function(e){axios.delete("/api/fieldsets/"+e).then((function(e){toast("Fieldset successfully deleted.","success"),proton().$emit("refresh-datatable-fieldsets")}))}}},s=a("KHd+"),d=Object(s.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"ballot"}},[e._v("Fieldsets")])],1),e._v(" "),a("portal",{attrs:{to:"actions"}},[a("router-link",{staticClass:"button",attrs:{to:{name:"fieldsets.create"}}},[e._v("Create Fieldset")])],1),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("p-datatable",{attrs:{endpoint:e.endpoint,name:"fieldsets","sort-by":"name","per-page":10,"primary-key":"handle"},scopedSlots:e._u([{key:"name",fn:function(t){return[a("router-link",{attrs:{to:{name:"fieldsets.edit",params:{fieldset:t.record.id}}}},[e._v(e._s(t.record.name))])]}},{key:"handle",fn:function(t){return[a("code",[e._v(e._s(t.record.handle))])]}},{key:"actions",fn:function(t){return[a("p-dropdown",{attrs:{right:""}},[a("fa-icon",{attrs:{icon:"bars"}}),e._v(" "),a("template",{slot:"options"},[a("p-dropdown-item",{attrs:{to:{name:"fieldsets.edit",params:{fieldset:t.record.id}}},on:{click:function(e){e.preventDefault()}}},[e._v("Edit")]),e._v(" "),a("p-dropdown-item",{directives:[{name:"modal",rawName:"v-modal:delete-fieldset",value:t.record,expression:"table.record",arg:"delete-fieldset"}],on:{click:function(e){e.preventDefault()}}},[e._v("\n                                Delete\n                            ")])],1)],2)]}}])})],1)]),e._v(" "),a("portal",{attrs:{to:"modals"}},[a("p-modal",{key:"delete_fieldset",attrs:{name:"delete-fieldset",title:"Delete Fieldset"},scopedSlots:e._u([{key:"footer",fn:function(t){return[a("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-fieldset",arg:"delete-fieldset"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(a){return e.destroy(t.data.id)}}},[e._v("Delete")]),e._v(" "),a("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-fieldset",arg:"delete-fieldset"}]},[e._v("Cancel")])]}}])},[a("p",[e._v("Are you sure you want to permenantly delete this fieldset?")])])],1)],1)}),[],!1,null,null,null);t.default=d.exports}}]);