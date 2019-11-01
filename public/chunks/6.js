(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Color.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/Fields/Color.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mixins_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mixins/fields */ "./resources/js/components/Importer/Mixins/fields.js");
/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @simonwep/pickr */ "./node_modules/@simonwep/pickr/dist/pickr.min.js");
/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'mapper-field-color',
  mixins: [_Mixins_fields__WEBPACK_IMPORTED_MODULE_0__["default"]],
  data: function data() {
    return {
      pickr: null,
      hex: ''
    };
  },
  watch: {
    'mapping.default': function mappingDefault(colorString) {
      this.changeColor(colorString);
    },
    hex: function hex(colorString) {
      this.changeColor(colorString);
    }
  },
  methods: {
    pickrChanged: function pickrChanged(color) {
      this.hex = color ? color.toHEXA().toString() : '';
      this.mapping["default"] = color ? color.toRGBA().toString(0) : '';
    },
    changeColor: function changeColor(colorString) {
      if (this.pickr.setColor(colorString)) {
        this.pickr.applyColor();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.pickr = _simonwep_pickr__WEBPACK_IMPORTED_MODULE_1___default.a.create({
      el: '.' + this.mapping.handle + '-pickr',
      theme: 'monolith',
      "default": this.mapping["default"],
      comparison: true,
      components: {
        opacity: this.settings.transparency,
        hue: true
      }
    }).on('save', function (color, instance) {
      _this.pickrChanged(color);
    }).on('change', function (color, instance) {
      _this.pickrChanged(color);
    }).on('clear', function (instance) {
      _this.pickrChanged(null);
    }); // init..

    this.changeColor(this.mapping["default"]);
    this.pickrChanged(this.pickr.getColor());
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/DateTime.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/Fields/DateTime.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flatpickr */ "./node_modules/flatpickr/dist/flatpickr.js");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flatpickr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Mixins_fields__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Mixins/fields */ "./resources/js/components/Importer/Mixins/fields.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'mapper-field-datetime',
  mixins: [_Mixins_fields__WEBPACK_IMPORTED_MODULE_1__["default"]],
  data: function data() {
    return {
      flatpickr: null
    };
  },
  computed: {
    __mappingOptions: function __mappingOptions() {
      return _.reject(this.mappingOptions, ['label', 'Use default']);
    }
  },
  methods: {
    emitEvent: function emitEvent(selectedDates, dateStr, instance) {
      this.$emit('input', dateStr);
    }
  },
  mounted: function mounted() {
    this.flatpickr = flatpickr__WEBPACK_IMPORTED_MODULE_0___default()("#flatpickr_".concat(this.mapping.handle), {
      altInput: true,
      enableTime: this.settings.time,
      altFormat: this.settings.format || 'Y-m-d',
      minuteIncrement: 1,
      allowInput: false,
      clickOpens: false,
      defaultDate: this.mapping["default"],
      onChange: this.emitEvent,
      onValueUpdate: this.inputChanged
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Input.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/Fields/Input.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mixins_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mixins/fields */ "./resources/js/components/Importer/Mixins/fields.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'mapper-field-input',
  mixins: [_Mixins_fields__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/None.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/Fields/None.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mixins_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mixins/fields */ "./resources/js/components/Importer/Mixins/fields.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'mapper-field-none',
  mixins: [_Mixins_fields__WEBPACK_IMPORTED_MODULE_0__["default"]],
  computed: {
    __mappingOptions: function __mappingOptions() {
      return _.reject(this.mappingOptions, ['label', 'Use default']);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Number.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/Fields/Number.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mixins_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mixins/fields */ "./resources/js/components/Importer/Mixins/fields.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'mapper-field-number',
  mixins: [_Mixins_fields__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Primary.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/Fields/Primary.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mixins_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mixins/fields */ "./resources/js/components/Importer/Mixins/fields.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'mapper-field-primary',
  mixins: [_Mixins_fields__WEBPACK_IMPORTED_MODULE_0__["default"]],
  computed: {
    __mappingOptions: function __mappingOptions() {
      return _.slice(this.mappingOptions, 2);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Select.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/Fields/Select.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mixins_fields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Mixins/fields */ "./resources/js/components/Importer/Mixins/fields.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'mapper-field-select',
  mixins: [_Mixins_fields__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/MatrixMapping.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/MatrixMapping.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mixins_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mixins/dynamic */ "./resources/js/components/Importer/Mixins/dynamic.js");
//
//
//
//
//
//
//
//
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
  name: 'matrix-mapping',
  mixins: [_Mixins_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/TaxonomyMapping.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/TaxonomyMapping.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mixins_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mixins/dynamic */ "./resources/js/components/Importer/Mixins/dynamic.js");
//
//
//
//
//
//
//
//
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
  name: 'taxonomy-mapping',
  mixins: [_Mixins_dynamic__WEBPACK_IMPORTED_MODULE_0__["default"]]
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/UserMapping.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/UserMapping.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fields_Input_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fields/Input.vue */ "./resources/js/components/Importer/Fields/Input.vue");
/* harmony import */ var _Fields_Primary_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fields/Primary.vue */ "./resources/js/components/Importer/Fields/Primary.vue");
/* harmony import */ var _Fields_Select_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fields/Select.vue */ "./resources/js/components/Importer/Fields/Select.vue");
//
//
//
//
//
//
//
//
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
  name: 'users-mapping',
  data: function data() {
    return {
      roles: []
    };
  },
  computed: {
    fields: function fields() {
      return [{
        'component': 'primary',
        'name': 'ID',
        'required': true
      }, {
        'component': 'input',
        'name': 'Name',
        'required': true
      }, {
        'component': 'input',
        'name': 'Email',
        'required': true
      }, {
        'component': 'select',
        'name': 'Role',
        'help': 'Roles provide permissions for logged in users.',
        'required': true,
        'options': this.roles
      }, {
        'component': 'select',
        'name': 'Status',
        'options': [{
          'label': 'Yes',
          'value': true
        }, {
          'label': 'No',
          'value': false
        }]
      }];
    }
  },
  components: {
    'field-input': _Fields_Input_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'field-primary': _Fields_Primary_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'field-select': _Fields_Select_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    axios.all([axios.get('/api/roles')]).then(axios.spread(function (response) {
      this.roles = _.map(response.data.data, function (role) {
        return {
          'label': role.name,
          'value': role.handle
        };
      });
    }.bind(this)));
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/Mapping.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Importer/Mapping.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Importer_UserMapping_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/Importer/UserMapping.vue */ "./resources/js/components/Importer/UserMapping.vue");
/* harmony import */ var _components_Importer_MatrixMapping_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Importer/MatrixMapping.vue */ "./resources/js/components/Importer/MatrixMapping.vue");
/* harmony import */ var _components_Importer_TaxonomyMapping_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Importer/TaxonomyMapping.vue */ "./resources/js/components/Importer/TaxonomyMapping.vue");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      id: null,
      mod: null,
      group: 0,
      loaded: false
    };
  },
  components: {
    'users-mapping': _components_Importer_UserMapping_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'taxonomies-mapping': _components_Importer_TaxonomyMapping_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'matrices-mapping': _components_Importer_MatrixMapping_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    formMappings: 'mapper/getFormMappings'
  })),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    setMappingOptions: 'mapper/setMappingOptions',
    setFormMappings: 'mapper/setFormMappings'
  }), {
    submit: function submit() {
      axios.patch("/api/imports/mapping/".concat(this.id), {
        mappings: this.formMappings
      }).then(function (response) {
        toast('Import Mapping successfully saved', 'success');
      })["catch"](function (response) {
        toast(response.message, 'failed');
      });
    }
  }),
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    axios.all([axios.get("/api/imports/mapping/".concat(to.params.importer))]).then(axios.spread(function (response) {
      next(function (vm) {
        vm.id = response.data.data.id;
        vm.mod = response.data.data.module;
        vm.group = response.data.data.group;
        var mapping = response.data.data.mappings || {};
        var columns = response.data.data.preview[0];
        var preview = response.data.data.preview[1];

        var optObj = _.zipObject(columns, preview);

        var options = _.map(optObj, function (label, value) {
          return {
            'label': "[".concat(value, "] eg: ").concat(label),
            'value': value
          };
        });

        options.unshift({
          'label': 'Use default',
          'value': null
        });
        options.unshift({
          'label': 'Don\'t import',
          'value': false
        });
        vm.setMappingOptions(options);
        vm.setFormMappings(mapping);
        vm.loaded = true;
      });
    }));
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Color.vue?vue&type=template&id=2b2293e2&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/Fields/Color.vue?vue&type=template&id=2b2293e2& ***!
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
  return _c("div", { staticClass: "row form__group items-end" }, [
    _c("div", { staticClass: "col flex-1" }, [
      _c("label", { domProps: { textContent: _vm._s(_vm.mapping.name) } }),
      _vm._v(" "),
      _vm.required
        ? _c("span", { staticClass: "text-xs text-warning-700 float-right" }, [
            _vm._v("required")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.help
        ? _c(
            "div",
            {
              staticClass:
                "border-l-4 px-4 bg-secondary-100 border-secondary-500 text-xs",
              attrs: { role: "alert" }
            },
            [_c("p", { domProps: { innerHTML: _vm._s(_vm.help) } })]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col flex-1" },
      [
        _c("p-select", {
          attrs: {
            name: _vm.mapping.handle + "-column",
            options: _vm.mappingOptions
          },
          model: {
            value: _vm.mapping.column,
            callback: function($$v) {
              _vm.$set(_vm.mapping, "column", $$v)
            },
            expression: "mapping.column"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col flex-1" }, [
      _c("div", { staticClass: "flex items-start" }, [
        _c("div", { staticClass: "flex-grow mr-3" }, [
          _c(
            "label",
            {
              staticClass: "text-xs",
              attrs: { for: _vm.mapping.handle + "-pickr" }
            },
            [_vm._v("Picker")]
          ),
          _vm._v(" "),
          _c("div", { class: _vm.mapping.handle + "-pickr" })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex-grow mr-3" }, [
          _c(
            "label",
            {
              staticClass: "text-xs",
              attrs: { for: _vm.mapping.handle + "-hex" }
            },
            [_vm._v("Hex")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.hex,
                expression: "hex"
              }
            ],
            staticClass: "form__control",
            attrs: {
              id: _vm.mapping.handle + "-hex",
              name: _vm.mapping.handle + "-hex",
              type: "text"
            },
            domProps: { value: _vm.hex },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.hex = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex-grow" }, [
          _c(
            "label",
            {
              staticClass: "text-xs",
              attrs: { for: _vm.mapping.handle + "-rgba" }
            },
            [_vm._v("RGBA")]
          ),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.mapping.default,
                expression: "mapping.default"
              }
            ],
            staticClass: "form__control",
            attrs: {
              id: _vm.mapping.handle + "-rgba",
              name: _vm.mapping.handle + "-rgba",
              type: "text"
            },
            domProps: { value: _vm.mapping.default },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.mapping, "default", $event.target.value)
              }
            }
          })
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/DateTime.vue?vue&type=template&id=4e88f2c2&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/Fields/DateTime.vue?vue&type=template&id=4e88f2c2& ***!
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
  return _c("div", { staticClass: "row form__group items-end" }, [
    _c("div", { staticClass: "col flex-1" }, [
      _c("label", { domProps: { textContent: _vm._s(_vm.mapping.name) } }),
      _vm._v(" "),
      _vm.required
        ? _c("span", { staticClass: "text-xs text-warning-700 float-right" }, [
            _vm._v("required")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.help
        ? _c(
            "div",
            {
              staticClass:
                "border-l-4 px-4 bg-secondary-100 border-secondary-500 text-xs",
              attrs: { role: "alert" }
            },
            [_c("p", { domProps: { innerHTML: _vm._s(_vm.help) } })]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col flex-1" },
      [
        _c("p-select", {
          attrs: {
            name: _vm.mapping.handle + "-column",
            options: _vm.__mappingOptions
          },
          model: {
            value: _vm.mapping.column,
            callback: function($$v) {
              _vm.$set(_vm.mapping, "column", $$v)
            },
            expression: "mapping.column"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col flex-1" }, [
      _c("div", { staticClass: "flex items-start" }, [
        _c("div", { staticClass: "flex-grow mr-3" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.mapping.default,
                expression: "mapping.default"
              }
            ],
            staticClass: "datetime__input form__control mr-2",
            attrs: {
              id: "flatpickr_" + _vm.mapping.handle,
              name: _vm.mapping.handle + "-pickr",
              placeholder: _vm.settings.placeholder
            },
            domProps: { value: _vm.mapping.default },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.mapping, "default", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex-grow mr-3" }, [
          _c(
            "a",
            {
              staticClass: "datetime__button button button--primary px-4",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.flatpickr.open()
                }
              }
            },
            [_c("fa-icon", { attrs: { icon: "calendar-alt" } })],
            1
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Input.vue?vue&type=template&id=4bcb5a14&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/Fields/Input.vue?vue&type=template&id=4bcb5a14& ***!
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
  return _c("div", { staticClass: "row form__group items-end" }, [
    _c("div", { staticClass: "col flex-1" }, [
      _c("label", { domProps: { textContent: _vm._s(_vm.mapping.name) } }),
      _vm._v(" "),
      _vm.required
        ? _c("span", { staticClass: "text-xs text-warning-700 float-right" }, [
            _vm._v("required")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.help
        ? _c(
            "div",
            {
              staticClass:
                "border-l-4 px-4 bg-secondary-100 border-secondary-500 text-xs",
              attrs: { role: "alert" }
            },
            [_c("p", { domProps: { innerHTML: _vm._s(_vm.help) } })]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col flex-1" },
      [
        _c("p-select", {
          attrs: {
            name: _vm.mapping.handle + "-column",
            options: _vm.mappingOptions
          },
          model: {
            value: _vm.mapping.column,
            callback: function($$v) {
              _vm.$set(_vm.mapping, "column", $$v)
            },
            expression: "mapping.column"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col flex-1" },
      [
        _c("p-input", {
          attrs: { name: _vm.mapping.handle + "-default" },
          model: {
            value: _vm.mapping.default,
            callback: function($$v) {
              _vm.$set(_vm.mapping, "default", $$v)
            },
            expression: "mapping.default"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/None.vue?vue&type=template&id=064a7488&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/Fields/None.vue?vue&type=template&id=064a7488& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row form__group items-end" }, [
    _c("div", { staticClass: "col flex-1" }, [
      _c("label", { domProps: { textContent: _vm._s(_vm.mapping.name) } }),
      _vm._v(" "),
      _vm.required
        ? _c("span", { staticClass: "text-xs text-warning-700 float-right" }, [
            _vm._v("required")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.help
        ? _c(
            "div",
            {
              staticClass:
                "border-l-4 px-4 bg-secondary-100 border-secondary-500 text-xs",
              attrs: { role: "alert" }
            },
            [_c("p", { domProps: { innerHTML: _vm._s(_vm.help) } })]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col flex-1" },
      [
        _c("p-select", {
          attrs: {
            name: _vm.mapping.handle + "-column",
            options: _vm.__mappingOptions
          },
          model: {
            value: _vm.mapping.column,
            callback: function($$v) {
              _vm.$set(_vm.mapping, "column", $$v)
            },
            expression: "mapping.column"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c("div", { staticClass: "col flex-1" })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Number.vue?vue&type=template&id=01c9364d&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/Fields/Number.vue?vue&type=template&id=01c9364d& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row form__group items-end" }, [
    _c("div", { staticClass: "col flex-1" }, [
      _c("label", { domProps: { textContent: _vm._s(_vm.mapping.name) } }),
      _vm._v(" "),
      _vm.required
        ? _c("span", { staticClass: "text-xs text-warning-700 float-right" }, [
            _vm._v("required")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.help
        ? _c(
            "div",
            {
              staticClass:
                "border-l-4 px-4 bg-secondary-100 border-secondary-500 text-xs",
              attrs: { role: "alert" }
            },
            [_c("p", { domProps: { innerHTML: _vm._s(_vm.help) } })]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col flex-1" },
      [
        _c("p-select", {
          attrs: {
            name: _vm.mapping.handle + "-column",
            options: _vm.mappingOptions
          },
          model: {
            value: _vm.mapping.column,
            callback: function($$v) {
              _vm.$set(_vm.mapping, "column", $$v)
            },
            expression: "mapping.column"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col flex-1" },
      [
        _c(
          "p-number",
          {
            attrs: {
              name: _vm.mapping.handle + "-default",
              value: _vm.mapping.default,
              steps: _vm.settings.steps,
              decimals: _vm.settings.decimals,
              min: Number(_vm.settings.min),
              max: Number(_vm.settings.max)
            },
            on: {
              input: function($event) {
                return _vm.$emit("input", $event)
              }
            }
          },
          [
            _c(
              "template",
              { slot: "decrease" },
              [_c("fa-icon", { attrs: { icon: "minus" } })],
              1
            ),
            _vm._v(" "),
            _c(
              "template",
              { slot: "increase" },
              [_c("fa-icon", { attrs: { icon: "plus" } })],
              1
            )
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Primary.vue?vue&type=template&id=4b65cfa4&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/Fields/Primary.vue?vue&type=template&id=4b65cfa4& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row form__group items-end" }, [
    _c("div", { staticClass: "col flex-1" }, [
      _c("label", { domProps: { textContent: _vm._s(_vm.mapping.name) } }),
      _vm._v(" "),
      _vm.required
        ? _c("span", { staticClass: "text-xs text-warning-700 float-right" }, [
            _vm._v("required")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.help
        ? _c(
            "div",
            {
              staticClass:
                "border-l-4 px-4 bg-secondary-100 border-secondary-500 text-xs",
              attrs: { role: "alert" }
            },
            [_c("p", { domProps: { innerHTML: _vm._s(_vm.help) } })]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col flex-1" },
      [
        _c("p-select", {
          attrs: {
            name: _vm.mapping.handle + "-column",
            options: _vm.__mappingOptions
          },
          model: {
            value: _vm.mapping.column,
            callback: function($$v) {
              _vm.$set(_vm.mapping, "column", $$v)
            },
            expression: "mapping.column"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col flex-1" }, [
      _c(
        "div",
        {
          staticClass:
            "border-l-4 px-4 bg-warning-100 border-warning-500 text-xs",
          attrs: { role: "alert" }
        },
        [
          _c("p", [
            _vm._v(
              "This is the primary ID used for modifying existing content. Leave blank for new records."
            )
          ])
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Select.vue?vue&type=template&id=93150300&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/Fields/Select.vue?vue&type=template&id=93150300& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "row form__group items-end" }, [
    _c("div", { staticClass: "col flex-1" }, [
      _c("label", { domProps: { textContent: _vm._s(_vm.mapping.name) } }),
      _vm._v(" "),
      _vm.required
        ? _c("span", { staticClass: "text-xs text-warning-700 float-right" }, [
            _vm._v("required")
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.help
        ? _c(
            "div",
            {
              staticClass:
                "border-l-4 px-4 bg-secondary-100 border-secondary-500 text-xs",
              attrs: { role: "alert" }
            },
            [_c("p", { domProps: { innerHTML: _vm._s(_vm.help) } })]
          )
        : _vm._e()
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col flex-1" },
      [
        _c("p-select", {
          attrs: {
            name: _vm.mapping.handle + "-column",
            options: _vm.mappingOptions
          },
          model: {
            value: _vm.mapping.column,
            callback: function($$v) {
              _vm.$set(_vm.mapping, "column", $$v)
            },
            expression: "mapping.column"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col flex-1" },
      [
        _c("p-select", {
          attrs: {
            name: _vm.mapping.handle + "-default",
            options: _vm.settings.options
          },
          model: {
            value: _vm.mapping.default,
            callback: function($$v) {
              _vm.$set(_vm.mapping, "default", $$v)
            },
            expression: "mapping.default"
          }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/MatrixMapping.vue?vue&type=template&id=20e2d4ca&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/MatrixMapping.vue?vue&type=template&id=20e2d4ca& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
          _c("app-title", { attrs: { icon: "ship" } }, [
            _vm._v("Mapping for Matrix Import")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.fields, function(field) {
        return _c("field-" + field.component, {
          key: field.name,
          tag: "component",
          attrs: {
            name: field.name,
            required: field.required,
            help: field.help,
            settings: field.settings
          }
        })
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/TaxonomyMapping.vue?vue&type=template&id=3503eaea&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/TaxonomyMapping.vue?vue&type=template&id=3503eaea& ***!
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
  return _c(
    "div",
    [
      _c(
        "portal",
        { attrs: { to: "title" } },
        [
          _c("app-title", { attrs: { icon: "ship" } }, [
            _vm._v("Mapping for Taxonomy Import")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.fields, function(field) {
        return _c("field-" + field.component, {
          key: field.name,
          tag: "component",
          attrs: {
            name: field.name,
            required: field.required,
            help: field.help,
            settings: field.settings
          }
        })
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/UserMapping.vue?vue&type=template&id=305aa65e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Importer/UserMapping.vue?vue&type=template&id=305aa65e& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
          _c("app-title", { attrs: { icon: "ship" } }, [
            _vm._v("Mapping for Users Import")
          ])
        ],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.fields, function(field) {
        return _c("field-" + field.component, {
          key: field.name,
          tag: "component",
          attrs: {
            name: field.name,
            required: field.required,
            help: field.help,
            defaultOptions: field.options
          }
        })
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/Mapping.vue?vue&type=template&id=7994b350&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Importer/Mapping.vue?vue&type=template&id=7994b350& ***!
  \**************************************************************************************************************************************************************************************************************/
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
        { attrs: { to: "actions" } },
        [
          _c(
            "router-link",
            { staticClass: "button mr-3", attrs: { to: { name: "importer" } } },
            [_vm._v("Go Back")]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button button--primary",
              attrs: { type: "submit" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [_vm._v("Save")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "content-container" }, [
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submit($event)
                }
              }
            },
            [
              _c(
                "p-card",
                [
                  _c("div", { staticClass: "row border-b mb-3" }, [
                    _c("div", { staticClass: "col flex-1 font-bold" }, [
                      _vm._v("\n\t\t\t\t\t\t\tField\n\t\t\t\t\t\t")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col flex-1 font-bold" }, [
                      _vm._v("\n\t\t\t\t\t\t\tColumn\n\t\t\t\t\t\t")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "col flex-1 font-bold" }, [
                      _vm._v("\n\t\t\t\t\t\t\tDefault Value\n\t\t\t\t\t\t")
                    ])
                  ]),
                  _vm._v(" "),
                  _vm.loaded
                    ? _c(_vm.mod + "-mapping", {
                        tag: "component",
                        attrs: { group: _vm.group }
                      })
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Importer/Fields/Color.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Importer/Fields/Color.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Color_vue_vue_type_template_id_2b2293e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Color.vue?vue&type=template&id=2b2293e2& */ "./resources/js/components/Importer/Fields/Color.vue?vue&type=template&id=2b2293e2&");
/* harmony import */ var _Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Color.vue?vue&type=script&lang=js& */ "./resources/js/components/Importer/Fields/Color.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Color_vue_vue_type_template_id_2b2293e2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Color_vue_vue_type_template_id_2b2293e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Importer/Fields/Color.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Importer/Fields/Color.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/Color.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Color.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Color.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Importer/Fields/Color.vue?vue&type=template&id=2b2293e2&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/Color.vue?vue&type=template&id=2b2293e2& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_template_id_2b2293e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Color.vue?vue&type=template&id=2b2293e2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Color.vue?vue&type=template&id=2b2293e2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_template_id_2b2293e2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_template_id_2b2293e2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Importer/Fields/DateTime.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/DateTime.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DateTime_vue_vue_type_template_id_4e88f2c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DateTime.vue?vue&type=template&id=4e88f2c2& */ "./resources/js/components/Importer/Fields/DateTime.vue?vue&type=template&id=4e88f2c2&");
/* harmony import */ var _DateTime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DateTime.vue?vue&type=script&lang=js& */ "./resources/js/components/Importer/Fields/DateTime.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DateTime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DateTime_vue_vue_type_template_id_4e88f2c2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DateTime_vue_vue_type_template_id_4e88f2c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Importer/Fields/DateTime.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Importer/Fields/DateTime.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/DateTime.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateTime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DateTime.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/DateTime.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DateTime_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Importer/Fields/DateTime.vue?vue&type=template&id=4e88f2c2&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/DateTime.vue?vue&type=template&id=4e88f2c2& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateTime_vue_vue_type_template_id_4e88f2c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DateTime.vue?vue&type=template&id=4e88f2c2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/DateTime.vue?vue&type=template&id=4e88f2c2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateTime_vue_vue_type_template_id_4e88f2c2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DateTime_vue_vue_type_template_id_4e88f2c2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Importer/Fields/Input.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Importer/Fields/Input.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input_vue_vue_type_template_id_4bcb5a14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input.vue?vue&type=template&id=4bcb5a14& */ "./resources/js/components/Importer/Fields/Input.vue?vue&type=template&id=4bcb5a14&");
/* harmony import */ var _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Input.vue?vue&type=script&lang=js& */ "./resources/js/components/Importer/Fields/Input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Input_vue_vue_type_template_id_4bcb5a14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Input_vue_vue_type_template_id_4bcb5a14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Importer/Fields/Input.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Importer/Fields/Input.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/Input.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Input.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Importer/Fields/Input.vue?vue&type=template&id=4bcb5a14&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/Input.vue?vue&type=template&id=4bcb5a14& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_4bcb5a14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Input.vue?vue&type=template&id=4bcb5a14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Input.vue?vue&type=template&id=4bcb5a14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_4bcb5a14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Input_vue_vue_type_template_id_4bcb5a14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Importer/Fields/None.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Importer/Fields/None.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _None_vue_vue_type_template_id_064a7488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./None.vue?vue&type=template&id=064a7488& */ "./resources/js/components/Importer/Fields/None.vue?vue&type=template&id=064a7488&");
/* harmony import */ var _None_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./None.vue?vue&type=script&lang=js& */ "./resources/js/components/Importer/Fields/None.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _None_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _None_vue_vue_type_template_id_064a7488___WEBPACK_IMPORTED_MODULE_0__["render"],
  _None_vue_vue_type_template_id_064a7488___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Importer/Fields/None.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Importer/Fields/None.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/None.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_None_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./None.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/None.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_None_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Importer/Fields/None.vue?vue&type=template&id=064a7488&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/None.vue?vue&type=template&id=064a7488& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_None_vue_vue_type_template_id_064a7488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./None.vue?vue&type=template&id=064a7488& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/None.vue?vue&type=template&id=064a7488&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_None_vue_vue_type_template_id_064a7488___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_None_vue_vue_type_template_id_064a7488___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Importer/Fields/Number.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/Number.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Number_vue_vue_type_template_id_01c9364d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Number.vue?vue&type=template&id=01c9364d& */ "./resources/js/components/Importer/Fields/Number.vue?vue&type=template&id=01c9364d&");
/* harmony import */ var _Number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Number.vue?vue&type=script&lang=js& */ "./resources/js/components/Importer/Fields/Number.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Number_vue_vue_type_template_id_01c9364d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Number_vue_vue_type_template_id_01c9364d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Importer/Fields/Number.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Importer/Fields/Number.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/Number.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Number.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Number.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Number_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Importer/Fields/Number.vue?vue&type=template&id=01c9364d&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/Number.vue?vue&type=template&id=01c9364d& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Number_vue_vue_type_template_id_01c9364d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Number.vue?vue&type=template&id=01c9364d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Number.vue?vue&type=template&id=01c9364d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Number_vue_vue_type_template_id_01c9364d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Number_vue_vue_type_template_id_01c9364d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Importer/Fields/Primary.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/Primary.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Primary_vue_vue_type_template_id_4b65cfa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Primary.vue?vue&type=template&id=4b65cfa4& */ "./resources/js/components/Importer/Fields/Primary.vue?vue&type=template&id=4b65cfa4&");
/* harmony import */ var _Primary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Primary.vue?vue&type=script&lang=js& */ "./resources/js/components/Importer/Fields/Primary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Primary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Primary_vue_vue_type_template_id_4b65cfa4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Primary_vue_vue_type_template_id_4b65cfa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Importer/Fields/Primary.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Importer/Fields/Primary.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/Primary.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Primary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Primary.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Primary.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Primary_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Importer/Fields/Primary.vue?vue&type=template&id=4b65cfa4&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/Primary.vue?vue&type=template&id=4b65cfa4& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Primary_vue_vue_type_template_id_4b65cfa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Primary.vue?vue&type=template&id=4b65cfa4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Primary.vue?vue&type=template&id=4b65cfa4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Primary_vue_vue_type_template_id_4b65cfa4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Primary_vue_vue_type_template_id_4b65cfa4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Importer/Fields/Select.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/Select.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select_vue_vue_type_template_id_93150300___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select.vue?vue&type=template&id=93150300& */ "./resources/js/components/Importer/Fields/Select.vue?vue&type=template&id=93150300&");
/* harmony import */ var _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Select.vue?vue&type=script&lang=js& */ "./resources/js/components/Importer/Fields/Select.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Select_vue_vue_type_template_id_93150300___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Select_vue_vue_type_template_id_93150300___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Importer/Fields/Select.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Importer/Fields/Select.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/Select.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Select.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Select.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Importer/Fields/Select.vue?vue&type=template&id=93150300&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Importer/Fields/Select.vue?vue&type=template&id=93150300& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_93150300___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Select.vue?vue&type=template&id=93150300& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/Fields/Select.vue?vue&type=template&id=93150300&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_93150300___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Select_vue_vue_type_template_id_93150300___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Importer/MatrixMapping.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Importer/MatrixMapping.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MatrixMapping_vue_vue_type_template_id_20e2d4ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatrixMapping.vue?vue&type=template&id=20e2d4ca& */ "./resources/js/components/Importer/MatrixMapping.vue?vue&type=template&id=20e2d4ca&");
/* harmony import */ var _MatrixMapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatrixMapping.vue?vue&type=script&lang=js& */ "./resources/js/components/Importer/MatrixMapping.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MatrixMapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MatrixMapping_vue_vue_type_template_id_20e2d4ca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MatrixMapping_vue_vue_type_template_id_20e2d4ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Importer/MatrixMapping.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Importer/MatrixMapping.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Importer/MatrixMapping.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrixMapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MatrixMapping.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/MatrixMapping.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrixMapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Importer/MatrixMapping.vue?vue&type=template&id=20e2d4ca&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/Importer/MatrixMapping.vue?vue&type=template&id=20e2d4ca& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrixMapping_vue_vue_type_template_id_20e2d4ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MatrixMapping.vue?vue&type=template&id=20e2d4ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/MatrixMapping.vue?vue&type=template&id=20e2d4ca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrixMapping_vue_vue_type_template_id_20e2d4ca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrixMapping_vue_vue_type_template_id_20e2d4ca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Importer/Mixins/dynamic.js":
/*!************************************************************!*\
  !*** ./resources/js/components/Importer/Mixins/dynamic.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Fields_Color_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Fields/Color.vue */ "./resources/js/components/Importer/Fields/Color.vue");
/* harmony import */ var _Fields_DateTime_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Fields/DateTime.vue */ "./resources/js/components/Importer/Fields/DateTime.vue");
/* harmony import */ var _Fields_Input_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Fields/Input.vue */ "./resources/js/components/Importer/Fields/Input.vue");
/* harmony import */ var _Fields_None_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Fields/None.vue */ "./resources/js/components/Importer/Fields/None.vue");
/* harmony import */ var _Fields_Number_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Fields/Number.vue */ "./resources/js/components/Importer/Fields/Number.vue");
/* harmony import */ var _Fields_Primary_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Fields/Primary.vue */ "./resources/js/components/Importer/Fields/Primary.vue");
/* harmony import */ var _Fields_Select_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Fields/Select.vue */ "./resources/js/components/Importer/Fields/Select.vue");







/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      fields: [{
        'component': 'primary',
        'name': 'ID',
        'required': true
      }, {
        'component': 'input',
        'name': 'Name',
        'required': true
      }, {
        'component': 'input',
        'name': 'Slug',
        'required': true
      }, {
        'component': 'select',
        'name': 'Status',
        'options': [{
          'label': 'Yes',
          'value': true
        }, {
          'label': 'No',
          'value': false
        }]
      }],
      fieldTypes: {
        'color': ['color-picker'],
        'input': ['textarea'],
        'number': ['number'],
        'select': ['radio', 'select', 'country', 'us-state', 'toggle'],
        'datetime': ['datetime']
      }
    };
  },
  props: {
    group: {
      type: Number,
      required: true
    }
  },
  components: {
    'field-color': _Fields_Color_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'field-datetime': _Fields_DateTime_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'field-input': _Fields_Input_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    'field-none': _Fields_None_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    'field-number': _Fields_Number_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    'field-primary': _Fields_Primary_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    'field-select': _Fields_Select_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  created: function created() {
    var vm = this;
    axios.all([axios.get("/api/taxonomies/".concat(this.group))]).then(axios.spread(function (response) {
      _.forEach(response.data.data.fieldset.sections, function (section) {
        _.forEach(section.fields, function (field) {
          console.log(field.name, field.type.id);
          var properties = {
            'component': _.defaultTo(_.findKey(vm.fieldTypes, function (types) {
              return _.indexOf(types, field.type.id) != -1;
            }), 'none'),
            'name': field.name,
            'required': field.required,
            'help': field.help,
            'settings': _.isPlainObject(field.settings) ? field.settings : {}
          };

          if (field.type.id == 'toggle') {
            properties['settings'].options = [{
              'label': 'Enabled',
              'value': 1
            }, {
              'label': 'Disabled',
              'value': 0
            }];
          } else if (_.size(field.type.data) > 0) {
            properties['settings'].options = _.map(field.type.data, function (label, value) {
              return {
                'label': label,
                'value': value
              };
            });
          }

          vm.fields.push(properties);
        });
      });
    }));
  }
});

/***/ }),

/***/ "./resources/js/components/Importer/Mixins/fields.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Importer/Mixins/fields.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    name: {
      type: String,
      required: true
    },
    help: {
      type: String,
      required: false,
      "default": ''
    },
    required: {
      type: Boolean,
      required: false,
      "default": false
    },
    settings: {
      type: Object,
      equired: false,
      "default": function _default() {
        return {};
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    mappingOptions: 'mapper/getMappingOptions',
    mappings: 'mapper/getFormMappings'
  }), {
    handle: function handle() {
      return _.kebabCase(this.name);
    },
    mapping: function mapping() {
      return this.mappings[this.handle];
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    setFormMapping: 'mapper/setFormMapping'
  })),
  created: function created() {
    if (!_.has(this.mappings, this.handle)) {
      this.setFormMapping({
        name: this.name,
        handle: this.handle,
        column: this.handle,
        required: this.required,
        "default": _.has(this.settings, 'default') ? this.settings["default"] : null
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Importer/TaxonomyMapping.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Importer/TaxonomyMapping.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaxonomyMapping_vue_vue_type_template_id_3503eaea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxonomyMapping.vue?vue&type=template&id=3503eaea& */ "./resources/js/components/Importer/TaxonomyMapping.vue?vue&type=template&id=3503eaea&");
/* harmony import */ var _TaxonomyMapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxonomyMapping.vue?vue&type=script&lang=js& */ "./resources/js/components/Importer/TaxonomyMapping.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TaxonomyMapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TaxonomyMapping_vue_vue_type_template_id_3503eaea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TaxonomyMapping_vue_vue_type_template_id_3503eaea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Importer/TaxonomyMapping.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Importer/TaxonomyMapping.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Importer/TaxonomyMapping.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxonomyMapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxonomyMapping.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/TaxonomyMapping.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxonomyMapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Importer/TaxonomyMapping.vue?vue&type=template&id=3503eaea&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Importer/TaxonomyMapping.vue?vue&type=template&id=3503eaea& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxonomyMapping_vue_vue_type_template_id_3503eaea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./TaxonomyMapping.vue?vue&type=template&id=3503eaea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/TaxonomyMapping.vue?vue&type=template&id=3503eaea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxonomyMapping_vue_vue_type_template_id_3503eaea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TaxonomyMapping_vue_vue_type_template_id_3503eaea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Importer/UserMapping.vue":
/*!**********************************************************!*\
  !*** ./resources/js/components/Importer/UserMapping.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserMapping_vue_vue_type_template_id_305aa65e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserMapping.vue?vue&type=template&id=305aa65e& */ "./resources/js/components/Importer/UserMapping.vue?vue&type=template&id=305aa65e&");
/* harmony import */ var _UserMapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserMapping.vue?vue&type=script&lang=js& */ "./resources/js/components/Importer/UserMapping.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserMapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserMapping_vue_vue_type_template_id_305aa65e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserMapping_vue_vue_type_template_id_305aa65e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Importer/UserMapping.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Importer/UserMapping.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/Importer/UserMapping.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserMapping.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/UserMapping.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Importer/UserMapping.vue?vue&type=template&id=305aa65e&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/components/Importer/UserMapping.vue?vue&type=template&id=305aa65e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMapping_vue_vue_type_template_id_305aa65e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserMapping.vue?vue&type=template&id=305aa65e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Importer/UserMapping.vue?vue&type=template&id=305aa65e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMapping_vue_vue_type_template_id_305aa65e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserMapping_vue_vue_type_template_id_305aa65e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Importer/Mapping.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/Importer/Mapping.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mapping_vue_vue_type_template_id_7994b350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mapping.vue?vue&type=template&id=7994b350& */ "./resources/js/views/Importer/Mapping.vue?vue&type=template&id=7994b350&");
/* harmony import */ var _Mapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mapping.vue?vue&type=script&lang=js& */ "./resources/js/views/Importer/Mapping.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Mapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Mapping_vue_vue_type_template_id_7994b350___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Mapping_vue_vue_type_template_id_7994b350___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Importer/Mapping.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Importer/Mapping.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/Importer/Mapping.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mapping.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/Mapping.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Importer/Mapping.vue?vue&type=template&id=7994b350&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Importer/Mapping.vue?vue&type=template&id=7994b350& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mapping_vue_vue_type_template_id_7994b350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mapping.vue?vue&type=template&id=7994b350& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Importer/Mapping.vue?vue&type=template&id=7994b350&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mapping_vue_vue_type_template_id_7994b350___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Mapping_vue_vue_type_template_id_7994b350___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL0NvbG9yLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL0RhdGVUaW1lLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL0lucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL05vbmUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvTnVtYmVyLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL1ByaW1hcnkudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvU2VsZWN0LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTWF0cml4TWFwcGluZy52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL1RheG9ub215TWFwcGluZy52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL1VzZXJNYXBwaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL01hcHBpbmcudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9Db2xvci52dWU/NDUzMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvRGF0ZVRpbWUudnVlPzQwNDYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL0lucHV0LnZ1ZT9kMGZlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9Ob25lLnZ1ZT8wNjExIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9OdW1iZXIudnVlPzJjMGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL1ByaW1hcnkudnVlP2QzZWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL1NlbGVjdC52dWU/Y2U3ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9NYXRyaXhNYXBwaW5nLnZ1ZT8xMzVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL1RheG9ub215TWFwcGluZy52dWU/YTEyMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9Vc2VyTWFwcGluZy52dWU/ZmQwMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvTWFwcGluZy52dWU/NWU5ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvQ29sb3IudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9Db2xvci52dWU/MjljNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvQ29sb3IudnVlP2E2OGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL0RhdGVUaW1lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvRGF0ZVRpbWUudnVlPzE3MTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL0RhdGVUaW1lLnZ1ZT9jNzUyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9JbnB1dC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL0lucHV0LnZ1ZT84NDBjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9JbnB1dC52dWU/NDVjYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvTm9uZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL05vbmUudnVlPzQ1ZGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL05vbmUudnVlP2FkM2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL051bWJlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL051bWJlci52dWU/NzI3MiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvTnVtYmVyLnZ1ZT81Njg3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9QcmltYXJ5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvUHJpbWFyeS52dWU/MDY5ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvUHJpbWFyeS52dWU/MWI2MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvU2VsZWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvU2VsZWN0LnZ1ZT9mMGVjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9TZWxlY3QudnVlPzU5NjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTWF0cml4TWFwcGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTWF0cml4TWFwcGluZy52dWU/NjVhMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9NYXRyaXhNYXBwaW5nLnZ1ZT9kNzJjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL01peGlucy9keW5hbWljLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL01peGlucy9maWVsZHMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvVGF4b25vbXlNYXBwaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9UYXhvbm9teU1hcHBpbmcudnVlP2FiNjMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvVGF4b25vbXlNYXBwaW5nLnZ1ZT9jZjZkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL1VzZXJNYXBwaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9Vc2VyTWFwcGluZy52dWU/Zjc0NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9Vc2VyTWFwcGluZy52dWU/YTFjMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvTWFwcGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL01hcHBpbmcudnVlP2U1MzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL3ZpZXdzL0ltcG9ydGVyL01hcHBpbmcudnVlPzRiOTUiXSwibmFtZXMiOlsiZGF0YSIsImZpZWxkcyIsImZpZWxkVHlwZXMiLCJwcm9wcyIsImdyb3VwIiwidHlwZSIsIk51bWJlciIsInJlcXVpcmVkIiwiY29tcG9uZW50cyIsIkZpZWxkQ29sb3IiLCJGaWVsZERhdGVUaW1lIiwiRmllbGRJbnB1dCIsIkZpZWxkTm9uZSIsIkZpZWxkTnVtYmVyIiwiRmllbGRQcmltYXJ5IiwiRmllbGRTZWxlY3QiLCJjcmVhdGVkIiwidm0iLCJheGlvcyIsImFsbCIsImdldCIsInRoZW4iLCJzcHJlYWQiLCJyZXNwb25zZSIsIl8iLCJmb3JFYWNoIiwiZmllbGRzZXQiLCJzZWN0aW9ucyIsInNlY3Rpb24iLCJmaWVsZCIsImNvbnNvbGUiLCJsb2ciLCJuYW1lIiwiaWQiLCJwcm9wZXJ0aWVzIiwiZGVmYXVsdFRvIiwiZmluZEtleSIsInR5cGVzIiwiaW5kZXhPZiIsImhlbHAiLCJpc1BsYWluT2JqZWN0Iiwic2V0dGluZ3MiLCJvcHRpb25zIiwic2l6ZSIsIm1hcCIsImxhYmVsIiwidmFsdWUiLCJwdXNoIiwiU3RyaW5nIiwiQm9vbGVhbiIsIk9iamVjdCIsImVxdWlyZWQiLCJjb21wdXRlZCIsIm1hcEdldHRlcnMiLCJtYXBwaW5nT3B0aW9ucyIsIm1hcHBpbmdzIiwiaGFuZGxlIiwia2ViYWJDYXNlIiwibWFwcGluZyIsIm1ldGhvZHMiLCJtYXBBY3Rpb25zIiwic2V0Rm9ybU1hcHBpbmciLCJo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QUEsd0NBQWlNLENBQWdCLHVQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQXNGO0FBQzNCO0FBQ0w7OztBQUd0RDtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw2RUFBTTtBQUNSLEVBQUUsa0ZBQU07QUFDUixFQUFFLDJGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN0Q2Y7QUFBQTtBQUFBLHdDQUE2TCxDQUFnQixtUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FqTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY2h1bmtzLzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJyb3cgZm9ybV9fZ3JvdXAgaXRlbXMtZW5kXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTFcIj5cblx0XHRcdDxsYWJlbCB2LXRleHQ9XCJtYXBwaW5nLm5hbWVcIi8+XG5cdFx0XHQ8c3BhbiB2LWlmPVwicmVxdWlyZWRcIiBjbGFzcz1cInRleHQteHMgdGV4dC13YXJuaW5nLTcwMCBmbG9hdC1yaWdodFwiPnJlcXVpcmVkPC9zcGFuPlxuXHRcdFx0XG5cdFx0XHQ8ZGl2IHYtaWY9XCJoZWxwXCIgcm9sZT1cImFsZXJ0XCIgY2xhc3M9XCJib3JkZXItbC00IHB4LTQgYmctc2Vjb25kYXJ5LTEwMCBib3JkZXItc2Vjb25kYXJ5LTUwMCB0ZXh0LXhzXCI+XG5cdFx0XHRcdDxwIHYtaHRtbD1cImhlbHBcIj48L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZsZXgtMVwiPlxuXHRcdFx0PHAtc2VsZWN0XG4gICAgICAgICAgICAgICAgOm5hbWU9XCJtYXBwaW5nLmhhbmRsZSArICctY29sdW1uJ1wiXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJtYXBwaW5nT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1hcHBpbmcuY29sdW1uXCI+XG4gICAgICAgICAgICA8L3Atc2VsZWN0PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgZmxleC0xXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1zdGFydFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleC1ncm93IG1yLTNcIj5cblx0XHRcdFx0XHQ8bGFiZWwgOmZvcj1cIm1hcHBpbmcuaGFuZGxlICsgJy1waWNrcidcIiBjbGFzcz1cInRleHQteHNcIj5QaWNrZXI8L2xhYmVsPlxuXHRcdFx0XHRcdDxkaXYgOmNsYXNzPVwibWFwcGluZy5oYW5kbGUgKyAnLXBpY2tyJ1wiPjwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXgtZ3JvdyBtci0zXCI+XG5cdFx0XHRcdFx0PGxhYmVsIDpmb3I9XCJtYXBwaW5nLmhhbmRsZSArICctaGV4J1wiIGNsYXNzPVwidGV4dC14c1wiPkhleDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHQ6aWQ9XCJtYXBwaW5nLmhhbmRsZSArICctaGV4J1wiXG5cdFx0XHRcdFx0XHQ6bmFtZT1cIm1hcHBpbmcuaGFuZGxlICsgJy1oZXgnXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybV9fY29udHJvbFwiIFxuXHRcdFx0XHRcdFx0di1tb2RlbD1cImhleFwiLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4LWdyb3dcIj5cblx0XHRcdFx0XHQ8bGFiZWwgOmZvcj1cIm1hcHBpbmcuaGFuZGxlICsgJy1yZ2JhJ1wiIGNsYXNzPVwidGV4dC14c1wiPlJHQkE8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0OmlkPVwibWFwcGluZy5oYW5kbGUgKyAnLXJnYmEnXCJcblx0XHRcdFx0XHRcdDpuYW1lPVwibWFwcGluZy5oYW5kbGUgKyAnLXJnYmEnXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybV9fY29udHJvbFwiIFxuXHRcdFx0XHRcdFx0di1tb2RlbD1cIm1hcHBpbmcuZGVmYXVsdFwiLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgRmllbGRNaXhpbiBmcm9tICcuLi9NaXhpbnMvZmllbGRzJ1xuXHRpbXBvcnQgUGlja3IgZnJvbSAnQHNpbW9ud2VwL3BpY2tyJ1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnbWFwcGVyLWZpZWxkLWNvbG9yJyxcblx0XHRtaXhpbnM6IFsgRmllbGRNaXhpbiBdLFxuXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHBpY2tyOiBudWxsLFxuXHRcdFx0XHRoZXg6ICcnXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHdhdGNoOiB7XG5cdFx0XHQnbWFwcGluZy5kZWZhdWx0Jyhjb2xvclN0cmluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlQ29sb3IoY29sb3JTdHJpbmcpXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBoZXgoY29sb3JTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNvbG9yKGNvbG9yU3RyaW5nKVxuICAgICAgICAgICAgfVxuXHRcdH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHRwaWNrckNoYW5nZWQoY29sb3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhleCA9IGNvbG9yID8gY29sb3IudG9IRVhBKCkudG9TdHJpbmcoKSA6ICcnXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBwaW5nLmRlZmF1bHQgPSBjb2xvciA/IGNvbG9yLnRvUkdCQSgpLnRvU3RyaW5nKDApIDogJydcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIGNoYW5nZUNvbG9yKGNvbG9yU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucGlja3Iuc2V0Q29sb3IoY29sb3JTdHJpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlja3IuYXBwbHlDb2xvcigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXHRcdH0sXG5cblx0XHRtb3VudGVkKCkge1xuXHRcdFx0dGhpcy5waWNrciA9IFBpY2tyLmNyZWF0ZSh7XG5cdFx0XHRcdGVsOiAnLicgKyB0aGlzLm1hcHBpbmcuaGFuZGxlICsgJy1waWNrcicsXG5cdFx0XHRcdHRoZW1lOiAnbW9ub2xpdGgnLFxuXHRcdFx0XHRkZWZhdWx0OiB0aGlzLm1hcHBpbmcuZGVmYXVsdCxcblx0XHRcdFx0Y29tcGFyaXNvbjogdHJ1ZSxcblx0XHRcdFx0Y29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiB0aGlzLnNldHRpbmdzLnRyYW5zcGFyZW5jeSxcbiAgICAgICAgICAgICAgICAgICAgaHVlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLm9uKCdzYXZlJywgKGNvbG9yLCBpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGlja3JDaGFuZ2VkKGNvbG9yKVxuICAgICAgICAgICAgfSkub24oJ2NoYW5nZScsIChjb2xvciwgaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tyQ2hhbmdlZChjb2xvcilcbiAgICAgICAgICAgIH0pLm9uKCdjbGVhcicsIChpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucGlja3JDaGFuZ2VkKG51bGwpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyBpbml0Li5cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQ29sb3IodGhpcy5tYXBwaW5nLmRlZmF1bHQpXG4gICAgICAgICAgICB0aGlzLnBpY2tyQ2hhbmdlZCh0aGlzLnBpY2tyLmdldENvbG9yKCkpXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJyb3cgZm9ybV9fZ3JvdXAgaXRlbXMtZW5kXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTFcIj5cblx0XHRcdDxsYWJlbCB2LXRleHQ9XCJtYXBwaW5nLm5hbWVcIi8+XG5cdFx0XHQ8c3BhbiB2LWlmPVwicmVxdWlyZWRcIiBjbGFzcz1cInRleHQteHMgdGV4dC13YXJuaW5nLTcwMCBmbG9hdC1yaWdodFwiPnJlcXVpcmVkPC9zcGFuPlxuXHRcdFx0XG5cdFx0XHQ8ZGl2IHYtaWY9XCJoZWxwXCIgcm9sZT1cImFsZXJ0XCIgY2xhc3M9XCJib3JkZXItbC00IHB4LTQgYmctc2Vjb25kYXJ5LTEwMCBib3JkZXItc2Vjb25kYXJ5LTUwMCB0ZXh0LXhzXCI+XG5cdFx0XHRcdDxwIHYtaHRtbD1cImhlbHBcIj48L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZsZXgtMVwiPlxuXHRcdFx0PHAtc2VsZWN0XG4gICAgICAgICAgICAgICAgOm5hbWU9XCJtYXBwaW5nLmhhbmRsZSArICctY29sdW1uJ1wiXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJfX21hcHBpbmdPcHRpb25zXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwibWFwcGluZy5jb2x1bW5cIj5cbiAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTFcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4LWdyb3cgbXItM1wiPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0OmlkPVwiJ2ZsYXRwaWNrcl8nICsgbWFwcGluZy5oYW5kbGVcIlxuXHRcdFx0XHRcdFx0Om5hbWU9XCJtYXBwaW5nLmhhbmRsZSArICctcGlja3InXCJcblx0XHRcdFx0XHRcdDpwbGFjZWhvbGRlcj1cInNldHRpbmdzLnBsYWNlaG9sZGVyXCJcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJtYXBwaW5nLmRlZmF1bHRcIlxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJkYXRldGltZV9faW5wdXQgZm9ybV9fY29udHJvbCBtci0yXCIgLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4LWdyb3cgbXItM1wiPlxuXHRcdFx0XHRcdDxhIGhyZWY9XCIjXCIgY2xhc3M9XCJkYXRldGltZV9fYnV0dG9uIGJ1dHRvbiBidXR0b24tLXByaW1hcnkgcHgtNFwiIEBjbGljay5wcmV2ZW50PVwiZmxhdHBpY2tyLm9wZW4oKVwiPlxuXHRcdFx0XHRcdFx0PGZhLWljb24gaWNvbj1cImNhbGVuZGFyLWFsdFwiPjwvZmEtaWNvbj5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IGZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InXG5cdGltcG9ydCBGaWVsZE1peGluIGZyb20gJy4uL01peGlucy9maWVsZHMnXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICdtYXBwZXItZmllbGQtZGF0ZXRpbWUnLFxuXHRcdG1peGluczogWyBGaWVsZE1peGluIF0sXG5cblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZmxhdHBpY2tyOiBudWxsLFxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRjb21wdXRlZDoge1xuXHRcdFx0X19tYXBwaW5nT3B0aW9uczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBfLnJlamVjdCh0aGlzLm1hcHBpbmdPcHRpb25zLCBbICdsYWJlbCcsICdVc2UgZGVmYXVsdCcgXSlcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0ZW1pdEV2ZW50KHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIsIGluc3RhbmNlKSB7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2lucHV0JywgZGF0ZVN0cilcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0bW91bnRlZCgpIHtcblx0XHRcdHRoaXMuZmxhdHBpY2tyID0gZmxhdHBpY2tyKGAjZmxhdHBpY2tyXyR7dGhpcy5tYXBwaW5nLmhhbmRsZX1gLCB7XG5cdFx0XHRcdGFsdElucHV0OiB0cnVlLFxuXHRcdFx0XHRlbmFibGVUaW1lOiB0aGlzLnNldHRpbmdzLnRpbWUsXG5cdFx0XHRcdGFsdEZvcm1hdDogdGhpcy5zZXR0aW5ncy5mb3JtYXQgfHwgJ1ktbS1kJyxcblx0XHRcdFx0bWludXRlSW5jcmVtZW50OiAxLFxuXHRcdFx0XHRhbGxvd0lucHV0OiBmYWxzZSxcblx0XHRcdFx0Y2xpY2tPcGVuczogZmFsc2UsXG5cdFx0XHRcdGRlZmF1bHREYXRlOiB0aGlzLm1hcHBpbmcuZGVmYXVsdCxcblx0XHRcdFx0b25DaGFuZ2U6IHRoaXMuZW1pdEV2ZW50LFxuXHRcdFx0XHRvblZhbHVlVXBkYXRlOiB0aGlzLmlucHV0Q2hhbmdlZFxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInJvdyBmb3JtX19ncm91cCBpdGVtcy1lbmRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZsZXgtMVwiPlxuXHRcdFx0PGxhYmVsIHYtdGV4dD1cIm1hcHBpbmcubmFtZVwiLz5cblx0XHRcdDxzcGFuIHYtaWY9XCJyZXF1aXJlZFwiIGNsYXNzPVwidGV4dC14cyB0ZXh0LXdhcm5pbmctNzAwIGZsb2F0LXJpZ2h0XCI+cmVxdWlyZWQ8L3NwYW4+XG5cdFx0XHRcblx0XHRcdDxkaXYgdi1pZj1cImhlbHBcIiByb2xlPVwiYWxlcnRcIiBjbGFzcz1cImJvcmRlci1sLTQgcHgtNCBiZy1zZWNvbmRhcnktMTAwIGJvcmRlci1zZWNvbmRhcnktNTAwIHRleHQteHNcIj5cblx0XHRcdFx0PHAgdi1odG1sPVwiaGVscFwiPjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgZmxleC0xXCI+XG5cdFx0XHQ8cC1zZWxlY3RcbiAgICAgICAgICAgICAgICA6bmFtZT1cIm1hcHBpbmcuaGFuZGxlICsgJy1jb2x1bW4nXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIm1hcHBpbmdPcHRpb25zXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwibWFwcGluZy5jb2x1bW5cIj5cbiAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTFcIj5cblx0XHRcdDxwLWlucHV0XG5cdFx0XHRcdDpuYW1lPVwibWFwcGluZy5oYW5kbGUgKyAnLWRlZmF1bHQnXCJcblx0XHRcdFx0di1tb2RlbD1cIm1hcHBpbmcuZGVmYXVsdFwiPlxuXHRcdFx0PC9wLWlucHV0PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBGaWVsZE1peGluIGZyb20gJy4uL01peGlucy9maWVsZHMnXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICdtYXBwZXItZmllbGQtaW5wdXQnLFxuXHRcdG1peGluczogWyBGaWVsZE1peGluIF1cblx0fVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicm93IGZvcm1fX2dyb3VwIGl0ZW1zLWVuZFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgZmxleC0xXCI+XG5cdFx0XHQ8bGFiZWwgdi10ZXh0PVwibWFwcGluZy5uYW1lXCIvPlxuXHRcdFx0PHNwYW4gdi1pZj1cInJlcXVpcmVkXCIgY2xhc3M9XCJ0ZXh0LXhzIHRleHQtd2FybmluZy03MDAgZmxvYXQtcmlnaHRcIj5yZXF1aXJlZDwvc3Bhbj5cblx0XHRcdFxuXHRcdFx0PGRpdiB2LWlmPVwiaGVscFwiIHJvbGU9XCJhbGVydFwiIGNsYXNzPVwiYm9yZGVyLWwtNCBweC00IGJnLXNlY29uZGFyeS0xMDAgYm9yZGVyLXNlY29uZGFyeS01MDAgdGV4dC14c1wiPlxuXHRcdFx0XHQ8cCB2LWh0bWw9XCJoZWxwXCI+PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTFcIj5cblx0XHRcdDxwLXNlbGVjdFxuICAgICAgICAgICAgICAgIDpuYW1lPVwibWFwcGluZy5oYW5kbGUgKyAnLWNvbHVtbidcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiX19tYXBwaW5nT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1hcHBpbmcuY29sdW1uXCI+XG4gICAgICAgICAgICA8L3Atc2VsZWN0PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgZmxleC0xXCI+XG5cdFx0XHRcblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgRmllbGRNaXhpbiBmcm9tICcuLi9NaXhpbnMvZmllbGRzJ1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnbWFwcGVyLWZpZWxkLW5vbmUnLFxuXHRcdG1peGluczogWyBGaWVsZE1peGluIF0sXG5cblx0XHRjb21wdXRlZDoge1xuXHRcdFx0X19tYXBwaW5nT3B0aW9uczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBfLnJlamVjdCh0aGlzLm1hcHBpbmdPcHRpb25zLCBbICdsYWJlbCcsICdVc2UgZGVmYXVsdCcgXSlcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInJvdyBmb3JtX19ncm91cCBpdGVtcy1lbmRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZsZXgtMVwiPlxuXHRcdFx0PGxhYmVsIHYtdGV4dD1cIm1hcHBpbmcubmFtZVwiLz5cblx0XHRcdDxzcGFuIHYtaWY9XCJyZXF1aXJlZFwiIGNsYXNzPVwidGV4dC14cyB0ZXh0LXdhcm5pbmctNzAwIGZsb2F0LXJpZ2h0XCI+cmVxdWlyZWQ8L3NwYW4+XG5cdFx0XHRcblx0XHRcdDxkaXYgdi1pZj1cImhlbHBcIiByb2xlPVwiYWxlcnRcIiBjbGFzcz1cImJvcmRlci1sLTQgcHgtNCBiZy1zZWNvbmRhcnktMTAwIGJvcmRlci1zZWNvbmRhcnktNTAwIHRleHQteHNcIj5cblx0XHRcdFx0PHAgdi1odG1sPVwiaGVscFwiPjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgZmxleC0xXCI+XG5cdFx0XHQ8cC1zZWxlY3RcbiAgICAgICAgICAgICAgICA6bmFtZT1cIm1hcHBpbmcuaGFuZGxlICsgJy1jb2x1bW4nXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIm1hcHBpbmdPcHRpb25zXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwibWFwcGluZy5jb2x1bW5cIj5cbiAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTFcIj5cblx0XHRcdDxwLW51bWJlclxuXHRcdFx0XHQ6bmFtZT1cIm1hcHBpbmcuaGFuZGxlICsgJy1kZWZhdWx0J1wiXG5cdFx0XHRcdDp2YWx1ZT1cIm1hcHBpbmcuZGVmYXVsdFwiXG5cdFx0XHRcdEBpbnB1dD1cIiRlbWl0KCdpbnB1dCcsICRldmVudClcIlxuXHRcdFx0XHQ6c3RlcHM9XCJzZXR0aW5ncy5zdGVwc1wiXG5cdFx0XHRcdDpkZWNpbWFscz1cInNldHRpbmdzLmRlY2ltYWxzXCJcblx0XHRcdFx0Om1pbj1cIk51bWJlcihzZXR0aW5ncy5taW4pXCJcblx0XHRcdFx0Om1heD1cIk51bWJlcihzZXR0aW5ncy5tYXgpXCI+XG5cblx0XHRcdFx0PHRlbXBsYXRlIHNsb3Q9XCJkZWNyZWFzZVwiPlxuXHRcdFx0XHRcdDxmYS1pY29uIGljb249XCJtaW51c1wiPjwvZmEtaWNvbj5cblx0XHRcdFx0PC90ZW1wbGF0ZT5cblx0XHRcdFx0PHRlbXBsYXRlIHNsb3Q9XCJpbmNyZWFzZVwiPlxuXHRcdFx0XHRcdDxmYS1pY29uIGljb249XCJwbHVzXCI+PC9mYS1pY29uPlxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxuXHRcdFx0PC9wLW51bWJlcj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgRmllbGRNaXhpbiBmcm9tICcuLi9NaXhpbnMvZmllbGRzJ1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnbWFwcGVyLWZpZWxkLW51bWJlcicsXG5cdFx0bWl4aW5zOiBbIEZpZWxkTWl4aW4gXVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJyb3cgZm9ybV9fZ3JvdXAgaXRlbXMtZW5kXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTFcIj5cblx0XHRcdDxsYWJlbCB2LXRleHQ9XCJtYXBwaW5nLm5hbWVcIi8+XG5cdFx0XHQ8c3BhbiB2LWlmPVwicmVxdWlyZWRcIiBjbGFzcz1cInRleHQteHMgdGV4dC13YXJuaW5nLTcwMCBmbG9hdC1yaWdodFwiPnJlcXVpcmVkPC9zcGFuPlxuXHRcdFx0XG5cdFx0XHQ8ZGl2IHYtaWY9XCJoZWxwXCIgcm9sZT1cImFsZXJ0XCIgY2xhc3M9XCJib3JkZXItbC00IHB4LTQgYmctc2Vjb25kYXJ5LTEwMCBib3JkZXItc2Vjb25kYXJ5LTUwMCB0ZXh0LXhzXCI+XG5cdFx0XHRcdDxwIHYtaHRtbD1cImhlbHBcIj48L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZsZXgtMVwiPlxuXHRcdFx0PHAtc2VsZWN0XG4gICAgICAgICAgICAgICAgOm5hbWU9XCJtYXBwaW5nLmhhbmRsZSArICctY29sdW1uJ1wiXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJfX21hcHBpbmdPcHRpb25zXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwibWFwcGluZy5jb2x1bW5cIj5cbiAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTFcIj5cblx0XHRcdDxkaXYgcm9sZT1cImFsZXJ0XCIgY2xhc3M9XCJib3JkZXItbC00IHB4LTQgYmctd2FybmluZy0xMDAgYm9yZGVyLXdhcm5pbmctNTAwIHRleHQteHNcIj5cblx0XHRcdFx0PHA+VGhpcyBpcyB0aGUgcHJpbWFyeSBJRCB1c2VkIGZvciBtb2RpZnlpbmcgZXhpc3RpbmcgY29udGVudC4gTGVhdmUgYmxhbmsgZm9yIG5ldyByZWNvcmRzLjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBGaWVsZE1peGluIGZyb20gJy4uL01peGlucy9maWVsZHMnXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICdtYXBwZXItZmllbGQtcHJpbWFyeScsXG5cdFx0bWl4aW5zOiBbIEZpZWxkTWl4aW4gXSxcblxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRfX21hcHBpbmdPcHRpb25zOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIF8uc2xpY2UodGhpcy5tYXBwaW5nT3B0aW9ucywgMilcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInJvdyBmb3JtX19ncm91cCBpdGVtcy1lbmRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZsZXgtMVwiPlxuXHRcdFx0PGxhYmVsIHYtdGV4dD1cIm1hcHBpbmcubmFtZVwiLz5cblx0XHRcdDxzcGFuIHYtaWY9XCJyZXF1aXJlZFwiIGNsYXNzPVwidGV4dC14cyB0ZXh0LXdhcm5pbmctNzAwIGZsb2F0LXJpZ2h0XCI+cmVxdWlyZWQ8L3NwYW4+XG5cdFx0XHRcblx0XHRcdDxkaXYgdi1pZj1cImhlbHBcIiByb2xlPVwiYWxlcnRcIiBjbGFzcz1cImJvcmRlci1sLTQgcHgtNCBiZy1zZWNvbmRhcnktMTAwIGJvcmRlci1zZWNvbmRhcnktNTAwIHRleHQteHNcIj5cblx0XHRcdFx0PHAgdi1odG1sPVwiaGVscFwiPjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgZmxleC0xXCI+XG5cdFx0XHQ8cC1zZWxlY3RcbiAgICAgICAgICAgICAgICA6bmFtZT1cIm1hcHBpbmcuaGFuZGxlICsgJy1jb2x1bW4nXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIm1hcHBpbmdPcHRpb25zXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwibWFwcGluZy5jb2x1bW5cIj5cbiAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTFcIj5cblx0XHRcdDxwLXNlbGVjdFxuXHRcdFx0XHQ6bmFtZT1cIm1hcHBpbmcuaGFuZGxlICsgJy1kZWZhdWx0J1wiXG5cdFx0XHRcdDpvcHRpb25zPVwic2V0dGluZ3Mub3B0aW9uc1wiXG5cdFx0XHRcdHYtbW9kZWw9XCJtYXBwaW5nLmRlZmF1bHRcIj5cblx0XHRcdDwvcC1zZWxlY3Q+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IEZpZWxkTWl4aW4gZnJvbSAnLi4vTWl4aW5zL2ZpZWxkcydcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ21hcHBlci1maWVsZC1zZWxlY3QnLFxuXHRcdG1peGluczogWyBGaWVsZE1peGluIF1cblx0fVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuXHRcdFx0PGFwcC10aXRsZSBpY29uPVwic2hpcFwiPk1hcHBpbmcgZm9yIE1hdHJpeCBJbXBvcnQ8L2FwcC10aXRsZT5cblx0XHQ8L3BvcnRhbD5cblxuXHRcdDxjb21wb25lbnQgdi1mb3I9XCJmaWVsZCBpbiBmaWVsZHNcIlxuXHRcdFx0OmtleT1cImZpZWxkLm5hbWVcIlxuXHRcdFx0OmlzPVwiJ2ZpZWxkLScgKyBmaWVsZC5jb21wb25lbnRcIlxuXHRcdFx0Om5hbWU9XCJmaWVsZC5uYW1lXCJcblx0XHRcdDpyZXF1aXJlZD1cImZpZWxkLnJlcXVpcmVkXCJcblx0XHRcdDpoZWxwPVwiZmllbGQuaGVscFwiXG5cdFx0XHQ6c2V0dGluZ3M9XCJmaWVsZC5zZXR0aW5nc1wiXG5cdFx0PjwvY29tcG9uZW50PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBEeW5hbWljTWl4aW4gZnJvbSAnLi9NaXhpbnMvZHluYW1pYydcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ21hdHJpeC1tYXBwaW5nJyxcblx0XHRtaXhpbnM6IFsgRHluYW1pY01peGluIF0sXG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8cG9ydGFsIHRvPVwidGl0bGVcIj5cblx0XHRcdDxhcHAtdGl0bGUgaWNvbj1cInNoaXBcIj5NYXBwaW5nIGZvciBUYXhvbm9teSBJbXBvcnQ8L2FwcC10aXRsZT5cblx0XHQ8L3BvcnRhbD5cblxuXHRcdDxjb21wb25lbnQgdi1mb3I9XCJmaWVsZCBpbiBmaWVsZHNcIlxuXHRcdFx0OmtleT1cImZpZWxkLm5hbWVcIlxuXHRcdFx0OmlzPVwiJ2ZpZWxkLScgKyBmaWVsZC5jb21wb25lbnRcIlxuXHRcdFx0Om5hbWU9XCJmaWVsZC5uYW1lXCJcblx0XHRcdDpyZXF1aXJlZD1cImZpZWxkLnJlcXVpcmVkXCJcblx0XHRcdDpoZWxwPVwiZmllbGQuaGVscFwiXG5cdFx0XHQ6c2V0dGluZ3M9XCJmaWVsZC5zZXR0aW5nc1wiXG5cdFx0PjwvY29tcG9uZW50PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBEeW5hbWljTWl4aW4gZnJvbSAnLi9NaXhpbnMvZHluYW1pYydcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ3RheG9ub215LW1hcHBpbmcnLFxuXHRcdG1peGluczogWyBEeW5hbWljTWl4aW4gXSxcblx0fVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuXHRcdFx0PGFwcC10aXRsZSBpY29uPVwic2hpcFwiPk1hcHBpbmcgZm9yIFVzZXJzIEltcG9ydDwvYXBwLXRpdGxlPlxuXHRcdDwvcG9ydGFsPlxuXG5cdFx0PGNvbXBvbmVudCB2LWZvcj1cImZpZWxkIGluIGZpZWxkc1wiXG5cdFx0XHQ6a2V5PVwiZmllbGQubmFtZVwiXG5cdFx0XHQ6aXM9XCInZmllbGQtJyArIGZpZWxkLmNvbXBvbmVudFwiXG5cdFx0XHQ6bmFtZT1cImZpZWxkLm5hbWVcIlxuXHRcdFx0OnJlcXVpcmVkPVwiZmllbGQucmVxdWlyZWRcIlxuXHRcdFx0OmhlbHA9XCJmaWVsZC5oZWxwXCJcblx0XHRcdDpkZWZhdWx0T3B0aW9ucz1cImZpZWxkLm9wdGlvbnNcIlxuXHRcdD48L2NvbXBvbmVudD5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgRmllbGRJbnB1dCBmcm9tICcuL0ZpZWxkcy9JbnB1dC52dWUnXG5cdGltcG9ydCBGaWVsZFByaW1hcnkgZnJvbSAnLi9GaWVsZHMvUHJpbWFyeS52dWUnXG5cdGltcG9ydCBGaWVsZFNlbGVjdCBmcm9tICcuL0ZpZWxkcy9TZWxlY3QudnVlJ1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAndXNlcnMtbWFwcGluZycsXG5cblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0cm9sZXM6IFtdXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRmaWVsZHM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gW1xuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCdjb21wb25lbnQnOiAncHJpbWFyeScsXG5cdFx0XHRcdFx0XHQnbmFtZSc6ICAgICAgJ0lEJyxcblx0XHRcdFx0XHRcdCdyZXF1aXJlZCc6ICB0cnVlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQnY29tcG9uZW50JzogJ2lucHV0Jyxcblx0XHRcdFx0XHRcdCduYW1lJzogICAgICAnTmFtZScsXG5cdFx0XHRcdFx0XHQncmVxdWlyZWQnOiAgdHJ1ZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0J2NvbXBvbmVudCc6ICdpbnB1dCcsXG5cdFx0XHRcdFx0XHQnbmFtZSc6ICAgICAgJ0VtYWlsJyxcblx0XHRcdFx0XHRcdCdyZXF1aXJlZCc6ICB0cnVlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQnY29tcG9uZW50JzogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0XHQnbmFtZSc6ICAgICAgJ1JvbGUnLFxuXHRcdFx0XHRcdFx0J2hlbHAnOiAgICAgICdSb2xlcyBwcm92aWRlIHBlcm1pc3Npb25zIGZvciBsb2dnZWQgaW4gdXNlcnMuJyxcblx0XHRcdFx0XHRcdCdyZXF1aXJlZCc6ICB0cnVlLFxuXHRcdFx0XHRcdFx0J29wdGlvbnMnOiAgIHRoaXMucm9sZXNcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCdjb21wb25lbnQnOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHRcdCduYW1lJzogICAgICAnU3RhdHVzJyxcblx0XHRcdFx0XHRcdCdvcHRpb25zJzogICBbeydsYWJlbCc6J1llcycsJ3ZhbHVlJzp0cnVlfSx7J2xhYmVsJzonTm8nLCd2YWx1ZSc6ZmFsc2V9XVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHQnZmllbGQtaW5wdXQnOiBGaWVsZElucHV0LFxuXHRcdFx0J2ZpZWxkLXByaW1hcnknOiBGaWVsZFByaW1hcnksXG5cdFx0XHQnZmllbGQtc2VsZWN0JzogRmllbGRTZWxlY3QsXG5cdFx0fSxcblxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHRheGlvcy5hbGwoW1xuXHRcdFx0XHRheGlvcy5nZXQoJy9hcGkvcm9sZXMnKVxuXHRcdFx0XSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdHRoaXMucm9sZXMgPSBfLm1hcChyZXNwb25zZS5kYXRhLmRhdGEsIChyb2xlKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdCdsYWJlbCc6IHJvbGUubmFtZSxcblx0XHRcdFx0XHRcdCd2YWx1ZSc6IHJvbGUuaGFuZGxlXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fS5iaW5kKHRoaXMpKSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8cG9ydGFsIHRvPVwiYWN0aW9uc1wiPlxuXHRcdFx0PHJvdXRlci1saW5rIDp0bz1cInsgbmFtZTogJ2ltcG9ydGVyJ31cIiBjbGFzcz1cImJ1dHRvbiBtci0zXCI+R28gQmFjazwvcm91dGVyLWxpbms+XG5cdFx0XHQ8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBAY2xpY2sucHJldmVudD1cInN1Ym1pdFwiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiPlNhdmU8L2J1dHRvbj5cblx0XHQ8L3BvcnRhbD5cblxuXHRcdDxkaXYgY2xhc3M9XCJyb3dcIj5cblx0XHRcdDxkaXYgY2xhc3M9XCJjb250ZW50LWNvbnRhaW5lclwiPlxuXHRcdFx0XHQ8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXRcIj5cblx0XHRcdFx0XHQ8cC1jYXJkPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInJvdyBib3JkZXItYiBtYi0zXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgZmxleC0xIGZvbnQtYm9sZFwiPlxuXHRcdFx0XHRcdFx0XHRcdEZpZWxkXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZsZXgtMSBmb250LWJvbGRcIj5cblx0XHRcdFx0XHRcdFx0XHRDb2x1bW5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wgZmxleC0xIGZvbnQtYm9sZFwiPlxuXHRcdFx0XHRcdFx0XHRcdERlZmF1bHQgVmFsdWVcblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0PGNvbXBvbmVudFxuXHRcdFx0XHRcdFx0XHR2LWlmPVwibG9hZGVkXCJcblx0XHRcdFx0XHRcdFx0OmlzPVwibW9kICsgJy1tYXBwaW5nJ1wiXG5cdFx0XHRcdFx0XHRcdDpncm91cD1cImdyb3VwXCI+XG5cdFx0XHRcdFx0XHQ8L2NvbXBvbmVudD5cblx0XHRcdFx0XHQ8L3AtY2FyZD5cdFxuXHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcblx0aW1wb3J0IFVzZXJNYXBwaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW1wb3J0ZXIvVXNlck1hcHBpbmcudnVlJ1xuXHRpbXBvcnQgTWF0cml4TWFwcGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ltcG9ydGVyL01hdHJpeE1hcHBpbmcudnVlJ1xuXHRpbXBvcnQgVGF4b25vbXlNYXBwaW5nIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvSW1wb3J0ZXIvVGF4b25vbXlNYXBwaW5nLnZ1ZSdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGlkOiBudWxsLFxuXHRcdFx0XHRtb2Q6IG51bGwsXG5cdFx0XHRcdGdyb3VwOiAwLFxuXHRcdFx0XHRsb2FkZWQ6IGZhbHNlXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdCd1c2Vycy1tYXBwaW5nJzogVXNlck1hcHBpbmcsXG5cdFx0XHQndGF4b25vbWllcy1tYXBwaW5nJzogVGF4b25vbXlNYXBwaW5nLFxuXHRcdFx0J21hdHJpY2VzLW1hcHBpbmcnOiBNYXRyaXhNYXBwaW5nLFxuXHRcdH0sXG5cblx0XHRjb21wdXRlZDoge1xuXHRcdFx0Li4ubWFwR2V0dGVycyh7XG5cdFx0XHRcdGZvcm1NYXBwaW5nczogJ21hcHBlci9nZXRGb3JtTWFwcGluZ3MnXG5cdFx0XHR9KVxuXHRcdH0sXG5cblx0XHRtZXRob2RzOiB7XG5cdFx0XHQuLi5tYXBBY3Rpb25zKHtcblx0XHRcdFx0c2V0TWFwcGluZ09wdGlvbnM6ICdtYXBwZXIvc2V0TWFwcGluZ09wdGlvbnMnLFxuXHRcdFx0XHRzZXRGb3JtTWFwcGluZ3M6ICdtYXBwZXIvc2V0Rm9ybU1hcHBpbmdzJ1xuXHRcdFx0fSksXG5cblx0XHRcdHN1Ym1pdCgpIHtcblx0XHRcdFx0YXhpb3MucGF0Y2goYC9hcGkvaW1wb3J0cy9tYXBwaW5nLyR7dGhpcy5pZH1gLCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcHBpbmdzOiB0aGlzLmZvcm1NYXBwaW5ncyxcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdHRvYXN0KCdJbXBvcnQgTWFwcGluZyBzdWNjZXNzZnVsbHkgc2F2ZWQnLCAnc3VjY2VzcycpXG5cdFx0XHRcdH0pLmNhdGNoKChyZXNwb25zZSkgPT4ge1xuXHRcdFx0XHRcdHRvYXN0KHJlc3BvbnNlLm1lc3NhZ2UsICdmYWlsZWQnKVxuXHRcdFx0XHR9KVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRiZWZvcmVSb3V0ZUVudGVyKHRvLCBmcm9tLCBuZXh0KSB7XG5cdFx0XHRheGlvcy5hbGwoW1xuXHRcdFx0XHRheGlvcy5nZXQoYC9hcGkvaW1wb3J0cy9tYXBwaW5nLyR7dG8ucGFyYW1zLmltcG9ydGVyfWApXG5cdFx0XHRdKS50aGVuKGF4aW9zLnNwcmVhZChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0bmV4dChmdW5jdGlvbiAodm0pIHtcblx0XHRcdFx0XHR2bS5pZCAgICA9IHJlc3BvbnNlLmRhdGEuZGF0YS5pZFxuXHRcdFx0XHRcdHZtLm1vZCAgID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1vZHVsZVxuXHRcdFx0XHRcdHZtLmdyb3VwID0gcmVzcG9uc2UuZGF0YS5kYXRhLmdyb3VwXG5cblx0XHRcdFx0XHRsZXQgbWFwcGluZyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tYXBwaW5ncyB8fCB7fVxuXHRcdFx0XHRcdGxldCBjb2x1bW5zID0gcmVzcG9uc2UuZGF0YS5kYXRhLnByZXZpZXdbMF1cblx0XHRcdFx0XHRsZXQgcHJldmlldyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5wcmV2aWV3WzFdXG5cdFx0XHRcdFx0bGV0IG9wdE9iaiAgPSBfLnppcE9iamVjdChjb2x1bW5zLCBwcmV2aWV3KVxuXHRcdFx0XHRcdGxldCBvcHRpb25zID0gXy5tYXAob3B0T2JqLCAobGFiZWwsIHZhbHVlKSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHQnbGFiZWwnOiBgWyR7dmFsdWV9XSBlZzogJHtsYWJlbH1gLFxuXHRcdFx0XHRcdFx0XHQndmFsdWUnOiB2YWx1ZVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pXG5cblx0XHRcdFx0XHRvcHRpb25zLnVuc2hpZnQoe1xuXHRcdFx0XHRcdFx0J2xhYmVsJzogJ1VzZSBkZWZhdWx0Jyxcblx0XHRcdFx0XHRcdCd2YWx1ZSc6IG51bGxcblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0b3B0aW9ucy51bnNoaWZ0KHtcblx0XHRcdFx0XHRcdCdsYWJlbCc6ICdEb25cXCd0IGltcG9ydCcsXG5cdFx0XHRcdFx0XHQndmFsdWUnOiBmYWxzZVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0dm0uc2V0TWFwcGluZ09wdGlvbnMob3B0aW9ucylcblx0XHRcdFx0XHR2bS5zZXRGb3JtTWFwcGluZ3MobWFwcGluZylcblx0XHRcdFx0XHR2bS5sb2FkZWQgPSB0cnVlXG5cdFx0XHRcdH0pXG5cdFx0XHR9KSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgZm9ybV9fZ3JvdXAgaXRlbXMtZW5kXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMVwiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5tYXBwaW5nLm5hbWUpIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnJlcXVpcmVkXG4gICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cyB0ZXh0LXdhcm5pbmctNzAwIGZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwicmVxdWlyZWRcIilcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5oZWxwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImJvcmRlci1sLTQgcHgtNCBiZy1zZWNvbmRhcnktMTAwIGJvcmRlci1zZWNvbmRhcnktNTAwIHRleHQteHNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJhbGVydFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJwXCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmhlbHApIH0gfSldXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBmbGV4LTFcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogX3ZtLm1hcHBpbmcuaGFuZGxlICsgXCItY29sdW1uXCIsXG4gICAgICAgICAgICBvcHRpb25zOiBfdm0ubWFwcGluZ09wdGlvbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1hcHBpbmcuY29sdW1uLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubWFwcGluZywgXCJjb2x1bW5cIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWFwcGluZy5jb2x1bW5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1zdGFydFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4LWdyb3cgbXItM1wiIH0sIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGFiZWxcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dC14c1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyBmb3I6IF92bS5tYXBwaW5nLmhhbmRsZSArIFwiLXBpY2tyXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJQaWNrZXJcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgY2xhc3M6IF92bS5tYXBwaW5nLmhhbmRsZSArIFwiLXBpY2tyXCIgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleC1ncm93IG1yLTNcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBfdm0ubWFwcGluZy5oYW5kbGUgKyBcIi1oZXhcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIkhleFwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5oZXgsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJoZXhcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fY29udHJvbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IF92bS5tYXBwaW5nLmhhbmRsZSArIFwiLWhleFwiLFxuICAgICAgICAgICAgICBuYW1lOiBfdm0ubWFwcGluZy5oYW5kbGUgKyBcIi1oZXhcIixcbiAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmhleCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS5oZXggPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4LWdyb3dcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBfdm0ubWFwcGluZy5oYW5kbGUgKyBcIi1yZ2JhXCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJSR0JBXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1hcHBpbmcuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1hcHBpbmcuZGVmYXVsdFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmb3JtX19jb250cm9sXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogX3ZtLm1hcHBpbmcuaGFuZGxlICsgXCItcmdiYVwiLFxuICAgICAgICAgICAgICBuYW1lOiBfdm0ubWFwcGluZy5oYW5kbGUgKyBcIi1yZ2JhXCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5tYXBwaW5nLmRlZmF1bHQgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubWFwcGluZywgXCJkZWZhdWx0XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgZm9ybV9fZ3JvdXAgaXRlbXMtZW5kXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMVwiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5tYXBwaW5nLm5hbWUpIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnJlcXVpcmVkXG4gICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cyB0ZXh0LXdhcm5pbmctNzAwIGZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwicmVxdWlyZWRcIilcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5oZWxwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImJvcmRlci1sLTQgcHgtNCBiZy1zZWNvbmRhcnktMTAwIGJvcmRlci1zZWNvbmRhcnktNTAwIHRleHQteHNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJhbGVydFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJwXCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmhlbHApIH0gfSldXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBmbGV4LTFcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogX3ZtLm1hcHBpbmcuaGFuZGxlICsgXCItY29sdW1uXCIsXG4gICAgICAgICAgICBvcHRpb25zOiBfdm0uX19tYXBwaW5nT3B0aW9uc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubWFwcGluZy5jb2x1bW4sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5tYXBwaW5nLCBcImNvbHVtblwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtYXBwaW5nLmNvbHVtblwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgZmxleC0xXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4IGl0ZW1zLXN0YXJ0XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgtZ3JvdyBtci0zXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWFwcGluZy5kZWZhdWx0LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWFwcGluZy5kZWZhdWx0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRhdGV0aW1lX19pbnB1dCBmb3JtX19jb250cm9sIG1yLTJcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBcImZsYXRwaWNrcl9cIiArIF92bS5tYXBwaW5nLmhhbmRsZSxcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLm1hcHBpbmcuaGFuZGxlICsgXCItcGlja3JcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5zZXR0aW5ncy5wbGFjZWhvbGRlclxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubWFwcGluZy5kZWZhdWx0IH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm1hcHBpbmcsIFwiZGVmYXVsdFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleC1ncm93IG1yLTNcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGF0ZXRpbWVfX2J1dHRvbiBidXR0b24gYnV0dG9uLS1wcmltYXJ5IHB4LTRcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCIjXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5mbGF0cGlja3Iub3BlbigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwiZmEtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFwiY2FsZW5kYXItYWx0XCIgfSB9KV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgZm9ybV9fZ3JvdXAgaXRlbXMtZW5kXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMVwiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5tYXBwaW5nLm5hbWUpIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnJlcXVpcmVkXG4gICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cyB0ZXh0LXdhcm5pbmctNzAwIGZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwicmVxdWlyZWRcIilcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5oZWxwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImJvcmRlci1sLTQgcHgtNCBiZy1zZWNvbmRhcnktMTAwIGJvcmRlci1zZWNvbmRhcnktNTAwIHRleHQteHNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJhbGVydFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJwXCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmhlbHApIH0gfSldXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBmbGV4LTFcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogX3ZtLm1hcHBpbmcuaGFuZGxlICsgXCItY29sdW1uXCIsXG4gICAgICAgICAgICBvcHRpb25zOiBfdm0ubWFwcGluZ09wdGlvbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1hcHBpbmcuY29sdW1uLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubWFwcGluZywgXCJjb2x1bW5cIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWFwcGluZy5jb2x1bW5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMVwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicC1pbnB1dFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHsgbmFtZTogX3ZtLm1hcHBpbmcuaGFuZGxlICsgXCItZGVmYXVsdFwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubWFwcGluZy5kZWZhdWx0LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubWFwcGluZywgXCJkZWZhdWx0XCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1hcHBpbmcuZGVmYXVsdFwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBmb3JtX19ncm91cCBpdGVtcy1lbmRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgZmxleC0xXCIgfSwgW1xuICAgICAgX2MoXCJsYWJlbFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLm1hcHBpbmcubmFtZSkgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucmVxdWlyZWRcbiAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzIHRleHQtd2FybmluZy03MDAgZmxvYXQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJyZXF1aXJlZFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmhlbHBcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiYm9yZGVyLWwtNCBweC00IGJnLXNlY29uZGFyeS0xMDAgYm9yZGVyLXNlY29uZGFyeS01MDAgdGV4dC14c1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcImFsZXJ0XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInBcIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uaGVscCkgfSB9KV1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMVwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBfdm0ubWFwcGluZy5oYW5kbGUgKyBcIi1jb2x1bW5cIixcbiAgICAgICAgICAgIG9wdGlvbnM6IF92bS5fX21hcHBpbmdPcHRpb25zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5tYXBwaW5nLmNvbHVtbixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm1hcHBpbmcsIFwiY29sdW1uXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1hcHBpbmcuY29sdW1uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCBmbGV4LTFcIiB9KVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgZm9ybV9fZ3JvdXAgaXRlbXMtZW5kXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMVwiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5tYXBwaW5nLm5hbWUpIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnJlcXVpcmVkXG4gICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cyB0ZXh0LXdhcm5pbmctNzAwIGZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwicmVxdWlyZWRcIilcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5oZWxwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImJvcmRlci1sLTQgcHgtNCBiZy1zZWNvbmRhcnktMTAwIGJvcmRlci1zZWNvbmRhcnktNTAwIHRleHQteHNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJhbGVydFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJwXCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmhlbHApIH0gfSldXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBmbGV4LTFcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogX3ZtLm1hcHBpbmcuaGFuZGxlICsgXCItY29sdW1uXCIsXG4gICAgICAgICAgICBvcHRpb25zOiBfdm0ubWFwcGluZ09wdGlvbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1hcHBpbmcuY29sdW1uLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubWFwcGluZywgXCJjb2x1bW5cIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWFwcGluZy5jb2x1bW5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMVwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwicC1udW1iZXJcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBuYW1lOiBfdm0ubWFwcGluZy5oYW5kbGUgKyBcIi1kZWZhdWx0XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ubWFwcGluZy5kZWZhdWx0LFxuICAgICAgICAgICAgICBzdGVwczogX3ZtLnNldHRpbmdzLnN0ZXBzLFxuICAgICAgICAgICAgICBkZWNpbWFsczogX3ZtLnNldHRpbmdzLmRlY2ltYWxzLFxuICAgICAgICAgICAgICBtaW46IE51bWJlcihfdm0uc2V0dGluZ3MubWluKSxcbiAgICAgICAgICAgICAgbWF4OiBOdW1iZXIoX3ZtLnNldHRpbmdzLm1heClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImlucHV0XCIsICRldmVudClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgeyBzbG90OiBcImRlY3JlYXNlXCIgfSxcbiAgICAgICAgICAgICAgW19jKFwiZmEtaWNvblwiLCB7IGF0dHJzOiB7IGljb246IFwibWludXNcIiB9IH0pXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJ0ZW1wbGF0ZVwiLFxuICAgICAgICAgICAgICB7IHNsb3Q6IFwiaW5jcmVhc2VcIiB9LFxuICAgICAgICAgICAgICBbX2MoXCJmYS1pY29uXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJwbHVzXCIgfSB9KV0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBmb3JtX19ncm91cCBpdGVtcy1lbmRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgZmxleC0xXCIgfSwgW1xuICAgICAgX2MoXCJsYWJlbFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLm1hcHBpbmcubmFtZSkgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucmVxdWlyZWRcbiAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzIHRleHQtd2FybmluZy03MDAgZmxvYXQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJyZXF1aXJlZFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmhlbHBcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiYm9yZGVyLWwtNCBweC00IGJnLXNlY29uZGFyeS0xMDAgYm9yZGVyLXNlY29uZGFyeS01MDAgdGV4dC14c1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcImFsZXJ0XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInBcIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uaGVscCkgfSB9KV1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMVwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBfdm0ubWFwcGluZy5oYW5kbGUgKyBcIi1jb2x1bW5cIixcbiAgICAgICAgICAgIG9wdGlvbnM6IF92bS5fX21hcHBpbmdPcHRpb25zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5tYXBwaW5nLmNvbHVtbixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm1hcHBpbmcsIFwiY29sdW1uXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1hcHBpbmcuY29sdW1uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uX20oMClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMVwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImJvcmRlci1sLTQgcHgtNCBiZy13YXJuaW5nLTEwMCBib3JkZXItd2FybmluZy01MDAgdGV4dC14c1wiLFxuICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwiYWxlcnRcIiB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlRoaXMgaXMgdGhlIHByaW1hcnkgSUQgdXNlZCBmb3IgbW9kaWZ5aW5nIGV4aXN0aW5nIGNvbnRlbnQuIExlYXZlIGJsYW5rIGZvciBuZXcgcmVjb3Jkcy5cIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgZm9ybV9fZ3JvdXAgaXRlbXMtZW5kXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMVwiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5tYXBwaW5nLm5hbWUpIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnJlcXVpcmVkXG4gICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cyB0ZXh0LXdhcm5pbmctNzAwIGZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwicmVxdWlyZWRcIilcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5oZWxwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImJvcmRlci1sLTQgcHgtNCBiZy1zZWNvbmRhcnktMTAwIGJvcmRlci1zZWNvbmRhcnktNTAwIHRleHQteHNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJhbGVydFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJwXCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmhlbHApIH0gfSldXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBmbGV4LTFcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogX3ZtLm1hcHBpbmcuaGFuZGxlICsgXCItY29sdW1uXCIsXG4gICAgICAgICAgICBvcHRpb25zOiBfdm0ubWFwcGluZ09wdGlvbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1hcHBpbmcuY29sdW1uLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubWFwcGluZywgXCJjb2x1bW5cIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWFwcGluZy5jb2x1bW5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMVwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBfdm0ubWFwcGluZy5oYW5kbGUgKyBcIi1kZWZhdWx0XCIsXG4gICAgICAgICAgICBvcHRpb25zOiBfdm0uc2V0dGluZ3Mub3B0aW9uc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubWFwcGluZy5kZWZhdWx0LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubWFwcGluZywgXCJkZWZhdWx0XCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1hcHBpbmcuZGVmYXVsdFwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcInRpdGxlXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJhcHAtdGl0bGVcIiwgeyBhdHRyczogeyBpY29uOiBcInNoaXBcIiB9IH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIk1hcHBpbmcgZm9yIE1hdHJpeCBJbXBvcnRcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICByZXR1cm4gX2MoXCJmaWVsZC1cIiArIGZpZWxkLmNvbXBvbmVudCwge1xuICAgICAgICAgIGtleTogZmllbGQubmFtZSxcbiAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICByZXF1aXJlZDogZmllbGQucmVxdWlyZWQsXG4gICAgICAgICAgICBoZWxwOiBmaWVsZC5oZWxwLFxuICAgICAgICAgICAgc2V0dGluZ3M6IGZpZWxkLnNldHRpbmdzXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJzaGlwXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJNYXBwaW5nIGZvciBUYXhvbm9teSBJbXBvcnRcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICByZXR1cm4gX2MoXCJmaWVsZC1cIiArIGZpZWxkLmNvbXBvbmVudCwge1xuICAgICAgICAgIGtleTogZmllbGQubmFtZSxcbiAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICByZXF1aXJlZDogZmllbGQucmVxdWlyZWQsXG4gICAgICAgICAgICBoZWxwOiBmaWVsZC5oZWxwLFxuICAgICAgICAgICAgc2V0dGluZ3M6IGZpZWxkLnNldHRpbmdzXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJzaGlwXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJNYXBwaW5nIGZvciBVc2VycyBJbXBvcnRcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICByZXR1cm4gX2MoXCJmaWVsZC1cIiArIGZpZWxkLmNvbXBvbmVudCwge1xuICAgICAgICAgIGtleTogZmllbGQubmFtZSxcbiAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICByZXF1aXJlZDogZmllbGQucmVxdWlyZWQsXG4gICAgICAgICAgICBoZWxwOiBmaWVsZC5oZWxwLFxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IGZpZWxkLm9wdGlvbnNcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIG1yLTNcIiwgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJpbXBvcnRlclwiIH0gfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIkdvIEJhY2tcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicC1jYXJkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgYm9yZGVyLWIgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgZmxleC0xIGZvbnQtYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRGaWVsZFxcblxcdFxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgZmxleC0xIGZvbnQtYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRDb2x1bW5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMSBmb250LWJvbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0RGVmYXVsdCBWYWx1ZVxcblxcdFxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRlZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKF92bS5tb2QgKyBcIi1tYXBwaW5nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGdyb3VwOiBfdm0uZ3JvdXAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db2xvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIyMjkzZTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29sb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db2xvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJiMjI5M2UyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJiMjI5M2UyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJiMjI5M2UyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db2xvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIyMjkzZTImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmIyMjkzZTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9Db2xvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db2xvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29sb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiMjI5M2UyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EYXRlVGltZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGU4OGYyYzImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGF0ZVRpbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EYXRlVGltZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRlODhmMmMyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRlODhmMmMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRlODhmMmMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EYXRlVGltZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGU4OGYyYzImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGU4OGYyYzInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9EYXRlVGltZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RhdGVUaW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXRlVGltZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGF0ZVRpbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlODhmMmMyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGJjYjVhMTQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRiY2I1YTE0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRiY2I1YTE0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRiY2I1YTE0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGJjYjVhMTQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGJjYjVhMTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9JbnB1dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRiY2I1YTE0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ob25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNjRhNzQ4OCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA2NGE3NDg4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA2NGE3NDg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA2NGE3NDg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNjRhNzQ4OCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNjRhNzQ4OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL05vbmUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNjRhNzQ4OCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTnVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMWM5MzY0ZCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9OdW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9OdW1iZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbmNtcy12Ni9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMWM5MzY0ZCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMWM5MzY0ZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMWM5MzY0ZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTnVtYmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMWM5MzY0ZCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwMWM5MzY0ZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL051bWJlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL051bWJlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTnVtYmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9OdW1iZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAxYzkzNjRkJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9QcmltYXJ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjY1Y2ZhNCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9QcmltYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vUHJpbWFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRiNjVjZmE0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRiNjVjZmE0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRiNjVjZmE0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9QcmltYXJ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjY1Y2ZhNCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YjY1Y2ZhNCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL1ByaW1hcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmltYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmltYXJ5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9QcmltYXJ5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjY1Y2ZhNCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2VsZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MzE1MDMwMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9TZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9TZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbmNtcy12Ni9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc5MzE1MDMwMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc5MzE1MDMwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc5MzE1MDMwMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vU2VsZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MzE1MDMwMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc5MzE1MDMwMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL1NlbGVjdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlbGVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTkzMTUwMzAwJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9NYXRyaXhNYXBwaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGUyZDRjYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9NYXRyaXhNYXBwaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTWF0cml4TWFwcGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzIwZTJkNGNhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzIwZTJkNGNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzIwZTJkNGNhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9NYXRyaXhNYXBwaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGUyZDRjYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyMGUyZDRjYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTWF0cml4TWFwcGluZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hdHJpeE1hcHBpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hdHJpeE1hcHBpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hdHJpeE1hcHBpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTIwZTJkNGNhJlwiIiwiaW1wb3J0IEZpZWxkQ29sb3IgICAgZnJvbSAnLi4vRmllbGRzL0NvbG9yLnZ1ZSdcbmltcG9ydCBGaWVsZERhdGVUaW1lIGZyb20gJy4uL0ZpZWxkcy9EYXRlVGltZS52dWUnXG5pbXBvcnQgRmllbGRJbnB1dCAgICBmcm9tICcuLi9GaWVsZHMvSW5wdXQudnVlJ1xuaW1wb3J0IEZpZWxkTm9uZSAgICAgZnJvbSAnLi4vRmllbGRzL05vbmUudnVlJ1xuaW1wb3J0IEZpZWxkTnVtYmVyICAgZnJvbSAnLi4vRmllbGRzL051bWJlci52dWUnXG5pbXBvcnQgRmllbGRQcmltYXJ5ICBmcm9tICcuLi9GaWVsZHMvUHJpbWFyeS52dWUnXG5pbXBvcnQgRmllbGRTZWxlY3QgICBmcm9tICcuLi9GaWVsZHMvU2VsZWN0LnZ1ZSdcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRkYXRhKCkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRmaWVsZHM6IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCdjb21wb25lbnQnOiAncHJpbWFyeScsXG5cdFx0XHRcdFx0J25hbWUnOiAgICAgICdJRCcsXG5cdFx0XHRcdFx0J3JlcXVpcmVkJzogIHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCdjb21wb25lbnQnOiAnaW5wdXQnLFxuXHRcdFx0XHRcdCduYW1lJzogICAgICAnTmFtZScsXG5cdFx0XHRcdFx0J3JlcXVpcmVkJzogIHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCdjb21wb25lbnQnOiAnaW5wdXQnLFxuXHRcdFx0XHRcdCduYW1lJzogICAgICAnU2x1ZycsXG5cdFx0XHRcdFx0J3JlcXVpcmVkJzogIHRydWVcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCdjb21wb25lbnQnOiAnc2VsZWN0Jyxcblx0XHRcdFx0XHQnbmFtZSc6ICAgICAgJ1N0YXR1cycsXG5cdFx0XHRcdFx0J29wdGlvbnMnOiAgIFt7J2xhYmVsJzonWWVzJywndmFsdWUnOnRydWV9LHsnbGFiZWwnOidObycsJ3ZhbHVlJzpmYWxzZX1dXG5cdFx0XHRcdH1cblx0XHRcdF0sXG5cdFx0XHRmaWVsZFR5cGVzOiB7XG5cdFx0XHRcdCdjb2xvcic6ICAgIFsgJ2NvbG9yLXBpY2tlcicgXSxcblx0XHRcdFx0J2lucHV0JzogICAgWyAndGV4dGFyZWEnIF0sXG5cdFx0XHRcdCdudW1iZXInOiAgIFsgJ251bWJlcicgXSxcblx0XHRcdFx0J3NlbGVjdCc6ICAgWyAncmFkaW8nLCdzZWxlY3QnLCdjb3VudHJ5JywndXMtc3RhdGUnLCd0b2dnbGUnIF0sXG5cdFx0XHRcdCdkYXRldGltZSc6IFsgJ2RhdGV0aW1lJyBdXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdHByb3BzOiB7XG5cdFx0Z3JvdXA6IHtcblx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdHJlcXVpcmVkOiB0cnVlXG5cdFx0fVxuXHR9LFxuXG5cdGNvbXBvbmVudHM6IHtcblx0XHQnZmllbGQtY29sb3InOiAgICBGaWVsZENvbG9yLFxuXHRcdCdmaWVsZC1kYXRldGltZSc6IEZpZWxkRGF0ZVRpbWUsXG5cdFx0J2ZpZWxkLWlucHV0JzogICAgRmllbGRJbnB1dCxcblx0XHQnZmllbGQtbm9uZSc6ICAgICBGaWVsZE5vbmUsXG5cdFx0J2ZpZWxkLW51bWJlcic6ICAgRmllbGROdW1iZXIsXG5cdFx0J2ZpZWxkLXByaW1hcnknOiAgRmllbGRQcmltYXJ5LFxuXHRcdCdmaWVsZC1zZWxlY3QnOiAgIEZpZWxkU2VsZWN0LFxuXHR9LFxuXG5cdGNyZWF0ZWQoKSB7XG5cdFx0Y29uc3Qgdm0gPSB0aGlzXG5cblx0XHRheGlvcy5hbGwoW1xuXHRcdFx0YXhpb3MuZ2V0KGAvYXBpL3RheG9ub21pZXMvJHt0aGlzLmdyb3VwfWApXG5cdFx0XSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRfLmZvckVhY2gocmVzcG9uc2UuZGF0YS5kYXRhLmZpZWxkc2V0LnNlY3Rpb25zLCBmdW5jdGlvbihzZWN0aW9uKSB7XG5cdFx0XHRcdF8uZm9yRWFjaChzZWN0aW9uLmZpZWxkcywgZnVuY3Rpb24oZmllbGQpIHtcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhmaWVsZC5uYW1lLCBmaWVsZC50eXBlLmlkKVxuXHRcdFx0XHRcdGxldCBwcm9wZXJ0aWVzID0ge1xuXHRcdFx0XHRcdFx0J2NvbXBvbmVudCc6IF8uZGVmYXVsdFRvKFxuXHRcdFx0XHRcdFx0XHRfLmZpbmRLZXkodm0uZmllbGRUeXBlcywgZnVuY3Rpb24odHlwZXMpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gXy5pbmRleE9mKHR5cGVzLCBmaWVsZC50eXBlLmlkKSAhPSAtMVxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0J25vbmUnXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0J25hbWUnOiAgICAgIGZpZWxkLm5hbWUsXG5cdFx0XHRcdFx0XHQncmVxdWlyZWQnOiAgZmllbGQucmVxdWlyZWQsXG5cdFx0XHRcdFx0XHQnaGVscCc6ICAgICAgZmllbGQuaGVscCxcblx0XHRcdFx0XHRcdCdzZXR0aW5ncyc6ICBfLmlzUGxhaW5PYmplY3QoZmllbGQuc2V0dGluZ3MpID8gZmllbGQuc2V0dGluZ3MgOiB7fSxcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRpZiAoZmllbGQudHlwZS5pZCA9PSAndG9nZ2xlJykge1xuXHRcdFx0XHRcdFx0cHJvcGVydGllc1snc2V0dGluZ3MnXS5vcHRpb25zID0gW1xuXHRcdFx0XHRcdFx0XHR7ICdsYWJlbCc6ICdFbmFibGVkJywgICd2YWx1ZSc6IDEgfSxcblx0XHRcdFx0XHRcdFx0eyAnbGFiZWwnOiAnRGlzYWJsZWQnLCAndmFsdWUnOiAwIH0sXG5cdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChfLnNpemUoZmllbGQudHlwZS5kYXRhKSA+IDApIHtcblx0XHRcdFx0XHRcdHByb3BlcnRpZXNbJ3NldHRpbmdzJ10ub3B0aW9ucyA9IF8ubWFwKGZpZWxkLnR5cGUuZGF0YSwgKGxhYmVsLCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdFx0XHRcdCdsYWJlbCc6IGxhYmVsLFxuXHRcdFx0XHRcdFx0XHRcdCd2YWx1ZSc6IHZhbHVlXG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dm0uZmllbGRzLnB1c2gocHJvcGVydGllcylcblx0XHRcdFx0fSlcblx0XHRcdH0pXG5cdFx0fSkpXG5cdH1cbn0iLCJpbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCdcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRwcm9wczogIHtcblx0XHRuYW1lOiB7XG5cdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRyZXF1aXJlZDogdHJ1ZVxuXHRcdH0sXG5cbiAgICAgICAgaGVscDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZGVmYXVsdDogJydcbiAgICAgICAgfSxcblxuXHRcdHJlcXVpcmVkOiB7XG5cdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0cmVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHR9LFxuXG5cdFx0c2V0dGluZ3M6IHtcblx0XHRcdHR5cGU6IE9iamVjdCxcblx0XHRcdGVxdWlyZWQ6IGZhbHNlLFxuXHRcdFx0ZGVmYXVsdDogKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4ge31cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Y29tcHV0ZWQ6IHtcblx0XHQuLi5tYXBHZXR0ZXJzKHtcblx0XHRcdG1hcHBpbmdPcHRpb25zOiAnbWFwcGVyL2dldE1hcHBpbmdPcHRpb25zJyxcblx0XHRcdG1hcHBpbmdzOiAnbWFwcGVyL2dldEZvcm1NYXBwaW5ncydcblx0XHR9KSxcblxuXHRcdGhhbmRsZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gXy5rZWJhYkNhc2UodGhpcy5uYW1lKVxuXHRcdH0sXG5cblx0XHRtYXBwaW5nOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiB0aGlzLm1hcHBpbmdzW3RoaXMuaGFuZGxlXVxuXHRcdH1cblx0fSxcblxuXHRtZXRob2RzOiB7XG5cdFx0Li4ubWFwQWN0aW9ucyh7XG5cdFx0XHRzZXRGb3JtTWFwcGluZzogJ21hcHBlci9zZXRGb3JtTWFwcGluZydcblx0XHR9KVxuXHR9LFxuXG5cdGNyZWF0ZWQoKSB7XG5cdFx0aWYgKCEgXy5oYXModGhpcy5tYXBwaW5ncywgdGhpcy5oYW5kbGUpKSB7XG5cdFx0XHR0aGlzLnNldEZvcm1NYXBwaW5nKHtcblx0XHRcdFx0bmFtZTogICAgIHRoaXMubmFtZSxcblx0XHRcdFx0aGFuZGxlOiAgIHRoaXMuaGFuZGxlLFxuXHRcdFx0XHRjb2x1bW46ICAgdGhpcy5oYW5kbGUsXG5cdFx0XHRcdHJlcXVpcmVkOiB0aGlzLnJlcXVpcmVkLFxuXHRcdFx0XHRkZWZhdWx0OiAgKF8uaGFzKHRoaXMuc2V0dGluZ3MsICdkZWZhdWx0JykgPyB0aGlzLnNldHRpbmdzLmRlZmF1bHQgOiBudWxsKVxuXHRcdFx0fSlcblx0XHR9XG5cdH1cbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RheG9ub215TWFwcGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwM2VhZWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGF4b25vbXlNYXBwaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGF4b25vbXlNYXBwaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoYW5la3JvbGlrb3dza2kvQ29kZS9mdXNpb25jbXMtdjYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzUwM2VhZWEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzUwM2VhZWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzUwM2VhZWEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1RheG9ub215TWFwcGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwM2VhZWEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzUwM2VhZWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL1RheG9ub215TWFwcGluZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RheG9ub215TWFwcGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGF4b25vbXlNYXBwaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXhvbm9teU1hcHBpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM1MDNlYWVhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Vc2VyTWFwcGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzA1YWE2NWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVXNlck1hcHBpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Vc2VyTWFwcGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzMwNWFhNjVlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzMwNWFhNjVlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzMwNWFhNjVlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Vc2VyTWFwcGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzA1YWE2NWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzA1YWE2NWUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL1VzZXJNYXBwaW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlck1hcHBpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJNYXBwaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyTWFwcGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzA1YWE2NWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL01hcHBpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5OTRiMzUwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL01hcHBpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9NYXBwaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoYW5la3JvbGlrb3dza2kvQ29kZS9mdXNpb25jbXMtdjYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzk5NGIzNTAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzk5NGIzNTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzk5NGIzNTAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL01hcHBpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5OTRiMzUwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc5OTRiMzUwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvTWFwcGluZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hcHBpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hcHBpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL01hcHBpbmcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc5OTRiMzUwJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==