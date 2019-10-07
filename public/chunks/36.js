(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[36],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @simonwep/pickr */ "./node_modules/@simonwep/pickr/dist/pickr.min.js");
/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr__WEBPACK_IMPORTED_MODULE_0__);
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
  name: 'color_picker-fieldtype',
  data: function data() {
    return {
      color: Object,
      pickr: Object,
      rgba: '',
      hex: '',
      cmyk: '',
      updating: false,
      transparency: true
    };
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      "default": ''
    }
  },
  computed: {
    pickrClass: function pickrClass() {
      return this.field.handle + '-pickr';
    }
  },
  methods: {
    pickrChanged: function pickrChanged(color) {
      this.color = color;
      this.rgba = this.color ? this.color.toRGBA().toString(0) : '';
      this.hex = this.color ? this.color.toHEXA().toString() : '';
      this.cmyk = this.color ? this.color.toCMYK().toString(0) : '';
      this.$emit('input', this.rgba);
    },
    changeColor: function changeColor(colorString) {
      if (this.pickr.setColor(colorString)) {
        this.pickr.applyColor();
      }
    }
  },
  watch: {
    rgba: function rgba(colorString) {
      this.changeColor(colorString);
    },
    hex: function hex(colorString) {
      this.changeColor(colorString);
    },
    cmyk: function cmyk(colorString) {
      this.changeColor(colorString);
    }
  },
  mounted: function mounted() {
    var vm = this;
    var defaultColor = vm.value === null && vm.field.settings["default"] ? vm.field.settings["default"] : null;
    vm.pickr = _simonwep_pickr__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      el: '.' + this.pickrClass,
      theme: 'monolith',
      "default": vm.value && vm.value != '' ? vm.value : defaultColor,
      swatches: null,
      comparison: false,
      defaultRepresentation: 'RGBA',
      components: {
        palette: true,
        preview: true,
        opacity: vm.transparency,
        hue: true,
        interaction: {
          hex: true,
          rgba: true,
          cmyk: true,
          input: true,
          cancel: false,
          clear: true
        }
      }
    });

    if (vm.value) {
      vm.changeColor(vm.value);
      vm.color = vm.pickr.getColor();
      vm.pickrChanged(vm.color);
    } else if (defaultColor) {
      vm.changeColor(defaultColor);
      vm.color = vm.pickr.getColor();
      vm.pickrChanged(vm.color);
    }

    vm.pickr.on('save', function (color, instance) {
      vm.pickrChanged(color);
    });
    vm.pickr.on('change', function (color, instance) {
      vm.pickrChanged(color);
    });
    vm.pickr.on('clear', function (instance) {
      vm.pickrChanged(null);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/ColorPicker/Field.vue?vue&type=template&id=4aa6ae2a&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/ColorPicker/Field.vue?vue&type=template&id=4aa6ae2a& ***!
  \********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "color-picker" }, [
    _c("div", { staticClass: "form__group" }, [
      _c(
        "label",
        { staticClass: "form__label", attrs: { for: _vm.field.handle } },
        [_vm._v(_vm._s(_vm.field.name))]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "flex items-center" }, [
        _c("div", { staticClass: "mr-2 mt-5" }, [
          _c("div", { class: _vm.pickrClass })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mr-2 flex-grow" }, [
          _c(
            "label",
            {
              staticClass: "text-xs",
              attrs: { for: _vm.pickrClass + "_rgba" }
            },
            [_vm._v("RGBA")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.rgba,
                expression: "rgba"
              }
            ],
            staticClass: "form__control",
            attrs: {
              id: _vm.pickrClass + "_rgba",
              name: _vm.pickrClass + "_rgba",
              type: "text"
            },
            domProps: { value: _vm.rgba },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.rgba = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mr-2 flex-grow" }, [
          _c(
            "label",
            { staticClass: "text-xs", attrs: { for: _vm.pickrClass + "_hex" } },
            [_vm._v("Hex")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.hex,
                expression: "hex"
              }
            ],
            staticClass: "form__control",
            attrs: {
              id: _vm.pickrClass + "_hex",
              name: _vm.pickrClass + "_hex",
              type: "text"
            },
            domProps: { value: _vm.hex },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.hex = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex-grow" }, [
          _c(
            "label",
            {
              staticClass: "text-xs",
              attrs: { for: _vm.pickrClass + "_cmyk" }
            },
            [_vm._v("CMYK")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.cmyk,
                expression: "cmyk"
              }
            ],
            staticClass: "form__control",
            attrs: {
              id: _vm.pickrClass + "_cmyk",
              name: _vm.pickrClass + "_cmyk",
              type: "text"
            },
            domProps: { value: _vm.cmyk },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.cmyk = $event.target.value
              }
            }
          })
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/fieldtypes/ColorPicker/Field.vue":
/*!*******************************************************!*\
  !*** ./resources/js/fieldtypes/ColorPicker/Field.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_4aa6ae2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=4aa6ae2a& */ "./resources/js/fieldtypes/ColorPicker/Field.vue?vue&type=template&id=4aa6ae2a&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_4aa6ae2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_4aa6ae2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/ColorPicker/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/ColorPicker/Field.vue?vue&type=template&id=4aa6ae2a&":
/*!**************************************************************************************!*\
  !*** ./resources/js/fieldtypes/ColorPicker/Field.vue?vue&type=template&id=4aa6ae2a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_4aa6ae2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=4aa6ae2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/ColorPicker/Field.vue?vue&type=template&id=4aa6ae2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_4aa6ae2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_4aa6ae2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQ29sb3JQaWNrZXIvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0NvbG9yUGlja2VyL0ZpZWxkLnZ1ZT8zZDM2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0NvbG9yUGlja2VyL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Db2xvclBpY2tlci9GaWVsZC52dWU/YjJkOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Db2xvclBpY2tlci9GaWVsZC52dWU/OGQ1YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQTtBQUNBO0FBQ0EsZ0NBREE7QUFHQSxNQUhBLGtCQUdBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLG1CQUZBO0FBR0EsY0FIQTtBQUlBLGFBSkE7QUFLQSxjQUxBO0FBTUEscUJBTkE7QUFPQTtBQVBBO0FBU0EsR0FiQTtBQWVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQU1BO0FBQ0EscUJBREE7QUFFQTtBQUZBO0FBTkEsR0FmQTtBQTJCQTtBQUNBLGNBREEsd0JBQ0E7QUFDQTtBQUNBO0FBSEEsR0EzQkE7QUFpQ0E7QUFDQSxnQkFEQSx3QkFDQSxLQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FQQTtBQVFBLGVBUkEsdUJBUUEsV0FSQSxFQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxHQWpDQTtBQWdEQTtBQUNBLFFBREEsZ0JBQ0EsV0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUEsT0FKQSxlQUlBLFdBSkEsRUFJQTtBQUNBO0FBQ0EsS0FOQTtBQU9BLFFBUEEsZ0JBT0EsV0FQQSxFQU9BO0FBQ0E7QUFDQTtBQVRBLEdBaERBO0FBNERBLFNBNURBLHFCQTREQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLCtCQURBO0FBRUEsdUJBRkE7QUFHQSxxRUFIQTtBQUlBLG9CQUpBO0FBS0EsdUJBTEE7QUFNQSxtQ0FOQTtBQU9BO0FBQ0EscUJBREE7QUFFQSxxQkFGQTtBQUdBLGdDQUhBO0FBSUEsaUJBSkE7QUFLQTtBQUNBLG1CQURBO0FBRUEsb0JBRkE7QUFHQSxvQkFIQTtBQUlBLHFCQUpBO0FBS0EsdUJBTEE7QUFNQTtBQU5BO0FBTEE7QUFQQTs7QUF1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFHQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUFDQTtBQUNBLEtBRkE7QUFHQTtBQTNHQSxHOzs7Ozs7Ozs7Ozs7QUN2Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsOEJBQThCO0FBQ2xELGVBQWUsNkJBQTZCO0FBQzVDO0FBQ0E7QUFDQSxTQUFTLHFDQUFxQyx3QkFBd0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BELG1CQUFtQiwyQkFBMkI7QUFDOUMscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYix1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBLGFBQWEsaUNBQWlDLCtCQUErQixFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqSUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvMzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbG9yLXBpY2tlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZmllbGQuaGFuZGxlXCIgY2xhc3M9XCJmb3JtX19sYWJlbFwiPnt7ZmllbGQubmFtZX19PC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci0yIG10LTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiA6Y2xhc3M9XCJwaWNrckNsYXNzXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLTIgZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwicGlja3JDbGFzcyArICdfcmdiYSdcIiBjbGFzcz1cInRleHQteHNcIj5SR0JBPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IDppZD1cInBpY2tyQ2xhc3MgKyAnX3JnYmEnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwicGlja3JDbGFzcyArICdfcmdiYSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybV9fY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInJnYmFcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItMiBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJwaWNrckNsYXNzICsgJ19oZXgnXCIgY2xhc3M9XCJ0ZXh0LXhzXCI+SGV4PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IDppZD1cInBpY2tyQ2xhc3MgKyAnX2hleCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJwaWNrckNsYXNzICsgJ19oZXgnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm1fX2NvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJoZXhcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwicGlja3JDbGFzcyArICdfY215aydcIiBjbGFzcz1cInRleHQteHNcIj5DTVlLPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IDppZD1cInBpY2tyQ2xhc3MgKyAnX2NteWsnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwicGlja3JDbGFzcyArICdfY215aydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybV9fY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNteWtcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFBpY2tyIGZyb20gJ0BzaW1vbndlcC9waWNrcidcbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdjb2xvcl9waWNrZXItZmllbGR0eXBlJyxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHBpY2tyOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmdiYTogJycsXG4gICAgICAgICAgICAgICAgaGV4OiAnJyxcbiAgICAgICAgICAgICAgICBjbXlrOiAnJyxcbiAgICAgICAgICAgICAgICB1cGRhdGluZzogZmFsc2UsXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbmN5OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHBpY2tyQ2xhc3MoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQuaGFuZGxlICsgJy1waWNrcidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBwaWNrckNoYW5nZWQoY29sb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3JcbiAgICAgICAgICAgICAgICB0aGlzLnJnYmEgPSB0aGlzLmNvbG9yID8gdGhpcy5jb2xvci50b1JHQkEoKS50b1N0cmluZygwKSA6ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5oZXggPSB0aGlzLmNvbG9yID8gdGhpcy5jb2xvci50b0hFWEEoKS50b1N0cmluZygpIDogJydcbiAgICAgICAgICAgICAgICB0aGlzLmNteWsgPSB0aGlzLmNvbG9yID8gIHRoaXMuY29sb3IudG9DTVlLKCkudG9TdHJpbmcoMCkgOiAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5yZ2JhKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNoYW5nZUNvbG9yKGNvbG9yU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5waWNrci5zZXRDb2xvcihjb2xvclN0cmluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5waWNrci5hcHBseUNvbG9yKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICByZ2JhKGNvbG9yU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VDb2xvcihjb2xvclN0cmluZylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoZXgoY29sb3JTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNvbG9yKGNvbG9yU3RyaW5nKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNteWsoY29sb3JTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNvbG9yKGNvbG9yU3RyaW5nKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgICAgICBsZXQgZGVmYXVsdENvbG9yID0gdm0udmFsdWUgPT09IG51bGwgJiYgdm0uZmllbGQuc2V0dGluZ3MuZGVmYXVsdCA/IHZtLmZpZWxkLnNldHRpbmdzLmRlZmF1bHQgOiBudWxsXG5cbiAgICAgICAgICAgIHZtLnBpY2tyID0gUGlja3IuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICBlbDogJy4nICsgdGhpcy5waWNrckNsYXNzLFxuICAgICAgICAgICAgICAgIHRoZW1lOiAnbW9ub2xpdGgnLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHZtLnZhbHVlICYmIHZtLnZhbHVlICE9ICcnID8gdm0udmFsdWUgOiBkZWZhdWx0Q29sb3IsXG4gICAgICAgICAgICAgICAgc3dhdGNoZXM6IG51bGwsXG4gICAgICAgICAgICAgICAgY29tcGFyaXNvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdFJlcHJlc2VudGF0aW9uOiAnUkdCQScsXG4gICAgICAgICAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICAgICBwYWxldHRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBwcmV2aWV3OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiB2bS50cmFuc3BhcmVuY3ksXG4gICAgICAgICAgICAgICAgICAgIGh1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhleDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJnYmE6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbXlrOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGlmKHZtLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdm0uY2hhbmdlQ29sb3Iodm0udmFsdWUpXG4gICAgICAgICAgICAgICAgdm0uY29sb3IgPSB2bS5waWNrci5nZXRDb2xvcigpXG4gICAgICAgICAgICAgICAgdm0ucGlja3JDaGFuZ2VkKHZtLmNvbG9yKVxuICAgICAgICAgICAgfSBlbHNlIGlmKGRlZmF1bHRDb2xvcikge1xuICAgICAgICAgICAgICAgIHZtLmNoYW5nZUNvbG9yKGRlZmF1bHRDb2xvcilcbiAgICAgICAgICAgICAgICB2bS5jb2xvciA9IHZtLnBpY2tyLmdldENvbG9yKClcbiAgICAgICAgICAgICAgICB2bS5waWNrckNoYW5nZWQodm0uY29sb3IpXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgdm0ucGlja3Iub24oJ3NhdmUnLCAoY29sb3IsIGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdm0ucGlja3JDaGFuZ2VkKGNvbG9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHZtLnBpY2tyLm9uKCdjaGFuZ2UnLCAoY29sb3IsIGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdm0ucGlja3JDaGFuZ2VkKGNvbG9yKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHZtLnBpY2tyLm9uKCdjbGVhcicsIGluc3RhbmNlID0+IHtcbiAgICAgICAgICAgICAgICB2bS5waWNrckNoYW5nZWQobnVsbClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbG9yLXBpY2tlclwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2dyb3VwXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiLCBhdHRyczogeyBmb3I6IF92bS5maWVsZC5oYW5kbGUgfSB9LFxuICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZmllbGQubmFtZSkpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtY2VudGVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTIgbXQtNVwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IGNsYXNzOiBfdm0ucGlja3JDbGFzcyB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtci0yIGZsZXgtZ3Jvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC14c1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IF92bS5waWNrckNsYXNzICsgXCJfcmdiYVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiUkdCQVwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZ2JhLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmdiYVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtX19jb250cm9sXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogX3ZtLnBpY2tyQ2xhc3MgKyBcIl9yZ2JhXCIsXG4gICAgICAgICAgICAgIG5hbWU6IF92bS5waWNrckNsYXNzICsgXCJfcmdiYVwiLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucmdiYSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5yZ2JhID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXItMiBmbGV4LWdyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQteHNcIiwgYXR0cnM6IHsgZm9yOiBfdm0ucGlja3JDbGFzcyArIFwiX2hleFwiIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJIZXhcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaGV4LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaGV4XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1fX2NvbnRyb2xcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBfdm0ucGlja3JDbGFzcyArIFwiX2hleFwiLFxuICAgICAgICAgICAgICBuYW1lOiBfdm0ucGlja3JDbGFzcyArIFwiX2hleFwiLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uaGV4IH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLmhleCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgtZ3Jvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC14c1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IF92bS5waWNrckNsYXNzICsgXCJfY215a1wiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiQ01ZS1wiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jbXlrLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY215a1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtX19jb250cm9sXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogX3ZtLnBpY2tyQ2xhc3MgKyBcIl9jbXlrXCIsXG4gICAgICAgICAgICAgIG5hbWU6IF92bS5waWNrckNsYXNzICsgXCJfY215a1wiLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uY215ayB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5jbXlrID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWE2YWUyYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGFhNmFlMmEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGFhNmFlMmEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGFhNmFlMmEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWE2YWUyYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YWE2YWUyYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQ29sb3JQaWNrZXIvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWE2YWUyYSZcIiJdLCJzb3VyY2VSb290IjoiIn0=