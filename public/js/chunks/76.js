(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{JTHQ:function(e,t,r){"use strict";r.r(t);var n=r("L2JU");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var o={head:{title:function(){return{inner:"File Manager"}}},methods:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(n.b)({fetchFilesAndDirectories:"filemanager/fetchFilesAndDirectories",reset:"filemanager/reset"})),beforeRouteEnter:function(e,t,r){r((function(e){e.reset(),e.fetchFilesAndDirectories()}))}},a=r("KHd+"),s=Object(a.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("portal",{attrs:{to:"title"}},[t("app-title",{attrs:{icon:"images"}},[this._v("File Manager")])],1),this._v(" "),t("file-manager")],1)}),[],!1,null,null,null);t.default=s.exports}}]);