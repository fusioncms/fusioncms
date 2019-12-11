<template>
    <div>
        <portal to="title">
            <app-title icon="user-alt">Create User</app-title>
        </portal>

        <div class="row">
            <div class="content-container">
                <form @submit.prevent="submit">
                    <p-card>
                        <div class="row">
                            <div class="col form-sidebar">
                                <div class="xl:mr-10">
                                    <h3>Personal</h3>
                                    <p class="text-sm">Information to identify the user both within the CMS and by means of login.</p>
                                </div>
                            </div>

                            <div class="col form-content">
                                <p-input name="name" label="First Name" autocomplete="off" :has-error="hasError('name')" :error-message="getError('name')" autofocus required v-model="name"></p-input>

                                <p-input type="email" name="email" label="E-mail" autocomplete="off" :has-error="hasError('email')" :error-message="getError('email')" required v-model="email"></p-input>
                            </div>
                        </div>

                        <hr>

                        <div class="row">
                            <div class="col form-sidebar">
                                <div class="xl:mr-10">
                                    <h3>Security</h3>
                                    <p class="text-sm">Secure the account by specifying the role and setting a strong password.</p>
                                </div>
                            </div>

                            <div class="col form-content">
                                <p-select name="role" label="Role" :options="roleOptions" autocomplete="off" value="user" :has-error="hasError('role')" :error-message="getError('role')" required v-model="role"></p-select>
                                
                                <p-input type="password" name="password" label="Password" autocomplete="new-password" :has-error="hasError('password')" :error-message="getError('password')" required v-model="password"></p-input>

                                <p-input type="password" name="password_confirmation" label="Confirm Password" autocomplete="new-password" :has-error="hasError('password_confirmation')" :error-message="getError('password_confirmation')" required v-model="passwordConfirmation"></p-input>
                            </div>
                        </div>
                    </p-card>
                </form>
            </div>

            <div class="side-container">
                <form @submit.prevent="submit">
                    <p-card>
                        <div class="row">
                            <div class="col w-full">
                                <p-select
                                    name="status"
                                    label="Status"
                                    :options="[
                                        {
                                            'label': 'Enabled',
                                            'value': '1',
                                        },
                                        {
                                            'label': 'Disabled',
                                            'value': '0',
                                        },
                                    ]"
                                    v-model="status">
                                </p-select>
                            </div>
                        </div>

                        <portal to="actions">
                            <router-link :to="{ name: 'users' }" class="button mr-3">Cancel</router-link>
                            <button type="submit" @click.prevent="submit" class="button button--primary">Save User</button>
                        </portal>
                    </p-card>
                </form>
            </div>                
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                roles: null,
                errors: {},

                name: '',
                email: '',
                role: null,
                password: '',
                passwordConfirmation: '',
                status: '1',
            }
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
            hasError(field) {
                return typeof this.errors[field] !== 'undefined'
            },

            getError(field) {
                if (this.hasError(field)) {
                    return this.errors[field][0]
                }

                return ''
            },

            submit() {
                axios.post('/api/users', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.passwordConfirmation,
                    role: this.role,
                    status: this.status,
                }).then((response) => {
                    toast('User successfully created', 'success')

                    this.$router.push('/users')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')

                    this.errors = response.response.data.errors
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