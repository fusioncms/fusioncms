<template>
    <div>
        <h2>{{ product.name }}</h2>
    </div>
</template>

<script>
    export default {
        name: 'product',

        props: ['value'],

        computed: {
            product() {
                return JSON.parse(this.value)
            }
        }
    }
</script>