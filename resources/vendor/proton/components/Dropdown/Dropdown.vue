<template>
    <renderless-dropdown :placement="right ? 'bottom-end' : 'bottom-start'">
        <div class="inline" slot-scope="props">
            <button class="button" :class="{'button--icon': icon}" @click="props.toggle()" data-reference>
                <slot></slot>
                <fa-icon v-if="! noArrow" icon="angle-down" class="dropdown__arrow"></fa-icon>
            </button>

            <div class="dropdown__menu" v-show="props.isOpen" data-popper>
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
