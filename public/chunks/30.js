(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{EACl:function(e,a,t){"use strict";a.a={props:{value:{required:!0}},watch:{value:{deep:!0,handler:function(e){this.$emit("input",e)}}}}},Kdga:function(e,a,t){"use strict";t.r(a);var l=t("EACl"),n={name:"color-picker-fieldtype-settings",props:{value:Object},data:function(){return{transparency:this.value.transparency||!0,default:this.value.default||""}},mounted:function(){var e=this;e.value.settings||(e.value.settings={}),Object.keys(this.$data).forEach((function(a){e.value.settings[a]=e[a]}))},mixins:[l.a]},s=t("KHd+"),u=Object(s.a)(n,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("p-select",{attrs:{name:"settings.transparency",label:"Transparency",help:"Should this field allow transparency?",autocomplete:"off",options:[{label:"Yes",value:1},{label:"No",value:0}]},model:{value:e.value.transparency,callback:function(a){e.$set(e.value,"transparency",a)},expression:"value.transparency"}}),e._v(" "),t("p-input",{attrs:{name:"settings.default",label:"Default",help:"Default color value for this field."},model:{value:e.value.default,callback:function(a){e.$set(e.value,"default",a)},expression:"value.default"}})],1)}),[],!1,null,null,null);a.default=u.exports}}]);