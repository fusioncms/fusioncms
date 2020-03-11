(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    title: function title() {
      return {
        inner: this.entry.name || 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      collection: {},
      entry: {},
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({})
    };
  },
  computed: {
    sections: function sections() {
      var body = [];
      var sidebar = [];

      if (this.collection.fieldset) {
        body = _.filter(this.collection.fieldset.sections, function (section) {
          return section.placement == 'body';
        });
        sidebar = _.filter(this.collection.fieldset.sections, function (section) {
          return section.placement == 'sidebar';
        });
      }

      return {
        body: body,
        sidebar: sidebar
      };
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.patch('/api/collections/' + this.collection.slug + '/' + this.entry.id).then(function (response) {
        toast('Entry saved successfully', 'success');

        _this.$router.push('/collections/' + _this.collection.slug);
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    },
    getEntry: function getEntry(to, from, next) {
      var vm = this;
      axios.get('/api/collections/' + to.params.collection + '/' + to.params.id).then(function (response) {
        vm.collection = response.data.data.matrix;
        vm.entry = response.data.data.entry;
        var fields = {
          name: vm.entry.name,
          slug: vm.entry.slug,
          status: vm.entry.status
        };

        if (vm.collection.fieldset) {
          _.forEach(vm.collection.fieldset.sections, function (section) {
            _.forEach(section.fields, function (field) {
              Vue.set(fields, field.handle, vm.entry[field.handle]);
            });
          });
        }

        vm.form = new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"](fields, true);
        vm.$emit('updateHead');
      })["catch"](function (error) {
        vm.$router.push('/collections/' + vm.$router.currentRoute.params.collection);
        toast('The requested entry could not be found', 'warning');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.getEntry(to, from, next);
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    this.getEntry(to, from, next);
    next();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83& ***!
  \**************************************************************************************************************************************************************************************************************/
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
          _c(
            "app-title",
            { attrs: { icon: _vm.collection.icon || "pencil-alt" } },
            [_vm._v("Edit " + _vm._s(_vm.collection.reference_singular))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "subtitle" } }, [
        _vm._v(_vm._s(_vm.collection.description))
      ]),
      _vm._v(" "),
      _c(
        "form-container",
        {
          scopedSlots: _vm._u([
            {
              key: "sidebar",
              fn: function() {
                return [
                  _c("div", { staticClass: "card" }, [
                    _c("div", { staticClass: "card__body" }, [
                      _vm._v("\n                    sidebar\n                ")
                    ])
                  ])
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _vm.collection.show_name_field
            ? _c(
                "p-pane",
                {
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "side",
                        fn: function() {
                          return [
                            _c("p-pane-title", [_vm._v("General Information")]),
                            _vm._v(" "),
                            _c("p-pane-subtitle", [
                              _vm._v(
                                "This information will be used to name and identify your entry."
                              )
                            ])
                          ]
                        },
                        proxy: true
                      }
                    ],
                    null,
                    false,
                    525463316
                  )
                },
                [
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col w-full md:w-1/2" },
                      [
                        _c("p-input", {
                          attrs: {
                            name: "name",
                            label: _vm.collection.name_label || "Name",
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
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col w-full md:w-1/2" },
                      [
                        _c("p-slug", {
                          attrs: {
                            name: "slug",
                            label: "Slug",
                            monospaced: "",
                            autocomplete: "off",
                            required: "",
                            watch: _vm.form.name,
                            "has-error": _vm.form.errors.has("slug"),
                            "error-message": _vm.form.errors.get("slug")
                          },
                          model: {
                            value: _vm.form.slug,
                            callback: function($$v) {
                              _vm.$set(_vm.form, "slug", $$v)
                            },
                            expression: "form.slug"
                          }
                        })
                      ],
                      1
                    )
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.sections.body.length > 0
            ? _c(
                "div",
                _vm._l(_vm.sections.body, function(section) {
                  return _c(
                    "p-pane",
                    {
                      key: section.handle,
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "side",
                            fn: function() {
                              return [
                                _c("p-pane-title", [
                                  _vm._v(_vm._s(section.name))
                                ]),
                                _vm._v(" "),
                                _c("p-pane-subtitle", [
                                  _vm._v(_vm._s(section.description))
                                ])
                              ]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        true
                      )
                    },
                    [
                      _vm._v(" "),
                      _c("p-input", {
                        attrs: { label: "Message", name: "message" }
                      })
                    ],
                    1
                  )
                }),
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "save" } }, [
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
                _c("div", { staticClass: "card" }, [
                  _c("div", { staticClass: "card__body" }, [
                    _vm.collection.show_name_field
                      ? _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "col mb-6 form-content" }, [
                            _c("div", { staticClass: "row" }, [
                              _c(
                                "div",
                                { staticClass: "col w-1/2" },
                                [
                                  _c("p-input", {
                                    attrs: {
                                      name: "name",
                                      label:
                                        _vm.collection.name_label || "Name",
                                      autocomplete: "off",
                                      autofocus: "",
                                      required: "",
                                      "has-error": _vm.form.errors.has("name"),
                                      "error-message": _vm.form.errors.get(
                                        "name"
                                      )
                                    },
                                    model: {
                                      value: _vm.form.name,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "name", $$v)
                                      },
                                      expression: "form.name"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "col w-1/2" },
                                [
                                  _c("p-slug", {
                                    attrs: {
                                      name: "slug",
                                      label: "Slug",
                                      monospaced: "",
                                      autocomplete: "off",
                                      required: "",
                                      watch: _vm.form.name,
                                      "has-error": _vm.form.errors.has("slug"),
                                      "error-message": _vm.form.errors.get(
                                        "slug"
                                      )
                                    },
                                    model: {
                                      value: _vm.form.slug,
                                      callback: function($$v) {
                                        _vm.$set(_vm.form, "slug", $$v)
                                      },
                                      expression: "form.slug"
                                    }
                                  })
                                ],
                                1
                              )
                            ])
                          ])
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.sections.body.length > 0
                      ? _c(
                          "div",
                          _vm._l(_vm.sections.body, function(section, index) {
                            return _c("div", { key: section.handle }, [
                              _c("div", { staticClass: "row" }, [
                                _c("div", { staticClass: "col form-sidebar" }, [
                                  _c("div", { staticClass: "xxl:mr-10" }, [
                                    _c("h3", [_vm._v(_vm._s(section.name))]),
                                    _vm._v(" "),
                                    _c("p", { staticClass: "text-sm" }, [
                                      _vm._v(_vm._s(section.description))
                                    ])
                                  ])
                                ]),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "col form-content" },
                                  _vm._l(section.fields, function(field) {
                                    return _c(
                                      "div",
                                      {
                                        key: field.handle,
                                        staticClass: "form__group"
                                      },
                                      [
                                        _c(field.type.id + "-fieldtype", {
                                          tag: "component",
                                          attrs: { field: field },
                                          model: {
                                            value: _vm.form[field.handle],
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.form,
                                                field.handle,
                                                $$v
                                              )
                                            },
                                            expression: "form[field.handle]"
                                          }
                                        })
                                      ],
                                      1
                                    )
                                  }),
                                  0
                                )
                              ]),
                              _vm._v(" "),
                              index !== _vm.sections.body.length - 1
                                ? _c("hr")
                                : _vm._e()
                            ])
                          }),
                          0
                        )
                      : _c(
                          "div",
                          { staticClass: "text-center" },
                          [
                            _c(
                              "p",
                              [
                                _vm._v(
                                  "You should configure your Matrix Collection with some sections and fields first "
                                ),
                                _c("fa-icon", {
                                  staticClass: "text-emoji",
                                  attrs: { icon: ["fas", "hand-peace"] }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "button items-center",
                                attrs: {
                                  to: "/matrices/" + _vm.collection.id + "/edit"
                                }
                              },
                              [
                                _c("fa-icon", {
                                  staticClass: "mr-2 text-sm",
                                  attrs: { icon: ["fas", "edit"] }
                                }),
                                _vm._v(" Manage your collection")
                              ],
                              1
                            )
                          ],
                          1
                        )
                  ])
                ])
              ]
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
                                  value: 1
                                },
                                {
                                  label: "Disabled",
                                  value: 0
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
                        _vm.collection.slug
                          ? _c(
                              "router-link",
                              {
                                staticClass: "button mr-3",
                                attrs: {
                                  to: {
                                    name: "entries.index",
                                    params: { collection: _vm.collection.slug }
                                  }
                                }
                              },
                              [_vm._v("Go Back")]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "button",
                          {
                            staticClass: "button button--primary",
                            class: { "button--disabled": !_vm.form.hasChanges },
                            attrs: {
                              type: "submit",
                              disabled: !_vm.form.hasChanges
                            },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.submit($event)
                              }
                            }
                          },
                          [_vm._v("Save")]
                        )
                      ],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm._l(_vm.sections.sidebar, function(section) {
                  return _c(
                    "p-card",
                    { key: section.handle, staticClass: "mt-6" },
                    [
                      _c("h3", [_vm._v(_vm._s(section.name))]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-sm" }, [
                        _vm._v(_vm._s(section.description))
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "w-full" },
                        _vm._l(section.fields, function(field) {
                          return _c(
                            "div",
                            { key: field.handle, staticClass: "form__group" },
                            [
                              _c(field.type.id + "-fieldtype", {
                                tag: "component",
                                attrs: { field: field },
                                model: {
                                  value: _vm.form[field.handle],
                                  callback: function($$v) {
                                    _vm.$set(_vm.form, field.handle, $$v)
                                  },
                                  expression: "form[field.handle]"
                                }
                              })
                            ],
                            1
                          )
                        }),
                        0
                      )
                    ]
                  )
                })
              ],
              2
            )
          ])
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
    var form = this;
    this.__data = {};

    for (var field in data) {
      this[field] = data[field];
      form.__data[field] = form[field];

      (function (field_name) {
        Object.defineProperty(form, field_name, {
          get: function get() {
            return form.__data[field_name];
          },
          set: function set(new_value) {
            form.__data[field_name] = new_value;

            if (!form.hasChanges) {
              form.onFirstChange();
            }
          }
        });
      })(field);
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
    /** 
    * Helper method to reset the form to appear as if
    * it had no changes.
    *
    * @param {object} data
    */

  }, {
    key: "resetChangeListener",
    value: function resetChangeListener(data) {
      this.hasChanges = false;

      if (this.preventNavigation) {
        _vuex__WEBPACK_IMPORTED_MODULE_2__["default"].commit('form/setPreventNavigation', false);
      }
    }
  }]);

  return Form;
}();



/***/ }),

/***/ "./resources/js/views/Collections/Edit.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Collections/Edit.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=32cdfd83& */ "./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Collections/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=32cdfd83& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0NvbGxlY3Rpb25zL0VkaXQudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb3JtLWRhdGEvbGliL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0NvbGxlY3Rpb25zL0VkaXQudnVlPzU0YmYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zvcm1zL0Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZm9ybXMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQ29sbGVjdGlvbnMvRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0NvbGxlY3Rpb25zL0VkaXQudnVlPzEyN2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0NvbGxlY3Rpb25zL0VkaXQudnVlPzMwZTIiXSwibmFtZXMiOlsiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJyZXNwb25zZSIsIkZvcm0iLCJkYXRhIiwicHJldmVudE5hdmlnYXRpb24iLCJvcmlnaW5hbERhdGEiLCJoYXNDaGFuZ2VzIiwiZm9ybSIsIl9fZGF0YSIsImZpZWxkX25hbWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInNldCIsIm5ld192YWx1ZSIsIm9uRmlyc3RDaGFuZ2UiLCJ2YWx1ZSIsImNsZWFyIiwicHJvcGVydHkiLCJ1cmwiLCJzdWJtaXQiLCJyZXF1ZXN0VHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJ0aGVuIiwib25TdWNjZXNzIiwic3RvcmUiLCJjb21taXQiLCJvbkZhaWx1cmUiLCJyZWNvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFLLENBQUNDLE1BQU4sQ0FBYSwyQkFBYixFQUEwQyxJQUExQztBQUNIO0FBQ0o7QUFFQTs7Ozs7Ozs7O3dDQU1tQnpCLEksRUFBTTtBQUN0QixXQUFLRyxVQUFMLEdBQWtCLEtBQWxCOztBQUNBLFVBQUksS0FBS0YsaUJBQVQsRUFBNEI7QUFDeEJ1QixxREFBSyxDQUFDQyxNQUFOLENBQWEsMkJBQWIsRUFBMEMsS0FBMUM7QUFDSDtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvS0w7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTBMLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvMjUuanM/aWQ9ZmM3ODNlMjE0YTZhZDgxMjJmZDIiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8YXBwLXRpdGxlIDppY29uPVwiY29sbGVjdGlvbi5pY29uIHx8ICdwZW5jaWwtYWx0J1wiPkVkaXQge3sgY29sbGVjdGlvbi5yZWZlcmVuY2Vfc2luZ3VsYXIgfX08L2FwcC10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cInN1YnRpdGxlXCI+e3sgY29sbGVjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcG9ydGFsPlxuXG4gICAgICAgIDxmb3JtLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxwLXBhbmUgdi1pZj1cImNvbGxlY3Rpb24uc2hvd19uYW1lX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpzaWRlPlxuICAgICAgICAgICAgICAgICAgICA8cC1wYW5lLXRpdGxlPkdlbmVyYWwgSW5mb3JtYXRpb248L3AtcGFuZS10aXRsZT5cblxuICAgICAgICAgICAgICAgICAgICA8cC1wYW5lLXN1YnRpdGxlPlRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZSB1c2VkIHRvIG5hbWUgYW5kIGlkZW50aWZ5IHlvdXIgZW50cnkuPC9wLXBhbmUtc3VidGl0bGU+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgbWQ6dy0xLzJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpsYWJlbD1cImNvbGxlY3Rpb24ubmFtZV9sYWJlbCB8fCAnTmFtZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgbWQ6dy0xLzJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLXNsdWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2x1Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTbHVnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp3YXRjaD1cImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnc2x1ZycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnc2x1ZycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zbHVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Atc2x1Zz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3AtcGFuZT5cblxuICAgICAgICAgICAgPGRpdiB2LWlmPVwic2VjdGlvbnMuYm9keS5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgPHAtcGFuZSB2LWZvcj1cInNlY3Rpb24gaW4gc2VjdGlvbnMuYm9keVwiIDprZXk9XCJzZWN0aW9uLmhhbmRsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnNpZGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1wYW5lLXRpdGxlPnt7IHNlY3Rpb24ubmFtZSB9fTwvcC1wYW5lLXRpdGxlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1wYW5lLXN1YnRpdGxlPnt7IHNlY3Rpb24uZGVzY3JpcHRpb24gfX08L3AtcGFuZS1zdWJ0aXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dCBsYWJlbD1cIk1lc3NhZ2VcIiBuYW1lPVwibWVzc2FnZVwiPjwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L3AtcGFuZT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1zbG90OnNpZGViYXI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZGViYXJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Zvcm0tY29udGFpbmVyPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJzYXZlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cImNvbGxlY3Rpb24uc2hvd19uYW1lX2ZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIG1iLTYgZm9ybS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGFiZWw9XCJjb2xsZWN0aW9uLm5hbWVfbGFiZWwgfHwgJ05hbWUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy0xLzJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXNsdWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2x1Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTbHVnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp3YXRjaD1cImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnc2x1ZycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnc2x1ZycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zbHVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Atc2x1Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwic2VjdGlvbnMuYm9keS5sZW5ndGggPiAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIExvb3AgdGhyb3VnaCBlYWNoIHNlY3Rpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKHNlY3Rpb24sIGluZGV4KSBpbiBzZWN0aW9ucy5ib2R5XCIgOmtleT1cInNlY3Rpb24uaGFuZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIGZvcm0tc2lkZWJhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInh4bDptci0xMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57eyBzZWN0aW9uLm5hbWUgfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbVwiPnt7IHNlY3Rpb24uZGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBmb3JtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTG9vcCB0aHJvdWdoIGVhY2ggc2VjdGlvbiBmaWVsZCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJmaWVsZCBpbiBzZWN0aW9uLmZpZWxkc1wiIDprZXk9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXM9XCJmaWVsZC50eXBlLmlkICsgJy1maWVsZHR5cGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkPVwiZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybVtmaWVsZC5oYW5kbGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgdi1pZj1cImluZGV4ICE9PSBzZWN0aW9ucy5ib2R5Lmxlbmd0aCAtIDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3Ugc2hvdWxkIGNvbmZpZ3VyZSB5b3VyIE1hdHJpeCBDb2xsZWN0aW9uIHdpdGggc29tZSBzZWN0aW9ucyBhbmQgZmllbGRzIGZpcnN0IDxmYS1pY29uIGNsYXNzPVwidGV4dC1lbW9qaVwiIDppY29uPVwiWydmYXMnLCAnaGFuZC1wZWFjZSddXCI+PC9mYS1pY29uPjwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVwiYnV0dG9uIGl0ZW1zLWNlbnRlclwiIDp0bz1cIicvbWF0cmljZXMvJyArIGNvbGxlY3Rpb24uaWQgKyAnL2VkaXQnXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdlZGl0J11cIiBjbGFzcz1cIm1yLTIgdGV4dC1zbVwiPjwvZmEtaWNvbj4gTWFuYWdlIHlvdXIgY29sbGVjdGlvbjwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnRW5hYmxlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnRGlzYWJsZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIHYtaWY9XCJjb2xsZWN0aW9uLnNsdWdcIiA6dG89XCJ7IG5hbWU6ICdlbnRyaWVzLmluZGV4JywgcGFyYW1zOiB7Y29sbGVjdGlvbjogY29sbGVjdGlvbi5zbHVnfSB9XCIgY2xhc3M9XCJidXR0b24gbXItM1wiPkdvIEJhY2s8L3JvdXRlci1saW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIEBjbGljay5wcmV2ZW50PVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIgOmNsYXNzPVwieydidXR0b24tLWRpc2FibGVkJzogIWZvcm0uaGFzQ2hhbmdlc31cIiA6ZGlzYWJsZWQ9XCIhZm9ybS5oYXNDaGFuZ2VzXCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcG9ydGFsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWNhcmQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWNhcmQgdi1mb3I9XCIoc2VjdGlvbikgaW4gc2VjdGlvbnMuc2lkZWJhclwiIDprZXk9XCJzZWN0aW9uLmhhbmRsZVwiIGNsYXNzPVwibXQtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57eyBzZWN0aW9uLm5hbWUgfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbVwiPnt7IHNlY3Rpb24uZGVzY3JpcHRpb24gfX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTG9vcCB0aHJvdWdoIGVhY2ggc2VjdGlvbiBmaWVsZCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cImZpZWxkIGluIHNlY3Rpb24uZmllbGRzXCIgOmtleT1cImZpZWxkLmhhbmRsZVwiIGNsYXNzPVwiZm9ybV9fZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXM9XCJmaWVsZC50eXBlLmlkICsgJy1maWVsZHR5cGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm1bZmllbGQuaGFuZGxlXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcG9ydGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogdGhpcy5lbnRyeS5uYW1lIHx8ICdMb2FkaW5nLi4uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2xsZWN0aW9uOiB7fSxcbiAgICAgICAgICAgICAgICBlbnRyeToge30sXG4gICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe30pLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBzZWN0aW9ucygpIHtcbiAgICAgICAgICAgICAgICBsZXQgYm9keSA9IFtdXG4gICAgICAgICAgICAgICAgbGV0IHNpZGViYXIgPSBbXVxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sbGVjdGlvbi5maWVsZHNldCkge1xuICAgICAgICAgICAgICAgICAgICBib2R5ID0gXy5maWx0ZXIodGhpcy5jb2xsZWN0aW9uLmZpZWxkc2V0LnNlY3Rpb25zLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbi5wbGFjZW1lbnQgPT0gJ2JvZHknXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhciA9IF8uZmlsdGVyKHRoaXMuY29sbGVjdGlvbi5maWVsZHNldC5zZWN0aW9ucywgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb24ucGxhY2VtZW50ID09ICdzaWRlYmFyJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGJvZHksXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXI6IHNpZGViYXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucGF0Y2goJy9hcGkvY29sbGVjdGlvbnMvJyArIHRoaXMuY29sbGVjdGlvbi5zbHVnICsgJy8nICsgdGhpcy5lbnRyeS5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ0VudHJ5IHNhdmVkIHN1Y2Nlc3NmdWxseScsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2NvbGxlY3Rpb25zLycgKyB0aGlzLmNvbGxlY3Rpb24uc2x1ZylcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0RW50cnkodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzXG5cbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvY29sbGVjdGlvbnMvJyArIHRvLnBhcmFtcy5jb2xsZWN0aW9uICsgJy8nICsgdG8ucGFyYW1zLmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2bS5jb2xsZWN0aW9uID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hdHJpeFxuICAgICAgICAgICAgICAgICAgICB2bS5lbnRyeSA9IHJlc3BvbnNlLmRhdGEuZGF0YS5lbnRyeVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB2bS5lbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1Zzogdm0uZW50cnkuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogdm0uZW50cnkuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmNvbGxlY3Rpb24uZmllbGRzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaCh2bS5jb2xsZWN0aW9uLmZpZWxkc2V0LnNlY3Rpb25zLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHNlY3Rpb24uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWdWUuc2V0KGZpZWxkcywgZmllbGQuaGFuZGxlLCB2bS5lbnRyeVtmaWVsZC5oYW5kbGVdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybSA9IG5ldyBGb3JtKGZpZWxkcywgdHJ1ZSlcblxuICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvY29sbGVjdGlvbnMvJyArIHZtLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5jb2xsZWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnVGhlIHJlcXVlc3RlZCBlbnRyeSBjb3VsZCBub3QgYmUgZm91bmQnLCAnd2FybmluZycpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgbmV4dCh2bSA9PiB7XG4gICAgICAgICAgICAgICAgdm0uZ2V0RW50cnkodG8sIGZyb20sIG5leHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlVXBkYXRlKHRvLGZyb20sbmV4dCkge1xuICAgICAgICAgICAgdGhpcy5nZXRFbnRyeSh0bywgZnJvbSwgbmV4dClcblxuICAgICAgICAgICAgbmV4dCgpXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgPyBzZWxmLkZvcm1EYXRhIDogd2luZG93LkZvcm1EYXRhO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFwcC10aXRsZVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBpY29uOiBfdm0uY29sbGVjdGlvbi5pY29uIHx8IFwicGVuY2lsLWFsdFwiIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJFZGl0IFwiICsgX3ZtLl9zKF92bS5jb2xsZWN0aW9uLnJlZmVyZW5jZV9zaW5ndWxhcikpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcInN1YnRpdGxlXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvbGxlY3Rpb24uZGVzY3JpcHRpb24pKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZm9ybS1jb250YWluZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwic2lkZWJhclwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhclxcbiAgICAgICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0pXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uY29sbGVjdGlvbi5zaG93X25hbWVfZmllbGRcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJwLXBhbmVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInNpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtcGFuZS10aXRsZVwiLCBbX3ZtLl92KFwiR2VuZXJhbCBJbmZvcm1hdGlvblwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLXBhbmUtc3VidGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoaXMgaW5mb3JtYXRpb24gd2lsbCBiZSB1c2VkIHRvIG5hbWUgYW5kIGlkZW50aWZ5IHlvdXIgZW50cnkuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICA1MjU0NjMzMTZcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LWZ1bGwgbWQ6dy0xLzJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IF92bS5jb2xsZWN0aW9uLm5hbWVfbGFiZWwgfHwgXCJOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwibmFtZVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcIm5hbWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LWZ1bGwgbWQ6dy0xLzJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1zbHVnXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsdWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTbHVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2F0Y2g6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInNsdWdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJzbHVnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnNsdWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic2x1Z1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2x1Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnNlY3Rpb25zLmJvZHkubGVuZ3RoID4gMFxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc2VjdGlvbnMuYm9keSwgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInAtcGFuZVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBzZWN0aW9uLmhhbmRsZSxcbiAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInNpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtcGFuZS10aXRsZVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhzZWN0aW9uLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLXBhbmUtc3VidGl0bGVcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Moc2VjdGlvbi5kZXNjcmlwdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsYWJlbDogXCJNZXNzYWdlXCIsIG5hbWU6IFwibWVzc2FnZVwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJzYXZlXCIgfSB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbGxlY3Rpb24uc2hvd19uYW1lX2ZpZWxkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgbWItNiBmb3JtLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy0xLzJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29sbGVjdGlvbi5uYW1lX2xhYmVsIHx8IFwiTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctMS8yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1zbHVnXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2x1Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTbHVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwic2x1Z1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzbHVnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zbHVnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic2x1Z1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zbHVnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNlY3Rpb25zLmJvZHkubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc2VjdGlvbnMuYm9keSwgZnVuY3Rpb24oc2VjdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IHNlY3Rpb24uaGFuZGxlIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCBmb3JtLXNpZGViYXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ4eGw6bXItMTBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoX3ZtLl9zKHNlY3Rpb24ubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhzZWN0aW9uLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgZm9ybS1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woc2VjdGlvbi5maWVsZHMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkLmhhbmRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtX19ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhmaWVsZC50eXBlLmlkICsgXCItZmllbGR0eXBlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZpZWxkOiBmaWVsZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtW2ZpZWxkLmhhbmRsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5mb3JtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1bZmllbGQuaGFuZGxlXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggIT09IF92bS5zZWN0aW9ucy5ib2R5Lmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImhyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWW91IHNob3VsZCBjb25maWd1cmUgeW91ciBNYXRyaXggQ29sbGVjdGlvbiB3aXRoIHNvbWUgc2VjdGlvbnMgYW5kIGZpZWxkcyBmaXJzdCBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZW1vamlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJoYW5kLXBlYWNlXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXRlbXMtY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IFwiL21hdHJpY2VzL1wiICsgX3ZtLmNvbGxlY3Rpb24uaWQgKyBcIi9lZGl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yIHRleHQtc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJlZGl0XCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBNYW5hZ2UgeW91ciBjb2xsZWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpZGUtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZm9ybVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwicC1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFbmFibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRpc2FibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInN0YXR1c1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uY29sbGVjdGlvbi5zbHVnXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW50cmllcy5pbmRleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGNvbGxlY3Rpb246IF92bS5jb2xsZWN0aW9uLnNsdWcgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBCYWNrXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImJ1dHRvbi0tZGlzYWJsZWRcIjogIV92bS5mb3JtLmhhc0NoYW5nZXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmZvcm0uaGFzQ2hhbmdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc2VjdGlvbnMuc2lkZWJhciwgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInAtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGtleTogc2VjdGlvbi5oYW5kbGUsIHN0YXRpY0NsYXNzOiBcIm10LTZcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KF92bS5fcyhzZWN0aW9uLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3Moc2VjdGlvbi5kZXNjcmlwdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woc2VjdGlvbi5maWVsZHMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBmaWVsZC5oYW5kbGUsIHN0YXRpY0NsYXNzOiBcImZvcm1fX2dyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhmaWVsZC50eXBlLmlkICsgXCItZmllbGR0eXBlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmaWVsZDogZmllbGQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm1bZmllbGQuaGFuZGxlXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgZmllbGQuaGFuZGxlLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1bZmllbGQuaGFuZGxlXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0ge31cbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKVxuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwXG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29yZChyZXNwb25zZSkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHJlc3BvbnNlLmVycm9yc1xuICAgIH1cblxuICAgIGNsZWFyKGZpZWxkKSB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVycm9ycyA9IHt9XG4gICAgfVxufSIsImltcG9ydCBGb3JtRGF0YSBmcm9tICdmb3JtLWRhdGEnXG5pbXBvcnQgRXJyb3JzIGZyb20gJy4vRXJyb3JzJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3Z1ZXgnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IEZvcm0gaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIHByZXZlbnROYXZpZ2F0aW9uID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JzXG4gICAgICAgIHRoaXMub3JpZ2luYWxEYXRhID0gZGF0YVxuICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSBmYWxzZVxuICAgICAgICB0aGlzLnByZXZlbnROYXZpZ2F0aW9uID0gcHJldmVudE5hdmlnYXRpb25cblxuICAgICAgICBsZXQgZm9ybSA9IHRoaXNcblxuICAgICAgICB0aGlzLl9fZGF0YSA9IHt9O1xuXG4gICAgICAgIGZvciAobGV0IGZpZWxkIGluIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXNbZmllbGRdID0gZGF0YVtmaWVsZF1cbiAgICAgICAgXG4gICAgICAgICAgICBmb3JtLl9fZGF0YVtmaWVsZF0gPSBmb3JtW2ZpZWxkXTtcbiAgICAgICAgICAgIChmdW5jdGlvbihmaWVsZF9uYW1lKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5IChmb3JtLCBmaWVsZF9uYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLl9fZGF0YVtmaWVsZF9uYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3X3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLl9fZGF0YVtmaWVsZF9uYW1lXSA9IG5ld192YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3JtLmhhc0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLm9uRmlyc3RDaGFuZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KShmaWVsZCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldChmaWVsZCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5kYXRhW2ZpZWxkXSA9IHZhbHVlXG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbZmllbGRdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIGZvcm0gZmllbGRzLlxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICBmb3IgKGxldCBmaWVsZCBpbiB0aGlzLm9yaWdpbmFsRGF0YSkge1xuICAgICAgICAgICAgdGhpc1tmaWVsZF0gPSB0aGlzLm9yaWdpbmFsRGF0YVtmaWVsZF1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKClcbiAgICB9XG5cbiAgICBkYXRhKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9XG5cbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdGhpcy5vcmlnaW5hbERhdGEpXG4gICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIC8qKlxuICAgICogU3VibWl0IGEgUE9TVCByZXF1ZXN0LlxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAqL1xuICAgIHBvc3QodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncG9zdCcsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgYSBQQVRDSCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHBhdGNoKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3BhdGNoJywgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBhIFBVVCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHB1dCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwdXQnLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGEgREVMRVRFIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgZGVsZXRlKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ2RlbGV0ZScsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZvcm0gYnkgdGhlIGdpdmVuIHJlcXVlc3QgdHlwZSBhbmQgdXJsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RUeXBlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHN1Ym1pdChyZXF1ZXN0VHlwZSwgdXJsKSB7ICAgICAgXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBheGlvc1tyZXF1ZXN0VHlwZV0odXJsLCB0aGlzLmRhdGEoKSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZm9ybS9zZXRQcmV2ZW50TmF2aWdhdGlvbicsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZhaWx1cmUoZXJyb3JzLnJlc3BvbnNlLmRhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9ycy5yZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBvbiBzdWNjZXNzIHByb21pc2UgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIC8vIFdlJ2xsIGxlYXZlIGl0IHVwIHRvIHRoZSBpbXBsZW1lbnRhdGlvbiBvblxuICAgICAgICAvLyBpZiB0aGV5IHdhbnQgdGhlIGZvcm0gcmVzZXQgYWZ0ZXJ3YXJkcy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gdGhpcy5yZXNldCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBvbiBmYWlsdXJlIHByb21pc2UgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXG4gICAgICovXG4gICAgb25GYWlsdXJlKGVycm9ycykge1xuICAgICAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyb3JzKVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBIYW5kbGUgdGhlIGZpcnN0IGlucHV0IGV2ZW50LiBQcmV2ZW50cyBuYXZpZ2F0aW5nXG4gICAgICogYXdheSBmcm9tIHRoZSBmb3JtIGlmIHRoZSBwcmV2ZW50TmF2aWdhdGlvblxuICAgICAqIHNldHRpbmcgaGFzIGJlZW4gZW5hYmxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25GaXJzdENoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWVcbiAgICAgICAgaWYgKHRoaXMucHJldmVudE5hdmlnYXRpb24pIHtcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZm9ybS9zZXRQcmV2ZW50TmF2aWdhdGlvbicsIHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgLyoqIFxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gcmVzZXQgdGhlIGZvcm0gdG8gYXBwZWFyIGFzIGlmXG4gICAgICogaXQgaGFkIG5vIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHJlc2V0Q2hhbmdlTGlzdGVuZXIoZGF0YSkge1xuICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5wcmV2ZW50TmF2aWdhdGlvbikge1xuICAgICAgICAgICAgc3RvcmUuY29tbWl0KCdmb3JtL3NldFByZXZlbnROYXZpZ2F0aW9uJywgZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMmNkZmQ4MyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvZnVzaW9uY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMyY2RmZDgzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMyY2RmZDgzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMyY2RmZDgzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMmNkZmQ4MyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMmNkZmQ4MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL0NvbGxlY3Rpb25zL0VkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMmNkZmQ4MyZcIiJdLCJzb3VyY2VSb290IjoiIn0=