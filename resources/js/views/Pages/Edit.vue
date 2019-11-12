<template>
    <div>
        <portal to="title" :key="matrix.handle">
            <app-title :icon="matrix.icon || 'pencil'">{{ matrix.name }}</app-title>
        </portal>
        
        <portal to="subtitle">{{ matrix.description }}</portal>

        <div class="row">
            <div class="content-container">
                <form @submit.prevent="submit" @input.once="form.onFirstChange">
                    <p-card v-if="sections.body.length > 0" :key="matrix.handle">
                        <!-- Loop through each section -->
                        <div v-for="(section, index) in sections.body" :key="section.handle">
                            <div class="row">
                                <div class="col xxl:text-right w-full xxl:w-1/3">
                                    <div class="xxl:mr-10 xxl:mb-0 mb-6">
                                        <h3>{{ section.name }}</h3>
                                        <p class="text-sm">{{ section.description }}</p>
                                    </div>
                                </div>

                                <div class="col w-full xxl:w-2/3">
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

                    </p-card>

                    <p-card v-else class="text-center">
                        <p>You should configure your Matrix Page with some sections and fields first <fa-icon class="text-emoji" :icon="['fas', 'hand-peace']"></fa-icon></p>

                        <router-link class="button items-center" :to="'/matrices/manage/' + matrix.id"><fa-icon :icon="['fas', 'atom-alt']" class="mr-2 text-sm"></fa-icon> Manage your page</router-link>
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
                            <router-link :to="{ name: 'dashboard' }" class="button mr-3">Go Back</router-link>

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
    </div>
</template>

<script>
    import Form from '../../forms/Form'

    export default {
        data() {
            return {
                matrix: {},
                page: {},
                form: {},
            }
        },

        computed: {
            sections() {
                let body = []
                let sidebar = []

                if (this.matrix.fieldset) {
                    body = _.filter(this.matrix.fieldset.sections, function(section) {
                        return section.placement == 'body'
                    })

                    sidebar = _.filter(this.matrix.fieldset.sections, function(section) {
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
                this.form.patch('/api/pages/' + this.matrix.id).then((response) => {
                    toast('Page saved successfully', 'success')

                    this.$router.push('/')
                }).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
            },

            getPage(to, from, next) {
                let vm = this

                axios.get('/api/pages/' + to.params.page).then((response) => {    
                    vm.matrix  = response.data.data.matrix
                    vm.page = response.data.data.page

                    let fields = {
                        status: vm.page.status,
                    }

                    _.forEach(vm.matrix.fields, function(value, handle) {
                        Vue.set(fields, handle, vm.page[handle])
                    })

                    vm.form = new Form(fields, true)
                })
            }
        },

        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.getPage(to, from, next)
            })
        },

        beforeRouteUpdate(to,from,next) {
            this.getPage(to, from, next)
            
            next()
        }
    }
</script>