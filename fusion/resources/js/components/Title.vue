<template>
    <span class="flex items-center">
        <div v-if="icon" class="mr-2 text-xl text-gray-500 bg-white w-10 h-10 rounded flex items-center justify-center border-4 border-gray-200">
            <fa-icon :icon="['fas', icon]" class="fa-fw"></fa-icon>
        </div>

        <div class="text-xl font-bold tracking-wider">
            <slot></slot>
        </div>
    </span>
</template>

<script>
    export default {
        props: ['icon'],
    }
</script>
