<template>
  <div class="datetime">
    <label :for="field.handle" class="form__label">{{field.name}}</label>
    <div class="flex items-center relative">
      <fa-icon icon="calendar-alt" class="ml-3 absolute z-10"></fa-icon>
      <input :id="'flatpickr_' + field.handle"
          :name="field.handle"
          :help="field.help"
          :placeholder="field.settings.placeholder"
          v-model="datetime"
          class="datetime__input form__control mr-2 background-inherit">
    </div>
    <a v-if="datetime" href="#" class="datetime__clear text-sm pl-1" @click.prevent="flatpickr.clear()" title="Clear date">
      Clear date
    </a>
    <div class="form__control--meta" v-if="field.help">
      <div class="form__help">
        <span v-html="field.help"></span>
      </div>
    </div>
        
  </div>
</template>

<script>
  import flatpickr from 'flatpickr'
  export default {
    name: 'datetime-fieldtype',
    data() {
      return {
        datetime: '',
        flatpickr: null
      }
    },
    props: {
      field: {
        type: Object,
        required: true,
      },

      value: {
        required: false,
        default: '',
      }
    },

    methods: {
      emitEvent(selectedDates, dateStr, instance) {
        this.$emit('input', this.format(dateStr, instance))
      },

      format(dateStr, instance) {

        if (dateStr != '') {
          let dateObject = instance.parseDate(dateStr)
          let formattedDate = instance.formatDate(dateObject, 'Y-m-d H:i:S')
          return formattedDate
        }

        return null
          
      },

      adjustTimezone(dateStr) {
        let localDate = new Date();
        let minuteOffset = localDate.getTimezoneOffset(); 

        let convertedDate = new Date(this.datetime)
        convertedDate = new Date(convertedDate.getTime() + (minuteOffset * 60000))

        return convertedDate
      }
    },

    mounted() {
      this.datetime = this.value

      this.flatpickr = flatpickr('#flatpickr_' + this.field.handle, {
        altInput: true,
        enableTime: this.field.settings.time,
        altFormat: this.field.settings.format || 'Y-m-d',
        minuteIncrement: 1,
        allowInput: false,
        clickOpens: true,
        defaultDate: this.value,
        onChange: this.emitEvent
      })

      if (this.value) {
        let adjustedDate = this.adjustTimezone(this.datetime)
        let formattedDate = this.format(adjustedDate, this.flatpickr)
        this.flatpickr.setDate(formattedDate)
        this.emitEvent(null, this.flatpickr.latestSelectedDateObj, this.flatpickr)
      }
        
    }
  }
</script>