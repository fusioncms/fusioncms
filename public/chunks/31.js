(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[31],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SEO/Insight.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SEO/Insight.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "./node_modules/moment-timezone/index.js");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      isValid: null,
      popular: [],
      browsers: []
    };
  },
  methods: {
    determineBrowserIcon: function determineBrowserIcon(browser) {
      var map = {
        'Android Webview': 'android',
        'Chrome': 'chrome',
        'Edge': 'edge',
        'Firefox': 'firefox',
        'Internet Explorer': 'internet-explorer',
        'Opera': 'opera',
        'Safari': 'safari'
      };
      return map[browser] || 'default';
    }
  },
  mounted: function mounted() {
    var _this = this;

    axios.get('/api/insights/check').then(function (response) {
      _this.isValid = response.data.data.status === 'OK';

      if (_this.isValid) {
        axios.all([axios.get('/api/insights/popular'), axios.get('/api/insights/browsers')]).then(axios.spread(function (popular, browsers) {
          this.popular = popular.data.data;
          this.browsers = _.map(browsers.data.data, function (row) {
            return {
              browser: row.browser,
              sessions: row.sessions,
              icon: this.determineBrowserIcon(row.browser)
            };
          }.bind(this));
        }.bind(_this)));
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SEO/Insight.vue?vue&type=template&id=f9c62f12&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SEO/Insight.vue?vue&type=template&id=f9c62f12& ***!
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
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("app-title", { attrs: { icon: "chart-bar" } }, [_vm._v("Insight")])
        ],
        1
      ),
      _vm._v(" "),
      _vm.isValid === null
        ? _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col md:w-full" },
              [
                _c(
                  "p-card",
                  { staticClass: "text-center" },
                  [
                    _c("fa-icon", {
                      staticClass: "fa-spin mr-3",
                      attrs: { icon: ["fas", "spinner-third"] }
                    }),
                    _vm._v(" Loading...\n            ")
                  ],
                  1
                )
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.isValid === false
        ? _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col md:w-full" },
              [
                _c(
                  "p-card",
                  { staticClass: "text-center" },
                  [
                    _c(
                      "p",
                      [
                        _vm._v(
                          "Configure your Google Analytic settings to gain insight about your website "
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
                        attrs: { to: "/settings/google_analytics#insights" }
                      },
                      [
                        _c("fa-icon", {
                          staticClass: "mr-2 text-sm",
                          attrs: { icon: ["fas", "cog"] }
                        }),
                        _vm._v(" Go to settings")
                      ],
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.isValid
        ? _c("div", [
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
              _c("div", { staticClass: "col md:w-1/2" }, [
                _c("div", { staticClass: "card" }, [
                  _c("table", [
                    _vm._m(0),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.popular, function(page) {
                        return _c("tr", { key: page.url }, [
                          _c("td", [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "text-grey-darker hover:text-grey-darkest mr-4",
                                attrs: { href: page.url, target: "_blank" }
                              },
                              [
                                _c("fa-icon", {
                                  attrs: {
                                    icon: ["fas", "arrow-alt-circle-right"]
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(
                              "\n\n                                    " +
                                _vm._s(page.url) +
                                "\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(_vm._s(page.pageViews))
                          ])
                        ])
                      }),
                      0
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col md:w-1/2" }, [
                _c("div", { staticClass: "card" }, [
                  _c("table", [
                    _vm._m(1),
                    _vm._v(" "),
                    _c(
                      "tbody",
                      _vm._l(_vm.browsers, function(browser) {
                        return _c("tr", { key: browser.browser }, [
                          _c("td", [
                            _c(
                              "span",
                              {
                                staticClass:
                                  "text-grey-darker hover:text-grey-darkest mr-4"
                              },
                              [
                                browser.icon == "default"
                                  ? _c("fa-icon", {
                                      staticClass: "fa-fw",
                                      attrs: { icon: ["far", "globe"] }
                                    })
                                  : _c("fa-icon", {
                                      staticClass: "fa-fw",
                                      attrs: { icon: ["fab", browser.icon] }
                                    })
                              ],
                              1
                            ),
                            _vm._v(
                              "\n\n                                    " +
                                _vm._s(browser.browser) +
                                "\n                                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("td", { staticClass: "text-right" }, [
                            _vm._v(_vm._s(browser.sessions))
                          ])
                        ])
                      }),
                      0
                    )
                  ])
                ])
              ])
            ])
          ])
        : _vm._e()
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
        _c("th", [_c("h2", [_vm._v("Popular Pages")])]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Views")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_c("h2", [_vm._v("Browsers")])]),
        _vm._v(" "),
        _c("th", { staticClass: "text-right" }, [_vm._v("Sessions")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/SEO/Insight.vue":
/*!********************************************!*\
  !*** ./resources/js/views/SEO/Insight.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Insight_vue_vue_type_template_id_f9c62f12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Insight.vue?vue&type=template&id=f9c62f12& */ "./resources/js/views/SEO/Insight.vue?vue&type=template&id=f9c62f12&");
/* harmony import */ var _Insight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Insight.vue?vue&type=script&lang=js& */ "./resources/js/views/SEO/Insight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Insight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Insight_vue_vue_type_template_id_f9c62f12___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Insight_vue_vue_type_template_id_f9c62f12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SEO/Insight.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/SEO/Insight.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/SEO/Insight.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Insight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Insight.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SEO/Insight.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Insight_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SEO/Insight.vue?vue&type=template&id=f9c62f12&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/SEO/Insight.vue?vue&type=template&id=f9c62f12& ***!
  \***************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Insight_vue_vue_type_template_id_f9c62f12___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Insight.vue?vue&type=template&id=f9c62f12& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SEO/Insight.vue?vue&type=template&id=f9c62f12&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Insight_vue_vue_type_template_id_f9c62f12___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Insight_vue_vue_type_template_id_f9c62f12___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);