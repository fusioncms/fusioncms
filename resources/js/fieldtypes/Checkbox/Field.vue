<template>
    <div>
        <p-checkbox-group 
            :label="field.name"
            :help="field.help"
            :inline="field.settings.display == 'row'">
                <p-checkbox
                    v-for="option in field.settings.options"
                    :key="option.value"
                    :name="field.name"
                    :id="option.value"
                    :native-value="option.value"
                    v-model="values"
                    @input="$emit('input', values)"
                    >
                    <template>
                        {{option.label}}
                    </template>
                </p-checkbox>
        </p-checkbox-group>
    </div>
</template>

<script>
    import fieldtype from '../../mixins/fieldtype'
    export default {
        name: 'checkbox-fieldtype',

        mixins: [fieldtype],

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: function() {
                    return []
                },
            },
        },

        data() {
            return {
                values: []
            }
        },

        mounted() {
            if(!this.value) {
                this.$emit('input', [])
            }

            this.values = _.cloneDeep(this.value)
        }
    }
</script>

