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

        mixins: [fieldtype]
  }
</script>