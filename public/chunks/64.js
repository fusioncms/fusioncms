(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{"+iGM":function(t,s,a){"use strict";a.r(s);var e={data:function(){return{settings:{}}},methods:{sectionPath:function(t){return void 0===t.to?{name:"setting.section",params:{section:t.handle}}:{name:t.to}}},beforeRouteEnter:function(t,s,a){axios.get("/api/settings").then(function(t){a(function(s){s.settings=t.data.data})})}},n=a("KHd+"),i=Object(n.a)(e,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:"sliders-h"}},[t._v("Settings")])],1),t._v(" "),t._l(t.settings,function(s,e){return a("div",{key:e,staticClass:"row flex-1 flex-wrap"},[a("div",{staticClass:"col mb-2 w-full"},[a("span",{staticClass:"font-semibold"},[t._v(t._s(e))])]),t._v(" "),t._l(s,function(s){return a("div",{key:s.handle,staticClass:"col mb-6 w-full md:w-1/2 xl:w-1/3 xxl:w-1/4 xxxl:w-1/5"},[a("router-link",{staticClass:"no-underline text-black hover:text-black bg-white rounded shadow hover:shadow-md p-3 flex h-full items-center",attrs:{to:t.sectionPath(s)}},[a("span",{staticClass:"fa-layers fa-fw fa-3x mr-2 flex-no-shrink"},[a("fa-icon",{staticClass:"fa-fw text-primary-500",attrs:{icon:["fas","circle"]}}),t._v(" "),a("fa-icon",{staticClass:"fa-fw fa-inverse",attrs:{icon:["far",s.icon||"cog"],transform:"shrink-8"}})],1),t._v(" "),a("div",{staticClass:"flex flex-col"},[a("span",{staticClass:"font-semibold text-lg"},[t._v(t._s(s.name))]),t._v(" "),a("span",{staticClass:"text-xs text-gray-800"},[t._v(t._s(s.description))])])])],1)})],2)})],2)},[],!1,null,null,null);s.default=i.exports}}]);