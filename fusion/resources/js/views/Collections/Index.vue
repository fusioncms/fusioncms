<template>
    <div>
        <portal to="title">
            <app-title :icon="collection.icon || 'pencil-alt'">{{ collection.name }}</app-title>
        </portal>

        <portal to="actions">
            <router-link v-if="collection.slug" :to="{ name: 'entries.create', params: {collection: collection.slug} }" class="button">Create {{ collection.reference_singular }}</router-link>
        </portal>

        <div class="row" v-if="endpoint">
            <div class="content-container">
                <p-table id="entries" :endpoint="endpoint" sort-by="name" :per-page="10" :key="collection.handle + '_table'">
                    <template slot="name" slot-scope="table">
                        <p-status :value="table.record.status" class="mr-2"></p-status>

                        <router-link :to="{ name: 'entries.edit', params: {collection: collection.slug, id: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="slug" slot-scope="table">
                        <code>{{ table.record.slug }}</code>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-actions :id="'entry_' + table.record.id + '_actions'" :key="'entry_' + table.record.id + '_actions'">
                            <p-dropdown-link :to="{ name: 'entries.edit', params: {collection: collection.slug, id: table.record.id} }">Edit</p-dropdown-link>

                            <p-dropdown-link
                                @click.prevent
                                v-modal:delete-entry="table.record"
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
            <p-modal name="delete-entry" title="Delete Entry" key="delete_entry">
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
        head: {
            title() {
                return {
                    inner: this.collection.name
                }
            }
        },

        data() {
            return {
                collection: {},
            }
        },

        computed: {
            endpoint() {
                if (this.collection.id) {
                    return '/datatable/collections/' + this.collection.id
                }

                return null
            },

            singular() {
                if (this.collection.name) {
                    return pluralize.singular(this.collection.name)
                }

                return ''
            },
        },

        methods: {
            destroy(id) {
                axios.delete('/api/collections/' + this.collection.slug + '/' + id).then((response) => {
                    toast('Entry successfully deleted.', 'success')

                    proton().$emit('refresh-datatable-entries')
                })
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/matrices/slug/' + to.params.collection).then((response) => {
                next(function(vm) {
                    vm.collection = response.data.data

                    vm.$emit('updateHead')
                })
            }).catch(function(error) {
                next('/')
                toast('The requested collection could not be found', 'warning')
            })
        },

        beforeRouteUpdate(to, from, next) {
            axios.get('/api/matrices/slug/' + to.params.collection).then((response) => {
                this.collection = response.data.data

                this.$emit('updateHead')
            })

            next()
        }
    }
</script>