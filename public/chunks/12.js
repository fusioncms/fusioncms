(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Fieldsets/Edit.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Fieldsets/Edit.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      id: null,
      sections: [],
      originalSections: [],
      hasChanges: false,
      loaded: false,
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({
        name: '',
        handle: ''
      }, true)
    };
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.patch('/api/fieldsets/' + this.id).then(function (response) {
        var formData = {};
        formData.sections = _this.sections;
        axios.post("/api/fieldsets/".concat(_this.id, "/sections"), formData).then(function (response) {
          toast('Fieldset successfully updated', 'success');

          _this.$router.push('/fieldsets');
        });
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    },
    sectionsChanged: function sectionsChanged(value) {
      if (this.loaded && !this.hasChanges) {
        if (!_.isEqual(this.originalSections, value)) {
          this.hasChanges = true;
          this.form.onFirstChange();
        }
      }
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get('/api/fieldsets/' + to.params.fieldset)]).then(axios.spread(function (fieldset) {
      next(function (vm) {
        vm.id = fieldset.data.data.id;
        vm.sections = fieldset.data.data.sections;
        vm.originalSections = _.cloneDeep(vm.sections);
        vm.form.name = fieldset.data.data.name;
        vm.form.handle = fieldset.data.data.handle;
        vm.loaded = true;
      });
    }))["catch"](function (error) {
      next('/fieldsets');
      toast('The requested fieldset could not be found', 'warning');
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Fieldsets/Edit.vue?vue&type=template&id=62f43d66&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Fieldsets/Edit.vue?vue&type=template&id=62f43d66& ***!
  \************************************************************************************************************************************************************************************************************/
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
          _c("app-title", { attrs: { icon: "ballot" } }, [
            _vm._v("Edit Fieldset")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "form",
        {
          on: {
            "~input": function($event) {
              return _vm.form.onFirstChange($event)
            }
          }
        },
        [
          _c("p-card", [
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "side-container" }, [
                _c("div", { staticClass: "xxl:mr-10" }, [
                  _c("h3", [_vm._v("General")]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm" }, [
                    _vm._v("What will this fieldset be called?")
                  ])
                ])
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "content-container" },
                [
                  _c("p-input", {
                    attrs: {
                      name: "name",
                      label: "Name",
                      help: "What this fieldset will be called.",
                      autocomplete: "off",
                      autofocus: "",
                      required: "",
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
                  _c("p-slug", {
                    attrs: {
                      name: "handle",
                      label: "Handle",
                      help:
                        "A developer-friendly variant of the fieldset's name.",
                      autocomplete: "off",
                      required: "",
                      delimiter: "_",
                      watch: _vm.form.name,
                      "has-error": _vm.form.errors.has("handle"),
                      "error-message": _vm.form.errors.get("handle")
                    },
                    model: {
                      value: _vm.form.handle,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "handle", $$v)
                      },
                      expression: "form.handle"
                    }
                  })
                ],
                1
              )
            ])
          ]),
          _vm._v(" "),
          _c("section-builder", {
            staticClass: "mt-6",
            on: { input: _vm.sectionsChanged },
            model: {
              value: _vm.sections,
              callback: function($$v) {
                _vm.sections = $$v
              },
              expression: "sections"
            }
          }),
          _vm._v(" "),
          _c(
            "portal",
            { attrs: { to: "actions" } },
            [
              _c(
                "router-link",
                {
                  staticClass: "button mr-3",
                  attrs: { to: { name: "fieldsets" } }
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
                [_vm._v("Save Fieldset")]
              )
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

/***/ "./resources/js/forms/Errors.js":
/*!**************************************!*\
  !*** ./resources/js/forms/Errors.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Errors; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Errors =
/*#__PURE__*/
function () {
  function Errors() {
    _classCallCheck(this, Errors);

    this.errors = {};
  }

  _createClass(Errors, [{
    key: "has",
    value: function has(field) {
      return this.errors.hasOwnProperty(field);
    }
  }, {
    key: "any",
    value: function any() {
      return Object.keys(this.errors).length > 0;
    }
  }, {
    key: "get",
    value: function get(field) {
      if (this.errors[field]) {
        return this.errors[field][0];
      }
    }
  }, {
    key: "record",
    value: function record(response) {
      this.errors = response.errors;
    }
  }, {
    key: "clear",
    value: function clear(field) {
      if (field) {
        delete this.errors[field];
        return;
      }

      this.errors = {};
    }
  }]);

  return Errors;
}();



/***/ }),

/***/ "./resources/js/forms/Form.js":
/*!************************************!*\
  !*** ./resources/js/forms/Form.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Form; });
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Errors */ "./resources/js/forms/Errors.js");
/* harmony import */ var _vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../vuex */ "./resources/js/vuex/index.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Form =
/*#__PURE__*/
function () {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  function Form(data) {
    var preventNavigation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    _classCallCheck(this, Form);

    this.errors = new _Errors__WEBPACK_IMPORTED_MODULE_0__["default"]();
    this.originalData = data;
    this.hasChanges = false;
    this.preventNavigation = preventNavigation;

    for (var field in data) {
      this[field] = data[field];
    }
  }

  _createClass(Form, [{
    key: "set",
    value: function set(field, value) {
      this.data[field] = value;
    }
  }, {
    key: "get",
    value: function get(field) {
      return this.data[field];
    }
    /**
     * Reset the form fields.
     */

  }, {
    key: "reset",
    value: function reset() {
      for (var field in this.originalData) {
        this[field] = this.originalData[field];
      }

      this.errors.clear();
    }
  }, {
    key: "data",
    value: function data() {
      var data = {};

      for (var property in this.originalData) {
        data[property] = this[property];
      }

      return data;
    }
    /**
    * Submit a POST request.
    *
    * @param {string} url
    */

  }, {
    key: "post",
    value: function post(url) {
      return this.submit('post', url);
    }
    /**
     * Submit a PATCH request.
     *
     * @param {string} url
     */

  }, {
    key: "patch",
    value: function patch(url) {
      return this.submit('patch', url);
    }
    /**
     * Submit a PUT request.
     *
     * @param {string} url
     */

  }, {
    key: "put",
    value: function put(url) {
      return this.submit('put', url);
    }
    /**
     * Submit a DELETE request.
     *
     * @param {string} url
     */

  }, {
    key: "delete",
    value: function _delete(url) {
      return this.submit('delete', url);
    }
    /**
     * Submit the form by the given request type and url.
     *
     * @param {string} requestType
     * @param {string} url
     */

  }, {
    key: "submit",
    value: function submit(requestType, url) {
      var _this = this;

      return new Promise(function (resolve, reject) {
        axios[requestType](url, _this.data()).then(function (response) {
          _this.onSuccess(response.data);

          _vuex__WEBPACK_IMPORTED_MODULE_1__["default"].commit('form/setPreventNavigation', false);
          resolve(response.data);
        })["catch"](function (errors) {
          _this.onFailure(errors.response.data);

          reject(errors.response.data);
        });
      });
    }
    /**
     * Handle the on success promise event.
     *
     * @param {object} data
     */

  }, {
    key: "onSuccess",
    value: function onSuccess(data) {} // We'll leave it up to the implementation on
    // if they want the form reset afterwards.
    //
    // this.reset()

    /**
     * Handle the on failure promise event.
     *
     * @param {object} errors
     */

  }, {
    key: "onFailure",
    value: function onFailure(errors) {
      this.errors.record(errors);
    }
    /** 
     * Handle the first input event. Prevents navigating
     * away from the form if the preventNavigation
     * setting has been enabled.
     *
     * @param {object} data
     */

  }, {
    key: "onFirstChange",
    value: function onFirstChange(data) {
      this.hasChanges = true;

      if (this.preventNavigation) {
        _vuex__WEBPACK_IMPORTED_MODULE_1__["default"].commit('form/setPreventNavigation', true);
      }
    }
  }]);

  return Form;
}();



/***/ }),

/***/ "./resources/js/views/Fieldsets/Edit.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/Fieldsets/Edit.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Edit_vue_vue_type_template_id_62f43d66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Edit.vue?vue&type=template&id=62f43d66& */ "./resources/js/views/Fieldsets/Edit.vue?vue&type=template&id=62f43d66&");
/* harmony import */ var _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Edit.vue?vue&type=script&lang=js& */ "./resources/js/views/Fieldsets/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Edit_vue_vue_type_template_id_62f43d66___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Edit_vue_vue_type_template_id_62f43d66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Fieldsets/Edit.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Fieldsets/Edit.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Fieldsets/Edit.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Fieldsets/Edit.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Fieldsets/Edit.vue?vue&type=template&id=62f43d66&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/Fieldsets/Edit.vue?vue&type=template&id=62f43d66& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_62f43d66___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Edit.vue?vue&type=template&id=62f43d66& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Fieldsets/Edit.vue?vue&type=template&id=62f43d66&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_62f43d66___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Edit_vue_vue_type_template_id_62f43d66___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0ZpZWxkc2V0cy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmllbGRzZXRzL0VkaXQudnVlPzk1NjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zvcm1zL0Vycm9ycy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZm9ybXMvRm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmllbGRzZXRzL0VkaXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9GaWVsZHNldHMvRWRpdC52dWU/NmJiNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRmllbGRzZXRzL0VkaXQudnVlP2M0NTEiXSwibmFtZXMiOlsiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJyZXNwb25zZSIsIkZvcm0iLCJkYXRhIiwicHJldmVudE5hdmlnYXRpb24iLCJvcmlnaW5hbERhdGEiLCJoYXNDaGFuZ2VzIiwidmFsdWUiLCJjbGVhciIsInByb3BlcnR5IiwidXJsIiwic3VibWl0IiwicmVxdWVzdFR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF4aW9zIiwidGhlbiIsIm9uU3VjY2VzcyIsInN0b3JlIiwiY29tbWl0Iiwib25GYWlsdXJlIiwicmVjb3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0RBO0FBRUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsa0JBRkE7QUFHQSwwQkFIQTtBQUlBLHVCQUpBO0FBS0EsbUJBTEE7QUFNQTtBQUNBLGdCQURBO0FBRUE7QUFGQSxTQUdBLElBSEE7QUFOQTtBQVdB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QUFLQSxNQUFMLENBQVkyQixNQUFaLENBQW1CM0IsTUFBbkI7QUFDSDtBQUVEOzs7Ozs7Ozs7O2tDQU9jUSxJLEVBQU07QUFDaEIsV0FBS0csVUFBTCxHQUFrQixJQUFsQjs7QUFDQSxVQUFJLEtBQUtGLGlCQUFULEVBQTRCO0FBQ3hCZSxxREFBSyxDQUFDQyxNQUFOLENBQWEsMkJBQWIsRUFBMEMsSUFBMUM7QUFDSDtBQUVKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3SUw7QUFBQTtBQUFBO0FBQUE7QUFBbUY7QUFDM0I7QUFDTDs7O0FBR25EO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDBFQUFNO0FBQ1IsRUFBRSwrRUFBTTtBQUNSLEVBQUUsd0ZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTBMLENBQWdCLGdQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTlNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8YXBwLXRpdGxlIGljb249XCJiYWxsb3RcIj5FZGl0IEZpZWxkc2V0PC9hcHAtdGl0bGU+XG4gICAgICAgIDwvcG9ydGFsPlxuXG4gICAgICAgIDxmb3JtIEBpbnB1dC5vbmNlPVwiZm9ybS5vbkZpcnN0Q2hhbmdlXCI+XG4gICAgICAgICAgICA8cC1jYXJkPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpZGUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieHhsOm1yLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPkdlbmVyYWw8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1zbVwiPldoYXQgd2lsbCB0aGlzIGZpZWxkc2V0IGJlIGNhbGxlZD88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlbHA9XCJXaGF0IHRoaXMgZmllbGRzZXQgd2lsbCBiZSBjYWxsZWQuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cImZvcm0uZXJyb3JzLmhhcygnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnbmFtZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZm9ybS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3AtaW5wdXQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwLXNsdWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiaGFuZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVscD1cIkEgZGV2ZWxvcGVyLWZyaWVuZGx5IHZhcmlhbnQgb2YgdGhlIGZpZWxkc2V0J3MgbmFtZS5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxpbWl0ZXI9XCJfXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6d2F0Y2g9XCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJmb3JtLmVycm9ycy5oYXMoJ2hhbmRsZScpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZXJyb3ItbWVzc2FnZT1cImZvcm0uZXJyb3JzLmdldCgnaGFuZGxlJylcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmb3JtLmhhbmRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wLXNsdWc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9wLWNhcmQ+XG5cbiAgICAgICAgICAgIDxzZWN0aW9uLWJ1aWxkZXIgY2xhc3M9XCJtdC02XCIgdi1tb2RlbD1cInNlY3Rpb25zXCIgQGlucHV0PVwic2VjdGlvbnNDaGFuZ2VkXCI+PC9zZWN0aW9uLWJ1aWxkZXI+XG5cbiAgICAgICAgICAgIDxwb3J0YWwgdG89XCJhY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAgPHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ2ZpZWxkc2V0cycgfVwiIGNsYXNzPVwiYnV0dG9uIG1yLTNcIj5HbyBCYWNrPC9yb3V0ZXItbGluaz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiPlNhdmUgRmllbGRzZXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvcG9ydGFsPlxuICAgICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBudWxsLFxuICAgICAgICAgICAgICAgIHNlY3Rpb25zOiBbXSxcbiAgICAgICAgICAgICAgICBvcmlnaW5hbFNlY3Rpb25zOiBbXSxcbiAgICAgICAgICAgICAgICBoYXNDaGFuZ2VzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZTogJycsXG4gICAgICAgICAgICAgICAgfSwgdHJ1ZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBhdGNoKCcvYXBpL2ZpZWxkc2V0cy8nICsgdGhpcy5pZCkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0ge31cbiAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuc2VjdGlvbnMgPSB0aGlzLnNlY3Rpb25zXG5cbiAgICAgICAgICAgICAgICAgICAgYXhpb3MucG9zdChgL2FwaS9maWVsZHNldHMvJHt0aGlzLmlkfS9zZWN0aW9uc2AsIGZvcm1EYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9hc3QoJ0ZpZWxkc2V0IHN1Y2Nlc3NmdWxseSB1cGRhdGVkJywgJ3N1Y2Nlc3MnKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2ZpZWxkc2V0cycpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KHJlc3BvbnNlLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2ZhaWxlZCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHNlY3Rpb25zQ2hhbmdlZCh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMubG9hZGVkICYmICF0aGlzLmhhc0NoYW5nZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFfLmlzRXF1YWwodGhpcy5vcmlnaW5hbFNlY3Rpb25zLCB2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5vbkZpcnN0Q2hhbmdlKClcbiAgICAgICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgYXhpb3MuYWxsKFtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvZmllbGRzZXRzLycgKyB0by5wYXJhbXMuZmllbGRzZXQpLFxuICAgICAgICAgICAgXSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKGZpZWxkc2V0KSB7XG4gICAgICAgICAgICAgICAgbmV4dChmdW5jdGlvbih2bSkge1xuICAgICAgICAgICAgICAgICAgICB2bS5pZCA9IGZpZWxkc2V0LmRhdGEuZGF0YS5pZFxuICAgICAgICAgICAgICAgICAgICB2bS5zZWN0aW9ucyA9IGZpZWxkc2V0LmRhdGEuZGF0YS5zZWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICB2bS5vcmlnaW5hbFNlY3Rpb25zID0gXy5jbG9uZURlZXAodm0uc2VjdGlvbnMpXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0ubmFtZSA9IGZpZWxkc2V0LmRhdGEuZGF0YS5uYW1lXG4gICAgICAgICAgICAgICAgICAgIHZtLmZvcm0uaGFuZGxlID0gZmllbGRzZXQuZGF0YS5kYXRhLmhhbmRsZVxuICAgICAgICAgICAgICAgICAgICB2bS5sb2FkZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pKS5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIG5leHQoJy9maWVsZHNldHMnKVxuICAgICAgICAgICAgICAgIHRvYXN0KCdUaGUgcmVxdWVzdGVkIGZpZWxkc2V0IGNvdWxkIG5vdCBiZSBmb3VuZCcsICd3YXJuaW5nJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwiYmFsbG90XCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJFZGl0IEZpZWxkc2V0XCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJ+aW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uZm9ybS5vbkZpcnN0Q2hhbmdlKCRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInAtY2FyZFwiLCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaWRlLWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInh4bDptci0xMFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaDNcIiwgW192bS5fdihcIkdlbmVyYWxcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXNtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJXaGF0IHdpbGwgdGhpcyBmaWVsZHNldCBiZSBjYWxsZWQ/XCIpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJuYW1lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmFtZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlbHA6IFwiV2hhdCB0aGlzIGZpZWxkc2V0IHdpbGwgYmUgY2FsbGVkLlwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZTogXCJvZmZcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmZvcm0uZXJyb3JzLmhhcyhcIm5hbWVcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJlcnJvci1tZXNzYWdlXCI6IF92bS5mb3JtLmVycm9ycy5nZXQoXCJuYW1lXCIpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZvcm0sIFwibmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0ubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicC1zbHVnXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkhhbmRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGhlbHA6XG4gICAgICAgICAgICAgICAgICAgICAgICBcIkEgZGV2ZWxvcGVyLWZyaWVuZGx5IHZhcmlhbnQgb2YgdGhlIGZpZWxkc2V0J3MgbmFtZS5cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU6IFwib2ZmXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgZGVsaW1pdGVyOiBcIl9cIixcbiAgICAgICAgICAgICAgICAgICAgICB3YXRjaDogX3ZtLmZvcm0ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZm9ybS5lcnJvcnMuaGFzKFwiaGFuZGxlXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZXJyb3ItbWVzc2FnZVwiOiBfdm0uZm9ybS5lcnJvcnMuZ2V0KFwiaGFuZGxlXCIpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLmhhbmRsZSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJoYW5kbGVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLmhhbmRsZVwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInNlY3Rpb24tYnVpbGRlclwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtdC02XCIsXG4gICAgICAgICAgICBvbjogeyBpbnB1dDogX3ZtLnNlY3Rpb25zQ2hhbmdlZCB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWN0aW9ucyxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5zZWN0aW9ucyA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlY3Rpb25zXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgICAgIHsgYXR0cnM6IHsgdG86IFwiYWN0aW9uc1wiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJyb3V0ZXItbGlua1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBtci0zXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcImZpZWxkc2V0c1wiIH0gfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIkdvIEJhY2tcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZSBGaWVsZHNldFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEVycm9ycyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0ge31cbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXJyb3JzLmhhc093blByb3BlcnR5KGZpZWxkKVxuICAgIH1cblxuICAgIGFueSgpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5sZW5ndGggPiAwXG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIGlmICh0aGlzLmVycm9yc1tmaWVsZF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmVycm9yc1tmaWVsZF1bMF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY29yZChyZXNwb25zZSkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHJlc3BvbnNlLmVycm9yc1xuICAgIH1cblxuICAgIGNsZWFyKGZpZWxkKSB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuZXJyb3JzW2ZpZWxkXVxuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmVycm9ycyA9IHt9XG4gICAgfVxufSIsImltcG9ydCBFcnJvcnMgZnJvbSAnLi9FcnJvcnMnXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vdnVleCdcblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtIHtcbiAgICAvKipcbiAgICAgKiBDcmVhdGUgYSBuZXcgRm9ybSBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgY29uc3RydWN0b3IoZGF0YSwgcHJldmVudE5hdmlnYXRpb24gPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IG5ldyBFcnJvcnNcbiAgICAgICAgdGhpcy5vcmlnaW5hbERhdGEgPSBkYXRhXG4gICAgICAgIHRoaXMuaGFzQ2hhbmdlcyA9IGZhbHNlXG4gICAgICAgIHRoaXMucHJldmVudE5hdmlnYXRpb24gPSBwcmV2ZW50TmF2aWdhdGlvblxuXG4gICAgICAgIGZvciAobGV0IGZpZWxkIGluIGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXNbZmllbGRdID0gZGF0YVtmaWVsZF1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldChmaWVsZCwgdmFsdWUpIHtcbiAgICAgICAgdGhpcy5kYXRhW2ZpZWxkXSA9IHZhbHVlXG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFbZmllbGRdXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzZXQgdGhlIGZvcm0gZmllbGRzLlxuICAgICAqL1xuICAgIHJlc2V0KCkge1xuICAgICAgICBmb3IgKGxldCBmaWVsZCBpbiB0aGlzLm9yaWdpbmFsRGF0YSkge1xuICAgICAgICAgICAgdGhpc1tmaWVsZF0gPSB0aGlzLm9yaWdpbmFsRGF0YVtmaWVsZF1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZXJyb3JzLmNsZWFyKClcbiAgICB9XG5cbiAgICBkYXRhKCkge1xuICAgICAgICBsZXQgZGF0YSA9IHt9XG5cbiAgICAgICAgZm9yIChsZXQgcHJvcGVydHkgaW4gdGhpcy5vcmlnaW5hbERhdGEpXG4gICAgICAgICAgICBkYXRhW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH1cblxuICAgIC8qKlxuICAgICogU3VibWl0IGEgUE9TVCByZXF1ZXN0LlxuICAgICpcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAqL1xuICAgIHBvc3QodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncG9zdCcsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgYSBQQVRDSCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHBhdGNoKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3BhdGNoJywgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBhIFBVVCByZXF1ZXN0LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHB1dCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwdXQnLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGEgREVMRVRFIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgZGVsZXRlKHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ2RlbGV0ZScsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgdGhlIGZvcm0gYnkgdGhlIGdpdmVuIHJlcXVlc3QgdHlwZSBhbmQgdXJsLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHJlcXVlc3RUeXBlXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICAqL1xuICAgIHN1Ym1pdChyZXF1ZXN0VHlwZSwgdXJsKSB7ICAgICAgICBcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIGF4aW9zW3JlcXVlc3RUeXBlXSh1cmwsIHRoaXMuZGF0YSgpKVxuICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuY29tbWl0KCdmb3JtL3NldFByZXZlbnROYXZpZ2F0aW9uJywgZmFsc2UpXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaChlcnJvcnMgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRmFpbHVyZShlcnJvcnMucmVzcG9uc2UuZGF0YSlcblxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3JzLnJlc3BvbnNlLmRhdGEpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIG9uIHN1Y2Nlc3MgcHJvbWlzZSBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhXG4gICAgICovXG4gICAgb25TdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgLy8gV2UnbGwgbGVhdmUgaXQgdXAgdG8gdGhlIGltcGxlbWVudGF0aW9uIG9uXG4gICAgICAgIC8vIGlmIHRoZXkgd2FudCB0aGUgZm9ybSByZXNldCBhZnRlcndhcmRzLlxuICAgICAgICAvL1xuICAgICAgICAvLyB0aGlzLnJlc2V0KClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBIYW5kbGUgdGhlIG9uIGZhaWx1cmUgcHJvbWlzZSBldmVudC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBlcnJvcnNcbiAgICAgKi9cbiAgICBvbkZhaWx1cmUoZXJyb3JzKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzLnJlY29yZChlcnJvcnMpXG4gICAgfVxuXG4gICAgLyoqIFxuICAgICAqIEhhbmRsZSB0aGUgZmlyc3QgaW5wdXQgZXZlbnQuIFByZXZlbnRzIG5hdmlnYXRpbmdcbiAgICAgKiBhd2F5IGZyb20gdGhlIGZvcm0gaWYgdGhlIHByZXZlbnROYXZpZ2F0aW9uXG4gICAgICogc2V0dGluZyBoYXMgYmVlbiBlbmFibGVkLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvbkZpcnN0Q2hhbmdlKGRhdGEpIHtcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gdHJ1ZVxuICAgICAgICBpZiAodGhpcy5wcmV2ZW50TmF2aWdhdGlvbikge1xuICAgICAgICAgICAgc3RvcmUuY29tbWl0KCdmb3JtL3NldFByZXZlbnROYXZpZ2F0aW9uJywgdHJ1ZSlcbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmY0M2Q2NiZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvZnVzaW9uY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzYyZjQzZDY2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzYyZjQzZDY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzYyZjQzZDY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmY0M2Q2NiZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MmY0M2Q2NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL3ZpZXdzL0ZpZWxkc2V0cy9FZGl0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjJmNDNkNjYmXCIiXSwic291cmNlUm9vdCI6IiJ9