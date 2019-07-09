window.Vue = require('vue')
window.Proton = require('@efelle/proton')

require('./axios.js')
require('./components.js')
require('./fieldtypes.js')
require('./fontawesome.js')
require('./helpers.js')
require('./moment.js')
require('./nprogress.js')
require('./vueportal.js')

if (window.environment === 'production') {
    console.log('/*')
    console.log(' * FusionCMS')
    console.log(' * Oh, hello there!')
    console.log(' *')
    console.log(' * Author:    efelle creative')
    console.log(' * Website:   https://efelle.com')
    console.log(' * Copyright: 2019')
    console.log(' */')
}
