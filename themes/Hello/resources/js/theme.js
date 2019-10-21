
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap/'


const app = new Vue({
    el: '#app',

    data: {
        isReady: false,
    },

    mounted() {
        this.$nextTick(function() {
            this.isReady = true
        })
    }
});