(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{Zwc7:function(t,e,a){"use strict";a.r(e);var o={head:{title:function(){return{inner:"Backups"}}},data:function(){return{destinations:[],ready:!1,saveBackup:!0}},methods:{refresh:function(){var t=this;this.ready=!1,axios.get("/api/backups").then((function(e){t.destinations=e.data.data,t.ready=!0,t.saveBackup=!0}))},upload:function(t){var e=this;if(void 0!==t){var a=new FormData;a.append("_method","POST"),a.append("file-upload",t),axios.post("/api/backups/upload",a).then((function(){toast("Backup successfully uploaded!","success"),e.$refs.upload.remove(),e.refresh()}))}},download:function(t){window.open("/backups/".concat(t),"_blank")},restore:function(t){var e=this;axios.post("/api/backups/restore/".concat(t),{saveBackup:this.saveBackup}).then((function(t){toast("Backup successfully restored!","success"),e.refresh()}))},backup:function(){var t=this;axios.post("/api/backups").then((function(e){toast("Backup successfully created!","success"),t.refresh()}))},destroy:function(t){var e=this;axios.delete("/api/backups/".concat(t)).then((function(t){toast("Backp successfully deleted!","success"),e.refresh()}))}},beforeRouteEnter:function(t,e,a){a((function(t){t.refresh()}))}},s=a("KHd+"),n=Object(s.a)(o,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"save"}},[t._v("Backups")])],1),t._v(" "),a("portal",{attrs:{to:"actions"}},[a("p-button",{directives:[{name:"modal",rawName:"v-modal:settings",arg:"settings"}],staticClass:"button mr-3"},[t._v("Settings")]),t._v(" "),a("p-button",{directives:[{name:"modal",rawName:"v-modal:confirm-form",arg:"confirm-form"}],staticClass:"button--primary",on:{click:function(t){t.preventDefault()}}},[t._v("Run Backup")])],1),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("p-upload",{ref:"upload",attrs:{name:"file-upload",accept:"zip",multiple:!1},on:{input:t.upload}}),t._v(" "),t.ready?a("table",[t._m(0),t._v(" "),a("tbody",t._l(t.destinations,(function(e){return a("tr",[a("td",[a("code",[t._v(t._s(e.disk))])]),t._v(" "),a("td",[t._v(t._s(e.amount))]),t._v(" "),a("td",[t._v(t._s(e.newest))]),t._v(" "),a("td",[t._v(t._s(e.size))]),t._v(" "),a("td",[e.isReachable?a("span",{staticClass:"badge badge--success"},[t._v("Reachable")]):a("span",{staticClass:"badge badge--danger"},[t._v("Reachable")]),t._v(" "),e.isHealthy?a("span",{staticClass:"badge badge--success"},[t._v("Healthy")]):a("span",{staticClass:"badge badge--danger"},[t._v("Healthy")])])])})),0)]):t._e(),t._v(" "),t._l(t.destinations,(function(e){return t.ready?a("table",[t._m(1,!0),t._v(" "),a("tbody",t._l(e.backups,(function(e){return a("tr",[a("td",[t._v(t._s(e.name))]),t._v(" "),a("td",[t._v(t._s(e.happened))]),t._v(" "),a("td",[t._v(t._s(e.size))]),t._v(" "),a("td",[a("p-dropdown",{attrs:{right:""}},[a("fa-icon",{attrs:{icon:"bars"}}),t._v(" "),a("template",{slot:"options"},[a("p-dropdown-item",{directives:[{name:"modal",rawName:"v-modal:restore-form",value:e,expression:"backup",arg:"restore-form"}],on:{click:function(t){t.preventDefault()}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tRestore\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),a("p-dropdown-item",{on:{click:function(a){return t.download(e.name)}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tDownload\n\t\t\t\t\t\t\t\t\t\t")]),t._v(" "),e.isNewest?t._e():a("p-dropdown-item",{directives:[{name:"modal",rawName:"v-modal:delete-form",value:e,expression:"backup",arg:"delete-form"}],on:{click:function(t){t.preventDefault()}}},[t._v("\n\t\t\t\t\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t\t\t\t\t")])],1)],2)],1)])})),0)]):t._e()}))],2)]),t._v(" "),a("portal",{attrs:{to:"modals"}},[a("settings-modal",{attrs:{section:"backups"}}),t._v(" "),a("p-modal",{key:"restore_form",attrs:{name:"restore-form",title:"Restore Confirmation Form"},scopedSlots:t._u([{key:"footer",fn:function(e){return[a("p-button",{directives:[{name:"modal",rawName:"v-modal:restore-form",arg:"restore-form"}],staticClass:"ml-3",attrs:{theme:"warning"},on:{click:function(a){return t.restore(e.data.name)}}},[t._v("Restore")]),t._v(" "),a("p-button",{directives:[{name:"modal",rawName:"v-modal:restore-form",arg:"restore-form"}]},[t._v("Cancel")])]}}])},[a("p",[t._v("Are you sure you wish to restore from this backup?")]),t._v(" "),a("p-checkbox",{attrs:{name:"saveBackup"},model:{value:t.saveBackup,callback:function(e){t.saveBackup=e},expression:"saveBackup"}},[t._v("\n        \t\t\tBackup before restoring\n        \t\t")])],1),t._v(" "),a("p-modal",{key:"confirm_form",attrs:{name:"confirm-form",title:"Confirmation Form"},scopedSlots:t._u([{key:"footer",fn:function(e){return[a("p-button",{directives:[{name:"modal",rawName:"v-modal:confirm-form",arg:"confirm-form"}],staticClass:"ml-3",attrs:{theme:"info"},on:{click:function(e){return t.backup()}}},[t._v("Backup")]),t._v(" "),a("p-button",{directives:[{name:"modal",rawName:"v-modal:confirm-form",arg:"confirm-form"}]},[t._v("Cancel")])]}}])},[a("p",[t._v("Are you sure you wish to perform a manual backup?")]),t._v(" "),a("p",[t._v("It is also possible to enable scheduled backups from the Settings interface.")])]),t._v(" "),a("p-modal",{key:"delete_form",attrs:{name:"delete-form",title:"Delete Form"},scopedSlots:t._u([{key:"footer",fn:function(e){return[a("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-form",arg:"delete-form"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(a){return t.destroy(e.data.name)}}},[t._v("Delete")]),t._v(" "),a("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-form",arg:"delete-form"}]},[t._v("Cancel")])]}}])},[a("p",[t._v("Are you sure you want to permenantly delete this backup?")])])],1)],1)}),[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("th",[t._v("Disk")]),t._v(" "),a("th",[t._v("# Backups")]),t._v(" "),a("th",[t._v("Newest")]),t._v(" "),a("th",[t._v("Storage Used")]),t._v(" "),a("th",[t._v("Status")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("th",[this._v("Name")]),this._v(" "),e("th",[this._v("Happened")]),this._v(" "),e("th",[this._v("Storage Used")]),this._v(" "),e("th")])}],!1,null,null,null);e.default=n.exports}}]);