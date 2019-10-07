<template>
    <div>
        <label :for="field.handle" class="form__label">{{field.name}}</label>
        <div class="block-editor" :id="field.handle">
            <a href="#" class="block-editor__add" @click.prevent="addBlock" name="Add block">
                <fa-icon :icon="['far', 'plus-circle']"></fa-icon>
            </a>
        </div>
    </div>
</template>

<script>
    import EditorJS from '@editorjs/editorjs'
    
    const Checklist = require('@editorjs/checklist')
    const Code = require('@editorjs/code')
    const Delimiter = require('@editorjs/delimiter')
    const Embed = require('@editorjs/embed')
    const Header = require('@editorjs/header')
    const InlineCode = require('@editorjs/inline-code')
    const Link = require('@editorjs/link')
    const List = require('@editorjs/list')
    const Marker = require('@editorjs/marker')
    const Quote = require('@editorjs/quote')
    const Raw = require('@editorjs/raw')
    const SimpleImage = require('@editorjs/simple-image')
    const Table = require('@editorjs/table')
    const Warning = require('@editorjs/warning')

    export default {
        name: 'block-editor-fieldtype',

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: '',
            },
        },

        data() {
            return {
                editor: {
                    type: Object
                }
            }   
        },

        mounted() {
            let vm = this
            let data = this.value

            vm.editor = new EditorJS({
                holder: this.field.handle,
                placeholder: this.field.settings.placeholder || 'Add some text here...',

                data,

                minHeight: 0,

                tools: {
                    checklist: Checklist,
                    code: Code,
                    delimiter: Delimiter,
                    embed: Embed,
                    header: Header,
                    inlineCode: InlineCode,
                    link: Link,
                    list: List,
                    marker: Marker,
                    quote: Quote,
                    raw: Raw,
                    simpleImage: SimpleImage,
                    table: Table,
                    warning: Warning,
                },

                onChange() {
                    vm.editor.save().then((saved) => {
                        vm.$emit('input', saved)
                    })
                }
            })
        },

        methods: {
            addBlock() {
                this.editor.blocks.insert('paragraph', null, null, this.editor.blocks.getBlocksCount())
                this.editor.caret.setToLastBlock()
                this.editor.toolbar.open()
            }
        }
    }
</script>

