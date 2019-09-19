(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Db2xvclBpY2tlci9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Db2xvclBpY2tlci9GaWVsZC52dWU/YTBhMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0NvbG9yUGlja2VyL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0NvbG9yUGlja2VyL0ZpZWxkLnZ1ZT84Y2RjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvQ29sb3JQaWNrZXIvRmllbGQudnVlPzMxM2MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0E7QUFDQTtBQUNBLGdDQURBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxtQkFGQTtBQUdBLGNBSEE7QUFJQSxhQUpBO0FBS0EsY0FMQTtBQU1BLHFCQU5BO0FBT0E7QUFQQTtBQVNBLEdBYkE7QUFlQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQU5BLEdBZkE7QUEyQkE7QUFDQSxjQURBLHdCQUNBO0FBQ0E7QUFDQTtBQUhBLEdBM0JBO0FBaUNBO0FBQ0EsZ0JBREEsd0JBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBUEE7QUFRQSxlQVJBLHVCQVFBLFdBUkEsRUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsR0FqQ0E7QUFnREE7QUFDQSxRQURBLGdCQUNBLFdBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLE9BSkEsZUFJQSxXQUpBLEVBSUE7QUFDQTtBQUNBLEtBTkE7QUFPQSxRQVBBLGdCQU9BLFdBUEEsRUFPQTtBQUNBO0FBQ0E7QUFUQSxHQWhEQTtBQTREQSxTQTVEQSxxQkE0REE7QUFDQTtBQUNBO0FBRUE7QUFDQSwrQkFEQTtBQUVBLHVCQUZBO0FBR0EscUVBSEE7QUFJQSxvQkFKQTtBQUtBLHVCQUxBO0FBTUEsbUNBTkE7QUFPQTtBQUNBLHFCQURBO0FBRUEscUJBRkE7QUFHQSxnQ0FIQTtBQUlBLGlCQUpBO0FBS0E7QUFDQSxtQkFEQTtBQUVBLG9CQUZBO0FBR0Esb0JBSEE7QUFJQSxxQkFKQTtBQUtBLHVCQUxBO0FBTUE7QUFOQTtBQUxBO0FBUEE7O0FBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FKQSxNQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBLEtBRkE7QUFHQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBQ0E7QUFDQSxLQUZBO0FBR0E7QUEzR0EsRzs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDhCQUE4QjtBQUNsRCxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0EsU0FBUyxxQ0FBcUMsd0JBQXdCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1DQUFtQztBQUNwRCxtQkFBbUIsMkJBQTJCO0FBQzlDLHFCQUFxQix3QkFBd0I7QUFDN0M7QUFDQTtBQUNBLG1CQUFtQixnQ0FBZ0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQSxhQUFhLGlDQUFpQywrQkFBK0IsRUFBRTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLHVCQUF1QixpQkFBaUI7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsbUJBQW1CLDJCQUEyQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYix1QkFBdUIsa0JBQWtCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaklBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFpTSxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FyTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY2h1bmtzLzIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJjb2xvci1waWNrZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX2dyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgOmZvcj1cImZpZWxkLmhhbmRsZVwiIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj57e2ZpZWxkLm5hbWV9fTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItMiBtdC01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwicGlja3JDbGFzc1wiPjwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtci0yIGZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cInBpY2tyQ2xhc3MgKyAnX3JnYmEnXCIgY2xhc3M9XCJ0ZXh0LXhzXCI+UkdCQTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCA6aWQ9XCJwaWNrckNsYXNzICsgJ19yZ2JhJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cInBpY2tyQ2xhc3MgKyAnX3JnYmEnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm1fX2NvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJyZ2JhXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLTIgZmxleC1ncm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwicGlja3JDbGFzcyArICdfaGV4J1wiIGNsYXNzPVwidGV4dC14c1wiPkhleDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCA6aWQ9XCJwaWNrckNsYXNzICsgJ19oZXgnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpuYW1lPVwicGlja3JDbGFzcyArICdfaGV4J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtX19jb250cm9sXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiaGV4XCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cInBpY2tyQ2xhc3MgKyAnX2NteWsnXCIgY2xhc3M9XCJ0ZXh0LXhzXCI+Q01ZSzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCA6aWQ9XCJwaWNrckNsYXNzICsgJ19jbXlrJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cInBpY2tyQ2xhc3MgKyAnX2NteWsnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm1fX2NvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjbXlrXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBQaWNrciBmcm9tICdAc2ltb253ZXAvcGlja3InXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnY29sb3JfcGlja2VyLWZpZWxkdHlwZScsXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IE9iamVjdCxcbiAgICAgICAgICAgICAgICBwaWNrcjogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJnYmE6ICcnLFxuICAgICAgICAgICAgICAgIGhleDogJycsXG4gICAgICAgICAgICAgICAgY215azogJycsXG4gICAgICAgICAgICAgICAgdXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW5jeTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBwaWNrckNsYXNzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpZWxkLmhhbmRsZSArICctcGlja3InXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgcGlja3JDaGFuZ2VkKGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yXG4gICAgICAgICAgICAgICAgdGhpcy5yZ2JhID0gdGhpcy5jb2xvciA/IHRoaXMuY29sb3IudG9SR0JBKCkudG9TdHJpbmcoMCkgOiAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuaGV4ID0gdGhpcy5jb2xvciA/IHRoaXMuY29sb3IudG9IRVhBKCkudG9TdHJpbmcoKSA6ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5jbXlrID0gdGhpcy5jb2xvciA/ICB0aGlzLmNvbG9yLnRvQ01ZSygpLnRvU3RyaW5nKDApIDogJydcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMucmdiYSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGFuZ2VDb2xvcihjb2xvclN0cmluZykge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMucGlja3Iuc2V0Q29sb3IoY29sb3JTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlja3IuYXBwbHlDb2xvcigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgcmdiYShjb2xvclN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ29sb3IoY29sb3JTdHJpbmcpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGV4KGNvbG9yU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VDb2xvcihjb2xvclN0cmluZylcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjbXlrKGNvbG9yU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VDb2xvcihjb2xvclN0cmluZylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICAgICAgbGV0IGRlZmF1bHRDb2xvciA9IHZtLnZhbHVlID09PSBudWxsICYmIHZtLmZpZWxkLnNldHRpbmdzLmRlZmF1bHQgPyB2bS5maWVsZC5zZXR0aW5ncy5kZWZhdWx0IDogbnVsbFxuXG4gICAgICAgICAgICB2bS5waWNrciA9IFBpY2tyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZWw6ICcuJyArIHRoaXMucGlja3JDbGFzcyxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ21vbm9saXRoJyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB2bS52YWx1ZSAmJiB2bS52YWx1ZSAhPSAnJyA/IHZtLnZhbHVlIDogZGVmYXVsdENvbG9yLFxuICAgICAgICAgICAgICAgIHN3YXRjaGVzOiBudWxsLFxuICAgICAgICAgICAgICAgIGNvbXBhcmlzb246IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHRSZXByZXNlbnRhdGlvbjogJ1JHQkEnLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgcGFsZXR0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldzogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogdm0udHJhbnNwYXJlbmN5LFxuICAgICAgICAgICAgICAgICAgICBodWU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZXg6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICByZ2JhOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY215azogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZih2bS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHZtLmNoYW5nZUNvbG9yKHZtLnZhbHVlKVxuICAgICAgICAgICAgICAgIHZtLmNvbG9yID0gdm0ucGlja3IuZ2V0Q29sb3IoKVxuICAgICAgICAgICAgICAgIHZtLnBpY2tyQ2hhbmdlZCh2bS5jb2xvcilcbiAgICAgICAgICAgIH0gZWxzZSBpZihkZWZhdWx0Q29sb3IpIHtcbiAgICAgICAgICAgICAgICB2bS5jaGFuZ2VDb2xvcihkZWZhdWx0Q29sb3IpXG4gICAgICAgICAgICAgICAgdm0uY29sb3IgPSB2bS5waWNrci5nZXRDb2xvcigpXG4gICAgICAgICAgICAgICAgdm0ucGlja3JDaGFuZ2VkKHZtLmNvbG9yKVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHZtLnBpY2tyLm9uKCdzYXZlJywgKGNvbG9yLCBpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZtLnBpY2tyQ2hhbmdlZChjb2xvcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB2bS5waWNrci5vbignY2hhbmdlJywgKGNvbG9yLCBpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIHZtLnBpY2tyQ2hhbmdlZChjb2xvcilcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB2bS5waWNrci5vbignY2xlYXInLCBpbnN0YW5jZSA9PiB7XG4gICAgICAgICAgICAgICAgdm0ucGlja3JDaGFuZ2VkKG51bGwpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xvci1waWNrZXJcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19ncm91cFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiwgYXR0cnM6IHsgZm9yOiBfdm0uZmllbGQuaGFuZGxlIH0gfSxcbiAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmZpZWxkLm5hbWUpKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLWNlbnRlclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtci0yIG10LTVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBjbGFzczogX3ZtLnBpY2tyQ2xhc3MgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXItMiBmbGV4LWdyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBfdm0ucGlja3JDbGFzcyArIFwiX3JnYmFcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlJHQkFcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmdiYSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJnYmFcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fY29udHJvbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IF92bS5waWNrckNsYXNzICsgXCJfcmdiYVwiLFxuICAgICAgICAgICAgICBuYW1lOiBfdm0ucGlja3JDbGFzcyArIFwiX3JnYmFcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnJnYmEgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0ucmdiYSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1yLTIgZmxleC1ncm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzXCIsIGF0dHJzOiB7IGZvcjogX3ZtLnBpY2tyQ2xhc3MgKyBcIl9oZXhcIiB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiSGV4XCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmhleCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImhleFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtX19jb250cm9sXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogX3ZtLnBpY2tyQ2xhc3MgKyBcIl9oZXhcIixcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLnBpY2tyQ2xhc3MgKyBcIl9oZXhcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmhleCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5oZXggPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4LWdyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBfdm0ucGlja3JDbGFzcyArIFwiX2NteWtcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkNNWUtcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY215ayxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNteWtcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fY29udHJvbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IF92bS5waWNrckNsYXNzICsgXCJfY215a1wiLFxuICAgICAgICAgICAgICBuYW1lOiBfdm0ucGlja3JDbGFzcyArIFwiX2NteWtcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNteWsgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uY215ayA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBkMDUwOTcmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvZnVzaW9uY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIwZDA1MDk3JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIwZDA1MDk3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIwZDA1MDk3JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBkMDUwOTcmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjBkMDUwOTcnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvQ29sb3JQaWNrZXIvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGQwNTA5NyZcIiJdLCJzb3VyY2VSb290IjoiIn0=