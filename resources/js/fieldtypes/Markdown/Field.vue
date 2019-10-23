<template>
    <div class="form__group">
        <label
            class="form__label"
            :for="field.handle"
            v-html="field.name">
        </label>

        <textarea :name="field.handle" :id="field.handle" cols="30" rows="10" v-model="value"></textarea>
    </div>
</template>

<script>
    require('codemirror/mode/gfm/gfm')
    require('codemirror/keymap/sublime')
    require('codemirror/addon/display/placeholder')

    import CodeMirror from 'codemirror'

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

            this.codemirror.on('change', (instance) => {
                this.$emit('input', instance.getValue())
            })
        },
    }
</script>

