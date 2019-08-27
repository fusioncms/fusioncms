<template>
    <span class="flex items-center">
        <div v-if="icon" class="mr-3 text-lg text-gray-500 bg-white w-10 h-10 rounded flex items-center justify-center border-4 border-gray-200">
            <fa-icon :icon="['fas', icon]" class="fa-fw"></fa-icon>
        </div>

        <slot></slot>
    </span>
</template>

<script>
    export default {
        props: ['icon'],
    }
</script>
