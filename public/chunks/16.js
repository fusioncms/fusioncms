<<<<<<< HEAD
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Code/Field.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Code/Field.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! brace */ "./node_modules/brace/index.js");
/* harmony import */ var brace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(brace__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
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
  name: 'code-fieldtype',
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      "default": ''
    }
  },
  data: function data() {
    return {
      editor: Object
    };
  },
  computed: {
    braceClass: function braceClass() {
      return this.field.handle + '-brace';
    },
    textareaClass: function textareaClass() {
      return this.braceClass + '_textarea';
    },
    syntax: function syntax() {
      return this.field.settings.syntax || 'html';
    }
  },
  mounted: function mounted() {
    var vm = this; // require(`brace/mode/${this.syntax}`) TO-DO

    vm.loadSyntax(vm.syntax);

    __webpack_require__(/*! brace/theme/chrome */ "./node_modules/brace/theme/chrome.js");

    vm.editor = brace__WEBPACK_IMPORTED_MODULE_0___default.a.edit(vm.$refs[vm.braceClass]);
    vm.editor.setOptions({
      showPrintMargin: false,
      minLines: 5,
      maxLines: Infinity
    });
    vm.editor.setTheme("ace/theme/chrome");
    vm.editor.$blockScrolling = Infinity;
    vm.editor.setValue(vm.value || '', -1);
    vm.editor.getSession().setUseWrapMode(true);
    vm.editor.getSession().setMode("ace/mode/".concat(this.syntax));
    vm.editor.getSession().on('change', function () {
      vm.$refs[vm.textareaClass].value = vm.editor.getSession().getValue();
      vm.$emit('input', vm.editor.getSession().getValue());
    });
  },
  methods: {
    loadSyntax: function loadSyntax(syntax) {
      switch (syntax) {
        case 'css':
          __webpack_require__(/*! brace/mode/css */ "./node_modules/brace/mode/css.js");

          break;

        case 'html':
          __webpack_require__(/*! brace/mode/html */ "./node_modules/brace/mode/html.js");

          break;

        case 'javascript':
          __webpack_require__(/*! brace/mode/javascript */ "./node_modules/brace/mode/javascript.js");

          break;

        case 'json':
          __webpack_require__(/*! brace/mode/json */ "./node_modules/brace/mode/json.js");

          break;

        case 'markdown':
          __webpack_require__(/*! brace/mode/markdown */ "./node_modules/brace/mode/markdown.js");

          break;

        case 'python':
          __webpack_require__(/*! brace/mode/python */ "./node_modules/brace/mode/python.js");

          break;

        case 'xml':
          __webpack_require__(/*! brace/mode/xml */ "./node_modules/brace/mode/xml.js");

          break;

        default:
          __webpack_require__(/*! brace/mode/javascript */ "./node_modules/brace/mode/javascript.js");

      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Code/Field.vue?vue&type=template&id=4d9f554d&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Code/Field.vue?vue&type=template&id=4d9f554d& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "form__group" }, [
      _c(
        "label",
        { staticClass: "form__label", attrs: { for: _vm.field.handle } },
        [_vm._v(_vm._s(_vm.field.name))]
      ),
      _vm._v(" "),
      _c("textarea", {
        directives: [
          { name: "show", rawName: "v-show", value: false, expression: "false" }
        ],
        ref: _vm.textareaClass,
        attrs: { name: _vm.field.handle, id: _vm.field.handle },
        domProps: { value: _vm.value }
      }),
      _vm._v(" "),
      _c("div", {
        ref: _vm.braceClass,
        staticClass: "border rounded",
        attrs: { id: _vm.braceClass + "_id" }
      }),
      _vm._v(" "),
      _vm.field.help
        ? _c("div", { staticClass: "form__control--meta" }, [
            _c("div", { staticClass: "form__help" }, [
              _vm.help
                ? _c("span", { domProps: { innerHTML: _vm._s(_vm.help) } })
                : _vm._e()
            ])
          ])
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Fieldtypes/Code/Field.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Code/Field.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_4d9f554d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=4d9f554d& */ "./resources/js/components/Fieldtypes/Code/Field.vue?vue&type=template&id=4d9f554d&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Code/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_4d9f554d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_4d9f554d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Code/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Code/Field.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Code/Field.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Code/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Code/Field.vue?vue&type=template&id=4d9f554d&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Code/Field.vue?vue&type=template&id=4d9f554d& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_4d9f554d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=4d9f554d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Code/Field.vue?vue&type=template&id=4d9f554d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_4d9f554d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_4d9f554d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Db2RlL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0NvZGUvRmllbGQudnVlPzQ4YTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Db2RlL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0NvZGUvRmllbGQudnVlP2UwMTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9Db2RlL0ZpZWxkLnZ1ZT8yOGYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUVBO0FBQ0Esd0JBREE7QUFHQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQU5BLEdBSEE7QUFlQSxNQWZBLGtCQWVBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FuQkE7QUFxQkE7QUFDQSxjQURBLHdCQUNBO0FBQ0E7QUFDQSxLQUhBO0FBS0EsaUJBTEEsMkJBS0E7QUFDQTtBQUNBLEtBUEE7QUFTQSxVQVRBLG9CQVNBO0FBQ0E7QUFDQTtBQVhBLEdBckJBO0FBbUNBLFNBbkNBLHFCQW1DQTtBQUNBLGtCQURBLENBR0E7O0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLDRCQURBO0FBRUEsaUJBRkE7QUFHQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBSEE7QUFJQSxHQTNEQTtBQTZEQTtBQUNBLGNBREEsc0JBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7O0FBdkJBO0FBeUJBO0FBM0JBO0FBN0RBLEc7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQTtBQUNBLFNBQVMscUNBQXFDLHdCQUF3QixFQUFFO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLGdCQUFnQiwrQ0FBK0M7QUFDL0QsbUJBQW1CO0FBQ25CLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQixPQUFPO0FBQ1A7QUFDQTtBQUNBLHFCQUFxQixxQ0FBcUM7QUFDMUQsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBLDhCQUE4QixZQUFZLDhCQUE4QixFQUFFO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ21HO0FBQ25HLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQWlNLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX2dyb3VwXCI+XG4gICAgICAgICAgPGxhYmVsIDpmb3I9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2xhYmVsXCI+e3tmaWVsZC5uYW1lfX08L2xhYmVsPlxuXG4gICAgICAgICAgPHRleHRhcmVhIDpyZWY9XCJ0ZXh0YXJlYUNsYXNzXCIgOm5hbWU9XCJmaWVsZC5oYW5kbGVcIiA6aWQ9XCJmaWVsZC5oYW5kbGVcIiA6dmFsdWU9XCJ2YWx1ZVwiIHYtc2hvdz1cImZhbHNlXCI+PC90ZXh0YXJlYT5cblxuICAgICAgICAgIDxkaXYgOnJlZj1cImJyYWNlQ2xhc3NcIiA6aWQ9XCJicmFjZUNsYXNzICsgJ19pZCdcIiBjbGFzcz1cImJvcmRlciByb3VuZGVkXCI+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX2NvbnRyb2wtLW1ldGFcIiB2LWlmPVwiZmllbGQuaGVscFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX2hlbHBcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiaGVscFwiIHYtaHRtbD1cImhlbHBcIj48L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgYWNlIGZyb20gJ2JyYWNlJ1xuICAgIFxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgbmFtZTogJ2NvZGUtZmllbGR0eXBlJyxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWVcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGVkaXRvcjogT2JqZWN0XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgYnJhY2VDbGFzcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZpZWxkLmhhbmRsZSArICctYnJhY2UnXG4gICAgICAgICAgfSxcblxuICAgICAgICAgIHRleHRhcmVhQ2xhc3MoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5icmFjZUNsYXNzICsgJ190ZXh0YXJlYSdcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgc3ludGF4KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQuc2V0dGluZ3Muc3ludGF4IHx8ICdodG1sJ1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgIGxldCB2bSA9IHRoaXNcblxuICAgICAgICAgIC8vIHJlcXVpcmUoYGJyYWNlL21vZGUvJHt0aGlzLnN5bnRheH1gKSBUTy1ET1xuICAgICAgICAgIHZtLmxvYWRTeW50YXgodm0uc3ludGF4KVxuXG4gICAgICAgICAgcmVxdWlyZShgYnJhY2UvdGhlbWUvY2hyb21lYClcblxuICAgICAgICAgIHZtLmVkaXRvciA9IGFjZS5lZGl0KHZtLiRyZWZzW3ZtLmJyYWNlQ2xhc3NdKVxuICAgICAgICAgIHZtLmVkaXRvci5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgICAgIHNob3dQcmludE1hcmdpbjogZmFsc2UsXG4gICAgICAgICAgICAgICBtaW5MaW5lczogNSxcbiAgICAgICAgICAgICAgIG1heExpbmVzOiBJbmZpbml0eVxuICAgICAgICAgIH0pXG4gICAgICAgICAgdm0uZWRpdG9yLnNldFRoZW1lKGBhY2UvdGhlbWUvY2hyb21lYClcbiAgICAgICAgICB2bS5lZGl0b3IuJGJsb2NrU2Nyb2xsaW5nID0gSW5maW5pdHlcbiAgICAgICAgICB2bS5lZGl0b3Iuc2V0VmFsdWUodm0udmFsdWUgfHwgJycsIC0xKVxuICAgICAgICAgIHZtLmVkaXRvci5nZXRTZXNzaW9uKCkuc2V0VXNlV3JhcE1vZGUodHJ1ZSlcbiAgICAgICAgICB2bS5lZGl0b3IuZ2V0U2Vzc2lvbigpLnNldE1vZGUoYGFjZS9tb2RlLyR7dGhpcy5zeW50YXh9YClcblxuICAgICAgICAgIHZtLmVkaXRvci5nZXRTZXNzaW9uKCkub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2bS4kcmVmc1t2bS50ZXh0YXJlYUNsYXNzXS52YWx1ZSA9IHZtLmVkaXRvci5nZXRTZXNzaW9uKCkuZ2V0VmFsdWUoKVxuICAgICAgICAgICAgICB2bS4kZW1pdCgnaW5wdXQnLCB2bS5lZGl0b3IuZ2V0U2Vzc2lvbigpLmdldFZhbHVlKCkpXG4gICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgbG9hZFN5bnRheChzeW50YXgpIHtcbiAgICAgICAgICAgIHN3aXRjaChzeW50YXgpIHtcbiAgICAgICAgICAgICAgY2FzZSAnY3NzJzogXG4gICAgICAgICAgICAgICAgcmVxdWlyZSgnYnJhY2UvbW9kZS9jc3MnKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdodG1sJzogXG4gICAgICAgICAgICAgICAgcmVxdWlyZSgnYnJhY2UvbW9kZS9odG1sJylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnamF2YXNjcmlwdCc6IFxuICAgICAgICAgICAgICAgIHJlcXVpcmUoJ2JyYWNlL21vZGUvamF2YXNjcmlwdCcpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2pzb24nOiBcbiAgICAgICAgICAgICAgICByZXF1aXJlKCdicmFjZS9tb2RlL2pzb24nKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdtYXJrZG93bic6IFxuICAgICAgICAgICAgICAgIHJlcXVpcmUoJ2JyYWNlL21vZGUvbWFya2Rvd24nKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdweXRob24nOiBcbiAgICAgICAgICAgICAgICByZXF1aXJlKCdicmFjZS9tb2RlL3B5dGhvbicpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ3htbCc6IFxuICAgICAgICAgICAgICAgIHJlcXVpcmUoJ2JyYWNlL21vZGUveG1sJylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgICAgICAgcmVxdWlyZSgnYnJhY2UvbW9kZS9qYXZhc2NyaXB0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2dyb3VwXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiLCBhdHRyczogeyBmb3I6IF92bS5maWVsZC5oYW5kbGUgfSB9LFxuICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uZmllbGQubmFtZSkpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHsgbmFtZTogXCJzaG93XCIsIHJhd05hbWU6IFwidi1zaG93XCIsIHZhbHVlOiBmYWxzZSwgZXhwcmVzc2lvbjogXCJmYWxzZVwiIH1cbiAgICAgICAgXSxcbiAgICAgICAgcmVmOiBfdm0udGV4dGFyZWFDbGFzcyxcbiAgICAgICAgYXR0cnM6IHsgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSwgaWQ6IF92bS5maWVsZC5oYW5kbGUgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS52YWx1ZSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgIHJlZjogX3ZtLmJyYWNlQ2xhc3MsXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImJvcmRlciByb3VuZGVkXCIsXG4gICAgICAgIGF0dHJzOiB7IGlkOiBfdm0uYnJhY2VDbGFzcyArIFwiX2lkXCIgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmZpZWxkLmhlbHBcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2NvbnRyb2wtLW1ldGFcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2hlbHBcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5oZWxwXG4gICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uaGVscCkgfSB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ5ZjU1NGQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvZnVzaW9uY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRkOWY1NTRkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRkOWY1NTRkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRkOWY1NTRkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGQ5ZjU1NGQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGQ5ZjU1NGQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ZpZWxkdHlwZXMvQ29kZS9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRkOWY1NTRkJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{dhqo:function(e,t,a){e.exports=function(){var e=[],t=[],a={},s={},i={};function o(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function n(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function r(e,t){return e.replace(/\$(\d{1,2})/g,function(e,a){return t[a]||""})}function l(e,t){return e.replace(t[0],function(a,s){var i=r(t[1],arguments);return n(""===a?e[s-1]:a,i)})}function c(e,t,s){if(!e.length||a.hasOwnProperty(e))return t;for(var i=s.length;i--;){var o=s[i];if(o[0].test(t))return l(t,o)}return t}function u(e,t,a){return function(s){var i=s.toLowerCase();return t.hasOwnProperty(i)?n(s,i):e.hasOwnProperty(i)?n(s,e[i]):c(i,s,a)}}function d(e,t,a,s){return function(s){var i=s.toLowerCase();return!!t.hasOwnProperty(i)||!e.hasOwnProperty(i)&&c(i,i,a)===i}}function m(e,t,a){return(a?t+" ":"")+(1===t?m.singular(e):m.plural(e))}return m.plural=u(i,s,e),m.isPlural=d(i,s,e),m.singular=u(s,i,t),m.isSingular=d(s,i,t),m.addPluralRule=function(t,a){e.push([o(t),a])},m.addSingularRule=function(e,a){t.push([o(e),a])},m.addUncountableRule=function(e){"string"!=typeof e?(m.addPluralRule(e,"$0"),m.addSingularRule(e,"$0")):a[e.toLowerCase()]=!0},m.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),i[e]=t,s[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach(function(e){return m.addIrregularRule(e[0],e[1])}),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach(function(e){return m.addPluralRule(e[0],e[1])}),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach(function(e){return m.addSingularRule(e[0],e[1])}),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(m.addUncountableRule),m}()},"f+qM":function(e,t,a){"use strict";a.r(t);var s=a("dhqo"),i=a.n(s),o=a("ke3Z"),n={data:function(){return{collection:{},form:{}}},computed:{sections:function(){var e=[],t=[];return this.collection.fieldset&&(e=_.filter(this.collection.fieldset.sections,function(e){return"body"==e.placement}),t=_.filter(this.collection.fieldset.sections,function(e){return"sidebar"==e.placement})),{body:e,sidebar:t}},singular:function(){return this.collection.name?i.a.singular(this.collection.name):""}},methods:{submit:function(){var e=this;this.form.post("/api/collections/"+this.collection.handle).then(function(t){toast("Entry saved successfully","success"),e.$router.push("/collections/"+e.collection.handle+"/edit/"+t.data.id)}).catch(function(e){toast(e.response.data.message,"failed")})}},beforeRouteEnter:function(e,t,a){axios.get("/api/matrices/slug/"+e.params.collection).then(function(e){a(function(t){t.collection=e.data.data;var a={name:"",slug:"",status:1};_.forEach(t.collection.fields,function(e,s){Vue.set(a,s,t.collection[s])}),t.form=new o.a(a)})})}},r=a("KHd+"),l=Object(r.a)(n,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:e.collection.icon}},[e._v("Create "+e._s(e.singular))])],1),e._v(" "),a("portal",{attrs:{to:"subtitle"}},[e._v(e._s(e.collection.description))]),e._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("p-card",[a("div",{staticClass:"row"},[a("div",{staticClass:"col form-sidebar"},[a("div",{staticClass:"xxl:mr-10"})]),e._v(" "),a("div",{staticClass:"col mb-6 form-content"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-1/2"},[a("p-input",{attrs:{name:"name",label:"Name"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),a("div",{staticClass:"col w-1/2"},[a("p-slug",{attrs:{name:"slug",label:"Slug",monospaced:"",watch:e.form.name},model:{value:e.form.slug,callback:function(t){e.$set(e.form,"slug",t)},expression:"form.slug"}})],1)])])]),e._v(" "),e.sections.body.length>0?a("div",e._l(e.sections.body,function(t,s){return a("div",{key:t.handle},[a("div",{staticClass:"row"},[a("div",{staticClass:"col form-sidebar"},[a("div",{staticClass:"xxl:mr-10"},[a("h3",[e._v(e._s(t.name))]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v(e._s(t.description))])])]),e._v(" "),a("div",{staticClass:"col form-content"},e._l(t.fields,function(t){return a("div",{key:t.handle,staticClass:"form__group"},[a(t.type.handle+"-fieldtype",{tag:"component",attrs:{field:t},model:{value:e.form[t.handle],callback:function(a){e.$set(e.form,t.handle,a)},expression:"form[field.handle]"}})],1)}),0)]),e._v(" "),s!==e.sections.body.length-1?a("hr"):e._e()])}),0):a("div",{staticClass:"text-center"},[a("p",[e._v("You should configure your Matrix Collection with some sections and fields first "),a("fa-icon",{staticClass:"text-emoji",attrs:{icon:["fas","hand-peace"]}})],1),e._v(" "),a("router-link",{staticClass:"button items-center",attrs:{to:"/matrices/manage/"+e.collection.id}},[a("fa-icon",{staticClass:"mr-2 text-sm",attrs:{icon:["fas","atom-alt"]}}),e._v(" Manage your collection")],1)],1)])],1)]),e._v(" "),a("div",{staticClass:"side-container"},[a("form",{on:{submit:function(t){return t.preventDefault(),e.submit(t)}}},[a("p-card",[a("div",{staticClass:"row"},[a("div",{staticClass:"col w-full"},[a("p-select",{attrs:{name:"status",label:"Status",options:[{label:"Enabled",value:1},{label:"Disabled",value:0}]},model:{value:e.form.status,callback:function(t){e.$set(e.form,"status",t)},expression:"form.status"}})],1)]),e._v(" "),a("portal",{attrs:{to:"actions"}},[a("router-link",{staticClass:"button mr-3",attrs:{to:{name:"entries.index",params:{collection:e.collection.handle}}}},[e._v("Go Back")]),e._v(" "),a("button",{staticClass:"button button--primary",attrs:{type:"submit"},on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Save")])],1)],1),e._v(" "),e._l(e.sections.sidebar,function(t){return a("p-card",{key:t.handle,staticClass:"mt-6"},[a("h3",[e._v(e._s(t.name))]),e._v(" "),a("p",{staticClass:"text-sm"},[e._v(e._s(t.description))]),e._v(" "),a("div",{staticClass:"w-full"},e._l(t.fields,function(t){return a("div",{key:t.handle,staticClass:"form__group"},[a(t.type.handle+"-fieldtype",{tag:"component",attrs:{field:t},model:{value:e.form[t.handle],callback:function(a){e.$set(e.form,t.handle,a)},expression:"form[field.handle]"}})],1)}),0)])})],2)])])],1)},[],!1,null,null,null);t.default=l.exports}}]);
>>>>>>> 65d413deb616d5e85660e4c8c9e8a2ffbd24e7ae
