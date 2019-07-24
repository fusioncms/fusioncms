<template>
    <div>
        <!-- <p-textarea
            :name="field.handle"
            :label="field.name"
            :help="field.help"
            :placeholder="field.settings.placeholder"
            :value="value"
            @input="$emit('input', $event)"
        ></p-textarea> -->

        <textarea :ref="braceClass + '_textarea'" :name="field.handle" :id="field.handle" :value="value" v-show="false"></textarea>

        <div :ref="braceClass" style="width: 100%" :id="braceClass + '_id'"></div>
    </div>
</template>

<script>
    import ace from 'brace'
    
    export default {
        name: 'code-fieldtype',

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
            editor: Object
          }
        },

        computed: {
          braceClass() {
            return this.field.handle + '-brace'
          }
        },

        mounted() {
          require(`brace/mode/javascript`)
          require(`brace/theme/dracula`)

          this.editor = ace.edit(this.$refs[this.braceClass])
          this.editor.setOptions({
                 showPrintMargin: false,
                 minLines: 5,
                 maxLines: Infinity
            })
          this.editor.setTheme(`ace/theme/dracula`)
        }
    }
</script>

