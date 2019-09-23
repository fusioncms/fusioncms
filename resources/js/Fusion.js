import router from './router'
import store from './vuex'
import Vue from 'vue'

export default class Fusion {
    constructor(config) {
        this.config = config
        this.router = router
        this.store = store
        this.bus = new Vue
        this.vue = null

        Vue.prototype.$bus = this.bus

        Vue.mixin({
            methods: {
                setting(key) {
                    return this.$store.getters['settings/getSettingByKey'](key)
                },
            }
        })

        this.bootingCallbacks = []
        this.bootedCallbacks = []
    }

    booting(callback) {
        this.bootingCallbacks.push(callback)
    }

    boot() {
        this.bootingCallbacks.forEach((callback) => {
            callback(this.router, this.store)
        })

        this.vue = new Vue({
            el: '#gravity',

            router: this.router,

            store: this.store,
        })

        this.bootedCallbacks.forEach((callback) => {
            callback(this.vue)
        })
    }

    booted(callback) {
        this.bootedCallbacks.push(callback)
    }
}