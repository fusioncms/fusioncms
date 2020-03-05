<template>
    <div>
        <portal to="title">
            <app-title icon="anchor">Menus</app-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'menus.create' }" class="button">Create Menu</router-link>
        </portal>

        <div class="row">
            <div class="content-container">
                <p-table :endpoint="endpoint" name="menus" sort-by="name" :per-page="10" primary-key="handle" key="menus_table">
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'menu.nodes', params: {menu: table.record.id} }">{{ table.record.name }}</router-link>
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
                        <p-dropdown right :key="'menu_' + table.record.id">
                            <fa-icon :icon="['fas', 'bars']"></fa-icon>

                            <template slot="options">
                                <p-dropdown-item @click.prevent :to="{ name: 'menu.nodes', params: {menu: table.record.id} }">Manage</p-dropdown-item>
                                <p-dropdown-item @click.prevent :to="{ name: 'menus.edit', params: {menu: table.record.id} }">Edit</p-dropdown-item>

                                <p-dropdown-item
                                    @click.prevent
                                    v-modal:delete-menu="table.record"
                                >
                                    Delete
                                </p-dropdown-item>
                            </template>
                        </p-dropdown>
                    </template>
                </p-table>
            </div>
        </div>

        <portal to="modals">
            <p-modal name="delete-menu" title="Delete Menu" key="delete_menu">
                <p>Are you sure you want to permenantly delete this menu?</p>

                <template slot="footer" slot-scope="menu">
                    <p-button v-modal:delete-menu @click="destroy(menu.data.id)" theme="danger" class="ml-3">Delete</p-button>
                    <p-button v-modal:delete-menu>Cancel</p-button>
                </template>
            </p-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Menus'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/menus',
            }
        },

        methods: {
            destroy(id) {
                axios.delete('/api/menus/' + id).then((response) => {
                    toast('Menu successfully deleted.', 'success')

                    proton().$emit('refresh-datatable-menus')
                })
            }
        }
    }
</script>