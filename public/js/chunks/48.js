(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Address/Field.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Address/Field.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'address-fieldtype',
  data: function data() {
    var data = {};
    var value = this.value;

    if (this.value) {
      data = {
        address1: value.address1 || '',
        address2: value.address2 || '',
        city: value.city || '',
        state: value.state || '',
        zip: value.zip || '',
        country: value.country || '',
        lat: value.lat || '',
        lng: value.lng || '',
        formatted_address: this.addressLookup || ''
      };
    } else {
      data = {
        address1: '',
        address2: '',
        city: '',
        state: '',
        zip: '',
        country: '',
        lat: '',
        lng: '',
        formatted_address: ''
      };
    }

    return {
      marker: null,
      data: data,
      mapError: ''
    };
  },
  props: {
    field: {
      type: Object,
      required: true
    },
    value: {
      required: false,
      "default": null
    }
  },
  computed: {
    mapID: function mapID() {
      return this.field.handle + '_map';
    },
    addressLookup: function addressLookup() {
      var addressString = this.data.address1 + ' ' + this.data.address2;

      if (this.data.city) {
        addressString = addressString + ', ' + this.data.city;
      }

      if (this.data.state || this.data.zip) {
        addressString = addressString + ', ' + this.data.state + ' ' + this.data.zip;
      }

      if (this.data.country) {
        addressString = addressString + ', ' + this.data.country;
      }

      return addressString.replace(/ +/g, ' ');
    }
  },
  watch: {
    addressLookup: function addressLookup() {
      this.locateAddress();
    }
  },
  methods: {
    updateValue: function updateValue(event, handle) {
      this.data[handle] = event;
      this.$emit('input', this.data);
    },
    createMap: function createMap() {
      if (!_.isUndefined(window.google)) {
        this.map = new google.maps.Map(document.getElementById(this.mapID));
        this.locateAddress();
      }
    },
    locateAddress: _.debounce(function () {
      if (_.isUndefined(window.google)) return;
      google.maps.event.trigger(this.map, 'resize');
      var geocoder = new google.maps.Geocoder();
      var vm = this;
      var address = this.addressLookup;
      var zoom = 16;

      if (address == '' || address == ' ') {
        if (this.marker !== null) {
          this.marker.setMap(null);
        }

        this.map.setCenter(new google.maps.LatLng(0, 0));
        this.map.setZoom(1);
        this.data.formatted_address = '';
        this.data.lat = '';
        this.data.lng = '';
        return;
      }

      geocoder.geocode({
        address: address
      }, function (results, status) {
        if (status === google.maps.GeocoderStatus.OK) {
          vm.map.setCenter(results[0].geometry.location);
          vm.map.setZoom(zoom);
          vm.data.formatted_address = results[0].formatted_address;
          vm.data.lat = results[0].geometry.location.lat();
          vm.data.lng = results[0].geometry.location.lng();

          if (address !== '' || address !== ' ') {
            if (vm.marker !== null) {
              vm.marker.setMap(null);
            }

            vm.marker = new google.maps.Marker({
              map: vm.map,
              position: results[0].geometry.location
            });
          }
        }
      });
    }, 500)
  },
  mounted: function mounted() {
    var vm = this;
    var apiKey = vm.field.settings.api_key;

    if (!apiKey || apiKey == '') {
      vm.mapError = 'You will need to generate a <a href="https://developers.google.com/maps/documentation/javascript/get-api-key" target="_blank">Google Maps API key</a> in order to view the map component and retrieve latitude and longitude coordinates for your address';
      return;
    }

    if (_.isUndefined(window.google)) {
      window.mapInit = function () {
        vm.createMap();
      };

      var mapScript = document.createElement('script');
      mapScript.setAttribute('src', "https://maps.googleapis.com/maps/api/js?key=".concat(apiKey, "&callback=mapInit"));
      document.head.appendChild(mapScript);
    } else {
      vm.createMap();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Address/Field.vue?vue&type=template&id=b15fd0e6&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/fieldtypes/Address/Field.vue?vue&type=template&id=b15fd0e6& ***!
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
  return _c("div", { staticClass: "px-2 mb-4" }, [
    _c("div", { staticClass: "form__label" }, [_vm._v(_vm._s(_vm.field.name))]),
    _vm._v(" "),
    _c("div", { staticClass: "row px-2" }, [
      _c(
        "div",
        { staticClass: "w-1/2" },
        [
          _c("p-input", {
            staticClass: "mb-2",
            attrs: {
              name: _vm.field.handle + "_address1",
              placeholder: "Address 1",
              value: _vm.data.address1
            },
            on: {
              input: function($event) {
                return _vm.updateValue($event, "address1")
              }
            }
          }),
          _vm._v(" "),
          _c("p-input", {
            staticClass: "mb-2",
            attrs: {
              name: _vm.field.handle + "_address2",
              placeholder: "Address 2",
              value: _vm.data.address2
            },
            on: {
              input: function($event) {
                return _vm.updateValue($event, "address2")
              }
            }
          }),
          _vm._v(" "),
          _c("p-input", {
            staticClass: "mb-2",
            attrs: {
              name: _vm.field.handle + "_city",
              placeholder: "City",
              value: _vm.data.city
            },
            on: {
              input: function($event) {
                return _vm.updateValue($event, "city")
              }
            }
          }),
          _vm._v(" "),
          _c("p-input", {
            staticClass: "mb-2",
            attrs: {
              name: _vm.field.handle + "_state",
              placeholder: "State",
              value: _vm.data.state
            },
            on: {
              input: function($event) {
                return _vm.updateValue($event, "state")
              }
            }
          }),
          _vm._v(" "),
          _c("p-input", {
            staticClass: "mb-2",
            attrs: {
              name: _vm.field.handle + "_zip",
              placeholder: "ZIP",
              value: _vm.data.zip
            },
            on: {
              input: function($event) {
                return _vm.updateValue($event, "zip")
              }
            }
          }),
          _vm._v(" "),
          _c("p-input", {
            staticClass: "mb-2",
            attrs: {
              name: _vm.field.handle + "_country",
              placeholder: "Country",
              value: _vm.data.country
            },
            on: {
              input: function($event) {
                return _vm.updateValue($event, "country")
              }
            }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "w-1/2 pl-2" }, [
        _c("div", { staticClass: "h-full", attrs: { id: _vm.mapID } }, [
          _vm.mapError
            ? _c("div", {
                staticClass: "p-5",
                domProps: { innerHTML: _vm._s(_vm.mapError) }
              })
            : _vm._e()
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/fieldtypes/Address/Field.vue":
/*!***************************************************!*\
  !*** ./resources/js/fieldtypes/Address/Field.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_b15fd0e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=b15fd0e6& */ "./resources/js/fieldtypes/Address/Field.vue?vue&type=template&id=b15fd0e6&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/fieldtypes/Address/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_b15fd0e6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_b15fd0e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/fieldtypes/Address/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/fieldtypes/Address/Field.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/fieldtypes/Address/Field.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Address/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/fieldtypes/Address/Field.vue?vue&type=template&id=b15fd0e6&":
/*!**********************************************************************************!*\
  !*** ./resources/js/fieldtypes/Address/Field.vue?vue&type=template&id=b15fd0e6& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_b15fd0e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=b15fd0e6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/fieldtypes/Address/Field.vue?vue&type=template&id=b15fd0e6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_b15fd0e6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_b15fd0e6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQWRkcmVzcy9GaWVsZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2ZpZWxkdHlwZXMvQWRkcmVzcy9GaWVsZC52dWU/NWMyOSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9BZGRyZXNzL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZmllbGR0eXBlcy9BZGRyZXNzL0ZpZWxkLnZ1ZT83OGEzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9maWVsZHR5cGVzL0FkZHJlc3MvRmllbGQudnVlPzhiZGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTREQTtBQUNBLDJCQURBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLHNDQURBO0FBRUEsc0NBRkE7QUFHQSw4QkFIQTtBQUlBLGdDQUpBO0FBS0EsNEJBTEE7QUFNQSxvQ0FOQTtBQU9BLDRCQVBBO0FBUUEsNEJBUkE7QUFTQTtBQVRBO0FBV0EsS0FaQSxNQVlBO0FBQ0E7QUFDQSxvQkFEQTtBQUVBLG9CQUZBO0FBR0EsZ0JBSEE7QUFJQSxpQkFKQTtBQUtBLGVBTEE7QUFNQSxtQkFOQTtBQU9BLGVBUEE7QUFRQSxlQVJBO0FBU0E7QUFUQTtBQVdBOztBQUVBO0FBQ0Esa0JBREE7QUFFQSxnQkFGQTtBQUdBO0FBSEE7QUFLQSxHQXJDQTtBQXVDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBREE7QUFNQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQU5BLEdBdkNBO0FBbURBO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQXJCQSxHQW5EQTtBQTJFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBLEdBM0VBO0FBaUZBO0FBQ0EsZUFEQSx1QkFDQSxLQURBLEVBQ0EsTUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsS0FaQTtBQWNBLDhCQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHlCQURBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQSxPQXBCQTtBQXFCQSxLQS9DQSxFQStDQSxHQS9DQTtBQWRBLEdBakZBO0FBa0pBLFNBbEpBLHFCQWtKQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FGQTs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQVBBLE1BT0E7QUFDQTtBQUNBO0FBQ0E7QUFuS0EsRzs7Ozs7Ozs7Ozs7O0FDNURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQyxlQUFlLDZCQUE2QjtBQUM1QztBQUNBLGVBQWUsMEJBQTBCO0FBQ3pDO0FBQ0E7QUFDQSxTQUFTLHVCQUF1QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiw0QkFBNEI7QUFDN0MsbUJBQW1CLGdDQUFnQyxnQkFBZ0IsRUFBRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0IsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDakhBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7OztBQUdwRDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsZ0ZBQU07QUFDUixFQUFFLHlGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUEyTCxDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EvTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvY2h1bmtzLzQ4LmpzP2lkPWZlODFiYjMyYTYwNjY1MjM2ZDVmIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJweC0yIG1iLTRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm1fX2xhYmVsXCI+e3tmaWVsZC5uYW1lfX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvdyBweC0yXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzJcIj5cbiAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZSArICdfYWRkcmVzczEnXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIDFcIlxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJkYXRhLmFkZHJlc3MxXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWUoJGV2ZW50LCAnYWRkcmVzczEnKVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMlwiXG4gICAgICAgICAgICAgICAgPjwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZSArICdfYWRkcmVzczInXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRyZXNzIDJcIlxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJkYXRhLmFkZHJlc3MyXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWUoJGV2ZW50LCAnYWRkcmVzczInKVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMlwiXG4gICAgICAgICAgICAgICAgPjwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZSArICdfY2l0eSdcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNpdHlcIlxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJkYXRhLmNpdHlcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQsICdjaXR5JylcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgID48L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX3N0YXRlJ1wiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU3RhdGVcIlxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJkYXRhLnN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWUoJGV2ZW50LCAnc3RhdGUnKVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMlwiXG4gICAgICAgICAgICAgICAgPjwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZSArICdfemlwJ1wiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWklQXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS56aXBcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQsICd6aXAnKVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwibWItMlwiXG4gICAgICAgICAgICAgICAgPjwvcC1pbnB1dD5cbiAgICAgICAgICAgICAgICA8cC1pbnB1dFxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cImZpZWxkLmhhbmRsZSArICdfY291bnRyeSdcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvdW50cnlcIlxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJkYXRhLmNvdW50cnlcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJ1cGRhdGVWYWx1ZSgkZXZlbnQsICdjb3VudHJ5JylcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgID48L3AtaW5wdXQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEvMiBwbC0yXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImgtZnVsbFwiIDppZD1cIm1hcElEXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cIm1hcEVycm9yXCIgY2xhc3M9XCJwLTVcIiB2LWh0bWw9XCJtYXBFcnJvclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbiAgICBleHBvcnQgZGVmYXVsdCB7XG4gICAgICAgIG5hbWU6ICdhZGRyZXNzLWZpZWxkdHlwZScsXG5cbiAgICAgICAgZGF0YSgpIHtcbiAgICAgICAgICAgIGxldCBkYXRhID0ge31cbiAgICAgICAgICAgIGxldCB2YWx1ZSA9IHRoaXMudmFsdWVcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczE6IHZhbHVlLmFkZHJlc3MxIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzMjogdmFsdWUuYWRkcmVzczIgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIGNpdHk6IHZhbHVlLmNpdHkgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB2YWx1ZS5zdGF0ZSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgemlwOiB2YWx1ZS56aXAgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50cnk6IHZhbHVlLmNvdW50cnkgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIGxhdDogdmFsdWUubGF0IHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICBsbmc6IHZhbHVlLmxuZyB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkX2FkZHJlc3M6IHRoaXMuYWRkcmVzc0xvb2t1cCB8fCAnJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MxOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczI6ICcnLFxuICAgICAgICAgICAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICB6aXA6ICcnLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbGF0OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0dGVkX2FkZHJlc3M6ICcnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBtYXJrZXI6IG51bGwsXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICBtYXBFcnJvcjogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgZmllbGQ6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICBjb21wdXRlZDoge1xuICAgICAgICAgICAgbWFwSUQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmllbGQuaGFuZGxlICsgJ19tYXAnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBhZGRyZXNzTG9va3VwOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWRkcmVzc1N0cmluZyA9IHRoaXMuZGF0YS5hZGRyZXNzMSArICcgJyArIHRoaXMuZGF0YS5hZGRyZXNzMlxuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3NTdHJpbmcgPSBhZGRyZXNzU3RyaW5nICsgJywgJyArIHRoaXMuZGF0YS5jaXR5O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuc3RhdGUgfHwgdGhpcy5kYXRhLnppcCkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzU3RyaW5nID0gYWRkcmVzc1N0cmluZyArICcsICcgKyB0aGlzLmRhdGEuc3RhdGUgKyAnICcgKyB0aGlzLmRhdGEuemlwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY291bnRyeSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzU3RyaW5nID0gYWRkcmVzc1N0cmluZyArICcsICcgKyB0aGlzLmRhdGEuY291bnRyeTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gYWRkcmVzc1N0cmluZy5yZXBsYWNlKC8gKy9nLCAnICcpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcblxuICAgICAgICB3YXRjaDoge1xuICAgICAgICAgICAgYWRkcmVzc0xvb2t1cDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhdGVBZGRyZXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWV0aG9kczoge1xuICAgICAgICAgICAgdXBkYXRlVmFsdWUoZXZlbnQsIGhhbmRsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVtoYW5kbGVdID0gZXZlbnRcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMuZGF0YSlcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNyZWF0ZU1hcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEgXy5pc1VuZGVmaW5lZCh3aW5kb3cuZ29vZ2xlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5tYXBJRCkpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9jYXRlQWRkcmVzcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGxvY2F0ZUFkZHJlc3M6IF8uZGVib3VuY2UoXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfLmlzVW5kZWZpbmVkKHdpbmRvdy5nb29nbGUpKSByZXR1cm47XG5cbiAgICAgICAgICAgICAgICAgICAgZ29vZ2xlLm1hcHMuZXZlbnQudHJpZ2dlcih0aGlzLm1hcCwgJ3Jlc2l6ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciBnZW9jb2RlciA9IG5ldyBnb29nbGUubWFwcy5HZW9jb2RlcigpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYWRkcmVzcyA9IHRoaXMuYWRkcmVzc0xvb2t1cDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHpvb20gPSAxNjtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYWRkcmVzcyA9PSAnJyB8fCBhZGRyZXNzID09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWFya2VyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5zZXRDZW50ZXIobmV3IGdvb2dsZS5tYXBzLkxhdExuZygwLCAwKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hcC5zZXRab29tKDEpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEuZm9ybWF0dGVkX2FkZHJlc3MgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5sYXQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5sbmcgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZ2VvY29kZXIuZ2VvY29kZSh7IGFkZHJlc3MgfSwgZnVuY3Rpb24ocmVzdWx0cywgc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSBnb29nbGUubWFwcy5HZW9jb2RlclN0YXR1cy5PSykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLm1hcC5zZXRDZW50ZXIocmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0ubWFwLnNldFpvb20oem9vbSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5kYXRhLmZvcm1hdHRlZF9hZGRyZXNzID0gcmVzdWx0c1swXS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5kYXRhLmxhdCA9IHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24ubGF0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGF0YS5sbmcgPSByZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxuZygpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZHJlc3MgIT09ICcnIHx8IGFkZHJlc3MgIT09ICcgJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodm0ubWFya2VyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5tYXJrZXIuc2V0TWFwKG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0ubWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXA6IHZtLm1hcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgNTAwXG4gICAgICAgICAgICApXG4gICAgICAgIH0sXG5cbiAgICAgICAgbW91bnRlZCgpIHtcbiAgICAgICAgICAgIGxldCB2bSA9IHRoaXNcbiAgICAgICAgICAgIGxldCBhcGlLZXkgPSB2bS5maWVsZC5zZXR0aW5ncy5hcGlfa2V5XG4gICAgICAgICAgICBpZiAoIWFwaUtleSB8fCBhcGlLZXkgPT0gJycpIHtcbiAgICAgICAgICAgICAgICB2bS5tYXBFcnJvciA9ICdZb3Ugd2lsbCBuZWVkIHRvIGdlbmVyYXRlIGEgPGEgaHJlZj1cImh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL21hcHMvZG9jdW1lbnRhdGlvbi9qYXZhc2NyaXB0L2dldC1hcGkta2V5XCIgdGFyZ2V0PVwiX2JsYW5rXCI+R29vZ2xlIE1hcHMgQVBJIGtleTwvYT4gaW4gb3JkZXIgdG8gdmlldyB0aGUgbWFwIGNvbXBvbmVudCBhbmQgcmV0cmlldmUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBjb29yZGluYXRlcyBmb3IgeW91ciBhZGRyZXNzJ1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF8uaXNVbmRlZmluZWQod2luZG93Lmdvb2dsZSkpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cubWFwSW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB2bS5jcmVhdGVNYXAoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbWFwU2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgICAgICAgICAgICAgICBtYXBTY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBgaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT0ke2FwaUtleX0mY2FsbGJhY2s9bWFwSW5pdGApXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChtYXBTY3JpcHQpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZtLmNyZWF0ZU1hcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuPC9zY3JpcHQ+XG5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJweC0yIG1iLTRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmb3JtX19sYWJlbFwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS5maWVsZC5uYW1lKSldKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IHB4LTJcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ3LTEvMlwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSArIFwiX2FkZHJlc3MxXCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIkFkZHJlc3MgMVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGEuYWRkcmVzczFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVWYWx1ZSgkZXZlbnQsIFwiYWRkcmVzczFcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUgKyBcIl9hZGRyZXNzMlwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJBZGRyZXNzIDJcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRhLmFkZHJlc3MyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFsdWUoJGV2ZW50LCBcImFkZHJlc3MyXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlICsgXCJfY2l0eVwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDaXR5XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0YS5jaXR5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFsdWUoJGV2ZW50LCBcImNpdHlcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUgKyBcIl9zdGF0ZVwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJTdGF0ZVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGEuc3RhdGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVWYWx1ZSgkZXZlbnQsIFwic3RhdGVcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUgKyBcIl96aXBcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiWklQXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0YS56aXBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGRhdGVWYWx1ZSgkZXZlbnQsIFwiemlwXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlICsgXCJfY291bnRyeVwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJDb3VudHJ5XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0YS5jb3VudHJ5XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFsdWUoJGV2ZW50LCBcImNvdW50cnlcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3LTEvMiBwbC0yXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImgtZnVsbFwiLCBhdHRyczogeyBpZDogX3ZtLm1hcElEIH0gfSwgW1xuICAgICAgICAgIF92bS5tYXBFcnJvclxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicC01XCIsXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLm1hcEVycm9yKSB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjE1ZmQwZTYmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2IxNWZkMGU2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2IxNWZkMGU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2IxNWZkMGU2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GaWVsZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YjE1ZmQwZTYmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYjE1ZmQwZTYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9maWVsZHR5cGVzL0FkZHJlc3MvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMTVmZDBlNiZcIiJdLCJzb3VyY2VSb290IjoiIn0=