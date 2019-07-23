<template>
    <div class="color-picker">
        <div class="form__group">
            <label :for="field.handle">{{field.name}}</label>
            <div class="flex items-center">
                <div class="mr-2 mt-5">
                    <div :class="pickrClass"></div>
                </div>
                <div class="mr-2 flex-grow">
                    <label :for="pickrClass + '_name'" class="text-xs">RGBA</label>
                    <input :id="pickrClass + '_rgba'"
                        :name="pickrClass + '_name'"
                        type="text" 
                        class="form__control" 
                        v-model="rgba">
                </div>
                <div class="mr-2 flex-grow">
                    <label :for="pickrClass + '_name'" class="text-xs">Hex</label>
                    <input :id="pickrClass + '_rgba'"
                        :name="pickrClass + '_name'"
                        type="text" 
                        class="form__control" 
                        v-model="hex">
                </div>
                <div class="flex-grow">
                    <label :for="pickrClass + '_name'" class="text-xs">CMYK</label>
                    <input :id="pickrClass + '_rgba'"
                        :name="pickrClass + '_name'"
                        type="text" 
                        class="form__control" 
                        v-model="cmyk">
                </div>
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
                color: Object,
                pickr: Object,
                rgba: '',
                hex: '',
                cmyk: '',
                updating: false
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
            }
        },

        computed: {
            pickrClass() {
                return this.field.handle + '-pickr'
            }
        },

        methods: {
            pickrChanged(color) {
                this.color = color
                this.rgba = this.color.toRGBA().toString(0)
                this.hex = this.color.toHEXA().toString()
                this.cmyk = this.color.toCMYK().toString(0)
                this.$emit('input', color.toRGBA().toString(0))
            },
            changeColor(colorString) {
                if(this.pickr.setColor(colorString)) {
                    this.updating = true
                    this.pickr.applyColor()
                    this.updating = false
                }
            }
        },

        watch: {
            rgba(colorString) {
                this.changeColor(colorString)
            },
            hex(colorString) {
                this.changeColor(colorString)
            },
            cmyk(colorString) {
                this.changeColor(colorString)
            }
        },

        mounted() {
            let vm = this
            vm.pickr = Pickr.create({
                el: '.' + this.pickrClass,
                theme: 'monolith',
                default: vm.value != '' ? vm.value : 'rgba(255,87,34,1)',
                swatches: null,
                comparison: false,
                defaultRepresentation: 'RGBA',
                components: {
                    palette: true,
                    preview: true,
                    opacity: true,
                    hue: true,
                    interaction: {
                        hex: true,
                        rgba: true,
                        cmyk: true,
                        input: true,
                        cancel: false,
                        clear: false
                    }
                }
            })

            if(vm.value) {
                vm.pickr.setColor(vm.value)
                vm.pickr.applyColor()
            }
            vm.color = vm.pickr.getColor()
            vm.pickrChanged(vm.color)


            vm.pickr.on('save', (color, instance) => {
                vm.pickrChanged(color)
            })
            vm.pickr.on('change', (color, instance) => {
                vm.pickrChanged(color)
            })
        }
    }
</script>

