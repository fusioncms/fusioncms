import store from '../vuex'
import NProgress from 'nprogress'

export const before = (to, from, next) => {
    NProgress.start()

    if ('requiresAuth' in to.meta) {
    	store.commit('auth/setRequiresAuth', to.meta.requiresAuth)
    }

    store.commit('form/setPreventNavigation', false)

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
