export default {
    props: {
        value: {
            type: Object,
            required: true
        },
    },

    computed: {
        settings() {
            return this.value.settings || {}
        },

        errors() {
            return this.value.errors || {}
        }
    }
}