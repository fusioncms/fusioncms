<template>
    <div>
        <portal to="title">
            <app-title :icon="collection.icon">{{ collection.name }}</app-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'users.create' }" class="button">Create {{ singular }}</router-link>
        </portal>

        <div class="row">
            <div class="content-container">
                <p-datatable name="permissions" :endpoint="endpoint" sort-by="slug" :per-page="10" no-actions>
                    <template slot="slug" slot-scope="table">
                        <code>{{ table.record.slug }}</code>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-grey-darker text-sm">{{ table.record.description }}</span>
                    </template>
                </p-datatable>
            </div>
        </div>
    </div>
</template>

<script>
    import pluralize from 'pluralize'

    export default {
        data() {
            return {
                collection: {},
                endpoint: '/datatable/permissions',
            }
        },

        computed: {
            singular() {
                return pluralize.singular(this.collection.name)
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/matrices/slug/' + to.params.collection).then((response) => {
                next(function(vm) {
                    vm.collection = response.data.data
                })
            })
        },
    }
</script>