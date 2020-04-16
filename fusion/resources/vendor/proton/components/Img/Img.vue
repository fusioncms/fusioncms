<template>
    <img
        :data-src="lazySrc"
        :data-srcset="lazySrcset"
        :style="styles"
        class="image"
        ref="image"
    >
</template>

<script>
    import lozad from 'lozad'

    export default {
        name: 'p-img',

        data() {
            return {
                loading: true,
                lozad: null,
            }
        },

        props: {
            lazySrc: {
                type: String,
                default: null,
            },

            lazySrcset: {
                type: String,
                default: null,
            },

            height: {
                type: Number,
                default: null,
            },

            width: {
                type: Number,
                default: null,
            },

            backgroundColor: {
                type: String,
                default: '#000000',
            },
        },

        computed: {
            aspectRatio() {
                if (! this.width || ! this.height) {
                    return null
                }

                return (this.height / this.width) * 100
            },

            styles() {
                let styles = {
                    backgroundColor: this.backgroundColor,
                }

                if (this.width) {
                    styles.width = `${this.width}px`
                }

                if (this.shouldApplyAspectRatio()) {
                    styles.height = 0
                    styles.paddingTop = `${this.aspectRatio}%`
                }

                return styles
            },
        },

        methods: {
            doneLoading() {
                this.loading = false;
            },

            shouldApplyAspectRatio() {
                return this.loading && this.aspectRatio
            },
        },

        mounted() {
            this.$refs.image.addEventListener('load', this.doneLoading())

            this.$once('hook:destroyed', () => {
                if (this.$refs.image) {
                    this.$refs.image.removeEventListener('load', this.doneLoading())
                }
            })

            this.lozad = lozad(this.$refs.image)
            
            this.lozad.observe()
        },
    }
</script>

<style lang="scss">
    .image {
        max-width: 100%;
        max-height: 100%;
        width: auto;
        height: auto;
        vertical-align: middle;
    }
</style>
