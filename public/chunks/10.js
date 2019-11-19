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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: {},
      entries: [],
      entriesFrom: 0,
      entriesPerPage: 25,
      newEntriesTimeout: null,
      newEntriesTimer: 5000,
      ready: false
    };
  },
  props: {
    title: {
      type: String,
      "default": 'Logs'
    },
    logid: {
      type: Number | Boolean,
      required: true
    }
  },
  computed: {
    endpoint: function endpoint() {
      return "/api/imports/logs/".concat(this.logid, "?from=").concat(this.entriesFrom, "&limit=").concat(this.entriesPerPage);
    }
  },
  watch: {
    logid: function logid(value) {
      clearTimeout(this.newEntriesTimeout);

      if (value !== false) {
        this.entries = [];
        this.entriesFrom = 0;
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
          _this.data = response.data.data;
          _this.ready = true;

          var logs = _.map(response.data.data.logs.data, function (log) {
            log['context'] = _.size(log['context']) > 0 ? _(log['context']).value() : null;
            return log;
          });

          _this.entries = _this.entries.concat(logs);
          _this.entriesFrom = _this.entries.length;
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      data: {},
      logs: [],
      logid: false
    };
  },
  components: {
    'log-modal': _components_Importer_LogModal_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: {
    show: {
      get: function get() {
        return this.logid !== false;
      },
      set: function set(value) {
        this.logid = value;
      }
    }
  },
  methods: {
    loadEntries: function loadEntries() {
      var _this = this;

      axios.get("/api/imports/".concat(this.$router.currentRoute.params.importer)).then(function (response) {
        _this.data = response.data.data;
        _this.logs = response.data.data.logs;
      });
    },
    queue: function queue(id) {
      var _this2 = this;

      axios.post("/api/imports/queue/".concat(id)).then(function (response) {
        toast('Import has been added to the queue.', 'success');

        _this2.loadEntries();
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.loadEntries();
    });
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
                  _vm.data.status == "complete"
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
            ]),
            _vm._v(" "),
            _c(
              "tbody",
              _vm._l(_vm.entries, function(entry, key) {
                return _c("tr", { key: key, staticClass: "w-full" }, [
                  _c("td", [
                    _vm._v(
                      "\n\t\t\t\t\t" + _vm._s(entry.message) + "\n\t\t\t\t\t"
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
                  _c("td", [
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
                  _c("td", [_vm._v(_vm._s(entry.happened))])
                ])
              }),
              0
            )
          ])
        : _vm._e(),
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
              _vm._l(_vm.logs, function(log) {
                return _c("tr", { key: log.id, staticClass: "w-full" }, [
                  _c("td", [_vm._v(_vm._s(log.happened))]),
                  _vm._v(" "),
                  _c("td", [
                    log.status == "complete"
                      ? _c(
                          "div",
                          { staticClass: "shadow w-full bg-warning-100" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "bg-primary-500 text-xs leading-none py-1 text-center text-white",
                                style: "width: " + log.progress + "%"
                              },
                              [_vm._v(_vm._s(log.progress) + "%")]
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    log.status == "failed"
                      ? _c(
                          "div",
                          { staticClass: "shadow w-full bg-warning-100" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "bg-warning-500 text-xs leading-none py-1 text-center text-white",
                                style: "width: " + log.progress + "%"
                              },
                              [_vm._v(_vm._s(log.progress) + "%")]
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    log.status == "running"
                      ? _c(
                          "div",
                          { staticClass: "shadow w-full bg-warning-100" },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "bg-warning-500 text-xs leading-none py-1 text-center text-white",
                                style: "width: " + log.progress + "%"
                              },
                              [_vm._v(_vm._s(log.progress) + "%")]
                            )
                          ]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("td", [
                    log.status == "complete"
                      ? _c("span", { staticClass: "badge badge--success" }, [
                          _vm._v("Complete")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    log.status == "failed"
                      ? _c("span", { staticClass: "badge badge--danger" }, [
                          _vm._v("Failed")
                        ])
                      : _vm._e(),
                    _vm._v(" "),
                    log.status == "running"
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
                              _vm.logid = log.id
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
        attrs: { logid: _vm.logid, title: "Import Logs - " + _vm.data.name }
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
      _c("th", { staticClass: "w-6/12" }, [_vm._v("Progress")]),
      _vm._v(" "),
      _c("th", { staticClass: "w-2/12" }, [_vm._v("Status")]),
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
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LogModal_vue_vue_type_template_id_1b600b2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LogModal.vue?vue&type=template&id=1b600b2a& */ "./resources/js/components/Importer/LogModal.vue?vue&type=template&id=1b600b2a&");
/* harmony import */ var _LogModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LogModal.vue?vue&type=script&lang=js& */ "./resources/js/components/Importer/LogModal.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LogModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LogModal_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





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
/*! no static exports found */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTG9nTW9kYWwudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvVmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTG9nTW9kYWwudnVlPzM5N2YiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL1ZpZXcudnVlPzE1ZTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTG9nTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0xvZ01vZGFsLnZ1ZT9lMzg3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0xvZ01vZGFsLnZ1ZT9iYTI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9JbXBvcnRlci9WaWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvVmlldy52dWU/NGQwMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvVmlldy52dWU/MjRmNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZEQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGNBREE7QUFFQSxpQkFGQTtBQUdBLG9CQUhBO0FBSUEsd0JBSkE7QUFLQSw2QkFMQTtBQU1BLDJCQU5BO0FBT0E7QUFQQTtBQVNBLEdBWEE7QUFhQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFLQTtBQUNBLDRCQURBO0FBRUE7QUFGQTtBQUxBLEdBYkE7QUF3QkE7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QUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUE4TCxDQUFnQixvUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy8xMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHAtbW9kYWwgbmFtZT1cImxvZy1tb2RhbFwiIHYtbW9kZWw9XCIkcGFyZW50LnNob3dcIiA6dGl0bGU9XCJ0aXRsZVwiIG5vLWZvb3RlciBleHRyYS1sYXJnZT5cblx0XHQ8dGFibGUgdi1pZj1cInJlYWR5XCI+XG5cdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdDx0aCBjbGFzcz1cInctMi8xMlwiPlNjaGVkdWxlZDwvdGg+XG5cdFx0XHRcdDx0aCBjbGFzcz1cInctOC8xMlwiPlByb2dyZXNzPC90aD5cblx0XHRcdFx0PHRoIGNsYXNzPVwidy0yLzEyXCI+U3RhdHVzPC90aD5cblx0XHRcdDwvdGhlYWQ+XG5cdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdDx0cj5cblx0XHRcdFx0XHQ8dGQ+e3sgZGF0YS5oYXBwZW5lZCB9fTwvdGQ+XG5cdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwiZGF0YS5zdGF0dXMgPT0gJ2NvbXBsZXRlJ1wiIGNsYXNzPVwic2hhZG93IHctZnVsbCBiZy13YXJuaW5nLTEwMFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmctcHJpbWFyeS01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIgOnN0eWxlPVwiJ3dpZHRoOiAnICsgZGF0YS5wcm9ncmVzcyArICclJ1wiPnt7IGRhdGEucHJvZ3Jlc3MgfX0lPC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cImRhdGEuc3RhdHVzID09ICdmYWlsZWQnXCIgY2xhc3M9XCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJiZy13YXJuaW5nLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyBkYXRhLnByb2dyZXNzICsgJyUnXCI+e3sgZGF0YS5wcm9ncmVzcyB9fSU8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwiZGF0YS5zdGF0dXMgPT0gJ3J1bm5pbmcnXCIgY2xhc3M9XCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJiZy13YXJuaW5nLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIiA6c3R5bGU9XCInd2lkdGg6ICcgKyBkYXRhLnByb2dyZXNzICsgJyUnXCI+e3sgZGF0YS5wcm9ncmVzcyB9fSU8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImRhdGEuc3RhdHVzID09ICdjb21wbGV0ZSdcIiBjbGFzcz1cImJhZGdlIGJhZGdlLS1zdWNjZXNzXCI+Q29tcGxldGU8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiZGF0YS5zdGF0dXMgPT0gJ2ZhaWxlZCdcIiBjbGFzcz1cImJhZGdlIGJhZGdlLS1kYW5nZXJcIj5GYWlsZWQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwiZGF0YS5zdGF0dXMgPT0gJ3J1bm5pbmcnXCIgY2xhc3M9XCJiYWRnZSBiYWRnZS0td2FybmluZ1wiPkluIFByb2dyZXNzLi4uPC9zcGFuPlxuXHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdDwvdHI+XG5cdFx0XHQ8L3Rib2R5PlxuXHRcdDwvdGFibGU+XG5cblx0XHQ8dGFibGUgdi1pZj1cInJlYWR5XCI+XG5cdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdDx0aCBjbGFzcz1cInctOC8xMlwiPk1lc3NhZ2U8L3RoPlxuXHRcdFx0XHQ8dGggY2xhc3M9XCJ3LTIvMTJcIj5MZXZlbDwvdGg+XG5cdFx0XHRcdDx0aCBjbGFzcz1cInctMi8xMlwiPkhhcHBlbmVkPC90aD5cblx0XHRcdDwvdGhlYWQ+XG5cdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdDx0ciBjbGFzcz1cInctZnVsbFwiIHYtZm9yPVwiKGVudHJ5LCBrZXkpIGluIGVudHJpZXNcIiA6a2V5PVwia2V5XCI+XG5cdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0e3sgZW50cnkubWVzc2FnZSB9fVxuXHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwiZW50cnkuY29udGV4dFwiIHYtdGV4dD1cImVudHJ5LmNvbnRleHRcIiBjbGFzcz1cInRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlJlYWQgbW9yZTwvZGl2PlxuXHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImVudHJ5LmxldmVsID09IDIwMFwiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLWluZm9cIj57eyBlbnRyeS5sZXZlbF9uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImVudHJ5LmxldmVsID09IDI1MFwiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLXN1Y2Nlc3NcIj57eyBlbnRyeS5sZXZlbF9uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImVudHJ5LmxldmVsID09IDMwMFwiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLXdhcm5pbmdcIj57eyBlbnRyeS5sZXZlbF9uYW1lIH19PC9zcGFuPlxuXHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImVudHJ5LmxldmVsID09IDQwMFwiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLWRhbmdlclwiPnt7IGVudHJ5LmxldmVsX25hbWUgfX08L3NwYW4+XG5cdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHQ8dGQ+e3sgZW50cnkuaGFwcGVuZWQgfX08L3RkPlxuXHRcdFx0XHQ8L3RyPlxuXHRcdFx0PC90Ym9keT5cblx0XHQ8L3RhYmxlPlxuXG5cdFx0PGRpdiB2LWlmPVwiISByZWFkeVwiIGNsYXNzPVwidy1mdWxsIHRleHQtY2VudGVyIHAtNVwiPlxuXHRcdFx0PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdzcGlubmVyLXRoaXJkJ11cIiBjbGFzcz1cImZhLXNwaW4gbXItM1wiPjwvZmEtaWNvbj4gTG9hZGluZyBsb2dzLi4uXG5cdFx0PC9kaXY+XG5cdDwvcC1tb2RhbD5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZGF0YToge30sXG5cdFx0XHRcdGVudHJpZXM6IFtdLFxuXHRcdFx0XHRlbnRyaWVzRnJvbTogMCxcblx0XHRcdFx0ZW50cmllc1BlclBhZ2U6IDI1LFxuXHRcdFx0XHRuZXdFbnRyaWVzVGltZW91dDogbnVsbCxcbiAgICAgICAgICAgICAgICBuZXdFbnRyaWVzVGltZXI6IDUwMDAsXG4gICAgICAgICAgICAgICAgcmVhZHk6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHByb3BzOiB7XG5cdFx0XHR0aXRsZToge1xuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICdMb2dzJ1xuXHRcdFx0fSxcblx0XHRcdGxvZ2lkOiB7XG5cdFx0XHRcdHR5cGU6IE51bWJlcnxCb29sZWFuLFxuXHRcdFx0XHRyZXF1aXJlZDogdHJ1ZVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRjb21wdXRlZDoge1xuXHRcdFx0ZW5kcG9pbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gYC9hcGkvaW1wb3J0cy9sb2dzLyR7dGhpcy5sb2dpZH0/ZnJvbT0ke3RoaXMuZW50cmllc0Zyb219JmxpbWl0PSR7dGhpcy5lbnRyaWVzUGVyUGFnZX1gXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHRsb2dpZDogZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0Y2xlYXJUaW1lb3V0KHRoaXMubmV3RW50cmllc1RpbWVvdXQpXG5cblx0XHRcdFx0aWYgKHZhbHVlICE9PSBmYWxzZSkge1xuXHRcdFx0XHRcdHRoaXMuZW50cmllcyA9IFtdXG5cdFx0XHRcdFx0dGhpcy5lbnRyaWVzRnJvbSA9IDBcblx0XHRcdFx0XHR0aGlzLnJlYWR5ID0gZmFsc2VcblxuXHRcdFx0XHRcdHRoaXMubG9hZEVudHJpZXMoKVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGxvYWRFbnRyaWVzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dGhpcy5uZXdFbnRyaWVzVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRcdGF4aW9zLmdldCh0aGlzLmVuZHBvaW50KVxuXHRcdFx0XHRcdFx0LnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdFx0XHR0aGlzLmRhdGEgID0gcmVzcG9uc2UuZGF0YS5kYXRhXG5cdFx0XHRcdFx0XHRcdHRoaXMucmVhZHkgPSB0cnVlXG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbG9ncyA9IF8ubWFwKHJlc3BvbnNlLmRhdGEuZGF0YS5sb2dzLmRhdGEsIGxvZyA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0bG9nWydjb250ZXh0J10gPSBfLnNpemUobG9nWydjb250ZXh0J10pID4gMCA/IF8obG9nWydjb250ZXh0J10pLnZhbHVlKCkgOiBudWxsXG5cblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gbG9nXG5cdFx0XHRcdFx0XHRcdH0pO1xuXG5cdFx0XHRcdFx0XHRcdHRoaXMuZW50cmllcyAgICAgPSB0aGlzLmVudHJpZXMuY29uY2F0KGxvZ3MpXG5cdFx0XHRcdFx0XHRcdHRoaXMuZW50cmllc0Zyb20gPSB0aGlzLmVudHJpZXMubGVuZ3RoXG5cdFx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0dGhpcy5sb2FkRW50cmllcygpXG5cdFx0XHRcdH0sIHRoaXMubmV3RW50cmllc1RpbWVyKVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRkZXN0cm95ZWQoKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQodGhpcy5uZXdFbnRyaWVzVGltZW91dClcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8cG9ydGFsIHRvPVwidGl0bGVcIj5cblx0XHRcdDxhcHAtdGl0bGUgaWNvbj1cInNoaXBcIj5JbXBvcnRlcjwvYXBwLXRpdGxlPlxuXHRcdDwvcG9ydGFsPlxuXG5cdFx0PHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cblx0XHRcdDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdpbXBvcnRlcicgfVwiIGNsYXNzPVwiYnV0dG9uIG1yLTNcIj5HbyBCYWNrPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIEBjbGljaz1cInF1ZXVlKCRyb3V0ZS5wYXJhbXMuaW1wb3J0ZXIpXCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCI+UnVuIEltcG9ydDwvYnV0dG9uPlxuXHRcdDwvcG9ydGFsPlxuXG5cdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG5cdFx0XHRcdDx0YWJsZT5cblx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dGggY2xhc3M9XCJ3LTIvMTJcIj5TY2hlZHVsZWQ8L3RoPlxuXHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwidy02LzEyXCI+UHJvZ3Jlc3M8L3RoPlxuXHRcdFx0XHRcdFx0PHRoIGNsYXNzPVwidy0yLzEyXCI+U3RhdHVzPC90aD5cblx0XHRcdFx0XHRcdDx0aCBjbGFzcz1cInctMi8xMlwiPjwvdGg+XG5cdFx0XHRcdFx0PC90aGVhZD5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHQ8dHIgY2xhc3M9XCJ3LWZ1bGxcIiB2LWZvcj1cImxvZyBpbiBsb2dzXCIgOmtleT1cImxvZy5pZFwiPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3sgbG9nLmhhcHBlbmVkIH19PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cImxvZy5zdGF0dXMgPT0gJ2NvbXBsZXRlJ1wiIGNsYXNzPVwic2hhZG93IHctZnVsbCBiZy13YXJuaW5nLTEwMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJnLXByaW1hcnktNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiIDpzdHlsZT1cIid3aWR0aDogJyArIGxvZy5wcm9ncmVzcyArICclJ1wiPnt7IGxvZy5wcm9ncmVzcyB9fSU8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IHYtaWY9XCJsb2cuc3RhdHVzID09ICdmYWlsZWQnXCIgY2xhc3M9XCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmctd2FybmluZy01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIgOnN0eWxlPVwiJ3dpZHRoOiAnICsgbG9nLnByb2dyZXNzICsgJyUnXCI+e3sgbG9nLnByb2dyZXNzIH19JTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgdi1pZj1cImxvZy5zdGF0dXMgPT0gJ3J1bm5pbmcnXCIgY2xhc3M9XCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYmctd2FybmluZy01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIgOnN0eWxlPVwiJ3dpZHRoOiAnICsgbG9nLnByb2dyZXNzICsgJyUnXCI+e3sgbG9nLnByb2dyZXNzIH19JTwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gdi1pZj1cImxvZy5zdGF0dXMgPT0gJ2NvbXBsZXRlJ1wiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLXN1Y2Nlc3NcIj5Db21wbGV0ZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwibG9nLnN0YXR1cyA9PSAnZmFpbGVkJ1wiIGNsYXNzPVwiYmFkZ2UgYmFkZ2UtLWRhbmdlclwiPkZhaWxlZDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiB2LWlmPVwibG9nLnN0YXR1cyA9PSAncnVubmluZydcIiBjbGFzcz1cImJhZGdlIGJhZGdlLS13YXJuaW5nXCI+SW4gUHJvZ3Jlc3MuLi48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD5cblx0XHRcdFx0XHRcdFx0XHQ8cC1idXR0b24gQGNsaWNrPVwibG9naWQgPSBsb2cuaWRcIj5WaWV3IGxvZzwvcC1idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvdGQ+XG5cdFx0XHRcdFx0XHQ8L3RyPlxuXHRcdFx0XHRcdDwvdGJvZHk+XG5cdFx0XHRcdDwvdGFibGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHRcblx0XHQ8bG9nLW1vZGFsIDpsb2dpZD1cImxvZ2lkXCIgOnRpdGxlPVwiJ0ltcG9ydCBMb2dzIC0gJyArIGRhdGEubmFtZVwiPjwvbG9nLW1vZGFsPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBMb2dNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ltcG9ydGVyL0xvZ01vZGFsLnZ1ZSdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRhdGE6IHt9LFxuXHRcdFx0XHRsb2dzOiBbXSxcblx0XHRcdFx0bG9naWQ6IGZhbHNlLFxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHQnbG9nLW1vZGFsJzogTG9nTW9kYWxcblx0XHR9LFxuXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdHNob3c6IHtcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5sb2dpZCAhPT0gZmFsc2Vcblx0XHRcdFx0fSxcblxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0XHRcdFx0dGhpcy5sb2dpZCA9IHZhbHVlXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0bG9hZEVudHJpZXMoKSB7XG5cdFx0XHRcdGF4aW9zLmdldChgL2FwaS9pbXBvcnRzLyR7dGhpcy4kcm91dGVyLmN1cnJlbnRSb3V0ZS5wYXJhbXMuaW1wb3J0ZXJ9YClcblx0XHRcdFx0XHQudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmRhdGEgPSByZXNwb25zZS5kYXRhLmRhdGFcblx0XHRcdFx0XHRcdHRoaXMubG9ncyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5sb2dzXG5cdFx0XHRcdFx0fSlcblx0XHRcdH0sXG5cblx0XHRcdHF1ZXVlKGlkKSB7XG5cdFx0XHRcdGF4aW9zLnBvc3QoYC9hcGkvaW1wb3J0cy9xdWV1ZS8ke2lkfWApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdJbXBvcnQgaGFzIGJlZW4gYWRkZWQgdG8gdGhlIHF1ZXVlLicsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRFbnRyaWVzKClcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QocmVzcG9uc2UubWVzc2FnZSwgJ2ZhaWxlZCcpXG4gICAgICAgICAgICAgICAgfSk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcblx0XHRcdG5leHQoZnVuY3Rpb24odm0pIHtcblx0XHRcdFx0dm0ubG9hZEVudHJpZXMoKVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJwLW1vZGFsXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgbmFtZTogXCJsb2ctbW9kYWxcIixcbiAgICAgICAgdGl0bGU6IF92bS50aXRsZSxcbiAgICAgICAgXCJuby1mb290ZXJcIjogXCJcIixcbiAgICAgICAgXCJleHRyYS1sYXJnZVwiOiBcIlwiXG4gICAgICB9LFxuICAgICAgbW9kZWw6IHtcbiAgICAgICAgdmFsdWU6IF92bS4kcGFyZW50LnNob3csXG4gICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICBfdm0uJHNldChfdm0uJHBhcmVudCwgXCJzaG93XCIsICQkdilcbiAgICAgICAgfSxcbiAgICAgICAgZXhwcmVzc2lvbjogXCIkcGFyZW50LnNob3dcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLnJlYWR5XG4gICAgICAgID8gX2MoXCJ0YWJsZVwiLCBbXG4gICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMi8xMlwiIH0sIFtfdm0uX3YoXCJTY2hlZHVsZWRcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctOC8xMlwiIH0sIFtfdm0uX3YoXCJQcm9ncmVzc1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyXCIgfSwgW192bS5fdihcIlN0YXR1c1wiKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcInRib2R5XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YS5oYXBwZW5lZCkpXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRhLnN0YXR1cyA9PSBcImNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXByaW1hcnktNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6IFwiICsgX3ZtLmRhdGEucHJvZ3Jlc3MgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRhdGEucHJvZ3Jlc3MpICsgXCIlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRhLnN0YXR1cyA9PSBcImZhaWxlZFwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaGFkb3cgdy1mdWxsIGJnLXdhcm5pbmctMTAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiZy13YXJuaW5nLTUwMCB0ZXh0LXhzIGxlYWRpbmctbm9uZSBweS0xIHRleHQtY2VudGVyIHRleHQtd2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOiBcIiArIF92bS5kYXRhLnByb2dyZXNzICsgXCIlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5kYXRhLnByb2dyZXNzKSArIFwiJVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZGF0YS5zdGF0dXMgPT0gXCJydW5uaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXdhcm5pbmctNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IFwid2lkdGg6IFwiICsgX3ZtLmRhdGEucHJvZ3Jlc3MgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRhdGEucHJvZ3Jlc3MpICsgXCIlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRhLnN0YXR1cyA9PSBcImNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0tc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkNvbXBsZXRlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uZGF0YS5zdGF0dXMgPT0gXCJmYWlsZWRcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJGYWlsZWRcIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5kYXRhLnN0YXR1cyA9PSBcInJ1bm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS13YXJuaW5nXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiSW4gUHJvZ3Jlc3MuLi5cIilcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucmVhZHlcbiAgICAgICAgPyBfYyhcInRhYmxlXCIsIFtcbiAgICAgICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy04LzEyXCIgfSwgW192bS5fdihcIk1lc3NhZ2VcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMi8xMlwiIH0sIFtfdm0uX3YoXCJMZXZlbFwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyXCIgfSwgW192bS5fdihcIkhhcHBlbmVkXCIpXSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZW50cmllcywgZnVuY3Rpb24oZW50cnksIGtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIHsga2V5OiBrZXksIHN0YXRpY0NsYXNzOiBcInctZnVsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcIiArIF92bS5fcyhlbnRyeS5tZXNzYWdlKSArIFwiXFxuXFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnkuY29udGV4dFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtIHRleHQtZ3JheS02MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKGVudHJ5LmNvbnRleHQpIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlYWQgbW9yZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgZW50cnkubGV2ZWwgPT0gMjAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0taW5mb1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhlbnRyeS5sZXZlbF9uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnkubGV2ZWwgPT0gMjUwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0tc3VjY2Vzc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhlbnRyeS5sZXZlbF9uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnkubGV2ZWwgPT0gMzAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0td2FybmluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhlbnRyeS5sZXZlbF9uYW1lKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnkubGV2ZWwgPT0gNDAwXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0tZGFuZ2VyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGVudHJ5LmxldmVsX25hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGVudHJ5LmhhcHBlbmVkKSldKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAhX3ZtLnJlYWR5XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGwgdGV4dC1jZW50ZXIgcC01XCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYS1zcGluIG1yLTNcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJzcGlubmVyLXRoaXJkXCJdIH1cbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBMb2FkaW5nIGxvZ3MuLi5cXG5cXHRcIilcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcInNoaXBcIiB9IH0sIFtfdm0uX3YoXCJJbXBvcnRlclwiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBtci0zXCIsIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiaW1wb3J0ZXJcIiB9IH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBCYWNrXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucXVldWUoX3ZtLiRyb3V0ZS5wYXJhbXMuaW1wb3J0ZXIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlJ1biBJbXBvcnRcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwidGFibGVcIiwgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgIF92bS5fbChfdm0ubG9ncywgZnVuY3Rpb24obG9nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGxvZy5pZCwgc3RhdGljQ2xhc3M6IFwidy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhsb2cuaGFwcGVuZWQpKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBsb2cuc3RhdHVzID09IFwiY29tcGxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2hhZG93IHctZnVsbCBiZy13YXJuaW5nLTEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctcHJpbWFyeS01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOiBcIiArIGxvZy5wcm9ncmVzcyArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobG9nLnByb2dyZXNzKSArIFwiJVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBsb2cuc3RhdHVzID09IFwiZmFpbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNoYWRvdyB3LWZ1bGwgYmctd2FybmluZy0xMDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJnLXdhcm5pbmctNTAwIHRleHQteHMgbGVhZGluZy1ub25lIHB5LTEgdGV4dC1jZW50ZXIgdGV4dC13aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJ3aWR0aDogXCIgKyBsb2cucHJvZ3Jlc3MgKyBcIiVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGxvZy5wcm9ncmVzcykgKyBcIiVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgbG9nLnN0YXR1cyA9PSBcInJ1bm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2hhZG93IHctZnVsbCBiZy13YXJuaW5nLTEwMFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmctd2FybmluZy01MDAgdGV4dC14cyBsZWFkaW5nLW5vbmUgcHktMSB0ZXh0LWNlbnRlciB0ZXh0LXdoaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOiBcIiArIGxvZy5wcm9ncmVzcyArIFwiJVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MobG9nLnByb2dyZXNzKSArIFwiJVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgbG9nLnN0YXR1cyA9PSBcImNvbXBsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS1zdWNjZXNzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJDb21wbGV0ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBsb2cuc3RhdHVzID09IFwiZmFpbGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJhZGdlIGJhZGdlLS1kYW5nZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkZhaWxlZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBsb2cuc3RhdHVzID09IFwicnVubmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYWRnZSBiYWRnZS0td2FybmluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiSW4gUHJvZ3Jlc3MuLi5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2dpZCA9IGxvZy5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJWaWV3IGxvZ1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImxvZy1tb2RhbFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGxvZ2lkOiBfdm0ubG9naWQsIHRpdGxlOiBcIkltcG9ydCBMb2dzIC0gXCIgKyBfdm0uZGF0YS5uYW1lIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMi8xMlwiIH0sIFtfdm0uX3YoXCJTY2hlZHVsZWRcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy02LzEyXCIgfSwgW192bS5fdihcIlByb2dyZXNzXCIpXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0aFwiLCB7IHN0YXRpY0NsYXNzOiBcInctMi8xMlwiIH0sIFtfdm0uX3YoXCJTdGF0dXNcIildKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRoXCIsIHsgc3RhdGljQ2xhc3M6IFwidy0yLzEyXCIgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTG9nTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiNjAwYjJhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0xvZ01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTG9nTW9kYWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbmNtcy12Ni9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYjYwMGIyYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYjYwMGIyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYjYwMGIyYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTG9nTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiNjAwYjJhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFiNjAwYjJhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9Mb2dNb2RhbC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0xvZ01vZGFsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Mb2dNb2RhbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTG9nTW9kYWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiNjAwYjJhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYTkwZTdkYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2ZhOTBlN2RhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ZhOTBlN2RhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ZhOTBlN2RhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYTkwZTdkYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmYTkwZTdkYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL1ZpZXcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9WaWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYTkwZTdkYSZcIiJdLCJzb3VyY2VSb290IjoiIn0=