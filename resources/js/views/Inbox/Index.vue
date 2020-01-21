<template>
    <div class="h-full max-h-full">
        <portal to="title">
            <app-title icon="inbox">Inbox</app-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'forms' }" class="button">Manage Forms</router-link>
        </portal>

        <div class="row h-full">
            <div class="side-container" style="margin-bottom: 0 !important;">
                <div class="card h-full">
                    <div class="card__body">
                        <div class="list">
                            <div class="list" v-if="forms.length == 0">
                                <span class="list--separator pt-0">Inboxes</span>

                                <span class="px-2 text-gray-600 leading-loose">No forms available.</span>
                            </div>

                            <div class="list" v-else>
                                <span class="list--separator pt-0">Forms</span>
                                <a v-for="form in forms" :key="form.handle" href="#" class="list--item leading-loose" :class="{'router-link-active': isFormSelected(form)}" @click.prevent="selectForm(form)"><fa-icon :icon="['fas', 'inbox']" fixed-width class="mr-2"></fa-icon> {{ form.name }}</a>
                            </div>

                            <!-- <span class="list--separator">Folders</span>
                            <a href="#" class="list--item leading-loose" :class="{'router-link-active': inbox == 'all'}" @click.prevent="inbox = 'all'"><fa-icon :icon="['fas', 'inbox']" fixed-width class="mr-2"></fa-icon> Inbox</a>
                            <a href="#" class="list--item leading-loose" :class="{'router-link-active': inbox == 'starred'}" @click.prevent="inbox = 'starred'"><fa-icon :icon="['fas', 'star']" fixed-width class="mr-2"></fa-icon> Starred</a>
                            <a href="#" class="list--item leading-loose" :class="{'router-link-active': inbox == 'closed'}" @click.prevent="inbox = 'closed'"><fa-icon :icon="['fas', 'check-circle']" fixed-width class="mr-2"></fa-icon> Closed</a>
                            <a href="#" class="list--item leading-loose" :class="{'router-link-active': inbox == 'archived'}" @click.prevent="inbox = 'archived'"><fa-icon :icon="['fas', 'history']" fixed-width class="mr-2"></fa-icon> Archived</a>
                            <a href="#" class="list--item leading-loose" :class="{'router-link-active': inbox == 'trash'}" @click.prevent="inbox = 'trash'"><fa-icon :icon="['fas', 'trash-alt']" fixed-width class="mr-2"></fa-icon> Trash</a> -->
                        </div>
                    </div>
                </div>
            </div>

            <div class="content-container" style="margin-bottom: 0 !important;">
                <div class="card h-full flex flex-1">
                    <div class="flex w-full">
                        <div class="border-r leading-none" style="width: 350px;" id="responses">
                            <a href="#" @click.prevent="select(response)" class="border-r-4 block hover:bg-gray-100 text-gray-700 hover:text-gray-900" v-for="response in responses" :key="response.id" :class="{'border-primary-400': isSelected(response), 'border-gray-200': ! isSelected(response)}">
                                <div class="pl-3 pr-4 py-6 border-b border-gray-200">
                                    <div class="flex">

                                        <div class="mr-3 flex flex-col">
                                            <fa-icon :icon="['far', 'star']" fixed-width class="mb-2"></fa-icon>
                                            <fa-icon :icon="['far', 'check-circle']" fixed-width></fa-icon>
                                        </div>

                                        <div class="w-full">
                                            <div class="flex justify-between items-center mb-2">
                                                <b>{{ response.identifiable_email_address }}</b>
                                                <span class="block text-gray-600 text-sm">{{ $moment(response.created_at).format('L') }}</span>
                                            </div>

                                            <div class="text-gray-800">
                                                Re: {{ response.form.name }}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>

                            <div class="p-6 border-gray-200 border-r-4 flex justify-center items-center" v-if="loading">
                                <fa-icon :icon="['fas', 'circle-notch']" class="fa-spin mr-3"></fa-icon> Loading responses...
                            </div>
                        </div>

                        <div class="leading-none flex-1" v-if="response.id">
                            <div class="flex flex-row-reverse border-b py-4 px-6 justify-between items-center">
                                <div>
                                    <!-- <fa-icon :icon="['fas', 'check-circle']" fixed-width class="mr-3"></fa-icon>
                                    <fa-icon :icon="['fas', 'star']" fixed-width class="mr-3"></fa-icon>
                                    <fa-icon :icon="['fas', 'history']" fixed-width class="mr-3"></fa-icon>
                                    <fa-icon :icon="['fas', 'trash-alt']" fixed-width></fa-icon> -->
                                </div>

                                <div class="text-gray-500 flex items-center">
                                    <fa-icon :icon="['fas', 'server']" fixed-width></fa-icon> <span class="text-xs font-mono ml-2">{{ response.identifiable_ip_address }}</span>
                                </div>
                            </div>

                            <div class="flex border-b p-6 tracking-wide justify-between items-center">
                                <div class="flex flex-col text-lg">
                                    <b class="mb-2">{{ response.identifiable_email_address }}</b>
                                    <span>Re: {{ response.form.name }}</span>
                                </div>

                                <div class="text-sm">
                                    {{ $moment(response.created_at).format('LLL') }}
                                </div>
                            </div>
                            
                            <div class="p-6 leading-loose">
                                <div class="form__group" v-for="field in fields" :key="field.handle">
                                    <label :for="field.handle" class="form__label">{{ field.name }}</label>
                                    <div :id="field.handle">
                                        <p>{{ response[field.handle] }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="leading-none flex-1 p-6" v-else>
                            <p>Select a response to get started</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { throttle } from 'lodash'

    export default {
        head: {
            title() {
                return {
                    inner: 'Inbox'
                }
            }
        },

        data() {
            return {
                page: 1,
                lastPage: null,
                forms: [],
                responses: [],
                response: {},
                fields: [],
                loading: false,
                selected: {
                    id: null,
                    form_id: null,
                },
            }
        },

        watch: {
            page(value) {
                this.fetchAndAppendResponses()
            },
        },

        methods: {
            select(response) {
                this.selected = {
                    id: response.id,
                    form_id: response.form.id
                }

                this.fetchResponse()
            },

            reset() {
                this.responses = []
                this.response = {}
                this.fields = []
                this.page = 1
                this.lastPage = 0
                this.selected = {
                    id: null,
                    form_id: null,
                }
            },

            selectForm(form) {
                this.form = form

                this.fetchResponses()
            },

            isSelected(response) {
                return this.selected.id == response.id && this.selected.form_id == response.form.id
            },

            isFormSelected(form) {
                if (this.form) {
                    return this.form.id == form.id
                }

                return false
            },

            fetchAndAppendResponses() {
                axios.get('/api/forms/' + this.form.slug + '/responses?page=' + this.page).then((responses) => {
                    this.responses = this.responses.concat(responses.data.data)
                    this.loading = false
                })
            },

            fetchResponses() {
                this.loading = true
                this.reset()
                
                axios.get('/api/forms/' + this.form.slug + '/responses?page=' + this.page).then((responses) => {
                    this.responses = this.responses.concat(responses.data.data)
                    this.lastPage = responses.data.meta.last_page
                    this.loading = false

                    if (this.responses.length) {
                        this.select(_.head(this.responses))
                    }
                })
            },

            fetchResponse() {
                this.response = _.find(this.responses, (response) => {
                    return response.id == this.selected.id && response.form.id == this.selected.form_id
                })

                this.fetchFields()
            },

            fetchFields() {
                this.fields  = []
                let sections = this.response.form.fieldset.sections

                _.each(sections, (section) => {
                    _.each(section.fields, (field) => {
                        this.fields.push(field)
                    })
                })
            },

            loadMoreResults: throttle(function(event) {
                if (this.shouldLoadMoreResults()) {
                    this.loading = true
                    this.page++
                }
            }, 300),

            shouldLoadMoreResults() {
                if (this.page == this.lastPage || this.loading) {
                    return false
                }

                let el = document.getElementById('responses')

                let heightOfResponses = el.clientHeight
                let responsesDistanceFromWindowTop = el.getBoundingClientRect().top

                return (
                    window.pageYOffset >=
                    (responsesDistanceFromWindowTop + heightOfResponses) * 0.3
                )
            }
        },

        mounted() {
            window.addEventListener('scroll', this.loadMoreResults)
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/forms')
            ]).then(axios.spread(function (forms, responses) {
                next(function(vm) {
                    vm.forms = forms.data.data

                    if (vm.forms.length) {
                        vm.selectForm(_.head(vm.forms))
                    }
                })
            }))
        },
    }
</script>