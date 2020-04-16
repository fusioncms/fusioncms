<template>
    <div>
        <portal to="title">
            <app-title icon="list">Fieldsets</app-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'fieldsets.create' }" class="button">Create Fieldset</router-link>
        </portal>

        <div class="row">
            <div class="content-container">
                <p-table :endpoint="endpoint" id="fieldsets" sort-by="name" primary-key="handle" key="fieldsets_table">
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'fieldsets.edit', params: {fieldset: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-actions :id="'fieldset_' + table.record.id + '_actions'" :key="'fieldset_' + table.record.id + '_actions'">
                            <p-dropdown-link :to="{ name: 'fieldsets.edit', params: {fieldset: table.record.id} }">Edit</p-dropdown-link>

                            <p-dropdown-link
                                @click.prevent
                                v-modal:delete-fieldset="table.record"
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
            <p-modal name="delete-fieldset" title="Delete Fieldset" key="delete_fieldset">
                <p>Are you sure you want to permenantly delete this fieldset?</p>

                <template slot="footer" slot-scope="fieldset">
                    <p-button v-modal:delete-fieldset @click="destroy(fieldset.data.id)" theme="danger" class="ml-3">Delete</p-button>
                    <p-button v-modal:delete-fieldset>Cancel</p-button>
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
                    inner: 'Fieldsets'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/fieldsets',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/fieldsets/' + id).then((response) => {

                    toast('Fieldset successfully deleted.', 'success')

                    proton().$emit('refresh-datatable-fieldsets')
                })
            }
        }
    }
</script>
