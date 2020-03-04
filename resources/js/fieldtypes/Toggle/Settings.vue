<template>
    <div>
        <p-toggle
            name="settings.default"
            label="Default"
            help="What would you like the default value to be?"
            :checked="!! settings.default"
            v-model="settings.default"
            :has-error="errors.has('settings.default')"
            :error-message="errors.get('settings.default')">
        </p-toggle>
    </div>
</template>

<script>
    import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'toggle-fieldtype-settings',

        mixins: [fieldtype],
    }
</script>

