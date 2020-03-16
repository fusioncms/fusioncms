(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/Selection.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user-manager/Selection.vue?vue&type=script&lang=js& ***!
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/Role.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user-manager/actions/Role.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/Search.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user-manager/actions/Search.vue?vue&type=script&lang=js& ***!
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/Sort.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user-manager/actions/Sort.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/View.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user-manager/actions/View.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/browse/User.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user-manager/browse/User.vue?vue&type=script&lang=js& ***!
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
//
//
//
//
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/User/Field.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/User/Field.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_user_manager_browse_User_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/user-manager/browse/User.vue */ "./resources/js/components/user-manager/browse/User.vue");
/* harmony import */ var _components_user_manager_Selection_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/user-manager/Selection.vue */ "./resources/js/components/user-manager/Selection.vue");
/* harmony import */ var _components_user_manager_actions_Role_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/user-manager/actions/Role.vue */ "./resources/js/components/user-manager/actions/Role.vue");
/* harmony import */ var _components_user_manager_actions_Search_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/user-manager/actions/Search.vue */ "./resources/js/components/user-manager/actions/Search.vue");
/* harmony import */ var _components_user_manager_actions_Sort_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/user-manager/actions/Sort.vue */ "./resources/js/components/user-manager/actions/Sort.vue");
/* harmony import */ var _components_user_manager_actions_View_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/user-manager/actions/View.vue */ "./resources/js/components/user-manager/actions/View.vue");
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
    'user-card': _components_user_manager_browse_User_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'user-selection': _components_user_manager_Selection_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'role-action': _components_user_manager_actions_Role_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'search-action': _components_user_manager_actions_Search_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    'sort-action': _components_user_manager_actions_Sort_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    'view-action': _components_user_manager_actions_View_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/Selection.vue?vue&type=template&id=21ef2813&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user-manager/Selection.vue?vue&type=template&id=21ef2813& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/Role.vue?vue&type=template&id=8ca92ede&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user-manager/actions/Role.vue?vue&type=template&id=8ca92ede& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/Search.vue?vue&type=template&id=8ebf5ffa&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user-manager/actions/Search.vue?vue&type=template&id=8ebf5ffa& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/Sort.vue?vue&type=template&id=2c9d09b9&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user-manager/actions/Sort.vue?vue&type=template&id=2c9d09b9& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/View.vue?vue&type=template&id=10d67340&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user-manager/actions/View.vue?vue&type=template&id=10d67340& ***!
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/browse/User.vue?vue&type=template&id=96ec6592&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/user-manager/browse/User.vue?vue&type=template&id=96ec6592& ***!
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

/***/ "./resources/js/components/user-manager/Selection.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/user-manager/Selection.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Selection_vue_vue_type_template_id_21ef2813___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Selection.vue?vue&type=template&id=21ef2813& */ "./resources/js/components/user-manager/Selection.vue?vue&type=template&id=21ef2813&");
/* harmony import */ var _Selection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Selection.vue?vue&type=script&lang=js& */ "./resources/js/components/user-manager/Selection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Selection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Selection_vue_vue_type_template_id_21ef2813___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Selection_vue_vue_type_template_id_21ef2813___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user-manager/Selection.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user-manager/Selection.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/user-manager/Selection.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Selection.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/Selection.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user-manager/Selection.vue?vue&type=template&id=21ef2813&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/user-manager/Selection.vue?vue&type=template&id=21ef2813& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_template_id_21ef2813___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Selection.vue?vue&type=template&id=21ef2813& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/Selection.vue?vue&type=template&id=21ef2813&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_template_id_21ef2813___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Selection_vue_vue_type_template_id_21ef2813___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user-manager/actions/Role.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/user-manager/actions/Role.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Role_vue_vue_type_template_id_8ca92ede___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Role.vue?vue&type=template&id=8ca92ede& */ "./resources/js/components/user-manager/actions/Role.vue?vue&type=template&id=8ca92ede&");
/* harmony import */ var _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Role.vue?vue&type=script&lang=js& */ "./resources/js/components/user-manager/actions/Role.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Role_vue_vue_type_template_id_8ca92ede___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Role_vue_vue_type_template_id_8ca92ede___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user-manager/actions/Role.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user-manager/actions/Role.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/user-manager/actions/Role.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Role.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/Role.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user-manager/actions/Role.vue?vue&type=template&id=8ca92ede&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/user-manager/actions/Role.vue?vue&type=template&id=8ca92ede& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_8ca92ede___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Role.vue?vue&type=template&id=8ca92ede& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/Role.vue?vue&type=template&id=8ca92ede&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_8ca92ede___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Role_vue_vue_type_template_id_8ca92ede___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user-manager/actions/Search.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/user-manager/actions/Search.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Search_vue_vue_type_template_id_8ebf5ffa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Search.vue?vue&type=template&id=8ebf5ffa& */ "./resources/js/components/user-manager/actions/Search.vue?vue&type=template&id=8ebf5ffa&");
/* harmony import */ var _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Search.vue?vue&type=script&lang=js& */ "./resources/js/components/user-manager/actions/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Search_vue_vue_type_template_id_8ebf5ffa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Search_vue_vue_type_template_id_8ebf5ffa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user-manager/actions/Search.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user-manager/actions/Search.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/user-manager/actions/Search.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/Search.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user-manager/actions/Search.vue?vue&type=template&id=8ebf5ffa&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/user-manager/actions/Search.vue?vue&type=template&id=8ebf5ffa& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_8ebf5ffa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Search.vue?vue&type=template&id=8ebf5ffa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/Search.vue?vue&type=template&id=8ebf5ffa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_8ebf5ffa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Search_vue_vue_type_template_id_8ebf5ffa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user-manager/actions/Sort.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/user-manager/actions/Sort.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sort_vue_vue_type_template_id_2c9d09b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sort.vue?vue&type=template&id=2c9d09b9& */ "./resources/js/components/user-manager/actions/Sort.vue?vue&type=template&id=2c9d09b9&");
/* harmony import */ var _Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sort.vue?vue&type=script&lang=js& */ "./resources/js/components/user-manager/actions/Sort.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sort_vue_vue_type_template_id_2c9d09b9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sort_vue_vue_type_template_id_2c9d09b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user-manager/actions/Sort.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user-manager/actions/Sort.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/user-manager/actions/Sort.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sort.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/Sort.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user-manager/actions/Sort.vue?vue&type=template&id=2c9d09b9&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/user-manager/actions/Sort.vue?vue&type=template&id=2c9d09b9& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_template_id_2c9d09b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sort.vue?vue&type=template&id=2c9d09b9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/Sort.vue?vue&type=template&id=2c9d09b9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_template_id_2c9d09b9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sort_vue_vue_type_template_id_2c9d09b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user-manager/actions/View.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/user-manager/actions/View.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_10d67340___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=10d67340& */ "./resources/js/components/user-manager/actions/View.vue?vue&type=template&id=10d67340&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/components/user-manager/actions/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_10d67340___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_10d67340___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user-manager/actions/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user-manager/actions/View.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/user-manager/actions/View.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user-manager/actions/View.vue?vue&type=template&id=10d67340&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/user-manager/actions/View.vue?vue&type=template&id=10d67340& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_10d67340___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=10d67340& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/actions/View.vue?vue&type=template&id=10d67340&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_10d67340___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_10d67340___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/user-manager/browse/User.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/user-manager/browse/User.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _User_vue_vue_type_template_id_96ec6592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=96ec6592& */ "./resources/js/components/user-manager/browse/User.vue?vue&type=template&id=96ec6592&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/components/user-manager/browse/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _User_vue_vue_type_template_id_96ec6592___WEBPACK_IMPORTED_MODULE_0__["render"],
  _User_vue_vue_type_template_id_96ec6592___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/user-manager/browse/User.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/user-manager/browse/User.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/user-manager/browse/User.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/browse/User.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/user-manager/browse/User.vue?vue&type=template&id=96ec6592&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/user-manager/browse/User.vue?vue&type=template&id=96ec6592& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_96ec6592___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./User.vue?vue&type=template&id=96ec6592& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/user-manager/browse/User.vue?vue&type=template&id=96ec6592&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_96ec6592___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_96ec6592___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VyL1NlbGVjdGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXItbWFuYWdlci9hY3Rpb25zL1JvbGUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2VyLW1hbmFnZXIvYWN0aW9ucy9TZWFyY2gudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2VyLW1hbmFnZXIvYWN0aW9ucy9Tb3J0LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VyL2FjdGlvbnMvVmlldy52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXItbWFuYWdlci9icm93c2UvVXNlci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL1VzZXIvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXItbWFuYWdlci9TZWxlY3Rpb24udnVlPzgzYWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VyL2FjdGlvbnMvUm9sZS52dWU/YTcwYSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2VyLW1hbmFnZXIvYWN0aW9ucy9TZWFyY2gudnVlPzNlNTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VyL2FjdGlvbnMvU29ydC52dWU/ZmNiOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2VyLW1hbmFnZXIvYWN0aW9ucy9WaWV3LnZ1ZT9hOTYyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXItbWFuYWdlci9icm93c2UvVXNlci52dWU/MmMzZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Vc2VyL0ZpZWxkLnZ1ZT9lMzE1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXItbWFuYWdlci9TZWxlY3Rpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXItbWFuYWdlci9TZWxlY3Rpb24udnVlP2IxMjUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VyL1NlbGVjdGlvbi52dWU/MmMyNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2VyLW1hbmFnZXIvYWN0aW9ucy9Sb2xlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2VyLW1hbmFnZXIvYWN0aW9ucy9Sb2xlLnZ1ZT9kNWJlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXItbWFuYWdlci9hY3Rpb25zL1JvbGUudnVlP2IxM2QiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VyL2FjdGlvbnMvU2VhcmNoLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2VyLW1hbmFnZXIvYWN0aW9ucy9TZWFyY2gudnVlPzViYzYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VyL2FjdGlvbnMvU2VhcmNoLnZ1ZT81MGRjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXItbWFuYWdlci9hY3Rpb25zL1NvcnQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXItbWFuYWdlci9hY3Rpb25zL1NvcnQudnVlP2NlNDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VyL2FjdGlvbnMvU29ydC52dWU/YTYwNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2VyLW1hbmFnZXIvYWN0aW9ucy9WaWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2VyLW1hbmFnZXIvYWN0aW9ucy9WaWV3LnZ1ZT9jN2VhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXItbWFuYWdlci9hY3Rpb25zL1ZpZXcudnVlPzkzMGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VyL2Jyb3dzZS9Vc2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2VyLW1hbmFnZXIvYnJvd3NlL1VzZXIudnVlPzU3MjAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VyL2Jyb3dzZS9Vc2VyLnZ1ZT8wN2RhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL1VzZXIvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL1VzZXIvRmllbGQudnVlP2JiZGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvVXNlci9GaWVsZC52dWU/Mjk2YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvbWl4aW5zL3VzZXJzZWxlY3Rvci5qcyJdLCJuYW1lcyI6WyJkYXRhIiwic2VsZWN0b3IiLCJjb21wdXRlZCIsIm1hcEdldHRlcnMiLCJzZWxlY3RlZFVzZXJzIiwibWV0aG9kcyIsIm1hcEFjdGlvbnMiLCJ0b2dnbGVTZWxlY3Rpb24iLCJjbGVhclNlbGVjdGlvbiIsImxvYWRTZWxlY3RvciIsImFyZWEiLCJEcmFnU2VsZWN0Iiwic2VsZWN0YWJsZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2FsbGJhY2siLCJlbGVtZW50cyIsIl8iLCJmb3JFYWNoIiwiZWwiLCJwYXJzZUludCIsImRhdGFzZXQiLCJzZWxlY3Rpb24iLCJvbkRyYWdTdGFydCIsInRhcmdldCIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiY2xvc2VzdCIsImRlc3Ryb3lTZWxlY3RvciIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTtBQUNBO0FBQ0E7QUFDQSxTQURBLGlCQUNBO0FBQ0E7QUFDQSxPQUhBO0FBS0EsU0FMQSxlQUtBLEtBTEEsRUFLQTtBQUNBO0FBQ0E7QUFQQSxLQURBO0FBV0EsWUFYQSxzQkFXQTtBQUNBO0FBQ0E7QUFiQSxHQURBO0FBaUJBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBO0FBRkEsS0FEQTtBQU1BO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBTkE7QUFXQTtBQUNBLG1CQURBO0FBRUE7QUFGQTtBQVhBLEdBakJBO0FBa0NBO0FBQ0EsVUFEQSxrQkFDQSxFQURBLEVBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUhBO0FBbENBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUJBO0FBRUE7QUFDQSxrQ0FEQTtBQUdBLDhCQUNBO0FBQ0EsK0JBREE7QUFFQTtBQUZBLElBREE7QUFNQSxXQU5BLHFCQU1BO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BRkE7O0FBSUE7QUFDQTtBQWRBLElBSEE7QUFvQkE7QUFDQSxRQURBLGdCQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0E7QUFIQSxHQXBCQTtBQTBCQSw2QkFDQTtBQUNBLHdDQURBO0FBRUE7QUFGQSxJQURBO0FBMUJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBRUE7QUFDQSxvQ0FEQTtBQUdBO0FBQ0E7QUFDQSxTQURBLGlCQUNBO0FBQ0E7QUFDQSxPQUhBO0FBS0EsU0FMQSxlQUtBLEtBTEEsRUFLQTtBQUNBO0FBQ0E7QUFQQTtBQURBLEdBSEE7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T0FBSCxDQUFXQyxTQUFaLENBQTdCLENBQVI7QUFBQSxXQUFwQjtBQUNBLFNBUDZCO0FBUzlCO0FBQ0FDLG1CQUFXLEVBQUUscUJBQUNKLEVBQUQsRUFBUTtBQUNwQjtBQUNBLGNBQUlBLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVQyxTQUFWLENBQW9CQyxRQUFwQixDQUE2QixzQkFBN0IsS0FBd0RQLEVBQUUsQ0FBQ0ssTUFBSCxDQUFVRyxPQUFWLENBQWtCLHVCQUFsQixDQUE1RCxFQUF3RztBQUN2RyxpQkFBSSxDQUFDekIsUUFBTDtBQUNBO0FBQ0Q7QUFmNkIsT0FBZixDQUFoQjtBQWlCQSxLQXhCUTtBQTBCVDBCLG1CQTFCUyw2QkEwQlM7QUFDakIsVUFBSSxLQUFLMUIsUUFBVCxFQUFtQjtBQUNsQixhQUFLQSxRQUFMLENBQWMyQixJQUFkO0FBQ0E7QUFDRDtBQTlCUTtBQWJJLENBQWYsRSIsImZpbGUiOiJqcy9jaHVua3MvMTUuanM/aWQ9MmIzYjZhNzAyM2Y2NTY4NzZlYjciLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJjYXJkIGgtZnVsbFwiPlxuXHRcdDxkaXYgdi1pZj1cImhhc0hlYWRlclwiIGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBwLTNcIj5cblx0XHRcdDxwLWJ1dHRvbiBAY2xpY2s9XCIkZW1pdCgncmVqZWN0JylcIiB0aGVtZT1cIndhcm5pbmdcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3RpbWVzJ11cIiBjbGFzcz1cIm1yLTJcIj48L2ZhLWljb24+IFJlamVjdDwvcC1idXR0b24+XG5cdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwiJGVtaXQoJ2FjY2VwdCcpXCIgdGhlbWU9XCJpbmZvXCI+QWNjZXB0IDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY2hlY2snXVwiIGNsYXNzPVwibWwtMlwiPjwvZmEtaWNvbj48L3AtYnV0dG9uPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiB2LWlmPVwic2VsZWN0aW9uLmxlbmd0aCA+IDBcIj5cblx0XHRcdDxwLXNvcnRhYmxlLWxpc3Qgdi1tb2RlbD1cInNlbGVjdGlvblwiIGNsYXNzPVwic29ydGFibGUtbGlzdFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy1mdWxsIHAtM1wiPlxuXHRcdFx0XHRcdDxwLXNvcnRhYmxlLWl0ZW0gdi1mb3I9XCJpdGVtIGluIHNlbGVjdGlvblwiIDprZXk9XCJpdGVtLmlkXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgcHktMlwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy0xLzEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAtc29ydGFibGUtaGFuZGxlIGNsYXNzPVwiY3Vyc29yLW1vdmVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxmYS1pY29uIGljb249XCJlbGxpcHNpcy12XCIgY2xhc3M9XCJoYW5kbGUgZmEtZncgdGV4dC1ncmF5LTQwMFwiPjwvZmEtaWNvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L3Atc29ydGFibGUtaGFuZGxlPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImgtZnVsbCB3LTMvMTIgdGV4dC1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuXHRcdFx0XHQgICAgICAgICAgICBcdDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndXNlciddXCIgY2xhc3M9XCJmYS1mdyBmYS0yeFwiPjwvZmEtaWNvbj5cblx0XHRcdFx0ICAgICAgICAgICAgPC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5LXRleHQgdy02LzEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdj57eyBpdGVtLm5hbWUgfX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3LTIvMTIgdGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwLWJ1dHRvbiBAY2xpY2s9XCJyZW1vdmUoaXRlbS5pZClcIiB0aGVtZT1cImRhbmdlclwiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndHJhc2gnXVwiPjwvZmEtaWNvbj48L3AtYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvcC1zb3J0YWJsZS1pdGVtPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvcC1zb3J0YWJsZS1saXN0PlxuXG5cdFx0XHQ8ZGl2IHYtaWY9XCJhZGRMaW1pdCA8PSAwXCIgY2xhc3M9XCJ0ZXh0LXNtIGl0YWxpYyB0ZXh0LWRhbmdlci02MDAgdGV4dC1jZW50ZXJcIj5cblx0XHRcdFx0U2VsZWN0aW9uIGxpbWl0IHJlYWNoZWRcblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiB2LWVsc2UgY2xhc3M9XCJoLWZ1bGwgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgdGV4dC01eGwgdGV4dC1ncmF5LTMwMFwiPlxuXHRcdFx0PGZhLWljb24gOmljb249XCJbJ2ZhcycsICd1c2VycyddXCIgY2xhc3M9XCJmYS1mdyBmYS0zeFwiPjwvZmEtaWNvbj5cblx0XHRcdDxzcGFuIGNsYXNzPVwidGV4dC1sZyBweS0yIHRleHQtZ3JheS01MDBcIj5TZWxlY3Qgc29tZSB1c2Vycy4uLjwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHNlbGVjdGlvbjoge1xuXHRcdFx0XHRnZXQoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMudmFsdWVcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRzZXQodmFsdWUpIHtcblx0XHRcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRhZGRMaW1pdCgpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMubGltaXQgLSB0aGlzLnNlbGVjdGlvbi5sZW5ndGhcblx0XHRcdH0sXG5cdFx0fSxcblxuXHRcdHByb3BzOiB7XG5cdFx0XHR2YWx1ZToge1xuXHRcdFx0XHR0eXBlOiBBcnJheSxcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcblx0XHRcdH0sXG5cblx0XHRcdGxpbWl0OiB7XG5cdFx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdFx0ZGVmYXVsdDogSW5maW5pdHlcblx0XHRcdH0sXG5cblx0XHRcdGhhc0hlYWRlcjoge1xuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdHJlbW92ZShpZCkge1xuXHRcdFx0XHR0aGlzLnNlbGVjdGlvbiA9IF8uZmlsdGVyKHRoaXMuc2VsZWN0aW9uLCAoaXRlbSkgPT4geyByZXR1cm4gaXRlbS5pZCAhPT0gaWQgfSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PHAtZHJvcGRvd24+XG5cdFx0PGZhLWljb24gY2xhc3M9XCJmYS1mdyBtci0xXCIgOmljb249XCJbJ2ZhcycsICd1c2VyLXRhZyddXCI+PC9mYS1pY29uPlxuXHRcdHt7IG9wdGlvbnNbcm9sZV0gfX1cblx0XHRcblx0XHQ8dGVtcGxhdGUgc2xvdD1cIm9wdGlvbnNcIj5cblx0XHRcdDxwLWRyb3Bkb3duLWl0ZW0gY2xhc3M9XCJ3LTQ4XCIgQGNsaWNrLnByZXZlbnQ9XCJzZXRSb2xlKG51bGwpXCI+RXZlcnlvbmU8L3AtZHJvcGRvd24taXRlbT5cblxuXHRcdFx0PHAtZHJvcGRvd24taXRlbSB2LWZvcj1cIihyb2xlLCBrZXkpIGluIG9wdGlvbnNcIiBjbGFzcz1cInctNDhcIiA6a2V5PVwia2V5XCIgQGNsaWNrLnByZXZlbnQ9XCJzZXRSb2xlKGtleSlcIj5cblx0XHRcdFx0e3sgcm9sZSB9fVxuXHRcdFx0PC9wLWRyb3Bkb3duLWl0ZW0+XG5cdFx0PC90ZW1wbGF0ZT5cblx0PC9wLWRyb3Bkb3duPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICd1c2VyLW1hbmFnZXItcm9sZS1hY3Rpb24nLFxuXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdC4uLm1hcEdldHRlcnMoe1xuXHRcdFx0XHRyb2xlOiAgJ3VzZXJtYW5hZ2VyL2dldFJvbGUnLFxuXHRcdFx0XHRyb2xlczogJ3VzZXJtYW5hZ2VyL2dldFJvbGVzJyxcdFx0XHRcblx0XHRcdH0pLFxuXG5cdFx0XHRvcHRpb25zKCkge1xuXHRcdFx0XHRsZXQgb3B0aW9ucyA9IHt9XG5cblx0XHRcdFx0Xy5mb3JFYWNoKHRoaXMucm9sZXMsIChyb2xlKSA9PiB7XG5cdFx0XHRcdFx0b3B0aW9uc1tyb2xlLnNsdWddID0gcm9sZS5uYW1lXG5cdFx0XHRcdH0pXG5cblx0XHRcdFx0cmV0dXJuIG9wdGlvbnNcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0d2F0Y2g6IHtcblx0XHRcdHJvbGUodmFsdWUpIHtcblx0XHRcdFx0dGhpcy5mZXRjaFVzZXJzKClcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XG5cdFx0XHRcdGZldGNoVXNlcnM6ICd1c2VybWFuYWdlci9mZXRjaFVzZXJzJyxcblx0XHRcdFx0c2V0Um9sZTogICAgJ3VzZXJtYW5hZ2VyL3NldFJvbGUnLFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PHAtaW5wdXQgbmFtZT1cInNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCIgdi1tb2RlbD1cInNlYXJjaFwiPjwvcC1pbnB1dD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAndXNlci1tYW5hZ2VyLXNlYXJjaC1hY3Rpb24nLFxuXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHNlYXJjaDoge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLnN0YXRlLnVzZXJtYW5hZ2VyLnNlYXJjaFxuICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICBzZXQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBcdHRoaXMuc2V0U2VhcmNoKHZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblx0XHR9LFxuXG5cdFx0d2F0Y2g6IHtcblx0XHRcdHNlYXJjaCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hVc2VycygpXG4gICAgICAgICAgICB9LFxuXHRcdH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcblx0XHRcdFx0ZmV0Y2hVc2VyczogJ3VzZXJtYW5hZ2VyL2ZldGNoVXNlcnMnLFxuXHRcdFx0XHRzZXRTZWFyY2g6ICAndXNlcm1hbmFnZXIvc2V0U2VhcmNoJ1xuXHRcdFx0fSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PHAtZHJvcGRvd24+XG5cdFx0PGZhLWljb24gY2xhc3M9XCJmYS1mdyBtci0xXCIgOmljb249XCJbJ2ZhcycsIHNvcnRJY29uKHNvcnQpXVwiPjwvZmEtaWNvbj5cblx0XHR7eyBvcHRpb25zW3NvcnRdICB9fVxuXHRcdFxuXHRcdDx0ZW1wbGF0ZSBzbG90PVwib3B0aW9uc1wiPlxuXHRcdFx0PHAtZHJvcGRvd24taXRlbSB2LWZvcj1cIih2YWx1ZSwga2V5KSBpbiBvcHRpb25zXCIgY2xhc3M9XCJ3LTQ4XCIgOmtleT1cImtleVwiIEBjbGljay5wcmV2ZW50PVwic29ydEJ5KGtleSlcIj5cblx0XHRcdFx0PGZhLWljb24gY2xhc3M9XCJmYS1mdyBtci0xXCIgOmljb249XCJbJ2ZhcycsIHNvcnRJY29uKGtleSldXCI+PC9mYS1pY29uPlxuXHRcdFx0XHR7eyB2YWx1ZSB9fVxuXHRcdFx0PC9wLWRyb3Bkb3duLWl0ZW0+XG5cdFx0PC90ZW1wbGF0ZT5cblx0PC9wLWRyb3Bkb3duPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICd1c2VyLW1hbmFnZXItc29ydC1hY3Rpb24nLFxuXHRcdFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRvcHRpb25zOiB7XG5cdFx0XHRcdFx0aWQ6ICdJRCcsXG5cdFx0XHRcdFx0bmFtZTogJ05hbWUnLFxuXHRcdFx0XHRcdGVtYWlsOiAnRW1haWwnLFxuXHRcdFx0XHRcdGNyZWF0ZWRfYXQ6ICdDcmVhdGlvbiBEYXRlJ1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHQuLi5tYXBHZXR0ZXJzKHtcblx0XHRcdFx0ZGlyZWN0aW9uOiAndXNlcm1hbmFnZXIvZ2V0RGlyZWN0aW9uJyxcblx0XHRcdFx0c29ydDogICAgICAndXNlcm1hbmFnZXIvZ2V0U29ydCcsXHRcdFx0XHRcblx0XHRcdH0pXG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHRkaXJlY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0dGhpcy5mZXRjaFVzZXJzKClcblx0XHRcdH0sXG5cblx0XHRcdHNvcnQodmFsdWUpIHtcblx0XHRcdFx0dGhpcy5mZXRjaFVzZXJzKClcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XG5cdFx0XHRcdHRvZ2dsZURpcmVjdGlvbjogJ3VzZXJtYW5hZ2VyL3RvZ2dsZURpcmVjdGlvbicsXG5cdFx0XHRcdGZldGNoVXNlcnM6ICAgICAgJ3VzZXJtYW5hZ2VyL2ZldGNoVXNlcnMnLFxuXHRcdFx0XHRzZXREaXJlY3Rpb246ICAgICd1c2VybWFuYWdlci9zZXREaXJlY3Rpb24nLFxuXHRcdFx0XHRzZXRTb3J0OiAgICAgICAgICd1c2VybWFuYWdlci9zZXRTb3J0JywgXG5cdFx0XHR9KSxcblxuXHRcdFx0c29ydEJ5KGtleSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvcnQgPT09IGtleSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZURpcmVjdGlvbigpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTb3J0KGtleSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREaXJlY3Rpb24oJ2FzYycpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc29ydEljb24oa2V5KSB7XG5cdFx0XHRcdGlmICh0aGlzLnNvcnQgPT09IGtleSkge1xuXHRcdFx0XHRcdGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ2FzYycpIHtcblx0XHRcdFx0XHRcdHJldHVybiAnc29ydC1hbW91bnQtZG93bidcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuICdzb3J0LWFtb3VudC11cCdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gJ2JhcnMnXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJpbmxpbmUtZmxleFwiPlxuXHRcdDxwLWJ1dHRvbiBAY2xpY2sucHJldmVudD1cInRvZ2dsZVZpZXcoJ2xpc3QnKVwiIDpkaXNhYmxlZD1cInZpZXcgPT0gJ2xpc3QnXCIgY2xhc3M9XCJyb3VuZGVkLWwgcm91bmRlZC1yLW5vbmVcIj5cblx0XHRcdDxmYS1pY29uIGNsYXNzPVwiZmEtZndcIiA6aWNvbj1cIlsnZmFzJywgJ2JhcnMnXVwiPjwvZmEtaWNvbj5cblx0XHQ8L3AtYnV0dG9uPlxuXG5cdFx0PHAtYnV0dG9uIEBjbGljay5wcmV2ZW50PVwidG9nZ2xlVmlldygnZ3JpZCcpXCIgOmRpc2FibGVkPVwidmlldyA9PSAnZ3JpZCdcIiBjbGFzcz1cInJvdW5kZWQtciByb3VuZGVkLWwtbm9uZVwiPlxuXHRcdFx0PGZhLWljb24gY2xhc3M9XCJmYS1md1wiIDppY29uPVwiWydmYXMnLCAndGgtbGFyZ2UnXVwiPjwvZmEtaWNvbj5cblx0XHQ8L3AtYnV0dG9uPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAndXNlci1tYW5hZ2VyLXZpZXctYWN0aW9uJyxcblxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHQuLi5tYXBHZXR0ZXJzKHtcblx0XHRcdFx0dmlldzogJ3VzZXJtYW5hZ2VyL2dldFZpZXcnLFx0XHRcdFx0XG5cdFx0XHR9KVxuXHRcdH0sXG5cblx0XHR3YXRjaDoge1xuXHRcdFx0dmlldyh2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLmZldGNoVXNlcnMoKVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcblx0XHRcdFx0ZmV0Y2hVc2VyczogJ3VzZXJtYW5hZ2VyL2ZldGNoVXNlcnMnLFxuXHRcdFx0XHR0b2dnbGVWaWV3OiAndXNlcm1hbmFnZXIvdG9nZ2xlVmlldycsXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IDpjbGFzcz1cIlsgdmlldyA9PSAnZ3JpZCcgPyAnZ2FsbGVyeS13cmFwcGVyJyA6ICdnYWxsZXJ5LXdyYXBwZXItLXJvdycgXVwiPlxuXHRcdDxkaXZcbiAgICAgICAgICAgIGNsYXNzPVwiZ2FsbGVyeS1pdGVtXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2dhbGxlcnktaXRlbS0tc2VsZWN0ZWQgc2VsZWN0YWJsZS0tc2VsZWN0ZWQnOiBpc1NlbGVjdGVkLCAnc2VsZWN0YWJsZSc6IGlzU2VsZWN0YWJsZSB9XCJcbiAgICAgICAgICAgIEBkYmxjbGljaz1cIiRlbWl0KCdkYmxjbGljaycpXCJcbiAgICAgICAgICAgIDpkYXRhLXNlbGVjdGlvbj1cInVzZXIuaWRcIj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImgtZnVsbCB3LWZ1bGwgdGV4dC1ncmF5LTMwMCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgXHQ8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3VzZXInXVwiIGNsYXNzPVwiZmEtZndcIiA6Y2xhc3M9XCJbIHZpZXcgPT0gJ2dyaWQnID8gJ2ZhLTN4JyA6ICdmYS0yeCddXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgPC9kaXY+XG5cdFx0PC9kaXY+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiZ2FsbGVyeS1zdWJ0aXRsZVwiPlxuXHRcdFx0PHNwYW4+e3sgdXNlci5uYW1lIH19PC9zcGFuPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiBjbGFzcz1cImdhbGxlcnktdGV4dFwiIHYtaWY9XCJ2aWV3ID09ICdsaXN0J1wiPlxuXHRcdFx0PHNwYW4gdi1pZj1cInVzZXIucm9sZXMubGVuZ3RoXCI+e3sgdXNlci5yb2xlc1swXS5uYW1lIH19PC9zcGFuPlxuXHRcdFx0PHNwYW4gdi1lbHNlPi0tPC9zcGFuPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiBjbGFzcz1cImdhbGxlcnktdGV4dFwiIHYtaWY9XCJ2aWV3ID09ICdsaXN0J1wiPlxuXHRcdFx0e3sgJG1vbWVudCh1c2VyLmNyZWF0ZWRfYXQpLmZvcm1hdCgnTU1NIERvLCBZWVlZJykgfX1cblx0XHQ8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ3VzZXItbWFuYWdlci11c2VyJyxcblxuXHRcdHByb3BzOiB7XG5cdFx0XHR1c2VyOiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHR9LFxuXG4gICAgICAgICAgICBpc1NlbGVjdGFibGU6IHtcbiAgICAgICAgICAgIFx0dHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIFx0ZGVmYXVsdDogdHJ1ZVxuICAgICAgICAgICAgfVxuXHRcdH0sXG5cblx0XHRjb21wdXRlZDoge1xuICAgICAgICAgICAgLi4ubWFwR2V0dGVycyh7XG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6ICd1c2VybWFuYWdlci9nZXRTZWxlY3RlZCcsXG4gICAgICAgICAgICAgICAgdmlldzogICAgICd1c2VybWFuYWdlci9nZXRWaWV3JyxcbiAgICAgICAgICAgIH0pLFxuXG4gICAgICAgICAgICBpc1NlbGVjdGVkKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmluY2x1ZGVzKHRoaXMuc2VsZWN0ZWQsIHRoaXMudXNlci5pZClcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PGxhYmVsIDpmb3I9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2xhYmVsXCI+e3sgZmllbGQubmFtZSB9fTwvbGFiZWw+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1zdGFydCBqdXN0aWZ5LWJldHdlZW5cIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ3LTEvMlwiPlxuXHRcdFx0XHQ8cC1idXR0b24gOmRpc2FibGVkPVwicmVxdWVzdE9wZW5cIiBAY2xpY2s9XCJvcGVuXCI+XG5cdFx0XHRcdFx0PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdwbHVzLWNpcmNsZSddXCIgY2xhc3M9XCJtci0xXCI+PC9mYS1pY29uPiBNYW5hZ2UgVXNlcnNcblx0XHRcdFx0PC9wLWJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8dXNlci1zZWxlY3Rpb25cblx0XHRcdFx0Y2xhc3M9XCJ3LTEvMlwiXG5cdFx0XHRcdDpsaW1pdD1cInNlbGVjdGlvbkxpbWl0XCJcblx0XHRcdFx0Omhhc0hlYWRlcj1cImZhbHNlXCJcblx0XHRcdFx0di1tb2RlbD1cInNlbGVjdGVkXCI+XG5cdFx0XHQ8L3VzZXItc2VsZWN0aW9uPlxuXHRcdDwvZGl2PlxuXG5cdFx0PCEtLSBVc2VyIE1hbmFnZXIgTW9kYWwgLS0+XG5cdFx0PHAtbW9kYWwgbmFtZT1cInVzZXItbWFuYWdlclwiIG5vLWhlYWRlciBuby1mb290ZXIgZXh0cmEtbGFyZ2Ugdi1tb2RlbD1cIm1vZGFsT3BlblwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwic2lkZS1jb250YWluZXJcIj5cblx0XHRcdFx0XHQ8dXNlci1zZWxlY3Rpb25cblx0XHRcdFx0XHRcdDpsaW1pdD1cInNlbGVjdGlvbkxpbWl0XCJcblx0XHRcdFx0XHRcdEByZWplY3Q9XCJyZWplY3RcIlxuXHRcdFx0XHRcdFx0QGFjY2VwdD1cImFjY2VwdFwiXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwic2VsZWN0aW9uXCI+XG5cdFx0XHRcdFx0PC91c2VyLXNlbGVjdGlvbj5cblx0XHRcdCAgIFx0PC9kaXY+XG5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNhcmRcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMyBwdC0yXCI+XG5cdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3M9XCJtci00XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwicHVzaFwiIHRoZW1lPVwic3VjY2Vzc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2Fycm93LWFsdC1jaXJjbGUtbGVmdCddXCIgY2xhc3M9XCJtci0xXCI+PC9mYS1pY29uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wLWJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHQ8dWwgY2xhc3M9XCJmbGV4IHctZnVsbFwiPlxuXHRcdFx0XHRcdFx0XHQgICAgPGxpIGNsYXNzPVwibXItMiB3LWZ1bGxcIj48c2VhcmNoLWFjdGlvbj48L3NlYXJjaC1hY3Rpb24+PC9saT5cblx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0PHVsIGNsYXNzPVwiZmxleFwiPlxuXHRcdFx0XHRcdFx0XHQgICAgPGxpIGNsYXNzPVwibXItMlwiPjxyb2xlLWFjdGlvbj48L3JvbGUtYWN0aW9uPjwvbGk+XG5cdFx0XHRcdFx0XHRcdCAgICA8bGkgY2xhc3M9XCJtci0yXCI+PHNvcnQtYWN0aW9uPjwvc29ydC1hY3Rpb24+PC9saT5cblx0XHRcdFx0XHRcdFx0ICAgIDxsaSBjbGFzcz1cIm1yLTJcIj48dmlldy1hY3Rpb24+PC92aWV3LWFjdGlvbj48L2xpPlxuXHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnYWxsZXJ5LWNvbnRhaW5lciBzZWxlY3RhYmxlc1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2FsbGVyeSBib3JkZXItYiBib3JkZXItZ3JheS0yMDAgcGItMlwiPlxuXHRcdFx0XHRcdFx0XHRcdDx1c2VyLWNhcmRcblx0XHRcdFx0XHRcdFx0XHRcdHYtZm9yPVwidXNlciBpbiB1c2Vyc1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6a2V5PVwidXNlci5pZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHQ6dXNlcj1cInVzZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0QGRibGNsaWNrPVwiYWRkKHVzZXIuaWQpXCI+XG5cdFx0XHRcdFx0XHRcdFx0PC91c2VyLWNhcmQ+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG4gICAgICAgICAgICBcdFx0PC9kaXY+XG4gICAgICAgICAgICBcdDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcC1tb2RhbD5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcblxuXHRpbXBvcnQgVXNlckNhcmQgICAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXItbWFuYWdlci9icm93c2UvVXNlci52dWUnXG5cdGltcG9ydCBVc2VyU2VsZWN0aW9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VyL1NlbGVjdGlvbi52dWUnXG5cblx0aW1wb3J0IFJvbGVBY3Rpb24gICAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91c2VyLW1hbmFnZXIvYWN0aW9ucy9Sb2xlLnZ1ZSdcblx0aW1wb3J0IFNlYXJjaEFjdGlvbiAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy91c2VyLW1hbmFnZXIvYWN0aW9ucy9TZWFyY2gudnVlJ1xuXHRpbXBvcnQgU29ydEFjdGlvbiAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXItbWFuYWdlci9hY3Rpb25zL1NvcnQudnVlJ1xuXHRpbXBvcnQgVmlld0FjdGlvbiAgICBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXItbWFuYWdlci9hY3Rpb25zL1ZpZXcudnVlJ1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAndXNlci1maWVsZHR5cGUnLFxuXG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0J3VzZXItY2FyZCc6ICAgICAgVXNlckNhcmQsXG5cdFx0XHQndXNlci1zZWxlY3Rpb24nOiBVc2VyU2VsZWN0aW9uLFxuXHRcdFx0J3JvbGUtYWN0aW9uJzogICAgUm9sZUFjdGlvbixcblx0XHRcdCdzZWFyY2gtYWN0aW9uJzogIFNlYXJjaEFjdGlvbixcblx0XHRcdCdzb3J0LWFjdGlvbic6ICAgIFNvcnRBY3Rpb24sXG5cdFx0XHQndmlldy1hY3Rpb24nOiAgICBWaWV3QWN0aW9uLFxuXHRcdH0sXG5cblx0XHRtaXhpbnM6IFtcblx0XHRcdHJlcXVpcmUoJy4uLy4uL21peGlucy91c2Vyc2VsZWN0b3InKS5kZWZhdWx0LFxuICAgICAgICBdLFxuXG5cdFx0ZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBcdHJlcXVlc3RPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIFx0bW9kYWxPcGVuOiBmYWxzZSxcbiAgICAgICAgICAgIFx0c2VsZWN0aW9uOiBbXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuXHRcdHByb3BzOiB7XG5cdFx0XHRmaWVsZDoge1xuXHRcdFx0ICAgIHR5cGU6IE9iamVjdCxcblx0XHRcdCAgICByZXF1aXJlZDogdHJ1ZSxcblx0XHRcdH0sXG5cblx0XHRcdHZhbHVlOiB7XG5cdFx0XHRcdHR5cGU6IEFycmF5LFxuXHRcdFx0XHRyZXF1aXJlZDogZmFsc2UsXG5cdFx0XHRcdGRlZmF1bHQ6ICgpID0+IFtdLFxuXHRcdFx0fSxcblx0XHR9LFxuXG5cdFx0d2F0Y2g6IHtcblx0XHRcdGxvYWRpbmcoaXNMb2FkaW5nKSB7XG5cdFx0XHRcdHRoaXMuJG5leHRUaWNrKCgpID0+IHtcblx0XHRcdFx0XHRpZiAoaXNMb2FkaW5nKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmRlc3Ryb3lTZWxlY3RvcigpXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRoaXMubG9hZFNlbGVjdG9yKHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5zZWxlY3RhYmxlcycpKVxuXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5yZXF1ZXN0T3Blbikge1xuXHRcdFx0XHRcdFx0XHR0aGlzLm1vZGFsT3BlbiAgID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHR0aGlzLnJlcXVlc3RPcGVuID0gZmFsc2Vcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHR9XG5cdFx0fSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICBcdC4uLm1hcEdldHRlcnMoe1xuICAgICAgICBcdFx0bG9hZGluZzogICAgICAgJ3VzZXJtYW5hZ2VyL2dldExvYWRpbmcnLFxuICAgICAgICBcdFx0dXNlcnM6ICAgICAgICAgJ3VzZXJtYW5hZ2VyL2dldFVzZXJzJyxcbiAgICAgICAgXHR9KSxcblxuXHRcdFx0c2VsZWN0ZWQ6IHtcblx0XHRcdFx0Z2V0KCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLnZhbHVlIHx8IFtdXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0c2V0KHZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSlcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0c2VsZWN0aW9uTGltaXQoKSB7XG5cdFx0XHRcdHJldHVybiBOdW1iZXIodGhpcy5maWVsZC5zZXR0aW5ncy5saW1pdCkgfHwgSW5maW5pdHlcblx0XHRcdH0sXG5cblx0XHRcdGFkZExpbWl0KCkge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5zZWxlY3Rpb25MaW1pdCAtIHRoaXMuc2VsZWN0aW9uLmxlbmd0aFxuXHRcdFx0fVxuICAgICAgICB9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XG5cdFx0XHRcdGZldGNoVXNlcnM6ICd1c2VybWFuYWdlci9mZXRjaFVzZXJzJyxcblx0XHRcdH0pLFxuXG5cdFx0XHRwdXNoKCkge1xuXHRcdFx0XHRfLmZvckVhY2godGhpcy5zZWxlY3RlZFVzZXJzLCAoaWQpID0+IHRoaXMuYWRkKGlkKSlcblx0XHRcdH0sXG5cblx0XHRcdGFkZChpZCkge1xuXHRcdFx0XHRpZiAodGhpcy5hZGRMaW1pdCA+IDApIHtcblx0XHRcdFx0XHRsZXQgZXhpc3RzID0gXy5maW5kKHRoaXMuc2VsZWN0aW9uLCBbICdpZCcsIGlkIF0pXG5cdFx0XHRcdFx0bGV0IHVzZXIgICA9IF8uZmluZCh0aGlzLnVzZXJzLCBbICdpZCcsIGlkIF0pXG5cblx0XHRcdFx0XHRpZiAoISBleGlzdHMpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0aW9uLnB1c2godXNlcilcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdG9wZW4oKSB7XG5cdFx0XHRcdHRoaXMuZmV0Y2hVc2VycygpXG5cblx0XHRcdFx0dGhpcy5zZWxlY3Rpb24gPSBbLi4udGhpcy5zZWxlY3RlZF1cblx0XHRcdFx0dGhpcy5yZXF1ZXN0T3BlbiA9IHRydWVcblx0XHRcdH0sXG5cblx0XHRcdGNsb3NlKCkge1xuXHRcdFx0XHR0aGlzLmNsZWFyU2VsZWN0aW9uKClcblxuXHRcdFx0XHR0aGlzLnNlbGVjdGlvbiA9IFtdXG5cdFx0XHRcdHRoaXMubW9kYWxPcGVuID0gZmFsc2Vcblx0XHRcdH0sXG5cblx0XHRcdHJlamVjdCgpIHtcblx0XHRcdFx0dGhpcy5jbG9zZSgpXG5cdFx0XHR9LFxuXG5cdFx0XHRhY2NlcHQoKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWQgPSB0aGlzLnNlbGVjdGlvblxuXHRcdFx0XHR0aGlzLmNsb3NlKClcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGgtZnVsbFwiIH0sIFtcbiAgICBfdm0uaGFzSGVhZGVyXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGJvcmRlci1iIGJvcmRlci1ncmF5LTIwMCBwLTNcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcIndhcm5pbmdcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJyZWplY3RcIilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGltZXNcIl0gfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBSZWplY3RcIilcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwiaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImFjY2VwdFwiKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIkFjY2VwdCBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTJcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNoZWNrXCJdIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uc2VsZWN0aW9uLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJwLXNvcnRhYmxlLWxpc3RcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNvcnRhYmxlLWxpc3RcIixcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWxlY3Rpb24sXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3Rpb24gPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgcC0zXCIgfSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc2VsZWN0aW9uLCBmdW5jdGlvbihpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInAtc29ydGFibGUtaXRlbVwiLCB7IGtleTogaXRlbS5pZCB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLWNlbnRlciBweS0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0xLzEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLXNvcnRhYmxlLWhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjdXJzb3ItbW92ZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGFuZGxlIGZhLWZ3IHRleHQtZ3JheS00MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcImVsbGlwc2lzLXZcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoLWZ1bGwgdy0zLzEyIHRleHQtZ3JheS0zMDAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IGZhLTJ4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ1c2VyXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS10ZXh0IHctNi8xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihfdm0uX3MoaXRlbS5uYW1lKSldKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyIHRleHQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcImRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5yZW1vdmUoaXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidHJhc2hcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5hZGRMaW1pdCA8PSAwXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIGl0YWxpYyB0ZXh0LWRhbmdlci02MDAgdGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdFNlbGVjdGlvbiBsaW1pdCByZWFjaGVkXFxuXFx0XFx0XCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICA6IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgIFwiaC1mdWxsIGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNXhsIHRleHQtZ3JheS0zMDBcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgZmEtM3hcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidXNlcnNcIl0gfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1sZyBweS0yIHRleHQtZ3JheS01MDBcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIlNlbGVjdCBzb21lIHVzZXJzLi4uXCIpXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInAtZHJvcGRvd25cIixcbiAgICBbXG4gICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1mdyBtci0xXCIsXG4gICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInVzZXItdGFnXCJdIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiXFxuXFx0XCIgKyBfdm0uX3MoX3ZtLm9wdGlvbnNbX3ZtLnJvbGVdKSArIFwiXFxuXFx0XFxuXFx0XCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgeyBzbG90OiBcIm9wdGlvbnNcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3LTQ4XCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2V0Um9sZShudWxsKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJFdmVyeW9uZVwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5vcHRpb25zLCBmdW5jdGlvbihyb2xlLCBrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJwLWRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctNDhcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNldFJvbGUoa2V5KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcblxcdFxcdFxcdFwiICsgX3ZtLl9zKHJvbGUpICsgXCJcXG5cXHRcXHRcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInAtaW5wdXRcIiwge1xuICAgIGF0dHJzOiB7IG5hbWU6IFwic2VhcmNoXCIsIHBsYWNlaG9sZGVyOiBcIlNlYXJjaFwiIH0sXG4gICAgbW9kZWw6IHtcbiAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICBfdm0uc2VhcmNoID0gJCR2XG4gICAgICB9LFxuICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hcIlxuICAgIH1cbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwicC1kcm9wZG93blwiLFxuICAgIFtcbiAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IG1yLTFcIixcbiAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIF92bS5zb3J0SWNvbihfdm0uc29ydCldIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiXFxuXFx0XCIgKyBfdm0uX3MoX3ZtLm9wdGlvbnNbX3ZtLnNvcnRdKSArIFwiXFxuXFx0XFxuXFx0XCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgeyBzbG90OiBcIm9wdGlvbnNcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLm9wdGlvbnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcInAtZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy00OFwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNvcnRCeShrZXkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IG1yLTFcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgX3ZtLnNvcnRJY29uKGtleSldIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIlxcblxcdFxcdFxcdFwiICsgX3ZtLl9zKHZhbHVlKSArIFwiXFxuXFx0XFx0XCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImlubGluZS1mbGV4XCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC1sIHJvdW5kZWQtci1ub25lXCIsXG4gICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS52aWV3ID09IFwibGlzdFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVWaWV3KFwibGlzdFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiYmFyc1wiXSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZC1yIHJvdW5kZWQtbC1ub25lXCIsXG4gICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS52aWV3ID09IFwiZ3JpZFwiIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGVWaWV3KFwiZ3JpZFwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwidGgtbGFyZ2VcIl0gfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBjbGFzczogW192bS52aWV3ID09IFwiZ3JpZFwiID8gXCJnYWxsZXJ5LXdyYXBwZXJcIiA6IFwiZ2FsbGVyeS13cmFwcGVyLS1yb3dcIl1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS1pdGVtXCIsXG4gICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgIFwiZ2FsbGVyeS1pdGVtLS1zZWxlY3RlZCBzZWxlY3RhYmxlLS1zZWxlY3RlZFwiOiBfdm0uaXNTZWxlY3RlZCxcbiAgICAgICAgICAgIHNlbGVjdGFibGU6IF92bS5pc1NlbGVjdGFibGVcbiAgICAgICAgICB9LFxuICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1zZWxlY3Rpb25cIjogX3ZtLnVzZXIuaWQgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgZGJsY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiZGJsY2xpY2tcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiaC1mdWxsIHctZnVsbCB0ZXh0LWdyYXktMzAwIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZndcIixcbiAgICAgICAgICAgICAgICBjbGFzczogW192bS52aWV3ID09IFwiZ3JpZFwiID8gXCJmYS0zeFwiIDogXCJmYS0yeFwiXSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJ1c2VyXCJdIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS1zdWJ0aXRsZVwiIH0sIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLm5hbWUpKV0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0udmlldyA9PSBcImxpc3RcIlxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLnVzZXIucm9sZXMubGVuZ3RoXG4gICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS51c2VyLnJvbGVzWzBdLm5hbWUpKV0pXG4gICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCItLVwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0udmlldyA9PSBcImxpc3RcIlxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ2FsbGVyeS10ZXh0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICBfdm0uJG1vbWVudChfdm0udXNlci5jcmVhdGVkX2F0KS5mb3JtYXQoXCJNTU0gRG8sIFlZWVlcIilcbiAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2xhYmVsXCIsIGF0dHJzOiB7IGZvcjogX3ZtLmZpZWxkLmhhbmRsZSB9IH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5maWVsZC5uYW1lKSldXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0xLzJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5yZXF1ZXN0T3BlbiB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vcGVuIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTFcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwicGx1cy1jaXJjbGVcIl0gfVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgTWFuYWdlIFVzZXJzXFxuXFx0XFx0XFx0XFx0XCIpXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwidXNlci1zZWxlY3Rpb25cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidy0xLzJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGxpbWl0OiBfdm0uc2VsZWN0aW9uTGltaXQsIGhhc0hlYWRlcjogZmFsc2UgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VsZWN0ZWQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2VsZWN0ZWQgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3RlZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwLW1vZGFsXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogXCJ1c2VyLW1hbmFnZXJcIixcbiAgICAgICAgICAgIFwibm8taGVhZGVyXCI6IFwiXCIsXG4gICAgICAgICAgICBcIm5vLWZvb3RlclwiOiBcIlwiLFxuICAgICAgICAgICAgXCJleHRyYS1sYXJnZVwiOiBcIlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5tb2RhbE9wZW4sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5tb2RhbE9wZW4gPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1vZGFsT3BlblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaWRlLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInVzZXItc2VsZWN0aW9uXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxpbWl0OiBfdm0uc2VsZWN0aW9uTGltaXQgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHJlamVjdDogX3ZtLnJlamVjdCwgYWNjZXB0OiBfdm0uYWNjZXB0IH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlbGVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5zZWxlY3Rpb24gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIHB4LTMgcHQtMlwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXItNFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJzdWNjZXNzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ucHVzaCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci0xXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogW1wiZmFzXCIsIFwiYXJyb3ctYWx0LWNpcmNsZS1sZWZ0XCJdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggdy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtci0yIHctZnVsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJzZWFyY2gtYWN0aW9uXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibXItMlwiIH0sIFtfYyhcInJvbGUtYWN0aW9uXCIpXSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibXItMlwiIH0sIFtfYyhcInNvcnQtYWN0aW9uXCIpXSwgMSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwibXItMlwiIH0sIFtfYyhcInZpZXctYWN0aW9uXCIpXSwgMSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJnYWxsZXJ5LWNvbnRhaW5lciBzZWxlY3RhYmxlc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImdhbGxlcnkgYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIHBiLTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnVzZXJzLCBmdW5jdGlvbih1c2VyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidXNlci1jYXJkXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogdXNlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHVzZXI6IHVzZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRibGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZCh1c2VyLmlkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NlbGVjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjFlZjI4MTMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjFlZjI4MTMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjFlZjI4MTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjFlZjI4MTMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NlbGVjdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjFlZjI4MTMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjFlZjI4MTMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXItbWFuYWdlci9TZWxlY3Rpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3Rpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlbGVjdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VsZWN0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMWVmMjgxMyZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUm9sZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGNhOTJlZGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUm9sZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1JvbGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4Y2E5MmVkZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4Y2E5MmVkZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4Y2E5MmVkZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUm9sZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGNhOTJlZGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOGNhOTJlZGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL3VzZXItbWFuYWdlci9hY3Rpb25zL1JvbGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Sb2xlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Sb2xlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Sb2xlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04Y2E5MmVkZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ZWJmNWZmYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4ZWJmNWZmYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4ZWJmNWZmYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4ZWJmNWZmYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2VhcmNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ZWJmNWZmYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4ZWJmNWZmYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvdXNlci1tYW5hZ2VyL2FjdGlvbnMvU2VhcmNoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VhcmNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWFyY2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlYXJjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGViZjVmZmEmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjOWQwOWI5JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NvcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Tb3J0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmM5ZDA5YjknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmM5ZDA5YjknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmM5ZDA5YjknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NvcnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJjOWQwOWI5JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJjOWQwOWI5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2VyLW1hbmFnZXIvYWN0aW9ucy9Tb3J0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU29ydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU29ydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU29ydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmM5ZDA5YjkmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1ZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEwZDY3MzQwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1ZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMTBkNjczNDAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMTBkNjczNDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMTBkNjczNDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1ZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTEwZDY3MzQwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzEwZDY3MzQwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2VyLW1hbmFnZXIvYWN0aW9ucy9WaWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTBkNjczNDAmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1VzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk2ZWM2NTkyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1VzZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTZlYzY1OTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTZlYzY1OTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTZlYzY1OTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTk2ZWM2NTkyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzk2ZWM2NTkyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy91c2VyLW1hbmFnZXIvYnJvd3NlL1VzZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05NmVjNjU5MiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhODg3MTEwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0YTg4NzExMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YTg4NzExMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YTg4NzExMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRhODg3MTEwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRhODg3MTEwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Vc2VyL0ZpZWxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGE4ODcxMTAmXCIiLCJpbXBvcnQgRHJhZ1NlbGVjdCBmcm9tICdEcmFnU2VsZWN0J1xuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0ZGF0YSgpIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VsZWN0b3I6IG51bGwsXG5cdFx0fVxuXHR9LFxuXG5cdGNvbXB1dGVkOiB7XG5cdFx0Li4ubWFwR2V0dGVycyh7XG5cdFx0XHRzZWxlY3RlZFVzZXJzOiAndXNlcm1hbmFnZXIvZ2V0U2VsZWN0ZWQnLFxuXHRcdH0pXG5cdH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgXHQuLi5tYXBBY3Rpb25zKHtcbiAgICAgICAgICAgIHRvZ2dsZVNlbGVjdGlvbjogJ3VzZXJtYW5hZ2VyL3RvZ2dsZVNlbGVjdGlvbicsXG4gICAgICAgICAgICBjbGVhclNlbGVjdGlvbjogICd1c2VybWFuYWdlci9jbGVhclNlbGVjdGlvbicsXG4gICAgICAgIH0pLFxuXG5cdFx0bG9hZFNlbGVjdG9yKGFyZWEpIHtcblx0XHRcdHRoaXMuc2VsZWN0b3IgPSBuZXcgRHJhZ1NlbGVjdCh7XG5cdFx0XHRcdGFyZWE6IGFyZWEsXG5cdFx0XHRcdHNlbGVjdGFibGVzOiBhcmVhLnF1ZXJ5U2VsZWN0b3JBbGwoJy5zZWxlY3RhYmxlJyksXG5cdFx0XHRcdGNhbGxiYWNrOiAoZWxlbWVudHMpID0+IHtcblx0XHRcdFx0XHR0aGlzLmNsZWFyU2VsZWN0aW9uKClcblxuXHRcdFx0XHRcdF8uZm9yRWFjaChlbGVtZW50cywgKGVsKSA9PiB0aGlzLnRvZ2dsZVNlbGVjdGlvbihwYXJzZUludChlbC5kYXRhc2V0LnNlbGVjdGlvbikpKVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIFN0YXJ0IGRyYWdnaW5nIHNlbGVjdG9yLi5cblx0XHRcdFx0b25EcmFnU3RhcnQ6IChlbCkgPT4ge1xuXHRcdFx0XHRcdC8vIFByZXZlbnQgc2VsZWN0b3IgZnJvbSBzZWxlY3Rpbmdcblx0XHRcdFx0XHRpZiAoZWwudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0YWJsZS0tc2VsZWN0ZWQnKSB8fCBlbC50YXJnZXQuY2xvc2VzdCgnLnNlbGVjdGFibGUtLXNlbGVjdGVkJykpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2VsZWN0b3IuYnJlYWsoKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSxcblx0XHRcdH0pXG5cdFx0fSxcblxuXHRcdGRlc3Ryb3lTZWxlY3RvcigpIHtcblx0XHRcdGlmICh0aGlzLnNlbGVjdG9yKSB7XG5cdFx0XHRcdHRoaXMuc2VsZWN0b3Iuc3RvcCgpXG5cdFx0XHR9XG5cdFx0fVxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9