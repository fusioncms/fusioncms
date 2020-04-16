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
                :autocomplete="autocomplete"
                :autofocus="autofocus"
                v-model.lazy="model"
                ref="input"
                @blur="onBlur"
            >
        </div>

        <p class="field__help" v-if="help" v-html="help"></p>
        <p class="field__help field__help--danger" v-if="errorMessage" v-html="errorMessage"></p>
    </div>
</template>

<script>
    export default {
        name: 'p-slug',

        data() {
            return {
                shouldSlugify: false,
            }
        },

        computed: {
            model: {
                get() {
                    return this.value
                },

                set(value) {
                    this.$emit('input', this.slugify(value))
                }
            }
        },

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
            delimiter: {
                required: false,
                type: String,
                default: '-',
            },
            watch: {
                required: false,
                type: String,
                default: '',
            },
        },

        watch: {
            watch(value) {
                if (this.shouldSlugify) {
                    this.model = this.slugify(value)
                }

                this.updateState()
            },

            value(value) {
                this.model = value

                this.updateState()
            },
        },

        methods: {
            updateState() {
                let modelIsNull = this.model === null
                let modelEqualsWatch = this.model === this.slugify(this.watch)

                this.shouldSlugify = modelIsNull || modelEqualsWatch
            },

            slugify(text) {
                if (text) {
                    const a = 'àáäâèéëêìíïîòóöôùúüûñçßÿỳýœæŕśńṕẃǵǹḿǘẍźḧ'
                    const b = 'aaaaeeeeiiiioooouuuuncsyyyoarsnpwgnmuxzh'
                    const p = new RegExp(a.split('').join('|'), 'g')

                    return text.toString().toLowerCase().trim()
                    .replace(p, c =>                                                    // Replace special characters
                        b.charAt(a.indexOf(c)))
                    .replace(/&+/gi, 'and')                                              // Replace 1 or more & characters with the word 'and'
                    .replace(/\s+/g, this.delimiter)                                     // Convert spaces with delimiter
                    .replace(/[^\w\-]+/g, '')                                            // Remove all non-word chars
                    .replace(new RegExp(this.delimiter + '{2,}', 'g'), this.delimiter);  // Replace multiple delimiters with a single one
                }

                return null
            },

            onBlur() {
                if (this.model == null) {
                    this.model = this.slugify(this.watch)
                }
            }
        },

        mounted() {
            this.model = this.value

            this.updateState()
        }
    }
</script>
