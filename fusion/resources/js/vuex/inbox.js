import _ from 'lodash'

export default {
    namespaced: true,

    state: {
        page: 1,
        totalPages: 1,
        form: {},
        forms: [],
        fields: [],
        response: {},
        responses: [],
        loading: false,
    },

    getters: {
        getPage(state) {
            return state.page
        },

        getTotalPages(state) {
            return state.totalPages
        },

        getLoading(state) {
            return state.loading
        },

        getResponse(state) {
            return state.response
        },

        getResponses(state) {
            return state.responses
        },

        getForm(state) {
            return state.form
        },

        getForms(state) {
            return state.forms
        },

        getFields(state) {
            return state.fields
        },
    },

    mutations: {
        setPage(state, page) {
            state.page = page
        },

        setTotalPages(state, pages) {
            state.totalPages = pages
        },

        setLoading(state, loading) {
            state.loading = loading
        },

        setResponse(state, response) {
            state.response = response
        },

        setResponses(state, responses) {
            state.responses = responses
        },

        setForm(state, form) {
            state.form = form
        },

        setForms(state, forms) {
            state.forms = forms
        },

        setFields(state, fields) {
            state.fields = fields
        },
    },

    actions: {
        fetchForms(context) {
            return axios.get('/api/forms').then((response) => {
                context.commit('setForms', response.data.data)
            })
        },

        fetchResponses(context) {
            context.dispatch('isLoading')

            return axios.get('/api/forms/' + context.state.form.slug + '/responses?page=' + context.state.page).then((response) => {
                context.commit('setResponses', response.data.data)
                context.commit('setTotalPages', response.data.meta.last_page)

                context.dispatch('doneLoading')
            })
        },

        selectForm(context, form) {
            context.dispatch('reset')

            context.commit('setForm', form)

            context.dispatch('fetchResponses')
        },

        selectResponse(context, response) {
            context.commit('setResponse', response)

            context.dispatch('extractFields', response)
        },

        clearResponse(context) {
            context.commit('setResponse', {})
        },

        selectFirstResponse(context) {
            if (context.state.responses.length) {
                context.dispatch('selectResponse', _.head(context.state.responses))
            }
        },

        extractFields(context, response) {
            let fields = []
            let sections = response.form.fieldset.sections

            _.each(sections, (section) => {
                _.each(section.fields, (field) => {
                    fields.push(field)
                })
            })

            context.commit('setFields', fields)
        },

        isLoading(context) {
            context.commit('setLoading', true)
        },

        doneLoading(context) {
            context.commit('setLoading', false)
        },

        jumpPage(context, page) {
            context.commit('setPage', page)
        },

        nextPage(context) {
            if (context.state.page !== context.state.totalPages) {
                context.commit('setPage', context.state.page + 1)
            }
        },

        prevPage(context) {
            if (context.state.page !== 1) {
                context.commit('setPage', context.state.page - 1)
            }
        },

        firstPage(context) {
            context.commit('setPage', 1)
        },

        lastPage(context) {
            context.commit('setPage', context.state.totalPages)
        },

        reset(context) {
            context.commit('setPage', 1)
            context.commit('setTotalPages', 1)
            context.commit('setForm', {})
            context.commit('setFields', [])
            context.commit('setResponse', {})
            context.commit('setResponses', [])
            context.commit('setLoading', false)
        },
    }
}