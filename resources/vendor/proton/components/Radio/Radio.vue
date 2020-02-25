<template>
    <div class="form__radio-container">
        <label
            ref="label"
            :disabled="disabled"
            :tabindex="disabled ? false : 0"
            @keydown.prevent.enter.space="$refs.label.click()">
            <input
                class="form__radio"
                type="radio"
                :name="name"
                :disabled="disabled"
                :required="required"
                :indeterminate.prop="indeterminate"
                :value="nativeValue"
                v-model="checked"
                @change="onChange"
            >
            <span class="form__radio-label"><slot></slot></span>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'p-radio',

        data() {
            return {
                model: false,
            }
        },

        props: {
            name: {
                required: true,
                type: String,
            },

            value: {
                required: false,
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
            },

            nativeValue: {
                type: [String, Number, Boolean, Function, Object, Array, Symbol]
            },

            disabled: {
                type: Boolean,
                default: false,
            },

            required: {
                type: Boolean,
                default: false,
            },

            indeterminate: {
                type: Boolean,
                default: false,
            },

            trueValue: {
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
                default: true
            },

            falseValue: {
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
                default: false
            },
        },

        computed: {
            checked: {
                get() {
                    return this.value
                },

                set(value) {
                    this.model = value
                }
            }
        },

        methods: {
            onChange() {
                this.$emit('input', this.model)
            }
        }
    }
</script>
