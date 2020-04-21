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
                <p-table :endpoint="endpoint" id="modules" sort-by="name" primary-key="handle" key="modules_table">
                    <template slot="name" slot-scope="table">
                        <div class="flex items-center">
                            <p-status :value="table.record.enabled" class="mr-2"></p-status>

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
                        <p-actions :id="'module_' + table.record.id + '_actions'" :key="'module_' + table.record.id + '_actions'">
                            <p-dropdown-link @click.prevent v-modal:delete-module="table.record" classes="link--danger">
                                Delete
                            </p-dropdown-link>
                        </p-actions>
                    </template>
                </p-table>
            </div>
        </div>

        <portal to="modals">
            <p-modal name="delete-module" title="Delete Module" key="uninstall_module">
                <p>Are you sure you want to permenantly delete this module?</p>

                <template slot="footer" slot-scope="module">
                    <p-button v-modal:delete-module @click="destroy(module.data.slug)" theme="danger" class="ml-3">Delete</p-button>
                    <p-button v-modal:delete-module>Cancel</p-button>
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

                axios.post('/api/modules', formData).then(() => {
                    toast('Module successfully uploaded!', 'success')

                    this.$refs.upload.remove()

                    proton().$emit('refresh-datatable-modules')
                })
            },

            destroy(slug) {
                axios.delete('/api/modules/' + slug).then((response) => {
                    toast('Module successfully removed.', 'success')
                    
                    proton().$emit('refresh-datatable-modules')
                })
            }
        }
    }
</script>
