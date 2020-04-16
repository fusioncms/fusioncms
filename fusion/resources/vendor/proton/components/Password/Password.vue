<template>
    <div class="form__group">
        <label
            class="form__label"
            :for="name"
            v-if="label"
            v-html="label">
        </label>

        <input
            class="form__control"
            :class="{'font-mono': monospaced}"
            :id="name"
            :name="name"
            :type="type"
            :placeholder="placeholder"
            :readonly="readonly"
            :disabled="disabled"
            :autocomplete="autocomplete"
            :autofocus="autofocus"
        >

        <div class="form__control--meta" v-if="help || ! neverShow">
            <div class="form__help">
                <span v-if="help" v-html="help"></span>
            </div>

            <div class="form__password">
                <a href="#" @click.prevent="toggleVisibility" v-if="! neverShow">
                    {{ revealed ? hideText : showText }}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'p-password',

        data() {
            return {
                revealed: false,
                type: 'password',
            }
        },

        props: {
            name: String,
            placeholder: String,
            label: String,
            help: String,
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
            neverShow: {
                required: false,
                type: Boolean,
                default: false,
            },
            showText: {
                required: false,
                type: String,
                default: 'Show Password',
            },
            hideText: {
                required: false,
                type: String,
                default: 'Hide Password',
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

        methods: {
            toggleVisibility() {
                this.type = this.type === 'password' ? 'text' : 'password'
                this.revealed = ! this.revealed
            }
        }
    }
</script>
