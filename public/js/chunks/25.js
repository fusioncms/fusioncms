(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

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
      nodes: [],
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
      var _this = this;

      this.form.patch('/api/menus/' + this.menu.id + '/nodes/' + this.node.id).then(function (response) {
        toast('Node saved successfully', 'success');

        _this.$router.push('/menus/' + _this.menu.id + '/nodes');
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/menus/' + to.params.menu + '/nodes/' + to.params.node), axios.get('/api/menus/' + to.params.menu)]).then(axios.spread(function (node, menu) {
      next(function (vm) {
        vm.id = node.data.data.id;
        vm.menu = menu.data.data;
        vm.node = node.data.data;
        var fields = {
          name: node.data.data.name,
          url: node.data.data.url,
          new_window: node.data.data.new_window,
          parent_id: node.data.data.parent_id,
          status: node.data.data.status
        };

        if (vm.menu.fieldset) {
          _.forEach(vm.menu.fieldset.sections, function (section) {
            _.forEach(section.fields, function (field) {
              Vue.set(fields, field.handle, vm.node[field.handle]);
            });
          });
        }

        vm.form = new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"](fields, true);
        vm.nodes = _.map(menu.data.data.nodes, function (parent) {
          return {
            'label': parent.name,
            'value': parent.id
          };
        });
        vm.nodes.unshift({
          'label': 'None',
          'value': 0
        });
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    nodes: {
      type: Array,
      required: true
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
  },
  computed: {
    sections: function sections() {
      var body = [];
      var sidebar = [];

      if (this.menu.fieldset) {
        body = _.filter(this.menu.fieldset.sections, function (section) {
          return section.placement == 'body';
        });
        sidebar = _.filter(this.menu.fieldset.sections, function (section) {
          return section.placement == 'sidebar';
        });
      }

      return {
        body: body,
        sidebar: sidebar
      };
    }
  }
});

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
          node: _vm.node,
          nodes: _vm.nodes
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
              _c("div", { staticClass: "row mb-6" }, [
                _c("div", { staticClass: "side-container" }, [
                  _c("div", { staticClass: "xxl:mr-10 xxl:mb-0 mb-6" })
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
              _vm.sections.body.length > 0
                ? _c(
                    "div",
                    { key: _vm.menu.slug },
                    _vm._l(_vm.sections.body, function(section, index) {
                      return _c("div", { key: section.handle }, [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "side-container" }, [
                            _c(
                              "div",
                              { staticClass: "xxl:mr-10 xxl:mb-0 mb-6" },
                              [
                                _c("h3", [_vm._v(_vm._s(section.name))]),
                                _vm._v(" "),
                                _c("p", { staticClass: "text-sm" }, [
                                  _vm._v(_vm._s(section.description))
                                ])
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "content-container" },
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
                : _vm._e(),
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
                    name: "new_window",
                    label: "Open link where",
                    help: "Determine where the link should open.",
                    options: [
                      {
                        label: "New Window",
                        value: 1
                      },
                      {
                        label: "Same Window",
                        value: 0
                      }
                    ]
                  },
                  model: {
                    value: _vm.form.new_window,
                    callback: function($$v) {
                      _vm.$set(_vm.form, "new_window", $$v)
                    },
                    expression: "form.new_window"
                  }
                })
              ],
              1
            )
          ])
        ]),
        _vm._v(" "),
        _vm._l(_vm.sections.sidebar, function(section) {
          return _c("p-card", { key: section.handle, staticClass: "mt-6" }, [
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
          ])
        }),
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
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL05vZGVzL0VkaXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvdmlld3MvTm9kZXMvU2hhcmVkRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL05vZGVzL0VkaXQudnVlPzc1ZjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL05vZGVzL1NoYXJlZEZvcm0udnVlP2ZjNGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL05vZGVzL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Ob2Rlcy9FZGl0LnZ1ZT9kZGZmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Ob2Rlcy9FZGl0LnZ1ZT8xZWU5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Ob2Rlcy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTm9kZXMvU2hhcmVkRm9ybS52dWU/NmEzZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTm9kZXMvU2hhcmVkRm9ybS52dWU/OGRhNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFDQTtBQUNBLGNBREE7QUFFQSxjQUZBO0FBR0EsZUFIQTtBQUlBO0FBQ0EsZ0JBREE7QUFFQSxlQUZBO0FBR0EseUJBSEE7QUFJQSxvQkFKQTtBQUtBO0FBTEEsU0FNQSxJQU5BO0FBSkE7QUFZQSxHQXRCQTtBQXdCQTtBQUNBO0FBREEsR0F4QkE7QUE0QkE7QUFDQSxVQURBLG9CQUNBO0FBQUE7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BSkEsV0FJQTtB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O0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUY7QUFDM0I7QUFDTDs7O0FBR3pEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxxRkFBTTtBQUNSLEVBQUUsOEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWdNLENBQWdCLHNQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvMjUuanM/aWQ9ODUyMzc0Mjg2YzZlMWI5ZjE0OWIiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG5cdFx0XHQ8YXBwLXRpdGxlIGljb249XCJhbmNob3JcIj5FZGl0IE5vZGU8L2FwcC10aXRsZT5cblx0XHQ8L3BvcnRhbD5cblxuICAgICAgICA8c2hhcmVkLWZvcm0gOmZvcm09XCJmb3JtXCIgOnN1Ym1pdD1cInN1Ym1pdFwiIDptZW51PVwibWVudVwiIDpub2RlPVwibm9kZVwiIDpub2Rlcz1cIm5vZGVzXCI+PC9zaGFyZWQtZm9ybT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vZm9ybXMvRm9ybSdcbiAgICBpbXBvcnQgU2hhcmVkRm9ybSBmcm9tICcuL1NoYXJlZEZvcm0nXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiB0aGlzLm5vZGUubmFtZSB8fCAnTG9hZGluZy4uLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWVudToge30sXG4gICAgICAgICAgICAgICAgbm9kZToge30sXG4gICAgICAgICAgICAgICAgbm9kZXM6IFtdLFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHVybDogJycsXG4gICAgICAgICAgICAgICAgICAgIG5ld193aW5kb3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRfaWQ6IDAsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICAnc2hhcmVkLWZvcm0nOiBTaGFyZWRGb3JtXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wYXRjaCgnL2FwaS9tZW51cy8nICsgdGhpcy5tZW51LmlkICsgJy9ub2Rlcy8nICsgdGhpcy5ub2RlLmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnTm9kZSBzYXZlZCBzdWNjZXNzZnVsbHknLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9tZW51cy8nICsgdGhpcy5tZW51LmlkICsgJy9ub2RlcycpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KHJlc3BvbnNlLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2ZhaWxlZCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgYXhpb3MuYWxsKFtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvbWVudXMvJyArIHRvLnBhcmFtcy5tZW51ICsgJy9ub2Rlcy8nICsgdG8ucGFyYW1zLm5vZGUpLFxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9tZW51cy8nICsgdG8ucGFyYW1zLm1lbnUpLFxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKG5vZGUsIG1lbnUpIHtcbiAgICAgICAgICAgICAgICBuZXh0KGZ1bmN0aW9uKHZtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLmlkICAgPSBub2RlLmRhdGEuZGF0YS5pZFxuICAgICAgICAgICAgICAgICAgICB2bS5tZW51ID0gbWVudS5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgdm0ubm9kZSA9IG5vZGUuZGF0YS5kYXRhXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpZWxkcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IG5vZGUuZGF0YS5kYXRhLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IG5vZGUuZGF0YS5kYXRhLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld193aW5kb3c6IG5vZGUuZGF0YS5kYXRhLm5ld193aW5kb3csXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRfaWQ6IG5vZGUuZGF0YS5kYXRhLnBhcmVudF9pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogbm9kZS5kYXRhLmRhdGEuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLm1lbnUuZmllbGRzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF8uZm9yRWFjaCh2bS5tZW51LmZpZWxkc2V0LnNlY3Rpb25zLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHNlY3Rpb24uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBWdWUuc2V0KGZpZWxkcywgZmllbGQuaGFuZGxlLCB2bS5ub2RlW2ZpZWxkLmhhbmRsZV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtID0gbmV3IEZvcm0oZmllbGRzLCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgIHZtLm5vZGVzID0gXy5tYXAobWVudS5kYXRhLmRhdGEubm9kZXMsIGZ1bmN0aW9uKHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiBwYXJlbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBwYXJlbnQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB2bS5ub2Rlcy51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdOb25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IDBcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPHAtY2FyZD5cbiAgICAgICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieHhsOm1yLTEwIHh4bDptYi0wIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSAgLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiV2hhdCB0aGlzIG5vZGUgd2lsbCBiZSBjYWxsZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ25hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWlucHV0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVVJMXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIlRoZSBVUkwgb2YgdGhlIG5vZGUuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygndXJsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgndXJsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS51cmxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwic2VjdGlvbnMuYm9keS5sZW5ndGggPiAwXCIgOmtleT1cIm1lbnUuc2x1Z1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBMb29wIHRocm91Z2ggZWFjaCBzZWN0aW9uIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihzZWN0aW9uLCBpbmRleCkgaW4gc2VjdGlvbnMuYm9keVwiIDprZXk9XCJzZWN0aW9uLmhhbmRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieHhsOm1yLTEwIHh4bDptYi0wIG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+e3sgc2VjdGlvbi5uYW1lIH19PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc21cIj57eyBzZWN0aW9uLmRlc2NyaXB0aW9uIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBMb29wIHRocm91Z2ggZWFjaCBzZWN0aW9uIGZpZWxkIC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cImZpZWxkIGluIHNlY3Rpb24uZmllbGRzXCIgOmtleT1cImZpZWxkLmhhbmRsZVwiIGNsYXNzPVwiZm9ybV9fZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDppcz1cImZpZWxkLnR5cGUuaWQgKyAnLWZpZWxkdHlwZSdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtW2ZpZWxkLmhhbmRsZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociB2LWlmPVwiaW5kZXggIT09IHNlY3Rpb25zLmJvZHkubGVuZ3RoIC0gMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnbWVudS5ub2RlcycsIHBhcmFtczoge21lbnU6IG1lbnUuaWR9IH1cIiBjbGFzcz1cImJ1dHRvbiBtci0zXCI+R28gQmFjazwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiIDpjbGFzcz1cInsnYnV0dG9uLS1kaXNhYmxlZCc6ICFmb3JtLmhhc0NoYW5nZXN9XCIgOmRpc2FibGVkPVwiIWZvcm0uaGFzQ2hhbmdlc1wiPlNhdmUgTm9kZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3BvcnRhbD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L3AtY2FyZD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8cC1jYXJkPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIltcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogJ0VuYWJsZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogJ0Rpc2FibGVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uc3RhdHVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Atc2VsZWN0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxwLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXJlbnRfaWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFyZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiU2hvdWxkIHRoaXMgbm9kZSBiZWxvbmcgdG8gYW5vdGhlcj9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwibm9kZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3BhcmVudF9pZCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgncGFyZW50X2lkJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLnBhcmVudF9pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXNlbGVjdD4gLS0+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLXNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuZXdfd2luZG93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk9wZW4gbGluayB3aGVyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkRldGVybWluZSB3aGVyZSB0aGUgbGluayBzaG91bGQgb3Blbi5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnTmV3IFdpbmRvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnU2FtZSBXaW5kb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5uZXdfd2luZG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Atc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvcC1jYXJkPlxuXG4gICAgICAgICAgICA8cC1jYXJkIHYtZm9yPVwiKHNlY3Rpb24pIGluIHNlY3Rpb25zLnNpZGViYXJcIiA6a2V5PVwic2VjdGlvbi5oYW5kbGVcIiBjbGFzcz1cIm10LTZcIj5cbiAgICAgICAgICAgICAgICA8aDM+e3sgc2VjdGlvbi5uYW1lIH19PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc21cIj57eyBzZWN0aW9uLmRlc2NyaXB0aW9uIH19PC9wPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8IS0tIExvb3AgdGhyb3VnaCBlYWNoIHNlY3Rpb24gZmllbGQgLS0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJmaWVsZCBpbiBzZWN0aW9uLmZpZWxkc1wiIDprZXk9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmlzPVwiZmllbGQudHlwZS5pZCArICctZmllbGR0eXBlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkPVwiZmllbGRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtW2ZpZWxkLmhhbmRsZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jb21wb25lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9wLWNhcmQ+XG5cbiAgICAgICAgICAgIDxwLWNhcmQgY2xhc3M9XCJ0ZXh0LXNtIG10LTZcIiB2LWlmPVwibm9kZVwiPlxuICAgICAgICAgICAgICAgIDxkbCBjbGFzcz1cImZsZXggZmxleC13cmFwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkdCBjbGFzcz1cInctMS8zXCI+U3RhdHVzPC9kdD5cbiAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzPVwidy0yLzNcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NpcmNsZSddXCIgY2xhc3M9XCJmYS1mdyB0ZXh0LXhzXCIgOmNsYXNzPVwieyd0ZXh0LXN1Y2Nlc3MtNTAwJzogbm9kZS5zdGF0dXMsICd0ZXh0LWRhbmdlci01MDAnOiAhIG5vZGUuc3RhdHVzfVwiPjwvZmEtaWNvbj4ge3sgbm9kZS5zdGF0dXMgPyAnRW5hYmxlZCcgOiAnRGlzYWJsZWQnIH19PC9kZD5cblxuICAgICAgICAgICAgICAgICAgICA8ZHQgY2xhc3M9XCJ3LTEvM1wiPkNyZWF0ZWQgQXQ8L2R0PlxuICAgICAgICAgICAgICAgICAgICA8ZGQgY2xhc3M9XCJ3LTIvM1wiPnt7ICRtb21lbnQobm9kZS5jcmVhdGVkX2F0KS5mb3JtYXQoJ1ktTU0tREQsIGhoOm1tIGEnKSB9fTwvZGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPGR0IGNsYXNzPVwidy0xLzNcIj5VcGRhdGVkIEF0PC9kdD5cbiAgICAgICAgICAgICAgICAgICAgPGRkIGNsYXNzPVwidy0yLzNcIj57eyAkbW9tZW50KG5vZGUudXBkYXRlZF9hdCkuZm9ybWF0KCdZLU1NLURELCBoaDptbSBhJykgfX08L2RkPlxuICAgICAgICAgICAgICAgIDwvZGw+XG4gICAgICAgICAgICA8L3AtY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG5vZGU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBub2Rlczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbWVudToge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzdWJtaXQ6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIHNlY3Rpb25zKCkge1xuICAgICAgICAgICAgICAgIGxldCBib2R5ID0gW11cbiAgICAgICAgICAgICAgICBsZXQgc2lkZWJhciA9IFtdXG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tZW51LmZpZWxkc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSBfLmZpbHRlcih0aGlzLm1lbnUuZmllbGRzZXQuc2VjdGlvbnMsIGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWN0aW9uLnBsYWNlbWVudCA9PSAnYm9keSdcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyID0gXy5maWx0ZXIodGhpcy5tZW51LmZpZWxkc2V0LnNlY3Rpb25zLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbi5wbGFjZW1lbnQgPT0gJ3NpZGViYXInXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhcjogc2lkZWJhclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImFuY2hvclwiIH0gfSwgW192bS5fdihcIkVkaXQgTm9kZVwiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNoYXJlZC1mb3JtXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBmb3JtOiBfdm0uZm9ybSxcbiAgICAgICAgICBzdWJtaXQ6IF92bS5zdWJtaXQsXG4gICAgICAgICAgbWVudTogX3ZtLm1lbnUsXG4gICAgICAgICAgbm9kZTogX3ZtLm5vZGUsXG4gICAgICAgICAgbm9kZXM6IF92bS5ub2Rlc1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwLWNhcmRcIiwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBtYi02XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2lkZS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInh4bDptci0xMCB4eGw6bWItMCBtYi02XCIgfSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IFwiV2hhdCB0aGlzIG5vZGUgd2lsbCBiZSBjYWxsZWQuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInVybFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVVJMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWxwOiBcIlRoZSBVUkwgb2YgdGhlIG5vZGUuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJ1cmxcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcInVybFwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInVybFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnVybFwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uc2VjdGlvbnMuYm9keS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBrZXk6IF92bS5tZW51LnNsdWcgfSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWN0aW9ucy5ib2R5LCBmdW5jdGlvbihzZWN0aW9uLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogc2VjdGlvbi5oYW5kbGUgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2lkZS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ4eGw6bXItMTAgeHhsOm1iLTAgbWItNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihfdm0uX3Moc2VjdGlvbi5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHNlY3Rpb24uZGVzY3JpcHRpb24pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHNlY3Rpb24uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZC5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZ3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoZmllbGQudHlwZS5pZCArIFwiLWZpZWxkdHlwZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmaWVsZDogZmllbGQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybVtmaWVsZC5oYW5kbGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIGZpZWxkLmhhbmRsZSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1bZmllbGQuaGFuZGxlXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggIT09IF92bS5zZWN0aW9ucy5ib2R5Lmxlbmd0aCAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImhyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gbXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1lbnUubm9kZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IG1lbnU6IF92bS5tZW51LmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBCYWNrXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImJ1dHRvbi0tZGlzYWJsZWRcIjogIV92bS5mb3JtLmhhc0NoYW5nZXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiLCBkaXNhYmxlZDogIV92bS5mb3JtLmhhc0NoYW5nZXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZSBOb2RlXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2lkZS1jb250YWluZXJcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInAtY2FyZFwiLCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJFbmFibGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGlzYWJsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInN0YXR1c1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5ld193aW5kb3dcIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiT3BlbiBsaW5rIHdoZXJlXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlbHA6IFwiRGV0ZXJtaW5lIHdoZXJlIHRoZSBsaW5rIHNob3VsZCBvcGVuLlwiLFxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmV3IFdpbmRvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNhbWUgV2luZG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uZXdfd2luZG93LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmV3X3dpbmRvd1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uZXdfd2luZG93XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0uc2VjdGlvbnMuc2lkZWJhciwgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgIHJldHVybiBfYyhcInAtY2FyZFwiLCB7IGtleTogc2VjdGlvbi5oYW5kbGUsIHN0YXRpY0NsYXNzOiBcIm10LTZcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoX3ZtLl9zKHNlY3Rpb24ubmFtZSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhzZWN0aW9uLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbFwiIH0sXG4gICAgICAgICAgICAgIF92bS5fbChzZWN0aW9uLmZpZWxkcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBrZXk6IGZpZWxkLmhhbmRsZSwgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhmaWVsZC50eXBlLmlkICsgXCItZmllbGR0eXBlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmllbGQ6IGZpZWxkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybVtmaWVsZC5oYW5kbGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgZmllbGQuaGFuZGxlLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtW2ZpZWxkLmhhbmRsZV1cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0ubm9kZVxuICAgICAgICAgID8gX2MoXCJwLWNhcmRcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIG10LTZcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGxcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGZsZXgtd3JhcFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImR0XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzNcIiB9LCBbX3ZtLl92KFwiU3RhdHVzXCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGRcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0yLzNcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IHRleHQteHNcIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXN1Y2Nlc3MtNTAwXCI6IF92bS5ub2RlLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1kYW5nZXItNTAwXCI6ICFfdm0ubm9kZS5zdGF0dXNcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNpcmNsZVwiXSB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCIgXCIgKyBfdm0uX3MoX3ZtLm5vZGUuc3RhdHVzID8gXCJFbmFibGVkXCIgOiBcIkRpc2FibGVkXCIpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZHRcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvM1wiIH0sIFtfdm0uX3YoXCJDcmVhdGVkIEF0XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0yLzNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICBfdm1cbiAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9tZW50KF92bS5ub2RlLmNyZWF0ZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZm9ybWF0KFwiWS1NTS1ERCwgaGg6bW0gYVwiKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImR0XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzNcIiB9LCBbX3ZtLl92KFwiVXBkYXRlZCBBdFwiKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkZFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMi8zXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAuJG1vbWVudChfdm0ubm9kZS51cGRhdGVkX2F0KVxuICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIlktTU0tREQsIGhoOm1tIGFcIilcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTJhOTdkYjImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5MmE5N2RiMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5MmE5N2RiMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5MmE5N2RiMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTJhOTdkYjImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTJhOTdkYjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9Ob2Rlcy9FZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTJhOTdkYjImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjYzQ1MmI0JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWNjNDUyYjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWNjNDUyYjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWNjNDUyYjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjYzQ1MmI0JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVjYzQ1MmI0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvTm9kZXMvU2hhcmVkRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjYzQ1MmI0JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==