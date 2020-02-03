<script>
    export default {
        name: 'renderless-data-table',

        props: {
            baseUrl: {
                type: String,
                default: null,
            },

            endpoint: {
                type: String,
                default: null,
            },

            filter: {
                type: Object,
            },

            items: {
                type: Array,
                required: true,
            },

            defaultSort: {
                type: String,
                default: null,
                validator(value) {
                    return ['asc', 'desc'].includes(value)
                },
            },

            sortKey: {
                type: String,
                default: '',
            },

            sortMethod: {
                type: Function,
                default: null,
            },

            filterMethod: {
                type: Function,
                default: null,
            },

            search: {
                type: String,
                default: '',
            },
        },

        watch: {
            filter: {
                immediate: true,
                handler: 'load',
            },
        },

        data() {
            return {
                data: null,
                api: axios.create({ baseURL: this.baseUrl }),
                error: null,
                loading: false,

                sort: {
                    by: this.sortKey,
                    order: 1
                },
            }
        },

        computed: {
            filteredItems() {
                let data = this.data

                if (this.search) {
                    data = ! this.filterMethod
                        ? this.searchedItems
                        : this.filterMethod(this.search, this.data)
                }

                if (this.sort.by || this.defaultSort) {
                    data = ! this.sortMethod
                        ? this.sortedItems
                        : this.sortMethod(this.sort, this.searchedItems)
                }

                return data
            },

            sortedItems() {
                return this.searchedItems.slice().sort((a, b) => {
                    if (typeof a === 'object' && typeof b === 'object') {
                        a = a[this.sort.by]
                        b = b[this.sort.by]
                    }

                    return (a === b ? 0 : a > b ? 1 : -1) * this.sort.order
                })
            },

            searchedItems() {
                return this.data.filter(row => {
                    if (typeof row === 'object') {
                        return Object.keys(row).some(key => {
                            return String(row[key]).toLowerCase().includes(this.search.toLowerCase())
                        })
                    }

                    return String(row).toLowerCase().includes(this.search.toLowerCase())
                })
            },
        },

        methods: {
            sortBy(by) {

                this.sort.by = by
                this.sort.order = this.sort.order * -1

                console.log('sort by: ' + this.sort.by)
                console.log('sort order: ' + this.sort.order)
            },

            async query(type, ...params) {
                if (this.loading) {
                    return
                }

                this.loading = true

                try {
                    const response = await this.api[type](...params)

                    this.data = response.data
                    this.error = null
                    this.$emit('success', response)
                } catch (error) {
                    this.data = null
                    this.error = error.response
                    this.$emit('error', error)
                }

                this.loading = false
            },

            load() {
                console.log('loading endpoint: ' + this.endpoint)

                if (this.endpoint) {
                    return this.query('get', this.endpoint, { params: this.filter })
                }
            }
        },

        created() {
            this.data = this.items

            if (this.defaultSort) {
                this.sort.order = this.defaultSort === 'asc'
                    ? this.sort.order
                    : this.sort.order * -1
            }
        },

        render() {
            return this.$scopedSlots.default({
                sort: this.sortBy,
                load: this.load,
                loading: this.loading,
                error: this.error,
                data: this.filteredItems,
            })
        }
    }
</script>