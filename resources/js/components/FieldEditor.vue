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
                    :errorMessage="handleError">
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

        props: ['value', 'fieldHandles'],

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