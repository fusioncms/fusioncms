(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTG9nTW9kYWwudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvVmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTG9nTW9kYWwudnVlPzM5N2YiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL1ZpZXcudnVlPzE1ZTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTG9nTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0xvZ01vZGFsLnZ1ZT9lMzg3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0xvZ01vZGFsLnZ1ZT9iYTI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9JbXBvcnRlci9WaWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvVmlldy52dWU/NGQwMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvVmlldy52dWU/MjRmNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0VBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLGlCQUZBO0FBR0Esb0JBSEE7QUFJQSx5QkFKQTtBQUtBLDZCQUxBO0FBTUEsMkJBTkE7QUFPQTtBQVBBO0FBU0EsR0FYQTtBQWFBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0EsNEJBREE7QUFFQTtBQUZBO0FBTEEs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O0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy8xNC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHAtbW9kYWwgY2xhc3M9XCJoLXNjcmVlblwiIG5hbWU9XCJsb2ctbW9kYWxcIiB2LW1vZGVsPVwiJHBhcmVudC5zaG93XCIgOnRpdGxlPVwidGl0bGVcIiBuby1mb290ZXIgZXh0cmEtbGFyZ2U+XG5cdFx0PHRhYmxlIHYtaWY9XCJyZWFkeVwiPlxuXHRcdFx0PHRoZWFkPlxuXHRcdFx0XHQ8dGggY2xhc3M9XCJ3LTIvMTJcIj5TY2hlZHVsZWQ8L3RoPlxuXHRcdFx0XHQ8dGggY2xhc3M9XCJ3LTgvMTJcIj5Qcm9ncmVzczwvdGg+XG5cdFx0XHRcdDx0aCBjbGFzcz1cInctMi8xMlwiPlN0YXR1czwvdGg+XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdFx0PHRib2R5PlxuXHRcdFx0XHQ8dHI+XG5cdFx0XHRcdFx0PHRkPnt7IGRhdGEuaGFwcGVuZWQgfX08L3RkPlxuXHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cImRhdGEuc3RhdHVzID09ICdzZXR1cCdcIiBjbGFzcz1cInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJnLXByaW1hcnktNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiIDpzdHlsZT1cIid3aWR0aDogJyArIGRhdGEucHJvZ3Jlc3MgKyAnJSdcIj57eyBkYXRhLnByb2dyZXNzIH19JTwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJkYXRhLnN0YXR1cyA9PSAnY29tcGxldGUnXCIgY2xhc3M9XCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJiZy1zdWNjZXNzLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyBkYXRhLnByb2dyZXNzICsgJyUnXCI+e3sgZGF0YS5wcm9ncmVzcyB9fSU8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwiZGF0YS5zdGF0dXMgPT0gJ2ZhaWxlZCdcIiBjbGFzcz1cInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJnLXdhcm5pbmctNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiIDpzdHlsZT1cIid3aWR0aDogJyArIGRhdGEucHJvZ3Jlc3MgKyAnJSdcIj57eyBkYXRhLnByb2dyZXNzIH19JTwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJkYXRhLnN0YXR1cyA9PSAncnVubmluZydcIiBjbGFzcz1cInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJnLXdhcm5pbmctNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiIDpzdHlsZT1cIid3aWR0aDogJyArIGRhdGEucHJvZ3Jlc3MgKyAnJSdcIj57eyBkYXRhLnByb2dyZXNzIH19JTwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiZGF0YS5zdGF0dXMgPT0gJ3NldHVwJ1wiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLXByaW1hcnlcIj5Db21wbGV0ZTwvc3Bhbj5cblx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJkYXRhLnN0YXR1cyA9PSAnY29tcGxldGUnXCIgY2xhc3M9XCJiYWRnZSBiYWRnZS0tc3VjY2Vzc1wiPkNvbXBsZXRlPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImRhdGEuc3RhdHVzID09ICdmYWlsZWQnXCIgY2xhc3M9XCJiYWRnZSBiYWRnZS0tZGFuZ2VyXCI+RmFpbGVkPC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImRhdGEuc3RhdHVzID09ICdydW5uaW5nJ1wiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLXdhcm5pbmdcIj5JbiBQcm9ncmVzcy4uLjwvc3Bhbj5cblx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0PC90Ym9keT5cblx0XHQ8L3RhYmxlPlxuXG5cdFx0PHRhYmxlIHYtaWY9XCJyZWFkeVwiPlxuXHRcdFx0PHRoZWFkPlxuXHRcdFx0XHQ8dGggY2xhc3M9XCJ3LTgvMTJcIj5NZXNzYWdlPC90aD5cblx0XHRcdFx0PHRoIGNsYXNzPVwidy0yLzEyXCI+TGV2ZWw8L3RoPlxuXHRcdFx0XHQ8dGggY2xhc3M9XCJ3LTIvMTJcIj5IYXBwZW5lZDwvdGg+XG5cdFx0XHQ8L3RoZWFkPlxuXHRcdDwvdGFibGU+XG5cblx0XHQ8ZGl2IGNsYXNzPVwib3ZlcmZsb3cteS1hdXRvXCIgc3R5bGU9XCJoZWlnaHQ6IDMwcmVtO1wiPlxuXHRcdFx0PHRhYmxlPlxuXHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0PHRyIGNsYXNzPVwidy1mdWxsXCIgdi1mb3I9XCIoZW50cnksIGtleSkgaW4gZW50cmllc1wiIDprZXk9XCJrZXlcIj5cblx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cInctOC8xMlwiPlxuXHRcdFx0XHRcdFx0XHR7eyBlbnRyeS5tZXNzYWdlIH19XG5cdFx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cImVudHJ5LmNvbnRleHRcIiB2LXRleHQ9XCJlbnRyeS5jb250ZXh0XCIgY2xhc3M9XCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5SZWFkIG1vcmU8L2Rpdj5cblx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHQ8dGQgY2xhc3M9XCJ3LTIvMTJcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImVudHJ5LmxldmVsID09IDIwMFwiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLWluZm9cIj57eyBlbnRyeS5sZXZlbF9uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiZW50cnkubGV2ZWwgPT0gMjUwXCIgY2xhc3M9XCJiYWRnZSBiYWRnZS0tc3VjY2Vzc1wiPnt7IGVudHJ5LmxldmVsX25hbWUgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJlbnRyeS5sZXZlbCA9PSAzMDBcIiBjbGFzcz1cImJhZGdlIGJhZGdlLS13YXJuaW5nXCI+e3sgZW50cnkubGV2ZWxfbmFtZSB9fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImVudHJ5LmxldmVsID09IDQwMFwiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLWRhbmdlclwiPnt7IGVudHJ5LmxldmVsX25hbWUgfX08L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwidy0yLzEyXCI+XG5cdFx0XHRcdFx0XHRcdHt7IGVudHJ5LmhhcHBlbmVkIH19XG5cdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHQ8L3RhYmxlPlxuXHRcdDwvZGl2PlxuXG5cdFx0PGRpdiB2LWlmPVwiISByZWFkeVwiIGNsYXNzPVwidy1mdWxsIHRleHQtY2VudGVyIHAtNVwiPlxuXHRcdFx0PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdzcGlubmVyLXRoaXJkJ11cIiBjbGFzcz1cImZhLXNwaW4gbXItM1wiPjwvZmEtaWNvbj4gTG9hZGluZyBsb2dzLi4uXG5cdFx0PC9kaXY+XG5cdDwvcC1tb2RhbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YToge30sXG5cdFx0XHRcdGVudHJpZXM6IFtdLFxuXHRcdFx0XHRlbnRyaWVzUGFnZTogMSxcblx0XHRcdFx0ZW50cmllc1BlclBhZ2U6IDEwMCxcblx0XHRcdFx0bmV3RW50cmllc1RpbWVvdXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbmV3RW50cmllc1RpbWVyOiAyNTAwLFxuICAgICAgICAgICAgICAgIHJlYWR5OiBmYWxzZVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRwcm9wczoge1xuXHRcdFx0dGl0bGU6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnTG9ncydcblx0XHRcdH0sXG5cdFx0XHRlbnRyeUlkOiB7XG5cdFx0XHRcdHR5cGU6IE51bWJlcnxCb29sZWFuLFxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRjb21wdXRlZDoge1xuXHRcdFx0ZW5kcG9pbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gYC9hcGkvaW1wb3J0cy9sb2dzLyR7dGhpcy5lbnRyeUlkfT9wYWdlPSR7dGhpcy5lbnRyaWVzUGFnZX0mbGltaXQ9JHt0aGlzLmVudHJpZXNQZXJQYWdlfWBcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0d2F0Y2g6IHtcblx0XHRcdGVudHJ5SWQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCh0aGlzLm5ld0VudHJpZXNUaW1lb3V0KVxuXG5cdFx0XHRcdGlmICh2YWx1ZSAhPT0gZmFsc2UpIHtcblx0XHRcdFx0XHR0aGlzLmVudHJpZXMgPSBbXVxuXHRcdFx0XHRcdHRoaXMuZW50cmllc1BhZ2UgPSAxXG5cdFx0XHRcdFx0dGhpcy5yZWFkeSA9IGZhbHNlXG5cblx0XHRcdFx0XHR0aGlzLmxvYWRFbnRyaWVzKClcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHRsb2FkRW50cmllczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHRoaXMubmV3RW50cmllc1RpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0XHRheGlvcy5nZXQodGhpcy5lbmRwb2ludClcblx0XHRcdFx0XHRcdC50aGVuKHJlc3BvbnNlID0+IHtcblx0XHRcdFx0XHRcdFx0dGhpcy5yZWFkeSA9IHRydWVcblx0XHRcdFx0XHRcdFx0dGhpcy5kYXRhICA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuXG5cdFx0XHRcdFx0XHRcdC8vIE9ubHkgbG9hZCBuZXcgZW50cmllcyBpZiB0aGV5IGV4aXN0Li5cblx0XHRcdFx0XHRcdFx0aWYgKHRoaXMuZW50cmllc1BhZ2UgPD0gcmVzcG9uc2UuZGF0YS5kYXRhLmxvZ3MucGFnZXMpIHtcblx0XHRcdFx0XHRcdFx0XHRjb25zdCBsb2dzID0gXy5tYXAocmVzcG9uc2UuZGF0YS5kYXRhLmxvZ3MuZGF0YSwgbG9nID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGxvZ1snY29udGV4dCddID0gXy5zaXplKGxvZ1snY29udGV4dCddKSA+IDAgPyBfKGxvZ1snY29udGV4dCddKS52YWx1ZSgpIDogbnVsbFxuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbG9nXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHRcdFx0XHR0aGlzLmVudHJpZXMgICAgID0gbG9ncy5jb25jYXQodGhpcy5lbnRyaWVzKVxuXHRcdFx0XHRcdFx0XHRcdHRoaXMuZW50cmllc1BhZ2UgPSB0aGlzLmVudHJpZXNQYWdlICsgMVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0dGhpcy5sb2FkRW50cmllcygpXG5cdFx0XHRcdH0sIHRoaXMubmV3RW50cmllc1RpbWVyKVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRkZXN0cm95ZWQoKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5uZXdFbnRyaWVzVGltZW91dClcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8cG9ydGFsIHRvPVwidGl0bGVcIj5cblx0XHRcdDxhcHAtdGl0bGUgaWNvbj1cInNoaXBcIj5JbXBvcnRlcjwvYXBwLXRpdGxlPlxuXHRcdDwvcG9ydGFsPlxuXG5cdFx0PHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cblx0XHRcdDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdpbXBvcnRlcicgfVwiIGNsYXNzPVwiYnV0dG9uIG1yLTNcIj5HbyBCYWNrPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cInF1ZXVlKCRyb3V0ZS5wYXJhbXMuaW1wb3J0ZXIpXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCI+UnVuIEltcG9ydDwvYnV0dG9uPlxuXHRcdDwvcG9ydGFsPlxuXG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG5cdFx0XHRcdDx0YWJsZT5cblx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJ3LTIvMTJcIj5TY2hlZHVsZWQ8L3RoPlxuXHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwidy01LzEyXCI+UHJvZ3Jlc3M8L3RoPlxuXHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwidy0zLzEyXCI+U3RhdHVzPC90aD5cblx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cInctMi8xMlwiPjwvdGg+XG5cdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHQ8dHIgY2xhc3M9XCJ3LWZ1bGxcIiB2LWZvcj1cIihlbnRyeSwgaW5kZXgpIGluIGVudHJpZXNcIiA6a2V5PVwiaW5kZXhcIj5cblx0XHRcdFx0XHRcdFx0PHRkPnt7IGVudHJ5LmhhcHBlbmVkIH19PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cImVudHJ5LnN0YXR1cyA9PSAnc2V0dXAnXCIgY2xhc3M9XCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmctcHJpbWFyeS01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIgOnN0eWxlPVwiJ3dpZHRoOiAnICsgZW50cnkucHJvZ3Jlc3MgKyAnJSdcIj57eyBlbnRyeS5wcm9ncmVzcyB9fSU8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJlbnRyeS5zdGF0dXMgPT0gJ2NvbXBsZXRlJ1wiIGNsYXNzPVwic2hhZG93IHctZnVsbCBiZy13YXJuaW5nLTEwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJnLXN1Y2Nlc3MtNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiIDpzdHlsZT1cIid3aWR0aDogJyArIGVudHJ5LnByb2dyZXNzICsgJyUnXCI+e3sgZW50cnkucHJvZ3Jlc3MgfX0lPC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwiZW50cnkuc3RhdHVzID09ICdmYWlsZWQnXCIgY2xhc3M9XCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmctZGFuZ2VyLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyBlbnRyeS5wcm9ncmVzcyArICclJ1wiPnt7IGVudHJ5LnByb2dyZXNzIH19JTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cImVudHJ5LnN0YXR1cyA9PSAncnVubmluZydcIiBjbGFzcz1cInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJiZy13YXJuaW5nLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyBlbnRyeS5wcm9ncmVzcyArICclJ1wiPnt7IGVudHJ5LnByb2dyZXNzIH19JTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImVudHJ5LnN0YXR1cyA9PSAnc2V0dXAnXCIgY2xhc3M9XCJiYWRnZSBiYWRnZS0tcHJpbWFyeVwiPlNldHVwPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJlbnRyeS5zdGF0dXMgPT0gJ2NvbXBsZXRlJ1wiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLXN1Y2Nlc3NcIj5Db21wbGV0ZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiZW50cnkuc3RhdHVzID09ICdmYWlsZWQnXCIgY2xhc3M9XCJiYWRnZSBiYWRnZS0tZGFuZ2VyXCI+RmFpbGVkPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIHYtaWY9XCJlbnRyeS5zdGF0dXMgPT0gJ3J1bm5pbmcnXCIgY2xhc3M9XCJiYWRnZSBiYWRnZS0td2FybmluZ1wiPkluIFByb2dyZXNzLi4uPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0PHAtYnV0dG9uIEBjbGljaz1cImVudHJ5SWQgPSBlbnRyeS5pZFwiPlZpZXcgbG9nPC9wLWJ1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0PC90YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdFxuXHRcdDxsb2ctbW9kYWwgOmVudHJ5SWQ9XCJlbnRyeUlkXCIgOnRpdGxlPVwiJ0ltcG9ydCBMb2dzIC0gJyArIGRhdGEubmFtZVwiPjwvbG9nLW1vZGFsPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBMb2dNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ltcG9ydGVyL0xvZ01vZGFsLnZ1ZSdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0aGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6ICdWaWV3IEltcG9ydCdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cdFx0fSxcblx0XHRcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YToge30sXG5cdFx0XHRcdGVudHJpZXM6IFtdLFxuXHRcdFx0XHRuZXdFbnRyaWVzVGltZW91dDogbnVsbCxcbiAgICAgICAgICAgICAgICBuZXdFbnRyaWVzVGltZXI6IDUwMDAsXG5cdFx0XHRcdGVudHJ5SWQ6IGZhbHNlLFxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHQnbG9nLW1vZGFsJzogTG9nTW9kYWxcblx0XHR9LFxuXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHNob3c6IHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5lbnRyeUlkICE9PSBmYWxzZVxuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdHNldDogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0XHR0aGlzLmVudHJ5SWQgPSB2YWx1ZVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHRlbnRyeUlkOiBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQodGhpcy5uZXdFbnRyaWVzVGltZW91dClcblxuXHRcdFx0XHRpZiAodmFsdWUgPT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0dGhpcy5sb2FkRW50cmllcygpXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0bG9hZEVudHJpZXMoKSB7XG5cdFx0XHRcdGF4aW9zLmdldChgL2FwaS9pbXBvcnRzLyR7dGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaW1wb3J0ZXJ9YClcblx0XHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgICAgPSByZXNwb25zZS5kYXRhLmRhdGFcblx0XHRcdFx0XHRcdHRoaXMuZW50cmllcyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5sb2dzXG5cdFx0XHRcdFx0fSlcblxuXHRcdFx0XHR0aGlzLm5ld0VudHJpZXNUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5sb2FkRW50cmllcygpXG5cdFx0XHRcdH0sIHRoaXMubmV3RW50cmllc1RpbWVyKVxuXHRcdFx0fSxcblxuXHRcdFx0cXVldWUoaWQpIHtcblx0XHRcdFx0YXhpb3MucG9zdChgL2FwaS9pbXBvcnRzL3F1ZXVlLyR7aWR9YCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ0ltcG9ydCBoYXMgYmVlbiBhZGRlZCB0byB0aGUgcXVldWUuJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0YmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuXHRcdFx0bmV4dChmdW5jdGlvbih2bSkge1xuXHRcdFx0XHR2bS5sb2FkRW50cmllcygpXG5cdFx0XHR9KVxuXHRcdH0sXG5cblx0XHRiZWZvcmVSb3V0ZUxlYXZlICh0bywgZnJvbSwgbmV4dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMubmV3RW50cmllc1RpbWVvdXQpXG5cdFx0XHRuZXh0KClcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJwLW1vZGFsXCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwiaC1zY3JlZW5cIixcbiAgICAgIGF0dHJzOiB7XG4gICAgICAgIG5hbWU6IFwibG9nLW1vZGFsXCIsXG4gICAgICAgIHRpdGxlOiBfdm0udGl0bGUsXG4gICAgICAgIFwibm8tZm9vdGVyXCI6IFwiXCIsXG4gICAgICAgIFwiZXh0cmEtbGFyZ2VcIjogXCJcIlxuICAgICAgfSxcbiAgICAgIG1vZGVsOiB7XG4gICAgICAgIHZhbHVlOiBfdm0uJHBhcmVudC5zaG93LFxuICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgX3ZtLiRzZXQoX3ZtLiRwYXJlbnQsIFwic2hvd1wiLCAkJHYpXG4gICAgICAgIH0sXG4gICAgICAgIGV4cHJlc3Npb246IFwiJHBhcmVudC5zaG93XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5yZWFkeVxuICAgICAgICA/IF9jKFwidGFibGVcIiwgW1xuICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTIvMTJcIiB9LCBbX3ZtLl92KFwiU2NoZWR1bGVkXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTgvMTJcIiB9LCBbX3ZtLl92KFwiUHJvZ3Jlc3NcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMi8xMlwiIH0sIFtfdm0uX3YoXCJTdGF0dXNcIildKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ0Ym9keVwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoX3ZtLmRhdGEuaGFwcGVuZWQpKV0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uZGF0YS5zdGF0dXMgPT0gXCJzZXR1cFwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1wcmltYXJ5LTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOiBcIiArIF92bS5kYXRhLnByb2dyZXNzICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLnByb2dyZXNzKSArIFwiJVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZGF0YS5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1zdWNjZXNzLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOiBcIiArIF92bS5kYXRhLnByb2dyZXNzICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLnByb2dyZXNzKSArIFwiJVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZGF0YS5zdGF0dXMgPT0gXCJmYWlsZWRcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2hhZG93IHctZnVsbCBiZy13YXJuaW5nLTEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctd2FybmluZy01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJ3aWR0aDogXCIgKyBfdm0uZGF0YS5wcm9ncmVzcyArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YS5wcm9ncmVzcykgKyBcIiVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmRhdGEuc3RhdHVzID09IFwicnVubmluZ1wiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy13YXJuaW5nLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOiBcIiArIF92bS5kYXRhLnByb2dyZXNzICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLnByb2dyZXNzKSArIFwiJVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uZGF0YS5zdGF0dXMgPT0gXCJzZXR1cFwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtLXByaW1hcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb21wbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmRhdGEuc3RhdHVzID09IFwiY29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiQ29tcGxldGVcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRhLnN0YXR1cyA9PSBcImZhaWxlZFwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtLWRhbmdlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZhaWxlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmRhdGEuc3RhdHVzID09IFwicnVubmluZ1wiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtLXdhcm5pbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJJbiBQcm9ncmVzcy4uLlwiKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5yZWFkeVxuICAgICAgICA/IF9jKFwidGFibGVcIiwgW1xuICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTgvMTJcIiB9LCBbX3ZtLl92KFwiTWVzc2FnZVwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyXCIgfSwgW192bS5fdihcIkxldmVsXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTIvMTJcIiB9LCBbX3ZtLl92KFwiSGFwcGVuZWRcIildKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm92ZXJmbG93LXktYXV0b1wiLCBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMzByZW1cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInRhYmxlXCIsIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZW50cmllcywgZnVuY3Rpb24oZW50cnksIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBrZXksIHN0YXRpY0NsYXNzOiBcInctZnVsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTgvMTJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhlbnRyeS5tZXNzYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LmNvbnRleHRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhlbnRyeS5jb250ZXh0KSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZWFkIG1vcmVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMi8xMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkubGV2ZWwgPT0gMjAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0taW5mb1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhlbnRyeS5sZXZlbF9uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnkubGV2ZWwgPT0gMjUwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0tc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhlbnRyeS5sZXZlbF9uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnkubGV2ZWwgPT0gMzAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0td2FybmluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhlbnRyeS5sZXZlbF9uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnkubGV2ZWwgPT0gNDAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0tZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGVudHJ5LmxldmVsX25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcIiArIF92bS5fcyhlbnRyeS5oYXBwZW5lZCkgKyBcIlxcblxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICFfdm0ucmVhZHlcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInctZnVsbCB0ZXh0LWNlbnRlciBwLTVcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLXNwaW4gbXItM1wiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcInNwaW5uZXItdGhpcmRcIl0gfVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIExvYWRpbmcgbG9ncy4uLlxcblxcdFwiKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwic2hpcFwiIH0gfSwgW192bS5fdihcIkltcG9ydGVyXCIpXSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIG1yLTNcIiwgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJpbXBvcnRlclwiIH0gfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIkdvIEJhY2tcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5xdWV1ZShfdm0uJHJvdXRlLnBhcmFtcy5pbXBvcnRlcilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiUnVuIEltcG9ydFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJ0YWJsZVwiLCBbXG4gICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5lbnRyaWVzLCBmdW5jdGlvbihlbnRyeSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcInctZnVsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoZW50cnkuaGFwcGVuZWQpKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5zdGF0dXMgPT0gXCJzZXR1cFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1wcmltYXJ5LTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6IFwiICsgZW50cnkucHJvZ3Jlc3MgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGVudHJ5LnByb2dyZXNzKSArIFwiJVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy1zdWNjZXNzLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6IFwiICsgZW50cnkucHJvZ3Jlc3MgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGVudHJ5LnByb2dyZXNzKSArIFwiJVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5zdGF0dXMgPT0gXCJmYWlsZWRcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2hhZG93IHctZnVsbCBiZy13YXJuaW5nLTEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctZGFuZ2VyLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6IFwiICsgZW50cnkucHJvZ3Jlc3MgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGVudHJ5LnByb2dyZXNzKSArIFwiJVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeS5zdGF0dXMgPT0gXCJydW5uaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXdhcm5pbmctNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJ3aWR0aDogXCIgKyBlbnRyeS5wcm9ncmVzcyArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoZW50cnkucHJvZ3Jlc3MpICsgXCIlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBlbnRyeS5zdGF0dXMgPT0gXCJzZXR1cFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0tcHJpbWFyeVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2V0dXBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc3RhdHVzID09IFwiY29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFkZ2UgYmFkZ2UtLXN1Y2Nlc3NcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNvbXBsZXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5LnN0YXR1cyA9PSBcImZhaWxlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0tZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGYWlsZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuc3RhdHVzID09IFwicnVubmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0td2FybmluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiSW4gUHJvZ3Jlc3MuLi5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lbnRyeUlkID0gZW50cnkuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiVmlldyBsb2dcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJsb2ctbW9kYWxcIiwge1xuICAgICAgICBhdHRyczogeyBlbnRyeUlkOiBfdm0uZW50cnlJZCwgdGl0bGU6IFwiSW1wb3J0IExvZ3MgLSBcIiArIF92bS5kYXRhLm5hbWUgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyXCIgfSwgW192bS5fdihcIlNjaGVkdWxlZFwiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTUvMTJcIiB9LCBbX3ZtLl92KFwiUHJvZ3Jlc3NcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0zLzEyXCIgfSwgW192bS5fdihcIlN0YXR1c1wiKV0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGhcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTIvMTJcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Mb2dNb2RhbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWI2MDBiMmEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTG9nTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Mb2dNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvd2Vic2l0ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYjYwMGIyYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYjYwMGIyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYjYwMGIyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9nTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiNjAwYjJhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFiNjAwYjJhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9Mb2dNb2RhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9nTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiNjAwYjJhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYTkwZTdkYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvd2Vic2l0ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmYTkwZTdkYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmYTkwZTdkYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmYTkwZTdkYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmE5MGU3ZGEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZmE5MGU3ZGEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9JbXBvcnRlci9WaWV3LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmE5MGU3ZGEmXCIiXSwic291cmNlUm9vdCI6IiJ9