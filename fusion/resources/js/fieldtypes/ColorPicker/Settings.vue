<template>
    <div>
        <p-select
            name="settings.transparency"
            label="Transparency"
            help="Should this field allow transparency?"
            autocomplete="off"
            v-model="settings.transparency"
            :options="[
                {
                    label: 'Yes',
                    value: 1
                },
                {
                    label: 'No',
                    value: 0
                }
            ]"
            :has-error="errors.has('settings.transparency')"
            :error-message="errors.get('settings.transparency')">
        </p-select>

        <p-input
            name="settings.default"
            label="Default"
            help="Default color value for this field."
            v-model="settings.default"
            :has-error="errors.has('settings.default')"
            :error-message="errors.get('settings.default')">
        </p-input>
    </div>
</template>

<script>
    import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'color-picker-fieldtype-settings',

        mixins: [fieldtype],
    }
</script>

