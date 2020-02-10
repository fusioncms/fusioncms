(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Nodes/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Nodes/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/views/Nodes/SharedForm.vue");
//
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
        inner: this.node.name || 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      menu: {},
      node: {},
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: '',
        url: '',
        new_window: false,
        parent_id: 0,
        status: false
      }, true)
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    submit: function submit() {
      toast('Submitted'); // axios.post(`/api/fieldsets/${this.form.fieldset.id}/sections`, fieldsetForm).then((response) => {
      //     this.form.patch('/api/menus/' + this.id).then((response) => {
      //         toast('Menu successfully saved', 'success')
      //         this.$router.push('/menus')
      //     }).catch((response) => {
      //         toast(response.message, 'failed')
      //     })
      // })
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/menus/' + to.params.menu + '/nodes/' + to.params.node), axios.get('/api/menus/' + to.params.menu)]).then(axios.spread(function (node, menu) {
      next(function (vm) {
        vm.id = node.data.data.id;
        vm.menu = menu.data.data;
        vm.node = node.data.data;
        vm.form.name = node.data.data.name;
        vm.form.url = node.data.data.url;
        vm.form.new_window = node.data.data.new_window;
        vm.form.parent_id = node.data.data.parent_id;
        vm.form.status = node.data.data.status;
        vm.$emit('updateHead');
      });
    }));
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Nodes/SharedForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Nodes/SharedForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    node: {
      type: Object
    },
    menu: {
      type: Object
    },
    form: {
      type: Object,
      required: true
    },
    submit: {
      required: true
    }
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Nodes/Edit.vue?vue&type=template&id=92a97db2&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Nodes/Edit.vue?vue&type=template&id=92a97db2& ***!
  \********************************************************************************************************************************************************************************************************/
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
        [_c("app-title", { attrs: { icon: "anchor" } }, [_vm._v("Edit Node")])],
        1
      ),
      _vm._v(" "),
      _c("shared-form", {
        attrs: {
          form: _vm.form,
          submit: _vm.submit,
          menu: _vm.menu,
          node: _vm.node
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Nodes/SharedForm.vue?vue&type=template&id=5cc452b4&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Nodes/SharedForm.vue?vue&type=template&id=5cc452b4& ***!
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
  return _c("div", { staticClass: "row" }, [
    _c(
      "div",
      { staticClass: "content-container" },
      [
        _c("p-card", [
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
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "side-container" }, [
                  _c("div", { staticClass: "xxl:mr-10 xxl:mb-0 mb-6" }, [
                    _c("h3", [_vm._v("General")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-sm" }, [
                      _vm._v(
                        "What will this node be called and what will it link to?"
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "content-container" },
                  [
                    _c("p-input", {
                      attrs: {
                        name: "name",
                        label: "Name",
                        help: "What this node will be called.",
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
                    _c("p-input", {
                      attrs: {
                        name: "url",
                        label: "URL",
                        help: "The URL of the node.",
                        autocomplete: "off",
                        required: "",
                        "has-error": _vm.form.errors.has("url"),
                        "error-message": _vm.form.errors.get("url")
                      },
                      model: {
                        value: _vm.form.url,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "url", $$v)
                        },
                        expression: "form.url"
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
                      attrs: {
                        to: {
                          name: "menu.nodes",
                          params: { menu: _vm.menu.id }
                        }
                      }
                    },
                    [_vm._v("Go Back")]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "button button--primary",
                      class: { "button--disabled": !_vm.form.hasChanges },
                      attrs: { type: "submit", disabled: !_vm.form.hasChanges },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.submit($event)
                        }
                      }
                    },
                    [_vm._v("Save Node")]
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "side-container" },
      [
        _c("p-card", [
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
                }),
                _vm._v(" "),
                _c("p-select", {
                  attrs: {
                    name: "parent_id",
                    label: "Parent",
                    help: "Should this node belong to another?",
                    options: [
                      {
                        label: "Node 1",
                        value: 1
                      }
                    ],
                    "has-error": _vm.form.errors.has("parent_id"),
                    "error-message": _vm.form.errors.get("parent_id")
                  },
                  model: {
                    value: _vm.form.parent_id,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "parent_id", $$v)
                    },
                    expression: "form.parent_id"
                  }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _vm.node
          ? _c("p-card", { staticClass: "text-sm mt-6" }, [
              _c("dl", { staticClass: "flex flex-wrap" }, [
                _c("dt", { staticClass: "w-1/3" }, [_vm._v("Status")]),
                _vm._v(" "),
                _c(
                  "dd",
                  { staticClass: "w-2/3" },
                  [
                    _c("fa-icon", {
                      staticClass: "fa-fw text-xs",
                      class: {
                        "text-success-500": _vm.node.status,
                        "text-danger-500": !_vm.node.status
                      },
                      attrs: { icon: ["fas", "circle"] }
                    }),
                    _vm._v(
                      " " + _vm._s(_vm.node.status ? "Enabled" : "Disabled")
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("dt", { staticClass: "w-1/3" }, [_vm._v("Created At")]),
                _vm._v(" "),
                _c("dd", { staticClass: "w-2/3" }, [
                  _vm._v(
                    _vm._s(
                      _vm
                        .$moment(_vm.node.created_at)
                        .format("Y-MM-DD, hh:mm a")
                    )
                  )
                ]),
                _vm._v(" "),
                _c("dt", { staticClass: "w-1/3" }, [_vm._v("Updated At")]),
                _vm._v(" "),
                _c("dd", { staticClass: "w-2/3" }, [
                  _vm._v(
                    _vm._s(
                      _vm
                        .$moment(_vm.node.updated_at)
                        .format("Y-MM-DD, hh:mm a")
                    )
                  )
                ])
              ])
            ])
          : _vm._e()
      ],
      1
    )
  ])
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

/***/ "./resources/js/views/Nodes/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Nodes/Edit.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_92a97db2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=92a97db2& */ "./resources/js/views/Nodes/Edit.vue?vue&type=template&id=92a97db2&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Nodes/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_92a97db2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_92a97db2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Nodes/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Nodes/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Nodes/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Nodes/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Nodes/Edit.vue?vue&type=template&id=92a97db2&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Nodes/Edit.vue?vue&type=template&id=92a97db2& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_92a97db2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=92a97db2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Nodes/Edit.vue?vue&type=template&id=92a97db2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_92a97db2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_92a97db2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Nodes/SharedForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Nodes/SharedForm.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedForm_vue_vue_type_template_id_5cc452b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=template&id=5cc452b4& */ "./resources/js/views/Nodes/SharedForm.vue?vue&type=template&id=5cc452b4&");
/* harmony import */ var _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=script&lang=js& */ "./resources/js/views/Nodes/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedForm_vue_vue_type_template_id_5cc452b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedForm_vue_vue_type_template_id_5cc452b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Nodes/SharedForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Nodes/SharedForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Nodes/SharedForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Nodes/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Nodes/SharedForm.vue?vue&type=template&id=5cc452b4&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Nodes/SharedForm.vue?vue&type=template&id=5cc452b4& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_5cc452b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=template&id=5cc452b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Nodes/SharedForm.vue?vue&type=template&id=5cc452b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_5cc452b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_5cc452b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL05vZGVzL0VkaXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvdmlld3MvTm9kZXMvU2hhcmVkRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Zvcm0tZGF0YS9saWIvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTm9kZXMvRWRpdC52dWU/NzVmNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTm9kZXMvU2hhcmVkRm9ybS52dWU/ZmM0ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZm9ybXMvRXJyb3JzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mb3Jtcy9Gb3JtLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Ob2Rlcy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTm9kZXMvRWRpdC52dWU/ZGRmZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTm9kZXMvRWRpdC52dWU/MWVlOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTm9kZXMvU2hhcmVkRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL05vZGVzL1NoYXJlZEZvcm0udnVlPzZhM2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL05vZGVzL1NoYXJlZEZvcm0udnVlPzhkYTYiXSwibmFtZXMiOlsiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJyZXNwb25zZSIsIkZvcm0iLCJkYXRhIiwicHJldmVudE5hdmlnYXRpb24iLCJvcmlnaW5hbERhdGEiLCJoYXNDaGFuZ2VzIiwiZm9ybSIsIl9fZGF0YSIsImZpZWxkX25hbWUiLCJkZWZpbmVQcm9wZXJ0eSIsImdldCIsInNldCIsIm5ld192YWx1ZSIsIm9uRmlyc3RDaGFuZ2UiLCJ2YWx1ZSIsImNsZWFyIiwicHJvcGVydHkiLCJ1cmwiLCJzdWJtaXQiLCJyZXF1ZXN0VHlwZSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJ0aGVuIiwib25TdWNjZXNzIiwic3RvcmUiLCJjb21taXQiLCJvbkZhaWx1cmUiLCJyZWNvcmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFMQSxHQURBO0FBU0EsTUFUQSxrQkFTQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLGNBRkE7QUFHQTtBQUNBLGdCQURBO0FBRUEsZUFGQTtBQUdBLHlCQUhBO0FBSUEsb0JBSkE7QUFLQTtBQUxBLFNBTUEsSUFOQTtBQUhBO0FBV0EsR0FyQkE7QUF1QkE7QUFDQTtBQURBLEdBdkJBO0FBMkJBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBLHlCQURBLENBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsR0EzQkE7QUEwQ0Esa0JBMUNBLDRCQTBDQSxFQTFDQSxFQTBDQSxJQTFDQSxFQTBDQSxJQTFDQSxFQTBDQTtBQUNBLGVBQ0Esc0VBREEsRUFFQSx5Q0FGQSxHQUdBLElBSEEsQ0FHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsT0FaQTtBQWFBLEtBZEEsQ0FIQTtBQWtCQTtBQTdEQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN3RkE7QUFDQTtBQUNBO0FBQ0E7QUFEQSxLQURBO0FBS0E7QUFDQTtBQURBLEtBTEE7QUFTQTtBQUNBLGtCQURB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LGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWdNLENBQWdCLHNQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvMTkuanM/aWQ9NjhiMzM4ODllNjZiYjE3MTM3NDUiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG5cdFx0XHQ8YXBwLXRpdGxlIGljb249XCJhbmNob3JcIj5FZGl0IE5vZGU8L2FwcC10aXRsZT5cblx0XHQ8L3BvcnRhbD5cblxuICAgICAgICA8c2hhcmVkLWZvcm0gOmZvcm09XCJmb3JtXCIgOnN1Ym1pdD1cInN1Ym1pdFwiIDptZW51PVwibWVudVwiIDpub2RlPVwibm9kZVwiPjwvc2hhcmVkLWZvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nXG4gICAgaW1wb3J0IFNoYXJlZEZvcm0gZnJvbSAnLi9TaGFyZWRGb3JtJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogdGhpcy5ub2RlLm5hbWUgfHwgJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1lbnU6IHt9LFxuICAgICAgICAgICAgICAgIG5vZGU6IHt9LFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgICAgIG5ld193aW5kb3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRfaWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnc2hhcmVkLWZvcm0nOiBTaGFyZWRGb3JtXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRvYXN0KCdTdWJtaXR0ZWQnKVxuICAgICAgICAgICAgICAgIC8vIGF4aW9zLnBvc3QoYC9hcGkvZmllbGRzZXRzLyR7dGhpcy5mb3JtLmZpZWxkc2V0LmlkfS9zZWN0aW9uc2AsIGZpZWxkc2V0Rm9ybSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5mb3JtLnBhdGNoKCcvYXBpL21lbnVzLycgKyB0aGlzLmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdG9hc3QoJ01lbnUgc3VjY2Vzc2Z1bGx5IHNhdmVkJywgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL21lbnVzJylcbiAgICAgICAgICAgICAgICAvLyAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0b2FzdChyZXNwb25zZS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICAvLyAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9tZW51cy8nICsgdG8ucGFyYW1zLm1lbnUgKyAnL25vZGVzLycgKyB0by5wYXJhbXMubm9kZSksXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL21lbnVzLycgKyB0by5wYXJhbXMubWVudSksXG4gICAgICAgICAgICBdKS50aGVuKGF4aW9zLnNwcmVhZChmdW5jdGlvbiAobm9kZSwgbWVudSkge1xuICAgICAgICAgICAgICAgIG5leHQoZnVuY3Rpb24odm0pIHtcbiAgICAgICAgICAgICAgICAgICAgdm0uaWQgICA9IG5vZGUuZGF0YS5kYXRhLmlkXG4gICAgICAgICAgICAgICAgICAgIHZtLm1lbnUgPSBtZW51LmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICB2bS5ub2RlID0gbm9kZS5kYXRhLmRhdGFcblxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLm5hbWUgICAgICAgPSBub2RlLmRhdGEuZGF0YS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0udXJsICAgICAgICA9IG5vZGUuZGF0YS5kYXRhLnVybFxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLm5ld193aW5kb3cgPSBub2RlLmRhdGEuZGF0YS5uZXdfd2luZG93XG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ucGFyZW50X2lkICA9IG5vZGUuZGF0YS5kYXRhLnBhcmVudF9pZFxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLnN0YXR1cyAgICAgPSBub2RlLmRhdGEuZGF0YS5zdGF0dXNcblxuICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHAtY2FyZD5cbiAgICAgICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInh4bDptci0xMCB4eGw6bWItMCBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5HZW5lcmFsPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtXCI+V2hhdCB3aWxsIHRoaXMgbm9kZSBiZSBjYWxsZWQgYW5kIHdoYXQgd2lsbCBpdCBsaW5rIHRvPzwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IHRoaXMgbm9kZSB3aWxsIGJlIGNhbGxlZC5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ25hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXJsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJVUkxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiVGhlIFVSTCBvZiB0aGUgbm9kZS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCd1cmwnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCd1cmwnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnVybFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ21lbnUubm9kZXMnLCBwYXJhbXM6IHttZW51OiBtZW51LmlkfSB9XCIgY2xhc3M9XCJidXR0b24gbXItM1wiPkdvIEJhY2s8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgQGNsaWNrLnByZXZlbnQ9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIiA6Y2xhc3M9XCJ7J2J1dHRvbi0tZGlzYWJsZWQnOiAhZm9ybS5oYXNDaGFuZ2VzfVwiIDpkaXNhYmxlZD1cIiFmb3JtLmhhc0NoYW5nZXNcIj5TYXZlIE5vZGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wb3J0YWw+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9wLWNhcmQ+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHAtY2FyZD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdFbmFibGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdEaXNhYmxlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnN0YXR1c1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXNlbGVjdD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhcmVudF9pZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJQYXJlbnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJTaG91bGQgdGhpcyBub2RlIGJlbG9uZyB0byBhbm90aGVyP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdOb2RlIDEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3BhcmVudF9pZCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgncGFyZW50X2lkJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnBhcmVudF9pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3AtY2FyZD5cblxuICAgICAgICAgICAgPHAtY2FyZCBjbGFzcz1cInRleHQtc20gbXQtNlwiIHYtaWY9XCJub2RlXCI+XG4gICAgICAgICAgICAgICAgPGRsIGNsYXNzPVwiZmxleCBmbGV4LXdyYXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzPVwidy0xLzNcIj5TdGF0dXM8L2R0PlxuICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3M9XCJ3LTIvM1wiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY2lyY2xlJ11cIiBjbGFzcz1cImZhLWZ3IHRleHQteHNcIiA6Y2xhc3M9XCJ7J3RleHQtc3VjY2Vzcy01MDAnOiBub2RlLnN0YXR1cywgJ3RleHQtZGFuZ2VyLTUwMCc6ICEgbm9kZS5zdGF0dXN9XCI+PC9mYS1pY29uPiB7eyBub2RlLnN0YXR1cyA/ICdFbmFibGVkJyA6ICdEaXNhYmxlZCcgfX08L2RkPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzcz1cInctMS8zXCI+Q3JlYXRlZCBBdDwvZHQ+XG4gICAgICAgICAgICAgICAgICAgIDxkZCBjbGFzcz1cInctMi8zXCI+e3sgJG1vbWVudChub2RlLmNyZWF0ZWRfYXQpLmZvcm1hdCgnWS1NTS1ERCwgaGg6bW0gYScpIH19PC9kZD5cblxuICAgICAgICAgICAgICAgICAgICA8ZHQgY2xhc3M9XCJ3LTEvM1wiPlVwZGF0ZWQgQXQ8L2R0PlxuICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3M9XCJ3LTIvM1wiPnt7ICRtb21lbnQobm9kZS51cGRhdGVkX2F0KS5mb3JtYXQoJ1ktTU0tREQsIGhoOm1tIGEnKSB9fTwvZGQ+XG4gICAgICAgICAgICAgICAgPC9kbD5cbiAgICAgICAgICAgIDwvcC1jYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgbm9kZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1lbnU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3VibWl0OiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PiIsIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xubW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyA/IHNlbGYuRm9ybURhdGEgOiB3aW5kb3cuRm9ybURhdGE7XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwiYW5jaG9yXCIgfSB9LCBbX3ZtLl92KFwiRWRpdCBOb2RlXCIpXSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic2hhcmVkLWZvcm1cIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGZvcm06IF92bS5mb3JtLFxuICAgICAgICAgIHN1Ym1pdDogX3ZtLnN1Ym1pdCxcbiAgICAgICAgICBtZW51OiBfdm0ubWVudSxcbiAgICAgICAgICBub2RlOiBfdm0ubm9kZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwLWNhcmRcIiwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpZGUtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ4eGw6bXItMTAgeHhsOm1iLTAgbWItNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiR2VuZXJhbFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiV2hhdCB3aWxsIHRoaXMgbm9kZSBiZSBjYWxsZWQgYW5kIHdoYXQgd2lsbCBpdCBsaW5rIHRvP1wiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IFwiV2hhdCB0aGlzIG5vZGUgd2lsbCBiZSBjYWxsZWQuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInVybFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVVJMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwOiBcIlRoZSBVUkwgb2YgdGhlIG5vZGUuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJ1cmxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInVybFwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInVybFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIG1yLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtZW51Lm5vZGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBtZW51OiBfdm0ubWVudS5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJidXR0b24tLWRpc2FibGVkXCI6ICFfdm0uZm9ybS5oYXNDaGFuZ2VzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiwgZGlzYWJsZWQ6ICFfdm0uZm9ybS5oYXNDaGFuZ2VzIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlNhdmUgTm9kZVwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInNpZGUtY29udGFpbmVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwLWNhcmRcIiwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRW5hYmxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRpc2FibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzdGF0dXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXJlbnRfaWRcIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlbHA6IFwiU2hvdWxkIHRoaXMgbm9kZSBiZWxvbmcgdG8gYW5vdGhlcj9cIixcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5vZGUgMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJwYXJlbnRfaWRcIiksXG4gICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwicGFyZW50X2lkXCIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhcmVudF9pZCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInBhcmVudF9pZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXJlbnRfaWRcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLm5vZGVcbiAgICAgICAgICA/IF9jKFwicC1jYXJkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSBtdC02XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmbGV4LXdyYXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkdFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS8zXCIgfSwgW192bS5fdihcIlN0YXR1c1wiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRkXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctMi8zXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyB0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1zdWNjZXNzLTUwMFwiOiBfdm0ubm9kZS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtZGFuZ2VyLTUwMFwiOiAhX3ZtLm5vZGUuc3RhdHVzXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJjaXJjbGVcIl0gfVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICsgX3ZtLl9zKF92bS5ub2RlLnN0YXR1cyA/IFwiRW5hYmxlZFwiIDogXCJEaXNhYmxlZFwiKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImR0XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzNcIiB9LCBbX3ZtLl92KFwiQ3JlYXRlZCBBdFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkZFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMi8zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAuJG1vbWVudChfdm0ubm9kZS5jcmVhdGVkX2F0KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIlktTU0tREQsIGhoOm1tIGFcIilcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkdFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS8zXCIgfSwgW192bS5fdihcIlVwZGF0ZWQgQXRcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGRcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTIvM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgIF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgLiRtb21lbnQoX3ZtLm5vZGUudXBkYXRlZF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZLU1NLURELCBoaDptbSBhXCIpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHt9XG4gICAgfVxuXG4gICAgaGFzKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZClcbiAgICB9XG5cbiAgICBhbnkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMFxuICAgIH1cblxuICAgIGdldChmaWVsZCkge1xuICAgICAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNvcmQocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSByZXNwb25zZS5lcnJvcnNcbiAgICB9XG5cbiAgICBjbGVhcihmaWVsZCkge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tmaWVsZF1cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fVxuICAgIH1cbn0iLCJpbXBvcnQgRm9ybURhdGEgZnJvbSAnZm9ybS1kYXRhJ1xuaW1wb3J0IEVycm9ycyBmcm9tICcuL0Vycm9ycydcbmltcG9ydCBzdG9yZSBmcm9tICcuLi92dWV4J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBGb3JtIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBwcmV2ZW50TmF2aWdhdGlvbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gbmV3IEVycm9yc1xuICAgICAgICB0aGlzLm9yaWdpbmFsRGF0YSA9IGRhdGFcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gZmFsc2VcbiAgICAgICAgdGhpcy5wcmV2ZW50TmF2aWdhdGlvbiA9IHByZXZlbnROYXZpZ2F0aW9uXG5cbiAgICAgICAgbGV0IGZvcm0gPSB0aGlzXG5cbiAgICAgICAgdGhpcy5fX2RhdGEgPSB7fTtcblxuICAgICAgICBmb3IgKGxldCBmaWVsZCBpbiBkYXRhKSB7XG4gICAgICAgICAgICB0aGlzW2ZpZWxkXSA9IGRhdGFbZmllbGRdXG4gICAgICAgIFxuICAgICAgICAgICAgZm9ybS5fX2RhdGFbZmllbGRdID0gZm9ybVtmaWVsZF07XG4gICAgICAgICAgICAoZnVuY3Rpb24oZmllbGRfbmFtZSkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAoZm9ybSwgZmllbGRfbmFtZSwge1xuICAgICAgICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybS5fX2RhdGFbZmllbGRfbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKG5ld192YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5fX2RhdGFbZmllbGRfbmFtZV0gPSBuZXdfdmFsdWU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZm9ybS5oYXNDaGFuZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5vbkZpcnN0Q2hhbmdlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSkoZmllbGQpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICBzZXQoZmllbGQsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGF0YVtmaWVsZF0gPSB2YWx1ZVxuICAgIH1cblxuICAgIGdldChmaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2ZpZWxkXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBmb3JtIGZpZWxkcy5cbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gdGhpcy5vcmlnaW5hbERhdGEpIHtcbiAgICAgICAgICAgIHRoaXNbZmllbGRdID0gdGhpcy5vcmlnaW5hbERhdGFbZmllbGRdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVycm9ycy5jbGVhcigpXG4gICAgfVxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fVxuXG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHRoaXMub3JpZ2luYWxEYXRhKVxuICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFN1Ym1pdCBhIFBPU1QgcmVxdWVzdC5cbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgKi9cbiAgICBwb3N0KHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3Bvc3QnLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGEgUEFUQ0ggcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBwYXRjaCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwYXRjaCcsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgYSBQVVQgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBwdXQodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncHV0JywgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBhIERFTEVURSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIGRlbGV0ZSh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdkZWxldGUnLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmb3JtIGJ5IHRoZSBnaXZlbiByZXF1ZXN0IHR5cGUgYW5kIHVybC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0VHlwZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBzdWJtaXQocmVxdWVzdFR5cGUsIHVybCkgeyAgICAgIFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgYXhpb3NbcmVxdWVzdFR5cGVdKHVybCwgdGhpcy5kYXRhKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ2Zvcm0vc2V0UHJldmVudE5hdmlnYXRpb24nLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25GYWlsdXJlKGVycm9ycy5yZXNwb25zZS5kYXRhKVxuXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcnMucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgb24gc3VjY2VzcyBwcm9taXNlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAvLyBXZSdsbCBsZWF2ZSBpdCB1cCB0byB0aGUgaW1wbGVtZW50YXRpb24gb25cbiAgICAgICAgLy8gaWYgdGhleSB3YW50IHRoZSBmb3JtIHJlc2V0IGFmdGVyd2FyZHMuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRoaXMucmVzZXQoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgb24gZmFpbHVyZSBwcm9taXNlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGVycm9yc1xuICAgICAqL1xuICAgIG9uRmFpbHVyZShlcnJvcnMpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMucmVjb3JkKGVycm9ycylcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogSGFuZGxlIHRoZSBmaXJzdCBpbnB1dCBldmVudC4gUHJldmVudHMgbmF2aWdhdGluZ1xuICAgICAqIGF3YXkgZnJvbSB0aGUgZm9ybSBpZiB0aGUgcHJldmVudE5hdmlnYXRpb25cbiAgICAgKiBzZXR0aW5nIGhhcyBiZWVuIGVuYWJsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRmlyc3RDaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlXG4gICAgICAgIGlmICh0aGlzLnByZXZlbnROYXZpZ2F0aW9uKSB7XG4gICAgICAgICAgICBzdG9yZS5jb21taXQoJ2Zvcm0vc2V0UHJldmVudE5hdmlnYXRpb24nLCB0cnVlKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgIC8qKiBcbiAgICAgKiBIZWxwZXIgbWV0aG9kIHRvIHJlc2V0IHRoZSBmb3JtIHRvIGFwcGVhciBhcyBpZlxuICAgICAqIGl0IGhhZCBubyBjaGFuZ2VzLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICByZXNldENoYW5nZUxpc3RlbmVyKGRhdGEpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gZmFsc2VcbiAgICAgICAgaWYgKHRoaXMucHJldmVudE5hdmlnYXRpb24pIHtcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZm9ybS9zZXRQcmV2ZW50TmF2aWdhdGlvbicsIGZhbHNlKVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTJhOTdkYjImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL3NhbmRib3gvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTJhOTdkYjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTJhOTdkYjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTJhOTdkYjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkyYTk3ZGIyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzkyYTk3ZGIyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvTm9kZXMvRWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkyYTk3ZGIyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01Y2M0NTJiNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvc2FuZGJveC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1Y2M0NTJiNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1Y2M0NTJiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1Y2M0NTJiNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWNjNDUyYjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWNjNDUyYjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9Ob2Rlcy9TaGFyZWRGb3JtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hhcmVkRm9ybS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWNjNDUyYjQmXCIiXSwic291cmNlUm9vdCI6IiJ9