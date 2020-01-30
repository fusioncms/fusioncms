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
        "div",
        { staticClass: "form__datetime--icon" },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvRGF0ZVRpbWUvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0RhdGVUaW1lL0ZpZWxkLnZ1ZT82ZjdjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0RhdGVUaW1lL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWU/NjVhMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9EYXRlVGltZS9GaWVsZC52dWU/MjczMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFJQSxHQVBBO0FBUUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBTUE7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFOQSxHQVJBO0FBb0JBO0FBQ0EsYUFEQSxxQkFDQSxhQURBLEVBQ0EsT0FEQSxFQUNBLFFBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBLFVBTEEsa0JBS0EsT0FMQSxFQUtBLFFBTEEsRUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFFQSxLQWZBO0FBaUJBLGtCQWpCQSwwQkFpQkEsT0FqQkEsRUFpQkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUF6QkEsR0FwQkE7QUFnREEsU0FoREEscUJBZ0RBO0FBQ0E7QUFFQTtBQUNBLG9CQURBO0FBRUEsMENBRkE7QUFHQSxzREFIQTtBQUlBLHdCQUpBO0FBS0EsdUJBTEE7QUFNQSxzQkFOQTtBQU9BLDZCQVBBO0FBUUE7QUFSQTs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQXJFQSxHOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkJBQTZCO0FBQ2pEO0FBQ0E7QUFDQSxPQUFPLHFDQUFxQyx3QkFBd0IsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGdDQUFnQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVMsc0NBQXNDO0FBQy9DLHdCQUF3QixTQUFTLHVCQUF1QixFQUFFO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQ0FBaUM7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIscUNBQXFDO0FBQ3hELHFCQUFxQiw0QkFBNEI7QUFDakQsd0JBQXdCLFlBQVksb0NBQW9DLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDMUVBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY2h1bmtzLzQ5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJmb3JtX19ncm91cFwiPlxuICAgICAgICA8bGFiZWwgOmZvcj1cImZpZWxkLmhhbmRsZVwiIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj57e2ZpZWxkLm5hbWV9fTwvbGFiZWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX2RhdGV0aW1lXCI+XG4gICAgICAgICAgICA8aW5wdXQgOmlkPVwiJ2ZsYXRwaWNrcl8nICsgZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICAgICAgICA6aGVscD1cImZpZWxkLmhlbHBcIlxuICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cImZpZWxkLnNldHRpbmdzLnBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGF0ZXRpbWVcIlxuICAgICAgICAgICAgICAgID5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX2RhdGV0aW1lLS1pY29uXCI+XG4gICAgICAgICAgICAgICAgPGZhLWljb24gaWNvbj1cImNhbGVuZGFyLWFsdFwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGEgdi1pZj1cImRhdGV0aW1lXCIgaHJlZj1cIiNcIiBjbGFzcz1cImRhdGV0aW1lX19jbGVhciB0ZXh0LXNtIHBsLTFcIiBAY2xpY2sucHJldmVudD1cImZsYXRwaWNrci5jbGVhcigpXCIgdGl0bGU9XCJDbGVhciBkYXRlXCI+XG4gICAgICBDbGVhciBkYXRlXG4gICAgPC9hPlxuXG4gICAgPGRpdiBjbGFzcz1cImZvcm1fX2NvbnRyb2wtLW1ldGFcIiB2LWlmPVwiZmllbGQuaGVscFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX2hlbHBcIj5cbiAgICAgICAgPHNwYW4gdi1odG1sPVwiZmllbGQuaGVscFwiPjwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgaW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnZGF0ZXRpbWUtZmllbGR0eXBlJyxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0ZXRpbWU6ICcnLFxuICAgICAgICBmbGF0cGlja3I6IG51bGxcbiAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICBmaWVsZDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgdmFsdWU6IHtcbiAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBlbWl0RXZlbnQoc2VsZWN0ZWREYXRlcywgZGF0ZVN0ciwgaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmZvcm1hdChkYXRlU3RyLCBpbnN0YW5jZSkpXG4gICAgICB9LFxuXG4gICAgICBmb3JtYXQoZGF0ZVN0ciwgaW5zdGFuY2UpIHtcblxuICAgICAgICBpZiAoZGF0ZVN0ciAhPSAnJykge1xuICAgICAgICAgIGxldCBkYXRlT2JqZWN0ID0gaW5zdGFuY2UucGFyc2VEYXRlKGRhdGVTdHIpXG4gICAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBpbnN0YW5jZS5mb3JtYXREYXRlKGRhdGVPYmplY3QsICdZLW0tZCBIOmk6UycpXG4gICAgICAgICAgcmV0dXJuIGZvcm1hdHRlZERhdGVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG5cbiAgICAgIH0sXG5cbiAgICAgIGFkanVzdFRpbWV6b25lKGRhdGVTdHIpIHtcbiAgICAgICAgbGV0IGxvY2FsRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCBtaW51dGVPZmZzZXQgPSBsb2NhbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgICAgICBsZXQgY29udmVydGVkRGF0ZSA9IG5ldyBEYXRlKHRoaXMuZGF0ZXRpbWUpXG4gICAgICAgIGNvbnZlcnRlZERhdGUgPSBuZXcgRGF0ZShjb252ZXJ0ZWREYXRlLmdldFRpbWUoKSArIChtaW51dGVPZmZzZXQgKiA2MDAwMCkpXG5cbiAgICAgICAgcmV0dXJuIGNvbnZlcnRlZERhdGVcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIHRoaXMuZGF0ZXRpbWUgPSB0aGlzLnZhbHVlXG5cbiAgICAgIHRoaXMuZmxhdHBpY2tyID0gZmxhdHBpY2tyKCcjZmxhdHBpY2tyXycgKyB0aGlzLmZpZWxkLmhhbmRsZSwge1xuICAgICAgICBhbHRJbnB1dDogdHJ1ZSxcbiAgICAgICAgZW5hYmxlVGltZTogdGhpcy5maWVsZC5zZXR0aW5ncy50aW1lLFxuICAgICAgICBhbHRGb3JtYXQ6IHRoaXMuZmllbGQuc2V0dGluZ3MuZm9ybWF0IHx8ICdZLW0tZCcsXG4gICAgICAgIG1pbnV0ZUluY3JlbWVudDogMSxcbiAgICAgICAgYWxsb3dJbnB1dDogZmFsc2UsXG4gICAgICAgIGNsaWNrT3BlbnM6IHRydWUsXG4gICAgICAgIGRlZmF1bHREYXRlOiB0aGlzLnZhbHVlLFxuICAgICAgICBvbkNoYW5nZTogdGhpcy5lbWl0RXZlbnRcbiAgICAgIH0pXG5cbiAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgIGxldCBhZGp1c3RlZERhdGUgPSB0aGlzLmFkanVzdFRpbWV6b25lKHRoaXMuZGF0ZXRpbWUpXG4gICAgICAgIGxldCBmb3JtYXR0ZWREYXRlID0gdGhpcy5mb3JtYXQoYWRqdXN0ZWREYXRlLCB0aGlzLmZsYXRwaWNrcilcbiAgICAgICAgdGhpcy5mbGF0cGlja3Iuc2V0RGF0ZShmb3JtYXR0ZWREYXRlKVxuICAgICAgICB0aGlzLmVtaXRFdmVudChudWxsLCB0aGlzLmZsYXRwaWNrci5sYXRlc3RTZWxlY3RlZERhdGVPYmosIHRoaXMuZmxhdHBpY2tyKVxuICAgICAgfVxuXG4gICAgfVxuICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZ3JvdXBcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImxhYmVsXCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2xhYmVsXCIsIGF0dHJzOiB7IGZvcjogX3ZtLmZpZWxkLmhhbmRsZSB9IH0sXG4gICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZmllbGQubmFtZSkpXVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2RhdGV0aW1lXCIgfSwgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0ZXRpbWUsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRhdGV0aW1lXCJcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInctZnVsbCBmb2N1czpvdXRsaW5lLW5vbmVcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpZDogXCJmbGF0cGlja3JfXCIgKyBfdm0uZmllbGQuaGFuZGxlLFxuICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUsXG4gICAgICAgICAgaGVscDogX3ZtLmZpZWxkLmhlbHAsXG4gICAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5maWVsZC5zZXR0aW5ncy5wbGFjZWhvbGRlclxuICAgICAgICB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmRhdGV0aW1lIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3ZtLmRhdGV0aW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZGF0ZXRpbWUtLWljb25cIiB9LFxuICAgICAgICBbX2MoXCJmYS1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJjYWxlbmRhci1hbHRcIiB9IH0pXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmRhdGV0aW1lXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRhdGV0aW1lX19jbGVhciB0ZXh0LXNtIHBsLTFcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiLCB0aXRsZTogXCJDbGVhciBkYXRlXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZmxhdHBpY2tyLmNsZWFyKClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICBDbGVhciBkYXRlXFxuICBcIildXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uZmllbGQuaGVscFxuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2NvbnRyb2wtLW1ldGFcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19oZWxwXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmZpZWxkLmhlbHApIH0gfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2NjM1MjQ4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL3NhbmRib3gvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTY2MzUyNDgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTY2MzUyNDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTY2MzUyNDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjYzNTI0OCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxNjYzNTI0OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvRGF0ZVRpbWUvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNjYzNTI0OCZcIiJdLCJzb3VyY2VSb290IjoiIn0=