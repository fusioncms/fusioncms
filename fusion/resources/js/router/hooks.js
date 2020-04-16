import store from '../vuex'
import Cookies   from 'js-cookie'
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

    // Default sidebar to open..
    if (Cookies.get('fusion_sidebar') == undefined) {
        Cookies.set('fusion_sidebar', 'open')
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
