import store from '../vuex'
import NProgress from 'nprogress'

export const before = (to, from, next) => {

    NProgress.start()

    if ('requiresAuth' in to.meta) {
    	store.commit('auth/setRequiresAuth', to.meta.requiresAuth)
    }

    // Don't disable navigation guard if only the query or hash is changing
    if (to.path != from.path) {
        store.commit('form/setPreventNavigation', false)
    }

    next()
}

export const resolve = (to, from, next) => {
    if (store.state.auth.isAuthorized) {
        store.dispatch('navigation/fetchAdminNavigation')
        store.dispatch('settings/fetchSettings')
    }
    
    next()
}

export const after = () => {
    NProgress.done()

    return
}
