<template>
    <div class="d-flex">
        <div :class="pickrClass"></div>
        <p-input
            :name="field.handle"
            :label="field.name"
            :help="field.help"
            :placeholder="field.options.placeholder"
            :value="value"
            @input="$emit('input', $event)"
        ></p-input>
    </div>
</template>

<script>
    import Pickr from '@simonwep/pickr'
    export default {
        name: 'color_picker-fieldtype',

        data() {
            return {
                color: String
            }
        },

        props: {
            field: {
                type: Object,
                required: true,
            },

            value: {
                required: false,
                default: '',
            },
        },

        computed: {
            pickrClass() {
                return this.field.handle + '-pickr'
            }
        },

        mounted() {
            let vm = this
            const pickr = Pickr.create({
                el: '.' + this.pickrClass,
                theme: 'monolith',
                swatches: null,
                comparison: false,
                defaultRepresentation: 'RGBA',
                components: {
                    preview: true,
                    opacity: true,
                    hue: true
                },
                interaction: {
                    hex: true,
                    rgba: true,
                    cmyk: true,
                    input: true,
                    cancel: true,
                    clear: true
                }
            })
            pickr.on('change', (color, instance) => {
                vm.$emit('input', color.toRGBA().toString(0))
            })
        }
    }
</script>

