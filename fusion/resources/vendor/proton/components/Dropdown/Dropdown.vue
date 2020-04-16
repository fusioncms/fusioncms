<template>
    <renderless-dropdown>
        <div
            class="dropdown"
            slot-scope="props"
            :class="{'dropdown--open': props.isOpen, 'dropdown--right': right, 'dropdown--up': up}"
            v-click-outside="props.close"
        >
            <button :id="id" class="button z-0" @click="props.toggle" :class="{'button--icon': icon}" aria-haspopup="true" :aria-expanded="props.isOpen">
                <slot></slot>
                <fa-icon v-if="! noArrow" icon="angle-down" class="dropdown__arrow"></fa-icon>
            </button>

            <div class="dropdown__menu" :aria-labelledby="id">
                <slot name="menu"></slot>
            </div>
        </div>
    </renderless-dropdown>
</template>

<script>
    export default {
        name: 'p-dropdown',

        props: {
            id: {
                type: String,
                required: true
            },

            noArrow: {
                type: Boolean,
                default: false,
                required: false,
            },

            icon: {
                type: Boolean,
                default: false,
                required: false,
            },

            right: {
                type: Boolean,
                default: false,
                required: false,
            },

            up: {
                type: Boolean,
                default: false,
                required: false,
            },
        }
    }
</script>