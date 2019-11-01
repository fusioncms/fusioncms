<template>
    <div>
        <portal to="title">
            <app-title icon="chart-network">Create Matrix</app-title>
        </portal>

        <div class="row">
            <div class="content-container">
                <form @submit.prevent="submit">
                    <p-card>
                        <div class="row">
                            <div class="col xxl:text-right w-full xxl:w-1/3">
                                <div class="xxl:mr-10 xxl:mb-0 mb-6">
                                    <h3>General</h3>
                                    <p class="text-sm">What will this matrix be called and what will it manage?</p>
                                </div>
                            </div>

                            <div class="col w-full xxl:w-2/3">
                                <p-input
                                    name="name"
                                    label="Name"
                                    help="What this matrix will be called."
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
                                    help="A developer-friendly variant of the matrix's name."
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
                                    help="Give a short description of what this matrix will manage and store."
                                    autocomplete="off"
                                    required
                                    :has-error="form.errors.has('description')"
                                    :error-message="form.errors.get('description')"
                                    v-model="form.description">
                                </p-input>

                                <p-select
                                    name="type"
                                    label="Type"
                                    help="What type of matrix will this be?"
                                    :options="[
                                        {
                                            'label': 'Collection',
                                            'value': 'collection',
                                        },
                                        {
                                            'label': 'Page',
                                            'value': 'page',
                                        },
                                    ]"
                                    :has-error="form.errors.has('type')"
                                    :error-message="form.errors.get('type')"
                                    v-model="form.type">
                                </p-select>

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
                                    <p class="text-sm">Customize how your matrix will be found and displayed within the admin control panel.</p>
                                </div>
                            </div>

                            <div class="col w-full xxl:w-2/3">
                                <div class="row">
                                    <div class="col w-full xxl:w-1/2 mb-6">
                                        <p-select
                                            name="sidebar"
                                            label="Show in Sidebar"
                                            help="Do you want this matrix to be shown in the sidebar?"
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

                                    <div class="col w-full xxl:w-1/2 mb-6">
                                        <p-select
                                            name="quicklink"
                                            label="Show as Quicklink"
                                            help="Do you want this matrix to be shown as a quicklink on the dashboard?"
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
                                            :has-error="form.errors.has('quicklink')"
                                            :error-message="form.errors.get('quicklink')"
                                            v-model="form.quicklink">
                                        </p-select>
                                    </div>

                                    <div class="col w-full">
                                        <icon-picker
                                            name="icon"
                                            label="Icon"
                                            placeholder="Search icons..."
                                            help="Choose an icon that best represents your matrix."
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
                                    <p class="text-sm">If your matrix will be accessible from the frontend, you may define its route and template here.</p>
                                </div>
                            </div>

                            <div class="col w-full xxl:w-2/3">
                                <div class="row">
                                    <div class="col w-full xxl:w-1/2 xxl:mb-0 mb-6">
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
                                    v-model="form.status">
                                </p-select>
                            </div>
                        </div>

                        <portal to="actions">
                            <router-link :to="{ name: 'matrices' }" class="button mr-3">Go Back</router-link>
                            <button type="submit" @click.prevent="submit" class="button button--primary">Save Matrix</button>
                        </portal>
                    </p-card>
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
                    type: 'collection',
                    fieldset: null,

                    sidebar: '1',
                    quicklink: '1',
                    icon: '',

                    route: '',
                    template: '',

                    categorizable: '1',
                    creditable: '1',
                    publishable: '1',
                    revision_control: '1',

                    seoable: '1',

                    status: '1',
                })
            }
        },

        methods: {
            submit() {
                this.form.post('/api/matrices').then((response) => {
                    store.dispatch('navigation/fetchAdminNavigation')
                    
                    toast('Matrix successfully created', 'success')

                    this.$router.push('/matrices')
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