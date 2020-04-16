<template>
    <div>
        <p-select
            :name="field.handle"
            :label="field.name"
            :help="field.help"
            :value="value"
            @input="$emit('input', $event)"
            :options="states"
            placeholder="Select a state..."
            :filterable="field.settings.filterable || false"
        ></p-select>
    </div>
</template>

<script>
    export default {
        name: 'us-state-fieldtype',

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
            states() {
                return Object.values(this.field.type.data)
            },
        },

        created() {
            let index = _.findIndex(this.states, (state) => state.checked == true)

            if (index !== -1 && ! this.states) {
                this.$emit('input', this.states[index].value)
            }
        }
    }
</script>

