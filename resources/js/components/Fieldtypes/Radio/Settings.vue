<template>
    <div>
        <p-select
            name="settings.display"
            label="Display"
            help="Choose whether to display options in a horizontal row or vertical column."
            autocomplete="off"
            v-model="value.display"
            :options="[
                {
                    label: 'Column',
                    value: 'column',
                },
                {
                    label: 'Row',
                    value: 'row',
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
        name: 'radio-fieldtype-settings',

        mixins: [fieldtype],

        components: {
            'option-builder': OptionBuilder,
        }
    }
</script>

