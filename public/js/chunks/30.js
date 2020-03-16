(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Asset/Settings.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [__webpack_require__(/*! ../../mixins/fieldtype */ "./resources/js/mixins/fieldtype.js")["default"]],
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
              label: "File type restrictions",
              help:
                "Restrict which file types are selectable for this field; leave blank if no retriction is desired."
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
            name: "root_directory",
            label: "Root directory",
            help:
              "Select root folder for this field; default root will be used if None selected.",
            options: _vm.directories
          },
          model: {
            value: _vm.value.root_directory,
            callback: function($$v) {
              _vm.$set(_vm.value, "root_directory", $$v)
            },
            expression: "value.root_directory"
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvU2V0dGluZ3MudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L1NldHRpbmdzLnZ1ZT80YjUzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L1NldHRpbmdzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9TZXR0aW5ncy52dWU/ZDRlNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9TZXR0aW5ncy52dWU/MWNmOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL2ZpZWxkdHlwZS5qcyJdLCJuYW1lcyI6WyJwcm9wcyIsInZhbHVlIiwicmVxdWlyZWQiLCJ3YXRjaCIsImRlZXAiLCJoYW5kbGVyIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvQ0E7QUFDQSxrQ0FEQTtBQUdBLFdBQ0Esa0dBREEsQ0FIQTtBQU9BLE1BUEEsa0JBT0E7QUFDQTtBQUNBO0FBQ0EsdUJBREE7QUFFQSx1QkFGQTtBQUdBLHNCQUhBO0FBSUE7QUFKQSxPQURBO0FBT0E7QUFQQTtBQVNBLEdBakJBO0FBbUJBLFNBbkJBLHFCQW1CQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBLE9BRkE7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxLQU5BO0FBT0E7QUEzQkEsRzs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFCQUFxQjtBQUN6QztBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5RUFBeUU7QUFDekU7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywyQkFBMkI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQXVGO0FBQzNCO0FBQ0w7OztBQUd2RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsbUZBQU07QUFDUixFQUFFLDRGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUE4TCxDQUFnQixvUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFlO0FBQ1hBLE9BQUssRUFBRTtBQUNIQyxTQUFLLEVBQUU7QUFDSEMsY0FBUSxFQUFFO0FBRFA7QUFESixHQURJO0FBT1hDLE9BQUssRUFBRTtBQUNIRixTQUFLLEVBQUU7QUFDSEcsVUFBSSxFQUFFLElBREg7QUFFSEMsYUFGRyxtQkFFS0osS0FGTCxFQUVZO0FBQ1gsYUFBS0ssS0FBTCxDQUFXLE9BQVgsRUFBb0JMLEtBQXBCO0FBQ0g7QUFKRTtBQURKO0FBUEksQ0FBZixFIiwiZmlsZSI6ImpzL2NodW5rcy8zMC5qcz9pZD03OWU4ZmYwNzBhZjU5N2U4MDJjYiIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgXHQ8ZGl2IGNsYXNzPVwiY29sIHctMS8yXCI+XG5cdFx0XHQ8cC1udW1iZXIgbmFtZT1cInNldHRpbmdzLmxpbWl0XCJcblx0XHRcdFx0bGFiZWw9XCJMaW1pdFwiXG5cdFx0XHRcdGhlbHA9XCJMaW1pdCB0aGUgbnVtYmVyIG9mIGFzc2V0cyBzZWxlY3RlZDsgbGVhdmUgYmxhbmsgaWYgbm8gbGltaXQgaXMgZGVzaXJlZC5cIlxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cIlwiXG5cdFx0XHRcdHYtbW9kZWw9XCJ2YWx1ZS5saW1pdFwiPlxuXHRcdFx0PC9wLW51bWJlcj5cblxuXHRcdFx0PHAtY2hlY2tib3gtZ3JvdXAgbGFiZWw9XCJGaWxlIHR5cGUgcmVzdHJpY3Rpb25zXCIgaGVscD1cIlJlc3RyaWN0IHdoaWNoIGZpbGUgdHlwZXMgYXJlIHNlbGVjdGFibGUgZm9yIHRoaXMgZmllbGQ7IGxlYXZlIGJsYW5rIGlmIG5vIHJldHJpY3Rpb24gaXMgZGVzaXJlZC5cIj5cblx0XHRcdFx0PHAtY2hlY2tib3hcblx0XHRcdFx0XHR2LWZvcj1cIihmaWxldHlwZSwgaW5kZXgpIGluIGZpbGV0eXBlc1wiXG5cdFx0XHRcdFx0bmFtZT1cImZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiXG5cdFx0XHRcdFx0OmlkPVwiaW5kZXhcIlxuXHRcdFx0XHRcdDprZXk9XCJpbmRleFwiXG5cdFx0XHRcdFx0Om5hdGl2ZS12YWx1ZT1cImluZGV4XCJcblx0XHRcdFx0XHR2LW1vZGVsPVwidmFsdWUuZmlsZXR5cGVfcmVzdHJpY3Rpb25zXCI+XG5cdFx0XHRcdFx0e3sgZmlsZXR5cGUgfX1cblx0XHRcdFx0PC9wLWNoZWNrYm94PlxuXHRcdFx0PC9wLWNoZWNrYm94LWdyb3VwPlxuXHRcdDwvZGl2PlxuXG4gICAgXHQ8ZGl2IGNsYXNzPVwiY29sIHctMS8yXCI+XG5cdFx0XHQ8cC1zZWxlY3Rcblx0XHRcdFx0bmFtZT1cInJvb3RfZGlyZWN0b3J5XCJcblx0XHRcdFx0bGFiZWw9XCJSb290IGRpcmVjdG9yeVwiXG5cdFx0XHRcdGhlbHA9XCJTZWxlY3Qgcm9vdCBmb2xkZXIgZm9yIHRoaXMgZmllbGQ7IGRlZmF1bHQgcm9vdCB3aWxsIGJlIHVzZWQgaWYgTm9uZSBzZWxlY3RlZC5cIlxuXHRcdFx0XHQ6b3B0aW9ucz1cImRpcmVjdG9yaWVzXCJcblx0XHRcdFx0di1tb2RlbD1cInZhbHVlLnJvb3RfZGlyZWN0b3J5XCI+XG5cdFx0XHQ8L3Atc2VsZWN0PlxuXHQgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ2Fzc2V0LWZpZWxkdHlwZS1zZXR0aW5ncycsXG5cbiAgICAgICAgbWl4aW5zOiBbXG4gICAgICAgIFx0cmVxdWlyZSAoJy4uLy4uL21peGlucy9maWVsZHR5cGUnKS5kZWZhdWx0XG4gICAgICAgIF0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgXHRyZXR1cm4ge1xuICAgICAgICBcdFx0ZmlsZXR5cGVzOiB7XG5cdCAgICAgICAgICAgICAgICBpbWFnZTogICAgJ0ltYWdlcycsXG5cdCAgICAgICAgICAgICAgICB2aWRlbzogICAgJ1ZpZGVvcycsXG5cdCAgICAgICAgICAgICAgICBhdWRpbzogICAgJ0F1ZGlvJyxcblx0ICAgICAgICAgICAgICAgIGRvY3VtZW50OiAnRG9jdW1lbnRzJyxcblx0ICAgICAgICBcdH0sXG5cdCAgICAgICAgXHRkaXJlY3RvcmllczogW11cblx0ICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY3JlYXRlZCgpIHtcbiAgICAgICAgXHRheGlvcy5nZXQoJy9hcGkvZGlyZWN0b3JpZXMnKS50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0dGhpcy5kaXJlY3RvcmllcyA9IF8ubWFwKHJlc3BvbnNlLmRhdGEuZGF0YSwgKGRpcmVjdG9yeSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7ICdsYWJlbCc6IGRpcmVjdG9yeS5uYW1lLCAndmFsdWUnOiBkaXJlY3RvcnkuaWQgfVxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdHRoaXMuZGlyZWN0b3JpZXMudW5zaGlmdCh7ICdsYWJlbCc6ICdOb25lJywgJ3ZhbHVlJzogbnVsbCB9KVxuICAgICAgICBcdH0pXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cblxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LTEvMlwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicC1udW1iZXJcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBcInNldHRpbmdzLmxpbWl0XCIsXG4gICAgICAgICAgICBsYWJlbDogXCJMaW1pdFwiLFxuICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgXCJMaW1pdCB0aGUgbnVtYmVyIG9mIGFzc2V0cyBzZWxlY3RlZDsgbGVhdmUgYmxhbmsgaWYgbm8gbGltaXQgaXMgZGVzaXJlZC5cIixcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS52YWx1ZS5saW1pdCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnZhbHVlLCBcImxpbWl0XCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInZhbHVlLmxpbWl0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInAtY2hlY2tib3gtZ3JvdXBcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBsYWJlbDogXCJGaWxlIHR5cGUgcmVzdHJpY3Rpb25zXCIsXG4gICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgXCJSZXN0cmljdCB3aGljaCBmaWxlIHR5cGVzIGFyZSBzZWxlY3RhYmxlIGZvciB0aGlzIGZpZWxkOyBsZWF2ZSBibGFuayBpZiBubyByZXRyaWN0aW9uIGlzIGRlc2lyZWQuXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIF92bS5fbChfdm0uZmlsZXR5cGVzLCBmdW5jdGlvbihmaWxldHlwZSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJwLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiLFxuICAgICAgICAgICAgICAgICAgaWQ6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogaW5kZXhcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlLmZpbGV0eXBlX3Jlc3RyaWN0aW9ucyxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnZhbHVlLCBcImZpbGV0eXBlX3Jlc3RyaWN0aW9uc1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWx1ZS5maWxldHlwZV9yZXN0cmljdGlvbnNcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKGZpbGV0eXBlKSArIFwiXFxuXFx0XFx0XFx0XFx0XCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy0xLzJcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogXCJyb290X2RpcmVjdG9yeVwiLFxuICAgICAgICAgICAgbGFiZWw6IFwiUm9vdCBkaXJlY3RvcnlcIixcbiAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgIFwiU2VsZWN0IHJvb3QgZm9sZGVyIGZvciB0aGlzIGZpZWxkOyBkZWZhdWx0IHJvb3Qgd2lsbCBiZSB1c2VkIGlmIE5vbmUgc2VsZWN0ZWQuXCIsXG4gICAgICAgICAgICBvcHRpb25zOiBfdm0uZGlyZWN0b3JpZXNcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlLnJvb3RfZGlyZWN0b3J5LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0udmFsdWUsIFwicm9vdF9kaXJlY3RvcnlcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmFsdWUucm9vdF9kaXJlY3RvcnlcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkODcwMzY0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0ZDg3MDM2NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0ZDg3MDM2NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0ZDg3MDM2NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkODcwMzY0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRkODcwMzY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9TZXR0aW5ncy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NldHRpbmdzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZXR0aW5ncy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2V0dGluZ3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkODcwMzY0JlwiIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==