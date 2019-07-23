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
                updating: false,
                transparency: true
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
                this.rgba = this.color ? this.color.toRGBA().toString(0) : ''
                this.hex = this.color ? this.color.toHEXA().toString() : ''
                this.cmyk = this.color ?  this.color.toCMYK().toString(0) : ''
                this.$emit('input', this.rgba)
            },
            changeColor(colorString) {
                if(this.pickr.setColor(colorString)) {
                    this.pickr.applyColor()
                }
            },
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
            let defaultColor = vm.value === null && vm.field.settings.default ? vm.field.settings.default : null

            vm.pickr = Pickr.create({
                el: '.' + this.pickrClass,
                theme: 'monolith',
                default: vm.value && vm.value != '' ? vm.value : defaultColor,
                swatches: null,
                comparison: false,
                defaultRepresentation: 'RGBA',
                components: {
                    palette: true,
                    preview: true,
                    opacity: vm.transparency,
                    hue: true,
                    interaction: {
                        hex: true,
                        rgba: true,
                        cmyk: true,
                        input: true,
                        cancel: false,
                        clear: true
                    }
                }
            })

            if(vm.value) {
                vm.changeColor(vm.value)
                vm.color = vm.pickr.getColor()
                vm.pickrChanged(vm.color)
            } else if(defaultColor) {
                vm.changeColor(defaultColor)
                vm.color = vm.pickr.getColor()
                vm.pickrChanged(vm.color)
            }


            vm.pickr.on('save', (color, instance) => {
                vm.pickrChanged(color)
            })
            vm.pickr.on('change', (color, instance) => {
                vm.pickrChanged(color)
            })
            vm.pickr.on('clear', instance => {
                vm.pickrChanged(null)
            })
        }
    }
</script>

