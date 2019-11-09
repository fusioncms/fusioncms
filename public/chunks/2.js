(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/Form.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Importer/Form.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      groupOptions: [],
      fileupload: '',
      showUpload: true,
      showSource: true
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
    },
    'form.source': function formSource(value) {
      this.showUpload = value == '';
    },
    'form.upload': function formUpload(value) {
      this.showSource = value == '';
    },
    'fileupload': function fileupload(value) {
      if (value) {
        this.upload(value);
      } else {
        this.form.upload = '';
      }
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
    },
    upload: function upload(file) {
      var _this = this;

      var formData = new form_data__WEBPACK_IMPORTED_MODULE_0___default.a();
      formData.append('file', file);
      formData.append('mimetypes', 'text/csv,text/plain');
      axios.post("/api/tmpfile", formData).then(function (response) {
        _this.form.upload = response.data.filePath;
      });
    }
  },
  created: function created() {
    axios.all([axios.get('/api/taxonomies'), axios.get('/api/matrices')]).then(axios.spread(function (taxonomies, matrices) {
      this.groups['taxonomies'] = _.map(taxonomies.data.data, function (taxonomy) {
        return {
          'label': taxonomy.name,
          'value': taxonomy.id
        };
      });
      this.groups['matrices'] = _.map(matrices.data.data, function (matrix) {
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/Form.vue?vue&type=template&id=57ac36b2&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Importer/Form.vue?vue&type=template&id=57ac36b2& ***!
  \***********************************************************************************************************************************************************************************************************/
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
              _c("div", { staticClass: "row" }, [
                _c(
                  "div",
                  {
                    staticClass: "col w-full",
                    class: { "xl:w-3/5": _vm.showUpload }
                  },
                  [
                    _c("p-input", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.showSource,
                          expression: "showSource"
                        }
                      ],
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
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "col w-full",
                    class: { "xl:w-2/5": _vm.showSource }
                  },
                  [
                    _c("p-upload", {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.showUpload,
                          expression: "showUpload"
                        }
                      ],
                      attrs: {
                        name: "upload",
                        label: "Upload",
                        help: "Upload a file for import.",
                        accept: "csv,xlsx"
                      },
                      model: {
                        value: _vm.fileupload,
                        callback: function($$v) {
                          _vm.fileupload = $$v
                        },
                        expression: "fileupload"
                      }
                    })
                  ],
                  1
                )
              ]),
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
                        "native-value": "Create"
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
                        "native-value": "Update"
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
                        "native-value": "Disable"
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
                        "native-value": "Delete"
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
    _classCallCheck(this, Form);

    this.errors = new _Errors__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.originalData = data;

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
     * Handle the on failture promise event.
     *
     * @param {object} errors
     */

  }, {
    key: "onFailure",
    value: function onFailure(errors) {
      this.errors.record(errors);
    }
  }]);

  return Form;
}();



/***/ }),

/***/ "./resources/js/views/Importer/Form.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Importer/Form.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_vue_vue_type_template_id_57ac36b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.vue?vue&type=template&id=57ac36b2& */ "./resources/js/views/Importer/Form.vue?vue&type=template&id=57ac36b2&");
/* harmony import */ var _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form.vue?vue&type=script&lang=js& */ "./resources/js/views/Importer/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Form_vue_vue_type_template_id_57ac36b2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Form_vue_vue_type_template_id_57ac36b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Importer/Form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Importer/Form.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Importer/Form.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/Form.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Importer/Form.vue?vue&type=template&id=57ac36b2&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Importer/Form.vue?vue&type=template&id=57ac36b2& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_57ac36b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Form.vue?vue&type=template&id=57ac36b2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/Form.vue?vue&type=template&id=57ac36b2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_57ac36b2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Form_vue_vue_type_template_id_57ac36b2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL0Zvcm0udnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb3JtLWRhdGEvbGliL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL0Zvcm0udnVlPzgxZDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zvcm1zL0Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZm9ybXMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL0Zvcm0udnVlP2FhYzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL0Zvcm0udnVlPzc3OTUiXSwibmFtZXMiOlsiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJyZXNwb25zZSIsIkZvcm0iLCJkYXRhIiwib3JpZ2luYWxEYXRhIiwidmFsdWUiLCJjbGVhciIsInByb3BlcnR5IiwidXJsIiwic3VibWl0IiwicmVxdWVzdFR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF4aW9zIiwidGhlbiIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsInJlY29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2SEE7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGdCQURBO0FBRUEsc0JBRkE7QUFHQSxvQkFIQTtBQUlBLHNCQUpBO0FBS0E7QUFMQTtBQU9BLEdBVEE7QUFXQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBREEsR0FYQTtBQWtCQTtBQUNBO0FBQ0E7QUFDQSxLQUhBO0FBS0EsaUJBTEEsc0JBS0EsS0FMQSxFQUtBO0FBQ0E7QUFDQSxLQVBBO0FBU0EsaUJBVEEsc0JBU0EsS0FUQSxFQVNBO0FBQ0E7QUFDQSxLQVhBO0FBYUEsZ0JBYkEsc0JBYUEsS0FiQSxFQWFBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQSxHQWxCQTtBQXdDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FaQTtBQWNBLFVBZEEsa0JBY0EsSUFkQSxFQWNBO0FBQUE7O0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBLE9BRkE7QUFHQTtBQXZCQSxHQXhDQTtBQWtFQSxTQWxFQSxxQkFrRUE7QUFDQSxlQUNBLDRCQURBLEVBRUEsMEJBRkEsR0FHQSxJQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBO0FBSUEsT0FMQTtBQU9BO0FBQ0E7QUFDQSw4QkFEQTtBQUVBO0FBRkE7QUFJQSxPQUxBO0FBT0E7QUFDQSxLQWhCQSxDQWdCQSxJQWhCQSxDQWdCQSxJQWhCQSxFQUhBO0FBb0JBO0FBdkZBLEc7Ozs7Ozs7Ozs7O0FDL0hBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsbUJBQW1CLHFCQUFxQjtBQUN4QztBQUNBO0FBQ0EsYUFBYSxzQ0FBc0M7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EseUJBQXlCLHFCQUFxQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QixtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGtDQUFrQyxzQ0FBc0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxrQ0FBa0Msc0NBQXNDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0Esa0NBQWtDLHNDQUFzQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGtDQUFrQyxzQ0FBc0M7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzFUcUJBLE07OztBQUNqQixvQkFBYztBQUFBOztBQUNWLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0g7Ozs7d0JBRUdDLEssRUFBTztBQUNQLGFBQU8sS0FBS0QsTUFBTCxDQUFZRSxjQUFaLENBQTJCRCxLQUEzQixDQUFQO0FBQ0g7OzswQkFFSztBQUNGLGFBQU9FLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEtBQUtKLE1BQWpCLEVBQXlCSyxNQUF6QixHQUFrQyxDQUF6QztBQUNIOzs7d0JBRUdKLEssRUFBTztBQUNQLFVBQUksS0FBS0QsTUFBTCxDQUFZQyxLQUFaLENBQUosRUFBd0I7QUFDcEIsZUFBTyxLQUFLRCxNQUFMLENBQVlDLEtBQVosRUFBbUIsQ0FBbkIsQ0FBUDtBQUNIO0FBQ0o7OzsyQkFFTUssUSxFQUFVO0FBQ2IsV0FBS04sTUFBTCxHQUFjTSxRQUFRLENBQUNOLE1BQXZCO0FBQ0g7OzswQkFFS0MsSyxFQUFPO0FBQ1QsVUFBSUEsS0FBSixFQUFXO0FBQ1AsZUFBTyxLQUFLRCxNQUFMLENBQVlDLEtBQVosQ0FBUDtBQUNBO0FBQ0g7O0FBRUQsV0FBS0QsTUFBTCxHQUFjLEVBQWQ7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5Qkw7QUFDQTs7SUFFcUJPLEk7OztBQUNqQjs7Ozs7QUFLQSxnQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNkLFNBQUtSLE1BQUwsR0FBYyxJQUFJRCwrQ0FBSixFQUFkO0FBQ0EsU0FBS1UsWUFBTCxHQUFvQkQsSUFBcEI7O0FBRUEsU0FBSyxJQUFJUCxLQUFULElBQWtCTyxJQUFsQixFQUF3QjtBQUNwQixXQUFLUCxLQUFMLElBQWNPLElBQUksQ0FBQ1AsS0FBRCxDQUFsQjtBQUNIO0FBQ0o7Ozs7d0JBRUdBLEssRUFBT1MsSyxFQUFPO0FBQ2QsV0FBS0YsSUFBTCxDQUFVUCxLQUFWLElBQW1CUyxLQUFuQjtBQUNIOzs7d0JBRUdULEssRUFBTztBQUNQLGFBQU8sS0FBS08sSUFBTCxDQUFVUCxLQUFWLENBQVA7QUFDSDtBQUVEOzs7Ozs7NEJBR1E7QUFDSixXQUFLLElBQUlBLEtBQVQsSUFBa0IsS0FBS1EsWUFBdkIsRUFBcUM7QUFDakMsYUFBS1IsS0FBTCxJQUFjLEtBQUtRLFlBQUwsQ0FBa0JSLEtBQWxCLENBQWQ7QUFDSDs7QUFFRCxXQUFLRCxNQUFMLENBQVlXLEtBQVo7QUFDSDs7OzJCQUVNO0FBQ0gsVUFBSUgsSUFBSSxHQUFHLEVBQVg7O0FBRUEsV0FBSyxJQUFJSSxRQUFULElBQXFCLEtBQUtILFlBQTFCO0FBQ0lELFlBQUksQ0FBQ0ksUUFBRCxDQUFKLEdBQWlCLEtBQUtBLFFBQUwsQ0FBakI7QUFESjs7QUFHQSxhQUFPSixJQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7eUJBS0tLLEcsRUFBSztBQUNOLGFBQU8sS0FBS0MsTUFBTCxDQUFZLE1BQVosRUFBb0JELEdBQXBCLENBQVA7QUFDSDtBQUVEOzs7Ozs7OzswQkFLTUEsRyxFQUFLO0FBQ1AsYUFBTyxLQUFLQyxNQUFMLENBQVksT0FBWixFQUFxQkQsR0FBckIsQ0FBUDtBQUNIO0FBRUQ7Ozs7Ozs7O3dCQUtJQSxHLEVBQUs7QUFDTCxhQUFPLEtBQUtDLE1BQUwsQ0FBWSxLQUFaLEVBQW1CRCxHQUFuQixDQUFQO0FBQ0g7QUFFRDs7Ozs7Ozs7NEJBS09BLEcsRUFBSztBQUNSLGFBQU8sS0FBS0MsTUFBTCxDQUFZLFFBQVosRUFBc0JELEdBQXRCLENBQVA7QUFDSDtBQUVEOzs7Ozs7Ozs7MkJBTU9FLFcsRUFBYUYsRyxFQUFLO0FBQUE7O0FBQ3JCLGFBQU8sSUFBSUcsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0MsYUFBSyxDQUFDSixXQUFELENBQUwsQ0FBbUJGLEdBQW5CLEVBQXdCLEtBQUksQ0FBQ0wsSUFBTCxFQUF4QixFQUNLWSxJQURMLENBQ1UsVUFBQWQsUUFBUSxFQUFJO0FBQ2QsZUFBSSxDQUFDZSxTQUFMLENBQWVmLFFBQVEsQ0FBQ0UsSUFBeEI7O0FBRUFTLGlCQUFPLENBQUNYLFFBQVEsQ0FBQ0UsSUFBVixDQUFQO0FBQ0gsU0FMTCxXQU1XLFVBQUFSLE1BQU0sRUFBSTtBQUNiLGVBQUksQ0FBQ3NCLFNBQUwsQ0FBZXRCLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkUsSUFBL0I7O0FBRUFVLGdCQUFNLENBQUNsQixNQUFNLENBQUNNLFFBQVAsQ0FBZ0JFLElBQWpCLENBQU47QUFDSCxTQVZMO0FBV0gsT0FaTSxDQUFQO0FBYUg7QUFFRDs7Ozs7Ozs7OEJBS1VBLEksRUFBTSxDQUtmLEMsQ0FKRztBQUNBO0FBQ0E7QUFDQTs7QUFHSjs7Ozs7Ozs7OEJBS1VSLE0sRUFBUTtBQUNkLFdBQUtBLE1BQUwsQ0FBWXVCLE1BQVosQ0FBbUJ2QixNQUFuQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSEw7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTBMLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG5cdFx0PHAtY2FyZD5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgeHhsOnctMi8zXCI+XG5cdFx0XHRcdFx0PHAtaW5wdXRcblx0XHRcdFx0XHRcdG5hbWU9XCJuYW1lXCJcblx0XHRcdFx0XHRcdGxhYmVsPVwiTmFtZVwiXG5cdFx0XHRcdFx0XHRoZWxwPVwiV2hhdCB0aGlzIGltcG9ydCBmZWVkIGJlIGNhbGxlZC5cIlxuXHRcdFx0XHRcdFx0YXV0b2NvbXBsZXRlPVwib2ZmXCJcblx0XHRcdFx0XHRcdGF1dG9mb2N1c1xuXHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ25hbWUnKVwiXG5cdFx0XHRcdFx0XHQ6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbmFtZScpXCJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJmb3JtLm5hbWVcIj5cblx0XHRcdFx0XHQ8L3AtaW5wdXQ+XG5cblx0XHRcdFx0XHQ8cC1zbHVnXG5cdFx0XHRcdFx0XHRuYW1lPVwiaGFuZGxlXCJcblx0XHRcdFx0XHRcdGxhYmVsPVwiSGFuZGxlXCJcblx0XHRcdFx0XHRcdGhlbHA9XCJVbmlxdWUgaWRlbnRpZmllciB0byBpbmRleCB0aGlzIGltcG9ydCBmZWVkLlwiXG5cdFx0XHRcdFx0XHRhdXRvY29tcGxldGU9XCJvZmZcIlxuXHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdGRlbGltaXRlcj1cIl9cIlxuXHRcdFx0XHRcdFx0OndhdGNoPVwiZm9ybS5uYW1lXCJcblx0XHRcdFx0XHRcdDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2hhbmRsZScpXCJcblx0XHRcdFx0XHRcdDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdoYW5kbGUnKVwiXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwiZm9ybS5oYW5kbGVcIj5cblx0XHRcdFx0XHQ8L3Atc2x1Zz5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsXCIgOmNsYXNzPVwieyAneGw6dy0zLzUnOiBzaG93VXBsb2FkIH1cIj5cblx0XHRcdFx0XHRcdFx0PHAtaW5wdXRcblx0XHRcdFx0XHRcdFx0XHR2LXNob3c9XCJzaG93U291cmNlXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwic291cmNlXCJcblx0XHRcdFx0XHRcdFx0XHRsYWJlbD1cIlNvdXJjZVwiXG5cdFx0XHRcdFx0XHRcdFx0aGVscD1cIkdvb2dsZSBTaGVldHMgc2hlZXQgcmVmZXJlbmNlIFVSTC5cIlxuXHRcdFx0XHRcdFx0XHRcdGF1dG9jb21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWRcblx0XHRcdFx0XHRcdFx0XHQ6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdzb3VyY2UnKVwiXG5cdFx0XHRcdFx0XHRcdFx0OmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3NvdXJjZScpXCJcblx0XHRcdFx0XHRcdFx0XHR2LW1vZGVsPVwiZm9ybS5zb3VyY2VcIj5cblx0XHRcdFx0XHRcdFx0PC9wLWlucHV0PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sIHctZnVsbFwiIDpjbGFzcz1cInsgJ3hsOnctMi81Jzogc2hvd1NvdXJjZSB9XCI+XG5cdFx0XHRcdFx0XHRcdDxwLXVwbG9hZFxuXHRcdFx0XHRcdFx0XHRcdHYtc2hvdz1cInNob3dVcGxvYWRcIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJ1cGxvYWRcIlxuXHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiVXBsb2FkXCJcblx0XHRcdFx0XHRcdFx0XHRoZWxwPVwiVXBsb2FkIGEgZmlsZSBmb3IgaW1wb3J0LlwiXG5cdFx0XHRcdFx0XHRcdFx0di1tb2RlbD1cImZpbGV1cGxvYWRcIlxuXHRcdFx0XHRcdFx0XHRcdGFjY2VwdD1cImNzdix4bHN4XCI+XG5cdFx0XHRcdFx0XHRcdDwvcC11cGxvYWQ+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDxwLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1vZHVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk1vZHVsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiV2hpY2ggbW9kdWxlIGRvIHlvdSB3aXNoIHRvIGltcG9ydCB0bz9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnVXNlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAndXNlcnMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0J2xhYmVsJzogJ1RheG9ub21pZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0J3ZhbHVlJzogJ3RheG9ub21pZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFx0J2xhYmVsJzogJ01hdHJpY2VzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdCd2YWx1ZSc6ICdtYXRyaWNlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdtb2R1bGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbW9kdWxlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubW9kdWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgPHAtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgIFx0di1pZj1cImdyb3VwT3B0aW9ucy5sZW5ndGggPiAwXCJcbiAgICAgICAgICAgICAgICAgICAgXHRuYW1lPVwiZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiV2hpY2ggZ3JvdXAgZG8geW91IHdpc2ggdG8gaW1wb3J0IHRvP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImdyb3VwT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdncm91cCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdncm91cCcpXCJcbiAgICAgICAgICAgICAgICAgICAgXHR2LW1vZGVsPVwiZm9ybS5ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3Atc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLWNoZWNrYm94LWdyb3VwXG5cdFx0XHRcdFx0XHRcdGxhYmVsPVwiU3RyYXRlZ3lcIlxuXHRcdFx0XHRcdFx0XHRoZWxwPVwiU3RyYXRlZ3kgdXNlZCB3aGVuIG1hdGNoaW5nIHJlY29yZCBpcyBkZXRlY3RlZCBvciBtaXNzaW5nIGZyb20gaW1wb3J0IChiYXNlZCBvbiBhbiB1bmlxdWUgaWRlbnRpZmllcikuXCJcblx0XHRcdFx0XHRcdFx0Omhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnc3RyYXRlZ3knKVwiXG5cdFx0XHRcdFx0XHRcdDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdzdHJhdGVneScpXCI+XG5cdFx0XHRcdFx0XHQ8cC1jaGVja2JveCBuYW1lPVwiY3JlYXRlXCIgaWQ9XCJjcmVhdGVcIiBuYXRpdmUtdmFsdWU9XCJDcmVhdGVcIiB2LW1vZGVsPVwiZm9ybS5zdHJhdGVneVwiPlxuXHRcdFx0XHRcdFx0XHRDcmVhdGUgPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIGl0YWxpY1wiPi0gQWRkcyBuZXcgZWxlbWVudHMgaWYgdGhleSBkbyBub3QgYWxyZWFkeSBleGlzdC48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3AtY2hlY2tib3g+XG5cdFx0XHRcdFx0XHQ8cC1jaGVja2JveCBuYW1lPVwidXBkYXRlXCIgaWQ9XCJ1cGRhdGVcIiBuYXRpdmUtdmFsdWU9XCJVcGRhdGVcIiB2LW1vZGVsPVwiZm9ybS5zdHJhdGVneVwiPlxuXHRcdFx0XHRcdFx0XHRVcGRhdGUgPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIGl0YWxpY1wiPi0gVXBkYXRlcyBlbGVtZW50cyB3aGVuIG1hdGNoaW5nIHJlY29yZCBpcyBmb3VuZC48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3AtY2hlY2tib3g+XG5cdFx0XHRcdFx0XHQ8cC1jaGVja2JveCBuYW1lPVwiZGlzYWJsZVwiIGlkPVwiZGlzYWJsZVwiIG5hdGl2ZS12YWx1ZT1cIkRpc2FibGVcIiB2LW1vZGVsPVwiZm9ybS5zdHJhdGVneVwiPlxuXHRcdFx0XHRcdFx0XHREaXNhYmxlIDxzcGFuIGNsYXNzPVwidGV4dC1ncmF5LTUwMCBpdGFsaWNcIj4tIERpc2FibGVzIGFueSBlbGVtZW50cyB0aGF0IGFyZSBtaXNzaW5nIGZyb20gdGhlIGltcG9ydC48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3AtY2hlY2tib3g+XG5cdFx0XHRcdFx0XHQ8cC1jaGVja2JveCBuYW1lPVwiZGVsZXRlXCIgaWQ9XCJkZWxldGVcIiBuYXRpdmUtdmFsdWU9XCJEZWxldGVcIiB2LW1vZGVsPVwiZm9ybS5zdHJhdGVneVwiPlxuXHRcdFx0XHRcdFx0XHREZWxldGUgPHNwYW4gY2xhc3M9XCJ0ZXh0LWdyYXktNTAwIGl0YWxpY1wiPi0gRGVsZXRlcyBhbnkgZWxlbWVudHMgdGhhdCBhcmUgbWlzc2luZyBmcm9tIHRoZSBpbXBvcnQuPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9wLWNoZWNrYm94PlxuXHRcdFx0XHRcdDwvcC1jaGVja2JveC1ncm91cD5cblxuICAgICAgICAgICAgICAgICAgICA8IS0tXG4gICAgICAgICAgICAgICAgICAgIDxwLXRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICBcdG5hbWU9XCJiYWNrdXBcIlxuICAgICAgICAgICAgICAgICAgICBcdGxhYmVsPVwiQmFja3VwXCJcbiAgICAgICAgICAgICAgICAgICAgXHRoZWxwPVwiQmFja3VwIGRhdGEgYmVmb3JlIGltcG9ydGluZz9cIlxuICAgICAgICAgICAgICAgICAgICBcdHYtbW9kZWw9XCJmb3JtLmJhY2t1cFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3AtdG9nZ2xlPlxuICAgICAgICAgICAgICAgIFx0LS0+XG5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L3AtY2FyZD5cblx0PC9mb3JtPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IEZvcm1EYXRhIGZyb20gJ2Zvcm0tZGF0YSdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGdyb3Vwczoge30sXG5cdFx0XHRcdGdyb3VwT3B0aW9uczogW10sXG5cdFx0XHRcdGZpbGV1cGxvYWQ6ICcnLFxuXHRcdFx0XHRzaG93VXBsb2FkOiB0cnVlLFxuXHRcdFx0XHRzaG93U291cmNlOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHByb3BzOiB7XG5cdFx0XHRmb3JtOiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0d2F0Y2g6IHtcblx0XHRcdCdmb3JtLm1vZHVsZSc6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdHRoaXMuc2V0Rm9ybUdyb3VwKHZhbHVlKVxuXHRcdFx0fSxcblxuXHRcdFx0J2Zvcm0uc291cmNlJyh2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLnNob3dVcGxvYWQgPSAodmFsdWUgPT0gJycpXG5cdFx0XHR9LFxuXG5cdFx0XHQnZm9ybS51cGxvYWQnKHZhbHVlKSB7XG5cdFx0XHRcdHRoaXMuc2hvd1NvdXJjZSA9ICh2YWx1ZSA9PSAnJylcblx0XHRcdH0sXG5cblx0XHRcdCdmaWxldXBsb2FkJyh2YWx1ZSkge1xuXHRcdFx0XHRpZiAodmFsdWUpIHtcblx0XHRcdFx0XHR0aGlzLnVwbG9hZCh2YWx1ZSlcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmZvcm0udXBsb2FkID0gJydcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHRzZXRGb3JtR3JvdXA6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdHRoaXMuZ3JvdXBPcHRpb25zID0gW11cblx0XHRcdFx0dGhpcy5mb3JtLmdyb3VwICAgPSAwXG5cblx0XHRcdFx0aWYgKF8uaGFzKHRoaXMuZ3JvdXBzLCB2YWx1ZSkpIHtcblx0XHRcdFx0XHR0aGlzLmdyb3VwT3B0aW9ucyA9IHRoaXMuZ3JvdXBzW3ZhbHVlXVxuXG5cdFx0XHRcdFx0aWYgKHRoaXMuZm9ybS5ncm91cCA9PSAwKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmZvcm0uZ3JvdXAgPSBfLmhlYWQodGhpcy5ncm91cE9wdGlvbnMpLnZhbHVlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHR1cGxvYWQoZmlsZSkge1xuXHRcdFx0XHRsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG5cdFx0XHRcdGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIGZpbGUpXG5cdFx0XHRcdGZvcm1EYXRhLmFwcGVuZCgnbWltZXR5cGVzJywgJ3RleHQvY3N2LHRleHQvcGxhaW4nKVxuXHRcdFx0XHRcblx0XHRcdFx0YXhpb3MucG9zdChgL2FwaS90bXBmaWxlYCwgZm9ybURhdGEpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdHRoaXMuZm9ybS51cGxvYWQgPSByZXNwb25zZS5kYXRhLmZpbGVQYXRoXG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHRheGlvcy5hbGwoW1xuXHRcdFx0XHRheGlvcy5nZXQoJy9hcGkvdGF4b25vbWllcycpLFxuXHRcdFx0XHRheGlvcy5nZXQoJy9hcGkvbWF0cmljZXMnKVxuXHRcdFx0XSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKHRheG9ub21pZXMsIG1hdHJpY2VzKSB7XG5cdFx0XHRcdHRoaXMuZ3JvdXBzWyd0YXhvbm9taWVzJ10gPSBfLm1hcCh0YXhvbm9taWVzLmRhdGEuZGF0YSwgZnVuY3Rpb24odGF4b25vbXkpIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0J2xhYmVsJzogdGF4b25vbXkubmFtZSxcblx0XHRcdFx0XHRcdCd2YWx1ZSc6IHRheG9ub215LmlkXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdHRoaXMuZ3JvdXBzWydtYXRyaWNlcyddID0gXy5tYXAobWF0cmljZXMuZGF0YS5kYXRhLCBmdW5jdGlvbihtYXRyaXgpIHtcblx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0J2xhYmVsJzogbWF0cml4Lm5hbWUsXG5cdFx0XHRcdFx0XHQndmFsdWUnOiBtYXRyaXguaWRcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0dGhpcy5zZXRGb3JtR3JvdXAodGhpcy5mb3JtLm1vZHVsZSlcblx0XHRcdH0uYmluZCh0aGlzKSkpXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgPyBzZWxmLkZvcm1EYXRhIDogd2luZG93LkZvcm1EYXRhO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImZvcm1cIixcbiAgICB7XG4gICAgICBvbjoge1xuICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInAtY2FyZFwiLCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbCB4eGw6dy0yLzNcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWVcIixcbiAgICAgICAgICAgICAgICAgIGhlbHA6IFwiV2hhdCB0aGlzIGltcG9ydCBmZWVkIGJlIGNhbGxlZC5cIixcbiAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIixcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcIm5hbWVcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwicC1zbHVnXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJoYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgaGVscDogXCJVbmlxdWUgaWRlbnRpZmllciB0byBpbmRleCB0aGlzIGltcG9ydCBmZWVkLlwiLFxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICBkZWxpbWl0ZXI6IFwiX1wiLFxuICAgICAgICAgICAgICAgICAgd2F0Y2g6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiaGFuZGxlXCIpLFxuICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJoYW5kbGVcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJoYW5kbGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5oYW5kbGVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcInhsOnctMy81XCI6IF92bS5zaG93VXBsb2FkIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93U291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dTb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic291cmNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTb3VyY2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IFwiR29vZ2xlIFNoZWV0cyBzaGVldCByZWZlcmVuY2UgVVJMLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwic291cmNlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJzb3VyY2VcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzb3VyY2VcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbFwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcInhsOnctMi81XCI6IF92bS5zaG93U291cmNlIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicC11cGxvYWRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd1VwbG9hZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93VXBsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInVwbG9hZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVXBsb2FkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwOiBcIlVwbG9hZCBhIGZpbGUgZm9yIGltcG9ydC5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2VwdDogXCJjc3YseGxzeFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWxldXBsb2FkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlsZXVwbG9hZCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmlsZXVwbG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2R1bGVcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1vZHVsZVwiLFxuICAgICAgICAgICAgICAgICAgaGVscDogXCJXaGljaCBtb2R1bGUgZG8geW91IHdpc2ggdG8gaW1wb3J0IHRvP1wiLFxuICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVXNlcnNcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJ1c2Vyc1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJUYXhvbm9taWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwidGF4b25vbWllc1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJNYXRyaWNlc1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIm1hdHJpY2VzXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJtb2R1bGVcIiksXG4gICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcIm1vZHVsZVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5tb2R1bGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm1vZHVsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm1vZHVsZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmdyb3VwT3B0aW9ucy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiR3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWxwOiBcIldoaWNoIGdyb3VwIGRvIHlvdSB3aXNoIHRvIGltcG9ydCB0bz9cIixcbiAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBfdm0uZ3JvdXBPcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJncm91cFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcImdyb3VwXCIpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmdyb3VwLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImdyb3VwXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJwLWNoZWNrYm94LWdyb3VwXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3RyYXRlZ3lcIixcbiAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICBcIlN0cmF0ZWd5IHVzZWQgd2hlbiBtYXRjaGluZyByZWNvcmQgaXMgZGV0ZWN0ZWQgb3IgbWlzc2luZyBmcm9tIGltcG9ydCAoYmFzZWQgb24gYW4gdW5pcXVlIGlkZW50aWZpZXIpLlwiLFxuICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwic3RyYXRlZ3lcIiksXG4gICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwic3RyYXRlZ3lcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInAtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImNyZWF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiY3JlYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiBcIkNyZWF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnN0cmF0ZWd5LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzdHJhdGVneVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnN0cmF0ZWd5XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRDcmVhdGUgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JheS01MDAgaXRhbGljXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0gQWRkcyBuZXcgZWxlbWVudHMgaWYgdGhleSBkbyBub3QgYWxyZWFkeSBleGlzdC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicC1jaGVja2JveFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidXBkYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJ1cGRhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmF0aXZlLXZhbHVlXCI6IFwiVXBkYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc3RyYXRlZ3ksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInN0cmF0ZWd5XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc3RyYXRlZ3lcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFVwZGF0ZSBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmF5LTUwMCBpdGFsaWNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiLSBVcGRhdGVzIGVsZW1lbnRzIHdoZW4gbWF0Y2hpbmcgcmVjb3JkIGlzIGZvdW5kLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJwLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkaXNhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogXCJkaXNhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiBcIkRpc2FibGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdHJhdGVneSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic3RyYXRlZ3lcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zdHJhdGVneVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0RGlzYWJsZSBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmF5LTUwMCBpdGFsaWNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiLSBEaXNhYmxlcyBhbnkgZWxlbWVudHMgdGhhdCBhcmUgbWlzc2luZyBmcm9tIHRoZSBpbXBvcnQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInAtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hdGl2ZS12YWx1ZVwiOiBcIkRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnN0cmF0ZWd5LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzdHJhdGVneVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnN0cmF0ZWd5XCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHREZWxldGUgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JheS01MDAgaXRhbGljXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi0gRGVsZXRlcyBhbnkgZWxlbWVudHMgdGhhdCBhcmUgbWlzc2luZyBmcm9tIHRoZSBpbXBvcnQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0ge31cbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKVxuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwXG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29yZChyZXNwb25zZSkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHJlc3BvbnNlLmVycm9yc1xuICAgIH1cblxuICAgIGNsZWFyKGZpZWxkKSB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVycm9ycyA9IHt9XG4gICAgfVxufSIsImltcG9ydCBGb3JtRGF0YSBmcm9tICdmb3JtLWRhdGEnXG5pbXBvcnQgRXJyb3JzIGZyb20gJy4vRXJyb3JzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgRm9ybSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBFcnJvcnNcbiAgICAgICAgdGhpcy5vcmlnaW5hbERhdGEgPSBkYXRhXG5cbiAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gZGF0YSkge1xuICAgICAgICAgICAgdGhpc1tmaWVsZF0gPSBkYXRhW2ZpZWxkXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0KGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmRhdGFbZmllbGRdID0gdmFsdWVcbiAgICB9XG5cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtmaWVsZF1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgZm9ybSBmaWVsZHMuXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIGZvciAobGV0IGZpZWxkIGluIHRoaXMub3JpZ2luYWxEYXRhKSB7XG4gICAgICAgICAgICB0aGlzW2ZpZWxkXSA9IHRoaXMub3JpZ2luYWxEYXRhW2ZpZWxkXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lcnJvcnMuY2xlYXIoKVxuICAgIH1cblxuICAgIGRhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge31cblxuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB0aGlzLm9yaWdpbmFsRGF0YSlcbiAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBTdWJtaXQgYSBQT1NUIHJlcXVlc3QuXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICovXG4gICAgcG9zdCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwb3N0JywgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBhIFBBVENIIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgcGF0Y2godXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncGF0Y2gnLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGEgUFVUIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgcHV0KHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3B1dCcsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgYSBERUxFVEUgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBkZWxldGUodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgnZGVsZXRlJywgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZm9ybSBieSB0aGUgZ2l2ZW4gcmVxdWVzdCB0eXBlIGFuZCB1cmwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdFR5cGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgc3VibWl0KHJlcXVlc3RUeXBlLCB1cmwpIHsgICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgYXhpb3NbcmVxdWVzdFR5cGVdKHVybCwgdGhpcy5kYXRhKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvcnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRmFpbHVyZShlcnJvcnMucmVzcG9uc2UuZGF0YSlcblxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3JzLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIG9uIHN1Y2Nlc3MgcHJvbWlzZSBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25TdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgLy8gV2UnbGwgbGVhdmUgaXQgdXAgdG8gdGhlIGltcGxlbWVudGF0aW9uIG9uXG4gICAgICAgIC8vIGlmIHRoZXkgd2FudCB0aGUgZm9ybSByZXNldCBhZnRlcndhcmRzLlxuICAgICAgICAvL1xuICAgICAgICAvLyB0aGlzLnJlc2V0KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIG9uIGZhaWx0dXJlIHByb21pc2UgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXG4gICAgICovXG4gICAgb25GYWlsdXJlKGVycm9ycykge1xuICAgICAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyb3JzKVxuICAgIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Zvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3YWMzNmIyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Gb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoYW5la3JvbGlrb3dza2kvQ29kZS9mdXNpb25jbXMtdjYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTdhYzM2YjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTdhYzM2YjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTdhYzM2YjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Zvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3YWMzNmIyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU3YWMzNmIyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3YWMzNmIyJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==