<<<<<<< HEAD:public/chunks/20.chunk.e230a3f5004401f692e6.js
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Checkbox/Field.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Checkbox/Field.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
  name: 'checkbox-fieldtype',
  mixins: [_mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__["default"]],
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      values: []
    };
  },
  mounted: function mounted() {
    if (!this.value) {
      this.$emit('input', []);
    }

    this.values = _.cloneDeep(this.value);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Checkbox/Field.vue?vue&type=template&id=7ce82c70&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Checkbox/Field.vue?vue&type=template&id=7ce82c70& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
        "p-checkbox-group",
        {
          attrs: {
            name: _vm.field.name,
            label: _vm.field.name,
            help: _vm.field.help,
            inline: _vm.field.settings.display == "row"
          }
        },
        _vm._l(_vm.field.settings.options, function(option) {
          return _c(
            "p-checkbox",
            {
              key: _vm.field.name + option.label,
              attrs: {
                name: _vm.field.name,
                id: option.value,
                "native-value": option.value
              },
              on: {
                input: function($event) {
                  return _vm.$emit("input", _vm.values)
                }
              },
              model: {
                value: _vm.values,
                callback: function($$v) {
                  _vm.values = $$v
                },
                expression: "values"
              }
            },
            [
              [
                _vm._v(
                  "\n                    " +
                    _vm._s(option.label) +
                    "\n                "
                )
              ]
            ],
            2
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/fieldtypes/Checkbox/Field.vue":
/*!****************************************************!*\
  !*** ./resources/js/fieldtypes/Checkbox/Field.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_7ce82c70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=7ce82c70& */ "./resources/js/fieldtypes/Checkbox/Field.vue?vue&type=template&id=7ce82c70&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/Checkbox/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_7ce82c70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_7ce82c70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/Checkbox/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/Checkbox/Field.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/fieldtypes/Checkbox/Field.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Checkbox/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/Checkbox/Field.vue?vue&type=template&id=7ce82c70&":
/*!***********************************************************************************!*\
  !*** ./resources/js/fieldtypes/Checkbox/Field.vue?vue&type=template&id=7ce82c70& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_7ce82c70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=7ce82c70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Checkbox/Field.vue?vue&type=template&id=7ce82c70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_7ce82c70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_7ce82c70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
      required: true
    }
  },
  watch: {
    value: {
      deep: true,
      handler: function handler(value) {
        this.$emit('input', value);
      }
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQ2hlY2tib3gvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0NoZWNrYm94L0ZpZWxkLnZ1ZT83ZjUwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0NoZWNrYm94L0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9DaGVja2JveC9GaWVsZC52dWU/ODllMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9DaGVja2JveC9GaWVsZC52dWU/M2M3MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL2ZpZWxkdHlwZS5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsInZhbHVlIiwicmVxdWlyZWQiLCJ3YXRjaCIsImRlZXAiLCJoYW5kbGVyIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQSw0QkFEQTtBQUdBLHFFQUhBO0FBS0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBTUE7QUFDQSxxQkFEQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBTkEsR0FMQTtBQW1CQSxNQW5CQSxrQkFtQkE7QUFDQTtBQUNBO0FBREE7QUFHQSxHQXZCQTtBQXlCQSxTQXpCQSxxQkF5QkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQS9CQSxHOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZTtBQUNYQSxPQUFLLEVBQUU7QUFDSEMsU0FBSyxFQUFFO0FBQ0hDLGNBQVEsRUFBRTtBQURQO0FBREosR0FESTtBQU9YQyxPQUFLLEVBQUU7QUFDSEYsU0FBSyxFQUFFO0FBQ0hHLFVBQUksRUFBRSxJQURIO0FBRUhDLGFBRkcsbUJBRUtKLEtBRkwsRUFFWTtBQUNYLGFBQUtLLEtBQUwsQ0FBVyxPQUFYLEVBQW9CTCxLQUFwQjtBQUNIO0FBSkU7QUFESjtBQVBJLENBQWYsRSIsImZpbGUiOiJjaHVua3MvMjAuY2h1bmsuZTIzMGEzZjUwMDQ0MDFmNjkyZTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHAtY2hlY2tib3gtZ3JvdXAgXG4gICAgICAgICAgICA6bmFtZT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgOmxhYmVsPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICA6aGVscD1cImZpZWxkLmhlbHBcIlxuICAgICAgICAgICAgOmlubGluZT1cImZpZWxkLnNldHRpbmdzLmRpc3BsYXkgPT0gJ3JvdydcIj5cbiAgICAgICAgICAgICAgICA8cC1jaGVja2JveCA6a2V5PVwiZmllbGQubmFtZSArIG9wdGlvbi5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwib3B0aW9uIGluIGZpZWxkLnNldHRpbmdzLm9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICA6aWQ9XCJvcHRpb24udmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICA6bmF0aXZlLXZhbHVlPVwib3B0aW9uLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInZhbHVlc1wiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dCcsIHZhbHVlcylcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7b3B0aW9uLmxhYmVsfX1cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICA8L3AtY2hlY2tib3g+XG4gICAgICAgIDwvcC1jaGVja2JveC1ncm91cD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IGZpZWxkdHlwZSBmcm9tICcuLi8uLi9taXhpbnMvZmllbGR0eXBlJ1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ2NoZWNrYm94LWZpZWxkdHlwZScsXG5cbiAgICAgICAgbWl4aW5zOiBbZmllbGR0eXBlXSxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBpZighdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgW10pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gXy5jbG9uZURlZXAodGhpcy52YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicC1jaGVja2JveC1ncm91cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5uYW1lLFxuICAgICAgICAgICAgbGFiZWw6IF92bS5maWVsZC5uYW1lLFxuICAgICAgICAgICAgaGVscDogX3ZtLmZpZWxkLmhlbHAsXG4gICAgICAgICAgICBpbmxpbmU6IF92bS5maWVsZC5zZXR0aW5ncy5kaXNwbGF5ID09IFwicm93XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF92bS5fbChfdm0uZmllbGQuc2V0dGluZ3Mub3B0aW9ucywgZnVuY3Rpb24ob3B0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJwLWNoZWNrYm94XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogX3ZtLmZpZWxkLm5hbWUgKyBvcHRpb24ubGFiZWwsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgaWQ6IG9wdGlvbi52YWx1ZSxcbiAgICAgICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiBvcHRpb24udmFsdWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRcIiwgX3ZtLnZhbHVlcylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS52YWx1ZXMsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnZhbHVlcyA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWx1ZXNcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKG9wdGlvbi5sYWJlbCkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Y2U4MmM3MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2NlODJjNzAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2NlODJjNzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2NlODJjNzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Y2U4MmM3MCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3Y2U4MmM3MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQ2hlY2tib3gvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03Y2U4MmM3MCZcIiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICAgICAgaGFuZGxlcih2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{ke3Z:function(t,e,a){"use strict";function n(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors={}}var e,a,s;return e=t,(a=[{key:"has",value:function(t){return this.errors.hasOwnProperty(t)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(t){if(this.errors[t])return this.errors[t][0]}},{key:"record",value:function(t){this.errors=t.errors}},{key:"clear",value:function(t){t?delete this.errors[t]:this.errors={}}}])&&n(e.prototype,a),s&&n(e,s),t}();function i(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}a.d(e,"a",(function(){return r}));var r=function(){function t(e){for(var a in function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.errors=new s,this.originalData=e,e)this[a]=e[a]}var e,a,n;return e=t,(a=[{key:"set",value:function(t,e){this.data[t]=e}},{key:"get",value:function(t){return this.data[t]}},{key:"reset",value:function(){for(var t in this.originalData)this[t]=this.originalData[t];this.errors.clear()}},{key:"data",value:function(){var t={};for(var e in this.originalData)t[e]=this[e];return t}},{key:"post",value:function(t){return this.submit("post",t)}},{key:"patch",value:function(t){return this.submit("patch",t)}},{key:"put",value:function(t){return this.submit("put",t)}},{key:"delete",value:function(t){return this.submit("delete",t)}},{key:"submit",value:function(t,e){var a=this;return new Promise((function(n,s){axios[t](e,a.data()).then((function(t){a.onSuccess(t.data),n(t.data)})).catch((function(t){a.onFailure(t.response.data),s(t.response.data)}))}))}},{key:"onSuccess",value:function(t){}},{key:"onFailure",value:function(t){this.errors.record(t)}}])&&i(e.prototype,a),n&&i(e,n),t}()},ylQw:function(t,e,a){"use strict";a.r(e);var n=a("ke3Z"),s={data:function(){return{matrix:{},page:{},form:{}}},computed:{sections:function(){var t=[],e=[];return this.matrix.fieldset&&(t=_.filter(this.matrix.fieldset.sections,(function(t){return"body"==t.placement})),e=_.filter(this.matrix.fieldset.sections,(function(t){return"sidebar"==t.placement}))),{body:t,sidebar:e}}},methods:{submit:function(){this.form.patch("/api/pages/"+this.matrix.id).then((function(t){toast("Page saved successfully","success")})).catch((function(t){toast(t.response.data.message,"failed")}))},getPage:function(t,e,a){var s=this;axios.get("/api/pages/"+t.params.page).then((function(t){s.matrix=t.data.data.matrix,s.page=t.data.data.page;var e={status:s.page.status};_.forEach(s.matrix.fields,(function(t,a){Vue.set(e,a,s.page[a])})),s.form=new n.a(e)}))}},beforeRouteEnter:function(t,e,a){a((function(n){n.getPage(t,e,a)}))},beforeRouteUpdate:function(t,e,a){this.getPage(t,e,a),a()}},i=a("KHd+"),r=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("portal",{key:t.matrix.handle,attrs:{to:"title"}},[a("app-title",{attrs:{icon:t.matrix.icon||"pencil"}},[t._v(t._s(t.matrix.name))])],1),t._v(" "),a("portal",{attrs:{to:"subtitle"}},[t._v(t._s(t.matrix.description))]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[t.sections.body.length>0?a("p-card",{key:t.matrix.handle},t._l(t.sections.body,(function(e,n){return a("div",{key:e.handle},[a("div",{staticClass:"row"},[a("div",{staticClass:"col xxl:text-right w-full xxl:w-1/3"},[a("div",{staticClass:"xxl:mr-10"},[a("h3",[t._v(t._s(e.name))]),t._v(" "),a("p",{staticClass:"text-sm"},[t._v(t._s(e.description))])])]),t._v(" "),a("div",{staticClass:"col w-full xxl:w-2/3"},t._l(e.fields,(function(e){return a("div",{key:e.handle,staticClass:"form__group"},[a(e.type.id+"-fieldtype",{tag:"component",attrs:{field:e},model:{value:t.form[e.handle],callback:function(a){t.$set(t.form,e.handle,a)},expression:"form[field.handle]"}})],1)})),0)]),t._v(" "),n!==t.sections.body.length-1?a("hr"):t._e()])})),0):a("p-card",{staticClass:"text-center"},[a("p",[t._v("You should configure your Matrix Page with some sections and fields first "),a("fa-icon",{staticClass:"text-emoji",attrs:{icon:["fas","hand-peace"]}})],1),t._v(" "),a("router-link",{staticClass:"button items-center",attrs:{to:"/matrices/manage/"+t.matrix.id}},[a("fa-icon",{staticClass:"mr-2 text-sm",attrs:{icon:["fas","atom-alt"]}}),t._v(" Manage your page")],1)],1)],1)]),t._v(" "),a("div",{staticClass:"side-container"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[a("p-card",[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full"},[a("p-select",{attrs:{name:"status",label:"Status",options:[{label:"Enabled",value:1},{label:"Disabled",value:0}]},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)]),t._v(" "),a("portal",{attrs:{to:"actions"}},[a("router-link",{staticClass:"button mr-3",attrs:{to:{name:"dashboard"}}},[t._v("Go Back")]),t._v(" "),a("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(e){return e.preventDefault(),t.submit(e)}}},[t._v("Save")])],1)],1),t._v(" "),t._l(t.sections.sidebar,(function(e,n){return a("p-card",{key:e.handle,staticClass:"mt-6"},[a("h3",[t._v(t._s(e.name))]),t._v(" "),a("p",{staticClass:"text-sm"},[t._v(t._s(e.description))]),t._v(" "),a("div",{staticClass:"w-full"},t._l(e.fields,(function(e){return a("div",{key:e.handle,staticClass:"form__group"},[a(e.type.id+"-fieldtype",{tag:"component",attrs:{field:e},model:{value:t.form[e.handle],callback:function(a){t.$set(t.form,e.handle,a)},expression:"form[field.handle]"}})],1)})),0)])}))],2)])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);
>>>>>>> f58c01081cfa3d67d47d38dd40d631e5dfa877c4:public/chunks/16.js
