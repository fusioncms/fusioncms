<template>
	<p-modal name="log-modal" v-model="$parent.show" :title="title" no-footer extra-large>
		<table v-if="ready">
			<thead>
				<th class="w-2/12">Scheduled</th>
				<th class="w-8/12">Progress</th>
				<th class="w-2/12">Status</th>
			</thead>
			<tbody>
				<tr>
					<td>{{ data.happened }}</td>
					<td>
						<div v-if="data.status == 'complete'" class="shadow w-full bg-warning-100">
							<div class="bg-primary-500 text-xs leading-none py-1 text-center text-white" :style="'width: ' + data.progress + '%'">{{ data.progress }}%</div>
						</div>
						<div v-if="data.status == 'failed'" class="shadow w-full bg-warning-100">
							<div class="bg-warning-500 text-xs leading-none py-1 text-center text-white" :style="'width: ' + data.progress + '%'">{{ data.progress }}%</div>
						</div>
						<div v-if="data.status == 'running'" class="shadow w-full bg-warning-100">
							<div class="bg-warning-500 text-xs leading-none py-1 text-center text-white" :style="'width: ' + data.progress + '%'">{{ data.progress }}%</div>
						</div>
					</td>
					<td>
						<span v-if="data.status == 'complete'" class="badge badge--success">Complete</span>
						<span v-if="data.status == 'failed'" class="badge badge--danger">Failed</span>
						<span v-if="data.status == 'running'" class="badge badge--warning">In Progress...</span>
					</td>
				</tr>
			</tbody>
		</table>

		<table v-if="ready">
			<thead>
				<th class="w-8/12">Message</th>
				<th class="w-2/12">Level</th>
				<th class="w-2/12">Happened</th>
			</thead>
			<tbody>
				<tr class="w-full" v-for="(entry, key) in entries" :key="key">
					<td>
						{{ entry.message }}
						<div v-if="entry.context" v-text="entry.context" class="text-sm text-gray-600">Read more</div>
					</td>
					<td>
						<span v-if="entry.level == 200" class="badge badge--info">{{ entry.level_name }}</span>
						<span v-if="entry.level == 250" class="badge badge--success">{{ entry.level_name }}</span>
						<span v-if="entry.level == 300" class="badge badge--warning">{{ entry.level_name }}</span>
						<span v-if="entry.level == 400" class="badge badge--danger">{{ entry.level_name }}</span>
					</td>
					<td>{{ entry.happened }}</td>
				</tr>
			</tbody>
		</table>

		<div v-if="! ready" class="w-full text-center p-5">
			<fa-icon :icon="['fas', 'spinner-third']" class="fa-spin mr-3"></fa-icon> Loading logs...
		</div>
	</p-modal>
</template>

<script>
	export default {
		data() {
			return {
				data: {},
				entries: [],
				entriesFrom: 0,
				entriesPerPage: 25,
				newEntriesTimeout: null,
                newEntriesTimer: 5000,
                ready: false
			}
		},

		props: {
			title: {
				type: String,
				default: 'Logs'
			},
			logid: {
				type: Number|Boolean,
				required: true
			}
		},

		computed: {
			endpoint: function() {
				return `/api/imports/logs/${this.logid}?from=${this.entriesFrom}&limit=${this.entriesPerPage}`
			}
		},

		watch: {
			logid: function(value) {
				clearTimeout(this.newEntriesTimeout)

				if (value !== false) {
					this.entries = []
					this.entriesFrom = 0
					this.ready = false

					this.loadEntries()
				}
			}
		},

		methods: {
			loadEntries: function() {
				this.newEntriesTimeout = setTimeout(() => {
					axios.get(this.endpoint)
						.then(response => {
							this.data  = response.data.data
							this.ready = true

							const logs = _.map(response.data.data.logs.data, log => {
								log['context'] = _.size(log['context']) > 0 ? _(log['context']).value() : null

								return log
							});

							this.entries     = this.entries.concat(logs)
							this.entriesFrom = this.entries.length
						})

					this.loadEntries()
				}, this.newEntriesTimer)
			}
		},

		destroyed() {
			clearTimeout(this.newEntriesTimeout)
		}
	}
</script>