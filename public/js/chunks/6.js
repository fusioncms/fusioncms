(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/SharedForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Importer/SharedForm.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      groups: {},
      groupOptions: []
    };
  },
  props: {
    form: {
      type: Object,
      required: true
    }
  },
  watch: {
    'form.module': function formModule(value) {
      this.setFormGroup(value);
    }
  },
  methods: {
    setFormGroup: function setFormGroup(value) {
      this.groupOptions = [];
      this.form.group = 0;

      if (_.has(this.groups, value)) {
        this.groupOptions = this.groups[value];

        if (this.form.group == 0) {
          this.form.group = _.head(this.groupOptions).value;
        }
      }
    } // updateCron(expression) {
    // 	this.form.schedule = expression
    // }

  },
  created: function created() {
    axios.all([axios.get('/api/taxonomies'), axios.get('/api/matrices')]).then(axios.spread(function (taxonomies, matrices) {
      this.groups['taxonomies'] = _.map(taxonomies.data.data, function (taxonomy) {
        return {
          'label': taxonomy.name,
          'value': taxonomy.id
        };
      });
      this.groups['matrices'] = _.reject(matrices.data.data, ['type', 'page']);
      this.groups['matrices'] = _.map(this.groups['matrices'], function (matrix) {
        return {
          'label': matrix.name,
          'value': matrix.id
        };
      });
      this.setFormGroup(this.form.module);
    }.bind(this)));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/SharedForm.vue?vue&type=template&id=6dd839b7&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Importer/SharedForm.vue?vue&type=template&id=6dd839b7& ***!
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
  return _c(
    "form",
    {
      on: {
        submit: function($event) {
          $event.preventDefault()
          return _vm.submit($event)
        }
      }
    },
    [
      _c("p-card", [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col w-full xxl:w-2/3" },
            [
              _c("p-input", {
                attrs: {
                  name: "name",
                  label: "Name",
                  help: "What this import feed be called.",
                  autocomplete: "off",
                  autofocus: "",
                  required: "",
                  "has-error": _vm.form.errors.has("name"),
                  "error-message": _vm.form.errors.get("name")
                },
                model: {
                  value: _vm.form.name,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form.name"
                }
              }),
              _vm._v(" "),
              _c("p-slug", {
                attrs: {
                  name: "handle",
                  label: "Handle",
                  help: "Unique identifier to index this import feed.",
                  autocomplete: "off",
                  required: "",
                  delimiter: "_",
                  watch: _vm.form.name,
                  "has-error": _vm.form.errors.has("handle"),
                  "error-message": _vm.form.errors.get("handle")
                },
                model: {
                  value: _vm.form.handle,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "handle", $$v)
                  },
                  expression: "form.handle"
                }
              }),
              _vm._v(" "),
              _c("p-input", {
                attrs: {
                  name: "source",
                  label: "Source",
                  help: "Google Sheets sheet reference URL.",
                  autocomplete: "off",
                  required: "",
                  "has-error": _vm.form.errors.has("source"),
                  "error-message": _vm.form.errors.get("source")
                },
                model: {
                  value: _vm.form.source,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "source", $$v)
                  },
                  expression: "form.source"
                }
              }),
              _vm._v(" "),
              _c("p-select", {
                attrs: {
                  name: "module",
                  label: "Module",
                  help: "Which module do you wish to import to?",
                  options: [
                    {
                      label: "Users",
                      value: "users"
                    },
                    {
                      label: "Taxonomies",
                      value: "taxonomies"
                    },
                    {
                      label: "Matrices",
                      value: "matrices"
                    }
                  ],
                  "has-error": _vm.form.errors.has("module"),
                  "error-message": _vm.form.errors.get("module")
                },
                model: {
                  value: _vm.form.module,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "module", $$v)
                  },
                  expression: "form.module"
                }
              }),
              _vm._v(" "),
              _vm.groupOptions.length > 0
                ? _c("p-select", {
                    attrs: {
                      name: "group",
                      label: "Group",
                      help: "Which group do you wish to import to?",
                      options: _vm.groupOptions,
                      "has-error": _vm.form.errors.has("group"),
                      "error-message": _vm.form.errors.get("group")
                    },
                    model: {
                      value: _vm.form.group,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "group", $$v)
                      },
                      expression: "form.group"
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "p-checkbox-group",
                {
                  attrs: {
                    label: "Strategy",
                    help:
                      "Strategy used when matching record is detected or missing from import (based on an unique identifier).",
                    "has-error": _vm.form.errors.has("strategy"),
                    "error-message": _vm.form.errors.get("strategy")
                  }
                },
                [
                  _c(
                    "p-checkbox",
                    {
                      attrs: {
                        name: "create",
                        id: "create",
                        "native-value": "create"
                      },
                      model: {
                        value: _vm.form.strategy,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "strategy", $$v)
                        },
                        expression: "form.strategy"
                      }
                    },
                    [
                      _vm._v("\n\t\t\t\t\t\t\tCreate "),
                      _c("span", { staticClass: "text-gray-500 italic" }, [
                        _vm._v(
                          "- Adds new elements if they do not already exist."
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p-checkbox",
                    {
                      attrs: {
                        name: "update",
                        id: "update",
                        "native-value": "update"
                      },
                      model: {
                        value: _vm.form.strategy,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "strategy", $$v)
                        },
                        expression: "form.strategy"
                      }
                    },
                    [
                      _vm._v("\n\t\t\t\t\t\t\tUpdate "),
                      _c("span", { staticClass: "text-gray-500 italic" }, [
                        _vm._v(
                          "- Updates elements when matching record is found."
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p-checkbox",
                    {
                      attrs: {
                        name: "disable",
                        id: "disable",
                        "native-value": "disable"
                      },
                      model: {
                        value: _vm.form.strategy,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "strategy", $$v)
                        },
                        expression: "form.strategy"
                      }
                    },
                    [
                      _vm._v("\n\t\t\t\t\t\t\tDisable "),
                      _c("span", { staticClass: "text-gray-500 italic" }, [
                        _vm._v(
                          "- Disables any elements that are missing from the import."
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "p-checkbox",
                    {
                      attrs: {
                        name: "delete",
                        id: "delete",
                        "native-value": "delete"
                      },
                      model: {
                        value: _vm.form.strategy,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "strategy", $$v)
                        },
                        expression: "form.strategy"
                      }
                    },
                    [
                      _vm._v("\n\t\t\t\t\t\t\tDelete "),
                      _c("span", { staticClass: "text-gray-500 italic" }, [
                        _vm._v(
                          "- Deletes any elements that are missing from the import."
                        )
                      ])
                    ]
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Importer/SharedForm.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Importer/SharedForm.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedForm_vue_vue_type_template_id_6dd839b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=template&id=6dd839b7& */ "./resources/js/views/Importer/SharedForm.vue?vue&type=template&id=6dd839b7&");
/* harmony import */ var _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=script&lang=js& */ "./resources/js/views/Importer/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedForm_vue_vue_type_template_id_6dd839b7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedForm_vue_vue_type_template_id_6dd839b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Importer/SharedForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Importer/SharedForm.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Importer/SharedForm.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Importer/SharedForm.vue?vue&type=template&id=6dd839b7&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Importer/SharedForm.vue?vue&type=template&id=6dd839b7& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_6dd839b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=template&id=6dd839b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/SharedForm.vue?vue&type=template&id=6dd839b7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_6dd839b7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_6dd839b7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL1NoYXJlZEZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9JbXBvcnRlci9TaGFyZWRGb3JtLnZ1ZT9lYmViIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9JbXBvcnRlci9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvU2hhcmVkRm9ybS52dWU/Y2NhZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvU2hhcmVkRm9ybS52dWU/MDYxNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4R0E7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBO0FBRkE7QUFJQSxHQU5BO0FBUUE7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQURBLEdBUkE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQUhBLEdBZkE7QUFxQkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBWkEsQ0FjQTtBQUNBO0FBQ0E7O0FBaEJBLEdBckJBO0FBd0NBLFNBeENBLHFCQXdDQTtBQUNBLGVBQ0EsNEJBREEsRUFFQSwwQkFGQSxHQUdBLElBSEEsQ0FHQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBO0FBRkE7QUFJQSxPQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0EsOEJBREE7QUFFQTtBQUZBO0FBSUEsT0FMQTtBQU9BO0FBQ0EsS0FqQkEsQ0FpQkEsSUFqQkEsQ0FpQkEsSUFqQkEsRUFIQTtBQXFCQTtBQTlEQSxHOzs7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QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBZ00sQ0FBZ0Isc1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy82LmpzP2lkPTA5ZjFiOWQxYjhjMmM0OGY2Mzc0Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cblx0XHQ8cC1jYXJkPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sIHctZnVsbCB4eGw6dy0yLzNcIj5cblx0XHRcdFx0XHQ8cC1pbnB1dFxuXHRcdFx0XHRcdFx0bmFtZT1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0bGFiZWw9XCJOYW1lXCJcblx0XHRcdFx0XHRcdGhlbHA9XCJXaGF0IHRoaXMgaW1wb3J0IGZlZWQgYmUgY2FsbGVkLlwiXG5cdFx0XHRcdFx0XHRhdXRvY29tcGxldGU9XCJvZmZcIlxuXHRcdFx0XHRcdFx0YXV0b2ZvY3VzXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0Omhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZScpXCJcblx0XHRcdFx0XHRcdDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCduYW1lJylcIlxuXHRcdFx0XHRcdFx0di1tb2RlbD1cImZvcm0ubmFtZVwiPlxuXHRcdFx0XHRcdDwvcC1pbnB1dD5cblxuXHRcdFx0XHRcdDxwLXNsdWdcblx0XHRcdFx0XHRcdG5hbWU9XCJoYW5kbGVcIlxuXHRcdFx0XHRcdFx0bGFiZWw9XCJIYW5kbGVcIlxuXHRcdFx0XHRcdFx0aGVscD1cIlVuaXF1ZSBpZGVudGlmaWVyIHRvIGluZGV4IHRoaXMgaW1wb3J0IGZlZWQuXCJcblx0XHRcdFx0XHRcdGF1dG9jb21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0XHRyZXF1aXJlZFxuXHRcdFx0XHRcdFx0ZGVsaW1pdGVyPVwiX1wiXG5cdFx0XHRcdFx0XHQ6d2F0Y2g9XCJmb3JtLm5hbWVcIlxuXHRcdFx0XHRcdFx0Omhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnaGFuZGxlJylcIlxuXHRcdFx0XHRcdFx0OmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2hhbmRsZScpXCJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJmb3JtLmhhbmRsZVwiPlxuXHRcdFx0XHRcdDwvcC1zbHVnPlxuXG5cdFx0XHRcdFx0PHAtaW5wdXRcblx0XHRcdFx0XHRcdG5hbWU9XCJzb3VyY2VcIlxuXHRcdFx0XHRcdFx0bGFiZWw9XCJTb3VyY2VcIlxuXHRcdFx0XHRcdFx0aGVscD1cIkdvb2dsZSBTaGVldHMgc2hlZXQgcmVmZXJlbmNlIFVSTC5cIlxuXHRcdFx0XHRcdFx0YXV0b2NvbXBsZXRlPVwib2ZmXCJcblx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHQ6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdzb3VyY2UnKVwiXG5cdFx0XHRcdFx0XHQ6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnc291cmNlJylcIlxuXHRcdFx0XHRcdFx0di1tb2RlbD1cImZvcm0uc291cmNlXCI+XG5cdFx0XHRcdFx0PC9wLWlucHV0PlxuXG5cdFx0XHRcdFx0PHAtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibW9kdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTW9kdWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXaGljaCBtb2R1bGUgZG8geW91IHdpc2ggdG8gaW1wb3J0IHRvP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdVc2VycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICd1c2VycycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQnbGFiZWwnOiAnVGF4b25vbWllcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQndmFsdWUnOiAndGF4b25vbWllcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQnbGFiZWwnOiAnTWF0cmljZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0J3ZhbHVlJzogJ21hdHJpY2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ21vZHVsZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdtb2R1bGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5tb2R1bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9wLXNlbGVjdD5cblxuICAgICAgICAgICAgICAgICAgICA8cC1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgXHR2LWlmPVwiZ3JvdXBPcHRpb25zLmxlbmd0aCA+IDBcIlxuICAgICAgICAgICAgICAgICAgICBcdG5hbWU9XCJncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXaGljaCBncm91cCBkbyB5b3Ugd2lzaCB0byBpbXBvcnQgdG8/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiZ3JvdXBPcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2dyb3VwJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2dyb3VwJylcIlxuICAgICAgICAgICAgICAgICAgICBcdHYtbW9kZWw9XCJmb3JtLmdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgPHAtY2hlY2tib3gtZ3JvdXBcblx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTdHJhdGVneVwiXG5cdFx0XHRcdFx0XHRcdGhlbHA9XCJTdHJhdGVneSB1c2VkIHdoZW4gbWF0Y2hpbmcgcmVjb3JkIGlzIGRldGVjdGVkIG9yIG1pc3NpbmcgZnJvbSBpbXBvcnQgKGJhc2VkIG9uIGFuIHVuaXF1ZSBpZGVudGlmaWVyKS5cIlxuXHRcdFx0XHRcdFx0XHQ6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdzdHJhdGVneScpXCJcblx0XHRcdFx0XHRcdFx0OmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3N0cmF0ZWd5JylcIj5cblx0XHRcdFx0XHRcdDxwLWNoZWNrYm94IG5hbWU9XCJjcmVhdGVcIiBpZD1cImNyZWF0ZVwiIG5hdGl2ZS12YWx1ZT1cImNyZWF0ZVwiIHYtbW9kZWw9XCJmb3JtLnN0cmF0ZWd5XCI+XG5cdFx0XHRcdFx0XHRcdENyZWF0ZSA8c3BhbiBjbGFzcz1cInRleHQtZ3JheS01MDAgaXRhbGljXCI+LSBBZGRzIG5ldyBlbGVtZW50cyBpZiB0aGV5IGRvIG5vdCBhbHJlYWR5IGV4aXN0Ljwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvcC1jaGVja2JveD5cblx0XHRcdFx0XHRcdDxwLWNoZWNrYm94IG5hbWU9XCJ1cGRhdGVcIiBpZD1cInVwZGF0ZVwiIG5hdGl2ZS12YWx1ZT1cInVwZGF0ZVwiIHYtbW9kZWw9XCJmb3JtLnN0cmF0ZWd5XCI+XG5cdFx0XHRcdFx0XHRcdFVwZGF0ZSA8c3BhbiBjbGFzcz1cInRleHQtZ3JheS01MDAgaXRhbGljXCI+LSBVcGRhdGVzIGVsZW1lbnRzIHdoZW4gbWF0Y2hpbmcgcmVjb3JkIGlzIGZvdW5kLjwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvcC1jaGVja2JveD5cblx0XHRcdFx0XHRcdDxwLWNoZWNrYm94IG5hbWU9XCJkaXNhYmxlXCIgaWQ9XCJkaXNhYmxlXCIgbmF0aXZlLXZhbHVlPVwiZGlzYWJsZVwiIHYtbW9kZWw9XCJmb3JtLnN0cmF0ZWd5XCI+XG5cdFx0XHRcdFx0XHRcdERpc2FibGUgPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIGl0YWxpY1wiPi0gRGlzYWJsZXMgYW55IGVsZW1lbnRzIHRoYXQgYXJlIG1pc3NpbmcgZnJvbSB0aGUgaW1wb3J0Ljwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvcC1jaGVja2JveD5cblx0XHRcdFx0XHRcdDxwLWNoZWNrYm94IG5hbWU9XCJkZWxldGVcIiBpZD1cImRlbGV0ZVwiIG5hdGl2ZS12YWx1ZT1cImRlbGV0ZVwiIHYtbW9kZWw9XCJmb3JtLnN0cmF0ZWd5XCI+XG5cdFx0XHRcdFx0XHRcdERlbGV0ZSA8c3BhbiBjbGFzcz1cInRleHQtZ3JheS01MDAgaXRhbGljXCI+LSBEZWxldGVzIGFueSBlbGVtZW50cyB0aGF0IGFyZSBtaXNzaW5nIGZyb20gdGhlIGltcG9ydC48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3AtY2hlY2tib3g+XG5cdFx0XHRcdFx0PC9wLWNoZWNrYm94LWdyb3VwPlxuXG4gICAgICAgICAgICAgICAgICAgIDwhLS1cbiAgICAgICAgICAgICAgICAgICAgPHAtdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIFx0bmFtZT1cImJhY2t1cFwiXG4gICAgICAgICAgICAgICAgICAgIFx0bGFiZWw9XCJCYWNrdXBcIlxuICAgICAgICAgICAgICAgICAgICBcdGhlbHA9XCJCYWNrdXAgZGF0YSBiZWZvcmUgaW1wb3J0aW5nP1wiXG4gICAgICAgICAgICAgICAgICAgIFx0di1tb2RlbD1cImZvcm0uYmFja3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcC10b2dnbGU+XG4gICAgICAgICAgICAgICAgXHQtLT5cblxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvcC1jYXJkPlxuXHQ8L2Zvcm0+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGdyb3Vwczoge30sXG5cdFx0XHRcdGdyb3VwT3B0aW9uczogW11cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0cHJvcHM6IHtcblx0XHRcdGZvcm06IHtcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR3YXRjaDoge1xuXHRcdFx0J2Zvcm0ubW9kdWxlJzogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0dGhpcy5zZXRGb3JtR3JvdXAodmFsdWUpXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHNldEZvcm1Hcm91cDogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0dGhpcy5ncm91cE9wdGlvbnMgPSBbXVxuXHRcdFx0XHR0aGlzLmZvcm0uZ3JvdXAgICA9IDBcblxuXHRcdFx0XHRpZiAoXy5oYXModGhpcy5ncm91cHMsIHZhbHVlKSkge1xuXHRcdFx0XHRcdHRoaXMuZ3JvdXBPcHRpb25zID0gdGhpcy5ncm91cHNbdmFsdWVdXG5cblx0XHRcdFx0XHRpZiAodGhpcy5mb3JtLmdyb3VwID09IDApIHtcblx0XHRcdFx0XHRcdHRoaXMuZm9ybS5ncm91cCA9IF8uaGVhZCh0aGlzLmdyb3VwT3B0aW9ucykudmFsdWVcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8vIHVwZGF0ZUNyb24oZXhwcmVzc2lvbikge1xuXHRcdFx0Ly8gXHR0aGlzLmZvcm0uc2NoZWR1bGUgPSBleHByZXNzaW9uXG5cdFx0XHQvLyB9XG5cdFx0fSxcblxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHRheGlvcy5hbGwoW1xuXHRcdFx0XHRheGlvcy5nZXQoJy9hcGkvdGF4b25vbWllcycpLFxuXHRcdFx0XHRheGlvcy5nZXQoJy9hcGkvbWF0cmljZXMnKVxuXHRcdFx0XSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKHRheG9ub21pZXMsIG1hdHJpY2VzKSB7XG5cdFx0XHRcdHRoaXMuZ3JvdXBzWyd0YXhvbm9taWVzJ10gPSBfLm1hcCh0YXhvbm9taWVzLmRhdGEuZGF0YSwgZnVuY3Rpb24odGF4b25vbXkpIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0J2xhYmVsJzogdGF4b25vbXkubmFtZSxcblx0XHRcdFx0XHRcdCd2YWx1ZSc6IHRheG9ub215LmlkXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdHRoaXMuZ3JvdXBzWydtYXRyaWNlcyddID0gXy5yZWplY3QobWF0cmljZXMuZGF0YS5kYXRhLCBbJ3R5cGUnLCAncGFnZSddKVxuXHRcdFx0XHR0aGlzLmdyb3Vwc1snbWF0cmljZXMnXSA9IF8ubWFwKHRoaXMuZ3JvdXBzWydtYXRyaWNlcyddLCBmdW5jdGlvbihtYXRyaXgpIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0J2xhYmVsJzogbWF0cml4Lm5hbWUsXG5cdFx0XHRcdFx0XHQndmFsdWUnOiBtYXRyaXguaWRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0dGhpcy5zZXRGb3JtR3JvdXAodGhpcy5mb3JtLm1vZHVsZSlcblx0XHRcdH0uYmluZCh0aGlzKSkpXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybVwiLFxuICAgIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwicC1jYXJkXCIsIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsIHh4bDp3LTIvM1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgaGVscDogXCJXaGF0IHRoaXMgaW1wb3J0IGZlZWQgYmUgY2FsbGVkLlwiLFxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwLXNsdWdcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgICBoZWxwOiBcIlVuaXF1ZSBpZGVudGlmaWVyIHRvIGluZGV4IHRoaXMgaW1wb3J0IGZlZWQuXCIsXG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGRlbGltaXRlcjogXCJfXCIsXG4gICAgICAgICAgICAgICAgICB3YXRjaDogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJoYW5kbGVcIiksXG4gICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcImhhbmRsZVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImhhbmRsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmhhbmRsZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzb3VyY2VcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNvdXJjZVwiLFxuICAgICAgICAgICAgICAgICAgaGVscDogXCJHb29nbGUgU2hlZXRzIHNoZWV0IHJlZmVyZW5jZSBVUkwuXCIsXG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJzb3VyY2VcIiksXG4gICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInNvdXJjZVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNvdXJjZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnNvdXJjZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kdWxlXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJNb2R1bGVcIixcbiAgICAgICAgICAgICAgICAgIGhlbHA6IFwiV2hpY2ggbW9kdWxlIGRvIHlvdSB3aXNoIHRvIGltcG9ydCB0bz9cIixcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlVzZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwidXNlcnNcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVGF4b25vbWllc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInRheG9ub21pZXNcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTWF0cmljZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJtYXRyaWNlc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwibW9kdWxlXCIpLFxuICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJtb2R1bGVcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubW9kdWxlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJtb2R1bGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5tb2R1bGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5ncm91cE9wdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgID8gX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVscDogXCJXaGljaCBncm91cCBkbyB5b3Ugd2lzaCB0byBpbXBvcnQgdG8/XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmdyb3VwT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZ3JvdXBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJncm91cFwiKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5ncm91cCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJncm91cFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicC1jaGVja2JveC1ncm91cFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0cmF0ZWd5XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgXCJTdHJhdGVneSB1c2VkIHdoZW4gbWF0Y2hpbmcgcmVjb3JkIGlzIGRldGVjdGVkIG9yIG1pc3NpbmcgZnJvbSBpbXBvcnQgKGJhc2VkIG9uIGFuIHVuaXF1ZSBpZGVudGlmaWVyKS5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInN0cmF0ZWd5XCIpLFxuICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInN0cmF0ZWd5XCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJwLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjcmVhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImNyZWF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogXCJjcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdHJhdGVneSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic3RyYXRlZ3lcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zdHJhdGVneVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Q3JlYXRlIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyYXktNTAwIGl0YWxpY1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCItIEFkZHMgbmV3IGVsZW1lbnRzIGlmIHRoZXkgZG8gbm90IGFscmVhZHkgZXhpc3QuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInAtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiBcInVwZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnN0cmF0ZWd5LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzdHJhdGVneVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnN0cmF0ZWd5XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRVcGRhdGUgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JheS01MDAgaXRhbGljXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0gVXBkYXRlcyBlbGVtZW50cyB3aGVuIG1hdGNoaW5nIHJlY29yZCBpcyBmb3VuZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicC1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGlzYWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGlzYWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogXCJkaXNhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc3RyYXRlZ3ksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInN0cmF0ZWd5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc3RyYXRlZ3lcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdERpc2FibGUgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JheS01MDAgaXRhbGljXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0gRGlzYWJsZXMgYW55IGVsZW1lbnRzIHRoYXQgYXJlIG1pc3NpbmcgZnJvbSB0aGUgaW1wb3J0LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJwLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogXCJkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdHJhdGVneSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic3RyYXRlZ3lcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zdHJhdGVneVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0RGVsZXRlIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyYXktNTAwIGl0YWxpY1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCItIERlbGV0ZXMgYW55IGVsZW1lbnRzIHRoYXQgYXJlIG1pc3NpbmcgZnJvbSB0aGUgaW1wb3J0LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkZDgzOWI3JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmRkODM5YjcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmRkODM5YjcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmRkODM5YjcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkZDgzOWI3JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZkZDgzOWI3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvU2hhcmVkRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkZDgzOWI3JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==