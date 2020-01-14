<template>
    <p-modal name="move-file" title="Move file(s) to directory">
        <p-treeview
                v-model="directory"
                :items="directories"
        ></p-treeview>

        <template v-slot:footer>
            <p-button v-modal:move-file>Close</p-button>
            <p-button theme="primary" @click="submit" v-modal:move-file class="mr-1">Move</p-button>
        </template>
    </p-modal>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'move-file-modal',

        data() {
            return {
                directory: null,
                directories: []
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
                selectedFiles: 'filemanager/getSelectedFiles',
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
                if (this.directory) {
                    this.moveFileToDirectory({
                        directory: this.directory.id,
                        files: this.selectedFiles
                    })

                    this.clearSelection()

                    toast('File has been moved successfully!', 'success')
                } else {
                    toast('No directory selected.', 'failed')
                }
            },

            clearSelection() {
                this.clearFileSelection()
                this.clearDirectorySelection()
                
                this.directory = null
            },

            gatherOptions() {
                axios.get('/api/directories?recursive=true').then(({data}) => {
                    this.directories = data.data
                })
            },
        },

        created() {
            this.gatherOptions()
        }
    }
</script>
