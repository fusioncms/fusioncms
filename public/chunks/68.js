(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[68],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Fieldsets/Index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Fieldsets/Index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    title: function title() {
      return {
        inner: 'Fieldsets'
      };
    }
  },
  data: function data() {
    return {
      endpoint: '/datatable/fieldsets'
    };
  },
  methods: {
    destroy: function destroy(id) {
      axios["delete"]('/api/fieldsets/' + id).then(function (response) {
        toast('Fieldset successfully deleted.', 'success');
        proton().$emit('refresh-datatable-fieldsets');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Fieldsets/Index.vue?vue&type=template&id=43ee021f&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Fieldsets/Index.vue?vue&type=template&id=43ee021f& ***!
  \*************************************************************************************************************************************************************************************************************/
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
        [_c("app-title", { attrs: { icon: "list" } }, [_vm._v("Fieldsets")])],
        1
      ),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "actions" } },
        [
          _c(
            "router-link",
            {
              staticClass: "button",
              attrs: { to: { name: "fieldsets.create" } }
            },
            [_vm._v("Create Fieldset")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "content-container" },
          [
            _c("p-datatable", {
              attrs: {
                endpoint: _vm.endpoint,
                name: "fieldsets",
                "sort-by": "name",
                "per-page": 10,
                "primary-key": "handle"
              },
              scopedSlots: _vm._u([
                {
                  key: "name",
                  fn: function(table) {
                    return [
                      _c(
                        "router-link",
                        {
                          attrs: {
                            to: {
                              name: "fieldsets.edit",
                              params: { fieldset: table.record.id }
                            }
                          }
                        },
                        [_vm._v(_vm._s(table.record.name))]
                      )
                    ]
                  }
                },
                {
                  key: "handle",
                  fn: function(table) {
                    return [_c("code", [_vm._v(_vm._s(table.record.handle))])]
                  }
                },
                {
                  key: "actions",
                  fn: function(table) {
                    return [
                      _c(
                        "p-dropdown",
                        { key: table.record.handle, attrs: { right: "" } },
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
                                  attrs: {
                                    to: {
                                      name: "fieldsets.edit",
                                      params: { fieldset: table.record.id }
                                    }
                                  },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                    }
                                  }
                                },
                                [_vm._v("Edit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "p-dropdown-item",
                                {
                                  directives: [
                                    {
                                      name: "modal",
                                      rawName: "v-modal:delete-fieldset",
                                      value: table.record,
                                      expression: "table.record",
                                      arg: "delete-fieldset"
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
                                    "\n                                Delete\n                            "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        2
                      )
                    ]
                  }
                }
              ])
            })
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c(
        "portal",
        { attrs: { to: "modals" } },
        [
          _c(
            "p-modal",
            {
              key: "delete_fieldset",
              attrs: { name: "delete-fieldset", title: "Delete Fieldset" },
              scopedSlots: _vm._u([
                {
                  key: "footer",
                  fn: function(fieldset) {
                    return [
                      _c(
                        "p-button",
                        {
                          directives: [
                            {
                              name: "modal",
                              rawName: "v-modal:delete-fieldset",
                              arg: "delete-fieldset"
                            }
                          ],
                          staticClass: "ml-3",
                          attrs: { theme: "danger" },
                          on: {
                            click: function($event) {
                              return _vm.destroy(fieldset.data.id)
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
                              rawName: "v-modal:delete-fieldset",
                              arg: "delete-fieldset"
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
                  "Are you sure you want to permenantly delete this fieldset?"
                )
              ])
            ]
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

/***/ "./resources/js/views/Fieldsets/Index.vue":
/*!************************************************!*\
  !*** ./resources/js/views/Fieldsets/Index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Index_vue_vue_type_template_id_43ee021f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Index.vue?vue&type=template&id=43ee021f& */ "./resources/js/views/Fieldsets/Index.vue?vue&type=template&id=43ee021f&");
/* harmony import */ var _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Index.vue?vue&type=script&lang=js& */ "./resources/js/views/Fieldsets/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Index_vue_vue_type_template_id_43ee021f___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Index_vue_vue_type_template_id_43ee021f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Fieldsets/Index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Fieldsets/Index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Fieldsets/Index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Fieldsets/Index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Fieldsets/Index.vue?vue&type=template&id=43ee021f&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Fieldsets/Index.vue?vue&type=template&id=43ee021f& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_43ee021f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Index.vue?vue&type=template&id=43ee021f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Fieldsets/Index.vue?vue&type=template&id=43ee021f&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_43ee021f___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Index_vue_vue_type_template_id_43ee021f___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0ZpZWxkc2V0cy9JbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0ZpZWxkc2V0cy9JbmRleC52dWU/NjkzNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmllbGRzZXRzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmllbGRzZXRzL0luZGV4LnZ1ZT9jZjcxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9GaWVsZHNldHMvSW5kZXgudnVlP2E3MDQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3REE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FiQTtBQWVBO0FBQ0EsV0FEQSxtQkFDQSxFQURBLEVBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQSxPQUxBO0FBTUE7QUFSQTtBQWZBLEc7Ozs7Ozs7Ozs7OztBQ3hEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsY0FBYyxFQUFFO0FBQ2xDLDBCQUEwQixTQUFTLGVBQWUsRUFBRTtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxTQUFTLGdCQUFnQixFQUFFO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTSwyQkFBMkI7QUFDdkQsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEM7QUFDQTtBQUNBLFdBQVcsbUNBQW1DO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1DQUFtQyxZQUFZLEVBQUU7QUFDMUU7QUFDQSx5Q0FBeUMsU0FBUyxlQUFlLEVBQUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGtCQUFrQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsZUFBZSxFQUFFO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isb0RBQW9EO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGtCQUFrQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xOQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy82OC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8cG9ydGFsIHRvPVwidGl0bGVcIj5cbiAgICAgICAgICAgIDxhcHAtdGl0bGUgaWNvbj1cImxpc3RcIj5GaWVsZHNldHM8L2FwcC10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdmaWVsZHNldHMuY3JlYXRlJyB9XCIgY2xhc3M9XCJidXR0b25cIj5DcmVhdGUgRmllbGRzZXQ8L3JvdXRlci1saW5rPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8cC1kYXRhdGFibGUgOmVuZHBvaW50PVwiZW5kcG9pbnRcIiBuYW1lPVwiZmllbGRzZXRzXCIgc29ydC1ieT1cIm5hbWVcIiA6cGVyLXBhZ2U9XCIxMFwiIHByaW1hcnkta2V5PVwiaGFuZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwibmFtZVwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ2ZpZWxkc2V0cy5lZGl0JywgcGFyYW1zOiB7ZmllbGRzZXQ6IHRhYmxlLnJlY29yZC5pZH0gfVwiPnt7IHRhYmxlLnJlY29yZC5uYW1lIH19PC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImhhbmRsZVwiIHNsb3Qtc2NvcGU9XCJ0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGNvZGU+e3sgdGFibGUucmVjb3JkLmhhbmRsZSB9fTwvY29kZT5cbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImFjdGlvbnNcIiBzbG90LXNjb3BlPVwidGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duIHJpZ2h0IDprZXk9XCJ0YWJsZS5yZWNvcmQuaGFuZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gaWNvbj1cImJhcnNcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duLWl0ZW0gQGNsaWNrLnByZXZlbnQgOnRvPVwieyBuYW1lOiAnZmllbGRzZXRzLmVkaXQnLCBwYXJhbXM6IHtmaWVsZHNldDogdGFibGUucmVjb3JkLmlkfSB9XCI+RWRpdDwvcC1kcm9wZG93bi1pdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwLWRyb3Bkb3duLWl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGFsOmRlbGV0ZS1maWVsZHNldD1cInRhYmxlLnJlY29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3AtZHJvcGRvd24taXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLWRyb3Bkb3duPlxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvcC1kYXRhdGFibGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHBvcnRhbCB0bz1cIm1vZGFsc1wiPlxuICAgICAgICAgICAgPHAtbW9kYWwgbmFtZT1cImRlbGV0ZS1maWVsZHNldFwiIHRpdGxlPVwiRGVsZXRlIEZpZWxkc2V0XCIga2V5PVwiZGVsZXRlX2ZpZWxkc2V0XCI+XG4gICAgICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIHBlcm1lbmFudGx5IGRlbGV0ZSB0aGlzIGZpZWxkc2V0PzwvcD5cblxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiZm9vdGVyXCIgc2xvdC1zY29wZT1cImZpZWxkc2V0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxwLWJ1dHRvbiB2LW1vZGFsOmRlbGV0ZS1maWVsZHNldCBAY2xpY2s9XCJkZXN0cm95KGZpZWxkc2V0LmRhdGEuaWQpXCIgdGhlbWU9XCJkYW5nZXJcIiBjbGFzcz1cIm1sLTNcIj5EZWxldGU8L3AtYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8cC1idXR0b24gdi1tb2RhbDpkZWxldGUtZmllbGRzZXQ+Q2FuY2VsPC9wLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wLW1vZGFsPlxuICAgICAgICA8L3BvcnRhbD5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlubmVyOiAnRmllbGRzZXRzJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXRhKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlbmRwb2ludDogJy9kYXRhdGFibGUvZmllbGRzZXRzJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBkZXN0cm95KGlkKSB7XG4gICAgICAgICAgICAgICAgYXhpb3MuZGVsZXRlKCcvYXBpL2ZpZWxkc2V0cy8nICsgaWQpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ0ZpZWxkc2V0IHN1Y2Nlc3NmdWxseSBkZWxldGVkLicsICdzdWNjZXNzJylcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHByb3RvbigpLiRlbWl0KCdyZWZyZXNoLWRhdGF0YWJsZS1maWVsZHNldHMnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW19jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJsaXN0XCIgfSB9LCBbX3ZtLl92KFwiRmllbGRzZXRzXCIpXSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHRvOiB7IG5hbWU6IFwiZmllbGRzZXRzLmNyZWF0ZVwiIH0gfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJDcmVhdGUgRmllbGRzZXRcIildXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicC1kYXRhdGFibGVcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGVuZHBvaW50OiBfdm0uZW5kcG9pbnQsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJmaWVsZHNldHNcIixcbiAgICAgICAgICAgICAgICBcInNvcnQtYnlcIjogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgXCJwZXItcGFnZVwiOiAxMCxcbiAgICAgICAgICAgICAgICBcInByaW1hcnkta2V5XCI6IFwiaGFuZGxlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZpZWxkc2V0cy5lZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgZmllbGRzZXQ6IHRhYmxlLnJlY29yZC5pZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3ModGFibGUucmVjb3JkLm5hbWUpKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJoYW5kbGVcIixcbiAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbih0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW19jKFwiY29kZVwiLCBbX3ZtLl92KF92bS5fcyh0YWJsZS5yZWNvcmQuaGFuZGxlKSldKV1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJhY3Rpb25zXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24odGFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicC1kcm9wZG93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IHRhYmxlLnJlY29yZC5oYW5kbGUsIGF0dHJzOiB7IHJpZ2h0OiBcIlwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYS1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJiYXJzXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc2xvdDogXCJvcHRpb25zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwLWRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZpZWxkc2V0cy5lZGl0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBmaWVsZHNldDogdGFibGUucmVjb3JkLmlkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRWRpdFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicC1kcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGFsOmRlbGV0ZS1maWVsZHNldFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGFibGUucmVjb3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYmxlLnJlY29yZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVsZXRlLWZpZWxkc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlbGV0ZVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcIm1vZGFsc1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwLW1vZGFsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogXCJkZWxldGVfZmllbGRzZXRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJkZWxldGUtZmllbGRzZXRcIiwgdGl0bGU6IFwiRGVsZXRlIEZpZWxkc2V0XCIgfSxcbiAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBcImZvb3RlclwiLFxuICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKGZpZWxkc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInAtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kYWw6ZGVsZXRlLWZpZWxkc2V0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmc6IFwiZGVsZXRlLWZpZWxkc2V0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1sLTNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGhlbWU6IFwiZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmRlc3Ryb3koZmllbGRzZXQuZGF0YS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwiRGVsZXRlXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kYWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RhbDpkZWxldGUtZmllbGRzZXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZzogXCJkZWxldGUtZmllbGRzZXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJDYW5jZWxcIildXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBwZXJtZW5hbnRseSBkZWxldGUgdGhpcyBmaWVsZHNldD9cIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzZWUwMjFmJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL3NhbmRib3gvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDNlZTAyMWYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDNlZTAyMWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDNlZTAyMWYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00M2VlMDIxZiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0M2VlMDIxZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL0ZpZWxkc2V0cy9JbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQzZWUwMjFmJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==