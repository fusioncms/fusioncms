<template>
	<div class="row form__group items-end">
		<div class="col flex-1">
			<label v-text="mapping.name"/>
			<span v-if="required" class="text-xs text-warning-700 float-right">required</span>
			
			<div v-if="help" role="alert" class="border-l-4 px-4 bg-secondary-100 border-secondary-500 text-xs">
				<p v-html="help"></p>
			</div>
		</div>
		<div class="col flex-1">
			<p-select
                :name="mapping.handle + '-column'"
                :options="mappingOptions"
                v-model="mapping.column">
            </p-select>
		</div>
		<div class="col flex-1">
			<div class="flex items-start">
				<div class="flex-grow mr-3">
					<label :for="mapping.handle + '-pickr'" class="text-xs">Picker</label>
					<div :class="mapping.handle + '-pickr'"></div>
				</div>
				<div class="flex-grow mr-3">
					<label :for="mapping.handle + '-hex'" class="text-xs">Hex</label>
					<input
						:id="mapping.handle + '-hex'"
						:name="mapping.handle + '-hex'"
						type="text"
						class="form__control" 
						v-model="hex"/>
				</div>
				<div class="flex-grow">
					<label :for="mapping.handle + '-rgba'" class="text-xs">RGBA</label>
					<input
						:id="mapping.handle + '-rgba'"
						:name="mapping.handle + '-rgba'"
						type="text"
						class="form__control" 
						v-model="mapping.default"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import FieldMixin from '../Mixins/fields'
	import Pickr from '@simonwep/pickr'

	export default {
		name: 'mapper-field-color',
		mixins: [ FieldMixin ],

		data() {
			return {
				pickr: null,
				hex: ''
			}
		},

		watch: {
			'mapping.default'(colorString) {
                this.changeColor(colorString)
            },

            hex(colorString) {
                this.changeColor(colorString)
            }
		},

		methods: {
			pickrChanged(color) {
                this.hex = color ? color.toHEXA().toString() : ''
                this.mapping.default = color ? color.toRGBA().toString(0) : ''
            },

            changeColor(colorString) {
                if (this.pickr.setColor(colorString)) {
                    this.pickr.applyColor()
                }
            }
		},

		mounted() {
			this.pickr = Pickr.create({
				el: '.' + this.mapping.handle + '-pickr',
				theme: 'monolith',
				default: this.mapping.default,
				comparison: true,
				components: {
                    opacity: this.settings.transparency,
                    hue: true,
                }
            }).on('save', (color, instance) => {
                this.pickrChanged(color)
            }).on('change', (color, instance) => {
                this.pickrChanged(color)
            }).on('clear', (instance) => {
                this.pickrChanged(null)
            })

            // init..
            this.changeColor(this.mapping.default)
            this.pickrChanged(this.pickr.getColor())
		}
	}
</script>