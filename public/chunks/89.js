(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[89],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/RecentJobs.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Importer/RecentJobs.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      jobs: [],
      ready: false,
      page: 1,
      perPage: 25,
      totalPages: 1
    };
  },
  watch: {
    '$route': function $route(value) {
      console.log('route', value);
    }
  },
  filters: {
    basename: function basename(value) {
      return _.split(value, '\\')[-1];
    },
    formatted: function formatted(value) {
      return moment(value * 1000).add(new Date().getTimezoneOffset() / 60).format('YYYY-MM-DD HH:mm:ss');
    }
  },
  methods: _defineProperty({
    fetchJobs: function fetchJobs() {
      var _this = this;

      var starting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
      this.ready = false;
      axios.get("/horizon/api/jobs/recent?starting_at=".concat(starting, "&limit=").concat(this.perPage)).then(function (response) {
        _this.jobs = response.data.jobs;
        _this.totalPages = Math.ceil(response.data.total / _this.perPage);
        _this.ready = true;
      });
    },
    jobBaseName: function jobBaseName(name) {
      if (!name.includes('\\')) return name;
      var parts = name.split('\\');
      return parts[parts.length - 1];
    },
    previous: function previous() {
      this.fetchJobs((this.page - 2) * this.perPage);
      this.page -= 1;
    }
  }, "previous", function previous() {
    this.fetchJobs(this.page * this.perPage);
    this.page += 1;
  }),
  created: function created() {
    this.fetchJobs();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/RecentJobs.vue?vue&type=template&id=c0c19782&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Importer/RecentJobs.vue?vue&type=template&id=c0c19782& ***!
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
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("app-title", { attrs: { icon: "ship" } }, [
            _vm._v("Importer - Recent Jobs")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "actions" } },
        [
          _c(
            "router-link",
            {
              staticClass: "button",
              attrs: { to: { name: "importer.failed-jobs" } }
            },
            [_vm._v("Failed Jobs")]
          ),
          _vm._v(" "),
          _c(
            "router-link",
            { staticClass: "button mr-3", attrs: { to: { name: "importer" } } },
            [_vm._v("Go Back")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "content-container" },
          [
            _vm.ready && _vm.jobs.length > 0
              ? _c("p-card", [
                  _c(
                    "table",
                    { staticClass: "table table-hover table-sm mb-0" },
                    [
                      _c("thead", [
                        _c("tr", [
                          _c("th", [_vm._v("Job")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Queued At")]),
                          _vm._v(" "),
                          _c("th", [_vm._v("Runtime")]),
                          _vm._v(" "),
                          _c("th", { staticClass: "text-right" }, [
                            _vm._v("Status")
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c(
                        "tbody",
                        _vm._l(_vm.jobs, function(job) {
                          return _c("tr", { key: job.id }, [
                            _c("td", [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t" +
                                  _vm._s(_vm._f("basename")(job.name))
                              ),
                              _c("br"),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-sm text-mute" }, [
                                _vm._v("Queue: " + _vm._s(job.queue))
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "table-fit" }, [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t\t" +
                                  _vm._s(
                                    _vm._f("formatted")(job.payload.pushedAt)
                                  ) +
                                  "\n\t\t\t\t\t\t\t"
                              )
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "table-fit" }, [
                              _c("span", [
                                _vm._v(
                                  _vm._s(
                                    job.completed_at
                                      ? (
                                          job.completed_at - job.reserved_at
                                        ).toFixed(2) + "s"
                                      : "-"
                                  )
                                )
                              ])
                            ]),
                            _vm._v(" "),
                            _c("td", { staticClass: "text-right table-fit" }, [
                              job.status == "completed"
                                ? _c(
                                    "span",
                                    { staticClass: "badge badge--success" },
                                    [_vm._v("Complete")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              job.status == "reserved"
                                ? _c(
                                    "span",
                                    { staticClass: "badge badge--warning" },
                                    [_vm._v("Reserved")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              job.status == "pending"
                                ? _c(
                                    "span",
                                    { staticClass: "badge badge--warning" },
                                    [_vm._v("Pending")]
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              job.status == "failed"
                                ? _c(
                                    "span",
                                    { staticClass: "badge badge--danger" },
                                    [_vm._v("Failed")]
                                  )
                                : _vm._e()
                            ])
                          ])
                        }),
                        0
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "p-3 d-flex justify-content-between border-top"
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary btn-md",
                          attrs: { disabled: _vm.page == 1 },
                          on: { click: _vm.previous }
                        },
                        [_vm._v("Previous")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-secondary btn-md",
                          attrs: { disabled: _vm.page >= _vm.totalPages },
                          on: { click: _vm.next }
                        },
                        [_vm._v("Next")]
                      )
                    ]
                  )
                ])
              : _c("p-card", [
                  _c("div", { staticClass: "flex text-center" }, [
                    _c("p", { staticClass: "w-full text-sm" }, [
                      _vm._v("There aren't any jobs.")
                    ])
                  ])
                ])
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

/***/ "./resources/js/views/Importer/RecentJobs.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/Importer/RecentJobs.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecentJobs_vue_vue_type_template_id_c0c19782___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecentJobs.vue?vue&type=template&id=c0c19782& */ "./resources/js/views/Importer/RecentJobs.vue?vue&type=template&id=c0c19782&");
/* harmony import */ var _RecentJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RecentJobs.vue?vue&type=script&lang=js& */ "./resources/js/views/Importer/RecentJobs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RecentJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RecentJobs_vue_vue_type_template_id_c0c19782___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RecentJobs_vue_vue_type_template_id_c0c19782___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Importer/RecentJobs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Importer/RecentJobs.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Importer/RecentJobs.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecentJobs.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/RecentJobs.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentJobs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Importer/RecentJobs.vue?vue&type=template&id=c0c19782&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/Importer/RecentJobs.vue?vue&type=template&id=c0c19782& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentJobs_vue_vue_type_template_id_c0c19782___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./RecentJobs.vue?vue&type=template&id=c0c19782& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/RecentJobs.vue?vue&type=template&id=c0c19782&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentJobs_vue_vue_type_template_id_c0c19782___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RecentJobs_vue_vue_type_template_id_c0c19782___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL1JlY2VudEpvYnMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9JbXBvcnRlci9SZWNlbnRKb2JzLnZ1ZT85MmNiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9JbXBvcnRlci9SZWNlbnRKb2JzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvUmVjZW50Sm9icy52dWU/YmFhOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvUmVjZW50Sm9icy52dWU/MDI0MSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGNBREE7QUFFQSxrQkFGQTtBQUdBLGFBSEE7QUFJQSxpQkFKQTtBQUtBO0FBTEE7QUFPQSxHQVRBO0FBV0E7QUFDQSxZQURBLGtCQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0E7QUFIQSxHQVhBO0FBaUJBO0FBQ0EsWUFEQSxvQkFDQSxLQURBLEVBQ0E7QUFDQTtBQUNBLEtBSEE7QUFLQSxhQUxBLHFCQUtBLEtBTEEsRUFLQTtBQUNBLGtDQUNBLEdBREEsQ0FDQSxtQ0FEQSxFQUVBLE1BRkEsQ0FFQSxxQkFGQTtBQUdBO0FBVEEsR0FqQkE7QUE2QkE7QUFDQSxhQURBLHVCQUNBO0FBQUE7O0FBQUE7QUFDQTtBQUVBLDBHQUNBLElBREEsQ0FDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BTEE7QUFNQSxLQVZBO0FBWUEsZUFaQSx1QkFZQSxJQVpBLEVBWUE7QUFDQTtBQUVBO0FBRUE7QUFDQSxLQWxCQTtBQW9CQSxZQXBCQSxzQkFvQkE7QUFDQTtBQUNBO0FBQ0E7QUF2QkEscUNBeUJBO0FB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c0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuXHRcdFx0PGFwcC10aXRsZSBpY29uPVwic2hpcFwiPkltcG9ydGVyIC0gUmVjZW50IEpvYnM8L2FwcC10aXRsZT5cblx0XHQ8L3BvcnRhbD5cblxuXHRcdDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG5cdFx0XHQ8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnaW1wb3J0ZXIuZmFpbGVkLWpvYnMnIH1cIiBjbGFzcz1cImJ1dHRvblwiPkZhaWxlZCBKb2JzPC9yb3V0ZXItbGluaz5cblx0XHRcdDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdpbXBvcnRlcid9XCIgY2xhc3M9XCJidXR0b24gbXItM1wiPkdvIEJhY2s8L3JvdXRlci1saW5rPlxuXHRcdDwvcG9ydGFsPlxuXG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG5cdFx0XHRcdDxwLWNhcmQgdi1pZj1cInJlYWR5ICYmIGpvYnMubGVuZ3RoID4gMFwiPlxuXHRcdFx0XHRcdDx0YWJsZSBjbGFzcz1cInRhYmxlIHRhYmxlLWhvdmVyIHRhYmxlLXNtIG1iLTBcIj5cblx0XHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdFx0XHRcdDx0aD5Kb2I8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDx0aD5RdWV1ZWQgQXQ8L3RoPlxuXHRcdFx0XHRcdFx0XHRcdDx0aD5SdW50aW1lPC90aD5cblx0XHRcdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJ0ZXh0LXJpZ2h0XCI+U3RhdHVzPC90aD5cdFx0XG5cdFx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0XHQ8L3RoZWFkPlx0XG5cdFx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHRcdDx0ciB2LWZvcj1cImpvYiBpbiBqb2JzXCIgOmtleT1cImpvYi5pZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHRcdHt7IGpvYi5uYW1lIHwgYmFzZW5hbWUgfX08YnIgLz5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidGV4dC1zbSB0ZXh0LW11dGVcIj5RdWV1ZToge3sgam9iLnF1ZXVlIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvdGQ+XG5cblx0XHRcdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJ0YWJsZS1maXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHt7IGpvYi5wYXlsb2FkLnB1c2hlZEF0IHwgZm9ybWF0dGVkIH19XG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cblxuXHRcdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cInRhYmxlLWZpdFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e3sgam9iLmNvbXBsZXRlZF9hdCA/IChqb2IuY29tcGxldGVkX2F0IC0gam9iLnJlc2VydmVkX2F0KS50b0ZpeGVkKDIpKydzJyA6ICctJyB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L3RkPlxuXG5cdFx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwidGV4dC1yaWdodCB0YWJsZS1maXRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJqb2Iuc3RhdHVzID09ICdjb21wbGV0ZWQnXCIgY2xhc3M9XCJiYWRnZSBiYWRnZS0tc3VjY2Vzc1wiPkNvbXBsZXRlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImpvYi5zdGF0dXMgPT0gJ3Jlc2VydmVkJ1wiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLXdhcm5pbmdcIj5SZXNlcnZlZDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJqb2Iuc3RhdHVzID09ICdwZW5kaW5nJ1wiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLXdhcm5pbmdcIj5QZW5kaW5nPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImpvYi5zdGF0dXMgPT0gJ2ZhaWxlZCdcIiBjbGFzcz1cImJhZGdlIGJhZGdlLS1kYW5nZXJcIj5GYWlsZWQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdFx0PC90YWJsZT5cblxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJwLTMgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGJvcmRlci10b3BcIj5cblx0XHRcdFx0XHRcdDxidXR0b24gQGNsaWNrPVwicHJldmlvdXNcIiBjbGFzcz1cImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1tZFwiIDpkaXNhYmxlZD1cInBhZ2U9PTFcIj5QcmV2aW91czwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PGJ1dHRvbiBAY2xpY2s9XCJuZXh0XCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tbWRcIiA6ZGlzYWJsZWQ9XCJwYWdlPj10b3RhbFBhZ2VzXCI+TmV4dDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3AtY2FyZD5cblxuXHRcdFx0XHQ8cC1jYXJkIHYtZWxzZT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCB0ZXh0LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3M9XCJ3LWZ1bGwgdGV4dC1zbVwiPlRoZXJlIGFyZW4ndCBhbnkgam9icy48L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvcC1jYXJkPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRqb2JzOiBbXSxcblx0XHRcdFx0cmVhZHk6IGZhbHNlLFxuXHRcdFx0XHRwYWdlOiAxLFxuXHRcdFx0XHRwZXJQYWdlOiAyNSxcblx0XHRcdFx0dG90YWxQYWdlczogMVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR3YXRjaDoge1xuXHRcdFx0JyRyb3V0ZScodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncm91dGUnLCB2YWx1ZSlcbiAgICAgICAgICAgIH1cblx0XHR9LFxuXG5cdFx0ZmlsdGVyczoge1xuXHRcdFx0YmFzZW5hbWUodmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIF8uc3BsaXQodmFsdWUsICdcXFxcJylbLTFdXG5cdFx0XHR9LFxuXG5cdFx0XHRmb3JtYXR0ZWQodmFsdWUpIHtcblx0XHRcdFx0cmV0dXJuIG1vbWVudCh2YWx1ZSAqIDEwMDApXG5cdFx0XHRcdFx0LmFkZChuZXcgRGF0ZSgpLmdldFRpbWV6b25lT2Zmc2V0KCkgLyA2MClcblx0XHRcdFx0XHQuZm9ybWF0KCdZWVlZLU1NLUREIEhIOm1tOnNzJylcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0ZmV0Y2hKb2JzKHN0YXJ0aW5nID0gLTEpIHtcblx0XHRcdFx0dGhpcy5yZWFkeSA9IGZhbHNlXG5cblx0XHRcdFx0YXhpb3MuZ2V0KGAvaG9yaXpvbi9hcGkvam9icy9yZWNlbnQ/c3RhcnRpbmdfYXQ9JHtzdGFydGluZ30mbGltaXQ9JHt0aGlzLnBlclBhZ2V9YClcblx0XHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmpvYnMgICAgICAgPSByZXNwb25zZS5kYXRhLmpvYnM7XG5cdFx0XHRcdFx0XHR0aGlzLnRvdGFsUGFnZXMgPSBNYXRoLmNlaWwocmVzcG9uc2UuZGF0YS50b3RhbCAvIHRoaXMucGVyUGFnZSk7XG5cdFx0XHRcdFx0XHR0aGlzLnJlYWR5ICAgICAgPSB0cnVlXG5cdFx0XHRcdFx0fSlcblx0XHRcdH0sXG5cblx0XHRcdGpvYkJhc2VOYW1lKG5hbWUpIHtcblx0ICAgICAgICAgICAgaWYgKCFuYW1lLmluY2x1ZGVzKCdcXFxcJykpIHJldHVybiBuYW1lO1xuXG5cdCAgICAgICAgICAgIHZhciBwYXJ0cyA9IG5hbWUuc3BsaXQoJ1xcXFwnKTtcblxuXHQgICAgICAgICAgICByZXR1cm4gcGFydHNbcGFydHMubGVuZ3RoIC0gMV07XG5cdCAgICAgICAgfSxcblxuXHRcdFx0cHJldmlvdXMoKSB7XG5cdFx0XHRcdHRoaXMuZmV0Y2hKb2JzKCh0aGlzLnBhZ2UgLSAyKSAqIHRoaXMucGVyUGFnZSlcblx0XHRcdFx0dGhpcy5wYWdlIC09IDFcblx0XHRcdH0sXG5cblx0XHRcdHByZXZpb3VzKCkge1xuXHRcdFx0XHR0aGlzLmZldGNoSm9icyh0aGlzLnBhZ2UgKiB0aGlzLnBlclBhZ2UpXG5cdFx0XHRcdHRoaXMucGFnZSArPSAxXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHR0aGlzLmZldGNoSm9icygpXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwic2hpcFwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiSW1wb3J0ZXIgLSBSZWNlbnQgSm9ic1wiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJpbXBvcnRlci5mYWlsZWQtam9ic1wiIH0gfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJGYWlsZWQgSm9ic1wiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBtci0zXCIsIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiaW1wb3J0ZXJcIiB9IH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBCYWNrXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0ucmVhZHkgJiYgX3ZtLmpvYnMubGVuZ3RoID4gMFxuICAgICAgICAgICAgICA/IF9jKFwicC1jYXJkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGUgdGFibGUtaG92ZXIgdGFibGUtc20gbWItMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJKb2JcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiUXVldWVkIEF0XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIlJ1bnRpbWVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU3RhdHVzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmpvYnMsIGZ1bmN0aW9uKGpvYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogam9iLmlkIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fZihcImJhc2VuYW1lXCIpKGpvYi5uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc20gdGV4dC1tdXRlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJRdWV1ZTogXCIgKyBfdm0uX3Moam9iLnF1ZXVlKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtZml0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2YoXCJmb3JtYXR0ZWRcIikoam9iLnBheWxvYWQucHVzaGVkQXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWZpdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2IuY29tcGxldGVkX2F0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgam9iLmNvbXBsZXRlZF9hdCAtIGpvYi5yZXNlcnZlZF9hdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkudG9GaXhlZCgyKSArIFwic1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodCB0YWJsZS1maXRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2Iuc3RhdHVzID09IFwiY29tcGxldGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0tc3VjY2Vzc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ29tcGxldGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvYi5zdGF0dXMgPT0gXCJyZXNlcnZlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtLXdhcm5pbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlc2VydmVkXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqb2Iuc3RhdHVzID09IFwicGVuZGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtLXdhcm5pbmdcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlBlbmRpbmdcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpvYi5zdGF0dXMgPT0gXCJmYWlsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkZhaWxlZFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICBcInAtMyBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYm9yZGVyLXRvcFwiXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ0biBidG4tc2Vjb25kYXJ5IGJ0bi1tZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogX3ZtLnBhZ2UgPT0gMSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnByZXZpb3VzIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUHJldmlvdXNcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLW1kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBfdm0ucGFnZSA+PSBfdm0udG90YWxQYWdlcyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm5leHQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJOZXh0XCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX2MoXCJwLWNhcmRcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IHRleHQtY2VudGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgdGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJUaGVyZSBhcmVuJ3QgYW55IGpvYnMuXCIpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1JlY2VudEpvYnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMwYzE5NzgyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1JlY2VudEpvYnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9SZWNlbnRKb2JzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoYW5la3JvbGlrb3dza2kvQ29kZS9mdXNpb25jbXMtdjYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzBjMTk3ODInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzBjMTk3ODInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzBjMTk3ODInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1JlY2VudEpvYnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMwYzE5NzgyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MwYzE5NzgyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvUmVjZW50Sm9icy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlY2VudEpvYnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlY2VudEpvYnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JlY2VudEpvYnMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMwYzE5NzgyJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==