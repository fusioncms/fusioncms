/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@efelle/proton/dist/proton.js":
/*!****************************************************!*\
  !*** ./node_modules/@efelle/proton/dist/proton.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){if(true)module.exports=t();else { var r, n; }}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=143)}([function(e,t,n){(function(e){e.exports=function(){"use strict";var t,r;function a(){return t.apply(null,arguments)}function i(e){return e instanceof Array||"[object Array]"===Object.prototype.toString.call(e)}function s(e){return null!=e&&"[object Object]"===Object.prototype.toString.call(e)}function o(e){return void 0===e}function u(e){return"number"==typeof e||"[object Number]"===Object.prototype.toString.call(e)}function l(e){return e instanceof Date||"[object Date]"===Object.prototype.toString.call(e)}function d(e,t){var n,r=[];for(n=0;n<e.length;++n)r.push(t(e[n],n));return r}function c(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function h(e,t){for(var n in t)c(t,n)&&(e[n]=t[n]);return c(t,"toString")&&(e.toString=t.toString),c(t,"valueOf")&&(e.valueOf=t.valueOf),e}function _(e,t,n,r){return xt(e,t,n,r,!0).utc()}function f(e){return null==e._pf&&(e._pf={empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],meridiem:null,rfc2822:!1,weekdayMismatch:!1}),e._pf}function m(e){if(null==e._isValid){var t=f(e),n=r.call(t.parsedDateParts,function(e){return null!=e}),a=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(a=a&&0===t.charsLeftOver&&0===t.unusedTokens.length&&void 0===t.bigHour),null!=Object.isFrozen&&Object.isFrozen(e))return a;e._isValid=a}return e._isValid}function p(e){var t=_(NaN);return null!=e?h(f(t),e):f(t).userInvalidated=!0,t}r=Array.prototype.some?Array.prototype.some:function(e){for(var t=Object(this),n=t.length>>>0,r=0;r<n;r++)if(r in t&&e.call(this,t[r],r,t))return!0;return!1};var y=a.momentProperties=[];function g(e,t){var n,r,a;if(o(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),o(t._i)||(e._i=t._i),o(t._f)||(e._f=t._f),o(t._l)||(e._l=t._l),o(t._strict)||(e._strict=t._strict),o(t._tzm)||(e._tzm=t._tzm),o(t._isUTC)||(e._isUTC=t._isUTC),o(t._offset)||(e._offset=t._offset),o(t._pf)||(e._pf=f(t)),o(t._locale)||(e._locale=t._locale),y.length>0)for(n=0;n<y.length;n++)r=y[n],o(a=t[r])||(e[r]=a);return e}var v=!1;function M(e){g(this,e),this._d=new Date(null!=e._d?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),!1===v&&(v=!0,a.updateOffset(this),v=!1)}function L(e){return e instanceof M||null!=e&&null!=e._isAMomentObject}function b(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function Y(e){var t=+e,n=0;return 0!==t&&isFinite(t)&&(n=b(t)),n}function w(e,t,n){var r,a=Math.min(e.length,t.length),i=Math.abs(e.length-t.length),s=0;for(r=0;r<a;r++)(n&&e[r]!==t[r]||!n&&Y(e[r])!==Y(t[r]))&&s++;return s+i}function k(e){!1===a.suppressDeprecationWarnings&&"undefined"!=typeof console&&console.warn&&console.warn("Deprecation warning: "+e)}function D(e,t){var n=!0;return h(function(){if(null!=a.deprecationHandler&&a.deprecationHandler(null,e),n){for(var r,i=[],s=0;s<arguments.length;s++){if(r="","object"==typeof arguments[s]){for(var o in r+="\n["+s+"] ",arguments[0])r+=o+": "+arguments[0][o]+", ";r=r.slice(0,-2)}else r=arguments[s];i.push(r)}k(e+"\nArguments: "+Array.prototype.slice.call(i).join("")+"\n"+(new Error).stack),n=!1}return t.apply(this,arguments)},t)}var T,S={};function x(e,t){null!=a.deprecationHandler&&a.deprecationHandler(e,t),S[e]||(k(t),S[e]=!0)}function j(e){return e instanceof Function||"[object Function]"===Object.prototype.toString.call(e)}function O(e,t){var n,r=h({},e);for(n in t)c(t,n)&&(s(e[n])&&s(t[n])?(r[n]={},h(r[n],e[n]),h(r[n],t[n])):null!=t[n]?r[n]=t[n]:delete r[n]);for(n in e)c(e,n)&&!c(t,n)&&s(e[n])&&(r[n]=h({},r[n]));return r}function E(e){null!=e&&this.set(e)}a.suppressDeprecationWarnings=!1,a.deprecationHandler=null,T=Object.keys?Object.keys:function(e){var t,n=[];for(t in e)c(e,t)&&n.push(t);return n};var H={};function P(e,t){var n=e.toLowerCase();H[n]=H[n+"s"]=H[t]=e}function C(e){return"string"==typeof e?H[e]||H[e.toLowerCase()]:void 0}function A(e){var t,n,r={};for(n in e)c(e,n)&&(t=C(n))&&(r[t]=e[n]);return r}var F={};function W(e,t){F[e]=t}function N(e,t,n){var r=""+Math.abs(e),a=t-r.length,i=e>=0;return(i?n?"+":"":"-")+Math.pow(10,Math.max(0,a)).toString().substr(1)+r}var z=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,I=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,R={},B={};function q(e,t,n,r){var a=r;"string"==typeof r&&(a=function(){return this[r]()}),e&&(B[e]=a),t&&(B[t[0]]=function(){return N(a.apply(this,arguments),t[1],t[2])}),n&&(B[n]=function(){return this.localeData().ordinal(a.apply(this,arguments),e)})}function U(e,t){return e.isValid()?(t=$(t,e.localeData()),R[t]=R[t]||function(e){var t,n,r,a=e.match(z);for(t=0,n=a.length;t<n;t++)B[a[t]]?a[t]=B[a[t]]:a[t]=(r=a[t]).match(/\[[\s\S]/)?r.replace(/^\[|\]$/g,""):r.replace(/\\/g,"");return function(t){var r,i="";for(r=0;r<n;r++)i+=j(a[r])?a[r].call(t,e):a[r];return i}}(t),R[t](e)):e.localeData().invalidDate()}function $(e,t){var n=5;function r(e){return t.longDateFormat(e)||e}for(I.lastIndex=0;n>=0&&I.test(e);)e=e.replace(I,r),I.lastIndex=0,n-=1;return e}var J=/\d/,V=/\d\d/,G=/\d{3}/,X=/\d{4}/,Z=/[+-]?\d{6}/,K=/\d\d?/,Q=/\d\d\d\d?/,ee=/\d\d\d\d\d\d?/,te=/\d{1,3}/,ne=/\d{1,4}/,re=/[+-]?\d{1,6}/,ae=/\d+/,ie=/[+-]?\d+/,se=/Z|[+-]\d\d:?\d\d/gi,oe=/Z|[+-]\d\d(?::?\d\d)?/gi,ue=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,le={};function de(e,t,n){le[e]=j(t)?t:function(e,r){return e&&n?n:t}}function ce(e,t){return c(le,e)?le[e](t._strict,t._locale):new RegExp(he(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(e,t,n,r,a){return t||n||r||a})))}function he(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var _e={};function fe(e,t){var n,r=t;for("string"==typeof e&&(e=[e]),u(t)&&(r=function(e,n){n[t]=Y(e)}),n=0;n<e.length;n++)_e[e[n]]=r}function me(e,t){fe(e,function(e,n,r,a){r._w=r._w||{},t(e,r._w,r,a)})}function pe(e,t,n){null!=t&&c(_e,e)&&_e[e](t,n._a,n,e)}var ye=0,ge=1,ve=2,Me=3,Le=4,be=5,Ye=6,we=7,ke=8;function De(e){return Te(e)?366:365}function Te(e){return e%4==0&&e%100!=0||e%400==0}q("Y",0,0,function(){var e=this.year();return e<=9999?""+e:"+"+e}),q(0,["YY",2],0,function(){return this.year()%100}),q(0,["YYYY",4],0,"year"),q(0,["YYYYY",5],0,"year"),q(0,["YYYYYY",6,!0],0,"year"),P("year","y"),W("year",1),de("Y",ie),de("YY",K,V),de("YYYY",ne,X),de("YYYYY",re,Z),de("YYYYYY",re,Z),fe(["YYYYY","YYYYYY"],ye),fe("YYYY",function(e,t){t[ye]=2===e.length?a.parseTwoDigitYear(e):Y(e)}),fe("YY",function(e,t){t[ye]=a.parseTwoDigitYear(e)}),fe("Y",function(e,t){t[ye]=parseInt(e,10)}),a.parseTwoDigitYear=function(e){return Y(e)+(Y(e)>68?1900:2e3)};var Se,xe=je("FullYear",!0);function je(e,t){return function(n){return null!=n?(Ee(this,e,n),a.updateOffset(this,t),this):Oe(this,e)}}function Oe(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function Ee(e,t,n){e.isValid()&&!isNaN(n)&&("FullYear"===t&&Te(e.year())&&1===e.month()&&29===e.date()?e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),He(n,e.month())):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function He(e,t){if(isNaN(e)||isNaN(t))return NaN;var n,r=(t%(n=12)+n)%n;return e+=(t-r)/12,1===r?Te(e)?29:28:31-r%7%2}Se=Array.prototype.indexOf?Array.prototype.indexOf:function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1},q("M",["MM",2],"Mo",function(){return this.month()+1}),q("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)}),q("MMMM",0,0,function(e){return this.localeData().months(this,e)}),P("month","M"),W("month",8),de("M",K),de("MM",K,V),de("MMM",function(e,t){return t.monthsShortRegex(e)}),de("MMMM",function(e,t){return t.monthsRegex(e)}),fe(["M","MM"],function(e,t){t[ge]=Y(e)-1}),fe(["MMM","MMMM"],function(e,t,n,r){var a=n._locale.monthsParse(e,r,n._strict);null!=a?t[ge]=a:f(n).invalidMonth=e});var Pe=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Ce="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),Ae="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");function Fe(e,t){var n;if(!e.isValid())return e;if("string"==typeof t)if(/^\d+$/.test(t))t=Y(t);else if(!u(t=e.localeData().monthsParse(t)))return e;return n=Math.min(e.date(),He(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function We(e){return null!=e?(Fe(this,e),a.updateOffset(this,!0),this):Oe(this,"Month")}var Ne=ue,ze=ue;function Ie(){function e(e,t){return t.length-e.length}var t,n,r=[],a=[],i=[];for(t=0;t<12;t++)n=_([2e3,t]),r.push(this.monthsShort(n,"")),a.push(this.months(n,"")),i.push(this.months(n,"")),i.push(this.monthsShort(n,""));for(r.sort(e),a.sort(e),i.sort(e),t=0;t<12;t++)r[t]=he(r[t]),a[t]=he(a[t]);for(t=0;t<24;t++)i[t]=he(i[t]);this._monthsRegex=new RegExp("^("+i.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+r.join("|")+")","i")}function Re(e){var t=new Date(Date.UTC.apply(null,arguments));return e<100&&e>=0&&isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e),t}function Be(e,t,n){var r=7+t-n,a=(7+Re(e,0,r).getUTCDay()-t)%7;return-a+r-1}function qe(e,t,n,r,a){var i,s,o=(7+n-r)%7,u=Be(e,r,a),l=1+7*(t-1)+o+u;return l<=0?s=De(i=e-1)+l:l>De(e)?(i=e+1,s=l-De(e)):(i=e,s=l),{year:i,dayOfYear:s}}function Ue(e,t,n){var r,a,i=Be(e.year(),t,n),s=Math.floor((e.dayOfYear()-i-1)/7)+1;return s<1?(a=e.year()-1,r=s+$e(a,t,n)):s>$e(e.year(),t,n)?(r=s-$e(e.year(),t,n),a=e.year()+1):(a=e.year(),r=s),{week:r,year:a}}function $e(e,t,n){var r=Be(e,t,n),a=Be(e+1,t,n);return(De(e)-r+a)/7}q("w",["ww",2],"wo","week"),q("W",["WW",2],"Wo","isoWeek"),P("week","w"),P("isoWeek","W"),W("week",5),W("isoWeek",5),de("w",K),de("ww",K,V),de("W",K),de("WW",K,V),me(["w","ww","W","WW"],function(e,t,n,r){t[r.substr(0,1)]=Y(e)}),q("d",0,"do","day"),q("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)}),q("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)}),q("dddd",0,0,function(e){return this.localeData().weekdays(this,e)}),q("e",0,0,"weekday"),q("E",0,0,"isoWeekday"),P("day","d"),P("weekday","e"),P("isoWeekday","E"),W("day",11),W("weekday",11),W("isoWeekday",11),de("d",K),de("e",K),de("E",K),de("dd",function(e,t){return t.weekdaysMinRegex(e)}),de("ddd",function(e,t){return t.weekdaysShortRegex(e)}),de("dddd",function(e,t){return t.weekdaysRegex(e)}),me(["dd","ddd","dddd"],function(e,t,n,r){var a=n._locale.weekdaysParse(e,r,n._strict);null!=a?t.d=a:f(n).invalidWeekday=e}),me(["d","e","E"],function(e,t,n,r){t[r]=Y(e)});var Je="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),Ve="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),Ge="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),Xe=ue,Ze=ue,Ke=ue;function Qe(){function e(e,t){return t.length-e.length}var t,n,r,a,i,s=[],o=[],u=[],l=[];for(t=0;t<7;t++)n=_([2e3,1]).day(t),r=this.weekdaysMin(n,""),a=this.weekdaysShort(n,""),i=this.weekdays(n,""),s.push(r),o.push(a),u.push(i),l.push(r),l.push(a),l.push(i);for(s.sort(e),o.sort(e),u.sort(e),l.sort(e),t=0;t<7;t++)o[t]=he(o[t]),u[t]=he(u[t]),l[t]=he(l[t]);this._weekdaysRegex=new RegExp("^("+l.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+u.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+o.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+s.join("|")+")","i")}function et(){return this.hours()%12||12}function tt(e,t){q(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}function nt(e,t){return t._meridiemParse}q("H",["HH",2],0,"hour"),q("h",["hh",2],0,et),q("k",["kk",2],0,function(){return this.hours()||24}),q("hmm",0,0,function(){return""+et.apply(this)+N(this.minutes(),2)}),q("hmmss",0,0,function(){return""+et.apply(this)+N(this.minutes(),2)+N(this.seconds(),2)}),q("Hmm",0,0,function(){return""+this.hours()+N(this.minutes(),2)}),q("Hmmss",0,0,function(){return""+this.hours()+N(this.minutes(),2)+N(this.seconds(),2)}),tt("a",!0),tt("A",!1),P("hour","h"),W("hour",13),de("a",nt),de("A",nt),de("H",K),de("h",K),de("k",K),de("HH",K,V),de("hh",K,V),de("kk",K,V),de("hmm",Q),de("hmmss",ee),de("Hmm",Q),de("Hmmss",ee),fe(["H","HH"],Me),fe(["k","kk"],function(e,t,n){var r=Y(e);t[Me]=24===r?0:r}),fe(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e}),fe(["h","hh"],function(e,t,n){t[Me]=Y(e),f(n).bigHour=!0}),fe("hmm",function(e,t,n){var r=e.length-2;t[Me]=Y(e.substr(0,r)),t[Le]=Y(e.substr(r)),f(n).bigHour=!0}),fe("hmmss",function(e,t,n){var r=e.length-4,a=e.length-2;t[Me]=Y(e.substr(0,r)),t[Le]=Y(e.substr(r,2)),t[be]=Y(e.substr(a)),f(n).bigHour=!0}),fe("Hmm",function(e,t,n){var r=e.length-2;t[Me]=Y(e.substr(0,r)),t[Le]=Y(e.substr(r))}),fe("Hmmss",function(e,t,n){var r=e.length-4,a=e.length-2;t[Me]=Y(e.substr(0,r)),t[Le]=Y(e.substr(r,2)),t[be]=Y(e.substr(a))});var rt,at=je("Hours",!0),it={calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},longDateFormat:{LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},invalidDate:"Invalid date",ordinal:"%d",dayOfMonthOrdinalParse:/\d{1,2}/,relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},months:Ce,monthsShort:Ae,week:{dow:0,doy:6},weekdays:Je,weekdaysMin:Ge,weekdaysShort:Ve,meridiemParse:/[ap]\.?m?\.?/i},st={},ot={};function ut(e){return e?e.toLowerCase().replace("_","-"):e}function lt(t){var r=null;if(!st[t]&&void 0!==e&&e&&e.exports)try{r=rt._abbr,n(170)("./"+t),dt(r)}catch(e){}return st[t]}function dt(e,t){var n;return e&&((n=o(t)?ht(e):ct(e,t))?rt=n:"undefined"!=typeof console&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),rt._abbr}function ct(e,t){if(null!==t){var n,r=it;if(t.abbr=e,null!=st[e])x("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),r=st[e]._config;else if(null!=t.parentLocale)if(null!=st[t.parentLocale])r=st[t.parentLocale]._config;else{if(null==(n=lt(t.parentLocale)))return ot[t.parentLocale]||(ot[t.parentLocale]=[]),ot[t.parentLocale].push({name:e,config:t}),null;r=n._config}return st[e]=new E(O(r,t)),ot[e]&&ot[e].forEach(function(e){ct(e.name,e.config)}),dt(e),st[e]}return delete st[e],null}function ht(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return rt;if(!i(e)){if(t=lt(e))return t;e=[e]}return function(e){for(var t,n,r,a,i=0;i<e.length;){for(a=ut(e[i]).split("-"),t=a.length,n=(n=ut(e[i+1]))?n.split("-"):null;t>0;){if(r=lt(a.slice(0,t).join("-")))return r;if(n&&n.length>=t&&w(a,n,!0)>=t-1)break;t--}i++}return rt}(e)}function _t(e){var t,n=e._a;return n&&-2===f(e).overflow&&(t=n[ge]<0||n[ge]>11?ge:n[ve]<1||n[ve]>He(n[ye],n[ge])?ve:n[Me]<0||n[Me]>24||24===n[Me]&&(0!==n[Le]||0!==n[be]||0!==n[Ye])?Me:n[Le]<0||n[Le]>59?Le:n[be]<0||n[be]>59?be:n[Ye]<0||n[Ye]>999?Ye:-1,f(e)._overflowDayOfYear&&(t<ye||t>ve)&&(t=ve),f(e)._overflowWeeks&&-1===t&&(t=we),f(e)._overflowWeekday&&-1===t&&(t=ke),f(e).overflow=t),e}function ft(e,t,n){return null!=e?e:null!=t?t:n}function mt(e){var t,n,r,i,s,o=[];if(!e._d){for(r=function(e){var t=new Date(a.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}(e),e._w&&null==e._a[ve]&&null==e._a[ge]&&function(e){var t,n,r,a,i,s,o,u;if(null!=(t=e._w).GG||null!=t.W||null!=t.E)i=1,s=4,n=ft(t.GG,e._a[ye],Ue(jt(),1,4).year),r=ft(t.W,1),((a=ft(t.E,1))<1||a>7)&&(u=!0);else{i=e._locale._week.dow,s=e._locale._week.doy;var l=Ue(jt(),i,s);n=ft(t.gg,e._a[ye],l.year),r=ft(t.w,l.week),null!=t.d?((a=t.d)<0||a>6)&&(u=!0):null!=t.e?(a=t.e+i,(t.e<0||t.e>6)&&(u=!0)):a=i}r<1||r>$e(n,i,s)?f(e)._overflowWeeks=!0:null!=u?f(e)._overflowWeekday=!0:(o=qe(n,r,a,i,s),e._a[ye]=o.year,e._dayOfYear=o.dayOfYear)}(e),null!=e._dayOfYear&&(s=ft(e._a[ye],r[ye]),(e._dayOfYear>De(s)||0===e._dayOfYear)&&(f(e)._overflowDayOfYear=!0),n=Re(s,0,e._dayOfYear),e._a[ge]=n.getUTCMonth(),e._a[ve]=n.getUTCDate()),t=0;t<3&&null==e._a[t];++t)e._a[t]=o[t]=r[t];for(;t<7;t++)e._a[t]=o[t]=null==e._a[t]?2===t?1:0:e._a[t];24===e._a[Me]&&0===e._a[Le]&&0===e._a[be]&&0===e._a[Ye]&&(e._nextDay=!0,e._a[Me]=0),e._d=(e._useUTC?Re:function(e,t,n,r,a,i,s){var o=new Date(e,t,n,r,a,i,s);return e<100&&e>=0&&isFinite(o.getFullYear())&&o.setFullYear(e),o}).apply(null,o),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),null!=e._tzm&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[Me]=24),e._w&&void 0!==e._w.d&&e._w.d!==i&&(f(e).weekdayMismatch=!0)}}var pt=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,yt=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,gt=/Z|[+-]\d\d(?::?\d\d)?/,vt=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/]],Mt=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Lt=/^\/?Date\((\-?\d+)/i;function bt(e){var t,n,r,a,i,s,o=e._i,u=pt.exec(o)||yt.exec(o);if(u){for(f(e).iso=!0,t=0,n=vt.length;t<n;t++)if(vt[t][1].exec(u[1])){a=vt[t][0],r=!1!==vt[t][2];break}if(null==a)return void(e._isValid=!1);if(u[3]){for(t=0,n=Mt.length;t<n;t++)if(Mt[t][1].exec(u[3])){i=(u[2]||" ")+Mt[t][0];break}if(null==i)return void(e._isValid=!1)}if(!r&&null!=i)return void(e._isValid=!1);if(u[4]){if(!gt.exec(u[4]))return void(e._isValid=!1);s="Z"}e._f=a+(i||"")+(s||""),Tt(e)}else e._isValid=!1}var Yt=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;function wt(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}var kt={UT:0,GMT:0,EDT:-240,EST:-300,CDT:-300,CST:-360,MDT:-360,MST:-420,PDT:-420,PST:-480};function Dt(e){var t,n,r,a,i,s,o,u=Yt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,""));if(u){var l=(t=u[4],n=u[3],r=u[2],a=u[5],i=u[6],s=u[7],o=[wt(t),Ae.indexOf(n),parseInt(r,10),parseInt(a,10),parseInt(i,10)],s&&o.push(parseInt(s,10)),o);if(!function(e,t,n){if(e){var r=Ve.indexOf(e),a=new Date(t[0],t[1],t[2]).getDay();if(r!==a)return f(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}(u[1],l,e))return;e._a=l,e._tzm=function(e,t,n){if(e)return kt[e];if(t)return 0;var r=parseInt(n,10),a=r%100,i=(r-a)/100;return 60*i+a}(u[8],u[9],u[10]),e._d=Re.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),f(e).rfc2822=!0}else e._isValid=!1}function Tt(e){if(e._f!==a.ISO_8601)if(e._f!==a.RFC_2822){e._a=[],f(e).empty=!0;var t,n,r,i,s,o=""+e._i,u=o.length,l=0;for(r=$(e._f,e._locale).match(z)||[],t=0;t<r.length;t++)i=r[t],(n=(o.match(ce(i,e))||[])[0])&&((s=o.substr(0,o.indexOf(n))).length>0&&f(e).unusedInput.push(s),o=o.slice(o.indexOf(n)+n.length),l+=n.length),B[i]?(n?f(e).empty=!1:f(e).unusedTokens.push(i),pe(i,n,e)):e._strict&&!n&&f(e).unusedTokens.push(i);f(e).charsLeftOver=u-l,o.length>0&&f(e).unusedInput.push(o),e._a[Me]<=12&&!0===f(e).bigHour&&e._a[Me]>0&&(f(e).bigHour=void 0),f(e).parsedDateParts=e._a.slice(0),f(e).meridiem=e._meridiem,e._a[Me]=function(e,t,n){var r;return null==n?t:null!=e.meridiemHour?e.meridiemHour(t,n):null!=e.isPM?((r=e.isPM(n))&&t<12&&(t+=12),r||12!==t||(t=0),t):t}(e._locale,e._a[Me],e._meridiem),mt(e),_t(e)}else Dt(e);else bt(e)}function St(e){var t=e._i,n=e._f;return e._locale=e._locale||ht(e._l),null===t||void 0===n&&""===t?p({nullInput:!0}):("string"==typeof t&&(e._i=t=e._locale.preparse(t)),L(t)?new M(_t(t)):(l(t)?e._d=t:i(n)?function(e){var t,n,r,a,i;if(0===e._f.length)return f(e).invalidFormat=!0,void(e._d=new Date(NaN));for(a=0;a<e._f.length;a++)i=0,t=g({},e),null!=e._useUTC&&(t._useUTC=e._useUTC),t._f=e._f[a],Tt(t),m(t)&&(i+=f(t).charsLeftOver,i+=10*f(t).unusedTokens.length,f(t).score=i,(null==r||i<r)&&(r=i,n=t));h(e,n||t)}(e):n?Tt(e):function(e){var t=e._i;o(t)?e._d=new Date(a.now()):l(t)?e._d=new Date(t.valueOf()):"string"==typeof t?function(e){var t=Lt.exec(e._i);null===t?(bt(e),!1===e._isValid&&(delete e._isValid,Dt(e),!1===e._isValid&&(delete e._isValid,a.createFromInputFallback(e)))):e._d=new Date(+t[1])}(e):i(t)?(e._a=d(t.slice(0),function(e){return parseInt(e,10)}),mt(e)):s(t)?function(e){if(!e._d){var t=A(e._i);e._a=d([t.year,t.month,t.day||t.date,t.hour,t.minute,t.second,t.millisecond],function(e){return e&&parseInt(e,10)}),mt(e)}}(e):u(t)?e._d=new Date(t):a.createFromInputFallback(e)}(e),m(e)||(e._d=null),e))}function xt(e,t,n,r,a){var o,u={};return!0!==n&&!1!==n||(r=n,n=void 0),(s(e)&&function(e){if(Object.getOwnPropertyNames)return 0===Object.getOwnPropertyNames(e).length;var t;for(t in e)if(e.hasOwnProperty(t))return!1;return!0}(e)||i(e)&&0===e.length)&&(e=void 0),u._isAMomentObject=!0,u._useUTC=u._isUTC=a,u._l=n,u._i=e,u._f=t,u._strict=r,(o=new M(_t(St(u))))._nextDay&&(o.add(1,"d"),o._nextDay=void 0),o}function jt(e,t,n,r){return xt(e,t,n,r,!1)}a.createFromInputFallback=D("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))}),a.ISO_8601=function(){},a.RFC_2822=function(){};var Ot=D("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=jt.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:p()}),Et=D("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=jt.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:p()});function Ht(e,t){var n,r;if(1===t.length&&i(t[0])&&(t=t[0]),!t.length)return jt();for(n=t[0],r=1;r<t.length;++r)t[r].isValid()&&!t[r][e](n)||(n=t[r]);return n}var Pt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function Ct(e){var t=A(e),n=t.year||0,r=t.quarter||0,a=t.month||0,i=t.week||t.isoWeek||0,s=t.day||0,o=t.hour||0,u=t.minute||0,l=t.second||0,d=t.millisecond||0;this._isValid=function(e){for(var t in e)if(-1===Se.call(Pt,t)||null!=e[t]&&isNaN(e[t]))return!1;for(var n=!1,r=0;r<Pt.length;++r)if(e[Pt[r]]){if(n)return!1;parseFloat(e[Pt[r]])!==Y(e[Pt[r]])&&(n=!0)}return!0}(t),this._milliseconds=+d+1e3*l+6e4*u+1e3*o*60*60,this._days=+s+7*i,this._months=+a+3*r+12*n,this._data={},this._locale=ht(),this._bubble()}function At(e){return e instanceof Ct}function Ft(e){return e<0?-1*Math.round(-1*e):Math.round(e)}function Wt(e,t){q(e,0,0,function(){var e=this.utcOffset(),n="+";return e<0&&(e=-e,n="-"),n+N(~~(e/60),2)+t+N(~~e%60,2)})}Wt("Z",":"),Wt("ZZ",""),de("Z",oe),de("ZZ",oe),fe(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=zt(oe,e)});var Nt=/([\+\-]|\d\d)/gi;function zt(e,t){var n=(t||"").match(e);if(null===n)return null;var r=n[n.length-1]||[],a=(r+"").match(Nt)||["-",0,0],i=60*a[1]+Y(a[2]);return 0===i?0:"+"===a[0]?i:-i}function It(e,t){var n,r;return t._isUTC?(n=t.clone(),r=(L(e)||l(e)?e.valueOf():jt(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+r),a.updateOffset(n,!1),n):jt(e).local()}function Rt(e){return 15*-Math.round(e._d.getTimezoneOffset()/15)}function Bt(){return!!this.isValid()&&this._isUTC&&0===this._offset}a.updateOffset=function(){};var qt=/^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,Ut=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function $t(e,t){var n,r,a,i,s,o,l=e,d=null;return At(e)?l={ms:e._milliseconds,d:e._days,M:e._months}:u(e)?(l={},t?l[t]=e:l.milliseconds=e):(d=qt.exec(e))?(n="-"===d[1]?-1:1,l={y:0,d:Y(d[ve])*n,h:Y(d[Me])*n,m:Y(d[Le])*n,s:Y(d[be])*n,ms:Y(Ft(1e3*d[Ye]))*n}):(d=Ut.exec(e))?(n="-"===d[1]?-1:1,l={y:Jt(d[2],n),M:Jt(d[3],n),w:Jt(d[4],n),d:Jt(d[5],n),h:Jt(d[6],n),m:Jt(d[7],n),s:Jt(d[8],n)}):null==l?l={}:"object"==typeof l&&("from"in l||"to"in l)&&(i=jt(l.from),s=jt(l.to),a=i.isValid()&&s.isValid()?(s=It(s,i),i.isBefore(s)?o=Vt(i,s):((o=Vt(s,i)).milliseconds=-o.milliseconds,o.months=-o.months),o):{milliseconds:0,months:0},(l={}).ms=a.milliseconds,l.M=a.months),r=new Ct(l),At(e)&&c(e,"_locale")&&(r._locale=e._locale),r}function Jt(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Vt(e,t){var n={milliseconds:0,months:0};return n.months=t.month()-e.month()+12*(t.year()-e.year()),e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function Gt(e,t){return function(n,r){var a;return null===r||isNaN(+r)||(x(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),a=n,n=r,r=a),Xt(this,$t(n="string"==typeof n?+n:n,r),e),this}}function Xt(e,t,n,r){var i=t._milliseconds,s=Ft(t._days),o=Ft(t._months);e.isValid()&&(r=null==r||r,o&&Fe(e,Oe(e,"Month")+o*n),s&&Ee(e,"Date",Oe(e,"Date")+s*n),i&&e._d.setTime(e._d.valueOf()+i*n),r&&a.updateOffset(e,s||o))}$t.fn=Ct.prototype,$t.invalid=function(){return $t(NaN)};var Zt=Gt(1,"add"),Kt=Gt(-1,"subtract");function Qt(e,t){var n,r,a=12*(t.year()-e.year())+(t.month()-e.month()),i=e.clone().add(a,"months");return t-i<0?(n=e.clone().add(a-1,"months"),r=(t-i)/(i-n)):(n=e.clone().add(a+1,"months"),r=(t-i)/(n-i)),-(a+r)||0}function en(e){var t;return void 0===e?this._locale._abbr:(null!=(t=ht(e))&&(this._locale=t),this)}a.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",a.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";var tn=D("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return void 0===e?this.localeData():this.locale(e)});function nn(){return this._locale}function rn(e,t){q(0,[e,e.length],0,t)}function an(e,t,n,r,a){var i;return null==e?Ue(this,r,a).year:(i=$e(e,r,a),t>i&&(t=i),function(e,t,n,r,a){var i=qe(e,t,n,r,a),s=Re(i.year,0,i.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}.call(this,e,t,n,r,a))}q(0,["gg",2],0,function(){return this.weekYear()%100}),q(0,["GG",2],0,function(){return this.isoWeekYear()%100}),rn("gggg","weekYear"),rn("ggggg","weekYear"),rn("GGGG","isoWeekYear"),rn("GGGGG","isoWeekYear"),P("weekYear","gg"),P("isoWeekYear","GG"),W("weekYear",1),W("isoWeekYear",1),de("G",ie),de("g",ie),de("GG",K,V),de("gg",K,V),de("GGGG",ne,X),de("gggg",ne,X),de("GGGGG",re,Z),de("ggggg",re,Z),me(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,r){t[r.substr(0,2)]=Y(e)}),me(["gg","GG"],function(e,t,n,r){t[r]=a.parseTwoDigitYear(e)}),q("Q",0,"Qo","quarter"),P("quarter","Q"),W("quarter",7),de("Q",J),fe("Q",function(e,t){t[ge]=3*(Y(e)-1)}),q("D",["DD",2],"Do","date"),P("date","D"),W("date",9),de("D",K),de("DD",K,V),de("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient}),fe(["D","DD"],ve),fe("Do",function(e,t){t[ve]=Y(e.match(K)[0])});var sn=je("Date",!0);q("DDD",["DDDD",3],"DDDo","dayOfYear"),P("dayOfYear","DDD"),W("dayOfYear",4),de("DDD",te),de("DDDD",G),fe(["DDD","DDDD"],function(e,t,n){n._dayOfYear=Y(e)}),q("m",["mm",2],0,"minute"),P("minute","m"),W("minute",14),de("m",K),de("mm",K,V),fe(["m","mm"],Le);var on=je("Minutes",!1);q("s",["ss",2],0,"second"),P("second","s"),W("second",15),de("s",K),de("ss",K,V),fe(["s","ss"],be);var un,ln=je("Seconds",!1);for(q("S",0,0,function(){return~~(this.millisecond()/100)}),q(0,["SS",2],0,function(){return~~(this.millisecond()/10)}),q(0,["SSS",3],0,"millisecond"),q(0,["SSSS",4],0,function(){return 10*this.millisecond()}),q(0,["SSSSS",5],0,function(){return 100*this.millisecond()}),q(0,["SSSSSS",6],0,function(){return 1e3*this.millisecond()}),q(0,["SSSSSSS",7],0,function(){return 1e4*this.millisecond()}),q(0,["SSSSSSSS",8],0,function(){return 1e5*this.millisecond()}),q(0,["SSSSSSSSS",9],0,function(){return 1e6*this.millisecond()}),P("millisecond","ms"),W("millisecond",16),de("S",te,J),de("SS",te,V),de("SSS",te,G),un="SSSS";un.length<=9;un+="S")de(un,ae);function dn(e,t){t[Ye]=Y(1e3*("0."+e))}for(un="S";un.length<=9;un+="S")fe(un,dn);var cn=je("Milliseconds",!1);q("z",0,0,"zoneAbbr"),q("zz",0,0,"zoneName");var hn=M.prototype;function _n(e){return e}hn.add=Zt,hn.calendar=function(e,t){var n=e||jt(),r=It(n,this).startOf("day"),i=a.calendarFormat(this,r)||"sameElse",s=t&&(j(t[i])?t[i].call(this,n):t[i]);return this.format(s||this.localeData().calendar(i,this,jt(n)))},hn.clone=function(){return new M(this)},hn.diff=function(e,t,n){var r,a,i;if(!this.isValid())return NaN;if(!(r=It(e,this)).isValid())return NaN;switch(a=6e4*(r.utcOffset()-this.utcOffset()),t=C(t)){case"year":i=Qt(this,r)/12;break;case"month":i=Qt(this,r);break;case"quarter":i=Qt(this,r)/3;break;case"second":i=(this-r)/1e3;break;case"minute":i=(this-r)/6e4;break;case"hour":i=(this-r)/36e5;break;case"day":i=(this-r-a)/864e5;break;case"week":i=(this-r-a)/6048e5;break;default:i=this-r}return n?i:b(i)},hn.endOf=function(e){return void 0===(e=C(e))||"millisecond"===e?this:("date"===e&&(e="day"),this.startOf(e).add(1,"isoWeek"===e?"week":e).subtract(1,"ms"))},hn.format=function(e){e||(e=this.isUtc()?a.defaultFormatUtc:a.defaultFormat);var t=U(this,e);return this.localeData().postformat(t)},hn.from=function(e,t){return this.isValid()&&(L(e)&&e.isValid()||jt(e).isValid())?$t({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},hn.fromNow=function(e){return this.from(jt(),e)},hn.to=function(e,t){return this.isValid()&&(L(e)&&e.isValid()||jt(e).isValid())?$t({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()},hn.toNow=function(e){return this.to(jt(),e)},hn.get=function(e){return j(this[e=C(e)])?this[e]():this},hn.invalidAt=function(){return f(this).overflow},hn.isAfter=function(e,t){var n=L(e)?e:jt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=C(t)||"millisecond")?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf())},hn.isBefore=function(e,t){var n=L(e)?e:jt(e);return!(!this.isValid()||!n.isValid())&&("millisecond"===(t=C(t)||"millisecond")?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf())},hn.isBetween=function(e,t,n,r){var a=L(e)?e:jt(e),i=L(t)?t:jt(t);return!!(this.isValid()&&a.isValid()&&i.isValid())&&(("("===(r=r||"()")[0]?this.isAfter(a,n):!this.isBefore(a,n))&&(")"===r[1]?this.isBefore(i,n):!this.isAfter(i,n)))},hn.isSame=function(e,t){var n,r=L(e)?e:jt(e);return!(!this.isValid()||!r.isValid())&&("millisecond"===(t=C(t)||"millisecond")?this.valueOf()===r.valueOf():(n=r.valueOf(),this.clone().startOf(t).valueOf()<=n&&n<=this.clone().endOf(t).valueOf()))},hn.isSameOrAfter=function(e,t){return this.isSame(e,t)||this.isAfter(e,t)},hn.isSameOrBefore=function(e,t){return this.isSame(e,t)||this.isBefore(e,t)},hn.isValid=function(){return m(this)},hn.lang=tn,hn.locale=en,hn.localeData=nn,hn.max=Et,hn.min=Ot,hn.parsingFlags=function(){return h({},f(this))},hn.set=function(e,t){if("object"==typeof e)for(var n=function(e){var t=[];for(var n in e)t.push({unit:n,priority:F[n]});return t.sort(function(e,t){return e.priority-t.priority}),t}(e=A(e)),r=0;r<n.length;r++)this[n[r].unit](e[n[r].unit]);else if(j(this[e=C(e)]))return this[e](t);return this},hn.startOf=function(e){switch(e=C(e)){case"year":this.month(0);case"quarter":case"month":this.date(1);case"week":case"isoWeek":case"day":case"date":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===e&&this.weekday(0),"isoWeek"===e&&this.isoWeekday(1),"quarter"===e&&this.month(3*Math.floor(this.month()/3)),this},hn.subtract=Kt,hn.toArray=function(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]},hn.toObject=function(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}},hn.toDate=function(){return new Date(this.valueOf())},hn.toISOString=function(e){if(!this.isValid())return null;var t=!0!==e,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?U(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):j(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+60*this.utcOffset()*1e3).toISOString().replace("Z",U(n,"Z")):U(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")},hn.inspect=function(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="";this.isLocal()||(e=0===this.utcOffset()?"moment.utc":"moment.parseZone",t="Z");var n="["+e+'("]',r=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",a=t+'[")]';return this.format(n+r+"-MM-DD[T]HH:mm:ss.SSS"+a)},hn.toJSON=function(){return this.isValid()?this.toISOString():null},hn.toString=function(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},hn.unix=function(){return Math.floor(this.valueOf()/1e3)},hn.valueOf=function(){return this._d.valueOf()-6e4*(this._offset||0)},hn.creationData=function(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}},hn.year=xe,hn.isLeapYear=function(){return Te(this.year())},hn.weekYear=function(e){return an.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)},hn.isoWeekYear=function(e){return an.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)},hn.quarter=hn.quarters=function(e){return null==e?Math.ceil((this.month()+1)/3):this.month(3*(e-1)+this.month()%3)},hn.month=We,hn.daysInMonth=function(){return He(this.year(),this.month())},hn.week=hn.weeks=function(e){var t=this.localeData().week(this);return null==e?t:this.add(7*(e-t),"d")},hn.isoWeek=hn.isoWeeks=function(e){var t=Ue(this,1,4).week;return null==e?t:this.add(7*(e-t),"d")},hn.weeksInYear=function(){var e=this.localeData()._week;return $e(this.year(),e.dow,e.doy)},hn.isoWeeksInYear=function(){return $e(this.year(),1,4)},hn.date=sn,hn.day=hn.days=function(e){if(!this.isValid())return null!=e?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=e?(e=function(e,t){return"string"!=typeof e?e:isNaN(e)?"number"==typeof(e=t.weekdaysParse(e))?e:null:parseInt(e,10)}(e,this.localeData()),this.add(e-t,"d")):t},hn.weekday=function(e){if(!this.isValid())return null!=e?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return null==e?t:this.add(e-t,"d")},hn.isoWeekday=function(e){if(!this.isValid())return null!=e?this:NaN;if(null!=e){var t=function(e,t){return"string"==typeof e?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}(e,this.localeData());return this.day(this.day()%7?t:t-7)}return this.day()||7},hn.dayOfYear=function(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return null==e?t:this.add(e-t,"d")},hn.hour=hn.hours=at,hn.minute=hn.minutes=on,hn.second=hn.seconds=ln,hn.millisecond=hn.milliseconds=cn,hn.utcOffset=function(e,t,n){var r,i=this._offset||0;if(!this.isValid())return null!=e?this:NaN;if(null!=e){if("string"==typeof e){if(null===(e=zt(oe,e)))return this}else Math.abs(e)<16&&!n&&(e*=60);return!this._isUTC&&t&&(r=Rt(this)),this._offset=e,this._isUTC=!0,null!=r&&this.add(r,"m"),i!==e&&(!t||this._changeInProgress?Xt(this,$t(e-i,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,a.updateOffset(this,!0),this._changeInProgress=null)),this}return this._isUTC?i:Rt(this)},hn.utc=function(e){return this.utcOffset(0,e)},hn.local=function(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Rt(this),"m")),this},hn.parseZone=function(){if(null!=this._tzm)this.utcOffset(this._tzm,!1,!0);else if("string"==typeof this._i){var e=zt(se,this._i);null!=e?this.utcOffset(e):this.utcOffset(0,!0)}return this},hn.hasAlignedHourOffset=function(e){return!!this.isValid()&&(e=e?jt(e).utcOffset():0,(this.utcOffset()-e)%60==0)},hn.isDST=function(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()},hn.isLocal=function(){return!!this.isValid()&&!this._isUTC},hn.isUtcOffset=function(){return!!this.isValid()&&this._isUTC},hn.isUtc=Bt,hn.isUTC=Bt,hn.zoneAbbr=function(){return this._isUTC?"UTC":""},hn.zoneName=function(){return this._isUTC?"Coordinated Universal Time":""},hn.dates=D("dates accessor is deprecated. Use date instead.",sn),hn.months=D("months accessor is deprecated. Use month instead",We),hn.years=D("years accessor is deprecated. Use year instead",xe),hn.zone=D("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",function(e,t){return null!=e?("string"!=typeof e&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}),hn.isDSTShifted=D("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",function(){if(!o(this._isDSTShifted))return this._isDSTShifted;var e={};if(g(e,this),(e=St(e))._a){var t=e._isUTC?_(e._a):jt(e._a);this._isDSTShifted=this.isValid()&&w(e._a,t.toArray())>0}else this._isDSTShifted=!1;return this._isDSTShifted});var fn=E.prototype;function mn(e,t,n,r){var a=ht(),i=_().set(r,t);return a[n](i,e)}function pn(e,t,n){if(u(e)&&(t=e,e=void 0),e=e||"",null!=t)return mn(e,t,n,"month");var r,a=[];for(r=0;r<12;r++)a[r]=mn(e,r,n,"month");return a}function yn(e,t,n,r){"boolean"==typeof e?(u(t)&&(n=t,t=void 0),t=t||""):(n=t=e,e=!1,u(t)&&(n=t,t=void 0),t=t||"");var a,i=ht(),s=e?i._week.dow:0;if(null!=n)return mn(t,(n+s)%7,r,"day");var o=[];for(a=0;a<7;a++)o[a]=mn(t,(a+s)%7,r,"day");return o}fn.calendar=function(e,t,n){var r=this._calendar[e]||this._calendar.sameElse;return j(r)?r.call(t,n):r},fn.longDateFormat=function(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.replace(/MMMM|MM|DD|dddd/g,function(e){return e.slice(1)}),this._longDateFormat[e])},fn.invalidDate=function(){return this._invalidDate},fn.ordinal=function(e){return this._ordinal.replace("%d",e)},fn.preparse=_n,fn.postformat=_n,fn.relativeTime=function(e,t,n,r){var a=this._relativeTime[n];return j(a)?a(e,t,n,r):a.replace(/%d/i,e)},fn.pastFuture=function(e,t){var n=this._relativeTime[e>0?"future":"past"];return j(n)?n(t):n.replace(/%s/i,t)},fn.set=function(e){var t,n;for(n in e)j(t=e[n])?this[n]=t:this["_"+n]=t;this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)},fn.months=function(e,t){return e?i(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||Pe).test(t)?"format":"standalone"][e.month()]:i(this._months)?this._months:this._months.standalone},fn.monthsShort=function(e,t){return e?i(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[Pe.test(t)?"format":"standalone"][e.month()]:i(this._monthsShort)?this._monthsShort:this._monthsShort.standalone},fn.monthsParse=function(e,t,n){var r,a,i;if(this._monthsParseExact)return function(e,t,n){var r,a,i,s=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],r=0;r<12;++r)i=_([2e3,r]),this._shortMonthsParse[r]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[r]=this.months(i,"").toLocaleLowerCase();return n?"MMM"===t?-1!==(a=Se.call(this._shortMonthsParse,s))?a:null:-1!==(a=Se.call(this._longMonthsParse,s))?a:null:"MMM"===t?-1!==(a=Se.call(this._shortMonthsParse,s))?a:-1!==(a=Se.call(this._longMonthsParse,s))?a:null:-1!==(a=Se.call(this._longMonthsParse,s))?a:-1!==(a=Se.call(this._shortMonthsParse,s))?a:null}.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),r=0;r<12;r++){if(a=_([2e3,r]),n&&!this._longMonthsParse[r]&&(this._longMonthsParse[r]=new RegExp("^"+this.months(a,"").replace(".","")+"$","i"),this._shortMonthsParse[r]=new RegExp("^"+this.monthsShort(a,"").replace(".","")+"$","i")),n||this._monthsParse[r]||(i="^"+this.months(a,"")+"|^"+this.monthsShort(a,""),this._monthsParse[r]=new RegExp(i.replace(".",""),"i")),n&&"MMMM"===t&&this._longMonthsParse[r].test(e))return r;if(n&&"MMM"===t&&this._shortMonthsParse[r].test(e))return r;if(!n&&this._monthsParse[r].test(e))return r}},fn.monthsRegex=function(e){return this._monthsParseExact?(c(this,"_monthsRegex")||Ie.call(this),e?this._monthsStrictRegex:this._monthsRegex):(c(this,"_monthsRegex")||(this._monthsRegex=ze),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)},fn.monthsShortRegex=function(e){return this._monthsParseExact?(c(this,"_monthsRegex")||Ie.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(c(this,"_monthsShortRegex")||(this._monthsShortRegex=Ne),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)},fn.week=function(e){return Ue(e,this._week.dow,this._week.doy).week},fn.firstDayOfYear=function(){return this._week.doy},fn.firstDayOfWeek=function(){return this._week.dow},fn.weekdays=function(e,t){return e?i(this._weekdays)?this._weekdays[e.day()]:this._weekdays[this._weekdays.isFormat.test(t)?"format":"standalone"][e.day()]:i(this._weekdays)?this._weekdays:this._weekdays.standalone},fn.weekdaysMin=function(e){return e?this._weekdaysMin[e.day()]:this._weekdaysMin},fn.weekdaysShort=function(e){return e?this._weekdaysShort[e.day()]:this._weekdaysShort},fn.weekdaysParse=function(e,t,n){var r,a,i;if(this._weekdaysParseExact)return function(e,t,n){var r,a,i,s=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],r=0;r<7;++r)i=_([2e3,1]).day(r),this._minWeekdaysParse[r]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[r]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[r]=this.weekdays(i,"").toLocaleLowerCase();return n?"dddd"===t?-1!==(a=Se.call(this._weekdaysParse,s))?a:null:"ddd"===t?-1!==(a=Se.call(this._shortWeekdaysParse,s))?a:null:-1!==(a=Se.call(this._minWeekdaysParse,s))?a:null:"dddd"===t?-1!==(a=Se.call(this._weekdaysParse,s))?a:-1!==(a=Se.call(this._shortWeekdaysParse,s))?a:-1!==(a=Se.call(this._minWeekdaysParse,s))?a:null:"ddd"===t?-1!==(a=Se.call(this._shortWeekdaysParse,s))?a:-1!==(a=Se.call(this._weekdaysParse,s))?a:-1!==(a=Se.call(this._minWeekdaysParse,s))?a:null:-1!==(a=Se.call(this._minWeekdaysParse,s))?a:-1!==(a=Se.call(this._weekdaysParse,s))?a:-1!==(a=Se.call(this._shortWeekdaysParse,s))?a:null}.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),r=0;r<7;r++){if(a=_([2e3,1]).day(r),n&&!this._fullWeekdaysParse[r]&&(this._fullWeekdaysParse[r]=new RegExp("^"+this.weekdays(a,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[r]=new RegExp("^"+this.weekdaysShort(a,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[r]=new RegExp("^"+this.weekdaysMin(a,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[r]||(i="^"+this.weekdays(a,"")+"|^"+this.weekdaysShort(a,"")+"|^"+this.weekdaysMin(a,""),this._weekdaysParse[r]=new RegExp(i.replace(".",""),"i")),n&&"dddd"===t&&this._fullWeekdaysParse[r].test(e))return r;if(n&&"ddd"===t&&this._shortWeekdaysParse[r].test(e))return r;if(n&&"dd"===t&&this._minWeekdaysParse[r].test(e))return r;if(!n&&this._weekdaysParse[r].test(e))return r}},fn.weekdaysRegex=function(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(c(this,"_weekdaysRegex")||(this._weekdaysRegex=Xe),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)},fn.weekdaysShortRegex=function(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(c(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=Ze),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)},fn.weekdaysMinRegex=function(e){return this._weekdaysParseExact?(c(this,"_weekdaysRegex")||Qe.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(c(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=Ke),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)},fn.isPM=function(e){return"p"===(e+"").toLowerCase().charAt(0)},fn.meridiem=function(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"},dt("en",{dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=1===Y(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}}),a.lang=D("moment.lang is deprecated. Use moment.locale instead.",dt),a.langData=D("moment.langData is deprecated. Use moment.localeData instead.",ht);var gn=Math.abs;function vn(e,t,n,r){var a=$t(t,n);return e._milliseconds+=r*a._milliseconds,e._days+=r*a._days,e._months+=r*a._months,e._bubble()}function Mn(e){return e<0?Math.floor(e):Math.ceil(e)}function Ln(e){return 4800*e/146097}function bn(e){return 146097*e/4800}function Yn(e){return function(){return this.as(e)}}var wn=Yn("ms"),kn=Yn("s"),Dn=Yn("m"),Tn=Yn("h"),Sn=Yn("d"),xn=Yn("w"),jn=Yn("M"),On=Yn("y");function En(e){return function(){return this.isValid()?this._data[e]:NaN}}var Hn=En("milliseconds"),Pn=En("seconds"),Cn=En("minutes"),An=En("hours"),Fn=En("days"),Wn=En("months"),Nn=En("years"),zn=Math.round,In={ss:44,s:45,m:45,h:22,d:26,M:11},Rn=Math.abs;function Bn(e){return(e>0)-(e<0)||+e}function qn(){if(!this.isValid())return this.localeData().invalidDate();var e,t,n=Rn(this._milliseconds)/1e3,r=Rn(this._days),a=Rn(this._months);e=b(n/60),t=b(e/60),n%=60,e%=60;var i=b(a/12),s=a%=12,o=r,u=t,l=e,d=n?n.toFixed(3).replace(/\.?0+$/,""):"",c=this.asSeconds();if(!c)return"P0D";var h=c<0?"-":"",_=Bn(this._months)!==Bn(c)?"-":"",f=Bn(this._days)!==Bn(c)?"-":"",m=Bn(this._milliseconds)!==Bn(c)?"-":"";return h+"P"+(i?_+i+"Y":"")+(s?_+s+"M":"")+(o?f+o+"D":"")+(u||l||d?"T":"")+(u?m+u+"H":"")+(l?m+l+"M":"")+(d?m+d+"S":"")}var Un=Ct.prototype;return Un.isValid=function(){return this._isValid},Un.abs=function(){var e=this._data;return this._milliseconds=gn(this._milliseconds),this._days=gn(this._days),this._months=gn(this._months),e.milliseconds=gn(e.milliseconds),e.seconds=gn(e.seconds),e.minutes=gn(e.minutes),e.hours=gn(e.hours),e.months=gn(e.months),e.years=gn(e.years),this},Un.add=function(e,t){return vn(this,e,t,1)},Un.subtract=function(e,t){return vn(this,e,t,-1)},Un.as=function(e){if(!this.isValid())return NaN;var t,n,r=this._milliseconds;if("month"===(e=C(e))||"year"===e)return t=this._days+r/864e5,n=this._months+Ln(t),"month"===e?n:n/12;switch(t=this._days+Math.round(bn(this._months)),e){case"week":return t/7+r/6048e5;case"day":return t+r/864e5;case"hour":return 24*t+r/36e5;case"minute":return 1440*t+r/6e4;case"second":return 86400*t+r/1e3;case"millisecond":return Math.floor(864e5*t)+r;default:throw new Error("Unknown unit "+e)}},Un.asMilliseconds=wn,Un.asSeconds=kn,Un.asMinutes=Dn,Un.asHours=Tn,Un.asDays=Sn,Un.asWeeks=xn,Un.asMonths=jn,Un.asYears=On,Un.valueOf=function(){return this.isValid()?this._milliseconds+864e5*this._days+this._months%12*2592e6+31536e6*Y(this._months/12):NaN},Un._bubble=function(){var e,t,n,r,a,i=this._milliseconds,s=this._days,o=this._months,u=this._data;return i>=0&&s>=0&&o>=0||i<=0&&s<=0&&o<=0||(i+=864e5*Mn(bn(o)+s),s=0,o=0),u.milliseconds=i%1e3,e=b(i/1e3),u.seconds=e%60,t=b(e/60),u.minutes=t%60,n=b(t/60),u.hours=n%24,s+=b(n/24),a=b(Ln(s)),o+=a,s-=Mn(bn(a)),r=b(o/12),o%=12,u.days=s,u.months=o,u.years=r,this},Un.clone=function(){return $t(this)},Un.get=function(e){return e=C(e),this.isValid()?this[e+"s"]():NaN},Un.milliseconds=Hn,Un.seconds=Pn,Un.minutes=Cn,Un.hours=An,Un.days=Fn,Un.weeks=function(){return b(this.days()/7)},Un.months=Wn,Un.years=Nn,Un.humanize=function(e){if(!this.isValid())return this.localeData().invalidDate();var t=this.localeData(),n=function(e,t,n){var r=$t(e).abs(),a=zn(r.as("s")),i=zn(r.as("m")),s=zn(r.as("h")),o=zn(r.as("d")),u=zn(r.as("M")),l=zn(r.as("y")),d=a<=In.ss&&["s",a]||a<In.s&&["ss",a]||i<=1&&["m"]||i<In.m&&["mm",i]||s<=1&&["h"]||s<In.h&&["hh",s]||o<=1&&["d"]||o<In.d&&["dd",o]||u<=1&&["M"]||u<In.M&&["MM",u]||l<=1&&["y"]||["yy",l];return d[2]=t,d[3]=+e>0,d[4]=n,function(e,t,n,r,a){return a.relativeTime(t||1,!!n,e,r)}.apply(null,d)}(this,!e,t);return e&&(n=t.pastFuture(+this,n)),t.postformat(n)},Un.toISOString=qn,Un.toString=qn,Un.toJSON=qn,Un.locale=en,Un.localeData=nn,Un.toIsoString=D("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",qn),Un.lang=tn,q("X",0,0,"unix"),q("x",0,0,"valueOf"),de("x",ie),de("X",/[+-]?\d+(\.\d{1,3})?/),fe("X",function(e,t,n){n._d=new Date(1e3*parseFloat(e,10))}),fe("x",function(e,t,n){n._d=new Date(Y(e))}),a.version="2.23.0",t=jt,a.fn=hn,a.min=function(){return Ht("isBefore",[].slice.call(arguments,0))},a.max=function(){return Ht("isAfter",[].slice.call(arguments,0))},a.now=function(){return Date.now?Date.now():+new Date},a.utc=_,a.unix=function(e){return jt(1e3*e)},a.months=function(e,t){return pn(e,t,"months")},a.isDate=l,a.locale=dt,a.invalid=p,a.duration=$t,a.isMoment=L,a.weekdays=function(e,t,n){return yn(e,t,n,"weekdays")},a.parseZone=function(){return jt.apply(null,arguments).parseZone()},a.localeData=ht,a.isDuration=At,a.monthsShort=function(e,t){return pn(e,t,"monthsShort")},a.weekdaysMin=function(e,t,n){return yn(e,t,n,"weekdaysMin")},a.defineLocale=ct,a.updateLocale=function(e,t){if(null!=t){var n,r,a=it;null!=(r=lt(e))&&(a=r._config),t=O(a,t),(n=new E(t)).parentLocale=st[e],st[e]=n,dt(e)}else null!=st[e]&&(null!=st[e].parentLocale?st[e]=st[e].parentLocale:null!=st[e]&&delete st[e]);return st[e]},a.locales=function(){return T(st)},a.weekdaysShort=function(e,t,n){return yn(e,t,n,"weekdaysShort")},a.normalizeUnits=C,a.relativeTimeRounding=function(e){return void 0===e?zn:"function"==typeof e&&(zn=e,!0)},a.relativeTimeThreshold=function(e,t){return void 0!==In[e]&&(void 0===t?In[e]:(In[e]=t,"s"===e&&(In.ss=t-1),!0))},a.calendarFormat=function(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"},a.prototype=hn,a.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"},a}()}).call(this,n(9)(e))},function(e,t,n){"use strict";var r=n(10),a=n(145),i=Object.prototype.toString;function s(e){return"[object Array]"===i.call(e)}function o(e){return null!==e&&"object"==typeof e}function u(e){return"[object Function]"===i.call(e)}function l(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),s(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.call(null,e[a],a,e)}e.exports={isArray:s,isArrayBuffer:function(e){return"[object ArrayBuffer]"===i.call(e)},isBuffer:a,isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:o,isUndefined:function(e){return void 0===e},isDate:function(e){return"[object Date]"===i.call(e)},isFile:function(e){return"[object File]"===i.call(e)},isBlob:function(e){return"[object Blob]"===i.call(e)},isFunction:u,isStream:function(e){return o(e)&&u(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:l,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,a=arguments.length;r<a;r++)l(arguments[r],n);return t},extend:function(e,t,n){return l(t,function(t,a){e[a]=n&&"function"==typeof t?r(t,n):t}),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";(function(e){for(var n="undefined"!=typeof window&&"undefined"!=typeof document,r=["Edge","Trident","Firefox"],a=0,i=0;i<r.length;i+=1)if(n&&navigator.userAgent.indexOf(r[i])>=0){a=1;break}var s=n&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},a))}};function o(e){return e&&"[object Function]"==={}.toString.call(e)}function u(e,t){if(1!==e.nodeType)return[];var n=e.ownerDocument.defaultView.getComputedStyle(e,null);return t?n[t]:n}function l(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function d(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=u(e),n=t.overflow,r=t.overflowX,a=t.overflowY;return/(auto|scroll|overlay)/.test(n+a+r)?e:d(l(e))}var c=n&&!(!window.MSInputMethodContext||!document.documentMode),h=n&&/MSIE 10/.test(navigator.userAgent);function _(e){return 11===e?c:10===e?h:c||h}function f(e){if(!e)return document.documentElement;for(var t=_(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent;var r=n&&n.nodeName;return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===u(n,"position")?f(n):n:e?e.ownerDocument.documentElement:document.documentElement}function m(e){return null!==e.parentNode?m(e.parentNode):e}function p(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,a=n?t:e,i=document.createRange();i.setStart(r,0),i.setEnd(a,0);var s,o,u=i.commonAncestorContainer;if(e!==u&&t!==u||r.contains(a))return"BODY"===(o=(s=u).nodeName)||"HTML"!==o&&f(s.firstElementChild)!==s?f(u):u;var l=m(e);return l.host?p(l.host,t):p(e,m(t).host)}function y(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName;if("BODY"===n||"HTML"===n){var r=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||r)[t]}return e[t]}function g(e,t){var n="x"===t?"Left":"Top",r="Left"===n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+r+"Width"],10)}function v(e,t,n,r){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],_(10)?parseInt(n["offset"+e])+parseInt(r["margin"+("Height"===e?"Top":"Left")])+parseInt(r["margin"+("Height"===e?"Bottom":"Right")]):0)}function M(e){var t=e.body,n=e.documentElement,r=_(10)&&getComputedStyle(n);return{height:v("Height",t,n,r),width:v("Width",t,n,r)}}var L=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},b=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function k(e){return w({},e,{right:e.left+e.width,bottom:e.top+e.height})}function D(e){var t={};try{if(_(10)){t=e.getBoundingClientRect();var n=y(e,"top"),r=y(e,"left");t.top+=n,t.left+=r,t.bottom+=n,t.right+=r}else t=e.getBoundingClientRect()}catch(e){}var a={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?M(e.ownerDocument):{},s=i.width||e.clientWidth||a.right-a.left,o=i.height||e.clientHeight||a.bottom-a.top,l=e.offsetWidth-s,d=e.offsetHeight-o;if(l||d){var c=u(e);l-=g(c,"x"),d-=g(c,"y"),a.width-=l,a.height-=d}return k(a)}function T(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=_(10),a="HTML"===t.nodeName,i=D(e),s=D(t),o=d(e),l=u(t),c=parseFloat(l.borderTopWidth,10),h=parseFloat(l.borderLeftWidth,10);n&&a&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var f=k({top:i.top-s.top-c,left:i.left-s.left-h,width:i.width,height:i.height});if(f.marginTop=0,f.marginLeft=0,!r&&a){var m=parseFloat(l.marginTop,10),p=parseFloat(l.marginLeft,10);f.top-=c-m,f.bottom-=c-m,f.left-=h-p,f.right-=h-p,f.marginTop=m,f.marginLeft=p}return(r&&!n?t.contains(o):t===o&&"BODY"!==o.nodeName)&&(f=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=y(t,"top"),a=y(t,"left"),i=n?-1:1;return e.top+=r*i,e.bottom+=r*i,e.left+=a*i,e.right+=a*i,e}(f,t)),f}function S(e){if(!e||!e.parentElement||_())return document.documentElement;for(var t=e.parentElement;t&&"none"===u(t,"transform");)t=t.parentElement;return t||document.documentElement}function x(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},s=a?S(e):p(e,t);if("viewport"===r)i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,r=T(e,n),a=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),s=t?0:y(n),o=t?0:y(n,"left");return k({top:s-r.top+r.marginTop,left:o-r.left+r.marginLeft,width:a,height:i})}(s,a);else{var o=void 0;"scrollParent"===r?"BODY"===(o=d(l(t))).nodeName&&(o=e.ownerDocument.documentElement):o="window"===r?e.ownerDocument.documentElement:r;var c=T(o,s,a);if("HTML"!==o.nodeName||function e(t){var n=t.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===u(t,"position")||e(l(t)))}(s))i=c;else{var h=M(e.ownerDocument),_=h.height,f=h.width;i.top+=c.top-c.marginTop,i.bottom=_+c.top,i.left+=c.left-c.marginLeft,i.right=f+c.left}}var m="number"==typeof(n=n||0);return i.left+=m?n:n.left||0,i.top+=m?n:n.top||0,i.right-=m?n:n.right||0,i.bottom-=m?n:n.bottom||0,i}function j(e,t,n,r,a){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf("auto"))return e;var s=x(n,r,i,a),o={top:{width:s.width,height:t.top-s.top},right:{width:s.right-t.right,height:s.height},bottom:{width:s.width,height:s.bottom-t.bottom},left:{width:t.left-s.left,height:s.height}},u=Object.keys(o).map(function(e){return w({key:e},o[e],{area:(t=o[e],t.width*t.height)});var t}).sort(function(e,t){return t.area-e.area}),l=u.filter(function(e){var t=e.width,r=e.height;return t>=n.clientWidth&&r>=n.clientHeight}),d=l.length>0?l[0].key:u[0].key,c=e.split("-")[1];return d+(c?"-"+c:"")}function O(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return T(n,r?S(t):p(t,n),r)}function E(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),r=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0);return{width:e.offsetWidth+r,height:e.offsetHeight+n}}function H(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function P(e,t,n){n=n.split("-")[0];var r=E(e),a={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),s=i?"top":"left",o=i?"left":"top",u=i?"height":"width",l=i?"width":"height";return a[s]=t[s]+t[u]/2-r[u]/2,a[o]=n===o?t[o]-r[l]:t[H(o)],a}function C(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function A(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var r=C(e,function(e){return e[t]===n});return e.indexOf(r)}(e,"name",n))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=e.function||e.fn;e.enabled&&o(n)&&(t.offsets.popper=k(t.offsets.popper),t.offsets.reference=k(t.offsets.reference),t=n(t,e))}),t}function F(e,t){return e.some(function(e){var n=e.name;return e.enabled&&n===t})}function W(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length;r++){var a=t[r],i=a?""+a+n:e;if(void 0!==document.body.style[i])return i}return null}function N(e){var t=e.ownerDocument;return t?t.defaultView:window}function z(e,t,n,r){n.updateBound=r,N(e).addEventListener("resize",n.updateBound,{passive:!0});var a=d(e);return function e(t,n,r,a){var i="BODY"===t.nodeName,s=i?t.ownerDocument.defaultView:t;s.addEventListener(n,r,{passive:!0}),i||e(d(s.parentNode),n,r,a),a.push(s)}(a,"scroll",n.updateBound,n.scrollParents),n.scrollElement=a,n.eventsEnabled=!0,n}function I(){var e,t;this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,N(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}function R(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function B(e,t){Object.keys(t).forEach(function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&R(t[n])&&(r="px"),e.style[n]=t[n]+r})}var q=n&&/Firefox/i.test(navigator.userAgent);function U(e,t,n){var r=C(e,function(e){return e.name===t}),a=!!r&&e.some(function(e){return e.name===n&&e.enabled&&e.order<r.order});if(!a){var i="`"+t+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return a}var $=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],J=$.slice(3);function V(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=J.indexOf(e),r=J.slice(n+1).concat(J.slice(0,n));return t?r.reverse():r}var G={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function X(e,t,n,r){var a=[0,0],i=-1!==["right","left"].indexOf(r),s=e.split(/(\+|\-)/).map(function(e){return e.trim()}),o=s.indexOf(C(s,function(e){return-1!==e.search(/,|\s/)}));s[o]&&-1===s[o].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var u=/\s*,\s*|\s+/,l=-1!==o?[s.slice(0,o).concat([s[o].split(u)[0]]),[s[o].split(u)[1]].concat(s.slice(o+1))]:[s];return(l=l.map(function(e,r){var a=(1===r?!i:i)?"height":"width",s=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,s=!0,e):s?(e[e.length-1]+=t,s=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,r){var a=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+a[1],s=a[2];if(!i)return e;if(0===s.indexOf("%")){var o=void 0;switch(s){case"%p":o=n;break;case"%":case"%r":default:o=r}return k(o)[t]/100*i}if("vh"===s||"vw"===s)return("vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i;return i}(e,a,t,n)})})).forEach(function(e,t){e.forEach(function(n,r){R(n)&&(a[t]+=n*("-"===e[r-1]?-1:1))})}),a}var Z={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];if(r){var a=e.offsets,i=a.reference,s=a.popper,o=-1!==["bottom","top"].indexOf(n),u=o?"left":"top",l=o?"width":"height",d={start:Y({},u,i[u]),end:Y({},u,i[u]+i[l]-s[l])};e.offsets.popper=w({},s,d[r])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n=t.offset,r=e.placement,a=e.offsets,i=a.popper,s=a.reference,o=r.split("-")[0],u=void 0;return u=R(+n)?[+n,0]:X(n,i,s,o),"left"===o?(i.top+=u[0],i.left-=u[1]):"right"===o?(i.top+=u[0],i.left+=u[1]):"top"===o?(i.left+=u[0],i.top-=u[1]):"bottom"===o&&(i.left+=u[0],i.top+=u[1]),e.popper=i,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||f(e.instance.popper);e.instance.reference===n&&(n=f(n));var r=W("transform"),a=e.instance.popper.style,i=a.top,s=a.left,o=a[r];a.top="",a.left="",a[r]="";var u=x(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed);a.top=i,a.left=s,a[r]=o,t.boundaries=u;var l=t.priority,d=e.offsets.popper,c={primary:function(e){var n=d[e];return d[e]<u[e]&&!t.escapeWithReference&&(n=Math.max(d[e],u[e])),Y({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=d[n];return d[e]>u[e]&&!t.escapeWithReference&&(r=Math.min(d[n],u[e]-("right"===e?d.width:d.height))),Y({},n,r)}};return l.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary";d=w({},d,c[t](e))}),e.offsets.popper=d,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,r=t.reference,a=e.placement.split("-")[0],i=Math.floor,s=-1!==["top","bottom"].indexOf(a),o=s?"right":"bottom",u=s?"left":"top",l=s?"width":"height";return n[o]<i(r[u])&&(e.offsets.popper[u]=i(r[u])-n[l]),n[u]>i(r[o])&&(e.offsets.popper[u]=i(r[o])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!U(e.instance.modifiers,"arrow","keepTogether"))return e;var r=t.element;if("string"==typeof r){if(!(r=e.instance.popper.querySelector(r)))return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var a=e.placement.split("-")[0],i=e.offsets,s=i.popper,o=i.reference,l=-1!==["left","right"].indexOf(a),d=l?"height":"width",c=l?"Top":"Left",h=c.toLowerCase(),_=l?"left":"top",f=l?"bottom":"right",m=E(r)[d];o[f]-m<s[h]&&(e.offsets.popper[h]-=s[h]-(o[f]-m)),o[h]+m>s[f]&&(e.offsets.popper[h]+=o[h]+m-s[f]),e.offsets.popper=k(e.offsets.popper);var p=o[h]+o[d]/2-m/2,y=u(e.instance.popper),g=parseFloat(y["margin"+c],10),v=parseFloat(y["border"+c+"Width"],10),M=p-e.offsets.popper[h]-g-v;return M=Math.max(Math.min(s[d]-m,M),0),e.arrowElement=r,e.offsets.arrow=(Y(n={},h,Math.round(M)),Y(n,_,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(F(e.instance.modifiers,"inner"))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var n=x(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),r=e.placement.split("-")[0],a=H(r),i=e.placement.split("-")[1]||"",s=[];switch(t.behavior){case G.FLIP:s=[r,a];break;case G.CLOCKWISE:s=V(r);break;case G.COUNTERCLOCKWISE:s=V(r,!0);break;default:s=t.behavior}return s.forEach(function(o,u){if(r!==o||s.length===u+1)return e;r=e.placement.split("-")[0],a=H(r);var l=e.offsets.popper,d=e.offsets.reference,c=Math.floor,h="left"===r&&c(l.right)>c(d.left)||"right"===r&&c(l.left)<c(d.right)||"top"===r&&c(l.bottom)>c(d.top)||"bottom"===r&&c(l.top)<c(d.bottom),_=c(l.left)<c(n.left),f=c(l.right)>c(n.right),m=c(l.top)<c(n.top),p=c(l.bottom)>c(n.bottom),y="left"===r&&_||"right"===r&&f||"top"===r&&m||"bottom"===r&&p,g=-1!==["top","bottom"].indexOf(r),v=!!t.flipVariations&&(g&&"start"===i&&_||g&&"end"===i&&f||!g&&"start"===i&&m||!g&&"end"===i&&p);(h||y||v)&&(e.flipped=!0,(h||y)&&(r=s[u+1]),v&&(i=function(e){return"end"===e?"start":"start"===e?"end":e}(i)),e.placement=r+(i?"-"+i:""),e.offsets.popper=w({},e.offsets.popper,P(e.instance.popper,e.offsets.reference,e.placement)),e=A(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,a=r.popper,i=r.reference,s=-1!==["left","right"].indexOf(n),o=-1===["top","left"].indexOf(n);return a[s?"left":"top"]=i[n]-(o?a[s?"width":"height"]:0),e.placement=H(t),e.offsets.popper=k(a),e}},hide:{order:800,enabled:!0,fn:function(e){if(!U(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=C(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,r=t.y,a=e.offsets.popper,i=C(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==i?i:t.gpuAcceleration,o=f(e.instance.popper),u=D(o),l={position:a.position},d=function(e,t){var n=e.offsets,r=n.popper,a=n.reference,i=-1!==["left","right"].indexOf(e.placement),s=-1!==e.placement.indexOf("-"),o=a.width%2==r.width%2,u=a.width%2==1&&r.width%2==1,l=function(e){return e},d=t?i||s||o?Math.round:Math.floor:l,c=t?Math.round:l;return{left:d(u&&!s&&t?r.left-1:r.left),top:c(r.top),bottom:c(r.bottom),right:d(r.right)}}(e,window.devicePixelRatio<2||!q),c="bottom"===n?"top":"bottom",h="right"===r?"left":"right",_=W("transform"),m=void 0,p=void 0;if(p="bottom"===c?"HTML"===o.nodeName?-o.clientHeight+d.bottom:-u.height+d.bottom:d.top,m="right"===h?"HTML"===o.nodeName?-o.clientWidth+d.right:-u.width+d.right:d.left,s&&_)l[_]="translate3d("+m+"px, "+p+"px, 0)",l[c]=0,l[h]=0,l.willChange="transform";else{var y="bottom"===c?-1:1,g="right"===h?-1:1;l[c]=p*y,l[h]=m*g,l.willChange=c+", "+h}var v={"x-placement":e.placement};return e.attributes=w({},v,e.attributes),e.styles=w({},l,e.styles),e.arrowStyles=w({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n;return B(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)}),e.arrowElement&&Object.keys(e.arrowStyles).length&&B(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,r,a){var i=O(a,t,e,n.positionFixed),s=j(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),B(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},K=function(){function e(t,n){var r=this,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};L(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=s(this.update.bind(this)),this.options=w({},e.Defaults,a),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(w({},e.Defaults.modifiers,a.modifiers)).forEach(function(t){r.options.modifiers[t]=w({},e.Defaults.modifiers[t]||{},a.modifiers?a.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return w({name:e},r.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&o(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)}),this.update();var i=this.options.eventsEnabled;i&&this.enableEventListeners(),this.state.eventsEnabled=i}return b(e,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=j(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=P(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=A(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,F(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[W("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=z(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return I.call(this)}}]),e}();K.Utils=("undefined"!=typeof window?window:e).PopperUtils,K.placements=$,K.Defaults=Z,t.a=K}).call(this,n(8))},function(e,t,n){var r=n(166);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(16)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){var r=n(169);"string"==typeof r&&(r=[[e.i,r,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};n(16)(r,a);r.locals&&(e.exports=r.locals)},function(e,t,n){(function(e,r){var a;(function(){var i,s=200,o="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",l="__lodash_hash_undefined__",d=500,c="__lodash_placeholder__",h=1,_=2,f=4,m=1,p=2,y=1,g=2,v=4,M=8,L=16,b=32,Y=64,w=128,k=256,D=512,T=30,S="...",x=800,j=16,O=1,E=2,H=1/0,P=9007199254740991,C=1.7976931348623157e308,A=NaN,F=4294967295,W=F-1,N=F>>>1,z=[["ary",w],["bind",y],["bindKey",g],["curry",M],["curryRight",L],["flip",D],["partial",b],["partialRight",Y],["rearg",k]],I="[object Arguments]",R="[object Array]",B="[object AsyncFunction]",q="[object Boolean]",U="[object Date]",$="[object DOMException]",J="[object Error]",V="[object Function]",G="[object GeneratorFunction]",X="[object Map]",Z="[object Number]",K="[object Null]",Q="[object Object]",ee="[object Proxy]",te="[object RegExp]",ne="[object Set]",re="[object String]",ae="[object Symbol]",ie="[object Undefined]",se="[object WeakMap]",oe="[object WeakSet]",ue="[object ArrayBuffer]",le="[object DataView]",de="[object Float32Array]",ce="[object Float64Array]",he="[object Int8Array]",_e="[object Int16Array]",fe="[object Int32Array]",me="[object Uint8Array]",pe="[object Uint8ClampedArray]",ye="[object Uint16Array]",ge="[object Uint32Array]",ve=/\b__p \+= '';/g,Me=/\b(__p \+=) '' \+/g,Le=/(__e\(.*?\)|\b__t\)) \+\n'';/g,be=/&(?:amp|lt|gt|quot|#39);/g,Ye=/[&<>"']/g,we=RegExp(be.source),ke=RegExp(Ye.source),De=/<%-([\s\S]+?)%>/g,Te=/<%([\s\S]+?)%>/g,Se=/<%=([\s\S]+?)%>/g,xe=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,je=/^\w*$/,Oe=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Ee=/[\\^$.*+?()[\]{}|]/g,He=RegExp(Ee.source),Pe=/^\s+|\s+$/g,Ce=/^\s+/,Ae=/\s+$/,Fe=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,We=/\{\n\/\* \[wrapped with (.+)\] \*/,Ne=/,? & /,ze=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,Ie=/\\(\\)?/g,Re=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Be=/\w*$/,qe=/^[-+]0x[0-9a-f]+$/i,Ue=/^0b[01]+$/i,$e=/^\[object .+?Constructor\]$/,Je=/^0o[0-7]+$/i,Ve=/^(?:0|[1-9]\d*)$/,Ge=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Xe=/($^)/,Ze=/['\n\r\u2028\u2029\\]/g,Ke="\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",Qe="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",et="[\\ud800-\\udfff]",tt="["+Qe+"]",nt="["+Ke+"]",rt="\\d+",at="[\\u2700-\\u27bf]",it="[a-z\\xdf-\\xf6\\xf8-\\xff]",st="[^\\ud800-\\udfff"+Qe+rt+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",ot="\\ud83c[\\udffb-\\udfff]",ut="[^\\ud800-\\udfff]",lt="(?:\\ud83c[\\udde6-\\uddff]){2}",dt="[\\ud800-\\udbff][\\udc00-\\udfff]",ct="[A-Z\\xc0-\\xd6\\xd8-\\xde]",ht="(?:"+it+"|"+st+")",_t="(?:"+ct+"|"+st+")",ft="(?:"+nt+"|"+ot+")"+"?",mt="[\\ufe0e\\ufe0f]?"+ft+("(?:\\u200d(?:"+[ut,lt,dt].join("|")+")[\\ufe0e\\ufe0f]?"+ft+")*"),pt="(?:"+[at,lt,dt].join("|")+")"+mt,yt="(?:"+[ut+nt+"?",nt,lt,dt,et].join("|")+")",gt=RegExp("['’]","g"),vt=RegExp(nt,"g"),Mt=RegExp(ot+"(?="+ot+")|"+yt+mt,"g"),Lt=RegExp([ct+"?"+it+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[tt,ct,"$"].join("|")+")",_t+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[tt,ct+ht,"$"].join("|")+")",ct+"?"+ht+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ct+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",rt,pt].join("|"),"g"),bt=RegExp("[\\u200d\\ud800-\\udfff"+Ke+"\\ufe0e\\ufe0f]"),Yt=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,wt=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],kt=-1,Dt={};Dt[de]=Dt[ce]=Dt[he]=Dt[_e]=Dt[fe]=Dt[me]=Dt[pe]=Dt[ye]=Dt[ge]=!0,Dt[I]=Dt[R]=Dt[ue]=Dt[q]=Dt[le]=Dt[U]=Dt[J]=Dt[V]=Dt[X]=Dt[Z]=Dt[Q]=Dt[te]=Dt[ne]=Dt[re]=Dt[se]=!1;var Tt={};Tt[I]=Tt[R]=Tt[ue]=Tt[le]=Tt[q]=Tt[U]=Tt[de]=Tt[ce]=Tt[he]=Tt[_e]=Tt[fe]=Tt[X]=Tt[Z]=Tt[Q]=Tt[te]=Tt[ne]=Tt[re]=Tt[ae]=Tt[me]=Tt[pe]=Tt[ye]=Tt[ge]=!0,Tt[J]=Tt[V]=Tt[se]=!1;var St={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},xt=parseFloat,jt=parseInt,Ot="object"==typeof e&&e&&e.Object===Object&&e,Et="object"==typeof self&&self&&self.Object===Object&&self,Ht=Ot||Et||Function("return this")(),Pt=t&&!t.nodeType&&t,Ct=Pt&&"object"==typeof r&&r&&!r.nodeType&&r,At=Ct&&Ct.exports===Pt,Ft=At&&Ot.process,Wt=function(){try{var e=Ct&&Ct.require&&Ct.require("util").types;return e||Ft&&Ft.binding&&Ft.binding("util")}catch(e){}}(),Nt=Wt&&Wt.isArrayBuffer,zt=Wt&&Wt.isDate,It=Wt&&Wt.isMap,Rt=Wt&&Wt.isRegExp,Bt=Wt&&Wt.isSet,qt=Wt&&Wt.isTypedArray;function Ut(e,t,n){switch(n.length){case 0:return e.call(t);case 1:return e.call(t,n[0]);case 2:return e.call(t,n[0],n[1]);case 3:return e.call(t,n[0],n[1],n[2])}return e.apply(t,n)}function $t(e,t,n,r){for(var a=-1,i=null==e?0:e.length;++a<i;){var s=e[a];t(r,s,n(s),e)}return r}function Jt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r&&!1!==t(e[n],n,e););return e}function Vt(e,t){for(var n=null==e?0:e.length;n--&&!1!==t(e[n],n,e););return e}function Gt(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(!t(e[n],n,e))return!1;return!0}function Xt(e,t){for(var n=-1,r=null==e?0:e.length,a=0,i=[];++n<r;){var s=e[n];t(s,n,e)&&(i[a++]=s)}return i}function Zt(e,t){return!!(null==e?0:e.length)&&un(e,t,0)>-1}function Kt(e,t,n){for(var r=-1,a=null==e?0:e.length;++r<a;)if(n(t,e[r]))return!0;return!1}function Qt(e,t){for(var n=-1,r=null==e?0:e.length,a=Array(r);++n<r;)a[n]=t(e[n],n,e);return a}function en(e,t){for(var n=-1,r=t.length,a=e.length;++n<r;)e[a+n]=t[n];return e}function tn(e,t,n,r){var a=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++a]);++a<i;)n=t(n,e[a],a,e);return n}function nn(e,t,n,r){var a=null==e?0:e.length;for(r&&a&&(n=e[--a]);a--;)n=t(n,e[a],a,e);return n}function rn(e,t){for(var n=-1,r=null==e?0:e.length;++n<r;)if(t(e[n],n,e))return!0;return!1}var an=hn("length");function sn(e,t,n){var r;return n(e,function(e,n,a){if(t(e,n,a))return r=n,!1}),r}function on(e,t,n,r){for(var a=e.length,i=n+(r?1:-1);r?i--:++i<a;)if(t(e[i],i,e))return i;return-1}function un(e,t,n){return t==t?function(e,t,n){var r=n-1,a=e.length;for(;++r<a;)if(e[r]===t)return r;return-1}(e,t,n):on(e,dn,n)}function ln(e,t,n,r){for(var a=n-1,i=e.length;++a<i;)if(r(e[a],t))return a;return-1}function dn(e){return e!=e}function cn(e,t){var n=null==e?0:e.length;return n?mn(e,t)/n:A}function hn(e){return function(t){return null==t?i:t[e]}}function _n(e){return function(t){return null==e?i:e[t]}}function fn(e,t,n,r,a){return a(e,function(e,a,i){n=r?(r=!1,e):t(n,e,a,i)}),n}function mn(e,t){for(var n,r=-1,a=e.length;++r<a;){var s=t(e[r]);s!==i&&(n=n===i?s:n+s)}return n}function pn(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}function yn(e){return function(t){return e(t)}}function gn(e,t){return Qt(t,function(t){return e[t]})}function vn(e,t){return e.has(t)}function Mn(e,t){for(var n=-1,r=e.length;++n<r&&un(t,e[n],0)>-1;);return n}function Ln(e,t){for(var n=e.length;n--&&un(t,e[n],0)>-1;);return n}var bn=_n({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),Yn=_n({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"});function wn(e){return"\\"+St[e]}function kn(e){return bt.test(e)}function Dn(e){var t=-1,n=Array(e.size);return e.forEach(function(e,r){n[++t]=[r,e]}),n}function Tn(e,t){return function(n){return e(t(n))}}function Sn(e,t){for(var n=-1,r=e.length,a=0,i=[];++n<r;){var s=e[n];s!==t&&s!==c||(e[n]=c,i[a++]=n)}return i}function xn(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=e}),n}function jn(e){var t=-1,n=Array(e.size);return e.forEach(function(e){n[++t]=[e,e]}),n}function On(e){return kn(e)?function(e){var t=Mt.lastIndex=0;for(;Mt.test(e);)++t;return t}(e):an(e)}function En(e){return kn(e)?function(e){return e.match(Mt)||[]}(e):function(e){return e.split("")}(e)}var Hn=_n({"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"});var Pn=function e(t){var n,r=(t=null==t?Ht:Pn.defaults(Ht.Object(),t,Pn.pick(Ht,wt))).Array,a=t.Date,Ke=t.Error,Qe=t.Function,et=t.Math,tt=t.Object,nt=t.RegExp,rt=t.String,at=t.TypeError,it=r.prototype,st=Qe.prototype,ot=tt.prototype,ut=t["__core-js_shared__"],lt=st.toString,dt=ot.hasOwnProperty,ct=0,ht=(n=/[^.]+$/.exec(ut&&ut.keys&&ut.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"",_t=ot.toString,ft=lt.call(tt),mt=Ht._,pt=nt("^"+lt.call(dt).replace(Ee,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),yt=At?t.Buffer:i,Mt=t.Symbol,bt=t.Uint8Array,St=yt?yt.allocUnsafe:i,Ot=Tn(tt.getPrototypeOf,tt),Et=tt.create,Pt=ot.propertyIsEnumerable,Ct=it.splice,Ft=Mt?Mt.isConcatSpreadable:i,Wt=Mt?Mt.iterator:i,an=Mt?Mt.toStringTag:i,_n=function(){try{var e=Wi(tt,"defineProperty");return e({},"",{}),e}catch(e){}}(),Cn=t.clearTimeout!==Ht.clearTimeout&&t.clearTimeout,An=a&&a.now!==Ht.Date.now&&a.now,Fn=t.setTimeout!==Ht.setTimeout&&t.setTimeout,Wn=et.ceil,Nn=et.floor,zn=tt.getOwnPropertySymbols,In=yt?yt.isBuffer:i,Rn=t.isFinite,Bn=it.join,qn=Tn(tt.keys,tt),Un=et.max,$n=et.min,Jn=a.now,Vn=t.parseInt,Gn=et.random,Xn=it.reverse,Zn=Wi(t,"DataView"),Kn=Wi(t,"Map"),Qn=Wi(t,"Promise"),er=Wi(t,"Set"),tr=Wi(t,"WeakMap"),nr=Wi(tt,"create"),rr=tr&&new tr,ar={},ir=ds(Zn),sr=ds(Kn),or=ds(Qn),ur=ds(er),lr=ds(tr),dr=Mt?Mt.prototype:i,cr=dr?dr.valueOf:i,hr=dr?dr.toString:i;function _r(e){if(So(e)&&!yo(e)&&!(e instanceof yr)){if(e instanceof pr)return e;if(dt.call(e,"__wrapped__"))return cs(e)}return new pr(e)}var fr=function(){function e(){}return function(t){if(!To(t))return{};if(Et)return Et(t);e.prototype=t;var n=new e;return e.prototype=i,n}}();function mr(){}function pr(e,t){this.__wrapped__=e,this.__actions__=[],this.__chain__=!!t,this.__index__=0,this.__values__=i}function yr(e){this.__wrapped__=e,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=F,this.__views__=[]}function gr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function vr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Mr(e){var t=-1,n=null==e?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}function Lr(e){var t=-1,n=null==e?0:e.length;for(this.__data__=new Mr;++t<n;)this.add(e[t])}function br(e){var t=this.__data__=new vr(e);this.size=t.size}function Yr(e,t){var n=yo(e),r=!n&&po(e),a=!n&&!r&&Lo(e),i=!n&&!r&&!a&&Ao(e),s=n||r||a||i,o=s?pn(e.length,rt):[],u=o.length;for(var l in e)!t&&!dt.call(e,l)||s&&("length"==l||a&&("offset"==l||"parent"==l)||i&&("buffer"==l||"byteLength"==l||"byteOffset"==l)||Ui(l,u))||o.push(l);return o}function wr(e){var t=e.length;return t?e[La(0,t-1)]:i}function kr(e,t){return os(ni(e),Pr(t,0,e.length))}function Dr(e){return os(ni(e))}function Tr(e,t,n){(n===i||_o(e[t],n))&&(n!==i||t in e)||Er(e,t,n)}function Sr(e,t,n){var r=e[t];dt.call(e,t)&&_o(r,n)&&(n!==i||t in e)||Er(e,t,n)}function xr(e,t){for(var n=e.length;n--;)if(_o(e[n][0],t))return n;return-1}function jr(e,t,n,r){return Nr(e,function(e,a,i){t(r,e,n(e),i)}),r}function Or(e,t){return e&&ri(t,au(t),e)}function Er(e,t,n){"__proto__"==t&&_n?_n(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}function Hr(e,t){for(var n=-1,a=t.length,s=r(a),o=null==e;++n<a;)s[n]=o?i:Qo(e,t[n]);return s}function Pr(e,t,n){return e==e&&(n!==i&&(e=e<=n?e:n),t!==i&&(e=e>=t?e:t)),e}function Cr(e,t,n,r,a,s){var o,u=t&h,l=t&_,d=t&f;if(n&&(o=a?n(e,r,a,s):n(e)),o!==i)return o;if(!To(e))return e;var c=yo(e);if(c){if(o=function(e){var t=e.length,n=new e.constructor(t);return t&&"string"==typeof e[0]&&dt.call(e,"index")&&(n.index=e.index,n.input=e.input),n}(e),!u)return ni(e,o)}else{var m=Ii(e),p=m==V||m==G;if(Lo(e))return Xa(e,u);if(m==Q||m==I||p&&!a){if(o=l||p?{}:Bi(e),!u)return l?function(e,t){return ri(e,zi(e),t)}(e,function(e,t){return e&&ri(t,iu(t),e)}(o,e)):function(e,t){return ri(e,Ni(e),t)}(e,Or(o,e))}else{if(!Tt[m])return a?e:{};o=function(e,t,n){var r,a=e.constructor;switch(t){case ue:return Za(e);case q:case U:return new a(+e);case le:return function(e,t){var n=t?Za(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}(e,n);case de:case ce:case he:case _e:case fe:case me:case pe:case ye:case ge:return Ka(e,n);case X:return new a;case Z:case re:return new a(e);case te:return function(e){var t=new e.constructor(e.source,Be.exec(e));return t.lastIndex=e.lastIndex,t}(e);case ne:return new a;case ae:return r=e,cr?tt(cr.call(r)):{}}}(e,m,u)}}s||(s=new br);var y=s.get(e);if(y)return y;if(s.set(e,o),Ho(e))return e.forEach(function(r){o.add(Cr(r,t,n,r,e,s))}),o;if(xo(e))return e.forEach(function(r,a){o.set(a,Cr(r,t,n,a,e,s))}),o;var g=c?i:(d?l?Oi:ji:l?iu:au)(e);return Jt(g||e,function(r,a){g&&(r=e[a=r]),Sr(o,a,Cr(r,t,n,a,e,s))}),o}function Ar(e,t,n){var r=n.length;if(null==e)return!r;for(e=tt(e);r--;){var a=n[r],s=t[a],o=e[a];if(o===i&&!(a in e)||!s(o))return!1}return!0}function Fr(e,t,n){if("function"!=typeof e)throw new at(u);return rs(function(){e.apply(i,n)},t)}function Wr(e,t,n,r){var a=-1,i=Zt,o=!0,u=e.length,l=[],d=t.length;if(!u)return l;n&&(t=Qt(t,yn(n))),r?(i=Kt,o=!1):t.length>=s&&(i=vn,o=!1,t=new Lr(t));e:for(;++a<u;){var c=e[a],h=null==n?c:n(c);if(c=r||0!==c?c:0,o&&h==h){for(var _=d;_--;)if(t[_]===h)continue e;l.push(c)}else i(t,h,r)||l.push(c)}return l}_r.templateSettings={escape:De,evaluate:Te,interpolate:Se,variable:"",imports:{_:_r}},_r.prototype=mr.prototype,_r.prototype.constructor=_r,pr.prototype=fr(mr.prototype),pr.prototype.constructor=pr,yr.prototype=fr(mr.prototype),yr.prototype.constructor=yr,gr.prototype.clear=function(){this.__data__=nr?nr(null):{},this.size=0},gr.prototype.delete=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t},gr.prototype.get=function(e){var t=this.__data__;if(nr){var n=t[e];return n===l?i:n}return dt.call(t,e)?t[e]:i},gr.prototype.has=function(e){var t=this.__data__;return nr?t[e]!==i:dt.call(t,e)},gr.prototype.set=function(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=nr&&t===i?l:t,this},vr.prototype.clear=function(){this.__data__=[],this.size=0},vr.prototype.delete=function(e){var t=this.__data__,n=xr(t,e);return!(n<0||(n==t.length-1?t.pop():Ct.call(t,n,1),--this.size,0))},vr.prototype.get=function(e){var t=this.__data__,n=xr(t,e);return n<0?i:t[n][1]},vr.prototype.has=function(e){return xr(this.__data__,e)>-1},vr.prototype.set=function(e,t){var n=this.__data__,r=xr(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this},Mr.prototype.clear=function(){this.size=0,this.__data__={hash:new gr,map:new(Kn||vr),string:new gr}},Mr.prototype.delete=function(e){var t=Ai(this,e).delete(e);return this.size-=t?1:0,t},Mr.prototype.get=function(e){return Ai(this,e).get(e)},Mr.prototype.has=function(e){return Ai(this,e).has(e)},Mr.prototype.set=function(e,t){var n=Ai(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this},Lr.prototype.add=Lr.prototype.push=function(e){return this.__data__.set(e,l),this},Lr.prototype.has=function(e){return this.__data__.has(e)},br.prototype.clear=function(){this.__data__=new vr,this.size=0},br.prototype.delete=function(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n},br.prototype.get=function(e){return this.__data__.get(e)},br.prototype.has=function(e){return this.__data__.has(e)},br.prototype.set=function(e,t){var n=this.__data__;if(n instanceof vr){var r=n.__data__;if(!Kn||r.length<s-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new Mr(r)}return n.set(e,t),this.size=n.size,this};var Nr=si(Jr),zr=si(Vr,!0);function Ir(e,t){var n=!0;return Nr(e,function(e,r,a){return n=!!t(e,r,a)}),n}function Rr(e,t,n){for(var r=-1,a=e.length;++r<a;){var s=e[r],o=t(s);if(null!=o&&(u===i?o==o&&!Co(o):n(o,u)))var u=o,l=s}return l}function Br(e,t){var n=[];return Nr(e,function(e,r,a){t(e,r,a)&&n.push(e)}),n}function qr(e,t,n,r,a){var i=-1,s=e.length;for(n||(n=qi),a||(a=[]);++i<s;){var o=e[i];t>0&&n(o)?t>1?qr(o,t-1,n,r,a):en(a,o):r||(a[a.length]=o)}return a}var Ur=oi(),$r=oi(!0);function Jr(e,t){return e&&Ur(e,t,au)}function Vr(e,t){return e&&$r(e,t,au)}function Gr(e,t){return Xt(t,function(t){return wo(e[t])})}function Xr(e,t){for(var n=0,r=(t=$a(t,e)).length;null!=e&&n<r;)e=e[ls(t[n++])];return n&&n==r?e:i}function Zr(e,t,n){var r=t(e);return yo(e)?r:en(r,n(e))}function Kr(e){return null==e?e===i?ie:K:an&&an in tt(e)?function(e){var t=dt.call(e,an),n=e[an];try{e[an]=i;var r=!0}catch(e){}var a=_t.call(e);return r&&(t?e[an]=n:delete e[an]),a}(e):function(e){return _t.call(e)}(e)}function Qr(e,t){return e>t}function ea(e,t){return null!=e&&dt.call(e,t)}function ta(e,t){return null!=e&&t in tt(e)}function na(e,t,n){for(var a=n?Kt:Zt,s=e[0].length,o=e.length,u=o,l=r(o),d=1/0,c=[];u--;){var h=e[u];u&&t&&(h=Qt(h,yn(t))),d=$n(h.length,d),l[u]=!n&&(t||s>=120&&h.length>=120)?new Lr(u&&h):i}h=e[0];var _=-1,f=l[0];e:for(;++_<s&&c.length<d;){var m=h[_],p=t?t(m):m;if(m=n||0!==m?m:0,!(f?vn(f,p):a(c,p,n))){for(u=o;--u;){var y=l[u];if(!(y?vn(y,p):a(e[u],p,n)))continue e}f&&f.push(p),c.push(m)}}return c}function ra(e,t,n){var r=null==(e=es(e,t=$a(t,e)))?e:e[ls(bs(t))];return null==r?i:Ut(r,e,n)}function aa(e){return So(e)&&Kr(e)==I}function ia(e,t,n,r,a){return e===t||(null==e||null==t||!So(e)&&!So(t)?e!=e&&t!=t:function(e,t,n,r,a,s){var o=yo(e),u=yo(t),l=o?R:Ii(e),d=u?R:Ii(t),c=(l=l==I?Q:l)==Q,h=(d=d==I?Q:d)==Q,_=l==d;if(_&&Lo(e)){if(!Lo(t))return!1;o=!0,c=!1}if(_&&!c)return s||(s=new br),o||Ao(e)?Si(e,t,n,r,a,s):function(e,t,n,r,a,i,s){switch(n){case le:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case ue:return!(e.byteLength!=t.byteLength||!i(new bt(e),new bt(t)));case q:case U:case Z:return _o(+e,+t);case J:return e.name==t.name&&e.message==t.message;case te:case re:return e==t+"";case X:var o=Dn;case ne:var u=r&m;if(o||(o=xn),e.size!=t.size&&!u)return!1;var l=s.get(e);if(l)return l==t;r|=p,s.set(e,t);var d=Si(o(e),o(t),r,a,i,s);return s.delete(e),d;case ae:if(cr)return cr.call(e)==cr.call(t)}return!1}(e,t,l,n,r,a,s);if(!(n&m)){var f=c&&dt.call(e,"__wrapped__"),y=h&&dt.call(t,"__wrapped__");if(f||y){var g=f?e.value():e,v=y?t.value():t;return s||(s=new br),a(g,v,n,r,s)}}return!!_&&(s||(s=new br),function(e,t,n,r,a,s){var o=n&m,u=ji(e),l=u.length,d=ji(t).length;if(l!=d&&!o)return!1;for(var c=l;c--;){var h=u[c];if(!(o?h in t:dt.call(t,h)))return!1}var _=s.get(e);if(_&&s.get(t))return _==t;var f=!0;s.set(e,t),s.set(t,e);for(var p=o;++c<l;){h=u[c];var y=e[h],g=t[h];if(r)var v=o?r(g,y,h,t,e,s):r(y,g,h,e,t,s);if(!(v===i?y===g||a(y,g,n,r,s):v)){f=!1;break}p||(p="constructor"==h)}if(f&&!p){var M=e.constructor,L=t.constructor;M!=L&&"constructor"in e&&"constructor"in t&&!("function"==typeof M&&M instanceof M&&"function"==typeof L&&L instanceof L)&&(f=!1)}return s.delete(e),s.delete(t),f}(e,t,n,r,a,s))}(e,t,n,r,ia,a))}function sa(e,t,n,r){var a=n.length,s=a,o=!r;if(null==e)return!s;for(e=tt(e);a--;){var u=n[a];if(o&&u[2]?u[1]!==e[u[0]]:!(u[0]in e))return!1}for(;++a<s;){var l=(u=n[a])[0],d=e[l],c=u[1];if(o&&u[2]){if(d===i&&!(l in e))return!1}else{var h=new br;if(r)var _=r(d,c,l,e,t,h);if(!(_===i?ia(c,d,m|p,r,h):_))return!1}}return!0}function oa(e){return!(!To(e)||(t=e,ht&&ht in t))&&(wo(e)?pt:$e).test(ds(e));var t}function ua(e){return"function"==typeof e?e:null==e?ju:"object"==typeof e?yo(e)?fa(e[0],e[1]):_a(e):Nu(e)}function la(e){if(!Xi(e))return qn(e);var t=[];for(var n in tt(e))dt.call(e,n)&&"constructor"!=n&&t.push(n);return t}function da(e){if(!To(e))return function(e){var t=[];if(null!=e)for(var n in tt(e))t.push(n);return t}(e);var t=Xi(e),n=[];for(var r in e)("constructor"!=r||!t&&dt.call(e,r))&&n.push(r);return n}function ca(e,t){return e<t}function ha(e,t){var n=-1,a=vo(e)?r(e.length):[];return Nr(e,function(e,r,i){a[++n]=t(e,r,i)}),a}function _a(e){var t=Fi(e);return 1==t.length&&t[0][2]?Ki(t[0][0],t[0][1]):function(n){return n===e||sa(n,e,t)}}function fa(e,t){return Ji(e)&&Zi(t)?Ki(ls(e),t):function(n){var r=Qo(n,e);return r===i&&r===t?eu(n,e):ia(t,r,m|p)}}function ma(e,t,n,r,a){e!==t&&Ur(t,function(s,o){if(To(s))a||(a=new br),function(e,t,n,r,a,s,o){var u=ts(e,n),l=ts(t,n),d=o.get(l);if(d)Tr(e,n,d);else{var c=s?s(u,l,n+"",e,t,o):i,h=c===i;if(h){var _=yo(l),f=!_&&Lo(l),m=!_&&!f&&Ao(l);c=l,_||f||m?yo(u)?c=u:Mo(u)?c=ni(u):f?(h=!1,c=Xa(l,!0)):m?(h=!1,c=Ka(l,!0)):c=[]:Oo(l)||po(l)?(c=u,po(u)?c=qo(u):To(u)&&!wo(u)||(c=Bi(l))):h=!1}h&&(o.set(l,c),a(c,l,r,s,o),o.delete(l)),Tr(e,n,c)}}(e,t,o,n,ma,r,a);else{var u=r?r(ts(e,o),s,o+"",e,t,a):i;u===i&&(u=s),Tr(e,o,u)}},iu)}function pa(e,t){var n=e.length;if(n)return Ui(t+=t<0?n:0,n)?e[t]:i}function ya(e,t,n){var r=-1;return t=Qt(t.length?t:[ju],yn(Ci())),function(e,t){var n=e.length;for(e.sort(t);n--;)e[n]=e[n].value;return e}(ha(e,function(e,n,a){return{criteria:Qt(t,function(t){return t(e)}),index:++r,value:e}}),function(e,t){return function(e,t,n){for(var r=-1,a=e.criteria,i=t.criteria,s=a.length,o=n.length;++r<s;){var u=Qa(a[r],i[r]);if(u){if(r>=o)return u;var l=n[r];return u*("desc"==l?-1:1)}}return e.index-t.index}(e,t,n)})}function ga(e,t,n){for(var r=-1,a=t.length,i={};++r<a;){var s=t[r],o=Xr(e,s);n(o,s)&&Da(i,$a(s,e),o)}return i}function va(e,t,n,r){var a=r?ln:un,i=-1,s=t.length,o=e;for(e===t&&(t=ni(t)),n&&(o=Qt(e,yn(n)));++i<s;)for(var u=0,l=t[i],d=n?n(l):l;(u=a(o,d,u,r))>-1;)o!==e&&Ct.call(o,u,1),Ct.call(e,u,1);return e}function Ma(e,t){for(var n=e?t.length:0,r=n-1;n--;){var a=t[n];if(n==r||a!==i){var i=a;Ui(a)?Ct.call(e,a,1):Wa(e,a)}}return e}function La(e,t){return e+Nn(Gn()*(t-e+1))}function ba(e,t){var n="";if(!e||t<1||t>P)return n;do{t%2&&(n+=e),(t=Nn(t/2))&&(e+=e)}while(t);return n}function Ya(e,t){return as(Qi(e,t,ju),e+"")}function wa(e){return wr(_u(e))}function ka(e,t){var n=_u(e);return os(n,Pr(t,0,n.length))}function Da(e,t,n,r){if(!To(e))return e;for(var a=-1,s=(t=$a(t,e)).length,o=s-1,u=e;null!=u&&++a<s;){var l=ls(t[a]),d=n;if(a!=o){var c=u[l];(d=r?r(c,l,u):i)===i&&(d=To(c)?c:Ui(t[a+1])?[]:{})}Sr(u,l,d),u=u[l]}return e}var Ta=rr?function(e,t){return rr.set(e,t),e}:ju,Sa=_n?function(e,t){return _n(e,"toString",{configurable:!0,enumerable:!1,value:Tu(t),writable:!0})}:ju;function xa(e){return os(_u(e))}function ja(e,t,n){var a=-1,i=e.length;t<0&&(t=-t>i?0:i+t),(n=n>i?i:n)<0&&(n+=i),i=t>n?0:n-t>>>0,t>>>=0;for(var s=r(i);++a<i;)s[a]=e[a+t];return s}function Oa(e,t){var n;return Nr(e,function(e,r,a){return!(n=t(e,r,a))}),!!n}function Ea(e,t,n){var r=0,a=null==e?r:e.length;if("number"==typeof t&&t==t&&a<=N){for(;r<a;){var i=r+a>>>1,s=e[i];null!==s&&!Co(s)&&(n?s<=t:s<t)?r=i+1:a=i}return a}return Ha(e,t,ju,n)}function Ha(e,t,n,r){t=n(t);for(var a=0,s=null==e?0:e.length,o=t!=t,u=null===t,l=Co(t),d=t===i;a<s;){var c=Nn((a+s)/2),h=n(e[c]),_=h!==i,f=null===h,m=h==h,p=Co(h);if(o)var y=r||m;else y=d?m&&(r||_):u?m&&_&&(r||!f):l?m&&_&&!f&&(r||!p):!f&&!p&&(r?h<=t:h<t);y?a=c+1:s=c}return $n(s,W)}function Pa(e,t){for(var n=-1,r=e.length,a=0,i=[];++n<r;){var s=e[n],o=t?t(s):s;if(!n||!_o(o,u)){var u=o;i[a++]=0===s?0:s}}return i}function Ca(e){return"number"==typeof e?e:Co(e)?A:+e}function Aa(e){if("string"==typeof e)return e;if(yo(e))return Qt(e,Aa)+"";if(Co(e))return hr?hr.call(e):"";var t=e+"";return"0"==t&&1/e==-H?"-0":t}function Fa(e,t,n){var r=-1,a=Zt,i=e.length,o=!0,u=[],l=u;if(n)o=!1,a=Kt;else if(i>=s){var d=t?null:bi(e);if(d)return xn(d);o=!1,a=vn,l=new Lr}else l=t?[]:u;e:for(;++r<i;){var c=e[r],h=t?t(c):c;if(c=n||0!==c?c:0,o&&h==h){for(var _=l.length;_--;)if(l[_]===h)continue e;t&&l.push(h),u.push(c)}else a(l,h,n)||(l!==u&&l.push(h),u.push(c))}return u}function Wa(e,t){return null==(e=es(e,t=$a(t,e)))||delete e[ls(bs(t))]}function Na(e,t,n,r){return Da(e,t,n(Xr(e,t)),r)}function za(e,t,n,r){for(var a=e.length,i=r?a:-1;(r?i--:++i<a)&&t(e[i],i,e););return n?ja(e,r?0:i,r?i+1:a):ja(e,r?i+1:0,r?a:i)}function Ia(e,t){var n=e;return n instanceof yr&&(n=n.value()),tn(t,function(e,t){return t.func.apply(t.thisArg,en([e],t.args))},n)}function Ra(e,t,n){var a=e.length;if(a<2)return a?Fa(e[0]):[];for(var i=-1,s=r(a);++i<a;)for(var o=e[i],u=-1;++u<a;)u!=i&&(s[i]=Wr(s[i]||o,e[u],t,n));return Fa(qr(s,1),t,n)}function Ba(e,t,n){for(var r=-1,a=e.length,s=t.length,o={};++r<a;){var u=r<s?t[r]:i;n(o,e[r],u)}return o}function qa(e){return Mo(e)?e:[]}function Ua(e){return"function"==typeof e?e:ju}function $a(e,t){return yo(e)?e:Ji(e,t)?[e]:us(Uo(e))}var Ja=Ya;function Va(e,t,n){var r=e.length;return n=n===i?r:n,!t&&n>=r?e:ja(e,t,n)}var Ga=Cn||function(e){return Ht.clearTimeout(e)};function Xa(e,t){if(t)return e.slice();var n=e.length,r=St?St(n):new e.constructor(n);return e.copy(r),r}function Za(e){var t=new e.constructor(e.byteLength);return new bt(t).set(new bt(e)),t}function Ka(e,t){var n=t?Za(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}function Qa(e,t){if(e!==t){var n=e!==i,r=null===e,a=e==e,s=Co(e),o=t!==i,u=null===t,l=t==t,d=Co(t);if(!u&&!d&&!s&&e>t||s&&o&&l&&!u&&!d||r&&o&&l||!n&&l||!a)return 1;if(!r&&!s&&!d&&e<t||d&&n&&a&&!r&&!s||u&&n&&a||!o&&a||!l)return-1}return 0}function ei(e,t,n,a){for(var i=-1,s=e.length,o=n.length,u=-1,l=t.length,d=Un(s-o,0),c=r(l+d),h=!a;++u<l;)c[u]=t[u];for(;++i<o;)(h||i<s)&&(c[n[i]]=e[i]);for(;d--;)c[u++]=e[i++];return c}function ti(e,t,n,a){for(var i=-1,s=e.length,o=-1,u=n.length,l=-1,d=t.length,c=Un(s-u,0),h=r(c+d),_=!a;++i<c;)h[i]=e[i];for(var f=i;++l<d;)h[f+l]=t[l];for(;++o<u;)(_||i<s)&&(h[f+n[o]]=e[i++]);return h}function ni(e,t){var n=-1,a=e.length;for(t||(t=r(a));++n<a;)t[n]=e[n];return t}function ri(e,t,n,r){var a=!n;n||(n={});for(var s=-1,o=t.length;++s<o;){var u=t[s],l=r?r(n[u],e[u],u,n,e):i;l===i&&(l=e[u]),a?Er(n,u,l):Sr(n,u,l)}return n}function ai(e,t){return function(n,r){var a=yo(n)?$t:jr,i=t?t():{};return a(n,e,Ci(r,2),i)}}function ii(e){return Ya(function(t,n){var r=-1,a=n.length,s=a>1?n[a-1]:i,o=a>2?n[2]:i;for(s=e.length>3&&"function"==typeof s?(a--,s):i,o&&$i(n[0],n[1],o)&&(s=a<3?i:s,a=1),t=tt(t);++r<a;){var u=n[r];u&&e(t,u,r,s)}return t})}function si(e,t){return function(n,r){if(null==n)return n;if(!vo(n))return e(n,r);for(var a=n.length,i=t?a:-1,s=tt(n);(t?i--:++i<a)&&!1!==r(s[i],i,s););return n}}function oi(e){return function(t,n,r){for(var a=-1,i=tt(t),s=r(t),o=s.length;o--;){var u=s[e?o:++a];if(!1===n(i[u],u,i))break}return t}}function ui(e){return function(t){var n=kn(t=Uo(t))?En(t):i,r=n?n[0]:t.charAt(0),a=n?Va(n,1).join(""):t.slice(1);return r[e]()+a}}function li(e){return function(t){return tn(wu(pu(t).replace(gt,"")),e,"")}}function di(e){return function(){var t=arguments;switch(t.length){case 0:return new e;case 1:return new e(t[0]);case 2:return new e(t[0],t[1]);case 3:return new e(t[0],t[1],t[2]);case 4:return new e(t[0],t[1],t[2],t[3]);case 5:return new e(t[0],t[1],t[2],t[3],t[4]);case 6:return new e(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new e(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var n=fr(e.prototype),r=e.apply(n,t);return To(r)?r:n}}function ci(e){return function(t,n,r){var a=tt(t);if(!vo(t)){var s=Ci(n,3);t=au(t),n=function(e){return s(a[e],e,a)}}var o=e(t,n,r);return o>-1?a[s?t[o]:o]:i}}function hi(e){return xi(function(t){var n=t.length,r=n,a=pr.prototype.thru;for(e&&t.reverse();r--;){var s=t[r];if("function"!=typeof s)throw new at(u);if(a&&!o&&"wrapper"==Hi(s))var o=new pr([],!0)}for(r=o?r:n;++r<n;){var l=Hi(s=t[r]),d="wrapper"==l?Ei(s):i;o=d&&Vi(d[0])&&d[1]==(w|M|b|k)&&!d[4].length&&1==d[9]?o[Hi(d[0])].apply(o,d[3]):1==s.length&&Vi(s)?o[l]():o.thru(s)}return function(){var e=arguments,r=e[0];if(o&&1==e.length&&yo(r))return o.plant(r).value();for(var a=0,i=n?t[a].apply(this,e):r;++a<n;)i=t[a].call(this,i);return i}})}function _i(e,t,n,a,s,o,u,l,d,c){var h=t&w,_=t&y,f=t&g,m=t&(M|L),p=t&D,v=f?i:di(e);return function y(){for(var g=arguments.length,M=r(g),L=g;L--;)M[L]=arguments[L];if(m)var b=Pi(y),Y=function(e,t){for(var n=e.length,r=0;n--;)e[n]===t&&++r;return r}(M,b);if(a&&(M=ei(M,a,s,m)),o&&(M=ti(M,o,u,m)),g-=Y,m&&g<c){var w=Sn(M,b);return Mi(e,t,_i,y.placeholder,n,M,w,l,d,c-g)}var k=_?n:this,D=f?k[e]:e;return g=M.length,l?M=function(e,t){for(var n=e.length,r=$n(t.length,n),a=ni(e);r--;){var s=t[r];e[r]=Ui(s,n)?a[s]:i}return e}(M,l):p&&g>1&&M.reverse(),h&&d<g&&(M.length=d),this&&this!==Ht&&this instanceof y&&(D=v||di(D)),D.apply(k,M)}}function fi(e,t){return function(n,r){return function(e,t,n,r){return Jr(e,function(e,a,i){t(r,n(e),a,i)}),r}(n,e,t(r),{})}}function mi(e,t){return function(n,r){var a;if(n===i&&r===i)return t;if(n!==i&&(a=n),r!==i){if(a===i)return r;"string"==typeof n||"string"==typeof r?(n=Aa(n),r=Aa(r)):(n=Ca(n),r=Ca(r)),a=e(n,r)}return a}}function pi(e){return xi(function(t){return t=Qt(t,yn(Ci())),Ya(function(n){var r=this;return e(t,function(e){return Ut(e,r,n)})})})}function yi(e,t){var n=(t=t===i?" ":Aa(t)).length;if(n<2)return n?ba(t,e):t;var r=ba(t,Wn(e/On(t)));return kn(t)?Va(En(r),0,e).join(""):r.slice(0,e)}function gi(e){return function(t,n,a){return a&&"number"!=typeof a&&$i(t,n,a)&&(n=a=i),t=zo(t),n===i?(n=t,t=0):n=zo(n),function(e,t,n,a){for(var i=-1,s=Un(Wn((t-e)/(n||1)),0),o=r(s);s--;)o[a?s:++i]=e,e+=n;return o}(t,n,a=a===i?t<n?1:-1:zo(a),e)}}function vi(e){return function(t,n){return"string"==typeof t&&"string"==typeof n||(t=Bo(t),n=Bo(n)),e(t,n)}}function Mi(e,t,n,r,a,s,o,u,l,d){var c=t&M;t|=c?b:Y,(t&=~(c?Y:b))&v||(t&=~(y|g));var h=[e,t,a,c?s:i,c?o:i,c?i:s,c?i:o,u,l,d],_=n.apply(i,h);return Vi(e)&&ns(_,h),_.placeholder=r,is(_,e,t)}function Li(e){var t=et[e];return function(e,n){if(e=Bo(e),n=null==n?0:$n(Io(n),292)){var r=(Uo(e)+"e").split("e");return+((r=(Uo(t(r[0]+"e"+(+r[1]+n)))+"e").split("e"))[0]+"e"+(+r[1]-n))}return t(e)}}var bi=er&&1/xn(new er([,-0]))[1]==H?function(e){return new er(e)}:Cu;function Yi(e){return function(t){var n=Ii(t);return n==X?Dn(t):n==ne?jn(t):function(e,t){return Qt(t,function(t){return[t,e[t]]})}(t,e(t))}}function wi(e,t,n,a,s,o,l,d){var h=t&g;if(!h&&"function"!=typeof e)throw new at(u);var _=a?a.length:0;if(_||(t&=~(b|Y),a=s=i),l=l===i?l:Un(Io(l),0),d=d===i?d:Io(d),_-=s?s.length:0,t&Y){var f=a,m=s;a=s=i}var p=h?i:Ei(e),D=[e,t,n,a,s,f,m,o,l,d];if(p&&function(e,t){var n=e[1],r=t[1],a=n|r,i=a<(y|g|w),s=r==w&&n==M||r==w&&n==k&&e[7].length<=t[8]||r==(w|k)&&t[7].length<=t[8]&&n==M;if(!i&&!s)return e;r&y&&(e[2]=t[2],a|=n&y?0:v);var o=t[3];if(o){var u=e[3];e[3]=u?ei(u,o,t[4]):o,e[4]=u?Sn(e[3],c):t[4]}(o=t[5])&&(u=e[5],e[5]=u?ti(u,o,t[6]):o,e[6]=u?Sn(e[5],c):t[6]),(o=t[7])&&(e[7]=o),r&w&&(e[8]=null==e[8]?t[8]:$n(e[8],t[8])),null==e[9]&&(e[9]=t[9]),e[0]=t[0],e[1]=a}(D,p),e=D[0],t=D[1],n=D[2],a=D[3],s=D[4],!(d=D[9]=D[9]===i?h?0:e.length:Un(D[9]-_,0))&&t&(M|L)&&(t&=~(M|L)),t&&t!=y)T=t==M||t==L?function(e,t,n){var a=di(e);return function s(){for(var o=arguments.length,u=r(o),l=o,d=Pi(s);l--;)u[l]=arguments[l];var c=o<3&&u[0]!==d&&u[o-1]!==d?[]:Sn(u,d);return(o-=c.length)<n?Mi(e,t,_i,s.placeholder,i,u,c,i,i,n-o):Ut(this&&this!==Ht&&this instanceof s?a:e,this,u)}}(e,t,d):t!=b&&t!=(y|b)||s.length?_i.apply(i,D):function(e,t,n,a){var i=t&y,s=di(e);return function t(){for(var o=-1,u=arguments.length,l=-1,d=a.length,c=r(d+u),h=this&&this!==Ht&&this instanceof t?s:e;++l<d;)c[l]=a[l];for(;u--;)c[l++]=arguments[++o];return Ut(h,i?n:this,c)}}(e,t,n,a);else var T=function(e,t,n){var r=t&y,a=di(e);return function t(){return(this&&this!==Ht&&this instanceof t?a:e).apply(r?n:this,arguments)}}(e,t,n);return is((p?Ta:ns)(T,D),e,t)}function ki(e,t,n,r){return e===i||_o(e,ot[n])&&!dt.call(r,n)?t:e}function Di(e,t,n,r,a,s){return To(e)&&To(t)&&(s.set(t,e),ma(e,t,i,Di,s),s.delete(t)),e}function Ti(e){return Oo(e)?i:e}function Si(e,t,n,r,a,s){var o=n&m,u=e.length,l=t.length;if(u!=l&&!(o&&l>u))return!1;var d=s.get(e);if(d&&s.get(t))return d==t;var c=-1,h=!0,_=n&p?new Lr:i;for(s.set(e,t),s.set(t,e);++c<u;){var f=e[c],y=t[c];if(r)var g=o?r(y,f,c,t,e,s):r(f,y,c,e,t,s);if(g!==i){if(g)continue;h=!1;break}if(_){if(!rn(t,function(e,t){if(!vn(_,t)&&(f===e||a(f,e,n,r,s)))return _.push(t)})){h=!1;break}}else if(f!==y&&!a(f,y,n,r,s)){h=!1;break}}return s.delete(e),s.delete(t),h}function xi(e){return as(Qi(e,i,ys),e+"")}function ji(e){return Zr(e,au,Ni)}function Oi(e){return Zr(e,iu,zi)}var Ei=rr?function(e){return rr.get(e)}:Cu;function Hi(e){for(var t=e.name+"",n=ar[t],r=dt.call(ar,t)?n.length:0;r--;){var a=n[r],i=a.func;if(null==i||i==e)return a.name}return t}function Pi(e){return(dt.call(_r,"placeholder")?_r:e).placeholder}function Ci(){var e=_r.iteratee||Ou;return e=e===Ou?ua:e,arguments.length?e(arguments[0],arguments[1]):e}function Ai(e,t){var n,r,a=e.__data__;return("string"==(r=typeof(n=t))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==n:null===n)?a["string"==typeof t?"string":"hash"]:a.map}function Fi(e){for(var t=au(e),n=t.length;n--;){var r=t[n],a=e[r];t[n]=[r,a,Zi(a)]}return t}function Wi(e,t){var n=function(e,t){return null==e?i:e[t]}(e,t);return oa(n)?n:i}var Ni=zn?function(e){return null==e?[]:(e=tt(e),Xt(zn(e),function(t){return Pt.call(e,t)}))}:Ru,zi=zn?function(e){for(var t=[];e;)en(t,Ni(e)),e=Ot(e);return t}:Ru,Ii=Kr;function Ri(e,t,n){for(var r=-1,a=(t=$a(t,e)).length,i=!1;++r<a;){var s=ls(t[r]);if(!(i=null!=e&&n(e,s)))break;e=e[s]}return i||++r!=a?i:!!(a=null==e?0:e.length)&&Do(a)&&Ui(s,a)&&(yo(e)||po(e))}function Bi(e){return"function"!=typeof e.constructor||Xi(e)?{}:fr(Ot(e))}function qi(e){return yo(e)||po(e)||!!(Ft&&e&&e[Ft])}function Ui(e,t){var n=typeof e;return!!(t=null==t?P:t)&&("number"==n||"symbol"!=n&&Ve.test(e))&&e>-1&&e%1==0&&e<t}function $i(e,t,n){if(!To(n))return!1;var r=typeof t;return!!("number"==r?vo(n)&&Ui(t,n.length):"string"==r&&t in n)&&_o(n[t],e)}function Ji(e,t){if(yo(e))return!1;var n=typeof e;return!("number"!=n&&"symbol"!=n&&"boolean"!=n&&null!=e&&!Co(e))||je.test(e)||!xe.test(e)||null!=t&&e in tt(t)}function Vi(e){var t=Hi(e),n=_r[t];if("function"!=typeof n||!(t in yr.prototype))return!1;if(e===n)return!0;var r=Ei(n);return!!r&&e===r[0]}(Zn&&Ii(new Zn(new ArrayBuffer(1)))!=le||Kn&&Ii(new Kn)!=X||Qn&&"[object Promise]"!=Ii(Qn.resolve())||er&&Ii(new er)!=ne||tr&&Ii(new tr)!=se)&&(Ii=function(e){var t=Kr(e),n=t==Q?e.constructor:i,r=n?ds(n):"";if(r)switch(r){case ir:return le;case sr:return X;case or:return"[object Promise]";case ur:return ne;case lr:return se}return t});var Gi=ut?wo:Bu;function Xi(e){var t=e&&e.constructor;return e===("function"==typeof t&&t.prototype||ot)}function Zi(e){return e==e&&!To(e)}function Ki(e,t){return function(n){return null!=n&&n[e]===t&&(t!==i||e in tt(n))}}function Qi(e,t,n){return t=Un(t===i?e.length-1:t,0),function(){for(var a=arguments,i=-1,s=Un(a.length-t,0),o=r(s);++i<s;)o[i]=a[t+i];i=-1;for(var u=r(t+1);++i<t;)u[i]=a[i];return u[t]=n(o),Ut(e,this,u)}}function es(e,t){return t.length<2?e:Xr(e,ja(t,0,-1))}function ts(e,t){if("__proto__"!=t)return e[t]}var ns=ss(Ta),rs=Fn||function(e,t){return Ht.setTimeout(e,t)},as=ss(Sa);function is(e,t,n){var r=t+"";return as(e,function(e,t){var n=t.length;if(!n)return e;var r=n-1;return t[r]=(n>1?"& ":"")+t[r],t=t.join(n>2?", ":" "),e.replace(Fe,"{\n/* [wrapped with "+t+"] */\n")}(r,function(e,t){return Jt(z,function(n){var r="_."+n[0];t&n[1]&&!Zt(e,r)&&e.push(r)}),e.sort()}(function(e){var t=e.match(We);return t?t[1].split(Ne):[]}(r),n)))}function ss(e){var t=0,n=0;return function(){var r=Jn(),a=j-(r-n);if(n=r,a>0){if(++t>=x)return arguments[0]}else t=0;return e.apply(i,arguments)}}function os(e,t){var n=-1,r=e.length,a=r-1;for(t=t===i?r:t;++n<t;){var s=La(n,a),o=e[s];e[s]=e[n],e[n]=o}return e.length=t,e}var us=function(e){var t=so(e,function(e){return n.size===d&&n.clear(),e}),n=t.cache;return t}(function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(Oe,function(e,n,r,a){t.push(r?a.replace(Ie,"$1"):n||e)}),t});function ls(e){if("string"==typeof e||Co(e))return e;var t=e+"";return"0"==t&&1/e==-H?"-0":t}function ds(e){if(null!=e){try{return lt.call(e)}catch(e){}try{return e+""}catch(e){}}return""}function cs(e){if(e instanceof yr)return e.clone();var t=new pr(e.__wrapped__,e.__chain__);return t.__actions__=ni(e.__actions__),t.__index__=e.__index__,t.__values__=e.__values__,t}var hs=Ya(function(e,t){return Mo(e)?Wr(e,qr(t,1,Mo,!0)):[]}),_s=Ya(function(e,t){var n=bs(t);return Mo(n)&&(n=i),Mo(e)?Wr(e,qr(t,1,Mo,!0),Ci(n,2)):[]}),fs=Ya(function(e,t){var n=bs(t);return Mo(n)&&(n=i),Mo(e)?Wr(e,qr(t,1,Mo,!0),i,n):[]});function ms(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var a=null==n?0:Io(n);return a<0&&(a=Un(r+a,0)),on(e,Ci(t,3),a)}function ps(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var a=r-1;return n!==i&&(a=Io(n),a=n<0?Un(r+a,0):$n(a,r-1)),on(e,Ci(t,3),a,!0)}function ys(e){return null!=e&&e.length?qr(e,1):[]}function gs(e){return e&&e.length?e[0]:i}var vs=Ya(function(e){var t=Qt(e,qa);return t.length&&t[0]===e[0]?na(t):[]}),Ms=Ya(function(e){var t=bs(e),n=Qt(e,qa);return t===bs(n)?t=i:n.pop(),n.length&&n[0]===e[0]?na(n,Ci(t,2)):[]}),Ls=Ya(function(e){var t=bs(e),n=Qt(e,qa);return(t="function"==typeof t?t:i)&&n.pop(),n.length&&n[0]===e[0]?na(n,i,t):[]});function bs(e){var t=null==e?0:e.length;return t?e[t-1]:i}var Ys=Ya(ws);function ws(e,t){return e&&e.length&&t&&t.length?va(e,t):e}var ks=xi(function(e,t){var n=null==e?0:e.length,r=Hr(e,t);return Ma(e,Qt(t,function(e){return Ui(e,n)?+e:e}).sort(Qa)),r});function Ds(e){return null==e?e:Xn.call(e)}var Ts=Ya(function(e){return Fa(qr(e,1,Mo,!0))}),Ss=Ya(function(e){var t=bs(e);return Mo(t)&&(t=i),Fa(qr(e,1,Mo,!0),Ci(t,2))}),xs=Ya(function(e){var t=bs(e);return t="function"==typeof t?t:i,Fa(qr(e,1,Mo,!0),i,t)});function js(e){if(!e||!e.length)return[];var t=0;return e=Xt(e,function(e){if(Mo(e))return t=Un(e.length,t),!0}),pn(t,function(t){return Qt(e,hn(t))})}function Os(e,t){if(!e||!e.length)return[];var n=js(e);return null==t?n:Qt(n,function(e){return Ut(t,i,e)})}var Es=Ya(function(e,t){return Mo(e)?Wr(e,t):[]}),Hs=Ya(function(e){return Ra(Xt(e,Mo))}),Ps=Ya(function(e){var t=bs(e);return Mo(t)&&(t=i),Ra(Xt(e,Mo),Ci(t,2))}),Cs=Ya(function(e){var t=bs(e);return t="function"==typeof t?t:i,Ra(Xt(e,Mo),i,t)}),As=Ya(js);var Fs=Ya(function(e){var t=e.length,n=t>1?e[t-1]:i;return n="function"==typeof n?(e.pop(),n):i,Os(e,n)});function Ws(e){var t=_r(e);return t.__chain__=!0,t}function Ns(e,t){return t(e)}var zs=xi(function(e){var t=e.length,n=t?e[0]:0,r=this.__wrapped__,a=function(t){return Hr(t,e)};return!(t>1||this.__actions__.length)&&r instanceof yr&&Ui(n)?((r=r.slice(n,+n+(t?1:0))).__actions__.push({func:Ns,args:[a],thisArg:i}),new pr(r,this.__chain__).thru(function(e){return t&&!e.length&&e.push(i),e})):this.thru(a)});var Is=ai(function(e,t,n){dt.call(e,n)?++e[n]:Er(e,n,1)});var Rs=ci(ms),Bs=ci(ps);function qs(e,t){return(yo(e)?Jt:Nr)(e,Ci(t,3))}function Us(e,t){return(yo(e)?Vt:zr)(e,Ci(t,3))}var $s=ai(function(e,t,n){dt.call(e,n)?e[n].push(t):Er(e,n,[t])});var Js=Ya(function(e,t,n){var a=-1,i="function"==typeof t,s=vo(e)?r(e.length):[];return Nr(e,function(e){s[++a]=i?Ut(t,e,n):ra(e,t,n)}),s}),Vs=ai(function(e,t,n){Er(e,n,t)});function Gs(e,t){return(yo(e)?Qt:ha)(e,Ci(t,3))}var Xs=ai(function(e,t,n){e[n?0:1].push(t)},function(){return[[],[]]});var Zs=Ya(function(e,t){if(null==e)return[];var n=t.length;return n>1&&$i(e,t[0],t[1])?t=[]:n>2&&$i(t[0],t[1],t[2])&&(t=[t[0]]),ya(e,qr(t,1),[])}),Ks=An||function(){return Ht.Date.now()};function Qs(e,t,n){return t=n?i:t,t=e&&null==t?e.length:t,wi(e,w,i,i,i,i,t)}function eo(e,t){var n;if("function"!=typeof t)throw new at(u);return e=Io(e),function(){return--e>0&&(n=t.apply(this,arguments)),e<=1&&(t=i),n}}var to=Ya(function(e,t,n){var r=y;if(n.length){var a=Sn(n,Pi(to));r|=b}return wi(e,r,t,n,a)}),no=Ya(function(e,t,n){var r=y|g;if(n.length){var a=Sn(n,Pi(no));r|=b}return wi(t,r,e,n,a)});function ro(e,t,n){var r,a,s,o,l,d,c=0,h=!1,_=!1,f=!0;if("function"!=typeof e)throw new at(u);function m(t){var n=r,s=a;return r=a=i,c=t,o=e.apply(s,n)}function p(e){var n=e-d;return d===i||n>=t||n<0||_&&e-c>=s}function y(){var e=Ks();if(p(e))return g(e);l=rs(y,function(e){var n=t-(e-d);return _?$n(n,s-(e-c)):n}(e))}function g(e){return l=i,f&&r?m(e):(r=a=i,o)}function v(){var e=Ks(),n=p(e);if(r=arguments,a=this,d=e,n){if(l===i)return function(e){return c=e,l=rs(y,t),h?m(e):o}(d);if(_)return l=rs(y,t),m(d)}return l===i&&(l=rs(y,t)),o}return t=Bo(t)||0,To(n)&&(h=!!n.leading,s=(_="maxWait"in n)?Un(Bo(n.maxWait)||0,t):s,f="trailing"in n?!!n.trailing:f),v.cancel=function(){l!==i&&Ga(l),c=0,r=d=a=l=i},v.flush=function(){return l===i?o:g(Ks())},v}var ao=Ya(function(e,t){return Fr(e,1,t)}),io=Ya(function(e,t,n){return Fr(e,Bo(t)||0,n)});function so(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new at(u);var n=function(){var r=arguments,a=t?t.apply(this,r):r[0],i=n.cache;if(i.has(a))return i.get(a);var s=e.apply(this,r);return n.cache=i.set(a,s)||i,s};return n.cache=new(so.Cache||Mr),n}function oo(e){if("function"!=typeof e)throw new at(u);return function(){var t=arguments;switch(t.length){case 0:return!e.call(this);case 1:return!e.call(this,t[0]);case 2:return!e.call(this,t[0],t[1]);case 3:return!e.call(this,t[0],t[1],t[2])}return!e.apply(this,t)}}so.Cache=Mr;var uo=Ja(function(e,t){var n=(t=1==t.length&&yo(t[0])?Qt(t[0],yn(Ci())):Qt(qr(t,1),yn(Ci()))).length;return Ya(function(r){for(var a=-1,i=$n(r.length,n);++a<i;)r[a]=t[a].call(this,r[a]);return Ut(e,this,r)})}),lo=Ya(function(e,t){var n=Sn(t,Pi(lo));return wi(e,b,i,t,n)}),co=Ya(function(e,t){var n=Sn(t,Pi(co));return wi(e,Y,i,t,n)}),ho=xi(function(e,t){return wi(e,k,i,i,i,t)});function _o(e,t){return e===t||e!=e&&t!=t}var fo=vi(Qr),mo=vi(function(e,t){return e>=t}),po=aa(function(){return arguments}())?aa:function(e){return So(e)&&dt.call(e,"callee")&&!Pt.call(e,"callee")},yo=r.isArray,go=Nt?yn(Nt):function(e){return So(e)&&Kr(e)==ue};function vo(e){return null!=e&&Do(e.length)&&!wo(e)}function Mo(e){return So(e)&&vo(e)}var Lo=In||Bu,bo=zt?yn(zt):function(e){return So(e)&&Kr(e)==U};function Yo(e){if(!So(e))return!1;var t=Kr(e);return t==J||t==$||"string"==typeof e.message&&"string"==typeof e.name&&!Oo(e)}function wo(e){if(!To(e))return!1;var t=Kr(e);return t==V||t==G||t==B||t==ee}function ko(e){return"number"==typeof e&&e==Io(e)}function Do(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=P}function To(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}function So(e){return null!=e&&"object"==typeof e}var xo=It?yn(It):function(e){return So(e)&&Ii(e)==X};function jo(e){return"number"==typeof e||So(e)&&Kr(e)==Z}function Oo(e){if(!So(e)||Kr(e)!=Q)return!1;var t=Ot(e);if(null===t)return!0;var n=dt.call(t,"constructor")&&t.constructor;return"function"==typeof n&&n instanceof n&&lt.call(n)==ft}var Eo=Rt?yn(Rt):function(e){return So(e)&&Kr(e)==te};var Ho=Bt?yn(Bt):function(e){return So(e)&&Ii(e)==ne};function Po(e){return"string"==typeof e||!yo(e)&&So(e)&&Kr(e)==re}function Co(e){return"symbol"==typeof e||So(e)&&Kr(e)==ae}var Ao=qt?yn(qt):function(e){return So(e)&&Do(e.length)&&!!Dt[Kr(e)]};var Fo=vi(ca),Wo=vi(function(e,t){return e<=t});function No(e){if(!e)return[];if(vo(e))return Po(e)?En(e):ni(e);if(Wt&&e[Wt])return function(e){for(var t,n=[];!(t=e.next()).done;)n.push(t.value);return n}(e[Wt]());var t=Ii(e);return(t==X?Dn:t==ne?xn:_u)(e)}function zo(e){return e?(e=Bo(e))===H||e===-H?(e<0?-1:1)*C:e==e?e:0:0===e?e:0}function Io(e){var t=zo(e),n=t%1;return t==t?n?t-n:t:0}function Ro(e){return e?Pr(Io(e),0,F):0}function Bo(e){if("number"==typeof e)return e;if(Co(e))return A;if(To(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=To(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(Pe,"");var n=Ue.test(e);return n||Je.test(e)?jt(e.slice(2),n?2:8):qe.test(e)?A:+e}function qo(e){return ri(e,iu(e))}function Uo(e){return null==e?"":Aa(e)}var $o=ii(function(e,t){if(Xi(t)||vo(t))ri(t,au(t),e);else for(var n in t)dt.call(t,n)&&Sr(e,n,t[n])}),Jo=ii(function(e,t){ri(t,iu(t),e)}),Vo=ii(function(e,t,n,r){ri(t,iu(t),e,r)}),Go=ii(function(e,t,n,r){ri(t,au(t),e,r)}),Xo=xi(Hr);var Zo=Ya(function(e,t){e=tt(e);var n=-1,r=t.length,a=r>2?t[2]:i;for(a&&$i(t[0],t[1],a)&&(r=1);++n<r;)for(var s=t[n],o=iu(s),u=-1,l=o.length;++u<l;){var d=o[u],c=e[d];(c===i||_o(c,ot[d])&&!dt.call(e,d))&&(e[d]=s[d])}return e}),Ko=Ya(function(e){return e.push(i,Di),Ut(ou,i,e)});function Qo(e,t,n){var r=null==e?i:Xr(e,t);return r===i?n:r}function eu(e,t){return null!=e&&Ri(e,t,ta)}var tu=fi(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=_t.call(t)),e[t]=n},Tu(ju)),nu=fi(function(e,t,n){null!=t&&"function"!=typeof t.toString&&(t=_t.call(t)),dt.call(e,t)?e[t].push(n):e[t]=[n]},Ci),ru=Ya(ra);function au(e){return vo(e)?Yr(e):la(e)}function iu(e){return vo(e)?Yr(e,!0):da(e)}var su=ii(function(e,t,n){ma(e,t,n)}),ou=ii(function(e,t,n,r){ma(e,t,n,r)}),uu=xi(function(e,t){var n={};if(null==e)return n;var r=!1;t=Qt(t,function(t){return t=$a(t,e),r||(r=t.length>1),t}),ri(e,Oi(e),n),r&&(n=Cr(n,h|_|f,Ti));for(var a=t.length;a--;)Wa(n,t[a]);return n});var lu=xi(function(e,t){return null==e?{}:function(e,t){return ga(e,t,function(t,n){return eu(e,n)})}(e,t)});function du(e,t){if(null==e)return{};var n=Qt(Oi(e),function(e){return[e]});return t=Ci(t),ga(e,n,function(e,n){return t(e,n[0])})}var cu=Yi(au),hu=Yi(iu);function _u(e){return null==e?[]:gn(e,au(e))}var fu=li(function(e,t,n){return t=t.toLowerCase(),e+(n?mu(t):t)});function mu(e){return Yu(Uo(e).toLowerCase())}function pu(e){return(e=Uo(e))&&e.replace(Ge,bn).replace(vt,"")}var yu=li(function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}),gu=li(function(e,t,n){return e+(n?" ":"")+t.toLowerCase()}),vu=ui("toLowerCase");var Mu=li(function(e,t,n){return e+(n?"_":"")+t.toLowerCase()});var Lu=li(function(e,t,n){return e+(n?" ":"")+Yu(t)});var bu=li(function(e,t,n){return e+(n?" ":"")+t.toUpperCase()}),Yu=ui("toUpperCase");function wu(e,t,n){return e=Uo(e),(t=n?i:t)===i?function(e){return Yt.test(e)}(e)?function(e){return e.match(Lt)||[]}(e):function(e){return e.match(ze)||[]}(e):e.match(t)||[]}var ku=Ya(function(e,t){try{return Ut(e,i,t)}catch(e){return Yo(e)?e:new Ke(e)}}),Du=xi(function(e,t){return Jt(t,function(t){t=ls(t),Er(e,t,to(e[t],e))}),e});function Tu(e){return function(){return e}}var Su=hi(),xu=hi(!0);function ju(e){return e}function Ou(e){return ua("function"==typeof e?e:Cr(e,h))}var Eu=Ya(function(e,t){return function(n){return ra(n,e,t)}}),Hu=Ya(function(e,t){return function(n){return ra(e,n,t)}});function Pu(e,t,n){var r=au(t),a=Gr(t,r);null!=n||To(t)&&(a.length||!r.length)||(n=t,t=e,e=this,a=Gr(t,au(t)));var i=!(To(n)&&"chain"in n&&!n.chain),s=wo(e);return Jt(a,function(n){var r=t[n];e[n]=r,s&&(e.prototype[n]=function(){var t=this.__chain__;if(i||t){var n=e(this.__wrapped__);return(n.__actions__=ni(this.__actions__)).push({func:r,args:arguments,thisArg:e}),n.__chain__=t,n}return r.apply(e,en([this.value()],arguments))})}),e}function Cu(){}var Au=pi(Qt),Fu=pi(Gt),Wu=pi(rn);function Nu(e){return Ji(e)?hn(ls(e)):function(e){return function(t){return Xr(t,e)}}(e)}var zu=gi(),Iu=gi(!0);function Ru(){return[]}function Bu(){return!1}var qu=mi(function(e,t){return e+t},0),Uu=Li("ceil"),$u=mi(function(e,t){return e/t},1),Ju=Li("floor");var Vu,Gu=mi(function(e,t){return e*t},1),Xu=Li("round"),Zu=mi(function(e,t){return e-t},0);return _r.after=function(e,t){if("function"!=typeof t)throw new at(u);return e=Io(e),function(){if(--e<1)return t.apply(this,arguments)}},_r.ary=Qs,_r.assign=$o,_r.assignIn=Jo,_r.assignInWith=Vo,_r.assignWith=Go,_r.at=Xo,_r.before=eo,_r.bind=to,_r.bindAll=Du,_r.bindKey=no,_r.castArray=function(){if(!arguments.length)return[];var e=arguments[0];return yo(e)?e:[e]},_r.chain=Ws,_r.chunk=function(e,t,n){t=(n?$i(e,t,n):t===i)?1:Un(Io(t),0);var a=null==e?0:e.length;if(!a||t<1)return[];for(var s=0,o=0,u=r(Wn(a/t));s<a;)u[o++]=ja(e,s,s+=t);return u},_r.compact=function(e){for(var t=-1,n=null==e?0:e.length,r=0,a=[];++t<n;){var i=e[t];i&&(a[r++]=i)}return a},_r.concat=function(){var e=arguments.length;if(!e)return[];for(var t=r(e-1),n=arguments[0],a=e;a--;)t[a-1]=arguments[a];return en(yo(n)?ni(n):[n],qr(t,1))},_r.cond=function(e){var t=null==e?0:e.length,n=Ci();return e=t?Qt(e,function(e){if("function"!=typeof e[1])throw new at(u);return[n(e[0]),e[1]]}):[],Ya(function(n){for(var r=-1;++r<t;){var a=e[r];if(Ut(a[0],this,n))return Ut(a[1],this,n)}})},_r.conforms=function(e){return function(e){var t=au(e);return function(n){return Ar(n,e,t)}}(Cr(e,h))},_r.constant=Tu,_r.countBy=Is,_r.create=function(e,t){var n=fr(e);return null==t?n:Or(n,t)},_r.curry=function e(t,n,r){var a=wi(t,M,i,i,i,i,i,n=r?i:n);return a.placeholder=e.placeholder,a},_r.curryRight=function e(t,n,r){var a=wi(t,L,i,i,i,i,i,n=r?i:n);return a.placeholder=e.placeholder,a},_r.debounce=ro,_r.defaults=Zo,_r.defaultsDeep=Ko,_r.defer=ao,_r.delay=io,_r.difference=hs,_r.differenceBy=_s,_r.differenceWith=fs,_r.drop=function(e,t,n){var r=null==e?0:e.length;return r?ja(e,(t=n||t===i?1:Io(t))<0?0:t,r):[]},_r.dropRight=function(e,t,n){var r=null==e?0:e.length;return r?ja(e,0,(t=r-(t=n||t===i?1:Io(t)))<0?0:t):[]},_r.dropRightWhile=function(e,t){return e&&e.length?za(e,Ci(t,3),!0,!0):[]},_r.dropWhile=function(e,t){return e&&e.length?za(e,Ci(t,3),!0):[]},_r.fill=function(e,t,n,r){var a=null==e?0:e.length;return a?(n&&"number"!=typeof n&&$i(e,t,n)&&(n=0,r=a),function(e,t,n,r){var a=e.length;for((n=Io(n))<0&&(n=-n>a?0:a+n),(r=r===i||r>a?a:Io(r))<0&&(r+=a),r=n>r?0:Ro(r);n<r;)e[n++]=t;return e}(e,t,n,r)):[]},_r.filter=function(e,t){return(yo(e)?Xt:Br)(e,Ci(t,3))},_r.flatMap=function(e,t){return qr(Gs(e,t),1)},_r.flatMapDeep=function(e,t){return qr(Gs(e,t),H)},_r.flatMapDepth=function(e,t,n){return n=n===i?1:Io(n),qr(Gs(e,t),n)},_r.flatten=ys,_r.flattenDeep=function(e){return null!=e&&e.length?qr(e,H):[]},_r.flattenDepth=function(e,t){return null!=e&&e.length?qr(e,t=t===i?1:Io(t)):[]},_r.flip=function(e){return wi(e,D)},_r.flow=Su,_r.flowRight=xu,_r.fromPairs=function(e){for(var t=-1,n=null==e?0:e.length,r={};++t<n;){var a=e[t];r[a[0]]=a[1]}return r},_r.functions=function(e){return null==e?[]:Gr(e,au(e))},_r.functionsIn=function(e){return null==e?[]:Gr(e,iu(e))},_r.groupBy=$s,_r.initial=function(e){return null!=e&&e.length?ja(e,0,-1):[]},_r.intersection=vs,_r.intersectionBy=Ms,_r.intersectionWith=Ls,_r.invert=tu,_r.invertBy=nu,_r.invokeMap=Js,_r.iteratee=Ou,_r.keyBy=Vs,_r.keys=au,_r.keysIn=iu,_r.map=Gs,_r.mapKeys=function(e,t){var n={};return t=Ci(t,3),Jr(e,function(e,r,a){Er(n,t(e,r,a),e)}),n},_r.mapValues=function(e,t){var n={};return t=Ci(t,3),Jr(e,function(e,r,a){Er(n,r,t(e,r,a))}),n},_r.matches=function(e){return _a(Cr(e,h))},_r.matchesProperty=function(e,t){return fa(e,Cr(t,h))},_r.memoize=so,_r.merge=su,_r.mergeWith=ou,_r.method=Eu,_r.methodOf=Hu,_r.mixin=Pu,_r.negate=oo,_r.nthArg=function(e){return e=Io(e),Ya(function(t){return pa(t,e)})},_r.omit=uu,_r.omitBy=function(e,t){return du(e,oo(Ci(t)))},_r.once=function(e){return eo(2,e)},_r.orderBy=function(e,t,n,r){return null==e?[]:(yo(t)||(t=null==t?[]:[t]),yo(n=r?i:n)||(n=null==n?[]:[n]),ya(e,t,n))},_r.over=Au,_r.overArgs=uo,_r.overEvery=Fu,_r.overSome=Wu,_r.partial=lo,_r.partialRight=co,_r.partition=Xs,_r.pick=lu,_r.pickBy=du,_r.property=Nu,_r.propertyOf=function(e){return function(t){return null==e?i:Xr(e,t)}},_r.pull=Ys,_r.pullAll=ws,_r.pullAllBy=function(e,t,n){return e&&e.length&&t&&t.length?va(e,t,Ci(n,2)):e},_r.pullAllWith=function(e,t,n){return e&&e.length&&t&&t.length?va(e,t,i,n):e},_r.pullAt=ks,_r.range=zu,_r.rangeRight=Iu,_r.rearg=ho,_r.reject=function(e,t){return(yo(e)?Xt:Br)(e,oo(Ci(t,3)))},_r.remove=function(e,t){var n=[];if(!e||!e.length)return n;var r=-1,a=[],i=e.length;for(t=Ci(t,3);++r<i;){var s=e[r];t(s,r,e)&&(n.push(s),a.push(r))}return Ma(e,a),n},_r.rest=function(e,t){if("function"!=typeof e)throw new at(u);return Ya(e,t=t===i?t:Io(t))},_r.reverse=Ds,_r.sampleSize=function(e,t,n){return t=(n?$i(e,t,n):t===i)?1:Io(t),(yo(e)?kr:ka)(e,t)},_r.set=function(e,t,n){return null==e?e:Da(e,t,n)},_r.setWith=function(e,t,n,r){return r="function"==typeof r?r:i,null==e?e:Da(e,t,n,r)},_r.shuffle=function(e){return(yo(e)?Dr:xa)(e)},_r.slice=function(e,t,n){var r=null==e?0:e.length;return r?(n&&"number"!=typeof n&&$i(e,t,n)?(t=0,n=r):(t=null==t?0:Io(t),n=n===i?r:Io(n)),ja(e,t,n)):[]},_r.sortBy=Zs,_r.sortedUniq=function(e){return e&&e.length?Pa(e):[]},_r.sortedUniqBy=function(e,t){return e&&e.length?Pa(e,Ci(t,2)):[]},_r.split=function(e,t,n){return n&&"number"!=typeof n&&$i(e,t,n)&&(t=n=i),(n=n===i?F:n>>>0)?(e=Uo(e))&&("string"==typeof t||null!=t&&!Eo(t))&&!(t=Aa(t))&&kn(e)?Va(En(e),0,n):e.split(t,n):[]},_r.spread=function(e,t){if("function"!=typeof e)throw new at(u);return t=null==t?0:Un(Io(t),0),Ya(function(n){var r=n[t],a=Va(n,0,t);return r&&en(a,r),Ut(e,this,a)})},_r.tail=function(e){var t=null==e?0:e.length;return t?ja(e,1,t):[]},_r.take=function(e,t,n){return e&&e.length?ja(e,0,(t=n||t===i?1:Io(t))<0?0:t):[]},_r.takeRight=function(e,t,n){var r=null==e?0:e.length;return r?ja(e,(t=r-(t=n||t===i?1:Io(t)))<0?0:t,r):[]},_r.takeRightWhile=function(e,t){return e&&e.length?za(e,Ci(t,3),!1,!0):[]},_r.takeWhile=function(e,t){return e&&e.length?za(e,Ci(t,3)):[]},_r.tap=function(e,t){return t(e),e},_r.throttle=function(e,t,n){var r=!0,a=!0;if("function"!=typeof e)throw new at(u);return To(n)&&(r="leading"in n?!!n.leading:r,a="trailing"in n?!!n.trailing:a),ro(e,t,{leading:r,maxWait:t,trailing:a})},_r.thru=Ns,_r.toArray=No,_r.toPairs=cu,_r.toPairsIn=hu,_r.toPath=function(e){return yo(e)?Qt(e,ls):Co(e)?[e]:ni(us(Uo(e)))},_r.toPlainObject=qo,_r.transform=function(e,t,n){var r=yo(e),a=r||Lo(e)||Ao(e);if(t=Ci(t,4),null==n){var i=e&&e.constructor;n=a?r?new i:[]:To(e)&&wo(i)?fr(Ot(e)):{}}return(a?Jt:Jr)(e,function(e,r,a){return t(n,e,r,a)}),n},_r.unary=function(e){return Qs(e,1)},_r.union=Ts,_r.unionBy=Ss,_r.unionWith=xs,_r.uniq=function(e){return e&&e.length?Fa(e):[]},_r.uniqBy=function(e,t){return e&&e.length?Fa(e,Ci(t,2)):[]},_r.uniqWith=function(e,t){return t="function"==typeof t?t:i,e&&e.length?Fa(e,i,t):[]},_r.unset=function(e,t){return null==e||Wa(e,t)},_r.unzip=js,_r.unzipWith=Os,_r.update=function(e,t,n){return null==e?e:Na(e,t,Ua(n))},_r.updateWith=function(e,t,n,r){return r="function"==typeof r?r:i,null==e?e:Na(e,t,Ua(n),r)},_r.values=_u,_r.valuesIn=function(e){return null==e?[]:gn(e,iu(e))},_r.without=Es,_r.words=wu,_r.wrap=function(e,t){return lo(Ua(t),e)},_r.xor=Hs,_r.xorBy=Ps,_r.xorWith=Cs,_r.zip=As,_r.zipObject=function(e,t){return Ba(e||[],t||[],Sr)},_r.zipObjectDeep=function(e,t){return Ba(e||[],t||[],Da)},_r.zipWith=Fs,_r.entries=cu,_r.entriesIn=hu,_r.extend=Jo,_r.extendWith=Vo,Pu(_r,_r),_r.add=qu,_r.attempt=ku,_r.camelCase=fu,_r.capitalize=mu,_r.ceil=Uu,_r.clamp=function(e,t,n){return n===i&&(n=t,t=i),n!==i&&(n=(n=Bo(n))==n?n:0),t!==i&&(t=(t=Bo(t))==t?t:0),Pr(Bo(e),t,n)},_r.clone=function(e){return Cr(e,f)},_r.cloneDeep=function(e){return Cr(e,h|f)},_r.cloneDeepWith=function(e,t){return Cr(e,h|f,t="function"==typeof t?t:i)},_r.cloneWith=function(e,t){return Cr(e,f,t="function"==typeof t?t:i)},_r.conformsTo=function(e,t){return null==t||Ar(e,t,au(t))},_r.deburr=pu,_r.defaultTo=function(e,t){return null==e||e!=e?t:e},_r.divide=$u,_r.endsWith=function(e,t,n){e=Uo(e),t=Aa(t);var r=e.length,a=n=n===i?r:Pr(Io(n),0,r);return(n-=t.length)>=0&&e.slice(n,a)==t},_r.eq=_o,_r.escape=function(e){return(e=Uo(e))&&ke.test(e)?e.replace(Ye,Yn):e},_r.escapeRegExp=function(e){return(e=Uo(e))&&He.test(e)?e.replace(Ee,"\\$&"):e},_r.every=function(e,t,n){var r=yo(e)?Gt:Ir;return n&&$i(e,t,n)&&(t=i),r(e,Ci(t,3))},_r.find=Rs,_r.findIndex=ms,_r.findKey=function(e,t){return sn(e,Ci(t,3),Jr)},_r.findLast=Bs,_r.findLastIndex=ps,_r.findLastKey=function(e,t){return sn(e,Ci(t,3),Vr)},_r.floor=Ju,_r.forEach=qs,_r.forEachRight=Us,_r.forIn=function(e,t){return null==e?e:Ur(e,Ci(t,3),iu)},_r.forInRight=function(e,t){return null==e?e:$r(e,Ci(t,3),iu)},_r.forOwn=function(e,t){return e&&Jr(e,Ci(t,3))},_r.forOwnRight=function(e,t){return e&&Vr(e,Ci(t,3))},_r.get=Qo,_r.gt=fo,_r.gte=mo,_r.has=function(e,t){return null!=e&&Ri(e,t,ea)},_r.hasIn=eu,_r.head=gs,_r.identity=ju,_r.includes=function(e,t,n,r){e=vo(e)?e:_u(e),n=n&&!r?Io(n):0;var a=e.length;return n<0&&(n=Un(a+n,0)),Po(e)?n<=a&&e.indexOf(t,n)>-1:!!a&&un(e,t,n)>-1},_r.indexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var a=null==n?0:Io(n);return a<0&&(a=Un(r+a,0)),un(e,t,a)},_r.inRange=function(e,t,n){return t=zo(t),n===i?(n=t,t=0):n=zo(n),function(e,t,n){return e>=$n(t,n)&&e<Un(t,n)}(e=Bo(e),t,n)},_r.invoke=ru,_r.isArguments=po,_r.isArray=yo,_r.isArrayBuffer=go,_r.isArrayLike=vo,_r.isArrayLikeObject=Mo,_r.isBoolean=function(e){return!0===e||!1===e||So(e)&&Kr(e)==q},_r.isBuffer=Lo,_r.isDate=bo,_r.isElement=function(e){return So(e)&&1===e.nodeType&&!Oo(e)},_r.isEmpty=function(e){if(null==e)return!0;if(vo(e)&&(yo(e)||"string"==typeof e||"function"==typeof e.splice||Lo(e)||Ao(e)||po(e)))return!e.length;var t=Ii(e);if(t==X||t==ne)return!e.size;if(Xi(e))return!la(e).length;for(var n in e)if(dt.call(e,n))return!1;return!0},_r.isEqual=function(e,t){return ia(e,t)},_r.isEqualWith=function(e,t,n){var r=(n="function"==typeof n?n:i)?n(e,t):i;return r===i?ia(e,t,i,n):!!r},_r.isError=Yo,_r.isFinite=function(e){return"number"==typeof e&&Rn(e)},_r.isFunction=wo,_r.isInteger=ko,_r.isLength=Do,_r.isMap=xo,_r.isMatch=function(e,t){return e===t||sa(e,t,Fi(t))},_r.isMatchWith=function(e,t,n){return n="function"==typeof n?n:i,sa(e,t,Fi(t),n)},_r.isNaN=function(e){return jo(e)&&e!=+e},_r.isNative=function(e){if(Gi(e))throw new Ke(o);return oa(e)},_r.isNil=function(e){return null==e},_r.isNull=function(e){return null===e},_r.isNumber=jo,_r.isObject=To,_r.isObjectLike=So,_r.isPlainObject=Oo,_r.isRegExp=Eo,_r.isSafeInteger=function(e){return ko(e)&&e>=-P&&e<=P},_r.isSet=Ho,_r.isString=Po,_r.isSymbol=Co,_r.isTypedArray=Ao,_r.isUndefined=function(e){return e===i},_r.isWeakMap=function(e){return So(e)&&Ii(e)==se},_r.isWeakSet=function(e){return So(e)&&Kr(e)==oe},_r.join=function(e,t){return null==e?"":Bn.call(e,t)},_r.kebabCase=yu,_r.last=bs,_r.lastIndexOf=function(e,t,n){var r=null==e?0:e.length;if(!r)return-1;var a=r;return n!==i&&(a=(a=Io(n))<0?Un(r+a,0):$n(a,r-1)),t==t?function(e,t,n){for(var r=n+1;r--;)if(e[r]===t)return r;return r}(e,t,a):on(e,dn,a,!0)},_r.lowerCase=gu,_r.lowerFirst=vu,_r.lt=Fo,_r.lte=Wo,_r.max=function(e){return e&&e.length?Rr(e,ju,Qr):i},_r.maxBy=function(e,t){return e&&e.length?Rr(e,Ci(t,2),Qr):i},_r.mean=function(e){return cn(e,ju)},_r.meanBy=function(e,t){return cn(e,Ci(t,2))},_r.min=function(e){return e&&e.length?Rr(e,ju,ca):i},_r.minBy=function(e,t){return e&&e.length?Rr(e,Ci(t,2),ca):i},_r.stubArray=Ru,_r.stubFalse=Bu,_r.stubObject=function(){return{}},_r.stubString=function(){return""},_r.stubTrue=function(){return!0},_r.multiply=Gu,_r.nth=function(e,t){return e&&e.length?pa(e,Io(t)):i},_r.noConflict=function(){return Ht._===this&&(Ht._=mt),this},_r.noop=Cu,_r.now=Ks,_r.pad=function(e,t,n){e=Uo(e);var r=(t=Io(t))?On(e):0;if(!t||r>=t)return e;var a=(t-r)/2;return yi(Nn(a),n)+e+yi(Wn(a),n)},_r.padEnd=function(e,t,n){e=Uo(e);var r=(t=Io(t))?On(e):0;return t&&r<t?e+yi(t-r,n):e},_r.padStart=function(e,t,n){e=Uo(e);var r=(t=Io(t))?On(e):0;return t&&r<t?yi(t-r,n)+e:e},_r.parseInt=function(e,t,n){return n||null==t?t=0:t&&(t=+t),Vn(Uo(e).replace(Ce,""),t||0)},_r.random=function(e,t,n){if(n&&"boolean"!=typeof n&&$i(e,t,n)&&(t=n=i),n===i&&("boolean"==typeof t?(n=t,t=i):"boolean"==typeof e&&(n=e,e=i)),e===i&&t===i?(e=0,t=1):(e=zo(e),t===i?(t=e,e=0):t=zo(t)),e>t){var r=e;e=t,t=r}if(n||e%1||t%1){var a=Gn();return $n(e+a*(t-e+xt("1e-"+((a+"").length-1))),t)}return La(e,t)},_r.reduce=function(e,t,n){var r=yo(e)?tn:fn,a=arguments.length<3;return r(e,Ci(t,4),n,a,Nr)},_r.reduceRight=function(e,t,n){var r=yo(e)?nn:fn,a=arguments.length<3;return r(e,Ci(t,4),n,a,zr)},_r.repeat=function(e,t,n){return t=(n?$i(e,t,n):t===i)?1:Io(t),ba(Uo(e),t)},_r.replace=function(){var e=arguments,t=Uo(e[0]);return e.length<3?t:t.replace(e[1],e[2])},_r.result=function(e,t,n){var r=-1,a=(t=$a(t,e)).length;for(a||(a=1,e=i);++r<a;){var s=null==e?i:e[ls(t[r])];s===i&&(r=a,s=n),e=wo(s)?s.call(e):s}return e},_r.round=Xu,_r.runInContext=e,_r.sample=function(e){return(yo(e)?wr:wa)(e)},_r.size=function(e){if(null==e)return 0;if(vo(e))return Po(e)?On(e):e.length;var t=Ii(e);return t==X||t==ne?e.size:la(e).length},_r.snakeCase=Mu,_r.some=function(e,t,n){var r=yo(e)?rn:Oa;return n&&$i(e,t,n)&&(t=i),r(e,Ci(t,3))},_r.sortedIndex=function(e,t){return Ea(e,t)},_r.sortedIndexBy=function(e,t,n){return Ha(e,t,Ci(n,2))},_r.sortedIndexOf=function(e,t){var n=null==e?0:e.length;if(n){var r=Ea(e,t);if(r<n&&_o(e[r],t))return r}return-1},_r.sortedLastIndex=function(e,t){return Ea(e,t,!0)},_r.sortedLastIndexBy=function(e,t,n){return Ha(e,t,Ci(n,2),!0)},_r.sortedLastIndexOf=function(e,t){if(null!=e&&e.length){var n=Ea(e,t,!0)-1;if(_o(e[n],t))return n}return-1},_r.startCase=Lu,_r.startsWith=function(e,t,n){return e=Uo(e),n=null==n?0:Pr(Io(n),0,e.length),t=Aa(t),e.slice(n,n+t.length)==t},_r.subtract=Zu,_r.sum=function(e){return e&&e.length?mn(e,ju):0},_r.sumBy=function(e,t){return e&&e.length?mn(e,Ci(t,2)):0},_r.template=function(e,t,n){var r=_r.templateSettings;n&&$i(e,t,n)&&(t=i),e=Uo(e),t=Vo({},t,r,ki);var a,s,o=Vo({},t.imports,r.imports,ki),u=au(o),l=gn(o,u),d=0,c=t.interpolate||Xe,h="__p += '",_=nt((t.escape||Xe).source+"|"+c.source+"|"+(c===Se?Re:Xe).source+"|"+(t.evaluate||Xe).source+"|$","g"),f="//# sourceURL="+("sourceURL"in t?t.sourceURL:"lodash.templateSources["+ ++kt+"]")+"\n";e.replace(_,function(t,n,r,i,o,u){return r||(r=i),h+=e.slice(d,u).replace(Ze,wn),n&&(a=!0,h+="' +\n__e("+n+") +\n'"),o&&(s=!0,h+="';\n"+o+";\n__p += '"),r&&(h+="' +\n((__t = ("+r+")) == null ? '' : __t) +\n'"),d=u+t.length,t}),h+="';\n";var m=t.variable;m||(h="with (obj) {\n"+h+"\n}\n"),h=(s?h.replace(ve,""):h).replace(Me,"$1").replace(Le,"$1;"),h="function("+(m||"obj")+") {\n"+(m?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(a?", __e = _.escape":"")+(s?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var p=ku(function(){return Qe(u,f+"return "+h).apply(i,l)});if(p.source=h,Yo(p))throw p;return p},_r.times=function(e,t){if((e=Io(e))<1||e>P)return[];var n=F,r=$n(e,F);t=Ci(t),e-=F;for(var a=pn(r,t);++n<e;)t(n);return a},_r.toFinite=zo,_r.toInteger=Io,_r.toLength=Ro,_r.toLower=function(e){return Uo(e).toLowerCase()},_r.toNumber=Bo,_r.toSafeInteger=function(e){return e?Pr(Io(e),-P,P):0===e?e:0},_r.toString=Uo,_r.toUpper=function(e){return Uo(e).toUpperCase()},_r.trim=function(e,t,n){if((e=Uo(e))&&(n||t===i))return e.replace(Pe,"");if(!e||!(t=Aa(t)))return e;var r=En(e),a=En(t);return Va(r,Mn(r,a),Ln(r,a)+1).join("")},_r.trimEnd=function(e,t,n){if((e=Uo(e))&&(n||t===i))return e.replace(Ae,"");if(!e||!(t=Aa(t)))return e;var r=En(e);return Va(r,0,Ln(r,En(t))+1).join("")},_r.trimStart=function(e,t,n){if((e=Uo(e))&&(n||t===i))return e.replace(Ce,"");if(!e||!(t=Aa(t)))return e;var r=En(e);return Va(r,Mn(r,En(t))).join("")},_r.truncate=function(e,t){var n=T,r=S;if(To(t)){var a="separator"in t?t.separator:a;n="length"in t?Io(t.length):n,r="omission"in t?Aa(t.omission):r}var s=(e=Uo(e)).length;if(kn(e)){var o=En(e);s=o.length}if(n>=s)return e;var u=n-On(r);if(u<1)return r;var l=o?Va(o,0,u).join(""):e.slice(0,u);if(a===i)return l+r;if(o&&(u+=l.length-u),Eo(a)){if(e.slice(u).search(a)){var d,c=l;for(a.global||(a=nt(a.source,Uo(Be.exec(a))+"g")),a.lastIndex=0;d=a.exec(c);)var h=d.index;l=l.slice(0,h===i?u:h)}}else if(e.indexOf(Aa(a),u)!=u){var _=l.lastIndexOf(a);_>-1&&(l=l.slice(0,_))}return l+r},_r.unescape=function(e){return(e=Uo(e))&&we.test(e)?e.replace(be,Hn):e},_r.uniqueId=function(e){var t=++ct;return Uo(e)+t},_r.upperCase=bu,_r.upperFirst=Yu,_r.each=qs,_r.eachRight=Us,_r.first=gs,Pu(_r,(Vu={},Jr(_r,function(e,t){dt.call(_r.prototype,t)||(Vu[t]=e)}),Vu),{chain:!1}),_r.VERSION="4.17.11",Jt(["bind","bindKey","curry","curryRight","partial","partialRight"],function(e){_r[e].placeholder=_r}),Jt(["drop","take"],function(e,t){yr.prototype[e]=function(n){n=n===i?1:Un(Io(n),0);var r=this.__filtered__&&!t?new yr(this):this.clone();return r.__filtered__?r.__takeCount__=$n(n,r.__takeCount__):r.__views__.push({size:$n(n,F),type:e+(r.__dir__<0?"Right":"")}),r},yr.prototype[e+"Right"]=function(t){return this.reverse()[e](t).reverse()}}),Jt(["filter","map","takeWhile"],function(e,t){var n=t+1,r=n==O||3==n;yr.prototype[e]=function(e){var t=this.clone();return t.__iteratees__.push({iteratee:Ci(e,3),type:n}),t.__filtered__=t.__filtered__||r,t}}),Jt(["head","last"],function(e,t){var n="take"+(t?"Right":"");yr.prototype[e]=function(){return this[n](1).value()[0]}}),Jt(["initial","tail"],function(e,t){var n="drop"+(t?"":"Right");yr.prototype[e]=function(){return this.__filtered__?new yr(this):this[n](1)}}),yr.prototype.compact=function(){return this.filter(ju)},yr.prototype.find=function(e){return this.filter(e).head()},yr.prototype.findLast=function(e){return this.reverse().find(e)},yr.prototype.invokeMap=Ya(function(e,t){return"function"==typeof e?new yr(this):this.map(function(n){return ra(n,e,t)})}),yr.prototype.reject=function(e){return this.filter(oo(Ci(e)))},yr.prototype.slice=function(e,t){e=Io(e);var n=this;return n.__filtered__&&(e>0||t<0)?new yr(n):(e<0?n=n.takeRight(-e):e&&(n=n.drop(e)),t!==i&&(n=(t=Io(t))<0?n.dropRight(-t):n.take(t-e)),n)},yr.prototype.takeRightWhile=function(e){return this.reverse().takeWhile(e).reverse()},yr.prototype.toArray=function(){return this.take(F)},Jr(yr.prototype,function(e,t){var n=/^(?:filter|find|map|reject)|While$/.test(t),r=/^(?:head|last)$/.test(t),a=_r[r?"take"+("last"==t?"Right":""):t],s=r||/^find/.test(t);a&&(_r.prototype[t]=function(){var t=this.__wrapped__,o=r?[1]:arguments,u=t instanceof yr,l=o[0],d=u||yo(t),c=function(e){var t=a.apply(_r,en([e],o));return r&&h?t[0]:t};d&&n&&"function"==typeof l&&1!=l.length&&(u=d=!1);var h=this.__chain__,_=!!this.__actions__.length,f=s&&!h,m=u&&!_;if(!s&&d){t=m?t:new yr(this);var p=e.apply(t,o);return p.__actions__.push({func:Ns,args:[c],thisArg:i}),new pr(p,h)}return f&&m?e.apply(this,o):(p=this.thru(c),f?r?p.value()[0]:p.value():p)})}),Jt(["pop","push","shift","sort","splice","unshift"],function(e){var t=it[e],n=/^(?:push|sort|unshift)$/.test(e)?"tap":"thru",r=/^(?:pop|shift)$/.test(e);_r.prototype[e]=function(){var e=arguments;if(r&&!this.__chain__){var a=this.value();return t.apply(yo(a)?a:[],e)}return this[n](function(n){return t.apply(yo(n)?n:[],e)})}}),Jr(yr.prototype,function(e,t){var n=_r[t];if(n){var r=n.name+"";(ar[r]||(ar[r]=[])).push({name:t,func:n})}}),ar[_i(i,g).name]=[{name:"wrapper",func:i}],yr.prototype.clone=function(){var e=new yr(this.__wrapped__);return e.__actions__=ni(this.__actions__),e.__dir__=this.__dir__,e.__filtered__=this.__filtered__,e.__iteratees__=ni(this.__iteratees__),e.__takeCount__=this.__takeCount__,e.__views__=ni(this.__views__),e},yr.prototype.reverse=function(){if(this.__filtered__){var e=new yr(this);e.__dir__=-1,e.__filtered__=!0}else(e=this.clone()).__dir__*=-1;return e},yr.prototype.value=function(){var e=this.__wrapped__.value(),t=this.__dir__,n=yo(e),r=t<0,a=n?e.length:0,i=function(e,t,n){for(var r=-1,a=n.length;++r<a;){var i=n[r],s=i.size;switch(i.type){case"drop":e+=s;break;case"dropRight":t-=s;break;case"take":t=$n(t,e+s);break;case"takeRight":e=Un(e,t-s)}}return{start:e,end:t}}(0,a,this.__views__),s=i.start,o=i.end,u=o-s,l=r?o:s-1,d=this.__iteratees__,c=d.length,h=0,_=$n(u,this.__takeCount__);if(!n||!r&&a==u&&_==u)return Ia(e,this.__actions__);var f=[];e:for(;u--&&h<_;){for(var m=-1,p=e[l+=t];++m<c;){var y=d[m],g=y.iteratee,v=y.type,M=g(p);if(v==E)p=M;else if(!M){if(v==O)continue e;break e}}f[h++]=p}return f},_r.prototype.at=zs,_r.prototype.chain=function(){return Ws(this)},_r.prototype.commit=function(){return new pr(this.value(),this.__chain__)},_r.prototype.next=function(){this.__values__===i&&(this.__values__=No(this.value()));var e=this.__index__>=this.__values__.length;return{done:e,value:e?i:this.__values__[this.__index__++]}},_r.prototype.plant=function(e){for(var t,n=this;n instanceof mr;){var r=cs(n);r.__index__=0,r.__values__=i,t?a.__wrapped__=r:t=r;var a=r;n=n.__wrapped__}return a.__wrapped__=e,t},_r.prototype.reverse=function(){var e=this.__wrapped__;if(e instanceof yr){var t=e;return this.__actions__.length&&(t=new yr(this)),(t=t.reverse()).__actions__.push({func:Ns,args:[Ds],thisArg:i}),new pr(t,this.__chain__)}return this.thru(Ds)},_r.prototype.toJSON=_r.prototype.valueOf=_r.prototype.value=function(){return Ia(this.__wrapped__,this.__actions__)},_r.prototype.first=_r.prototype.head,Wt&&(_r.prototype[Wt]=function(){return this}),_r}();Ht._=Pn,(a=function(){return Pn}.call(t,n,t,r))===i||(r.exports=a)}).call(this)}).call(this,n(8),n(9)(e))},function(e,t,n){"use strict";(function(t){var r=n(1),a=n(148),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var o,u={adapter:("undefined"!=typeof XMLHttpRequest?o=n(11):void 0!==t&&(o=n(11)),o),transformRequest:[function(e,t){return a(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300}};u.headers={common:{Accept:"application/json, text/plain, */*"}},r.forEach(["delete","get","head"],function(e){u.headers[e]={}}),r.forEach(["post","put","patch"],function(e){u.headers[e]=r.merge(i)}),e.exports=u}).call(this,n(147))},function(e,t,n){e.exports=n(144)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(1),a=n(149),i=n(151),s=n(152),o=n(153),u=n(12),l="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||n(154);e.exports=function(e){return new Promise(function(t,d){var c=e.data,h=e.headers;r.isFormData(c)&&delete h["Content-Type"];var _=new XMLHttpRequest,f="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in _||o(e.url)||(_=new window.XDomainRequest,f="onload",m=!0,_.onprogress=function(){},_.ontimeout=function(){}),e.auth){var p=e.auth.username||"",y=e.auth.password||"";h.Authorization="Basic "+l(p+":"+y)}if(_.open(e.method.toUpperCase(),i(e.url,e.params,e.paramsSerializer),!0),_.timeout=e.timeout,_[f]=function(){if(_&&(4===_.readyState||m)&&(0!==_.status||_.responseURL&&0===_.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in _?s(_.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?_.response:_.responseText,status:1223===_.status?204:_.status,statusText:1223===_.status?"No Content":_.statusText,headers:n,config:e,request:_};a(t,d,r),_=null}},_.onerror=function(){d(u("Network Error",e,null,_)),_=null},_.ontimeout=function(){d(u("timeout of "+e.timeout+"ms exceeded",e,"ECONNABORTED",_)),_=null},r.isStandardBrowserEnv()){var g=n(155),v=(e.withCredentials||o(e.url))&&e.xsrfCookieName?g.read(e.xsrfCookieName):void 0;v&&(h[e.xsrfHeaderName]=v)}if("setRequestHeader"in _&&r.forEach(h,function(e,t){void 0===c&&"content-type"===t.toLowerCase()?delete h[t]:_.setRequestHeader(t,e)}),e.withCredentials&&(_.withCredentials=!0),e.responseType)try{_.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&_.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&_.upload&&_.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then(function(e){_&&(_.abort(),d(e),_=null)}),void 0===c&&(c=null),_.send(c)})}},function(e,t,n){"use strict";var r=n(150);e.exports=function(e,t,n,a,i){var s=new Error(e);return r(s,t,n,a,i)}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t){e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var a=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[n].concat(i).concat([a]).join("\n")}var s;return[n].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+n+"}":n}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var s=e[a];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){var r,a,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===a&&(a=r.apply(this,arguments)),a}),o=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),u=null,l=0,d=[],c=n(167);function h(e,t){for(var n=0;n<e.length;n++){var r=e[n],a=i[r.id];if(a){a.refs++;for(var s=0;s<a.parts.length;s++)a.parts[s](r.parts[s]);for(;s<r.parts.length;s++)a.parts.push(g(r.parts[s],t))}else{var o=[];for(s=0;s<r.parts.length;s++)o.push(g(r.parts[s],t));i[r.id]={id:r.id,refs:1,parts:o}}}}function _(e,t){for(var n=[],r={},a=0;a<e.length;a++){var i=e[a],s=t.base?i[0]+t.base:i[0],o={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(o):n.push(r[s]={id:s,parts:[o]})}return n}function f(e,t){var n=o(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),d.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var a=o(e.insertAt.before,n);n.insertBefore(t,a)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function p(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return y(t,e.attrs),f(e,t),t}function y(e,t){Object.keys(t).forEach(function(n){e.setAttribute(n,t[n])})}function g(e,t){var n,r,a,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var s=l++;n=u||(u=p(t)),r=L.bind(null,n,s,!1),a=L.bind(null,n,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),f(e,t),t}(t),r=function(e,t,n){var r=n.css,a=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&a;(t.convertToAbsoluteUrls||i)&&(r=c(r));a&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */");var s=new Blob([r],{type:"text/css"}),o=e.href;e.href=URL.createObjectURL(s),o&&URL.revokeObjectURL(o)}.bind(null,n,t),a=function(){m(n),n.href&&URL.revokeObjectURL(n.href)}):(n=p(t),r=function(e,t){var n=t.css,r=t.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}.bind(null,n),a=function(){m(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=_(e,t);return h(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var s=n[a];(o=i[s.id]).refs--,r.push(o)}e&&h(_(e,t),t);for(a=0;a<r.length;a++){var o;if(0===(o=r[a]).refs){for(var u=0;u<o.parts.length;u++)o.parts[u]();delete i[o.id]}}}};var v,M=(v=[],function(e,t){return v[e]=t,v.filter(Boolean).join("\n")});function L(e,t,n,r){var a=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=M(t,a);else{var i=document.createTextNode(a),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}},function(e,t,n){!function(e){"use strict";e.defineLocale("af",{months:"Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),weekdays:"Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),weekdaysShort:"Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),weekdaysMin:"So_Ma_Di_Wo_Do_Vr_Sa".split("_"),meridiemParse:/vm|nm/i,isPM:function(e){return/^nm$/i.test(e)},meridiem:function(e,t,n){return e<12?n?"vm":"VM":n?"nm":"NM"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Vandag om] LT",nextDay:"[Môre om] LT",nextWeek:"dddd [om] LT",lastDay:"[Gister om] LT",lastWeek:"[Laas] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oor %s",past:"%s gelede",s:"'n paar sekondes",ss:"%d sekondes",m:"'n minuut",mm:"%d minute",h:"'n uur",hh:"%d ure",d:"'n dag",dd:"%d dae",M:"'n maand",MM:"%d maande",y:"'n jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},r=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},a={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},i=function(e){return function(t,n,i,s){var o=r(t),u=a[e][r(t)];return 2===o&&(u=u[n?0:1]),u.replace(/%d/i,t)}},s=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];e.defineLocale("ar",{months:s,monthsShort:s,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:i("s"),ss:i("s"),m:i("m"),mm:i("m"),h:i("h"),hh:i("h"),d:i("d"),dd:i("d"),M:i("M"),MM:i("M"),y:i("y"),yy:i("y")},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("ar-dz",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"أح_إث_ثلا_أر_خم_جم_سب".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("ar-kw",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:0,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"1",2:"2",3:"3",4:"4",5:"5",6:"6",7:"7",8:"8",9:"9",0:"0"},n=function(e){return 0===e?0:1===e?1:2===e?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},r={s:["أقل من ثانية","ثانية واحدة",["ثانيتان","ثانيتين"],"%d ثوان","%d ثانية","%d ثانية"],m:["أقل من دقيقة","دقيقة واحدة",["دقيقتان","دقيقتين"],"%d دقائق","%d دقيقة","%d دقيقة"],h:["أقل من ساعة","ساعة واحدة",["ساعتان","ساعتين"],"%d ساعات","%d ساعة","%d ساعة"],d:["أقل من يوم","يوم واحد",["يومان","يومين"],"%d أيام","%d يومًا","%d يوم"],M:["أقل من شهر","شهر واحد",["شهران","شهرين"],"%d أشهر","%d شهرا","%d شهر"],y:["أقل من عام","عام واحد",["عامان","عامين"],"%d أعوام","%d عامًا","%d عام"]},a=function(e){return function(t,a,i,s){var o=n(t),u=r[e][n(t)];return 2===o&&(u=u[a?0:1]),u.replace(/%d/i,t)}},i=["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"];e.defineLocale("ar-ly",{months:i,monthsShort:i,weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/‏M/‏YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم عند الساعة] LT",nextDay:"[غدًا عند الساعة] LT",nextWeek:"dddd [عند الساعة] LT",lastDay:"[أمس عند الساعة] LT",lastWeek:"dddd [عند الساعة] LT",sameElse:"L"},relativeTime:{future:"بعد %s",past:"منذ %s",s:a("s"),ss:a("s"),m:a("m"),mm:a("m"),h:a("h"),hh:a("h"),d:a("d"),dd:a("d"),M:a("M"),MM:a("M"),y:a("y"),yy:a("y")},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("ar-ma",{months:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),weekdays:"الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:6,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"};e.defineLocale("ar-sa",{months:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/ص|م/,isPM:function(e){return"م"===e},meridiem:function(e,t,n){return e<12?"ص":"م"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("ar-tn",{months:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),monthsShort:"جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),weekdays:"الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),weekdaysShort:"أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),weekdaysMin:"ح_ن_ث_ر_خ_ج_س".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[اليوم على الساعة] LT",nextDay:"[غدا على الساعة] LT",nextWeek:"dddd [على الساعة] LT",lastDay:"[أمس على الساعة] LT",lastWeek:"dddd [على الساعة] LT",sameElse:"L"},relativeTime:{future:"في %s",past:"منذ %s",s:"ثوان",ss:"%d ثانية",m:"دقيقة",mm:"%d دقائق",h:"ساعة",hh:"%d ساعات",d:"يوم",dd:"%d أيام",M:"شهر",MM:"%d أشهر",y:"سنة",yy:"%d سنوات"},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"};e.defineLocale("az",{months:"yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),monthsShort:"yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),weekdays:"Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),weekdaysShort:"Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),weekdaysMin:"Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[sabah saat] LT",nextWeek:"[gələn həftə] dddd [saat] LT",lastDay:"[dünən] LT",lastWeek:"[keçən həftə] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s əvvəl",s:"birneçə saniyə",ss:"%d saniyə",m:"bir dəqiqə",mm:"%d dəqiqə",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir il",yy:"%d il"},meridiemParse:/gecə|səhər|gündüz|axşam/,isPM:function(e){return/^(gündüz|axşam)$/.test(e)},meridiem:function(e,t,n){return e<4?"gecə":e<12?"səhər":e<17?"gündüz":"axşam"},dayOfMonthOrdinalParse:/\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,ordinal:function(e){if(0===e)return e+"-ıncı";var n=e%10,r=e%100-n,a=e>=100?100:null;return e+(t[n]||t[r]||t[a])},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n){var r,a,i={ss:t?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:t?"хвіліна_хвіліны_хвілін":"хвіліну_хвіліны_хвілін",hh:t?"гадзіна_гадзіны_гадзін":"гадзіну_гадзіны_гадзін",dd:"дзень_дні_дзён",MM:"месяц_месяцы_месяцаў",yy:"год_гады_гадоў"};return"m"===n?t?"хвіліна":"хвіліну":"h"===n?t?"гадзіна":"гадзіну":e+" "+(r=+e,a=i[n].split("_"),r%10==1&&r%100!=11?a[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?a[1]:a[2])}e.defineLocale("be",{months:{format:"студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),standalone:"студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")},monthsShort:"студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),weekdays:{format:"нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),standalone:"нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),isFormat:/\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/},weekdaysShort:"нд_пн_ат_ср_чц_пт_сб".split("_"),weekdaysMin:"нд_пн_ат_ср_чц_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., HH:mm",LLLL:"dddd, D MMMM YYYY г., HH:mm"},calendar:{sameDay:"[Сёння ў] LT",nextDay:"[Заўтра ў] LT",lastDay:"[Учора ў] LT",nextWeek:function(){return"[У] dddd [ў] LT"},lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return"[У мінулую] dddd [ў] LT";case 1:case 2:case 4:return"[У мінулы] dddd [ў] LT"}},sameElse:"L"},relativeTime:{future:"праз %s",past:"%s таму",s:"некалькі секунд",m:t,mm:t,h:t,hh:t,d:"дзень",dd:t,M:"месяц",MM:t,y:"год",yy:t},meridiemParse:/ночы|раніцы|дня|вечара/,isPM:function(e){return/^(дня|вечара)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночы":e<12?"раніцы":e<17?"дня":"вечара"},dayOfMonthOrdinalParse:/\d{1,2}-(і|ы|га)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e%10!=2&&e%10!=3||e%100==12||e%100==13?e+"-ы":e+"-і";case"D":return e+"-га";default:return e}},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("bg",{months:"януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),monthsShort:"янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),weekdays:"неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),weekdaysShort:"нед_пон_вто_сря_чет_пет_съб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Днес в] LT",nextDay:"[Утре в] LT",nextWeek:"dddd [в] LT",lastDay:"[Вчера в] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[В изминалата] dddd [в] LT";case 1:case 2:case 4:case 5:return"[В изминалия] dddd [в] LT"}},sameElse:"L"},relativeTime:{future:"след %s",past:"преди %s",s:"няколко секунди",ss:"%d секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дни",M:"месец",MM:"%d месеца",y:"година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var t=e%10,n=e%100;return 0===e?e+"-ев":0===n?e+"-ен":n>10&&n<20?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("bm",{months:"Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"),monthsShort:"Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"),weekdays:"Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),weekdaysShort:"Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),weekdaysMin:"Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"MMMM [tile] D [san] YYYY",LLL:"MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",LLLL:"dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm"},calendar:{sameDay:"[Bi lɛrɛ] LT",nextDay:"[Sini lɛrɛ] LT",nextWeek:"dddd [don lɛrɛ] LT",lastDay:"[Kunu lɛrɛ] LT",lastWeek:"dddd [tɛmɛnen lɛrɛ] LT",sameElse:"L"},relativeTime:{future:"%s kɔnɔ",past:"a bɛ %s bɔ",s:"sanga dama dama",ss:"sekondi %d",m:"miniti kelen",mm:"miniti %d",h:"lɛrɛ kelen",hh:"lɛrɛ %d",d:"tile kelen",dd:"tile %d",M:"kalo kelen",MM:"kalo %d",y:"san kelen",yy:"san %d"},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},n={"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"};e.defineLocale("bn",{months:"জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),monthsShort:"জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),weekdays:"রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),weekdaysShort:"রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),weekdaysMin:"রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),longDateFormat:{LT:"A h:mm সময়",LTS:"A h:mm:ss সময়",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm সময়",LLLL:"dddd, D MMMM YYYY, A h:mm সময়"},calendar:{sameDay:"[আজ] LT",nextDay:"[আগামীকাল] LT",nextWeek:"dddd, LT",lastDay:"[গতকাল] LT",lastWeek:"[গত] dddd, LT",sameElse:"L"},relativeTime:{future:"%s পরে",past:"%s আগে",s:"কয়েক সেকেন্ড",ss:"%d সেকেন্ড",m:"এক মিনিট",mm:"%d মিনিট",h:"এক ঘন্টা",hh:"%d ঘন্টা",d:"এক দিন",dd:"%d দিন",M:"এক মাস",MM:"%d মাস",y:"এক বছর",yy:"%d বছর"},preparse:function(e){return e.replace(/[১২৩৪৫৬৭৮৯০]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/রাত|সকাল|দুপুর|বিকাল|রাত/,meridiemHour:function(e,t){return 12===e&&(e=0),"রাত"===t&&e>=4||"দুপুর"===t&&e<5||"বিকাল"===t?e+12:e},meridiem:function(e,t,n){return e<4?"রাত":e<10?"সকাল":e<17?"দুপুর":e<20?"বিকাল":"রাত"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"༡",2:"༢",3:"༣",4:"༤",5:"༥",6:"༦",7:"༧",8:"༨",9:"༩",0:"༠"},n={"༡":"1","༢":"2","༣":"3","༤":"4","༥":"5","༦":"6","༧":"7","༨":"8","༩":"9","༠":"0"};e.defineLocale("bo",{months:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),monthsShort:"ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),weekdays:"གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),weekdaysShort:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),weekdaysMin:"ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[དི་རིང] LT",nextDay:"[སང་ཉིན] LT",nextWeek:"[བདུན་ཕྲག་རྗེས་མ], LT",lastDay:"[ཁ་སང] LT",lastWeek:"[བདུན་ཕྲག་མཐའ་མ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ལ་",past:"%s སྔན་ལ",s:"ལམ་སང",ss:"%d སྐར་ཆ།",m:"སྐར་མ་གཅིག",mm:"%d སྐར་མ",h:"ཆུ་ཚོད་གཅིག",hh:"%d ཆུ་ཚོད",d:"ཉིན་གཅིག",dd:"%d ཉིན་",M:"ཟླ་བ་གཅིག",MM:"%d ཟླ་བ",y:"ལོ་གཅིག",yy:"%d ལོ"},preparse:function(e){return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,meridiemHour:function(e,t){return 12===e&&(e=0),"མཚན་མོ"===t&&e>=4||"ཉིན་གུང"===t&&e<5||"དགོང་དག"===t?e+12:e},meridiem:function(e,t,n){return e<4?"མཚན་མོ":e<10?"ཞོགས་ཀས":e<17?"ཉིན་གུང":e<20?"དགོང་དག":"མཚན་མོ"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n){return e+" "+function(e,t){return 2===t?function(e){var t={m:"v",b:"v",d:"z"};return void 0===t[e.charAt(0)]?e:t[e.charAt(0)]+e.substring(1)}(e):e}({mm:"munutenn",MM:"miz",dd:"devezh"}[n],e)}e.defineLocale("br",{months:"Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),monthsShort:"Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),weekdays:"Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),weekdaysShort:"Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),weekdaysMin:"Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h[e]mm A",LTS:"h[e]mm:ss A",L:"DD/MM/YYYY",LL:"D [a viz] MMMM YYYY",LLL:"D [a viz] MMMM YYYY h[e]mm A",LLLL:"dddd, D [a viz] MMMM YYYY h[e]mm A"},calendar:{sameDay:"[Hiziv da] LT",nextDay:"[Warc'hoazh da] LT",nextWeek:"dddd [da] LT",lastDay:"[Dec'h da] LT",lastWeek:"dddd [paset da] LT",sameElse:"L"},relativeTime:{future:"a-benn %s",past:"%s 'zo",s:"un nebeud segondennoù",ss:"%d eilenn",m:"ur vunutenn",mm:t,h:"un eur",hh:"%d eur",d:"un devezh",dd:t,M:"ur miz",MM:t,y:"ur bloaz",yy:function(e){switch(function e(t){return t>9?e(t%10):t}(e)){case 1:case 3:case 4:case 5:case 9:return e+" bloaz";default:return e+" vloaz"}}},dayOfMonthOrdinalParse:/\d{1,2}(añ|vet)/,ordinal:function(e){var t=1===e?"añ":"vet";return e+t},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n){var r=e+" ";switch(n){case"ss":return r+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return t?"jedna minuta":"jedne minute";case"mm":return r+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return r+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return r+=1===e?"dan":"dana";case"MM":return r+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return r+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}e.defineLocale("bs",{months:"januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:t,m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("ca",{months:{standalone:"gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),format:"de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),isFormat:/D[oD]?(\s)+MMMM/},monthsShort:"gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),monthsParseExact:!0,weekdays:"diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),weekdaysShort:"dg._dl._dt._dc._dj._dv._ds.".split("_"),weekdaysMin:"dg_dl_dt_dc_dj_dv_ds".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [de] YYYY",ll:"D MMM YYYY",LLL:"D MMMM [de] YYYY [a les] H:mm",lll:"D MMM YYYY, H:mm",LLLL:"dddd D MMMM [de] YYYY [a les] H:mm",llll:"ddd D MMM YYYY, H:mm"},calendar:{sameDay:function(){return"[avui a "+(1!==this.hours()?"les":"la")+"] LT"},nextDay:function(){return"[demà a "+(1!==this.hours()?"les":"la")+"] LT"},nextWeek:function(){return"dddd [a "+(1!==this.hours()?"les":"la")+"] LT"},lastDay:function(){return"[ahir a "+(1!==this.hours()?"les":"la")+"] LT"},lastWeek:function(){return"[el] dddd [passat a "+(1!==this.hours()?"les":"la")+"] LT"},sameElse:"L"},relativeTime:{future:"d'aquí %s",past:"fa %s",s:"uns segons",ss:"%d segons",m:"un minut",mm:"%d minuts",h:"una hora",hh:"%d hores",d:"un dia",dd:"%d dies",M:"un mes",MM:"%d mesos",y:"un any",yy:"%d anys"},dayOfMonthOrdinalParse:/\d{1,2}(r|n|t|è|a)/,ordinal:function(e,t){var n=1===e?"r":2===e?"n":3===e?"r":4===e?"t":"è";return"w"!==t&&"W"!==t||(n="a"),e+n},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),n="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");function r(e){return e>1&&e<5&&1!=~~(e/10)}function a(e,t,n,a){var i=e+" ";switch(n){case"s":return t||a?"pár sekund":"pár sekundami";case"ss":return t||a?i+(r(e)?"sekundy":"sekund"):i+"sekundami";case"m":return t?"minuta":a?"minutu":"minutou";case"mm":return t||a?i+(r(e)?"minuty":"minut"):i+"minutami";case"h":return t?"hodina":a?"hodinu":"hodinou";case"hh":return t||a?i+(r(e)?"hodiny":"hodin"):i+"hodinami";case"d":return t||a?"den":"dnem";case"dd":return t||a?i+(r(e)?"dny":"dní"):i+"dny";case"M":return t||a?"měsíc":"měsícem";case"MM":return t||a?i+(r(e)?"měsíce":"měsíců"):i+"měsíci";case"y":return t||a?"rok":"rokem";case"yy":return t||a?i+(r(e)?"roky":"let"):i+"lety"}}e.defineLocale("cs",{months:t,monthsShort:n,monthsParse:function(e,t){var n,r=[];for(n=0;n<12;n++)r[n]=new RegExp("^"+e[n]+"$|^"+t[n]+"$","i");return r}(t,n),shortMonthsParse:function(e){var t,n=[];for(t=0;t<12;t++)n[t]=new RegExp("^"+e[t]+"$","i");return n}(n),longMonthsParse:function(e){var t,n=[];for(t=0;t<12;t++)n[t]=new RegExp("^"+e[t]+"$","i");return n}(t),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:a,ss:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("cv",{months:"кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),monthsShort:"кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),weekdays:"вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),weekdaysShort:"выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),weekdaysMin:"вр_тн_ыт_юн_кҫ_эр_шм".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",LLL:"YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",LLLL:"dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"},calendar:{sameDay:"[Паян] LT [сехетре]",nextDay:"[Ыран] LT [сехетре]",lastDay:"[Ӗнер] LT [сехетре]",nextWeek:"[Ҫитес] dddd LT [сехетре]",lastWeek:"[Иртнӗ] dddd LT [сехетре]",sameElse:"L"},relativeTime:{future:function(e){var t=/сехет$/i.exec(e)?"рен":/ҫул$/i.exec(e)?"тан":"ран";return e+t},past:"%s каялла",s:"пӗр-ик ҫеккунт",ss:"%d ҫеккунт",m:"пӗр минут",mm:"%d минут",h:"пӗр сехет",hh:"%d сехет",d:"пӗр кун",dd:"%d кун",M:"пӗр уйӑх",MM:"%d уйӑх",y:"пӗр ҫул",yy:"%d ҫул"},dayOfMonthOrdinalParse:/\d{1,2}-мӗш/,ordinal:"%d-мӗш",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("cy",{months:"Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),monthsShort:"Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),weekdays:"Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),weekdaysShort:"Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),weekdaysMin:"Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Heddiw am] LT",nextDay:"[Yfory am] LT",nextWeek:"dddd [am] LT",lastDay:"[Ddoe am] LT",lastWeek:"dddd [diwethaf am] LT",sameElse:"L"},relativeTime:{future:"mewn %s",past:"%s yn ôl",s:"ychydig eiliadau",ss:"%d eiliad",m:"munud",mm:"%d munud",h:"awr",hh:"%d awr",d:"diwrnod",dd:"%d diwrnod",M:"mis",MM:"%d mis",y:"blwyddyn",yy:"%d flynedd"},dayOfMonthOrdinalParse:/\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,ordinal:function(e){var t=e,n="";return t>20?n=40===t||50===t||60===t||80===t||100===t?"fed":"ain":t>0&&(n=["","af","il","ydd","ydd","ed","ed","ed","fed","fed","fed","eg","fed","eg","eg","fed","eg","eg","fed","eg","fed"][t]),e+n},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("da",{months:"januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"søn_man_tir_ons_tor_fre_lør".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd [d.] D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"på dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[i] dddd[s kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"få sekunder",ss:"%d sekunder",m:"et minut",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dage",M:"en måned",MM:"%d måneder",y:"et år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n,r){var a={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?a[n][0]:a[n][1]}e.defineLocale("de",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n,r){var a={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?a[n][0]:a[n][1]}e.defineLocale("de-at",{months:"Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n,r){var a={m:["eine Minute","einer Minute"],h:["eine Stunde","einer Stunde"],d:["ein Tag","einem Tag"],dd:[e+" Tage",e+" Tagen"],M:["ein Monat","einem Monat"],MM:[e+" Monate",e+" Monaten"],y:["ein Jahr","einem Jahr"],yy:[e+" Jahre",e+" Jahren"]};return t?a[n][0]:a[n][1]}e.defineLocale("de-ch",{months:"Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),weekdaysShort:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysMin:"So_Mo_Di_Mi_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY HH:mm",LLLL:"dddd, D. MMMM YYYY HH:mm"},calendar:{sameDay:"[heute um] LT [Uhr]",sameElse:"L",nextDay:"[morgen um] LT [Uhr]",nextWeek:"dddd [um] LT [Uhr]",lastDay:"[gestern um] LT [Uhr]",lastWeek:"[letzten] dddd [um] LT [Uhr]"},relativeTime:{future:"in %s",past:"vor %s",s:"ein paar Sekunden",ss:"%d Sekunden",m:t,mm:"%d Minuten",h:t,hh:"%d Stunden",d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t=["ޖެނުއަރީ","ފެބްރުއަރީ","މާރިޗު","އޭޕްރީލު","މޭ","ޖޫން","ޖުލައި","އޯގަސްޓު","ސެޕްޓެމްބަރު","އޮކްޓޯބަރު","ނޮވެމްބަރު","ޑިސެމްބަރު"],n=["އާދިއްތަ","ހޯމަ","އަންގާރަ","ބުދަ","ބުރާސްފަތި","ހުކުރު","ހޮނިހިރު"];e.defineLocale("dv",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:"އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"D/M/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},meridiemParse:/މކ|މފ/,isPM:function(e){return"މފ"===e},meridiem:function(e,t,n){return e<12?"މކ":"މފ"},calendar:{sameDay:"[މިއަދު] LT",nextDay:"[މާދަމާ] LT",nextWeek:"dddd LT",lastDay:"[އިއްޔެ] LT",lastWeek:"[ފާއިތުވި] dddd LT",sameElse:"L"},relativeTime:{future:"ތެރޭގައި %s",past:"ކުރިން %s",s:"ސިކުންތުކޮޅެއް",ss:"d% ސިކުންތު",m:"މިނިޓެއް",mm:"މިނިޓު %d",h:"ގަޑިއިރެއް",hh:"ގަޑިއިރު %d",d:"ދުވަހެއް",dd:"ދުވަސް %d",M:"މަހެއް",MM:"މަސް %d",y:"އަހަރެއް",yy:"އަހަރު %d"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:7,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("el",{monthsNominativeEl:"Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),monthsGenitiveEl:"Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),months:function(e,t){return e?"string"==typeof t&&/D/.test(t.substring(0,t.indexOf("MMMM")))?this._monthsGenitiveEl[e.month()]:this._monthsNominativeEl[e.month()]:this._monthsNominativeEl},monthsShort:"Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),weekdays:"Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),weekdaysShort:"Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),weekdaysMin:"Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),meridiem:function(e,t,n){return e>11?n?"μμ":"ΜΜ":n?"πμ":"ΠΜ"},isPM:function(e){return"μ"===(e+"").toLowerCase()[0]},meridiemParse:/[ΠΜ]\.?Μ?\.?/i,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendarEl:{sameDay:"[Σήμερα {}] LT",nextDay:"[Αύριο {}] LT",nextWeek:"dddd [{}] LT",lastDay:"[Χθες {}] LT",lastWeek:function(){switch(this.day()){case 6:return"[το προηγούμενο] dddd [{}] LT";default:return"[την προηγούμενη] dddd [{}] LT"}},sameElse:"L"},calendar:function(e,t){var n,r=this._calendarEl[e],a=t&&t.hours();return((n=r)instanceof Function||"[object Function]"===Object.prototype.toString.call(n))&&(r=r.apply(t)),r.replace("{}",a%12==1?"στη":"στις")},relativeTime:{future:"σε %s",past:"%s πριν",s:"λίγα δευτερόλεπτα",ss:"%d δευτερόλεπτα",m:"ένα λεπτό",mm:"%d λεπτά",h:"μία ώρα",hh:"%d ώρες",d:"μία μέρα",dd:"%d μέρες",M:"ένας μήνας",MM:"%d μήνες",y:"ένας χρόνος",yy:"%d χρόνια"},dayOfMonthOrdinalParse:/\d{1,2}η/,ordinal:"%dη",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("en-au",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("en-ca",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"YYYY-MM-DD",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("en-gb",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("en-ie",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("en-il",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("en-nz",{months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("eo",{months:"januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),weekdays:"dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),weekdaysShort:"dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),weekdaysMin:"di_lu_ma_me_ĵa_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D[-a de] MMMM, YYYY",LLL:"D[-a de] MMMM, YYYY HH:mm",LLLL:"dddd, [la] D[-a de] MMMM, YYYY HH:mm"},meridiemParse:/[ap]\.t\.m/i,isPM:function(e){return"p"===e.charAt(0).toLowerCase()},meridiem:function(e,t,n){return e>11?n?"p.t.m.":"P.T.M.":n?"a.t.m.":"A.T.M."},calendar:{sameDay:"[Hodiaŭ je] LT",nextDay:"[Morgaŭ je] LT",nextWeek:"dddd [je] LT",lastDay:"[Hieraŭ je] LT",lastWeek:"[pasinta] dddd [je] LT",sameElse:"L"},relativeTime:{future:"post %s",past:"antaŭ %s",s:"sekundoj",ss:"%d sekundoj",m:"minuto",mm:"%d minutoj",h:"horo",hh:"%d horoj",d:"tago",dd:"%d tagoj",M:"monato",MM:"%d monatoj",y:"jaro",yy:"%d jaroj"},dayOfMonthOrdinalParse:/\d{1,2}a/,ordinal:"%da",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],a=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;e.defineLocale("es",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:a,monthsShortRegex:a,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),r=[/^ene/i,/^feb/i,/^mar/i,/^abr/i,/^may/i,/^jun/i,/^jul/i,/^ago/i,/^sep/i,/^oct/i,/^nov/i,/^dic/i],a=/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;e.defineLocale("es-do",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:a,monthsShortRegex:a,monthsStrictRegex:/^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,monthsShortStrictRegex:/^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY h:mm A",LLLL:"dddd, D [de] MMMM [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t="ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),n="ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_");e.defineLocale("es-us",{months:"enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsParseExact:!0,weekdays:"domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),weekdaysShort:"dom._lun._mar._mié._jue._vie._sáb.".split("_"),weekdaysMin:"do_lu_ma_mi_ju_vi_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"MM/DD/YYYY",LL:"MMMM [de] D [de] YYYY",LLL:"MMMM [de] D [de] YYYY h:mm A",LLLL:"dddd, MMMM [de] D [de] YYYY h:mm A"},calendar:{sameDay:function(){return"[hoy a la"+(1!==this.hours()?"s":"")+"] LT"},nextDay:function(){return"[mañana a la"+(1!==this.hours()?"s":"")+"] LT"},nextWeek:function(){return"dddd [a la"+(1!==this.hours()?"s":"")+"] LT"},lastDay:function(){return"[ayer a la"+(1!==this.hours()?"s":"")+"] LT"},lastWeek:function(){return"[el] dddd [pasado a la"+(1!==this.hours()?"s":"")+"] LT"},sameElse:"L"},relativeTime:{future:"en %s",past:"hace %s",s:"unos segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"una hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un año",yy:"%d años"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n,r){var a={s:["mõne sekundi","mõni sekund","paar sekundit"],ss:[e+"sekundi",e+"sekundit"],m:["ühe minuti","üks minut"],mm:[e+" minuti",e+" minutit"],h:["ühe tunni","tund aega","üks tund"],hh:[e+" tunni",e+" tundi"],d:["ühe päeva","üks päev"],M:["kuu aja","kuu aega","üks kuu"],MM:[e+" kuu",e+" kuud"],y:["ühe aasta","aasta","üks aasta"],yy:[e+" aasta",e+" aastat"]};return t?a[n][2]?a[n][2]:a[n][1]:r?a[n][0]:a[n][1]}e.defineLocale("et",{months:"jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),monthsShort:"jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),weekdays:"pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),weekdaysShort:"P_E_T_K_N_R_L".split("_"),weekdaysMin:"P_E_T_K_N_R_L".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[Täna,] LT",nextDay:"[Homme,] LT",nextWeek:"[Järgmine] dddd LT",lastDay:"[Eile,] LT",lastWeek:"[Eelmine] dddd LT",sameElse:"L"},relativeTime:{future:"%s pärast",past:"%s tagasi",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:"%d päeva",M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("eu",{months:"urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),monthsShort:"urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),monthsParseExact:!0,weekdays:"igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),weekdaysShort:"ig._al._ar._az._og._ol._lr.".split("_"),weekdaysMin:"ig_al_ar_az_og_ol_lr".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY[ko] MMMM[ren] D[a]",LLL:"YYYY[ko] MMMM[ren] D[a] HH:mm",LLLL:"dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",l:"YYYY-M-D",ll:"YYYY[ko] MMM D[a]",lll:"YYYY[ko] MMM D[a] HH:mm",llll:"ddd, YYYY[ko] MMM D[a] HH:mm"},calendar:{sameDay:"[gaur] LT[etan]",nextDay:"[bihar] LT[etan]",nextWeek:"dddd LT[etan]",lastDay:"[atzo] LT[etan]",lastWeek:"[aurreko] dddd LT[etan]",sameElse:"L"},relativeTime:{future:"%s barru",past:"duela %s",s:"segundo batzuk",ss:"%d segundo",m:"minutu bat",mm:"%d minutu",h:"ordu bat",hh:"%d ordu",d:"egun bat",dd:"%d egun",M:"hilabete bat",MM:"%d hilabete",y:"urte bat",yy:"%d urte"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"۱",2:"۲",3:"۳",4:"۴",5:"۵",6:"۶",7:"۷",8:"۸",9:"۹",0:"۰"},n={"۱":"1","۲":"2","۳":"3","۴":"4","۵":"5","۶":"6","۷":"7","۸":"8","۹":"9","۰":"0"};e.defineLocale("fa",{months:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),monthsShort:"ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),weekdays:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysShort:"یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),weekdaysMin:"ی_د_س_چ_پ_ج_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/قبل از ظهر|بعد از ظهر/,isPM:function(e){return/بعد از ظهر/.test(e)},meridiem:function(e,t,n){return e<12?"قبل از ظهر":"بعد از ظهر"},calendar:{sameDay:"[امروز ساعت] LT",nextDay:"[فردا ساعت] LT",nextWeek:"dddd [ساعت] LT",lastDay:"[دیروز ساعت] LT",lastWeek:"dddd [پیش] [ساعت] LT",sameElse:"L"},relativeTime:{future:"در %s",past:"%s پیش",s:"چند ثانیه",ss:"ثانیه d%",m:"یک دقیقه",mm:"%d دقیقه",h:"یک ساعت",hh:"%d ساعت",d:"یک روز",dd:"%d روز",M:"یک ماه",MM:"%d ماه",y:"یک سال",yy:"%d سال"},preparse:function(e){return e.replace(/[۰-۹]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},dayOfMonthOrdinalParse:/\d{1,2}م/,ordinal:"%dم",week:{dow:6,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";var t="nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),n=["nolla","yhden","kahden","kolmen","neljän","viiden","kuuden",t[7],t[8],t[9]];function r(e,r,a,i){var s="";switch(a){case"s":return i?"muutaman sekunnin":"muutama sekunti";case"ss":return i?"sekunnin":"sekuntia";case"m":return i?"minuutin":"minuutti";case"mm":s=i?"minuutin":"minuuttia";break;case"h":return i?"tunnin":"tunti";case"hh":s=i?"tunnin":"tuntia";break;case"d":return i?"päivän":"päivä";case"dd":s=i?"päivän":"päivää";break;case"M":return i?"kuukauden":"kuukausi";case"MM":s=i?"kuukauden":"kuukautta";break;case"y":return i?"vuoden":"vuosi";case"yy":s=i?"vuoden":"vuotta"}return s=function(e,r){return e<10?r?n[e]:t[e]:e}(e,i)+" "+s}e.defineLocale("fi",{months:"tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),monthsShort:"tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),weekdays:"sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),weekdaysShort:"su_ma_ti_ke_to_pe_la".split("_"),weekdaysMin:"su_ma_ti_ke_to_pe_la".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"Do MMMM[ta] YYYY",LLL:"Do MMMM[ta] YYYY, [klo] HH.mm",LLLL:"dddd, Do MMMM[ta] YYYY, [klo] HH.mm",l:"D.M.YYYY",ll:"Do MMM YYYY",lll:"Do MMM YYYY, [klo] HH.mm",llll:"ddd, Do MMM YYYY, [klo] HH.mm"},calendar:{sameDay:"[tänään] [klo] LT",nextDay:"[huomenna] [klo] LT",nextWeek:"dddd [klo] LT",lastDay:"[eilen] [klo] LT",lastWeek:"[viime] dddd[na] [klo] LT",sameElse:"L"},relativeTime:{future:"%s päästä",past:"%s sitten",s:r,ss:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("fo",{months:"januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),weekdaysShort:"sun_mán_týs_mik_hós_frí_ley".split("_"),weekdaysMin:"su_má_tý_mi_hó_fr_le".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D. MMMM, YYYY HH:mm"},calendar:{sameDay:"[Í dag kl.] LT",nextDay:"[Í morgin kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[Í gjár kl.] LT",lastWeek:"[síðstu] dddd [kl] LT",sameElse:"L"},relativeTime:{future:"um %s",past:"%s síðani",s:"fá sekund",ss:"%d sekundir",m:"ein minutt",mm:"%d minuttir",h:"ein tími",hh:"%d tímar",d:"ein dagur",dd:"%d dagar",M:"ein mánaði",MM:"%d mánaðir",y:"eitt ár",yy:"%d ár"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("fr",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|)/,ordinal:function(e,t){switch(t){case"D":return e+(1===e?"er":"");default:case"M":case"Q":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("fr-ca",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,t){switch(t){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("fr-ch",{months:"janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),monthsShort:"janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),monthsParseExact:!0,weekdays:"dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),weekdaysShort:"dim._lun._mar._mer._jeu._ven._sam.".split("_"),weekdaysMin:"di_lu_ma_me_je_ve_sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Aujourd’hui à] LT",nextDay:"[Demain à] LT",nextWeek:"dddd [à] LT",lastDay:"[Hier à] LT",lastWeek:"dddd [dernier à] LT",sameElse:"L"},relativeTime:{future:"dans %s",past:"il y a %s",s:"quelques secondes",ss:"%d secondes",m:"une minute",mm:"%d minutes",h:"une heure",hh:"%d heures",d:"un jour",dd:"%d jours",M:"un mois",MM:"%d mois",y:"un an",yy:"%d ans"},dayOfMonthOrdinalParse:/\d{1,2}(er|e)/,ordinal:function(e,t){switch(t){default:case"M":case"Q":case"D":case"DDD":case"d":return e+(1===e?"er":"e");case"w":case"W":return e+(1===e?"re":"e")}},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t="jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),n="jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");e.defineLocale("fy",{months:"jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsParseExact:!0,weekdays:"snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),weekdaysShort:"si._mo._ti._wo._to._fr._so.".split("_"),weekdaysMin:"Si_Mo_Ti_Wo_To_Fr_So".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[hjoed om] LT",nextDay:"[moarn om] LT",nextWeek:"dddd [om] LT",lastDay:"[juster om] LT",lastWeek:"[ôfrûne] dddd [om] LT",sameElse:"L"},relativeTime:{future:"oer %s",past:"%s lyn",s:"in pear sekonden",ss:"%d sekonden",m:"ien minút",mm:"%d minuten",h:"ien oere",hh:"%d oeren",d:"ien dei",dd:"%d dagen",M:"ien moanne",MM:"%d moannen",y:"ien jier",yy:"%d jierren"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("gd",{months:["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"],monthsShort:["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],monthsParseExact:!0,weekdays:["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"],weekdaysShort:["Did","Dil","Dim","Dic","Dia","Dih","Dis"],weekdaysMin:["Dò","Lu","Mà","Ci","Ar","Ha","Sa"],longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[An-diugh aig] LT",nextDay:"[A-màireach aig] LT",nextWeek:"dddd [aig] LT",lastDay:"[An-dè aig] LT",lastWeek:"dddd [seo chaidh] [aig] LT",sameElse:"L"},relativeTime:{future:"ann an %s",past:"bho chionn %s",s:"beagan diogan",ss:"%d diogan",m:"mionaid",mm:"%d mionaidean",h:"uair",hh:"%d uairean",d:"latha",dd:"%d latha",M:"mìos",MM:"%d mìosan",y:"bliadhna",yy:"%d bliadhna"},dayOfMonthOrdinalParse:/\d{1,2}(d|na|mh)/,ordinal:function(e){var t=1===e?"d":e%10==2?"na":"mh";return e+t},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("gl",{months:"xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),monthsShort:"xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),weekdaysShort:"dom._lun._mar._mér._xov._ven._sáb.".split("_"),weekdaysMin:"do_lu_ma_mé_xo_ve_sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY H:mm",LLLL:"dddd, D [de] MMMM [de] YYYY H:mm"},calendar:{sameDay:function(){return"[hoxe "+(1!==this.hours()?"ás":"á")+"] LT"},nextDay:function(){return"[mañá "+(1!==this.hours()?"ás":"á")+"] LT"},nextWeek:function(){return"dddd ["+(1!==this.hours()?"ás":"a")+"] LT"},lastDay:function(){return"[onte "+(1!==this.hours()?"á":"a")+"] LT"},lastWeek:function(){return"[o] dddd [pasado "+(1!==this.hours()?"ás":"a")+"] LT"},sameElse:"L"},relativeTime:{future:function(e){return 0===e.indexOf("un")?"n"+e:"en "+e},past:"hai %s",s:"uns segundos",ss:"%d segundos",m:"un minuto",mm:"%d minutos",h:"unha hora",hh:"%d horas",d:"un día",dd:"%d días",M:"un mes",MM:"%d meses",y:"un ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n,r){var a={s:["thodde secondanim","thodde second"],ss:[e+" secondanim",e+" second"],m:["eka mintan","ek minute"],mm:[e+" mintanim",e+" mintam"],h:["eka horan","ek hor"],hh:[e+" horanim",e+" horam"],d:["eka disan","ek dis"],dd:[e+" disanim",e+" dis"],M:["eka mhoinean","ek mhoino"],MM:[e+" mhoineanim",e+" mhoine"],y:["eka vorsan","ek voros"],yy:[e+" vorsanim",e+" vorsam"]};return t?a[n][0]:a[n][1]}e.defineLocale("gom-latn",{months:"Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),monthsShort:"Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),weekdaysShort:"Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),weekdaysMin:"Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"A h:mm [vazta]",LTS:"A h:mm:ss [vazta]",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY A h:mm [vazta]",LLLL:"dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",llll:"ddd, D MMM YYYY, A h:mm [vazta]"},calendar:{sameDay:"[Aiz] LT",nextDay:"[Faleam] LT",nextWeek:"[Ieta to] dddd[,] LT",lastDay:"[Kal] LT",lastWeek:"[Fatlo] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%s",past:"%s adim",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}(er)/,ordinal:function(e,t){switch(t){case"D":return e+"er";default:case"M":case"Q":case"DDD":case"d":case"w":case"W":return e}},week:{dow:1,doy:4},meridiemParse:/rati|sokalli|donparam|sanje/,meridiemHour:function(e,t){return 12===e&&(e=0),"rati"===t?e<4?e:e+12:"sokalli"===t?e:"donparam"===t?e>12?e:e+12:"sanje"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"rati":e<12?"sokalli":e<16?"donparam":e<20?"sanje":"rati"}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"૧",2:"૨",3:"૩",4:"૪",5:"૫",6:"૬",7:"૭",8:"૮",9:"૯",0:"૦"},n={"૧":"1","૨":"2","૩":"3","૪":"4","૫":"5","૬":"6","૭":"7","૮":"8","૯":"9","૦":"0"};e.defineLocale("gu",{months:"જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"),monthsShort:"જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"),monthsParseExact:!0,weekdays:"રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"),weekdaysShort:"રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),weekdaysMin:"ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),longDateFormat:{LT:"A h:mm વાગ્યે",LTS:"A h:mm:ss વાગ્યે",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm વાગ્યે",LLLL:"dddd, D MMMM YYYY, A h:mm વાગ્યે"},calendar:{sameDay:"[આજ] LT",nextDay:"[કાલે] LT",nextWeek:"dddd, LT",lastDay:"[ગઇકાલે] LT",lastWeek:"[પાછલા] dddd, LT",sameElse:"L"},relativeTime:{future:"%s મા",past:"%s પેહલા",s:"અમુક પળો",ss:"%d સેકંડ",m:"એક મિનિટ",mm:"%d મિનિટ",h:"એક કલાક",hh:"%d કલાક",d:"એક દિવસ",dd:"%d દિવસ",M:"એક મહિનો",MM:"%d મહિનો",y:"એક વર્ષ",yy:"%d વર્ષ"},preparse:function(e){return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/રાત|બપોર|સવાર|સાંજ/,meridiemHour:function(e,t){return 12===e&&(e=0),"રાત"===t?e<4?e:e+12:"સવાર"===t?e:"બપોર"===t?e>=10?e:e+12:"સાંજ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"રાત":e<10?"સવાર":e<17?"બપોર":e<20?"સાંજ":"રાત"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("he",{months:"ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),monthsShort:"ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),weekdays:"ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),weekdaysShort:"א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),weekdaysMin:"א_ב_ג_ד_ה_ו_ש".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [ב]MMMM YYYY",LLL:"D [ב]MMMM YYYY HH:mm",LLLL:"dddd, D [ב]MMMM YYYY HH:mm",l:"D/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[היום ב־]LT",nextDay:"[מחר ב־]LT",nextWeek:"dddd [בשעה] LT",lastDay:"[אתמול ב־]LT",lastWeek:"[ביום] dddd [האחרון בשעה] LT",sameElse:"L"},relativeTime:{future:"בעוד %s",past:"לפני %s",s:"מספר שניות",ss:"%d שניות",m:"דקה",mm:"%d דקות",h:"שעה",hh:function(e){return 2===e?"שעתיים":e+" שעות"},d:"יום",dd:function(e){return 2===e?"יומיים":e+" ימים"},M:"חודש",MM:function(e){return 2===e?"חודשיים":e+" חודשים"},y:"שנה",yy:function(e){return 2===e?"שנתיים":e%10==0&&10!==e?e+" שנה":e+" שנים"}},meridiemParse:/אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,isPM:function(e){return/^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)},meridiem:function(e,t,n){return e<5?"לפנות בוקר":e<10?"בבוקר":e<12?n?'לפנה"צ':"לפני הצהריים":e<18?n?'אחה"צ':"אחרי הצהריים":"בערב"}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};e.defineLocale("hi",{months:"जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),monthsShort:"जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm बजे",LTS:"A h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm बजे",LLLL:"dddd, D MMMM YYYY, A h:mm बजे"},calendar:{sameDay:"[आज] LT",nextDay:"[कल] LT",nextWeek:"dddd, LT",lastDay:"[कल] LT",lastWeek:"[पिछले] dddd, LT",sameElse:"L"},relativeTime:{future:"%s में",past:"%s पहले",s:"कुछ ही क्षण",ss:"%d सेकंड",m:"एक मिनट",mm:"%d मिनट",h:"एक घंटा",hh:"%d घंटे",d:"एक दिन",dd:"%d दिन",M:"एक महीने",MM:"%d महीने",y:"एक वर्ष",yy:"%d वर्ष"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/रात|सुबह|दोपहर|शाम/,meridiemHour:function(e,t){return 12===e&&(e=0),"रात"===t?e<4?e:e+12:"सुबह"===t?e:"दोपहर"===t?e>=10?e:e+12:"शाम"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"रात":e<10?"सुबह":e<17?"दोपहर":e<20?"शाम":"रात"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n){var r=e+" ";switch(n){case"ss":return r+=1===e?"sekunda":2===e||3===e||4===e?"sekunde":"sekundi";case"m":return t?"jedna minuta":"jedne minute";case"mm":return r+=1===e?"minuta":2===e||3===e||4===e?"minute":"minuta";case"h":return t?"jedan sat":"jednog sata";case"hh":return r+=1===e?"sat":2===e||3===e||4===e?"sata":"sati";case"dd":return r+=1===e?"dan":"dana";case"MM":return r+=1===e?"mjesec":2===e||3===e||4===e?"mjeseca":"mjeseci";case"yy":return r+=1===e?"godina":2===e||3===e||4===e?"godine":"godina"}}e.defineLocale("hr",{months:{format:"siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),standalone:"siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")},monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[jučer u] LT",lastWeek:function(){switch(this.day()){case 0:case 3:return"[prošlu] dddd [u] LT";case 6:return"[prošle] [subote] [u] LT";case 1:case 2:case 4:case 5:return"[prošli] dddd [u] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"par sekundi",ss:t,m:t,mm:t,h:t,hh:t,d:"dan",dd:t,M:"mjesec",MM:t,y:"godinu",yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";var t="vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");function n(e,t,n,r){var a=e;switch(n){case"s":return r||t?"néhány másodperc":"néhány másodperce";case"ss":return a+(r||t)?" másodperc":" másodperce";case"m":return"egy"+(r||t?" perc":" perce");case"mm":return a+(r||t?" perc":" perce");case"h":return"egy"+(r||t?" óra":" órája");case"hh":return a+(r||t?" óra":" órája");case"d":return"egy"+(r||t?" nap":" napja");case"dd":return a+(r||t?" nap":" napja");case"M":return"egy"+(r||t?" hónap":" hónapja");case"MM":return a+(r||t?" hónap":" hónapja");case"y":return"egy"+(r||t?" év":" éve");case"yy":return a+(r||t?" év":" éve")}return""}function r(e){return(e?"":"[múlt] ")+"["+t[this.day()]+"] LT[-kor]"}e.defineLocale("hu",{months:"január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),monthsShort:"jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),weekdays:"vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),weekdaysShort:"vas_hét_kedd_sze_csüt_pén_szo".split("_"),weekdaysMin:"v_h_k_sze_cs_p_szo".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY. MMMM D.",LLL:"YYYY. MMMM D. H:mm",LLLL:"YYYY. MMMM D., dddd H:mm"},meridiemParse:/de|du/i,isPM:function(e){return"u"===e.charAt(1).toLowerCase()},meridiem:function(e,t,n){return e<12?!0===n?"de":"DE":!0===n?"du":"DU"},calendar:{sameDay:"[ma] LT[-kor]",nextDay:"[holnap] LT[-kor]",nextWeek:function(){return r.call(this,!0)},lastDay:"[tegnap] LT[-kor]",lastWeek:function(){return r.call(this,!1)},sameElse:"L"},relativeTime:{future:"%s múlva",past:"%s",s:n,ss:n,m:n,mm:n,h:n,hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("hy-am",{months:{format:"հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),standalone:"հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")},monthsShort:"հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),weekdays:"կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),weekdaysShort:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),weekdaysMin:"կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY թ.",LLL:"D MMMM YYYY թ., HH:mm",LLLL:"dddd, D MMMM YYYY թ., HH:mm"},calendar:{sameDay:"[այսօր] LT",nextDay:"[վաղը] LT",lastDay:"[երեկ] LT",nextWeek:function(){return"dddd [օրը ժամը] LT"},lastWeek:function(){return"[անցած] dddd [օրը ժամը] LT"},sameElse:"L"},relativeTime:{future:"%s հետո",past:"%s առաջ",s:"մի քանի վայրկյան",ss:"%d վայրկյան",m:"րոպե",mm:"%d րոպե",h:"ժամ",hh:"%d ժամ",d:"օր",dd:"%d օր",M:"ամիս",MM:"%d ամիս",y:"տարի",yy:"%d տարի"},meridiemParse:/գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,isPM:function(e){return/^(ցերեկվա|երեկոյան)$/.test(e)},meridiem:function(e){return e<4?"գիշերվա":e<12?"առավոտվա":e<17?"ցերեկվա":"երեկոյան"},dayOfMonthOrdinalParse:/\d{1,2}|\d{1,2}-(ին|րդ)/,ordinal:function(e,t){switch(t){case"DDD":case"w":case"W":case"DDDo":return 1===e?e+"-ին":e+"-րդ";default:return e}},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("id",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),weekdays:"Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),weekdaysShort:"Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|siang|sore|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"siang"===t?e>=11?e:e+12:"sore"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"siang":e<19?"sore":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Besok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kemarin pukul] LT",lastWeek:"dddd [lalu pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lalu",s:"beberapa detik",ss:"%d detik",m:"semenit",mm:"%d menit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e){return e%100==11||e%10!=1}function n(e,n,r,a){var i=e+" ";switch(r){case"s":return n||a?"nokkrar sekúndur":"nokkrum sekúndum";case"ss":return t(e)?i+(n||a?"sekúndur":"sekúndum"):i+"sekúnda";case"m":return n?"mínúta":"mínútu";case"mm":return t(e)?i+(n||a?"mínútur":"mínútum"):n?i+"mínúta":i+"mínútu";case"hh":return t(e)?i+(n||a?"klukkustundir":"klukkustundum"):i+"klukkustund";case"d":return n?"dagur":a?"dag":"degi";case"dd":return t(e)?n?i+"dagar":i+(a?"daga":"dögum"):n?i+"dagur":i+(a?"dag":"degi");case"M":return n?"mánuður":a?"mánuð":"mánuði";case"MM":return t(e)?n?i+"mánuðir":i+(a?"mánuði":"mánuðum"):n?i+"mánuður":i+(a?"mánuð":"mánuði");case"y":return n||a?"ár":"ári";case"yy":return t(e)?i+(n||a?"ár":"árum"):i+(n||a?"ár":"ári")}}e.defineLocale("is",{months:"janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),monthsShort:"jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),weekdays:"sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),weekdaysShort:"sun_mán_þri_mið_fim_fös_lau".split("_"),weekdaysMin:"Su_Má_Þr_Mi_Fi_Fö_La".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd, D. MMMM YYYY [kl.] H:mm"},calendar:{sameDay:"[í dag kl.] LT",nextDay:"[á morgun kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[í gær kl.] LT",lastWeek:"[síðasta] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"eftir %s",past:"fyrir %s síðan",s:n,ss:n,m:n,mm:n,h:"klukkustund",hh:n,d:n,dd:n,M:n,MM:n,y:n,yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("it",{months:"gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),monthsShort:"gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),weekdays:"domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),weekdaysShort:"dom_lun_mar_mer_gio_ven_sab".split("_"),weekdaysMin:"do_lu_ma_me_gi_ve_sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[Oggi alle] LT",nextDay:"[Domani alle] LT",nextWeek:"dddd [alle] LT",lastDay:"[Ieri alle] LT",lastWeek:function(){switch(this.day()){case 0:return"[la scorsa] dddd [alle] LT";default:return"[lo scorso] dddd [alle] LT"}},sameElse:"L"},relativeTime:{future:function(e){return(/^[0-9].+$/.test(e)?"tra":"in")+" "+e},past:"%s fa",s:"alcuni secondi",ss:"%d secondi",m:"un minuto",mm:"%d minuti",h:"un'ora",hh:"%d ore",d:"un giorno",dd:"%d giorni",M:"un mese",MM:"%d mesi",y:"un anno",yy:"%d anni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("ja",{months:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),weekdaysShort:"日_月_火_水_木_金_土".split("_"),weekdaysMin:"日_月_火_水_木_金_土".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日 dddd HH:mm",l:"YYYY/MM/DD",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日(ddd) HH:mm"},meridiemParse:/午前|午後/i,isPM:function(e){return"午後"===e},meridiem:function(e,t,n){return e<12?"午前":"午後"},calendar:{sameDay:"[今日] LT",nextDay:"[明日] LT",nextWeek:function(e){return e.week()<this.week()?"[来週]dddd LT":"dddd LT"},lastDay:"[昨日] LT",lastWeek:function(e){return this.week()<e.week()?"[先週]dddd LT":"dddd LT"},sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}日/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";default:return e}},relativeTime:{future:"%s後",past:"%s前",s:"数秒",ss:"%d秒",m:"1分",mm:"%d分",h:"1時間",hh:"%d時間",d:"1日",dd:"%d日",M:"1ヶ月",MM:"%dヶ月",y:"1年",yy:"%d年"}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("jv",{months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),monthsShort:"Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),weekdays:"Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),weekdaysShort:"Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),weekdaysMin:"Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/enjing|siyang|sonten|ndalu/,meridiemHour:function(e,t){return 12===e&&(e=0),"enjing"===t?e:"siyang"===t?e>=11?e:e+12:"sonten"===t||"ndalu"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"enjing":e<15?"siyang":e<19?"sonten":"ndalu"},calendar:{sameDay:"[Dinten puniko pukul] LT",nextDay:"[Mbenjang pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kala wingi pukul] LT",lastWeek:"dddd [kepengker pukul] LT",sameElse:"L"},relativeTime:{future:"wonten ing %s",past:"%s ingkang kepengker",s:"sawetawis detik",ss:"%d detik",m:"setunggal menit",mm:"%d menit",h:"setunggal jam",hh:"%d jam",d:"sedinten",dd:"%d dinten",M:"sewulan",MM:"%d wulan",y:"setaun",yy:"%d taun"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("ka",{months:{standalone:"იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),format:"იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")},monthsShort:"იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),weekdays:{standalone:"კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),format:"კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),isFormat:/(წინა|შემდეგ)/},weekdaysShort:"კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),weekdaysMin:"კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[დღეს] LT[-ზე]",nextDay:"[ხვალ] LT[-ზე]",lastDay:"[გუშინ] LT[-ზე]",nextWeek:"[შემდეგ] dddd LT[-ზე]",lastWeek:"[წინა] dddd LT-ზე",sameElse:"L"},relativeTime:{future:function(e){return/(წამი|წუთი|საათი|წელი)/.test(e)?e.replace(/ი$/,"ში"):e+"ში"},past:function(e){return/(წამი|წუთი|საათი|დღე|თვე)/.test(e)?e.replace(/(ი|ე)$/,"ის წინ"):/წელი/.test(e)?e.replace(/წელი$/,"წლის წინ"):void 0},s:"რამდენიმე წამი",ss:"%d წამი",m:"წუთი",mm:"%d წუთი",h:"საათი",hh:"%d საათი",d:"დღე",dd:"%d დღე",M:"თვე",MM:"%d თვე",y:"წელი",yy:"%d წელი"},dayOfMonthOrdinalParse:/0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,ordinal:function(e){return 0===e?e:1===e?e+"-ლი":e<20||e<=100&&e%20==0||e%100==0?"მე-"+e:e+"-ე"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={0:"-ші",1:"-ші",2:"-ші",3:"-ші",4:"-ші",5:"-ші",6:"-шы",7:"-ші",8:"-ші",9:"-шы",10:"-шы",20:"-шы",30:"-шы",40:"-шы",50:"-ші",60:"-шы",70:"-ші",80:"-ші",90:"-шы",100:"-ші"};e.defineLocale("kk",{months:"қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),monthsShort:"қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),weekdays:"жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),weekdaysShort:"жек_дүй_сей_сәр_бей_жұм_сен".split("_"),weekdaysMin:"жк_дй_сй_ср_бй_жм_сн".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгін сағат] LT",nextDay:"[Ертең сағат] LT",nextWeek:"dddd [сағат] LT",lastDay:"[Кеше сағат] LT",lastWeek:"[Өткен аптаның] dddd [сағат] LT",sameElse:"L"},relativeTime:{future:"%s ішінде",past:"%s бұрын",s:"бірнеше секунд",ss:"%d секунд",m:"бір минут",mm:"%d минут",h:"бір сағат",hh:"%d сағат",d:"бір күн",dd:"%d күн",M:"бір ай",MM:"%d ай",y:"бір жыл",yy:"%d жыл"},dayOfMonthOrdinalParse:/\d{1,2}-(ші|шы)/,ordinal:function(e){var n=e%10,r=e>=100?100:null;return e+(t[e]||t[n]||t[r])},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"១",2:"២",3:"៣",4:"៤",5:"៥",6:"៦",7:"៧",8:"៨",9:"៩",0:"០"},n={"១":"1","២":"2","៣":"3","៤":"4","៥":"5","៦":"6","៧":"7","៨":"8","៩":"9","០":"0"};e.defineLocale("km",{months:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),monthsShort:"មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),weekdays:"អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),weekdaysShort:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),weekdaysMin:"អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/ព្រឹក|ល្ងាច/,isPM:function(e){return"ល្ងាច"===e},meridiem:function(e,t,n){return e<12?"ព្រឹក":"ល្ងាច"},calendar:{sameDay:"[ថ្ងៃនេះ ម៉ោង] LT",nextDay:"[ស្អែក ម៉ោង] LT",nextWeek:"dddd [ម៉ោង] LT",lastDay:"[ម្សិលមិញ ម៉ោង] LT",lastWeek:"dddd [សប្តាហ៍មុន] [ម៉ោង] LT",sameElse:"L"},relativeTime:{future:"%sទៀត",past:"%sមុន",s:"ប៉ុន្មានវិនាទី",ss:"%d វិនាទី",m:"មួយនាទី",mm:"%d នាទី",h:"មួយម៉ោង",hh:"%d ម៉ោង",d:"មួយថ្ងៃ",dd:"%d ថ្ងៃ",M:"មួយខែ",MM:"%d ខែ",y:"មួយឆ្នាំ",yy:"%d ឆ្នាំ"},dayOfMonthOrdinalParse:/ទី\d{1,2}/,ordinal:"ទី%d",preparse:function(e){return e.replace(/[១២៣៤៥៦៧៨៩០]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"೧",2:"೨",3:"೩",4:"೪",5:"೫",6:"೬",7:"೭",8:"೮",9:"೯",0:"೦"},n={"೧":"1","೨":"2","೩":"3","೪":"4","೫":"5","೬":"6","೭":"7","೮":"8","೯":"9","೦":"0"};e.defineLocale("kn",{months:"ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),monthsShort:"ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"),monthsParseExact:!0,weekdays:"ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),weekdaysShort:"ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),weekdaysMin:"ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[ಇಂದು] LT",nextDay:"[ನಾಳೆ] LT",nextWeek:"dddd, LT",lastDay:"[ನಿನ್ನೆ] LT",lastWeek:"[ಕೊನೆಯ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ನಂತರ",past:"%s ಹಿಂದೆ",s:"ಕೆಲವು ಕ್ಷಣಗಳು",ss:"%d ಸೆಕೆಂಡುಗಳು",m:"ಒಂದು ನಿಮಿಷ",mm:"%d ನಿಮಿಷ",h:"ಒಂದು ಗಂಟೆ",hh:"%d ಗಂಟೆ",d:"ಒಂದು ದಿನ",dd:"%d ದಿನ",M:"ಒಂದು ತಿಂಗಳು",MM:"%d ತಿಂಗಳು",y:"ಒಂದು ವರ್ಷ",yy:"%d ವರ್ಷ"},preparse:function(e){return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,meridiemHour:function(e,t){return 12===e&&(e=0),"ರಾತ್ರಿ"===t?e<4?e:e+12:"ಬೆಳಿಗ್ಗೆ"===t?e:"ಮಧ್ಯಾಹ್ನ"===t?e>=10?e:e+12:"ಸಂಜೆ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"ರಾತ್ರಿ":e<10?"ಬೆಳಿಗ್ಗೆ":e<17?"ಮಧ್ಯಾಹ್ನ":e<20?"ಸಂಜೆ":"ರಾತ್ರಿ"},dayOfMonthOrdinalParse:/\d{1,2}(ನೇ)/,ordinal:function(e){return e+"ನೇ"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("ko",{months:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),monthsShort:"1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),weekdays:"일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),weekdaysShort:"일_월_화_수_목_금_토".split("_"),weekdaysMin:"일_월_화_수_목_금_토".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"YYYY.MM.DD.",LL:"YYYY년 MMMM D일",LLL:"YYYY년 MMMM D일 A h:mm",LLLL:"YYYY년 MMMM D일 dddd A h:mm",l:"YYYY.MM.DD.",ll:"YYYY년 MMMM D일",lll:"YYYY년 MMMM D일 A h:mm",llll:"YYYY년 MMMM D일 dddd A h:mm"},calendar:{sameDay:"오늘 LT",nextDay:"내일 LT",nextWeek:"dddd LT",lastDay:"어제 LT",lastWeek:"지난주 dddd LT",sameElse:"L"},relativeTime:{future:"%s 후",past:"%s 전",s:"몇 초",ss:"%d초",m:"1분",mm:"%d분",h:"한 시간",hh:"%d시간",d:"하루",dd:"%d일",M:"한 달",MM:"%d달",y:"일 년",yy:"%d년"},dayOfMonthOrdinalParse:/\d{1,2}(일|월|주)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"일";case"M":return e+"월";case"w":case"W":return e+"주";default:return e}},meridiemParse:/오전|오후/,isPM:function(e){return"오후"===e},meridiem:function(e,t,n){return e<12?"오전":"오후"}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"١",2:"٢",3:"٣",4:"٤",5:"٥",6:"٦",7:"٧",8:"٨",9:"٩",0:"٠"},n={"١":"1","٢":"2","٣":"3","٤":"4","٥":"5","٦":"6","٧":"7","٨":"8","٩":"9","٠":"0"},r=["کانونی دووەم","شوبات","ئازار","نیسان","ئایار","حوزەیران","تەمموز","ئاب","ئەیلوول","تشرینی یەكەم","تشرینی دووەم","كانونی یەکەم"];e.defineLocale("ku",{months:r,monthsShort:r,weekdays:"یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"),weekdaysShort:"یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"),weekdaysMin:"ی_د_س_چ_پ_ه_ش".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},meridiemParse:/ئێواره‌|به‌یانی/,isPM:function(e){return/ئێواره‌/.test(e)},meridiem:function(e,t,n){return e<12?"به‌یانی":"ئێواره‌"},calendar:{sameDay:"[ئه‌مرۆ كاتژمێر] LT",nextDay:"[به‌یانی كاتژمێر] LT",nextWeek:"dddd [كاتژمێر] LT",lastDay:"[دوێنێ كاتژمێر] LT",lastWeek:"dddd [كاتژمێر] LT",sameElse:"L"},relativeTime:{future:"له‌ %s",past:"%s",s:"چه‌ند چركه‌یه‌ك",ss:"چركه‌ %d",m:"یه‌ك خوله‌ك",mm:"%d خوله‌ك",h:"یه‌ك كاتژمێر",hh:"%d كاتژمێر",d:"یه‌ك ڕۆژ",dd:"%d ڕۆژ",M:"یه‌ك مانگ",MM:"%d مانگ",y:"یه‌ك ساڵ",yy:"%d ساڵ"},preparse:function(e){return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g,function(e){return n[e]}).replace(/،/g,",")},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]}).replace(/,/g,"،")},week:{dow:6,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={0:"-чү",1:"-чи",2:"-чи",3:"-чү",4:"-чү",5:"-чи",6:"-чы",7:"-чи",8:"-чи",9:"-чу",10:"-чу",20:"-чы",30:"-чу",40:"-чы",50:"-чү",60:"-чы",70:"-чи",80:"-чи",90:"-чу",100:"-чү"};e.defineLocale("ky",{months:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),monthsShort:"янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),weekdays:"Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),weekdaysShort:"Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),weekdaysMin:"Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Бүгүн саат] LT",nextDay:"[Эртең саат] LT",nextWeek:"dddd [саат] LT",lastDay:"[Кечээ саат] LT",lastWeek:"[Өткөн аптанын] dddd [күнү] [саат] LT",sameElse:"L"},relativeTime:{future:"%s ичинде",past:"%s мурун",s:"бирнече секунд",ss:"%d секунд",m:"бир мүнөт",mm:"%d мүнөт",h:"бир саат",hh:"%d саат",d:"бир күн",dd:"%d күн",M:"бир ай",MM:"%d ай",y:"бир жыл",yy:"%d жыл"},dayOfMonthOrdinalParse:/\d{1,2}-(чи|чы|чү|чу)/,ordinal:function(e){var n=e%10,r=e>=100?100:null;return e+(t[e]||t[n]||t[r])},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n,r){var a={m:["eng Minutt","enger Minutt"],h:["eng Stonn","enger Stonn"],d:["een Dag","engem Dag"],M:["ee Mount","engem Mount"],y:["ee Joer","engem Joer"]};return t?a[n][0]:a[n][1]}function n(e){if(e=parseInt(e,10),isNaN(e))return!1;if(e<0)return!0;if(e<10)return 4<=e&&e<=7;if(e<100){var t=e%10,r=e/10;return n(0===t?r:t)}if(e<1e4){for(;e>=10;)e/=10;return n(e)}return n(e/=1e3)}e.defineLocale("lb",{months:"Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),monthsShort:"Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),monthsParseExact:!0,weekdays:"Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),weekdaysShort:"So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),weekdaysMin:"So_Mé_Dë_Më_Do_Fr_Sa".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm [Auer]",LTS:"H:mm:ss [Auer]",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm [Auer]",LLLL:"dddd, D. MMMM YYYY H:mm [Auer]"},calendar:{sameDay:"[Haut um] LT",sameElse:"L",nextDay:"[Muer um] LT",nextWeek:"dddd [um] LT",lastDay:"[Gëschter um] LT",lastWeek:function(){switch(this.day()){case 2:case 4:return"[Leschten] dddd [um] LT";default:return"[Leschte] dddd [um] LT"}}},relativeTime:{future:function(e){return n(e.substr(0,e.indexOf(" ")))?"a "+e:"an "+e},past:function(e){return n(e.substr(0,e.indexOf(" ")))?"viru "+e:"virun "+e},s:"e puer Sekonnen",ss:"%d Sekonnen",m:t,mm:"%d Minutten",h:t,hh:"%d Stonnen",d:t,dd:"%d Deeg",M:t,MM:"%d Méint",y:t,yy:"%d Joer"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("lo",{months:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),monthsShort:"ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),weekdays:"ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysShort:"ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),weekdaysMin:"ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"ວັນdddd D MMMM YYYY HH:mm"},meridiemParse:/ຕອນເຊົ້າ|ຕອນແລງ/,isPM:function(e){return"ຕອນແລງ"===e},meridiem:function(e,t,n){return e<12?"ຕອນເຊົ້າ":"ຕອນແລງ"},calendar:{sameDay:"[ມື້ນີ້ເວລາ] LT",nextDay:"[ມື້ອື່ນເວລາ] LT",nextWeek:"[ວັນ]dddd[ໜ້າເວລາ] LT",lastDay:"[ມື້ວານນີ້ເວລາ] LT",lastWeek:"[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",sameElse:"L"},relativeTime:{future:"ອີກ %s",past:"%sຜ່ານມາ",s:"ບໍ່ເທົ່າໃດວິນາທີ",ss:"%d ວິນາທີ",m:"1 ນາທີ",mm:"%d ນາທີ",h:"1 ຊົ່ວໂມງ",hh:"%d ຊົ່ວໂມງ",d:"1 ມື້",dd:"%d ມື້",M:"1 ເດືອນ",MM:"%d ເດືອນ",y:"1 ປີ",yy:"%d ປີ"},dayOfMonthOrdinalParse:/(ທີ່)\d{1,2}/,ordinal:function(e){return"ທີ່"+e}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={ss:"sekundė_sekundžių_sekundes",m:"minutė_minutės_minutę",mm:"minutės_minučių_minutes",h:"valanda_valandos_valandą",hh:"valandos_valandų_valandas",d:"diena_dienos_dieną",dd:"dienos_dienų_dienas",M:"mėnuo_mėnesio_mėnesį",MM:"mėnesiai_mėnesių_mėnesius",y:"metai_metų_metus",yy:"metai_metų_metus"};function n(e,t,n,r){return t?a(n)[0]:r?a(n)[1]:a(n)[2]}function r(e){return e%10==0||e>10&&e<20}function a(e){return t[e].split("_")}function i(e,t,i,s){var o=e+" ";return 1===e?o+n(0,t,i[0],s):t?o+(r(e)?a(i)[1]:a(i)[0]):s?o+a(i)[1]:o+(r(e)?a(i)[1]:a(i)[2])}e.defineLocale("lt",{months:{format:"sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),standalone:"sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),isFormat:/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/},monthsShort:"sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),weekdays:{format:"sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),standalone:"sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),isFormat:/dddd HH:mm/},weekdaysShort:"Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),weekdaysMin:"S_P_A_T_K_Pn_Š".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY [m.] MMMM D [d.]",LLL:"YYYY [m.] MMMM D [d.], HH:mm [val.]",LLLL:"YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",l:"YYYY-MM-DD",ll:"YYYY [m.] MMMM D [d.]",lll:"YYYY [m.] MMMM D [d.], HH:mm [val.]",llll:"YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"},calendar:{sameDay:"[Šiandien] LT",nextDay:"[Rytoj] LT",nextWeek:"dddd LT",lastDay:"[Vakar] LT",lastWeek:"[Praėjusį] dddd LT",sameElse:"L"},relativeTime:{future:"po %s",past:"prieš %s",s:function(e,t,n,r){return t?"kelios sekundės":r?"kelių sekundžių":"kelias sekundes"},ss:i,m:n,mm:i,h:n,hh:i,d:n,dd:i,M:n,MM:i,y:n,yy:i},dayOfMonthOrdinalParse:/\d{1,2}-oji/,ordinal:function(e){return e+"-oji"},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={ss:"sekundes_sekundēm_sekunde_sekundes".split("_"),m:"minūtes_minūtēm_minūte_minūtes".split("_"),mm:"minūtes_minūtēm_minūte_minūtes".split("_"),h:"stundas_stundām_stunda_stundas".split("_"),hh:"stundas_stundām_stunda_stundas".split("_"),d:"dienas_dienām_diena_dienas".split("_"),dd:"dienas_dienām_diena_dienas".split("_"),M:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),MM:"mēneša_mēnešiem_mēnesis_mēneši".split("_"),y:"gada_gadiem_gads_gadi".split("_"),yy:"gada_gadiem_gads_gadi".split("_")};function n(e,t,n){return n?t%10==1&&t%100!=11?e[2]:e[3]:t%10==1&&t%100!=11?e[0]:e[1]}function r(e,r,a){return e+" "+n(t[a],e,r)}function a(e,r,a){return n(t[a],e,r)}e.defineLocale("lv",{months:"janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),monthsShort:"jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),weekdays:"svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),weekdaysShort:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysMin:"Sv_P_O_T_C_Pk_S".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY.",LL:"YYYY. [gada] D. MMMM",LLL:"YYYY. [gada] D. MMMM, HH:mm",LLLL:"YYYY. [gada] D. MMMM, dddd, HH:mm"},calendar:{sameDay:"[Šodien pulksten] LT",nextDay:"[Rīt pulksten] LT",nextWeek:"dddd [pulksten] LT",lastDay:"[Vakar pulksten] LT",lastWeek:"[Pagājušā] dddd [pulksten] LT",sameElse:"L"},relativeTime:{future:"pēc %s",past:"pirms %s",s:function(e,t){return t?"dažas sekundes":"dažām sekundēm"},ss:r,m:a,mm:r,h:a,hh:r,d:a,dd:r,M:a,MM:r,y:a,yy:r},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={words:{ss:["sekund","sekunda","sekundi"],m:["jedan minut","jednog minuta"],mm:["minut","minuta","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mjesec","mjeseca","mjeseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,r){var a=t.words[r];return 1===r.length?n?a[0]:a[1]:e+" "+t.correctGrammaticalCase(e,a)}};e.defineLocale("me",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sjutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedjelju] [u] LT";case 3:return"[u] [srijedu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){return["[prošle] [nedjelje] [u] LT","[prošlog] [ponedjeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srijede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"prije %s",s:"nekoliko sekundi",ss:t.translate,m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"dan",dd:t.translate,M:"mjesec",MM:t.translate,y:"godinu",yy:t.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("mi",{months:"Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),monthsShort:"Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),monthsRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,monthsShortStrictRegex:/(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,weekdays:"Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),weekdaysShort:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),weekdaysMin:"Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [i] HH:mm",LLLL:"dddd, D MMMM YYYY [i] HH:mm"},calendar:{sameDay:"[i teie mahana, i] LT",nextDay:"[apopo i] LT",nextWeek:"dddd [i] LT",lastDay:"[inanahi i] LT",lastWeek:"dddd [whakamutunga i] LT",sameElse:"L"},relativeTime:{future:"i roto i %s",past:"%s i mua",s:"te hēkona ruarua",ss:"%d hēkona",m:"he meneti",mm:"%d meneti",h:"te haora",hh:"%d haora",d:"he ra",dd:"%d ra",M:"he marama",MM:"%d marama",y:"he tau",yy:"%d tau"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("mk",{months:"јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),monthsShort:"јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),weekdays:"недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),weekdaysShort:"нед_пон_вто_сре_чет_пет_саб".split("_"),weekdaysMin:"нe_пo_вт_ср_че_пе_сa".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"D.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[Денес во] LT",nextDay:"[Утре во] LT",nextWeek:"[Во] dddd [во] LT",lastDay:"[Вчера во] LT",lastWeek:function(){switch(this.day()){case 0:case 3:case 6:return"[Изминатата] dddd [во] LT";case 1:case 2:case 4:case 5:return"[Изминатиот] dddd [во] LT"}},sameElse:"L"},relativeTime:{future:"после %s",past:"пред %s",s:"неколку секунди",ss:"%d секунди",m:"минута",mm:"%d минути",h:"час",hh:"%d часа",d:"ден",dd:"%d дена",M:"месец",MM:"%d месеци",y:"година",yy:"%d години"},dayOfMonthOrdinalParse:/\d{1,2}-(ев|ен|ти|ви|ри|ми)/,ordinal:function(e){var t=e%10,n=e%100;return 0===e?e+"-ев":0===n?e+"-ен":n>10&&n<20?e+"-ти":1===t?e+"-ви":2===t?e+"-ри":7===t||8===t?e+"-ми":e+"-ти"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("ml",{months:"ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),monthsShort:"ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),monthsParseExact:!0,weekdays:"ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),weekdaysShort:"ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),weekdaysMin:"ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),longDateFormat:{LT:"A h:mm -നു",LTS:"A h:mm:ss -നു",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm -നു",LLLL:"dddd, D MMMM YYYY, A h:mm -നു"},calendar:{sameDay:"[ഇന്ന്] LT",nextDay:"[നാളെ] LT",nextWeek:"dddd, LT",lastDay:"[ഇന്നലെ] LT",lastWeek:"[കഴിഞ്ഞ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s കഴിഞ്ഞ്",past:"%s മുൻപ്",s:"അൽപ നിമിഷങ്ങൾ",ss:"%d സെക്കൻഡ്",m:"ഒരു മിനിറ്റ്",mm:"%d മിനിറ്റ്",h:"ഒരു മണിക്കൂർ",hh:"%d മണിക്കൂർ",d:"ഒരു ദിവസം",dd:"%d ദിവസം",M:"ഒരു മാസം",MM:"%d മാസം",y:"ഒരു വർഷം",yy:"%d വർഷം"},meridiemParse:/രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,meridiemHour:function(e,t){return 12===e&&(e=0),"രാത്രി"===t&&e>=4||"ഉച്ച കഴിഞ്ഞ്"===t||"വൈകുന്നേരം"===t?e+12:e},meridiem:function(e,t,n){return e<4?"രാത്രി":e<12?"രാവിലെ":e<17?"ഉച്ച കഴിഞ്ഞ്":e<20?"വൈകുന്നേരം":"രാത്രി"}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n,r){switch(n){case"s":return t?"хэдхэн секунд":"хэдхэн секундын";case"ss":return e+(t?" секунд":" секундын");case"m":case"mm":return e+(t?" минут":" минутын");case"h":case"hh":return e+(t?" цаг":" цагийн");case"d":case"dd":return e+(t?" өдөр":" өдрийн");case"M":case"MM":return e+(t?" сар":" сарын");case"y":case"yy":return e+(t?" жил":" жилийн");default:return e}}e.defineLocale("mn",{months:"Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"),monthsShort:"1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"),monthsParseExact:!0,weekdays:"Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),weekdaysShort:"Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),weekdaysMin:"Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY оны MMMMын D",LLL:"YYYY оны MMMMын D HH:mm",LLLL:"dddd, YYYY оны MMMMын D HH:mm"},meridiemParse:/ҮӨ|ҮХ/i,isPM:function(e){return"ҮХ"===e},meridiem:function(e,t,n){return e<12?"ҮӨ":"ҮХ"},calendar:{sameDay:"[Өнөөдөр] LT",nextDay:"[Маргааш] LT",nextWeek:"[Ирэх] dddd LT",lastDay:"[Өчигдөр] LT",lastWeek:"[Өнгөрсөн] dddd LT",sameElse:"L"},relativeTime:{future:"%s дараа",past:"%s өмнө",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2} өдөр/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+" өдөр";default:return e}}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};function r(e,t,n,r){var a="";if(t)switch(n){case"s":a="काही सेकंद";break;case"ss":a="%d सेकंद";break;case"m":a="एक मिनिट";break;case"mm":a="%d मिनिटे";break;case"h":a="एक तास";break;case"hh":a="%d तास";break;case"d":a="एक दिवस";break;case"dd":a="%d दिवस";break;case"M":a="एक महिना";break;case"MM":a="%d महिने";break;case"y":a="एक वर्ष";break;case"yy":a="%d वर्षे"}else switch(n){case"s":a="काही सेकंदां";break;case"ss":a="%d सेकंदां";break;case"m":a="एका मिनिटा";break;case"mm":a="%d मिनिटां";break;case"h":a="एका तासा";break;case"hh":a="%d तासां";break;case"d":a="एका दिवसा";break;case"dd":a="%d दिवसां";break;case"M":a="एका महिन्या";break;case"MM":a="%d महिन्यां";break;case"y":a="एका वर्षा";break;case"yy":a="%d वर्षां"}return a.replace(/%d/i,e)}e.defineLocale("mr",{months:"जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),monthsShort:"जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),monthsParseExact:!0,weekdays:"रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),weekdaysShort:"रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),weekdaysMin:"र_सो_मं_बु_गु_शु_श".split("_"),longDateFormat:{LT:"A h:mm वाजता",LTS:"A h:mm:ss वाजता",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm वाजता",LLLL:"dddd, D MMMM YYYY, A h:mm वाजता"},calendar:{sameDay:"[आज] LT",nextDay:"[उद्या] LT",nextWeek:"dddd, LT",lastDay:"[काल] LT",lastWeek:"[मागील] dddd, LT",sameElse:"L"},relativeTime:{future:"%sमध्ये",past:"%sपूर्वी",s:r,ss:r,m:r,mm:r,h:r,hh:r,d:r,dd:r,M:r,MM:r,y:r,yy:r},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/रात्री|सकाळी|दुपारी|सायंकाळी/,meridiemHour:function(e,t){return 12===e&&(e=0),"रात्री"===t?e<4?e:e+12:"सकाळी"===t?e:"दुपारी"===t?e>=10?e:e+12:"सायंकाळी"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"रात्री":e<10?"सकाळी":e<17?"दुपारी":e<20?"सायंकाळी":"रात्री"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("ms",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("ms-my",{months:"Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),weekdays:"Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),weekdaysShort:"Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),weekdaysMin:"Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [pukul] HH.mm",LLLL:"dddd, D MMMM YYYY [pukul] HH.mm"},meridiemParse:/pagi|tengahari|petang|malam/,meridiemHour:function(e,t){return 12===e&&(e=0),"pagi"===t?e:"tengahari"===t?e>=11?e:e+12:"petang"===t||"malam"===t?e+12:void 0},meridiem:function(e,t,n){return e<11?"pagi":e<15?"tengahari":e<19?"petang":"malam"},calendar:{sameDay:"[Hari ini pukul] LT",nextDay:"[Esok pukul] LT",nextWeek:"dddd [pukul] LT",lastDay:"[Kelmarin pukul] LT",lastWeek:"dddd [lepas pukul] LT",sameElse:"L"},relativeTime:{future:"dalam %s",past:"%s yang lepas",s:"beberapa saat",ss:"%d saat",m:"seminit",mm:"%d minit",h:"sejam",hh:"%d jam",d:"sehari",dd:"%d hari",M:"sebulan",MM:"%d bulan",y:"setahun",yy:"%d tahun"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("mt",{months:"Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"),monthsShort:"Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),weekdays:"Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"),weekdaysShort:"Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),weekdaysMin:"Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Illum fil-]LT",nextDay:"[Għada fil-]LT",nextWeek:"dddd [fil-]LT",lastDay:"[Il-bieraħ fil-]LT",lastWeek:"dddd [li għadda] [fil-]LT",sameElse:"L"},relativeTime:{future:"f’ %s",past:"%s ilu",s:"ftit sekondi",ss:"%d sekondi",m:"minuta",mm:"%d minuti",h:"siegħa",hh:"%d siegħat",d:"ġurnata",dd:"%d ġranet",M:"xahar",MM:"%d xhur",y:"sena",yy:"%d sni"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"၁",2:"၂",3:"၃",4:"၄",5:"၅",6:"၆",7:"၇",8:"၈",9:"၉",0:"၀"},n={"၁":"1","၂":"2","၃":"3","၄":"4","၅":"5","၆":"6","၇":"7","၈":"8","၉":"9","၀":"0"};e.defineLocale("my",{months:"ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),monthsShort:"ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),weekdays:"တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),weekdaysShort:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),weekdaysMin:"နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ယနေ.] LT [မှာ]",nextDay:"[မနက်ဖြန်] LT [မှာ]",nextWeek:"dddd LT [မှာ]",lastDay:"[မနေ.က] LT [မှာ]",lastWeek:"[ပြီးခဲ့သော] dddd LT [မှာ]",sameElse:"L"},relativeTime:{future:"လာမည့် %s မှာ",past:"လွန်ခဲ့သော %s က",s:"စက္ကန်.အနည်းငယ်",ss:"%d စက္ကန့်",m:"တစ်မိနစ်",mm:"%d မိနစ်",h:"တစ်နာရီ",hh:"%d နာရီ",d:"တစ်ရက်",dd:"%d ရက်",M:"တစ်လ",MM:"%d လ",y:"တစ်နှစ်",yy:"%d နှစ်"},preparse:function(e){return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("nb",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),monthsParseExact:!0,weekdays:"søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),weekdaysShort:"sø._ma._ti._on._to._fr._lø.".split("_"),weekdaysMin:"sø_ma_ti_on_to_fr_lø".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] HH:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[i dag kl.] LT",nextDay:"[i morgen kl.] LT",nextWeek:"dddd [kl.] LT",lastDay:"[i går kl.] LT",lastWeek:"[forrige] dddd [kl.] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s siden",s:"noen sekunder",ss:"%d sekunder",m:"ett minutt",mm:"%d minutter",h:"en time",hh:"%d timer",d:"en dag",dd:"%d dager",M:"en måned",MM:"%d måneder",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"१",2:"२",3:"३",4:"४",5:"५",6:"६",7:"७",8:"८",9:"९",0:"०"},n={"१":"1","२":"2","३":"3","४":"4","५":"5","६":"6","७":"7","८":"8","९":"9","०":"0"};e.defineLocale("ne",{months:"जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),monthsShort:"जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),monthsParseExact:!0,weekdays:"आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),weekdaysShort:"आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),weekdaysMin:"आ._सो._मं._बु._बि._शु._श.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"Aको h:mm बजे",LTS:"Aको h:mm:ss बजे",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, Aको h:mm बजे",LLLL:"dddd, D MMMM YYYY, Aको h:mm बजे"},preparse:function(e){return e.replace(/[१२३४५६७८९०]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/राति|बिहान|दिउँसो|साँझ/,meridiemHour:function(e,t){return 12===e&&(e=0),"राति"===t?e<4?e:e+12:"बिहान"===t?e:"दिउँसो"===t?e>=10?e:e+12:"साँझ"===t?e+12:void 0},meridiem:function(e,t,n){return e<3?"राति":e<12?"बिहान":e<16?"दिउँसो":e<20?"साँझ":"राति"},calendar:{sameDay:"[आज] LT",nextDay:"[भोलि] LT",nextWeek:"[आउँदो] dddd[,] LT",lastDay:"[हिजो] LT",lastWeek:"[गएको] dddd[,] LT",sameElse:"L"},relativeTime:{future:"%sमा",past:"%s अगाडि",s:"केही क्षण",ss:"%d सेकेण्ड",m:"एक मिनेट",mm:"%d मिनेट",h:"एक घण्टा",hh:"%d घण्टा",d:"एक दिन",dd:"%d दिन",M:"एक महिना",MM:"%d महिना",y:"एक बर्ष",yy:"%d बर्ष"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";var t="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),r=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],a=/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;e.defineLocale("nl",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:a,monthsShortRegex:a,monthsStrictRegex:/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD-MM-YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t="jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),n="jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),r=[/^jan/i,/^feb/i,/^maart|mrt.?$/i,/^apr/i,/^mei$/i,/^jun[i.]?$/i,/^jul[i.]?$/i,/^aug/i,/^sep/i,/^okt/i,/^nov/i,/^dec/i],a=/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;e.defineLocale("nl-be",{months:"januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),monthsShort:function(e,r){return e?/-MMM-/.test(r)?n[e.month()]:t[e.month()]:t},monthsRegex:a,monthsShortRegex:a,monthsStrictRegex:/^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,monthsShortStrictRegex:/^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,monthsParse:r,longMonthsParse:r,shortMonthsParse:r,weekdays:"zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),weekdaysShort:"zo._ma._di._wo._do._vr._za.".split("_"),weekdaysMin:"zo_ma_di_wo_do_vr_za".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[vandaag om] LT",nextDay:"[morgen om] LT",nextWeek:"dddd [om] LT",lastDay:"[gisteren om] LT",lastWeek:"[afgelopen] dddd [om] LT",sameElse:"L"},relativeTime:{future:"over %s",past:"%s geleden",s:"een paar seconden",ss:"%d seconden",m:"één minuut",mm:"%d minuten",h:"één uur",hh:"%d uur",d:"één dag",dd:"%d dagen",M:"één maand",MM:"%d maanden",y:"één jaar",yy:"%d jaar"},dayOfMonthOrdinalParse:/\d{1,2}(ste|de)/,ordinal:function(e){return e+(1===e||8===e||e>=20?"ste":"de")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("nn",{months:"januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),monthsShort:"jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),weekdays:"sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),weekdaysShort:"sun_mån_tys_ons_tor_fre_lau".split("_"),weekdaysMin:"su_må_ty_on_to_fr_lø".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY [kl.] H:mm",LLLL:"dddd D. MMMM YYYY [kl.] HH:mm"},calendar:{sameDay:"[I dag klokka] LT",nextDay:"[I morgon klokka] LT",nextWeek:"dddd [klokka] LT",lastDay:"[I går klokka] LT",lastWeek:"[Føregåande] dddd [klokka] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"%s sidan",s:"nokre sekund",ss:"%d sekund",m:"eit minutt",mm:"%d minutt",h:"ein time",hh:"%d timar",d:"ein dag",dd:"%d dagar",M:"ein månad",MM:"%d månader",y:"eit år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"੧",2:"੨",3:"੩",4:"੪",5:"੫",6:"੬",7:"੭",8:"੮",9:"੯",0:"੦"},n={"੧":"1","੨":"2","੩":"3","੪":"4","੫":"5","੬":"6","੭":"7","੮":"8","੯":"9","੦":"0"};e.defineLocale("pa-in",{months:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),monthsShort:"ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),weekdays:"ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),weekdaysShort:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),weekdaysMin:"ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),longDateFormat:{LT:"A h:mm ਵਜੇ",LTS:"A h:mm:ss ਵਜੇ",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm ਵਜੇ",LLLL:"dddd, D MMMM YYYY, A h:mm ਵਜੇ"},calendar:{sameDay:"[ਅਜ] LT",nextDay:"[ਕਲ] LT",nextWeek:"[ਅਗਲਾ] dddd, LT",lastDay:"[ਕਲ] LT",lastWeek:"[ਪਿਛਲੇ] dddd, LT",sameElse:"L"},relativeTime:{future:"%s ਵਿੱਚ",past:"%s ਪਿਛਲੇ",s:"ਕੁਝ ਸਕਿੰਟ",ss:"%d ਸਕਿੰਟ",m:"ਇਕ ਮਿੰਟ",mm:"%d ਮਿੰਟ",h:"ਇੱਕ ਘੰਟਾ",hh:"%d ਘੰਟੇ",d:"ਇੱਕ ਦਿਨ",dd:"%d ਦਿਨ",M:"ਇੱਕ ਮਹੀਨਾ",MM:"%d ਮਹੀਨੇ",y:"ਇੱਕ ਸਾਲ",yy:"%d ਸਾਲ"},preparse:function(e){return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,meridiemHour:function(e,t){return 12===e&&(e=0),"ਰਾਤ"===t?e<4?e:e+12:"ਸਵੇਰ"===t?e:"ਦੁਪਹਿਰ"===t?e>=10?e:e+12:"ਸ਼ਾਮ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"ਰਾਤ":e<10?"ਸਵੇਰ":e<17?"ਦੁਪਹਿਰ":e<20?"ਸ਼ਾਮ":"ਰਾਤ"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";var t="styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),n="stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");function r(e){return e%10<5&&e%10>1&&~~(e/10)%10!=1}function a(e,t,n){var a=e+" ";switch(n){case"ss":return a+(r(e)?"sekundy":"sekund");case"m":return t?"minuta":"minutę";case"mm":return a+(r(e)?"minuty":"minut");case"h":return t?"godzina":"godzinę";case"hh":return a+(r(e)?"godziny":"godzin");case"MM":return a+(r(e)?"miesiące":"miesięcy");case"yy":return a+(r(e)?"lata":"lat")}}e.defineLocale("pl",{months:function(e,r){return e?""===r?"("+n[e.month()]+"|"+t[e.month()]+")":/D MMMM/.test(r)?n[e.month()]:t[e.month()]:t},monthsShort:"sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),weekdays:"niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),weekdaysShort:"ndz_pon_wt_śr_czw_pt_sob".split("_"),weekdaysMin:"Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Dziś o] LT",nextDay:"[Jutro o] LT",nextWeek:function(){switch(this.day()){case 0:return"[W niedzielę o] LT";case 2:return"[We wtorek o] LT";case 3:return"[W środę o] LT";case 6:return"[W sobotę o] LT";default:return"[W] dddd [o] LT"}},lastDay:"[Wczoraj o] LT",lastWeek:function(){switch(this.day()){case 0:return"[W zeszłą niedzielę o] LT";case 3:return"[W zeszłą środę o] LT";case 6:return"[W zeszłą sobotę o] LT";default:return"[W zeszły] dddd [o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"%s temu",s:"kilka sekund",ss:a,m:a,mm:a,h:a,hh:a,d:"1 dzień",dd:"%d dni",M:"miesiąc",MM:a,y:"rok",yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("pt",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("pt-br",{months:"janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),monthsShort:"jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),weekdays:"Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),weekdaysShort:"Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),weekdaysMin:"Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D [de] MMMM [de] YYYY",LLL:"D [de] MMMM [de] YYYY [às] HH:mm",LLLL:"dddd, D [de] MMMM [de] YYYY [às] HH:mm"},calendar:{sameDay:"[Hoje às] LT",nextDay:"[Amanhã às] LT",nextWeek:"dddd [às] LT",lastDay:"[Ontem às] LT",lastWeek:function(){return 0===this.day()||6===this.day()?"[Último] dddd [às] LT":"[Última] dddd [às] LT"},sameElse:"L"},relativeTime:{future:"em %s",past:"há %s",s:"poucos segundos",ss:"%d segundos",m:"um minuto",mm:"%d minutos",h:"uma hora",hh:"%d horas",d:"um dia",dd:"%d dias",M:"um mês",MM:"%d meses",y:"um ano",yy:"%d anos"},dayOfMonthOrdinalParse:/\d{1,2}º/,ordinal:"%dº"})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n){var r=" ";return(e%100>=20||e>=100&&e%100==0)&&(r=" de "),e+r+{ss:"secunde",mm:"minute",hh:"ore",dd:"zile",MM:"luni",yy:"ani"}[n]}e.defineLocale("ro",{months:"ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),monthsShort:"ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),weekdaysShort:"Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),weekdaysMin:"Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY H:mm",LLLL:"dddd, D MMMM YYYY H:mm"},calendar:{sameDay:"[azi la] LT",nextDay:"[mâine la] LT",nextWeek:"dddd [la] LT",lastDay:"[ieri la] LT",lastWeek:"[fosta] dddd [la] LT",sameElse:"L"},relativeTime:{future:"peste %s",past:"%s în urmă",s:"câteva secunde",ss:t,m:"un minut",mm:t,h:"o oră",hh:t,d:"o zi",dd:t,M:"o lună",MM:t,y:"un an",yy:t},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n){var r,a,i={ss:t?"секунда_секунды_секунд":"секунду_секунды_секунд",mm:t?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};return"m"===n?t?"минута":"минуту":e+" "+(r=+e,a=i[n].split("_"),r%10==1&&r%100!=11?a[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?a[1]:a[2])}var n=[/^янв/i,/^фев/i,/^мар/i,/^апр/i,/^ма[йя]/i,/^июн/i,/^июл/i,/^авг/i,/^сен/i,/^окт/i,/^ноя/i,/^дек/i];e.defineLocale("ru",{months:{format:"января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),standalone:"январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")},monthsShort:{format:"янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),standalone:"янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")},weekdays:{standalone:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),format:"воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),isFormat:/\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/},weekdaysShort:"вс_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),monthsParse:n,longMonthsParse:n,shortMonthsParse:n,monthsRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsShortRegex:/^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,monthsStrictRegex:/^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,monthsShortStrictRegex:/^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},calendar:{sameDay:"[Сегодня, в] LT",nextDay:"[Завтра, в] LT",lastDay:"[Вчера, в] LT",nextWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В следующее] dddd, [в] LT";case 1:case 2:case 4:return"[В следующий] dddd, [в] LT";case 3:case 5:case 6:return"[В следующую] dddd, [в] LT"}},lastWeek:function(e){if(e.week()===this.week())return 2===this.day()?"[Во] dddd, [в] LT":"[В] dddd, [в] LT";switch(this.day()){case 0:return"[В прошлое] dddd, [в] LT";case 1:case 2:case 4:return"[В прошлый] dddd, [в] LT";case 3:case 5:case 6:return"[В прошлую] dddd, [в] LT"}},sameElse:"L"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",ss:t,m:t,mm:t,h:"час",hh:t,d:"день",dd:t,M:"месяц",MM:t,y:"год",yy:t},meridiemParse:/ночи|утра|дня|вечера/i,isPM:function(e){return/^(дня|вечера)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночи":e<12?"утра":e<17?"дня":"вечера"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го|я)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":return e+"-й";case"D":return e+"-го";case"w":case"W":return e+"-я";default:return e}},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t=["جنوري","فيبروري","مارچ","اپريل","مئي","جون","جولاءِ","آگسٽ","سيپٽمبر","آڪٽوبر","نومبر","ڊسمبر"],n=["آچر","سومر","اڱارو","اربع","خميس","جمع","ڇنڇر"];e.defineLocale("sd",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:n,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},meridiemParse:/صبح|شام/,isPM:function(e){return"شام"===e},meridiem:function(e,t,n){return e<12?"صبح":"شام"},calendar:{sameDay:"[اڄ] LT",nextDay:"[سڀاڻي] LT",nextWeek:"dddd [اڳين هفتي تي] LT",lastDay:"[ڪالهه] LT",lastWeek:"[گزريل هفتي] dddd [تي] LT",sameElse:"L"},relativeTime:{future:"%s پوء",past:"%s اڳ",s:"چند سيڪنڊ",ss:"%d سيڪنڊ",m:"هڪ منٽ",mm:"%d منٽ",h:"هڪ ڪلاڪ",hh:"%d ڪلاڪ",d:"هڪ ڏينهن",dd:"%d ڏينهن",M:"هڪ مهينو",MM:"%d مهينا",y:"هڪ سال",yy:"%d سال"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("se",{months:"ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),monthsShort:"ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),weekdays:"sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),weekdaysShort:"sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),weekdaysMin:"s_v_m_g_d_b_L".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"MMMM D. [b.] YYYY",LLL:"MMMM D. [b.] YYYY [ti.] HH:mm",LLLL:"dddd, MMMM D. [b.] YYYY [ti.] HH:mm"},calendar:{sameDay:"[otne ti] LT",nextDay:"[ihttin ti] LT",nextWeek:"dddd [ti] LT",lastDay:"[ikte ti] LT",lastWeek:"[ovddit] dddd [ti] LT",sameElse:"L"},relativeTime:{future:"%s geažes",past:"maŋit %s",s:"moadde sekunddat",ss:"%d sekunddat",m:"okta minuhta",mm:"%d minuhtat",h:"okta diimmu",hh:"%d diimmut",d:"okta beaivi",dd:"%d beaivvit",M:"okta mánnu",MM:"%d mánut",y:"okta jahki",yy:"%d jagit"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("si",{months:"ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),monthsShort:"ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),weekdays:"ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),weekdaysShort:"ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),weekdaysMin:"ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"a h:mm",LTS:"a h:mm:ss",L:"YYYY/MM/DD",LL:"YYYY MMMM D",LLL:"YYYY MMMM D, a h:mm",LLLL:"YYYY MMMM D [වැනි] dddd, a h:mm:ss"},calendar:{sameDay:"[අද] LT[ට]",nextDay:"[හෙට] LT[ට]",nextWeek:"dddd LT[ට]",lastDay:"[ඊයේ] LT[ට]",lastWeek:"[පසුගිය] dddd LT[ට]",sameElse:"L"},relativeTime:{future:"%sකින්",past:"%sකට පෙර",s:"තත්පර කිහිපය",ss:"තත්පර %d",m:"මිනිත්තුව",mm:"මිනිත්තු %d",h:"පැය",hh:"පැය %d",d:"දිනය",dd:"දින %d",M:"මාසය",MM:"මාස %d",y:"වසර",yy:"වසර %d"},dayOfMonthOrdinalParse:/\d{1,2} වැනි/,ordinal:function(e){return e+" වැනි"},meridiemParse:/පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,isPM:function(e){return"ප.ව."===e||"පස් වරු"===e},meridiem:function(e,t,n){return e>11?n?"ප.ව.":"පස් වරු":n?"පෙ.ව.":"පෙර වරු"}})}(n(0))},function(e,t,n){!function(e){"use strict";var t="január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),n="jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");function r(e){return e>1&&e<5}function a(e,t,n,a){var i=e+" ";switch(n){case"s":return t||a?"pár sekúnd":"pár sekundami";case"ss":return t||a?i+(r(e)?"sekundy":"sekúnd"):i+"sekundami";case"m":return t?"minúta":a?"minútu":"minútou";case"mm":return t||a?i+(r(e)?"minúty":"minút"):i+"minútami";case"h":return t?"hodina":a?"hodinu":"hodinou";case"hh":return t||a?i+(r(e)?"hodiny":"hodín"):i+"hodinami";case"d":return t||a?"deň":"dňom";case"dd":return t||a?i+(r(e)?"dni":"dní"):i+"dňami";case"M":return t||a?"mesiac":"mesiacom";case"MM":return t||a?i+(r(e)?"mesiace":"mesiacov"):i+"mesiacmi";case"y":return t||a?"rok":"rokom";case"yy":return t||a?i+(r(e)?"roky":"rokov"):i+"rokmi"}}e.defineLocale("sk",{months:t,monthsShort:n,weekdays:"nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),weekdaysShort:"ne_po_ut_st_št_pi_so".split("_"),weekdaysMin:"ne_po_ut_st_št_pi_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm"},calendar:{sameDay:"[dnes o] LT",nextDay:"[zajtra o] LT",nextWeek:function(){switch(this.day()){case 0:return"[v nedeľu o] LT";case 1:case 2:return"[v] dddd [o] LT";case 3:return"[v stredu o] LT";case 4:return"[vo štvrtok o] LT";case 5:return"[v piatok o] LT";case 6:return"[v sobotu o] LT"}},lastDay:"[včera o] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulú nedeľu o] LT";case 1:case 2:return"[minulý] dddd [o] LT";case 3:return"[minulú stredu o] LT";case 4:case 5:return"[minulý] dddd [o] LT";case 6:return"[minulú sobotu o] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"pred %s",s:a,ss:a,m:a,mm:a,h:a,hh:a,d:a,dd:a,M:a,MM:a,y:a,yy:a},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n,r){var a=e+" ";switch(n){case"s":return t||r?"nekaj sekund":"nekaj sekundami";case"ss":return a+=1===e?t?"sekundo":"sekundi":2===e?t||r?"sekundi":"sekundah":e<5?t||r?"sekunde":"sekundah":"sekund";case"m":return t?"ena minuta":"eno minuto";case"mm":return a+=1===e?t?"minuta":"minuto":2===e?t||r?"minuti":"minutama":e<5?t||r?"minute":"minutami":t||r?"minut":"minutami";case"h":return t?"ena ura":"eno uro";case"hh":return a+=1===e?t?"ura":"uro":2===e?t||r?"uri":"urama":e<5?t||r?"ure":"urami":t||r?"ur":"urami";case"d":return t||r?"en dan":"enim dnem";case"dd":return a+=1===e?t||r?"dan":"dnem":2===e?t||r?"dni":"dnevoma":t||r?"dni":"dnevi";case"M":return t||r?"en mesec":"enim mesecem";case"MM":return a+=1===e?t||r?"mesec":"mesecem":2===e?t||r?"meseca":"mesecema":e<5?t||r?"mesece":"meseci":t||r?"mesecev":"meseci";case"y":return t||r?"eno leto":"enim letom";case"yy":return a+=1===e?t||r?"leto":"letom":2===e?t||r?"leti":"letoma":e<5?t||r?"leta":"leti":t||r?"let":"leti"}}e.defineLocale("sl",{months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danes ob] LT",nextDay:"[jutri ob] LT",nextWeek:function(){switch(this.day()){case 0:return"[v] [nedeljo] [ob] LT";case 3:return"[v] [sredo] [ob] LT";case 6:return"[v] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[v] dddd [ob] LT"}},lastDay:"[včeraj ob] LT",lastWeek:function(){switch(this.day()){case 0:return"[prejšnjo] [nedeljo] [ob] LT";case 3:return"[prejšnjo] [sredo] [ob] LT";case 6:return"[prejšnjo] [soboto] [ob] LT";case 1:case 2:case 4:case 5:return"[prejšnji] dddd [ob] LT"}},sameElse:"L"},relativeTime:{future:"čez %s",past:"pred %s",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("sq",{months:"Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),monthsShort:"Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),weekdays:"E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),weekdaysShort:"Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),weekdaysMin:"D_H_Ma_Më_E_P_Sh".split("_"),weekdaysParseExact:!0,meridiemParse:/PD|MD/,isPM:function(e){return"M"===e.charAt(0)},meridiem:function(e,t,n){return e<12?"PD":"MD"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Sot në] LT",nextDay:"[Nesër në] LT",nextWeek:"dddd [në] LT",lastDay:"[Dje në] LT",lastWeek:"dddd [e kaluar në] LT",sameElse:"L"},relativeTime:{future:"në %s",past:"%s më parë",s:"disa sekonda",ss:"%d sekonda",m:"një minutë",mm:"%d minuta",h:"një orë",hh:"%d orë",d:"një ditë",dd:"%d ditë",M:"një muaj",MM:"%d muaj",y:"një vit",yy:"%d vite"},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={words:{ss:["sekunda","sekunde","sekundi"],m:["jedan minut","jedne minute"],mm:["minut","minute","minuta"],h:["jedan sat","jednog sata"],hh:["sat","sata","sati"],dd:["dan","dana","dana"],MM:["mesec","meseca","meseci"],yy:["godina","godine","godina"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,r){var a=t.words[r];return 1===r.length?n?a[0]:a[1]:e+" "+t.correctGrammaticalCase(e,a)}};e.defineLocale("sr",{months:"januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),monthsShort:"jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),monthsParseExact:!0,weekdays:"nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sre._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[danas u] LT",nextDay:"[sutra u] LT",nextWeek:function(){switch(this.day()){case 0:return"[u] [nedelju] [u] LT";case 3:return"[u] [sredu] [u] LT";case 6:return"[u] [subotu] [u] LT";case 1:case 2:case 4:case 5:return"[u] dddd [u] LT"}},lastDay:"[juče u] LT",lastWeek:function(){return["[prošle] [nedelje] [u] LT","[prošlog] [ponedeljka] [u] LT","[prošlog] [utorka] [u] LT","[prošle] [srede] [u] LT","[prošlog] [četvrtka] [u] LT","[prošlog] [petka] [u] LT","[prošle] [subote] [u] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",ss:t.translate,m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"dan",dd:t.translate,M:"mesec",MM:t.translate,y:"godinu",yy:t.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={words:{ss:["секунда","секунде","секунди"],m:["један минут","једне минуте"],mm:["минут","минуте","минута"],h:["један сат","једног сата"],hh:["сат","сата","сати"],dd:["дан","дана","дана"],MM:["месец","месеца","месеци"],yy:["година","године","година"]},correctGrammaticalCase:function(e,t){return 1===e?t[0]:e>=2&&e<=4?t[1]:t[2]},translate:function(e,n,r){var a=t.words[r];return 1===r.length?n?a[0]:a[1]:e+" "+t.correctGrammaticalCase(e,a)}};e.defineLocale("sr-cyrl",{months:"јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),monthsShort:"јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),monthsParseExact:!0,weekdays:"недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),weekdaysShort:"нед._пон._уто._сре._чет._пет._суб.".split("_"),weekdaysMin:"не_по_ут_ср_че_пе_су".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},calendar:{sameDay:"[данас у] LT",nextDay:"[сутра у] LT",nextWeek:function(){switch(this.day()){case 0:return"[у] [недељу] [у] LT";case 3:return"[у] [среду] [у] LT";case 6:return"[у] [суботу] [у] LT";case 1:case 2:case 4:case 5:return"[у] dddd [у] LT"}},lastDay:"[јуче у] LT",lastWeek:function(){return["[прошле] [недеље] [у] LT","[прошлог] [понедељка] [у] LT","[прошлог] [уторка] [у] LT","[прошле] [среде] [у] LT","[прошлог] [четвртка] [у] LT","[прошлог] [петка] [у] LT","[прошле] [суботе] [у] LT"][this.day()]},sameElse:"L"},relativeTime:{future:"за %s",past:"пре %s",s:"неколико секунди",ss:t.translate,m:t.translate,mm:t.translate,h:t.translate,hh:t.translate,d:"дан",dd:t.translate,M:"месец",MM:t.translate,y:"годину",yy:t.translate},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("ss",{months:"Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),monthsShort:"Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),weekdays:"Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),weekdaysShort:"Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),weekdaysMin:"Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Namuhla nga] LT",nextDay:"[Kusasa nga] LT",nextWeek:"dddd [nga] LT",lastDay:"[Itolo nga] LT",lastWeek:"dddd [leliphelile] [nga] LT",sameElse:"L"},relativeTime:{future:"nga %s",past:"wenteka nga %s",s:"emizuzwana lomcane",ss:"%d mzuzwana",m:"umzuzu",mm:"%d emizuzu",h:"lihora",hh:"%d emahora",d:"lilanga",dd:"%d emalanga",M:"inyanga",MM:"%d tinyanga",y:"umnyaka",yy:"%d iminyaka"},meridiemParse:/ekuseni|emini|entsambama|ebusuku/,meridiem:function(e,t,n){return e<11?"ekuseni":e<15?"emini":e<19?"entsambama":"ebusuku"},meridiemHour:function(e,t){return 12===e&&(e=0),"ekuseni"===t?e:"emini"===t?e>=11?e:e+12:"entsambama"===t||"ebusuku"===t?0===e?0:e+12:void 0},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:"%d",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("sv",{months:"januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),monthsShort:"jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),weekdays:"söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),weekdaysShort:"sön_mån_tis_ons_tor_fre_lör".split("_"),weekdaysMin:"sö_må_ti_on_to_fr_lö".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"D MMMM YYYY",LLL:"D MMMM YYYY [kl.] HH:mm",LLLL:"dddd D MMMM YYYY [kl.] HH:mm",lll:"D MMM YYYY HH:mm",llll:"ddd D MMM YYYY HH:mm"},calendar:{sameDay:"[Idag] LT",nextDay:"[Imorgon] LT",lastDay:"[Igår] LT",nextWeek:"[På] dddd LT",lastWeek:"[I] dddd[s] LT",sameElse:"L"},relativeTime:{future:"om %s",past:"för %s sedan",s:"några sekunder",ss:"%d sekunder",m:"en minut",mm:"%d minuter",h:"en timme",hh:"%d timmar",d:"en dag",dd:"%d dagar",M:"en månad",MM:"%d månader",y:"ett år",yy:"%d år"},dayOfMonthOrdinalParse:/\d{1,2}(e|a)/,ordinal:function(e){var t=e%10,n=1==~~(e%100/10)?"e":1===t?"a":2===t?"a":"e";return e+n},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("sw",{months:"Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),monthsShort:"Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),weekdays:"Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),weekdaysShort:"Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),weekdaysMin:"J2_J3_J4_J5_Al_Ij_J1".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[leo saa] LT",nextDay:"[kesho saa] LT",nextWeek:"[wiki ijayo] dddd [saat] LT",lastDay:"[jana] LT",lastWeek:"[wiki iliyopita] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s baadaye",past:"tokea %s",s:"hivi punde",ss:"sekunde %d",m:"dakika moja",mm:"dakika %d",h:"saa limoja",hh:"masaa %d",d:"siku moja",dd:"masiku %d",M:"mwezi mmoja",MM:"miezi %d",y:"mwaka mmoja",yy:"miaka %d"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"௧",2:"௨",3:"௩",4:"௪",5:"௫",6:"௬",7:"௭",8:"௮",9:"௯",0:"௦"},n={"௧":"1","௨":"2","௩":"3","௪":"4","௫":"5","௬":"6","௭":"7","௮":"8","௯":"9","௦":"0"};e.defineLocale("ta",{months:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),monthsShort:"ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),weekdays:"ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),weekdaysShort:"ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),weekdaysMin:"ஞா_தி_செ_பு_வி_வெ_ச".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, HH:mm",LLLL:"dddd, D MMMM YYYY, HH:mm"},calendar:{sameDay:"[இன்று] LT",nextDay:"[நாளை] LT",nextWeek:"dddd, LT",lastDay:"[நேற்று] LT",lastWeek:"[கடந்த வாரம்] dddd, LT",sameElse:"L"},relativeTime:{future:"%s இல்",past:"%s முன்",s:"ஒரு சில விநாடிகள்",ss:"%d விநாடிகள்",m:"ஒரு நிமிடம்",mm:"%d நிமிடங்கள்",h:"ஒரு மணி நேரம்",hh:"%d மணி நேரம்",d:"ஒரு நாள்",dd:"%d நாட்கள்",M:"ஒரு மாதம்",MM:"%d மாதங்கள்",y:"ஒரு வருடம்",yy:"%d ஆண்டுகள்"},dayOfMonthOrdinalParse:/\d{1,2}வது/,ordinal:function(e){return e+"வது"},preparse:function(e){return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g,function(e){return n[e]})},postformat:function(e){return e.replace(/\d/g,function(e){return t[e]})},meridiemParse:/யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,meridiem:function(e,t,n){return e<2?" யாமம்":e<6?" வைகறை":e<10?" காலை":e<14?" நண்பகல்":e<18?" எற்பாடு":e<22?" மாலை":" யாமம்"},meridiemHour:function(e,t){return 12===e&&(e=0),"யாமம்"===t?e<2?e:e+12:"வைகறை"===t||"காலை"===t?e:"நண்பகல்"===t&&e>=10?e:e+12},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("te",{months:"జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),monthsShort:"జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),monthsParseExact:!0,weekdays:"ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),weekdaysShort:"ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),weekdaysMin:"ఆ_సో_మం_బు_గు_శు_శ".split("_"),longDateFormat:{LT:"A h:mm",LTS:"A h:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY, A h:mm",LLLL:"dddd, D MMMM YYYY, A h:mm"},calendar:{sameDay:"[నేడు] LT",nextDay:"[రేపు] LT",nextWeek:"dddd, LT",lastDay:"[నిన్న] LT",lastWeek:"[గత] dddd, LT",sameElse:"L"},relativeTime:{future:"%s లో",past:"%s క్రితం",s:"కొన్ని క్షణాలు",ss:"%d సెకన్లు",m:"ఒక నిమిషం",mm:"%d నిమిషాలు",h:"ఒక గంట",hh:"%d గంటలు",d:"ఒక రోజు",dd:"%d రోజులు",M:"ఒక నెల",MM:"%d నెలలు",y:"ఒక సంవత్సరం",yy:"%d సంవత్సరాలు"},dayOfMonthOrdinalParse:/\d{1,2}వ/,ordinal:"%dవ",meridiemParse:/రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,meridiemHour:function(e,t){return 12===e&&(e=0),"రాత్రి"===t?e<4?e:e+12:"ఉదయం"===t?e:"మధ్యాహ్నం"===t?e>=10?e:e+12:"సాయంత్రం"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"రాత్రి":e<10?"ఉదయం":e<17?"మధ్యాహ్నం":e<20?"సాయంత్రం":"రాత్రి"},week:{dow:0,doy:6}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("tet",{months:"Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"),monthsShort:"Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),weekdays:"Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"),weekdaysShort:"Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),weekdaysMin:"Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Ohin iha] LT",nextDay:"[Aban iha] LT",nextWeek:"dddd [iha] LT",lastDay:"[Horiseik iha] LT",lastWeek:"dddd [semana kotuk] [iha] LT",sameElse:"L"},relativeTime:{future:"iha %s",past:"%s liuba",s:"minutu balun",ss:"minutu %d",m:"minutu ida",mm:"minutu %d",h:"oras ida",hh:"oras %d",d:"loron ida",dd:"loron %d",M:"fulan ida",MM:"fulan %d",y:"tinan ida",yy:"tinan %d"},dayOfMonthOrdinalParse:/\d{1,2}(st|nd|rd|th)/,ordinal:function(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={0:"-ум",1:"-ум",2:"-юм",3:"-юм",4:"-ум",5:"-ум",6:"-ум",7:"-ум",8:"-ум",9:"-ум",10:"-ум",12:"-ум",13:"-ум",20:"-ум",30:"-юм",40:"-ум",50:"-ум",60:"-ум",70:"-ум",80:"-ум",90:"-ум",100:"-ум"};e.defineLocale("tg",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"),weekdaysShort:"яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),weekdaysMin:"яш_дш_сш_чш_пш_ҷм_шб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[Имрӯз соати] LT",nextDay:"[Пагоҳ соати] LT",lastDay:"[Дирӯз соати] LT",nextWeek:"dddd[и] [ҳафтаи оянда соати] LT",lastWeek:"dddd[и] [ҳафтаи гузашта соати] LT",sameElse:"L"},relativeTime:{future:"баъди %s",past:"%s пеш",s:"якчанд сония",m:"як дақиқа",mm:"%d дақиқа",h:"як соат",hh:"%d соат",d:"як рӯз",dd:"%d рӯз",M:"як моҳ",MM:"%d моҳ",y:"як сол",yy:"%d сол"},meridiemParse:/шаб|субҳ|рӯз|бегоҳ/,meridiemHour:function(e,t){return 12===e&&(e=0),"шаб"===t?e<4?e:e+12:"субҳ"===t?e:"рӯз"===t?e>=11?e:e+12:"бегоҳ"===t?e+12:void 0},meridiem:function(e,t,n){return e<4?"шаб":e<11?"субҳ":e<16?"рӯз":e<19?"бегоҳ":"шаб"},dayOfMonthOrdinalParse:/\d{1,2}-(ум|юм)/,ordinal:function(e){var n=e%10,r=e>=100?100:null;return e+(t[e]||t[n]||t[r])},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("th",{months:"มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),monthsShort:"ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),monthsParseExact:!0,weekdays:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),weekdaysShort:"อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),weekdaysMin:"อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY เวลา H:mm",LLLL:"วันddddที่ D MMMM YYYY เวลา H:mm"},meridiemParse:/ก่อนเที่ยง|หลังเที่ยง/,isPM:function(e){return"หลังเที่ยง"===e},meridiem:function(e,t,n){return e<12?"ก่อนเที่ยง":"หลังเที่ยง"},calendar:{sameDay:"[วันนี้ เวลา] LT",nextDay:"[พรุ่งนี้ เวลา] LT",nextWeek:"dddd[หน้า เวลา] LT",lastDay:"[เมื่อวานนี้ เวลา] LT",lastWeek:"[วัน]dddd[ที่แล้ว เวลา] LT",sameElse:"L"},relativeTime:{future:"อีก %s",past:"%sที่แล้ว",s:"ไม่กี่วินาที",ss:"%d วินาที",m:"1 นาที",mm:"%d นาที",h:"1 ชั่วโมง",hh:"%d ชั่วโมง",d:"1 วัน",dd:"%d วัน",M:"1 เดือน",MM:"%d เดือน",y:"1 ปี",yy:"%d ปี"}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("tl-ph",{months:"Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),monthsShort:"Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),weekdays:"Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),weekdaysShort:"Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),weekdaysMin:"Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"MM/D/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY HH:mm",LLLL:"dddd, MMMM DD, YYYY HH:mm"},calendar:{sameDay:"LT [ngayong araw]",nextDay:"[Bukas ng] LT",nextWeek:"LT [sa susunod na] dddd",lastDay:"LT [kahapon]",lastWeek:"LT [noong nakaraang] dddd",sameElse:"L"},relativeTime:{future:"sa loob ng %s",past:"%s ang nakalipas",s:"ilang segundo",ss:"%d segundo",m:"isang minuto",mm:"%d minuto",h:"isang oras",hh:"%d oras",d:"isang araw",dd:"%d araw",M:"isang buwan",MM:"%d buwan",y:"isang taon",yy:"%d taon"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t="pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");function n(e,n,r,a){var i=function(e){var n=Math.floor(e%1e3/100),r=Math.floor(e%100/10),a=e%10,i="";return n>0&&(i+=t[n]+"vatlh"),r>0&&(i+=(""!==i?" ":"")+t[r]+"maH"),a>0&&(i+=(""!==i?" ":"")+t[a]),""===i?"pagh":i}(e);switch(r){case"ss":return i+" lup";case"mm":return i+" tup";case"hh":return i+" rep";case"dd":return i+" jaj";case"MM":return i+" jar";case"yy":return i+" DIS"}}e.defineLocale("tlh",{months:"tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),monthsShort:"jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),monthsParseExact:!0,weekdays:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysShort:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),weekdaysMin:"lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[DaHjaj] LT",nextDay:"[wa’leS] LT",nextWeek:"LLL",lastDay:"[wa’Hu’] LT",lastWeek:"LLL",sameElse:"L"},relativeTime:{future:function(e){var t=e;return t=-1!==e.indexOf("jaj")?t.slice(0,-3)+"leS":-1!==e.indexOf("jar")?t.slice(0,-3)+"waQ":-1!==e.indexOf("DIS")?t.slice(0,-3)+"nem":t+" pIq"},past:function(e){var t=e;return t=-1!==e.indexOf("jaj")?t.slice(0,-3)+"Hu’":-1!==e.indexOf("jar")?t.slice(0,-3)+"wen":-1!==e.indexOf("DIS")?t.slice(0,-3)+"ben":t+" ret"},s:"puS lup",ss:n,m:"wa’ tup",mm:n,h:"wa’ rep",hh:n,d:"wa’ jaj",dd:n,M:"wa’ jar",MM:n,y:"wa’ DIS",yy:n},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";var t={1:"'inci",5:"'inci",8:"'inci",70:"'inci",80:"'inci",2:"'nci",7:"'nci",20:"'nci",50:"'nci",3:"'üncü",4:"'üncü",100:"'üncü",6:"'ncı",9:"'uncu",10:"'uncu",30:"'uncu",60:"'ıncı",90:"'ıncı"};e.defineLocale("tr",{months:"Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),monthsShort:"Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),weekdays:"Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),weekdaysShort:"Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),weekdaysMin:"Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[bugün saat] LT",nextDay:"[yarın saat] LT",nextWeek:"[gelecek] dddd [saat] LT",lastDay:"[dün] LT",lastWeek:"[geçen] dddd [saat] LT",sameElse:"L"},relativeTime:{future:"%s sonra",past:"%s önce",s:"birkaç saniye",ss:"%d saniye",m:"bir dakika",mm:"%d dakika",h:"bir saat",hh:"%d saat",d:"bir gün",dd:"%d gün",M:"bir ay",MM:"%d ay",y:"bir yıl",yy:"%d yıl"},ordinal:function(e,n){switch(n){case"d":case"D":case"Do":case"DD":return e;default:if(0===e)return e+"'ıncı";var r=e%10,a=e%100-r,i=e>=100?100:null;return e+(t[r]||t[a]||t[i])}},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n,r){var a={s:["viensas secunds","'iensas secunds"],ss:[e+" secunds",e+" secunds"],m:["'n míut","'iens míut"],mm:[e+" míuts",e+" míuts"],h:["'n þora","'iensa þora"],hh:[e+" þoras",e+" þoras"],d:["'n ziua","'iensa ziua"],dd:[e+" ziuas",e+" ziuas"],M:["'n mes","'iens mes"],MM:[e+" mesen",e+" mesen"],y:["'n ar","'iens ar"],yy:[e+" ars",e+" ars"]};return r?a[n][0]:t?a[n][0]:a[n][1]}e.defineLocale("tzl",{months:"Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),monthsShort:"Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),weekdays:"Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),weekdaysShort:"Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),weekdaysMin:"Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),longDateFormat:{LT:"HH.mm",LTS:"HH.mm.ss",L:"DD.MM.YYYY",LL:"D. MMMM [dallas] YYYY",LLL:"D. MMMM [dallas] YYYY HH.mm",LLLL:"dddd, [li] D. MMMM [dallas] YYYY HH.mm"},meridiemParse:/d\'o|d\'a/i,isPM:function(e){return"d'o"===e.toLowerCase()},meridiem:function(e,t,n){return e>11?n?"d'o":"D'O":n?"d'a":"D'A"},calendar:{sameDay:"[oxhi à] LT",nextDay:"[demà à] LT",nextWeek:"dddd [à] LT",lastDay:"[ieiri à] LT",lastWeek:"[sür el] dddd [lasteu à] LT",sameElse:"L"},relativeTime:{future:"osprei %s",past:"ja%s",s:t,ss:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("tzm",{months:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),monthsShort:"ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),weekdays:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysShort:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),weekdaysMin:"ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[ⴰⵙⴷⵅ ⴴ] LT",nextDay:"[ⴰⵙⴽⴰ ⴴ] LT",nextWeek:"dddd [ⴴ] LT",lastDay:"[ⴰⵚⴰⵏⵜ ⴴ] LT",lastWeek:"dddd [ⴴ] LT",sameElse:"L"},relativeTime:{future:"ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",past:"ⵢⴰⵏ %s",s:"ⵉⵎⵉⴽ",ss:"%d ⵉⵎⵉⴽ",m:"ⵎⵉⵏⵓⴺ",mm:"%d ⵎⵉⵏⵓⴺ",h:"ⵙⴰⵄⴰ",hh:"%d ⵜⴰⵙⵙⴰⵄⵉⵏ",d:"ⴰⵙⵙ",dd:"%d oⵙⵙⴰⵏ",M:"ⴰⵢoⵓⵔ",MM:"%d ⵉⵢⵢⵉⵔⵏ",y:"ⴰⵙⴳⴰⵙ",yy:"%d ⵉⵙⴳⴰⵙⵏ"},week:{dow:6,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("tzm-latn",{months:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),monthsShort:"innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),weekdays:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysShort:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),weekdaysMin:"asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd D MMMM YYYY HH:mm"},calendar:{sameDay:"[asdkh g] LT",nextDay:"[aska g] LT",nextWeek:"dddd [g] LT",lastDay:"[assant g] LT",lastWeek:"dddd [g] LT",sameElse:"L"},relativeTime:{future:"dadkh s yan %s",past:"yan %s",s:"imik",ss:"%d imik",m:"minuḍ",mm:"%d minuḍ",h:"saɛa",hh:"%d tassaɛin",d:"ass",dd:"%d ossan",M:"ayowr",MM:"%d iyyirn",y:"asgas",yy:"%d isgasn"},week:{dow:6,doy:12}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("ug-cn",{months:"يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),monthsShort:"يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"),weekdays:"يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"),weekdaysShort:"يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),weekdaysMin:"يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY-MM-DD",LL:"YYYY-يىلىM-ئاينىڭD-كۈنى",LLL:"YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",LLLL:"dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm"},meridiemParse:/يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,meridiemHour:function(e,t){return 12===e&&(e=0),"يېرىم كېچە"===t||"سەھەر"===t||"چۈشتىن بۇرۇن"===t?e:"چۈشتىن كېيىن"===t||"كەچ"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,n){var r=100*e+t;return r<600?"يېرىم كېچە":r<900?"سەھەر":r<1130?"چۈشتىن بۇرۇن":r<1230?"چۈش":r<1800?"چۈشتىن كېيىن":"كەچ"},calendar:{sameDay:"[بۈگۈن سائەت] LT",nextDay:"[ئەتە سائەت] LT",nextWeek:"[كېلەركى] dddd [سائەت] LT",lastDay:"[تۆنۈگۈن] LT",lastWeek:"[ئالدىنقى] dddd [سائەت] LT",sameElse:"L"},relativeTime:{future:"%s كېيىن",past:"%s بۇرۇن",s:"نەچچە سېكونت",ss:"%d سېكونت",m:"بىر مىنۇت",mm:"%d مىنۇت",h:"بىر سائەت",hh:"%d سائەت",d:"بىر كۈن",dd:"%d كۈن",M:"بىر ئاي",MM:"%d ئاي",y:"بىر يىل",yy:"%d يىل"},dayOfMonthOrdinalParse:/\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"-كۈنى";case"w":case"W":return e+"-ھەپتە";default:return e}},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";function t(e,t,n){var r,a,i={ss:t?"секунда_секунди_секунд":"секунду_секунди_секунд",mm:t?"хвилина_хвилини_хвилин":"хвилину_хвилини_хвилин",hh:t?"година_години_годин":"годину_години_годин",dd:"день_дні_днів",MM:"місяць_місяці_місяців",yy:"рік_роки_років"};return"m"===n?t?"хвилина":"хвилину":"h"===n?t?"година":"годину":e+" "+(r=+e,a=i[n].split("_"),r%10==1&&r%100!=11?a[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?a[1]:a[2])}function n(e){return function(){return e+"о"+(11===this.hours()?"б":"")+"] LT"}}e.defineLocale("uk",{months:{format:"січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),standalone:"січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")},monthsShort:"січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),weekdays:function(e,t){var n={nominative:"неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),accusative:"неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),genitive:"неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")};if(!e)return n.nominative;var r=/(\[[ВвУу]\]) ?dddd/.test(t)?"accusative":/\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)?"genitive":"nominative";return n[r][e.day()]},weekdaysShort:"нд_пн_вт_ср_чт_пт_сб".split("_"),weekdaysMin:"нд_пн_вт_ср_чт_пт_сб".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY р.",LLL:"D MMMM YYYY р., HH:mm",LLLL:"dddd, D MMMM YYYY р., HH:mm"},calendar:{sameDay:n("[Сьогодні "),nextDay:n("[Завтра "),lastDay:n("[Вчора "),nextWeek:n("[У] dddd ["),lastWeek:function(){switch(this.day()){case 0:case 3:case 5:case 6:return n("[Минулої] dddd [").call(this);case 1:case 2:case 4:return n("[Минулого] dddd [").call(this)}},sameElse:"L"},relativeTime:{future:"за %s",past:"%s тому",s:"декілька секунд",ss:t,m:t,mm:t,h:"годину",hh:t,d:"день",dd:t,M:"місяць",MM:t,y:"рік",yy:t},meridiemParse:/ночі|ранку|дня|вечора/,isPM:function(e){return/^(дня|вечора)$/.test(e)},meridiem:function(e,t,n){return e<4?"ночі":e<12?"ранку":e<17?"дня":"вечора"},dayOfMonthOrdinalParse:/\d{1,2}-(й|го)/,ordinal:function(e,t){switch(t){case"M":case"d":case"DDD":case"w":case"W":return e+"-й";case"D":return e+"-го";default:return e}},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";var t=["جنوری","فروری","مارچ","اپریل","مئی","جون","جولائی","اگست","ستمبر","اکتوبر","نومبر","دسمبر"],n=["اتوار","پیر","منگل","بدھ","جمعرات","جمعہ","ہفتہ"];e.defineLocale("ur",{months:t,monthsShort:t,weekdays:n,weekdaysShort:n,weekdaysMin:n,longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd، D MMMM YYYY HH:mm"},meridiemParse:/صبح|شام/,isPM:function(e){return"شام"===e},meridiem:function(e,t,n){return e<12?"صبح":"شام"},calendar:{sameDay:"[آج بوقت] LT",nextDay:"[کل بوقت] LT",nextWeek:"dddd [بوقت] LT",lastDay:"[گذشتہ روز بوقت] LT",lastWeek:"[گذشتہ] dddd [بوقت] LT",sameElse:"L"},relativeTime:{future:"%s بعد",past:"%s قبل",s:"چند سیکنڈ",ss:"%d سیکنڈ",m:"ایک منٹ",mm:"%d منٹ",h:"ایک گھنٹہ",hh:"%d گھنٹے",d:"ایک دن",dd:"%d دن",M:"ایک ماہ",MM:"%d ماہ",y:"ایک سال",yy:"%d سال"},preparse:function(e){return e.replace(/،/g,",")},postformat:function(e){return e.replace(/,/g,"،")},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("uz",{months:"январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),monthsShort:"янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),weekdays:"Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),weekdaysShort:"Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),weekdaysMin:"Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Бугун соат] LT [да]",nextDay:"[Эртага] LT [да]",nextWeek:"dddd [куни соат] LT [да]",lastDay:"[Кеча соат] LT [да]",lastWeek:"[Утган] dddd [куни соат] LT [да]",sameElse:"L"},relativeTime:{future:"Якин %s ичида",past:"Бир неча %s олдин",s:"фурсат",ss:"%d фурсат",m:"бир дакика",mm:"%d дакика",h:"бир соат",hh:"%d соат",d:"бир кун",dd:"%d кун",M:"бир ой",MM:"%d ой",y:"бир йил",yy:"%d йил"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("uz-latn",{months:"Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),monthsShort:"Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),weekdays:"Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),weekdaysShort:"Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),weekdaysMin:"Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"D MMMM YYYY, dddd HH:mm"},calendar:{sameDay:"[Bugun soat] LT [da]",nextDay:"[Ertaga] LT [da]",nextWeek:"dddd [kuni soat] LT [da]",lastDay:"[Kecha soat] LT [da]",lastWeek:"[O'tgan] dddd [kuni soat] LT [da]",sameElse:"L"},relativeTime:{future:"Yaqin %s ichida",past:"Bir necha %s oldin",s:"soniya",ss:"%d soniya",m:"bir daqiqa",mm:"%d daqiqa",h:"bir soat",hh:"%d soat",d:"bir kun",dd:"%d kun",M:"bir oy",MM:"%d oy",y:"bir yil",yy:"%d yil"},week:{dow:1,doy:7}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("vi",{months:"tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),monthsShort:"Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),monthsParseExact:!0,weekdays:"chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),weekdaysShort:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysMin:"CN_T2_T3_T4_T5_T6_T7".split("_"),weekdaysParseExact:!0,meridiemParse:/sa|ch/i,isPM:function(e){return/^ch$/i.test(e)},meridiem:function(e,t,n){return e<12?n?"sa":"SA":n?"ch":"CH"},longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"DD/MM/YYYY",LL:"D MMMM [năm] YYYY",LLL:"D MMMM [năm] YYYY HH:mm",LLLL:"dddd, D MMMM [năm] YYYY HH:mm",l:"DD/M/YYYY",ll:"D MMM YYYY",lll:"D MMM YYYY HH:mm",llll:"ddd, D MMM YYYY HH:mm"},calendar:{sameDay:"[Hôm nay lúc] LT",nextDay:"[Ngày mai lúc] LT",nextWeek:"dddd [tuần tới lúc] LT",lastDay:"[Hôm qua lúc] LT",lastWeek:"dddd [tuần rồi lúc] LT",sameElse:"L"},relativeTime:{future:"%s tới",past:"%s trước",s:"vài giây",ss:"%d giây",m:"một phút",mm:"%d phút",h:"một giờ",hh:"%d giờ",d:"một ngày",dd:"%d ngày",M:"một tháng",MM:"%d tháng",y:"một năm",yy:"%d năm"},dayOfMonthOrdinalParse:/\d{1,2}/,ordinal:function(e){return e},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("x-pseudo",{months:"J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),monthsShort:"J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),monthsParseExact:!0,weekdays:"S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),weekdaysShort:"S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),weekdaysMin:"S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),weekdaysParseExact:!0,longDateFormat:{LT:"HH:mm",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY HH:mm",LLLL:"dddd, D MMMM YYYY HH:mm"},calendar:{sameDay:"[T~ódá~ý át] LT",nextDay:"[T~ómó~rró~w át] LT",nextWeek:"dddd [át] LT",lastDay:"[Ý~ést~érdá~ý át] LT",lastWeek:"[L~ást] dddd [át] LT",sameElse:"L"},relativeTime:{future:"í~ñ %s",past:"%s á~gó",s:"á ~féw ~sécó~ñds",ss:"%d s~écóñ~ds",m:"á ~míñ~úté",mm:"%d m~íñú~tés",h:"á~ñ hó~úr",hh:"%d h~óúrs",d:"á ~dáý",dd:"%d d~áýs",M:"á ~móñ~th",MM:"%d m~óñt~hs",y:"á ~ýéár",yy:"%d ý~éárs"},dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=1==~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th";return e+n},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("yo",{months:"Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),monthsShort:"Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),weekdays:"Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),weekdaysShort:"Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),weekdaysMin:"Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),longDateFormat:{LT:"h:mm A",LTS:"h:mm:ss A",L:"DD/MM/YYYY",LL:"D MMMM YYYY",LLL:"D MMMM YYYY h:mm A",LLLL:"dddd, D MMMM YYYY h:mm A"},calendar:{sameDay:"[Ònì ni] LT",nextDay:"[Ọ̀la ni] LT",nextWeek:"dddd [Ọsẹ̀ tón'bọ] [ni] LT",lastDay:"[Àna ni] LT",lastWeek:"dddd [Ọsẹ̀ tólọ́] [ni] LT",sameElse:"L"},relativeTime:{future:"ní %s",past:"%s kọjá",s:"ìsẹjú aayá die",ss:"aayá %d",m:"ìsẹjú kan",mm:"ìsẹjú %d",h:"wákati kan",hh:"wákati %d",d:"ọjọ́ kan",dd:"ọjọ́ %d",M:"osù kan",MM:"osù %d",y:"ọdún kan",yy:"ọdún %d"},dayOfMonthOrdinalParse:/ọjọ́\s\d{1,2}/,ordinal:"ọjọ́ %d",week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("zh-cn",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"下午"===t||"晚上"===t?e+12:e>=11?e:e+12},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|周)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"周";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"几秒",ss:"%d 秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("zh-hk",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天]LT",nextDay:"[明天]LT",nextWeek:"[下]ddddLT",lastDay:"[昨天]LT",lastWeek:"[上]ddddLT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",ss:"%d 秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}})}(n(0))},function(e,t,n){!function(e){"use strict";e.defineLocale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日 HH:mm",LLLL:"YYYY年M月D日dddd HH:mm",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,t){return 12===e&&(e=0),"凌晨"===t||"早上"===t||"上午"===t?e:"中午"===t?e>=11?e:e+12:"下午"===t||"晚上"===t?e+12:void 0},meridiem:function(e,t,n){var r=100*e+t;return r<600?"凌晨":r<900?"早上":r<1130?"上午":r<1230?"中午":r<1800?"下午":"晚上"},calendar:{sameDay:"[今天] LT",nextDay:"[明天] LT",nextWeek:"[下]dddd LT",lastDay:"[昨天] LT",lastWeek:"[上]dddd LT",sameElse:"L"},dayOfMonthOrdinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,t){switch(t){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s內",past:"%s前",s:"幾秒",ss:"%d 秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 個月",y:"1 年",yy:"%d 年"}})}(n(0))},function(e,t,n){"use strict";const r=n(163),a=n(164);function i(e,t){return t.encode?t.strict?r(e):encodeURIComponent(e):e}function s(e,t){return t.decode?a(e):e}function o(e){const t=e.indexOf("?");return-1===t?"":e.slice(t+1)}function u(e,t){const n=function(e){let t;switch(e.arrayFormat){case"index":return(e,n,r)=>{t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===r[e]&&(r[e]={}),r[e][t[1]]=n):r[e]=n};case"bracket":return(e,n,r)=>{t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==r[e]?r[e]=[].concat(r[e],n):r[e]=[n]:r[e]=n};default:return(e,t,n)=>{void 0!==n[e]?n[e]=[].concat(n[e],t):n[e]=t}}}(t=Object.assign({decode:!0,arrayFormat:"none"},t)),r=Object.create(null);if("string"!=typeof e)return r;if(!(e=e.trim().replace(/^[?#&]/,"")))return r;for(const a of e.split("&")){let[e,i]=a.replace(/\+/g," ").split("=");i=void 0===i?null:s(i,t),n(s(e,t),i,r)}return Object.keys(r).sort().reduce((e,t)=>{const n=r[t];return Boolean(n)&&"object"==typeof n&&!Array.isArray(n)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(n):e[t]=n,e},Object.create(null))}t.extract=o,t.parse=u,t.stringify=(e,t)=>{if(!e)return"";const n=function(e){switch(e.arrayFormat){case"index":return(t,n,r)=>null===n?[i(t,e),"[",r,"]"].join(""):[i(t,e),"[",i(r,e),"]=",i(n,e)].join("");case"bracket":return(t,n)=>null===n?[i(t,e),"[]"].join(""):[i(t,e),"[]=",i(n,e)].join("");default:return(t,n)=>null===n?i(t,e):[i(t,e),"=",i(n,e)].join("")}}(t=Object.assign({encode:!0,strict:!0,arrayFormat:"none"},t)),r=Object.keys(e);return!1!==t.sort&&r.sort(t.sort),r.map(r=>{const a=e[r];if(void 0===a)return"";if(null===a)return i(r,t);if(Array.isArray(a)){const e=[];for(const t of a.slice())void 0!==t&&e.push(n(r,t,e.length));return e.join("&")}return i(r,t)+"="+i(a,t)}).filter(e=>e.length>0).join("&")},t.parseUrl=(e,t)=>{const n=e.indexOf("#");return-1!==n&&(e=e.slice(0,n)),{url:e.split("?")[0]||"",query:u(o(e),t)}}},function(e,t,n){var r;window,r=function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=66)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(64),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(60),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(51);Object.defineProperty(t,"closest",{enumerable:!0,get:function(){return i(r).default}});var a=n(49);function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"requestNextAnimationFrame",{enumerable:!0,get:function(){return i(a).default}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(44);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(47),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(14);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var a=n(13);Object.keys(a).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})});var i=n(12);Object.keys(i).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})});var s=n(6);Object.keys(s).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return s[e]}})});var o,u=n(37),l=(o=u)&&o.__esModule?o:{default:o};t.default=l.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4);Object.defineProperty(t,"Sensor",{enumerable:!0,get:function(){return l(r).default}});var a=n(46);Object.defineProperty(t,"MouseSensor",{enumerable:!0,get:function(){return l(a).default}});var i=n(43);Object.defineProperty(t,"TouchSensor",{enumerable:!0,get:function(){return l(i).default}});var s=n(41);Object.defineProperty(t,"DragSensor",{enumerable:!0,get:function(){return l(s).default}});var o=n(39);Object.defineProperty(t,"ForceTouchSensor",{enumerable:!0,get:function(){return l(o).default}});var u=n(3);function l(e){return e&&e.__esModule?e:{default:e}}Object.keys(u).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(18);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(23);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(27);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(30);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(33);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(62);Object.defineProperty(t,"Announcement",{enumerable:!0,get:function(){return o(r).default}}),Object.defineProperty(t,"defaultAnnouncementOptions",{enumerable:!0,get:function(){return r.defaultOptions}});var a=n(59);Object.defineProperty(t,"Focusable",{enumerable:!0,get:function(){return o(a).default}});var i=n(57);Object.defineProperty(t,"Mirror",{enumerable:!0,get:function(){return o(i).default}}),Object.defineProperty(t,"defaultMirrorOptions",{enumerable:!0,get:function(){return i.defaultOptions}});var s=n(53);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"Scrollable",{enumerable:!0,get:function(){return o(s).default}}),Object.defineProperty(t,"defaultScrollableOptions",{enumerable:!0,get:function(){return s.defaultOptions}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(63);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(65);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),s=(r=i)&&r.__esModule?r:{default:r};const o=Symbol("onSortableSorted"),u=t.defaultOptions={duration:150,easingFunction:"ease-in-out",horizontal:!1};function l(e,t,{duration:n,easingFunction:r,horizontal:a}){for(const n of[e,t])n.style.pointerEvents="none";if(a){const n=e.offsetWidth;e.style.transform=`translate3d(${n}px, 0, 0)`,t.style.transform=`translate3d(-${n}px, 0, 0)`}else{const n=e.offsetHeight;e.style.transform=`translate3d(0, ${n}px, 0)`,t.style.transform=`translate3d(0, -${n}px, 0)`}requestAnimationFrame(()=>{for(const a of[e,t])a.addEventListener("transitionend",d),a.style.transition=`transform ${n}ms ${r}`,a.style.transform=""})}function d(e){e.target.style.transition="",e.target.style.pointerEvents="",e.target.removeEventListener("transitionend",d)}t.default=class extends s.default{constructor(e){super(e),this.options=a({},u,this.getOptions()),this.lastAnimationFrame=null,this[o]=this[o].bind(this)}attach(){this.draggable.on("sortable:sorted",this[o])}detach(){this.draggable.off("sortable:sorted",this[o])}getOptions(){return this.draggable.options.swapAnimation||{}}[o]({oldIndex:e,newIndex:t,dragEvent:n}){const{source:r,over:a}=n;cancelAnimationFrame(this.lastAnimationFrame),this.lastAnimationFrame=requestAnimationFrame(()=>{e>=t?l(r,a,this.options):l(a,r,this.options)})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,a=n(15),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default,t.defaultOptions=a.defaultOptions},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(1),i=(r=a)&&r.__esModule?r:{default:r},s=n(7);const o=Symbol("onDragStart"),u=Symbol("onDragStop"),l=Symbol("onDragOver"),d=Symbol("onDragOut"),c=Symbol("onMirrorCreated"),h=Symbol("onMirrorDestroy");t.default=class extends i.default{constructor(e){super(e),this.firstSource=null,this.mirror=null,this[o]=this[o].bind(this),this[u]=this[u].bind(this),this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this),this[h]=this[h].bind(this)}attach(){this.draggable.on("drag:start",this[o]).on("drag:stop",this[u]).on("drag:over",this[l]).on("drag:out",this[d]).on("droppable:over",this[l]).on("droppable:out",this[d]).on("mirror:created",this[c]).on("mirror:destroy",this[h])}detach(){this.draggable.off("drag:start",this[o]).off("drag:stop",this[u]).off("drag:over",this[l]).off("drag:out",this[d]).off("droppable:over",this[l]).off("droppable:out",this[d]).off("mirror:created",this[c]).off("mirror:destroy",this[h])}[o](e){e.canceled()||(this.firstSource=e.source)}[u](){this.firstSource=null}[l](e){if(e.canceled())return;const t=e.source||e.dragEvent.source;if(t===this.firstSource)return void(this.firstSource=null);const n=new s.SnapInEvent({dragEvent:e,snappable:e.over||e.droppable});this.draggable.trigger(n),n.canceled()||(this.mirror&&(this.mirror.style.display="none"),t.classList.remove(this.draggable.getClassNameFor("source:dragging")),t.classList.add(this.draggable.getClassNameFor("source:placed")),setTimeout(()=>{t.classList.remove(this.draggable.getClassNameFor("source:placed"))},this.draggable.options.placedTimeout))}[d](e){if(e.canceled())return;const t=e.source||e.dragEvent.source,n=new s.SnapOutEvent({dragEvent:e,snappable:e.over||e.droppable});this.draggable.trigger(n),n.canceled()||(this.mirror&&(this.mirror.style.display=""),t.classList.add(this.draggable.getClassNameFor("source:dragging")))}[c]({mirror:e}){this.mirror=e}[h](){this.mirror=null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SnapOutEvent=t.SnapInEvent=t.SnapEvent=void 0;var r,a=n(0),i=(r=a)&&r.__esModule?r:{default:r};class s extends i.default{get dragEvent(){return this.data.dragEvent}get snappable(){return this.data.snappable}}t.SnapEvent=s,s.type="snap";class o extends s{}t.SnapInEvent=o,o.type="snap:in",o.cancelable=!0;class u extends s{}t.SnapOutEvent=u,u.type="snap:out",u.cancelable=!0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(7);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var a,i=n(17),s=(a=i)&&a.__esModule?a:{default:a};t.default=s.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),s=(r=i)&&r.__esModule?r:{default:r},o=n(2);const u=Symbol("onMirrorCreated"),l=Symbol("onMirrorDestroy"),d=Symbol("onDragOver"),c=Symbol("resize"),h=t.defaultOptions={};t.default=class extends s.default{constructor(e){super(e),this.options=a({},h,this.getOptions()),this.lastWidth=0,this.lastHeight=0,this.mirror=null,this[u]=this[u].bind(this),this[l]=this[l].bind(this),this[d]=this[d].bind(this)}attach(){this.draggable.on("mirror:created",this[u]).on("drag:over",this[d]).on("drag:over:container",this[d])}detach(){this.draggable.off("mirror:created",this[u]).off("mirror:destroy",this[l]).off("drag:over",this[d]).off("drag:over:container",this[d])}getOptions(){return this.draggable.options.resizeMirror||{}}[u]({mirror:e}){this.mirror=e}[l](){this.mirror=null}[d](e){this[c](e)}[c]({overContainer:e,over:t}){requestAnimationFrame(()=>{this.mirror.parentNode!==e&&e.appendChild(this.mirror);const n=t||this.draggable.getDraggableElementsForContainer(e)[0];n&&(0,o.requestNextAnimationFrame)(()=>{const e=n.getBoundingClientRect();this.lastHeight===e.height&&this.lastWidth===e.width||(this.mirror.style.width=`${e.width}px`,this.mirror.style.height=`${e.height}px`,this.lastWidth=e.width,this.lastHeight=e.height)})})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,a=n(20),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default,t.defaultOptions=a.defaultOptions},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(1),i=(r=a)&&r.__esModule?r:{default:r},s=n(2),o=n(8);const u=Symbol("onDragMove"),l=Symbol("onDragStop"),d=Symbol("onRequestAnimationFrame");t.default=class extends i.default{constructor(e){super(e),this.currentlyCollidingElement=null,this.lastCollidingElement=null,this.currentAnimationFrame=null,this[u]=this[u].bind(this),this[l]=this[l].bind(this),this[d]=this[d].bind(this)}attach(){this.draggable.on("drag:move",this[u]).on("drag:stop",this[l])}detach(){this.draggable.off("drag:move",this[u]).off("drag:stop",this[l])}getCollidables(){const e=this.draggable.options.collidables;return"string"==typeof e?Array.prototype.slice.call(document.querySelectorAll(e)):e instanceof NodeList||e instanceof Array?Array.prototype.slice.call(e):e instanceof HTMLElement?[e]:"function"==typeof e?e():[]}[u](e){const t=e.sensorEvent.target;this.currentAnimationFrame=requestAnimationFrame(this[d](t)),this.currentlyCollidingElement&&e.cancel();const n=new o.CollidableInEvent({dragEvent:e,collidingElement:this.currentlyCollidingElement}),r=new o.CollidableOutEvent({dragEvent:e,collidingElement:this.lastCollidingElement}),a=Boolean(this.currentlyCollidingElement&&this.lastCollidingElement!==this.currentlyCollidingElement),i=Boolean(!this.currentlyCollidingElement&&this.lastCollidingElement);a?(this.lastCollidingElement&&this.draggable.trigger(r),this.draggable.trigger(n)):i&&this.draggable.trigger(r),this.lastCollidingElement=this.currentlyCollidingElement}[l](e){const t=this.currentlyCollidingElement||this.lastCollidingElement,n=new o.CollidableOutEvent({dragEvent:e,collidingElement:t});t&&this.draggable.trigger(n),this.lastCollidingElement=null,this.currentlyCollidingElement=null}[d](e){return()=>{const t=this.getCollidables();this.currentlyCollidingElement=(0,s.closest)(e,e=>t.includes(e))}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CollidableOutEvent=t.CollidableInEvent=t.CollidableEvent=void 0;var r,a=n(0),i=(r=a)&&r.__esModule?r:{default:r};class s extends i.default{get dragEvent(){return this.data.dragEvent}}t.CollidableEvent=s,s.type="collidable";class o extends s{get collidingElement(){return this.data.collidingElement}}t.CollidableInEvent=o,o.type="collidable:in";class u extends s{get collidingElement(){return this.data.collidingElement}}t.CollidableOutEvent=u,u.type="collidable:out"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(8);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var a,i=n(22),s=(a=i)&&a.__esModule?a:{default:a};t.default=s.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(24);Object.defineProperty(t,"Collidable",{enumerable:!0,get:function(){return o(r).default}});var a=n(21);Object.defineProperty(t,"ResizeMirror",{enumerable:!0,get:function(){return o(a).default}}),Object.defineProperty(t,"defaultResizeMirrorOptions",{enumerable:!0,get:function(){return a.defaultOptions}});var i=n(19);Object.defineProperty(t,"Snappable",{enumerable:!0,get:function(){return o(i).default}});var s=n(16);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"SwapAnimation",{enumerable:!0,get:function(){return o(s).default}}),Object.defineProperty(t,"defaultSwapAnimationOptions",{enumerable:!0,get:function(){return s.defaultOptions}})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(5),s=(r=i)&&r.__esModule?r:{default:r},o=n(9);const u=Symbol("onDragStart"),l=Symbol("onDragOverContainer"),d=Symbol("onDragOver"),c=Symbol("onDragStop");const h={"sortable:sorted":function({dragEvent:e}){const t=e.source.textContent.trim()||e.source.id||"sortable element";if(e.over){const n=e.over.textContent.trim()||e.over.id||"sortable element";return e.source.compareDocumentPosition(e.over)&Node.DOCUMENT_POSITION_FOLLOWING?`Placed ${t} after ${n}`:`Placed ${t} before ${n}`}return`Placed ${t} into a different container`}};function _(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}function f({source:e,over:t,overContainer:n,children:r}){const a=!r.length,i=e.parentNode!==n,s=t&&!i;return a?function(e,t){const n=e.parentNode;return t.appendChild(e),{oldContainer:n,newContainer:t}}(e,n):s?function(e,t){const n=_(e),r=_(t);n<r?e.parentNode.insertBefore(e,t.nextElementSibling):e.parentNode.insertBefore(e,t);return{oldContainer:e.parentNode,newContainer:e.parentNode}}(e,t):i?function(e,t,n){const r=e.parentNode;t?t.parentNode.insertBefore(e,t):n.appendChild(e);return{oldContainer:r,newContainer:e.parentNode}}(e,t,n):null}t.default=class extends s.default{constructor(e=[],t={}){super(e,a({},t,{announcements:a({},h,t.announcements||{})})),this.startIndex=null,this.startContainer=null,this[u]=this[u].bind(this),this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this),this.on("drag:start",this[u]).on("drag:over:container",this[l]).on("drag:over",this[d]).on("drag:stop",this[c])}destroy(){super.destroy(),this.off("drag:start",this[u]).off("drag:over:container",this[l]).off("drag:over",this[d]).off("drag:stop",this[c])}index(e){return this.getDraggableElementsForContainer(e.parentNode).indexOf(e)}[u](e){this.startContainer=e.source.parentNode,this.startIndex=this.index(e.source);const t=new o.SortableStartEvent({dragEvent:e,startIndex:this.startIndex,startContainer:this.startContainer});this.trigger(t),t.canceled()&&e.cancel()}[l](e){if(e.canceled())return;const{source:t,over:n,overContainer:r}=e,a=this.index(t),i=new o.SortableSortEvent({dragEvent:e,currentIndex:a,source:t,over:n});if(this.trigger(i),i.canceled())return;const s=f({source:t,over:n,overContainer:r,children:this.getDraggableElementsForContainer(r)});if(!s)return;const{oldContainer:u,newContainer:l}=s,d=this.index(e.source),c=new o.SortableSortedEvent({dragEvent:e,oldIndex:a,newIndex:d,oldContainer:u,newContainer:l});this.trigger(c)}[d](e){if(e.over===e.originalSource||e.over===e.source)return;const{source:t,over:n,overContainer:r}=e,a=this.index(t),i=new o.SortableSortEvent({dragEvent:e,currentIndex:a,source:t,over:n});if(this.trigger(i),i.canceled())return;const s=f({source:t,over:n,overContainer:r,children:this.getDraggableElementsForContainer(r)});if(!s)return;const{oldContainer:u,newContainer:l}=s,d=this.index(t),c=new o.SortableSortedEvent({dragEvent:e,oldIndex:a,newIndex:d,oldContainer:u,newContainer:l});this.trigger(c)}[c](e){const t=new o.SortableStopEvent({dragEvent:e,oldIndex:this.startIndex,newIndex:this.index(e.source),oldContainer:this.startContainer,newContainer:e.source.parentNode});this.trigger(t),this.startIndex=null,this.startContainer=null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SortableStopEvent=t.SortableSortedEvent=t.SortableSortEvent=t.SortableStartEvent=t.SortableEvent=void 0;var r,a=n(0),i=(r=a)&&r.__esModule?r:{default:r};class s extends i.default{get dragEvent(){return this.data.dragEvent}}t.SortableEvent=s,s.type="sortable";class o extends s{get startIndex(){return this.data.startIndex}get startContainer(){return this.data.startContainer}}t.SortableStartEvent=o,o.type="sortable:start",o.cancelable=!0;class u extends s{get currentIndex(){return this.data.currentIndex}get over(){return this.data.oldIndex}get overContainer(){return this.data.newIndex}}t.SortableSortEvent=u,u.type="sortable:sort",u.cancelable=!0;class l extends s{get oldIndex(){return this.data.oldIndex}get newIndex(){return this.data.newIndex}get oldContainer(){return this.data.oldContainer}get newContainer(){return this.data.newContainer}}t.SortableSortedEvent=l,l.type="sortable:sorted";class d extends s{get oldIndex(){return this.data.oldIndex}get newIndex(){return this.data.newIndex}get oldContainer(){return this.data.oldContainer}get newContainer(){return this.data.newContainer}}t.SortableStopEvent=d,d.type="sortable:stop"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(9);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var a,i=n(26),s=(a=i)&&a.__esModule?a:{default:a};t.default=s.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(5),s=(r=i)&&r.__esModule?r:{default:r},o=n(10);const u=Symbol("onDragStart"),l=Symbol("onDragOver"),d=Symbol("onDragStop");const c={"swappabled:swapped":function({dragEvent:e,swappedElement:t}){return`Swapped ${e.source.textContent.trim()||e.source.id||"swappable element"} with ${t.textContent.trim()||t.id||"swappable element"}`}};function h(e,t){const n=t.parentNode,r=e.parentNode;!function(e){const t=document.createElement("div");e(t),t.parentNode.removeChild(t)}(a=>{r.insertBefore(a,e),n.insertBefore(e,t),r.insertBefore(t,a)})}t.default=class extends s.default{constructor(e=[],t={}){super(e,a({},t,{announcements:a({},c,t.announcements||{})})),this.lastOver=null,this[u]=this[u].bind(this),this[l]=this[l].bind(this),this[d]=this[d].bind(this),this.on("drag:start",this[u]).on("drag:over",this[l]).on("drag:stop",this[d])}destroy(){super.destroy(),this.off("drag:start",this._onDragStart).off("drag:over",this._onDragOver).off("drag:stop",this._onDragStop)}[u](e){const t=new o.SwappableStartEvent({dragEvent:e});this.trigger(t),t.canceled()&&e.cancel()}[l](e){if(e.over===e.originalSource||e.over===e.source||e.canceled())return;const t=new o.SwappableSwapEvent({dragEvent:e,over:e.over,overContainer:e.overContainer});if(this.trigger(t),t.canceled())return;this.lastOver&&this.lastOver!==e.over&&h(this.lastOver,e.source),this.lastOver===e.over?this.lastOver=null:this.lastOver=e.over,h(e.source,e.over);const n=new o.SwappableSwappedEvent({dragEvent:e,swappedElement:e.over});this.trigger(n)}[d](e){const t=new o.SwappableStopEvent({dragEvent:e});this.trigger(t),this.lastOver=null}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SwappableStopEvent=t.SwappableSwappedEvent=t.SwappableSwapEvent=t.SwappableStartEvent=t.SwappableEvent=void 0;var r,a=n(0),i=(r=a)&&r.__esModule?r:{default:r};class s extends i.default{get dragEvent(){return this.data.dragEvent}}t.SwappableEvent=s,s.type="swappable";class o extends s{}t.SwappableStartEvent=o,o.type="swappable:start",o.cancelable=!0;class u extends s{get over(){return this.data.over}get overContainer(){return this.data.overContainer}}t.SwappableSwapEvent=u,u.type="swappable:swap",u.cancelable=!0;class l extends s{get swappedElement(){return this.data.swappedElement}}t.SwappableSwappedEvent=l,l.type="swappable:swapped";class d extends s{}t.SwappableStopEvent=d,d.type="swappable:stop"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(10);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var a,i=n(29),s=(a=i)&&a.__esModule?a:{default:a};t.default=s.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(2),s=n(5),o=(r=s)&&r.__esModule?r:{default:r},u=n(11);const l=Symbol("onDragStart"),d=Symbol("onDragMove"),c=Symbol("onDragStop"),h=Symbol("dropInDropZone"),_=Symbol("returnToOriginalDropzone"),f=Symbol("closestDropzone"),m=Symbol("getDropzones");const p={"droppable:dropped":function({dragEvent:e,dropzone:t}){return`Dropped ${e.source.textContent.trim()||e.source.id||"draggable element"} into ${t.textContent.trim()||t.id||"droppable element"}`},"droppable:returned":function({dragEvent:e,dropzone:t}){return`Returned ${e.source.textContent.trim()||e.source.id||"draggable element"} from ${t.textContent.trim()||t.id||"droppable element"}`}},y={"droppable:active":"draggable-dropzone--active","droppable:occupied":"draggable-dropzone--occupied"},g={dropzone:".draggable-droppable"};t.default=class extends o.default{constructor(e=[],t={}){super(e,a({},g,t,{classes:a({},y,t.classes||{}),announcements:a({},p,t.announcements||{})})),this.dropzones=null,this.lastDropzone=null,this.initialDropzone=null,this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this),this.on("drag:start",this[l]).on("drag:move",this[d]).on("drag:stop",this[c])}destroy(){super.destroy(),this.off("drag:start",this[l]).off("drag:move",this[d]).off("drag:stop",this[c])}[l](e){if(e.canceled())return;this.dropzones=[...this[m]()];const t=(0,i.closest)(e.sensorEvent.target,this.options.dropzone);if(!t)return void e.cancel();const n=new u.DroppableStartEvent({dragEvent:e,dropzone:t});if(this.trigger(n),n.canceled())e.cancel();else{this.initialDropzone=t;for(const e of this.dropzones)e.classList.contains(this.getClassNameFor("droppable:occupied"))||e.classList.add(this.getClassNameFor("droppable:active"))}}[d](e){if(e.canceled())return;const t=this[f](e.sensorEvent.target);t&&!t.classList.contains(this.getClassNameFor("droppable:occupied"))&&this[h](e,t)?this.lastDropzone=t:t&&t!==this.initialDropzone||!this.lastDropzone||(this[_](e),this.lastDropzone=null)}[c](e){const t=new u.DroppableStopEvent({dragEvent:e,dropzone:this.lastDropzone||this.initialDropzone});this.trigger(t);const n=this.getClassNameFor("droppable:occupied");for(const e of this.dropzones)e.classList.remove(this.getClassNameFor("droppable:active"));this.lastDropzone&&this.lastDropzone!==this.initialDropzone&&this.initialDropzone.classList.remove(n),this.dropzones=null,this.lastDropzone=null,this.initialDropzone=null}[h](e,t){const n=new u.DroppableDroppedEvent({dragEvent:e,dropzone:t});if(this.trigger(n),n.canceled())return!1;const r=this.getClassNameFor("droppable:occupied");return this.lastDropzone&&this.lastDropzone.classList.remove(r),t.appendChild(e.source),t.classList.add(r),!0}[_](e){const t=new u.DroppableReturnedEvent({dragEvent:e,dropzone:this.lastDropzone});this.trigger(t),t.canceled()||(this.initialDropzone.appendChild(e.source),this.lastDropzone.classList.remove(this.getClassNameFor("droppable:occupied")))}[f](e){return this.dropzones?(0,i.closest)(e,this.dropzones):null}[m](){const e=this.options.dropzone;return"string"==typeof e?document.querySelectorAll(e):e instanceof NodeList||e instanceof Array?e:"function"==typeof e?e():[]}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DroppableStopEvent=t.DroppableReturnedEvent=t.DroppableDroppedEvent=t.DroppableStartEvent=t.DroppableEvent=void 0;var r,a=n(0),i=(r=a)&&r.__esModule?r:{default:r};class s extends i.default{get dragEvent(){return this.data.dragEvent}}t.DroppableEvent=s,s.type="droppable";class o extends s{get dropzone(){return this.data.dropzone}}t.DroppableStartEvent=o,o.type="droppable:start",o.cancelable=!0;class u extends s{get dropzone(){return this.data.dropzone}}t.DroppableDroppedEvent=u,u.type="droppable:dropped",u.cancelable=!0;class l extends s{get dropzone(){return this.data.dropzone}}t.DroppableReturnedEvent=l,l.type="droppable:returned",l.cancelable=!0;class d extends s{get dropzone(){return this.data.dropzone}}t.DroppableStopEvent=d,d.type="droppable:stop",d.cancelable=!0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(11);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})});var a,i=n(32),s=(a=i)&&a.__esModule?a:{default:a};t.default=s.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(){this.callbacks={}}on(e,...t){return this.callbacks[e]||(this.callbacks[e]=[]),this.callbacks[e].push(...t),this}off(e,t){if(!this.callbacks[e])return null;const n=this.callbacks[e].slice(0);for(let r=0;r<n.length;r++)t===n[r]&&this.callbacks[e].splice(r,1);return this}trigger(e){if(!this.callbacks[e.type])return null;const t=[...this.callbacks[e.type]],n=[];for(let r=t.length-1;r>=0;r--){const a=t[r];try{a(e)}catch(e){n.push(e)}}return n.length&&console.error(`Draggable caught errors while triggering '${e.type}'`,n),this}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(35),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(2),s=n(12),o=n(36),u=(r=o)&&r.__esModule?r:{default:r},l=n(6),d=n(13),c=n(14);const h=Symbol("onDragStart"),_=Symbol("onDragMove"),f=Symbol("onDragStop"),m=Symbol("onDragPressure"),p={"drag:start":e=>`Picked up ${e.source.textContent.trim()||e.source.id||"draggable element"}`,"drag:stop":e=>`Released ${e.source.textContent.trim()||e.source.id||"draggable element"}`},y={"container:dragging":"draggable-container--is-dragging","source:dragging":"draggable-source--is-dragging","source:placed":"draggable-source--placed","container:placed":"draggable-container--placed","body:dragging":"draggable--is-dragging","draggable:over":"draggable--over","container:over":"draggable-container--over","source:original":"draggable--original",mirror:"draggable-mirror"},g=t.defaultOptions={draggable:".draggable-source",handle:null,delay:100,placedTimeout:800,plugins:[],sensors:[]};class v{constructor(e=[document.body],t={}){if(e instanceof NodeList||e instanceof Array)this.containers=[...e];else{if(!(e instanceof HTMLElement))throw new Error("Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`");this.containers=[e]}this.options=a({},g,t,{classes:a({},y,t.classes||{}),announcements:a({},p,t.announcements||{})}),this.emitter=new u.default,this.dragging=!1,this.plugins=[],this.sensors=[],this[h]=this[h].bind(this),this[_]=this[_].bind(this),this[f]=this[f].bind(this),this[m]=this[m].bind(this),document.addEventListener("drag:start",this[h],!0),document.addEventListener("drag:move",this[_],!0),document.addEventListener("drag:stop",this[f],!0),document.addEventListener("drag:pressure",this[m],!0);const n=Object.values(v.Plugins).map(e=>e),r=[l.MouseSensor,l.TouchSensor];this.addPlugin(...n,...this.options.plugins),this.addSensor(...r,...this.options.sensors);const i=new d.DraggableInitializedEvent({draggable:this});this.on("mirror:created",({mirror:e})=>this.mirror=e),this.on("mirror:destroy",()=>this.mirror=null),this.trigger(i)}destroy(){document.removeEventListener("drag:start",this[h],!0),document.removeEventListener("drag:move",this[_],!0),document.removeEventListener("drag:stop",this[f],!0),document.removeEventListener("drag:pressure",this[m],!0);const e=new d.DraggableDestroyEvent({draggable:this});this.trigger(e),this.removePlugin(...this.plugins.map(e=>e.constructor)),this.removeSensor(...this.sensors.map(e=>e.constructor))}addPlugin(...e){const t=e.map(e=>new e(this));return t.forEach(e=>e.attach()),this.plugins=[...this.plugins,...t],this}removePlugin(...e){return this.plugins.filter(t=>e.includes(t.constructor)).forEach(e=>e.detach()),this.plugins=this.plugins.filter(t=>!e.includes(t.constructor)),this}addSensor(...e){const t=e.map(e=>new e(this.containers,this.options));return t.forEach(e=>e.attach()),this.sensors=[...this.sensors,...t],this}removeSensor(...e){return this.sensors.filter(t=>e.includes(t.constructor)).forEach(e=>e.detach()),this.sensors=this.sensors.filter(t=>!e.includes(t.constructor)),this}addContainer(...e){return this.containers=[...this.containers,...e],this.sensors.forEach(t=>t.addContainer(...e)),this}removeContainer(...e){return this.containers=this.containers.filter(t=>!e.includes(t)),this.sensors.forEach(t=>t.removeContainer(...e)),this}on(e,...t){return this.emitter.on(e,...t),this}off(e,t){return this.emitter.off(e,t),this}trigger(e){return this.emitter.trigger(e),this}getClassNameFor(e){return this.options.classes[e]}isDragging(){return Boolean(this.dragging)}getDraggableElements(){return this.containers.reduce((e,t)=>[...e,...this.getDraggableElementsForContainer(t)],[])}getDraggableElementsForContainer(e){return[...e.querySelectorAll(this.options.draggable)].filter(e=>e!==this.originalSource&&e!==this.mirror)}[h](e){const t=M(e),{target:n,container:r}=t;if(!this.containers.includes(r))return;if(this.options.handle&&n&&!(0,i.closest)(n,this.options.handle))return void t.cancel();if(this.originalSource=(0,i.closest)(n,this.options.draggable),this.sourceContainer=r,!this.originalSource)return void t.cancel();this.lastPlacedSource&&this.lastPlacedContainer&&(clearTimeout(this.placedTimeoutID),this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")),this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed"))),this.source=this.originalSource.cloneNode(!0),this.originalSource.parentNode.insertBefore(this.source,this.originalSource),this.originalSource.style.display="none";const s=new c.DragStartEvent({source:this.source,originalSource:this.originalSource,sourceContainer:r,sensorEvent:t});if(this.trigger(s),this.dragging=!s.canceled(),s.canceled())return this.source.parentNode.removeChild(this.source),void(this.originalSource.style.display=null);this.originalSource.classList.add(this.getClassNameFor("source:original")),this.source.classList.add(this.getClassNameFor("source:dragging")),this.sourceContainer.classList.add(this.getClassNameFor("container:dragging")),document.body.classList.add(this.getClassNameFor("body:dragging")),L(document.body,"none"),requestAnimationFrame(()=>{const t=M(e).clone({target:this.source});this[_](a({},e,{detail:t}))})}[_](e){if(!this.dragging)return;const t=M(e),{container:n}=t;let r=t.target;const a=new c.DragMoveEvent({source:this.source,originalSource:this.originalSource,sourceContainer:n,sensorEvent:t});this.trigger(a),a.canceled()&&t.cancel(),r=(0,i.closest)(r,this.options.draggable);const s=(0,i.closest)(t.target,this.containers),o=t.overContainer||s,u=this.currentOverContainer&&o!==this.currentOverContainer,l=this.currentOver&&r!==this.currentOver,d=o&&this.currentOverContainer!==o,h=s&&r&&this.currentOver!==r;if(l){const e=new c.DragOutEvent({source:this.source,originalSource:this.originalSource,sourceContainer:n,sensorEvent:t,over:this.currentOver});this.currentOver.classList.remove(this.getClassNameFor("draggable:over")),this.currentOver=null,this.trigger(e)}if(u){const e=new c.DragOutContainerEvent({source:this.source,originalSource:this.originalSource,sourceContainer:n,sensorEvent:t,overContainer:this.currentOverContainer});this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")),this.currentOverContainer=null,this.trigger(e)}if(d){o.classList.add(this.getClassNameFor("container:over"));const e=new c.DragOverContainerEvent({source:this.source,originalSource:this.originalSource,sourceContainer:n,sensorEvent:t,overContainer:o});this.currentOverContainer=o,this.trigger(e)}if(h){r.classList.add(this.getClassNameFor("draggable:over"));const e=new c.DragOverEvent({source:this.source,originalSource:this.originalSource,sourceContainer:n,sensorEvent:t,overContainer:o,over:r});this.currentOver=r,this.trigger(e)}}[f](e){if(!this.dragging)return;this.dragging=!1;const t=new c.DragStopEvent({source:this.source,originalSource:this.originalSource,sensorEvent:e.sensorEvent,sourceContainer:this.sourceContainer});this.trigger(t),this.source.parentNode.insertBefore(this.originalSource,this.source),this.source.parentNode.removeChild(this.source),this.originalSource.style.display="",this.source.classList.remove(this.getClassNameFor("source:dragging")),this.originalSource.classList.remove(this.getClassNameFor("source:original")),this.originalSource.classList.add(this.getClassNameFor("source:placed")),this.sourceContainer.classList.add(this.getClassNameFor("container:placed")),this.sourceContainer.classList.remove(this.getClassNameFor("container:dragging")),document.body.classList.remove(this.getClassNameFor("body:dragging")),L(document.body,""),this.currentOver&&this.currentOver.classList.remove(this.getClassNameFor("draggable:over")),this.currentOverContainer&&this.currentOverContainer.classList.remove(this.getClassNameFor("container:over")),this.lastPlacedSource=this.originalSource,this.lastPlacedContainer=this.sourceContainer,this.placedTimeoutID=setTimeout(()=>{this.lastPlacedSource&&this.lastPlacedSource.classList.remove(this.getClassNameFor("source:placed")),this.lastPlacedContainer&&this.lastPlacedContainer.classList.remove(this.getClassNameFor("container:placed")),this.lastPlacedSource=null,this.lastPlacedContainer=null},this.options.placedTimeout),this.source=null,this.originalSource=null,this.currentOverContainer=null,this.currentOver=null,this.sourceContainer=null}[m](e){if(!this.dragging)return;const t=M(e),n=this.source||(0,i.closest)(t.originalEvent.target,this.options.draggable),r=new c.DragPressureEvent({sensorEvent:t,source:n,pressure:t.pressure});this.trigger(r)}}function M(e){return e.detail}function L(e,t){e.style.webkitUserSelect=t,e.style.mozUserSelect=t,e.style.msUserSelect=t,e.style.oUserSelect=t,e.style.userSelect=t}t.default=v,v.Plugins={Announcement:s.Announcement,Focusable:s.Focusable,Mirror:s.Mirror,Scrollable:s.Scrollable}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(4),i=(r=a)&&r.__esModule?r:{default:r},s=n(3);const o=Symbol("onMouseForceWillBegin"),u=Symbol("onMouseForceDown"),l=Symbol("onMouseDown"),d=Symbol("onMouseForceChange"),c=Symbol("onMouseMove"),h=Symbol("onMouseUp"),_=Symbol("onMouseForceGlobalChange");t.default=class extends i.default{constructor(e=[],t={}){super(e,t),this.mightDrag=!1,this[o]=this[o].bind(this),this[u]=this[u].bind(this),this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this),this[h]=this[h].bind(this)}attach(){for(const e of this.containers)e.addEventListener("webkitmouseforcewillbegin",this[o],!1),e.addEventListener("webkitmouseforcedown",this[u],!1),e.addEventListener("mousedown",this[l],!0),e.addEventListener("webkitmouseforcechanged",this[d],!1);document.addEventListener("mousemove",this[c]),document.addEventListener("mouseup",this[h])}detach(){for(const e of this.containers)e.removeEventListener("webkitmouseforcewillbegin",this[o],!1),e.removeEventListener("webkitmouseforcedown",this[u],!1),e.removeEventListener("mousedown",this[l],!0),e.removeEventListener("webkitmouseforcechanged",this[d],!1);document.removeEventListener("mousemove",this[c]),document.removeEventListener("mouseup",this[h])}[o](e){e.preventDefault(),this.mightDrag=!0}[u](e){if(this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),n=e.currentTarget,r=new s.DragStartSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:n,originalEvent:e});this.trigger(n,r),this.currentContainer=n,this.dragging=!r.canceled(),this.mightDrag=!1}[h](e){if(!this.dragging)return;const t=new s.DragStopSensorEvent({clientX:e.clientX,clientY:e.clientY,target:null,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,t),this.currentContainer=null,this.dragging=!1,this.mightDrag=!1}[l](e){this.mightDrag&&(e.stopPropagation(),e.stopImmediatePropagation(),e.preventDefault())}[c](e){if(!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),n=new s.DragMoveSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,n)}[d](e){if(this.dragging)return;const t=e.target,n=e.currentTarget,r=new s.DragPressureSensorEvent({pressure:e.webkitForce,clientX:e.clientX,clientY:e.clientY,target:t,container:n,originalEvent:e});this.trigger(n,r)}[_](e){if(!this.dragging)return;const t=e.target,n=new s.DragPressureSensorEvent({pressure:e.webkitForce,clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,n)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(38),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(2),i=n(4),s=(r=i)&&r.__esModule?r:{default:r},o=n(3);const u=Symbol("onMouseDown"),l=Symbol("onMouseUp"),d=Symbol("onDragStart"),c=Symbol("onDragOver"),h=Symbol("onDragEnd"),_=Symbol("onDrop"),f=Symbol("reset");t.default=class extends s.default{constructor(e=[],t={}){super(e,t),this.mouseDownTimeout=null,this.draggableElement=null,this.nativeDraggableElement=null,this[u]=this[u].bind(this),this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this),this[h]=this[h].bind(this),this[_]=this[_].bind(this)}attach(){document.addEventListener("mousedown",this[u],!0)}detach(){document.removeEventListener("mousedown",this[u],!0)}[d](e){e.dataTransfer.setData("text",""),e.dataTransfer.effectAllowed=this.options.type;const t=document.elementFromPoint(e.clientX,e.clientY);if(this.currentContainer=(0,a.closest)(e.target,this.containers),!this.currentContainer)return;const n=new o.DragStartSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});setTimeout(()=>{this.trigger(this.currentContainer,n),n.canceled()?this.dragging=!1:this.dragging=!0},0)}[c](e){if(!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),n=this.currentContainer,r=new o.DragMoveSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:n,originalEvent:e});this.trigger(n,r),r.canceled()||(e.preventDefault(),e.dataTransfer.dropEffect=this.options.type)}[h](e){if(!this.dragging)return;document.removeEventListener("mouseup",this[l],!0);const t=document.elementFromPoint(e.clientX,e.clientY),n=this.currentContainer,r=new o.DragStopSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:n,originalEvent:e});this.trigger(n,r),this.dragging=!1,this[f]()}[_](e){e.preventDefault()}[u](e){if(e.target&&(e.target.form||e.target.contenteditable))return;const t=(0,a.closest)(e.target,e=>e.draggable);t&&(t.draggable=!1,this.nativeDraggableElement=t),document.addEventListener("mouseup",this[l],!0),document.addEventListener("dragstart",this[d],!1),document.addEventListener("dragover",this[c],!1),document.addEventListener("dragend",this[h],!1),document.addEventListener("drop",this[_],!1);const n=(0,a.closest)(e.target,this.options.draggable);n&&(this.mouseDownTimeout=setTimeout(()=>{n.draggable=!0,this.draggableElement=n},this.options.delay))}[l](){this[f]()}[f](){clearTimeout(this.mouseDownTimeout),document.removeEventListener("mouseup",this[l],!0),document.removeEventListener("dragstart",this[d],!1),document.removeEventListener("dragover",this[c],!1),document.removeEventListener("dragend",this[h],!1),document.removeEventListener("drop",this[_],!1),this.nativeDraggableElement&&(this.nativeDraggableElement.draggable=!0,this.nativeDraggableElement=null),this.draggableElement&&(this.draggableElement.draggable=!1,this.draggableElement=null)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(40),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(2),i=n(4),s=(r=i)&&r.__esModule?r:{default:r},o=n(3);const u=Symbol("onTouchStart"),l=Symbol("onTouchHold"),d=Symbol("onTouchEnd"),c=Symbol("onTouchMove");let h=!1;window.addEventListener("touchmove",e=>{h&&e.preventDefault()},{passive:!1});function _(e){e.preventDefault(),e.stopPropagation()}t.default=class extends s.default{constructor(e=[],t={}){super(e,t),this.currentScrollableParent=null,this.tapTimeout=null,this.touchMoved=!1,this[u]=this[u].bind(this),this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this)}attach(){document.addEventListener("touchstart",this[u])}detach(){document.removeEventListener("touchstart",this[u])}[u](e){const t=(0,a.closest)(e.target,this.containers);t&&(document.addEventListener("touchmove",this[c]),document.addEventListener("touchend",this[d]),document.addEventListener("touchcancel",this[d]),t.addEventListener("contextmenu",_),this.currentContainer=t,this.tapTimeout=setTimeout(this[l](e,t),this.options.delay))}[l](e,t){return()=>{if(this.touchMoved)return;const n=e.touches[0]||e.changedTouches[0],r=e.target,a=new o.DragStartSensorEvent({clientX:n.pageX,clientY:n.pageY,target:r,container:t,originalEvent:e});this.trigger(t,a),this.dragging=!a.canceled(),h=this.dragging}}[c](e){if(this.touchMoved=!0,!this.dragging)return;const t=e.touches[0]||e.changedTouches[0],n=document.elementFromPoint(t.pageX-window.scrollX,t.pageY-window.scrollY),r=new o.DragMoveSensorEvent({clientX:t.pageX,clientY:t.pageY,target:n,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,r)}[d](e){if(this.touchMoved=!1,h=!1,document.removeEventListener("touchend",this[d]),document.removeEventListener("touchcancel",this[d]),document.removeEventListener("touchmove",this[c]),this.currentContainer&&this.currentContainer.removeEventListener("contextmenu",_),clearTimeout(this.tapTimeout),!this.dragging)return;const t=e.touches[0]||e.changedTouches[0],n=document.elementFromPoint(t.pageX-window.scrollX,t.pageY-window.scrollY);e.preventDefault();const r=new o.DragStopSensorEvent({clientX:t.pageX,clientY:t.pageY,target:n,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,r),this.currentContainer=null,this.dragging=!1}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(42),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DragPressureSensorEvent=t.DragStopSensorEvent=t.DragMoveSensorEvent=t.DragStartSensorEvent=t.SensorEvent=void 0;var r,a=n(0),i=(r=a)&&r.__esModule?r:{default:r};class s extends i.default{get originalEvent(){return this.data.originalEvent}get clientX(){return this.data.clientX}get clientY(){return this.data.clientY}get target(){return this.data.target}get container(){return this.data.container}get pressure(){return this.data.pressure}}t.SensorEvent=s;class o extends s{}t.DragStartSensorEvent=o,o.type="drag:start";class u extends s{}t.DragMoveSensorEvent=u,u.type="drag:move";class l extends s{}t.DragStopSensorEvent=l,l.type="drag:stop";class d extends s{}t.DragPressureSensorEvent=d,d.type="drag:pressure"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(2),i=n(4),s=(r=i)&&r.__esModule?r:{default:r},o=n(3);const u=Symbol("onContextMenuWhileDragging"),l=Symbol("onMouseDown"),d=Symbol("onMouseMove"),c=Symbol("onMouseUp");function h(e){e.preventDefault()}t.default=class extends s.default{constructor(e=[],t={}){super(e,t),this.mouseDown=!1,this.mouseDownTimeout=null,this.openedContextMenu=!1,this[u]=this[u].bind(this),this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this)}attach(){document.addEventListener("mousedown",this[l],!0)}detach(){document.removeEventListener("mousedown",this[l],!0)}[l](e){if(0!==e.button||e.ctrlKey||e.metaKey)return;document.addEventListener("mouseup",this[c]);const t=document.elementFromPoint(e.clientX,e.clientY),n=(0,a.closest)(t,this.containers);n&&(document.addEventListener("dragstart",h),this.mouseDown=!0,clearTimeout(this.mouseDownTimeout),this.mouseDownTimeout=setTimeout(()=>{if(!this.mouseDown)return;const r=new o.DragStartSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:n,originalEvent:e});this.trigger(n,r),this.currentContainer=n,this.dragging=!r.canceled(),this.dragging&&(document.addEventListener("contextmenu",this[u]),document.addEventListener("mousemove",this[d]))},this.options.delay))}[d](e){if(!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),n=new o.DragMoveSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,n)}[c](e){if(this.mouseDown=Boolean(this.openedContextMenu),this.openedContextMenu)return void(this.openedContextMenu=!1);if(document.removeEventListener("mouseup",this[c]),document.removeEventListener("dragstart",h),!this.dragging)return;const t=document.elementFromPoint(e.clientX,e.clientY),n=new o.DragStopSensorEvent({clientX:e.clientX,clientY:e.clientY,target:t,container:this.currentContainer,originalEvent:e});this.trigger(this.currentContainer,n),document.removeEventListener("contextmenu",this[u]),document.removeEventListener("mousemove",this[d]),this.currentContainer=null,this.dragging=!1}[u](e){e.preventDefault(),this.openedContextMenu=!0}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(45),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=class{constructor(e=[],t={}){this.containers=[...e],this.options=r({},t),this.dragging=!1,this.currentContainer=null}attach(){return this}detach(){return this}addContainer(...e){this.containers=[...this.containers,...e]}removeContainer(...e){this.containers=this.containers.filter(t=>!e.includes(t))}trigger(e,t){const n=document.createEvent("Event");return n.detail=t,n.initEvent(t.type,!0,!0),e.dispatchEvent(n),this.lastEvent=t,t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return requestAnimationFrame(()=>{requestAnimationFrame(e)})}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(48),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){if(!e)return null;const n=t,a=t,i=t,s=t,o=Boolean("string"==typeof t),u=Boolean("function"==typeof t),l=Boolean(t instanceof NodeList||t instanceof Array),d=Boolean(t instanceof HTMLElement);function c(e){return e?o?r.call(e,n):l?[...i].includes(e):d?s===e:u?a(e):null:e}let h=e;do{if(c(h=h.correspondingUseElement||h.correspondingElement||h))return h;h=h.parentNode}while(h&&h!==document.body&&h!==document);return null};const r=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(50),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=t.scroll=t.onDragStop=t.onDragMove=t.onDragStart=void 0;var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),s=(r=i)&&r.__esModule?r:{default:r},o=n(2);const u=t.onDragStart=Symbol("onDragStart"),l=t.onDragMove=Symbol("onDragMove"),d=t.onDragStop=Symbol("onDragStop"),c=t.scroll=Symbol("scroll"),h=t.defaultOptions={speed:6,sensitivity:50,scrollableElements:[]};function _(){return document.scrollingElement||document.documentElement}t.default=class extends s.default{constructor(e){super(e),this.options=a({},h,this.getOptions()),this.currentMousePosition=null,this.scrollAnimationFrame=null,this.scrollableElement=null,this.findScrollableElementFrame=null,this[u]=this[u].bind(this),this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this)}attach(){this.draggable.on("drag:start",this[u]).on("drag:move",this[l]).on("drag:stop",this[d])}detach(){this.draggable.off("drag:start",this[u]).off("drag:move",this[l]).off("drag:stop",this[d])}getOptions(){return this.draggable.options.scrollable||{}}getScrollableElement(e){return this.hasDefinedScrollableElements()?(0,o.closest)(e,this.options.scrollableElements)||document.documentElement:function(e){if(!e)return _();const t=getComputedStyle(e).getPropertyValue("position"),n="absolute"===t,r=(0,o.closest)(e,e=>(!n||!function(e){return"static"===getComputedStyle(e).getPropertyValue("position")}(e))&&function(e){const t=getComputedStyle(e,null),n=t.getPropertyValue("overflow")+t.getPropertyValue("overflow-y")+t.getPropertyValue("overflow-x");return/(auto|scroll)/.test(n)}(e));return"fixed"!==t&&r?r:_()}(e)}hasDefinedScrollableElements(){return Boolean(0!==this.options.scrollableElements.length)}[u](e){this.findScrollableElementFrame=requestAnimationFrame(()=>{this.scrollableElement=this.getScrollableElement(e.source)})}[l](e){if(this.findScrollableElementFrame=requestAnimationFrame(()=>{this.scrollableElement=this.getScrollableElement(e.sensorEvent.target)}),!this.scrollableElement)return;const t=e.sensorEvent,n={x:0,y:0};"ontouchstart"in window&&(n.y=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,n.x=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0),this.currentMousePosition={clientX:t.clientX-n.x,clientY:t.clientY-n.y},this.scrollAnimationFrame=requestAnimationFrame(this[c])}[d](){cancelAnimationFrame(this.scrollAnimationFrame),cancelAnimationFrame(this.findScrollableElementFrame),this.scrollableElement=null,this.scrollAnimationFrame=null,this.findScrollableElementFrame=null,this.currentMousePosition=null}[c](){if(!this.scrollableElement||!this.currentMousePosition)return;cancelAnimationFrame(this.scrollAnimationFrame);const{speed:e,sensitivity:t}=this.options,n=this.scrollableElement.getBoundingClientRect(),r=n.bottom>window.innerHeight,a=n.top<0||r,i=_(),s=this.scrollableElement,o=this.currentMousePosition.clientX,u=this.currentMousePosition.clientY;if(s===document.body||s===document.documentElement||a){const{innerHeight:n,innerWidth:r}=window;u<t?i.scrollTop-=e:n-u<t&&(i.scrollTop+=e),o<t?i.scrollLeft-=e:r-o<t&&(i.scrollLeft+=e)}else{const{offsetHeight:r,offsetWidth:a}=s;n.top+r-u<t?s.scrollTop+=e:u-n.top<t&&(s.scrollTop-=e),n.left+a-o<t?s.scrollLeft+=e:o-n.left<t&&(s.scrollLeft-=e)}this.scrollAnimationFrame=requestAnimationFrame(this[c])}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,a=n(52),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default,t.defaultOptions=a.defaultOptions},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MirrorDestroyEvent=t.MirrorMoveEvent=t.MirrorAttachedEvent=t.MirrorCreatedEvent=t.MirrorCreateEvent=t.MirrorEvent=void 0;var r,a=n(0),i=(r=a)&&r.__esModule?r:{default:r};class s extends i.default{get source(){return this.data.source}get originalSource(){return this.data.originalSource}get sourceContainer(){return this.data.sourceContainer}get sensorEvent(){return this.data.sensorEvent}get dragEvent(){return this.data.dragEvent}get originalEvent(){return this.sensorEvent?this.sensorEvent.originalEvent:null}}t.MirrorEvent=s;class o extends s{}t.MirrorCreateEvent=o,o.type="mirror:create";class u extends s{get mirror(){return this.data.mirror}}t.MirrorCreatedEvent=u,u.type="mirror:created";class l extends s{get mirror(){return this.data.mirror}}t.MirrorAttachedEvent=l,l.type="mirror:attached";class d extends s{get mirror(){return this.data.mirror}}t.MirrorMoveEvent=d,d.type="mirror:move",d.cancelable=!0;class c extends s{get mirror(){return this.data.mirror}}t.MirrorDestroyEvent=c,c.type="mirror:destroy",c.cancelable=!0},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(54);Object.keys(r).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return r[e]}})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=t.getAppendableContainer=t.onScroll=t.onMirrorMove=t.onMirrorCreated=t.onDragStop=t.onDragMove=t.onDragStart=void 0;var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),s=(r=i)&&r.__esModule?r:{default:r},o=n(55);function u(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}const l=t.onDragStart=Symbol("onDragStart"),d=t.onDragMove=Symbol("onDragMove"),c=t.onDragStop=Symbol("onDragStop"),h=t.onMirrorCreated=Symbol("onMirrorCreated"),_=t.onMirrorMove=Symbol("onMirrorMove"),f=t.onScroll=Symbol("onScroll"),m=t.getAppendableContainer=Symbol("getAppendableContainer"),p=t.defaultOptions={constrainDimensions:!1,xAxis:!0,yAxis:!0,cursorOffsetX:null,cursorOffsetY:null};function y(e){let{source:t}=e,n=u(e,["source"]);return Y(e=>{const r=t.getBoundingClientRect();e(a({source:t,sourceRect:r},n))})}function g(e){let{sensorEvent:t,sourceRect:n,options:r}=e,i=u(e,["sensorEvent","sourceRect","options"]);return Y(e=>{const s=null===r.cursorOffsetY?t.clientY-n.top:r.cursorOffsetY,o=null===r.cursorOffsetX?t.clientX-n.left:r.cursorOffsetX;e(a({sensorEvent:t,sourceRect:n,mirrorOffset:{top:s,left:o},options:r},i))})}function v(e){let{mirror:t,source:n,options:r}=e,i=u(e,["mirror","source","options"]);return Y(e=>{let s,o;if(r.constrainDimensions){const e=getComputedStyle(n);s=e.getPropertyValue("height"),o=e.getPropertyValue("width")}t.style.position="fixed",t.style.pointerEvents="none",t.style.top=0,t.style.left=0,t.style.margin=0,r.constrainDimensions&&(t.style.height=s,t.style.width=o),e(a({mirror:t,source:n,options:r},i))})}function M(e){let{mirror:t,mirrorClass:n}=e,r=u(e,["mirror","mirrorClass"]);return Y(e=>{t.classList.add(n),e(a({mirror:t,mirrorClass:n},r))})}function L(e){let{mirror:t}=e,n=u(e,["mirror"]);return Y(e=>{t.removeAttribute("id"),delete t.id,e(a({mirror:t},n))})}function b({withFrame:e=!1,initial:t=!1}={}){return n=>{let{mirror:r,sensorEvent:i,mirrorOffset:s,initialY:o,initialX:l,scrollOffset:d,options:c}=n,h=u(n,["mirror","sensorEvent","mirrorOffset","initialY","initialX","scrollOffset","options"]);return Y(e=>{const n=a({mirror:r,sensorEvent:i,mirrorOffset:s,options:c},h);if(s){const e=i.clientX-s.left-d.x,a=i.clientY-s.top-d.y;c.xAxis&&c.yAxis||t?r.style.transform=`translate3d(${e}px, ${a}px, 0)`:c.xAxis&&!c.yAxis?r.style.transform=`translate3d(${e}px, ${o}px, 0)`:c.yAxis&&!c.xAxis&&(r.style.transform=`translate3d(${l}px, ${a}px, 0)`),t&&(n.initialX=e,n.initialY=a)}e(n)},{frame:e})}}function Y(e,{raf:t=!1}={}){return new Promise((n,r)=>{t?requestAnimationFrame(()=>{e(n,r)}):e(n,r)})}t.default=class extends s.default{constructor(e){super(e),this.options=a({},p,this.getOptions()),this.scrollOffset={x:0,y:0},this.initialScrollOffset={x:window.scrollX,y:window.scrollY},this[l]=this[l].bind(this),this[d]=this[d].bind(this),this[c]=this[c].bind(this),this[h]=this[h].bind(this),this[_]=this[_].bind(this),this[f]=this[f].bind(this)}attach(){this.draggable.on("drag:start",this[l]).on("drag:move",this[d]).on("drag:stop",this[c]).on("mirror:created",this[h]).on("mirror:move",this[_])}detach(){this.draggable.off("drag:start",this[l]).off("drag:move",this[d]).off("drag:stop",this[c]).off("mirror:created",this[h]).off("mirror:move",this[_])}getOptions(){return this.draggable.options.mirror||{}}[l](e){if(e.canceled())return;"ontouchstart"in window&&document.addEventListener("scroll",this[f],!0),this.initialScrollOffset={x:window.scrollX,y:window.scrollY};const{source:t,originalSource:n,sourceContainer:r,sensorEvent:a}=e,i=new o.MirrorCreateEvent({source:t,originalSource:n,sourceContainer:r,sensorEvent:a,dragEvent:e});if(this.draggable.trigger(i),function(e){return/^drag/.test(e.originalEvent.type)}(a)||i.canceled())return;const s=this[m](t)||r;this.mirror=t.cloneNode(!0);const u=new o.MirrorCreatedEvent({source:t,originalSource:n,sourceContainer:r,sensorEvent:a,dragEvent:e,mirror:this.mirror}),l=new o.MirrorAttachedEvent({source:t,originalSource:n,sourceContainer:r,sensorEvent:a,dragEvent:e,mirror:this.mirror});this.draggable.trigger(u),s.appendChild(this.mirror),this.draggable.trigger(l)}[d](e){if(!this.mirror||e.canceled())return;const{source:t,originalSource:n,sourceContainer:r,sensorEvent:a}=e,i=new o.MirrorMoveEvent({source:t,originalSource:n,sourceContainer:r,sensorEvent:a,dragEvent:e,mirror:this.mirror});this.draggable.trigger(i)}[c](e){if("ontouchstart"in window&&document.removeEventListener("scroll",this[f],!0),this.initialScrollOffset={x:0,y:0},this.scrollOffset={x:0,y:0},!this.mirror)return;const{source:t,sourceContainer:n,sensorEvent:r}=e,a=new o.MirrorDestroyEvent({source:t,mirror:this.mirror,sourceContainer:n,sensorEvent:r,dragEvent:e});this.draggable.trigger(a),a.canceled()||this.mirror.parentNode.removeChild(this.mirror)}[f](){this.scrollOffset={x:window.scrollX-this.initialScrollOffset.x,y:window.scrollY-this.initialScrollOffset.y}}[h]({mirror:e,source:t,sensorEvent:n}){const r={mirror:e,source:t,sensorEvent:n,mirrorClass:this.draggable.getClassNameFor("mirror"),scrollOffset:this.scrollOffset,options:this.options};return Promise.resolve(r).then(y).then(g).then(v).then(M).then(b({initial:!0})).then(L).then(e=>{let{mirrorOffset:t,initialX:n,initialY:r}=e,i=u(e,["mirrorOffset","initialX","initialY"]);return this.mirrorOffset=t,this.initialX=n,this.initialY=r,a({mirrorOffset:t,initialX:n,initialY:r},i)})}[_](e){if(e.canceled())return null;const t={mirror:e.mirror,sensorEvent:e.sensorEvent,mirrorOffset:this.mirrorOffset,options:this.options,initialX:this.initialX,initialY:this.initialY,scrollOffset:this.scrollOffset};return Promise.resolve(t).then(b({raf:!0}))}[m](e){const t=this.options.appendTo;return"string"==typeof t?document.querySelector(t):t instanceof HTMLElement?t:"function"==typeof t?t(e):e.parentNode}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,a=n(56),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default,t.defaultOptions=a.defaultOptions},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),s=(r=i)&&r.__esModule?r:{default:r};const o=Symbol("onInitialize"),u=Symbol("onDestroy"),l={};t.default=class extends s.default{constructor(e){super(e),this.options=a({},l,this.getOptions()),this[o]=this[o].bind(this),this[u]=this[u].bind(this)}attach(){this.draggable.on("draggable:initialize",this[o]).on("draggable:destroy",this[u])}detach(){this.draggable.off("draggable:initialize",this[o]).off("draggable:destroy",this[u])}getOptions(){return this.draggable.options.focusable||{}}getElements(){return[...this.draggable.containers,...this.draggable.getDraggableElements()]}[o](){requestAnimationFrame(()=>{this.getElements().forEach(e=>(function(e){Boolean(!e.getAttribute("tabindex")&&-1===e.tabIndex)&&(d.push(e),e.tabIndex=0)})(e))})}[u](){requestAnimationFrame(()=>{this.getElements().forEach(e=>(function(e){const t=d.indexOf(e);-1!==t&&(e.tabIndex=-1,d.splice(t,1))})(e))})}};const d=[]},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=n(58),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(e){this.draggable=e}attach(){throw new Error("Not Implemented")}detach(){throw new Error("Not Implemented")}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(1),s=(r=i)&&r.__esModule?r:{default:r};const o=Symbol("onInitialize"),u=Symbol("onDestroy"),l=Symbol("announceEvent"),d=Symbol("announceMessage"),c="aria-relevant",h="aria-atomic",_="aria-live",f="role",m=t.defaultOptions={expire:7e3};t.default=class extends s.default{constructor(e){super(e),this.options=a({},m,this.getOptions()),this.originalTriggerMethod=this.draggable.trigger,this[o]=this[o].bind(this),this[u]=this[u].bind(this)}attach(){this.draggable.on("draggable:initialize",this[o])}detach(){this.draggable.off("draggable:destroy",this[u])}getOptions(){return this.draggable.options.announcements||{}}[l](e){const t=this.options[e.type];t&&"string"==typeof t&&this[d](t),t&&"function"==typeof t&&this[d](t(e))}[d](e){!function(e,{expire:t}){const n=document.createElement("div");n.textContent=e,p.appendChild(n),setTimeout(()=>{p.removeChild(n)},t)}(e,{expire:this.options.expire})}[o](){this.draggable.trigger=e=>{try{this[l](e)}finally{this.originalTriggerMethod.call(this.draggable,e)}}}[u](){this.draggable.trigger=this.originalTriggerMethod}};const p=function(){const e=document.createElement("div");return e.setAttribute("id","draggable-live-region"),e.setAttribute(c,"additions"),e.setAttribute(h,"true"),e.setAttribute(_,"assertive"),e.setAttribute(f,"log"),e.style.position="fixed",e.style.width="1px",e.style.height="1px",e.style.top="-1px",e.style.overflow="hidden",e}();document.addEventListener("DOMContentLoaded",()=>{document.body.appendChild(p)})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultOptions=void 0;var r,a=n(61),i=(r=a)&&r.__esModule?r:{default:r};t.default=i.default,t.defaultOptions=a.defaultOptions},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DraggableDestroyEvent=t.DraggableInitializedEvent=t.DraggableEvent=void 0;var r,a=n(0),i=(r=a)&&r.__esModule?r:{default:r};class s extends i.default{get draggable(){return this.data.draggable}}t.DraggableEvent=s,s.type="draggable";class o extends s{}t.DraggableInitializedEvent=o,o.type="draggable:initialize";class u extends s{}t.DraggableDestroyEvent=u,u.type="draggable:destroy"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};const a=Symbol("canceled");class i{constructor(e){this[a]=!1,this.data=e}get type(){return this.constructor.type}get cancelable(){return this.constructor.cancelable}cancel(){this[a]=!0}canceled(){return Boolean(this[a])}clone(e){return new this.constructor(r({},this.data,e))}}t.default=i,i.type="event",i.cancelable=!1},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DragStopEvent=t.DragPressureEvent=t.DragOutContainerEvent=t.DragOverContainerEvent=t.DragOutEvent=t.DragOverEvent=t.DragMoveEvent=t.DragStartEvent=t.DragEvent=void 0;var r,a=n(0),i=(r=a)&&r.__esModule?r:{default:r};class s extends i.default{get source(){return this.data.source}get originalSource(){return this.data.originalSource}get mirror(){return this.data.mirror}get sourceContainer(){return this.data.sourceContainer}get sensorEvent(){return this.data.sensorEvent}get originalEvent(){return this.sensorEvent?this.sensorEvent.originalEvent:null}}t.DragEvent=s,s.type="drag";class o extends s{}t.DragStartEvent=o,o.type="drag:start",o.cancelable=!0;class u extends s{}t.DragMoveEvent=u,u.type="drag:move";class l extends s{get overContainer(){return this.data.overContainer}get over(){return this.data.over}}t.DragOverEvent=l,l.type="drag:over",l.cancelable=!0;class d extends s{get overContainer(){return this.data.overContainer}get over(){return this.data.over}}t.DragOutEvent=d,d.type="drag:out";class c extends s{get overContainer(){return this.data.overContainer}}t.DragOverContainerEvent=c,c.type="drag:over:container";class h extends s{get overContainer(){return this.data.overContainer}}t.DragOutContainerEvent=h,h.type="drag:out:container";class _ extends s{get pressure(){return this.data.pressure}}t.DragPressureEvent=_,_.type="drag:pressure";class f extends s{}t.DragStopEvent=f,f.type="drag:stop"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Plugins=t.Sensors=t.Sortable=t.Swappable=t.Droppable=t.Draggable=t.BasePlugin=t.BaseEvent=void 0;var r=n(5);Object.defineProperty(t,"Draggable",{enumerable:!0,get:function(){return h(r).default}});var a=n(34);Object.defineProperty(t,"Droppable",{enumerable:!0,get:function(){return h(a).default}});var i=n(31);Object.defineProperty(t,"Swappable",{enumerable:!0,get:function(){return h(i).default}});var s=n(28);Object.defineProperty(t,"Sortable",{enumerable:!0,get:function(){return h(s).default}});var o=h(n(0)),u=h(n(1)),l=c(n(6)),d=c(n(25));function c(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function h(e){return e&&e.__esModule?e:{default:e}}t.BaseEvent=o.default,t.BasePlugin=u.default,t.Sensors=l,t.Plugins=d}])},e.exports=r()},function(e,t,n){e.exports=n(171)},function(e,t,n){"use strict";var r=n(1),a=n(10),i=n(146),s=n(6);function o(e){var t=new i(e),n=a(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var u=o(s);u.Axios=i,u.create=function(e){return o(r.merge(s,e))},u.Cancel=n(14),u.CancelToken=n(161),u.isCancel=n(13),u.all=function(e){return Promise.all(e)},u.spread=n(162),e.exports=u,e.exports.default=u},function(e,t){function n(e){return!!e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)}e.exports=function(e){return null!=e&&(n(e)||function(e){return"function"==typeof e.readFloatLE&&"function"==typeof e.slice&&n(e.slice(0,0))}(e)||!!e._isBuffer)}},function(e,t,n){"use strict";var r=n(6),a=n(1),i=n(156),s=n(157);function o(e){this.defaults=e,this.interceptors={request:new i,response:new i}}o.prototype.request=function(e){"string"==typeof e&&(e=a.merge({url:arguments[0]},arguments[1])),(e=a.merge(r,{method:"get"},this.defaults,e)).method=e.method.toLowerCase();var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach(function(e){t.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){t.push(e.fulfilled,e.rejected)});t.length;)n=n.then(t.shift(),t.shift());return n},a.forEach(["delete","get","head","options"],function(e){o.prototype[e]=function(t,n){return this.request(a.merge(n||{},{method:e,url:t}))}}),a.forEach(["post","put","patch"],function(e){o.prototype[e]=function(t,n,r){return this.request(a.merge(r||{},{method:e,url:t,data:n}))}}),e.exports=o},function(e,t){var n,r,a=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function o(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,l=[],d=!1,c=-1;function h(){d&&u&&(d=!1,u.length?l=u.concat(l):c=-1,l.length&&_())}function _(){if(!d){var e=o(h);d=!0;for(var t=l.length;t;){for(u=l,l=[];++c<t;)u&&u[c].run();c=-1,t=l.length}u=null,d=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function f(e,t){this.fun=e,this.array=t}function m(){}a.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];l.push(new f(e,t)),1!==l.length||d||o(_)},f.prototype.run=function(){this.fun.apply(null,this.array)},a.title="browser",a.browser=!0,a.env={},a.argv=[],a.version="",a.versions={},a.on=m,a.addListener=m,a.once=m,a.off=m,a.removeListener=m,a.removeAllListeners=m,a.emit=m,a.prependListener=m,a.prependOnceListener=m,a.listeners=function(e){return[]},a.binding=function(e){throw new Error("process.binding is not supported")},a.cwd=function(){return"/"},a.chdir=function(e){throw new Error("process.chdir is not supported")},a.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t){r.forEach(e,function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])})}},function(e,t,n){"use strict";var r=n(12);e.exports=function(e,t,n){var a=n.config.validateStatus;n.status&&a&&!a(n.status)?t(r("Request failed with status code "+n.status,n.config,null,n.request,n)):e(n)}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,a){return e.config=t,n&&(e.code=n),e.request=r,e.response=a,e}},function(e,t,n){"use strict";var r=n(1);function a(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(a(t)+"="+a(e))}))}),i=s.join("&")}return i&&(e+=(-1===e.indexOf("?")?"?":"&")+i),e}},function(e,t,n){"use strict";var r=n(1),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&a.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}}),s):s}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=a(window.location.href),function(t){var n=r.isString(t)?a(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function a(){this.message="String contains an invalid character"}a.prototype=new Error,a.prototype.code=5,a.prototype.name="InvalidCharacterError",e.exports=function(e){for(var t,n,i=String(e),s="",o=0,u=r;i.charAt(0|o)||(u="=",o%1);s+=u.charAt(63&t>>8-o%1*8)){if((n=i.charCodeAt(o+=.75))>255)throw new a;t=t<<8|n}return s}},function(e,t,n){"use strict";var r=n(1);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,a,i,s){var o=[];o.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),r.isString(a)&&o.push("path="+a),r.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(1);function a(){this.handlers=[]}a.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},a.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},a.prototype.forEach=function(e){r.forEach(this.handlers,function(t){null!==t&&e(t)})},e.exports=a},function(e,t,n){"use strict";var r=n(1),a=n(158),i=n(13),s=n(6),o=n(159),u=n(160);function l(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return l(e),e.baseURL&&!o(e.url)&&(e.url=u(e.baseURL,e.url)),e.headers=e.headers||{},e.data=a(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers||{}),r.forEach(["delete","get","head","post","put","patch","common"],function(t){delete e.headers[t]}),(e.adapter||s.adapter)(e).then(function(t){return l(e),t.data=a(t.data,t.headers,e.transformResponse),t},function(t){return i(t)||(l(e),t&&t.response&&(t.response.data=a(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)})}},function(e,t,n){"use strict";var r=n(1);e.exports=function(e,t,n){return r.forEach(n,function(n){e=n(e,t)}),e}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(14);function a(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(e){t=e});var n=this;e(function(e){n.reason||(n.reason=new r(e),t(n.reason))})}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var e;return{token:new a(function(t){e=t}),cancel:e}},e.exports=a},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";e.exports=e=>encodeURIComponent(e).replace(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`)},function(e,t,n){"use strict";var r=new RegExp("%[a-f0-9]{2}","gi"),a=new RegExp("(%[a-f0-9]{2})+","gi");function i(e,t){try{return decodeURIComponent(e.join(""))}catch(e){}if(1===e.length)return e;t=t||1;var n=e.slice(0,t),r=e.slice(t);return Array.prototype.concat.call([],i(n),i(r))}function s(e){try{return decodeURIComponent(e)}catch(a){for(var t=e.match(r),n=1;n<t.length;n++)t=(e=i(t,n).join("")).match(r);return e}}e.exports=function(e){if("string"!=typeof e)throw new TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return e=e.replace(/\+/g," "),decodeURIComponent(e)}catch(t){return function(e){for(var t={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(e);n;){try{t[n[0]]=decodeURIComponent(n[0])}catch(e){var r=s(n[0]);r!==n[0]&&(t[n[0]]=r)}n=a.exec(e)}t["%C2"]="�";for(var i=Object.keys(t),o=0;o<i.length;o++){var u=i[o];e=e.replace(new RegExp(u,"g"),t[u])}return e}(e)}}},function(e,t,n){"use strict";var r=n(3);n.n(r).a},function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"\n.fade-enter-active[data-v-7996f10f] {\n    transition: opacity 800ms ease-in-out;\n}\n.fade-enter-to[data-v-7996f10f] {\n    opacity: 1;\n}\n.fade-enter[data-v-7996f10f] {\n    opacity: 0;\n}\n.image[data-v-7996f10f] {\n    display: inline-block;\n    position: relative;\n    overflow: hidden;\n    -webkit-animation-duration: 1s;\n    -webkit-animation-fill-mode: forwards;\n    -webkit-animation-iteration-count: infinite;\n    -webkit-animation-name: placeholderSkeleton-data-v-7996f10f;\n    -webkit-animation-timing-function: linear;\n    background: #f6f7f8;\n    background-image: -webkit-gradient(linear, left center, right center, from(#f6f7f8), color-stop(.2, #edeef1), color-stop(.4, #f6f7f8), to(#f6f7f8));\n    background-image: -webkit-linear-gradient(left, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);\n    background-repeat: no-repeat;\n    position: relative;\n}\n.image img[data-v-7996f10f] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    transform: scale(1.1);\n    transition: 800ms all ease-in-out;\n}\n.image img.loaded[data-v-7996f10f] {\n    transform: scale(1);\n}\n@-webkit-keyframes placeholderSkeleton-data-v-7996f10f {\n0% {\n        background-position: -468px 0;\n}\n100% {\n        background-position: 468px 0;\n}\n}\n.blurred[data-v-7996f10f] {\n    filter: blur(25px);\n    -webkit-filter: blur(25px);\n    -moz-filter: blur(25px);\n    -o-filter: blur(25px);\n    -ms-filter: blur(25px);\n}\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var a,i=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(a=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(a)+")")})}},function(e,t,n){"use strict";var r=n(4);n.n(r).a},function(e,t,n){(e.exports=n(15)(!1)).push([e.i,"\n.loader[data-v-9f7987f0] {\n    margin: auto;\n    width: 50px;\n    height: 40px;\n    text-align: center;\n    font-size: 10px;\n}\n.loader > div[data-v-9f7987f0] {\n    height: 100%;\n    width: 6px;\n    display: inline-block;\n\n    animation: sk-stretchdelay-data-v-9f7987f0 1.2s infinite ease-in-out;\n}\n.loader .rect2[data-v-9f7987f0] {\n    animation-delay: -1.1s;\n}\n.loader .rect3[data-v-9f7987f0] {\n    animation-delay: -1.0s;\n}\n.loader .rect4[data-v-9f7987f0] {\n    animation-delay: -0.9s;\n}\n.loader .rect5[data-v-9f7987f0] {\n    animation-delay: -0.8s;\n}\n@-webkit-keyframes sk-stretchdelay-data-v-9f7987f0 {\n0%, 40%, 100% { transform: scaleY(0.4)\n}\n20% { transform: scaleY(1.0)\n}\n}\n@keyframes sk-stretchdelay-data-v-9f7987f0 {\n0%, 40%, 100% { \n        transform: scaleY(0.4);\n}\n20% { \n        transform: scaleY(1.0);\n}\n}\n",""])},function(e,t,n){var r={"./af":17,"./af.js":17,"./ar":18,"./ar-dz":19,"./ar-dz.js":19,"./ar-kw":20,"./ar-kw.js":20,"./ar-ly":21,"./ar-ly.js":21,"./ar-ma":22,"./ar-ma.js":22,"./ar-sa":23,"./ar-sa.js":23,"./ar-tn":24,"./ar-tn.js":24,"./ar.js":18,"./az":25,"./az.js":25,"./be":26,"./be.js":26,"./bg":27,"./bg.js":27,"./bm":28,"./bm.js":28,"./bn":29,"./bn.js":29,"./bo":30,"./bo.js":30,"./br":31,"./br.js":31,"./bs":32,"./bs.js":32,"./ca":33,"./ca.js":33,"./cs":34,"./cs.js":34,"./cv":35,"./cv.js":35,"./cy":36,"./cy.js":36,"./da":37,"./da.js":37,"./de":38,"./de-at":39,"./de-at.js":39,"./de-ch":40,"./de-ch.js":40,"./de.js":38,"./dv":41,"./dv.js":41,"./el":42,"./el.js":42,"./en-au":43,"./en-au.js":43,"./en-ca":44,"./en-ca.js":44,"./en-gb":45,"./en-gb.js":45,"./en-ie":46,"./en-ie.js":46,"./en-il":47,"./en-il.js":47,"./en-nz":48,"./en-nz.js":48,"./eo":49,"./eo.js":49,"./es":50,"./es-do":51,"./es-do.js":51,"./es-us":52,"./es-us.js":52,"./es.js":50,"./et":53,"./et.js":53,"./eu":54,"./eu.js":54,"./fa":55,"./fa.js":55,"./fi":56,"./fi.js":56,"./fo":57,"./fo.js":57,"./fr":58,"./fr-ca":59,"./fr-ca.js":59,"./fr-ch":60,"./fr-ch.js":60,"./fr.js":58,"./fy":61,"./fy.js":61,"./gd":62,"./gd.js":62,"./gl":63,"./gl.js":63,"./gom-latn":64,"./gom-latn.js":64,"./gu":65,"./gu.js":65,"./he":66,"./he.js":66,"./hi":67,"./hi.js":67,"./hr":68,"./hr.js":68,"./hu":69,"./hu.js":69,"./hy-am":70,"./hy-am.js":70,"./id":71,"./id.js":71,"./is":72,"./is.js":72,"./it":73,"./it.js":73,"./ja":74,"./ja.js":74,"./jv":75,"./jv.js":75,"./ka":76,"./ka.js":76,"./kk":77,"./kk.js":77,"./km":78,"./km.js":78,"./kn":79,"./kn.js":79,"./ko":80,"./ko.js":80,"./ku":81,"./ku.js":81,"./ky":82,"./ky.js":82,"./lb":83,"./lb.js":83,"./lo":84,"./lo.js":84,"./lt":85,"./lt.js":85,"./lv":86,"./lv.js":86,"./me":87,"./me.js":87,"./mi":88,"./mi.js":88,"./mk":89,"./mk.js":89,"./ml":90,"./ml.js":90,"./mn":91,"./mn.js":91,"./mr":92,"./mr.js":92,"./ms":93,"./ms-my":94,"./ms-my.js":94,"./ms.js":93,"./mt":95,"./mt.js":95,"./my":96,"./my.js":96,"./nb":97,"./nb.js":97,"./ne":98,"./ne.js":98,"./nl":99,"./nl-be":100,"./nl-be.js":100,"./nl.js":99,"./nn":101,"./nn.js":101,"./pa-in":102,"./pa-in.js":102,"./pl":103,"./pl.js":103,"./pt":104,"./pt-br":105,"./pt-br.js":105,"./pt.js":104,"./ro":106,"./ro.js":106,"./ru":107,"./ru.js":107,"./sd":108,"./sd.js":108,"./se":109,"./se.js":109,"./si":110,"./si.js":110,"./sk":111,"./sk.js":111,"./sl":112,"./sl.js":112,"./sq":113,"./sq.js":113,"./sr":114,"./sr-cyrl":115,"./sr-cyrl.js":115,"./sr.js":114,"./ss":116,"./ss.js":116,"./sv":117,"./sv.js":117,"./sw":118,"./sw.js":118,"./ta":119,"./ta.js":119,"./te":120,"./te.js":120,"./tet":121,"./tet.js":121,"./tg":122,"./tg.js":122,"./th":123,"./th.js":123,"./tl-ph":124,"./tl-ph.js":124,"./tlh":125,"./tlh.js":125,"./tr":126,"./tr.js":126,"./tzl":127,"./tzl.js":127,"./tzm":128,"./tzm-latn":129,"./tzm-latn.js":129,"./tzm.js":128,"./ug-cn":130,"./ug-cn.js":130,"./uk":131,"./uk.js":131,"./ur":132,"./ur.js":132,"./uz":133,"./uz-latn":134,"./uz-latn.js":134,"./uz.js":133,"./vi":135,"./vi.js":135,"./x-pseudo":136,"./x-pseudo.js":136,"./yo":137,"./yo.js":137,"./zh-cn":138,"./zh-cn.js":138,"./zh-hk":139,"./zh-hk.js":139,"./zh-tw":140,"./zh-tw.js":140};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=170},function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"Banner",function(){return o}),n.d(r,"Button",function(){return l}),n.d(r,"Card",function(){return c}),n.d(r,"Chart",function(){return ct}),n.d(r,"Checkbox",function(){return ft}),n.d(r,"Collapse",function(){return gt}),n.d(r,"Datatable",function(){return Dt}),n.d(r,"Dropdown",function(){return jt}),n.d(r,"Img",function(){return Ht}),n.d(r,"Input",function(){return Ct}),n.d(r,"Loader",function(){return Wt}),n.d(r,"Modal",function(){return zt}),n.d(r,"Pagination",function(){return Rt}),n.d(r,"Password",function(){return qt}),n.d(r,"Radio",function(){return Jt}),n.d(r,"Select",function(){return Zt}),n.d(r,"Slug",function(){return Qt}),n.d(r,"Sortable",function(){return sn}),n.d(r,"Tabs",function(){return ln}),n.d(r,"Textarea",function(){return cn}),n.d(r,"Toast",function(){return _n}),n.d(r,"Toggle",function(){return mn}),n.d(r,"Tooltip",function(){return wn}),n.d(r,"Treeview",function(){return Tn}),n.d(r,"Upload",function(){return xn});var a={};n.r(a),n.d(a,"vClickOutside",function(){return An}),n.d(a,"vCollapse",function(){return Wn}),n.d(a,"vModal",function(){return zn}),n.d(a,"vToast",function(){return Rn}),n.d(a,"vTooltip",function(){return qn});function i(e,t,n,r,a,i,s,o){var u,l="function"==typeof e?e.options:e;if(t&&(l.render=t,l.staticRenderFns=n,l._compiled=!0),r&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),a&&a.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},l._ssrRegister=u):a&&(u=o?function(){a.call(this,this.$root.$options.shadowRoot)}:a),u)if(l.functional){l._injectStyles=u;var d=l.render;l.render=function(e,t){return u.call(t),d(e,t)}}else{var c=l.beforeCreate;l.beforeCreate=c?[].concat(c,u):[u]}return{exports:e,options:l}}var s=i({name:"p-banner",data:function(){return{shouldShow:this.show,themes:{default:"",primary:"banner--primary",secondary:"banner--secondary",info:"banner--info",success:"banner--success",warning:"banner--warning",danger:"banner--danger",dark:"banner--dark"}}},props:{title:{required:!1,type:String,default:""},theme:{required:!1,type:String,default:"default"},show:{required:!1,type:Boolean,default:!0},autoClose:{required:!1,type:Boolean,default:!1},duration:{required:!1,type:Number,default:5e3},noCloseButton:{required:!1,type:Boolean,default:!1}},methods:{dismiss:function(){this.shouldShow=!1}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.shouldShow?n("div",{staticClass:"banner",class:[e.themes[e.theme]],attrs:{role:"alert"}},[n("div",{staticClass:"banner__header"},[n("div",{staticClass:"banner__header--title"},[e.title?n("span",{domProps:{innerHTML:e._s(e.title)}}):e._e()]),e._v(" "),n("div",[e.noCloseButton?e._e():n("a",{staticClass:"banner__header--close-button",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.dismiss(t)}}},[e._v("×")])])]),e._v(" "),e._t("default")],2):e._e()},[],!1,null,null,null).exports,o=function(e){e.component(s.name,s)},u=i({name:"p-button",data:function(){return{themes:{default:"",primary:"button--primary",secondary:"button--secondary",info:"button--info",success:"button--success",warning:"button--warning",danger:"button--danger",dark:"button--dark"},sizes:{normal:"",small:"button--small",large:"button--large"}}},props:{type:{required:!1,type:String,default:"button"},to:{required:!1,type:String|Object},href:{required:!1,type:String},theme:{required:!1,type:String,default:"default"},size:{required:!1,type:String,default:"normal"},disabled:{required:!1,type:Boolean,default:!1}}},function(){var e=this,t=e.$createElement;return(e._self._c||t)("button",{staticClass:"button",class:[e.themes[e.theme],e.sizes[e.size]],attrs:{type:e.type,disabled:e.disabled},on:{click:function(t){return e.$emit("click",t)}}},[e._t("default")],2)},[],!1,null,null,null).exports,l=function(e){e.component(u.name,u)},d=i({name:"p-card",data:function(){return{themes:{default:"",primary:"card--primary",secondary:"card--secondary",info:"card--info",success:"card--success",warning:"card--warning",danger:"card--danger",dark:"card--dark"}}},props:{noBody:{required:!1,type:Boolean,default:!1},theme:{required:!1,type:String,default:"default"}},computed:{styles:function(){var e={};return e.card__body=!this.noBody,e[this.themes[this.theme]]=!0,e}}},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card"},[t("div",{class:this.styles},[this._t("default")],2)])},[],!1,null,null,null).exports,c=function(e){e.component(d.name,d)};function h(e,t){return"string"==typeof e?(t||document).querySelector(e):e||null}function f(e){var t=e.getBoundingClientRect();return{top:t.top+(document.documentElement.scrollTop||document.body.scrollTop),left:t.left+(document.documentElement.scrollLeft||document.body.scrollLeft)}}function m(e){return e.titleHeight+e.margins.top+e.paddings.top}function p(e){return e.margins.left+e.paddings.left}function y(e){return e.margins.top+e.margins.bottom+e.paddings.top+e.paddings.bottom+e.titleHeight+e.legendHeight}function g(e){return e.margins.left+e.margins.right+e.paddings.left+e.paddings.right}function v(e){return parseFloat(e.toFixed(2))}function M(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];n||(n=r?e[0]:e[e.length-1]);var a=new Array(Math.abs(t)).fill(n);return r?a.concat(e):e.concat(a)}function L(e,t){return(e+"").length*t}function b(e,t){return{x:Math.sin(e*he)*t,y:Math.cos(e*he)*t}}function Y(e,t){var n=void 0,r=void 0;return e<=t?(n=t-e,r=e):(n=e-t,r=t),[n,r]}function w(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:t.length-e.length;return n>0?e=M(e,n):t=M(t,n),[e,t]}function k(e){return e>255?255:e<0?0:e}function D(e,t){var n=pe(e),r=!1;"#"==n[0]&&(n=n.slice(1),r=!0);var a=parseInt(n,16),i=k((a>>16)+t),s=k((a>>8&255)+t);return(r?"#":"")+(k((255&a)+t)|s<<8|i<<16).toString(16)}function T(e,t){return"string"==typeof e?(t||document).querySelector(e):e||null}function S(e,t){var n=document.createElementNS("http://www.w3.org/2000/svg",e);for(var r in t){var a=t[r];if("inside"===r)T(a).appendChild(n);else if("around"===r){var i=T(a);i.parentNode.insertBefore(n,i),n.appendChild(i)}else"styles"===r?"object"===(void 0===a?"undefined":ge(a))&&Object.keys(a).map(function(e){n.style[e]=a[e]}):("className"===r&&(r="class"),"innerHTML"===r?n.textContent=a:n.setAttribute(r,a))}return n}function x(e,t,n,r){return S("stop",{inside:e,style:"stop-color: "+n,offset:t,"stop-opacity":r})}function j(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,r={className:e,transform:t};return n&&(r.inside=n),S("g",r)}function O(e){return S("path",{className:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",d:e,styles:{stroke:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"none",fill:arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none"}})}function E(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r="path-fill-gradient-"+t+"-"+(n?"lighter":"default"),a=function(e,t){return S("linearGradient",{inside:e,id:t,x1:0,x2:0,y1:0,y2:1})}(e,r),i=[1,.6,.2];return n&&(i=[.4,.2,0]),x(a,"0%",t,i[0]),x(a,"50%",t,i[1]),x(a,"100%",t,i[2]),r}function H(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"none",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},s={className:e,x:t,y:n,width:r,height:r,fill:a};return Object.keys(i).map(function(e){s[e]=i[e]}),S("rect",s)}function P(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=a.fontSize||Le;return S("text",{className:e,x:t,y:n,dy:(void 0!==a.dy?a.dy:i/2)+"px","font-size":i+"px",fill:a.fill||Ye,"text-anchor":a.textAnchor||"start",innerHTML:r})}function C(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};a.stroke||(a.stroke=be),a.lineType||(a.lineType="");var i=S("line",{className:"line-horizontal "+a.className+("dashed"===a.lineType?"dashed":""),x1:n,x2:r,y1:0,y2:0,styles:{stroke:a.stroke}}),s=S("text",{x:n<r?n-Me:n+Me,y:0,dy:Le/2-2+"px","font-size":Le+"px","text-anchor":n<r?"end":"start",innerHTML:t+""}),o=S("g",{transform:"translate(0, "+e+")","stroke-opacity":1});return 0!==s&&"0"!==s||(o.style.stroke="rgba(27, 31, 35, 0.6)"),o.appendChild(i),o.appendChild(s),o}function A(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};r.pos||(r.pos="bottom"),r.offset||(r.offset=0),r.mode||(r.mode="span"),r.stroke||(r.stroke=be),r.className||(r.className="");var a=n+ve,i="span"===r.mode?-1*ve:n;return"tick"===r.mode&&"top"===r.pos&&(a=-1*ve,i=0),function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};a.stroke||(a.stroke=be);var i=S("line",{className:"line-vertical "+a.className,x1:0,x2:0,y1:n,y2:r,styles:{stroke:a.stroke}}),s=S("text",{x:0,y:n>r?n+Me:n-Me-Le,dy:Le+"px","font-size":Le+"px","text-anchor":"middle",innerHTML:t+""}),o=S("g",{transform:"translate("+e+", 0)"});return o.appendChild(i),o.appendChild(s),o}(e,t,a,i,{stroke:r.stroke,className:r.className,lineType:r.lineType})}function F(e,t,n,r){var a="string"==typeof t?t:t.join(", ");return[e,{transform:n.join(", ")},r,Oe,"translate",{transform:a}]}function W(e,t,n){return F(e,[0,n],[0,t],xe)}function N(e,t){e.style.transform=t,e.style.webkitTransform=t,e.style.msTransform=t,e.style.mozTransform=t,e.style.oTransform=t}function z(e,t){var n=[],r=[];t.map(function(e){var t,a,i=e[0],s=i.parentNode;e[0]=i;var o=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"linear",a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},s=e.cloneNode(!0),o=e.cloneNode(!0);for(var u in t){var l=void 0;l="transform"===u?document.createElementNS("http://www.w3.org/2000/svg","animateTransform"):document.createElementNS("http://www.w3.org/2000/svg","animate");var d=i[u]||e.getAttribute(u),c=t[u],h={attributeName:u,from:d,to:c,begin:"0s",dur:n/1e3+"s",values:d+";"+c,keySplines:He[r],keyTimes:"0;1",calcMode:"spline",fill:"freeze"};for(var _ in a&&(h.type=a),h)l.setAttribute(_,h[_]);s.appendChild(l),a?o.setAttribute(u,"translate("+c+")"):o.setAttribute(u,c)}return[s,o]}.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e)),u=Ee(o,2);t=u[0],a=u[1],n.push(a),r.push([t,s]),s.replaceChild(t,i)});var a=e.cloneNode(!0);return r.map(function(e,r){e[1].replaceChild(n[r],e[0]),t[r][0]=n[r]}),a}function I(e){var t=new Date(e);return t.setMinutes(t.getMinutes()-t.getTimezoneOffset()),t}function R(e){var t=e.getDate(),n=e.getMonth()+1;return[e.getFullYear(),(n>9?"":"0")+n,(t>9?"":"0")+t].join("-")}function B(e){return new Date(e.getTime())}function q(e,t){var n=V(e);return Math.ceil(function(e,t){var n=Re*Ie;return(I(t)-I(e))/n}(n,t)/ze)}function U(e,t){return e.getMonth()===t.getMonth()&&e.getFullYear()===t.getFullYear()}function $(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=Be[e];return t?n.slice(0,3):n}function J(e,t){return new Date(t,e+1,0)}function V(e){var t=B(e),n=t.getDay();return 0!==n&&G(t,-1*n),t}function G(e,t){e.setDate(e.getDate()+t)}function X(e,t,n){var r=Object.keys(Ve).filter(function(t){return e.includes(t)}),a=Ve[r[0]];return Object.assign(a,{constants:t,getData:n}),new Je(a)}function Z(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function K(e){if(0===e)return[0,0];if(isNaN(e))return{mantissa:-6755399441055744,exponent:972};var t=e>0?1:-1;if(!isFinite(e))return{mantissa:4503599627370496*t,exponent:972};e=Math.abs(e);var n=Math.floor(Math.log10(e));return[t*(e/Math.pow(10,n)),n]}function Q(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=K(e),r=et(n,2),a=r[0],i=r[1],s=t?t/Math.pow(10,i):0,o=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Math.ceil(e),r=Math.floor(t),a=n-r,i=a,s=1;a>5&&(a%2!=0&&(a=++n-r),i=a/2,s=2),a<=2&&(s=a/(i=4)),0===a&&(i=5,s=1);for(var o=[],u=0;u<=i;u++)o.push(r+s*u);return o}(a=a.toFixed(6),s);return o.map(function(e){return e*Math.pow(10,i)})}function ee(e){return e[1]-e[0]}function te(e,t){return v(t.zeroLine-e*t.scaleMultiplier)}function ne(e,t){return t.filter(function(t){return t<e}).length}function re(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css","top"===n&&r.firstChild?r.insertBefore(a,r.firstChild):r.appendChild(a),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(document.createTextNode(e))}}('.chart-container{position:relative;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}.chart-container .axis,.chart-container .chart-label{fill:#555b51}.chart-container .axis line,.chart-container .chart-label line{stroke:#dadada}.chart-container .dataset-units circle{stroke:#fff;stroke-width:2}.chart-container .dataset-units path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container .dataset-path{stroke-width:2px}.chart-container .path-group path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container line.dashed{stroke-dasharray:5,3}.chart-container .axis-line .specific-value{text-anchor:start}.chart-container .axis-line .y-line{text-anchor:end}.chart-container .axis-line .x-line{text-anchor:middle}.chart-container .legend-dataset-text{fill:#6c7680;font-weight:600}.graph-svg-tip{position:absolute;z-index:1;padding:10px;font-size:12px;color:#959da5;text-align:center;background:rgba(0,0,0,.8);border-radius:3px}.graph-svg-tip ol,.graph-svg-tip ul{padding-left:0;display:-webkit-box;display:-ms-flexbox;display:flex}.graph-svg-tip ul.data-point-list li{min-width:90px;-webkit-box-flex:1;-ms-flex:1;flex:1;font-weight:600}.graph-svg-tip strong{color:#dfe2e5;font-weight:600}.graph-svg-tip .svg-pointer{position:absolute;height:5px;margin:0 0 0 -5px;content:" ";border:5px solid transparent;border-top-color:rgba(0,0,0,.8)}.graph-svg-tip.comparison{padding:0;text-align:left;pointer-events:none}.graph-svg-tip.comparison .title{display:block;padding:10px;margin:0;font-weight:600;line-height:1;pointer-events:none}.graph-svg-tip.comparison ul{margin:0;white-space:nowrap;list-style:none}.graph-svg-tip.comparison li{display:inline-block;padding:5px 10px}',{});!function(){function e(e){this.value=e}function t(t){function n(a,i){try{var s=t[a](i),o=s.value;o instanceof e?Promise.resolve(o.value).then(function(e){n("next",e)},function(e){n("throw",e)}):r(s.done?"return":"normal",s.value)}catch(e){r("throw",e)}}function r(e,t){switch(e){case"return":a.resolve({value:t,done:!0});break;case"throw":a.reject(t);break;default:a.resolve({value:t,done:!1})}(a=a.next)?n(a.key,a.arg):i=null}var a,i;this._invoke=function(e,t){return new Promise(function(r,s){var o={key:e,arg:t,resolve:r,reject:s,next:null};i?i=i.next=o:(a=i=o,n(e,t))})},"function"!=typeof t.return&&(this.return=void 0)}"function"==typeof Symbol&&Symbol.asyncIterator&&(t.prototype[Symbol.asyncIterator]=function(){return this}),t.prototype.next=function(e){return this._invoke("next",e)},t.prototype.throw=function(e){return this._invoke("throw",e)},t.prototype.return=function(e){return this._invoke("return",e)}}();var ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};h.create=function(e,t){var n=document.createElement(e);for(var r in t){var a=t[r];if("inside"===r)h(a).appendChild(n);else if("around"===r){var i=h(a);i.parentNode.insertBefore(n,i),n.appendChild(i)}else"styles"===r?"object"===(void 0===a?"undefined":ae(a))&&Object.keys(a).map(function(e){n.style[e]=a[e]}):r in n?n[r]=a:n.setAttribute(r,a)}return n};var ie={margins:{top:10,bottom:10,left:20,right:20},paddings:{top:20,bottom:40,left:30,right:10},baseHeight:240,titleHeight:20,legendHeight:30,titleFontSize:12},se=700,oe=["line","bar"],ue=2,le=7,de=["light-blue","blue","violet","red","orange","yellow","green","light-green","purple","magenta","light-grey","dark-grey"],ce={bar:de,line:de,pie:de,percentage:de,heatmap:["#ebedf0","#c6e48b","#7bc96f","#239a3b","#196127"]},he=Math.PI/180,_e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),fe=function(){function e(t){var n=t.parent,r=void 0===n?null:n,a=t.colors,i=void 0===a?[]:a;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.parent=r,this.colors=i,this.titleName="",this.titleValue="",this.listValues=[],this.titleValueFirst=0,this.x=0,this.y=0,this.top=0,this.left=0,this.setup()}return _e(e,[{key:"setup",value:function(){this.makeTooltip()}},{key:"refresh",value:function(){this.fill(),this.calcPosition()}},{key:"makeTooltip",value:function(){var e=this;this.container=h.create("div",{inside:this.parent,className:"graph-svg-tip comparison",innerHTML:'<span class="title"></span>\n\t\t\t\t<ul class="data-point-list"></ul>\n\t\t\t\t<div class="svg-pointer"></div>'}),this.hideTip(),this.title=this.container.querySelector(".title"),this.dataPointList=this.container.querySelector(".data-point-list"),this.parent.addEventListener("mouseleave",function(){e.hideTip()})}},{key:"fill",value:function(){var e,t=this;this.index&&this.container.setAttribute("data-point-index",this.index),e=this.titleValueFirst?"<strong>"+this.titleValue+"</strong>"+this.titleName:this.titleName+"<strong>"+this.titleValue+"</strong>",this.title.innerHTML=e,this.dataPointList.innerHTML="",this.listValues.map(function(e,n){var r=t.colors[n]||"black",a=0===e.formatted||e.formatted?e.formatted:e.value,i=h.create("li",{styles:{"border-top":"3px solid "+r},innerHTML:'<strong style="display: block;">'+(0===a||a?a:"")+"</strong>\n\t\t\t\t\t"+(e.title?e.title:"")});t.dataPointList.appendChild(i)})}},{key:"calcPosition",value:function(){var e=this.container.offsetWidth;this.top=this.y-this.container.offsetHeight-5,this.left=this.x-e/2;var t=this.parent.offsetWidth-e,n=this.container.querySelector(".svg-pointer");if(this.left<0)n.style.left="calc(50% - "+-1*this.left+"px)",this.left=0;else if(this.left>t){var r="calc(50% + "+(this.left-t)+"px)";n.style.left=r,this.left=t}else n.style.left="50%"}},{key:"setValues",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1;this.titleName=n.name,this.titleValue=n.value,this.listValues=r,this.x=e,this.y=t,this.titleValueFirst=n.valueFirst||0,this.index=a,this.refresh()}},{key:"hideTip",value:function(){this.container.style.top="0px",this.container.style.left="0px",this.container.style.opacity="0"}},{key:"showTip",value:function(){this.container.style.top=this.top+"px",this.container.style.left=this.left+"px",this.container.style.opacity="1"}}]),e}(),me={"light-blue":"#7cd6fd",blue:"#5e64ff",violet:"#743ee2",red:"#ff5858",orange:"#ffa00a",yellow:"#feef72",green:"#28a745","light-green":"#98d85b",purple:"#b554ff",magenta:"#ffa3ef",black:"#36114C",grey:"#bdd3e6","light-grey":"#f0f4f7","dark-grey":"#b8c2cc"},pe=function(e){return me[e]||e},ye=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),ge="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ve=6,Me=4,Le=10,be="#dadada",Ye="#555b51",we={bar:function(e){var t=void 0;"rect"!==e.nodeName&&(t=e.getAttribute("transform"),e=e.childNodes[0]);var n=e.cloneNode();return n.style.fill="#000000",n.style.opacity="0.4",t&&n.setAttribute("transform",t),n},dot:function(e){var t=void 0;"circle"!==e.nodeName&&(t=e.getAttribute("transform"),e=e.childNodes[0]);var n=e.cloneNode(),r=e.getAttribute("r"),a=e.getAttribute("fill");return n.setAttribute("r",parseInt(r)+4),n.setAttribute("fill",a),n.style.opacity="0.6",t&&n.setAttribute("transform",t),n},heat_square:function(e){var t=void 0;"circle"!==e.nodeName&&(t=e.getAttribute("transform"),e=e.childNodes[0]);var n=e.cloneNode(),r=e.getAttribute("r"),a=e.getAttribute("fill");return n.setAttribute("r",parseInt(r)+4),n.setAttribute("fill",a),n.style.opacity="0.6",t&&n.setAttribute("transform",t),n}},ke={bar:function(e,t){var n=void 0;"rect"!==e.nodeName&&(n=e.getAttribute("transform"),e=e.childNodes[0]);var r=["x","y","width","height"];Object.values(e.attributes).filter(function(e){return r.includes(e.name)&&e.specified}).map(function(e){t.setAttribute(e.name,e.nodeValue)}),n&&t.setAttribute("transform",n)},dot:function(e,t){var n=void 0;"circle"!==e.nodeName&&(n=e.getAttribute("transform"),e=e.childNodes[0]);var r=["cx","cy"];Object.values(e.attributes).filter(function(e){return r.includes(e.name)&&e.specified}).map(function(e){t.setAttribute(e.name,e.nodeValue)}),n&&t.setAttribute("transform",n)},heat_square:function(e,t){var n=void 0;"circle"!==e.nodeName&&(n=e.getAttribute("transform"),e=e.childNodes[0]);var r=["cx","cy"];Object.values(e.attributes).filter(function(e){return r.includes(e.name)&&e.specified}).map(function(e){t.setAttribute(e.name,e.nodeValue)}),n&&t.setAttribute("transform",n)}},De=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),Te=350,Se=350,xe=Te,je=250,Oe="easein",Ee=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),He={ease:"0.25 0.1 0.25 1",linear:"0 0 1 1",easein:"0.1 0.8 0.2 1",easeout:"0 0 0.58 1",easeinout:"0.42 0 0.58 1"},Pe=".chart-container{position:relative;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif}.chart-container .axis,.chart-container .chart-label{fill:#555b51}.chart-container .axis line,.chart-container .chart-label line{stroke:#dadada}.chart-container .dataset-units circle{stroke:#fff;stroke-width:2}.chart-container .dataset-units path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container .dataset-path{stroke-width:2px}.chart-container .path-group path{fill:none;stroke-opacity:1;stroke-width:2px}.chart-container line.dashed{stroke-dasharray:5,3}.chart-container .axis-line .specific-value{text-anchor:start}.chart-container .axis-line .y-line{text-anchor:end}.chart-container .axis-line .x-line{text-anchor:middle}.chart-container .legend-dataset-text{fill:#6c7680;font-weight:600}.graph-svg-tip{position:absolute;z-index:99999;padding:10px;font-size:12px;color:#959da5;text-align:center;background:rgba(0,0,0,.8);border-radius:3px}.graph-svg-tip ul{padding-left:0;display:flex}.graph-svg-tip ol{padding-left:0;display:flex}.graph-svg-tip ul.data-point-list li{min-width:90px;flex:1;font-weight:600}.graph-svg-tip strong{color:#dfe2e5;font-weight:600}.graph-svg-tip .svg-pointer{position:absolute;height:5px;margin:0 0 0 -5px;content:' ';border:5px solid transparent;border-top-color:rgba(0,0,0,.8)}.graph-svg-tip.comparison{padding:0;text-align:left;pointer-events:none}.graph-svg-tip.comparison .title{display:block;padding:10px;margin:0;font-weight:600;line-height:1;pointer-events:none}.graph-svg-tip.comparison ul{margin:0;white-space:nowrap;list-style:none}.graph-svg-tip.comparison li{display:inline-block;padding:5px 10px}",Ce=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ae=void 0,Fe=function(){function e(t,n){if(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.parent="string"==typeof t?document.querySelector(t):t,!(this.parent instanceof HTMLElement))throw new Error("No `parent` element to render on was provided.");this.rawChartArgs=n,this.title=n.title||"",this.type=n.type||"",this.realData=this.prepareData(n.data),this.data=this.prepareFirstData(this.realData),this.colors=this.validateColors(n.colors,this.type),this.config={showTooltip:1,showLegend:1,isNavigable:n.isNavigable||0,animate:1},this.measures=JSON.parse(JSON.stringify(ie));var r=this.measures;this.setMeasures(n),this.title.length||(r.titleHeight=0),this.config.showLegend||(r.legendHeight=0),this.argHeight=n.height||r.baseHeight,this.state={},this.options={},this.initTimeout=se,this.config.isNavigable&&(this.overlays=[]),this.configure(n)}return Ce(e,[{key:"prepareData",value:function(e){return e}},{key:"prepareFirstData",value:function(e){return e}},{key:"validateColors",value:function(e,t){var n=[];return(e=(e||[]).concat(ce[t])).forEach(function(e){var t=pe(e);!function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)}(t)?console.warn('"'+e+'" is not a valid color.'):n.push(t)}),n}},{key:"setMeasures",value:function(){}},{key:"configure",value:function(){var e=this.argHeight;this.baseHeight=e,this.height=e-y(this.measures),Ae=this.boundDrawFn.bind(this),window.addEventListener("resize",Ae),window.addEventListener("orientationchange",this.boundDrawFn.bind(this))}},{key:"boundDrawFn",value:function(){this.draw(!0)}},{key:"unbindWindowEvents",value:function(){window.removeEventListener("resize",Ae),window.removeEventListener("orientationchange",this.boundDrawFn.bind(this))}},{key:"setup",value:function(){this.makeContainer(),this.updateWidth(),this.makeTooltip(),this.draw(!1,!0)}},{key:"makeContainer",value:function(){this.parent.innerHTML="";var e={inside:this.parent,className:"chart-container"};this.independentWidth&&(e.styles={width:this.independentWidth+"px"}),this.container=h.create("div",e)}},{key:"makeTooltip",value:function(){this.tip=new fe({parent:this.container,colors:this.colors}),this.bindTooltip()}},{key:"bindTooltip",value:function(){}},{key:"draw",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.updateWidth(),this.calc(t),this.makeChartArea(),this.setupComponents(),this.components.forEach(function(t){return t.setup(e.drawArea)}),this.render(this.components,!1),n&&(this.data=this.realData,setTimeout(function(){e.update(e.data)},this.initTimeout)),this.renderLegend(),this.setupNavigation(n)}},{key:"calc",value:function(){}},{key:"updateWidth",value:function(){this.baseWidth=function(e){var t=window.getComputedStyle(e),n=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight);return e.clientWidth-n}(this.parent),this.width=this.baseWidth-g(this.measures)}},{key:"makeChartArea",value:function(){this.svg&&this.container.removeChild(this.svg);var e=this.measures;this.svg=function(e,t,n,r){return S("svg",{className:t,inside:e,width:n,height:r})}(this.container,"frappe-chart chart",this.baseWidth,this.baseHeight),this.svgDefs=function(e){return S("defs",{inside:e})}(this.svg),this.title.length&&(this.titleEL=P("title",e.margins.left,e.margins.top,this.title,{fontSize:e.titleFontSize,fill:"#666666",dy:e.titleFontSize}));var t=m(e);this.drawArea=j(this.type+"-chart chart-draw-area","translate("+p(e)+", "+t+")"),this.config.showLegend&&(t+=this.height+e.paddings.bottom,this.legendArea=j("chart-legend","translate("+p(e)+", "+t+")")),this.title.length&&this.svg.appendChild(this.titleEL),this.svg.appendChild(this.drawArea),this.config.showLegend&&this.svg.appendChild(this.legendArea),this.updateTipOffset(p(e),m(e))}},{key:"updateTipOffset",value:function(e,t){this.tip.offset={x:e,y:t}}},{key:"setupComponents",value:function(){this.components=new Map}},{key:"update",value:function(e){e||console.error("No data to update."),this.data=this.prepareData(e),this.calc(),this.render()}},{key:"render",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.components,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.config.isNavigable&&this.overlays.map(function(e){return e.parentNode.removeChild(e)});var r=[];t.forEach(function(e){r=r.concat(e.update(n))}),r.length>0?(function(e,t,n){if(0!==n.length){var r=z(t,n);t.parentNode==e&&(e.removeChild(t),e.appendChild(r)),setTimeout(function(){r.parentNode==e&&(e.removeChild(r),e.appendChild(t))},je)}}(this.container,this.svg,r),setTimeout(function(){t.forEach(function(e){return e.make()}),e.updateNav()},400)):(t.forEach(function(e){return e.make()}),this.updateNav())}},{key:"updateNav",value:function(){this.config.isNavigable&&(this.makeOverlay(),this.bindUnits())}},{key:"renderLegend",value:function(){}},{key:"setupNavigation",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.config.isNavigable&&t&&(this.bindOverlay(),this.keyActions={13:this.onEnterKey.bind(this),37:this.onLeftArrow.bind(this),38:this.onUpArrow.bind(this),39:this.onRightArrow.bind(this),40:this.onDownArrow.bind(this)},document.addEventListener("keydown",function(t){(function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)})(e.container)&&(t=t||window.event,e.keyActions[t.keyCode]&&e.keyActions[t.keyCode]())}))}},{key:"makeOverlay",value:function(){}},{key:"updateOverlay",value:function(){}},{key:"bindOverlay",value:function(){}},{key:"bindUnits",value:function(){}},{key:"onLeftArrow",value:function(){}},{key:"onRightArrow",value:function(){}},{key:"onUpArrow",value:function(){}},{key:"onDownArrow",value:function(){}},{key:"onEnterKey",value:function(){}},{key:"addDataPoint",value:function(){}},{key:"removeDataPoint",value:function(){}},{key:"getDataPoint",value:function(){}},{key:"setCurrentDataPoint",value:function(){}},{key:"updateDataset",value:function(){}},{key:"export",value:function(){var e=function(e){var t=e.cloneNode(!0);t.classList.add("chart-container"),t.setAttribute("xmlns","http://www.w3.org/2000/svg"),t.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink");var n=h.create("style",{innerHTML:Pe});t.insertBefore(n,t.firstChild);var r=h.create("div");return r.appendChild(t),r.innerHTML}(this.svg);!function(e,t){var n=document.createElement("a");n.style="display: none";var r=new Blob(t,{type:"image/svg+xml; charset=utf-8"}),a=window.URL.createObjectURL(r);n.href=a,n.download=e,document.body.appendChild(n),n.click(),setTimeout(function(){document.body.removeChild(n),window.URL.revokeObjectURL(a)},300)}(this.title||"Chart",[e])}}]),e}(),We=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ne=function(e){function t(e,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Fe),We(t,[{key:"configure",value:function(e){(function e(t,n,r){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,n);if(void 0===a){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in a)return a.value;var s=a.get;return void 0!==s?s.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"configure",this).call(this,e),this.config.maxSlices=e.maxSlices||20,this.config.maxLegendPoints=e.maxLegendPoints||20}},{key:"calc",value:function(){var e=this,t=this.state,n=this.config.maxSlices;t.sliceTotals=[];var r=this.data.labels.map(function(t,n){var r=0;return e.data.datasets.map(function(e){r+=e.values[n]}),[r,t]}).filter(function(e){return e[0]>=0}),a=r;if(r.length>n){r.sort(function(e,t){return t[0]-e[0]}),a=r.slice(0,n-1);var i=0;r.slice(n-1).map(function(e){i+=e[0]}),a.push([i,"Rest"]),this.colors[n-1]="grey"}t.labels=[],a.map(function(e){t.sliceTotals.push(e[0]),t.labels.push(e[1])}),t.grandTotal=t.sliceTotals.reduce(function(e,t){return e+t},0),this.center={x:this.width/2,y:this.height/2}}},{key:"renderLegend",value:function(){var e=this,t=this.state;this.legendArea.textContent="",this.legendTotals=t.sliceTotals.slice(0,this.config.maxLegendPoints);var n=0,r=0;this.legendTotals.map(function(a,i){var s=Math.floor((e.width-g(e.measures))/110);n>s&&(n=0,r+=20);var o=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none",a=arguments[4],i={className:"legend-dot",cx:0,cy:0,r:n,fill:r},s=S("text",{className:"legend-dataset-text",x:0,y:0,dx:Le+"px",dy:Le/3+"px","font-size":1.2*Le+"px","text-anchor":"start",fill:Ye,innerHTML:a}),o=S("g",{transform:"translate("+e+", "+t+")"});return o.appendChild(S("circle",i)),o.appendChild(s),o}(110*n+5,r,5,e.colors[i],t.labels[i]+": "+a);e.legendArea.appendChild(o),n++})}}]),t}(),ze=7,Ie=1e3,Re=86400,Be=["January","February","March","April","May","June","July","August","September","October","November","December"],qe=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],Ue=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),$e=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Je=function(){function e(t){var n=t.layerClass,r=void 0===n?"":n,a=t.layerTransform,i=void 0===a?"":a,s=t.constants,o=t.getData,u=t.makeElements,l=t.animateElements;(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.layerTransform=i,this.constants=s,this.makeElements=u,this.getData=o,this.animateElements=l,this.store=[],this.labels=[],this.layerClass=r,this.layerClass="function"==typeof this.layerClass?this.layerClass():this.layerClass,this.refresh()}return $e(e,[{key:"refresh",value:function(e){this.data=e||this.getData()}},{key:"setup",value:function(e){this.layer=j(this.layerClass,this.layerTransform,e)}},{key:"make",value:function(){this.render(this.data),this.oldData=this.data}},{key:"render",value:function(e){var t=this;this.store=this.makeElements(e),this.layer.textContent="",this.store.forEach(function(e){t.layer.appendChild(e)}),this.labels.forEach(function(e){t.layer.appendChild(e)})}},{key:"update",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.refresh();var t=[];return e&&(t=this.animateElements(this.data)||[]),t}}]),e}(),Ve={pieSlices:{layerClass:"pie-slices",makeElements:function(e){return e.sliceStrings.map(function(t,n){var r=O(t,"pie-path","none",e.colors[n]);return r.style.transition="transform .3s;",r})},animateElements:function(e){return this.store.map(function(t,n){return function(e,t){return[e,{d:t},Te,Oe]}(t,e.sliceStrings[n])})}},percentageBars:{layerClass:"percentage-bars",makeElements:function(e){var t=this;return e.xPositions.map(function(n,r){return function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:ue,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"none";return S("rect",{className:"percentage-bar",x:e,y:t,width:n,height:r,fill:i,styles:{stroke:D(i,-25),"stroke-dasharray":"0, "+(r+n)+", "+n+", "+r,"stroke-width":a}})}(n,0,e.widths[r],t.constants.barHeight,t.constants.barDepth,e.colors[r])})},animateElements:function(e){if(e)return[]}},yAxis:{layerClass:"y axis",makeElements:function(e){var t=this;return e.positions.map(function(n,r){return function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};r.pos||(r.pos="left"),r.offset||(r.offset=0),r.mode||(r.mode="span"),r.stroke||(r.stroke=be),r.className||(r.className="");var a=-1*ve,i="span"===r.mode?n+ve:0;return"tick"===r.mode&&"right"===r.pos&&(a=n+ve,i=n),C(e,t,a+=r.offset,i+=r.offset,{stroke:r.stroke,className:r.className,lineType:r.lineType})}(n,e.labels[r],t.constants.width,{mode:t.constants.mode,pos:t.constants.pos})})},animateElements:function(e){var t=e.positions,n=e.labels,r=this.oldData.positions,a=this.oldData.labels,i=w(r,t),s=Ue(i,2);r=s[0],t=s[1];var o=w(a,n),u=Ue(o,2);return a=u[0],n=u[1],this.render({positions:r,labels:n}),this.store.map(function(e,n){return W(e,t[n],r[n])})}},xAxis:{layerClass:"x axis",makeElements:function(e){var t=this;return e.positions.map(function(n,r){return A(n,e.calcLabels[r],t.constants.height,{mode:t.constants.mode,pos:t.constants.pos})})},animateElements:function(e){var t=e.positions,n=e.calcLabels,r=this.oldData.positions,a=this.oldData.calcLabels,i=w(r,t),s=Ue(i,2);r=s[0],t=s[1];var o=w(a,n),u=Ue(o,2);return a=u[0],n=u[1],this.render({positions:r,calcLabels:n}),this.store.map(function(e,n){return function(e,t,n){return F(e,[n,0],[t,0],xe)}(e,t[n],r[n])})}},yMarkers:{layerClass:"y-markers",makeElements:function(e){var t=this;return e.map(function(e){return function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};r.labelPos||(r.labelPos="right");var a=S("text",{className:"chart-label",x:"left"===r.labelPos?Me:n-L(t,5)-Me,y:0,dy:Le/-2+"px","font-size":Le+"px","text-anchor":"start",innerHTML:t+""}),i=C(e,"",0,n,{stroke:r.stroke||be,className:r.className||"",lineType:r.lineType});return i.appendChild(a),i}(e.position,e.label,t.constants.width,{labelPos:e.options.labelPos,mode:"span",lineType:"dashed"})})},animateElements:function(e){var t=w(this.oldData,e),n=Ue(t,2);this.oldData=n[0];var r=(e=n[1]).map(function(e){return e.position}),a=e.map(function(e){return e.label}),i=e.map(function(e){return e.options}),s=this.oldData.map(function(e){return e.position});return this.render(s.map(function(e,t){return{position:s[t],label:a[t],options:i[t]}})),this.store.map(function(e,t){return W(e,r[t],s[t])})}},yRegions:{layerClass:"y-regions",makeElements:function(e){var t=this;return e.map(function(e){return function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=e-t,s=S("rect",{className:"bar mini",styles:{fill:"rgba(228, 234, 239, 0.49)",stroke:be,"stroke-dasharray":n+", "+i},x:0,y:0,width:n,height:i});a.labelPos||(a.labelPos="right");var o=S("text",{className:"chart-label",x:"left"===a.labelPos?Me:n-L(r+"",4.5)-Me,y:0,dy:Le/-2+"px","font-size":Le+"px","text-anchor":"start",innerHTML:r+""}),u=S("g",{transform:"translate(0, "+t+")"});return u.appendChild(s),u.appendChild(o),u}(e.startPos,e.endPos,t.constants.width,e.label,{labelPos:e.options.labelPos})})},animateElements:function(e){var t=w(this.oldData,e),n=Ue(t,2);this.oldData=n[0];var r=(e=n[1]).map(function(e){return e.endPos}),a=e.map(function(e){return e.label}),i=e.map(function(e){return e.startPos}),s=e.map(function(e){return e.options}),o=this.oldData.map(function(e){return e.endPos}),u=this.oldData.map(function(e){return e.startPos});this.render(o.map(function(e,t){return{startPos:u[t],endPos:o[t],label:a[t],options:s[t]}}));var l=[];return this.store.map(function(e,t){l=l.concat(function(e,t,n,r){var a=t-n,i=e.childNodes[0];return[[i,{height:a,"stroke-dasharray":i.getAttribute("width")+", "+a},xe,Oe],F(e,[0,r],[0,n],xe)]}(e,i[t],r[t],o[t]))}),l}},heatDomain:{layerClass:function(){return"heat-domain domain-"+this.constants.index},makeElements:function(e){var t=this,n=this.constants,r=n.index,a=n.colWidth,i=n.rowHeight,s=n.squareSize,o=n.xTranslate,u=0;return this.serializedSubDomains=[],e.cols.map(function(e,n){1===n&&t.labels.push(P("domain-name",o,-12,$(r,!0).toUpperCase(),{fontSize:9})),e.map(function(e,n){if(e.fill){var r={"data-date":e.yyyyMmDd,"data-value":e.dataValue,"data-day":n},a=H("day",o,u,s,e.fill,r);t.serializedSubDomains.push(a)}u+=i}),u=0,o+=a}),this.serializedSubDomains},animateElements:function(e){if(e)return[]}},barGraph:{layerClass:function(){return"dataset-units dataset-bars dataset-"+this.constants.index},makeElements:function(e){var t=this.constants;return this.unitType="bar",this.units=e.yPositions.map(function(n,r){return function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:0,o=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{},u=Y(t,o.zeroLine),l=ye(u,2),d=l[0],c=l[1];c-=s,0===d&&(d=o.minHeight,c-=o.minHeight);var h=S("rect",{className:"bar mini",style:"fill: "+r,"data-point-index":i,x:e,y:c,width:n,height:d});if((a+="")||a.length){h.setAttribute("y",0),h.setAttribute("x",0);var _=S("text",{className:"data-point-value",x:n/2,y:0,dy:Le/2*-1+"px","font-size":Le+"px","text-anchor":"middle",innerHTML:a}),f=S("g",{"data-point-index":i,transform:"translate("+e+", "+c+")"});return f.appendChild(h),f.appendChild(_),f}return h}(e.xPositions[r],n,e.barWidth,t.color,e.labels[r],r,e.offsets[r],{zeroLine:e.zeroLine,barsWidth:e.barsWidth,minHeight:t.minHeight})}),this.units},animateElements:function(e){var t=e.xPositions,n=e.yPositions,r=e.offsets,a=e.labels,i=this.oldData.xPositions,s=this.oldData.yPositions,o=this.oldData.offsets,u=this.oldData.labels,l=w(i,t),d=Ue(l,2);i=d[0],t=d[1];var c=w(s,n),h=Ue(c,2);s=h[0],n=h[1];var _=w(o,r),f=Ue(_,2);o=f[0],r=f[1];var m=w(u,a),p=Ue(m,2);u=p[0],a=p[1],this.render({xPositions:i,yPositions:s,offsets:o,labels:a,zeroLine:this.oldData.zeroLine,barsWidth:this.oldData.barsWidth,barWidth:this.oldData.barWidth});var y=[];return this.store.map(function(a,i){y=y.concat(function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=Y(n,(arguments.length>5&&void 0!==arguments[5]?arguments[5]:{}).zeroLine),s=De(i,2),o=s[0],u=s[1];return u-=a,"rect"!==e.nodeName?[[e.childNodes[0],{width:r,height:o},Te,Oe],F(e,e.getAttribute("transform").split("(")[1].slice(0,-1),[t,u],xe)]:[[e,{width:r,height:o,x:t,y:u},Te,Oe]]}(a,t[i],n[i],e.barWidth,r[i],{zeroLine:e.zeroLine}))}),y}},lineGraph:{layerClass:function(){return"dataset-units dataset-line dataset-"+this.constants.index},makeElements:function(e){var t=this.constants;return this.unitType="dot",this.paths={},t.hideLine||(this.paths=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},i=t.map(function(t,n){return e[n]+","+t}).join("L"),s=O("M"+i,"line-graph-path",n);if(r.heatline){var o=E(a.svgDefs,n);s.style.stroke="url(#"+o+")"}var u={path:s};if(r.regionFill){var l=E(a.svgDefs,n,!0),d="M"+e[0]+","+a.zeroLine+"L"+i+"L"+e.slice(-1)[0]+","+a.zeroLine;u.region=O(d,"region-fill","none","url(#"+l+")")}return u}(e.xPositions,e.yPositions,t.color,{heatline:t.heatline,regionFill:t.regionFill},{svgDefs:t.svgDefs,zeroLine:e.zeroLine})),this.units=[],t.hideDots||(this.units=e.yPositions.map(function(n,r){return function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:"",i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,s=S("circle",{style:"fill: "+r,"data-point-index":i,cx:e,cy:t,r:n});if((a+="")||a.length){s.setAttribute("cy",0),s.setAttribute("cx",0);var o=S("text",{className:"data-point-value",x:0,y:0,dy:Le/2*-1-n+"px","font-size":Le+"px","text-anchor":"middle",innerHTML:a}),u=S("g",{"data-point-index":i,transform:"translate("+e+", "+t+")"});return u.appendChild(s),u.appendChild(o),u}return s}(e.xPositions[r],n,e.radius,t.color,t.valuesOverPoints?e.values[r]:"",r)})),Object.values(this.paths).concat(this.units)},animateElements:function(e){var t=e.xPositions,n=e.yPositions,r=e.values,a=this.oldData.xPositions,i=this.oldData.yPositions,s=this.oldData.values,o=w(a,t),u=Ue(o,2);a=u[0],t=u[1];var l=w(i,n),d=Ue(l,2);i=d[0],n=d[1];var c=w(s,r),h=Ue(c,2);s=h[0],r=h[1],this.render({xPositions:a,yPositions:i,values:r,zeroLine:this.oldData.zeroLine,radius:this.oldData.radius});var _=[];return Object.keys(this.paths).length&&(_=_.concat(function(e,t,n,r){var a=[],i=n.map(function(e,n){return t[n]+","+e}).join("L"),s=[e.path,{d:"M"+i},Se,Oe];if(a.push(s),e.region){var o=t[0]+","+r+"L",u="L"+t.slice(-1)[0]+", "+r,l=[e.region,{d:"M"+o+i+u},Se,Oe];a.push(l)}return a}(this.paths,t,n,e.zeroLine))),this.units.length&&this.units.map(function(e,r){_=_.concat(function(e,t,n){return"circle"!==e.nodeName?[F(e,e.getAttribute("transform").split("(")[1].slice(0,-1),[t,n],xe)]:[[e,{cx:t,cy:n},Te,Oe]]}(e,t[r],n[r]))}),_}}},Ge=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Xe=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.type="percentage",r.setup(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Ne),Ge(t,[{key:"setMeasures",value:function(e){var t=this.measures;this.barOptions=e.barOptions||{};var n=this.barOptions;n.height=n.height||20,n.depth=n.depth||ue,t.paddings.right=30,t.legendHeight=80,t.baseHeight=8*(n.height+.5*n.depth)}},{key:"setupComponents",value:function(){var e=this.state,t=[["percentageBars",{barHeight:this.barOptions.height,barDepth:this.barOptions.depth},function(){return{xPositions:e.xPositions,widths:e.widths,colors:this.colors}}.bind(this)]];this.components=new Map(t.map(function(e){var t=X.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e));return[e[0],t]}))}},{key:"calc",value:function(){var e=this;(function e(t,n,r){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,n);if(void 0===a){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in a)return a.value;var s=a.get;return void 0!==s?s.call(r):void 0})(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"calc",this).call(this);var n=this.state;n.xPositions=[],n.widths=[];var r=0;n.sliceTotals.map(function(t){var a=e.width*t/n.grandTotal;n.widths.push(a),n.xPositions.push(r),r+=a})}},{key:"makeDataByIndex",value:function(){}},{key:"bindTooltip",value:function(){var e=this,t=this.state;this.container.addEventListener("mousemove",function(n){var r=e.components.get("percentageBars").store,a=n.target;if(r.includes(a)){var i=r.indexOf(a),s=f(e.container),o=f(a),u=o.left-s.left+parseInt(a.getAttribute("width"))/2,l=o.top-s.top,d=(e.formattedLabels&&e.formattedLabels.length>0?e.formattedLabels[i]:e.state.labels[i])+": ",c=t.sliceTotals[i]/t.grandTotal;e.tip.setValues(u,l,{name:d,value:(100*c).toFixed(1)+"%"}),e.tip.showTip()}})}}]),t}(),Ze=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Ke=function e(t,n,r){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,n);if(void 0===a){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in a)return a.value;var s=a.get;return void 0!==s?s.call(r):void 0},Qe=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.type="pie",r.initTimeout=0,r.init=1,r.setup(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Ne),Ze(t,[{key:"configure",value:function(e){Ke(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"configure",this).call(this,e),this.mouseMove=this.mouseMove.bind(this),this.mouseLeave=this.mouseLeave.bind(this),this.hoverRadio=e.hoverRadio||.1,this.config.startAngle=e.startAngle||0,this.clockWise=e.clockWise||!1}},{key:"calc",value:function(){var e=this;Ke(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"calc",this).call(this);var n=this.state;this.radius=this.height>this.width?this.center.x:this.center.y;var r=this.radius,a=this.clockWise,i=n.slicesProperties||[];n.sliceStrings=[],n.slicesProperties=[];var s=180-this.config.startAngle;n.sliceTotals.map(function(t,o){var u=s,l=t/n.grandTotal*360,d=a?-l:l,c=s+=d,h=b(u,r),_=b(c,r),f=e.init&&i[o],m=void 0,p=void 0;e.init?(m=f?f.startPosition:h,p=f?f.endPosition:h):(m=h,p=_);var y=function(e,t,n,r){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=n.x+e.x,s=n.y+e.y,o=n.x+t.x,u=n.y+t.y;return"M"+n.x+" "+n.y+"\n\t\tL"+i+" "+s+"\n\t\tA "+r+" "+r+" 0 0 "+(a?1:0)+"\n\t\t"+o+" "+u+" z"}(m,p,e.center,e.radius,e.clockWise);n.sliceStrings.push(y),n.slicesProperties.push({startPosition:h,endPosition:_,value:t,total:n.grandTotal,startAngle:u,endAngle:c,angle:d})}),this.init=0}},{key:"setupComponents",value:function(){var e=this.state,t=[["pieSlices",{},function(){return{sliceStrings:e.sliceStrings,colors:this.colors}}.bind(this)]];this.components=new Map(t.map(function(e){var t=X.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e));return[e[0],t]}))}},{key:"calTranslateByAngle",value:function(e){var t=this.radius,n=this.hoverRadio,r=b(e.startAngle+e.angle/2,t);return"translate3d("+r.x*n+"px,"+r.y*n+"px,0)"}},{key:"hoverSlice",value:function(e,t,n,r){if(e){var a=this.colors[t];if(n){N(e,this.calTranslateByAngle(this.state.slicesProperties[t])),e.style.fill=D(a,50);var i=f(this.svg),s=r.pageX-i.left+10,o=r.pageY-i.top-10,u=(this.formatted_labels&&this.formatted_labels.length>0?this.formatted_labels[t]:this.state.labels[t])+": ",l=(100*this.state.sliceTotals[t]/this.state.grandTotal).toFixed(1);this.tip.setValues(s,o,{name:u,value:l+"%"}),this.tip.showTip()}else N(e,"translate3d(0,0,0)"),this.tip.hideTip(),e.style.fill=a}}},{key:"bindTooltip",value:function(){this.container.addEventListener("mousemove",this.mouseMove),this.container.addEventListener("mouseleave",this.mouseLeave)}},{key:"mouseMove",value:function(e){var t=e.target,n=this.components.get("pieSlices").store,r=this.curActiveSliceIndex,a=this.curActiveSlice;if(n.includes(t)){var i=n.indexOf(t);this.hoverSlice(a,r,!1),this.curActiveSlice=t,this.curActiveSliceIndex=i,this.hoverSlice(t,i,!0,e)}else this.mouseLeave()}},{key:"mouseLeave",value:function(){this.hoverSlice(this.curActiveSlice,this.curActiveSliceIndex,!1)}}]),t}(),et=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var s,o=e[Symbol.iterator]();!(r=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&o.return&&o.return()}finally{if(a)throw i}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),tt=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),nt=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));r.type="heatmap",r.countLabel=n.countLabel||"";var a=["Sunday","Monday"],i=a.includes(n.startSubDomain)?n.startSubDomain:"Sunday";return r.startSubDomainIndex=a.indexOf(i),r.setup(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Fe),tt(t,[{key:"setMeasures",value:function(e){var t=this.measures;this.discreteDomains=0===e.discreteDomains?0:1,t.paddings.top=36,t.paddings.bottom=0,t.legendHeight=24,t.baseHeight=12*ze+y(t);var n=this.data,r=this.discreteDomains?12:0;this.independentWidth=12*(q(n.start,n.end)+r)+g(t)}},{key:"updateWidth",value:function(){var e=this.discreteDomains?12:0,t=this.state.noOfWeeks?this.state.noOfWeeks:52;this.baseWidth=12*(t+e)+g(this.measures)}},{key:"prepareData",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.data;if(e.start&&e.end&&e.start>e.end)throw new Error("Start date cannot be greater than end date.");if(e.start||(e.start=new Date,e.start.setFullYear(e.start.getFullYear()-1)),e.end||(e.end=new Date),e.dataPoints=e.dataPoints||{},parseInt(Object.keys(e.dataPoints)[0])>1e5){var t={};Object.keys(e.dataPoints).forEach(function(n){var r=new Date(n*Ie);t[R(r)]=e.dataPoints[n]}),e.dataPoints=t}return e}},{key:"calc",value:function(){var e=this.state;e.start=B(this.data.start),e.end=B(this.data.end),e.firstWeekStart=B(e.start),e.noOfWeeks=q(e.start,e.end),e.distribution=function(e,t){for(var n=Math.max.apply(Math,Z(e)),r=1/(t-1),a=[],i=0;i<t;i++){var s=n*(r*i);a.push(s)}return a}(Object.values(this.data.dataPoints),5),e.domainConfigs=this.getDomains()}},{key:"setupComponents",value:function(){var e=this,t=this.state,n=this.discreteDomains?0:1,r=t.domainConfigs.map(function(r,a){return["heatDomain",{index:r.index,colWidth:12,rowHeight:12,squareSize:10,xTranslate:12*t.domainConfigs.filter(function(e,t){return t<a}).map(function(e){return e.cols.length-n}).reduce(function(e,t){return e+t},0)},function(){return t.domainConfigs[a]}.bind(e)]});this.components=new Map(r.map(function(e,t){var n=X.apply(void 0,function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(e));return[e[0]+"-"+t,n]}));var a=0;qe.forEach(function(t,n){if([1,3,5].includes(n)){var r=P("subdomain-name",-6,a,t,{fontSize:10,dy:8,textAnchor:"end"});e.drawArea.appendChild(r)}a+=12})}},{key:"update",value:function(e){e||console.error("No data to update."),this.data=this.prepareData(e),this.draw(),this.bindTooltip()}},{key:"bindTooltip",value:function(){var e=this;this.container.addEventListener("mousemove",function(t){e.components.forEach(function(n){var r=n.store,a=t.target;if(r.includes(a)){var i=a.getAttribute("data-value"),s=a.getAttribute("data-date").split("-"),o=$(parseInt(s[1])-1,!0),u=e.container.getBoundingClientRect(),l=a.getBoundingClientRect(),d=parseInt(t.target.getAttribute("width")),c=l.left-u.left+d/2,h=l.top-u.top,_=i+" "+e.countLabel,f=" on "+o+" "+s[0]+", "+s[2];e.tip.setValues(c,h,{name:f,value:_,valueFirst:1},[]),e.tip.showTip()}})})}},{key:"renderLegend",value:function(){var e=this;this.legendArea.textContent="";var t=0,n=P("subdomain-name",t,12,"Less",{fontSize:11,dy:9});t=30,this.legendArea.appendChild(n),this.colors.slice(0,5).map(function(n,r){var a=H("heatmap-legend-unit",t+15*r,12,10,n);e.legendArea.appendChild(a)});var r=P("subdomain-name",t+75+3,12,"More",{fontSize:11,dy:9});this.legendArea.appendChild(r)}},{key:"getDomains",value:function(){for(var e=this.state,t=[e.start.getMonth(),e.start.getFullYear()],n=t[0],r=t[1],a=[e.end.getMonth(),e.end.getFullYear()],i=a[0]-n+1+12*(a[1]-r),s=[],o=B(e.start),u=0;u<i;u++){var l=e.end;if(!U(o,e.end)){var d=[o.getMonth(),o.getFullYear()];l=J(d[0],d[1])}s.push(this.getDomainConfig(o,l)),G(l,1),o=l}return s}},{key:"getDomainConfig",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=[e.getMonth(),e.getFullYear()],r=n[0],a=n[1],i=V(e),s={index:r,cols:[]};G(t=B(t)||J(r,a),1);for(var o=q(i,t),u=[],l=void 0,d=0;d<o;d++)l=this.getCol(i,r),u.push(l),G(i=new Date(l[ze-1].yyyyMmDd),1);return void 0!==l[ze-1].dataValue&&(G(i,1),u.push(this.getCol(i,r,!0))),s.cols=u,s}},{key:"getCol",value:function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=this.state,a=B(e),i=[],s=0;s<ze;s++,G(a,1)){var o={},u=a>=r.start&&a<=r.end;n||a.getMonth()!==t||!u?o.yyyyMmDd=R(a):o=this.getSubDomainConfig(a),i.push(o)}return i}},{key:"getSubDomainConfig",value:function(e){var t=R(e),n=this.data.dataPoints[t];return{yyyyMmDd:t,dataValue:n||0,fill:this.colors[ne(n,this.state.distribution)]}}}]),t}(),rt=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),at=function e(t,n,r){null===t&&(t=Function.prototype);var a=Object.getOwnPropertyDescriptor(t,n);if(void 0===a){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,r)}if("value"in a)return a.value;var s=a.get;return void 0!==s?s.call(r):void 0},it=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.barOptions=n.barOptions||{},r.lineOptions=n.lineOptions||{},r.type=n.type||"line",r.init=1,r.setup(),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,Fe),rt(t,[{key:"setMeasures",value:function(){this.data.datasets.length<=1&&(this.config.showLegend=0,this.measures.paddings.bottom=30)}},{key:"configure",value:function(e){at(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"configure",this).call(this,e),e.axisOptions=e.axisOptions||{},e.tooltipOptions=e.tooltipOptions||{},this.config.xAxisMode=e.axisOptions.xAxisMode||"span",this.config.yAxisMode=e.axisOptions.yAxisMode||"span",this.config.xIsSeries=e.axisOptions.xIsSeries||0,this.config.formatTooltipX=e.tooltipOptions.formatTooltipX,this.config.formatTooltipY=e.tooltipOptions.formatTooltipY,this.config.valuesOverPoints=e.valuesOverPoints}},{key:"prepareData",value:function(){return function(e,t){e.labels=e.labels||[];var n=e.labels.length,r=e.datasets,a=new Array(n).fill(0);return r||(r=[{values:a}]),r.map(function(e){if(e.values){var r=e.values;r=(r=r.map(function(e){return isNaN(e)?0:e})).length>n?r.slice(0,n):M(r,n-r.length,0)}else e.values=a;e.chartType||(oe.includes(t),e.chartType=t)}),e.yRegions&&e.yRegions.map(function(e){if(e.end<e.start){var t=[e.end,e.start];e.start=t[0],e.end=t[1]}}),e}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.data,this.type)}},{key:"prepareFirstData",value:function(){return function(e){var t=e.labels.length,n=new Array(t).fill(0),r={labels:e.labels.slice(0,-1),datasets:e.datasets.map(function(e){return{name:"",values:n.slice(0,-1),chartType:e.chartType}})};return e.yMarkers&&(r.yMarkers=[{value:0,label:""}]),e.yRegions&&(r.yRegions=[{start:0,end:0,label:""}]),r}(arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.data)}},{key:"calc",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.calcXPositions(),e||this.calcYAxisParameters(this.getAllYValues(),"line"===this.type),this.makeDataByIndex()}},{key:"calcXPositions",value:function(){var e=this.state,t=this.data.labels;e.datasetLength=t.length,e.unitWidth=this.width/e.datasetLength,e.xOffset=e.unitWidth/2,e.xAxis={labels:t,positions:t.map(function(t,n){return v(e.xOffset+n*e.unitWidth)})}}},{key:"calcYAxisParameters",value:function(e){var t=function(e){function t(e,t){for(var n=Q(e),r=n[1]-n[0],a=0,i=1;a<t;i++)a+=r,n.unshift(-1*a);return n}var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Math.max.apply(Math,Z(e)),a=Math.min.apply(Math,Z(e)),i=[];if(r>=0&&a>=0)K(r)[1],i=n?Q(r,a):Q(r);else if(r>0&&a<0){var s=Math.abs(a);r>=s?(K(r)[1],i=t(r,s)):(K(s)[1],i=t(s,r).map(function(e){return-1*e}))}else if(r<=0&&a<=0){var o=Math.abs(a),u=Math.abs(r);K(o)[1],i=(i=n?Q(o,u):Q(o)).reverse().map(function(e){return-1*e})}return i}(e,arguments.length>1&&void 0!==arguments[1]?arguments[1]:"false"),n=this.height/function(e){return e[e.length-1]-e[0]}(t),r=ee(t)*n,a=this.height-function(e){var t=ee(e);return e.indexOf(0)>=0?e.indexOf(0):e[0]>0?-1*e[0]/t:-1*e[e.length-1]/t+(e.length-1)}(t)*r;this.state.yAxis={labels:t,positions:t.map(function(e){return a-e*n}),scaleMultiplier:n,zeroLine:a},this.calcDatasetPoints(),this.calcYExtremes(),this.calcYRegions()}},{key:"calcDatasetPoints",value:function(){var e=this.state,t=function(t){return t.map(function(t){return te(t,e.yAxis)})};e.datasets=this.data.datasets.map(function(e,n){var r=e.values,a=e.cumulativeYs||[];return{name:e.name,index:n,chartType:e.chartType,values:r,yPositions:t(r),cumulativeYs:a,cumulativeYPos:t(a)}})}},{key:"calcYExtremes",value:function(){var e=this.state;this.barOptions.stacked?e.yExtremes=e.datasets[e.datasets.length-1].cumulativeYPos:(e.yExtremes=new Array(e.datasetLength).fill(9999),e.datasets.map(function(t){t.yPositions.map(function(t,n){t<e.yExtremes[n]&&(e.yExtremes[n]=t)})}))}},{key:"calcYRegions",value:function(){var e=this.state;this.data.yMarkers&&(this.state.yMarkers=this.data.yMarkers.map(function(t){return t.position=te(t.value,e.yAxis),t.options||(t.options={}),t})),this.data.yRegions&&(this.state.yRegions=this.data.yRegions.map(function(t){return t.startPos=te(t.start,e.yAxis),t.endPos=te(t.end,e.yAxis),t.options||(t.options={}),t}))}},{key:"getAllYValues",value:function(){var e,t=this,n="values";if(this.barOptions.stacked){n="cumulativeYs";var r=new Array(this.state.datasetLength).fill(0);this.data.datasets.map(function(e,a){var i=t.data.datasets[a].values;e[n]=r=r.map(function(e,t){return e+i[t]})})}var a=this.data.datasets.map(function(e){return e[n]});return this.data.yMarkers&&a.push(this.data.yMarkers.map(function(e){return e.value})),this.data.yRegions&&this.data.yRegions.map(function(e){a.push([e.end,e.start])}),(e=[]).concat.apply(e,re(a))}},{key:"setupComponents",value:function(){var e=this,t=[["yAxis",{mode:this.config.yAxisMode,width:this.width},function(){return this.state.yAxis}.bind(this)],["xAxis",{mode:this.config.xAxisMode,height:this.height},function(){var e=this.state;return e.xAxis.calcLabels=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=e/t.length;r<=0&&(r=1);var a=r/le;return t.map(function(e,t){return(e+="").length>a&&(n?t%Math.ceil(e.length/a)!=0&&(e=""):e=a-3>0?e.slice(0,a-3)+" ...":e.slice(0,a)+".."),e})}(this.width,e.xAxis.labels,this.config.xIsSeries),e.xAxis}.bind(this)],["yRegions",{width:this.width,pos:"right"},function(){return this.state.yRegions}.bind(this)]],n=this.state.datasets.filter(function(e){return"bar"===e.chartType}),r=this.state.datasets.filter(function(e){return"line"===e.chartType}),a=n.map(function(t){var r=t.index;return["barGraph-"+t.index,{index:r,color:e.colors[r],stacked:e.barOptions.stacked,valuesOverPoints:e.config.valuesOverPoints,minHeight:.01*e.height},function(){var e=this.state,t=e.datasets[r],a=this.barOptions.stacked,i=this.barOptions.spaceRatio||.5,s=e.unitWidth*(1-i),o=s/(a?1:n.length),u=e.xAxis.positions.map(function(e){return e-s/2});a||(u=u.map(function(e){return e+o*r}));var l=new Array(e.datasetLength).fill("");this.config.valuesOverPoints&&(l=a&&t.index===e.datasets.length-1?t.cumulativeYs:t.values);var d=new Array(e.datasetLength).fill(0);return a&&(d=t.yPositions.map(function(e,n){return e-t.cumulativeYPos[n]})),{xPositions:u,yPositions:t.yPositions,offsets:d,labels:l,zeroLine:e.yAxis.zeroLine,barsWidth:s,barWidth:o}}.bind(e)]}),i=r.map(function(t){var n=t.index;return["lineGraph-"+t.index,{index:n,color:e.colors[n],svgDefs:e.svgDefs,heatline:e.lineOptions.heatline,regionFill:e.lineOptions.regionFill,hideDots:e.lineOptions.hideDots,hideLine:e.lineOptions.hideLine,valuesOverPoints:e.config.valuesOverPoints},function(){var e=this.state,t=e.datasets[n],r=e.yAxis.positions[0]<e.yAxis.zeroLine?e.yAxis.positions[0]:e.yAxis.zeroLine;return{xPositions:e.xAxis.positions,yPositions:t.yPositions,values:t.values,zeroLine:r,radius:this.lineOptions.dotSize||4}}.bind(e)]}),s=[["yMarkers",{width:this.width,pos:"right"},function(){return this.state.yMarkers}.bind(this)]];t=t.concat(a,i,s);var o=["yMarkers","yRegions"];this.dataUnitComponents=[],this.components=new Map(t.filter(function(t){return!o.includes(t[0])||e.state[t[0]]}).map(function(t){var n=X.apply(void 0,re(t));return(t[0].includes("lineGraph")||t[0].includes("barGraph"))&&e.dataUnitComponents.push(n),[t[0],n]}))}},{key:"makeDataByIndex",value:function(){var e=this;this.dataByIndex={};var t=this.state,n=this.config.formatTooltipX,r=this.config.formatTooltipY;t.xAxis.labels.map(function(a,i){var s=e.state.datasets.map(function(t,n){var a=t.values[i];return{title:t.name,value:a,yPos:t.yPositions[i],color:e.colors[n],formatted:r?r(a):a}});e.dataByIndex[i]={label:a,formattedLabel:n?n(a):a,xPos:t.xAxis.positions[i],values:s,yExtreme:t.yExtremes[i]}})}},{key:"bindTooltip",value:function(){var e=this;this.container.addEventListener("mousemove",function(t){var n=e.measures,r=f(e.container),a=t.pageX-r.left-p(n),i=t.pageY-r.top;i<e.height+m(n)&&i>m(n)?e.mapTooltipXPosition(a):e.tip.hideTip()})}},{key:"mapTooltipXPosition",value:function(e){var t=this.state;if(t.yExtremes){var n=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=t.reduce(function(t,n){return Math.abs(n-e)<Math.abs(t-e)?n:t});return n?t.indexOf(r):r}(e,t.xAxis.positions,!0),r=this.dataByIndex[n];this.tip.setValues(r.xPos+this.tip.offset.x,r.yExtreme+this.tip.offset.y,{name:r.formattedLabel,value:""},r.values,n),this.tip.showTip()}}},{key:"renderLegend",value:function(){var e=this,t=this.data;t.datasets.length>1&&(this.legendArea.textContent="",t.datasets.map(function(t,n){var r=function(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"none",a=arguments[4],i={className:"legend-bar",x:0,y:0,width:n,height:"2px",fill:r},s=S("text",{className:"legend-dataset-text",x:0,y:0,dy:2*Le+"px","font-size":1.2*Le+"px","text-anchor":"start",fill:Ye,innerHTML:a}),o=S("g",{transform:"translate("+e+", "+t+")"});return o.appendChild(S("rect",i)),o.appendChild(s),o}(100*n,"0",100,e.colors[n],t.name);e.legendArea.appendChild(r)}))}},{key:"makeOverlay",value:function(){var e=this;this.init?this.init=0:(this.overlayGuides&&this.overlayGuides.forEach(function(e){var t=e.overlay;t.parentNode.removeChild(t)}),this.overlayGuides=this.dataUnitComponents.map(function(e){return{type:e.unitType,overlay:void 0,units:e.units}}),void 0===this.state.currentIndex&&(this.state.currentIndex=this.state.datasetLength-1),this.overlayGuides.map(function(t){var n=t.units[e.state.currentIndex];t.overlay=we[t.type](n),e.drawArea.appendChild(t.overlay)}))}},{key:"updateOverlayGuides",value:function(){this.overlayGuides&&this.overlayGuides.forEach(function(e){var t=e.overlay;t.parentNode.removeChild(t)})}},{key:"bindOverlay",value:function(){var e=this;this.parent.addEventListener("data-select",function(){e.updateOverlay()})}},{key:"bindUnits",value:function(){var e=this;this.dataUnitComponents.map(function(t){t.units.map(function(t){t.addEventListener("click",function(){var n=t.getAttribute("data-point-index");e.setCurrentDataPoint(n)})})}),this.tip.container.addEventListener("click",function(){var t=e.tip.container.getAttribute("data-point-index");e.setCurrentDataPoint(t)})}},{key:"updateOverlay",value:function(){var e=this;this.overlayGuides.map(function(t){var n=t.units[e.state.currentIndex];ke[t.type](n,t.overlay)})}},{key:"onLeftArrow",value:function(){this.setCurrentDataPoint(this.state.currentIndex-1)}},{key:"onRightArrow",value:function(){this.setCurrentDataPoint(this.state.currentIndex+1)}},{key:"getDataPoint",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.currentIndex,t=this.state;return{index:e,label:t.xAxis.labels[e],values:t.datasets.map(function(t){return t.values[e]})}}},{key:"setCurrentDataPoint",value:function(e){var t=this.state;(e=parseInt(e))<0&&(e=0),e>=t.xAxis.labels.length&&(e=t.xAxis.labels.length-1),e!==t.currentIndex&&(t.currentIndex=e,function(e,t,n){var r=document.createEvent("HTMLEvents");for(var a in r.initEvent(t,!0,!0),n)r[a]=n[a];e.dispatchEvent(r)}(this.parent,"data-select",this.getDataPoint()))}},{key:"addDataPoint",value:function(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.state.datasetLength;at(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"addDataPoint",this).call(this,e,n,r),this.data.labels.splice(r,0,e),this.data.datasets.map(function(e,t){e.values.splice(r,0,n[t])}),this.update(this.data)}},{key:"removeDataPoint",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state.datasetLength-1;this.data.labels.length<=1||(at(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"removeDataPoint",this).call(this,e),this.data.labels.splice(e,1),this.data.datasets.map(function(t){t.values.splice(e,1)}),this.update(this.data))}},{key:"updateDataset",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;this.data.datasets[t].values=e,this.update(this.data)}},{key:"updateDatasets",value:function(e){this.data.datasets.map(function(t,n){e[n]&&(t.values=e[n])}),this.update(this.data)}}]),t}(),st={bar:it,line:it,percentage:Xe,heatmap:nt,pie:Qe},ot=function e(t,n){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"line",t=arguments[1],n=arguments[2];return"axis-mixed"===e?(n.type="line",new it(t,n)):st[e]?new st[e](t,n):void console.error("Undefined chart type: "+e)}(n.type,t,n)};function ut(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){lt(e,t,n[t])})}return e}function lt(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var dt=i({name:"p-chart",data:function(){return{chart:null,heatmapData:{dataPoints:this.dataPoints,start:this.startDate,end:this.endDate,countLabel:this.countLabel}}},computed:{data:function(){return{labels:this.labels,datasets:this.dataSets}}},props:{name:{required:!0,type:String,default:null},dataSets:{required:!1,type:Array,default:function(){return[]}},labels:{required:!1,type:Array,default:function(){return[]}},startDate:{required:!1,type:Date,default:null},endDate:{required:!1,type:Date,default:null},dataPoints:{required:!1,type:Object,default:function(){}},countLabel:{required:!1,type:String,default:"Count"},title:{required:!1,type:String},height:{required:!1,type:Number,default:300},type:{required:!1,type:String,default:"bar"},yMarkers:{required:!1,type:Array,default:function(){return[{label:"Marker",value:70,options:{labelPos:"left"}}]}},yRegions:{required:!1,type:Array,default:function(){return[{label:"Region",start:-10,end:50,options:{labelPos:"right"}}]}},colors:{required:!1,type:Array,default:function(){return["purple","#ffa3ef","light-blue"]}},isNavigable:{required:!1,type:Boolean,default:!1},valuesOverPoints:{required:!1,type:Boolean,default:!1},lineOptions:{required:!1,type:Object,default:function(){return{dotSize:4,hideLine:0,hideDots:0,heatLine:0,regionFill:0,areaFill:0}}},axisOptions:{required:!1,type:Object,default:function(){return{yAxisMode:"",xAxisMode:"",xIsSeries:0}}},maxLegendPoints:{required:!1,type:Number,default:20},maxSlices:{required:!1,type:Number,default:20},barOptions:{required:!1,type:Object,default:function(){return{height:20,depth:2,spaceRatio:.5,stacked:0}}},discreteDomains:{required:!1,type:Boolean,default:!0},tooltipOptions:{required:!1,type:Object,default:function(){return{formatTooltipX:function(e){return(e+"").toUpperCase()},formatTooltipY:function(e){return e+" pts"}}}}},mounted:function(){this.mount()},methods:{mount:function(){var e={type:this.type,discreteDomains:this.discreteDomains,colors:this.colors,height:this.height,title:this.title,isNavigable:this.isNavigable},t={data:this.heatmapData},n={data:this.data,tooltipOptions:this.tooltipOptions,valuesOverPoints:this.valuesOverPoints,barOptions:this.barOptions,lineOptions:this.lineOptions,axisOptions:this.axisOptions,maxLegendPoints:this.maxLegendPoints,maxSlices:this.maxSlices},r="heatmap"===this.type?ut({},e,t):ut({},e,n);this.chart=new ot("#proton-chart-".concat(this.name),r)},export:function(){this.chart.export()},addDataPoint:function(e,t,n){this.chart.addDataPoint(e,t,n)},removeDataPoint:function(e){this.chart.removeDataPoint(e)},updateDataset:function(e,t){this.chart.updateDataset(e,t)},update:function(e){this.chart.update(e)},unbindWindowEvents:function(){this.chart.unbindWindowEvents()}},watch:{labels:function(e,t){this.update(this.data)},dataSets:function(e,t){this.update(this.data)}}},function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"proton-chart-"+this.name}})},[],!1,null,null,null).exports,ct=function(e){e.component(dt.name,dt)},ht=i({name:"p-checkbox",data:function(){return{model:this.value}},props:{name:{required:!0,type:String},value:{required:!1,type:[String,Number,Boolean,Function,Object,Array,Symbol]},nativeValue:{type:[String,Number,Boolean,Function,Object,Array,Symbol]},disabled:{type:Boolean,default:!1},required:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},trueValue:{type:[String,Number,Boolean,Function,Object,Array,Symbol],default:!0},falseValue:{type:[String,Number,Boolean,Function,Object,Array,Symbol],default:!1}},computed:{computedValue:{get:function(){return this.model},set:function(e){this.model=e,this.$emit("input",e)}}},watch:{value:function(e){this.model=e}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form__checkbox-container"},[n("label",{ref:"label",attrs:{disabled:e.disabled,tabindex:!e.disabled&&0},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:(t.preventDefault(),e.$refs.label.click())}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.computedValue,expression:"computedValue"}],staticClass:"form__checkbox",attrs:{type:"checkbox",name:e.name,disabled:e.disabled,required:e.required,"true-value":e.trueValue,"false-value":e.falseValue},domProps:{value:e.nativeValue,indeterminate:e.indeterminate,checked:Array.isArray(e.computedValue)?e._i(e.computedValue,e.nativeValue)>-1:e._q(e.computedValue,e.trueValue)},on:{change:function(t){var n=e.computedValue,r=t.target,a=r.checked?e.trueValue:e.falseValue;if(Array.isArray(n)){var i=e.nativeValue,s=e._i(n,i);r.checked?s<0&&(e.computedValue=n.concat([i])):s>-1&&(e.computedValue=n.slice(0,s).concat(n.slice(s+1)))}else e.computedValue=a}}}),e._v(" "),n("span",{staticClass:"form__checkbox-label"},[e._t("default")],2)])])},[],!1,null,null,null).exports,_t=i({name:"p-checkbox-group",props:{name:String,label:String,help:String,value:{required:!1,type:String,default:void 0},hasError:{required:!1,type:Boolean,default:!1},errorMessage:{required:!1,type:String,default:""},inline:{required:!1,type:Boolean,default:!1}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"form__checkbox-group"},[e.label?n("label",{staticClass:"form__label",attrs:{for:e.name},domProps:{innerHTML:e._s(e.label)}}):e._e(),e._v(" "),n("div",{class:{"form__checkbox-group--inline":e.inline}},[e._t("default")],2),e._v(" "),n("div",{staticClass:"form__control--meta"},[n("div",{staticClass:"form__help"},[e.help?n("span",{domProps:{innerHTML:e._s(e.help)}}):e._e(),e._v(" "),e.errorMessage?n("span",{staticClass:"form__error--message",domProps:{innerHTML:e._s(e.errorMessage)}}):e._e()])])])},[],!1,null,null,null).exports,ft=function(e){e.component(ht.name,ht),e.component(_t.name,_t)},mt={install:function(e){var t=new e;Object.defineProperty(e.prototype,"$proton",{get:function(){return t}})}},pt=mt,yt=i({name:"p-collapse",data:function(){return{shouldShow:this.show}},props:{name:{required:!0,type:String},show:{required:!1,type:Boolean,default:!1}},methods:{toggle:function(){this.shouldShow=!this.shouldShow},listenForDirective:function(){var e=this;this.$proton.$on("toggle-collapse-"+this.name,function(){e.toggle()})}},created:function(){this.listenForDirective()}},function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"animated-fade-in-out","enter-active-class":"animated fadeIn faster","leave-active-class":"animated fadeOut faster"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:this.shouldShow,expression:"shouldShow"}]},[this._t("default")],2)])},[],!1,null,null,null).exports,gt=function(e){e.component(yt.name,yt)},vt=n(5),Mt=n.n(vt),Lt=n(7),bt=n.n(Lt),Yt=n(141),wt=n.n(Yt),kt=i({name:"p-datatable",data:function(){return{loading:!0,displayable:[],column_names:[],sortable:[],filterable:[],records:[],search:"",pagination:{totalRecords:0,currentPage:1,totalPages:0,perPage:this.perPage},filter:{column:this.sortBy,operator:"equals",value:""},sort:{key:this.sortBy,order:this.sortIn}}},computed:{columns:function(){var e=this,t=[];return Mt.a.forEach(this.displayable,function(n){t.push({label:e.column_names[n],value:n})}),t},filters:function(){var e=this,t=[];return Mt.a.forEach(this.filterable,function(n){t.push({label:e.column_names[n],value:n})}),t}},props:{name:{required:!0,type:String},title:{required:!1,type:String,default:""},noRecords:{required:!1,type:String,default:"No records to display"},endpoint:{required:!0,type:String},sortBy:{required:!1,type:String,default:"id"},sortIn:{required:!1,type:String,default:"asc"},limits:{required:!1,type:Array,default:function(){return[{label:"1",value:1},{label:"5",value:5},{label:"10",value:10},{label:"25",value:25},{label:"50",value:50},{label:"100",value:100},{label:"500",value:500},{label:"1000",value:1e3}]}},perPage:{required:!1,type:Number,default:10},noActions:{required:!1,type:Boolean,default:!1},noSearch:{required:!1,type:Boolean,default:!1},noFilters:{required:!1,type:Boolean,default:!1},noPagination:{required:!1,type:Boolean,default:!1}},watch:{endpoint:function(){this.getRecords()}},methods:{getRecords:function(){var e=this;return this.loading=!0,bt.a.get("".concat(this.endpoint,"?").concat(this.getQueryParameters())).then(function(t){e.records=t.data.records.data,e.displayable=t.data.displayable,e.sortable=t.data.sortable,e.filterable=t.data.filterable,e.column_names=t.data.column_names,e.pagination.totalRecords=t.data.records.total,e.pagination.totalPages=t.data.records.last_page,e.loading=!1})},isSortable:function(e){return Mt.a.includes(this.sortable,e)},getQueryParameters:function(){return wt.a.stringify({limit:this.pagination.perPage,page:this.pagination.currentPage,orderBy:this.sort.key,orderDirection:this.sort.order,column:this.filter.column,operator:this.filter.operator,value:this.filter.value})},sortRecordsBy:function(e){this.sort.key=e,this.sort.order="asc"===this.sort.order?"desc":"asc",this.getRecords()},changePage:function(e){this.pagination.currentPage=e,this.getRecords()},changeLimit:function(){this.pagination.currentPage=1,this.getRecords()},destroy:function(e){var t=this;bt.a.delete("".concat(this.endpoint,"/").concat(e)).then(function(){t.getRecords()})},listenForEvents:function(){var e=this;this.$proton.$on("refresh-datatable-"+this.name,function(t){e.getRecords()})}},created:function(){this.getRecords(),this.listenForEvents()}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"datatable card"},[e.loading?n("p-loader"):e._e(),e._v(" "),n("div",{staticClass:"card__body"},[e.title?n("h2",[e._v(e._s(e.title))]):e._e(),e._v(" "),e.noFilters?e._e():n("form",{attrs:{action:"#"},on:{submit:function(t){return t.preventDefault(),e.getRecords(t)}}},[n("label",{staticClass:"form__label",attrs:{for:"column"}},[e._v("Filter")]),e._v(" "),n("div",{staticClass:"row mb-0"},[n("div",{staticClass:"col sm:w-1/4"},[n("div",{staticClass:"relative"},[n("p-select",{attrs:{name:"column",options:e.filters},model:{value:e.filter.column,callback:function(t){e.$set(e.filter,"column",t)},expression:"filter.column"}}),e._v(" "),n("div",{staticClass:"pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"},[n("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])],1)]),e._v(" "),n("div",{staticClass:"col sm:w-1/4"},[n("div",{staticClass:"relative"},[n("p-select",{attrs:{name:"operator",options:[{label:"equals",value:"equals"},{label:"contains",value:"contains"},{label:"starts with",value:"starts_with"},{label:"ends with",value:"ends_with"},{label:"greater than",value:"greater_than"},{label:"lesser than",value:"lesser_than"}]},model:{value:e.filter.operator,callback:function(t){e.$set(e.filter,"operator",t)},expression:"filter.operator"}}),e._v(" "),n("div",{staticClass:"pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"},[n("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])],1)]),e._v(" "),n("div",{staticClass:"col sm:w-1/2"},[n("div",{staticClass:"input__group"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.filter.value,expression:"filter.value"}],staticClass:"form__control",attrs:{type:"text",name:"value"},domProps:{value:e.filter.value},on:{input:function(t){t.target.composing||e.$set(e.filter,"value",t.target.value)}}}),e._v(" "),n("div",{staticClass:"input__group--append"},[n("p-button",{attrs:{type:"submit"}},[e._v("Submit")])],1)])])])]),e._v(" "),e.noSearch?e._e():n("div",{staticClass:"row",staticStyle:{"margin-bottom":"0"}},[n("div",{staticClass:"col sm:w-5/6"},[n("p-input",{attrs:{name:"search",label:"Search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1),e._v(" "),e.noPagination?e._e():n("div",{staticClass:"col sm:w-1/6"},[n("label",{staticClass:"form__label",attrs:{for:"limit"}},[e._v("Records Per Page")]),e._v(" "),n("div",{staticClass:"relative"},[n("p-select",{attrs:{name:"limit",options:e.limits},on:{change:e.changeLimit},model:{value:e.pagination.perPage,callback:function(t){e.$set(e.pagination,"perPage",t)},expression:"pagination.perPage"}}),e._v(" "),n("div",{staticClass:"pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"},[n("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])],1)])])]),e._v(" "),e.records.length?n("div",[n("table",[n("thead",[n("tr",[e._l(e.displayable,function(t,r){return n("th",{key:r},[e.isSortable(t)?n("span",{staticClass:"sortable",on:{click:function(n){return e.sortRecordsBy(t)}}},[e._v(e._s(e.column_names[t]||t))]):n("span",[e._v(e._s(e.column_names[t]||t))]),e._v(" "),e.sort.key===t&&e.isSortable(t)?n("div",{staticClass:"arrow",class:{"arrow--asc":"asc"===e.sort.order,"arrow--desc":"desc"===e.sort.order}}):e._e()])}),e._v(" "),n("th",[e._v(" ")])],2)]),e._v(" "),n("tbody",e._l(e.records,function(t,r){return n("tr",{key:r},[e._l(e.displayable,function(r){return n("td",{key:r},[e._t(r,[e._v("\n                            "+e._s(t[r])+"\n                        ")],{record:t})],2)}),e._v(" "),e.noActions?e._e():n("td",{staticClass:"text-right"},[e._t("actions",[n("a",{staticClass:"text-danger hover:text-danger-dark",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),e.destroy(t.id)}}},[e._v("Delete")])],{record:t})],2)],2)}),0)]),e._v(" "),e.noPagination?e._e():n("div",{staticClass:"card__body text-right"},[n("p-pagination",{attrs:{total:this.pagination.totalPages,value:this.pagination.currentPage},on:{input:function(t){return e.changePage(t)}}})],1)]):n("div",[e._t("empty-state",[e._m(0)])],2)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"card__body text-center"},[t("h3",[this._v("No results found.")])])}],!1,null,null,null).exports,Dt=function(e){e.component(kt.name,kt)},Tt=n(2),St=i({name:"p-dropdown",data:function(){return{isOpen:!1,popper:null}},props:{right:{required:!1,type:Boolean,default:!1}},methods:{open:function(){var e=this;this.isOpen=!0,this.$nextTick(function(){e.popper=new Tt.a(e.$refs.dropdown_button,e.$refs.dropdown_options,{placement:e.right?"bottom-end":"bottom-start"})})},close:function(){this.isOpen=!1,this.destroyPopper()},toggle:function(){this.isOpen?this.close():this.open()},listenForEscape:function(){var e=this,t=function(t){"Escape"===t.key&&e.isOpen&&e.close()};document.addEventListener("keydown",t),this.$once("hook:destroyed",function(){document.removeEventListener("keydown",t)})},optionClasses:function(){return classes={"dropdown__options--right":this.right},classes},destroyPopper:function(){this.popper&&this.popper.destroy()}},created:function(){this.listenForEscape()},destroyed:function(){this.destroyPopper()}},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"dropdown"},[t("button",{directives:[{name:"click-outside",rawName:"v-click-outside",value:this.close,expression:"close"}],ref:"dropdown_button",staticClass:"dropdown__button",on:{click:this.toggle}},[this._t("default")],2),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:this.isOpen,expression:"isOpen"}],ref:"dropdown_options",staticClass:"dropdown__options",class:this.optionClasses},[this._t("options")],2)])},[],!1,null,null,null).exports,xt=i({name:"p-dropdown-item",props:{href:{required:!1,type:String},to:{required:!1,type:[String,Object]}},methods:{onClick:function(e){this.$emit("click",e)}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.href?n("a",{staticClass:"dropdown__item",attrs:{href:e.href},on:{click:function(t){return e.onClick(t)}}},[e._t("default")],2):e.to?n("router-link",{staticClass:"dropdown__item",attrs:{to:e.to},on:{click:function(t){return e.onClick(t)}}},[e._t("default")],2):n("span",{staticClass:"dropdown__item",on:{click:function(t){return e.onClick(t)}}},[e._t("default")],2)],1)},[],!1,null,null,null).exports,jt=function(e){e.component(St.name,St),e.component(xt.name,xt)},Ot={name:"p-img",data:function(){return{loaded:!1,loadedLazy:!1}},props:{src:{type:String,required:!0},lazySrc:{type:String,required:!1},width:{type:String,required:!1},height:{type:String,required:!1},alt:{type:String,required:!1}},computed:{styles:function(){var e={};return this.width&&(e.width=this.width),this.height&&(e.height=this.height),e}},methods:{onLoaded:function(){this.loaded=!0},onLoadedLazy:function(){this.loadedLazy=!0}}},Et=(n(165),i(Ot,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"image",style:e.styles},[e.lazySrc?n("transition",{attrs:{name:"fade"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:e.loadedLazy,expression:"loadedLazy"}],staticClass:"blurred",class:{loaded:e.loaded},style:e.styles,attrs:{src:e.lazySrc,alt:e.alt},on:{load:e.onLoadedLazy}})]):e._e(),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("img",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],style:e.styles,attrs:{src:e.src,alt:e.alt},on:{load:e.onLoaded}})])],1)},[],!1,null,"7996f10f",null).exports),Ht=function(e){e.component(Et.name,Et)},Pt=i({name:"p-input",props:{name:String,placeholder:String,label:String,help:String,value:{type:[String,Number],default:""},type:{type:String,default:"text"},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},monospaced:{type:Boolean,default:!1},hasError:{required:!1,type:Boolean,default:!1},errorMessage:{required:!1,type:String,default:""},autocomplete:{required:!1,type:String,default:""},autofocus:{required:!1,type:Boolean,default:!1}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form__group"},[e.label?n("label",{staticClass:"form__label",attrs:{for:e.name},domProps:{innerHTML:e._s(e.label)}}):e._e(),e._v(" "),n("input",{staticClass:"form__control",class:{"font-mono":e.monospaced,form__error:e.hasError},attrs:{id:e.name,name:e.name,type:e.type,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autocomplete,autofocus:e.autofocus},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e._v(" "),e.help||e.errorMessage?n("div",{staticClass:"form__control--meta"},[n("div",{staticClass:"form__help"},[e.help?n("span",{domProps:{innerHTML:e._s(e.help)}}):e._e(),e._v(" "),e.errorMessage?n("span",{staticClass:"form__error--message",domProps:{innerHTML:e._s(e.errorMessage)}}):e._e()])]):e._e()])},[],!1,null,null,null).exports,Ct=function(e){e.component(Pt.name,Pt)},At={name:"p-loader"},Ft=(n(168),i(At,function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loader--overlay"},[t("div",{staticClass:"loader"},[t("div",{staticClass:"rect1"}),this._v(" "),t("div",{staticClass:"rect2"}),this._v(" "),t("div",{staticClass:"rect3"}),this._v(" "),t("div",{staticClass:"rect4"}),this._v(" "),t("div",{staticClass:"rect5"})])])}],!1,null,"9f7987f0",null).exports),Wt=function(e){e.component(Ft.name,Ft)},Nt=i({name:"p-modal",mixins:[{data:function(){return{stackClass:"unspecified",stackMinZIndex:0}},computed:{activeZIndex:function(){return this.isActive?this.getMaxZIndex()+2:this.getZIndex(this.$refs.stackable)}},methods:{getZIndex:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return 0;var t=window.getComputedStyle(e).getPropertyValue("z-index");return isNaN(t)?this.getZIndex(e.parentNode):t},getMaxZIndex:function(){return this.stackMinZIndex+2*this.getStack()},isActiveStack:function(){return this.getZIndex(this.$refs.stackable)>=this.getMaxZIndex()},getStack:function(){return document.getElementsByClassName(this.stackClass).length},hasStack:function(){return this.getStack()>0}}}],data:function(){return{data:null,isActive:!!this.value,isLoaded:!!this.value,stackClass:"modal--active",stackMinZIndex:200,themes:{default:"",primary:"modal--primary",secondary:"modal--secondary",info:"modal--info",success:"modal--success",warning:"modal--warning",danger:"modal--danger",dark:"modal--dark"}}},computed:{styles:function(){var e={};return e["modal--large"]=this.large,e["modal--x-large"]=this.extraLarge,e[this.themes[this.theme]]=!0,e["modal--active"]=this.isActive,e}},props:{name:{required:!0,type:String},title:{required:!1,type:String},value:{required:!1,type:Boolean,default:!1},large:{required:!1,type:Boolean,default:!1},extraLarge:{required:!1,type:Boolean,default:!1},noCloseButton:{required:!1,type:Boolean,default:!1},noHeader:{required:!1,type:Boolean,default:!1},noFooter:{required:!1,type:Boolean,default:!1},noEscClose:{required:!1,type:Boolean,default:!1},noOutsideClose:{required:!1,type:Boolean,default:!1},flush:{required:!1,type:Boolean,default:!1},theme:{required:!1,type:String,default:"default"}},methods:{open:function(){var e=this;this.isActive=!0,this.$proton.$emit("modal-opened",this.name),document.body.style.setProperty("overflow","hidden"),setTimeout(function(){e.isLoaded=!0},100)},close:function(){this.isActive=!1,this.isLoaded=!1,this.$proton.$emit("modal-closed",this.name),this.$nextTick(function(){this.hasStack()||document.body.style.removeProperty("overflow")})},toggle:function(){this.isActive?this.close():this.open()},listenForEscape:function(){var e=this,t=function(t){"Escape"===t.key&&e.isActive&&e.isActiveStack()&&e.close()};this.noEscClose||(document.addEventListener("keydown",t),this.$once("hook:destroyed",function(){document.removeEventListener("keydown",t)}))},listenForDirective:function(){var e=this;this.$proton.$on("toggle-modal-"+this.name,function(t){e.toggle(),e.data=t})},clickedOutside:function(){!this.noOutsideClose&&this.isLoaded&&this.isActiveStack()&&this.close()}},watch:{value:function(e){this.isActive=!!e},isActive:function(e){!!e!==this.value&&this.$emit("input",e),e?this.open():this.close()}},created:function(){this.listenForEscape(),this.listenForDirective()},beforeMount:function(){this.isActive&&this.open()}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.isActive,expression:"isActive"}],staticClass:"modal--overlay",style:{zIndex:e.activeZIndex}},[n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.clickedOutside,expression:"clickedOutside"}],ref:"stackable",staticClass:"modal",class:e.styles,style:{zIndex:e.activeZIndex}},[e.noHeader?e._e():n("div",{staticClass:"modal__header"},[e._t("header",[n("div",{staticClass:"modal__header--title"},[e.title?n("span",{domProps:{innerHTML:e._s(e.title)}}):e._e()]),e._v(" "),n("div",[e.noCloseButton?e._e():n("a",{staticClass:"modal__header--close-button",attrs:{href:"#"},on:{click:function(t){return t.stopPropagation(),e.close(t)}}},[e._v("×")])])],{data:e.data})],2),e._v(" "),n("div",{staticClass:"modal__body",class:{"modal__body--flush":e.flush}},[e._t("default",null,{data:e.data})],2),e._v(" "),e.noFooter?e._e():n("div",{staticClass:"modal__footer"},[e._t("footer",[n("p-button",{on:{click:function(t){return t.stopPropagation(),e.close(t)}}},[e._v("Close")])],{data:e.data})],2)])])},[],!1,null,null,null).exports,zt=function(e){e.component(Nt.name,Nt)},It=i({name:"p-pagination",props:{maxVisiblePages:{required:!1,type:Number,default:3},total:{required:!0,type:Number},value:{required:!0,type:Number}},computed:{current:{get:function(){return this.value},set:function(e){this.$emit("input",e)}},startPage:function(){var e=1;return 1===this.current?e:(e=this.current===this.total?this.total-this.maxVisiblePages+1:this.current-1,0===e&&(e=1),e)},endPage:function(){return Math.min(this.startPage+this.maxVisiblePages-1,this.total)},pages:function(){for(var e=[],t=this.startPage;t<=this.endPage;t+=1)e.push({name:t,isDisabled:t===this.current});return e},isOnFirstPage:function(){return 1===this.current},isOnLastPage:function(){return this.current===this.total}},methods:{onClickFirstPage:function(){this.$emit("input",1),this.$emit("first")},onClickPreviousPage:function(){this.$emit("input",this.current-1),this.$emit("previous")},onClickPage:function(e){this.$emit("input",e)},onClickNextPage:function(){this.$emit("input",this.current+1),this.$emit("next")},onClickLastPage:function(){this.$emit("input",this.total),this.$emit("last")},isPageActive:function(e){return this.current===e}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"pagination"},[n("li",{staticClass:"pagination--item"},[n("button",{staticClass:"button",attrs:{type:"button",disabled:e.isOnFirstPage},on:{click:e.onClickFirstPage}},[e._v("\n            First\n        ")])]),e._v(" "),n("li",{staticClass:"pagination--item"},[n("button",{staticClass:"button",attrs:{type:"button",disabled:e.isOnFirstPage},on:{click:e.onClickPreviousPage}},[e._v("\n            Previous\n        ")])]),e._v(" "),e._l(e.pages,function(t){return n("li",{key:t.name,staticClass:"pagination--item"},[n("button",{staticClass:"button",class:{active:e.isPageActive(t.name)},attrs:{type:"button",disabled:t.isDisabled},on:{click:function(n){return e.onClickPage(t.name)}}},[e._v("\n            "+e._s(t.name)+"\n        ")])])}),e._v(" "),n("li",{staticClass:"pagination--item"},[n("button",{staticClass:"button",attrs:{type:"button",disabled:e.isOnLastPage},on:{click:e.onClickNextPage}},[e._v("\n            Next\n        ")])]),e._v(" "),n("li",{staticClass:"pagination--item"},[n("button",{staticClass:"button",attrs:{type:"button",disabled:e.isOnLastPage},on:{click:e.onClickLastPage}},[e._v("\n            Last\n        ")])])],2)},[],!1,null,null,null).exports,Rt=function(e){e.component(It.name,It)},Bt=i({name:"p-password",data:function(){return{revealed:!1,type:"password"}},props:{name:String,placeholder:String,label:String,help:String,required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},monospaced:{type:Boolean,default:!1},neverShow:{required:!1,type:Boolean,default:!1},showText:{required:!1,type:String,default:"Show Password"},hideText:{required:!1,type:String,default:"Hide Password"},autocomplete:{required:!1,type:String,default:""},autofocus:{required:!1,type:Boolean,default:!1}},methods:{toggleVisibility:function(){this.type="password"===this.type?"text":"password",this.revealed=!this.revealed}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form__group"},[e.label?n("label",{staticClass:"form__label",attrs:{for:e.name},domProps:{innerHTML:e._s(e.label)}}):e._e(),e._v(" "),n("input",{staticClass:"form__control",class:{"font-mono":e.monospaced},attrs:{id:e.name,name:e.name,type:e.type,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autocomplete,autofocus:e.autofocus}}),e._v(" "),e.help||!e.neverShow?n("div",{staticClass:"form__control--meta"},[n("div",{staticClass:"form__help"},[e.help?n("span",{domProps:{innerHTML:e._s(e.help)}}):e._e()]),e._v(" "),n("div",{staticClass:"form__password"},[e.neverShow?e._e():n("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggleVisibility(t)}}},[e._v("\n                "+e._s(e.revealed?e.hideText:e.showText)+"\n            ")])])]):e._e()])},[],!1,null,null,null).exports,qt=function(e){e.component(Bt.name,Bt)},Ut=i({name:"p-radio",model:{prop:"modelValue",event:"input"},props:{name:{required:!0,type:String},id:{required:!0,type:String},value:{required:!1,type:String,default:""},modelValue:{default:void 0},checked:{required:!1,type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},computed:{state:function(){return void 0===this.modelValue?this.checked:this.modelValue===this.value}},methods:{onChange:function(){this.toggle()},toggle:function(){this.$emit("input",this.value)}},watch:{checked:function(e){e!==this.state&&this.toggle()}},mounted:function(){this.checked&&!this.state&&this.toggle()}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form__radio-container"},[n("label",{attrs:{for:e.id}},[n("input",{staticClass:"form__radio",attrs:{type:"radio",id:e.id,name:e.name,readonly:e.readonly,disabled:e.disabled},domProps:{value:e.value,checked:e.state},on:{change:e.onChange}}),e._v(" "),e._t("default")],2)])},[],!1,null,null,null).exports,$t=i({name:"p-radio-group",props:{name:String,label:String,help:String,value:{required:!1,type:String,default:void 0},hasError:{required:!1,type:Boolean,default:!1},errorMessage:{required:!1,type:String,default:""},inline:{required:!1,type:Boolean,default:!1}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("fieldset",{staticClass:"form__radio-group"},[e.label?n("label",{staticClass:"form__label",attrs:{for:e.name},domProps:{innerHTML:e._s(e.label)}}):e._e(),e._v(" "),n("div",{class:{"form__radio-group--inline":e.inline}},[e._t("default")],2),e._v(" "),n("div",{staticClass:"form__control--meta"},[n("div",{staticClass:"form__help"},[e.help?n("span",{domProps:{innerHTML:e._s(e.help)}}):e._e(),e._v(" "),e.errorMessage?n("span",{staticClass:"form__error--message",domProps:{innerHTML:e._s(e.errorMessage)}}):e._e()])])])},[],!1,null,null,null).exports,Jt=function(e){e.component(Ut.name,Ut),e.component($t.name,$t)};function Vt(e){return(Vt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var Gt=i({name:"p-select",data:function(){return{isOpen:!1,search:"",highlighted:0,model:this.value}},props:{name:{required:!0,type:String},value:{required:!1,default:null},label:{required:!1,type:String},help:{required:!1,type:String},placeholder:{required:!1,type:String,default:"Please select an option..."},required:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},hasError:{required:!1,type:Boolean,default:!1},errorMessage:{required:!1,type:String,default:""},options:{required:!1,type:Array,default:function(){return[]}},filterFunction:{required:!1,default:null},filterable:{required:!1,type:Boolean,default:!1},dark:{required:!1,type:Boolean,default:!1},showControls:{required:!1,type:Boolean,default:!1}},computed:{selected:{get:function(){var e=this;if(null===this.model)return this.model;if("object"===Vt(_.head(this.options))){var t=_.findIndex(this.options,function(t){return"object"===Vt(e.model)?t.value===e.model.value:t.value===e.model});return this.options[t]}return this.model},set:function(e){this.model=e}},filteredOptions:function(){var e=this;return null==this.filterFunction?this.options.filter(function(t){t.value;return(t.label||t).toLowerCase().startsWith(e.search.toLowerCase())}):this.filterFunction(this.search,this.options)}},watch:{search:function(){this.resetHighlighted()},value:function(e){null!==e&&this.select(e)}},methods:{toggle:function(){this.isOpen?this.close():this.open()},open:function(){var e=this;this.isOpen=!0,this.$nextTick(function(){e.filterable&&e.$refs.search.focus(),e.setupPopper()})},close:function(){this.isOpen&&(this.resetSearch(),this.resetHighlighted(),this.isOpen=!1,this.$refs.button.focus())},setupPopper:function(){void 0===this.popper?this.popper=new Tt.a(this.$refs.button,this.$refs.dropdown,{placement:"bottom"}):this.popper.scheduleUpdate()},resetSearch:function(){this.search=""},select:function(e){var t=null;t="object"===Vt(e)?e.value:e,this.$emit("input",t),this.$emit("change",t),this.selected=e,this.close()},selectHighlighted:function(){this.select(this.filteredOptions[this.highlighted])},isSelected:function(e){return e.value&&null!==this.selected?e.value===this.selected.value||e.value===this.selected:e===this.selected},isHighlighted:function(e){return e===this.highlighted},resetHighlighted:function(){this.highlighted=0,this.scrollToHighlighted()},highlight:function(e){this.highlighted=e,this.highlighted>this.filteredOptions.length-1&&(this.highlighted=0),this.highlighted<0&&(this.highlighted=this.filteredOptions.length-1),this.scrollToHighlighted()},highlightNext:function(){this.highlight(this.highlighted+1)},highlightPrevious:function(){this.highlight(this.highlighted-1)},scrollToHighlighted:function(){this.$refs.options.children[this.highlighted].scrollIntoView({block:"nearest"})}},beforeDestroy:function(){this.popper&&this.popper.destroy()}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form__group"},[e.label?n("label",{staticClass:"form__label",attrs:{for:e.name},domProps:{innerHTML:e._s(e.label)}}):e._e(),e._v(" "),n("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.close,expression:"close"}],staticClass:"form__select",class:{"form__select--open":e.isOpen,"form__select--dark":e.dark}},[n("button",{ref:"button",staticClass:"form__select-button",class:{form__error:e.hasError},attrs:{type:"button",disabled:e.disabled},on:{click:e.toggle,keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.close(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:(t.preventDefault(),e.highlightNext(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:(t.preventDefault(),e.highlightPrevious(t))},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.selectHighlighted(t))}]}},[null!==e.selected?n("span",{domProps:{innerHTML:e._s(e.selected.label||e.selected)}}):n("span",{staticClass:"form__select-placeholder",domProps:{innerHTML:e._s(e.placeholder)}})]),e._v(" "),n("div",{staticClass:"form__select-arrow pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker"},[n("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],ref:"dropdown",staticClass:"form__select-dropdown"},[e.filterable?n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],ref:"search",staticClass:"form__select-search",attrs:{type:"search"},domProps:{value:e.search},on:{keydown:[function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"esc",27,t.key,["Esc","Escape"])?null:e.close(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?null:e.highlightNext(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?null:e.highlightPrevious(t)},function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:(t.preventDefault(),e.selectHighlighted(t))}],input:function(t){t.target.composing||(e.search=t.target.value)}}}):e._e(),e._v(" "),e.showControls?n("div",{staticClass:"form__select-controls"},[n("span",[e._v("Press enter to select")]),e._v(" "),n("span",[e._v("↑ ↓ to navigate")]),e._v(" "),n("span",[e._v("esc to dismiss")])]):e._e(),e._v(" "),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.filteredOptions.length>0,expression:"filteredOptions.length > 0"}],ref:"options",staticClass:"form__select-options"},e._l(e.filteredOptions,function(t,r){return n("li",{key:r,staticClass:"form__select-option",class:{"form__select-option--selected":e.isSelected(t),"form__select-option--highlighted":e.isHighlighted(r)},on:{click:function(n){return e.select(t)}}},[e._v(e._s(t.label||t))])}),0),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:0===e.filteredOptions.length,expression:"filteredOptions.length === 0"}],staticClass:"form__select-search-empty"},[e._v('\n                No results found for "'+e._s(e.search)+'"\n            ')])])]),e._v(" "),e.help||e.errorMessage?n("div",{staticClass:"form__control--meta"},[n("div",{staticClass:"form__help"},[e.help?n("span",{domProps:{innerHTML:e._s(e.help)}}):e._e(),e._v(" "),e.errorMessage?n("span",{staticClass:"form__error--message",domProps:{innerHTML:e._s(e.errorMessage)}}):e._e()])]):e._e()])},[],!1,null,null,null).exports,Xt=i({name:"p-option",props:{value:{required:!0},label:{required:!0,type:[String,Number]},disabled:{required:!1,type:Boolean,default:!1},selected:{required:!1,type:Boolean,default:!1}}},function(){var e=this,t=e.$createElement;return(e._self._c||t)("li",{staticClass:"form__select-option",class:{"form__select-option--selected":e.selected},on:{click:function(t){return e.$emit("click",e.value)}}},[e._v(e._s(e.label))])},[],!1,null,null,null).exports,Zt=function(e){e.component(Gt.name,Gt),e.component(Xt.name,Xt)},Kt=i({name:"p-slug",data:function(){return{shouldSlugify:!1}},computed:{model:{get:function(){return this.value},set:function(e){this.$emit("input",this.slugify(e))}}},props:{name:String,placeholder:String,label:String,help:String,value:{type:[String,Number],default:""},type:{type:String,default:"text"},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},monospaced:{type:Boolean,default:!1},hasError:{required:!1,type:Boolean,default:!1},errorMessage:{required:!1,type:String,default:""},autocomplete:{required:!1,type:String,default:""},autofocus:{required:!1,type:Boolean,default:!1},delimiter:{required:!1,type:String,default:"-"},watch:{required:!1,type:String,default:""}},watch:{watch:function(e){this.shouldSlugify&&(this.model=this.slugify(e)),this.updateState()},value:function(e){this.model=e,this.updateState()}},methods:{updateState:function(){var e=null===this.model,t=this.model===this.slugify(this.watch);this.shouldSlugify=e||t},slugify:function(e){if(e){var t="àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧ",n=new RegExp(t.split("").join("|"),"g");return e.toString().toLowerCase().trim().replace(n,function(e){return"aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh".charAt(t.indexOf(e))}).replace(/&+/gi,"and").replace(/\s+/g,this.delimiter).replace(/[^\w\-]+/g,"").replace(new RegExp(this.delimiter+"{2,}","g"),this.delimiter)}return null},onBlur:function(){null==this.model&&(this.model=this.slugify(this.watch))}},mounted:function(){this.model=this.value,this.updateState()}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form__group"},[e.label?n("label",{staticClass:"form__label",attrs:{for:e.name},domProps:{innerHTML:e._s(e.label)}}):e._e(),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.model,expression:"model",modifiers:{lazy:!0}}],ref:"input",staticClass:"form__control",class:{"font-mono":e.monospaced,form__error:e.hasError},attrs:{id:e.name,name:e.name,type:e.type,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,autocomplete:e.autocomplete,autofocus:e.autofocus},domProps:{value:e.model},on:{blur:e.onBlur,change:function(t){e.model=t.target.value}}}),e._v(" "),e.help||e.errorMessage?n("div",{staticClass:"form__control--meta"},[n("div",{staticClass:"form__help"},[e.help?n("span",{domProps:{innerHTML:e._s(e.help)}}):e._e(),e._v(" "),e.errorMessage?n("span",{staticClass:"form__error--message",domProps:{innerHTML:e._s(e.errorMessage)}}):e._e()])]):e._e()])},[],!1,null,null,null).exports,Qt=function(e){e.component(Kt.name,Kt)},en=i({name:"p-sortable-handle",inject:["sortableListHandleClass"],mounted:function(){this.$el.classList.add(this.sortableListHandleClass)},render:function(){return this.$slots.default[0]}},void 0,void 0,!1,null,null,null).exports,tn=i({name:"p-sortable-item",inject:["sortableListItemClass"],mounted:function(){this.$el.classList.add(this.sortableListItemClass)},render:function(){return this.$slots.default[0]}},void 0,void 0,!1,null,null,null).exports,nn=n(142);function rn(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var an=i({name:"p-sortable-list",props:{value:{required:!0},itemClass:{type:String,default:"sortable-list-item"},handleClass:{type:String,default:"sortable-list-handle"}},provide:function(){return{sortableListItemClass:this.itemClass,sortableListHandleClass:this.handleClass}},methods:{move:function(e,t,n){var r=[].concat(rn(e.slice(0,t)),rn(e.slice(t+1,e.length)));return[].concat(rn(r.slice(0,n)),[e[t]],rn(r.slice(n,r.length)))}},mounted:function(){var e=this;new nn.Sortable(this.$el,{draggable:".".concat(this.itemClass),handle:".".concat(this.handleClass),mirror:{constrainDimensions:!0}}).on("sortable:stop",function(t){var n=t.oldIndex,r=t.newIndex;e.$emit("input",e.move(e.value,n,r))})},render:function(){return this.$scopedSlots.default({items:this.value})}},void 0,void 0,!1,null,null,null).exports,sn=function(e){e.component(en.name,en),e.component(tn.name,tn),e.component(an.name,an)},on=i({name:"p-tab",data:function(){return{isActive:!1}},props:{name:{required:!0},active:{type:Boolean,required:!1,default:!1}},computed:{hash:function(){return"#"+this.name.toLowerCase().replace(/ /g,"-")}},methods:{activate:function(){this.isActive=!0},deactivate:function(){this.isActive=!1}},mounted:function(){this.isActive=this.active}},function(){var e=this.$createElement;return(this._self._c||e)("div",{directives:[{name:"show",rawName:"v-show",value:this.isActive,expression:"isActive"}]},[this._t("default")],2)},[],!1,null,null,null).exports,un=i({name:"p-tabs",data:function(){return{tabs:null,foundActiveTab:!1,hoveringOver:null,dragOverAt:!1,dragEnterAt:!1,dragLeaveAt:!1,dragEndAt:!1,enteredTab:!1,hoveringOverFor:!1}},computed:{count:function(){return this.tabs.length}},watch:{tabs:function(){this.findAndSelectTab()},dragOverAt:function(){var e=this.dragEnterAt,t=this.dragOverAt-e;t>400&&0==this.enteredTab&&(console.log("selecting tab"),this.selectTab(this.hoveringOver,!0),this.enteredTab=!0),this.hoveringOverFor=t}},methods:{isHovering:function(e){return this.hoveringOver==e},findTab:function(e){return this.tabs.find(function(t){return t.hash==e})},selectTab:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.findTab(e);void 0!==r&&(_.each(this.tabs,function(e,n){e.hash==r.hash?(e.activate(),t.active=n):e.deactivate()}),n&&this.$router.replace({hash:r.hash}))},findAndSelectTab:function(){var e=this;_.each(this.tabs,function(t){if(t.isActive)return e.selectTab(t.hash),e.foundActiveTab=!0,!1}),!this.foundActiveTab&&this.tabs[0]&&this.selectTab(this.tabs[0].hash),this.$route.hash&&this.selectTab(this.$route.hash)},dragEnter:function(){this.dragEnterAt=Date.now(),this.enteredTab=!1},dragOver:function(e){this.dragOverAt=Date.now(),this.hoveringOver=e},dragLeave:function(){this.hoveringOver=null}},created:function(){this.tabs=this.$children},mounted:function(){this.findAndSelectTab()}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tabs"},[n("ul",{staticClass:"tab__list"},e._l(e.tabs,function(t){return n("li",{key:t.name,staticClass:"tab",class:{"tab--active":t.isActive,"tab--hovering":e.isHovering(t.hash)},on:{dragover:function(n){return n.preventDefault(),e.dragOver(t.hash)},dragenter:function(t){return t.preventDefault(),e.dragEnter(t)},dragleave:function(t){return t.preventDefault(),e.dragLeave(t)},dragend:function(t){return t.preventDefault(),e.dragLeave(t)},drop:function(e){e.preventDefault()}}},[n("a",{staticClass:"tab__link",attrs:{href:t.hash},on:{click:function(n){return n.preventDefault(),e.selectTab(t.hash,!0)},focus:function(n){return e.selectTab(t.hash,!0)}}},[e._v(e._s(t.name))])])}),0),e._v(" "),n("div",{staticClass:"tab__panel"},[e._t("default")],2)])},[],!1,null,null,null).exports,ln=function(e){e.component(un.name,un),e.component(on.name,on)},dn=i({name:"p-textarea",props:{name:String,placeholder:String,label:String,help:String,value:{type:[String,Number],default:""},required:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},monospaced:{type:Boolean,default:!1},hasError:{required:!1,type:Boolean,default:!1},errorMessage:{required:!1,type:String,default:""},rows:{required:!1,type:Number,default:3}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form__group"},[e.label?n("label",{staticClass:"form__label",attrs:{for:e.name},domProps:{innerHTML:e._s(e.label)}}):e._e(),e._v(" "),n("textarea",{staticClass:"form__control",class:{"font-mono":e.monospaced,form__error:e.hasError},attrs:{id:e.name,name:e.name,placeholder:e.placeholder,readonly:e.readonly,disabled:e.disabled,rows:e.rows},domProps:{value:e.value},on:{input:function(t){return e.$emit("input",t.target.value)}}}),e._v(" "),e.help||e.errorMessage?n("div",{staticClass:"form__control--meta"},[n("div",{staticClass:"form__help"},[e.help?n("span",{domProps:{innerHTML:e._s(e.help)}}):e._e(),e._v(" "),e.errorMessage?n("span",{staticClass:"form__error--message",domProps:{innerHTML:e._s(e.errorMessage)}}):e._e()])]):e._e()])},[],!1,null,null,null).exports,cn=function(e){e.component(dn.name,dn)},hn=i({name:"p-toast",props:["message"],data:function(){return{level:"default",levels:{default:"",primary:"toast--primary",secondary:"toast--secondary",info:"toast--info",success:"toast--success",warning:"toast--warning",danger:"toast--danger",failed:"toast--danger",dark:"toast--dark"},body:"",show:!1}},methods:{toast:function(e){this.body=e,this.show=!0,this.hide()},hide:function(){var e=this;setTimeout(function(){e.show=!1},4e3)},listenForDirective:function(){var e=this;this.$proton.$on("toast",function(t){e.level=t.level,e.toast(t.message)})}},created:function(){this.message&&this.toast(this.message),this.listenForDirective()}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{directives:[{name:"show",rawName:"v-show",value:e.show,expression:"show"}],staticClass:"toast",class:[e.levels[e.level]],attrs:{role:"alert"}},["default"!==e.level&&"dark"!==e.level&&"secondary"!==e.level?n("span",{staticClass:"toast__badge"},[e._v("\n        "+e._s(e.level)+"\n    ")]):e._e(),e._v(" "),n("span",{staticClass:"toast__message"},[e._v(e._s(e.body))])])},[],!1,null,null,null).exports,_n=function(e){e.component(hn.name,hn)},fn=i({name:"p-toggle",data:function(){return{isChecked:this.checked}},props:{name:String,label:String,help:String,checked:{required:!1,type:Boolean,default:!1},value:{required:!1,type:String|Boolean,default:!0},required:{required:!1,type:Boolean,default:!1},readonly:{required:!1,type:Boolean,default:!1},disabled:{required:!1,type:Boolean,default:!1}},methods:{toggle:function(){this.isChecked=!this.isChecked,this.$emit("input",this.isChecked)}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form__group"},[e.label?n("label",{staticClass:"form__label",attrs:{for:e.name},domProps:{innerHTML:e._s(e.label)}}):e._e(),e._v(" "),n("input",{staticClass:"toggle",attrs:{type:"checkbox",id:e.name,name:e.name,readonly:e.readonly,disabled:e.disabled,required:e.required},domProps:{value:e.value,checked:e.isChecked},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"space",32,t.key,[" ","Spacebar"])?null:e.toggle(t)},click:e.toggle}}),e._v(" "),e.help?n("p",{staticClass:"form__help",domProps:{innerHTML:e._s(e.help)}}):e._e()])},[],!1,null,null,null).exports,mn=function(e){e.component(fn.name,fn)};var pn=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},yn=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),gn=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},vn={container:!1,delay:0,html:!1,placement:"top",title:"",template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",offset:0,arrowSelector:".tooltip-arrow, .tooltip__arrow",innerSelector:".tooltip-inner, .tooltip__inner"},Mn=function(){function e(t,n){pn(this,e),Ln.call(this),n=gn({},vn,n),t.jquery&&(t=t[0]),this.reference=t,this.options=n;var r="string"==typeof n.trigger?n.trigger.split(" ").filter(function(e){return-1!==["click","hover","focus"].indexOf(e)}):[];this._isOpen=!1,this._popperOptions={},this._setEventListeners(t,r,n)}return yn(e,[{key:"_create",value:function(e,t,n,r){var a=window.document.createElement("div");a.innerHTML=t.trim();var i=a.childNodes[0];i.id="tooltip_"+Math.random().toString(36).substr(2,10),i.setAttribute("aria-hidden","false");var s=a.querySelector(this.options.innerSelector);return this._addTitleContent(e,n,r,s),i}},{key:"_addTitleContent",value:function(e,t,n,r){if(1===t.nodeType||11===t.nodeType)n&&r.appendChild(t);else if((i=t)&&"[object Function]"==={}.toString.call(i)){var a=t.call(e);n?r.innerHTML=a:r.textContent=a}else n?r.innerHTML=t:r.textContent=t;var i}},{key:"_show",value:function(e,t){if(this._isOpen&&!this._isOpening)return this;if(this._isOpen=!0,this._tooltipNode)return this._tooltipNode.style.visibility="visible",this._tooltipNode.setAttribute("aria-hidden","false"),this.popperInstance.update(),this;var n=e.getAttribute("title")||t.title;if(!n)return this;var r=this._create(e,t.template,n,t.html);e.setAttribute("aria-describedby",r.id);var a=this._findContainer(t.container,e);return this._append(r,a),this._popperOptions=gn({},t.popperOptions,{placement:t.placement}),this._popperOptions.modifiers=gn({},this._popperOptions.modifiers,{arrow:{element:this.options.arrowSelector},offset:{offset:t.offset}}),t.boundariesElement&&(this._popperOptions.modifiers.preventOverflow={boundariesElement:t.boundariesElement}),this.popperInstance=new Tt.a(e,r,this._popperOptions),this._tooltipNode=r,this}},{key:"_hide",value:function(){return this._isOpen?(this._isOpen=!1,this._tooltipNode.style.visibility="hidden",this._tooltipNode.setAttribute("aria-hidden","true"),this):this}},{key:"_dispose",value:function(){var e=this;return this._events.forEach(function(t){var n=t.func,r=t.event;e.reference.removeEventListener(r,n)}),this._events=[],this._tooltipNode&&(this._hide(),this.popperInstance.destroy(),this.popperInstance.options.removeOnDestroy||(this._tooltipNode.parentNode.removeChild(this._tooltipNode),this._tooltipNode=null)),this}},{key:"_findContainer",value:function(e,t){return"string"==typeof e?e=window.document.querySelector(e):!1===e&&(e=t.parentNode),e}},{key:"_append",value:function(e,t){t.appendChild(e)}},{key:"_setEventListeners",value:function(e,t,n){var r=this,a=[],i=[];t.forEach(function(e){switch(e){case"hover":a.push("mouseenter"),i.push("mouseleave");break;case"focus":a.push("focus"),i.push("blur");break;case"click":a.push("click"),i.push("click")}}),a.forEach(function(t){var a=function(t){!0!==r._isOpening&&(t.usedByTooltip=!0,r._scheduleShow(e,n.delay,n,t))};r._events.push({event:t,func:a}),e.addEventListener(t,a)}),i.forEach(function(t){var a=function(t){!0!==t.usedByTooltip&&r._scheduleHide(e,n.delay,n,t)};r._events.push({event:t,func:a}),e.addEventListener(t,a),"click"===t&&n.closeOnClickOutside&&document.addEventListener("mousedown",function(t){if(r._isOpening){var n=r.popperInstance.popper;e.contains(t.target)||n.contains(t.target)||a(t)}},!0)})}},{key:"_scheduleShow",value:function(e,t,n){var r=this;this._isOpening=!0;var a=t&&t.show||t||0;this._showTimeout=window.setTimeout(function(){return r._show(e,n)},a)}},{key:"_scheduleHide",value:function(e,t,n,r){var a=this;this._isOpening=!1;var i=t&&t.hide||t||0;window.setTimeout(function(){if(window.clearTimeout(a._showTimeout),!1!==a._isOpen&&document.body.contains(a._tooltipNode)){if("mouseleave"===r.type)if(a._setTooltipNodeEvent(r,e,t,n))return;a._hide(e,n)}},i)}},{key:"_updateTitleContent",value:function(e){if(void 0!==this._tooltipNode){var t=this._tooltipNode.parentNode.querySelector(this.options.innerSelector);this._clearTitleContent(t,this.options.html,this.reference.getAttribute("title")||this.options.title),this._addTitleContent(this.reference,e,this.options.html,t),this.options.title=e,this.popperInstance.update()}else void 0!==this.options.title&&(this.options.title=e)}},{key:"_clearTitleContent",value:function(e,t,n){1===n.nodeType||11===n.nodeType?t&&e.removeChild(n):t?e.innerHTML="":e.textContent=""}}]),e}(),Ln=function(){var e=this;this.show=function(){return e._show(e.reference,e.options)},this.hide=function(){return e._hide()},this.dispose=function(){return e._dispose()},this.toggle=function(){return e._isOpen?e.hide():e.show()},this.updateTitleContent=function(t){return e._updateTitleContent(t)},this._events=[],this._setTooltipNodeEvent=function(t,n,r,a){var i=t.relatedreference||t.toElement||t.relatedTarget;return!!e._tooltipNode.contains(i)&&(e._tooltipNode.addEventListener(t.type,function r(i){var s=i.relatedreference||i.toElement||i.relatedTarget;e._tooltipNode.removeEventListener(t.type,r),n.contains(s)||e._scheduleHide(n,a.delay,a,i)}),!0)}},bn=Mn,Yn=i({name:"p-tooltip",props:{placement:{required:!1,type:String,default:"top"}},mounted:function(){new bn(this.$refs.body,{placement:this.placement,title:this.$refs.content.innerHTML,html:!0})}},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"flex"},[t("div",{ref:"body"},[this._t("default")],2),this._v(" "),t("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],ref:"content"},[this._t("content")],2)])},[],!1,null,null,null).exports,wn=function(e){e.component(Yn.name,Yn)},kn=i({name:"p-treeview-node",props:{node:{type:Object,required:!0},value:{required:!1},onClick:{required:!0,type:Function}},data:function(){return{open:!1}},computed:{isFolder:function(){return this.node.children&&this.node.children.length},selected:function(){return this.value===this.node}},methods:{toggle:function(){this.isFolder&&(this.open=!this.open)}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ul",{staticClass:"treeview"},[n("li",{staticClass:"flex-row"},[n("div",{staticClass:"treeview--node",class:{"treeview--node__folder":e.isFolder,"treeview--node__selected":e.selected}},[e.isFolder?n("a",{staticClass:"treeview--toggle",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggle(t)}}},[e.open?n("div",{staticClass:"treeview--icon"},[n("svg",{staticClass:"fill-current",attrs:{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512"}},[n("path",{attrs:{d:"M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"}})])]):n("div",{staticClass:"treeview--icon"},[n("svg",{staticClass:"fill-current",attrs:{width:"16",height:"16",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 192 512"}},[n("path",{attrs:{d:"M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"}})])])]):n("div",{staticClass:"pr-2",staticStyle:{width:"24px",height:"16px"}}),e._v(" "),e._t("prepend",null,{node:e.node,open:e.open}),e._v(" "),n("span",{staticClass:"treeview--label",on:{click:function(t){return e.onClick(e.node)}}},[e._t("label",[e._v("\n                    "+e._s(e.node.name)+"\n                ")],{node:e.node,open:e.open})],2),e._v(" "),e._t("append",null,{node:e.node,open:e.open})],2),e._v(" "),e.isFolder?n("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}],staticClass:"treeview--children"},e._l(e.node.children,function(t,r){return n("p-treeview-node",{key:r,attrs:{node:t,"on-click":e.onClick},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots),function(t){return{key:t,fn:function(n){return[e._t(t,null,null,n)]}}})],null,!0),model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})}),1):e._e()])])},[],!1,null,null,null).exports,Dn=i({name:"p-treeview",components:{"p-treeview-node":kn},data:function(){return{model:this.value}},props:{items:{type:Array,required:!0},value:{type:Object,required:!1}},computed:{computedValue:{get:function(){return this.model},set:function(e){this.model=e,this.$emit("input",e)}}},watch:{value:function(e){this.model=e}},methods:{onClick:function(e){this.$emit("click",e),this.computedValue=e}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.items,function(t,r){return n("p-treeview-node",{key:r,attrs:{node:t,"on-click":e.onClick},scopedSlots:e._u([e._l(Object.keys(e.$scopedSlots),function(t){return{key:t,fn:function(n){return[e._t(t,null,null,n)]}}})],null,!0),model:{value:e.computedValue,callback:function(t){e.computedValue=t},expression:"computedValue"}})}),1)},[],!1,null,null,null).exports,Tn=function(e){e.component(Dn.name,Dn),e.component(kn.name,kn)},Sn=i({name:"p-upload",data:function(){return{files:[],isDraggedOver:!1,error:""}},props:{name:String,placeholder:String,label:String,help:String,multiple:Boolean,accept:String,required:Boolean,errorMessage:{required:!1,type:String,default:""}},methods:{enter:function(){this.isDraggedOver=!0},leave:function(){this.isDraggedOver=!1},drop:function(e){this.leave(),this.onFileChange(e)},resetError:function(){this.error=""},setError:function(e){this.error=e},onFileChange:function(e){this.resetError();var t=Array.from(e.target.files||e.dataTransfer.files);t=_.filter(t,function(e){return this.checkAcceptance(e)}.bind(this)),!this.multiple&&t.length>1&&(t.length=1),this.files=t,this.emitInput()},remove:function(e){this.files.splice(e,1),this.emitInput()},emitInput:function(){this.multiple?this.$emit("input",this.files):this.$emit("input",this.files[0])},filesize:function(e){if(Math.abs(e)<1e3)return e+" B";var t=["kB","MB","GB","TB","PB","EB","ZB","YB"],n=-1;do{e/=1e3,++n}while(Math.abs(e)>=1e3&&n<t.length-1);return e.toFixed(1)+" "+t[n]},checkAcceptance:function(e){if(!this.accept)return!0;var t=this.accept.split(",");if(0===t.length)return!0;for(var n=!1,r=0;r<t.length&&!n;r++){var a=t[r].trim();if(a)if("."===a.substring(0,1)){var i=e.name.lastIndexOf(".");(i>=0?e.name.substring(i):"").toLowerCase()===a.toLowerCase()&&(n=!0)}else e.type.match(a)&&(n=!0)}return n||this.setError("Only files of type <b>"+t.join(", ")+"</b> are accepted."),n}}},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form__group"},[e.label?n("label",{staticClass:"form__label",attrs:{for:e.name},domProps:{innerHTML:e._s(e.label)}}):e._e(),e._v(" "),n("div",{staticClass:"upload__container",class:{"upload__container--dragged":e.isDraggedOver},on:{dragover:function(t){return t.preventDefault(),e.enter(t)},dragenter:function(t){return t.preventDefault(),e.enter(t)},dragleave:function(t){return t.preventDefault(),e.leave(t)},dragend:function(t){return t.preventDefault(),e.leave(t)},drop:function(t){return t.preventDefault(),e.onFileChange(t)}}},[n("input",{ref:"input",staticClass:"upload__control",attrs:{type:"file",name:e.name,id:e.name,multiple:e.multiple,required:e.required},on:{change:e.onFileChange}}),e._v(" "),n("label",{staticClass:"upload__label",attrs:{for:e.name}},[n("strong",[e._v("Drag files here")]),e._v(" or click to select\n        ")])]),e._v(" "),e.files.length?n("table",{staticClass:"upload__files"},[n("tbody",e._l(e.files,function(t,r){return n("tr",{key:t.name,staticClass:"upload__file"},[n("td",{staticClass:"upload__file--name"},[e._v(e._s(t.name))]),e._v(" "),n("td",{staticClass:"upload__file--size"},[e._v(e._s(e.filesize(t.size)))]),e._v(" "),n("td",{staticClass:"upload__file--actions"},[n("p-button",{on:{click:function(t){return t.preventDefault(),e.remove(r)}}},[e._v("Remove")])],1)])}),0)]):e._e(),e._v(" "),e.help||e.errorMessage||e.error?n("div",{staticClass:"form__control--meta"},[n("div",{staticClass:"form__help"},[e.help?n("span",{domProps:{innerHTML:e._s(e.help)}}):e._e(),e._v(" "),e.errorMessage?n("span",{staticClass:"form__error--message",domProps:{innerHTML:e._s(e.errorMessage)}}):e._e(),e._v(" "),e.error?n("span",{staticClass:"form__error--message",domProps:{innerHTML:e._s(e.error)}}):e._e()])]):e._e()])},[],!1,null,null,null).exports,xn=function(e){e.component(Sn.name,Sn)};function jn(e){return(jn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var On="undefined"!=typeof window&&("ontouchstart"in window||navigator.msMaxTouchPoints>0)?["touchstart","click"]:["click"],En=[];function Hn(e){var t="function"==typeof e;if(!t&&"object"!==jn(e))throw new Error("v-click-outside: Binding value must be a function or an object");return{handler:t?e:e.handler,middleware:e.middleware||function(e){return e},events:e.events||On}}function Pn(e){var t=e.el,n=e.event,r=e.handler,a=e.middleware;n.target!==t&&!t.contains(n.target)&&a(n,t)&&r(n,t)}var Cn={bind:function(e,t){var n=Hn(t.value),r=n.handler,a=n.middleware,i=n.events,s={el:e,eventHandlers:i.map(function(t){return{event:t,handler:function(t){return Pn({event:t,el:e,handler:r,middleware:a})}}})};s.eventHandlers.forEach(function(e){var t=e.event,n=e.handler;return document.addEventListener(t,n)}),En.push(s)},update:function(e,t){var n=Hn(t.value),r=n.handler,a=n.middleware,i=n.events,s=En.find(function(t){return t.el===e});s.eventHandlers.forEach(function(e){var t=e.event,n=e.handler;return document.removeEventListener(t,n)}),s.eventHandlers=i.map(function(t){return{event:t,handler:function(t){return Pn({event:t,el:e,handler:r,middleware:a})}}}),s.eventHandlers.forEach(function(e){var t=e.event,n=e.handler;return document.addEventListener(t,n)})},unbind:function(e){En.find(function(t){return t.el===e}).eventHandlers.forEach(function(e){var t=e.event,n=e.handler;return document.removeEventListener(t,n)})},instances:En},An={install:function(e){e.directive("click-outside",Cn)},directive:Cn};var Fn="undefined"!=typeof window?{bind:function(e,t,n){e.addEventListener("click",function(e){n.context.$proton.$emit("toggle-collapse-"+t.arg)})}}:{},Wn={install:function(e){e.directive("collapse",Fn)},directive:Fn};var Nn="undefined"!=typeof window?{bind:function(e,t,n){e.addEventListener("click",function(e){n.context.$proton.$emit("toggle-modal-"+t.arg,t.value)})}}:{},zn={install:function(e){e.directive("modal",Nn)},directive:Nn};var In="undefined"!=typeof window?{bind:function(e,t,n){e.addEventListener("click",function(e){n.context.$proton.$emit("toast",{level:t.arg||"default",message:t.value})})}}:{},Rn={install:function(e){e.directive("toast",In)},directive:In};var Bn="undefined"!=typeof window?{bind:function(e,t){new bn(e,{placement:t.arg||"top",title:t.value,html:!0})}}:{},qn={install:function(e){e.directive("tooltip",Bn)},directive:Bn},Un=n(0),$n={install:function(e){e.use(pt),e.prototype.moment=function(){return Un},Object.values(r).forEach(function(t){e.use(t)}),Object.values(a).forEach(function(t){e.use(t)})}};"undefined"!=typeof window&&window.Vue&&window.Vue.use($n);t.default=$n}])});

/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/axios/node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/axios/node_modules/is-buffer/index.js":
/*!************************************************************!*\
  !*** ./node_modules/axios/node_modules/is-buffer/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    console.log('Component mounted.');
  }
});

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row justify-content-center" }, [
        _c("div", { staticClass: "col-md-8" }, [
          _c("div", { staticClass: "card card-default" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("Example Component")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _vm._v(
                "\n                    I'm an example component.\n                "
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/vue/dist/vue.common.dev.js":
/*!*************************************************!*\
  !*** ./node_modules/vue/dist/vue.common.dev.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.6.10
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */


/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Generate a string containing static keys from compiler modules.
 */
function genStaticKeys (modules) {
  return modules.reduce(function (keys, m) {
    return keys.concat(m.staticKeys || [])
  }, []).join(',')
}

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

{
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if (!config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
Dep.target = null;
var targetStack = [];

function pushTarget (target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget () {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (isUndef(target) || isPrimitive(target)
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
{
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var isUsingMicroTask = false;

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
  isUsingMicroTask = true;
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Techinically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

var mark;
var measure;

{
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

{
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
      warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      }
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if (!isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if (key !== '' && key !== null) {
      // null is a speical value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if (isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  }
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack becaues all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
      warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                "timeout (" + (res.timeout) + "ms)"
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before () {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if (!config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = expOrFn.toString();
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
      warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if (getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if (sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    {
      initProxy(vm);
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if (!(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.10';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false'
    ? 'false'
    // allow arbitrary string value for contenteditable
    : key === 'contenteditable' && isValidContentEditableValue(value)
      ? value
      : 'true'
};

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);

var isPreTag = function (tag) { return tag === 'pre'; };

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (
    oldVnode,
    vnode,
    insertedVnodeQueue,
    ownerArray,
    index,
    removeOnly
  ) {
    if (oldVnode === vnode) {
      return
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        {
          checkDuplicateKeys(ch);
        }
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if (typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm)) {
          removeVnodes(parentElm, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && value !== '' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;

function parseFilters (exp) {
  var inSingle = false;
  var inDouble = false;
  var inTemplateString = false;
  var inRegex = false;
  var curly = 0;
  var square = 0;
  var paren = 0;
  var lastFilterIndex = 0;
  var c, prev, i, expression, filters;

  for (i = 0; i < exp.length; i++) {
    prev = c;
    c = exp.charCodeAt(i);
    if (inSingle) {
      if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
    } else if (inDouble) {
      if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
    } else if (inTemplateString) {
      if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
    } else if (inRegex) {
      if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
    } else if (
      c === 0x7C && // pipe
      exp.charCodeAt(i + 1) !== 0x7C &&
      exp.charCodeAt(i - 1) !== 0x7C &&
      !curly && !square && !paren
    ) {
      if (expression === undefined) {
        // first filter, end of expression
        lastFilterIndex = i + 1;
        expression = exp.slice(0, i).trim();
      } else {
        pushFilter();
      }
    } else {
      switch (c) {
        case 0x22: inDouble = true; break         // "
        case 0x27: inSingle = true; break         // '
        case 0x60: inTemplateString = true; break // `
        case 0x28: paren++; break                 // (
        case 0x29: paren--; break                 // )
        case 0x5B: square++; break                // [
        case 0x5D: square--; break                // ]
        case 0x7B: curly++; break                 // {
        case 0x7D: curly--; break                 // }
      }
      if (c === 0x2f) { // /
        var j = i - 1;
        var p = (void 0);
        // find first non-whitespace prev char
        for (; j >= 0; j--) {
          p = exp.charAt(j);
          if (p !== ' ') { break }
        }
        if (!p || !validDivisionCharRE.test(p)) {
          inRegex = true;
        }
      }
    }
  }

  if (expression === undefined) {
    expression = exp.slice(0, i).trim();
  } else if (lastFilterIndex !== 0) {
    pushFilter();
  }

  function pushFilter () {
    (filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
    lastFilterIndex = i + 1;
  }

  if (filters) {
    for (i = 0; i < filters.length; i++) {
      expression = wrapFilter(expression, filters[i]);
    }
  }

  return expression
}

function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
  }
}

/*  */



/* eslint-disable no-unused-vars */
function baseWarn (msg, range) {
  console.error(("[Vue compiler]: " + msg));
}
/* eslint-enable no-unused-vars */

function pluckModuleFunction (
  modules,
  key
) {
  return modules
    ? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
    : []
}

function addProp (el, name, value, range, dynamic) {
  (el.props || (el.props = [])).push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

function addAttr (el, name, value, range, dynamic) {
  var attrs = dynamic
    ? (el.dynamicAttrs || (el.dynamicAttrs = []))
    : (el.attrs || (el.attrs = []));
  attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic }, range));
  el.plain = false;
}

// add a raw attr (use this in preTransforms)
function addRawAttr (el, name, value, range) {
  el.attrsMap[name] = value;
  el.attrsList.push(rangeSetItem({ name: name, value: value }, range));
}

function addDirective (
  el,
  name,
  rawName,
  value,
  arg,
  isDynamicArg,
  modifiers,
  range
) {
  (el.directives || (el.directives = [])).push(rangeSetItem({
    name: name,
    rawName: rawName,
    value: value,
    arg: arg,
    isDynamicArg: isDynamicArg,
    modifiers: modifiers
  }, range));
  el.plain = false;
}

function prependModifierMarker (symbol, name, dynamic) {
  return dynamic
    ? ("_p(" + name + ",\"" + symbol + "\")")
    : symbol + name // mark the event as captured
}

function addHandler (
  el,
  name,
  value,
  modifiers,
  important,
  warn,
  range,
  dynamic
) {
  modifiers = modifiers || emptyObject;
  // warn prevent and passive modifier
  /* istanbul ignore if */
  if (
    warn &&
    modifiers.prevent && modifiers.passive
  ) {
    warn(
      'passive and prevent can\'t be used together. ' +
      'Passive handler can\'t prevent default event.',
      range
    );
  }

  // normalize click.right and click.middle since they don't actually fire
  // this is technically browser-specific, but at least for now browsers are
  // the only target envs that have right/middle clicks.
  if (modifiers.right) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'contextmenu':(" + name + ")";
    } else if (name === 'click') {
      name = 'contextmenu';
      delete modifiers.right;
    }
  } else if (modifiers.middle) {
    if (dynamic) {
      name = "(" + name + ")==='click'?'mouseup':(" + name + ")";
    } else if (name === 'click') {
      name = 'mouseup';
    }
  }

  // check capture modifier
  if (modifiers.capture) {
    delete modifiers.capture;
    name = prependModifierMarker('!', name, dynamic);
  }
  if (modifiers.once) {
    delete modifiers.once;
    name = prependModifierMarker('~', name, dynamic);
  }
  /* istanbul ignore if */
  if (modifiers.passive) {
    delete modifiers.passive;
    name = prependModifierMarker('&', name, dynamic);
  }

  var events;
  if (modifiers.native) {
    delete modifiers.native;
    events = el.nativeEvents || (el.nativeEvents = {});
  } else {
    events = el.events || (el.events = {});
  }

  var newHandler = rangeSetItem({ value: value.trim(), dynamic: dynamic }, range);
  if (modifiers !== emptyObject) {
    newHandler.modifiers = modifiers;
  }

  var handlers = events[name];
  /* istanbul ignore if */
  if (Array.isArray(handlers)) {
    important ? handlers.unshift(newHandler) : handlers.push(newHandler);
  } else if (handlers) {
    events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
  } else {
    events[name] = newHandler;
  }

  el.plain = false;
}

function getRawBindingAttr (
  el,
  name
) {
  return el.rawAttrsMap[':' + name] ||
    el.rawAttrsMap['v-bind:' + name] ||
    el.rawAttrsMap[name]
}

function getBindingAttr (
  el,
  name,
  getStatic
) {
  var dynamicValue =
    getAndRemoveAttr(el, ':' + name) ||
    getAndRemoveAttr(el, 'v-bind:' + name);
  if (dynamicValue != null) {
    return parseFilters(dynamicValue)
  } else if (getStatic !== false) {
    var staticValue = getAndRemoveAttr(el, name);
    if (staticValue != null) {
      return JSON.stringify(staticValue)
    }
  }
}

// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
function getAndRemoveAttr (
  el,
  name,
  removeFromMap
) {
  var val;
  if ((val = el.attrsMap[name]) != null) {
    var list = el.attrsList;
    for (var i = 0, l = list.length; i < l; i++) {
      if (list[i].name === name) {
        list.splice(i, 1);
        break
      }
    }
  }
  if (removeFromMap) {
    delete el.attrsMap[name];
  }
  return val
}

function getAndRemoveAttrByRegex (
  el,
  name
) {
  var list = el.attrsList;
  for (var i = 0, l = list.length; i < l; i++) {
    var attr = list[i];
    if (name.test(attr.name)) {
      list.splice(i, 1);
      return attr
    }
  }
}

function rangeSetItem (
  item,
  range
) {
  if (range) {
    if (range.start != null) {
      item.start = range.start;
    }
    if (range.end != null) {
      item.end = range.end;
    }
  }
  return item
}

/*  */

/**
 * Cross-platform code generation for component v-model
 */
function genComponentModel (
  el,
  value,
  modifiers
) {
  var ref = modifiers || {};
  var number = ref.number;
  var trim = ref.trim;

  var baseValueExpression = '$$v';
  var valueExpression = baseValueExpression;
  if (trim) {
    valueExpression =
      "(typeof " + baseValueExpression + " === 'string'" +
      "? " + baseValueExpression + ".trim()" +
      ": " + baseValueExpression + ")";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }
  var assignment = genAssignmentCode(value, valueExpression);

  el.model = {
    value: ("(" + value + ")"),
    expression: JSON.stringify(value),
    callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
  };
}

/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */
function genAssignmentCode (
  value,
  assignment
) {
  var res = parseModel(value);
  if (res.key === null) {
    return (value + "=" + assignment)
  } else {
    return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
  }
}

/**
 * Parse a v-model expression into a base path and a final key segment.
 * Handles both dot-path and possible square brackets.
 *
 * Possible cases:
 *
 * - test
 * - test[key]
 * - test[test1[key]]
 * - test["a"][key]
 * - xxx.test[a[a].test1[key]]
 * - test.xxx.a["asa"][test1[key]]
 *
 */

var len, str, chr, index$1, expressionPos, expressionEndPos;



function parseModel (val) {
  // Fix https://github.com/vuejs/vue/pull/7730
  // allow v-model="obj.val " (trailing whitespace)
  val = val.trim();
  len = val.length;

  if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
    index$1 = val.lastIndexOf('.');
    if (index$1 > -1) {
      return {
        exp: val.slice(0, index$1),
        key: '"' + val.slice(index$1 + 1) + '"'
      }
    } else {
      return {
        exp: val,
        key: null
      }
    }
  }

  str = val;
  index$1 = expressionPos = expressionEndPos = 0;

  while (!eof()) {
    chr = next();
    /* istanbul ignore if */
    if (isStringStart(chr)) {
      parseString(chr);
    } else if (chr === 0x5B) {
      parseBracket(chr);
    }
  }

  return {
    exp: val.slice(0, expressionPos),
    key: val.slice(expressionPos + 1, expressionEndPos)
  }
}

function next () {
  return str.charCodeAt(++index$1)
}

function eof () {
  return index$1 >= len
}

function isStringStart (chr) {
  return chr === 0x22 || chr === 0x27
}

function parseBracket (chr) {
  var inBracket = 1;
  expressionPos = index$1;
  while (!eof()) {
    chr = next();
    if (isStringStart(chr)) {
      parseString(chr);
      continue
    }
    if (chr === 0x5B) { inBracket++; }
    if (chr === 0x5D) { inBracket--; }
    if (inBracket === 0) {
      expressionEndPos = index$1;
      break
    }
  }
}

function parseString (chr) {
  var stringQuote = chr;
  while (!eof()) {
    chr = next();
    if (chr === stringQuote) {
      break
    }
  }
}

/*  */

var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

function model (
  el,
  dir,
  _warn
) {
  warn$1 = _warn;
  var value = dir.value;
  var modifiers = dir.modifiers;
  var tag = el.tag;
  var type = el.attrsMap.type;

  {
    // inputs with type="file" are read only and setting the input's
    // value will throw an error.
    if (tag === 'input' && type === 'file') {
      warn$1(
        "<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
        "File inputs are read only. Use a v-on:change listener instead.",
        el.rawAttrsMap['v-model']
      );
    }
  }

  if (el.component) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else if (tag === 'select') {
    genSelect(el, value, modifiers);
  } else if (tag === 'input' && type === 'checkbox') {
    genCheckboxModel(el, value, modifiers);
  } else if (tag === 'input' && type === 'radio') {
    genRadioModel(el, value, modifiers);
  } else if (tag === 'input' || tag === 'textarea') {
    genDefaultModel(el, value, modifiers);
  } else if (!config.isReservedTag(tag)) {
    genComponentModel(el, value, modifiers);
    // component v-model doesn't need extra runtime
    return false
  } else {
    warn$1(
      "<" + (el.tag) + " v-model=\"" + value + "\">: " +
      "v-model is not supported on this element type. " +
      'If you are working with contenteditable, it\'s recommended to ' +
      'wrap a library dedicated for that purpose inside a custom component.',
      el.rawAttrsMap['v-model']
    );
  }

  // ensure runtime directive metadata
  return true
}

function genCheckboxModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
  var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
  addProp(el, 'checked',
    "Array.isArray(" + value + ")" +
    "?_i(" + value + "," + valueBinding + ")>-1" + (
      trueValueBinding === 'true'
        ? (":(" + value + ")")
        : (":_q(" + value + "," + trueValueBinding + ")")
    )
  );
  addHandler(el, 'change',
    "var $$a=" + value + "," +
        '$$el=$event.target,' +
        "$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
    'if(Array.isArray($$a)){' +
      "var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
          '$$i=_i($$a,$$v);' +
      "if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
      "else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
    "}else{" + (genAssignmentCode(value, '$$c')) + "}",
    null, true
  );
}

function genRadioModel (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var valueBinding = getBindingAttr(el, 'value') || 'null';
  valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
  addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
  addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
}

function genSelect (
  el,
  value,
  modifiers
) {
  var number = modifiers && modifiers.number;
  var selectedVal = "Array.prototype.filter" +
    ".call($event.target.options,function(o){return o.selected})" +
    ".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
    "return " + (number ? '_n(val)' : 'val') + "})";

  var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
  var code = "var $$selectedVal = " + selectedVal + ";";
  code = code + " " + (genAssignmentCode(value, assignment));
  addHandler(el, 'change', code, null, true);
}

function genDefaultModel (
  el,
  value,
  modifiers
) {
  var type = el.attrsMap.type;

  // warn if v-bind:value conflicts with v-model
  // except for inputs with v-bind:type
  {
    var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
    var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
    if (value$1 && !typeBinding) {
      var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
      warn$1(
        binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
        'because the latter already expands to a value binding internally',
        el.rawAttrsMap[binding]
      );
    }
  }

  var ref = modifiers || {};
  var lazy = ref.lazy;
  var number = ref.number;
  var trim = ref.trim;
  var needCompositionGuard = !lazy && type !== 'range';
  var event = lazy
    ? 'change'
    : type === 'range'
      ? RANGE_TOKEN
      : 'input';

  var valueExpression = '$event.target.value';
  if (trim) {
    valueExpression = "$event.target.value.trim()";
  }
  if (number) {
    valueExpression = "_n(" + valueExpression + ")";
  }

  var code = genAssignmentCode(value, valueExpression);
  if (needCompositionGuard) {
    code = "if($event.target.composing)return;" + code;
  }

  addProp(el, 'value', ("(" + value + ")"));
  addHandler(el, event, code, null, true);
  if (trim || number) {
    addHandler(el, 'blur', '$forceUpdate()');
  }
}

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1 (event, handler, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

// #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.
var useMicrotaskFix = isUsingMicroTask && !(isFF && Number(isFF[1]) <= 53);

function add$1 (
  name,
  handler,
  capture,
  passive
) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;
    handler = original._wrapper = function (e) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        e.target === e.currentTarget ||
        // event is fired after handler attachment
        e.timeStamp >= attachedTimestamp ||
        // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        e.timeStamp <= 0 ||
        // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        e.target.ownerDocument !== document
      ) {
        return original.apply(this, arguments)
      }
    };
  }
  target$1.addEventListener(
    name,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  name,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    name,
    handler._wrapper || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

var svgContainer;

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;
      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }
      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if (
      // skip the update if old and new VDOM state is the same.
      // `value` is handled separately because the DOM value may be temporarily
      // out of sync with VDOM state due to focus, composition and modifiers.
      // This  #4521 by skipping the unnecesarry `checked` update.
      cur !== oldProps[key]
    ) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

var whitespaceRE = /\s+/;

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  // JSDOM may return undefined for transition properties
  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

// Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors
function toMs (s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: directive,
  show: show
};

/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var isNotTextNode = function (c) { return c.tag || isAsyncPlaceholder(c); };

var isVShowDirective = function (d) { return d.name === 'show'; };

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(isNotTextNode);
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  beforeMount: function beforeMount () {
    var this$1 = this;

    var update = this._update;
    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1);
      // force removing pass
      this$1.__patch__(
        this$1._vnode,
        this$1.kept,
        false, // hydrating
        true // removeOnly (!important, avoids unnecessary moves)
      );
      this$1._vnode = this$1.kept;
      restoreActiveInstance();
      update.call(this$1, vnode, hydrating);
    };
  },

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (e && e.target !== el) {
            return
          }
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if (config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

var defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

var buildRegex = cached(function (delimiters) {
  var open = delimiters[0].replace(regexEscapeRE, '\\$&');
  var close = delimiters[1].replace(regexEscapeRE, '\\$&');
  return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
});



function parseText (
  text,
  delimiters
) {
  var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
  if (!tagRE.test(text)) {
    return
  }
  var tokens = [];
  var rawTokens = [];
  var lastIndex = tagRE.lastIndex = 0;
  var match, index, tokenValue;
  while ((match = tagRE.exec(text))) {
    index = match.index;
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index));
      tokens.push(JSON.stringify(tokenValue));
    }
    // tag token
    var exp = parseFilters(match[1].trim());
    tokens.push(("_s(" + exp + ")"));
    rawTokens.push({ '@binding': exp });
    lastIndex = index + match[0].length;
  }
  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex));
    tokens.push(JSON.stringify(tokenValue));
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}

/*  */

function transformNode (el, options) {
  var warn = options.warn || baseWarn;
  var staticClass = getAndRemoveAttr(el, 'class');
  if (staticClass) {
    var res = parseText(staticClass, options.delimiters);
    if (res) {
      warn(
        "class=\"" + staticClass + "\": " +
        'Interpolation inside attributes has been removed. ' +
        'Use v-bind or the colon shorthand instead. For example, ' +
        'instead of <div class="{{ val }}">, use <div :class="val">.',
        el.rawAttrsMap['class']
      );
    }
  }
  if (staticClass) {
    el.staticClass = JSON.stringify(staticClass);
  }
  var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
  if (classBinding) {
    el.classBinding = classBinding;
  }
}

function genData (el) {
  var data = '';
  if (el.staticClass) {
    data += "staticClass:" + (el.staticClass) + ",";
  }
  if (el.classBinding) {
    data += "class:" + (el.classBinding) + ",";
  }
  return data
}

var klass$1 = {
  staticKeys: ['staticClass'],
  transformNode: transformNode,
  genData: genData
};

/*  */

function transformNode$1 (el, options) {
  var warn = options.warn || baseWarn;
  var staticStyle = getAndRemoveAttr(el, 'style');
  if (staticStyle) {
    /* istanbul ignore if */
    {
      var res = parseText(staticStyle, options.delimiters);
      if (res) {
        warn(
          "style=\"" + staticStyle + "\": " +
          'Interpolation inside attributes has been removed. ' +
          'Use v-bind or the colon shorthand instead. For example, ' +
          'instead of <div style="{{ val }}">, use <div :style="val">.',
          el.rawAttrsMap['style']
        );
      }
    }
    el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
  }

  var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
  if (styleBinding) {
    el.styleBinding = styleBinding;
  }
}

function genData$1 (el) {
  var data = '';
  if (el.staticStyle) {
    data += "staticStyle:" + (el.staticStyle) + ",";
  }
  if (el.styleBinding) {
    data += "style:(" + (el.styleBinding) + "),";
  }
  return data
}

var style$1 = {
  staticKeys: ['staticStyle'],
  transformNode: transformNode$1,
  genData: genData$1
};

/*  */

var decoder;

var he = {
  decode: function decode (html) {
    decoder = decoder || document.createElement('div');
    decoder.innerHTML = html;
    return decoder.textContent
  }
};

/*  */

var isUnaryTag = makeMap(
  'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
  'link,meta,param,source,track,wbr'
);

// Elements that you can, intentionally, leave open
// (and which close themselves)
var canBeLeftOpenTag = makeMap(
  'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var isNonPhrasingTag = makeMap(
  'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
  'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
  'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
  'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
  'title,tr,track'
);

/**
 * Not type-checking this file because it's mostly vendor code.
 */

// Regular Expressions for parsing tags and attributes
var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var dynamicArgAttribute = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
var ncname = "[a-zA-Z_][\\-\\.0-9_a-zA-Z" + (unicodeRegExp.source) + "]*";
var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
var startTagOpen = new RegExp(("^<" + qnameCapture));
var startTagClose = /^\s*(\/?)>/;
var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
var comment = /^<!\--/;
var conditionalComment = /^<!\[/;

// Special Elements (can contain anything)
var isPlainTextElement = makeMap('script,style,textarea', true);
var reCache = {};

var decodingMap = {
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&amp;': '&',
  '&#10;': '\n',
  '&#9;': '\t',
  '&#39;': "'"
};
var encodedAttr = /&(?:lt|gt|quot|amp|#39);/g;
var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#39|#10|#9);/g;

// #5992
var isIgnoreNewlineTag = makeMap('pre,textarea', true);
var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

function decodeAttr (value, shouldDecodeNewlines) {
  var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
  return value.replace(re, function (match) { return decodingMap[match]; })
}

function parseHTML (html, options) {
  var stack = [];
  var expectHTML = options.expectHTML;
  var isUnaryTag$$1 = options.isUnaryTag || no;
  var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
  var index = 0;
  var last, lastTag;
  while (html) {
    last = html;
    // Make sure we're not in a plaintext content element like script/style
    if (!lastTag || !isPlainTextElement(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (comment.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (options.shouldKeepComment) {
              options.comment(html.substring(4, commentEnd), index, index + commentEnd + 3);
            }
            advance(commentEnd + 3);
            continue
          }
        }

        // http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (conditionalComment.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            advance(conditionalEnd + 2);
            continue
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          advance(doctypeMatch[0].length);
          continue
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          var curIndex = index;
          advance(endTagMatch[0].length);
          parseEndTag(endTagMatch[1], curIndex, index);
          continue
        }

        // Start tag:
        var startTagMatch = parseStartTag();
        if (startTagMatch) {
          handleStartTag(startTagMatch);
          if (shouldIgnoreFirstNewline(startTagMatch.tagName, html)) {
            advance(1);
          }
          continue
        }
      }

      var text = (void 0), rest = (void 0), next = (void 0);
      if (textEnd >= 0) {
        rest = html.slice(textEnd);
        while (
          !endTag.test(rest) &&
          !startTagOpen.test(rest) &&
          !comment.test(rest) &&
          !conditionalComment.test(rest)
        ) {
          // < in plain text, be forgiving and treat it as text
          next = rest.indexOf('<', 1);
          if (next < 0) { break }
          textEnd += next;
          rest = html.slice(textEnd);
        }
        text = html.substring(0, textEnd);
      }

      if (textEnd < 0) {
        text = html;
      }

      if (text) {
        advance(text.length);
      }

      if (options.chars && text) {
        options.chars(text, index - text.length, index);
      }
    } else {
      var endTagLength = 0;
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
      var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
        endTagLength = endTag.length;
        if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
          text = text
            .replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }
        if (shouldIgnoreFirstNewline(stackedTag, text)) {
          text = text.slice(1);
        }
        if (options.chars) {
          options.chars(text);
        }
        return ''
      });
      index += html.length - rest$1.length;
      html = rest$1;
      parseEndTag(stackedTag, index - endTagLength, index);
    }

    if (html === last) {
      options.chars && options.chars(html);
      if (!stack.length && options.warn) {
        options.warn(("Mal-formatted tag at end of template: \"" + html + "\""), { start: index + html.length });
      }
      break
    }
  }

  // Clean up any remaining tags
  parseEndTag();

  function advance (n) {
    index += n;
    html = html.substring(n);
  }

  function parseStartTag () {
    var start = html.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: [],
        start: index
      };
      advance(start[0].length);
      var end, attr;
      while (!(end = html.match(startTagClose)) && (attr = html.match(dynamicArgAttribute) || html.match(attribute))) {
        attr.start = index;
        advance(attr[0].length);
        attr.end = index;
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        advance(end[0].length);
        match.end = index;
        return match
      }
    }
  }

  function handleStartTag (match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (expectHTML) {
      if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
        parseEndTag(lastTag);
      }
      if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
        parseEndTag(tagName);
      }
    }

    var unary = isUnaryTag$$1(tagName) || !!unarySlash;

    var l = match.attrs.length;
    var attrs = new Array(l);
    for (var i = 0; i < l; i++) {
      var args = match.attrs[i];
      var value = args[3] || args[4] || args[5] || '';
      var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
        ? options.shouldDecodeNewlinesForHref
        : options.shouldDecodeNewlines;
      attrs[i] = {
        name: args[1],
        value: decodeAttr(value, shouldDecodeNewlines)
      };
      if (options.outputSourceRange) {
        attrs[i].start = args.start + args[0].match(/^\s*/).length;
        attrs[i].end = args.end;
      }
    }

    if (!unary) {
      stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs, start: match.start, end: match.end });
      lastTag = tagName;
    }

    if (options.start) {
      options.start(tagName, attrs, unary, match.start, match.end);
    }
  }

  function parseEndTag (tagName, start, end) {
    var pos, lowerCasedTagName;
    if (start == null) { start = index; }
    if (end == null) { end = index; }

    // Find the closest opened tag of the same type
    if (tagName) {
      lowerCasedTagName = tagName.toLowerCase();
      for (pos = stack.length - 1; pos >= 0; pos--) {
        if (stack[pos].lowerCasedTag === lowerCasedTagName) {
          break
        }
      }
    } else {
      // If no tag name is provided, clean shop
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (i > pos || !tagName &&
          options.warn
        ) {
          options.warn(
            ("tag <" + (stack[i].tag) + "> has no matching end tag."),
            { start: stack[i].start, end: stack[i].end }
          );
        }
        if (options.end) {
          options.end(stack[i].tag, start, end);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    } else if (lowerCasedTagName === 'br') {
      if (options.start) {
        options.start(tagName, [], true, start, end);
      }
    } else if (lowerCasedTagName === 'p') {
      if (options.start) {
        options.start(tagName, [], false, start, end);
      }
      if (options.end) {
        options.end(tagName, start, end);
      }
    }
  }
}

/*  */

var onRE = /^@|^v-on:/;
var dirRE = /^v-|^@|^:/;
var forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
var stripParensRE = /^\(|\)$/g;
var dynamicArgRE = /^\[.*\]$/;

var argRE = /:(.*)$/;
var bindRE = /^:|^\.|^v-bind:/;
var modifierRE = /\.[^.\]]+(?=[^\]]*$)/g;

var slotRE = /^v-slot(:|$)|^#/;

var lineBreakRE = /[\r\n]/;
var whitespaceRE$1 = /\s+/g;

var invalidAttributeRE = /[\s"'<>\/=]/;

var decodeHTMLCached = cached(he.decode);

var emptySlotScopeToken = "_empty_";

// configurable state
var warn$2;
var delimiters;
var transforms;
var preTransforms;
var postTransforms;
var platformIsPreTag;
var platformMustUseProp;
var platformGetTagNamespace;
var maybeComponent;

function createASTElement (
  tag,
  attrs,
  parent
) {
  return {
    type: 1,
    tag: tag,
    attrsList: attrs,
    attrsMap: makeAttrsMap(attrs),
    rawAttrsMap: {},
    parent: parent,
    children: []
  }
}

/**
 * Convert HTML string to AST.
 */
function parse (
  template,
  options
) {
  warn$2 = options.warn || baseWarn;

  platformIsPreTag = options.isPreTag || no;
  platformMustUseProp = options.mustUseProp || no;
  platformGetTagNamespace = options.getTagNamespace || no;
  var isReservedTag = options.isReservedTag || no;
  maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };

  transforms = pluckModuleFunction(options.modules, 'transformNode');
  preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
  postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

  delimiters = options.delimiters;

  var stack = [];
  var preserveWhitespace = options.preserveWhitespace !== false;
  var whitespaceOption = options.whitespace;
  var root;
  var currentParent;
  var inVPre = false;
  var inPre = false;
  var warned = false;

  function warnOnce (msg, range) {
    if (!warned) {
      warned = true;
      warn$2(msg, range);
    }
  }

  function closeElement (element) {
    trimEndingWhitespace(element);
    if (!inVPre && !element.processed) {
      element = processElement(element, options);
    }
    // tree management
    if (!stack.length && element !== root) {
      // allow root elements with v-if, v-else-if and v-else
      if (root.if && (element.elseif || element.else)) {
        {
          checkRootConstraints(element);
        }
        addIfCondition(root, {
          exp: element.elseif,
          block: element
        });
      } else {
        warnOnce(
          "Component template should contain exactly one root element. " +
          "If you are using v-if on multiple elements, " +
          "use v-else-if to chain them instead.",
          { start: element.start }
        );
      }
    }
    if (currentParent && !element.forbidden) {
      if (element.elseif || element.else) {
        processIfConditions(element, currentParent);
      } else {
        if (element.slotScope) {
          // scoped slot
          // keep it in the children list so that v-else(-if) conditions can
          // find it as the prev node.
          var name = element.slotTarget || '"default"'
          ;(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
        }
        currentParent.children.push(element);
        element.parent = currentParent;
      }
    }

    // final children cleanup
    // filter out scoped slots
    element.children = element.children.filter(function (c) { return !(c).slotScope; });
    // remove trailing whitespace node again
    trimEndingWhitespace(element);

    // check pre state
    if (element.pre) {
      inVPre = false;
    }
    if (platformIsPreTag(element.tag)) {
      inPre = false;
    }
    // apply post-transforms
    for (var i = 0; i < postTransforms.length; i++) {
      postTransforms[i](element, options);
    }
  }

  function trimEndingWhitespace (el) {
    // remove trailing whitespace node
    if (!inPre) {
      var lastNode;
      while (
        (lastNode = el.children[el.children.length - 1]) &&
        lastNode.type === 3 &&
        lastNode.text === ' '
      ) {
        el.children.pop();
      }
    }
  }

  function checkRootConstraints (el) {
    if (el.tag === 'slot' || el.tag === 'template') {
      warnOnce(
        "Cannot use <" + (el.tag) + "> as component root element because it may " +
        'contain multiple nodes.',
        { start: el.start }
      );
    }
    if (el.attrsMap.hasOwnProperty('v-for')) {
      warnOnce(
        'Cannot use v-for on stateful component root element because ' +
        'it renders multiple elements.',
        el.rawAttrsMap['v-for']
      );
    }
  }

  parseHTML(template, {
    warn: warn$2,
    expectHTML: options.expectHTML,
    isUnaryTag: options.isUnaryTag,
    canBeLeftOpenTag: options.canBeLeftOpenTag,
    shouldDecodeNewlines: options.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
    shouldKeepComment: options.comments,
    outputSourceRange: options.outputSourceRange,
    start: function start (tag, attrs, unary, start$1, end) {
      // check namespace.
      // inherit parent ns if there is one
      var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);

      // handle IE svg bug
      /* istanbul ignore if */
      if (isIE && ns === 'svg') {
        attrs = guardIESVGBug(attrs);
      }

      var element = createASTElement(tag, attrs, currentParent);
      if (ns) {
        element.ns = ns;
      }

      {
        if (options.outputSourceRange) {
          element.start = start$1;
          element.end = end;
          element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
            cumulated[attr.name] = attr;
            return cumulated
          }, {});
        }
        attrs.forEach(function (attr) {
          if (invalidAttributeRE.test(attr.name)) {
            warn$2(
              "Invalid dynamic argument expression: attribute names cannot contain " +
              "spaces, quotes, <, >, / or =.",
              {
                start: attr.start + attr.name.indexOf("["),
                end: attr.start + attr.name.length
              }
            );
          }
        });
      }

      if (isForbiddenTag(element) && !isServerRendering()) {
        element.forbidden = true;
        warn$2(
          'Templates should only be responsible for mapping the state to the ' +
          'UI. Avoid placing tags with side-effects in your templates, such as ' +
          "<" + tag + ">" + ', as they will not be parsed.',
          { start: element.start }
        );
      }

      // apply pre-transforms
      for (var i = 0; i < preTransforms.length; i++) {
        element = preTransforms[i](element, options) || element;
      }

      if (!inVPre) {
        processPre(element);
        if (element.pre) {
          inVPre = true;
        }
      }
      if (platformIsPreTag(element.tag)) {
        inPre = true;
      }
      if (inVPre) {
        processRawAttrs(element);
      } else if (!element.processed) {
        // structural directives
        processFor(element);
        processIf(element);
        processOnce(element);
      }

      if (!root) {
        root = element;
        {
          checkRootConstraints(root);
        }
      }

      if (!unary) {
        currentParent = element;
        stack.push(element);
      } else {
        closeElement(element);
      }
    },

    end: function end (tag, start, end$1) {
      var element = stack[stack.length - 1];
      // pop stack
      stack.length -= 1;
      currentParent = stack[stack.length - 1];
      if (options.outputSourceRange) {
        element.end = end$1;
      }
      closeElement(element);
    },

    chars: function chars (text, start, end) {
      if (!currentParent) {
        {
          if (text === template) {
            warnOnce(
              'Component template requires a root element, rather than just text.',
              { start: start }
            );
          } else if ((text = text.trim())) {
            warnOnce(
              ("text \"" + text + "\" outside root element will be ignored."),
              { start: start }
            );
          }
        }
        return
      }
      // IE textarea placeholder bug
      /* istanbul ignore if */
      if (isIE &&
        currentParent.tag === 'textarea' &&
        currentParent.attrsMap.placeholder === text
      ) {
        return
      }
      var children = currentParent.children;
      if (inPre || text.trim()) {
        text = isTextTag(currentParent) ? text : decodeHTMLCached(text);
      } else if (!children.length) {
        // remove the whitespace-only node right after an opening tag
        text = '';
      } else if (whitespaceOption) {
        if (whitespaceOption === 'condense') {
          // in condense mode, remove the whitespace node if it contains
          // line break, otherwise condense to a single space
          text = lineBreakRE.test(text) ? '' : ' ';
        } else {
          text = ' ';
        }
      } else {
        text = preserveWhitespace ? ' ' : '';
      }
      if (text) {
        if (!inPre && whitespaceOption === 'condense') {
          // condense consecutive whitespaces into single space
          text = text.replace(whitespaceRE$1, ' ');
        }
        var res;
        var child;
        if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
          child = {
            type: 2,
            expression: res.expression,
            tokens: res.tokens,
            text: text
          };
        } else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
          child = {
            type: 3,
            text: text
          };
        }
        if (child) {
          if (options.outputSourceRange) {
            child.start = start;
            child.end = end;
          }
          children.push(child);
        }
      }
    },
    comment: function comment (text, start, end) {
      // adding anyting as a sibling to the root node is forbidden
      // comments should still be allowed, but ignored
      if (currentParent) {
        var child = {
          type: 3,
          text: text,
          isComment: true
        };
        if (options.outputSourceRange) {
          child.start = start;
          child.end = end;
        }
        currentParent.children.push(child);
      }
    }
  });
  return root
}

function processPre (el) {
  if (getAndRemoveAttr(el, 'v-pre') != null) {
    el.pre = true;
  }
}

function processRawAttrs (el) {
  var list = el.attrsList;
  var len = list.length;
  if (len) {
    var attrs = el.attrs = new Array(len);
    for (var i = 0; i < len; i++) {
      attrs[i] = {
        name: list[i].name,
        value: JSON.stringify(list[i].value)
      };
      if (list[i].start != null) {
        attrs[i].start = list[i].start;
        attrs[i].end = list[i].end;
      }
    }
  } else if (!el.pre) {
    // non root node in pre blocks with no attributes
    el.plain = true;
  }
}

function processElement (
  element,
  options
) {
  processKey(element);

  // determine whether this is a plain element after
  // removing structural attributes
  element.plain = (
    !element.key &&
    !element.scopedSlots &&
    !element.attrsList.length
  );

  processRef(element);
  processSlotContent(element);
  processSlotOutlet(element);
  processComponent(element);
  for (var i = 0; i < transforms.length; i++) {
    element = transforms[i](element, options) || element;
  }
  processAttrs(element);
  return element
}

function processKey (el) {
  var exp = getBindingAttr(el, 'key');
  if (exp) {
    {
      if (el.tag === 'template') {
        warn$2(
          "<template> cannot be keyed. Place the key on real elements instead.",
          getRawBindingAttr(el, 'key')
        );
      }
      if (el.for) {
        var iterator = el.iterator2 || el.iterator1;
        var parent = el.parent;
        if (iterator && iterator === exp && parent && parent.tag === 'transition-group') {
          warn$2(
            "Do not use v-for index as key on <transition-group> children, " +
            "this is the same as not using keys.",
            getRawBindingAttr(el, 'key'),
            true /* tip */
          );
        }
      }
    }
    el.key = exp;
  }
}

function processRef (el) {
  var ref = getBindingAttr(el, 'ref');
  if (ref) {
    el.ref = ref;
    el.refInFor = checkInFor(el);
  }
}

function processFor (el) {
  var exp;
  if ((exp = getAndRemoveAttr(el, 'v-for'))) {
    var res = parseFor(exp);
    if (res) {
      extend(el, res);
    } else {
      warn$2(
        ("Invalid v-for expression: " + exp),
        el.rawAttrsMap['v-for']
      );
    }
  }
}



function parseFor (exp) {
  var inMatch = exp.match(forAliasRE);
  if (!inMatch) { return }
  var res = {};
  res.for = inMatch[2].trim();
  var alias = inMatch[1].trim().replace(stripParensRE, '');
  var iteratorMatch = alias.match(forIteratorRE);
  if (iteratorMatch) {
    res.alias = alias.replace(forIteratorRE, '').trim();
    res.iterator1 = iteratorMatch[1].trim();
    if (iteratorMatch[2]) {
      res.iterator2 = iteratorMatch[2].trim();
    }
  } else {
    res.alias = alias;
  }
  return res
}

function processIf (el) {
  var exp = getAndRemoveAttr(el, 'v-if');
  if (exp) {
    el.if = exp;
    addIfCondition(el, {
      exp: exp,
      block: el
    });
  } else {
    if (getAndRemoveAttr(el, 'v-else') != null) {
      el.else = true;
    }
    var elseif = getAndRemoveAttr(el, 'v-else-if');
    if (elseif) {
      el.elseif = elseif;
    }
  }
}

function processIfConditions (el, parent) {
  var prev = findPrevElement(parent.children);
  if (prev && prev.if) {
    addIfCondition(prev, {
      exp: el.elseif,
      block: el
    });
  } else {
    warn$2(
      "v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
      "used on element <" + (el.tag) + "> without corresponding v-if.",
      el.rawAttrsMap[el.elseif ? 'v-else-if' : 'v-else']
    );
  }
}

function findPrevElement (children) {
  var i = children.length;
  while (i--) {
    if (children[i].type === 1) {
      return children[i]
    } else {
      if (children[i].text !== ' ') {
        warn$2(
          "text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
          "will be ignored.",
          children[i]
        );
      }
      children.pop();
    }
  }
}

function addIfCondition (el, condition) {
  if (!el.ifConditions) {
    el.ifConditions = [];
  }
  el.ifConditions.push(condition);
}

function processOnce (el) {
  var once$$1 = getAndRemoveAttr(el, 'v-once');
  if (once$$1 != null) {
    el.once = true;
  }
}

// handle content being passed to a component as slot,
// e.g. <template slot="xxx">, <div slot-scope="xxx">
function processSlotContent (el) {
  var slotScope;
  if (el.tag === 'template') {
    slotScope = getAndRemoveAttr(el, 'scope');
    /* istanbul ignore if */
    if (slotScope) {
      warn$2(
        "the \"scope\" attribute for scoped slots have been deprecated and " +
        "replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
        "can also be used on plain elements in addition to <template> to " +
        "denote scoped slots.",
        el.rawAttrsMap['scope'],
        true
      );
    }
    el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
  } else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
    /* istanbul ignore if */
    if (el.attrsMap['v-for']) {
      warn$2(
        "Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
        "(v-for takes higher priority). Use a wrapper <template> for the " +
        "scoped slot to make it clearer.",
        el.rawAttrsMap['slot-scope'],
        true
      );
    }
    el.slotScope = slotScope;
  }

  // slot="xxx"
  var slotTarget = getBindingAttr(el, 'slot');
  if (slotTarget) {
    el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
    el.slotTargetDynamic = !!(el.attrsMap[':slot'] || el.attrsMap['v-bind:slot']);
    // preserve slot as an attribute for native shadow DOM compat
    // only for non-scoped slots.
    if (el.tag !== 'template' && !el.slotScope) {
      addAttr(el, 'slot', slotTarget, getRawBindingAttr(el, 'slot'));
    }
  }

  // 2.6 v-slot syntax
  {
    if (el.tag === 'template') {
      // v-slot on <template>
      var slotBinding = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding) {
        {
          if (el.slotTarget || el.slotScope) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.parent && !maybeComponent(el.parent)) {
            warn$2(
              "<template v-slot> can only appear at the root level inside " +
              "the receiving the component",
              el
            );
          }
        }
        var ref = getSlotName(slotBinding);
        var name = ref.name;
        var dynamic = ref.dynamic;
        el.slotTarget = name;
        el.slotTargetDynamic = dynamic;
        el.slotScope = slotBinding.value || emptySlotScopeToken; // force it into a scoped slot for perf
      }
    } else {
      // v-slot on component, denotes default slot
      var slotBinding$1 = getAndRemoveAttrByRegex(el, slotRE);
      if (slotBinding$1) {
        {
          if (!maybeComponent(el)) {
            warn$2(
              "v-slot can only be used on components or <template>.",
              slotBinding$1
            );
          }
          if (el.slotScope || el.slotTarget) {
            warn$2(
              "Unexpected mixed usage of different slot syntaxes.",
              el
            );
          }
          if (el.scopedSlots) {
            warn$2(
              "To avoid scope ambiguity, the default slot should also use " +
              "<template> syntax when there are other named slots.",
              slotBinding$1
            );
          }
        }
        // add the component's children to its default slot
        var slots = el.scopedSlots || (el.scopedSlots = {});
        var ref$1 = getSlotName(slotBinding$1);
        var name$1 = ref$1.name;
        var dynamic$1 = ref$1.dynamic;
        var slotContainer = slots[name$1] = createASTElement('template', [], el);
        slotContainer.slotTarget = name$1;
        slotContainer.slotTargetDynamic = dynamic$1;
        slotContainer.children = el.children.filter(function (c) {
          if (!c.slotScope) {
            c.parent = slotContainer;
            return true
          }
        });
        slotContainer.slotScope = slotBinding$1.value || emptySlotScopeToken;
        // remove children as they are returned from scopedSlots now
        el.children = [];
        // mark el non-plain so data gets generated
        el.plain = false;
      }
    }
  }
}

function getSlotName (binding) {
  var name = binding.name.replace(slotRE, '');
  if (!name) {
    if (binding.name[0] !== '#') {
      name = 'default';
    } else {
      warn$2(
        "v-slot shorthand syntax requires a slot name.",
        binding
      );
    }
  }
  return dynamicArgRE.test(name)
    // dynamic [name]
    ? { name: name.slice(1, -1), dynamic: true }
    // static name
    : { name: ("\"" + name + "\""), dynamic: false }
}

// handle <slot/> outlets
function processSlotOutlet (el) {
  if (el.tag === 'slot') {
    el.slotName = getBindingAttr(el, 'name');
    if (el.key) {
      warn$2(
        "`key` does not work on <slot> because slots are abstract outlets " +
        "and can possibly expand into multiple elements. " +
        "Use the key on a wrapping element instead.",
        getRawBindingAttr(el, 'key')
      );
    }
  }
}

function processComponent (el) {
  var binding;
  if ((binding = getBindingAttr(el, 'is'))) {
    el.component = binding;
  }
  if (getAndRemoveAttr(el, 'inline-template') != null) {
    el.inlineTemplate = true;
  }
}

function processAttrs (el) {
  var list = el.attrsList;
  var i, l, name, rawName, value, modifiers, syncGen, isDynamic;
  for (i = 0, l = list.length; i < l; i++) {
    name = rawName = list[i].name;
    value = list[i].value;
    if (dirRE.test(name)) {
      // mark element as dynamic
      el.hasBindings = true;
      // modifiers
      modifiers = parseModifiers(name.replace(dirRE, ''));
      // support .foo shorthand syntax for the .prop modifier
      if (modifiers) {
        name = name.replace(modifierRE, '');
      }
      if (bindRE.test(name)) { // v-bind
        name = name.replace(bindRE, '');
        value = parseFilters(value);
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        if (
          value.trim().length === 0
        ) {
          warn$2(
            ("The value for a v-bind expression cannot be empty. Found in \"v-bind:" + name + "\"")
          );
        }
        if (modifiers) {
          if (modifiers.prop && !isDynamic) {
            name = camelize(name);
            if (name === 'innerHtml') { name = 'innerHTML'; }
          }
          if (modifiers.camel && !isDynamic) {
            name = camelize(name);
          }
          if (modifiers.sync) {
            syncGen = genAssignmentCode(value, "$event");
            if (!isDynamic) {
              addHandler(
                el,
                ("update:" + (camelize(name))),
                syncGen,
                null,
                false,
                warn$2,
                list[i]
              );
              if (hyphenate(name) !== camelize(name)) {
                addHandler(
                  el,
                  ("update:" + (hyphenate(name))),
                  syncGen,
                  null,
                  false,
                  warn$2,
                  list[i]
                );
              }
            } else {
              // handler w/ dynamic event name
              addHandler(
                el,
                ("\"update:\"+(" + name + ")"),
                syncGen,
                null,
                false,
                warn$2,
                list[i],
                true // dynamic
              );
            }
          }
        }
        if ((modifiers && modifiers.prop) || (
          !el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
        )) {
          addProp(el, name, value, list[i], isDynamic);
        } else {
          addAttr(el, name, value, list[i], isDynamic);
        }
      } else if (onRE.test(name)) { // v-on
        name = name.replace(onRE, '');
        isDynamic = dynamicArgRE.test(name);
        if (isDynamic) {
          name = name.slice(1, -1);
        }
        addHandler(el, name, value, modifiers, false, warn$2, list[i], isDynamic);
      } else { // normal directives
        name = name.replace(dirRE, '');
        // parse arg
        var argMatch = name.match(argRE);
        var arg = argMatch && argMatch[1];
        isDynamic = false;
        if (arg) {
          name = name.slice(0, -(arg.length + 1));
          if (dynamicArgRE.test(arg)) {
            arg = arg.slice(1, -1);
            isDynamic = true;
          }
        }
        addDirective(el, name, rawName, value, arg, isDynamic, modifiers, list[i]);
        if (name === 'model') {
          checkForAliasModel(el, value);
        }
      }
    } else {
      // literal attribute
      {
        var res = parseText(value, delimiters);
        if (res) {
          warn$2(
            name + "=\"" + value + "\": " +
            'Interpolation inside attributes has been removed. ' +
            'Use v-bind or the colon shorthand instead. For example, ' +
            'instead of <div id="{{ val }}">, use <div :id="val">.',
            list[i]
          );
        }
      }
      addAttr(el, name, JSON.stringify(value), list[i]);
      // #6887 firefox doesn't update muted state if set via attribute
      // even immediately after element creation
      if (!el.component &&
          name === 'muted' &&
          platformMustUseProp(el.tag, el.attrsMap.type, name)) {
        addProp(el, name, 'true', list[i]);
      }
    }
  }
}

function checkInFor (el) {
  var parent = el;
  while (parent) {
    if (parent.for !== undefined) {
      return true
    }
    parent = parent.parent;
  }
  return false
}

function parseModifiers (name) {
  var match = name.match(modifierRE);
  if (match) {
    var ret = {};
    match.forEach(function (m) { ret[m.slice(1)] = true; });
    return ret
  }
}

function makeAttrsMap (attrs) {
  var map = {};
  for (var i = 0, l = attrs.length; i < l; i++) {
    if (
      map[attrs[i].name] && !isIE && !isEdge
    ) {
      warn$2('duplicate attribute: ' + attrs[i].name, attrs[i]);
    }
    map[attrs[i].name] = attrs[i].value;
  }
  return map
}

// for script (e.g. type="x/template") or style, do not decode content
function isTextTag (el) {
  return el.tag === 'script' || el.tag === 'style'
}

function isForbiddenTag (el) {
  return (
    el.tag === 'style' ||
    (el.tag === 'script' && (
      !el.attrsMap.type ||
      el.attrsMap.type === 'text/javascript'
    ))
  )
}

var ieNSBug = /^xmlns:NS\d+/;
var ieNSPrefix = /^NS\d+:/;

/* istanbul ignore next */
function guardIESVGBug (attrs) {
  var res = [];
  for (var i = 0; i < attrs.length; i++) {
    var attr = attrs[i];
    if (!ieNSBug.test(attr.name)) {
      attr.name = attr.name.replace(ieNSPrefix, '');
      res.push(attr);
    }
  }
  return res
}

function checkForAliasModel (el, value) {
  var _el = el;
  while (_el) {
    if (_el.for && _el.alias === value) {
      warn$2(
        "<" + (el.tag) + " v-model=\"" + value + "\">: " +
        "You are binding v-model directly to a v-for iteration alias. " +
        "This will not be able to modify the v-for source array because " +
        "writing to the alias is like modifying a function local variable. " +
        "Consider using an array of objects and use v-model on an object property instead.",
        el.rawAttrsMap['v-model']
      );
    }
    _el = _el.parent;
  }
}

/*  */

function preTransformNode (el, options) {
  if (el.tag === 'input') {
    var map = el.attrsMap;
    if (!map['v-model']) {
      return
    }

    var typeBinding;
    if (map[':type'] || map['v-bind:type']) {
      typeBinding = getBindingAttr(el, 'type');
    }
    if (!map.type && !typeBinding && map['v-bind']) {
      typeBinding = "(" + (map['v-bind']) + ").type";
    }

    if (typeBinding) {
      var ifCondition = getAndRemoveAttr(el, 'v-if', true);
      var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
      var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
      var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
      // 1. checkbox
      var branch0 = cloneASTElement(el);
      // process for on the main node
      processFor(branch0);
      addRawAttr(branch0, 'type', 'checkbox');
      processElement(branch0, options);
      branch0.processed = true; // prevent it from double-processed
      branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
      addIfCondition(branch0, {
        exp: branch0.if,
        block: branch0
      });
      // 2. add radio else-if condition
      var branch1 = cloneASTElement(el);
      getAndRemoveAttr(branch1, 'v-for', true);
      addRawAttr(branch1, 'type', 'radio');
      processElement(branch1, options);
      addIfCondition(branch0, {
        exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
        block: branch1
      });
      // 3. other
      var branch2 = cloneASTElement(el);
      getAndRemoveAttr(branch2, 'v-for', true);
      addRawAttr(branch2, ':type', typeBinding);
      processElement(branch2, options);
      addIfCondition(branch0, {
        exp: ifCondition,
        block: branch2
      });

      if (hasElse) {
        branch0.else = true;
      } else if (elseIfCondition) {
        branch0.elseif = elseIfCondition;
      }

      return branch0
    }
  }
}

function cloneASTElement (el) {
  return createASTElement(el.tag, el.attrsList.slice(), el.parent)
}

var model$1 = {
  preTransformNode: preTransformNode
};

var modules$1 = [
  klass$1,
  style$1,
  model$1
];

/*  */

function text (el, dir) {
  if (dir.value) {
    addProp(el, 'textContent', ("_s(" + (dir.value) + ")"), dir);
  }
}

/*  */

function html (el, dir) {
  if (dir.value) {
    addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"), dir);
  }
}

var directives$1 = {
  model: model,
  text: text,
  html: html
};

/*  */

var baseOptions = {
  expectHTML: true,
  modules: modules$1,
  directives: directives$1,
  isPreTag: isPreTag,
  isUnaryTag: isUnaryTag,
  mustUseProp: mustUseProp,
  canBeLeftOpenTag: canBeLeftOpenTag,
  isReservedTag: isReservedTag,
  getTagNamespace: getTagNamespace,
  staticKeys: genStaticKeys(modules$1)
};

/*  */

var isStaticKey;
var isPlatformReservedTag;

var genStaticKeysCached = cached(genStaticKeys$1);

/**
 * Goal of the optimizer: walk the generated template AST tree
 * and detect sub-trees that are purely static, i.e. parts of
 * the DOM that never needs to change.
 *
 * Once we detect these sub-trees, we can:
 *
 * 1. Hoist them into constants, so that we no longer need to
 *    create fresh nodes for them on each re-render;
 * 2. Completely skip them in the patching process.
 */
function optimize (root, options) {
  if (!root) { return }
  isStaticKey = genStaticKeysCached(options.staticKeys || '');
  isPlatformReservedTag = options.isReservedTag || no;
  // first pass: mark all non-static nodes.
  markStatic$1(root);
  // second pass: mark static roots.
  markStaticRoots(root, false);
}

function genStaticKeys$1 (keys) {
  return makeMap(
    'type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap' +
    (keys ? ',' + keys : '')
  )
}

function markStatic$1 (node) {
  node.static = isStatic(node);
  if (node.type === 1) {
    // do not make component slot content static. this avoids
    // 1. components not able to mutate slot nodes
    // 2. static slot content fails for hot-reloading
    if (
      !isPlatformReservedTag(node.tag) &&
      node.tag !== 'slot' &&
      node.attrsMap['inline-template'] == null
    ) {
      return
    }
    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i];
      markStatic$1(child);
      if (!child.static) {
        node.static = false;
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        var block = node.ifConditions[i$1].block;
        markStatic$1(block);
        if (!block.static) {
          node.static = false;
        }
      }
    }
  }
}

function markStaticRoots (node, isInFor) {
  if (node.type === 1) {
    if (node.static || node.once) {
      node.staticInFor = isInFor;
    }
    // For a node to qualify as a static root, it should have children that
    // are not just static text. Otherwise the cost of hoisting out will
    // outweigh the benefits and it's better off to just always render it fresh.
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true;
      return
    } else {
      node.staticRoot = false;
    }
    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i], isInFor || !!node.for);
      }
    }
    if (node.ifConditions) {
      for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
        markStaticRoots(node.ifConditions[i$1].block, isInFor);
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(node.pre || (
    !node.hasBindings && // no dynamic bindings
    !node.if && !node.for && // not v-if or v-for or v-else
    !isBuiltInTag(node.tag) && // not a built-in
    isPlatformReservedTag(node.tag) && // not a component
    !isDirectChildOfTemplateFor(node) &&
    Object.keys(node).every(isStaticKey)
  ))
}

function isDirectChildOfTemplateFor (node) {
  while (node.parent) {
    node = node.parent;
    if (node.tag !== 'template') {
      return false
    }
    if (node.for) {
      return true
    }
  }
  return false
}

/*  */

var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*(?:[\w$]+)?\s*\(/;
var fnInvokeRE = /\([^)]*?\);*$/;
var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
var keyCodes = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  'delete': [8, 46]
};

// KeyboardEvent.key aliases
var keyNames = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ['Esc', 'Escape'],
  tab: 'Tab',
  enter: 'Enter',
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [' ', 'Spacebar'],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ['Up', 'ArrowUp'],
  left: ['Left', 'ArrowLeft'],
  right: ['Right', 'ArrowRight'],
  down: ['Down', 'ArrowDown'],
  // #9112: IE11 uses `Del` for Delete key name.
  'delete': ['Backspace', 'Delete', 'Del']
};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };

var modifierCode = {
  stop: '$event.stopPropagation();',
  prevent: '$event.preventDefault();',
  self: genGuard("$event.target !== $event.currentTarget"),
  ctrl: genGuard("!$event.ctrlKey"),
  shift: genGuard("!$event.shiftKey"),
  alt: genGuard("!$event.altKey"),
  meta: genGuard("!$event.metaKey"),
  left: genGuard("'button' in $event && $event.button !== 0"),
  middle: genGuard("'button' in $event && $event.button !== 1"),
  right: genGuard("'button' in $event && $event.button !== 2")
};

function genHandlers (
  events,
  isNative
) {
  var prefix = isNative ? 'nativeOn:' : 'on:';
  var staticHandlers = "";
  var dynamicHandlers = "";
  for (var name in events) {
    var handlerCode = genHandler(events[name]);
    if (events[name] && events[name].dynamic) {
      dynamicHandlers += name + "," + handlerCode + ",";
    } else {
      staticHandlers += "\"" + name + "\":" + handlerCode + ",";
    }
  }
  staticHandlers = "{" + (staticHandlers.slice(0, -1)) + "}";
  if (dynamicHandlers) {
    return prefix + "_d(" + staticHandlers + ",[" + (dynamicHandlers.slice(0, -1)) + "])"
  } else {
    return prefix + staticHandlers
  }
}

function genHandler (handler) {
  if (!handler) {
    return 'function(){}'
  }

  if (Array.isArray(handler)) {
    return ("[" + (handler.map(function (handler) { return genHandler(handler); }).join(',')) + "]")
  }

  var isMethodPath = simplePathRE.test(handler.value);
  var isFunctionExpression = fnExpRE.test(handler.value);
  var isFunctionInvocation = simplePathRE.test(handler.value.replace(fnInvokeRE, ''));

  if (!handler.modifiers) {
    if (isMethodPath || isFunctionExpression) {
      return handler.value
    }
    return ("function($event){" + (isFunctionInvocation ? ("return " + (handler.value)) : handler.value) + "}") // inline statement
  } else {
    var code = '';
    var genModifierCode = '';
    var keys = [];
    for (var key in handler.modifiers) {
      if (modifierCode[key]) {
        genModifierCode += modifierCode[key];
        // left/right
        if (keyCodes[key]) {
          keys.push(key);
        }
      } else if (key === 'exact') {
        var modifiers = (handler.modifiers);
        genModifierCode += genGuard(
          ['ctrl', 'shift', 'alt', 'meta']
            .filter(function (keyModifier) { return !modifiers[keyModifier]; })
            .map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
            .join('||')
        );
      } else {
        keys.push(key);
      }
    }
    if (keys.length) {
      code += genKeyFilter(keys);
    }
    // Make sure modifiers like prevent and stop get executed after key filtering
    if (genModifierCode) {
      code += genModifierCode;
    }
    var handlerCode = isMethodPath
      ? ("return " + (handler.value) + "($event)")
      : isFunctionExpression
        ? ("return (" + (handler.value) + ")($event)")
        : isFunctionInvocation
          ? ("return " + (handler.value))
          : handler.value;
    return ("function($event){" + code + handlerCode + "}")
  }
}

function genKeyFilter (keys) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" +
    (keys.map(genFilterCode).join('&&')) + ")return null;"
  )
}

function genFilterCode (key) {
  var keyVal = parseInt(key, 10);
  if (keyVal) {
    return ("$event.keyCode!==" + keyVal)
  }
  var keyCode = keyCodes[key];
  var keyName = keyNames[key];
  return (
    "_k($event.keyCode," +
    (JSON.stringify(key)) + "," +
    (JSON.stringify(keyCode)) + "," +
    "$event.key," +
    "" + (JSON.stringify(keyName)) +
    ")"
  )
}

/*  */

function on (el, dir) {
  if (dir.modifiers) {
    warn("v-on without argument does not support modifiers.");
  }
  el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
}

/*  */

function bind$1 (el, dir) {
  el.wrapData = function (code) {
    return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
  };
}

/*  */

var baseDirectives = {
  on: on,
  bind: bind$1,
  cloak: noop
};

/*  */





var CodegenState = function CodegenState (options) {
  this.options = options;
  this.warn = options.warn || baseWarn;
  this.transforms = pluckModuleFunction(options.modules, 'transformCode');
  this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
  this.directives = extend(extend({}, baseDirectives), options.directives);
  var isReservedTag = options.isReservedTag || no;
  this.maybeComponent = function (el) { return !!el.component || !isReservedTag(el.tag); };
  this.onceId = 0;
  this.staticRenderFns = [];
  this.pre = false;
};



function generate (
  ast,
  options
) {
  var state = new CodegenState(options);
  var code = ast ? genElement(ast, state) : '_c("div")';
  return {
    render: ("with(this){return " + code + "}"),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement (el, state) {
  if (el.parent) {
    el.pre = el.pre || el.parent.pre;
  }

  if (el.staticRoot && !el.staticProcessed) {
    return genStatic(el, state)
  } else if (el.once && !el.onceProcessed) {
    return genOnce(el, state)
  } else if (el.for && !el.forProcessed) {
    return genFor(el, state)
  } else if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.tag === 'template' && !el.slotTarget && !state.pre) {
    return genChildren(el, state) || 'void 0'
  } else if (el.tag === 'slot') {
    return genSlot(el, state)
  } else {
    // component or element
    var code;
    if (el.component) {
      code = genComponent(el.component, el, state);
    } else {
      var data;
      if (!el.plain || (el.pre && state.maybeComponent(el))) {
        data = genData$2(el, state);
      }

      var children = el.inlineTemplate ? null : genChildren(el, state, true);
      code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
    }
    // module transforms
    for (var i = 0; i < state.transforms.length; i++) {
      code = state.transforms[i](el, code);
    }
    return code
  }
}

// hoist static sub-trees out
function genStatic (el, state) {
  el.staticProcessed = true;
  // Some elements (templates) need to behave differently inside of a v-pre
  // node.  All pre nodes are static roots, so we can use this as a location to
  // wrap a state change and reset it upon exiting the pre node.
  var originalPreState = state.pre;
  if (el.pre) {
    state.pre = el.pre;
  }
  state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
  state.pre = originalPreState;
  return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
}

// v-once
function genOnce (el, state) {
  el.onceProcessed = true;
  if (el.if && !el.ifProcessed) {
    return genIf(el, state)
  } else if (el.staticInFor) {
    var key = '';
    var parent = el.parent;
    while (parent) {
      if (parent.for) {
        key = parent.key;
        break
      }
      parent = parent.parent;
    }
    if (!key) {
      state.warn(
        "v-once can only be used inside v-for that is keyed. ",
        el.rawAttrsMap['v-once']
      );
      return genElement(el, state)
    }
    return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
  } else {
    return genStatic(el, state)
  }
}

function genIf (
  el,
  state,
  altGen,
  altEmpty
) {
  el.ifProcessed = true; // avoid recursion
  return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
}

function genIfConditions (
  conditions,
  state,
  altGen,
  altEmpty
) {
  if (!conditions.length) {
    return altEmpty || '_e()'
  }

  var condition = conditions.shift();
  if (condition.exp) {
    return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
  } else {
    return ("" + (genTernaryExp(condition.block)))
  }

  // v-if with v-once should generate code like (a)?_m(0):_m(1)
  function genTernaryExp (el) {
    return altGen
      ? altGen(el, state)
      : el.once
        ? genOnce(el, state)
        : genElement(el, state)
  }
}

function genFor (
  el,
  state,
  altGen,
  altHelper
) {
  var exp = el.for;
  var alias = el.alias;
  var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
  var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

  if (state.maybeComponent(el) &&
    el.tag !== 'slot' &&
    el.tag !== 'template' &&
    !el.key
  ) {
    state.warn(
      "<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
      "v-for should have explicit keys. " +
      "See https://vuejs.org/guide/list.html#key for more info.",
      el.rawAttrsMap['v-for'],
      true /* tip */
    );
  }

  el.forProcessed = true; // avoid recursion
  return (altHelper || '_l') + "((" + exp + ")," +
    "function(" + alias + iterator1 + iterator2 + "){" +
      "return " + ((altGen || genElement)(el, state)) +
    '})'
}

function genData$2 (el, state) {
  var data = '{';

  // directives first.
  // directives may mutate the el's other properties before they are generated.
  var dirs = genDirectives(el, state);
  if (dirs) { data += dirs + ','; }

  // key
  if (el.key) {
    data += "key:" + (el.key) + ",";
  }
  // ref
  if (el.ref) {
    data += "ref:" + (el.ref) + ",";
  }
  if (el.refInFor) {
    data += "refInFor:true,";
  }
  // pre
  if (el.pre) {
    data += "pre:true,";
  }
  // record original tag name for components using "is" attribute
  if (el.component) {
    data += "tag:\"" + (el.tag) + "\",";
  }
  // module data generation functions
  for (var i = 0; i < state.dataGenFns.length; i++) {
    data += state.dataGenFns[i](el);
  }
  // attributes
  if (el.attrs) {
    data += "attrs:" + (genProps(el.attrs)) + ",";
  }
  // DOM props
  if (el.props) {
    data += "domProps:" + (genProps(el.props)) + ",";
  }
  // event handlers
  if (el.events) {
    data += (genHandlers(el.events, false)) + ",";
  }
  if (el.nativeEvents) {
    data += (genHandlers(el.nativeEvents, true)) + ",";
  }
  // slot target
  // only for non-scoped slots
  if (el.slotTarget && !el.slotScope) {
    data += "slot:" + (el.slotTarget) + ",";
  }
  // scoped slots
  if (el.scopedSlots) {
    data += (genScopedSlots(el, el.scopedSlots, state)) + ",";
  }
  // component v-model
  if (el.model) {
    data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
  }
  // inline-template
  if (el.inlineTemplate) {
    var inlineTemplate = genInlineTemplate(el, state);
    if (inlineTemplate) {
      data += inlineTemplate + ",";
    }
  }
  data = data.replace(/,$/, '') + '}';
  // v-bind dynamic argument wrap
  // v-bind with dynamic arguments must be applied using the same v-bind object
  // merge helper so that class/style/mustUseProp attrs are handled correctly.
  if (el.dynamicAttrs) {
    data = "_b(" + data + ",\"" + (el.tag) + "\"," + (genProps(el.dynamicAttrs)) + ")";
  }
  // v-bind data wrap
  if (el.wrapData) {
    data = el.wrapData(data);
  }
  // v-on data wrap
  if (el.wrapListeners) {
    data = el.wrapListeners(data);
  }
  return data
}

function genDirectives (el, state) {
  var dirs = el.directives;
  if (!dirs) { return }
  var res = 'directives:[';
  var hasRuntime = false;
  var i, l, dir, needRuntime;
  for (i = 0, l = dirs.length; i < l; i++) {
    dir = dirs[i];
    needRuntime = true;
    var gen = state.directives[dir.name];
    if (gen) {
      // compile-time directive that manipulates AST.
      // returns true if it also needs a runtime counterpart.
      needRuntime = !!gen(el, dir, state.warn);
    }
    if (needRuntime) {
      hasRuntime = true;
      res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:" + (dir.isDynamicArg ? dir.arg : ("\"" + (dir.arg) + "\""))) : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
    }
  }
  if (hasRuntime) {
    return res.slice(0, -1) + ']'
  }
}

function genInlineTemplate (el, state) {
  var ast = el.children[0];
  if (el.children.length !== 1 || ast.type !== 1) {
    state.warn(
      'Inline-template components must have exactly one child element.',
      { start: el.start }
    );
  }
  if (ast && ast.type === 1) {
    var inlineRenderFns = generate(ast, state.options);
    return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
  }
}

function genScopedSlots (
  el,
  slots,
  state
) {
  // by default scoped slots are considered "stable", this allows child
  // components with only scoped slots to skip forced updates from parent.
  // but in some cases we have to bail-out of this optimization
  // for example if the slot contains dynamic names, has v-if or v-for on them...
  var needsForceUpdate = el.for || Object.keys(slots).some(function (key) {
    var slot = slots[key];
    return (
      slot.slotTargetDynamic ||
      slot.if ||
      slot.for ||
      containsSlotChild(slot) // is passing down slot from parent which may be dynamic
    )
  });

  // #9534: if a component with scoped slots is inside a conditional branch,
  // it's possible for the same component to be reused but with different
  // compiled slot content. To avoid that, we generate a unique key based on
  // the generated code of all the slot contents.
  var needsKey = !!el.if;

  // OR when it is inside another scoped slot or v-for (the reactivity may be
  // disconnected due to the intermediate scope variable)
  // #9438, #9506
  // TODO: this can be further optimized by properly analyzing in-scope bindings
  // and skip force updating ones that do not actually use scope variables.
  if (!needsForceUpdate) {
    var parent = el.parent;
    while (parent) {
      if (
        (parent.slotScope && parent.slotScope !== emptySlotScopeToken) ||
        parent.for
      ) {
        needsForceUpdate = true;
        break
      }
      if (parent.if) {
        needsKey = true;
      }
      parent = parent.parent;
    }
  }

  var generatedSlots = Object.keys(slots)
    .map(function (key) { return genScopedSlot(slots[key], state); })
    .join(',');

  return ("scopedSlots:_u([" + generatedSlots + "]" + (needsForceUpdate ? ",null,true" : "") + (!needsForceUpdate && needsKey ? (",null,false," + (hash(generatedSlots))) : "") + ")")
}

function hash(str) {
  var hash = 5381;
  var i = str.length;
  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }
  return hash >>> 0
}

function containsSlotChild (el) {
  if (el.type === 1) {
    if (el.tag === 'slot') {
      return true
    }
    return el.children.some(containsSlotChild)
  }
  return false
}

function genScopedSlot (
  el,
  state
) {
  var isLegacySyntax = el.attrsMap['slot-scope'];
  if (el.if && !el.ifProcessed && !isLegacySyntax) {
    return genIf(el, state, genScopedSlot, "null")
  }
  if (el.for && !el.forProcessed) {
    return genFor(el, state, genScopedSlot)
  }
  var slotScope = el.slotScope === emptySlotScopeToken
    ? ""
    : String(el.slotScope);
  var fn = "function(" + slotScope + "){" +
    "return " + (el.tag === 'template'
      ? el.if && isLegacySyntax
        ? ("(" + (el.if) + ")?" + (genChildren(el, state) || 'undefined') + ":undefined")
        : genChildren(el, state) || 'undefined'
      : genElement(el, state)) + "}";
  // reverse proxy v-slot without scope on this.$slots
  var reverseProxy = slotScope ? "" : ",proxy:true";
  return ("{key:" + (el.slotTarget || "\"default\"") + ",fn:" + fn + reverseProxy + "}")
}

function genChildren (
  el,
  state,
  checkSkip,
  altGenElement,
  altGenNode
) {
  var children = el.children;
  if (children.length) {
    var el$1 = children[0];
    // optimize single v-for
    if (children.length === 1 &&
      el$1.for &&
      el$1.tag !== 'template' &&
      el$1.tag !== 'slot'
    ) {
      var normalizationType = checkSkip
        ? state.maybeComponent(el$1) ? ",1" : ",0"
        : "";
      return ("" + ((altGenElement || genElement)(el$1, state)) + normalizationType)
    }
    var normalizationType$1 = checkSkip
      ? getNormalizationType(children, state.maybeComponent)
      : 0;
    var gen = altGenNode || genNode;
    return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType$1 ? ("," + normalizationType$1) : ''))
  }
}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
function getNormalizationType (
  children,
  maybeComponent
) {
  var res = 0;
  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    if (el.type !== 1) {
      continue
    }
    if (needsNormalization(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
      res = 2;
      break
    }
    if (maybeComponent(el) ||
        (el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
      res = 1;
    }
  }
  return res
}

function needsNormalization (el) {
  return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
}

function genNode (node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText (text) {
  return ("_v(" + (text.type === 2
    ? text.expression // no need for () because already wrapped in _s()
    : transformSpecialNewlines(JSON.stringify(text.text))) + ")")
}

function genComment (comment) {
  return ("_e(" + (JSON.stringify(comment.text)) + ")")
}

function genSlot (el, state) {
  var slotName = el.slotName || '"default"';
  var children = genChildren(el, state);
  var res = "_t(" + slotName + (children ? ("," + children) : '');
  var attrs = el.attrs || el.dynamicAttrs
    ? genProps((el.attrs || []).concat(el.dynamicAttrs || []).map(function (attr) { return ({
        // slot props are camelized
        name: camelize(attr.name),
        value: attr.value,
        dynamic: attr.dynamic
      }); }))
    : null;
  var bind$$1 = el.attrsMap['v-bind'];
  if ((attrs || bind$$1) && !children) {
    res += ",null";
  }
  if (attrs) {
    res += "," + attrs;
  }
  if (bind$$1) {
    res += (attrs ? '' : ',null') + "," + bind$$1;
  }
  return res + ')'
}

// componentName is el.component, take it as argument to shun flow's pessimistic refinement
function genComponent (
  componentName,
  el,
  state
) {
  var children = el.inlineTemplate ? null : genChildren(el, state, true);
  return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
}

function genProps (props) {
  var staticProps = "";
  var dynamicProps = "";
  for (var i = 0; i < props.length; i++) {
    var prop = props[i];
    var value = transformSpecialNewlines(prop.value);
    if (prop.dynamic) {
      dynamicProps += (prop.name) + "," + value + ",";
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ",";
    }
  }
  staticProps = "{" + (staticProps.slice(0, -1)) + "}";
  if (dynamicProps) {
    return ("_d(" + staticProps + ",[" + (dynamicProps.slice(0, -1)) + "])")
  } else {
    return staticProps
  }
}

// #3895, #4268
function transformSpecialNewlines (text) {
  return text
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

/*  */



// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
var prohibitedKeywordRE = new RegExp('\\b' + (
  'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
  'super,throw,while,yield,delete,export,import,return,switch,default,' +
  'extends,finally,continue,debugger,function,arguments'
).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
var unaryOperatorsRE = new RegExp('\\b' + (
  'delete,typeof,void'
).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
function detectErrors (ast, warn) {
  if (ast) {
    checkNode(ast, warn);
  }
}

function checkNode (node, warn) {
  if (node.type === 1) {
    for (var name in node.attrsMap) {
      if (dirRE.test(name)) {
        var value = node.attrsMap[name];
        if (value) {
          var range = node.rawAttrsMap[name];
          if (name === 'v-for') {
            checkFor(node, ("v-for=\"" + value + "\""), warn, range);
          } else if (onRE.test(name)) {
            checkEvent(value, (name + "=\"" + value + "\""), warn, range);
          } else {
            checkExpression(value, (name + "=\"" + value + "\""), warn, range);
          }
        }
      }
    }
    if (node.children) {
      for (var i = 0; i < node.children.length; i++) {
        checkNode(node.children[i], warn);
      }
    }
  } else if (node.type === 2) {
    checkExpression(node.expression, node.text, warn, node);
  }
}

function checkEvent (exp, text, warn, range) {
  var stipped = exp.replace(stripStringRE, '');
  var keywordMatch = stipped.match(unaryOperatorsRE);
  if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
    warn(
      "avoid using JavaScript unary operator as property name: " +
      "\"" + (keywordMatch[0]) + "\" in expression " + (text.trim()),
      range
    );
  }
  checkExpression(exp, text, warn, range);
}

function checkFor (node, text, warn, range) {
  checkExpression(node.for || '', text, warn, range);
  checkIdentifier(node.alias, 'v-for alias', text, warn, range);
  checkIdentifier(node.iterator1, 'v-for iterator', text, warn, range);
  checkIdentifier(node.iterator2, 'v-for iterator', text, warn, range);
}

function checkIdentifier (
  ident,
  type,
  text,
  warn,
  range
) {
  if (typeof ident === 'string') {
    try {
      new Function(("var " + ident + "=_"));
    } catch (e) {
      warn(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())), range);
    }
  }
}

function checkExpression (exp, text, warn, range) {
  try {
    new Function(("return " + exp));
  } catch (e) {
    var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
    if (keywordMatch) {
      warn(
        "avoid using JavaScript keyword as property name: " +
        "\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim()),
        range
      );
    } else {
      warn(
        "invalid expression: " + (e.message) + " in\n\n" +
        "    " + exp + "\n\n" +
        "  Raw expression: " + (text.trim()) + "\n",
        range
      );
    }
  }
}

/*  */

var range = 2;

function generateCodeFrame (
  source,
  start,
  end
) {
  if ( start === void 0 ) start = 0;
  if ( end === void 0 ) end = source.length;

  var lines = source.split(/\r?\n/);
  var count = 0;
  var res = [];
  for (var i = 0; i < lines.length; i++) {
    count += lines[i].length + 1;
    if (count >= start) {
      for (var j = i - range; j <= i + range || end > count; j++) {
        if (j < 0 || j >= lines.length) { continue }
        res.push(("" + (j + 1) + (repeat$1(" ", 3 - String(j + 1).length)) + "|  " + (lines[j])));
        var lineLength = lines[j].length;
        if (j === i) {
          // push underline
          var pad = start - (count - lineLength) + 1;
          var length = end > count ? lineLength - pad : end - start;
          res.push("   |  " + repeat$1(" ", pad) + repeat$1("^", length));
        } else if (j > i) {
          if (end > count) {
            var length$1 = Math.min(end - count, lineLength);
            res.push("   |  " + repeat$1("^", length$1));
          }
          count += lineLength + 1;
        }
      }
      break
    }
  }
  return res.join('\n')
}

function repeat$1 (str, n) {
  var result = '';
  if (n > 0) {
    while (true) { // eslint-disable-line
      if (n & 1) { result += str; }
      n >>>= 1;
      if (n <= 0) { break }
      str += str;
    }
  }
  return result
}

/*  */



function createFunction (code, errors) {
  try {
    return new Function(code)
  } catch (err) {
    errors.push({ err: err, code: code });
    return noop
  }
}

function createCompileToFunctionFn (compile) {
  var cache = Object.create(null);

  return function compileToFunctions (
    template,
    options,
    vm
  ) {
    options = extend({}, options);
    var warn$$1 = options.warn || warn;
    delete options.warn;

    /* istanbul ignore if */
    {
      // detect possible CSP restriction
      try {
        new Function('return 1');
      } catch (e) {
        if (e.toString().match(/unsafe-eval|CSP/)) {
          warn$$1(
            'It seems you are using the standalone build of Vue.js in an ' +
            'environment with Content Security Policy that prohibits unsafe-eval. ' +
            'The template compiler cannot work in this environment. Consider ' +
            'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
            'templates into render functions.'
          );
        }
      }
    }

    // check cache
    var key = options.delimiters
      ? String(options.delimiters) + template
      : template;
    if (cache[key]) {
      return cache[key]
    }

    // compile
    var compiled = compile(template, options);

    // check compilation errors/tips
    {
      if (compiled.errors && compiled.errors.length) {
        if (options.outputSourceRange) {
          compiled.errors.forEach(function (e) {
            warn$$1(
              "Error compiling template:\n\n" + (e.msg) + "\n\n" +
              generateCodeFrame(template, e.start, e.end),
              vm
            );
          });
        } else {
          warn$$1(
            "Error compiling template:\n\n" + template + "\n\n" +
            compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
            vm
          );
        }
      }
      if (compiled.tips && compiled.tips.length) {
        if (options.outputSourceRange) {
          compiled.tips.forEach(function (e) { return tip(e.msg, vm); });
        } else {
          compiled.tips.forEach(function (msg) { return tip(msg, vm); });
        }
      }
    }

    // turn code into functions
    var res = {};
    var fnGenErrors = [];
    res.render = createFunction(compiled.render, fnGenErrors);
    res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
      return createFunction(code, fnGenErrors)
    });

    // check function generation errors.
    // this should only happen if there is a bug in the compiler itself.
    // mostly for codegen development use
    /* istanbul ignore if */
    {
      if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
        warn$$1(
          "Failed to generate render function:\n\n" +
          fnGenErrors.map(function (ref) {
            var err = ref.err;
            var code = ref.code;

            return ((err.toString()) + " in\n\n" + code + "\n");
        }).join('\n'),
          vm
        );
      }
    }

    return (cache[key] = res)
  }
}

/*  */

function createCompilerCreator (baseCompile) {
  return function createCompiler (baseOptions) {
    function compile (
      template,
      options
    ) {
      var finalOptions = Object.create(baseOptions);
      var errors = [];
      var tips = [];

      var warn = function (msg, range, tip) {
        (tip ? tips : errors).push(msg);
      };

      if (options) {
        if (options.outputSourceRange) {
          // $flow-disable-line
          var leadingSpaceLength = template.match(/^\s*/)[0].length;

          warn = function (msg, range, tip) {
            var data = { msg: msg };
            if (range) {
              if (range.start != null) {
                data.start = range.start + leadingSpaceLength;
              }
              if (range.end != null) {
                data.end = range.end + leadingSpaceLength;
              }
            }
            (tip ? tips : errors).push(data);
          };
        }
        // merge custom modules
        if (options.modules) {
          finalOptions.modules =
            (baseOptions.modules || []).concat(options.modules);
        }
        // merge custom directives
        if (options.directives) {
          finalOptions.directives = extend(
            Object.create(baseOptions.directives || null),
            options.directives
          );
        }
        // copy other options
        for (var key in options) {
          if (key !== 'modules' && key !== 'directives') {
            finalOptions[key] = options[key];
          }
        }
      }

      finalOptions.warn = warn;

      var compiled = baseCompile(template.trim(), finalOptions);
      {
        detectErrors(compiled.ast, warn);
      }
      compiled.errors = errors;
      compiled.tips = tips;
      return compiled
    }

    return {
      compile: compile,
      compileToFunctions: createCompileToFunctionFn(compile)
    }
  }
}

/*  */

// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
var createCompiler = createCompilerCreator(function baseCompile (
  template,
  options
) {
  var ast = parse(template.trim(), options);
  if (options.optimize !== false) {
    optimize(ast, options);
  }
  var code = generate(ast, options);
  return {
    ast: ast,
    render: code.render,
    staticRenderFns: code.staticRenderFns
  }
});

/*  */

var ref$1 = createCompiler(baseOptions);
var compile = ref$1.compile;
var compileToFunctions = ref$1.compileToFunctions;

/*  */

// check whether current browser encodes a char inside attribute values
var div;
function getShouldDecode (href) {
  div = div || document.createElement('div');
  div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
  return div.innerHTML.indexOf('&#10;') > 0
}

// #3663: IE encodes newlines inside attribute values while other browsers don't
var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;

/*  */

var idToTemplate = cached(function (id) {
  var el = query(id);
  return el && el.innerHTML
});

var mount = Vue.prototype.$mount;
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && query(el);

  /* istanbul ignore if */
  if (el === document.body || el === document.documentElement) {
    warn(
      "Do not mount Vue to <html> or <body> - mount to normal elements instead."
    );
    return this
  }

  var options = this.$options;
  // resolve template/el and convert to render function
  if (!options.render) {
    var template = options.template;
    if (template) {
      if (typeof template === 'string') {
        if (template.charAt(0) === '#') {
          template = idToTemplate(template);
          /* istanbul ignore if */
          if (!template) {
            warn(
              ("Template element not found or is empty: " + (options.template)),
              this
            );
          }
        }
      } else if (template.nodeType) {
        template = template.innerHTML;
      } else {
        {
          warn('invalid template option:' + template, this);
        }
        return this
      }
    } else if (el) {
      template = getOuterHTML(el);
    }
    if (template) {
      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile');
      }

      var ref = compileToFunctions(template, {
        outputSourceRange: "development" !== 'production',
        shouldDecodeNewlines: shouldDecodeNewlines,
        shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
        delimiters: options.delimiters,
        comments: options.comments
      }, this);
      var render = ref.render;
      var staticRenderFns = ref.staticRenderFns;
      options.render = render;
      options.staticRenderFns = staticRenderFns;

      /* istanbul ignore if */
      if (config.performance && mark) {
        mark('compile end');
        measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
      }
    }
  }
  return mount.call(this, el, hydrating)
};

/**
 * Get outerHTML of elements, taking care
 * of SVG elements in IE as well.
 */
function getOuterHTML (el) {
  if (el.outerHTML) {
    return el.outerHTML
  } else {
    var container = document.createElement('div');
    container.appendChild(el.cloneNode(true));
    return container.innerHTML
  }
}

Vue.compile = compileToFunctions;

module.exports = Vue;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

/***/ }),

/***/ "./node_modules/vue/dist/vue.common.js":
/*!*********************************************!*\
  !*** ./node_modules/vue/dist/vue.common.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if (false) {} else {
  module.exports = __webpack_require__(/*! ./vue.common.dev.js */ "./node_modules/vue/dist/vue.common.dev.js")
}


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./resources/js/bootstrap.js":
/*!***********************************!*\
  !*** ./resources/js/bootstrap.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
window.axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
/**
 * Next we will register the CSRF Token as a common header with Axios so that
 * all outgoing HTTP requests automatically have it attached. This is just
 * a simple convenience so we don't have to attach every token manually.
 */

var token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
  window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
  console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */
// import Echo from 'laravel-echo'
// window.Pusher = require('pusher-js');
// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     encrypted: true
// });

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony import */ var _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExampleComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ExampleComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ExampleComponent.vue?vue&type=template&id=299e239e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ExampleComponent.vue?vue&type=template&id=299e239e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ExampleComponent_vue_vue_type_template_id_299e239e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/theme.js":
/*!*******************************!*\
  !*** ./resources/js/theme.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./bootstrap */ "./resources/js/bootstrap.js");

window.Vue = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
window.Proton = __webpack_require__(/*! @efelle/proton */ "./node_modules/@efelle/proton/dist/proton.js");
/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */
// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))

Vue.component('example-component', __webpack_require__(/*! ./components/ExampleComponent.vue */ "./resources/js/components/ExampleComponent.vue"));
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

var app = new Vue({
  el: '#app',
  data: {
    isReady: false
  },
  mounted: function mounted() {
    this.$nextTick(function () {
      this.isReady = true;
    });
  }
});

/***/ }),

/***/ "./resources/sass/theme.scss":
/*!***********************************!*\
  !*** ./resources/sass/theme.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*****************************************************************!*\
  !*** multi ./resources/js/theme.js ./resources/sass/theme.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/kai/Code/Efelle/fusioncms/themes/Hello/resources/js/theme.js */"./resources/js/theme.js");
module.exports = __webpack_require__(/*! /Users/kai/Code/Efelle/fusioncms/themes/Hello/resources/sass/theme.scss */"./resources/sass/theme.scss");


/***/ })

/******/ });