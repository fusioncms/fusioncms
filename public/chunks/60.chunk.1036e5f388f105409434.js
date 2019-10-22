<<<<<<< HEAD:public/chunks/60.chunk.1036e5f388f105409434.js
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FileManager/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FileManager/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories'
  })),
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.fetchFilesAndDirectories();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FileManager/Index.vue?vue&type=template&id=1565eab6&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FileManager/Index.vue?vue&type=template&id=1565eab6& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("app-title", { attrs: { icon: "images" } }, [
            _vm._v("File Manager")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("file-manager")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/FileManager/Index.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/FileManager/Index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_1565eab6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=1565eab6& */ "./resources/js/views/FileManager/Index.vue?vue&type=template&id=1565eab6&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/FileManager/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_1565eab6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_1565eab6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/FileManager/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/FileManager/Index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/FileManager/Index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FileManager/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/FileManager/Index.vue?vue&type=template&id=1565eab6&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/FileManager/Index.vue?vue&type=template&id=1565eab6& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1565eab6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=1565eab6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FileManager/Index.vue?vue&type=template&id=1565eab6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1565eab6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_1565eab6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0ZpbGVNYW5hZ2VyL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvSW5kZXgudnVlP2FiNjUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0ZpbGVNYW5hZ2VyL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvSW5kZXgudnVlPzU5ZWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0ZpbGVNYW5hZ2VyL0luZGV4LnZ1ZT9lZjRjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUVBO0FBQ0EsNkJBQ0E7QUFDQTtBQURBLElBREEsQ0FEQTtBQU9BLGtCQVBBLDRCQU9BLEVBUEEsRUFPQSxJQVBBLEVBT0EsSUFQQSxFQU9BO0FBQ0E7QUFDQTtBQUNBLEtBRkE7QUFHQTtBQVhBLEc7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxjQUFjLEVBQUU7QUFDbEM7QUFDQSwyQkFBMkIsU0FBUyxpQkFBaUIsRUFBRTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvNjAuY2h1bmsuMTAzNmU1ZjM4OGYxMDU0MDk0MzQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8YXBwLXRpdGxlIGljb249XCJpbWFnZXNcIj5GaWxlIE1hbmFnZXI8L2FwcC10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPGZpbGUtbWFuYWdlcj48L2ZpbGUtbWFuYWdlcj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC4uLm1hcEFjdGlvbnMoe1xuICAgICAgICAgICAgICAgIGZldGNoRmlsZXNBbmREaXJlY3RvcmllczogJ2ZpbGVtYW5hZ2VyL2ZldGNoRmlsZXNBbmREaXJlY3RvcmllcycsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBuZXh0KHZtID0+IHtcbiAgICAgICAgICAgICAgICB2bS5mZXRjaEZpbGVzQW5kRGlyZWN0b3JpZXMoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwiaW1hZ2VzXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJGaWxlIE1hbmFnZXJcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZmlsZS1tYW5hZ2VyXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNTY1ZWFiNiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTU2NWVhYjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTU2NWVhYjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTU2NWVhYjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNTY1ZWFiNiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNTY1ZWFiNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL0ZpbGVNYW5hZ2VyL0luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTU2NWVhYjYmXCIiXSwic291cmNlUm9vdCI6IiJ9
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{mFyt:function(t,e,s){"use strict";s.r(e);var a={data:function(){return{matrices:[],activities:[],feed:[]}},computed:{quicklinks:function(){if(this.matrices)return _.filter(this.matrices,(function(t){return 1==t.quicklink}))}},beforeRouteEnter:function(t,e,s){console.warn("Fusion news feed will be implemented at launch. You may safely ignore the following 404 error."),axios.all([axios.get("/api/matrices"),axios.get("/api/activity"),axios.get("//getfusioncms.com/feed.json").catch((function(){return{data:{items:[]}}}))]).then(axios.spread((function(t,e,a){s((function(s){s.matrices=t.data.data,s.activities=e.data.data,s.feed=a.data.items}))})))}},i=s("KHd+"),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("portal",{attrs:{to:"title"}},[s("app-title",{attrs:{icon:"grip-horizontal"}},[t._v("Dashboard")])],1),t._v(" "),t.quicklinks?s("div",{staticClass:"row flex-1 flex-wrap"},t._l(t.quicklinks,(function(e){return s("div",{key:e.handle,staticClass:"col mb-6 w-full md:w-1/2 xl:w-1/3 xxl:w-1/4 xxxl:w-1/5"},[s("router-link",{staticClass:"no-underline text-black hover:text-black bg-white rounded shadow hover:shadow-md p-3 flex h-full items-center",attrs:{to:e.admin_path}},[s("span",{staticClass:"fa-layers fa-fw fa-3x mr-2 flex-no-shrink"},[s("fa-icon",{staticClass:"fa-fw text-primary-500",attrs:{icon:["fas","circle"]}}),t._v(" "),s("fa-icon",{staticClass:"fa-fw fa-inverse",attrs:{icon:["far",e.icon||"pencil"],transform:"shrink-8"}})],1),t._v(" "),s("div",{staticClass:"flex flex-col"},[s("span",{staticClass:"font-semibold text-lg"},[t._v(t._s(e.name))]),t._v(" "),s("span",{staticClass:"text-sm"},[t._v(t._s(e.description))])])])],1)})),0):t._e(),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col mb-6 md:w-full"},[s("analytics-overview")],1)]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col w-full lg:w-2/3"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card__body"},[s("h2",[t._v("Recent Activity")]),t._v(" "),t.activities.length?t._e():s("p",[t._v("\n                        Looks like nothing has taken place on your website yet.\n                    ")])]),t._v(" "),t.activities.length?s("table",[t._m(0),t._v(" "),s("tbody",t._l(t.activities,(function(e){return s("tr",{key:e.id},[s("td",[s("router-link",{attrs:{to:{name:"users.edit",params:{user:e.causer.id}}}},[t._v(t._s(e.causer.name))])],1),t._v(" "),s("td",{staticClass:"flex items-center"},[s("div",{staticClass:"text-gray-900 mr-4 flex items-center text-sm w-3"},[e.properties.icon?s("fa-icon",{attrs:{icon:["fas",e.properties.icon]}}):s("fa-icon",{staticClass:"fa-xs",attrs:{icon:["fas","circle"]}})],1),t._v("\n\n                                "+t._s(e.description)+"\n                            ")]),t._v(" "),s("td",[e.properties.link?s("router-link",{staticClass:"text-gray-800 hover:text-gray-900",attrs:{to:e.properties.link}},[s("fa-icon",{attrs:{icon:["fas","arrow-alt-circle-right"]}})],1):t._e()],1),t._v(" "),s("td",[t._v(t._s(t.moment(e.created_at).format("L")))]),t._v(" "),s("td",[t._v(t._s(t.moment(e.created_at).format("LT")))])])})),0)]):t._e()])]),t._v(" "),s("div",{staticClass:"col w-full lg:w-1/3"},[s("div",{staticClass:"card"},[t._m(1),t._v(" "),t.feed.length?s("table",[t._m(2),t._v(" "),s("tbody",t._l(t.feed,(function(e){return s("tr",{key:e.id},[s("td",[t._v(t._s(e.title))]),t._v(" "),s("td",[s("a",{attrs:{href:e.url}},[t._v("Read More")])])])})),0)]):s("div",{staticClass:"card__body"},[s("div",{staticClass:"text-center mb-4 bg-gray-100 text-gray-800 rounded p-3"},[t._v("\n                        The Fusion news feed will be implemented at launch.\n                    ")]),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)])])])])],1)}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("thead",[s("tr",[s("th",[t._v("User")]),t._v(" "),s("th",[t._v("Action")]),t._v(" "),s("th"),t._v(" "),s("th",[t._v("Date")]),t._v(" "),s("th",[t._v("Time")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card__body"},[e("h2",[this._v("Fusion News")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("Title")]),this._v(" "),e("th",[this._v("Action")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex mb-6"},[e("div",{staticClass:"bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col"},[e("span",{staticClass:"block text-center font-bold text-3xl leading-none"},[this._v("28")]),this._v(" "),e("span",{staticClass:"block text-center text-sm text-gray-600"},[this._v("Dec 2019")])]),this._v(" "),e("div",[e("span",{staticClass:"block font-bold text-gray-700 tracking-wide"},[this._v("Releases")]),this._v(" "),e("p",[this._v("FusionCMS 6.0.0 is now open to the public.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex mb-6"},[e("div",{staticClass:"bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col"},[e("span",{staticClass:"block text-center font-bold text-3xl leading-none"},[this._v("28")]),this._v(" "),e("span",{staticClass:"block text-center text-sm text-gray-600"},[this._v("Nov 2019")])]),this._v(" "),e("div",[e("span",{staticClass:"block font-bold text-gray-700 tracking-wide"},[this._v("Releases")]),this._v(" "),e("p",[this._v("FusionCMS 5.13.4 is now available.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex mb-6"},[e("div",{staticClass:"bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col"},[e("span",{staticClass:"block text-center font-bold text-3xl leading-none"},[this._v("28")]),this._v(" "),e("span",{staticClass:"block text-center text-sm text-gray-600"},[this._v("Oct 2019")])]),this._v(" "),e("div",[e("span",{staticClass:"block font-bold text-gray-700 tracking-wide"},[this._v("Releases")]),this._v(" "),e("p",[this._v("FusionCMS 5.13.3 is now available.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex mb-6"},[e("div",{staticClass:"bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col"},[e("span",{staticClass:"block text-center font-bold text-3xl leading-none"},[this._v("28")]),this._v(" "),e("span",{staticClass:"block text-center text-sm text-gray-600"},[this._v("Sep 2019")])]),this._v(" "),e("div",[e("span",{staticClass:"block font-bold text-gray-700 tracking-wide"},[this._v("Releases")]),this._v(" "),e("p",[this._v("FusionCMS 5.13.2 is now available.")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex"},[e("div",{staticClass:"bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col"},[e("span",{staticClass:"block text-center font-bold text-3xl leading-none"},[this._v("28")]),this._v(" "),e("span",{staticClass:"block text-center text-sm text-gray-600"},[this._v("Aug 2019")])]),this._v(" "),e("div",[e("span",{staticClass:"block font-bold text-gray-700 tracking-wide"},[this._v("Releases")]),this._v(" "),e("p",[this._v("FusionCMS 5.13.1 is now available.")])])])}],!1,null,null,null);e.default=n.exports}}]);
>>>>>>> f58c01081cfa3d67d47d38dd40d631e5dfa877c4:public/chunks/54.js
