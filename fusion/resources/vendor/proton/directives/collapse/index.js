import directive from './v-collapse'

const Plugin = {
    install(Vue) {
        Vue.directive('collapse', directive)
    },
    directive,
}

export default Plugin