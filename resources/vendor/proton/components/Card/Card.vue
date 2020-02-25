<template>
    <div class="card">
        <div :class="styles">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-card',

        data() {
            return {
                themes: {
                    default: '',
                    primary: 'card--primary',
                    secondary: 'card--secondary',
                    info: 'card--info',
                    success: 'card--success',
                    warning: 'card--warning',
                    danger: 'card--danger',
                    dark: 'card--dark',
                },
            }
        },

        props: {
            noBody: {
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

        computed: {
            styles() {
                let styles = {}

                styles['card__body'] = ! this.noBody
                styles[this.themes[this.theme]] = true

                return styles
            }
        }
    }
</script>
