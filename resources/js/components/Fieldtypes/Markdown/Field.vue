<template>
    <div class="row">
        <div class="col" :class="[previewOpen ? 'w-1/2' : 'w-100']">
            <p-textarea
                :name="field.handle"
                :label="field.name"
                :help="field.help"
                :value="value"
                @input="$emit('input', $event)"
            ></p-textarea>
        </div>
        <div class="w-1/2" v-if="previewOpen">
            <div class="card h-full">
                <div class="p-2" v-html="markdown"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import marked from 'marked'

    export default {
        name: 'markdown-fieldtype',

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
                previewOpen: true
            }
        },

        computed: {
            markdown() {
                return marked(this.value)
            }
        }
    }
</script>

