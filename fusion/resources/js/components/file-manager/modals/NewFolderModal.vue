<template>
    <p-modal name="new-folder" title="Create New Folder">
        <form @submit.prevent="submit">
            <p-input
                name="name"
                label="Name this folder"
                placeholder="Folder name"
                autocomplete="off"
                autofocus
                :has-error="form.errors.has('name')"
                :error-message="form.errors.get('name')"
                v-model="form.name">
            </p-input>
        </form>

        <template v-slot:footer>
            <p-button v-modal:new-folder>Close</p-button>
            <p-button theme="primary" @click="submit" class="mr-1">Save</p-button>
        </template>
    </p-modal>
</template>

<script>
    import Form from '../../../forms/Form'
    import { mapActions, mapGetters } from 'vuex'

    export default {
        name: 'new-folder-modal',

        data() {
            return {
                form: new Form({
                    parent_id: this.currentDirectory,
                    name: '',
                })
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
                this.form.post('/api/directories').then((response) => {
                    this.form.reset()
                    this.fetchFilesAndDirectories()
                    this.$children[0].isActive = false

                    toast('A new directory was successfully created.', 'success')
                }).catch((error) => {
                    toast(error.response.data.message, 'danger')
                })
            },
        }
    }
</script>
