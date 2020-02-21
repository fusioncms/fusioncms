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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL01hdHJpY2VzL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9NYXRyaWNlcy9FZGl0LnZ1ZT9iMTM2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9NYXRyaWNlcy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTWF0cmljZXMvRWRpdC52dWU/OTAxNiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTWF0cmljZXMvRWRpdC52dWU/YzA1MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsbUJBRkE7QUFHQSxtQkFIQTtBQUlBLGtCQUpBO0FBS0E7QUFDQSxvQkFEQTtBQUVBLGdCQUZBO0FBR0Esa0JBSEE7QUFJQSx1QkFKQTtBQUtBLDBCQUxBO0FBTUEsc0JBTkE7QUFRQSw4QkFSQTtBQVNBLDRCQVRBO0FBV0Esb0JBWEE7QUFZQSxzQkFaQTtBQWFBLGdCQWJBO0FBZUEsNkJBZkE7QUFnQkEsc0JBaEJBO0FBaUJBLHVCQWpCQTtBQW1CQSxpQkFuQkE7QUFvQkEsb0JBcEJBO0FBc0JBLDBCQXRCQTtBQXVCQSx1QkF2QkE7QUF3QkEsd0JBeEJBO0FBeUJBLDZCQXpCQTtBQTJCQSxvQkEzQkE7QUE2QkE7QUE3QkEsU0E4QkEsSUE5QkE7QUFMQTtBQXFDQSxHQS9DQTtBQWlEQTtBQUNBO0FBREEsR0FqREE7QUFxREE7QUFDQSxVQURBLG9CQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7O0FBRUE7QUFDQSxPQU5BLFdBTUE7QUFDQTtBQUNBLE9BUkE7QUFTQTtBQW5CQSxHQXJEQTtBQTJFQSxrQkEzRUEsNEJBMkVBLEVBM0VBLEVBMkVBLElBM0VBLEVBMkVBLElBM0VBLEVBMkVBO0FBQ0EsZUFDQSw4Q0FEQSxFQUVBLDJCQUZBLEVBR0EsMEJBSEEsR0FJQSxJQUpBLENBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FEQTtBQUVBO0FBRkE7QUFJQSxTQUxBO0FBT0E7QUFDQSx5QkFEQTtBQUVBO0FBRkE7QUFLQTtBQUNBO0FBQ0EsZ0NBREE7QUFFQTtBQUZBO0FBSUEsU0FMQTtBQU9BO0FBQ0EseUJBREE7QUFFQTtBQUZBLFdBcEJBLENBeUJBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLFNBRkE7O0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQSxPQWxFQTtBQW1FQSxLQXBFQSxDQUpBLFdBd0VBO0FBQ0E7QUFDQTtBQUNBLEtBM0VBO0FBNEVBO0FBeEpBLEc7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDO0FBQ0EsMkJBQTJCLFNBQVMsa0JBQWtCLEVBQUU7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQW1GO0FBQzNCO0FBQ0w7OztBQUduRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwwRUFBTTtBQUNSLEVBQUUsK0VBQU07QUFDUixFQUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEwTCxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzg3LmpzP2lkPTgyYmQzODZhYmE5M2Y3Zjk3YWM3Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGFwcC10aXRsZSBpY29uPVwiaGFzaHRhZ1wiPkVkaXQgTWF0cml4PC9hcHAtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxzaGFyZWQtZm9ybSA6aWQ9XCJpZFwiIDpmb3JtPVwiZm9ybVwiIDpzdWJtaXQ9XCJzdWJtaXRcIiA6ZmllbGRzZXRzPVwiZmllbGRzZXRzXCIgOm1hdHJpY2VzPVwibWF0cmljZXNcIj48L3NoYXJlZC1mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgU2hhcmVkRm9ybSBmcm9tICcuL1NoYXJlZEZvcm0nXG4gICAgaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vZm9ybXMvRm9ybSdcbiAgICBpbXBvcnQgcGx1cmFsaXplIGZyb20gJ3BsdXJhbGl6ZSdcbiAgICBpbXBvcnQgc3RvcmUgZnJvbSAnLi4vLi4vdnVleCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6IHRoaXMuZm9ybS5uYW1lIHx8ICdMb2FkaW5nLi4uJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgICAgICBwYXJlbnRfaWQ6ICcnLFxuICAgICAgICAgICAgICAgIGZpZWxkc2V0czogW10sXG4gICAgICAgICAgICAgICAgbWF0cmljZXM6IFtdLFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50X2lkOiAwLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnY29sbGVjdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc2V0OiBudWxsLFxuXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZV9zaW5ndWxhcjogJycsXG4gICAgICAgICAgICAgICAgICAgIHJlZmVyZW5jZV9wbHVyYWw6ICcnLFxuXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXI6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgcXVpY2tsaW5rOiAnMScsXG4gICAgICAgICAgICAgICAgICAgIGljb246ICcnLFxuXG4gICAgICAgICAgICAgICAgICAgIHNob3dfbmFtZV9maWVsZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgbmFtZV9sYWJlbDogJycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWVfZm9ybWF0OiAnJyxcblxuICAgICAgICAgICAgICAgICAgICByb3V0ZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnJyxcblxuICAgICAgICAgICAgICAgICAgICBjYXRlZ29yaXphYmxlOiAnMScsXG4gICAgICAgICAgICAgICAgICAgIGNyZWRpdGFibGU6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgcHVibGlzaGFibGU6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgcmV2aXNpb25fY29udHJvbDogJzEnLFxuXG4gICAgICAgICAgICAgICAgICAgIHNlb2FibGU6ICcxJyxcblxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICcxJyxcbiAgICAgICAgICAgICAgICB9LCB0cnVlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdzaGFyZWQtZm9ybSc6IFNoYXJlZEZvcm1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybS5yZWZlcmVuY2Vfc2luZ3VsYXIgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlZmVyZW5jZV9zaW5ndWxhciA9IHBsdXJhbGl6ZS5zaW5ndWxhcih0aGlzLmZvcm0ubmFtZSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5mb3JtLnJlZmVyZW5jZV9wbHVyYWwgPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtLnJlZmVyZW5jZV9wbHVyYWwgPSBwbHVyYWxpemUodGhpcy5mb3JtLm5hbWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wYXRjaCgnL2FwaS9tYXRyaWNlcy8nICsgdGhpcy5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goJ25hdmlnYXRpb24vZmV0Y2hBZG1pbk5hdmlnYXRpb24nKVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ01hdHJpeCBzdWNjZXNzZnVsbHkgdXBkYXRlZCcsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL21hdHJpY2VzJylcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9tYXRyaWNlcy8nICsgdG8ucGFyYW1zLm1hdHJpeCksXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2ZpZWxkc2V0cycpLFxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9tYXRyaWNlcycpXG4gICAgICAgICAgICBdKS50aGVuKGF4aW9zLnNwcmVhZChmdW5jdGlvbiAobWF0cml4LCBmaWVsZHNldHMsIG1hdHJpY2VzKSB7XG4gICAgICAgICAgICAgICAgbmV4dChmdW5jdGlvbih2bSkge1xuICAgICAgICAgICAgICAgICAgICB2bS5maWVsZHNldHMgPSBfLm1hcChmaWVsZHNldHMuZGF0YS5kYXRhLCBmdW5jdGlvbihmaWVsZHNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiBmaWVsZHNldC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IGZpZWxkc2V0LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uZmllbGRzZXRzLnVuc2hpZnQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogJ05vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHZtLm1hdHJpY2VzID0gXy5tYXAobWF0cmljZXMuZGF0YS5kYXRhLCBmdW5jdGlvbihwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogcGFyZW50Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlJzogcGFyZW50LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgdm0ubWF0cmljZXMudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnTm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiAwXG4gICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIHRoZSBjdXJyZW50IG1hdHJpeCAtIHdlIGRvbid0IHdhbnQgdG8gYXNzaWduIHRoZSBwYXJlbnRcbiAgICAgICAgICAgICAgICAgICAgLy8gdG8gaXRzZWxmLiBUaGF0IHdvdWxkIGNyZWF0ZSBhbiBpbmZpbml0ZSBsb29wLlxuICAgICAgICAgICAgICAgICAgICBfLnJlbW92ZSh2bS5tYXRyaWNlcywgZnVuY3Rpb24ocGFyZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyZW50LmxhYmVsID09IG1hdHJpeC5kYXRhLmRhdGEubmFtZVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHZtLmlkID0gbWF0cml4LmRhdGEuZGF0YS5pZFxuXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ucGFyZW50X2lkID0gbWF0cml4LmRhdGEuZGF0YS5wYXJlbnRfaWRcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5uYW1lID0gbWF0cml4LmRhdGEuZGF0YS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0uaGFuZGxlID0gbWF0cml4LmRhdGEuZGF0YS5oYW5kbGVcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5kZXNjcmlwdGlvbiA9IG1hdHJpeC5kYXRhLmRhdGEuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS50eXBlID0gbWF0cml4LmRhdGEuZGF0YS50eXBlXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0uZmllbGRzZXQgPSBtYXRyaXguZGF0YS5kYXRhLmZpZWxkc2V0ICYmIG1hdHJpeC5kYXRhLmRhdGEuZmllbGRzZXQuaWQgPyBtYXRyaXguZGF0YS5kYXRhLmZpZWxkc2V0LmlkIDogbnVsbFxuXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ucmVmZXJlbmNlX3Npbmd1bGFyID0gbWF0cml4LmRhdGEuZGF0YS5yZWZlcmVuY2Vfc2luZ3VsYXJcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5yZWZlcmVuY2VfcGx1cmFsID0gbWF0cml4LmRhdGEuZGF0YS5yZWZlcmVuY2VfcGx1cmFsXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5zaWRlYmFyID0gbWF0cml4LmRhdGEuZGF0YS5zaWRlYmFyID8gJzEnIDogJzAnXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ucXVpY2tsaW5rID0gbWF0cml4LmRhdGEuZGF0YS5xdWlja2xpbmsgPyAnMScgOiAnMCdcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5pY29uID0gbWF0cml4LmRhdGEuZGF0YS5pY29uXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5zaG93X25hbWVfZmllbGQgPSBtYXRyaXguZGF0YS5kYXRhLnNob3dfbmFtZV9maWVsZFxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLm5hbWVfbGFiZWwgPSBtYXRyaXguZGF0YS5kYXRhLm5hbWVfbGFiZWxcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5uYW1lX2Zvcm1hdCA9IG1hdHJpeC5kYXRhLmRhdGEubmFtZV9mb3JtYXRcblxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLnJvdXRlID0gbWF0cml4LmRhdGEuZGF0YS5yb3V0ZVxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLnRlbXBsYXRlID0gbWF0cml4LmRhdGEuZGF0YS50ZW1wbGF0ZVxuXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ucmV2aXNpb25fY29udHJvbCA9IG1hdHJpeC5kYXRhLmRhdGEucmV2aXNpb25fY29udHJvbCA/ICcxJyA6ICcwJ1xuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLmNhdGVnb3JpemFibGUgPSBtYXRyaXguZGF0YS5kYXRhLmNhdGVnb3JpemFibGUgPyAnMScgOiAnMCdcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5jcmVkaXRhYmxlID0gbWF0cml4LmRhdGEuZGF0YS5jcmVkaXRhYmxlID8gJzEnIDogJzAnXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ucHVibGlzaGFibGUgPSBtYXRyaXguZGF0YS5kYXRhLnB1Ymxpc2hhYmxlID8gJzEnIDogJzAnXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5zZW9hYmxlID0gbWF0cml4LmRhdGEuZGF0YS5zZW9hYmxlID8gJzEnIDogJzAnXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5zdGF0dXMgPSBtYXRyaXguZGF0YS5kYXRhLnN0YXR1cyA/ICcxJyA6ICcwJ1xuXG4gICAgICAgICAgICAgICAgICAgIHZtLiRlbWl0KCd1cGRhdGVIZWFkJylcblxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLnJlc2V0Q2hhbmdlTGlzdGVuZXIoKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KSkuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAgICAgICBuZXh0KCcvbWF0cmljZXMnKVxuICAgICAgICAgICAgICAgIHRvYXN0KCdUaGUgcmVxdWVzdGVkIG1hdHJpeCBjb3VsZCBub3QgYmUgZm91bmQnLCAnd2FybmluZycpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImhhc2h0YWdcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkVkaXQgTWF0cml4XCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNoYXJlZC1mb3JtXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICBpZDogX3ZtLmlkLFxuICAgICAgICAgIGZvcm06IF92bS5mb3JtLFxuICAgICAgICAgIHN1Ym1pdDogX3ZtLnN1Ym1pdCxcbiAgICAgICAgICBmaWVsZHNldHM6IF92bS5maWVsZHNldHMsXG4gICAgICAgICAgbWF0cmljZXM6IF92bS5tYXRyaWNlc1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NmE3ZDdiMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY2YTdkN2IwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY2YTdkN2IwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY2YTdkN2IwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NmE3ZDdiMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2NmE3ZDdiMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL01hdHJpY2VzL0VkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02NmE3ZDdiMCZcIiJdLCJzb3VyY2VSb290IjoiIn0=