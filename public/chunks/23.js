(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{EACl:function(e,t,a){"use strict";t.a={props:{value:{required:!0}},watch:{value:{deep:!0,handler:function(e){this.$emit("input",e)}}}}},Zv2p:function(e,t,a){"use strict";a.r(t);var l={name:"datetime-fieldtype-settings",data:function(){return{format:this.value.format||"Y-m-d",time:this.value.time||!1}},mixins:[a("EACl").a]},i=a("KHd+"),n=Object(i.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p-select",{attrs:{name:"settings.time",label:"Time Options",help:"Should this also include time?",autocomplete:"off",options:[{value:!1,label:"Date Only"},{value:!0,label:"Date and Time"}]},model:{value:e.value.time,callback:function(t){e.$set(e.value,"time",t)},expression:"value.time"}}),e._v(" "),a("p-input",{attrs:{name:"settings.format",label:"Date Format",help:'<a href="https://flatpickr.js.org/formatting/" target="_blank">Flatpickr date format reference</a>',placeholder:"Y-m-d"},model:{value:e.value.format,callback:function(t){e.$set(e.value,"format",t)},expression:"value.format"}})],1)},[],!1,null,null,null);t.default=n.exports}}]);