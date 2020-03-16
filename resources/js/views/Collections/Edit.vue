<template>
    <div>
        <portal to="title">
            <app-title :icon="collection.icon || 'pencil-alt'">Edit {{ collection.reference_singular }}</app-title>
        </portal>

        <portal to="subtitle">{{ collection.description }}</portal>

        <portal to="actions">
            <router-link v-if="collection.slug" :to="{ name: 'entries.index', params: {collection: collection.slug} }" class="button mr-1">Go Back</router-link>

            <button type="submit" @click.prevent="submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
        </portal>

        <form-container>
            <div class="card" v-if="collection.show_name_field">
                <div class="card__body">
                    <p-title
                        name="name"
                        autocomplete="off"
                        autofocus
                        required
                        :has-error="form.errors.has('name')"
                        :error-message="form.errors.get('name')"
                        v-model="form.name">
                    </p-title>

                    <p-tabs v-if="sections.body.length > 0">
                        <p-tab v-for="section in sections.body" :key="section.handle" :name="section.name">
                            <div v-for="field in section.fields" :key="field.handle" class="form__group">
                                <component
                                    :is="field.type.id + '-fieldtype'"
                                    :field="field"
                                    v-model="form[field.handle]"
                                >
                                </component>
                            </div>
                        </p-tab>
                    </p-tabs>
                </div>
            </div>

            <template v-slot:sidebar>
                <div class="card">
                    <div class="card__body">
                        <p-slug
                            name="slug"
                            label="Slug"
                            monospaced
                            autocomplete="off"
                            required
                            :watch="form.name"
                            :has-error="form.errors.has('slug')"
                            :error-message="form.errors.get('slug')"
                            v-model="form.slug">
                        </p-slug>

                        <p-toggle
                            name="status"
                            label="Status"
                            v-model="form.status"
                            :true-value="1"
                            :false-value="0">
                        </p-toggle>
                    </div>
                </div>

                <div class="card" v-for="(section) in sections.sidebar" :key="section.handle">
                    <div class="card__header">
                        <h3 class="card__title">{{ section.name }}</h3>
                        <p v-if="section.description" class="card__subtitle">{{ section.description }}</p>
                    </div>

                    <div class="card__body">
                        <!-- Loop through each section field -->
                        <component
                            :is="field.type.id + '-fieldtype'"
                            :field="field"
                            v-model="form[field.handle]"
                            v-for="field in section.fields" :key="field.handle">
                        </component>
                    </div>
                </div>

                <p-definition-list>
                    <p-definition name="Status">
                        <fa-icon :icon="['fas', 'circle']" class="fa-fw text-xs" :class="{'text-success-500': entry.status, 'text-danger-500': ! entry.status}"></fa-icon> {{ entry.status ? 'Enabled' : 'Disabled' }}
                    </p-definition>

                    <p-definition name="Created At">
                        {{ $moment(entry.created_at).format('Y-MM-DD, hh:mm a') }}
                    </p-definition>

                    <p-definition name="Updated At">
                        {{ $moment(entry.updated_at).format('Y-MM-DD, hh:mm a') }}
                    </p-definition>
                </p-definition-list>
            </template>
        </form-container>

        <portal to="save">
            <div class="row">
                <div class="content-container">
                    <form @submit.prevent="submit">
                        <div class="card">
                            <div class="card__body">
                                <div class="row" v-if="collection.show_name_field">
                                    <div class="col mb-6 form-content">
                                        <div class="row">
                                            <div class="col w-1/2">
                                                <p-input
                                                    name="name"
                                                    :label="collection.name_label || 'Name'"
                                                    autocomplete="off"
                                                    autofocus
                                                    required
                                                    :has-error="form.errors.has('name')"
                                                    :error-message="form.errors.get('name')"
                                                    v-model="form.name">
                                                </p-input>
                                            </div>

                                            <div class="col w-1/2">
                                                <p-slug
                                                    name="slug"
                                                    label="Slug"
                                                    monospaced
                                                    autocomplete="off"
                                                    required
                                                    :watch="form.name"
                                                    :has-error="form.errors.has('slug')"
                                                    :error-message="form.errors.get('slug')"
                                                    v-model="form.slug">
                                                </p-slug>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div v-if="sections.body.length > 0">
                                    <!-- Loop through each section -->
                                    <div v-for="(section, index) in sections.body" :key="section.handle">
                                        <div class="row">
                                            <div class="col form-sidebar">
                                                <div class="xxl:mr-10">
                                                    <h3>{{ section.name }}</h3>
                                                    <p class="text-sm">{{ section.description }}</p>
                                                </div>
                                            </div>

                                            <div class="col form-content">
                                                <!-- Loop through each section field -->
                                                <div v-for="field in section.fields" :key="field.handle" class="form__group">
                                                    <component
                                                        :is="field.type.id + '-fieldtype'"
                                                        :field="field"
                                                        v-model="form[field.handle]"
                                                    >
                                                    </component>
                                                </div>
                                            </div>
                                        </div>

                                        <hr v-if="index !== sections.body.length - 1">
                                    </div>
                                </div>

                                <div v-else class="text-center">
                                    <p>You should configure your Matrix Collection with some sections and fields first <fa-icon class="text-emoji" :icon="['fas', 'hand-peace']"></fa-icon></p>

                                    <router-link class="button items-center" :to="'/matrices/' + collection.id + '/edit'"><fa-icon :icon="['fas', 'edit']" class="mr-2 text-sm"></fa-icon> Manage your collection</router-link>
                                </div>
                            </div>
                        </div>
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
                                                'value': 1,
                                            },
                                            {
                                                'label': 'Disabled',
                                                'value': 0,
                                            },
                                        ]"
                                        v-model="form.status"
                                        >
                                    </p-select>
                                </div>
                            </div>

                            <portal to="actions">
                                <router-link v-if="collection.slug" :to="{ name: 'entries.index', params: {collection: collection.slug} }" class="button mr-3">Go Back</router-link>

                                <button type="submit" @click.prevent="submit" class="button button--primary" :class="{'button--disabled': !form.hasChanges}" :disabled="!form.hasChanges">Save</button>
                            </portal>
                        </p-card>

                        <p-card v-for="(section) in sections.sidebar" :key="section.handle" class="mt-6">
                            <h3>{{ section.name }}</h3>
                            <p class="text-sm">{{ section.description }}</p>

                            <div class="w-full">
                                <!-- Loop through each section field -->
                                <div v-for="field in section.fields" :key="field.handle" class="form__group">
                                    <component
                                        :is="field.type.id + '-fieldtype'"
                                        :field="field"
                                        v-model="form[field.handle]"
                                    >
                                    </component>
                                </div>
                            </div>
                        </p-card>
                    </form>
                </div>
            </div>
        </portal>
    </div>
</template>

<script>
    import Form from '../../forms/Form'

    export default {
        head: {
            title() {
                return {
                    inner: this.entry.name || 'Loading...'
                }
            }
        },

        data() {
            return {
                collection: {},
                entry: {},
                form: new Form({}),
            }
        },

        computed: {
            sections() {
                let body = []
                let sidebar = []

                if (this.collection.fieldset) {
                    body = _.filter(this.collection.fieldset.sections, function(section) {
                        return section.placement == 'body'
                    })

                    sidebar = _.filter(this.collection.fieldset.sections, function(section) {
                        return section.placement == 'sidebar'
                    })
                }

                return {
                    body: body,
                    sidebar: sidebar
                }
            },
        },

        methods: {
            submit() {
                this.form.patch('/api/collections/' + this.collection.slug + '/' + this.entry.id).then((response) => {
                    toast('Entry saved successfully', 'success')

                    this.$router.push('/collections/' + this.collection.slug)
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },
        },

        beforeRouteEnter(to, from, next) {
            getEntry(to.params.collection, to.params.id, (error, entry, matrix, fields) => {
                if (error) {
                    next((vm) => {
                        vm.$router.push('/collections/' + vm.$router.currentRoute.params.collection)

                        toast(error.toString(), 'danger')
                    })
                } else {
                    next((vm) => {
                        vm.collection = matrix
                        vm.entry = entry
                        vm.form = new Form(fields, true)

                        vm.$emit('updateHead')
                    })
                }
            })
        },

        beforeRouteUpdate(to, from, next) {
            getEntry(to.params.collection, to.params.id, (error, entry, matrix, fields) => {
                if (error) {
                    this.$router.push('/collections/' + this.$router.currentRoute.params.collection)

                    toast(error.toString(), 'danger')
                } else {
                    this.collection = matrix
                    this.entry = entry
                    this.form = new Form(fields, true)

                    this.$emit('updateHead')
                }
            })

            next()
        }
    }

    export function getEntry(collection, id, callback) {
        axios.get('/api/collections/' + collection + '/' + id).then((response) => {
            let matrix = response.data.data.matrix
            let entry = response.data.data.entry
            let fields = {
                name: entry.name,
                slug: entry.slug,
                status: entry.status,
            }

            if (matrix.fieldset) {
                _.forEach(matrix.fieldset.sections, function(section) {
                    _.forEach(section.fields, function(field) {
                        fields[field.handle] = entry[field.handle]
                    })
                })
            }

            callback(null, entry, matrix, fields)
        }).catch(function(error) {
            callback(new Error('The requested entry could not be found'))
        })
    }
</script>