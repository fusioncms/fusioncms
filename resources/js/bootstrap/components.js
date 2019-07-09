import Vue from 'vue';

Vue.component('app', require('../components/App').default)
Vue.component('admin-layout', require('../layouts/Admin').default)
Vue.component('default-layout', require('../layouts/Default').default)
Vue.component('error-layout', require('../layouts/Error').default)

Vue.component('app-title', require('../components/Title').default)
Vue.component('redactor', require('../components/Redactor').default)
Vue.component('section-builder', require('../components/SectionBuilder').default)
Vue.component('field-builder', require('../components/FieldBuilder').default)
Vue.component('analytics-overview', require('../components/AnalyticsOverview').default)

Vue.component('tos-modal', require('../components/Modals/TOSModal').default)
Vue.component('privacy-modal', require('../components/Modals/PrivacyModal').default)