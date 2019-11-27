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
Vue.component('confirm-modal', require('../components/Modals/ConfirmModal').default)
Vue.component('settings-modal', require('../components/Modals/SettingsModal').default)
Vue.component('analytics-overview', require('../components/AnalyticsOverview').default)
Vue.component('recent-activity', require('../components/RecentActivity').default)
Vue.component('recent-news', require('../components/RecentNews').default)
Vue.component('quicklinks', require('../components/Quicklinks').default)
Vue.component('icon-picker', require('../components/IconPicker').default)
Vue.component('p-frame', require('../components/Frame').default)
Vue.component('p-autocomplete', require('../components/Autocomplete').default)
Vue.component('cron-scheduler', require('../components/CronScheduler').default)

// File Manager
Vue.component('file-manager-file', require('../components/FileManager/File').default)
Vue.component('file-manager', require('../components/FileManager/FileManager').default)
Vue.component('new-folder-modal', require('../components/FileManager/NewFolderModal').default)
Vue.component('file-manager-directory', require('../components/FileManager/Directory').default)
Vue.component('delete-file-modal', require('../components/FileManager/DeleteFileModal').default)
Vue.component('delete-selected-files-modal', require('../components/FileManager/DeleteSelectedFilesModal').default)

// Matrix
Vue.component('field-editor', require('../components/FieldEditor').default)
Vue.component('field-builder', require('../components/FieldBuilder').default)
Vue.component('section-builder', require('../components/SectionBuilder').default)