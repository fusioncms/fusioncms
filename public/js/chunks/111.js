(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[111],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Breadcrumb.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Actions/Breadcrumb.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

//
//
//
//
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
  name: 'file-manager-breadcrumb-action',
  mixins: [__webpack_require__(/*! ../../../mixins/filebrowser */ "./resources/js/mixins/filebrowser.js")["default"]],
  computed: {
    nav: function nav() {
      var breadcrumbs = _toConsumableArray(this.breadcrumbs);

      if (!this.rootDirectory) {
        breadcrumbs.unshift({
          id: null,
          name: 'Root'
        });
      }

      return breadcrumbs;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Display.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Actions/Display.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'file-manager-display-action',
  data: function data() {
    return {
      options: {
        'everything': 'asterisk',
        'images': 'images',
        'videos': 'video',
        'audio': 'volume-up',
        'documents': 'file-alt'
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    display: 'filemanager/getDisplay'
  })),
  filters: {
    capitalize: function capitalize(value) {
      return _.startCase(value);
    }
  },
  watch: {
    display: function display(value) {
      this.fetchFilesAndDirectories();
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
    setDisplay: 'filemanager/setDisplay'
  }))
});

/***/ }),

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Search.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Actions/Search.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'file-manager-search-action',
  computed: {
    search: {
      get: function get() {
        return this.$store.state.filemanager.search;
      },
      set: function set(value) {
        this.setSearch(value);
      }
    }
  },
  watch: {
    search: function search(value) {
      this.fetchFilesAndDirectories();
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
    setSearch: 'filemanager/setSearch'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Sort.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Actions/Sort.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'file-manager-sort-action',
  data: function data() {
    return {
      options: {
        name: 'Name',
        bytes: 'Filesize',
        updated_at: 'Last Modified'
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    direction: 'filemanager/getDirection',
    sort: 'filemanager/getSort'
  })),
  watch: {
    direction: function direction(value) {
      this.fetchFilesAndDirectories();
    },
    sort: function sort(value) {
      this.fetchFilesAndDirectories();
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
    toggleDirection: 'filemanager/toggleDirection',
    setDirection: 'filemanager/setDirection',
    setSort: 'filemanager/setSort'
  }), {
    sortBy: function sortBy(key) {
      if (this.sort === key) {
        this.toggleDirection();
      } else {
        this.setSort(key);
        this.setDirection('asc');
      }
    },
    sortIcon: function sortIcon(key) {
      if (this.sort === key) {
        if (this.direction === 'asc') {
          return 'sort-amount-down';
        } else {
          return 'sort-amount-up';
        }
      }

      return 'bars';
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/View.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Actions/View.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'file-manager-view-action',
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    view: 'filemanager/getView'
  })),
  watch: {
    view: function view(value) {
      this.fetchFilesAndDirectories();
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
    toggleView: 'filemanager/toggleView'
  }))
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
      "default": true
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
      "default": true
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
    fileSrc: function fileSrc() {
      switch (this.file.type) {
        case 'image':
          return "".concat(this.file.url, "?w=100&h=100&fit=crop&t=").concat(this.$moment.utc(this.file.updated_at));

        default:
          return "/img/".concat(this.file.type, "-large.svg");
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileProgress.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/FileProgress.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _FileProgressRow_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileProgressRow.vue */ "./resources/js/components/FileManager/FileProgressRow.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'file-progress',
  components: {
    'file-progress-row': _FileProgressRow_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    uploadProgress: 'filemanager/getUploadProgress',
    minimized: 'filemanager/getUploadsMinimized',
    fileUploads: 'filemanager/getFileUploads',
    visible: 'filemanager/getUploadsVisible'
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    'setUploadsMinimized': 'filemanager/setUploadsMinimized',
    'setUploadsVisible': 'filemanager/setUploadsVisible'
  }), {
    toggleMinimize: function toggleMinimize() {
      this.setUploadsMinimized(!this.minimized);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileProgressRow.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/FileProgressRow.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'file-progress-row',
  props: {
    file: {
      type: File
    },
    status: {
      type: String
    }
  },
  computed: {
    type: function type() {
      var ftype = this.file.type.split('/')[0];

      if (ftype == 'application' || ftype == 'text' || ftype == '') {
        ftype = 'document';
      }

      return ftype;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileSelection.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/FileSelection.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileUploader.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/FileUploader.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue2-dropzone */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.js");
/* harmony import */ var vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue2-dropzone/dist/vue2Dropzone.min.css */ "./node_modules/vue2-dropzone/dist/vue2Dropzone.min.css");
/* harmony import */ var vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue2_dropzone_dist_vue2Dropzone_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _FileProgress_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FileProgress.vue */ "./resources/js/components/FileManager/FileProgress.vue");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'file-uploader',
  components: {
    vueDropzone: vue2_dropzone__WEBPACK_IMPORTED_MODULE_2___default.a,
    'file-progress': _FileProgress_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      dropzoneOptions: {
        url: '/api/files',
        maxFilesize: 1500,
        headers: {}
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    currentDirectory: 'filemanager/getCurrentDirectory',
    dropzoneVisible: 'filemanager/getDropzoneVisible',
    fileUploads: 'filemanager/getFileUploads'
  }), {
    csrf: function csrf() {
      var token = document.head.querySelector('meta[name="csrf-token"]');

      if (token) {
        token = token.content;
      } else {
        console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
      }

      return token;
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
    setUploadsMinimized: 'filemanager/setUploadsMinimized',
    setDropzoneVisible: 'filemanager/setDropzoneVisible',
    setUploadProgress: 'filemanager/setUploadProgress',
    setUploadsVisible: 'filemanager/setUploadsVisible',
    setFileUploads: 'filemanager/setFileUploads',
    addFileUpload: 'filemanager/addFileUpload',
    addFile: 'filemanager/addFile'
  }), {
    openDZ: function openDZ() {
      document.querySelector('.dz-hidden-input').click();
    },
    configureDZ: function configureDZ() {
      var dz = this.$refs.dropzone_element;
      dz.options.headers['X-CSRF-TOKEN'] = this.csrf;
    },
    dzPreSend: function dzPreSend(file, xhr, formData) {
      formData.append('directory_id', this.currentDirectory);
    },
    dzUploaded: function dzUploaded(response) {
      toast(response.name + ' uploaded', 'success');
    },
    dzComplete: function dzComplete() {
      this.fetchFilesAndDirectories();
      this.setUploadProgress(100);
    },
    startUpload: function startUpload(files) {
      var vm = this;
      vm.showUploads();
      vm.setDropzoneVisible(false);
    },
    showUploads: function showUploads() {
      this.setUploadsVisible(true);
      this.setUploadsMinimized(false);
    },
    updateProgress: function updateProgress() {
      var uploaded = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.filter(this.fileUploads, function (file) {
        return file.status == 'success' || file.status == 'error';
      }).length;

      this.setUploadProgress(uploaded / this.fileUploads.length * 100);
    },
    showError: function showError(file, error, xhr) {
      if (!xhr) {
        file.error = error;
      } else if (xhr.status) {
        file.error = xhr.statusText;
      }
    }
  })
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
/* harmony import */ var _components_FileManager_FileUploader_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/FileManager/FileUploader.vue */ "./resources/js/components/FileManager/FileUploader.vue");
/* harmony import */ var _components_FileManager_FileSelection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/FileManager/FileSelection.vue */ "./resources/js/components/FileManager/FileSelection.vue");
/* harmony import */ var _components_FileManager_Actions_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/FileManager/Actions/Breadcrumb.vue */ "./resources/js/components/FileManager/Actions/Breadcrumb.vue");
/* harmony import */ var _components_FileManager_Actions_Display_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/FileManager/Actions/Display.vue */ "./resources/js/components/FileManager/Actions/Display.vue");
/* harmony import */ var _components_FileManager_Actions_Search_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/FileManager/Actions/Search.vue */ "./resources/js/components/FileManager/Actions/Search.vue");
/* harmony import */ var _components_FileManager_Actions_Sort_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/FileManager/Actions/Sort.vue */ "./resources/js/components/FileManager/Actions/Sort.vue");
/* harmony import */ var _components_FileManager_Actions_View_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/FileManager/Actions/View.vue */ "./resources/js/components/FileManager/Actions/View.vue");
/* harmony import */ var _components_FileManager_Browse_Directory_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/FileManager/Browse/Directory.vue */ "./resources/js/components/FileManager/Browse/Directory.vue");
/* harmony import */ var _components_FileManager_Browse_File_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/FileManager/Browse/File.vue */ "./resources/js/components/FileManager/Browse/File.vue");
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
    'file-uploader': _components_FileManager_FileUploader_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'file-selection': _components_FileManager_FileSelection_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'display-action': _components_FileManager_Actions_Display_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    'breadcrumb-action': _components_FileManager_Actions_Breadcrumb_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'search-action': _components_FileManager_Actions_Search_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    'sort-action': _components_FileManager_Actions_Sort_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    'view-action': _components_FileManager_Actions_View_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    'directory': _components_FileManager_Browse_Directory_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    'file': _components_FileManager_Browse_File_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Breadcrumb.vue?vue&type=template&id=6af2d47e&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Actions/Breadcrumb.vue?vue&type=template&id=6af2d47e& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "=flex inline-flex items-center" },
    [
      _vm._l(_vm.nav, function(breadcrumb, index) {
        return [
          index > 0
            ? _c("span", { staticClass: "mx-2 font-bold" }, [_vm._v("/")])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "p-button",
            {
              attrs: { disabled: _vm.currentDirectory == breadcrumb.id },
              on: {
                click: function($event) {
                  return _vm.navigate(breadcrumb)
                }
              }
            },
            [
              index == 0
                ? _c("fa-icon", {
                    staticClass: "fa-fw mr-1",
                    attrs: { icon: ["fas", "home"] }
                  })
                : _vm._e(),
              _vm._v("\n\t\t\t" + _vm._s(breadcrumb.name) + "\n\t\t")
            ],
            1
          )
        ]
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Display.vue?vue&type=template&id=1b7a61d7&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Actions/Display.vue?vue&type=template&id=1b7a61d7& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
    "p-dropdown",
    [
      _c("fa-icon", {
        staticClass: "fa-fw mr-1",
        attrs: { icon: ["fas", _vm.options[_vm.display]] }
      }),
      _vm._v("\n\t" + _vm._s(_vm._f("capitalize")(_vm.display)) + "\n\t\n\t"),
      _c(
        "template",
        { slot: "options" },
        _vm._l(_vm.options, function(icon, key) {
          return _c(
            "p-dropdown-item",
            {
              key: key,
              staticClass: "w-48",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.setDisplay(key)
                }
              }
            },
            [
              _c("fa-icon", {
                staticClass: "fa-fw mr-1",
                attrs: { icon: ["fas", icon] }
              }),
              _vm._v("\n\t\t\t" + _vm._s(_vm._f("capitalize")(key)) + "\n\t\t")
            ],
            1
          )
        }),
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Search.vue?vue&type=template&id=28184dba&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Actions/Search.vue?vue&type=template&id=28184dba& ***!
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
  return _c("input", {
    directives: [
      {
        name: "model",
        rawName: "v-model",
        value: _vm.search,
        expression: "search"
      }
    ],
    staticClass: "form-input",
    attrs: { type: "text", name: "search", placeholder: "Search..." },
    domProps: { value: _vm.search },
    on: {
      input: function($event) {
        if ($event.target.composing) {
          return
        }
        _vm.search = $event.target.value
      }
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Sort.vue?vue&type=template&id=e8ff4a4e&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Actions/Sort.vue?vue&type=template&id=e8ff4a4e& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    "p-dropdown",
    [
      _c("fa-icon", {
        staticClass: "fa-fw mr-1",
        attrs: { icon: ["fas", _vm.sortIcon(_vm.sort)] }
      }),
      _vm._v("\n\t" + _vm._s(_vm.options[_vm.sort]) + "\n\t\n\t"),
      _c(
        "template",
        { slot: "options" },
        _vm._l(_vm.options, function(value, key) {
          return _c(
            "p-dropdown-item",
            {
              key: key,
              staticClass: "w-48",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.sortBy(key)
                }
              }
            },
            [
              _c("fa-icon", {
                staticClass: "fa-fw mr-1",
                attrs: { icon: ["fas", _vm.sortIcon(key)] }
              }),
              _vm._v("\n\t\t\t" + _vm._s(value) + "\n\t\t")
            ],
            1
          )
        }),
        1
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/View.vue?vue&type=template&id=6fb9c460&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/Actions/View.vue?vue&type=template&id=6fb9c460& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "inline-flex" },
    [
      _c(
        "p-button",
        {
          staticClass: "rounded-l rounded-r-none",
          attrs: { disabled: _vm.view == "list" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.toggleView("list")
            }
          }
        },
        [
          _c("fa-icon", {
            staticClass: "fa-fw",
            attrs: { icon: ["fas", "bars"] }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "p-button",
        {
          staticClass: "rounded-r rounded-l-none",
          attrs: { disabled: _vm.view == "grid" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.toggleView("grid")
            }
          }
        },
        [
          _c("fa-icon", {
            staticClass: "fa-fw",
            attrs: { icon: ["fas", "th-large"] }
          })
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
            "data-dropzone": _vm.directory.id,
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
        _c("span", { domProps: { textContent: _vm._s(_vm.fileCount) } })
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
          attrs: { "data-selection": _vm.file.id, draggable: _vm.isDraggable },
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileProgress.vue?vue&type=template&id=655a22dc&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/FileProgress.vue?vue&type=template&id=655a22dc& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      staticClass: "file-manager__uploads card",
      class: [_vm.visible ? "file-manager__uploads--visible" : ""]
    },
    [
      _c(
        "div",
        { staticClass: "card__header flex items-center bg-black px-5 py-2" },
        [
          _c("div", { staticClass: "form__label text-white mb-0" }, [
            _vm.uploadProgress != 100
              ? _c("span", [
                  _vm._v(
                    "\n                Uploading: " +
                      _vm._s(_vm.uploadProgress.toFixed(0)) +
                      "%\n            "
                  )
                ])
              : _c("span", [_vm._v("\n                Uploads\n            ")])
          ]),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "ml-auto mr-5",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.toggleMinimize($event)
                }
              }
            },
            [
              _vm.minimized
                ? _c(
                    "fa-icon",
                    { staticClass: "text-white", attrs: { icon: "expand" } },
                    [_c("span", { staticClass: "sr-only" }, [_vm._v("Expand")])]
                  )
                : _c(
                    "fa-icon",
                    { staticClass: "text-white", attrs: { icon: "minus" } },
                    [
                      _c("span", { staticClass: "sr-only" }, [
                        _vm._v("Minimize")
                      ])
                    ]
                  )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "a",
            {
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.setUploadsVisible(false)
                }
              }
            },
            [
              _c(
                "fa-icon",
                { staticClass: "text-white", attrs: { icon: "times" } },
                [_c("span", { staticClass: "sr-only" }, [_vm._v("Close")])]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "file-manager__uploads-body card__body px-4 py-2 overflow-y-auto",
          class: [_vm.minimized ? "hidden" : ""]
        },
        _vm._l(_vm.fileUploads, function(file, index) {
          return file.upload
            ? _c("file-progress-row", {
                key: "file-" + index,
                attrs: { file: file, status: file.status }
              })
            : _vm._e()
        }),
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileProgressRow.vue?vue&type=template&id=2a541118&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/FileProgressRow.vue?vue&type=template&id=2a541118& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "file-progress flex items-center text-sm" }, [
    _c(
      "div",
      { staticClass: "file-progress__icon pr-1" },
      [
        _c("p-img", {
          staticClass: "gallery-image",
          attrs: {
            src: "/img/" + _vm.type + "-large.svg",
            "background-color": "#ffffff",
            width: 25,
            height: 25
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "file-progress__name pl-2 pr-3 truncate flex-1" },
      [_vm._v(_vm._s(_vm.file.name))]
    ),
    _vm._v(" "),
    _vm.file.upload.progress != 100 && _vm.status != "error"
      ? _c("div", { staticClass: "file-progress__bar ml-auto" }, [
          _c("div", { staticClass: "shadow w-full bg-grey-light" }, [
            _c("div", {
              staticClass: "bg-success-400 text-xs leading-none py-1",
              style: "width: " + _vm.file.upload.progress + "%"
            })
          ])
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "file-progress__status ml-2" },
      [
        _vm.status == "success"
          ? _c(
              "fa-icon",
              {
                staticClass: "text-success-600",
                attrs: { icon: ["fas", "check-circle"] }
              },
              [_c("span", { staticClass: "sr-only" }, [_vm._v("Success")])]
            )
          : _vm.status == "error"
          ? _c(
              "p-tooltip",
              { staticClass: "cursor-pointer", attrs: { placement: "left" } },
              [
                [
                  _c(
                    "fa-icon",
                    {
                      staticClass: "text-primary-600",
                      attrs: { icon: ["fas", "times-circle"] }
                    },
                    [_c("span", { staticClass: "sr-only" }, [_vm._v("Error")])]
                  )
                ],
                _vm._v(" "),
                _c("template", { slot: "content" }, [
                  _vm._v("\n        " + _vm._s(_vm.file.error) + "\n      ")
                ])
              ],
              2
            )
          : _c("fa-icon", { attrs: { icon: ["fas", "spinner"], pulse: "" } }, [
              _c("span", { staticClass: "sr-only" }, [_vm._v("Uploading...")])
            ])
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileSelection.vue?vue&type=template&id=21dfa112&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/FileSelection.vue?vue&type=template&id=21dfa112& ***!
  \****************************************************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileUploader.vue?vue&type=template&id=5c7cc253&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FileManager/FileUploader.vue?vue&type=template&id=5c7cc253& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "file-uploader" },
    [
      _c(
        "div",
        {
          staticClass: "file-manager__dropzone",
          class: [_vm.dropzoneVisible ? "file-manager__dropzone--visible" : ""],
          on: {
            click: function($event) {
              if ($event.target !== $event.currentTarget) {
                return null
              }
              return _vm.setDropzoneVisible(false)
            }
          }
        },
        [
          _c("div", { staticClass: "file-manager__prompt" }, [
            _c(
              "div",
              { staticClass: "file-manager__prompt-content" },
              [
                _c("fa-icon", { attrs: { icon: "upload" } }, [
                  _c("span", { staticClass: "sr-only" }, [_vm._v("Upload")])
                ]),
                _vm._v(" "),
                _c("h3", [_vm._v("Drag files here to upload")])
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("vue-dropzone", {
            ref: "dropzone_element",
            attrs: { id: "dropzone", options: _vm.dropzoneOptions },
            on: {
              "vdropzone-mounted": _vm.configureDZ,
              "vdropzone-drag-leave": function($event) {
                return _vm.setDropzoneVisible(false)
              },
              "vdropzone-success": _vm.dzUploaded,
              "vdropzone-queue-complete": _vm.dzComplete,
              "vdropzone-file-added": _vm.addFileUpload,
              "vdropzone-files-added": _vm.startUpload,
              "vdropzone-sending": _vm.dzPreSend,
              "vdropzone-total-upload-progress": _vm.updateProgress,
              "vdropzone-error": _vm.showError
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("file-progress")
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

/***/ "./resources/js/components/FileManager/Actions/Breadcrumb.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/Breadcrumb.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Breadcrumb_vue_vue_type_template_id_6af2d47e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=template&id=6af2d47e& */ "./resources/js/components/FileManager/Actions/Breadcrumb.vue?vue&type=template&id=6af2d47e&");
/* harmony import */ var _Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=script&lang=js& */ "./resources/js/components/FileManager/Actions/Breadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Breadcrumb_vue_vue_type_template_id_6af2d47e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Breadcrumb_vue_vue_type_template_id_6af2d47e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileManager/Actions/Breadcrumb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileManager/Actions/Breadcrumb.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/Breadcrumb.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumb.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Breadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileManager/Actions/Breadcrumb.vue?vue&type=template&id=6af2d47e&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/Breadcrumb.vue?vue&type=template&id=6af2d47e& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_6af2d47e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumb.vue?vue&type=template&id=6af2d47e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Breadcrumb.vue?vue&type=template&id=6af2d47e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_6af2d47e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_6af2d47e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FileManager/Actions/Display.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/Display.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Display_vue_vue_type_template_id_1b7a61d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Display.vue?vue&type=template&id=1b7a61d7& */ "./resources/js/components/FileManager/Actions/Display.vue?vue&type=template&id=1b7a61d7&");
/* harmony import */ var _Display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Display.vue?vue&type=script&lang=js& */ "./resources/js/components/FileManager/Actions/Display.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Display_vue_vue_type_template_id_1b7a61d7___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Display_vue_vue_type_template_id_1b7a61d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileManager/Actions/Display.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileManager/Actions/Display.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/Display.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Display.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Display.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Display_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileManager/Actions/Display.vue?vue&type=template&id=1b7a61d7&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/Display.vue?vue&type=template&id=1b7a61d7& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Display_vue_vue_type_template_id_1b7a61d7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Display.vue?vue&type=template&id=1b7a61d7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Display.vue?vue&type=template&id=1b7a61d7&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Display_vue_vue_type_template_id_1b7a61d7___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Display_vue_vue_type_template_id_1b7a61d7___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/FileManager/Actions/Search.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/Search.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search_vue_vue_type_template_id_28184dba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=28184dba& */ "./resources/js/components/FileManager/Actions/Search.vue?vue&type=template&id=28184dba&");
/* harmony import */ var _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js& */ "./resources/js/components/FileManager/Actions/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Search_vue_vue_type_template_id_28184dba___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Search_vue_vue_type_template_id_28184dba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileManager/Actions/Search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileManager/Actions/Search.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/Search.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileManager/Actions/Search.vue?vue&type=template&id=28184dba&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/Search.vue?vue&type=template&id=28184dba& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_28184dba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=template&id=28184dba& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Search.vue?vue&type=template&id=28184dba&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_28184dba___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_28184dba___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FileManager/Actions/Sort.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/Sort.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sort_vue_vue_type_template_id_e8ff4a4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sort.vue?vue&type=template&id=e8ff4a4e& */ "./resources/js/components/FileManager/Actions/Sort.vue?vue&type=template&id=e8ff4a4e&");
/* harmony import */ var _Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sort.vue?vue&type=script&lang=js& */ "./resources/js/components/FileManager/Actions/Sort.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sort_vue_vue_type_template_id_e8ff4a4e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sort_vue_vue_type_template_id_e8ff4a4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileManager/Actions/Sort.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileManager/Actions/Sort.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/Sort.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sort.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Sort.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileManager/Actions/Sort.vue?vue&type=template&id=e8ff4a4e&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/Sort.vue?vue&type=template&id=e8ff4a4e& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_template_id_e8ff4a4e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sort.vue?vue&type=template&id=e8ff4a4e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/Sort.vue?vue&type=template&id=e8ff4a4e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_template_id_e8ff4a4e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_template_id_e8ff4a4e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FileManager/Actions/View.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/View.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_6fb9c460___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=6fb9c460& */ "./resources/js/components/FileManager/Actions/View.vue?vue&type=template&id=6fb9c460&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/FileManager/Actions/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_6fb9c460___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_6fb9c460___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileManager/Actions/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileManager/Actions/View.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/View.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileManager/Actions/View.vue?vue&type=template&id=6fb9c460&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/FileManager/Actions/View.vue?vue&type=template&id=6fb9c460& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_6fb9c460___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=6fb9c460& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/Actions/View.vue?vue&type=template&id=6fb9c460&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_6fb9c460___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_6fb9c460___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/FileManager/FileProgress.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/FileManager/FileProgress.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileProgress_vue_vue_type_template_id_655a22dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileProgress.vue?vue&type=template&id=655a22dc& */ "./resources/js/components/FileManager/FileProgress.vue?vue&type=template&id=655a22dc&");
/* harmony import */ var _FileProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileProgress.vue?vue&type=script&lang=js& */ "./resources/js/components/FileManager/FileProgress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileProgress_vue_vue_type_template_id_655a22dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileProgress_vue_vue_type_template_id_655a22dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileManager/FileProgress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileManager/FileProgress.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/FileManager/FileProgress.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileProgress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileProgress.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileProgress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileManager/FileProgress.vue?vue&type=template&id=655a22dc&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/FileManager/FileProgress.vue?vue&type=template&id=655a22dc& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileProgress_vue_vue_type_template_id_655a22dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileProgress.vue?vue&type=template&id=655a22dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileProgress.vue?vue&type=template&id=655a22dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileProgress_vue_vue_type_template_id_655a22dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileProgress_vue_vue_type_template_id_655a22dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FileManager/FileProgressRow.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/FileManager/FileProgressRow.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileProgressRow_vue_vue_type_template_id_2a541118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileProgressRow.vue?vue&type=template&id=2a541118& */ "./resources/js/components/FileManager/FileProgressRow.vue?vue&type=template&id=2a541118&");
/* harmony import */ var _FileProgressRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileProgressRow.vue?vue&type=script&lang=js& */ "./resources/js/components/FileManager/FileProgressRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileProgressRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileProgressRow_vue_vue_type_template_id_2a541118___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileProgressRow_vue_vue_type_template_id_2a541118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileManager/FileProgressRow.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileManager/FileProgressRow.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/FileManager/FileProgressRow.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileProgressRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileProgressRow.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileProgressRow.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileProgressRow_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileManager/FileProgressRow.vue?vue&type=template&id=2a541118&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/FileManager/FileProgressRow.vue?vue&type=template&id=2a541118& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileProgressRow_vue_vue_type_template_id_2a541118___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileProgressRow.vue?vue&type=template&id=2a541118& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileProgressRow.vue?vue&type=template&id=2a541118&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileProgressRow_vue_vue_type_template_id_2a541118___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileProgressRow_vue_vue_type_template_id_2a541118___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FileManager/FileSelection.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/FileManager/FileSelection.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileSelection_vue_vue_type_template_id_21dfa112___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileSelection.vue?vue&type=template&id=21dfa112& */ "./resources/js/components/FileManager/FileSelection.vue?vue&type=template&id=21dfa112&");
/* harmony import */ var _FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileSelection.vue?vue&type=script&lang=js& */ "./resources/js/components/FileManager/FileSelection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileSelection_vue_vue_type_template_id_21dfa112___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileSelection_vue_vue_type_template_id_21dfa112___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileManager/FileSelection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileManager/FileSelection.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/FileManager/FileSelection.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileSelection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileSelection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileManager/FileSelection.vue?vue&type=template&id=21dfa112&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/FileManager/FileSelection.vue?vue&type=template&id=21dfa112& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_template_id_21dfa112___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileSelection.vue?vue&type=template&id=21dfa112& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileSelection.vue?vue&type=template&id=21dfa112&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_template_id_21dfa112___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileSelection_vue_vue_type_template_id_21dfa112___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/FileManager/FileUploader.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/FileManager/FileUploader.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FileUploader_vue_vue_type_template_id_5c7cc253___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FileUploader.vue?vue&type=template&id=5c7cc253& */ "./resources/js/components/FileManager/FileUploader.vue?vue&type=template&id=5c7cc253&");
/* harmony import */ var _FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileUploader.vue?vue&type=script&lang=js& */ "./resources/js/components/FileManager/FileUploader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FileUploader_vue_vue_type_template_id_5c7cc253___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FileUploader_vue_vue_type_template_id_5c7cc253___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FileManager/FileUploader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FileManager/FileUploader.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/FileManager/FileUploader.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileUploader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileUploader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FileManager/FileUploader.vue?vue&type=template&id=5c7cc253&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/FileManager/FileUploader.vue?vue&type=template&id=5c7cc253& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_template_id_5c7cc253___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FileUploader.vue?vue&type=template&id=5c7cc253& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FileManager/FileUploader.vue?vue&type=template&id=5c7cc253&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_template_id_5c7cc253___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FileUploader_vue_vue_type_template_id_5c7cc253___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/mixins/filebrowser.js":
/*!********************************************!*\
  !*** ./resources/js/mixins/filebrowser.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    rootDirectory: 'filemanager/getRootDirectory',
    currentDirectory: 'filemanager/getCurrentDirectory',
    parentDirectory: 'filemanager/getParentDirectory',
    breadcrumbs: 'filemanager/getBreadcrumbs',
    directories: 'filemanager/getDirectories',
    files: 'filemanager/getFiles',
    view: 'filemanager/getView'
  })),
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
    },
    size: function size(value) {
      return _.size(value);
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
    setCurrentDirectory: 'filemanager/setCurrentDirectory',
    setParentDirectory: 'filemanager/setParentDirectory',
    setRootDirectory: 'filemanager/setRootDirectory',
    reset: 'filemanager/reset'
  }), {
    navigate: function navigate(directory) {
      this.reset();

      if (directory) {
        this.setCurrentDirectory(directory.id);
        this.setParentDirectory(directory.parent_id);
      }

      this.fetchFilesAndDirectories();
    },
    preview: function preview(file) {
      this.$router.push({
        path: "/files/".concat(file.uuid)
      });
    }
  })
});

/***/ }),

/***/ "./resources/js/mixins/filedragdrop.js":
/*!*********************************************!*\
  !*** ./resources/js/mixins/filedragdrop.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    selectedDirectories: 'filemanager/getSelectedDirectories',
    selectedFiles: 'filemanager/getSelectedFiles'
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    clearDirectorySelection: 'filemanager/clearDirectorySelection',
    setDropzoneVisible: 'filemanager/setDropzoneVisible',
    setDropzoneEnabled: 'filemanager/setDropzoneEnabled',
    clearFileSelection: 'filemanager/clearFileSelection'
  }), {
    clearSelections: function clearSelections() {
      this.clearFileSelection();
      this.clearDirectorySelection();
    }
  }),
  mounted: function mounted() {
    var _this = this;

    var container = document.querySelector('.gallery-container'); // Drag Start

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

      if (ev.screenY < 100) {
        scrollBy(0, -1);
      } else if (ev.screenY > window.innerHeight - 100) {
        scrollBy(0, 1);
      }
    }); // Drag Enter
    // Looking to enter a Dropzone - unhightlight

    container.addEventListener('dragenter', function (ev) {
      if (ev.target.classList.contains('draggable--dropzone')) {
        ev.preventDefault();
        ev.target.parentNode.classList.add('dropzone--over');
      }
    }); // Drag Over
    // Required for `Drop` event

    container.addEventListener('dragover', function (ev) {
      if (ev.target.classList.contains('draggable--dropzone')) {
        ev.preventDefault();
      }
    }); // Drag Leave
    // Leaving a Dropzone - unhightlight

    container.addEventListener('dragleave', function (ev) {
      if (ev.target.classList.contains('draggable--dropzone')) {
        ev.preventDefault();
        ev.target.parentNode.classList.remove('dropzone--over');
      }
    }); // Drop Event

    container.addEventListener('drop', function (ev) {
      if (ev.target.classList.contains('draggable--dropzone')) {
        ev.preventDefault();
        var element = ev.target.parentNode;
        var dropzone = parseInt(element.dataset.dropzone);
        var selection = {
          directories: _this.selectedDirectories,
          files: _this.selectedFiles
        };
        element.classList.add('dropzone--highlight');
        element.classList.remove('dropzone--over');
        setTimeout(function () {
          element.classList.remove('dropzone--highlight');
        }, 1500);

        _this.$emit('drag-n-drop', {
          dropzone: dropzone,
          selection: selection
        });

        _this.clearSelections();
      }
    });
  }
});

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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    selectedDirectories: 'filemanager/getSelectedDirectories',
    selectedFiles: 'filemanager/getSelectedFiles',
    hasSelection: 'filemanager/hasSelection',
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
    },
    loadSelector: function loadSelector(area) {
      var _this = this;

      this.selector = new DragSelect__WEBPACK_IMPORTED_MODULE_0___default.a({
        area: area,
        selectables: area.querySelectorAll('.selectable'),
        callback: function callback(elements) {
          _this.clearSelections();

          _.forEach(elements, function (el) {
            if (el.dataset.selection) {
              _this.toggleFileSelection(parseInt(el.dataset.selection));
            } else if (el.dataset.dropzone) {
              _this.toggleDirectorySelection(parseInt(el.dataset.dropzone));
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
    destroySelector: function destroySelector() {
      if (this.selector) {
        this.selector.stop();
      }
    }
  })
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9CcmVhZGNydW1iLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9EaXNwbGF5LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9RdWlja0VkaXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL1NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvU29ydC52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvVmlldy52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0Jyb3dzZS9EaXJlY3RvcnkudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9Ccm93c2UvRmlsZS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0ZpbGVQcm9ncmVzcy52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0ZpbGVQcm9ncmVzc1Jvdy52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0ZpbGVTZWxlY3Rpb24udnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9GaWxlVXBsb2FkZXIudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9CcmVhZGNydW1iLnZ1ZT9jMzZiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvRGlzcGxheS52dWU/MWMxYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL1F1aWNrRWRpdC52dWU/MmJkYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL1NlYXJjaC52dWU/ZGRlMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL1NvcnQudnVlPzI3NzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9WaWV3LnZ1ZT80OWNjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0Jyb3dzZS9EaXJlY3RvcnkudnVlP2RlYWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQnJvd3NlL0ZpbGUudnVlPzAzNjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvRmlsZVByb2dyZXNzLnZ1ZT9hMjYzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0ZpbGVQcm9ncmVzc1Jvdy52dWU/NmFkOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9GaWxlU2VsZWN0aW9uLnZ1ZT84NzVjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0ZpbGVVcGxvYWRlci52dWU/NTgxMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWU/NmIyMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL0JyZWFkY3J1bWIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvQnJlYWRjcnVtYi52dWU/MTExMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL0JyZWFkY3J1bWIudnVlPzNjZDAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9EaXNwbGF5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL0Rpc3BsYXkudnVlPzQyOTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9EaXNwbGF5LnZ1ZT80MzU3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvUXVpY2tFZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL1F1aWNrRWRpdC52dWU/ZWVjOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL1F1aWNrRWRpdC52dWU/MmIxYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL1NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9TZWFyY2gudnVlPzQ2MTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9TZWFyY2gudnVlPzNjMTgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9Tb3J0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL1NvcnQudnVlPzdiMDUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9Tb3J0LnZ1ZT8wNDIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvVmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9WaWV3LnZ1ZT9lOTg3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvVmlldy52dWU/YTdhZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9Ccm93c2UvRGlyZWN0b3J5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9Ccm93c2UvRGlyZWN0b3J5LnZ1ZT8xYmM2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0Jyb3dzZS9EaXJlY3RvcnkudnVlPzA2YzAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQnJvd3NlL0ZpbGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0Jyb3dzZS9GaWxlLnZ1ZT82MzhiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0Jyb3dzZS9GaWxlLnZ1ZT9jNDE3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0ZpbGVQcm9ncmVzcy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvRmlsZVByb2dyZXNzLnZ1ZT9hZWVhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0ZpbGVQcm9ncmVzcy52dWU/YjA0ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9GaWxlUHJvZ3Jlc3NSb3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0ZpbGVQcm9ncmVzc1Jvdy52dWU/MDQwYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9GaWxlUHJvZ3Jlc3NSb3cudnVlP2RiYmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvRmlsZVNlbGVjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvRmlsZVNlbGVjdGlvbi52dWU/NjgyZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9GaWxlU2VsZWN0aW9uLnZ1ZT9jMGQwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0ZpbGVVcGxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvRmlsZVVwbG9hZGVyLnZ1ZT83MWY5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0ZpbGVVcGxvYWRlci52dWU/OTI2MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Bc3NldC9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvRmllbGQudnVlP2Q5YWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvRmllbGQudnVlP2U0MzEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9maWxlYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL2ZpbGVkcmFnZHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL2ZpbGVoZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL21peGlucy9maWxlc2VsZWN0b3IuanMiXSwibmFtZXMiOlsiY29tcHV0ZWQiLCJtYXBHZXR0ZXJzIiwicm9vdERpcmVjdG9yeSIsImN1cnJlbnREaXJlY3RvcnkiLCJwYXJlbnREaXJlY3RvcnkiLCJicmVhZGNydW1icyIsImRpcmVjdG9yaWVzIiwiZmlsZXMiLCJ2aWV3IiwiZmlsdGVycyIsImJ5dGVzIiwidmFsdWUiLCJ0aHJlc2giLCJNYXRoIiwiYWJzIiwiaW5kZXgiLCJ1bml0cyIsImxlbmd0aCIsInRvRml4ZWQiLCJzaXplIiwiXyIsIm1ldGhvZHMiLCJtYXBBY3Rpb25zIiwiZmV0Y2hGaWxlc0FuZERpcmVjdG9yaWVzIiwic2V0Q3VycmVudERpcmVjdG9yeSIsInNldFBhcmVudERpcmVjdG9yeSIsInNldFJvb3REaXJlY3RvcnkiLCJyZXNldCIsIm5hdmlnYXRlIiwiZGlyZWN0b3J5IiwiaWQiLCJwYXJlbnRfaWQiLCJwcmV2aWV3IiwiZmlsZSIsIiRyb3V0ZXIiLCJwdXNoIiwicGF0aCIsInV1aWQiLCJzZWxlY3RlZERpcmVjdG9yaWVzIiwic2VsZWN0ZWRGaWxlcyIsImNsZWFyRGlyZWN0b3J5U2VsZWN0aW9uIiwic2V0RHJvcHpvbmVWaXNpYmxlIiwic2V0RHJvcHpvbmVFbmFibGVkIiwiY2xlYXJGaWxlU2VsZWN0aW9uIiwiY2xlYXJTZWxlY3Rpb25zIiwibW91bnRlZCIsImNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJldiIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicHJldmVudERlZmF1bHQiLCJzY3JlZW5ZIiwic2Nyb2xsQnkiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsInBhcmVudE5vZGUiLCJhZGQiLCJyZW1vdmUiLCJlbGVtZW50IiwiZHJvcHpvbmUiLCJwYXJzZUludCIsImRhdGFzZXQiLCJzZWxlY3Rpb24iLCJzZXRUaW1lb3V0IiwiJGVtaXQiLCJkYXRhIiwic2VsZWN0b3IiLCJoYXNTZWxlY3Rpb24iLCJsb2FkaW5nIiwidG9nZ2xlRGlyZWN0b3J5U2VsZWN0aW9uIiwidG9nZ2xlRmlsZVNlbGVjdGlvbiIsImxvYWRTZWxlY3RvciIsImFyZWEiLCJEcmFnU2VsZWN0Iiwic2VsZWN0YWJsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FsbGJhY2siLCJlbGVtZW50cyIsImZvckVhY2giLCJlbCIsIm9uRHJhZ1N0YXJ0IiwiY2xvc2VzdCIsImRlc3Ryb3lTZWxlY3RvciIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFDQSx3Q0FEQTtBQUdBLFdBQ0EseUdBREEsQ0FIQTtBQU9BO0FBQ0EsT0FEQSxpQkFDQTtBQUNBOztBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQTtBQUNBO0FBVEE7QUFQQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQ0E7QUFFQTtBQUNBLHFDQURBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0E7QUFDQSxnQ0FEQTtBQUVBLDBCQUZBO0FBR0EseUJBSEE7QUFJQSw0QkFKQTtBQUtBO0FBTEE7QUFEQTtBQVNBLEdBYkE7QUFlQSw4QkFDQTtBQUNBO0FBREEsSUFEQSxDQWZBO0FB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LENBQVdGLFFBQWYsRUFBeUI7QUFDL0IsbUJBQUksQ0FBQ1Usd0JBQUwsQ0FBOEJULFFBQVEsQ0FBQ21CLEVBQUUsQ0FBQ2xCLE9BQUgsQ0FBV0YsUUFBWixDQUF0QztBQUNBO0FBQ0QsV0FORDtBQU9BLFNBYjZCO0FBZTlCO0FBQ0FxQixtQkFBVyxFQUFFLHFCQUFDRCxFQUFELEVBQVE7QUFDcEI7QUFDQSxjQUFJQSxFQUFFLENBQUNoQyxNQUFILENBQVVDLFNBQVYsQ0FBb0JDLFFBQXBCLENBQTZCLHNCQUE3QixLQUF3RDhCLEVBQUUsQ0FBQ2hDLE1BQUgsQ0FBVWtDLE9BQVYsQ0FBa0IsdUJBQWxCLENBQTVELEVBQXdHO0FBQ3ZHLGlCQUFJLENBQUNmLFFBQUw7QUFDQTtBQUNEO0FBckI2QixPQUFmLENBQWhCO0FBdUJBLEtBckNRO0FBdUNUZ0IsbUJBdkNTLDZCQXVDUztBQUNqQixVQUFJLEtBQUtoQixRQUFULEVBQW1CO0FBQ2xCLGFBQUtBLFFBQUwsQ0FBY2lCLElBQWQ7QUFDQTtBQUNEO0FBM0NRO0FBaEJJLENBQWYsRSIsImZpbGUiOiJqcy9jaHVua3MvMTExLmpzP2lkPTRkMWM2MzZjOWM5YTUwYjNlYmIxIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwiPWZsZXggaW5saW5lLWZsZXggaXRlbXMtY2VudGVyXCI+XG5cdFx0PHRlbXBsYXRlIHYtZm9yPVwiKGJyZWFkY3J1bWIsIGluZGV4KSBpbiBuYXZcIj5cblx0XHRcdDxzcGFuIGNsYXNzPVwibXgtMiBmb250LWJvbGRcIiB2LWlmPVwiaW5kZXggPiAwXCI+Lzwvc3Bhbj5cblx0XHRcdFxuXHRcdFx0PHAtYnV0dG9uIEBjbGljaz1cIm5hdmlnYXRlKGJyZWFkY3J1bWIpXCIgOmRpc2FibGVkPVwiY3VycmVudERpcmVjdG9yeSA9PSBicmVhZGNydW1iLmlkXCI+XG5cdFx0XHRcdDxmYS1pY29uIHYtaWY9XCJpbmRleCA9PSAwXCIgOmljb249XCJbJ2ZhcycsICdob21lJ11cIiBjbGFzcz1cImZhLWZ3IG1yLTFcIj48L2ZhLWljb24+XG5cdFx0XHRcdHt7IGJyZWFkY3J1bWIubmFtZSB9fVxuXHRcdFx0PC9wLWJ1dHRvbj5cblx0XHQ8L3RlbXBsYXRlPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnZmlsZS1tYW5hZ2VyLWJyZWFkY3J1bWItYWN0aW9uJyxcblxuXHRcdG1peGluczogW1xuXHRcdFx0cmVxdWlyZSgnLi4vLi4vLi4vbWl4aW5zL2ZpbGVicm93c2VyJykuZGVmYXVsdCxcblx0XHRdLFxuXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdG5hdigpIHtcblx0XHRcdFx0bGV0IGJyZWFkY3J1bWJzID0gWy4uLnRoaXMuYnJlYWRjcnVtYnNdXG5cblx0XHRcdFx0aWYgKCEgdGhpcy5yb290RGlyZWN0b3J5KSB7XG5cdFx0XHRcdFx0YnJlYWRjcnVtYnMudW5zaGlmdCh7IGlkOiBudWxsLCBuYW1lOiAnUm9vdCcgfSlcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBicmVhZGNydW1ic1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8cC1kcm9wZG93bj5cblx0XHQ8ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTFcIiA6aWNvbj1cIlsnZmFzJywgb3B0aW9uc1tkaXNwbGF5XV1cIj48L2ZhLWljb24+XG5cdFx0e3sgZGlzcGxheSB8IGNhcGl0YWxpemUgIH19XG5cdFx0XG5cdFx0PHRlbXBsYXRlIHNsb3Q9XCJvcHRpb25zXCI+XG5cdFx0XHQ8cC1kcm9wZG93bi1pdGVtIHYtZm9yPVwiKGljb24sIGtleSkgaW4gb3B0aW9uc1wiIGNsYXNzPVwidy00OFwiIDprZXk9XCJrZXlcIiBAY2xpY2sucHJldmVudD1cInNldERpc3BsYXkoa2V5KVwiPlxuXHRcdFx0XHQ8ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTFcIiA6aWNvbj1cIlsnZmFzJywgaWNvbl1cIj48L2ZhLWljb24+XG5cdFx0XHRcdHt7IGtleSB8IGNhcGl0YWxpemUgfX1cblx0XHRcdDwvcC1kcm9wZG93bi1pdGVtPlxuXHRcdDwvdGVtcGxhdGU+XG5cdDwvcC1kcm9wZG93bj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnZmlsZS1tYW5hZ2VyLWRpc3BsYXktYWN0aW9uJyxcblx0XHRcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdCdldmVyeXRoaW5nJzogJ2FzdGVyaXNrJyxcblx0XHRcdFx0XHQnaW1hZ2VzJzogJ2ltYWdlcycsXG5cdFx0XHRcdFx0J3ZpZGVvcyc6ICd2aWRlbycsXG5cdFx0XHRcdFx0J2F1ZGlvJzogJ3ZvbHVtZS11cCcsXG5cdFx0XHRcdFx0J2RvY3VtZW50cyc6ICdmaWxlLWFsdCcsXG5cdFx0XHRcdH0sXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHQuLi5tYXBHZXR0ZXJzKHtcblx0XHRcdFx0ZGlzcGxheTogJ2ZpbGVtYW5hZ2VyL2dldERpc3BsYXknLFx0XHRcdFxuXHRcdFx0fSlcblx0XHR9LFxuXG5cdFx0ZmlsdGVyczoge1xuXHRcdFx0Y2FwaXRhbGl6ZSh2YWx1ZSkge1xuXHRcdFx0XHRyZXR1cm4gXy5zdGFydENhc2UodmFsdWUpXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHRkaXNwbGF5KHZhbHVlKSB7XG5cdFx0XHRcdHRoaXMuZmV0Y2hGaWxlc0FuZERpcmVjdG9yaWVzKClcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XG5cdFx0XHRcdGZldGNoRmlsZXNBbmREaXJlY3RvcmllczogJ2ZpbGVtYW5hZ2VyL2ZldGNoRmlsZXNBbmREaXJlY3RvcmllcycsXG5cdFx0XHRcdHNldERpc3BsYXk6ICdmaWxlbWFuYWdlci9zZXREaXNwbGF5Jyxcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJnYWxsZXJ5LXRleHRcIj5cblx0XHQ8c3BhbiB2LWlmPVwiaXNFZGl0aW5nXCI+XG5cdFx0XHQ8aW5wdXRcblx0XHRcdFx0cmVmPVwiZWRpdFwiXG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0Y2xhc3M9XCJmb3JtX19jb250cm9sIGZvcm1fX2NvbnRyb2wtLXNtIHRleHQtY2VudGVyXCJcblx0XHRcdFx0di1tb2RlbD1cImZpbGUubmFtZVwiXG5cdFx0XHRcdEBibHVyPVwicmV2ZXJ0XCJcblx0XHRcdFx0QGtleXVwLmVudGVyPVwidXBkYXRlXCJcblx0XHRcdFx0QGtleXVwLmVzYz1cInJldmVydFwiLz5cblx0XHQ8L3NwYW4+XG5cblx0XHQ8c3BhbiB2LWVsc2UgY2xhc3M9XCJ0cnVuY2F0ZVwiIEBkYmxjbGljaz1cImVkaXRcIj57eyBuYW1lIH19PC9zcGFuPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0bmFtZTogdGhpcy5maWxlLm5hbWUsXG5cdFx0XHRcdGlzRWRpdGluZzogZmFsc2Vcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0cHJvcHM6IHtcblx0XHRcdGZpbGU6IHtcblx0XHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxuXHRcdFx0fSxcblxuXHRcdFx0ZW5kcG9pbnQ6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHRlZGl0KCkge1xuXHRcdFx0XHR0aGlzLmlzRWRpdGluZyA9IHRydWVcblxuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy4kcmVmcy5lZGl0LmZvY3VzKClcblx0XHRcdFx0XHR0aGlzLiRyZWZzLmVkaXQuc2VsZWN0KClcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cblx0XHRcdHJldmVydCgpIHtcblx0XHRcdFx0dGhpcy5maWxlLm5hbWUgPSB0aGlzLm5hbWVcblx0XHRcdFx0dGhpcy5pc0VkaXRpbmcgPSBmYWxzZVxuXHRcdFx0fSxcblxuXHRcdFx0dXBkYXRlKGRhdGEpIHtcblx0XHRcdFx0aWYgKHRoaXMuaXNFZGl0aW5nKSB7XG5cdFx0XHRcdCAgICB0aGlzLmlzRWRpdGluZyA9IGZhbHNlXG5cblx0XHRcdFx0XHRpZiAodGhpcy5maWxlLm5hbWUgPT09ICcnKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnJldmVydCgpXG5cblx0XHRcdFx0XHQgICAgdG9hc3QoJ05hbWUgaXMgcmVxdWlyZWQgZm9yIHVwZGF0aW5nLicsICd3YXJuaW5nJylcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YXhpb3MucGF0Y2godGhpcy5lbmRwb2ludCwgeyBuYW1lOiB0aGlzLmZpbGUubmFtZSB9KVxuXHRcdFx0XHRcdFx0XHQudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLm5hbWUgICAgICA9IHJlc3BvbnNlLmRhdGEuZGF0YS5uYW1lXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5pc0VkaXRpbmcgPSBmYWxzZVxuXG5cdFx0XHRcdFx0XHRcdFx0dG9hc3QoJ05hbWUgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQhJywgJ3N1Y2Nlc3MnKVxuXHRcdFx0XHRcdFx0XHR9KS5jYXRjaCgoZXJyb3IpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnJldmVydCgpXG5cblx0XHRcdFx0XHRcdFx0XHR0b2FzdChlcnJvci5tZXNzYWdlLCAnZGFuZ2VyJylcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHR9ICAgIFxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJzZWFyY2hcIiBjbGFzcz1cImZvcm0taW5wdXRcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaC4uLlwiIHYtbW9kZWw9XCJzZWFyY2hcIj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnZmlsZS1tYW5hZ2VyLXNlYXJjaC1hY3Rpb24nLFxuXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHNlYXJjaDoge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLmZpbGVtYW5hZ2VyLnNlYXJjaFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBcdHRoaXMuc2V0U2VhcmNoKHZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblx0XHR9LFxuXG5cdFx0d2F0Y2g6IHtcblx0XHRcdHNlYXJjaCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hGaWxlc0FuZERpcmVjdG9yaWVzKClcbiAgICAgICAgICAgIH0sXG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC4uLm1hcEFjdGlvbnMoe1xuXHRcdFx0XHRmZXRjaEZpbGVzQW5kRGlyZWN0b3JpZXM6ICdmaWxlbWFuYWdlci9mZXRjaEZpbGVzQW5kRGlyZWN0b3JpZXMnLFxuXHRcdFx0XHRzZXRTZWFyY2g6ICdmaWxlbWFuYWdlci9zZXRTZWFyY2gnXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8cC1kcm9wZG93bj5cblx0XHQ8ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTFcIiA6aWNvbj1cIlsnZmFzJywgc29ydEljb24oc29ydCldXCI+PC9mYS1pY29uPlxuXHRcdHt7IG9wdGlvbnNbc29ydF0gIH19XG5cdFx0XG5cdFx0PHRlbXBsYXRlIHNsb3Q9XCJvcHRpb25zXCI+XG5cdFx0XHQ8cC1kcm9wZG93bi1pdGVtIHYtZm9yPVwiKHZhbHVlLCBrZXkpIGluIG9wdGlvbnNcIiBjbGFzcz1cInctNDhcIiA6a2V5PVwia2V5XCIgQGNsaWNrLnByZXZlbnQ9XCJzb3J0Qnkoa2V5KVwiPlxuXHRcdFx0XHQ8ZmEtaWNvbiBjbGFzcz1cImZhLWZ3IG1yLTFcIiA6aWNvbj1cIlsnZmFzJywgc29ydEljb24oa2V5KV1cIj48L2ZhLWljb24+XG5cdFx0XHRcdHt7IHZhbHVlIH19XG5cdFx0XHQ8L3AtZHJvcGRvd24taXRlbT5cblx0XHQ8L3RlbXBsYXRlPlxuXHQ8L3AtZHJvcGRvd24+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ2ZpbGUtbWFuYWdlci1zb3J0LWFjdGlvbicsXG5cdFx0XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdG9wdGlvbnM6IHtcblx0XHRcdFx0XHRuYW1lOiAnTmFtZScsXG5cdFx0XHRcdFx0Ynl0ZXM6ICdGaWxlc2l6ZScsXG5cdFx0XHRcdFx0dXBkYXRlZF9hdDogJ0xhc3QgTW9kaWZpZWQnXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdC4uLm1hcEdldHRlcnMoe1xuXHRcdFx0XHRkaXJlY3Rpb246ICdmaWxlbWFuYWdlci9nZXREaXJlY3Rpb24nLFxuXHRcdFx0XHRzb3J0OiAnZmlsZW1hbmFnZXIvZ2V0U29ydCcsXHRcdFx0XHRcblx0XHRcdH0pXG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHRkaXJlY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0dGhpcy5mZXRjaEZpbGVzQW5kRGlyZWN0b3JpZXMoKVxuXHRcdFx0fSxcblxuXHRcdFx0c29ydCh2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLmZldGNoRmlsZXNBbmREaXJlY3RvcmllcygpXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC4uLm1hcEFjdGlvbnMoe1xuXHRcdFx0XHRmZXRjaEZpbGVzQW5kRGlyZWN0b3JpZXM6ICdmaWxlbWFuYWdlci9mZXRjaEZpbGVzQW5kRGlyZWN0b3JpZXMnLFxuXHRcdFx0XHR0b2dnbGVEaXJlY3Rpb246ICdmaWxlbWFuYWdlci90b2dnbGVEaXJlY3Rpb24nLFxuXHRcdFx0XHRzZXREaXJlY3Rpb246ICdmaWxlbWFuYWdlci9zZXREaXJlY3Rpb24nLFxuXHRcdFx0XHRzZXRTb3J0OiAnZmlsZW1hbmFnZXIvc2V0U29ydCcsIFxuXHRcdFx0fSksXG5cblx0XHRcdHNvcnRCeShrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3J0ID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVEaXJlY3Rpb24oKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U29ydChrZXkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uKCdhc2MnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNvcnRJY29uKGtleSkge1xuXHRcdFx0XHRpZiAodGhpcy5zb3J0ID09PSBrZXkpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdhc2MnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ3NvcnQtYW1vdW50LWRvd24nXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAnc29ydC1hbW91bnQtdXAnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuICdiYXJzJ1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwiaW5saW5lLWZsZXhcIj5cblx0XHQ8cC1idXR0b24gQGNsaWNrLnByZXZlbnQ9XCJ0b2dnbGVWaWV3KCdsaXN0JylcIiA6ZGlzYWJsZWQ9XCJ2aWV3ID09ICdsaXN0J1wiIGNsYXNzPVwicm91bmRlZC1sIHJvdW5kZWQtci1ub25lXCI+XG5cdFx0XHQ8ZmEtaWNvbiBjbGFzcz1cImZhLWZ3XCIgOmljb249XCJbJ2ZhcycsICdiYXJzJ11cIj48L2ZhLWljb24+XG5cdFx0PC9wLWJ1dHRvbj5cblxuXHRcdDxwLWJ1dHRvbiBAY2xpY2sucHJldmVudD1cInRvZ2dsZVZpZXcoJ2dyaWQnKVwiIDpkaXNhYmxlZD1cInZpZXcgPT0gJ2dyaWQnXCIgY2xhc3M9XCJyb3VuZGVkLXIgcm91bmRlZC1sLW5vbmVcIj5cblx0XHRcdDxmYS1pY29uIGNsYXNzPVwiZmEtZndcIiA6aWNvbj1cIlsnZmFzJywgJ3RoLWxhcmdlJ11cIj48L2ZhLWljb24+XG5cdFx0PC9wLWJ1dHRvbj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ2ZpbGUtbWFuYWdlci12aWV3LWFjdGlvbicsXG5cblx0XHRjb21wdXRlZDoge1xuXHRcdFx0Li4ubWFwR2V0dGVycyh7XG5cdFx0XHRcdHZpZXc6ICdmaWxlbWFuYWdlci9nZXRWaWV3JyxcdFx0XHRcdFxuXHRcdFx0fSlcblx0XHR9LFxuXG5cdFx0d2F0Y2g6IHtcblx0XHRcdHZpZXcodmFsdWUpIHtcblx0XHRcdFx0dGhpcy5mZXRjaEZpbGVzQW5kRGlyZWN0b3JpZXMoKVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcblx0XHRcdFx0ZmV0Y2hGaWxlc0FuZERpcmVjdG9yaWVzOiAnZmlsZW1hbmFnZXIvZmV0Y2hGaWxlc0FuZERpcmVjdG9yaWVzJyxcblx0XHRcdFx0dG9nZ2xlVmlldzogJ2ZpbGVtYW5hZ2VyL3RvZ2dsZVZpZXcnLFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cImdhbGxlcnktd3JhcHBlclwiPlxuXHRcdDxkaXZcblx0XHRcdGNsYXNzPVwiZ2FsbGVyeS1pdGVtXCJcblx0XHRcdDpjbGFzcz1cInsgJ2dhbGxlcnktaXRlbS0tc2VsZWN0ZWQgc2VsZWN0YWJsZS0tc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLCAnc2VsZWN0YWJsZSc6IGlzU2VsZWN0YWJsZSB9XCJcblx0XHRcdDpkYXRhLWRyb3B6b25lPVwiZGlyZWN0b3J5LmlkXCJcblx0XHRcdDpkcmFnZ2FibGU9XCJpc0RyYWdnYWJsZVwiXG5cdFx0XHRAZGJsY2xpY2s9XCIkZW1pdCgnZGJsY2xpY2snKVwiPlxuXG5cdFx0XHQ8cC1pbWdcblx0XHRcdFx0c3JjPVwiL2ltZy9mb2xkZXIuc3ZnXCJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcj1cIndoaXRlXCJcblx0XHRcdFx0Y2xhc3M9XCJnYWxsZXJ5LWltYWdlXCJcblx0XHRcdFx0OmNsYXNzPVwieyAnZHJhZ2dhYmxlLS1kcm9wem9uZSc6IGlzRHJvcHpvbmUgfVwiXG5cdFx0XHRcdDp3aWR0aD1cIjE1MFwiXG5cdFx0XHRcdDpoZWlnaHQ9XCIxNTBcIlxuXHRcdFx0XHQ6YWx0PVwiZGlyZWN0b3J5Lm5hbWVcIlxuXHRcdFx0XHQ6ZHJhZ2dhYmxlPVwiZmFsc2VcIlxuXHRcdFx0XHRhc3BlY3QtcmF0aW8+XG5cdFx0XHQ8L3AtaW1nPlxuXHRcdDwvZGl2PlxuXG5cdFx0PHF1aWNrLWVkaXRcblx0XHRcdDpmaWxlPVwiZGlyZWN0b3J5XCJcblx0XHRcdDplbmRwb2ludD1cIicvYXBpL2RpcmVjdG9yaWVzLycgKyBkaXJlY3RvcnkuaWRcIj5cblx0XHQ8L3F1aWNrLWVkaXQ+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1zdWJ0aXRsZVwiPlxuXHRcdFx0PHNwYW4gdi10ZXh0PVwiZmlsZUNvdW50XCI+PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdmaWxlLW1hbmFnZXItZGlyZWN0b3J5JyxcblxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdCdxdWljay1lZGl0JzogcmVxdWlyZSgnLi4vQWN0aW9ucy9RdWlja0VkaXQudnVlJykuZGVmYXVsdFxuXHRcdH0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGRpcmVjdG9yeToge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzRHJvcHpvbmU6IHtcbiAgICAgICAgICAgIFx0dHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIFx0ZGVmYXVsdDogZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzRHJhZ2dhYmxlOiB7XG4gICAgICAgICAgICBcdHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBcdGRlZmF1bHQ6IHRydWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzU2VsZWN0YWJsZToge1xuICAgICAgICAgICAgXHR0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgXHRkZWZhdWx0OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcblx0XHRcdC4uLm1hcEdldHRlcnMoe1xuXHRcdFx0XHRzZWxlY3RlZDogJ2ZpbGVtYW5hZ2VyL2dldFNlbGVjdGVkRGlyZWN0b3JpZXMnLFxuXHRcdFx0fSksXG5cblx0XHRcdGZpbGVDb3VudCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuZGlyZWN0b3J5LmZpbGVzX2NvdW50ICsgJyBmaWxlcydcblx0XHRcdH0sXG5cblx0XHRcdGlzU2VsZWN0ZWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uaW5jbHVkZXModGhpcy5zZWxlY3RlZCwgdGhpcy5kaXJlY3RvcnkuaWQpXG4gICAgICAgICAgICB9XG5cdFx0fVxuXHR9XG5cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiA6Y2xhc3M9XCJbIHZpZXcgPT0gJ2dyaWQnID8gJ2dhbGxlcnktd3JhcHBlcicgOiAnZ2FsbGVyeS13cmFwcGVyLS1yb3cnIF1cIj5cblx0XHQ8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImdhbGxlcnktaXRlbVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdnYWxsZXJ5LWl0ZW0tLXNlbGVjdGVkIHNlbGVjdGFibGUtLXNlbGVjdGVkJzogaXNTZWxlY3RlZCwgJ3NlbGVjdGFibGUnOiBpc1NlbGVjdGFibGUgfVwiXG4gICAgICAgICAgICBAZGJsY2xpY2s9XCIkZW1pdCgnZGJsY2xpY2snKVwiXG4gICAgICAgICAgICA6ZGF0YS1zZWxlY3Rpb249XCJmaWxlLmlkXCJcbiAgICAgICAgICAgIDpkcmFnZ2FibGU9XCJpc0RyYWdnYWJsZVwiPlxuXG5cdFx0XHQ8cC1pbWdcblx0XHRcdFx0c3JjPVwiL2ltZy9pbWFnZS1sYXJnZS5zdmdcIlxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yPVwid2hpdGVcIlxuXHRcdFx0XHRjbGFzcz1cImdhbGxlcnktaW1hZ2VcIlxuXHRcdFx0XHQ6bGF6eVNyYz1cImZpbGVTcmNcIlxuXHRcdFx0XHQ6d2lkdGg9XCIxMDBcIlxuXHRcdFx0XHQ6aGVpZ2h0PVwiMTAwXCJcblx0XHRcdFx0OmFsdD1cImZpbGUuZGVzY3JpcHRpb25cIlxuXHRcdFx0XHQ6ZHJhZ2dhYmxlPVwiZmFsc2VcIj5cblx0XHRcdDwvcC1pbWc+XG5cdFx0PC9kaXY+XG5cblx0XHQ8cXVpY2stZWRpdFxuXHRcdFx0OmZpbGU9XCJmaWxlXCJcblx0XHRcdDplbmRwb2ludD1cIicvYXBpL2ZpbGVzLycgKyBmaWxlLmlkXCI+XG5cdFx0PC9xdWljay1lZGl0PlxuXG5cdFx0PGRpdiBjbGFzcz1cImdhbGxlcnktc3VidGl0bGVcIj5cblx0XHRcdDxzcGFuPnt7IGZpbGUuYnl0ZXMgfCBieXRlcyB9fTwvc3Bhbj5cblx0XHRcdDxzcGFuPnt7IGZpbGUuZXh0ZW5zaW9uIH19PC9zcGFuPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiBjbGFzcz1cImdhbGxlcnktdGV4dFwiIHYtaWY9XCJ2aWV3ID09ICdsaXN0J1wiPlxuXHRcdFx0e3sgZmlsZS5taW1ldHlwZSB9fVxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiBjbGFzcz1cImdhbGxlcnktdGV4dFwiIHYtaWY9XCJ2aWV3ID09ICdsaXN0J1wiPlxuXHRcdFx0e3sgJG1vbWVudChmaWxlLnVwZGF0ZWRfYXQpLmZvcm1hdCgnTU1NIERvLCBZWVlZJykgfX1cblx0XHQ8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ2ZpbGUtbWFuYWdlci1maWxlJyxcblxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdCdxdWljay1lZGl0JzogcmVxdWlyZSgnLi4vQWN0aW9ucy9RdWlja0VkaXQudnVlJykuZGVmYXVsdFxuXHRcdH0sXG5cblx0XHRtaXhpbnM6IFtcblx0XHQgICAgcmVxdWlyZSgnLi4vLi4vLi4vbWl4aW5zL2ZpbGVoZWxwZXInKS5kZWZhdWx0XG5cdFx0XSxcblxuXHRcdHByb3BzOiB7XG5cdFx0XHRmaWxlOiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHR9LFxuXG5cdFx0XHRpc0RyYWdnYWJsZToge1xuICAgICAgICAgICAgXHR0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgXHRkZWZhdWx0OiB0cnVlXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc1NlbGVjdGFibGU6IHtcbiAgICAgICAgICAgIFx0dHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIFx0ZGVmYXVsdDogdHJ1ZVxuICAgICAgICAgICAgfVxuXHRcdH0sXG5cblx0XHRjb21wdXRlZDoge1xuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6ICdmaWxlbWFuYWdlci9nZXRTZWxlY3RlZEZpbGVzJyxcbiAgICAgICAgICAgICAgICB2aWV3OiAgICAgJ2ZpbGVtYW5hZ2VyL2dldFZpZXcnLFxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIGlzU2VsZWN0ZWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF8uaW5jbHVkZXModGhpcy5zZWxlY3RlZCwgdGhpcy5maWxlLmlkKVxuICAgICAgICAgICAgfSxcblxuXHRcdFx0ZmlsZVNyYygpIHtcblx0XHRcdFx0c3dpdGNoKHRoaXMuZmlsZS50eXBlKSB7XG5cdFx0XHRcdFx0Y2FzZSAnaW1hZ2UnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIGAke3RoaXMuZmlsZS51cmx9P3c9MTAwJmg9MTAwJmZpdD1jcm9wJnQ9JHt0aGlzLiRtb21lbnQudXRjKHRoaXMuZmlsZS51cGRhdGVkX2F0KX1gXG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiBgL2ltZy8ke3RoaXMuZmlsZS50eXBlfS1sYXJnZS5zdmdgXG5cdFx0XHRcdH1cblx0XHRcdH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cImZpbGUtbWFuYWdlcl9fdXBsb2FkcyBjYXJkXCIgOmNsYXNzPVwiW3Zpc2libGUgPyAnZmlsZS1tYW5hZ2VyX191cGxvYWRzLS12aXNpYmxlJyA6ICcnXVwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2hlYWRlciBmbGV4IGl0ZW1zLWNlbnRlciBiZy1ibGFjayBweC01IHB5LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fbGFiZWwgdGV4dC13aGl0ZSBtYi0wXCI+XG4gICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJ1cGxvYWRQcm9ncmVzcyAhPSAxMDBcIj5cbiAgICAgICAgICAgICAgICAgIFVwbG9hZGluZzoge3t1cGxvYWRQcm9ncmVzcy50b0ZpeGVkKDApfX0lXG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgVXBsb2Fkc1xuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGEgaHJlZj1cIiNcIiBAY2xpY2sucHJldmVudD1cInRvZ2dsZU1pbmltaXplXCIgY2xhc3M9XCJtbC1hdXRvIG1yLTVcIj5cbiAgICAgICAgICAgICAgPGZhLWljb24gaWNvbj1cImV4cGFuZFwiIGNsYXNzPVwidGV4dC13aGl0ZVwiIHYtaWY9XCJtaW5pbWl6ZWRcIj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seVwiPkV4cGFuZDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICA8ZmEtaWNvbiBpY29uPVwibWludXNcIiBjbGFzcz1cInRleHQtd2hpdGVcIiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5NaW5pbWl6ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPVwiI1wiIEBjbGljay5wcmV2ZW50PVwic2V0VXBsb2Fkc1Zpc2libGUoZmFsc2UpXCI+XG4gICAgICAgICAgICAgIDxmYS1pY29uIGljb249XCJ0aW1lc1wiIGNsYXNzPVwidGV4dC13aGl0ZVwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+Q2xvc2U8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZmEtaWNvbj5cbiAgICAgICAgICA8L2E+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW1hbmFnZXJfX3VwbG9hZHMtYm9keSBjYXJkX19ib2R5IHB4LTQgcHktMiBvdmVyZmxvdy15LWF1dG9cIiA6Y2xhc3M9XCJbbWluaW1pemVkID8gJ2hpZGRlbicgOiAnJ11cIj5cbiAgICAgICAgICA8ZmlsZS1wcm9ncmVzcy1yb3cgdi1mb3I9XCIoZmlsZSwgaW5kZXgpIGluIGZpbGVVcGxvYWRzXCIgOmZpbGU9XCJmaWxlXCIgOmtleT1cIidmaWxlLScgKyBpbmRleFwiIDpzdGF0dXM9XCJmaWxlLnN0YXR1c1wiIHYtaWY9XCJmaWxlLnVwbG9hZFwiPlxuICAgICAgICAgIDwvZmlsZS1wcm9ncmVzcy1yb3c+XG4gICAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcbiAgaW1wb3J0IEZpbGVQcm9ncmVzc1JvdyBmcm9tICcuL0ZpbGVQcm9ncmVzc1Jvdy52dWUnXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnZmlsZS1wcm9ncmVzcycsXG4gICAgY29tcG9uZW50czoge1xuICAgICAgJ2ZpbGUtcHJvZ3Jlc3Mtcm93JzogRmlsZVByb2dyZXNzUm93LFxuICAgIH0sXG4gICAgXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAuLi5tYXBHZXR0ZXJzKHtcbiAgICAgICAgICAgIHVwbG9hZFByb2dyZXNzOiAnZmlsZW1hbmFnZXIvZ2V0VXBsb2FkUHJvZ3Jlc3MnLFxuICAgICAgICAgICAgbWluaW1pemVkOiAnZmlsZW1hbmFnZXIvZ2V0VXBsb2Fkc01pbmltaXplZCcsXG4gICAgICAgICAgICBmaWxlVXBsb2FkczogJ2ZpbGVtYW5hZ2VyL2dldEZpbGVVcGxvYWRzJyxcbiAgICAgICAgICAgIHZpc2libGU6ICdmaWxlbWFuYWdlci9nZXRVcGxvYWRzVmlzaWJsZSdcbiAgICAgICAgfSlcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgLi4ubWFwQWN0aW9ucyh7XG4gICAgICAgICdzZXRVcGxvYWRzTWluaW1pemVkJzogJ2ZpbGVtYW5hZ2VyL3NldFVwbG9hZHNNaW5pbWl6ZWQnLFxuICAgICAgICAnc2V0VXBsb2Fkc1Zpc2libGUnOiAnZmlsZW1hbmFnZXIvc2V0VXBsb2Fkc1Zpc2libGUnXG4gICAgICB9KSxcblxuICAgICAgdG9nZ2xlTWluaW1pemUoKSB7XG4gICAgICAgIHRoaXMuc2V0VXBsb2Fkc01pbmltaXplZCghdGhpcy5taW5pbWl6ZWQpXG4gICAgICB9LFxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwiZmlsZS1wcm9ncmVzcyBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNtXCI+XG4gICAgPGRpdiBjbGFzcz1cImZpbGUtcHJvZ3Jlc3NfX2ljb24gcHItMVwiPlxuICAgICAgPHAtaW1nXG4gICAgICAgICAgOnNyYz1cIicvaW1nLycgKyB0eXBlICsgJy1sYXJnZS5zdmcnXCJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yPVwiI2ZmZmZmZlwiXG4gICAgICAgICAgOndpZHRoPVwiMjVcIlxuICAgICAgICAgIDpoZWlnaHQ9XCIyNVwiXG4gICAgICAgICAgY2xhc3M9XCJnYWxsZXJ5LWltYWdlXCI+XG4gICAgICA8L3AtaW1nPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJmaWxlLXByb2dyZXNzX19uYW1lIHBsLTIgcHItMyB0cnVuY2F0ZSBmbGV4LTFcIj57e2ZpbGUubmFtZX19PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZpbGUtcHJvZ3Jlc3NfX2JhciBtbC1hdXRvXCIgdi1pZj1cImZpbGUudXBsb2FkLnByb2dyZXNzICE9IDEwMCAmJiBzdGF0dXMgIT0gJ2Vycm9yJ1wiPlxuICAgICAgPGRpdiBjbGFzcz1cInNoYWRvdyB3LWZ1bGwgYmctZ3JleS1saWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmctc3VjY2Vzcy00MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMVwiIDpzdHlsZT1cIid3aWR0aDogJyArIGZpbGUudXBsb2FkLnByb2dyZXNzICsgJyUnXCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImZpbGUtcHJvZ3Jlc3NfX3N0YXR1cyBtbC0yXCI+XG4gICAgICA8ZmEtaWNvbiBjbGFzcz1cInRleHQtc3VjY2Vzcy02MDBcIiA6aWNvbj1cIlsnZmFzJywgJ2NoZWNrLWNpcmNsZSddXCIgdi1pZj1cInN0YXR1cyA9PSAnc3VjY2VzcydcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+U3VjY2Vzczwvc3Bhbj5cbiAgICAgIDwvZmEtaWNvbj5cbiAgICAgIDxwLXRvb2x0aXAgY2xhc3M9XCJjdXJzb3ItcG9pbnRlclwiIHYtZWxzZS1pZj1cInN0YXR1cyA9PSAnZXJyb3InXCIgcGxhY2VtZW50PVwibGVmdFwiPlxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPGZhLWljb24gY2xhc3M9XCJ0ZXh0LXByaW1hcnktNjAwXCIgOmljb249XCJbJ2ZhcycsICd0aW1lcy1jaXJjbGUnXVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+RXJyb3I8L3NwYW4+XG4gICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImNvbnRlbnRcIj5cbiAgICAgICAgICB7e2ZpbGUuZXJyb3J9fVxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9wLXRvb2x0aXA+XG4gICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3NwaW5uZXInXVwiIHYtZWxzZSBwdWxzZT5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VXBsb2FkaW5nLi4uPC9zcGFuPlxuICAgICAgPC9mYS1pY29uPiBcbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ2ZpbGUtcHJvZ3Jlc3Mtcm93JyxcblxuICAgIHByb3BzOiB7XG4gICAgICBmaWxlOiB7XG4gICAgICAgIHR5cGU6IEZpbGVcbiAgICAgIH0sXG4gICAgICBzdGF0dXM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICB0eXBlKCkge1xuICAgICAgICBsZXQgZnR5cGUgPSB0aGlzLmZpbGUudHlwZS5zcGxpdCgnLycpWzBdXG4gICAgICAgIGlmIChmdHlwZSA9PSAnYXBwbGljYXRpb24nIHx8IGZ0eXBlID09ICd0ZXh0JyB8fCBmdHlwZSA9PSAnJykgeyBmdHlwZSA9ICdkb2N1bWVudCd9XG4gICAgICAgIHJldHVybiBmdHlwZVxuICAgICAgfVxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwiY2FyZCBoLWZ1bGxcIj5cblx0XHQ8ZGl2IHYtaWY9XCJoYXNIZWFkZXJcIiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcC0zXCI+XG5cdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwiJGVtaXQoJ3JlamVjdCcpXCIgdGhlbWU9XCJ3YXJuaW5nXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICd0aW1lcyddXCIgY2xhc3M9XCJtci0yXCI+PC9mYS1pY29uPiBSZWplY3Q8L3AtYnV0dG9uPlxuXHRcdFx0PHAtYnV0dG9uIEBjbGljaz1cIiRlbWl0KCdhY2NlcHQnKVwiIHRoZW1lPVwiaW5mb1wiPkFjY2VwdCA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NoZWNrJ11cIiBjbGFzcz1cIm1sLTJcIj48L2ZhLWljb24+PC9wLWJ1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgdi1pZj1cInNlbGVjdGlvbi5sZW5ndGggPiAwXCI+XG5cdFx0XHQ8cC1zb3J0YWJsZS1saXN0IHYtbW9kZWw9XCJzZWxlY3Rpb25cIiBjbGFzcz1cInNvcnRhYmxlLWxpc3RcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInctZnVsbCBwLTNcIj5cblx0XHRcdFx0XHQ8cC1zb3J0YWJsZS1pdGVtIHYtZm9yPVwiZmlsZSBpbiBzZWxlY3Rpb25cIiA6a2V5PVwiZmlsZS5pZFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHB5LTJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInctMS8xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwLXNvcnRhYmxlLWhhbmRsZSBjbGFzcz1cImN1cnNvci1tb3ZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZmEtaWNvbiBpY29uPVwiZWxsaXBzaXMtdlwiIGNsYXNzPVwiaGFuZGxlIGZhLWZ3IHRleHQtZ3JheS00MDBcIj48L2ZhLWljb24+XG5cdFx0XHRcdFx0XHRcdFx0PC9wLXNvcnRhYmxlLWhhbmRsZT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTMvMTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cC1pbWcgdi1pZj1cImZpbGUudHlwZSA9PSAnaW1hZ2UnXCIgOnNyYz1cImZpbGUudXJsICsgJz93PTUwJmg9NTAmZml0PWNyb3AnXCIgYmFja2dyb3VuZC1jb2xvcj1cIndoaXRlXCIgOndpZHRoPVwiNTBcIiA6aGVpZ2h0PVwiNTBcIj48L3AtaW1nPlxuXHRcdFx0XHRcdFx0XHRcdDxwLWltZyB2LWVsc2UgOnNyYz1cIicvaW1nLycgKyBmaWxlLnR5cGUgKyAnLWxhcmdlLnN2ZydcIiBiYWNrZ3JvdW5kLWNvbG9yPVwid2hpdGVcIiA6d2lkdGg9XCI1MFwiIDpoZWlnaHQ9XCI1MFwiPjwvcC1pbWc+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy02LzEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj57eyBmaWxlLm5hbWUgfX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTIvMTIgdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwLWJ1dHRvbiBAY2xpY2s9XCJyZW1vdmUoZmlsZS5pZClcIiB0aGVtZT1cImRhbmdlclwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndHJhc2gnXVwiPjwvZmEtaWNvbj48L3AtYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvcC1zb3J0YWJsZS1pdGVtPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvcC1zb3J0YWJsZS1saXN0PlxuXG5cdFx0XHQ8ZGl2IHYtaWY9XCJhZGRMaW1pdCA8PSAwXCIgY2xhc3M9XCJ0ZXh0LXNtIGl0YWxpYyB0ZXh0LWRhbmdlci02MDAgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0RmlsZSBsaW1pdCByZWFjaGVkXG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgdi1lbHNlIGNsYXNzPVwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNXhsIHRleHQtZ3JheS0zMDBcIj5cblx0XHRcdDxmYS1pY29uIDppY29uPVwiWydmYXInLCAnY29weSddXCIgY2xhc3M9XCJmYS1mdyBmYS0zeFwiPjwvZmEtaWNvbj5cblx0XHRcdDxzcGFuIGNsYXNzPVwidGV4dC1sZyBweS0yIHRleHQtZ3JheS01MDBcIj5TZWxlY3Qgc29tZSBmaWxlcy4uLjwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHNlbGVjdGlvbjoge1xuXHRcdFx0XHRnZXQoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWVcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRzZXQodmFsdWUpIHtcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRhZGRMaW1pdCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubGltaXQgLSB0aGlzLnNlbGVjdGlvbi5sZW5ndGhcblx0XHRcdH0sXG5cdFx0fSxcblxuXHRcdHByb3BzOiB7XG5cdFx0XHR2YWx1ZToge1xuXHRcdFx0XHR0eXBlOiBBcnJheSxcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcblx0XHRcdH0sXG5cblx0XHRcdGxpbWl0OiB7XG5cdFx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDogSW5maW5pdHlcblx0XHRcdH0sXG5cblx0XHRcdGhhc0hlYWRlcjoge1xuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHJlbW92ZShpZCkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGlvbiA9IF8uZmlsdGVyKHRoaXMuc2VsZWN0aW9uLCAoaXRlbSkgPT4geyByZXR1cm4gaXRlbS5pZCAhPT0gaWQgfSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiZmlsZS11cGxvYWRlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbWFuYWdlcl9fZHJvcHpvbmVcIiA6Y2xhc3M9XCJbZHJvcHpvbmVWaXNpYmxlID8gJ2ZpbGUtbWFuYWdlcl9fZHJvcHpvbmUtLXZpc2libGUnIDogJyddXCIgQGNsaWNrLnNlbGY9XCJzZXREcm9wem9uZVZpc2libGUoZmFsc2UpXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZpbGUtbWFuYWdlcl9fcHJvbXB0XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLW1hbmFnZXJfX3Byb21wdC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICA8ZmEtaWNvbiBpY29uPVwidXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+VXBsb2FkPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgPC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgPGgzPkRyYWcgZmlsZXMgaGVyZSB0byB1cGxvYWQ8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8dnVlLWRyb3B6b25lIHJlZj1cImRyb3B6b25lX2VsZW1lbnRcIiBpZD1cImRyb3B6b25lXCIgXG4gICAgICAgICAgICAgIDpvcHRpb25zPVwiZHJvcHpvbmVPcHRpb25zXCIgXG4gICAgICAgICAgICAgIEB2ZHJvcHpvbmUtbW91bnRlZD1cImNvbmZpZ3VyZURaXCJcbiAgICAgICAgICAgICAgQHZkcm9wem9uZS1kcmFnLWxlYXZlPVwic2V0RHJvcHpvbmVWaXNpYmxlKGZhbHNlKVwiXG4gICAgICAgICAgICAgIEB2ZHJvcHpvbmUtc3VjY2Vzcz1cImR6VXBsb2FkZWRcIiBcbiAgICAgICAgICAgICAgQHZkcm9wem9uZS1xdWV1ZS1jb21wbGV0ZT1cImR6Q29tcGxldGVcIlxuICAgICAgICAgICAgICBAdmRyb3B6b25lLWZpbGUtYWRkZWQ9XCJhZGRGaWxlVXBsb2FkXCJcbiAgICAgICAgICAgICAgQHZkcm9wem9uZS1maWxlcy1hZGRlZD1cInN0YXJ0VXBsb2FkXCJcbiAgICAgICAgICAgICAgQHZkcm9wem9uZS1zZW5kaW5nPVwiZHpQcmVTZW5kXCJcbiAgICAgICAgICAgICAgQHZkcm9wem9uZS10b3RhbC11cGxvYWQtcHJvZ3Jlc3M9XCJ1cGRhdGVQcm9ncmVzc1wiXG4gICAgICAgICAgICAgIEB2ZHJvcHpvbmUtZXJyb3I9XCJzaG93RXJyb3JcIj5cbiAgICAgICAgICA8L3Z1ZS1kcm9wem9uZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZmlsZS1wcm9ncmVzcz48L2ZpbGUtcHJvZ3Jlc3M+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcbiAgaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuICBpbXBvcnQgdnVlMkRyb3B6b25lIGZyb20gJ3Z1ZTItZHJvcHpvbmUnXG4gIGltcG9ydCAndnVlMi1kcm9wem9uZS9kaXN0L3Z1ZTJEcm9wem9uZS5taW4uY3NzJ1xuICBpbXBvcnQgRmlsZVByb2dyZXNzIGZyb20gJy4vRmlsZVByb2dyZXNzLnZ1ZSdcblxuICBleHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ2ZpbGUtdXBsb2FkZXInLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgdnVlRHJvcHpvbmU6IHZ1ZTJEcm9wem9uZSxcbiAgICAgICdmaWxlLXByb2dyZXNzJzogRmlsZVByb2dyZXNzXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgIGRyb3B6b25lT3B0aW9uczoge1xuICAgICAgICAgICAgdXJsOiAnL2FwaS9maWxlcycsXG4gICAgICAgICAgICBtYXhGaWxlc2l6ZTogMTUwMCxcbiAgICAgICAgICAgIGhlYWRlcnM6IHt9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgICAgICAgY3VycmVudERpcmVjdG9yeTogJ2ZpbGVtYW5hZ2VyL2dldEN1cnJlbnREaXJlY3RvcnknLFxuICAgICAgICAgICAgZHJvcHpvbmVWaXNpYmxlOiAnZmlsZW1hbmFnZXIvZ2V0RHJvcHpvbmVWaXNpYmxlJyxcbiAgICAgICAgICAgIGZpbGVVcGxvYWRzOiAnZmlsZW1hbmFnZXIvZ2V0RmlsZVVwbG9hZHMnLFxuICAgICAgfSksXG4gICAgICBjc3JmKCkge1xuICAgICAgICBsZXQgdG9rZW4gPSBkb2N1bWVudC5oZWFkLnF1ZXJ5U2VsZWN0b3IoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKVxuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgIHRva2VuID0gdG9rZW4uY29udGVudFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ1NSRiB0b2tlbiBub3QgZm91bmQ6IGh0dHBzOi8vbGFyYXZlbC5jb20vZG9jcy9jc3JmI2NzcmYteC1jc3JmLXRva2VuJylcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9rZW5cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgLi4ubWFwQWN0aW9ucyh7XG4gICAgICAgICAgZmV0Y2hGaWxlc0FuZERpcmVjdG9yaWVzOiAnZmlsZW1hbmFnZXIvZmV0Y2hGaWxlc0FuZERpcmVjdG9yaWVzJyxcbiAgICAgICAgICBzZXRVcGxvYWRzTWluaW1pemVkOiAnZmlsZW1hbmFnZXIvc2V0VXBsb2Fkc01pbmltaXplZCcsXG4gICAgICAgICAgc2V0RHJvcHpvbmVWaXNpYmxlOiAnZmlsZW1hbmFnZXIvc2V0RHJvcHpvbmVWaXNpYmxlJyxcbiAgICAgICAgICBzZXRVcGxvYWRQcm9ncmVzczogJ2ZpbGVtYW5hZ2VyL3NldFVwbG9hZFByb2dyZXNzJyxcbiAgICAgICAgICBzZXRVcGxvYWRzVmlzaWJsZTogJ2ZpbGVtYW5hZ2VyL3NldFVwbG9hZHNWaXNpYmxlJyxcbiAgICAgICAgICBzZXRGaWxlVXBsb2FkczogJ2ZpbGVtYW5hZ2VyL3NldEZpbGVVcGxvYWRzJyxcbiAgICAgICAgICBhZGRGaWxlVXBsb2FkOiAnZmlsZW1hbmFnZXIvYWRkRmlsZVVwbG9hZCcsXG4gICAgICAgICAgYWRkRmlsZTogJ2ZpbGVtYW5hZ2VyL2FkZEZpbGUnLFxuICAgICAgfSksXG4gICAgICBvcGVuRFooKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kei1oaWRkZW4taW5wdXQnKS5jbGljaygpXG4gICAgICB9LFxuICAgICAgY29uZmlndXJlRFooKSB7XG4gICAgICAgIGxldCBkeiA9IHRoaXMuJHJlZnMuZHJvcHpvbmVfZWxlbWVudFxuICAgICAgICBkei5vcHRpb25zLmhlYWRlcnNbJ1gtQ1NSRi1UT0tFTiddID0gdGhpcy5jc3JmXG4gICAgICB9LFxuICAgICAgZHpQcmVTZW5kKGZpbGUsIHhociwgZm9ybURhdGEpIHtcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdkaXJlY3RvcnlfaWQnLCB0aGlzLmN1cnJlbnREaXJlY3RvcnkpXG4gICAgICB9LFxuICAgICAgZHpVcGxvYWRlZChyZXNwb25zZSkge1xuICAgICAgICB0b2FzdChyZXNwb25zZS5uYW1lICsgJyB1cGxvYWRlZCcsICdzdWNjZXNzJylcbiAgICAgIH0sXG4gICAgICBkekNvbXBsZXRlKCkge1xuICAgICAgICB0aGlzLmZldGNoRmlsZXNBbmREaXJlY3RvcmllcygpXG4gICAgICAgIHRoaXMuc2V0VXBsb2FkUHJvZ3Jlc3MoMTAwKVxuICAgICAgfSxcbiAgICAgIHN0YXJ0VXBsb2FkKGZpbGVzKSB7XG4gICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgdm0uc2hvd1VwbG9hZHMoKVxuICAgICAgICB2bS5zZXREcm9wem9uZVZpc2libGUoZmFsc2UpXG4gICAgICB9LFxuICAgICAgc2hvd1VwbG9hZHMoKSB7XG4gICAgICAgIHRoaXMuc2V0VXBsb2Fkc1Zpc2libGUodHJ1ZSlcbiAgICAgICAgdGhpcy5zZXRVcGxvYWRzTWluaW1pemVkKGZhbHNlKVxuICAgICAgfSxcbiAgICAgIHVwZGF0ZVByb2dyZXNzKCkge1xuICAgICAgICBsZXQgdXBsb2FkZWQgPSBfLmZpbHRlcih0aGlzLmZpbGVVcGxvYWRzLCBmdW5jdGlvbihmaWxlKXtcbiAgICAgICAgICAgIHJldHVybiBmaWxlLnN0YXR1cyA9PSAnc3VjY2VzcycgfHwgZmlsZS5zdGF0dXMgPT0gJ2Vycm9yJ1xuICAgICAgICB9KS5sZW5ndGhcbiAgICAgICAgdGhpcy5zZXRVcGxvYWRQcm9ncmVzcygodXBsb2FkZWQgLyB0aGlzLmZpbGVVcGxvYWRzLmxlbmd0aCkgKiAxMDApXG4gICAgICB9LFxuICAgICAgc2hvd0Vycm9yKGZpbGUsIGVycm9yLCB4aHIpIHtcbiAgICAgICAgaWYoIXhocikge1xuICAgICAgICAgICAgZmlsZS5lcnJvciA9IGVycm9yXG4gICAgICAgIH0gZWxzZSBpZih4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgICBmaWxlLmVycm9yID0geGhyLnN0YXR1c1RleHRcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgXG4gIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8bGFiZWwgOmZvcj1cImZpZWxkLmhhbmRsZVwiIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj57eyBmaWVsZC5uYW1lIH19PC9sYWJlbD5cblxuXHRcdDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInctMS8yXCI+XG5cdFx0XHRcdDxwLWJ1dHRvbiA6ZGlzYWJsZWQ9XCJyZXF1ZXN0T3BlblwiIEBjbGljaz1cIm9wZW5cIj5cblx0XHRcdFx0XHQ8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3BsdXMtY2lyY2xlJ11cIiBjbGFzcz1cIm1yLTFcIj48L2ZhLWljb24+IE1hbmFnZSBBc3NldHNcblx0XHRcdFx0PC9wLWJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZmlsZS1zZWxlY3Rpb25cblx0XHRcdFx0Y2xhc3M9XCJ3LTEvMlwiXG5cdFx0XHRcdDpsaW1pdD1cInNlbGVjdGlvbkxpbWl0XCJcblx0XHRcdFx0Omhhc0hlYWRlcj1cImZhbHNlXCJcblx0XHRcdFx0di1tb2RlbD1cInNlbGVjdGVkXCI+XG5cdFx0XHQ8L2ZpbGUtc2VsZWN0aW9uPlxuXHRcdDwvZGl2PlxuXG5cdFx0PCEtLSBGaWxlIE1hbmFnZXIgTW9kYWwgLS0+XG5cdFx0PHAtbW9kYWwgbmFtZT1cImZpbGUtbWFuYWdlclwiIG5vLWhlYWRlciBuby1mb290ZXIgZXh0cmEtbGFyZ2Ugdi1tb2RlbD1cIm1vZGFsT3BlblwiPlxuXHRcdFx0PGZpbGUtdXBsb2FkZXIgcmVmPVwidXBsb2FkZXJcIj48L2ZpbGUtdXBsb2FkZXI+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIiBAZHJhZ2VudGVyPVwic2V0RHJvcHpvbmVWaXNpYmxlKHRydWUpXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJzaWRlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxmaWxlLXNlbGVjdGlvblxuXHRcdFx0XHRcdFx0OmxpbWl0PVwic2VsZWN0aW9uTGltaXRcIlxuXHRcdFx0XHRcdFx0QHJlamVjdD1cInJlamVjdFwiXG5cdFx0XHRcdFx0XHRAYWNjZXB0PVwiYWNjZXB0XCJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJzZWxlY3Rpb25cIj5cblx0XHRcdFx0XHQ8L2ZpbGUtc2VsZWN0aW9uPlxuXHRcdFx0ICAgXHQ8L2Rpdj5cblxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC0zIHB0LTJcIj5cblx0XHRcdFx0XHRcdFx0PHVsPlxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzcz1cIm1yLTRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwLWJ1dHRvbiBAY2xpY2s9XCJwdXNoXCIgdGhlbWU9XCJzdWNjZXNzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnYXJyb3ctYWx0LWNpcmNsZS1sZWZ0J11cIiBjbGFzcz1cIm1yLTFcIj48L2ZhLWljb24+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3AtYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDx1bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcdDxsaSBjbGFzcz1cImlubGluZS1mbGV4IG1yLTJcIj5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gY2xhc3M9XCJyb3VuZGVkLXItbm9uZVwiIHRoZW1lPVwicHJpbWFyeVwiIEBjbGljaz1cIiRyZWZzLnVwbG9hZGVyLm9wZW5EWigpXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICd1cGxvYWQnXVwiPjwvZmEtaWNvbj48L3AtYnV0dG9uPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBjbGFzcz1cInJvdW5kZWQtbC1ub25lXCIgdi1tb2RhbDpuZXctZm9sZGVyPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnZm9sZGVyLXBsdXMnXVwiPjwvZmEtaWNvbj48L3AtYnV0dG9uPlxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cblx0ICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzPVwiZmxleCB3LWZ1bGxcIj5cblx0XHRcdFx0XHRcdFx0ICAgIDxsaSBjbGFzcz1cIm1yLTIgdy1mdWxsXCI+PHNlYXJjaC1hY3Rpb24+PC9zZWFyY2gtYWN0aW9uPjwvbGk+XG5cdFx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0XHRcdDx1bCBjbGFzcz1cImZsZXhcIj5cblx0XHRcdFx0XHRcdFx0ICAgIDxsaSBjbGFzcz1cIm1yLTJcIj48ZGlzcGxheS1hY3Rpb24+PC9kaXNwbGF5LWFjdGlvbj48L2xpPlxuXHRcdFx0XHRcdFx0XHQgICAgPGxpIGNsYXNzPVwibXItMlwiPjxzb3J0LWFjdGlvbj48L3NvcnQtYWN0aW9uPjwvbGk+XG5cdFx0XHRcdFx0XHRcdCAgICA8bGkgY2xhc3M9XCJtci0yXCI+PHZpZXctYWN0aW9uPjwvdmlldy1hY3Rpb24+PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHB4LTMgcHktMlwiPlxuXHRcdFx0XHRcdFx0XHQ8YnJlYWRjcnVtYi1hY3Rpb24+PC9icmVhZGNydW1iLWFjdGlvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1jb250YWluZXIgc2VsZWN0YWJsZXNcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhbGxlcnkgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHBiLTJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGlyZWN0b3J5XG5cdFx0XHRcdFx0XHRcdFx0XHR2LWZvcj1cImRpcmVjdG9yeSBpbiBkaXJlY3Rvcmllc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6a2V5PVwiZGlyZWN0b3J5LmlkXCJcblx0XHRcdFx0XHRcdFx0XHRcdDpkaXJlY3Rvcnk9XCJkaXJlY3RvcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0OmlzRHJvcHpvbmU9XCJ0cnVlXCJcblx0XHRcdFx0XHRcdFx0XHRcdEBkYmxjbGljaz1cIm5hdmlnYXRlKGRpcmVjdG9yeSlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8L2RpcmVjdG9yeT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdhbGxlcnlcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZmlsZVxuXHRcdFx0XHRcdFx0XHRcdFx0di1mb3I9XCJmaWxlIGluIGZpbGVzXCJcblx0XHRcdFx0XHRcdFx0XHRcdDprZXk9XCJmaWxlLmlkXCJcblx0XHRcdFx0XHRcdFx0XHRcdDpmaWxlPVwiZmlsZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRAZGJsY2xpY2s9XCJhZGQoZmlsZS5pZClcIj5cblx0XHRcdFx0XHRcdFx0XHQ8L2ZpbGU+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cbiAgICAgICAgICAgIFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgIFx0PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9wLW1vZGFsPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJtb2RhbHNcIj5cbiAgICAgICAgICAgIDxuZXctZm9sZGVyLW1vZGFsPjwvbmV3LWZvbGRlci1tb2RhbD5cbiAgICAgICAgPC9wb3J0YWw+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cblx0aW1wb3J0IEZpbGVVcGxvYWRlciAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaWxlTWFuYWdlci9GaWxlVXBsb2FkZXIudnVlJ1xuXHRpbXBvcnQgRmlsZVNlbGVjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0ZpbGVTZWxlY3Rpb24udnVlJ1xuXG5cdGltcG9ydCBCcmVhZGNydW1iQWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9CcmVhZGNydW1iLnZ1ZSdcblx0aW1wb3J0IERpc3BsYXlBY3Rpb24gICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL0Rpc3BsYXkudnVlJ1xuXHRpbXBvcnQgU2VhcmNoQWN0aW9uICAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvU2VhcmNoLnZ1ZSdcblx0aW1wb3J0IFNvcnRBY3Rpb24gICAgICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL1NvcnQudnVlJ1xuXHRpbXBvcnQgVmlld0FjdGlvbiAgICAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvVmlldy52dWUnXG5cblx0aW1wb3J0IERpcmVjdG9yeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0Jyb3dzZS9EaXJlY3RvcnkudnVlJ1xuXHRpbXBvcnQgRmlsZSAgICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQnJvd3NlL0ZpbGUudnVlJ1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnYXNzZXQtZmllbGR0eXBlJyxcblxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdCdmaWxlLXVwbG9hZGVyJzogIEZpbGVVcGxvYWRlcixcblx0XHRcdCdmaWxlLXNlbGVjdGlvbic6IEZpbGVTZWxlY3Rpb24sXG5cblx0XHRcdCdkaXNwbGF5LWFjdGlvbic6ICAgIERpc3BsYXlBY3Rpb24sXG5cdFx0XHQnYnJlYWRjcnVtYi1hY3Rpb24nOiBCcmVhZGNydW1iQWN0aW9uLFxuXHRcdFx0J3NlYXJjaC1hY3Rpb24nOiAgICAgU2VhcmNoQWN0aW9uLFxuXHRcdFx0J3NvcnQtYWN0aW9uJzogICAgICAgU29ydEFjdGlvbixcblx0XHRcdCd2aWV3LWFjdGlvbic6ICAgICAgIFZpZXdBY3Rpb24sXG5cblx0XHRcdCdkaXJlY3RvcnknOiBEaXJlY3RvcnksXG5cdFx0XHQnZmlsZSc6ICAgICAgRmlsZSxcblx0XHR9LFxuXG5cdFx0bWl4aW5zOiBbXG5cdFx0XHRyZXF1aXJlKCcuLi8uLi9taXhpbnMvZmlsZXNlbGVjdG9yJykuZGVmYXVsdCxcblx0XHRcdHJlcXVpcmUoJy4uLy4uL21peGlucy9maWxlZHJhZ2Ryb3AnKS5kZWZhdWx0LFxuICAgICAgICAgICAgcmVxdWlyZSgnLi4vLi4vbWl4aW5zL2ZpbGVicm93c2VyJykuZGVmYXVsdCxcbiAgICAgICAgXSxcblxuXHRcdGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgXHRyZXF1ZXN0T3BlbjogZmFsc2UsXG4gICAgICAgICAgICBcdG1vZGFsT3BlbjogZmFsc2UsXG4gICAgICAgICAgICBcdHNlbGVjdGlvbjogW10sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cblx0XHRwcm9wczoge1xuXHRcdFx0ZmllbGQ6IHtcblx0XHRcdCAgICB0eXBlOiBPYmplY3QsXG5cdFx0XHQgICAgcmVxdWlyZWQ6IHRydWUsXG5cdFx0XHR9LFxuXG5cdFx0XHR2YWx1ZToge1xuXHRcdFx0XHR0eXBlOiBBcnJheSxcblx0XHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0XHRkZWZhdWx0OiAoKSA9PiBbXSxcblx0XHRcdH0sXG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHRsb2FkaW5nKGlzTG9hZGluZykge1xuXHRcdFx0XHR0aGlzLiRuZXh0VGljaygoKSA9PiB7XG5cdFx0XHRcdFx0aWYgKGlzTG9hZGluZykge1xuXHRcdFx0XHRcdFx0dGhpcy5kZXN0cm95U2VsZWN0b3IoKVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aGlzLmxvYWRTZWxlY3Rvcih0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuc2VsZWN0YWJsZXMnKSlcblxuXHRcdFx0XHRcdFx0aWYgKHRoaXMucmVxdWVzdE9wZW4pIHtcblx0XHRcdFx0XHRcdFx0dGhpcy5tb2RhbE9wZW4gICA9IHRydWVcblx0XHRcdFx0XHRcdFx0dGhpcy5yZXF1ZXN0T3BlbiA9IGZhbHNlXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcblx0XHRcdHNlbGVjdGVkOiB7XG5cdFx0XHRcdGdldCgpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy52YWx1ZSB8fCBbXVxuXHRcdFx0XHR9LFxuXHRcdFx0XHRcblx0XHRcdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSlcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0c2VsZWN0aW9uTGltaXQoKSB7XG5cdFx0XHRcdHJldHVybiBOdW1iZXIodGhpcy5maWVsZC5zZXR0aW5ncy5saW1pdCkgfHwgSW5maW5pdHlcblx0XHRcdH0sXG5cblx0XHRcdGFkZExpbWl0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZWxlY3Rpb25MaW1pdCAtIHRoaXMuc2VsZWN0aW9uLmxlbmd0aFxuXHRcdFx0fSxcblxuXHRcdFx0dHlwZVJlc3RyaWN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5maWVsZC5zZXR0aW5ncy5maWxldHlwZV9yZXN0cmljdGlvbnNcblx0XHRcdH1cbiAgICAgICAgfSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC4uLm1hcEFjdGlvbnMoe1xuICAgICAgICAgICAgICAgIHNldERyb3B6b25lVmlzaWJsZTogJ2ZpbGVtYW5hZ2VyL3NldERyb3B6b25lVmlzaWJsZScsXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgaXNWYWxpZFNlbGVjdGlvbihmaWxlKSB7XG4gICAgICAgICAgICBcdHJldHVybiB0aGlzLnR5cGVSZXN0cmljdGlvbi5sZW5ndGggPT0gMCB8fCBfLmluY2x1ZGVzKHRoaXMudHlwZVJlc3RyaWN0aW9uLCBmaWxlLnR5cGUpXG4gICAgICAgICAgICB9LFxuXG5cdFx0XHRwdXNoKCkge1xuXHRcdFx0XHRfLmZvckVhY2godGhpcy5zZWxlY3RlZEZpbGVzLCAoaWQpID0+IHRoaXMuYWRkKGlkKSlcblx0XHRcdH0sXG5cblx0XHRcdGFkZChpZCkge1xuXHRcdFx0XHRpZiAodGhpcy5hZGRMaW1pdCA+IDApIHtcblx0XHRcdFx0XHRsZXQgZXhpc3RzID0gXy5maW5kKHRoaXMuc2VsZWN0aW9uLCBbICdpZCcsIGlkIF0pXG5cdFx0XHRcdFx0bGV0IGZpbGUgICA9IF8uZmluZCh0aGlzLmZpbGVzLCBbICdpZCcsIGlkIF0pXG5cblx0XHRcdFx0XHRpZiAoISBleGlzdHMgJiYgdGhpcy5pc1ZhbGlkU2VsZWN0aW9uKGZpbGUpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNlbGVjdGlvbi5wdXNoKGZpbGUpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRvcGVuKCkge1xuXHRcdFx0XHR0aGlzLnJlc2V0KClcblx0XHRcdFx0dGhpcy5zZXRDdXJyZW50RGlyZWN0b3J5KHRoaXMuZmllbGQuc2V0dGluZ3Mucm9vdF9kaXJlY3RvcnkpXG4gICAgICAgIFx0XHR0aGlzLnNldFJvb3REaXJlY3RvcnkodGhpcy5maWVsZC5zZXR0aW5ncy5yb290X2RpcmVjdG9yeSlcblx0XHRcdFx0dGhpcy5mZXRjaEZpbGVzQW5kRGlyZWN0b3JpZXMoKVxuXG5cdFx0XHRcdHRoaXMuc2VsZWN0aW9uID0gWy4uLnRoaXMuc2VsZWN0ZWRdXG5cdFx0XHRcdHRoaXMucmVxdWVzdE9wZW4gPSB0cnVlXG5cdFx0XHR9LFxuXG5cdFx0XHRjbG9zZSgpIHtcblx0XHRcdFx0dGhpcy5yZXNldCgpXG5cblx0XHRcdFx0dGhpcy5zZWxlY3Rpb24gPSBbXVxuXHRcdFx0XHR0aGlzLm1vZGFsT3BlbiA9IGZhbHNlXG5cdFx0XHR9LFxuXG5cdFx0XHRyZWplY3QoKSB7XG5cdFx0XHRcdHRoaXMuY2xvc2UoKVxuXHRcdFx0fSxcblxuXHRcdFx0YWNjZXB0KCkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGVkID0gdGhpcy5zZWxlY3Rpb25cblx0XHRcdFx0dGhpcy5jbG9zZSgpXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCI9ZmxleCBpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXJcIiB9LFxuICAgIFtcbiAgICAgIF92bS5fbChfdm0ubmF2LCBmdW5jdGlvbihicmVhZGNydW1iLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIGluZGV4ID4gMFxuICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJteC0yIGZvbnQtYm9sZFwiIH0sIFtfdm0uX3YoXCIvXCIpXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5jdXJyZW50RGlyZWN0b3J5ID09IGJyZWFkY3J1bWIuaWQgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm5hdmlnYXRlKGJyZWFkY3J1bWIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBpbmRleCA9PSAwXG4gICAgICAgICAgICAgICAgPyBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0xXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImhvbWVcIl0gfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcIiArIF92bS5fcyhicmVhZGNydW1iLm5hbWUpICsgXCJcXG5cXHRcXHRcIilcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInAtZHJvcGRvd25cIixcbiAgICBbXG4gICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0xXCIsXG4gICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBfdm0ub3B0aW9uc1tfdm0uZGlzcGxheV1dIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiXFxuXFx0XCIgKyBfdm0uX3MoX3ZtLl9mKFwiY2FwaXRhbGl6ZVwiKShfdm0uZGlzcGxheSkpICsgXCJcXG5cXHRcXG5cXHRcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICB7IHNsb3Q6IFwib3B0aW9uc1wiIH0sXG4gICAgICAgIF92bS5fbChfdm0ub3B0aW9ucywgZnVuY3Rpb24oaWNvbiwga2V5KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJwLWRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctNDhcIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXREaXNwbGF5KGtleSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgbXItMVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBpY29uXSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcIiArIF92bS5fcyhfdm0uX2YoXCJjYXBpdGFsaXplXCIpKGtleSkpICsgXCJcXG5cXHRcXHRcIilcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnktdGV4dFwiIH0sIFtcbiAgICBfdm0uaXNFZGl0aW5nXG4gICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWxlLm5hbWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVmOiBcImVkaXRcIixcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1fX2NvbnRyb2wgZm9ybV9fY29udHJvbC0tc20gdGV4dC1jZW50ZXJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGV4dFwiIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpbGUubmFtZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgYmx1cjogX3ZtLnJldmVydCxcbiAgICAgICAgICAgICAga2V5dXA6IFtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImVudGVyXCIsIDEzLCAkZXZlbnQua2V5LCBcIkVudGVyXCIpXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlKCRldmVudClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICAhJGV2ZW50LnR5cGUuaW5kZXhPZihcImtleVwiKSAmJlxuICAgICAgICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZXNjXCIsIDI3LCAkZXZlbnQua2V5LCBbXG4gICAgICAgICAgICAgICAgICAgICAgXCJFc2NcIixcbiAgICAgICAgICAgICAgICAgICAgICBcIkVzY2FwZVwiXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmV2ZXJ0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZmlsZSwgXCJuYW1lXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgOiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0cnVuY2F0ZVwiLCBvbjogeyBkYmxjbGljazogX3ZtLmVkaXQgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubmFtZSkpXG4gICAgICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImlucHV0XCIsIHtcbiAgICBkaXJlY3RpdmVzOiBbXG4gICAgICB7XG4gICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICB9XG4gICAgXSxcbiAgICBzdGF0aWNDbGFzczogXCJmb3JtLWlucHV0XCIsXG4gICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIsIG5hbWU6IFwic2VhcmNoXCIsIHBsYWNlaG9sZGVyOiBcIlNlYXJjaC4uLlwiIH0sXG4gICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5zZWFyY2ggfSxcbiAgICBvbjoge1xuICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBfdm0uc2VhcmNoID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwicC1kcm9wZG93blwiLFxuICAgIFtcbiAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IG1yLTFcIixcbiAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIF92bS5zb3J0SWNvbihfdm0uc29ydCldIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiXFxuXFx0XCIgKyBfdm0uX3MoX3ZtLm9wdGlvbnNbX3ZtLnNvcnRdKSArIFwiXFxuXFx0XFxuXFx0XCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgeyBzbG90OiBcIm9wdGlvbnNcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLm9wdGlvbnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcInAtZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy00OFwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNvcnRCeShrZXkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IG1yLTFcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgX3ZtLnNvcnRJY29uKGtleSldIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFwiICsgX3ZtLl9zKHZhbHVlKSArIFwiXFxuXFx0XFx0XCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImlubGluZS1mbGV4XCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC1sIHJvdW5kZWQtci1ub25lXCIsXG4gICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS52aWV3ID09IFwibGlzdFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVWaWV3KFwibGlzdFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiYmFyc1wiXSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC1yIHJvdW5kZWQtbC1ub25lXCIsXG4gICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS52aWV3ID09IFwiZ3JpZFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVWaWV3KFwiZ3JpZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGgtbGFyZ2VcIl0gfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnktd3JhcHBlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LWl0ZW1cIixcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgXCJnYWxsZXJ5LWl0ZW0tLXNlbGVjdGVkIHNlbGVjdGFibGUtLXNlbGVjdGVkXCI6IF92bS5pc1NlbGVjdGVkLFxuICAgICAgICAgICAgc2VsZWN0YWJsZTogX3ZtLmlzU2VsZWN0YWJsZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIFwiZGF0YS1kcm9wem9uZVwiOiBfdm0uZGlyZWN0b3J5LmlkLFxuICAgICAgICAgICAgZHJhZ2dhYmxlOiBfdm0uaXNEcmFnZ2FibGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJkYmxjbGlja1wiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicC1pbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS1pbWFnZVwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJkcmFnZ2FibGUtLWRyb3B6b25lXCI6IF92bS5pc0Ryb3B6b25lIH0sXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzcmM6IFwiL2ltZy9mb2xkZXIuc3ZnXCIsXG4gICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiAxNTAsXG4gICAgICAgICAgICAgIGhlaWdodDogMTUwLFxuICAgICAgICAgICAgICBhbHQ6IF92bS5kaXJlY3RvcnkubmFtZSxcbiAgICAgICAgICAgICAgZHJhZ2dhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgICAgXCJhc3BlY3QtcmF0aW9cIjogXCJcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJxdWljay1lZGl0XCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBmaWxlOiBfdm0uZGlyZWN0b3J5LFxuICAgICAgICAgIGVuZHBvaW50OiBcIi9hcGkvZGlyZWN0b3JpZXMvXCIgKyBfdm0uZGlyZWN0b3J5LmlkXG4gICAgICAgIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS1zdWJ0aXRsZVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0uZmlsZUNvdW50KSB9IH0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGNsYXNzOiBbX3ZtLnZpZXcgPT0gXCJncmlkXCIgPyBcImdhbGxlcnktd3JhcHBlclwiIDogXCJnYWxsZXJ5LXdyYXBwZXItLXJvd1wiXVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LWl0ZW1cIixcbiAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgXCJnYWxsZXJ5LWl0ZW0tLXNlbGVjdGVkIHNlbGVjdGFibGUtLXNlbGVjdGVkXCI6IF92bS5pc1NlbGVjdGVkLFxuICAgICAgICAgICAgc2VsZWN0YWJsZTogX3ZtLmlzU2VsZWN0YWJsZVxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXR0cnM6IHsgXCJkYXRhLXNlbGVjdGlvblwiOiBfdm0uZmlsZS5pZCwgZHJhZ2dhYmxlOiBfdm0uaXNEcmFnZ2FibGUgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiZGJsY2xpY2tcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInAtaW1nXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImdhbGxlcnktaW1hZ2VcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNyYzogXCIvaW1nL2ltYWdlLWxhcmdlLnN2Z1wiLFxuICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZVwiLFxuICAgICAgICAgICAgICBsYXp5U3JjOiBfdm0uZmlsZVNyYyxcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAsXG4gICAgICAgICAgICAgIGFsdDogX3ZtLmZpbGUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgIGRyYWdnYWJsZTogZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicXVpY2stZWRpdFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGZpbGU6IF92bS5maWxlLCBlbmRwb2ludDogXCIvYXBpL2ZpbGVzL1wiICsgX3ZtLmZpbGUuaWQgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LXN1YnRpdGxlXCIgfSwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLl9mKFwiYnl0ZXNcIikoX3ZtLmZpbGUuYnl0ZXMpKSldKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5maWxlLmV4dGVuc2lvbikpXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS52aWV3ID09IFwibGlzdFwiXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LXRleHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcIiArIF92bS5fcyhfdm0uZmlsZS5taW1ldHlwZSkgKyBcIlxcblxcdFxcdFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnZpZXcgPT0gXCJsaXN0XCJcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnktdGV4dFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgX3ZtLiRtb21lbnQoX3ZtLmZpbGUudXBkYXRlZF9hdCkuZm9ybWF0KFwiTU1NIERvLCBZWVlZXCIpXG4gICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmaWxlLW1hbmFnZXJfX3VwbG9hZHMgY2FyZFwiLFxuICAgICAgY2xhc3M6IFtfdm0udmlzaWJsZSA/IFwiZmlsZS1tYW5hZ2VyX191cGxvYWRzLS12aXNpYmxlXCIgOiBcIlwiXVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9faGVhZGVyIGZsZXggaXRlbXMtY2VudGVyIGJnLWJsYWNrIHB4LTUgcHktMlwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2xhYmVsIHRleHQtd2hpdGUgbWItMFwiIH0sIFtcbiAgICAgICAgICAgIF92bS51cGxvYWRQcm9ncmVzcyAhPSAxMDBcbiAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBVcGxvYWRpbmc6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnVwbG9hZFByb2dyZXNzLnRvRml4ZWQoMCkpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIiVcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgVXBsb2Fkc1xcbiAgICAgICAgICAgIFwiKV0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC1hdXRvIG1yLTVcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVNaW5pbWl6ZSgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0ubWluaW1pemVkXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJmYS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiLCBhdHRyczogeyBpY29uOiBcImV4cGFuZFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiB9LCBbX3ZtLl92KFwiRXhwYW5kXCIpXSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJmYS1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiLCBhdHRyczogeyBpY29uOiBcIm1pbnVzXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic3Itb25seVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk1pbmltaXplXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXRVcGxvYWRzVmlzaWJsZShmYWxzZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZmEtaWNvblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC13aGl0ZVwiLCBhdHRyczogeyBpY29uOiBcInRpbWVzXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzci1vbmx5XCIgfSwgW192bS5fdihcIkNsb3NlXCIpXSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImZpbGUtbWFuYWdlcl9fdXBsb2Fkcy1ib2R5IGNhcmRfX2JvZHkgcHgtNCBweS0yIG92ZXJmbG93LXktYXV0b1wiLFxuICAgICAgICAgIGNsYXNzOiBbX3ZtLm1pbmltaXplZCA/IFwiaGlkZGVuXCIgOiBcIlwiXVxuICAgICAgICB9LFxuICAgICAgICBfdm0uX2woX3ZtLmZpbGVVcGxvYWRzLCBmdW5jdGlvbihmaWxlLCBpbmRleCkge1xuICAgICAgICAgIHJldHVybiBmaWxlLnVwbG9hZFxuICAgICAgICAgICAgPyBfYyhcImZpbGUtcHJvZ3Jlc3Mtcm93XCIsIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiZmlsZS1cIiArIGluZGV4LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZpbGU6IGZpbGUsIHN0YXR1czogZmlsZS5zdGF0dXMgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICB9KSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLXByb2dyZXNzIGZsZXggaXRlbXMtY2VudGVyIHRleHQtc21cIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLXByb2dyZXNzX19pY29uIHByLTFcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInAtaW1nXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LWltYWdlXCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHNyYzogXCIvaW1nL1wiICsgX3ZtLnR5cGUgKyBcIi1sYXJnZS5zdmdcIixcbiAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgIHdpZHRoOiAyNSxcbiAgICAgICAgICAgIGhlaWdodDogMjVcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZpbGUtcHJvZ3Jlc3NfX25hbWUgcGwtMiBwci0zIHRydW5jYXRlIGZsZXgtMVwiIH0sXG4gICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZmlsZS5uYW1lKSldXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5maWxlLnVwbG9hZC5wcm9ncmVzcyAhPSAxMDAgJiYgX3ZtLnN0YXR1cyAhPSBcImVycm9yXCJcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLXByb2dyZXNzX19iYXIgbWwtYXV0b1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNoYWRvdyB3LWZ1bGwgYmctZ3JleS1saWdodFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmctc3VjY2Vzcy00MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMVwiLFxuICAgICAgICAgICAgICBzdHlsZTogXCJ3aWR0aDogXCIgKyBfdm0uZmlsZS51cGxvYWQucHJvZ3Jlc3MgKyBcIiVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1wcm9ncmVzc19fc3RhdHVzIG1sLTJcIiB9LFxuICAgICAgW1xuICAgICAgICBfdm0uc3RhdHVzID09IFwic3VjY2Vzc1wiXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJmYS1pY29uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXN1Y2Nlc3MtNjAwXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY2hlY2stY2lyY2xlXCJdIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW19jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiB9LCBbX3ZtLl92KFwiU3VjY2Vzc1wiKV0pXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLnN0YXR1cyA9PSBcImVycm9yXCJcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcInAtdG9vbHRpcFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImN1cnNvci1wb2ludGVyXCIsIGF0dHJzOiB7IHBsYWNlbWVudDogXCJsZWZ0XCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZmEtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1wcmltYXJ5LTYwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRpbWVzLWNpcmNsZVwiXSB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzci1vbmx5XCIgfSwgW192bS5fdihcIkVycm9yXCIpXSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcImNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5maWxlLmVycm9yKSArIFwiXFxuICAgICAgXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX2MoXCJmYS1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwic3Bpbm5lclwiXSwgcHVsc2U6IFwiXCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiB9LCBbX3ZtLl92KFwiVXBsb2FkaW5nLi4uXCIpXSlcbiAgICAgICAgICAgIF0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBoLWZ1bGxcIiB9LCBbXG4gICAgX3ZtLmhhc0hlYWRlclxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcC0zXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJ3YXJuaW5nXCIgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwicmVqZWN0XCIpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInRpbWVzXCJdIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgUmVqZWN0XCIpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJhY2NlcHRcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCJBY2NlcHQgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0yXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJjaGVja1wiXSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLnNlbGVjdGlvbi5sZW5ndGggPiAwXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicC1zb3J0YWJsZS1saXN0XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzb3J0YWJsZS1saXN0XCIsXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2VsZWN0aW9uID0gJCR2XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHAtM1wiIH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnNlbGVjdGlvbiwgZnVuY3Rpb24oZmlsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJwLXNvcnRhYmxlLWl0ZW1cIiwgeyBrZXk6IGZpbGUuaWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIgcHktMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctMS8xMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1zb3J0YWJsZS1oYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY3Vyc29yLW1vdmVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhhbmRsZSBmYS1mdyB0ZXh0LWdyYXktNDAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJlbGxpcHNpcy12XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0zLzEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGUudHlwZSA9PSBcImltYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJwLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogZmlsZS51cmwgKyBcIj93PTUwJmg9NTAmZml0PWNyb3BcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInAtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWcvXCIgKyBmaWxlLnR5cGUgKyBcIi1sYXJnZS5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIndoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy02LzEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KF92bS5fcyhmaWxlLm5hbWUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LTIvMTIgdGV4dC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwiZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlbW92ZShmaWxlLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ0cmFzaFwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmFkZExpbWl0IDw9IDBcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtc20gaXRhbGljIHRleHQtZGFuZ2VyLTYwMCB0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuXFx0XFx0XFx0RmlsZSBsaW1pdCByZWFjaGVkXFxuXFx0XFx0XCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNXhsIHRleHQtZ3JheS0zMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgZmEtM3hcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFyXCIsIFwiY29weVwiXSB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWxnIHB5LTIgdGV4dC1ncmF5LTUwMFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiU2VsZWN0IHNvbWUgZmlsZXMuLi5cIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLXVwbG9hZGVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtbWFuYWdlcl9fZHJvcHpvbmVcIixcbiAgICAgICAgICBjbGFzczogW192bS5kcm9wem9uZVZpc2libGUgPyBcImZpbGUtbWFuYWdlcl9fZHJvcHpvbmUtLXZpc2libGVcIiA6IFwiXCJdLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0ICE9PSAkZXZlbnQuY3VycmVudFRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXREcm9wem9uZVZpc2libGUoZmFsc2UpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlLW1hbmFnZXJfX3Byb21wdFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZpbGUtbWFuYWdlcl9fcHJvbXB0LWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJ1cGxvYWRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNyLW9ubHlcIiB9LCBbX3ZtLl92KFwiVXBsb2FkXCIpXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkRyYWcgZmlsZXMgaGVyZSB0byB1cGxvYWRcIildKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInZ1ZS1kcm9wem9uZVwiLCB7XG4gICAgICAgICAgICByZWY6IFwiZHJvcHpvbmVfZWxlbWVudFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwiZHJvcHpvbmVcIiwgb3B0aW9uczogX3ZtLmRyb3B6b25lT3B0aW9ucyB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJ2ZHJvcHpvbmUtbW91bnRlZFwiOiBfdm0uY29uZmlndXJlRFosXG4gICAgICAgICAgICAgIFwidmRyb3B6b25lLWRyYWctbGVhdmVcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zZXREcm9wem9uZVZpc2libGUoZmFsc2UpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwidmRyb3B6b25lLXN1Y2Nlc3NcIjogX3ZtLmR6VXBsb2FkZWQsXG4gICAgICAgICAgICAgIFwidmRyb3B6b25lLXF1ZXVlLWNvbXBsZXRlXCI6IF92bS5kekNvbXBsZXRlLFxuICAgICAgICAgICAgICBcInZkcm9wem9uZS1maWxlLWFkZGVkXCI6IF92bS5hZGRGaWxlVXBsb2FkLFxuICAgICAgICAgICAgICBcInZkcm9wem9uZS1maWxlcy1hZGRlZFwiOiBfdm0uc3RhcnRVcGxvYWQsXG4gICAgICAgICAgICAgIFwidmRyb3B6b25lLXNlbmRpbmdcIjogX3ZtLmR6UHJlU2VuZCxcbiAgICAgICAgICAgICAgXCJ2ZHJvcHpvbmUtdG90YWwtdXBsb2FkLXByb2dyZXNzXCI6IF92bS51cGRhdGVQcm9ncmVzcyxcbiAgICAgICAgICAgICAgXCJ2ZHJvcHpvbmUtZXJyb3JcIjogX3ZtLnNob3dFcnJvclxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJmaWxlLXByb2dyZXNzXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiLCBhdHRyczogeyBmb3I6IF92bS5maWVsZC5oYW5kbGUgfSB9LFxuICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZmllbGQubmFtZSkpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctMS8yXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBfdm0ucmVxdWVzdE9wZW4gfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub3BlbiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0xXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInBsdXMtY2lyY2xlXCJdIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIE1hbmFnZSBBc3NldHNcXG5cXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJmaWxlLXNlbGVjdGlvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEvMlwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgbGltaXQ6IF92bS5zZWxlY3Rpb25MaW1pdCwgaGFzSGVhZGVyOiBmYWxzZSB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZCA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInAtbW9kYWxcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBcImZpbGUtbWFuYWdlclwiLFxuICAgICAgICAgICAgXCJuby1oZWFkZXJcIjogXCJcIixcbiAgICAgICAgICAgIFwibm8tZm9vdGVyXCI6IFwiXCIsXG4gICAgICAgICAgICBcImV4dHJhLWxhcmdlXCI6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1vZGFsT3BlbixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLm1vZGFsT3BlbiA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9kYWxPcGVuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImZpbGUtdXBsb2FkZXJcIiwgeyByZWY6IFwidXBsb2FkZXJcIiB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm93XCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgZHJhZ2VudGVyOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0RHJvcHpvbmVWaXNpYmxlKHRydWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2lkZS1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZmlsZS1zZWxlY3Rpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBsaW1pdDogX3ZtLnNlbGVjdGlvbkxpbWl0IH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHJlamVjdDogX3ZtLnJlamVjdCwgYWNjZXB0OiBfdm0uYWNjZXB0IH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGlvbiA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTMgcHQtMlwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXItNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwic3VjY2Vzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ucHVzaCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogW1wiZmFzXCIsIFwiYXJyb3ctYWx0LWNpcmNsZS1sZWZ0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpbmxpbmUtZmxleCBtci0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLXItbm9uZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyZWZzLnVwbG9hZGVyLm9wZW5EWigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInVwbG9hZFwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpuZXctZm9sZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibmV3LWZvbGRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkLWwtbm9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImZvbGRlci1wbHVzXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCB3LWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1yLTIgdy1mdWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwic2VhcmNoLWFjdGlvblwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtci0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiZGlzcGxheS1hY3Rpb25cIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNvcnQtYWN0aW9uXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1yLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJ2aWV3LWFjdGlvblwiKV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZsZXggaXRlbXMtY2VudGVyIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBweC0zIHB5LTJcIlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJicmVhZGNydW1iLWFjdGlvblwiKV0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LWNvbnRhaW5lciBzZWxlY3RhYmxlc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnkgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHBiLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZGlyZWN0b3JpZXMsIGZ1bmN0aW9uKGRpcmVjdG9yeSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGlyZWN0b3J5XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBkaXJlY3RvcnkuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpcmVjdG9yeTogZGlyZWN0b3J5LCBpc0Ryb3B6b25lOiB0cnVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5uYXZpZ2F0ZShkaXJlY3RvcnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZmlsZXMsIGZ1bmN0aW9uKGZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImZpbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpbGUuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZpbGU6IGZpbGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYmxjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZChmaWxlLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJtb2RhbHNcIiB9IH0sIFtfYyhcIm5ldy1mb2xkZXItbW9kYWxcIildLCAxKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9CcmVhZGNydW1iLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YWYyZDQ3ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9CcmVhZGNydW1iLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQnJlYWRjcnVtYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvZnVzaW9uY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZhZjJkNDdlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZhZjJkNDdlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZhZjJkNDdlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9CcmVhZGNydW1iLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YWYyZDQ3ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2YWYyZDQ3ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9CcmVhZGNydW1iLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnJlYWRjcnVtYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnJlYWRjcnVtYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQnJlYWRjcnVtYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmFmMmQ0N2UmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Rpc3BsYXkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiN2E2MWQ3JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Rpc3BsYXkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EaXNwbGF5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWI3YTYxZDcnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWI3YTYxZDcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWI3YTYxZDcnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Rpc3BsYXkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiN2E2MWQ3JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFiN2E2MWQ3Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9BY3Rpb25zL0Rpc3BsYXkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXNwbGF5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXNwbGF5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXNwbGF5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjdhNjFkNyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUXVpY2tFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mOTM3OTYyOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9RdWlja0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9RdWlja0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmOTM3OTYyOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmOTM3OTYyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmOTM3OTYyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUXVpY2tFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mOTM3OTYyOCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmOTM3OTYyOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9RdWlja0VkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9RdWlja0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1F1aWNrRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUXVpY2tFZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mOTM3OTYyOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yODE4NGRiYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyODE4NGRiYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyODE4NGRiYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyODE4NGRiYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yODE4NGRiYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyODE4NGRiYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9TZWFyY2gudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yODE4NGRiYSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU29ydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZThmZjRhNGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU29ydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NvcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlOGZmNGE0ZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlOGZmNGE0ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlOGZmNGE0ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU29ydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZThmZjRhNGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZThmZjRhNGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0FjdGlvbnMvU29ydC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NvcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NvcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU4ZmY0YTRlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZmI5YzQ2MCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvZnVzaW9uY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzZmYjljNDYwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzZmYjljNDYwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzZmYjljNDYwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02ZmI5YzQ2MCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2ZmI5YzQ2MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvQWN0aW9ucy9WaWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NmZiOWM0NjAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0RpcmVjdG9yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWIyZjFiZDEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGlyZWN0b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGlyZWN0b3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWIyZjFiZDEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWIyZjFiZDEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWIyZjFiZDEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0RpcmVjdG9yeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWIyZjFiZDEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWIyZjFiZDEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0Jyb3dzZS9EaXJlY3RvcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EaXJlY3RvcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RpcmVjdG9yeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGlyZWN0b3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YjJmMWJkMSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTUxYWJkNzAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NTFhYmQ3MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NTFhYmQ3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NTFhYmQ3MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTUxYWJkNzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTUxYWJkNzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0Jyb3dzZS9GaWxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTUxYWJkNzAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpbGVQcm9ncmVzcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjU1YTIyZGMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmlsZVByb2dyZXNzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmlsZVByb2dyZXNzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjU1YTIyZGMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjU1YTIyZGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjU1YTIyZGMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpbGVQcm9ncmVzcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjU1YTIyZGMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjU1YTIyZGMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0ZpbGVQcm9ncmVzcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVQcm9ncmVzcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVByb2dyZXNzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlUHJvZ3Jlc3MudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY1NWEyMmRjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWxlUHJvZ3Jlc3NSb3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJhNTQxMTE4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpbGVQcm9ncmVzc1Jvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbGVQcm9ncmVzc1Jvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvZnVzaW9uY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJhNTQxMTE4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJhNTQxMTE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJhNTQxMTE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWxlUHJvZ3Jlc3NSb3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJhNTQxMTE4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJhNTQxMTE4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWxlTWFuYWdlci9GaWxlUHJvZ3Jlc3NSb3cudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlUHJvZ3Jlc3NSb3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVQcm9ncmVzc1Jvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVByb2dyZXNzUm93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYTU0MTExOCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjFkZmExMTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpbGVTZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyMWRmYTExMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMWRmYTExMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMWRmYTExMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmlsZVNlbGVjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjFkZmExMTImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjFkZmExMTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpbGVNYW5hZ2VyL0ZpbGVTZWxlY3Rpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMWRmYTExMiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmlsZVVwbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YzdjYzI1MyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWxlVXBsb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWxlVXBsb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1YzdjYzI1MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1YzdjYzI1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1YzdjYzI1MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmlsZVVwbG9hZGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YzdjYzI1MyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1YzdjYzI1MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmlsZU1hbmFnZXIvRmlsZVVwbG9hZGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmlsZVVwbG9hZGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWxlVXBsb2FkZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpbGVVcGxvYWRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM3Y2MyNTMmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjI1YzEwOSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDYyNWMxMDknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDYyNWMxMDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDYyNWMxMDknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjI1YzEwOSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NjI1YzEwOScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQXNzZXQvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NjI1YzEwOSZcIiIsImltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdGNvbXB1dGVkOiB7XG5cdFx0Li4ubWFwR2V0dGVycyh7XG5cdFx0XHRyb290RGlyZWN0b3J5OiAgICAnZmlsZW1hbmFnZXIvZ2V0Um9vdERpcmVjdG9yeScsXG5cdFx0XHRjdXJyZW50RGlyZWN0b3J5OiAnZmlsZW1hbmFnZXIvZ2V0Q3VycmVudERpcmVjdG9yeScsXG5cdFx0XHRwYXJlbnREaXJlY3Rvcnk6ICAnZmlsZW1hbmFnZXIvZ2V0UGFyZW50RGlyZWN0b3J5Jyxcblx0XHRcdGJyZWFkY3J1bWJzOiAgICAgICdmaWxlbWFuYWdlci9nZXRCcmVhZGNydW1icycsXG5cdFx0XHRkaXJlY3RvcmllczogICAgICAnZmlsZW1hbmFnZXIvZ2V0RGlyZWN0b3JpZXMnLFxuXHRcdFx0ZmlsZXM6ICAgICAgICAgICAgJ2ZpbGVtYW5hZ2VyL2dldEZpbGVzJyxcblx0XHRcdHZpZXc6ICAgICAgICAgICAgICdmaWxlbWFuYWdlci9nZXRWaWV3Jyxcblx0XHR9KSxcblx0fSxcblxuXHRmaWx0ZXJzOiB7XG5cdFx0Ynl0ZXModmFsdWUpIHtcblx0XHQgICAgbGV0IHRocmVzaCA9IDEwMDBcblxuXHRcdCAgICBpZiAoTWF0aC5hYnModmFsdWUpIDwgdGhyZXNoKSB7XG5cdFx0ICAgICAgICByZXR1cm4gdmFsdWUgKyAnIEInXG5cdFx0ICAgIH1cblxuXHRcdCAgICBsZXQgaW5kZXggPSAtMVxuXHRcdCAgICBsZXQgdW5pdHMgPSBbJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJywgJ1pCJywgJ1lCJ11cblxuXHRcdCAgICBkbyB7XG5cdFx0ICAgICAgICB2YWx1ZSAvPSB0aHJlc2hcblx0XHQgICAgICAgICsraW5kZXhcblx0XHQgICAgfSB3aGlsZSAoTWF0aC5hYnModmFsdWUpID49IHRocmVzaCAmJiBpbmRleCA8IHVuaXRzLmxlbmd0aCAtIDEpXG5cblx0XHQgICAgcmV0dXJuIHZhbHVlLnRvRml4ZWQoMSkgKyAnICcgKyB1bml0c1tpbmRleF1cblx0XHR9LFxuXG5cdFx0c2l6ZSh2YWx1ZSkge1xuXHRcdFx0cmV0dXJuIF8uc2l6ZSh2YWx1ZSlcblx0XHR9XG5cdH0sXG5cblx0bWV0aG9kczoge1xuXHRcdC4uLm1hcEFjdGlvbnMoe1xuXHRcdFx0ZmV0Y2hGaWxlc0FuZERpcmVjdG9yaWVzOiAnZmlsZW1hbmFnZXIvZmV0Y2hGaWxlc0FuZERpcmVjdG9yaWVzJyxcblx0XHRcdHNldEN1cnJlbnREaXJlY3Rvcnk6ICAgICAgJ2ZpbGVtYW5hZ2VyL3NldEN1cnJlbnREaXJlY3RvcnknLFxuXHRcdFx0c2V0UGFyZW50RGlyZWN0b3J5OiAgICAgICAnZmlsZW1hbmFnZXIvc2V0UGFyZW50RGlyZWN0b3J5Jyxcblx0XHRcdHNldFJvb3REaXJlY3Rvcnk6ICAgICAgICAgJ2ZpbGVtYW5hZ2VyL3NldFJvb3REaXJlY3RvcnknLFxuXHRcdFx0cmVzZXQ6ICAgICAgICAgICAgICAgICAgICAnZmlsZW1hbmFnZXIvcmVzZXQnLFxuXHRcdH0pLFxuXG5cdFx0bmF2aWdhdGUoZGlyZWN0b3J5KSB7XG5cdFx0XHR0aGlzLnJlc2V0KClcblxuXHRcdFx0aWYgKGRpcmVjdG9yeSkge1xuXHRcdFx0XHR0aGlzLnNldEN1cnJlbnREaXJlY3RvcnkoZGlyZWN0b3J5LmlkKVxuXHRcdFx0XHR0aGlzLnNldFBhcmVudERpcmVjdG9yeShkaXJlY3RvcnkucGFyZW50X2lkKVxuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLmZldGNoRmlsZXNBbmREaXJlY3RvcmllcygpXG5cdFx0fSxcblxuXHRcdHByZXZpZXcoZmlsZSkge1xuXHRcdFx0dGhpcy4kcm91dGVyLnB1c2goeyBwYXRoOiBgL2ZpbGVzLyR7ZmlsZS51dWlkfWAgfSlcblx0XHR9LFxuXHR9XG59IiwiaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0Y29tcHV0ZWQ6IHtcblx0XHQuLi5tYXBHZXR0ZXJzKHtcblx0XHRcdHNlbGVjdGVkRGlyZWN0b3JpZXM6ICdmaWxlbWFuYWdlci9nZXRTZWxlY3RlZERpcmVjdG9yaWVzJyxcblx0XHRcdHNlbGVjdGVkRmlsZXM6ICAgICAgICdmaWxlbWFuYWdlci9nZXRTZWxlY3RlZEZpbGVzJyxcblx0XHR9KVxuXHR9LFxuXG5cdG1ldGhvZHM6IHtcbiAgICBcdC4uLm1hcEFjdGlvbnMoe1xuICAgIFx0XHRjbGVhckRpcmVjdG9yeVNlbGVjdGlvbjogJ2ZpbGVtYW5hZ2VyL2NsZWFyRGlyZWN0b3J5U2VsZWN0aW9uJyxcbiAgICBcdFx0c2V0RHJvcHpvbmVWaXNpYmxlOiAgICAgICdmaWxlbWFuYWdlci9zZXREcm9wem9uZVZpc2libGUnLFxuICAgIFx0XHRzZXREcm9wem9uZUVuYWJsZWQ6ICAgICAgJ2ZpbGVtYW5hZ2VyL3NldERyb3B6b25lRW5hYmxlZCcsXG4gICAgXHRcdGNsZWFyRmlsZVNlbGVjdGlvbjogICAgICAnZmlsZW1hbmFnZXIvY2xlYXJGaWxlU2VsZWN0aW9uJyxcbiAgICBcdH0pLFxuXG4gICAgXHRjbGVhclNlbGVjdGlvbnMoKSB7XG4gICAgXHRcdHRoaXMuY2xlYXJGaWxlU2VsZWN0aW9uKClcblx0XHRcdHRoaXMuY2xlYXJEaXJlY3RvcnlTZWxlY3Rpb24oKVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgXHRjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FsbGVyeS1jb250YWluZXInKVxuXG4gICAgXHQvLyBEcmFnIFN0YXJ0XG5cdFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIChldikgPT4ge1xuXHRcdFx0dGhpcy5zZXREcm9wem9uZUVuYWJsZWQoZmFsc2UpXG5cblx0XHRcdC8vIFByZXZlbnQgRHJhZyBCZWhhdmlvciB3aGVuIGVsZW1lbnQgaXMgbm90IHNlbGVjdGVkXG5cdFx0XHRpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZHMtc2VsZWN0ZWQnKSkge1xuXHRcdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdC8vIERyYWcgU3RhcnRcblx0XHRjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIChldikgPT4ge1xuXHRcdFx0dGhpcy5zZXREcm9wem9uZVZpc2libGUoZmFsc2UpXG5cdFx0XHR0aGlzLnNldERyb3B6b25lRW5hYmxlZCh0cnVlKVxuXHRcdFx0ZXYucHJldmVudERlZmF1bHQoKVxuXHRcdH0pXG5cblx0XHQvLyBEcmFnIFdhdGNoXG5cdFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWcnLCAoZXYpID0+IHtcblx0XHRcdGV2LnByZXZlbnREZWZhdWx0KClcblxuXHRcdFx0aWYgKGV2LnNjcmVlblkgPCAxMDApIHtcblx0XHRcdFx0c2Nyb2xsQnkoMCwgLTEpXG5cdFx0XHR9IGVsc2UgaWYgKGV2LnNjcmVlblkgPiB3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMDApIHtcblx0XHRcdFx0c2Nyb2xsQnkoMCwgIDEpXG5cdFx0XHR9XG5cdFx0fSlcblxuXHRcdC8vIERyYWcgRW50ZXJcbiAgICBcdC8vIExvb2tpbmcgdG8gZW50ZXIgYSBEcm9wem9uZSAtIHVuaGlnaHRsaWdodFxuICAgIFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIChldikgPT4ge1xuXHRcdFx0aWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWdnYWJsZS0tZHJvcHpvbmUnKSkge1xuXHRcdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdGV2LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5hZGQoJ2Ryb3B6b25lLS1vdmVyJylcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0Ly8gRHJhZyBPdmVyXG4gICAgXHQvLyBSZXF1aXJlZCBmb3IgYERyb3BgIGV2ZW50XG5cdFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZHJhZ2dhYmxlLS1kcm9wem9uZScpKSB7XG5cdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KClcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0Ly8gRHJhZyBMZWF2ZVxuICAgIFx0Ly8gTGVhdmluZyBhIERyb3B6b25lIC0gdW5oaWdodGxpZ2h0XG5cdFx0Y29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIChldikgPT4ge1xuXHRcdFx0aWYgKGV2LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RyYWdnYWJsZS0tZHJvcHpvbmUnKSkge1xuXHRcdFx0XHRldi5wcmV2ZW50RGVmYXVsdCgpXG5cdFx0XHRcdGV2LnRhcmdldC5wYXJlbnROb2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2Ryb3B6b25lLS1vdmVyJylcblx0XHRcdH1cblx0XHR9KVxuXG5cdFx0Ly8gRHJvcCBFdmVudFxuXHRcdGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgKGV2KSA9PiB7XG5cdFx0XHRpZiAoZXYudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZHJhZ2dhYmxlLS1kcm9wem9uZScpKSB7XG5cdFx0XHRcdGV2LnByZXZlbnREZWZhdWx0KClcblxuXHRcdFx0XHRsZXQgZWxlbWVudCAgID0gZXYudGFyZ2V0LnBhcmVudE5vZGVcblx0XHRcdFx0bGV0IGRyb3B6b25lICA9IHBhcnNlSW50KGVsZW1lbnQuZGF0YXNldC5kcm9wem9uZSlcblx0XHRcdFx0bGV0IHNlbGVjdGlvbiA9IHsgZGlyZWN0b3JpZXM6IHRoaXMuc2VsZWN0ZWREaXJlY3RvcmllcywgZmlsZXM6IHRoaXMuc2VsZWN0ZWRGaWxlcyB9XG5cblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcm9wem9uZS0taGlnaGxpZ2h0Jylcblx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wem9uZS0tb3ZlcicpXG5cblx0XHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0ZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcm9wem9uZS0taGlnaGxpZ2h0Jylcblx0XHRcdFx0fSwgMTUwMClcblxuXHRcdFx0XHR0aGlzLiRlbWl0KCdkcmFnLW4tZHJvcCcsIHsgZHJvcHpvbmUsIHNlbGVjdGlvbiB9KVxuXHRcdFx0XHR0aGlzLmNsZWFyU2VsZWN0aW9ucygpXG5cdFx0XHR9XG5cdFx0fSlcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuXHRmaWx0ZXJzOiB7XG5cdFx0Ynl0ZXModmFsdWUpIHtcblx0XHQgICAgbGV0IHRocmVzaCA9IDEwMDBcblxuXHRcdCAgICBpZiAoTWF0aC5hYnModmFsdWUpIDwgdGhyZXNoKSB7XG5cdFx0ICAgICAgICByZXR1cm4gdmFsdWUgKyAnIEInXG5cdFx0ICAgIH1cblxuXHRcdCAgICBsZXQgaW5kZXggPSAtMVxuXHRcdCAgICBsZXQgdW5pdHMgPSBbJ0tCJywgJ01CJywgJ0dCJywgJ1RCJywgJ1BCJywgJ0VCJywgJ1pCJywgJ1lCJ11cblx0XHQgICAgXG5cdFx0ICAgIGRvIHtcblx0XHQgICAgICAgIHZhbHVlIC89IHRocmVzaFxuXHRcdCAgICAgICAgKytpbmRleFxuXHRcdCAgICB9IHdoaWxlIChNYXRoLmFicyh2YWx1ZSkgPj0gdGhyZXNoICYmIGluZGV4IDwgdW5pdHMubGVuZ3RoIC0gMSlcblxuXHRcdCAgICByZXR1cm4gdmFsdWUudG9GaXhlZCgxKSArICcgJyArIHVuaXRzW2luZGV4XVxuXHRcdH1cblx0fVxufSIsImltcG9ydCBEcmFnU2VsZWN0IGZyb20gJ0RyYWdTZWxlY3QnXG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZWxlY3RvcjogbnVsbCxcblx0XHR9XG5cdH0sXG5cblx0Y29tcHV0ZWQ6IHtcblx0XHQuLi5tYXBHZXR0ZXJzKHtcblx0XHRcdHNlbGVjdGVkRGlyZWN0b3JpZXM6ICdmaWxlbWFuYWdlci9nZXRTZWxlY3RlZERpcmVjdG9yaWVzJyxcblx0XHRcdHNlbGVjdGVkRmlsZXM6ICAgICAgICdmaWxlbWFuYWdlci9nZXRTZWxlY3RlZEZpbGVzJyxcblx0XHRcdGhhc1NlbGVjdGlvbjogICAgICAgICdmaWxlbWFuYWdlci9oYXNTZWxlY3Rpb24nLFxuXHRcdFx0bG9hZGluZzogICAgICAgICAgICAgJ2ZpbGVtYW5hZ2VyL2dldExvYWRpbmcnLFxuXHRcdH0pXG5cdH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgXHQuLi5tYXBBY3Rpb25zKHtcbiAgICAgICAgICAgIHRvZ2dsZURpcmVjdG9yeVNlbGVjdGlvbjogJ2ZpbGVtYW5hZ2VyL3RvZ2dsZURpcmVjdG9yeVNlbGVjdGlvbicsXG4gICAgICAgICAgICBjbGVhckRpcmVjdG9yeVNlbGVjdGlvbjogICdmaWxlbWFuYWdlci9jbGVhckRpcmVjdG9yeVNlbGVjdGlvbicsXG4gICAgICAgICAgICB0b2dnbGVGaWxlU2VsZWN0aW9uOiAgICAgICdmaWxlbWFuYWdlci90b2dnbGVGaWxlU2VsZWN0aW9uJyxcbiAgICAgICAgICAgIGNsZWFyRmlsZVNlbGVjdGlvbjogICAgICAgJ2ZpbGVtYW5hZ2VyL2NsZWFyRmlsZVNlbGVjdGlvbicsXG4gICAgICAgIH0pLFxuXG4gICAgICAgIGNsZWFyU2VsZWN0aW9ucygpIHtcbiAgICBcdFx0dGhpcy5jbGVhckZpbGVTZWxlY3Rpb24oKVxuXHRcdFx0dGhpcy5jbGVhckRpcmVjdG9yeVNlbGVjdGlvbigpXG4gICAgICAgIH0sXG5cblx0XHRsb2FkU2VsZWN0b3IoYXJlYSkge1xuXHRcdFx0dGhpcy5zZWxlY3RvciA9IG5ldyBEcmFnU2VsZWN0KHtcblx0XHRcdFx0YXJlYTogYXJlYSxcblx0XHRcdFx0c2VsZWN0YWJsZXM6IGFyZWEucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGFibGUnKSxcblx0XHRcdFx0Y2FsbGJhY2s6IChlbGVtZW50cykgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY2xlYXJTZWxlY3Rpb25zKClcblxuXHRcdFx0XHRcdF8uZm9yRWFjaChlbGVtZW50cywgKGVsKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoZWwuZGF0YXNldC5zZWxlY3Rpb24pIHtcblx0XHRcdFx0XHRcdFx0dGhpcy50b2dnbGVGaWxlU2VsZWN0aW9uKHBhcnNlSW50KGVsLmRhdGFzZXQuc2VsZWN0aW9uKSlcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZWwuZGF0YXNldC5kcm9wem9uZSkge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnRvZ2dsZURpcmVjdG9yeVNlbGVjdGlvbihwYXJzZUludChlbC5kYXRhc2V0LmRyb3B6b25lKSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIFN0YXJ0IGRyYWdnaW5nIHNlbGVjdG9yLi5cblx0XHRcdFx0b25EcmFnU3RhcnQ6IChlbCkgPT4ge1xuXHRcdFx0XHRcdC8vIFByZXZlbnQgc2VsZWN0b3IgZnJvbSBzZWxlY3Rpbmdcblx0XHRcdFx0XHRpZiAoZWwudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0YWJsZS0tc2VsZWN0ZWQnKSB8fCBlbC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdGFibGUtLXNlbGVjdGVkJykpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0b3IuYnJlYWsoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdH0pXG5cdFx0fSxcblxuXHRcdGRlc3Ryb3lTZWxlY3RvcigpIHtcblx0XHRcdGlmICh0aGlzLnNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0b3Iuc3RvcCgpXG5cdFx0XHR9XG5cdFx0fVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9