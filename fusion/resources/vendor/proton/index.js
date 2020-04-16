import * as RenderlessComponents from './renderless'
import * as Components from './components'
import * as Directives from './directives'
import EventBusPlugin from './support/eventbus'

const moment = require('moment')

const Proton = {
    install(Vue) {
        Vue.use(EventBusPlugin)

        Vue.prototype.moment = function() {
            return moment
        }

        Object.values(RenderlessComponents).forEach((RenderlessComponent) => {
            Vue.use(RenderlessComponent)
        })

        Object.values(Components).forEach((Component) => {
            Vue.use(Component)
        })

        Object.values(Directives).forEach((Directive) => {
            Vue.use(Directive)
        })
    }
}

// Automatic install Proton if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Proton)
}

export default Proton
