<template>
    <div class="row markdown">
        <div class="col" :class="[previewOpen ? 'w-1/2' : 'w-full']">
            <p-textarea
                :name="field.handle"
                :label="field.name"
                :help="field.help"
                :value="value"
                @input="$emit('input', $event)"
                :rows="8"
            ></p-textarea>
        </div>
        <div class="w-1/2 flex flex-col" v-if="previewOpen">
            <div class="form__label">{{field.name}} Preview</div>
            <div class="markdown__preview card overflow-auto">
                <div class="p-2" v-html="markdown"></div>
            </div>
        </div>
        <div class="w-full col">
            <a href="#" class="button button--primary button--small mt-3 mb-4" @click="previewOpen = !previewOpen">Toggle Preview</a>
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
                return this.value ? marked(this.value) : ''
            }
        }
    }
</script>

