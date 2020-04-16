<template>
    <div>
        <p-select
            name="settings.type"
            label="Type"
            help="What type of input should this be?"
            autocomplete="off"
            v-model="settings.type"
            :options="[
                {
                    label: 'Text',
                    value: 'text',
                },
                {
                    label: 'E-mail',
                    value: 'email',
                },
                {
                    label: 'Hidden',
                    value: 'hidden',
                },
                {
                    label: 'Password',
                    value: 'password',
                },
                {
                    label: 'Search',
                    value: 'search',
                },
                {
                    label: 'Telephone Number',
                    value: 'tel',
                },
                {
                    label: 'URL',
                    value: 'url',
                },
            ]"
            :has-error="errors.has('settings.type')"
            :error-message="errors.get('settings.type')">
        </p-select>

        <p-input
            name="settings.placeholder"
            label="Placeholder"
            help="Text that will appear inside the input element's content area when empty."
            autocomplete="off"
            v-model="settings.placeholder"
            :has-error="errors.has('settings.placeholder')"
            :error-message="errors.get('settings.placeholder')">
        </p-input>
    </div>
</template>

<script>
    import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'input-fieldtype-settings',

        data() {
            return {
                type: this.value.type || 'text',
                placeholder: this.value.placeholder || ''
            }
        },

        mixins: [fieldtype]
    }
</script>

