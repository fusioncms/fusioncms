<template>
    <p-modal name="move-file" title="Move file(s) to directory">
        <p-select
            name="directory"
            :options="options"
            v-model="directory_id"
            filterable>
        </p-select>

        <template v-slot:footer>
            <p-button v-modal:move-file>Close</p-button>
            <p-button theme="primary" @click="submit" v-modal:move-file class="mr-1">Save</p-button>
        </template>
    </p-modal>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'move-file-modal',

        data() {
            return {
                directory_id: '',
                options: []
            }
        },

        watch: {
            loading: function(value) {
                if (!value) {
                    this.gatherOptions()
                }
            }
        },

        computed: {
            ...mapGetters({
                currentDirectory: 'filemanager/getCurrentDirectory',
                selectedFiles: 'filemanager/getSelectedFiles',
                parentDirectory: 'filemanager/getParentDirectory',
                loading: 'filemanager/getLoading',
            })
        },

        methods: {
            ...mapActions({
                clearDirectorySelection: 'filemanager/clearDirectorySelection',
                moveFileToDirectory: 'filemanager/moveFileToDirectory',
                clearFileSelection: 'filemanager/clearFileSelection',
            }),

            submit() {
                this.moveFileToDirectory({
                    directory: this.directory_id,
                    files: this.selectedFiles
                })

                this.clearSelection()
            },

            clearSelection() {
                this.clearFileSelection()
                this.clearDirectorySelection()
            },

            gatherOptions() {
                this.options = []

                axios.get('/api/directories?recursive=true').then((directories) => {
                    this.buildOptions(directories.data.data)

                    this.options.unshift({ 'label': '..', 'value': this.parentDirectory })
                    this.options.unshift({ 'label': '.',  'value': null })
                })
            },

            buildOptions(directories, label = '') {
                _.forEach(directories, (directory) => {
                    let _label = (label ? label + '/' : '') + directory.name

                    // Don't list current directory
                    if (directory.id != this.currentDirectory) {
                        this.options.push({ 'label': _label, 'value': directory.id })
                    }

                    // Recursively call children
                    this.buildOptions(directory.children, _label)
                })
            }
        }
    }
</script>
