import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'
import form from './form'
import user from './user'
import inbox from './inbox'
import fusion from './fusion'
import settings from './settings'
import mapper from './import-mapper'
import navigation from './navigation'
import filemanager from './filemanager'
import usermanager from './usermanager'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        auth,
        user,
        form,
        inbox,
        fusion,
        mapper,
        settings,
        navigation,
        filemanager,
        usermanager,
    },
})
