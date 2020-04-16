<script>
    export default {
        name: 'p-renderless-tags',

        data() {
            return {
                newTag: '',
            }
        },

        props: ['value'],

        methods: {
            addTag() {
                if (this.newTag.trim().length === 0 || this.value.includes(this.newTag.trim())) {
                    return
                }

                this.$emit('input', [...this.value, this.newTag.trim()])
                this.newTag = ''
            },

            removeTag(tag) {
                this.$emit('input', this.value.filter(t => t !== tag))
            },

            onInput(e) {
                this.newTag = e.target.value
            },

            onKeyDown(e) {
                if (e.keyCode === 13) {
                    e.preventDefault()
                    this.addTag()
                }
            },
        },

        render() {
            return this.$scopedSlots.default({
                tags: this.value,
                available: this.available,
                addTag: this.addTag,
                removeTag: this.removeTag,
                onInput: this.onInput,
                onKeyDown: this.onKeyDown,
                
                inputAttrs: {
                    value: this.newTag,
                },

                inputEvents: {
                    input: (e) => {
                        this.newTag = e.target.value
                    },

                    keydown: (e) => {
                        if (e.keyCode === 13) {
                            e.preventDefault()
                            this.addTag()
                        }
                    }
                }
            })
        },
    }
</script>