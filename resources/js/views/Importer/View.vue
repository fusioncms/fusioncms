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
						<th class="w-6/12">Progress</th>
						<th class="w-2/12">Status</th>
						<th class="w-2/12"></th>
					</thead>
					<tbody>
						<tr class="w-full" v-for="log in logs" :key="log.id">
							<td>{{ log.happened }}</td>
							<td>
								<div v-if="log.status == 'complete'" class="shadow w-full bg-warning-100">
									<div class="bg-primary-500 text-xs leading-none py-1 text-center text-white" :style="'width: ' + log.progress + '%'">{{ log.progress }}%</div>
								</div>
								<div v-if="log.status == 'failed'" class="shadow w-full bg-warning-100">
									<div class="bg-warning-500 text-xs leading-none py-1 text-center text-white" :style="'width: ' + log.progress + '%'">{{ log.progress }}%</div>
								</div>
								<div v-if="log.status == 'running'" class="shadow w-full bg-warning-100">
									<div class="bg-warning-500 text-xs leading-none py-1 text-center text-white" :style="'width: ' + log.progress + '%'">{{ log.progress }}%</div>
								</div>
							</td>
							<td>
								<span v-if="log.status == 'complete'" class="badge badge--success">Complete</span>
								<span v-if="log.status == 'failed'" class="badge badge--danger">Failed</span>
								<span v-if="log.status == 'running'" class="badge badge--warning">In Progress...</span>
							</td>
							<td>
								<p-button @click="logid = log.id">View log</p-button>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
		
		<log-modal :logid="logid" :title="'Import Logs - ' + data.name"></log-modal>
	</div>
</template>

<script>
	import LogModal from '../../components/Importer/LogModal.vue'

	export default {
		data() {
			return {
				data: {},
				logs: [],
				logid: false,
			}
		},

		components: {
			'log-modal': LogModal
		},

		computed: {
			show: {
				get: function() {
					return this.logid !== false
				},

				set: function(value) {
					this.logid = value
				}
			}
		},

		methods: {
			loadEntries() {
				axios.get(`/api/imports/${this.$router.currentRoute.params.importer}`)
					.then(response => {
						this.data = response.data.data
						this.logs = response.data.data.logs
					})
			},

			queue(id) {
				axios.post(`/api/imports/queue/${id}`).then((response) => {
                    toast('Import has been added to the queue.', 'success')

                    this.loadEntries()
                }).catch((response) => {
                    toast(response.message, 'failed')
                });
			}
		},

		beforeRouteEnter(to, from, next) {
			next(function(vm) {
				vm.loadEntries()
			})
		}
	}
</script>