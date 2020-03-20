<template>
    <div>
        <div class="fixed inset-0 flex items-end justify-end px-4 py-6 sm:p-6 pointer-events-none z-50">
            <div class="max-w-xs w-full bg-gray-900 shadow-lg rounded-lg pointer-events-auto border border-gray-300" v-show="show">
                <div class="rounded-lg shadow-xs overflow-hidden">
                    <div class="p-4">
                        <div class="flex items-start">
                            <div class="flex-shrink-0">
                                <fa-icon :icon="['fas', icon]" class="h-6 w-6 text-gray-500" :class="{'text-success-500': (level == 'success'), 'text-danger-500': (level == 'failed')}"></fa-icon>
                            </div>

                            <div class="ml-3 w-0 flex-1 pt-1">
                                <span class="block text-sm leading-none font-medium text-gray-100 capitalize">
                                    {{ level }}!
                                </span>

                                <span class="block text-sm leading-5 mt-2 text-gray-400">
                                    {{ body }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                show: false,
                level: 'default',
                body: '',
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

        computed: {
            icon() {
                switch (this.level) {
                    case 'success':
                        return 'check-circle'
                        break
                    case 'failed':
                        return 'exclamation-circle'
                        break
                    default:
                        return 'circle'
                }
            },
        },

        created() {
            if (this.message) {
                this.toast(this.message)
            }

            this.listenForDirective()
        },
    }
</script>
