(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{EACl:function(t,e,s){"use strict";e.a={props:{value:{type:Object,required:!0}},computed:{settings:function(){return this.value.settings||{}},errors:function(){return this.value.errors||{}}}}},Zv2p:function(t,e,s){"use strict";s.r(e);var r={name:"datetime-fieldtype-settings",mixins:[s("EACl").a],computed:{format:{get:function(){var t=_.trim(this.settings.format),e=/[H|h|G|i|S|s|K|:]/g;return this.settings.time?new RegExp(e).test(this.settings.format)||(t=_.trim(this.settings.format)+" h:i"):t=this.settings.format.replace(e,""),t},set:function(t){this.settings.format=t}}}},i=s("KHd+"),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p-select",{attrs:{name:"settings.time",label:"Time Options",help:"Should this also include time?",autocomplete:"off",options:[{value:!1,label:"Date Only"},{value:!0,label:"Date and Time"}],"has-error":t.errors.has("settings.time"),"error-message":t.errors.get("settings.time")},model:{value:t.settings.time,callback:function(e){t.$set(t.settings,"time",e)},expression:"settings.time"}}),t._v(" "),s("p-input",{attrs:{name:"settings.format",label:"Date Format",help:'<a href="https://flatpickr.js.org/formatting/" target="_blank">Flatpickr date format reference</a>',placeholder:"Y-m-d","has-error":t.errors.has("settings.format"),"error-message":t.errors.get("settings.format")},model:{value:t.format,callback:function(e){t.format=e},expression:"format"}})],1)}),[],!1,null,null,null);e.default=a.exports}}]);