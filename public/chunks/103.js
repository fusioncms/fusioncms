(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

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



/***/ }),

/***/ "./resources/js/mixins/dragnselect.js":
/*!********************************************!*\
  !*** ./resources/js/mixins/dragnselect.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var DragSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! DragSelect */ "./node_modules/DragSelect/docs/DragSelect.js");
/* harmony import */ var DragSelect__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(DragSelect__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      selector: null
    };
  },
  watch: {
    loading: function loading(value) {
      this.selector.addSelectables(document.getElementsByClassName('gallery-item'));
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    loading: 'filemanager/getLoading'
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    toggleDirectorySelection: 'filemanager/toggleDirectorySelection',
    clearDirectorySelection: 'filemanager/clearDirectorySelection',
    moveFileToDirectory: 'filemanager/moveFileToDirectory',
    toggleFileSelection: 'filemanager/toggleFileSelection',
    clearFileSelection: 'filemanager/clearFileSelection',
    setDropzoneVisible: 'filemanager/setDropzoneVisible',
    setDropzoneEnabled: 'filemanager/setDropzoneEnabled'
  }), {
    clearSelections: function clearSelections() {
      this.clearFileSelection();
      this.clearDirectorySelection();
      this.selected = {
        directories: [],
        files: []
      };
    }
  }),
  mounted: function mounted() {
    var _this = this;

    var container = document.querySelector('.gallery-container');
    var selectables = document.getElementsByClassName('gallery-item'); // Drag Start

    container.addEventListener('dragstart', function (ev) {
      _this.setDropzoneEnabled(false); // Prevent Drag Behavior when element is not selected


      if (ev.target.classList.contains('ds-selected')) {
        ev.preventDefault();
      }
    }); // Drag Start

    container.addEventListener('dragend', function (ev) {
      _this.setDropzoneVisible(false);

      _this.setDropzoneEnabled(true);

      ev.preventDefault();
    }); // Drag Watch

    container.addEventListener('drag', function (ev) {
      ev.preventDefault();

      if (ev.screenY < 200) {
        scrollBy(0, -1);
      } else if (ev.screenY > window.innerHeight - 200) {
        scrollBy(0, 1);
      }
    }); // Drag Enter
    // Looking to enter a Dropzone - unhightlight

    container.addEventListener('dragenter', function (ev) {
      if (ev.target.classList.contains('gallery--dropzone')) {
        ev.preventDefault();
        ev.target.parentNode.classList.add('dropzone-over');
      }
    }); // Drag Over
    // Required for `Drop` event

    container.addEventListener('dragover', function (ev) {
      if (ev.target.classList.contains('gallery--dropzone')) {
        ev.preventDefault();
      }
    }); // Drag Leave
    // Leaving a Dropzone - unhightlight

    container.addEventListener('dragleave', function (ev) {
      if (ev.target.classList.contains('gallery--dropzone')) {
        ev.preventDefault();
        ev.target.parentNode.classList.remove('dropzone-over');
      }
    }); // Drop Event

    container.addEventListener('drop', function (ev) {
      if (ev.target.classList.contains('gallery--dropzone')) {
        ev.preventDefault();
        var dropzone = ev.target.parentNode;
        var directory = parseInt(dropzone.dataset.directory);
        dropzone.classList.add('dropzone-highlight');
        dropzone.classList.remove('dropzone-over');
        setTimeout(function () {
          dropzone.classList.remove('dropzone-highlight');
        }, 1000);

        _this.moveFileToDirectory({
          directory: directory,
          moving: _this.selected
        });

        _this.clearSelections();
      }
    });
    this.selector = new DragSelect__WEBPACK_IMPORTED_MODULE_0___default.a({
      selectables: selectables,
      area: container,
      callback: function callback(elements) {
        _this.clearSelections(); // Toggle files/directories


        _.forEach(elements, function (el) {
          if (el.dataset.file) {
            _this.toggleFileSelection(parseInt(el.dataset.file));

            _this.selected.files.push(parseInt(el.dataset.file));
          } else if (el.dataset.directory) {
            _this.toggleDirectorySelection(parseInt(el.dataset.directory));

            _this.selected.directories.push(parseInt(el.dataset.directory));
          }
        });
      },
      // Start dragging selector..
      onDragStart: function onDragStart(el) {
        // Prevent selector from selecting
        if (el.target.classList.contains('gallery-item--selected') || el.target.closest('.gallery-item--selected')) {
          _this.selector["break"]();
        }
      }
    });
  },
  destroyed: function destroyed() {
    this.selector.stop();
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvVmlld3MvR3JpZC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL1ZpZXdzL0xpc3QudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvVmlld3MvR3JpZC52dWU/MDRjNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9WaWV3cy9MaXN0LnZ1ZT9mYTZkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L0ZpZWxkLnZ1ZT82YjIzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL1ZpZXdzL0dyaWQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL1ZpZXdzL0dyaWQudnVlPzNmMGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvVmlld3MvR3JpZC52dWU/ODA2MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9WaWV3cy9MaXN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9WaWV3cy9MaXN0LnZ1ZT9iMDhmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL1ZpZXdzL0xpc3QudnVlPzI3YzkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L0ZpZWxkLnZ1ZT9kOWFkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L0ZpZWxkLnZ1ZT9lNDMxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9taXhpbnMvZHJhZ25zZWxlY3QuanMiXSwibmFtZXMiOlsiZGF0YSIsInNlbGVjdG9yIiwid2F0Y2giLCJsb2FkaW5nIiwidmFsdWUiLCJhZGRTZWxlY3RhYmxlcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsIm1ldGhvZHMiLCJtYXBBY3Rpb25zIiwidG9nZ2xlRGlyZWN0b3J5U2VsZWN0aW9uIiwiY2xlYXJEaXJlY3RvcnlTZWxlY3Rpb24iLCJtb3ZlRmlsZVRvRGlyZWN0b3J5IiwidG9nZ2xlRmlsZVNlbGVjdGlvbiIsImNsZWFyRmlsZVNlbGVjdGlvbiIsInNldERyb3B6b25lVmlzaWJsZSIsInNldERyb3B6b25lRW5hYmxlZCIsImNsZWFyU2VsZWN0aW9ucyIsInNlbGVjdGVkIiwiZGlyZWN0b3JpZXMiLCJmaWxlcyIsIm1vdW50ZWQiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0YWJsZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXYiLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInByZXZlbnREZWZhdWx0Iiwic2NyZWVuWSIsInNjcm9sbEJ5Iiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJwYXJlbnROb2RlIiwiYWRkIiwicmVtb3ZlIiwiZHJvcHpvbmUiLCJkaXJlY3RvcnkiLCJwYXJzZUludCIsImRhdGFzZXQiLCJzZXRUaW1lb3V0IiwibW92aW5nIiwiRHJhZ1NlbGVjdCIsImFyZWEiLCJjYWxsYmFjayIsImVsZW1lbnRzIiwiXyIsImZvckVhY2giLCJlbCIsImZpbGUiLCJwdXNoIiwib25EcmFnU3RhcnQiLCJjbG9zZXN0IiwiZGVzdHJveWVkIiwic3RvcCJdLCJtYXBw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LFlBQUlBLEVBQUUsQ0FBQ3ZCLE1BQUgsQ0FBVUMsU0FBVixDQUFvQkMsUUFBcEIsQ0FBNkIsd0JBQTdCLEtBQTBEcUIsRUFBRSxDQUFDdkIsTUFBSCxDQUFVMkIsT0FBVixDQUFrQix5QkFBbEIsQ0FBOUQsRUFBNEc7QUFDM0csZUFBSSxDQUFDdkQsUUFBTDtBQUNBO0FBQ0Q7QUF4QjZCLEtBQWYsQ0FBaEI7QUEwQkcsR0E3SVU7QUErSVh3RCxXQS9JVyx1QkErSUM7QUFDWCxTQUFLeEQsUUFBTCxDQUFjeUQsSUFBZDtBQUNBO0FBakpVLENBQWYsRSIsImZpbGUiOiJjaHVua3MvMTAzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJnYWxsZXJ5LWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZ2FsbGVyeSBtYi0xMlwiPlxuICAgICAgICAgICAgPGZpbGUtbWFuYWdlci1kaXJlY3RvcnlcbiAgICAgICAgICAgICAgICB2LWlmPVwiY3VycmVudERpcmVjdG9yeVwiXG4gICAgICAgICAgICAgICAgOmtleT1cIidkaXJlY3RvcnktJyArIGN1cnJlbnREaXJlY3RvcnlcIlxuICAgICAgICAgICAgICAgIDpkaXJlY3Rvcnk9XCJ7aWQ6IHBhcmVudERpcmVjdG9yeSwgbmFtZTogJ0dvIHVwJ31cIlxuICAgICAgICAgICAgICAgIHN1YnRpdGxlPVwiLi5cIlxuICAgICAgICAgICAgICAgIHVuc2VsZWN0YWJsZT5cbiAgICAgICAgICAgIDwvZmlsZS1tYW5hZ2VyLWRpcmVjdG9yeT5cblxuICAgICAgICAgICAgPGZpbGUtbWFuYWdlci1kaXJlY3RvcnlcbiAgICAgICAgICAgICAgICB2LWZvcj1cImRpcmVjdG9yeSBpbiBkaXJlY3Rvcmllc1wiXG4gICAgICAgICAgICAgICAgOmtleT1cImRpcmVjdG9yeS5pZFwiXG4gICAgICAgICAgICAgICAgOmRpcmVjdG9yeT1cImRpcmVjdG9yeVwiXG4gICAgICAgICAgICAgICAgOnN1YnRpdGxlPVwiZGlyZWN0b3J5LmZpbGVzX2NvdW50ICsgJyBpdGVtcydcIj5cbiAgICAgICAgICAgIDwvZmlsZS1tYW5hZ2VyLWRpcmVjdG9yeT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImdhbGxlcnlcIiB2LWlmPVwiZmlsZXMubGVuZ3RoXCI+XG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZmlsZSBpbiBmaWxlc1wiIDprZXk9XCJmaWxlLnV1aWRcIj5cbiAgICAgICAgICAgICAgICA8ZmlsZS1tYW5hZ2VyLWZpbGUgOmZpbGU9XCJmaWxlXCIgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBtaXhpbnM6IFtcbiAgICAgICAgICAgIC8vIHJlcXVpcmUoJy4uLy4uLy4uL21peGlucy9maWxldmlldycpLmRlZmF1bHQsXG4gICAgICAgICAgICByZXF1aXJlKCcuLi8uLi8uLi9taXhpbnMvZHJhZ25zZWxlY3QnKS5kZWZhdWx0XG4gICAgICAgIF1cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImdhbGxlcnktY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZvbnQtYm9sZCBweC0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPk5hbWU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPkZpbGUgc2l6ZTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS81XCI+TWltZXR5cGU8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPkxhc3QgbW9kaWZpZWQ8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiB2LWlmPVwiY3VycmVudERpcmVjdG9yeVwiIDprZXk9XCInZGlyZWN0b3J5LScgKyBjdXJyZW50RGlyZWN0b3J5XCIgY2xhc3M9XCJmbGV4IHAtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS81XCI+PGZpbGUtbWFuYWdlci1kaXJlY3Rvcnkgc21hbGwgdW5zZWxlY3RhYmxlIDpkaXJlY3Rvcnk9XCJ7IGlkOiBwYXJlbnREaXJlY3RvcnksIG5hbWU6ICdHbyB1cCcgfVwiPjwvZmlsZS1tYW5hZ2VyLWRpcmVjdG9yeT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPi4uPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzVcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS81XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgdi1mb3I9XCJkaXJlY3RvcnkgaW4gZGlyZWN0b3JpZXNcIiA6a2V5PVwiZGlyZWN0b3J5LmlkXCIgY2xhc3M9XCJmbGV4IHAtM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS81XCI+PGZpbGUtbWFuYWdlci1kaXJlY3Rvcnkgc21hbGwgOmRpcmVjdG9yeT1cImRpcmVjdG9yeVwiPjwvZmlsZS1tYW5hZ2VyLWRpcmVjdG9yeT48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPnt7IGRpcmVjdG9yeS5uYW1lfX08L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS81XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzVcIj57eyAkbW9tZW50KGRpcmVjdG9yeS51cGRhdGVkX2F0KS5mb3JtYXQoJ01NTSBEbywgWVlZWScpIH19PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgdi1mb3I9XCJmaWxlIGluIGZpbGVzXCIgOmtleT1cImZpbGUudXVpZFwiIGNsYXNzPVwiZmxleCBwLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPjxmaWxlLW1hbmFnZXItZmlsZSBzbWFsbCA6ZmlsZT1cImZpbGVcIj48L2ZpbGUtbWFuYWdlci1maWxlPjwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPnt7IGZpbGUubmFtZSB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPnt7IGZpbGUuYnl0ZXMgfCBieXRlcyB9fTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvNVwiPnt7IGZpbGUubWltZXR5cGUgfX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzVcIj57eyAkbW9tZW50KGZpbGUudXBkYXRlZF9hdCkuZm9ybWF0KCdNTU0gRG8sIFlZWVknKSB9fTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG1peGluczogW1xuICAgICAgICAgICAgLy8gcmVxdWlyZSgnLi4vLi4vLi4vbWl4aW5zL2ZpbGV2aWV3JykuZGVmYXVsdCxcbiAgICAgICAgICAgIHJlcXVpcmUoJy4uLy4uLy4uL21peGlucy9kcmFnbnNlbGVjdCcpLmRlZmF1bHRcbiAgICAgICAgXVxuICAgIH1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxsYWJlbCA6Zm9yPVwiZmllbGQuaGFuZGxlXCIgY2xhc3M9XCJmb3JtX19sYWJlbFwiPnt7ZmllbGQubmFtZX19PC9sYWJlbD5cblxuXHRcdDxkaXYgY2xhc3M9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgbS0yIHB5LTJcIj5cblx0XHRcdDxwLWJ1dHRvbiBAY2xpY2s9XCJvcGVuXCIgdGhlbWU9XCJzZWNvbmRhcnlcIj5cblx0XHRcdFx0PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdwbHVzLWNpcmNsZSddXCIgY2xhc3M9XCJtci0xXCI+PC9mYS1pY29uPiBBc3NldFxuXHRcdFx0PC9wLWJ1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LXN0YXJ0XCI+XG5cdFx0XHQ8cC1idXR0b24gdi1mb3I9XCIoZmlsZSwgaW5kZXgpIGluIHZhbHVlXCIgOmtleT1cImZpbGUuaWRcIiBAY2xpY2s9XCJyZW1vdmUoZmlsZS5pZClcIiBjbGFzcz1cIm14LTJcIj5cblx0XHRcdFx0e3sgZmlsZS5uYW1lIH19XG5cdFx0XHRcdDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndGltZXMtY2lyY2xlJ11cIiBjbGFzcz1cIm1sLTJcIj48L2ZhLWljb24+XG5cdFx0XHQ8L3AtYnV0dG9uPlxuXHRcdDwvZGl2PlxuXG5cdFx0PHAtbW9kYWwgbmFtZT1cImZpbGUtbWFuYWdlclwiIG5vLWhlYWRlciBuby1mb290ZXIgZXh0cmEtbGFyZ2Ugdi1tb2RlbD1cIm1vZGFsT3BlblwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2lkZS1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZCBoLWZ1bGxcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcHgtMyBweS0yIHRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHRcdFx0PHAtYnV0dG9uIEBjbGljaz1cImNsb3NlXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICd0aW1lcyddXCI+PC9mYS1pY29uPjwvcC1idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJoYXNTZWxlY3Rpb25cIj5cblx0XHRcdFx0XHRcdFx0PHAtc29ydGFibGUtbGlzdCB2LW1vZGVsPVwic2VsZWN0ZWRcIiBjbGFzcz1cInNvcnRhYmxlLWxpc3RcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sIG1iLTYgdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cC1zb3J0YWJsZS1pdGVtIHYtZm9yPVwiKGZpbGUsIGluZGV4KSBpbiBzZWxlY3RlZFwiIDprZXk9XCJmaWxlLmlkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktMiBweC0zXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAtc29ydGFibGUtaGFuZGxlIGNsYXNzPVwiY3Vyc29yLW1vdmUgdy0xLzVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmYS1pY29uIGljb249XCJlbGxpcHNpcy12XCIgY2xhc3M9XCJoYW5kbGUgZmEtZncgdGV4dC1ncmF5LTQwMFwiPjwvZmEtaWNvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3Atc29ydGFibGUtaGFuZGxlPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHAtaW1nIDpzcmM9XCJmaWxlLnVybCArICc/dz01MCZoPTUwJmZpdD1jcm9wJ1wiIDp3aWR0aD1cIjUwXCIgOmhlaWdodD1cIjUwXCI+PC9wLWltZz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2Pnt7IGZpbGUubmFtZSB9fTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwLWJ1dHRvbiBAY2xpY2s9XCJyZW1vdmUoZmlsZS5pZClcIiB0aGVtZT1cImRhbmdlclwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndHJhc2gnXVwiPjwvZmEtaWNvbj48L3AtYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvcC1zb3J0YWJsZS1pdGVtPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L3Atc29ydGFibGUtbGlzdD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNXhsIHRleHQtZ3JheS0zMDBcIiB2LWVsc2U+XG5cdFx0XHRcdCAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXInLCAnY29weSddXCIgY2xhc3M9XCJmYS1mdyBmYS0zeFwiPjwvZmEtaWNvbj5cblx0XHRcdFx0ICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0LWxnIHB5LTIgdGV4dC1ncmF5LTUwMFwiPlNlbGVjdCBzb21lIGZpbGVzLi4uPC9zcGFuPlxuXHRcdFx0XHQgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0ICAgXHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0zIHB0LTJcIj5cblx0XHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cIm1yLTRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwLWJ1dHRvbiBAY2xpY2s9XCJhZGRcIiB0aGVtZT1cInN1Y2Nlc3NcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2Fycm93LWFsdC1jaXJjbGUtbGVmdCddXCIgY2xhc3M9XCJtci0xXCI+PC9mYS1pY29uPjwvcC1idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzPVwiZmxleCB3LWZ1bGxcIj5cblx0XHRcdFx0XHRcdFx0ICAgIDxsaSBjbGFzcz1cIm1yLTIgdy1mdWxsXCI+PHNlYXJjaC1hY3Rpb24+PC9zZWFyY2gtYWN0aW9uPjwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzcz1cImZsZXhcIj5cblx0XHRcdFx0XHRcdFx0ICAgIDxsaSBjbGFzcz1cIm1yLTJcIj48ZGlzcGxheS1hY3Rpb24+PC9kaXNwbGF5LWFjdGlvbj48L2xpPlxuXHRcdFx0XHRcdFx0XHQgICAgPGxpIGNsYXNzPVwibXItMlwiPjxzb3J0LWFjdGlvbj48L3NvcnQtYWN0aW9uPjwvbGk+XG5cdFx0XHRcdFx0XHRcdCAgICA8bGkgY2xhc3M9XCJtci0yXCI+PHZpZXctYWN0aW9uPjwvdmlldy1hY3Rpb24+PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB4LTMgcHktMlwiPlxuXHRcdFx0XHRcdFx0XHQ8YnJlYWRjcnVtYi1hY3Rpb24+PC9icmVhZGNydW1iLWFjdGlvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8Y29tcG9uZW50IDppcz1cInZpZXcgKyAnLXZpZXcnXCIvPlxuICAgICAgICAgICAgXHRcdDwvZGl2PlxuICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3AtbW9kYWw+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cblx0aW1wb3J0IEJyZWFkY3J1bWJBY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL0JyZWFkY3J1bWIudnVlJ1xuXHRpbXBvcnQgRGlzcGxheUFjdGlvbiAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvRGlzcGxheS52dWUnXG5cdGltcG9ydCBTZWFyY2hBY3Rpb24gICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9TZWFyY2gudnVlJ1xuXHRpbXBvcnQgU29ydEFjdGlvbiAgICAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvU29ydC52dWUnXG5cdGltcG9ydCBWaWV3QWN0aW9uICAgICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9WaWV3LnZ1ZSdcblxuXHRpbXBvcnQgR3JpZFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaWxlTWFuYWdlci9WaWV3cy9HcmlkLnZ1ZSdcbiAgICBpbXBvcnQgTGlzdFZpZXcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaWxlTWFuYWdlci9WaWV3cy9MaXN0LnZ1ZSdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ2Fzc2V0LWZpZWxkdHlwZScsXG5cblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHQnZGlzcGxheS1hY3Rpb24nOiAgICBEaXNwbGF5QWN0aW9uLFxuXHRcdFx0J2JyZWFkY3J1bWItYWN0aW9uJzogQnJlYWRjcnVtYkFjdGlvbixcblx0XHRcdCdzZWFyY2gtYWN0aW9uJzogICAgIFNlYXJjaEFjdGlvbixcblx0XHRcdCdzb3J0LWFjdGlvbic6ICAgICAgIFNvcnRBY3Rpb24sXG5cdFx0XHQndmlldy1hY3Rpb24nOiAgICAgICBWaWV3QWN0aW9uLFxuXG5cdFx0XHQnZ3JpZC12aWV3JzogR3JpZFZpZXcsXG4gICAgICAgICAgICAnbGlzdC12aWV3JzogTGlzdFZpZXcsXG5cdFx0fSxcblxuXHRcdGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgXHRtb2RhbE9wZW46IGZhbHNlLFxuICAgICAgICAgICAgXHRzZWxlY3RlZDoge30sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIFx0dHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiB7fSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgICAgICAgXHRzZWxlY3RlZEZpbGVzOiAnZmlsZW1hbmFnZXIvZ2V0U2VsZWN0ZWRGaWxlcycsXG5cdFx0XHRcdGZpbGVzOiAgICAgICAgICdmaWxlbWFuYWdlci9nZXRGaWxlcycsXG5cdFx0XHRcdHZpZXc6ICAgICAgICAgICdmaWxlbWFuYWdlci9nZXRWaWV3JyxcbiAgICAgICAgXHR9KSxcblxuICAgICAgICBcdGhhc1NlbGVjdGlvbigpIHtcbiAgICAgICAgXHRcdHJldHVybiBfLnNpemUodGhpcy5zZWxlY3RlZCkgPiAwXG4gICAgICAgIFx0fVxuXG4gICAgICAgIH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcblx0XHRcdFx0Y2xlYXJGaWxlU2VsZWN0aW9uOiAnZmlsZW1hbmFnZXIvY2xlYXJGaWxlU2VsZWN0aW9uJyxcblx0XHRcdFx0cmVzZXQ6ICdmaWxlbWFuYWdlci9yZXNldCcsXG5cdFx0XHR9KSxcblxuXHRcdFx0YWRkKCkge1xuXHRcdFx0XHRfLmZvckVhY2godGhpcy5zZWxlY3RlZEZpbGVzLCAoaWQpID0+IHtcblx0XHRcdFx0XHR0aGlzLiRzZXQodGhpcy5zZWxlY3RlZCwgaWQsIF8uZmluZCh0aGlzLmZpbGVzLCBbICdpZCcsIGlkIF0pKVxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdC8vIHNhdmUgJiBjbGVhci4uXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy5zZWxlY3RlZClcblx0XHRcdFx0dGhpcy5jbGVhckZpbGVTZWxlY3Rpb24oKVxuXHRcdFx0fSxcblxuXHRcdFx0cmVtb3ZlKGlkKSB7XG5cdFx0XHRcdHRoaXMuJGRlbGV0ZSh0aGlzLnNlbGVjdGVkLCBpZClcblx0XHRcdH0sXG5cblx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdHRoaXMubW9kYWxPcGVuID0gdHJ1ZVxuXHRcdFx0XHR0aGlzLnJlc2V0KClcblxuXHRcdFx0XHR0aGlzLnNlbGVjdGVkID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy52YWx1ZSlcblx0XHRcdH0sXG5cblx0XHRcdGNsb3NlKCkge1xuXHRcdFx0XHR0aGlzLm1vZGFsT3BlbiA9IGZhbHNlXG5cdFx0XHRcdHRoaXMucmVzZXQoKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnktY29udGFpbmVyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeSBtYi0xMlwiIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5jdXJyZW50RGlyZWN0b3J5XG4gICAgICAgICAgPyBfYyhcImZpbGUtbWFuYWdlci1kaXJlY3RvcnlcIiwge1xuICAgICAgICAgICAgICBrZXk6IFwiZGlyZWN0b3J5LVwiICsgX3ZtLmN1cnJlbnREaXJlY3RvcnksXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgZGlyZWN0b3J5OiB7IGlkOiBfdm0ucGFyZW50RGlyZWN0b3J5LCBuYW1lOiBcIkdvIHVwXCIgfSxcbiAgICAgICAgICAgICAgICBzdWJ0aXRsZTogXCIuLlwiLFxuICAgICAgICAgICAgICAgIHVuc2VsZWN0YWJsZTogXCJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0uZGlyZWN0b3JpZXMsIGZ1bmN0aW9uKGRpcmVjdG9yeSkge1xuICAgICAgICAgIHJldHVybiBfYyhcImZpbGUtbWFuYWdlci1kaXJlY3RvcnlcIiwge1xuICAgICAgICAgICAga2V5OiBkaXJlY3RvcnkuaWQsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBkaXJlY3Rvcnk6IGRpcmVjdG9yeSxcbiAgICAgICAgICAgICAgc3VidGl0bGU6IGRpcmVjdG9yeS5maWxlc19jb3VudCArIFwiIGl0ZW1zXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmZpbGVzLmxlbmd0aFxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeVwiIH0sXG4gICAgICAgICAgX3ZtLl9sKF92bS5maWxlcywgZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IGtleTogZmlsZS51dWlkIH0sXG4gICAgICAgICAgICAgIFtfYyhcImZpbGUtbWFuYWdlci1maWxlXCIsIHsgYXR0cnM6IHsgZmlsZTogZmlsZSB9IH0pXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnktY29udGFpbmVyXCIgfSxcbiAgICBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmN1cnJlbnREaXJlY3RvcnlcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkaXJlY3RvcnktXCIgKyBfdm0uY3VycmVudERpcmVjdG9yeSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleCBwLTNcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctMS81XCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImZpbGUtbWFuYWdlci1kaXJlY3RvcnlcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHNtYWxsOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHVuc2VsZWN0YWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rvcnk6IHsgaWQ6IF92bS5wYXJlbnREaXJlY3RvcnksIG5hbWU6IFwiR28gdXBcIiB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9LCBbX3ZtLl92KFwiLi5cIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvNVwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS81XCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9KVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLmRpcmVjdG9yaWVzLCBmdW5jdGlvbihkaXJlY3RvcnkpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBkaXJlY3RvcnkuaWQsIHN0YXRpY0NsYXNzOiBcImZsZXggcC0zXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImZpbGUtbWFuYWdlci1kaXJlY3RvcnlcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNtYWxsOiBcIlwiLCBkaXJlY3Rvcnk6IGRpcmVjdG9yeSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS81XCIgfSwgW192bS5fdihfdm0uX3MoZGlyZWN0b3J5Lm5hbWUpKV0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvNVwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvNVwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvNVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgX3ZtLl9zKF92bS4kbW9tZW50KGRpcmVjdG9yeS51cGRhdGVkX2F0KS5mb3JtYXQoXCJNTU0gRG8sIFlZWVlcIikpXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uZmlsZXMsIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBmaWxlLnV1aWQsIHN0YXRpY0NsYXNzOiBcImZsZXggcC0zXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCB3LWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LTEvNVwiIH0sXG4gICAgICAgICAgICAgIFtfYyhcImZpbGUtbWFuYWdlci1maWxlXCIsIHsgYXR0cnM6IHsgc21hbGw6IFwiXCIsIGZpbGU6IGZpbGUgfSB9KV0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvNVwiIH0sIFtfdm0uX3YoX3ZtLl9zKGZpbGUubmFtZSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvNVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJieXRlc1wiKShmaWxlLmJ5dGVzKSkpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctMS81XCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGZpbGUubWltZXR5cGUpKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvNVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uJG1vbWVudChmaWxlLnVwZGF0ZWRfYXQpLmZvcm1hdChcIk1NTSBEbywgWVlZWVwiKSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGZvbnQtYm9sZCBweC0zXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvNVwiIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9LCBbX3ZtLl92KFwiTmFtZVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9LCBbX3ZtLl92KFwiRmlsZSBzaXplXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvNVwiIH0sIFtfdm0uX3YoXCJNaW1ldHlwZVwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzVcIiB9LCBbX3ZtLl92KFwiTGFzdCBtb2RpZmllZFwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiLCBhdHRyczogeyBmb3I6IF92bS5maWVsZC5oYW5kbGUgfSB9LFxuICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZmllbGQubmFtZSkpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgbS0yIHB5LTJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHRoZW1lOiBcInNlY29uZGFyeVwiIH0sIG9uOiB7IGNsaWNrOiBfdm0ub3BlbiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInBsdXMtY2lyY2xlXCJdIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBBc3NldFxcblxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiIH0sXG4gICAgICAgIF92bS5fbChfdm0udmFsdWUsIGZ1bmN0aW9uKGZpbGUsIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGZpbGUuaWQsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm14LTJcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZShmaWxlLmlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XCIgKyBfdm0uX3MoZmlsZS5uYW1lKSArIFwiXFxuXFx0XFx0XFx0XFx0XCIpLFxuICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTJcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ0aW1lcy1jaXJjbGVcIl0gfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInAtbW9kYWxcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBcImZpbGUtbWFuYWdlclwiLFxuICAgICAgICAgICAgXCJuby1oZWFkZXJcIjogXCJcIixcbiAgICAgICAgICAgIFwibm8tZm9vdGVyXCI6IFwiXCIsXG4gICAgICAgICAgICBcImV4dHJhLWxhcmdlXCI6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1vZGFsT3BlbixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLm1vZGFsT3BlbiA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9kYWxPcGVuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2lkZS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBoLWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcHgtMyBweS0yIHRleHQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW19jKFwiZmEtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRpbWVzXCJdIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmhhc1NlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLXNvcnRhYmxlLWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNvcnRhYmxlLWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgbWItNiB3LWZ1bGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWxlY3RlZCwgZnVuY3Rpb24oZmlsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicC1zb3J0YWJsZS1pdGVtXCIsIHsga2V5OiBmaWxlLmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTIgcHgtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtc29ydGFibGUtaGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjdXJzb3ItbW92ZSB3LTEvNVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYW5kbGUgZmEtZncgdGV4dC1ncmF5LTQwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImVsbGlwc2lzLXZcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBmaWxlLnVybCArIFwiP3c9NTAmaD01MCZmaXQ9Y3JvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoX3ZtLl9zKGZpbGUubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJkYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlKGZpbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRyYXNoXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC01eGwgdGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBmYS0zeFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXJcIiwgXCJjb3B5XCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWxnIHB5LTIgdGV4dC1ncmF5LTUwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWxlY3Qgc29tZSBmaWxlcy4uLlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTMgcHQtMlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXItNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwic3VjY2Vzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYWRkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBbXCJmYXNcIiwgXCJhcnJvdy1hbHQtY2lyY2xlLWxlZnRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggdy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtci0yIHctZnVsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNlYXJjaC1hY3Rpb25cIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImRpc3BsYXktYWN0aW9uXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1yLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzb3J0LWFjdGlvblwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtci0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwidmlldy1hY3Rpb25cIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGV4IGl0ZW1zLWNlbnRlciBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcHgtMyBweS0yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiYnJlYWRjcnVtYi1hY3Rpb25cIildLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKF92bS52aWV3ICsgXCItdmlld1wiLCB7IHRhZzogXCJjb21wb25lbnRcIiB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vR3JpZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTA5MjkyNzAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vR3JpZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0dyaWQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbmNtcy12Ni9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1MDkyOTI3MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1MDkyOTI3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1MDkyOTI3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vR3JpZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTA5MjkyNzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTA5MjkyNzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL1ZpZXdzL0dyaWQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmlkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9HcmlkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01MDkyOTI3MCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTQ1YjY4NzAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbmNtcy12Ni9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlNDViNjg3MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlNDViNjg3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlNDViNjg3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTQ1YjY4NzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTQ1YjY4NzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL1ZpZXdzL0xpc3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9MaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNDViNjg3MCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2MjVjMTA5JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbmNtcy12Ni9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0NjI1YzEwOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0NjI1YzEwOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0NjI1YzEwOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2MjVjMTA5JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ2MjVjMTA5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2MjVjMTA5JlwiIiwiaW1wb3J0IERyYWdTZWxlY3QgZnJvbSAnRHJhZ1NlbGVjdCdcbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbGVjdG9yOiBudWxsXG5cdFx0fVxuXHR9LFxuXG5cdHdhdGNoOiB7XG4gICAgICAgIGxvYWRpbmc6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIFx0dGhpcy5zZWxlY3Rvci5hZGRTZWxlY3RhYmxlcyhkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnYWxsZXJ5LWl0ZW0nKSlcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgIFx0Li4ubWFwR2V0dGVycyh7XG4gICAgXHRcdGxvYWRpbmc6ICdmaWxlbWFuYWdlci9nZXRMb2FkaW5nJyxcbiAgICBcdH0pXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICBcdC4uLm1hcEFjdGlvbnMoe1xuICAgICAgICAgICAgdG9nZ2xlRGlyZWN0b3J5U2VsZWN0aW9uOiAnZmlsZW1hbmFnZXIvdG9nZ2xlRGlyZWN0b3J5U2VsZWN0aW9uJyxcbiAgICAgICAgICAgIGNsZWFyRGlyZWN0b3J5U2VsZWN0aW9uOiAnZmlsZW1hbmFnZXIvY2xlYXJEaXJlY3RvcnlTZWxlY3Rpb24nLFxuICAgICAgICAgICAgbW92ZUZpbGVUb0RpcmVjdG9yeTogJ2ZpbGVtYW5hZ2VyL21vdmVGaWxlVG9EaXJlY3RvcnknLFxuICAgICAgICAgICAgdG9nZ2xlRmlsZVNlbGVjdGlvbjogJ2ZpbGVtYW5hZ2VyL3RvZ2dsZUZpbGVTZWxlY3Rpb24nLFxuICAgICAgICAgICAgY2xlYXJGaWxlU2VsZWN0aW9uOiAnZmlsZW1hbmFnZXIvY2xlYXJGaWxlU2VsZWN0aW9uJyxcbiAgICBcdFx0c2V0RHJvcHpvbmVWaXNpYmxlOiAnZmlsZW1hbmFnZXIvc2V0RHJvcHpvbmVWaXNpYmxlJyxcbiAgICBcdFx0c2V0RHJvcHpvbmVFbmFibGVkOiAnZmlsZW1hbmFnZXIvc2V0RHJvcHpvbmVFbmFibGVkJyxcbiAgICAgICAgfSksXG5cbiAgICAgICAgY2xlYXJTZWxlY3Rpb25zKCkge1xuICAgIFx0XHR0aGlzLmNsZWFyRmlsZVNlbGVjdGlvbigpXG5cdFx0XHR0aGlzLmNsZWFyRGlyZWN0b3J5U2VsZWN0aW9uKClcblx0XHRcdHRoaXMuc2VsZWN0ZWQgPSB7IGRpcmVjdG9yaWVzOiBbXSwgZmlsZXM6IFtdIH1cbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgIFx0Y29uc3QgY29udGFpbmVyICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1jb250YWluZXInKVxuICAgIFx0Y29uc3Qgc2VsZWN0YWJsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdnYWxsZXJ5LWl0ZW0nKVxuXG5cdFx0Ly8gRHJhZyBTdGFydFxuXHRcdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCAoZXYpID0+IHtcblx0XHRcdHRoaXMuc2V0RHJvcHpvbmVFbmFibGVkKGZhbHNlKVxuXG5cdFx0XHQvLyBQcmV2ZW50IERyYWcgQmVoYXZpb3Igd2hlbiBlbGVtZW50IGlzIG5vdCBzZWxlY3RlZFxuXHRcdFx0aWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RzLXNlbGVjdGVkJykpIHtcblx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHQvLyBEcmFnIFN0YXJ0XG5cdFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCAoZXYpID0+IHtcblx0XHRcdHRoaXMuc2V0RHJvcHpvbmVWaXNpYmxlKGZhbHNlKVxuXHRcdFx0dGhpcy5zZXREcm9wem9uZUVuYWJsZWQodHJ1ZSlcblx0XHRcdGV2LnByZXZlbnREZWZhdWx0KClcblx0XHR9KVxuXG5cdFx0Ly8gRHJhZyBXYXRjaFxuXHRcdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnJywgKGV2KSA9PiB7XG5cdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRcdGlmIChldi5zY3JlZW5ZIDwgMjAwKSB7XG5cdFx0XHRcdHNjcm9sbEJ5KDAsIC0xKVxuXHRcdFx0fSBlbHNlIGlmIChldi5zY3JlZW5ZID4gd2luZG93LmlubmVySGVpZ2h0IC0gMjAwKSB7XG5cdFx0XHRcdHNjcm9sbEJ5KDAsICAxKVxuXHRcdFx0fVxuXHRcdH0pXG5cbiAgICBcdC8vIERyYWcgRW50ZXJcbiAgICBcdC8vIExvb2tpbmcgdG8gZW50ZXIgYSBEcm9wem9uZSAtIHVuaGlnaHRsaWdodFxuICAgIFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIChldikgPT4ge1xuXHRcdFx0aWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbGxlcnktLWRyb3B6b25lJykpIHtcblx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRldi50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QuYWRkKCdkcm9wem9uZS1vdmVyJylcblx0XHRcdH1cblx0XHR9KVxuXG4gICAgXHQvLyBEcmFnIE92ZXJcbiAgICBcdC8vIFJlcXVpcmVkIGZvciBgRHJvcGAgZXZlbnRcblx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCAoZXYpID0+IHtcblx0XHRcdGlmIChldi50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdnYWxsZXJ5LS1kcm9wem9uZScpKSB7XG5cdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KClcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0Ly8gRHJhZyBMZWF2ZVxuICAgIFx0Ly8gTGVhdmluZyBhIERyb3B6b25lIC0gdW5oaWdodGxpZ2h0XG5cdFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChldikgPT4ge1xuXHRcdFx0aWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2dhbGxlcnktLWRyb3B6b25lJykpIHtcblx0XHRcdFx0ZXYucHJldmVudERlZmF1bHQoKVxuXHRcdFx0XHRldi50YXJnZXQucGFyZW50Tm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wem9uZS1vdmVyJylcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0Ly8gRHJvcCBFdmVudFxuXHRcdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZ2FsbGVyeS0tZHJvcHpvbmUnKSkge1xuXHRcdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpXG5cblx0XHRcdFx0bGV0IGRyb3B6b25lICA9IGV2LnRhcmdldC5wYXJlbnROb2RlXG5cdFx0XHRcdGxldCBkaXJlY3RvcnkgPSBwYXJzZUludChkcm9wem9uZS5kYXRhc2V0LmRpcmVjdG9yeSlcblxuXHRcdFx0XHRkcm9wem9uZS5jbGFzc0xpc3QuYWRkKCdkcm9wem9uZS1oaWdobGlnaHQnKVxuXHRcdFx0XHRkcm9wem9uZS5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wem9uZS1vdmVyJylcblxuXHRcdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRkcm9wem9uZS5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wem9uZS1oaWdobGlnaHQnKVxuXHRcdFx0XHR9LCAxMDAwKVxuXG5cdFx0XHRcdHRoaXMubW92ZUZpbGVUb0RpcmVjdG9yeSh7IGRpcmVjdG9yeTogZGlyZWN0b3J5LCBtb3Zpbmc6IHRoaXMuc2VsZWN0ZWQgfSlcblx0XHRcdFx0dGhpcy5jbGVhclNlbGVjdGlvbnMoKVxuXHRcdFx0fVxuXHRcdH0pXG5cblx0XHR0aGlzLnNlbGVjdG9yID0gbmV3IERyYWdTZWxlY3Qoe1xuXHRcdFx0c2VsZWN0YWJsZXM6IHNlbGVjdGFibGVzLFxuXHRcdFx0YXJlYTogY29udGFpbmVyLFxuICAgICAgICAgICAgY2FsbGJhY2s6IChlbGVtZW50cykgPT4ge1xuICAgICAgICAgICAgXHR0aGlzLmNsZWFyU2VsZWN0aW9ucygpXG5cbiAgICBcdFx0XHQvLyBUb2dnbGUgZmlsZXMvZGlyZWN0b3JpZXNcbiAgICAgICAgICAgIFx0Xy5mb3JFYWNoKGVsZW1lbnRzLCAoZWwpID0+IHtcbiAgICAgICAgICAgIFx0XHRpZiAoZWwuZGF0YXNldC5maWxlKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZUZpbGVTZWxlY3Rpb24ocGFyc2VJbnQoZWwuZGF0YXNldC5maWxlKSlcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWQuZmlsZXMucHVzaChwYXJzZUludChlbC5kYXRhc2V0LmZpbGUpKVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZWwuZGF0YXNldC5kaXJlY3RvcnkpIHtcblx0XHRcdFx0XHRcdHRoaXMudG9nZ2xlRGlyZWN0b3J5U2VsZWN0aW9uKHBhcnNlSW50KGVsLmRhdGFzZXQuZGlyZWN0b3J5KSlcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWQuZGlyZWN0b3JpZXMucHVzaChwYXJzZUludChlbC5kYXRhc2V0LmRpcmVjdG9yeSkpXG5cdFx0XHRcdFx0fVxuICAgICAgICAgICAgXHR9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgLy8gU3RhcnQgZHJhZ2dpbmcgc2VsZWN0b3IuLlxuXHRcdFx0b25EcmFnU3RhcnQ6IChlbCkgPT4ge1xuXHRcdFx0XHQvLyBQcmV2ZW50IHNlbGVjdG9yIGZyb20gc2VsZWN0aW5nXG5cdFx0XHRcdGlmIChlbC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdnYWxsZXJ5LWl0ZW0tLXNlbGVjdGVkJykgfHwgZWwudGFyZ2V0LmNsb3Nlc3QoJy5nYWxsZXJ5LWl0ZW0tLXNlbGVjdGVkJykpIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdG9yLmJyZWFrKClcblx0XHRcdFx0fVxuXHRcdFx0fSxcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgZGVzdHJveWVkKCkge1xuICAgIFx0dGhpcy5zZWxlY3Rvci5zdG9wKClcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==