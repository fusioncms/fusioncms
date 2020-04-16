<template>
    <div class="form__group">
        <label
            class="form__label"
            :for="field.handle"
            v-html="field.name">
        </label>

        <p-tabs>
            <p-tab name="Markdown">
                <textarea
                    :name="field.handle"
                    :id="field.handle"
                    cols="30"
                    rows="12"
                    v-model="value"
                    autofocus>
                </textarea>
            </p-tab>
            <p-tab name="Preview">
                <div v-html="preview" class="markdown-body"></div>
            </p-tab>
        </p-tabs>
    </div>
</template>

<script>
    require('codemirror/mode/gfm/gfm')
    require('codemirror/keymap/sublime')
    require('codemirror/addon/display/placeholder')

    import CodeMirror from 'codemirror'
    import marked     from 'marked'

    export default {
        name: 'markdown-fieldtype',

        data() {
            return {
                codemirror: null,
            }
        },

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

        computed: {
            preview() {
                const tokens = marked.lexer(this.value || '')
                const html   = marked.parser(tokens)
                
                return html
            }
        },

        mounted() {
            this.codemirror = CodeMirror.fromTextArea(document.getElementById(this.field.handle), {
                theme: 'fusion',
                mode: {
                    name: 'gfm',
                    highlightFormatting: true,
                    fencedCodeBlockHighlighting: true,
                },
                lineWrapping: true,
                viewportMargin: Infinity,
                keyMap: 'sublime',
            })

            setTimeout(() => { this.codemirror.refresh() }, 1)

            this.codemirror.on('change', (instance) => {
                this.$emit('input', instance.getValue())
            })
        },
    }
</script>