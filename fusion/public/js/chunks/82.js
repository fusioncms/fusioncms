(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[82],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Forms/Edit.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Forms/Edit.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default, getForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getForm", function() { return getForm; });
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/views/Forms/SharedForm.vue");
//
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
      fieldset: null,
      resource: null,
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: '',
        handle: '',
        description: '',
        fieldset: {},
        collect_email_addresses: 0,
        collect_ip_addresses: 0,
        response_receipt: 0,
        message: '',
        redirect_on_submission: 0,
        redirect_url: '',
        enable_recaptcha: 0,
        enable_honeypot: 0,
        send_to: '',
        reply_to: '',
        form_template: '',
        thankyou_template: '',
        status: 1
      }, true)
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    submit: function submit() {
      var _this = this;

      var fieldsetForm = {};
      fieldsetForm.sections = this.form.fieldset.sections;
      axios.post("/api/fieldsets/".concat(this.resource.fieldset.id, "/sections"), fieldsetForm).then(function (response) {
        _this.form.patch('/api/forms/' + _this.resource.id).then(function (response) {
          toast('Form successfully saved', 'success');

          _this.$router.push('/forms');
        })["catch"](function (response) {
          toast(response.message, 'failed');
        });
      });
    },
    sectionChange: function sectionChange() {
      if (!this.form.hasChanges) {
        this.form.onFirstChange();
      }
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getForm(to.params.form, function (error, form) {
      if (error) {
        next(function (vm) {
          vm.$router.push('/forms');
          toast(error.toString(), 'danger');
        });
      } else {
        next(function (vm) {
          vm.resource = form;
          vm.form = new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
            name: form.name,
            handle: form.handle,
            description: form.description,
            fieldset: form.fieldset,
            collect_email_addresses: form.collect_email_addresses,
            collect_ip_addresses: form.collect_ip_addresses,
            response_receipt: form.response_receipt,
            message: form.message,
            redirect_on_submission: form.redirect_on_submission,
            redirect_url: form.redirect_url,
            enable_recaptcha: form.enable_recaptcha,
            enable_honeypot: form.enable_honeypot,
            send_to: form.send_to,
            reply_to: form.reply_to,
            form_template: form.form_template,
            thankyou_template: form.thankyou_template,
            status: form.status
          }, true);
          vm.$emit('updateHead');
          vm.$nextTick(function () {
            vm.form.resetChangeListener();
          });
        });
      }
    });
  }
});
function getForm(form, callback) {
  axios.get('/api/forms/' + form).then(function (response) {
    callback(null, response.data.data);
  })["catch"](function (error) {
    callback(new Error('The requested form could not be found'));
  });
}

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
        attrs: {
          form: _vm.form,
          resource: _vm.resource,
          submit: _vm.submit,
          fieldset: _vm.fieldset
        },
        on: {
          sectionBuilderInput: function($event) {
            return _vm.sectionChange()
          }
        }
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
/*! exports provided: getForm, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_8accd52e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=8accd52e& */ "./resources/js/views/Forms/Edit.vue?vue&type=template&id=8accd52e&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Forms/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getForm", function() { return _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getForm"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





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
/*! exports provided: default, getForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Forms/Edit.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getForm", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getForm"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0Zvcm1zL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Gb3Jtcy9FZGl0LnZ1ZT80N2RmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Gb3Jtcy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRm9ybXMvRWRpdC52dWU/MzBlZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRm9ybXMvRWRpdC52dWU/ZjkzZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsb0JBRkE7QUFHQSxvQkFIQTtBQUlBO0FBQ0EsZ0JBREE7QUFFQSxrQkFGQTtBQUdBLHVCQUhBO0FBS0Esb0JBTEE7QUFPQSxrQ0FQQTtBQVFBLCtCQVJBO0FBU0EsMkJBVEE7QUFXQSxtQkFYQTtBQVlBLGlDQVpBO0FBYUEsd0JBYkE7QUFlQSwyQkFmQTtBQWdCQSwwQkFoQkE7QUFrQkEsbUJBbEJBO0FBbUJBLG9CQW5CQTtBQXFCQSx5QkFyQkE7QUFzQkEsNkJBdEJBO0FBd0JBO0FBeEJBLFNBeUJBLElBekJBO0FBSkE7QUErQkEsR0F6Q0E7QUEyQ0E7QUFDQTtBQURBLEdBM0NBO0FBK0NBO0FBQ0EsVUFEQSxvQkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUpBLFdBSUE7QUFDQTtBQUNBLFNBTkE7QUFPQSxPQVJBO0FBU0EsS0FkQTtBQWdCQSxpQkFoQkEsMkJBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwQkEsR0EvQ0E7QUFzRUEsa0JBdEVBLDRCQXNFQSxFQXRFQSxFQXNFQSxJQXRFQSxFQXNFQSxJQXRFQSxFQXNFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxTQUpBO0FBS0EsT0FOQSxNQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSwrQkFGQTtBQUdBLHlDQUhBO0FBS0EsbUNBTEE7QUFPQSxpRUFQQTtBQVFBLDJEQVJBO0FBU0EsbURBVEE7QUFXQSxpQ0FYQTtBQVlBLCtEQVpBO0FBYUEsMkNBYkE7QUFlQSxtREFmQTtBQWdCQSxpREFoQkE7QUFrQkEsaUNBbEJBO0FBbUJBLG1DQW5CQTtBQXFCQSw2Q0FyQkE7QUFzQkEscURBdEJBO0FBd0JBO0FBeEJBLGFBeUJBLElBekJBO0FBMkJBO0FBRUE7QUFDQTtBQUNBLFdBRkE7QUFHQSxTQWxDQTtBQW1DQTtBQUNBLEtBNUNBO0FBNkNBO0FBcEhBO0FBdUhBO0FBQ0E7QUFDQTtBQUNBLEdBRkEsV0FFQTtBQUNBO0FBQ0EsR0FKQTtBQUtBLEM7Ozs7Ozs7Ozs7OztBQzNJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDO0FBQ0EsMkJBQTJCLFNBQVMsc0JBQXNCLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUE7QUFBQTtBQUEwTCxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzgyLmpzP2lkPTJlY2E0OGRmNjQ3ZmZkNzhhZTZmIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuXHRcdFx0PGFwcC10aXRsZSBpY29uPVwicGFwZXItcGxhbmVcIj5FZGl0IEZvcm08L2FwcC10aXRsZT5cblx0XHQ8L3BvcnRhbD5cblxuICAgICAgICA8c2hhcmVkLWZvcm0gOmZvcm09XCJmb3JtXCIgOnJlc291cmNlPVwicmVzb3VyY2VcIiA6c3VibWl0PVwic3VibWl0XCIgOmZpZWxkc2V0PVwiZmllbGRzZXRcIiBAc2VjdGlvbkJ1aWxkZXJJbnB1dD1cInNlY3Rpb25DaGFuZ2UoKVwiPjwvc2hhcmVkLWZvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nXG4gICAgaW1wb3J0IFNoYXJlZEZvcm0gZnJvbSAnLi9TaGFyZWRGb3JtJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogdGhpcy5mb3JtLm5hbWUgfHwgJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgICAgIGZpZWxkc2V0OiBudWxsLFxuICAgICAgICAgICAgICAgIHJlc291cmNlOiBudWxsLFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnJyxcblxuICAgICAgICAgICAgICAgICAgICBmaWVsZHNldDoge30sXG5cbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdF9lbWFpbF9hZGRyZXNzZXM6IDAsXG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3RfaXBfYWRkcmVzc2VzOiAwLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZV9yZWNlaXB0OiAwLFxuXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdF9vbl9zdWJtaXNzaW9uOiAwLFxuICAgICAgICAgICAgICAgICAgICByZWRpcmVjdF91cmw6ICcnLFxuXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZV9yZWNhcHRjaGE6IDAsXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZV9ob25leXBvdDogMCxcblxuICAgICAgICAgICAgICAgICAgICBzZW5kX3RvOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcmVwbHlfdG86ICcnLFxuXG4gICAgICAgICAgICAgICAgICAgIGZvcm1fdGVtcGxhdGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICB0aGFua3lvdV90ZW1wbGF0ZTogJycsXG5cbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICAgICAgICAgIH0sIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ3NoYXJlZC1mb3JtJzogU2hhcmVkRm9ybVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZmllbGRzZXRGb3JtID0ge31cbiAgICAgICAgICAgICAgICBmaWVsZHNldEZvcm0uc2VjdGlvbnMgPSB0aGlzLmZvcm0uZmllbGRzZXQuc2VjdGlvbnNcblxuICAgICAgICAgICAgICAgIGF4aW9zLnBvc3QoYC9hcGkvZmllbGRzZXRzLyR7dGhpcy5yZXNvdXJjZS5maWVsZHNldC5pZH0vc2VjdGlvbnNgLCBmaWVsZHNldEZvcm0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wYXRjaCgnL2FwaS9mb3Jtcy8nICsgdGhpcy5yZXNvdXJjZS5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KCdGb3JtIHN1Y2Nlc3NmdWxseSBzYXZlZCcsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goJy9mb3JtcycpXG4gICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UubWVzc2FnZSwgJ2ZhaWxlZCcpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNlY3Rpb25DaGFuZ2UoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm0uaGFzQ2hhbmdlcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0ub25GaXJzdENoYW5nZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGdldEZvcm0odG8ucGFyYW1zLmZvcm0sIChlcnJvciwgZm9ybSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCh2bSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uJHJvdXRlci5wdXNoKCcvZm9ybXMnKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci50b1N0cmluZygpLCAnZGFuZ2VyJylcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXh0KCh2bSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0ucmVzb3VyY2UgPSBmb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5mb3JtID0gbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGU6IGZvcm0uaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBmb3JtLmRlc2NyaXB0aW9uLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzZXQ6IGZvcm0uZmllbGRzZXQsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0X2VtYWlsX2FkZHJlc3NlczogZm9ybS5jb2xsZWN0X2VtYWlsX2FkZHJlc3NlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xsZWN0X2lwX2FkZHJlc3NlczogZm9ybS5jb2xsZWN0X2lwX2FkZHJlc3NlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZV9yZWNlaXB0OiBmb3JtLnJlc3BvbnNlX3JlY2VpcHQsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBmb3JtLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVkaXJlY3Rfb25fc3VibWlzc2lvbjogZm9ybS5yZWRpcmVjdF9vbl9zdWJtaXNzaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZGlyZWN0X3VybDogZm9ybS5yZWRpcmVjdF91cmwsXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVfcmVjYXB0Y2hhOiBmb3JtLmVuYWJsZV9yZWNhcHRjaGEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlX2hvbmV5cG90OiBmb3JtLmVuYWJsZV9ob25leXBvdCxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRfdG86IGZvcm0uc2VuZF90byxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBseV90bzogZm9ybS5yZXBseV90byxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1fdGVtcGxhdGU6IGZvcm0uZm9ybV90ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGFua3lvdV90ZW1wbGF0ZTogZm9ybS50aGFua3lvdV90ZW1wbGF0ZSxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogZm9ybS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZm9ybS5yZXNldENoYW5nZUxpc3RlbmVyKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0Rm9ybShmb3JtLCBjYWxsYmFjaykge1xuICAgICAgICBheGlvcy5nZXQoJy9hcGkvZm9ybXMvJyArIGZvcm0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXNwb25zZS5kYXRhLmRhdGEpXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhuZXcgRXJyb3IoJ1RoZSByZXF1ZXN0ZWQgZm9ybSBjb3VsZCBub3QgYmUgZm91bmQnKSlcbiAgICAgICAgfSlcbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwicGFwZXItcGxhbmVcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkVkaXQgRm9ybVwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzaGFyZWQtZm9ybVwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgZm9ybTogX3ZtLmZvcm0sXG4gICAgICAgICAgcmVzb3VyY2U6IF92bS5yZXNvdXJjZSxcbiAgICAgICAgICBzdWJtaXQ6IF92bS5zdWJtaXQsXG4gICAgICAgICAgZmllbGRzZXQ6IF92bS5maWVsZHNldFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIHNlY3Rpb25CdWlsZGVySW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5zZWN0aW9uQ2hhbmdlKClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPThhY2NkNTJlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvZnVzaW9uL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzhhY2NkNTJlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzhhY2NkNTJlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzhhY2NkNTJlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04YWNjZDUyZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4YWNjZDUyZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL0Zvcm1zL0VkaXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04YWNjZDUyZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=