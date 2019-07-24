(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Code/Settings.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Code/Settings.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/fieldtype */ "./resources/js/mixins/fieldtype.js");
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
  name: 'code-fieldtype-settings',
  data: function data() {
    return {
      syntax: this.value.type || 'text'
    };
  },
  mixins: [_mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Code/Settings.vue?vue&type=template&id=2ad3d8a0&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Code/Settings.vue?vue&type=template&id=2ad3d8a0& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    [
      _c("p-select", {
        attrs: {
          name: "settings.syntax",
          label: "Syntax",
          help: "What language should the syntax highlighter use?",
          autocomplete: "off",
          options: [
            {
              value: "apache_conf",
              label: "Apache_Conf"
            },
            {
              value: "css",
              label: "CSS"
            },
            {
              value: "gitignore",
              label: "Gitignore"
            },
            {
              value: "html",
              label: "HTML"
            },
            {
              value: "javascript",
              label: "JavaScript"
            },
            {
              value: "json",
              label: "JSON"
            },
            {
              value: "less",
              label: "LESS"
            },
            {
              value: "markdown",
              label: "Markdown"
            },
            {
              value: "mysql",
              label: "MySQL"
            },
            {
              value: "php",
              label: "PHP"
            },
            {
              value: "python",
              label: "Python"
            },
            {
              value: "ruby",
              label: "Ruby"
            },
            {
              value: "sass",
              label: "SASS"
            },
            {
              value: "scss",
              label: "SCSS"
            },
            {
              value: "sql",
              label: "SQL"
            },
            {
              value: "text",
              label: "Text"
            },
            {
              value: "typescript",
              label: "Typescript"
            },
            {
              value: "xml",
              label: "XML"
            },
            {
              value: "yaml",
              label: "YA"
            }
          ]
        },
        model: {
          value: _vm.value.syntax,
          callback: function($$v) {
            _vm.$set(_vm.value, "syntax", $$v)
          },
          expression: "value.syntax"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Fieldtypes/Code/Settings.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Code/Settings.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_2ad3d8a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=2ad3d8a0& */ "./resources/js/components/Fieldtypes/Code/Settings.vue?vue&type=template&id=2ad3d8a0&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Code/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_2ad3d8a0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_2ad3d8a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Code/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Code/Settings.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Code/Settings.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Code/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Code/Settings.vue?vue&type=template&id=2ad3d8a0&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Code/Settings.vue?vue&type=template&id=2ad3d8a0& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_2ad3d8a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=2ad3d8a0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Code/Settings.vue?vue&type=template&id=2ad3d8a0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_2ad3d8a0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_2ad3d8a0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Db2RlL1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0NvZGUvU2V0dGluZ3MudnVlP2ZkYmEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Db2RlL1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0NvZGUvU2V0dGluZ3MudnVlP2I0ZTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Db2RlL1NldHRpbmdzLnZ1ZT9kMjE4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9taXhpbnMvZmllbGR0eXBlLmpzIl0sIm5hbWVzIjpbInByb3BzIiwidmFsdWUiLCJyZXF1aXJlZCIsIndhdGNoIiwiZGVlcCIsImhhbmRsZXIiLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRGQTtBQUVBO0FBQ0EsaUNBREE7QUFHQSxNQUhBLGtCQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FQQTtBQVNBO0FBVEEsRzs7Ozs7Ozs7Ozs7O0FDOUZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pHQTtBQUFBO0FBQUE7QUFBQTtBQUF1RjtBQUMzQjtBQUNMOzs7QUFHdkQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsOEVBQU07QUFDUixFQUFFLG1GQUFNO0FBQ1IsRUFBRSw0RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBb00sQ0FBZ0Isb1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBeE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBZTtBQUNYQSxPQUFLLEVBQUU7QUFDSEMsU0FBSyxFQUFFO0FBQ0hDLGNBQVEsRUFBRTtBQURQO0FBREosR0FESTtBQU9YQyxPQUFLLEVBQUU7QUFDSEYsU0FBSyxFQUFFO0FBQ0hHLFVBQUksRUFBRSxJQURIO0FBRUhDLGFBRkcsbUJBRUtKLEtBRkwsRUFFWTtBQUNYLGFBQUtLLEtBQUwsQ0FBVyxPQUFYLEVBQW9CTCxLQUFwQjtBQUNIO0FBSkU7QUFESjtBQVBJLENBQWYsRSIsImZpbGUiOiJjaHVua3MvNTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHAtc2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwic2V0dGluZ3Muc3ludGF4XCJcbiAgICAgICAgICAgIGxhYmVsPVwiU3ludGF4XCJcbiAgICAgICAgICAgIGhlbHA9XCJXaGF0IGxhbmd1YWdlIHNob3VsZCB0aGUgc3ludGF4IGhpZ2hsaWdodGVyIHVzZT9cIlxuICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJ2YWx1ZS5zeW50YXhcIlxuICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdhcGFjaGVfY29uZicsXG4gICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0FwYWNoZV9Db25mJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdjc3MnLFxuICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDU1MnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2dpdGlnbm9yZScsXG4gICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0dpdGlnbm9yZSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0hUTUwnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2phdmFzY3JpcHQnLFxuICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdKYXZhU2NyaXB0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdqc29uJyxcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSlNPTidcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnbGVzcycsXG4gICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0xFU1MnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ21hcmtkb3duJyxcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTWFya2Rvd24nXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ215c3FsJyxcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTXlTUUwnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3BocCcsXG4gICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1BIUCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAncHl0aG9uJyxcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUHl0aG9uJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdydWJ5JyxcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUnVieSdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnc2FzcycsXG4gICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1NBU1MnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3Njc3MnLFxuICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTQ1NTJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdzcWwnLFxuICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdTUUwnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUZXh0J1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICd0eXBlc2NyaXB0JyxcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVHlwZXNjcmlwdCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAneG1sJyxcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnWE1MJ1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICd5YW1sJyxcbiAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnWUEnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVwiXG4gICAgICAgID5cbiAgICAgICAgPC9wLXNlbGVjdD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IGZpZWxkdHlwZSBmcm9tICcuLi8uLi8uLi9taXhpbnMvZmllbGR0eXBlJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnY29kZS1maWVsZHR5cGUtc2V0dGluZ3MnLFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHN5bnRheDogdGhpcy52YWx1ZS50eXBlIHx8ICd0ZXh0J1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1peGluczogW2ZpZWxkdHlwZV1cbiAgICB9XG48L3NjcmlwdD5cblxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIG5hbWU6IFwic2V0dGluZ3Muc3ludGF4XCIsXG4gICAgICAgICAgbGFiZWw6IFwiU3ludGF4XCIsXG4gICAgICAgICAgaGVscDogXCJXaGF0IGxhbmd1YWdlIHNob3VsZCB0aGUgc3ludGF4IGhpZ2hsaWdodGVyIHVzZT9cIixcbiAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJhcGFjaGVfY29uZlwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJBcGFjaGVfQ29uZlwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJjc3NcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQ1NTXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcImdpdGlnbm9yZVwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJHaXRpZ25vcmVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwiaHRtbFwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJIVE1MXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcImphdmFzY3JpcHRcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiSmF2YVNjcmlwdFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkpTT05cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwibGVzc1wiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJMRVNTXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcIm1hcmtkb3duXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIk1hcmtkb3duXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcIm15c3FsXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIk15U1FMXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcInBocFwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJQSFBcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwicHl0aG9uXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlB5dGhvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJydWJ5XCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlJ1YnlcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwic2Fzc1wiLFxuICAgICAgICAgICAgICBsYWJlbDogXCJTQVNTXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcInNjc3NcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU0NTU1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJzcWxcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiU1FMXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHZhbHVlOiBcInRleHRcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwiVGV4dFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJ0eXBlc2NyaXB0XCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlR5cGVzY3JpcHRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdmFsdWU6IFwieG1sXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIlhNTFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB2YWx1ZTogXCJ5YW1sXCIsXG4gICAgICAgICAgICAgIGxhYmVsOiBcIllBXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS52YWx1ZS5zeW50YXgsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnZhbHVlLCBcInN5bnRheFwiLCAkJHYpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInZhbHVlLnN5bnRheFwiXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYWQzZDhhMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3JvYmVydC9Db2RlL0VmZWxsZS9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJhZDNkOGEwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJhZDNkOGEwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmFkM2Q4YTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmFkM2Q4YTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvQ29kZS9TZXR0aW5ncy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJhZDNkOGEwJlwiIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==