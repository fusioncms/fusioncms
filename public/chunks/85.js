(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{"7uuC":function(t,e,a){"use strict";a.r(e);var r=a("5fFP"),n={head:{title:function(){return{inner:"Matrix"}}},data:function(){return{endpoint:"/datatable/matrices"}},methods:{destroy:function(t){axios.delete("/api/matrices/"+t).then((function(t){r.a.dispatch("navigation/fetchAdminNavigation"),toast("Matrix successfully deleted.","success"),proton().$emit("refresh-datatable-matrices")}))}}},i=a("KHd+"),s=Object(i.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"hashtag"}},[t._v("Matrix")])],1),t._v(" "),a("portal",{attrs:{to:"actions"}},[a("router-link",{staticClass:"button",attrs:{to:{name:"matrices.create"}}},[t._v("Create Matrix")])],1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("p-datatable",{key:"matrices_table",attrs:{endpoint:t.endpoint,name:"matrices","sort-by":"name","per-page":10,"primary-key":"handle"},scopedSlots:t._u([{key:"name",fn:function(e){return[a("router-link",{attrs:{to:{name:"matrices.edit",params:{matrix:e.record.id}}}},[t._v(t._s(e.record.name))])]}},{key:"handle",fn:function(e){return[a("code",[t._v(t._s(e.record.handle))])]}},{key:"type",fn:function(e){return[a("span",{staticClass:"badge"},[t._v(t._s(e.record.type))])]}},{key:"description",fn:function(e){return[a("span",{staticClass:"text-gray-800 text-sm"},[t._v(t._s(e.record.description))])]}},{key:"status",fn:function(e){return[!0===e.record.status?a("span",{staticClass:"badge badge--success"},[t._v("Enabled")]):a("span",{staticClass:"badge badge--danger"},[t._v("Disabled")])]}},{key:"actions",fn:function(e){return[a("p-dropdown",{key:"matrix_"+e.record.id,attrs:{right:""}},[a("fa-icon",{attrs:{icon:["fas","bars"]}}),t._v(" "),a("template",{slot:"options"},[a("p-dropdown-item",{attrs:{to:{name:"matrices.edit",params:{matrix:e.record.id}}},on:{click:function(t){t.preventDefault()}}},[t._v("Edit")]),t._v(" "),a("p-dropdown-item",{directives:[{name:"modal",rawName:"v-modal:delete-matrix",value:e.record,expression:"table.record",arg:"delete-matrix"}],on:{click:function(t){t.preventDefault()}}},[t._v("\n                                Delete\n                            ")])],1)],2)]}}])})],1)]),t._v(" "),a("portal",{attrs:{to:"modals"}},[a("p-modal",{key:"delete_matrix",attrs:{name:"delete-matrix",title:"Delete Matrix"},scopedSlots:t._u([{key:"footer",fn:function(e){return[a("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-matrix",arg:"delete-matrix"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(a){return t.destroy(e.data.id)}}},[t._v("Delete")]),t._v(" "),a("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-matrix",arg:"delete-matrix"}]},[t._v("Cancel")])]}}])},[a("p",[t._v("Are you sure you want to permenantly delete this matrix?")])])],1)],1)}),[],!1,null,null,null);e.default=s.exports}}]);