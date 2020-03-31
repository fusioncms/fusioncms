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
                <p-table :endpoint="endpoint" id="menus" sort-by="name" primary-key="handle" key="menus_table">
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'menu.nodes', params: {menu: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="handle" slot-scope="table">
                        <code>{{ table.record.handle }}</code>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-actions :id="'menu_' + table.record.id + '_actions'" :key="'menu_' + table.record.id + '_actions'">
                            <p-dropdown-link :to="{ name: 'menu.nodes', params: {menu: table.record.id} }">Manage</p-dropdown-link>
                            <p-dropdown-link :to="{ name: 'menus.edit', params: {menu: table.record.id} }">Edit</p-dropdown-link>

                            <p-dropdown-link
                                @click.prevent
                                v-modal:delete-menu="table.record"
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