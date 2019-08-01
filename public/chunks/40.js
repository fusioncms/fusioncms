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
      view: 'grid',
      selected: {},
      files: [],
      directories: [],
      currentDirectory: null // directories: [
      //     {
      //         id: 1,
      //         name: 'Local',
      //         icon: ['fas', 'server'],
      //         children: [
      //             {
      //                 id: 4,
      //                 name: 'Folder',
      //                 isFolder: true,
      //                 children: [
      //                     {
      //                         id: 5,
      //                         name: 'Folder',
      //                         isFolder: true,
      //                     },
      //                     {
      //                         id: 10,
      //                         name: 'Folder',
      //                         isFolder: true,
      //                     }
      //                 ]
      //             }
      //         ]
      //     },
      //     {
      //         id: 13,
      //         name: 'Backups',
      //         icon: ['fab', 'digital-ocean'],
      //         children: [
      //             {
      //                 id: 16,
      //                 name: 'Folder',
      //                 isFolder: true,
      //                 children: [
      //                     {
      //                         id: 17,
      //                         name: 'Folder',
      //                         isFolder: true,
      //                     },
      //                     {
      //                         id: 22,
      //                         name: 'Folder',
      //                         isFolder: true,
      //                     }
      //                 ]
      //             }
      //         ]
      //     }
      // ]

    };
  },
  methods: {
    viewList: function viewList() {
      this.view = 'list';
    },
    viewGrid: function viewGrid() {
      this.view = 'grid';
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/files'), axios.get('/api/directories')]).then(axios.spread(function (files, directories) {
      next(function (vm) {
        vm.files = files.data.data;
        vm.directories = directories.data.data;
      });
    }));
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
            {
              directives: [
                { name: "modal", rawName: "v-modal:upload", arg: "upload" }
              ]
            },
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
                    _vm.directories.length
                      ? _c("div", [
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
                                scopedSlots: _vm._u(
                                  [
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
                                                  icon: node.icon || [
                                                    "fas",
                                                    "folder"
                                                  ]
                                                }
                                              })
                                            : _vm._e()
                                        ]
                                      }
                                    }
                                  ],
                                  null,
                                  false,
                                  2839359759
                                ),
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
                        ])
                      : _vm._e()
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
                  value: _vm.view == "list",
                  expression: "view == 'list'"
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
                    value: _vm.view == "grid",
                    expression: "view == 'grid'"
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
                  _vm.directories.length
                    ? _c(
                        "div",
                        { staticClass: "gallery mb-12" },
                        [
                          _vm.currentDirectory != null
                            ? _c("div", { staticClass: "gallery-wrapper" }, [
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
                              ])
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(_vm.directories, function(directory) {
                            return _c(
                              "div",
                              {
                                key: directory.id,
                                staticClass: "gallery-wrapper"
                              },
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
                                _c("p", { staticClass: "leading-tight mt-2" }, [
                                  _c(
                                    "span",
                                    { staticClass: "block text-sm truncate" },
                                    [_vm._v(_vm._s(directory.name))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "text-xs font-mono text-grey-dark"
                                    },
                                    [_vm._v("1,341 items")]
                                  )
                                ])
                              ]
                            )
                          })
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.files.length
                    ? _c(
                        "div",
                        { staticClass: "gallery" },
                        _vm._l(_vm.files, function(file) {
                          return _c(
                            "div",
                            {
                              key: file.uuid,
                              staticClass: "gallery-wrapper flex-auto"
                            },
                            [
                              _c("div", { staticClass: "gallery-item" }, [
                                _c("img", {
                                  staticClass: "gallery-image",
                                  attrs: {
                                    src: file.path,
                                    alt: file.description
                                  }
                                })
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "leading-tight mt-2" }, [
                                _c(
                                  "span",
                                  { staticClass: "block text-sm truncate" },
                                  [_vm._v(_vm._s(file.name))]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass:
                                      "text-xs font-mono text-grey-dark"
                                  },
                                  [_vm._v(_vm._s(file.extension))]
                                )
                              ])
                            ]
                          )
                        }),
                        0
                      )
                    : _vm._e()
                ])
              ]
            )
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
              attrs: {
                name: "upload",
                title: "Upload Files",
                "no-footer": "",
                large: ""
              }
            },
            [_c("p-upload")],
            1
          )
        ],
        1
      )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL1BsYXlncm91bmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9QbGF5Z3JvdW5kLnZ1ZT8xYmIzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9QbGF5Z3JvdW5kLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvUGxheWdyb3VuZC52dWU/Mjg4YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvUGxheWdyb3VuZC52dWU/YjMyYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNIQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsa0JBRkE7QUFHQSxlQUhBO0FBSUEscUJBSkE7QUFLQSw0QkFMQSxDQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBdkRBO0FBeURBLEdBM0RBO0FBNkRBO0FBQ0EsWUFEQSxzQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBLFlBTEEsc0JBS0E7QUFDQTtBQUNBO0FBUEEsR0E3REE7QUF1RUEsa0JBdkVBLDRCQXVFQSxFQXZFQSxFQXVFQSxJQXZFQSxFQXVF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Q2pDO0FBQ0E7QUFDQSx1Q0FBdUMsb0NBQW9DO0FBQzNFO0FBQ0E7QUFDQSxtQ0FBbUMsd0NBQXdDO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxlQUFlLEVBQUU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLG9DQUFvQztBQUN4RCxrQkFBa0Isd0NBQXdDO0FBQzFEO0FBQ0Esa0JBQWtCLGtEQUFrRDtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDM2pCQTtBQUFBO0FBQUE7QUFBQTtBQUF5RjtBQUMzQjtBQUNMOzs7QUFHekQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHFGQUFNO0FBQ1IsRUFBRSw4RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMEwsQ0FBZ0Isc1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy80MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxhcHAtdGl0bGUgaWNvbj1cImltYWdlc1wiPkZpbGUgTWFuYWdlcjwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPHAtYnV0dG9uIEBjbGljay5wcmV2ZW50PVwidmlld0dyaWRcIj48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ3RoLWxhcmdlJ11cIj48L2ZhLWljb24+IEdyaWQ8L3AtYnV0dG9uPlxuICAgICAgICAgICAgPHAtYnV0dG9uIEBjbGljay5wcmV2ZW50PVwidmlld0xpc3RcIj48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ3RoLWxpc3QnXVwiPjwvZmEtaWNvbj4gTGlzdDwvcC1idXR0b24+XG4gICAgICAgICAgICA8cC1idXR0b24+PGZhLWljb24gY2xhc3M9XCJmYS1mdyBtci0yXCIgOmljb249XCJbJ2ZhcycsICd0cmFzaC1hbHQnXVwiPjwvZmEtaWNvbj4gRGVsZXRlPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgIDxwLWJ1dHRvbj48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ3JlcGx5LWFsbCddXCI+PC9mYS1pY29uPiBNb3ZlPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgIDxwLWJ1dHRvbj48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ2ZvbGRlciddXCI+PC9mYS1pY29uPiBOZXcgRm9sZGVyPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOnVwbG9hZD48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ3VwbG9hZCddXCI+PC9mYS1pY29uPiBVcGxvYWQ8L3AtYnV0dG9uPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cC1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dCBuYW1lPVwic2VhcmNoXCIgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIj48L3AtaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdC0tc2VwYXJhdG9yXCI+RGlzcGxheTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3VzZXJzJyB9XCIgY2xhc3M9XCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIiBleGFjdD48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ2FzdGVyaXNrJ11cIj48L2ZhLWljb24+IEV2ZXJ5dGhpbmc8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3VzZXJzJyB9XCIgY2xhc3M9XCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIiBleGFjdD48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ2ltYWdlcyddXCI+PC9mYS1pY29uPiBJbWFnZXM8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3VzZXJzJyB9XCIgY2xhc3M9XCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIiBleGFjdD48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ3ZpZGVvJ11cIj48L2ZhLWljb24+IFZpZGVvczwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAndXNlcnMnIH1cIiBjbGFzcz1cImxpc3QtLWl0ZW0gbGVhZGluZy1sb29zZVwiIGV4YWN0PjxmYS1pY29uIGNsYXNzPVwiZmEtZncgbXItMlwiIDppY29uPVwiWydmYXMnLCAndm9sdW1lLXVwJ11cIj48L2ZhLWljb24+IEF1ZGlvPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICd1c2VycycgfVwiIGNsYXNzPVwibGlzdC0taXRlbSBsZWFkaW5nLWxvb3NlXCIgZXhhY3Q+PGZhLWljb24gY2xhc3M9XCJmYS1mdyBtci0yXCIgOmljb249XCJbJ2ZhcycsICdmaWxlLWFsdCddXCI+PC9mYS1pY29uPiBEb2N1bWVudHM8L3JvdXRlci1saW5rPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpc3QtLXNlcGFyYXRvclwiPlNvcnQ8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICd1c2VycycgfVwiIGNsYXNzPVwibGlzdC0taXRlbSBsZWFkaW5nLWxvb3NlXCIgZXhhY3Q+PGZhLWljb24gY2xhc3M9XCJmYS1mdyBtci0yXCIgOmljb249XCJbJ2ZhcycsICdzb3J0LWFtb3VudC1kb3duJ11cIj48L2ZhLWljb24+IE5hbWU8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3VzZXJzJyB9XCIgY2xhc3M9XCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIiBleGFjdD48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ2JhcnMnXVwiPjwvZmEtaWNvbj4gRmlsZXNpemU8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ3VzZXJzJyB9XCIgY2xhc3M9XCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIiBleGFjdD48ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTJcIiA6aWNvbj1cIlsnZmFzJywgJ2JhcnMnXVwiPjwvZmEtaWNvbj4gTGFzdCBNb2RpZmllZDwvcm91dGVyLWxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImRpcmVjdG9yaWVzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGlzdC0tc2VwYXJhdG9yXCI+TG9jYXRpb25zPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QtLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtdHJlZXZpZXcgOml0ZW1zPVwiZGlyZWN0b3JpZXNcIiB2LW1vZGVsPVwic2VsZWN0ZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwicHJlcGVuZFwiIHNsb3Qtc2NvcGU9XCJ7IG5vZGUsIG9wZW4gfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIHYtaWY9XCJvcGVuICYmICEgbm9kZS5maWxlXCIgOmljb249XCJub2RlLmljb24gfHwgWydmYXMnLCAnZm9sZGVyLW9wZW4nXVwiIGNsYXNzPVwiZmEtZncgbXItMlwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiB2LWlmPVwiISBvcGVuICYmICEgbm9kZS5maWxlXCIgOmljb249XCJub2RlLmljb24gfHwgWydmYXMnLCAnZm9sZGVyJ11cIiBjbGFzcz1cImZhLWZ3IG1yLTJcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtdHJlZXZpZXc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9wLWNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHAtZGF0YXRhYmxlIG5hbWU9XCJsaXN0LXZpZXdcIiBlbmRwb2ludD1cIi9kYXRhdGFibGUvdXNlcnNcIiBzb3J0LWJ5PVwibmFtZVwiIDpwZXItcGFnZT1cIjEwXCIgbm8tZmlsdGVyaW5nIHYtc2hvdz1cInZpZXcgPT0gJ2xpc3QnXCI+XG4gICAgICAgICAgICAgICAgPC9wLWRhdGF0YWJsZT5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgdi1zaG93PVwidmlldyA9PSAnZ3JpZCdcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0ZXIgcHgtOCBweS0yIHRleHQtZ3JleS1kYXJrZXIgZmxleCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXItMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnc2VydmVyJ11cIiBjbGFzcz1cImZhLWZ3XCI+PC9mYS1pY29uPiBMb2NhbFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NoZXZyb24tcmlnaHQnXVwiIGNsYXNzPVwibXItMVwiPjwvZmEtaWNvbj4gRm9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeSBtYi0xMlwiIHYtaWY9XCJkaXJlY3Rvcmllcy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeS13cmFwcGVyXCIgdi1pZj1cImN1cnJlbnREaXJlY3RvcnkgIT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdmb2xkZXInXVwiIGNsYXNzPVwidGV4dC0xMHhsIHRleHQtZ3JleS1kYXJrZXJcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZGluZy10aWdodCBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHRleHQtc20gdHJ1bmNhdGVcIj5HbyB1cDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14cyBmb250LW1vbm8gdGV4dC1ncmV5LWRhcmtcIj4uLjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnktd3JhcHBlclwiIHYtZm9yPVwiZGlyZWN0b3J5IGluIGRpcmVjdG9yaWVzXCIgOmtleT1cImRpcmVjdG9yeS5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdmb2xkZXInXVwiIGNsYXNzPVwidGV4dC0xMHhsIHRleHQtZ3JleS1kYXJrZXJcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibGVhZGluZy10aWdodCBtdC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHRleHQtc20gdHJ1bmNhdGVcIj57eyBkaXJlY3RvcnkubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC14cyBmb250LW1vbm8gdGV4dC1ncmV5LWRhcmtcIj4xLDM0MSBpdGVtczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5XCIgdi1pZj1cImZpbGVzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LXdyYXBwZXIgZmxleC1hdXRvXCIgdi1mb3I9XCJmaWxlIGluIGZpbGVzXCIgOmtleT1cImZpbGUudXVpZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiZ2FsbGVyeS1pbWFnZVwiIDpzcmM9XCJmaWxlLnBhdGhcIiA6YWx0PVwiZmlsZS5kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8aW1nIGNsYXNzPVwiZ2FsbGVyeS1pbWFnZVwiIHNyYz1cImh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0xNTA2MDQ1NDEyMjQwLTIyOTgwMTQwYTQwNT93PTc1MCZoPTc1MCZmaXQ9Y3JvcFwiIDphbHQ9XCJmaWxlLmRlc2NyaXB0aW9uXCI+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImxlYWRpbmctdGlnaHQgbXQtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LXNtIHRydW5jYXRlXCI+e3sgZmlsZS5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LXhzIGZvbnQtbW9ubyB0ZXh0LWdyZXktZGFya1wiPnt7IGZpbGUuZXh0ZW5zaW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cIm1vZGFsc1wiPlxuICAgICAgICAgICAgPHAtbW9kYWwgbmFtZT1cInVwbG9hZFwiIHRpdGxlPVwiVXBsb2FkIEZpbGVzXCIgbm8tZm9vdGVyIGxhcmdlPlxuICAgICAgICAgICAgICAgIDxwLXVwbG9hZD48L3AtdXBsb2FkPlxuICAgICAgICAgICAgPC9wLW1vZGFsPlxuICAgICAgICA8L3BvcnRhbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2aWV3OiAnZ3JpZCcsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHt9LFxuICAgICAgICAgICAgICAgIGZpbGVzOiBbXSxcbiAgICAgICAgICAgICAgICBkaXJlY3RvcmllczogW10sXG4gICAgICAgICAgICAgICAgY3VycmVudERpcmVjdG9yeTogbnVsbCxcbiAgICAgICAgICAgICAgICAvLyBkaXJlY3RvcmllczogW1xuICAgICAgICAgICAgICAgIC8vICAgICB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5hbWU6ICdMb2NhbCcsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpY29uOiBbJ2ZhcycsICdzZXJ2ZXInXSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbmFtZTogJ0ZvbGRlcicsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlzRm9sZGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdGb2xkZXInLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGlzRm9sZGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZDogMTAsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0ZvbGRlcicsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBdXG4gICAgICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAgICAgLy8gICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlkOiAxMyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5hbWU6ICdCYWNrdXBzJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGljb246IFsnZmFiJywgJ2RpZ2l0YWwtb2NlYW4nXSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpZDogMTYsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIG5hbWU6ICdGb2xkZXInLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBpc0ZvbGRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpZDogMTcsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ0ZvbGRlcicsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgaXNGb2xkZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAyMixcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnRm9sZGVyJyxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBpc0ZvbGRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgIC8vIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICB2aWV3TGlzdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnZpZXcgPSAnbGlzdCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZpZXdHcmlkKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudmlldyA9ICdncmlkJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9maWxlcycpLFxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9kaXJlY3RvcmllcycpLFxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKGZpbGVzLCBkaXJlY3Rvcmllcykge1xuICAgICAgICAgICAgICAgIG5leHQoZnVuY3Rpb24odm0pIHtcbiAgICAgICAgICAgICAgICAgICAgdm0uZmlsZXMgPSBmaWxlcy5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgdm0uZGlyZWN0b3JpZXMgPSBkaXJlY3Rvcmllcy5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImltYWdlc1wiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiRmlsZSBNYW5hZ2VyXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udmlld0dyaWQoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0yXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGgtbGFyZ2VcIl0gfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIEdyaWRcIilcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnZpZXdMaXN0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgbXItMlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRoLWxpc3RcIl0gfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIExpc3RcIilcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IG1yLTJcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ0cmFzaC1hbHRcIl0gfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIERlbGV0ZVwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgbXItMlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInJlcGx5LWFsbFwiXSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgTW92ZVwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgbXItMlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImZvbGRlclwiXSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgTmV3IEZvbGRlclwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6IFwibW9kYWxcIiwgcmF3TmFtZTogXCJ2LW1vZGFsOnVwbG9hZFwiLCBhcmc6IFwidXBsb2FkXCIgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IG1yLTJcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ1cGxvYWRcIl0gfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFVwbG9hZFwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaWRlLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicC1jYXJkXCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJzZWFyY2hcIiwgcGxhY2Vob2xkZXI6IFwiU2VhcmNoXCIgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC0tc2VwYXJhdG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRpc3BsYXlcIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwidXNlcnNcIiB9LCBleGFjdDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImFzdGVyaXNrXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEV2ZXJ5dGhpbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtLWl0ZW0gbGVhZGluZy1sb29zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJ1c2Vyc1wiIH0sIGV4YWN0OiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IG1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiaW1hZ2VzXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEltYWdlc1wiKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC0taXRlbSBsZWFkaW5nLWxvb3NlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcInVzZXJzXCIgfSwgZXhhY3Q6IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ2aWRlb1wiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBWaWRlb3NcIilcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtLWl0ZW0gbGVhZGluZy1sb29zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJ1c2Vyc1wiIH0sIGV4YWN0OiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IG1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidm9sdW1lLXVwXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIEF1ZGlvXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwidXNlcnNcIiB9LCBleGFjdDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImZpbGUtYWx0XCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIERvY3VtZW50c1wiKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LS1zZXBhcmF0b3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU29ydFwiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtLWl0ZW0gbGVhZGluZy1sb29zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJ1c2Vyc1wiIH0sIGV4YWN0OiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IG1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwic29ydC1hbW91bnQtZG93blwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBOYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwidXNlcnNcIiB9LCBleGFjdDogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImJhcnNcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgRmlsZXNpemVcIilcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtLWl0ZW0gbGVhZGluZy1sb29zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJ1c2Vyc1wiIH0sIGV4YWN0OiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IG1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiYmFyc1wiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBMYXN0IE1vZGlmaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5kaXJlY3Rvcmllcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC0tc2VwYXJhdG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkxvY2F0aW9uc1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtLWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC10cmVldmlld1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW1zOiBfdm0uZGlyZWN0b3JpZXMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJwcmVwZW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbm9kZSA9IHJlZi5ub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9wZW4gPSByZWYub3BlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGVuICYmICFub2RlLmZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgbXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogbm9kZS5pY29uIHx8IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9sZGVyLW9wZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhb3BlbiAmJiAhbm9kZS5maWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IG1yLTJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IG5vZGUuaWNvbiB8fCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDI4MzkzNTk3NTlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInAtZGF0YXRhYmxlXCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udmlldyA9PSBcImxpc3RcIixcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidmlldyA9PSAnbGlzdCdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImxpc3Qtdmlld1wiLFxuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBcIi9kYXRhdGFibGUvdXNlcnNcIixcbiAgICAgICAgICAgICAgICBcInNvcnQtYnlcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgXCJwZXItcGFnZVwiOiAxMCxcbiAgICAgICAgICAgICAgICBcIm5vLWZpbHRlcmluZ1wiOiBcIlwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS52aWV3ID09IFwiZ3JpZFwiLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZpZXcgPT0gJ2dyaWQnXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmRcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1iIGJvcmRlci1ncmV5LWxpZ2h0ZXIgcHgtOCBweS0yIHRleHQtZ3JleS1kYXJrZXIgZmxleCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtci0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJzZXJ2ZXJcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgTG9jYWxcXG4gICAgICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1yLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY2hldnJvbi1yaWdodFwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBGb2xkZXJcXG4gICAgICAgICAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5kaXJlY3Rvcmllcy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnkgbWItMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudERpcmVjdG9yeSAhPSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnktd3JhcHBlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LTEweGwgdGV4dC1ncmV5LWRhcmtlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJmb2xkZXJcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGlyZWN0b3JpZXMsIGZ1bmN0aW9uKGRpcmVjdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZGlyZWN0b3J5LmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LXdyYXBwZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LTEweGwgdGV4dC1ncmV5LWRhcmtlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJmb2xkZXJcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibGVhZGluZy10aWdodCBtdC0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtc20gdHJ1bmNhdGVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZGlyZWN0b3J5Lm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LXhzIGZvbnQtbW9ubyB0ZXh0LWdyZXktZGFya1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIjEsMzQxIGl0ZW1zXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZmlsZXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJnYWxsZXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZmlsZXMsIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWxlLnV1aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LXdyYXBwZXIgZmxleC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS1pbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IGZpbGUucGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogZmlsZS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImxlYWRpbmctdGlnaHQgbXQtMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LXNtIHRydW5jYXRlXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhmaWxlLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC14cyBmb250LW1vbm8gdGV4dC1ncmV5LWRhcmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZmlsZS5leHRlbnNpb24pKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwibW9kYWxzXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtbW9kYWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInVwbG9hZFwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVwbG9hZCBGaWxlc1wiLFxuICAgICAgICAgICAgICAgIFwibm8tZm9vdGVyXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgbGFyZ2U6IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInAtdXBsb2FkXCIpXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwibGVhZGluZy10aWdodCBtdC0yXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2sgdGV4dC1zbSB0cnVuY2F0ZVwiIH0sIFtfdm0uX3YoXCJHbyB1cFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMgZm9udC1tb25vIHRleHQtZ3JleS1kYXJrXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCIuLlwiKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUGxheWdyb3VuZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmEwMDk2OWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUGxheWdyb3VuZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1BsYXlncm91bmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyYTAwOTY5YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyYTAwOTY5YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyYTAwOTY5YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUGxheWdyb3VuZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmEwMDk2OWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmEwMDk2OWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9QbGF5Z3JvdW5kLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGxheWdyb3VuZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGxheWdyb3VuZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUGxheWdyb3VuZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmEwMDk2OWEmXCIiXSwic291cmNlUm9vdCI6IiJ9