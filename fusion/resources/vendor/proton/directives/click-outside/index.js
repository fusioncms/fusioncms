import directive from './v-click-outside'

const Plugin = {
    install(Vue) {
        Vue.directive('click-outside', directive)
    },
    directive,
}

export default Plugin