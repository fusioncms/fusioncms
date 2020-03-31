<template>
    <span :class="{
        'text-success-500': value,
        'text-danger-500': ! value
    }">
        <fa-icon icon="circle" class="icon fa-xs"></fa-icon>
    </span>
</template>

<script>
    export default {
        name: 'p-status',

        props: {
            value: {
                required: true,
            }
        }
    }
</script>