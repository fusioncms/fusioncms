(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Inbox/Index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Inbox/Index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        inner: 'Inbox'
      };
    }
  },
  data: function data() {
    return {
      page: 1,
      lastPage: null,
      forms: [],
      responses: [],
      response: {},
      fields: [],
      loading: false,
      selected: {
        id: null,
        form_id: null
      }
    };
  },
  watch: {
    page: function page(value) {
      this.fetchAndAppendResponses();
    }
  },
  methods: {
    select: function select(response) {
      this.selected = {
        id: response.id,
        form_id: response.form.id
      };
      this.fetchResponse();
    },
    reset: function reset() {
      this.responses = [];
      this.response = {};
      this.fields = [];
      this.page = 1;
      this.lastPage = 0;
      this.selected = {
        id: null,
        form_id: null
      };
    },
    selectForm: function selectForm(form) {
      this.form = form;
      this.fetchResponses();
    },
    isSelected: function isSelected(response) {
      return this.selected.id == response.id && this.selected.form_id == response.form.id;
    },
    isFormSelected: function isFormSelected(form) {
      if (this.form) {
        return this.form.id == form.id;
      }

      return false;
    },
    fetchAndAppendResponses: function fetchAndAppendResponses() {
      var _this = this;

      axios.get('/api/forms/' + this.form.slug + '/responses?page=' + this.page).then(function (responses) {
        _this.responses = _this.responses.concat(responses.data.data);
        _this.loading = false;
      });
    },
    fetchResponses: function fetchResponses() {
      var _this2 = this;

      this.loading = true;
      this.reset();
      axios.get('/api/forms/' + this.form.slug + '/responses?page=' + this.page).then(function (responses) {
        _this2.responses = _this2.responses.concat(responses.data.data);
        _this2.lastPage = responses.data.meta.last_page;
        _this2.loading = false;

        if (_this2.responses.length) {
          _this2.select(_.head(_this2.responses));
        }
      });
    },
    fetchResponse: function fetchResponse() {
      var _this3 = this;

      this.response = _.find(this.responses, function (response) {
        return response.id == _this3.selected.id && response.form.id == _this3.selected.form_id;
      });
      this.fetchFields();
    },
    fetchFields: function fetchFields() {
      var _this4 = this;

      this.fields = [];
      var sections = this.response.form.fieldset.sections;

      _.each(sections, function (section) {
        _.each(section.fields, function (field) {
          _this4.fields.push(field);
        });
      });
    },
    loadMoreResults: Object(lodash__WEBPACK_IMPORTED_MODULE_0__["throttle"])(function (event) {
      if (this.shouldLoadMoreResults()) {
        this.loading = true;
        this.page++;
      }
    }, 300),
    shouldLoadMoreResults: function shouldLoadMoreResults() {
      if (this.page == this.lastPage || this.loading) {
        return false;
      }

      var el = document.getElementById('responses');
      var heightOfResponses = el.clientHeight;
      var responsesDistanceFromWindowTop = el.getBoundingClientRect().top;
      return window.pageYOffset >= (responsesDistanceFromWindowTop + heightOfResponses) * 0.3;
    }
  },
  mounted: function mounted() {
    window.addEventListener('scroll', this.loadMoreResults);
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/forms')]).then(axios.spread(function (forms, responses) {
      next(function (vm) {
        vm.forms = forms.data.data;

        if (vm.forms.length) {
          vm.selectForm(_.head(vm.forms));
        }
      });
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Inbox/Index.vue?vue&type=template&id=15afa71a&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Inbox/Index.vue?vue&type=template&id=15afa71a& ***!
  \*********************************************************************************************************************************************************************************************************/
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
    { staticClass: "h-full max-h-full" },
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [_c("app-title", { attrs: { icon: "inbox" } }, [_vm._v("Inbox")])],
        1
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "actions" } },
        [
          _c(
            "router-link",
            { staticClass: "button", attrs: { to: { name: "forms" } } },
            [_vm._v("Manage Forms")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row h-full" }, [
        _c(
          "div",
          {
            staticClass: "side-container",
            staticStyle: { "margin-bottom": "0 !important" }
          },
          [
            _c("div", { staticClass: "card h-full" }, [
              _c("div", { staticClass: "card__body" }, [
                _c("div", { staticClass: "list" }, [
                  _vm.forms.length == 0
                    ? _c("div", { staticClass: "list" }, [
                        _c("span", { staticClass: "list--separator pt-0" }, [
                          _vm._v("Inboxes")
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          { staticClass: "px-2 text-gray-600 leading-loose" },
                          [_vm._v("No forms available.")]
                        )
                      ])
                    : _c(
                        "div",
                        { staticClass: "list" },
                        [
                          _c("span", { staticClass: "list--separator pt-0" }, [
                            _vm._v("Forms")
                          ]),
                          _vm._v(" "),
                          _vm._l(_vm.forms, function(form) {
                            return _c(
                              "a",
                              {
                                key: form.handle,
                                staticClass: "list--item leading-loose",
                                class: {
                                  "router-link-active": _vm.isFormSelected(form)
                                },
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    return _vm.selectForm(form)
                                  }
                                }
                              },
                              [
                                _c("fa-icon", {
                                  staticClass: "mr-2",
                                  attrs: {
                                    icon: ["fas", "inbox"],
                                    "fixed-width": ""
                                  }
                                }),
                                _vm._v(" " + _vm._s(form.name))
                              ],
                              1
                            )
                          })
                        ],
                        2
                      )
                ])
              ])
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "content-container",
            staticStyle: { "margin-bottom": "0 !important" }
          },
          [
            _c("div", { staticClass: "card h-full flex flex-1" }, [
              _c("div", { staticClass: "flex w-full" }, [
                _c(
                  "div",
                  {
                    staticClass: "border-r leading-none",
                    staticStyle: { width: "350px" },
                    attrs: { id: "responses" }
                  },
                  [
                    _vm._l(_vm.responses, function(response) {
                      return _c(
                        "a",
                        {
                          key: response.id,
                          staticClass:
                            "border-r-4 block hover:bg-gray-100 text-gray-700 hover:text-gray-900",
                          class: {
                            "border-primary-400": _vm.isSelected(response),
                            "border-gray-200": !_vm.isSelected(response)
                          },
                          attrs: { href: "#" },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.select(response)
                            }
                          }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "pl-3 pr-4 py-6 border-b border-gray-200"
                            },
                            [
                              _c("div", { staticClass: "flex" }, [
                                _c(
                                  "div",
                                  { staticClass: "mr-3 flex flex-col" },
                                  [
                                    _c("fa-icon", {
                                      staticClass: "mb-2",
                                      attrs: {
                                        icon: ["far", "star"],
                                        "fixed-width": ""
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("fa-icon", {
                                      attrs: {
                                        icon: ["far", "check-circle"],
                                        "fixed-width": ""
                                      }
                                    })
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "w-full" }, [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "flex justify-between items-center mb-2"
                                    },
                                    [
                                      _c("b", [
                                        _vm._v(
                                          _vm._s(
                                            response.identifiable_email_address
                                          )
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass:
                                            "block text-gray-600 text-sm"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm
                                                .$moment(response.created_at)
                                                .format("L")
                                            )
                                          )
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "text-gray-800" }, [
                                    _vm._v(
                                      "\n                                            Re: " +
                                        _vm._s(response.form.name) +
                                        "\n                                        "
                                    )
                                  ])
                                ])
                              ])
                            ]
                          )
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _vm.loading
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "p-6 border-gray-200 border-r-4 flex justify-center items-center"
                          },
                          [
                            _c("fa-icon", {
                              staticClass: "fa-spin mr-3",
                              attrs: { icon: ["fas", "circle-notch"] }
                            }),
                            _vm._v(
                              " Loading responses...\n                        "
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  ],
                  2
                ),
                _vm._v(" "),
                _vm.response.id
                  ? _c("div", { staticClass: "leading-none flex-1" }, [
                      _c(
                        "div",
                        {
                          staticClass:
                            "flex flex-row-reverse border-b py-4 px-6 justify-between items-center"
                        },
                        [
                          _c("div"),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "text-gray-500 flex items-center" },
                            [
                              _c("fa-icon", {
                                attrs: {
                                  icon: ["fas", "server"],
                                  "fixed-width": ""
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "text-xs font-mono ml-2" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.response.identifiable_ip_address)
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "flex border-b p-6 tracking-wide justify-between items-center"
                        },
                        [
                          _c("div", { staticClass: "flex flex-col text-lg" }, [
                            _c("b", { staticClass: "mb-2" }, [
                              _vm._v(
                                _vm._s(_vm.response.identifiable_email_address)
                              )
                            ]),
                            _vm._v(" "),
                            _c("span", [
                              _vm._v("Re: " + _vm._s(_vm.response.form.name))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "text-sm" }, [
                            _vm._v(
                              "\n                                " +
                                _vm._s(
                                  _vm
                                    .$moment(_vm.response.created_at)
                                    .format("LLL")
                                ) +
                                "\n                            "
                            )
                          ])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "p-6 leading-loose" },
                        _vm._l(_vm.fields, function(field) {
                          return _c(
                            "div",
                            { key: field.handle, staticClass: "form__group" },
                            [
                              _c(
                                "label",
                                {
                                  staticClass: "form__label",
                                  attrs: { for: field.handle }
                                },
                                [_vm._v(_vm._s(field.name))]
                              ),
                              _vm._v(" "),
                              _c("div", { attrs: { id: field.handle } }, [
                                _c("p", [
                                  _vm._v(_vm._s(_vm.response[field.handle]))
                                ])
                              ])
                            ]
                          )
                        }),
                        0
                      )
                    ])
                  : _c("div", { staticClass: "leading-none flex-1 p-6" }, [
                      _c("p", [_vm._v("Select a response to get started")])
                    ])
              ])
            ])
          ]
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Inbox/Index.vue":
/*!********************************************!*\
  !*** ./resources/js/views/Inbox/Index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_15afa71a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=15afa71a& */ "./resources/js/views/Inbox/Index.vue?vue&type=template&id=15afa71a&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/Inbox/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_15afa71a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_15afa71a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Inbox/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Inbox/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Inbox/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Inbox/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Inbox/Index.vue?vue&type=template&id=15afa71a&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Inbox/Index.vue?vue&type=template&id=15afa71a& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_15afa71a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=15afa71a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Inbox/Index.vue?vue&type=template&id=15afa71a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_15afa71a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_15afa71a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0luYm94L0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW5ib3gvSW5kZXgudnVlPzE1MTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0luYm94L0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW5ib3gvSW5kZXgudnVlPzdhMWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0luYm94L0luZGV4LnZ1ZT9lZmYxIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtSEE7QUFFQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFDQTtBQUNBLGFBREE7QUFFQSxvQkFGQTtBQUdBLGVBSEE7QUFJQSxtQkFKQTtBQUtBLGtCQUxBO0FBTUEsZ0JBTkE7QUFPQSxvQkFQQTtBQVFBO0FBQ0EsZ0JBREE7QUFFQTtBQUZBO0FBUkE7QUFhQSxHQXZCQTtBQXlCQTtBQUNBLFFBREEsZ0JBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUhBLEdBekJBO0FBK0JBO0FBQ0EsVUFEQSxrQkFDQSxRQURBLEVBQ0E7QUFDQTtBQUNBLHVCQURBO0FBRUE7QUFGQTtBQUtBO0FBQ0EsS0FSQTtBQVVBLFNBVkEsbUJBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFEQTtBQUVBO0FBRkE7QUFJQSxLQXBCQTtBQXNCQSxjQXRCQSxzQkFzQkEsSUF0QkEsRUFzQkE7QUFDQTtBQUVBO0FBQ0EsS0ExQkE7QUE0QkEs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IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwiaC1mdWxsIG1heC1oLWZ1bGxcIj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8YXBwLXRpdGxlIGljb249XCJpbmJveFwiPkluYm94PC9hcHAtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnZm9ybXMnIH1cIiBjbGFzcz1cImJ1dHRvblwiPk1hbmFnZSBGb3Jtczwvcm91dGVyLWxpbms+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgaC1mdWxsXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1jb250YWluZXJcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBoLWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIiB2LWlmPVwiZm9ybXMubGVuZ3RoID09IDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LS1zZXBhcmF0b3IgcHQtMFwiPkluYm94ZXM8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJweC0yIHRleHQtZ3JheS02MDAgbGVhZGluZy1sb29zZVwiPk5vIGZvcm1zIGF2YWlsYWJsZS48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsaXN0LS1zZXBhcmF0b3IgcHQtMFwiPkZvcm1zPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB2LWZvcj1cImZvcm0gaW4gZm9ybXNcIiA6a2V5PVwiZm9ybS5oYW5kbGVcIiBocmVmPVwiI1wiIGNsYXNzPVwibGlzdC0taXRlbSBsZWFkaW5nLWxvb3NlXCIgOmNsYXNzPVwieydyb3V0ZXItbGluay1hY3RpdmUnOiBpc0Zvcm1TZWxlY3RlZChmb3JtKX1cIiBAY2xpY2sucHJldmVudD1cInNlbGVjdEZvcm0oZm9ybSlcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2luYm94J11cIiBmaXhlZC13aWR0aCBjbGFzcz1cIm1yLTJcIj48L2ZhLWljb24+IHt7IGZvcm0ubmFtZSB9fTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPHNwYW4gY2xhc3M9XCJsaXN0LS1zZXBhcmF0b3JcIj5Gb2xkZXJzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJsaXN0LS1pdGVtIGxlYWRpbmctbG9vc2VcIiA6Y2xhc3M9XCJ7J3JvdXRlci1saW5rLWFjdGl2ZSc6IGluYm94ID09ICdhbGwnfVwiIEBjbGljay5wcmV2ZW50PVwiaW5ib3ggPSAnYWxsJ1wiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnaW5ib3gnXVwiIGZpeGVkLXdpZHRoIGNsYXNzPVwibXItMlwiPjwvZmEtaWNvbj4gSW5ib3g8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxpc3QtLWl0ZW0gbGVhZGluZy1sb29zZVwiIDpjbGFzcz1cInsncm91dGVyLWxpbmstYWN0aXZlJzogaW5ib3ggPT0gJ3N0YXJyZWQnfVwiIEBjbGljay5wcmV2ZW50PVwiaW5ib3ggPSAnc3RhcnJlZCdcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3N0YXInXVwiIGZpeGVkLXdpZHRoIGNsYXNzPVwibXItMlwiPjwvZmEtaWNvbj4gU3RhcnJlZDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGlzdC0taXRlbSBsZWFkaW5nLWxvb3NlXCIgOmNsYXNzPVwieydyb3V0ZXItbGluay1hY3RpdmUnOiBpbmJveCA9PSAnY2xvc2VkJ31cIiBAY2xpY2sucHJldmVudD1cImluYm94ID0gJ2Nsb3NlZCdcIj48ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NoZWNrLWNpcmNsZSddXCIgZml4ZWQtd2lkdGggY2xhc3M9XCJtci0yXCI+PC9mYS1pY29uPiBDbG9zZWQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImxpc3QtLWl0ZW0gbGVhZGluZy1sb29zZVwiIDpjbGFzcz1cInsncm91dGVyLWxpbmstYWN0aXZlJzogaW5ib3ggPT0gJ2FyY2hpdmVkJ31cIiBAY2xpY2sucHJldmVudD1cImluYm94ID0gJ2FyY2hpdmVkJ1wiPjxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnaGlzdG9yeSddXCIgZml4ZWQtd2lkdGggY2xhc3M9XCJtci0yXCI+PC9mYS1pY29uPiBBcmNoaXZlZDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwibGlzdC0taXRlbSBsZWFkaW5nLWxvb3NlXCIgOmNsYXNzPVwieydyb3V0ZXItbGluay1hY3RpdmUnOiBpbmJveCA9PSAndHJhc2gnfVwiIEBjbGljay5wcmV2ZW50PVwiaW5ib3ggPSAndHJhc2gnXCI+PGZhLWljb24gOmljb249XCJbJ2ZhcycsICd0cmFzaC1hbHQnXVwiIGZpeGVkLXdpZHRoIGNsYXNzPVwibXItMlwiPjwvZmEtaWNvbj4gVHJhc2g8L2E+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkIGgtZnVsbCBmbGV4IGZsZXgtMVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItciBsZWFkaW5nLW5vbmVcIiBzdHlsZT1cIndpZHRoOiAzNTBweDtcIiBpZD1cInJlc3BvbnNlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgQGNsaWNrLnByZXZlbnQ9XCJzZWxlY3QocmVzcG9uc2UpXCIgY2xhc3M9XCJib3JkZXItci00IGJsb2NrIGhvdmVyOmJnLWdyYXktMTAwIHRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiIHYtZm9yPVwicmVzcG9uc2UgaW4gcmVzcG9uc2VzXCIgOmtleT1cInJlc3BvbnNlLmlkXCIgOmNsYXNzPVwieydib3JkZXItcHJpbWFyeS00MDAnOiBpc1NlbGVjdGVkKHJlc3BvbnNlKSwgJ2JvcmRlci1ncmF5LTIwMCc6ICEgaXNTZWxlY3RlZChyZXNwb25zZSl9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwbC0zIHByLTQgcHktNiBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXItMyBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXInLCAnc3RhciddXCIgZml4ZWQtd2lkdGggY2xhc3M9XCJtYi0yXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFyJywgJ2NoZWNrLWNpcmNsZSddXCIgZml4ZWQtd2lkdGg+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IHJlc3BvbnNlLmlkZW50aWZpYWJsZV9lbWFpbF9hZGRyZXNzIH19PC9iPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LWdyYXktNjAwIHRleHQtc21cIj57eyAkbW9tZW50KHJlc3BvbnNlLmNyZWF0ZWRfYXQpLmZvcm1hdCgnTCcpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmU6IHt7IHJlc3BvbnNlLmZvcm0ubmFtZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicC02IGJvcmRlci1ncmF5LTIwMCBib3JkZXItci00IGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCIgdi1pZj1cImxvYWRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdjaXJjbGUtbm90Y2gnXVwiIGNsYXNzPVwiZmEtc3BpbiBtci0zXCI+PC9mYS1pY29uPiBMb2FkaW5nIHJlc3BvbnNlcy4uLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZWFkaW5nLW5vbmUgZmxleC0xXCIgdi1pZj1cInJlc3BvbnNlLmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1yb3ctcmV2ZXJzZSBib3JkZXItYiBweS00IHB4LTYganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NoZWNrLWNpcmNsZSddXCIgZml4ZWQtd2lkdGggY2xhc3M9XCJtci0zXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdzdGFyJ11cIiBmaXhlZC13aWR0aCBjbGFzcz1cIm1yLTNcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2hpc3RvcnknXVwiIGZpeGVkLXdpZHRoIGNsYXNzPVwibXItM1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAndHJhc2gtYWx0J11cIiBmaXhlZC13aWR0aD48L2ZhLWljb24+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmF5LTUwMCBmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdzZXJ2ZXInXVwiIGZpeGVkLXdpZHRoPjwvZmEtaWNvbj4gPHNwYW4gY2xhc3M9XCJ0ZXh0LXhzIGZvbnQtbW9ubyBtbC0yXCI+e3sgcmVzcG9uc2UuaWRlbnRpZmlhYmxlX2lwX2FkZHJlc3MgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggYm9yZGVyLWIgcC02IHRyYWNraW5nLXdpZGUganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbCB0ZXh0LWxnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YiBjbGFzcz1cIm1iLTJcIj57eyByZXNwb25zZS5pZGVudGlmaWFibGVfZW1haWxfYWRkcmVzcyB9fTwvYj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJlOiB7eyByZXNwb25zZS5mb3JtLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LXNtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyAkbW9tZW50KHJlc3BvbnNlLmNyZWF0ZWRfYXQpLmZvcm1hdCgnTExMJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInAtNiBsZWFkaW5nLWxvb3NlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19ncm91cFwiIHYtZm9yPVwiZmllbGQgaW4gZmllbGRzXCIgOmtleT1cImZpZWxkLmhhbmRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2xhYmVsXCI+e3sgZmllbGQubmFtZSB9fTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IDppZD1cImZpZWxkLmhhbmRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IHJlc3BvbnNlW2ZpZWxkLmhhbmRsZV0gfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxlYWRpbmctbm9uZSBmbGV4LTEgcC02XCIgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlNlbGVjdCBhIHJlc3BvbnNlIHRvIGdldCBzdGFydGVkPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyB0aHJvdHRsZSB9IGZyb20gJ2xvZGFzaCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6ICdJbmJveCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICAgICAgICBsYXN0UGFnZTogbnVsbCxcbiAgICAgICAgICAgICAgICBmb3JtczogW10sXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VzOiBbXSxcbiAgICAgICAgICAgICAgICByZXNwb25zZToge30sXG4gICAgICAgICAgICAgICAgZmllbGRzOiBbXSxcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDoge1xuICAgICAgICAgICAgICAgICAgICBpZDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9pZDogbnVsbCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHdhdGNoOiB7XG4gICAgICAgICAgICBwYWdlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaEFuZEFwcGVuZFJlc3BvbnNlcygpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHNlbGVjdChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiByZXNwb25zZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgZm9ybV9pZDogcmVzcG9uc2UuZm9ybS5pZFxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hSZXNwb25zZSgpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlcyA9IFtdXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZSA9IHt9XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZHMgPSBbXVxuICAgICAgICAgICAgICAgIHRoaXMucGFnZSA9IDFcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RQYWdlID0gMFxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgICAgICAgICBmb3JtX2lkOiBudWxsLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNlbGVjdEZvcm0oZm9ybSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybSA9IGZvcm1cblxuICAgICAgICAgICAgICAgIHRoaXMuZmV0Y2hSZXNwb25zZXMoKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNTZWxlY3RlZChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlbGVjdGVkLmlkID09IHJlc3BvbnNlLmlkICYmIHRoaXMuc2VsZWN0ZWQuZm9ybV9pZCA9PSByZXNwb25zZS5mb3JtLmlkXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc0Zvcm1TZWxlY3RlZChmb3JtKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JtLmlkID09IGZvcm0uaWRcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGZldGNoQW5kQXBwZW5kUmVzcG9uc2VzKCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9mb3Jtcy8nICsgdGhpcy5mb3JtLnNsdWcgKyAnL3Jlc3BvbnNlcz9wYWdlPScgKyB0aGlzLnBhZ2UpLnRoZW4oKHJlc3BvbnNlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlcyA9IHRoaXMucmVzcG9uc2VzLmNvbmNhdChyZXNwb25zZXMuZGF0YS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmZXRjaFJlc3BvbnNlcygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2Zvcm1zLycgKyB0aGlzLmZvcm0uc2x1ZyArICcvcmVzcG9uc2VzP3BhZ2U9JyArIHRoaXMucGFnZSkudGhlbigocmVzcG9uc2VzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VzID0gdGhpcy5yZXNwb25zZXMuY29uY2F0KHJlc3BvbnNlcy5kYXRhLmRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFzdFBhZ2UgPSByZXNwb25zZXMuZGF0YS5tZXRhLmxhc3RfcGFnZVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJlc3BvbnNlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0KF8uaGVhZCh0aGlzLnJlc3BvbnNlcykpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZmV0Y2hSZXNwb25zZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlID0gXy5maW5kKHRoaXMucmVzcG9uc2VzLCAocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmlkID09IHRoaXMuc2VsZWN0ZWQuaWQgJiYgcmVzcG9uc2UuZm9ybS5pZCA9PSB0aGlzLnNlbGVjdGVkLmZvcm1faWRcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGhpcy5mZXRjaEZpZWxkcygpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmZXRjaEZpZWxkcygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkcyAgPSBbXVxuICAgICAgICAgICAgICAgIGxldCBzZWN0aW9ucyA9IHRoaXMucmVzcG9uc2UuZm9ybS5maWVsZHNldC5zZWN0aW9uc1xuXG4gICAgICAgICAgICAgICAgXy5lYWNoKHNlY3Rpb25zLCAoc2VjdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBfLmVhY2goc2VjdGlvbi5maWVsZHMsIChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZHMucHVzaChmaWVsZClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgbG9hZE1vcmVSZXN1bHRzOiB0aHJvdHRsZShmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3VsZExvYWRNb3JlUmVzdWx0cygpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdlKytcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAzMDApLFxuXG4gICAgICAgICAgICBzaG91bGRMb2FkTW9yZVJlc3VsdHMoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnZSA9PSB0aGlzLmxhc3RQYWdlIHx8IHRoaXMubG9hZGluZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzcG9uc2VzJylcblxuICAgICAgICAgICAgICAgIGxldCBoZWlnaHRPZlJlc3BvbnNlcyA9IGVsLmNsaWVudEhlaWdodFxuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZXNEaXN0YW5jZUZyb21XaW5kb3dUb3AgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3BcblxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5wYWdlWU9mZnNldCA+PVxuICAgICAgICAgICAgICAgICAgICAocmVzcG9uc2VzRGlzdGFuY2VGcm9tV2luZG93VG9wICsgaGVpZ2h0T2ZSZXNwb25zZXMpICogMC4zXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5sb2FkTW9yZVJlc3VsdHMpXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgYXhpb3MuYWxsKFtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvZm9ybXMnKVxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKGZvcm1zLCByZXNwb25zZXMpIHtcbiAgICAgICAgICAgICAgICBuZXh0KGZ1bmN0aW9uKHZtKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm1zID0gZm9ybXMuZGF0YS5kYXRhXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmZvcm1zLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0uc2VsZWN0Rm9ybShfLmhlYWQodm0uZm9ybXMpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImgtZnVsbCBtYXgtaC1mdWxsXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW19jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJpbmJveFwiIH0gfSwgW192bS5fdihcIkluYm94XCIpXSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiZm9ybXNcIiB9IH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJNYW5hZ2UgRm9ybXNcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGgtZnVsbFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaWRlLWNvbnRhaW5lclwiLFxuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tYm90dG9tXCI6IFwiMCAhaW1wb3J0YW50XCIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkIGgtZnVsbFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5mb3Jtcy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtLXNlcGFyYXRvciBwdC0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJJbmJveGVzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicHgtMiB0ZXh0LWdyYXktNjAwIGxlYWRpbmctbG9vc2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTm8gZm9ybXMgYXZhaWxhYmxlLlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtLXNlcGFyYXRvciBwdC0wXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZvcm1zXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmZvcm1zLCBmdW5jdGlvbihmb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogZm9ybS5oYW5kbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtLWl0ZW0gbGVhZGluZy1sb29zZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmstYWN0aXZlXCI6IF92bS5pc0Zvcm1TZWxlY3RlZChmb3JtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIiNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnNlbGVjdEZvcm0oZm9ybSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBbXCJmYXNcIiwgXCJpbmJveFwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZml4ZWQtd2lkdGhcIjogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhmb3JtLm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWJvdHRvbVwiOiBcIjAgIWltcG9ydGFudFwiIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZCBoLWZ1bGwgZmxleCBmbGV4LTFcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCB3LWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib3JkZXItciBsZWFkaW5nLW5vbmVcIixcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMzUwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJyZXNwb25zZXNcIiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnJlc3BvbnNlcywgZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiByZXNwb25zZS5pZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJib3JkZXItci00IGJsb2NrIGhvdmVyOmJnLWdyYXktMTAwIHRleHQtZ3JheS03MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLXByaW1hcnktNDAwXCI6IF92bS5pc1NlbGVjdGVkKHJlc3BvbnNlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJvcmRlci1ncmF5LTIwMFwiOiAhX3ZtLmlzU2VsZWN0ZWQocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2VsZWN0KHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwbC0zIHByLTQgcHktNiBib3JkZXItYiBib3JkZXItZ3JheS0yMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXItMyBmbGV4IGZsZXgtY29sXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogW1wiZmFyXCIsIFwic3RhclwiXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZpeGVkLXdpZHRoXCI6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBbXCJmYXJcIiwgXCJjaGVjay1jaXJjbGVcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaXhlZC13aWR0aFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgbWItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2UuaWRlbnRpZmlhYmxlX2VtYWlsX2FkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJibG9jayB0ZXh0LWdyYXktNjAwIHRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuJG1vbWVudChyZXNwb25zZS5jcmVhdGVkX2F0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIkxcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtZ3JheS04MDBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZTogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhyZXNwb25zZS5mb3JtLm5hbWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLTYgYm9yZGVyLWdyYXktMjAwIGJvcmRlci1yLTQgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLXNwaW4gbXItM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY2lyY2xlLW5vdGNoXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBMb2FkaW5nIHJlc3BvbnNlcy4uLlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLnJlc3BvbnNlLmlkXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVhZGluZy1ub25lIGZsZXgtMVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmxleCBmbGV4LXJvdy1yZXZlcnNlIGJvcmRlci1iIHB5LTQgcHgtNiBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmF5LTUwMCBmbGV4IGl0ZW1zLWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBbXCJmYXNcIiwgXCJzZXJ2ZXJcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmaXhlZC13aWR0aFwiOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzIGZvbnQtbW9ubyBtbC0yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucmVzcG9uc2UuaWRlbnRpZmlhYmxlX2lwX2FkZHJlc3MpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZsZXggYm9yZGVyLWIgcC02IHRyYWNraW5nLXdpZGUganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1jb2wgdGV4dC1sZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgeyBzdGF0aWNDbGFzczogXCJtYi0yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnJlc3BvbnNlLmlkZW50aWZpYWJsZV9lbWFpbF9hZGRyZXNzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlJlOiBcIiArIF92bS5fcyhfdm0ucmVzcG9uc2UuZm9ybS5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9tZW50KF92bS5yZXNwb25zZS5jcmVhdGVkX2F0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIkxMTFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicC02IGxlYWRpbmctbG9vc2VcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5maWVsZHMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBmaWVsZC5oYW5kbGUsIHN0YXRpY0NsYXNzOiBcImZvcm1fX2dyb3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IGZpZWxkLmhhbmRsZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGZpZWxkLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBhdHRyczogeyBpZDogZmllbGQuaGFuZGxlIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnJlc3BvbnNlW2ZpZWxkLmhhbmRsZV0pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWFkaW5nLW5vbmUgZmxleC0xIHAtNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIlNlbGVjdCBhIHJlc3BvbnNlIHRvIGdldCBzdGFydGVkXCIpXSlcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTVhZmE3MWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvc2FuZGJveC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNWFmYTcxYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNWFmYTcxYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNWFmYTcxYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE1YWZhNzFhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE1YWZhNzFhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvSW5ib3gvSW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xNWFmYTcxYSZcIiJdLCJzb3VyY2VSb290IjoiIn0=