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
    export default {
        name: 'new-folder-modal',

        data() {
            return {
                show: false,
                name: '',
            }
        },

        props: {
            'directory': {
                type: Number,
                default: null,
            },
        },

        methods: {
            submit() {
                let data = {
                    name: this.name,
                    parent_id: this.directory,
                }

                axios.post('/api/directories', data).then((response) => {
                    this.name = ''
                })
            },

            close() {
                this.show = false
            }
        }
    }
</script>
