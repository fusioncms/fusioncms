<template>
    <div class="field" v-html="field.help"></div>
</template>

<script>
    let marked = require('marked')

    export default {
        name: 'information-fieldtype',

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
            information() {
                marked.setOptions({
                    renderer: new marked.Renderer(),
                    gfm: true,
                    tables: true,
                    breaks: true,
                    pedantic: true,
                    sanitize: true,
                    smartLists: true,
                    smartypants: true,
                })

                return marked(this.field.settings.information)
            }
        }
    }
</script>
