(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Select/Options.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Select/Options.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../mixins/fieldtype */ "./resources/js/mixins/fieldtype.js");
/* harmony import */ var _OptionBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../OptionBuilder */ "./resources/js/components/OptionBuilder.vue");
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'select-fieldtype-options',
  mixins: [_mixins_fieldtype__WEBPACK_IMPORTED_MODULE_0__["default"]],
  components: {
    'option-builder': _OptionBuilder__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OptionBuilder.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OptionBuilder.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      limit: 1,
      editing: {
        index: null,
        checked: null,
        label: null,
        value: null
      },
      option: {
        checked: false,
        label: '',
        value: ''
      },
      options: []
    };
  },
  props: ['value'],
  computed: {
    defaults: function defaults() {
      return _.filter(this.options, ['checked', true]);
    }
  },
  watch: {
    options: function options(value) {
      this.$emit('input', value);
    },
    value: function value(_value) {
      this.options = _value;
    }
  },
  methods: {
    add: function add() {
      this.options.push({
        checked: false,
        label: this.option.label,
        value: this.option.value || this.option.label
      });
      this.resetOption();
    },
    edit: function edit(index) {
      this.editing.index = index;
      this.editing.checked = this.options[index].checked;
      this.editing.label = this.options[index].label;
      this.editing.value = this.options[index].value;
    },
    update: function update() {
      this.options.splice(this.editing.index, 1, {
        label: this.editing.label,
        value: this.editing.value,
        checked: this.editing.checked
      });
      this.resetEditing();
    },
    destroy: function destroy(index) {
      var value = this.options[index].value;

      var defaultIndex = _.indexOf(this.defaults, value);

      if (defaultIndex !== -1) {
        this.defaults.splice(defaultIndex, 1);
      }

      this.options.splice(index, 1);
    },
    isEditing: function isEditing(index) {
      return this.editing.index == index;
    },
    resetOption: function resetOption() {
      this.option.label = '';
      this.option.value = '';
      this.option.checked = false;
      this.$nextTick(function () {
        this.$refs.label.$el.focus();
      });
    },
    resetEditing: function resetEditing() {
      this.editing.index = null;
      this.editing.label = null;
      this.editing.value = null;
      this.editing.checked = null;
      this.$nextTick(function () {
        this.$refs.label.$el.focus();
      });
    },
    metLimit: function metLimit(option) {
      return this.defaults.length >= this.limit && _.findIndex(this.defaults, ['value', option.value]) === -1;
    }
  },
  created: function created() {
    this.options = this.value || [];
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Select/Options.vue?vue&type=template&id=02d61380&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Select/Options.vue?vue&type=template&id=02d61380& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "div",
      { staticClass: "col w-full" },
      [
        _c("option-builder", {
          model: {
            value: _vm.value.options,
            callback: function($$v) {
              _vm.$set(_vm.value, "options", $$v)
            },
            expression: "value.options"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OptionBuilder.vue?vue&type=template&id=920d0bea&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/OptionBuilder.vue?vue&type=template&id=920d0bea& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row p-0" }, [
    _c(
      "form",
      {
        staticClass: "col col--flush w-full lg:w-1/2",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.add($event)
          }
        }
      },
      [
        _c("p-input", {
          ref: "label",
          attrs: { text: "text", placeholder: "Label" },
          model: {
            value: _vm.option.label,
            callback: function($$v) {
              _vm.$set(_vm.option, "label", $$v)
            },
            expression: "option.label"
          }
        }),
        _vm._v(" "),
        _c("p-input", {
          attrs: { text: "text", placeholder: "Value" },
          model: {
            value: _vm.option.value,
            callback: function($$v) {
              _vm.$set(_vm.option, "value", $$v)
            },
            expression: "option.value"
          }
        }),
        _vm._v(" "),
        _c(
          "p-button",
          {
            staticClass: "w-full",
            attrs: { type: "submit" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.add($event)
              }
            }
          },
          [_vm._v("Add")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "mt-6 text-center text-sm text-grey-dark" }, [
          _vm._v("Add and arrange as many options as you need.")
        ])
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col col--flush w-full lg:w-1/2" },
      [
        _c("p-sortable-list", {
          scopedSlots: _vm._u([
            {
              key: "default",
              fn: function(ref) {
                var items = ref.items
                return _c(
                  "div",
                  {},
                  _vm._l(items, function(option, index) {
                    return _c("p-sortable-item", { key: option.value }, [
                      _c("div", { staticClass: "flex bg-white shadow" }, [
                        _vm.isEditing(index)
                          ? _c(
                              "form",
                              {
                                staticClass:
                                  "flex justify-center items-center pl-3 py-1",
                                on: {
                                  submit: function($event) {
                                    $event.preventDefault()
                                    return _vm.update($event)
                                  }
                                }
                              },
                              [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.editing.label,
                                      expression: "editing.label"
                                    }
                                  ],
                                  ref: "edit",
                                  refInFor: true,
                                  staticClass: "flex-1",
                                  attrs: { text: "text", placeholder: "Label" },
                                  domProps: { value: _vm.editing.label },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.editing,
                                        "label",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.editing.value,
                                      expression: "editing.value"
                                    }
                                  ],
                                  staticClass: "flex-1",
                                  attrs: { text: "text", placeholder: "Value" },
                                  domProps: { value: _vm.editing.value },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.editing,
                                        "value",
                                        $event.target.value
                                      )
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "p-2 text-grey-light focus:outline-none",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.resetEditing($event)
                                      }
                                    }
                                  },
                                  [_c("fa-icon", { attrs: { icon: "times" } })],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "p-2 text-grey-light focus:outline-none",
                                    attrs: { type: "submit" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.update($event)
                                      }
                                    }
                                  },
                                  [_c("fa-icon", { attrs: { icon: "check" } })],
                                  1
                                )
                              ]
                            )
                          : _c(
                              "div",
                              { staticClass: "flex flex-1 items-center" },
                              [
                                _c(
                                  "p-sortable-handle",
                                  { staticClass: "cursor-move inline-block" },
                                  [
                                    _c("fa-icon", {
                                      staticClass:
                                        "handle fa-fw text-grey-light mr-3",
                                      attrs: { icon: "ellipsis-v" }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "mr-3 flex-1" }, [
                                  _c("input", {
                                    directives: [
                                      {
                                        name: "model",
                                        rawName: "v-model",
                                        value: option.checked,
                                        expression: "option.checked"
                                      }
                                    ],
                                    staticClass: "mr-3",
                                    attrs: {
                                      type: "checkbox",
                                      disabled: _vm.metLimit(option)
                                    },
                                    domProps: {
                                      value: option.value,
                                      checked: Array.isArray(option.checked)
                                        ? _vm._i(option.checked, option.value) >
                                          -1
                                        : option.checked
                                    },
                                    on: {
                                      change: function($event) {
                                        var $$a = option.checked,
                                          $$el = $event.target,
                                          $$c = $$el.checked ? true : false
                                        if (Array.isArray($$a)) {
                                          var $$v = option.value,
                                            $$i = _vm._i($$a, $$v)
                                          if ($$el.checked) {
                                            $$i < 0 &&
                                              _vm.$set(
                                                option,
                                                "checked",
                                                $$a.concat([$$v])
                                              )
                                          } else {
                                            $$i > -1 &&
                                              _vm.$set(
                                                option,
                                                "checked",
                                                $$a
                                                  .slice(0, $$i)
                                                  .concat($$a.slice($$i + 1))
                                              )
                                          }
                                        } else {
                                          _vm.$set(option, "checked", $$c)
                                        }
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("b", [_vm._v(_vm._s(option.label))]),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    {
                                      staticClass:
                                        "ml-3 text-xs text-grey-dark bg-grey-lighter px-2 py-1"
                                    },
                                    [_vm._v(_vm._s(option.value))]
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "p-2 text-grey-light focus:outline-none",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.edit(index)
                                      }
                                    }
                                  },
                                  [
                                    _c("fa-icon", { attrs: { icon: "pencil" } })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "p-2 text-grey-light focus:outline-none",
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        return _vm.destroy(index)
                                      }
                                    }
                                  },
                                  [
                                    _c("fa-icon", {
                                      attrs: { icon: "trash-alt" }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                      ])
                    ])
                  }),
                  1
                )
              }
            }
          ]),
          model: {
            value: _vm.options,
            callback: function($$v) {
              _vm.options = $$v
            },
            expression: "options"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Fieldtypes/Select/Options.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Select/Options.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Options_vue_vue_type_template_id_02d61380___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Options.vue?vue&type=template&id=02d61380& */ "./resources/js/components/Fieldtypes/Select/Options.vue?vue&type=template&id=02d61380&");
/* harmony import */ var _Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Options.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Select/Options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Options_vue_vue_type_template_id_02d61380___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Options_vue_vue_type_template_id_02d61380___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Select/Options.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Select/Options.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Select/Options.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Options.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Select/Options.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Select/Options.vue?vue&type=template&id=02d61380&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Select/Options.vue?vue&type=template&id=02d61380& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_template_id_02d61380___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Options.vue?vue&type=template&id=02d61380& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Select/Options.vue?vue&type=template&id=02d61380&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_template_id_02d61380___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Options_vue_vue_type_template_id_02d61380___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/OptionBuilder.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/OptionBuilder.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OptionBuilder_vue_vue_type_template_id_920d0bea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OptionBuilder.vue?vue&type=template&id=920d0bea& */ "./resources/js/components/OptionBuilder.vue?vue&type=template&id=920d0bea&");
/* harmony import */ var _OptionBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OptionBuilder.vue?vue&type=script&lang=js& */ "./resources/js/components/OptionBuilder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _OptionBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OptionBuilder_vue_vue_type_template_id_920d0bea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _OptionBuilder_vue_vue_type_template_id_920d0bea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/OptionBuilder.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/OptionBuilder.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/OptionBuilder.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./OptionBuilder.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OptionBuilder.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionBuilder_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/OptionBuilder.vue?vue&type=template&id=920d0bea&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/OptionBuilder.vue?vue&type=template&id=920d0bea& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionBuilder_vue_vue_type_template_id_920d0bea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./OptionBuilder.vue?vue&type=template&id=920d0bea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/OptionBuilder.vue?vue&type=template&id=920d0bea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionBuilder_vue_vue_type_template_id_920d0bea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OptionBuilder_vue_vue_type_template_id_920d0bea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/mixins/fieldtype.js":
/*!******************************************!*\
  !*** ./resources/js/mixins/fieldtype.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    value: {
      required: true
    }
  },
  watch: {
    value: function value(_value) {
      this.$emit('input', _value);
    }
  }
});

/***/ })

}]);