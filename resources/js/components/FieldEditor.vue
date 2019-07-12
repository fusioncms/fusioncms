<template>
    <div v-if="loaded">
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
                <div v-if="handle_error">
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
                handle_error: false
            }
        },


        computed: {
            loaded() {
                if(this.value.name) {
                    return true
                }
                return false
            }
        },

        watch: {
            value: {
                deep: true,
                handler() {
                    if(this.field_handles.includes(this.value.handle)) {
                        this.handle_error = true
                        this.value.error = true
                    } else {
                        this.handle_error = false
                        this.value.error = false
                    }
                }
            }
        }
    }
</script>