(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{q14V:function(e,t,i){"use strict";i.r(t);var l=i("kzam"),a=i.n(l),o=i("Hnzs"),n=i("rIy7"),r=i("s5Ge"),d=i("pyjo"),s=i("Ps3v"),c=i("XSXq"),u=i("HFD5"),h=i("ccAN"),f=i("CWC4"),p=i("4ez4"),k=i("o8aH"),b=i("PiFl"),m=i("JWL6"),v=i("0u+R"),w={name:"block-editor-fieldtype",props:{field:{type:Object,required:!0},value:{required:!1,default:""}},data:function(){return{editor:{type:Object}}},mounted:function(){var e=this,t=this.value;e.editor=new a.a({holder:this.field.handle,placeholder:this.field.settings.placeholder||"Add some text here...",data:t,minHeight:0,tools:{checklist:o,code:n,delimiter:r,embed:d,header:s,inlineCode:c,link:u,list:h,marker:f,quote:p,raw:k,simpleImage:b,table:m,warning:v},onChange:function(){e.editor.save().then((function(t){e.$emit("input",t)}))}})},methods:{addBlock:function(){this.editor.blocks.insert("paragraph",null,null,this.editor.blocks.getBlocksCount()),this.editor.caret.setToLastBlock(),this.editor.toolbar.open()}}},_=i("KHd+"),C=Object(_.a)(w,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("label",{staticClass:"form__label",attrs:{for:e.field.handle}},[e._v(e._s(e.field.name))]),e._v(" "),i("div",{staticClass:"block-editor",attrs:{id:e.field.handle}},[i("a",{staticClass:"block-editor__add",attrs:{href:"#",name:"Add block"},on:{click:function(t){return t.preventDefault(),e.addBlock(t)}}},[i("fa-icon",{attrs:{icon:["far","plus-circle"]}})],1)])])}),[],!1,null,null,null);t.default=C.exports}}]);