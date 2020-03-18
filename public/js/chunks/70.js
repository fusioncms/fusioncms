(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[70],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Create.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Collections/Create.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default, getCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return getCollection; });
/* harmony import */ var _forms_Form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../forms/Form */ "./resources/js/forms/Form.js");
/* harmony import */ var _SharedForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedForm */ "./resources/js/views/Collections/SharedForm.vue");
//
//
//
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
        inner: this.collection.reference_singular || 'Loading...'
      };
    }
  },
  data: function data() {
    return {
      collection: {},
      form: new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"]({})
    };
  },
  components: {
    'shared-form': _SharedForm__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    submit: function submit() {
      var _this = this;

      this.form.post('/api/collections/' + this.collection.slug).then(function (response) {
        toast('Entry saved successfully', 'success');

        _this.$router.push('/collections/' + _this.collection.slug);
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    getCollection(to.params.collection, function (error, matrix, fields) {
      if (error) {
        next(function (vm) {
          vm.$router.push('/collections/' + vm.$router.currentRoute.params.collection);
          toast(error.toString(), 'danger');
        });
      } else {
        next(function (vm) {
          vm.collection = matrix;
          vm.form = new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"](fields, true);
          vm.$emit('updateHead');
        });
      }
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this2 = this;

    getCollection(to.params.collection, function (error, matrix, fields) {
      if (error) {
        _this2.$router.push('/collections/' + _this2.$router.currentRoute.params.collection);

        toast(error.toString(), 'danger');
      } else {
        _this2.collection = matrix;
        _this2.form = new _forms_Form__WEBPACK_IMPORTED_MODULE_0__["default"](fields, true);

        _this2.$emit('updateHead');
      }
    });
    next();
  }
});
function getCollection(collection, callback) {
  console.log(collection);
  axios.get('/api/matrices/slug/' + collection).then(function (response) {
    var matrix = response.data.data;
    var fields = {
      name: '',
      slug: '',
      status: 1
    };

    if (matrix.fieldset) {
      _.forEach(matrix.fieldset.sections, function (section) {
        _.forEach(section.fields, function (field) {
          fields[field.handle] = field["default"];
        });
      });
    }

    callback(null, matrix, fields);
  })["catch"](function (error) {
    console.log(error);
    callback(new Error('The requested collection could not be found'));
  });
}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Create.vue?vue&type=template&id=578f1996&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Collections/Create.vue?vue&type=template&id=578f1996& ***!
  \****************************************************************************************************************************************************************************************************************/
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
          _c("app-title", { attrs: { icon: _vm.collection.icon } }, [
            _vm._v("Create " + _vm._s(_vm.collection.reference_singular))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("portal", { attrs: { to: "subtitle" } }, [
        _vm._v(_vm._s(_vm.collection.description))
      ]),
      _vm._v(" "),
      _c("shared-form", {
        attrs: {
          form: _vm.form,
          submit: _vm.submit,
          collection: _vm.collection
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Collections/Create.vue":
/*!***************************************************!*\
  !*** ./resources/js/views/Collections/Create.vue ***!
  \***************************************************/
/*! exports provided: getCollection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Create_vue_vue_type_template_id_578f1996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Create.vue?vue&type=template&id=578f1996& */ "./resources/js/views/Collections/Create.vue?vue&type=template&id=578f1996&");
/* harmony import */ var _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Create.vue?vue&type=script&lang=js& */ "./resources/js/views/Collections/Create.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["getCollection"]; });

/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Create_vue_vue_type_template_id_578f1996___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Create_vue_vue_type_template_id_578f1996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Collections/Create.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Collections/Create.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/views/Collections/Create.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default, getCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Create.vue?vue&type=script&lang=js&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["getCollection"]; });

 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Collections/Create.vue?vue&type=template&id=578f1996&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Collections/Create.vue?vue&type=template&id=578f1996& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_578f1996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Create.vue?vue&type=template&id=578f1996& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Collections/Create.vue?vue&type=template&id=578f1996&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_578f1996___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Create_vue_vue_type_template_id_578f1996___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0NvbGxlY3Rpb25zL0NyZWF0ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0NvbGxlY3Rpb25zL0NyZWF0ZS52dWU/ODdiYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQ29sbGVjdGlvbnMvQ3JlYXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvQ29sbGVjdGlvbnMvQ3JlYXRlLnZ1ZT8xMTg5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9Db2xsZWN0aW9ucy9DcmVhdGUudnVlPzFlMzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBRUE7QUFDQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUxBLEdBREE7QUFTQSxNQVRBLGtCQVNBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBO0FBRkE7QUFJQSxHQWRBO0FBZ0JBO0FBQ0E7QUFEQSxHQWhCQTtBQW9CQTtBQUNBLFVBREEsb0JBQ0E7QUFBQTs7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FKQSxXQUlBO0FBQ0E7QUFDQSxPQU5BO0FBT0E7QUFUQSxHQXBCQTtBQWdDQSxrQkFoQ0EsNEJBZ0NBLEVBaENBLEVBZ0NBLElBaENBLEVBZ0NBLElBaENBLEVBZ0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFNBSkE7QUFLQSxPQU5BLE1BTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFNBTEE7QUFNQTtBQUNBLEtBZkE7QUFnQkEsR0FqREE7QUFtREEsbUJBbkRBLDZCQW1EQSxFQW5EQSxFQW1EQSxJQW5EQSxFQW1EQSxJQW5EQSxFQW1EQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BSkEsTUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBWEE7QUFhQTtBQUNBO0FBbEVBO0FBcUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSxjQURBO0FBRUEsY0FGQTtBQUdBO0FBSEE7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0EsT0FKQTtBQUtBOztBQUVBO0FBQ0EsR0FsQkEsV0FrQkE7QUFDQTtBQUVBO0FBQ0EsR0F0QkE7QUF1QkEsQzs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsU0FBUyxjQUFjLEVBQUU7QUFDbEM7QUFDQSwyQkFBMkIsU0FBUyw0QkFBNEIsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsU0FBUyxpQkFBaUIsRUFBRTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUY7QUFDM0I7QUFDTDs7O0FBR3JEO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDRFQUFNO0FBQ1IsRUFBRSxpRkFBTTtBQUNSLEVBQUUsMEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUE7QUFBQTtBQUE0TCxDQUFnQixrUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FoTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzcwLmpzP2lkPTM1NzE3ODA0MWJiYWQ4M2VhYjY5Iiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuICAgICAgICAgICAgPGFwcC10aXRsZSA6aWNvbj1cImNvbGxlY3Rpb24uaWNvblwiPkNyZWF0ZSB7eyBjb2xsZWN0aW9uLnJlZmVyZW5jZV9zaW5ndWxhciB9fTwvYXBwLXRpdGxlPlxuICAgICAgICA8L3BvcnRhbD5cblxuICAgICAgICA8cG9ydGFsIHRvPVwic3VidGl0bGVcIj57eyBjb2xsZWN0aW9uLmRlc2NyaXB0aW9uIH19PC9wb3J0YWw+XG5cbiAgICAgICAgPHNoYXJlZC1mb3JtIDpmb3JtPVwiZm9ybVwiIDpzdWJtaXQ9XCJzdWJtaXRcIiA6Y29sbGVjdGlvbj1cImNvbGxlY3Rpb25cIj48L3NoYXJlZC1mb3JtPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBpbXBvcnQgRm9ybSBmcm9tICcuLi8uLi9mb3Jtcy9Gb3JtJ1xuICAgIGltcG9ydCBTaGFyZWRGb3JtIGZyb20gJy4vU2hhcmVkRm9ybSdcblxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGUoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaW5uZXI6IHRoaXMuY29sbGVjdGlvbi5yZWZlcmVuY2Vfc2luZ3VsYXIgfHwgJ0xvYWRpbmcuLi4nXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rpb246IHt9LFxuICAgICAgICAgICAgICAgIGZvcm06IG5ldyBGb3JtKHt9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICdzaGFyZWQtZm9ybSc6IFNoYXJlZEZvcm1cbiAgICAgICAgfSxcblxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBzdWJtaXQoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb3JtLnBvc3QoJy9hcGkvY29sbGVjdGlvbnMvJyArIHRoaXMuY29sbGVjdGlvbi5zbHVnKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdCgnRW50cnkgc2F2ZWQgc3VjY2Vzc2Z1bGx5JywgJ3N1Y2Nlc3MnKVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKCcvY29sbGVjdGlvbnMvJyArIHRoaXMuY29sbGVjdGlvbi5zbHVnKVxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdChyZXNwb25zZS5tZXNzYWdlLCAnZmFpbGVkJylcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG4gICAgICAgICAgICBnZXRDb2xsZWN0aW9uKHRvLnBhcmFtcy5jb2xsZWN0aW9uLCAoZXJyb3IsIG1hdHJpeCwgZmllbGRzKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kcm91dGVyLnB1c2goJy9jb2xsZWN0aW9ucy8nICsgdm0uJHJvdXRlci5jdXJyZW50Um91dGUucGFyYW1zLmNvbGxlY3Rpb24pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnRvU3RyaW5nKCksICdkYW5nZXInKVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHQoKHZtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5jb2xsZWN0aW9uID0gbWF0cml4XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS5mb3JtID0gbmV3IEZvcm0oZmllbGRzLCB0cnVlKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBiZWZvcmVSb3V0ZVVwZGF0ZSh0bywgZnJvbSwgbmV4dCkge1xuICAgICAgICAgICAgZ2V0Q29sbGVjdGlvbih0by5wYXJhbXMuY29sbGVjdGlvbiwgKGVycm9yLCBtYXRyaXgsIGZpZWxkcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCgnL2NvbGxlY3Rpb25zLycgKyB0aGlzLiRyb3V0ZXIuY3VycmVudFJvdXRlLnBhcmFtcy5jb2xsZWN0aW9uKVxuXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0KGVycm9yLnRvU3RyaW5nKCksICdkYW5nZXInKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGVjdGlvbiA9IG1hdHJpeFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm0gPSBuZXcgRm9ybShmaWVsZHMsIHRydWUpXG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlSGVhZCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgbmV4dCgpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBleHBvcnQgZnVuY3Rpb24gZ2V0Q29sbGVjdGlvbihjb2xsZWN0aW9uLCBjYWxsYmFjaykge1xuICAgICAgICBjb25zb2xlLmxvZyhjb2xsZWN0aW9uKVxuXG4gICAgICAgIGF4aW9zLmdldCgnL2FwaS9tYXRyaWNlcy9zbHVnLycgKyBjb2xsZWN0aW9uKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbGV0IG1hdHJpeCA9IHJlc3BvbnNlLmRhdGEuZGF0YVxuXG4gICAgICAgICAgICBsZXQgZmllbGRzID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIHNsdWc6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXR1czogMSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1hdHJpeC5maWVsZHNldCkge1xuICAgICAgICAgICAgICAgIF8uZm9yRWFjaChtYXRyaXguZmllbGRzZXQuc2VjdGlvbnMsIGZ1bmN0aW9uKHNlY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgXy5mb3JFYWNoKHNlY3Rpb24uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzW2ZpZWxkLmhhbmRsZV0gPSBmaWVsZC5kZWZhdWx0XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2sobnVsbCwgbWF0cml4LCBmaWVsZHMpXG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcblxuICAgICAgICAgICAgY2FsbGJhY2sobmV3IEVycm9yKCdUaGUgcmVxdWVzdGVkIGNvbGxlY3Rpb24gY291bGQgbm90IGJlIGZvdW5kJykpXG4gICAgICAgIH0pXG4gICAgfVxuPC9zY3JpcHQ+IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBfdm0uY29sbGVjdGlvbi5pY29uIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiQ3JlYXRlIFwiICsgX3ZtLl9zKF92bS5jb2xsZWN0aW9uLnJlZmVyZW5jZV9zaW5ndWxhcikpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBvcnRhbFwiLCB7IGF0dHJzOiB7IHRvOiBcInN1YnRpdGxlXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNvbGxlY3Rpb24uZGVzY3JpcHRpb24pKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzaGFyZWQtZm9ybVwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgZm9ybTogX3ZtLmZvcm0sXG4gICAgICAgICAgc3VibWl0OiBfdm0uc3VibWl0LFxuICAgICAgICAgIGNvbGxlY3Rpb246IF92bS5jb2xsZWN0aW9uXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NyZWF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTc4ZjE5OTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ3JlYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQ3JlYXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL2thaS9Db2RlL0Z1c2lvbkNNUy9mdXNpb25jbXMvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTc4ZjE5OTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTc4ZjE5OTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTc4ZjE5OTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0NyZWF0ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTc4ZjE5OTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTc4ZjE5OTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9Db2xsZWN0aW9ucy9DcmVhdGUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9DcmVhdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NyZWF0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ3JlYXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NzhmMTk5NiZcIiJdLCJzb3VyY2VSb290IjoiIn0=