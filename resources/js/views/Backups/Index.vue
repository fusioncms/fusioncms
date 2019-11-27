<template>
	<div>
		<portal to="title">
			<app-title icon="save">Backups</app-title>
		</portal>

		<portal to="actions">
			<p-button v-modal:settings>Settings</p-button>
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