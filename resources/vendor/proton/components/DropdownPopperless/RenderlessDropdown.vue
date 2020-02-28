<script>
    export default {
        name: 'renderless-dropdown',

        data() {
            return {
                isOpen: false,
            }
        },

        methods: {
            toggle() {
                this.isOpen = ! this.isOpen
            },

            close() {
                this.isOpen = false
            },

            listenForEscape() {
                const escapeHandler = (e) => {
                    if (e.key === 'Escape' && this.isOpen) {
                        this.toggle()
                    }
                }

                document.addEventListener('keydown', escapeHandler)

                this.$once('hook:destroyed', () => {
                    document.removeEventListener('keydown', escapeHandler)
                })
            },
        },

        created() {
            this.listenForEscape()
        },

        render() {
            return this.$scopedSlots.default({
                isOpen: this.isOpen,
                toggle: this.toggle,
                close: this.close,
            })
        }
    }
</script>