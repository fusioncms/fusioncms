<template>
    <div>
        <p-radio-group
            :name="field.name"
            :label="field.name"
            :help="field.help"
            :inline="field.settings.display == 'row'">
                <p-radio :key="field.name + option.label"
                    v-for="option in field.settings.options"
                    :name="field.name"
                    :id="option.value"
                    :value="option.value"
                    :checked="option.value == originalValue"
                    v-model="originalValue"
                    @input="$emit('input', option.value)">
                    {{option.label}}
                </p-radio>
        </p-radio-group>
    </div>
</template>

<script>
    import fieldtype from '../../../mixins/fieldtype'
    export default {
        name: 'radio-fieldtype',

        mixins: [fieldtype],

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: function(){ return [] },
            },
        },

        data() {
            return {
                originalValue: ''
            }
        },

        mounted() {
            // if(!this.value) {
            //     this.$emit('input', [])
            // }

            // this.values = _.cloneDeep(this.value)

            this.originalValue = this.value
        }
    }
</script>

