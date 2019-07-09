(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      matrices: [],
      activities: []
    };
  },
  computed: {
    quicklinks: function quicklinks() {
      if (this.matrices) {
        return _.filter(this.matrices, function (matrix) {
          return matrix.quicklink == true;
        });
      }
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/matrices'), axios.get('/api/activity')]).then(axios.spread(function (matrices, activity, insight) {
      next(function (vm) {
        vm.matrices = matrices.data.data;
        vm.activities = activity.data.data;
      });
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*******************************************************************************************************************************************************************************************************/
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
          _c("app-title", { attrs: { icon: "grip-horizontal" } }, [
            _vm._v("Dashboard")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm.quicklinks
        ? _c(
            "div",
            { staticClass: "row flex-1 flex-wrap" },
            _vm._l(_vm.quicklinks, function(matrix) {
              return _c(
                "div",
                {
                  key: matrix.handle,
                  staticClass:
                    "col w-full md:w-1/2 xl:w-1/3 xxl:w-1/4 xxxl:w-1/5"
                },
                [
                  _c(
                    "router-link",
                    {
                      staticClass:
                        "no-underline text-black hover:text-black bg-white rounded shadow hover:shadow-md p-3 flex h-full items-center",
                      attrs: { to: matrix.admin_path }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass:
                            "fa-layers fa-fw fa-3x mr-2 flex-no-shrink"
                        },
                        [
                          _c("fa-icon", {
                            staticClass: "fa-fw text-primary",
                            attrs: { icon: ["fas", "circle"] }
                          }),
                          _vm._v(" "),
                          _c("fa-icon", {
                            staticClass: "fa-fw fa-inverse",
                            attrs: {
                              icon: ["far", matrix.icon || "pencil"],
                              transform: "shrink-8"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex flex-col" }, [
                        _c("span", { staticClass: "font-semibold text-lg" }, [
                          _vm._v(_vm._s(matrix.name))
                        ]),
                        _vm._v(" "),
                        _c("span", { staticClass: "text-sm" }, [
                          _vm._v(_vm._s(matrix.description))
                        ])
                      ])
                    ]
                  )
                ],
                1
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col md:w-full" },
          [_c("analytics-overview")],
          1
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col w-full lg:w-2/3" }, [
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card__body" }, [
              _c("h2", [_vm._v("Recent Activity")]),
              _vm._v(" "),
              !_vm.activities.length
                ? _c("p", [
                    _vm._v(
                      "\n                        Looks like nothing has taken place on your website yet.\n                    "
                    )
                  ])
                : _vm._e()
            ]),
            _vm._v(" "),
            _vm.activities.length
              ? _c("table", [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.activities, function(activity) {
                      return _c("tr", { key: activity.id }, [
                        _c(
                          "td",
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    name: "users.edit",
                                    params: { user: activity.causer.id }
                                  }
                                }
                              },
                              [_vm._v(_vm._s(activity.causer.name))]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", { staticClass: "flex items-center" }, [
                          _c(
                            "div",
                            {
                              staticClass:
                                "text-grey-darkest mr-4 flex items-center text-sm w-3"
                            },
                            [
                              activity.properties.icon
                                ? _c("fa-icon", {
                                    attrs: {
                                      icon: ["fas", activity.properties.icon]
                                    }
                                  })
                                : _c("fa-icon", {
                                    staticClass: "fa-xs",
                                    attrs: { icon: ["fas", "circle"] }
                                  })
                            ],
                            1
                          ),
                          _vm._v(
                            "\n\n                                " +
                              _vm._s(activity.description) +
                              "\n                            "
                          )
                        ]),
                        _vm._v(" "),
                        _c(
                          "td",
                          [
                            activity.properties.link
                              ? _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "text-grey-darker hover:text-grey-darkest",
                                    attrs: { to: activity.properties.link }
                                  },
                                  [
                                    _c("fa-icon", {
                                      attrs: {
                                        icon: ["fas", "arrow-alt-circle-right"]
                                      }
                                    })
                                  ],
                                  1
                                )
                              : _vm._e()
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.moment(activity.created_at).format("L"))
                          )
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(
                            _vm._s(_vm.moment(activity.created_at).format("LT"))
                          )
                        ])
                      ])
                    }),
                    0
                  )
                ])
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _vm._m(1)
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("User")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")]),
        _vm._v(" "),
        _c("th"),
        _vm._v(" "),
        _c("th", [_vm._v("Date")]),
        _vm._v(" "),
        _c("th", [_vm._v("Time")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col w-full lg:w-1/3" }, [
      _c("div", { staticClass: "card" }, [
        _c("div", { staticClass: "card__body" }, [
          _c("h2", [_vm._v("Fusion News")])
        ]),
        _vm._v(" "),
        _c("table", [
          _c("thead", [
            _c("tr", [
              _c("th", [_vm._v("Title")]),
              _vm._v(" "),
              _c("th", [_vm._v("Action")])
            ])
          ]),
          _vm._v(" "),
          _c("tbody", [
            _c("tr", [
              _c("td", [_vm._v("FusionCMS 5.4")]),
              _vm._v(" "),
              _c("td", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Read More")])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("FusionCMS 5.3.17")]),
              _vm._v(" "),
              _c("td", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Read More")])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("Updates to FusionCMS' Performance")]),
              _vm._v(" "),
              _c("td", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Read More")])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("FusionCMS 5.3.16")]),
              _vm._v(" "),
              _c("td", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Read More")])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("FusionCMS 5.3.15")]),
              _vm._v(" "),
              _c("td", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Read More")])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("A New Approach to Scaffolding Content")]),
              _vm._v(" "),
              _c("td", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Read More")])
              ])
            ]),
            _vm._v(" "),
            _c("tr", [
              _c("td", [_vm._v("Introducing GDPR Compliance")]),
              _vm._v(" "),
              _c("td", [
                _c("a", { attrs: { href: "#" } }, [_vm._v("Read More")])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);