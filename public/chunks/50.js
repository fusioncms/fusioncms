(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      collection: {},
      entry: {},
      form: {}
    };
  },
  computed: {
    sections: function sections() {
      var body = [];
      var sidebar = [];

      if (this.collection.fieldset) {
        body = _.filter(this.collection.fieldset.sections, function (section) {
          return section.placement == 'body';
        });
        sidebar = _.filter(this.collection.fieldset.sections, function (section) {
          return section.placement == 'sidebar';
        });
      }

      return {
        body: body,
        sidebar: sidebar
      };
    },
    singular: function singular() {
      if (this.collection.name) {
        return pluralize__WEBPACK_IMPORTED_MODULE_0___default.a.singular(this.collection.name);
      }

      return '';
    }
  },
  methods: {
    submit: function submit() {
      this.form.patch('/api/collections/' + this.collection.handle + '/' + this.entry.id).then(function (response) {
        toast('Entry saved successfully', 'success');
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    },
    getEntry: function getEntry(to, from, next) {
      var vm = this;
      axios.get('/api/collections/' + to.params.collection + '/' + to.params.id).then(function (response) {
        vm.collection = response.data.data.matrix;
        vm.entry = response.data.data;
        var fields = {
          name: vm.entry.name,
          slug: vm.entry.slug,
          status: vm.entry.status
        };

        _.forEach(vm.collection.fields, function (value, handle) {
          Vue.set(fields, handle, vm.entry[handle]);
        });

        vm.form = new _forms_Form__WEBPACK_IMPORTED_MODULE_1__["default"](fields);
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.getEntry(to, from, next);
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83& ***!
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
          _c(
            "app-title",
            { attrs: { icon: _vm.collection.icon || "pencil" } },
            [_vm._v("Edit " + _vm._s(_vm.singular))]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "subtitle" } }, [
        _vm._v(_vm._s(_vm.collection.description))
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "content-container" }, [
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
                    { staticClass: "col xxl:text-right w-full xxl:w-1/3" },
                    [_c("div", { staticClass: "xxl:mr-10" })]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "col w-full xxl:w-2/3" }, [
                    _c("div", { staticClass: "row" }, [
                      _c(
                        "div",
                        { staticClass: "col w-1/2" },
                        [
                          _c("p-input", {
                            attrs: { name: "name", label: "Name" },
                            model: {
                              value: _vm.form.name,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "name", $$v)
                              },
                              expression: "form.name"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "col w-1/2" },
                        [
                          _c("p-slug", {
                            attrs: {
                              name: "slug",
                              label: "Slug",
                              monospaced: "",
                              watch: _vm.form.name
                            },
                            model: {
                              value: _vm.form.slug,
                              callback: function($$v) {
                                _vm.$set(_vm.form, "slug", $$v)
                              },
                              expression: "form.slug"
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _vm.sections.body.length > 0
                  ? _c(
                      "div",
                      _vm._l(_vm.sections.body, function(section, index) {
                        return _c("div", { key: section.handle }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "col xxl:text-right w-full xxl:w-1/3"
                              },
                              [
                                _c("div", { staticClass: "xxl:mr-10" }, [
                                  _c("h3", [_vm._v(_vm._s(section.name))]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-sm" }, [
                                    _vm._v(_vm._s(section.description))
                                  ])
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col w-full xxl:w-2/3" },
                              _vm._l(section.fields, function(field) {
                                return _c(
                                  "div",
                                  {
                                    key: field.handle,
                                    staticClass: "form__group"
                                  },
                                  [
                                    _c(field.type.handle + "-fieldtype", {
                                      tag: "component",
                                      attrs: { field: field },
                                      model: {
                                        value: _vm.form[field.handle],
                                        callback: function($$v) {
                                          _vm.$set(_vm.form, field.handle, $$v)
                                        },
                                        expression: "form[field.handle]"
                                      }
                                    })
                                  ],
                                  1
                                )
                              }),
                              0
                            )
                          ]),
                          _vm._v(" "),
                          index !== _vm.sections.body.length - 1
                            ? _c("hr")
                            : _vm._e()
                        ])
                      }),
                      0
                    )
                  : _c(
                      "div",
                      { staticClass: "text-center" },
                      [
                        _c(
                          "p",
                          [
                            _vm._v(
                              "You should configure your Matrix Collection with some sections and fields first "
                            ),
                            _c("fa-icon", {
                              staticClass: "text-emoji",
                              attrs: { icon: ["fas", "hand-peace"] }
                            })
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "router-link",
                          {
                            staticClass: "button items-center",
                            attrs: {
                              to: "/matrices/manage/" + _vm.collection.id
                            }
                          },
                          [
                            _c("fa-icon", {
                              staticClass: "mr-2 text-sm",
                              attrs: { icon: ["fas", "atom-alt"] }
                            }),
                            _vm._v(" Manage your collection")
                          ],
                          1
                        )
                      ],
                      1
                    )
              ])
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "side-container" }, [
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
              _c(
                "p-card",
                [
                  _c("div", { staticClass: "row" }, [
                    _c(
                      "div",
                      { staticClass: "col w-full" },
                      [
                        _c("p-select", {
                          attrs: {
                            name: "status",
                            label: "Status",
                            options: [
                              {
                                label: "Enabled",
                                value: 1
                              },
                              {
                                label: "Disabled",
                                value: 0
                              }
                            ]
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
                  _c(
                    "portal",
                    { attrs: { to: "actions" } },
                    [
                      _vm.collection.handle
                        ? _c(
                            "router-link",
                            {
                              staticClass: "button mr-3",
                              attrs: {
                                to: {
                                  name: "entries.index",
                                  params: { collection: _vm.collection.handle }
                                }
                              }
                            },
                            [_vm._v("Go Back")]
                          )
                        : _vm._e(),
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
                        [_vm._v("Save")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm._l(_vm.sections.sidebar, function(section) {
                return _c(
                  "p-card",
                  { key: section.handle, staticClass: "mt-6" },
                  [
                    _c("h3", [_vm._v(_vm._s(section.name))]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-sm" }, [
                      _vm._v(_vm._s(section.description))
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "w-full" },
                      _vm._l(section.fields, function(field) {
                        return _c(
                          "div",
                          { key: field.handle, staticClass: "form__group" },
                          [
                            _c(field.type.handle + "-fieldtype", {
                              tag: "component",
                              attrs: { field: field },
                              model: {
                                value: _vm.form[field.handle],
                                callback: function($$v) {
                                  _vm.$set(_vm.form, field.handle, $$v)
                                },
                                expression: "form[field.handle]"
                              }
                            })
                          ],
                          1
                        )
                      }),
                      0
                    )
                  ]
                )
              })
            ],
            2
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Collections/Edit.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Collections/Edit.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=32cdfd83& */ "./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Collections/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=32cdfd83& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Edit.vue?vue&type=template&id=32cdfd83&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_32cdfd83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0NvbGxlY3Rpb25zL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Db2xsZWN0aW9ucy9FZGl0LnZ1ZT81NGJmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Db2xsZWN0aW9ucy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQ29sbGVjdGlvbnMvRWRpdC52dWU/MTI3YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQ29sbGVjdGlvbnMvRWRpdC52dWU/MzBlMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkhBO0FBQ0E7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsZUFGQTtBQUdBO0FBSEE7QUFLQSxHQVBBO0FBU0E7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBSUE7QUFDQTtBQUNBLFNBRkE7QUFHQTs7QUFFQTtBQUNBLGtCQURBO0FBRUE7QUFGQTtBQUlBLEtBbkJBO0FBcUJBLFlBckJBLHNCQXFCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBM0JBLEdBVEE7QUF1Q0E7QUFDQSxVQURBLG9CQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsV0FFQTtBQUNBO0FBQ0EsT0FKQTtBQUtBLEtBUEE7QUFTQSxZQVRBLG9CQVNBLEVBVEEsRUFTQSxJQVRBLEVBU0EsSUFUQSxFQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLDZCQURBO0FBRUEsNkJBRkE7QUFHQTtBQUhB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QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy81MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxhcHAtdGl0bGUgOmljb249XCJjb2xsZWN0aW9uLmljb24gfHwgJ3BlbmNpbCdcIj5FZGl0IHt7IHNpbmd1bGFyIH19PC9hcHAtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuICAgICAgICBcbiAgICAgICAgPHBvcnRhbCB0bz1cInN1YnRpdGxlXCI+e3sgY29sbGVjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcG9ydGFsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1jYXJkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHh4bDp0ZXh0LXJpZ2h0IHctZnVsbCB4eGw6dy0xLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ4eGw6bXItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tICAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbCB4eGw6dy0yLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctMS8yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWlucHV0IG5hbWU9XCJuYW1lXCIgbGFiZWw9XCJOYW1lXCIgdi1tb2RlbD1cImZvcm0ubmFtZVwiPjwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy0xLzJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtc2x1ZyBuYW1lPVwic2x1Z1wiIGxhYmVsPVwiU2x1Z1wiIG1vbm9zcGFjZWQgdi1tb2RlbD1cImZvcm0uc2x1Z1wiIDp3YXRjaD1cImZvcm0ubmFtZVwiPjwvcC1zbHVnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJzZWN0aW9ucy5ib2R5Lmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIExvb3AgdGhyb3VnaCBlYWNoIHNlY3Rpb24gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihzZWN0aW9uLCBpbmRleCkgaW4gc2VjdGlvbnMuYm9keVwiIDprZXk9XCJzZWN0aW9uLmhhbmRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHh4bDp0ZXh0LXJpZ2h0IHctZnVsbCB4eGw6dy0xLzNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieHhsOm1yLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57eyBzZWN0aW9uLm5hbWUgfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRleHQtc21cIj57eyBzZWN0aW9uLmRlc2NyaXB0aW9uIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsIHh4bDp3LTIvM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTG9vcCB0aHJvdWdoIGVhY2ggc2VjdGlvbiBmaWVsZCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZmllbGQgaW4gc2VjdGlvbi5maWVsZHNcIiA6a2V5PVwiZmllbGQuaGFuZGxlXCIgY2xhc3M9XCJmb3JtX19ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXM9XCJmaWVsZC50eXBlLmhhbmRsZSArICctZmllbGR0eXBlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybVtmaWVsZC5oYW5kbGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIHYtaWY9XCJpbmRleCAhPT0gc2VjdGlvbnMuYm9keS5sZW5ndGggLSAxXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPllvdSBzaG91bGQgY29uZmlndXJlIHlvdXIgTWF0cml4IENvbGxlY3Rpb24gd2l0aCBzb21lIHNlY3Rpb25zIGFuZCBmaWVsZHMgZmlyc3QgPGZhLWljb24gY2xhc3M9XCJ0ZXh0LWVtb2ppXCIgOmljb249XCJbJ2ZhcycsICdoYW5kLXBlYWNlJ11cIj48L2ZhLWljb24+PC9wPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIGNsYXNzPVwiYnV0dG9uIGl0ZW1zLWNlbnRlclwiIDp0bz1cIicvbWF0cmljZXMvbWFuYWdlLycgKyBjb2xsZWN0aW9uLmlkXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdhdG9tLWFsdCddXCIgY2xhc3M9XCJtci0yIHRleHQtc21cIj48L2ZhLWljb24+IE1hbmFnZSB5b3VyIGNvbGxlY3Rpb248L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1jYXJkPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1zZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbGFiZWwnOiAnRW5hYmxlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsYWJlbCc6ICdEaXNhYmxlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2YWx1ZSc6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZvcm0uc3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayB2LWlmPVwiY29sbGVjdGlvbi5oYW5kbGVcIiA6dG89XCJ7IG5hbWU6ICdlbnRyaWVzLmluZGV4JywgcGFyYW1zOiB7Y29sbGVjdGlvbjogY29sbGVjdGlvbi5oYW5kbGV9IH1cIiBjbGFzcz1cImJ1dHRvbiBtci0zXCI+R28gQmFjazwvcm91dGVyLWxpbms+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcG9ydGFsPlxuICAgICAgICAgICAgICAgICAgICA8L3AtY2FyZD5cblxuICAgICAgICAgICAgICAgICAgICA8cC1jYXJkIHYtZm9yPVwiKHNlY3Rpb24pIGluIHNlY3Rpb25zLnNpZGViYXJcIiA6a2V5PVwic2VjdGlvbi5oYW5kbGVcIiBjbGFzcz1cIm10LTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57eyBzZWN0aW9uLm5hbWUgfX08L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LXNtXCI+e3sgc2VjdGlvbi5kZXNjcmlwdGlvbiB9fTwvcD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gTG9vcCB0aHJvdWdoIGVhY2ggc2VjdGlvbiBmaWVsZCAtLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZmllbGQgaW4gc2VjdGlvbi5maWVsZHNcIiA6a2V5PVwiZmllbGQuaGFuZGxlXCIgY2xhc3M9XCJmb3JtX19ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aXM9XCJmaWVsZC50eXBlLmhhbmRsZSArICctZmllbGR0eXBlJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybVtmaWVsZC5oYW5kbGVdXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2NvbXBvbmVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L3AtY2FyZD5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJ1xuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IHt9LFxuICAgICAgICAgICAgICAgIGVudHJ5OiB7fSxcbiAgICAgICAgICAgICAgICBmb3JtOiB7fSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgc2VjdGlvbnMoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvZHkgPSBbXVxuICAgICAgICAgICAgICAgIGxldCBzaWRlYmFyID0gW11cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbGxlY3Rpb24uZmllbGRzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keSA9IF8uZmlsdGVyKHRoaXMuY29sbGVjdGlvbi5maWVsZHNldC5zZWN0aW9ucywgZnVuY3Rpb24oc2VjdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlY3Rpb24ucGxhY2VtZW50ID09ICdib2R5J1xuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHNpZGViYXIgPSBfLmZpbHRlcih0aGlzLmNvbGxlY3Rpb24uZmllbGRzZXQuc2VjdGlvbnMsIGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWN0aW9uLnBsYWNlbWVudCA9PSAnc2lkZWJhcidcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBib2R5OiBib2R5LFxuICAgICAgICAgICAgICAgICAgICBzaWRlYmFyOiBzaWRlYmFyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc2luZ3VsYXIoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29sbGVjdGlvbi5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwbHVyYWxpemUuc2luZ3VsYXIodGhpcy5jb2xsZWN0aW9uLm5hbWUpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucGF0Y2goJy9hcGkvY29sbGVjdGlvbnMvJyArIHRoaXMuY29sbGVjdGlvbi5oYW5kbGUgKyAnLycgKyB0aGlzLmVudHJ5LmlkKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnRW50cnkgc2F2ZWQgc3VjY2Vzc2Z1bGx5JywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnZXRFbnRyeSh0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgICAgIGxldCB2bSA9IHRoaXNcblxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9jb2xsZWN0aW9ucy8nICsgdG8ucGFyYW1zLmNvbGxlY3Rpb24gKyAnLycgKyB0by5wYXJhbXMuaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7ICAgIFxuICAgICAgICAgICAgICAgICAgICB2bS5jb2xsZWN0aW9uID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hdHJpeFxuICAgICAgICAgICAgICAgICAgICB2bS5lbnRyeSA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuXG4gICAgICAgICAgICAgICAgICAgIGxldCBmaWVsZHMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB2bS5lbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2x1Zzogdm0uZW50cnkuc2x1ZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1czogdm0uZW50cnkuc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHZtLmNvbGxlY3Rpb24uZmllbGRzLCBmdW5jdGlvbih2YWx1ZSwgaGFuZGxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBWdWUuc2V0KGZpZWxkcywgaGFuZGxlLCB2bS5lbnRyeVtoYW5kbGVdKVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0gPSBuZXcgRm9ybShmaWVsZHMpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgbmV4dCh2bSA9PiB7XG4gICAgICAgICAgICAgICAgdm0uZ2V0RW50cnkodG8sIGZyb20sIG5leHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhcHAtdGl0bGVcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgaWNvbjogX3ZtLmNvbGxlY3Rpb24uaWNvbiB8fCBcInBlbmNpbFwiIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJFZGl0IFwiICsgX3ZtLl9zKF92bS5zaW5ndWxhcikpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcInN1YnRpdGxlXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvbGxlY3Rpb24uZGVzY3JpcHRpb24pKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicC1jYXJkXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCB4eGw6dGV4dC1yaWdodCB3LWZ1bGwgeHhsOnctMS8zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwieHhsOm1yLTEwXCIgfSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctZnVsbCB4eGw6dy0yLzNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIHctMS8yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcIm5hbWVcIiwgbGFiZWw6IFwiTmFtZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy0xLzJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtc2x1Z1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2x1Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2x1Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9ub3NwYWNlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhdGNoOiBfdm0uZm9ybS5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnNsdWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNsdWdcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5zbHVnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uc2VjdGlvbnMuYm9keS5sZW5ndGggPiAwXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWN0aW9ucy5ib2R5LCBmdW5jdGlvbihzZWN0aW9uLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBzZWN0aW9uLmhhbmRsZSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjb2wgeHhsOnRleHQtcmlnaHQgdy1mdWxsIHh4bDp3LTEvM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInh4bDptci0xMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoX3ZtLl9zKHNlY3Rpb24ubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhzZWN0aW9uLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LWZ1bGwgeHhsOnctMi8zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChzZWN0aW9uLmZpZWxkcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZC5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtX19ncm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhmaWVsZC50eXBlLmhhbmRsZSArIFwiLWZpZWxkdHlwZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZmllbGQ6IGZpZWxkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtW2ZpZWxkLmhhbmRsZV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIGZpZWxkLmhhbmRsZSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtW2ZpZWxkLmhhbmRsZV1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCAhPT0gX3ZtLnNlY3Rpb25zLmJvZHkubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJoclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJZb3Ugc2hvdWxkIGNvbmZpZ3VyZSB5b3VyIE1hdHJpeCBDb2xsZWN0aW9uIHdpdGggc29tZSBzZWN0aW9ucyBhbmQgZmllbGRzIGZpcnN0IFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1lbW9qaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiaGFuZC1wZWFjZVwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGl0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogXCIvbWF0cmljZXMvbWFuYWdlL1wiICsgX3ZtLmNvbGxlY3Rpb24uaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMiB0ZXh0LXNtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJhdG9tLWFsdFwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIE1hbmFnZSB5b3VyIGNvbGxlY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2lkZS1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicC1jYXJkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgdy1mdWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRW5hYmxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiRGlzYWJsZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLnN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJzdGF0dXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLnN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY29sbGVjdGlvbi5oYW5kbGVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBtci0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZW50cmllcy5pbmRleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBjb2xsZWN0aW9uOiBfdm0uY29sbGVjdGlvbi5oYW5kbGUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zZWN0aW9ucy5zaWRlYmFyLCBmdW5jdGlvbihzZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJwLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgIHsga2V5OiBzZWN0aW9uLmhhbmRsZSwgc3RhdGljQ2xhc3M6IFwibXQtNlwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihfdm0uX3Moc2VjdGlvbi5uYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKHNlY3Rpb24uZGVzY3JpcHRpb24pKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHNlY3Rpb24uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogZmllbGQuaGFuZGxlLCBzdGF0aWNDbGFzczogXCJmb3JtX19ncm91cFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhmaWVsZC50eXBlLmhhbmRsZSArIFwiLWZpZWxkdHlwZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmaWVsZDogZmllbGQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZm9ybVtmaWVsZC5oYW5kbGVdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIGZpZWxkLmhhbmRsZSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm1bZmllbGQuaGFuZGxlXVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzJjZGZkODMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzJjZGZkODMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzJjZGZkODMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyY2RmZDgzJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzMyY2RmZDgzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvQ29sbGVjdGlvbnMvRWRpdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyY2RmZDgzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==