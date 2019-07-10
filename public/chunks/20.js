(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Fieldsets/Create.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Fieldsets/Create.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
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
      sections: [],
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: '',
        handle: ''
      })
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post('/api/fieldsets').then(function (response) {
        var formData = {};
        formData.sections = _this.sections;
        axios.post("/api/fieldsets/".concat(response.data.id, "/sections"), formData).then(function (response) {
          toast('Fieldset successfully created', 'success');
        });

        _this.$router.push('/fieldsets/edit/' + response.data.id);
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Fieldsets/Create.vue?vue&type=template&id=61868c7f&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Fieldsets/Create.vue?vue&type=template&id=61868c7f& ***!
  \**************************************************************************************************************************************************************************************************************/
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
          _c("app-title", { attrs: { icon: "ballot" } }, [
            _vm._v("Create Fieldset")
          ])
        ],
        1
      ),
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
          _c("p-card", [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                {
                  staticClass: "col xxl:text-right w-full xxl:w-1/3 xxxl:w-1/4"
                },
                [
                  _c("div", { staticClass: "xxl:mr-10" }, [
                    _c("h3", [_vm._v("General")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-sm" }, [
                      _vm._v("What will this fieldset be called?")
                    ])
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "col w-full xxl:w-2/3" },
                [
                  _c("p-input", {
                    attrs: {
                      name: "name",
                      label: "Name",
                      help: "What this fieldset will be called.",
                      autocomplete: "off",
                      autofocus: "",
                      required: "",
                      "has-error": _vm.form.errors.has("name"),
                      "error-message": _vm.form.errors.get("name")
                    },
                    model: {
                      value: _vm.form.name,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "name", $$v)
                      },
                      expression: "form.name"
                    }
                  }),
                  _vm._v(" "),
                  _c("p-slug", {
                    attrs: {
                      name: "handle",
                      label: "Handle",
                      help:
                        "A developer-friendly variant of the fieldset's name.",
                      autocomplete: "off",
                      required: "",
                      delimiter: "_",
                      watch: _vm.form.name,
                      "has-error": _vm.form.errors.has("handle"),
                      "error-message": _vm.form.errors.get("handle")
                    },
                    model: {
                      value: _vm.form.handle,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "handle", $$v)
                      },
                      expression: "form.handle"
                    }
                  })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("section-builder", {
            staticClass: "mt-6",
            model: {
              value: _vm.sections,
              callback: function($$v) {
                _vm.sections = $$v
              },
              expression: "sections"
            }
          }),
          _vm._v(" "),
          _c(
            "portal",
            { attrs: { to: "actions" } },
            [
              _c(
                "router-link",
                {
                  staticClass: "button mr-3",
                  attrs: { to: { name: "fieldsets" } }
                },
                [_vm._v("Go Back")]
              ),
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
                [_vm._v("Save Fieldset")]
              )
            ],
            1
          )
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

/***/ "./resources/js/views/Fieldsets/Create.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Fieldsets/Create.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_61868c7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=61868c7f& */ "./resources/js/views/Fieldsets/Create.vue?vue&type=template&id=61868c7f&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/Fieldsets/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_61868c7f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_61868c7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Fieldsets/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Fieldsets/Create.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Fieldsets/Create.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Fieldsets/Create.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Fieldsets/Create.vue?vue&type=template&id=61868c7f&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Fieldsets/Create.vue?vue&type=template&id=61868c7f& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_61868c7f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=61868c7f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Fieldsets/Create.vue?vue&type=template&id=61868c7f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_61868c7f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_61868c7f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);