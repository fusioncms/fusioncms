(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Login.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/Login.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'loginForm',
  data: function data() {
    return {
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        email: '',
        password: ''
      })
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post('/admin/login').then(function (response) {
        _this.$store.commit('user/setUser', response.data);

        if (!!_this.$route.query.redirect) location.href = _this.$route.query.redirect;else location.href = '/' + config.path;
      })["catch"](function (error) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Auth/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Auth_Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Auth/Login */ "./resources/js/components/Auth/Login.vue");
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'login',
  components: {
    'login-form': _components_Auth_Login__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Login.vue?vue&type=template&id=06688fcd&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/Login.vue?vue&type=template&id=06688fcd& ***!
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
    { staticClass: "w-full max-w-xs", attrs: { id: "login-form" } },
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card__body" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [
              _c("p-input", {
                attrs: {
                  name: "email",
                  label: "E-mail",
                  autocomplete: "off",
                  "has-error": _vm.form.errors.has("email"),
                  "error-message": _vm.form.errors.get("email"),
                  autofocus: "",
                  required: ""
                },
                model: {
                  value: _vm.form.email,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "email", $$v)
                  },
                  expression: "form.email"
                }
              }),
              _vm._v(" "),
              _c("p-input", {
                attrs: {
                  name: "password",
                  type: "password",
                  label: "Password",
                  autocomplete: "off",
                  "has-error": _vm.form.errors.has("password"),
                  "error-message": _vm.form.errors.get("password"),
                  autofocus: "",
                  required: ""
                },
                model: {
                  value: _vm.form.password,
                  callback: function($$v) {
                    _vm.$set(_vm.form, "password", $$v)
                  },
                  expression: "form.password"
                }
              }),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "button button--primary",
                  attrs: { type: "submit" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.submit($event)
                    }
                  }
                },
                [_vm._v("Login")]
              )
            ],
            1
          )
        ])
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center relative mb-10" }, [
      _c("img", {
        attrs: { src: "/img/illustrations/login.svg", alt: "Illustration" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "flex flex-col items-center leading-none mb-6" },
      [
        _c("span", { staticClass: "mb-3 text-gray-600 text-sm font-bold " }, [
          _vm._v("Welcome to")
        ]),
        _vm._v(" "),
        _c("span", { staticClass: "font-bold text-xxl" }, [_vm._v("FusionCMS")])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/Login.vue?vue&type=template&id=be5ebcfe&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Auth/Login.vue?vue&type=template&id=be5ebcfe& ***!
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
    {
      staticClass:
        "bg-gray-200 mx-auto h-full flex flex-1 flex-col items-center justify-center",
      staticStyle: { transition: "0.1s" }
    },
    [
      _c("login-form"),
      _vm._v(" "),
      _c(
        "footer",
        {
          staticClass:
            "p-6 text-xs text-gray-600 flex flex-col items-center justify-center leading-loose md:leading-none"
        },
        [
          _c("div", { staticClass: "mb-4 flex items-center justify-center" }, [
            _c(
              "a",
              {
                directives: [
                  {
                    name: "modal",
                    rawName: "v-modal:privacy-policy",
                    arg: "privacy-policy"
                  }
                ],
                staticClass: "mr-3",
                attrs: { href: "#" }
              },
              [_vm._v("Privacy Policy")]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                directives: [
                  { name: "modal", rawName: "v-modal:tos", arg: "tos" }
                ],
                attrs: { href: "#" }
              },
              [_vm._v("Terms of Service")]
            )
          ]),
          _vm._v(" "),
          _c(
            "span",
            [
              _vm._v("Built with "),
              _c("fa-icon", {
                staticClass: "text-danger-200 mx-1",
                attrs: { icon: ["fas", "heart"] }
              }),
              _vm._v(" + "),
              _c("fa-icon", {
                staticClass: "text-gray-600 mx-1",
                attrs: { icon: ["fas", "coffee"] }
              }),
              _vm._v(" by the efelle team")
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c("tos-modal"),
      _vm._v(" "),
      _c("privacy-modal")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Auth/Login.vue":
/*!************************************************!*\
  !*** ./resources/js/components/Auth/Login.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_06688fcd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=06688fcd& */ "./resources/js/components/Auth/Login.vue?vue&type=template&id=06688fcd&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_06688fcd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_06688fcd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/Login.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/Auth/Login.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/Login.vue?vue&type=template&id=06688fcd&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Auth/Login.vue?vue&type=template&id=06688fcd& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_06688fcd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=06688fcd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/Login.vue?vue&type=template&id=06688fcd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_06688fcd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_06688fcd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Auth/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/views/Auth/Login.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_be5ebcfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=be5ebcfe& */ "./resources/js/views/Auth/Login.vue?vue&type=template&id=be5ebcfe&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/views/Auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_be5ebcfe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_be5ebcfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Auth/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Auth/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Auth/Login.vue?vue&type=template&id=be5ebcfe&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Auth/Login.vue?vue&type=template&id=be5ebcfe& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_be5ebcfe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=be5ebcfe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/Login.vue?vue&type=template&id=be5ebcfe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_be5ebcfe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_be5ebcfe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXV0aC9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy92aWV3cy9BdXRoL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9BdXRoL0xvZ2luLnZ1ZT80NDdmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9BdXRoL0xvZ2luLnZ1ZT81NTQ1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0F1dGgvTG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0F1dGgvTG9naW4udnVlPzM1ZWYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXV0aC9Mb2dpbi52dWU/NjM2OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQXV0aC9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0F1dGgvTG9naW4udnVlPzMxMDMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0F1dGgvTG9naW4udnVlPzVhZmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaURBO0FBRUE7QUFDQSxtQkFEQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQVZBO0FBWUE7QUFDQSxVQURBLG9CQUNBO0FBQUE7O0FBQ0EscUNBQ0EsSUFEQSxDQUNBO0FBQ0E7O0FBRUEsMkNBQ0EsNENBREEsS0FHQTtBQUNBLE9BUkEsV0FTQSxtQkFUQTtBQVVBO0FBWkE7QUFaQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUVBO0FBQ0EsZUFE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QTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy82LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgaWQ9XCJsb2dpbi1mb3JtXCIgY2xhc3M9XCJ3LWZ1bGwgbWF4LXcteHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHJlbGF0aXZlIG1iLTEwXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvaWxsdXN0cmF0aW9ucy9sb2dpbi5zdmdcIiBhbHQ9XCJJbGx1c3RyYXRpb25cIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGxlYWRpbmctbm9uZSBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWItMyB0ZXh0LWdyYXktNjAwIHRleHQtc20gZm9udC1ib2xkIFwiPldlbGNvbWUgdG88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1ib2xkIHRleHQteHhsXCI+RnVzaW9uQ01TPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFLW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2VtYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2VtYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICA+PC9wLWlucHV0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3Bhc3N3b3JkJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICA+PC9wLWlucHV0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnbG9naW5Gb3JtJyxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wb3N0KCcvYWRtaW4vbG9naW4nKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3VzZXIvc2V0VXNlcicsIHJlc3BvbnNlLmRhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMuJHJvdXRlLnF1ZXJ5LnJlZGlyZWN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSB0aGlzLiRyb3V0ZS5xdWVyeS5yZWRpcmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnLycgKyBjb25maWcucGF0aFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgICA9PiB7fSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdlxuICAgICAgICBjbGFzcz1cImJnLWdyYXktMjAwIG14LWF1dG8gaC1mdWxsIGZsZXggZmxleC0xIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgIHN0eWxlPVwidHJhbnNpdGlvbjogMC4xcztcIlxuICAgID5cbiAgICAgICAgPGxvZ2luLWZvcm0+PC9sb2dpbi1mb3JtPlxuXG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJwLTYgdGV4dC14cyB0ZXh0LWdyYXktNjAwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGxlYWRpbmctbG9vc2UgbWQ6bGVhZGluZy1ub25lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibXItM1wiIGhyZWY9XCIjXCIgdi1tb2RhbDpwcml2YWN5LXBvbGljeT5Qcml2YWN5IFBvbGljeTwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHYtbW9kYWw6dG9zPlRlcm1zIG9mIFNlcnZpY2U8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHNwYW4+QnVpbHQgd2l0aCA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2hlYXJ0J11cIiBjbGFzcz1cInRleHQtZGFuZ2VyLTIwMCBteC0xXCI+PC9mYS1pY29uPiArIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY29mZmVlJ11cIiBjbGFzcz1cInRleHQtZ3JheS02MDAgbXgtMVwiPjwvZmEtaWNvbj4gYnkgdGhlIGVmZWxsZSB0ZWFtPC9zcGFuPlxuICAgICAgICA8L2Zvb3Rlcj5cblxuICAgICAgICA8dG9zLW1vZGFsPjwvdG9zLW1vZGFsPlxuICAgICAgICA8cHJpdmFjeS1tb2RhbD48L3ByaXZhY3ktbW9kYWw+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXV0aC9Mb2dpbidcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ2xvZ2luJyxcblxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdCdsb2dpbi1mb3JtJzogTG9naW5Gb3JtXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgbWF4LXcteHNcIiwgYXR0cnM6IHsgaWQ6IFwibG9naW4tZm9ybVwiIH0gfSxcbiAgICBbXG4gICAgICBfdm0uX20oMCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX2JvZHlcIiB9LCBbXG4gICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkUtbWFpbFwiLFxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcImVtYWlsXCIpLFxuICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJlbWFpbFwiKSxcbiAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIixcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJlbWFpbFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmVtYWlsXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICB0eXBlOiBcInBhc3N3b3JkXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJQYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcInBhc3N3b3JkXCIpLFxuICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJwYXNzd29yZFwiKSxcbiAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIixcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJwYXNzd29yZFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkxvZ2luXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtY2VudGVyIHJlbGF0aXZlIG1iLTEwXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBhdHRyczogeyBzcmM6IFwiL2ltZy9pbGx1c3RyYXRpb25zL2xvZ2luLnN2Z1wiLCBhbHQ6IFwiSWxsdXN0cmF0aW9uXCIgfVxuICAgICAgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGxlYWRpbmctbm9uZSBtYi02XCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItMyB0ZXh0LWdyYXktNjAwIHRleHQtc20gZm9udC1ib2xkIFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCJXZWxjb21lIHRvXCIpXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmb250LWJvbGQgdGV4dC14eGxcIiB9LCBbX3ZtLl92KFwiRnVzaW9uQ01TXCIpXSlcbiAgICAgIF1cbiAgICApXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICBcImJnLWdyYXktMjAwIG14LWF1dG8gaC1mdWxsIGZsZXggZmxleC0xIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiLFxuICAgICAgc3RhdGljU3R5bGU6IHsgdHJhbnNpdGlvbjogXCIwLjFzXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJsb2dpbi1mb3JtXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZvb3RlclwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcInAtNiB0ZXh0LXhzIHRleHQtZ3JheS02MDAgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbGVhZGluZy1sb29zZSBtZDpsZWFkaW5nLW5vbmVcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYi00IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpwcml2YWN5LXBvbGljeVwiLFxuICAgICAgICAgICAgICAgICAgICBhcmc6IFwicHJpdmFjeS1wb2xpY3lcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItM1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlByaXZhY3kgUG9saWN5XCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7IG5hbWU6IFwibW9kYWxcIiwgcmF3TmFtZTogXCJ2LW1vZGFsOnRvc1wiLCBhcmc6IFwidG9zXCIgfVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiVGVybXMgb2YgU2VydmljZVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdihcIkJ1aWx0IHdpdGggXCIpLFxuICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZGFuZ2VyLTIwMCBteC0xXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiaGVhcnRcIl0gfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiICsgXCIpLFxuICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZ3JheS02MDAgbXgtMVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNvZmZlZVwiXSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgYnkgdGhlIGVmZWxsZSB0ZWFtXCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRvcy1tb2RhbFwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInByaXZhY3ktbW9kYWxcIilcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2Njg4ZmNkJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwNjY4OGZjZCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwNjY4OGZjZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwNjY4OGZjZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA2Njg4ZmNkJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzA2Njg4ZmNkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9BdXRoL0xvZ2luLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDY2ODhmY2QmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZTVlYmNmZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYmU1ZWJjZmUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYmU1ZWJjZmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYmU1ZWJjZmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZTVlYmNmZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiZTVlYmNmZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL0F1dGgvTG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZTVlYmNmZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=