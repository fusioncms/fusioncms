<template>
    <div class="card" :class="classes">
        <div v-if="! noBody" class="card__body">
            <slot></slot>
        </div>

        <template v-else>
            <slot></slot>
        </template>
    </div>
</template>

<script>
    export default {
        name: 'p-card',

        props: {
            noBody: {
                required: false,
                type: Boolean,
                default: false,
            },

            classes: {
                required: false,
                default: ''
            },
        },
    }
</script>
