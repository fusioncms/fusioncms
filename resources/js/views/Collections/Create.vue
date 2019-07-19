<template>
    <div>
        <portal to="title">
            <app-title :icon="collection.icon">Create {{ singular }}</app-title>
        </portal>
        
        <portal to="subtitle">{{ collection.description }}</portal>

        <div class="row">
            <div class="content-container">
                <form @submit.prevent="submit">
                    <p-card v-if="sections.body.length > 0">
                        <!-- Loop through each section -->
                        <div v-for="(section, index) in sections.body" :key="section.handle">
                            <div class="row">
                                <div class="col xxl:text-right w-full xxl:w-1/3">
                                    <div class="xxl:mr-10">
                                        <h3>{{ section.name }}</h3>
                                        <p class="text-sm">{{ section.description }}</p>
                                    </div>
                                </div>

                                <div class="col w-full xxl:w-2/3">
                                    <!-- Loop through each section field -->
                                    <div v-for="field in section.fields" :key="field.handle" class="form__group">
                                        <component
                                            :is="field.type.handle + '-fieldtype'"
                                            :field="field"
                                            v-model="form[field.handle]"
                                        >
                                        </component>
                                    </div>
                                </div>
                            </div>
                        
                            <hr v-if="index !== sections.body.length - 1">
                        </div>

                    </p-card>

                    <p-card v-else class="text-center">
                        <p>You should configure your Matrix Page with some sections and fields first <fa-icon class="text-emoji" :icon="['fas', 'hand-peace']"></fa-icon></p>

                        <router-link class="button items-center" :to="'/matrices/manage/' + collection.id"><fa-icon :icon="['fas', 'atom-alt']" class="mr-2 text-sm"></fa-icon> Manage your page</router-link>
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
                            <router-link :to="{ name: 'collections.index', params: {collection: collection.handle} }" class="button mr-3">Go Back</router-link>

                            <button type="submit" @click.prevent="submit" class="button button--primary">Save</button>
                        </portal>
                    </p-card>

                    <p-card v-for="(section) in sections.sidebar" :key="section.handle" class="mt-6">
                        <h3>{{ section.name }}</h3>
                        <p class="text-sm">{{ section.description }}</p>

                        <div class="w-full">
                            <!-- Loop through each section field -->
                            <div v-for="field in section.fields" :key="field.handle" class="form__group">
                                <component
                                    :is="field.type.handle + '-fieldtype'"
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
    </div>
</template>

<script>
    import pluralize from 'pluralize'
    import Form from '../../forms/Form'

    export default {
        data() {
            return {
                collection: {},
                form: {},
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

            singular() {
                if (this.collection) {
                    return pluralize.singular(this.collection.name)
                }

                return ''
            },
        },

        methods: {
            submit() {
                console.log('submit')

                // this.form.post('/api/collections/' + this.collection.id + '/entries').then((response) => {
                //     toast('Entry saved successfully', 'success')
                // }).catch((response) => {
                //     toast(response.response.data.message, 'failed')
                // })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.get('/api/matrices/slug/' + to.params.collection).then((response) => {
                next(function(vm) {
                    vm.collection = response.data.data

                    let fields = {
                        status: 1,
                    }

                    _.forEach(vm.collection.fields, function(value, handle) {
                        Vue.set(fields, handle, vm.collection[handle])
                    })

                    vm.form = new Form(fields)
                })
            })
        },
    }
</script>