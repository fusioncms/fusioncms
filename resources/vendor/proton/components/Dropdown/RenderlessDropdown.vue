<script>
    import Popper from 'popper.js'

    export default {
        name: 'renderless-dropdown',

        data() {
            return {
                isOpen: false,
                popper: null,
                referenceElement: null,
                popperElement: null,
                popperOptions: {
                    placement: 'bottom-start',
                    modifiers: {
                        arrow: {
                            enabled: false,
                        },
                        preventOverflow: {
                            boundariesElement: 'viewport',
                        },
                        flip: {
                            behavior: ['bottom-start', 'bottom-end', 'top-start', 'top-end'],
                            boundariesElement: 'viewport',
                        },
                    },
                },
            }
        },

        watch: {
            isOpen(isOpen) {
                (isOpen) ? this.createPopper() : this.destroyPopper()
            }
        },

        methods: {
            toggle() {
                this.isOpen = ! this.isOpen
            },

            createPopper() {
                if (this.popper) return

                this.$nextTick(() => {
                    this.popper = new Popper(
                        this.referenceElement,
                        this.popperElement,
                        this.popperOptions
                    )

                    document.addEventListener('click', this.handleDocumentClick)
                })
            },

            destroyPopper() {
                this.popper && this.popper.destroy()

                this.popper = null
                document.removeEventListener('click', this.handleDocumentClick)
            },

            handleDocumentClick(event) {
                let target = event.target

                if (
                    this.referenceElement === target ||
                    this.popperElement === target ||
                    this.referenceElement.contains(target) ||
                    this.popperElement.contains(target)
                ) {
                    return
                }

                this.isOpen = false
            }
        },

        mounted() {
            this.referenceElement = this.$el.querySelectorAll('[data-reference')[0]
            this.popperElement = this.$el.querySelectorAll('[data-popper]')[0]
        },

        destroyed() {
            this.destroyPopper()
        },

        render() {
            return this.$scopedSlots.default({
                isOpen: this.isOpen,
                toggle: this.toggle,
            })
        }
    }
</script>