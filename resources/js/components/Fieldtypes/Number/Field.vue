<template>
    <div>
        <p-number
            :name="field.handle"
            :label="field.name"
            :help="field.help"
            :placeholder="field.settings.placeholder"
            :value="value"
            @input="$emit('input', $event)"
            :steps="steps"
            :decimals="field.settings.decimals"
        ></p-number>
    </div>
</template>

<script>
    export default {
        name: 'number-fieldtype',

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                type: [String, Number],
                required: false,
                default: null,
            },
        },

        computed: {
            steps() {
                let places = this.field.settings.decimals

                if (places > 0) {
                    return this.pad(this.field.settings.decimals)
                }
                return 1
            },

        },

        methods: {
            pad(length) {
                let str = '1'
                while(str.length < length) {
                    str = '0' + str
                }
                return Number('0.' + str.substr(-length, length))
            },
        },
    }
</script>

