<template>
    <div>
        <p-select
            name="settings.multiple"
            label="Multi Select"
            help="Should this field allow multiple options to be selected?"
            autocomplete="off"
            v-model="value.multiple"
            :options="[
                {
                    label: 'No',
                    value: 'no',
                },
                {
                    label: 'Yes',
                    value: 'yes',
                }
            ]"
        >
        </p-select>
        <div class="col w-full">
            <option-builder v-model="value.options"></option-builder>
        </div>
    </div>
</template>

<script>
    import fieldtype from '../../../mixins/fieldtype'
    import OptionBuilder from '../../OptionBuilder'

    export default {
        name: 'select-fieldtype-settings',

        mixins: [fieldtype],

        components: {
            'option-builder': OptionBuilder,
        },
    }
</script>

