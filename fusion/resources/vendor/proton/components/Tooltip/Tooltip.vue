<template>
    <div class="flex">
        <div ref="body">
            <slot></slot>
        </div>

        <div v-show="false" ref="content">
            <slot name="content"></slot>
        </div>
    </div>
</template>

<script>
    import Tooltip from 'tooltip.js'

    export default {
        name: 'p-tooltip',

        props: {
            placement: {
                required: false,
                type: String,
                default: 'top',
            },
        },

        mounted() {
            new Tooltip(this.$refs.body, {
                placement: this.placement,
                title: this.$refs.content.innerHTML,
                html: true,
            })
        }
    }
</script>
