(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{"g+l8":function(e,t,n){"use strict";n.r(t);var i={name:"country-fieldtype",props:{field:{type:Object,required:!0},value:{required:!1,default:null}},computed:{countries:function(){return Object.values(this.field.type.data)}},created:function(){var e=_.findIndex(this.countries,(function(e){return 1==e.checked}));-1===e||this.countries||this.$emit("input",this.countries[e].value)}},u=n("KHd+"),l=Object(u.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p-select",{attrs:{name:e.field.handle,label:e.field.name,help:e.field.help,value:e.value,options:e.countries,placeholder:"Select a country..."},on:{input:function(t){return e.$emit("input",t)}}})],1)}),[],!1,null,null,null);t.default=l.exports}}]);