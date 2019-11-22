<template>
	<div>

		<div class="row border-b border-gray-300 mb-2">
			<div class="col w-4/5">
				<span class="text-lg font-light italic">{{ preview }}</span>
			</div>
			<div class="col w-1/5">
				<button type="button" class="w-full button button--info" @click="clearExpression">Reset</button>
			</div>
		</div>

		<div class="row">
			<div class="col w-1/2">
				<p-toggle
					name="manual"
					label="Manual"
					v-model="manual">
				</p-toggle>
			</div>
			<div class="col w-1/2">
				<p-select
					:disabled="manual"
					name="weekDay"
					label="Day (week)"
					:options="weekDays"
					v-model="weekDay">
				</p-select>
			</div>
		</div>

		<div class="row">
			<div class="col w-1/2">
				<p-select
					:disabled="manual"
					name="hour"
					label="Hour"
					:options="hours"
					v-model="hour">
				</p-select>
			</div>
			<div class="col w-1/2">
				<p-select

					:disabled="manual"
					name="minute"
					label="Minute"
					:options="minutes"
					v-model="minute">
				</p-select>
			</div>
		</div>

		<div class="row">
			<div class="col w-1/2">
				<p-select
					:disabled="manual"
					name="month"
					label="Month"
					:options="months"
					v-model="month">
				</p-select>
			</div>
			<div class="col w-1/2">
				<p-select
					:disabled="manual"
					name="monthDays"
					label="Day (month)"
					:options="__monthDays"
					v-model="monthDay">
				</p-select>
			</div>
		</div>

	</div>
</template>

<script>
	import cronstrue from 'cronstrue'

	export default {
		data() {
			return {
				manual: true,
				minute: '*',
				minutes: [],
				hour: '*',
				hours: [],
				monthDay: '*',
				monthDays: [],
				month: '*',
				months: [],
				monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
				weekDay: '*',
				weekDays: [],
				weekDayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
			}
		},

		computed: {
			__monthDays: function() {
				if (this.month == 2) {
					// February has 28 days (usually)..
					return _.dropRight(this.monthDays, 3)
				} else if (this.month == 4 || this.month == 6 || this.month == 9 || this.month == 11) {
					// May, June, September, November each have 30 days..
					return _.dropRight(this.monthDays, 1)
				} else {
					// Every other month has 31 days..
					return this.monthDays
				}
			},

			expression: function() {
				return this.minute + ' ' + this.hour + ' ' + this.monthDay + ' ' + this.month + ' ' + this.weekDay
			},

			preview: function() {
				return this.manual ? 'Imports will run manually' : cronstrue.toString(this.expression)
			}
		},

		watch: {
			manual: function(value) {
				if (value) {
					this.$emit('crontab', null)
					this.clearExpression()
				} else {
					this.$emit('crontab', this.expression)
				}
			},

			expression: function(value) {
				this.$emit('crontab', value)
			}
		},

		methods: {
			clearExpression() {
				this.minute = '*'
				this.hour = '*'
				this.monthDay = '*'
				this.month = '*'
				this.weekDay = '*'
			},

			generateHourOptions() {
				this.hours = _.map(_.range(24), function(value) {
					if (value % 12 == 0) {
						return {
							'label': value == 0 ? `12:00AM` : `12:00PM`,
							'value': value
						}
					} else {
						return {
							'label': value < 12 ? `${value}:00AM` : `${value-12}:00PM`,
							'value': value
						}
					}
				})

				this.hours.unshift({ 'label': 'Every hour', 'value': '*' })
			},

			generateMinuteOptions() {
				this.minutes = _.map(_.range(60), function(value) {
					return {
						'label': _.padStart(value, 2, '0'),
						'value': value
					}
				})

				this.minutes.unshift({ 'label': 'Every minute', 'value' : '*' })
			},

			generateMonthOptions() {
				this.months = _.map(_.range(1, 13), function(value) {
					return {
						'label': this.monthNames[value-1],
						'value': value
					}
				}.bind(this))

				this.months.unshift({ 'label': 'Every month', 'value' : '*' })
			},

			generateMonthDayOptions() {
				this.monthDays = _.map(_.range(1, 32), function(value) {
					return {
						'label': _.padStart(value, 2, '0'),
						'value': value
					}
				})

				this.monthDays.unshift({ 'label': 'Every', 'value' : '*' })
			},

			generateWeekDayOptions() {
				this.weekDays = _.map(_.range(1, 8), function(value) {
					return {
						'label': this.weekDayNames[value-1],
						'value': value
					}
				}.bind(this))

				this.weekDays.unshift({ 'label': 'Every', 'value' : '*' })
			}
		},

		created() {
			this.generateHourOptions()
			this.generateMinuteOptions()
			this.generateMonthOptions()
			this.generateMonthDayOptions()
			this.generateWeekDayOptions()
		}
	}
</script>