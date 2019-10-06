<template>
    <div>
        <p-select
            name="settings.transparency"
            label="Transparency"
            help="Should this field allow transparency?"
            autocomplete="off"
            v-model="value.transparency"
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
        >
        </p-select>

        <p-input
            name="settings.default"
            label="Default"
            help="Default color value for this field."
            v-model="value.default"
            >
        </p-input>
    </div>
</template>

<script>
    import fieldtype from '../../mixins/fieldtype'

    export default {
        name: 'color_picker-fieldtype-settings',

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

