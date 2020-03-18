(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'taxonomy-fieldtype',
  data: function data() {
    return {
      taxonomy: {},
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
    },
    values: {
      get: function get() {
        return this.value || [];
      },
      set: function set(value) {
        this.$emit('input', value);
      }
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
    this.resetForm();
    this.values = _.map(this.value, 'id') || [];
  }
});

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



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvVGF4b25vbXkvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL1RheG9ub215L0ZpZWxkLnZ1ZT8yNWZiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL1RheG9ub215L0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9UYXhvbm9teS9GaWVsZC52dWU/NDUwZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9UYXhvbm9teS9GaWVsZC52dWU/NjBlNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7QUFFQTtBQUNBLDRCQURBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBO0FBSUEsR0FSQTtBQVVBO0FBQ0EsUUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsS0FQQTtBQVNBLFlBVEEsc0JBU0E7QUFDQTtBQUNBLEtBWEE7QUFhQTtBQUNBLFNBREEsaUJBQ0E7QUFDQTtBQUNBLE9BSEE7QUFLQSxTQUxBLGVBS0EsS0FMQSxFQUtBO0FBQ0E7QUFDQTtBQVBBO0FBYkEsR0FWQTtBQWtDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLHFCQURBO0FBRUE7QUFDQTtBQUNBO0FBSkE7QUFOQSxHQWxDQTtBQWdEQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQTtBQUNBOztBQUVBOztBQUNBO0FBQ0EsT0FMQSxXQUtBO0FBQ0E7QUFDQSxPQVBBO0FBUUEsS0FWQTtBQVlBLGFBWkEsdUJBWUE7QUFDQTtBQUNBLGdCQURBO0FBRUEsZ0JBRkE7QUFHQTtBQUhBO0FBS0EsS0FsQkE7QUFvQkEsaUJBcEJBLDJCQW9CQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0E7QUF4QkEsR0FoREE7QUEyRUEsU0EzRUEscUJBMkVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFoRkEsRzs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEMsbUJBQW1CO0FBQ25CLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsU0FBUyx1QkFBdUIsRUFBRTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLCtCQUErQjtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3RIQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy82NC5qcz9pZD05YTc2OTIzMGYyYzliMDVjYzY3NyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8bGFiZWxcbiAgICAgICAgICAgIGNsYXNzPVwiZm9ybV9fbGFiZWxcIlxuICAgICAgICAgICAgOmZvcj1cImZpZWxkLmhhbmRsZVwiXG4gICAgICAgICAgICB2LWh0bWw9XCJmaWVsZC5uYW1lXCI+XG4gICAgICAgIDwvbGFiZWw+XG5cbiAgICAgICAgPHAtY2hlY2tib3gtZ3JvdXAgOmhlbHA9XCJmaWVsZC5oZWxwXCIgdi1pZj1cInRheG9ub215LnRlcm1zICYmIHRheG9ub215LnRlcm1zLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgICAgIDxwLWNoZWNrYm94XG4gICAgICAgICAgICAgICAgdi1mb3I9XCJ0ZXJtIGluIHRheG9ub215LnRlcm1zXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwidGVybS5pZFwiXG4gICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGVcIlxuICAgICAgICAgICAgICAgIDppZD1cInRlcm0uaWRcIlxuICAgICAgICAgICAgICAgIDpuYXRpdmUtdmFsdWU9XCJ0ZXJtLmlkXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwidmFsdWVzXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgICAgICAgICAgICB7eyB0ZXJtLm5hbWUgfX1cbiAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wLWNoZWNrYm94PlxuICAgICAgICA8L3AtY2hlY2tib3gtZ3JvdXA+XG5cbiAgICAgICAgPHAgdi1lbHNlIGNsYXNzPVwidGV4dC1zbSBsZWFkaW5nLW5vbmVcIj5BZGQgYSB7eyBzaW5ndWxhciB9fSBiZWxvdy48L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJvcmRlci10IHB0LTZcIj5cbiAgICAgICAgICAgIDxwLWlucHV0IEBrZXl1cC5lbnRlci5uYXRpdmU9XCJzdWJtaXRcIiA6bmFtZT1cInRlcm0gKyAnX25hbWUnXCIgdi1tb2RlbD1cImZvcm0ubmFtZVwiIDpwbGFjZWhvbGRlcj1cIidOZXcgJyArIHNpbmd1bGFyICsgJyBuYW1lLi4uJ1wiIGNsYXNzPVwibWItMlwiPjwvcC1pbnB1dD5cbiAgICAgICAgICAgIDxwLXNsdWcgOm5hbWU9XCJ0ZXJtICsgJ19zbHVnJ1wiIHYtbW9kZWw9XCJmb3JtLnNsdWdcIiA6d2F0Y2g9XCJmb3JtLm5hbWVcIiBoaWRkZW4+PC9wLXNsdWc+XG4gICAgICAgICAgICA8cC1idXR0b24gQGNsaWNrLnByZXZlbnQ9XCJzdWJtaXRcIj5BZGQge3sgc2luZ3VsYXIgfX08L3AtYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgaW1wb3J0IHBsdXJhbGl6ZSBmcm9tICdwbHVyYWxpemUnXG4gICAgaW1wb3J0IEZvcm0gZnJvbSAnLi4vLi4vZm9ybXMvRm9ybSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ3RheG9ub215LWZpZWxkdHlwZScsXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdGF4b25vbXk6IHt9LFxuICAgICAgICAgICAgICAgIGZvcm06IHt9LFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICB0ZXJtKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRheG9ub215Lm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudGF4b25vbXkubmFtZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICd0ZXJtcydcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBzaW5ndWxhcigpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGx1cmFsaXplLnNpbmd1bGFyKHRoaXMudGVybSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZhbHVlczoge1xuICAgICAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudmFsdWUgfHwgW11cbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgc2V0KHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW11cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBvc3QoJy9hcGkvdGF4b25vbWllcy8nICsgdGhpcy50YXhvbm9teS5zbHVnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnVGVybSBzYXZlZCBzdWNjZXNzZnVsbHknLCAnc3VjY2VzcycpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mZXRjaFRheG9ub215KClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldEZvcm0oKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5yZXNwb25zZS5kYXRhLm1lc3NhZ2UsICdmYWlsZWQnKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtID0gbmV3IEZvcm0oe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc2x1ZzogJycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgZmV0Y2hUYXhvbm9teSgpIHtcbiAgICAgICAgICAgICAgICBheGlvcy5nZXQoJy9hcGkvdGF4b25vbWllcy8nICsgdGhpcy5maWVsZC5zZXR0aW5ncy50YXhvbm9teSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50YXhvbm9teSA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuZmV0Y2hUYXhvbm9teSgpXG4gICAgICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpXG5cbiAgICAgICAgICAgIHRoaXMudmFsdWVzID0gXy5tYXAodGhpcy52YWx1ZSwgJ2lkJykgfHwgW11cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImxhYmVsXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIixcbiAgICAgICAgYXR0cnM6IHsgZm9yOiBfdm0uZmllbGQuaGFuZGxlIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5maWVsZC5uYW1lKSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0udGF4b25vbXkudGVybXMgJiYgX3ZtLnRheG9ub215LnRlcm1zLmxlbmd0aCA+IDBcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwicC1jaGVja2JveC1ncm91cFwiLFxuICAgICAgICAgICAgeyBhdHRyczogeyBoZWxwOiBfdm0uZmllbGQuaGVscCB9IH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnRheG9ub215LnRlcm1zLCBmdW5jdGlvbih0ZXJtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInAtY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IHRlcm0uaWQsXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlLFxuICAgICAgICAgICAgICAgICAgICBpZDogdGVybS5pZCxcbiAgICAgICAgICAgICAgICAgICAgXCJuYXRpdmUtdmFsdWVcIjogdGVybS5pZFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWVzLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnZhbHVlcyA9ICQkdlxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInZhbHVlc1wiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3ModGVybS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQtc20gbGVhZGluZy1ub25lXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQWRkIGEgXCIgKyBfdm0uX3MoX3ZtLnNpbmd1bGFyKSArIFwiIGJlbG93LlwiKVxuICAgICAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJvcmRlci10IHB0LTZcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IF92bS50ZXJtICsgXCJfbmFtZVwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJOZXcgXCIgKyBfdm0uc2luZ3VsYXIgKyBcIiBuYW1lLi4uXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYXRpdmVPbjoge1xuICAgICAgICAgICAgICBrZXl1cDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgISRldmVudC50eXBlLmluZGV4T2YoXCJrZXlcIikgJiZcbiAgICAgICAgICAgICAgICAgIF92bS5faygkZXZlbnQua2V5Q29kZSwgXCJlbnRlclwiLCAxMywgJGV2ZW50LmtleSwgXCJFbnRlclwiKVxuICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5mb3JtLm5hbWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZm9ybSwgXCJuYW1lXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmb3JtLm5hbWVcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwLXNsdWdcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLnRlcm0gKyBcIl9zbHVnXCIsXG4gICAgICAgICAgICAgIHdhdGNoOiBfdm0uZm9ybS5uYW1lLFxuICAgICAgICAgICAgICBoaWRkZW46IFwiXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZvcm0uc2x1ZyxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5mb3JtLCBcInNsdWdcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZvcm0uc2x1Z1wiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicC1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdWJtaXQoJGV2ZW50KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJBZGQgXCIgKyBfdm0uX3MoX3ZtLnNpbmd1bGFyKSldXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYzVjYWIwNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZGM1Y2FiMDQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZGM1Y2FiMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZGM1Y2FiMDQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYzVjYWIwNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkYzVjYWIwNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvVGF4b25vbXkvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kYzVjYWIwNCZcIiJdLCJzb3VyY2VSb290IjoiIn0=