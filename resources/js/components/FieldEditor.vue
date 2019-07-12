<template>
    <div>
        <div class="row">
            <div class="col w-1/2">
                <p-input 
                    name="value-name" 
                    label="Name"
                    required
                    v-model="value.name">
                </p-input>
            </div>

            <div class="col w-1/2">
                <p-slug
                    name="handle"
                    label="Handle"
                    autocomplete="off"
                    required
                    delimiter="_"
                    :watch="value.name"
                    v-model="value.handle"
                    :errorMessage="handle_error">
                </p-slug>
            </div>
        </div>

        <div class="row">
            <div class="col w-full">
                <redactor name="field-help" label="Help Instructions" v-model="value.help"></redactor>
            </div>
        </div>

        <hr>

        <component v-if="value.type" :is="value.type.handle + '-fieldtype-options'" v-model="value.options"></component>
    </div>
</template>

<script>
    export default {
        name: 'field-editor',

        props: ['value', 'field_handles'],

        data() {
            return {
                errors: {
                    'duplicate_handle': false,
                    'empty_handle': false
                }
            }
        },

        computed: {
            handle_error() {
                 if (this.errors.duplicate_handle) {
                    return 'The handle field must be unique'
                 } else if (this.errors.empty_handle) {
                    return 'The handle field cannot be empty'
                 }

                 return ''
            }
        },

        watch: {
            value: {
                deep: true,
                handler() {

                    this.errors.duplicate_handle = this.field_handles.includes(this.value.handle)

                    this.errors.empty_handle = (this.value.handle == '' || !this.value.handle)
                }
            },
            errors: {
                deep: true,
                handler(val) {
                    this.value.has_errors = _.includes(this.errors, true)
                }
            }
        }
    }
</script>