<template>
    <div>
        <router-link v-if="to" :to="to" class="dropdown__link" :class="classes" @click.native="onClick($event)">
            <slot></slot>
        </router-link>

        <a v-else :href="href" :target="target" class="dropdown__link" :class="classes" @click="onClick($event)">
            <slot></slot>
        </a>
    </div>
</template>

<script>
    export default {
        name: 'p-dropdown-link',

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

            target: {
                required: false,
                default: '',
                type: String,
            },

            classes: {
                required: false,
            },
        },

        methods: {
            onClick(event) {
                this.$parent.toggle()

                this.$emit('click', event)
            }
        },
    }
</script>
