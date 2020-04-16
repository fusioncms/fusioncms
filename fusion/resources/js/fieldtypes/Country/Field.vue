<template>
    <div>
        <p-select
            :name="field.handle"
            :label="field.name"
            :help="field.help"
            :value="value"
            @input="$emit('input', $event)"
            :options="countries"
            placeholder="Select a country..."
            :filterable="field.settings.filterable || false"
        ></p-select>
    </div>
</template>

<script>
    export default {
        name: 'country-fieldtype',

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
            countries() {
                return Object.values(this.field.type.data)
            },
        },

        created() {
            let index = _.findIndex(this.countries, (country) => country.checked == true)

            if (index !== -1 && ! this.countries) {
                this.$emit('input', this.countries[index].value)
            }
        }
    }
</script>

