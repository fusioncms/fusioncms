<template>
	<div
        class="bg-gray-200 mx-auto h-full flex flex-1 flex-col items-center justify-center"
        style="transition: 0.1s;"
    >

        <div class="row">
            <form @submit.prevent="submit">
                <p-card>
                    <h3>New Token</h3>

                    <p-input
                        name="name"
                        label="Name"
                        help="Give your token a name."
                        autocomplete="off"
                        autofocus
                        required
                        :has-error="form.errors.has('name')"
                        :error-message="form.errors.get('name')"
                        v-model="form.name">
                    </p-input>

                    <button type="submit" @click.prevent="submit" class="button button--primary">Create</button>
                </p-card>
            </form>
        </div>

        <div class="row" v-if="accessToken">
            <p-card>
                <h3>Your Personal Access Token</h3>
                <p class="text-sm">Save this, as it will not be shown ever again.</p>
            
                <textarea rows="10">{{ accessToken }}</textarea>
            </p-card>
        </div>

        <div class="row">
            <p-card>
                <h3>Personal Access Tokens</h3>
                
                <div class="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                    <fa-icon icon="info"></fa-icon>
                    <p>You have not created any personal access tokens.</p>
                </div>

                <table v-if="tokens.length > 0" class="text-left w-full border-collapse">
                    <thead>
                        <tr>
                            <th class="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-500 border-b border-gray-300">Name</th>
                            <th class="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-gray-500 border-b border-gray-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="token in tokens">
                            <td class="py-4 px-6 border-b border-grey-light">{{ token.name }}</td>
                            <td class="py-4 px-6 border-b border-grey-light">
                                <a class="font-bold py-1 px-3 rounded bg-red-600" @click="revoke(token)">
                                    <fa-icon icon="trash"></fa-icon>
                                    Delete
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </p-card>
        </div>

    </div>
</template>

<script>
    import Form from '../../forms/Form'

	export default {
		name: 'passport.personal',

        data() {
            return {
                accessToken: null,
                
                tokens: {},  // existing tokens for current user
                scopes: [],  // all available scopes

                form: new Form({
                    name: '',
                    scopes: []
                })
            }
        },

        methods: {
            submit() {
                this.form.post('/oauth/personal-access-tokens')
                    .then(response => {
                        toast('Token successfully created', 'success')

                        let token = response.token

                        this.tokens[token.id] = token
                        this.accessToken      = response.accessToken
                    })
                    .catch(error => {
                        if (typeof error.response.data == 'object') {
                            toast(_.flatten(_.toArray(error.response.data.errors)), 'failed')
                        } else {
                            toast('Something went wrong. Please try again.', 'failed')
                        }
                    })
            },

            revoke(token) {
                axios.delete('/oauth/personal-access-tokens/' + token.id)
                    .then(response => {
                        delete this.tokens[token.id]
                    })
                    .catch(error => {
                        if (typeof error.response.data == 'object') {
                            toast(_.flatten(_.toArray(error.response.data.errors)), 'failed')
                        } else {
                            toast('Something went wrong. Please try again.', 'failed')
                        }
                    })
            }
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/oauth/personal-access-tokens'),
                axios.get('/oauth/scopes')
            ]).then(axios.spread(function (tokens, scopes) {
                next(function (vm) {
                    vm.tokens = tokens.data
                    vm.scopes = scopes.data
                })
            }))
        }
	}
</script>