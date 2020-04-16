<template>
    <p-modal name="rename-file" :title="title">
        <p-input name="name" label="current name" placeholder="New name" v-model="selection.name"></p-input>

        <template v-slot:footer>
            <p-button  @click="cancel" v-modal:rename-file>Cancel</p-button>
            <p-button theme="primary" @click="submit" v-modal:rename-file class="mr-1">Rename</p-button>
        </template>
    </p-modal>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex'

    export default {
        name: 'rename-file-modal',

        props: {
            selection: {
                required: true,
            },
        },

        computed: {
            ...mapGetters({
                directories: 'filemanager/getDirectories',
                files: 'filemanager/getFiles',
            }),

            title: function() {
                return 'Rename current ' + (this.isFile ? 'file' : 'directory')
            },

            isFile: function() {
                return ! _.has(this.selection, 'files_count')
            },

            endpoint: function() {
                if (this.isFile) {
                    return `/api/files/${this.selection.id}`
                } else {
                    return `/api/directories/${this.selection.id}`
                }
            }
        },

        watch: {
            selection: function(selection) {
                this.name = selection.name || ''
            }
        },

        methods: {
            ...mapActions({
                setDirectories: 'filemanager/setDirectories',
                setFiles: 'filemanager/setFiles',
            }),

            submit() {
                if (this.selection.name === '') {
                    this.selection.name = this.name

                    toast('The items\'s name is required', 'warning')
                } else {
                    axios.patch(this.endpoint, {
                        name: this.selection.name
                    }).then((response) => {
                        if (this.isFile) {
                            let index = _.findIndex(this.files, { 'id': this.selection.id })
                            this.setFiles(_.merge(this.files, { [index]: response.data.data }))
                        } else {
                            let index = _.findIndex(this.directories, { 'id': this.selection.id })
                            this.setDirectories(_.merge(this.directories, { [index]: response.data.data }))
                        }

                        toast('The items\'s name was successfully updated', 'success')
                    }).catch((error) => {
                        toast(error.message, 'danger')
                    })
                }
            },

            cancel() {
                this.selection.name = this.name
            }
        }
    }
</script>
