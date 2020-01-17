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
                <p-datatable :endpoint="endpoint" name="matrices" sort-by="name" :per-page="10" primary-key="handle">
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'matrices.edit', params: {matrix: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="type" slot-scope="table">
                        <span class="badge">{{ table.record.type }}</span>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>

                    <template slot="status" slot-scope="table">
                        <span class="badge badge--success" v-if="table.record.status === true">Enabled</span>
                        <span class="badge badge--danger" v-else>Disabled</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-dropdown right :key="'matrix_' + table.record.id">
                            <fa-icon :icon="['fas', 'bars']"></fa-icon>
                            
                            <template slot="options">
                                <p-dropdown-item @click.prevent :to="{ name: 'matrices.edit', params: {matrix: table.record.id} }">Edit</p-dropdown-item>

                                <p-dropdown-item
                                    @click.prevent
                                    v-modal:delete-matrix="table.record"
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
