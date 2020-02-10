(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

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
  head: {
    title: function title() {
      return {
        inner: 'View Import'
      };
    }
  },
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
                attrs: { icon: ["fas", "circle-notch"] }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTG9nTW9kYWwudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvVmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTG9nTW9kYWwudnVlPzM5N2YiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL1ZpZXcudnVlPzE1ZTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTG9nTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0xvZ01vZGFsLnZ1ZT9lMzg3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0xvZ01vZGFsLnZ1ZT9iYTI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9JbXBvcnRlci9WaWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvVmlldy52dWU/NGQwMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvVmlldy52dWU/MjRmNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0VBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLGlCQUZBO0FBR0Esb0JBSEE7QUFJQSx5QkFKQTtBQUtBLDZCQUxBO0FBTUEsMkJBTkE7QUFPQTtBQVBBO0FBU0EsR0FYQTtBQWFBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0EsNEJBREE7QUFFQTtBQUZBO0FBTEEs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O0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy8yMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHAtbW9kYWwgY2xhc3M9XCJoLXNjcmVlblwiIG5hbWU9XCJsb2ctbW9kYWxcIiB2LW1vZGVsPVwiJHBhcmVudC5zaG93XCIgOnRpdGxlPVwidGl0bGVcIiBuby1mb290ZXIgZXh0cmEtbGFyZ2U+XG5cdFx0PHRhYmxlIHYtaWY9XCJyZWFkeVwiPlxuXHRcdFx0PHRoZWFkPlxuXHRcdFx0XHQ8dGggY2xhc3M9XCJ3LTIvMTJcIj5TY2hlZHVsZWQ8L3RoPlxuXHRcdFx0XHQ8dGggY2xhc3M9XCJ3LTgvMTJcIj5Qcm9ncmVzczwvdGg+XG5cdFx0XHRcdDx0aCBjbGFzcz1cInctMi8xMlwiPlN0YXR1czwvdGg+XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdFx0PHRib2R5PlxuXHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0PHRkPnt7IGRhdGEuaGFwcGVuZWQgfX08L3RkPlxuXHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cImRhdGEuc3RhdHVzID09ICdzZXR1cCdcIiBjbGFzcz1cInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJnLXByaW1hcnktNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiIDpzdHlsZT1cIid3aWR0aDogJyArIGRhdGEucHJvZ3Jlc3MgKyAnJSdcIj57eyBkYXRhLnByb2dyZXNzIH19JTwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJkYXRhLnN0YXR1cyA9PSAnY29tcGxldGUnXCIgY2xhc3M9XCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJiZy1zdWNjZXNzLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyBkYXRhLnByb2dyZXNzICsgJyUnXCI+e3sgZGF0YS5wcm9ncmVzcyB9fSU8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwiZGF0YS5zdGF0dXMgPT0gJ2ZhaWxlZCdcIiBjbGFzcz1cInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJnLXdhcm5pbmctNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiIDpzdHlsZT1cIid3aWR0aDogJyArIGRhdGEucHJvZ3Jlc3MgKyAnJSdcIj57eyBkYXRhLnByb2dyZXNzIH19JTwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJkYXRhLnN0YXR1cyA9PSAncnVubmluZydcIiBjbGFzcz1cInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJnLXdhcm5pbmctNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiIDpzdHlsZT1cIid3aWR0aDogJyArIGRhdGEucHJvZ3Jlc3MgKyAnJSdcIj57eyBkYXRhLnByb2dyZXNzIH19JTwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiZGF0YS5zdGF0dXMgPT0gJ3NldHVwJ1wiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLXByaW1hcnlcIj5Db21wbGV0ZTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJkYXRhLnN0YXR1cyA9PSAnY29tcGxldGUnXCIgY2xhc3M9XCJiYWRnZSBiYWRnZS0tc3VjY2Vzc1wiPkNvbXBsZXRlPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImRhdGEuc3RhdHVzID09ICdmYWlsZWQnXCIgY2xhc3M9XCJiYWRnZSBiYWRnZS0tZGFuZ2VyXCI+RmFpbGVkPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImRhdGEuc3RhdHVzID09ICdydW5uaW5nJ1wiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLXdhcm5pbmdcIj5JbiBQcm9ncmVzcy4uLjwvc3Bhbj5cblx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0PC90Ym9keT5cblx0XHQ8L3RhYmxlPlxuXG5cdFx0PHRhYmxlIHYtaWY9XCJyZWFkeVwiPlxuXHRcdFx0PHRoZWFkPlxuXHRcdFx0XHQ8dGggY2xhc3M9XCJ3LTgvMTJcIj5NZXNzYWdlPC90aD5cblx0XHRcdFx0PHRoIGNsYXNzPVwidy0yLzEyXCI+TGV2ZWw8L3RoPlxuXHRcdFx0XHQ8dGggY2xhc3M9XCJ3LTIvMTJcIj5IYXBwZW5lZDwvdGg+XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdDwvdGFibGU+XG5cblx0XHQ8ZGl2IGNsYXNzPVwib3ZlcmZsb3cteS1hdXRvXCIgc3R5bGU9XCJoZWlnaHQ6IDMwcmVtO1wiPlxuXHRcdFx0PHRhYmxlPlxuXHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0PHRyIGNsYXNzPVwidy1mdWxsXCIgdi1mb3I9XCIoZW50cnksIGtleSkgaW4gZW50cmllc1wiIDprZXk9XCJrZXlcIj5cblx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cInctOC8xMlwiPlxuXHRcdFx0XHRcdFx0XHR7eyBlbnRyeS5tZXNzYWdlIH19XG5cdFx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cImVudHJ5LmNvbnRleHRcIiB2LXRleHQ9XCJlbnRyeS5jb250ZXh0XCIgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5SZWFkIG1vcmU8L2Rpdj5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJ3LTIvMTJcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImVudHJ5LmxldmVsID09IDIwMFwiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLWluZm9cIj57eyBlbnRyeS5sZXZlbF9uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiZW50cnkubGV2ZWwgPT0gMjUwXCIgY2xhc3M9XCJiYWRnZSBiYWRnZS0tc3VjY2Vzc1wiPnt7IGVudHJ5LmxldmVsX25hbWUgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJlbnRyeS5sZXZlbCA9PSAzMDBcIiBjbGFzcz1cImJhZGdlIGJhZGdlLS13YXJuaW5nXCI+e3sgZW50cnkubGV2ZWxfbmFtZSB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImVudHJ5LmxldmVsID09IDQwMFwiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLWRhbmdlclwiPnt7IGVudHJ5LmxldmVsX25hbWUgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwidy0yLzEyXCI+XG5cdFx0XHRcdFx0XHRcdHt7IGVudHJ5LmhhcHBlbmVkIH19XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHQ8L3RhYmxlPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiB2LWlmPVwiISByZWFkeVwiIGNsYXNzPVwidy1mdWxsIHRleHQtY2VudGVyIHAtNVwiPlxuXHRcdFx0PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdjaXJjbGUtbm90Y2gnXVwiIGNsYXNzPVwiZmEtc3BpbiBtci0zXCI+PC9mYS1pY29uPiBMb2FkaW5nIGxvZ3MuLi5cblx0XHQ8L2Rpdj5cblx0PC9wLW1vZGFsPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7fSxcblx0XHRcdFx0ZW50cmllczogW10sXG5cdFx0XHRcdGVudHJpZXNQYWdlOiAxLFxuXHRcdFx0XHRlbnRyaWVzUGVyUGFnZTogMTAwLFxuXHRcdFx0XHRuZXdFbnRyaWVzVGltZW91dDogbnVsbCxcbiAgICAgICAgICAgICAgICBuZXdFbnRyaWVzVGltZXI6IDI1MDAsXG4gICAgICAgICAgICAgICAgcmVhZHk6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHByb3BzOiB7XG5cdFx0XHR0aXRsZToge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICdMb2dzJ1xuXHRcdFx0fSxcblx0XHRcdGVudHJ5SWQ6IHtcblx0XHRcdFx0dHlwZTogTnVtYmVyfEJvb2xlYW4sXG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRlbmRwb2ludDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBgL2FwaS9pbXBvcnRzL2xvZ3MvJHt0aGlzLmVudHJ5SWR9P3BhZ2U9JHt0aGlzLmVudHJpZXNQYWdlfSZsaW1pdD0ke3RoaXMuZW50cmllc1BlclBhZ2V9YFxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR3YXRjaDoge1xuXHRcdFx0ZW50cnlJZDogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMubmV3RW50cmllc1RpbWVvdXQpXG5cblx0XHRcdFx0aWYgKHZhbHVlICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRoaXMuZW50cmllcyA9IFtdXG5cdFx0XHRcdFx0dGhpcy5lbnRyaWVzUGFnZSA9IDFcblx0XHRcdFx0XHR0aGlzLnJlYWR5ID0gZmFsc2VcblxuXHRcdFx0XHRcdHRoaXMubG9hZEVudHJpZXMoKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGxvYWRFbnRyaWVzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dGhpcy5uZXdFbnRyaWVzVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGF4aW9zLmdldCh0aGlzLmVuZHBvaW50KVxuXHRcdFx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLnJlYWR5ID0gdHJ1ZVxuXHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEgID0gcmVzcG9uc2UuZGF0YS5kYXRhXG5cblx0XHRcdFx0XHRcdFx0Ly8gT25seSBsb2FkIG5ldyBlbnRyaWVzIGlmIHRoZXkgZXhpc3QuLlxuXHRcdFx0XHRcdFx0XHRpZiAodGhpcy5lbnRyaWVzUGFnZSA8PSByZXNwb25zZS5kYXRhLmRhdGEubG9ncy5wYWdlcykge1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGxvZ3MgPSBfLm1hcChyZXNwb25zZS5kYXRhLmRhdGEubG9ncy5kYXRhLCBsb2cgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0bG9nWydjb250ZXh0J10gPSBfLnNpemUobG9nWydjb250ZXh0J10pID4gMCA/IF8obG9nWydjb250ZXh0J10pLnZhbHVlKCkgOiBudWxsXG5cblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBsb2dcblx0XHRcdFx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZW50cmllcyAgICAgPSBsb2dzLmNvbmNhdCh0aGlzLmVudHJpZXMpXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5lbnRyaWVzUGFnZSA9IHRoaXMuZW50cmllc1BhZ2UgKyAxXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0XHR0aGlzLmxvYWRFbnRyaWVzKClcblx0XHRcdFx0fSwgdGhpcy5uZXdFbnRyaWVzVGltZXIpXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGRlc3Ryb3llZCgpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLm5ld0VudHJpZXNUaW1lb3V0KVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuXHRcdFx0PGFwcC10aXRsZSBpY29uPVwic2hpcFwiPkltcG9ydGVyPC9hcHAtdGl0bGU+XG5cdFx0PC9wb3J0YWw+XG5cblx0XHQ8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuXHRcdFx0PHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ2ltcG9ydGVyJyB9XCIgY2xhc3M9XCJidXR0b24gbXItM1wiPkdvIEJhY2s8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgQGNsaWNrPVwicXVldWUoJHJvdXRlLnBhcmFtcy5pbXBvcnRlcilcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIj5SdW4gSW1wb3J0PC9idXR0b24+XG5cdFx0PC9wb3J0YWw+XG5cblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cblx0XHRcdFx0PHRhYmxlPlxuXHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cInctMi8xMlwiPlNjaGVkdWxlZDwvdGg+XG5cdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJ3LTUvMTJcIj5Qcm9ncmVzczwvdGg+XG5cdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJ3LTMvMTJcIj5TdGF0dXM8L3RoPlxuXHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwidy0yLzEyXCI+PC90aD5cblx0XHRcdFx0XHQ8L3RoZWFkPlxuXHRcdFx0XHRcdDx0Ym9keT5cblx0XHRcdFx0XHRcdDx0ciBjbGFzcz1cInctZnVsbFwiIHYtZm9yPVwiKGVudHJ5LCBpbmRleCkgaW4gZW50cmllc1wiIDprZXk9XCJpbmRleFwiPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3sgZW50cnkuaGFwcGVuZWQgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwiZW50cnkuc3RhdHVzID09ICdzZXR1cCdcIiBjbGFzcz1cInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJiZy1wcmltYXJ5LTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyBlbnRyeS5wcm9ncmVzcyArICclJ1wiPnt7IGVudHJ5LnByb2dyZXNzIH19JTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cImVudHJ5LnN0YXR1cyA9PSAnY29tcGxldGUnXCIgY2xhc3M9XCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmctc3VjY2Vzcy01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIgOnN0eWxlPVwiJ3dpZHRoOiAnICsgZW50cnkucHJvZ3Jlc3MgKyAnJSdcIj57eyBlbnRyeS5wcm9ncmVzcyB9fSU8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJlbnRyeS5zdGF0dXMgPT0gJ2ZhaWxlZCdcIiBjbGFzcz1cInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJiZy1kYW5nZXItNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiIDpzdHlsZT1cIid3aWR0aDogJyArIGVudHJ5LnByb2dyZXNzICsgJyUnXCI+e3sgZW50cnkucHJvZ3Jlc3MgfX0lPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwiZW50cnkuc3RhdHVzID09ICdydW5uaW5nJ1wiIGNsYXNzPVwic2hhZG93IHctZnVsbCBiZy13YXJuaW5nLTEwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJnLXdhcm5pbmctNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiIDpzdHlsZT1cIid3aWR0aDogJyArIGVudHJ5LnByb2dyZXNzICsgJyUnXCI+e3sgZW50cnkucHJvZ3Jlc3MgfX0lPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiZW50cnkuc3RhdHVzID09ICdzZXR1cCdcIiBjbGFzcz1cImJhZGdlIGJhZGdlLS1wcmltYXJ5XCI+U2V0dXA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImVudHJ5LnN0YXR1cyA9PSAnY29tcGxldGUnXCIgY2xhc3M9XCJiYWRnZSBiYWRnZS0tc3VjY2Vzc1wiPkNvbXBsZXRlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJlbnRyeS5zdGF0dXMgPT0gJ2ZhaWxlZCdcIiBjbGFzcz1cImJhZGdlIGJhZGdlLS1kYW5nZXJcIj5GYWlsZWQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImVudHJ5LnN0YXR1cyA9PSAncnVubmluZydcIiBjbGFzcz1cImJhZGdlIGJhZGdlLS13YXJuaW5nXCI+SW4gUHJvZ3Jlc3MuLi48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwiZW50cnlJZCA9IGVudHJ5LmlkXCI+VmlldyBsb2c8L3AtYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0XG5cdFx0PGxvZy1tb2RhbCA6ZW50cnlJZD1cImVudHJ5SWRcIiA6dGl0bGU9XCInSW1wb3J0IExvZ3MgLSAnICsgZGF0YS5uYW1lXCI+PC9sb2ctbW9kYWw+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IExvZ01vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW1wb3J0ZXIvTG9nTW9kYWwudnVlJ1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogJ1ZpZXcgSW1wb3J0J1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblx0XHR9LFxuXHRcdFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkYXRhOiB7fSxcblx0XHRcdFx0ZW50cmllczogW10sXG5cdFx0XHRcdG5ld0VudHJpZXNUaW1lb3V0OiBudWxsLFxuICAgICAgICAgICAgICAgIG5ld0VudHJpZXNUaW1lcjogNTAwMCxcblx0XHRcdFx0ZW50cnlJZDogZmFsc2UsXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdCdsb2ctbW9kYWwnOiBMb2dNb2RhbFxuXHRcdH0sXG5cblx0XHRjb21wdXRlZDoge1xuXHRcdFx0c2hvdzoge1xuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzLmVudHJ5SWQgIT09IGZhbHNlXG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0c2V0OiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRcdHRoaXMuZW50cnlJZCA9IHZhbHVlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0d2F0Y2g6IHtcblx0XHRcdGVudHJ5SWQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLm5ld0VudHJpZXNUaW1lb3V0KVxuXG5cdFx0XHRcdGlmICh2YWx1ZSA9PT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLmxvYWRFbnRyaWVzKClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHRsb2FkRW50cmllcygpIHtcblx0XHRcdFx0YXhpb3MuZ2V0KGAvYXBpL2ltcG9ydHMvJHt0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5pbXBvcnRlcn1gKVxuXHRcdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuZGF0YSAgICA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuXHRcdFx0XHRcdFx0dGhpcy5lbnRyaWVzID0gcmVzcG9uc2UuZGF0YS5kYXRhLmxvZ3Ncblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdHRoaXMubmV3RW50cmllc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHR0aGlzLmxvYWRFbnRyaWVzKClcblx0XHRcdFx0fSwgdGhpcy5uZXdFbnRyaWVzVGltZXIpXG5cdFx0XHR9LFxuXG5cdFx0XHRxdWV1ZShpZCkge1xuXHRcdFx0XHRheGlvcy5wb3N0KGAvYXBpL2ltcG9ydHMvcXVldWUvJHtpZH1gKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnSW1wb3J0IGhhcyBiZWVuIGFkZGVkIHRvIHRoZSBxdWV1ZS4nLCAnc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgIH0pO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG5cdFx0XHRuZXh0KGZ1bmN0aW9uKHZtKSB7XG5cdFx0XHRcdHZtLmxvYWRFbnRyaWVzKClcblx0XHRcdH0pXG5cdFx0fSxcblxuXHRcdGJlZm9yZVJvdXRlTGVhdmUgKHRvLCBmcm9tLCBuZXh0KSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5uZXdFbnRyaWVzVGltZW91dClcblx0XHRcdG5leHQoKVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInAtbW9kYWxcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJoLXNjcmVlblwiLFxuICAgICAgYXR0cnM6IHtcbiAgICAgICAgbmFtZTogXCJsb2ctbW9kYWxcIixcbiAgICAgICAgdGl0bGU6IF92bS50aXRsZSxcbiAgICAgICAgXCJuby1mb290ZXJcIjogXCJcIixcbiAgICAgICAgXCJleHRyYS1sYXJnZVwiOiBcIlwiXG4gICAgICB9LFxuICAgICAgbW9kZWw6IHtcbiAgICAgICAgdmFsdWU6IF92bS4kcGFyZW50LnNob3csXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICBfdm0uJHNldChfdm0uJHBhcmVudCwgXCJzaG93XCIsICQkdilcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCIkcGFyZW50LnNob3dcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLnJlYWR5XG4gICAgICAgID8gX2MoXCJ0YWJsZVwiLCBbXG4gICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMi8xMlwiIH0sIFtfdm0uX3YoXCJTY2hlZHVsZWRcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctOC8xMlwiIH0sIFtfdm0uX3YoXCJQcm9ncmVzc1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyXCIgfSwgW192bS5fdihcIlN0YXR1c1wiKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRib2R5XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YS5oYXBwZW5lZCkpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRhLnN0YXR1cyA9PSBcInNldHVwXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXByaW1hcnktNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6IFwiICsgX3ZtLmRhdGEucHJvZ3Jlc3MgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRhdGEucHJvZ3Jlc3MpICsgXCIlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRhLnN0YXR1cyA9PSBcImNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXN1Y2Nlc3MtNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6IFwiICsgX3ZtLmRhdGEucHJvZ3Jlc3MgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRhdGEucHJvZ3Jlc3MpICsgXCIlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRhLnN0YXR1cyA9PSBcImZhaWxlZFwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy13YXJuaW5nLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOiBcIiArIF92bS5kYXRhLnByb2dyZXNzICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLnByb2dyZXNzKSArIFwiJVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZGF0YS5zdGF0dXMgPT0gXCJydW5uaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXdhcm5pbmctNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6IFwiICsgX3ZtLmRhdGEucHJvZ3Jlc3MgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRhdGEucHJvZ3Jlc3MpICsgXCIlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRhLnN0YXR1cyA9PSBcInNldHVwXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0tcHJpbWFyeVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNvbXBsZXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZGF0YS5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtLXN1Y2Nlc3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb21wbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmRhdGEuc3RhdHVzID09IFwiZmFpbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0tZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRmFpbGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZGF0YS5zdGF0dXMgPT0gXCJydW5uaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0td2FybmluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkluIFByb2dyZXNzLi4uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnJlYWR5XG4gICAgICAgID8gX2MoXCJ0YWJsZVwiLCBbXG4gICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctOC8xMlwiIH0sIFtfdm0uX3YoXCJNZXNzYWdlXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTIvMTJcIiB9LCBbX3ZtLl92KFwiTGV2ZWxcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMi8xMlwiIH0sIFtfdm0uX3YoXCJIYXBwZW5lZFwiKV0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwib3ZlcmZsb3cteS1hdXRvXCIsIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIzMHJlbVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidGFibGVcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5lbnRyaWVzLCBmdW5jdGlvbihlbnRyeSwga2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGtleSwgc3RhdGljQ2xhc3M6IFwidy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInctOC8xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGVudHJ5Lm1lc3NhZ2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuY29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGVudHJ5LmNvbnRleHQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlYWQgbW9yZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5sZXZlbCA9PSAyMDBcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS1pbmZvXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGVudHJ5LmxldmVsX25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5sZXZlbCA9PSAyNTBcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGVudHJ5LmxldmVsX25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5sZXZlbCA9PSAzMDBcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS13YXJuaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGVudHJ5LmxldmVsX25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5sZXZlbCA9PSA0MDBcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoZW50cnkubGV2ZWxfbmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTIvMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFwiICsgX3ZtLl9zKGVudHJ5LmhhcHBlbmVkKSArIFwiXFxuXFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgIV92bS5yZWFkeVxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsIHRleHQtY2VudGVyIHAtNVwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtc3BpbiBtci0zXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwiY2lyY2xlLW5vdGNoXCJdIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBMb2FkaW5nIGxvZ3MuLi5cXG5cXHRcIilcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcInNoaXBcIiB9IH0sIFtfdm0uX3YoXCJJbXBvcnRlclwiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBtci0zXCIsIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiaW1wb3J0ZXJcIiB9IH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBCYWNrXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucXVldWUoX3ZtLiRyb3V0ZS5wYXJhbXMuaW1wb3J0ZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlJ1biBJbXBvcnRcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwidGFibGVcIiwgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZW50cmllcywgZnVuY3Rpb24oZW50cnksIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGVudHJ5LmhhcHBlbmVkKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc3RhdHVzID09IFwic2V0dXBcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2hhZG93IHctZnVsbCBiZy13YXJuaW5nLTEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctcHJpbWFyeS01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOiBcIiArIGVudHJ5LnByb2dyZXNzICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhlbnRyeS5wcm9ncmVzcykgKyBcIiVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc3RhdHVzID09IFwiY29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2hhZG93IHctZnVsbCBiZy13YXJuaW5nLTEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctc3VjY2Vzcy01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOiBcIiArIGVudHJ5LnByb2dyZXNzICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhlbnRyeS5wcm9ncmVzcykgKyBcIiVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc3RhdHVzID09IFwiZmFpbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLWRhbmdlci01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOiBcIiArIGVudHJ5LnByb2dyZXNzICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhlbnRyeS5wcm9ncmVzcykgKyBcIiVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc3RhdHVzID09IFwicnVubmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy13YXJuaW5nLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6IFwiICsgZW50cnkucHJvZ3Jlc3MgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGVudHJ5LnByb2dyZXNzKSArIFwiJVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc3RhdHVzID09IFwic2V0dXBcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtLXByaW1hcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIlNldHVwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnN0YXR1cyA9PSBcImNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb21wbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5zdGF0dXMgPT0gXCJmYWlsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtLWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiRmFpbGVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnN0YXR1cyA9PSBcInJ1bm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtLXdhcm5pbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkluIFByb2dyZXNzLi4uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW50cnlJZCA9IGVudHJ5LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlZpZXcgbG9nXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwibG9nLW1vZGFsXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgZW50cnlJZDogX3ZtLmVudHJ5SWQsIHRpdGxlOiBcIkltcG9ydCBMb2dzIC0gXCIgKyBfdm0uZGF0YS5uYW1lIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMi8xMlwiIH0sIFtfdm0uX3YoXCJTY2hlZHVsZWRcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy01LzEyXCIgfSwgW192bS5fdihcIlByb2dyZXNzXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMy8xMlwiIH0sIFtfdm0uX3YoXCJTdGF0dXNcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyXCIgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9nTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiNjAwYjJhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9nTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbmNtcy12Ni9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYjYwMGIyYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYjYwMGIyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYjYwMGIyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9nTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiNjAwYjJhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFiNjAwYjJhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9Mb2dNb2RhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9nTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiNjAwYjJhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYTkwZTdkYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2ZhOTBlN2RhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ZhOTBlN2RhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ZhOTBlN2RhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYTkwZTdkYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmYTkwZTdkYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL1ZpZXcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYTkwZTdkYSZcIiJdLCJzb3VyY2VSb290IjoiIn0=