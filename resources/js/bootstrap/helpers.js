import store from '../vuex'
import _ from 'lodash'

window.proton = function() {
    return Vue.prototype.$proton
}

window.toast = function (message, level) {
    proton().$emit('toast', {
        message,
        level
    })
}