(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Views/Grid.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Views/Grid.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [// require('../../../mixins/fileview').default,
  __webpack_require__(/*! ../../../mixins/dragnselect */ "./resources/js/mixins/dragnselect.js")["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Views/List.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Views/List.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mixins: [// require('../../../mixins/fileview').default,
  __webpack_require__(/*! ../../../mixins/dragnselect */ "./resources/js/mixins/dragnselect.js")["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Field.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Asset/Field.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_FileManager_Actions_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FileManager/Actions/Breadcrumb.vue */ "./resources/js/components/FileManager/Actions/Breadcrumb.vue");
/* harmony import */ var _components_FileManager_Actions_Display_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FileManager/Actions/Display.vue */ "./resources/js/components/FileManager/Actions/Display.vue");
/* harmony import */ var _components_FileManager_Actions_Search_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FileManager/Actions/Search.vue */ "./resources/js/components/FileManager/Actions/Search.vue");
/* harmony import */ var _components_FileManager_Actions_Sort_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FileManager/Actions/Sort.vue */ "./resources/js/components/FileManager/Actions/Sort.vue");
/* harmony import */ var _components_FileManager_Actions_View_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/FileManager/Actions/View.vue */ "./resources/js/components/FileManager/Actions/View.vue");
/* harmony import */ var _components_FileManager_Views_Grid_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/FileManager/Views/Grid.vue */ "./resources/js/components/FileManager/Views/Grid.vue");
/* harmony import */ var _components_FileManager_Views_List_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/FileManager/Views/List.vue */ "./resources/js/components/FileManager/Views/List.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'asset-fieldtype',
  components: {
    'display-action': _components_FileManager_Actions_Display_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'breadcrumb-action': _components_FileManager_Actions_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'search-action': _components_FileManager_Actions_Search_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'sort-action': _components_FileManager_Actions_Sort_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    'view-action': _components_FileManager_Actions_View_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    'grid-view': _components_FileManager_Views_Grid_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    'list-view': _components_FileManager_Views_List_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  data: function data() {
    return {
      modalOpen: false,
      selected: {}
    };
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      type: Object,
      required: false,
      "default": function _default() {}
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    selectedFiles: 'filemanager/getSelectedFiles',
    files: 'filemanager/getFiles',
    view: 'filemanager/getView'
  }), {
    hasSelection: function hasSelection() {
      return _.size(this.selected) > 0;
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    clearFileSelection: 'filemanager/clearFileSelection',
    reset: 'filemanager/reset'
  }), {
    add: function add() {
      var _this = this;

      _.forEach(this.selectedFiles, function (id) {
        _this.$set(_this.selected, id, _.find(_this.files, ['id', id]));
      }); // save & clear..


      this.$emit('input', this.selected);
      this.clearFileSelection();
    },
    remove: function remove(id) {
      this.$delete(this.selected, id);
    },
    open: function open() {
      this.modalOpen = true;
      this.reset();
      this.selected = Object.assign({}, this.value);
    },
    close: function close() {
      this.modalOpen = false;
      this.reset();
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Views/Grid.vue?vue&type=template&id=50929270&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Views/Grid.vue?vue&type=template&id=50929270& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "gallery-container" }, [
    _c(
      "div",
      { staticClass: "gallery mb-12" },
      [
        _vm.currentDirectory
          ? _c("file-manager-directory", {
              key: "directory-" + _vm.currentDirectory,
              attrs: {
                directory: { id: _vm.parentDirectory, name: "Go up" },
                subtitle: "..",
                unselectable: ""
              }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.directories, function(directory) {
          return _c("file-manager-directory", {
            key: directory.id,
            attrs: {
              directory: directory,
              subtitle: directory.files_count + " items"
            }
          })
        })
      ],
      2
    ),
    _vm._v(" "),
    _vm.files.length
      ? _c(
          "div",
          { staticClass: "gallery" },
          _vm._l(_vm.files, function(file) {
            return _c(
              "div",
              { key: file.uuid },
              [_c("file-manager-file", { attrs: { file: file } })],
              1
            )
          }),
          0
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Views/List.vue?vue&type=template&id=e45b6870&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Views/List.vue?vue&type=template&id=e45b6870& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "gallery-container" },
    [
      _vm._m(0),
      _vm._v(" "),
      _vm.currentDirectory
        ? _c(
            "div",
            {
              key: "directory-" + _vm.currentDirectory,
              staticClass: "flex p-3"
            },
            [
              _c(
                "div",
                { staticClass: "w-1/5" },
                [
                  _c("file-manager-directory", {
                    attrs: {
                      small: "",
                      unselectable: "",
                      directory: { id: _vm.parentDirectory, name: "Go up" }
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "w-1/5" }, [_vm._v("..")]),
              _vm._v(" "),
              _c("div", { staticClass: "w-1/5" }),
              _vm._v(" "),
              _c("div", { staticClass: "w-1/5" }),
              _vm._v(" "),
              _c("div", { staticClass: "w-1/5" })
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm._l(_vm.directories, function(directory) {
        return _c("div", { key: directory.id, staticClass: "flex p-3" }, [
          _c(
            "div",
            { staticClass: "w-1/5" },
            [
              _c("file-manager-directory", {
                attrs: { small: "", directory: directory }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "w-1/5" }, [_vm._v(_vm._s(directory.name))]),
          _vm._v(" "),
          _c("div", { staticClass: "w-1/5" }),
          _vm._v(" "),
          _c("div", { staticClass: "w-1/5" }),
          _vm._v(" "),
          _c("div", { staticClass: "w-1/5" }, [
            _vm._v(
              _vm._s(_vm.$moment(directory.updated_at).format("MMM Do, YYYY"))
            )
          ])
        ])
      }),
      _vm._v(" "),
      _vm._l(_vm.files, function(file) {
        return _c("div", { key: file.uuid, staticClass: "flex p-3" }, [
          _c("div", { staticClass: "flex w-full" }, [
            _c(
              "div",
              { staticClass: "w-1/5" },
              [_c("file-manager-file", { attrs: { small: "", file: file } })],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "w-1/5" }, [_vm._v(_vm._s(file.name))]),
            _vm._v(" "),
            _c("div", { staticClass: "w-1/5" }, [
              _vm._v(_vm._s(_vm._f("bytes")(file.bytes)))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-1/5" }, [
              _vm._v(_vm._s(file.mimetype))
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "w-1/5" }, [
              _vm._v(
                _vm._s(_vm.$moment(file.updated_at).format("MMM Do, YYYY"))
              )
            ])
          ])
        ])
      })
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex font-bold px-3" }, [
      _c("div", { staticClass: "w-1/5" }),
      _vm._v(" "),
      _c("div", { staticClass: "w-1/5" }, [_vm._v("Name")]),
      _vm._v(" "),
      _c("div", { staticClass: "w-1/5" }, [_vm._v("File size")]),
      _vm._v(" "),
      _c("div", { staticClass: "w-1/5" }, [_vm._v("Mimetype")]),
      _vm._v(" "),
      _c("div", { staticClass: "w-1/5" }, [_vm._v("Last modified")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Field.vue?vue&type=template&id=4625c109&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Asset/Field.vue?vue&type=template&id=4625c109& ***!
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
        "label",
        { staticClass: "form__label", attrs: { for: _vm.field.handle } },
        [_vm._v(_vm._s(_vm.field.name))]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "border-b border-gray-200 m-2 py-2" },
        [
          _c(
            "p-button",
            { attrs: { theme: "secondary" }, on: { click: _vm.open } },
            [
              _c("fa-icon", {
                staticClass: "mr-1",
                attrs: { icon: ["fas", "plus-circle"] }
              }),
              _vm._v(" Asset\n\t\t\t")
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "flex items-center justify-start" },
        _vm._l(_vm.value, function(file, index) {
          return _c(
            "p-button",
            {
              key: file.id,
              staticClass: "mx-2",
              on: {
                click: function($event) {
                  return _vm.remove(file.id)
                }
              }
            },
            [
              _vm._v("\n\t\t\t\t" + _vm._s(file.name) + "\n\t\t\t\t"),
              _c("fa-icon", {
                staticClass: "ml-2",
                attrs: { icon: ["fas", "times-circle"] }
              })
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "p-modal",
        {
          attrs: {
            name: "file-manager",
            "no-header": "",
            "no-footer": "",
            "extra-large": ""
          },
          model: {
            value: _vm.modalOpen,
            callback: function($$v) {
              _vm.modalOpen = $$v
            },
            expression: "modalOpen"
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "side-container" }, [
              _c("div", { staticClass: "card h-full" }, [
                _c(
                  "div",
                  {
                    staticClass: "border-b border-gray-200 px-3 py-2 text-right"
                  },
                  [
                    _c(
                      "p-button",
                      { on: { click: _vm.close } },
                      [_c("fa-icon", { attrs: { icon: ["fas", "times"] } })],
                      1
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _vm.hasSelection
                  ? _c(
                      "div",
                      { staticClass: "row" },
                      [
                        _c(
                          "p-sortable-list",
                          {
                            staticClass: "sortable-list",
                            model: {
                              value: _vm.selected,
                              callback: function($$v) {
                                _vm.selected = $$v
                              },
                              expression: "selected"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "col mb-6 w-full" },
                              _vm._l(_vm.selected, function(file, index) {
                                return _c("p-sortable-item", { key: file.id }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "flex items-center justify-between py-2 px-3"
                                    },
                                    [
                                      _c(
                                        "p-sortable-handle",
                                        { staticClass: "cursor-move w-1/5" },
                                        [
                                          _c("fa-icon", {
                                            staticClass:
                                              "handle fa-fw text-gray-400",
                                            attrs: { icon: "ellipsis-v" }
                                          })
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c("p-img", {
                                        attrs: {
                                          src: file.url + "?w=50&h=50&fit=crop",
                                          width: 50,
                                          height: 50
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("div", [_vm._v(_vm._s(file.name))]),
                                      _vm._v(" "),
                                      _c(
                                        "p-button",
                                        {
                                          attrs: { theme: "danger" },
                                          on: {
                                            click: function($event) {
                                              return _vm.remove(file.id)
                                            }
                                          }
                                        },
                                        [
                                          _c("fa-icon", {
                                            attrs: { icon: ["fas", "trash"] }
                                          })
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  )
                                ])
                              }),
                              1
                            )
                          ]
                        )
                      ],
                      1
                    )
                  : _c(
                      "div",
                      {
                        staticClass:
                          "h-full flex flex-col justify-center items-center text-5xl text-gray-300"
                      },
                      [
                        _c("fa-icon", {
                          staticClass: "fa-fw fa-3x",
                          attrs: { icon: ["far", "copy"] }
                        }),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "text-lg py-2 text-gray-500" },
                          [_vm._v("Select some files...")]
                        )
                      ],
                      1
                    )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "content-container" }, [
              _c(
                "div",
                { staticClass: "card" },
                [
                  _c(
                    "div",
                    {
                      staticClass: "flex items-center justify-between px-3 pt-2"
                    },
                    [
                      _c("ul", [
                        _c(
                          "li",
                          { staticClass: "mr-4" },
                          [
                            _c(
                              "p-button",
                              {
                                attrs: { theme: "success" },
                                on: { click: _vm.add }
                              },
                              [
                                _c("fa-icon", {
                                  staticClass: "mr-1",
                                  attrs: {
                                    icon: ["fas", "arrow-alt-circle-left"]
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "flex w-full" }, [
                        _c(
                          "li",
                          { staticClass: "mr-2 w-full" },
                          [_c("search-action")],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("ul", { staticClass: "flex" }, [
                        _c(
                          "li",
                          { staticClass: "mr-2" },
                          [_c("display-action")],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          { staticClass: "mr-2" },
                          [_c("sort-action")],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "li",
                          { staticClass: "mr-2" },
                          [_c("view-action")],
                          1
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "flex items-center border-b border-gray-200 px-3 py-2"
                    },
                    [_c("breadcrumb-action")],
                    1
                  ),
                  _vm._v(" "),
                  _c(_vm.view + "-view", { tag: "component" })
                ],
                1
              )
            ])
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/FileManager/Views/Grid.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/FileManager/Views/Grid.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Grid_vue_vue_type_template_id_50929270___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Grid.vue?vue&type=template&id=50929270& */ "./resources/js/components/FileManager/Views/Grid.vue?vue&type=template&id=50929270&");
/* harmony import */ var _Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid.vue?vue&type=script&lang=js& */ "./resources/js/components/FileManager/Views/Grid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Grid_vue_vue_type_template_id_50929270___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Grid_vue_vue_type_template_id_50929270___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileManager/Views/Grid.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileManager/Views/Grid.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Views/Grid.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Grid.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Views/Grid.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileManager/Views/Grid.vue?vue&type=template&id=50929270&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Views/Grid.vue?vue&type=template&id=50929270& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_50929270___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Grid.vue?vue&type=template&id=50929270& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Views/Grid.vue?vue&type=template&id=50929270&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_50929270___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Grid_vue_vue_type_template_id_50929270___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FileManager/Views/List.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/FileManager/Views/List.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_e45b6870___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=e45b6870& */ "./resources/js/components/FileManager/Views/List.vue?vue&type=template&id=e45b6870&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/components/FileManager/Views/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_e45b6870___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_e45b6870___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileManager/Views/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileManager/Views/List.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Views/List.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Views/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileManager/Views/List.vue?vue&type=template&id=e45b6870&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Views/List.vue?vue&type=template&id=e45b6870& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_e45b6870___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=e45b6870& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Views/List.vue?vue&type=template&id=e45b6870&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_e45b6870___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_e45b6870___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/fieldtypes/Asset/Field.vue":
/*!*************************************************!*\
  !*** ./resources/js/fieldtypes/Asset/Field.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_4625c109___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=4625c109& */ "./resources/js/fieldtypes/Asset/Field.vue?vue&type=template&id=4625c109&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/Asset/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_4625c109___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_4625c109___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/Asset/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/Asset/Field.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/fieldtypes/Asset/Field.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/Asset/Field.vue?vue&type=template&id=4625c109&":
/*!********************************************************************************!*\
  !*** ./resources/js/fieldtypes/Asset/Field.vue?vue&type=template&id=4625c109& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_4625c109___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=4625c109& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Asset/Field.vue?vue&type=template&id=4625c109&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_4625c109___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_4625c109___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvVmlld3MvR3JpZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL1ZpZXdzL0xpc3QudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvVmlld3MvR3JpZC52dWU/MDRjNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9WaWV3cy9MaXN0LnZ1ZT9mYTZkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L0ZpZWxkLnZ1ZT82YjIzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL1ZpZXdzL0dyaWQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL1ZpZXdzL0dyaWQudnVlPzNmMGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvVmlld3MvR3JpZC52dWU/ODA2MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9WaWV3cy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9WaWV3cy9MaXN0LnZ1ZT9iMDhmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL1ZpZXdzL0xpc3QudnVlPzI3YzkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L0ZpZWxkLnZ1ZT9kOWFkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L0ZpZWxkLnZ1ZT9lNDMxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNEJBO0FBQ0EsV0FDQTtBQUNBLDJHQUZBO0FBREEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDV0E7QUFDQSxXQUNBO0FBQ0EsMkdBRkE7QUFEQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNENBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBLHlCQURBO0FBR0E7QUFDQSx5R0FEQTtBQUVBLCtHQUZBO0FBR0EsdUdBSEE7QUFJQSxtR0FKQTtBQUtBLG1HQUxBO0FBT0EsK0ZBUEE7QUFRQTtBQVJBLEdBSEE7QUFjQSxNQWRBLGtCQWNBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBO0FBRkE7QUFJQSxHQW5CQTtBQXFCQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLGtCQURBO0FBRUEscUJBRkE7QUFHQTtBQUhBO0FBTkEsR0FyQkE7QUFrQ0EsOEJBQ0E7QUFDQSxpREFEQTtBQUVBLGlDQUZBO0FBR0E7QUFIQSxJQURBO0FBT0EsZ0JBUEEsMEJBT0E7QUFDQTtBQUNBO0FBVEEsSUFsQ0E7QUErQ0EsNkJBQ0E7QUFDQSx3REFEQTtBQUVBO0FBRkEsSUFEQTtBQU1BLE9BTkEsaUJBTUE7QUFBQTs7QUFDQTtBQUNBO0FBQ0EsT0FGQSxFQURBLENBS0E7OztBQUNBO0FBQ0E7QUFDQSxLQWRBO0FBZ0JBLFVBaEJBLGtCQWdCQSxFQWhCQSxFQWdCQTtBQUNB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QUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy8xNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnkgbWItMTJcIj5cbiAgICAgICAgICAgIDxmaWxlLW1hbmFnZXItZGlyZWN0b3J5XG4gICAgICAgICAgICAgICAgdi1pZj1cImN1cnJlbnREaXJlY3RvcnlcIlxuICAgICAgICAgICAgICAgIDprZXk9XCInZGlyZWN0b3J5LScgKyBjdXJyZW50RGlyZWN0b3J5XCJcbiAgICAgICAgICAgICAgICA6ZGlyZWN0b3J5PVwie2lkOiBwYXJlbnREaXJlY3RvcnksIG5hbWU6ICdHbyB1cCd9XCJcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZT1cIi4uXCJcbiAgICAgICAgICAgICAgICB1bnNlbGVjdGFibGU+XG4gICAgICAgICAgICA8L2ZpbGUtbWFuYWdlci1kaXJlY3Rvcnk+XG5cbiAgICAgICAgICAgIDxmaWxlLW1hbmFnZXItZGlyZWN0b3J5XG4gICAgICAgICAgICAgICAgdi1mb3I9XCJkaXJlY3RvcnkgaW4gZGlyZWN0b3JpZXNcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJkaXJlY3RvcnkuaWRcIlxuICAgICAgICAgICAgICAgIDpkaXJlY3Rvcnk9XCJkaXJlY3RvcnlcIlxuICAgICAgICAgICAgICAgIDpzdWJ0aXRsZT1cImRpcmVjdG9yeS5maWxlc19jb3VudCArICcgaXRlbXMnXCI+XG4gICAgICAgICAgICA8L2ZpbGUtbWFuYWdlci1kaXJlY3Rvcnk+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5XCIgdi1pZj1cImZpbGVzLmxlbmd0aFwiPlxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cImZpbGUgaW4gZmlsZXNcIiA6a2V5PVwiZmlsZS51dWlkXCI+XG4gICAgICAgICAgICAgICAgPGZpbGUtbWFuYWdlci1maWxlIDpmaWxlPVwiZmlsZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbWl4aW5zOiBbXG4gICAgICAgICAgICAvLyByZXF1aXJlKCcuLi8uLi8uLi9taXhpbnMvZmlsZXZpZXcnKS5kZWZhdWx0LFxuICAgICAgICAgICAgcmVxdWlyZSgnLi4vLi4vLi4vbWl4aW5zL2RyYWduc2VsZWN0JykuZGVmYXVsdFxuICAgICAgICBdXG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmb250LWJvbGQgcHgtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS81XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzVcIj5OYW1lPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzVcIj5GaWxlIHNpemU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPk1pbWV0eXBlPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzVcIj5MYXN0IG1vZGlmaWVkPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgdi1pZj1cImN1cnJlbnREaXJlY3RvcnlcIiA6a2V5PVwiJ2RpcmVjdG9yeS0nICsgY3VycmVudERpcmVjdG9yeVwiIGNsYXNzPVwiZmxleCBwLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPjxmaWxlLW1hbmFnZXItZGlyZWN0b3J5IHNtYWxsIHVuc2VsZWN0YWJsZSA6ZGlyZWN0b3J5PVwieyBpZDogcGFyZW50RGlyZWN0b3J5LCBuYW1lOiAnR28gdXAnIH1cIj48L2ZpbGUtbWFuYWdlci1kaXJlY3Rvcnk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzVcIj4uLjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS81XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHYtZm9yPVwiZGlyZWN0b3J5IGluIGRpcmVjdG9yaWVzXCIgOmtleT1cImRpcmVjdG9yeS5pZFwiIGNsYXNzPVwiZmxleCBwLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPjxmaWxlLW1hbmFnZXItZGlyZWN0b3J5IHNtYWxsIDpkaXJlY3Rvcnk9XCJkaXJlY3RvcnlcIj48L2ZpbGUtbWFuYWdlci1kaXJlY3Rvcnk+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzVcIj57eyBkaXJlY3RvcnkubmFtZX19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS81XCI+e3sgJG1vbWVudChkaXJlY3RvcnkudXBkYXRlZF9hdCkuZm9ybWF0KCdNTU0gRG8sIFlZWVknKSB9fTwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHYtZm9yPVwiZmlsZSBpbiBmaWxlc1wiIDprZXk9XCJmaWxlLnV1aWRcIiBjbGFzcz1cImZsZXggcC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzVcIj48ZmlsZS1tYW5hZ2VyLWZpbGUgc21hbGwgOmZpbGU9XCJmaWxlXCI+PC9maWxlLW1hbmFnZXItZmlsZT48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzVcIj57eyBmaWxlLm5hbWUgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzVcIj57eyBmaWxlLmJ5dGVzIHwgYnl0ZXMgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzVcIj57eyBmaWxlLm1pbWV0eXBlIH19PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS81XCI+e3sgJG1vbWVudChmaWxlLnVwZGF0ZWRfYXQpLmZvcm1hdCgnTU1NIERvLCBZWVlZJykgfX08L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBtaXhpbnM6IFtcbiAgICAgICAgICAgIC8vIHJlcXVpcmUoJy4uLy4uLy4uL21peGlucy9maWxldmlldycpLmRlZmF1bHQsXG4gICAgICAgICAgICByZXF1aXJlKCcuLi8uLi8uLi9taXhpbnMvZHJhZ25zZWxlY3QnKS5kZWZhdWx0XG4gICAgICAgIF1cbiAgICB9XG48L3NjcmlwdD5cbiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8bGFiZWwgOmZvcj1cImZpZWxkLmhhbmRsZVwiIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj57e2ZpZWxkLm5hbWV9fTwvbGFiZWw+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIG0tMiBweS0yXCI+XG5cdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwib3BlblwiIHRoZW1lPVwic2Vjb25kYXJ5XCI+XG5cdFx0XHRcdDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAncGx1cy1jaXJjbGUnXVwiIGNsYXNzPVwibXItMVwiPjwvZmEtaWNvbj4gQXNzZXRcblx0XHRcdDwvcC1idXR0b24+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiPlxuXHRcdFx0PHAtYnV0dG9uIHYtZm9yPVwiKGZpbGUsIGluZGV4KSBpbiB2YWx1ZVwiIDprZXk9XCJmaWxlLmlkXCIgQGNsaWNrPVwicmVtb3ZlKGZpbGUuaWQpXCIgY2xhc3M9XCJteC0yXCI+XG5cdFx0XHRcdHt7IGZpbGUubmFtZSB9fVxuXHRcdFx0XHQ8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3RpbWVzLWNpcmNsZSddXCIgY2xhc3M9XCJtbC0yXCI+PC9mYS1pY29uPlxuXHRcdFx0PC9wLWJ1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxwLW1vZGFsIG5hbWU9XCJmaWxlLW1hbmFnZXJcIiBuby1oZWFkZXIgbm8tZm9vdGVyIGV4dHJhLWxhcmdlIHYtbW9kZWw9XCJtb2RhbE9wZW5cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNpZGUtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQgaC1mdWxsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB4LTMgcHktMiB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdDxwLWJ1dHRvbiBAY2xpY2s9XCJjbG9zZVwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndGltZXMnXVwiPjwvZmEtaWNvbj48L3AtYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwiaGFzU2VsZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxwLXNvcnRhYmxlLWxpc3Qgdi1tb2RlbD1cInNlbGVjdGVkXCIgY2xhc3M9XCJzb3J0YWJsZS1saXN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbCBtYi02IHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAtc29ydGFibGUtaXRlbSB2LWZvcj1cIihmaWxlLCBpbmRleCkgaW4gc2VsZWN0ZWRcIiA6a2V5PVwiZmlsZS5pZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTIgcHgtM1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwLXNvcnRhYmxlLWhhbmRsZSBjbGFzcz1cImN1cnNvci1tb3ZlIHctMS81XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmEtaWNvbiBpY29uPVwiZWxsaXBzaXMtdlwiIGNsYXNzPVwiaGFuZGxlIGZhLWZ3IHRleHQtZ3JheS00MDBcIj48L2ZhLWljb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wLXNvcnRhYmxlLWhhbmRsZT5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwLWltZyA6c3JjPVwiZmlsZS51cmwgKyAnP3c9NTAmaD01MCZmaXQ9Y3JvcCdcIiA6d2lkdGg9XCI1MFwiIDpoZWlnaHQ9XCI1MFwiPjwvcC1pbWc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj57eyBmaWxlLm5hbWUgfX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwicmVtb3ZlKGZpbGUuaWQpXCIgdGhlbWU9XCJkYW5nZXJcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3RyYXNoJ11cIj48L2ZhLWljb24+PC9wLWJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3Atc29ydGFibGUtaXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9wLXNvcnRhYmxlLWxpc3Q+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LTV4bCB0ZXh0LWdyYXktMzAwXCIgdi1lbHNlPlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFyJywgJ2NvcHknXVwiIGNsYXNzPVwiZmEtZncgZmEtM3hcIj48L2ZhLWljb24+XG5cdFx0XHRcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1sZyBweS0yIHRleHQtZ3JheS01MDBcIj5TZWxlY3Qgc29tZSBmaWxlcy4uLjwvc3Bhbj5cblx0XHRcdFx0ICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCAgIFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMyBwdC0yXCI+XG5cdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJtci00XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwiYWRkXCIgdGhlbWU9XCJzdWNjZXNzXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdhcnJvdy1hbHQtY2lyY2xlLWxlZnQnXVwiIGNsYXNzPVwibXItMVwiPjwvZmEtaWNvbj48L3AtYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzcz1cImZsZXggdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdCAgICA8bGkgY2xhc3M9XCJtci0yIHctZnVsbFwiPjxzZWFyY2gtYWN0aW9uPjwvc2VhcmNoLWFjdGlvbj48L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJmbGV4XCI+XG5cdFx0XHRcdFx0XHRcdCAgICA8bGkgY2xhc3M9XCJtci0yXCI+PGRpc3BsYXktYWN0aW9uPjwvZGlzcGxheS1hY3Rpb24+PC9saT5cblx0XHRcdFx0XHRcdFx0ICAgIDxsaSBjbGFzcz1cIm1yLTJcIj48c29ydC1hY3Rpb24+PC9zb3J0LWFjdGlvbj48L2xpPlxuXHRcdFx0XHRcdFx0XHQgICAgPGxpIGNsYXNzPVwibXItMlwiPjx2aWV3LWFjdGlvbj48L3ZpZXctYWN0aW9uPjwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBweC0zIHB5LTJcIj5cblx0XHRcdFx0XHRcdFx0PGJyZWFkY3J1bWItYWN0aW9uPjwvYnJlYWRjcnVtYi1hY3Rpb24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGNvbXBvbmVudCA6aXM9XCJ2aWV3ICsgJy12aWV3J1wiLz5cbiAgICAgICAgICAgIFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wLW1vZGFsPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG5cdGltcG9ydCBCcmVhZGNydW1iQWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9CcmVhZGNydW1iLnZ1ZSdcblx0aW1wb3J0IERpc3BsYXlBY3Rpb24gICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL0Rpc3BsYXkudnVlJ1xuXHRpbXBvcnQgU2VhcmNoQWN0aW9uICAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvU2VhcmNoLnZ1ZSdcblx0aW1wb3J0IFNvcnRBY3Rpb24gICAgICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL1NvcnQudnVlJ1xuXHRpbXBvcnQgVmlld0FjdGlvbiAgICAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvVmlldy52dWUnXG5cblx0aW1wb3J0IEdyaWRWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvVmlld3MvR3JpZC52dWUnXG4gICAgaW1wb3J0IExpc3RWaWV3IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvVmlld3MvTGlzdC52dWUnXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICdhc3NldC1maWVsZHR5cGUnLFxuXG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0J2Rpc3BsYXktYWN0aW9uJzogICAgRGlzcGxheUFjdGlvbixcblx0XHRcdCdicmVhZGNydW1iLWFjdGlvbic6IEJyZWFkY3J1bWJBY3Rpb24sXG5cdFx0XHQnc2VhcmNoLWFjdGlvbic6ICAgICBTZWFyY2hBY3Rpb24sXG5cdFx0XHQnc29ydC1hY3Rpb24nOiAgICAgICBTb3J0QWN0aW9uLFxuXHRcdFx0J3ZpZXctYWN0aW9uJzogICAgICAgVmlld0FjdGlvbixcblxuXHRcdFx0J2dyaWQtdmlldyc6IEdyaWRWaWV3LFxuICAgICAgICAgICAgJ2xpc3Qtdmlldyc6IExpc3RWaWV3LFxuXHRcdH0sXG5cblx0XHRkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFx0bW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIFx0c2VsZWN0ZWQ6IHt9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBcdHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4ge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgICAgICAgIFx0c2VsZWN0ZWRGaWxlczogJ2ZpbGVtYW5hZ2VyL2dldFNlbGVjdGVkRmlsZXMnLFxuXHRcdFx0XHRmaWxlczogICAgICAgICAnZmlsZW1hbmFnZXIvZ2V0RmlsZXMnLFxuXHRcdFx0XHR2aWV3OiAgICAgICAgICAnZmlsZW1hbmFnZXIvZ2V0VmlldycsXG4gICAgICAgIFx0fSksXG5cbiAgICAgICAgXHRoYXNTZWxlY3Rpb24oKSB7XG4gICAgICAgIFx0XHRyZXR1cm4gXy5zaXplKHRoaXMuc2VsZWN0ZWQpID4gMFxuICAgICAgICBcdH1cblxuICAgICAgICB9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XG5cdFx0XHRcdGNsZWFyRmlsZVNlbGVjdGlvbjogJ2ZpbGVtYW5hZ2VyL2NsZWFyRmlsZVNlbGVjdGlvbicsXG5cdFx0XHRcdHJlc2V0OiAnZmlsZW1hbmFnZXIvcmVzZXQnLFxuXHRcdFx0fSksXG5cblx0XHRcdGFkZCgpIHtcblx0XHRcdFx0Xy5mb3JFYWNoKHRoaXMuc2VsZWN0ZWRGaWxlcywgKGlkKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuc2VsZWN0ZWQsIGlkLCBfLmZpbmQodGhpcy5maWxlcywgWyAnaWQnLCBpZCBdKSlcblx0XHRcdFx0fSlcblxuXHRcdFx0XHQvLyBzYXZlICYgY2xlYXIuLlxuXHRcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMuc2VsZWN0ZWQpXG5cdFx0XHRcdHRoaXMuY2xlYXJGaWxlU2VsZWN0aW9uKClcblx0XHRcdH0sXG5cblx0XHRcdHJlbW92ZShpZCkge1xuXHRcdFx0XHR0aGlzLiRkZWxldGUodGhpcy5zZWxlY3RlZCwgaWQpXG5cdFx0XHR9LFxuXG5cdFx0XHRvcGVuKCkge1xuXHRcdFx0XHR0aGlzLm1vZGFsT3BlbiA9IHRydWVcblx0XHRcdFx0dGhpcy5yZXNldCgpXG5cblx0XHRcdFx0dGhpcy5zZWxlY3RlZCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMudmFsdWUpXG5cdFx0XHR9LFxuXG5cdFx0XHRjbG9zZSgpIHtcblx0XHRcdFx0dGhpcy5tb2RhbE9wZW4gPSBmYWxzZVxuXHRcdFx0XHR0aGlzLnJlc2V0KClcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LWNvbnRhaW5lclwiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnkgbWItMTJcIiB9LFxuICAgICAgW1xuICAgICAgICBfdm0uY3VycmVudERpcmVjdG9yeVxuICAgICAgICAgID8gX2MoXCJmaWxlLW1hbmFnZXItZGlyZWN0b3J5XCIsIHtcbiAgICAgICAgICAgICAga2V5OiBcImRpcmVjdG9yeS1cIiArIF92bS5jdXJyZW50RGlyZWN0b3J5LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGRpcmVjdG9yeTogeyBpZDogX3ZtLnBhcmVudERpcmVjdG9yeSwgbmFtZTogXCJHbyB1cFwiIH0sXG4gICAgICAgICAgICAgICAgc3VidGl0bGU6IFwiLi5cIixcbiAgICAgICAgICAgICAgICB1bnNlbGVjdGFibGU6IFwiXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX2woX3ZtLmRpcmVjdG9yaWVzLCBmdW5jdGlvbihkaXJlY3RvcnkpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJmaWxlLW1hbmFnZXItZGlyZWN0b3J5XCIsIHtcbiAgICAgICAgICAgIGtleTogZGlyZWN0b3J5LmlkLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgZGlyZWN0b3J5OiBkaXJlY3RvcnksXG4gICAgICAgICAgICAgIHN1YnRpdGxlOiBkaXJlY3RvcnkuZmlsZXNfY291bnQgKyBcIiBpdGVtc1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5maWxlcy5sZW5ndGhcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnlcIiB9LFxuICAgICAgICAgIF92bS5fbChfdm0uZmlsZXMsIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBrZXk6IGZpbGUudXVpZCB9LFxuICAgICAgICAgICAgICBbX2MoXCJmaWxlLW1hbmFnZXItZmlsZVwiLCB7IGF0dHJzOiB7IGZpbGU6IGZpbGUgfSB9KV0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LWNvbnRhaW5lclwiIH0sXG4gICAgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5jdXJyZW50RGlyZWN0b3J5XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiZGlyZWN0b3J5LVwiICsgX3ZtLmN1cnJlbnREaXJlY3RvcnksXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsZXggcC0zXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LTEvNVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJmaWxlLW1hbmFnZXItZGlyZWN0b3J5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBzbWFsbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICB1bnNlbGVjdGFibGU6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0b3J5OiB7IGlkOiBfdm0ucGFyZW50RGlyZWN0b3J5LCBuYW1lOiBcIkdvIHVwXCIgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS81XCIgfSwgW192bS5fdihcIi4uXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvNVwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS81XCIgfSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5kaXJlY3RvcmllcywgZnVuY3Rpb24oZGlyZWN0b3J5KSB7XG4gICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogZGlyZWN0b3J5LmlkLCBzdGF0aWNDbGFzczogXCJmbGV4IHAtM1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctMS81XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmaWxlLW1hbmFnZXItZGlyZWN0b3J5XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzbWFsbDogXCJcIiwgZGlyZWN0b3J5OiBkaXJlY3RvcnkgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvNVwiIH0sIFtfdm0uX3YoX3ZtLl9zKGRpcmVjdG9yeS5uYW1lKSldKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIF92bS5fcyhfdm0uJG1vbWVudChkaXJlY3RvcnkudXBkYXRlZF9hdCkuZm9ybWF0KFwiTU1NIERvLCBZWVlZXCIpKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLmZpbGVzLCBmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IGtleTogZmlsZS51dWlkLCBzdGF0aWNDbGFzczogXCJmbGV4IHAtM1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggdy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9LFxuICAgICAgICAgICAgICBbX2MoXCJmaWxlLW1hbmFnZXItZmlsZVwiLCB7IGF0dHJzOiB7IHNtYWxsOiBcIlwiLCBmaWxlOiBmaWxlIH0gfSldLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9LCBbX3ZtLl92KF92bS5fcyhmaWxlLm5hbWUpKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLl9mKFwiYnl0ZXNcIikoZmlsZS5ieXRlcykpKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvNVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhmaWxlLm1pbWV0eXBlKSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLiRtb21lbnQoZmlsZS51cGRhdGVkX2F0KS5mb3JtYXQoXCJNTU0gRG8sIFlZWVlcIikpXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBmb250LWJvbGQgcHgtM1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS81XCIgfSwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS81XCIgfSwgW192bS5fdihcIkZpbGUgc2l6ZVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9LCBbX3ZtLl92KFwiTWltZXR5cGVcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS81XCIgfSwgW192bS5fdihcIkxhc3QgbW9kaWZpZWRcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiwgYXR0cnM6IHsgZm9yOiBfdm0uZmllbGQuaGFuZGxlIH0gfSxcbiAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmZpZWxkLm5hbWUpKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIG0tMiBweS0yXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyB0aGVtZTogXCJzZWNvbmRhcnlcIiB9LCBvbjogeyBjbGljazogX3ZtLm9wZW4gfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTFcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJwbHVzLWNpcmNsZVwiXSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgQXNzZXRcXG5cXHRcXHRcXHRcIilcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktc3RhcnRcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLnZhbHVlLCBmdW5jdGlvbihmaWxlLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBmaWxlLmlkLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJteC0yXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmUoZmlsZS5pZClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKGZpbGUubmFtZSkgKyBcIlxcblxcdFxcdFxcdFxcdFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0yXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGltZXMtY2lyY2xlXCJdIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwLW1vZGFsXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogXCJmaWxlLW1hbmFnZXJcIixcbiAgICAgICAgICAgIFwibm8taGVhZGVyXCI6IFwiXCIsXG4gICAgICAgICAgICBcIm5vLWZvb3RlclwiOiBcIlwiLFxuICAgICAgICAgICAgXCJleHRyYS1sYXJnZVwiOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RhbE9wZW4sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5tb2RhbE9wZW4gPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGFsT3BlblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpZGUtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQgaC1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB4LTMgcHktMiB0ZXh0LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7IG9uOiB7IGNsaWNrOiBfdm0uY2xvc2UgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImZhLWljb25cIiwgeyBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ0aW1lc1wiXSB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5oYXNTZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1zb3J0YWJsZS1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzb3J0YWJsZS1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZCA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIG1iLTYgdy1mdWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc2VsZWN0ZWQsIGZ1bmN0aW9uKGZpbGUsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInAtc29ydGFibGUtaXRlbVwiLCB7IGtleTogZmlsZS5pZCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweS0yIHB4LTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLXNvcnRhYmxlLWhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3Vyc29yLW1vdmUgdy0xLzVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFuZGxlIGZhLWZ3IHRleHQtZ3JheS00MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJlbGxpcHNpcy12XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogZmlsZS51cmwgKyBcIj93PTUwJmg9NTAmZml0PWNyb3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KF92bS5fcyhmaWxlLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwiZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZShmaWxlLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ0cmFzaFwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNXhsIHRleHQtZ3JheS0zMDBcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgZmEtM3hcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFyXCIsIFwiY29weVwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1sZyBweS0yIHRleHQtZ3JheS01MDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2VsZWN0IHNvbWUgZmlsZXMuLi5cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0zIHB0LTJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1yLTRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcInN1Y2Nlc3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmFkZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogW1wiZmFzXCIsIFwiYXJyb3ctYWx0LWNpcmNsZS1sZWZ0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IHctZnVsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXItMiB3LWZ1bGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzZWFyY2gtYWN0aW9uXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1yLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJkaXNwbGF5LWFjdGlvblwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtci0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic29ydC1hY3Rpb25cIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInZpZXctYWN0aW9uXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB4LTMgcHktMlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImJyZWFkY3J1bWItYWN0aW9uXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhfdm0udmlldyArIFwiLXZpZXdcIiwgeyB0YWc6IFwiY29tcG9uZW50XCIgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0dyaWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwOTI5MjcwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0dyaWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9HcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoYW5la3JvbGlrb3dza2kvQ29kZS9mdXNpb25jbXMtdjYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTA5MjkyNzAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTA5MjkyNzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTA5MjkyNzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0dyaWQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUwOTI5MjcwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUwOTI5MjcwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9WaWV3cy9HcmlkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vR3JpZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTA5MjkyNzAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU0NWI2ODcwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoYW5la3JvbGlrb3dza2kvQ29kZS9mdXNpb25jbXMtdjYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZTQ1YjY4NzAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZTQ1YjY4NzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZTQ1YjY4NzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU0NWI2ODcwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2U0NWI2ODcwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9WaWV3cy9MaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTQ1YjY4NzAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjI1YzEwOSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoYW5la3JvbGlrb3dza2kvQ29kZS9mdXNpb25jbXMtdjYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDYyNWMxMDknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDYyNWMxMDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDYyNWMxMDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjI1YzEwOSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NjI1YzEwOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjI1YzEwOSZcIiJdLCJzb3VyY2VSb290IjoiIn0=