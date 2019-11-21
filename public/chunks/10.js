(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/LogModal.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/LogModal.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: {},
      entries: [],
      entriesPage: 1,
      entriesPerPage: 100,
      newEntriesTimeout: null,
      newEntriesTimer: 2500,
      ready: false
    };
  },
  props: {
    title: {
      type: String,
      "default": 'Logs'
    },
    entryId: {
      type: Number | Boolean,
      required: true
    }
  },
  computed: {
    endpoint: function endpoint() {
      return "/api/imports/logs/".concat(this.entryId, "?page=").concat(this.entriesPage, "&limit=").concat(this.entriesPerPage);
    }
  },
  watch: {
    entryId: function entryId(value) {
      clearTimeout(this.newEntriesTimeout);

      if (value !== false) {
        this.entries = [];
        this.entriesPage = 1;
        this.ready = false;
        this.loadEntries();
      }
    }
  },
  methods: {
    loadEntries: function loadEntries() {
      var _this = this;

      this.newEntriesTimeout = setTimeout(function () {
        axios.get(_this.endpoint).then(function (response) {
          _this.ready = true;
          _this.data = response.data.data; // Only load new entries if they exist..

          if (_this.entriesPage <= response.data.data.logs.pages) {
            var logs = _.map(response.data.data.logs.data, function (log) {
              log['context'] = _.size(log['context']) > 0 ? _(log['context']).value() : null;
              return log;
            });

            _this.entries = logs.concat(_this.entries);
            _this.entriesPage = _this.entriesPage + 1;
          }
        });

        _this.loadEntries();
      }, this.newEntriesTimer);
    }
  },
  destroyed: function destroyed() {
    clearTimeout(this.newEntriesTimeout);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/View.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Importer/View.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Importer_LogModal_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Importer/LogModal.vue */ "./resources/js/components/Importer/LogModal.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      data: {},
      entries: [],
      newEntriesTimeout: null,
      newEntriesTimer: 5000,
      entryId: false
    };
  },
  components: {
    'log-modal': _components_Importer_LogModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    show: {
      get: function get() {
        return this.entryId !== false;
      },
      set: function set(value) {
        this.entryId = value;
      }
    }
  },
  watch: {
    entryId: function entryId(value) {
      clearTimeout(this.newEntriesTimeout);

      if (value === false) {
        this.loadEntries();
      }
    }
  },
  methods: {
    loadEntries: function loadEntries() {
      var _this = this;

      axios.get("/api/imports/".concat(this.$router.currentRoute.params.importer)).then(function (response) {
        _this.data = response.data.data;
        _this.entries = response.data.data.logs;
      });
      this.newEntriesTimeout = setTimeout(function () {
        _this.loadEntries();
      }, this.newEntriesTimer);
    },
    queue: function queue(id) {
      axios.post("/api/imports/queue/".concat(id)).then(function (response) {
        toast('Import has been added to the queue.', 'success');
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.loadEntries();
    });
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    clearTimeout(this.newEntriesTimeout);
    next();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/LogModal.vue?vue&type=template&id=1b600b2a&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/LogModal.vue?vue&type=template&id=1b600b2a& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    "p-modal",
    {
      staticClass: "h-screen",
      attrs: {
        name: "log-modal",
        title: _vm.title,
        "no-footer": "",
        "extra-large": ""
      },
      model: {
        value: _vm.$parent.show,
        callback: function($$v) {
          _vm.$set(_vm.$parent, "show", $$v)
        },
        expression: "$parent.show"
      }
    },
    [
      _vm.ready
        ? _c("table", [
            _c("thead", [
              _c("th", { staticClass: "w-2/12" }, [_vm._v("Scheduled")]),
              _vm._v(" "),
              _c("th", { staticClass: "w-8/12" }, [_vm._v("Progress")]),
              _vm._v(" "),
              _c("th", { staticClass: "w-2/12" }, [_vm._v("Status")])
            ]),
            _vm._v(" "),
            _c("tbody", [
              _c("tr", [
                _c("td", [_vm._v(_vm._s(_vm.data.happened))]),
                _vm._v(" "),
                _c("td", [
                  _vm.data.status == "setup"
                    ? _c(
                        "div",
                        { staticClass: "shadow w-full bg-warning-100" },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "bg-primary-500 text-xs leading-none py-1 text-center text-white",
                              style: "width: " + _vm.data.progress + "%"
                            },
                            [_vm._v(_vm._s(_vm.data.progress) + "%")]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.data.status == "complete"
                    ? _c(
                        "div",
                        { staticClass: "shadow w-full bg-warning-100" },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "bg-success-500 text-xs leading-none py-1 text-center text-white",
                              style: "width: " + _vm.data.progress + "%"
                            },
                            [_vm._v(_vm._s(_vm.data.progress) + "%")]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.data.status == "failed"
                    ? _c(
                        "div",
                        { staticClass: "shadow w-full bg-warning-100" },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "bg-warning-500 text-xs leading-none py-1 text-center text-white",
                              style: "width: " + _vm.data.progress + "%"
                            },
                            [_vm._v(_vm._s(_vm.data.progress) + "%")]
                          )
                        ]
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.data.status == "running"
                    ? _c(
                        "div",
                        { staticClass: "shadow w-full bg-warning-100" },
                        [
                          _c(
                            "div",
                            {
                              staticClass:
                                "bg-warning-500 text-xs leading-none py-1 text-center text-white",
                              style: "width: " + _vm.data.progress + "%"
                            },
                            [_vm._v(_vm._s(_vm.data.progress) + "%")]
                          )
                        ]
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("td", [
                  _vm.data.status == "setup"
                    ? _c("span", { staticClass: "badge badge--primary" }, [
                        _vm._v("Complete")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.data.status == "complete"
                    ? _c("span", { staticClass: "badge badge--success" }, [
                        _vm._v("Complete")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.data.status == "failed"
                    ? _c("span", { staticClass: "badge badge--danger" }, [
                        _vm._v("Failed")
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.data.status == "running"
                    ? _c("span", { staticClass: "badge badge--warning" }, [
                        _vm._v("In Progress...")
                      ])
                    : _vm._e()
                ])
              ])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.ready
        ? _c("table", [
            _c("thead", [
              _c("th", { staticClass: "w-8/12" }, [_vm._v("Message")]),
              _vm._v(" "),
              _c("th", { staticClass: "w-2/12" }, [_vm._v("Level")]),
              _vm._v(" "),
              _c("th", { staticClass: "w-2/12" }, [_vm._v("Happened")])
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "overflow-y-auto", staticStyle: { height: "30rem" } },
        [
          _c("table", [
            _c(
              "tbody",
              _vm._l(_vm.entries, function(entry, key) {
                return _c("tr", { key: key, staticClass: "w-full" }, [
                  _c("td", { staticClass: "w-8/12" }, [
                    _vm._v(
                      "\n\t\t\t\t\t\t" +
                        _vm._s(entry.message) +
                        "\n\t\t\t\t\t\t"
                    ),
                    entry.context
                      ? _c(
                          "div",
                          {
                            staticClass: "text-sm text-gray-600",
                            domProps: { textContent: _vm._s(entry.context) }
                          },
                          [_vm._v("Read more")]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "w-2/12" }, [
                    entry.level == 200
                      ? _c("span", { staticClass: "badge badge--info" }, [
                          _vm._v(_vm._s(entry.level_name))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    entry.level == 250
                      ? _c("span", { staticClass: "badge badge--success" }, [
                          _vm._v(_vm._s(entry.level_name))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    entry.level == 300
                      ? _c("span", { staticClass: "badge badge--warning" }, [
                          _vm._v(_vm._s(entry.level_name))
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    entry.level == 400
                      ? _c("span", { staticClass: "badge badge--danger" }, [
                          _vm._v(_vm._s(entry.level_name))
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", { staticClass: "w-2/12" }, [
                    _vm._v(
                      "\n\t\t\t\t\t\t" + _vm._s(entry.happened) + "\n\t\t\t\t\t"
                    )
                  ])
                ])
              }),
              0
            )
          ])
        ]
      ),
      _vm._v(" "),
      !_vm.ready
        ? _c(
            "div",
            { staticClass: "w-full text-center p-5" },
            [
              _c("fa-icon", {
                staticClass: "fa-spin mr-3",
                attrs: { icon: ["fas", "spinner-third"] }
              }),
              _vm._v(" Loading logs...\n\t")
            ],
            1
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/View.vue?vue&type=template&id=fa90e7da&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Importer/View.vue?vue&type=template&id=fa90e7da& ***!
  \***********************************************************************************************************************************************************************************************************/
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
        [_c("app-title", { attrs: { icon: "ship" } }, [_vm._v("Importer")])],
        1
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "actions" } },
        [
          _c(
            "router-link",
            { staticClass: "button mr-3", attrs: { to: { name: "importer" } } },
            [_vm._v("Go Back")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button button--primary",
              attrs: { type: "button" },
              on: {
                click: function($event) {
                  return _vm.queue(_vm.$route.params.importer)
                }
              }
            },
            [_vm._v("Run Import")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "content-container" }, [
          _c("table", [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.entries, function(entry, index) {
                return _c("tr", { key: index, staticClass: "w-full" }, [
                  _c("td", [_vm._v(_vm._s(entry.happened))]),
                  _vm._v(" "),
                  _c("td", [
                    entry.status == "setup"
                      ? _c(
                          "div",
                          { staticClass: "shadow w-full bg-warning-100" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "bg-primary-500 text-xs leading-none py-1 text-center text-white",
                                style: "width: " + entry.progress + "%"
                              },
                              [_vm._v(_vm._s(entry.progress) + "%")]
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    entry.status == "complete"
                      ? _c(
                          "div",
                          { staticClass: "shadow w-full bg-warning-100" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "bg-success-500 text-xs leading-none py-1 text-center text-white",
                                style: "width: " + entry.progress + "%"
                              },
                              [_vm._v(_vm._s(entry.progress) + "%")]
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    entry.status == "failed"
                      ? _c(
                          "div",
                          { staticClass: "shadow w-full bg-warning-100" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "bg-danger-500 text-xs leading-none py-1 text-center text-white",
                                style: "width: " + entry.progress + "%"
                              },
                              [_vm._v(_vm._s(entry.progress) + "%")]
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    entry.status == "running"
                      ? _c(
                          "div",
                          { staticClass: "shadow w-full bg-warning-100" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "bg-warning-500 text-xs leading-none py-1 text-center text-white",
                                style: "width: " + entry.progress + "%"
                              },
                              [_vm._v(_vm._s(entry.progress) + "%")]
                            )
                          ]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    entry.status == "setup"
                      ? _c("span", { staticClass: "badge badge--primary" }, [
                          _vm._v("Setup")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    entry.status == "complete"
                      ? _c("span", { staticClass: "badge badge--success" }, [
                          _vm._v("Complete")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    entry.status == "failed"
                      ? _c("span", { staticClass: "badge badge--danger" }, [
                          _vm._v("Failed")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    entry.status == "running"
                      ? _c("span", { staticClass: "badge badge--warning" }, [
                          _vm._v("In Progress...")
                        ])
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "td",
                    [
                      _c(
                        "p-button",
                        {
                          on: {
                            click: function($event) {
                              _vm.entryId = entry.id
                            }
                          }
                        },
                        [_vm._v("View log")]
                      )
                    ],
                    1
                  )
                ])
              }),
              0
            )
          ])
        ])
      ]),
      _vm._v(" "),
      _c("log-modal", {
        attrs: { entryId: _vm.entryId, title: "Import Logs - " + _vm.data.name }
      })
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
      _c("th", { staticClass: "w-2/12" }, [_vm._v("Scheduled")]),
      _vm._v(" "),
      _c("th", { staticClass: "w-5/12" }, [_vm._v("Progress")]),
      _vm._v(" "),
      _c("th", { staticClass: "w-3/12" }, [_vm._v("Status")]),
      _vm._v(" "),
      _c("th", { staticClass: "w-2/12" })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Importer/LogModal.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Importer/LogModal.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LogModal_vue_vue_type_template_id_1b600b2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogModal.vue?vue&type=template&id=1b600b2a& */ "./resources/js/components/Importer/LogModal.vue?vue&type=template&id=1b600b2a&");
/* harmony import */ var _LogModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogModal.vue?vue&type=script&lang=js& */ "./resources/js/components/Importer/LogModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LogModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LogModal_vue_vue_type_template_id_1b600b2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LogModal_vue_vue_type_template_id_1b600b2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Importer/LogModal.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Importer/LogModal.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Importer/LogModal.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./LogModal.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/LogModal.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LogModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Importer/LogModal.vue?vue&type=template&id=1b600b2a&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Importer/LogModal.vue?vue&type=template&id=1b600b2a& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogModal_vue_vue_type_template_id_1b600b2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./LogModal.vue?vue&type=template&id=1b600b2a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/LogModal.vue?vue&type=template&id=1b600b2a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogModal_vue_vue_type_template_id_1b600b2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LogModal_vue_vue_type_template_id_1b600b2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Importer/View.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Importer/View.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _View_vue_vue_type_template_id_fa90e7da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./View.vue?vue&type=template&id=fa90e7da& */ "./resources/js/views/Importer/View.vue?vue&type=template&id=fa90e7da&");
/* harmony import */ var _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./View.vue?vue&type=script&lang=js& */ "./resources/js/views/Importer/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _View_vue_vue_type_template_id_fa90e7da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _View_vue_vue_type_template_id_fa90e7da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Importer/View.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Importer/View.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Importer/View.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/View.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Importer/View.vue?vue&type=template&id=fa90e7da&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Importer/View.vue?vue&type=template&id=fa90e7da& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_fa90e7da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./View.vue?vue&type=template&id=fa90e7da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/View.vue?vue&type=template&id=fa90e7da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_fa90e7da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_View_vue_vue_type_template_id_fa90e7da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTG9nTW9kYWwudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvVmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTG9nTW9kYWwudnVlPzM5N2YiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL1ZpZXcudnVlPzE1ZTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTG9nTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0xvZ01vZGFsLnZ1ZT9lMzg3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0xvZ01vZGFsLnZ1ZT9iYTI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9JbXBvcnRlci9WaWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvVmlldy52dWU/NGQwMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvVmlldy52dWU/MjRmNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0VBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLGlCQUZBO0FBR0Esb0JBSEE7QUFJQSx5QkFKQTtBQUtBLDZCQUxBO0FBTUEsMkJBTkE7QUFPQTtBQVBBO0FBU0EsR0FYQTtBQWFBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0EsNEJBREE7QUFFQTtBQUZBO0FBTEEs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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTBMLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvMTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxwLW1vZGFsIGNsYXNzPVwiaC1zY3JlZW5cIiBuYW1lPVwibG9nLW1vZGFsXCIgdi1tb2RlbD1cIiRwYXJlbnQuc2hvd1wiIDp0aXRsZT1cInRpdGxlXCIgbm8tZm9vdGVyIGV4dHJhLWxhcmdlPlxuXHRcdDx0YWJsZSB2LWlmPVwicmVhZHlcIj5cblx0XHRcdDx0aGVhZD5cblx0XHRcdFx0PHRoIGNsYXNzPVwidy0yLzEyXCI+U2NoZWR1bGVkPC90aD5cblx0XHRcdFx0PHRoIGNsYXNzPVwidy04LzEyXCI+UHJvZ3Jlc3M8L3RoPlxuXHRcdFx0XHQ8dGggY2xhc3M9XCJ3LTIvMTJcIj5TdGF0dXM8L3RoPlxuXHRcdFx0PC90aGVhZD5cblx0XHRcdDx0Ym9keT5cblx0XHRcdFx0PHRyPlxuXHRcdFx0XHRcdDx0ZD57eyBkYXRhLmhhcHBlbmVkIH19PC90ZD5cblx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJkYXRhLnN0YXR1cyA9PSAnc2V0dXAnXCIgY2xhc3M9XCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJiZy1wcmltYXJ5LTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyBkYXRhLnByb2dyZXNzICsgJyUnXCI+e3sgZGF0YS5wcm9ncmVzcyB9fSU8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwiZGF0YS5zdGF0dXMgPT0gJ2NvbXBsZXRlJ1wiIGNsYXNzPVwic2hhZG93IHctZnVsbCBiZy13YXJuaW5nLTEwMFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmctc3VjY2Vzcy01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIgOnN0eWxlPVwiJ3dpZHRoOiAnICsgZGF0YS5wcm9ncmVzcyArICclJ1wiPnt7IGRhdGEucHJvZ3Jlc3MgfX0lPC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cImRhdGEuc3RhdHVzID09ICdmYWlsZWQnXCIgY2xhc3M9XCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJiZy13YXJuaW5nLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyBkYXRhLnByb2dyZXNzICsgJyUnXCI+e3sgZGF0YS5wcm9ncmVzcyB9fSU8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwiZGF0YS5zdGF0dXMgPT0gJ3J1bm5pbmcnXCIgY2xhc3M9XCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJiZy13YXJuaW5nLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyBkYXRhLnByb2dyZXNzICsgJyUnXCI+e3sgZGF0YS5wcm9ncmVzcyB9fSU8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImRhdGEuc3RhdHVzID09ICdzZXR1cCdcIiBjbGFzcz1cImJhZGdlIGJhZGdlLS1wcmltYXJ5XCI+Q29tcGxldGU8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiZGF0YS5zdGF0dXMgPT0gJ2NvbXBsZXRlJ1wiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLXN1Y2Nlc3NcIj5Db21wbGV0ZTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJkYXRhLnN0YXR1cyA9PSAnZmFpbGVkJ1wiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLWRhbmdlclwiPkZhaWxlZDwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJkYXRhLnN0YXR1cyA9PSAncnVubmluZydcIiBjbGFzcz1cImJhZGdlIGJhZGdlLS13YXJuaW5nXCI+SW4gUHJvZ3Jlc3MuLi48L3NwYW4+XG5cdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0PC90cj5cblx0XHRcdDwvdGJvZHk+XG5cdFx0PC90YWJsZT5cblxuXHRcdDx0YWJsZSB2LWlmPVwicmVhZHlcIj5cblx0XHRcdDx0aGVhZD5cblx0XHRcdFx0PHRoIGNsYXNzPVwidy04LzEyXCI+TWVzc2FnZTwvdGg+XG5cdFx0XHRcdDx0aCBjbGFzcz1cInctMi8xMlwiPkxldmVsPC90aD5cblx0XHRcdFx0PHRoIGNsYXNzPVwidy0yLzEyXCI+SGFwcGVuZWQ8L3RoPlxuXHRcdFx0PC90aGVhZD5cblx0XHQ8L3RhYmxlPlxuXG5cdFx0PGRpdiBjbGFzcz1cIm92ZXJmbG93LXktYXV0b1wiIHN0eWxlPVwiaGVpZ2h0OiAzMHJlbTtcIj5cblx0XHRcdDx0YWJsZT5cblx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdDx0ciBjbGFzcz1cInctZnVsbFwiIHYtZm9yPVwiKGVudHJ5LCBrZXkpIGluIGVudHJpZXNcIiA6a2V5PVwia2V5XCI+XG5cdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJ3LTgvMTJcIj5cblx0XHRcdFx0XHRcdFx0e3sgZW50cnkubWVzc2FnZSB9fVxuXHRcdFx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJlbnRyeS5jb250ZXh0XCIgdi10ZXh0PVwiZW50cnkuY29udGV4dFwiIGNsYXNzPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+UmVhZCBtb3JlPC9kaXY+XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwidy0yLzEyXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJlbnRyeS5sZXZlbCA9PSAyMDBcIiBjbGFzcz1cImJhZGdlIGJhZGdlLS1pbmZvXCI+e3sgZW50cnkubGV2ZWxfbmFtZSB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImVudHJ5LmxldmVsID09IDI1MFwiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLXN1Y2Nlc3NcIj57eyBlbnRyeS5sZXZlbF9uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiZW50cnkubGV2ZWwgPT0gMzAwXCIgY2xhc3M9XCJiYWRnZSBiYWRnZS0td2FybmluZ1wiPnt7IGVudHJ5LmxldmVsX25hbWUgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJlbnRyeS5sZXZlbCA9PSA0MDBcIiBjbGFzcz1cImJhZGdlIGJhZGdlLS1kYW5nZXJcIj57eyBlbnRyeS5sZXZlbF9uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cInctMi8xMlwiPlxuXHRcdFx0XHRcdFx0XHR7eyBlbnRyeS5oYXBwZW5lZCB9fVxuXHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0PC90YWJsZT5cblx0XHQ8L2Rpdj5cblxuXHRcdDxkaXYgdi1pZj1cIiEgcmVhZHlcIiBjbGFzcz1cInctZnVsbCB0ZXh0LWNlbnRlciBwLTVcIj5cblx0XHRcdDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAnc3Bpbm5lci10aGlyZCddXCIgY2xhc3M9XCJmYS1zcGluIG1yLTNcIj48L2ZhLWljb24+IExvYWRpbmcgbG9ncy4uLlxuXHRcdDwvZGl2PlxuXHQ8L3AtbW9kYWw+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHt9LFxuXHRcdFx0XHRlbnRyaWVzOiBbXSxcblx0XHRcdFx0ZW50cmllc1BhZ2U6IDEsXG5cdFx0XHRcdGVudHJpZXNQZXJQYWdlOiAxMDAsXG5cdFx0XHRcdG5ld0VudHJpZXNUaW1lb3V0OiBudWxsLFxuICAgICAgICAgICAgICAgIG5ld0VudHJpZXNUaW1lcjogMjUwMCxcbiAgICAgICAgICAgICAgICByZWFkeTogZmFsc2Vcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0cHJvcHM6IHtcblx0XHRcdHRpdGxlOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJ0xvZ3MnXG5cdFx0XHR9LFxuXHRcdFx0ZW50cnlJZDoge1xuXHRcdFx0XHR0eXBlOiBOdW1iZXJ8Qm9vbGVhbixcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdGVuZHBvaW50OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGAvYXBpL2ltcG9ydHMvbG9ncy8ke3RoaXMuZW50cnlJZH0/cGFnZT0ke3RoaXMuZW50cmllc1BhZ2V9JmxpbWl0PSR7dGhpcy5lbnRyaWVzUGVyUGFnZX1gXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHRlbnRyeUlkOiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5uZXdFbnRyaWVzVGltZW91dClcblxuXHRcdFx0XHRpZiAodmFsdWUgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dGhpcy5lbnRyaWVzID0gW11cblx0XHRcdFx0XHR0aGlzLmVudHJpZXNQYWdlID0gMVxuXHRcdFx0XHRcdHRoaXMucmVhZHkgPSBmYWxzZVxuXG5cdFx0XHRcdFx0dGhpcy5sb2FkRW50cmllcygpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0bG9hZEVudHJpZXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR0aGlzLm5ld0VudHJpZXNUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0YXhpb3MuZ2V0KHRoaXMuZW5kcG9pbnQpXG5cdFx0XHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0XHRcdHRoaXMucmVhZHkgPSB0cnVlXG5cdFx0XHRcdFx0XHRcdHRoaXMuZGF0YSAgPSByZXNwb25zZS5kYXRhLmRhdGFcblxuXHRcdFx0XHRcdFx0XHQvLyBPbmx5IGxvYWQgbmV3IGVudHJpZXMgaWYgdGhleSBleGlzdC4uXG5cdFx0XHRcdFx0XHRcdGlmICh0aGlzLmVudHJpZXNQYWdlIDw9IHJlc3BvbnNlLmRhdGEuZGF0YS5sb2dzLnBhZ2VzKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgbG9ncyA9IF8ubWFwKHJlc3BvbnNlLmRhdGEuZGF0YS5sb2dzLmRhdGEsIGxvZyA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsb2dbJ2NvbnRleHQnXSA9IF8uc2l6ZShsb2dbJ2NvbnRleHQnXSkgPiAwID8gXyhsb2dbJ2NvbnRleHQnXSkudmFsdWUoKSA6IG51bGxcblxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGxvZ1xuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5lbnRyaWVzICAgICA9IGxvZ3MuY29uY2F0KHRoaXMuZW50cmllcylcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmVudHJpZXNQYWdlID0gdGhpcy5lbnRyaWVzUGFnZSArIDFcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSlcblxuXHRcdFx0XHRcdHRoaXMubG9hZEVudHJpZXMoKVxuXHRcdFx0XHR9LCB0aGlzLm5ld0VudHJpZXNUaW1lcilcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0ZGVzdHJveWVkKCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMubmV3RW50cmllc1RpbWVvdXQpXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PHBvcnRhbCB0bz1cInRpdGxlXCI+XG5cdFx0XHQ8YXBwLXRpdGxlIGljb249XCJzaGlwXCI+SW1wb3J0ZXI8L2FwcC10aXRsZT5cblx0XHQ8L3BvcnRhbD5cblxuXHRcdDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG5cdFx0XHQ8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAnaW1wb3J0ZXInIH1cIiBjbGFzcz1cImJ1dHRvbiBtci0zXCI+R28gQmFjazwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBAY2xpY2s9XCJxdWV1ZSgkcm91dGUucGFyYW1zLmltcG9ydGVyKVwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiPlJ1biBJbXBvcnQ8L2J1dHRvbj5cblx0XHQ8L3BvcnRhbD5cblxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8dGFibGU+XG5cdFx0XHRcdFx0PHRoZWFkPlxuXHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwidy0yLzEyXCI+U2NoZWR1bGVkPC90aD5cblx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cInctNS8xMlwiPlByb2dyZXNzPC90aD5cblx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cInctMy8xMlwiPlN0YXR1czwvdGg+XG5cdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJ3LTIvMTJcIj48L3RoPlxuXHRcdFx0XHRcdDwvdGhlYWQ+XG5cdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0PHRyIGNsYXNzPVwidy1mdWxsXCIgdi1mb3I9XCIoZW50cnksIGluZGV4KSBpbiBlbnRyaWVzXCIgOmtleT1cImluZGV4XCI+XG5cdFx0XHRcdFx0XHRcdDx0ZD57eyBlbnRyeS5oYXBwZW5lZCB9fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJlbnRyeS5zdGF0dXMgPT0gJ3NldHVwJ1wiIGNsYXNzPVwic2hhZG93IHctZnVsbCBiZy13YXJuaW5nLTEwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJnLXByaW1hcnktNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiIDpzdHlsZT1cIid3aWR0aDogJyArIGVudHJ5LnByb2dyZXNzICsgJyUnXCI+e3sgZW50cnkucHJvZ3Jlc3MgfX0lPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwiZW50cnkuc3RhdHVzID09ICdjb21wbGV0ZSdcIiBjbGFzcz1cInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJiZy1zdWNjZXNzLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyBlbnRyeS5wcm9ncmVzcyArICclJ1wiPnt7IGVudHJ5LnByb2dyZXNzIH19JTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cImVudHJ5LnN0YXR1cyA9PSAnZmFpbGVkJ1wiIGNsYXNzPVwic2hhZG93IHctZnVsbCBiZy13YXJuaW5nLTEwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJnLWRhbmdlci01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIgOnN0eWxlPVwiJ3dpZHRoOiAnICsgZW50cnkucHJvZ3Jlc3MgKyAnJSdcIj57eyBlbnRyeS5wcm9ncmVzcyB9fSU8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJlbnRyeS5zdGF0dXMgPT0gJ3J1bm5pbmcnXCIgY2xhc3M9XCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmctd2FybmluZy01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIgOnN0eWxlPVwiJ3dpZHRoOiAnICsgZW50cnkucHJvZ3Jlc3MgKyAnJSdcIj57eyBlbnRyeS5wcm9ncmVzcyB9fSU8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJlbnRyeS5zdGF0dXMgPT0gJ3NldHVwJ1wiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLXByaW1hcnlcIj5TZXR1cDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiZW50cnkuc3RhdHVzID09ICdjb21wbGV0ZSdcIiBjbGFzcz1cImJhZGdlIGJhZGdlLS1zdWNjZXNzXCI+Q29tcGxldGU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImVudHJ5LnN0YXR1cyA9PSAnZmFpbGVkJ1wiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLWRhbmdlclwiPkZhaWxlZDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiZW50cnkuc3RhdHVzID09ICdydW5uaW5nJ1wiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLXdhcm5pbmdcIj5JbiBQcm9ncmVzcy4uLjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdDxwLWJ1dHRvbiBAY2xpY2s9XCJlbnRyeUlkID0gZW50cnkuaWRcIj5WaWV3IGxvZzwvcC1idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdDwvdGFibGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHRcblx0XHQ8bG9nLW1vZGFsIDplbnRyeUlkPVwiZW50cnlJZFwiIDp0aXRsZT1cIidJbXBvcnQgTG9ncyAtICcgKyBkYXRhLm5hbWVcIj48L2xvZy1tb2RhbD5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgTG9nTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbXBvcnRlci9Mb2dNb2RhbC52dWUnXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7fSxcblx0XHRcdFx0ZW50cmllczogW10sXG5cdFx0XHRcdG5ld0VudHJpZXNUaW1lb3V0OiBudWxsLFxuICAgICAgICAgICAgICAgIG5ld0VudHJpZXNUaW1lcjogNTAwMCxcblx0XHRcdFx0ZW50cnlJZDogZmFsc2UsXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdCdsb2ctbW9kYWwnOiBMb2dNb2RhbFxuXHRcdH0sXG5cblx0XHRjb21wdXRlZDoge1xuXHRcdFx0c2hvdzoge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmVudHJ5SWQgIT09IGZhbHNlXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuZW50cnlJZCA9IHZhbHVlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0d2F0Y2g6IHtcblx0XHRcdGVudHJ5SWQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLm5ld0VudHJpZXNUaW1lb3V0KVxuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLmxvYWRFbnRyaWVzKClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHRsb2FkRW50cmllcygpIHtcblx0XHRcdFx0YXhpb3MuZ2V0KGAvYXBpL2ltcG9ydHMvJHt0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pbXBvcnRlcn1gKVxuXHRcdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuZGF0YSAgICA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuXHRcdFx0XHRcdFx0dGhpcy5lbnRyaWVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLmxvZ3Ncblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdHRoaXMubmV3RW50cmllc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmxvYWRFbnRyaWVzKClcblx0XHRcdFx0fSwgdGhpcy5uZXdFbnRyaWVzVGltZXIpXG5cdFx0XHR9LFxuXG5cdFx0XHRxdWV1ZShpZCkge1xuXHRcdFx0XHRheGlvcy5wb3N0KGAvYXBpL2ltcG9ydHMvcXVldWUvJHtpZH1gKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnSW1wb3J0IGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBxdWV1ZS4nLCAnc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgIH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG5cdFx0XHRuZXh0KGZ1bmN0aW9uKHZtKSB7XG5cdFx0XHRcdHZtLmxvYWRFbnRyaWVzKClcblx0XHRcdH0pXG5cdFx0fSxcblxuXHRcdGJlZm9yZVJvdXRlTGVhdmUgKHRvLCBmcm9tLCBuZXh0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5uZXdFbnRyaWVzVGltZW91dClcblx0XHRcdG5leHQoKVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInAtbW9kYWxcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJoLXNjcmVlblwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgbmFtZTogXCJsb2ctbW9kYWxcIixcbiAgICAgICAgdGl0bGU6IF92bS50aXRsZSxcbiAgICAgICAgXCJuby1mb290ZXJcIjogXCJcIixcbiAgICAgICAgXCJleHRyYS1sYXJnZVwiOiBcIlwiXG4gICAgICB9LFxuICAgICAgbW9kZWw6IHtcbiAgICAgICAgdmFsdWU6IF92bS4kcGFyZW50LnNob3csXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICBfdm0uJHNldChfdm0uJHBhcmVudCwgXCJzaG93XCIsICQkdilcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCIkcGFyZW50LnNob3dcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLnJlYWR5XG4gICAgICAgID8gX2MoXCJ0YWJsZVwiLCBbXG4gICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMi8xMlwiIH0sIFtfdm0uX3YoXCJTY2hlZHVsZWRcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctOC8xMlwiIH0sIFtfdm0uX3YoXCJQcm9ncmVzc1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyXCIgfSwgW192bS5fdihcIlN0YXR1c1wiKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRib2R5XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YS5oYXBwZW5lZCkpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRhLnN0YXR1cyA9PSBcInNldHVwXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXByaW1hcnktNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6IFwiICsgX3ZtLmRhdGEucHJvZ3Jlc3MgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRhdGEucHJvZ3Jlc3MpICsgXCIlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRhLnN0YXR1cyA9PSBcImNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXN1Y2Nlc3MtNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6IFwiICsgX3ZtLmRhdGEucHJvZ3Jlc3MgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRhdGEucHJvZ3Jlc3MpICsgXCIlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRhLnN0YXR1cyA9PSBcImZhaWxlZFwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy13YXJuaW5nLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOiBcIiArIF92bS5kYXRhLnByb2dyZXNzICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLnByb2dyZXNzKSArIFwiJVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZGF0YS5zdGF0dXMgPT0gXCJydW5uaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXdhcm5pbmctNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6IFwiICsgX3ZtLmRhdGEucHJvZ3Jlc3MgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRhdGEucHJvZ3Jlc3MpICsgXCIlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRhLnN0YXR1cyA9PSBcInNldHVwXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0tcHJpbWFyeVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNvbXBsZXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZGF0YS5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtLXN1Y2Nlc3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb21wbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmRhdGEuc3RhdHVzID09IFwiZmFpbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0tZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRmFpbGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZGF0YS5zdGF0dXMgPT0gXCJydW5uaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0td2FybmluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkluIFByb2dyZXNzLi4uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnJlYWR5XG4gICAgICAgID8gX2MoXCJ0YWJsZVwiLCBbXG4gICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctOC8xMlwiIH0sIFtfdm0uX3YoXCJNZXNzYWdlXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTIvMTJcIiB9LCBbX3ZtLl92KFwiTGV2ZWxcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMi8xMlwiIH0sIFtfdm0uX3YoXCJIYXBwZW5lZFwiKV0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwib3ZlcmZsb3cteS1hdXRvXCIsIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIzMHJlbVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidGFibGVcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5lbnRyaWVzLCBmdW5jdGlvbihlbnRyeSwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGtleSwgc3RhdGljQ2xhc3M6IFwidy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInctOC8xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGVudHJ5Lm1lc3NhZ2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuY29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGVudHJ5LmNvbnRleHQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlYWQgbW9yZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5sZXZlbCA9PSAyMDBcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS1pbmZvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGVudHJ5LmxldmVsX25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5sZXZlbCA9PSAyNTBcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGVudHJ5LmxldmVsX25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5sZXZlbCA9PSAzMDBcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS13YXJuaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGVudHJ5LmxldmVsX25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5sZXZlbCA9PSA0MDBcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoZW50cnkubGV2ZWxfbmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTIvMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKGVudHJ5LmhhcHBlbmVkKSArIFwiXFxuXFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS5yZWFkeVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHRleHQtY2VudGVyIHAtNVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtc3BpbiBtci0zXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwic3Bpbm5lci10aGlyZFwiXSB9XG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgTG9hZGluZyBsb2dzLi4uXFxuXFx0XCIpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW19jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJzaGlwXCIgfSB9LCBbX3ZtLl92KFwiSW1wb3J0ZXJcIildKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJidXR0b24gbXItM1wiLCBhdHRyczogeyB0bzogeyBuYW1lOiBcImltcG9ydGVyXCIgfSB9IH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnF1ZXVlKF92bS4kcm91dGUucGFyYW1zLmltcG9ydGVyKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJSdW4gSW1wb3J0XCIpXVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICBfYyhcInRhYmxlXCIsIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVudHJpZXMsIGZ1bmN0aW9uKGVudHJ5LCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwidy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhlbnRyeS5oYXBwZW5lZCkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnN0YXR1cyA9PSBcInNldHVwXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXByaW1hcnktNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJ3aWR0aDogXCIgKyBlbnRyeS5wcm9ncmVzcyArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZW50cnkucHJvZ3Jlc3MpICsgXCIlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnN0YXR1cyA9PSBcImNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXN1Y2Nlc3MtNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJ3aWR0aDogXCIgKyBlbnRyeS5wcm9ncmVzcyArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZW50cnkucHJvZ3Jlc3MpICsgXCIlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnN0YXR1cyA9PSBcImZhaWxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1kYW5nZXItNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJ3aWR0aDogXCIgKyBlbnRyeS5wcm9ncmVzcyArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZW50cnkucHJvZ3Jlc3MpICsgXCIlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnN0YXR1cyA9PSBcInJ1bm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2hhZG93IHctZnVsbCBiZy13YXJuaW5nLTEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctd2FybmluZy01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOiBcIiArIGVudHJ5LnByb2dyZXNzICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhlbnRyeS5wcm9ncmVzcykgKyBcIiVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnN0YXR1cyA9PSBcInNldHVwXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS1wcmltYXJ5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTZXR1cFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0tc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ29tcGxldGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc3RhdHVzID09IFwiZmFpbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZhaWxlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5zdGF0dXMgPT0gXCJydW5uaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS13YXJuaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJJbiBQcm9ncmVzcy4uLlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVudHJ5SWQgPSBlbnRyeS5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJWaWV3IGxvZ1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImxvZy1tb2RhbFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGVudHJ5SWQ6IF92bS5lbnRyeUlkLCB0aXRsZTogXCJJbXBvcnQgTG9ncyAtIFwiICsgX3ZtLmRhdGEubmFtZSB9XG4gICAgICB9KVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTIvMTJcIiB9LCBbX3ZtLl92KFwiU2NoZWR1bGVkXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctNS8xMlwiIH0sIFtfdm0uX3YoXCJQcm9ncmVzc1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTMvMTJcIiB9LCBbX3ZtLl92KFwiU3RhdHVzXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMi8xMlwiIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0xvZ01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjYwMGIyYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Mb2dNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0xvZ01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoYW5la3JvbGlrb3dza2kvQ29kZS9mdXNpb25jbXMtdjYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWI2MDBiMmEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWI2MDBiMmEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWI2MDBiMmEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0xvZ01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjYwMGIyYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYjYwMGIyYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTG9nTW9kYWwudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9nTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ01vZGFsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjYwMGIyYSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmE5MGU3ZGEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1ZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbmNtcy12Ni9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmYTkwZTdkYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmYTkwZTdkYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmYTkwZTdkYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmE5MGU3ZGEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZmE5MGU3ZGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9JbXBvcnRlci9WaWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmE5MGU3ZGEmXCIiXSwic291cmNlUm9vdCI6IiJ9