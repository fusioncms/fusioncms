<template>
    <div>
        <portal to="title">
            <app-title icon="hashtag">Matrix</app-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'matrices.create' }" class="button">Create Matrix</router-link>
        </portal>

        <div class="row">
            <div class="content-container">
                <p-table :endpoint="endpoint" id="matrices" sort-by="name" primary-key="handle" key="matrices_table">
                    <template slot="name" slot-scope="table">
                        <div class="flex items-center">
                            <p-status :value="table.record.status" class="mr-2"></p-status>

                            <router-link :to="{ name: 'matrices.edit', params: {matrix: table.record.id} }">{{ table.record.name }}</router-link>
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
                        <p-actions :id="'matrix_' + table.record.id + '_actions'" :key="'matrix_' + table.record.id + '_actions'">
                            <p-dropdown-link :to="{ name: 'matrices.edit', params: {matrix: table.record.id} }">Edit</p-dropdown-link>

                            <p-dropdown-link
                                @click.prevent
                                v-modal:delete-matrix="table.record"
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
            <p-modal name="delete-matrix" title="Delete Matrix" key="delete_matrix">
                <p>Are you sure you want to permenantly delete this matrix?</p>

                <template slot="footer" slot-scope="matrix">
                    <p-button v-modal:delete-matrix @click="destroy(matrix.data.id)" theme="danger" class="ml-3">Delete</p-button>
                    <p-button v-modal:delete-matrix>Cancel</p-button>
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
                    inner: 'Matrix'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/matrices',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/matrices/' + id).then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')

                    toast('Matrix successfully deleted.', 'success')

                    proton().$emit('refresh-datatable-matrices')
                })
            }
        }
    }
</script>
