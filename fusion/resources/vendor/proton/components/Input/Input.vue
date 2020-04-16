<template>
    <div class="field">
        <label
            class="field__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <div class="field__control">
            <input
                class="field__input"
                :class="{'font-mono': monospaced, 'text-xs': monospaced, 'field__input--danger': hasError}"
                :id="id"
                :name="name"
                :type="type"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="disabled"
                :value="value"
                @input="$emit('input', $event.target.value)"
                :autocomplete="autocomplete"
                :autofocus="autofocus"
            >
        </div>

        <p class="field__help" v-if="help" v-html="help"></p>
        <p class="field__help field__help--danger" v-if="errorMessage" v-html="errorMessage"></p>
    </div>
</template>

<script>
    export default {
        name: 'p-input',

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
            type: {
                type: String,
                default: 'text',
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
        },
    }
</script>
