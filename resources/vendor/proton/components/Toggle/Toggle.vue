<template>
    <div class="form__group">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>
        
        <span class="toggle__wrap" 
            :class="[isChecked ? 'toggle__wrap--checked' : 'toggle__wrap--unchecked']">
            <input
                type="checkbox"
                class="toggle"
                :id="name"
                :name="name"
                :value="value"
                :checked="isChecked"
                :readonly="readonly"
                :disabled="disabled"
                :required="required"
                @click="toggle"
            >
        </span>
            
        <p
            class="form__help"
            v-if="help"
            v-html="help"
        ></p>
    </div>
</template>

<script>
    export default {
        name: 'p-toggle',

        data() {
            return {
                isChecked: this.checked,
            }
        },

        props: {
            name: String,
            label: String,
            help: String,

            checked: {
                required: false,
                type: Boolean,
                default: false,
            },

            value: {
                required: false,
                type: String | Boolean,
                default: true,
            },
            
            required: {
                required: false,
                type: Boolean,
                default: false,
            },
            
            readonly: {
                required: false,
                type: Boolean,
                default: false,
            },
            
            disabled: {
                required: false,
                type: Boolean,
                default: false,
            },
        },

        methods: {
            toggle() {
                this.isChecked = ! this.isChecked

                this.$emit("input", this.isChecked)
            }
        }
    }
</script>
