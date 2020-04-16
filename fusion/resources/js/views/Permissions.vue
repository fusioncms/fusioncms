<template>
    <div>
        <portal to="title">
            <app-title icon="key">Permissions</app-title>
        </portal>

        <div class="row">
            <div class="content-container">
                <p-table name="permissions" :endpoint="endpoint" sort-by="slug" :per-page="10" no-actions key="permissions_table">
                    <template slot="slug" slot-scope="table">
                        <code>{{ table.record.slug }}</code>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>
                </p-table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Permissions'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/permissions',
            }
        }
    }
</script>
