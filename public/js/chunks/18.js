(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{EACl:function(e,t,l){"use strict";l.r(t),t.default={props:{value:{type:Object,required:!0}},computed:{settings:function(){return this.value.settings||{}},errors:function(){return this.value.errors||{}}}}},Hr8T:function(e,t,l){"use strict";l.r(t);var a={name:"code-fieldtype-settings",data:function(){return{syntax:this.value.type||"text"}},mixins:[l("EACl").default]},n=l("KHd+"),s=Object(n.a)(a,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("p-select",{attrs:{name:"settings.syntax",label:"Syntax",help:"What language should the syntax highlighter use?",autocomplete:"off",options:[{value:"css",label:"CSS"},{value:"html",label:"HTML"},{value:"javascript",label:"JavaScript"},{value:"json",label:"JSON"},{value:"markdown",label:"Markdown"},{value:"python",label:"Python"},{value:"text",label:"Text"},{value:"xml",label:"XML"}]},model:{value:e.value.syntax,callback:function(t){e.$set(e.value,"syntax",t)},expression:"value.syntax"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);