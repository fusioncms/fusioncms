import Vue from 'vue'

Vue.component('asset-fieldtype', () => import('../fieldtypes/Asset/Field'))
Vue.component('asset-fieldtype-settings', () => import('../fieldtypes/Asset/Settings'))

Vue.component('color-picker-fieldtype', () => import('../fieldtypes/ColorPicker/Field'))
Vue.component('color-picker-fieldtype-settings', () => import('../fieldtypes/ColorPicker/Settings'))

Vue.component('divider-fieldtype', () => import('../fieldtypes/Divider/Field'))
Vue.component('divider-fieldtype-settings', () => import('../fieldtypes/Divider/Settings'))

Vue.component('information-fieldtype', () => import('../fieldtypes/Information/Field'))
Vue.component('information-fieldtype-settings', () => import('../fieldtypes/Information/Settings'))

Vue.component('input-fieldtype', () => import('../fieldtypes/Input/Field'))
Vue.component('input-fieldtype-settings', () => import('../fieldtypes/Input/Settings'))

Vue.component('number-fieldtype', () => import('../fieldtypes/Number/Field'))
Vue.component('number-fieldtype-settings', () => import('../fieldtypes/Number/Settings'))

Vue.component('redactor-fieldtype', () => import('../fieldtypes/Redactor/Field'))
Vue.component('redactor-fieldtype-settings', () => import('../fieldtypes/Redactor/Settings'))

Vue.component('select-fieldtype', () => import('../fieldtypes/Select/Field'))
Vue.component('select-fieldtype-settings', () => import('../fieldtypes/Select/Settings'))

Vue.component('textarea-fieldtype', () => import('../fieldtypes/Textarea/Field'))
Vue.component('textarea-fieldtype-settings', () => import('../fieldtypes/Textarea/Settings'))

Vue.component('checkbox-fieldtype', () => import('../fieldtypes/Checkbox/Field'))
Vue.component('checkbox-fieldtype-settings', () => import('../fieldtypes/Checkbox/Settings'))

Vue.component('code-fieldtype', () => import('../fieldtypes/Code/Field'))
Vue.component('code-fieldtype-settings', () => import('../fieldtypes/Code/Settings'))

Vue.component('taxonomy-fieldtype', () => import('../fieldtypes/Taxonomy/Field'))
Vue.component('taxonomy-fieldtype-settings', () => import('../fieldtypes/Taxonomy/Settings'))

Vue.component('toggle-fieldtype', () => import('../fieldtypes/Toggle/Field'))
Vue.component('toggle-fieldtype-settings', () => import('../fieldtypes/Toggle/Settings'))

Vue.component('datetime-fieldtype', () => import('../fieldtypes/DateTime/Field'))
Vue.component('datetime-fieldtype-settings', () => import('../fieldtypes/DateTime/Settings'))

Vue.component('us-state-fieldtype', () => import('../fieldtypes/USState/Field'))
Vue.component('us-state-fieldtype-settings', () => import('../fieldtypes/USState/Settings'))

Vue.component('user-fieldtype', () => import('../fieldtypes/User/Field'))
Vue.component('user-fieldtype-settings', () => import('../fieldtypes/User/Settings'))

Vue.component('address-fieldtype', () => import('../fieldtypes/Address/Field'))
Vue.component('address-fieldtype-settings', () => import('../fieldtypes/Address/Settings'))

Vue.component('country-fieldtype', () => import('../fieldtypes/Country/Field'))
Vue.component('country-fieldtype-settings', () => import('../fieldtypes/Country/Settings'))

Vue.component('radio-fieldtype', () => import('../fieldtypes/Radio/Field'))
Vue.component('radio-fieldtype-settings', () => import('../fieldtypes/Radio/Settings'))

Vue.component('markdown-fieldtype', () => import('../fieldtypes/Markdown/Field'))
Vue.component('markdown-fieldtype-settings', () => import('../fieldtypes/Markdown/Settings'))

Vue.component('link-fieldtype', () => import('../fieldtypes/Link/Field'))
Vue.component('link-fieldtype-settings', () => import('../fieldtypes/Link/Settings'))
