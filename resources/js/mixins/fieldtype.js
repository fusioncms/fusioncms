export default {
    props: {
        value: {
            required: true,
        },
    },

    computed: {
        settings() {
            return this.value.settings
        },

        errors() {
            return this.value.errors
        }
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