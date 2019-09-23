<template>
    <div>
        <p-textarea
            :name="field.handle"
            :label="field.name"
            :help="field.help"
            :value="value"
            @input="$emit('input', $event)"
        ></p-textarea>
    </div>
</template>

<script>
    import marked from 'marked'
    
    export default {
        name: 'markdown-fieldtype',

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

