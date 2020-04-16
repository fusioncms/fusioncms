<script>
    export default {
        name: 'renderless-checkbox',

        data() {
            return {
                newValue: this.value,
            }
        },

        props: {
            value: {
                required: false,
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
            },

            trueValue: {
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
                default: true
            },

            falseValue: {
                type: [String, Number, Boolean, Function, Object, Array, Symbol],
                default: false
            },
        },

        computed: {
            computedValue: {
                get() {
                    return this.newValue
                },

                set(value) {
                    this.newValue = value
                    this.$emit('input', value)
                }
            },
        },

        watch: {
            value(value) {
                this.newValue = value
            }
        },

        render() {
            return this.$scopedSlots.default({
                checked: this.checked,
                onChange: this.onChange,
                nativeValue: this.nativeValue,
            })
        }
    }
</script>