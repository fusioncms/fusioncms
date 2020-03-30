<template>
    <div>
        <portal to="title">
            <app-title icon="user-alt">Create User</app-title>
        </portal>

        <shared-form :form="form" :roleOptions="roleOptions" :submit="submit"></shared-form>
    </div>
</template>

<script>
    import Form from '../../forms/Form'
    import SharedForm from './SharedForm'

    export default {
        head: {
            title() {
                return {
                    inner: 'Create a User'
                }
            }
        },

        data() {
            return {
                roles: null,
                form: new Form({
                    name: '',
                    email: '',
                    role: null,
                    password: '',
                    password_confirmation: '',
                    email_verified_at: this.$moment().format('X'),
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
                this.form.post('/api/users').then((response) => {
                    toast('User successfully created', 'success')

                    this.$router.push('/users')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getRoles((error, roles) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/users')

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.roles = roles

                        vm.$emit('updateHead')

                        vm.$nextTick(() => {
                            vm.form.resetChangeListener()
                        })
                    })
                }
            })
        },
    }

    export function getRoles(callback) {
        axios.get('/api/roles').then((response) => {
            let roles = response.data.data

            callback(null, roles)
        }).catch(function(error) {
            callback(new Error('Roles could not be found'))
        })
    }
</script>