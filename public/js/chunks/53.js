(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

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
      "default": null
    }
  },
  methods: {
    emitEvent: function emitEvent(selectedDates, dateStr, instance) {
      this.$emit('input', this.format(dateStr, instance));
    },
    format: function format(dateStr, instance) {
      if (dateStr != '') {
        var dateObject = instance.parseDate(dateStr);
        var formattedDate = instance.formatDate(dateObject, 'Y-m-d H:i:S');
        return formattedDate;
      }

      return null;
    },
    adjustTimezone: function adjustTimezone(dateStr) {
      var localDate = new Date();
      var minuteOffset = localDate.getTimezoneOffset();
      var convertedDate = new Date(this.datetime);
      convertedDate = new Date(convertedDate.getTime() + minuteOffset * 60000);
      return convertedDate;
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
      clickOpens: true,
      defaultDate: this.value,
      onChange: this.emitEvent
    });

    if (this.value) {
      var adjustedDate = this.adjustTimezone(this.datetime);
      var formattedDate = this.format(adjustedDate, this.flatpickr);
      this.flatpickr.setDate(formattedDate);
      this.emitEvent(null, this.flatpickr.latestSelectedDateObj, this.flatpickr);
    }
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
  return _c("div", { staticClass: "form__group" }, [
    _c(
      "label",
      { staticClass: "form__label", attrs: { for: _vm.field.handle } },
      [_vm._v(_vm._s(_vm.field.name))]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "form__datetime" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.datetime,
            expression: "datetime"
          }
        ],
        staticClass: "w-full focus:outline-none",
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
          staticClass: "form__datetime--icon",
          attrs: { href: "#", title: "Select date" },
          on: {
            click: function($event) {
              return _vm.flatpickr.open()
            }
          }
        },
        [_c("fa-icon", { attrs: { icon: "calendar-alt" } })],
        1
      )
    ]),
    _vm._v(" "),
    _vm.datetime
      ? _c(
          "a",
          {
            staticClass: "datetime__clear text-sm pl-1",
            attrs: { href: "#", title: "Clear date" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.flatpickr.clear()
              }
            }
          },
          [_vm._v("\n    Clear date\n  ")]
        )
      : _vm._e(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvRGF0ZVRpbWUvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0RhdGVUaW1lL0ZpZWxkLnZ1ZT82ZjdjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0RhdGVUaW1lL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWU/NjVhMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWU/MjczMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFJQSxHQVBBO0FBUUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBTUE7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFOQSxHQVJBO0FBb0JBO0FBQ0EsYUFEQSxxQkFDQSxhQURBLEVBQ0EsT0FEQSxFQUNBLFFBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBLFVBTEEsa0JBS0EsT0FMQSxFQUtBLFFBTEEsRUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQSxLQWZBO0FBaUJBLGtCQWpCQSwwQkFpQkEsT0FqQkEsRUFpQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUF6QkEsR0FwQkE7QUFnREEsU0FoREEscUJBZ0RBO0FBQ0E7QUFFQTtBQUNBLG9CQURBO0FBRUEsMENBRkE7QUFHQSxzREFIQTtBQUlBLHdCQUpBO0FBS0EsdUJBTEE7QUFNQSxzQkFOQTtBQU9BLDZCQVBBO0FBUUE7QUFSQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQXJFQSxHOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQSxPQUFPLHFDQUFxQyx3QkFBd0IsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdDQUFnQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0NBQWtDO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsd0JBQXdCLFNBQVMsdUJBQXVCLEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlDQUFpQztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQ0FBcUM7QUFDeEQscUJBQXFCLDRCQUE0QjtBQUNqRCx3QkFBd0IsWUFBWSxvQ0FBb0MsRUFBRTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvNTMuanM/aWQ9MTI5ODJmODJiMjNlMDQyOGI4YWIiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImZvcm1fX2dyb3VwXCI+XG4gICAgICAgIDxsYWJlbCA6Zm9yPVwiZmllbGQuaGFuZGxlXCIgY2xhc3M9XCJmb3JtX19sYWJlbFwiPnt7ZmllbGQubmFtZX19PC9sYWJlbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fZGF0ZXRpbWVcIj5cbiAgICAgICAgICAgIDxpbnB1dCA6aWQ9XCInZmxhdHBpY2tyXycgKyBmaWVsZC5oYW5kbGVcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwidy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZVwiXG4gICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGVcIlxuICAgICAgICAgICAgICAgIDpoZWxwPVwiZmllbGQuaGVscFwiXG4gICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiZmllbGQuc2V0dGluZ3MucGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJkYXRldGltZVwiXG4gICAgICAgICAgICAgICAgPlxuXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiZm9ybV9fZGF0ZXRpbWUtLWljb25cIiB0aXRsZT1cIlNlbGVjdCBkYXRlXCIgQGNsaWNrPVwiZmxhdHBpY2tyLm9wZW4oKVwiPlxuICAgICAgICAgICAgICAgIDxmYS1pY29uIGljb249XCJjYWxlbmRhci1hbHRcIj48L2ZhLWljb24+XG4gICAgICAgICAgICA8L2E+XG4gICAgPC9kaXY+XG5cbiAgICA8YSB2LWlmPVwiZGF0ZXRpbWVcIiBocmVmPVwiI1wiIGNsYXNzPVwiZGF0ZXRpbWVfX2NsZWFyIHRleHQtc20gcGwtMVwiIEBjbGljay5wcmV2ZW50PVwiZmxhdHBpY2tyLmNsZWFyKClcIiB0aXRsZT1cIkNsZWFyIGRhdGVcIj5cbiAgICAgIENsZWFyIGRhdGVcbiAgICA8L2E+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fY29udHJvbC0tbWV0YVwiIHYtaWY9XCJmaWVsZC5oZWxwXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9faGVscFwiPlxuICAgICAgICA8c3BhbiB2LWh0bWw9XCJmaWVsZC5oZWxwXCI+PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgZmxhdHBpY2tyIGZyb20gJ2ZsYXRwaWNrcidcbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdkYXRldGltZS1maWVsZHR5cGUnLFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRldGltZTogJycsXG4gICAgICAgIGZsYXRwaWNrcjogbnVsbFxuICAgICAgfVxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgIGZpZWxkOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICB9LFxuXG4gICAgICB2YWx1ZToge1xuICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICB9XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGVtaXRFdmVudChzZWxlY3RlZERhdGVzLCBkYXRlU3RyLCBpbnN0YW5jZSkge1xuICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMuZm9ybWF0KGRhdGVTdHIsIGluc3RhbmNlKSlcbiAgICAgIH0sXG5cbiAgICAgIGZvcm1hdChkYXRlU3RyLCBpbnN0YW5jZSkge1xuXG4gICAgICAgIGlmIChkYXRlU3RyICE9ICcnKSB7XG4gICAgICAgICAgbGV0IGRhdGVPYmplY3QgPSBpbnN0YW5jZS5wYXJzZURhdGUoZGF0ZVN0cilcbiAgICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGluc3RhbmNlLmZvcm1hdERhdGUoZGF0ZU9iamVjdCwgJ1ktbS1kIEg6aTpTJylcbiAgICAgICAgICByZXR1cm4gZm9ybWF0dGVkRGF0ZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcblxuICAgICAgfSxcblxuICAgICAgYWRqdXN0VGltZXpvbmUoZGF0ZVN0cikge1xuICAgICAgICBsZXQgbG9jYWxEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IG1pbnV0ZU9mZnNldCA9IGxvY2FsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpO1xuXG4gICAgICAgIGxldCBjb252ZXJ0ZWREYXRlID0gbmV3IERhdGUodGhpcy5kYXRldGltZSlcbiAgICAgICAgY29udmVydGVkRGF0ZSA9IG5ldyBEYXRlKGNvbnZlcnRlZERhdGUuZ2V0VGltZSgpICsgKG1pbnV0ZU9mZnNldCAqIDYwMDAwKSlcblxuICAgICAgICByZXR1cm4gY29udmVydGVkRGF0ZVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgdGhpcy5kYXRldGltZSA9IHRoaXMudmFsdWVcblxuICAgICAgdGhpcy5mbGF0cGlja3IgPSBmbGF0cGlja3IoJyNmbGF0cGlja3JfJyArIHRoaXMuZmllbGQuaGFuZGxlLCB7XG4gICAgICAgIGFsdElucHV0OiB0cnVlLFxuICAgICAgICBlbmFibGVUaW1lOiB0aGlzLmZpZWxkLnNldHRpbmdzLnRpbWUsXG4gICAgICAgIGFsdEZvcm1hdDogdGhpcy5maWVsZC5zZXR0aW5ncy5mb3JtYXQgfHwgJ1ktbS1kJyxcbiAgICAgICAgbWludXRlSW5jcmVtZW50OiAxLFxuICAgICAgICBhbGxvd0lucHV0OiBmYWxzZSxcbiAgICAgICAgY2xpY2tPcGVuczogdHJ1ZSxcbiAgICAgICAgZGVmYXVsdERhdGU6IHRoaXMudmFsdWUsXG4gICAgICAgIG9uQ2hhbmdlOiB0aGlzLmVtaXRFdmVudFxuICAgICAgfSlcblxuICAgICAgaWYgKHRoaXMudmFsdWUpIHtcbiAgICAgICAgbGV0IGFkanVzdGVkRGF0ZSA9IHRoaXMuYWRqdXN0VGltZXpvbmUodGhpcy5kYXRldGltZSlcbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSB0aGlzLmZvcm1hdChhZGp1c3RlZERhdGUsIHRoaXMuZmxhdHBpY2tyKVxuICAgICAgICB0aGlzLmZsYXRwaWNrci5zZXREYXRlKGZvcm1hdHRlZERhdGUpXG4gICAgICAgIHRoaXMuZW1pdEV2ZW50KG51bGwsIHRoaXMuZmxhdHBpY2tyLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgdGhpcy5mbGF0cGlja3IpXG4gICAgICB9XG5cbiAgICB9XG4gIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19ncm91cFwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwibGFiZWxcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiwgYXR0cnM6IHsgZm9yOiBfdm0uZmllbGQuaGFuZGxlIH0gfSxcbiAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5maWVsZC5uYW1lKSldXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZGF0ZXRpbWVcIiB9LCBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRldGltZSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF0ZXRpbWVcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwidy1mdWxsIGZvY3VzOm91dGxpbmUtbm9uZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGlkOiBcImZsYXRwaWNrcl9cIiArIF92bS5maWVsZC5oYW5kbGUsXG4gICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSxcbiAgICAgICAgICBoZWxwOiBfdm0uZmllbGQuaGVscCxcbiAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLmZpZWxkLnNldHRpbmdzLnBsYWNlaG9sZGVyXG4gICAgICAgIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZGF0ZXRpbWUgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfdm0uZGF0ZXRpbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtX19kYXRldGltZS0taWNvblwiLFxuICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiLCB0aXRsZTogXCJTZWxlY3QgZGF0ZVwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5mbGF0cGlja3Iub3BlbigpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJmYS1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJjYWxlbmRhci1hbHRcIiB9IH0pXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmRhdGV0aW1lXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRhdGV0aW1lX19jbGVhciB0ZXh0LXNtIHBsLTFcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiLCB0aXRsZTogXCJDbGVhciBkYXRlXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZmxhdHBpY2tyLmNsZWFyKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICBDbGVhciBkYXRlXFxuICBcIildXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uZmllbGQuaGVscFxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2NvbnRyb2wtLW1ldGFcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19oZWxwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmZpZWxkLmhlbHApIH0gfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2NjM1MjQ4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNjYzNTI0OCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNjYzNTI0OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNjYzNTI0OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2NjM1MjQ4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE2NjM1MjQ4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2NjM1MjQ4JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==