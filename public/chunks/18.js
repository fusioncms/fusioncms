(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{EACl:function(e,a,l){"use strict";a.a={props:{value:{required:!0}},watch:{value:{deep:!0,handler:function(e){this.$emit("input",e)}}}}},R1Po:function(e,a,l){"use strict";l.r(a);var s={name:"number-fieldtype-settings",mixins:[l("EACl").a],methods:{pad:function(e){for(var a="1";a.length<e;)a="0"+a;return Number("0."+a.substr(-e,e))}}},t=l("KHd+"),i=Object(t.a)(s,function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("div",{staticClass:"flex"},[l("p-number",{staticClass:"w-1/5 mr-5",attrs:{name:"settings.decimals",label:"Decimal Places",help:"The number of decimal places this number will accept.",autocomplete:"off",min:"0",max:"6"},model:{value:e.value.decimals,callback:function(a){e.$set(e.value,"decimals",a)},expression:"value.decimals"}}),e._v(" "),l("p-number",{staticClass:"w-1/5 mr-5",attrs:{name:"settings.steps",label:"Step Size",help:"Step or increment size of the number",autocomplete:"off",min:"0",steps:e.pad(e.value.decimals),decimals:e.value.decimals},model:{value:e.value.steps,callback:function(a){e.$set(e.value,"steps",a)},expression:"value.steps"}}),e._v(" "),l("p-number",{staticClass:"w-1/5 mr-5",attrs:{name:"settings.min",label:"Min Value",help:"Minimum allowed value",autocomplete:"off",decimals:e.value.decimals,steps:e.pad(e.value.decimals)},model:{value:e.value.min,callback:function(a){e.$set(e.value,"min",a)},expression:"value.min"}}),e._v(" "),l("p-number",{staticClass:"w-1/5",attrs:{name:"settings.max",label:"Max Value",help:"Maximum allowed value",autocomplete:"off",decimals:e.value.decimals,steps:e.pad(e.value.decimals)},model:{value:e.value.max,callback:function(a){e.$set(e.value,"max",a)},expression:"value.max"}})],1)},[],!1,null,null,null);a.default=i.exports}}]);