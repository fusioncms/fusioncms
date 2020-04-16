<template>
    <div class="field">
        <label
            class="field__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <div class="field__control">
            <textarea
                class="field__textarea"
                :class="{'font-mono': monospaced, 'field__textarea--danger': hasError}"
                :id="id"
                :name="name"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="disabled"
                :value="value"
                :rows="rows"
                @input="$emit('input', $event.target.value)"
            ></textarea>
        </div>

        <p class="field__help" v-if="help" v-html="help"></p>
        <p class="field__help field__help--danger" v-if="errorMessage" v-html="errorMessage"></p>
    </div>
</template>

<script>
    export default {
        name: 'p-textarea',

        props: {
            name: String,
            id: String,
            placeholder: String,
            label: String,
            help: String,
            value: {
                type: [String, Number],
                default: '',
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
            rows: {
                required: false,
                type: Number,
                default: 1,
            },
        }
    }
</script>
