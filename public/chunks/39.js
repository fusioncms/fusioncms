<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Permissions.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Permissions.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      endpoint: '/datatable/permissions'
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Permissions.vue?vue&type=template&id=3d9a3235&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Permissions.vue?vue&type=template&id=3d9a3235& ***!
  \*********************************************************************************************************************************************************************************************************/
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
        [_c("app-title", { attrs: { icon: "key" } }, [_vm._v("Permissions")])],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "content-container" },
          [
            _c("p-datatable", {
              attrs: {
                name: "permissions",
                endpoint: _vm.endpoint,
                "sort-by": "slug",
                "per-page": 10,
                "no-actions": ""
              },
              scopedSlots: _vm._u([
                {
                  key: "slug",
                  fn: function(table) {
                    return [_c("code", [_vm._v(_vm._s(table.record.slug))])]
                  }
                },
                {
                  key: "description",
                  fn: function(table) {
                    return [
                      _c("span", { staticClass: "text-gray-800 text-sm" }, [
                        _vm._v(_vm._s(table.record.description))
                      ])
                    ]
                  }
                }
              ])
            })
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Permissions.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Permissions.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Permissions_vue_vue_type_template_id_3d9a3235___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Permissions.vue?vue&type=template&id=3d9a3235& */ "./resources/js/views/Permissions.vue?vue&type=template&id=3d9a3235&");
/* harmony import */ var _Permissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Permissions.vue?vue&type=script&lang=js& */ "./resources/js/views/Permissions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Permissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Permissions_vue_vue_type_template_id_3d9a3235___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Permissions_vue_vue_type_template_id_3d9a3235___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Permissions.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Permissions.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Permissions.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Permissions.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Permissions.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Permissions.vue?vue&type=template&id=3d9a3235&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Permissions.vue?vue&type=template&id=3d9a3235& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_template_id_3d9a3235___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Permissions.vue?vue&type=template&id=3d9a3235& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Permissions.vue?vue&type=template&id=3d9a3235&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_template_id_3d9a3235___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Permissions_vue_vue_type_template_id_3d9a3235___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL1Blcm1pc3Npb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvUGVybWlzc2lvbnMudnVlP2Y5NTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL1Blcm1pc3Npb25zLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvUGVybWlzc2lvbnMudnVlPzQ0YTAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL1Blcm1pc3Npb25zLnZ1ZT9kMWUyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVCQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEc7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDLDBCQUEwQixTQUFTLGNBQWMsRUFBRTtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQSxXQUFXLG1DQUFtQztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyx1Q0FBdUM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUFBO0FBQUE7QUFBQTtBQUEwRjtBQUMzQjtBQUNMOzs7QUFHMUQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsaUZBQU07QUFDUixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwrRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsdVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy8zOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxhcHAtdGl0bGUgaWNvbj1cImtleVwiPlBlcm1pc3Npb25zPC9hcHAtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxwLWRhdGF0YWJsZSBuYW1lPVwicGVybWlzc2lvbnNcIiA6ZW5kcG9pbnQ9XCJlbmRwb2ludFwiIHNvcnQtYnk9XCJzbHVnXCIgOnBlci1wYWdlPVwiMTBcIiBuby1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInNsdWdcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb2RlPnt7IHRhYmxlLnJlY29yZC5zbHVnIH19PC9jb2RlPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZGVzY3JpcHRpb25cIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1ncmF5LTgwMCB0ZXh0LXNtXCI+e3sgdGFibGUucmVjb3JkLmRlc2NyaXB0aW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvcC1kYXRhdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6ICcvZGF0YXRhYmxlL3Blcm1pc3Npb25zJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImtleVwiIH0gfSwgW192bS5fdihcIlBlcm1pc3Npb25zXCIpXSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicC1kYXRhdGFibGVcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwicGVybWlzc2lvbnNcIixcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogX3ZtLmVuZHBvaW50LFxuICAgICAgICAgICAgICAgIFwic29ydC1ieVwiOiBcInNsdWdcIixcbiAgICAgICAgICAgICAgICBcInBlci1wYWdlXCI6IDEwLFxuICAgICAgICAgICAgICAgIFwibm8tYWN0aW9uc1wiOiBcIlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJzbHVnXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtfYyhcImNvZGVcIiwgW192bS5fdihfdm0uX3ModGFibGUucmVjb3JkLnNsdWcpKV0pXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyYXktODAwIHRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHRhYmxlLnJlY29yZC5kZXNjcmlwdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Blcm1pc3Npb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZDlhMzIzNSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QZXJtaXNzaW9ucy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Blcm1pc3Npb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnM2Q5YTMyMzUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2Q5YTMyMzUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2Q5YTMyMzUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Blcm1pc3Npb25zLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zZDlhMzIzNSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczZDlhMzIzNScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL1Blcm1pc3Npb25zLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGVybWlzc2lvbnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Blcm1pc3Npb25zLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QZXJtaXNzaW9ucy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2Q5YTMyMzUmXCIiXSwic291cmNlUm9vdCI6IiJ9
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{L2b2:function(e,t,i){"use strict";i.r(t);var a=i("T7iU"),s=i.n(a),n={data:function(){return{file:{},name:"",description:"",player:null,loaded:!1}},computed:{isImage:function(){return"image"===this.type},isVideo:function(){return"video"===this.type},isAudio:function(){return"audio"===this.type},isDocument:function(){return"document"===this.type},isMisc:function(){return"misc"===this.type},type:function(){var e=_.split(this.file.mimetype,"/",1)[0];switch(e){case"image":return"image";case"audio":return"audio";case"video":return"video";case"application":case"text":return"document";default:return"misc"}},bytes:function(){var e=this.file.bytes;if(Math.abs(e)<1e3)return e+" B";var t=-1,i=["KB","MB","GB","TB","PB","EB","ZB","YB"];do{e/=1e3,++t}while(Math.abs(e)>=1e3&&t<i.length-1);return e.toFixed(1)+" "+i[t]}},watch:{file:{handler:function(e){var t=this;this.$nextTick(function(){t.player=new s.a(t.$refs.player,{title:t.file.name,ratio:"16:9",controls:["play-large","restart","play","progress","current-time","duration","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["quality","loop"]})})},deep:!0}},methods:{getFile:function(e,t,i){var a=this;axios.get("/api/files/"+e.params.uuid).then(function(e){a.file=e.data.data,a.name=a.file.name,a.description=a.file.description,a.loaded=!0,a.$nextTick(function(){a.player=new s.a(a.$refs.player,{title:a.file.name,ratio:"16:9",controls:["play-large","restart","play","progress","current-time","duration","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["quality","loop"]})})})},submit:function(){var e=this;axios.patch("/api/files/"+this.file.id,{name:this.name,description:this.description}).then(function(t){e.file.name=e.name,toast("The file's information was successfully updated","success")}).catch(function(e){toast(e.response.data.message,"danger")})},goBack:function(){this.$router.go(-1)},download:function(){var e=this;axios({url:"/api/files/"+this.file.uuid+"/download",method:"GET",responseType:"blob"}).then(function(t){var i=window.URL.createObjectURL(new Blob([t.data])),a=document.createElement("a");a.href=i,a.setAttribute("download",e.file.original),document.body.appendChild(a),a.click()}),toast(this.file.original+" downloaded","success")}},beforeRouteEnter:function(e,t,i){i(function(a){a.getFile(e,t,i)})},beforeRouteUpdate:function(e,t,i){this.getFile(e,t,i),i()}},r=i("KHd+"),l=Object(r.a)(n,function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("portal",{attrs:{to:"title"}},[i("app-title",{attrs:{icon:"image"}},[e._v(e._s(e.loaded?e.file.name:""))])],1),e._v(" "),e.loaded?i("div",{key:e.file.name,staticClass:"row"},[i("div",{staticClass:"content-container"},[i("p-card",[i("div",{staticClass:"flex items-center justify-center"},[e.isImage?i("div",[i("p-img",{staticClass:"rounded",attrs:{src:"/img/placeholder-large.svg","background-color":"#ffffff",lazySrc:e.file.url+"?w=1500&h=1500&fit=max",alt:e.file.description}})],1):e.isVideo?i("div",{staticClass:"w-full"},[i("video",{ref:"player",attrs:{controls:"",crossorigin:""}},[i("source",{attrs:{src:e.file.url,type:e.file.mimetype,size:"576"}})])]):i("div",[i("p-img",{attrs:{src:"/img/"+e.type+"-small.svg","background-color":"#ffffff",width:200,height:200,alt:e.file.description}}),e._v(" "),i("div",{staticClass:"text-center px-6 py-3 rounded border border-gray-400 bg-gray-200 text-gray-800"},[e._v("\n                            No preview available\n                        ")])],1)])]),e._v(" "),e.isVideo?i("p-card",{staticClass:"mt-6 text-center text-sm text-gray-800"},[e._v("\n                If you intend on serving this video on your website, it's highly recommended that you use a 3rd party service such as "),i("a",{attrs:{href:""}},[e._v("Youtube")]),e._v(" or "),i("a",{attrs:{href:""}},[e._v("Vimeo")]),e._v(".\n            ")]):e._e()],1),e._v(" "),i("div",{staticClass:"side-container"},[i("p-card",{staticClass:"mb-6"},[i("form",{attrs:{enctype:"multipart/form-data"},on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[i("portal",{attrs:{to:"actions"}},[i("p-button",{directives:[{name:"modal",rawName:"v-modal:delete",arg:"delete"}],staticClass:"mr-4",attrs:{theme:"danger"}},[e._v("Delete")]),e._v(" "),i("p-button",[e._v("Move")]),e._v(" "),i("p-button",[e._v("Replace")]),e._v(" "),i("p-button",{staticClass:"mr-4",on:{click:function(t){return t.preventDefault(),e.download(t)}}},[e._v("Download")]),e._v(" "),i("p-button",{on:{click:function(t){return t.preventDefault(),e.goBack(t)}}},[e._v("Go Back")]),e._v(" "),i("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save")])],1),e._v(" "),i("p-input",{attrs:{name:"name",label:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),i("p-textarea",{attrs:{name:"description",label:"Description",help:"Describing your file isn't mandatory but is incredibly useful for accessibility."},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}})],1)]),e._v(" "),i("p-card",{staticClass:"mb-6"},[i("p-input",{staticClass:"text-sm",attrs:{name:"share",readonly:"",label:"Share",value:e.file.url}})],1),e._v(" "),e.file?i("p-card",{staticClass:"text-sm"},[i("div",{staticClass:"flex justify-between"},[i("label",{staticClass:"form__label"},[e._v("Size")]),e._v(" "),i("p",[e._v(e._s(e.bytes))])]),e._v(" "),i("div",{staticClass:"flex justify-between"},[i("label",{staticClass:"form__label"},[e._v("Mimetype")]),e._v(" "),i("p",[e._v(e._s(e.file.mimetype))])]),e._v(" "),e.file.width&&e.file.height?i("div",{staticClass:"flex justify-between"},[i("label",{staticClass:"form__label"},[e._v("Dimensions")]),e._v(" "),i("p",[e._v(e._s(e.file.width)+" x "+e._s(e.file.height))])]):e._e(),e._v(" "),i("div",{staticClass:"flex justify-between"},[i("label",{staticClass:"form__label"},[e._v("Last Modified")]),e._v(" "),i("p",[e._v(e._s(e.moment(e.file.created_at.date).format("L")))])])]):e._e()],1)]):e._e(),e._v(" "),i("portal",{attrs:{to:"modals"}},[i("delete-file-modal",{attrs:{file:e.file}})],1)],1)},[],!1,null,null,null);t.default=l.exports}}]);
>>>>>>> 65d413deb616d5e85660e4c8c9e8a2ffbd24e7ae
