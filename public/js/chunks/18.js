(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-manager/FileSelection.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/file-manager/FileSelection.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    selection: {
      get: function get() {
        return this.value;
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    },
    addLimit: function addLimit() {
      return this.limit - this.selection.length;
    }
  },
  props: {
    value: {
      type: Array,
      required: true
    },
    limit: {
      type: Number,
      "default": Infinity
    },
    hasHeader: {
      type: Boolean,
      "default": true
    }
  },
  methods: {
    remove: function remove(id) {
      this.selection = _.filter(this.selection, function (item) {
        return item.id !== id;
      });
    }
  }
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
/* harmony import */ var _components_file_manager_FileUploader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/file-manager/FileUploader.vue */ "./resources/js/components/file-manager/FileUploader.vue");
/* harmony import */ var _components_file_manager_FileSelection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/file-manager/FileSelection.vue */ "./resources/js/components/file-manager/FileSelection.vue");
/* harmony import */ var _components_file_manager_actions_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/file-manager/actions/Breadcrumb.vue */ "./resources/js/components/file-manager/actions/Breadcrumb.vue");
/* harmony import */ var _components_file_manager_actions_Display_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/file-manager/actions/Display.vue */ "./resources/js/components/file-manager/actions/Display.vue");
/* harmony import */ var _components_file_manager_actions_Search_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/file-manager/actions/Search.vue */ "./resources/js/components/file-manager/actions/Search.vue");
/* harmony import */ var _components_file_manager_actions_Sort_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/file-manager/actions/Sort.vue */ "./resources/js/components/file-manager/actions/Sort.vue");
/* harmony import */ var _components_file_manager_actions_View_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/file-manager/actions/View.vue */ "./resources/js/components/file-manager/actions/View.vue");
/* harmony import */ var _components_file_manager_browse_Directory_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/file-manager/browse/Directory.vue */ "./resources/js/components/file-manager/browse/Directory.vue");
/* harmony import */ var _components_file_manager_browse_File_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/file-manager/browse/File.vue */ "./resources/js/components/file-manager/browse/File.vue");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
//
//
//
//
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
    'file-uploader': _components_file_manager_FileUploader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'file-selection': _components_file_manager_FileSelection_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'display-action': _components_file_manager_actions_Display_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    'breadcrumb-action': _components_file_manager_actions_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'search-action': _components_file_manager_actions_Search_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    'sort-action': _components_file_manager_actions_Sort_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    'view-action': _components_file_manager_actions_View_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    'directory': _components_file_manager_browse_Directory_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    'file': _components_file_manager_browse_File_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  mixins: [__webpack_require__(/*! ../../mixins/fileselector */ "./resources/js/mixins/fileselector.js")["default"], __webpack_require__(/*! ../../mixins/filedragdrop */ "./resources/js/mixins/filedragdrop.js")["default"], __webpack_require__(/*! ../../mixins/filebrowser */ "./resources/js/mixins/filebrowser.js")["default"]],
  data: function data() {
    return {
      requestOpen: false,
      modalOpen: false,
      selection: []
    };
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      type: Array,
      required: false,
      "default": function _default() {
        return [];
      }
    }
  },
  watch: {
    loading: function loading(isLoading) {
      var _this = this;

      this.$nextTick(function () {
        if (isLoading) {
          _this.destroySelector();
        } else {
          _this.loadSelector(_this.$el.querySelector('.selectables'));

          if (_this.requestOpen) {
            _this.modalOpen = true;
            _this.requestOpen = false;
          }
        }
      });
    }
  },
  computed: {
    selected: {
      get: function get() {
        return this.value || [];
      },
      set: function set(value) {
        this.$emit('input', value);
      }
    },
    selectionLimit: function selectionLimit() {
      return Number(this.field.settings.limit) || Infinity;
    },
    addLimit: function addLimit() {
      return this.selectionLimit - this.selection.length;
    },
    typeRestriction: function typeRestriction() {
      return this.field.settings.filetype_restrictions;
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    setDropzoneVisible: 'filemanager/setDropzoneVisible'
  }), {
    isValidSelection: function isValidSelection(file) {
      return this.typeRestriction.length == 0 || _.includes(this.typeRestriction, file.type);
    },
    push: function push() {
      var _this2 = this;

      _.forEach(this.selectedFiles, function (id) {
        return _this2.add(id);
      });
    },
    add: function add(id) {
      if (this.addLimit > 0) {
        var exists = _.find(this.selection, ['id', id]);

        var file = _.find(this.files, ['id', id]);

        if (!exists && this.isValidSelection(file)) {
          this.selection.push(file);
        }
      }
    },
    open: function open() {
      this.reset();
      this.setCurrentDirectory(this.field.settings.root_directory);
      this.setRootDirectory(this.field.settings.root_directory);
      this.fetchFilesAndDirectories();
      this.selection = _toConsumableArray(this.selected);
      this.requestOpen = true;
    },
    close: function close() {
      this.reset();
      this.selection = [];
      this.modalOpen = false;
    },
    reject: function reject() {
      this.close();
    },
    accept: function accept() {
      this.selected = this.selection;
      this.close();
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-manager/FileSelection.vue?vue&type=template&id=61a9fae8&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/file-manager/FileSelection.vue?vue&type=template&id=61a9fae8& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card h-full" }, [
    _vm.hasHeader
      ? _c(
          "div",
          {
            staticClass:
              "flex items-center justify-between border-b border-gray-200 p-3"
          },
          [
            _c(
              "p-button",
              {
                attrs: { theme: "warning" },
                on: {
                  click: function($event) {
                    return _vm.$emit("reject")
                  }
                }
              },
              [
                _c("fa-icon", {
                  staticClass: "mr-2",
                  attrs: { icon: ["fas", "times"] }
                }),
                _vm._v(" Reject")
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "p-button",
              {
                attrs: { theme: "info" },
                on: {
                  click: function($event) {
                    return _vm.$emit("accept")
                  }
                }
              },
              [
                _vm._v("Accept "),
                _c("fa-icon", {
                  staticClass: "ml-2",
                  attrs: { icon: ["fas", "check"] }
                })
              ],
              1
            )
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.selection.length > 0
      ? _c(
          "div",
          [
            _c(
              "p-sortable-list",
              {
                staticClass: "sortable-list",
                model: {
                  value: _vm.selection,
                  callback: function($$v) {
                    _vm.selection = $$v
                  },
                  expression: "selection"
                }
              },
              [
                _c(
                  "div",
                  { staticClass: "w-full p-3" },
                  _vm._l(_vm.selection, function(file) {
                    return _c("p-sortable-item", { key: file.id }, [
                      _c("div", { staticClass: "flex items-center py-2" }, [
                        _c(
                          "div",
                          { staticClass: "w-1/12" },
                          [
                            _c(
                              "p-sortable-handle",
                              { staticClass: "cursor-move" },
                              [
                                _c("fa-icon", {
                                  staticClass: "handle fa-fw text-gray-400",
                                  attrs: { icon: "ellipsis-v" }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "w-3/12" },
                          [
                            file.type == "image"
                              ? _c("p-img", {
                                  attrs: {
                                    src: file.url + "?w=50&h=50&fit=crop",
                                    "background-color": "white",
                                    width: 50,
                                    height: 50
                                  }
                                })
                              : _c("p-img", {
                                  attrs: {
                                    src: "/img/" + file.type + "-large.svg",
                                    "background-color": "white",
                                    width: 50,
                                    height: 50
                                  }
                                })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "w-6/12" }, [
                          _c("div", [_vm._v(_vm._s(file.name))])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "w-2/12 text-right" },
                          [
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
                    ])
                  }),
                  1
                )
              ]
            ),
            _vm._v(" "),
            _vm.addLimit <= 0
              ? _c(
                  "div",
                  { staticClass: "text-sm italic text-danger-600 text-center" },
                  [_vm._v("\n\t\t\tFile limit reached\n\t\t")]
                )
              : _vm._e()
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
            _c("span", { staticClass: "text-lg py-2 text-gray-500" }, [
              _vm._v("Select some files...")
            ])
          ],
          1
        )
  ])
}
var staticRenderFns = []
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
        { staticClass: "flex items-start justify-between" },
        [
          _c(
            "div",
            { staticClass: "w-1/2" },
            [
              _c(
                "p-button",
                {
                  attrs: { disabled: _vm.requestOpen },
                  on: { click: _vm.open }
                },
                [
                  _c("fa-icon", {
                    staticClass: "mr-1",
                    attrs: { icon: ["fas", "plus-circle"] }
                  }),
                  _vm._v(" Manage Assets\n\t\t\t\t")
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("file-selection", {
            staticClass: "w-1/2",
            attrs: { limit: _vm.selectionLimit, hasHeader: false },
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
          _c("file-uploader", { ref: "uploader" }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "row",
              on: {
                dragenter: function($event) {
                  return _vm.setDropzoneVisible(true)
                }
              }
            },
            [
              _c(
                "div",
                { staticClass: "side-container" },
                [
                  _c("file-selection", {
                    attrs: { limit: _vm.selectionLimit },
                    on: { reject: _vm.reject, accept: _vm.accept },
                    model: {
                      value: _vm.selection,
                      callback: function($$v) {
                        _vm.selection = $$v
                      },
                      expression: "selection"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "content-container" }, [
                _c("div", { staticClass: "card" }, [
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
                                on: { click: _vm.push }
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
                      _c("ul", [
                        _c(
                          "li",
                          { staticClass: "inline-flex mr-2" },
                          [
                            _c(
                              "p-button",
                              {
                                staticClass: "rounded-r-none",
                                attrs: { theme: "primary" },
                                on: {
                                  click: function($event) {
                                    return _vm.$refs.uploader.openDZ()
                                  }
                                }
                              },
                              [
                                _c("fa-icon", {
                                  attrs: { icon: ["fas", "upload"] }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "p-button",
                              {
                                directives: [
                                  {
                                    name: "modal",
                                    rawName: "v-modal:new-folder",
                                    arg: "new-folder"
                                  }
                                ],
                                staticClass: "rounded-l-none"
                              },
                              [
                                _c("fa-icon", {
                                  attrs: { icon: ["fas", "folder-plus"] }
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
                  _c("div", { staticClass: "gallery-container selectables" }, [
                    _c(
                      "div",
                      { staticClass: "gallery border-b border-gray-200 pb-2" },
                      _vm._l(_vm.directories, function(directory) {
                        return _c("directory", {
                          key: directory.id,
                          attrs: { directory: directory, isDropzone: true },
                          on: {
                            dblclick: function($event) {
                              return _vm.navigate(directory)
                            }
                          }
                        })
                      }),
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "gallery" },
                      _vm._l(_vm.files, function(file) {
                        return _c("file", {
                          key: file.id,
                          attrs: { file: file },
                          on: {
                            dblclick: function($event) {
                              return _vm.add(file.id)
                            }
                          }
                        })
                      }),
                      1
                    )
                  ])
                ])
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "modals" } }, [_c("new-folder-modal")], 1)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/file-manager/FileSelection.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/file-manager/FileSelection.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileSelection_vue_vue_type_template_id_61a9fae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileSelection.vue?vue&type=template&id=61a9fae8& */ "./resources/js/components/file-manager/FileSelection.vue?vue&type=template&id=61a9fae8&");
/* harmony import */ var _FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileSelection.vue?vue&type=script&lang=js& */ "./resources/js/components/file-manager/FileSelection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileSelection_vue_vue_type_template_id_61a9fae8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileSelection_vue_vue_type_template_id_61a9fae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/file-manager/FileSelection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/file-manager/FileSelection.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/file-manager/FileSelection.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileSelection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-manager/FileSelection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/file-manager/FileSelection.vue?vue&type=template&id=61a9fae8&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/file-manager/FileSelection.vue?vue&type=template&id=61a9fae8& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_template_id_61a9fae8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileSelection.vue?vue&type=template&id=61a9fae8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/file-manager/FileSelection.vue?vue&type=template&id=61a9fae8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_template_id_61a9fae8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_template_id_61a9fae8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL0ZpbGVTZWxlY3Rpb24udnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL0ZpbGVTZWxlY3Rpb24udnVlP2Y3YzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvRmllbGQudnVlPzZiMjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL0ZpbGVTZWxlY3Rpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2ZpbGUtbWFuYWdlci9GaWxlU2VsZWN0aW9uLnZ1ZT9mYmFhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2ZpbGUtbWFuYWdlci9GaWxlU2VsZWN0aW9uLnZ1ZT84YmZhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWU/ZDlhZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWU/ZTQzMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBO0FBQ0E7QUFDQTtBQUNBLFNBREEsaUJBQ0E7QUFDQTtBQUNBLE9BSEE7QUFLQSxTQUxBLGVBS0EsS0FMQSxFQUtBO0FBQ0E7QUFDQTtBQVBBLEtBREE7QUFXQSxZQVhBLHNCQVdBO0FBQ0E7QUFDQTtBQWJBLEdBREE7QUFpQkE7QUFDQTtBQUNBLGlC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ZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImNhcmQgaC1mdWxsXCI+XG5cdFx0PGRpdiB2LWlmPVwiaGFzSGVhZGVyXCIgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHAtM1wiPlxuXHRcdFx0PHAtYnV0dG9uIEBjbGljaz1cIiRlbWl0KCdyZWplY3QnKVwiIHRoZW1lPVwid2FybmluZ1wiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndGltZXMnXVwiIGNsYXNzPVwibXItMlwiPjwvZmEtaWNvbj4gUmVqZWN0PC9wLWJ1dHRvbj5cblx0XHRcdDxwLWJ1dHRvbiBAY2xpY2s9XCIkZW1pdCgnYWNjZXB0JylcIiB0aGVtZT1cImluZm9cIj5BY2NlcHQgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdjaGVjayddXCIgY2xhc3M9XCJtbC0yXCI+PC9mYS1pY29uPjwvcC1idXR0b24+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IHYtaWY9XCJzZWxlY3Rpb24ubGVuZ3RoID4gMFwiPlxuXHRcdFx0PHAtc29ydGFibGUtbGlzdCB2LW1vZGVsPVwic2VsZWN0aW9uXCIgY2xhc3M9XCJzb3J0YWJsZS1saXN0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LWZ1bGwgcC0zXCI+XG5cdFx0XHRcdFx0PHAtc29ydGFibGUtaXRlbSB2LWZvcj1cImZpbGUgaW4gc2VsZWN0aW9uXCIgOmtleT1cImZpbGUuaWRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBweS0yXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTEvMTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cC1zb3J0YWJsZS1oYW5kbGUgY2xhc3M9XCJjdXJzb3ItbW92ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGZhLWljb24gaWNvbj1cImVsbGlwc2lzLXZcIiBjbGFzcz1cImhhbmRsZSBmYS1mdyB0ZXh0LWdyYXktNDAwXCI+PC9mYS1pY29uPlxuXHRcdFx0XHRcdFx0XHRcdDwvcC1zb3J0YWJsZS1oYW5kbGU+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy0zLzEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAtaW1nIHYtaWY9XCJmaWxlLnR5cGUgPT0gJ2ltYWdlJ1wiIDpzcmM9XCJmaWxlLnVybCArICc/dz01MCZoPTUwJmZpdD1jcm9wJ1wiIGJhY2tncm91bmQtY29sb3I9XCJ3aGl0ZVwiIDp3aWR0aD1cIjUwXCIgOmhlaWdodD1cIjUwXCI+PC9wLWltZz5cblx0XHRcdFx0XHRcdFx0XHQ8cC1pbWcgdi1lbHNlIDpzcmM9XCInL2ltZy8nICsgZmlsZS50eXBlICsgJy1sYXJnZS5zdmcnXCIgYmFja2dyb3VuZC1jb2xvcj1cIndoaXRlXCIgOndpZHRoPVwiNTBcIiA6aGVpZ2h0PVwiNTBcIj48L3AtaW1nPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInctNi8xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+e3sgZmlsZS5uYW1lIH19PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy0yLzEyIHRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwicmVtb3ZlKGZpbGUuaWQpXCIgdGhlbWU9XCJkYW5nZXJcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3RyYXNoJ11cIj48L2ZhLWljb24+PC9wLWJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3Atc29ydGFibGUtaXRlbT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3Atc29ydGFibGUtbGlzdD5cblxuXHRcdFx0PGRpdiB2LWlmPVwiYWRkTGltaXQgPD0gMFwiIGNsYXNzPVwidGV4dC1zbSBpdGFsaWMgdGV4dC1kYW5nZXItNjAwIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdEZpbGUgbGltaXQgcmVhY2hlZFxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IHYtZWxzZSBjbGFzcz1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LTV4bCB0ZXh0LWdyYXktMzAwXCI+XG5cdFx0XHQ8ZmEtaWNvbiA6aWNvbj1cIlsnZmFyJywgJ2NvcHknXVwiIGNsYXNzPVwiZmEtZncgZmEtM3hcIj48L2ZhLWljb24+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cInRleHQtbGcgcHktMiB0ZXh0LWdyYXktNTAwXCI+U2VsZWN0IHNvbWUgZmlsZXMuLi48L3NwYW4+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRzZWxlY3Rpb246IHtcblx0XHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSlcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0YWRkTGltaXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmxpbWl0IC0gdGhpcy5zZWxlY3Rpb24ubGVuZ3RoXG5cdFx0XHR9LFxuXHRcdH0sXG5cblx0XHRwcm9wczoge1xuXHRcdFx0dmFsdWU6IHtcblx0XHRcdFx0dHlwZTogQXJyYXksXG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlXG5cdFx0XHR9LFxuXG5cdFx0XHRsaW1pdDoge1xuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXG5cdFx0XHRcdGRlZmF1bHQ6IEluZmluaXR5XG5cdFx0XHR9LFxuXG5cdFx0XHRoYXNIZWFkZXI6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHRyZW1vdmUoaWQpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3Rpb24gPSBfLmZpbHRlcih0aGlzLnNlbGVjdGlvbiwgKGl0ZW0pID0+IHsgcmV0dXJuIGl0ZW0uaWQgIT09IGlkIH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PGxhYmVsIDpmb3I9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2xhYmVsXCI+e3sgZmllbGQubmFtZSB9fTwvbGFiZWw+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ3LTEvMlwiPlxuXHRcdFx0XHQ8cC1idXR0b24gOmRpc2FibGVkPVwicmVxdWVzdE9wZW5cIiBAY2xpY2s9XCJvcGVuXCI+XG5cdFx0XHRcdFx0PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdwbHVzLWNpcmNsZSddXCIgY2xhc3M9XCJtci0xXCI+PC9mYS1pY29uPiBNYW5hZ2UgQXNzZXRzXG5cdFx0XHRcdDwvcC1idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblxuXHRcdFx0PGZpbGUtc2VsZWN0aW9uXG5cdFx0XHRcdGNsYXNzPVwidy0xLzJcIlxuXHRcdFx0XHQ6bGltaXQ9XCJzZWxlY3Rpb25MaW1pdFwiXG5cdFx0XHRcdDpoYXNIZWFkZXI9XCJmYWxzZVwiXG5cdFx0XHRcdHYtbW9kZWw9XCJzZWxlY3RlZFwiPlxuXHRcdFx0PC9maWxlLXNlbGVjdGlvbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDwhLS0gRmlsZSBNYW5hZ2VyIE1vZGFsIC0tPlxuXHRcdDxwLW1vZGFsIG5hbWU9XCJmaWxlLW1hbmFnZXJcIiBuby1oZWFkZXIgbm8tZm9vdGVyIGV4dHJhLWxhcmdlIHYtbW9kZWw9XCJtb2RhbE9wZW5cIj5cblx0XHRcdDxmaWxlLXVwbG9hZGVyIHJlZj1cInVwbG9hZGVyXCI+PC9maWxlLXVwbG9hZGVyPlxuXG5cdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCIgQGRyYWdlbnRlcj1cInNldERyb3B6b25lVmlzaWJsZSh0cnVlKVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2lkZS1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZmlsZS1zZWxlY3Rpb25cblx0XHRcdFx0XHRcdDpsaW1pdD1cInNlbGVjdGlvbkxpbWl0XCJcblx0XHRcdFx0XHRcdEByZWplY3Q9XCJyZWplY3RcIlxuXHRcdFx0XHRcdFx0QGFjY2VwdD1cImFjY2VwdFwiXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwic2VsZWN0aW9uXCI+XG5cdFx0XHRcdFx0PC9maWxlLXNlbGVjdGlvbj5cblx0XHRcdCAgIFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMyBwdC0yXCI+XG5cdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJtci00XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwicHVzaFwiIHRoZW1lPVwic3VjY2Vzc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2Fycm93LWFsdC1jaXJjbGUtbGVmdCddXCIgY2xhc3M9XCJtci0xXCI+PC9mYS1pY29uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wLWJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8dWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHQ8bGkgY2xhc3M9XCJpbmxpbmUtZmxleCBtci0yXCI+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIGNsYXNzPVwicm91bmRlZC1yLW5vbmVcIiB0aGVtZT1cInByaW1hcnlcIiBAY2xpY2s9XCIkcmVmcy51cGxvYWRlci5vcGVuRFooKVwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndXBsb2FkJ11cIj48L2ZhLWljb24+PC9wLWJ1dHRvbj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gY2xhc3M9XCJyb3VuZGVkLWwtbm9uZVwiIHYtbW9kYWw6bmV3LWZvbGRlcj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2ZvbGRlci1wbHVzJ11cIj48L2ZhLWljb24+PC9wLWJ1dHRvbj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG5cdCAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzcz1cImZsZXggdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdCAgICA8bGkgY2xhc3M9XCJtci0yIHctZnVsbFwiPjxzZWFyY2gtYWN0aW9uPjwvc2VhcmNoLWFjdGlvbj48L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJmbGV4XCI+XG5cdFx0XHRcdFx0XHRcdCAgICA8bGkgY2xhc3M9XCJtci0yXCI+PGRpc3BsYXktYWN0aW9uPjwvZGlzcGxheS1hY3Rpb24+PC9saT5cblx0XHRcdFx0XHRcdFx0ICAgIDxsaSBjbGFzcz1cIm1yLTJcIj48c29ydC1hY3Rpb24+PC9zb3J0LWFjdGlvbj48L2xpPlxuXHRcdFx0XHRcdFx0XHQgICAgPGxpIGNsYXNzPVwibXItMlwiPjx2aWV3LWFjdGlvbj48L3ZpZXctYWN0aW9uPjwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBweC0zIHB5LTJcIj5cblx0XHRcdFx0XHRcdFx0PGJyZWFkY3J1bWItYWN0aW9uPjwvYnJlYWRjcnVtYi1hY3Rpb24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhbGxlcnktY29udGFpbmVyIHNlbGVjdGFibGVzXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBwYi0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpcmVjdG9yeVxuXHRcdFx0XHRcdFx0XHRcdFx0di1mb3I9XCJkaXJlY3RvcnkgaW4gZGlyZWN0b3JpZXNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OmtleT1cImRpcmVjdG9yeS5pZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6ZGlyZWN0b3J5PVwiZGlyZWN0b3J5XCJcblx0XHRcdFx0XHRcdFx0XHRcdDppc0Ryb3B6b25lPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRAZGJsY2xpY2s9XCJuYXZpZ2F0ZShkaXJlY3RvcnkpXCI+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXJlY3Rvcnk+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGZpbGVcblx0XHRcdFx0XHRcdFx0XHRcdHYtZm9yPVwiZmlsZSBpbiBmaWxlc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6a2V5PVwiZmlsZS5pZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6ZmlsZT1cImZpbGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0QGRibGNsaWNrPVwiYWRkKGZpbGUuaWQpXCI+XG5cdFx0XHRcdFx0XHRcdFx0PC9maWxlPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG4gICAgICAgICAgICBcdFx0PC9kaXY+XG4gICAgICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcC1tb2RhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwibW9kYWxzXCI+XG4gICAgICAgICAgICA8bmV3LWZvbGRlci1tb2RhbD48L25ldy1mb2xkZXItbW9kYWw+XG4gICAgICAgIDwvcG9ydGFsPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG5cdGltcG9ydCBGaWxlVXBsb2FkZXIgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL0ZpbGVVcGxvYWRlci52dWUnXG5cdGltcG9ydCBGaWxlU2VsZWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL0ZpbGVTZWxlY3Rpb24udnVlJ1xuXG5cdGltcG9ydCBCcmVhZGNydW1iQWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL2FjdGlvbnMvQnJlYWRjcnVtYi52dWUnXG5cdGltcG9ydCBEaXNwbGF5QWN0aW9uICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL2FjdGlvbnMvRGlzcGxheS52dWUnXG5cdGltcG9ydCBTZWFyY2hBY3Rpb24gICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL2FjdGlvbnMvU2VhcmNoLnZ1ZSdcblx0aW1wb3J0IFNvcnRBY3Rpb24gICAgICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWxlLW1hbmFnZXIvYWN0aW9ucy9Tb3J0LnZ1ZSdcblx0aW1wb3J0IFZpZXdBY3Rpb24gICAgICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWxlLW1hbmFnZXIvYWN0aW9ucy9WaWV3LnZ1ZSdcblxuXHRpbXBvcnQgRGlyZWN0b3J5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL2Jyb3dzZS9EaXJlY3RvcnkudnVlJ1xuXHRpbXBvcnQgRmlsZSAgICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL2Jyb3dzZS9GaWxlLnZ1ZSdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ2Fzc2V0LWZpZWxkdHlwZScsXG5cblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHQnZmlsZS11cGxvYWRlcic6ICBGaWxlVXBsb2FkZXIsXG5cdFx0XHQnZmlsZS1zZWxlY3Rpb24nOiBGaWxlU2VsZWN0aW9uLFxuXG5cdFx0XHQnZGlzcGxheS1hY3Rpb24nOiAgICBEaXNwbGF5QWN0aW9uLFxuXHRcdFx0J2JyZWFkY3J1bWItYWN0aW9uJzogQnJlYWRjcnVtYkFjdGlvbixcblx0XHRcdCdzZWFyY2gtYWN0aW9uJzogICAgIFNlYXJjaEFjdGlvbixcblx0XHRcdCdzb3J0LWFjdGlvbic6ICAgICAgIFNvcnRBY3Rpb24sXG5cdFx0XHQndmlldy1hY3Rpb24nOiAgICAgICBWaWV3QWN0aW9uLFxuXG5cdFx0XHQnZGlyZWN0b3J5JzogRGlyZWN0b3J5LFxuXHRcdFx0J2ZpbGUnOiAgICAgIEZpbGUsXG5cdFx0fSxcblxuXHRcdG1peGluczogW1xuXHRcdFx0cmVxdWlyZSgnLi4vLi4vbWl4aW5zL2ZpbGVzZWxlY3RvcicpLmRlZmF1bHQsXG5cdFx0XHRyZXF1aXJlKCcuLi8uLi9taXhpbnMvZmlsZWRyYWdkcm9wJykuZGVmYXVsdCxcbiAgICAgICAgICAgIHJlcXVpcmUoJy4uLy4uL21peGlucy9maWxlYnJvd3NlcicpLmRlZmF1bHQsXG4gICAgICAgIF0sXG5cblx0XHRkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFx0cmVxdWVzdE9wZW46IGZhbHNlLFxuICAgICAgICAgICAgXHRtb2RhbE9wZW46IGZhbHNlLFxuICAgICAgICAgICAgXHRzZWxlY3Rpb246IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG5cdFx0cHJvcHM6IHtcblx0XHRcdGZpZWxkOiB7XG5cdFx0XHQgICAgdHlwZTogT2JqZWN0LFxuXHRcdFx0ICAgIHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0fSxcblxuXHRcdFx0dmFsdWU6IHtcblx0XHRcdFx0dHlwZTogQXJyYXksXG5cdFx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHRcdFx0ZGVmYXVsdDogKCkgPT4gW10sXG5cdFx0XHR9LFxuXHRcdH0sXG5cblx0XHR3YXRjaDoge1xuXHRcdFx0bG9hZGluZyhpc0xvYWRpbmcpIHtcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChpc0xvYWRpbmcpIHtcblx0XHRcdFx0XHRcdHRoaXMuZGVzdHJveVNlbGVjdG9yKClcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5sb2FkU2VsZWN0b3IodGhpcy4kZWwucXVlcnlTZWxlY3RvcignLnNlbGVjdGFibGVzJykpXG5cblx0XHRcdFx0XHRcdGlmICh0aGlzLnJlcXVlc3RPcGVuKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubW9kYWxPcGVuICAgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdHRoaXMucmVxdWVzdE9wZW4gPSBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG5cdFx0XHRzZWxlY3RlZDoge1xuXHRcdFx0XHRnZXQoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWUgfHwgW11cblx0XHRcdFx0fSxcblxuXHRcdFx0XHRzZXQodmFsdWUpIHtcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRzZWxlY3Rpb25MaW1pdCgpIHtcblx0XHRcdFx0cmV0dXJuIE51bWJlcih0aGlzLmZpZWxkLnNldHRpbmdzLmxpbWl0KSB8fCBJbmZpbml0eVxuXHRcdFx0fSxcblxuXHRcdFx0YWRkTGltaXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNlbGVjdGlvbkxpbWl0IC0gdGhpcy5zZWxlY3Rpb24ubGVuZ3RoXG5cdFx0XHR9LFxuXG5cdFx0XHR0eXBlUmVzdHJpY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpZWxkLnNldHRpbmdzLmZpbGV0eXBlX3Jlc3RyaWN0aW9uc1xuXHRcdFx0fVxuICAgICAgICB9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XG4gICAgICAgICAgICAgICAgc2V0RHJvcHpvbmVWaXNpYmxlOiAnZmlsZW1hbmFnZXIvc2V0RHJvcHpvbmVWaXNpYmxlJyxcbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBpc1ZhbGlkU2VsZWN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgIFx0cmV0dXJuIHRoaXMudHlwZVJlc3RyaWN0aW9uLmxlbmd0aCA9PSAwIHx8IF8uaW5jbHVkZXModGhpcy50eXBlUmVzdHJpY3Rpb24sIGZpbGUudHlwZSlcbiAgICAgICAgICAgIH0sXG5cblx0XHRcdHB1c2goKSB7XG5cdFx0XHRcdF8uZm9yRWFjaCh0aGlzLnNlbGVjdGVkRmlsZXMsIChpZCkgPT4gdGhpcy5hZGQoaWQpKVxuXHRcdFx0fSxcblxuXHRcdFx0YWRkKGlkKSB7XG5cdFx0XHRcdGlmICh0aGlzLmFkZExpbWl0ID4gMCkge1xuXHRcdFx0XHRcdGxldCBleGlzdHMgPSBfLmZpbmQodGhpcy5zZWxlY3Rpb24sIFsgJ2lkJywgaWQgXSlcblx0XHRcdFx0XHRsZXQgZmlsZSAgID0gXy5maW5kKHRoaXMuZmlsZXMsIFsgJ2lkJywgaWQgXSlcblxuXHRcdFx0XHRcdGlmICghIGV4aXN0cyAmJiB0aGlzLmlzVmFsaWRTZWxlY3Rpb24oZmlsZSkpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0aW9uLnB1c2goZmlsZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdHRoaXMucmVzZXQoKVxuXHRcdFx0XHR0aGlzLnNldEN1cnJlbnREaXJlY3RvcnkodGhpcy5maWVsZC5zZXR0aW5ncy5yb290X2RpcmVjdG9yeSlcbiAgICAgICAgXHRcdHRoaXMuc2V0Um9vdERpcmVjdG9yeSh0aGlzLmZpZWxkLnNldHRpbmdzLnJvb3RfZGlyZWN0b3J5KVxuXHRcdFx0XHR0aGlzLmZldGNoRmlsZXNBbmREaXJlY3RvcmllcygpXG5cblx0XHRcdFx0dGhpcy5zZWxlY3Rpb24gPSBbLi4udGhpcy5zZWxlY3RlZF1cblx0XHRcdFx0dGhpcy5yZXF1ZXN0T3BlbiA9IHRydWVcblx0XHRcdH0sXG5cblx0XHRcdGNsb3NlKCkge1xuXHRcdFx0XHR0aGlzLnJlc2V0KClcblxuXHRcdFx0XHR0aGlzLnNlbGVjdGlvbiA9IFtdXG5cdFx0XHRcdHRoaXMubW9kYWxPcGVuID0gZmFsc2Vcblx0XHRcdH0sXG5cblx0XHRcdHJlamVjdCgpIHtcblx0XHRcdFx0dGhpcy5jbG9zZSgpXG5cdFx0XHR9LFxuXG5cdFx0XHRhY2NlcHQoKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvblxuXHRcdFx0XHR0aGlzLmNsb3NlKClcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGgtZnVsbFwiIH0sIFtcbiAgICBfdm0uaGFzSGVhZGVyXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBwLTNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcIndhcm5pbmdcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJyZWplY3RcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGltZXNcIl0gfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBSZWplY3RcIilcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFjY2VwdFwiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkFjY2VwdCBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNoZWNrXCJdIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uc2VsZWN0aW9uLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJwLXNvcnRhYmxlLWxpc3RcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNvcnRhYmxlLWxpc3RcIixcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3Rpb24gPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc2VsZWN0aW9uLCBmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInAtc29ydGFibGUtaXRlbVwiLCB7IGtleTogZmlsZS5pZCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLWNlbnRlciBweS0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0xLzEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLXNvcnRhYmxlLWhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjdXJzb3ItbW92ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGFuZGxlIGZhLWZ3IHRleHQtZ3JheS00MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImVsbGlwc2lzLXZcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LTMvMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50eXBlID09IFwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInAtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBmaWxlLnVybCArIFwiP3c9NTAmaD01MCZmaXQ9Y3JvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwicC1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL2ltZy9cIiArIGZpbGUudHlwZSArIFwiLWxhcmdlLnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTYvMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoX3ZtLl9zKGZpbGUubmFtZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctMi8xMiB0ZXh0LXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJkYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlKGZpbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRyYXNoXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uYWRkTGltaXQgPD0gMFxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSBpdGFsaWMgdGV4dC1kYW5nZXItNjAwIHRleHQtY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG5cXHRcXHRcXHRGaWxlIGxpbWl0IHJlYWNoZWRcXG5cXHRcXHRcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC01eGwgdGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBmYS0zeFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXJcIiwgXCJjb3B5XCJdIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtbGcgcHktMiB0ZXh0LWdyYXktNTAwXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJTZWxlY3Qgc29tZSBmaWxlcy4uLlwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2xhYmVsXCIsIGF0dHJzOiB7IGZvcjogX3ZtLmZpZWxkLmhhbmRsZSB9IH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5maWVsZC5uYW1lKSldXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0xLzJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5yZXF1ZXN0T3BlbiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcGVuIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTFcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwicGx1cy1jaXJjbGVcIl0gfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgTWFuYWdlIEFzc2V0c1xcblxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImZpbGUtc2VsZWN0aW9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctMS8yXCIsXG4gICAgICAgICAgICBhdHRyczogeyBsaW1pdDogX3ZtLnNlbGVjdGlvbkxpbWl0LCBoYXNIZWFkZXI6IGZhbHNlIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGVkLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0ZWRcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicC1tb2RhbFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IFwiZmlsZS1tYW5hZ2VyXCIsXG4gICAgICAgICAgICBcIm5vLWhlYWRlclwiOiBcIlwiLFxuICAgICAgICAgICAgXCJuby1mb290ZXJcIjogXCJcIixcbiAgICAgICAgICAgIFwiZXh0cmEtbGFyZ2VcIjogXCJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubW9kYWxPcGVuLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0ubW9kYWxPcGVuID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtb2RhbE9wZW5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZmlsZS11cGxvYWRlclwiLCB7IHJlZjogXCJ1cGxvYWRlclwiIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3dcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBkcmFnZW50ZXI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXREcm9wem9uZVZpc2libGUodHJ1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaWRlLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJmaWxlLXNlbGVjdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxpbWl0OiBfdm0uc2VsZWN0aW9uTGltaXQgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgcmVqZWN0OiBfdm0ucmVqZWN0LCBhY2NlcHQ6IF92bS5hY2NlcHQgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0aW9uID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMyBwdC0yXCJcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtci00XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJzdWNjZXNzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5wdXNoIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBbXCJmYXNcIiwgXCJhcnJvdy1hbHQtY2lyY2xlLWxlZnRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlubGluZS1mbGV4IG1yLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtci1ub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJlZnMudXBsb2FkZXIub3BlbkRaKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidXBsb2FkXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOm5ldy1mb2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJuZXctZm9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtbC1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiZm9sZGVyLXBsdXNcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IHctZnVsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXItMiB3LWZ1bGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzZWFyY2gtYWN0aW9uXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1yLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJkaXNwbGF5LWFjdGlvblwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtci0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic29ydC1hY3Rpb25cIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInZpZXctYWN0aW9uXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB4LTMgcHktMlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImJyZWFkY3J1bWItYWN0aW9uXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnktY29udGFpbmVyIHNlbGVjdGFibGVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeSBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcGItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kaXJlY3RvcmllcywgZnVuY3Rpb24oZGlyZWN0b3J5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXJlY3RvcnlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGRpcmVjdG9yeS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlyZWN0b3J5OiBkaXJlY3RvcnksIGlzRHJvcHpvbmU6IHRydWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5hdmlnYXRlKGRpcmVjdG9yeSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5maWxlcywgZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZmlsZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZmlsZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmlsZTogZmlsZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkKGZpbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcIm1vZGFsc1wiIH0gfSwgW19jKFwibmV3LWZvbGRlci1tb2RhbFwiKV0sIDEpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpbGVTZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYxYTlmYWU4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpbGVTZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWxlU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjFhOWZhZTgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjFhOWZhZTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjFhOWZhZTgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpbGVTZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYxYTlmYWU4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYxYTlmYWU4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9maWxlLW1hbmFnZXIvRmlsZVNlbGVjdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVTZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVTZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVTZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYxYTlmYWU4JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDYyNWMxMDkmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvZnVzaW9uY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ2MjVjMTA5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ2MjVjMTA5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ2MjVjMTA5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDYyNWMxMDkmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDYyNWMxMDknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L0ZpZWxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDYyNWMxMDkmXCIiXSwic291cmNlUm9vdCI6IiJ9