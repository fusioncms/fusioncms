(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Matrices/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      id: null,
      fieldsets: [],
      creatingFieldset: false,
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: '',
        handle: '',
        description: '',
        type: 'collection',
        fieldset: null,
        sidebar: '1',
        quicklink: '1',
        icon: '',
        route: '',
        template: '',
        categorizable: '1',
        creditable: '1',
        publishable: '1',
        revision_control: '1',
        seoable: '1',
        status: '1'
      })
    };
  },
  methods: {
    submit: function submit() {
      this.form.patch('/api/matrices/' + this.id).then(function (response) {
        toast('Matrix successfully updated', 'success');
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/matrices/' + to.params.matrix), axios.get('/api/fieldsets')]).then(axios.spread(function (matrix, fieldsets) {
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
        vm.id = matrix.data.data.id;
        vm.form.name = matrix.data.data.name;
        vm.form.handle = matrix.data.data.handle;
        vm.form.description = matrix.data.data.description;
        vm.form.type = matrix.data.data.type;
        vm.form.fieldset = matrix.data.data.fieldset && matrix.data.data.fieldset.id ? matrix.data.data.fieldset.id : null;
        vm.form.sidebar = matrix.data.data.sidebar ? '1' : '0';
        vm.form.quicklink = matrix.data.data.quicklink ? '1' : '0';
        vm.form.icon = matrix.data.data.icon;
        vm.form.route = matrix.data.data.route;
        vm.form.template = matrix.data.data.template;
        vm.form.revision_control = matrix.data.data.revision_control ? '1' : '0';
        vm.form.categorizable = matrix.data.data.categorizable ? '1' : '0';
        vm.form.creditable = matrix.data.data.creditable ? '1' : '0';
        vm.form.publishable = matrix.data.data.publishable ? '1' : '0';
        vm.form.seoable = matrix.data.data.seoable ? '1' : '0';
        vm.form.status = matrix.data.data.status ? '1' : '0';
      });
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Edit.vue?vue&type=template&id=66a7d7b0&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Matrices/Edit.vue?vue&type=template&id=66a7d7b0& ***!
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
    "div",
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("app-title", { attrs: { icon: "chart-network" } }, [
            _vm._v("Edit Matrix")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "content-container" }, [
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
                            "What will this matrix be called and what will it manage?"
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
                          help: "What this matrix will be called.",
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
                            "A developer-friendly variant of the matrix's name.",
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
                            "Give a short description of what this matrix will manage and store.",
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
                      _c("p-select", {
                        attrs: {
                          name: "type",
                          label: "Type",
                          help:
                            "What type of matrix will this be? Only change this if you know what you're doing as it may result in data loss.",
                          options: [
                            {
                              label: "Collection",
                              value: "collection"
                            },
                            {
                              label: "Page",
                              value: "page"
                            }
                          ],
                          "has-error": _vm.form.errors.has("type"),
                          "error-message": _vm.form.errors.get("type")
                        },
                        model: {
                          value: _vm.form.type,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "type", $$v)
                          },
                          expression: "form.type"
                        }
                      }),
                      _vm._v(" "),
                      _c("p-select", {
                        attrs: {
                          name: "fieldset",
                          label: "Fieldset",
                          help: "What fieldset would you like to attach?",
                          options: _vm.fieldsets,
                          "has-error": _vm.form.errors.has("fieldset"),
                          "error-message": _vm.form.errors.get("fieldset")
                        },
                        model: {
                          value: _vm.form.fieldset,
                          callback: function($$v) {
                            _vm.$set(_vm.form, "fieldset", $$v)
                          },
                          expression: "form.fieldset"
                        }
                      })
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
                            "Customize how your matrix will be found and displayed within the admin control panel."
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
                                "Do you want this matrix to be shown in the sidebar?",
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
                          _c("p-select", {
                            attrs: {
                              name: "quicklink",
                              label: "Show as Quicklink",
                              help:
                                "Do you want this matrix to be shown as a quicklink on the dashboard?",
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
                              "has-error": _vm.form.errors.has("quicklink"),
                              "error-message": _vm.form.errors.get("quicklink")
                            },
                            model: {
                              value: _vm.form.quicklink,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "quicklink", $$v)
                              },
                              expression: "form.quicklink"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col w-full" },
                        [
                          _c("p-input", {
                            attrs: {
                              name: "icon",
                              label: "Icon",
                              placeholder: "pencil",
                              help:
                                "Choose an icon that best represents your matrix.",
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
                            "If your matrix will be accessible from the frontend, you may define its route and template here."
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
                              "has-error": _vm.form.errors.has("template"),
                              "error-message": _vm.form.errors.get("template"),
                              monospaced: ""
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
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "side-container" }, [
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
              _c(
                "p-card",
                [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col w-full" },
                      [
                        _c("p-select", {
                          attrs: {
                            name: "status",
                            label: "Status",
                            options: [
                              {
                                label: "Enabled",
                                value: "1"
                              },
                              {
                                label: "Disabled",
                                value: "0"
                              }
                            ]
                          },
                          model: {
                            value: _vm.form.status,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "status", $$v)
                            },
                            expression: "form.status"
                          }
                        })
                      ],
                      1
                    )
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
                          attrs: { to: { name: "matrices" } }
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
                        [_vm._v("Save Matrix")]
                      )
                    ],
                    1
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

/***/ "./resources/js/views/Matrices/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Matrices/Edit.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_66a7d7b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=66a7d7b0& */ "./resources/js/views/Matrices/Edit.vue?vue&type=template&id=66a7d7b0&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Matrices/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_66a7d7b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_66a7d7b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Matrices/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Matrices/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Matrices/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Matrices/Edit.vue?vue&type=template&id=66a7d7b0&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Matrices/Edit.vue?vue&type=template&id=66a7d7b0& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_66a7d7b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=66a7d7b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Edit.vue?vue&type=template&id=66a7d7b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_66a7d7b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_66a7d7b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL01hdHJpY2VzL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9NYXRyaWNlcy9FZGl0LnZ1ZT9iMTM2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mb3Jtcy9FcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zvcm1zL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL01hdHJpY2VzL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9NYXRyaWNlcy9FZGl0LnZ1ZT85MDE2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9NYXRyaWNlcy9FZGl0LnZ1ZT9jMDUwIl0sIm5hbWVzIjpbIkVycm9ycyIsImVycm9ycyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicmVzcG9uc2UiLCJGb3JtIiwiZGF0YSIsIm9yaWdpbmFsRGF0YSIsInZhbHVlIiwiY2xlYXIiLCJwcm9wZXJ0eSIsInVybCIsInN1Ym1pdCIsInJlcXVlc3RUeXBlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJheGlvcyIsInRoZW4iLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJyZWNvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNk9B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QUNDLE9BQUQsRUFBVUMsTUFBVixFQUFxQjtBQUNwQ0MsYUFBSyxDQUFDSixXQUFELENBQUwsQ0FBbUJGLEdBQW5CLEVBQXdCLEtBQUksQ0FBQ0wsSUFBTCxFQUF4QixFQUNLWSxJQURMLENBQ1UsVUFBQWQsUUFBUSxFQUFJO0FBQ2QsZUFBSSxDQUFDZSxTQUFMLENBQWVmLFFBQVEsQ0FBQ0UsSUFBeEI7O0FBRUFTLGlCQUFPLENBQUNYLFFBQVEsQ0FBQ0UsSUFBVixDQUFQO0FBQ0gsU0FMTCxXQU1XLFVBQUFSLE1BQU0sRUFBSTtBQUNiLGVBQUksQ0FBQ3NCLFNBQUwsQ0FBZXRCLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkUsSUFBL0I7O0FBRUFVLGdCQUFNLENBQUNsQixNQUFNLENBQUNNLFFBQVAsQ0FBZ0JFLElBQWpCLENBQU47QUFDSCxTQVZMO0FBV0gsT0FaTSxDQUFQO0FBYUg7QUFFRDs7Ozs7Ozs7OEJBS1VBLEksRUFBTSxDQUtmLEMsQ0FKRztBQUNBO0FBQ0E7QUFDQTs7QUFHSjs7Ozs7Ozs7OEJBS1VSLE0sRUFBUTtBQUNkLFdBQUtBLE1BQUwsQ0FBWXVCLE1BQVosQ0FBbUJ2QixNQUFuQjtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxSEw7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTBMLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8YXBwLXRpdGxlIGljb249XCJjaGFydC1uZXR3b3JrXCI+RWRpdCBNYXRyaXg8L2FwcC10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB4eGw6dGV4dC1yaWdodCB3LWZ1bGwgeHhsOnctMS8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ4eGw6bXItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5HZW5lcmFsPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbVwiPldoYXQgd2lsbCB0aGlzIG1hdHJpeCBiZSBjYWxsZWQgYW5kIHdoYXQgd2lsbCBpdCBtYW5hZ2U/PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsIHh4bDp3LTIvM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IHRoaXMgbWF0cml4IHdpbGwgYmUgY2FsbGVkLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtc2x1Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiQSBkZXZlbG9wZXItZnJpZW5kbHkgdmFyaWFudCBvZiB0aGUgbWF0cml4J3MgbmFtZS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxpbWl0ZXI9XCJfXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp3YXRjaD1cImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdoYW5kbGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnaGFuZGxlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uaGFuZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zbHVnPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiR2l2ZSBhIHNob3J0IGRlc2NyaXB0aW9uIG9mIHdoYXQgdGhpcyBtYXRyaXggd2lsbCBtYW5hZ2UgYW5kIHN0b3JlLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2Rlc2NyaXB0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2Rlc2NyaXB0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWlucHV0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInR5cGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUeXBlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IHR5cGUgb2YgbWF0cml4IHdpbGwgdGhpcyBiZT8gT25seSBjaGFuZ2UgdGhpcyBpZiB5b3Uga25vdyB3aGF0IHlvdSdyZSBkb2luZyBhcyBpdCBtYXkgcmVzdWx0IGluIGRhdGEgbG9zcy5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnQ29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICdjb2xsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogJ1BhZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAncGFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygndHlwZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCd0eXBlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0udHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Atc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpZWxkc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRmllbGRzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIldoYXQgZmllbGRzZXQgd291bGQgeW91IGxpa2UgdG8gYXR0YWNoP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImZpZWxkc2V0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdmaWVsZHNldCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdmaWVsZHNldCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmZpZWxkc2V0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB4eGw6dGV4dC1yaWdodCB3LWZ1bGwgeHhsOnctMS8zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ4eGw6bXItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5DdXN0b21pemU8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtXCI+Q3VzdG9taXplIGhvdyB5b3VyIG1hdHJpeCB3aWxsIGJlIGZvdW5kIGFuZCBkaXNwbGF5ZWQgd2l0aGluIHRoZSBhZG1pbiBjb250cm9sIHBhbmVsLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbCB4eGw6dy0yLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgeHhsOnctMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaWRlYmFyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaG93IGluIFNpZGViYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiRG8geW91IHdhbnQgdGhpcyBtYXRyaXggdG8gYmUgc2hvd24gaW4gdGhlIHNpZGViYXI/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogJ1Nob3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogJ0hpZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdzaWRlYmFyJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnc2lkZWJhcicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgeHhsOnctMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJxdWlja2xpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNob3cgYXMgUXVpY2tsaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkRvIHlvdSB3YW50IHRoaXMgbWF0cml4IHRvIGJlIHNob3duIGFzIGEgcXVpY2tsaW5rIG9uIHRoZSBkYXNoYm9hcmQ/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogJ1Nob3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogJ0hpZGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICcwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdxdWlja2xpbmsnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdxdWlja2xpbmsnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnF1aWNrbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGVuY2lsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkNob29zZSBhbiBpY29uIHRoYXQgYmVzdCByZXByZXNlbnRzIHlvdXIgbWF0cml4LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdpY29uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnaWNvbicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHh4bDp0ZXh0LXJpZ2h0IHctZnVsbCB4eGw6dy0xLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInh4bDptci0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlJvdXRlPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbVwiPklmIHlvdXIgbWF0cml4IHdpbGwgYmUgYWNjZXNzaWJsZSBmcm9tIHRoZSBmcm9udGVuZCwgeW91IG1heSBkZWZpbmUgaXRzIHJvdXRlIGFuZCB0ZW1wbGF0ZSBoZXJlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbCB4eGw6dy0yLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgeHhsOnctMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInJvdXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJSb3V0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXaGVuIHRoZSBVUkkgbWF0Y2hlcyB0aGlzIHBhdHRlcm4uLi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3JvdXRlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgncm91dGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnJvdXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsIHh4bDp3LTEvMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiUmVuZGVyIHRoaXMgdGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCd0ZW1wbGF0ZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3RlbXBsYXRlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1jYXJkPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnRW5hYmxlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogJ0Rpc2FibGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogJzAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Atc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ21hdHJpY2VzJyB9XCIgY2xhc3M9XCJidXR0b24gbXItM1wiPkdvIEJhY2s8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIEBjbGljay5wcmV2ZW50PVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCI+U2F2ZSBNYXRyaXg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcG9ydGFsPlxuICAgICAgICAgICAgICAgICAgICA8L3AtY2FyZD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgICAgIGZpZWxkc2V0czogW10sXG4gICAgICAgICAgICAgICAgY3JlYXRpbmdGaWVsZHNldDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0OiBudWxsLFxuXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXI6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tsaW5rOiAnMScsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICcnLFxuXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICcnLFxuXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpemFibGU6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgY3JlZGl0YWJsZTogJzEnLFxuICAgICAgICAgICAgICAgICAgICBwdWJsaXNoYWJsZTogJzEnLFxuICAgICAgICAgICAgICAgICAgICByZXZpc2lvbl9jb250cm9sOiAnMScsXG5cbiAgICAgICAgICAgICAgICAgICAgc2VvYWJsZTogJzEnLFxuXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJzEnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wYXRjaCgnL2FwaS9tYXRyaWNlcy8nICsgdGhpcy5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ01hdHJpeCBzdWNjZXNzZnVsbHkgdXBkYXRlZCcsICdzdWNjZXNzJylcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9tYXRyaWNlcy8nICsgdG8ucGFyYW1zLm1hdHJpeCksXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2ZpZWxkc2V0cycpLFxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKG1hdHJpeCwgZmllbGRzZXRzKSB7XG4gICAgICAgICAgICAgICAgbmV4dChmdW5jdGlvbih2bSkge1xuICAgICAgICAgICAgICAgICAgICB2bS5maWVsZHNldHMgPSBfLm1hcChmaWVsZHNldHMuZGF0YS5kYXRhLCBmdW5jdGlvbihmaWVsZHNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiBmaWVsZHNldC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZpZWxkc2V0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIHZtLmZpZWxkc2V0cy51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdOb25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB2bS5pZCA9IG1hdHJpeC5kYXRhLmRhdGEuaWRcblxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLm5hbWUgPSBtYXRyaXguZGF0YS5kYXRhLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5oYW5kbGUgPSBtYXRyaXguZGF0YS5kYXRhLmhhbmRsZVxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLmRlc2NyaXB0aW9uID0gbWF0cml4LmRhdGEuZGF0YS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLnR5cGUgPSBtYXRyaXguZGF0YS5kYXRhLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5maWVsZHNldCA9IG1hdHJpeC5kYXRhLmRhdGEuZmllbGRzZXQgJiYgbWF0cml4LmRhdGEuZGF0YS5maWVsZHNldC5pZCA/IG1hdHJpeC5kYXRhLmRhdGEuZmllbGRzZXQuaWQgOiBudWxsXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5zaWRlYmFyID0gbWF0cml4LmRhdGEuZGF0YS5zaWRlYmFyID8gJzEnIDogJzAnXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ucXVpY2tsaW5rID0gbWF0cml4LmRhdGEuZGF0YS5xdWlja2xpbmsgPyAnMScgOiAnMCdcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5pY29uID0gbWF0cml4LmRhdGEuZGF0YS5pY29uXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5yb3V0ZSA9IG1hdHJpeC5kYXRhLmRhdGEucm91dGVcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS50ZW1wbGF0ZSA9IG1hdHJpeC5kYXRhLmRhdGEudGVtcGxhdGVcblxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLnJldmlzaW9uX2NvbnRyb2wgPSBtYXRyaXguZGF0YS5kYXRhLnJldmlzaW9uX2NvbnRyb2wgPyAnMScgOiAnMCdcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5jYXRlZ29yaXphYmxlID0gbWF0cml4LmRhdGEuZGF0YS5jYXRlZ29yaXphYmxlID8gJzEnIDogJzAnXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0uY3JlZGl0YWJsZSA9IG1hdHJpeC5kYXRhLmRhdGEuY3JlZGl0YWJsZSA/ICcxJyA6ICcwJ1xuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLnB1Ymxpc2hhYmxlID0gbWF0cml4LmRhdGEuZGF0YS5wdWJsaXNoYWJsZSA/ICcxJyA6ICcwJ1xuXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0uc2VvYWJsZSA9IG1hdHJpeC5kYXRhLmRhdGEuc2VvYWJsZSA/ICcxJyA6ICcwJ1xuXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0uc3RhdHVzID0gbWF0cml4LmRhdGEuZGF0YS5zdGF0dXMgPyAnMScgOiAnMCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwiY2hhcnQtbmV0d29ya1wiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiRWRpdCBNYXRyaXhcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInAtY2FyZFwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgeHhsOnRleHQtcmlnaHQgdy1mdWxsIHh4bDp3LTEvM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInh4bDptci0xMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkdlbmVyYWxcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJXaGF0IHdpbGwgdGhpcyBtYXRyaXggYmUgY2FsbGVkIGFuZCB3aGF0IHdpbGwgaXQgbWFuYWdlP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsIHh4bDp3LTIvM1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDogXCJXaGF0IHRoaXMgbWF0cml4IHdpbGwgYmUgY2FsbGVkLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtc2x1Z1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJIYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkEgZGV2ZWxvcGVyLWZyaWVuZGx5IHZhcmlhbnQgb2YgdGhlIG1hdHJpeCdzIG5hbWUuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGltaXRlcjogXCJfXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiaGFuZGxlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcImhhbmRsZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJoYW5kbGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJHaXZlIGEgc2hvcnQgZGVzY3JpcHRpb24gb2Ygd2hhdCB0aGlzIG1hdHJpeCB3aWxsIG1hbmFnZSBhbmQgc3RvcmUuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJkZXNjcmlwdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImRlc2NyaXB0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ0eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIldoYXQgdHlwZSBvZiBtYXRyaXggd2lsbCB0aGlzIGJlPyBPbmx5IGNoYW5nZSB0aGlzIGlmIHlvdSBrbm93IHdoYXQgeW91J3JlIGRvaW5nIGFzIGl0IG1heSByZXN1bHQgaW4gZGF0YSBsb3NzLlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ29sbGVjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiY29sbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJQYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCJwYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJ0eXBlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInR5cGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInR5cGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udHlwZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmllbGRzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRmllbGRzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDogXCJXaGF0IGZpZWxkc2V0IHdvdWxkIHlvdSBsaWtlIHRvIGF0dGFjaD9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLmZpZWxkc2V0cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImZpZWxkc2V0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcImZpZWxkc2V0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmZpZWxkc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZmllbGRzZXRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZmllbGRzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCB4eGw6dGV4dC1yaWdodCB3LWZ1bGwgeHhsOnctMS8zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwieHhsOm1yLTEwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiQ3VzdG9taXplXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ3VzdG9taXplIGhvdyB5b3VyIG1hdHJpeCB3aWxsIGJlIGZvdW5kIGFuZCBkaXNwbGF5ZWQgd2l0aGluIHRoZSBhZG1pbiBjb250cm9sIHBhbmVsLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LWZ1bGwgeHhsOnctMi8zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LWZ1bGwgeHhsOnctMS8yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2lkZWJhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2hvdyBpbiBTaWRlYmFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRvIHlvdSB3YW50IHRoaXMgbWF0cml4IHRvIGJlIHNob3duIGluIHRoZSBzaWRlYmFyP1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInNpZGViYXJcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInNpZGViYXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2lkZWJhcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic2lkZWJhclwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnNpZGViYXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbCB4eGw6dy0xLzJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJxdWlja2xpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNob3cgYXMgUXVpY2tsaW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkRvIHlvdSB3YW50IHRoaXMgbWF0cml4IHRvIGJlIHNob3duIGFzIGEgcXVpY2tsaW5rIG9uIHRoZSBkYXNoYm9hcmQ/XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJIaWRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFwiMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwicXVpY2tsaW5rXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJxdWlja2xpbmtcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ucXVpY2tsaW5rLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJxdWlja2xpbmtcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5xdWlja2xpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiSWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwicGVuY2lsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNob29zZSBhbiBpY29uIHRoYXQgYmVzdCByZXByZXNlbnRzIHlvdXIgbWF0cml4LlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiaWNvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiaWNvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5pY29uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJpY29uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHh4bDp0ZXh0LXJpZ2h0IHctZnVsbCB4eGw6dy0xLzNcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ4eGw6bXItMTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJSb3V0ZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIklmIHlvdXIgbWF0cml4IHdpbGwgYmUgYWNjZXNzaWJsZSBmcm9tIHRoZSBmcm9udGVuZCwgeW91IG1heSBkZWZpbmUgaXRzIHJvdXRlIGFuZCB0ZW1wbGF0ZSBoZXJlLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LWZ1bGwgeHhsOnctMi8zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LWZ1bGwgeHhsOnctMS8yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUm91dGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IFwiV2hlbiB0aGUgVVJJIG1hdGNoZXMgdGhpcyBwYXR0ZXJuLi4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInJvdXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJyb3V0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5yb3V0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicm91dGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5yb3V0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsIHh4bDp3LTEvMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwOiBcIlJlbmRlciB0aGlzIHRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwidGVtcGxhdGVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInRlbXBsYXRlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlZDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS50ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwidGVtcGxhdGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS50ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2lkZS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicC1jYXJkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRW5hYmxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogXCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRpc2FibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIjBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInN0YXR1c1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gbXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcIm1hdHJpY2VzXCIgfSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkdvIEJhY2tcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZSBNYXRyaXhcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0ge31cbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKVxuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwXG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29yZChyZXNwb25zZSkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHJlc3BvbnNlLmVycm9yc1xuICAgIH1cblxuICAgIGNsZWFyKGZpZWxkKSB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVycm9ycyA9IHt9XG4gICAgfVxufSIsImltcG9ydCBFcnJvcnMgZnJvbSAnLi9FcnJvcnMnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBGb3JtIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gbmV3IEVycm9yc1xuICAgICAgICB0aGlzLm9yaWdpbmFsRGF0YSA9IGRhdGFcblxuICAgICAgICBmb3IgKGxldCBmaWVsZCBpbiBkYXRhKSB7XG4gICAgICAgICAgICB0aGlzW2ZpZWxkXSA9IGRhdGFbZmllbGRdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQoZmllbGQsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGF0YVtmaWVsZF0gPSB2YWx1ZVxuICAgIH1cblxuICAgIGdldChmaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2ZpZWxkXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBmb3JtIGZpZWxkcy5cbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gdGhpcy5vcmlnaW5hbERhdGEpIHtcbiAgICAgICAgICAgIHRoaXNbZmllbGRdID0gdGhpcy5vcmlnaW5hbERhdGFbZmllbGRdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVycm9ycy5jbGVhcigpXG4gICAgfVxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fVxuXG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHRoaXMub3JpZ2luYWxEYXRhKVxuICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFN1Ym1pdCBhIFBPU1QgcmVxdWVzdC5cbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgKi9cbiAgICBwb3N0KHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3Bvc3QnLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGEgUEFUQ0ggcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBwYXRjaCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwYXRjaCcsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgYSBQVVQgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBwdXQodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncHV0JywgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBhIERFTEVURSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIGRlbGV0ZSh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdkZWxldGUnLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmb3JtIGJ5IHRoZSBnaXZlbiByZXF1ZXN0IHR5cGUgYW5kIHVybC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0VHlwZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBzdWJtaXQocmVxdWVzdFR5cGUsIHVybCkgeyAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBheGlvc1tyZXF1ZXN0VHlwZV0odXJsLCB0aGlzLmRhdGEoKSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25GYWlsdXJlKGVycm9ycy5yZXNwb25zZS5kYXRhKVxuXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcnMucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgb24gc3VjY2VzcyBwcm9taXNlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAvLyBXZSdsbCBsZWF2ZSBpdCB1cCB0byB0aGUgaW1wbGVtZW50YXRpb24gb25cbiAgICAgICAgLy8gaWYgdGhleSB3YW50IHRoZSBmb3JtIHJlc2V0IGFmdGVyd2FyZHMuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRoaXMucmVzZXQoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgb24gZmFpbHR1cmUgcHJvbWlzZSBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvcnNcbiAgICAgKi9cbiAgICBvbkZhaWx1cmUoZXJyb3JzKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzLnJlY29yZChlcnJvcnMpXG4gICAgfVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjZhN2Q3YjAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbmNtcy12Ni9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2NmE3ZDdiMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2NmE3ZDdiMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2NmE3ZDdiMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjZhN2Q3YjAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjZhN2Q3YjAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9NYXRyaWNlcy9FZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjZhN2Q3YjAmXCIiXSwic291cmNlUm9vdCI6IiJ9