<template>
  <div>
    <p-select
            name="settings.format"
            label="Format"
            help="Should this field be for dates, times, or both?"
            autocomplete="off"
            v-model="value.format"
            :options="[
                {
                     value: 'date',
                     label: 'Date Only'
                },
                {
                     value: 'time',
                     label: 'Time Only'
                },
                {
                     value: 'datetime',
                     label: 'Date and Time'
                }
            ]"
        >
        </p-select>
  </div>
</template>

<script>
  import fieldtype from '../../../mixins/fieldtype'
  export default {
    name: 'datetime-fieldtype-settings',
    data() {
            return {
                format: this.value.format || 'text'
            }
        },

        mixins: [fieldtype]
  }
</script>