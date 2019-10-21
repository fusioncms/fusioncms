import _ from 'lodash'

window.Vue = require('vue')
window.Proton = require('@efelle/proton')

window.proton = function() {
    return Vue.prototype.$proton
}

require('./axios.js')
require('./components.js')
require('./fontawesome.js')