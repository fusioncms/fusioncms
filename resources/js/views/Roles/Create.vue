<template>
    <div>
        <portal to="title">
            <app-title icon="crown">Create Role</app-title>
        </portal>

        <div class="row">
            <div class="content-container">
                <form @submit.prevent="submit">
                    <p-card>
                        <div class="row">
                            <div class="col xl:text-right w-full xl:w-1/3">
                                <div class="xl:mr-10">
                                    <h3>Basic Information</h3>
                                    <p class="text-sm">What is the name and description of this role?</p>
                                </div>
                            </div>

                            <div class="col w-full xl:w-2/3">
                                <p-input name="name" label="Name" autocomplete="off" :has-error="hasError('name')" :error-message="getError('name')" autofocus required v-model="name"></p-input>

                                <p-slug name="slug" label="Slug" autocomplete="off" :has-error="hasError('slug')" :error-message="getError('slug')" required :watch="name" v-model="slug"></p-slug>

                                <p-input name="description" label="Description" autocomplete="off" :has-error="hasError('description')" :error-message="getError('description')" required v-model="description"></p-input>
                            </div>
                        </div>

                        <hr>

                        <div class="row">
                            <div class="col xl:text-right w-full xl:w-1/3">
                                <div class="xl:mr-10">
                                    <h3>Attributes</h3>
                                    <p class="text-sm">Assign any additional attribute values for your role.</p>
                                </div>
                            </div>

                            <div class="col w-full xl:w-2/3">
                                <p-select name="special" label="Special Flag" :options="flags" autocomplete="off" :has-error="hasError('special')" :error-message="getError('special')" required v-model="special"></p-select>
                            </div>
                        </div>
                    </p-card>

                    <portal to="actions">
                        <router-link :to="{ name: 'roles' }" class="button mr-3">Cancel</router-link>
                        <button type="submit" @click.prevent="submit" class="button button--primary">Save Role</button>
                    </portal>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                errors: {},
                flags: [
                    {
                        'label': 'None',
                        'value': '',
                    },
                    {
                        'label': 'All Access',
                        'value': 'all-access',
                    },
                    {
                        'label': 'No Access',
                        'value': 'no-access',
                    },
                ],

                name: '',
                slug: '',
                description: '',
                special: '',
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
                axios.post('/api/roles', {
                    name: this.name,
                    slug: this.slug,
                    description: this.description,
                    special: this.special,
                }).then((response) => {
                    toast('Role successfully created', 'success')

                    this.$router.push('/roles')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')

                    this.errors = response.response.data.errors
                })
            },
        },
    }
</script>