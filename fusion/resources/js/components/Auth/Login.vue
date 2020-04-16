<template>
    <div id="login-form" class="w-full max-w-xs">
        <div class="text-center relative mb-10">
            <img src="/vendor/fusion/img/illustrations/login.svg" alt="Illustration">
        </div>

        <div class="card">
            <div class="card__body">
                <div class="flex flex-col items-center leading-none mb-6">
                    <span class="mb-3 text-gray-600 text-sm font-bold ">Welcome to</span>
                    <span class="font-bold text-xxl">FusionCMS</span>
                </div>

                <form @submit.prevent="submit">
                    <p-input
                        name="email"
                        label="E-mail"
                        autocomplete="off"
                        :has-error="form.errors.has('email')"
                        :error-message="form.errors.get('email')"
                        autofocus
                        required
                        v-model="form.email"
                    ></p-input>

                    <p-input
                        name="password"
                        type="password"
                        label="Password"
                        autocomplete="off"
                        :has-error="form.errors.has('password')"
                        :error-message="form.errors.get('password')"
                        autofocus
                        required
                        v-model="form.password"
                    ></p-input>

                    <button
                        type="submit"
                        class="button button--primary"
                        @click.prevent="submit"
                    >Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Form from '../../forms/Form'

    export default {
        name: 'loginForm',

        data() {
            return {
                form: new Form({
                    email: '',
                    password: '',
                })
            }
        },

        methods: {
            submit() {
                this.form.post('/login')
                    .then(response => {
                        this.$store.commit('user/setUser', response.data)

                        if (!!this.$route.query.redirect)
                            location.href = this.$route.query.redirect
                        else
                            location.href = '/' + config.path
                    })
                    .catch(error   => {})
            }
        }
    }
</script>