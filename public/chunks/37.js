(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_0__);
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
  name: 'datetime-fieldtype',
  data: function data() {
    return {
      datetime: '',
      flatpickr: null
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
  methods: {
    emitEvent: function emitEvent(selectedDates, dateStr, instance) {
      this.$emit('input', dateStr);
    }
  },
  mounted: function mounted() {
    this.datetime = this.value;
    this.flatpickr = flatpickr__WEBPACK_IMPORTED_MODULE_0___default()('#flatpickr_' + this.field.handle, {
      altInput: true,
      enableTime: this.field.settings.time,
      altFormat: this.field.settings.format || 'Y-m-d',
      minuteIncrement: 1,
      allowInput: false,
      clickOpens: false,
      defaultDate: this.value,
      onChange: this.emitEvent,
      onValueUpdate: this.inputChanged
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "datetime" }, [
    _c(
      "label",
      { staticClass: "form__label", attrs: { for: _vm.field.handle } },
      [_vm._v(_vm._s(_vm.field.name))]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "flex" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.datetime,
            expression: "datetime"
          }
        ],
        staticClass: "datetime__input form__control mr-2",
        attrs: {
          id: "flatpickr_" + _vm.field.handle,
          name: _vm.field.handle,
          help: _vm.field.help,
          placeholder: _vm.field.settings.placeholder
        },
        domProps: { value: _vm.datetime },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.datetime = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "datetime__button button button--primary px-4",
          attrs: { href: "#" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.flatpickr.open()
            }
          }
        },
        [_c("fa-icon", { attrs: { icon: "calendar-alt" } })],
        1
      )
    ]),
    _vm._v(" "),
    _vm.field.help
      ? _c("div", { staticClass: "form__control--meta" }, [
          _c("div", { staticClass: "form__help" }, [
            _c("span", { domProps: { innerHTML: _vm._s(_vm.field.help) } })
          ])
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Fieldtypes/DateTime/Field.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/DateTime/Field.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=95dce20a& */ "./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/DateTime/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=95dce20a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/DateTime/Field.vue?vue&type=template&id=95dce20a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_95dce20a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWU/NzlhYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0RhdGVUaW1lL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0RhdGVUaW1lL0ZpZWxkLnZ1ZT9iOThhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvRGF0ZVRpbWUvRmllbGQudnVlPzY0YmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQUlBLEdBUEE7QUFRQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQU5BLEdBUkE7QUFvQkE7QUFDQSxhQURBLHFCQUNBLGFBREEsRUFDQSxPQURBLEVBQ0EsUUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUhBLEdBcEJBO0FBMEJBLFNBMUJBLHFCQTBCQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLDBDQUZBO0FBR0Esc0RBSEE7QUFJQSx3QkFKQTtBQUtBLHVCQUxBO0FBTUEsdUJBTkE7QUFPQSw2QkFQQTtBQVFBLDhCQVJBO0FBU0E7QUFUQTtBQVdBO0FBdkNBLEc7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBLE9BQU8scUNBQXFDLHdCQUF3QixFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0JBQXNCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx3QkFBd0IsU0FBUyx1QkFBdUIsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFDQUFxQztBQUN4RCxxQkFBcUIsNEJBQTRCO0FBQ2pELHdCQUF3QixZQUFZLG9DQUFvQyxFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBaU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy8zNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRhdGV0aW1lXCI+XG4gICAgPGxhYmVsIDpmb3I9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2xhYmVsXCI+e3tmaWVsZC5uYW1lfX08L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICA8aW5wdXQgOmlkPVwiJ2ZsYXRwaWNrcl8nICsgZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgICAgOmhlbHA9XCJmaWVsZC5oZWxwXCJcbiAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJmaWVsZC5zZXR0aW5ncy5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgdi1tb2RlbD1cImRhdGV0aW1lXCJcbiAgICAgICAgICBjbGFzcz1cImRhdGV0aW1lX19pbnB1dCBmb3JtX19jb250cm9sIG1yLTJcIj5cbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkYXRldGltZV9fYnV0dG9uIGJ1dHRvbiBidXR0b24tLXByaW1hcnkgcHgtNFwiIEBjbGljay5wcmV2ZW50PVwiZmxhdHBpY2tyLm9wZW4oKVwiPlxuICAgICAgICA8ZmEtaWNvbiBpY29uPVwiY2FsZW5kYXItYWx0XCI+PC9mYS1pY29uPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtX19jb250cm9sLS1tZXRhXCIgdi1pZj1cImZpZWxkLmhlbHBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19oZWxwXCI+XG4gICAgICAgIDxzcGFuIHYtaHRtbD1cImZpZWxkLmhlbHBcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnZGF0ZXRpbWUtZmllbGR0eXBlJyxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0ZXRpbWU6ICcnLFxuICAgICAgICBmbGF0cGlja3I6IG51bGxcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICBmaWVsZDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgZW1pdEV2ZW50KHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgZGF0ZVN0cilcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIHRoaXMuZGF0ZXRpbWUgPSB0aGlzLnZhbHVlXG4gICAgICB0aGlzLmZsYXRwaWNrciA9IGZsYXRwaWNrcignI2ZsYXRwaWNrcl8nICsgdGhpcy5maWVsZC5oYW5kbGUsIHtcbiAgICAgICAgYWx0SW5wdXQ6IHRydWUsXG4gICAgICAgIGVuYWJsZVRpbWU6IHRoaXMuZmllbGQuc2V0dGluZ3MudGltZSxcbiAgICAgICAgYWx0Rm9ybWF0OiB0aGlzLmZpZWxkLnNldHRpbmdzLmZvcm1hdCB8fCAnWS1tLWQnLFxuICAgICAgICBtaW51dGVJbmNyZW1lbnQ6IDEsXG4gICAgICAgIGFsbG93SW5wdXQ6IGZhbHNlLFxuICAgICAgICBjbGlja09wZW5zOiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdERhdGU6IHRoaXMudmFsdWUsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmVtaXRFdmVudCxcbiAgICAgICAgb25WYWx1ZVVwZGF0ZTogdGhpcy5pbnB1dENoYW5nZWRcbiAgICAgIH0pXG4gICAgfVxuICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGF0ZXRpbWVcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImxhYmVsXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2xhYmVsXCIsIGF0dHJzOiB7IGZvcjogX3ZtLmZpZWxkLmhhbmRsZSB9IH0sXG4gICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZmllbGQubmFtZSkpXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXhcIiB9LCBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRldGltZSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF0ZXRpbWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGF0ZXRpbWVfX2lucHV0IGZvcm1fX2NvbnRyb2wgbXItMlwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGlkOiBcImZsYXRwaWNrcl9cIiArIF92bS5maWVsZC5oYW5kbGUsXG4gICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSxcbiAgICAgICAgICBoZWxwOiBfdm0uZmllbGQuaGVscCxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLmZpZWxkLnNldHRpbmdzLnBsYWNlaG9sZGVyXG4gICAgICAgIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZGF0ZXRpbWUgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdm0uZGF0ZXRpbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJkYXRldGltZV9fYnV0dG9uIGJ1dHRvbiBidXR0b24tLXByaW1hcnkgcHgtNFwiLFxuICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5mbGF0cGlja3Iub3BlbigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJmYS1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJjYWxlbmRhci1hbHRcIiB9IH0pXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmZpZWxkLmhlbHBcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19jb250cm9sLS1tZXRhXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9faGVscFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5maWVsZC5oZWxwKSB9IH0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NWRjZTIwYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTVkY2UyMGEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTVkY2UyMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTVkY2UyMGEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NWRjZTIwYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5NWRjZTIwYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk1ZGNlMjBhJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==