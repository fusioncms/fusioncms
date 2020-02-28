<script>
    import { createPopper } from '@popperjs/core';

    export default {
        name: 'renderless-dropdown',

        data() {
            return {
                isOpen: false,
                popper: null,
                referenceElement: null,
                popperElement: null,
                popperOptions: {
                    placement: this.placement,
                    padding: 5,
                },
            }
        },

        props: {
            placement: {
                required: false,
                type: String,
                default: 'bottom-start',
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
                    this.popper = createPopper(
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

        mounted() {
            this.referenceElement = this.$el.querySelectorAll('[data-reference')[0]
            this.popperElement = this.$el.querySelectorAll('[data-popper]')[0]
        },

        created() {
            this.listenForEscape()
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