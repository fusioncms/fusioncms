<template>
  <div class="file-progress flex items-center text-sm">
    <div class="pr-1">
      <p-img
          :src="'/img/' + type + '-large.svg'"
          background-color="#ffffff"
          :width="25"
          :height="25"
          class="gallery-image">
      </p-img>
    </div>
    <div class="px-2">{{file.name}}</div>
    <div>{{progress}}</div>
    <div class="pl-2 ml-auto">
      <fa-icon :icon="['fas', 'check-circle']" v-if="status == 'success'">
        <span class="sr-only">Success</span>
      </fa-icon>
      <fa-icon :icon="['fas', 'times-circle']" v-else-if="status == 'error'">
        <span class="sr-only">Error</span>
      </fa-icon>
      <fa-icon :icon="['fas', 'spinner']" v-else>
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