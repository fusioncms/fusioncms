(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{"8kUA":function(t,e,s){"use strict";s.r(e);var a=s("L2JU"),i=s("n/Zj"),c=s("O3a7"),l=s("vvXJ"),r=s("IDoC"),n=s("4XVt"),o=s("WhcR"),f=s("dphx");function d(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?d(Object(s),!0).forEach((function(e){p(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):d(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function p(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var v={name:"asset-fieldtype",components:{"display-action":c.a,"breadcrumb-action":i.a,"search-action":l.a,"sort-action":r.a,"view-action":n.a,"grid-view":o.a,"list-view":f.a},data:function(){return{modalOpen:!1,selected:{}}},props:{field:{type:Object,required:!0},value:{type:Object,required:!1,default:function(){}}},computed:u({},Object(a.c)({selectedFiles:"filemanager/getSelectedFiles",files:"filemanager/getFiles",view:"filemanager/getView"}),{hasSelection:function(){return _.size(this.selected)>0}}),methods:u({},Object(a.b)({clearFileSelection:"filemanager/clearFileSelection",reset:"filemanager/reset"}),{add:function(){var t=this;_.forEach(this.selectedFiles,(function(e){t.$set(t.selected,e,_.find(t.files,["id",e]))})),this.$emit("input",this.selected),this.clearFileSelection()},remove:function(t){this.$delete(this.selected,t)},open:function(){this.modalOpen=!0,this.reset(),this.selected=Object.assign({},this.value)},close:function(){this.modalOpen=!1,this.reset()}})},m=s("KHd+"),b=Object(m.a)(v,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("label",{staticClass:"form__label",attrs:{for:t.field.handle}},[t._v(t._s(t.field.name))]),t._v(" "),s("div",{staticClass:"border-b border-gray-200 m-2 py-2"},[s("p-button",{attrs:{theme:"secondary"},on:{click:t.open}},[s("fa-icon",{staticClass:"mr-1",attrs:{icon:["fas","plus-circle"]}}),t._v(" Asset\n\t\t\t")],1)],1),t._v(" "),s("div",{staticClass:"flex items-center justify-start"},t._l(t.value,(function(e,a){return s("p-button",{key:e.id,staticClass:"mx-2",on:{click:function(s){return t.remove(e.id)}}},[t._v("\n\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t"),s("fa-icon",{staticClass:"ml-2",attrs:{icon:["fas","times-circle"]}})],1)})),1),t._v(" "),s("p-modal",{attrs:{name:"file-manager","no-header":"","no-footer":"","extra-large":""},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}},[s("div",{staticClass:"row"},[s("div",{staticClass:"side-container"},[s("div",{staticClass:"card h-full"},[s("div",{staticClass:"border-b border-gray-200 px-3 py-2 text-right"},[s("p-button",{on:{click:t.close}},[s("fa-icon",{attrs:{icon:["fas","times"]}})],1)],1),t._v(" "),t.hasSelection?s("div",{staticClass:"row"},[s("p-sortable-list",{staticClass:"sortable-list",model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[s("div",{staticClass:"col mb-6 w-full"},t._l(t.selected,(function(e,a){return s("p-sortable-item",{key:e.id},[s("div",{staticClass:"flex items-center justify-between py-2 px-3"},[s("p-sortable-handle",{staticClass:"cursor-move w-1/5"},[s("fa-icon",{staticClass:"handle fa-fw text-gray-400",attrs:{icon:"ellipsis-v"}})],1),t._v(" "),s("p-img",{attrs:{src:e.url+"?w=50&h=50&fit=crop",width:50,height:50}}),t._v(" "),s("div",[t._v(t._s(e.name))]),t._v(" "),s("p-button",{attrs:{theme:"danger"},on:{click:function(s){return t.remove(e.id)}}},[s("fa-icon",{attrs:{icon:["fas","trash"]}})],1)],1)])})),1)])],1):s("div",{staticClass:"h-full flex flex-col justify-center items-center text-5xl text-gray-300"},[s("fa-icon",{staticClass:"fa-fw fa-3x",attrs:{icon:["far","copy"]}}),t._v(" "),s("span",{staticClass:"text-lg py-2 text-gray-500"},[t._v("Select some files...")])],1)])]),t._v(" "),s("div",{staticClass:"content-container"},[s("div",{staticClass:"card"},[s("div",{staticClass:"flex items-center justify-between px-3 pt-2"},[s("ul",[s("li",{staticClass:"mr-4"},[s("p-button",{attrs:{theme:"success"},on:{click:t.add}},[s("fa-icon",{staticClass:"mr-1",attrs:{icon:["fas","arrow-alt-circle-left"]}})],1)],1)]),t._v(" "),s("ul",{staticClass:"flex w-full"},[s("li",{staticClass:"mr-2 w-full"},[s("search-action")],1)]),t._v(" "),s("ul",{staticClass:"flex"},[s("li",{staticClass:"mr-2"},[s("display-action")],1),t._v(" "),s("li",{staticClass:"mr-2"},[s("sort-action")],1),t._v(" "),s("li",{staticClass:"mr-2"},[s("view-action")],1)])]),t._v(" "),s("div",{staticClass:"flex items-center border-b border-gray-200 px-3 py-2"},[s("breadcrumb-action")],1),t._v(" "),s(t.view+"-view",{tag:"component"})],1)])])])],1)}),[],!1,null,null,null);e.default=b.exports}}]);