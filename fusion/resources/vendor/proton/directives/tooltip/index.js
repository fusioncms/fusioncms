import directive from './v-tooltip'

const Plugin = {
    install(Vue) {
        Vue.directive('tooltip', directive)
    },
    directive,
}

export default Plugin