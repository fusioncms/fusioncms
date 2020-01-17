<template>
    <p-modal name="rename-directory" title="Rename current directory">
        <p-input name="name" label="Rename this directory" placeholder="File name" v-model="directory.name"></p-input>

        <template v-slot:footer>
            <p-button v-modal:rename-directory>Close</p-button>
            <p-button theme="primary" @click="submit" v-modal:rename-directory class="mr-1">Rename</p-button>
        </template>
    </p-modal>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'rename-directory-modal',

        data() {
            return {
                name: this.directory.name
            }
        },

        props: {
            directory: {
                required: true,
            },
        },

        methods: {
            ...mapActions({
                fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
            }),

            submit() {
                if (this.directory.name === '') {
                    this.directory.name = this.name

                    toast('The directory\'s name is required', 'warning')
                } else {
                    axios.patch('/api/directories/' + this.directory.id, {
                        name: this.directory.name
                    }).then((response) => {
                        this.name = this.directory.name
                        //this.fetchFilesAndDirectories()

                        toast('The directory\'s name was successfully updated', 'success')
                    }).catch((error) => {
                        this.directory.name = this.name

                        toast(error.message, 'danger')
                    })
                }
            }
        }
    }
</script>
