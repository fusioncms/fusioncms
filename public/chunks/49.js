(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

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
  return _c("div", { staticClass: "datetime" }, [
    _c(
      "label",
      { staticClass: "form__label", attrs: { for: _vm.field.handle } },
      [_vm._v(_vm._s(_vm.field.name))]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "flex items-center relative" },
      [
        _c("fa-icon", {
          staticClass: "ml-3 absolute z-10 pointer-events-none",
          attrs: { icon: "calendar-alt" }
        }),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.datetime,
              expression: "datetime"
            }
          ],
          staticClass: "datetime__input form__control mr-2 background-inherit",
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
        })
      ],
      1
    ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvRGF0ZVRpbWUvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0RhdGVUaW1lL0ZpZWxkLnZ1ZT82ZjdjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0RhdGVUaW1lL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWU/NjVhMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWU/MjczMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUJBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQUlBLEdBUEE7QUFRQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQU5BLEdBUkE7QUFvQkE7QUFDQSxhQURBLHFCQUNBLGFBREEsRUFDQSxPQURBLEVBQ0EsUUFEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBS0EsVUFMQSxrQkFLQSxPQUxBLEVBS0EsUUFMQSxFQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBLEtBZkE7QUFpQkEsa0JBakJBLDBCQWlCQSxPQWpCQSxFQWlCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQXpCQSxHQXBCQTtBQWdEQSxTQWhEQSxxQkFnREE7QUFDQTtBQUVBO0FBQ0Esb0JBREE7QUFFQSwwQ0FGQTtBQUdBLHNEQUhBO0FBSUEsd0JBSkE7QUFLQSx1QkFMQTtBQU1BLHNCQU5BO0FBT0EsNkJBUEE7QUFRQTtBQVJBOztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBckVBLEc7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBLE9BQU8scUNBQXFDLHdCQUF3QixFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDRDQUE0QztBQUNuRDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLHFCQUFxQixzQkFBc0I7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUNBQWlDO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFDQUFxQztBQUN4RCxxQkFBcUIsNEJBQTRCO0FBQ2pELHdCQUF3QixZQUFZLG9DQUFvQyxFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzdFQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy80OS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImRhdGV0aW1lXCI+XG4gICAgPGxhYmVsIDpmb3I9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2xhYmVsXCI+e3tmaWVsZC5uYW1lfX08L2xhYmVsPlxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciByZWxhdGl2ZVwiPlxuICAgICAgPGZhLWljb24gaWNvbj1cImNhbGVuZGFyLWFsdFwiIGNsYXNzPVwibWwtMyBhYnNvbHV0ZSB6LTEwIHBvaW50ZXItZXZlbnRzLW5vbmVcIj48L2ZhLWljb24+XG4gICAgICA8aW5wdXQgOmlkPVwiJ2ZsYXRwaWNrcl8nICsgZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgICAgOmhlbHA9XCJmaWVsZC5oZWxwXCJcbiAgICAgICAgICA6cGxhY2Vob2xkZXI9XCJmaWVsZC5zZXR0aW5ncy5wbGFjZWhvbGRlclwiXG4gICAgICAgICAgdi1tb2RlbD1cImRhdGV0aW1lXCJcbiAgICAgICAgICBjbGFzcz1cImRhdGV0aW1lX19pbnB1dCBmb3JtX19jb250cm9sIG1yLTIgYmFja2dyb3VuZC1pbmhlcml0XCI+XG4gICAgPC9kaXY+XG4gICAgPGEgdi1pZj1cImRhdGV0aW1lXCIgaHJlZj1cIiNcIiBjbGFzcz1cImRhdGV0aW1lX19jbGVhciB0ZXh0LXNtIHBsLTFcIiBAY2xpY2sucHJldmVudD1cImZsYXRwaWNrci5jbGVhcigpXCIgdGl0bGU9XCJDbGVhciBkYXRlXCI+XG4gICAgICBDbGVhciBkYXRlXG4gICAgPC9hPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtX19jb250cm9sLS1tZXRhXCIgdi1pZj1cImZpZWxkLmhlbHBcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19oZWxwXCI+XG4gICAgICAgIDxzcGFuIHYtaHRtbD1cImZpZWxkLmhlbHBcIj48L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICAgICAgXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnZGF0ZXRpbWUtZmllbGR0eXBlJyxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0ZXRpbWU6ICcnLFxuICAgICAgICBmbGF0cGlja3I6IG51bGxcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICBmaWVsZDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgZW1pdEV2ZW50KHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5mb3JtYXQoZGF0ZVN0ciwgaW5zdGFuY2UpKVxuICAgICAgfSxcblxuICAgICAgZm9ybWF0KGRhdGVTdHIsIGluc3RhbmNlKSB7XG5cbiAgICAgICAgaWYgKGRhdGVTdHIgIT0gJycpIHtcbiAgICAgICAgICBsZXQgZGF0ZU9iamVjdCA9IGluc3RhbmNlLnBhcnNlRGF0ZShkYXRlU3RyKVxuICAgICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gaW5zdGFuY2UuZm9ybWF0RGF0ZShkYXRlT2JqZWN0LCAnWS1tLWQgSDppOlMnKVxuICAgICAgICAgIHJldHVybiBmb3JtYXR0ZWREYXRlXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIFxuICAgICAgfSxcblxuICAgICAgYWRqdXN0VGltZXpvbmUoZGF0ZVN0cikge1xuICAgICAgICBsZXQgbG9jYWxEYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgbGV0IG1pbnV0ZU9mZnNldCA9IGxvY2FsRGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpOyBcblxuICAgICAgICBsZXQgY29udmVydGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZXRpbWUpXG4gICAgICAgIGNvbnZlcnRlZERhdGUgPSBuZXcgRGF0ZShjb252ZXJ0ZWREYXRlLmdldFRpbWUoKSArIChtaW51dGVPZmZzZXQgKiA2MDAwMCkpXG5cbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlZERhdGVcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIHRoaXMuZGF0ZXRpbWUgPSB0aGlzLnZhbHVlXG5cbiAgICAgIHRoaXMuZmxhdHBpY2tyID0gZmxhdHBpY2tyKCcjZmxhdHBpY2tyXycgKyB0aGlzLmZpZWxkLmhhbmRsZSwge1xuICAgICAgICBhbHRJbnB1dDogdHJ1ZSxcbiAgICAgICAgZW5hYmxlVGltZTogdGhpcy5maWVsZC5zZXR0aW5ncy50aW1lLFxuICAgICAgICBhbHRGb3JtYXQ6IHRoaXMuZmllbGQuc2V0dGluZ3MuZm9ybWF0IHx8ICdZLW0tZCcsXG4gICAgICAgIG1pbnV0ZUluY3JlbWVudDogMSxcbiAgICAgICAgYWxsb3dJbnB1dDogZmFsc2UsXG4gICAgICAgIGNsaWNrT3BlbnM6IHRydWUsXG4gICAgICAgIGRlZmF1bHREYXRlOiB0aGlzLnZhbHVlLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5lbWl0RXZlbnRcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgIGxldCBhZGp1c3RlZERhdGUgPSB0aGlzLmFkanVzdFRpbWV6b25lKHRoaXMuZGF0ZXRpbWUpXG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gdGhpcy5mb3JtYXQoYWRqdXN0ZWREYXRlLCB0aGlzLmZsYXRwaWNrcilcbiAgICAgICAgdGhpcy5mbGF0cGlja3Iuc2V0RGF0ZShmb3JtYXR0ZWREYXRlKVxuICAgICAgICB0aGlzLmVtaXRFdmVudChudWxsLCB0aGlzLmZsYXRwaWNrci5sYXRlc3RTZWxlY3RlZERhdGVPYmosIHRoaXMuZmxhdHBpY2tyKVxuICAgICAgfVxuICAgICAgICBcbiAgICB9XG4gIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRldGltZVwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwibGFiZWxcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiwgYXR0cnM6IHsgZm9yOiBfdm0uZmllbGQuaGFuZGxlIH0gfSxcbiAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5maWVsZC5uYW1lKSldXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIgcmVsYXRpdmVcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTMgYWJzb2x1dGUgei0xMCBwb2ludGVyLWV2ZW50cy1ub25lXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJjYWxlbmRhci1hbHRcIiB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0ZXRpbWUsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGF0ZXRpbWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGF0ZXRpbWVfX2lucHV0IGZvcm1fX2NvbnRyb2wgbXItMiBiYWNrZ3JvdW5kLWluaGVyaXRcIixcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgaWQ6IFwiZmxhdHBpY2tyX1wiICsgX3ZtLmZpZWxkLmhhbmRsZSxcbiAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUsXG4gICAgICAgICAgICBoZWxwOiBfdm0uZmllbGQuaGVscCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0uZmllbGQuc2V0dGluZ3MucGxhY2Vob2xkZXJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZGF0ZXRpbWUgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBfdm0uZGF0ZXRpbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmRhdGV0aW1lXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRhdGV0aW1lX19jbGVhciB0ZXh0LXNtIHBsLTFcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiLCB0aXRsZTogXCJDbGVhciBkYXRlXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZmxhdHBpY2tyLmNsZWFyKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICBDbGVhciBkYXRlXFxuICBcIildXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uZmllbGQuaGVscFxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2NvbnRyb2wtLW1ldGFcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19oZWxwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmZpZWxkLmhlbHApIH0gfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2NjM1MjQ4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL3NhbmRib3gvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTY2MzUyNDgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTY2MzUyNDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTY2MzUyNDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjYzNTI0OCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNjYzNTI0OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvRGF0ZVRpbWUvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjYzNTI0OCZcIiJdLCJzb3VyY2VSb290IjoiIn0=