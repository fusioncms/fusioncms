<template>
    <div>

    </div>
</template>

<script>
    export default {
        name: 'checkbox-fieldtype',

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

        computed: {
            options() {
                return this.field.settings.options
            },
        }
    }
</script>

