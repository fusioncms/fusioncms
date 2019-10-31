(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[41],{

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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'color-picker-fieldtype',
  data: function data() {
    return {
      color: {},
      pickr: {},
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
      this.hex = this.color ? this.color.toHEXA().toString() : '';
      this.rgba = this.color ? this.color.toRGBA().toString(0) : '';
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
    }
  },
  mounted: function mounted() {
    var _this = this;

    var defaultColor = this.value === null && this.field.settings["default"] ? this.field.settings["default"] : '';
    this.pickr = _simonwep_pickr__WEBPACK_IMPORTED_MODULE_0___default.a.create({
      el: '.' + this.pickrClass,
      theme: 'monolith',
      "default": this.value && this.value != '' ? this.value : defaultColor,
      swatches: ['#000000', '#FFFFFF', '#F7FAFC', '#EDF2F7', '#E2E8F0', '#CBD5E0', '#A0AEC0', '#718096', '#4A5568', '#2D3748', '#F56565', '#F98C12', '#F6E05E', '#BF7E32', '#48BB78', '#38B2AC', '#4299E1', '#667EEA', '#9F7AEA', '#ED64A6'],
      comparison: true,
      components: {
        opacity: this.transparency,
        hue: true // interaction: {
        //     // hex: true,
        //     // rgba: true,
        //     // input: true,
        //     // clear: true,
        // }

      }
    });

    if (this.value) {
      this.changeColor(this.value);
      this.color = this.pickr.getColor();
      this.pickrChanged(this.color);
    } else if (defaultColor) {
      this.changeColor(defaultColor);
      this.color = this.pickr.getColor();
      this.pickrChanged(this.color);
    }

    this.pickr.on('save', function (color, instance) {
      _this.pickrChanged(color);
    });
    this.pickr.on('change', function (color, instance) {
      _this.pickrChanged(color);
    });
    this.pickr.on('clear', function (instance) {
      _this.pickrChanged(null);
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
      _c("div", { staticClass: "flex items-end" }, [
        _c("div", { staticClass: "flex-grow mr-3" }, [
          _c(
            "label",
            { staticClass: "text-xs", attrs: { for: _vm.pickrClass + "_hex" } },
            [_vm._v("Picker")]
          ),
          _vm._v(" "),
          _c("div", { class: _vm.pickrClass })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "mr-3 flex-grow" }, [
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQ29sb3JQaWNrZXIvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0NvbG9yUGlja2VyL0ZpZWxkLnZ1ZT8zZDM2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0NvbG9yUGlja2VyL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Db2xvclBpY2tlci9GaWVsZC52dWU/YjJkOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Db2xvclBpY2tlci9GaWVsZC52dWU/OGQ1YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0NBO0FBRUE7QUFDQSxnQ0FEQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBLGVBREE7QUFFQSxlQUZBO0FBR0EsY0FIQTtBQUlBLGFBSkE7QUFLQSxjQUxBO0FBTUEscUJBTkE7QUFPQTtBQVBBO0FBU0EsR0FiQTtBQWVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQU1BO0FBQ0EscUJBREE7QUFFQTtBQUZBO0FBTkEsR0FmQTtBQTJCQTtBQUNBLGNBREEsd0JBQ0E7QUFDQTtBQUNBO0FBSEEsR0EzQkE7QUFpQ0E7QUFDQSxnQkFEQSx3QkFDQSxLQURBLEVBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBLEtBUkE7QUFVQSxlQVZBLHVCQVVBLFdBVkEsRUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEEsR0FqQ0E7QUFrREE7QUFDQSxRQURBLGdCQUNBLFdBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBLE9BTEEsZUFLQSxXQUxBLEVBS0E7QUFDQTtBQUNBO0FBUEEsR0FsREE7QUE0REEsU0E1REEscUJBNERBO0FBQUE7O0FBQ0E7QUFFQTtBQUNBLCtCQURBO0FBRUEsdUJBRkE7QUFHQSwyRUFIQTtBQUlBLGlCQUNBLFNBREEsRUFFQSxTQUZBLEVBSUEsU0FKQSxFQUtBLFNBTEEsRUFNQSxTQU5BLEVBT0EsU0FQQSxFQVFBLFNBUkEsRUFTQSxTQVRBLEVBVUEsU0FWQSxFQVdBLFNBWEEsRUFhQSxTQWJBLEVBY0EsU0FkQSxFQWVBLFNBZkEsRUFnQkEsU0FoQkEsRUFpQkEsU0FqQkEsRUFrQkEsU0FsQkEsRUFtQkEsU0FuQkEsRUFvQkEsU0FwQkEsRUFxQkEsU0FyQkEsRUFzQkEsU0F0QkEsQ0FKQTtBQTRCQSxzQkE1QkE7QUE2QkE7QUFDQSxrQ0FEQTtBQUVBLGlCQUZBLENBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQVRBO0FBN0JBOztBQTBDQTtBQUNBO0FBRUE7QUFFQTtBQUNBLEtBTkEsTUFNQTtBQUNBO0FBRUE7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUZBO0FBSUE7QUFDQTtBQUNBLEtBRkE7QUFJQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBbElBLEc7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4QkFBOEI7QUFDbEQsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQTtBQUNBLFNBQVMscUNBQXFDLHdCQUF3QixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixnQ0FBZ0M7QUFDakQsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0EsYUFBYSxpQ0FBaUMsK0JBQStCLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdCQUF3QjtBQUM3QztBQUNBO0FBQ0EsbUJBQW1CLGdDQUFnQztBQUNuRDtBQUNBO0FBQ0EsYUFBYSxpQ0FBaUMsK0JBQStCLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYix1QkFBdUIsaUJBQWlCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLG1CQUFtQiwyQkFBMkI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsdUJBQXVCLGtCQUFrQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xHQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy80MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29sb3ItcGlja2VyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2xhYmVsXCI+e3sgZmllbGQubmFtZSB9fTwvbGFiZWw+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWVuZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWdyb3cgbXItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cInBpY2tyQ2xhc3MgKyAnX2hleCdcIiBjbGFzcz1cInRleHQteHNcIj5QaWNrZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IDpjbGFzcz1cInBpY2tyQ2xhc3NcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItMyBmbGV4LWdyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJwaWNrckNsYXNzICsgJ19oZXgnXCIgY2xhc3M9XCJ0ZXh0LXhzXCI+SGV4PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IDppZD1cInBpY2tyQ2xhc3MgKyAnX2hleCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJwaWNrckNsYXNzICsgJ19oZXgnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybV9fY29udHJvbFwiIFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImhleFwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgtZ3Jvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cInBpY2tyQ2xhc3MgKyAnX3JnYmEnXCIgY2xhc3M9XCJ0ZXh0LXhzXCI+UkdCQTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCA6aWQ9XCJwaWNrckNsYXNzICsgJ19yZ2JhJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6bmFtZT1cInBpY2tyQ2xhc3MgKyAnX3JnYmEnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm1fX2NvbnRyb2xcIiBcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJyZ2JhXCI+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBQaWNrciBmcm9tICdAc2ltb253ZXAvcGlja3InXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdjb2xvci1waWNrZXItZmllbGR0eXBlJyxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2xvcjoge30sXG4gICAgICAgICAgICAgICAgcGlja3I6IHt9LFxuICAgICAgICAgICAgICAgIHJnYmE6ICcnLFxuICAgICAgICAgICAgICAgIGhleDogJycsXG4gICAgICAgICAgICAgICAgY215azogJycsXG4gICAgICAgICAgICAgICAgdXBkYXRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW5jeTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBwaWNrckNsYXNzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpZWxkLmhhbmRsZSArICctcGlja3InXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHBpY2tyQ2hhbmdlZChjb2xvcikge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvclxuXG4gICAgICAgICAgICAgICAgdGhpcy5oZXggPSB0aGlzLmNvbG9yID8gdGhpcy5jb2xvci50b0hFWEEoKS50b1N0cmluZygpIDogJydcbiAgICAgICAgICAgICAgICB0aGlzLnJnYmEgPSB0aGlzLmNvbG9yID8gdGhpcy5jb2xvci50b1JHQkEoKS50b1N0cmluZygwKSA6ICcnXG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMucmdiYSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNoYW5nZUNvbG9yKGNvbG9yU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGlja3Iuc2V0Q29sb3IoY29sb3JTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlja3IuYXBwbHlDb2xvcigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgcmdiYShjb2xvclN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ29sb3IoY29sb3JTdHJpbmcpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoZXgoY29sb3JTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNvbG9yKGNvbG9yU3RyaW5nKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgbGV0IGRlZmF1bHRDb2xvciA9IHRoaXMudmFsdWUgPT09IG51bGwgJiYgdGhpcy5maWVsZC5zZXR0aW5ncy5kZWZhdWx0ID8gdGhpcy5maWVsZC5zZXR0aW5ncy5kZWZhdWx0IDogJydcblxuICAgICAgICAgICAgdGhpcy5waWNrciA9IFBpY2tyLmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgZWw6ICcuJyArIHRoaXMucGlja3JDbGFzcyxcbiAgICAgICAgICAgICAgICB0aGVtZTogJ21vbm9saXRoJyxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiB0aGlzLnZhbHVlICYmIHRoaXMudmFsdWUgIT0gJycgPyB0aGlzLnZhbHVlIDogZGVmYXVsdENvbG9yLFxuICAgICAgICAgICAgICAgIHN3YXRjaGVzOiBbXG4gICAgICAgICAgICAgICAgICAgICcjMDAwMDAwJyxcbiAgICAgICAgICAgICAgICAgICAgJyNGRkZGRkYnLFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgJyNGN0ZBRkMnLFxuICAgICAgICAgICAgICAgICAgICAnI0VERjJGNycsXG4gICAgICAgICAgICAgICAgICAgICcjRTJFOEYwJyxcbiAgICAgICAgICAgICAgICAgICAgJyNDQkQ1RTAnLFxuICAgICAgICAgICAgICAgICAgICAnI0EwQUVDMCcsXG4gICAgICAgICAgICAgICAgICAgICcjNzE4MDk2JyxcbiAgICAgICAgICAgICAgICAgICAgJyM0QTU1NjgnLFxuICAgICAgICAgICAgICAgICAgICAnIzJEMzc0OCcsXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAnI0Y1NjU2NScsXG4gICAgICAgICAgICAgICAgICAgICcjRjk4QzEyJyxcbiAgICAgICAgICAgICAgICAgICAgJyNGNkUwNUUnLFxuICAgICAgICAgICAgICAgICAgICAnI0JGN0UzMicsXG4gICAgICAgICAgICAgICAgICAgICcjNDhCQjc4JyxcbiAgICAgICAgICAgICAgICAgICAgJyMzOEIyQUMnLFxuICAgICAgICAgICAgICAgICAgICAnIzQyOTlFMScsXG4gICAgICAgICAgICAgICAgICAgICcjNjY3RUVBJyxcbiAgICAgICAgICAgICAgICAgICAgJyM5RjdBRUEnLFxuICAgICAgICAgICAgICAgICAgICAnI0VENjRBNicsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBjb21wYXJpc29uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogdGhpcy50cmFuc3BhcmVuY3ksXG4gICAgICAgICAgICAgICAgICAgIGh1ZTogdHJ1ZSxcblxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRlcmFjdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gaGV4OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gcmdiYTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIC8vIGlucHV0OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gY2xlYXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ29sb3IodGhpcy52YWx1ZSlcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB0aGlzLmNvbG9yID0gdGhpcy5waWNrci5nZXRDb2xvcigpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrckNoYW5nZWQodGhpcy5jb2xvcilcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVmYXVsdENvbG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VDb2xvcihkZWZhdWx0Q29sb3IpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGhpcy5jb2xvciA9IHRoaXMucGlja3IuZ2V0Q29sb3IoKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMucGlja3JDaGFuZ2VkKHRoaXMuY29sb3IpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucGlja3Iub24oJ3NhdmUnLCAoY29sb3IsIGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5waWNrckNoYW5nZWQoY29sb3IpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLnBpY2tyLm9uKCdjaGFuZ2UnLCAoY29sb3IsIGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5waWNrckNoYW5nZWQoY29sb3IpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICB0aGlzLnBpY2tyLm9uKCdjbGVhcicsIChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGlja3JDaGFuZ2VkKG51bGwpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2xvci1waWNrZXJcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19ncm91cFwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiwgYXR0cnM6IHsgZm9yOiBfdm0uZmllbGQuaGFuZGxlIH0gfSxcbiAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmZpZWxkLm5hbWUpKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLWVuZFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4LWdyb3cgbXItM1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14c1wiLCBhdHRyczogeyBmb3I6IF92bS5waWNrckNsYXNzICsgXCJfaGV4XCIgfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIlBpY2tlclwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBjbGFzczogX3ZtLnBpY2tyQ2xhc3MgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibXItMyBmbGV4LWdyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQteHNcIiwgYXR0cnM6IHsgZm9yOiBfdm0ucGlja3JDbGFzcyArIFwiX2hleFwiIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJIZXhcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaGV4LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaGV4XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1fX2NvbnRyb2xcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBfdm0ucGlja3JDbGFzcyArIFwiX2hleFwiLFxuICAgICAgICAgICAgICBuYW1lOiBfdm0ucGlja3JDbGFzcyArIFwiX2hleFwiLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uaGV4IH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLmhleCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgtZ3Jvd1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC14c1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IF92bS5waWNrckNsYXNzICsgXCJfcmdiYVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiUkdCQVwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZ2JhLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmdiYVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtX19jb250cm9sXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogX3ZtLnBpY2tyQ2xhc3MgKyBcIl9yZ2JhXCIsXG4gICAgICAgICAgICAgIG5hbWU6IF92bS5waWNrckNsYXNzICsgXCJfcmdiYVwiLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucmdiYSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5yZ2JhID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWE2YWUyYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGFhNmFlMmEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGFhNmFlMmEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGFhNmFlMmEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWE2YWUyYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YWE2YWUyYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQ29sb3JQaWNrZXIvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YWE2YWUyYSZcIiJdLCJzb3VyY2VSb290IjoiIn0=