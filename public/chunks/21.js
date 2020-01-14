(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[21],{

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
              if (vm.entry[field.handle + '_raw']) {
                Vue.set(fields, field.handle, vm.entry[field.handle + '_raw']);
              } else {
                Vue.set(fields, field.handle, vm.entry[field.handle]);
              }
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
            { attrs: { icon: _vm.collection.icon || "pencil" } },
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
                _vm.collection.show_name_field
                  ? _c("div", { staticClass: "row" }, [
                      _c("div", { staticClass: "col form-sidebar" }, [
                        _c("div", { staticClass: "xxl:mr-10" })
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col mb-6 form-content" }, [
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col w-1/2" },
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
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.sections.body.length > 0
                  ? _c(
                      "div",
                      { key: _vm.collection.slug },
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
                              to: "/matrices/manage/" + _vm.collection.id
                            }
                          },
                          [
                            _c("fa-icon", {
                              staticClass: "mr-2 text-sm",
                              attrs: { icon: ["fas", "atom-alt"] }
                            }),
                            _vm._v(" Manage your collection")
                          ],
                          1
                        )
                      ],
                      1
                    )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0NvbGxlY3Rpb25zL0VkaXQudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb3JtLWRhdGEvbGliL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0NvbGxlY3Rpb25zL0VkaXQudnVlPzU0YmYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zvcm1zL0Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZm9ybXMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQ29sbGVjdGlvbnMvRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0NvbGxlY3Rpb25zL0VkaXQudnVlPzEyN2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0NvbGxlY3Rpb25zL0VkaXQudnVlPzMwZTIiXSwibmFtZXMiOlsiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJyZXNwb25zZSIsIkZvcm0iLCJkYXRhIiwicHJldmVudE5hdmlnYXRpb24iLCJvcmlnaW5hbERhdGEiLCJoYXNDaGFuZ2VzIiwiZm9ybSIsIl9fZGF0YSIsImZpZWxkX25hbWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInNldCIsIm5ld192YWx1ZSIsIm9uRmlyc3RDaGFuZ2UiLCJ2YWx1ZSIsImNsZWFyIiwicHJvcGVydHkiLCJ1cmwiLCJzdWJtaXQiLCJyZXF1ZXN0VHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJ0aGVuIiwib25TdWNjZXNzIiwic3RvcmUiLCJjb21taXQiLCJvbkZhaWx1cmUiLCJyZWNvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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VCxFQUE0QjtBQUN4QnVCLHFEQUFLLENBQUNDLE1BQU4sQ0FBYSwyQkFBYixFQUEwQyxLQUExQztBQUNIO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9LTDtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy8yMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxhcHAtdGl0bGUgOmljb249XCJjb2xsZWN0aW9uLmljb24gfHwgJ3BlbmNpbCdcIj5FZGl0IHt7IGNvbGxlY3Rpb24ucmVmZXJlbmNlX3Npbmd1bGFyIH19PC9hcHAtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuICAgICAgICBcbiAgICAgICAgPHBvcnRhbCB0bz1cInN1YnRpdGxlXCI+e3sgY29sbGVjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcG9ydGFsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1jYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJjb2xsZWN0aW9uLnNob3dfbmFtZV9maWVsZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgZm9ybS1zaWRlYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ4eGw6bXItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbWItNiBmb3JtLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LTEvMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhYmVsPVwiY29sbGVjdGlvbi5uYW1lX2xhYmVsIHx8ICdOYW1lJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtc2x1Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2x1Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2x1Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOndhdGNoPVwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnc2x1ZycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3NsdWcnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnNsdWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Atc2x1Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJzZWN0aW9ucy5ib2R5Lmxlbmd0aCA+IDBcIiA6a2V5PVwiY29sbGVjdGlvbi5zbHVnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBMb29wIHRocm91Z2ggZWFjaCBzZWN0aW9uIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoc2VjdGlvbiwgaW5kZXgpIGluIHNlY3Rpb25zLmJvZHlcIiA6a2V5PVwic2VjdGlvbi5oYW5kbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBmb3JtLXNpZGViYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieHhsOm1yLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57eyBzZWN0aW9uLm5hbWUgfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc21cIj57eyBzZWN0aW9uLmRlc2NyaXB0aW9uIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgZm9ybS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBMb29wIHRocm91Z2ggZWFjaCBzZWN0aW9uIGZpZWxkIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJmaWVsZCBpbiBzZWN0aW9uLmZpZWxkc1wiIDprZXk9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxjb21wb25lbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppcz1cImZpZWxkLnR5cGUuaWQgKyAnLWZpZWxkdHlwZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkPVwiZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm1bZmllbGQuaGFuZGxlXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociB2LWlmPVwiaW5kZXggIT09IHNlY3Rpb25zLmJvZHkubGVuZ3RoIC0gMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Zb3Ugc2hvdWxkIGNvbmZpZ3VyZSB5b3VyIE1hdHJpeCBDb2xsZWN0aW9uIHdpdGggc29tZSBzZWN0aW9ucyBhbmQgZmllbGRzIGZpcnN0IDxmYS1pY29uIGNsYXNzPVwidGV4dC1lbW9qaVwiIDppY29uPVwiWydmYXMnLCAnaGFuZC1wZWFjZSddXCI+PC9mYS1pY29uPjwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayBjbGFzcz1cImJ1dHRvbiBpdGVtcy1jZW50ZXJcIiA6dG89XCInL21hdHJpY2VzL21hbmFnZS8nICsgY29sbGVjdGlvbi5pZFwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnYXRvbS1hbHQnXVwiIGNsYXNzPVwibXItMiB0ZXh0LXNtXCI+PC9mYS1pY29uPiBNYW5hZ2UgeW91ciBjb2xsZWN0aW9uPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3AtY2FyZD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogJ0VuYWJsZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnRGlzYWJsZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgdi1pZj1cImNvbGxlY3Rpb24uc2x1Z1wiIDp0bz1cInsgbmFtZTogJ2VudHJpZXMuaW5kZXgnLCBwYXJhbXM6IHtjb2xsZWN0aW9uOiBjb2xsZWN0aW9uLnNsdWd9IH1cIiBjbGFzcz1cImJ1dHRvbiBtci0zXCI+R28gQmFjazwvcm91dGVyLWxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiIDpjbGFzcz1cInsnYnV0dG9uLS1kaXNhYmxlZCc6ICFmb3JtLmhhc0NoYW5nZXN9XCIgOmRpc2FibGVkPVwiIWZvcm0uaGFzQ2hhbmdlc1wiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcG9ydGFsPlxuICAgICAgICAgICAgICAgICAgICA8L3AtY2FyZD5cblxuICAgICAgICAgICAgICAgICAgICA8cC1jYXJkIHYtZm9yPVwiKHNlY3Rpb24pIGluIHNlY3Rpb25zLnNpZGViYXJcIiA6a2V5PVwic2VjdGlvbi5oYW5kbGVcIiBjbGFzcz1cIm10LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57eyBzZWN0aW9uLm5hbWUgfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtXCI+e3sgc2VjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTG9vcCB0aHJvdWdoIGVhY2ggc2VjdGlvbiBmaWVsZCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZmllbGQgaW4gc2VjdGlvbi5maWVsZHNcIiA6a2V5PVwiZmllbGQuaGFuZGxlXCIgY2xhc3M9XCJmb3JtX19ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXM9XCJmaWVsZC50eXBlLmlkICsgJy1maWVsZHR5cGUnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZD1cImZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtW2ZpZWxkLmhhbmRsZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvY29tcG9uZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1jYXJkPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vZm9ybXMvRm9ybSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6IHRoaXMuZW50cnkubmFtZSB8fCAnTG9hZGluZy4uLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29sbGVjdGlvbjoge30sXG4gICAgICAgICAgICAgICAgZW50cnk6IHt9LFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHt9KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc2VjdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSBbXVxuICAgICAgICAgICAgICAgIGxldCBzaWRlYmFyID0gW11cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbGxlY3Rpb24uZmllbGRzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IF8uZmlsdGVyKHRoaXMuY29sbGVjdGlvbi5maWVsZHNldC5zZWN0aW9ucywgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb24ucGxhY2VtZW50ID09ICdib2R5J1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIgPSBfLmZpbHRlcih0aGlzLmNvbGxlY3Rpb24uZmllbGRzZXQuc2VjdGlvbnMsIGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWN0aW9uLnBsYWNlbWVudCA9PSAnc2lkZWJhcidcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyOiBzaWRlYmFyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhdGNoKCcvYXBpL2NvbGxlY3Rpb25zLycgKyB0aGlzLmNvbGxlY3Rpb24uc2x1ZyArICcvJyArIHRoaXMuZW50cnkuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdFbnRyeSBzYXZlZCBzdWNjZXNzZnVsbHknLCAnc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2NvbGxlY3Rpb25zLycgKyB0aGlzLmNvbGxlY3Rpb24uc2x1ZylcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZ2V0RW50cnkodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzXG5cbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvY29sbGVjdGlvbnMvJyArIHRvLnBhcmFtcy5jb2xsZWN0aW9uICsgJy8nICsgdG8ucGFyYW1zLmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB2bS5jb2xsZWN0aW9uID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hdHJpeFxuICAgICAgICAgICAgICAgICAgICB2bS5lbnRyeSA9IHJlc3BvbnNlLmRhdGEuZGF0YS5lbnRyeVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB2bS5lbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1Zzogdm0uZW50cnkuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogdm0uZW50cnkuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmNvbGxlY3Rpb24uZmllbGRzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaCh2bS5jb2xsZWN0aW9uLmZpZWxkc2V0LnNlY3Rpb25zLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHNlY3Rpb24uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0uZW50cnlbZmllbGQuaGFuZGxlICsgJ19yYXcnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVnVlLnNldChmaWVsZHMsIGZpZWxkLmhhbmRsZSwgdm0uZW50cnlbZmllbGQuaGFuZGxlICsgJ19yYXcnXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFZ1ZS5zZXQoZmllbGRzLCBmaWVsZC5oYW5kbGUsIHZtLmVudHJ5W2ZpZWxkLmhhbmRsZV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0gPSBuZXcgRm9ybShmaWVsZHMsIHRydWUpXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uJGVtaXQoJ3VwZGF0ZUhlYWQnKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLiRyb3V0ZXIucHVzaCgnL2NvbGxlY3Rpb25zLycgKyB2bS4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuY29sbGVjdGlvbilcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ1RoZSByZXF1ZXN0ZWQgZW50cnkgY291bGQgbm90IGJlIGZvdW5kJywgJ3dhcm5pbmcnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIG5leHQodm0gPT4ge1xuICAgICAgICAgICAgICAgIHZtLmdldEVudHJ5KHRvLCBmcm9tLCBuZXh0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZVVwZGF0ZSh0byxmcm9tLG5leHQpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0RW50cnkodG8sIGZyb20sIG5leHQpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5leHQoKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnID8gc2VsZi5Gb3JtRGF0YSA6IHdpbmRvdy5Gb3JtRGF0YTtcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhcHAtdGl0bGVcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgaWNvbjogX3ZtLmNvbGxlY3Rpb24uaWNvbiB8fCBcInBlbmNpbFwiIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJFZGl0IFwiICsgX3ZtLl9zKF92bS5jb2xsZWN0aW9uLnJlZmVyZW5jZV9zaW5ndWxhcikpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcInN1YnRpdGxlXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvbGxlY3Rpb24uZGVzY3JpcHRpb24pKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicC1jYXJkXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uY29sbGVjdGlvbi5zaG93X25hbWVfZmllbGRcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgZm9ybS1zaWRlYmFyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ4eGw6bXItMTBcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgbWItNiBmb3JtLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LTEvMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogX3ZtLmNvbGxlY3Rpb24ubmFtZV9sYWJlbCB8fCBcIk5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwibmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctMS8yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtc2x1Z1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbHVnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2x1Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbm9zcGFjZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJzbHVnXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwic2x1Z1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zbHVnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNsdWdcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnNsdWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnNlY3Rpb25zLmJvZHkubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBfdm0uY29sbGVjdGlvbi5zbHVnIH0sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWN0aW9ucy5ib2R5LCBmdW5jdGlvbihzZWN0aW9uLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBzZWN0aW9uLmhhbmRsZSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZvcm0tc2lkZWJhclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwieHhsOm1yLTEwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoX3ZtLl9zKHNlY3Rpb24ubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhzZWN0aW9uLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBmb3JtLWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHNlY3Rpb24uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkLmhhbmRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1fX2dyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKGZpZWxkLnR5cGUuaWQgKyBcIi1maWVsZHR5cGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZpZWxkOiBmaWVsZCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybVtmaWVsZC5oYW5kbGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBmaWVsZC5oYW5kbGUsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybVtmaWVsZC5oYW5kbGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggIT09IF92bS5zZWN0aW9ucy5ib2R5Lmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiaHJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiWW91IHNob3VsZCBjb25maWd1cmUgeW91ciBNYXRyaXggQ29sbGVjdGlvbiB3aXRoIHNvbWUgc2VjdGlvbnMgYW5kIGZpZWxkcyBmaXJzdCBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZW1vamlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImhhbmQtcGVhY2VcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpdGVtcy1jZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IFwiL21hdHJpY2VzL21hbmFnZS9cIiArIF92bS5jb2xsZWN0aW9uLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTIgdGV4dC1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiYXRvbS1hbHRcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBNYW5hZ2UgeW91ciBjb2xsZWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpZGUtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInAtY2FyZFwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkVuYWJsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRpc2FibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwic3RhdHVzXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmNvbGxlY3Rpb24uc2x1Z1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIG1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJlbnRyaWVzLmluZGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGNvbGxlY3Rpb246IF92bS5jb2xsZWN0aW9uLnNsdWcgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImJ1dHRvbi0tZGlzYWJsZWRcIjogIV92bS5mb3JtLmhhc0NoYW5nZXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhX3ZtLmZvcm0uaGFzQ2hhbmdlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNhdmVcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uc2VjdGlvbnMuc2lkZWJhciwgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgIFwicC1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7IGtleTogc2VjdGlvbi5oYW5kbGUsIHN0YXRpY0NsYXNzOiBcIm10LTZcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoX3ZtLl9zKHNlY3Rpb24ubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhzZWN0aW9uLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChzZWN0aW9uLmZpZWxkcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGZpZWxkLmhhbmRsZSwgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoZmllbGQudHlwZS5pZCArIFwiLWZpZWxkdHlwZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmaWVsZDogZmllbGQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybVtmaWVsZC5oYW5kbGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIGZpZWxkLmhhbmRsZSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1bZmllbGQuaGFuZGxlXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0ge31cbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKVxuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwXG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29yZChyZXNwb25zZSkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHJlc3BvbnNlLmVycm9yc1xuICAgIH1cblxuICAgIGNsZWFyKGZpZWxkKSB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVycm9ycyA9IHt9XG4gICAgfVxufSIsImltcG9ydCBGb3JtRGF0YSBmcm9tICdmb3JtLWRhdGEnXG5pbXBvcnQgRXJyb3JzIGZyb20gJy4vRXJyb3JzJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3Z1ZXgnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IEZvcm0gaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIHByZXZlbnROYXZpZ2F0aW9uID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JzXG4gICAgICAgIHRoaXMub3JpZ2luYWxEYXRhID0gZGF0YVxuICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSBmYWxzZVxuICAgICAgICB0aGlzLnByZXZlbnROYXZpZ2F0aW9uID0gcHJldmVudE5hdmlnYXRpb25cblxuICAgICAgICBsZXQgZm9ybSA9IHRoaXNcblxuICAgICAgICB0aGlzLl9fZGF0YSA9IHt9O1xuXG4gICAgICAgIGZvciAobGV0IGZpZWxkIGluIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXNbZmllbGRdID0gZGF0YVtmaWVsZF1cbiAgICAgICAgXG4gICAgICAgICAgICBmb3JtLl9fZGF0YVtmaWVsZF0gPSBmb3JtW2ZpZWxkXTtcbiAgICAgICAgICAgIChmdW5jdGlvbihmaWVsZF9uYW1lKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5IChmb3JtLCBmaWVsZF9uYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLl9fZGF0YVtmaWVsZF9uYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3X3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLl9fZGF0YVtmaWVsZF9uYW1lXSA9IG5ld192YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3JtLmhhc0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLm9uRmlyc3RDaGFuZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KShmaWVsZCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldChmaWVsZCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5kYXRhW2ZpZWxkXSA9IHZhbHVlXG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbZmllbGRdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIGZvcm0gZmllbGRzLlxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICBmb3IgKGxldCBmaWVsZCBpbiB0aGlzLm9yaWdpbmFsRGF0YSkge1xuICAgICAgICAgICAgdGhpc1tmaWVsZF0gPSB0aGlzLm9yaWdpbmFsRGF0YVtmaWVsZF1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKClcbiAgICB9XG5cbiAgICBkYXRhKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9XG5cbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdGhpcy5vcmlnaW5hbERhdGEpXG4gICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIC8qKlxuICAgICogU3VibWl0IGEgUE9TVCByZXF1ZXN0LlxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAqL1xuICAgIHBvc3QodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncG9zdCcsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgYSBQQVRDSCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHBhdGNoKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3BhdGNoJywgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBhIFBVVCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHB1dCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwdXQnLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGEgREVMRVRFIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgZGVsZXRlKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ2RlbGV0ZScsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZvcm0gYnkgdGhlIGdpdmVuIHJlcXVlc3QgdHlwZSBhbmQgdXJsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RUeXBlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHN1Ym1pdChyZXF1ZXN0VHlwZSwgdXJsKSB7ICAgICAgXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBheGlvc1tyZXF1ZXN0VHlwZV0odXJsLCB0aGlzLmRhdGEoKSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZm9ybS9zZXRQcmV2ZW50TmF2aWdhdGlvbicsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZhaWx1cmUoZXJyb3JzLnJlc3BvbnNlLmRhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9ycy5yZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBvbiBzdWNjZXNzIHByb21pc2UgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIC8vIFdlJ2xsIGxlYXZlIGl0IHVwIHRvIHRoZSBpbXBsZW1lbnRhdGlvbiBvblxuICAgICAgICAvLyBpZiB0aGV5IHdhbnQgdGhlIGZvcm0gcmVzZXQgYWZ0ZXJ3YXJkcy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gdGhpcy5yZXNldCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBvbiBmYWlsdXJlIHByb21pc2UgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXG4gICAgICovXG4gICAgb25GYWlsdXJlKGVycm9ycykge1xuICAgICAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyb3JzKVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBIYW5kbGUgdGhlIGZpcnN0IGlucHV0IGV2ZW50LiBQcmV2ZW50cyBuYXZpZ2F0aW5nXG4gICAgICogYXdheSBmcm9tIHRoZSBmb3JtIGlmIHRoZSBwcmV2ZW50TmF2aWdhdGlvblxuICAgICAqIHNldHRpbmcgaGFzIGJlZW4gZW5hYmxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25GaXJzdENoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWVcbiAgICAgICAgaWYgKHRoaXMucHJldmVudE5hdmlnYXRpb24pIHtcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZm9ybS9zZXRQcmV2ZW50TmF2aWdhdGlvbicsIHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgLyoqIFxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gcmVzZXQgdGhlIGZvcm0gdG8gYXBwZWFyIGFzIGlmXG4gICAgICogaXQgaGFkIG5vIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHJlc2V0Q2hhbmdlTGlzdGVuZXIoZGF0YSkge1xuICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5wcmV2ZW50TmF2aWdhdGlvbikge1xuICAgICAgICAgICAgc3RvcmUuY29tbWl0KCdmb3JtL3NldFByZXZlbnROYXZpZ2F0aW9uJywgZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMmNkZmQ4MyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvc2FuZGJveC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczMmNkZmQ4MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczMmNkZmQ4MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczMmNkZmQ4MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzJjZGZkODMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzJjZGZkODMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9Db2xsZWN0aW9ucy9FZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzJjZGZkODMmXCIiXSwic291cmNlUm9vdCI6IiJ9