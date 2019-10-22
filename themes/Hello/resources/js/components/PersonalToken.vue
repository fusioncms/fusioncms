<template>
	<div>
        <div class="row">
            <form class="w-full" @submit.prevent="submit">
                <h3>Create New Token</h3>

                <div class="mb-6">
                    <input
                        type="text"
                        name="name"
                        class="form-input w-full"
                        required
                        v-model="form.name"/>

                    <span class="text-sm text-red-600 italic" v-if="form.errors.has('name')" v-text="form.errors.get('name')"></span>
                </div>

                <button class="button" type="submit" @click.prevent="submit">Create</button>
            </form>
        </div>

        <div class="row" v-if="accessToken">
            <div class="w-full">
                <h3>Your Generated Token</h3>
                <p class="text-sm text-gray-600 mb-3">Save this, as it will not be shown ever again.</p>
                <textarea class="h-64 w-full p-3 text-blue-600 bg-blue-100 rounded">{{ accessToken }}</textarea>
            </div>
        </div>

        <div class="row">
            <div class="w-full">
                <h3>Manage Tokens</h3>
                
                <div v-if="tokens.length == 0" class="my-3 bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
                    <p>You have not created any personal access tokens.</p>
                </div>

                <table v-else class="text-left w-full border-collapse">
                    <thead>
                        <tr>
                            <th class="w-4/5 py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-500 border-b border-gray-300">Name</th>
                            <th class="w-1/5 py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-500 border-b border-gray-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="token in tokens">
                            <td class="py-4 px-6 border-b border-grey-light">{{ token.name }}</td>
                            <td class="py-4 px-6 border-b border-grey-light">
                                <button class="button inline-flex items-center" @click="revoke(token)">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    </div>
</template>

<script>
    import Form from '../forms/Form'

	export default {
		name: 'passport.personal',

        data() {
            return {
                accessToken: null,
                
                tokens: [],  // existing tokens for current user
                scopes: [],  // all available scopes

                form: new Form({
                    name: '',
                    scopes: []
                })
            }
        },

        methods: {
            refreshTokens() {
                axios.all([
                    axios.get('/oauth/personal-access-tokens'),
                    axios.get('/oauth/scopes')
                ]).then(axios.spread(function (tokens, scopes) {
                    if (tokens) this.tokens = tokens.data
                    if (scopes) this.scopes = scopes.data
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