(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Create.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Matrices/Create.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default, getMatricesAndFieldsets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatricesAndFieldsets", function() { return getMatricesAndFieldsets; });
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../vuex */ "./resources/js/vuex/index.js");
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/views/Matrices/SharedForm.vue");
//
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
        inner: 'Create a Matrix'
      };
    }
  },
  data: function data() {
    return {
      fieldsets: [],
      matrices: [],
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_2__["default"]({
        name: '',
        parent_id: 0,
        handle: '',
        description: '',
        type: 'collection',
        fieldset: null,
        reference_singular: '',
        reference_plural: '',
        sidebar: '1',
        quicklink: '1',
        icon: '',
        show_name_field: true,
        name_label: '',
        name_format: '',
        route: '',
        template: '',
        categorizable: '1',
        creditable: '1',
        publishable: '1',
        revision_control: '1',
        seoable: '1',
        status: '1'
      }, true)
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  methods: {
    submit: function submit() {
      var _this = this;

      if (this.form.reference_singular == '') {
        this.form.reference_singular = pluralize__WEBPACK_IMPORTED_MODULE_0___default.a.singular(this.form.name);
      }

      if (this.form.reference_plural == '') {
        this.form.reference_plural = pluralize__WEBPACK_IMPORTED_MODULE_0___default()(this.form.name);
      }

      this.form.post('/api/matrices').then(function (response) {
        _vuex__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch('navigation/fetchAdminNavigation');
        toast('Matrix successfully created', 'success');

        _this.$router.push('/matrices');
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/fieldsets'), axios.get('/api/matrices')]).then(axios.spread(function (fieldsets, matrices) {
      next(function (vm) {
        vm.fieldsets = _.map(fieldsets.data.data, function (fieldset) {
          return {
            'label': fieldset.name,
            'value': fieldset.id
          };
        });
        vm.fieldsets.unshift({
          'label': 'None',
          'value': null
        });
        vm.matrices = _.map(matrices.data.data, function (matrix) {
          return {
            'label': matrix.name,
            'value': matrix.id
          };
        });
        vm.matrices.unshift({
          'label': 'None',
          'value': 0
        });
        vm.form.resetChangeListener();
      });
    }));
  }
});
function getMatricesAndFieldsets(callback) {
  axios.all([axios.get('/api/fieldsets'), axios.get('/api/matrices')]).then(axios.spread(function (fieldsets, matrices) {
    fieldsets = _.map(fieldsets.data.data, function (fieldset) {
      return {
        'label': fieldset.name,
        'value': fieldset.id
      };
    });
    fieldsets.unshift({
      'label': 'None',
      'value': null
    });
    matrices = _.map(matrices.data.data, function (matrix) {
      return {
        'label': matrix.name,
        'value': matrix.id
      };
    });
    matrices.unshift({
      'label': 'None',
      'value': 0
    });
    callback(null, matrices, fieldsets);
  }));
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Create.vue?vue&type=template&id=79047622&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Matrices/Create.vue?vue&type=template&id=79047622& ***!
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
        "portal",
        { attrs: { to: "title" } },
        [
          _c("app-title", { attrs: { icon: "hashtag" } }, [
            _vm._v("Create Matrix")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("shared-form", {
        attrs: {
          form: _vm.form,
          submit: _vm.submit,
          fieldsets: _vm.fieldsets,
          matrices: _vm.matrices
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Matrices/Create.vue":
/*!************************************************!*\
  !*** ./resources/js/views/Matrices/Create.vue ***!
  \************************************************/
/*! exports provided: getMatricesAndFieldsets, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_79047622___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=79047622& */ "./resources/js/views/Matrices/Create.vue?vue&type=template&id=79047622&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/Matrices/Create.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatricesAndFieldsets", function() { return _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getMatricesAndFieldsets"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_79047622___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_79047622___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Matrices/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Matrices/Create.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Matrices/Create.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default, getMatricesAndFieldsets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Create.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMatricesAndFieldsets", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getMatricesAndFieldsets"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Matrices/Create.vue?vue&type=template&id=79047622&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Matrices/Create.vue?vue&type=template&id=79047622& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_79047622___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=79047622& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Create.vue?vue&type=template&id=79047622&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_79047622___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_79047622___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL01hdHJpY2VzL0NyZWF0ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL01hdHJpY2VzL0NyZWF0ZS52dWU/ZTJjMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTWF0cmljZXMvQ3JlYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTWF0cmljZXMvQ3JlYXRlLnZ1ZT85NTMzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9NYXRyaWNlcy9DcmVhdGUudnVlPzdmYWIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsa0JBRkE7QUFHQTtBQUNBLGdCQURBO0FBRUEsb0JBRkE7QUFHQSxrQkFIQTtBQUlBLHVCQUpBO0FBS0EsMEJBTEE7QUFNQSxzQkFOQTtBQVFBLDhCQVJBO0FBU0EsNEJBVEE7QUFXQSxvQkFYQTtBQVlBLHNCQVpBO0FBYUEsZ0JBYkE7QUFlQSw2QkFmQTtBQWdCQSxzQkFoQkE7QUFpQkEsdUJBakJBO0FBbUJBLGlCQW5CQTtBQW9CQSxvQkFwQkE7QUFzQkEsMEJBdEJBO0FBdUJBLHVCQXZCQTtBQXdCQSx3QkF4QkE7QUF5QkEsNkJBekJBO0FBMkJBLG9CQTNCQTtBQTZCQTtBQTdCQSxTQThCQSxJQTlCQTtBQUhBO0FBbUNBLEdBN0NBO0FBK0NBO0FBQ0E7QUFEQSxHQS9DQTtBQW1EQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBLE9BTkEsV0FNQTtBQUNBO0FBQ0EsT0FSQTtBQVNBO0FBbkJBLEdBbkRBO0FBeUVBLGtCQXpFQSw0QkF5RUEsRUF6RUEsRUF5RUEsSUF6RUEsRUF5RUEsSUF6RUEsRUF5RUE7QUFDQSxlQUNBLDJCQURBLEVBRUEsMEJBRkEsR0FHQSxJQUhBLENBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FEQTtBQUVBO0FBRkE7QUFJQSxTQUxBO0FBT0E7QUFDQSx5QkFEQTtBQUVBO0FBRkE7QUFLQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBO0FBSUEsU0FMQTtBQU9BO0FBQ0EseUJBREE7QUFFQTtBQUZBO0FBS0E7QUFFQSxPQTNCQTtBQTRCQSxLQTdCQSxDQUhBO0FBaUNBO0FBM0dBO0FBOEdBO0FBQ0EsYUFDQSwyQkFEQSxFQUVBLDBCQUZBLEdBR0EsSUFIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBLDhCQURBO0FBRUE7QUFGQTtBQUlBLEtBTEE7QUFPQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQUtBO0FBQ0E7QUFDQSw0QkFEQTtBQUVBO0FBRkE7QUFJQSxLQUxBO0FBT0E7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFLQTtBQUNBLEdBMUJBLENBSEE7QUE4QkEsQzs7Ozs7Ozs7Ozs7O0FDN0pBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxjQUFjLEVBQUU7QUFDbEM7QUFDQSwyQkFBMkIsU0FBUyxrQkFBa0IsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDL0JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRjtBQUMzQjtBQUNMOzs7QUFHckQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNEVBQU07QUFDUixFQUFFLGlGQUFNO0FBQ1IsRUFBRSwwRkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQTtBQUFBO0FBQTRMLENBQWdCLGtQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWhOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvODYuanM/aWQ9NTIzMDcwNDVjY2Q2YTVjYWI1NjQiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8YXBwLXRpdGxlIGljb249XCJoYXNodGFnXCI+Q3JlYXRlIE1hdHJpeDwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8c2hhcmVkLWZvcm0gOmZvcm09XCJmb3JtXCIgOnN1Ym1pdD1cInN1Ym1pdFwiIDpmaWVsZHNldHM9XCJmaWVsZHNldHNcIiA6bWF0cmljZXM9XCJtYXRyaWNlc1wiPjwvc2hhcmVkLWZvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJ1xuICAgIGltcG9ydCBzdG9yZSBmcm9tICcuLi8uLi92dWV4J1xuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nXG4gICAgaW1wb3J0IFNoYXJlZEZvcm0gZnJvbSAnLi9TaGFyZWRGb3JtJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogJ0NyZWF0ZSBhIE1hdHJpeCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmllbGRzZXRzOiBbXSxcbiAgICAgICAgICAgICAgICBtYXRyaWNlczogW10sXG4gICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X2lkOiAwLFxuICAgICAgICAgICAgICAgICAgICBoYW5kbGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJycsXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdjb2xsZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQ6IG51bGwsXG5cbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlX3Npbmd1bGFyOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcmVmZXJlbmNlX3BsdXJhbDogJycsXG5cbiAgICAgICAgICAgICAgICAgICAgc2lkZWJhcjogJzEnLFxuICAgICAgICAgICAgICAgICAgICBxdWlja2xpbms6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJycsXG5cbiAgICAgICAgICAgICAgICAgICAgc2hvd19uYW1lX2ZpZWxkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBuYW1lX2xhYmVsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZV9mb3JtYXQ6ICcnLFxuXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICcnLFxuXG4gICAgICAgICAgICAgICAgICAgIGNhdGVnb3JpemFibGU6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgY3JlZGl0YWJsZTogJzEnLFxuICAgICAgICAgICAgICAgICAgICBwdWJsaXNoYWJsZTogJzEnLFxuICAgICAgICAgICAgICAgICAgICByZXZpc2lvbl9jb250cm9sOiAnMScsXG5cbiAgICAgICAgICAgICAgICAgICAgc2VvYWJsZTogJzEnLFxuXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogJzEnLFxuICAgICAgICAgICAgICAgIH0sIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3NoYXJlZC1mb3JtJzogU2hhcmVkRm9ybVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLnJlZmVyZW5jZV9zaW5ndWxhciA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVmZXJlbmNlX3Npbmd1bGFyID0gcGx1cmFsaXplLnNpbmd1bGFyKHRoaXMuZm9ybS5uYW1lKVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZvcm0ucmVmZXJlbmNlX3BsdXJhbCA9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucmVmZXJlbmNlX3BsdXJhbCA9IHBsdXJhbGl6ZSh0aGlzLmZvcm0ubmFtZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucG9zdCgnL2FwaS9tYXRyaWNlcycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKCduYXZpZ2F0aW9uL2ZldGNoQWRtaW5OYXZpZ2F0aW9uJylcblxuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnTWF0cml4IHN1Y2Nlc3NmdWxseSBjcmVhdGVkJywgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbWF0cmljZXMnKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9maWVsZHNldHMnKSxcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvbWF0cmljZXMnKSxcbiAgICAgICAgICAgIF0pLnRoZW4oYXhpb3Muc3ByZWFkKGZ1bmN0aW9uIChmaWVsZHNldHMsIG1hdHJpY2VzKSB7XG4gICAgICAgICAgICAgICAgbmV4dChmdW5jdGlvbih2bSkge1xuICAgICAgICAgICAgICAgICAgICB2bS5maWVsZHNldHMgPSBfLm1hcChmaWVsZHNldHMuZGF0YS5kYXRhLCBmdW5jdGlvbihmaWVsZHNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiBmaWVsZHNldC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZpZWxkc2V0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uZmllbGRzZXRzLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogJ05vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHZtLm1hdHJpY2VzID0gXy5tYXAobWF0cmljZXMuZGF0YS5kYXRhLCBmdW5jdGlvbihtYXRyaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogbWF0cml4Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogbWF0cml4LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgdm0ubWF0cmljZXMudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnTm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAwXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5yZXNldENoYW5nZUxpc3RlbmVyKClcblxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGV4cG9ydCBmdW5jdGlvbiBnZXRNYXRyaWNlc0FuZEZpZWxkc2V0cyhjYWxsYmFjaykge1xuICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2ZpZWxkc2V0cycpLFxuICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL21hdHJpY2VzJyksXG4gICAgICAgIF0pLnRoZW4oYXhpb3Muc3ByZWFkKChmaWVsZHNldHMsIG1hdHJpY2VzKSA9PiB7XG4gICAgICAgICAgICBmaWVsZHNldHMgPSBfLm1hcChmaWVsZHNldHMuZGF0YS5kYXRhLCBmdW5jdGlvbihmaWVsZHNldCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICdsYWJlbCc6IGZpZWxkc2V0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZpZWxkc2V0LmlkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgZmllbGRzZXRzLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICdsYWJlbCc6ICdOb25lJyxcbiAgICAgICAgICAgICAgICAndmFsdWUnOiBudWxsXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBtYXRyaWNlcyA9IF8ubWFwKG1hdHJpY2VzLmRhdGEuZGF0YSwgZnVuY3Rpb24obWF0cml4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogbWF0cml4Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IG1hdHJpeC5pZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIG1hdHJpY2VzLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICdsYWJlbCc6ICdOb25lJyxcbiAgICAgICAgICAgICAgICAndmFsdWUnOiAwXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBtYXRyaWNlcywgZmllbGRzZXRzKVxuICAgICAgICB9KSlcbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwiaGFzaHRhZ1wiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQ3JlYXRlIE1hdHJpeFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzaGFyZWQtZm9ybVwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgZm9ybTogX3ZtLmZvcm0sXG4gICAgICAgICAgc3VibWl0OiBfdm0uc3VibWl0LFxuICAgICAgICAgIGZpZWxkc2V0czogX3ZtLmZpZWxkc2V0cyxcbiAgICAgICAgICBtYXRyaWNlczogX3ZtLm1hdHJpY2VzXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NyZWF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzkwNDc2MjImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ3JlYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ3JlYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzkwNDc2MjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzkwNDc2MjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzkwNDc2MjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NyZWF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzkwNDc2MjImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzkwNDc2MjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9NYXRyaWNlcy9DcmVhdGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DcmVhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NyZWF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JlYXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03OTA0NzYyMiZcIiJdLCJzb3VyY2VSb290IjoiIn0=