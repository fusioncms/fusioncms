(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{EACl:function(t,e,o){"use strict";e.a={props:{value:{type:Object,required:!0}},computed:{settings:function(){return this.value.settings||{}},errors:function(){return this.value.errors||{}}}}},G4E1:function(t,e,o){"use strict";o.r(e);var n={name:"taxonomy-fieldtype-settings",mixins:[o("EACl").a],data:function(){return{taxonomies:[{label:"No",value:0},{label:"Yes",value:1}]}},methods:{fetchTaxonomies:function(){var t=this;axios.get("/api/taxonomies").then((function(e){t.taxonomies=_.map(e.data.data,(function(t){return{label:t.name,value:t.id}}))}))}},mounted:function(){this.fetchTaxonomies()}},s=o("KHd+"),a=Object(s.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("p-select",{attrs:{name:"taxonomy",label:"Taxonomy",help:"The taxonomy from which to show terms.",autocomplete:"off",options:t.taxonomies,"has-error":t.errors.has("settings.taxonomy"),"error-message":t.errors.get("settings.taxonomy")},model:{value:t.settings.taxonomy,callback:function(e){t.$set(t.settings,"taxonomy",e)},expression:"settings.taxonomy"}})],1)}),[],!1,null,null,null);e.default=a.exports}}]);