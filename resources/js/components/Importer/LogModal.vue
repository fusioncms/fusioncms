<template>
	<p-modal class="h-screen" name="log-modal" v-model="$parent.show" :title="title" no-footer extra-large>
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
						<div v-if="data.status == 'setup'" class="shadow w-full bg-warning-100">
							<div class="bg-primary-500 text-xs leading-none py-1 text-center text-white" :style="'width: ' + data.progress + '%'">{{ data.progress }}%</div>
						</div>
						<div v-if="data.status == 'complete'" class="shadow w-full bg-warning-100">
							<div class="bg-success-500 text-xs leading-none py-1 text-center text-white" :style="'width: ' + data.progress + '%'">{{ data.progress }}%</div>
						</div>
						<div v-if="data.status == 'failed'" class="shadow w-full bg-warning-100">
							<div class="bg-warning-500 text-xs leading-none py-1 text-center text-white" :style="'width: ' + data.progress + '%'">{{ data.progress }}%</div>
						</div>
						<div v-if="data.status == 'running'" class="shadow w-full bg-warning-100">
							<div class="bg-warning-500 text-xs leading-none py-1 text-center text-white" :style="'width: ' + data.progress + '%'">{{ data.progress }}%</div>
						</div>
					</td>
					<td>
						<span v-if="data.status == 'setup'" class="badge badge--primary">Complete</span>
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
		</table>

		<div class="overflow-y-auto" style="height: 30rem;">
			<table>
				<tbody>
					<tr class="w-full" v-for="(entry, key) in entries" :key="key">
						<td class="w-8/12">
							{{ entry.message }}
							<div v-if="entry.context" v-text="entry.context" class="text-sm text-gray-600">Read more</div>
						</td>
						<td class="w-2/12">
							<span v-if="entry.level == 200" class="badge badge--info">{{ entry.level_name }}</span>
							<span v-if="entry.level == 250" class="badge badge--success">{{ entry.level_name }}</span>
							<span v-if="entry.level == 300" class="badge badge--warning">{{ entry.level_name }}</span>
							<span v-if="entry.level == 400" class="badge badge--danger">{{ entry.level_name }}</span>
						</td>
						<td class="w-2/12">
							{{ entry.happened }}
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<div v-if="! ready" class="w-full text-center p-5">
			<fa-icon :icon="['fas', 'circle-notch']" class="fa-spin mr-3"></fa-icon> Loading logs...
		</div>
	</p-modal>
</template>

<script>
	export default {
		data() {
			return {
				data: {},
				entries: [],
				entriesPage: 1,
				entriesPerPage: 100,
				newEntriesTimeout: null,
                newEntriesTimer: 2500,
                ready: false
			}
		},

		props: {
			title: {
				type: String,
				default: 'Logs'
			},
			entryId: {
				type: Number|Boolean,
				required: true
			}
		},

		computed: {
			endpoint: function() {
				return `/api/imports/logs/${this.entryId}?page=${this.entriesPage}&limit=${this.entriesPerPage}`
			}
		},

		watch: {
			entryId: function(value) {
				clearTimeout(this.newEntriesTimeout)

				if (value !== false) {
					this.entries = []
					this.entriesPage = 1
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
							this.ready = true
							this.data  = response.data.data

							// Only load new entries if they exist..
							if (this.entriesPage <= response.data.data.logs.pages) {
								const logs = _.map(response.data.data.logs.data, log => {
									log['context'] = _.size(log['context']) > 0 ? _(log['context']).value() : null

									return log
								});

								this.entries     = logs.concat(this.entries)
								this.entriesPage = this.entriesPage + 1
							}
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