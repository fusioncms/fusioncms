<template>
    <div class="form__group">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>
        <div class="form__number">
            <button class="form__number-decrease" @click.prevent="decrease">
                <slot name="decrease">
                    -
                </slot>
            </button>
            <input
                class="form__control"
                :class="{'font-mono': monospaced, 'form__error': hasError}"
                :id="name"
                :name="name"
                type="number"
                :steps="steps"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="disabled"
                v-model="inputValue"
                @blur="emitValue($event.target.value)"
                :autocomplete="autocomplete"
                :autofocus="autofocus"
                :min="min"
                :max="max"
            >
            <button class="form__number-increase" @click.prevent="increase">
                <slot name="increase">
                    +
                </slot>
            </button>
        </div>
            

        <div class="form__control--meta" v-if="help || errorMessage">
            <div class="form__help">
                <span v-if="help" v-html="help"></span>
                <span v-if="errorMessage" class="form__error--message" v-html="errorMessage"></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-number',

        props: {
            name: String,
            placeholder: String,
            label: String,
            help: String,
            value: {
                type: [String, Number],
                default: null,
            },
            required: {
                type: Boolean,
                default: false,
            },
            readonly: {
                type: Boolean,
                default: false,
            },
            disabled: {
                type: Boolean,
                default: false,
            },
            monospaced: {
                type: Boolean,
                default: false,
            },
            hasError: {
                required: false,
                type: Boolean,
                default: false,
            },
            errorMessage: {
                required: false,
                type: String,
                default: '',
            },
            autocomplete: {
                required: false,
                type: String,
                default: '',
            },
            autofocus: {
                required: false,
                type: Boolean,
                default: false,
            },
            steps: {
                required: false,
                type: [Number, String],
                default: 1
            },
            decimals: {
                required: false,
                type: [String, Number],
                default: 0
            },
            min: {
                required: false,
                type: [String, Number],
                default: ''
            },
            max: {
                required: false,
                type: [String, Number],
                default: ''
            }
        },

        data() {
            return {
                inputValue: null
            }
        },

        methods: {
            emitValue(newValue) {
                if(newValue) {
                    if(this.min && newValue < this.min) {
                        newValue = this.min
                    }
                    if(this.max && newValue > this.max) {
                        newValue = this.max
                    }
                    newValue = this.formatNumber(newValue, this.decimals)
                } 
                this.inputValue = newValue
                this.$emit('input', newValue)
            },

            formatNumber(num, decimals) {
                let regex = new RegExp('^-?\\d+(?:\.\\d{0,' + (decimals || -1) + '})?')
                return Number(num.toString().match(regex)[0]).toFixed(decimals)
            },

            increase() {
                this.emitValue((Number(this.inputValue) + Number(this.steps)).toFixed(this.decimals))
            },

            decrease() {
                this.emitValue((Number(this.inputValue) - Number(this.steps)).toFixed(this.decimals))
            }
        },

        mounted() {
            this.inputValue = this.value
        }
    }
</script>
