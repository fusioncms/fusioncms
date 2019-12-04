<template>
	<div>
		<portal to="title">
			<app-title icon="save">Backups</app-title>
		</portal>

		<portal to="actions">
			<p-button v-modal:settings class="button mr-3">Settings</p-button>
			<p-button @click.prevent v-modal:confirm-form class="button--primary">Run Backup</p-button>
		</portal>

        <div class="row">
            <div class="content-container">
            	<table v-if="ready">
					<thead>
						<th>Disk</th>
						<th># Backups</th>
						<th>Newest</th>
						<th>Storage Used</th>
						<th>Status</th>
					</thead>
					<tbody>
						<tr v-for="destination in destinations">
							<td>
								<code>{{ destination.disk }}</code>
							</td>
							<td>{{ destination.amount }}</td>
							<td>{{ destination.newest }}</td>
							<td>{{ destination.size }}</td>
							<td>
								<span v-if="destination.isReachable" class="badge badge--success">Reachable</span>
								<span v-else class="badge badge--danger">Reachable</span>
								<span v-if="destination.isHealthy" class="badge badge--success">Healthy</span>
								<span v-else class="badge badge--danger">Healthy</span>
							</td>
						</tr>
					</tbody>
				</table>

				<table v-if="ready" v-for="destination in destinations">
					<thead>
						<th>Name</th>
						<th>Happened</th>
						<th>Storage Used</th>
						<th></th>
					</thead>
					<tbody>
						<tr v-for="backup in destination.backups">
							<td>{{ backup.name }}</td>
							<td>{{ backup.happened }}</td>
							<td>{{ backup.size }}</td>
							<td>
								<p-dropdown right>
									<fa-icon icon="bars"></fa-icon>

									<template slot="options">
										<p-dropdown-item @click.prevent v-modal:restore-form="backup">
											Restore
										</p-dropdown-item>

										<p-dropdown-item @click="download(backup.name)">
											Download
										</p-dropdown-item>

										<p-dropdown-item v-if="! backup.isNewest" @click.prevent v-modal:delete-form="backup">
											Delete
										</p-dropdown-item>
									</template>
								</p-dropdown>
							</td>
						</tr>
					</tbody>
				</table>
            </div>
        </div>

        <portal to="modals">
            <settings-modal section="backups"></settings-modal>

            <!-- Restore from existing backup -->
            <p-modal name="restore-form" title="Restore Confirmation Form" key="restore_form">
                <p>Are you sure you wish to restore from this backup?</p>

        		<p-checkbox name="saveBackup" v-model="saveBackup">
        			Backup before restoring
        		</p-checkbox>
                
                <template slot="footer" slot-scope="form">
                    <p-button v-modal:restore-form @click="restore(form.data.name)" theme="warning" class="ml-3">Restore</p-button>
                    <p-button v-modal:restore-form>Cancel</p-button>
                </template>
            </p-modal>

            <!-- Run manual backup process -->
			<p-modal name="confirm-form" title="Confirmation Form" key="confirm_form">
                <p>Are you sure you wish to perform a manual backup?</p>
				<p>It is also possible to enable scheduled backups from the Settings interface.</p>

                <template slot="footer" slot-scope="form">
                    <p-button v-modal:confirm-form @click="backup()" theme="info" class="ml-3">Backup</p-button>
                    <p-button v-modal:confirm-form>Cancel</p-button>
                </template>
            </p-modal>

            <!-- Delete existing backup -->
			<p-modal name="delete-form" title="Delete Form" key="delete_form">
                <p>Are you sure you want to permenantly delete this backup?</p>

                <template slot="footer" slot-scope="form">
                    <p-button v-modal:delete-form @click="destroy(form.data.name)" theme="danger" class="ml-3">Delete</p-button>
                    <p-button v-modal:delete-form>Cancel</p-button>
                </template>
            </p-modal>
        </portal>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				destinations: [],
				ready: false,
				saveBackup: true,
			}
		},

		methods: {
            refresh() {
            	this.ready = false

            	axios.get('/api/backups').then(response => {
            		this.destinations = response.data.data
            		this.ready        = true
            		this.saveBackup   = true
            	})
            },

            download(backup) {
            	window.open(`/backups/${backup}`, '_blank')
            },

			restore(backup) {
				axios.post(`/api/backups/restore/${backup}`, { saveBackup: this.saveBackup }).then(response => {
					toast('Backup successfully restored!', 'success')

					this.refresh()
				})
			},

			backup() {
				axios.post('/api/backups/store').then(response => {
					toast('Backup successfully created!', 'success')

					this.refresh()
				})
			},

			destroy(backup) {
				axios.delete(`/api/backups/${backup}`).then((response) => {
                    toast('Backp successfully deleted!', 'success')

                    this.refresh()
                })
			}
		},

		beforeRouteEnter(to, from, next) {
			next(function(vm) {
				vm.refresh()
			})
		}
	}
</script>