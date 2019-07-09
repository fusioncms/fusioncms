<template>
    <div>
        <p-input
            name="options.placeholder"
            label="Placeholder"
            help="Text that will appear inside the textarea element's content area when empty."
            autocomplete="off"
            v-model="value.placeholder"
            >
        </p-input>
    </div>
</template>

<script>
    import fieldtype from '../../../mixins/fieldtype'

    export default {
        name: 'textarea-fieldtype-options',

        mixins: [fieldtype],
    }
</script>

