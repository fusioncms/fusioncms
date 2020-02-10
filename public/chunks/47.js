(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[47],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/BlockEditor/Field.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/BlockEditor/Field.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @editorjs/editorjs */ "./node_modules/@editorjs/editorjs/dist/editor.js");
/* harmony import */ var _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//


var Checklist = __webpack_require__(/*! @editorjs/checklist */ "./node_modules/@editorjs/checklist/dist/bundle.js");

var Code = __webpack_require__(/*! @editorjs/code */ "./node_modules/@editorjs/code/dist/bundle.js");

var Delimiter = __webpack_require__(/*! @editorjs/delimiter */ "./node_modules/@editorjs/delimiter/dist/bundle.js");

var Embed = __webpack_require__(/*! @editorjs/embed */ "./node_modules/@editorjs/embed/dist/bundle.js");

var Header = __webpack_require__(/*! @editorjs/header */ "./node_modules/@editorjs/header/dist/bundle.js");

var InlineCode = __webpack_require__(/*! @editorjs/inline-code */ "./node_modules/@editorjs/inline-code/dist/bundle.js");

var Link = __webpack_require__(/*! @editorjs/link */ "./node_modules/@editorjs/link/dist/bundle.js");

var List = __webpack_require__(/*! @editorjs/list */ "./node_modules/@editorjs/list/dist/bundle.js");

var Marker = __webpack_require__(/*! @editorjs/marker */ "./node_modules/@editorjs/marker/dist/bundle.js");

var Quote = __webpack_require__(/*! @editorjs/quote */ "./node_modules/@editorjs/quote/dist/bundle.js");

var Raw = __webpack_require__(/*! @editorjs/raw */ "./node_modules/@editorjs/raw/dist/bundle.js");

var SimpleImage = __webpack_require__(/*! @editorjs/simple-image */ "./node_modules/@editorjs/simple-image/dist/bundle.js");

var Table = __webpack_require__(/*! @editorjs/table */ "./node_modules/@editorjs/table/dist/bundle.js");

var Warning = __webpack_require__(/*! @editorjs/warning */ "./node_modules/@editorjs/warning/dist/bundle.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'block-editor-fieldtype',
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
      editor: {
        type: Object
      }
    };
  },
  mounted: function mounted() {
    var vm = this;
    var data = this.value;
    vm.editor = new _editorjs_editorjs__WEBPACK_IMPORTED_MODULE_0___default.a({
      holder: this.field.handle,
      placeholder: this.field.settings.placeholder || 'Add some text here...',
      data: data,
      minHeight: 0,
      tools: {
        checklist: Checklist,
        code: Code,
        delimiter: Delimiter,
        embed: Embed,
        header: Header,
        inlineCode: InlineCode,
        link: Link,
        list: List,
        marker: Marker,
        quote: Quote,
        raw: Raw,
        simpleImage: SimpleImage,
        table: Table,
        warning: Warning
      },
      onChange: function onChange() {
        vm.editor.save().then(function (saved) {
          vm.$emit('input', saved);
        });
      }
    });
  },
  methods: {
    addBlock: function addBlock() {
      this.editor.blocks.insert('paragraph', null, null, this.editor.blocks.getBlocksCount());
      this.editor.caret.setToLastBlock();
      this.editor.toolbar.open();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/BlockEditor/Field.vue?vue&type=template&id=0cdc7d73&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/BlockEditor/Field.vue?vue&type=template&id=0cdc7d73& ***!
  \********************************************************************************************************************************************************************************************************************/
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
    _c(
      "label",
      { staticClass: "form__label", attrs: { for: _vm.field.handle } },
      [_vm._v(_vm._s(_vm.field.name))]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "block-editor", attrs: { id: _vm.field.handle } },
      [
        _c(
          "a",
          {
            staticClass: "block-editor__add",
            attrs: { href: "#", name: "Add block" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.addBlock($event)
              }
            }
          },
          [_c("fa-icon", { attrs: { icon: ["fas", "plus-circle"] } })],
          1
        )
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/fieldtypes/BlockEditor/Field.vue":
/*!*******************************************************!*\
  !*** ./resources/js/fieldtypes/BlockEditor/Field.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_0cdc7d73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=0cdc7d73& */ "./resources/js/fieldtypes/BlockEditor/Field.vue?vue&type=template&id=0cdc7d73&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/BlockEditor/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_0cdc7d73___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_0cdc7d73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/BlockEditor/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/BlockEditor/Field.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/fieldtypes/BlockEditor/Field.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/BlockEditor/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/BlockEditor/Field.vue?vue&type=template&id=0cdc7d73&":
/*!**************************************************************************************!*\
  !*** ./resources/js/fieldtypes/BlockEditor/Field.vue?vue&type=template&id=0cdc7d73& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_0cdc7d73___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=0cdc7d73& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/BlockEditor/Field.vue?vue&type=template&id=0cdc7d73&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_0cdc7d73___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_0cdc7d73___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQmxvY2tFZGl0b3IvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Jsb2NrRWRpdG9yL0ZpZWxkLnZ1ZT9hZThhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Jsb2NrRWRpdG9yL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9CbG9ja0VkaXRvci9GaWVsZC52dWU/ZTNmNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9CbG9ja0VkaXRvci9GaWVsZC52dWU/YTAyNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBLGdDQURBO0FBR0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBTUE7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFOQSxHQUhBO0FBZUEsTUFmQSxrQkFlQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQSxHQXJCQTtBQXVCQSxTQXZCQSxxQkF1QkE7QUFDQTtBQUNBO0FBRUE7QUFDQSwrQkFEQTtBQUVBLDZFQUZBO0FBSUEsZ0JBSkE7QUFNQSxrQkFOQTtBQVFBO0FBQ0EsNEJBREE7QUFFQSxrQkFGQTtBQUdBLDRCQUhBO0FBSUEsb0JBSkE7QUFLQSxzQkFMQTtBQU1BLDhCQU5BO0FBT0Esa0JBUEE7QUFRQSxrQkFSQTtBQVNBLHNCQVRBO0FBVUEsb0JBVkE7QUFXQSxnQkFYQTtBQVlBLGdDQVpBO0FBYUEsb0JBYkE7QUFjQTtBQWRBLE9BUkE7QUF5QkEsY0F6QkEsc0JBeUJBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQTdCQTtBQStCQSxHQTFEQTtBQTREQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBNURBLEc7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUNBQXFDLHdCQUF3QixFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHNDQUFzQyx1QkFBdUIsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtCQUErQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsMEJBQTBCLFNBQVMsK0JBQStCLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvNDcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIDpmb3I9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2xhYmVsXCI+e3tmaWVsZC5uYW1lfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2stZWRpdG9yXCIgOmlkPVwiZmllbGQuaGFuZGxlXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYmxvY2stZWRpdG9yX19hZGRcIiBAY2xpY2sucHJldmVudD1cImFkZEJsb2NrXCIgbmFtZT1cIkFkZCBibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXMnLCAncGx1cy1jaXJjbGUnXVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBFZGl0b3JKUyBmcm9tICdAZWRpdG9yanMvZWRpdG9yanMnXG5cbiAgICBjb25zdCBDaGVja2xpc3QgPSByZXF1aXJlKCdAZWRpdG9yanMvY2hlY2tsaXN0JylcbiAgICBjb25zdCBDb2RlID0gcmVxdWlyZSgnQGVkaXRvcmpzL2NvZGUnKVxuICAgIGNvbnN0IERlbGltaXRlciA9IHJlcXVpcmUoJ0BlZGl0b3Jqcy9kZWxpbWl0ZXInKVxuICAgIGNvbnN0IEVtYmVkID0gcmVxdWlyZSgnQGVkaXRvcmpzL2VtYmVkJylcbiAgICBjb25zdCBIZWFkZXIgPSByZXF1aXJlKCdAZWRpdG9yanMvaGVhZGVyJylcbiAgICBjb25zdCBJbmxpbmVDb2RlID0gcmVxdWlyZSgnQGVkaXRvcmpzL2lubGluZS1jb2RlJylcbiAgICBjb25zdCBMaW5rID0gcmVxdWlyZSgnQGVkaXRvcmpzL2xpbmsnKVxuICAgIGNvbnN0IExpc3QgPSByZXF1aXJlKCdAZWRpdG9yanMvbGlzdCcpXG4gICAgY29uc3QgTWFya2VyID0gcmVxdWlyZSgnQGVkaXRvcmpzL21hcmtlcicpXG4gICAgY29uc3QgUXVvdGUgPSByZXF1aXJlKCdAZWRpdG9yanMvcXVvdGUnKVxuICAgIGNvbnN0IFJhdyA9IHJlcXVpcmUoJ0BlZGl0b3Jqcy9yYXcnKVxuICAgIGNvbnN0IFNpbXBsZUltYWdlID0gcmVxdWlyZSgnQGVkaXRvcmpzL3NpbXBsZS1pbWFnZScpXG4gICAgY29uc3QgVGFibGUgPSByZXF1aXJlKCdAZWRpdG9yanMvdGFibGUnKVxuICAgIGNvbnN0IFdhcm5pbmcgPSByZXF1aXJlKCdAZWRpdG9yanMvd2FybmluZycpXG5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdibG9jay1lZGl0b3ItZmllbGR0eXBlJyxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZWRpdG9yOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBtb3VudGVkKCkge1xuICAgICAgICAgICAgbGV0IHZtID0gdGhpc1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLnZhbHVlXG5cbiAgICAgICAgICAgIHZtLmVkaXRvciA9IG5ldyBFZGl0b3JKUyh7XG4gICAgICAgICAgICAgICAgaG9sZGVyOiB0aGlzLmZpZWxkLmhhbmRsZSxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5maWVsZC5zZXR0aW5ncy5wbGFjZWhvbGRlciB8fCAnQWRkIHNvbWUgdGV4dCBoZXJlLi4uJyxcblxuICAgICAgICAgICAgICAgIGRhdGEsXG5cbiAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IDAsXG5cbiAgICAgICAgICAgICAgICB0b29sczoge1xuICAgICAgICAgICAgICAgICAgICBjaGVja2xpc3Q6IENoZWNrbGlzdCxcbiAgICAgICAgICAgICAgICAgICAgY29kZTogQ29kZSxcbiAgICAgICAgICAgICAgICAgICAgZGVsaW1pdGVyOiBEZWxpbWl0ZXIsXG4gICAgICAgICAgICAgICAgICAgIGVtYmVkOiBFbWJlZCxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiBIZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgIGlubGluZUNvZGU6IElubGluZUNvZGUsXG4gICAgICAgICAgICAgICAgICAgIGxpbms6IExpbmssXG4gICAgICAgICAgICAgICAgICAgIGxpc3Q6IExpc3QsXG4gICAgICAgICAgICAgICAgICAgIG1hcmtlcjogTWFya2VyLFxuICAgICAgICAgICAgICAgICAgICBxdW90ZTogUXVvdGUsXG4gICAgICAgICAgICAgICAgICAgIHJhdzogUmF3LFxuICAgICAgICAgICAgICAgICAgICBzaW1wbGVJbWFnZTogU2ltcGxlSW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgIHRhYmxlOiBUYWJsZSxcbiAgICAgICAgICAgICAgICAgICAgd2FybmluZzogV2FybmluZyxcbiAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLmVkaXRvci5zYXZlKCkudGhlbigoc2F2ZWQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLiRlbWl0KCdpbnB1dCcsIHNhdmVkKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgYWRkQmxvY2soKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3IuYmxvY2tzLmluc2VydCgncGFyYWdyYXBoJywgbnVsbCwgbnVsbCwgdGhpcy5lZGl0b3IuYmxvY2tzLmdldEJsb2Nrc0NvdW50KCkpXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0b3IuY2FyZXQuc2V0VG9MYXN0QmxvY2soKVxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yLnRvb2xiYXIub3BlbigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG48L3NjcmlwdD5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJsYWJlbFwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiLCBhdHRyczogeyBmb3I6IF92bS5maWVsZC5oYW5kbGUgfSB9LFxuICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmZpZWxkLm5hbWUpKV1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJibG9jay1lZGl0b3JcIiwgYXR0cnM6IHsgaWQ6IF92bS5maWVsZC5oYW5kbGUgfSB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJibG9jay1lZGl0b3JfX2FkZFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIsIG5hbWU6IFwiQWRkIGJsb2NrXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkQmxvY2soJGV2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJmYS1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogW1wiZmFzXCIsIFwicGx1cy1jaXJjbGVcIl0gfSB9KV0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjZGM3ZDczJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbmNtcy12Ni9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwY2RjN2Q3MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwY2RjN2Q3MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwY2RjN2Q3MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjZGM3ZDczJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBjZGM3ZDczJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZmllbGR0eXBlcy9CbG9ja0VkaXRvci9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjZGM3ZDczJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==