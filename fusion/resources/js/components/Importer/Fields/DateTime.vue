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
                :options="__mappingOptions"
                v-model="mapping.column">
            </p-select>
		</div>
		<div class="col flex-1">
			<div class="flex items-start">
				<div class="flex-grow mr-3">
					<input
						:id="'flatpickr_' + mapping.handle"
						:name="mapping.handle + '-pickr'"
						:placeholder="settings.placeholder"
						v-model="mapping.default"
						class="datetime__input form__control mr-2" />
				</div>
				<div class="flex-grow mr-3">
					<a href="#" class="datetime__button button button--primary px-4" @click.prevent="flatpickr.open()">
						<fa-icon icon="calendar-alt"></fa-icon>
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import flatpickr from 'flatpickr'
	import FieldMixin from '../Mixins/fields'

	export default {
		name: 'mapper-field-datetime',
		mixins: [ FieldMixin ],

		data() {
			return {
				flatpickr: null,
			}
		},

		computed: {
			__mappingOptions: function() {
				return _.reject(this.mappingOptions, [ 'label', 'Use default' ])
			}
		},

		methods: {
			emitEvent(selectedDates, dateStr, instance) {
				this.$emit('input', dateStr)
			}
		},

		mounted() {
			this.flatpickr = flatpickr(`#flatpickr_${this.mapping.handle}`, {
				altInput: true,
				enableTime: this.settings.time,
				altFormat: this.settings.format || 'Y-m-d',
				minuteIncrement: 1,
				allowInput: false,
				clickOpens: false,
				defaultDate: this.mapping.default,
				onChange: this.emitEvent,
				onValueUpdate: this.inputChanged
			})
		}
	}
</script>