<template>
    <div>
        <portal to="title">
            <app-title :icon="taxonomy.icon || 'pencil-alt'">{{ taxonomy.name }}</app-title>
        </portal>

        <portal to="actions">
            <router-link v-if="taxonomy.slug" :to="{ name: 'terms.create', params: {taxonomy: taxonomy.slug} }" class="button">Create {{ singular }}</router-link>
        </portal>

        <div class="row" v-if="endpoint">
            <div class="content-container">
                <p-table id="entries" :endpoint="endpoint" sort-by="name" :key="taxonomy.handle + '_table'">
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'terms.edit', params: {taxonomy: taxonomy.slug, id: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>
                    <template slot="slug" slot-scope="table">
                        <code>{{ table.record.slug }}</code>
                    </template>

                    <template slot="status" slot-scope="table">
                        <span class="badge badge--success" v-if="table.record.status === 1">Enabled</span>
                        <span class="badge badge--danger" v-else>Disabled</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-actions :id="'term_' + table.record.id + '_actions'" :key="'term_' + table.record.id + '_actions'">
                            <p-dropdown-link @click.prevent :to="{ name: 'terms.edit', params: {taxonomy: taxonomy.slug, id: table.record.id} }">Edit</p-dropdown-link>

                            <p-dropdown-link
                                @click.prevent
                                v-modal:delete-term="table.record"
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
            <p-modal name="delete-term" title="Delete Term">
                <p>Are you sure you want to permenantly delete this term?</p>

                <template slot="footer" slot-scope="term">
                    <p-button v-modal:delete-term @click="destroy(term.data.id)" theme="danger" class="ml-3">Delete</p-button>
                    <p-button v-modal:delete-term>Cancel</p-button>
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
                    inner: this.taxonomy.name || 'Loading...'
                }
            }
        },

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

                    vm.$emit('updateHead')
                })
            })
        },

        beforeRouteUpdate(to, from, next) {
            axios.get('/api/taxonomies/slug/' + to.params.taxonomy).then((response) => {
                this.taxonomy = response.data.data

                this.$emit('updateHead')
            })

            next()
        }
    }
</script>