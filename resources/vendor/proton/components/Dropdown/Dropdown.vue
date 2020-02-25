<template>
    <div class="dropdown">
        <button class="dropdown__button" @click.prevent="toggle($event)" v-click-outside="close" ref="dropdown_button">
            <slot></slot>
        </button>

        <div v-show="isOpen" class="dropdown__options" ref="dropdown_options" :class="this.optionClasses">
            <slot name="options"></slot>
        </div>
    </div>
</template>

<script>
    import Popper from 'popper.js'

    export default {
        name: 'p-dropdown',

        data() {
            return {
                isOpen: false,
                popper: null,
            }
        },

        props: {
            right: {
                required: false,
                type: Boolean,
                default: false,
            }
        },

        methods: {
            open() {
                this.isOpen = true

                this.$nextTick(() => {
                    this.popper = new Popper(this.$refs.dropdown_button, this.$refs.dropdown_options, {
                        placement: this.right ? 'bottom-end' : 'bottom-start',
                    })
                })
            },

            close() {
                this.isOpen = false
                this.destroyPopper()
            },

            toggle(event) {
                this.isOpen ? this.close() : this.open()

                this.$emit('click', event)
            },

            listenForEscape() {
                const escapeHandler = (e) => {
                    if (e.key === 'Escape' && this.isOpen) {
                        this.close()
                    }
                }

                document.addEventListener('keydown', escapeHandler)

                this.$once('hook:destroyed', () => {
                    document.removeEventListener('keydown', escapeHandler)
                })
            },

            optionClasses() {
                classes = {
                    'dropdown__options--right': this.right
                }

                return classes
            },

            destroyPopper() {
                this.popper && this.popper.destroy()
            }
        },

        created() {
            this.listenForEscape()
        },

        destroyed() {
            this.destroyPopper()
        }
    }
</script>
