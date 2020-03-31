<script>
    export default {
        name: 'renderless-dropdown',

        data() {
            return {
                isOpen: false,
            }
        },

        methods: {
            open() {
                this.isOpen = true
            },

            close() {
                this.isOpen = false
            },

            toggle() {
                this.isOpen ? this.close() : this.open()
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
                open: this.open,
                close: this.close,
            })
        }
    }
</script>