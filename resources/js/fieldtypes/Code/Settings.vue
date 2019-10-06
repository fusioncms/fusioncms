<template>
    <div>
        <p-select
            name="settings.syntax"
            label="Syntax"
            help="What language should the syntax highlighter use?"
            autocomplete="off"
            v-model="value.syntax"
            :options="[
                {
                     value: 'css',
                     label: 'CSS'
                },
                {
                     value: 'html',
                     label: 'HTML'
                },
                {
                     value: 'javascript',
                     label: 'JavaScript'
                },
                {
                     value: 'json',
                     label: 'JSON'
                },
                {
                     value: 'markdown',
                     label: 'Markdown'
                },
                {
                     value: 'python',
                     label: 'Python'
                },
                {
                     value: 'text',
                     label: 'Text'
                },
                {
                     value: 'xml',
                     label: 'XML'
                }
            ]"
        >
        </p-select>
    </div>
</template>

<script>
    import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'code-fieldtype-settings',

        data() {
            return {
                syntax: this.value.type || 'text'
            }
        },

        mixins: [fieldtype]
    }
</script>

