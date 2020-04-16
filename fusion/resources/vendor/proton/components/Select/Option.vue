<template>
    <li class="form__select-option"
        :class="{'form__select-option--selected': selected}"
        @click="$emit('click', value)"
    >{{ label }}</li>
</template>

<script>
    export default {
        name: 'p-option',

        props: {
            value: {
                required: true,
            },

            label: {
                required: true,
                type: [String, Number],
            },

            disabled: {
                required: false,
                type: Boolean,
                default: false,
            },

            selected: {
                required: false,
                type: Boolean,
                default: false,
            },
        }
    }
</script>
