(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[88],{

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
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'taxonomies-mapping',
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
        'input': ['textarea', 'color-picker'],
        'select': ['radio', 'select']
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
    'field-input': _Fields_Input_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'field-primary': _Fields_Primary_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    'field-select': _Fields_Select_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    var vm = this;
    axios.all([axios.get("/api/taxonomies/".concat(this.group))]).then(axios.spread(function (response) {
      _.forEach(response.data.data.fieldset.sections, function (section) {
        _.forEach(section.fields, function (field) {
          vm.fields.push({
            'component': _.findKey(vm.fieldTypes, function (types) {
              return _.indexOf(types, field.type.id) != -1;
            }),
            'name': field.name,
            'required': field.required,
            'help': field.help,
            'default': _.has(field.settings, 'default') ? field.settings["default"] : null,
            'options': _.has(field.settings, 'options') ? field.settings.options : null
          });
        });
      });
    }));
  }
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
/* harmony import */ var _Fields_Color_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Fields/Color.vue */ "./resources/js/components/Importer/Fields/Color.vue");
/* harmony import */ var _Fields_DateTime_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Fields/DateTime.vue */ "./resources/js/components/Importer/Fields/DateTime.vue");
/* harmony import */ var _Fields_Input_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Fields/Input.vue */ "./resources/js/components/Importer/Fields/Input.vue");
/* harmony import */ var _Fields_None_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Fields/None.vue */ "./resources/js/components/Importer/Fields/None.vue");
/* harmony import */ var _Fields_Primary_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Fields/Primary.vue */ "./resources/js/components/Importer/Fields/Primary.vue");
/* harmony import */ var _Fields_Select_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Fields/Select.vue */ "./resources/js/components/Importer/Fields/Select.vue");
//
//
//
//
//
//
//
//
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
  name: 'taxonomies-mapping',
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
        'select': ['radio', 'select', 'country', 'us-state'],
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
    'field-primary': _Fields_Primary_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    'field-select': _Fields_Select_vue__WEBPACK_IMPORTED_MODULE_5__["default"]
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
            'settings': _.isPlainObject(field.settings) ? field.settings : null,
            'metadata': field.type.data
          };

          if (_.size(field.type.data) > 0) {
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
            defaultValue: field.default,
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
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TaxonomyMapping_vue_vue_type_template_id_3503eaea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TaxonomyMapping.vue?vue&type=template&id=3503eaea& */ "./resources/js/components/Importer/TaxonomyMapping.vue?vue&type=template&id=3503eaea&");
/* harmony import */ var _TaxonomyMapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaxonomyMapping.vue?vue&type=script&lang=js& */ "./resources/js/components/Importer/TaxonomyMapping.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _TaxonomyMapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _TaxonomyMapping_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





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
/*! no static exports found */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL0NvbG9yLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL0RhdGVUaW1lLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL0lucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL05vbmUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvUHJpbWFyeS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9TZWxlY3QudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9NYXRyaXhNYXBwaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvVGF4b25vbXlNYXBwaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvVXNlck1hcHBpbmcudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvTWFwcGluZy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL0NvbG9yLnZ1ZT80NTMzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9EYXRlVGltZS52dWU/NDA0NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvSW5wdXQudnVlP2QwZmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL05vbmUudnVlPzA2MTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL1ByaW1hcnkudnVlP2QzZWEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL1NlbGVjdC52dWU/Y2U3ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9NYXRyaXhNYXBwaW5nLnZ1ZT8xMzVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL1RheG9ub215TWFwcGluZy52dWU/YTEyMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9Vc2VyTWFwcGluZy52dWU/ZmQwMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvTWFwcGluZy52dWU/NWU5ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvQ29sb3IudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9Db2xvci52dWU/MjljNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvQ29sb3IudnVlP2E2OGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL0RhdGVUaW1lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvRGF0ZVRpbWUudnVlPzE3MTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL0RhdGVUaW1lLnZ1ZT9jNzUyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9JbnB1dC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL0lucHV0LnZ1ZT84NDBjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9JbnB1dC52dWU/NDVjYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9GaWVsZHMvTm9uZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL05vbmUudnVlPzQ1ZGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL05vbmUudnVlP2FkM2IiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL1ByaW1hcnkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9QcmltYXJ5LnZ1ZT8wNjllIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9QcmltYXJ5LnZ1ZT8xYjYwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9TZWxlY3QudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9TZWxlY3QudnVlP2YwZWMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL1NlbGVjdC52dWU/NTk2NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9NYXRyaXhNYXBwaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9NYXRyaXhNYXBwaW5nLnZ1ZT82NWExIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL01hdHJpeE1hcHBpbmcudnVlP2Q3MmMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvTWl4aW5zL2ZpZWxkcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9UYXhvbm9teU1hcHBpbmcudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL1RheG9ub215TWFwcGluZy52dWU/YWI2MyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvY29tcG9uZW50cy9JbXBvcnRlci9UYXhvbm9teU1hcHBpbmcudnVlP2NmNmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvVXNlck1hcHBpbmcudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL1VzZXJNYXBwaW5nLnZ1ZT9mNzQ2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL1VzZXJNYXBwaW5nLnZ1ZT9hMWMxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy92aWV3cy9JbXBvcnRlci9NYXBwaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvTWFwcGluZy52dWU/ZTUzMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvdmlld3MvSW1wb3J0ZXIvTWFwcGluZy52dWU/NGI5NSJdLCJuYW1lcyI6WyJwcm9wcyIsIm5hbWUiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJoZWxwIiwiQm9vbGVhbiIsInNldHRpbmdzIiwiT2JqZWN0IiwiZXF1aXJlZCIsImNvbXB1dGVkIiwibWFwR2V0dGVycyIsIm1hcHBpbmdPcHRpb25zIiwibWFwcGluZ3MiLCJoYW5kbGUiLCJfIiwia2ViYWJDYXNlIiwibWFwcGluZyIsIm1ldGhvZHMiLCJtYXBBY3Rpb25zIiwic2V0Rm9ybU1hcHBpbmciLCJjcmVhdGVkIiwiaGFzIiwiY29sdW1uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQ0E7QUFDQTtBQUVBO0FBQ0EsNEJBREE7QUFFQSxrRUFGQTtBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBLGlCQURBO0FBRUE7QUFGQTtBQUlBLEdBVEE7QUFXQTtBQUNBLHFCQURBLDBCQUNBLFdBREEsRUFDQTtBQUNBO0FBQ0EsS0FIQTtBQUtBLE9BTEEsZUFLQSxXQUxBLEVBS0E7QUFDQTtBQUNBO0FBUEEsR0FYQTtBQXFCQTtBQUNBLGdCQURBLHdCQUNBLEtBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBO0FBTUEsZUFOQSx1QkFNQSxXQU5BLEVBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZBLEdBckJBO0FBa0NBLFNBbENBLHFCQWtDQTtBQUFBOztBQUNBO0FBQ0EsOENBREE7QUFFQSx1QkFGQTtBQUdBLHdDQUhBO0FBSUEsc0JBSkE7QUFLQTtBQUNBLDJDQURBO0FBRUE7QUFGQTtBQUxBLE9BU0EsRUFUQSxDQVNBLE1BVEEsRUFTQTtBQUNBO0FBQ0EsS0FYQSxFQVdBLEVBWEEsQ0FXQSxRQVhBLEVBV0E7QUFDQTtBQUNBLEtBYkEsRUFhQSxFQWJBLENBYUEsT0FiQSxFQWFBO0FBQ0E7QUFDQSxLQWZBLEVBREEsQ0FrQkE7O0FBQ0E7QUFDQTtBQUNBO0FBdkRBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUVBO0FBQ0EsK0JBREE7QUFFQSxrRUFGQTtBQUlBLE1BSkEsa0JBSUE7QUFDQTtBQUNBO0FBREE7QUFHQSxHQVJBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFIQSxHQVZBO0FBZ0JB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QUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiY2h1bmtzLzg4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicm93IGZvcm1fX2dyb3VwIGl0ZW1zLWVuZFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgZmxleC0xXCI+XG5cdFx0XHQ8bGFiZWwgdi10ZXh0PVwibWFwcGluZy5uYW1lXCIvPlxuXHRcdFx0PHNwYW4gdi1pZj1cInJlcXVpcmVkXCIgY2xhc3M9XCJ0ZXh0LXhzIHRleHQtd2FybmluZy03MDAgZmxvYXQtcmlnaHRcIj5yZXF1aXJlZDwvc3Bhbj5cblx0XHRcdFxuXHRcdFx0PGRpdiB2LWlmPVwiaGVscFwiIHJvbGU9XCJhbGVydFwiIGNsYXNzPVwiYm9yZGVyLWwtNCBweC00IGJnLXNlY29uZGFyeS0xMDAgYm9yZGVyLXNlY29uZGFyeS01MDAgdGV4dC14c1wiPlxuXHRcdFx0XHQ8cCB2LWh0bWw9XCJoZWxwXCI+PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTFcIj5cblx0XHRcdDxwLXNlbGVjdFxuICAgICAgICAgICAgICAgIDpuYW1lPVwibWFwcGluZy5oYW5kbGUgKyAnLWNvbHVtbidcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwibWFwcGluZ09wdGlvbnNcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJtYXBwaW5nLmNvbHVtblwiPlxuICAgICAgICAgICAgPC9wLXNlbGVjdD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZsZXgtMVwiPlxuXHRcdFx0PGRpdiBjbGFzcz1cImZsZXggaXRlbXMtc3RhcnRcIj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImZsZXgtZ3JvdyBtci0zXCI+XG5cdFx0XHRcdFx0PGxhYmVsIDpmb3I9XCJtYXBwaW5nLmhhbmRsZSArICctcGlja3InXCIgY2xhc3M9XCJ0ZXh0LXhzXCI+UGlja2VyPC9sYWJlbD5cblx0XHRcdFx0XHQ8ZGl2IDpjbGFzcz1cIm1hcHBpbmcuaGFuZGxlICsgJy1waWNrcidcIj48L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJmbGV4LWdyb3cgbXItM1wiPlxuXHRcdFx0XHRcdDxsYWJlbCA6Zm9yPVwibWFwcGluZy5oYW5kbGUgKyAnLWhleCdcIiBjbGFzcz1cInRleHQteHNcIj5IZXg8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0OmlkPVwibWFwcGluZy5oYW5kbGUgKyAnLWhleCdcIlxuXHRcdFx0XHRcdFx0Om5hbWU9XCJtYXBwaW5nLmhhbmRsZSArICctaGV4J1wiXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvcm1fX2NvbnRyb2xcIiBcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJoZXhcIi8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleC1ncm93XCI+XG5cdFx0XHRcdFx0PGxhYmVsIDpmb3I9XCJtYXBwaW5nLmhhbmRsZSArICctcmdiYSdcIiBjbGFzcz1cInRleHQteHNcIj5SR0JBPC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdDppZD1cIm1hcHBpbmcuaGFuZGxlICsgJy1yZ2JhJ1wiXG5cdFx0XHRcdFx0XHQ6bmFtZT1cIm1hcHBpbmcuaGFuZGxlICsgJy1yZ2JhJ1wiXG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cImZvcm1fX2NvbnRyb2xcIiBcblx0XHRcdFx0XHRcdHYtbW9kZWw9XCJtYXBwaW5nLmRlZmF1bHRcIi8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IEZpZWxkTWl4aW4gZnJvbSAnLi4vTWl4aW5zL2ZpZWxkcydcblx0aW1wb3J0IFBpY2tyIGZyb20gJ0BzaW1vbndlcC9waWNrcidcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ21hcHBlci1maWVsZC1jb2xvcicsXG5cdFx0bWl4aW5zOiBbIEZpZWxkTWl4aW4gXSxcblxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRwaWNrcjogbnVsbCxcblx0XHRcdFx0aGV4OiAnJ1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHR3YXRjaDoge1xuXHRcdFx0J21hcHBpbmcuZGVmYXVsdCcoY29sb3JTdHJpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNoYW5nZUNvbG9yKGNvbG9yU3RyaW5nKVxuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgaGV4KGNvbG9yU3RyaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VDb2xvcihjb2xvclN0cmluZylcbiAgICAgICAgICAgIH1cblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0cGlja3JDaGFuZ2VkKGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oZXggPSBjb2xvciA/IGNvbG9yLnRvSEVYQSgpLnRvU3RyaW5nKCkgOiAnJ1xuICAgICAgICAgICAgICAgIHRoaXMubWFwcGluZy5kZWZhdWx0ID0gY29sb3IgPyBjb2xvci50b1JHQkEoKS50b1N0cmluZygwKSA6ICcnXG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBjaGFuZ2VDb2xvcihjb2xvclN0cmluZykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBpY2tyLnNldENvbG9yKGNvbG9yU3RyaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tyLmFwcGx5Q29sb3IoKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblx0XHR9LFxuXG5cdFx0bW91bnRlZCgpIHtcblx0XHRcdHRoaXMucGlja3IgPSBQaWNrci5jcmVhdGUoe1xuXHRcdFx0XHRlbDogJy4nICsgdGhpcy5tYXBwaW5nLmhhbmRsZSArICctcGlja3InLFxuXHRcdFx0XHR0aGVtZTogJ21vbm9saXRoJyxcblx0XHRcdFx0ZGVmYXVsdDogdGhpcy5tYXBwaW5nLmRlZmF1bHQsXG5cdFx0XHRcdGNvbXBhcmlzb246IHRydWUsXG5cdFx0XHRcdGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogdGhpcy5zZXR0aW5ncy50cmFuc3BhcmVuY3ksXG4gICAgICAgICAgICAgICAgICAgIGh1ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS5vbignc2F2ZScsIChjb2xvciwgaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tyQ2hhbmdlZChjb2xvcilcbiAgICAgICAgICAgIH0pLm9uKCdjaGFuZ2UnLCAoY29sb3IsIGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5waWNrckNoYW5nZWQoY29sb3IpXG4gICAgICAgICAgICB9KS5vbignY2xlYXInLCAoaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tyQ2hhbmdlZChudWxsKVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy8gaW5pdC4uXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUNvbG9yKHRoaXMubWFwcGluZy5kZWZhdWx0KVxuICAgICAgICAgICAgdGhpcy5waWNrckNoYW5nZWQodGhpcy5waWNrci5nZXRDb2xvcigpKVxuXHRcdH1cblx0fVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2IGNsYXNzPVwicm93IGZvcm1fX2dyb3VwIGl0ZW1zLWVuZFwiPlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgZmxleC0xXCI+XG5cdFx0XHQ8bGFiZWwgdi10ZXh0PVwibWFwcGluZy5uYW1lXCIvPlxuXHRcdFx0PHNwYW4gdi1pZj1cInJlcXVpcmVkXCIgY2xhc3M9XCJ0ZXh0LXhzIHRleHQtd2FybmluZy03MDAgZmxvYXQtcmlnaHRcIj5yZXF1aXJlZDwvc3Bhbj5cblx0XHRcdFxuXHRcdFx0PGRpdiB2LWlmPVwiaGVscFwiIHJvbGU9XCJhbGVydFwiIGNsYXNzPVwiYm9yZGVyLWwtNCBweC00IGJnLXNlY29uZGFyeS0xMDAgYm9yZGVyLXNlY29uZGFyeS01MDAgdGV4dC14c1wiPlxuXHRcdFx0XHQ8cCB2LWh0bWw9XCJoZWxwXCI+PC9wPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTFcIj5cblx0XHRcdDxwLXNlbGVjdFxuICAgICAgICAgICAgICAgIDpuYW1lPVwibWFwcGluZy5oYW5kbGUgKyAnLWNvbHVtbidcIlxuICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiX19tYXBwaW5nT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1hcHBpbmcuY29sdW1uXCI+XG4gICAgICAgICAgICA8L3Atc2VsZWN0PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgZmxleC0xXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1zdGFydFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleC1ncm93IG1yLTNcIj5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdDppZD1cIidmbGF0cGlja3JfJyArIG1hcHBpbmcuaGFuZGxlXCJcblx0XHRcdFx0XHRcdDpuYW1lPVwibWFwcGluZy5oYW5kbGUgKyAnLXBpY2tyJ1wiXG5cdFx0XHRcdFx0XHQ6cGxhY2Vob2xkZXI9XCJzZXR0aW5ncy5wbGFjZWhvbGRlclwiXG5cdFx0XHRcdFx0XHR2LW1vZGVsPVwibWFwcGluZy5kZWZhdWx0XCJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZGF0ZXRpbWVfX2lucHV0IGZvcm1fX2NvbnRyb2wgbXItMlwiIC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmxleC1ncm93IG1yLTNcIj5cblx0XHRcdFx0XHQ8YSBocmVmPVwiI1wiIGNsYXNzPVwiZGF0ZXRpbWVfX2J1dHRvbiBidXR0b24gYnV0dG9uLS1wcmltYXJ5IHB4LTRcIiBAY2xpY2sucHJldmVudD1cImZsYXRwaWNrci5vcGVuKClcIj5cblx0XHRcdFx0XHRcdDxmYS1pY29uIGljb249XCJjYWxlbmRhci1hbHRcIj48L2ZhLWljb24+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBmbGF0cGlja3IgZnJvbSAnZmxhdHBpY2tyJ1xuXHRpbXBvcnQgRmllbGRNaXhpbiBmcm9tICcuLi9NaXhpbnMvZmllbGRzJ1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnbWFwcGVyLWZpZWxkLWRhdGV0aW1lJyxcblx0XHRtaXhpbnM6IFsgRmllbGRNaXhpbiBdLFxuXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGZsYXRwaWNrcjogbnVsbCxcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdF9fbWFwcGluZ09wdGlvbnM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gXy5yZWplY3QodGhpcy5tYXBwaW5nT3B0aW9ucywgWyAnbGFiZWwnLCAnVXNlIGRlZmF1bHQnIF0pXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdGVtaXRFdmVudChzZWxlY3RlZERhdGVzLCBkYXRlU3RyLCBpbnN0YW5jZSkge1xuXHRcdFx0XHR0aGlzLiRlbWl0KCdpbnB1dCcsIGRhdGVTdHIpXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdG1vdW50ZWQoKSB7XG5cdFx0XHR0aGlzLmZsYXRwaWNrciA9IGZsYXRwaWNrcihgI2ZsYXRwaWNrcl8ke3RoaXMubWFwcGluZy5oYW5kbGV9YCwge1xuXHRcdFx0XHRhbHRJbnB1dDogdHJ1ZSxcblx0XHRcdFx0ZW5hYmxlVGltZTogdGhpcy5zZXR0aW5ncy50aW1lLFxuXHRcdFx0XHRhbHRGb3JtYXQ6IHRoaXMuc2V0dGluZ3MuZm9ybWF0IHx8ICdZLW0tZCcsXG5cdFx0XHRcdG1pbnV0ZUluY3JlbWVudDogMSxcblx0XHRcdFx0YWxsb3dJbnB1dDogZmFsc2UsXG5cdFx0XHRcdGNsaWNrT3BlbnM6IGZhbHNlLFxuXHRcdFx0XHRkZWZhdWx0RGF0ZTogdGhpcy5tYXBwaW5nLmRlZmF1bHQsXG5cdFx0XHRcdG9uQ2hhbmdlOiB0aGlzLmVtaXRFdmVudCxcblx0XHRcdFx0b25WYWx1ZVVwZGF0ZTogdGhpcy5pbnB1dENoYW5nZWRcblx0XHRcdH0pXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJyb3cgZm9ybV9fZ3JvdXAgaXRlbXMtZW5kXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTFcIj5cblx0XHRcdDxsYWJlbCB2LXRleHQ9XCJtYXBwaW5nLm5hbWVcIi8+XG5cdFx0XHQ8c3BhbiB2LWlmPVwicmVxdWlyZWRcIiBjbGFzcz1cInRleHQteHMgdGV4dC13YXJuaW5nLTcwMCBmbG9hdC1yaWdodFwiPnJlcXVpcmVkPC9zcGFuPlxuXHRcdFx0XG5cdFx0XHQ8ZGl2IHYtaWY9XCJoZWxwXCIgcm9sZT1cImFsZXJ0XCIgY2xhc3M9XCJib3JkZXItbC00IHB4LTQgYmctc2Vjb25kYXJ5LTEwMCBib3JkZXItc2Vjb25kYXJ5LTUwMCB0ZXh0LXhzXCI+XG5cdFx0XHRcdDxwIHYtaHRtbD1cImhlbHBcIj48L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZsZXgtMVwiPlxuXHRcdFx0PHAtc2VsZWN0XG4gICAgICAgICAgICAgICAgOm5hbWU9XCJtYXBwaW5nLmhhbmRsZSArICctY29sdW1uJ1wiXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJtYXBwaW5nT3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cIm1hcHBpbmcuY29sdW1uXCI+XG4gICAgICAgICAgICA8L3Atc2VsZWN0PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgZmxleC0xXCI+XG5cdFx0XHQ8cC1pbnB1dFxuXHRcdFx0XHQ6bmFtZT1cIm1hcHBpbmcuaGFuZGxlICsgJy1kZWZhdWx0J1wiXG5cdFx0XHRcdHYtbW9kZWw9XCJtYXBwaW5nLmRlZmF1bHRcIj5cblx0XHRcdDwvcC1pbnB1dD5cblx0XHQ8L2Rpdj5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgRmllbGRNaXhpbiBmcm9tICcuLi9NaXhpbnMvZmllbGRzJ1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnbWFwcGVyLWZpZWxkLWlucHV0Jyxcblx0XHRtaXhpbnM6IFsgRmllbGRNaXhpbiBdXG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInJvdyBmb3JtX19ncm91cCBpdGVtcy1lbmRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZsZXgtMVwiPlxuXHRcdFx0PGxhYmVsIHYtdGV4dD1cIm1hcHBpbmcubmFtZVwiLz5cblx0XHRcdDxzcGFuIHYtaWY9XCJyZXF1aXJlZFwiIGNsYXNzPVwidGV4dC14cyB0ZXh0LXdhcm5pbmctNzAwIGZsb2F0LXJpZ2h0XCI+cmVxdWlyZWQ8L3NwYW4+XG5cdFx0XHRcblx0XHRcdDxkaXYgdi1pZj1cImhlbHBcIiByb2xlPVwiYWxlcnRcIiBjbGFzcz1cImJvcmRlci1sLTQgcHgtNCBiZy1zZWNvbmRhcnktMTAwIGJvcmRlci1zZWNvbmRhcnktNTAwIHRleHQteHNcIj5cblx0XHRcdFx0PHAgdi1odG1sPVwiaGVscFwiPjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgZmxleC0xXCI+XG5cdFx0XHQ8cC1zZWxlY3RcbiAgICAgICAgICAgICAgICA6bmFtZT1cIm1hcHBpbmcuaGFuZGxlICsgJy1jb2x1bW4nXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIl9fbWFwcGluZ09wdGlvbnNcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJtYXBwaW5nLmNvbHVtblwiPlxuICAgICAgICAgICAgPC9wLXNlbGVjdD5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZsZXgtMVwiPlxuXHRcdFx0XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IEZpZWxkTWl4aW4gZnJvbSAnLi4vTWl4aW5zL2ZpZWxkcydcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ21hcHBlci1maWVsZC1ub25lJyxcblx0XHRtaXhpbnM6IFsgRmllbGRNaXhpbiBdLFxuXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdF9fbWFwcGluZ09wdGlvbnM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gXy5yZWplY3QodGhpcy5tYXBwaW5nT3B0aW9ucywgWyAnbGFiZWwnLCAnVXNlIGRlZmF1bHQnIF0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXYgY2xhc3M9XCJyb3cgZm9ybV9fZ3JvdXAgaXRlbXMtZW5kXCI+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTFcIj5cblx0XHRcdDxsYWJlbCB2LXRleHQ9XCJtYXBwaW5nLm5hbWVcIi8+XG5cdFx0XHQ8c3BhbiB2LWlmPVwicmVxdWlyZWRcIiBjbGFzcz1cInRleHQteHMgdGV4dC13YXJuaW5nLTcwMCBmbG9hdC1yaWdodFwiPnJlcXVpcmVkPC9zcGFuPlxuXHRcdFx0XG5cdFx0XHQ8ZGl2IHYtaWY9XCJoZWxwXCIgcm9sZT1cImFsZXJ0XCIgY2xhc3M9XCJib3JkZXItbC00IHB4LTQgYmctc2Vjb25kYXJ5LTEwMCBib3JkZXItc2Vjb25kYXJ5LTUwMCB0ZXh0LXhzXCI+XG5cdFx0XHRcdDxwIHYtaHRtbD1cImhlbHBcIj48L3A+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZsZXgtMVwiPlxuXHRcdFx0PHAtc2VsZWN0XG4gICAgICAgICAgICAgICAgOm5hbWU9XCJtYXBwaW5nLmhhbmRsZSArICctY29sdW1uJ1wiXG4gICAgICAgICAgICAgICAgOm9wdGlvbnM9XCJfX21hcHBpbmdPcHRpb25zXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwibWFwcGluZy5jb2x1bW5cIj5cbiAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTFcIj5cblx0XHRcdDxkaXYgcm9sZT1cImFsZXJ0XCIgY2xhc3M9XCJib3JkZXItbC00IHB4LTQgYmctd2FybmluZy0xMDAgYm9yZGVyLXdhcm5pbmctNTAwIHRleHQteHNcIj5cblx0XHRcdFx0PHA+VGhpcyBpcyB0aGUgcHJpbWFyeSBJRCB1c2VkIGZvciBtb2RpZnlpbmcgZXhpc3RpbmcgY29udGVudC4gTGVhdmUgYmxhbmsgZm9yIG5ldyByZWNvcmRzLjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBGaWVsZE1peGluIGZyb20gJy4uL01peGlucy9maWVsZHMnXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICdtYXBwZXItZmllbGQtcHJpbWFyeScsXG5cdFx0bWl4aW5zOiBbIEZpZWxkTWl4aW4gXSxcblxuXHRcdGNvbXB1dGVkOiB7XG5cdFx0XHRfX21hcHBpbmdPcHRpb25zOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIF8uc2xpY2UodGhpcy5tYXBwaW5nT3B0aW9ucywgMilcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdiBjbGFzcz1cInJvdyBmb3JtX19ncm91cCBpdGVtcy1lbmRcIj5cblx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZsZXgtMVwiPlxuXHRcdFx0PGxhYmVsIHYtdGV4dD1cIm1hcHBpbmcubmFtZVwiLz5cblx0XHRcdDxzcGFuIHYtaWY9XCJyZXF1aXJlZFwiIGNsYXNzPVwidGV4dC14cyB0ZXh0LXdhcm5pbmctNzAwIGZsb2F0LXJpZ2h0XCI+cmVxdWlyZWQ8L3NwYW4+XG5cdFx0XHRcblx0XHRcdDxkaXYgdi1pZj1cImhlbHBcIiByb2xlPVwiYWxlcnRcIiBjbGFzcz1cImJvcmRlci1sLTQgcHgtNCBiZy1zZWNvbmRhcnktMTAwIGJvcmRlci1zZWNvbmRhcnktNTAwIHRleHQteHNcIj5cblx0XHRcdFx0PHAgdi1odG1sPVwiaGVscFwiPjwvcD5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHRcdDxkaXYgY2xhc3M9XCJjb2wgZmxleC0xXCI+XG5cdFx0XHQ8cC1zZWxlY3RcbiAgICAgICAgICAgICAgICA6bmFtZT1cIm1hcHBpbmcuaGFuZGxlICsgJy1jb2x1bW4nXCJcbiAgICAgICAgICAgICAgICA6b3B0aW9ucz1cIm1hcHBpbmdPcHRpb25zXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwibWFwcGluZy5jb2x1bW5cIj5cbiAgICAgICAgICAgIDwvcC1zZWxlY3Q+XG5cdFx0PC9kaXY+XG5cdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTFcIj5cblx0XHRcdDxwLXNlbGVjdFxuXHRcdFx0XHQ6bmFtZT1cIm1hcHBpbmcuaGFuZGxlICsgJy1kZWZhdWx0J1wiXG5cdFx0XHRcdDpvcHRpb25zPVwic2V0dGluZ3Mub3B0aW9uc1wiXG5cdFx0XHRcdHYtbW9kZWw9XCJtYXBwaW5nLmRlZmF1bHRcIj5cblx0XHRcdDwvcC1zZWxlY3Q+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IEZpZWxkTWl4aW4gZnJvbSAnLi4vTWl4aW5zL2ZpZWxkcydcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ21hcHBlci1maWVsZC1zZWxlY3QnLFxuXHRcdG1peGluczogWyBGaWVsZE1peGluIF1cblx0fVxuPC9zY3JpcHQ+IiwiPHRlbXBsYXRlPlxuXHQ8ZGl2PlxuXHRcdDxwb3J0YWwgdG89XCJ0aXRsZVwiPlxuXHRcdFx0PGFwcC10aXRsZSBpY29uPVwic2hpcFwiPk1hcHBpbmcgZm9yIFRheG9ub215IEltcG9ydDwvYXBwLXRpdGxlPlxuXHRcdDwvcG9ydGFsPlxuXG5cdFx0PGNvbXBvbmVudCB2LWZvcj1cImZpZWxkIGluIGZpZWxkc1wiXG5cdFx0XHQ6a2V5PVwiZmllbGQubmFtZVwiXG5cdFx0XHQ6aXM9XCInZmllbGQtJyArIGZpZWxkLmNvbXBvbmVudFwiXG5cdFx0XHQ6bmFtZT1cImZpZWxkLm5hbWVcIlxuXHRcdFx0OnJlcXVpcmVkPVwiZmllbGQucmVxdWlyZWRcIlxuXHRcdFx0OmhlbHA9XCJmaWVsZC5oZWxwXCJcblx0XHRcdDpkZWZhdWx0VmFsdWU9XCJmaWVsZC5kZWZhdWx0XCJcblx0XHRcdDpkZWZhdWx0T3B0aW9ucz1cImZpZWxkLm9wdGlvbnNcIlxuXHRcdD48L2NvbXBvbmVudD5cblx0PC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXHRpbXBvcnQgRmllbGRJbnB1dCBmcm9tICcuL0ZpZWxkcy9JbnB1dC52dWUnXG5cdGltcG9ydCBGaWVsZFByaW1hcnkgZnJvbSAnLi9GaWVsZHMvUHJpbWFyeS52dWUnXG5cdGltcG9ydCBGaWVsZFNlbGVjdCBmcm9tICcuL0ZpZWxkcy9TZWxlY3QudnVlJ1xuXG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAndGF4b25vbWllcy1tYXBwaW5nJyxcblxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRmaWVsZHM6IFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQnY29tcG9uZW50JzogJ3ByaW1hcnknLFxuXHRcdFx0XHRcdFx0J25hbWUnOiAgICAgICdJRCcsXG5cdFx0XHRcdFx0XHQncmVxdWlyZWQnOiAgdHJ1ZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0J2NvbXBvbmVudCc6ICdpbnB1dCcsXG5cdFx0XHRcdFx0XHQnbmFtZSc6ICAgICAgJ05hbWUnLFxuXHRcdFx0XHRcdFx0J3JlcXVpcmVkJzogIHRydWVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCdjb21wb25lbnQnOiAnaW5wdXQnLFxuXHRcdFx0XHRcdFx0J25hbWUnOiAgICAgICdTbHVnJyxcblx0XHRcdFx0XHRcdCdyZXF1aXJlZCc6ICB0cnVlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQnY29tcG9uZW50JzogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0XHQnbmFtZSc6ICAgICAgJ1N0YXR1cycsXG5cdFx0XHRcdFx0XHQnb3B0aW9ucyc6ICAgW3snbGFiZWwnOidZZXMnLCd2YWx1ZSc6dHJ1ZX0seydsYWJlbCc6J05vJywndmFsdWUnOmZhbHNlfV1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdF0sXG5cdFx0XHRcdGZpZWxkVHlwZXM6IHtcblx0XHRcdFx0XHQnaW5wdXQnOiBbJ3RleHRhcmVhJywnY29sb3ItcGlja2VyJ10sXG5cdFx0XHRcdFx0J3NlbGVjdCc6IFsncmFkaW8nLCdzZWxlY3QnXVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHByb3BzOiB7XG5cdFx0XHRncm91cDoge1xuXHRcdFx0XHR0eXBlOiBOdW1iZXIsXG5cdFx0XHRcdHJlcXVpcmVkOiB0cnVlXG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGNvbXBvbmVudHM6IHtcblx0XHRcdCdmaWVsZC1pbnB1dCc6IEZpZWxkSW5wdXQsXG5cdFx0XHQnZmllbGQtcHJpbWFyeSc6IEZpZWxkUHJpbWFyeSxcblx0XHRcdCdmaWVsZC1zZWxlY3QnOiBGaWVsZFNlbGVjdCxcblx0XHR9LFxuXG5cdFx0Y3JlYXRlZCgpIHtcblx0XHRcdGNvbnN0IHZtID0gdGhpc1xuXG5cdFx0XHRheGlvcy5hbGwoW1xuXHRcdFx0XHRheGlvcy5nZXQoYC9hcGkvdGF4b25vbWllcy8ke3RoaXMuZ3JvdXB9YClcblx0XHRcdF0pLnRoZW4oYXhpb3Muc3ByZWFkKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHRfLmZvckVhY2gocmVzcG9uc2UuZGF0YS5kYXRhLmZpZWxkc2V0LnNlY3Rpb25zLCBmdW5jdGlvbihzZWN0aW9uKSB7XG5cdFx0XHRcdFx0Xy5mb3JFYWNoKHNlY3Rpb24uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuXHRcdFx0XHRcdFx0dm0uZmllbGRzLnB1c2goe1xuXHRcdFx0XHRcdFx0XHQnY29tcG9uZW50JzogXy5maW5kS2V5KHZtLmZpZWxkVHlwZXMsIGZ1bmN0aW9uKHR5cGVzKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF8uaW5kZXhPZih0eXBlcywgZmllbGQudHlwZS5pZCkgIT0gLTFcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdCduYW1lJzogICAgICBmaWVsZC5uYW1lLFxuXHRcdFx0XHRcdFx0XHQncmVxdWlyZWQnOiAgZmllbGQucmVxdWlyZWQsXG5cdFx0XHRcdFx0XHRcdCdoZWxwJzogICAgICBmaWVsZC5oZWxwLFxuXHRcdFx0XHRcdFx0XHQnZGVmYXVsdCc6ICAgKF8uaGFzKGZpZWxkLnNldHRpbmdzLCAnZGVmYXVsdCcpID8gZmllbGQuc2V0dGluZ3MuZGVmYXVsdCA6IG51bGwpLFxuXHRcdFx0XHRcdFx0XHQnb3B0aW9ucyc6ICAgKF8uaGFzKGZpZWxkLnNldHRpbmdzLCAnb3B0aW9ucycpID8gZmllbGQuc2V0dGluZ3Mub3B0aW9ucyA6IG51bGwpXG5cdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pXG5cdFx0XHR9KSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8cG9ydGFsIHRvPVwidGl0bGVcIj5cblx0XHRcdDxhcHAtdGl0bGUgaWNvbj1cInNoaXBcIj5NYXBwaW5nIGZvciBUYXhvbm9teSBJbXBvcnQ8L2FwcC10aXRsZT5cblx0XHQ8L3BvcnRhbD5cblxuXHRcdDxjb21wb25lbnQgdi1mb3I9XCJmaWVsZCBpbiBmaWVsZHNcIlxuXHRcdFx0OmtleT1cImZpZWxkLm5hbWVcIlxuXHRcdFx0OmlzPVwiJ2ZpZWxkLScgKyBmaWVsZC5jb21wb25lbnRcIlxuXHRcdFx0Om5hbWU9XCJmaWVsZC5uYW1lXCJcblx0XHRcdDpyZXF1aXJlZD1cImZpZWxkLnJlcXVpcmVkXCJcblx0XHRcdDpoZWxwPVwiZmllbGQuaGVscFwiXG5cdFx0XHQ6c2V0dGluZ3M9XCJmaWVsZC5zZXR0aW5nc1wiXG5cdFx0PjwvY29tcG9uZW50PlxuXHQ8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGltcG9ydCBGaWVsZENvbG9yICAgIGZyb20gJy4vRmllbGRzL0NvbG9yLnZ1ZSdcblx0aW1wb3J0IEZpZWxkRGF0ZVRpbWUgZnJvbSAnLi9GaWVsZHMvRGF0ZVRpbWUudnVlJ1xuXHRpbXBvcnQgRmllbGRJbnB1dCAgICBmcm9tICcuL0ZpZWxkcy9JbnB1dC52dWUnXG5cdGltcG9ydCBGaWVsZE5vbmUgICAgIGZyb20gJy4vRmllbGRzL05vbmUudnVlJ1xuXHRpbXBvcnQgRmllbGRQcmltYXJ5ICBmcm9tICcuL0ZpZWxkcy9QcmltYXJ5LnZ1ZSdcblx0aW1wb3J0IEZpZWxkU2VsZWN0ICAgZnJvbSAnLi9GaWVsZHMvU2VsZWN0LnZ1ZSdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ3RheG9ub21pZXMtbWFwcGluZycsXG5cblx0XHRkYXRhKCkge1xuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZmllbGRzOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0J2NvbXBvbmVudCc6ICdwcmltYXJ5Jyxcblx0XHRcdFx0XHRcdCduYW1lJzogICAgICAnSUQnLFxuXHRcdFx0XHRcdFx0J3JlcXVpcmVkJzogIHRydWVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCdjb21wb25lbnQnOiAnaW5wdXQnLFxuXHRcdFx0XHRcdFx0J25hbWUnOiAgICAgICdOYW1lJyxcblx0XHRcdFx0XHRcdCdyZXF1aXJlZCc6ICB0cnVlXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQnY29tcG9uZW50JzogJ2lucHV0Jyxcblx0XHRcdFx0XHRcdCduYW1lJzogICAgICAnU2x1ZycsXG5cdFx0XHRcdFx0XHQncmVxdWlyZWQnOiAgdHJ1ZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0J2NvbXBvbmVudCc6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdFx0J25hbWUnOiAgICAgICdTdGF0dXMnLFxuXHRcdFx0XHRcdFx0J29wdGlvbnMnOiAgIFt7J2xhYmVsJzonWWVzJywndmFsdWUnOnRydWV9LHsnbGFiZWwnOidObycsJ3ZhbHVlJzpmYWxzZX1dXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRdLFxuXHRcdFx0XHRmaWVsZFR5cGVzOiB7XG5cdFx0XHRcdFx0J2NvbG9yJzogICAgWyAnY29sb3ItcGlja2VyJyBdLFxuXHRcdFx0XHRcdCdpbnB1dCc6ICAgIFsgJ3RleHRhcmVhJyBdLFxuXHRcdFx0XHRcdCdzZWxlY3QnOiAgIFsgJ3JhZGlvJywnc2VsZWN0JywnY291bnRyeScsJ3VzLXN0YXRlJyBdLFxuXHRcdFx0XHRcdCdkYXRldGltZSc6IFsgJ2RhdGV0aW1lJyBdXG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0cHJvcHM6IHtcblx0XHRcdGdyb3VwOiB7XG5cdFx0XHRcdHR5cGU6IE51bWJlcixcblx0XHRcdFx0cmVxdWlyZWQ6IHRydWVcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0J2ZpZWxkLWNvbG9yJzogICAgRmllbGRDb2xvcixcblx0XHRcdCdmaWVsZC1kYXRldGltZSc6IEZpZWxkRGF0ZVRpbWUsXG5cdFx0XHQnZmllbGQtaW5wdXQnOiAgICBGaWVsZElucHV0LFxuXHRcdFx0J2ZpZWxkLW5vbmUnOiAgICAgRmllbGROb25lLFxuXHRcdFx0J2ZpZWxkLXByaW1hcnknOiAgRmllbGRQcmltYXJ5LFxuXHRcdFx0J2ZpZWxkLXNlbGVjdCc6ICAgRmllbGRTZWxlY3QsXG5cdFx0fSxcblxuXHRcdGNyZWF0ZWQoKSB7XG5cdFx0XHRjb25zdCB2bSA9IHRoaXNcblxuXHRcdFx0YXhpb3MuYWxsKFtcblx0XHRcdFx0YXhpb3MuZ2V0KGAvYXBpL3RheG9ub21pZXMvJHt0aGlzLmdyb3VwfWApXG5cdFx0XHRdKS50aGVuKGF4aW9zLnNwcmVhZChmdW5jdGlvbiAocmVzcG9uc2UpIHtcblx0XHRcdFx0Xy5mb3JFYWNoKHJlc3BvbnNlLmRhdGEuZGF0YS5maWVsZHNldC5zZWN0aW9ucywgZnVuY3Rpb24oc2VjdGlvbikge1xuXHRcdFx0XHRcdF8uZm9yRWFjaChzZWN0aW9uLmZpZWxkcywgZnVuY3Rpb24oZmllbGQpIHtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKGZpZWxkLm5hbWUsIGZpZWxkLnR5cGUuaWQpXG5cdFx0XHRcdFx0XHRsZXQgcHJvcGVydGllcyA9IHtcblx0XHRcdFx0XHRcdFx0J2NvbXBvbmVudCc6IF8uZGVmYXVsdFRvKFxuXHRcdFx0XHRcdFx0XHRcdF8uZmluZEtleSh2bS5maWVsZFR5cGVzLCBmdW5jdGlvbih0eXBlcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF8uaW5kZXhPZih0eXBlcywgZmllbGQudHlwZS5pZCkgIT0gLTFcblx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0XHQnbm9uZSdcblx0XHRcdFx0XHRcdFx0KSxcblx0XHRcdFx0XHRcdFx0J25hbWUnOiAgICAgIGZpZWxkLm5hbWUsXG5cdFx0XHRcdFx0XHRcdCdyZXF1aXJlZCc6ICBmaWVsZC5yZXF1aXJlZCxcblx0XHRcdFx0XHRcdFx0J2hlbHAnOiAgICAgIGZpZWxkLmhlbHAsXG5cdFx0XHRcdFx0XHRcdCdzZXR0aW5ncyc6ICBfLmlzUGxhaW5PYmplY3QoZmllbGQuc2V0dGluZ3MpID8gZmllbGQuc2V0dGluZ3MgOiBudWxsLFxuXHRcdFx0XHRcdFx0XHQnbWV0YWRhdGEnOiAgZmllbGQudHlwZS5kYXRhLFxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRpZiAoXy5zaXplKGZpZWxkLnR5cGUuZGF0YSkgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdHByb3BlcnRpZXNbJ3NldHRpbmdzJ10ub3B0aW9ucyA9IF8ubWFwKGZpZWxkLnR5cGUuZGF0YSwgKGxhYmVsLCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0XHQnbGFiZWwnOiBsYWJlbCxcblx0XHRcdFx0XHRcdFx0XHRcdCd2YWx1ZSc6IHZhbHVlXG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHR2bS5maWVsZHMucHVzaChwcm9wZXJ0aWVzKVxuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdH0pXG5cdFx0XHR9KSlcblx0XHR9XG5cdH1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cblx0PGRpdj5cblx0XHQ8cG9ydGFsIHRvPVwidGl0bGVcIj5cblx0XHRcdDxhcHAtdGl0bGUgaWNvbj1cInNoaXBcIj5NYXBwaW5nIGZvciBVc2VycyBJbXBvcnQ8L2FwcC10aXRsZT5cblx0XHQ8L3BvcnRhbD5cblxuXHRcdDxjb21wb25lbnQgdi1mb3I9XCJmaWVsZCBpbiBmaWVsZHNcIlxuXHRcdFx0OmtleT1cImZpZWxkLm5hbWVcIlxuXHRcdFx0OmlzPVwiJ2ZpZWxkLScgKyBmaWVsZC5jb21wb25lbnRcIlxuXHRcdFx0Om5hbWU9XCJmaWVsZC5uYW1lXCJcblx0XHRcdDpyZXF1aXJlZD1cImZpZWxkLnJlcXVpcmVkXCJcblx0XHRcdDpoZWxwPVwiZmllbGQuaGVscFwiXG5cdFx0XHQ6ZGVmYXVsdE9wdGlvbnM9XCJmaWVsZC5vcHRpb25zXCJcblx0XHQ+PC9jb21wb25lbnQ+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IEZpZWxkSW5wdXQgZnJvbSAnLi9GaWVsZHMvSW5wdXQudnVlJ1xuXHRpbXBvcnQgRmllbGRQcmltYXJ5IGZyb20gJy4vRmllbGRzL1ByaW1hcnkudnVlJ1xuXHRpbXBvcnQgRmllbGRTZWxlY3QgZnJvbSAnLi9GaWVsZHMvU2VsZWN0LnZ1ZSdcblxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ3VzZXJzLW1hcHBpbmcnLFxuXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdHJvbGVzOiBbXVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRjb21wdXRlZDoge1xuXHRcdFx0ZmllbGRzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIFtcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQnY29tcG9uZW50JzogJ3ByaW1hcnknLFxuXHRcdFx0XHRcdFx0J25hbWUnOiAgICAgICdJRCcsXG5cdFx0XHRcdFx0XHQncmVxdWlyZWQnOiAgdHJ1ZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0J2NvbXBvbmVudCc6ICdpbnB1dCcsXG5cdFx0XHRcdFx0XHQnbmFtZSc6ICAgICAgJ05hbWUnLFxuXHRcdFx0XHRcdFx0J3JlcXVpcmVkJzogIHRydWVcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCdjb21wb25lbnQnOiAnaW5wdXQnLFxuXHRcdFx0XHRcdFx0J25hbWUnOiAgICAgICdFbWFpbCcsXG5cdFx0XHRcdFx0XHQncmVxdWlyZWQnOiAgdHJ1ZVxuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0J2NvbXBvbmVudCc6ICdzZWxlY3QnLFxuXHRcdFx0XHRcdFx0J25hbWUnOiAgICAgICdSb2xlJyxcblx0XHRcdFx0XHRcdCdoZWxwJzogICAgICAnUm9sZXMgcHJvdmlkZSBwZXJtaXNzaW9ucyBmb3IgbG9nZ2VkIGluIHVzZXJzLicsXG5cdFx0XHRcdFx0XHQncmVxdWlyZWQnOiAgdHJ1ZSxcblx0XHRcdFx0XHRcdCdvcHRpb25zJzogICB0aGlzLnJvbGVzXG5cdFx0XHRcdFx0fSxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQnY29tcG9uZW50JzogJ3NlbGVjdCcsXG5cdFx0XHRcdFx0XHQnbmFtZSc6ICAgICAgJ1N0YXR1cycsXG5cdFx0XHRcdFx0XHQnb3B0aW9ucyc6ICAgW3snbGFiZWwnOidZZXMnLCd2YWx1ZSc6dHJ1ZX0seydsYWJlbCc6J05vJywndmFsdWUnOmZhbHNlfV1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdF1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0J2ZpZWxkLWlucHV0JzogRmllbGRJbnB1dCxcblx0XHRcdCdmaWVsZC1wcmltYXJ5JzogRmllbGRQcmltYXJ5LFxuXHRcdFx0J2ZpZWxkLXNlbGVjdCc6IEZpZWxkU2VsZWN0LFxuXHRcdH0sXG5cblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0YXhpb3MuYWxsKFtcblx0XHRcdFx0YXhpb3MuZ2V0KCcvYXBpL3JvbGVzJylcblx0XHRcdF0pLnRoZW4oYXhpb3Muc3ByZWFkKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuXHRcdFx0XHR0aGlzLnJvbGVzID0gXy5tYXAocmVzcG9uc2UuZGF0YS5kYXRhLCAocm9sZSkgPT4ge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHQnbGFiZWwnOiByb2xlLm5hbWUsXG5cdFx0XHRcdFx0XHQndmFsdWUnOiByb2xlLmhhbmRsZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0uYmluZCh0aGlzKSkpXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG5cdDxkaXY+XG5cdFx0PHBvcnRhbCB0bz1cImFjdGlvbnNcIj5cblx0XHRcdDxyb3V0ZXItbGluayA6dG89XCJ7IG5hbWU6ICdpbXBvcnRlcid9XCIgY2xhc3M9XCJidXR0b24gbXItM1wiPkdvIEJhY2s8L3JvdXRlci1saW5rPlxuXHRcdFx0PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgQGNsaWNrLnByZXZlbnQ9XCJzdWJtaXRcIiBjbGFzcz1cImJ1dHRvbiBidXR0b24tLXByaW1hcnlcIj5TYXZlPC9idXR0b24+XG5cdFx0PC9wb3J0YWw+XG5cblx0XHQ8ZGl2IGNsYXNzPVwicm93XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29udGVudC1jb250YWluZXJcIj5cblx0XHRcdFx0PGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVwic3VibWl0XCI+XG5cdFx0XHRcdFx0PHAtY2FyZD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyb3cgYm9yZGVyLWIgbWItM1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZsZXgtMSBmb250LWJvbGRcIj5cblx0XHRcdFx0XHRcdFx0XHRGaWVsZFxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbCBmbGV4LTEgZm9udC1ib2xkXCI+XG5cdFx0XHRcdFx0XHRcdFx0Q29sdW1uXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29sIGZsZXgtMSBmb250LWJvbGRcIj5cblx0XHRcdFx0XHRcdFx0XHREZWZhdWx0IFZhbHVlXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcblx0XHRcdFx0XHRcdDxjb21wb25lbnRcblx0XHRcdFx0XHRcdFx0di1pZj1cImxvYWRlZFwiXG5cdFx0XHRcdFx0XHRcdDppcz1cIm1vZCArICctbWFwcGluZydcIlxuXHRcdFx0XHRcdFx0XHQ6Z3JvdXA9XCJncm91cFwiPlxuXHRcdFx0XHRcdFx0PC9jb21wb25lbnQ+XG5cdFx0XHRcdFx0PC9wLWNhcmQ+XHRcblx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHsgbWFwR2V0dGVycywgbWFwQWN0aW9ucyB9IGZyb20gJ3Z1ZXgnXG5cdGltcG9ydCBVc2VyTWFwcGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ltcG9ydGVyL1VzZXJNYXBwaW5nLnZ1ZSdcblx0aW1wb3J0IE1hdHJpeE1hcHBpbmcgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9JbXBvcnRlci9NYXRyaXhNYXBwaW5nLnZ1ZSdcblx0aW1wb3J0IFRheG9ub215TWFwcGluZyBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ltcG9ydGVyL1RheG9ub215TWFwcGluZy52dWUnXG5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpZDogbnVsbCxcblx0XHRcdFx0bW9kOiBudWxsLFxuXHRcdFx0XHRncm91cDogMCxcblx0XHRcdFx0bG9hZGVkOiBmYWxzZVxuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRjb21wb25lbnRzOiB7XG5cdFx0XHQndXNlcnMtbWFwcGluZyc6IFVzZXJNYXBwaW5nLFxuXHRcdFx0J3RheG9ub21pZXMtbWFwcGluZyc6IFRheG9ub215TWFwcGluZyxcblx0XHRcdCdtYXRyaWNlcy1tYXBwaW5nJzogTWF0cml4TWFwcGluZyxcblx0XHR9LFxuXG5cdFx0Y29tcHV0ZWQ6IHtcblx0XHRcdC4uLm1hcEdldHRlcnMoe1xuXHRcdFx0XHRmb3JtTWFwcGluZ3M6ICdtYXBwZXIvZ2V0Rm9ybU1hcHBpbmdzJ1xuXHRcdFx0fSlcblx0XHR9LFxuXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0Li4ubWFwQWN0aW9ucyh7XG5cdFx0XHRcdHNldE1hcHBpbmdPcHRpb25zOiAnbWFwcGVyL3NldE1hcHBpbmdPcHRpb25zJyxcblx0XHRcdFx0c2V0Rm9ybU1hcHBpbmdzOiAnbWFwcGVyL3NldEZvcm1NYXBwaW5ncydcblx0XHRcdH0pLFxuXG5cdFx0XHRzdWJtaXQoKSB7XG5cdFx0XHRcdGF4aW9zLnBhdGNoKGAvYXBpL2ltcG9ydHMvbWFwcGluZy8ke3RoaXMuaWR9YCwge1xuICAgICAgICAgICAgICAgICAgICBtYXBwaW5nczogdGhpcy5mb3JtTWFwcGluZ3MsXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHR0b2FzdCgnSW1wb3J0IE1hcHBpbmcgc3VjY2Vzc2Z1bGx5IHNhdmVkJywgJ3N1Y2Nlc3MnKVxuXHRcdFx0XHR9KS5jYXRjaCgocmVzcG9uc2UpID0+IHtcblx0XHRcdFx0XHR0b2FzdChyZXNwb25zZS5tZXNzYWdlLCAnZmFpbGVkJylcblx0XHRcdFx0fSlcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0YmVmb3JlUm91dGVFbnRlcih0bywgZnJvbSwgbmV4dCkge1xuXHRcdFx0YXhpb3MuYWxsKFtcblx0XHRcdFx0YXhpb3MuZ2V0KGAvYXBpL2ltcG9ydHMvbWFwcGluZy8ke3RvLnBhcmFtcy5pbXBvcnRlcn1gKVxuXHRcdFx0XSkudGhlbihheGlvcy5zcHJlYWQoZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG5cdFx0XHRcdG5leHQoZnVuY3Rpb24gKHZtKSB7XG5cdFx0XHRcdFx0dm0uaWQgICAgPSByZXNwb25zZS5kYXRhLmRhdGEuaWRcblx0XHRcdFx0XHR2bS5tb2QgICA9IHJlc3BvbnNlLmRhdGEuZGF0YS5tb2R1bGVcblx0XHRcdFx0XHR2bS5ncm91cCA9IHJlc3BvbnNlLmRhdGEuZGF0YS5ncm91cFxuXG5cdFx0XHRcdFx0bGV0IG1hcHBpbmcgPSByZXNwb25zZS5kYXRhLmRhdGEubWFwcGluZ3MgfHwge31cblx0XHRcdFx0XHRsZXQgY29sdW1ucyA9IHJlc3BvbnNlLmRhdGEuZGF0YS5wcmV2aWV3WzBdXG5cdFx0XHRcdFx0bGV0IHByZXZpZXcgPSByZXNwb25zZS5kYXRhLmRhdGEucHJldmlld1sxXVxuXHRcdFx0XHRcdGxldCBvcHRPYmogID0gXy56aXBPYmplY3QoY29sdW1ucywgcHJldmlldylcblx0XHRcdFx0XHRsZXQgb3B0aW9ucyA9IF8ubWFwKG9wdE9iaiwgKGxhYmVsLCB2YWx1ZSkgPT4ge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0XHRcdFx0J2xhYmVsJzogYFske3ZhbHVlfV0gZWc6ICR7bGFiZWx9YCxcblx0XHRcdFx0XHRcdFx0J3ZhbHVlJzogdmFsdWVcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXG5cdFx0XHRcdFx0b3B0aW9ucy51bnNoaWZ0KHtcblx0XHRcdFx0XHRcdCdsYWJlbCc6ICdVc2UgZGVmYXVsdCcsXG5cdFx0XHRcdFx0XHQndmFsdWUnOiBudWxsXG5cdFx0XHRcdFx0fSlcblxuXHRcdFx0XHRcdG9wdGlvbnMudW5zaGlmdCh7XG5cdFx0XHRcdFx0XHQnbGFiZWwnOiAnRG9uXFwndCBpbXBvcnQnLFxuXHRcdFx0XHRcdFx0J3ZhbHVlJzogZmFsc2Vcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHZtLnNldE1hcHBpbmdPcHRpb25zKG9wdGlvbnMpXG5cdFx0XHRcdFx0dm0uc2V0Rm9ybU1hcHBpbmdzKG1hcHBpbmcpXG5cdFx0XHRcdFx0dm0ubG9hZGVkID0gdHJ1ZVxuXHRcdFx0XHR9KVxuXHRcdFx0fSkpXG5cdFx0fVxuXHR9XG48L3NjcmlwdD4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGZvcm1fX2dyb3VwIGl0ZW1zLWVuZFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCBmbGV4LTFcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ubWFwcGluZy5uYW1lKSB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5yZXF1aXJlZFxuICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMgdGV4dC13YXJuaW5nLTcwMCBmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcInJlcXVpcmVkXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaGVscFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJib3JkZXItbC00IHB4LTQgYmctc2Vjb25kYXJ5LTEwMCBib3JkZXItc2Vjb25kYXJ5LTUwMCB0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwiYWxlcnRcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwicFwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5oZWxwKSB9IH0pXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgZmxleC0xXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IF92bS5tYXBwaW5nLmhhbmRsZSArIFwiLWNvbHVtblwiLFxuICAgICAgICAgICAgb3B0aW9uczogX3ZtLm1hcHBpbmdPcHRpb25zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5tYXBwaW5nLmNvbHVtbixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm1hcHBpbmcsIFwiY29sdW1uXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1hcHBpbmcuY29sdW1uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCBmbGV4LTFcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXggaXRlbXMtc3RhcnRcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleC1ncm93IG1yLTNcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRleHQteHNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgZm9yOiBfdm0ubWFwcGluZy5oYW5kbGUgKyBcIi1waWNrclwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiUGlja2VyXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IGNsYXNzOiBfdm0ubWFwcGluZy5oYW5kbGUgKyBcIi1waWNrclwiIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgtZ3JvdyBtci0zXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogX3ZtLm1hcHBpbmcuaGFuZGxlICsgXCItaGV4XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCJIZXhcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uaGV4LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaGV4XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZvcm1fX2NvbnRyb2xcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIGlkOiBfdm0ubWFwcGluZy5oYW5kbGUgKyBcIi1oZXhcIixcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLm1hcHBpbmcuaGFuZGxlICsgXCItaGV4XCIsXG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5oZXggfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdm0uaGV4ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleC1ncm93XCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGZvcjogX3ZtLm1hcHBpbmcuaGFuZGxlICsgXCItcmdiYVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiUkdCQVwiKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5tYXBwaW5nLmRlZmF1bHQsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtYXBwaW5nLmRlZmF1bHRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZm9ybV9fY29udHJvbFwiLFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgaWQ6IF92bS5tYXBwaW5nLmhhbmRsZSArIFwiLXJnYmFcIixcbiAgICAgICAgICAgICAgbmFtZTogX3ZtLm1hcHBpbmcuaGFuZGxlICsgXCItcmdiYVwiLFxuICAgICAgICAgICAgICB0eXBlOiBcInRleHRcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ubWFwcGluZy5kZWZhdWx0IH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm1hcHBpbmcsIFwiZGVmYXVsdFwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGZvcm1fX2dyb3VwIGl0ZW1zLWVuZFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCBmbGV4LTFcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ubWFwcGluZy5uYW1lKSB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5yZXF1aXJlZFxuICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMgdGV4dC13YXJuaW5nLTcwMCBmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcInJlcXVpcmVkXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaGVscFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJib3JkZXItbC00IHB4LTQgYmctc2Vjb25kYXJ5LTEwMCBib3JkZXItc2Vjb25kYXJ5LTUwMCB0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwiYWxlcnRcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwicFwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5oZWxwKSB9IH0pXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgZmxleC0xXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IF92bS5tYXBwaW5nLmhhbmRsZSArIFwiLWNvbHVtblwiLFxuICAgICAgICAgICAgb3B0aW9uczogX3ZtLl9fbWFwcGluZ09wdGlvbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1hcHBpbmcuY29sdW1uLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubWFwcGluZywgXCJjb2x1bW5cIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWFwcGluZy5jb2x1bW5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxleCBpdGVtcy1zdGFydFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmbGV4LWdyb3cgbXItM1wiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm1hcHBpbmcuZGVmYXVsdCxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm1hcHBpbmcuZGVmYXVsdFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkYXRldGltZV9faW5wdXQgZm9ybV9fY29udHJvbCBtci0yXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBpZDogXCJmbGF0cGlja3JfXCIgKyBfdm0ubWFwcGluZy5oYW5kbGUsXG4gICAgICAgICAgICAgIG5hbWU6IF92bS5tYXBwaW5nLmhhbmRsZSArIFwiLXBpY2tyXCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0uc2V0dGluZ3MucGxhY2Vob2xkZXJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm1hcHBpbmcuZGVmYXVsdCB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5tYXBwaW5nLCBcImRlZmF1bHRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsZXgtZ3JvdyBtci0zXCIgfSwgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRhdGV0aW1lX19idXR0b24gYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBweC00XCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZmxhdHBpY2tyLm9wZW4oKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcImZhLWljb25cIiwgeyBhdHRyczogeyBpY29uOiBcImNhbGVuZGFyLWFsdFwiIH0gfSldLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGZvcm1fX2dyb3VwIGl0ZW1zLWVuZFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCBmbGV4LTFcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ubWFwcGluZy5uYW1lKSB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5yZXF1aXJlZFxuICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMgdGV4dC13YXJuaW5nLTcwMCBmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcInJlcXVpcmVkXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaGVscFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJib3JkZXItbC00IHB4LTQgYmctc2Vjb25kYXJ5LTEwMCBib3JkZXItc2Vjb25kYXJ5LTUwMCB0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwiYWxlcnRcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwicFwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5oZWxwKSB9IH0pXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgZmxleC0xXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IF92bS5tYXBwaW5nLmhhbmRsZSArIFwiLWNvbHVtblwiLFxuICAgICAgICAgICAgb3B0aW9uczogX3ZtLm1hcHBpbmdPcHRpb25zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5tYXBwaW5nLmNvbHVtbixcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm1hcHBpbmcsIFwiY29sdW1uXCIsICQkdilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1hcHBpbmcuY29sdW1uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBmbGV4LTFcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInAtaW5wdXRcIiwge1xuICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IF92bS5tYXBwaW5nLmhhbmRsZSArIFwiLWRlZmF1bHRcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1hcHBpbmcuZGVmYXVsdCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLm1hcHBpbmcsIFwiZGVmYXVsdFwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtYXBwaW5nLmRlZmF1bHRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgZm9ybV9fZ3JvdXAgaXRlbXMtZW5kXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMVwiIH0sIFtcbiAgICAgIF9jKFwibGFiZWxcIiwgeyBkb21Qcm9wczogeyB0ZXh0Q29udGVudDogX3ZtLl9zKF92bS5tYXBwaW5nLm5hbWUpIH0gfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnJlcXVpcmVkXG4gICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dC14cyB0ZXh0LXdhcm5pbmctNzAwIGZsb2F0LXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwicmVxdWlyZWRcIilcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5oZWxwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICBcImJvcmRlci1sLTQgcHgtNCBiZy1zZWNvbmRhcnktMTAwIGJvcmRlci1zZWNvbmRhcnktNTAwIHRleHQteHNcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJhbGVydFwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX2MoXCJwXCIsIHsgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmhlbHApIH0gfSldXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbCBmbGV4LTFcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInAtc2VsZWN0XCIsIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZTogX3ZtLm1hcHBpbmcuaGFuZGxlICsgXCItY29sdW1uXCIsXG4gICAgICAgICAgICBvcHRpb25zOiBfdm0uX19tYXBwaW5nT3B0aW9uc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubWFwcGluZy5jb2x1bW4sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5tYXBwaW5nLCBcImNvbHVtblwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtYXBwaW5nLmNvbHVtblwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgZmxleC0xXCIgfSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGZvcm1fX2dyb3VwIGl0ZW1zLWVuZFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbCBmbGV4LTFcIiB9LCBbXG4gICAgICBfYyhcImxhYmVsXCIsIHsgZG9tUHJvcHM6IHsgdGV4dENvbnRlbnQ6IF92bS5fcyhfdm0ubWFwcGluZy5uYW1lKSB9IH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5yZXF1aXJlZFxuICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHQteHMgdGV4dC13YXJuaW5nLTcwMCBmbG9hdC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcInJlcXVpcmVkXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uaGVscFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgXCJib3JkZXItbC00IHB4LTQgYmctc2Vjb25kYXJ5LTEwMCBib3JkZXItc2Vjb25kYXJ5LTUwMCB0ZXh0LXhzXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwiYWxlcnRcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW19jKFwicFwiLCB7IGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5oZWxwKSB9IH0pXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgZmxleC0xXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IF92bS5tYXBwaW5nLmhhbmRsZSArIFwiLWNvbHVtblwiLFxuICAgICAgICAgICAgb3B0aW9uczogX3ZtLl9fbWFwcGluZ09wdGlvbnNcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1hcHBpbmcuY29sdW1uLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uJHNldChfdm0ubWFwcGluZywgXCJjb2x1bW5cIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWFwcGluZy5jb2x1bW5cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5fbSgwKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgZmxleC0xXCIgfSwgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiYm9yZGVyLWwtNCBweC00IGJnLXdhcm5pbmctMTAwIGJvcmRlci13YXJuaW5nLTUwMCB0ZXh0LXhzXCIsXG4gICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJhbGVydFwiIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiVGhpcyBpcyB0aGUgcHJpbWFyeSBJRCB1c2VkIGZvciBtb2RpZnlpbmcgZXhpc3RpbmcgY29udGVudC4gTGVhdmUgYmxhbmsgZm9yIG5ldyByZWNvcmRzLlwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBmb3JtX19ncm91cCBpdGVtcy1lbmRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgZmxleC0xXCIgfSwgW1xuICAgICAgX2MoXCJsYWJlbFwiLCB7IGRvbVByb3BzOiB7IHRleHRDb250ZW50OiBfdm0uX3MoX3ZtLm1hcHBpbmcubmFtZSkgfSB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ucmVxdWlyZWRcbiAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0LXhzIHRleHQtd2FybmluZy03MDAgZmxvYXQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJyZXF1aXJlZFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmhlbHBcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgIFwiYm9yZGVyLWwtNCBweC00IGJnLXNlY29uZGFyeS0xMDAgYm9yZGVyLXNlY29uZGFyeS01MDAgdGV4dC14c1wiLFxuICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcImFsZXJ0XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInBcIiwgeyBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uaGVscCkgfSB9KV1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMVwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicC1zZWxlY3RcIiwge1xuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBfdm0ubWFwcGluZy5oYW5kbGUgKyBcIi1jb2x1bW5cIixcbiAgICAgICAgICAgIG9wdGlvbnM6IF92bS5tYXBwaW5nT3B0aW9uc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubWFwcGluZy5jb2x1bW4sXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5tYXBwaW5nLCBcImNvbHVtblwiLCAkJHYpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtYXBwaW5nLmNvbHVtblwiXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wgZmxleC0xXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwLXNlbGVjdFwiLCB7XG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IF92bS5tYXBwaW5nLmhhbmRsZSArIFwiLWRlZmF1bHRcIixcbiAgICAgICAgICAgIG9wdGlvbnM6IF92bS5zZXR0aW5ncy5vcHRpb25zXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5tYXBwaW5nLmRlZmF1bHQsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS4kc2V0KF92bS5tYXBwaW5nLCBcImRlZmF1bHRcIiwgJCR2KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWFwcGluZy5kZWZhdWx0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwicG9ydGFsXCIsXG4gICAgICAgIHsgYXR0cnM6IHsgdG86IFwidGl0bGVcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImFwcC10aXRsZVwiLCB7IGF0dHJzOiB7IGljb246IFwic2hpcFwiIH0gfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiTWFwcGluZyBmb3IgVGF4b25vbXkgSW1wb3J0XCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLmZpZWxkcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZmllbGQtXCIgKyBmaWVsZC5jb21wb25lbnQsIHtcbiAgICAgICAgICBrZXk6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgdGFnOiBcImNvbXBvbmVudFwiLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICBuYW1lOiBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IGZpZWxkLnJlcXVpcmVkLFxuICAgICAgICAgICAgaGVscDogZmllbGQuaGVscCxcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogZmllbGQuZGVmYXVsdCxcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zOiBmaWVsZC5vcHRpb25zXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJzaGlwXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJNYXBwaW5nIGZvciBUYXhvbm9teSBJbXBvcnRcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICByZXR1cm4gX2MoXCJmaWVsZC1cIiArIGZpZWxkLmNvbXBvbmVudCwge1xuICAgICAgICAgIGtleTogZmllbGQubmFtZSxcbiAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICByZXF1aXJlZDogZmllbGQucmVxdWlyZWQsXG4gICAgICAgICAgICBoZWxwOiBmaWVsZC5oZWxwLFxuICAgICAgICAgICAgc2V0dGluZ3M6IGZpZWxkLnNldHRpbmdzXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJwb3J0YWxcIixcbiAgICAgICAgeyBhdHRyczogeyB0bzogXCJ0aXRsZVwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYXBwLXRpdGxlXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJzaGlwXCIgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCJNYXBwaW5nIGZvciBVc2VycyBJbXBvcnRcIilcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uZmllbGRzLCBmdW5jdGlvbihmaWVsZCkge1xuICAgICAgICByZXR1cm4gX2MoXCJmaWVsZC1cIiArIGZpZWxkLmNvbXBvbmVudCwge1xuICAgICAgICAgIGtleTogZmllbGQubmFtZSxcbiAgICAgICAgICB0YWc6IFwiY29tcG9uZW50XCIsXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWU6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICByZXF1aXJlZDogZmllbGQucmVxdWlyZWQsXG4gICAgICAgICAgICBoZWxwOiBmaWVsZC5oZWxwLFxuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnM6IGZpZWxkLm9wdGlvbnNcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInBvcnRhbFwiLFxuICAgICAgICB7IGF0dHJzOiB7IHRvOiBcImFjdGlvbnNcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwicm91dGVyLWxpbmtcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIG1yLTNcIiwgYXR0cnM6IHsgdG86IHsgbmFtZTogXCJpbXBvcnRlclwiIH0gfSB9LFxuICAgICAgICAgICAgW192bS5fdihcIkdvIEJhY2tcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInN1Ym1pdFwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwiU2F2ZVwiKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1jb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImZvcm1cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3VibWl0KCRldmVudClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwicC1jYXJkXCIsXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgYm9yZGVyLWIgbWItM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgZmxleC0xIGZvbnQtYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRGaWVsZFxcblxcdFxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wgZmxleC0xIGZvbnQtYm9sZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG5cXHRcXHRcXHRcXHRcXHRcXHRcXHRDb2x1bW5cXG5cXHRcXHRcXHRcXHRcXHRcXHRcIilcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sIGZsZXgtMSBmb250LWJvbGRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0RGVmYXVsdCBWYWx1ZVxcblxcdFxcdFxcdFxcdFxcdFxcdFwiKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRlZFxuICAgICAgICAgICAgICAgICAgICA/IF9jKF92bS5tb2QgKyBcIi1tYXBwaW5nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhZzogXCJjb21wb25lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGdyb3VwOiBfdm0uZ3JvdXAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Db2xvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIyMjkzZTImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQ29sb3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db2xvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzJiMjI5M2UyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzJiMjI5M2UyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzJiMjI5M2UyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db2xvci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmIyMjkzZTImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmIyMjkzZTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9Db2xvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db2xvci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQ29sb3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiMjI5M2UyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9EYXRlVGltZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGU4OGYyYzImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vRGF0ZVRpbWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9EYXRlVGltZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRlODhmMmMyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRlODhmMmMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRlODhmMmMyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9EYXRlVGltZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGU4OGYyYzImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGU4OGYyYzInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9EYXRlVGltZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0RhdGVUaW1lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9EYXRlVGltZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRGF0ZVRpbWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlODhmMmMyJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9JbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGJjYjVhMTQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9JbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRiY2I1YTE0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRiY2I1YTE0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRiY2I1YTE0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9JbnB1dC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGJjYjVhMTQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGJjYjVhMTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9JbnB1dC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0lucHV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9JbnB1dC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vSW5wdXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRiY2I1YTE0JlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9Ob25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNjRhNzQ4OCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Ob25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vTm9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9Vc2Vycy9zaGFuZWtyb2xpa293c2tpL0NvZGUvZnVzaW9uY21zLXY2L25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA2NGE3NDg4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA2NGE3NDg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA2NGE3NDg4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ob25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNjRhNzQ4OCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwNjRhNzQ4OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvRmllbGRzL05vbmUudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ob25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNjRhNzQ4OCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUHJpbWFyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGI2NWNmYTQmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUHJpbWFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1ByaW1hcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbmNtcy12Ni9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0YjY1Y2ZhNCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0YjY1Y2ZhNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0YjY1Y2ZhNCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJpbWFyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGI2NWNmYTQmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGI2NWNmYTQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9QcmltYXJ5LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJpbWFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJpbWFyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJpbWFyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGI2NWNmYTQmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1NlbGVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTMxNTAzMDAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoYW5la3JvbGlrb3dza2kvQ29kZS9mdXNpb25jbXMtdjYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnOTMxNTAzMDAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnOTMxNTAzMDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnOTMxNTAzMDAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NlbGVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9OTMxNTAzMDAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignOTMxNTAzMDAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL0ZpZWxkcy9TZWxlY3QudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9TZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1NlbGVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2VsZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD05MzE1MDMwMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWF0cml4TWFwcGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBlMmQ0Y2EmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWF0cml4TWFwcGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01hdHJpeE1hcHBpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbmNtcy12Ni9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyMGUyZDRjYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyMGUyZDRjYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyMGUyZDRjYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWF0cml4TWFwcGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjBlMmQ0Y2EmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMjBlMmQ0Y2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9jb21wb25lbnRzL0ltcG9ydGVyL01hdHJpeE1hcHBpbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXRyaXhNYXBwaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXRyaXhNYXBwaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9NYXRyaXhNYXBwaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yMGUyZDRjYSZcIiIsImltcG9ydCB7IG1hcEdldHRlcnMsIG1hcEFjdGlvbnMgfSBmcm9tICd2dWV4J1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdHByb3BzOiAge1xuXHRcdG5hbWU6IHtcblx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdHJlcXVpcmVkOiB0cnVlXG5cdFx0fSxcblxuICAgICAgICBoZWxwOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogZmFsc2UsXG4gICAgICAgICAgICBkZWZhdWx0OiAnJ1xuICAgICAgICB9LFxuXG5cdFx0cmVxdWlyZWQ6IHtcblx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRyZXF1aXJlZDogZmFsc2UsXG5cdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdH0sXG5cblx0XHRzZXR0aW5nczoge1xuXHRcdFx0dHlwZTogT2JqZWN0LFxuXHRcdFx0ZXF1aXJlZDogZmFsc2UsXG5cdFx0XHRkZWZhdWx0OiAoKSA9PiB7XG5cdFx0XHRcdHJldHVybiB7fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRjb21wdXRlZDoge1xuXHRcdC4uLm1hcEdldHRlcnMoe1xuXHRcdFx0bWFwcGluZ09wdGlvbnM6ICdtYXBwZXIvZ2V0TWFwcGluZ09wdGlvbnMnLFxuXHRcdFx0bWFwcGluZ3M6ICdtYXBwZXIvZ2V0Rm9ybU1hcHBpbmdzJ1xuXHRcdH0pLFxuXG5cdFx0aGFuZGxlOiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBfLmtlYmFiQ2FzZSh0aGlzLm5hbWUpXG5cdFx0fSxcblxuXHRcdG1hcHBpbmc6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHRoaXMubWFwcGluZ3NbdGhpcy5oYW5kbGVdXG5cdFx0fVxuXHR9LFxuXG5cdG1ldGhvZHM6IHtcblx0XHQuLi5tYXBBY3Rpb25zKHtcblx0XHRcdHNldEZvcm1NYXBwaW5nOiAnbWFwcGVyL3NldEZvcm1NYXBwaW5nJ1xuXHRcdH0pXG5cdH0sXG5cblx0Y3JlYXRlZCgpIHtcblx0XHRpZiAoISBfLmhhcyh0aGlzLm1hcHBpbmdzLCB0aGlzLmhhbmRsZSkpIHtcblx0XHRcdHRoaXMuc2V0Rm9ybU1hcHBpbmcoe1xuXHRcdFx0XHRuYW1lOiAgICAgdGhpcy5uYW1lLFxuXHRcdFx0XHRoYW5kbGU6ICAgdGhpcy5oYW5kbGUsXG5cdFx0XHRcdGNvbHVtbjogICB0aGlzLmhhbmRsZSxcblx0XHRcdFx0cmVxdWlyZWQ6IHRoaXMucmVxdWlyZWQsXG5cdFx0XHRcdGRlZmF1bHQ6ICAoXy5oYXModGhpcy5zZXR0aW5ncywgJ2RlZmF1bHQnKSA/IHRoaXMuc2V0dGluZ3MuZGVmYXVsdCA6IG51bGwpXG5cdFx0XHR9KVxuXHRcdH1cblx0fVxufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vVGF4b25vbXlNYXBwaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTAzZWFlYSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9UYXhvbm9teU1hcHBpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9UYXhvbm9teU1hcHBpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbmNtcy12Ni9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczNTAzZWFlYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczNTAzZWFlYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczNTAzZWFlYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vVGF4b25vbXlNYXBwaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zNTAzZWFlYSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczNTAzZWFlYScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvVGF4b25vbXlNYXBwaW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVGF4b25vbXlNYXBwaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UYXhvbm9teU1hcHBpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RheG9ub215TWFwcGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzUwM2VhZWEmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1VzZXJNYXBwaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMDVhYTY1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9Vc2VyTWFwcGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1VzZXJNYXBwaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL1VzZXJzL3NoYW5la3JvbGlrb3dza2kvQ29kZS9mdXNpb25jbXMtdjYvbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzA1YWE2NWUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzA1YWE2NWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzA1YWE2NWUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1VzZXJNYXBwaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMDVhYTY1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMDVhYTY1ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2NvbXBvbmVudHMvSW1wb3J0ZXIvVXNlck1hcHBpbmcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Vc2VyTWFwcGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vVXNlck1hcHBpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1VzZXJNYXBwaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMDVhYTY1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vTWFwcGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzk5NGIzNTAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vTWFwcGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL01hcHBpbmcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvc2hhbmVrcm9saWtvd3NraS9Db2RlL2Z1c2lvbmNtcy12Ni9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3OTk0YjM1MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3OTk0YjM1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3OTk0YjM1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vTWFwcGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzk5NGIzNTAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzk5NGIzNTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy92aWV3cy9JbXBvcnRlci9NYXBwaW5nLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFwcGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFwcGluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vTWFwcGluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Nzk5NGIzNTAmXCIiXSwic291cmNlUm9vdCI6IiJ9