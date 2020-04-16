<script>
    export default {
        name: 'renderless-button',

        data() {
            return {
                isLoading: this.loading,
            }
        },

        props: {
            loading: {
                required: false,
                default: false,
                type: Boolean,
            },
        },

        watch: {
            loading(value) {
                this.isLoading = value
            }
        },

        render() {
            return this.$scopedSlots.default({
                isLoading: this.isLoading,
            })
        }
    }
</script>