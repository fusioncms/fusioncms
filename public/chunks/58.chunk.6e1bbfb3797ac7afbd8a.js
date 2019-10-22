(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
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
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      matrices: [],
      activities: [],
      feed: []
    };
  },
  computed: {
    quicklinks: function quicklinks() {
      if (this.matrices) {
        return _.filter(this.matrices, function (matrix) {
          return matrix.quicklink == true;
        });
      }
    }
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    console.warn('Fusion news feed will be implemented at launch. You may safely ignore the following 404 error.');
    axios.all([axios.get('/api/matrices'), axios.get('/api/activity'), axios.get('//getfusioncms.com/feed.json')["catch"](function () {
      return {
        data: {
          items: []
        }
      };
    })]).then(axios.spread(function (matrices, activity, feed) {
      next(function (vm) {
        vm.matrices = matrices.data.data;
        vm.activities = activity.data.data;
        vm.feed = feed.data.items;
      });
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {}
var staticRenderFns = []



/***/ }),

/***/ "./resources/js/views/Dashboard.vue":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=1f79daf6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Dashboard.vue?vue&type=template&id=1f79daf6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_1f79daf6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0Rhc2hib2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0Rhc2hib2FyZC52dWU/NDlkMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRGFzaGJvYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvRGFzaGJvYXJkLnZ1ZT8wOTBlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9EYXNoYm9hcmQudnVlPzEyNWMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdLQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsb0JBRkE7QUFHQTtBQUhBO0FBS0EsR0FQQTtBQVNBO0FBQ0EsY0FEQSx3QkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQUNBO0FBUEEsR0FUQTtBQW1CQSxrQkFuQkEsNEJBbUJBLEVBbkJBLEVBbUJBLElBbkJBLEVBbUJBLElBbkJBLEVBbUJBO0FBQ0E7QUFFQSxlQUNBLDBCQURBLEVBRUEsMEJBRkEsRUFHQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQSxLQU5BLENBSEEsR0FVQSxJQVZBLENBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQSxLQU5BLENBVkE7QUFpQkE7QUF2Q0EsRzs7Ozs7Ozs7Ozs7O0FDeEtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFBd0Y7QUFDM0I7QUFDTDs7O0FBR3hEO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLCtFQUFNO0FBQ1IsRUFBRSxvRkFBTTtBQUNSLEVBQUUsNkZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3RDZjtBQUFBO0FBQUEsd0NBQXlMLENBQWdCLHFQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTdNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJjaHVua3MvNTguY2h1bmsuNmUxYmJmYjM3OTdhYzdhZmJkOGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHBvcnRhbCB0bz1cInRpdGxlXCI+XG4gICAgICAgICAgICA8YXBwLXRpdGxlIGljb249XCJncmlwLWhvcml6b250YWxcIj5EYXNoYm9hcmQ8L2FwcC10aXRsZT5cbiAgICAgICAgPC9wb3J0YWw+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBmbGV4LTEgZmxleC13cmFwXCIgdi1pZj1cInF1aWNrbGlua3NcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgbWItNiB3LWZ1bGwgbWQ6dy0xLzIgeGw6dy0xLzMgeHhsOnctMS80IHh4eGw6dy0xLzVcIiB2LWZvcj1cIm1hdHJpeCBpbiBxdWlja2xpbmtzXCIgOmtleT1cIm1hdHJpeC5oYW5kbGVcIj5cbiAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwibWF0cml4LmFkbWluX3BhdGhcIiBjbGFzcz1cIm5vLXVuZGVybGluZSB0ZXh0LWJsYWNrIGhvdmVyOnRleHQtYmxhY2sgYmctd2hpdGUgcm91bmRlZCBzaGFkb3cgaG92ZXI6c2hhZG93LW1kIHAtMyBmbGV4IGgtZnVsbCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmYS1sYXllcnMgZmEtZncgZmEtM3ggbXItMiBmbGV4LW5vLXNocmlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdjaXJjbGUnXVwiIGNsYXNzPVwiZmEtZncgdGV4dC1wcmltYXJ5LTUwMFwiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIDppY29uPVwiWydmYXInLCAobWF0cml4Lmljb24gfHwgJ3BlbmNpbCcpXVwiIGNsYXNzPVwiZmEtZncgZmEtaW52ZXJzZVwiIHRyYW5zZm9ybT1cInNocmluay04XCI+PC9mYS1pY29uPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZm9udC1zZW1pYm9sZCB0ZXh0LWxnXCI+e3sgbWF0cml4Lm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHQtc21cIj57eyBtYXRyaXguZGVzY3JpcHRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvcm91dGVyLWxpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCBtYi02IG1kOnctZnVsbFwiPlxuICAgICAgICAgICAgICAgIDxhbmFseXRpY3Mtb3ZlcnZpZXc+PC9hbmFseXRpY3Mtb3ZlcnZpZXc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbCB3LWZ1bGwgbGc6dy0yLzNcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlJlY2VudCBBY3Rpdml0eTwvaDI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCIhIGFjdGl2aXRpZXMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTG9va3MgbGlrZSBub3RoaW5nIGhhcyB0YWtlbiBwbGFjZSBvbiB5b3VyIHdlYnNpdGUgeWV0LlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8dGFibGUgdi1pZj1cImFjdGl2aXRpZXMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VXNlcjwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+PC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPkRhdGU8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+VGltZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIgdi1mb3I9XCJhY3Rpdml0eSBpbiBhY3Rpdml0aWVzXCIgOmtleT1cImFjdGl2aXR5LmlkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD48cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAndXNlcnMuZWRpdCcsIHBhcmFtczoge3VzZXI6IGFjdGl2aXR5LmNhdXNlci5pZH0gfVwiPnt7IGFjdGl2aXR5LmNhdXNlci5uYW1lIH19PC9yb3V0ZXItbGluaz48L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRleHQtZ3JheS05MDAgbXItNCBmbGV4IGl0ZW1zLWNlbnRlciB0ZXh0LXNtIHctM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYS1pY29uIHYtaWY9XCJhY3Rpdml0eS5wcm9wZXJ0aWVzLmljb25cIiA6aWNvbj1cIlsnZmFzJywgYWN0aXZpdHkucHJvcGVydGllcy5pY29uXVwiIGNsYXNzPVwiZmEtZndcIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gdi1lbHNlIGNsYXNzPVwiZmEteHNcIiA6aWNvbj1cIlsnZmFzJywgJ2NpcmNsZSddXCIgY2xhc3M9XCJmYS1md1wiPjwvZmEtaWNvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBhY3Rpdml0eS5kZXNjcmlwdGlvbiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwiYWN0aXZpdHkucHJvcGVydGllcy5saW5rXCIgdi1pZj1cImFjdGl2aXR5LnByb3BlcnRpZXMubGlua1wiIGNsYXNzPVwidGV4dC1ncmF5LTgwMCBob3Zlcjp0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhLWljb24gOmljb249XCJbJ2ZhcycsICdhcnJvdy1hbHQtY2lyY2xlLXJpZ2h0J11cIj48L2ZhLWljb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgbW9tZW50KGFjdGl2aXR5LmNyZWF0ZWRfYXQpLmZvcm1hdCgnTCcpIH19PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkPnt7IG1vbWVudChhY3Rpdml0eS5jcmVhdGVkX2F0KS5mb3JtYXQoJ0xUJykgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wgdy1mdWxsIGxnOnctMS8zXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5GdXNpb24gTmV3czwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDx0YWJsZSB2LWlmPVwiZmVlZC5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5BY3Rpb248L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRyIHYtZm9yPVwiZW50cnkgaW4gZmVlZFwiIDprZXk9XCJlbnRyeS5pZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+e3sgZW50cnkudGl0bGUgfX08L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+PGEgOmhyZWY9XCJlbnRyeS51cmxcIj5SZWFkIE1vcmU8L2E+PC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImNhcmRfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBtYi00IGJnLWdyYXktMTAwIHRleHQtZ3JheS04MDAgcm91bmRlZCBwLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGUgRnVzaW9uIG5ld3MgZmVlZCB3aWxsIGJlIGltcGxlbWVudGVkIGF0IGxhdW5jaC5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLWdyYXktMTAwIHRleHQtZ3JheS03MDAgcC0zIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBtci02IGZsZXgtc2hyaW5rLTAganVzdGlmeS1jZW50ZXIgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTN4bCBsZWFkaW5nLW5vbmVcIj4yODwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5EZWMgMjAxOTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgZm9udC1ib2xkIHRleHQtZ3JheS03MDAgdHJhY2tpbmctd2lkZVwiPlJlbGVhc2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GdXNpb25DTVMgNi4wLjAgaXMgbm93IG9wZW4gdG8gdGhlIHB1YmxpYy48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggbWItNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiZy1ncmF5LTEwMCB0ZXh0LWdyYXktNzAwIHAtMyByb3VuZGVkIGJvcmRlciBib3JkZXItZ3JheS0yMDAgbXItNiBmbGV4LXNocmluay0wIGp1c3RpZnktY2VudGVyIGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LWNlbnRlciBmb250LWJvbGQgdGV4dC0zeGwgbGVhZGluZy1ub25lXCI+Mjg8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdGV4dC1jZW50ZXIgdGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+Tm92IDIwMTk8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGZvbnQtYm9sZCB0ZXh0LWdyYXktNzAwIHRyYWNraW5nLXdpZGVcIj5SZWxlYXNlczwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RnVzaW9uQ01TIDUuMTMuNCBpcyBub3cgYXZhaWxhYmxlLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBtYi02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJnLWdyYXktMTAwIHRleHQtZ3JheS03MDAgcC0zIHJvdW5kZWQgYm9yZGVyIGJvcmRlci1ncmF5LTIwMCBtci02IGZsZXgtc2hyaW5rLTAganVzdGlmeS1jZW50ZXIgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHRleHQtY2VudGVyIGZvbnQtYm9sZCB0ZXh0LTN4bCBsZWFkaW5nLW5vbmVcIj4yODwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LWNlbnRlciB0ZXh0LXNtIHRleHQtZ3JheS02MDBcIj5PY3QgMjAxOTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgZm9udC1ib2xkIHRleHQtZ3JheS03MDAgdHJhY2tpbmctd2lkZVwiPlJlbGVhc2VzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5GdXNpb25DTVMgNS4xMy4zIGlzIG5vdyBhdmFpbGFibGUuPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IG1iLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctZ3JheS0xMDAgdGV4dC1ncmF5LTcwMCBwLTMgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIG1yLTYgZmxleC1zaHJpbmstMCBqdXN0aWZ5LWNlbnRlciBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtM3hsIGxlYWRpbmctbm9uZVwiPjI4PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTYwMFwiPlNlcCAyMDE5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCB0cmFja2luZy13aWRlXCI+UmVsZWFzZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZ1c2lvbkNNUyA1LjEzLjIgaXMgbm93IGF2YWlsYWJsZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmctZ3JheS0xMDAgdGV4dC1ncmF5LTcwMCBwLTMgcm91bmRlZCBib3JkZXIgYm9yZGVyLWdyYXktMjAwIG1yLTYgZmxleC1zaHJpbmstMCBqdXN0aWZ5LWNlbnRlciBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgdGV4dC1jZW50ZXIgZm9udC1ib2xkIHRleHQtM3hsIGxlYWRpbmctbm9uZVwiPjI4PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIHRleHQtY2VudGVyIHRleHQtc20gdGV4dC1ncmF5LTYwMFwiPkF1ZyAyMDE5PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBmb250LWJvbGQgdGV4dC1ncmF5LTcwMCB0cmFja2luZy13aWRlXCI+UmVsZWFzZXM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZ1c2lvbkNNUyA1LjEzLjEgaXMgbm93IGF2YWlsYWJsZS48L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWF0cmljZXM6IFtdLFxuICAgICAgICAgICAgICAgIGFjdGl2aXRpZXM6IFtdLFxuICAgICAgICAgICAgICAgIGZlZWQ6IFtdLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGNvbXB1dGVkOiB7XG4gICAgICAgICAgICBxdWlja2xpbmtzKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdHJpY2VzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfLmZpbHRlcih0aGlzLm1hdHJpY2VzLCBmdW5jdGlvbihtYXRyaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtYXRyaXgucXVpY2tsaW5rID09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuXG4gICAgICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignRnVzaW9uIG5ld3MgZmVlZCB3aWxsIGJlIGltcGxlbWVudGVkIGF0IGxhdW5jaC4gWW91IG1heSBzYWZlbHkgaWdub3JlIHRoZSBmb2xsb3dpbmcgNDA0IGVycm9yLicpXG5cbiAgICAgICAgICAgIGF4aW9zLmFsbChbXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL21hdHJpY2VzJyksXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvYXBpL2FjdGl2aXR5JyksXG4gICAgICAgICAgICAgICAgYXhpb3MuZ2V0KCcvL2dldGZ1c2lvbmNtcy5jb20vZmVlZC5qc29uJykuY2F0Y2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKS50aGVuKGF4aW9zLnNwcmVhZChmdW5jdGlvbiAobWF0cmljZXMsIGFjdGl2aXR5LCBmZWVkKSB7XG4gICAgICAgICAgICAgICAgbmV4dChmdW5jdGlvbih2bSkge1xuICAgICAgICAgICAgICAgICAgICB2bS5tYXRyaWNlcyA9IG1hdHJpY2VzLmRhdGEuZGF0YVxuICAgICAgICAgICAgICAgICAgICB2bS5hY3Rpdml0aWVzID0gYWN0aXZpdHkuZGF0YS5kYXRhXG4gICAgICAgICAgICAgICAgICAgIHZtLmZlZWQgPSBmZWVkLmRhdGEuaXRlbXNcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSkpXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge31cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmNzlkYWY2JlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9rYWkvQ29kZS9GdXNpb25DTVMvZnVzaW9uY21zL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzFmNzlkYWY2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzFmNzlkYWY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzFmNzlkYWY2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFmNzlkYWY2JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFmNzlkYWY2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvRGFzaGJvYXJkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGFzaGJvYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXNoYm9hcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Rhc2hib2FyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWY3OWRhZjYmXCIiXSwic291cmNlUm9vdCI6IiJ9