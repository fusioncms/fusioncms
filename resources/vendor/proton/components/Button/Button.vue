<template>
    <renderless-button :loading="value">
        <button
            slot-scope="props"
            :class="classes"
            v-bind="$attrs"
            class="button"
            @click="onClick"
            :disabled="props.isLoading"
        >
            <slot></slot>

            <fa-icon v-if="props.isLoading" icon="circle-notch" class="ml-3 fa-fw fa-spin"></fa-icon>
        </button>
    </renderless-button>
</template>

<script>
    export default {
        name: 'p-button',

        inheritAttrs: false,

        data() {
            return {
                loading: this.value,
            }
        },

        watch: {
            loading(value) {
                console.log('loading changed: ' + value)
            }
        },

        props: {
            classes: {
                required: false,
                default: ''
            },

            value: {
                required: false,
                default: false,
            }
        },

        methods: {
            onClick() {
                this.$emit('click')
            }
        }
    }
</script>
