(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FileManager/Show.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FileManager/Show.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! plyr */ "./node_modules/plyr/dist/plyr.min.js");
/* harmony import */ var plyr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(plyr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _mixins_filehelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mixins/filehelper */ "./resources/js/mixins/filehelper.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        inner: this.file.name || 'Loading...'
      };
    }
  },
  mixins: [_mixins_filehelper__WEBPACK_IMPORTED_MODULE_2__["default"]],
  data: function data() {
    return {
      file: {},
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_1__["default"](),
      player: null,
      loaded: false
    };
  },
  computed: {
    fileSrc: function fileSrc(file) {
      return this.file.url + '?w=1500&h=1500&fit=max&t=' + this.$moment.utc(this.file.updated_at);
    }
  },
  watch: {
    file: {
      handler: function handler(value) {
        var _this = this;

        this.$nextTick(function () {
          _this.player = new plyr__WEBPACK_IMPORTED_MODULE_0___default.a(_this.$refs.player, {
            title: _this.file.name,
            ratio: '16:9',
            controls: ['play-large', // The large play button in the center
            'restart', // Restart playback
            'play', // Play/pause playback
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
            'volume', // Volume control
            'captions', // Toggle captions
            'settings', // Settings menu
            'pip', // Picture-in-picture (currently Safari only)
            'airplay', // Airplay (currently Safari only)
            'fullscreen' // Toggle fullscreen
            ],
            settings: ['quality', 'loop']
          });
        });
      },
      deep: true
    }
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapActions"])({
    toggleSelection: 'filemanager/toggleFileSelection'
  }), {
    getFile: function getFile(to, from, next) {
      var _this2 = this;

      axios.get('/api/files/' + to.params.uuid).then(function (response) {
        _this2.file = response.data.data;
        _this2.loaded = true;
        _this2.form = new _forms_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
          name: _this2.file.name,
          description: _this2.file.description
        });

        _this2.toggleSelection(_this2.file.id);

        _this2.$emit('updateHead');

        _this2.$nextTick(function () {
          _this2.player = new plyr__WEBPACK_IMPORTED_MODULE_0___default.a(_this2.$refs.player, {
            title: _this2.file.name,
            ratio: '16:9',
            controls: ['play-large', // The large play button in the center
            'restart', // Restart playback
            'play', // Play/pause playback
            'progress', // The progress bar and scrubber for playback and buffering
            'current-time', // The current time of playback
            'duration', // The full duration of the media
            'mute', // Toggle mute
            'volume', // Volume control
            'captions', // Toggle captions
            'settings', // Settings menu
            'pip', // Picture-in-picture (currently Safari only)
            'airplay', // Airplay (currently Safari only)
            'fullscreen' // Toggle fullscreen
            ],
            settings: ['quality', 'loop']
          });
        });
      });
    },
    submit: function submit() {
      var _this3 = this;

      this.form.patch("/api/files/".concat(this.file.id)).then(function (response) {
        _this3.file.name = _this3.form.name;
        toast('The file\'s information was successfully updated', 'success');
      })["catch"](function (error) {
        toast(error.response.data.message, 'danger');
      });
    },
    back: function back() {
      this.$router.push({
        name: 'file-manager.index'
      });
    },
    download: function download() {
      var _this4 = this;

      axios({
        url: '/api/files/' + this.file.uuid + '/download',
        method: 'GET',
        responseType: 'blob'
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', _this4.file.original);
        document.body.appendChild(link);
        link.click();
      });
      toast(this.file.original + ' downloaded', 'success');
    }
  }),
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next(function (vm) {
      vm.getFile(to, from, next);
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    this.getFile(to, from, next);
    next();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FileManager/Show.vue?vue&type=template&id=68d16b7a&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/FileManager/Show.vue?vue&type=template&id=68d16b7a& ***!
  \**************************************************************************************************************************************************************************************************************/
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
    "form-container",
    {
      scopedSlots: _vm._u([
        {
          key: "sidebar",
          fn: function() {
            return [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card__body" },
                  [
                    _c("p-input", {
                      attrs: {
                        name: "name",
                        label: "Name",
                        autocomplete: "off",
                        autofocus: "",
                        placeholder: "Name",
                        "has-error": _vm.form.errors.has("name"),
                        "error-message": _vm.form.errors.get("name")
                      },
                      model: {
                        value: _vm.form.name,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "name", $$v)
                        },
                        expression: "form.name"
                      }
                    }),
                    _vm._v(" "),
                    _c("p-textarea", {
                      attrs: {
                        name: "description",
                        label: "Description",
                        help:
                          "Describing your file isn't mandatory but is incredibly useful for accessibility.",
                        placeholder: "Description",
                        "has-error": _vm.form.errors.has("description"),
                        "error-message": _vm.form.errors.get("description")
                      },
                      model: {
                        value: _vm.form.description,
                        callback: function($$v) {
                          _vm.$set(_vm.form, "description", $$v)
                        },
                        expression: "form.description"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  { staticClass: "card__body" },
                  [
                    _c("p-input", {
                      staticClass: "text-sm",
                      attrs: {
                        name: "share",
                        readonly: "",
                        label: "Share",
                        value: _vm.file.url
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _vm.file.created_at
                ? _c(
                    "p-definition-list",
                    [
                      _c("p-definition", { attrs: { name: "Size" } }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm._f("bytes")(_vm.file.bytes)) +
                            "\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _c("p-definition", { attrs: { name: "Mimetype" } }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.file.mimetype) +
                            "\n            "
                        )
                      ]),
                      _vm._v(" "),
                      _vm.file.width && _vm.file.height
                        ? _c(
                            "p-definition",
                            { attrs: { name: "Dimensions" } },
                            [
                              _vm._v(
                                "\n                " +
                                  _vm._s(_vm.file.width) +
                                  " x " +
                                  _vm._s(_vm.file.height) +
                                  "\n            "
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _c("p-definition", { attrs: { name: "Last Modified" } }, [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm.$moment(_vm.file.created_at.date).format("L")
                            ) +
                            "\n            "
                        )
                      ])
                    ],
                    1
                  )
                : _vm._e()
            ]
          },
          proxy: true
        }
      ])
    },
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("app-title", { attrs: { icon: "image" } }, [
            _vm._v(_vm._s(_vm.loaded ? _vm.file.name : ""))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "actions" } }, [
        _c("div", { staticClass: "buttons" }, [
          _c(
            "button",
            {
              directives: [
                { name: "modal", rawName: "v-modal:delete", arg: "delete" }
              ],
              staticClass: "button button--danger"
            },
            [_vm._v("Delete")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              directives: [
                {
                  name: "modal",
                  rawName: "v-modal:move-file",
                  arg: "move-file"
                }
              ],
              staticClass: "button"
            },
            [_vm._v("Move")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              directives: [
                {
                  name: "modal",
                  rawName: "v-modal:replace-file",
                  arg: "replace-file"
                }
              ],
              staticClass: "button"
            },
            [_vm._v("Replace")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.download($event)
                }
              }
            },
            [_vm._v("Download")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.back($event)
                }
              }
            },
            [_vm._v("Go Back")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button button--primary",
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [_vm._v("Save")]
          )
        ])
      ]),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _c("move-file-modal"),
          _vm._v(" "),
          _c("replace-file-modal", {
            attrs: { file: _vm.file },
            on: {
              replaced: function(replacement) {
                return (_vm.file = replacement)
              }
            }
          }),
          _vm._v(" "),
          _c("delete-file-modal", { attrs: { file: _vm.file } })
        ],
        1
      ),
      _vm._v(" "),
      _vm.loaded
        ? _c("div", { key: _vm.file.name, staticClass: "card" }, [
            _c("div", { staticClass: "flex items-center justify-center" }, [
              _vm.file.type == "image"
                ? _c(
                    "div",
                    [
                      _c("p-img", {
                        staticClass: "rounded",
                        attrs: {
                          src: _vm.fileSrc,
                          alt: _vm.file.description,
                          "background-color": "#ffffff"
                        }
                      })
                    ],
                    1
                  )
                : _vm.file.type == "video"
                ? _c("div", { staticClass: "w-full" }, [
                    _c(
                      "video",
                      {
                        ref: "player",
                        attrs: { controls: "", crossorigin: "" }
                      },
                      [
                        _c("source", {
                          attrs: {
                            src: _vm.file.url,
                            type: _vm.file.mimetype,
                            size: "576"
                          }
                        })
                      ]
                    )
                  ])
                : _c(
                    "div",
                    [
                      _c("p-img", {
                        attrs: {
                          src:
                            "/vendor/fusion/img/" +
                            _vm.file.type +
                            "-small.svg",
                          "background-color": "#ffffff",
                          width: 200,
                          height: 200,
                          alt: _vm.file.description
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass:
                            "text-center px-6 py-3 rounded border border-gray-400 bg-gray-200 text-gray-800"
                        },
                        [
                          _vm._v(
                            "\n                    No preview available\n                "
                          )
                        ]
                      )
                    ],
                    1
                  )
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.file.type == "video"
        ? _c("div", { staticClass: "card" }, [
            _c(
              "div",
              { staticClass: "card__body text-center text-sm text-gray-800" },
              [
                _vm._v(
                  "\n            If you intend on serving this video on your website, it's highly recommended that you use a 3rd party service such as "
                ),
                _c("a", { attrs: { href: "" } }, [_vm._v("Youtube")]),
                _vm._v(" or "),
                _c("a", { attrs: { href: "" } }, [_vm._v("Vimeo")]),
                _vm._v(".\n        ")
              ]
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/FileManager/Show.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/FileManager/Show.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Show_vue_vue_type_template_id_68d16b7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Show.vue?vue&type=template&id=68d16b7a& */ "./resources/js/views/FileManager/Show.vue?vue&type=template&id=68d16b7a&");
/* harmony import */ var _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Show.vue?vue&type=script&lang=js& */ "./resources/js/views/FileManager/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Show_vue_vue_type_template_id_68d16b7a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Show_vue_vue_type_template_id_68d16b7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/FileManager/Show.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/FileManager/Show.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/FileManager/Show.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FileManager/Show.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/FileManager/Show.vue?vue&type=template&id=68d16b7a&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/FileManager/Show.vue?vue&type=template&id=68d16b7a& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_68d16b7a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Show.vue?vue&type=template&id=68d16b7a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/FileManager/Show.vue?vue&type=template&id=68d16b7a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_68d16b7a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Show_vue_vue_type_template_id_68d16b7a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0ZpbGVNYW5hZ2VyL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9GaWxlTWFuYWdlci9TaG93LnZ1ZT80ZGFlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9GaWxlTWFuYWdlci9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvU2hvdy52dWU/NWVkOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvU2hvdy52dWU/NWJhMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4SEE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLHNFQVRBO0FBV0EsTUFYQSxrQkFXQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLHFFQUZBO0FBR0Esa0JBSEE7QUFJQTtBQUpBO0FBTUEsR0FsQkE7QUFvQkE7QUFDQSxXQURBLG1CQUNBLElBREEsRUFDQTtBQUNBO0FBQ0E7QUFIQSxHQXBCQTtBQTBCQTtBQUNBO0FBQ0EsYUFEQSxtQkFDQSxLQURBLEVBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0Esa0NBREE7QUFFQSx5QkFGQTtBQUdBLHVCQUNBLFlBREEsRUFDQTtBQUNBLHFCQUZBLEVBRUE7QUFDQSxrQkFIQSxFQUdBO0FBQ0Esc0JBSkEsRUFJQTtBQUNBLDBCQUxBLEVBS0E7QUFDQSxzQkFOQSxFQU1BO0FBQ0Esa0JBUEEsRUFPQTtBQUNBLG9CQVJB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Rjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy84MC5qcz9pZD03ODk1MjJmOTNhYzhiMzcwYThmZSIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8Zm9ybS1jb250YWluZXI+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGFwcC10aXRsZSBpY29uPVwiaW1hZ2VcIj57eyBsb2FkZWQgPyBmaWxlLm5hbWUgOiAnJyB9fTwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tZGFuZ2VyXCIgdi1tb2RhbDpkZWxldGU+RGVsZXRlPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCIgdi1tb2RhbDptb3ZlLWZpbGU+TW92ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiB2LW1vZGFsOnJlcGxhY2UtZmlsZT5SZXBsYWNlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljay5wcmV2ZW50PVwiZG93bmxvYWRcIj5Eb3dubG9hZDwvYnV0dG9uPlxuXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljay5wcmV2ZW50PVwiYmFja1wiPkdvIEJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiIEBjbGljay5wcmV2ZW50PVwic3VibWl0XCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJtb2RhbHNcIj5cbiAgICAgICAgICAgIDxtb3ZlLWZpbGUtbW9kYWw+PC9tb3ZlLWZpbGUtbW9kYWw+XG5cbiAgICAgICAgICAgIDxyZXBsYWNlLWZpbGUtbW9kYWwgOmZpbGU9XCJmaWxlXCIgQHJlcGxhY2VkPVwicmVwbGFjZW1lbnQgPT4gZmlsZSA9IHJlcGxhY2VtZW50XCI+PC9yZXBsYWNlLWZpbGUtbW9kYWw+XG5cbiAgICAgICAgICAgIDxkZWxldGUtZmlsZS1tb2RhbCA6ZmlsZT1cImZpbGVcIj48L2RlbGV0ZS1maWxlLW1vZGFsPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiIHYtaWY9XCJsb2FkZWRcIiA6a2V5PVwiZmlsZS5uYW1lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJmaWxlLnR5cGUgPT0gJ2ltYWdlJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8cC1pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCJmaWxlU3JjXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDphbHQ9XCJmaWxlLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I9XCIjZmZmZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3AtaW1nPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UtaWY9XCJmaWxlLnR5cGUgPT0gJ3ZpZGVvJ1wiIGNsYXNzPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDx2aWRlbyByZWY9XCJwbGF5ZXJcIiBjb250cm9scyBjcm9zc29yaWdpbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzb3VyY2UgOnNyYz1cImZpbGUudXJsXCIgOnR5cGU9XCJmaWxlLm1pbWV0eXBlXCIgc2l6ZT1cIjU3NlwiPlxuICAgICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgIDxwLWltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIicvdmVuZG9yL2Z1c2lvbi9pbWcvJyArIGZpbGUudHlwZSArICctc21hbGwuc3ZnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yPVwiI2ZmZmZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6d2lkdGg9XCIyMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwiZmlsZS5kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8L3AtaW1nPlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTMgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktNDAwIGJnLWdyYXktMjAwIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIE5vIHByZXZpZXcgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgdi1pZj1cImZpbGUudHlwZSA9PSAndmlkZW8nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keSB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgICBJZiB5b3UgaW50ZW5kIG9uIHNlcnZpbmcgdGhpcyB2aWRlbyBvbiB5b3VyIHdlYnNpdGUsIGl0J3MgaGlnaGx5IHJlY29tbWVuZGVkIHRoYXQgeW91IHVzZSBhIDNyZCBwYXJ0eSBzZXJ2aWNlIHN1Y2ggYXMgPGEgaHJlZj1cIlwiPllvdXR1YmU8L2E+IG9yIDxhIGhyZWY9XCJcIj5WaW1lbzwvYT4uXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIHYtc2xvdDpzaWRlYmFyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXNcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZm9ybS5lcnJvcnMuaGFzKCduYW1lJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9yLW1lc3NhZ2U9XCJmb3JtLmVycm9ycy5nZXQoJ25hbWUnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cblxuICAgICAgICAgICAgICAgICAgICA8cC10ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkRlc2NyaWJpbmcgeW91ciBmaWxlIGlzbid0IG1hbmRhdG9yeSBidXQgaXMgaW5jcmVkaWJseSB1c2VmdWwgZm9yIGFjY2Vzc2liaWxpdHkuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnZGVzY3JpcHRpb24nKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8L3AtdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNoYXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNoYXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dC1zbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJmaWxlLnVybFwiPlxuICAgICAgICAgICAgICAgICAgICA8L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHAtZGVmaW5pdGlvbi1saXN0IHYtaWY9XCJmaWxlLmNyZWF0ZWRfYXRcIj5cbiAgICAgICAgICAgICAgICA8cC1kZWZpbml0aW9uIG5hbWU9XCJTaXplXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGZpbGUuYnl0ZXMgfCBieXRlcyB9fVxuICAgICAgICAgICAgICAgIDwvcC1kZWZpbml0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHAtZGVmaW5pdGlvbiBuYW1lPVwiTWltZXR5cGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgZmlsZS5taW1ldHlwZSB9fVxuICAgICAgICAgICAgICAgIDwvcC1kZWZpbml0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHAtZGVmaW5pdGlvbiBuYW1lPVwiRGltZW5zaW9uc1wiIHYtaWY9XCJmaWxlLndpZHRoICYmIGZpbGUuaGVpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGZpbGUud2lkdGggfX0geCB7eyBmaWxlLmhlaWdodCB9fVxuICAgICAgICAgICAgICAgIDwvcC1kZWZpbml0aW9uPlxuXG4gICAgICAgICAgICAgICAgPHAtZGVmaW5pdGlvbiBuYW1lPVwiTGFzdCBNb2RpZmllZFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyAkbW9tZW50KGZpbGUuY3JlYXRlZF9hdC5kYXRlKS5mb3JtYXQoJ0wnKSB9fVxuICAgICAgICAgICAgICAgIDwvcC1kZWZpbml0aW9uPlxuICAgICAgICAgICAgPC9wLWRlZmluaXRpb24tbGlzdD5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Zvcm0tY29udGFpbmVyPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgUGx5ciAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAncGx5cidcbiAgICBpbXBvcnQgRm9ybSAgICAgICAgICAgICAgICAgICAgICAgZnJvbSAnLi4vLi4vZm9ybXMvRm9ybSdcbiAgICBpbXBvcnQgRmlsZUhlbHBlck1peGluICAgICAgICAgICAgZnJvbSAnLi4vLi4vbWl4aW5zL2ZpbGVoZWxwZXInXG4gICAgaW1wb3J0IHsgbWFwQWN0aW9ucywgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiB0aGlzLmZpbGUubmFtZSB8fCAnTG9hZGluZy4uLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWl4aW5zOiBbIEZpbGVIZWxwZXJNaXhpbiBdLFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGZpbGU6IHt9LFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtLFxuICAgICAgICAgICAgICAgIHBsYXllcjogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBmaWxlU3JjKGZpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlLnVybCArICc/dz0xNTAwJmg9MTUwMCZmaXQ9bWF4JnQ9JyArIHRoaXMuJG1vbWVudC51dGModGhpcy5maWxlLnVwZGF0ZWRfYXQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGZpbGU6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBseXIodGhpcy4kcmVmcy5wbGF5ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5maWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW86ICcxNjo5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGxheS1sYXJnZScsICAgLy8gVGhlIGxhcmdlIHBsYXkgYnV0dG9uIGluIHRoZSBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3RhcnQnLCAgICAgIC8vIFJlc3RhcnQgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BsYXknLCAgICAgICAgIC8vIFBsYXkvcGF1c2UgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb2dyZXNzJywgICAgIC8vIFRoZSBwcm9ncmVzcyBiYXIgYW5kIHNjcnViYmVyIGZvciBwbGF5YmFjayBhbmQgYnVmZmVyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjdXJyZW50LXRpbWUnLCAvLyBUaGUgY3VycmVudCB0aW1lIG9mIHBsYXliYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkdXJhdGlvbicsICAgICAvLyBUaGUgZnVsbCBkdXJhdGlvbiBvZiB0aGUgbWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ211dGUnLCAgICAgICAgIC8vIFRvZ2dsZSBtdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2b2x1bWUnLCAgICAgICAvLyBWb2x1bWUgY29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FwdGlvbnMnLCAgICAgLy8gVG9nZ2xlIGNhcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzZXR0aW5ncycsICAgICAvLyBTZXR0aW5ncyBtZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwaXAnLCAgICAgICAgICAvLyBQaWN0dXJlLWluLXBpY3R1cmUgKGN1cnJlbnRseSBTYWZhcmkgb25seSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FpcnBsYXknLCAgICAgIC8vIEFpcnBsYXkgKGN1cnJlbnRseSBTYWZhcmkgb25seSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Z1bGxzY3JlZW4nLCAgIC8vIFRvZ2dsZSBmdWxsc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogWydxdWFsaXR5JywgJ2xvb3AnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC4uLm1hcEFjdGlvbnMoe1xuICAgICAgICAgICAgICAgIHRvZ2dsZVNlbGVjdGlvbjogJ2ZpbGVtYW5hZ2VyL3RvZ2dsZUZpbGVTZWxlY3Rpb24nLFxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIGdldEZpbGUodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvZmlsZXMvJyArIHRvLnBhcmFtcy51dWlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSAgID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybSAgID0gbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmZpbGUuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHRoaXMuZmlsZS5pZClcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlSGVhZCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbHlyKHRoaXMuJHJlZnMucGxheWVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW86ICcxNjo5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGF5LWxhcmdlJywgICAvLyBUaGUgbGFyZ2UgcGxheSBidXR0b24gaW4gdGhlIGNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3RhcnQnLCAgICAgIC8vIFJlc3RhcnQgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGF5JywgICAgICAgICAvLyBQbGF5L3BhdXNlIHBsYXliYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvZ3Jlc3MnLCAgICAgLy8gVGhlIHByb2dyZXNzIGJhciBhbmQgc2NydWJiZXIgZm9yIHBsYXliYWNrIGFuZCBidWZmZXJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjdXJyZW50LXRpbWUnLCAvLyBUaGUgY3VycmVudCB0aW1lIG9mIHBsYXliYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZHVyYXRpb24nLCAgICAgLy8gVGhlIGZ1bGwgZHVyYXRpb24gb2YgdGhlIG1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbXV0ZScsICAgICAgICAgLy8gVG9nZ2xlIG11dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2b2x1bWUnLCAgICAgICAvLyBWb2x1bWUgY29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcHRpb25zJywgICAgIC8vIFRvZ2dsZSBjYXB0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NldHRpbmdzJywgICAgIC8vIFNldHRpbmdzIG1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwaXAnLCAgICAgICAgICAvLyBQaWN0dXJlLWluLXBpY3R1cmUgKGN1cnJlbnRseSBTYWZhcmkgb25seSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhaXJwbGF5JywgICAgICAvLyBBaXJwbGF5IChjdXJyZW50bHkgU2FmYXJpIG9ubHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnVsbHNjcmVlbicsICAgLy8gVG9nZ2xlIGZ1bGxzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IFsncXVhbGl0eScsICdsb29wJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhdGNoKGAvYXBpL2ZpbGVzLyR7dGhpcy5maWxlLmlkfWApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlLm5hbWUgPSB0aGlzLmZvcm0ubmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCgnVGhlIGZpbGVcXCdzIGluZm9ybWF0aW9uIHdhcyBzdWNjZXNzZnVsbHkgdXBkYXRlZCcsICdzdWNjZXNzJylcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdkYW5nZXInKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYmFjaygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2ZpbGUtbWFuYWdlci5pbmRleCd9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZG93bmxvYWQoKSB7XG4gICAgICAgICAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2ZpbGVzLycgKyB0aGlzLmZpbGUudXVpZCArICcvZG93bmxvYWQnLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0pKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICAgICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCB0aGlzLmZpbGUub3JpZ2luYWwpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAgICAgICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRvYXN0KHRoaXMuZmlsZS5vcmlnaW5hbCArICcgZG93bmxvYWRlZCcsICdzdWNjZXNzJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgbmV4dCh2bSA9PiB7XG4gICAgICAgICAgICAgICAgdm0uZ2V0RmlsZSh0bywgZnJvbSwgbmV4dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVVcGRhdGUodG8sZnJvbSxuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmdldEZpbGUodG8sIGZyb20sIG5leHQpXG5cbiAgICAgICAgICAgIG5leHQoKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImZvcm0tY29udGFpbmVyXCIsXG4gICAge1xuICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IFwic2lkZWJhclwiLFxuICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX2JvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIk5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJuYW1lXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcIm5hbWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInAtdGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEZXNjcmliaW5nIHlvdXIgZmlsZSBpc24ndCBtYW5kYXRvcnkgYnV0IGlzIGluY3JlZGlibHkgdXNlZnVsIGZvciBhY2Nlc3NpYmlsaXR5LlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiRGVzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiZGVzY3JpcHRpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImRlc2NyaXB0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNoYXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNoYXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbGUudXJsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uZmlsZS5jcmVhdGVkX2F0XG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJwLWRlZmluaXRpb24tbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWRlZmluaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcIlNpemVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX2YoXCJieXRlc1wiKShfdm0uZmlsZS5ieXRlcykpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtZGVmaW5pdGlvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiTWltZXR5cGVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZmlsZS5taW1ldHlwZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5maWxlLndpZHRoICYmIF92bS5maWxlLmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtZGVmaW5pdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogXCJEaW1lbnNpb25zXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZmlsZS53aWR0aCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHggXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZmlsZS5oZWlnaHQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWRlZmluaXRpb25cIiwgeyBhdHRyczogeyBuYW1lOiBcIkxhc3QgTW9kaWZpZWRcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kbW9tZW50KF92bS5maWxlLmNyZWF0ZWRfYXQuZGF0ZSkuZm9ybWF0KFwiTFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgcHJveHk6IHRydWVcbiAgICAgICAgfVxuICAgICAgXSlcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImltYWdlXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sb2FkZWQgPyBfdm0uZmlsZS5uYW1lIDogXCJcIikpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidXR0b25zXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHsgbmFtZTogXCJtb2RhbFwiLCByYXdOYW1lOiBcInYtbW9kYWw6ZGVsZXRlXCIsIGFyZzogXCJkZWxldGVcIiB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLWRhbmdlclwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkRlbGV0ZVwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOm1vdmUtZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgYXJnOiBcIm1vdmUtZmlsZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJNb3ZlXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6cmVwbGFjZS1maWxlXCIsXG4gICAgICAgICAgICAgICAgICBhcmc6IFwicmVwbGFjZS1maWxlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIlJlcGxhY2VcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZG93bmxvYWQoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJEb3dubG9hZFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5iYWNrKCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJtb2RhbHNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIm1vdmUtZmlsZS1tb2RhbFwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicmVwbGFjZS1maWxlLW1vZGFsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGZpbGU6IF92bS5maWxlIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICByZXBsYWNlZDogZnVuY3Rpb24ocmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF92bS5maWxlID0gcmVwbGFjZW1lbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGVsZXRlLWZpbGUtbW9kYWxcIiwgeyBhdHRyczogeyBmaWxlOiBfdm0uZmlsZSB9IH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmxvYWRlZFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsga2V5OiBfdm0uZmlsZS5uYW1lLCBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLmZpbGUudHlwZSA9PSBcImltYWdlXCJcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5maWxlU3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5maWxlLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZmZmZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uZmlsZS50eXBlID09IFwidmlkZW9cIlxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidmlkZW9cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwicGxheWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb250cm9sczogXCJcIiwgY3Jvc3NvcmlnaW46IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzb3VyY2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmZpbGUudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IF92bS5maWxlLm1pbWV0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwiNTc2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiL3ZlbmRvci9mdXNpb24vaW1nL1wiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlsZS50eXBlICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIi1zbWFsbC5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBfdm0uZmlsZS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtY2VudGVyIHB4LTYgcHktMyByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS00MDAgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTgwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIE5vIHByZXZpZXcgYXZhaWxhYmxlXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZmlsZS50eXBlID09IFwidmlkZW9cIlxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX2JvZHkgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktODAwXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgSWYgeW91IGludGVuZCBvbiBzZXJ2aW5nIHRoaXMgdmlkZW8gb24geW91ciB3ZWJzaXRlLCBpdCdzIGhpZ2hseSByZWNvbW1lbmRlZCB0aGF0IHlvdSB1c2UgYSAzcmQgcGFydHkgc2VydmljZSBzdWNoIGFzIFwiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIlwiIH0gfSwgW192bS5fdihcIllvdXR1YmVcIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgb3IgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbX3ZtLl92KFwiVmltZW9cIildKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIuXFxuICAgICAgICBcIilcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjhkMTZiN2EmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9mdXNpb24vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjhkMTZiN2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjhkMTZiN2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjhkMTZiN2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4ZDE2YjdhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY4ZDE2YjdhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvU2hvdy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4ZDE2YjdhJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==