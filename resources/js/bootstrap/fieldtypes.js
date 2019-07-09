import Vue from 'vue';

Vue.component('divider-fieldtype', () => import('../components/Fieldtypes/Divider/Field'))
Vue.component('divider-fieldtype-options', () => import('../components/Fieldtypes/Divider/Options'))

Vue.component('information-fieldtype', () => import('../components/Fieldtypes/Information/Field'))
Vue.component('information-fieldtype-options', () => import('../components/Fieldtypes/Information/Options'))

Vue.component('input-fieldtype', () => import('../components/Fieldtypes/Input/Field'))
Vue.component('input-fieldtype-options', () => import('../components/Fieldtypes/Input/Options'))

Vue.component('number-fieldtype', () => import('../components/Fieldtypes/Number/Field'))
Vue.component('number-fieldtype-options', () => import('../components/Fieldtypes/Number/Options'))

Vue.component('redactor-fieldtype', () => import('../components/Fieldtypes/Redactor/Field'))
Vue.component('redactor-fieldtype-options', () => import('../components/Fieldtypes/Redactor/Options'))

Vue.component('select-fieldtype', () => import('../components/Fieldtypes/Select/Field'))
Vue.component('select-fieldtype-options', () => import('../components/Fieldtypes/Select/Options'))

Vue.component('textarea-fieldtype', () => import('../components/Fieldtypes/Textarea/Field'))
Vue.component('textarea-fieldtype-options', () => import('../components/Fieldtypes/Textarea/Options'))

