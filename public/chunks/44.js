(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[44],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/DateTime/Field.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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
      var dateObject = instance.parseDate(dateStr);
      var formattedDate = instance.formatDate(dateObject, 'Y-m-d H:i:S');
      this.$emit('input', formattedDate);
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
      defaultDate: this.value + '+00.00',
      onChange: this.emitEvent,
      onValueUpdate: this.inputChanged
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/DateTime/Field.vue?vue&type=template&id=16635248&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/DateTime/Field.vue?vue&type=template&id=16635248& ***!
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

/***/ "./resources/js/fieldtypes/DateTime/Field.vue":
/*!****************************************************!*\
  !*** ./resources/js/fieldtypes/DateTime/Field.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_16635248___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=16635248& */ "./resources/js/fieldtypes/DateTime/Field.vue?vue&type=template&id=16635248&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_16635248___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_16635248___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/DateTime/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/fieldtypes/DateTime/Field.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/DateTime/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/DateTime/Field.vue?vue&type=template&id=16635248&":
/*!***********************************************************************************!*\
  !*** ./resources/js/fieldtypes/DateTime/Field.vue?vue&type=template&id=16635248& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_16635248___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=16635248& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/DateTime/Field.vue?vue&type=template&id=16635248&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_16635248___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_16635248___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvRGF0ZVRpbWUvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0RhdGVUaW1lL0ZpZWxkLnZ1ZT82ZjdjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0RhdGVUaW1lL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWU/NjVhMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWU/MjczMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7QUFDQTtBQUNBLDRCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBSUEsR0FQQTtBQVFBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQU1BO0FBQ0EscUJBREE7QUFFQTtBQUZBO0FBTkEsR0FSQTtBQW9CQTtBQUNBLGFBREEscUJBQ0EsYUFEQSxFQUNBLE9BREEsRUFDQSxRQURBLEVBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU5BLEdBcEJBO0FBNkJBLFNBN0JBLHFCQTZCQTtBQUNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLDBDQUZBO0FBR0Esc0RBSEE7QUFJQSx3QkFKQTtBQUtBLHVCQUxBO0FBTUEsdUJBTkE7QUFPQSx3Q0FQQTtBQVFBLDhCQVJBO0FBU0E7QUFUQTtBQVdBO0FBMUNBLEc7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBLE9BQU8scUNBQXFDLHdCQUF3QixFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0JBQXNCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxtQkFBbUIsc0JBQXNCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixZQUFZO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCx3QkFBd0IsU0FBUyx1QkFBdUIsRUFBRTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFDQUFxQztBQUN4RCxxQkFBcUIsNEJBQTRCO0FBQ2pELHdCQUF3QixZQUFZLG9DQUFvQyxFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy80NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRhdGV0aW1lXCI+XG4gICAgPGxhYmVsIDpmb3I9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2xhYmVsXCI+e3tmaWVsZC5uYW1lfX08L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICA8aW5wdXQgOmlkPVwiJ2ZsYXRwaWNrcl8nICsgZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgICAgOmhlbHA9XCJmaWVsZC5oZWxwXCJcbiAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJmaWVsZC5zZXR0aW5ncy5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgdi1tb2RlbD1cImRhdGV0aW1lXCJcbiAgICAgICAgICBjbGFzcz1cImRhdGV0aW1lX19pbnB1dCBmb3JtX19jb250cm9sIG1yLTJcIj5cbiAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkYXRldGltZV9fYnV0dG9uIGJ1dHRvbiBidXR0b24tLXByaW1hcnkgcHgtNFwiIEBjbGljay5wcmV2ZW50PVwiZmxhdHBpY2tyLm9wZW4oKVwiPlxuICAgICAgICA8ZmEtaWNvbiBpY29uPVwiY2FsZW5kYXItYWx0XCI+PC9mYS1pY29uPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtX19jb250cm9sLS1tZXRhXCIgdi1pZj1cImZpZWxkLmhlbHBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19oZWxwXCI+XG4gICAgICAgIDxzcGFuIHYtaHRtbD1cImZpZWxkLmhlbHBcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnZGF0ZXRpbWUtZmllbGR0eXBlJyxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0ZXRpbWU6ICcnLFxuICAgICAgICBmbGF0cGlja3I6IG51bGxcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICBmaWVsZDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgZW1pdEV2ZW50KHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlKSB7XG4gICAgICAgIGxldCBkYXRlT2JqZWN0ID0gaW5zdGFuY2UucGFyc2VEYXRlKGRhdGVTdHIpXG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gaW5zdGFuY2UuZm9ybWF0RGF0ZShkYXRlT2JqZWN0LCAnWS1tLWQgSDppOlMnKVxuXG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgZm9ybWF0dGVkRGF0ZSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIHRoaXMuZGF0ZXRpbWUgPSB0aGlzLnZhbHVlXG4gICAgICB0aGlzLmZsYXRwaWNrciA9IGZsYXRwaWNrcignI2ZsYXRwaWNrcl8nICsgdGhpcy5maWVsZC5oYW5kbGUsIHtcbiAgICAgICAgYWx0SW5wdXQ6IHRydWUsXG4gICAgICAgIGVuYWJsZVRpbWU6IHRoaXMuZmllbGQuc2V0dGluZ3MudGltZSxcbiAgICAgICAgYWx0Rm9ybWF0OiB0aGlzLmZpZWxkLnNldHRpbmdzLmZvcm1hdCB8fCAnWS1tLWQnLFxuICAgICAgICBtaW51dGVJbmNyZW1lbnQ6IDEsXG4gICAgICAgIGFsbG93SW5wdXQ6IGZhbHNlLFxuICAgICAgICBjbGlja09wZW5zOiBmYWxzZSxcbiAgICAgICAgZGVmYXVsdERhdGU6IHRoaXMudmFsdWUgKyAnKzAwLjAwJyxcbiAgICAgICAgb25DaGFuZ2U6IHRoaXMuZW1pdEV2ZW50LFxuICAgICAgICBvblZhbHVlVXBkYXRlOiB0aGlzLmlucHV0Q2hhbmdlZFxuICAgICAgfSlcbiAgICB9XG4gIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRldGltZVwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwibGFiZWxcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiwgYXR0cnM6IHsgZm9yOiBfdm0uZmllbGQuaGFuZGxlIH0gfSxcbiAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5maWVsZC5uYW1lKSldXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleFwiIH0sIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGV0aW1lLFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkYXRldGltZVwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJkYXRldGltZV9faW5wdXQgZm9ybV9fY29udHJvbCBtci0yXCIsXG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgaWQ6IFwiZmxhdHBpY2tyX1wiICsgX3ZtLmZpZWxkLmhhbmRsZSxcbiAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlLFxuICAgICAgICAgIGhlbHA6IF92bS5maWVsZC5oZWxwLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0uZmllbGQuc2V0dGluZ3MucGxhY2Vob2xkZXJcbiAgICAgICAgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5kYXRldGltZSB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF92bS5kYXRldGltZSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRhdGV0aW1lX19idXR0b24gYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBweC00XCIsXG4gICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmZsYXRwaWNrci5vcGVuKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImZhLWljb25cIiwgeyBhdHRyczogeyBpY29uOiBcImNhbGVuZGFyLWFsdFwiIH0gfSldLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uZmllbGQuaGVscFxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2NvbnRyb2wtLW1ldGFcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19oZWxwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmZpZWxkLmhlbHApIH0gfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2NjM1MjQ4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNjYzNTI0OCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNjYzNTI0OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNjYzNTI0OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2NjM1MjQ4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE2NjM1MjQ4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2NjM1MjQ4JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==