import directive from './v-toast'

const Plugin = {
    install(Vue) {
        Vue.directive('toast', directive)
    },
    directive,
}

export default Plugin