<template>
    <p-input
        :name="field.handle"
        :label="field.name"
        :help="field.help"
        :placeholder="field.settings.placeholder"
        :value="value"
        @input="$emit('input', $event)"
    ></p-input>
</template>

<script>
    export default {
        name: 'input-fieldtype',

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
    }
</script>
