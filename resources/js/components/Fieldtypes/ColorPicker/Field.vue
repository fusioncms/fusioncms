<template>
    <div>
        <div class="form__group">
            <label :for="field.handle">{{field.name}}</label>
            <div class="flex">
                <div class="mr-2">
                    <div :class="pickrClass"></div>
                </div>
                
                <input id="field.handle" 
                    name="field.handle"
                    type="text" 
                    class="form__control" 
                    v-model="value">
            </div>
        </div>
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
                default: vm.value != '' ? vm.value : 'rgba(255,87,34,1)',
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

