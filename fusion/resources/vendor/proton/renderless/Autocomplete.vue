<script>
    export default {
        name: 'renderless-autocomplete',

        data() {
            return {
                arrowCounter: -1,
                search: '',
                results: [],
                isOpen: false,
            }
        },

        props: ['value', 'items'],

        watch: {
            search(value) {
                if (value.length == 0) {
                    this.close()
                }
            },

            results(value) {
                if (value.length == 0) {
                    this.close()
                }
            }
        },

        methods: {
            open() {
                if (this.search.length) {
                    this.isOpen = true
                }
            },

            close() {
                this.isOpen = false
                this.arrowCounter = -1
            },

            filterResults() {
                this.results = this.items.filter((item) => {
                    return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                })
            },

            setResult(result) {
                if (result) {
                    this.search = result
                }

                this.close()
            },

            onArrowKeyDown(e) {
                if (this.arrowCounter < this.results.length) {
                    this.arrowCounter = this.arrowCounter + 1
                }
            },

            onArrowKeyUp(e) {
                if (this.arrowCounter > 0) {
                    this.arrowCounter = this.arrowCounter - 1
                }
            },

            onEnter() {
                if (this.results[this.arrowCounter]) {
                    this.search = this.results[this.arrowCounter]
                }

                this.close()
            },

            handleClickOutside(e) {
                if (! this.$el.contains(e.target)) {
                    this.close()
                }
            },
        },

        render() {
            return this.$scopedSlots.default({
                search: this.search,
                results: this.results,
                isOpen: this.isOpen,
                items: this.items,
                arrowCounter: this.arrowCounter,

                inputBindings: {
                    value: this.search,
                },

                inputEvents: {
                    input: (e) => {
                        this.search = e.target.value

                        this.open()
                        this.filterResults()
                    },

                    keydown: (e) => {
                        if (e.keyCode === 13) {
                            e.preventDefault()

                            this.onEnter()
                        }

                        if (e.keyCode === 38) {
                            e.preventDefault()

                            this.onArrowKeyUp()
                        }

                        if (e.keyCode === 40) {
                            e.preventDefault()

                            this.onArrowKeyDown()
                        }
                    },
                }
            })
        },
    }
</script>