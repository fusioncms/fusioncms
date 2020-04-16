<template>
    <div>
        <p-select
            name="settings.multiple"
            label="Multi Select"
            help="Should this field allow multiple options to be selected?"
            autocomplete="off"
            v-model="settings.multiple"
            :options="[
                {
                    label: 'No',
                    value: 0,
                },
                {
                    label: 'Yes',
                    value: 1,
                }
            ]"
            :has-error="errors.has('settings.multiple')"
            :error-message="errors.get('settings.multiple')">
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
        name: 'select-fieldtype-settings',

        mixins: [fieldtype],

        components: {
            'option-builder': OptionBuilder,
        },
    }
</script>

