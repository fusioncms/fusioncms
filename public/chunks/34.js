(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{EACl:function(e,t,i){"use strict";i.r(t),t.default={props:{value:{required:!0}},watch:{value:{deep:!0,handler:function(e){this.$emit("input",e)}}}}},UN3v:function(e,t,i){"use strict";i.r(t);var r=i("L2JU");function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}var l={name:"asset-fieldtype-settings",mixins:[i("EACl").default],data:function(){return{filetypes:{image:"Images",video:"Videos",audio:"Audio",document:"Documents"}}},computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){s(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({},Object(r.c)({directories:"filemanager/getDirectories"}),{directoryOptions:function(){return _.map(this.directories,(function(e){return{label:e.name,value:e.id}}))}})},c=i("KHd+"),o=Object(c.a)(l,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"row"},[i("div",{staticClass:"col w-1/2"},[i("p-number",{attrs:{name:"settings.limit",label:"Limit",help:"Limit the number of assets selected; leave blank if no limit is desired.",placeholder:""},model:{value:e.value.limit,callback:function(t){e.$set(e.value,"limit",t)},expression:"value.limit"}}),e._v(" "),i("p-checkbox-group",{attrs:{label:"File type restrictions",help:"Restrict which file types are selectable for this field; leave blank if no retriction is desired."}},e._l(e.filetypes,(function(t,r){return i("p-checkbox",{key:r,attrs:{name:"filetype_restrictions",id:r,"native-value":r},model:{value:e.value.filetype_restrictions,callback:function(t){e.$set(e.value,"filetype_restrictions",t)},expression:"value.filetype_restrictions"}},[e._v("\n\t\t\t\t\t"+e._s(t)+"\n\t\t\t\t")])})),1)],1),e._v(" "),i("div",{staticClass:"col w-1/2"},[i("p-select",{attrs:{name:"directory_restrictions",label:"Directory restrictions",help:"Restrict which folders are accessible for this field.",options:e.directoryOptions},model:{value:e.value.directory_restrictions,callback:function(t){e.$set(e.value,"directory_restrictions",t)},expression:"value.directory_restrictions"}})],1)])}),[],!1,null,null,null);t.default=o.exports}}]);