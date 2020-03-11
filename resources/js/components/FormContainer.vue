<template>
    <div class="row">
        <div class="col w-full md:flex-1">
            <slot></slot>
        </div>

        <div class="col w-full md:w-400px">
            <slot name="sidebar"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'form-container'
    }
</script>