<template>
    <div class="color-picker">
        <div class="form__group">
            <label :for="field.handle" class="form__label">{{ field.name }}</label>

            <div class="flex items-end">
                <div class="flex-grow mr-3">
                    <label :for="pickrClass + '_hex'" class="text-xs">Picker</label>
                    <div :class="pickrClass"></div>
                </div>
                
                <div class="mr-3 flex-grow">
                    <label :for="pickrClass + '_hex'" class="text-xs">Hex</label>
                    <input :id="pickrClass + '_hex'"
                        :name="pickrClass + '_hex'"
                        type="text"
                        class="form__control" 
                        v-model="hex">
                </div>

                <div class="flex-grow">
                    <label :for="pickrClass + '_rgba'" class="text-xs">RGBA</label>
                    <input :id="pickrClass + '_rgba'"
                        :name="pickrClass + '_rgba'"
                        type="text" 
                        class="form__control" 
                        v-model="rgba">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Pickr from '@simonwep/pickr'

    export default {
        name: 'color-picker-fieldtype',

        data() {
            return {
                color: {},
                pickr: {},
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
            },
        },

        methods: {
            pickrChanged(color) {
                this.color = color

                this.hex = this.color ? this.color.toHEXA().toString() : ''
                this.rgba = this.color ? this.color.toRGBA().toString(0) : ''

                this.$emit('input', this.rgba)
            },

            changeColor(colorString) {
                if (this.pickr.setColor(colorString)) {
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
        },

        mounted() {
            let defaultColor = this.value === null && this.field.settings.default ? this.field.settings.default : ''

            this.pickr = Pickr.create({
                el: '.' + this.pickrClass,
                theme: 'monolith',
                default: this.value && this.value != '' ? this.value : defaultColor,
                swatches: [
                    '#000000',
                    '#FFFFFF',
                    
                    '#F7FAFC',
                    '#EDF2F7',
                    '#E2E8F0',
                    '#CBD5E0',
                    '#A0AEC0',
                    '#718096',
                    '#4A5568',
                    '#2D3748',
                    
                    '#F56565',
                    '#F98C12',
                    '#F6E05E',
                    '#BF7E32',
                    '#48BB78',
                    '#38B2AC',
                    '#4299E1',
                    '#667EEA',
                    '#9F7AEA',
                    '#ED64A6',
                ],
                comparison: true,
                components: {
                    opacity: this.transparency,
                    hue: true,

                    // interaction: {
                    //     // hex: true,
                    //     // rgba: true,
                    //     // input: true,
                    //     // clear: true,
                    // }
                }
            })

            if (this.value) {
                this.changeColor(this.value)
                
                this.color = this.pickr.getColor()
                
                this.pickrChanged(this.color)
            } else if (defaultColor) {
                this.changeColor(defaultColor)
                
                this.color = this.pickr.getColor()
                
                this.pickrChanged(this.color)
            }

            this.pickr.on('save', (color, instance) => {
                this.pickrChanged(color)
            })

            this.pickr.on('change', (color, instance) => {
                this.pickrChanged(color)
            })

            this.pickr.on('clear', (instance) => {
                this.pickrChanged(null)
            })
        }
    }
</script>

