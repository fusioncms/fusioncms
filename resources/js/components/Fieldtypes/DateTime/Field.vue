<template>
  <div class="datetime">
    <label :for="field.handle" class="form__label">{{field.name}}</label>
    <input :id="'flatpickr_' + field.handle"
          :name="field.handle"
          :help="field.help"
          :placeholder="field.settings.placeholder"
          v-model="datetime"
          @input="$emit('input', datetime)"
          class="form__control"
      ></input>
  </div>
</template>

<script>
  import flatpickr from 'flatpickr'
  export default {
    name: 'datetime-fieldtype',
    data() {
      return {
        datetime: ''
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

    mounted() {
      this.datetime = this.value
      flatpickr('#flatpickr_' + this.field.handle, {
        enableTime: (this.field.settings.format == 'time' || this.field.settings.format == 'datetime'),
        noCalendar: (this.field.settings.format == 'time'),
        minuteIncrement: 1,
        allowInput: true
      })
    }
  }
</script>