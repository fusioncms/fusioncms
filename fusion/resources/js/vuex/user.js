export default {
    namespaced: true,

    state: {
        user: null
    },

    getters: {
        getUser: state => state.user
    },

    mutations: {
        setUser: (state, user) => {
            state.user = user
        }
    },

    actions: {
        //
    }
}