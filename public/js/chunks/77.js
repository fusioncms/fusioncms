(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[77],{

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
//
//
//
//
//
//
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
      form: null,
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
    "div",
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
      _c(
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
                  _vm.file
                    ? _c(
                        "p-definition-list",
                        [
                          _c("p-definition", { attrs: { name: "Size" } }, [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.bytes) +
                                "\n                "
                            )
                          ]),
                          _vm._v(" "),
                          _c("p-definition", { attrs: { name: "Mimetype" } }, [
                            _vm._v(
                              "\n                    " +
                                _vm._s(_vm.file.mimetype) +
                                "\n                "
                            )
                          ]),
                          _vm._v(" "),
                          _vm.file.width && _vm.file.height
                            ? _c(
                                "p-definition",
                                { attrs: { name: "Dimensions" } },
                                [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(_vm.file.width) +
                                      " x " +
                                      _vm._s(_vm.file.height) +
                                      "\n                "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _c(
                            "p-definition",
                            { attrs: { name: "Last Modified" } },
                            [
                              _vm._v(
                                "\n                    " +
                                  _vm._s(
                                    _vm
                                      .$moment(_vm.file.created_at.date)
                                      .format("L")
                                  ) +
                                  "\n                "
                              )
                            ]
                          )
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
          _c("portal", { attrs: { to: "actions" } }, [
            _c("div", { staticClass: "toolbar" }, [
              _c("div", { staticClass: "toolbar__group" }, [
                _c(
                  "div",
                  { staticClass: "buttons" },
                  [
                    _c(
                      "p-button",
                      {
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.goBack($event)
                          }
                        }
                      },
                      [_vm._v("Go Back")]
                    ),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "modal",
                            rawName: "v-modal:delete",
                            arg: "delete"
                          }
                        ],
                        staticClass: "button button--danger"
                      },
                      [_vm._v("Delete")]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "toolbar__group" }, [
                _c("div", { staticClass: "buttons" }, [
                  _c("div", { staticClass: "buttons__group" }, [
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
                    )
                  ])
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "toolbar__group" }, [
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
            ])
          ]),
          _vm._v(" "),
          _vm.loaded
            ? _c("div", { key: _vm.file.name, staticClass: "card" }, [
                _c("div", { staticClass: "flex items-center justify-center" }, [
                  _vm.isImage
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
                    : _vm.isVideo
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
                              src: "/img/" + _vm.type + "-small.svg",
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
                                "\n                        No preview available\n                    "
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
          _vm.isVideo
            ? _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  {
                    staticClass: "card__body text-center text-sm text-gray-800"
                  },
                  [
                    _vm._v(
                      "\n                If you intend on serving this video on your website, it's highly recommended that you use a 3rd party service such as "
                    ),
                    _c("a", { attrs: { href: "" } }, [_vm._v("Youtube")]),
                    _vm._v(" or "),
                    _c("a", { attrs: { href: "" } }, [_vm._v("Vimeo")]),
                    _vm._v(".\n            ")
                  ]
                )
              ])
            : _vm._e()
        ],
        1
      ),
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
      )
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0ZpbGVNYW5hZ2VyL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9GaWxlTWFuYWdlci9TaG93LnZ1ZT80ZGFlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9GaWxlTWFuYWdlci9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvU2hvdy52dWU/NWVkOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvU2hvdy52dWU/NWJhMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2SUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLHNFQVRBO0FBV0EsTUFYQSxrQkFXQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLGdCQUZBO0FBR0Esa0JBSEE7QUFJQTtBQUpBO0FBTUEsR0FsQkE7QUFvQkE7QUFDQSxXQURBLG1CQUNBLElBREEsRUFDQTtBQUNBO0FBQ0E7QUFIQSxHQXBCQTtBQTBCQTtBQUNBO0FBQ0EsYUFEQSxtQkFDQSxLQURBLEVBQ0E7QUFBQTs7QUFDQTtBQUNBO0FBQ0Esa0NBREE7QUFFQSx5QkFGQTtBQUdBLHVCQUNBLFlBREEsRUFDQTtBQUNBLHFCQUZBLEVBRUE7QUFDQSxrQkFIQSxFQUdBO0FBQ0Esc0JBSkEsRUFJQTtBQUNBLDBCQUxBLEVBS0E7QUFDQSxzQkFOQSxFQU1BO0FBQ0Esa0JBUEEs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QUFTLGlCQUFpQixFQUFFO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6WEE7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTBMLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvNzcuanM/aWQ9NDNhMjQxMWFhZTUxZmRlYWI5ZjkiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8YXBwLXRpdGxlIGljb249XCJpbWFnZVwiPnt7IGxvYWRlZCA/IGZpbGUubmFtZSA6ICcnIH19PC9hcHAtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxmb3JtLWNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xiYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2xiYXJfX2dyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBAY2xpY2sucHJldmVudD1cImdvQmFja1wiPkdvIEJhY2s8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1kYW5nZXJcIiB2LW1vZGFsOmRlbGV0ZT5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbGJhcl9fZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc19fZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIHYtbW9kYWw6bW92ZS1maWxlPk1vdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIHYtbW9kYWw6cmVwbGFjZS1maWxlPlJlcGxhY2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiIEBjbGljay5wcmV2ZW50PVwiZG93bmxvYWRcIj5Eb3dubG9hZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sYmFyX19ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiPlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIiB2LWlmPVwibG9hZGVkXCIgOmtleT1cImZpbGUubmFtZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJpc0ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c3JjPVwiZmlsZVNyY1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFsdD1cImZpbGUuZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I9XCIjZmZmZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1pbWc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwiaXNWaWRlb1wiIGNsYXNzPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dmlkZW8gcmVmPVwicGxheWVyXCIgY29udHJvbHMgY3Jvc3NvcmlnaW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSA6c3JjPVwiZmlsZS51cmxcIiA6dHlwZT1cImZpbGUubWltZXR5cGVcIiBzaXplPVwiNTc2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3ZpZGVvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzcmM9XCInL2ltZy8nICsgdHlwZSArICctc21hbGwuc3ZnJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcj1cIiNmZmZmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp3aWR0aD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhlaWdodD1cIjIwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFsdD1cImZpbGUuZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1pbWc+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBweC02IHB5LTMgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktNDAwIGJnLWdyYXktMjAwIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBwcmV2aWV3IGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCIgdi1pZj1cImlzVmlkZW9cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keSB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgSWYgeW91IGludGVuZCBvbiBzZXJ2aW5nIHRoaXMgdmlkZW8gb24geW91ciB3ZWJzaXRlLCBpdCdzIGhpZ2hseSByZWNvbW1lbmRlZCB0aGF0IHlvdSB1c2UgYSAzcmQgcGFydHkgc2VydmljZSBzdWNoIGFzIDxhIGhyZWY9XCJcIj5Zb3V0dWJlPC9hPiBvciA8YSBocmVmPVwiXCI+VmltZW88L2E+LlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LXNsb3Q6c2lkZWJhcj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLXRleHRhcmVhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiRGVzY3JpYmluZyB5b3VyIGZpbGUgaXNuJ3QgbWFuZGF0b3J5IGJ1dCBpcyBpbmNyZWRpYmx5IHVzZWZ1bCBmb3IgYWNjZXNzaWJpbGl0eS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2Rlc2NyaXB0aW9uJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvci1tZXNzYWdlPVwiZm9ybS5lcnJvcnMuZ2V0KCdkZXNjcmlwdGlvbicpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXRleHRhcmVhPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19ib2R5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGFyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNoYXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImZpbGUudXJsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHAtZGVmaW5pdGlvbi1saXN0IHYtaWY9XCJmaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWRlZmluaXRpb24gbmFtZT1cIlNpemVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGJ5dGVzIH19XG4gICAgICAgICAgICAgICAgICAgIDwvcC1kZWZpbml0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLWRlZmluaXRpb24gbmFtZT1cIk1pbWV0eXBlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBmaWxlLm1pbWV0eXBlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvcC1kZWZpbml0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLWRlZmluaXRpb24gbmFtZT1cIkRpbWVuc2lvbnNcIiB2LWlmPVwiZmlsZS53aWR0aCAmJiBmaWxlLmhlaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgZmlsZS53aWR0aCB9fSB4IHt7IGZpbGUuaGVpZ2h0IH19XG4gICAgICAgICAgICAgICAgICAgIDwvcC1kZWZpbml0aW9uPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwLWRlZmluaXRpb24gbmFtZT1cIkxhc3QgTW9kaWZpZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHt7ICRtb21lbnQoZmlsZS5jcmVhdGVkX2F0LmRhdGUpLmZvcm1hdCgnTCcpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvcC1kZWZpbml0aW9uPlxuICAgICAgICAgICAgICAgIDwvcC1kZWZpbml0aW9uLWxpc3Q+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Zvcm0tY29udGFpbmVyPlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJtb2RhbHNcIj5cbiAgICAgICAgICAgIDxtb3ZlLWZpbGUtbW9kYWw+PC9tb3ZlLWZpbGUtbW9kYWw+XG5cbiAgICAgICAgICAgIDxyZXBsYWNlLWZpbGUtbW9kYWwgOmZpbGU9XCJmaWxlXCIgQHJlcGxhY2VkPVwicmVwbGFjZW1lbnQgPT4gZmlsZSA9IHJlcGxhY2VtZW50XCI+PC9yZXBsYWNlLWZpbGUtbW9kYWw+XG5cbiAgICAgICAgICAgIDxkZWxldGUtZmlsZS1tb2RhbCA6ZmlsZT1cImZpbGVcIj48L2RlbGV0ZS1maWxlLW1vZGFsPlxuICAgICAgICA8L3BvcnRhbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFBseXIgICAgICAgICAgICAgICAgICAgICAgIGZyb20gJ3BseXInXG4gICAgaW1wb3J0IEZvcm0gICAgICAgICAgICAgICAgICAgICAgIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nXG4gICAgaW1wb3J0IEZpbGVIZWxwZXJNaXhpbiAgICAgICAgICAgIGZyb20gJy4uLy4uL21peGlucy9maWxlaGVscGVyJ1xuICAgIGltcG9ydCB7IG1hcEFjdGlvbnMsIG1hcEdldHRlcnMgfSBmcm9tICd2dWV4J1xuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZSgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpbm5lcjogdGhpcy5maWxlLm5hbWUgfHwgJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1peGluczogWyBGaWxlSGVscGVyTWl4aW4gXSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBmaWxlOiB7fSxcbiAgICAgICAgICAgICAgICBmb3JtOiBudWxsLFxuICAgICAgICAgICAgICAgIHBsYXllcjogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBmaWxlU3JjKGZpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlLnVybCArICc/dz0xNTAwJmg9MTUwMCZmaXQ9bWF4JnQ9JyArIHRoaXMuJG1vbWVudC51dGModGhpcy5maWxlLnVwZGF0ZWRfYXQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGZpbGU6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBseXIodGhpcy4kcmVmcy5wbGF5ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5maWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW86ICcxNjo5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGxheS1sYXJnZScsICAgLy8gVGhlIGxhcmdlIHBsYXkgYnV0dG9uIGluIHRoZSBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3RhcnQnLCAgICAgIC8vIFJlc3RhcnQgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BsYXknLCAgICAgICAgIC8vIFBsYXkvcGF1c2UgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb2dyZXNzJywgICAgIC8vIFRoZSBwcm9ncmVzcyBiYXIgYW5kIHNjcnViYmVyIGZvciBwbGF5YmFjayBhbmQgYnVmZmVyaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjdXJyZW50LXRpbWUnLCAvLyBUaGUgY3VycmVudCB0aW1lIG9mIHBsYXliYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkdXJhdGlvbicsICAgICAvLyBUaGUgZnVsbCBkdXJhdGlvbiBvZiB0aGUgbWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ211dGUnLCAgICAgICAgIC8vIFRvZ2dsZSBtdXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2b2x1bWUnLCAgICAgICAvLyBWb2x1bWUgY29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2FwdGlvbnMnLCAgICAgLy8gVG9nZ2xlIGNhcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzZXR0aW5ncycsICAgICAvLyBTZXR0aW5ncyBtZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwaXAnLCAgICAgICAgICAvLyBQaWN0dXJlLWluLXBpY3R1cmUgKGN1cnJlbnRseSBTYWZhcmkgb25seSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FpcnBsYXknLCAgICAgIC8vIEFpcnBsYXkgKGN1cnJlbnRseSBTYWZhcmkgb25seSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Z1bGxzY3JlZW4nLCAgIC8vIFRvZ2dsZSBmdWxsc2NyZWVuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczogWydxdWFsaXR5JywgJ2xvb3AnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBkZWVwOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIC4uLm1hcEFjdGlvbnMoe1xuICAgICAgICAgICAgICAgIHRvZ2dsZVNlbGVjdGlvbjogJ2ZpbGVtYW5hZ2VyL3RvZ2dsZUZpbGVTZWxlY3Rpb24nLFxuICAgICAgICAgICAgfSksXG5cbiAgICAgICAgICAgIGdldEZpbGUodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvZmlsZXMvJyArIHRvLnBhcmFtcy51dWlkKVxuICAgICAgICAgICAgICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZSAgID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybSAgID0gbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmZpbGUuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlU2VsZWN0aW9uKHRoaXMuZmlsZS5pZClcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlSGVhZCcpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXllciA9IG5ldyBQbHlyKHRoaXMuJHJlZnMucGxheWVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW86ICcxNjo5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGF5LWxhcmdlJywgICAvLyBUaGUgbGFyZ2UgcGxheSBidXR0b24gaW4gdGhlIGNlbnRlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3RhcnQnLCAgICAgIC8vIFJlc3RhcnQgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGF5JywgICAgICAgICAvLyBQbGF5L3BhdXNlIHBsYXliYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvZ3Jlc3MnLCAgICAgLy8gVGhlIHByb2dyZXNzIGJhciBhbmQgc2NydWJiZXIgZm9yIHBsYXliYWNrIGFuZCBidWZmZXJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjdXJyZW50LXRpbWUnLCAvLyBUaGUgY3VycmVudCB0aW1lIG9mIHBsYXliYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZHVyYXRpb24nLCAgICAgLy8gVGhlIGZ1bGwgZHVyYXRpb24gb2YgdGhlIG1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnbXV0ZScsICAgICAgICAgLy8gVG9nZ2xlIG11dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2b2x1bWUnLCAgICAgICAvLyBWb2x1bWUgY29udHJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcHRpb25zJywgICAgIC8vIFRvZ2dsZSBjYXB0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NldHRpbmdzJywgICAgIC8vIFNldHRpbmdzIG1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwaXAnLCAgICAgICAgICAvLyBQaWN0dXJlLWluLXBpY3R1cmUgKGN1cnJlbnRseSBTYWZhcmkgb25seSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdhaXJwbGF5JywgICAgICAvLyBBaXJwbGF5IChjdXJyZW50bHkgU2FmYXJpIG9ubHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZnVsbHNjcmVlbicsICAgLy8gVG9nZ2xlIGZ1bGxzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IFsncXVhbGl0eScsICdsb29wJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhdGNoKGAvYXBpL2ZpbGVzLyR7dGhpcy5maWxlLmlkfWApXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlLm5hbWUgPSB0aGlzLmZvcm0ubmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdCgnVGhlIGZpbGVcXCdzIGluZm9ybWF0aW9uIHdhcyBzdWNjZXNzZnVsbHkgdXBkYXRlZCcsICdzdWNjZXNzJylcbiAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdkYW5nZXInKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYmFjaygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2ZpbGUtbWFuYWdlci5pbmRleCd9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZG93bmxvYWQoKSB7XG4gICAgICAgICAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2ZpbGVzLycgKyB0aGlzLmZpbGUudXVpZCArICcvZG93bmxvYWQnLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0pKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICAgICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCB0aGlzLmZpbGUub3JpZ2luYWwpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAgICAgICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRvYXN0KHRoaXMuZmlsZS5vcmlnaW5hbCArICcgZG93bmxvYWRlZCcsICdzdWNjZXNzJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgbmV4dCh2bSA9PiB7XG4gICAgICAgICAgICAgICAgdm0uZ2V0RmlsZSh0bywgZnJvbSwgbmV4dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVVcGRhdGUodG8sZnJvbSxuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmdldEZpbGUodG8sIGZyb20sIG5leHQpXG5cbiAgICAgICAgICAgIG5leHQoKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImltYWdlXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sb2FkZWQgPyBfdm0uZmlsZS5uYW1lIDogXCJcIikpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJmb3JtLWNvbnRhaW5lclwiLFxuICAgICAgICB7XG4gICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJzaWRlYmFyXCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZF9fYm9keVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlOiBcIm9mZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1czogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJOYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC10ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRGVzY3JpYmluZyB5b3VyIGZpbGUgaXNuJ3QgbWFuZGF0b3J5IGJ1dCBpcyBpbmNyZWRpYmx5IHVzZWZ1bCBmb3IgYWNjZXNzaWJpbGl0eS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaGFzLWVycm9yXCI6IF92bS5mb3JtLmVycm9ycy5oYXMoXCJkZXNjcmlwdGlvblwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yLW1lc3NhZ2VcIjogX3ZtLmZvcm0uZXJyb3JzLmdldChcImRlc2NyaXB0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcImRlc2NyaXB0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZm9ybS5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRfX2JvZHlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc21cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNoYXJlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2hhcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbGUudXJsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5maWxlXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInAtZGVmaW5pdGlvbi1saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1kZWZpbml0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJTaXplXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5ieXRlcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1kZWZpbml0aW9uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJNaW1ldHlwZVwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZmlsZS5taW1ldHlwZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWxlLndpZHRoICYmIF92bS5maWxlLmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1kZWZpbml0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogXCJEaW1lbnNpb25zXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5maWxlLndpZHRoKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHggXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZpbGUuaGVpZ2h0KSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWRlZmluaXRpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwiTGFzdCBNb2RpZmllZFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4kbW9tZW50KF92bS5maWxlLmNyZWF0ZWRfYXQuZGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIkxcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHByb3h5OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicG9ydGFsXCIsIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b29sYmFyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvb2xiYXJfX2dyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvQmFjaygkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJHbyBCYWNrXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6ZGVsZXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcImRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRlbGV0ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvb2xiYXJfX2dyb3VwXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uc19fZ3JvdXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDptb3ZlLWZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwibW92ZS1maWxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTW92ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOnJlcGxhY2UtZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJyZXBsYWNlLWZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZXBsYWNlXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kb3dubG9hZCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEb3dubG9hZFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b29sYmFyX19ncm91cFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIixcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ubG9hZGVkXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsga2V5OiBfdm0uZmlsZS5uYW1lLCBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uaXNJbWFnZVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5maWxlU3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBfdm0uZmlsZS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZmZmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5pc1ZpZGVvXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWRlb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInBsYXllclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGNvbnRyb2xzOiBcIlwiLCBjcm9zc29yaWdpbjogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNvdXJjZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5maWxlLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogX3ZtLmZpbGUubWltZXR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwiNTc2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL2ltZy9cIiArIF92bS50eXBlICsgXCItc21hbGwuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5maWxlLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWNlbnRlciBweC02IHB5LTMgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktNDAwIGJnLWdyYXktMjAwIHRleHQtZ3JheS04MDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIE5vIHByZXZpZXcgYXZhaWxhYmxlXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uaXNWaWRlb1xuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkX19ib2R5IHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTgwMFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgSWYgeW91IGludGVuZCBvbiBzZXJ2aW5nIHRoaXMgdmlkZW8gb24geW91ciB3ZWJzaXRlLCBpdCdzIGhpZ2hseSByZWNvbW1lbmRlZCB0aGF0IHlvdSB1c2UgYSAzcmQgcGFydHkgc2VydmljZSBzdWNoIGFzIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbX3ZtLl92KFwiWW91dHViZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgb3IgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIlwiIH0gfSwgW192bS5fdihcIlZpbWVvXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIi5cXG4gICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwibW9kYWxzXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJtb3ZlLWZpbGUtbW9kYWxcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInJlcGxhY2UtZmlsZS1tb2RhbFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBmaWxlOiBfdm0uZmlsZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgcmVwbGFjZWQ6IGZ1bmN0aW9uKHJlcGxhY2VtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChfdm0uZmlsZSA9IHJlcGxhY2VtZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRlbGV0ZS1maWxlLW1vZGFsXCIsIHsgYXR0cnM6IHsgZmlsZTogX3ZtLmZpbGUgfSB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4ZDE2YjdhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjhkMTZiN2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjhkMTZiN2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjhkMTZiN2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4ZDE2YjdhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY4ZDE2YjdhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvU2hvdy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4ZDE2YjdhJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==