<template>
  <div class="datetime">
    <label :for="field.handle" class="form__label">{{field.name}}</label>
    <div class="flex">
      <input :id="'flatpickr_' + field.handle"
          :name="field.handle"
          :help="field.help"
          :placeholder="field.settings.placeholder"
          v-model="datetime"
          class="datetime__input form__control mr-2">
      <a href="#" class="datetime__button button button--primary px-4" @click.prevent="flatpickr.open()">
        <fa-icon icon="calendar-alt"></fa-icon>
      </a>
    </div>
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
        let dateObject = instance.parseDate(dateStr)
        let formattedDate = instance.formatDate(dateObject, 'Y-m-d H:i:S')

        return formattedDate
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
        clickOpens: false,
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