<template>
    <div>
        <portal to="title">
            <app-title icon="sitemap">Taxonomy</app-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'taxonomies.create' }" class="button">Create Taxonomy</router-link>
        </portal>

        <div class="row">
            <div class="content-container">
                <p-table :endpoint="endpoint" id="taxonomies" sort-by="name" primary-key="handle" key="taxonomies_table">
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'taxonomies.edit', params: {taxonomy: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>

                    <template slot="status" slot-scope="table">
                        <span class="badge badge--success" v-if="table.record.status === true">Enabled</span>
                        <span class="badge badge--danger" v-else>Disabled</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-actions :id="'taxonomy_' + table.record.id + '_actions'" :key="'taxonomy_' + table.record.id + '_actions'">
                            <p-dropdown-link @click.prevent :to="{ name: 'taxonomies.edit', params: {taxonomy: table.record.id} }">Edit</p-dropdown-link>

                            <p-dropdown-link
                                @click.prevent
                                v-modal:delete-taxonomy="table.record"
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
            <p-modal name="delete-taxonomy" title="Delete Taxonomy" key="delete_taxonomy">
                <p>Are you sure you want to permenantly delete this taxonomy?</p>

                <template slot="footer" slot-scope="taxonomy">
                    <p-button v-modal:delete-taxonomy @click="destroy(taxonomy.data.id)" theme="danger" class="ml-3">Delete</p-button>
                    <p-button v-modal:delete-taxonomy>Cancel</p-button>
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
                    inner: 'Taxonomy'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/taxonomies',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/taxonomies/' + id).then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')

                    toast('Taxonomy successfully deleted.', 'success')

                    proton().$emit('refresh-datatable-taxonomies')
                })
            }
        }
    }
</script>
