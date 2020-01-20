<template>
    <p-modal name="replace-file" title="Replace current file with another">
        <p-upload
            ref="upload"
            name="file"
            :multiple="false"
            @input="uploadFile"
        ></p-upload>

        <template v-slot:footer>
            <p-button v-modal:replace-file>Close</p-button>
            <p-button theme="primary" @click="submit" v-modal:replace-file class="mr-1">Replace</p-button>
        </template>
    </p-modal>
</template>

<script>
    export default {
        name: 'replace-file-modal',

        data() {
            return {
                uploadForm: null
            }
        },

        props: {
            file: {
                required: true,
            },
        },

        methods: {
            uploadFile(files) {
                this.uploadForm = new FormData()
                this.uploadForm.append('_method', 'POST')
                this.uploadForm.append('file', files)
            },

            submit() {
                if (this.uploadForm) {
                    axios.post(`/api/files/replace/${this.file.id}`, this.uploadForm).then((response) => {
                        this.uploadForm = null
                        this.$refs.upload.remove()
                        this.$emit('replaced', response.data.data)

                        toast('File has been replaced successfully!', 'success')
                    })
                } else {
                    toast('No replacement specified.', 'failed')
                }
            }
        }
    }
</script>
