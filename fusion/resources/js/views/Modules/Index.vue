<template>
    <div>
        <portal to="title">
            <app-title icon="project-diagram">Add-on Modules</app-title>
        </portal>

        <portal to="actions">
            <p-button v-modal:upload-module class="button">Upload Module</p-button>
        </portal>

        <div class="row">
            <div class="content-container">
                <p-table :endpoint="endpoint" id="modules" sort-by="name" no-search primary-key="handle" key="modules_table">
                    <template slot="name" slot-scope="table">
                        <div class="flex items-center">
                            <p-status
                                v-if="table.record.registered && table.record.installed"
                                :value="table.record.enabled"
                                class="mr-2">
                            </p-status>

                            <span v-else class="mr-2" :class="[ table.record.registered ? 'text-gray-500' : 'text-warning-500' ]">
                                <fa-icon icon="circle" class="icon fa-xs"></fa-icon>
                            </span>

                            {{ table.record.name }}
                        </div>
                    </template>

                    <template slot="slug" slot-scope="table">
                        {{ table.record.slug }}
                    </template>

                    <template slot="version" slot-scope="table">
                        <span class="badge">{{ table.record.version }}</span>
                    </template>

                    <template slot="description" slot-scope="table">
                        <span class="text-gray-800 text-sm">{{ table.record.description }}</span>
                    </template>

                    <template slot="actions" slot-scope="table">
                        <p-actions v-if="table.record.registered" :id="'module_' + table.record.id + '_actions'" :key="'module_' + table.record.id + '_actions'">
                            <template v-if="table.record.installed">
                                <p-dropdown-link v-if="table.record.enabled" @click="disable(table.record.slug)">Disable</p-dropdown-link>
                                <p-dropdown-link v-else @click="enable(table.record.slug)">Enable</p-dropdown-link>
 
                                <p-dropdown-link v-if="table.record.enabled" :to="{ name: 'setting.section', params: { section: table.record.slug } }">Settings</p-dropdown-link>
                                
                                <p-dropdown-link v-if="table.record.enabled" @click="seed(table.record.slug)">Seed</p-dropdown-link>
                                
                                <p-dropdown-link v-if="table.record.enabled" @click.prevent v-modal:update-module="table.record">
                                    Update
                                </p-dropdown-link>

                                <p-dropdown-link @click.prevent v-modal:uninstall-module="table.record" classes="link--danger">
                                    Uninstall
                                </p-dropdown-link>
                            </template>

                            <template v-else>
                                <p-dropdown-link @click.prevent v-modal:install-module="table.record" classes="link--success">
                                    Install
                                </p-dropdown-link>
                                <p-dropdown-link @click.prevent v-modal:uninstall-module="table.record" classes="link--danger">
                                    Remove
                                </p-dropdown-link>
                            </template>
                        </p-actions>
                    </template>
                </p-table>
            </div>
        </div>

        <portal to="modals">
            <p-modal name="uninstall-module" title="Uninstall Module" key="uninstall_module">
                <p>All assets and data will be removed.</p>
                <p>Are you sure you want to uninstall this module?</p>

                <template slot="footer" slot-scope="module">
                    <p-button v-modal:uninstall-module @click="uninstall(module.data.slug)" theme="danger" class="ml-3">Uninstall</p-button>
                    <p-button v-modal:uninstall-module>Cancel</p-button>
                </template>
            </p-modal>

            <p-modal name="install-module" title="Install Module" key="install_module">
                <p>Are you sure you want to install this module?</p>

                <template slot="footer" slot-scope="module">
                    <p-button v-modal:install-module @click="install(module.data.slug)" theme="success" class="ml-3">Install</p-button>
                    <p-button v-modal:install-module>Cancel</p-button>
                </template>
            </p-modal>

            <p-modal name="update-module" title="Update Module" key="update_module">
                <p>This will migrate any new migrations and run db:seed.</p>
                <p>Are you sure you want to proceed?</p>

                <template slot="footer" slot-scope="module">
                    <p-button v-modal:update-module @click="update(module.data.slug)" theme="warning" class="ml-3">Update</p-button>
                    <p-button v-modal:update-module>Cancel</p-button>
                </template>
            </p-modal>

            <p-modal name="upload-module" title="Upload Module" key="upload_module">
                <p-upload
                    name="file-upload"
                    ref="upload"
                    accept="zip"
                    :multiple="false"
                    @input="upload"
                ></p-upload>
            </p-modal>
        </portal>
    </div>
</template>

<script>
    export default {
        head: {
            title() {
                return {
                    inner: 'Add-on Modules'
                }
            }
        },

        data() {
            return {
                endpoint: '/datatable/modules',
            }
        },

        methods: {
            upload(files) {
                if (typeof files == 'undefined') {
                    return;
                }

                const formData = new FormData()

                formData.append('_method', 'POST')
                formData.append('file-upload', files)

                axios.post('/api/modules/upload', formData)
                    .then((response) => {
                        this.$proton.$emit('toggle-modal-upload-module')
                        this.$refs.upload.remove()
                        this.refresh('Module successfully uploaded.')
                    })
                    .catch((error) => this.refresh(error.response.data.message, 'danger'))
            },

            enable(slug) {
                axios.post(`/api/modules/${slug}/enable`)
                    .then((response) => {
                        this.refresh('Module successfully enabled.')

                        if (response.data.data.redirect.enable) {
                            this.$router.push(response.data.data.redirect.enable)
                        }
                    })
                    .catch((error) => this.refresh(error.response.data.message, 'danger'))
            },

            disable(slug) {
                axios.post(`/api/modules/${slug}/disable`)
                    .then((response) => this.refresh('Module successfully disabled.'))
                    .catch((error)   => this.refresh(error.response.data.message, 'danger'))
            },

            install (slug) {
                axios.post(`/api/modules/${slug}/install`)
                    .then((response) => {
                        this.refresh('Module successfully installed.')

                        if (response.data.data.redirect.install) {
                            this.$router.push(response.data.data.redirect.install)
                        }
                    })
                    .catch((error)   => this.refresh(error.response.data.message, 'danger'))
            },

            uninstall(slug) {
                axios.post(`/api/modules/${slug}/uninstall`)
                    .then((response) => this.refresh('Module successfully removed.'))
                    .catch((error)   => this.refresh(error.response.data.message, 'danger'))
            },

            update(slug) {
                axios.patch(`/api/modules/${slug}/update`)
                    .then((response) => this.refresh('Module successfully updated.'))
                    .catch((error)   => this.refresh(error.response.data.message, 'danger'))
            },

            seed(slug) {
                axios.patch(`/api/modules/${slug}/seed`)
                    .then((response) => this.refresh('Module successfully seeded.'))
                    .catch((error)   => this.refresh(error.response.data.message, 'danger'))
            },

            refresh(msg = null, status = 'success') {
                if (msg) toast(msg, status)

                this.$store.dispatch('navigation/fetchAdminNavigation')
                proton().$emit('refresh-datatable-modules')
            }
        }
    }
</script>
