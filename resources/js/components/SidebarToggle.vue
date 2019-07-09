<template>
    <a href="#" @click.prevent="onClick()" class="text-grey-light hover:text-white">
        <fa-icon :icon="['far', 'bars']"></fa-icon>
    </a>
</template>

<script>
    export default {
        name: 'sidebar-toggle',

        methods: {
            onClick() {
                Fusion.bus.$emit('toggle-sidebar')
            }
        }
    }
</script>