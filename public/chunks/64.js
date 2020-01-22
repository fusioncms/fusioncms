(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

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
                  attrs: { icon: ["fas", "circle-notch"] }
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
                                _c("fa-icon", {
                                  attrs: { icon: ["fas", "bars"] }
                                }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0JhY2t1cHMvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9CYWNrdXBzL0luZGV4LnZ1ZT80ZjA5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9CYWNrdXBzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQmFja3Vwcy9JbmRleC52dWU/Yjc5YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQmFja3Vwcy9JbmRleC52dWU/NTliOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTZHQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFDQTtBQUNBLHNCQURBO0FBRUEsa0JBRkE7QUFHQTtBQUhBO0FBS0EsR0FmQTtBQWlCQTtBQUNBLFdBREEscUJBQ0E7QUFBQTs7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQTtBQUtBLEtBVEE7QUFXQSxVQVhBLGtCQVdBLEtBWEEsRUFXQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUNBOztBQUVBOztBQUNBO0FBQ0EsT0FMQTtBQU1BLEtBM0JBO0FBNkJBLFlBN0JBLG9CQTZCQSxNQTdCQSxFQTZCQTtBQUNBO0FBQ0EsS0EvQkE7QUFpQ0EsV0FqQ0EsbUJBaUNBLE1BakNBLEVBaUNBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFDQSxPQUpBO0FBS0EsS0F2Q0E7QUF5Q0EsVUF6Q0Esb0JBeUNBO0FBQUE7O0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BSkE7QUFLQSxLQS9DQTtBQWlEQSxXQWpEQSxtQkFpREEsTUFqREEsRUFpREE7QUFBQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FKQTtBQUtBO0FBdkRBLEdBakJBO0FBMkVBLGtCQTNFQSw0QkEyRUEsRUEzRUEsRUEyRUEsSUEzRUEsRUEyRUEsSUEzRUEsRUEyRUE7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBO0FBL0VBLEc7Ozs7Ozs7Ozs7OztBQzdHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDLDBCQUEwQixTQUFTLGVBQWUsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGdCQUFnQixFQUFFO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixTQUFTLGdCQUFnQixFQUFFO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLGVBQWUsd0NBQXdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msd0JBQXdCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLG1CQUFtQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsU0FBUyxZQUFZLEVBQUU7QUFDdEQ7QUFDQTtBQUNBLDBDQUEwQztBQUMxQyxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtCQUFrQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxlQUFlLEVBQUU7QUFDbkM7QUFDQSxnQ0FBZ0MsU0FBUyxxQkFBcUIsRUFBRTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFnRDtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQyxtQkFBbUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIscUJBQXFCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsbUJBQW1CO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsOENBQThDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHNEQUFzRDtBQUM5RSxxQkFBcUI7QUFDckIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoYkE7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvNjQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PHBvcnRhbCB0bz1cInRpdGxlXCI+XG5cdFx0XHQ8YXBwLXRpdGxlIGljb249XCJzYXZlXCI+QmFja3VwczwvYXBwLXRpdGxlPlxuXHRcdDwvcG9ydGFsPlxuXG5cdFx0PHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cblx0XHRcdDxwLWJ1dHRvbiB2LW1vZGFsOnNldHRpbmdzIGNsYXNzPVwiYnV0dG9uIG1yLTFcIj5TZXR0aW5nczwvcC1idXR0b24+XG5cdFx0XHQ8cC1idXR0b24gdi1tb2RhbDp1cGxvYWQgY2xhc3M9XCJidXR0b24gbXItM1wiPlVwbG9hZDwvcC1idXR0b24+XG5cblx0XHRcdDxwLWJ1dHRvbiBAY2xpY2sucHJldmVudCB2LW1vZGFsOmNvbmZpcm0tZm9ybSBjbGFzcz1cImJ1dHRvbi0tcHJpbWFyeVwiPkJhY2t1cCBOb3c8L3AtYnV0dG9uPlxuXHRcdDwvcG9ydGFsPlxuXG5cdFx0PHAtY2FyZCBuby1ib2R5PlxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmRfX2JvZHkgdGV4dC1jZW50ZXJcIiB2LWlmPVwiISByZWFkeVwiPlxuXHRcdFx0XHQ8ZmEtaWNvbiA6aWNvbj1cIlsnZmFzJywgJ2NpcmNsZS1ub3RjaCddXCIgY2xhc3M9XCJmYS1zcGluIG1yLTNcIj48L2ZhLWljb24+IExvYWRpbmcgYmFja3Vwcy4uLlxuXHRcdFx0PC9kaXY+XG5cblx0XHRcdDxkaXYgdi1lbHNlPlxuXHRcdFx0XHQ8dGFibGUgdi1mb3I9XCJkZXN0aW5hdGlvbiBpbiBkZXN0aW5hdGlvbnNcIiA6a2V5PVwiZGVzdGluYXRpb24ubmFtZVwiPlxuXHRcdFx0XHRcdDx0aGVhZD5cblx0XHRcdFx0XHRcdDx0aD5OYW1lPC90aD5cblx0XHRcdFx0XHRcdDx0aD5DcmVhdGVkPC90aD5cblx0XHRcdFx0XHRcdDx0aD5TaXplPC90aD5cblx0XHRcdFx0XHRcdDx0aD48L3RoPlxuXHRcdFx0XHRcdDwvdGhlYWQ+XG5cblx0XHRcdFx0XHQ8dGJvZHk+XG5cdFx0XHRcdFx0XHQ8dHIgdi1mb3I9XCJiYWNrdXAgaW4gZGVzdGluYXRpb24uYmFja3Vwc1wiIDprZXk9XCJiYWNrdXAubmFtZVwiPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3sgYmFja3VwLm5hbWUgfX08L3RkPlxuXHRcdFx0XHRcdFx0XHQ8dGQ+e3sgYmFja3VwLmhhcHBlbmVkIH19PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkPnt7IGJhY2t1cC5zaXplIH19PC90ZD5cblx0XHRcdFx0XHRcdFx0PHRkIGNsYXNzPVwidGV4dC1yaWdodFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwLWRyb3Bkb3duIHJpZ2h0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGZhLWljb24gOmljb249XCJbJ2ZhcycsICdiYXJzJ11cIj48L2ZhLWljb24+XG5cblx0XHRcdFx0XHRcdFx0XHRcdDx0ZW1wbGF0ZSBzbG90PVwib3B0aW9uc1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cC1kcm9wZG93bi1pdGVtIEBjbGljay5wcmV2ZW50IHYtbW9kYWw6cmVzdG9yZS1mb3JtPVwiYmFja3VwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UmVzdG9yZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3AtZHJvcGRvd24taXRlbT5cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cC1kcm9wZG93bi1pdGVtIEBjbGljaz1cImRvd25sb2FkKGJhY2t1cC5uYW1lKVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdERvd25sb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcC1kcm9wZG93bi1pdGVtPlxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwLWRyb3Bkb3duLWl0ZW0gdi1pZj1cIiEgYmFja3VwLmlzTmV3ZXN0XCIgQGNsaWNrLnByZXZlbnQgdi1tb2RhbDpkZWxldGUtZm9ybT1cImJhY2t1cFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdERlbGV0ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3AtZHJvcGRvd24taXRlbT5cblx0XHRcdFx0XHRcdFx0XHRcdDwvdGVtcGxhdGU+XG5cdFx0XHRcdFx0XHRcdFx0PC9wLWRyb3Bkb3duPlxuXHRcdFx0XHRcdFx0XHQ8L3RkPlxuXHRcdFx0XHRcdFx0PC90cj5cblx0XHRcdFx0XHQ8L3Rib2R5PlxuXHRcdFx0XHQ8L3RhYmxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9wLWNhcmQ+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cIm1vZGFsc1wiPlxuICAgICAgICAgICAgPHNldHRpbmdzLW1vZGFsIHNlY3Rpb249XCJiYWNrdXBzXCI+PC9zZXR0aW5ncy1tb2RhbD5cblxuICAgICAgICAgICAgPCEtLSBSZXN0b3JlIGZyb20gZXhpc3RpbmcgYmFja3VwIC0tPlxuICAgICAgICAgICAgPHAtbW9kYWwgbmFtZT1cInJlc3RvcmUtZm9ybVwiIHRpdGxlPVwiUmVzdG9yZSBCYWNrdXBcIiBrZXk9XCJyZXN0b3JlX2Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8cD5SZXN0b3JpbmcgYSBiYWNrdXAgd2lsbCA8Yj5yZXBsYWNlIGFsbCBmaWxlcyBhbmQgdGhlIGRhdGFiYXNlIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBiYWNrdXAuPC9iPiBVbmxlc3MgeW91IHNwZWNpZnkgdG8gY3JlYXRlIGEgbmV3IGJhY2t1cCBkdXJpbmcgdGhpcyBwcm9jZXNzLCB0aGVyZSB3aWxsIGJlIG5vIHdheSB0byB1bmRvIHlvdXIgY2hhbmdlcyBpZiB5b3UgY2hhbmdlIHlvdXIgbWluZC48L3A+XG5cbiAgICAgICAgXHRcdDxwLWNoZWNrYm94IG5hbWU9XCJzYXZlQmFja3VwXCIgdi1tb2RlbD1cInNhdmVCYWNrdXBcIj5cbiAgICAgICAgXHRcdFx0Q3JlYXRlIGEgYmFja3VwIGJlZm9yZSByZXN0b3JpbmdcbiAgICAgICAgXHRcdDwvcC1jaGVja2JveD5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImZvb3RlclwiIHNsb3Qtc2NvcGU9XCJmb3JtXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOnJlc3RvcmUtZm9ybSBAY2xpY2s9XCJyZXN0b3JlKGZvcm0uZGF0YS5uYW1lKVwiIHRoZW1lPVwicHJpbWFyeVwiIGNsYXNzPVwibWwtM1wiPlJlc3RvcmU8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDpyZXN0b3JlLWZvcm0+Q2FuY2VsPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wLW1vZGFsPlxuXG4gICAgICAgICAgICA8IS0tIFJ1biBtYW51YWwgYmFja3VwIHByb2Nlc3MgLS0+XG5cdFx0XHQ8cC1tb2RhbCBuYW1lPVwiY29uZmlybS1mb3JtXCIgdGl0bGU9XCJCYWNrdXAgTm93XCIga2V5PVwiY29uZmlybV9mb3JtXCI+XG4gICAgICAgICAgICAgICAgPHA+VGhpcyB3aWxsIHBlcmZvcm0gYSBmdWxsIGJhY2t1cCBvZiB5b3VyIHdlYnNpdGUuIEJhY2t1cHMgY2FuIHRha2UgdXAgdG8gb25lIG1pbnV0ZSBwZXIgR0Igb2YgZGF0YS48L3A+XG5cbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDpjb25maXJtLWZvcm0gQGNsaWNrPVwiYmFja3VwKClcIiB0aGVtZT1cInByaW1hcnlcIiBjbGFzcz1cIm1sLTNcIj5CYWNrdXA8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDpjb25maXJtLWZvcm0+Q2FuY2VsPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wLW1vZGFsPlxuXG4gICAgICAgICAgICA8IS0tIERlbGV0ZSBleGlzdGluZyBiYWNrdXAgLS0+XG5cdFx0XHQ8cC1tb2RhbCBuYW1lPVwiZGVsZXRlLWZvcm1cIiB0aXRsZT1cIkRlbGV0ZSBCYWNrdXBcIiBrZXk9XCJkZWxldGVfZm9ybVwiPlxuICAgICAgICAgICAgICAgIDxwPkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwZXJtZW5hbnRseSBkZWxldGUgdGhpcyBiYWNrdXA/PC9wPlxuXG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJmb290ZXJcIiBzbG90LXNjb3BlPVwiZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDpkZWxldGUtZm9ybSBAY2xpY2s9XCJkZXN0cm95KGZvcm0uZGF0YS5uYW1lKVwiIHRoZW1lPVwiZGFuZ2VyXCIgY2xhc3M9XCJtbC0zXCI+RGVsZXRlPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6ZGVsZXRlLWZvcm0+Q2FuY2VsPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wLW1vZGFsPlxuXG5cdFx0XHQ8IS0tIFVwbG9hZCBiYWNrdXAgLS0+XG5cdFx0XHQ8cC1tb2RhbCBuYW1lPVwidXBsb2FkXCIgdGl0bGU9XCJVcGxvYWQgQmFja3VwXCIga2V5PVwidXBsb2FkLWJhY2t1cFwiPlxuXHRcdFx0XHQ8cC11cGxvYWRcblx0XHRcdFx0XHRuYW1lPVwiZmlsZS11cGxvYWRcIlxuXHRcdFx0XHRcdHJlZj1cInVwbG9hZFwiXG5cdFx0XHRcdFx0YWNjZXB0PVwiemlwXCJcblx0XHRcdFx0XHQ6bXVsdGlwbGU9XCJmYWxzZVwiXG5cdFx0XHRcdFx0QGlucHV0PVwidXBsb2FkXCJcblx0XHRcdFx0PjwvcC11cGxvYWQ+XG5cdFx0XHQ8L3AtbW9kYWw+XG4gICAgICAgIDwvcG9ydGFsPlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogJ0JhY2t1cHMnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXHRcdH0sXG5cdFx0XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRlc3RpbmF0aW9uczogW10sXG5cdFx0XHRcdHJlYWR5OiBmYWxzZSxcblx0XHRcdFx0c2F2ZUJhY2t1cDogdHJ1ZSxcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuICAgICAgICAgICAgcmVmcmVzaCgpIHtcbiAgICAgICAgICAgIFx0dGhpcy5yZWFkeSA9IGZhbHNlXG5cbiAgICAgICAgICAgIFx0YXhpb3MuZ2V0KCcvYXBpL2JhY2t1cHMnKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgIFx0XHR0aGlzLmRlc3RpbmF0aW9ucyA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgICAgICAgXHRcdHRoaXMucmVhZHkgICAgICAgID0gdHJ1ZVxuICAgICAgICAgICAgXHRcdHRoaXMuc2F2ZUJhY2t1cCAgID0gdHJ1ZVxuICAgICAgICAgICAgXHR9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdXBsb2FkKGZpbGVzKSB7XG4gICAgICAgICAgICBcdGlmICh0eXBlb2YgZmlsZXMgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIFx0XHRyZXR1cm47XG4gICAgICAgICAgICBcdH1cblxuXHRcdFx0XHRjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cblx0XHRcdFx0Zm9ybURhdGEuYXBwZW5kKCdfbWV0aG9kJywgJ1BPU1QnKVxuXHRcdFx0XHRmb3JtRGF0YS5hcHBlbmQoJ2ZpbGUtdXBsb2FkJywgZmlsZXMpXG5cblx0XHRcdFx0YXhpb3MucG9zdCgnL2FwaS9iYWNrdXBzL3VwbG9hZCcsIGZvcm1EYXRhKS50aGVuKCgpID0+IHtcblx0XHRcdFx0XHR0b2FzdCgnQmFja3VwIHN1Y2Nlc3NmdWxseSB1cGxvYWRlZCEnLCAnc3VjY2VzcycpXG5cblx0XHRcdFx0XHR0aGlzLiRyZWZzLnVwbG9hZC5yZW1vdmUoKVxuXHRcdFx0XHRcdHRoaXMucmVmcmVzaCgpXG5cdFx0XHRcdH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBkb3dubG9hZChiYWNrdXApIHtcbiAgICAgICAgICAgIFx0d2luZG93Lm9wZW4oYC9iYWNrdXBzLyR7YmFja3VwfWAsICdfYmxhbmsnKVxuICAgICAgICAgICAgfSxcblxuXHRcdFx0cmVzdG9yZShiYWNrdXApIHtcblx0XHRcdFx0YXhpb3MucG9zdChgL2FwaS9iYWNrdXBzL3Jlc3RvcmUvJHtiYWNrdXB9YCwgeyBzYXZlQmFja3VwOiB0aGlzLnNhdmVCYWNrdXAgfSkudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0dG9hc3QoJ0JhY2t1cCBzdWNjZXNzZnVsbHkgcmVzdG9yZWQhJywgJ3N1Y2Nlc3MnKVxuXG5cdFx0XHRcdFx0dGhpcy5yZWZyZXNoKClcblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cblx0XHRcdGJhY2t1cCgpIHtcblx0XHRcdFx0YXhpb3MucG9zdCgnL2FwaS9iYWNrdXBzJykudGhlbihyZXNwb25zZSA9PiB7XG5cdFx0XHRcdFx0dG9hc3QoJ0JhY2t1cCBzdWNjZXNzZnVsbHkgY3JlYXRlZCEnLCAnc3VjY2VzcycpXG5cblx0XHRcdFx0XHR0aGlzLnJlZnJlc2goKVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblxuXHRcdFx0ZGVzdHJveShiYWNrdXApIHtcblx0XHRcdFx0YXhpb3MuZGVsZXRlKGAvYXBpL2JhY2t1cHMvJHtiYWNrdXB9YCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ0JhY2twIHN1Y2Nlc3NmdWxseSBkZWxldGVkIScsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2goKVxuICAgICAgICAgICAgICAgIH0pXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcblx0XHRcdG5leHQoZnVuY3Rpb24odm0pIHtcblx0XHRcdFx0dm0ucmVmcmVzaCgpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcInNhdmVcIiB9IH0sIFtfdm0uX3YoXCJCYWNrdXBzXCIpXSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogXCJtb2RhbFwiLCByYXdOYW1lOiBcInYtbW9kYWw6c2V0dGluZ3NcIiwgYXJnOiBcInNldHRpbmdzXCIgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gbXItMVwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlNldHRpbmdzXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogXCJtb2RhbFwiLCByYXdOYW1lOiBcInYtbW9kYWw6dXBsb2FkXCIsIGFyZzogXCJ1cGxvYWRcIiB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBtci0zXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiVXBsb2FkXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpjb25maXJtLWZvcm1cIixcbiAgICAgICAgICAgICAgICAgIGFyZzogXCJjb25maXJtLWZvcm1cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uLS1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiQmFja3VwIE5vd1wiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwLWNhcmRcIiwgeyBhdHRyczogeyBcIm5vLWJvZHlcIjogXCJcIiB9IH0sIFtcbiAgICAgICAgIV92bS5yZWFkeVxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keSB0ZXh0LWNlbnRlclwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmEtc3BpbiBtci0zXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBbXCJmYXNcIiwgXCJjaXJjbGUtbm90Y2hcIl0gfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBMb2FkaW5nIGJhY2t1cHMuLi5cXG5cXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uZGVzdGluYXRpb25zLCBmdW5jdGlvbihkZXN0aW5hdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRhYmxlXCIsIHsga2V5OiBkZXN0aW5hdGlvbi5uYW1lIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGhlYWRcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCJOYW1lXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkNyZWF0ZWRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiU2l6ZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woZGVzdGluYXRpb24uYmFja3VwcywgZnVuY3Rpb24oYmFja3VwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgeyBrZXk6IGJhY2t1cC5uYW1lIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoYmFja3VwLm5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoYmFja3VwLmhhcHBlbmVkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGJhY2t1cC5zaXplKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRleHQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtZHJvcGRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgcmlnaHQ6IFwiXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFtcImZhc1wiLCBcImJhcnNcIl0gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc2xvdDogXCJvcHRpb25zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6cmVzdG9yZS1mb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBiYWNrdXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYmFja3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJyZXN0b3JlLWZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFJlc3RvcmVcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZG93bmxvYWQoYmFja3VwLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHRcXHREb3dubG9hZFxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFiYWNrdXAuaXNOZXdlc3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1kcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6ZGVsZXRlLWZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBiYWNrdXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImJhY2t1cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlbGV0ZS1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdERlbGV0ZVxcblxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFxcdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJtb2RhbHNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNldHRpbmdzLW1vZGFsXCIsIHsgYXR0cnM6IHsgc2VjdGlvbjogXCJiYWNrdXBzXCIgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLW1vZGFsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJyZXN0b3JlX2Zvcm1cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJyZXN0b3JlLWZvcm1cIiwgdGl0bGU6IFwiUmVzdG9yZSBCYWNrdXBcIiB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOnJlc3RvcmUtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInJlc3RvcmUtZm9ybVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtbC0zXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucmVzdG9yZShmb3JtLmRhdGEubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiUmVzdG9yZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6cmVzdG9yZS1mb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwicmVzdG9yZS1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiUmVzdG9yaW5nIGEgYmFja3VwIHdpbGwgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwicmVwbGFjZSBhbGwgZmlsZXMgYW5kIHRoZSBkYXRhYmFzZSB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgYmFja3VwLlwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCIgVW5sZXNzIHlvdSBzcGVjaWZ5IHRvIGNyZWF0ZSBhIG5ldyBiYWNrdXAgZHVyaW5nIHRoaXMgcHJvY2VzcywgdGhlcmUgd2lsbCBiZSBubyB3YXkgdG8gdW5kbyB5b3VyIGNoYW5nZXMgaWYgeW91IGNoYW5nZSB5b3VyIG1pbmQuXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInAtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcInNhdmVCYWNrdXBcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zYXZlQmFja3VwLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNhdmVCYWNrdXAgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzYXZlQmFja3VwXCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFxcdFxcdFxcdENyZWF0ZSBhIGJhY2t1cCBiZWZvcmUgcmVzdG9yaW5nXFxuICAgICAgICBcXHRcXHRcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInAtbW9kYWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImNvbmZpcm1fZm9ybVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImNvbmZpcm0tZm9ybVwiLCB0aXRsZTogXCJCYWNrdXAgTm93XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlRoaXMgd2lsbCBwZXJmb3JtIGEgZnVsbCBiYWNrdXAgb2YgeW91ciB3ZWJzaXRlLiBCYWNrdXBzIGNhbiB0YWtlIHVwIHRvIG9uZSBtaW51dGUgcGVyIEdCIG9mIGRhdGEuXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgeyBzbG90OiBcImZvb3RlclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6Y29uZmlybS1mb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJjb25maXJtLWZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcInByaW1hcnlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYmFja3VwKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJCYWNrdXBcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmNvbmZpcm0tZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiY29uZmlybS1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLW1vZGFsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWxldGVfZm9ybVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImRlbGV0ZS1mb3JtXCIsIHRpdGxlOiBcIkRlbGV0ZSBCYWNrdXBcIiB9LFxuICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IFwiZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24oZm9ybSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmRlbGV0ZS1mb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVsZXRlLWZvcm1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWwtM1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aGVtZTogXCJkYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVzdHJveShmb3JtLmRhdGEubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRGVsZXRlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpkZWxldGUtZm9ybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlbGV0ZS1mb3JtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiQ2FuY2VsXCIpXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gcGVybWVuYW50bHkgZGVsZXRlIHRoaXMgYmFja3VwP1wiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1tb2RhbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwidXBsb2FkLWJhY2t1cFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcInVwbG9hZFwiLCB0aXRsZTogXCJVcGxvYWQgQmFja3VwXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwLXVwbG9hZFwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcInVwbG9hZFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiZmlsZS11cGxvYWRcIiwgYWNjZXB0OiBcInppcFwiLCBtdWx0aXBsZTogZmFsc2UgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBpbnB1dDogX3ZtLnVwbG9hZCB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDk0YTliODUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvc2FuZGJveC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0OTRhOWI4NScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0OTRhOWI4NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0OTRhOWI4NScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5NGE5Yjg1JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ5NGE5Yjg1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvQmFja3Vwcy9JbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5NGE5Yjg1JlwiIl0sInNvdXJjZVJvb3QiOiIifQ==