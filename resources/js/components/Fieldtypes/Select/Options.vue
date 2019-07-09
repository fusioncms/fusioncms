<template>
    <div>
        <div class="col w-full">
            <option-builder v-model="value.options"></option-builder>
        </div>
    </div>
</template>

<script>
    import fieldtype from '../../../mixins/fieldtype'
    import OptionBuilder from '../../OptionBuilder'

    export default {
        name: 'select-fieldtype-options',

        mixins: [fieldtype],

        components: {
            'option-builder': OptionBuilder,
        },
    }
</script>

