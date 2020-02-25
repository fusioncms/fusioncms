<template>
    <div>
        <a v-if="href" class="dropdown__item" :href="href" @click="onClick($event)">
            <slot></slot>
        </a>

        <router-link v-else-if="to" class="dropdown__item" :to="to" @click="onClick($event)">
            <slot></slot>
        </router-link>

        <span v-else class="dropdown__item" @click="onClick($event)">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: 'p-dropdown-item',

        props: {
            href: {
                required: false,
                type: String,
            },

            to: {
                required: false,
                type: [String, Object],
            },
        },

        methods: {
            onClick(event) {
                this.$emit('click', event)
            }
        }
    }
</script>
