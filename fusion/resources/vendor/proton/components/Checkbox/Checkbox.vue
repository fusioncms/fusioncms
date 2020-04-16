<template>
    <div class="field">
        <label class="field__label field__label--wrapped">
            <input
                class="field__checkbox"
                type="checkbox"
                :name="name"
                :id="id"
                :disabled="disabled"
                :required="required"
                :indeterminate.prop="indeterminate"
                :value="nativeValue"
                :true-value="trueValue"
                :false-value="falseValue"
                @click.stop
                v-model="computedValue"
            >

            <span class="checkbox__label">
                <slot></slot>
            </span>
        </label>
    </div>
</template>

<script>
    export default {
        name: 'p-checkbox',

        data() {
            return {
                newValue: this.value,
            }
        },

        props: {
            name: {
                required: true,
                type: String,
            },

            id: {
                required: false
            },

            value: {
                required: false,
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
            },

            nativeValue: {
                required: false,
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
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
                type: [String, Number, Boolean, Function, Object, Array],
                default: true
            },

            falseValue: {
                type: [String, Number, Boolean, Function, Object, Array],
                default: false
            },
        },

        computed: {
            computedValue: {
                get() {
                    return this.newValue
                },

                set(value) {
                    this.newValue = value
                    this.$emit('input', value)
                }
            },
        },

        watch: {
            value(value) {
                this.newValue = value
            }
        }
    }
</script>
