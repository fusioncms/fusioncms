<template>
    <div class="h-full max-h-full">
        <portal to="title">
            <app-title icon="inbox">Inbox</app-title>
        </portal>

        <portal to="actions">
            <router-link :to="{ name: 'forms' }" class="button">Manage Forms</router-link>
        </portal>

        <div class="row h-full">
            <filter-sidebar></filter-sidebar>

            <div class="content-container" style="margin-bottom: 0 !important;">
                <div class="card h-full flex flex-1">
                    <response-list></response-list>

                    <response-view></response-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash'
    import store from '../../vuex'
    import ResponseList from './ResponseList.vue'
    import ResponseView from './ResponseView.vue'
    import FilterSidebar from './FilterSidebar.vue'

    export default {
        head: {
            title() {
                return {
                    inner: 'Inbox'
                }
            }
        },

        components: {
            'response-list': ResponseList,
            'response-view': ResponseView,
            'filter-sidebar': FilterSidebar,
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

            isSelected(response) {
                return this.selected.id == response.id && this.selected.form_id == response.form.id
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
        },

        beforeRouteEnter(to, from, next) {
            store.dispatch('inbox/fetchForms').then((response) => {
                if (store.getters['inbox/getForms'].length) {
                    store.dispatch('inbox/selectForm', _.head(store.getters['inbox/getForms']))
                }

                next()
            })
        },
    }
</script>