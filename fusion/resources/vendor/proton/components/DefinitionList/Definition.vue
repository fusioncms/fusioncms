<template>
    <div class="flex flex-wrap w-full">
        <dt class="w-1/3">{{ name }}</dt>
        <dd class="w-2/3"><slot></slot></dd>
    </div>
</template>

<script>
    export default {
        name: 'p-definition',

        props: ['name']
    }
</script>