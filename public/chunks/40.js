(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Playground.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      listView: false,
      selected: {},
      directories: [{
        id: 1,
        name: 'Local',
        icon: ['fas', 'server'],
        children: [{
          id: 4,
          name: 'Folder',
          isFolder: true,
          children: [{
            id: 5,
            name: 'Folder',
            isFolder: true
          }, {
            id: 10,
            name: 'Folder',
            isFolder: true
          }]
        }]
      }, {
        id: 13,
        name: 'Backups',
        icon: ['fab', 'digital-ocean'],
        children: [{
          id: 16,
          name: 'Folder',
          isFolder: true,
          children: [{
            id: 17,
            name: 'Folder',
            isFolder: true
          }, {
            id: 22,
            name: 'Folder',
            isFolder: true
          }]
        }]
      }]
    };
  },
  methods: {
    viewList: function viewList() {
      this.listView = true;
    },
    viewGrid: function viewGrid() {
      this.listView = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Playground.vue?vue&type=template&id=2a00969a& ***!
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
        [
          _c("app-title", { attrs: { icon: "images" } }, [
            _vm._v("File Manager")
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
            "p-button",
            {
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.viewGrid($event)
                }
              }
            },
            [
              _c("fa-icon", {
                staticClass: "fa-fw mr-2",
                attrs: { icon: ["fas", "th-large"] }
              }),
              _vm._v(" Grid")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "p-button",
            {
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.viewList($event)
                }
              }
            },
            [
              _c("fa-icon", {
                staticClass: "fa-fw mr-2",
                attrs: { icon: ["fas", "th-list"] }
              }),
              _vm._v(" List")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "p-button",
            [
              _c("fa-icon", {
                staticClass: "fa-fw mr-2",
                attrs: { icon: ["fas", "trash-alt"] }
              }),
              _vm._v(" Delete")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "p-button",
            [
              _c("fa-icon", {
                staticClass: "fa-fw mr-2",
                attrs: { icon: ["fas", "reply-all"] }
              }),
              _vm._v(" Move")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "p-button",
            [
              _c("fa-icon", {
                staticClass: "fa-fw mr-2",
                attrs: { icon: ["fas", "folder"] }
              }),
              _vm._v(" New Folder")
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "p-button",
            [
              _c("fa-icon", {
                staticClass: "fa-fw mr-2",
                attrs: { icon: ["fas", "upload"] }
              }),
              _vm._v(" Upload")
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
          { staticClass: "side-container" },
          [
            _c(
              "p-card",
              [
                _c("p-input", {
                  attrs: { name: "search", placeholder: "Search" }
                }),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "list" },
                  [
                    _c("span", { staticClass: "list--separator" }, [
                      _vm._v("Display")
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "list--item leading-loose",
                        attrs: { to: { name: "users" }, exact: "" }
                      },
                      [
                        _c("fa-icon", {
                          staticClass: "fa-fw mr-2",
                          attrs: { icon: ["fas", "asterisk"] }
                        }),
                        _vm._v(" Everything")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "list--item leading-loose",
                        attrs: { to: { name: "users" }, exact: "" }
                      },
                      [
                        _c("fa-icon", {
                          staticClass: "fa-fw mr-2",
                          attrs: { icon: ["fas", "images"] }
                        }),
                        _vm._v(" Images")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "list--item leading-loose",
                        attrs: { to: { name: "users" }, exact: "" }
                      },
                      [
                        _c("fa-icon", {
                          staticClass: "fa-fw mr-2",
                          attrs: { icon: ["fas", "video"] }
                        }),
                        _vm._v(" Videos")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "list--item leading-loose",
                        attrs: { to: { name: "users" }, exact: "" }
                      },
                      [
                        _c("fa-icon", {
                          staticClass: "fa-fw mr-2",
                          attrs: { icon: ["fas", "volume-up"] }
                        }),
                        _vm._v(" Audio")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "list--item leading-loose",
                        attrs: { to: { name: "users" }, exact: "" }
                      },
                      [
                        _c("fa-icon", {
                          staticClass: "fa-fw mr-2",
                          attrs: { icon: ["fas", "file-alt"] }
                        }),
                        _vm._v(" Documents")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "list--separator" }, [
                      _vm._v("Sort")
                    ]),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "list--item leading-loose",
                        attrs: { to: { name: "users" }, exact: "" }
                      },
                      [
                        _c("fa-icon", {
                          staticClass: "fa-fw mr-2",
                          attrs: { icon: ["fas", "sort-amount-down"] }
                        }),
                        _vm._v(" Name")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "list--item leading-loose",
                        attrs: { to: { name: "users" }, exact: "" }
                      },
                      [
                        _c("fa-icon", {
                          staticClass: "fa-fw mr-2",
                          attrs: { icon: ["fas", "bars"] }
                        }),
                        _vm._v(" Filesize")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "router-link",
                      {
                        staticClass: "list--item leading-loose",
                        attrs: { to: { name: "users" }, exact: "" }
                      },
                      [
                        _c("fa-icon", {
                          staticClass: "fa-fw mr-2",
                          attrs: { icon: ["fas", "bars"] }
                        }),
                        _vm._v(" Last Modified")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("span", { staticClass: "list--separator" }, [
                      _vm._v("Locations")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "list--item" },
                      [
                        _c("p-treeview", {
                          attrs: { items: _vm.directories },
                          scopedSlots: _vm._u([
                            {
                              key: "prepend",
                              fn: function(ref) {
                                var node = ref.node
                                var open = ref.open
                                return [
                                  open && !node.file
                                    ? _c("fa-icon", {
                                        staticClass: "fa-fw mr-2",
                                        attrs: {
                                          icon: node.icon || [
                                            "fas",
                                            "folder-open"
                                          ]
                                        }
                                      })
                                    : _vm._e(),
                                  _vm._v(" "),
                                  !open && !node.file
                                    ? _c("fa-icon", {
                                        staticClass: "fa-fw mr-2",
                                        attrs: {
                                          icon: node.icon || ["fas", "folder"]
                                        }
                                      })
                                    : _vm._e()
                                ]
                              }
                            }
                          ]),
                          model: {
                            value: _vm.selected,
                            callback: function($$v) {
                              _vm.selected = $$v
                            },
                            expression: "selected"
                          }
                        })
                      ],
                      1
                    )
                  ],
                  1
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
          { staticClass: "content-container" },
          [
            _c("p-datatable", {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.listView,
                  expression: "listView"
                }
              ],
              attrs: {
                name: "list-view",
                endpoint: "/datatable/users",
                "sort-by": "name",
                "per-page": 10,
                "no-filtering": ""
              }
            }),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: !_vm.listView,
                    expression: "!listView"
                  }
                ],
                staticClass: "card"
              },
              [
                _c(
                  "div",
                  {
                    staticClass:
                      "border-b border-grey-lighter px-8 py-2 text-grey-darker flex items-center"
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "mr-2" },
                      [
                        _c("fa-icon", {
                          staticClass: "fa-fw",
                          attrs: { icon: ["fas", "server"] }
                        }),
                        _vm._v(" Local\n                    ")
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "span",
                      { staticClass: "mr-2" },
                      [
                        _c("fa-icon", {
                          staticClass: "mr-1",
                          attrs: { icon: ["fas", "chevron-right"] }
                        }),
                        _vm._v(" Folder\n                    ")
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "card__body" }, [
                  _c(
                    "div",
                    { staticClass: "gallery mb-12" },
                    [
                      _c("div", { staticClass: "gallery-wrapper" }, [
                        _c(
                          "div",
                          [
                            _c("fa-icon", {
                              staticClass: "text-10xl text-grey-darker",
                              attrs: { icon: ["fas", "folder"] }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _vm._m(0)
                      ]),
                      _vm._v(" "),
                      _vm._l(12, function(index) {
                        return _c(
                          "div",
                          { key: index, staticClass: "gallery-wrapper" },
                          [
                            _c(
                              "div",
                              [
                                _c("fa-icon", {
                                  staticClass: "text-10xl text-grey-darker",
                                  attrs: { icon: ["fas", "folder"] }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm._m(1, true)
                          ]
                        )
                      })
                    ],
                    2
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "gallery" },
                    _vm._l(42, function(index) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass: "gallery-wrapper flex-auto"
                        },
                        [_vm._m(2, true), _vm._v(" "), _vm._m(3, true)]
                      )
                    }),
                    0
                  )
                ])
              ]
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "leading-tight mt-2" }, [
      _c("span", { staticClass: "block text-sm truncate" }, [_vm._v("Go up")]),
      _vm._v(" "),
      _c("span", { staticClass: "text-xs font-mono text-grey-dark" }, [
        _vm._v("..")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "leading-tight mt-2" }, [
      _c("span", { staticClass: "block text-sm truncate" }, [_vm._v("Folder")]),
      _vm._v(" "),
      _c("span", { staticClass: "text-xs font-mono text-grey-dark" }, [
        _vm._v("1,341 items")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "gallery-item" }, [
      _c("img", {
        staticClass: "gallery-image",
        attrs: {
          src:
            "https://images.unsplash.com/photo-1506045412240-22980140a405?w=750&h=750&fit=crop",
          alt:
            "people holding umbrellas on a busy street at night lit by street lights and illuminated signs in Tokyo, Japan"
        }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", { staticClass: "leading-tight mt-2" }, [
      _c("span", { staticClass: "block text-sm truncate" }, [
        _vm._v("tokyo_rain_22222222223455643324345233.png")
      ]),
      _vm._v(" "),
      _c("span", { staticClass: "text-xs font-mono text-grey-dark" }, [
        _vm._v("413 KB")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Playground.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Playground.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Playground.vue?vue&type=template&id=2a00969a& */ "./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&");
/* harmony import */ var _Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Playground.vue?vue&type=script&lang=js& */ "./resources/js/views/Playground.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Playground.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Playground.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Playground.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Playground.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Playground.vue?vue&type=template&id=2a00969a& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Playground.vue?vue&type=template&id=2a00969a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Playground.vue?vue&type=template&id=2a00969a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Playground_vue_vue_type_template_id_2a00969a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL1BsYXlncm91bmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9QbGF5Z3JvdW5kLnZ1ZT8xYmIzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9QbGF5Z3JvdW5kLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvUGxheWdyb3VuZC52dWU/Mjg4YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvUGxheWdyb3VuZC52dWU/YjMyYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZHQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLHFCQURBO0FBRUEsa0JBRkE7QUFHQSxvQkFDQTtBQUNBLGFBREE7QUFFQSxxQkFGQTtBQUdBLCtCQUhBO0FBSUEsbUJBQ0E7QUFDQSxlQURBO0FBRUEsd0JBRkE7QUFHQSx3QkFIQTtBQUlBLHFCQUNBO0FBQ0EsaUJBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEEsV0FEQSxFQU1BO0FBQ0Esa0JBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEEsV0FOQTtBQUpBLFNBREE7QUFKQSxPQURBLEVBeUJBO0FBQ0EsY0FEQTtBQUVBLHVCQUZBO0FBR0Esc0NBSEE7QUFJQSxtQkFDQTtBQUNBLGdCQURBO0FBRUEsd0JBRkE7QUFHQSx3QkFIQTtBQUlBLHFCQUNBO0FBQ0Esa0JBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEEsV0FEQSxFQU1BO0FBQ0Esa0JBREE7QUFFQSwwQkFGQTtBQUdBO0FBSEEsV0FOQTtBQUpBLFNBREE7QUFKQSxPQXpCQTtBQUhBO0FBc0RBLEdBeERBO0FBMERBO0FBQ0EsWUFEQSxzQkFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0NBQW9DO0FBQ3hELGtCQUFrQix3Q0FBd0M7QUFDMUQ7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtEQUFrRDtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDNWdCQTtBQUFBO0FBQUE7QUFBQTtBQUF5RjtBQUMzQjtBQUNMOzs7QUFHekQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHFGQUFNO0FBQ1IsRUFBRSw4RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMEwsQ0FBZ0Isc1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy80MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxhcHAtdGl0bGUgaWNvbj1cImltYWdlc1wiPkZpbGUgTWFuYWdlcjwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHAtYnV0dG9uIEBjbGljay5wcmV2ZW50PVwidmlld0dyaWRcIj48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ3RoLWxhcmdlJ11cIj48L2ZhLWljb24+IEdyaWQ8L3AtYnV0dG9uPlxuICAgICAgICAgICAgPHAtYnV0dG9uIEBjbGljay5wcmV2ZW50PVwidmlld0xpc3RcIj48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ3RoLWxpc3QnXVwiPjwvZmEtaWNvbj4gTGlzdDwvcC1idXR0b24+XG4gICAgICAgICAgICA8cC1idXR0b24+PGZhLWljb24gY2xhc3M9XCJmYS1mdyBtci0yXCIgOmljb249XCJbJ2ZhcycsICd0cmFzaC1hbHQnXVwiPjwvZmEtaWNvbj4gRGVsZXRlPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgIDxwLWJ1dHRvbj48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ3JlcGx5LWFsbCddXCI+PC9mYS1pY29uPiBNb3ZlPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgIDxwLWJ1dHRvbj48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ2ZvbGRlciddXCI+PC9mYS1pY29uPiBOZXcgRm9sZGVyPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgIDxwLWJ1dHRvbj48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ3VwbG9hZCddXCI+PC9mYS1pY29uPiBVcGxvYWQ8L3AtYnV0dG9uPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cC1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dCBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIj48L3AtaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdC0tc2VwYXJhdG9yXCI+RGlzcGxheTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3VzZXJzJyB9XCIgY2xhc3M9XCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIiBleGFjdD48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ2FzdGVyaXNrJ11cIj48L2ZhLWljb24+IEV2ZXJ5dGhpbmc8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3VzZXJzJyB9XCIgY2xhc3M9XCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIiBleGFjdD48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ2ltYWdlcyddXCI+PC9mYS1pY29uPiBJbWFnZXM8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3VzZXJzJyB9XCIgY2xhc3M9XCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIiBleGFjdD48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ3ZpZGVvJ11cIj48L2ZhLWljb24+IFZpZGVvczwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAndXNlcnMnIH1cIiBjbGFzcz1cImxpc3QtLWl0ZW0gbGVhZGluZy1sb29zZVwiIGV4YWN0PjxmYS1pY29uIGNsYXNzPVwiZmEtZncgbXItMlwiIDppY29uPVwiWydmYXMnLCAndm9sdW1lLXVwJ11cIj48L2ZhLWljb24+IEF1ZGlvPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICd1c2VycycgfVwiIGNsYXNzPVwibGlzdC0taXRlbSBsZWFkaW5nLWxvb3NlXCIgZXhhY3Q+PGZhLWljb24gY2xhc3M9XCJmYS1mdyBtci0yXCIgOmljb249XCJbJ2ZhcycsICdmaWxlLWFsdCddXCI+PC9mYS1pY29uPiBEb2N1bWVudHM8L3JvdXRlci1saW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpc3QtLXNlcGFyYXRvclwiPlNvcnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICd1c2VycycgfVwiIGNsYXNzPVwibGlzdC0taXRlbSBsZWFkaW5nLWxvb3NlXCIgZXhhY3Q+PGZhLWljb24gY2xhc3M9XCJmYS1mdyBtci0yXCIgOmljb249XCJbJ2ZhcycsICdzb3J0LWFtb3VudC1kb3duJ11cIj48L2ZhLWljb24+IE5hbWU8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3VzZXJzJyB9XCIgY2xhc3M9XCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIiBleGFjdD48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ2JhcnMnXVwiPjwvZmEtaWNvbj4gRmlsZXNpemU8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3VzZXJzJyB9XCIgY2xhc3M9XCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIiBleGFjdD48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ2JhcnMnXVwiPjwvZmEtaWNvbj4gTGFzdCBNb2RpZmllZDwvcm91dGVyLWxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdC0tc2VwYXJhdG9yXCI+TG9jYXRpb25zPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC0taXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLXRyZWV2aWV3IDppdGVtcz1cImRpcmVjdG9yaWVzXCIgdi1tb2RlbD1cInNlbGVjdGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwicHJlcGVuZFwiIHNsb3Qtc2NvcGU9XCJ7IG5vZGUsIG9wZW4gfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gdi1pZj1cIm9wZW4gJiYgISBub2RlLmZpbGVcIiA6aWNvbj1cIm5vZGUuaWNvbiB8fCBbJ2ZhcycsICdmb2xkZXItb3BlbiddXCIgY2xhc3M9XCJmYS1mdyBtci0yXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gdi1pZj1cIiEgb3BlbiAmJiAhIG5vZGUuZmlsZVwiIDppY29uPVwibm9kZS5pY29uIHx8IFsnZmFzJywgJ2ZvbGRlciddXCIgY2xhc3M9XCJmYS1mdyBtci0yXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC10cmVldmlldz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3AtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cC1kYXRhdGFibGUgbmFtZT1cImxpc3Qtdmlld1wiIGVuZHBvaW50PVwiL2RhdGF0YWJsZS91c2Vyc1wiIHNvcnQtYnk9XCJuYW1lXCIgOnBlci1wYWdlPVwiMTBcIiBuby1maWx0ZXJpbmcgdi1zaG93PVwibGlzdFZpZXdcIj5cbiAgICAgICAgICAgICAgICA8L3AtZGF0YXRhYmxlPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiB2LXNob3c9XCIhbGlzdFZpZXdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0ZXIgcHgtOCBweS0yIHRleHQtZ3JleS1kYXJrZXIgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnc2VydmVyJ11cIiBjbGFzcz1cImZhLWZ3XCI+PC9mYS1pY29uPiBMb2NhbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NoZXZyb24tcmlnaHQnXVwiIGNsYXNzPVwibXItMVwiPjwvZmEtaWNvbj4gRm9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeSBtYi0xMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnZm9sZGVyJ11cIiBjbGFzcz1cInRleHQtMTB4bCB0ZXh0LWdyZXktZGFya2VyXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRpbmctdGlnaHQgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LXNtIHRydW5jYXRlXCI+R28gdXA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQteHMgZm9udC1tb25vIHRleHQtZ3JleS1kYXJrXCI+Li48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LXdyYXBwZXJcIiB2LWZvcj1cImluZGV4IGluIDEyXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2ZvbGRlciddXCIgY2xhc3M9XCJ0ZXh0LTEweGwgdGV4dC1ncmV5LWRhcmtlclwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJsZWFkaW5nLXRpZ2h0IG10LTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdGV4dC1zbSB0cnVuY2F0ZVwiPkZvbGRlcjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14cyBmb250LW1vbm8gdGV4dC1ncmV5LWRhcmtcIj4xLDM0MSBpdGVtczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnktd3JhcHBlciBmbGV4LWF1dG9cIiB2LWZvcj1cImluZGV4IGluIDQyXCIgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJnYWxsZXJ5LWltYWdlXCIgc3JjPVwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDYwNDU0MTIyNDAtMjI5ODAxNDBhNDA1P3c9NzUwJmg9NzUwJmZpdD1jcm9wXCIgYWx0PVwicGVvcGxlIGhvbGRpbmcgdW1icmVsbGFzIG9uIGEgYnVzeSBzdHJlZXQgYXQgbmlnaHQgbGl0IGJ5IHN0cmVldCBsaWdodHMgYW5kIGlsbHVtaW5hdGVkIHNpZ25zIGluIFRva3lvLCBKYXBhblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRpbmctdGlnaHQgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LXNtIHRydW5jYXRlXCI+dG9reW9fcmFpbl8yMjIyMjIyMjIyMzQ1NTY0MzMyNDM0NTIzMy5wbmc8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQteHMgZm9udC1tb25vIHRleHQtZ3JleS1kYXJrXCI+NDEzIEtCPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbGlzdFZpZXc6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB7fSxcbiAgICAgICAgICAgICAgICBkaXJlY3RvcmllczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdMb2NhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBbJ2ZhcycsICdzZXJ2ZXInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0ZvbGRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sZGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdGb2xkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sZGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogMTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0ZvbGRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAxMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdCYWNrdXBzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFsnZmFiJywgJ2RpZ2l0YWwtb2NlYW4nXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogMTYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdGb2xkZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogMTcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0ZvbGRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAyMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRm9sZGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB2aWV3TGlzdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RWaWV3ID0gdHJ1ZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmlld0dyaWQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saXN0VmlldyA9IGZhbHNlXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwiaW1hZ2VzXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJGaWxlIE1hbmFnZXJcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS52aWV3R3JpZCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IG1yLTJcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ0aC1sYXJnZVwiXSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgR3JpZFwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmlld0xpc3QoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0yXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGgtbGlzdFwiXSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgTGlzdFwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgbXItMlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRyYXNoLWFsdFwiXSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgRGVsZXRlXCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0yXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwicmVwbHktYWxsXCJdIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBNb3ZlXCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0yXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiZm9sZGVyXCJdIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBOZXcgRm9sZGVyXCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0yXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidXBsb2FkXCJdIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBVcGxvYWRcIilcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2lkZS1jb250YWluZXJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInAtY2FyZFwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwic2VhcmNoXCIsIHBsYWNlaG9sZGVyOiBcIlNlYXJjaFwiIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtLXNlcGFyYXRvclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEaXNwbGF5XCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC0taXRlbSBsZWFkaW5nLWxvb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcInVzZXJzXCIgfSwgZXhhY3Q6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJhc3Rlcmlza1wiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBFdmVyeXRoaW5nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwidXNlcnNcIiB9LCBleGFjdDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImltYWdlc1wiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBJbWFnZXNcIilcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtLWl0ZW0gbGVhZGluZy1sb29zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJ1c2Vyc1wiIH0sIGV4YWN0OiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IG1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidmlkZW9cIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgVmlkZW9zXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwidXNlcnNcIiB9LCBleGFjdDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInZvbHVtZS11cFwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBBdWRpb1wiKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC0taXRlbSBsZWFkaW5nLWxvb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcInVzZXJzXCIgfSwgZXhhY3Q6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJmaWxlLWFsdFwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBEb2N1bWVudHNcIilcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC0tc2VwYXJhdG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNvcnRcIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwidXNlcnNcIiB9LCBleGFjdDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInNvcnQtYW1vdW50LWRvd25cIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgTmFtZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC0taXRlbSBsZWFkaW5nLWxvb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcInVzZXJzXCIgfSwgZXhhY3Q6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJiYXJzXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEZpbGVzaXplXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwidXNlcnNcIiB9LCBleGFjdDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImJhcnNcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgTGFzdCBNb2RpZmllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LS1zZXBhcmF0b3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTG9jYXRpb25zXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC0taXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLXRyZWV2aWV3XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbXM6IF92bS5kaXJlY3RvcmllcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwicHJlcGVuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHJlZikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHJlZi5ub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvcGVuID0gcmVmLm9wZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuICYmICFub2RlLmZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IG5vZGUuaWNvbiB8fCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9sZGVyLW9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhb3BlbiAmJiAhbm9kZS5maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBub2RlLmljb24gfHwgW1wiZmFzXCIsIFwiZm9sZGVyXCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJwLWRhdGF0YWJsZVwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxpc3RWaWV3LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsaXN0Vmlld1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibGlzdC12aWV3XCIsXG4gICAgICAgICAgICAgICAgZW5kcG9pbnQ6IFwiL2RhdGF0YWJsZS91c2Vyc1wiLFxuICAgICAgICAgICAgICAgIFwic29ydC1ieVwiOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICBcInBlci1wYWdlXCI6IDEwLFxuICAgICAgICAgICAgICAgIFwibm8tZmlsdGVyaW5nXCI6IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIV92bS5saXN0VmlldyxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhbGlzdFZpZXdcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWIgYm9yZGVyLWdyZXktbGlnaHRlciBweC04IHB5LTIgdGV4dC1ncmV5LWRhcmtlciBmbGV4IGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1yLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInNlcnZlclwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBMb2NhbFxcbiAgICAgICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJjaGV2cm9uLXJpZ2h0XCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEZvbGRlclxcbiAgICAgICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeSBtYi0xMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnktd3JhcHBlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtMTB4bCB0ZXh0LWdyZXktZGFya2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJmb2xkZXJcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woMTIsIGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS13cmFwcGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LTEweGwgdGV4dC1ncmV5LWRhcmtlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImZvbGRlclwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSwgdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbCg0MiwgZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LXdyYXBwZXIgZmxleC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl9tKDIsIHRydWUpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMywgdHJ1ZSldXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibGVhZGluZy10aWdodCBtdC0yXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2sgdGV4dC1zbSB0cnVuY2F0ZVwiIH0sIFtfdm0uX3YoXCJHbyB1cFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMgZm9udC1tb25vIHRleHQtZ3JleS1kYXJrXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCIuLlwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJsZWFkaW5nLXRpZ2h0IG10LTJcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LXNtIHRydW5jYXRlXCIgfSwgW192bS5fdihcIkZvbGRlclwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMgZm9udC1tb25vIHRleHQtZ3JleS1kYXJrXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCIxLDM0MSBpdGVtc1wiKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnktaXRlbVwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS1pbWFnZVwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgIFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE1MDYwNDU0MTIyNDAtMjI5ODAxNDBhNDA1P3c9NzUwJmg9NzUwJmZpdD1jcm9wXCIsXG4gICAgICAgICAgYWx0OlxuICAgICAgICAgICAgXCJwZW9wbGUgaG9sZGluZyB1bWJyZWxsYXMgb24gYSBidXN5IHN0cmVldCBhdCBuaWdodCBsaXQgYnkgc3RyZWV0IGxpZ2h0cyBhbmQgaWxsdW1pbmF0ZWQgc2lnbnMgaW4gVG9reW8sIEphcGFuXCJcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJsZWFkaW5nLXRpZ2h0IG10LTJcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LXNtIHRydW5jYXRlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJ0b2t5b19yYWluXzIyMjIyMjIyMjIzNDU1NjQzMzI0MzQ1MjMzLnBuZ1wiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cyBmb250LW1vbm8gdGV4dC1ncmV5LWRhcmtcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIjQxMyBLQlwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGxheWdyb3VuZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmEwMDk2OWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGxheWdyb3VuZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BsYXlncm91bmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyYTAwOTY5YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyYTAwOTY5YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyYTAwOTY5YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGxheWdyb3VuZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmEwMDk2OWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmEwMDk2OWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9QbGF5Z3JvdW5kLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGxheWdyb3VuZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGxheWdyb3VuZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGxheWdyb3VuZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmEwMDk2OWEmXCIiXSwic291cmNlUm9vdCI6IiJ9