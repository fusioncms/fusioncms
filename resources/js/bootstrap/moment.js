import Vue from 'vue'
import moment from 'moment'
import 'moment-timezone'

Vue.mixin({
    methods: {
        moment() {
            return moment()
        }
    }
})