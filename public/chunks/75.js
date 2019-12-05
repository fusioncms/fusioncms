(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{IvLr:function(t,s,e){"use strict";e.r(s);var a={data:function(){return{endpoint:"/datatable/matrices",currentFile:"",files:[],logs:[],currentError:{},loaded:!1}},computed:{file:function(){return(this.$route.query?this.$route.query:"").file}},beforeRouteEnter:function(t,s,e){e((function(s){s.getFile(t.query.file)}))},beforeRouteUpdate:function(t,s,e){this.getFile(t.query.file),e()},methods:{getFile:function(t){var s=this;s.loaded=!1;var e=t?"?l="+t:"";axios.get("/api/logs"+e).then((function(t){s.currentFile=t.data.currentFile,s.files=t.data.files,s.logs=t.data.logs,s.loaded=!0}))},changeCurrentError:function(t){this.currentError=t}}},i=e("KHd+"),r=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("portal",{attrs:{to:"title"}},[e("app-title",{attrs:{icon:"bug"}},[t._v("Logs")])],1),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"logs__sidebar side-container"},[e("div",{staticClass:"card"},[t._m(0),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"card-body"},[t._l(t.files,(function(s,a){return e("router-link",{key:a,staticClass:"block px-3 py-2 text-gray-900",attrs:{to:{path:"logs?",query:{file:s}}}},[t._v("\n                        "+t._s(s)+"\n                    ")])})),t._v(" "),t.loaded||0!=t.files.length?t._e():e("div",{staticClass:"block px-3 py-2"},[t._v("\n                        Loading log files "),e("fa-icon",{staticClass:"fa-spin ml-2",attrs:{icon:"cog"}})],1),t._v(" "),t.loaded&&0==t.files.length?e("div",{staticClass:"block px-3 py-2"},[t._v("\n                        No logs found\n                    ")]):t._e()],2)])]),t._v(" "),e("div",{staticClass:"logs__main content-container"},[e("div",{staticClass:"card"},[t._m(1),t._v(" "),e("div",{staticClass:"container"},[t._l(t.logs,(function(s){return t.loaded?e("div",{directives:[{name:"modal",rawName:"v-modal:error-view",arg:"error-view"}],staticClass:"logs__row flex flex-no-wrap py-2",on:{click:function(e){return t.changeCurrentError(s)}}},[e("div",{staticClass:"px-2 py-1 flex-no-shrink flex items-center"},[e("div",{class:"d-flex whitespace-no-wrap text-"+s.level.status+"-600",attrs:{title:s.level.name}},[e("fa-icon",{staticClass:"fa-inverse! fa-fw",attrs:{icon:["far",s.level.icon]}}),t._v(" "),e("span",{staticClass:"sr-only"},[t._v("\n                                    "+t._s(s.level.name)+"\n                                ")])],1)]),t._v(" "),e("div",{staticClass:"px-3 py-1 flex-no-shrink flex items-center text-xs whitespace-no-wrap"},[t._v(t._s(s.date))]),t._v(" "),e("div",{staticClass:"col px-3 py-1 leading-tight overflow-hidden"},[e("div",{staticClass:"text-md",domProps:{innerHTML:t._s(s.text)}}),t._v(" "),s.inFile?e("div",{staticClass:"truncate pt-2 text-xs text-gray-600"},[t._v("\n                                "+t._s(s.inFile)+"\n                            ")]):t._e()])]):t._e()})),t._v(" "),t.loaded?t._e():e("div",{staticClass:"block px-3 py-4"},[t._v("\n                        Loading file "),t.file?e("code",[t._v(t._s(t.file))]):t._e(),t._v(" "),e("fa-icon",{staticClass:"fa-spin ml-3",attrs:{icon:"cog"}})],1),t._v(" "),t.loaded&&0==t.logs.length?e("div",{staticClass:"block px-3 py-4"},[t._v("\n                        Log file empty\n                    ")]):t._e()],2)])])]),t._v(" "),e("p-modal",{attrs:{name:"error-view",title:"Error Details","extra-large":""}},[t.currentError.date?e("div",[e("div",{staticClass:"leading-tight mb-3"},[e("div",{staticClass:"flex p-2"},[e("div",{staticClass:"pr-2 whitespace-no-wrap"},[e("strong",[t._v("Timestamp:")])]),t._v(" "),e("div",{staticClass:"whitespace-no-wrap"},[t._v("\n                        "+t._s(t.currentError.date)+"\n                    ")])]),t._v(" "),e("div",{staticClass:"flex p-2"},[e("div",{staticClass:"pr-2 whitespace-no-wrap"},[e("strong",[t._v("Error Text:")])]),t._v(" "),e("div",{staticClass:"logs__full-text"},[e("div",{staticClass:"text-warning-800"},[t._v("\n                            "+t._s(t.currentError.textFull)+"\n                        ")])])])]),t._v(" "),e("div",{staticClass:"px-2"},[e("h3",{staticClass:"text-sm"},[t._v("Stack Trace:")]),t._v(" "),e("div",{staticClass:"logs__stack-trace overflow-auto"},t._l(t.currentError.stackTrace,(function(s){return s.length?e("div",{staticClass:"logs__stack-row"},[t._v("\n                        "+t._s(s)+"\n                    ")]):t._e()})),0)])]):t._e()])],1)}),[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-header px-3 pt-2"},[s("h4",{staticClass:"mb-0"},[this._v("Available Logs")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"card-header px-4 py-2"},[s("h2",{staticClass:"mb-0"},[this._v("Log Entries")]),this._v(" "),s("h3",{staticClass:"text-xs"},[this._v("Click an entry to view full error and stack trace")])])}],!1,null,null,null);s.default=r.exports}}]);