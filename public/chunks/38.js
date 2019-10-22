(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

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
          [_c("fa-icon", { attrs: { icon: ["far", "plus-circle"] } })],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQmxvY2tFZGl0b3IvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Jsb2NrRWRpdG9yL0ZpZWxkLnZ1ZT9hZThhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Jsb2NrRWRpdG9yL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9CbG9ja0VkaXRvci9GaWVsZC52dWU/ZTNmNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9CbG9ja0VkaXRvci9GaWVsZC52dWU/YTAyNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBLGdDQURBO0FBR0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBTUE7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFOQSxHQUhBO0FBZUEsTUFmQSxrQkFlQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQSxHQXJCQTtBQXVCQSxTQXZCQSxxQkF1QkE7QUFDQTtBQUNBO0FBRUE7QUFDQSwrQkFEQTtBQUVBLDZFQUZBO0FBSUEsZ0JBSkE7QUFNQSxrQkFOQTtBQVFBO0FBQ0EsNEJBREE7QUFFQSxrQkFGQTtBQUdBLDRCQUhBO0FBSUEsb0JBSkE7QUFLQSxzQkFMQTtBQU1BLDhCQU5BO0FBT0Esa0JBUEE7QUFRQSxrQkFSQTtBQVNBLHNCQVRBO0FBVUEsb0JBVkE7QUFXQSxnQkFYQTtBQVlBLGdDQVpBO0FBYUEsb0JBYkE7QUFjQTtBQWRBLE9BUkE7QUF5QkEsY0F6QkEsc0JBeUJBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQTdCQTtBQStCQSxHQTFEQTtBQTREQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBNURBLEc7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUNBQXFDLHdCQUF3QixFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHNDQUFzQyx1QkFBdUIsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtCQUErQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsMEJBQTBCLFNBQVMsK0JBQStCLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvMzguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIDpmb3I9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2xhYmVsXCI+e3tmaWVsZC5uYW1lfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2stZWRpdG9yXCIgOmlkPVwiZmllbGQuaGFuZGxlXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYmxvY2stZWRpdG9yX19hZGRcIiBAY2xpY2sucHJldmVudD1cImFkZEJsb2NrXCIgbmFtZT1cIkFkZCBibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXInLCAncGx1cy1jaXJjbGUnXVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBFZGl0b3JKUyBmcm9tICdAZWRpdG9yanMvZWRpdG9yanMnXG4gICAgXG4gICAgY29uc3QgQ2hlY2tsaXN0ID0gcmVxdWlyZSgnQGVkaXRvcmpzL2NoZWNrbGlzdCcpXG4gICAgY29uc3QgQ29kZSA9IHJlcXVpcmUoJ0BlZGl0b3Jqcy9jb2RlJylcbiAgICBjb25zdCBEZWxpbWl0ZXIgPSByZXF1aXJlKCdAZWRpdG9yanMvZGVsaW1pdGVyJylcbiAgICBjb25zdCBFbWJlZCA9IHJlcXVpcmUoJ0BlZGl0b3Jqcy9lbWJlZCcpXG4gICAgY29uc3QgSGVhZGVyID0gcmVxdWlyZSgnQGVkaXRvcmpzL2hlYWRlcicpXG4gICAgY29uc3QgSW5saW5lQ29kZSA9IHJlcXVpcmUoJ0BlZGl0b3Jqcy9pbmxpbmUtY29kZScpXG4gICAgY29uc3QgTGluayA9IHJlcXVpcmUoJ0BlZGl0b3Jqcy9saW5rJylcbiAgICBjb25zdCBMaXN0ID0gcmVxdWlyZSgnQGVkaXRvcmpzL2xpc3QnKVxuICAgIGNvbnN0IE1hcmtlciA9IHJlcXVpcmUoJ0BlZGl0b3Jqcy9tYXJrZXInKVxuICAgIGNvbnN0IFF1b3RlID0gcmVxdWlyZSgnQGVkaXRvcmpzL3F1b3RlJylcbiAgICBjb25zdCBSYXcgPSByZXF1aXJlKCdAZWRpdG9yanMvcmF3JylcbiAgICBjb25zdCBTaW1wbGVJbWFnZSA9IHJlcXVpcmUoJ0BlZGl0b3Jqcy9zaW1wbGUtaW1hZ2UnKVxuICAgIGNvbnN0IFRhYmxlID0gcmVxdWlyZSgnQGVkaXRvcmpzL3RhYmxlJylcbiAgICBjb25zdCBXYXJuaW5nID0gcmVxdWlyZSgnQGVkaXRvcmpzL3dhcm5pbmcnKVxuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnYmxvY2stZWRpdG9yLWZpZWxkdHlwZScsXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVkaXRvcjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy52YWx1ZVxuXG4gICAgICAgICAgICB2bS5lZGl0b3IgPSBuZXcgRWRpdG9ySlMoe1xuICAgICAgICAgICAgICAgIGhvbGRlcjogdGhpcy5maWVsZC5oYW5kbGUsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuZmllbGQuc2V0dGluZ3MucGxhY2Vob2xkZXIgfHwgJ0FkZCBzb21lIHRleHQgaGVyZS4uLicsXG5cbiAgICAgICAgICAgICAgICBkYXRhLFxuXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAwLFxuXG4gICAgICAgICAgICAgICAgdG9vbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0OiBDaGVja2xpc3QsXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IENvZGUsXG4gICAgICAgICAgICAgICAgICAgIGRlbGltaXRlcjogRGVsaW1pdGVyLFxuICAgICAgICAgICAgICAgICAgICBlbWJlZDogRW1iZWQsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogSGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVDb2RlOiBJbmxpbmVDb2RlLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBMaW5rLFxuICAgICAgICAgICAgICAgICAgICBsaXN0OiBMaXN0LFxuICAgICAgICAgICAgICAgICAgICBtYXJrZXI6IE1hcmtlcixcbiAgICAgICAgICAgICAgICAgICAgcXVvdGU6IFF1b3RlLFxuICAgICAgICAgICAgICAgICAgICByYXc6IFJhdyxcbiAgICAgICAgICAgICAgICAgICAgc2ltcGxlSW1hZ2U6IFNpbXBsZUltYWdlLFxuICAgICAgICAgICAgICAgICAgICB0YWJsZTogVGFibGUsXG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmc6IFdhcm5pbmcsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICAgICAgICAgICAgICB2bS5lZGl0b3Iuc2F2ZSgpLnRoZW4oKHNhdmVkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgnaW5wdXQnLCBzYXZlZClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGFkZEJsb2NrKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yLmJsb2Nrcy5pbnNlcnQoJ3BhcmFncmFwaCcsIG51bGwsIG51bGwsIHRoaXMuZWRpdG9yLmJsb2Nrcy5nZXRCbG9ja3NDb3VudCgpKVxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yLmNhcmV0LnNldFRvTGFzdEJsb2NrKClcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci50b29sYmFyLm9wZW4oKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICBfYyhcbiAgICAgIFwibGFiZWxcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiwgYXR0cnM6IHsgZm9yOiBfdm0uZmllbGQuaGFuZGxlIH0gfSxcbiAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5maWVsZC5uYW1lKSldXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYmxvY2stZWRpdG9yXCIsIGF0dHJzOiB7IGlkOiBfdm0uZmllbGQuaGFuZGxlIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmxvY2stZWRpdG9yX19hZGRcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiLCBuYW1lOiBcIkFkZCBibG9ja1wiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmFkZEJsb2NrKCRldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW19jKFwiZmEtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFtcImZhclwiLCBcInBsdXMtY2lyY2xlXCJdIH0gfSldLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wY2RjN2Q3MyZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMGNkYzdkNzMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMGNkYzdkNzMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMGNkYzdkNzMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wY2RjN2Q3MyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwY2RjN2Q3MycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQmxvY2tFZGl0b3IvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wY2RjN2Q3MyZcIiJdLCJzb3VyY2VSb290IjoiIn0=