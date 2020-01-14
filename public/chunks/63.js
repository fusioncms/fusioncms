(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Backups/Index.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Backups/Index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    title: function title() {
      return {
        inner: 'Backups'
      };
    }
  },
  data: function data() {
    return {
      destinations: [],
      ready: false,
      saveBackup: true
    };
  },
  methods: {
    refresh: function refresh() {
      var _this = this;

      this.ready = false;
      axios.get('/api/backups').then(function (response) {
        _this.destinations = response.data.data;
        _this.ready = true;
        _this.saveBackup = true;
      });
    },
    upload: function upload(files) {
      var _this2 = this;

      if (typeof files == 'undefined') {
        return;
      }

      var formData = new FormData();
      formData.append('_method', 'POST');
      formData.append('file-upload', files);
      axios.post('/api/backups/upload', formData).then(function () {
        toast('Backup successfully uploaded!', 'success');

        _this2.$refs.upload.remove();

        _this2.refresh();
      });
    },
    download: function download(backup) {
      window.open("/backups/".concat(backup), '_blank');
    },
    restore: function restore(backup) {
      var _this3 = this;

      axios.post("/api/backups/restore/".concat(backup), {
        saveBackup: this.saveBackup
      }).then(function (response) {
        toast('Backup successfully restored!', 'success');

        _this3.refresh();
      });
    },
    backup: function backup() {
      var _this4 = this;

      axios.post('/api/backups').then(function (response) {
        toast('Backup successfully created!', 'success');

        _this4.refresh();
      });
    },
    destroy: function destroy(backup) {
      var _this5 = this;

      axios["delete"]("/api/backups/".concat(backup)).then(function (response) {
        toast('Backp successfully deleted!', 'success');

        _this5.refresh();
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.refresh();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Backups/Index.vue?vue&type=template&id=494a9b85&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Backups/Index.vue?vue&type=template&id=494a9b85& ***!
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
        [_c("app-title", { attrs: { icon: "save" } }, [_vm._v("Backups")])],
        1
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "actions" } },
        [
          _c(
            "p-button",
            {
              directives: [
                { name: "modal", rawName: "v-modal:settings", arg: "settings" }
              ],
              staticClass: "button mr-1"
            },
            [_vm._v("Settings")]
          ),
          _vm._v(" "),
          _c(
            "p-button",
            {
              directives: [
                { name: "modal", rawName: "v-modal:upload", arg: "upload" }
              ],
              staticClass: "button mr-3"
            },
            [_vm._v("Upload")]
          ),
          _vm._v(" "),
          _c(
            "p-button",
            {
              directives: [
                {
                  name: "modal",
                  rawName: "v-modal:confirm-form",
                  arg: "confirm-form"
                }
              ],
              staticClass: "button--primary",
              on: {
                click: function($event) {
                  $event.preventDefault()
                }
              }
            },
            [_vm._v("Backup Now")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("p-card", { attrs: { "no-body": "" } }, [
        !_vm.ready
          ? _c(
              "div",
              { staticClass: "card__body text-center" },
              [
                _c("fa-icon", {
                  staticClass: "fa-spin mr-3",
                  attrs: { icon: ["fas", "spinner-third"] }
                }),
                _vm._v(" Loading backups...\n\t\t\t")
              ],
              1
            )
          : _c(
              "div",
              _vm._l(_vm.destinations, function(destination) {
                return _c("table", { key: destination.name }, [
                  _c("thead", [
                    _c("th", [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Created")]),
                    _vm._v(" "),
                    _c("th", [_vm._v("Size")]),
                    _vm._v(" "),
                    _c("th")
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(destination.backups, function(backup) {
                      return _c("tr", { key: backup.name }, [
                        _c("td", [_vm._v(_vm._s(backup.name))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(backup.happened))]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(backup.size))]),
                        _vm._v(" "),
                        _c(
                          "td",
                          { staticClass: "text-right" },
                          [
                            _c(
                              "p-dropdown",
                              { attrs: { right: "" } },
                              [
                                _c("fa-icon", { attrs: { icon: "bars" } }),
                                _vm._v(" "),
                                _c(
                                  "template",
                                  { slot: "options" },
                                  [
                                    _c(
                                      "p-dropdown-item",
                                      {
                                        directives: [
                                          {
                                            name: "modal",
                                            rawName: "v-modal:restore-form",
                                            value: backup,
                                            expression: "backup",
                                            arg: "restore-form"
                                          }
                                        ],
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\tRestore\n\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "p-dropdown-item",
                                      {
                                        on: {
                                          click: function($event) {
                                            return _vm.download(backup.name)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n\t\t\t\t\t\t\t\t\t\t\tDownload\n\t\t\t\t\t\t\t\t\t\t"
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    !backup.isNewest
                                      ? _c(
                                          "p-dropdown-item",
                                          {
                                            directives: [
                                              {
                                                name: "modal",
                                                rawName: "v-modal:delete-form",
                                                value: backup,
                                                expression: "backup",
                                                arg: "delete-form"
                                              }
                                            ],
                                            on: {
                                              click: function($event) {
                                                $event.preventDefault()
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n\t\t\t\t\t\t\t\t\t\t\tDelete\n\t\t\t\t\t\t\t\t\t\t"
                                            )
                                          ]
                                        )
                                      : _vm._e()
                                  ],
                                  1
                                )
                              ],
                              2
                            )
                          ],
                          1
                        )
                      ])
                    }),
                    0
                  )
                ])
              }),
              0
            )
      ]),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _c("settings-modal", { attrs: { section: "backups" } }),
          _vm._v(" "),
          _c(
            "p-modal",
            {
              key: "restore_form",
              attrs: { name: "restore-form", title: "Restore Backup" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(form) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:restore-form",
                              arg: "restore-form"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "primary" },
                          on: {
                            click: function($event) {
                              return _vm.restore(form.data.name)
                            }
                          }
                        },
                        [_vm._v("Restore")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:restore-form",
                              arg: "restore-form"
                            }
                          ]
                        },
                        [_vm._v("Cancel")]
                      )
                    ]
                  }
                }
              ])
            },
            [
              _c("p", [
                _vm._v("Restoring a backup will "),
                _c("b", [
                  _vm._v(
                    "replace all files and the database with the contents of the backup."
                  )
                ]),
                _vm._v(
                  " Unless you specify to create a new backup during this process, there will be no way to undo your changes if you change your mind."
                )
              ]),
              _vm._v(" "),
              _c(
                "p-checkbox",
                {
                  attrs: { name: "saveBackup" },
                  model: {
                    value: _vm.saveBackup,
                    callback: function($$v) {
                      _vm.saveBackup = $$v
                    },
                    expression: "saveBackup"
                  }
                },
                [
                  _vm._v(
                    "\n        \t\t\tCreate a backup before restoring\n        \t\t"
                  )
                ]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "p-modal",
            {
              key: "confirm_form",
              attrs: { name: "confirm-form", title: "Backup Now" }
            },
            [
              _c("p", [
                _vm._v(
                  "This will perform a full backup of your website. Backups can take up to one minute per GB of data."
                )
              ]),
              _vm._v(" "),
              _c(
                "template",
                { slot: "footer" },
                [
                  _c(
                    "p-button",
                    {
                      directives: [
                        {
                          name: "modal",
                          rawName: "v-modal:confirm-form",
                          arg: "confirm-form"
                        }
                      ],
                      staticClass: "ml-3",
                      attrs: { theme: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.backup()
                        }
                      }
                    },
                    [_vm._v("Backup")]
                  ),
                  _vm._v(" "),
                  _c(
                    "p-button",
                    {
                      directives: [
                        {
                          name: "modal",
                          rawName: "v-modal:confirm-form",
                          arg: "confirm-form"
                        }
                      ]
                    },
                    [_vm._v("Cancel")]
                  )
                ],
                1
              )
            ],
            2
          ),
          _vm._v(" "),
          _c(
            "p-modal",
            {
              key: "delete_form",
              attrs: { name: "delete-form", title: "Delete Backup" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(form) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:delete-form",
                              arg: "delete-form"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.destroy(form.data.name)
                            }
                          }
                        },
                        [_vm._v("Delete")]
                      ),
                      _vm._v(" "),
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:delete-form",
                              arg: "delete-form"
                            }
                          ]
                        },
                        [_vm._v("Cancel")]
                      )
                    ]
                  }
                }
              ])
            },
            [
              _c("p", [
                _vm._v(
                  "Are you sure you want to permenantly delete this backup?"
                )
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "p-modal",
            {
              key: "upload-backup",
              attrs: { name: "upload", title: "Upload Backup" }
            },
            [
              _c("p-upload", {
                ref: "upload",
                attrs: { name: "file-upload", accept: "zip", multiple: false },
                on: { input: _vm.upload }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Backups/Index.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/Backups/Index.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_494a9b85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=494a9b85& */ "./resources/js/views/Backups/Index.vue?vue&type=template&id=494a9b85&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/Backups/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_494a9b85___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_494a9b85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Backups/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Backups/Index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Backups/Index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Backups/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Backups/Index.vue?vue&type=template&id=494a9b85&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/Backups/Index.vue?vue&type=template&id=494a9b85& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_494a9b85___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=494a9b85& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Backups/Index.vue?vue&type=template&id=494a9b85&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_494a9b85___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_494a9b85___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0JhY2t1cHMvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9CYWNrdXBzL0luZGV4LnZ1ZT80ZjA5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9CYWNrdXBzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQmFja3Vwcy9JbmRleC52dWU/Yjc5YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQmFja3Vwcy9JbmRleC52dWU/NTliOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZHQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsa0JBRkE7QUFHQTtBQUhBO0FBS0EsR0FmQTtBQWlCQTtBQUNBLFdBREEscUJBQ0E7QUFBQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQTtBQUtBLEtBVEE7QUFXQSxVQVhBLGtCQVdBLEtBWEEsRUFXQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBOztBQUNBO0FBQ0EsT0FMQTtBQU1BLEtBM0JBO0FBNkJBLFlBN0JBLG9CQTZCQSxNQTdCQSxFQTZCQTtBQUNBO0FBQ0EsS0EvQkE7QUFpQ0EsV0FqQ0EsbUJBaUNBLE1BakNBLEVBaUNBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQSxPQUpBO0FBS0EsS0F2Q0E7QUF5Q0EsVUF6Q0Esb0JBeUNBO0FBQUE7O0FBQ0E7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Q0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFzRDtBQUM5RSxxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM5YUE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvNjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PHBvcnRhbCB0bz1cInRpdGxlXCI+XG5cdFx0XHQ8YXBwLXRpdGxlIGljb249XCJzYXZlXCI+QmFja3VwczwvYXBwLXRpdGxlPlxuXHRcdDwvcG9ydGFsPlxuXG5cdFx0PHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cblx0XHRcdDxwLWJ1dHRvbiB2LW1vZGFsOnNldHRpbmdzIGNsYXNzPVwiYnV0dG9uIG1yLTFcIj5TZXR0aW5nczwvcC1idXR0b24+XG5cdFx0XHQ8cC1idXR0b24gdi1tb2RhbDp1cGxvYWQgY2xhc3M9XCJidXR0b24gbXItM1wiPlVwbG9hZDwvcC1idXR0b24+XG5cblx0XHRcdDxwLWJ1dHRvbiBAY2xpY2sucHJldmVudCB2LW1vZGFsOmNvbmZpcm0tZm9ybSBjbGFzcz1cImJ1dHRvbi0tcHJpbWFyeVwiPkJhY2t1cCBOb3c8L3AtYnV0dG9uPlxuXHRcdDwvcG9ydGFsPlxuXG5cdFx0PHAtY2FyZCBuby1ib2R5PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmRfX2JvZHkgdGV4dC1jZW50ZXJcIiB2LWlmPVwiISByZWFkeVwiPlxuXHRcdFx0XHQ8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ3NwaW5uZXItdGhpcmQnXVwiIGNsYXNzPVwiZmEtc3BpbiBtci0zXCI+PC9mYS1pY29uPiBMb2FkaW5nIGJhY2t1cHMuLi5cblx0XHRcdDwvZGl2PlxuXG5cdFx0XHQ8ZGl2IHYtZWxzZT5cblx0XHRcdFx0PHRhYmxlIHYtZm9yPVwiZGVzdGluYXRpb24gaW4gZGVzdGluYXRpb25zXCIgOmtleT1cImRlc3RpbmF0aW9uLm5hbWVcIj5cblx0XHRcdFx0XHQ8dGhlYWQ+XG5cdFx0XHRcdFx0XHQ8dGg+TmFtZTwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+Q3JlYXRlZDwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+U2l6ZTwvdGg+XG5cdFx0XHRcdFx0XHQ8dGg+PC90aD5cblx0XHRcdFx0XHQ8L3RoZWFkPlxuXG5cdFx0XHRcdFx0PHRib2R5PlxuXHRcdFx0XHRcdFx0PHRyIHYtZm9yPVwiYmFja3VwIGluIGRlc3RpbmF0aW9uLmJhY2t1cHNcIiA6a2V5PVwiYmFja3VwLm5hbWVcIj5cblx0XHRcdFx0XHRcdFx0PHRkPnt7IGJhY2t1cC5uYW1lIH19PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPnt7IGJhY2t1cC5oYXBwZW5lZCB9fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZD57eyBiYWNrdXAuc2l6ZSB9fTwvdGQ+XG5cdFx0XHRcdFx0XHRcdDx0ZCBjbGFzcz1cInRleHQtcmlnaHRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cC1kcm9wZG93biByaWdodD5cblx0XHRcdFx0XHRcdFx0XHRcdDxmYS1pY29uIGljb249XCJiYXJzXCI+PC9mYS1pY29uPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHQ8dGVtcGxhdGUgc2xvdD1cIm9wdGlvbnNcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAtZHJvcGRvd24taXRlbSBAY2xpY2sucHJldmVudCB2LW1vZGFsOnJlc3RvcmUtZm9ybT1cImJhY2t1cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFJlc3RvcmVcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wLWRyb3Bkb3duLWl0ZW0+XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAtZHJvcGRvd24taXRlbSBAY2xpY2s9XCJkb3dubG9hZChiYWNrdXAubmFtZSlcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHREb3dubG9hZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3AtZHJvcGRvd24taXRlbT5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cC1kcm9wZG93bi1pdGVtIHYtaWY9XCIhIGJhY2t1cC5pc05ld2VzdFwiIEBjbGljay5wcmV2ZW50IHYtbW9kYWw6ZGVsZXRlLWZvcm09XCJiYWNrdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHREZWxldGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wLWRyb3Bkb3duLWl0ZW0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0XHRcdFx0XHRcdDwvcC1kcm9wZG93bj5cblx0XHRcdFx0XHRcdFx0PC90ZD5cblx0XHRcdFx0XHRcdDwvdHI+XG5cdFx0XHRcdFx0PC90Ym9keT5cblx0XHRcdFx0PC90YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvcC1jYXJkPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJtb2RhbHNcIj5cbiAgICAgICAgICAgIDxzZXR0aW5ncy1tb2RhbCBzZWN0aW9uPVwiYmFja3Vwc1wiPjwvc2V0dGluZ3MtbW9kYWw+XG5cbiAgICAgICAgICAgIDwhLS0gUmVzdG9yZSBmcm9tIGV4aXN0aW5nIGJhY2t1cCAtLT5cbiAgICAgICAgICAgIDxwLW1vZGFsIG5hbWU9XCJyZXN0b3JlLWZvcm1cIiB0aXRsZT1cIlJlc3RvcmUgQmFja3VwXCIga2V5PVwicmVzdG9yZV9mb3JtXCI+XG4gICAgICAgICAgICAgICAgPHA+UmVzdG9yaW5nIGEgYmFja3VwIHdpbGwgPGI+cmVwbGFjZSBhbGwgZmlsZXMgYW5kIHRoZSBkYXRhYmFzZSB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgYmFja3VwLjwvYj4gVW5sZXNzIHlvdSBzcGVjaWZ5IHRvIGNyZWF0ZSBhIG5ldyBiYWNrdXAgZHVyaW5nIHRoaXMgcHJvY2VzcywgdGhlcmUgd2lsbCBiZSBubyB3YXkgdG8gdW5kbyB5b3VyIGNoYW5nZXMgaWYgeW91IGNoYW5nZSB5b3VyIG1pbmQuPC9wPlxuXG4gICAgICAgIFx0XHQ8cC1jaGVja2JveCBuYW1lPVwic2F2ZUJhY2t1cFwiIHYtbW9kZWw9XCJzYXZlQmFja3VwXCI+XG4gICAgICAgIFx0XHRcdENyZWF0ZSBhIGJhY2t1cCBiZWZvcmUgcmVzdG9yaW5nXG4gICAgICAgIFx0XHQ8L3AtY2hlY2tib3g+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIiBzbG90LXNjb3BlPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDpyZXN0b3JlLWZvcm0gQGNsaWNrPVwicmVzdG9yZShmb3JtLmRhdGEubmFtZSlcIiB0aGVtZT1cInByaW1hcnlcIiBjbGFzcz1cIm1sLTNcIj5SZXN0b3JlPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6cmVzdG9yZS1mb3JtPkNhbmNlbDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcC1tb2RhbD5cblxuICAgICAgICAgICAgPCEtLSBSdW4gbWFudWFsIGJhY2t1cCBwcm9jZXNzIC0tPlxuXHRcdFx0PHAtbW9kYWwgbmFtZT1cImNvbmZpcm0tZm9ybVwiIHRpdGxlPVwiQmFja3VwIE5vd1wiIGtleT1cImNvbmZpcm1fZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxwPlRoaXMgd2lsbCBwZXJmb3JtIGEgZnVsbCBiYWNrdXAgb2YgeW91ciB3ZWJzaXRlLiBCYWNrdXBzIGNhbiB0YWtlIHVwIHRvIG9uZSBtaW51dGUgcGVyIEdCIG9mIGRhdGEuPC9wPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6Y29uZmlybS1mb3JtIEBjbGljaz1cImJhY2t1cCgpXCIgdGhlbWU9XCJwcmltYXJ5XCIgY2xhc3M9XCJtbC0zXCI+QmFja3VwPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6Y29uZmlybS1mb3JtPkNhbmNlbDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcC1tb2RhbD5cblxuICAgICAgICAgICAgPCEtLSBEZWxldGUgZXhpc3RpbmcgYmFja3VwIC0tPlxuXHRcdFx0PHAtbW9kYWwgbmFtZT1cImRlbGV0ZS1mb3JtXCIgdGl0bGU9XCJEZWxldGUgQmFja3VwXCIga2V5PVwiZGVsZXRlX2Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcGVybWVuYW50bHkgZGVsZXRlIHRoaXMgYmFja3VwPzwvcD5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCIgc2xvdC1zY29wZT1cImZvcm1cIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6ZGVsZXRlLWZvcm0gQGNsaWNrPVwiZGVzdHJveShmb3JtLmRhdGEubmFtZSlcIiB0aGVtZT1cImRhbmdlclwiIGNsYXNzPVwibWwtM1wiPkRlbGV0ZTwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOmRlbGV0ZS1mb3JtPkNhbmNlbDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcC1tb2RhbD5cblxuXHRcdFx0PCEtLSBVcGxvYWQgYmFja3VwIC0tPlxuXHRcdFx0PHAtbW9kYWwgbmFtZT1cInVwbG9hZFwiIHRpdGxlPVwiVXBsb2FkIEJhY2t1cFwiIGtleT1cInVwbG9hZC1iYWNrdXBcIj5cblx0XHRcdFx0PHAtdXBsb2FkXG5cdFx0XHRcdFx0bmFtZT1cImZpbGUtdXBsb2FkXCJcblx0XHRcdFx0XHRyZWY9XCJ1cGxvYWRcIlxuXHRcdFx0XHRcdGFjY2VwdD1cInppcFwiXG5cdFx0XHRcdFx0Om11bHRpcGxlPVwiZmFsc2VcIlxuXHRcdFx0XHRcdEBpbnB1dD1cInVwbG9hZFwiXG5cdFx0XHRcdD48L3AtdXBsb2FkPlxuXHRcdFx0PC9wLW1vZGFsPlxuICAgICAgICA8L3BvcnRhbD5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0aGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6ICdCYWNrdXBzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblx0XHR9LFxuXHRcdFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRkZXN0aW5hdGlvbnM6IFtdLFxuXHRcdFx0XHRyZWFkeTogZmFsc2UsXG5cdFx0XHRcdHNhdmVCYWNrdXA6IHRydWUsXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHJlZnJlc2goKSB7XG4gICAgICAgICAgICBcdHRoaXMucmVhZHkgPSBmYWxzZVxuXG4gICAgICAgICAgICBcdGF4aW9zLmdldCgnL2FwaS9iYWNrdXBzJykudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgICAgICBcdFx0dGhpcy5kZXN0aW5hdGlvbnMgPSByZXNwb25zZS5kYXRhLmRhdGFcbiAgICAgICAgICAgIFx0XHR0aGlzLnJlYWR5ICAgICAgICA9IHRydWVcbiAgICAgICAgICAgIFx0XHR0aGlzLnNhdmVCYWNrdXAgICA9IHRydWVcbiAgICAgICAgICAgIFx0fSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHVwbG9hZChmaWxlcykge1xuICAgICAgICAgICAgXHRpZiAodHlwZW9mIGZpbGVzID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBcdFx0cmV0dXJuO1xuICAgICAgICAgICAgXHR9XG5cblx0XHRcdFx0Y29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG5cdFx0XHRcdGZvcm1EYXRhLmFwcGVuZCgnX21ldGhvZCcsICdQT1NUJylcblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdmaWxlLXVwbG9hZCcsIGZpbGVzKVxuXG5cdFx0XHRcdGF4aW9zLnBvc3QoJy9hcGkvYmFja3Vwcy91cGxvYWQnLCBmb3JtRGF0YSkudGhlbigoKSA9PiB7XG5cdFx0XHRcdFx0dG9hc3QoJ0JhY2t1cCBzdWNjZXNzZnVsbHkgdXBsb2FkZWQhJywgJ3N1Y2Nlc3MnKVxuXG5cdFx0XHRcdFx0dGhpcy4kcmVmcy51cGxvYWQucmVtb3ZlKClcblx0XHRcdFx0XHR0aGlzLnJlZnJlc2goKVxuXHRcdFx0XHR9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZG93bmxvYWQoYmFja3VwKSB7XG4gICAgICAgICAgICBcdHdpbmRvdy5vcGVuKGAvYmFja3Vwcy8ke2JhY2t1cH1gLCAnX2JsYW5rJylcbiAgICAgICAgICAgIH0sXG5cblx0XHRcdHJlc3RvcmUoYmFja3VwKSB7XG5cdFx0XHRcdGF4aW9zLnBvc3QoYC9hcGkvYmFja3Vwcy9yZXN0b3JlLyR7YmFja3VwfWAsIHsgc2F2ZUJhY2t1cDogdGhpcy5zYXZlQmFja3VwIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdHRvYXN0KCdCYWNrdXAgc3VjY2Vzc2Z1bGx5IHJlc3RvcmVkIScsICdzdWNjZXNzJylcblxuXHRcdFx0XHRcdHRoaXMucmVmcmVzaCgpXG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXG5cdFx0XHRiYWNrdXAoKSB7XG5cdFx0XHRcdGF4aW9zLnBvc3QoJy9hcGkvYmFja3VwcycpLnRoZW4ocmVzcG9uc2UgPT4ge1xuXHRcdFx0XHRcdHRvYXN0KCdCYWNrdXAgc3VjY2Vzc2Z1bGx5IGNyZWF0ZWQhJywgJ3N1Y2Nlc3MnKVxuXG5cdFx0XHRcdFx0dGhpcy5yZWZyZXNoKClcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cblx0XHRcdGRlc3Ryb3koYmFja3VwKSB7XG5cdFx0XHRcdGF4aW9zLmRlbGV0ZShgL2FwaS9iYWNrdXBzLyR7YmFja3VwfWApLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdCYWNrcCBzdWNjZXNzZnVsbHkgZGVsZXRlZCEnLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoKClcbiAgICAgICAgICAgICAgICB9KVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG5cdFx0XHRuZXh0KGZ1bmN0aW9uKHZtKSB7XG5cdFx0XHRcdHZtLnJlZnJlc2goKVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW19jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJzYXZlXCIgfSB9LCBbX3ZtLl92KFwiQmFja3Vwc1wiKV0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6IFwibW9kYWxcIiwgcmF3TmFtZTogXCJ2LW1vZGFsOnNldHRpbmdzXCIsIGFyZzogXCJzZXR0aW5nc1wiIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIG1yLTFcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJTZXR0aW5nc1wiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7IG5hbWU6IFwibW9kYWxcIiwgcmF3TmFtZTogXCJ2LW1vZGFsOnVwbG9hZFwiLCBhcmc6IFwidXBsb2FkXCIgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gbXItM1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlVwbG9hZFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6Y29uZmlybS1mb3JtXCIsXG4gICAgICAgICAgICAgICAgICBhcmc6IFwiY29uZmlybS1mb3JtXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbi0tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkJhY2t1cCBOb3dcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwicC1jYXJkXCIsIHsgYXR0cnM6IHsgXCJuby1ib2R5XCI6IFwiXCIgfSB9LCBbXG4gICAgICAgICFfdm0ucmVhZHlcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX2JvZHkgdGV4dC1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhLXNwaW4gbXItM1wiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwic3Bpbm5lci10aGlyZFwiXSB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIExvYWRpbmcgYmFja3Vwcy4uLlxcblxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5kZXN0aW5hdGlvbnMsIGZ1bmN0aW9uKGRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidGFibGVcIiwgeyBrZXk6IGRlc3RpbmF0aW9uLm5hbWUgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIk5hbWVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQ3JlYXRlZFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJTaXplXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIilcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChkZXN0aW5hdGlvbi5iYWNrdXBzLCBmdW5jdGlvbihiYWNrdXApIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCB7IGtleTogYmFja3VwLm5hbWUgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhiYWNrdXAubmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhiYWNrdXAuaGFwcGVuZWQpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoYmFja3VwLnNpemUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1kcm9wZG93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyByaWdodDogXCJcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmEtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFwiYmFyc1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNsb3Q6IFwib3B0aW9uc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1kcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOnJlc3RvcmUtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYmFja3VwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJhY2t1cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwicmVzdG9yZS1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRSZXN0b3JlXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1kcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRvd25sb2FkKGJhY2t1cC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0XFx0RG93bmxvYWRcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhYmFja3VwLmlzTmV3ZXN0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmRlbGV0ZS1mb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogYmFja3VwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJiYWNrdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkZWxldGUtZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHREZWxldGVcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwibW9kYWxzXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzZXR0aW5ncy1tb2RhbFwiLCB7IGF0dHJzOiB7IHNlY3Rpb246IFwiYmFja3Vwc1wiIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1tb2RhbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwicmVzdG9yZV9mb3JtXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwicmVzdG9yZS1mb3JtXCIsIHRpdGxlOiBcIlJlc3RvcmUgQmFja3VwXCIgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImZvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpyZXN0b3JlLWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJyZXN0b3JlLWZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnJlc3RvcmUoZm9ybS5kYXRhLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIlJlc3RvcmVcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOnJlc3RvcmUtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInJlc3RvcmUtZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIlJlc3RvcmluZyBhIGJhY2t1cCB3aWxsIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImJcIiwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcInJlcGxhY2UgYWxsIGZpbGVzIGFuZCB0aGUgZGF0YWJhc2Ugd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGJhY2t1cC5cIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiIFVubGVzcyB5b3Ugc3BlY2lmeSB0byBjcmVhdGUgYSBuZXcgYmFja3VwIGR1cmluZyB0aGlzIHByb2Nlc3MsIHRoZXJlIHdpbGwgYmUgbm8gd2F5IHRvIHVuZG8geW91ciBjaGFuZ2VzIGlmIHlvdSBjaGFuZ2UgeW91ciBtaW5kLlwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJwLWNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJzYXZlQmFja3VwXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2F2ZUJhY2t1cCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5zYXZlQmFja3VwID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2F2ZUJhY2t1cFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcXHRcXHRcXHRDcmVhdGUgYSBiYWNrdXAgYmVmb3JlIHJlc3RvcmluZ1xcbiAgICAgICAgXFx0XFx0XCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLW1vZGFsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJjb25maXJtX2Zvcm1cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJjb25maXJtLWZvcm1cIiwgdGl0bGU6IFwiQmFja3VwIE5vd1wiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJUaGlzIHdpbGwgcGVyZm9ybSBhIGZ1bGwgYmFja3VwIG9mIHlvdXIgd2Vic2l0ZS4gQmFja3VwcyBjYW4gdGFrZSB1cCB0byBvbmUgbWludXRlIHBlciBHQiBvZiBkYXRhLlwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgIHsgc2xvdDogXCJmb290ZXJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmNvbmZpcm0tZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiY29uZmlybS1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJwcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmJhY2t1cCgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQmFja3VwXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpjb25maXJtLWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImNvbmZpcm0tZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1tb2RhbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiZGVsZXRlX2Zvcm1cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJkZWxldGUtZm9ybVwiLCB0aXRsZTogXCJEZWxldGUgQmFja3VwXCIgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImZvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpkZWxldGUtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlbGV0ZS1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwiZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlc3Ryb3koZm9ybS5kYXRhLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRlbGV0ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6ZGVsZXRlLWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkZWxldGUtZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkNhbmNlbFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHBlcm1lbmFudGx5IGRlbGV0ZSB0aGlzIGJhY2t1cD9cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtbW9kYWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcInVwbG9hZC1iYWNrdXBcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ1cGxvYWRcIiwgdGl0bGU6IFwiVXBsb2FkIEJhY2t1cFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicC11cGxvYWRcIiwge1xuICAgICAgICAgICAgICAgIHJlZjogXCJ1cGxvYWRcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImZpbGUtdXBsb2FkXCIsIGFjY2VwdDogXCJ6aXBcIiwgbXVsdGlwbGU6IGZhbHNlIH0sXG4gICAgICAgICAgICAgICAgb246IHsgaW5wdXQ6IF92bS51cGxvYWQgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5NGE5Yjg1JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL3NhbmRib3gvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDk0YTliODUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDk0YTliODUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDk0YTliODUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00OTRhOWI4NSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0OTRhOWI4NScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL0JhY2t1cHMvSW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00OTRhOWI4NSZcIiJdLCJzb3VyY2VSb290IjoiIn0=