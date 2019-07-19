<template>
    <div>
        <p-select
            name="options.transparency"
            label="Transparency"
            help="Should this field allow transparency?"
            autocomplete="off"
            v-model="transparency"
            :options="[
                {
                    label: 'Yes',
                    value: true
                },
                {
                    label: 'No',
                    value: false
                }
            ]"
        >
        </p-select>

        <p-input
            name="options.default"
            label="Default"
            help="Default color value for this field."
            v-model="value.placeholder"
            >
        </p-input>
    </div>
</template>

<script>
    import fieldtype from '../../../mixins/fieldtype'

    export default {
        name: 'color_picker-fieldtype-options',

        data() {
            return {
                transparency: this.value.transparency || true,
            }
        },

        watch: {
            value: {
                deep: true,
                handler(newValue) {
                    console.log(newValue)
                    console.log('value changed', this.value)
                }
            },
        },

        mixins: [fieldtype],
    }
</script>

