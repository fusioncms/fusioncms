<script>
    export default {
        name: 'p-renderless-radio',

        model: {
            prop: 'modelValue',
            event: 'input',
        },

        props: {
            name: {
                required: true,
                type: String,
            },

            id: {
                required: true,
                type: String,
            },

            value: {
                required: false,
                type: String,
                default: '',
            },

            modelValue: {
                default: undefined,
            },

            checked: {
                required: false,
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
        },

        computed: {
            state() {
                if (this.modelValue === undefined) {
                    return this.checked
                }

                return this.modelValue === this.value
            }
        },

        methods: {
            onChange() {
                this.toggle()
            },

            toggle() {
                this.$emit('input', this.value)
            },
        },

        watch: {
            checked(value) {
                if (value !== this.state) {
                    this.toggle()
                }
            },
        },

        mounted() {
            if (this.checked && ! this.state) {
                this.toggle()
            }
        },

        render() {
            return this.$scopedSlots.default({
                name: this.name,
                id: this.id,
                value: this.value,
                model: this.modelValue,
                checked: this.checked,
                readonly: this.readonly,
                disabled: this.disabled,

                onChange: this.onChange,
                toggle: this.toggle,

                events: (e) => {
                    onChange: (e) => {
                        this.onChange()
                    }
                },

                bindings: {
                    value: this.modelValue
                }
            })
        }
    }
</script>
