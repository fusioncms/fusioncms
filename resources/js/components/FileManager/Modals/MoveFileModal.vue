<template>
    <p-modal ref="move" name="move-file" title="Move file(s) to directory">
        <p-treeview :items="directories" v-model="directory"><i class="fas fa-folder-open"></i>
            <template slot="prepend" slot-scope="{ node, open }">
                <fa-icon v-if="open" :icon="['fas', 'folder-open']" class="mr-2" :class="{'fill-current text-info-500': node.isCurrent}"></fa-icon>
                <fa-icon v-else :icon="['fas', 'folder']" class="mr-2" :class="{'fill-current text-info-500': node.isCurrent}"></fa-icon>
            </template>
        </p-treeview>

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
                isOpen: false,
                directory: null,
                directories: []
            }
        },

        watch: {
            isOpen(value) {
                if (value) {
                    this.gatherOptions()
                }
            },

            hasSelection(value) {
                if (! value) {
                    this.$children[0].isActive = false
                }
            }
        },

        computed: {
            ...mapGetters({
                selectedDirectories: 'filemanager/getSelectedDirectories',
                currentDirectory:    'filemanager/getCurrentDirectory',
                selectedFiles:       'filemanager/getSelectedFiles',
                hasSelection:        'filemanager/hasSelection',
            })
        },

        methods: {
            ...mapActions({
                clearDirectorySelection: 'filemanager/clearDirectorySelection',
                moveFileToDirectory:     'filemanager/moveFileToDirectory',
                clearFileSelection:      'filemanager/clearFileSelection',
            }),

            submit() {
                if (this.directory) {
                    this.moveFileToDirectory({
                        directory: this.directory.id,
                        moving: {
                            files: this.selectedFiles,
                            directories: this.selectedDirectories
                        }
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

            recursiveMap(items) {
                return _.map(items, (item) => {
                    return {
                        id:        item.id,
                        name:      item.name,
                        isFolder:  true,
                        isCurrent: this.currentDirectory === item.id,
                        children:  this.recursiveMap(item.children)
                    }
                })
            },

            gatherOptions() {
                axios.get('/api/directories?recursive=true').then(({data}) => {
                    this.directories = [{
                        id:        null,
                        name:      'Root',
                        isFolder:  true,
                        isCurrent: this.currentDirectory === null,
                        children:  this.recursiveMap(data.data)
                    }]
                })
            }
        },

        created() {
            this.$proton.$on('modal-opened', (name) => this.isOpen = true)
            this.$proton.$on('modal-closed', (name) => this.isOpen = false)
        }
    }
</script>
