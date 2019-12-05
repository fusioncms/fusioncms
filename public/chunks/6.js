(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"4lAn":function(e,t,a){"use strict";a.r(t);var n=a("dhqo"),r=a.n(n),i=a("ke3Z"),s={name:"taxonomy-fieldtype",data:function(){return{taxonomy:{},values:[],form:{}}},computed:{term:function(){return this.taxonomy.name?this.taxonomy.name.toLowerCase():"terms"},singular:function(){return r.a.singular(this.term)}},props:{field:{type:Object,required:!0},value:{required:!1,default:function(){return[]}}},methods:{submit:function(){var e=this;this.form.post("/api/taxonomies/"+this.taxonomy.slug).then((function(t){toast("Term saved successfully","success"),e.fetchTaxonomy(),e.resetForm()})).catch((function(e){toast(e.response.data.message,"failed")}))},resetForm:function(){this.form=new i.a({name:"",slug:"",status:1})},fetchTaxonomy:function(){var e=this;axios.get("/api/taxonomies/"+this.field.settings.taxonomy).then((function(t){e.taxonomy=t.data.data}))}},mounted:function(){this.fetchTaxonomy(),this.value||this.$emit("input",[]),this.values=_.cloneDeep(this.value)},created:function(){this.resetForm()}},o=a("KHd+"),u=Object(o.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("label",{staticClass:"form__label",attrs:{for:e.field.handle},domProps:{innerHTML:e._s(e.field.name)}}),e._v(" "),e.taxonomy.terms&&e.taxonomy.terms.length>0?a("p-checkbox-group",{attrs:{help:e.field.help}},e._l(e.taxonomy.terms,(function(t){return a("p-checkbox",{key:t.id,attrs:{name:e.field.handle,id:t.id,"native-value":t.id},on:{input:function(t){return e.$emit("input",e.values)}},model:{value:e.values,callback:function(t){e.values=t},expression:"values"}},[[e._v("\n                "+e._s(t.name)+"\n            ")]],2)})),1):a("p",{staticClass:"text-sm leading-none"},[e._v("Add a "+e._s(e.singular)+" below.")]),e._v(" "),a("div",{staticClass:"border-t pt-6"},[a("p-input",{staticClass:"mb-2",attrs:{name:e.term+"_name",placeholder:"New "+e.singular+" name..."},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit(t)}},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}}),e._v(" "),a("p-slug",{attrs:{name:e.term+"_slug",watch:e.form.name,hidden:""},model:{value:e.form.slug,callback:function(t){e.$set(e.form,"slug",t)},expression:"form.slug"}}),e._v(" "),a("p-button",{on:{click:function(t){return t.preventDefault(),e.submit(t)}}},[e._v("Add "+e._s(e.singular))])],1)],1)}),[],!1,null,null,null);t.default=u.exports},WjD0:function(e,t){e.exports="object"==typeof self?self.FormData:window.FormData},dhqo:function(e,t,a){e.exports=function(){var e=[],t=[],a={},n={},r={};function i(e){return"string"==typeof e?new RegExp("^"+e+"$","i"):e}function s(e,t){return e===t?t:e===e.toLowerCase()?t.toLowerCase():e===e.toUpperCase()?t.toUpperCase():e[0]===e[0].toUpperCase()?t.charAt(0).toUpperCase()+t.substr(1).toLowerCase():t.toLowerCase()}function o(e,t){return e.replace(/\$(\d{1,2})/g,(function(e,a){return t[a]||""}))}function u(e,t){return e.replace(t[0],(function(a,n){var r=o(t[1],arguments);return s(""===a?e[n-1]:a,r)}))}function l(e,t,n){if(!e.length||a.hasOwnProperty(e))return t;for(var r=n.length;r--;){var i=n[r];if(i[0].test(t))return u(t,i)}return t}function c(e,t,a){return function(n){var r=n.toLowerCase();return t.hasOwnProperty(r)?s(n,r):e.hasOwnProperty(r)?s(n,e[r]):l(r,n,a)}}function m(e,t,a,n){return function(n){var r=n.toLowerCase();return!!t.hasOwnProperty(r)||!e.hasOwnProperty(r)&&l(r,r,a)===r}}function h(e,t,a){return(a?t+" ":"")+(1===t?h.singular(e):h.plural(e))}return h.plural=c(r,n,e),h.isPlural=m(r,n,e),h.singular=c(n,r,t),h.isSingular=m(n,r,t),h.addPluralRule=function(t,a){e.push([i(t),a])},h.addSingularRule=function(e,a){t.push([i(e),a])},h.addUncountableRule=function(e){"string"!=typeof e?(h.addPluralRule(e,"$0"),h.addSingularRule(e,"$0")):a[e.toLowerCase()]=!0},h.addIrregularRule=function(e,t){t=t.toLowerCase(),e=e.toLowerCase(),r[e]=t,n[t]=e},[["I","we"],["me","us"],["he","they"],["she","they"],["them","them"],["myself","ourselves"],["yourself","yourselves"],["itself","themselves"],["herself","themselves"],["himself","themselves"],["themself","themselves"],["is","are"],["was","were"],["has","have"],["this","these"],["that","those"],["echo","echoes"],["dingo","dingoes"],["volcano","volcanoes"],["tornado","tornadoes"],["torpedo","torpedoes"],["genus","genera"],["viscus","viscera"],["stigma","stigmata"],["stoma","stomata"],["dogma","dogmata"],["lemma","lemmata"],["schema","schemata"],["anathema","anathemata"],["ox","oxen"],["axe","axes"],["die","dice"],["yes","yeses"],["foot","feet"],["eave","eaves"],["goose","geese"],["tooth","teeth"],["quiz","quizzes"],["human","humans"],["proof","proofs"],["carve","carves"],["valve","valves"],["looey","looies"],["thief","thieves"],["groove","grooves"],["pickaxe","pickaxes"],["passerby","passersby"]].forEach((function(e){return h.addIrregularRule(e[0],e[1])})),[[/s?$/i,"s"],[/[^\u0000-\u007F]$/i,"$0"],[/([^aeiou]ese)$/i,"$1"],[/(ax|test)is$/i,"$1es"],[/(alias|[^aou]us|t[lm]as|gas|ris)$/i,"$1es"],[/(e[mn]u)s?$/i,"$1s"],[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i,"$1"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1i"],[/(alumn|alg|vertebr)(?:a|ae)$/i,"$1ae"],[/(seraph|cherub)(?:im)?$/i,"$1im"],[/(her|at|gr)o$/i,"$1oes"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,"$1a"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,"$1a"],[/sis$/i,"ses"],[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i,"$1$2ves"],[/([^aeiouy]|qu)y$/i,"$1ies"],[/([^ch][ieo][ln])ey$/i,"$1ies"],[/(x|ch|ss|sh|zz)$/i,"$1es"],[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i,"$1ices"],[/\b((?:tit)?m|l)(?:ice|ouse)$/i,"$1ice"],[/(pe)(?:rson|ople)$/i,"$1ople"],[/(child)(?:ren)?$/i,"$1ren"],[/eaux$/i,"$0"],[/m[ae]n$/i,"men"],["thou","you"]].forEach((function(e){return h.addPluralRule(e[0],e[1])})),[[/s$/i,""],[/(ss)$/i,"$1"],[/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,"$1fe"],[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i,"$1f"],[/ies$/i,"y"],[/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,"$1ie"],[/\b(mon|smil)ies$/i,"$1ey"],[/\b((?:tit)?m|l)ice$/i,"$1ouse"],[/(seraph|cherub)im$/i,"$1"],[/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,"$1"],[/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,"$1sis"],[/(movie|twelve|abuse|e[mn]u)s$/i,"$1"],[/(test)(?:is|es)$/i,"$1is"],[/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,"$1us"],[/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,"$1um"],[/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,"$1on"],[/(alumn|alg|vertebr)ae$/i,"$1a"],[/(cod|mur|sil|vert|ind)ices$/i,"$1ex"],[/(matr|append)ices$/i,"$1ix"],[/(pe)(rson|ople)$/i,"$1rson"],[/(child)ren$/i,"$1"],[/(eau)x?$/i,"$1"],[/men$/i,"man"]].forEach((function(e){return h.addSingularRule(e[0],e[1])})),["adulthood","advice","agenda","aid","aircraft","alcohol","ammo","analytics","anime","athletics","audio","bison","blood","bream","buffalo","butter","carp","cash","chassis","chess","clothing","cod","commerce","cooperation","corps","debris","diabetes","digestion","elk","energy","equipment","excretion","expertise","firmware","flounder","fun","gallows","garbage","graffiti","hardware","headquarters","health","herpes","highjinks","homework","housework","information","jeans","justice","kudos","labour","literature","machinery","mackerel","mail","media","mews","moose","music","mud","manga","news","only","personnel","pike","plankton","pliers","police","pollution","premises","rain","research","rice","salmon","scissors","series","sewage","shambles","shrimp","software","species","staff","swine","tennis","traffic","transportation","trout","tuna","wealth","welfare","whiting","wildebeest","wildlife","you",/pok[eé]mon$/i,/[^aeiou]ese$/i,/deer$/i,/fish$/i,/measles$/i,/o[iu]s$/i,/pox$/i,/sheep$/i].forEach(h.addUncountableRule),h}()},ke3Z:function(e,t,a){"use strict";a("WjD0");function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors={}}var t,a,r;return t=e,(a=[{key:"has",value:function(e){return this.errors.hasOwnProperty(e)}},{key:"any",value:function(){return Object.keys(this.errors).length>0}},{key:"get",value:function(e){if(this.errors[e])return this.errors[e][0]}},{key:"record",value:function(e){this.errors=e.errors}},{key:"clear",value:function(e){e?delete this.errors[e]:this.errors={}}}])&&n(t.prototype,a),r&&n(t,r),e}(),i=a("5fFP");function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}a.d(t,"a",(function(){return o}));var o=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1];for(var n in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.errors=new r,this.originalData=t,this.hasChanges=!1,this.preventNavigation=a,t)this[n]=t[n]}var t,a,n;return t=e,(a=[{key:"set",value:function(e,t){this.data[e]=t}},{key:"get",value:function(e){return this.data[e]}},{key:"reset",value:function(){for(var e in this.originalData)this[e]=this.originalData[e];this.errors.clear()}},{key:"data",value:function(){var e={};for(var t in this.originalData)e[t]=this[t];return e}},{key:"post",value:function(e){return this.submit("post",e)}},{key:"patch",value:function(e){return this.submit("patch",e)}},{key:"put",value:function(e){return this.submit("put",e)}},{key:"delete",value:function(e){return this.submit("delete",e)}},{key:"submit",value:function(e,t){var a=this;return new Promise((function(n,r){axios[e](t,a.data()).then((function(e){a.onSuccess(e.data),i.a.commit("form/setPreventNavigation",!1),n(e.data)})).catch((function(e){a.onFailure(e.response.data),r(e.response.data)}))}))}},{key:"onSuccess",value:function(e){}},{key:"onFailure",value:function(e){this.errors.record(e)}},{key:"onFirstChange",value:function(e){this.hasChanges=!0,this.preventNavigation&&i.a.commit("form/setPreventNavigation",!0)}}])&&s(t.prototype,a),n&&s(t,n),e}()}}]);