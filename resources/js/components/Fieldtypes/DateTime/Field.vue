<template>
  <div class="datetime">
    <label :for="field.handle" class="form__label">{{field.name}}</label>
    <div class="flex">
      <input :id="'flatpickr_' + field.handle"
          :name="field.handle"
          :help="field.help"
          :placeholder="field.settings.placeholder"
          v-model="datetime"
          @input="$emit('input', datetime)"
          class="datetime__input form__control mr-2">
      <a href="#" class="datetime__button button button--primary px-4" @click.prevent="flatpickr.open()">
        <fa-icon :icon="['far', 'clock']" v-if="field.settings.format == 'time'"></fa-icon>
        <fa-icon icon="calendar-alt" v-else></fa-icon>
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

    mounted() {
      this.datetime = this.value
      this.flatpickr = flatpickr('#flatpickr_' + this.field.handle, {
        enableTime: (this.field.settings.format == 'time' || this.field.settings.format == 'datetime'),
        noCalendar: (this.field.settings.format == 'time'),
        minuteIncrement: 1,
        allowInput: true,
        clickOpens: false,
        defaultDate: this.value
      })
    }
  }
</script>