<template>
    <div>
        <p-select
            name="settings.display"
            label="Display"
            help="Choose whether to display options in a horizontal row or vertical column."
            autocomplete="off"
            v-model="settings.display"
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
            :has-error="errors.has('settings.display')"
            :error-message="errors.get('settings.display')">
        </p-select>
        <div class="col w-full">
            <option-builder v-model="settings.options"></option-builder>
        </div>
    </div>
</template>

<script>
    import fieldtype from '../../mixins/fieldtype'
    import OptionBuilder from '../../components/OptionBuilder'

    export default {
        name: 'checkbox-fieldtype-settings',

        mixins: [fieldtype],

        components: {
            'option-builder': OptionBuilder,
        }
    }
</script>

