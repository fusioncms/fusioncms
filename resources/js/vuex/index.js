import Vuex from 'vuex'
import Vue from 'vue'
import auth from './auth'
import user from './user'
import settings from './settings'
import mapper from './import-mapper'
import navigation from './navigation'
import filemanager from './filemanager'
import form from './form'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        user,
        mapper,
        settings,
        navigation,
        filemanager,
        form
    },
})
