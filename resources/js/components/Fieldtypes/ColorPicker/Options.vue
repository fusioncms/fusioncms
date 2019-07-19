<template>
    <div>
        <p-select
            name="options.transparency"
            label="Transparency"
            help="Should this field allow transparency?"
            autocomplete="off"
            v-model="value.transparency"
            :options="[
                {
                    label: 'Yes',
                    value: true
                },
                {
                    label: 'No',
                    value: false
                }
            ]"
        >
        </p-select>

        <p-input
            name="options.default"
            label="Default"
            help="Default color value for this field."
            v-model="value.placeholder"
            >
        </p-input>
    </div>
</template>

<script>
    import fieldtype from '../../../mixins/fieldtype'

    export default {
        name: 'color_picker-fieldtype-options',

        props: {
            value: Object
        },

        data() {
            return {
                transparency: this.value.transparency || true,
                default: this.value.default || ''
            }
        },

        mounted() {
            let vm = this
            console.log(vm.value)
            if(!vm.value.settings) {
                vm.value.settings = {}
            }
            Object.keys(this.$data).forEach((handle) => {
                vm.value.settings[handle] = vm[handle]
            })
        },

        mixins: [fieldtype],
    }
</script>

