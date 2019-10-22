(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      activities: [],
      feed: []
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
    console.warn('Fusion news feed will be implemented at launch. You may safely ignore the following 404 error.');
    axios.all([axios.get('/api/matrices'), axios.get('/api/activity'), axios.get('//getfusioncms.com/feed.json')["catch"](function () {
      return {
        data: {
          items: []
        }
      };
    })]).then(axios.spread(function (matrices, activity, feed) {
      next(function (vm) {
        vm.matrices = matrices.data.data;
        vm.activities = activity.data.data;
        vm.feed = feed.data.items;
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
                    "col mb-6 w-full md:w-1/2 xl:w-1/3 xxl:w-1/4 xxxl:w-1/5"
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
                            staticClass: "fa-fw text-primary-500",
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
          { staticClass: "col mb-6 md:w-full" },
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
                                "text-gray-900 mr-4 flex items-center text-sm w-3"
                            },
                            [
                              activity.properties.icon
                                ? _c("fa-icon", {
                                    staticClass: "fa-fw",
                                    attrs: {
                                      icon: ["fas", activity.properties.icon]
                                    }
                                  })
                                : _c("fa-icon", {
                                    staticClass: "fa-xs fa-fw",
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
                                      "text-gray-800 hover:text-gray-900",
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
        _c("div", { staticClass: "col w-full lg:w-1/3" }, [
          _c("div", { staticClass: "card" }, [
            _vm._m(1),
            _vm._v(" "),
            _vm.feed.length
              ? _c("table", [
                  _vm._m(2),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.feed, function(entry) {
                      return _c("tr", { key: entry.id }, [
                        _c("td", [_vm._v(_vm._s(entry.title))]),
                        _vm._v(" "),
                        _c("td", [
                          _c("a", { attrs: { href: entry.url } }, [
                            _vm._v("Read More")
                          ])
                        ])
                      ])
                    }),
                    0
                  )
                ])
              : _c("div", { staticClass: "card__body" }, [
                  _c(
                    "div",
                    {
                      staticClass:
                        "text-center mb-4 bg-gray-100 text-gray-800 rounded p-3"
                    },
                    [
                      _vm._v(
                        "\n                        The Fusion news feed will be implemented at launch.\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm._m(3),
                  _vm._v(" "),
                  _vm._m(4),
                  _vm._v(" "),
                  _vm._m(5),
                  _vm._v(" "),
                  _vm._m(6),
                  _vm._v(" "),
                  _vm._m(7)
                ])
          ])
        ])
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
    return _c("div", { staticClass: "card__body" }, [
      _c("h2", [_vm._v("Fusion News")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Title")]),
        _vm._v(" "),
        _c("th", [_vm._v("Action")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex mb-6" }, [
      _c(
        "div",
        {
          staticClass:
            "bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col"
        },
        [
          _c(
            "span",
            {
              staticClass: "block text-center font-bold text-3xl leading-none"
            },
            [_vm._v("28")]
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "block text-center text-sm text-gray-600" },
            [_vm._v("Dec 2019")]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", [
        _c(
          "span",
          { staticClass: "block font-bold text-gray-700 tracking-wide" },
          [_vm._v("Releases")]
        ),
        _vm._v(" "),
        _c("p", [_vm._v("FusionCMS 6.0.0 is now open to the public.")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex mb-6" }, [
      _c(
        "div",
        {
          staticClass:
            "bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col"
        },
        [
          _c(
            "span",
            {
              staticClass: "block text-center font-bold text-3xl leading-none"
            },
            [_vm._v("28")]
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "block text-center text-sm text-gray-600" },
            [_vm._v("Nov 2019")]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", [
        _c(
          "span",
          { staticClass: "block font-bold text-gray-700 tracking-wide" },
          [_vm._v("Releases")]
        ),
        _vm._v(" "),
        _c("p", [_vm._v("FusionCMS 5.13.4 is now available.")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex mb-6" }, [
      _c(
        "div",
        {
          staticClass:
            "bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col"
        },
        [
          _c(
            "span",
            {
              staticClass: "block text-center font-bold text-3xl leading-none"
            },
            [_vm._v("28")]
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "block text-center text-sm text-gray-600" },
            [_vm._v("Oct 2019")]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", [
        _c(
          "span",
          { staticClass: "block font-bold text-gray-700 tracking-wide" },
          [_vm._v("Releases")]
        ),
        _vm._v(" "),
        _c("p", [_vm._v("FusionCMS 5.13.3 is now available.")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex mb-6" }, [
      _c(
        "div",
        {
          staticClass:
            "bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col"
        },
        [
          _c(
            "span",
            {
              staticClass: "block text-center font-bold text-3xl leading-none"
            },
            [_vm._v("28")]
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "block text-center text-sm text-gray-600" },
            [_vm._v("Sep 2019")]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", [
        _c(
          "span",
          { staticClass: "block font-bold text-gray-700 tracking-wide" },
          [_vm._v("Releases")]
        ),
        _vm._v(" "),
        _c("p", [_vm._v("FusionCMS 5.13.2 is now available.")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "flex" }, [
      _c(
        "div",
        {
          staticClass:
            "bg-gray-100 text-gray-700 p-3 rounded border border-gray-200 mr-6 flex-shrink-0 justify-center flex flex-col"
        },
        [
          _c(
            "span",
            {
              staticClass: "block text-center font-bold text-3xl leading-none"
            },
            [_vm._v("28")]
          ),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "block text-center text-sm text-gray-600" },
            [_vm._v("Aug 2019")]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", [
        _c(
          "span",
          { staticClass: "block font-bold text-gray-700 tracking-wide" },
          [_vm._v("Releases")]
        ),
        _vm._v(" "),
        _c("p", [_vm._v("FusionCMS 5.13.1 is now available.")])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0Rhc2hib2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0Rhc2hib2FyZC52dWU/NDlkMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRGFzaGJvYXJkLnZ1ZT8wOTBlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9EYXNoYm9hcmQudnVlPzEyNWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdLQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsb0JBRkE7QUFHQTtBQUhBO0FBS0EsR0FQQTtBQVNBO0FBQ0EsY0FEQSx3QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQUNBO0FBUEEsR0FUQTtBQW1CQSxrQkFuQkEsNEJBbUJBLEVBbkJBLEVBbUJBLElBbkJBLEVBbUJBLElBbkJBLEVBbUJBO0FBQ0E7QUFFQSxlQUNBLDBCQURBLEVBRUEsMEJBRkEsRUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQSxLQU5BLENBSEEsR0FVQSxJQVZBLENBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQSxLQU5BLENBVkE7QUFpQkE7QUF2Q0EsRzs7Ozs7Ozs7Ozs7O0FDeEtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsMkJBQTJCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5REFBeUQ7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsNkRBQTZEO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQkFBc0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlEQUF5RDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyw2REFBNkQ7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hmQTtBQUFBO0FBQUE7QUFBQTtBQUF3RjtBQUMzQjtBQUNMOzs7QUFHeEQ7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLG9GQUFNO0FBQ1IsRUFBRSw2RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBeUwsQ0FBZ0IscVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBN007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy81OC5jaHVuay41MjcyMjYyY2QwYzRhYTE0OTRhNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxhcHAtdGl0bGUgaWNvbj1cImdyaXAtaG9yaXpvbnRhbFwiPkRhc2hib2FyZDwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGZsZXgtMSBmbGV4LXdyYXBcIiB2LWlmPVwicXVpY2tsaW5rc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBtYi02IHctZnVsbCBtZDp3LTEvMiB4bDp3LTEvMyB4eGw6dy0xLzQgeHh4bDp3LTEvNVwiIHYtZm9yPVwibWF0cml4IGluIHF1aWNrbGlua3NcIiA6a2V5PVwibWF0cml4LmhhbmRsZVwiPlxuICAgICAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJtYXRyaXguYWRtaW5fcGF0aFwiIGNsYXNzPVwibm8tdW5kZXJsaW5lIHRleHQtYmxhY2sgaG92ZXI6dGV4dC1ibGFjayBiZy13aGl0ZSByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbWQgcC0zIGZsZXggaC1mdWxsIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhLWxheWVycyBmYS1mdyBmYS0zeCBtci0yIGZsZXgtbm8tc2hyaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NpcmNsZSddXCIgY2xhc3M9XCJmYS1mdyB0ZXh0LXByaW1hcnktNTAwXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcicsIChtYXRyaXguaWNvbiB8fCAncGVuY2lsJyldXCIgY2xhc3M9XCJmYS1mdyBmYS1pbnZlcnNlXCIgdHJhbnNmb3JtPVwic2hyaW5rLThcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmb250LXNlbWlib2xkIHRleHQtbGdcIj57eyBtYXRyaXgubmFtZSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1zbVwiPnt7IG1hdHJpeC5kZXNjcmlwdGlvbiB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIG1iLTYgbWQ6dy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgPGFuYWx5dGljcy1vdmVydmlldz48L2FuYWx5dGljcy1vdmVydmlldz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbCBsZzp3LTIvM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+UmVjZW50IEFjdGl2aXR5PC9oMj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cIiEgYWN0aXZpdGllcy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBMb29rcyBsaWtlIG5vdGhpbmcgaGFzIHRha2VuIHBsYWNlIG9uIHlvdXIgd2Vic2l0ZSB5ZXQuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSB2LWlmPVwiYWN0aXZpdGllcy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5Vc2VyPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkFjdGlvbjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD48L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+RGF0ZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UaW1lPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cImFjdGl2aXR5IGluIGFjdGl2aXRpZXNcIiA6a2V5PVwiYWN0aXZpdHkuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICd1c2Vycy5lZGl0JywgcGFyYW1zOiB7dXNlcjogYWN0aXZpdHkuY2F1c2VyLmlkfSB9XCI+e3sgYWN0aXZpdHkuY2F1c2VyLm5hbWUgfX08L3JvdXRlci1saW5rPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1ncmF5LTkwMCBtci00IGZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdy0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gdi1pZj1cImFjdGl2aXR5LnByb3BlcnRpZXMuaWNvblwiIDppY29uPVwiWydmYXMnLCBhY3Rpdml0eS5wcm9wZXJ0aWVzLmljb25dXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEtaWNvbiB2LWVsc2UgY2xhc3M9XCJmYS14cyBmYS1md1wiIDppY29uPVwiWydmYXMnLCAnY2lyY2xlJ11cIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgYWN0aXZpdHkuZGVzY3JpcHRpb24gfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cImFjdGl2aXR5LnByb3BlcnRpZXMubGlua1wiIHYtaWY9XCJhY3Rpdml0eS5wcm9wZXJ0aWVzLmxpbmtcIiBjbGFzcz1cInRleHQtZ3JheS04MDAgaG92ZXI6dGV4dC1ncmF5LTkwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnYXJyb3ctYWx0LWNpcmNsZS1yaWdodCddXCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IG1vbWVudChhY3Rpdml0eS5jcmVhdGVkX2F0KS5mb3JtYXQoJ0wnKSB9fTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD57eyBtb21lbnQoYWN0aXZpdHkuY3JlYXRlZF9hdCkuZm9ybWF0KCdMVCcpIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sIHctZnVsbCBsZzp3LTEvM1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDI+RnVzaW9uIE5ld3M8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgdi1pZj1cImZlZWQubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGl0bGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+QWN0aW9uPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ciB2LWZvcj1cImVudHJ5IGluIGZlZWRcIiA6a2V5PVwiZW50cnkuaWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IGVudHJ5LnRpdGxlIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPjxhIDpocmVmPVwiZW50cnkudXJsXCI+UmVhZCBNb3JlPC9hPjwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgbWItNCBiZy1ncmF5LTEwMCB0ZXh0LWdyYXktODAwIHJvdW5kZWQgcC0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIEZ1c2lvbiBuZXdzIGZlZWQgd2lsbCBiZSBpbXBsZW1lbnRlZCBhdCBsYXVuY2guXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNzAwIHAtMyByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0yMDAgbXItNiBmbGV4LXNocmluay0wIGp1c3RpZnktY2VudGVyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC0zeGwgbGVhZGluZy1ub25lXCI+Mjg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+RGVjIDIwMTk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIHRyYWNraW5nLXdpZGVcIj5SZWxlYXNlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RnVzaW9uQ01TIDYuMC4wIGlzIG5vdyBvcGVuIHRvIHRoZSBwdWJsaWMuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctZ3JheS0xMDAgdGV4dC1ncmF5LTcwMCBwLTMgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIG1yLTYgZmxleC1zaHJpbmstMCBqdXN0aWZ5LWNlbnRlciBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtM3hsIGxlYWRpbmctbm9uZVwiPjI4PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTYwMFwiPk5vdiAyMDE5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCB0cmFja2luZy13aWRlXCI+UmVsZWFzZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZ1c2lvbkNNUyA1LjEzLjQgaXMgbm93IGF2YWlsYWJsZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNzAwIHAtMyByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0yMDAgbXItNiBmbGV4LXNocmluay0wIGp1c3RpZnktY2VudGVyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC0zeGwgbGVhZGluZy1ub25lXCI+Mjg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+T2N0IDIwMTk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIHRyYWNraW5nLXdpZGVcIj5SZWxlYXNlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RnVzaW9uQ01TIDUuMTMuMyBpcyBub3cgYXZhaWxhYmxlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLWdyYXktMTAwIHRleHQtZ3JheS03MDAgcC0zIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBtci02IGZsZXgtc2hyaW5rLTAganVzdGlmeS1jZW50ZXIgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTN4bCBsZWFkaW5nLW5vbmVcIj4yODwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5TZXAgMjAxOTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgZm9udC1ib2xkIHRleHQtZ3JheS03MDAgdHJhY2tpbmctd2lkZVwiPlJlbGVhc2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GdXNpb25DTVMgNS4xMy4yIGlzIG5vdyBhdmFpbGFibGUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLWdyYXktMTAwIHRleHQtZ3JheS03MDAgcC0zIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBtci02IGZsZXgtc2hyaW5rLTAganVzdGlmeS1jZW50ZXIgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTN4bCBsZWFkaW5nLW5vbmVcIj4yODwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5BdWcgMjAxOTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgZm9udC1ib2xkIHRleHQtZ3JheS03MDAgdHJhY2tpbmctd2lkZVwiPlJlbGVhc2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GdXNpb25DTVMgNS4xMy4xIGlzIG5vdyBhdmFpbGFibGUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG1hdHJpY2VzOiBbXSxcbiAgICAgICAgICAgICAgICBhY3Rpdml0aWVzOiBbXSxcbiAgICAgICAgICAgICAgICBmZWVkOiBbXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgcXVpY2tsaW5rcygpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRyaWNlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXy5maWx0ZXIodGhpcy5tYXRyaWNlcywgZnVuY3Rpb24obWF0cml4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbWF0cml4LnF1aWNrbGluayA9PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0Z1c2lvbiBuZXdzIGZlZWQgd2lsbCBiZSBpbXBsZW1lbnRlZCBhdCBsYXVuY2guIFlvdSBtYXkgc2FmZWx5IGlnbm9yZSB0aGUgZm9sbG93aW5nIDQwNCBlcnJvci4nKVxuXG4gICAgICAgICAgICBheGlvcy5hbGwoW1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9tYXRyaWNlcycpLFxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9hY3Rpdml0eScpLFxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnLy9nZXRmdXNpb25jbXMuY29tL2ZlZWQuanNvbicpLmNhdGNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKG1hdHJpY2VzLCBhY3Rpdml0eSwgZmVlZCkge1xuICAgICAgICAgICAgICAgIG5leHQoZnVuY3Rpb24odm0pIHtcbiAgICAgICAgICAgICAgICAgICAgdm0ubWF0cmljZXMgPSBtYXRyaWNlcy5kYXRhLmRhdGFcbiAgICAgICAgICAgICAgICAgICAgdm0uYWN0aXZpdGllcyA9IGFjdGl2aXR5LmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICB2bS5mZWVkID0gZmVlZC5kYXRhLml0ZW1zXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pKVxuICAgICAgICB9LFxuICAgIH1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImdyaXAtaG9yaXpvbnRhbFwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiRGFzaGJvYXJkXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucXVpY2tsaW5rc1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicm93IGZsZXgtMSBmbGV4LXdyYXBcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5xdWlja2xpbmtzLCBmdW5jdGlvbihtYXRyaXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBtYXRyaXguaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwiY29sIG1iLTYgdy1mdWxsIG1kOnctMS8yIHhsOnctMS8zIHh4bDp3LTEvNCB4eHhsOnctMS81XCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm8tdW5kZXJsaW5lIHRleHQtYmxhY2sgaG92ZXI6dGV4dC1ibGFjayBiZy13aGl0ZSByb3VuZGVkIHNoYWRvdyBob3ZlcjpzaGFkb3ctbWQgcC0zIGZsZXggaC1mdWxsIGl0ZW1zLWNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiBtYXRyaXguYWRtaW5fcGF0aCB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhLWxheWVycyBmYS1mdyBmYS0zeCBtci0yIGZsZXgtbm8tc2hyaW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtZncgdGV4dC1wcmltYXJ5LTUwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImNpcmNsZVwiXSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLWZ3IGZhLWludmVyc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogW1wiZmFyXCIsIG1hdHJpeC5pY29uIHx8IFwicGVuY2lsXCJdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcInNocmluay04XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggZmxleC1jb2xcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJmb250LXNlbWlib2xkIHRleHQtbGdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MobWF0cml4Lm5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhtYXRyaXguZGVzY3JpcHRpb24pKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBtYi02IG1kOnctZnVsbFwiIH0sXG4gICAgICAgICAgW19jKFwiYW5hbHl0aWNzLW92ZXJ2aWV3XCIpXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LWZ1bGwgbGc6dy0yLzNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImgyXCIsIFtfdm0uX3YoXCJSZWNlbnQgQWN0aXZpdHlcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5hY3Rpdml0aWVzLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgTG9va3MgbGlrZSBub3RoaW5nIGhhcyB0YWtlbiBwbGFjZSBvbiB5b3VyIHdlYnNpdGUgeWV0LlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uYWN0aXZpdGllcy5sZW5ndGhcbiAgICAgICAgICAgICAgPyBfYyhcInRhYmxlXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmFjdGl2aXRpZXMsIGZ1bmN0aW9uKGFjdGl2aXR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGFjdGl2aXR5LmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJ1c2Vycy5lZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgdXNlcjogYWN0aXZpdHkuY2F1c2VyLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhhY3Rpdml0eS5jYXVzZXIubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1ncmF5LTkwMCBtci00IGZsZXggaXRlbXMtY2VudGVyIHRleHQtc20gdy0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5LnByb3BlcnRpZXMuaWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogW1wiZmFzXCIsIGFjdGl2aXR5LnByb3BlcnRpZXMuaWNvbl1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS14cyBmYS1md1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY2lyY2xlXCJdIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhhY3Rpdml0eS5kZXNjcmlwdGlvbikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2aXR5LnByb3BlcnRpZXMubGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogYWN0aXZpdHkucHJvcGVydGllcy5saW5rIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogW1wiZmFzXCIsIFwiYXJyb3ctYWx0LWNpcmNsZS1yaWdodFwiXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLm1vbWVudChhY3Rpdml0eS5jcmVhdGVkX2F0KS5mb3JtYXQoXCJMXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubW9tZW50KGFjdGl2aXR5LmNyZWF0ZWRfYXQpLmZvcm1hdChcIkxUXCIpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCB3LWZ1bGwgbGc6dy0xLzNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5mZWVkLmxlbmd0aFxuICAgICAgICAgICAgICA/IF9jKFwidGFibGVcIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZmVlZCwgZnVuY3Rpb24oZW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogZW50cnkuaWQgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhlbnRyeS50aXRsZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IGVudHJ5LnVybCB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJSZWFkIE1vcmVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtY2VudGVyIG1iLTQgYmctZ3JheS0xMDAgdGV4dC1ncmF5LTgwMCByb3VuZGVkIHAtM1wiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBGdXNpb24gbmV3cyBmZWVkIHdpbGwgYmUgaW1wbGVtZW50ZWQgYXQgbGF1bmNoLlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uX20oNSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDYpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fbSg3KVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlVzZXJcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQWN0aW9uXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkRhdGVcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiVGltZVwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sIFtcbiAgICAgIF9jKFwiaDJcIiwgW192bS5fdihcIkZ1c2lvbiBOZXdzXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJUaXRsZVwiKV0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJBY3Rpb25cIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggbWItNlwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImJnLWdyYXktMTAwIHRleHQtZ3JheS03MDAgcC0zIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBtci02IGZsZXgtc2hyaW5rLTAganVzdGlmeS1jZW50ZXIgZmxleCBmbGV4LWNvbFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC0zeGwgbGVhZGluZy1ub25lXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiMjhcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTYwMFwiIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiRGVjIDIwMTlcIildXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJibG9jayBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCB0cmFja2luZy13aWRlXCIgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiUmVsZWFzZXNcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiRnVzaW9uQ01TIDYuMC4wIGlzIG5vdyBvcGVuIHRvIHRoZSBwdWJsaWMuXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IG1iLTZcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNzAwIHAtMyByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0yMDAgbXItNiBmbGV4LXNocmluay0wIGp1c3RpZnktY2VudGVyIGZsZXggZmxleC1jb2xcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmxvY2sgdGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtM3hsIGxlYWRpbmctbm9uZVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIjI4XCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIiB9LFxuICAgICAgICAgICAgW192bS5fdihcIk5vdiAyMDE5XCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2sgZm9udC1ib2xkIHRleHQtZ3JheS03MDAgdHJhY2tpbmctd2lkZVwiIH0sXG4gICAgICAgICAgW192bS5fdihcIlJlbGVhc2VzXCIpXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIkZ1c2lvbkNNUyA1LjEzLjQgaXMgbm93IGF2YWlsYWJsZS5cIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggbWItNlwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImJnLWdyYXktMTAwIHRleHQtZ3JheS03MDAgcC0zIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBtci02IGZsZXgtc2hyaW5rLTAganVzdGlmeS1jZW50ZXIgZmxleCBmbGV4LWNvbFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJibG9jayB0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC0zeGwgbGVhZGluZy1ub25lXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiMjhcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTYwMFwiIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiT2N0IDIwMTlcIildXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJibG9jayBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCB0cmFja2luZy13aWRlXCIgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiUmVsZWFzZXNcIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwiRnVzaW9uQ01TIDUuMTMuMyBpcyBub3cgYXZhaWxhYmxlLlwiKV0pXG4gICAgICBdKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBtYi02XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiYmctZ3JheS0xMDAgdGV4dC1ncmF5LTcwMCBwLTMgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIG1yLTYgZmxleC1zaHJpbmstMCBqdXN0aWZ5LWNlbnRlciBmbGV4IGZsZXgtY29sXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTN4bCBsZWFkaW5nLW5vbmVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCIyOFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2sgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCIgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJTZXAgMjAxOVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJsb2NrIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIHRyYWNraW5nLXdpZGVcIiB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJSZWxlYXNlc1wiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJGdXNpb25DTVMgNS4xMy4yIGlzIG5vdyBhdmFpbGFibGUuXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4XCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiYmctZ3JheS0xMDAgdGV4dC1ncmF5LTcwMCBwLTMgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIG1yLTYgZmxleC1zaHJpbmstMCBqdXN0aWZ5LWNlbnRlciBmbGV4IGZsZXgtY29sXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJsb2NrIHRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTN4bCBsZWFkaW5nLW5vbmVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCIyOFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2sgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCIgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJBdWcgMjAxOVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJsb2NrIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIHRyYWNraW5nLXdpZGVcIiB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJSZWxlYXNlc1wiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJGdXNpb25DTVMgNS4xMy4xIGlzIG5vdyBhdmFpbGFibGUuXCIpXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWY3OWRhZjYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWY3OWRhZjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWY3OWRhZjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWY3OWRhZjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWY3OWRhZjYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWY3OWRhZjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9EYXNoYm9hcmQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xZjc5ZGFmNiZcIiJdLCJzb3VyY2VSb290IjoiIn0=