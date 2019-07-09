<template>
    <div class="form__group">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <textarea
            ref="redactor"
            class="form__control"
            :class="{'font-mono': monospaced, 'form__error': hasError}"
            :id="name"
            :name="name"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :value="value"
            :rows="rows"
        ></textarea>

        <div class="form__control--meta" v-if="help || errorMessage">
            <div class="form__help">
                <span v-if="help" v-html="help"></span>
                <span v-if="errorMessage" class="form__error--message" v-html="errorMessage"></span>
            </div>
        </div>
    </div>
</template>

<script>
    require ('../../vendor/redactor/redactor.js')

    export default {
        name: 'redactor',

        data() {
            return {
                redactor: false,
            }
        },

        props: {
            name: String,
            placeholder: String,
            label: String,
            help: String,
            config: {
                type: Object,
                default: function() {
                    return {
                        toolbarFixed: false,
                        buttonsTextLabeled: true,
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
                default: 3,
            },
        },

        watch: {
            value(value) {
                if (! this.redactor.editor.isFocus()) {
                    this.redactor.source.setCode(value)
                }
            },
        },

        methods: {
            initialize() {
                let vm = this
                let callbacks = {
                    changed: function(html) {
                        vm.handleInput(html)

                        return html
                    }
                }

                Vue.set(this.config, 'callbacks', callbacks)

                let redactor = $R(this.$refs.redactor, this.config)

                this.redactor = redactor
                this.$parent.redactor = redactor
            },

            handleInput(value) {
                this.$emit('input', value)
            },
        },

        mounted() {
            this.initialize()
        },
    }
</script>