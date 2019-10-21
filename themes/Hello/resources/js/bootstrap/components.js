import Vue from 'vue'

Vue.component('example-component', require('../components/ExampleComponent.vue'));
Vue.component('product', require('../components/Product.vue').default);
Vue.component('demo-button', require('../components/DemoButton.vue').default);
Vue.component('personal-token', require('../components/PersonalToken.vue').default);
