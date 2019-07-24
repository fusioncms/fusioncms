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
                     value: 'apache_conf',
                     label: 'Apache_Conf'
                },
                {
                     value: 'css',
                     label: 'CSS'
                },
                {
                     value: 'gitignore',
                     label: 'Gitignore'
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
                     value: 'less',
                     label: 'LESS'
                },
                {
                     value: 'markdown',
                     label: 'Markdown'
                },
                {
                     value: 'mysql',
                     label: 'MySQL'
                },
                {
                     value: 'php',
                     label: 'PHP'
                },
                {
                     value: 'python',
                     label: 'Python'
                },
                {
                     value: 'ruby',
                     label: 'Ruby'
                },
                {
                     value: 'sass',
                     label: 'SASS'
                },
                {
                     value: 'scss',
                     label: 'SCSS'
                },
                {
                     value: 'sql',
                     label: 'SQL'
                },
                {
                     value: 'text',
                     label: 'Text'
                },
                {
                     value: 'typescript',
                     label: 'Typescript'
                },
                {
                     value: 'xml',
                     label: 'XML'
                },
                {
                     value: 'yaml',
                     label: 'YA'
                }
            ]"
        >
        </p-select>
    </div>
</template>

<script>
    import fieldtype from '../../../mixins/fieldtype'

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

