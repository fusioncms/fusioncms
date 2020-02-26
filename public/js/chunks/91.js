(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{zbda:function(e,t,r){"use strict";r.r(t);var o=r("LvDl"),n=r.n(o),a={head:{title:function(){return{inner:"Roles"}}},data:function(){return{endpoint:"/datatable/roles"}},methods:{isProtected:function(e){return n.a.includes(["admin","user","guest"],e)},destroy:function(e){axios.delete("/api/roles/"+e).then((function(e){toast("Role successfully deleted.","success"),proton().$emit("refresh-datatable-roles")}))}}},s=r("KHd+"),l=Object(s.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("portal",{attrs:{to:"title"}},[r("app-title",{attrs:{icon:"user-shield"}},[e._v("Roles")])],1),e._v(" "),r("portal",{attrs:{to:"actions"}},[r("router-link",{staticClass:"button",attrs:{to:{name:"roles.create"}}},[e._v("Create Role")])],1),e._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"content-container"},[r("p-datatable",{key:"roles_table",attrs:{endpoint:e.endpoint,name:"roles","sort-by":"name","per-page":10},scopedSlots:e._u([{key:"name",fn:function(t){return[r("router-link",{attrs:{to:{name:"roles.edit",params:{role:t.record.id}}}},[e._v(e._s(t.record.name))])]}},{key:"slug",fn:function(t){return[r("code",[e._v(e._s(t.record.slug))])]}},{key:"description",fn:function(t){return[r("span",{staticClass:"text-gray-800 text-sm"},[e._v(e._s(t.record.description))])]}},{key:"actions",fn:function(t){return[r("p-dropdown",{attrs:{right:""}},[r("fa-icon",{attrs:{icon:["fas","bars"]}}),e._v(" "),r("template",{slot:"options"},[r("p-dropdown-item",{attrs:{to:{name:"roles.edit",params:{role:t.record.id}}},on:{click:function(e){e.preventDefault()}}},[e._v("Edit")]),e._v(" "),e.isProtected(t.record.slug)?e._e():r("p-dropdown-item",{directives:[{name:"modal",rawName:"v-modal:delete-role",value:t.record,expression:"table.record",arg:"delete-role"}],on:{click:function(e){e.preventDefault()}}},[e._v("\n                                Delete\n                            ")])],1)],2)]}}])})],1)]),e._v(" "),r("portal",{attrs:{to:"modals"}},[r("p-modal",{attrs:{name:"delete-role",title:"Delete Role"},scopedSlots:e._u([{key:"footer",fn:function(t){return[r("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-role",arg:"delete-role"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(r){return e.destroy(t.data.id)}}},[e._v("Delete")]),e._v(" "),r("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-role",arg:"delete-role"}]},[e._v("Cancel")])]}}])},[r("p",[e._v("Are you sure you want to permenantly delete this role?")])])],1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);