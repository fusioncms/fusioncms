<template>
    <div class="row">
        <div class="col w-full lg:flex-1">
            <slot></slot>
        </div>

        <div class="col w-full lg:w-500px">
            <slot name="sidebar"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'form-container'
    }
</script>