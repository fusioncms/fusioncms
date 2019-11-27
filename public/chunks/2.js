(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

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

/***/ "./node_modules/form-data/lib/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/form-data/lib/browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;


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

/***/ "./resources/js/forms/Errors.js":
/*!**************************************!*\
  !*** ./resources/js/forms/Errors.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Errors; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors =
/*#__PURE__*/
function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }

  _createClass(Errors, [{
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }
  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }
  }, {
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }
  }, {
    key: "record",
    value: function record(response) {
      this.errors = response.errors;
    }
  }, {
    key: "clear",
    value: function clear(field) {
      if (field) {
        delete this.errors[field];
        return;
      }

      this.errors = {};
    }
  }]);

  return Errors;
}();



/***/ }),

/***/ "./resources/js/forms/Form.js":
/*!************************************!*\
  !*** ./resources/js/forms/Form.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors */ "./resources/js/forms/Errors.js");
/* harmony import */ var _vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vuex */ "./resources/js/vuex/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Form =
/*#__PURE__*/
function () {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  function Form(data) {
    var preventNavigation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, Form);

    this.errors = new _Errors__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.originalData = data;
    this.hasChanges = false;
    this.preventNavigation = preventNavigation;

    for (var field in data) {
      this[field] = data[field];
    }
  }

  _createClass(Form, [{
    key: "set",
    value: function set(field, value) {
      this.data[field] = value;
    }
  }, {
    key: "get",
    value: function get(field) {
      return this.data[field];
    }
    /**
     * Reset the form fields.
     */

  }, {
    key: "reset",
    value: function reset() {
      for (var field in this.originalData) {
        this[field] = this.originalData[field];
      }

      this.errors.clear();
    }
  }, {
    key: "data",
    value: function data() {
      var data = {};

      for (var property in this.originalData) {
        data[property] = this[property];
      }

      return data;
    }
    /**
    * Submit a POST request.
    *
    * @param {string} url
    */

  }, {
    key: "post",
    value: function post(url) {
      return this.submit('post', url);
    }
    /**
     * Submit a PATCH request.
     *
     * @param {string} url
     */

  }, {
    key: "patch",
    value: function patch(url) {
      return this.submit('patch', url);
    }
    /**
     * Submit a PUT request.
     *
     * @param {string} url
     */

  }, {
    key: "put",
    value: function put(url) {
      return this.submit('put', url);
    }
    /**
     * Submit a DELETE request.
     *
     * @param {string} url
     */

  }, {
    key: "delete",
    value: function _delete(url) {
      return this.submit('delete', url);
    }
    /**
     * Submit the form by the given request type and url.
     *
     * @param {string} requestType
     * @param {string} url
     */

  }, {
    key: "submit",
    value: function submit(requestType, url) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        axios[requestType](url, _this.data()).then(function (response) {
          _this.onSuccess(response.data);

          _vuex__WEBPACK_IMPORTED_MODULE_2__["default"].commit('form/setPreventNavigation', false);
          resolve(response.data);
        })["catch"](function (errors) {
          _this.onFailure(errors.response.data);

          reject(errors.response.data);
        });
      });
    }
    /**
     * Handle the on success promise event.
     *
     * @param {object} data
     */

  }, {
    key: "onSuccess",
    value: function onSuccess(data) {} // We'll leave it up to the implementation on
    // if they want the form reset afterwards.
    //
    // this.reset()

    /**
     * Handle the on failure promise event.
     *
     * @param {object} errors
     */

  }, {
    key: "onFailure",
    value: function onFailure(errors) {
      this.errors.record(errors);
    }
    /** 
     * Handle the first input event. Prevents navigating
     * away from the form if the preventNavigation
     * setting has been enabled.
     *
     * @param {object} data
     */

  }, {
    key: "onFirstChange",
    value: function onFirstChange(data) {
      this.hasChanges = true;

      if (this.preventNavigation) {
        _vuex__WEBPACK_IMPORTED_MODULE_2__["default"].commit('form/setPreventNavigation', true);
      }
    }
  }]);

  return Form;
}();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL1NoYXJlZEZvcm0udnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb3JtLWRhdGEvbGliL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL1NoYXJlZEZvcm0udnVlP2ViZWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zvcm1zL0Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZm9ybXMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvU2hhcmVkRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL1NoYXJlZEZvcm0udnVlP2NjYWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL1NoYXJlZEZvcm0udnVlPzA2MTUiXSwibmFtZXMiOlsiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJyZXNwb25zZSIsIkZvcm0iLCJkYXRhIiwicHJldmVudE5hdmlnYXRpb24iLCJvcmlnaW5hbERhdGEiLCJoYXNDaGFuZ2VzIiwidmFsdWUiLCJjbGVhciIsInByb3BlcnR5IiwidXJsIiwic3VibWl0IiwicmVxdWVzdFR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF4aW9zIiwidGhlbiIsIm9uU3VjY2VzcyIsInN0b3JlIiwiY29tbWl0Iiwib25GYWlsdXJlIiwicmVjb3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFFSjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUlMO0FBQUE7QUFBQTtBQUFBO0FBQXlGO0FBQzNCO0FBQ0w7OztBQUd6RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUscUZBQU07QUFDUixFQUFFLDhGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFnTSxDQUFnQixzUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY2h1bmtzLzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuXHRcdDxwLWNhcmQ+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsIHh4bDp3LTIvM1wiPlxuXHRcdFx0XHRcdDxwLWlucHV0XG5cdFx0XHRcdFx0XHRuYW1lPVwibmFtZVwiXG5cdFx0XHRcdFx0XHRsYWJlbD1cIk5hbWVcIlxuXHRcdFx0XHRcdFx0aGVscD1cIldoYXQgdGhpcyBpbXBvcnQgZmVlZCBiZSBjYWxsZWQuXCJcblx0XHRcdFx0XHRcdGF1dG9jb21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0XHRhdXRvZm9jdXNcblx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHQ6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCduYW1lJylcIlxuXHRcdFx0XHRcdFx0OmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ25hbWUnKVwiXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwiZm9ybS5uYW1lXCI+XG5cdFx0XHRcdFx0PC9wLWlucHV0PlxuXG5cdFx0XHRcdFx0PHAtc2x1Z1xuXHRcdFx0XHRcdFx0bmFtZT1cImhhbmRsZVwiXG5cdFx0XHRcdFx0XHRsYWJlbD1cIkhhbmRsZVwiXG5cdFx0XHRcdFx0XHRoZWxwPVwiVW5pcXVlIGlkZW50aWZpZXIgdG8gaW5kZXggdGhpcyBpbXBvcnQgZmVlZC5cIlxuXHRcdFx0XHRcdFx0YXV0b2NvbXBsZXRlPVwib2ZmXCJcblx0XHRcdFx0XHRcdHJlcXVpcmVkXG5cdFx0XHRcdFx0XHRkZWxpbWl0ZXI9XCJfXCJcblx0XHRcdFx0XHRcdDp3YXRjaD1cImZvcm0ubmFtZVwiXG5cdFx0XHRcdFx0XHQ6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdoYW5kbGUnKVwiXG5cdFx0XHRcdFx0XHQ6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnaGFuZGxlJylcIlxuXHRcdFx0XHRcdFx0di1tb2RlbD1cImZvcm0uaGFuZGxlXCI+XG5cdFx0XHRcdFx0PC9wLXNsdWc+XG5cblx0XHRcdFx0XHQ8cC1pbnB1dFxuXHRcdFx0XHRcdFx0bmFtZT1cInNvdXJjZVwiXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlNvdXJjZVwiXG5cdFx0XHRcdFx0XHRoZWxwPVwiR29vZ2xlIFNoZWV0cyBzaGVldCByZWZlcmVuY2UgVVJMLlwiXG5cdFx0XHRcdFx0XHRhdXRvY29tcGxldGU9XCJvZmZcIlxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3NvdXJjZScpXCJcblx0XHRcdFx0XHRcdDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdzb3VyY2UnKVwiXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwiZm9ybS5zb3VyY2VcIj5cblx0XHRcdFx0XHQ8L3AtaW5wdXQ+XG5cblx0XHRcdFx0XHQ8cC1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJtb2R1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJNb2R1bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIldoaWNoIG1vZHVsZSBkbyB5b3Ugd2lzaCB0byBpbXBvcnQgdG8/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogJ1VzZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJ3VzZXJzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdCdsYWJlbCc6ICdUYXhvbm9taWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdCd2YWx1ZSc6ICd0YXhvbm9taWVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdCdsYWJlbCc6ICdNYXRyaWNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQndmFsdWUnOiAnbWF0cmljZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbW9kdWxlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ21vZHVsZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm1vZHVsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8L3Atc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICBcdHYtaWY9XCJncm91cE9wdGlvbnMubGVuZ3RoID4gMFwiXG4gICAgICAgICAgICAgICAgICAgIFx0bmFtZT1cImdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiR3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIldoaWNoIGdyb3VwIGRvIHlvdSB3aXNoIHRvIGltcG9ydCB0bz9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJncm91cE9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnZ3JvdXAnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnZ3JvdXAnKVwiXG4gICAgICAgICAgICAgICAgICAgIFx0di1tb2RlbD1cImZvcm0uZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9wLXNlbGVjdD5cblxuICAgICAgICAgICAgICAgICAgICA8cC1jaGVja2JveC1ncm91cFxuXHRcdFx0XHRcdFx0XHRsYWJlbD1cIlN0cmF0ZWd5XCJcblx0XHRcdFx0XHRcdFx0aGVscD1cIlN0cmF0ZWd5IHVzZWQgd2hlbiBtYXRjaGluZyByZWNvcmQgaXMgZGV0ZWN0ZWQgb3IgbWlzc2luZyBmcm9tIGltcG9ydCAoYmFzZWQgb24gYW4gdW5pcXVlIGlkZW50aWZpZXIpLlwiXG5cdFx0XHRcdFx0XHRcdDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3N0cmF0ZWd5JylcIlxuXHRcdFx0XHRcdFx0XHQ6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnc3RyYXRlZ3knKVwiPlxuXHRcdFx0XHRcdFx0PHAtY2hlY2tib3ggbmFtZT1cImNyZWF0ZVwiIGlkPVwiY3JlYXRlXCIgbmF0aXZlLXZhbHVlPVwiY3JlYXRlXCIgdi1tb2RlbD1cImZvcm0uc3RyYXRlZ3lcIj5cblx0XHRcdFx0XHRcdFx0Q3JlYXRlIDxzcGFuIGNsYXNzPVwidGV4dC1ncmF5LTUwMCBpdGFsaWNcIj4tIEFkZHMgbmV3IGVsZW1lbnRzIGlmIHRoZXkgZG8gbm90IGFscmVhZHkgZXhpc3QuPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9wLWNoZWNrYm94PlxuXHRcdFx0XHRcdFx0PHAtY2hlY2tib3ggbmFtZT1cInVwZGF0ZVwiIGlkPVwidXBkYXRlXCIgbmF0aXZlLXZhbHVlPVwidXBkYXRlXCIgdi1tb2RlbD1cImZvcm0uc3RyYXRlZ3lcIj5cblx0XHRcdFx0XHRcdFx0VXBkYXRlIDxzcGFuIGNsYXNzPVwidGV4dC1ncmF5LTUwMCBpdGFsaWNcIj4tIFVwZGF0ZXMgZWxlbWVudHMgd2hlbiBtYXRjaGluZyByZWNvcmQgaXMgZm91bmQuPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9wLWNoZWNrYm94PlxuXHRcdFx0XHRcdFx0PHAtY2hlY2tib3ggbmFtZT1cImRpc2FibGVcIiBpZD1cImRpc2FibGVcIiBuYXRpdmUtdmFsdWU9XCJkaXNhYmxlXCIgdi1tb2RlbD1cImZvcm0uc3RyYXRlZ3lcIj5cblx0XHRcdFx0XHRcdFx0RGlzYWJsZSA8c3BhbiBjbGFzcz1cInRleHQtZ3JheS01MDAgaXRhbGljXCI+LSBEaXNhYmxlcyBhbnkgZWxlbWVudHMgdGhhdCBhcmUgbWlzc2luZyBmcm9tIHRoZSBpbXBvcnQuPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9wLWNoZWNrYm94PlxuXHRcdFx0XHRcdFx0PHAtY2hlY2tib3ggbmFtZT1cImRlbGV0ZVwiIGlkPVwiZGVsZXRlXCIgbmF0aXZlLXZhbHVlPVwiZGVsZXRlXCIgdi1tb2RlbD1cImZvcm0uc3RyYXRlZ3lcIj5cblx0XHRcdFx0XHRcdFx0RGVsZXRlIDxzcGFuIGNsYXNzPVwidGV4dC1ncmF5LTUwMCBpdGFsaWNcIj4tIERlbGV0ZXMgYW55IGVsZW1lbnRzIHRoYXQgYXJlIG1pc3NpbmcgZnJvbSB0aGUgaW1wb3J0Ljwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvcC1jaGVja2JveD5cblx0XHRcdFx0XHQ8L3AtY2hlY2tib3gtZ3JvdXA+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLVxuICAgICAgICAgICAgICAgICAgICA8cC10b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgXHRuYW1lPVwiYmFja3VwXCJcbiAgICAgICAgICAgICAgICAgICAgXHRsYWJlbD1cIkJhY2t1cFwiXG4gICAgICAgICAgICAgICAgICAgIFx0aGVscD1cIkJhY2t1cCBkYXRhIGJlZm9yZSBpbXBvcnRpbmc/XCJcbiAgICAgICAgICAgICAgICAgICAgXHR2LW1vZGVsPVwiZm9ybS5iYWNrdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9wLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICBcdC0tPlxuXG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9wLWNhcmQ+XG5cdDwvZm9ybT5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0Z3JvdXBzOiB7fSxcblx0XHRcdFx0Z3JvdXBPcHRpb25zOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRwcm9wczoge1xuXHRcdFx0Zm9ybToge1xuXHRcdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHQnZm9ybS5tb2R1bGUnOiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLnNldEZvcm1Hcm91cCh2YWx1ZSlcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0c2V0Rm9ybUdyb3VwOiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLmdyb3VwT3B0aW9ucyA9IFtdXG5cdFx0XHRcdHRoaXMuZm9ybS5ncm91cCAgID0gMFxuXG5cdFx0XHRcdGlmIChfLmhhcyh0aGlzLmdyb3VwcywgdmFsdWUpKSB7XG5cdFx0XHRcdFx0dGhpcy5ncm91cE9wdGlvbnMgPSB0aGlzLmdyb3Vwc1t2YWx1ZV1cblxuXHRcdFx0XHRcdGlmICh0aGlzLmZvcm0uZ3JvdXAgPT0gMCkge1xuXHRcdFx0XHRcdFx0dGhpcy5mb3JtLmdyb3VwID0gXy5oZWFkKHRoaXMuZ3JvdXBPcHRpb25zKS52YWx1ZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Ly8gdXBkYXRlQ3JvbihleHByZXNzaW9uKSB7XG5cdFx0XHQvLyBcdHRoaXMuZm9ybS5zY2hlZHVsZSA9IGV4cHJlc3Npb25cblx0XHRcdC8vIH1cblx0XHR9LFxuXG5cdFx0Y3JlYXRlZCgpIHtcblx0XHRcdGF4aW9zLmFsbChbXG5cdFx0XHRcdGF4aW9zLmdldCgnL2FwaS90YXhvbm9taWVzJyksXG5cdFx0XHRcdGF4aW9zLmdldCgnL2FwaS9tYXRyaWNlcycpXG5cdFx0XHRdKS50aGVuKGF4aW9zLnNwcmVhZChmdW5jdGlvbiAodGF4b25vbWllcywgbWF0cmljZXMpIHtcblx0XHRcdFx0dGhpcy5ncm91cHNbJ3RheG9ub21pZXMnXSA9IF8ubWFwKHRheG9ub21pZXMuZGF0YS5kYXRhLCBmdW5jdGlvbih0YXhvbm9teSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHQnbGFiZWwnOiB0YXhvbm9teS5uYW1lLFxuXHRcdFx0XHRcdFx0J3ZhbHVlJzogdGF4b25vbXkuaWRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0dGhpcy5ncm91cHNbJ21hdHJpY2VzJ10gPSBfLnJlamVjdChtYXRyaWNlcy5kYXRhLmRhdGEsIFsndHlwZScsICdwYWdlJ10pXG5cdFx0XHRcdHRoaXMuZ3JvdXBzWydtYXRyaWNlcyddID0gXy5tYXAodGhpcy5ncm91cHNbJ21hdHJpY2VzJ10sIGZ1bmN0aW9uKG1hdHJpeCkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHQnbGFiZWwnOiBtYXRyaXgubmFtZSxcblx0XHRcdFx0XHRcdCd2YWx1ZSc6IG1hdHJpeC5pZFxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblxuXHRcdFx0XHR0aGlzLnNldEZvcm1Hcm91cCh0aGlzLmZvcm0ubW9kdWxlKVxuXHRcdFx0fS5iaW5kKHRoaXMpKSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyA/IHNlbGYuRm9ybURhdGEgOiB3aW5kb3cuRm9ybURhdGE7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybVwiLFxuICAgIHtcbiAgICAgIG9uOiB7XG4gICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwicC1jYXJkXCIsIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsIHh4bDp3LTIvM1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgaGVscDogXCJXaGF0IHRoaXMgaW1wb3J0IGZlZWQgYmUgY2FsbGVkLlwiLFxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwLXNsdWdcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgICBoZWxwOiBcIlVuaXF1ZSBpZGVudGlmaWVyIHRvIGluZGV4IHRoaXMgaW1wb3J0IGZlZWQuXCIsXG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgIGRlbGltaXRlcjogXCJfXCIsXG4gICAgICAgICAgICAgICAgICB3YXRjaDogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJoYW5kbGVcIiksXG4gICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcImhhbmRsZVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImhhbmRsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmhhbmRsZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzb3VyY2VcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNvdXJjZVwiLFxuICAgICAgICAgICAgICAgICAgaGVscDogXCJHb29nbGUgU2hlZXRzIHNoZWV0IHJlZmVyZW5jZSBVUkwuXCIsXG4gICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJzb3VyY2VcIiksXG4gICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInNvdXJjZVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNvdXJjZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnNvdXJjZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kdWxlXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJNb2R1bGVcIixcbiAgICAgICAgICAgICAgICAgIGhlbHA6IFwiV2hpY2ggbW9kdWxlIGRvIHlvdSB3aXNoIHRvIGltcG9ydCB0bz9cIixcbiAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlVzZXJzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwidXNlcnNcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVGF4b25vbWllc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcInRheG9ub21pZXNcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTWF0cmljZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJtYXRyaWNlc1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwibW9kdWxlXCIpLFxuICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJtb2R1bGVcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubW9kdWxlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJtb2R1bGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5tb2R1bGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5ncm91cE9wdGlvbnMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgID8gX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVscDogXCJXaGljaCBncm91cCBkbyB5b3Ugd2lzaCB0byBpbXBvcnQgdG8/XCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmdyb3VwT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZ3JvdXBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJncm91cFwiKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5ncm91cCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJncm91cFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicC1jaGVja2JveC1ncm91cFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0cmF0ZWd5XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgXCJTdHJhdGVneSB1c2VkIHdoZW4gbWF0Y2hpbmcgcmVjb3JkIGlzIGRldGVjdGVkIG9yIG1pc3NpbmcgZnJvbSBpbXBvcnQgKGJhc2VkIG9uIGFuIHVuaXF1ZSBpZGVudGlmaWVyKS5cIixcbiAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInN0cmF0ZWd5XCIpLFxuICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInN0cmF0ZWd5XCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJwLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJjcmVhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImNyZWF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogXCJjcmVhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdHJhdGVneSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic3RyYXRlZ3lcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zdHJhdGVneVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0Q3JlYXRlIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyYXktNTAwIGl0YWxpY1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCItIEFkZHMgbmV3IGVsZW1lbnRzIGlmIHRoZXkgZG8gbm90IGFscmVhZHkgZXhpc3QuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInAtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInVwZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiBcInVwZGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnN0cmF0ZWd5LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzdHJhdGVneVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnN0cmF0ZWd5XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRVcGRhdGUgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JheS01MDAgaXRhbGljXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0gVXBkYXRlcyBlbGVtZW50cyB3aGVuIG1hdGNoaW5nIHJlY29yZCBpcyBmb3VuZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicC1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGlzYWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGlzYWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogXCJkaXNhYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc3RyYXRlZ3ksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInN0cmF0ZWd5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc3RyYXRlZ3lcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdERpc2FibGUgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JheS01MDAgaXRhbGljXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0gRGlzYWJsZXMgYW55IGVsZW1lbnRzIHRoYXQgYXJlIG1pc3NpbmcgZnJvbSB0aGUgaW1wb3J0LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJwLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBcImRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogXCJkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdHJhdGVneSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic3RyYXRlZ3lcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zdHJhdGVneVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0RGVsZXRlIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyYXktNTAwIGl0YWxpY1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCItIERlbGV0ZXMgYW55IGVsZW1lbnRzIHRoYXQgYXJlIG1pc3NpbmcgZnJvbSB0aGUgaW1wb3J0LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHt9XG4gICAgfVxuXG4gICAgaGFzKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZClcbiAgICB9XG5cbiAgICBhbnkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMFxuICAgIH1cblxuICAgIGdldChmaWVsZCkge1xuICAgICAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNvcmQocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSByZXNwb25zZS5lcnJvcnNcbiAgICB9XG5cbiAgICBjbGVhcihmaWVsZCkge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tmaWVsZF1cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fVxuICAgIH1cbn0iLCJpbXBvcnQgRm9ybURhdGEgZnJvbSAnZm9ybS1kYXRhJ1xuaW1wb3J0IEVycm9ycyBmcm9tICcuL0Vycm9ycydcbmltcG9ydCBzdG9yZSBmcm9tICcuLi92dWV4J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBGb3JtIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBwcmV2ZW50TmF2aWdhdGlvbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gbmV3IEVycm9yc1xuICAgICAgICB0aGlzLm9yaWdpbmFsRGF0YSA9IGRhdGFcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gZmFsc2VcbiAgICAgICAgdGhpcy5wcmV2ZW50TmF2aWdhdGlvbiA9IHByZXZlbnROYXZpZ2F0aW9uXG5cbiAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gZGF0YSkge1xuICAgICAgICAgICAgdGhpc1tmaWVsZF0gPSBkYXRhW2ZpZWxkXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0KGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmRhdGFbZmllbGRdID0gdmFsdWVcbiAgICB9XG5cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtmaWVsZF1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgZm9ybSBmaWVsZHMuXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIGZvciAobGV0IGZpZWxkIGluIHRoaXMub3JpZ2luYWxEYXRhKSB7XG4gICAgICAgICAgICB0aGlzW2ZpZWxkXSA9IHRoaXMub3JpZ2luYWxEYXRhW2ZpZWxkXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lcnJvcnMuY2xlYXIoKVxuICAgIH1cblxuICAgIGRhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge31cblxuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB0aGlzLm9yaWdpbmFsRGF0YSlcbiAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBTdWJtaXQgYSBQT1NUIHJlcXVlc3QuXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICovXG4gICAgcG9zdCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwb3N0JywgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBhIFBBVENIIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgcGF0Y2godXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncGF0Y2gnLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGEgUFVUIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgcHV0KHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3B1dCcsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgYSBERUxFVEUgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBkZWxldGUodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgnZGVsZXRlJywgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZm9ybSBieSB0aGUgZ2l2ZW4gcmVxdWVzdCB0eXBlIGFuZCB1cmwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdFR5cGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgc3VibWl0KHJlcXVlc3RUeXBlLCB1cmwpIHsgICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgYXhpb3NbcmVxdWVzdFR5cGVdKHVybCwgdGhpcy5kYXRhKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ2Zvcm0vc2V0UHJldmVudE5hdmlnYXRpb24nLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25GYWlsdXJlKGVycm9ycy5yZXNwb25zZS5kYXRhKVxuXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcnMucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgb24gc3VjY2VzcyBwcm9taXNlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAvLyBXZSdsbCBsZWF2ZSBpdCB1cCB0byB0aGUgaW1wbGVtZW50YXRpb24gb25cbiAgICAgICAgLy8gaWYgdGhleSB3YW50IHRoZSBmb3JtIHJlc2V0IGFmdGVyd2FyZHMuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRoaXMucmVzZXQoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgb24gZmFpbHVyZSBwcm9taXNlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGVycm9yc1xuICAgICAqL1xuICAgIG9uRmFpbHVyZShlcnJvcnMpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMucmVjb3JkKGVycm9ycylcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogSGFuZGxlIHRoZSBmaXJzdCBpbnB1dCBldmVudC4gUHJldmVudHMgbmF2aWdhdGluZ1xuICAgICAqIGF3YXkgZnJvbSB0aGUgZm9ybSBpZiB0aGUgcHJldmVudE5hdmlnYXRpb25cbiAgICAgKiBzZXR0aW5nIGhhcyBiZWVuIGVuYWJsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRmlyc3RDaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlXG4gICAgICAgIGlmICh0aGlzLnByZXZlbnROYXZpZ2F0aW9uKSB7XG4gICAgICAgICAgICBzdG9yZS5jb21taXQoJ2Zvcm0vc2V0UHJldmVudE5hdmlnYXRpb24nLCB0cnVlKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkZDgzOWI3JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoYW5la3JvbGlrb3dza2kvQ29kZS9mdXNpb25jbXMtdjYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNmRkODM5YjcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNmRkODM5YjcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNmRkODM5YjcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkZDgzOWI3JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZkZDgzOWI3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvU2hhcmVkRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZkZDgzOWI3JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==