(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      file: {},
      name: '',
      description: '',
      player: null,
      loaded: false
    };
  },
  computed: {
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
  methods: {
    getFile: function getFile(to, from, next) {
      var vm = this;
      axios.get('/api/files/' + to.params.uuid).then(function (response) {
        vm.file = response.data.data;
        vm.name = vm.file.name;
        vm.description = vm.file.description;
        vm.loaded = true;
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
      var _this2 = this;

      axios.patch('/api/files/' + this.file.id, {
        name: this.name,
        description: this.description
      }).then(function (response) {
        _this2.file.name = _this2.name;
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
  },
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
                                  src: "/img/placeholder-large.svg",
                                  "background-color": "#ffffff",
                                  lazySrc:
                                    _vm.file.url + "?w=1500&h=1500&fit=max",
                                  alt: _vm.file.description
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
                          _c("p-button", [_vm._v("Move")]),
                          _vm._v(" "),
                          _c("p-button", [_vm._v("Replace")]),
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
        [_c("delete-file-modal", { attrs: { file: _vm.file } })],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0ZpbGVNYW5hZ2VyL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9GaWxlTWFuYWdlci9TaG93LnZ1ZT80ZGFlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9GaWxlTWFuYWdlci9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvU2hvdy52dWU/NWVkOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvU2hvdy52dWU/NWJhMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxSEE7QUFFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGNBREE7QUFFQSxjQUZBO0FBR0EscUJBSEE7QUFJQSxrQkFKQTtBQUtBO0FBTEE7QUFPQSxHQVRBO0FBV0E7QUFDQSxXQURBLHFCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBS0EsV0FMQSxxQkFLQTtBQUNBO0FBQ0EsS0FQQTtBQVNBLFdBVEEscUJBU0E7QUFDQTtBQUNBLEtBWEE7QUFhQSxjQWJBLHdCQWFBO0FBQ0E7QUFDQSxLQWZBO0FBaUJBLFVBakJBLG9CQWlCQTtBQUNBO0FBQ0EsS0FuQkE7QUFxQkEsUUFyQkEsa0JBcUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBZkE7QUFpQkEsS0F6Q0E7QUEyQ0EsU0EzQ0EsbUJBMkNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7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QUFFLHdGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEwTCxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY2h1bmtzLzY3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGFwcC10aXRsZSBpY29uPVwiaW1hZ2VcIj57eyBsb2FkZWQgPyBmaWxlLm5hbWUgOiAnJyB9fTwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cImxvYWRlZFwiIDprZXk9XCJmaWxlLm5hbWVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxwLWNhcmQ+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiaXNJbWFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1nL3BsYWNlaG9sZGVyLWxhcmdlLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I9XCIjZmZmZmZmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmxhenlTcmM9XCJmaWxlLnVybCArICc/dz0xNTAwJmg9MTUwMCZmaXQ9bWF4J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDphbHQ9XCJmaWxlLmRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWltZz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cImlzVmlkZW9cIiBjbGFzcz1cInctZnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2aWRlbyByZWY9XCJwbGF5ZXJcIiBjb250cm9scyBjcm9zc29yaWdpbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNvdXJjZSA6c3JjPVwiZmlsZS51cmxcIiA6dHlwZT1cImZpbGUubWltZXR5cGVcIiBzaXplPVwiNTc2XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92aWRlbz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1pbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNyYz1cIicvaW1nLycgKyB0eXBlICsgJy1zbWFsbC5zdmcnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcj1cIiNmZmZmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6d2lkdGg9XCIyMDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGVpZ2h0PVwiMjAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFsdD1cImZpbGUuZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW1nPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHB4LTYgcHktMyByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS00MDAgYmctZ3JheS0yMDAgdGV4dC1ncmF5LTgwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBObyBwcmV2aWV3IGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcC1jYXJkPlxuXG4gICAgICAgICAgICAgICAgPHAtY2FyZCB2LWlmPVwiaXNWaWRlb1wiIGNsYXNzPVwibXQtNiB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgSWYgeW91IGludGVuZCBvbiBzZXJ2aW5nIHRoaXMgdmlkZW8gb24geW91ciB3ZWJzaXRlLCBpdCdzIGhpZ2hseSByZWNvbW1lbmRlZCB0aGF0IHlvdSB1c2UgYSAzcmQgcGFydHkgc2VydmljZSBzdWNoIGFzIDxhIGhyZWY9XCJcIj5Zb3V0dWJlPC9hPiBvciA8YSBocmVmPVwiXCI+VmltZW88L2E+LlxuICAgICAgICAgICAgICAgIDwvcC1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWRlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxwLWNhcmQgY2xhc3M9XCJtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdFwiIGVuY3R5cGU9XCJtdWx0aXBhcnQvZm9ybS1kYXRhXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB0aGVtZT1cImRhbmdlclwiIGNsYXNzPVwibXItNFwiIHYtbW9kYWw6ZGVsZXRlPkRlbGV0ZTwvcC1idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24+TW92ZTwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uPlJlcGxhY2U8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBAY2xpY2sucHJldmVudD1cImRvd25sb2FkXCIgY2xhc3M9XCJtci00XCI+RG93bmxvYWQ8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiBAY2xpY2sucHJldmVudD1cImdvQmFja1wiPkdvIEJhY2s8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIEBjbGljay5wcmV2ZW50PVwic3VibWl0XCIgY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCI+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtdGV4dGFyZWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkRlc2NyaWJpbmcgeW91ciBmaWxlIGlzbid0IG1hbmRhdG9yeSBidXQgaXMgaW5jcmVkaWJseSB1c2VmdWwgZm9yIGFjY2Vzc2liaWxpdHkuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L3AtY2FyZD5cblxuICAgICAgICAgICAgICAgIDxwLWNhcmQgY2xhc3M9XCJtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2hhcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiU2hhcmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXNtXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImZpbGUudXJsXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICA8L3AtY2FyZD5cblxuICAgICAgICAgICAgICAgIDxwLWNhcmQgY2xhc3M9XCJ0ZXh0LXNtXCIgdi1pZj1cImZpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtX19sYWJlbFwiPlNpemU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgYnl0ZXMgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj5NaW1ldHlwZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBmaWxlLm1pbWV0eXBlIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIiB2LWlmPVwiZmlsZS53aWR0aCAmJiBmaWxlLmhlaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj5EaW1lbnNpb25zPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IGZpbGUud2lkdGggfX0geCB7eyBmaWxlLmhlaWdodCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtX19sYWJlbFwiPkxhc3QgTW9kaWZpZWQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgJG1vbWVudChmaWxlLmNyZWF0ZWRfYXQuZGF0ZSkuZm9ybWF0KCdMJykgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcC1jYXJkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxwb3J0YWwgdG89XCJtb2RhbHNcIj5cbiAgICAgICAgICAgIDxkZWxldGUtZmlsZS1tb2RhbCA6ZmlsZT1cImZpbGVcIj48L2RlbGV0ZS1maWxlLW1vZGFsPlxuICAgICAgICA8L3BvcnRhbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFBseXIgZnJvbSAncGx5cidcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmlsZToge30sXG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgICAgICAgIHBsYXllcjogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBpc0ltYWdlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdpbWFnZSdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzVmlkZW8oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ3ZpZGVvJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNBdWRpbygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSAnYXVkaW8nXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBpc0RvY3VtZW50KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdkb2N1bWVudCdcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGlzTWlzYygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSAnbWlzYydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHR5cGUoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHR5cGUgPSAoXy5zcGxpdCh0aGlzLmZpbGUubWltZXR5cGUsICcvJywgMSkpWzBdXG5cbiAgICAgICAgICAgICAgICBzd2l0Y2godHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbWFnZSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2ltYWdlJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnYXVkaW8nOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdhdWRpbydcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3ZpZGVvJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAndmlkZW8nXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdhcHBsaWNhdGlvbic6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdkb2N1bWVudCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ21pc2MnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYnl0ZXMoKSB7XG4gICAgICAgICAgICAgICAgbGV0IGJ5dGVzID0gdGhpcy5maWxlLmJ5dGVzXG4gICAgICAgICAgICAgICAgbGV0IHRocmVzaCA9IDEwMDBcblxuICAgICAgICAgICAgICAgIGlmIChNYXRoLmFicyhieXRlcykgPCB0aHJlc2gpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJ5dGVzICsgJyBCJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IC0xXG4gICAgICAgICAgICAgICAgbGV0IHVuaXRzID0gWydLQicsICdNQicsICdHQicsICdUQicsICdQQicsICdFQicsICdaQicsICdZQiddXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZG8ge1xuICAgICAgICAgICAgICAgICAgICBieXRlcyAvPSB0aHJlc2hcbiAgICAgICAgICAgICAgICAgICAgKytpbmRleFxuICAgICAgICAgICAgICAgIH0gd2hpbGUgKE1hdGguYWJzKGJ5dGVzKSA+PSB0aHJlc2ggJiYgaW5kZXggPCB1bml0cy5sZW5ndGggLSAxKVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJ5dGVzLnRvRml4ZWQoMSkgKyAnICcgKyB1bml0c1tpbmRleF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGZpbGU6IHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheWVyID0gbmV3IFBseXIodGhpcy4kcmVmcy5wbGF5ZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdGhpcy5maWxlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF0aW86ICcxNjo5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250cm9sczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGxheS1sYXJnZScsIC8vIFRoZSBsYXJnZSBwbGF5IGJ1dHRvbiBpbiB0aGUgY2VudGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZXN0YXJ0JywgLy8gUmVzdGFydCBwbGF5YmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGxheScsIC8vIFBsYXkvcGF1c2UgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Byb2dyZXNzJywgLy8gVGhlIHByb2dyZXNzIGJhciBhbmQgc2NydWJiZXIgZm9yIHBsYXliYWNrIGFuZCBidWZmZXJpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2N1cnJlbnQtdGltZScsIC8vIFRoZSBjdXJyZW50IHRpbWUgb2YgcGxheWJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2R1cmF0aW9uJywgLy8gVGhlIGZ1bGwgZHVyYXRpb24gb2YgdGhlIG1lZGlhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdtdXRlJywgLy8gVG9nZ2xlIG11dGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3ZvbHVtZScsIC8vIFZvbHVtZSBjb250cm9sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjYXB0aW9ucycsIC8vIFRvZ2dsZSBjYXB0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnc2V0dGluZ3MnLCAvLyBTZXR0aW5ncyBtZW51XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwaXAnLCAvLyBQaWN0dXJlLWluLXBpY3R1cmUgKGN1cnJlbnRseSBTYWZhcmkgb25seSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FpcnBsYXknLCAvLyBBaXJwbGF5IChjdXJyZW50bHkgU2FmYXJpIG9ubHkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmdWxsc2NyZWVuJywgLy8gVG9nZ2xlIGZ1bGxzY3JlZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBbJ3F1YWxpdHknLCAnbG9vcCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRlZXA6IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgZ2V0RmlsZSh0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgICAgIGxldCB2bSA9IHRoaXNcblxuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS9maWxlcy8nICsgdG8ucGFyYW1zLnV1aWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7ICAgIFxuICAgICAgICAgICAgICAgICAgICB2bS5maWxlID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIHZtLm5hbWUgPSB2bS5maWxlLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgdm0uZGVzY3JpcHRpb24gPSB2bS5maWxlLmRlc2NyaXB0aW9uXG4gICAgICAgICAgICAgICAgICAgIHZtLmxvYWRlZCA9IHRydWVcblxuICAgICAgICAgICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0ucGxheWVyID0gbmV3IFBseXIodm0uJHJlZnMucGxheWVyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHZtLmZpbGUubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXRpbzogJzE2OjknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGF5LWxhcmdlJywgLy8gVGhlIGxhcmdlIHBsYXkgYnV0dG9uIGluIHRoZSBjZW50ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Jlc3RhcnQnLCAvLyBSZXN0YXJ0IHBsYXliYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGF5JywgLy8gUGxheS9wYXVzZSBwbGF5YmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncHJvZ3Jlc3MnLCAvLyBUaGUgcHJvZ3Jlc3MgYmFyIGFuZCBzY3J1YmJlciBmb3IgcGxheWJhY2sgYW5kIGJ1ZmZlcmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY3VycmVudC10aW1lJywgLy8gVGhlIGN1cnJlbnQgdGltZSBvZiBwbGF5YmFja1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZHVyYXRpb24nLCAvLyBUaGUgZnVsbCBkdXJhdGlvbiBvZiB0aGUgbWVkaWFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ211dGUnLCAvLyBUb2dnbGUgbXV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAndm9sdW1lJywgLy8gVm9sdW1lIGNvbnRyb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NhcHRpb25zJywgLy8gVG9nZ2xlIGNhcHRpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdzZXR0aW5ncycsIC8vIFNldHRpbmdzIG1lbnVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BpcCcsIC8vIFBpY3R1cmUtaW4tcGljdHVyZSAoY3VycmVudGx5IFNhZmFyaSBvbmx5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYWlycGxheScsIC8vIEFpcnBsYXkgKGN1cnJlbnRseSBTYWZhcmkgb25seSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Z1bGxzY3JlZW4nLCAvLyBUb2dnbGUgZnVsbHNjcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IFsncXVhbGl0eScsICdsb29wJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MucGF0Y2goJy9hcGkvZmlsZXMvJyArIHRoaXMuZmlsZS5pZCwge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZS5uYW1lID0gdGhpcy5uYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ1RoZSBmaWxlXFwncyBpbmZvcm1hdGlvbiB3YXMgc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2RhbmdlcicpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGdvQmFjaygpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBkb3dubG9hZCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzXG5cbiAgICAgICAgICAgICAgICBheGlvcyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9hcGkvZmlsZXMvJyArIHRoaXMuZmlsZS51dWlkICsgJy9kb3dubG9hZCcsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFtyZXNwb25zZS5kYXRhXSkpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgICAgICAgICAgICAgICAgICBsaW5rLmhyZWYgPSB1cmw7XG4gICAgICAgICAgICAgICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIHZtLmZpbGUub3JpZ2luYWwpO1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICAgICAgICAgICAgICBsaW5rLmNsaWNrKCk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRvYXN0KHRoaXMuZmlsZS5vcmlnaW5hbCArICcgZG93bmxvYWRlZCcsICdzdWNjZXNzJylcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgbmV4dCh2bSA9PiB7XG4gICAgICAgICAgICAgICAgdm0uZ2V0RmlsZSh0bywgZnJvbSwgbmV4dClcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVVcGRhdGUodG8sZnJvbSxuZXh0KSB7XG4gICAgICAgICAgICB0aGlzLmdldEZpbGUodG8sIGZyb20sIG5leHQpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG5leHQoKVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcImltYWdlXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sb2FkZWQgPyBfdm0uZmlsZS5uYW1lIDogXCJcIikpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubG9hZGVkXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBrZXk6IF92bS5maWxlLm5hbWUsIHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicC1jYXJkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5pc0ltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJvdW5kZWRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IFwiL2ltZy9wbGFjZWhvbGRlci1sYXJnZS5zdmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF6eVNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5maWxlLnVybCArIFwiP3c9MTUwMCZoPTE1MDAmZml0PW1heFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogX3ZtLmZpbGUuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uaXNWaWRlb1xuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInctZnVsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmlkZW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcInBsYXllclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb250cm9sczogXCJcIiwgY3Jvc3NvcmlnaW46IFwiXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzb3VyY2VcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IF92bS5maWxlLnVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IF92bS5maWxlLm1pbWV0eXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCI1NzZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWcvXCIgKyBfdm0udHlwZSArIFwiLXNtYWxsLnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogX3ZtLmZpbGUuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1jZW50ZXIgcHgtNiBweS0zIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTQwMCBiZy1ncmF5LTIwMCB0ZXh0LWdyYXktODAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIHByZXZpZXcgYXZhaWxhYmxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uaXNWaWRlb1xuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInAtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibXQtNiB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS04MDBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgSWYgeW91IGludGVuZCBvbiBzZXJ2aW5nIHRoaXMgdmlkZW8gb24geW91ciB3ZWJzaXRlLCBpdCdzIGhpZ2hseSByZWNvbW1lbmRlZCB0aGF0IHlvdSB1c2UgYSAzcmQgcGFydHkgc2VydmljZSBzdWNoIGFzIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJcIiB9IH0sIFtfdm0uX3YoXCJZb3V0dWJlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgb3IgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJcIiB9IH0sIFtfdm0uX3YoXCJWaW1lb1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiLlxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNpZGUtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicC1jYXJkXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGVuY3R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmRlbGV0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwiZGFuZ2VyXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRlbGV0ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWJ1dHRvblwiLCBbX3ZtLl92KFwiTW92ZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtYnV0dG9uXCIsIFtfdm0uX3YoXCJSZXBsYWNlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtci00XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRvd25sb2FkKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkRvd25sb2FkXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb0JhY2soJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiR28gQmFja1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gYnV0dG9uLS1wcmltYXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN1Ym1pdCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJTYXZlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJuYW1lXCIsIGxhYmVsOiBcIk5hbWVcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm5hbWUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC10ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkRlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJEZXNjcmliaW5nIHlvdXIgZmlsZSBpc24ndCBtYW5kYXRvcnkgYnV0IGlzIGluY3JlZGlibHkgdXNlZnVsIGZvciBhY2Nlc3NpYmlsaXR5LlwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXNjcmlwdGlvbiA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwicC1jYXJkXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1iLTZcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQtc21cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaGFyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTaGFyZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWxlLnVybFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF92bS5maWxlXG4gICAgICAgICAgICAgICAgICA/IF9jKFwicC1jYXJkXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC1zbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgganVzdGlmeS1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2xhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJTaXplXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLmJ5dGVzKSldKVxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGp1c3RpZnktYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTWltZXR5cGVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZmlsZS5taW1ldHlwZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5maWxlLndpZHRoICYmIF92bS5maWxlLmhlaWdodFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgganVzdGlmeS1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIkRpbWVuc2lvbnNcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZmlsZS53aWR0aCkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIHggXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZmlsZS5oZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgganVzdGlmeS1iZXR3ZWVuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2xhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJMYXN0IE1vZGlmaWVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRtb21lbnQoX3ZtLmZpbGUuY3JlYXRlZF9hdC5kYXRlKS5mb3JtYXQoXCJMXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIm1vZGFsc1wiIH0gfSxcbiAgICAgICAgW19jKFwiZGVsZXRlLWZpbGUtbW9kYWxcIiwgeyBhdHRyczogeyBmaWxlOiBfdm0uZmlsZSB9IH0pXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9TaG93LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OGQxNmI3YSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvd2Vic2l0ZS9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2OGQxNmI3YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2OGQxNmI3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2OGQxNmI3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjhkMTZiN2EmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjhkMTZiN2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9GaWxlTWFuYWdlci9TaG93LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvdy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2hvdy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjhkMTZiN2EmXCIiXSwic291cmNlUm9vdCI6IiJ9