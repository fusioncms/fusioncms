<template>
    <div class="banner" role="alert" :class="[ themes[theme] ]" v-if="shouldShow">
        <div class="banner__header">
            <div class="banner__header--title" >
                <span v-if="title" v-html="title"></span>
            </div>

            <div>
                <a href="#" class="banner__header--close-button" @click.prevent="dismiss" v-if="! noCloseButton">&times;</a>
            </div>
        </div>

        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: 'p-banner',

        data() {
            return {
                shouldShow: this.show,

                themes: {
                    default: '',
                    primary: 'banner--primary',
                    secondary: 'banner--secondary',
                    info: 'banner--info',
                    success: 'banner--success',
                    warning: 'banner--warning',
                    danger: 'banner--danger',
                    dark: 'banner--dark',
                },
            }
        },

        props: {
            title: {
                required: false,
                type: String,
                default: ''
            },

            theme: {
                required: false,
                type: String,
                default: 'default',
            },

            show: {
                required: false,
                type: Boolean,
                default: true,
            },

            autoClose: {
                required: false,
                type: Boolean,
                default: false,
            },

            duration: {
                required: false,
                type: Number,
                default: 5000,
            },

            noCloseButton: {
                required: false,
                type: Boolean,
                default: false,
            },
        },

        methods: {
            dismiss() {
                this.shouldShow = false
            },
        }
    }
</script>
