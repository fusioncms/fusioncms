(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{KbVg:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{themes:[]}},mounted:function(){var t=this;axios.get("/api/themes").then(function(e){var s=e.data;t.themes=s.data})},methods:{setAsActive:function(t){var e=this;axios.put("/api/themes/set-active/".concat(t)).then(function(){e.themes.forEach(function(e){e.active=e.slug===t})})}}},i=s("KHd+"),n=Object(i.a)(a,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("portal",{attrs:{to:"title"}},[s("app-title",{attrs:{icon:"palette"}},[t._v("Themes")])],1),t._v(" "),s("div",{staticClass:"row"},t._l(t.themes,function(e){return s("div",{key:e.name,staticClass:"col mb-6 w-full lg:w-1/2 xxl:w-1/3"},[s("p-card",{attrs:{"no-body":""}},[s("img",{staticClass:"w-full rounded-t shadow",attrs:{src:e.preview,alt:e.name}}),t._v(" "),s("div",{staticClass:"card__body"},[s("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(e.name))]),t._v(" "),s("p",{staticClass:"text-gray-800 text-base"},[t._v(t._s(e.description))]),t._v(" "),s("div",{staticClass:"w-full border-t-2 border-gray-200 pt-3"},[e.active?s("p",{staticClass:"text-center"},[t._v("Currently Active")]):s("p-button",{staticClass:"w-full",on:{click:function(s){return t.setAsActive(e.slug)}}},[t._v("Set as active")])],1)])])],1)}),0)],1)},[],!1,null,null,null);e.default=n.exports}}]);