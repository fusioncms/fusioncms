(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Edit.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Matrices/Edit.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/views/Matrices/SharedForm.vue");
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../vuex */ "./resources/js/vuex/index.js");
//
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
        inner: this.form.name || 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      id: null,
      parent_id: '',
      fieldsets: [],
      matrices: [],
      matrix: {},
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
        parent_id: 0,
        name: '',
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
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    submit: function submit() {
      var _this = this;

      if (this.form.reference_singular == '') {
        this.form.reference_singular = pluralize__WEBPACK_IMPORTED_MODULE_2___default.a.singular(this.form.name);
      }

      if (this.form.reference_plural == '') {
        this.form.reference_plural = pluralize__WEBPACK_IMPORTED_MODULE_2___default()(this.form.name);
      }

      this.form.patch('/api/matrices/' + this.id).then(function (response) {
        _vuex__WEBPACK_IMPORTED_MODULE_3__["default"].dispatch('navigation/fetchAdminNavigation');
        toast('Matrix successfully updated', 'success');

        _this.$router.push('/matrices');
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/matrices/' + to.params.matrix), axios.get('/api/fieldsets'), axios.get('/api/matrices')]).then(axios.spread(function (matrix, fieldsets, matrices) {
      next(function (vm) {
        vm.matrix = matrix.data.data;
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
        vm.matrices = _.map(matrices.data.data, function (parent) {
          return {
            'label': parent.name,
            'value': parent.id
          };
        });
        vm.matrices.unshift({
          'label': 'None',
          'value': 0
        }); // Remove the current matrix - we don't want to assign the parent
        // to itself. That would create an infinite loop.

        _.remove(vm.matrices, function (parent) {
          return parent.label == matrix.data.data.name;
        });

        vm.id = matrix.data.data.id;
        vm.form.parent_id = matrix.data.data.parent_id;
        vm.form.name = matrix.data.data.name;
        vm.form.handle = matrix.data.data.handle;
        vm.form.description = matrix.data.data.description;
        vm.form.type = matrix.data.data.type;
        vm.form.fieldset = matrix.data.data.fieldset && matrix.data.data.fieldset.id ? matrix.data.data.fieldset.id : null;
        vm.form.reference_singular = matrix.data.data.reference_singular;
        vm.form.reference_plural = matrix.data.data.reference_plural;
        vm.form.sidebar = matrix.data.data.sidebar ? '1' : '0';
        vm.form.quicklink = matrix.data.data.quicklink ? '1' : '0';
        vm.form.icon = matrix.data.data.icon;
        vm.form.show_name_field = matrix.data.data.show_name_field;
        vm.form.name_label = matrix.data.data.name_label;
        vm.form.name_format = matrix.data.data.name_format;
        vm.form.route = matrix.data.data.route;
        vm.form.template = matrix.data.data.template;
        vm.form.revision_control = matrix.data.data.revision_control ? '1' : '0';
        vm.form.categorizable = matrix.data.data.categorizable ? '1' : '0';
        vm.form.creditable = matrix.data.data.creditable ? '1' : '0';
        vm.form.publishable = matrix.data.data.publishable ? '1' : '0';
        vm.form.seoable = matrix.data.data.seoable ? '1' : '0';
        vm.form.status = matrix.data.data.status ? '1' : '0';
        vm.$emit('updateHead');
        vm.form.resetChangeListener();
      });
    }))["catch"](function (error) {
      next('/matrices');
      toast('The requested matrix could not be found', 'warning');
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Edit.vue?vue&type=template&id=66a7d7b0&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Matrices/Edit.vue?vue&type=template&id=66a7d7b0& ***!
  \***********************************************************************************************************************************************************************************************************/
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
            _vm._v("Edit Matrix")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("shared-form", {
        attrs: {
          id: _vm.id,
          form: _vm.form,
          matrix: _vm.matrix,
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

/***/ "./resources/js/views/Matrices/Edit.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Matrices/Edit.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_66a7d7b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=66a7d7b0& */ "./resources/js/views/Matrices/Edit.vue?vue&type=template&id=66a7d7b0&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Matrices/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_66a7d7b0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_66a7d7b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Matrices/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Matrices/Edit.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Matrices/Edit.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Matrices/Edit.vue?vue&type=template&id=66a7d7b0&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Matrices/Edit.vue?vue&type=template&id=66a7d7b0& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_66a7d7b0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=66a7d7b0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Matrices/Edit.vue?vue&type=template&id=66a7d7b0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_66a7d7b0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_66a7d7b0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL01hdHJpY2VzL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9NYXRyaWNlcy9FZGl0LnZ1ZT9iMTM2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9NYXRyaWNlcy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTWF0cmljZXMvRWRpdC52dWU/OTAxNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTWF0cmljZXMvRWRpdC52dWU/YzA1MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsbUJBRkE7QUFHQSxtQkFIQTtBQUlBLGtCQUpBO0FBS0EsZ0JBTEE7QUFNQTtBQUNBLG9CQURBO0FBRUEsZ0JBRkE7QUFHQSxrQkFIQTtBQUlBLHVCQUpBO0FBS0EsMEJBTEE7QUFNQSxzQkFOQTtBQVFBLDhCQVJBO0FBU0EsNEJBVEE7QUFXQSxvQkFYQTtBQVlBLHNCQVpBO0FBYUEsZ0JBYkE7QUFlQSw2QkFmQTtBQWdCQSxzQkFoQkE7QUFpQkEsdUJBakJBO0FBbUJBLGlCQW5CQTtBQW9CQSxvQkFwQkE7QUFzQkEsMEJBdEJBO0FBdUJBLHVCQXZCQTtBQXdCQSx3QkF4QkE7QUF5QkEsNkJBekJBO0FBMkJBLG9CQTNCQTtBQTZCQTtBQTdCQSxTQThCQSxJQTlCQTtBQU5BO0FBc0NBLEdBaERBO0FBa0RBO0FBQ0E7QUFEQSxHQWxEQTtBQXNEQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTs7QUFFQTtBQUNBLE9BTkEsV0FNQTtBQUNBO0FBQ0EsT0FSQTtBQVNBO0FBbkJBLEdBdERBO0FBNEVBLGtCQTVFQSw0QkE0RUEsRUE1RUEsRUE0RUEsSUE1RUEsRUE0RUEsSUE1RUEsRUE0RUE7QUFDQSxlQUNBLDhDQURBLEVBRUEsMkJBRkEsRUFHQSwwQkFIQSxHQUlBLElBSkEsQ0FJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBREE7QUFFQTtBQUZBO0FBSUEsU0FMQTtBQU9BO0FBQ0EseUJBREE7QUFFQTtBQUZBO0FBS0E7QUFDQTtBQUNBLGdDQURBO0FBRUE7QUFGQTtBQUlBLFNBTEE7QUFPQTtBQUNBLHlCQURBO0FBRUE7QUFGQSxXQXJCQSxDQTBCQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxTQUZBOztBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0EsT0FuRUE7QUFvRUEsS0FyRUEsQ0FKQSxXQXlFQTtBQUNBO0FBQ0E7QUFDQSxLQTVFQTtBQTZFQTtBQTFKQSxHOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGNBQWMsRUFBRTtBQUNsQztBQUNBLDJCQUEyQixTQUFTLGtCQUFrQixFQUFFO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakNBO0FBQUE7QUFBQTtBQUFBO0FBQW1GO0FBQzNCO0FBQ0w7OztBQUduRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEwTCxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzg3LmpzP2lkPWE1YjkzOTc4ZWVjNDdkYmNlMWMyIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGFwcC10aXRsZSBpY29uPVwiaGFzaHRhZ1wiPkVkaXQgTWF0cml4PC9hcHAtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxzaGFyZWQtZm9ybSA6aWQ9XCJpZFwiIDpmb3JtPVwiZm9ybVwiIDptYXRyaXg9XCJtYXRyaXhcIiA6c3VibWl0PVwic3VibWl0XCIgOmZpZWxkc2V0cz1cImZpZWxkc2V0c1wiIDptYXRyaWNlcz1cIm1hdHJpY2VzXCI+PC9zaGFyZWQtZm9ybT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFNoYXJlZEZvcm0gZnJvbSAnLi9TaGFyZWRGb3JtJ1xuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nXG4gICAgaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnXG4gICAgaW1wb3J0IHN0b3JlIGZyb20gJy4uLy4uL3Z1ZXgnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiB0aGlzLmZvcm0ubmFtZSB8fCAnTG9hZGluZy4uLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgcGFyZW50X2lkOiAnJyxcbiAgICAgICAgICAgICAgICBmaWVsZHNldHM6IFtdLFxuICAgICAgICAgICAgICAgIG1hdHJpY2VzOiBbXSxcbiAgICAgICAgICAgICAgICBtYXRyaXg6IHt9LFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X2lkOiAwLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0OiBudWxsLFxuXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZV9zaW5ndWxhcjogJycsXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZV9wbHVyYWw6ICcnLFxuXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXI6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tsaW5rOiAnMScsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICcnLFxuXG4gICAgICAgICAgICAgICAgICAgIHNob3dfbmFtZV9maWVsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZV9sYWJlbDogJycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVfZm9ybWF0OiAnJyxcblxuICAgICAgICAgICAgICAgICAgICByb3V0ZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnJyxcblxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaXphYmxlOiAnMScsXG4gICAgICAgICAgICAgICAgICAgIGNyZWRpdGFibGU6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgcHVibGlzaGFibGU6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgcmV2aXNpb25fY29udHJvbDogJzEnLFxuXG4gICAgICAgICAgICAgICAgICAgIHNlb2FibGU6ICcxJyxcblxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICcxJyxcbiAgICAgICAgICAgICAgICB9LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdzaGFyZWQtZm9ybSc6IFNoYXJlZEZvcm1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5yZWZlcmVuY2Vfc2luZ3VsYXIgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlZmVyZW5jZV9zaW5ndWxhciA9IHBsdXJhbGl6ZS5zaW5ndWxhcih0aGlzLmZvcm0ubmFtZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLnJlZmVyZW5jZV9wbHVyYWwgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlZmVyZW5jZV9wbHVyYWwgPSBwbHVyYWxpemUodGhpcy5mb3JtLm5hbWUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhdGNoKCcvYXBpL21hdHJpY2VzLycgKyB0aGlzLmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCgnbmF2aWdhdGlvbi9mZXRjaEFkbWluTmF2aWdhdGlvbicpXG5cbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ01hdHJpeCBzdWNjZXNzZnVsbHkgdXBkYXRlZCcsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL21hdHJpY2VzJylcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9tYXRyaWNlcy8nICsgdG8ucGFyYW1zLm1hdHJpeCksXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2ZpZWxkc2V0cycpLFxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9tYXRyaWNlcycpXG4gICAgICAgICAgICBdKS50aGVuKGF4aW9zLnNwcmVhZChmdW5jdGlvbiAobWF0cml4LCBmaWVsZHNldHMsIG1hdHJpY2VzKSB7XG4gICAgICAgICAgICAgICAgbmV4dChmdW5jdGlvbih2bSkge1xuICAgICAgICAgICAgICAgICAgICB2bS5tYXRyaXggPSBtYXRyaXguZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIHZtLmZpZWxkc2V0cyA9IF8ubWFwKGZpZWxkc2V0cy5kYXRhLmRhdGEsIGZ1bmN0aW9uKGZpZWxkc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6IGZpZWxkc2V0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogZmllbGRzZXQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB2bS5maWVsZHNldHMudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnTm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgdm0ubWF0cmljZXMgPSBfLm1hcChtYXRyaWNlcy5kYXRhLmRhdGEsIGZ1bmN0aW9uKHBhcmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiBwYXJlbnQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBwYXJlbnQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB2bS5tYXRyaWNlcy51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdOb25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IDBcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgdGhlIGN1cnJlbnQgbWF0cml4IC0gd2UgZG9uJ3Qgd2FudCB0byBhc3NpZ24gdGhlIHBhcmVudFxuICAgICAgICAgICAgICAgICAgICAvLyB0byBpdHNlbGYuIFRoYXQgd291bGQgY3JlYXRlIGFuIGluZmluaXRlIGxvb3AuXG4gICAgICAgICAgICAgICAgICAgIF8ucmVtb3ZlKHZtLm1hdHJpY2VzLCBmdW5jdGlvbihwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJlbnQubGFiZWwgPT0gbWF0cml4LmRhdGEuZGF0YS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uaWQgPSBtYXRyaXguZGF0YS5kYXRhLmlkXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5wYXJlbnRfaWQgPSBtYXRyaXguZGF0YS5kYXRhLnBhcmVudF9pZFxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLm5hbWUgPSBtYXRyaXguZGF0YS5kYXRhLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5oYW5kbGUgPSBtYXRyaXguZGF0YS5kYXRhLmhhbmRsZVxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLmRlc2NyaXB0aW9uID0gbWF0cml4LmRhdGEuZGF0YS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLnR5cGUgPSBtYXRyaXguZGF0YS5kYXRhLnR5cGVcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5maWVsZHNldCA9IG1hdHJpeC5kYXRhLmRhdGEuZmllbGRzZXQgJiYgbWF0cml4LmRhdGEuZGF0YS5maWVsZHNldC5pZCA/IG1hdHJpeC5kYXRhLmRhdGEuZmllbGRzZXQuaWQgOiBudWxsXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5yZWZlcmVuY2Vfc2luZ3VsYXIgPSBtYXRyaXguZGF0YS5kYXRhLnJlZmVyZW5jZV9zaW5ndWxhclxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLnJlZmVyZW5jZV9wbHVyYWwgPSBtYXRyaXguZGF0YS5kYXRhLnJlZmVyZW5jZV9wbHVyYWxcblxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLnNpZGViYXIgPSBtYXRyaXguZGF0YS5kYXRhLnNpZGViYXIgPyAnMScgOiAnMCdcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5xdWlja2xpbmsgPSBtYXRyaXguZGF0YS5kYXRhLnF1aWNrbGluayA/ICcxJyA6ICcwJ1xuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLmljb24gPSBtYXRyaXguZGF0YS5kYXRhLmljb25cblxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLnNob3dfbmFtZV9maWVsZCA9IG1hdHJpeC5kYXRhLmRhdGEuc2hvd19uYW1lX2ZpZWxkXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ubmFtZV9sYWJlbCA9IG1hdHJpeC5kYXRhLmRhdGEubmFtZV9sYWJlbFxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLm5hbWVfZm9ybWF0ID0gbWF0cml4LmRhdGEuZGF0YS5uYW1lX2Zvcm1hdFxuXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ucm91dGUgPSBtYXRyaXguZGF0YS5kYXRhLnJvdXRlXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0udGVtcGxhdGUgPSBtYXRyaXguZGF0YS5kYXRhLnRlbXBsYXRlXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5yZXZpc2lvbl9jb250cm9sID0gbWF0cml4LmRhdGEuZGF0YS5yZXZpc2lvbl9jb250cm9sID8gJzEnIDogJzAnXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0uY2F0ZWdvcml6YWJsZSA9IG1hdHJpeC5kYXRhLmRhdGEuY2F0ZWdvcml6YWJsZSA/ICcxJyA6ICcwJ1xuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLmNyZWRpdGFibGUgPSBtYXRyaXguZGF0YS5kYXRhLmNyZWRpdGFibGUgPyAnMScgOiAnMCdcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5wdWJsaXNoYWJsZSA9IG1hdHJpeC5kYXRhLmRhdGEucHVibGlzaGFibGUgPyAnMScgOiAnMCdcblxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLnNlb2FibGUgPSBtYXRyaXguZGF0YS5kYXRhLnNlb2FibGUgPyAnMScgOiAnMCdcblxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLnN0YXR1cyA9IG1hdHJpeC5kYXRhLmRhdGEuc3RhdHVzID8gJzEnIDogJzAnXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uJGVtaXQoJ3VwZGF0ZUhlYWQnKVxuXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ucmVzZXRDaGFuZ2VMaXN0ZW5lcigpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pKS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIG5leHQoJy9tYXRyaWNlcycpXG4gICAgICAgICAgICAgICAgdG9hc3QoJ1RoZSByZXF1ZXN0ZWQgbWF0cml4IGNvdWxkIG5vdCBiZSBmb3VuZCcsICd3YXJuaW5nJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwiaGFzaHRhZ1wiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiRWRpdCBNYXRyaXhcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic2hhcmVkLWZvcm1cIiwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIGlkOiBfdm0uaWQsXG4gICAgICAgICAgZm9ybTogX3ZtLmZvcm0sXG4gICAgICAgICAgbWF0cml4OiBfdm0ubWF0cml4LFxuICAgICAgICAgIHN1Ym1pdDogX3ZtLnN1Ym1pdCxcbiAgICAgICAgICBmaWVsZHNldHM6IF92bS5maWVsZHNldHMsXG4gICAgICAgICAgbWF0cmljZXM6IF92bS5tYXRyaWNlc1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NmE3ZDdiMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvZnVzaW9uY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY2YTdkN2IwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY2YTdkN2IwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY2YTdkN2IwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NmE3ZDdiMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NmE3ZDdiMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL01hdHJpY2VzL0VkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NmE3ZDdiMCZcIiJdLCJzb3VyY2VSb290IjoiIn0=