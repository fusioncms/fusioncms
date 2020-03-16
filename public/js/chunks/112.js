(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[112],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/Role.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserManager/Actions/Role.vue?vue&type=script&lang=js& ***!
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
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'user-manager-role-action',
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    role: 'usermanager/getRole',
    roles: 'usermanager/getRoles'
  }), {
    options: function options() {
      var options = {};

      _.forEach(this.roles, function (role) {
        options[role.slug] = role.name;
      });

      return options;
    }
  }),
  watch: {
    role: function role(value) {
      this.fetchUsers();
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchUsers: 'usermanager/fetchUsers',
    setRole: 'usermanager/setRole'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/Search.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserManager/Actions/Search.vue?vue&type=script&lang=js& ***!
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
  name: 'user-manager-search-action',
  computed: {
    search: {
      get: function get() {
        return this.$store.state.usermanager.search;
      },
      set: function set(value) {
        this.setSearch(value);
      }
    }
  },
  watch: {
    search: function search(value) {
      this.fetchUsers();
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchUsers: 'usermanager/fetchUsers',
    setSearch: 'usermanager/setSearch'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/Sort.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserManager/Actions/Sort.vue?vue&type=script&lang=js& ***!
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
  name: 'user-manager-sort-action',
  data: function data() {
    return {
      options: {
        id: 'ID',
        name: 'Name',
        email: 'Email',
        created_at: 'Creation Date'
      }
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    direction: 'usermanager/getDirection',
    sort: 'usermanager/getSort'
  })),
  watch: {
    direction: function direction(value) {
      this.fetchUsers();
    },
    sort: function sort(value) {
      this.fetchUsers();
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    toggleDirection: 'usermanager/toggleDirection',
    fetchUsers: 'usermanager/fetchUsers',
    setDirection: 'usermanager/setDirection',
    setSort: 'usermanager/setSort'
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/View.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserManager/Actions/View.vue?vue&type=script&lang=js& ***!
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
  name: 'user-manager-view-action',
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    view: 'usermanager/getView'
  })),
  watch: {
    view: function view(value) {
      this.fetchUsers();
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchUsers: 'usermanager/fetchUsers',
    toggleView: 'usermanager/toggleView'
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Browse/User.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserManager/Browse/User.vue?vue&type=script&lang=js& ***!
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'user-manager-user',
  props: {
    user: {
      type: Object,
      required: true
    },
    isSelectable: {
      type: Boolean,
      "default": true
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    selected: 'usermanager/getSelected',
    view: 'usermanager/getView'
  }), {
    isSelected: function isSelected() {
      return _.includes(this.selected, this.user.id);
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Selection.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserManager/Selection.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/User/Field.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/User/Field.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_UserManager_Browse_User_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/UserManager/Browse/User.vue */ "./resources/js/components/UserManager/Browse/User.vue");
/* harmony import */ var _components_UserManager_Selection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/UserManager/Selection.vue */ "./resources/js/components/UserManager/Selection.vue");
/* harmony import */ var _components_UserManager_Actions_Role_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/UserManager/Actions/Role.vue */ "./resources/js/components/UserManager/Actions/Role.vue");
/* harmony import */ var _components_UserManager_Actions_Search_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/UserManager/Actions/Search.vue */ "./resources/js/components/UserManager/Actions/Search.vue");
/* harmony import */ var _components_UserManager_Actions_Sort_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/UserManager/Actions/Sort.vue */ "./resources/js/components/UserManager/Actions/Sort.vue");
/* harmony import */ var _components_UserManager_Actions_View_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/UserManager/Actions/View.vue */ "./resources/js/components/UserManager/Actions/View.vue");
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







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'user-fieldtype',
  components: {
    'user-card': _components_UserManager_Browse_User_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'user-selection': _components_UserManager_Selection_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'role-action': _components_UserManager_Actions_Role_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'search-action': _components_UserManager_Actions_Search_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    'sort-action': _components_UserManager_Actions_Sort_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    'view-action': _components_UserManager_Actions_View_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  mixins: [__webpack_require__(/*! ../../mixins/userselector */ "./resources/js/mixins/userselector.js")["default"]],
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
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    loading: 'usermanager/getLoading',
    users: 'usermanager/getUsers'
  }), {
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
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchUsers: 'usermanager/fetchUsers'
  }), {
    push: function push() {
      var _this2 = this;

      _.forEach(this.selectedUsers, function (id) {
        return _this2.add(id);
      });
    },
    add: function add(id) {
      if (this.addLimit > 0) {
        var exists = _.find(this.selection, ['id', id]);

        var user = _.find(this.users, ['id', id]);

        if (!exists) {
          this.selection.push(user);
        }
      }
    },
    open: function open() {
      this.fetchUsers();
      this.selection = _toConsumableArray(this.selected);
      this.requestOpen = true;
    },
    close: function close() {
      this.clearSelection();
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/Role.vue?vue&type=template&id=1b7b7300&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserManager/Actions/Role.vue?vue&type=template&id=1b7b7300& ***!
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
        attrs: { icon: ["fas", "user-tag"] }
      }),
      _vm._v("\n\t" + _vm._s(_vm.options[_vm.role]) + "\n\t\n\t"),
      _c(
        "template",
        { slot: "options" },
        [
          _c(
            "p-dropdown-item",
            {
              staticClass: "w-48",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.setRole(null)
                }
              }
            },
            [_vm._v("Everyone")]
          ),
          _vm._v(" "),
          _vm._l(_vm.options, function(role, key) {
            return _c(
              "p-dropdown-item",
              {
                key: key,
                staticClass: "w-48",
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.setRole(key)
                  }
                }
              },
              [_vm._v("\n\t\t\t" + _vm._s(role) + "\n\t\t")]
            )
          })
        ],
        2
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/Search.vue?vue&type=template&id=32d10a9c&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserManager/Actions/Search.vue?vue&type=template&id=32d10a9c& ***!
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
  return _c("p-input", {
    attrs: { name: "search", placeholder: "Search" },
    model: {
      value: _vm.search,
      callback: function($$v) {
        _vm.search = $$v
      },
      expression: "search"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/Sort.vue?vue&type=template&id=e325d7b0&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserManager/Actions/Sort.vue?vue&type=template&id=e325d7b0& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/View.vue?vue&type=template&id=72a67daf&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserManager/Actions/View.vue?vue&type=template&id=72a67daf& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Browse/User.vue?vue&type=template&id=e3318e30&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserManager/Browse/User.vue?vue&type=template&id=e3318e30& ***!
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
          attrs: { "data-selection": _vm.user.id },
          on: {
            dblclick: function($event) {
              return _vm.$emit("dblclick")
            }
          }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "h-full w-full text-gray-300 flex items-center justify-center"
            },
            [
              _c("fa-icon", {
                staticClass: "fa-fw",
                class: [_vm.view == "grid" ? "fa-3x" : "fa-2x"],
                attrs: { icon: ["fas", "user"] }
              })
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "gallery-subtitle" }, [
        _c("span", [_vm._v(_vm._s(_vm.user.name))])
      ]),
      _vm._v(" "),
      _vm.view == "list"
        ? _c("div", { staticClass: "gallery-text" }, [
            _vm.user.roles.length
              ? _c("span", [_vm._v(_vm._s(_vm.user.roles[0].name))])
              : _c("span", [_vm._v("--")])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.view == "list"
        ? _c("div", { staticClass: "gallery-text" }, [
            _vm._v(
              "\n\t\t\t" +
                _vm._s(
                  _vm.$moment(_vm.user.created_at).format("MMM Do, YYYY")
                ) +
                "\n\t\t"
            )
          ])
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Selection.vue?vue&type=template&id=2f469c24&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/UserManager/Selection.vue?vue&type=template&id=2f469c24& ***!
  \************************************************************************************************************************************************************************************************************************/
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
                  _vm._l(_vm.selection, function(item) {
                    return _c("p-sortable-item", { key: item.id }, [
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
                          {
                            staticClass:
                              "h-full w-3/12 text-gray-300 flex items-center justify-center"
                          },
                          [
                            _c("fa-icon", {
                              staticClass: "fa-fw fa-2x",
                              attrs: { icon: ["fas", "user"] }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "gallery-text w-6/12" }, [
                          _c("div", [_vm._v(_vm._s(item.name))])
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
                                    return _vm.remove(item.id)
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
                  [_vm._v("\n\t\t\tSelection limit reached\n\t\t")]
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
              attrs: { icon: ["fas", "users"] }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "text-lg py-2 text-gray-500" }, [
              _vm._v("Select some users...")
            ])
          ],
          1
        )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/User/Field.vue?vue&type=template&id=4a887110&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/User/Field.vue?vue&type=template&id=4a887110& ***!
  \*************************************************************************************************************************************************************************************************************/
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
                  _vm._v(" Manage Users\n\t\t\t\t")
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("user-selection", {
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
            name: "user-manager",
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
            _c(
              "div",
              { staticClass: "side-container" },
              [
                _c("user-selection", {
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
                      _c("li", { staticClass: "mr-2" }, [_c("role-action")], 1),
                      _vm._v(" "),
                      _c("li", { staticClass: "mr-2" }, [_c("sort-action")], 1),
                      _vm._v(" "),
                      _c("li", { staticClass: "mr-2" }, [_c("view-action")], 1)
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "gallery-container selectables" }, [
                  _c(
                    "div",
                    { staticClass: "gallery border-b border-gray-200 pb-2" },
                    _vm._l(_vm.users, function(user) {
                      return _c("user-card", {
                        key: user.id,
                        attrs: { user: user },
                        on: {
                          dblclick: function($event) {
                            return _vm.add(user.id)
                          }
                        }
                      })
                    }),
                    1
                  )
                ])
              ])
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

/***/ "./resources/js/components/UserManager/Actions/Role.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/UserManager/Actions/Role.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Role_vue_vue_type_template_id_1b7b7300___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Role.vue?vue&type=template&id=1b7b7300& */ "./resources/js/components/UserManager/Actions/Role.vue?vue&type=template&id=1b7b7300&");
/* harmony import */ var _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Role.vue?vue&type=script&lang=js& */ "./resources/js/components/UserManager/Actions/Role.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Role_vue_vue_type_template_id_1b7b7300___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Role_vue_vue_type_template_id_1b7b7300___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UserManager/Actions/Role.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserManager/Actions/Role.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/UserManager/Actions/Role.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Role.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/Role.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserManager/Actions/Role.vue?vue&type=template&id=1b7b7300&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/UserManager/Actions/Role.vue?vue&type=template&id=1b7b7300& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_1b7b7300___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Role.vue?vue&type=template&id=1b7b7300& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/Role.vue?vue&type=template&id=1b7b7300&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_1b7b7300___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_1b7b7300___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UserManager/Actions/Search.vue":
/*!****************************************************************!*\
  !*** ./resources/js/components/UserManager/Actions/Search.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search_vue_vue_type_template_id_32d10a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=32d10a9c& */ "./resources/js/components/UserManager/Actions/Search.vue?vue&type=template&id=32d10a9c&");
/* harmony import */ var _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js& */ "./resources/js/components/UserManager/Actions/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Search_vue_vue_type_template_id_32d10a9c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Search_vue_vue_type_template_id_32d10a9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UserManager/Actions/Search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserManager/Actions/Search.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/UserManager/Actions/Search.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserManager/Actions/Search.vue?vue&type=template&id=32d10a9c&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/UserManager/Actions/Search.vue?vue&type=template&id=32d10a9c& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_32d10a9c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=template&id=32d10a9c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/Search.vue?vue&type=template&id=32d10a9c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_32d10a9c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_32d10a9c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UserManager/Actions/Sort.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/UserManager/Actions/Sort.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sort_vue_vue_type_template_id_e325d7b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sort.vue?vue&type=template&id=e325d7b0& */ "./resources/js/components/UserManager/Actions/Sort.vue?vue&type=template&id=e325d7b0&");
/* harmony import */ var _Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sort.vue?vue&type=script&lang=js& */ "./resources/js/components/UserManager/Actions/Sort.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sort_vue_vue_type_template_id_e325d7b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sort_vue_vue_type_template_id_e325d7b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UserManager/Actions/Sort.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserManager/Actions/Sort.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/UserManager/Actions/Sort.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sort.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/Sort.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserManager/Actions/Sort.vue?vue&type=template&id=e325d7b0&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/UserManager/Actions/Sort.vue?vue&type=template&id=e325d7b0& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_template_id_e325d7b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sort.vue?vue&type=template&id=e325d7b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/Sort.vue?vue&type=template&id=e325d7b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_template_id_e325d7b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_template_id_e325d7b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UserManager/Actions/View.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/UserManager/Actions/View.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_72a67daf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=72a67daf& */ "./resources/js/components/UserManager/Actions/View.vue?vue&type=template&id=72a67daf&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/UserManager/Actions/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_72a67daf___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_72a67daf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UserManager/Actions/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserManager/Actions/View.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/UserManager/Actions/View.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserManager/Actions/View.vue?vue&type=template&id=72a67daf&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/UserManager/Actions/View.vue?vue&type=template&id=72a67daf& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_72a67daf___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=72a67daf& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Actions/View.vue?vue&type=template&id=72a67daf&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_72a67daf___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_72a67daf___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UserManager/Browse/User.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/UserManager/Browse/User.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_vue_vue_type_template_id_e3318e30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=e3318e30& */ "./resources/js/components/UserManager/Browse/User.vue?vue&type=template&id=e3318e30&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/components/UserManager/Browse/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_e3318e30___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_vue_vue_type_template_id_e3318e30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UserManager/Browse/User.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserManager/Browse/User.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/UserManager/Browse/User.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Browse/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserManager/Browse/User.vue?vue&type=template&id=e3318e30&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/UserManager/Browse/User.vue?vue&type=template&id=e3318e30& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_e3318e30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=template&id=e3318e30& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Browse/User.vue?vue&type=template&id=e3318e30&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_e3318e30___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_e3318e30___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/UserManager/Selection.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/UserManager/Selection.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Selection_vue_vue_type_template_id_2f469c24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selection.vue?vue&type=template&id=2f469c24& */ "./resources/js/components/UserManager/Selection.vue?vue&type=template&id=2f469c24&");
/* harmony import */ var _Selection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Selection.vue?vue&type=script&lang=js& */ "./resources/js/components/UserManager/Selection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Selection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Selection_vue_vue_type_template_id_2f469c24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Selection_vue_vue_type_template_id_2f469c24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/UserManager/Selection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/UserManager/Selection.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/UserManager/Selection.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Selection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Selection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/UserManager/Selection.vue?vue&type=template&id=2f469c24&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/UserManager/Selection.vue?vue&type=template&id=2f469c24& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_template_id_2f469c24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Selection.vue?vue&type=template&id=2f469c24& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/UserManager/Selection.vue?vue&type=template&id=2f469c24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_template_id_2f469c24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_template_id_2f469c24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/fieldtypes/User/Field.vue":
/*!************************************************!*\
  !*** ./resources/js/fieldtypes/User/Field.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_4a887110___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=4a887110& */ "./resources/js/fieldtypes/User/Field.vue?vue&type=template&id=4a887110&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/User/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_4a887110___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_4a887110___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/User/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/User/Field.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/fieldtypes/User/Field.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/User/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/User/Field.vue?vue&type=template&id=4a887110&":
/*!*******************************************************************************!*\
  !*** ./resources/js/fieldtypes/User/Field.vue?vue&type=template&id=4a887110& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_4a887110___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=4a887110& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/User/Field.vue?vue&type=template&id=4a887110&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_4a887110___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_4a887110___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/userselector.js":
/*!*********************************************!*\
  !*** ./resources/js/mixins/userselector.js ***!
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
    selectedUsers: 'usermanager/getSelected'
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    toggleSelection: 'usermanager/toggleSelection',
    clearSelection: 'usermanager/clearSelection'
  }), {
    loadSelector: function loadSelector(area) {
      var _this = this;

      this.selector = new DragSelect__WEBPACK_IMPORTED_MODULE_0___default.a({
        area: area,
        selectables: area.querySelectorAll('.selectable'),
        callback: function callback(elements) {
          _this.clearSelection();

          _.forEach(elements, function (el) {
            return _this.toggleSelection(parseInt(el.dataset.selection));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvQWN0aW9ucy9Sb2xlLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvQWN0aW9ucy9TZWFyY2gudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Vc2VyTWFuYWdlci9BY3Rpb25zL1NvcnQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Vc2VyTWFuYWdlci9BY3Rpb25zL1ZpZXcudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Vc2VyTWFuYWdlci9Ccm93c2UvVXNlci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1VzZXJNYW5hZ2VyL1NlbGVjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL1VzZXIvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1VzZXJNYW5hZ2VyL0FjdGlvbnMvUm9sZS52dWU/MWY3MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Vc2VyTWFuYWdlci9BY3Rpb25zL1NlYXJjaC52dWU/M2ViOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Vc2VyTWFuYWdlci9BY3Rpb25zL1NvcnQudnVlPzg3MGYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvQWN0aW9ucy9WaWV3LnZ1ZT83NzVjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1VzZXJNYW5hZ2VyL0Jyb3dzZS9Vc2VyLnZ1ZT84Mzg2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1VzZXJNYW5hZ2VyL1NlbGVjdGlvbi52dWU/MDgyZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Vc2VyL0ZpZWxkLnZ1ZT9lMzE1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1VzZXJNYW5hZ2VyL0FjdGlvbnMvUm9sZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvQWN0aW9ucy9Sb2xlLnZ1ZT8wZThhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1VzZXJNYW5hZ2VyL0FjdGlvbnMvUm9sZS52dWU/MGNlMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Vc2VyTWFuYWdlci9BY3Rpb25zL1NlYXJjaC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvQWN0aW9ucy9TZWFyY2gudnVlP2IxMjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvQWN0aW9ucy9TZWFyY2gudnVlPzkxNzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvQWN0aW9ucy9Tb3J0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Vc2VyTWFuYWdlci9BY3Rpb25zL1NvcnQudnVlPzFjNjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvQWN0aW9ucy9Tb3J0LnZ1ZT9kZTA4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1VzZXJNYW5hZ2VyL0FjdGlvbnMvVmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvQWN0aW9ucy9WaWV3LnZ1ZT9kN2JlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL1VzZXJNYW5hZ2VyL0FjdGlvbnMvVmlldy52dWU/NGFmZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Vc2VyTWFuYWdlci9Ccm93c2UvVXNlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvQnJvd3NlL1VzZXIudnVlPzc4M2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvQnJvd3NlL1VzZXIudnVlP2IzZGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvU2VsZWN0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9Vc2VyTWFuYWdlci9TZWxlY3Rpb24udnVlPzNmNDkiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvU2VsZWN0aW9uLnZ1ZT9iMThmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL1VzZXIvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL1VzZXIvRmllbGQudnVlP2JiZGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvVXNlci9GaWVsZC52dWU/Mjk2YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL3VzZXJzZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic2VsZWN0b3IiLCJjb21wdXRlZCIsIm1hcEdldHRlcnMiLCJzZWxlY3RlZFVzZXJzIiwibWV0aG9kcyIsIm1hcEFjdGlvbnMiLCJ0b2dnbGVTZWxlY3Rpb24iLCJjbGVhclNlbGVjdGlvbiIsImxvYWRTZWxlY3RvciIsImFyZWEiLCJEcmFnU2VsZWN0Iiwic2VsZWN0YWJsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FsbGJhY2siLCJlbGVtZW50cyIsIl8iLCJmb3JFYWNoIiwiZWwiLCJwYXJzZUludCIsImRhdGFzZXQiLCJzZWxlY3Rpb24iLCJvbkRyYWdTdGFydCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY2xvc2VzdCIsImRlc3Ryb3lTZWxlY3RvciIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUVBO0FBQ0Esa0NBREE7QUFHQSw4QkFDQTtBQUNBLCtCQURBO0FBRUE7QUFGQSxJQURBO0FBTUEsV0FOQSxxQkFNQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUZBOztBQUlBO0FBQ0E7QUFkQSxJQUhBO0FBb0JBO0FBQ0EsUUFEQSxnQkFDQSxLQURBLEVBQ0E7QUFDQTtBQUNBO0FBSEEsR0FwQkE7QUEwQkEsNkJBQ0E7QUFDQSx3Q0FEQTtBQUVBO0FBRkEsSUFEQTtBQTFCQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUVBO0FBQ0Esb0NBREE7QUFHQTtBQUNBO0FBQ0EsU0FEQSxpQkFDQTtBQUNBO0FBQ0EsT0FIQTtBQUtBLFNBTEEsZUFLQSxLQUxBLEVBS0E7QUFDQTtBQUNBO0FBUEE7QUFEQSxHQUhBO0FBZUE7QUFDQSxVQURBLGtCQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0E7QUFIQSxHQWZBO0FBcUJBLDZCQUNBO0FBQ0Esd0NBREE7QUFFQTtBQUZBLElBREE7QUFyQkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1FBO0FBRUE7QUFDQSxrQ0FEQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxvQkFGQTtBQUdBLHNCQUhBO0FBSUE7QUFKQTtBQURBO0FBUUEsR0FaQTtBQWNBLDhCQUNBO0FBQ0EseUNBREE7QUFFQTtBQUZBLElBREEsQ0FkQTtBQXFCQTtBQUNBLGFBREEscUJBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBS0EsUUFMQSxnQkFLQSxLQUxBLEVBS0E7QUFDQTtBQUNBO0FBUEEsR0FyQkE7QUErQkEsNkJBQ0E7QUFDQSxrREFEQTtBQUVBLHdDQUZBO0FBR0EsNENBSEE7QUFJQTtBQUpBLElBREE7QUFRQSxVQVJBLGtCQVFBLEdBUkEsRUFRQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWZBO0FBaUJBLFlBakJBLG9CQWlCQSxHQWpCQSxFQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkEsTUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBM0JBO0FBL0JBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFFQTtBQUNBLGtDQURBO0FBR0EsOEJBQ0E7QUFDQTtBQURBLElBREEsQ0FIQTtBQVNBO0FBQ0EsUUFEQSxnQkFDQSxLQURBLEVBQ0E7QUFDQTtBQUNBO0FBSEEsR0FUQTtBQWVBLDZCQUNBO0FBQ0Esd0NBREE7QUFFQTtBQUZBLElBREE7QUFmQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNjQTtBQUVBO0FBQ0EsMkJBREE7QUFHQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLG1CQURBO0FBRUE7QUFGQTtBQU5BLEdBSEE7QUFlQSw4QkFDQTtBQUNBLHVDQURBO0FBRUE7QUFGQSxJQURBO0FBTUEsY0FOQSx3QkFNQTtBQUNBO0FBQ0E7QUFSQTtBQWZBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYUE7QUFDQTtBQUNBO0FBQ0EsU0FEQSxpQkFDQTtBQUNBO0FBQ0EsT0FIQTtBQUtBLFNBTEEsZUFLQSxLQUxBLEVBS0E7QUFDQTtBQUNBO0FBUEEsS0FEQTtBQVdBLFlBWEEsc0JBV0E7QUFDQTtBQUNBO0FBYkEsR0FEQTtBQWlCQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQU5BO0FBV0E7QUFDQSxtQkFEQTtBQUVBO0FBRkE7QUFYQSxHQWpCQTtBQWtDQTtBQUNBLFVBREEsa0JBQ0EsRUFEQSxFQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFIQTtBQWxDQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN5QkE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLHdCQURBO0FBR0E7QUFDQSxnR0FEQTtBQUVBLG1HQUZBO0FBR0EsbUdBSEE7QUFJQSx1R0FKQTtBQUtBLG1HQUxBO0FBTUE7QUFOQSxHQUhBO0FBWUEsV0FDQSx3R0FEQSxDQVpBO0FBZ0JBLE1BaEJBLGtCQWdCQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSxzQkFGQTtBQUdBO0FBSEE7QUFLQSxHQXRCQTtBQXdCQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLGlCQURBO0FBRUEscUJBRkE7QUFHQTtBQUFBO0FBQUE7QUFIQTtBQU5BLEdBeEJBO0FBcUNBO0FBQ0EsV0FEQSxtQkFDQSxTQURBLEVBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FYQTtBQVlBO0FBZEEsR0FyQ0E7QUFzREEsOEJBQ0E7QUFDQSxxQ0FEQTtBQUVBO0FBRkEsSUFEQTtBQU1BO0FBQ0EsU0FEQSxpQkFDQTtBQUNBO0FBQ0EsT0FIQTtBQUtBLFNBTEEsZUFLQSxLQUxBLEVBS0E7QUFDQTtBQUNBO0FBUEEsS0FOQTtBQWdCQSxrQkFoQkEsNEJBZ0JBO0FBQ0E7QUFDQSxLQWxCQTtBQW9CQSxZQXBCQSxzQkFvQkE7QUFDQTtBQUNBO0FBdEJBLElBdERBO0FBK0VBLDZCQUNBO0FBQ0E7QUFEQSxJQURBO0FBS0EsUUFMQSxrQkFLQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUNBLEtBUEE7QUFTQSxPQVRBLGVBU0EsRUFUQSxFQVNBO0FBQ0E7QUFDQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBbEJBO0FBb0JBLFFBcEJBLGtCQW9CQTtBQUNBO0FBRUE7QUFDQTtBQUNBLEtBekJBO0FBMkJBLFNBM0JBLG1CQTJCQTtBQUNBO0FBRUE7QUFDQTtBQUNBLEtBaENBO0FBa0NBLFVBbENBLG9CQWtDQTtBQUNBO0FBQ0EsS0FwQ0E7QUFzQ0EsVUF0Q0Esb0JBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBekNBO0FBL0VBLEc7Ozs7Ozs7Ozs7OztBQy9FQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVMsa0JBQWtCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3Q0FBd0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUyxrQkFBa0I7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyw2QkFBNkI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrQkFBK0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQiwrQkFBK0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsa0JBQWtCLGdDQUFnQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGtDQUFrQztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw4QkFBOEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsOEJBQThCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDZCQUE2QjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdCQUFnQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBLGtEQUFrRCxlQUFlO0FBQ2pFLGlDQUFpQyx3Q0FBd0M7QUFDekU7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0I7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDZCQUE2QjtBQUM1RDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0M7QUFDdEMsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLHFDQUFxQztBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLG1DQUFtQztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxrQkFBa0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNERBQTREO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGFBQWE7QUFDYjtBQUNBLHdCQUF3Qiw0Q0FBNEM7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JMQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHFDQUFxQyx3QkFBd0IsRUFBRTtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxrREFBa0Q7QUFDM0Q7QUFDQTtBQUNBO0FBQ0EsYUFBYSx1QkFBdUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsNEJBQTRCO0FBQ3RELHVCQUF1QjtBQUN2QixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw4Q0FBOEM7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBLGVBQWUsZ0NBQWdDO0FBQy9DO0FBQ0E7QUFDQSwwQkFBMEIsNEJBQTRCO0FBQ3RELHVCQUF1Qix5Q0FBeUM7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixtQ0FBbUM7QUFDMUQseUJBQXlCLHNCQUFzQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixzQkFBc0I7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsbUJBQW1CO0FBQ3pELG1DQUFtQztBQUNuQyw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsNkJBQTZCO0FBQzNEO0FBQ0E7QUFDQSx5QkFBeUIsNkJBQTZCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0JBQXNCO0FBQ3BELGdDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQSxnQ0FBZ0Msc0JBQXNCO0FBQ3REO0FBQ0EsZ0NBQWdDLHNCQUFzQjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwrQ0FBK0M7QUFDMUU7QUFDQTtBQUNBLHFCQUFxQix1REFBdUQ7QUFDNUU7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGFBQWE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5S0E7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWdNLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXFGO0FBQzNCO0FBQ0w7OztBQUdyRDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw0RUFBTTtBQUNSLEVBQUUsaUZBQU07QUFDUixFQUFFLDBGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFrTSxDQUFnQixrUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F0TjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBZ00sQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBcE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWdNLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXBOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQW1GO0FBQzNCO0FBQ0w7OztBQUduRDtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFnTSxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUF3RjtBQUMzQjtBQUNMOzs7QUFHeEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLG9GQUFNO0FBQ1IsRUFBRSw2RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBK0wsQ0FBZ0IscVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRWU7QUFDZEEsTUFEYyxrQkFDUDtBQUNOLFdBQU87QUFDTkMsY0FBUSxFQUFFO0FBREosS0FBUDtBQUdBLEdBTGE7QUFPZEMsVUFBUSxvQkFDSkMsdURBQVUsQ0FBQztBQUNiQyxpQkFBYSxFQUFFO0FBREYsR0FBRCxDQUROLENBUE07QUFhWEMsU0FBTyxvQkFDSEMsdURBQVUsQ0FBQztBQUNQQyxtQkFBZSxFQUFFLDZCQURWO0FBRVBDLGtCQUFjLEVBQUc7QUFGVixHQUFELENBRFA7QUFNVEMsZ0JBTlMsd0JBTUlDLElBTkosRUFNVTtBQUFBOztBQUNsQixXQUFLVCxRQUFMLEdBQWdCLElBQUlVLGlEQUFKLENBQWU7QUFDOUJELFlBQUksRUFBRUEsSUFEd0I7QUFFOUJFLG1CQUFXLEVBQUVGLElBQUksQ0FBQ0csZ0JBQUwsQ0FBc0IsYUFBdEIsQ0FGaUI7QUFHOUJDLGdCQUFRLEVBQUUsa0JBQUNDLFFBQUQsRUFBYztBQUN2QixlQUFJLENBQUNQLGNBQUw7O0FBRUFRLFdBQUMsQ0FBQ0MsT0FBRixDQUFVRixRQUFWLEVBQW9CLFVBQUNHLEVBQUQ7QUFBQSxtQkFBUSxLQUFJLENBQUNYLGVBQUwsQ0FBcUJZLFFBQVEsQ0FBQ0QsRUFBRSxDQUFDRSxPQUFILENBQVdDLFNBQVosQ0FBN0IsQ0FBUjtBQUFBLFdBQXBCO0FBQ0EsU0FQNkI7QUFTOUI7QUFDQUMsbUJBQVcsRUFBRSxxQkFBQ0osRUFBRCxFQUFRO0FBQ3BCO0FBQ0EsY0FBSUEsRUFBRSxDQUFDSyxNQUFILENBQVVDLFNBQVYsQ0FBb0JDLFFBQXBCLENBQTZCLHNCQUE3QixLQUF3RFAsRUFBRSxDQUFDSyxNQUFILENBQVVHLE9BQVYsQ0FBa0IsdUJBQWxCLENBQTVELEVBQXdHO0FBQ3ZHLGlCQUFJLENBQUN6QixRQUFMO0FBQ0E7QUFDRDtBQWY2QixPQUFmLENBQWhCO0FBaUJBLEtBeEJRO0FBMEJUMEIsbUJBMUJTLDZCQTBCUztBQUNqQixVQUFJLEtBQUsxQixRQUFULEVBQW1CO0FBQ2xCLGFBQUtBLFFBQUwsQ0FBYzJCLElBQWQ7QUFDQTtBQUNEO0FBOUJRO0FBYkksQ0FBZixFIiwiZmlsZSI6ImpzL2NodW5rcy8xMTIuanM/aWQ9YzdjMzY4YmEzY2U5MjFiZTA5ODQiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxwLWRyb3Bkb3duPlxuXHRcdDxmYS1pY29uIGNsYXNzPVwiZmEtZncgbXItMVwiIDppY29uPVwiWydmYXMnLCAndXNlci10YWcnXVwiPjwvZmEtaWNvbj5cblx0XHR7eyBvcHRpb25zW3JvbGVdIH19XG5cdFx0XG5cdFx0PHRlbXBsYXRlIHNsb3Q9XCJvcHRpb25zXCI+XG5cdFx0XHQ8cC1kcm9wZG93bi1pdGVtIGNsYXNzPVwidy00OFwiIEBjbGljay5wcmV2ZW50PVwic2V0Um9sZShudWxsKVwiPkV2ZXJ5b25lPC9wLWRyb3Bkb3duLWl0ZW0+XG5cblx0XHRcdDxwLWRyb3Bkb3duLWl0ZW0gdi1mb3I9XCIocm9sZSwga2V5KSBpbiBvcHRpb25zXCIgY2xhc3M9XCJ3LTQ4XCIgOmtleT1cImtleVwiIEBjbGljay5wcmV2ZW50PVwic2V0Um9sZShrZXkpXCI+XG5cdFx0XHRcdHt7IHJvbGUgfX1cblx0XHRcdDwvcC1kcm9wZG93bi1pdGVtPlxuXHRcdDwvdGVtcGxhdGU+XG5cdDwvcC1kcm9wZG93bj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAndXNlci1tYW5hZ2VyLXJvbGUtYWN0aW9uJyxcblxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHQuLi5tYXBHZXR0ZXJzKHtcblx0XHRcdFx0cm9sZTogICd1c2VybWFuYWdlci9nZXRSb2xlJyxcblx0XHRcdFx0cm9sZXM6ICd1c2VybWFuYWdlci9nZXRSb2xlcycsXHRcdFx0XG5cdFx0XHR9KSxcblxuXHRcdFx0b3B0aW9ucygpIHtcblx0XHRcdFx0bGV0IG9wdGlvbnMgPSB7fVxuXG5cdFx0XHRcdF8uZm9yRWFjaCh0aGlzLnJvbGVzLCAocm9sZSkgPT4ge1xuXHRcdFx0XHRcdG9wdGlvbnNbcm9sZS5zbHVnXSA9IHJvbGUubmFtZVxuXHRcdFx0XHR9KVxuXG5cdFx0XHRcdHJldHVybiBvcHRpb25zXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHRyb2xlKHZhbHVlKSB7XG5cdFx0XHRcdHRoaXMuZmV0Y2hVc2VycygpXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC4uLm1hcEFjdGlvbnMoe1xuXHRcdFx0XHRmZXRjaFVzZXJzOiAndXNlcm1hbmFnZXIvZmV0Y2hVc2VycycsXG5cdFx0XHRcdHNldFJvbGU6ICAgICd1c2VybWFuYWdlci9zZXRSb2xlJyxcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxwLWlucHV0IG5hbWU9XCJzZWFyY2hcIiBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiIHYtbW9kZWw9XCJzZWFyY2hcIj48L3AtaW5wdXQ+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ3VzZXItbWFuYWdlci1zZWFyY2gtYWN0aW9uJyxcblxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5zdGF0ZS51c2VybWFuYWdlci5zZWFyY2hcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgXHR0aGlzLnNldFNlYXJjaCh2YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHRzZWFyY2godmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZldGNoVXNlcnMoKVxuICAgICAgICAgICAgfSxcblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XG5cdFx0XHRcdGZldGNoVXNlcnM6ICd1c2VybWFuYWdlci9mZXRjaFVzZXJzJyxcblx0XHRcdFx0c2V0U2VhcmNoOiAgJ3VzZXJtYW5hZ2VyL3NldFNlYXJjaCdcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxwLWRyb3Bkb3duPlxuXHRcdDxmYS1pY29uIGNsYXNzPVwiZmEtZncgbXItMVwiIDppY29uPVwiWydmYXMnLCBzb3J0SWNvbihzb3J0KV1cIj48L2ZhLWljb24+XG5cdFx0e3sgb3B0aW9uc1tzb3J0XSAgfX1cblx0XHRcblx0XHQ8dGVtcGxhdGUgc2xvdD1cIm9wdGlvbnNcIj5cblx0XHRcdDxwLWRyb3Bkb3duLWl0ZW0gdi1mb3I9XCIodmFsdWUsIGtleSkgaW4gb3B0aW9uc1wiIGNsYXNzPVwidy00OFwiIDprZXk9XCJrZXlcIiBAY2xpY2sucHJldmVudD1cInNvcnRCeShrZXkpXCI+XG5cdFx0XHRcdDxmYS1pY29uIGNsYXNzPVwiZmEtZncgbXItMVwiIDppY29uPVwiWydmYXMnLCBzb3J0SWNvbihrZXkpXVwiPjwvZmEtaWNvbj5cblx0XHRcdFx0e3sgdmFsdWUgfX1cblx0XHRcdDwvcC1kcm9wZG93bi1pdGVtPlxuXHRcdDwvdGVtcGxhdGU+XG5cdDwvcC1kcm9wZG93bj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAndXNlci1tYW5hZ2VyLXNvcnQtYWN0aW9uJyxcblx0XHRcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0b3B0aW9uczoge1xuXHRcdFx0XHRcdGlkOiAnSUQnLFxuXHRcdFx0XHRcdG5hbWU6ICdOYW1lJyxcblx0XHRcdFx0XHRlbWFpbDogJ0VtYWlsJyxcblx0XHRcdFx0XHRjcmVhdGVkX2F0OiAnQ3JlYXRpb24gRGF0ZSdcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRjb21wdXRlZDoge1xuXHRcdFx0Li4ubWFwR2V0dGVycyh7XG5cdFx0XHRcdGRpcmVjdGlvbjogJ3VzZXJtYW5hZ2VyL2dldERpcmVjdGlvbicsXG5cdFx0XHRcdHNvcnQ6ICAgICAgJ3VzZXJtYW5hZ2VyL2dldFNvcnQnLFx0XHRcdFx0XG5cdFx0XHR9KVxuXHRcdH0sXG5cblx0XHR3YXRjaDoge1xuXHRcdFx0ZGlyZWN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdHRoaXMuZmV0Y2hVc2VycygpXG5cdFx0XHR9LFxuXG5cdFx0XHRzb3J0KHZhbHVlKSB7XG5cdFx0XHRcdHRoaXMuZmV0Y2hVc2VycygpXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdC4uLm1hcEFjdGlvbnMoe1xuXHRcdFx0XHR0b2dnbGVEaXJlY3Rpb246ICd1c2VybWFuYWdlci90b2dnbGVEaXJlY3Rpb24nLFxuXHRcdFx0XHRmZXRjaFVzZXJzOiAgICAgICd1c2VybWFuYWdlci9mZXRjaFVzZXJzJyxcblx0XHRcdFx0c2V0RGlyZWN0aW9uOiAgICAndXNlcm1hbmFnZXIvc2V0RGlyZWN0aW9uJyxcblx0XHRcdFx0c2V0U29ydDogICAgICAgICAndXNlcm1hbmFnZXIvc2V0U29ydCcsIFxuXHRcdFx0fSksXG5cblx0XHRcdHNvcnRCeShrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb3J0ID09PSBrZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b2dnbGVEaXJlY3Rpb24oKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U29ydChrZXkpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RGlyZWN0aW9uKCdhc2MnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNvcnRJY29uKGtleSkge1xuXHRcdFx0XHRpZiAodGhpcy5zb3J0ID09PSBrZXkpIHtcblx0XHRcdFx0XHRpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdhc2MnKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJ3NvcnQtYW1vdW50LWRvd24nXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJldHVybiAnc29ydC1hbW91bnQtdXAnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuICdiYXJzJ1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwiaW5saW5lLWZsZXhcIj5cblx0XHQ8cC1idXR0b24gQGNsaWNrLnByZXZlbnQ9XCJ0b2dnbGVWaWV3KCdsaXN0JylcIiA6ZGlzYWJsZWQ9XCJ2aWV3ID09ICdsaXN0J1wiIGNsYXNzPVwicm91bmRlZC1sIHJvdW5kZWQtci1ub25lXCI+XG5cdFx0XHQ8ZmEtaWNvbiBjbGFzcz1cImZhLWZ3XCIgOmljb249XCJbJ2ZhcycsICdiYXJzJ11cIj48L2ZhLWljb24+XG5cdFx0PC9wLWJ1dHRvbj5cblxuXHRcdDxwLWJ1dHRvbiBAY2xpY2sucHJldmVudD1cInRvZ2dsZVZpZXcoJ2dyaWQnKVwiIDpkaXNhYmxlZD1cInZpZXcgPT0gJ2dyaWQnXCIgY2xhc3M9XCJyb3VuZGVkLXIgcm91bmRlZC1sLW5vbmVcIj5cblx0XHRcdDxmYS1pY29uIGNsYXNzPVwiZmEtZndcIiA6aWNvbj1cIlsnZmFzJywgJ3RoLWxhcmdlJ11cIj48L2ZhLWljb24+XG5cdFx0PC9wLWJ1dHRvbj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ3VzZXItbWFuYWdlci12aWV3LWFjdGlvbicsXG5cblx0XHRjb21wdXRlZDoge1xuXHRcdFx0Li4ubWFwR2V0dGVycyh7XG5cdFx0XHRcdHZpZXc6ICd1c2VybWFuYWdlci9nZXRWaWV3JyxcdFx0XHRcdFxuXHRcdFx0fSlcblx0XHR9LFxuXG5cdFx0d2F0Y2g6IHtcblx0XHRcdHZpZXcodmFsdWUpIHtcblx0XHRcdFx0dGhpcy5mZXRjaFVzZXJzKClcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XG5cdFx0XHRcdGZldGNoVXNlcnM6ICd1c2VybWFuYWdlci9mZXRjaFVzZXJzJyxcblx0XHRcdFx0dG9nZ2xlVmlldzogJ3VzZXJtYW5hZ2VyL3RvZ2dsZVZpZXcnLFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiA6Y2xhc3M9XCJbIHZpZXcgPT0gJ2dyaWQnID8gJ2dhbGxlcnktd3JhcHBlcicgOiAnZ2FsbGVyeS13cmFwcGVyLS1yb3cnIF1cIj5cblx0XHQ8ZGl2XG4gICAgICAgICAgICBjbGFzcz1cImdhbGxlcnktaXRlbVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdnYWxsZXJ5LWl0ZW0tLXNlbGVjdGVkIHNlbGVjdGFibGUtLXNlbGVjdGVkJzogaXNTZWxlY3RlZCwgJ3NlbGVjdGFibGUnOiBpc1NlbGVjdGFibGUgfVwiXG4gICAgICAgICAgICBAZGJsY2xpY2s9XCIkZW1pdCgnZGJsY2xpY2snKVwiXG4gICAgICAgICAgICA6ZGF0YS1zZWxlY3Rpb249XCJ1c2VyLmlkXCI+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGwgdy1mdWxsIHRleHQtZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgIFx0PGZhLWljb24gOmljb249XCJbJ2ZhcycsICd1c2VyJ11cIiBjbGFzcz1cImZhLWZ3XCIgOmNsYXNzPVwiWyB2aWV3ID09ICdncmlkJyA/ICdmYS0zeCcgOiAnZmEtMngnXVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiBjbGFzcz1cImdhbGxlcnktc3VidGl0bGVcIj5cblx0XHRcdDxzcGFuPnt7IHVzZXIubmFtZSB9fTwvc3Bhbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5LXRleHRcIiB2LWlmPVwidmlldyA9PSAnbGlzdCdcIj5cblx0XHRcdDxzcGFuIHYtaWY9XCJ1c2VyLnJvbGVzLmxlbmd0aFwiPnt7IHVzZXIucm9sZXNbMF0ubmFtZSB9fTwvc3Bhbj5cblx0XHRcdDxzcGFuIHYtZWxzZT4tLTwvc3Bhbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5LXRleHRcIiB2LWlmPVwidmlldyA9PSAnbGlzdCdcIj5cblx0XHRcdHt7ICRtb21lbnQodXNlci5jcmVhdGVkX2F0KS5mb3JtYXQoJ01NTSBEbywgWVlZWScpIH19XG5cdFx0PC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICd1c2VyLW1hbmFnZXItdXNlcicsXG5cblx0XHRwcm9wczoge1xuXHRcdFx0dXNlcjoge1xuXHRcdFx0XHR0eXBlOiBPYmplY3QsXG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0fSxcblxuICAgICAgICAgICAgaXNTZWxlY3RhYmxlOiB7XG4gICAgICAgICAgICBcdHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBcdGRlZmF1bHQ6IHRydWVcbiAgICAgICAgICAgIH1cblx0XHR9LFxuXG5cdFx0Y29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIC4uLm1hcEdldHRlcnMoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiAndXNlcm1hbmFnZXIvZ2V0U2VsZWN0ZWQnLFxuICAgICAgICAgICAgICAgIHZpZXc6ICAgICAndXNlcm1hbmFnZXIvZ2V0VmlldycsXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgaXNTZWxlY3RlZCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5pbmNsdWRlcyh0aGlzLnNlbGVjdGVkLCB0aGlzLnVzZXIuaWQpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwiY2FyZCBoLWZ1bGxcIj5cblx0XHQ8ZGl2IHYtaWY9XCJoYXNIZWFkZXJcIiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcC0zXCI+XG5cdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwiJGVtaXQoJ3JlamVjdCcpXCIgdGhlbWU9XCJ3YXJuaW5nXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICd0aW1lcyddXCIgY2xhc3M9XCJtci0yXCI+PC9mYS1pY29uPiBSZWplY3Q8L3AtYnV0dG9uPlxuXHRcdFx0PHAtYnV0dG9uIEBjbGljaz1cIiRlbWl0KCdhY2NlcHQnKVwiIHRoZW1lPVwiaW5mb1wiPkFjY2VwdCA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NoZWNrJ11cIiBjbGFzcz1cIm1sLTJcIj48L2ZhLWljb24+PC9wLWJ1dHRvbj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgdi1pZj1cInNlbGVjdGlvbi5sZW5ndGggPiAwXCI+XG5cdFx0XHQ8cC1zb3J0YWJsZS1saXN0IHYtbW9kZWw9XCJzZWxlY3Rpb25cIiBjbGFzcz1cInNvcnRhYmxlLWxpc3RcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInctZnVsbCBwLTNcIj5cblx0XHRcdFx0XHQ8cC1zb3J0YWJsZS1pdGVtIHYtZm9yPVwiaXRlbSBpbiBzZWxlY3Rpb25cIiA6a2V5PVwiaXRlbS5pZFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIHB5LTJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInctMS8xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwLXNvcnRhYmxlLWhhbmRsZSBjbGFzcz1cImN1cnNvci1tb3ZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZmEtaWNvbiBpY29uPVwiZWxsaXBzaXMtdlwiIGNsYXNzPVwiaGFuZGxlIGZhLWZ3IHRleHQtZ3JheS00MDBcIj48L2ZhLWljb24+XG5cdFx0XHRcdFx0XHRcdFx0PC9wLXNvcnRhYmxlLWhhbmRsZT5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoLWZ1bGwgdy0zLzEyIHRleHQtZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cblx0XHRcdFx0ICAgICAgICAgICAgXHQ8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3VzZXInXVwiIGNsYXNzPVwiZmEtZncgZmEtMnhcIj48L2ZhLWljb24+XG5cdFx0XHRcdCAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FsbGVyeS10ZXh0IHctNi8xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+e3sgaXRlbS5uYW1lIH19PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy0yLzEyIHRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwicmVtb3ZlKGl0ZW0uaWQpXCIgdGhlbWU9XCJkYW5nZXJcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3RyYXNoJ11cIj48L2ZhLWljb24+PC9wLWJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3Atc29ydGFibGUtaXRlbT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L3Atc29ydGFibGUtbGlzdD5cblxuXHRcdFx0PGRpdiB2LWlmPVwiYWRkTGltaXQgPD0gMFwiIGNsYXNzPVwidGV4dC1zbSBpdGFsaWMgdGV4dC1kYW5nZXItNjAwIHRleHQtY2VudGVyXCI+XG5cdFx0XHRcdFNlbGVjdGlvbiBsaW1pdCByZWFjaGVkXG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgdi1lbHNlIGNsYXNzPVwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNXhsIHRleHQtZ3JheS0zMDBcIj5cblx0XHRcdDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndXNlcnMnXVwiIGNsYXNzPVwiZmEtZncgZmEtM3hcIj48L2ZhLWljb24+XG5cdFx0XHQ8c3BhbiBjbGFzcz1cInRleHQtbGcgcHktMiB0ZXh0LWdyYXktNTAwXCI+U2VsZWN0IHNvbWUgdXNlcnMuLi48L3NwYW4+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRzZWxlY3Rpb246IHtcblx0XHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSlcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0YWRkTGltaXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmxpbWl0IC0gdGhpcy5zZWxlY3Rpb24ubGVuZ3RoXG5cdFx0XHR9LFxuXHRcdH0sXG5cblx0XHRwcm9wczoge1xuXHRcdFx0dmFsdWU6IHtcblx0XHRcdFx0dHlwZTogQXJyYXksXG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlXG5cdFx0XHR9LFxuXG5cdFx0XHRsaW1pdDoge1xuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXG5cdFx0XHRcdGRlZmF1bHQ6IEluZmluaXR5XG5cdFx0XHR9LFxuXG5cdFx0XHRoYXNIZWFkZXI6IHtcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHRyZW1vdmUoaWQpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3Rpb24gPSBfLmZpbHRlcih0aGlzLnNlbGVjdGlvbiwgKGl0ZW0pID0+IHsgcmV0dXJuIGl0ZW0uaWQgIT09IGlkIH0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PGxhYmVsIDpmb3I9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2xhYmVsXCI+e3sgZmllbGQubmFtZSB9fTwvbGFiZWw+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ3LTEvMlwiPlxuXHRcdFx0XHQ8cC1idXR0b24gOmRpc2FibGVkPVwicmVxdWVzdE9wZW5cIiBAY2xpY2s9XCJvcGVuXCI+XG5cdFx0XHRcdFx0PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdwbHVzLWNpcmNsZSddXCIgY2xhc3M9XCJtci0xXCI+PC9mYS1pY29uPiBNYW5hZ2UgVXNlcnNcblx0XHRcdFx0PC9wLWJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8dXNlci1zZWxlY3Rpb25cblx0XHRcdFx0Y2xhc3M9XCJ3LTEvMlwiXG5cdFx0XHRcdDpsaW1pdD1cInNlbGVjdGlvbkxpbWl0XCJcblx0XHRcdFx0Omhhc0hlYWRlcj1cImZhbHNlXCJcblx0XHRcdFx0di1tb2RlbD1cInNlbGVjdGVkXCI+XG5cdFx0XHQ8L3VzZXItc2VsZWN0aW9uPlxuXHRcdDwvZGl2PlxuXG5cdFx0PCEtLSBVc2VyIE1hbmFnZXIgTW9kYWwgLS0+XG5cdFx0PHAtbW9kYWwgbmFtZT1cInVzZXItbWFuYWdlclwiIG5vLWhlYWRlciBuby1mb290ZXIgZXh0cmEtbGFyZ2Ugdi1tb2RlbD1cIm1vZGFsT3BlblwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2lkZS1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8dXNlci1zZWxlY3Rpb25cblx0XHRcdFx0XHRcdDpsaW1pdD1cInNlbGVjdGlvbkxpbWl0XCJcblx0XHRcdFx0XHRcdEByZWplY3Q9XCJyZWplY3RcIlxuXHRcdFx0XHRcdFx0QGFjY2VwdD1cImFjY2VwdFwiXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwic2VsZWN0aW9uXCI+XG5cdFx0XHRcdFx0PC91c2VyLXNlbGVjdGlvbj5cblx0XHRcdCAgIFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMyBwdC0yXCI+XG5cdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJtci00XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwicHVzaFwiIHRoZW1lPVwic3VjY2Vzc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2Fycm93LWFsdC1jaXJjbGUtbGVmdCddXCIgY2xhc3M9XCJtci0xXCI+PC9mYS1pY29uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wLWJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJmbGV4IHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHQgICAgPGxpIGNsYXNzPVwibXItMiB3LWZ1bGxcIj48c2VhcmNoLWFjdGlvbj48L3NlYXJjaC1hY3Rpb24+PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzPVwiZmxleFwiPlxuXHRcdFx0XHRcdFx0XHQgICAgPGxpIGNsYXNzPVwibXItMlwiPjxyb2xlLWFjdGlvbj48L3JvbGUtYWN0aW9uPjwvbGk+XG5cdFx0XHRcdFx0XHRcdCAgICA8bGkgY2xhc3M9XCJtci0yXCI+PHNvcnQtYWN0aW9uPjwvc29ydC1hY3Rpb24+PC9saT5cblx0XHRcdFx0XHRcdFx0ICAgIDxsaSBjbGFzcz1cIm1yLTJcIj48dmlldy1hY3Rpb24+PC92aWV3LWFjdGlvbj48L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5LWNvbnRhaW5lciBzZWxlY3RhYmxlc1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FsbGVyeSBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcGItMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDx1c2VyLWNhcmRcblx0XHRcdFx0XHRcdFx0XHRcdHYtZm9yPVwidXNlciBpbiB1c2Vyc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6a2V5PVwidXNlci5pZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6dXNlcj1cInVzZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0QGRibGNsaWNrPVwiYWRkKHVzZXIuaWQpXCI+XG5cdFx0XHRcdFx0XHRcdFx0PC91c2VyLWNhcmQ+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG4gICAgICAgICAgICBcdFx0PC9kaXY+XG4gICAgICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcC1tb2RhbD5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcblxuXHRpbXBvcnQgVXNlckNhcmQgICAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL1VzZXJNYW5hZ2VyL0Jyb3dzZS9Vc2VyLnZ1ZSdcblx0aW1wb3J0IFVzZXJTZWxlY3Rpb24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyTWFuYWdlci9TZWxlY3Rpb24udnVlJ1xuXG5cdGltcG9ydCBSb2xlQWN0aW9uICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvQWN0aW9ucy9Sb2xlLnZ1ZSdcblx0aW1wb3J0IFNlYXJjaEFjdGlvbiAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyTWFuYWdlci9BY3Rpb25zL1NlYXJjaC52dWUnXG5cdGltcG9ydCBTb3J0QWN0aW9uICAgIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvQWN0aW9ucy9Tb3J0LnZ1ZSdcblx0aW1wb3J0IFZpZXdBY3Rpb24gICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Vc2VyTWFuYWdlci9BY3Rpb25zL1ZpZXcudnVlJ1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAndXNlci1maWVsZHR5cGUnLFxuXG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0J3VzZXItY2FyZCc6ICAgICAgVXNlckNhcmQsXG5cdFx0XHQndXNlci1zZWxlY3Rpb24nOiBVc2VyU2VsZWN0aW9uLFxuXHRcdFx0J3JvbGUtYWN0aW9uJzogICAgUm9sZUFjdGlvbixcblx0XHRcdCdzZWFyY2gtYWN0aW9uJzogIFNlYXJjaEFjdGlvbixcblx0XHRcdCdzb3J0LWFjdGlvbic6ICAgIFNvcnRBY3Rpb24sXG5cdFx0XHQndmlldy1hY3Rpb24nOiAgICBWaWV3QWN0aW9uLFxuXHRcdH0sXG5cblx0XHRtaXhpbnM6IFtcblx0XHRcdHJlcXVpcmUoJy4uLy4uL21peGlucy91c2Vyc2VsZWN0b3InKS5kZWZhdWx0LFxuICAgICAgICBdLFxuXG5cdFx0ZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBcdHJlcXVlc3RPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIFx0bW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIFx0c2VsZWN0aW9uOiBbXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuXHRcdHByb3BzOiB7XG5cdFx0XHRmaWVsZDoge1xuXHRcdFx0ICAgIHR5cGU6IE9iamVjdCxcblx0XHRcdCAgICByZXF1aXJlZDogdHJ1ZSxcblx0XHRcdH0sXG5cblx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdHR5cGU6IEFycmF5LFxuXHRcdFx0XHRyZXF1aXJlZDogZmFsc2UsXG5cdFx0XHRcdGRlZmF1bHQ6ICgpID0+IFtdLFxuXHRcdFx0fSxcblx0XHR9LFxuXG5cdFx0d2F0Y2g6IHtcblx0XHRcdGxvYWRpbmcoaXNMb2FkaW5nKSB7XG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0XHRpZiAoaXNMb2FkaW5nKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmRlc3Ryb3lTZWxlY3RvcigpXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMubG9hZFNlbGVjdG9yKHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RhYmxlcycpKVxuXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5yZXF1ZXN0T3Blbikge1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1vZGFsT3BlbiAgID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHR0aGlzLnJlcXVlc3RPcGVuID0gZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICBcdC4uLm1hcEdldHRlcnMoe1xuICAgICAgICBcdFx0bG9hZGluZzogICAgICAgJ3VzZXJtYW5hZ2VyL2dldExvYWRpbmcnLFxuICAgICAgICBcdFx0dXNlcnM6ICAgICAgICAgJ3VzZXJtYW5hZ2VyL2dldFVzZXJzJyxcbiAgICAgICAgXHR9KSxcblxuXHRcdFx0c2VsZWN0ZWQ6IHtcblx0XHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlIHx8IFtdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFxuXHRcdFx0XHRzZXQodmFsdWUpIHtcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRzZWxlY3Rpb25MaW1pdCgpIHtcblx0XHRcdFx0cmV0dXJuIE51bWJlcih0aGlzLmZpZWxkLnNldHRpbmdzLmxpbWl0KSB8fCBJbmZpbml0eVxuXHRcdFx0fSxcblxuXHRcdFx0YWRkTGltaXQoKSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLnNlbGVjdGlvbkxpbWl0IC0gdGhpcy5zZWxlY3Rpb24ubGVuZ3RoXG5cdFx0XHR9XG4gICAgICAgIH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcblx0XHRcdFx0ZmV0Y2hVc2VyczogJ3VzZXJtYW5hZ2VyL2ZldGNoVXNlcnMnLFxuXHRcdFx0fSksXG5cblx0XHRcdHB1c2goKSB7XG5cdFx0XHRcdF8uZm9yRWFjaCh0aGlzLnNlbGVjdGVkVXNlcnMsIChpZCkgPT4gdGhpcy5hZGQoaWQpKVxuXHRcdFx0fSxcblxuXHRcdFx0YWRkKGlkKSB7XG5cdFx0XHRcdGlmICh0aGlzLmFkZExpbWl0ID4gMCkge1xuXHRcdFx0XHRcdGxldCBleGlzdHMgPSBfLmZpbmQodGhpcy5zZWxlY3Rpb24sIFsgJ2lkJywgaWQgXSlcblx0XHRcdFx0XHRsZXQgdXNlciAgID0gXy5maW5kKHRoaXMudXNlcnMsIFsgJ2lkJywgaWQgXSlcblxuXHRcdFx0XHRcdGlmICghIGV4aXN0cykge1xuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3Rpb24ucHVzaCh1c2VyKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0b3BlbigpIHtcblx0XHRcdFx0dGhpcy5mZXRjaFVzZXJzKClcblxuXHRcdFx0XHR0aGlzLnNlbGVjdGlvbiA9IFsuLi50aGlzLnNlbGVjdGVkXVxuXHRcdFx0XHR0aGlzLnJlcXVlc3RPcGVuID0gdHJ1ZVxuXHRcdFx0fSxcblxuXHRcdFx0Y2xvc2UoKSB7XG5cdFx0XHRcdHRoaXMuY2xlYXJTZWxlY3Rpb24oKVxuXG5cdFx0XHRcdHRoaXMuc2VsZWN0aW9uID0gW11cblx0XHRcdFx0dGhpcy5tb2RhbE9wZW4gPSBmYWxzZVxuXHRcdFx0fSxcblxuXHRcdFx0cmVqZWN0KCkge1xuXHRcdFx0XHR0aGlzLmNsb3NlKClcblx0XHRcdH0sXG5cblx0XHRcdGFjY2VwdCgpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uXG5cdFx0XHRcdHRoaXMuY2xvc2UoKVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInAtZHJvcGRvd25cIixcbiAgICBbXG4gICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0xXCIsXG4gICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInVzZXItdGFnXCJdIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiXFxuXFx0XCIgKyBfdm0uX3MoX3ZtLm9wdGlvbnNbX3ZtLnJvbGVdKSArIFwiXFxuXFx0XFxuXFx0XCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgeyBzbG90OiBcIm9wdGlvbnNcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTQ4XCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0Um9sZShudWxsKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJFdmVyeW9uZVwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5vcHRpb25zLCBmdW5jdGlvbihyb2xlLCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJwLWRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctNDhcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldFJvbGUoa2V5KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdFwiICsgX3ZtLl9zKHJvbGUpICsgXCJcXG5cXHRcXHRcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInAtaW5wdXRcIiwge1xuICAgIGF0dHJzOiB7IG5hbWU6IFwic2VhcmNoXCIsIHBsYWNlaG9sZGVyOiBcIlNlYXJjaFwiIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uc2VhcmNoID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hcIlxuICAgIH1cbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwicC1kcm9wZG93blwiLFxuICAgIFtcbiAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IG1yLTFcIixcbiAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIF92bS5zb3J0SWNvbihfdm0uc29ydCldIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiXFxuXFx0XCIgKyBfdm0uX3MoX3ZtLm9wdGlvbnNbX3ZtLnNvcnRdKSArIFwiXFxuXFx0XFxuXFx0XCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgeyBzbG90OiBcIm9wdGlvbnNcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLm9wdGlvbnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcInAtZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy00OFwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNvcnRCeShrZXkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IG1yLTFcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgX3ZtLnNvcnRJY29uKGtleSldIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFwiICsgX3ZtLl9zKHZhbHVlKSArIFwiXFxuXFx0XFx0XCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImlubGluZS1mbGV4XCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC1sIHJvdW5kZWQtci1ub25lXCIsXG4gICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS52aWV3ID09IFwibGlzdFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVWaWV3KFwibGlzdFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiYmFyc1wiXSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC1yIHJvdW5kZWQtbC1ub25lXCIsXG4gICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS52aWV3ID09IFwiZ3JpZFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVWaWV3KFwiZ3JpZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGgtbGFyZ2VcIl0gfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBjbGFzczogW192bS52aWV3ID09IFwiZ3JpZFwiID8gXCJnYWxsZXJ5LXdyYXBwZXJcIiA6IFwiZ2FsbGVyeS13cmFwcGVyLS1yb3dcIl1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS1pdGVtXCIsXG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiZ2FsbGVyeS1pdGVtLS1zZWxlY3RlZCBzZWxlY3RhYmxlLS1zZWxlY3RlZFwiOiBfdm0uaXNTZWxlY3RlZCxcbiAgICAgICAgICAgIHNlbGVjdGFibGU6IF92bS5pc1NlbGVjdGFibGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1zZWxlY3Rpb25cIjogX3ZtLnVzZXIuaWQgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiZGJsY2xpY2tcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiaC1mdWxsIHctZnVsbCB0ZXh0LWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgICBjbGFzczogW192bS52aWV3ID09IFwiZ3JpZFwiID8gXCJmYS0zeFwiIDogXCJmYS0yeFwiXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ1c2VyXCJdIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS1zdWJ0aXRsZVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLm5hbWUpKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0udmlldyA9PSBcImxpc3RcIlxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLnVzZXIucm9sZXMubGVuZ3RoXG4gICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnJvbGVzWzBdLm5hbWUpKV0pXG4gICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCItLVwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0udmlldyA9PSBcImxpc3RcIlxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICBfdm0uJG1vbWVudChfdm0udXNlci5jcmVhdGVkX2F0KS5mb3JtYXQoXCJNTU0gRG8sIFlZWVlcIilcbiAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGgtZnVsbFwiIH0sIFtcbiAgICBfdm0uaGFzSGVhZGVyXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBwLTNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcIndhcm5pbmdcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJyZWplY3RcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGltZXNcIl0gfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBSZWplY3RcIilcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFjY2VwdFwiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkFjY2VwdCBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNoZWNrXCJdIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uc2VsZWN0aW9uLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJwLXNvcnRhYmxlLWxpc3RcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNvcnRhYmxlLWxpc3RcIixcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3Rpb24gPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc2VsZWN0aW9uLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInAtc29ydGFibGUtaXRlbVwiLCB7IGtleTogaXRlbS5pZCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLWNlbnRlciBweS0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0xLzEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLXNvcnRhYmxlLWhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjdXJzb3ItbW92ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGFuZGxlIGZhLWZ3IHRleHQtZ3JheS00MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImVsbGlwc2lzLXZcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoLWZ1bGwgdy0zLzEyIHRleHQtZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IGZhLTJ4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ1c2VyXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS10ZXh0IHctNi8xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyIHRleHQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcImRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmUoaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidHJhc2hcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5hZGRMaW1pdCA8PSAwXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIGl0YWxpYyB0ZXh0LWRhbmdlci02MDAgdGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdFNlbGVjdGlvbiBsaW1pdCByZWFjaGVkXFxuXFx0XFx0XCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNXhsIHRleHQtZ3JheS0zMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgZmEtM3hcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidXNlcnNcIl0gfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1sZyBweS0yIHRleHQtZ3JheS01MDBcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBzb21lIHVzZXJzLi4uXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiwgYXR0cnM6IHsgZm9yOiBfdm0uZmllbGQuaGFuZGxlIH0gfSxcbiAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmZpZWxkLm5hbWUpKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LTEvMlwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogX3ZtLnJlcXVlc3RPcGVuIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9wZW4gfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJwbHVzLWNpcmNsZVwiXSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBNYW5hZ2UgVXNlcnNcXG5cXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJ1c2VyLXNlbGVjdGlvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTEvMlwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgbGltaXQ6IF92bS5zZWxlY3Rpb25MaW1pdCwgaGFzSGVhZGVyOiBmYWxzZSB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3RlZCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5zZWxlY3RlZCA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInAtbW9kYWxcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBcInVzZXItbWFuYWdlclwiLFxuICAgICAgICAgICAgXCJuby1oZWFkZXJcIjogXCJcIixcbiAgICAgICAgICAgIFwibm8tZm9vdGVyXCI6IFwiXCIsXG4gICAgICAgICAgICBcImV4dHJhLWxhcmdlXCI6IFwiXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1vZGFsT3BlbixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLm1vZGFsT3BlbiA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibW9kYWxPcGVuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNpZGUtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwidXNlci1zZWxlY3Rpb25cIiwge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbGltaXQ6IF92bS5zZWxlY3Rpb25MaW1pdCB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgcmVqZWN0OiBfdm0ucmVqZWN0LCBhY2NlcHQ6IF92bS5hY2NlcHQgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlbGVjdGlvbiA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMyBwdC0yXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtci00XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcInN1Y2Nlc3NcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5wdXNoIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBbXCJmYXNcIiwgXCJhcnJvdy1hbHQtY2lyY2xlLWxlZnRcIl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCB3LWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1yLTIgdy1mdWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcInNlYXJjaC1hY3Rpb25cIildLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtci0yXCIgfSwgW19jKFwicm9sZS1hY3Rpb25cIildLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtci0yXCIgfSwgW19jKFwic29ydC1hY3Rpb25cIildLCAxKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJtci0yXCIgfSwgW19jKFwidmlldy1hY3Rpb25cIildLCAxKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnktY29udGFpbmVyIHNlbGVjdGFibGVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeSBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcGItMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udXNlcnMsIGZ1bmN0aW9uKHVzZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ1c2VyLWNhcmRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiB1c2VyLmlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdXNlcjogdXNlciB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkKHVzZXIuaWQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUm9sZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI3YjczMDAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUm9sZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1JvbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYjdiNzMwMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYjdiNzMwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYjdiNzMwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUm9sZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI3YjczMDAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWI3YjczMDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL1VzZXJNYW5hZ2VyL0FjdGlvbnMvUm9sZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JvbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JvbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JvbGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiN2I3MzAwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyZDEwYTljJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvZnVzaW9uY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMyZDEwYTljJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMyZDEwYTljJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMyZDEwYTljJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9TZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyZDEwYTljJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMyZDEwYTljJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Vc2VyTWFuYWdlci9BY3Rpb25zL1NlYXJjaC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlYXJjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWFyY2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyZDEwYTljJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Tb3J0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzI1ZDdiMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Tb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU29ydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvZnVzaW9uY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2UzMjVkN2IwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2UzMjVkN2IwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2UzMjVkN2IwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Tb3J0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMzI1ZDdiMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlMzI1ZDdiMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvVXNlck1hbmFnZXIvQWN0aW9ucy9Tb3J0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU29ydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU29ydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU29ydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTMyNWQ3YjAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcyYTY3ZGFmJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1ZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzJhNjdkYWYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzJhNjdkYWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzJhNjdkYWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1ZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcyYTY3ZGFmJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzcyYTY3ZGFmJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9Vc2VyTWFuYWdlci9BY3Rpb25zL1ZpZXcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MmE2N2RhZiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVXNlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTMzMThlMzAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlMzMxOGUzMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlMzMxOGUzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlMzMxOGUzMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVXNlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTMzMThlMzAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTMzMThlMzAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL1VzZXJNYW5hZ2VyL0Jyb3dzZS9Vc2VyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTMzMThlMzAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NlbGVjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmY0NjljMjQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmY0NjljMjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmY0NjljMjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmY0NjljMjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NlbGVjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmY0NjljMjQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmY0NjljMjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL1VzZXJNYW5hZ2VyL1NlbGVjdGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlbGVjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmNDY5YzI0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGE4ODcxMTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvZnVzaW9uY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRhODg3MTEwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRhODg3MTEwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRhODg3MTEwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGE4ODcxMTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGE4ODcxMTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9maWVsZHR5cGVzL1VzZXIvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YTg4NzExMCZcIiIsImltcG9ydCBEcmFnU2VsZWN0IGZyb20gJ0RyYWdTZWxlY3QnXG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZWxlY3RvcjogbnVsbCxcblx0XHR9XG5cdH0sXG5cblx0Y29tcHV0ZWQ6IHtcblx0XHQuLi5tYXBHZXR0ZXJzKHtcblx0XHRcdHNlbGVjdGVkVXNlcnM6ICd1c2VybWFuYWdlci9nZXRTZWxlY3RlZCcsXG5cdFx0fSlcblx0fSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICBcdC4uLm1hcEFjdGlvbnMoe1xuICAgICAgICAgICAgdG9nZ2xlU2VsZWN0aW9uOiAndXNlcm1hbmFnZXIvdG9nZ2xlU2VsZWN0aW9uJyxcbiAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uOiAgJ3VzZXJtYW5hZ2VyL2NsZWFyU2VsZWN0aW9uJyxcbiAgICAgICAgfSksXG5cblx0XHRsb2FkU2VsZWN0b3IoYXJlYSkge1xuXHRcdFx0dGhpcy5zZWxlY3RvciA9IG5ldyBEcmFnU2VsZWN0KHtcblx0XHRcdFx0YXJlYTogYXJlYSxcblx0XHRcdFx0c2VsZWN0YWJsZXM6IGFyZWEucXVlcnlTZWxlY3RvckFsbCgnLnNlbGVjdGFibGUnKSxcblx0XHRcdFx0Y2FsbGJhY2s6IChlbGVtZW50cykgPT4ge1xuXHRcdFx0XHRcdHRoaXMuY2xlYXJTZWxlY3Rpb24oKVxuXG5cdFx0XHRcdFx0Xy5mb3JFYWNoKGVsZW1lbnRzLCAoZWwpID0+IHRoaXMudG9nZ2xlU2VsZWN0aW9uKHBhcnNlSW50KGVsLmRhdGFzZXQuc2VsZWN0aW9uKSkpXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gU3RhcnQgZHJhZ2dpbmcgc2VsZWN0b3IuLlxuXHRcdFx0XHRvbkRyYWdTdGFydDogKGVsKSA9PiB7XG5cdFx0XHRcdFx0Ly8gUHJldmVudCBzZWxlY3RvciBmcm9tIHNlbGVjdGluZ1xuXHRcdFx0XHRcdGlmIChlbC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdzZWxlY3RhYmxlLS1zZWxlY3RlZCcpIHx8IGVsLnRhcmdldC5jbG9zZXN0KCcuc2VsZWN0YWJsZS0tc2VsZWN0ZWQnKSkge1xuXHRcdFx0XHRcdFx0dGhpcy5zZWxlY3Rvci5icmVhaygpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9LFxuXHRcdFx0fSlcblx0XHR9LFxuXG5cdFx0ZGVzdHJveVNlbGVjdG9yKCkge1xuXHRcdFx0aWYgKHRoaXMuc2VsZWN0b3IpIHtcblx0XHRcdFx0dGhpcy5zZWxlY3Rvci5zdG9wKClcblx0XHRcdH1cblx0XHR9XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=