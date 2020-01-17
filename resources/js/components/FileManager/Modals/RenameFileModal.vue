<template>
    <p-modal name="rename-file" title="Rename current file">
        <p-input name="name" label="Rename this file" placeholder="File name" v-model="name"></p-input>

        <template v-slot:footer>
            <p-button v-modal:rename-file>Close</p-button>
            <p-button theme="primary" @click="submit" v-modal:rename-file class="mr-1">Rename</p-button>
        </template>
    </p-modal>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'rename-file-modal',

        data() {
            return {
                name: this.file.name
            }
        },

        props: {
            file: {
                required: true,
            },
        },

        methods: {
            ...mapActions({
                fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
            }),

            submit() {
                if (this.file.name === '') {
                    this.file.name = this.name

                    toast('The file\'s name is required', 'warning')
                } else {
                    axios.patch('/api/files/' + this.file.id, {
                        name: this.file.name
                    }).then((response) => {
                        this.name = this.file.name
                        this.fetchFilesAndDirectories()

                        toast('The file\'s name was successfully updated', 'success')
                    }).catch((error) => {
                        this.file.name = this.name

                        toast(error.message, 'danger')
                    })
                }
            }
        }
    }
</script>
