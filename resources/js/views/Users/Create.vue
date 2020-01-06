<template>
    <div>
        <portal to="title">
            <app-title icon="user-alt">Create User</app-title>
        </portal>

        <div class="row">
            <shared-form :form="form" :roleOptions="roleOptions"></shared-form>               
        </div>
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
                    status: '1',
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
            axios.all([
                axios.get('/api/roles'),
            ]).then(axios.spread(function (roles, user) {
                next(function(vm) {
                    vm.roles = roles.data.data
                })
            }))
        },
    }
</script>