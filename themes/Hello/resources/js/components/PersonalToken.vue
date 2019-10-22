<template>
	<div>
        <div class="row">
            <form class="col w-full" @submit.prevent="submit">
                <p class="mb-6 text-sm">Personal API tokens allow third-party services to authenticate as you to access the API. Tokens should never be shared with anyone and should be treated as passwords.</p>

                <p-input name="name" label="Create New Token" v-model="form.name" :has-error="form.errors.has('name')" :error-message="form.errors.get('name')"></p-input>

                <button class="button" type="submit" @click.prevent="submit">Create</button>
            </form>
        </div>

        <hr>

        <div class="row">
            <div class="col w-full">
                <h3 class="mt-0 mb-3">Manage API Tokens</h3>
                
                <div
                    class="my-3 border-l-4 p-4"
                    :class="{
                        'bg-gray-100 border-gray-500 text-gray-700': (loading == true),
                        'bg-orange-100 border-orange-500 text-orange-700': (loading == false && tokens.length == 0),
                        'bg-blue-100 border-blue-500 text-blue-700': (loading == false && tokens.length > 0)
                    }"
                    role="alert"
                >
                    <p v-if="loading">Loading existing API tokens...</p>
                    <p v-else-if="tokens.length == 0">You have not created any API tokens.</p>
                    <p v-else>You may revoke any of your existing tokens if they are no longer in use.</p>
                </div>

                <div v-if="tokens.length">
                    <table>
                        <tbody>
                            <tr v-for="token in tokens" :key="token.name">
                                <td>{{ token.name }}</td>
                                <td class="text-right"><a href="#" @click.prevent="revoke(token)" class="text-red-400 hover:text-red-600">Revoke</a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>

        <p-modal name="access-token" v-model="hasAccessToken" title="Your API Token" large no-outside-close no-esc-close>
            <p class="mb-6">Please copy your new API token. For your security, it won't be shown again.</p>

            <p-textarea name="access-token" v-model="accessToken" :rows="6"></p-textarea>

            <template v-slot:footer>
                <p-button v-modal:access-token>OK</p-button>
            </template>
        </p-modal>
    </div>
</template>

<script>
    import Form from '../forms/Form'

	export default {
		name: 'passport.personal',

        data() {
            return {
                loading: true,

                accessToken: null,
                
                tokens: [],  // existing tokens for current user
                scopes: [],  // all available scopes

                form: new Form({
                    name: '',
                    scopes: []
                })
            }
        },

        computed: {
            hasAccessToken: {
                get: function() {
                    return null !== this.accessToken
                },

                set: function(value) {
                    this.accessToken = null
                }
            },
        },

        methods: {
            refreshTokens() {
                this.loading = true

                axios.all([
                    axios.get('/oauth/personal-access-tokens'),
                    axios.get('/oauth/scopes')
                ]).then(axios.spread(function (tokens, scopes) {
                    if (tokens) this.tokens = tokens.data
                    if (scopes) this.scopes = scopes.data

                    this.loading = false
                }.bind(this)))
            },

            submit() {
                this.form.post('/oauth/personal-access-tokens')
                    .then(response => {
                        this.tokens.push(response.token)
                        this.accessToken = response.accessToken
                        this.form.reset()
                    })
                    .catch(() => {})
            },

            revoke(token) {
                axios.delete('/oauth/personal-access-tokens/' + token.id)
                    .then(response => {
                        this.refreshTokens()
                    })
                    .catch(() => {})
            }
        },

        mounted() {
            this.refreshTokens()
        }
	}
</script>