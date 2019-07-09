<template>
    <div>
        <p-select
            name="options.type"
            label="Type"
            help="What type of input should this be?"
            autocomplete="off"
            v-model="type"
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
        >
        </p-select>

        <p-input
            name="options.placeholder"
            label="Placeholder"
            help="Text that will appear inside the input element's content area when empty."
            autocomplete="off"
            v-model="value.placeholder"
            >
        </p-input>
    </div>
</template>

<script>
    import fieldtype from '../../../mixins/fieldtype'

    export default {
        name: 'input-fieldtype-options',

        data() {
            return {
                type: this.value.type || 'text',
            }
        },

        watch: {
            value() {
                console.log('value changed', this.value)
            },
        },

        mixins: [fieldtype],
    }
</script>

