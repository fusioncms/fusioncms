<template>
    <div class="modal--overlay" v-show="isActive" :style="{ zIndex: activeZIndex }" @mousedown="clickedOutside">
        <div class="modal" :class="styles" :style="{ zIndex: activeZIndex }" ref="stackable" @mousedown.stop>
            <div class="modal__header" v-if="! noHeader">
                <slot name="header" :data="data">
                    <div class="modal__header--title">
                        <span v-if="title" v-html="title"></span>
                    </div>

                    <div>
                        <a href="#" class="modal__header--close-button" @click.stop="close" v-if="! noCloseButton">&times;</a>
                    </div>
                </slot>
            </div>

            <div class="modal__body" :class="{ 'modal__body--flush': flush }">
                <slot :data="data"></slot>
            </div>

            <div class="modal__footer" v-if="! noFooter">
                <slot name="footer" :data="data">
                    <p-button @click.stop="close">Close</p-button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    import stackable from '../../mixins/stackable'

    export default {
        name: 'p-modal',

        mixins: [stackable],

        data() {
            return {
                data: null,
                isActive: !!this.value,
                isLoaded: !!this.value,
                stackClass: 'modal--active',
                stackMinZIndex: 200,

                themes: {
                    default: '',
                    primary: 'modal--primary',
                    secondary: 'modal--secondary',
                    info: 'modal--info',
                    success: 'modal--success',
                    warning: 'modal--warning',
                    danger: 'modal--danger',
                    dark: 'modal--dark',
                },
            }
        },

        computed: {
            styles() {
                let styles = {}

                styles['modal--large'] = this.large
                styles['modal--x-large'] = this.extraLarge
                styles[this.themes[this.theme]] = true
                styles['modal--active'] = this.isActive

                return styles
            },
        },

        props: {
            name: {
                required: true,
                type: String,
            },

            title: {
                required: false,
                type: String,
            },

            value: {
                required: false,
                type: Boolean,
                default: false,
            },

            large: {
                required: false,
                type: Boolean,
                default: false,
            },

            extraLarge: {
                required: false,
                type: Boolean,
                default: false,
            },

            noCloseButton: {
                required: false,
                type: Boolean,
                default: false,
            },

            noHeader: {
                required: false,
                type: Boolean,
                default: false,
            },

            noFooter: {
                required: false,
                type: Boolean,
                default: false,
            },

            noEscClose: {
                required: false,
                type: Boolean,
                default: false,
            },

            noOutsideClose: {
                required: false,
                type: Boolean,
                default: false,
            },

            flush: {
                required: false,
                type: Boolean,
                default: false,
            },

            theme: {
                required: false,
                type: String,
                default: 'default',
            },
        },

        methods: {
            open() {
                this.isActive = true
                this.$proton.$emit('modal-opened', this.name)
                document.body.style.setProperty('overflow', 'hidden')

                setTimeout(() => {
                    this.isLoaded = true
                }, 100)
            },

            close() {
                this.isActive = false
                this.isLoaded = false

                this.$proton.$emit('modal-closed', this.name)

                this.$nextTick(function() {
                    if (! this.hasStack()) {
                        document.body.style.removeProperty('overflow')
                    }
                })
            },

            toggle() {
                if (! this.isActive) {
                    this.open()
                } else {
                    this.close()
                }
            },

            listenForEscape() {
                const escapeHandler = (e) => {
                    if (e.key === 'Escape' && this.isActive && this.isActiveStack()) {
                        this.close()
                    }
                }

                if (! this.noEscClose) {
                    document.addEventListener('keydown', escapeHandler)

                    this.$once('hook:destroyed', () => {
                        document.removeEventListener('keydown', escapeHandler)
                    })
                }
            },

            listenForDirective() {
                this.$proton.$on('toggle-modal-' + this.name, (data) => {
                    this.toggle()
                    this.data = data
                })
            },

            clickedOutside() {
                if (! this.noOutsideClose && this.isLoaded && this.isActiveStack()) {
                    this.close()
                }
            },
        },

        watch: {
            value(val) {
                this.isActive = !!val
            },

            isActive(val) {
                !!val !== this.value && this.$emit('input', val)

                if (val) {
                    this.open()
                } else {
                    this.close()
                }
            },
        },

        created() {
            this.listenForEscape()
            this.listenForDirective()
        },

        beforeMount () {
            this.isActive && this.open()
        }
    }
</script>
