<template>
    <div>
        <portal to="title">
            <app-title icon="inbox">Inbox</app-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'forms' }" class="button">Manage Forms</router-link>
        </portal>

        <div class="row">
            <div class="side-container">
                <p-card>
                    <div class="list">
                        <span class="list--separator pt-0">Inboxes</span>
                        <a href="#" class="list--item leading-loose" :class="{'router-link-active': inbox == 'all'}" @click.prevent="inbox = 'all'"><fa-icon :icon="['fas', 'inbox']" fixed-width class="mr-2"></fa-icon> Inbox</a>
                        <a href="#" class="list--item leading-loose" :class="{'router-link-active': inbox == 'starred'}" @click.prevent="inbox = 'starred'"><fa-icon :icon="['fas', 'star']" fixed-width class="mr-2"></fa-icon> Starred</a>
                        <a href="#" class="list--item leading-loose" :class="{'router-link-active': inbox == 'closed'}" @click.prevent="inbox = 'closed'"><fa-icon :icon="['fas', 'check-circle']" fixed-width class="mr-2"></fa-icon> Closed</a>
                        <a href="#" class="list--item leading-loose" :class="{'router-link-active': inbox == 'archived'}" @click.prevent="inbox = 'archived'"><fa-icon :icon="['fas', 'history']" fixed-width class="mr-2"></fa-icon> Archived</a>
                        <a href="#" class="list--item leading-loose" :class="{'router-link-active': inbox == 'trash'}" @click.prevent="inbox = 'trash'"><fa-icon :icon="['fas', 'trash-alt']" fixed-width class="mr-2"></fa-icon> Trash</a>
                    </div>

                    <div class="list" v-if="forms.length == 0">
                        <span class="list--separator">Forms</span>

                        <span class="px-2 text-gray-600 leading-loose">No forms available.</span>
                    </div>

                    <div class="list" v-else>
                        <span class="list--separator">Forms</span>

                        <a href="#" class="list--item leading-loose" v-for="form in forms" :key="form.handle" :class="{'router-link-active': inbox == 'form-' + form.slug}" @click.prevent="inbox = 'form-' + form.slug"><fa-icon :icon="['fas', 'paper-plane']" fixed-width class="mr-2"></fa-icon> {{ form.name }}</a>
                    </div>
                </p-card>
            </div>

            <div class="content-container">
                <p-card no-body>
                    <div class="flex">
                        <div class="border-r leading-none" style="width: 350px;">
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
                                                <span class="block text-gray-600 text-sm">1 day ago</span>
                                            </div>

                                            <div>
                                                <span class="block text-gray-800">Re: {{ response.form.name }}</span>
                                                <!-- <span class="block text-gray-500 leading-tight text-sm">Lorem ipsum dolor sit amet consectetur elit adipisicing. Voluptates nostrum ut labore et...</span> -->
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="leading-none flex-1" v-if="response.id">
                            <div class="flex flex-row-reverse border-b py-4 px-6 justify-between items-center">
                                <div>
                                    <fa-icon :icon="['fas', 'check-circle']" fixed-width class="mr-3"></fa-icon>
                                    <fa-icon :icon="['fas', 'star']" fixed-width class="mr-3"></fa-icon>
                                    <fa-icon :icon="['fas', 'history']" fixed-width class="mr-3"></fa-icon>
                                    <fa-icon :icon="['fas', 'trash-alt']" fixed-width></fa-icon>
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
                                    1 day ago
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
                </p-card>
            </div>
        </div>
    </div>
</template>

<script>
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
                inbox: 'all',
                forms: [],
                responses: [],
                response: {},
                fields: [],
                selected: {
                    id: null,
                    form_id: null,
                },
            }
        },

        methods: {
            select(response) {
                this.selected = {
                    id: response.id,
                    form_id: response.form.id
                }

                this.fetchResponse()
            },

            isSelected(response) {
                return this.selected.id == response.id && this.selected.form_id == response.form.id
            },

            fetchResponse() {
                console.log('fetching response...')

                let form = _.find(this.forms, (form) => {
                    return form.id == this.selected.form_id
                })

                console.log(form)

                axios.get('/api/forms/' + form.slug + '/responses/' + this.selected.id).then((response) => {
                    this.response = response.data.data
                    this.fields   = []

                    let sections = this.response.form.fieldset.sections

                    _.each(sections, (section) => {
                        _.each(section.fields, (field) => {
                            this.fields.push(field)
                        })
                    })

                    console.log(this.fields)
                })

                    // this.fields = _.flatMap(this.response, (response) => {
                    //     let fields = []

                    //     _.each(response.form.fieldset.sections, (section) => {
                    //         console.log('section', section)
                    //         // _.each(section.fields, (field) => {
                    //         //     fields.push(field)
                    //         // })
                    //     })

                    //     return fields
                    // })
                // })
            },
        },

        beforeRouteEnter(to, from, next) {
            axios.all([
                axios.get('/api/forms'),
                axios.get('/api/inbox')
            ]).then(axios.spread(function (forms, inbox) {
                next(function(vm) {
                    vm.forms = forms.data.data,
                    vm.responses = inbox.data.data
                })
            }))
        },
    }
</script>