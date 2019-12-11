(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Taxonomy/Field.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Taxonomy/Field.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pluralize */ "./node_modules/pluralize/pluralize.js");
/* harmony import */ var pluralize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pluralize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'taxonomy-fieldtype',
  data: function data() {
    return {
      taxonomy: {},
      values: [],
      form: {}
    };
  },
  computed: {
    term: function term() {
      if (this.taxonomy.name) {
        return this.taxonomy.name.toLowerCase();
      } else {
        return 'terms';
      }
    },
    singular: function singular() {
      return pluralize__WEBPACK_IMPORTED_MODULE_0___default.a.singular(this.term);
    }
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      "default": function _default() {
        return [];
      }
    }
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post('/api/taxonomies/' + this.taxonomy.slug).then(function (response) {
        toast('Term saved successfully', 'success');

        _this.fetchTaxonomy();

        _this.resetForm();
      })["catch"](function (response) {
        toast(response.response.data.message, 'failed');
      });
    },
    resetForm: function resetForm() {
      this.form = new _forms_Form__WEBPACK_IMPORTED_MODULE_1__["default"]({
        name: '',
        slug: '',
        status: 1
      });
    },
    fetchTaxonomy: function fetchTaxonomy() {
      var _this2 = this;

      axios.get('/api/taxonomies/' + this.field.settings.taxonomy).then(function (response) {
        _this2.taxonomy = response.data.data;
      });
    }
  },
  mounted: function mounted() {
    this.fetchTaxonomy();

    if (!this.value) {
      this.$emit('input', []);
    }

    this.values = _.cloneDeep(this.value);
  },
  created: function created() {
    this.resetForm();
  }
});

/***/ }),

/***/ "./node_modules/form-data/lib/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/form-data/lib/browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-env browser */
module.exports = typeof self == 'object' ? self.FormData : window.FormData;


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Taxonomy/Field.vue?vue&type=template&id=dc5cab04&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Taxonomy/Field.vue?vue&type=template&id=dc5cab04& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
      _c("label", {
        staticClass: "form__label",
        attrs: { for: _vm.field.handle },
        domProps: { innerHTML: _vm._s(_vm.field.name) }
      }),
      _vm._v(" "),
      _vm.taxonomy.terms && _vm.taxonomy.terms.length > 0
        ? _c(
            "p-checkbox-group",
            { attrs: { help: _vm.field.help } },
            _vm._l(_vm.taxonomy.terms, function(term) {
              return _c(
                "p-checkbox",
                {
                  key: term.id,
                  attrs: {
                    name: _vm.field.handle,
                    id: term.id,
                    "native-value": term.id
                  },
                  on: {
                    input: function($event) {
                      return _vm.$emit("input", _vm.values)
                    }
                  },
                  model: {
                    value: _vm.values,
                    callback: function($$v) {
                      _vm.values = $$v
                    },
                    expression: "values"
                  }
                },
                [
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(term.name) +
                        "\n            "
                    )
                  ]
                ],
                2
              )
            }),
            1
          )
        : _c("p", { staticClass: "text-sm leading-none" }, [
            _vm._v("Add a " + _vm._s(_vm.singular) + " below.")
          ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "border-t pt-6" },
        [
          _c("p-input", {
            staticClass: "mb-2",
            attrs: {
              name: _vm.term + "_name",
              placeholder: "New " + _vm.singular + " name..."
            },
            nativeOn: {
              keyup: function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.submit($event)
              }
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
              name: _vm.term + "_slug",
              watch: _vm.form.name,
              hidden: ""
            },
            model: {
              value: _vm.form.slug,
              callback: function($$v) {
                _vm.$set(_vm.form, "slug", $$v)
              },
              expression: "form.slug"
            }
          }),
          _vm._v(" "),
          _c(
            "p-button",
            {
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [_vm._v("Add " + _vm._s(_vm.singular))]
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

/***/ "./resources/js/fieldtypes/Taxonomy/Field.vue":
/*!****************************************************!*\
  !*** ./resources/js/fieldtypes/Taxonomy/Field.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_dc5cab04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=dc5cab04& */ "./resources/js/fieldtypes/Taxonomy/Field.vue?vue&type=template&id=dc5cab04&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/Taxonomy/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_dc5cab04___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_dc5cab04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/Taxonomy/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/Taxonomy/Field.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/fieldtypes/Taxonomy/Field.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Taxonomy/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/Taxonomy/Field.vue?vue&type=template&id=dc5cab04&":
/*!***********************************************************************************!*\
  !*** ./resources/js/fieldtypes/Taxonomy/Field.vue?vue&type=template&id=dc5cab04& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_dc5cab04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=dc5cab04& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Taxonomy/Field.vue?vue&type=template&id=dc5cab04&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_dc5cab04___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_dc5cab04___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! form-data */ "./node_modules/form-data/lib/browser.js");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Errors */ "./resources/js/forms/Errors.js");
/* harmony import */ var _vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vuex */ "./resources/js/vuex/index.js");
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

    this.errors = new _Errors__WEBPACK_IMPORTED_MODULE_1__["default"]();
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

          _vuex__WEBPACK_IMPORTED_MODULE_2__["default"].commit('form/setPreventNavigation', false);
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
        _vuex__WEBPACK_IMPORTED_MODULE_2__["default"].commit('form/setPreventNavigation', true);
      }
    }
  }]);

  return Form;
}();



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvVGF4b25vbXkvRmllbGQudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mb3JtLWRhdGEvbGliL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvVGF4b25vbXkvRmllbGQudnVlPzI1ZmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvVGF4b25vbXkvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL1RheG9ub215L0ZpZWxkLnZ1ZT80NTBlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL1RheG9ub215L0ZpZWxkLnZ1ZT82MGU3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mb3Jtcy9FcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2Zvcm1zL0Zvcm0uanMiXSwibmFtZXMiOlsiRXJyb3JzIiwiZXJyb3JzIiwiZmllbGQiLCJoYXNPd25Qcm9wZXJ0eSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJyZXNwb25zZSIsIkZvcm0iLCJkYXRhIiwicHJldmVudE5hdmlnYXRpb24iLCJvcmlnaW5hbERhdGEiLCJoYXNDaGFuZ2VzIiwidmFsdWUiLCJjbGVhciIsInByb3BlcnR5IiwidXJsIiwic3VibWl0IiwicmVxdWVzdFR5cGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImF4aW9zIiwidGhlbiIsIm9uU3VjY2VzcyIsInN0b3JlIiwiY29tbWl0Iiwib25GYWlsdXJlIiwicmVjb3JkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0E7QUFDQTtBQUVBO0FBQ0EsNEJBREE7QUFHQSxNQUhBLGtCQUdBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBLGdCQUZBO0FB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Q0gsU0FMTCxXQU1XLFVBQUFSLE1BQU0sRUFBSTtBQUNiLGVBQUksQ0FBQzBCLFNBQUwsQ0FBZTFCLE1BQU0sQ0FBQ00sUUFBUCxDQUFnQkUsSUFBL0I7O0FBRUFZLGdCQUFNLENBQUNwQixNQUFNLENBQUNNLFFBQVAsQ0FBZ0JFLElBQWpCLENBQU47QUFDSCxTQVZMO0FBV0gsT0FaTSxDQUFQO0FBYUg7QUFFRDs7Ozs7Ozs7OEJBS1VBLEksRUFBTSxDQUtmLEMsQ0FKRztBQUNBO0FBQ0E7QUFDQTs7QUFHSjs7Ozs7Ozs7OEJBS1VSLE0sRUFBUTtBQUNkLFdBQUtBLE1BQUwsQ0FBWTJCLE1BQVosQ0FBbUIzQixNQUFuQjtBQUNIO0FBRUQ7Ozs7Ozs7Ozs7a0NBT2NRLEksRUFBTTtBQUNoQixXQUFLRyxVQUFMLEdBQWtCLElBQWxCOztBQUNBLFVBQUksS0FBS0YsaUJBQVQsRUFBNEI7QUFDeEJlLHFEQUFLLENBQUNDLE1BQU4sQ0FBYSwyQkFBYixFQUEwQyxJQUExQztBQUNIO0FBRUoiLCJmaWxlIjoiY2h1bmtzLzE0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbFxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtX19sYWJlbFwiXG4gICAgICAgICAgICA6Zm9yPVwiZmllbGQuaGFuZGxlXCJcbiAgICAgICAgICAgIHYtaHRtbD1cImZpZWxkLm5hbWVcIj5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8cC1jaGVja2JveC1ncm91cCA6aGVscD1cImZpZWxkLmhlbHBcIiB2LWlmPVwidGF4b25vbXkudGVybXMgJiYgdGF4b25vbXkudGVybXMubGVuZ3RoID4gMFwiPlxuICAgICAgICAgICAgPHAtY2hlY2tib3hcbiAgICAgICAgICAgICAgICB2LWZvcj1cInRlcm0gaW4gdGF4b25vbXkudGVybXNcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJ0ZXJtLmlkXCJcbiAgICAgICAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgICAgICAgICAgOmlkPVwidGVybS5pZFwiXG4gICAgICAgICAgICAgICAgOm5hdGl2ZS12YWx1ZT1cInRlcm0uaWRcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJ2YWx1ZXNcIlxuICAgICAgICAgICAgICAgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dCcsIHZhbHVlcylcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAge3sgdGVybS5uYW1lIH19XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcC1jaGVja2JveD5cbiAgICAgICAgPC9wLWNoZWNrYm94LWdyb3VwPlxuXG4gICAgICAgIDxwIHYtZWxzZSBjbGFzcz1cInRleHQtc20gbGVhZGluZy1ub25lXCI+QWRkIGEge3sgc2luZ3VsYXIgfX0gYmVsb3cuPC9wPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItdCBwdC02XCI+XG4gICAgICAgICAgICA8cC1pbnB1dCBAa2V5dXAuZW50ZXIubmF0aXZlPVwic3VibWl0XCIgOm5hbWU9XCJ0ZXJtICsgJ19uYW1lJ1wiIHYtbW9kZWw9XCJmb3JtLm5hbWVcIiA6cGxhY2Vob2xkZXI9XCInTmV3ICcgKyBzaW5ndWxhciArICcgbmFtZS4uLidcIiBjbGFzcz1cIm1iLTJcIj48L3AtaW5wdXQ+XG4gICAgICAgICAgICA8cC1zbHVnIDpuYW1lPVwidGVybSArICdfc2x1ZydcIiB2LW1vZGVsPVwiZm9ybS5zbHVnXCIgOndhdGNoPVwiZm9ybS5uYW1lXCIgaGlkZGVuPjwvcC1zbHVnPlxuICAgICAgICAgICAgPHAtYnV0dG9uIEBjbGljay5wcmV2ZW50PVwic3VibWl0XCI+QWRkIHt7IHNpbmd1bGFyIH19PC9wLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBwbHVyYWxpemUgZnJvbSAncGx1cmFsaXplJ1xuICAgIGltcG9ydCBGb3JtIGZyb20gJy4uLy4uL2Zvcm1zL0Zvcm0nXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICd0YXhvbm9teS1maWVsZHR5cGUnLFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRheG9ub215OiB7fSxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtdLFxuICAgICAgICAgICAgICAgIGZvcm06IHt9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB0ZXJtKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRheG9ub215Lm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGF4b25vbXkubmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd0ZXJtcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzaW5ndWxhcigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGx1cmFsaXplLnNpbmd1bGFyKHRoaXMudGVybSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0ucG9zdCgnL2FwaS90YXhvbm9taWVzLycgKyB0aGlzLnRheG9ub215LnNsdWcpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KCdUZXJtIHNhdmVkIHN1Y2Nlc3NmdWxseScsICdzdWNjZXNzJylcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZldGNoVGF4b25vbXkoKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KHJlc3BvbnNlLnJlc3BvbnNlLmRhdGEubWVzc2FnZSwgJ2ZhaWxlZCcpXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHJlc2V0Rm9ybSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybSh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgICAgICBzbHVnOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAxLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmZXRjaFRheG9ub215KCkge1xuICAgICAgICAgICAgICAgIGF4aW9zLmdldCgnL2FwaS90YXhvbm9taWVzLycgKyB0aGlzLmZpZWxkLnNldHRpbmdzLnRheG9ub215KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRheG9ub215ID0gcmVzcG9uc2UuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgdGhpcy5mZXRjaFRheG9ub215KClcblxuICAgICAgICAgICAgaWYoISB0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBbXSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy52YWx1ZXMgPSBfLmNsb25lRGVlcCh0aGlzLnZhbHVlKVxuICAgICAgICB9LFxuXG4gICAgICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+IiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5tb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiBzZWxmID09ICdvYmplY3QnID8gc2VsZi5Gb3JtRGF0YSA6IHdpbmRvdy5Gb3JtRGF0YTtcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIixcbiAgICAgICAgYXR0cnM6IHsgZm9yOiBfdm0uZmllbGQuaGFuZGxlIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5maWVsZC5uYW1lKSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0udGF4b25vbXkudGVybXMgJiYgX3ZtLnRheG9ub215LnRlcm1zLmxlbmd0aCA+IDBcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwicC1jaGVja2JveC1ncm91cFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBoZWxwOiBfdm0uZmllbGQuaGVscCB9IH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnRheG9ub215LnRlcm1zLCBmdW5jdGlvbih0ZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInAtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IHRlcm0uaWQsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICBpZDogdGVybS5pZCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogdGVybS5pZFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiaW5wdXRcIiwgX3ZtLnZhbHVlcylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnZhbHVlcyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZhbHVlc1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGVybS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc20gbGVhZGluZy1ub25lXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQWRkIGEgXCIgKyBfdm0uX3MoX3ZtLnNpbmd1bGFyKSArIFwiIGJlbG93LlwiKVxuICAgICAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJvcmRlci10IHB0LTZcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IF92bS50ZXJtICsgXCJfbmFtZVwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJOZXcgXCIgKyBfdm0uc2luZ3VsYXIgKyBcIiBuYW1lLi4uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwLXNsdWdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLnRlcm0gKyBcIl9zbHVnXCIsXG4gICAgICAgICAgICAgIHdhdGNoOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICBoaWRkZW46IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2x1ZyxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNsdWdcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2x1Z1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJBZGQgXCIgKyBfdm0uX3MoX3ZtLnNpbmd1bGFyKSldXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYzVjYWIwNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy93ZWJzaXRlL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2RjNWNhYjA0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2RjNWNhYjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2RjNWNhYjA0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGM1Y2FiMDQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZGM1Y2FiMDQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9maWVsZHR5cGVzL1RheG9ub215L0ZpZWxkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGM1Y2FiMDQmXCIiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBFcnJvcnMge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmVycm9ycyA9IHt9XG4gICAgfVxuXG4gICAgaGFzKGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVycm9ycy5oYXNPd25Qcm9wZXJ0eShmaWVsZClcbiAgICB9XG5cbiAgICBhbnkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMFxuICAgIH1cblxuICAgIGdldChmaWVsZCkge1xuICAgICAgICBpZiAodGhpcy5lcnJvcnNbZmllbGRdKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lcnJvcnNbZmllbGRdWzBdXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNvcmQocmVzcG9uc2UpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSByZXNwb25zZS5lcnJvcnNcbiAgICB9XG5cbiAgICBjbGVhcihmaWVsZCkge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmVycm9yc1tmaWVsZF1cbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fVxuICAgIH1cbn0iLCJpbXBvcnQgRm9ybURhdGEgZnJvbSAnZm9ybS1kYXRhJ1xuaW1wb3J0IEVycm9ycyBmcm9tICcuL0Vycm9ycydcbmltcG9ydCBzdG9yZSBmcm9tICcuLi92dWV4J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcm0ge1xuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBGb3JtIGluc3RhbmNlLlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihkYXRhLCBwcmV2ZW50TmF2aWdhdGlvbiA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZXJyb3JzID0gbmV3IEVycm9yc1xuICAgICAgICB0aGlzLm9yaWdpbmFsRGF0YSA9IGRhdGFcbiAgICAgICAgdGhpcy5oYXNDaGFuZ2VzID0gZmFsc2VcbiAgICAgICAgdGhpcy5wcmV2ZW50TmF2aWdhdGlvbiA9IHByZXZlbnROYXZpZ2F0aW9uXG5cbiAgICAgICAgZm9yIChsZXQgZmllbGQgaW4gZGF0YSkge1xuICAgICAgICAgICAgdGhpc1tmaWVsZF0gPSBkYXRhW2ZpZWxkXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0KGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmRhdGFbZmllbGRdID0gdmFsdWVcbiAgICB9XG5cbiAgICBnZXQoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVtmaWVsZF1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXNldCB0aGUgZm9ybSBmaWVsZHMuXG4gICAgICovXG4gICAgcmVzZXQoKSB7XG4gICAgICAgIGZvciAobGV0IGZpZWxkIGluIHRoaXMub3JpZ2luYWxEYXRhKSB7XG4gICAgICAgICAgICB0aGlzW2ZpZWxkXSA9IHRoaXMub3JpZ2luYWxEYXRhW2ZpZWxkXVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5lcnJvcnMuY2xlYXIoKVxuICAgIH1cblxuICAgIGRhdGEoKSB7XG4gICAgICAgIGxldCBkYXRhID0ge31cblxuICAgICAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiB0aGlzLm9yaWdpbmFsRGF0YSlcbiAgICAgICAgICAgIGRhdGFbcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiBTdWJtaXQgYSBQT1NUIHJlcXVlc3QuXG4gICAgKlxuICAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgICovXG4gICAgcG9zdCh1cmwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3VibWl0KCdwb3N0JywgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCBhIFBBVENIIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgcGF0Y2godXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgncGF0Y2gnLCB1cmwpXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3VibWl0IGEgUFVUIHJlcXVlc3QuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgcHV0KHVybCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWJtaXQoJ3B1dCcsIHVybClcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdWJtaXQgYSBERUxFVEUgcmVxdWVzdC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICAgKi9cbiAgICBkZWxldGUodXJsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN1Ym1pdCgnZGVsZXRlJywgdXJsKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN1Ym1pdCB0aGUgZm9ybSBieSB0aGUgZ2l2ZW4gcmVxdWVzdCB0eXBlIGFuZCB1cmwuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcmVxdWVzdFR5cGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gICAgICovXG4gICAgc3VibWl0KHJlcXVlc3RUeXBlLCB1cmwpIHsgICAgICAgIFxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgYXhpb3NbcmVxdWVzdFR5cGVdKHVybCwgdGhpcy5kYXRhKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3VjY2VzcyhyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5jb21taXQoJ2Zvcm0vc2V0UHJldmVudE5hdmlnYXRpb24nLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVycm9ycyA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25GYWlsdXJlKGVycm9ycy5yZXNwb25zZS5kYXRhKVxuXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcnMucmVzcG9uc2UuZGF0YSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgb24gc3VjY2VzcyBwcm9taXNlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGRhdGFcbiAgICAgKi9cbiAgICBvblN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAvLyBXZSdsbCBsZWF2ZSBpdCB1cCB0byB0aGUgaW1wbGVtZW50YXRpb24gb25cbiAgICAgICAgLy8gaWYgdGhleSB3YW50IHRoZSBmb3JtIHJlc2V0IGFmdGVyd2FyZHMuXG4gICAgICAgIC8vXG4gICAgICAgIC8vIHRoaXMucmVzZXQoKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEhhbmRsZSB0aGUgb24gZmFpbHVyZSBwcm9taXNlIGV2ZW50LlxuICAgICAqXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGVycm9yc1xuICAgICAqL1xuICAgIG9uRmFpbHVyZShlcnJvcnMpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMucmVjb3JkKGVycm9ycylcbiAgICB9XG5cbiAgICAvKiogXG4gICAgICogSGFuZGxlIHRoZSBmaXJzdCBpbnB1dCBldmVudC4gUHJldmVudHMgbmF2aWdhdGluZ1xuICAgICAqIGF3YXkgZnJvbSB0aGUgZm9ybSBpZiB0aGUgcHJldmVudE5hdmlnYXRpb25cbiAgICAgKiBzZXR0aW5nIGhhcyBiZWVuIGVuYWJsZWQuXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZGF0YVxuICAgICAqL1xuICAgIG9uRmlyc3RDaGFuZ2UoZGF0YSkge1xuICAgICAgICB0aGlzLmhhc0NoYW5nZXMgPSB0cnVlXG4gICAgICAgIGlmICh0aGlzLnByZXZlbnROYXZpZ2F0aW9uKSB7XG4gICAgICAgICAgICBzdG9yZS5jb21taXQoJ2Zvcm0vc2V0UHJldmVudE5hdmlnYXRpb24nLCB0cnVlKVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9