<template>
    <div>
        <portal to="title">
            <app-title icon="seedling">Extensions</app-title>
        </portal>

        <div class="row">
            <div class="content-container">
                <p-table :endpoint="endpoint" id="extensions" sort-by="name" primary-key="handle" key="extensions_table">
                    <template slot="name" slot-scope="table">
                        <div class="flex items-center">
                            <p-status :value="table.record.status" class="mr-2"></p-status>

                            <router-link :to="{ name: 'extensions.edit', params: {extension: table.record.id} }">{{ table.record.name }}</router-link>
                        </div>
                    </template>

                    <template slot="handle" slot-scope="table">
                        {{ table.record.handle }}
                    </template>

                    <template slot="type" slot-scope="table">
                        <span class="badge">{{ table.record.type }}</span>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-actions :id="'extension_' + table.record.id + '_actions'" :key="'extension_' + table.record.id + '_actions'">
                            <p-dropdown-link :to="{ name: 'extensions.edit', params: {extension: table.record.id} }">Edit</p-dropdown-link>

                            <p-dropdown-link
                                @click.prevent
                                v-modal:delete-extension="table.record"
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
            <p-modal name="delete-extension" title="Delete Extension" key="delete_extension">
                <p>Are you sure you want to permenantly delete this extension?</p>

                <template slot="footer" slot-scope="extension">
                    <p-button v-modal:delete-extension @click="destroy(extension.data.id)" theme="danger" class="ml-3">Delete</p-button>
                    <p-button v-modal:delete-extension>Cancel</p-button>
                </template>
            </p-modal>
        </portal>
    </div>
</template>

<script>
    import store from '../../vuex'

    export default {
        head: {
            title() {
                return {
                    inner: 'Extension'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/extensions',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/extensions/' + id).then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')

                    toast('Extension successfully deleted.', 'success')

                    proton().$emit('refresh-datatable-extensions')
                })
            }
        }
    }
</script>
