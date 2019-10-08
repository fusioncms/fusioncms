<template>
    <div>
        <portal to="title">
            <app-title :icon="taxonomy.icon || 'pencil'">{{ taxonomy.name }}</app-title>
        </portal>

        <portal to="actions">
            <router-link v-if="taxonomy.slug" :to="{ name: 'taxonomies.create', params: {taxonomy: taxonomy.slug} }" class="button">Create {{ singular }}</router-link>
        </portal>

        <div class="row" v-if="endpoint">
            <div class="content-container">
                <p-datatable name="entries" :endpoint="endpoint" sort-by="name" :per-page="10">
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'taxonomies.edit', params: {taxonomy: taxonomy.slug, id: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>
                    <template slot="slug" slot-scope="table">
                        <code>{{ table.record.slug }}</code>
                    </template>

                    <template slot="status" slot-scope="table">
                        <span class="badge badge--success" v-if="table.record.status === 1">Enabled</span>
                        <span class="badge badge--danger" v-else>Disabled</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-dropdown right>
                            <fa-icon icon="bars"></fa-icon>
                            
                            <template slot="options">
                                <p-dropdown-item @click.prevent :to="{ name: 'taxonomies.edit', params: {taxonomy: taxonomy.slug, id: table.record.id} }">Edit</p-dropdown-item>

                                <p-dropdown-item
                                    @click.prevent
                                    v-modal:delete-entry="table.record"
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
            <p-modal name="delete-entry" title="Delete Entry">
                <p>Are you sure you want to permenantly delete this entry?</p>

                <template slot="footer" slot-scope="entry">
                    <p-button v-modal:delete-entry @click="destroy(entry.data.id)" theme="danger" class="ml-3">Delete</p-button>
                    <p-button v-modal:delete-entry>Cancel</p-button>
                </template>
            </p-modal>
        </portal>
    </div>
</template>

<script>
    import pluralize from 'pluralize'

    export default {
        data() {
            return {
                taxonomy: {},
            }
        },

        computed: {
            endpoint() {
                if (this.taxonomy.id) {
                    return '/datatable/taxonomies/' + this.taxonomy.id
                }

                return null
            },

            singular() {
                if (this.taxonomy.name) {
                    return pluralize.singular(this.taxonomy.name)
                }

                return ''
            },
        },

        methods: {
            destroy(id) {
                axios.delete('/api/taxonomies/' + this.taxonomy.slug + '/' + id).then((response) => {
                    toast('Entry successfully deleted.', 'success')
                    
                    proton().$emit('refresh-datatable-entries')
                })
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/taxonomies/slug/' + to.params.taxonomy).then((response) => {
                next(function(vm) {
                    vm.taxonomy = response.data.data
                })
            })
        },

        beforeRouteUpdate(to, from, next) {
            axios.get('/api/taxonomies/slug/' + to.params.taxonomy).then((response) => {
                this.taxonomy = response.data.data
            })
            
            next()
        }
    }
</script>