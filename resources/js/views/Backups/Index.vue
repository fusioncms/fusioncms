<template>
	<div>
		<portal to="title">
			<app-title icon="save">Backups</app-title>
		</portal>

		<portal to="actions">
			<p-button @click="runCleanup">Run cleanup</p-button>
			<p-button @click="runBackup" class="button--primary">Run backup</p-button>
			<p-button v-modal:settings class="button--info">Settings</p-button>
		</portal>

        <div class="row">
            <div class="content-container">
            	<table v-if="ready">
					<thead>
						<th>Name</th>
						<th>Disk</th>
						<th>Status</th>
						<th># Backups</th>
						<th>Newest</th>
						<th>Storage Used</th>
					</thead>
					<tbody>
						<tr v-for="backup in backups">
							<td>{{ backup.name }}</td>
							<td>
								<code>{{ backup.disk }}</code>
							</td>
							<td>
								<span v-if="backup.isReachable" class="badge badge--success">Reachable</span>
								<span v-if="! backup.isReachable" class="badge badge--fail">Reachable</span>
								<span v-if="backup.isHealthy" class="badge badge--success">Healthy</span>
								<span v-if="! backup.isHealthy" class="badge badge--fail">Healthy</span>
							</td>
							<td>{{ backup.amount }}</td>
							<td>{{ backup.newest }}</td>
							<td>{{ backup.usedStorage }}</td>
						</tr>
					</tbody>
				</table>
            </div>
        </div>

        <portal to="modals">
            <settings-modal section="backups"></settings-modal>
        </portal>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				backups: [],
				ready: false
			}
		},

		methods: {
			runCleanup() {
				axios.get('/api/backups/cleanup').then(response => {
					toast('Backup successfully created', 'success')

					this.backups = response.data.data
				}).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
			},

			runBackup() {
				axios.get('/api/backups/run').then(response => {
					toast('Backup successfully cleaned', 'success')

					this.backups = response.data.data
				}).catch((response) => {
                    toast(response.response.data.message, 'failed')
                })
			}
		},

		beforeRouteEnter(to, from, next) {
			axios.all([
                axios.get('/api/backups'),
            ]).then(axios.spread(function (backups) {
                next(function(vm) {
                    vm.backups = backups.data.data
                    vm.ready   = true
                })
            }))
		}
	}
</script>