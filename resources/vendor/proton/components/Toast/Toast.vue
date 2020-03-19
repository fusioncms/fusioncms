<template>
    <div class="toast" role="alert" v-show="show" :class="[ levels[level] ]">
        <span
            class="toast__badge"
            v-if="
                level !== 'default' &&
                level !== 'dark' &&
                level !== 'secondary'">
            {{ level }}
        </span>

        <span class="toast__message">{{ body }}</span>
    </div>
</template>

<script>
    export default {
        name: 'p-toast',

        props: [
            'message',
        ],

        data() {
            return {
                level: 'default',

                levels: {
                    default: '',
                    primary: 'toast--primary',
                    secondary: 'toast--secondary',
                    info: 'toast--info',
                    success: 'toast--success',
                    warning: 'toast--warning',
                    danger: 'toast--danger',
                    failed: 'toast--danger',
                    dark: 'toast--dark',
                },

                body: '',

                show: false,
            }
        },

        methods: {
            toast(message) {
                this.body = message
                this.show = true

                this.hide()
            },

            hide() {
                setTimeout(() => {
                    this.show = false
                }, 4000)
            },

            listenForDirective() {
                this.$proton.$on('toast', (toast) => {
                    this.level = toast.level

                    this.toast(toast.message)
                })
            }
        },

        created() {
            if (this.message) {
                this.toast(this.message)
            }

            this.listenForDirective()
        },
    }
</script>
