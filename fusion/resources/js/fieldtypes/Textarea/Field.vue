<template>
    <div>
        <p-textarea
            :name="field.handle"
            :label="field.name"
            :help="field.help"
            :placeholder="field.settings.placeholder"
            :value="value"
            @input="$emit('input', $event)"
        ></p-textarea>
    </div>
</template>

<script>
    export default {
        name: 'textarea-fieldtype',

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

