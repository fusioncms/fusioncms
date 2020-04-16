<template>
    <div class="px-2 mb-4">
        <div class="form__label">{{field.name}}</div>
        <div class="row px-2">
            <div class="w-full md:w-1/2">
                <p-input
                    :name="field.handle + '_text'"
                    placeholder="Text"
                    v-model="data.text"
                    @input="updateValue($event, 'text')"
                    class="mb-2"
                ></p-input>
                <p-input
                    :name="field.handle + '_link'"
                    placeholder="Link"
                    v-model="data.link"
                    @input="updateValue($event, 'link')"
                    class="mb-2"
                ></p-input>
                <p-select
                    :name="field.handle + '_target'"
                    autocomplete="off"
                    v-model="data.target"
                    @input="updateValue($event, 'target')"
                    :options="[
                        {
                            label: 'Open in Same Window',
                            value: '_self',
                        },
                        {
                            label: 'Open in New Window',
                            value: '_blank',
                        }
                    ]"
                ></p-select>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'link-fieldtype',

        data() {
            let data = {}
            let value = this.value
            if (this.value) {
                data = {
                    text: value.text || '',
                    link: value.link || '',
                    target: value.target || '_self'
                }
            } else {
                data = {
                    text: '',
                    link: '',
                    target: '_self',
                }
            }

            return {
                data: data
            }
        },

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: null,
            },
        },

        methods: {
            updateValue(event, handle) {
                this.data[handle] = event
                this.$emit('input', this.data)
            },
        }
    }
</script>

