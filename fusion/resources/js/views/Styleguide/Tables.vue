<template>
    <div>
        <portal to="title">
            <app-title icon="swatchbook">Table Styleguide</app-title>
        </portal>

        <div class="row">
            <div class="col w-full">
                <div class="card">
                    <p-table
                        name="permissions" :endpoint="endpoint" sort-by="slug" :per-page="10" key="permissions_table"

                        :columns="[
                            'name',
                            'title',
                            'email',
                            'role',
                        ]"

                        :data="[
                            {
                                name: 'Bernard Lane',
                                title: 'Director, Human Resources',
                                email: 'bernardlane@example.com',
                                role: 'Owner',
                            },
                        ]"
                    >
                        <template slot="actions">
                            <p-dropdown placement="left-start" icon no-arrow>
                                <fa-icon icon="ellipsis-h" class="icon"></fa-icon>

                                <template v-slot:menu>
                                    <p-dropdown-link href="/" target="_blank">
                                        <fa-icon icon="pencil-alt" class="icon"></fa-icon>
                                        Edit
                                    </p-dropdown-link>

                                    <p-dropdown-link href="/" target="_blank">
                                        <fa-icon icon="trash-alt" class="icon"></fa-icon>
                                        Delete
                                    </p-dropdown-link>
                                </template>
                            </p-dropdown>
                        </template>
                    </p-table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Table Styleguide'
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