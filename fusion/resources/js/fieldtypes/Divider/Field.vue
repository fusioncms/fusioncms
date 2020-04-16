<template>
    <div>
        <hr>
    </div>
</template>

<script>
    export default {
        name: 'divider-fieldtype',

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

