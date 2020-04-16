<script>
    export default {
        name: 'renderless-table',

        data() {
            return {
                isLoading: false,
                sortField: '',
                sortOrder: '',
                perPage: 25,
                total: 0,
                page: 1,
            }
        },

        props: {
            data: {
                required: false,
                default: () => {
                    return []
                }
            },

            columns: {
                required: false,
                default: () => {
                    return []
                }
            },
        },

        render() {
            return this.$scopedSlots.default({
                isLoading: this.isLoading,
                sortField: this.sortField,
                sortOrder: this.sortOrder,
                perPage: this.perPage,
                total: this.total,
                page: this.page
            })
        }
    }
</script>