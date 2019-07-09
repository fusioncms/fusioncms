export default {
    props: {
        value: {
            required: true,
        },
    },

    watch: {
        value(value) {
            this.$emit('input', value)
        },
    }
}