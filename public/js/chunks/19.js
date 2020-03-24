(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Markdown/Field.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Markdown/Field.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! codemirror */ "./node_modules/codemirror/lib/codemirror.js");
/* harmony import */ var codemirror__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(codemirror__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
__webpack_require__(/*! codemirror/mode/gfm/gfm */ "./node_modules/codemirror/mode/gfm/gfm.js");

__webpack_require__(/*! codemirror/keymap/sublime */ "./node_modules/codemirror/keymap/sublime.js");

__webpack_require__(/*! codemirror/addon/display/placeholder */ "./node_modules/codemirror/addon/display/placeholder.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'markdown-fieldtype',
  data: function data() {
    return {
      codemirror: null
    };
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      "default": ''
    }
  },
  computed: {
    preview: function preview() {
      var tokens = marked__WEBPACK_IMPORTED_MODULE_1___default.a.lexer(this.value);
      var html = marked__WEBPACK_IMPORTED_MODULE_1___default.a.parser(tokens);
      return html;
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.codemirror = codemirror__WEBPACK_IMPORTED_MODULE_0___default.a.fromTextArea(document.getElementById(this.field.handle), {
      theme: 'fusion',
      mode: {
        name: 'gfm',
        highlightFormatting: true,
        fencedCodeBlockHighlighting: true
      },
      lineWrapping: true,
      viewportMargin: Infinity,
      keyMap: 'sublime'
    });
    setTimeout(function () {
      _this.codemirror.refresh();
    }, 1);
    this.codemirror.on('change', function (instance) {
      _this.$emit('input', instance.getValue());
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Mailables/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Mailables/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _fieldtypes_Markdown_Field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fieldtypes/Markdown/Field */ "./resources/js/fieldtypes/Markdown/Field.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {
    'markdown-field': _fieldtypes_Markdown_Field__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      id: null,
      ready: false,
      placeholders: {},
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
        name: '',
        handle: '',
        markdown: '',
        status: '1'
      }, true)
    };
  },
  methods: {
    isArray: function isArray(value) {
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(value);
    },
    addPlaceholder: function addPlaceholder(value, name) {
      var codemirror = this.$refs.markdown.codemirror;
      var doc = codemirror.getDoc();
      var cursor = doc.getCursor();

      if (name) {
        doc.replaceSelection("{{ $".concat(name, "->").concat(value, " }}"), doc.getSelection());
      } else {
        doc.replaceSelection("{{ $".concat(value, " }}"), doc.getSelection());
      }
    },
    updateMarkdown: function updateMarkdown(markdown) {
      this.form.markdown = markdown;
    },
    submit: function submit() {
      var _this = this;

      this.form.patch('/api/mailables/' + this.id).then(function (response) {
        toast('Mailable successfully updated', 'success');

        _this.$router.push('/mailables');
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    },
    placeholderOptions: function placeholderOptions(placeholders) {
      var options = [];

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(placeholders, function (option) {
        options.push({
          label: option,
          value: option
        });
      });

      return options;
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get("/api/mailables/".concat(to.params.mailable))]).then(axios.spread(function (mailable) {
      next(function (vm) {
        vm.id = mailable.data.data.id;
        vm.placeholders = mailable.data.data.placeholders;
        vm.ready = true;
        vm.form.name = mailable.data.data.name;
        vm.form.handle = mailable.data.data.handle;
        vm.form.markdown = mailable.data.data.markdown;
        vm.form.resetChangeListener();
        vm.$emit('updateHead');
      });
    }))["catch"](function (error) {
      next('/mailables');
      toast('The requested mailable could not be found', 'warning');
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Markdown/Field.vue?vue&type=template&id=d522f2c8&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Markdown/Field.vue?vue&type=template&id=d522f2c8& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    { staticClass: "form__group" },
    [
      _c("label", {
        staticClass: "form__label",
        attrs: { for: _vm.field.handle },
        domProps: { innerHTML: _vm._s(_vm.field.name) }
      }),
      _vm._v(" "),
      _c(
        "p-tabs",
        [
          _c("p-tab", { attrs: { name: "Markdown" } }, [
            _c("textarea", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.value,
                  expression: "value"
                }
              ],
              attrs: {
                name: _vm.field.handle,
                id: _vm.field.handle,
                cols: "30",
                rows: "12",
                autofocus: ""
              },
              domProps: { value: _vm.value },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.value = $event.target.value
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("p-tab", { attrs: { name: "Preview" } }, [
            _c("div", {
              staticClass: "markdown-body",
              domProps: { innerHTML: _vm._s(_vm.preview) }
            })
          ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Mailables/Edit.vue?vue&type=template&id=2fa3d876&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Mailables/Edit.vue?vue&type=template&id=2fa3d876& ***!
  \************************************************************************************************************************************************************************************************************/
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
    "form-container",
    {
      scopedSlots: _vm._u([
        {
          key: "sidebar",
          fn: function() {
            return [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card__body" },
                  [
                    _c("p-slug", {
                      attrs: {
                        name: "handle",
                        label: "Handle",
                        monospaced: "",
                        autocomplete: "off",
                        required: "",
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
                    }),
                    _vm._v(" "),
                    _c("p-toggle", {
                      attrs: {
                        name: "status",
                        label: "Status",
                        "true-value": 1,
                        "false-value": 0
                      },
                      model: {
                        value: _vm.form.status,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "status", $$v)
                        },
                        expression: "form.status"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card__body" },
                  [
                    _c("p", { staticClass: "text-sm" }, [
                      _vm._v(
                        "Below you will find a variety of values you may reference within your template."
                      )
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.placeholders, function(options, name) {
                      return _c(
                        "div",
                        { key: name },
                        [
                          !_vm.isArray(options)
                            ? _c(
                                "p-button",
                                {
                                  staticClass: "w-full mb-3 text-xs font-mono",
                                  on: {
                                    click: function($event) {
                                      return _vm.addPlaceholder(options)
                                    }
                                  }
                                },
                                [_vm._v("$" + _vm._s(options))]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "p-dropdown",
                            {
                              attrs: { id: "values" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "menu",
                                    fn: function() {
                                      return _vm._l(options, function(
                                        value,
                                        key
                                      ) {
                                        return _c(
                                          "p-dropdown-link",
                                          {
                                            key: key,
                                            staticClass: "text-xs",
                                            on: {
                                              click: function($event) {
                                                return _vm.addPlaceholder(
                                                  value,
                                                  name
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                    " +
                                                _vm._s(value) +
                                                "\n                            "
                                            )
                                          ]
                                        )
                                      })
                                    },
                                    proxy: true
                                  }
                                ],
                                null,
                                true
                              )
                            },
                            [
                              _vm._v(
                                "\n                        $" +
                                  _vm._s(name) +
                                  "\n\n                        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    })
                  ],
                  2
                )
              ])
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("app-title", { attrs: { icon: "mail-bulk" } }, [
            _vm._v("Edit Mailable")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "actions" } }, [
        _c(
          "div",
          { staticClass: "buttons" },
          [
            _c(
              "router-link",
              { staticClass: "button", attrs: { to: { name: "mailables" } } },
              [_vm._v("Go Back")]
            ),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "button button--primary",
                class: { "button--disabled": !_vm.form.hasChanges },
                attrs: { type: "submit", disabled: !_vm.form.hasChanges },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.submit($event)
                  }
                }
              },
              [_vm._v("Save")]
            )
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "card" }, [
        _c(
          "div",
          { staticClass: "card__body" },
          [
            _c("p-title", {
              attrs: {
                name: "name",
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
            _vm.ready
              ? _c("markdown-field", {
                  ref: "markdown",
                  attrs: {
                    field: {
                      name: "Content",
                      handle: "markdown"
                    },
                    value: _vm.form.markdown
                  },
                  on: { input: _vm.updateMarkdown }
                })
              : _vm._e()
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/fieldtypes/Markdown/Field.vue":
/*!****************************************************!*\
  !*** ./resources/js/fieldtypes/Markdown/Field.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_d522f2c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=d522f2c8& */ "./resources/js/fieldtypes/Markdown/Field.vue?vue&type=template&id=d522f2c8&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/Markdown/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_d522f2c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_d522f2c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/Markdown/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/Markdown/Field.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/fieldtypes/Markdown/Field.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Markdown/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/Markdown/Field.vue?vue&type=template&id=d522f2c8&":
/*!***********************************************************************************!*\
  !*** ./resources/js/fieldtypes/Markdown/Field.vue?vue&type=template&id=d522f2c8& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_d522f2c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=d522f2c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Markdown/Field.vue?vue&type=template&id=d522f2c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_d522f2c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_d522f2c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Mailables/Edit.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Mailables/Edit.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_2fa3d876___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=2fa3d876& */ "./resources/js/views/Mailables/Edit.vue?vue&type=template&id=2fa3d876&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Mailables/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_2fa3d876___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_2fa3d876___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Mailables/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Mailables/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Mailables/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Mailables/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Mailables/Edit.vue?vue&type=template&id=2fa3d876&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Mailables/Edit.vue?vue&type=template&id=2fa3d876& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2fa3d876___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=2fa3d876& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Mailables/Edit.vue?vue&type=template&id=2fa3d876&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2fa3d876___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_2fa3d876___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvTWFya2Rvd24vRmllbGQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvdmlld3MvTWFpbGFibGVzL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL01hcmtkb3duL0ZpZWxkLnZ1ZT8xMDg3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9NYWlsYWJsZXMvRWRpdC52dWU/OTA5MSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9NYXJrZG93bi9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvTWFya2Rvd24vRmllbGQudnVlPzgxYWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvTWFya2Rvd24vRmllbGQudnVlPzMxMjgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL01haWxhYmxlcy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvTWFpbGFibGVzL0VkaXQudnVlPzNiY2UiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL01haWxhYmxlcy9FZGl0LnZ1ZT9iZjk4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBOztBQUNBOztBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBLDRCQURBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0E7QUFEQTtBQUdBLEdBUEE7QUFTQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQU5BLEdBVEE7QUFxQkE7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFOQSxHQXJCQTtBQThCQSxTQTlCQSxxQkE4QkE7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TTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTBMLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvMTkuanM/aWQ9MjU3MzQ3N2IyMDE1ODQ1MTYyOWMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImZvcm1fX2dyb3VwXCI+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtX19sYWJlbFwiXG4gICAgICAgICAgICA6Zm9yPVwiZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICAgIHYtaHRtbD1cImZpZWxkLm5hbWVcIj5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8cC10YWJzPlxuICAgICAgICAgICAgPHAtdGFiIG5hbWU9XCJNYXJrZG93blwiPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgIDppZD1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgIGNvbHM9XCIzMFwiXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1cz5cbiAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxuICAgICAgICAgICAgPC9wLXRhYj5cbiAgICAgICAgICAgIDxwLXRhYiBuYW1lPVwiUHJldmlld1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1odG1sPVwicHJldmlld1wiIGNsYXNzPVwibWFya2Rvd24tYm9keVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9wLXRhYj5cbiAgICAgICAgPC9wLXRhYnM+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIHJlcXVpcmUoJ2NvZGVtaXJyb3IvbW9kZS9nZm0vZ2ZtJylcbiAgICByZXF1aXJlKCdjb2RlbWlycm9yL2tleW1hcC9zdWJsaW1lJylcbiAgICByZXF1aXJlKCdjb2RlbWlycm9yL2FkZG9uL2Rpc3BsYXkvcGxhY2Vob2xkZXInKVxuXG4gICAgaW1wb3J0IENvZGVNaXJyb3IgZnJvbSAnY29kZW1pcnJvcidcbiAgICBpbXBvcnQgbWFya2VkICAgICBmcm9tICdtYXJrZWQnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdtYXJrZG93bi1maWVsZHR5cGUnLFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvZGVtaXJyb3I6IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBwcmV2aWV3KCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VucyA9IG1hcmtlZC5sZXhlcih0aGlzLnZhbHVlKVxuICAgICAgICAgICAgICAgIGNvbnN0IGh0bWwgICA9IG1hcmtlZC5wYXJzZXIodG9rZW5zKVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJldHVybiBodG1sXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY29kZW1pcnJvciA9IENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZmllbGQuaGFuZGxlKSwge1xuICAgICAgICAgICAgICAgIHRoZW1lOiAnZnVzaW9uJyxcbiAgICAgICAgICAgICAgICBtb2RlOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdnZm0nLFxuICAgICAgICAgICAgICAgICAgICBoaWdobGlnaHRGb3JtYXR0aW5nOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBmZW5jZWRDb2RlQmxvY2tIaWdobGlnaHRpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBsaW5lV3JhcHBpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgdmlld3BvcnRNYXJnaW46IEluZmluaXR5LFxuICAgICAgICAgICAgICAgIGtleU1hcDogJ3N1YmxpbWUnLFxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY29kZW1pcnJvci5yZWZyZXNoKCkgfSwgMSlcblxuICAgICAgICAgICAgdGhpcy5jb2RlbWlycm9yLm9uKCdjaGFuZ2UnLCAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIGluc3RhbmNlLmdldFZhbHVlKCkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgICA8Zm9ybS1jb250YWluZXI+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGFwcC10aXRsZSBpY29uPVwibWFpbC1idWxrXCI+RWRpdCBNYWlsYWJsZTwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnbWFpbGFibGVzJyB9XCIgY2xhc3M9XCJidXR0b25cIj5HbyBCYWNrPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiIDpjbGFzcz1cInsnYnV0dG9uLS1kaXNhYmxlZCc6ICFmb3JtLmhhc0NoYW5nZXN9XCIgOmRpc2FibGVkPVwiIWZvcm0uaGFzQ2hhbmdlc1wiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICA8cC10aXRsZVxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0ubmFtZVwiPlxuICAgICAgICAgICAgICAgIDwvcC10aXRsZT5cblxuICAgICAgICAgICAgICAgIDxtYXJrZG93bi1maWVsZFxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwicmVhZHlcIlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJtYXJrZG93blwiXG4gICAgICAgICAgICAgICAgICAgIHYtb246aW5wdXQ9XCJ1cGRhdGVNYXJrZG93blwiXG4gICAgICAgICAgICAgICAgICAgIDpmaWVsZD1cIntcbiAgICAgICAgICAgICAgICAgICAgICAgICduYW1lJzogJ0NvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2hhbmRsZSc6ICdtYXJrZG93bidcbiAgICAgICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImZvcm0ubWFya2Rvd25cIj5cbiAgICAgICAgICAgICAgICA8L21hcmtkb3duLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6c2lkZWJhcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtc2x1Z1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBtb25vc3BhY2VkXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIDp3YXRjaD1cImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCdoYW5kbGUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnaGFuZGxlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uaGFuZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1zbHVnPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLXRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5zdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnRydWUtdmFsdWU9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpmYWxzZS12YWx1ZT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9wLXRvZ2dsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbVwiPkJlbG93IHlvdSB3aWxsIGZpbmQgYSB2YXJpZXR5IG9mIHZhbHVlcyB5b3UgbWF5IHJlZmVyZW5jZSB3aXRoaW4geW91ciB0ZW1wbGF0ZS48L3A+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihvcHRpb25zLCBuYW1lKSBpbiBwbGFjZWhvbGRlcnNcIiA6a2V5PVwibmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtaWY9XCIhIGlzQXJyYXkob3B0aW9ucylcIiBAY2xpY2s9XCJhZGRQbGFjZWhvbGRlcihvcHRpb25zKVwiIGNsYXNzPVwidy1mdWxsIG1iLTMgdGV4dC14cyBmb250LW1vbm9cIj4ke3sgb3B0aW9ucyB9fTwvcC1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duIGlkPVwidmFsdWVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHt7IG5hbWUgfX1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6bWVudT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtZHJvcGRvd24tbGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKHZhbHVlLCBrZXkpIGluIG9wdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJhZGRQbGFjZWhvbGRlcih2YWx1ZSwgbmFtZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyB2YWx1ZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtZHJvcGRvd24tbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgIDwvZm9ybS1jb250YWluZXI+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBfIGZyb20gJ2xvZGFzaCdcbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtJ1xuICAgIGltcG9ydCBNYXJrZG93bkZpZWxkIGZyb20gJy4uLy4uL2ZpZWxkdHlwZXMvTWFya2Rvd24vRmllbGQnXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiB0aGlzLmZvcm0ubmFtZSB8fCAnTG9hZGluZy4uLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgJ21hcmtkb3duLWZpZWxkJzogTWFya2Rvd25GaWVsZFxuICAgICAgICB9LFxuXG5cdFx0ZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaWQ6IG51bGwsXG4gICAgICAgICAgICAgICAgcmVhZHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyczoge30sXG4gICAgICAgICAgICAgICAgZm9ybTogbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbWFya2Rvd246ICcnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICcxJ1xuICAgICAgICAgICAgICAgIH0sIHRydWUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgaXNBcnJheSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLmlzQXJyYXkodmFsdWUpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhZGRQbGFjZWhvbGRlcih2YWx1ZSwgbmFtZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGVtaXJyb3IgPSB0aGlzLiRyZWZzLm1hcmtkb3duLmNvZGVtaXJyb3JcbiAgICAgICAgICAgICAgICBjb25zdCBkb2MgICAgICAgID0gY29kZW1pcnJvci5nZXREb2MoKVxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnNvciAgICAgPSBkb2MuZ2V0Q3Vyc29yKClcblxuICAgICAgICAgICAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvYy5yZXBsYWNlU2VsZWN0aW9uKGB7eyAkJHtuYW1lfS0+JHt2YWx1ZX0gfX1gLCBkb2MuZ2V0U2VsZWN0aW9uKCkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG9jLnJlcGxhY2VTZWxlY3Rpb24oYHt7ICQke3ZhbHVlfSB9fWAsIGRvYy5nZXRTZWxlY3Rpb24oKSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB1cGRhdGVNYXJrZG93bihtYXJrZG93bikge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5tYXJrZG93biA9IG1hcmtkb3duXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhdGNoKCcvYXBpL21haWxhYmxlcy8nICsgdGhpcy5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ01haWxhYmxlIHN1Y2Nlc3NmdWxseSB1cGRhdGVkJywgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvbWFpbGFibGVzJylcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UucmVzcG9uc2UuZGF0YS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgcGxhY2Vob2xkZXJPcHRpb25zKHBsYWNlaG9sZGVycykge1xuICAgICAgICAgICAgICAgIGxldCBvcHRpb25zID0gW11cblxuICAgICAgICAgICAgICAgIF8uZWFjaChwbGFjZWhvbGRlcnMsIChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBvcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogb3B0aW9uXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25zXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KGAvYXBpL21haWxhYmxlcy8ke3RvLnBhcmFtcy5tYWlsYWJsZX1gKSxcbiAgICAgICAgICAgIF0pLnRoZW4oYXhpb3Muc3ByZWFkKGZ1bmN0aW9uIChtYWlsYWJsZSkge1xuICAgICAgICAgICAgICAgIG5leHQoZnVuY3Rpb24odm0pIHtcbiAgICAgICAgICAgICAgICAgICAgdm0uaWQgICAgICAgICAgID0gbWFpbGFibGUuZGF0YS5kYXRhLmlkXG4gICAgICAgICAgICAgICAgICAgIHZtLnBsYWNlaG9sZGVycyA9IG1haWxhYmxlLmRhdGEuZGF0YS5wbGFjZWhvbGRlcnNcbiAgICAgICAgICAgICAgICAgICAgdm0ucmVhZHkgICAgICAgID0gdHJ1ZVxuXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ubmFtZSAgICAgPSBtYWlsYWJsZS5kYXRhLmRhdGEubmFtZVxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLmhhbmRsZSAgID0gbWFpbGFibGUuZGF0YS5kYXRhLmhhbmRsZVxuICAgICAgICAgICAgICAgICAgICB2bS5mb3JtLm1hcmtkb3duID0gbWFpbGFibGUuZGF0YS5kYXRhLm1hcmtkb3duXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ucmVzZXRDaGFuZ2VMaXN0ZW5lcigpXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uJGVtaXQoJ3VwZGF0ZUhlYWQnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgIFx0fSkpLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgbmV4dCgnL21haWxhYmxlcycpXG4gICAgICAgICAgICAgICAgdG9hc3QoJ1RoZSByZXF1ZXN0ZWQgbWFpbGFibGUgY291bGQgbm90IGJlIGZvdW5kJywgJ3dhcm5pbmcnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXHR9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJmb3JtX19ncm91cFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJsYWJlbFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1fX2xhYmVsXCIsXG4gICAgICAgIGF0dHJzOiB7IGZvcjogX3ZtLmZpZWxkLmhhbmRsZSB9LFxuICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uZmllbGQubmFtZSkgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicC10YWJzXCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInAtdGFiXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJNYXJrZG93blwiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZhbHVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSxcbiAgICAgICAgICAgICAgICBpZDogX3ZtLmZpZWxkLmhhbmRsZSxcbiAgICAgICAgICAgICAgICBjb2xzOiBcIjMwXCIsXG4gICAgICAgICAgICAgICAgcm93czogXCIxMlwiLFxuICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnZhbHVlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLnZhbHVlID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicC10YWJcIiwgeyBhdHRyczogeyBuYW1lOiBcIlByZXZpZXdcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWFya2Rvd24tYm9keVwiLFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0ucHJldmlldykgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybS1jb250YWluZXJcIixcbiAgICB7XG4gICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAge1xuICAgICAgICAgIGtleTogXCJzaWRlYmFyXCIsXG4gICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicC1zbHVnXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJoYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2F0Y2g6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiaGFuZGxlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJoYW5kbGVcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJoYW5kbGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5oYW5kbGVcIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicC10b2dnbGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRydWUtdmFsdWVcIjogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFsc2UtdmFsdWVcIjogMFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInN0YXR1c1wiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkJlbG93IHlvdSB3aWxsIGZpbmQgYSB2YXJpZXR5IG9mIHZhbHVlcyB5b3UgbWF5IHJlZmVyZW5jZSB3aXRoaW4geW91ciB0ZW1wbGF0ZS5cIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucGxhY2Vob2xkZXJzLCBmdW5jdGlvbihvcHRpb25zLCBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBuYW1lIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uaXNBcnJheShvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInctZnVsbCBtYi0zIHRleHQteHMgZm9udC1tb25vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5hZGRQbGFjZWhvbGRlcihvcHRpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIiRcIiArIF92bS5fcyhvcHRpb25zKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWRyb3Bkb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWQ6IFwidmFsdWVzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwibWVudVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLl9sKG9wdGlvbnMsIGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtZHJvcGRvd24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC14c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkUGxhY2Vob2xkZXIoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModmFsdWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAkXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhuYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0pXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJtYWlsLWJ1bGtcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIkVkaXQgTWFpbGFibGVcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicG9ydGFsXCIsIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b25cIiwgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJtYWlsYWJsZXNcIiB9IH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkdvIEJhY2tcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiYnV0dG9uLS1kaXNhYmxlZFwiOiAhX3ZtLmZvcm0uaGFzQ2hhbmdlcyB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic3VibWl0XCIsIGRpc2FibGVkOiAhX3ZtLmZvcm0uaGFzQ2hhbmdlcyB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInAtdGl0bGVcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICBhdXRvZm9jdXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJuYW1lXCIpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5yZWFkeVxuICAgICAgICAgICAgICA/IF9jKFwibWFya2Rvd24tZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgcmVmOiBcIm1hcmtkb3duXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZTogXCJtYXJrZG93blwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5tYXJrZG93blxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGlucHV0OiBfdm0udXBkYXRlTWFya2Rvd24gfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ1MjJmMmM4JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkNTIyZjJjOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkNTIyZjJjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkNTIyZjJjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ1MjJmMmM4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Q1MjJmMmM4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZmllbGR0eXBlcy9NYXJrZG93bi9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ1MjJmMmM4JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZmEzZDg3NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvZnVzaW9uY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJmYTNkODc2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJmYTNkODc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJmYTNkODc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZmEzZDg3NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyZmEzZDg3NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL01haWxhYmxlcy9FZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmZhM2Q4NzYmXCIiXSwic291cmNlUm9vdCI6IiJ9