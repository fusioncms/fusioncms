(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Nodes/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Nodes/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    title: function title() {
      return {
        inner: this.menu.name || 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      menu: {},
      nodes: [],
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: '',
        url: '',
        new_window: false
      })
    };
  },
  methods: {
    submit: function submit(type) {
      var vm = this;
      this.form.post('/api/menus/' + this.menu.id + '/nodes').then(function (response) {
        vm.fetchNodes().then(function (response) {
          vm.reset();
          toast('Menu node successfully added', 'success');
        });
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    },
    fetchNodes: function fetchNodes() {
      var _this = this;

      return axios.get('/api/menus/' + this.menu.id).then(function (response) {
        _this.nodes = response.data.data.nodes;
      });
    },
    reset: function reset() {
      this.form.name = '';
      this.form.url = '';
      this.form.new_window = false;
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.get('/api/menus/' + to.params.menu).then(function (response) {
      next(function (vm) {
        vm.menu = response.data.data;
        vm.nodes = response.data.data.nodes;
        vm.$emit('updateHead');
      });
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this2 = this;

    axios.get('/api/menus/' + to.params.menu).then(function (response) {
      _this2.menu = response.data.data;
      _this2.nodes = response.data.data.nodes;

      _this2.$emit('updateHead');
    });
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Nodes/Index.vue?vue&type=template&id=60749d85&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Nodes/Index.vue?vue&type=template&id=60749d85& ***!
  \*********************************************************************************************************************************************************************************************************/
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
          _c("app-title", { attrs: { icon: "anchor" } }, [
            _vm._v(_vm._s(_vm.menu.name) + " Nodes")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "actions" } },
        [
          _c(
            "div",
            { staticClass: "inline-block mr-4" },
            [_c("p-button", [_vm._v("Uncheck All")])],
            1
          ),
          _vm._v(" "),
          _c("p-button", [_vm._v("Assign parent...")]),
          _vm._v(" "),
          _c("p-button", [_vm._v("Move before...")]),
          _vm._v(" "),
          _c("p-button", [_vm._v("Move after...")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "inline-block ml-4 mr-4" },
            [
              _c("p-button", { attrs: { theme: "danger" } }, [_vm._v("Delete")])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "inline-block" },
            [
              _c(
                "router-link",
                {
                  staticClass: "button mr-3",
                  attrs: { to: { name: "menus" } }
                },
                [_vm._v("Go back")]
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "content-container" },
          [
            _c(
              "p-card",
              _vm._l(_vm.nodes, function(node) {
                return _c(
                  "div",
                  {
                    key: node.id,
                    staticClass:
                      "w-full flex justify-between items-center border rounded px-3 py-2 mb-1"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "flex items-center" },
                      [
                        _c("p-checkbox", {
                          staticClass: "mr-6",
                          attrs: { name: "select" }
                        }),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "mr-6 text-gray-400" },
                          [
                            _c("fa-icon", {
                              staticClass: "fa-fw",
                              attrs: { icon: ["fas", "grip-lines"] }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          [
                            _c("fa-icon", {
                              staticClass: "fa-fw text-xs mr-3",
                              class: {
                                "text-success-500": node.status,
                                "text-danger-500": !node.status
                              },
                              attrs: { icon: ["fas", "circle"] }
                            }),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "menu.nodes.edit",
                                    params: {
                                      menu: node.menu_id,
                                      node: node.id
                                    }
                                  }
                                }
                              },
                              [_vm._v(_vm._s(node.name))]
                            ),
                            _vm._v(" "),
                            node.new_window
                              ? _c("fa-icon", {
                                  staticClass: "fa-fw text-gray-500 text-xs",
                                  attrs: { icon: ["fas", "external-link-alt"] }
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                staticClass:
                                  "ml-6 text-xs px-2 py-1 bg-gray-200 text-gray-600 leading-none"
                              },
                              [_vm._v("custom")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "text-right draggable__actions",
                        staticStyle: { "min-width": "150px" }
                      },
                      [
                        _c(
                          "p-dropdown",
                          { attrs: { right: "" } },
                          [
                            _c("fa-icon", { attrs: { icon: ["fas", "bars"] } }),
                            _vm._v(" "),
                            _c(
                              "template",
                              { slot: "options" },
                              [
                                _c(
                                  "p-dropdown-item",
                                  {
                                    attrs: {
                                      to: {
                                        name: "menu.nodes.edit",
                                        params: {
                                          menu: node.menu_id,
                                          node: node.id
                                        }
                                      }
                                    },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                      }
                                    }
                                  },
                                  [_vm._v("Edit")]
                                ),
                                _vm._v(" "),
                                _c("p-dropdown-item"),
                                _vm._v(" "),
                                _c("p-dropdown-item", [
                                  _vm._v("Assign parent...")
                                ]),
                                _vm._v(" "),
                                _c("p-dropdown-item", [
                                  _vm._v("Move before...")
                                ]),
                                _vm._v(" "),
                                _c("p-dropdown-item", [
                                  _vm._v("Move after...")
                                ]),
                                _vm._v(" "),
                                _c("p-dropdown-item"),
                                _vm._v(" "),
                                _c("p-dropdown-item", [_vm._v("Delete")])
                              ],
                              1
                            )
                          ],
                          2
                        )
                      ],
                      1
                    )
                  ]
                )
              }),
              0
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "side-container" },
          [
            _c("p-card", [
              _c("h3", [_vm._v("Custom URL")]),
              _vm._v(" "),
              _c(
                "div",
                [
                  _c("p-input", {
                    attrs: { name: "name", label: "Name" },
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
                    attrs: { name: "url", label: "URL" },
                    model: {
                      value: _vm.form.url,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "url", $$v)
                      },
                      expression: "form.url"
                    }
                  }),
                  _vm._v(" "),
                  _c("p-toggle", {
                    attrs: {
                      name: "new_window",
                      label: "Open link in new window",
                      help:
                        "Whether or not this link should open in a new window."
                    },
                    model: {
                      value: _vm.form.new_window,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "new_window", $$v)
                      },
                      expression: "form.new_window"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "p-button",
                    {
                      attrs: { theme: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.submit("custom")
                        }
                      }
                    },
                    [_vm._v("Add")]
                  )
                ],
                1
              )
            ])
          ],
          1
        )
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

/***/ "./resources/js/views/Nodes/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Nodes/Index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_60749d85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=60749d85& */ "./resources/js/views/Nodes/Index.vue?vue&type=template&id=60749d85&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/Nodes/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_60749d85___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_60749d85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Nodes/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Nodes/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Nodes/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Nodes/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Nodes/Index.vue?vue&type=template&id=60749d85&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Nodes/Index.vue?vue&type=template&id=60749d85& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_60749d85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=60749d85& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Nodes/Index.vue?vue&type=template&id=60749d85&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_60749d85___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_60749d85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL05vZGVzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybS1kYXRhL2xpYi9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Ob2Rlcy9JbmRleC52dWU/NGY0NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZm9ybXMvRXJyb3JzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mb3Jtcy9Gb3JtLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Ob2Rlcy9JbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL05vZGVzL0luZGV4LnZ1ZT83OGFmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Ob2Rlcy9JbmRleC52dWU/YmU5ZiJdLCJuYW1lcyI6WyJFcnJvcnMiLCJlcnJvcnMiLCJmaWVsZCIsImhhc093blByb3BlcnR5IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInJlc3BvbnNlIiwiRm9ybSIsImRhdGEiLCJwcmV2ZW50TmF2aWdhdGlvbiIsIm9yaWdpbmFsRGF0YSIsImhhc0NoYW5nZXMiLCJmb3JtIiwiX19kYXRhIiwiZmllbGRfbmFtZSIsImRlZmluZVByb3BlcnR5IiwiZ2V0Iiwic2V0IiwibmV3X3ZhbHVlIiwib25GaXJzdENoYW5nZSIsInZhbHVlIiwiY2xlYXIiLCJwcm9wZXJ0eSIsInVybCIsInN1Ym1pdCIsInJlcXVlc3RUeXBlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJheGlvcyIsInRoZW4iLCJvblN1Y2Nlc3MiLCJzdG9yZSIsImNvbW1pdCIsIm9uRmFpbHVyZSIsInJlY29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LENBQW1CbkMsTUFBbkI7QUFDSDtBQUVEOzs7Ozs7Ozs7O2tDQU9jUSxJLEVBQU07QUFDaEIsV0FBS0csVUFBTCxHQUFrQixJQUFsQjs7QUFDQSxVQUFJLEtBQUtGLGlCQUFULEVBQTRCO0FBQ3hCdUIscURBQUssQ0FBQ0MsTUFBTixDQUFhLDJCQUFiLEVBQTBDLElBQTFDO0FBQ0g7QUFDSjtBQUVBOzs7Ozs7Ozs7d0NBTW1CekIsSSxFQUFNO0FBQ3RCLFdBQUtHLFVBQUwsR0FBa0IsS0FBbEI7O0FBQ0EsVUFBSSxLQUFLRixpQkFBVCxFQUE0QjtBQUN4QnVCLHFEQUFLLENBQUNDLE1BQU4sQ0FBYSwyQkFBYixFQUEwQyxLQUExQztBQUNIO0FBQ0o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9LTDtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy8yNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxhcHAtdGl0bGUgaWNvbj1cImFuY2hvclwiPnt7IG1lbnUubmFtZSB9fSBOb2RlczwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubGluZS1ibG9jayBtci00XCI+XG4gICAgICAgICAgICAgICAgPHAtYnV0dG9uPlVuY2hlY2sgQWxsPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8cC1idXR0b24+QXNzaWduIHBhcmVudC4uLjwvcC1idXR0b24+XG4gICAgICAgICAgICA8cC1idXR0b24+TW92ZSBiZWZvcmUuLi48L3AtYnV0dG9uPlxuICAgICAgICAgICAgPHAtYnV0dG9uPk1vdmUgYWZ0ZXIuLi48L3AtYnV0dG9uPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5saW5lLWJsb2NrIG1sLTQgbXItNFwiPlxuICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB0aGVtZT1cImRhbmdlclwiPkRlbGV0ZTwvcC1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubGluZS1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdtZW51cycgfVwiIGNsYXNzPVwiYnV0dG9uIG1yLTNcIj5HbyBiYWNrPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cC1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBib3JkZXIgcm91bmRlZCBweC0zIHB5LTIgbWItMVwiIHYtZm9yPVwibm9kZSBpbiBub2Rlc1wiIDprZXk9XCJub2RlLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1jaGVja2JveCBuYW1lPVwic2VsZWN0XCIgY2xhc3M9XCJtci02XCI+PC9wLWNoZWNrYm94PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1yLTYgdGV4dC1ncmF5LTQwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2dyaXAtbGluZXMnXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IHRleHQteHMgbXItM1wiIDpjbGFzcz1cInsndGV4dC1zdWNjZXNzLTUwMCc6IG5vZGUuc3RhdHVzLCAndGV4dC1kYW5nZXItNTAwJzogISBub2RlLnN0YXR1c31cIiA6aWNvbj1cIlsnZmFzJywgJ2NpcmNsZSddXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnbWVudS5ub2Rlcy5lZGl0JywgcGFyYW1zOiB7bWVudTogbm9kZS5tZW51X2lkLCBub2RlOiBub2RlLmlkfSB9XCI+e3sgbm9kZS5uYW1lIH19PC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gdi1pZj1cIm5vZGUubmV3X3dpbmRvd1wiIGNsYXNzPVwiZmEtZncgdGV4dC1ncmF5LTUwMCB0ZXh0LXhzXCIgOmljb249XCJbJ2ZhcycsICdleHRlcm5hbC1saW5rLWFsdCddXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1sLTYgdGV4dC14cyBweC0yIHB5LTEgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTYwMCBsZWFkaW5nLW5vbmVcIj5jdXN0b208L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1pbi13aWR0aDogMTUwcHg7XCIgY2xhc3M9XCJ0ZXh0LXJpZ2h0IGRyYWdnYWJsZV9fYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duIHJpZ2h0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2JhcnMnXVwiPjwvZmEtaWNvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duLWl0ZW0gQGNsaWNrLnByZXZlbnQgOnRvPVwieyBuYW1lOiAnbWVudS5ub2Rlcy5lZGl0JywgcGFyYW1zOiB7bWVudTogbm9kZS5tZW51X2lkLCBub2RlOiBub2RlLmlkfSB9XCI+RWRpdDwvcC1kcm9wZG93bi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24taXRlbT48L3AtZHJvcGRvd24taXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duLWl0ZW0+QXNzaWduIHBhcmVudC4uLjwvcC1kcm9wZG93bi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24taXRlbT5Nb3ZlIGJlZm9yZS4uLjwvcC1kcm9wZG93bi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24taXRlbT5Nb3ZlIGFmdGVyLi4uPC9wLWRyb3Bkb3duLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1kcm9wZG93bi1pdGVtPjwvcC1kcm9wZG93bi1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24taXRlbT5EZWxldGU8L3AtZHJvcGRvd24taXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtZHJvcGRvd24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGF0YS10YWJsZT48L2RhdGEtdGFibGU+IC0tPlxuICAgICAgICAgICAgICAgIDwvcC1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxwLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5DdXN0b20gVVJMPC9oMz5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtaW5wdXQgbmFtZT1cIm5hbWVcIiBsYWJlbD1cIk5hbWVcIiB2LW1vZGVsPVwiZm9ybS5uYW1lXCI+PC9wLWlucHV0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dCBuYW1lPVwidXJsXCIgbGFiZWw9XCJVUkxcIiB2LW1vZGVsPVwiZm9ybS51cmxcIj48L3AtaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLXRvZ2dsZSBuYW1lPVwibmV3X3dpbmRvd1wiIHYtbW9kZWw9XCJmb3JtLm5ld193aW5kb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT3BlbiBsaW5rIGluIG5ldyB3aW5kb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXaGV0aGVyIG9yIG5vdCB0aGlzIGxpbmsgc2hvdWxkIG9wZW4gaW4gYSBuZXcgd2luZG93LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+PC9wLXRvZ2dsZT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHRoZW1lPVwicHJpbWFyeVwiIEBjbGljay5wcmV2ZW50PVwic3VibWl0KCdjdXN0b20nKVwiPkFkZDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcC1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogdGhpcy5tZW51Lm5hbWUgfHwgJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1lbnU6IHt9LFxuICAgICAgICAgICAgICAgIG5vZGVzOiBbXSxcbiAgICAgICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICAgICAgICBuZXdfd2luZG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQodHlwZSkge1xuICAgICAgICAgICAgICAgIGxldCB2bSA9IHRoaXNcblxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wb3N0KCcvYXBpL21lbnVzLycgKyB0aGlzLm1lbnUuaWQgKyAnL25vZGVzJykudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdm0uZmV0Y2hOb2RlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5yZXNldCgpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KCdNZW51IG5vZGUgc3VjY2Vzc2Z1bGx5IGFkZGVkJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZmV0Y2hOb2RlcygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXhpb3MuZ2V0KCcvYXBpL21lbnVzLycgKyB0aGlzLm1lbnUuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubm9kZXNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcmVzZXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLm5hbWUgPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS51cmwgID0gJydcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ubmV3X3dpbmRvdyA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL21lbnVzLycgKyB0by5wYXJhbXMubWVudSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBuZXh0KGZ1bmN0aW9uKHZtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLm1lbnUgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgdm0ubm9kZXMgPSByZXNwb25zZS5kYXRhLmRhdGEubm9kZXNcblxuICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVVcGRhdGUodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9tZW51cy8nICsgdG8ucGFyYW1zLm1lbnUpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZW51ID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5ub2Rlc1xuXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBuZXh0KClcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgPyBzZWxmLkZvcm1EYXRhIDogd2luZG93LkZvcm1EYXRhO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImFuY2hvclwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubWVudS5uYW1lKSArIFwiIE5vZGVzXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmxpbmUtYmxvY2sgbXItNFwiIH0sXG4gICAgICAgICAgICBbX2MoXCJwLWJ1dHRvblwiLCBbX3ZtLl92KFwiVW5jaGVjayBBbGxcIildKV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicC1idXR0b25cIiwgW192bS5fdihcIkFzc2lnbiBwYXJlbnQuLi5cIildKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicC1idXR0b25cIiwgW192bS5fdihcIk1vdmUgYmVmb3JlLi4uXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInAtYnV0dG9uXCIsIFtfdm0uX3YoXCJNb3ZlIGFmdGVyLi4uXCIpXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlubGluZS1ibG9jayBtbC00IG1yLTRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInAtYnV0dG9uXCIsIHsgYXR0cnM6IHsgdGhlbWU6IFwiZGFuZ2VyXCIgfSB9LCBbX3ZtLl92KFwiRGVsZXRlXCIpXSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaW5saW5lLWJsb2NrXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBtci0zXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcIm1lbnVzXCIgfSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR28gYmFja1wiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicC1jYXJkXCIsXG4gICAgICAgICAgICAgIF92bS5fbChfdm0ubm9kZXMsIGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBrZXk6IG5vZGUuaWQsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwidy1mdWxsIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBib3JkZXIgcm91bmRlZCBweC0zIHB5LTIgbWItMVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1jaGVja2JveFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJzZWxlY3RcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtci02IHRleHQtZ3JheS00MDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJncmlwLWxpbmVzXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IHRleHQteHMgbXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXN1Y2Nlc3MtNTAwXCI6IG5vZGUuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtZGFuZ2VyLTUwMFwiOiAhbm9kZS5zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJjaXJjbGVcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWVudS5ub2Rlcy5lZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudTogbm9kZS5tZW51X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlOiBub2RlLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3Mobm9kZS5uYW1lKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUubmV3X3dpbmRvd1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IHRleHQtZ3JheS01MDAgdGV4dC14c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImV4dGVybmFsLWxpbmstYWx0XCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1sLTYgdGV4dC14cyBweC0yIHB5LTEgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTYwMCBsZWFkaW5nLW5vbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjdXN0b21cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCBkcmFnZ2FibGVfX2FjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWluLXdpZHRoXCI6IFwiMTUwcHhcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWRyb3Bkb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcmlnaHQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiYmFyc1wiXSB9IH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNsb3Q6IFwib3B0aW9uc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1kcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1lbnUubm9kZXMuZWRpdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudTogbm9kZS5tZW51X2lkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZTogbm9kZS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRWRpdFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWRyb3Bkb3duLWl0ZW1cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1kcm9wZG93bi1pdGVtXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJBc3NpZ24gcGFyZW50Li4uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtZHJvcGRvd24taXRlbVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTW92ZSBiZWZvcmUuLi5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1kcm9wZG93bi1pdGVtXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJNb3ZlIGFmdGVyLi4uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtZHJvcGRvd24taXRlbVwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWRyb3Bkb3duLWl0ZW1cIiwgW192bS5fdihcIkRlbGV0ZVwiKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2lkZS1jb250YWluZXJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicC1jYXJkXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiQ3VzdG9tIFVSTFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwibmFtZVwiLCBsYWJlbDogXCJOYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ1cmxcIiwgbGFiZWw6IFwiVVJMXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udXJsLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInVybFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udXJsXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwLXRvZ2dsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuZXdfd2luZG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiT3BlbiBsaW5rIGluIG5ldyB3aW5kb3dcIixcbiAgICAgICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJXaGV0aGVyIG9yIG5vdCB0aGlzIGxpbmsgc2hvdWxkIG9wZW4gaW4gYSBuZXcgd2luZG93LlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5ld193aW5kb3csXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmV3X3dpbmRvd1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmV3X3dpbmRvd1wiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdChcImN1c3RvbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkFkZFwiKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0ge31cbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKVxuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwXG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29yZChyZXNwb25zZSkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHJlc3BvbnNlLmVycm9yc1xuICAgIH1cblxuICAgIGNsZWFyKGZpZWxkKSB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVycm9ycyA9IHt9XG4gICAgfVxufSIsImltcG9ydCBGb3JtRGF0YSBmcm9tICdmb3JtLWRhdGEnXG5pbXBvcnQgRXJyb3JzIGZyb20gJy4vRXJyb3JzJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3Z1ZXgnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IEZvcm0gaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIHByZXZlbnROYXZpZ2F0aW9uID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JzXG4gICAgICAgIHRoaXMub3JpZ2luYWxEYXRhID0gZGF0YVxuICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSBmYWxzZVxuICAgICAgICB0aGlzLnByZXZlbnROYXZpZ2F0aW9uID0gcHJldmVudE5hdmlnYXRpb25cblxuICAgICAgICBsZXQgZm9ybSA9IHRoaXNcblxuICAgICAgICB0aGlzLl9fZGF0YSA9IHt9O1xuXG4gICAgICAgIGZvciAobGV0IGZpZWxkIGluIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXNbZmllbGRdID0gZGF0YVtmaWVsZF1cbiAgICAgICAgXG4gICAgICAgICAgICBmb3JtLl9fZGF0YVtmaWVsZF0gPSBmb3JtW2ZpZWxkXTtcbiAgICAgICAgICAgIChmdW5jdGlvbihmaWVsZF9uYW1lKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5IChmb3JtLCBmaWVsZF9uYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLl9fZGF0YVtmaWVsZF9uYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAobmV3X3ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLl9fZGF0YVtmaWVsZF9uYW1lXSA9IG5ld192YWx1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFmb3JtLmhhc0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLm9uRmlyc3RDaGFuZ2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KShmaWVsZCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNldChmaWVsZCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5kYXRhW2ZpZWxkXSA9IHZhbHVlXG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbZmllbGRdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIGZvcm0gZmllbGRzLlxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICBmb3IgKGxldCBmaWVsZCBpbiB0aGlzLm9yaWdpbmFsRGF0YSkge1xuICAgICAgICAgICAgdGhpc1tmaWVsZF0gPSB0aGlzLm9yaWdpbmFsRGF0YVtmaWVsZF1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKClcbiAgICB9XG5cbiAgICBkYXRhKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9XG5cbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdGhpcy5vcmlnaW5hbERhdGEpXG4gICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIC8qKlxuICAgICogU3VibWl0IGEgUE9TVCByZXF1ZXN0LlxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAqL1xuICAgIHBvc3QodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncG9zdCcsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgYSBQQVRDSCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHBhdGNoKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3BhdGNoJywgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBhIFBVVCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHB1dCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwdXQnLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGEgREVMRVRFIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgZGVsZXRlKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ2RlbGV0ZScsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZvcm0gYnkgdGhlIGdpdmVuIHJlcXVlc3QgdHlwZSBhbmQgdXJsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RUeXBlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHN1Ym1pdChyZXF1ZXN0VHlwZSwgdXJsKSB7ICAgICAgXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBheGlvc1tyZXF1ZXN0VHlwZV0odXJsLCB0aGlzLmRhdGEoKSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZm9ybS9zZXRQcmV2ZW50TmF2aWdhdGlvbicsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZhaWx1cmUoZXJyb3JzLnJlc3BvbnNlLmRhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9ycy5yZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBvbiBzdWNjZXNzIHByb21pc2UgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIC8vIFdlJ2xsIGxlYXZlIGl0IHVwIHRvIHRoZSBpbXBsZW1lbnRhdGlvbiBvblxuICAgICAgICAvLyBpZiB0aGV5IHdhbnQgdGhlIGZvcm0gcmVzZXQgYWZ0ZXJ3YXJkcy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gdGhpcy5yZXNldCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBvbiBmYWlsdXJlIHByb21pc2UgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXG4gICAgICovXG4gICAgb25GYWlsdXJlKGVycm9ycykge1xuICAgICAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyb3JzKVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBIYW5kbGUgdGhlIGZpcnN0IGlucHV0IGV2ZW50LiBQcmV2ZW50cyBuYXZpZ2F0aW5nXG4gICAgICogYXdheSBmcm9tIHRoZSBmb3JtIGlmIHRoZSBwcmV2ZW50TmF2aWdhdGlvblxuICAgICAqIHNldHRpbmcgaGFzIGJlZW4gZW5hYmxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25GaXJzdENoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWVcbiAgICAgICAgaWYgKHRoaXMucHJldmVudE5hdmlnYXRpb24pIHtcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZm9ybS9zZXRQcmV2ZW50TmF2aWdhdGlvbicsIHRydWUpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAgLyoqIFxuICAgICAqIEhlbHBlciBtZXRob2QgdG8gcmVzZXQgdGhlIGZvcm0gdG8gYXBwZWFyIGFzIGlmXG4gICAgICogaXQgaGFkIG5vIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIHJlc2V0Q2hhbmdlTGlzdGVuZXIoZGF0YSkge1xuICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSBmYWxzZVxuICAgICAgICBpZiAodGhpcy5wcmV2ZW50TmF2aWdhdGlvbikge1xuICAgICAgICAgICAgc3RvcmUuY29tbWl0KCdmb3JtL3NldFByZXZlbnROYXZpZ2F0aW9uJywgZmFsc2UpXG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjA3NDlkODUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvc2FuZGJveC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MDc0OWQ4NScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MDc0OWQ4NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MDc0OWQ4NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwNzQ5ZDg1JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYwNzQ5ZDg1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvTm9kZXMvSW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDc0OWQ4NSZcIiJdLCJzb3VyY2VSb290IjoiIn0=