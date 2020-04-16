<template>
    <div>
        <p-number
            :name="field.handle"
            :label="field.name"
            :help="field.help"
            :placeholder="field.settings.placeholder"
            :value="value"
            @input="$emit('input', $event)"
            :steps="field.settings.steps"
            :decimals="field.settings.decimals"
            :min="Number(field.settings.min)"
            :max="Number(field.settings.max)"
        >
            <template slot="decrease">
                <fa-icon icon="minus"></fa-icon>
            </template>
            <template slot="increase">
                <fa-icon icon="plus"></fa-icon>
            </template>
        </p-number>
    </div>
</template>

<script>
    export default {
        name: 'number-fieldtype',

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                type: [String, Number],
                required: false,
                default: null,
            },
        }
    }
</script>

