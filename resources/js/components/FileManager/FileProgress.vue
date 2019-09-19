<template>
  <div class="file-manager__uploads card" :class="[visible ? 'file-manager__uploads--visible' : '']">
      <div class="card__header flex items-center bg-black px-5 py-2">
          <div class="form__label text-white mb-0">
              <span v-if="uploadProgress != 100">
                  Uploading: {{uploadProgress.toFixed(0)}}%
              </span>
              <span v-else>
                  Uploads
              </span>
          </div>
          <a href="#" @click.prevent="toggleMinimize" class="ml-auto mr-5">
              <fa-icon icon="expand" class="text-white" v-if="minimized">
                  <span class="sr-only">Expand</span>
              </fa-icon>
              <fa-icon icon="minus" class="text-white" v-else>
                  <span class="sr-only">Minimize</span>
              </fa-icon>
          </a>
          <a href="#" @click.prevent="setUploadsVisible(false)">
              <fa-icon icon="times" class="text-white">
                  <span class="sr-only">Close</span>
              </fa-icon>
          </a>
      </div>
      <div class="file-manager__uploads-body card__body px-4 py-2 overflow-y-auto" :class="[minimized ? 'hidden' : '']">
          <file-progress-row v-for="(file, index) in fileUploads" :file="file" :key="'file-' + index" :status="file.status" v-if="file.upload">
          </file-progress-row>
      </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import FileProgressRow from './FileProgressRow.vue'
  export default {
    name: 'file-progress',
    components: {
      'file-progress-row': FileProgressRow,
    },
    
    computed: {
       ...mapGetters({
            uploadProgress: 'filemanager/getUploadProgress',
            minimized: 'filemanager/getUploadsMinimized',
            fileUploads: 'filemanager/getFileUploads',
            visible: 'filemanager/getUploadsVisible'
        })
    },

    methods: {
      ...mapActions({
        'setUploadsMinimized': 'filemanager/setUploadsMinimized',
        'setUploadsVisible': 'filemanager/setUploadsVisible'
      }),

      toggleMinimize() {
        this.setUploadsMinimized(!this.minimized)
      },
    }
  }
</script>