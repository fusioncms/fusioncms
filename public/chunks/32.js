(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[32],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a& ***!
  \***************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/js/components/Fieldtypes/Address/Field.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Address/Field.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field.vue?vue&type=template&id=6a5df87a& */ "./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a&");
/* harmony import */ var _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Field.vue?vue&type=script&lang=js& */ "./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Fieldtypes/Address/Field.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Field.vue?vue&type=template&id=6a5df87a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Fieldtypes/Address/Field.vue?vue&type=template&id=6a5df87a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Field_vue_vue_type_template_id_6a5df87a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9BZGRyZXNzL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0FkZHJlc3MvRmllbGQudnVlP2JkMGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9BZGRyZXNzL0ZpZWxkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0FkZHJlc3MvRmllbGQudnVlPzhjYzIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvRmllbGR0eXBlcy9BZGRyZXNzL0ZpZWxkLnZ1ZT9hMTAzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0REE7QUFDQSwyQkFEQTtBQUdBLE1BSEEsa0JBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxzQ0FEQTtBQUVBLHNDQUZBO0FBR0EsOEJBSEE7QUFJQSxnQ0FKQTtBQUtBLDRCQUxBO0FBTUEsb0NBTkE7QUFPQSw0QkFQQTtBQVFBLDRCQVJBO0FBU0E7QUFUQTtBQVdBLEtBWkEsTUFZQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxvQkFGQTtBQUdBLGdCQUhBO0FBSUEsaUJBSkE7QUFLQSxlQUxBO0FBTUEsbUJBTkE7QUFPQSxlQVBBO0FBUUEsZUFSQTtBQVNBO0FBVEE7QUFXQTs7QUFFQTtBQUNBLGtCQURBO0FBRUEsZ0JBRkE7QUFHQTtBQUhBO0FBS0EsR0FyQ0E7QUF1Q0E7QUFDQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxLQURBO0FBTUE7QUFDQSxxQkFEQTtBQUVBO0FBRkE7QUFOQSxHQXZDQTtBQW1EQTtBQUNBLFNBREEsbUJBQ0E7QUFDQTtBQUNBLEtBSEE7QUFLQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFyQkEsR0FuREE7QUEyRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQSxHQTNFQTtBQWlGQTtBQUNBLGVBREEsdUJBQ0EsS0FEQSxFQUNBLE1BREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBO0FBTUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBLEtBWkE7QUFjQSw4QkFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFEQTtBQUVBO0FBRkE7QUFJQTtBQUNBO0FBQ0EsT0FwQkE7QUFxQkEsS0EvQ0EsRUErQ0EsR0EvQ0E7QUFkQSxHQWpGQTtBQWtKQSxTQWxKQSxxQkFrSkE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkE7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsS0FQQSxNQU9BO0FBQ0E7QUFDQTtBQUNBO0FBbktBLEc7Ozs7Ozs7Ozs7OztBQzVEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwyQkFBMkI7QUFDL0MsZUFBZSw2QkFBNkI7QUFDNUM7QUFDQSxlQUFlLDBCQUEwQjtBQUN6QztBQUNBO0FBQ0EsU0FBUyx1QkFBdUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNEJBQTRCO0FBQzdDLG1CQUFtQixnQ0FBZ0MsZ0JBQWdCLEVBQUU7QUFDckU7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2pIQTtBQUFBO0FBQUE7QUFBQTtBQUFvRjtBQUMzQjtBQUNMOzs7QUFHcEQ7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLGdGQUFNO0FBQ1IsRUFBRSx5RkFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdENmO0FBQUE7QUFBQSx3Q0FBaU0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBck47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImNodW5rcy8zMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgICA8ZGl2IGNsYXNzPVwicHgtMiBtYi00XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtX19sYWJlbFwiPnt7ZmllbGQubmFtZX19PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgcHgtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMS8yXCI+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX2FkZHJlc3MxJ1wiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyAxXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS5hZGRyZXNzMVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlKCRldmVudCwgJ2FkZHJlc3MxJylcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgID48L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX2FkZHJlc3MyJ1wiXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWRkcmVzcyAyXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS5hZGRyZXNzMlwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlKCRldmVudCwgJ2FkZHJlc3MyJylcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgID48L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX2NpdHknXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS5jaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWUoJGV2ZW50LCAnY2l0eScpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICA+PC9wLWlucHV0PlxuICAgICAgICAgICAgICAgIDxwLWlucHV0XG4gICAgICAgICAgICAgICAgICAgIDpuYW1lPVwiZmllbGQuaGFuZGxlICsgJ19zdGF0ZSdcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlN0YXRlXCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS5zdGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cInVwZGF0ZVZhbHVlKCRldmVudCwgJ3N0YXRlJylcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgID48L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX3ppcCdcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlpJUFwiXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImRhdGEuemlwXCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWUoJGV2ZW50LCAnemlwJylcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIm1iLTJcIlxuICAgICAgICAgICAgICAgID48L3AtaW5wdXQ+XG4gICAgICAgICAgICAgICAgPHAtaW5wdXRcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCJmaWVsZC5oYW5kbGUgKyAnX2NvdW50cnknXCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwiZGF0YS5jb3VudHJ5XCJcbiAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwidXBkYXRlVmFsdWUoJGV2ZW50LCAnY291bnRyeScpXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJtYi0yXCJcbiAgICAgICAgICAgICAgICA+PC9wLWlucHV0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xLzIgcGwtMlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoLWZ1bGxcIiA6aWQ9XCJtYXBJRFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJtYXBFcnJvclwiIGNsYXNzPVwicC01XCIgdi1odG1sPVwibWFwRXJyb3JcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBuYW1lOiAnYWRkcmVzcy1maWVsZHR5cGUnLFxuXG4gICAgICAgIGRhdGEoKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHt9XG4gICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLnZhbHVlXG4gICAgICAgICAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MxOiB2YWx1ZS5hZGRyZXNzMSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczI6IHZhbHVlLmFkZHJlc3MyIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICBjaXR5OiB2YWx1ZS5jaXR5IHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdmFsdWUuc3RhdGUgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIHppcDogdmFsdWUuemlwIHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICBjb3VudHJ5OiB2YWx1ZS5jb3VudHJ5IHx8ICcnLFxuICAgICAgICAgICAgICAgICAgICBsYXQ6IHZhbHVlLmxhdCB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgbG5nOiB2YWx1ZS5sbmcgfHwgJycsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZF9hZGRyZXNzOiB0aGlzLmFkZHJlc3NMb29rdXAgfHwgJycsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzMTogJycsXG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MyOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY2l0eTogJycsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgemlwOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgY291bnRyeTogJycsXG4gICAgICAgICAgICAgICAgICAgIGxhdDogJycsXG4gICAgICAgICAgICAgICAgICAgIGxuZzogJycsXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdHRlZF9hZGRyZXNzOiAnJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbWFya2VyOiBudWxsLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgbWFwRXJyb3I6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgICAgIG1hcElEKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmZpZWxkLmhhbmRsZSArICdfbWFwJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYWRkcmVzc0xvb2t1cDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFkZHJlc3NTdHJpbmcgPSB0aGlzLmRhdGEuYWRkcmVzczEgKyAnICcgKyB0aGlzLmRhdGEuYWRkcmVzczJcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2l0eSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzU3RyaW5nID0gYWRkcmVzc1N0cmluZyArICcsICcgKyB0aGlzLmRhdGEuY2l0eTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLnN0YXRlIHx8IHRoaXMuZGF0YS56aXApIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1N0cmluZyA9IGFkZHJlc3NTdHJpbmcgKyAnLCAnICsgdGhpcy5kYXRhLnN0YXRlICsgJyAnICsgdGhpcy5kYXRhLnppcDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNvdW50cnkpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1N0cmluZyA9IGFkZHJlc3NTdHJpbmcgKyAnLCAnICsgdGhpcy5kYXRhLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFkZHJlc3NTdHJpbmcucmVwbGFjZSgvICsvZywgJyAnKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG5cbiAgICAgICAgd2F0Y2g6IHtcbiAgICAgICAgICAgIGFkZHJlc3NMb29rdXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9jYXRlQWRkcmVzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1ldGhvZHM6IHtcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKGV2ZW50LCBoYW5kbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFbaGFuZGxlXSA9IGV2ZW50XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLmRhdGEpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjcmVhdGVNYXA6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICghIF8uaXNVbmRlZmluZWQod2luZG93Lmdvb2dsZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMubWFwSUQpKTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvY2F0ZUFkZHJlc3MoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBsb2NhdGVBZGRyZXNzOiBfLmRlYm91bmNlKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoXy5pc1VuZGVmaW5lZCh3aW5kb3cuZ29vZ2xlKSkgcmV0dXJuO1xuXG4gICAgICAgICAgICAgICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LnRyaWdnZXIodGhpcy5tYXAsICdyZXNpemUnKTtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgZ2VvY29kZXIgPSBuZXcgZ29vZ2xlLm1hcHMuR2VvY29kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHZtID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFkZHJlc3MgPSB0aGlzLmFkZHJlc3NMb29rdXA7XG4gICAgICAgICAgICAgICAgICAgIHZhciB6b29tID0gMTY7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFkZHJlc3MgPT0gJycgfHwgYWRkcmVzcyA9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcmtlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFya2VyLnNldE1hcChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAuc2V0Q2VudGVyKG5ldyBnb29nbGUubWFwcy5MYXRMbmcoMCwgMCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXAuc2V0Wm9vbSgxKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhLmZvcm1hdHRlZF9hZGRyZXNzID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEubGF0ID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEubG5nID0gJyc7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGdlb2NvZGVyLmdlb2NvZGUoeyBhZGRyZXNzIH0sIGZ1bmN0aW9uKHJlc3VsdHMsIHN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gZ29vZ2xlLm1hcHMuR2VvY29kZXJTdGF0dXMuT0spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2bS5tYXAuc2V0Q2VudGVyKHJlc3VsdHNbMF0uZ2VvbWV0cnkubG9jYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLm1hcC5zZXRab29tKHpvb20pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGF0YS5mb3JtYXR0ZWRfYWRkcmVzcyA9IHJlc3VsdHNbMF0uZm9ybWF0dGVkX2FkZHJlc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZGF0YS5sYXQgPSByZXN1bHRzWzBdLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmRhdGEubG5nID0gcmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvbi5sbmcoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzICE9PSAnJyB8fCBhZGRyZXNzICE9PSAnICcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZtLm1hcmtlciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0ubWFya2VyLnNldE1hcChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLm1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFwOiB2bS5tYXAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVzdWx0c1swXS5nZW9tZXRyeS5sb2NhdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIDUwMFxuICAgICAgICAgICAgKVxuICAgICAgICB9LFxuXG4gICAgICAgIG1vdW50ZWQoKSB7XG4gICAgICAgICAgICBsZXQgdm0gPSB0aGlzXG4gICAgICAgICAgICBsZXQgYXBpS2V5ID0gdm0uZmllbGQuc2V0dGluZ3MuYXBpX2tleVxuICAgICAgICAgICAgaWYgKCFhcGlLZXkgfHwgYXBpS2V5ID09ICcnKSB7XG4gICAgICAgICAgICAgICAgdm0ubWFwRXJyb3IgPSAnWW91IHdpbGwgbmVlZCB0byBnZW5lcmF0ZSBhIDxhIGhyZWY9XCJodHRwczovL2RldmVsb3BlcnMuZ29vZ2xlLmNvbS9tYXBzL2RvY3VtZW50YXRpb24vamF2YXNjcmlwdC9nZXQtYXBpLWtleVwiIHRhcmdldD1cIl9ibGFua1wiPkdvb2dsZSBNYXBzIEFQSSBrZXk8L2E+IGluIG9yZGVyIHRvIHZpZXcgdGhlIG1hcCBjb21wb25lbnQgYW5kIHJldHJpZXZlIGxhdGl0dWRlIGFuZCBsb25naXR1ZGUgY29vcmRpbmF0ZXMgZm9yIHlvdXIgYWRkcmVzcydcbiAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfLmlzVW5kZWZpbmVkKHdpbmRvdy5nb29nbGUpKSB7XG4gICAgICAgICAgICAgICAgd2luZG93Lm1hcEluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdm0uY3JlYXRlTWFwKClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG1hcFNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpXG4gICAgICAgICAgICAgICAgbWFwU2NyaXB0LnNldEF0dHJpYnV0ZSgnc3JjJywgYGh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9JHthcGlLZXl9JmNhbGxiYWNrPW1hcEluaXRgKVxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobWFwU2NyaXB0KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2bS5jcmVhdGVNYXAoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbjwvc2NyaXB0PlxuXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicHgtMiBtYi00XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9ybV9fbGFiZWxcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0uZmllbGQubmFtZSkpXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBweC0yXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidy0xLzJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJwLWlucHV0XCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1iLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIG5hbWU6IF92bS5maWVsZC5oYW5kbGUgKyBcIl9hZGRyZXNzMVwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCJBZGRyZXNzIDFcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRhLmFkZHJlc3MxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFsdWUoJGV2ZW50LCBcImFkZHJlc3MxXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlICsgXCJfYWRkcmVzczJcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQWRkcmVzcyAyXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGF0YS5hZGRyZXNzMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVZhbHVlKCRldmVudCwgXCJhZGRyZXNzMlwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSArIFwiX2NpdHlcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ2l0eVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGEuY2l0eVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVZhbHVlKCRldmVudCwgXCJjaXR5XCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlICsgXCJfc3RhdGVcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiU3RhdGVcIixcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRhLnN0YXRlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFsdWUoJGV2ZW50LCBcInN0YXRlXCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYi0yXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBfdm0uZmllbGQuaGFuZGxlICsgXCJfemlwXCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIlpJUFwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGEuemlwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udXBkYXRlVmFsdWUoJGV2ZW50LCBcInppcFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWItMlwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLmZpZWxkLmhhbmRsZSArIFwiX2NvdW50cnlcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwiQ291bnRyeVwiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGEuY291bnRyeVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnVwZGF0ZVZhbHVlKCRldmVudCwgXCJjb3VudHJ5XCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidy0xLzIgcGwtMlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoLWZ1bGxcIiwgYXR0cnM6IHsgaWQ6IF92bS5tYXBJRCB9IH0sIFtcbiAgICAgICAgICBfdm0ubWFwRXJyb3JcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInAtNVwiLFxuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5tYXBFcnJvcikgfVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhNWRmODdhJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZpZWxkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMva2FpL0NvZGUvRnVzaW9uQ01TL2Z1c2lvbmNtcy9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2YTVkZjg3YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2YTVkZjg3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2YTVkZjg3YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRmllbGQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTZhNWRmODdhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzZhNWRmODdhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvY29tcG9uZW50cy9GaWVsZHR5cGVzL0FkZHJlc3MvRmllbGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GaWVsZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmllbGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZpZWxkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02YTVkZjg3YSZcIiJdLCJzb3VyY2VSb290IjoiIn0=