<template>
    <div>
        <portal to="title">
            <app-title icon="atom-alt">Edit Matrix</app-title>
        </portal>

        <div class="row">
            <div class="content-container">
                <form @submit.prevent="submit">
                    <p-card>
                        <div class="row">
                            <div class="col xxl:text-right w-full xxl:w-1/3">
                                <div class="xxl:mr-10">
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
                                    help="What type of matrix will this be? Only change this if you know what you're doing as it may result in data loss."
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
                            </div>
                        </div>

                        <hr>

                        <div class="row">
                            <div class="col xxl:text-right w-full xxl:w-1/3">
                                <div class="xxl:mr-10">
                                    <h3>Customize</h3>
                                    <p class="text-sm">Customize how your matrix will be found and displayed within the admin control panel.</p>
                                </div>
                            </div>

                            <div class="col w-full xxl:w-2/3">
                                <div class="row">
                                    <div class="col w-full xxl:w-1/2">
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

                                    <div class="col w-full xxl:w-1/2">
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
                                        <p-input
                                            name="icon"
                                            label="Icon"
                                            placeholder="pencil"
                                            help="Choose an icon that best represents your matrix."
                                            autocomplete="off"
                                            autofocus
                                            required
                                            :has-error="form.errors.has('icon')"
                                            :error-message="form.errors.get('icon')"
                                            v-model="form.icon">
                                        </p-input>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr>

                        <div class="row">
                            <div class="col xxl:text-right w-full xxl:w-1/3">
                                <div class="xxl:mr-10">
                                    <h3>Route</h3>
                                    <p class="text-sm">If your matrix will be accessible from the frontend, you may define its route and template here.</p>
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
                                            autofocus
                                            required
                                            :has-error="form.errors.has('route')"
                                            :error-message="form.errors.get('route')"
                                            v-model="form.route">
                                        </p-input>
                                    </div>

                                    <div class="col w-full xxl:w-1/2">
                                        <p-input
                                            name="template"
                                            label="Template"
                                            help="Specify the template to be loaded"
                                            autocomplete="off"
                                            :has-error="form.errors.has('template')"
                                            :error-message="form.errors.get('template')"
                                            autofocus
                                            required
                                            v-model="form.template">
                                        </p-input>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- <hr>

                        <div class="row">
                            <div class="col xxl:text-right w-full xxl:w-1/3">
                                <div class="xxl:mr-10">
                                    <h3>Features</h3>
                                    <p class="text-sm">Matrices support a variety of features to control and manage your content.</p>
                                </div>
                            </div>

                            <div class="col w-full xxl:w-2/3">
                                <div class="row">
                                    <div class="col w-full xxl:w-1/2">
                                        <p-select
                                            name="revision_control"
                                            label="Revision Control"
                                            help="Enable revision control to track and view all changes made to the matrix's content."
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
                                            v-model="form.revision_control">
                                        </p-select>
                                    </div>

                                    <div class="col w-full xxl:w-1/2" v-if="isCollection">
                                        <p-select
                                            name="categorizable"
                                            label="Categorizable"
                                            help="Entries under the matrix may be categorized."
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
                                            v-model="form.categorizable">
                                        </p-select>
                                    </div>

                                    <div class="col w-full xxl:w-1/2" v-if="isCollection">
                                        <p-select
                                            name="creditable"
                                            label="Creditable"
                                            help="Entries will be creditable to an author and any number of contributing user accounts."
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
                                            v-model="form.creditable">
                                        </p-select>
                                    </div>

                                    <div class="col w-full xxl:w-1/2" v-if="isCollection">
                                        <p-select
                                            name="publishable"
                                            label="Publishable"
                                            help="Entries that are publishable will have both a publish and expiration date timestamp field."
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
                                            v-model="form.publishable">
                                        </p-select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr>

                        <div class="row">
                            <div class="col xxl:text-right w-full xxl:w-1/3">
                                <div class="xxl:mr-10">
                                    <h3>SEO</h3>
                                    <p class="text-sm">If your matrix is accessible from the frontend, SEO is essential in making sure that your content can be found by both search engines and your target audience.</p>
                                </div>
                            </div>

                            <div class="col w-full xxl:w-2/3">
                                <p-select
                                    name="seoable"
                                    label="Search Engine Optimization"
                                    help="Enable search engine optimization (SEO) to aid in content being found and featured by search engines."
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
                                    v-model="form.seoable">
                                </p-select>
                            </div>
                        </div> -->
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
                id: null,
                form: new Form({
                    name: '',
                    handle: '',
                    description: '',
                    type: 'collection',

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

        computed: {
            isCollection() {
                return this.form.type === 'collection'
            },

            hasSEO() {
                return this.form.seoable === '1'
            }
        },

        methods: {
            submit() {
                this.form.patch('/api/matrices/' + this.id).then((response) => {
                    toast('Matrix successfully updated', 'success')

                    this.$router.push('/matrices')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/matrices/' + to.params.matrix),
            ]).then(axios.spread(function (matrix) {
                next(function(vm) {
                    vm.id = matrix.data.data.id

                    vm.form.name = matrix.data.data.name
                    vm.form.handle = matrix.data.data.handle
                    vm.form.description = matrix.data.data.description
                    vm.form.type = matrix.data.data.type

                    vm.form.sidebar = matrix.data.data.sidebar ? '1' : '0'
                    vm.form.quicklink = matrix.data.data.quicklink ? '1' : '0'
                    vm.form.icon = matrix.data.data.icon

                    vm.form.route = matrix.data.data.route
                    vm.form.template = matrix.data.data.template

                    vm.form.revision_control = matrix.data.data.revision_control ? '1' : '0'
                    vm.form.categorizable = matrix.data.data.categorizable ? '1' : '0'
                    vm.form.creditable = matrix.data.data.creditable ? '1' : '0'
                    vm.form.publishable = matrix.data.data.publishable ? '1' : '0'

                    vm.form.seoable = matrix.data.data.seoable ? '1' : '0'

                    vm.form.status = matrix.data.data.status ? '1' : '0'
                })
            }))
        }
    }
</script>