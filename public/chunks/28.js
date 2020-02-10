(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _mixins_fieldtype__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mixins/fieldtype */ "./resources/js/mixins/fieldtype.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  mixins: [_mixins_fieldtype__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      filetypes: {
        everything: 'Everything',
        images: 'Images',
        videos: 'Videos',
        audio: 'Audio',
        documents: 'Documents'
      },
      defaultUploadOptions: []
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    directories: 'filemanager/getDirectories'
  })),
  watch: {
    directories: function directories(values) {
      this.defaultUploadOptions = _.map(values, function (value) {
        return {
          'label': value.name,
          'value': value.id
        };
      });
      this.defaultUploadOptions.unshift({
        'label': 'root',
        'value': null
      });
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories'
  })),
  mounted: function mounted() {
    this.fetchFilesAndDirectories();
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
            placeholder: ""
          },
          model: {
            value: _vm.value.limit,
            callback: function($$v) {
              _vm.$set(_vm.value, "limit", $$v)
            },
            expression: "value.limit"
          }
        }),
        _vm._v(" "),
        _c(
          "p-checkbox-group",
          {
            attrs: {
              label: "Directory restrictions",
              help: "Restrict which folders are accessible for this selection."
            }
          },
          _vm._l(_vm.directories, function(directory, index) {
            return _c(
              "p-checkbox",
              {
                key: directory.slug,
                attrs: {
                  name: "directory_restrictions",
                  id: directory.slug,
                  "native-value": directory.slug
                },
                model: {
                  value: _vm.value.directory_restrictions,
                  callback: function($$v) {
                    _vm.$set(_vm.value, "directory_restrictions", $$v)
                  },
                  expression: "value.directory_restrictions"
                }
              },
              [_vm._v(_vm._s(directory.name))]
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
            name: "default_upload_location",
            label: "Default upload location",
            options: _vm.defaultUploadOptions
          },
          model: {
            value: _vm.value.default_upload_location,
            callback: function($$v) {
              _vm.$set(_vm.value, "default_upload_location", $$v)
            },
            expression: "value.default_upload_location"
          }
        }),
        _vm._v(" "),
        _c(
          "p-checkbox-group",
          {
            attrs: {
              label: "File type restrictions",
              help: "Restrict which folders are accessible for this selection."
            }
          },
          _vm._l(_vm.filetypes, function(filetype, index) {
            return _c(
              "p-checkbox",
              {
                key: index,
                attrs: {
                  name: "filetype_restrictions",
                  id: index,
                  "native-value": index
                },
                model: {
                  value: _vm.value.filetype_restrictions,
                  callback: function($$v) {
                    _vm.$set(_vm.value, "filetype_restrictions", $$v)
                  },
                  expression: "value.filetype_restrictions"
                }
              },
              [_vm._v(_vm._s(filetype))]
            )
          }),
          1
        )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvU2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L1NldHRpbmdzLnZ1ZT80YjUzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9TZXR0aW5ncy52dWU/ZDRlNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9TZXR0aW5ncy52dWU/MWNmOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL2ZpZWxkdHlwZS5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsInZhbHVlIiwicmVxdWlyZWQiLCJ3YXRjaCIsImRlZXAiLCJoYW5kbGVyIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQ0E7QUFDQTtBQUVBO0FBQ0Esa0NBREE7QUFHQSxxRUFIQTtBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQSx3QkFGQTtBQUdBLHdCQUhBO0FBSUEsc0JBSkE7QUFLQTtBQUxBLE9BREE7QUFRQTtBQVJBO0FBVUEsR0FoQkE7QUFrQkEsOEJBQ0E7QUFDQTtBQURBLElBREEsQ0FsQkE7QUF3QkE7QUFDQSxlQURBLHVCQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxPQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVBBLEdBeEJBO0FBa0NBLDZCQUNBO0FBQ0E7QUFEQSxJQURBLENBbENBO0FBd0NBLFNBeENBLHFCQXdDQTtBQUNBO0FBQ0E7QUExQ0EsRzs7Ozs7Ozs7Ozs7O0FDOUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDJCQUEyQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JIQTtBQUFBO0FBQUE7QUFBQTtBQUF1RjtBQUMzQjtBQUNMOzs7QUFHdkQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBOEwsQ0FBZ0Isb1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZTtBQUNYQSxPQUFLLEVBQUU7QUFDSEMsU0FBSyxFQUFFO0FBQ0hDLGNBQVEsRUFBRTtBQURQO0FBREosR0FESTtBQU9YQyxPQUFLLEVBQUU7QUFDSEYsU0FBSyxFQUFFO0FBQ0hHLFVBQUksRUFBRSxJQURIO0FBRUhDLGFBRkcsbUJBRUtKLEtBRkwsRUFFWTtBQUNYLGFBQUtLLEtBQUwsQ0FBVyxPQUFYLEVBQW9CTCxLQUFwQjtBQUNIO0FBSkU7QUFESjtBQVBJLENBQWYsRSIsImZpbGUiOiJjaHVua3MvMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIFx0PGRpdiBjbGFzcz1cImNvbCB3LTEvMlwiPlxuXHRcdFx0PHAtbnVtYmVyIG5hbWU9XCJzZXR0aW5ncy5saW1pdFwiXG5cdFx0XHRcdGxhYmVsPVwiTGltaXRcIlxuXHRcdFx0XHRoZWxwPVwiTGltaXQgdGhlIG51bWJlciBvZiBhc3NldHMgc2VsZWN0ZWQ7IGxlYXZlIGJsYW5rIGlmIG5vIGxpbWl0IGlzIGRlc2lyZWQuXCJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCJcIlxuXHRcdFx0XHR2LW1vZGVsPVwidmFsdWUubGltaXRcIj5cblx0XHRcdDwvcC1udW1iZXI+XG5cdFx0XHRcblx0XHRcdDxwLWNoZWNrYm94LWdyb3VwIGxhYmVsPVwiRGlyZWN0b3J5IHJlc3RyaWN0aW9uc1wiIGhlbHA9XCJSZXN0cmljdCB3aGljaCBmb2xkZXJzIGFyZSBhY2Nlc3NpYmxlIGZvciB0aGlzIHNlbGVjdGlvbi5cIj5cblx0XHRcdFx0PHAtY2hlY2tib3hcblx0XHRcdFx0XHR2LWZvcj1cIihkaXJlY3RvcnksIGluZGV4KSBpbiBkaXJlY3Rvcmllc1wiXG5cdFx0XHRcdFx0bmFtZT1cImRpcmVjdG9yeV9yZXN0cmljdGlvbnNcIlxuXHRcdFx0XHRcdDppZD1cImRpcmVjdG9yeS5zbHVnXCJcblx0XHRcdFx0XHQ6a2V5PVwiZGlyZWN0b3J5LnNsdWdcIlxuXHRcdFx0XHRcdDpuYXRpdmUtdmFsdWU9XCJkaXJlY3Rvcnkuc2x1Z1wiXG5cdFx0XHRcdFx0di1tb2RlbD1cInZhbHVlLmRpcmVjdG9yeV9yZXN0cmljdGlvbnNcIj57eyBkaXJlY3RvcnkubmFtZSB9fTwvcC1jaGVja2JveD5cblx0XHRcdDwvcC1jaGVja2JveC1ncm91cD5cblx0XHQ8L2Rpdj5cblxuICAgIFx0PGRpdiBjbGFzcz1cImNvbCB3LTEvMlwiPlxuXHRcdFx0PHAtc2VsZWN0XG5cdFx0XHRcdG5hbWU9XCJkZWZhdWx0X3VwbG9hZF9sb2NhdGlvblwiXG5cdFx0XHRcdGxhYmVsPVwiRGVmYXVsdCB1cGxvYWQgbG9jYXRpb25cIlxuXHRcdFx0XHQ6b3B0aW9ucz1cImRlZmF1bHRVcGxvYWRPcHRpb25zXCJcblx0XHRcdFx0di1tb2RlbD1cInZhbHVlLmRlZmF1bHRfdXBsb2FkX2xvY2F0aW9uXCI+XG5cdFx0XHQ8L3Atc2VsZWN0PlxuXG5cdFx0XHQ8cC1jaGVja2JveC1ncm91cCBsYWJlbD1cIkZpbGUgdHlwZSByZXN0cmljdGlvbnNcIiBoZWxwPVwiUmVzdHJpY3Qgd2hpY2ggZm9sZGVycyBhcmUgYWNjZXNzaWJsZSBmb3IgdGhpcyBzZWxlY3Rpb24uXCI+XG5cdFx0XHQgICAgPHAtY2hlY2tib3hcblx0XHRcdCAgICBcdHYtZm9yPVwiKGZpbGV0eXBlLCBpbmRleCkgaW4gZmlsZXR5cGVzXCJcblx0XHRcdCAgICBcdG5hbWU9XCJmaWxldHlwZV9yZXN0cmljdGlvbnNcIlxuXHRcdFx0ICAgIFx0OmlkPVwiaW5kZXhcIlxuXHRcdFx0ICAgIFx0OmtleT1cImluZGV4XCJcblx0XHRcdCAgICBcdDpuYXRpdmUtdmFsdWU9XCJpbmRleFwiXG5cdFx0XHQgICAgXHR2LW1vZGVsPVwidmFsdWUuZmlsZXR5cGVfcmVzdHJpY3Rpb25zXCI+e3sgZmlsZXR5cGUgfX08L3AtY2hlY2tib3g+XG5cdFx0XHQ8L3AtY2hlY2tib3gtZ3JvdXA+XG5cdCAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuICAgIGltcG9ydCBmaWVsZHR5cGUgZnJvbSAnLi4vLi4vbWl4aW5zL2ZpZWxkdHlwZSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ2Fzc2V0LWZpZWxkdHlwZS1zZXR0aW5ncycsXG5cbiAgICAgICAgbWl4aW5zOiBbZmllbGR0eXBlXSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICBcdHJldHVybiB7XG4gICAgICAgIFx0XHRmaWxldHlwZXM6IHtcblx0ICAgICAgICBcdFx0ZXZlcnl0aGluZzogJ0V2ZXJ5dGhpbmcnLFxuXHQgICAgICAgICAgICAgICAgaW1hZ2VzOiAgICAgJ0ltYWdlcycsXG5cdCAgICAgICAgICAgICAgICB2aWRlb3M6ICAgICAnVmlkZW9zJyxcblx0ICAgICAgICAgICAgICAgIGF1ZGlvOiAgICAgICdBdWRpbycsXG5cdCAgICAgICAgICAgICAgICBkb2N1bWVudHM6ICAnRG9jdW1lbnRzJyxcblx0ICAgICAgICBcdH0sXG5cdCAgICAgICAgXHRkZWZhdWx0VXBsb2FkT3B0aW9uczogW11cblx0ICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgICAgICAgICAgIGRpcmVjdG9yaWVzOiAnZmlsZW1hbmFnZXIvZ2V0RGlyZWN0b3JpZXMnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICBcdGRpcmVjdG9yaWVzKHZhbHVlcykge1xuICAgICAgICBcdFx0dGhpcy5kZWZhdWx0VXBsb2FkT3B0aW9ucyA9IF8ubWFwKHZhbHVlcywgZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHRyZXR1cm4geyAnbGFiZWwnOiB2YWx1ZS5uYW1lLCAndmFsdWUnOiB2YWx1ZS5pZCB9XG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0dGhpcy5kZWZhdWx0VXBsb2FkT3B0aW9ucy51bnNoaWZ0KHsgJ2xhYmVsJzogJ3Jvb3QnLCAndmFsdWUnIDogbnVsbCB9KVxuICAgICAgICBcdH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICAuLi5tYXBBY3Rpb25zKHtcbiAgICAgICAgICAgICAgICBmZXRjaEZpbGVzQW5kRGlyZWN0b3JpZXM6ICdmaWxlbWFuYWdlci9mZXRjaEZpbGVzQW5kRGlyZWN0b3JpZXMnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICBcdHRoaXMuZmV0Y2hGaWxlc0FuZERpcmVjdG9yaWVzKClcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctMS8yXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwLW51bWJlclwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IFwic2V0dGluZ3MubGltaXRcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIkxpbWl0XCIsXG4gICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICBcIkxpbWl0IHRoZSBudW1iZXIgb2YgYXNzZXRzIHNlbGVjdGVkOyBsZWF2ZSBibGFuayBpZiBubyBsaW1pdCBpcyBkZXNpcmVkLlwiLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlLmxpbWl0LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0udmFsdWUsIFwibGltaXRcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsdWUubGltaXRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwicC1jaGVja2JveC1ncm91cFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRpcmVjdG9yeSByZXN0cmljdGlvbnNcIixcbiAgICAgICAgICAgICAgaGVscDogXCJSZXN0cmljdCB3aGljaCBmb2xkZXJzIGFyZSBhY2Nlc3NpYmxlIGZvciB0aGlzIHNlbGVjdGlvbi5cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5kaXJlY3RvcmllcywgZnVuY3Rpb24oZGlyZWN0b3J5LCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcInAtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogZGlyZWN0b3J5LnNsdWcsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGlyZWN0b3J5X3Jlc3RyaWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgaWQ6IGRpcmVjdG9yeS5zbHVnLFxuICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogZGlyZWN0b3J5LnNsdWdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlLmRpcmVjdG9yeV9yZXN0cmljdGlvbnMsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS52YWx1ZSwgXCJkaXJlY3RvcnlfcmVzdHJpY3Rpb25zXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZhbHVlLmRpcmVjdG9yeV9yZXN0cmljdGlvbnNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZGlyZWN0b3J5Lm5hbWUpKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctMS8yXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZGVmYXVsdF91cGxvYWRfbG9jYXRpb25cIixcbiAgICAgICAgICAgIGxhYmVsOiBcIkRlZmF1bHQgdXBsb2FkIGxvY2F0aW9uXCIsXG4gICAgICAgICAgICBvcHRpb25zOiBfdm0uZGVmYXVsdFVwbG9hZE9wdGlvbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlLmRlZmF1bHRfdXBsb2FkX2xvY2F0aW9uLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0udmFsdWUsIFwiZGVmYXVsdF91cGxvYWRfbG9jYXRpb25cIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsdWUuZGVmYXVsdF91cGxvYWRfbG9jYXRpb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwicC1jaGVja2JveC1ncm91cFwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGxhYmVsOiBcIkZpbGUgdHlwZSByZXN0cmljdGlvbnNcIixcbiAgICAgICAgICAgICAgaGVscDogXCJSZXN0cmljdCB3aGljaCBmb2xkZXJzIGFyZSBhY2Nlc3NpYmxlIGZvciB0aGlzIHNlbGVjdGlvbi5cIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5maWxldHlwZXMsIGZ1bmN0aW9uKGZpbGV0eXBlLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcInAtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmlsZXR5cGVfcmVzdHJpY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICBpZDogaW5kZXgsXG4gICAgICAgICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiBpbmRleFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWUuZmlsZXR5cGVfcmVzdHJpY3Rpb25zLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0udmFsdWUsIFwiZmlsZXR5cGVfcmVzdHJpY3Rpb25zXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZhbHVlLmZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhmaWxldHlwZSkpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ4NzAzNjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRkODcwMzY0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRkODcwMzY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRkODcwMzY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ4NzAzNjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGQ4NzAzNjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L1NldHRpbmdzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ4NzAzNjQmXCIiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgICAgIGhhbmRsZXIodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9