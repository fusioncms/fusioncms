<template>
    <a href="#" @click.prevent="onClick" class="text-gray-400 hover:text-gray-900 p-3 -m-3">
        <fa-icon :icon="['fas', 'bars']"></fa-icon>
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