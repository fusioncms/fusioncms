(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{EACl:function(e,t,n){"use strict";n.r(t),t.default={props:{value:{type:Object,required:!0}},computed:{settings:function(){return this.value.settings||{}},errors:function(){return this.value.errors||{}}}}},g9fq:function(e,t,n){"use strict";n.r(t);var u={name:"checkbox-fieldtype",mixins:[n("EACl").default],props:{field:{type:Object,required:!0},value:{required:!1,default:function(){return[]}}},data:function(){return{values:[]}},mounted:function(){this.value||this.$emit("input",[]),this.values=_.cloneDeep(this.value)}},i=n("KHd+"),l=Object(i.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p-checkbox-group",{attrs:{label:e.field.name,help:e.field.help,inline:"row"==e.field.settings.display}},e._l(e.field.settings.options,(function(t){return n("p-checkbox",{key:t.value,attrs:{name:e.field.name,id:t.value,"native-value":t.value},on:{input:function(t){return e.$emit("input",e.values)}},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}},[[e._v("\n                    "+e._s(t.label)+"\n                ")]],2)})),1)],1)}),[],!1,null,null,null);t.default=l.exports}}]);