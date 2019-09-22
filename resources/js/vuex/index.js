import Vuex from 'vuex'
import Vue from 'vue'
import auth from './auth'
import user from './user'
import settings from './settings'
import navigation from './navigation'
import filemanager from './filemanager'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        user,
        settings,
        navigation,
        filemanager,
    },
})
