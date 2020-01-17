<template>
    <div class="file-uploader">
      <div class="file-manager__dropzone" :class="[dropzoneVisible ? 'file-manager__dropzone--visible' : '']" @click.self="setDropzoneVisible(false)">
          <div class="file-manager__prompt">
              <div class="file-manager__prompt-content">
                  <fa-icon icon="upload">
                      <span class="sr-only">Upload</span>
                  </fa-icon>
                  <h3>Drag files here to upload</h3>
              </div>
          </div>
          <vue-dropzone ref="dropzone_element" id="dropzone" 
              :options="dropzoneOptions" 
              @vdropzone-mounted="configureDZ"
              @vdropzone-drag-leave="setDropzoneVisible(false)"
              @vdropzone-success="dzUploaded" 
              @vdropzone-queue-complete="dzComplete"
              @vdropzone-file-added="addFileUpload"
              @vdropzone-files-added="startUpload"
              @vdropzone-sending="dzPreSend"
              @vdropzone-total-upload-progress="updateProgress"
              @vdropzone-error="showError">
          </vue-dropzone>
      </div>

      <file-progress></file-progress>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import _ from 'lodash'
  import vue2Dropzone from 'vue2-dropzone'
  import 'vue2-dropzone/dist/vue2Dropzone.min.css'
  import FileProgress from './FileProgress.vue'

  export default {
    name: 'file-uploader',

    components: {
      vueDropzone: vue2Dropzone,
      'file-progress': FileProgress
    },

    data() {
      return {
          dropzoneOptions: {
            url: '/api/files',
            maxFilesize: 1500,
            headers: {}
        }
      }
    },

    computed: {
      ...mapGetters({
            currentDirectory: 'filemanager/getCurrentDirectory',
            dropzoneVisible: 'filemanager/getDropzoneVisible',
            fileUploads: 'filemanager/getFileUploads',
      }),
      csrf() {
        let token = document.head.querySelector('meta[name="csrf-token"]')
        if (token) {
            token = token.content
        } else {
            console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token')
        }
        return token
      }
    },

    methods: {
      ...mapActions({
          fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
          setUploadsMinimized: 'filemanager/setUploadsMinimized',
          setDropzoneVisible: 'filemanager/setDropzoneVisible',
          setUploadProgress: 'filemanager/setUploadProgress',
          setUploadsVisible: 'filemanager/setUploadsVisible',
          setFileUploads: 'filemanager/setFileUploads',
          addFileUpload: 'filemanager/addFileUpload',
          addFile: 'filemanager/addFile',
      }),
      openDZ() {
        document.querySelector('.dz-hidden-input').click()
      },
      configureDZ() {
        let dz = this.$refs.dropzone_element
        dz.options.headers['X-CSRF-TOKEN'] = this.csrf
      },
      dzPreSend(file, xhr, formData) {
        formData.append('directory_id', this.currentDirectory)
      },
      dzUploaded(response) {
        toast(response.name + ' uploaded', 'success')
      },
      dzComplete() {
        this.fetchFilesAndDirectories()
        this.setUploadProgress(100)
      },
      startUpload(files) {
        let vm = this
        vm.showUploads()
        vm.setDropzoneVisible(false)
      },
      showUploads() {
        this.setUploadsVisible(true)
        this.setUploadsMinimized(false)
      },
      updateProgress() {
        let uploaded = _.filter(this.fileUploads, function(file){
            return file.status == 'success' || file.status == 'error'
        }).length
        this.setUploadProgress((uploaded / this.fileUploads.length) * 100)
      },
      showError(file, error, xhr) {
        if(!xhr) {
            file.error = error
        } else if(xhr.status) {
            file.error = xhr.statusText
        }
      }
    },
    
  }
</script>