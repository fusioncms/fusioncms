(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[99],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Terms/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Terms/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/views/Terms/SharedForm.vue");
//
//
//
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
  head: {
    title: function title() {
      return {
        inner: this.entry.name || 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      taxonomy: {},
      entry: {},
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({})
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: {
    sections: function sections() {
      var body = [];
      var sidebar = [];

      if (this.taxonomy.fieldset) {
        body = _.filter(this.taxonomy.fieldset.sections, function (section) {
          return section.placement == 'body';
        });
        sidebar = _.filter(this.taxonomy.fieldset.sections, function (section) {
          return section.placement == 'sidebar';
        });
      }

      return {
        body: body,
        sidebar: sidebar
      };
    },
    singular: function singular() {
      if (this.taxonomy.name) {
        return pluralize__WEBPACK_IMPORTED_MODULE_0___default.a.singular(this.taxonomy.name);
      }

      return '';
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.patch('/api/taxonomies/' + this.taxonomy.slug + '/' + this.entry.id).then(function (response) {
        toast('Entry saved successfully', 'success');

        _this.$router.push('/taxonomies/' + _this.taxonomy.slug);
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    },
    getEntry: function getEntry(to, from, next) {
      var vm = this;
      axios.get('/api/taxonomies/' + to.params.taxonomy + '/' + to.params.id).then(function (response) {
        vm.taxonomy = response.data.data.taxonomy;
        vm.entry = response.data.data;
        var fields = {
          name: vm.entry.name,
          slug: vm.entry.slug,
          status: vm.entry.status
        };

        _.forEach(vm.taxonomy.fields, function (value, handle) {
          Vue.set(fields, handle, vm.entry[handle]);
        });

        vm.form = new _forms_Form__WEBPACK_IMPORTED_MODULE_1__["default"](fields, true);
        vm.$nextTick(function () {
          vm.form.resetChangeListener();
        });
        vm.$emit('updateHead');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.getEntry(to, from, next);
      vm.$emit('updateHead');
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    this.getEntry(to, from, next);
    this.$emit('updateHead');
    next();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Terms/SharedForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Terms/SharedForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    taxonomy: {
      type: Object,
      required: true
    },
    form: {
      type: Object,
      required: true
    }
  },
  computed: {
    sections: function sections() {
      return this.$parent.sections;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Terms/Edit.vue?vue&type=template&id=78c749de&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Terms/Edit.vue?vue&type=template&id=78c749de& ***!
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
          _c(
            "app-title",
            { attrs: { icon: _vm.taxonomy.icon || "pencil-alt" } },
            [_vm._v("Edit " + _vm._s(_vm.singular))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "subtitle" } }, [
        _vm._v(_vm._s(_vm.taxonomy.description))
      ]),
      _vm._v(" "),
      _c("shared-form", { attrs: { taxonomy: _vm.taxonomy, form: _vm.form } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Terms/SharedForm.vue?vue&type=template&id=7c0a5910&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Terms/SharedForm.vue?vue&type=template&id=7c0a5910& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/js/views/Terms/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Terms/Edit.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_78c749de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=78c749de& */ "./resources/js/views/Terms/Edit.vue?vue&type=template&id=78c749de&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Terms/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_78c749de___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_78c749de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Terms/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Terms/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Terms/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Terms/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Terms/Edit.vue?vue&type=template&id=78c749de&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Terms/Edit.vue?vue&type=template&id=78c749de& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_78c749de___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=78c749de& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Terms/Edit.vue?vue&type=template&id=78c749de&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_78c749de___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_78c749de___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Terms/SharedForm.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Terms/SharedForm.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedForm_vue_vue_type_template_id_7c0a5910___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=template&id=7c0a5910& */ "./resources/js/views/Terms/SharedForm.vue?vue&type=template&id=7c0a5910&");
/* harmony import */ var _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm.vue?vue&type=script&lang=js& */ "./resources/js/views/Terms/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedForm_vue_vue_type_template_id_7c0a5910___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedForm_vue_vue_type_template_id_7c0a5910___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Terms/SharedForm.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Terms/SharedForm.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Terms/SharedForm.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Terms/SharedForm.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Terms/SharedForm.vue?vue&type=template&id=7c0a5910&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Terms/SharedForm.vue?vue&type=template&id=7c0a5910& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_7c0a5910___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedForm.vue?vue&type=template&id=7c0a5910& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Terms/SharedForm.vue?vue&type=template&id=7c0a5910&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_7c0a5910___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedForm_vue_vue_type_template_id_7c0a5910___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL1Rlcm1zL0VkaXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvdmlld3MvVGVybXMvU2hhcmVkRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL1Rlcm1zL0VkaXQudnVlPzBmYmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL1Rlcm1zL1NoYXJlZEZvcm0udnVlP2QzMGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL1Rlcm1zL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9UZXJtcy9FZGl0LnZ1ZT9kYTE0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9UZXJtcy9FZGl0LnZ1ZT9kN2ViIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9UZXJtcy9TaGFyZWRGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvVGVybXMvU2hhcmVkRm9ybS52dWU/ZWE4MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvVGVybXMvU2hhcmVkRm9ybS52dWU/NjBiMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsZUFGQTtBQUdBO0FBSEE7QUFLQSxHQWZBO0FBaUJBO0FBQ0E7QUFEQSxHQWpCQTtBQXFCQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFJQTtBQUNBO0FBQ0EsU0FGQTtBQUdBOztBQUVBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBSUEsS0FuQkE7QUFxQkEsWUFyQkEsc0JBcUJBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUEzQkEsR0FyQkE7QUFtREE7QUFDQSxVQURBLG9CQUNBO0FBQUE7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BSkEsV0FJQTtBQUNBO0FBQ0EsT0FOQTtBQU9BLEtBVEE7QUFXQSxZQVhBLG9CQVdBLEVBWEEsRUFXQSxJQVhBLEVBV0EsSUFYQSxFQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLDZCQURBO0FBRUEsNkJBRkE7QUFHQTtBQUhBOztBQU1BO0FBQ0E7QUFDQSxTQUZBOztBQUlBO0FBRUE7QUFDQTtBQUNBLFNBRkE7QUFJQTtBQUNBLE9BckJBO0FBc0JBO0FBcENBLEdBbkRBO0FBMEZBLGtCQTFGQSw0QkEwRkEsRUExRkEsRUEwRkEsSUExRkEsRUEwRkEsSUExRkEsRUEwRkE7QUFDQTtBQUNBO0FBRUE7QUFDQSxLQUpBO0FBS0EsR0FoR0E7QUFrR0EsbUJBbEdBLDZCQWtHQSxFQWxHQSxFQWtHQSxJQWxHQSxFQWtHQSxJQWxHQSxFQWtHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBeEdBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3VKQTtBQUNBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQU1BO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBTkEsR0FEQTtBQWFBO0FBQ0EsWUFEQSxzQkFDQTtBQUNBO0FBQ0E7QUFIQTtBQWJBLEc7Ozs7Ozs7Ozs7OztBQ3hLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUywwQ0FBMEMsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUyxpQkFBaUIsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsU0FBUyx5Q0FBeUMsRUFBRTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTBMLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXlGO0FBQzNCO0FBQ0w7OztBQUd6RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxnRkFBTTtBQUNSLEVBQUUscUZBQU07QUFDUixFQUFFLDhGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUFnTSxDQUFnQixzUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzk5LmpzP2lkPWRkMDg2NGQwMGU2NjRiZjllYWM4Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGFwcC10aXRsZSA6aWNvbj1cInRheG9ub215Lmljb24gfHwgJ3BlbmNpbC1hbHQnXCI+RWRpdCB7eyBzaW5ndWxhciB9fTwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cbiAgICAgICAgXG4gICAgICAgIDxwb3J0YWwgdG89XCJzdWJ0aXRsZVwiPnt7IHRheG9ub215LmRlc2NyaXB0aW9uIH19PC9wb3J0YWw+XG5cbiAgICAgICAgPHNoYXJlZC1mb3JtIDp0YXhvbm9teT1cInRheG9ub215XCIgOmZvcm09XCJmb3JtXCI+PC9zaGFyZWQtZm9ybT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnXG4gICAgaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vZm9ybXMvRm9ybSdcbiAgICBpbXBvcnQgU2hhcmVkRm9ybSBmcm9tICcuL1NoYXJlZEZvcm0nXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiB0aGlzLmVudHJ5Lm5hbWUgfHwgJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRheG9ub215OiB7fSxcbiAgICAgICAgICAgICAgICBlbnRyeToge30sXG4gICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe30pLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdzaGFyZWQtZm9ybSc6IFNoYXJlZEZvcm1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc2VjdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSBbXVxuICAgICAgICAgICAgICAgIGxldCBzaWRlYmFyID0gW11cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRheG9ub215LmZpZWxkc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSBfLmZpbHRlcih0aGlzLnRheG9ub215LmZpZWxkc2V0LnNlY3Rpb25zLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2VjdGlvbi5wbGFjZW1lbnQgPT0gJ2JvZHknXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhciA9IF8uZmlsdGVyKHRoaXMudGF4b25vbXkuZmllbGRzZXQuc2VjdGlvbnMsIGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWN0aW9uLnBsYWNlbWVudCA9PSAnc2lkZWJhcidcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyOiBzaWRlYmFyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2luZ3VsYXIoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGF4b25vbXkubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGx1cmFsaXplLnNpbmd1bGFyKHRoaXMudGF4b25vbXkubmFtZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wYXRjaCgnL2FwaS90YXhvbm9taWVzLycgKyB0aGlzLnRheG9ub215LnNsdWcgKyAnLycgKyB0aGlzLmVudHJ5LmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnRW50cnkgc2F2ZWQgc3VjY2Vzc2Z1bGx5JywgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvdGF4b25vbWllcy8nICsgdGhpcy50YXhvbm9teS5zbHVnKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXRFbnRyeSh0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgICAgIGxldCB2bSA9IHRoaXNcblxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS90YXhvbm9taWVzLycgKyB0by5wYXJhbXMudGF4b25vbXkgKyAnLycgKyB0by5wYXJhbXMuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7ICAgIFxuICAgICAgICAgICAgICAgICAgICB2bS50YXhvbm9teSA9IHJlc3BvbnNlLmRhdGEuZGF0YS50YXhvbm9teVxuICAgICAgICAgICAgICAgICAgICB2bS5lbnRyeSA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB2bS5lbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1Zzogdm0uZW50cnkuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogdm0uZW50cnkuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHZtLnRheG9ub215LmZpZWxkcywgZnVuY3Rpb24odmFsdWUsIGhhbmRsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVnVlLnNldChmaWVsZHMsIGhhbmRsZSwgdm0uZW50cnlbaGFuZGxlXSlcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtID0gbmV3IEZvcm0oZmllbGRzLCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgIHZtLiRuZXh0VGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5yZXNldENoYW5nZUxpc3RlbmVyKClcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgbmV4dCh2bSA9PiB7XG4gICAgICAgICAgICAgICAgdm0uZ2V0RW50cnkodG8sIGZyb20sIG5leHQpXG5cbiAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlVXBkYXRlKHRvLGZyb20sbmV4dCkge1xuICAgICAgICAgICAgdGhpcy5nZXRFbnRyeSh0bywgZnJvbSwgbmV4dClcblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5leHQoKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8Zm9ybS1jb250YWluZXI+XG5cdFx0PHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG5cdFx0XHRcdDxyb3V0ZXItbGluayB2LWlmPVwidGF4b25vbXkuc2x1Z1wiIDp0bz1cInsgbmFtZTogJ2VudHJpZXMuaW5kZXgnLCBwYXJhbXM6IHt0YXhvbm9teTogdGF4b25vbXkuc2x1Z30gfVwiIGNsYXNzPVwiYnV0dG9uXCI+R28gQmFjazwvcm91dGVyLWxpbms+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIEBjbGljay5wcmV2ZW50PVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIgOmNsYXNzPVwieydidXR0b24tLWRpc2FibGVkJzogIWZvcm0uaGFzQ2hhbmdlc31cIiA6ZGlzYWJsZWQ9XCIhZm9ybS5oYXNDaGFuZ2VzXCI+U2F2ZTwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9wb3J0YWw+XG5cblx0XHQ8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICA8cC10aXRsZVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZVwiPlxuICAgICAgICAgICAgICAgIDwvcC10aXRsZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXG5cdFx0PHRlbXBsYXRlIHYtc2xvdDpzaWRlYmFyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1zbHVnXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2x1Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNsdWdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlZFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICA6d2F0Y2g9XCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnc2x1ZycpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdzbHVnJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uc2x1Z1wiPlxuICAgICAgICAgICAgICAgICAgICA8L3Atc2x1Zz5cblxuICAgICAgICAgICAgICAgICAgICA8cC10b2dnbGVcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp0cnVlLXZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZmFsc2UtdmFsdWU9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcC10b2dnbGU+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCIkcGFyZW50LnN1Ym1pdFwiPlxuXHRcdFx0XHRcdDxwLWNhcmQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgZm9ybS1zaWRlYmFyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInh4bDptci0xMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PCEtLSAgLS0+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgbWItNiBmb3JtLWNvbnRlbnRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sIHctMS8yXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwLWlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cIm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiTmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0di1tb2RlbD1cImZvcm0ubmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Omhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZScpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbmFtZScpXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcC1pbnB1dD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sIHctMS8yXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwLXNsdWdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwic2x1Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bGFiZWw9XCJTbHVnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtb25vc3BhY2VkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0di1tb2RlbD1cImZvcm0uc2x1Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Omhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnc2x1ZycpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnc2x1ZycpXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6d2F0Y2g9XCJmb3JtLm5hbWVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wLXNsdWc+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwic2VjdGlvbnMuYm9keS5sZW5ndGggPiAwXCI+XG5cdFx0XHRcdFx0XHRcdDwhLS0gTG9vcCB0aHJvdWdoIGVhY2ggc2VjdGlvbiAtLT5cblx0XHRcdFx0XHRcdFx0PGRpdiB2LWZvcj1cIihzZWN0aW9uLCBpbmRleCkgaW4gc2VjdGlvbnMuYm9keVwiIDprZXk9XCJzZWN0aW9uLmhhbmRsZVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgZm9ybS1zaWRlYmFyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ4eGw6bXItMTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8aDM+e3sgc2VjdGlvbi5uYW1lIH19PC9oMz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzcz1cInRleHQtc21cIj57eyBzZWN0aW9uLmRlc2NyaXB0aW9uIH19PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZvcm0tY29udGVudFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8IS0tIExvb3AgdGhyb3VnaCBlYWNoIHNlY3Rpb24gZmllbGQgLS0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgdi1mb3I9XCJmaWVsZCBpbiBzZWN0aW9uLmZpZWxkc1wiIDprZXk9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2dyb3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGNvbXBvbmVudFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OmlzPVwiZmllbGQudHlwZS5pZCArICctZmllbGR0eXBlJ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ZmllbGQ9XCJmaWVsZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2LW1vZGVsPVwiZm9ybVtmaWVsZC5oYW5kbGVdXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9jb21wb25lbnQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHRcdFx0XHQ8aHIgdi1pZj1cImluZGV4ICE9PSBzZWN0aW9ucy5ib2R5Lmxlbmd0aCAtIDFcIj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PGRpdiB2LWVsc2UgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8cD5Zb3Ugc2hvdWxkIGNvbmZpZ3VyZSB5b3VyIFRheG9ub215IHdpdGggc29tZSBzZWN0aW9ucyBhbmQgZmllbGRzIGZpcnN0IDxmYS1pY29uIGNsYXNzPVwidGV4dC1lbW9qaVwiIDppY29uPVwiWydmYXMnLCAnaGFuZC1wZWFjZSddXCI+PC9mYS1pY29uPjwvcD5cblx0XHRcdFx0XHRcdFx0PHJvdXRlci1saW5rIHYtaWY9XCJ0YXhvbm9teS5pZFwiIGNsYXNzPVwiYnV0dG9uIGl0ZW1zLWNlbnRlclwiIDp0bz1cInsgbmFtZTogJ3RheG9ub21pZXMuZWRpdCcsIHBhcmFtczogeyB0YXhvbm9teTogdGF4b25vbXkuaWQgfX1cIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2VkaXQnXVwiIGNsYXNzPVwibXItMiB0ZXh0LXNtXCI+PC9mYS1pY29uPiBNYW5hZ2UgeW91ciB0YXhvbm9teTwvcm91dGVyLWxpbms+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3AtY2FyZD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgY2xhc3M9XCJzaWRlLWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCIkcGFyZW50LnN1Ym1pdFwiPlxuXHRcdFx0XHRcdDxwLWNhcmQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAtc2VsZWN0XG5cdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwic3RhdHVzXCJcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPVwiU3RhdHVzXCJcblx0XHRcdFx0XHRcdFx0XHRcdDpvcHRpb25zPVwiW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2xhYmVsJzogJ0VuYWJsZWQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd2YWx1ZSc6IDEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnbGFiZWwnOiAnRGlzYWJsZWQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCd2YWx1ZSc6IDAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRdXCJcblx0XHRcdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJmb3JtLnN0YXR1c1wiXG5cdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PC9wLXNlbGVjdD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3AtY2FyZD5cblxuXHRcdFx0XHRcdDxwLWNhcmQgdi1mb3I9XCIoc2VjdGlvbikgaW4gc2VjdGlvbnMuc2lkZWJhclwiIDprZXk9XCJzZWN0aW9uLmhhbmRsZVwiIGNsYXNzPVwibXQtNlwiPlxuXHRcdFx0XHRcdFx0PGgzPnt7IHNlY3Rpb24ubmFtZSB9fTwvaDM+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzcz1cInRleHQtc21cIj57eyBzZWN0aW9uLmRlc2NyaXB0aW9uIH19PC9wPlxuXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidy1mdWxsXCI+XG5cdFx0XHRcdFx0XHRcdDwhLS0gTG9vcCB0aHJvdWdoIGVhY2ggc2VjdGlvbiBmaWVsZCAtLT5cblx0XHRcdFx0XHRcdFx0PGRpdiB2LWZvcj1cImZpZWxkIGluIHNlY3Rpb24uZmllbGRzXCIgOmtleT1cImZpZWxkLmhhbmRsZVwiIGNsYXNzPVwiZm9ybV9fZ3JvdXBcIj5cblx0XHRcdFx0XHRcdFx0XHQ8Y29tcG9uZW50XG5cdFx0XHRcdFx0XHRcdFx0XHQ6aXM9XCJmaWVsZC50eXBlLmlkICsgJy1maWVsZHR5cGUnXCJcblx0XHRcdFx0XHRcdFx0XHRcdDpmaWVsZD1cImZpZWxkXCJcblx0XHRcdFx0XHRcdFx0XHRcdHYtbW9kZWw9XCJmb3JtW2ZpZWxkLmhhbmRsZV1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8L2NvbXBvbmVudD5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L3AtY2FyZD5cblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZm9ybS1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0cHJvcHM6IHtcblx0XHRcdHRheG9ub215OiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHR9LFxuXG5cdFx0XHRmb3JtOiB7XG5cdFx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRzZWN0aW9ucygpIHtcblx0XHRcdFx0cmV0dXJuIHRoaXMuJHBhcmVudC5zZWN0aW9uc1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFwcC10aXRsZVwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBpY29uOiBfdm0udGF4b25vbXkuaWNvbiB8fCBcInBlbmNpbC1hbHRcIiB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiRWRpdCBcIiArIF92bS5fcyhfdm0uc2luZ3VsYXIpKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwb3J0YWxcIiwgeyBhdHRyczogeyB0bzogXCJzdWJ0aXRsZVwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50YXhvbm9teS5kZXNjcmlwdGlvbikpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNoYXJlZC1mb3JtXCIsIHsgYXR0cnM6IHsgdGF4b25vbXk6IF92bS50YXhvbm9teSwgZm9ybTogX3ZtLmZvcm0gfSB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHt9XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzhjNzQ5ZGUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3OGM3NDlkZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3OGM3NDlkZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3OGM3NDlkZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzhjNzQ5ZGUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzhjNzQ5ZGUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9UZXJtcy9FZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzhjNzQ5ZGUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjMGE1OTEwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaGFyZWRGb3JtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnN2MwYTU5MTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnN2MwYTU5MTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnN2MwYTU5MTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjMGE1OTEwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdjMGE1OTEwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvVGVybXMvU2hhcmVkRm9ybS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NoYXJlZEZvcm0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdjMGE1OTEwJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==