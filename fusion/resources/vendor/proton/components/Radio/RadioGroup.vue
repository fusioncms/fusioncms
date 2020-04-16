<template>
    <fieldset class="form__radio-group">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <div class="form__radio-group--block" :class="{'form__radio-group--inline': inline}">
            <slot></slot>
        </div>

        <div class="form__control--meta">
            <div class="form__help">
                <span v-if="help" v-html="help"></span>
                <span v-if="errorMessage" class="form__error--message" v-html="errorMessage"></span>
            </div>
        </div>
    </fieldset>
</template>

<script>
    export default {
        name: 'p-radio-group',

        props: {
            name: String,
            label: String,
            help: String,
            value: {
                required: false,
                type: String,
                default: undefined,
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
            inline: {
                required: false,
                type: Boolean,
                default: false,
            },
        }
    }
</script>
