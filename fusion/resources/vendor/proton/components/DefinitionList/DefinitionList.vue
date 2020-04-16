<template>
    <div class="card card--dark">
        <div class="card__body text-sm">
            <dl class="flex flex-wrap">
                <slot></slot>
            </dl>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-definition-list',
    }
</script>