(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
//
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
                                    src:
                                      "/vendor/fusion/img/" +
                                      file.type +
                                      "-large.svg",
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
                  _c("div", { staticClass: "card__body" }, [
                    _c("div", { staticClass: "toolbar" }, [
                      _c("div", { staticClass: "toolbar__group" }, [
                        _c(
                          "button",
                          {
                            staticClass: "button button--icon",
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                return _vm.push($event)
                              }
                            }
                          },
                          [
                            _c("fa-icon", {
                              staticClass: "icon",
                              attrs: { icon: "arrow-alt-circle-left" }
                            })
                          ],
                          1
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "toolbar__group" }, [
                        _c("div", { staticClass: "buttons" }, [
                          _c("div", { staticClass: "buttons__group" }, [
                            _c(
                              "button",
                              {
                                staticClass: "button button--icon",
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.$refs.uploader.openDZ()
                                  }
                                }
                              },
                              [
                                _c("fa-icon", {
                                  staticClass: "icon",
                                  attrs: { icon: ["fas", "upload"] }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "button",
                              {
                                directives: [
                                  {
                                    name: "modal",
                                    rawName: "v-modal:new-folder",
                                    arg: "new-folder"
                                  }
                                ],
                                staticClass: "button button--icon"
                              },
                              [
                                _c("fa-icon", {
                                  staticClass: "icon",
                                  attrs: { icon: ["fas", "folder-plus"] }
                                })
                              ],
                              1
                            )
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "toolbar__group toolbar__group--grow" },
                        [_c("search-action")],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "toolbar__group" },
                        [
                          _c("display-action"),
                          _vm._v(" "),
                          _c("sort-action"),
                          _vm._v(" "),
                          _c("view-action")
                        ],
                        1
                      )
                    ])
                  ]),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL0ZpbGVTZWxlY3Rpb24udnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL0ZpbGVTZWxlY3Rpb24udnVlP2Y3YzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvRmllbGQudnVlPzZiMjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL0ZpbGVTZWxlY3Rpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2ZpbGUtbWFuYWdlci9GaWxlU2VsZWN0aW9uLnZ1ZT9mYmFhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL2ZpbGUtbWFuYWdlci9GaWxlU2VsZWN0aW9uLnZ1ZT84YmZhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWU/ZDlhZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWU/ZTQzMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkNBO0FBQ0E7QUFDQTtBQUNBLFNBREEsaUJBQ0E7QUFDQTtBQUNBLE9BSEE7QUFLQSxTQUxBLGVBS0EsS0FMQSxFQUtBO0FBQ0E7QUFDQTtBQVBBLEtBREE7QUFXQSxZQVhBLHNCQVdBO0FBQ0E7QUFDQTtBQWJBLEdBREE7QUFpQkE7QUFDQTtBQUNBLGlC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QUF5QjtBQUN6Qix1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLGVBQWUsRUFBRTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDblFBO0FBQUE7QUFBQTtBQUFBO0FBQTRGO0FBQzNCO0FBQ0w7OztBQUc1RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxtRkFBTTtBQUNSLEVBQUUsd0ZBQU07QUFDUixFQUFFLGlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFtTSxDQUFnQix5UEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F2TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy8yMC5qcz9pZD1mM2U4YzQxNDYyZmRlNDczNjhhMyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImNhcmQgaC1mdWxsXCI+XG5cdFx0PGRpdiB2LWlmPVwiaGFzSGVhZGVyXCIgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHAtM1wiPlxuXHRcdFx0PHAtYnV0dG9uIEBjbGljaz1cIiRlbWl0KCdyZWplY3QnKVwiIHRoZW1lPVwid2FybmluZ1wiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndGltZXMnXVwiIGNsYXNzPVwibXItMlwiPjwvZmEtaWNvbj4gUmVqZWN0PC9wLWJ1dHRvbj5cblx0XHRcdDxwLWJ1dHRvbiBAY2xpY2s9XCIkZW1pdCgnYWNjZXB0JylcIiB0aGVtZT1cImluZm9cIj5BY2NlcHQgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdjaGVjayddXCIgY2xhc3M9XCJtbC0yXCI+PC9mYS1pY29uPjwvcC1idXR0b24+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IHYtaWY9XCJzZWxlY3Rpb24ubGVuZ3RoID4gMFwiPlxuXHRcdFx0PHAtc29ydGFibGUtbGlzdCB2LW1vZGVsPVwic2VsZWN0aW9uXCIgY2xhc3M9XCJzb3J0YWJsZS1saXN0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LWZ1bGwgcC0zXCI+XG5cdFx0XHRcdFx0PHAtc29ydGFibGUtaXRlbSB2LWZvcj1cImZpbGUgaW4gc2VsZWN0aW9uXCIgOmtleT1cImZpbGUuaWRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBweS0yXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTEvMTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cC1zb3J0YWJsZS1oYW5kbGUgY2xhc3M9XCJjdXJzb3ItbW92ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGZhLWljb24gaWNvbj1cImVsbGlwc2lzLXZcIiBjbGFzcz1cImhhbmRsZSBmYS1mdyB0ZXh0LWdyYXktNDAwXCI+PC9mYS1pY29uPlxuXHRcdFx0XHRcdFx0XHRcdDwvcC1zb3J0YWJsZS1oYW5kbGU+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy0zLzEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAtaW1nIHYtaWY9XCJmaWxlLnR5cGUgPT0gJ2ltYWdlJ1wiIDpzcmM9XCJmaWxlLnVybCArICc/dz01MCZoPTUwJmZpdD1jcm9wJ1wiIGJhY2tncm91bmQtY29sb3I9XCJ3aGl0ZVwiIDp3aWR0aD1cIjUwXCIgOmhlaWdodD1cIjUwXCI+PC9wLWltZz5cblx0XHRcdFx0XHRcdFx0XHQ8cC1pbWcgdi1lbHNlIDpzcmM9XCInL3ZlbmRvci9mdXNpb24vaW1nLycgKyBmaWxlLnR5cGUgKyAnLWxhcmdlLnN2ZydcIiBiYWNrZ3JvdW5kLWNvbG9yPVwid2hpdGVcIiA6d2lkdGg9XCI1MFwiIDpoZWlnaHQ9XCI1MFwiPjwvcC1pbWc+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy02LzEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj57eyBmaWxlLm5hbWUgfX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTIvMTIgdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwLWJ1dHRvbiBAY2xpY2s9XCJyZW1vdmUoZmlsZS5pZClcIiB0aGVtZT1cImRhbmdlclwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndHJhc2gnXVwiPjwvZmEtaWNvbj48L3AtYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvcC1zb3J0YWJsZS1pdGVtPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvcC1zb3J0YWJsZS1saXN0PlxuXG5cdFx0XHQ8ZGl2IHYtaWY9XCJhZGRMaW1pdCA8PSAwXCIgY2xhc3M9XCJ0ZXh0LXNtIGl0YWxpYyB0ZXh0LWRhbmdlci02MDAgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0RmlsZSBsaW1pdCByZWFjaGVkXG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgdi1lbHNlIGNsYXNzPVwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNXhsIHRleHQtZ3JheS0zMDBcIj5cblx0XHRcdDxmYS1pY29uIDppY29uPVwiWydmYXInLCAnY29weSddXCIgY2xhc3M9XCJmYS1mdyBmYS0zeFwiPjwvZmEtaWNvbj5cblx0XHRcdDxzcGFuIGNsYXNzPVwidGV4dC1sZyBweS0yIHRleHQtZ3JheS01MDBcIj5TZWxlY3Qgc29tZSBmaWxlcy4uLjwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHNlbGVjdGlvbjoge1xuXHRcdFx0XHRnZXQoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWVcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRzZXQodmFsdWUpIHtcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRhZGRMaW1pdCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubGltaXQgLSB0aGlzLnNlbGVjdGlvbi5sZW5ndGhcblx0XHRcdH0sXG5cdFx0fSxcblxuXHRcdHByb3BzOiB7XG5cdFx0XHR2YWx1ZToge1xuXHRcdFx0XHR0eXBlOiBBcnJheSxcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcblx0XHRcdH0sXG5cblx0XHRcdGxpbWl0OiB7XG5cdFx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDogSW5maW5pdHlcblx0XHRcdH0sXG5cblx0XHRcdGhhc0hlYWRlcjoge1xuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHJlbW92ZShpZCkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGlvbiA9IF8uZmlsdGVyKHRoaXMuc2VsZWN0aW9uLCAoaXRlbSkgPT4geyByZXR1cm4gaXRlbS5pZCAhPT0gaWQgfSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8bGFiZWwgOmZvcj1cImZpZWxkLmhhbmRsZVwiIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj57eyBmaWVsZC5uYW1lIH19PC9sYWJlbD5cblxuXHRcdDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInctMS8yXCI+XG5cdFx0XHRcdDxwLWJ1dHRvbiA6ZGlzYWJsZWQ9XCJyZXF1ZXN0T3BlblwiIEBjbGljaz1cIm9wZW5cIj5cblx0XHRcdFx0XHQ8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3BsdXMtY2lyY2xlJ11cIiBjbGFzcz1cIm1yLTFcIj48L2ZhLWljb24+IE1hbmFnZSBBc3NldHNcblx0XHRcdFx0PC9wLWJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZmlsZS1zZWxlY3Rpb25cblx0XHRcdFx0Y2xhc3M9XCJ3LTEvMlwiXG5cdFx0XHRcdDpsaW1pdD1cInNlbGVjdGlvbkxpbWl0XCJcblx0XHRcdFx0Omhhc0hlYWRlcj1cImZhbHNlXCJcblx0XHRcdFx0di1tb2RlbD1cInNlbGVjdGVkXCI+XG5cdFx0XHQ8L2ZpbGUtc2VsZWN0aW9uPlxuXHRcdDwvZGl2PlxuXG5cdFx0PCEtLSBGaWxlIE1hbmFnZXIgTW9kYWwgLS0+XG5cdFx0PHAtbW9kYWwgbmFtZT1cImZpbGUtbWFuYWdlclwiIG5vLWhlYWRlciBuby1mb290ZXIgZXh0cmEtbGFyZ2Ugdi1tb2RlbD1cIm1vZGFsT3BlblwiPlxuXHRcdFx0PGZpbGUtdXBsb2FkZXIgcmVmPVwidXBsb2FkZXJcIj48L2ZpbGUtdXBsb2FkZXI+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIiBAZHJhZ2VudGVyPVwic2V0RHJvcHpvbmVWaXNpYmxlKHRydWUpXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzaWRlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxmaWxlLXNlbGVjdGlvblxuXHRcdFx0XHRcdFx0OmxpbWl0PVwic2VsZWN0aW9uTGltaXRcIlxuXHRcdFx0XHRcdFx0QHJlamVjdD1cInJlamVjdFwiXG5cdFx0XHRcdFx0XHRAYWNjZXB0PVwiYWNjZXB0XCJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJzZWxlY3Rpb25cIj5cblx0XHRcdFx0XHQ8L2ZpbGUtc2VsZWN0aW9uPlxuXHRcdFx0ICAgXHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgXHRcdDxkaXYgY2xhc3M9XCJ0b29sYmFyXCI+XG4gICAgICAgICAgICAgICAgICAgIFx0XHRcdDxkaXYgY2xhc3M9XCJ0b29sYmFyX19ncm91cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLWljb25cIiBAY2xpY2sucHJldmVudD1cInB1c2hcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGZhLWljb24gY2xhc3M9XCJpY29uXCIgaWNvbj1cImFycm93LWFsdC1jaXJjbGUtbGVmdFwiPjwvZmEtaWNvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICBcdFx0XHQ8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICBcdFx0XHQ8ZGl2IGNsYXNzPVwidG9vbGJhcl9fZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnV0dG9uc19fZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0taWNvblwiIEBjbGljay5wcmV2ZW50PVwiJHJlZnMudXBsb2FkZXIub3BlbkRaKClcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmYS1pY29uIGNsYXNzPVwiaWNvblwiIDppY29uPVwiWydmYXMnLCAndXBsb2FkJ11cIj48L2ZhLWljb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0taWNvblwiIHYtbW9kYWw6bmV3LWZvbGRlcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxmYS1pY29uIGNsYXNzPVwiaWNvblwiIDppY29uPVwiWydmYXMnLCAnZm9sZGVyLXBsdXMnXVwiPjwvZmEtaWNvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIFx0XHRcdDxkaXYgY2xhc3M9XCJ0b29sYmFyX19ncm91cCB0b29sYmFyX19ncm91cC0tZ3Jvd1wiPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VhcmNoLWFjdGlvbj48L3NlYXJjaC1hY3Rpb24+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbGJhcl9fZ3JvdXBcIj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICBcdDxkaXNwbGF5LWFjdGlvbj48L2Rpc3BsYXktYWN0aW9uPlxuXHRcdCAgICAgICAgICAgICAgICAgICAgICAgIFx0PHNvcnQtYWN0aW9uPjwvc29ydC1hY3Rpb24+XG5cdFx0ICAgICAgICAgICAgICAgICAgICAgICAgXHQ8dmlldy1hY3Rpb24+PC92aWV3LWFjdGlvbj5cblx0XHQgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBweC0zIHB5LTJcIj5cblx0XHRcdFx0XHRcdFx0PGJyZWFkY3J1bWItYWN0aW9uPjwvYnJlYWRjcnVtYi1hY3Rpb24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhbGxlcnktY29udGFpbmVyIHNlbGVjdGFibGVzXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5IGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBwYi0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpcmVjdG9yeVxuXHRcdFx0XHRcdFx0XHRcdFx0di1mb3I9XCJkaXJlY3RvcnkgaW4gZGlyZWN0b3JpZXNcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OmtleT1cImRpcmVjdG9yeS5pZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6ZGlyZWN0b3J5PVwiZGlyZWN0b3J5XCJcblx0XHRcdFx0XHRcdFx0XHRcdDppc0Ryb3B6b25lPVwidHJ1ZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRAZGJsY2xpY2s9XCJuYXZpZ2F0ZShkaXJlY3RvcnkpXCI+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXJlY3Rvcnk+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGZpbGVcblx0XHRcdFx0XHRcdFx0XHRcdHYtZm9yPVwiZmlsZSBpbiBmaWxlc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6a2V5PVwiZmlsZS5pZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6ZmlsZT1cImZpbGVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0QGRibGNsaWNrPVwiYWRkKGZpbGUuaWQpXCI+XG5cdFx0XHRcdFx0XHRcdFx0PC9maWxlPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG4gICAgICAgICAgICBcdFx0PC9kaXY+XG4gICAgICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcC1tb2RhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwibW9kYWxzXCI+XG4gICAgICAgICAgICA8bmV3LWZvbGRlci1tb2RhbD48L25ldy1mb2xkZXItbW9kYWw+XG4gICAgICAgIDwvcG9ydGFsPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG5cdGltcG9ydCBGaWxlVXBsb2FkZXIgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL0ZpbGVVcGxvYWRlci52dWUnXG5cdGltcG9ydCBGaWxlU2VsZWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL0ZpbGVTZWxlY3Rpb24udnVlJ1xuXG5cdGltcG9ydCBCcmVhZGNydW1iQWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL2FjdGlvbnMvQnJlYWRjcnVtYi52dWUnXG5cdGltcG9ydCBEaXNwbGF5QWN0aW9uICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL2FjdGlvbnMvRGlzcGxheS52dWUnXG5cdGltcG9ydCBTZWFyY2hBY3Rpb24gICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL2FjdGlvbnMvU2VhcmNoLnZ1ZSdcblx0aW1wb3J0IFNvcnRBY3Rpb24gICAgICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWxlLW1hbmFnZXIvYWN0aW9ucy9Tb3J0LnZ1ZSdcblx0aW1wb3J0IFZpZXdBY3Rpb24gICAgICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9maWxlLW1hbmFnZXIvYWN0aW9ucy9WaWV3LnZ1ZSdcblxuXHRpbXBvcnQgRGlyZWN0b3J5IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL2Jyb3dzZS9EaXJlY3RvcnkudnVlJ1xuXHRpbXBvcnQgRmlsZSAgICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZmlsZS1tYW5hZ2VyL2Jyb3dzZS9GaWxlLnZ1ZSdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ2Fzc2V0LWZpZWxkdHlwZScsXG5cblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHQnZmlsZS11cGxvYWRlcic6ICBGaWxlVXBsb2FkZXIsXG5cdFx0XHQnZmlsZS1zZWxlY3Rpb24nOiBGaWxlU2VsZWN0aW9uLFxuXG5cdFx0XHQnZGlzcGxheS1hY3Rpb24nOiAgICBEaXNwbGF5QWN0aW9uLFxuXHRcdFx0J2JyZWFkY3J1bWItYWN0aW9uJzogQnJlYWRjcnVtYkFjdGlvbixcblx0XHRcdCdzZWFyY2gtYWN0aW9uJzogICAgIFNlYXJjaEFjdGlvbixcblx0XHRcdCdzb3J0LWFjdGlvbic6ICAgICAgIFNvcnRBY3Rpb24sXG5cdFx0XHQndmlldy1hY3Rpb24nOiAgICAgICBWaWV3QWN0aW9uLFxuXG5cdFx0XHQnZGlyZWN0b3J5JzogRGlyZWN0b3J5LFxuXHRcdFx0J2ZpbGUnOiAgICAgIEZpbGUsXG5cdFx0fSxcblxuXHRcdG1peGluczogW1xuXHRcdFx0cmVxdWlyZSgnLi4vLi4vbWl4aW5zL2ZpbGVzZWxlY3RvcicpLmRlZmF1bHQsXG5cdFx0XHRyZXF1aXJlKCcuLi8uLi9taXhpbnMvZmlsZWRyYWdkcm9wJykuZGVmYXVsdCxcbiAgICAgICAgICAgIHJlcXVpcmUoJy4uLy4uL21peGlucy9maWxlYnJvd3NlcicpLmRlZmF1bHQsXG4gICAgICAgIF0sXG5cblx0XHRkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFx0cmVxdWVzdE9wZW46IGZhbHNlLFxuICAgICAgICAgICAgXHRtb2RhbE9wZW46IGZhbHNlLFxuICAgICAgICAgICAgXHRzZWxlY3Rpb246IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG5cdFx0cHJvcHM6IHtcblx0XHRcdGZpZWxkOiB7XG5cdFx0XHQgICAgdHlwZTogT2JqZWN0LFxuXHRcdFx0ICAgIHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0fSxcblxuXHRcdFx0dmFsdWU6IHtcblx0XHRcdFx0dHlwZTogQXJyYXksXG5cdFx0XHRcdHJlcXVpcmVkOiBmYWxzZSxcblx0XHRcdFx0ZGVmYXVsdDogKCkgPT4gW10sXG5cdFx0XHR9LFxuXHRcdH0sXG5cblx0XHR3YXRjaDoge1xuXHRcdFx0bG9hZGluZyhpc0xvYWRpbmcpIHtcblx0XHRcdFx0dGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuXHRcdFx0XHRcdGlmIChpc0xvYWRpbmcpIHtcblx0XHRcdFx0XHRcdHRoaXMuZGVzdHJveVNlbGVjdG9yKClcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5sb2FkU2VsZWN0b3IodGhpcy4kZWwucXVlcnlTZWxlY3RvcignLnNlbGVjdGFibGVzJykpXG5cblx0XHRcdFx0XHRcdGlmICh0aGlzLnJlcXVlc3RPcGVuKSB7XG5cdFx0XHRcdFx0XHRcdHRoaXMubW9kYWxPcGVuICAgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdHRoaXMucmVxdWVzdE9wZW4gPSBmYWxzZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG5cdFx0XHRzZWxlY3RlZDoge1xuXHRcdFx0XHRnZXQoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWUgfHwgW11cblx0XHRcdFx0fSxcblxuXHRcdFx0XHRzZXQodmFsdWUpIHtcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRzZWxlY3Rpb25MaW1pdCgpIHtcblx0XHRcdFx0cmV0dXJuIE51bWJlcih0aGlzLmZpZWxkLnNldHRpbmdzLmxpbWl0KSB8fCBJbmZpbml0eVxuXHRcdFx0fSxcblxuXHRcdFx0YWRkTGltaXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNlbGVjdGlvbkxpbWl0IC0gdGhpcy5zZWxlY3Rpb24ubGVuZ3RoXG5cdFx0XHR9LFxuXG5cdFx0XHR0eXBlUmVzdHJpY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmZpZWxkLnNldHRpbmdzLmZpbGV0eXBlX3Jlc3RyaWN0aW9uc1xuXHRcdFx0fVxuICAgICAgICB9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XG4gICAgICAgICAgICAgICAgc2V0RHJvcHpvbmVWaXNpYmxlOiAnZmlsZW1hbmFnZXIvc2V0RHJvcHpvbmVWaXNpYmxlJyxcbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBpc1ZhbGlkU2VsZWN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgIFx0cmV0dXJuIHRoaXMudHlwZVJlc3RyaWN0aW9uLmxlbmd0aCA9PSAwIHx8IF8uaW5jbHVkZXModGhpcy50eXBlUmVzdHJpY3Rpb24sIGZpbGUudHlwZSlcbiAgICAgICAgICAgIH0sXG5cblx0XHRcdHB1c2goKSB7XG5cdFx0XHRcdF8uZm9yRWFjaCh0aGlzLnNlbGVjdGVkRmlsZXMsIChpZCkgPT4gdGhpcy5hZGQoaWQpKVxuXHRcdFx0fSxcblxuXHRcdFx0YWRkKGlkKSB7XG5cdFx0XHRcdGlmICh0aGlzLmFkZExpbWl0ID4gMCkge1xuXHRcdFx0XHRcdGxldCBleGlzdHMgPSBfLmZpbmQodGhpcy5zZWxlY3Rpb24sIFsgJ2lkJywgaWQgXSlcblx0XHRcdFx0XHRsZXQgZmlsZSAgID0gXy5maW5kKHRoaXMuZmlsZXMsIFsgJ2lkJywgaWQgXSlcblxuXHRcdFx0XHRcdGlmICghIGV4aXN0cyAmJiB0aGlzLmlzVmFsaWRTZWxlY3Rpb24oZmlsZSkpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0aW9uLnB1c2goZmlsZSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdHRoaXMucmVzZXQoKVxuXHRcdFx0XHR0aGlzLnNldEN1cnJlbnREaXJlY3RvcnkodGhpcy5maWVsZC5zZXR0aW5ncy5yb290X2RpcmVjdG9yeSlcbiAgICAgICAgXHRcdHRoaXMuc2V0Um9vdERpcmVjdG9yeSh0aGlzLmZpZWxkLnNldHRpbmdzLnJvb3RfZGlyZWN0b3J5KVxuXHRcdFx0XHR0aGlzLmZldGNoRmlsZXNBbmREaXJlY3RvcmllcygpXG5cblx0XHRcdFx0dGhpcy5zZWxlY3Rpb24gPSBbLi4udGhpcy5zZWxlY3RlZF1cblx0XHRcdFx0dGhpcy5yZXF1ZXN0T3BlbiA9IHRydWVcblx0XHRcdH0sXG5cblx0XHRcdGNsb3NlKCkge1xuXHRcdFx0XHR0aGlzLnJlc2V0KClcblxuXHRcdFx0XHR0aGlzLnNlbGVjdGlvbiA9IFtdXG5cdFx0XHRcdHRoaXMubW9kYWxPcGVuID0gZmFsc2Vcblx0XHRcdH0sXG5cblx0XHRcdHJlamVjdCgpIHtcblx0XHRcdFx0dGhpcy5jbG9zZSgpXG5cdFx0XHR9LFxuXG5cdFx0XHRhY2NlcHQoKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvblxuXHRcdFx0XHR0aGlzLmNsb3NlKClcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGgtZnVsbFwiIH0sIFtcbiAgICBfdm0uaGFzSGVhZGVyXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBwLTNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcIndhcm5pbmdcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJyZWplY3RcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGltZXNcIl0gfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBSZWplY3RcIilcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFjY2VwdFwiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkFjY2VwdCBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNoZWNrXCJdIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uc2VsZWN0aW9uLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJwLXNvcnRhYmxlLWxpc3RcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNvcnRhYmxlLWxpc3RcIixcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3Rpb24gPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc2VsZWN0aW9uLCBmdW5jdGlvbihmaWxlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInAtc29ydGFibGUtaXRlbVwiLCB7IGtleTogZmlsZS5pZCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLWNlbnRlciBweS0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0xLzEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLXNvcnRhYmxlLWhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjdXJzb3ItbW92ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGFuZGxlIGZhLWZ3IHRleHQtZ3JheS00MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImVsbGlwc2lzLXZcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LTMvMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50eXBlID09IFwiaW1hZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInAtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBmaWxlLnVybCArIFwiP3c9NTAmaD01MCZmaXQ9Y3JvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwicC1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3ZlbmRvci9mdXNpb24vaW1nL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZS50eXBlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItbGFyZ2Uuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctNi8xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MoZmlsZS5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyIHRleHQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcImRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmUoZmlsZS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidHJhc2hcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5hZGRMaW1pdCA8PSAwXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIGl0YWxpYyB0ZXh0LWRhbmdlci02MDAgdGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdEZpbGUgbGltaXQgcmVhY2hlZFxcblxcdFxcdFwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgOiBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcImgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LTV4bCB0ZXh0LWdyYXktMzAwXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IGZhLTN4XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhclwiLCBcImNvcHlcIl0gfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1sZyBweS0yIHRleHQtZ3JheS01MDBcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBzb21lIGZpbGVzLi4uXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiwgYXR0cnM6IHsgZm9yOiBfdm0uZmllbGQuaGFuZGxlIH0gfSxcbiAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmZpZWxkLm5hbWUpKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LTEvMlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogX3ZtLnJlcXVlc3RPcGVuIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9wZW4gfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJwbHVzLWNpcmNsZVwiXSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBNYW5hZ2UgQXNzZXRzXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZmlsZS1zZWxlY3Rpb25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xLzJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGxpbWl0OiBfdm0uc2VsZWN0aW9uTGltaXQsIGhhc0hlYWRlcjogZmFsc2UgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWQgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwLW1vZGFsXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogXCJmaWxlLW1hbmFnZXJcIixcbiAgICAgICAgICAgIFwibm8taGVhZGVyXCI6IFwiXCIsXG4gICAgICAgICAgICBcIm5vLWZvb3RlclwiOiBcIlwiLFxuICAgICAgICAgICAgXCJleHRyYS1sYXJnZVwiOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RhbE9wZW4sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5tb2RhbE9wZW4gPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGFsT3BlblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJmaWxlLXVwbG9hZGVyXCIsIHsgcmVmOiBcInVwbG9hZGVyXCIgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGRyYWdlbnRlcjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldERyb3B6b25lVmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNpZGUtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImZpbGUtc2VsZWN0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGltaXQ6IF92bS5zZWxlY3Rpb25MaW1pdCB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyByZWplY3Q6IF92bS5yZWplY3QsIGFjY2VwdDogX3ZtLmFjY2VwdCB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3Rpb24gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VsZWN0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX2JvZHlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvb2xiYXJfX2dyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wdXNoKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJhcnJvdy1hbHQtY2lyY2xlLWxlZnRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b29sYmFyX19ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidXR0b25zX19ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcmVmcy51cGxvYWRlci5vcGVuRFooKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidXBsb2FkXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpuZXctZm9sZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibmV3LWZvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImZvbGRlci1wbHVzXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG9vbGJhcl9fZ3JvdXAgdG9vbGJhcl9fZ3JvdXAtLWdyb3dcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic2VhcmNoLWFjdGlvblwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG9vbGJhcl9fZ3JvdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpc3BsYXktYWN0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNvcnQtYWN0aW9uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZpZXctYWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBweC0zIHB5LTJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJicmVhZGNydW1iLWFjdGlvblwiKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LWNvbnRhaW5lciBzZWxlY3RhYmxlc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnkgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHBiLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGlyZWN0b3JpZXMsIGZ1bmN0aW9uKGRpcmVjdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGlyZWN0b3J5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBkaXJlY3RvcnkuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpcmVjdG9yeTogZGlyZWN0b3J5LCBpc0Ryb3B6b25lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5uYXZpZ2F0ZShkaXJlY3RvcnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZmlsZXMsIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImZpbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZpbGU6IGZpbGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZChmaWxlLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJtb2RhbHNcIiB9IH0sIFtfYyhcIm5ldy1mb2xkZXItbW9kYWxcIildLCAxKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWxlU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MWE5ZmFlOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWxlU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvZnVzaW9uY21zL2Z1c2lvbi9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MWE5ZmFlOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MWE5ZmFlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MWE5ZmFlOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjFhOWZhZTgmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjFhOWZhZTgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL2ZpbGUtbWFuYWdlci9GaWxlU2VsZWN0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjFhOWZhZTgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjI1YzEwOSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvZnVzaW9uL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ2MjVjMTA5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ2MjVjMTA5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ2MjVjMTA5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDYyNWMxMDkmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDYyNWMxMDknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L0ZpZWxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDYyNWMxMDkmXCIiXSwic291cmNlUm9vdCI6IiJ9