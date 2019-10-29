<template>
  <div>
    <p-select name="settings.time"
        label="Time Options"
        help="Should this also include time?"
        autocomplete="off"
        v-model="value.time"
        :options="[
            {
                 value: false,
                 label: 'Date Only'
            },
            {
                 value: true,
                 label: 'Date and Time'
            }
        ]"
        @input="updateFormat"
    >
    </p-select>

    <p-input name="settings.format"
        label="Date Format"
        help='<a href="https://flatpickr.js.org/formatting/" target="_blank">Flatpickr date format reference</a>'
        placeholder="Y-m-d"
        v-model="value.format">
      
    </p-input>
  </div>
</template>

<script>
  import fieldtype from '../../mixins/fieldtype'
  export default {
    name: 'datetime-fieldtype-settings',
    data() {
        return {
            format: this.value.format || 'Y-m-d',
            time: this.value.time || false
        }
    },

    mixins: [fieldtype],

    methods: {
      updateFormat(value) {
        let tokens = /[H|h|G|i|S|s|K|:]/g
        if(value) {
          if (!new RegExp(tokens).test(this.value.format)) {
            this.value.format = this.value.format + ' h:i'
          }
        } else {
          this.value.format = this.value.format.replace(tokens, '')
        }
      }
    }
  }
</script>