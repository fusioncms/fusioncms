<template>
    <p-modal name="edit-field" title="Edit Field" noCloseButton noEscClose noOutsideClose extra-large v-model="modalOpen">
        <div class="row mb-6">
            <div class="col w-1/2">
                <p-input
                    name="name"
                    label="Name"
                    help="What this field will be called."
                    autocomplete="off"
                    autofocus
                    required
                    :has-error="form.errors.has('name')"
                    :error-message="form.errors.get('name')"
                    v-model="form.name">
                </p-input>
            </div>

            <div class="col w-1/2">
                <p-slug
                    name="handle"
                    label="Handle"
                    help="A developer-friendly variant of the fieldset's name."
                    autocomplete="off"
                    required
                    delimiter="_"
                    :watch="form.name"
                    :has-error="form.errors.has('handle')"
                    :error-message="form.errors.get('handle')"
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

        <component v-if="form.type" :is="form.type.id + '-fieldtype-settings'" v-model="form"></component>

        <template slot="footer">
            <p-button class="ml-2" @click="cancel">Cancel</p-button>
            <p-button theme="primary" class="ml-2" @click.prevent="submit">Save</p-button>
        </template>
   </p-modal>
</template>

<script>
    import Form from '../forms/Form'

    export default {
        name: 'field-editor',

        data() {
            return {
                form: new Form({}),
                modalOpen: false,
            }
        },

        props: {
            value: {
                type: Object,
                required: true
            }
        },

        watch: {
            value(value) {
                this.form = new Form(_.cloneDeep(value))
            }
        },
        
        methods: {
            submit() {
                this.form.post('/api/fields/validate')
                    .then((response) => {
                        this.$emit('save', this.value.handle, this.form.data())
                    }).catch((error) => { })
            },

            cancel() {
                this.$emit('cancel', this.value.handle)
            }
        }
    }
</script>