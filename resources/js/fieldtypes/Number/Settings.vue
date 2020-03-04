<template>
    <div class="flex flex-wrap justify-between">
        <p-number
            name="settings.decimals"
            label="Decimal Places"
            help="The number of decimal places this number will accept."
            autocomplete="off"
            v-model="settings.decimals"
            min="0"
            max="6"
            class="mr-5 w-2/5 lg:w-1/5"
            :has-error="errors.has('settings.decimals')"
            :error-message="errors.get('settings.decimals')">
        </p-number>

        <p-number
            name="settings.steps"
            label="Step Size"
            help="Step or increment size of the number"
            autocomplete="off"
            v-model="settings.steps"
            min="0"
            :steps="settings.decimals | pad"
            :decimals="settings.decimals"
            class="mr-5 w-2/5 lg:w-1/5"
            :has-error="errors.has('settings.steps')"
            :error-message="errors.get('settings.steps')">
        </p-number>

        <p-number
            name="settings.min"
            label="Min Value"
            help="Minimum allowed value"
            autocomplete="off"
            v-model="settings.min"
            :decimals="settings.decimals"
            :steps="settings.steps"
            class="mr-5 w-2/5 lg:w-1/5"
            :has-error="errors.has('settings.min')"
            :error-message="errors.get('settings.min')">
        </p-number>

        <p-number
            name="settings.max"
            label="Max Value"
            help="Maximum allowed value"
            autocomplete="off"
            v-model="settings.max"
            :decimals="settings.decimals"
            :steps="settings.steps"
            class="mr-5 w-2/5 lg:w-1/5"
            :has-error="errors.has('settings.max')"
            :error-message="errors.get('settings.max')">
        </p-number>
    </div>
</template>

<script>
    import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'number-fieldtype-settings',

        mixins: [fieldtype],

        filters: {
            pad(length) {
                return _.padStart('1', length, '0')
            }
        }
    }
</script>

