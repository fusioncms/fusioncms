<template>
    <renderless-dropdown>
        <div class="dropdown" :class="{'dropdown--active': props.isOpen, 'dropdown--right': right}" v-click-outside="props.close" slot-scope="props">
            <button v-if="! noBorder" class="button" :class="{'button--icon': icon}" @click="props.toggle()" ref="trigger">
                <slot></slot>
                <fa-icon v-if="! noArrow" icon="angle-down" class="dropdown__arrow"></fa-icon>
            </button>

            <a v-else href="#" @click.prevent="props.toggle()" class="p-1">
                <slot></slot>
            </a>

            <div class="dropdown__menu" v-show="props.isOpen" ref="menu">
                <slot name="menu"></slot>
            </div>
        </div>
    </renderless-dropdown>
</template>

<script>
    export default {
        name: 'p-dropdown',

        props: {
            noArrow: {
                type: Boolean,
                default: false,
                required: false,
            },

            noBorder: {
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
        }
    }
</script>
