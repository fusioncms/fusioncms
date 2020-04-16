import directive from './v-modal'

const Plugin = {
    install(Vue) {
        Vue.directive('modal', directive)
    },
    directive,
}

export default Plugin