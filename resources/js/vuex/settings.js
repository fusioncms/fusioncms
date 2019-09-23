import _ from 'lodash'

export default {
    namespaced: true,

    state: {
        settings: [],
    },

    getters: {
        getSettings: (state) => {
            return state.settings
        },

        getSettingByKey: (state) => (key) => {
            return _.get(state.settings, key)
        }
    },

    mutations: {
        setSettings (state, payload) {
            let groups = _.flatten(_.values(payload))
            let items  = _.flatten(_.map(groups, (group) => {
                return group.items
            }))

            items = _.filter(items, (item) => {
                return ! _.isNull(item)
            })

            items = _.keyBy(items, 'handle')

            let settings = _.mapValues(items, 'value')

            state.settings = settings
        },
    },

    actions: {
        fetchSettings (context) {
            axios.get('/api/settings')
                .then(response => {
                    context.commit('setSettings', response.data.data)
                })
                .catch(error => {
                    console.error('There was an error fetching the system settings...')
                    console.error(error.message)
                })
        },
    },
}