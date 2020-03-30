<template>
    <div>
        <portal to="title">
            <app-title icon="user-alt">Edit User</app-title>
        </portal>

        <shared-form :form="form" :roleOptions="roleOptions" :user="user" :submit="submit">
            <template v-slot:side-container>
                <p-card class="text-sm" v-if="user">
                    <div class="flex justify-between">
                        <label class="form__label">Status</label>

                        <p v-if="user.status">Enabled <fa-icon icon="circle" size="xs" fixed-width class="text-success-400"></fa-icon></p>
                        <p v-else>Disabled <fa-icon icon="circle" size="xs" fixed-width class="text-danger-400"></fa-icon></p>
                    </div>

                    <div class="flex justify-between">
                        <label class="form__label">Verified</label>

                        <p v-if="user.verified">Yes <fa-icon icon="circle" size="xs" fixed-width class="text-success-400"></fa-icon></p>
                        <p v-else>No <fa-icon icon="circle" size="xs" fixed-width class="text-danger-400"></fa-icon></p>
                    </div>

                    <div class="flex justify-between">
                        <label class="form__label">Registered</label>
                        <p>{{ $moment(user.created_at.date).format('L') }}</p>
                    </div>

                    <div class="flex justify-between">
                        <label class="form__label">Last Login</label>

                        <p v-if="user.logged_in_at">{{ $moment(user.logged_in_at.date).format('L') }}</p>
                        <p v-else>Never</p>
                    </div>

                    <div class="flex justify-between">
                        <label class="form__label">Last Invalid Login</label>

                        <p v-if="user.invalidly_logged_in_at">{{ $moment(user.invalidly_logged_in_at.date).format('L') }}</p>
                        <p v-else>Never</p>
                    </div>

                    <div class="flex justify-between">
                        <label class="form__label">Last Password Change</label>

                        <p v-if="user.password_changed_at">{{ $moment(user.password_changed_at.date).format('L') }}</p>
                        <p v-else>Never</p>
                    </div>

                    <div class="flex justify-between">
                        <label class="form__label">Invalid Login Count</label>
                        <p>{{ user.invalid_logins }}</p>
                    </div>
                </p-card>
            </template>
        </shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: this.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                user: {},
                roles: [],
                form: new Form({
                    name: '',
                    email: '',
                    role: null,
                    password: '',
                    password_confirmation: '',
                    status: 1,
                }, true)
            }
        },

        components: {
            'shared-form': SharedForm
        },

        computed: {
            roleOptions() {
                let roles = _.filter(this.roles, (role) => {
                    return role.handle !== 'guest'
                })
                roles = _.map(roles, (role) => {
                    return {
                        label: role.name,
                        value: role.slug,
                    }
                })

                return roles
            }
        },

        methods: {
            submit() {
                this.form.patch(`/api/users/${this.user.id}`).then((response) => {
                    toast('User successfully updated', 'success')

                    this.$router.push('/users')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getUserAndRoles(to.params.user, (error, user, roles, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/users')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.user = user
                        vm.roles = roles
                        vm.form = new Form(fields, true)

                        vm.$emit('updateHead')

                        vm.$nextTick(() => {
                            vm.form.resetChangeListener()
                        })
                    })
                }
            })
        },
    }

    export function getUserAndRoles(userId, callback) {
        axios.all([
            axios.get('/api/roles'),
            axios.get('/api/users/' + userId),
        ])
        .then(axios.spread(function (roles, user) {
            user = user.data.data
            roles = roles.data.data
            let fields = {
                name: user.name,
                email: user.email,
                status: user.status,
                role: user.roles[0].slug,
                password: '',
                password_confirmation: '',
            }

            callback(null, user, roles, fields)
        }))
    }
</script>