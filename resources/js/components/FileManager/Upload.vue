<template>
    <div
        class="upload upload__container"
        :class="{'upload__container--dragged': isDraggedOver}"
        @dragover.prevent="enter"
        @dragenter.prevent="enter"
        @dragleave.prevent="leave"
        @dragend.prevent="leave"
        @drop.prevent="drop"
    >
        <input type="file" name="files[]" id="files" class="upload__control" multiple @change="select" ref="input">
        
        <label for="files" class="upload__label">
            <strong>Drag files here</strong> or click to select files
        </label>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'

    export default {
        name: 'p-upload',

        data() {
            return {
                files: [],
                isDraggedOver: false,
            }
        },

        methods: {
            ...mapActions({
                addFile: 'filemanager/addFile',
            }),

            enter() {
                this.isDraggedOver = true
            },

            leave() {
                this.isDraggedOver = false
            },

            drop(event) {
                this.leave()
                
                this.addFiles(event.dataTransfer.files)
            },

            select(event) {
                this.addFiles(this.$refs.input.files)
            },

            addFiles(files) {
                let i = 0
                let file = null

                for (i = 0; i < files.length; i++) {
                    file = files[i]

                    this.storeMeta(file).then((fileObject) => {
                        this.upload(fileObject)
                    }, (fileObject) => {
                        console.log(fileObject)
                    })
                }
            },

            upload(fileObject) {
                let form = new FormData()

                form.append('file', fileObject.file)
                form.append('id', fileObject.id)

                // emit upload init

                axios.post('/api/files', form, {
                    before: (xhr) => {
                        fileObject.xhr = xhr
                    },

                    progress: (event) => {
                        // emit progress
                        console.log(event.loaded)
                    }
                }).then((response) => {
                    this.addFile(response.data.data)
                    
                    toast(response.data.data.name + ' uploaded', 'success')
                    // emit finished
                }, () => {
                    // emit failed
                })
            },

            storeMeta(file) {
                let fileObject = this.generateFileObject(file)

                return new Promise((resolve, reject) => {
                    resolve(fileObject)
                })
            },

            generateFileObject(file) {
                let fileObjectIndex = this.files.push({
                    id: null,
                    file: file,
                    progress: 0,
                    failed: false,
                    loadedBytes: 0,
                    totalBytes: 0,
                    timeStarted: (new Date).getTime(),
                    secondsRemaining: 0,
                    finished: false,
                    cancelled: false,
                    xhr: null,
                }) - 1

                return this.files[fileObjectIndex]
            }
        }
    }
</script>
