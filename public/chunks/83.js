(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{L3KT:function(t,s,e){"use strict";e.r(s);var a={data:function(){return{themes:[]}},methods:{setAsActive:function(t){var s=this;axios.patch("/api/theme/".concat(t)).then((function(){s.themes.forEach((function(s){s.active=s.slug===t}))}))}},beforeRouteEnter:function(t,s,e){axios.all([axios.get("/api/themes")]).then(axios.spread((function(t){e((function(s){s.themes=t.data.data}))})))}},i=e("KHd+"),n=Object(i.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("portal",{attrs:{to:"title"}},[e("app-title",{attrs:{icon:"fill-drip"}},[t._v("Themes")])],1),t._v(" "),e("div",{staticClass:"row"},t._l(t.themes,(function(s){return e("div",{key:s.name,staticClass:"col mb-6 w-full md:w-1/2 xl:w-1/4"},[e("p-card",{attrs:{"no-body":""}},[e("img",{staticClass:"w-full rounded-t shadow",attrs:{src:s.preview,alt:s.name}}),t._v(" "),e("div",{staticClass:"card__body"},[e("div",{staticClass:"font-bold text-xl mb-2"},[t._v(t._s(s.name))]),t._v(" "),e("p",{staticClass:"text-gray-800 text-base"},[t._v(t._s(s.description))]),t._v(" "),e("div",{staticClass:"w-full border-t-2 border-gray-200 pt-3"},[s.active?e("p",{staticClass:"text-center"},[t._v("Currently Active")]):e("p-button",{staticClass:"w-full",on:{click:function(e){return t.setAsActive(s.slug)}}},[t._v("Set as active")])],1)])])],1)})),0),t._v(" "),e("portal",{attrs:{to:"actions"}},[e("router-link",{staticClass:"button mr-3",attrs:{to:{name:"themes.settings"}}},[t._v("Go Back")])],1)],1)}),[],!1,null,null,null);s.default=n.exports}}]);