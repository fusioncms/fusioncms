import Vue from 'vue';

Vue.component('divider-fieldtype', () => import('../components/Fieldtypes/Divider/Field'))
Vue.component('divider-fieldtype-settings', () => import('../components/Fieldtypes/Divider/Settings'))

Vue.component('information-fieldtype', () => import('../components/Fieldtypes/Information/Field'))
Vue.component('information-fieldtype-settings', () => import('../components/Fieldtypes/Information/Settings'))

Vue.component('input-fieldtype', () => import('../components/Fieldtypes/Input/Field'))
Vue.component('input-fieldtype-settings', () => import('../components/Fieldtypes/Input/Settings'))

Vue.component('number-fieldtype', () => import('../components/Fieldtypes/Number/Field'))
Vue.component('number-fieldtype-settings', () => import('../components/Fieldtypes/Number/Settings'))

Vue.component('redactor-fieldtype', () => import('../components/Fieldtypes/Redactor/Field'))
Vue.component('redactor-fieldtype-settings', () => import('../components/Fieldtypes/Redactor/Settings'))

Vue.component('select-fieldtype', () => import('../components/Fieldtypes/Select/Field'))
Vue.component('select-fieldtype-settings', () => import('../components/Fieldtypes/Select/Settings'))

Vue.component('textarea-fieldtype', () => import('../components/Fieldtypes/Textarea/Field'))
Vue.component('textarea-fieldtype-settings', () => import('../components/Fieldtypes/Textarea/Settings'))

Vue.component('checkbox-fieldtype', () => import('../components/Fieldtypes/Checkbox/Field'))
Vue.component('checkbox-fieldtype-settings', () => import('../components/Fieldtypes/Checkbox/Settings'))