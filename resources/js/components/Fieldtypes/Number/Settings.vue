<template>
    <div class="flex">
        <p-number
            name="settings.decimals"
            label="Decimal Places"
            help="The number of decimal places this number will accept."
            autocomplete="off"
            v-model="value.decimals"
            min="0"
            max="6"
            class="w-1/3 mr-3"
            >
        </p-number>

        <p-number
            name="settings.steps"
            label="Step Size"
            help="Step or increment size of the number"
            autocomplete="off"
            v-model="value.steps"
            min="0"
            decimals="6"
            class="w-1/3"
            >
        </p-number>
    </div>
</template>

<script>
    import fieldtype from '../../../mixins/fieldtype'

    export default {
        name: 'number-fieldtype-settings',

        mixins: [fieldtype],
    }
</script>

