<template>
    <p-modal name="delete" title="Delete permanently?">
        <p>
            The selected
            <span v-if="total === 1">file or folder</span>
            <span v-else>{{ total }} files or folders</span>
            will be permanently deleted. <strong>Be advised this action can not be undone.</strong>
        </p>

        <p>
            Any existing links to
            <span v-if="total === 1">this file or folder</span>
            <span v-else>these files or folders</span>
            (if not removed) may result in errors.
        </p>

        <template v-slot:footer>
            <p-button v-modal:delete>Cancel</p-button>
            <p-button theme="danger" @click="submit" class="mr-1" v-modal:delete>Delete</p-button>
        </template>
    </p-modal>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'delete-selected-files-modal',

        computed: {
            ...mapGetters({
                files: 'filemanager/getSelectedFiles',
                directories: 'filemanager/getSelectedDirectories',
            }),

            total() {
                this.files.length + this.directories.length
            }
        },

        methods: {
            ...mapActions({
                fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
                clearFileSelection: 'filemanager/clearFileSelection',
                clearDirectorySelection: 'filemanager/clearDirectorySelection',
            }),

            submit() {
                let vm = this

                _.each(this.directories, function(directory) {
                    axios.delete('/api/directories/' + directory).then(() => {
                        vm.fetchFilesAndDirectories()
                    })
                })

                _.each(this.files, function(file) {
                    axios.delete('/api/files/' + file).then(() => {
                        vm.fetchFilesAndDirectories()
                    })
                })

                if (this.total === 1) {
                    toast('The selected file or folder was successfully deleted.', 'success')
                } else {
                    toast('The ' + this.total + ' selected files or folders were successfully deleted.', 'success')
                }

                this.clearFileSelection()
            },
        }
    }
</script>
