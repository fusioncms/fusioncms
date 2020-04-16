<template>
    <div>
        <portal to="title">
            <app-title icon="paper-plane">Forms</app-title>
        </portal>

        <portal to="actions">
            <div class="buttons">
                <router-link :to="{ name: 'inbox' }" class="button">View Inbox</router-link>
                <router-link :to="{ name: 'forms.create' }" class="button">Create Form</router-link>
            </div>
        </portal>

        <div class="row">
            <div class="content-container">
                <p-table :endpoint="endpoint" id="forms" sort-by="name" primary-key="handle" key="forms_table">
                    <template slot="name" slot-scope="table">
                        <p-status :value="table.record.status" class="mr-2"></p-status>

                        <router-link :to="{ name: 'forms.edit', params: {form: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-actions :id="'form_' + table.record.id + '_actions'" :key="'form_' + table.record.id + '_actions'">
                            <p-dropdown-link :to="{ name: 'forms.edit', params: {form: table.record.id} }">Edit</p-dropdown-link>

                            <p-dropdown-link
                                @click.prevent
                                v-modal:delete-form="table.record"
                                classes="link--danger"
                            >
                                Delete
                            </p-dropdown-link>
                        </p-actions>
                    </template>
                </p-table>
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
        head: {
            title() {
                return {
                    inner: 'Forms'
                }
            }
        },

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