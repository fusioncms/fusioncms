<<<<<<< HEAD:public/chunks/40.chunk.50dacd9a599a28a0016d.js
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[40],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Code/Field.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Code/Field.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Code/Field.vue?vue&type=template&id=b06e71cc&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Code/Field.vue?vue&type=template&id=b06e71cc& ***!
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

/***/ "./resources/js/fieldtypes/Code/Field.vue":
/*!************************************************!*\
  !*** ./resources/js/fieldtypes/Code/Field.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_b06e71cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=b06e71cc& */ "./resources/js/fieldtypes/Code/Field.vue?vue&type=template&id=b06e71cc&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/Code/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_b06e71cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_b06e71cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/Code/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/Code/Field.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/fieldtypes/Code/Field.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Code/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/Code/Field.vue?vue&type=template&id=b06e71cc&":
/*!*******************************************************************************!*\
  !*** ./resources/js/fieldtypes/Code/Field.vue?vue&type=template&id=b06e71cc& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_b06e71cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=b06e71cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Code/Field.vue?vue&type=template&id=b06e71cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_b06e71cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_b06e71cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQ29kZS9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQ29kZS9GaWVsZC52dWU/NzliMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Db2RlL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9Db2RlL0ZpZWxkLnZ1ZT9hMzhkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0NvZGUvRmllbGQudnVlPzQzOGMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBRUE7QUFDQSx3QkFEQTtBQUdBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQU1BO0FBQ0EscUJBREE7QUFFQTtBQUZBO0FBTkEsR0FIQTtBQWVBLE1BZkEsa0JBZUE7QUFDQTtBQUNBO0FBREE7QUFHQSxHQW5CQTtBQXFCQTtBQUNBLGNBREEsd0JBQ0E7QUFDQTtBQUNBLEtBSEE7QUFLQSxpQkFMQSwyQkFLQTtBQUNBO0FBQ0EsS0FQQTtBQVNBLFVBVEEsb0JBU0E7QUFDQTtBQUNBO0FBWEEsR0FyQkE7QUFtQ0EsU0FuQ0EscUJBbUNBO0FBQ0Esa0JBREEsQ0FHQTs7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsNEJBREE7QUFFQSxpQkFGQTtBQUdBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLEdBM0RBO0FBNkRBO0FBQ0EsY0FEQSxzQkFDQSxNQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTs7QUFDQTs7QUFDQTtBQUNBOztBQUNBOztBQUNBO0FBQ0E7O0FBQ0E7O0FBQ0E7QUFDQTs7QUF2QkE7QUF5QkE7QUEzQkE7QUE3REEsRzs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDZCQUE2QjtBQUM1QztBQUNBO0FBQ0EsU0FBUyxxQ0FBcUMsd0JBQXdCLEVBQUU7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsZ0JBQWdCLCtDQUErQztBQUMvRCxtQkFBbUI7QUFDbkIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLE9BQU87QUFDUDtBQUNBO0FBQ0EscUJBQXFCLHFDQUFxQztBQUMxRCx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0EsOEJBQThCLFlBQVksOEJBQThCLEVBQUU7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3hDQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBMkwsQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL007QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy80MC5jaHVuay41MGRhY2Q5YTU5OWEyOGEwMDE2ZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fZ3JvdXBcIj5cbiAgICAgICAgICA8bGFiZWwgOmZvcj1cImZpZWxkLmhhbmRsZVwiIGNsYXNzPVwiZm9ybV9fbGFiZWxcIj57e2ZpZWxkLm5hbWV9fTwvbGFiZWw+XG5cbiAgICAgICAgICA8dGV4dGFyZWEgOnJlZj1cInRleHRhcmVhQ2xhc3NcIiA6bmFtZT1cImZpZWxkLmhhbmRsZVwiIDppZD1cImZpZWxkLmhhbmRsZVwiIDp2YWx1ZT1cInZhbHVlXCIgdi1zaG93PVwiZmFsc2VcIj48L3RleHRhcmVhPlxuXG4gICAgICAgICAgPGRpdiA6cmVmPVwiYnJhY2VDbGFzc1wiIDppZD1cImJyYWNlQ2xhc3MgKyAnX2lkJ1wiIGNsYXNzPVwiYm9yZGVyIHJvdW5kZWRcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9fY29udHJvbC0tbWV0YVwiIHYtaWY9XCJmaWVsZC5oZWxwXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybV9faGVscFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJoZWxwXCIgdi1odG1sPVwiaGVscFwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBhY2UgZnJvbSAnYnJhY2UnXG4gICAgXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnY29kZS1maWVsZHR5cGUnLFxuXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZWRpdG9yOiBPYmplY3RcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICBicmFjZUNsYXNzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQuaGFuZGxlICsgJy1icmFjZSdcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgdGV4dGFyZWFDbGFzcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJyYWNlQ2xhc3MgKyAnX3RleHRhcmVhJ1xuICAgICAgICAgIH0sXG5cbiAgICAgICAgICBzeW50YXgoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWVsZC5zZXR0aW5ncy5zeW50YXggfHwgJ2h0bWwnXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgbGV0IHZtID0gdGhpc1xuXG4gICAgICAgICAgLy8gcmVxdWlyZShgYnJhY2UvbW9kZS8ke3RoaXMuc3ludGF4fWApIFRPLURPXG4gICAgICAgICAgdm0ubG9hZFN5bnRheCh2bS5zeW50YXgpXG5cbiAgICAgICAgICByZXF1aXJlKGBicmFjZS90aGVtZS9jaHJvbWVgKVxuXG4gICAgICAgICAgdm0uZWRpdG9yID0gYWNlLmVkaXQodm0uJHJlZnNbdm0uYnJhY2VDbGFzc10pXG4gICAgICAgICAgdm0uZWRpdG9yLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgICAgc2hvd1ByaW50TWFyZ2luOiBmYWxzZSxcbiAgICAgICAgICAgICAgIG1pbkxpbmVzOiA1LFxuICAgICAgICAgICAgICAgbWF4TGluZXM6IEluZmluaXR5XG4gICAgICAgICAgfSlcbiAgICAgICAgICB2bS5lZGl0b3Iuc2V0VGhlbWUoYGFjZS90aGVtZS9jaHJvbWVgKVxuICAgICAgICAgIHZtLmVkaXRvci4kYmxvY2tTY3JvbGxpbmcgPSBJbmZpbml0eVxuICAgICAgICAgIHZtLmVkaXRvci5zZXRWYWx1ZSh2bS52YWx1ZSB8fCAnJywgLTEpXG4gICAgICAgICAgdm0uZWRpdG9yLmdldFNlc3Npb24oKS5zZXRVc2VXcmFwTW9kZSh0cnVlKVxuICAgICAgICAgIHZtLmVkaXRvci5nZXRTZXNzaW9uKCkuc2V0TW9kZShgYWNlL21vZGUvJHt0aGlzLnN5bnRheH1gKVxuXG4gICAgICAgICAgdm0uZWRpdG9yLmdldFNlc3Npb24oKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZtLiRyZWZzW3ZtLnRleHRhcmVhQ2xhc3NdLnZhbHVlID0gdm0uZWRpdG9yLmdldFNlc3Npb24oKS5nZXRWYWx1ZSgpXG4gICAgICAgICAgICAgIHZtLiRlbWl0KCdpbnB1dCcsIHZtLmVkaXRvci5nZXRTZXNzaW9uKCkuZ2V0VmFsdWUoKSlcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICBsb2FkU3ludGF4KHN5bnRheCkge1xuICAgICAgICAgICAgc3dpdGNoKHN5bnRheCkge1xuICAgICAgICAgICAgICBjYXNlICdjc3MnOiBcbiAgICAgICAgICAgICAgICByZXF1aXJlKCdicmFjZS9tb2RlL2NzcycpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ2h0bWwnOiBcbiAgICAgICAgICAgICAgICByZXF1aXJlKCdicmFjZS9tb2RlL2h0bWwnKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBjYXNlICdqYXZhc2NyaXB0JzogXG4gICAgICAgICAgICAgICAgcmVxdWlyZSgnYnJhY2UvbW9kZS9qYXZhc2NyaXB0JylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAnanNvbic6IFxuICAgICAgICAgICAgICAgIHJlcXVpcmUoJ2JyYWNlL21vZGUvanNvbicpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ21hcmtkb3duJzogXG4gICAgICAgICAgICAgICAgcmVxdWlyZSgnYnJhY2UvbW9kZS9tYXJrZG93bicpXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ3B5dGhvbic6IFxuICAgICAgICAgICAgICAgIHJlcXVpcmUoJ2JyYWNlL21vZGUvcHl0aG9uJylcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgY2FzZSAneG1sJzogXG4gICAgICAgICAgICAgICAgcmVxdWlyZSgnYnJhY2UvbW9kZS94bWwnKVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgICAgICAgICByZXF1aXJlKCdicmFjZS9tb2RlL2phdmFzY3JpcHQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fZ3JvdXBcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZvcm1fX2xhYmVsXCIsIGF0dHJzOiB7IGZvcjogX3ZtLmZpZWxkLmhhbmRsZSB9IH0sXG4gICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5maWVsZC5uYW1lKSldXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgeyBuYW1lOiBcInNob3dcIiwgcmF3TmFtZTogXCJ2LXNob3dcIiwgdmFsdWU6IGZhbHNlLCBleHByZXNzaW9uOiBcImZhbHNlXCIgfVxuICAgICAgICBdLFxuICAgICAgICByZWY6IF92bS50ZXh0YXJlYUNsYXNzLFxuICAgICAgICBhdHRyczogeyBuYW1lOiBfdm0uZmllbGQuaGFuZGxlLCBpZDogX3ZtLmZpZWxkLmhhbmRsZSB9LFxuICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnZhbHVlIH1cbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgcmVmOiBfdm0uYnJhY2VDbGFzcyxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm9yZGVyIHJvdW5kZWRcIixcbiAgICAgICAgYXR0cnM6IHsgaWQ6IF92bS5icmFjZUNsYXNzICsgXCJfaWRcIiB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZmllbGQuaGVscFxuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fY29udHJvbC0tbWV0YVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9faGVscFwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLmhlbHBcbiAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5oZWxwKSB9IH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMDZlNzFjYyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjA2ZTcxY2MnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjA2ZTcxY2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjA2ZTcxY2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMDZlNzFjYyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiMDZlNzFjYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQ29kZS9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIwNmU3MWNjJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==
=======
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{MwC5:function(e,t,a){"use strict";a.r(t);var o=a("dhqo"),i=a.n(o),n={data:function(){return{collection:{}}},computed:{endpoint:function(){return this.collection.id?"/datatable/collections/"+this.collection.id:null},singular:function(){return this.collection.name?i.a.singular(this.collection.name):""}},methods:{destroy:function(e){axios.delete("/api/collections/"+this.collection.slug+"/"+e).then((function(e){toast("Entry successfully deleted.","success"),proton().$emit("refresh-datatable-entries")}))}},beforeRouteEnter:function(e,t,a){axios.get("/api/matrices/slug/"+e.params.collection).then((function(e){a((function(t){t.collection=e.data.data}))}))},beforeRouteUpdate:function(e,t,a){var o=this;axios.get("/api/matrices/slug/"+e.params.collection).then((function(e){o.collection=e.data.data})),a()}},r=a("KHd+"),s=Object(r.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("portal",{attrs:{to:"title"}},[a("app-title",{attrs:{icon:e.collection.icon||"pencil"}},[e._v(e._s(e.collection.name))])],1),e._v(" "),a("portal",{attrs:{to:"actions"}},[e.collection.slug?a("router-link",{staticClass:"button",attrs:{to:{name:"entries.create",params:{collection:e.collection.slug}}}},[e._v("Create "+e._s(e.singular))]):e._e()],1),e._v(" "),e.endpoint?a("div",{staticClass:"row"},[a("div",{staticClass:"content-container"},[a("p-datatable",{attrs:{name:"entries",endpoint:e.endpoint,"sort-by":"name","per-page":10},scopedSlots:e._u([{key:"name",fn:function(t){return[a("router-link",{attrs:{to:{name:"entries.edit",params:{collection:e.collection.slug,id:t.record.id}}}},[e._v(e._s(t.record.name))])]}},{key:"slug",fn:function(t){return[a("code",[e._v(e._s(t.record.slug))])]}},{key:"status",fn:function(t){return[1===t.record.status?a("span",{staticClass:"badge badge--success"},[e._v("Enabled")]):a("span",{staticClass:"badge badge--danger"},[e._v("Disabled")])]}},{key:"actions",fn:function(t){return[a("p-dropdown",{attrs:{right:""}},[a("fa-icon",{attrs:{icon:"bars"}}),e._v(" "),a("template",{slot:"options"},[a("p-dropdown-item",{attrs:{to:{name:"entries.edit",params:{collection:e.collection.slug,id:t.record.id}}},on:{click:function(e){e.preventDefault()}}},[e._v("Edit")]),e._v(" "),a("p-dropdown-item",{directives:[{name:"modal",rawName:"v-modal:delete-entry",value:t.record,expression:"table.record",arg:"delete-entry"}],on:{click:function(e){e.preventDefault()}}},[e._v("\n                                Delete\n                            ")])],1)],2)]}}],null,!1,2017605535)})],1)]):e._e(),e._v(" "),a("portal",{attrs:{to:"modals"}},[a("p-modal",{attrs:{name:"delete-entry",title:"Delete Entry"},scopedSlots:e._u([{key:"footer",fn:function(t){return[a("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-entry",arg:"delete-entry"}],staticClass:"ml-3",attrs:{theme:"danger"},on:{click:function(a){return e.destroy(t.data.id)}}},[e._v("Delete")]),e._v(" "),a("p-button",{directives:[{name:"modal",rawName:"v-modal:delete-entry",arg:"delete-entry"}]},[e._v("Cancel")])]}}])},[a("p",[e._v("Are you sure you want to permenantly delete this entry?")])])],1)],1)}),[],!1,null,null,null);t.default=s.exports},dhqo:function(e,t,a){e.exports=function(){var e=[],t=[],a={},o={},i={};function n(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function r(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function s(e,t){return e.replace(/\$(\d{1,2})/g,(function(e,a){return t[a]||""}))}function l(e,t){return e.replace(t[0],(function(a,o){var i=s(t[1],arguments);return r(""===a?e[o-1]:a,i)}))}function u(e,t,o){if(!e.length||a.hasOwnProperty(e))return t;for(var i=o.length;i--;){var n=o[i];if(n[0].test(t))return l(t,n)}return t}function c(e,t,a){return function(o){var i=o.toLowerCase();return t.hasOwnProperty(i)?r(o,i):e.hasOwnProperty(i)?r(o,e[i]):u(i,o,a)}}function d(e,t,a,o){return function(o){var i=o.toLowerCase();return!!t.hasOwnProperty(i)||!e.hasOwnProperty(i)&&u(i,i,a)===i}}function m(e,t,a){return(a?t+" ":"")+(1===t?m.singular(e):m.plural(e))}return m.plural=c(i,o,e),m.isPlural=d(i,o,e),m.singular=c(o,i,t),m.isSingular=d(o,i,t),m.addPluralRule=function(t,a){e.push([n(t),a])},m.addSingularRule=function(e,a){t.push([n(e),a])},m.addUncountableRule=function(e){"string"!=typeof e?(m.addPluralRule(e,"$0"),m.addSingularRule(e,"$0")):a[e.toLowerCase()]=!0},m.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),i[e]=t,o[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return m.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return m.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return m.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(m.addUncountableRule),m}()}}]);
>>>>>>> f58c01081cfa3d67d47d38dd40d631e5dfa877c4:public/chunks/35.js
