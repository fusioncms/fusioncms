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
                    v-model="value.handle">
                </p-slug>
                <div v-if="errors.duplicate_handle">
                    The handle field must be unique
                </div>
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

        watch: {
            value: {
                deep: true,
                handler() {

                    console.log(this.value.handle)
                    if(this.field_handles.includes(this.value.handle)) {
                        this.errors.duplicate_handle = true
                    } else {
                        this.errors.duplicate_handle = false
                    }

                    if(this.value.handle == '' || !this.value.handle) {
                        this.errors.empty_handle = true
                    } else {
                        this.errors.empty_handle = false
                    }
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