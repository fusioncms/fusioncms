(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

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

/***/ "./node_modules/form-data/lib/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/form-data/lib/browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;


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

/***/ "./resources/js/forms/Errors.js":
/*!**************************************!*\
  !*** ./resources/js/forms/Errors.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Errors; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors =
/*#__PURE__*/
function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }

  _createClass(Errors, [{
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }
  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }
  }, {
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }
  }, {
    key: "record",
    value: function record(response) {
      this.errors = response.errors;
    }
  }, {
    key: "clear",
    value: function clear(field) {
      if (field) {
        delete this.errors[field];
        return;
      }

      this.errors = {};
    }
  }]);

  return Errors;
}();



/***/ }),

/***/ "./resources/js/forms/Form.js":
/*!************************************!*\
  !*** ./resources/js/forms/Form.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors */ "./resources/js/forms/Errors.js");
/* harmony import */ var _vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vuex */ "./resources/js/vuex/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Form =
/*#__PURE__*/
function () {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  function Form(data) {
    var preventNavigation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, Form);

    this.errors = new _Errors__WEBPACK_IMPORTED_MODULE_1__["default"]();
    this.originalData = data;
    this.hasChanges = false;
    this.preventNavigation = preventNavigation;

    for (var field in data) {
      this[field] = data[field];
    }
  }

  _createClass(Form, [{
    key: "set",
    value: function set(field, value) {
      this.data[field] = value;
    }
  }, {
    key: "get",
    value: function get(field) {
      return this.data[field];
    }
    /**
     * Reset the form fields.
     */

  }, {
    key: "reset",
    value: function reset() {
      for (var field in this.originalData) {
        this[field] = this.originalData[field];
      }

      this.errors.clear();
    }
  }, {
    key: "data",
    value: function data() {
      var data = {};

      for (var property in this.originalData) {
        data[property] = this[property];
      }

      return data;
    }
    /**
    * Submit a POST request.
    *
    * @param {string} url
    */

  }, {
    key: "post",
    value: function post(url) {
      return this.submit('post', url);
    }
    /**
     * Submit a PATCH request.
     *
     * @param {string} url
     */

  }, {
    key: "patch",
    value: function patch(url) {
      return this.submit('patch', url);
    }
    /**
     * Submit a PUT request.
     *
     * @param {string} url
     */

  }, {
    key: "put",
    value: function put(url) {
      return this.submit('put', url);
    }
    /**
     * Submit a DELETE request.
     *
     * @param {string} url
     */

  }, {
    key: "delete",
    value: function _delete(url) {
      return this.submit('delete', url);
    }
    /**
     * Submit the form by the given request type and url.
     *
     * @param {string} requestType
     * @param {string} url
     */

  }, {
    key: "submit",
    value: function submit(requestType, url) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        axios[requestType](url, _this.data()).then(function (response) {
          _this.onSuccess(response.data);

          _vuex__WEBPACK_IMPORTED_MODULE_2__["default"].commit('form/setPreventNavigation', false);
          resolve(response.data);
        })["catch"](function (errors) {
          _this.onFailure(errors.response.data);

          reject(errors.response.data);
        });
      });
    }
    /**
     * Handle the on success promise event.
     *
     * @param {object} data
     */

  }, {
    key: "onSuccess",
    value: function onSuccess(data) {} // We'll leave it up to the implementation on
    // if they want the form reset afterwards.
    //
    // this.reset()

    /**
     * Handle the on failure promise event.
     *
     * @param {object} errors
     */

  }, {
    key: "onFailure",
    value: function onFailure(errors) {
      this.errors.record(errors);
    }
    /** 
     * Handle the first input event. Prevents navigating
     * away from the form if the preventNavigation
     * setting has been enabled.
     *
     * @param {object} data
     */

  }, {
    key: "onFirstChange",
    value: function onFirstChange(data) {
      this.hasChanges = true;

      if (this.preventNavigation) {
        _vuex__WEBPACK_IMPORTED_MODULE_2__["default"].commit('form/setPreventNavigation', true);
      }
    }
  }]);

  return Form;
}();



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXV0aC9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy92aWV3cy9BdXRoL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZm9ybS1kYXRhL2xpYi9icm93c2VyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0F1dGgvTG9naW4udnVlPzQ0N2YiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0F1dGgvTG9naW4udnVlPzU1NDUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXV0aC9Mb2dpbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvQXV0aC9Mb2dpbi52dWU/MzVlZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9BdXRoL0xvZ2luLnZ1ZT82MzY5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mb3Jtcy9FcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zvcm1zL0Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0F1dGgvTG9naW4udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9BdXRoL0xvZ2luLnZ1ZT8zMTAzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9BdXRoL0xvZ2luLnZ1ZT81YWZhIl0sIm5hbWVzIjpbIkVycm9ycyIsImVycm9ycyIsImZpZWxkIiwiaGFzT3duUHJvcGVydHkiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicmVzcG9uc2UiLCJGb3JtIiwiZGF0YSIsInByZXZlbnROYXZpZ2F0aW9uIiwib3JpZ2luYWxEYXRhIiwiaGFzQ2hhbmdlcyIsInZhbHVlIiwiY2xlYXIiLCJwcm9wZXJ0eSIsInVybCIsInN1Ym1pdCIsInJlcXVlc3RUeXBlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJheGlvcyIsInRoZW4iLCJvblN1Y2Nlc3MiLCJzdG9yZSIsImNvbW1pdCIsIm9uRmFpbHVyZSIsInJlY29yZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaURBO0FBRUE7QUFDQSxtQkFEQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQTtBQUZBO0FBREE7QUFNQSxHQVZBO0FBWUE7QUFDQSxVQURBLG9CQUNBO0FBQUE7O0FBQ0EscUNBQ0EsSUFEQSxDQUNBO0FBQ0E7O0FBRUEsMkNBQ0EsNENBREEsS0FHQTtBQUNBLE9BUkEsV0FTQSxtQkFUQTtBQVVBO0FBWkE7QUFaQSxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUVBO0FBQ0EsZUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUhBLEc7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLHlDQUF5QyxtQkFBbUIsRUFBRTtBQUNuRTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsc0JBQXNCO0FBQ3ZDLG1CQUFtQiw0QkFBNEI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFD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Ozs7Ozs7Ozs7Ozs7O0FDOUlMO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY2h1bmtzLzEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgaWQ9XCJsb2dpbi1mb3JtXCIgY2xhc3M9XCJ3LWZ1bGwgbWF4LXcteHNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHJlbGF0aXZlIG1iLTEwXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvaWxsdXN0cmF0aW9ucy9sb2dpbi5zdmdcIiBhbHQ9XCJJbGx1c3RyYXRpb25cIj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGxlYWRpbmctbm9uZSBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWItMyB0ZXh0LWdyYXktNjAwIHRleHQtc20gZm9udC1ib2xkIFwiPldlbGNvbWUgdG88L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1ib2xkIHRleHQteHhsXCI+RnVzaW9uQ01TPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFLW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2VtYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ2VtYWlsJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICA+PC9wLWlucHV0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ3Bhc3N3b3JkJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ3Bhc3N3b3JkJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ucGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICA+PC9wLWlucHV0PlxuXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgPkxvZ2luPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtJ1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnbG9naW5Gb3JtJyxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmb3JtOiBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5wb3N0KCcvYWRtaW4vbG9naW4nKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3VzZXIvc2V0VXNlcicsIHJlc3BvbnNlLmRhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghIXRoaXMuJHJvdXRlLnF1ZXJ5LnJlZGlyZWN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSB0aGlzLiRyb3V0ZS5xdWVyeS5yZWRpcmVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2F0aW9uLmhyZWYgPSAnLycgKyBjb25maWcucGF0aFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgICA9PiB7fSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdlxuICAgICAgICBjbGFzcz1cImJnLWdyYXktMjAwIG14LWF1dG8gaC1mdWxsIGZsZXggZmxleC0xIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgICAgIHN0eWxlPVwidHJhbnNpdGlvbjogMC4xcztcIlxuICAgID5cbiAgICAgICAgPGxvZ2luLWZvcm0+PC9sb2dpbi1mb3JtPlxuXG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJwLTYgdGV4dC14cyB0ZXh0LWdyYXktNjAwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGxlYWRpbmctbG9vc2UgbWQ6bGVhZGluZy1ub25lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWItNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwibXItM1wiIGhyZWY9XCIjXCIgdi1tb2RhbDpwcml2YWN5LXBvbGljeT5Qcml2YWN5IFBvbGljeTwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIHYtbW9kYWw6dG9zPlRlcm1zIG9mIFNlcnZpY2U8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHNwYW4+QnVpbHQgd2l0aCA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2hlYXJ0J11cIiBjbGFzcz1cInRleHQtZGFuZ2VyLTIwMCBteC0xXCI+PC9mYS1pY29uPiArIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnY29mZmVlJ11cIiBjbGFzcz1cInRleHQtZ3JheS02MDAgbXgtMVwiPjwvZmEtaWNvbj4gYnkgdGhlIGVmZWxsZSB0ZWFtPC9zcGFuPlxuICAgICAgICA8L2Zvb3Rlcj5cblxuICAgICAgICA8dG9zLW1vZGFsPjwvdG9zLW1vZGFsPlxuICAgICAgICA8cHJpdmFjeS1tb2RhbD48L3ByaXZhY3ktbW9kYWw+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgTG9naW5Gb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQXV0aC9Mb2dpbidcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ2xvZ2luJyxcblxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdCdsb2dpbi1mb3JtJzogTG9naW5Gb3JtXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCIvKiBlc2xpbnQtZW52IGJyb3dzZXIgKi9cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHNlbGYgPT0gJ29iamVjdCcgPyBzZWxmLkZvcm1EYXRhIDogd2luZG93LkZvcm1EYXRhO1xuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIG1heC13LXhzXCIsIGF0dHJzOiB7IGlkOiBcImxvZ2luLWZvcm1cIiB9IH0sXG4gICAgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcImVtYWlsXCIsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogXCJFLW1haWxcIixcbiAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJlbWFpbFwiKSxcbiAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiZW1haWxcIiksXG4gICAgICAgICAgICAgICAgICBhdXRvZm9jdXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5lbWFpbCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwiZW1haWxcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5lbWFpbFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJwYXNzd29yZFwiLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUGFzc3dvcmRcIixcbiAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJwYXNzd29yZFwiKSxcbiAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwicGFzc3dvcmRcIiksXG4gICAgICAgICAgICAgICAgICBhdXRvZm9jdXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwicGFzc3dvcmRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJMb2dpblwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciByZWxhdGl2ZSBtYi0xMFwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9pbWcvaWxsdXN0cmF0aW9ucy9sb2dpbi5zdmdcIiwgYWx0OiBcIklsbHVzdHJhdGlvblwiIH1cbiAgICAgIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBsZWFkaW5nLW5vbmUgbWItNlwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTMgdGV4dC1ncmF5LTYwMCB0ZXh0LXNtIGZvbnQtYm9sZCBcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiV2VsY29tZSB0b1wiKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9udC1ib2xkIHRleHQteHhsXCIgfSwgW192bS5fdihcIkZ1c2lvbkNNU1wiKV0pXG4gICAgICBdXG4gICAgKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgXCJiZy1ncmF5LTIwMCBteC1hdXRvIGgtZnVsbCBmbGV4IGZsZXgtMSBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIixcbiAgICAgIHN0YXRpY1N0eWxlOiB7IHRyYW5zaXRpb246IFwiMC4xc1wiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwibG9naW4tZm9ybVwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJmb290ZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJwLTYgdGV4dC14cyB0ZXh0LWdyYXktNjAwIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGxlYWRpbmctbG9vc2UgbWQ6bGVhZGluZy1ub25lXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWItNCBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6cHJpdmFjeS1wb2xpY3lcIixcbiAgICAgICAgICAgICAgICAgICAgYXJnOiBcInByaXZhY3ktcG9saWN5XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTNcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJQcml2YWN5IFBvbGljeVwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIm1vZGFsXCIsIHJhd05hbWU6IFwidi1tb2RhbDp0b3NcIiwgYXJnOiBcInRvc1wiIH1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlRlcm1zIG9mIFNlcnZpY2VcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJCdWlsdCB3aXRoIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWRhbmdlci0yMDAgbXgtMVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImhlYXJ0XCJdIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiArIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyYXktNjAwIG14LTFcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJjb2ZmZWVcIl0gfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIGJ5IHRoZSBlZmVsbGUgdGVhbVwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0b3MtbW9kYWxcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwcml2YWN5LW1vZGFsXCIpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNjY4OGZjZCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy93ZWJzaXRlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA2Njg4ZmNkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA2Njg4ZmNkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA2Njg4ZmNkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Mb2dpbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDY2ODhmY2QmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDY2ODhmY2QnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0F1dGgvTG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNjY4OGZjZCZcIiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0ge31cbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKVxuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwXG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29yZChyZXNwb25zZSkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHJlc3BvbnNlLmVycm9yc1xuICAgIH1cblxuICAgIGNsZWFyKGZpZWxkKSB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVycm9ycyA9IHt9XG4gICAgfVxufSIsImltcG9ydCBGb3JtRGF0YSBmcm9tICdmb3JtLWRhdGEnXG5pbXBvcnQgRXJyb3JzIGZyb20gJy4vRXJyb3JzJ1xuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3Z1ZXgnXG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybSB7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgbmV3IEZvcm0gaW5zdGFuY2UuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGRhdGEsIHByZXZlbnROYXZpZ2F0aW9uID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBuZXcgRXJyb3JzXG4gICAgICAgIHRoaXMub3JpZ2luYWxEYXRhID0gZGF0YVxuICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSBmYWxzZVxuICAgICAgICB0aGlzLnByZXZlbnROYXZpZ2F0aW9uID0gcHJldmVudE5hdmlnYXRpb25cblxuICAgICAgICBmb3IgKGxldCBmaWVsZCBpbiBkYXRhKSB7XG4gICAgICAgICAgICB0aGlzW2ZpZWxkXSA9IGRhdGFbZmllbGRdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXQoZmllbGQsIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZGF0YVtmaWVsZF0gPSB2YWx1ZVxuICAgIH1cblxuICAgIGdldChmaWVsZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhW2ZpZWxkXVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlc2V0IHRoZSBmb3JtIGZpZWxkcy5cbiAgICAgKi9cbiAgICByZXNldCgpIHtcbiAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gdGhpcy5vcmlnaW5hbERhdGEpIHtcbiAgICAgICAgICAgIHRoaXNbZmllbGRdID0gdGhpcy5vcmlnaW5hbERhdGFbZmllbGRdXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVycm9ycy5jbGVhcigpXG4gICAgfVxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgbGV0IGRhdGEgPSB7fVxuXG4gICAgICAgIGZvciAobGV0IHByb3BlcnR5IGluIHRoaXMub3JpZ2luYWxEYXRhKVxuICAgICAgICAgICAgZGF0YVtwcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGRhdGFcbiAgICB9XG5cbiAgICAvKipcbiAgICAqIFN1Ym1pdCBhIFBPU1QgcmVxdWVzdC5cbiAgICAqXG4gICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgKi9cbiAgICBwb3N0KHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3Bvc3QnLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGEgUEFUQ0ggcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBwYXRjaCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwYXRjaCcsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgYSBQVVQgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBwdXQodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncHV0JywgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBhIERFTEVURSByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIGRlbGV0ZSh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdkZWxldGUnLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IHRoZSBmb3JtIGJ5IHRoZSBnaXZlbiByZXF1ZXN0IHR5cGUgYW5kIHVybC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSByZXF1ZXN0VHlwZVxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBzdWJtaXQocmVxdWVzdFR5cGUsIHVybCkgeyAgICAgICAgXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICBheGlvc1tyZXF1ZXN0VHlwZV0odXJsLCB0aGlzLmRhdGEoKSlcbiAgICAgICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25TdWNjZXNzKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZm9ybS9zZXRQcmV2ZW50TmF2aWdhdGlvbicsIGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3JzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZhaWx1cmUoZXJyb3JzLnJlc3BvbnNlLmRhdGEpXG5cbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9ycy5yZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBvbiBzdWNjZXNzIHByb21pc2UgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uU3VjY2VzcyhkYXRhKSB7XG4gICAgICAgIC8vIFdlJ2xsIGxlYXZlIGl0IHVwIHRvIHRoZSBpbXBsZW1lbnRhdGlvbiBvblxuICAgICAgICAvLyBpZiB0aGV5IHdhbnQgdGhlIGZvcm0gcmVzZXQgYWZ0ZXJ3YXJkcy5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gdGhpcy5yZXNldCgpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSGFuZGxlIHRoZSBvbiBmYWlsdXJlIHByb21pc2UgZXZlbnQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXJyb3JzXG4gICAgICovXG4gICAgb25GYWlsdXJlKGVycm9ycykge1xuICAgICAgICB0aGlzLmVycm9ycy5yZWNvcmQoZXJyb3JzKVxuICAgIH1cblxuICAgIC8qKiBcbiAgICAgKiBIYW5kbGUgdGhlIGZpcnN0IGlucHV0IGV2ZW50LiBQcmV2ZW50cyBuYXZpZ2F0aW5nXG4gICAgICogYXdheSBmcm9tIHRoZSBmb3JtIGlmIHRoZSBwcmV2ZW50TmF2aWdhdGlvblxuICAgICAqIHNldHRpbmcgaGFzIGJlZW4gZW5hYmxlZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25GaXJzdENoYW5nZShkYXRhKSB7XG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWVcbiAgICAgICAgaWYgKHRoaXMucHJldmVudE5hdmlnYXRpb24pIHtcbiAgICAgICAgICAgIHN0b3JlLmNvbW1pdCgnZm9ybS9zZXRQcmV2ZW50TmF2aWdhdGlvbicsIHRydWUpXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWJlNWViY2ZlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL3dlYnNpdGUvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYmU1ZWJjZmUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYmU1ZWJjZmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYmU1ZWJjZmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZTVlYmNmZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiZTVlYmNmZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL0F1dGgvTG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ2luLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iZTVlYmNmZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=