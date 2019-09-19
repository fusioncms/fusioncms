<template>
    <div>
        <p-toggle :name="field.handle"
            :label="field.name"
            :help="field.help"
            :checked="!!value"
            @input="$emit('input', $event)"
        ></p-toggle>
    </div>
</template>

<script>
    export default {
        name: 'toggle-fieldtype',

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: false,
            },
        },
    }
</script>

