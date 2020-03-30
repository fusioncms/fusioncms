(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Toggle/Settings.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Toggle/Settings.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../mixins/fieldtype */ "./resources/js/mixins/fieldtype.js");
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
  name: 'toggle-fieldtype-settings',
  mixins: [_mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Toggle/Settings.vue?vue&type=template&id=5088a42c&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Toggle/Settings.vue?vue&type=template&id=5088a42c& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      _c("p-toggle", {
        attrs: {
          name: "settings.default",
          label: "Default",
          help: "What would you like the default value to be?",
          checked: !!_vm.settings.default,
          "has-error": _vm.errors.has("settings.default"),
          "error-message": _vm.errors.get("settings.default")
        },
        model: {
          value: _vm.settings.default,
          callback: function($$v) {
            _vm.$set(_vm.settings, "default", $$v)
          },
          expression: "settings.default"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/fieldtypes/Toggle/Settings.vue":
/*!*****************************************************!*\
  !*** ./resources/js/fieldtypes/Toggle/Settings.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_5088a42c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=5088a42c& */ "./resources/js/fieldtypes/Toggle/Settings.vue?vue&type=template&id=5088a42c&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/Toggle/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_5088a42c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_5088a42c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/Toggle/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/Toggle/Settings.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/fieldtypes/Toggle/Settings.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Toggle/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/Toggle/Settings.vue?vue&type=template&id=5088a42c&":
/*!************************************************************************************!*\
  !*** ./resources/js/fieldtypes/Toggle/Settings.vue?vue&type=template&id=5088a42c& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_5088a42c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=5088a42c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Toggle/Settings.vue?vue&type=template&id=5088a42c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_5088a42c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_5088a42c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/fieldtype.js":
/*!******************************************!*\
  !*** ./resources/js/mixins/fieldtype.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  computed: {
    settings: function settings() {
      return this.value.settings || {};
    },
    errors: function errors() {
      return this.value.errors || {};
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvVG9nZ2xlL1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Ub2dnbGUvU2V0dGluZ3MudnVlPzgwYmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvVG9nZ2xlL1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Ub2dnbGUvU2V0dGluZ3MudnVlP2FmZTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvVG9nZ2xlL1NldHRpbmdzLnZ1ZT8wNzc1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9taXhpbnMvZmllbGR0eXBlLmpzIl0sIm5hbWVzIjpbInByb3BzIiwidmFsdWUiLCJ0eXBlIiwiT2JqZWN0IiwicmVxdWlyZWQiLCJjb21wdXRlZCIsInNldHRpbmdzIiwiZXJyb3JzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBRUE7QUFDQSxtQ0FEQTtBQUdBO0FBSEEsRzs7Ozs7Ozs7Ozs7O0FDakJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3QkE7QUFBQTtBQUFBO0FBQUE7QUFBdUY7QUFDM0I7QUFDTDs7O0FBR3ZEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQThMLENBQWdCLG9QQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWxOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQWU7QUFDWEEsT0FBSyxFQUFFO0FBQ0hDLFNBQUssRUFBRTtBQUNIQyxVQUFJLEVBQUVDLE1BREg7QUFFSEMsY0FBUSxFQUFFO0FBRlA7QUFESixHQURJO0FBUVhDLFVBQVEsRUFBRTtBQUNOQyxZQURNLHNCQUNLO0FBQ1AsYUFBTyxLQUFLTCxLQUFMLENBQVdLLFFBQVgsSUFBdUIsRUFBOUI7QUFDSCxLQUhLO0FBS05DLFVBTE0sb0JBS0c7QUFDTCxhQUFPLEtBQUtOLEtBQUwsQ0FBV00sTUFBWCxJQUFxQixFQUE1QjtBQUNIO0FBUEs7QUFSQyxDQUFmLEUiLCJmaWxlIjoianMvY2h1bmtzLzQ3LmpzP2lkPTAzNmJjZWI2OTE3OGU0ODM4OGQ3Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwLXRvZ2dsZVxuICAgICAgICAgICAgbmFtZT1cInNldHRpbmdzLmRlZmF1bHRcIlxuICAgICAgICAgICAgbGFiZWw9XCJEZWZhdWx0XCJcbiAgICAgICAgICAgIGhlbHA9XCJXaGF0IHdvdWxkIHlvdSBsaWtlIHRoZSBkZWZhdWx0IHZhbHVlIHRvIGJlP1wiXG4gICAgICAgICAgICA6Y2hlY2tlZD1cIiEhIHNldHRpbmdzLmRlZmF1bHRcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInNldHRpbmdzLmRlZmF1bHRcIlxuICAgICAgICAgICAgOmhhcy1lcnJvcj1cImVycm9ycy5oYXMoJ3NldHRpbmdzLmRlZmF1bHQnKVwiXG4gICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImVycm9ycy5nZXQoJ3NldHRpbmdzLmRlZmF1bHQnKVwiPlxuICAgICAgICA8L3AtdG9nZ2xlPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgZmllbGR0eXBlIGZyb20gJy4uLy4uL21peGlucy9maWVsZHR5cGUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICd0b2dnbGUtZmllbGR0eXBlLXNldHRpbmdzJyxcblxuICAgICAgICBtaXhpbnM6IFtmaWVsZHR5cGVdLFxuICAgIH1cbjwvc2NyaXB0PlxuXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJwLXRvZ2dsZVwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgbmFtZTogXCJzZXR0aW5ncy5kZWZhdWx0XCIsXG4gICAgICAgICAgbGFiZWw6IFwiRGVmYXVsdFwiLFxuICAgICAgICAgIGhlbHA6IFwiV2hhdCB3b3VsZCB5b3UgbGlrZSB0aGUgZGVmYXVsdCB2YWx1ZSB0byBiZT9cIixcbiAgICAgICAgICBjaGVja2VkOiAhIV92bS5zZXR0aW5ncy5kZWZhdWx0LFxuICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5lcnJvcnMuaGFzKFwic2V0dGluZ3MuZGVmYXVsdFwiKSxcbiAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmVycm9ycy5nZXQoXCJzZXR0aW5ncy5kZWZhdWx0XCIpXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5kZWZhdWx0LFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZXR0aW5ncywgXCJkZWZhdWx0XCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3MuZGVmYXVsdFwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDg4YTQyYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTA4OGE0MmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTA4OGE0MmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTA4OGE0MmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDg4YTQyYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1MDg4YTQyYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvVG9nZ2xlL1NldHRpbmdzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTA4OGE0MmMmXCIiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNldHRpbmdzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUuc2V0dGluZ3MgfHwge31cbiAgICAgICAgfSxcblxuICAgICAgICBlcnJvcnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5lcnJvcnMgfHwge31cbiAgICAgICAgfVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9