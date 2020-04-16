<template>
    <div>
        <portal to="title">
            <app-title icon="users">Users</app-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'users.create' }" class="button">Create User</router-link>
        </portal>

        <div class="row">
            <div class="side-container">
                <div class="card">
                    <div class="card__body">
                        <div class="list">
                            <router-link :to="{ name: 'users' }" class="list--item" exact>All Users</router-link>

                            <span class="list--separator">Roles</span>

                            <router-link v-for="role in filteredRoles" :key="role.id" :to="{ name: 'users.role', params: { role: role.slug } }" class="list--item" exact>
                                {{ role.name }}
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-container">
                <p-table id="users" :endpoint="endpoint" sort-by="name" key="users_table">
                    <template slot="name" slot-scope="table">
                        <router-link :to="{ name: 'users.edit', params: {user: table.record.id} }">{{ table.record.name }}</router-link>
                    </template>

                    <template slot="email" slot-scope="table">
                        {{ table.record.email }}
                    </template>

                    <template slot="role" slot-scope="table">
                        <span class="badge">{{ table.record.role.name }}</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-actions :id="'user_' + table.record.id + '_actions'" :key="'user_' + table.record.id + '_actions'">
                            <p-dropdown-link @click.prevent :to="{ name: 'users.edit', params: {user: table.record.id} }">Edit</p-dropdown-link>

                            <p-dropdown-link
                                v-if="table.record.id != user.id"
                                @click.prevent
                                v-modal:delete-user="table.record"
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
            <p-modal name="delete-user" title="Delete User">
                <p>Are you sure you want to permenantly delete this user?</p>

                <template slot="footer" slot-scope="user">
                    <p-button v-modal:delete-user @click="destroy(user.data.id)" theme="danger" class="ml-3">Delete</p-button>
                    <p-button v-modal:delete-user>Cancel</p-button>
                </template>
            </p-modal>
        </portal>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'

    export default {
        head: {
            title() {
                return {
                    inner: 'Users'
                }
            }
        },

        data() {
            return {
                roles: [],
                role: this.$route.params.role || null,
            }
        },

        computed: {
            ...mapGetters({
                user: 'user/getUser',
            }),

            filteredRoles() {
                return _.filter(this.roles, (role) => {
                    return role.slug !== 'guest'
                })
            },

            endpoint() {
                if (this.role) {
                    return '/datatable/users/' + this.role
                }

                return '/datatable/users'
            }
        },

        watch: {
            '$route' (to, from) {
                this.role = to.params.role || null
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/roles').then((response) => {
                next(vm => vm.setRoles(response.data.data))
            }).catch((err) => {
                next(vm => vm.setError(err))
            })
        },

        methods: {
            setRoles(roles) {
                this.roles = roles
            },

            setError(error) {
                console.log(error)
            },

            destroy(id) {
                axios.delete('/api/users/' + id).then((response) => {
                    toast('User successfully deleted.', 'success')

                    proton().$emit('refresh-datatable-users')
                })
            }
        }
    }
</script>