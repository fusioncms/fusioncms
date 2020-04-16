export default {
    namespaced: true,

    state: {
        sections: {},
        settings: {},
    },

    getters: {
        getSection: (state) => (key) => {
            return state.sections[key]
        },

        getSections: (state) => {
            return state.sections
        },

        getSectionGroups: (state) => {
            return _.groupBy(state.sections, 'group')
        },
        
        getSetting: (state) => (key) => {
            return state.settings[key]
        },

        getSettings: (state) => {
            return state.settings
        },
    },

    mutations: {
        setSection (state, { handle, section }) {
            state.sections[handle] = section

            // update section's setitngs
            _.each(section.items, (item) => {
                state.settings[handle + '.' + item.handle] = item.value
            })
        },

        setSections (state, payload) {
            state.sections = _.keyBy(payload, 'handle')
        },

        setSettings (state, payload) {
            let items = _.map(payload, (section) => {
                return _.map(section.items, (item) => {
                    return {
                        handle: section.handle + '.' + item.handle,
                        value:  item.value || item.default
                    }
                })
            })

            // convert to object
            items = _.flatten(items)
            items = _.keyBy(items, 'handle')
            items = _.mapValues(items, 'value')

            state.settings = items
        },
    },

    actions: {
        setSection(context, payload) {
            context.commit('setSection', payload)
        },

        fetchSettings (context) {
            axios.get('/api/settings')
                .then(response => {
                    context.commit('setSections', response.data.data)
                    context.commit('setSettings', response.data.data)
                })
                .catch(error => {
                    console.error('There was an error fetching the system settings...')
                    console.error(error.message)
                })
        },
    },
}