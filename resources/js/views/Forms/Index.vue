<template>
    <div>
        <portal to="title">
            <app-title icon="paper-plane">Forms</app-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'forms.create' }" class="button">Create Form</router-link>
        </portal>

        <div class="row">
            <div class="content-container">
                <p-datatable :endpoint="endpoint" name="forms" sort-by="name" :per-page="10" primary-key="handle">
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'forms.edit', params: {form: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-dropdown right>
                            <fa-icon icon="bars"></fa-icon>
                            
                            <template slot="options">
                                <p-dropdown-item @click.prevent :to="{ name: 'forms.edit', params: {form: table.record.id} }">Edit</p-dropdown-item>

                                <p-dropdown-item
                                    @click.prevent
                                    v-modal:delete-form="table.record"
                                >
                                    Delete
                                </p-dropdown-item>
                            </template>
                        </p-dropdown>
                    </template>
                </p-datatable>
            </div>
        </div>

        <portal to="modals">
            <p-modal name="delete-form" title="Delete Form" key="delete_form">
                <p>Are you sure you want to permenantly delete this form?</p>

                <template slot="footer" slot-scope="form">
                    <p-button v-modal:delete-form @click="destroy(form.data.id)" theme="danger" class="ml-3">Delete</p-button>
                    <p-button v-modal:delete-form>Cancel</p-button>
                </template>
            </p-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                endpoint: '/datatable/forms',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/forms/' + id).then((response) => {
                    toast('Form successfully deleted.', 'success')
                    
                    proton().$emit('refresh-datatable-forms')
                })
            }
        }
    }
</script>