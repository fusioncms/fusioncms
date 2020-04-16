import Cookies from 'js-cookie'

export default {
    namespaced: true,

    state: {
        isAuthorized: false,
        requiresAuth: null
    },

    getters: {
        isAuthorized: state => state.isAuthorized,
        requiresAuth: state => state.requiresAuth
    },

    mutations: {
        setIsAuthorized: (state, isAuthorized) => {
            state.isAuthorized = isAuthorized
        },

        setRequiresAuth: (state, requiresAuth) => {
            state.requiresAuth = requiresAuth
        }
    },

    actions: {
        authorize: ({ state, rootState, commit }, payload) => {
            const session      = Cookies.get('XSRF-TOKEN')  // Is session still alive?
            const user         = rootState.user.user        // Has `user` been set?
            const isAuthorized = !!session && !!user
            
            commit('setIsAuthorized', isAuthorized)
            
            // ...for guests only.
            if (state.requiresAuth == true && !state.isAuthorized) {
                Fusion.router.push(payload.guestNext)
            }

            // ...for admins only.
            if (state.requiresAuth == false && state.isAuthorized) {
                Fusion.router.push(payload.adminNext)
            }
        }
    }
}