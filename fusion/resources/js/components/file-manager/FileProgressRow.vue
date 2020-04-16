<template>
  <div class="file-progress flex items-center text-sm">
    <div class="file-progress__icon pr-1">
      <p-img
          :src="'/vendor/fusion/img/' + type + '-large.svg'"
          background-color="#ffffff"
          :width="25"
          :height="25"
          class="gallery-image">
      </p-img>
    </div>
    <div class="file-progress__name pl-2 pr-3 truncate flex-1">{{file.name}}</div>
    <div class="file-progress__bar ml-auto" v-if="file.upload.progress != 100 && status != 'error'">
      <div class="shadow w-full bg-grey-light">
        <div class="bg-success-400 text-xs leading-none py-1" :style="'width: ' + file.upload.progress + '%'">
        </div>
      </div>
    </div>
    <div class="file-progress__status ml-2">
      <fa-icon class="text-success-600" :icon="['fas', 'check-circle']" v-if="status == 'success'">
        <span class="sr-only">Success</span>
      </fa-icon>
      <p-tooltip class="cursor-pointer" v-else-if="status == 'error'" placement="left">
        <template>
          <fa-icon class="text-primary-600" :icon="['fas', 'times-circle']">
            <span class="sr-only">Error</span>
          </fa-icon>
        </template>
        <template slot="content">
          {{file.error}}
        </template>
      </p-tooltip>
      <fa-icon :icon="['fas', 'spinner']" v-else pulse>
        <span class="sr-only">Uploading...</span>
      </fa-icon>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'file-progress-row',

    props: {
      file: {
        type: File
      },
      status: {
        type: String
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