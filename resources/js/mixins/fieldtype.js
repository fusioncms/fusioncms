export default {
    props: {
        value: {
            required: true,
        },
    },

    watch: {
        value: {
            deep: true,
            handler(value) {
                this.$emit('input', value)
            }
        },
    }
}