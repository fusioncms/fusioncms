<template>
    <div>
        <p-select
            :name="field.handle"
            :label="field.name"
            :help="field.help"
            :value="value"
            @input="$emit('input', $event)"
            :options="options"
        ></p-select>
    </div>
</template>

<script>
    export default {
        name: 'select-fieldtype',

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: null,
            },
        },

        computed: {
            options() {
                return this.field.settings.options
            },
        },

        created() {
            let index = _.findIndex(this.options, function(option) {
                return option.checked == true
            })

            if (index !== -1 && ! this.value) {
                this.$emit('input', this.options[index].value)
            }
        }
    }
</script>

