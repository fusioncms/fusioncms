(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=template&id=20d05097&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=template&id=20d05097& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
      _c("label", { attrs: { for: _vm.field.handle } }, [
        _vm._v(_vm._s(_vm.field.name))
      ]),
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

/***/ "./resources/js/components/Fieldtypes/ColorPicker/Field.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/ColorPicker/Field.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_20d05097___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=20d05097& */ "./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=template&id=20d05097&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_20d05097___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_20d05097___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/ColorPicker/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=template&id=20d05097&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=template&id=20d05097& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_20d05097___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=20d05097& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/ColorPicker/Field.vue?vue&type=template&id=20d05097&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_20d05097___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_20d05097___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Db2xvclBpY2tlci9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Db2xvclBpY2tlci9GaWVsZC52dWU/YTBhMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0NvbG9yUGlja2VyL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0NvbG9yUGlja2VyL0ZpZWxkLnZ1ZT84Y2RjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvQ29sb3JQaWNrZXIvRmllbGQudnVlPzMxM2MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0E7QUFDQTtBQUNBLGdDQURBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxtQkFGQTtBQUdBLGNBSEE7QUFJQSxhQUpBO0FBS0EsY0FMQTtBQU1BLHFCQU5BO0FBT0E7QUFQQTtBQVNBLEdBYkE7QUFlQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQU5BLEdBZkE7QUEyQkE7QUFDQSxjQURBLHdCQUNBO0FBQ0E7QUFDQTtBQUhBLEdBM0JBO0FBaUNBO0FBQ0EsZ0JBREEsd0JBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7QUFRQSxlQVJBLHVCQVFBLFdBUkEsRUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsR0FqQ0E7QUFnREE7QUFDQSxRQURBLGdCQUNBLFdBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLE9BSkEsZUFJQSxXQUpBLEVBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxRQVBBLGdCQU9BLFdBUEEsRUFPQTtBQUNBO0FBQ0E7QUFUQSxHQWhEQTtBQTREQSxTQTVEQSxxQkE0REE7QUFDQTtBQUNBO0FBRUE7QUFDQSwrQkFEQTtBQUVBLHVCQUZBO0FBR0EscUVBSEE7QUFJQSxvQkFKQTtBQUtBLHVCQUxBO0FBTUEsbUNBTkE7QUFPQTtBQUNBLHFCQURBO0FBRUEscUJBRkE7QUFHQSxnQ0FIQTtBQUlBLGlCQUpBO0FBS0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBO0FBR0Esb0JBSEE7QUFJQSxxQkFKQTtBQUtBLHVCQUxBO0FBTUE7QUFOQTtBQUxBO0FBUEE7O0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBLEtBRkE7QUFHQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUEzR0EsRzs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRCxlQUFlLDZCQUE2QjtBQUM1QyxtQkFBbUIsU0FBUyx3QkFBd0IsRUFBRTtBQUN0RDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUNBQW1DO0FBQ3BELG1CQUFtQiwyQkFBMkI7QUFDOUMscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYix1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBLGFBQWEsaUNBQWlDLCtCQUErQixFQUFFO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsdUJBQXVCLGlCQUFpQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxtQkFBbUIsMkJBQTJCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QixrQkFBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMvSEE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWlNLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbG9yLXBpY2tlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiZmllbGQuaGFuZGxlXCI+e3tmaWVsZC5uYW1lfX08L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLTIgbXQtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cInBpY2tyQ2xhc3NcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItMiBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJwaWNrckNsYXNzICsgJ19yZ2JhJ1wiIGNsYXNzPVwidGV4dC14c1wiPlJHQkE8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgOmlkPVwicGlja3JDbGFzcyArICdfcmdiYSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJwaWNrckNsYXNzICsgJ19yZ2JhJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtX19jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicmdiYVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci0yIGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cInBpY2tyQ2xhc3MgKyAnX2hleCdcIiBjbGFzcz1cInRleHQteHNcIj5IZXg8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgOmlkPVwicGlja3JDbGFzcyArICdfaGV4J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cInBpY2tyQ2xhc3MgKyAnX2hleCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybV9fY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImhleFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJwaWNrckNsYXNzICsgJ19jbXlrJ1wiIGNsYXNzPVwidGV4dC14c1wiPkNNWUs8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgOmlkPVwicGlja3JDbGFzcyArICdfY215aydcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJwaWNrckNsYXNzICsgJ19jbXlrJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtX19jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiY215a1wiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgUGlja3IgZnJvbSAnQHNpbW9ud2VwL3BpY2tyJ1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ2NvbG9yX3BpY2tlci1maWVsZHR5cGUnLFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcGlja3I6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZ2JhOiAnJyxcbiAgICAgICAgICAgICAgICBoZXg6ICcnLFxuICAgICAgICAgICAgICAgIGNteWs6ICcnLFxuICAgICAgICAgICAgICAgIHVwZGF0aW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVuY3k6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgcGlja3JDbGFzcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maWVsZC5oYW5kbGUgKyAnLXBpY2tyJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHBpY2tyQ2hhbmdlZChjb2xvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvclxuICAgICAgICAgICAgICAgIHRoaXMucmdiYSA9IHRoaXMuY29sb3IgPyB0aGlzLmNvbG9yLnRvUkdCQSgpLnRvU3RyaW5nKDApIDogJydcbiAgICAgICAgICAgICAgICB0aGlzLmhleCA9IHRoaXMuY29sb3IgPyB0aGlzLmNvbG9yLnRvSEVYQSgpLnRvU3RyaW5nKCkgOiAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuY215ayA9IHRoaXMuY29sb3IgPyAgdGhpcy5jb2xvci50b0NNWUsoKS50b1N0cmluZygwKSA6ICcnXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLnJnYmEpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hhbmdlQ29sb3IoY29sb3JTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnBpY2tyLnNldENvbG9yKGNvbG9yU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tyLmFwcGx5Q29sb3IoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIHJnYmEoY29sb3JTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNvbG9yKGNvbG9yU3RyaW5nKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhleChjb2xvclN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ29sb3IoY29sb3JTdHJpbmcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY215ayhjb2xvclN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ29sb3IoY29sb3JTdHJpbmcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgICAgIGxldCBkZWZhdWx0Q29sb3IgPSB2bS52YWx1ZSA9PT0gbnVsbCAmJiB2bS5maWVsZC5zZXR0aW5ncy5kZWZhdWx0ID8gdm0uZmllbGQuc2V0dGluZ3MuZGVmYXVsdCA6IG51bGxcblxuICAgICAgICAgICAgdm0ucGlja3IgPSBQaWNrci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIGVsOiAnLicgKyB0aGlzLnBpY2tyQ2xhc3MsXG4gICAgICAgICAgICAgICAgdGhlbWU6ICdtb25vbGl0aCcsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogdm0udmFsdWUgJiYgdm0udmFsdWUgIT0gJycgPyB2bS52YWx1ZSA6IGRlZmF1bHRDb2xvcixcbiAgICAgICAgICAgICAgICBzd2F0Y2hlczogbnVsbCxcbiAgICAgICAgICAgICAgICBjb21wYXJpc29uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0UmVwcmVzZW50YXRpb246ICdSR0JBJyxcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhbGV0dGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByZXZpZXc6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IHZtLnRyYW5zcGFyZW5jeSxcbiAgICAgICAgICAgICAgICAgICAgaHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGV4OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmdiYTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNteWs6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgaWYodm0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2bS5jaGFuZ2VDb2xvcih2bS52YWx1ZSlcbiAgICAgICAgICAgICAgICB2bS5jb2xvciA9IHZtLnBpY2tyLmdldENvbG9yKClcbiAgICAgICAgICAgICAgICB2bS5waWNrckNoYW5nZWQodm0uY29sb3IpXG4gICAgICAgICAgICB9IGVsc2UgaWYoZGVmYXVsdENvbG9yKSB7XG4gICAgICAgICAgICAgICAgdm0uY2hhbmdlQ29sb3IoZGVmYXVsdENvbG9yKVxuICAgICAgICAgICAgICAgIHZtLmNvbG9yID0gdm0ucGlja3IuZ2V0Q29sb3IoKVxuICAgICAgICAgICAgICAgIHZtLnBpY2tyQ2hhbmdlZCh2bS5jb2xvcilcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICB2bS5waWNrci5vbignc2F2ZScsIChjb2xvciwgaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICB2bS5waWNrckNoYW5nZWQoY29sb3IpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdm0ucGlja3Iub24oJ2NoYW5nZScsIChjb2xvciwgaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICB2bS5waWNrckNoYW5nZWQoY29sb3IpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgdm0ucGlja3Iub24oJ2NsZWFyJywgaW5zdGFuY2UgPT4ge1xuICAgICAgICAgICAgICAgIHZtLnBpY2tyQ2hhbmdlZChudWxsKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sb3ItcGlja2VyXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZ3JvdXBcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBfdm0uZmllbGQuaGFuZGxlIH0gfSwgW1xuICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5maWVsZC5uYW1lKSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXJcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXItMiBtdC01XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgY2xhc3M6IF92bS5waWNrckNsYXNzIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTIgZmxleC1ncm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogX3ZtLnBpY2tyQ2xhc3MgKyBcIl9yZ2JhXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJSR0JBXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJnYmEsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZ2JhXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1fX2NvbnRyb2xcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBfdm0ucGlja3JDbGFzcyArIFwiX3JnYmFcIixcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLnBpY2tyQ2xhc3MgKyBcIl9yZ2JhXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5yZ2JhIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLnJnYmEgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtci0yIGZsZXgtZ3Jvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14c1wiLCBhdHRyczogeyBmb3I6IF92bS5waWNrckNsYXNzICsgXCJfaGV4XCIgfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIkhleFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5oZXgsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJoZXhcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fY29udHJvbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IF92bS5waWNrckNsYXNzICsgXCJfaGV4XCIsXG4gICAgICAgICAgICAgIG5hbWU6IF92bS5waWNrckNsYXNzICsgXCJfaGV4XCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5oZXggfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uaGV4ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleC1ncm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogX3ZtLnBpY2tyQ2xhc3MgKyBcIl9jbXlrXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJDTVlLXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNteWssXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjbXlrXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1fX2NvbnRyb2xcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBfdm0ucGlja3JDbGFzcyArIFwiX2NteWtcIixcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLnBpY2tyQ2xhc3MgKyBcIl9jbXlrXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5jbXlrIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLmNteWsgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwZDA1MDk3JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjBkMDUwOTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjBkMDUwOTcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGQwNTA5NyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMGQwNTA5NycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Db2xvclBpY2tlci9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwZDA1MDk3JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==