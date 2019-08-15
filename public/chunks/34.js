(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[34],{

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
      return _.startsWith(this.file.mimetype, 'image');
    },
    isVideo: function isVideo() {
      return _.startsWith(this.file.mimetype, 'video');
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
  methods: {
    getFile: function getFile(to, from, next) {
      var vm = this;
      axios.get('/api/files/' + to.params.uuid).then(function (response) {
        vm.file = response.data.data;
        vm.name = vm.file.name;
        vm.description = vm.file.description;
        vm.loaded = true;
        vm.$nextTick(function () {
          vm.player = new plyr__WEBPACK_IMPORTED_MODULE_0___default.a(vm.$refs.player);
        });
      });
    },
    submit: function submit() {
      var _this = this;

      axios.patch('/api/files/' + this.file.id, {
        name: this.name,
        description: this.description
      }).then(function (response) {
        _this.file.name = _this.name;
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
        ? _c("div", { staticClass: "row" }, [
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
                                attrs: { playsinline: "", controls: "" }
                              },
                              [
                                _c("source", {
                                  attrs: {
                                    src: _vm.file.url,
                                    type: _vm.file.mimetype
                                  }
                                })
                              ]
                            )
                          ])
                        : _c(
                            "div",
                            [
                              _c("p-img", {
                                staticClass: "rounded",
                                attrs: {
                                  src: "/img/placeholder-large.svg",
                                  "background-color": "#ffffff",
                                  alt: _vm.file.description
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "text-center px-6 py-3 rounded border border-grey-light bg-grey-lighter text-grey-darker"
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
                      {
                        staticClass: "mt-6 text-center text-sm text-grey-darker"
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
                            { staticClass: "mr-4", attrs: { theme: "danger" } },
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
                              _vm.moment(_vm.file.created_at.date).format("L")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0ZpbGVNYW5hZ2VyL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9GaWxlTWFuYWdlci9TaG93LnZ1ZT80ZGFlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9GaWxlTWFuYWdlci9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvU2hvdy52dWU/NWVkOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvU2hvdy52dWU/NWJhMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0hBO0FBRUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsY0FGQTtBQUdBLHFCQUhBO0FBSUEsa0JBSkE7QUFLQTtBQUxBO0FBT0EsR0FUQTtBQVdBO0FBQ0EsV0FEQSxxQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBLFdBTEEscUJBS0E7QUFDQTtBQUNBLEtBUEE7QUFTQSxTQVRBLG1CQVNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUhBLFFBR0EscURBSEE7O0FBS0E7QUFDQTtBQTFCQSxHQVhBO0FBd0NBO0FBQ0EsV0FEQSxtQkFDQSxFQURBLEVBQ0EsSUFEQSxFQUNBLElBREEsRUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0FUQTtBQVVBLEtBZEE7QUFnQkEsVUFoQkEsb0JBZ0JBO0FBQUE7O0FBQ0E7QUFDQSx1QkFEQTtBQUVB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LGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEwTCxDQUFnQixnUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5TTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY2h1bmtzLzM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGFwcC10aXRsZSBpY29uPVwiaW1hZ2VcIj57eyBsb2FkZWQgPyBmaWxlLm5hbWUgOiAnJyB9fTwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCIgdi1pZj1cImxvYWRlZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHAtY2FyZD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJpc0ltYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtaW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvcGxhY2Vob2xkZXItbGFyZ2Uuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcj1cIiNmZmZmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bGF6eVNyYz1cImZpbGUudXJsICsgJz93PTE1MDAmaD0xNTAwJmZpdD1tYXgnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmFsdD1cImZpbGUuZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW1nPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwiaXNWaWRlb1wiIGNsYXNzPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZpZGVvIHJlZj1cInBsYXllclwiIHBsYXlzaW5saW5lIGNvbnRyb2xzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c291cmNlIDpzcmM9XCJmaWxlLnVybFwiIDp0eXBlPVwiZmlsZS5taW1ldHlwZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmlkZW8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtaW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWcvcGxhY2Vob2xkZXItbGFyZ2Uuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcj1cIiNmZmZmZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6YWx0PVwiZmlsZS5kZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcC1pbWc+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcHgtNiBweS0zIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmV5LWxpZ2h0IGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIHByZXZpZXcgYXZhaWxhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9wLWNhcmQ+XG5cbiAgICAgICAgICAgICAgICA8cC1jYXJkIHYtaWY9XCJpc1ZpZGVvXCIgY2xhc3M9XCJtdC02IHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmV5LWRhcmtlclwiPlxuICAgICAgICAgICAgICAgICAgICBJZiB5b3UgaW50ZW5kIG9uIHNlcnZpbmcgdGhpcyB2aWRlbyBvbiB5b3VyIHdlYnNpdGUsIGl0J3MgaGlnaGx5IHJlY29tbWVuZGVkIHRoYXQgeW91IHVzZSBhIDNyZCBwYXJ0eSBzZXJ2aWNlIHN1Y2ggYXMgPGEgaHJlZj1cIlwiPllvdXR1YmU8L2E+IG9yIDxhIGhyZWY9XCJcIj5WaW1lbzwvYT4uXG4gICAgICAgICAgICAgICAgPC9wLWNhcmQ+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHAtY2FyZCBjbGFzcz1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCIgZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIHRoZW1lPVwiZGFuZ2VyXCIgY2xhc3M9XCJtci00XCI+RGVsZXRlPC9wLWJ1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbj5Nb3ZlPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24+UmVwbGFjZTwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIEBjbGljay5wcmV2ZW50PVwiZG93bmxvYWRcIiBjbGFzcz1cIm1yLTRcIj5Eb3dubG9hZDwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAtYnV0dG9uIEBjbGljay5wcmV2ZW50PVwiZ29CYWNrXCI+R28gQmFjazwvcC1idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgQGNsaWNrLnByZXZlbnQ9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIj5TYXZlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWlucHV0PlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cC10ZXh0YXJlYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwPVwiRGVzY3JpYmluZyB5b3VyIGZpbGUgaXNuJ3QgbWFuZGF0b3J5IGJ1dCBpcyBpbmNyZWRpYmx5IHVzZWZ1bCBmb3IgYWNjZXNzaWJpbGl0eS5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcC10ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDwvcC1jYXJkPlxuXG4gICAgICAgICAgICAgICAgPHAtY2FyZCBjbGFzcz1cIm1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzaGFyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJTaGFyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRleHQtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZmlsZS51cmxcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9wLWlucHV0PlxuICAgICAgICAgICAgICAgIDwvcC1jYXJkPlxuXG4gICAgICAgICAgICAgICAgPHAtY2FyZCBjbGFzcz1cInRleHQtc21cIiB2LWlmPVwiZmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm1fX2xhYmVsXCI+U2l6ZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBieXRlcyB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtX19sYWJlbFwiPk1pbWV0eXBlPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IGZpbGUubWltZXR5cGUgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktYmV0d2VlblwiIHYtaWY9XCJmaWxlLndpZHRoICYmIGZpbGUuaGVpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtX19sYWJlbFwiPkRpbWVuc2lvbnM8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgZmlsZS53aWR0aCB9fSB4IHt7IGZpbGUuaGVpZ2h0IH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZvcm1fX2xhYmVsXCI+TGFzdCBNb2RpZmllZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBtb21lbnQoZmlsZS5jcmVhdGVkX2F0LmRhdGUpLmZvcm1hdCgnTCcpIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3AtY2FyZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IFBseXIgZnJvbSAncGx5cidcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZmlsZToge30sXG4gICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICAgICAgICAgIHBsYXllcjogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBpc0ltYWdlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfLnN0YXJ0c1dpdGgodGhpcy5maWxlLm1pbWV0eXBlLCAnaW1hZ2UnKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaXNWaWRlbygpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5zdGFydHNXaXRoKHRoaXMuZmlsZS5taW1ldHlwZSwgJ3ZpZGVvJylcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGJ5dGVzKCkge1xuICAgICAgICAgICAgICAgIGxldCBieXRlcyA9IHRoaXMuZmlsZS5ieXRlc1xuICAgICAgICAgICAgICAgIGxldCB0aHJlc2ggPSAxMDAwXG5cbiAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMoYnl0ZXMpIDwgdGhyZXNoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBieXRlcyArICcgQidcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAtMVxuICAgICAgICAgICAgICAgIGxldCB1bml0cyA9IFsnS0InLCAnTUInLCAnR0InLCAnVEInLCAnUEInLCAnRUInLCAnWkInLCAnWUInXVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRvIHtcbiAgICAgICAgICAgICAgICAgICAgYnl0ZXMgLz0gdGhyZXNoXG4gICAgICAgICAgICAgICAgICAgICsraW5kZXhcbiAgICAgICAgICAgICAgICB9IHdoaWxlIChNYXRoLmFicyhieXRlcykgPj0gdGhyZXNoICYmIGluZGV4IDwgdW5pdHMubGVuZ3RoIC0gMSlcblxuICAgICAgICAgICAgICAgIHJldHVybiBieXRlcy50b0ZpeGVkKDEpICsgJyAnICsgdW5pdHNbaW5kZXhdXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGdldEZpbGUodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgICAgICBsZXQgdm0gPSB0aGlzXG5cbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvZmlsZXMvJyArIHRvLnBhcmFtcy51dWlkKS50aGVuKChyZXNwb25zZSkgPT4geyAgICBcbiAgICAgICAgICAgICAgICAgICAgdm0uZmlsZSA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICB2bS5uYW1lID0gdm0uZmlsZS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIHZtLmRlc2NyaXB0aW9uID0gdm0uZmlsZS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICB2bS5sb2FkZWQgPSB0cnVlXG5cbiAgICAgICAgICAgICAgICAgICAgdm0uJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLnBsYXllciA9IG5ldyBQbHlyKHZtLiRyZWZzLnBsYXllcilcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgc3VibWl0KCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLnBhdGNoKCcvYXBpL2ZpbGVzLycgKyB0aGlzLmZpbGUuaWQsIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGUubmFtZSA9IHRoaXMubmFtZVxuXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdUaGUgZmlsZVxcJ3MgaW5mb3JtYXRpb24gd2FzIHN1Y2Nlc3NmdWxseSB1cGRhdGVkJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdkYW5nZXInKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBnb0JhY2soKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZG93bmxvYWQoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZtID0gdGhpc1xuXG4gICAgICAgICAgICAgICAgYXhpb3Moe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvYXBpL2ZpbGVzLycgKyB0aGlzLmZpbGUudXVpZCArICcvZG93bmxvYWQnLFxuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChuZXcgQmxvYihbcmVzcG9uc2UuZGF0YV0pKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICAgICAgICAgICAgbGluay5ocmVmID0gdXJsO1xuICAgICAgICAgICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCB2bS5maWxlLm9yaWdpbmFsKTtcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgICAgICAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICB0b2FzdCh0aGlzLmZpbGUub3JpZ2luYWwgKyAnIGRvd25sb2FkZWQnLCAnc3VjY2VzcycpXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIG5leHQodm0gPT4ge1xuICAgICAgICAgICAgICAgIHZtLmdldEZpbGUodG8sIGZyb20sIG5leHQpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlVXBkYXRlKHRvLGZyb20sbmV4dCkge1xuICAgICAgICAgICAgdGhpcy5nZXRGaWxlKHRvLCBmcm9tLCBuZXh0KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBuZXh0KClcbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJpbWFnZVwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubG9hZGVkID8gX3ZtLmZpbGUubmFtZSA6IFwiXCIpKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmxvYWRlZFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJwLWNhcmRcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzSW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicm91bmRlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogXCIvaW1nL3BsYWNlaG9sZGVyLWxhcmdlLnN2Z1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5U3JjOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbGUudXJsICsgXCI/dz0xNTAwJmg9MTUwMCZmaXQ9bWF4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0OiBfdm0uZmlsZS5kZXNjcmlwdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5pc1ZpZGVvXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy1mdWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2aWRlb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwicGxheWVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBsYXlzaW5saW5lOiBcIlwiLCBjb250cm9sczogXCJcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNvdXJjZVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogX3ZtLmZpbGUudXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogX3ZtLmZpbGUubWltZXR5cGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1pbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyb3VuZGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiBcIi9pbWcvcGxhY2Vob2xkZXItbGFyZ2Uuc3ZnXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdDogX3ZtLmZpbGUuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1jZW50ZXIgcHgtNiBweS0zIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmV5LWxpZ2h0IGJnLWdyZXktbGlnaHRlciB0ZXh0LWdyZXktZGFya2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE5vIHByZXZpZXcgYXZhaWxhYmxlXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uaXNWaWRlb1xuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInAtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm10LTYgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyZXktZGFya2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgSWYgeW91IGludGVuZCBvbiBzZXJ2aW5nIHRoaXMgdmlkZW8gb24geW91ciB3ZWJzaXRlLCBpdCdzIGhpZ2hseSByZWNvbW1lbmRlZCB0aGF0IHlvdSB1c2UgYSAzcmQgcGFydHkgc2VydmljZSBzdWNoIGFzIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJcIiB9IH0sIFtfdm0uX3YoXCJZb3V0dWJlXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgb3IgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCJcIiB9IH0sIFtfdm0uX3YoXCJWaW1lb1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiLlxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNpZGUtY29udGFpbmVyXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwicC1jYXJkXCIsIHsgc3RhdGljQ2xhc3M6IFwibWItNlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGVuY3R5cGU6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1yLTRcIiwgYXR0cnM6IHsgdGhlbWU6IFwiZGFuZ2VyXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEZWxldGVcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicC1idXR0b25cIiwgW192bS5fdihcIk1vdmVcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWJ1dHRvblwiLCBbX3ZtLl92KFwiUmVwbGFjZVwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibXItNFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kb3dubG9hZCgkZXZlbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJEb3dubG9hZFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29CYWNrKCRldmVudClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIkdvIEJhY2tcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwibmFtZVwiLCBsYWJlbDogXCJOYW1lXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5uYW1lID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInAtdGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJkZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJEZXNjcmlwdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWxwOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiRGVzY3JpYmluZyB5b3VyIGZpbGUgaXNuJ3QgbWFuZGF0b3J5IGJ1dCBpcyBpbmNyZWRpYmx5IHVzZWZ1bCBmb3IgYWNjZXNzaWJpbGl0eS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVzY3JpcHRpb24gPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInAtY2FyZFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYi02XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hhcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU2hhcmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmlsZS51cmxcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uZmlsZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcInAtY2FyZFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGp1c3RpZnktYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiU2l6ZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5ieXRlcykpXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBqdXN0aWZ5LWJldHdlZW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIk1pbWV0eXBlXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLmZpbGUubWltZXR5cGUpKV0pXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uZmlsZS53aWR0aCAmJiBfdm0uZmlsZS5oZWlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGp1c3RpZnktYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJEaW1lbnNpb25zXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZpbGUud2lkdGgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiB4IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmZpbGUuaGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGp1c3RpZnktYmV0d2VlblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiTGFzdCBNb2RpZmllZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tb21lbnQoX3ZtLmZpbGUuY3JlYXRlZF9hdC5kYXRlKS5mb3JtYXQoXCJMXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4ZDE2YjdhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TaG93LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjhkMTZiN2EnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjhkMTZiN2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjhkMTZiN2EnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4ZDE2YjdhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzY4ZDE2YjdhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvRmlsZU1hbmFnZXIvU2hvdy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Nob3cudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTY4ZDE2YjdhJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==