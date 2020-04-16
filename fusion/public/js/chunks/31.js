(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'asset-fieldtype-settings',
  mixins: [_mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      filetypes: {
        image: 'Images',
        video: 'Videos',
        audio: 'Audio',
        document: 'Documents'
      },
      directories: []
    };
  },
  created: function created() {
    var _this = this;

    axios.get('/api/directories').then(function (response) {
      _this.directories = _.map(response.data.data, function (directory) {
        return {
          'label': directory.name,
          'value': directory.id
        };
      });

      _this.directories.unshift({
        'label': 'None',
        'value': null
      });
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=template&id=4d870364&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=template&id=4d870364& ***!
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "col w-1/2" },
      [
        _c("p-number", {
          attrs: {
            name: "settings.limit",
            label: "Limit",
            help:
              "Limit the number of assets selected; leave blank if no limit is desired.",
            placeholder: "",
            "has-error": _vm.errors.has("settings.limit"),
            "error-message": _vm.errors.get("settings.limit")
          },
          model: {
            value: _vm.settings.limit,
            callback: function($$v) {
              _vm.$set(_vm.settings, "limit", $$v)
            },
            expression: "settings.limit"
          }
        }),
        _vm._v(" "),
        _c(
          "p-checkbox-group",
          {
            attrs: {
              label: "File type restrictions",
              help:
                "Restrict which file types are selectable for this field; leave blank if no retriction is desired.",
              "has-error": _vm.errors.has("settings.filetype_restrictions"),
              "error-message": _vm.errors.get("settings.filetype_restrictions")
            }
          },
          _vm._l(_vm.filetypes, function(filetype, index) {
            return _c(
              "p-checkbox",
              {
                key: index,
                attrs: {
                  name: "settings.filetype_restrictions",
                  id: index,
                  "native-value": index
                },
                model: {
                  value: _vm.settings.filetype_restrictions,
                  callback: function($$v) {
                    _vm.$set(_vm.settings, "filetype_restrictions", $$v)
                  },
                  expression: "settings.filetype_restrictions"
                }
              },
              [_vm._v("\n\t\t\t\t\t" + _vm._s(filetype) + "\n\t\t\t\t")]
            )
          }),
          1
        )
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col w-1/2" },
      [
        _c("p-select", {
          attrs: {
            name: "settings.root_directory",
            label: "Root directory",
            help:
              "Select root folder for this field; default root will be used if None selected.",
            options: _vm.directories,
            "has-error": _vm.errors.has("settings.root_directory"),
            "error-message": _vm.errors.get("settings.root_directory")
          },
          model: {
            value: _vm.settings.root_directory,
            callback: function($$v) {
              _vm.$set(_vm.settings, "root_directory", $$v)
            },
            expression: "settings.root_directory"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/fieldtypes/Asset/Settings.vue":
/*!****************************************************!*\
  !*** ./resources/js/fieldtypes/Asset/Settings.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_4d870364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=4d870364& */ "./resources/js/fieldtypes/Asset/Settings.vue?vue&type=template&id=4d870364&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_4d870364___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_4d870364___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/Asset/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/Asset/Settings.vue?vue&type=template&id=4d870364&":
/*!***********************************************************************************!*\
  !*** ./resources/js/fieldtypes/Asset/Settings.vue?vue&type=template&id=4d870364& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_4d870364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=4d870364& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=template&id=4d870364&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_4d870364___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_4d870364___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
      type: Object,
      required: true
    }
  },
  computed: {
    settings: function settings() {
      return this.value.settings || {};
    },
    errors: function errors() {
      return this.value.errors || {};
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvU2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L1NldHRpbmdzLnZ1ZT80YjUzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9TZXR0aW5ncy52dWU/ZDRlNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9TZXR0aW5ncy52dWU/MWNmOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL2ZpZWxkdHlwZS5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsInZhbHVlIiwidHlwZSIsIk9iamVjdCIsInJlcXVpcmVkIiwiY29tcHV0ZWQiLCJzZXR0aW5ncyIsImVycm9ycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2Q0E7QUFFQTtBQUNBLGtDQURBO0FBR0EscUVBSEE7QUFLQSxNQUxBLGtCQUtBO0FBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUEsdUJBRkE7QUFHQSxzQkFIQTtBQUlBO0FBSkEsT0FEQTtBQU9BO0FBUEE7QUFTQSxHQWZBO0FBaUJBLFNBakJBLHFCQWlCQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLE9BRkE7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxLQU5BO0FBT0E7QUF6QkEsRzs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUVBQXlFO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDJCQUEyQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQUE7QUFBQTtBQUFBO0FBQXVGO0FBQzNCO0FBQ0w7OztBQUd2RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUE4TCxDQUFnQixvUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFlO0FBQ1hBLE9BQUssRUFBRTtBQUNIQyxTQUFLLEVBQUU7QUFDSEMsVUFBSSxFQUFFQyxNQURIO0FBRUhDLGNBQVEsRUFBRTtBQUZQO0FBREosR0FESTtBQVFYQyxVQUFRLEVBQUU7QUFDTkMsWUFETSxzQkFDSztBQUNQLGFBQU8sS0FBS0wsS0FBTCxDQUFXSyxRQUFYLElBQXVCLEVBQTlCO0FBQ0gsS0FISztBQUtOQyxVQUxNLG9CQUtHO0FBQ0wsYUFBTyxLQUFLTixLQUFMLENBQVdNLE1BQVgsSUFBcUIsRUFBNUI7QUFDSDtBQVBLO0FBUkMsQ0FBZixFIiwiZmlsZSI6ImpzL2NodW5rcy8zMS5qcz9pZD0yODJjZjViYTg4YWJmMzcxYWI2MCIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgXHQ8ZGl2IGNsYXNzPVwiY29sIHctMS8yXCI+XG5cdFx0XHQ8cC1udW1iZXJcblx0XHRcdFx0bmFtZT1cInNldHRpbmdzLmxpbWl0XCJcblx0XHRcdFx0bGFiZWw9XCJMaW1pdFwiXG5cdFx0XHRcdGhlbHA9XCJMaW1pdCB0aGUgbnVtYmVyIG9mIGFzc2V0cyBzZWxlY3RlZDsgbGVhdmUgYmxhbmsgaWYgbm8gbGltaXQgaXMgZGVzaXJlZC5cIlxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cIlwiXG5cdFx0XHRcdHYtbW9kZWw9XCJzZXR0aW5ncy5saW1pdFwiXG5cdFx0XHRcdDpoYXMtZXJyb3I9XCJlcnJvcnMuaGFzKCdzZXR0aW5ncy5saW1pdCcpXCJcbiAgICAgICAgICAgXHRcdDplcnJvci1tZXNzYWdlPVwiZXJyb3JzLmdldCgnc2V0dGluZ3MubGltaXQnKVwiPlxuXHRcdFx0PC9wLW51bWJlcj5cblxuXHRcdFx0PHAtY2hlY2tib3gtZ3JvdXBcblx0XHRcdFx0bGFiZWw9XCJGaWxlIHR5cGUgcmVzdHJpY3Rpb25zXCJcblx0XHRcdFx0aGVscD1cIlJlc3RyaWN0IHdoaWNoIGZpbGUgdHlwZXMgYXJlIHNlbGVjdGFibGUgZm9yIHRoaXMgZmllbGQ7IGxlYXZlIGJsYW5rIGlmIG5vIHJldHJpY3Rpb24gaXMgZGVzaXJlZC5cIlxuXHRcdFx0XHQ6aGFzLWVycm9yPVwiZXJyb3JzLmhhcygnc2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zJylcIlxuICAgICAgIFx0XHRcdDplcnJvci1tZXNzYWdlPVwiZXJyb3JzLmdldCgnc2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zJylcIj5cblx0XHRcdFx0PHAtY2hlY2tib3hcblx0XHRcdFx0XHR2LWZvcj1cIihmaWxldHlwZSwgaW5kZXgpIGluIGZpbGV0eXBlc1wiXG5cdFx0XHRcdFx0bmFtZT1cInNldHRpbmdzLmZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiXG5cdFx0XHRcdFx0OmlkPVwiaW5kZXhcIlxuXHRcdFx0XHRcdDprZXk9XCJpbmRleFwiXG5cdFx0XHRcdFx0Om5hdGl2ZS12YWx1ZT1cImluZGV4XCJcblx0XHRcdFx0XHR2LW1vZGVsPVwic2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zXCI+XG5cdFx0XHRcdFx0e3sgZmlsZXR5cGUgfX1cblx0XHRcdFx0PC9wLWNoZWNrYm94PlxuXHRcdFx0PC9wLWNoZWNrYm94LWdyb3VwPlxuXHRcdDwvZGl2PlxuXG4gICAgXHQ8ZGl2IGNsYXNzPVwiY29sIHctMS8yXCI+XG5cdFx0XHQ8cC1zZWxlY3Rcblx0XHRcdFx0bmFtZT1cInNldHRpbmdzLnJvb3RfZGlyZWN0b3J5XCJcblx0XHRcdFx0bGFiZWw9XCJSb290IGRpcmVjdG9yeVwiXG5cdFx0XHRcdGhlbHA9XCJTZWxlY3Qgcm9vdCBmb2xkZXIgZm9yIHRoaXMgZmllbGQ7IGRlZmF1bHQgcm9vdCB3aWxsIGJlIHVzZWQgaWYgTm9uZSBzZWxlY3RlZC5cIlxuXHRcdFx0XHQ6b3B0aW9ucz1cImRpcmVjdG9yaWVzXCJcblx0XHRcdFx0di1tb2RlbD1cInNldHRpbmdzLnJvb3RfZGlyZWN0b3J5XCJcblx0XHRcdFx0Omhhcy1lcnJvcj1cImVycm9ycy5oYXMoJ3NldHRpbmdzLnJvb3RfZGlyZWN0b3J5JylcIlxuICAgICAgICAgICBcdFx0OmVycm9yLW1lc3NhZ2U9XCJlcnJvcnMuZ2V0KCdzZXR0aW5ncy5yb290X2RpcmVjdG9yeScpXCI+XG5cdFx0XHQ8L3Atc2VsZWN0PlxuXHQgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgZmllbGR0eXBlIGZyb20gJy4uLy4uL21peGlucy9maWVsZHR5cGUnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdhc3NldC1maWVsZHR5cGUtc2V0dGluZ3MnLFxuXG4gICAgICAgIG1peGluczogW2ZpZWxkdHlwZV0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgXHRyZXR1cm4ge1xuICAgICAgICBcdFx0ZmlsZXR5cGVzOiB7XG5cdCAgICAgICAgICAgICAgICBpbWFnZTogICAgJ0ltYWdlcycsXG5cdCAgICAgICAgICAgICAgICB2aWRlbzogICAgJ1ZpZGVvcycsXG5cdCAgICAgICAgICAgICAgICBhdWRpbzogICAgJ0F1ZGlvJyxcblx0ICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnRG9jdW1lbnRzJyxcblx0ICAgICAgICBcdH0sXG5cdCAgICAgICAgXHRkaXJlY3RvcmllczogW11cblx0ICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgXHRheGlvcy5nZXQoJy9hcGkvZGlyZWN0b3JpZXMnKS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0dGhpcy5kaXJlY3RvcmllcyA9IF8ubWFwKHJlc3BvbnNlLmRhdGEuZGF0YSwgKGRpcmVjdG9yeSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7ICdsYWJlbCc6IGRpcmVjdG9yeS5uYW1lLCAndmFsdWUnOiBkaXJlY3RvcnkuaWQgfVxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdHRoaXMuZGlyZWN0b3JpZXMudW5zaGlmdCh7ICdsYWJlbCc6ICdOb25lJywgJ3ZhbHVlJzogbnVsbCB9KVxuICAgICAgICBcdH0pXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LTEvMlwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicC1udW1iZXJcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBcInNldHRpbmdzLmxpbWl0XCIsXG4gICAgICAgICAgICBsYWJlbDogXCJMaW1pdFwiLFxuICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgXCJMaW1pdCB0aGUgbnVtYmVyIG9mIGFzc2V0cyBzZWxlY3RlZDsgbGVhdmUgYmxhbmsgaWYgbm8gbGltaXQgaXMgZGVzaXJlZC5cIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiLFxuICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmVycm9ycy5oYXMoXCJzZXR0aW5ncy5saW1pdFwiKSxcbiAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZXJyb3JzLmdldChcInNldHRpbmdzLmxpbWl0XCIpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5zZXR0aW5ncy5saW1pdCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLCBcImxpbWl0XCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNldHRpbmdzLmxpbWl0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInAtY2hlY2tib3gtZ3JvdXBcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBsYWJlbDogXCJGaWxlIHR5cGUgcmVzdHJpY3Rpb25zXCIsXG4gICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgXCJSZXN0cmljdCB3aGljaCBmaWxlIHR5cGVzIGFyZSBzZWxlY3RhYmxlIGZvciB0aGlzIGZpZWxkOyBsZWF2ZSBibGFuayBpZiBubyByZXRyaWN0aW9uIGlzIGRlc2lyZWQuXCIsXG4gICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5lcnJvcnMuaGFzKFwic2V0dGluZ3MuZmlsZXR5cGVfcmVzdHJpY3Rpb25zXCIpLFxuICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmVycm9ycy5nZXQoXCJzZXR0aW5ncy5maWxldHlwZV9yZXN0cmljdGlvbnNcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIF92bS5fbChfdm0uZmlsZXR5cGVzLCBmdW5jdGlvbihmaWxldHlwZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJwLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNldHRpbmdzLmZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgaWQ6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogaW5kZXhcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLmZpbGV0eXBlX3Jlc3RyaWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNldHRpbmdzLCBcImZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZXR0aW5ncy5maWxldHlwZV9yZXN0cmljdGlvbnNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKGZpbGV0eXBlKSArIFwiXFxuXFx0XFx0XFx0XFx0XCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy0xLzJcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogXCJzZXR0aW5ncy5yb290X2RpcmVjdG9yeVwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiUm9vdCBkaXJlY3RvcnlcIixcbiAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgIFwiU2VsZWN0IHJvb3QgZm9sZGVyIGZvciB0aGlzIGZpZWxkOyBkZWZhdWx0IHJvb3Qgd2lsbCBiZSB1c2VkIGlmIE5vbmUgc2VsZWN0ZWQuXCIsXG4gICAgICAgICAgICBvcHRpb25zOiBfdm0uZGlyZWN0b3JpZXMsXG4gICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZXJyb3JzLmhhcyhcInNldHRpbmdzLnJvb3RfZGlyZWN0b3J5XCIpLFxuICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5lcnJvcnMuZ2V0KFwic2V0dGluZ3Mucm9vdF9kaXJlY3RvcnlcIilcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNldHRpbmdzLnJvb3RfZGlyZWN0b3J5LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2V0dGluZ3MsIFwicm9vdF9kaXJlY3RvcnlcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2V0dGluZ3Mucm9vdF9kaXJlY3RvcnlcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkODcwMzY0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9mdXNpb24vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNGQ4NzAzNjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNGQ4NzAzNjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNGQ4NzAzNjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDg3MDM2NCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0ZDg3MDM2NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvU2V0dGluZ3MudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZDg3MDM2NCZcIiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc2V0dGluZ3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy52YWx1ZS5zZXR0aW5ncyB8fCB7fVxuICAgICAgICB9LFxuXG4gICAgICAgIGVycm9ycygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnZhbHVlLmVycm9ycyB8fCB7fVxuICAgICAgICB9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=