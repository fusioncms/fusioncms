<template>
    <div class="flex">
        <router-link v-if="to" :to="to" class="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out" @click.native="onClick($event)">
            <slot></slot>
        </router-link>

        <a v-else :href="href" class="text-gray-500 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out" @click="onClick($event)">
            <slot></slot>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'p-breadcrumb',

        props: {
            href: {
                required: false,
                default: '#',
                type: String,
            },

            to: {
                required: false,
                default: '',
                type: Array|Object|String,
            },
        },

        methods: {
            onClick(event) {
                this.$emit('click', event)
            }
        },
    }
</script>