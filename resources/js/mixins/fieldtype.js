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
                console.log(value)
                this.$emit('input', value)
            }
        },
    }
}