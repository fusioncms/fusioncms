<template>
    <div>
        <p-select
            name="settings.time"
            label="Time Options"
            help="Should this also include time?"
            autocomplete="off"
            v-model="settings.time"
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

            :has-error="errors.has('settings.time')"
            :error-message="errors.get('settings.time')">
        </p-select>

        <p-input
            name="settings.format"
            label="Date Format"
            help='<a href="https://flatpickr.js.org/formatting/" target="_blank">Flatpickr date format reference</a>'
            placeholder="Y-m-d"
            v-model="format"
            :has-error="errors.has('settings.format')"
            :error-message="errors.get('settings.format')">
        </p-input>
    </div>
</template>

<script>
    import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'datetime-fieldtype-settings',

        mixins: [fieldtype],

        computed: {
            format: {
                get() {
                    let value  = _.trim(this.settings.format)
                    let tokens = /[H|h|G|i|S|s|K|:]/g

                    if (this.settings.time) {
                        if (! new RegExp(tokens).test(this.settings.format)) {
                            value = _.trim(this.settings.format) + ' h:i'
                        }
                    } else {
                        value = this.settings.format.replace(tokens, '')
                    }

                    return value
                },

                set(value) {
                    this.settings.format = value
                }
            }
        }
    }
</script>