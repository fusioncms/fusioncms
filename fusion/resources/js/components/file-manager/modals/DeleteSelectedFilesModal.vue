<template>
    <p-modal name="delete" title="Delete permanently?">
        <p>
            The selected
            <span v-if="selectionCount === 1">file or folder</span>
            <span v-else>{{ selectionCount }} files or folders</span>
            will be permanently deleted. <strong>Be advised this action can not be undone.</strong>
        </p>

        <p>
            Any existing links to
            <span v-if="selectionCount === 1">this file or folder</span>
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
                selectedDirectories: 'filemanager/getSelectedDirectories',
                selectedFiles:       'filemanager/getSelectedFiles',
                hasSelection:        'filemanager/hasSelection',
                selectionCount:      'filemanager/selectionCount',
            })
        },

        watch: {
            hasSelection(value) {
                if (value == false) {
                    this.fetchFilesAndDirectories()
                    this.$children[0].isActive = false
                }
            }
        },

        methods: {
            ...mapActions({
                fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
                toggleDirectorySelection: 'filemanager/toggleDirectorySelection',
                toggleFileSelection:      'filemanager/toggleFileSelection',
            }),

            submit() {
                const selectionCount = this.selectionCount

                // delete directories..
                _.each(this.selectedDirectories, (id) => {
                    axios.delete(`/api/directories/${id}`).then(() => {
                        this.toggleDirectorySelection(id)
                    })
                })

                // delete files..
                _.each(this.selectedFiles, (id) => {
                    axios.delete(`/api/files/${id}`).then(() => {
                        this.toggleFileSelection(id)
                    })
                })

                if (selectionCount === 1) {
                    toast('The selected file or folder was successfully deleted.', 'success')
                } else {
                    toast('The ' + selectionCount + ' selected files or folders were successfully deleted.', 'success')
                }
            }
        }
    }
</script>
