(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TaxonomyGroups/Create.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TaxonomyGroups/Create.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      fieldsets: [],
      creatingFieldset: false,
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: '',
        handle: '',
        description: '',
        fieldset: null,
        sidebar: '1',
        icon: '',
        route: '',
        template: '',
        status: '1'
      })
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post('/api/taxonomies').then(function (response) {
        toast('Taxonomy successfully created', 'success');

        _this.$router.push('/taxonomies');
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/fieldsets')]).then(axios.spread(function (fieldsets) {
      next(function (vm) {
        vm.fieldsets = _.map(fieldsets.data.data, function (fieldset) {
          return {
            'label': fieldset.name,
            'value': fieldset.id
          };
        });
        vm.fieldsets.unshift({
          'label': 'None',
          'value': null
        });
      });
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TaxonomyGroups/Create.vue?vue&type=template&id=2f439152&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/TaxonomyGroups/Create.vue?vue&type=template&id=2f439152& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("app-title", { attrs: { icon: "sitemap" } }, [
            _vm._v("Create Taxonomy")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col w-full" }, [
          _c(
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
                    { staticClass: "col xxl:text-right w-full xxl:w-1/3" },
                    [
                      _c("div", { staticClass: "xxl:mr-10" }, [
                        _c("h3", [_vm._v("General")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-sm" }, [
                          _vm._v(
                            "What will this taxonomy be called and what will it organize?"
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "col w-full xxl:w-2/3" },
                    [
                      _c("p-input", {
                        attrs: {
                          name: "name",
                          label: "Name",
                          help: "What this taxonomy will be called.",
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
                          help:
                            "A developer-friendly variant of the taxonomy's name.",
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
                          name: "description",
                          label: "Description",
                          help:
                            "Give a short description of what this taxonomy will organize and store.",
                          autocomplete: "off",
                          required: "",
                          "has-error": _vm.form.errors.has("description"),
                          "error-message": _vm.form.errors.get("description")
                        },
                        model: {
                          value: _vm.form.description,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "description", $$v)
                          },
                          expression: "form.description"
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "flex" },
                        [
                          !_vm.creatingFieldset
                            ? _c("p-select", {
                                staticClass: "flex-grow",
                                attrs: {
                                  name: "fieldset",
                                  label: "Fieldset",
                                  help:
                                    "What fieldset would you like to attach?",
                                  options: _vm.fieldsets,
                                  "has-error": _vm.form.errors.has("fieldset"),
                                  "error-message": _vm.form.errors.get(
                                    "fieldset"
                                  )
                                },
                                model: {
                                  value: _vm.form.fieldset,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "fieldset", $$v)
                                  },
                                  expression: "form.fieldset"
                                }
                              })
                            : _c("p-input", {
                                staticClass: "flex-grow",
                                attrs: {
                                  name: "fieldset",
                                  label: "Fieldset",
                                  help:
                                    "What fieldset would you like to create? Don't forget to configure it afterwards.",
                                  "has-error": _vm.form.errors.has("fieldset"),
                                  "error-message": _vm.form.errors.get(
                                    "fieldset"
                                  )
                                },
                                model: {
                                  value: _vm.form.fieldset,
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, "fieldset", $$v)
                                  },
                                  expression: "form.fieldset"
                                }
                              }),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "form__group ml-2" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "form__label",
                                  attrs: { for: "create_fieldset" }
                                },
                                [_vm._v(" ")]
                              ),
                              _vm._v(" "),
                              !_vm.creatingFieldset
                                ? _c(
                                    "p-button",
                                    {
                                      staticClass:
                                        "form__select-button font-mono",
                                      on: {
                                        click: function($event) {
                                          _vm.creatingFieldset = true
                                        }
                                      }
                                    },
                                    [_vm._v("+")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.creatingFieldset
                                ? _c(
                                    "div",
                                    { staticClass: "flex" },
                                    [
                                      _c(
                                        "p-button",
                                        {
                                          staticClass:
                                            "form__select-button mr-1",
                                          attrs: { theme: "primary" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                            }
                                          }
                                        },
                                        [_vm._v("Create")]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "p-button",
                                        {
                                          staticClass: "form__select-button",
                                          on: {
                                            click: function($event) {
                                              _vm.creatingFieldset = false
                                            }
                                          }
                                        },
                                        [_vm._v("Cancel")]
                                      )
                                    ],
                                    1
                                  )
                                : _vm._e()
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col xxl:text-right w-full xxl:w-1/3" },
                    [
                      _c("div", { staticClass: "xxl:mr-10" }, [
                        _c("h3", [_vm._v("Customize")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-sm" }, [
                          _vm._v(
                            "Customize how your taxonomy will be found and displayed within the admin control panel."
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col w-full xxl:w-2/3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col w-full xxl:w-1/2" },
                        [
                          _c("p-select", {
                            attrs: {
                              name: "sidebar",
                              label: "Show in Sidebar",
                              help:
                                "Do you want this taxonomy to be shown in the sidebar?",
                              options: [
                                {
                                  label: "Show",
                                  value: "1"
                                },
                                {
                                  label: "Hide",
                                  value: "0"
                                }
                              ],
                              "has-error": _vm.form.errors.has("sidebar"),
                              "error-message": _vm.form.errors.get("sidebar")
                            },
                            model: {
                              value: _vm.form.sidebar,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "sidebar", $$v)
                              },
                              expression: "form.sidebar"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col w-full xxl:w-1/2" },
                        [
                          _c("p-input", {
                            attrs: {
                              name: "icon",
                              label: "Icon",
                              placeholder: "pencil",
                              help:
                                "Choose an icon that best represents your taxonomy.",
                              autocomplete: "off",
                              autofocus: "",
                              required: "",
                              "has-error": _vm.form.errors.has("icon"),
                              "error-message": _vm.form.errors.get("icon")
                            },
                            model: {
                              value: _vm.form.icon,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "icon", $$v)
                              },
                              expression: "form.icon"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("hr"),
                _vm._v(" "),
                _c("div", { staticClass: "row" }, [
                  _c(
                    "div",
                    { staticClass: "col xxl:text-right w-full xxl:w-1/3" },
                    [
                      _c("div", { staticClass: "xxl:mr-10" }, [
                        _c("h3", [_vm._v("Route")]),
                        _vm._v(" "),
                        _c("p", { staticClass: "text-sm" }, [
                          _vm._v(
                            "If your taxonomy will be accessible from the frontend, you may define its route and template here."
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col w-full xxl:w-2/3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col w-full xxl:w-1/2" },
                        [
                          _c("p-input", {
                            attrs: {
                              name: "route",
                              label: "Route",
                              help: "When the URI matches this pattern...",
                              autocomplete: "off",
                              monospaced: "",
                              "has-error": _vm.form.errors.has("route"),
                              "error-message": _vm.form.errors.get("route")
                            },
                            model: {
                              value: _vm.form.route,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "route", $$v)
                              },
                              expression: "form.route"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col w-full xxl:w-1/2" },
                        [
                          _c("p-input", {
                            attrs: {
                              name: "template",
                              label: "Template",
                              help: "Render this template",
                              autocomplete: "off",
                              monospaced: "",
                              "has-error": _vm.form.errors.has("template"),
                              "error-message": _vm.form.errors.get("template")
                            },
                            model: {
                              value: _vm.form.template,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "template", $$v)
                              },
                              expression: "form.template"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "portal",
                { attrs: { to: "actions" } },
                [
                  _c(
                    "router-link",
                    {
                      staticClass: "button mr-3",
                      attrs: { to: { name: "taxonomies" } }
                    },
                    [_vm._v("Go Back")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "button button--primary",
                      attrs: { type: "submit" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.submit($event)
                        }
                      }
                    },
                    [_vm._v("Save Taxonomy")]
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

    this.bag = {};
  }

  _createClass(Errors, [{
    key: "has",
    value: function has(field) {
      return this.bag.hasOwnProperty(field);
    }
  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.bag).length > 0;
    }
  }, {
    key: "get",
    value: function get(field) {
      if (this.bag[field]) {
        return this.bag[field][0];
      }
    }
  }, {
    key: "record",
    value: function record(bag) {
      this.bag = bag;
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
  }, {
    key: "reset",
    value: function reset() {
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
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./resources/js/forms/Errors.js");
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

    this.errors = new _Errors__WEBPACK_IMPORTED_MODULE_0__["default"]();
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

/***/ "./resources/js/views/TaxonomyGroups/Create.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/TaxonomyGroups/Create.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_2f439152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=2f439152& */ "./resources/js/views/TaxonomyGroups/Create.vue?vue&type=template&id=2f439152&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/TaxonomyGroups/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_2f439152___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_2f439152___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/TaxonomyGroups/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/TaxonomyGroups/Create.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/TaxonomyGroups/Create.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TaxonomyGroups/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/TaxonomyGroups/Create.vue?vue&type=template&id=2f439152&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/TaxonomyGroups/Create.vue?vue&type=template&id=2f439152& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_2f439152___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=2f439152& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/TaxonomyGroups/Create.vue?vue&type=template&id=2f439152&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_2f439152___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_2f439152___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL1RheG9ub215R3JvdXBzL0NyZWF0ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL1RheG9ub215R3JvdXBzL0NyZWF0ZS52dWU/MDhlZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZm9ybXMvRXJyb3JzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mb3Jtcy9Gb3JtLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9UYXhvbm9teUdyb3Vwcy9DcmVhdGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9UYXhvbm9teUdyb3Vwcy9DcmVhdGUudnVlP2NjMDgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL1RheG9ub215R3JvdXBzL0NyZWF0ZS52dWU/MTJhNSJdLCJuYW1lcyI6WyJFcnJvcnMiLCJiYWciLCJmaWVsZCIsImhhc093blByb3BlcnR5IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImVycm9ycyIsIkZvcm0iLCJkYXRhIiwib3JpZ2luYWxEYXRhIiwidmFsdWUiLCJjbGVhciIsInByb3BlcnR5IiwidXJsIiwic3VibWl0IiwicmVxdWVzdFR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF4aW9zIiwidGhlbiIsInJlc3BvbnNlIiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwicmVjb3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFNLENBQUNlLFFBQVAsQ0FBZ0JiLElBQS9COztBQUVBVSxnQkFBTSxDQUFDWixNQUFNLENBQUNlLFFBQVAsQ0FBZ0JiLElBQWpCLENBQU47QUFDSCxTQVZMO0FBV0gsT0FaTSxDQUFQO0FBYUg7QUFFRDs7Ozs7Ozs7OEJBS1VBLEksRUFBTSxDQUtmLEMsQ0FKRztBQUNBO0FBQ0E7QUFDQTs7QUFHSjs7Ozs7Ozs7OEJBS1VGLE0sRUFBUTtBQUNkLFdBQUtBLE1BQUwsQ0FBWWtCLE1BQVosQ0FBbUJsQixNQUFuQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSEw7QUFBQTtBQUFBO0FBQUE7QUFBcUY7QUFDM0I7QUFDTDs7O0FBR3JEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTRMLENBQWdCLGtQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8YXBwLXRpdGxlIGljb249XCJzaXRlbWFwXCI+Q3JlYXRlIFRheG9ub215PC9hcHAtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB4eGw6dGV4dC1yaWdodCB3LWZ1bGwgeHhsOnctMS8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ4eGw6bXItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5HZW5lcmFsPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbVwiPldoYXQgd2lsbCB0aGlzIHRheG9ub215IGJlIGNhbGxlZCBhbmQgd2hhdCB3aWxsIGl0IG9yZ2FuaXplPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbCB4eGw6dy0yLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiV2hhdCB0aGlzIHRheG9ub215IHdpbGwgYmUgY2FsbGVkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtc2x1Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiQSBkZXZlbG9wZXItZnJpZW5kbHkgdmFyaWFudCBvZiB0aGUgdGF4b25vbXkncyBuYW1lLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGltaXRlcj1cIl9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOndhdGNoPVwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2hhbmRsZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdoYW5kbGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5oYW5kbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXNsdWc+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJHaXZlIGEgc2hvcnQgZGVzY3JpcHRpb24gb2Ygd2hhdCB0aGlzIHRheG9ub215IHdpbGwgb3JnYW5pemUgYW5kIHN0b3JlLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2Rlc2NyaXB0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2Rlc2NyaXB0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWlucHV0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiISBjcmVhdGluZ0ZpZWxkc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZsZXgtZ3Jvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpZWxkc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkZpZWxkc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiV2hhdCBmaWVsZHNldCB3b3VsZCB5b3UgbGlrZSB0byBhdHRhY2g/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImZpZWxkc2V0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnZmllbGRzZXQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2ZpZWxkc2V0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmZpZWxkc2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Atc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmxleC1ncm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmllbGRzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmllbGRzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IGZpZWxkc2V0IHdvdWxkIHlvdSBsaWtlIHRvIGNyZWF0ZT8gRG9uJ3QgZm9yZ2V0IHRvIGNvbmZpZ3VyZSBpdCBhZnRlcndhcmRzLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnZmllbGRzZXQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2ZpZWxkc2V0JylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmZpZWxkc2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19ncm91cCBtbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImNyZWF0ZV9maWVsZHNldFwiIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj4mbmJzcDs8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBjbGFzcz1cImZvcm1fX3NlbGVjdC1idXR0b24gZm9udC1tb25vXCIgQGNsaWNrPVwiY3JlYXRpbmdGaWVsZHNldCA9IHRydWVcIiB2LWlmPVwiISBjcmVhdGluZ0ZpZWxkc2V0XCI+KzwvcC1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJjcmVhdGluZ0ZpZWxkc2V0XCIgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBjbGFzcz1cImZvcm1fX3NlbGVjdC1idXR0b24gbXItMVwiIHRoZW1lPVwicHJpbWFyeVwiIEBjbGljay5wcmV2ZW50PkNyZWF0ZTwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBjbGFzcz1cImZvcm1fX3NlbGVjdC1idXR0b25cIiBAY2xpY2s9XCJjcmVhdGluZ0ZpZWxkc2V0ID0gZmFsc2VcIj5DYW5jZWw8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxocj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgeHhsOnRleHQtcmlnaHQgdy1mdWxsIHh4bDp3LTEvM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieHhsOm1yLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q3VzdG9taXplPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbVwiPkN1c3RvbWl6ZSBob3cgeW91ciB0YXhvbm9teSB3aWxsIGJlIGZvdW5kIGFuZCBkaXNwbGF5ZWQgd2l0aGluIHRoZSBhZG1pbiBjb250cm9sIHBhbmVsLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbCB4eGw6dy0yLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgeHhsOnctMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaWRlYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaG93IGluIFNpZGViYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiRG8geW91IHdhbnQgdGhpcyB0YXhvbm9teSB0byBiZSBzaG93biBpbiB0aGUgc2lkZWJhcj9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnU2hvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnSGlkZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3NpZGViYXInKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdzaWRlYmFyJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbCB4eGw6dy0xLzJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGVuY2lsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkNob29zZSBhbiBpY29uIHRoYXQgYmVzdCByZXByZXNlbnRzIHlvdXIgdGF4b25vbXkuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2ljb24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdpY29uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxocj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgeHhsOnRleHQtcmlnaHQgdy1mdWxsIHh4bDp3LTEvM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieHhsOm1yLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Um91dGU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtXCI+SWYgeW91ciB0YXhvbm9teSB3aWxsIGJlIGFjY2Vzc2libGUgZnJvbSB0aGUgZnJvbnRlbmQsIHlvdSBtYXkgZGVmaW5lIGl0cyByb3V0ZSBhbmQgdGVtcGxhdGUgaGVyZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgeHhsOnctMi8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsIHh4bDp3LTEvMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJyb3V0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUm91dGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiV2hlbiB0aGUgVVJJIG1hdGNoZXMgdGhpcyBwYXR0ZXJuLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdyb3V0ZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3JvdXRlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5yb3V0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbCB4eGw6dy0xLzJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlJlbmRlciB0aGlzIHRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCd0ZW1wbGF0ZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3RlbXBsYXRlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS50ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3AtY2FyZD5cblxuICAgICAgICAgICAgICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3RheG9ub21pZXMnIH1cIiBjbGFzcz1cImJ1dHRvbiBtci0zXCI+R28gQmFjazwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiPlNhdmUgVGF4b25vbXk8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wb3J0YWw+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmaWVsZHNldHM6IFtdLFxuICAgICAgICAgICAgICAgIGNyZWF0aW5nRmllbGRzZXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQ6IG51bGwsXG5cbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhcjogJzEnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnJyxcblxuICAgICAgICAgICAgICAgICAgICByb3V0ZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnJyxcblxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICcxJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucG9zdCgnL2FwaS90YXhvbm9taWVzJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ1RheG9ub215IHN1Y2Nlc3NmdWxseSBjcmVhdGVkJywgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvdGF4b25vbWllcycpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2ZpZWxkc2V0cycpLFxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKGZpZWxkc2V0cykge1xuICAgICAgICAgICAgICAgIG5leHQoZnVuY3Rpb24odm0pIHtcbiAgICAgICAgICAgICAgICAgICAgdm0uZmllbGRzZXRzID0gXy5tYXAoZmllbGRzZXRzLmRhdGEuZGF0YSwgZnVuY3Rpb24oZmllbGRzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogZmllbGRzZXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBmaWVsZHNldC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHZtLmZpZWxkc2V0cy51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdOb25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwic2l0ZW1hcFwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQ3JlYXRlIFRheG9ub215XCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInAtY2FyZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgeHhsOnRleHQtcmlnaHQgdy1mdWxsIHh4bDp3LTEvM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInh4bDptci0xMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkdlbmVyYWxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJXaGF0IHdpbGwgdGhpcyB0YXhvbm9teSBiZSBjYWxsZWQgYW5kIHdoYXQgd2lsbCBpdCBvcmdhbml6ZT9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbCB4eGw6dy0yLzNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IFwiV2hhdCB0aGlzIHRheG9ub215IHdpbGwgYmUgY2FsbGVkLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtc2x1Z1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJIYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkEgZGV2ZWxvcGVyLWZyaWVuZGx5IHZhcmlhbnQgb2YgdGhlIHRheG9ub215J3MgbmFtZS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsaW1pdGVyOiBcIl9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2F0Y2g6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJoYW5kbGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiaGFuZGxlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmhhbmRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImhhbmRsZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkdpdmUgYSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB3aGF0IHRoaXMgdGF4b25vbXkgd2lsbCBvcmdhbml6ZSBhbmQgc3RvcmUuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJkZXNjcmlwdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImRlc2NyaXB0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uY3JlYXRpbmdGaWVsZHNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsZXgtZ3Jvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmllbGRzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJGaWVsZHNldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldoYXQgZmllbGRzZXQgd291bGQgeW91IGxpa2UgdG8gYXR0YWNoP1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IF92bS5maWVsZHNldHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImZpZWxkc2V0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaWVsZHNldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5maWVsZHNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJmaWVsZHNldFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZmllbGRzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleC1ncm93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmaWVsZHNldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkZpZWxkc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiV2hhdCBmaWVsZHNldCB3b3VsZCB5b3UgbGlrZSB0byBjcmVhdGU/IERvbid0IGZvcmdldCB0byBjb25maWd1cmUgaXQgYWZ0ZXJ3YXJkcy5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiZmllbGRzZXRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpZWxkc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmZpZWxkc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImZpZWxkc2V0XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5maWVsZHNldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZ3JvdXAgbWwtMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1fX2xhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBcImNyZWF0ZV9maWVsZHNldFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIsKgXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmNyZWF0aW5nRmllbGRzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtX19zZWxlY3QtYnV0dG9uIGZvbnQtbW9ub1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jcmVhdGluZ0ZpZWxkc2V0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIrXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3JlYXRpbmdGaWVsZHNldFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb3JtX19zZWxlY3QtYnV0dG9uIG1yLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDcmVhdGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtX19zZWxlY3QtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNyZWF0aW5nRmllbGRzZXQgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHh4bDp0ZXh0LXJpZ2h0IHctZnVsbCB4eGw6dy0xLzNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ4eGw6bXItMTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJDdXN0b21pemVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDdXN0b21pemUgaG93IHlvdXIgdGF4b25vbXkgd2lsbCBiZSBmb3VuZCBhbmQgZGlzcGxheWVkIHdpdGhpbiB0aGUgYWRtaW4gY29udHJvbCBwYW5lbC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsIHh4bDp3LTIvM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsIHh4bDp3LTEvMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNpZGViYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNob3cgaW4gU2lkZWJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEbyB5b3Ugd2FudCB0aGlzIHRheG9ub215IHRvIGJlIHNob3duIGluIHRoZSBzaWRlYmFyP1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInNpZGViYXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInNpZGViYXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2lkZWJhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic2lkZWJhclwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnNpZGViYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbCB4eGw6dy0xLzJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcInBlbmNpbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDaG9vc2UgYW4gaWNvbiB0aGF0IGJlc3QgcmVwcmVzZW50cyB5b3VyIHRheG9ub215LlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiaWNvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiaWNvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5pY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJpY29uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHh4bDp0ZXh0LXJpZ2h0IHctZnVsbCB4eGw6dy0xLzNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ4eGw6bXItMTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJSb3V0ZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIklmIHlvdXIgdGF4b25vbXkgd2lsbCBiZSBhY2Nlc3NpYmxlIGZyb20gdGhlIGZyb250ZW5kLCB5b3UgbWF5IGRlZmluZSBpdHMgcm91dGUgYW5kIHRlbXBsYXRlIGhlcmUuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbCB4eGw6dy0yLzNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbCB4eGw6dy0xLzJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJSb3V0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDogXCJXaGVuIHRoZSBVUkkgbWF0Y2hlcyB0aGlzIHBhdHRlcm4uLi5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicm91dGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInJvdXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnJvdXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJyb3V0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnJvdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LWZ1bGwgeHhsOnctMS8yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IFwiUmVuZGVyIHRoaXMgdGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwidGVtcGxhdGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInRlbXBsYXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnRlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJ0ZW1wbGF0ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gbXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwidGF4b25vbWllc1wiIH0gfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlIFRheG9ub215XCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJhZyA9IHt9XG4gICAgfVxuXG4gICAgaGFzKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhZy5oYXNPd25Qcm9wZXJ0eShmaWVsZClcbiAgICB9XG5cbiAgICBhbnkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmJhZykubGVuZ3RoID4gMFxuICAgIH1cblxuICAgIGdldChmaWVsZCkge1xuICAgICAgICBpZiAodGhpcy5iYWdbZmllbGRdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iYWdbZmllbGRdWzBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNvcmQoYmFnKSB7XG4gICAgICAgIHRoaXMuYmFnID0gYmFnXG4gICAgfVxuXG4gICAgY2xlYXIoZmllbGQpIHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5lcnJvcnNbZmllbGRdXG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXJyb3JzID0ge31cbiAgICB9XG5cbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fVxuICAgIH1cbn0iLCJpbXBvcnQgRXJyb3JzIGZyb20gJy4vRXJyb3JzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgRm9ybSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGF0YSkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBFcnJvcnNcbiAgICAgICAgdGhpcy5vcmlnaW5hbERhdGEgPSBkYXRhXG5cbiAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gZGF0YSkge1xuICAgICAgICAgICAgdGhpc1tmaWVsZF0gPSBkYXRhW2ZpZWxkXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0KGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmRhdGFbZmllbGRdID0gdmFsdWVcbiAgICB9XG5cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtmaWVsZF1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgZm9ybSBmaWVsZHMuXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIGZvciAobGV0IGZpZWxkIGluIHRoaXMub3JpZ2luYWxEYXRhKSB7XG4gICAgICAgICAgICB0aGlzW2ZpZWxkXSA9IHRoaXMub3JpZ2luYWxEYXRhW2ZpZWxkXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lcnJvcnMuY2xlYXIoKVxuICAgIH1cblxuICAgIGRhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge31cblxuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB0aGlzLm9yaWdpbmFsRGF0YSlcbiAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBTdWJtaXQgYSBQT1NUIHJlcXVlc3QuXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICovXG4gICAgcG9zdCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwb3N0JywgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBhIFBBVENIIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgcGF0Y2godXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncGF0Y2gnLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGEgUFVUIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgcHV0KHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3B1dCcsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgYSBERUxFVEUgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBkZWxldGUodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgnZGVsZXRlJywgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZm9ybSBieSB0aGUgZ2l2ZW4gcmVxdWVzdCB0eXBlIGFuZCB1cmwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdFR5cGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgc3VibWl0KHJlcXVlc3RUeXBlLCB1cmwpIHsgICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgYXhpb3NbcmVxdWVzdFR5cGVdKHVybCwgdGhpcy5kYXRhKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvcnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRmFpbHVyZShlcnJvcnMucmVzcG9uc2UuZGF0YSlcblxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3JzLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIG9uIHN1Y2Nlc3MgcHJvbWlzZSBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25TdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgLy8gV2UnbGwgbGVhdmUgaXQgdXAgdG8gdGhlIGltcGxlbWVudGF0aW9uIG9uXG4gICAgICAgIC8vIGlmIHRoZXkgd2FudCB0aGUgZm9ybSByZXNldCBhZnRlcndhcmRzLlxuICAgICAgICAvL1xuICAgICAgICAvLyB0aGlzLnJlc2V0KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIG9uIGZhaWx0dXJlIHByb21pc2UgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXG4gICAgICovXG4gICAgb25GYWlsdXJlKGVycm9ycykge1xuICAgICAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyb3JzKVxuICAgIH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NyZWF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmY0MzkxNTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ3JlYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ3JlYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmY0MzkxNTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmY0MzkxNTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmY0MzkxNTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NyZWF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmY0MzkxNTImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmY0MzkxNTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9UYXhvbm9teUdyb3Vwcy9DcmVhdGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DcmVhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NyZWF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JlYXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZjQzOTE1MiZcIiJdLCJzb3VyY2VSb290IjoiIn0=