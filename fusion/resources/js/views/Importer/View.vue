<template>
	<div>
		<portal to="title">
			<app-title icon="ship">Importer</app-title>
		</portal>

		<portal to="actions">
			<router-link :to="{ name: 'importer' }" class="button mr-3">Go Back</router-link>
            <button type="button" @click="queue($route.params.importer)" class="button button--primary">Run Import</button>
		</portal>

		<div class="row">
			<div class="content-container">
				<table>
					<thead>
						<th class="w-2/12">Scheduled</th>
						<th class="w-5/12">Progress</th>
						<th class="w-3/12">Status</th>
						<th class="w-2/12"></th>
					</thead>
					<tbody>
						<tr class="w-full" v-for="(entry, index) in entries" :key="index">
							<td>{{ entry.happened }}</td>
							<td>
								<div v-if="entry.status == 'setup'" class="shadow w-full bg-warning-100">
									<div class="bg-primary-500 text-xs leading-none py-1 text-center text-white" :style="'width: ' + entry.progress + '%'">{{ entry.progress }}%</div>
								</div>
								<div v-if="entry.status == 'complete'" class="shadow w-full bg-warning-100">
									<div class="bg-success-500 text-xs leading-none py-1 text-center text-white" :style="'width: ' + entry.progress + '%'">{{ entry.progress }}%</div>
								</div>
								<div v-if="entry.status == 'failed'" class="shadow w-full bg-warning-100">
									<div class="bg-danger-500 text-xs leading-none py-1 text-center text-white" :style="'width: ' + entry.progress + '%'">{{ entry.progress }}%</div>
								</div>
								<div v-if="entry.status == 'running'" class="shadow w-full bg-warning-100">
									<div class="bg-warning-500 text-xs leading-none py-1 text-center text-white" :style="'width: ' + entry.progress + '%'">{{ entry.progress }}%</div>
								</div>
							</td>
							<td>
								<span v-if="entry.status == 'setup'" class="badge badge--primary">Setup</span>
								<span v-if="entry.status == 'complete'" class="badge badge--success">Complete</span>
								<span v-if="entry.status == 'failed'" class="badge badge--danger">Failed</span>
								<span v-if="entry.status == 'running'" class="badge badge--warning">In Progress...</span>
							</td>
							<td>
								<p-button @click="entryId = entry.id">View log</p-button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		
		<log-modal :entryId="entryId" :title="'Import Logs - ' + data.name"></log-modal>
	</div>
</template>

<script>
	import LogModal from '../../components/Importer/LogModal.vue'

	export default {
		head: {
            title() {
                return {
                    inner: 'View Import'
                }
            }
		},
		
		data() {
			return {
				data: {},
				entries: [],
				newEntriesTimeout: null,
                newEntriesTimer: 5000,
				entryId: false,
			}
		},

		components: {
			'log-modal': LogModal
		},

		computed: {
			show: {
				get: function() {
					return this.entryId !== false
				},

				set: function(value) {
					this.entryId = value
				}
			}
		},

		watch: {
			entryId: function(value) {
				clearTimeout(this.newEntriesTimeout)

				if (value === false) {
					this.loadEntries()
				}
			}
		},

		methods: {
			loadEntries() {
				axios.get(`/api/imports/${this.$router.currentRoute.params.importer}`)
					.then(response => {
						this.data    = response.data.data
						this.entries = response.data.data.logs
					})

				this.newEntriesTimeout = setTimeout(() => {
					this.loadEntries()
				}, this.newEntriesTimer)
			},

			queue(id) {
				axios.post(`/api/imports/queue/${id}`).then((response) => {
                    toast('Import has been added to the queue.', 'success')
                }).catch((response) => {
                    toast(response.message, 'failed')
                });
			}
		},

		beforeRouteEnter(to, from, next) {
			next(function(vm) {
				vm.loadEntries()
			})
		},

		beforeRouteLeave (to, from, next) {
			clearTimeout(this.newEntriesTimeout)
			next()
		}
	}
</script>