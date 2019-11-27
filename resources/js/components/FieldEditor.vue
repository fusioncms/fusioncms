<template>
    <div>
        <div class="row mb-6">
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
                    :errorMessage="handleError">
                </p-slug>
            </div>
        </div>

        <div class="row mb-6">
            <div class="col w-full">
                <redactor name="field-help" label="Help Instructions" v-model="value.help"></redactor>
            </div>
        </div>

        <div class="row">
            <div class="col w-full">
                <p-input name="validation" label="Validation Rules" v-model="value.validation" monospaced></p-input>
            </div>
        </div>

        <hr>

        <component v-if="value.type" :is="value.type.id + '-fieldtype-settings'" v-model="value.settings"></component>
    </div>
</template>

<script>
    export default {
        name: 'field-editor',

        props: {
            value: Object,
            fieldHandles: {
                type: Array,
                default: function() { return [] }
            }
        },

        data() {
            return {
                errors: {
                    'duplicateHandleError': false,
                    'emptyHandleError': false
                }
            }
        },

        computed: {
            handleError() {
                if (this.errors.duplicateHandleError) {
                    return 'The handle field must be unique'
                } else if (this.errors.emptyHandleError) {
                    return 'The handle field cannot be empty'
                }
                return ''
            }
        },

        watch: {
            value: {
                deep: true,
                handler() {
                    this.errors.duplicateHandleError = this.fieldHandles.includes(this.value.handle)
                    this.errors.emptyHandleError = (this.value.handle == '' || !this.value.handle)

                    if(Array.isArray(this.value.settings)) {
                        this.value.settings = {}
                    }
                }
            },

            errors: {
                deep: true,
                handler(val) {
                    this.value.has_errors = _.includes(this.errors, true)
                }
            }
        },
    }
</script>