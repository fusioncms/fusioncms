export default {
    namespaced: true,

    state: {
        navigation: [],
    },

    getters: {
        getNavigation: (state) => {
            return state.navigation
        },
    },

    mutations: {
        SET_NAVIGATION: (state, links) => {
            state.navigation = links
        },
    },

    actions: {
        fetchAdminNavigation: (context) => {
            axios.get('/api/admin/navigation')
                .then(response => {
                    context.commit('SET_NAVIGATION', response.data.data)
                })
                .catch(error => {
                    console.log('There was an error fetching the navigation...')
                })
        },
    },
}