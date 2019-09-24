<template>
    <div class="form__group">
        <label :for="field.handle">{{field.name}}</label>
        <input
            :name="field.handle"
            :label="field.name"
            :placeholder="field.settings.placeholder"
            :step="steps"
            v-model="inputValue"
            @blur="emitValue($event.target.value)"
            type="number"
            class="form__control"
        ></input>
        <div class="form__control--meta">
            <div class="form__help" v-html="field.help">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'number-fieldtype',

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: '',
            },
        },

        data() {
            return {
                inputValue: null
            }
        },

        computed: {
            steps() {
                let places = this.field.settings.decimals

                if (places > 0) {
                    return this.pad(this.field.settings.decimals)
                }
                return 1
            },
        },

        methods: {
            pad(length) {
                let str = '1'
                while(str.length < length) {
                    str = '0' + str
                }
                return '0.' + str.substr(-length, length)
            },

            emitValue(newValue) {
                if(!newValue) {
                    this.inputValue = this.value
                    return
                }
                newValue = this.formatNumber(newValue, this.field.settings.decimals)
                this.inputValue = newValue
                this.$emit('input', newValue)
            },

            formatNumber(num, decimals) {
                let regex = new RegExp('^-?\\d+(?:\.\\d{0,' + (decimals || -1) + '})?')
                return Number(num.toString().match(regex)[0]).toFixed(decimals)
            }
        },

        mounted() {
            this.inputValue = this.value
        }
    }
</script>

