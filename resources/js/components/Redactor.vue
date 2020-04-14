<template>
    <div class="field">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <div class="field__control">
            <Redactor
                :id="'redactor-' + name"
                :placeholder="placeholder"
                :config="config"
                :rows="rows"
                :value="value"
                @input="$emit('input', $event)">
            </Redactor>
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
    import '../../vendor/redactor/redactor'
    import '../../vendor/redactor/vue-redactor'

    export default {
        name: 'redactor',

        props: {
            name: {
                type: String,
                required: true
            },

            label: {
                type: String,
                required: true
            },

            placeholder: {
                type: String,
                required: false
            },

            help: {
                type: String,
                required: false
            },

            config: {
                type: Object,
                default() {
                    return {
                        toolbarFixed: false,
                        maxHeight: '500px',
                    }
                },
            },

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
                default: 3,
            },
        },
        
        mounted() {
            if (this.readonly || this.disabled) {
                $R(`#redactor-${this.name}`, 'enableReadOnly');
            }
        }
    }
</script>