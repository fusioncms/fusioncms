(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQmxvY2tFZGl0b3IvRmllbGQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Jsb2NrRWRpdG9yL0ZpZWxkLnZ1ZT9hZThhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0Jsb2NrRWRpdG9yL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9CbG9ja0VkaXRvci9GaWVsZC52dWU/ZTNmNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9CbG9ja0VkaXRvci9GaWVsZC52dWU/YTAyNiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBLGdDQURBO0FBR0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBTUE7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFOQSxHQUhBO0FBZUEsTUFmQSxrQkFlQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQSxHQXJCQTtBQXVCQSxTQXZCQSxxQkF1QkE7QUFDQTtBQUNBO0FBRUE7QUFDQSwrQkFEQTtBQUVBLDZFQUZBO0FBSUEsZ0JBSkE7QUFNQSxrQkFOQTtBQVFBO0FBQ0EsNEJBREE7QUFFQSxrQkFGQTtBQUdBLDRCQUhBO0FBSUEsb0JBSkE7QUFLQSxzQkFMQTtBQU1BLDhCQU5BO0FBT0Esa0JBUEE7QUFRQSxrQkFSQTtBQVNBLHNCQVRBO0FBVUEsb0JBVkE7QUFXQSxnQkFYQTtBQVlBLGdDQVpBO0FBYUEsb0JBYkE7QUFjQTtBQWRBLE9BUkE7QUF5QkEsY0F6QkEsc0JBeUJBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQTdCQTtBQStCQSxHQTFEQTtBQTREQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBNURBLEc7Ozs7Ozs7Ozs7OztBQzdCQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8scUNBQXFDLHdCQUF3QixFQUFFO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHNDQUFzQyx1QkFBdUIsRUFBRTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtCQUErQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsMEJBQTBCLFNBQVMsK0JBQStCLEVBQUU7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFBb0Y7QUFDM0I7QUFDTDs7O0FBR3BEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQTJMLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQS9NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvMzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPGxhYmVsIDpmb3I9XCJmaWVsZC5oYW5kbGVcIiBjbGFzcz1cImZvcm1fX2xhYmVsXCI+e3tmaWVsZC5uYW1lfX08L2xhYmVsPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYmxvY2stZWRpdG9yXCIgOmlkPVwiZmllbGQuaGFuZGxlXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzPVwiYmxvY2stZWRpdG9yX19hZGRcIiBAY2xpY2sucHJldmVudD1cImFkZEJsb2NrXCIgbmFtZT1cIkFkZCBibG9ja1wiPlxuICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXInLCAncGx1cy1jaXJjbGUnXVwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGltcG9ydCBFZGl0b3JKUyBmcm9tICdAZWRpdG9yanMvZWRpdG9yanMnXG4gICAgXG4gICAgY29uc3QgQ2hlY2tsaXN0ID0gcmVxdWlyZSgnQGVkaXRvcmpzL2NoZWNrbGlzdCcpXG4gICAgY29uc3QgQ29kZSA9IHJlcXVpcmUoJ0BlZGl0b3Jqcy9jb2RlJylcbiAgICBjb25zdCBEZWxpbWl0ZXIgPSByZXF1aXJlKCdAZWRpdG9yanMvZGVsaW1pdGVyJylcbiAgICBjb25zdCBFbWJlZCA9IHJlcXVpcmUoJ0BlZGl0b3Jqcy9lbWJlZCcpXG4gICAgY29uc3QgSGVhZGVyID0gcmVxdWlyZSgnQGVkaXRvcmpzL2hlYWRlcicpXG4gICAgY29uc3QgSW5saW5lQ29kZSA9IHJlcXVpcmUoJ0BlZGl0b3Jqcy9pbmxpbmUtY29kZScpXG4gICAgY29uc3QgTGluayA9IHJlcXVpcmUoJ0BlZGl0b3Jqcy9saW5rJylcbiAgICBjb25zdCBMaXN0ID0gcmVxdWlyZSgnQGVkaXRvcmpzL2xpc3QnKVxuICAgIGNvbnN0IE1hcmtlciA9IHJlcXVpcmUoJ0BlZGl0b3Jqcy9tYXJrZXInKVxuICAgIGNvbnN0IFF1b3RlID0gcmVxdWlyZSgnQGVkaXRvcmpzL3F1b3RlJylcbiAgICBjb25zdCBSYXcgPSByZXF1aXJlKCdAZWRpdG9yanMvcmF3JylcbiAgICBjb25zdCBTaW1wbGVJbWFnZSA9IHJlcXVpcmUoJ0BlZGl0b3Jqcy9zaW1wbGUtaW1hZ2UnKVxuICAgIGNvbnN0IFRhYmxlID0gcmVxdWlyZSgnQGVkaXRvcmpzL3RhYmxlJylcbiAgICBjb25zdCBXYXJuaW5nID0gcmVxdWlyZSgnQGVkaXRvcmpzL3dhcm5pbmcnKVxuXG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnYmxvY2stZWRpdG9yLWZpZWxkdHlwZScsXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGVkaXRvcjoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy52YWx1ZVxuXG4gICAgICAgICAgICB2bS5lZGl0b3IgPSBuZXcgRWRpdG9ySlMoe1xuICAgICAgICAgICAgICAgIGhvbGRlcjogdGhpcy5maWVsZC5oYW5kbGUsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMuZmllbGQuc2V0dGluZ3MucGxhY2Vob2xkZXIgfHwgJ0FkZCBzb21lIHRleHQgaGVyZS4uLicsXG5cbiAgICAgICAgICAgICAgICBkYXRhLFxuXG4gICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAwLFxuXG4gICAgICAgICAgICAgICAgdG9vbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tsaXN0OiBDaGVja2xpc3QsXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IENvZGUsXG4gICAgICAgICAgICAgICAgICAgIGRlbGltaXRlcjogRGVsaW1pdGVyLFxuICAgICAgICAgICAgICAgICAgICBlbWJlZDogRW1iZWQsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcjogSGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICBpbmxpbmVDb2RlOiBJbmxpbmVDb2RlLFxuICAgICAgICAgICAgICAgICAgICBsaW5rOiBMaW5rLFxuICAgICAgICAgICAgICAgICAgICBsaXN0OiBMaXN0LFxuICAgICAgICAgICAgICAgICAgICBtYXJrZXI6IE1hcmtlcixcbiAgICAgICAgICAgICAgICAgICAgcXVvdGU6IFF1b3RlLFxuICAgICAgICAgICAgICAgICAgICByYXc6IFJhdyxcbiAgICAgICAgICAgICAgICAgICAgc2ltcGxlSW1hZ2U6IFNpbXBsZUltYWdlLFxuICAgICAgICAgICAgICAgICAgICB0YWJsZTogVGFibGUsXG4gICAgICAgICAgICAgICAgICAgIHdhcm5pbmc6IFdhcm5pbmcsXG4gICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKCkge1xuICAgICAgICAgICAgICAgICAgICB2bS5lZGl0b3Iuc2F2ZSgpLnRoZW4oKHNhdmVkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgnaW5wdXQnLCBzYXZlZClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIGFkZEJsb2NrKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yLmJsb2Nrcy5pbnNlcnQoJ3BhcmFncmFwaCcsIG51bGwsIG51bGwsIHRoaXMuZWRpdG9yLmJsb2Nrcy5nZXRCbG9ja3NDb3VudCgpKVxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdG9yLmNhcmV0LnNldFRvTGFzdEJsb2NrKClcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRvci50b29sYmFyLm9wZW4oKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFxuICAgICAgXCJsYWJlbFwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiLCBhdHRyczogeyBmb3I6IF92bS5maWVsZC5oYW5kbGUgfSB9LFxuICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmZpZWxkLm5hbWUpKV1cbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJibG9jay1lZGl0b3JcIiwgYXR0cnM6IHsgaWQ6IF92bS5maWVsZC5oYW5kbGUgfSB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJibG9jay1lZGl0b3JfX2FkZFwiLFxuICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIsIG5hbWU6IFwiQWRkIGJsb2NrXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uYWRkQmxvY2soJGV2ZW50KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX2MoXCJmYS1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogW1wiZmFyXCIsIFwicGx1cy1jaXJjbGVcIl0gfSB9KV0sXG4gICAgICAgICAgMVxuICAgICAgICApXG4gICAgICBdXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjZGM3ZDczJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbmNtcy12Ni9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwY2RjN2Q3MycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwY2RjN2Q3MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwY2RjN2Q3MycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjZGM3ZDczJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBjZGM3ZDczJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvZmllbGR0eXBlcy9CbG9ja0VkaXRvci9GaWVsZC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBjZGM3ZDczJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==