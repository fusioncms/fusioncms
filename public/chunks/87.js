(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[87],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Forms/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Forms/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Form */ "./resources/js/views/Forms/Form.vue");
//
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
      id: null,
      fieldsets: [],
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: '',
        handle: '',
        description: '',
        fieldset: null,
        collect_email_addresses: false,
        collect_ip_addresses: false,
        response_receipt: false,
        message: '',
        redirect_on_submission: false,
        redirect_url: '',
        enable_recaptcha: false,
        enable_honeypot: false,
        send_to: '',
        reply_to: '',
        form_template: '',
        thankyou_template: '',
        status: true
      })
    };
  },
  components: {
    'shared-form': _Form__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.patch('/api/forms/' + this.id).then(function (response) {
        toast('Form successfully saved', 'success');

        _this.$router.push('/forms');
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/fieldsets'), axios.get('/api/forms/' + to.params.form)]).then(axios.spread(function (fieldsets, form) {
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
        vm.id = form.data.data.id;
        vm.form.name = form.data.data.name;
        vm.form.handle = form.data.data.handle;
        vm.form.description = form.data.data.description;
        vm.form.fieldset = form.data.data.fieldset && form.data.data.fieldset.id ? form.data.data.fieldset.id : null;
        vm.form.collect_email_addresses = form.data.data.collect_email_addresses;
        vm.form.collect_ip_addresses = form.data.data.collect_ip_addresses;
        vm.form.response_receipt = form.data.data.response_receipt;
        vm.form.message = form.data.data.message;
        vm.form.redirect_on_submission = form.data.data.redirect_on_submission;
        vm.form.redirect_url = form.data.data.redirect_url;
        vm.form.enable_recaptcha = form.data.data.enable_recaptcha;
        vm.form.enable_honeypot = form.data.data.enable_honeypot;
        vm.form.send_to = form.data.data.send_to;
        vm.form.reply_to = form.data.data.reply_to;
        vm.form.form_template = form.data.data.form_template;
        vm.form.thankyou_template = form.data.data.thankyou_template;
        vm.form.status = form.data.data.status;
      });
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Forms/Edit.vue?vue&type=template&id=8accd52e&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Forms/Edit.vue?vue&type=template&id=8accd52e& ***!
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
          _c("app-title", { attrs: { icon: "paper-plane" } }, [
            _vm._v("Edit Form")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("shared-form", {
        attrs: { form: _vm.form, fieldsets: _vm.fieldsets, submit: _vm.submit }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Forms/Edit.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Forms/Edit.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_8accd52e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=8accd52e& */ "./resources/js/views/Forms/Edit.vue?vue&type=template&id=8accd52e&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Forms/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_8accd52e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_8accd52e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Forms/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Forms/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Forms/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Forms/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Forms/Edit.vue?vue&type=template&id=8accd52e&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Forms/Edit.vue?vue&type=template&id=8accd52e& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_8accd52e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=8accd52e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Forms/Edit.vue?vue&type=template&id=8accd52e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_8accd52e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_8accd52e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0Zvcm1zL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Gb3Jtcy9FZGl0LnZ1ZT80N2RmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Gb3Jtcy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRm9ybXMvRWRpdC52dWU/MzBlZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRm9ybXMvRWRpdC52dWU/ZjkzZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGNBREE7QUFFQSxtQkFGQTtBQUdBO0FBQ0EsZ0JBREE7QUFFQSxrQkFGQTtBQUdBLHVCQUhBO0FBSUEsc0JBSkE7QUFNQSxzQ0FOQTtBQU9BLG1DQVBBO0FBUUEsK0JBUkE7QUFVQSxtQkFWQTtBQVdBLHFDQVhBO0FBWUEsd0JBWkE7QUFjQSwrQkFkQTtBQWVBLDhCQWZBO0FBaUJBLG1CQWpCQTtBQWtCQSxvQkFsQkE7QUFvQkEseUJBcEJBO0FBcUJBLDZCQXJCQTtBQXVCQTtBQXZCQTtBQUhBO0FBNkJBLEdBL0JBO0FBaUNBO0FBQ0E7QUFEQSxHQWpDQTtBQXFDQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FKQSxXQUlBO0FBQ0E7QUFDQSxPQU5BO0FBT0E7QUFUQSxHQXJDQTtBQWlEQSxrQkFqREEsNEJBaURBLEVBakRBLEVBaURBLElBakRBLEVBaURBLElBakRBLEVBaURBO0FBQ0EsZUFDQSwyQkFEQSxFQUVBLHlDQUZBLEdBR0EsSUFIQSxDQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBREE7QUFFQTtBQUZBO0FBSUEsU0FMQTtBQU9BO0FBQ0EseUJBREE7QUFFQTtBQUZBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0EsT0F0Q0E7QUF1Q0EsS0F4Q0EsQ0FIQTtBQTRDQTtBQTlGQSxHOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDO0FBQ0EsMkJBQTJCLFNBQVMsc0JBQXNCLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTBMLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvODcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG5cdFx0XHQ8YXBwLXRpdGxlIGljb249XCJwYXBlci1wbGFuZVwiPkVkaXQgRm9ybTwvYXBwLXRpdGxlPlxuXHRcdDwvcG9ydGFsPlxuXG4gICAgICAgIDxzaGFyZWQtZm9ybSA6Zm9ybT1cImZvcm1cIiA6ZmllbGRzZXRzPVwiZmllbGRzZXRzXCIgOnN1Ym1pdD1cInN1Ym1pdFwiPjwvc2hhcmVkLWZvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nXG4gICAgaW1wb3J0IFNoYXJlZEZvcm0gZnJvbSAnLi9Gb3JtJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgICAgICBmaWVsZHNldHM6IFtdLFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0X2VtYWlsX2FkZHJlc3NlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3RfaXBfYWRkcmVzc2VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VfcmVjZWlwdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3Rfb25fc3VibWlzc2lvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0X3VybDogJycsXG5cbiAgICAgICAgICAgICAgICAgICAgZW5hYmxlX3JlY2FwdGNoYTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZV9ob25leXBvdDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBzZW5kX3RvOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlfdG86ICcnLFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgZm9ybV90ZW1wbGF0ZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHRoYW5reW91X3RlbXBsYXRlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdzaGFyZWQtZm9ybSc6IFNoYXJlZEZvcm1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhdGNoKCcvYXBpL2Zvcm1zLycgKyB0aGlzLmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnRm9ybSBzdWNjZXNzZnVsbHkgc2F2ZWQnLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9mb3JtcycpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2ZpZWxkc2V0cycpLFxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9mb3Jtcy8nICsgdG8ucGFyYW1zLmZvcm0pLFxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKGZpZWxkc2V0cywgZm9ybSkge1xuICAgICAgICAgICAgICAgIG5leHQoZnVuY3Rpb24odm0pIHtcbiAgICAgICAgICAgICAgICAgICAgdm0uZmllbGRzZXRzID0gXy5tYXAoZmllbGRzZXRzLmRhdGEuZGF0YSwgZnVuY3Rpb24oZmllbGRzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xhYmVsJzogZmllbGRzZXQubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAndmFsdWUnOiBmaWVsZHNldC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHZtLmZpZWxkc2V0cy51bnNoaWZ0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdOb25lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB2bS5pZCA9IGZvcm0uZGF0YS5kYXRhLmlkXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5uYW1lID0gZm9ybS5kYXRhLmRhdGEubmFtZVxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLmhhbmRsZSA9IGZvcm0uZGF0YS5kYXRhLmhhbmRsZVxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLmRlc2NyaXB0aW9uID0gZm9ybS5kYXRhLmRhdGEuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5maWVsZHNldCA9IGZvcm0uZGF0YS5kYXRhLmZpZWxkc2V0ICYmIGZvcm0uZGF0YS5kYXRhLmZpZWxkc2V0LmlkID8gZm9ybS5kYXRhLmRhdGEuZmllbGRzZXQuaWQgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLmNvbGxlY3RfZW1haWxfYWRkcmVzc2VzID0gZm9ybS5kYXRhLmRhdGEuY29sbGVjdF9lbWFpbF9hZGRyZXNzZXNcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5jb2xsZWN0X2lwX2FkZHJlc3NlcyA9IGZvcm0uZGF0YS5kYXRhLmNvbGxlY3RfaXBfYWRkcmVzc2VzXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ucmVzcG9uc2VfcmVjZWlwdCA9IGZvcm0uZGF0YS5kYXRhLnJlc3BvbnNlX3JlY2VpcHRcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ubWVzc2FnZSA9IGZvcm0uZGF0YS5kYXRhLm1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uID0gZm9ybS5kYXRhLmRhdGEucmVkaXJlY3Rfb25fc3VibWlzc2lvblxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLnJlZGlyZWN0X3VybCA9IGZvcm0uZGF0YS5kYXRhLnJlZGlyZWN0X3VybFxuXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0uZW5hYmxlX3JlY2FwdGNoYSA9IGZvcm0uZGF0YS5kYXRhLmVuYWJsZV9yZWNhcHRjaGFcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5lbmFibGVfaG9uZXlwb3QgPSBmb3JtLmRhdGEuZGF0YS5lbmFibGVfaG9uZXlwb3RcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0uc2VuZF90byA9IGZvcm0uZGF0YS5kYXRhLnNlbmRfdG9cbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5yZXBseV90byA9IGZvcm0uZGF0YS5kYXRhLnJlcGx5X3RvXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLmZvcm1fdGVtcGxhdGUgPSBmb3JtLmRhdGEuZGF0YS5mb3JtX3RlbXBsYXRlXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0udGhhbmt5b3VfdGVtcGxhdGUgPSBmb3JtLmRhdGEuZGF0YS50aGFua3lvdV90ZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5zdGF0dXMgPSBmb3JtLmRhdGEuZGF0YS5zdGF0dXNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcInBhcGVyLXBsYW5lXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJFZGl0IEZvcm1cIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwic2hhcmVkLWZvcm1cIiwge1xuICAgICAgICBhdHRyczogeyBmb3JtOiBfdm0uZm9ybSwgZmllbGRzZXRzOiBfdm0uZmllbGRzZXRzLCBzdWJtaXQ6IF92bS5zdWJtaXQgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGFjY2Q1MmUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc4YWNjZDUyZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc4YWNjZDUyZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc4YWNjZDUyZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGFjY2Q1MmUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOGFjY2Q1MmUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9Gb3Jtcy9FZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OGFjY2Q1MmUmXCIiXSwic291cmNlUm9vdCI6IiJ9