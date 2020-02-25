<template>
    <transition
        name="animated-fade-in-out"
        enter-active-class="animated fadeIn faster"
        leave-active-class="animated fadeOut faster">

        <div v-show="shouldShow">
            <slot></slot>
        </div>
    
    </transition>
</template>

<script>
    import EventBus from '../../support/eventbus'

    export default {
        name: 'p-collapse',

        data() {
            return {
                shouldShow: this.show,
            }
        },

        props: {
            name: {
                required: true,
                type: String,
            },

            show: {
                required: false,
                type: Boolean,
                default: false,
            },
        },

        methods: {
            toggle() {
                this.shouldShow = ! this.shouldShow
            },

            listenForDirective() {
                this.$proton.$on('toggle-collapse-' + this.name, () => {
                    this.toggle()
                })
            },
        },

        created() {
            this.listenForDirective()
        },
    }
</script>

