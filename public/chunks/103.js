(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[103],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/QuickEdit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Actions/QuickEdit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      name: this.file.name,
      isEditing: false
    };
  },
  props: {
    file: {
      type: Object,
      required: true
    },
    endpoint: {
      type: String,
      required: true
    }
  },
  methods: {
    edit: function edit() {
      var _this = this;

      this.isEditing = true;
      this.$nextTick(function () {
        _this.$refs.edit.focus();

        _this.$refs.edit.select();
      });
    },
    revert: function revert() {
      this.file.name = this.name;
      this.isEditing = false;
    },
    update: function update(data) {
      var _this2 = this;

      if (this.isEditing) {
        this.isEditing = false;

        if (this.file.name === '') {
          this.revert();
          toast('Name is required for updating.', 'warning');
        } else {
          axios.patch(this.endpoint, {
            name: this.file.name
          }).then(function (response) {
            _this2.name = response.data.data.name;
            _this2.isEditing = false;
            toast('Name successfully updated!', 'success');
          })["catch"](function (error) {
            _this2.revert();

            toast(error.message, 'danger');
          });
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Browse/Directory.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Browse/Directory.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'file-manager-directory',
  components: {
    'quick-edit': __webpack_require__(/*! ../Actions/QuickEdit.vue */ "./resources/js/components/FileManager/Actions/QuickEdit.vue")["default"]
  },
  props: {
    directory: {
      type: Object,
      required: true
    },
    isDropzone: {
      type: Boolean,
      "default": false
    },
    isDraggable: {
      type: Boolean,
      "default": false
    },
    isSelectable: {
      type: Boolean,
      "default": true
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    selected: 'filemanager/getSelectedDirectories'
  }), {
    fileCount: function fileCount() {
      return this.directory.files_count + ' files';
    },
    isSelected: function isSelected() {
      return _.includes(this.selected, this.directory.id);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Browse/File.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Browse/File.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'file-manager-file',
  components: {
    'quick-edit': __webpack_require__(/*! ../Actions/QuickEdit.vue */ "./resources/js/components/FileManager/Actions/QuickEdit.vue")["default"]
  },
  mixins: [__webpack_require__(/*! ../../../mixins/filehelper */ "./resources/js/mixins/filehelper.js")["default"]],
  props: {
    file: {
      type: Object,
      required: true
    },
    isDraggable: {
      type: Boolean,
      "default": false
    },
    isSelectable: {
      type: Boolean,
      "default": true
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    selected: 'filemanager/getSelectedFiles',
    view: 'filemanager/getView'
  }), {
    isSelected: function isSelected() {
      return _.includes(this.selected, this.file.id);
    },
    type: function type() {
      return _.split(this.file.mimetype, '/', 1)[0];
    },
    fileSrc: function fileSrc() {
      switch (this.type) {
        case 'image':
          return "".concat(this.file.url, "?w=100&h=100&fit=crop&t=").concat(this.$moment.utc(this.file.updated_at));

        case 'audio':
        case 'video':
          return "/img/".concat(this.type, "-large.svg");

        case 'application':
        case 'text':
          return '/img/document-large.svg';

        default:
          return '/img/misc-large.svg';
      }
    }
  }),
  methods: {
    foo: function foo() {
      console.log('click');
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
/* harmony import */ var _components_FileManager_Actions_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FileManager/Actions/Breadcrumb.vue */ "./resources/js/components/FileManager/Actions/Breadcrumb.vue");
/* harmony import */ var _components_FileManager_Actions_Display_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FileManager/Actions/Display.vue */ "./resources/js/components/FileManager/Actions/Display.vue");
/* harmony import */ var _components_FileManager_Actions_Search_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FileManager/Actions/Search.vue */ "./resources/js/components/FileManager/Actions/Search.vue");
/* harmony import */ var _components_FileManager_Actions_Sort_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FileManager/Actions/Sort.vue */ "./resources/js/components/FileManager/Actions/Sort.vue");
/* harmony import */ var _components_FileManager_Actions_View_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/FileManager/Actions/View.vue */ "./resources/js/components/FileManager/Actions/View.vue");
/* harmony import */ var _components_FileManager_Browse_Directory_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/FileManager/Browse/Directory.vue */ "./resources/js/components/FileManager/Browse/Directory.vue");
/* harmony import */ var _components_FileManager_Browse_File_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/FileManager/Browse/File.vue */ "./resources/js/components/FileManager/Browse/File.vue");
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








/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'asset-fieldtype',
  components: {
    'display-action': _components_FileManager_Actions_Display_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'breadcrumb-action': _components_FileManager_Actions_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'search-action': _components_FileManager_Actions_Search_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'sort-action': _components_FileManager_Actions_Sort_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    'view-action': _components_FileManager_Actions_View_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    'directory': _components_FileManager_Browse_Directory_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    'file': _components_FileManager_Browse_File_vue__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  mixins: [__webpack_require__(/*! ../../mixins/fileselector */ "./resources/js/mixins/fileselector.js")["default"], // require('../../mixins/filedragdrop').default,
  __webpack_require__(/*! ../../mixins/filebrowser */ "./resources/js/mixins/filebrowser.js")["default"]],
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
    files: 'filemanager/getFiles'
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/QuickEdit.vue?vue&type=template&id=f9379628&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Actions/QuickEdit.vue?vue&type=template&id=f9379628& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "gallery-text" }, [
    _vm.isEditing
      ? _c("span", [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.file.name,
                expression: "file.name"
              }
            ],
            ref: "edit",
            staticClass: "form__control form__control--sm text-center",
            attrs: { type: "text" },
            domProps: { value: _vm.file.name },
            on: {
              blur: _vm.revert,
              keyup: [
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.update($event)
                },
                function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "esc", 27, $event.key, [
                      "Esc",
                      "Escape"
                    ])
                  ) {
                    return null
                  }
                  return _vm.revert($event)
                }
              ],
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.file, "name", $event.target.value)
              }
            }
          })
        ])
      : _c("span", { staticClass: "truncate", on: { dblclick: _vm.edit } }, [
          _vm._v(_vm._s(_vm.name))
        ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Browse/Directory.vue?vue&type=template&id=5b2f1bd1&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Browse/Directory.vue?vue&type=template&id=5b2f1bd1& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "gallery-wrapper" },
    [
      _c(
        "div",
        {
          staticClass: "gallery-item",
          class: {
            "gallery-item--selected selectable--selected": _vm.isSelected,
            selectable: _vm.isSelectable
          },
          attrs: {
            "data-directory": _vm.directory.id,
            draggable: _vm.isDraggable
          },
          on: {
            dblclick: function($event) {
              return _vm.$emit("dblclick")
            }
          }
        },
        [
          _c("p-img", {
            staticClass: "gallery-image",
            class: { "draggable--dropzone": _vm.isDropzone },
            attrs: {
              src: "/img/folder.svg",
              "background-color": "white",
              width: 150,
              height: 150,
              alt: _vm.directory.name,
              draggable: false,
              "aspect-ratio": ""
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("quick-edit", {
        attrs: {
          file: _vm.directory,
          endpoint: "/api/directories/" + _vm.directory.id
        }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "gallery-subtitle" }, [
        _c("span", { domProps: { innerHTML: _vm._s(_vm.fileCount) } })
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Browse/File.vue?vue&type=template&id=551abd70&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Browse/File.vue?vue&type=template&id=551abd70& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    {
      class: [_vm.view == "grid" ? "gallery-wrapper" : "gallery-wrapper--row"]
    },
    [
      _c(
        "div",
        {
          staticClass: "gallery-item",
          class: {
            "gallery-item--selected selectable--selected": _vm.isSelected,
            selectable: _vm.isSelectable
          },
          attrs: { "data-file": _vm.file.id, draggable: _vm.isDraggable },
          on: {
            dblclick: function($event) {
              return _vm.$emit("dblclick")
            }
          }
        },
        [
          _c("p-img", {
            staticClass: "gallery-image",
            attrs: {
              src: "/img/image-large.svg",
              "background-color": "white",
              lazySrc: _vm.fileSrc,
              width: 100,
              height: 100,
              alt: _vm.file.description,
              draggable: false
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("quick-edit", {
        attrs: { file: _vm.file, endpoint: "/api/files/" + _vm.file.id }
      }),
      _vm._v(" "),
      _c("div", { staticClass: "gallery-subtitle" }, [
        _c("span", [_vm._v(_vm._s(_vm._f("bytes")(_vm.file.bytes)))]),
        _vm._v(" "),
        _c("span", [_vm._v(_vm._s(_vm.file.extension))])
      ]),
      _vm._v(" "),
      _vm.view == "list"
        ? _c("div", { staticClass: "gallery-text" }, [
            _vm._v("\n\t\t\t" + _vm._s(_vm.file.mimetype) + "\n\t\t")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.view == "list"
        ? _c("div", { staticClass: "gallery-text" }, [
            _vm._v(
              "\n\t\t\t" +
                _vm._s(
                  _vm.$moment(_vm.file.updated_at).format("MMM Do, YYYY")
                ) +
                "\n\t\t"
            )
          ])
        : _vm._e()
    ],
    1
  )
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
                  _c("file-browser")
                ],
                1
              )
            ])
          ])
        ]
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

/***/ "./resources/js/components/FileManager/Actions/QuickEdit.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/QuickEdit.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _QuickEdit_vue_vue_type_template_id_f9379628___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./QuickEdit.vue?vue&type=template&id=f9379628& */ "./resources/js/components/FileManager/Actions/QuickEdit.vue?vue&type=template&id=f9379628&");
/* harmony import */ var _QuickEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./QuickEdit.vue?vue&type=script&lang=js& */ "./resources/js/components/FileManager/Actions/QuickEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _QuickEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _QuickEdit_vue_vue_type_template_id_f9379628___WEBPACK_IMPORTED_MODULE_0__["render"],
  _QuickEdit_vue_vue_type_template_id_f9379628___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileManager/Actions/QuickEdit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileManager/Actions/QuickEdit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/QuickEdit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/QuickEdit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileManager/Actions/QuickEdit.vue?vue&type=template&id=f9379628&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/QuickEdit.vue?vue&type=template&id=f9379628& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickEdit_vue_vue_type_template_id_f9379628___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./QuickEdit.vue?vue&type=template&id=f9379628& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/QuickEdit.vue?vue&type=template&id=f9379628&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickEdit_vue_vue_type_template_id_f9379628___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_QuickEdit_vue_vue_type_template_id_f9379628___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FileManager/Browse/Directory.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/FileManager/Browse/Directory.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Directory_vue_vue_type_template_id_5b2f1bd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Directory.vue?vue&type=template&id=5b2f1bd1& */ "./resources/js/components/FileManager/Browse/Directory.vue?vue&type=template&id=5b2f1bd1&");
/* harmony import */ var _Directory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Directory.vue?vue&type=script&lang=js& */ "./resources/js/components/FileManager/Browse/Directory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Directory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Directory_vue_vue_type_template_id_5b2f1bd1___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Directory_vue_vue_type_template_id_5b2f1bd1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileManager/Browse/Directory.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileManager/Browse/Directory.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Browse/Directory.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Directory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Directory.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Browse/Directory.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Directory_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileManager/Browse/Directory.vue?vue&type=template&id=5b2f1bd1&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Browse/Directory.vue?vue&type=template&id=5b2f1bd1& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Directory_vue_vue_type_template_id_5b2f1bd1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Directory.vue?vue&type=template&id=5b2f1bd1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Browse/Directory.vue?vue&type=template&id=5b2f1bd1&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Directory_vue_vue_type_template_id_5b2f1bd1___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Directory_vue_vue_type_template_id_5b2f1bd1___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FileManager/Browse/File.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/FileManager/Browse/File.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _File_vue_vue_type_template_id_551abd70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./File.vue?vue&type=template&id=551abd70& */ "./resources/js/components/FileManager/Browse/File.vue?vue&type=template&id=551abd70&");
/* harmony import */ var _File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./File.vue?vue&type=script&lang=js& */ "./resources/js/components/FileManager/Browse/File.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _File_vue_vue_type_template_id_551abd70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _File_vue_vue_type_template_id_551abd70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileManager/Browse/File.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileManager/Browse/File.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Browse/File.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./File.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Browse/File.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileManager/Browse/File.vue?vue&type=template&id=551abd70&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Browse/File.vue?vue&type=template&id=551abd70& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_551abd70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./File.vue?vue&type=template&id=551abd70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Browse/File.vue?vue&type=template&id=551abd70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_551abd70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_File_vue_vue_type_template_id_551abd70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/mixins/filehelper.js":
/*!*******************************************!*\
  !*** ./resources/js/mixins/filehelper.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  filters: {
    bytes: function bytes(value) {
      var thresh = 1000;

      if (Math.abs(value) < thresh) {
        return value + ' B';
      }

      var index = -1;
      var units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

      do {
        value /= thresh;
        ++index;
      } while (Math.abs(value) >= thresh && index < units.length - 1);

      return value.toFixed(1) + ' ' + units[index];
    }
  }
});

/***/ }),

/***/ "./resources/js/mixins/fileselector.js":
/*!*********************************************!*\
  !*** ./resources/js/mixins/fileselector.js ***!
  \*********************************************/
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
      this.selector.addSelectables(document.getElementsByClassName('selectable'));
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    loading: 'filemanager/getLoading'
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    toggleDirectorySelection: 'filemanager/toggleDirectorySelection',
    clearDirectorySelection: 'filemanager/clearDirectorySelection',
    toggleFileSelection: 'filemanager/toggleFileSelection',
    clearFileSelection: 'filemanager/clearFileSelection'
  }), {
    clearSelections: function clearSelections() {
      this.clearFileSelection();
      this.clearDirectorySelection();
    }
  }),
  mounted: function mounted() {
    var _this = this;

    var container = document.querySelector('.selectables');
    var selectables = document.getElementsByClassName('selectable');
    this.selector = new DragSelect__WEBPACK_IMPORTED_MODULE_0___default.a({
      selectables: selectables,
      area: container,
      callback: function callback(elements) {
        _this.clearSelections(); // Toggle files/directories


        _.forEach(elements, function (el) {
          if (el.dataset.file) {
            _this.toggleFileSelection(parseInt(el.dataset.file));
          } else if (el.dataset.directory) {
            _this.toggleDirectorySelection(parseInt(el.dataset.directory));
          }
        });
      },
      // Start dragging selector..
      onDragStart: function onDragStart(el) {
        // Prevent selector from selecting
        if (el.target.classList.contains('selectable--selected') || el.target.closest('.selectable--selected')) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9RdWlja0VkaXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9Ccm93c2UvRGlyZWN0b3J5LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQnJvd3NlL0ZpbGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9RdWlja0VkaXQudnVlPzJiZGEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQnJvd3NlL0RpcmVjdG9yeS52dWU/ZGVhZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9Ccm93c2UvRmlsZS52dWU/MDM2NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWU/NmIyMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL1F1aWNrRWRpdC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9RdWlja0VkaXQudnVlP2VlYzgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9RdWlja0VkaXQudnVlPzJiMWIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQnJvd3NlL0RpcmVjdG9yeS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQnJvd3NlL0RpcmVjdG9yeS52dWU/MWJjNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9Ccm93c2UvRGlyZWN0b3J5LnZ1ZT8wNmMwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0Jyb3dzZS9GaWxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9Ccm93c2UvRmlsZS52dWU/NjM4YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9Ccm93c2UvRmlsZS52dWU/YzQxNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvRmllbGQudnVlP2Q5YWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvRmllbGQudnVlP2U0MzEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9maWxlaGVscGVyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9taXhpbnMvZmlsZXNlbGVjdG9yLmpzIl0sIm5hbWVzIjpbImZpbHRlcnMiLCJieXRlcyIsInZhbHVlIiwidGhyZXNoIiwiTWF0aCIsImFicyIsImluZGV4IiwidW5pdHMiLCJsZW5ndGgiLCJ0b0ZpeGVkIiwiZGF0YSIsInNlbGVjdG9yIiwid2F0Y2giLCJsb2FkaW5nIiwiYWRkU2VsZWN0YWJsZXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJjb21wdXRlZCIsIm1hcEdldHRlcnMiLCJtZXRob2RzIiwibWFwQWN0aW9ucyIsInRvZ2dsZURpcmVjdG9yeVNlbGVjdGlvbiIsImNsZWFyRGlyZWN0b3J5U2VsZWN0aW9uIiwidG9nZ2xlRmlsZVNlbGVjdGlvbiIsImNsZWFyRmlsZVNlbGVjdGlvbiIsImNsZWFyU2VsZWN0aW9ucyIsIm1vdW50ZWQiLCJjb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0YWJsZXMiLCJEcmFnU2VsZWN0IiwiYXJlYSIsImNhbGxiYWNrIiwiZWxlbWVudHMiLCJfIiwiZm9yRWFjaCIsImVsIiwiZGF0YXNldCIsImZpbGUiLCJwYXJzZUludCIsImRpcmVjdG9yeSIsIm9uRHJhZ1N0YXJ0IiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJjbG9zZXN0IiwiZGVzdHJveWVkIiwic3RvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFGQTtBQUlBLEdBTkE7QUFRQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQU5BLEdBUkE7QUFvQkE7QUFDQSxRQURBLGtCQUNBO0FBQUE7O0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQ0EsT0FIQTtBQUlBLEtBUkE7QUFVQSxVQVZBLG9CQVVBO0FBQ0E7QUFDQTtBQUNBLEtBYkE7QUFlQSxVQWZBLGtCQWVBLElBZkEsRUFlQTtBQUFBOztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBQ0EsU0FKQSxNQUlBO0FBQ0E7QUFBQTtBQUFBLGFBQ0EsSUFEQSxDQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsV0FOQSxXQU1BO0FBQ0E7O0FBRUE7QUFDQSxXQVZBO0FBV0E7QUFDQTtBQUNBO0FBckNBO0FBcEJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZ0JBO0FBRUE7QUFDQSxnQ0FEQTtBQUdBO0FBQ0E7QUFEQSxHQUhBO0FBT0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBTUE7QUFDQSxtQkFEQTtBQUVBO0FBRkEsS0FO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RyxTQUFaLENBQXRDO0FBQ0E7QUFDSyxTQU5EO0FBT0EsT0FkdUI7QUFnQnhCO0FBQ05DLGlCQUFXLEVBQUUscUJBQUNMLEVBQUQsRUFBUTtBQUNwQjtBQUNBLFlBQUlBLEVBQUUsQ0FBQ00sTUFBSCxDQUFVQyxTQUFWLENBQW9CQyxRQUFwQixDQUE2QixzQkFBN0IsS0FBd0RSLEVBQUUsQ0FBQ00sTUFBSCxDQUFVRyxPQUFWLENBQWtCLHVCQUFsQixDQUE1RCxFQUF3RztBQUN2RyxlQUFJLENBQUNsQyxRQUFMO0FBQ0E7QUFDRDtBQXRCNkIsS0FBZixDQUFoQjtBQXdCQSxHQTdEYTtBQStEZG1DLFdBL0RjLHVCQStERjtBQUNYLFNBQUtuQyxRQUFMLENBQWNvQyxJQUFkO0FBQ0E7QUFqRWEsQ0FBZixFIiwiZmlsZSI6ImNodW5rcy8xMDMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJnYWxsZXJ5LXRleHRcIj5cblx0XHQ8c3BhbiB2LWlmPVwiaXNFZGl0aW5nXCI+XG5cdFx0XHQ8aW5wdXRcblx0XHRcdFx0cmVmPVwiZWRpdFwiXG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0Y2xhc3M9XCJmb3JtX19jb250cm9sIGZvcm1fX2NvbnRyb2wtLXNtIHRleHQtY2VudGVyXCJcblx0XHRcdFx0di1tb2RlbD1cImZpbGUubmFtZVwiXG5cdFx0XHRcdEBibHVyPVwicmV2ZXJ0XCJcblx0XHRcdFx0QGtleXVwLmVudGVyPVwidXBkYXRlXCJcblx0XHRcdFx0QGtleXVwLmVzYz1cInJldmVydFwiLz5cblx0XHQ8L3NwYW4+XG5cblx0XHQ8c3BhbiB2LWVsc2UgY2xhc3M9XCJ0cnVuY2F0ZVwiIEBkYmxjbGljaz1cImVkaXRcIj57eyBuYW1lIH19PC9zcGFuPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0bmFtZTogdGhpcy5maWxlLm5hbWUsXG5cdFx0XHRcdGlzRWRpdGluZzogZmFsc2Vcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0cHJvcHM6IHtcblx0XHRcdGZpbGU6IHtcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxuXHRcdFx0fSxcblxuXHRcdFx0ZW5kcG9pbnQ6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHRlZGl0KCkge1xuXHRcdFx0XHR0aGlzLmlzRWRpdGluZyA9IHRydWVcblxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kcmVmcy5lZGl0LmZvY3VzKClcblx0XHRcdFx0XHR0aGlzLiRyZWZzLmVkaXQuc2VsZWN0KClcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cblx0XHRcdHJldmVydCgpIHtcblx0XHRcdFx0dGhpcy5maWxlLm5hbWUgPSB0aGlzLm5hbWVcblx0XHRcdFx0dGhpcy5pc0VkaXRpbmcgPSBmYWxzZVxuXHRcdFx0fSxcblxuXHRcdFx0dXBkYXRlKGRhdGEpIHtcblx0XHRcdFx0aWYgKHRoaXMuaXNFZGl0aW5nKSB7XG5cdFx0XHRcdCAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlXG5cblx0XHRcdFx0XHRpZiAodGhpcy5maWxlLm5hbWUgPT09ICcnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJldmVydCgpXG5cblx0XHRcdFx0XHQgICAgdG9hc3QoJ05hbWUgaXMgcmVxdWlyZWQgZm9yIHVwZGF0aW5nLicsICd3YXJuaW5nJylcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YXhpb3MucGF0Y2godGhpcy5lbmRwb2ludCwgeyBuYW1lOiB0aGlzLmZpbGUubmFtZSB9KVxuXHRcdFx0XHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm5hbWUgICAgICA9IHJlc3BvbnNlLmRhdGEuZGF0YS5uYW1lXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5pc0VkaXRpbmcgPSBmYWxzZVxuXG5cdFx0XHRcdFx0XHRcdFx0dG9hc3QoJ05hbWUgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQhJywgJ3N1Y2Nlc3MnKVxuXHRcdFx0XHRcdFx0XHR9KS5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJldmVydCgpXG5cblx0XHRcdFx0XHRcdFx0XHR0b2FzdChlcnJvci5tZXNzYWdlLCAnZGFuZ2VyJylcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9ICAgIFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJnYWxsZXJ5LXdyYXBwZXJcIj5cblx0XHQ8ZGl2XG5cdFx0XHRjbGFzcz1cImdhbGxlcnktaXRlbVwiXG5cdFx0XHQ6Y2xhc3M9XCJ7ICdnYWxsZXJ5LWl0ZW0tLXNlbGVjdGVkIHNlbGVjdGFibGUtLXNlbGVjdGVkJzogaXNTZWxlY3RlZCwgJ3NlbGVjdGFibGUnOiBpc1NlbGVjdGFibGUgfVwiXG5cdFx0XHQ6ZGF0YS1kaXJlY3Rvcnk9XCJkaXJlY3RvcnkuaWRcIlxuXHRcdFx0OmRyYWdnYWJsZT1cImlzRHJhZ2dhYmxlXCJcblx0XHRcdEBkYmxjbGljaz1cIiRlbWl0KCdkYmxjbGljaycpXCI+XG5cblx0XHRcdDxwLWltZ1xuXHRcdFx0XHRzcmM9XCIvaW1nL2ZvbGRlci5zdmdcIlxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yPVwid2hpdGVcIlxuXHRcdFx0XHRjbGFzcz1cImdhbGxlcnktaW1hZ2VcIlxuXHRcdFx0XHQ6Y2xhc3M9XCJ7ICdkcmFnZ2FibGUtLWRyb3B6b25lJzogaXNEcm9wem9uZSB9XCJcblx0XHRcdFx0OndpZHRoPVwiMTUwXCJcblx0XHRcdFx0OmhlaWdodD1cIjE1MFwiXG5cdFx0XHRcdDphbHQ9XCJkaXJlY3RvcnkubmFtZVwiXG5cdFx0XHRcdDpkcmFnZ2FibGU9XCJmYWxzZVwiXG5cdFx0XHRcdGFzcGVjdC1yYXRpbz5cblx0XHRcdDwvcC1pbWc+XG5cdFx0PC9kaXY+XG5cblx0XHQ8cXVpY2stZWRpdFxuXHRcdFx0OmZpbGU9XCJkaXJlY3RvcnlcIlxuXHRcdFx0OmVuZHBvaW50PVwiJy9hcGkvZGlyZWN0b3JpZXMvJyArIGRpcmVjdG9yeS5pZFwiPlxuXHRcdDwvcXVpY2stZWRpdD5cblxuXHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5LXN1YnRpdGxlXCI+XG5cdFx0XHQ8c3BhbiB2LWh0bWw9XCJmaWxlQ291bnRcIj48L3NwYW4+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ2ZpbGUtbWFuYWdlci1kaXJlY3RvcnknLFxuXG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0J3F1aWNrLWVkaXQnOiByZXF1aXJlKCcuLi9BY3Rpb25zL1F1aWNrRWRpdC52dWUnKS5kZWZhdWx0XG5cdFx0fSxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZGlyZWN0b3J5OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNEcm9wem9uZToge1xuICAgICAgICAgICAgXHR0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgXHRkZWZhdWx0OiBmYWxzZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNEcmFnZ2FibGU6IHtcbiAgICAgICAgICAgIFx0dHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIFx0ZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzU2VsZWN0YWJsZToge1xuICAgICAgICAgICAgXHR0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgXHRkZWZhdWx0OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcblx0XHRcdC4uLm1hcEdldHRlcnMoe1xuXHRcdFx0XHRzZWxlY3RlZDogJ2ZpbGVtYW5hZ2VyL2dldFNlbGVjdGVkRGlyZWN0b3JpZXMnLFxuXHRcdFx0fSksXG5cblx0XHRcdGZpbGVDb3VudCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGlyZWN0b3J5LmZpbGVzX2NvdW50ICsgJyBmaWxlcydcblx0XHRcdH0sXG5cblx0XHRcdGlzU2VsZWN0ZWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uaW5jbHVkZXModGhpcy5zZWxlY3RlZCwgdGhpcy5kaXJlY3RvcnkuaWQpXG4gICAgICAgICAgICB9XG5cdFx0fVxuXHR9XG5cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiA6Y2xhc3M9XCJbIHZpZXcgPT0gJ2dyaWQnID8gJ2dhbGxlcnktd3JhcHBlcicgOiAnZ2FsbGVyeS13cmFwcGVyLS1yb3cnIF1cIj5cblx0XHQ8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImdhbGxlcnktaXRlbVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdnYWxsZXJ5LWl0ZW0tLXNlbGVjdGVkIHNlbGVjdGFibGUtLXNlbGVjdGVkJzogaXNTZWxlY3RlZCwgJ3NlbGVjdGFibGUnOiBpc1NlbGVjdGFibGUgfVwiXG4gICAgICAgICAgICBAZGJsY2xpY2s9XCIkZW1pdCgnZGJsY2xpY2snKVwiXG4gICAgICAgICAgICA6ZGF0YS1maWxlPVwiZmlsZS5pZFwiXG4gICAgICAgICAgICA6ZHJhZ2dhYmxlPVwiaXNEcmFnZ2FibGVcIj5cblxuXHRcdFx0PHAtaW1nXG5cdFx0XHRcdHNyYz1cIi9pbWcvaW1hZ2UtbGFyZ2Uuc3ZnXCJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcj1cIndoaXRlXCJcblx0XHRcdFx0Y2xhc3M9XCJnYWxsZXJ5LWltYWdlXCJcblx0XHRcdFx0OmxhenlTcmM9XCJmaWxlU3JjXCJcblx0XHRcdFx0OndpZHRoPVwiMTAwXCJcblx0XHRcdFx0OmhlaWdodD1cIjEwMFwiXG5cdFx0XHRcdDphbHQ9XCJmaWxlLmRlc2NyaXB0aW9uXCJcblx0XHRcdFx0OmRyYWdnYWJsZT1cImZhbHNlXCI+XG5cdFx0XHQ8L3AtaW1nPlxuXHRcdDwvZGl2PlxuXG5cdFx0PHF1aWNrLWVkaXRcblx0XHRcdDpmaWxlPVwiZmlsZVwiXG5cdFx0XHQ6ZW5kcG9pbnQ9XCInL2FwaS9maWxlcy8nICsgZmlsZS5pZFwiPlxuXHRcdDwvcXVpY2stZWRpdD5cblxuXHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5LXN1YnRpdGxlXCI+XG5cdFx0XHQ8c3Bhbj57eyBmaWxlLmJ5dGVzIHwgYnl0ZXMgfX08L3NwYW4+XG5cdFx0XHQ8c3Bhbj57eyBmaWxlLmV4dGVuc2lvbiB9fTwvc3Bhbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5LXRleHRcIiB2LWlmPVwidmlldyA9PSAnbGlzdCdcIj5cblx0XHRcdHt7IGZpbGUubWltZXR5cGUgfX1cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5LXRleHRcIiB2LWlmPVwidmlldyA9PSAnbGlzdCdcIj5cblx0XHRcdHt7ICRtb21lbnQoZmlsZS51cGRhdGVkX2F0KS5mb3JtYXQoJ01NTSBEbywgWVlZWScpIH19XG5cdFx0PC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICdmaWxlLW1hbmFnZXItZmlsZScsXG5cblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHQncXVpY2stZWRpdCc6IHJlcXVpcmUoJy4uL0FjdGlvbnMvUXVpY2tFZGl0LnZ1ZScpLmRlZmF1bHRcblx0XHR9LFxuXG5cdFx0bWl4aW5zOiBbXG5cdFx0ICAgIHJlcXVpcmUoJy4uLy4uLy4uL21peGlucy9maWxlaGVscGVyJykuZGVmYXVsdFxuXHRcdF0sXG5cblx0XHRwcm9wczoge1xuXHRcdFx0ZmlsZToge1xuXHRcdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0fSxcblxuXHRcdFx0aXNEcmFnZ2FibGU6IHtcbiAgICAgICAgICAgIFx0dHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIFx0ZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzU2VsZWN0YWJsZToge1xuICAgICAgICAgICAgXHR0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgXHRkZWZhdWx0OiB0cnVlXG4gICAgICAgICAgICB9XG5cdFx0fSxcblxuXHRcdGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogJ2ZpbGVtYW5hZ2VyL2dldFNlbGVjdGVkRmlsZXMnLFxuICAgICAgICAgICAgICAgIHZpZXc6ICAgICAnZmlsZW1hbmFnZXIvZ2V0VmlldycsXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgaXNTZWxlY3RlZCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyh0aGlzLnNlbGVjdGVkLCB0aGlzLmZpbGUuaWQpXG4gICAgICAgICAgICB9LFxuXG5cdFx0XHR0eXBlKCkge1xuXHRcdFx0XHRyZXR1cm4gKF8uc3BsaXQodGhpcy5maWxlLm1pbWV0eXBlLCAnLycsIDEpKVswXVxuXHRcdFx0fSxcblxuXHRcdFx0ZmlsZVNyYygpIHtcblx0XHRcdFx0c3dpdGNoKHRoaXMudHlwZSkge1xuXHRcdFx0XHRcdGNhc2UgJ2ltYWdlJzpcblx0XHRcdFx0XHRcdHJldHVybiBgJHt0aGlzLmZpbGUudXJsfT93PTEwMCZoPTEwMCZmaXQ9Y3JvcCZ0PSR7dGhpcy4kbW9tZW50LnV0Yyh0aGlzLmZpbGUudXBkYXRlZF9hdCl9YFxuXHRcdFx0XHRcdGNhc2UgJ2F1ZGlvJzpcblx0XHRcdFx0XHRjYXNlICd2aWRlbyc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gYC9pbWcvJHt0aGlzLnR5cGV9LWxhcmdlLnN2Z2Bcblx0XHRcdFx0XHRjYXNlICdhcHBsaWNhdGlvbic6XG5cdFx0XHRcdFx0Y2FzZSAndGV4dCc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gJy9pbWcvZG9jdW1lbnQtbGFyZ2Uuc3ZnJ1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gJy9pbWcvbWlzYy1sYXJnZS5zdmcnXG5cdFx0XHRcdH1cblx0XHRcdH1cbiAgICAgICAgfSxcbiAgICAgICAgbWV0aG9kczp7XG4gICAgICAgIFx0Zm9vKCl7XG4gICAgICAgIFx0XHRjb25zb2xlLmxvZygnY2xpY2snKVxuICAgICAgICBcdH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8bGFiZWwgOmZvcj1cImZpZWxkLmhhbmRsZVwiIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj57e2ZpZWxkLm5hbWV9fTwvbGFiZWw+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIG0tMiBweS0yXCI+XG5cdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwib3BlblwiIHRoZW1lPVwic2Vjb25kYXJ5XCI+XG5cdFx0XHRcdDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAncGx1cy1jaXJjbGUnXVwiIGNsYXNzPVwibXItMVwiPjwvZmEtaWNvbj4gQXNzZXRcblx0XHRcdDwvcC1idXR0b24+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiPlxuXHRcdFx0PHAtYnV0dG9uIHYtZm9yPVwiKGZpbGUsIGluZGV4KSBpbiB2YWx1ZVwiIDprZXk9XCJmaWxlLmlkXCIgQGNsaWNrPVwicmVtb3ZlKGZpbGUuaWQpXCIgY2xhc3M9XCJteC0yXCI+XG5cdFx0XHRcdHt7IGZpbGUubmFtZSB9fVxuXHRcdFx0XHQ8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3RpbWVzLWNpcmNsZSddXCIgY2xhc3M9XCJtbC0yXCI+PC9mYS1pY29uPlxuXHRcdFx0PC9wLWJ1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxwLW1vZGFsIG5hbWU9XCJmaWxlLW1hbmFnZXJcIiBuby1oZWFkZXIgbm8tZm9vdGVyIGV4dHJhLWxhcmdlIHYtbW9kZWw9XCJtb2RhbE9wZW5cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInNpZGUtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmQgaC1mdWxsXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB4LTMgcHktMiB0ZXh0LXJpZ2h0XCI+XG5cdFx0XHRcdFx0XHRcdDxwLWJ1dHRvbiBAY2xpY2s9XCJjbG9zZVwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndGltZXMnXVwiPjwvZmEtaWNvbj48L3AtYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIiB2LWlmPVwiaGFzU2VsZWN0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdDxwLXNvcnRhYmxlLWxpc3Qgdi1tb2RlbD1cInNlbGVjdGVkXCIgY2xhc3M9XCJzb3J0YWJsZS1saXN0XCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbCBtYi02IHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAtc29ydGFibGUtaXRlbSB2LWZvcj1cIihmaWxlLCBpbmRleCkgaW4gc2VsZWN0ZWRcIiA6a2V5PVwiZmlsZS5pZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTIgcHgtM1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwLXNvcnRhYmxlLWhhbmRsZSBjbGFzcz1cImN1cnNvci1tb3ZlIHctMS81XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmEtaWNvbiBpY29uPVwiZWxsaXBzaXMtdlwiIGNsYXNzPVwiaGFuZGxlIGZhLWZ3IHRleHQtZ3JheS00MDBcIj48L2ZhLWljb24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wLXNvcnRhYmxlLWhhbmRsZT5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxwLWltZyA6c3JjPVwiZmlsZS51cmwgKyAnP3c9NTAmaD01MCZmaXQ9Y3JvcCdcIiA6d2lkdGg9XCI1MFwiIDpoZWlnaHQ9XCI1MFwiPjwvcC1pbWc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdj57eyBmaWxlLm5hbWUgfX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwicmVtb3ZlKGZpbGUuaWQpXCIgdGhlbWU9XCJkYW5nZXJcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3RyYXNoJ11cIj48L2ZhLWljb24+PC9wLWJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3Atc29ydGFibGUtaXRlbT5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9wLXNvcnRhYmxlLWxpc3Q+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB0ZXh0LTV4bCB0ZXh0LWdyYXktMzAwXCIgdi1lbHNlPlxuXHRcdFx0XHQgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFyJywgJ2NvcHknXVwiIGNsYXNzPVwiZmEtZncgZmEtM3hcIj48L2ZhLWljb24+XG5cdFx0XHRcdCAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1sZyBweS0yIHRleHQtZ3JheS01MDBcIj5TZWxlY3Qgc29tZSBmaWxlcy4uLjwvc3Bhbj5cblx0XHRcdFx0ICAgICAgICA8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCAgIFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMyBwdC0yXCI+XG5cdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJtci00XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwiYWRkXCIgdGhlbWU9XCJzdWNjZXNzXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdhcnJvdy1hbHQtY2lyY2xlLWxlZnQnXVwiIGNsYXNzPVwibXItMVwiPjwvZmEtaWNvbj48L3AtYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDxsaSBjbGFzcz1cImlubGluZS1mbGV4IG1yLTJcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gY2xhc3M9XCJyb3VuZGVkLXItbm9uZVwiIHRoZW1lPVwicHJpbWFyeVwiIEBjbGljaz1cIiRyZWZzLnVwbG9hZGVyLm9wZW5EWigpXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICd1cGxvYWQnXVwiPjwvZmEtaWNvbj48L3AtYnV0dG9uPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBjbGFzcz1cInJvdW5kZWQtbC1ub25lXCIgdi1tb2RhbDpuZXctZm9sZGVyPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnZm9sZGVyLXBsdXMnXVwiPjwvZmEtaWNvbj48L3AtYnV0dG9uPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzPVwiZmxleCB3LWZ1bGxcIj5cblx0XHRcdFx0XHRcdFx0ICAgIDxsaSBjbGFzcz1cIm1yLTIgdy1mdWxsXCI+PHNlYXJjaC1hY3Rpb24+PC9zZWFyY2gtYWN0aW9uPjwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzcz1cImZsZXhcIj5cblx0XHRcdFx0XHRcdFx0ICAgIDxsaSBjbGFzcz1cIm1yLTJcIj48ZGlzcGxheS1hY3Rpb24+PC9kaXNwbGF5LWFjdGlvbj48L2xpPlxuXHRcdFx0XHRcdFx0XHQgICAgPGxpIGNsYXNzPVwibXItMlwiPjxzb3J0LWFjdGlvbj48L3NvcnQtYWN0aW9uPjwvbGk+XG5cdFx0XHRcdFx0XHRcdCAgICA8bGkgY2xhc3M9XCJtci0yXCI+PHZpZXctYWN0aW9uPjwvdmlldy1hY3Rpb24+PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB4LTMgcHktMlwiPlxuXHRcdFx0XHRcdFx0XHQ8YnJlYWRjcnVtYi1hY3Rpb24+PC9icmVhZGNydW1iLWFjdGlvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZmlsZS1icm93c2VyPjwvZmlsZS1icm93c2VyPlxuICAgICAgICAgICAgXHRcdDwvZGl2PlxuICAgICAgICAgICAgXHQ8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3AtbW9kYWw+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cIm1vZGFsc1wiPlxuICAgICAgICAgICAgPG5ldy1mb2xkZXItbW9kYWw+PC9uZXctZm9sZGVyLW1vZGFsPlxuICAgICAgICA8L3BvcnRhbD5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcblxuXHRpbXBvcnQgQnJlYWRjcnVtYkFjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvQnJlYWRjcnVtYi52dWUnXG5cdGltcG9ydCBEaXNwbGF5QWN0aW9uICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9EaXNwbGF5LnZ1ZSdcblx0aW1wb3J0IFNlYXJjaEFjdGlvbiAgICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL1NlYXJjaC52dWUnXG5cdGltcG9ydCBTb3J0QWN0aW9uICAgICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9Tb3J0LnZ1ZSdcblx0aW1wb3J0IFZpZXdBY3Rpb24gICAgICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL1ZpZXcudnVlJ1xuXG5cdGltcG9ydCBEaXJlY3RvcnkgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaWxlTWFuYWdlci9Ccm93c2UvRGlyZWN0b3J5LnZ1ZSdcblx0aW1wb3J0IEZpbGUgICAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0Jyb3dzZS9GaWxlLnZ1ZSdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ2Fzc2V0LWZpZWxkdHlwZScsXG5cblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHQnZGlzcGxheS1hY3Rpb24nOiAgICBEaXNwbGF5QWN0aW9uLFxuXHRcdFx0J2JyZWFkY3J1bWItYWN0aW9uJzogQnJlYWRjcnVtYkFjdGlvbixcblx0XHRcdCdzZWFyY2gtYWN0aW9uJzogICAgIFNlYXJjaEFjdGlvbixcblx0XHRcdCdzb3J0LWFjdGlvbic6ICAgICAgIFNvcnRBY3Rpb24sXG5cdFx0XHQndmlldy1hY3Rpb24nOiAgICAgICBWaWV3QWN0aW9uLFxuXG5cdFx0XHQnZGlyZWN0b3J5JzogRGlyZWN0b3J5LFxuXHRcdFx0J2ZpbGUnOiAgICAgIEZpbGUsXG5cdFx0fSxcblxuXHRcdG1peGluczogW1xuXHRcdFx0cmVxdWlyZSgnLi4vLi4vbWl4aW5zL2ZpbGVzZWxlY3RvcicpLmRlZmF1bHQsXG5cdFx0XHQvLyByZXF1aXJlKCcuLi8uLi9taXhpbnMvZmlsZWRyYWdkcm9wJykuZGVmYXVsdCxcbiAgICAgICAgICAgIHJlcXVpcmUoJy4uLy4uL21peGlucy9maWxlYnJvd3NlcicpLmRlZmF1bHQsXG4gICAgICAgIF0sXG5cblx0XHRkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFx0bW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIFx0c2VsZWN0ZWQ6IHt9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBcdHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4ge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgICAgICAgIFx0c2VsZWN0ZWRGaWxlczogJ2ZpbGVtYW5hZ2VyL2dldFNlbGVjdGVkRmlsZXMnLFxuXHRcdFx0XHRmaWxlczogICAgICAgICAnZmlsZW1hbmFnZXIvZ2V0RmlsZXMnLFxuICAgICAgICBcdH0pLFxuXG4gICAgICAgIFx0aGFzU2VsZWN0aW9uKCkge1xuICAgICAgICBcdFx0cmV0dXJuIF8uc2l6ZSh0aGlzLnNlbGVjdGVkKSA+IDBcbiAgICAgICAgXHR9XG5cbiAgICAgICAgfSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC4uLm1hcEFjdGlvbnMoe1xuXHRcdFx0XHRjbGVhckZpbGVTZWxlY3Rpb246ICdmaWxlbWFuYWdlci9jbGVhckZpbGVTZWxlY3Rpb24nLFxuXHRcdFx0XHRyZXNldDogJ2ZpbGVtYW5hZ2VyL3Jlc2V0Jyxcblx0XHRcdH0pLFxuXG5cdFx0XHRhZGQoKSB7XG5cdFx0XHRcdF8uZm9yRWFjaCh0aGlzLnNlbGVjdGVkRmlsZXMsIChpZCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLnNlbGVjdGVkLCBpZCwgXy5maW5kKHRoaXMuZmlsZXMsIFsgJ2lkJywgaWQgXSkpXG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0Ly8gc2F2ZSAmIGNsZWFyLi5cblx0XHRcdFx0dGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLnNlbGVjdGVkKVxuXHRcdFx0XHR0aGlzLmNsZWFyRmlsZVNlbGVjdGlvbigpXG5cdFx0XHR9LFxuXG5cdFx0XHRyZW1vdmUoaWQpIHtcblx0XHRcdFx0dGhpcy4kZGVsZXRlKHRoaXMuc2VsZWN0ZWQsIGlkKVxuXHRcdFx0fSxcblxuXHRcdFx0b3BlbigpIHtcblx0XHRcdFx0dGhpcy5tb2RhbE9wZW4gPSB0cnVlXG5cdFx0XHRcdHRoaXMucmVzZXQoKVxuXG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWQgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnZhbHVlKVxuXHRcdFx0fSxcblxuXHRcdFx0Y2xvc2UoKSB7XG5cdFx0XHRcdHRoaXMubW9kYWxPcGVuID0gZmFsc2Vcblx0XHRcdFx0dGhpcy5yZXNldCgpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS10ZXh0XCIgfSwgW1xuICAgIF92bS5pc0VkaXRpbmdcbiAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpbGUubmFtZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICByZWY6IFwiZWRpdFwiLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fY29udHJvbCBmb3JtX19jb250cm9sLS1zbSB0ZXh0LWNlbnRlclwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmlsZS5uYW1lIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBibHVyOiBfdm0ucmV2ZXJ0LFxuICAgICAgICAgICAgICBrZXl1cDogW1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZW50ZXJcIiwgMTMsICRldmVudC5rZXksIFwiRW50ZXJcIilcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGUoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICEkZXZlbnQudHlwZS5pbmRleE9mKFwia2V5XCIpICYmXG4gICAgICAgICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlc2NcIiwgMjcsICRldmVudC5rZXksIFtcbiAgICAgICAgICAgICAgICAgICAgICBcIkVzY1wiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiRXNjYXBlXCJcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZXZlcnQoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5maWxlLCBcIm5hbWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICA6IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRydW5jYXRlXCIsIG9uOiB7IGRibGNsaWNrOiBfdm0uZWRpdCB9IH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5uYW1lKSlcbiAgICAgICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LXdyYXBwZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS1pdGVtXCIsXG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiZ2FsbGVyeS1pdGVtLS1zZWxlY3RlZCBzZWxlY3RhYmxlLS1zZWxlY3RlZFwiOiBfdm0uaXNTZWxlY3RlZCxcbiAgICAgICAgICAgIHNlbGVjdGFibGU6IF92bS5pc1NlbGVjdGFibGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBcImRhdGEtZGlyZWN0b3J5XCI6IF92bS5kaXJlY3RvcnkuaWQsXG4gICAgICAgICAgICBkcmFnZ2FibGU6IF92bS5pc0RyYWdnYWJsZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImRibGNsaWNrXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwLWltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LWltYWdlXCIsXG4gICAgICAgICAgICBjbGFzczogeyBcImRyYWdnYWJsZS0tZHJvcHpvbmVcIjogX3ZtLmlzRHJvcHpvbmUgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogXCIvaW1nL2ZvbGRlci5zdmdcIixcbiAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgd2lkdGg6IDE1MCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNTAsXG4gICAgICAgICAgICAgIGFsdDogX3ZtLmRpcmVjdG9yeS5uYW1lLFxuICAgICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlLFxuICAgICAgICAgICAgICBcImFzcGVjdC1yYXRpb1wiOiBcIlwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInF1aWNrLWVkaXRcIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGZpbGU6IF92bS5kaXJlY3RvcnksXG4gICAgICAgICAgZW5kcG9pbnQ6IFwiL2FwaS9kaXJlY3Rvcmllcy9cIiArIF92bS5kaXJlY3RvcnkuaWRcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LXN1YnRpdGxlXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uZmlsZUNvdW50KSB9IH0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiBbX3ZtLnZpZXcgPT0gXCJncmlkXCIgPyBcImdhbGxlcnktd3JhcHBlclwiIDogXCJnYWxsZXJ5LXdyYXBwZXItLXJvd1wiXVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LWl0ZW1cIixcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgXCJnYWxsZXJ5LWl0ZW0tLXNlbGVjdGVkIHNlbGVjdGFibGUtLXNlbGVjdGVkXCI6IF92bS5pc1NlbGVjdGVkLFxuICAgICAgICAgICAgc2VsZWN0YWJsZTogX3ZtLmlzU2VsZWN0YWJsZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLWZpbGVcIjogX3ZtLmZpbGUuaWQsIGRyYWdnYWJsZTogX3ZtLmlzRHJhZ2dhYmxlIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImRibGNsaWNrXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwLWltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LWltYWdlXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IFwiL2ltZy9pbWFnZS1sYXJnZS5zdmdcIixcbiAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgbGF6eVNyYzogX3ZtLmZpbGVTcmMsXG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAsXG4gICAgICAgICAgICAgIGhlaWdodDogMTAwLFxuICAgICAgICAgICAgICBhbHQ6IF92bS5maWxlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICBkcmFnZ2FibGU6IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInF1aWNrLWVkaXRcIiwge1xuICAgICAgICBhdHRyczogeyBmaWxlOiBfdm0uZmlsZSwgZW5kcG9pbnQ6IFwiL2FwaS9maWxlcy9cIiArIF92bS5maWxlLmlkIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS1zdWJ0aXRsZVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5fZihcImJ5dGVzXCIpKF92bS5maWxlLmJ5dGVzKSkpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZmlsZS5leHRlbnNpb24pKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0udmlldyA9PSBcImxpc3RcIlxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XCIgKyBfdm0uX3MoX3ZtLmZpbGUubWltZXR5cGUpICsgXCJcXG5cXHRcXHRcIilcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS52aWV3ID09IFwibGlzdFwiXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LXRleHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgIF92bS4kbW9tZW50KF92bS5maWxlLnVwZGF0ZWRfYXQpLmZvcm1hdChcIk1NTSBEbywgWVlZWVwiKVxuICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiLCBhdHRyczogeyBmb3I6IF92bS5maWVsZC5oYW5kbGUgfSB9LFxuICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZmllbGQubmFtZSkpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgbS0yIHB5LTJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHRoZW1lOiBcInNlY29uZGFyeVwiIH0sIG9uOiB7IGNsaWNrOiBfdm0ub3BlbiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInBsdXMtY2lyY2xlXCJdIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBBc3NldFxcblxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1zdGFydFwiIH0sXG4gICAgICAgIF92bS5fbChfdm0udmFsdWUsIGZ1bmN0aW9uKGZpbGUsIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGZpbGUuaWQsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm14LTJcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZShmaWxlLmlkKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XCIgKyBfdm0uX3MoZmlsZS5uYW1lKSArIFwiXFxuXFx0XFx0XFx0XFx0XCIpLFxuICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTJcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ0aW1lcy1jaXJjbGVcIl0gfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInAtbW9kYWxcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBcImZpbGUtbWFuYWdlclwiLFxuICAgICAgICAgICAgXCJuby1oZWFkZXJcIjogXCJcIixcbiAgICAgICAgICAgIFwibm8tZm9vdGVyXCI6IFwiXCIsXG4gICAgICAgICAgICBcImV4dHJhLWxhcmdlXCI6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1vZGFsT3BlbixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLm1vZGFsT3BlbiA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9kYWxPcGVuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2lkZS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBoLWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcHgtMyBweS0yIHRleHQtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgb246IHsgY2xpY2s6IF92bS5jbG9zZSB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW19jKFwiZmEtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRpbWVzXCJdIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmhhc1NlbGVjdGlvblxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLXNvcnRhYmxlLWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNvcnRhYmxlLWxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGVkID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgbWItNiB3LWZ1bGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWxlY3RlZCwgZnVuY3Rpb24oZmlsZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicC1zb3J0YWJsZS1pdGVtXCIsIHsga2V5OiBmaWxlLmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB5LTIgcHgtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtc29ydGFibGUtaGFuZGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjdXJzb3ItbW92ZSB3LTEvNVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYW5kbGUgZmEtZncgdGV4dC1ncmF5LTQwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImVsbGlwc2lzLXZcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBmaWxlLnVybCArIFwiP3c9NTAmaD01MCZmaXQ9Y3JvcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoX3ZtLl9zKGZpbGUubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJkYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVtb3ZlKGZpbGUuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRyYXNoXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC01eGwgdGV4dC1ncmF5LTMwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBmYS0zeFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXJcIiwgXCJjb3B5XCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWxnIHB5LTIgdGV4dC1ncmF5LTUwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTZWxlY3Qgc29tZSBmaWxlcy4uLlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTMgcHQtMlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXItNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwic3VjY2Vzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uYWRkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBbXCJmYXNcIiwgXCJhcnJvdy1hbHQtY2lyY2xlLWxlZnRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImlubGluZS1mbGV4IG1yLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtci1ub25lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJlZnMudXBsb2FkZXIub3BlbkRaKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidXBsb2FkXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOm5ldy1mb2xkZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJuZXctZm9sZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWQtbC1ub25lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiZm9sZGVyLXBsdXNcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IHctZnVsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXItMiB3LWZ1bGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzZWFyY2gtYWN0aW9uXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1yLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJkaXNwbGF5LWFjdGlvblwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtci0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic29ydC1hY3Rpb25cIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInZpZXctYWN0aW9uXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB4LTMgcHktMlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImJyZWFkY3J1bWItYWN0aW9uXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImZpbGUtYnJvd3NlclwiKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJtb2RhbHNcIiB9IH0sIFtfYyhcIm5ldy1mb2xkZXItbW9kYWxcIildLCAxKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9RdWlja0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY5Mzc5NjI4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1F1aWNrRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1F1aWNrRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Y5Mzc5NjI4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y5Mzc5NjI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y5Mzc5NjI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9RdWlja0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY5Mzc5NjI4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y5Mzc5NjI4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL1F1aWNrRWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aWNrRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVpY2tFZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWlja0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY5Mzc5NjI4JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EaXJlY3RvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTViMmYxYmQxJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0RpcmVjdG9yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0RpcmVjdG9yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzViMmYxYmQxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzViMmYxYmQxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzViMmYxYmQxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EaXJlY3RvcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTViMmYxYmQxJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzViMmYxYmQxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9Ccm93c2UvRGlyZWN0b3J5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGlyZWN0b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXJlY3RvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RpcmVjdG9yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWIyZjFiZDEmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1MWFiZDcwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoYW5la3JvbGlrb3dza2kvQ29kZS9mdXNpb25jbXMtdjYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTUxYWJkNzAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTUxYWJkNzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTUxYWJkNzAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1MWFiZDcwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU1MWFiZDcwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9Ccm93c2UvRmlsZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU1MWFiZDcwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDYyNWMxMDkmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ2MjVjMTA5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ2MjVjMTA5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ2MjVjMTA5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDYyNWMxMDkmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNDYyNWMxMDknLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9maWVsZHR5cGVzL0Fzc2V0L0ZpZWxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDYyNWMxMDkmXCIiLCJleHBvcnQgZGVmYXVsdCB7XG5cdGZpbHRlcnM6IHtcblx0XHRieXRlcyh2YWx1ZSkge1xuXHRcdCAgICBsZXQgdGhyZXNoID0gMTAwMFxuXG5cdFx0ICAgIGlmIChNYXRoLmFicyh2YWx1ZSkgPCB0aHJlc2gpIHtcblx0XHQgICAgICAgIHJldHVybiB2YWx1ZSArICcgQidcblx0XHQgICAgfVxuXG5cdFx0ICAgIGxldCBpbmRleCA9IC0xXG5cdFx0ICAgIGxldCB1bml0cyA9IFsnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXVxuXHRcdCAgICBcblx0XHQgICAgZG8ge1xuXHRcdCAgICAgICAgdmFsdWUgLz0gdGhyZXNoXG5cdFx0ICAgICAgICArK2luZGV4XG5cdFx0ICAgIH0gd2hpbGUgKE1hdGguYWJzKHZhbHVlKSA+PSB0aHJlc2ggJiYgaW5kZXggPCB1bml0cy5sZW5ndGggLSAxKVxuXG5cdFx0ICAgIHJldHVybiB2YWx1ZS50b0ZpeGVkKDEpICsgJyAnICsgdW5pdHNbaW5kZXhdXG5cdFx0fVxuXHR9XG59IiwiaW1wb3J0IERyYWdTZWxlY3QgZnJvbSAnRHJhZ1NlbGVjdCdcbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGRhdGEoKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHNlbGVjdG9yOiBudWxsXG5cdFx0fVxuXHR9LFxuXG5cdHdhdGNoOiB7XG4gICAgICAgIGxvYWRpbmc6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIFx0dGhpcy5zZWxlY3Rvci5hZGRTZWxlY3RhYmxlcyhkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RhYmxlJykpXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICBcdC4uLm1hcEdldHRlcnMoe1xuICAgIFx0XHRsb2FkaW5nOiAnZmlsZW1hbmFnZXIvZ2V0TG9hZGluZycsXG4gICAgXHR9KVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgXHQuLi5tYXBBY3Rpb25zKHtcbiAgICAgICAgICAgIHRvZ2dsZURpcmVjdG9yeVNlbGVjdGlvbjogJ2ZpbGVtYW5hZ2VyL3RvZ2dsZURpcmVjdG9yeVNlbGVjdGlvbicsXG4gICAgICAgICAgICBjbGVhckRpcmVjdG9yeVNlbGVjdGlvbjogJ2ZpbGVtYW5hZ2VyL2NsZWFyRGlyZWN0b3J5U2VsZWN0aW9uJyxcbiAgICAgICAgICAgIHRvZ2dsZUZpbGVTZWxlY3Rpb246ICdmaWxlbWFuYWdlci90b2dnbGVGaWxlU2VsZWN0aW9uJyxcbiAgICAgICAgICAgIGNsZWFyRmlsZVNlbGVjdGlvbjogJ2ZpbGVtYW5hZ2VyL2NsZWFyRmlsZVNlbGVjdGlvbicsXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGNsZWFyU2VsZWN0aW9ucygpIHtcbiAgICBcdFx0dGhpcy5jbGVhckZpbGVTZWxlY3Rpb24oKVxuXHRcdFx0dGhpcy5jbGVhckRpcmVjdG9yeVNlbGVjdGlvbigpXG4gICAgICAgIH1cbiAgICB9LFxuXG5cdG1vdW50ZWQoKSB7XG5cdFx0Y29uc3QgY29udGFpbmVyICAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0YWJsZXMnKVxuICAgIFx0Y29uc3Qgc2VsZWN0YWJsZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWxlY3RhYmxlJylcblxuXHRcdHRoaXMuc2VsZWN0b3IgPSBuZXcgRHJhZ1NlbGVjdCh7XG5cdFx0XHRzZWxlY3RhYmxlczogc2VsZWN0YWJsZXMsXG5cdFx0XHRhcmVhOiBjb250YWluZXIsXG5cdCAgICAgICAgY2FsbGJhY2s6IChlbGVtZW50cykgPT4ge1xuXHQgICAgICAgIFx0dGhpcy5jbGVhclNlbGVjdGlvbnMoKVxuXG5cdFx0XHRcdC8vIFRvZ2dsZSBmaWxlcy9kaXJlY3Rvcmllc1xuXHQgICAgICAgIFx0Xy5mb3JFYWNoKGVsZW1lbnRzLCAoZWwpID0+IHtcblx0ICAgICAgICBcdFx0aWYgKGVsLmRhdGFzZXQuZmlsZSkge1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVGaWxlU2VsZWN0aW9uKHBhcnNlSW50KGVsLmRhdGFzZXQuZmlsZSkpXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChlbC5kYXRhc2V0LmRpcmVjdG9yeSkge1xuXHRcdFx0XHRcdFx0dGhpcy50b2dnbGVEaXJlY3RvcnlTZWxlY3Rpb24ocGFyc2VJbnQoZWwuZGF0YXNldC5kaXJlY3RvcnkpKVxuXHRcdFx0XHRcdH1cblx0ICAgICAgICBcdH0pXG5cdCAgICAgICAgfSxcblxuXHQgICAgICAgIC8vIFN0YXJ0IGRyYWdnaW5nIHNlbGVjdG9yLi5cblx0XHRcdG9uRHJhZ1N0YXJ0OiAoZWwpID0+IHtcblx0XHRcdFx0Ly8gUHJldmVudCBzZWxlY3RvciBmcm9tIHNlbGVjdGluZ1xuXHRcdFx0XHRpZiAoZWwudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0YWJsZS0tc2VsZWN0ZWQnKSB8fCBlbC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdGFibGUtLXNlbGVjdGVkJykpIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdG9yLmJyZWFrKClcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHR9KVxuXHR9LFxuXG5cdGRlc3Ryb3llZCgpIHtcblx0XHR0aGlzLnNlbGVjdG9yLnN0b3AoKVxuXHR9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==