(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Number/Settings.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Number/Settings.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
  name: 'number-fieldtype-settings',
  mixins: [_mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__["default"]],
  methods: {
    pad: function pad(length) {
      var str = '1';

      while (str.length < length) {
        str = '0' + str;
      }

      return Number('0.' + str.substr(-length, length));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Number/Settings.vue?vue&type=template&id=cd4a4b52&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Number/Settings.vue?vue&type=template&id=cd4a4b52& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "flex" },
    [
      _c("p-number", {
        staticClass: "w-1/5 mr-5",
        attrs: {
          name: "settings.decimals",
          label: "Decimal Places",
          help: "The number of decimal places this number will accept.",
          autocomplete: "off",
          min: "0",
          max: "6"
        },
        model: {
          value: _vm.value.decimals,
          callback: function($$v) {
            _vm.$set(_vm.value, "decimals", $$v)
          },
          expression: "value.decimals"
        }
      }),
      _vm._v(" "),
      _c("p-number", {
        staticClass: "w-1/5 mr-5",
        attrs: {
          name: "settings.steps",
          label: "Step Size",
          help: "Step or increment size of the number",
          autocomplete: "off",
          min: "0",
          steps: _vm.pad(_vm.value.decimals),
          decimals: _vm.value.decimals
        },
        model: {
          value: _vm.value.steps,
          callback: function($$v) {
            _vm.$set(_vm.value, "steps", $$v)
          },
          expression: "value.steps"
        }
      }),
      _vm._v(" "),
      _c("p-number", {
        staticClass: "w-1/5 mr-5",
        attrs: {
          name: "settings.min",
          label: "Min Value",
          help: "Minimum allowed value",
          autocomplete: "off",
          decimals: _vm.value.decimals,
          steps: _vm.value.steps
        },
        model: {
          value: _vm.value.min,
          callback: function($$v) {
            _vm.$set(_vm.value, "min", $$v)
          },
          expression: "value.min"
        }
      }),
      _vm._v(" "),
      _c("p-number", {
        staticClass: "w-1/5",
        attrs: {
          name: "settings.max",
          label: "Max Value",
          help: "Maximum allowed value",
          autocomplete: "off",
          decimals: _vm.value.decimals,
          steps: _vm.value.steps
        },
        model: {
          value: _vm.value.max,
          callback: function($$v) {
            _vm.$set(_vm.value, "max", $$v)
          },
          expression: "value.max"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/fieldtypes/Number/Settings.vue":
/*!*****************************************************!*\
  !*** ./resources/js/fieldtypes/Number/Settings.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_cd4a4b52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=cd4a4b52& */ "./resources/js/fieldtypes/Number/Settings.vue?vue&type=template&id=cd4a4b52&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/Number/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_cd4a4b52___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_cd4a4b52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/Number/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/Number/Settings.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/fieldtypes/Number/Settings.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Number/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/Number/Settings.vue?vue&type=template&id=cd4a4b52&":
/*!************************************************************************************!*\
  !*** ./resources/js/fieldtypes/Number/Settings.vue?vue&type=template&id=cd4a4b52& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_cd4a4b52___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=cd4a4b52& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Number/Settings.vue?vue&type=template&id=cd4a4b52&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_cd4a4b52___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_cd4a4b52___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvTnVtYmVyL1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9OdW1iZXIvU2V0dGluZ3MudnVlPzA4ZWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvTnVtYmVyL1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9OdW1iZXIvU2V0dGluZ3MudnVlP2E5NmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvTnVtYmVyL1NldHRpbmdzLnZ1ZT9kN2RiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9taXhpbnMvZmllbGR0eXBlLmpzIl0sIm5hbWVzIjpbInByb3BzIiwidmFsdWUiLCJyZXF1aXJlZCIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzREE7QUFFQTtBQUNBLG1DQURBO0FBR0EscUVBSEE7QUFLQTtBQUNBLE9BREEsZUFDQSxNQURBLEVBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQVBBO0FBTEEsRzs7Ozs7Ozs7Ozs7O0FDeERBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssc0JBQXNCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDekZBO0FBQUE7QUFBQTtBQUFBO0FBQXVGO0FBQzNCO0FBQ0w7OztBQUd2RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUE4TCxDQUFnQixvUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFlO0FBQ1hBLE9BQUssRUFBRTtBQUNIQyxTQUFLLEVBQUU7QUFDSEMsY0FBUSxFQUFFO0FBRFA7QUFESixHQURJO0FBT1hDLE9BQUssRUFBRTtBQUNIRixTQUFLLEVBQUU7QUFDSEcsVUFBSSxFQUFFLElBREg7QUFFSEMsYUFGRyxtQkFFS0osS0FGTCxFQUVZO0FBQ1gsYUFBS0ssS0FBTCxDQUFXLE9BQVgsRUFBb0JMLEtBQXBCO0FBQ0g7QUFKRTtBQURKO0FBUEksQ0FBZixFIiwiZmlsZSI6ImNodW5rcy8yNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICA8cC1udW1iZXJcbiAgICAgICAgICAgIG5hbWU9XCJzZXR0aW5ncy5kZWNpbWFsc1wiXG4gICAgICAgICAgICBsYWJlbD1cIkRlY2ltYWwgUGxhY2VzXCJcbiAgICAgICAgICAgIGhlbHA9XCJUaGUgbnVtYmVyIG9mIGRlY2ltYWwgcGxhY2VzIHRoaXMgbnVtYmVyIHdpbGwgYWNjZXB0LlwiXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInZhbHVlLmRlY2ltYWxzXCJcbiAgICAgICAgICAgIG1pbj1cIjBcIlxuICAgICAgICAgICAgbWF4PVwiNlwiXG4gICAgICAgICAgICBjbGFzcz1cInctMS81IG1yLTVcIlxuICAgICAgICAgICAgPlxuICAgICAgICA8L3AtbnVtYmVyPlxuXG4gICAgICAgIDxwLW51bWJlclxuICAgICAgICAgICAgbmFtZT1cInNldHRpbmdzLnN0ZXBzXCJcbiAgICAgICAgICAgIGxhYmVsPVwiU3RlcCBTaXplXCJcbiAgICAgICAgICAgIGhlbHA9XCJTdGVwIG9yIGluY3JlbWVudCBzaXplIG9mIHRoZSBudW1iZXJcIlxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ2YWx1ZS5zdGVwc1wiXG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIDpzdGVwcz1cInBhZCh2YWx1ZS5kZWNpbWFscylcIlxuICAgICAgICAgICAgOmRlY2ltYWxzPVwidmFsdWUuZGVjaW1hbHNcIlxuICAgICAgICAgICAgY2xhc3M9XCJ3LTEvNSBtci01XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgPC9wLW51bWJlcj5cblxuICAgICAgICA8cC1udW1iZXJcbiAgICAgICAgICAgIG5hbWU9XCJzZXR0aW5ncy5taW5cIlxuICAgICAgICAgICAgbGFiZWw9XCJNaW4gVmFsdWVcIlxuICAgICAgICAgICAgaGVscD1cIk1pbmltdW0gYWxsb3dlZCB2YWx1ZVwiXG4gICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInZhbHVlLm1pblwiXG4gICAgICAgICAgICA6ZGVjaW1hbHM9XCJ2YWx1ZS5kZWNpbWFsc1wiXG4gICAgICAgICAgICA6c3RlcHM9XCJ2YWx1ZS5zdGVwc1wiXG4gICAgICAgICAgICBjbGFzcz1cInctMS81IG1yLTVcIlxuICAgICAgICAgICAgPlxuICAgICAgICA8L3AtbnVtYmVyPlxuXG4gICAgICAgIDxwLW51bWJlclxuICAgICAgICAgICAgbmFtZT1cInNldHRpbmdzLm1heFwiXG4gICAgICAgICAgICBsYWJlbD1cIk1heCBWYWx1ZVwiXG4gICAgICAgICAgICBoZWxwPVwiTWF4aW11bSBhbGxvd2VkIHZhbHVlXCJcbiAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICB2LW1vZGVsPVwidmFsdWUubWF4XCJcbiAgICAgICAgICAgIDpkZWNpbWFscz1cInZhbHVlLmRlY2ltYWxzXCJcbiAgICAgICAgICAgIDpzdGVwcz1cInZhbHVlLnN0ZXBzXCJcbiAgICAgICAgICAgIGNsYXNzPVwidy0xLzVcIlxuICAgICAgICAgICAgPlxuICAgICAgICA8L3AtbnVtYmVyPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgZmllbGR0eXBlIGZyb20gJy4uLy4uL21peGlucy9maWVsZHR5cGUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdudW1iZXItZmllbGR0eXBlLXNldHRpbmdzJyxcblxuICAgICAgICBtaXhpbnM6IFtmaWVsZHR5cGVdLFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHBhZChsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RyID0gJzEnXG4gICAgICAgICAgICAgICAgd2hpbGUoc3RyLmxlbmd0aCA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSAnMCcgKyBzdHJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIE51bWJlcignMC4nICsgc3RyLnN1YnN0cigtbGVuZ3RoLCBsZW5ndGgpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cblxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJwLW51bWJlclwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcInctMS81IG1yLTVcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBuYW1lOiBcInNldHRpbmdzLmRlY2ltYWxzXCIsXG4gICAgICAgICAgbGFiZWw6IFwiRGVjaW1hbCBQbGFjZXNcIixcbiAgICAgICAgICBoZWxwOiBcIlRoZSBudW1iZXIgb2YgZGVjaW1hbCBwbGFjZXMgdGhpcyBudW1iZXIgd2lsbCBhY2NlcHQuXCIsXG4gICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgIG1pbjogXCIwXCIsXG4gICAgICAgICAgbWF4OiBcIjZcIlxuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWUuZGVjaW1hbHMsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnZhbHVlLCBcImRlY2ltYWxzXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsdWUuZGVjaW1hbHNcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInAtbnVtYmVyXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xLzUgbXItNVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6IFwic2V0dGluZ3Muc3RlcHNcIixcbiAgICAgICAgICBsYWJlbDogXCJTdGVwIFNpemVcIixcbiAgICAgICAgICBoZWxwOiBcIlN0ZXAgb3IgaW5jcmVtZW50IHNpemUgb2YgdGhlIG51bWJlclwiLFxuICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICBtaW46IFwiMFwiLFxuICAgICAgICAgIHN0ZXBzOiBfdm0ucGFkKF92bS52YWx1ZS5kZWNpbWFscyksXG4gICAgICAgICAgZGVjaW1hbHM6IF92bS52YWx1ZS5kZWNpbWFsc1xuICAgICAgICB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWUuc3RlcHMsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnZhbHVlLCBcInN0ZXBzXCIsICQkdilcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsdWUuc3RlcHNcIlxuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInAtbnVtYmVyXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xLzUgbXItNVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6IFwic2V0dGluZ3MubWluXCIsXG4gICAgICAgICAgbGFiZWw6IFwiTWluIFZhbHVlXCIsXG4gICAgICAgICAgaGVscDogXCJNaW5pbXVtIGFsbG93ZWQgdmFsdWVcIixcbiAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgZGVjaW1hbHM6IF92bS52YWx1ZS5kZWNpbWFscyxcbiAgICAgICAgICBzdGVwczogX3ZtLnZhbHVlLnN0ZXBzXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS52YWx1ZS5taW4sXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnZhbHVlLCBcIm1pblwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInZhbHVlLm1pblwiXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicC1udW1iZXJcIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEvNVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6IFwic2V0dGluZ3MubWF4XCIsXG4gICAgICAgICAgbGFiZWw6IFwiTWF4IFZhbHVlXCIsXG4gICAgICAgICAgaGVscDogXCJNYXhpbXVtIGFsbG93ZWQgdmFsdWVcIixcbiAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgZGVjaW1hbHM6IF92bS52YWx1ZS5kZWNpbWFscyxcbiAgICAgICAgICBzdGVwczogX3ZtLnZhbHVlLnN0ZXBzXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS52YWx1ZS5tYXgsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnZhbHVlLCBcIm1heFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInZhbHVlLm1heFwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZDRhNGI1MiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnY2Q0YTRiNTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnY2Q0YTRiNTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnY2Q0YTRiNTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZDRhNGI1MiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdjZDRhNGI1MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvTnVtYmVyL1NldHRpbmdzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2Q0YTRiNTImXCIiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgICAgIGhhbmRsZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9