import Vue from 'vue';

// Layouts
Vue.component('admin-layout', require('../layouts/Admin').default)
Vue.component('error-layout', require('../layouts/Error').default)
Vue.component('default-layout', require('../layouts/Default').default)

// App
Vue.component('app', require('../components/App').default)
Vue.component('app-title', require('../components/Title').default)
Vue.component('redactor', require('../components/Redactor').default)
Vue.component('tos-modal', require('../components/modals/TOSModal').default)
Vue.component('privacy-modal', require('../components/modals/PrivacyModal').default)
Vue.component('confirm-modal', require('../components/modals/ConfirmModal').default)
Vue.component('settings-modal', require('../components/modals/SettingsModal').default)
Vue.component('analytics-overview', require('../components/AnalyticsOverview').default)
Vue.component('recent-activity', require('../components/RecentActivity').default)
Vue.component('recent-news', require('../components/RecentNews').default)
Vue.component('quicklinks', require('../components/Quicklinks').default)
Vue.component('icon-picker', require('../components/IconPicker').default)
Vue.component('p-frame', require('../components/Frame').default)
Vue.component('p-autocomplete', require('../components/Autocomplete').default)
Vue.component('cron-scheduler', require('../components/CronScheduler').default)
Vue.component('form-container', require('../components/FormContainer').default)

// File Manager
Vue.component('file-manager', require('../components/file-manager/FileManager').default)
Vue.component('new-folder-modal', require('../components/file-manager/modals/NewFolderModal').default)
Vue.component('move-file-modal', require('../components/file-manager/modals/MoveFileModal').default)
Vue.component('replace-file-modal', require('../components/file-manager/modals/ReplaceFileModal').default)
Vue.component('rename-file-modal', require('../components/file-manager/modals/RenameFileModal').default)
Vue.component('delete-file-modal', require('../components/file-manager/modals/DeleteFileModal').default)
Vue.component('delete-selected-files-modal', require('../components/file-manager/modals/DeleteSelectedFilesModal').default)

// Matrix
Vue.component('field-editor', require('../components/FieldEditor').default)
Vue.component('field-builder', require('../components/FieldBuilder').default)
Vue.component('section-builder', require('../components/SectionBuilder').default)

// Settings
Vue.component('settings-mail-test', require('../components/settings/MailTest').default)
Vue.component('settings-cache', require('../components/settings/Cache').default)
Vue.component('settings-mail-test', require('../components/settings/MailTest').default)
Vue.component('settings-fieldtypes', require('../components/settings/FieldTypes').default)