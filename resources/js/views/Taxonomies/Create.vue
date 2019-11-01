<template>
    <div>
        <portal to="title">
            <app-title icon="sitemap">Create Taxonomy</app-title>
        </portal>

        <div class="row">
            <div class="col w-full">
                <form @submit.prevent="submit">
                    <p-card>
                        <div class="row">
                            <div class="col xxl:text-right w-full xxl:w-1/3">
                                <div class="xxl:mr-10 xxl:mb-0 mb-6">
                                    <h3>General</h3>
                                    <p class="text-sm">What will this taxonomy be called and what will it organize?</p>
                                </div>
                            </div>

                            <div class="col w-full xxl:w-2/3">
                                <p-input
                                    name="name"
                                    label="Name"
                                    help="What this taxonomy will be called."
                                    autocomplete="off"
                                    autofocus
                                    required
                                    :has-error="form.errors.has('name')"
                                    :error-message="form.errors.get('name')"
                                    v-model="form.name">
                                </p-input>

                                <p-slug
                                    name="handle"
                                    label="Handle"
                                    help="A developer-friendly variant of the taxonomy's name."
                                    autocomplete="off"
                                    required
                                    delimiter="_"
                                    :watch="form.name"
                                    :has-error="form.errors.has('handle')"
                                    :error-message="form.errors.get('handle')"
                                    v-model="form.handle">
                                </p-slug>

                                <p-input
                                    name="description"
                                    label="Description"
                                    help="Give a short description of what this taxonomy will organize and store."
                                    autocomplete="off"
                                    required
                                    :has-error="form.errors.has('description')"
                                    :error-message="form.errors.get('description')"
                                    v-model="form.description">
                                </p-input>

                                <div class="flex">
                                    <p-select
                                        v-if="! creatingFieldset"
                                        class="flex-grow"
                                        name="fieldset"
                                        label="Fieldset"
                                        help="What fieldset would you like to attach?"
                                        :options="fieldsets"
                                        :has-error="form.errors.has('fieldset')"
                                        :error-message="form.errors.get('fieldset')"
                                        v-model="form.fieldset">
                                    </p-select>

                                    <p-input
                                        v-else
                                        class="flex-grow"
                                        name="fieldset"
                                        label="Fieldset"
                                        help="What fieldset would you like to create? Don't forget to configure it afterwards."
                                        :has-error="form.errors.has('fieldset')"
                                        :error-message="form.errors.get('fieldset')"
                                        v-model="form.fieldset">
                                    </p-input>

                                    <div class="form__group ml-2">
                                        <label for="create_fieldset" class="form__label">&nbsp;</label>
                                        <p-button class="form__select-button font-mono" @click="creatingFieldset = true" v-if="! creatingFieldset">+</p-button>

                                        <div v-if="creatingFieldset" class="flex">
                                            <p-button class="form__select-button mr-1" theme="primary" @click.prevent>Create</p-button>
                                            <p-button class="form__select-button" @click="creatingFieldset = false">Cancel</p-button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr>

                        <div class="row">
                            <div class="col xxl:text-right w-full xxl:w-1/3">
                                <div class="xxl:mr-10 xxl:mb-0 mb-6">
                                    <h3>Customize</h3>
                                    <p class="text-sm">Customize how your taxonomy will be found and displayed within the admin control panel.</p>
                                </div>
                            </div>

                            <div class="col w-full xxl:w-2/3">
                                <div class="row">
                                    <div class="col w-full xxl:w-1/2">
                                        <p-select
                                            name="sidebar"
                                            label="Show in Sidebar"
                                            help="Do you want this taxonomy to be shown in the sidebar?"
                                            :options="[
                                                {
                                                    'label': 'Show',
                                                    'value': '1',
                                                },
                                                {
                                                    'label': 'Hide',
                                                    'value': '0',
                                                },
                                            ]"
                                            :has-error="form.errors.has('sidebar')"
                                            :error-message="form.errors.get('sidebar')"
                                            v-model="form.sidebar">
                                        </p-select>
                                    </div>

                                    <div class="col w-full xxl:w-1/2">
                                        <icon-picker
                                            name="icon"
                                            label="Icon"
                                            placeholder="Search icons..."
                                            help="Choose an icon that best represents your taxonomy."
                                            :has-error="form.errors.has('icon')"
                                            :error-message="form.errors.get('icon')"
                                            required
                                            v-model="form.icon">
                                        </icon-picker>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr>

                        <div class="row">
                            <div class="col xxl:text-right w-full xxl:w-1/3">
                                <div class="xxl:mr-10 xxl:mb-0 mb-6">
                                    <h3>Route</h3>
                                    <p class="text-sm">If your taxonomy will be accessible from the frontend, you may define its route and template here.</p>
                                </div>
                            </div>

                            <div class="col w-full xxl:w-2/3">
                                <div class="row">
                                    <div class="col w-full xxl:w-1/2">
                                        <p-input
                                            name="route"
                                            label="Route"
                                            help="When the URI matches this pattern..."
                                            autocomplete="off"
                                            monospaced
                                            :has-error="form.errors.has('route')"
                                            :error-message="form.errors.get('route')"
                                            v-model="form.route">
                                        </p-input>
                                    </div>

                                    <div class="col w-full xxl:w-1/2">
                                        <p-input
                                            name="template"
                                            label="Template"
                                            help="Render this template"
                                            autocomplete="off"
                                            monospaced
                                            :has-error="form.errors.has('template')"
                                            :error-message="form.errors.get('template')"
                                            v-model="form.template">
                                        </p-input>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </p-card>

                    <portal to="actions">
                        <router-link :to="{ name: 'taxonomies' }" class="button mr-3">Go Back</router-link>
                        <button type="submit" @click.prevent="submit" class="button button--primary">Save Taxonomy</button>
                    </portal>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Form from '../../forms/Form'

    export default {
        data() {
            return {
                fieldsets: [],
                creatingFieldset: false,
                form: new Form({
                    name: '',
                    handle: '',
                    description: '',
                    fieldset: null,

                    sidebar: '1',
                    icon: '',

                    route: '',
                    template: '',

                    status: '1',
                })
            }
        },

        methods: {
            submit() {
                this.form.post('/api/taxonomies').then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')
                    
                    toast('Taxonomy successfully created', 'success')

                    this.$router.push('/taxonomies')
                }).catch((response) => {
                    toast(response.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/fieldsets'),
            ]).then(axios.spread(function (fieldsets) {
                next(function(vm) {
                    vm.fieldsets = _.map(fieldsets.data.data, function(fieldset) {
                        return {
                            'label': fieldset.name,
                            'value': fieldset.id
                        }
                    })

                    vm.fieldsets.unshift({
                        'label': 'None',
                        'value': null
                    })
                })
            }))
        }
    }
</script>