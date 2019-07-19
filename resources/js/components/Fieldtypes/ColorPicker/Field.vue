<template>
    <div>
        <p-input
            :name="field.handle"
            :label="field.name"
            :help="field.help"
            :placeholder="field.options.placeholder"
            :value="value"
            @input="$emit('input', $event)"
        ></p-input>
    </div>
</template>

<script>
    export default {
        name: 'color_picker-fieldtype',

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

