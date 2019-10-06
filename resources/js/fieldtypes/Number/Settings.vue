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
            class="w-1/5 mr-5"
            >
        </p-number>

        <p-number
            name="settings.steps"
            label="Step Size"
            help="Step or increment size of the number"
            autocomplete="off"
            v-model="value.steps"
            min="0"
            :steps="pad(value.decimals)"
            :decimals="value.decimals"
            class="w-1/5 mr-5"
            >
        </p-number>

        <p-number
            name="settings.min"
            label="Min Value"
            help="Minimum allowed value"
            autocomplete="off"
            v-model="value.min"
            :decimals="value.decimals"
            :steps="value.steps"
            class="w-1/5 mr-5"
            >
        </p-number>

        <p-number
            name="settings.max"
            label="Max Value"
            help="Maximum allowed value"
            autocomplete="off"
            v-model="value.max"
            :decimals="value.decimals"
            :steps="value.steps"
            class="w-1/5"
            >
        </p-number>
    </div>
</template>

<script>
    import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'number-fieldtype-settings',

        mixins: [fieldtype],

        methods: {
            pad(length) {
                let str = '1'
                while(str.length < length) {
                    str = '0' + str
                }
                return Number('0.' + str.substr(-length, length))
            },
        },
    }
</script>

