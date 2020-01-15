<template>
	<div>
		<portal to="title">
			<app-title icon="save">Backups</app-title>
		</portal>

		<portal to="actions">
			<p-button v-modal:settings class="button mr-1">Settings</p-button>
			<p-button v-modal:upload class="button mr-3">Upload</p-button>

			<p-button @click.prevent v-modal:confirm-form class="button--primary">Backup Now</p-button>
		</portal>

		<p-card no-body>
			<div class="card__body text-center" v-if="! ready">
				<fa-icon :icon="['fas', 'circle-notch']" class="fa-spin mr-3"></fa-icon> Loading backups...
			</div>

			<div v-else>
				<table v-for="destination in destinations" :key="destination.name">
					<thead>
						<th>Name</th>
						<th>Created</th>
						<th>Size</th>
						<th></th>
					</thead>

					<tbody>
						<tr v-for="backup in destination.backups" :key="backup.name">
							<td>{{ backup.name }}</td>
							<td>{{ backup.happened }}</td>
							<td>{{ backup.size }}</td>
							<td class="text-right">
								<p-dropdown right>
									<fa-icon :icon="['fas', 'bars']"></fa-icon>

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
		</p-card>

        <portal to="modals">
            <settings-modal section="backups"></settings-modal>

            <!-- Restore from existing backup -->
            <p-modal name="restore-form" title="Restore Backup" key="restore_form">
                <p>Restoring a backup will <b>replace all files and the database with the contents of the backup.</b> Unless you specify to create a new backup during this process, there will be no way to undo your changes if you change your mind.</p>

        		<p-checkbox name="saveBackup" v-model="saveBackup">
        			Create a backup before restoring
        		</p-checkbox>
                
                <template slot="footer" slot-scope="form">
                    <p-button v-modal:restore-form @click="restore(form.data.name)" theme="primary" class="ml-3">Restore</p-button>
                    <p-button v-modal:restore-form>Cancel</p-button>
                </template>
            </p-modal>

            <!-- Run manual backup process -->
			<p-modal name="confirm-form" title="Backup Now" key="confirm_form">
                <p>This will perform a full backup of your website. Backups can take up to one minute per GB of data.</p>

                <template slot="footer">
                    <p-button v-modal:confirm-form @click="backup()" theme="primary" class="ml-3">Backup</p-button>
                    <p-button v-modal:confirm-form>Cancel</p-button>
                </template>
            </p-modal>

            <!-- Delete existing backup -->
			<p-modal name="delete-form" title="Delete Backup" key="delete_form">
                <p>Are you sure you want to permenantly delete this backup?</p>

                <template slot="footer" slot-scope="form">
                    <p-button v-modal:delete-form @click="destroy(form.data.name)" theme="danger" class="ml-3">Delete</p-button>
                    <p-button v-modal:delete-form>Cancel</p-button>
                </template>
            </p-modal>

			<!-- Upload backup -->
			<p-modal name="upload" title="Upload Backup" key="upload-backup">
				<p-upload
					name="file-upload"
					ref="upload"
					accept="zip"
					:multiple="false"
					@input="upload"
				></p-upload>
			</p-modal>
        </portal>
	</div>
</template>

<script>
	export default {
		head: {
            title() {
                return {
                    inner: 'Backups'
                }
            }
		},
		
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

            upload(files) {
            	if (typeof files == 'undefined') {
            		return;
            	}

				const formData = new FormData()

				formData.append('_method', 'POST')
				formData.append('file-upload', files)

				axios.post('/api/backups/upload', formData).then(() => {
					toast('Backup successfully uploaded!', 'success')

					this.$refs.upload.remove()
					this.refresh()
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
				axios.post('/api/backups').then(response => {
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