<template>
    <div class="field -mx-6">
        <div class="field__control">
            <input
                class="field__title"
                type="text"
                :class="{'font-mono': monospaced, 'field__title--danger': hasError}"
                :id="id"
                :name="name"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="disabled"
                :value="value"
                :autocomplete="autocomplete"
                :autofocus="autofocus"
                @input="$emit('input', $event.target.value)"
            >
        </div>

        <div class="mx-6">
            <p class="field__help" v-if="help" v-html="help"></p>
            <p class="field__help field__help--danger" v-if="errorMessage" v-html="errorMessage"></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-title',

        props: {
            name: String,
            id: String,
            placeholder: {
                type: String,
                default: 'Untitled',
            },
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
