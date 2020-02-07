(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[71],{

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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    title: function title() {
      return {
        inner: this.name || 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      file: {},
      name: '',
      description: '',
      player: null,
      loaded: false
    };
  },
  computed: {
    fileSrc: function fileSrc(file) {
      return this.file.url + '?w=1500&h=1500&fit=max&t=' + this.$moment.utc(this.file.updated_at);
    },
    isImage: function isImage() {
      return this.type === 'image';
    },
    isVideo: function isVideo() {
      return this.type === 'video';
    },
    isAudio: function isAudio() {
      return this.type === 'audio';
    },
    isDocument: function isDocument() {
      return this.type === 'document';
    },
    isMisc: function isMisc() {
      return this.type === 'misc';
    },
    type: function type() {
      var type = _.split(this.file.mimetype, '/', 1)[0];

      switch (type) {
        case 'image':
          return 'image';
          break;

        case 'audio':
          return 'audio';
          break;

        case 'video':
          return 'video';
          break;

        case 'application':
        case 'text':
          return 'document';
          break;

        default:
          return 'misc';
      }
    },
    bytes: function bytes() {
      var bytes = this.file.bytes;
      var thresh = 1000;

      if (Math.abs(bytes) < thresh) {
        return bytes + ' B';
      }

      var index = -1;
      var units = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

      do {
        bytes /= thresh;
        ++index;
      } while (Math.abs(bytes) >= thresh && index < units.length - 1);

      return bytes.toFixed(1) + ' ' + units[index];
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
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    toggleSelection: 'filemanager/toggleFileSelection'
  }), {
    getFile: function getFile(to, from, next) {
      var _this2 = this;

      var vm = this;
      axios.get('/api/files/' + to.params.uuid).then(function (response) {
        vm.file = response.data.data;
        vm.name = vm.file.name;
        vm.description = vm.file.description;
        vm.loaded = true;

        _this2.toggleSelection(vm.file.id);

        vm.$emit('updateHead');
        vm.$nextTick(function () {
          vm.player = new plyr__WEBPACK_IMPORTED_MODULE_0___default.a(vm.$refs.player, {
            title: vm.file.name,
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

      axios.patch('/api/files/' + this.file.id, {
        name: this.name,
        description: this.description
      }).then(function (response) {
        _this3.file.name = _this3.name;
        toast('The file\'s information was successfully updated', 'success');
      })["catch"](function (error) {
        toast(error.response.data.message, 'danger');
      });
    },
    goBack: function goBack() {
      this.$router.go(-1);
    },
    download: function download() {
      var vm = this;
      axios({
        url: '/api/files/' + this.file.uuid + '/download',
        method: 'GET',
        responseType: 'blob'
      }).then(function (response) {
        var url = window.URL.createObjectURL(new Blob([response.data]));
        var link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', vm.file.original);
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
      _vm.loaded
        ? _c("div", { key: _vm.file.name, staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "content-container" },
              [
                _c("p-card", [
                  _c(
                    "div",
                    { staticClass: "flex items-center justify-center" },
                    [
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
                                    "\n                            No preview available\n                        "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                    ]
                  )
                ]),
                _vm._v(" "),
                _vm.isVideo
                  ? _c(
                      "p-card",
                      { staticClass: "mt-6 text-center text-sm text-gray-800" },
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
                  : _vm._e()
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "side-container" },
              [
                _c("p-card", { staticClass: "mb-6" }, [
                  _c(
                    "form",
                    {
                      attrs: { enctype: "multipart/form-data" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.submit($event)
                        }
                      }
                    },
                    [
                      _c(
                        "portal",
                        { attrs: { to: "actions" } },
                        [
                          _c(
                            "p-button",
                            {
                              directives: [
                                {
                                  name: "modal",
                                  rawName: "v-modal:delete",
                                  arg: "delete"
                                }
                              ],
                              staticClass: "mr-4",
                              attrs: { theme: "danger" }
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
                                  rawName: "v-modal:move-file",
                                  arg: "move-file"
                                }
                              ]
                            },
                            [_vm._v("Move")]
                          ),
                          _vm._v(" "),
                          _c(
                            "p-button",
                            {
                              directives: [
                                {
                                  name: "modal",
                                  rawName: "v-modal:replace-file",
                                  arg: "replace-file"
                                }
                              ]
                            },
                            [_vm._v("Replace")]
                          ),
                          _vm._v(" "),
                          _c(
                            "p-button",
                            {
                              staticClass: "mr-4",
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
                              staticClass: "button button--primary",
                              attrs: { type: "submit" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.submit($event)
                                }
                              }
                            },
                            [_vm._v("Save")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("p-input", {
                        attrs: { name: "name", label: "Name" },
                        model: {
                          value: _vm.name,
                          callback: function($$v) {
                            _vm.name = $$v
                          },
                          expression: "name"
                        }
                      }),
                      _vm._v(" "),
                      _c("p-textarea", {
                        attrs: {
                          name: "description",
                          label: "Description",
                          help:
                            "Describing your file isn't mandatory but is incredibly useful for accessibility."
                        },
                        model: {
                          value: _vm.description,
                          callback: function($$v) {
                            _vm.description = $$v
                          },
                          expression: "description"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c(
                  "p-card",
                  { staticClass: "mb-6" },
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
                ),
                _vm._v(" "),
                _vm.file
                  ? _c("p-card", { staticClass: "text-sm" }, [
                      _c("div", { staticClass: "flex justify-between" }, [
                        _c("label", { staticClass: "form__label" }, [
                          _vm._v("Size")
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.bytes))])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex justify-between" }, [
                        _c("label", { staticClass: "form__label" }, [
                          _vm._v("Mimetype")
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v(_vm._s(_vm.file.mimetype))])
                      ]),
                      _vm._v(" "),
                      _vm.file.width && _vm.file.height
                        ? _c("div", { staticClass: "flex justify-between" }, [
                            _c("label", { staticClass: "form__label" }, [
                              _vm._v("Dimensions")
                            ]),
                            _vm._v(" "),
                            _c("p", [
                              _vm._v(
                                _vm._s(_vm.file.width) +
                                  " x " +
                                  _vm._s(_vm.file.height)
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", { staticClass: "flex justify-between" }, [
                        _c("label", { staticClass: "form__label" }, [
                          _vm._v("Last Modified")
                        ]),
                        _vm._v(" "),
                        _c("p", [
                          _vm._v(
                            _vm._s(
                              _vm.$moment(_vm.file.created_at.date).format("L")
                            )
                          )
                        ])
                      ])
                    ])
                  : _vm._e()
              ],
              1
            )
          ])
        : _vm._e(),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0ZpbGVNYW5hZ2VyL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9GaWxlTWFuYWdlci9TaG93LnZ1ZT80ZGFlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9GaWxlTWFuYWdlci9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvU2hvdy52dWU/NWVkOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvU2hvdy52dWU/NWJhMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0hBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTEEsR0FEQTtBQVNBLE1BVEEsa0JBU0E7QUFDQTtBQUNBLGNBREE7QUFFQSxjQUZBO0FBR0EscUJBSEE7QUFJQSxrQkFKQTtBQUtBO0FBTEE7QUFPQSxHQWpCQTtBQW1CQTtBQUNBLFdBREEsbUJBQ0EsSUFEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBO0FBS0EsV0FMQSxxQkFLQTtBQUNBO0FBQ0EsS0FQQTtBQVNBLFdBVEEscUJBU0E7QUFDQTtBQUNBLEtBWEE7QUFhQSxXQWJBLHFCQWFBO0FBQ0E7QUFDQSxLQWZBO0FBaUJBLGNBakJBLHdCQWlCQTtBQUNBO0FBQ0EsS0FuQkE7QUFxQkEsVUFyQkEsb0JBcUJBO0FBQ0E7QUFDQSxLQXZCQTtBQXlCQSxRQXpCQSxrQkF5QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7O0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsZUFBZSxFQUFFO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsbUNBQW1DLFNBQVMsaUJBQWlCLEVBQUU7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQy9WQTtBQUFBO0FBQUE7QUFBQTtBQUFtRjtBQUMzQjtBQUNMOzs7QUFHbkQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMEVBQU07QUFDUixFQUFFLCtFQUFNO0FBQ1IsRUFBRSx3RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMEwsQ0FBZ0IsZ1BBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy83MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxhcHAtdGl0bGUgaWNvbj1cImltYWdlXCI+e3sgbG9hZGVkID8gZmlsZS5uYW1lIDogJycgfX08L2FwcC10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiIHYtaWY9XCJsb2FkZWRcIiA6a2V5PVwiZmlsZS5uYW1lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cC1jYXJkPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImlzSW1hZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cImZpbGVTcmNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwiZmlsZS5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I9XCIjZmZmZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cImlzVmlkZW9cIiBjbGFzcz1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2aWRlbyByZWY9XCJwbGF5ZXJcIiBjb250cm9scyBjcm9zc29yaWdpbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSA6c3JjPVwiZmlsZS51cmxcIiA6dHlwZT1cImZpbGUubWltZXR5cGVcIiBzaXplPVwiNTc2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIicvaW1nLycgKyB0eXBlICsgJy1zbWFsbC5zdmcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcj1cIiNmZmZmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6d2lkdGg9XCIyMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFsdD1cImZpbGUuZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW1nPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHB4LTYgcHktMyByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS00MDAgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBwcmV2aWV3IGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcC1jYXJkPlxuXG4gICAgICAgICAgICAgICAgPHAtY2FyZCB2LWlmPVwiaXNWaWRlb1wiIGNsYXNzPVwibXQtNiB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgSWYgeW91IGludGVuZCBvbiBzZXJ2aW5nIHRoaXMgdmlkZW8gb24geW91ciB3ZWJzaXRlLCBpdCdzIGhpZ2hseSByZWNvbW1lbmRlZCB0aGF0IHlvdSB1c2UgYSAzcmQgcGFydHkgc2VydmljZSBzdWNoIGFzIDxhIGhyZWY9XCJcIj5Zb3V0dWJlPC9hPiBvciA8YSBocmVmPVwiXCI+VmltZW88L2E+LlxuICAgICAgICAgICAgICAgIDwvcC1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxwLWNhcmQgY2xhc3M9XCJtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB0aGVtZT1cImRhbmdlclwiIGNsYXNzPVwibXItNFwiIHYtbW9kYWw6ZGVsZXRlPkRlbGV0ZTwvcC1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDptb3ZlLWZpbGU+TW92ZTwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHYtbW9kYWw6cmVwbGFjZS1maWxlPlJlcGxhY2U8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBAY2xpY2sucHJldmVudD1cImRvd25sb2FkXCIgY2xhc3M9XCJtci00XCI+RG93bmxvYWQ8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBAY2xpY2sucHJldmVudD1cImdvQmFja1wiPkdvIEJhY2s8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIEBjbGljay5wcmV2ZW50PVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtdGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkRlc2NyaWJpbmcgeW91ciBmaWxlIGlzbid0IG1hbmRhdG9yeSBidXQgaXMgaW5jcmVkaWJseSB1c2VmdWwgZm9yIGFjY2Vzc2liaWxpdHkuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L3AtY2FyZD5cblxuICAgICAgICAgICAgICAgIDxwLWNhcmQgY2xhc3M9XCJtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hhcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2hhcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImZpbGUudXJsXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L3AtY2FyZD5cblxuICAgICAgICAgICAgICAgIDxwLWNhcmQgY2xhc3M9XCJ0ZXh0LXNtXCIgdi1pZj1cImZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtX19sYWJlbFwiPlNpemU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgYnl0ZXMgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj5NaW1ldHlwZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBmaWxlLm1pbWV0eXBlIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIiB2LWlmPVwiZmlsZS53aWR0aCAmJiBmaWxlLmhlaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj5EaW1lbnNpb25zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IGZpbGUud2lkdGggfX0geCB7eyBmaWxlLmhlaWdodCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtX19sYWJlbFwiPkxhc3QgTW9kaWZpZWQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgJG1vbWVudChmaWxlLmNyZWF0ZWRfYXQuZGF0ZSkuZm9ybWF0KCdMJykgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcC1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJtb2RhbHNcIj5cbiAgICAgICAgICAgIDxtb3ZlLWZpbGUtbW9kYWw+PC9tb3ZlLWZpbGUtbW9kYWw+XG5cbiAgICAgICAgICAgIDxyZXBsYWNlLWZpbGUtbW9kYWwgOmZpbGU9XCJmaWxlXCIgQHJlcGxhY2VkPVwicmVwbGFjZW1lbnQgPT4gZmlsZSA9IHJlcGxhY2VtZW50XCI+PC9yZXBsYWNlLWZpbGUtbW9kYWw+XG5cbiAgICAgICAgICAgIDxkZWxldGUtZmlsZS1tb2RhbCA6ZmlsZT1cImZpbGVcIj48L2RlbGV0ZS1maWxlLW1vZGFsPlxuICAgICAgICA8L3BvcnRhbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFBseXIgZnJvbSAncGx5cidcbiAgICBpbXBvcnQgeyBtYXBBY3Rpb25zLCBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6IHRoaXMubmFtZSB8fCAnTG9hZGluZy4uLidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmlsZToge30sXG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgICAgICAgIHBsYXllcjogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBmaWxlU3JjKGZpbGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maWxlLnVybCArICc/dz0xNTAwJmg9MTUwMCZmaXQ9bWF4JnQ9JyArIHRoaXMuJG1vbWVudC51dGModGhpcy5maWxlLnVwZGF0ZWRfYXQpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc0ltYWdlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdpbWFnZSdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzVmlkZW8oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ3ZpZGVvJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNBdWRpbygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSAnYXVkaW8nXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc0RvY3VtZW50KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdkb2N1bWVudCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzTWlzYygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSAnbWlzYydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHR5cGUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSAoXy5zcGxpdCh0aGlzLmZpbGUubWltZXR5cGUsICcvJywgMSkpWzBdXG5cbiAgICAgICAgICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2ltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXVkaW8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdWRpbydcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZpZGVvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAndmlkZW8nXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhcHBsaWNhdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdkb2N1bWVudCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ21pc2MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYnl0ZXMoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJ5dGVzID0gdGhpcy5maWxlLmJ5dGVzXG4gICAgICAgICAgICAgICAgbGV0IHRocmVzaCA9IDEwMDBcblxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhieXRlcykgPCB0aHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ5dGVzICsgJyBCJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IC0xXG4gICAgICAgICAgICAgICAgbGV0IHVuaXRzID0gWydLQicsICdNQicsICdHQicsICdUQicsICdQQicsICdFQicsICdaQicsICdZQiddXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBieXRlcyAvPSB0aHJlc2hcbiAgICAgICAgICAgICAgICAgICAgKytpbmRleFxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGJ5dGVzKSA+PSB0aHJlc2ggJiYgaW5kZXggPCB1bml0cy5sZW5ndGggLSAxKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ5dGVzLnRvRml4ZWQoMSkgKyAnICcgKyB1bml0c1tpbmRleF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGZpbGU6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBseXIodGhpcy4kcmVmcy5wbGF5ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5maWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW86ICcxNjo5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGxheS1sYXJnZScsIC8vIFRoZSBsYXJnZSBwbGF5IGJ1dHRvbiBpbiB0aGUgY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXN0YXJ0JywgLy8gUmVzdGFydCBwbGF5YmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGxheScsIC8vIFBsYXkvcGF1c2UgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb2dyZXNzJywgLy8gVGhlIHByb2dyZXNzIGJhciBhbmQgc2NydWJiZXIgZm9yIHBsYXliYWNrIGFuZCBidWZmZXJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2N1cnJlbnQtdGltZScsIC8vIFRoZSBjdXJyZW50IHRpbWUgb2YgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2R1cmF0aW9uJywgLy8gVGhlIGZ1bGwgZHVyYXRpb24gb2YgdGhlIG1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtdXRlJywgLy8gVG9nZ2xlIG11dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZvbHVtZScsIC8vIFZvbHVtZSBjb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXB0aW9ucycsIC8vIFRvZ2dsZSBjYXB0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2V0dGluZ3MnLCAvLyBTZXR0aW5ncyBtZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwaXAnLCAvLyBQaWN0dXJlLWluLXBpY3R1cmUgKGN1cnJlbnRseSBTYWZhcmkgb25seSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FpcnBsYXknLCAvLyBBaXJwbGF5IChjdXJyZW50bHkgU2FmYXJpIG9ubHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmdWxsc2NyZWVuJywgLy8gVG9nZ2xlIGZ1bGxzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBbJ3F1YWxpdHknLCAnbG9vcCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgLi4ubWFwQWN0aW9ucyh7XG4gICAgICAgICAgICAgICAgdG9nZ2xlU2VsZWN0aW9uOiAnZmlsZW1hbmFnZXIvdG9nZ2xlRmlsZVNlbGVjdGlvbicsXG4gICAgICAgICAgICB9KSxcblxuICAgICAgICAgICAgZ2V0RmlsZSh0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgICAgIGxldCB2bSA9IHRoaXNcblxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9maWxlcy8nICsgdG8ucGFyYW1zLnV1aWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7ICAgIFxuICAgICAgICAgICAgICAgICAgICB2bS5maWxlID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIHZtLm5hbWUgPSB2bS5maWxlLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgdm0uZGVzY3JpcHRpb24gPSB2bS5maWxlLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIHZtLmxvYWRlZCA9IHRydWVcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbih2bS5maWxlLmlkKVxuXG4gICAgICAgICAgICAgICAgICAgIHZtLiRlbWl0KCd1cGRhdGVIZWFkJylcblxuICAgICAgICAgICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0ucGxheWVyID0gbmV3IFBseXIodm0uJHJlZnMucGxheWVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHZtLmZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbzogJzE2OjknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGF5LWxhcmdlJywgLy8gVGhlIGxhcmdlIHBsYXkgYnV0dG9uIGluIHRoZSBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3RhcnQnLCAvLyBSZXN0YXJ0IHBsYXliYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGF5JywgLy8gUGxheS9wYXVzZSBwbGF5YmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvZ3Jlc3MnLCAvLyBUaGUgcHJvZ3Jlc3MgYmFyIGFuZCBzY3J1YmJlciBmb3IgcGxheWJhY2sgYW5kIGJ1ZmZlcmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY3VycmVudC10aW1lJywgLy8gVGhlIGN1cnJlbnQgdGltZSBvZiBwbGF5YmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZHVyYXRpb24nLCAvLyBUaGUgZnVsbCBkdXJhdGlvbiBvZiB0aGUgbWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ211dGUnLCAvLyBUb2dnbGUgbXV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndm9sdW1lJywgLy8gVm9sdW1lIGNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcHRpb25zJywgLy8gVG9nZ2xlIGNhcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzZXR0aW5ncycsIC8vIFNldHRpbmdzIG1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BpcCcsIC8vIFBpY3R1cmUtaW4tcGljdHVyZSAoY3VycmVudGx5IFNhZmFyaSBvbmx5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWlycGxheScsIC8vIEFpcnBsYXkgKGN1cnJlbnRseSBTYWZhcmkgb25seSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Z1bGxzY3JlZW4nLCAvLyBUb2dnbGUgZnVsbHNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IFsncXVhbGl0eScsICdsb29wJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MucGF0Y2goJy9hcGkvZmlsZXMvJyArIHRoaXMuZmlsZS5pZCwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZS5uYW1lID0gdGhpcy5uYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ1RoZSBmaWxlXFwncyBpbmZvcm1hdGlvbiB3YXMgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2RhbmdlcicpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdvQmFjaygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBkb3dubG9hZCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzXG5cbiAgICAgICAgICAgICAgICBheGlvcyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvZmlsZXMvJyArIHRoaXMuZmlsZS51dWlkICsgJy9kb3dubG9hZCcsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIHZtLmZpbGUub3JpZ2luYWwpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAgICAgICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRvYXN0KHRoaXMuZmlsZS5vcmlnaW5hbCArICcgZG93bmxvYWRlZCcsICdzdWNjZXNzJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgbmV4dCh2bSA9PiB7XG4gICAgICAgICAgICAgICAgdm0uZ2V0RmlsZSh0bywgZnJvbSwgbmV4dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVVcGRhdGUodG8sZnJvbSxuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmdldEZpbGUodG8sIGZyb20sIG5leHQpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5leHQoKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImltYWdlXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sb2FkZWQgPyBfdm0uZmlsZS5uYW1lIDogXCJcIikpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubG9hZGVkXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBrZXk6IF92bS5maWxlLm5hbWUsIHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicC1jYXJkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5pc0ltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5maWxlU3JjLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogX3ZtLmZpbGUuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLmlzVmlkZW9cbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LWZ1bGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZpZGVvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJwbGF5ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29udHJvbHM6IFwiXCIsIGNyb3Nzb3JpZ2luOiBcIlwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic291cmNlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBfdm0uZmlsZS51cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBfdm0uZmlsZS5taW1ldHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwiNTc2XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1nL1wiICsgX3ZtLnR5cGUgKyBcIi1zbWFsbC5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ6IF92bS5maWxlLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtY2VudGVyIHB4LTYgcHktMyByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS00MDAgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTgwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBwcmV2aWV3IGF2YWlsYWJsZVxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmlzVmlkZW9cbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJwLWNhcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm10LTYgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktODAwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIElmIHlvdSBpbnRlbmQgb24gc2VydmluZyB0aGlzIHZpZGVvIG9uIHlvdXIgd2Vic2l0ZSwgaXQncyBoaWdobHkgcmVjb21tZW5kZWQgdGhhdCB5b3UgdXNlIGEgM3JkIHBhcnR5IHNlcnZpY2Ugc3VjaCBhcyBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbX3ZtLl92KFwiWW91dHViZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIG9yIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYVwiLCB7IGF0dHJzOiB7IGhyZWY6IFwiXCIgfSB9LCBbX3ZtLl92KFwiVmltZW9cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIi5cXG4gICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaWRlLWNvbnRhaW5lclwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInAtY2FyZFwiLCB7IHN0YXRpY0NsYXNzOiBcIm1iLTZcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBlbmN0eXBlOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyB0bzogXCJhY3Rpb25zXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RhbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpkZWxldGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1yLTRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHRoZW1lOiBcImRhbmdlclwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEZWxldGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOm1vdmUtZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJtb3ZlLWZpbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiTW92ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6cmVwbGFjZS1maWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJnOiBcInJlcGxhY2UtZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJSZXBsYWNlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kb3dubG9hZCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEb3dubG9hZFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29CYWNrKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkdvIEJhY2tcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwibmFtZVwiLCBsYWJlbDogXCJOYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uYW1lID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtdGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRGVzY3JpYmluZyB5b3VyIGZpbGUgaXNuJ3QgbWFuZGF0b3J5IGJ1dCBpcyBpbmNyZWRpYmx5IHVzZWZ1bCBmb3IgYWNjZXNzaWJpbGl0eS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVzY3JpcHRpb24gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInAtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi02XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hhcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2hhcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsZS51cmxcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uZmlsZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcInAtY2FyZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGp1c3RpZnktYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2l6ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5ieXRlcykpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk1pbWV0eXBlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLmZpbGUubWltZXR5cGUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlsZS53aWR0aCAmJiBfdm0uZmlsZS5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGp1c3RpZnktYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEaW1lbnNpb25zXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZpbGUud2lkdGgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB4IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZpbGUuaGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGp1c3RpZnktYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTGFzdCBNb2RpZmllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kbW9tZW50KF92bS5maWxlLmNyZWF0ZWRfYXQuZGF0ZSkuZm9ybWF0KFwiTFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJtb2RhbHNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcIm1vdmUtZmlsZS1tb2RhbFwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicmVwbGFjZS1maWxlLW1vZGFsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGZpbGU6IF92bS5maWxlIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICByZXBsYWNlZDogZnVuY3Rpb24ocmVwbGFjZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF92bS5maWxlID0gcmVwbGFjZW1lbnQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGVsZXRlLWZpbGUtbW9kYWxcIiwgeyBhdHRyczogeyBmaWxlOiBfdm0uZmlsZSB9IH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjhkMTZiN2EmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL3NhbmRib3gvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjhkMTZiN2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjhkMTZiN2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjhkMTZiN2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4ZDE2YjdhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY4ZDE2YjdhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvU2hvdy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4ZDE2YjdhJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==