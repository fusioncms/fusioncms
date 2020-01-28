<template>
    <p-modal name="new-folder" title="Create New Folder">
        <p-input name="name" label="Name this folder" placeholder="Folder name" v-model="name"></p-input>

        <template v-slot:footer>
            <p-button v-modal:new-folder>Close</p-button>
            <p-button theme="primary" @click="submit" v-modal:new-folder class="mr-1">Save</p-button>
        </template>
    </p-modal>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'new-folder-modal',

        data() {
            return {
                name: '',
            }
        },

        computed: {
            ...mapGetters({
                currentDirectory: 'filemanager/getCurrentDirectory',
            })
        },

        methods: {
            ...mapActions({
                fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
            }),

            submit() {
                let data = {
                    name: this.name,
                    parent_id: this.currentDirectory,
                }

                axios.post('/api/directories', data).then((response) => {
                    this.name = ''
                    this.fetchFilesAndDirectories()
                })
            },
        }
    }
</script>
