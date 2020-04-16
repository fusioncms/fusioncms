<template>
    <div>
        <div class="form__group">
          <label :for="field.handle" class="form__label">{{field.name}}</label>

          <textarea :ref="textareaClass" :name="field.handle" :id="field.handle" :value="value" v-show="false"></textarea>

          <div :ref="braceClass" :id="braceClass + '_id'" class="border rounded"></div>
          <div class="form__control--meta" v-if="field.help">
            <div class="form__help">
                <span v-if="help" v-html="help"></span>
            </div>
          </div> 
        </div>
    </div>
</template>

<script>
    import ace from 'brace'
    
    export default {
        name: 'code-fieldtype',

        props: {
            field: {
                type: Object,
                required: true
            },

            value: {
                required: false,
                default: ''
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
          },

          textareaClass() {
            return this.braceClass + '_textarea'
          },

          syntax() {
            return this.field.settings.syntax || 'html'
          }
        },

        mounted() {
          let vm = this

          // require(`brace/mode/${this.syntax}`) TO-DO
          vm.loadSyntax(vm.syntax)

          require(`brace/theme/chrome`)

          vm.editor = ace.edit(vm.$refs[vm.braceClass])
          vm.editor.setOptions({
               showPrintMargin: false,
               minLines: 5,
               maxLines: Infinity
          })
          vm.editor.setTheme(`ace/theme/chrome`)
          vm.editor.$blockScrolling = Infinity
          vm.editor.setValue(vm.value || '', -1)
          vm.editor.getSession().setUseWrapMode(true)
          vm.editor.getSession().setMode(`ace/mode/${this.syntax}`)

          vm.editor.getSession().on('change', function() {
              vm.$refs[vm.textareaClass].value = vm.editor.getSession().getValue()
              vm.$emit('input', vm.editor.getSession().getValue())
          })
        },

        methods: {
          loadSyntax(syntax) {
            switch(syntax) {
              case 'css': 
                require('brace/mode/css')
                break;
              case 'html': 
                require('brace/mode/html')
                break;
              case 'javascript': 
                require('brace/mode/javascript')
                break;
              case 'json': 
                require('brace/mode/json')
                break;
              case 'markdown': 
                require('brace/mode/markdown')
                break;
              case 'python': 
                require('brace/mode/python')
                break;
              case 'xml': 
                require('brace/mode/xml')
                break;
              default: 
                require('brace/mode/javascript')
            }
          }

        }
    }
</script>

