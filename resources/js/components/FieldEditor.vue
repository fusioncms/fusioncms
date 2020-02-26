<template>
    <p-modal name="edit-field" title="Edit Field" noCloseButton noEscClose noOutsideClose extra-large>
        <div class="row mb-6">
            <div class="col w-1/2">
                <p-input 
                    name="value-name" 
                    label="Name"
                    required
                    v-model="form.name">
                </p-input>
            </div>

            <div class="col w-1/2">
                <p-slug
                    name="handle"
                    label="Handle"
                    autocomplete="off"
                    required
                    delimiter="_"
                    :watch="form.name"
                    v-model="form.handle">
                </p-slug>
            </div>
        </div>

        <div class="row mb-6">
            <div class="col w-full">
                <redactor name="field-help" label="Help Instructions" v-model="form.help"></redactor>
            </div>
        </div>

        <div class="row">
            <div class="col w-full">
                <p-input name="validation" label="Validation Rules" v-model="form.validation" monospaced></p-input>
            </div>
        </div>

        <hr>

        <component v-if="form.type" :is="form.type.id + '-fieldtype-settings'" v-model="form.settings"></component>
   
        <template slot="footer">
            <p-button class="ml-2" @click="cancel" v-modal:edit-field>Cancel</p-button>
            <p-button theme="primary" class="ml-2" @click="submit">Save</p-button>
        </template>
   </p-modal>
</template>

<script>
    import Form from '../forms/Form'

    export default {
        name: 'field-editor',

        props: {
            value: {
                type: Object,
                required: true
            }
        },

        computed: {
            form() {
                return new Form(this.value)
            }
        },
        
        methods: {
            cancel() {
                this.$emit('input', {})
            },

            submit() {
                this.form.post('/api/fields/validate').then(response => {
                    console.log(response)
                }).catch((response) => {
                    console.log(response)
                })
            }
        }
    }
</script>