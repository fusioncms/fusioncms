<template>
    <div>
        <p-input
            type="number"
            name="options.decimals"
            label="Decimal Places"
            help="The number of decimal places this number will accept."
            autocomplete="off"
            v-model="value.decimals"
            >
        </p-input>
    </div>
</template>

<script>
    import fieldtype from '../../../mixins/fieldtype'

    export default {
        name: 'number-fieldtype-options',

        mixins: [fieldtype],
    }
</script>

