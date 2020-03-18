(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      saving: false,
      before: null,
      after: null,
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: '',
        url: '',
        new_window: 0
      })
    };
  },
  computed: {
    options: function options() {
      return _.map(this.nodes, function (node) {
        return {
          'label': node.name,
          'value': node.id
        };
      });
    }
  },
  methods: {
    add: function add(type) {
      var _this = this;

      this.saving = true;
      this.form.post('/api/menus/' + this.menu.id + '/nodes').then(function (response) {
        _this.fetchNodes().then(function (response) {
          _this.reset();

          _this.saving = false;
          toast('Menu node successfully added', 'success');
        });
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    },
    save: function save() {
      var _this2 = this;

      this.saving = true;
      var nodes = {};

      _.each(this.nodes, function (node, index) {
        nodes[node.id] = {
          order: index + 1
        };
      });

      axios.post('/api/menus/' + this.menu.id + '/reorder', {
        nodes: nodes
      }).then(function (response) {
        _this2.saving = false;
        toast('Menu nodes successfully reordered.', 'success');
      });
    },
    fetchNodes: function fetchNodes() {
      var _this3 = this;

      return axios.get('/api/menus/' + this.menu.id).then(function (response) {
        _this3.nodes = response.data.data.nodes;
      });
    },
    reset: function reset() {
      this.form.name = '';
      this.form.url = '';
      this.form.new_window = 0;
    },
    destroy: function destroy(id) {
      var _this4 = this;

      axios["delete"]('/api/menus/' + this.menu.id + '/nodes/' + id).then(function (response) {
        _this4.fetchNodes().then(function () {
          toast('Menu node successfully deleted.', 'success');
        });
      });
    },
    moveBefore: function moveBefore(move) {
      var _this5 = this;

      axios.post('/api/menus/' + this.menu.id + '/nodes/move/before', {
        move: move,
        before: this.before
      }).then(function (response) {
        _this5.fetchNodes().then(function () {
          _this5.before = null;
          toast('Menu node successfully moved.', 'success');
        });
      });
    },
    moveAfter: function moveAfter(move) {
      var _this6 = this;

      axios.post('/api/menus/' + this.menu.id + '/nodes/move/after', {
        move: move,
        after: this.after
      }).then(function (response) {
        _this6.fetchNodes().then(function () {
          _this6.after = null;
          toast('Menu node successfully moved.', 'success');
        });
      });
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
    var _this7 = this;

    axios.get('/api/menus/' + to.params.menu).then(function (response) {
      _this7.menu = response.data.data;
      _this7.nodes = response.data.data.nodes;

      _this7.$emit('updateHead');
    });
    next();
  }
});

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
            _vm._v(_vm._s(_vm.menu.name))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "actions" } }, [
        _c(
          "div",
          { staticClass: "inline-block" },
          [
            _c(
              "router-link",
              { staticClass: "button mr-3", attrs: { to: { name: "menus" } } },
              [_vm._v("Go back")]
            ),
            _vm._v(" "),
            _c(
              "p-button",
              {
                attrs: { theme: "primary", disabled: _vm.saving },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.save($event)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.saving ? "Saving..." : "Save"))]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
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
                  }),
                  _vm._v(" "),
                  _c(
                    "p-button",
                    {
                      attrs: { theme: "primary" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.add("custom")
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
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "content-container" },
          [
            _c("p-card", { attrs: { "no-body": "" } }, [
              _c(
                "table",
                { staticClass: "table" },
                [
                  _c("thead", [
                    _c("tr", [
                      _c("th"),
                      _vm._v(" "),
                      _c("th", [_vm._v("Name")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("URL")]),
                      _vm._v(" "),
                      _c("th", [_vm._v("Type")]),
                      _vm._v(" "),
                      _c("th")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "p-sortable-list",
                    {
                      staticClass: "sortable-list",
                      model: {
                        value: _vm.nodes,
                        callback: function($$v) {
                          _vm.nodes = $$v
                        },
                        expression: "nodes"
                      }
                    },
                    [
                      _c(
                        "tbody",
                        _vm._l(_vm.nodes, function(node) {
                          return _c("p-sortable-item", { key: node.id }, [
                            _c("tr", [
                              _c(
                                "td",
                                { staticClass: "w-8" },
                                [
                                  _c(
                                    "p-sortable-handle",
                                    { staticClass: "mr-6 text-gray-400" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "w-6 h-6 flex items-center justify-center"
                                        },
                                        [
                                          _c("fa-icon", {
                                            staticClass: "fa-fw",
                                            attrs: {
                                              icon: ["fas", "grip-vertical"]
                                            }
                                          })
                                        ],
                                        1
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "td",
                                [
                                  _c("p-status", {
                                    staticClass: "mr-2",
                                    attrs: { value: node.status }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "router-link",
                                    {
                                      attrs: {
                                        to: {
                                          name: "menu.nodes.edit",
                                          params: {
                                            menu: _vm.menu.id,
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
                                        staticClass:
                                          "fa-fw text-gray-500 text-xs",
                                        attrs: {
                                          icon: ["fas", "external-link-alt"]
                                        }
                                      })
                                    : _vm._e()
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "span",
                                  { staticClass: "text-sm text-gray-600" },
                                  [
                                    _vm._v(
                                      "\n                                            " +
                                        _vm._s(node.url) +
                                        "\n                                        "
                                    )
                                  ]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "text-xs px-2 py-1 bg-gray-200 text-gray-600 leading-none"
                                  },
                                  [_vm._v("custom")]
                                )
                              ]),
                              _vm._v(" "),
                              _c("td", [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "text-right draggable__actions",
                                    staticStyle: { "min-width": "50px" }
                                  },
                                  [
                                    _c(
                                      "p-actions",
                                      {
                                        key: "node_" + node.id + "_actions",
                                        attrs: {
                                          id: "node_" + node.id + "_actions"
                                        }
                                      },
                                      [
                                        _c(
                                          "p-dropdown-link",
                                          {
                                            attrs: {
                                              to: {
                                                name: "menu.nodes.edit",
                                                params: {
                                                  menu: _vm.menu.id,
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
                                        _c(
                                          "p-dropdown-link",
                                          {
                                            directives: [
                                              {
                                                name: "modal",
                                                rawName: "v-modal:move-before",
                                                value: node,
                                                expression: "node",
                                                arg: "move-before"
                                              }
                                            ],
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    Move before...\n                                                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p-dropdown-link",
                                          {
                                            directives: [
                                              {
                                                name: "modal",
                                                rawName: "v-modal:move-after",
                                                value: node,
                                                expression: "node",
                                                arg: "move-after"
                                              }
                                            ],
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    Move after...\n                                                "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "p-dropdown-link",
                                          {
                                            directives: [
                                              {
                                                name: "modal",
                                                rawName: "v-modal:delete-node",
                                                value: node,
                                                expression: "node",
                                                arg: "delete-node"
                                              }
                                            ],
                                            attrs: { classes: "link--danger" },
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                                    Delete\n                                                "
                                            )
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
                          ])
                        }),
                        1
                      )
                    ]
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
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _c(
            "p-modal",
            {
              key: "delete_node",
              attrs: { name: "delete-node", title: "Delete Node" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(node) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:delete-node",
                              arg: "delete-node"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.destroy(node.data.id)
                            }
                          }
                        },
                        [_vm._v("Delete")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:delete-node",
                              arg: "delete-node"
                            }
                          ]
                        },
                        [_vm._v("Cancel")]
                      )
                    ]
                  }
                }
              ])
            },
            [
              _c("p", [
                _vm._v("Are you sure you want to permenantly delete this node?")
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "p-modal",
            {
              key: "move_before",
              attrs: { name: "move-before", title: "Move before..." },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(node) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:move-before",
                              arg: "move-before"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.moveBefore(node.data.id)
                            }
                          }
                        },
                        [_vm._v("Move")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:move-after",
                              arg: "move-after"
                            }
                          ],
                          on: {
                            click: function($event) {
                              _vm.before = null
                            }
                          }
                        },
                        [_vm._v("Cancel")]
                      )
                    ]
                  }
                }
              ])
            },
            [
              [
                _c("p", [_vm._v("Which node would you like to move before?")]),
                _vm._v(" "),
                _c("p-select", {
                  attrs: {
                    name: "before",
                    label: "Node",
                    options: _vm.options
                  },
                  model: {
                    value: _vm.before,
                    callback: function($$v) {
                      _vm.before = $$v
                    },
                    expression: "before"
                  }
                })
              ]
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "p-modal",
            {
              key: "move_after",
              attrs: { name: "move-after", title: "Move after..." },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(node) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:move-after",
                              arg: "move-after"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.moveAfter(node.data.id)
                            }
                          }
                        },
                        [_vm._v("Move")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:move-after",
                              arg: "move-after"
                            }
                          ],
                          on: {
                            click: function($event) {
                              _vm.after = null
                            }
                          }
                        },
                        [_vm._v("Cancel")]
                      )
                    ]
                  }
                }
              ])
            },
            [
              [
                _c("p", [_vm._v("Which node would you like to move after?")]),
                _vm._v(" "),
                _c("p-select", {
                  attrs: { name: "after", label: "Node", options: _vm.options },
                  model: {
                    value: _vm.after,
                    callback: function($$v) {
                      _vm.after = $$v
                    },
                    expression: "after"
                  }
                })
              ]
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL05vZGVzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTm9kZXMvSW5kZXgudnVlPzRmNDUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL05vZGVzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTm9kZXMvSW5kZXgudnVlPzc4YWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL05vZGVzL0luZGV4LnZ1ZT9iZTlmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvS0E7QUFFQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFDQTtBQUNBLGNBREE7QUFFQSxlQUZBO0FBR0EsbUJBSEE7QUFJQSxrQkFKQTtBQUtBLGlCQUxBO0FBTUE7QUFDQSxnQkFEQTtBQUVBLGVBRkE7QUFHQTtBQUhBO0FBTkE7QUFZQSxHQXRCQTtBQXdCQTtBQUNBLFdBREEscUJBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQTtBQUZBO0FBSUEsT0FMQTtBQU1BO0FBUkEsR0F4QkE7QUFtQ0E7QUFDQSxPQURBLGVBQ0EsSUFEQSxFQUNBO0FBQUE7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFFQTtBQUNBLFNBTEE7QUFNQSxPQVBBLFdBT0E7QUFDQTtBQUNBLE9BVEE7QUFVQSxLQWRBO0FBZ0JBLFFBaEJBLGtCQWdCQTtBQUFBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQSxPQUpBOztBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUEsS0E5QkE7QUFnQ0EsY0FoQ0Esd0JBZ0NBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQXBDQTtBQXNDQSxTQXRDQSxtQkFzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTFDQTtBQTRDQSxXQTVDQSxtQkE0Q0EsRUE1Q0EsRUE0Q0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0FKQTtBQUtBLEtBbERBO0FBb0RBLGNBcERBLHNCQW9EQSxJQXBEQSxFQW9EQTtBQUFBOztBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLFNBR0EsSUFIQSxDQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsU0FKQTtBQUtBLE9BVEE7QUFVQSxLQS9EQTtBQWlFQSxhQWpFQSxxQkFpRUEsSUFqRUEsRUFpRUE7QUFBQTs7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxTQUdBLElBSEEsQ0FHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFNBSkE7QUFLQSxPQVRBO0FBVUE7QUE1RUEsR0FuQ0E7QUFrSEEsa0JBbEhBLDRCQWtIQSxFQWxIQSxFQWtIQSxJQWxIQSxFQWtIQSxJQWxIQSxFQWtIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxPQUxBO0FBTUEsS0FQQTtBQVFBLEdBM0hBO0FBNkhBLG1CQTdIQSw2QkE2SEEsRUE3SEEsRUE2SEEsSUE3SEEsRUE2SEEsSUE3SEEsRUE2SEE7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUxBO0FBT0E7QUFDQTtBQXRJQSxHOzs7Ozs7Ozs7Ozs7QUN0S0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGNBQWMsRUFBRTtBQUNsQztBQUNBLDJCQUEyQixTQUFTLGlCQUFpQixFQUFFO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLGdCQUFnQixFQUFFO0FBQy9DO0FBQ0E7QUFDQSxXQUFXLDhCQUE4QjtBQUN6QztBQUNBO0FBQ0E7QUFDQSxlQUFlLHFDQUFxQyxNQUFNLGdCQUFnQixFQUFFLEVBQUU7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlDQUF5QztBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIscUJBQXFCO0FBQ3RDO0FBQ0E7QUFDQSxXQUFXLGdDQUFnQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDhCQUE4QjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSw0QkFBNEIsNEJBQTRCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG1CQUFtQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQ0FBbUM7QUFDOUM7QUFDQSwwQkFBMEIsU0FBUyxnQkFBZ0IsRUFBRTtBQUNyRDtBQUNBO0FBQ0EsaUJBQWlCLHVCQUF1QjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsZUFBZTtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMscUJBQXFCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxvQ0FBb0M7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHVDQUF1QztBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRCxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCwwQkFBMEI7QUFDOUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGVBQWUsRUFBRTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDRDQUE0QztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxrQkFBa0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwrQ0FBK0M7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msa0JBQWtCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsNkNBQTZDO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixxREFBcUQ7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNybUJBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzg5LmpzP2lkPWM1NGU1ZDdiNjcyYWQ5MzA3MjQxIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGFwcC10aXRsZSBpY29uPVwiYW5jaG9yXCI+e3sgbWVudS5uYW1lIH19PC9hcHAtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5saW5lLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ21lbnVzJyB9XCIgY2xhc3M9XCJidXR0b24gbXItM1wiPkdvIGJhY2s8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB0aGVtZT1cInByaW1hcnlcIiBAY2xpY2sucHJldmVudD1cInNhdmVcIiA6ZGlzYWJsZWQ9XCJzYXZpbmdcIj57eyBzYXZpbmcgPyAnU2F2aW5nLi4uJyA6ICdTYXZlJyB9fTwvcC1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHAtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkN1c3RvbSBVUkw8L2gzPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dCBuYW1lPVwibmFtZVwiIGxhYmVsPVwiTmFtZVwiIHYtbW9kZWw9XCJmb3JtLm5hbWVcIj48L3AtaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWlucHV0IG5hbWU9XCJ1cmxcIiBsYWJlbD1cIlVSTFwiIHYtbW9kZWw9XCJmb3JtLnVybFwiPjwvcC1pbnB1dD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtc2VsZWN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5ld193aW5kb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiT3BlbiBsaW5rIHdoZXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiRGV0ZXJtaW5lIHdoZXJlIHRoZSBsaW5rIHNob3VsZCBvcGVuLlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdOZXcgV2luZG93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdTYW1lIFdpbmRvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLm5ld193aW5kb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB0aGVtZT1cInByaW1hcnlcIiBAY2xpY2sucHJldmVudD1cImFkZCgnY3VzdG9tJylcIj5BZGQ8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3AtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cC1jYXJkIG5vLWJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPk5hbWU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VVJMPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPlR5cGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtc29ydGFibGUtbGlzdCB2LW1vZGVsPVwibm9kZXNcIiBjbGFzcz1cInNvcnRhYmxlLWxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXNvcnRhYmxlLWl0ZW0gdi1mb3I9XCJub2RlIGluIG5vZGVzXCIgOmtleT1cIm5vZGUuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJ3LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtc29ydGFibGUtaGFuZGxlIGNsYXNzPVwibXItNiB0ZXh0LWdyYXktNDAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy02IGgtNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnZ3JpcC12ZXJ0aWNhbCddXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Atc29ydGFibGUtaGFuZGxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXN0YXR1cyA6dmFsdWU9XCJub2RlLnN0YXR1c1wiIGNsYXNzPVwibXItMlwiPjwvcC1zdGF0dXM+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ21lbnUubm9kZXMuZWRpdCcsIHBhcmFtczoge21lbnU6IG1lbnUuaWQsIG5vZGU6IG5vZGUuaWR9IH1cIj57eyBub2RlLm5hbWUgfX08L3JvdXRlci1saW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIHYtaWY9XCJub2RlLm5ld193aW5kb3dcIiBjbGFzcz1cImZhLWZ3IHRleHQtZ3JheS01MDAgdGV4dC14c1wiIDppY29uPVwiWydmYXMnLCAnZXh0ZXJuYWwtbGluay1hbHQnXVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgbm9kZS51cmwgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PHNwYW4gY2xhc3M9XCJ0ZXh0LXhzIHB4LTIgcHktMSBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktNjAwIGxlYWRpbmctbm9uZVwiPmN1c3RvbTwvc3Bhbj48L3RkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWluLXdpZHRoOiA1MHB4O1wiIGNsYXNzPVwidGV4dC1yaWdodCBkcmFnZ2FibGVfX2FjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWFjdGlvbnMgOmlkPVwiJ25vZGVfJyArIG5vZGUuaWQgKyAnX2FjdGlvbnMnXCIgOmtleT1cIidub2RlXycgKyBub2RlLmlkICsgJ19hY3Rpb25zJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duLWxpbmsgQGNsaWNrLnByZXZlbnQgOnRvPVwieyBuYW1lOiAnbWVudS5ub2Rlcy5lZGl0JywgcGFyYW1zOiB7bWVudTogbWVudS5pZCwgbm9kZTogbm9kZS5pZH0gfVwiPkVkaXQ8L3AtZHJvcGRvd24tbGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RhbDptb3ZlLWJlZm9yZT1cIm5vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW92ZSBiZWZvcmUuLi5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtZHJvcGRvd24tbGluaz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duLWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RhbDptb3ZlLWFmdGVyPVwibm9kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3ZlIGFmdGVyLi4uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWRyb3Bkb3duLWxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1kcm9wZG93bi1saW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kYWw6ZGVsZXRlLW5vZGU9XCJub2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3Nlcz1cImxpbmstLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWxldGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtZHJvcGRvd24tbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1hY3Rpb25zPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXNvcnRhYmxlLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1zb3J0YWJsZS1saXN0PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDwvcC1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJtb2RhbHNcIj5cbiAgICAgICAgICAgIDxwLW1vZGFsIG5hbWU9XCJkZWxldGUtbm9kZVwiIHRpdGxlPVwiRGVsZXRlIE5vZGVcIiBrZXk9XCJkZWxldGVfbm9kZVwiPlxuICAgICAgICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwZXJtZW5hbnRseSBkZWxldGUgdGhpcyBub2RlPzwvcD5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCIgc2xvdC1zY29wZT1cIm5vZGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6ZGVsZXRlLW5vZGUgQGNsaWNrPVwiZGVzdHJveShub2RlLmRhdGEuaWQpXCIgdGhlbWU9XCJkYW5nZXJcIiBjbGFzcz1cIm1sLTNcIj5EZWxldGU8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDpkZWxldGUtbm9kZT5DYW5jZWw8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3AtbW9kYWw+XG5cbiAgICAgICAgICAgIDxwLW1vZGFsIG5hbWU9XCJtb3ZlLWJlZm9yZVwiIHRpdGxlPVwiTW92ZSBiZWZvcmUuLi5cIiBrZXk9XCJtb3ZlX2JlZm9yZVwiPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2hpY2ggbm9kZSB3b3VsZCB5b3UgbGlrZSB0byBtb3ZlIGJlZm9yZT88L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPHAtc2VsZWN0IG5hbWU9XCJiZWZvcmVcIiBsYWJlbD1cIk5vZGVcIiA6b3B0aW9ucz1cIm9wdGlvbnNcIiB2LW1vZGVsPVwiYmVmb3JlXCI+PC9wLXNlbGVjdD5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIiBzbG90LXNjb3BlPVwibm9kZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDptb3ZlLWJlZm9yZSBAY2xpY2s9XCJtb3ZlQmVmb3JlKG5vZGUuZGF0YS5pZClcIiB0aGVtZT1cImRhbmdlclwiIGNsYXNzPVwibWwtM1wiPk1vdmU8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDptb3ZlLWFmdGVyIEBjbGljaz1cImJlZm9yZSA9IG51bGxcIj5DYW5jZWw8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3AtbW9kYWw+XG5cbiAgICAgICAgICAgIDxwLW1vZGFsIG5hbWU9XCJtb3ZlLWFmdGVyXCIgdGl0bGU9XCJNb3ZlIGFmdGVyLi4uXCIga2V5PVwibW92ZV9hZnRlclwiPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgPHA+V2hpY2ggbm9kZSB3b3VsZCB5b3UgbGlrZSB0byBtb3ZlIGFmdGVyPzwvcD5cblxuICAgICAgICAgICAgICAgICAgICA8cC1zZWxlY3QgbmFtZT1cImFmdGVyXCIgbGFiZWw9XCJOb2RlXCIgOm9wdGlvbnM9XCJvcHRpb25zXCIgdi1tb2RlbD1cImFmdGVyXCI+PC9wLXNlbGVjdD5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIiBzbG90LXNjb3BlPVwibm9kZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDptb3ZlLWFmdGVyIEBjbGljaz1cIm1vdmVBZnRlcihub2RlLmRhdGEuaWQpXCIgdGhlbWU9XCJkYW5nZXJcIiBjbGFzcz1cIm1sLTNcIj5Nb3ZlPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6bW92ZS1hZnRlciBAY2xpY2s9XCJhZnRlciA9IG51bGxcIj5DYW5jZWw8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3AtbW9kYWw+XG4gICAgICAgIDwvcG9ydGFsPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogdGhpcy5tZW51Lm5hbWUgfHwgJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1lbnU6IHt9LFxuICAgICAgICAgICAgICAgIG5vZGVzOiBbXSxcbiAgICAgICAgICAgICAgICBzYXZpbmc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGJlZm9yZTogbnVsbCxcbiAgICAgICAgICAgICAgICBhZnRlcjogbnVsbCxcbiAgICAgICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcnLFxuICAgICAgICAgICAgICAgICAgICBuZXdfd2luZG93OiAwLFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBvcHRpb25zKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLm1hcCh0aGlzLm5vZGVzLCBmdW5jdGlvbihub2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiBub2RlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBub2RlLmlkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGFkZCh0eXBlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZpbmcgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucG9zdCgnL2FwaS9tZW51cy8nICsgdGhpcy5tZW51LmlkICsgJy9ub2RlcycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hOb2RlcygpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gZmFsc2VcblxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ01lbnUgbm9kZSBzdWNjZXNzZnVsbHkgYWRkZWQnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzYXZlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2aW5nID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGxldCBub2RlcyA9IHt9XG5cbiAgICAgICAgICAgICAgICBfLmVhY2godGhpcy5ub2RlcywgKG5vZGUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVzW25vZGUuaWRdID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3JkZXI6IGluZGV4ICsgMVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvbWVudXMvJyArIHRoaXMubWVudS5pZCArICcvcmVvcmRlcicsIHtub2Rlczogbm9kZXN9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmluZyA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdNZW51IG5vZGVzIHN1Y2Nlc3NmdWxseSByZW9yZGVyZWQuJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmZXRjaE5vZGVzKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBheGlvcy5nZXQoJy9hcGkvbWVudXMvJyArIHRoaXMubWVudS5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5ub2Rlc1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ubmFtZSA9ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnVybCAgPSAnJ1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5uZXdfd2luZG93ID0gMFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZGVzdHJveShpZCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSgnL2FwaS9tZW51cy8nICsgdGhpcy5tZW51LmlkICsgJy9ub2Rlcy8nICsgaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hOb2RlcygpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ01lbnUgbm9kZSBzdWNjZXNzZnVsbHkgZGVsZXRlZC4nLCAnc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIG1vdmVCZWZvcmUobW92ZSkge1xuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvbWVudXMvJyArIHRoaXMubWVudS5pZCArICcvbm9kZXMvbW92ZS9iZWZvcmUnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmU6IG1vdmUsXG4gICAgICAgICAgICAgICAgICAgIGJlZm9yZTogdGhpcy5iZWZvcmUsXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaE5vZGVzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJlZm9yZSA9IG51bGxcblxuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ01lbnUgbm9kZSBzdWNjZXNzZnVsbHkgbW92ZWQuJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBtb3ZlQWZ0ZXIobW92ZSkge1xuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvbWVudXMvJyArIHRoaXMubWVudS5pZCArICcvbm9kZXMvbW92ZS9hZnRlcicsIHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZTogbW92ZSxcbiAgICAgICAgICAgICAgICAgICAgYWZ0ZXI6IHRoaXMuYWZ0ZXIsXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaE5vZGVzKCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFmdGVyID0gbnVsbFxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCgnTWVudSBub2RlIHN1Y2Nlc3NmdWxseSBtb3ZlZC4nLCAnc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvbWVudXMvJyArIHRvLnBhcmFtcy5tZW51KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIG5leHQoZnVuY3Rpb24odm0pIHtcbiAgICAgICAgICAgICAgICAgICAgdm0ubWVudSA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICB2bS5ub2RlcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5ub2Rlc1xuXG4gICAgICAgICAgICAgICAgICAgIHZtLiRlbWl0KCd1cGRhdGVIZWFkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZVVwZGF0ZSh0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL21lbnVzLycgKyB0by5wYXJhbXMubWVudSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lbnUgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm5vZGVzXG5cbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGVIZWFkJylcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIG5leHQoKVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJhbmNob3JcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLm1lbnUubmFtZSkpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlubGluZS1ibG9ja1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b24gbXItM1wiLCBhdHRyczogeyB0bzogeyBuYW1lOiBcIm1lbnVzXCIgfSB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBiYWNrXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwicHJpbWFyeVwiLCBkaXNhYmxlZDogX3ZtLnNhdmluZyB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2F2ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uc2F2aW5nID8gXCJTYXZpbmcuLi5cIiA6IFwiU2F2ZVwiKSldXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2lkZS1jb250YWluZXJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicC1jYXJkXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJoM1wiLCBbX3ZtLl92KFwiQ3VzdG9tIFVSTFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwibmFtZVwiLCBsYWJlbDogXCJOYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ1cmxcIiwgbGFiZWw6IFwiVVJMXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0udXJsLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInVybFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0udXJsXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuZXdfd2luZG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiT3BlbiBsaW5rIHdoZXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgaGVscDogXCJEZXRlcm1pbmUgd2hlcmUgdGhlIGxpbmsgc2hvdWxkIG9wZW4uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOZXcgV2luZG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTYW1lIFdpbmRvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0ubmV3X3dpbmRvdyxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuZXdfd2luZG93XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uZXdfd2luZG93XCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkKFwiY3VzdG9tXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQWRkXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicC1jYXJkXCIsIHsgYXR0cnM6IHsgXCJuby1ib2R5XCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlVSTFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVHlwZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicC1zb3J0YWJsZS1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzb3J0YWJsZS1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubm9kZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ub2RlcyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibm9kZXNcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5ub2RlcywgZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJwLXNvcnRhYmxlLWl0ZW1cIiwgeyBrZXk6IG5vZGUuaWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LThcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtc29ydGFibGUtaGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1yLTYgdGV4dC1ncmF5LTQwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidy02IGgtNiBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFtcImZhc1wiLCBcImdyaXAtdmVydGljYWxcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLXN0YXR1c1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB2YWx1ZTogbm9kZS5zdGF0dXMgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWVudS5ub2Rlcy5lZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudTogX3ZtLm1lbnUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhub2RlLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5uZXdfd2luZG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhLWZ3IHRleHQtZ3JheS01MDAgdGV4dC14c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBbXCJmYXNcIiwgXCJleHRlcm5hbC1saW5rLWFsdFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3Mobm9kZS51cmwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQteHMgcHgtMiBweS0xIGJnLWdyYXktMjAwIHRleHQtZ3JheS02MDAgbGVhZGluZy1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJjdXN0b21cIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtcmlnaHQgZHJhZ2dhYmxlX19hY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1pbi13aWR0aFwiOiBcIjUwcHhcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWFjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJub2RlX1wiICsgbm9kZS5pZCArIFwiX2FjdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IFwibm9kZV9cIiArIG5vZGUuaWQgKyBcIl9hY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1kcm9wZG93bi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibWVudS5ub2Rlcy5lZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudTogX3ZtLm1lbnUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGU6IG5vZGUuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRWRpdFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOm1vdmUtYmVmb3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcIm1vdmUtYmVmb3JlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNb3ZlIGJlZm9yZS4uLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOm1vdmUtYWZ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBub2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJub2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibW92ZS1hZnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTW92ZSBhZnRlci4uLlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmRlbGV0ZS1ub2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbm9kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibm9kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlbGV0ZS1ub2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNsYXNzZXM6IFwibGluay0tZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIm1vZGFsc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLW1vZGFsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWxldGVfbm9kZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImRlbGV0ZS1ub2RlXCIsIHRpdGxlOiBcIkRlbGV0ZSBOb2RlXCIgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImZvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpkZWxldGUtbm9kZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlbGV0ZS1ub2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwiZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlc3Ryb3kobm9kZS5kYXRhLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEZWxldGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmRlbGV0ZS1ub2RlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVsZXRlLW5vZGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcGVybWVuYW50bHkgZGVsZXRlIHRoaXMgbm9kZT9cIilcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtbW9kYWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcIm1vdmVfYmVmb3JlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwibW92ZS1iZWZvcmVcIiwgdGl0bGU6IFwiTW92ZSBiZWZvcmUuLi5cIiB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24obm9kZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOm1vdmUtYmVmb3JlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibW92ZS1iZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJkYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ubW92ZUJlZm9yZShub2RlLmRhdGEuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIk1vdmVcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOm1vdmUtYWZ0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJtb3ZlLWFmdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmJlZm9yZSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIldoaWNoIG5vZGUgd291bGQgeW91IGxpa2UgdG8gbW92ZSBiZWZvcmU/XCIpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYmVmb3JlXCIsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5vZGVcIixcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogX3ZtLm9wdGlvbnNcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmJlZm9yZSxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5iZWZvcmUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJiZWZvcmVcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLW1vZGFsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJtb3ZlX2FmdGVyXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwibW92ZS1hZnRlclwiLCB0aXRsZTogXCJNb3ZlIGFmdGVyLi4uXCIgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImZvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDptb3ZlLWFmdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibW92ZS1hZnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcImRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5tb3ZlQWZ0ZXIobm9kZS5kYXRhLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJNb3ZlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDptb3ZlLWFmdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibW92ZS1hZnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hZnRlciA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIldoaWNoIG5vZGUgd291bGQgeW91IGxpa2UgdG8gbW92ZSBhZnRlcj9cIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJhZnRlclwiLCBsYWJlbDogXCJOb2RlXCIsIG9wdGlvbnM6IF92bS5vcHRpb25zIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFmdGVyLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmFmdGVyID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWZ0ZXJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDc0OWQ4NSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjA3NDlkODUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjA3NDlkODUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjA3NDlkODUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDc0OWQ4NSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MDc0OWQ4NScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL05vZGVzL0luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjA3NDlkODUmXCIiXSwic291cmNlUm9vdCI6IiJ9