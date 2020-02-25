<template>
    <button
        class="button"
        :class="[ themes[theme], sizes[size] ]"
        :type="type"
        :disabled="disabled"
        @click="onClick($event)"
    >
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'p-button',

        data() {
            return {
                themes: {
                    default: '',
                    primary: 'button--primary',
                    secondary: 'button--secondary',
                    info: 'button--info',
                    success: 'button--success',
                    warning: 'button--warning',
                    danger: 'button--danger',
                    dark: 'button--dark',
                },

                sizes: {
                    normal: '',
                    small: 'button--small',
                    large: 'button--large',
                },
            }
        },

        props: {
            type: {
                required: false,
                type: String,
                default: 'button',
            },

            to: {
                required: false,
                type: String | Object,
            },

            href: {
                required: false,
                type: String,
            },

            theme: {
                required: false,
                type: String,
                default: 'default',
            },

            size: {
                required: false,
                type: String,
                default: 'normal',
            },
            
            disabled: {
                required: false,
                type: Boolean,
                default: false,
            },
        },

        methods: {
            onClick(event) {
                if (typeof this.to === 'undefined' && typeof this.href !== 'undefined') { // is href
                    event.preventDefault()
                    window.location = this.href
                } else if (typeof this.to !== 'undefined' && typeof this.$router !== 'undefined') { // is router-link

                    if (typeof this.to !== 'object' && this.to !== null) { // is string

                        this.$router.push({ path: this.to }).catch((err) => {})

                    } else { // is object

                        this.$router.push(this.to).catch((err) => {})
                    }             
                }

                this.$emit('click', event)
            }
        }
    }
</script>
