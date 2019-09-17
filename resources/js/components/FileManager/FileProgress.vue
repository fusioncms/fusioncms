<template>
  <div class="file-progress flex items-center text-sm">
    <div class="file-progress__icon pr-1">
      <p-img
          :src="'/img/' + type + '-large.svg'"
          background-color="#ffffff"
          :width="25"
          :height="25"
          class="gallery-image">
      </p-img>
    </div>
    <div class="file-progress__name pl-2 pr-3 truncate flex-1">{{file.name}}</div>
    <div class="file-progress__bar ml-auto">
      <div class="shadow w-full bg-grey-light">
        <div class="bg-success-400 text-xs leading-none py-1" :style="'width: ' + progress + '%'">
        </div>
      </div>
    </div>
    <div class="file-progress__status ml-2">
      <fa-icon class="text-success-600" :icon="['fas', 'check-circle']" v-if="status == 'success'">
        <span class="sr-only">Success</span>
      </fa-icon>
      <fa-icon class="text-primary-600" :icon="['fas', 'times-circle']" v-else-if="status == 'error'">
        <span class="sr-only">Error</span>
      </fa-icon>
      <fa-icon :icon="['fas', 'spinner']" v-else spin pulse>
        <span class="sr-only">Uploading...</span>
      </fa-icon> 
    </div>
  </div>
</template>

<script>
  export default {
    name: 'file-progress',

    props: {
      file: {
        type: File
      },
      status: {
        type: String
      },
      progress: {
        type: Number
      }
    },

    computed: {
      type() {
        let ftype = this.file.type.split('/')[0]
        if (ftype == 'application' || ftype == 'text' || ftype == '') { ftype = 'document'}
        return ftype
      }
    }
  }
</script>