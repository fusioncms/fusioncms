export default {
    namespaced: true,

    state: {
        version: null,
    },

    getters: {
        getVersion: (state) => {
            return state.version
        },
    },

    mutations: {
        setVersion: (state, version) => {
            state.version = version
        },
    },
}