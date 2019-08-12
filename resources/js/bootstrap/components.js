import Vue from 'vue';

// Layouts
Vue.component('admin-layout', require('../layouts/Admin').default)
Vue.component('error-layout', require('../layouts/Error').default)
Vue.component('default-layout', require('../layouts/Default').default)

// App
Vue.component('app', require('../components/App').default)
Vue.component('app-title', require('../components/Title').default)
Vue.component('redactor', require('../components/Redactor').default)
Vue.component('tos-modal', require('../components/Modals/TOSModal').default)
Vue.component('privacy-modal', require('../components/Modals/PrivacyModal').default)
Vue.component('analytics-overview', require('../components/AnalyticsOverview').default)

// File Manager
Vue.component('p-img', require('../components/Image').default)
Vue.component('p-upload', require('../components/Upload').default)
Vue.component('file-manager-file', require('../components/FileManager/File').default)
Vue.component('file-manager', require('../components/FileManager/FileManager').default)
Vue.component('new-folder-modal', require('../components/FileManager/NewFolderModal').default)
Vue.component('file-manager-directory', require('../components/FileManager/Directory').default)
Vue.component('delete-files-modal', require('../components/FileManager/DeleteFilesModal').default)

// Matrix
Vue.component('field-editor', require('../components/FieldEditor').default)
Vue.component('field-builder', require('../components/FieldBuilder').default)
Vue.component('section-builder', require('../components/SectionBuilder').default)