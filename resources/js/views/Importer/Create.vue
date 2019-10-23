<template>
	<div>
		<portal to="title">
			<app-title icon="ship">Create Import</app-title>
		</portal>

		<portal to="actions">
			<router-link :to="{ name: 'importer' }" class="button mr-3">Go Back</router-link>
			<button type="submit" @click.prevent="submit" class="button button--primary">Save &amp; Continue</button>
		</portal>

		<div class="row">
			<div class="content-container">
				<form @submit.prevent="submit">
					<p-card>
						<div class="row">
							<div class="col w-full xxl:w-2/3">
								<p-input
									name="name"
									label="Name"
									help="What this import feed be called."
									autocomplete="off"
									autofocus
									required
									:has-error="form.errors.has('name')"
									:error-message="form.errors.get('name')"
									v-model="form.name">
								</p-input>

								<p-slug
									name="handle"
									label="Handle"
									help="Unique identifier to index this import feed."
									autocomplete="off"
									required
									delimiter="_"
									:watch="form.name"
									:has-error="form.errors.has('handle')"
									:error-message="form.errors.get('handle')"
									v-model="form.handle">
								</p-slug>

								<p-input
									name="url"
									label="URL"
									help="File location import will reference."
									autocomplete="off"
									required
									:has-error="form.errors.has('url')"
									:error-message="form.errors.get('url')"
									v-model="form.url">
								</p-input>

								<p-select
                                    name="module"
                                    label="Module"
                                    help="Which module do you wish to import to?"
                                    :options="[
                                        {
                                            'label': 'Users',
                                            'value': 'users',
                                        }
                                    ]"
                                    :has-error="form.errors.has('module')"
                                    :error-message="form.errors.get('module')"
                                    v-model="form.module">
                                </p-select>

                                <p-checkbox-group label="Strategy" help="Strategy used when duplicate record is found or record is missing from import.">
                                	<p-checkbox name="create" id="create" native-value="Create" v-model="form.strategy">Create</p-checkbox>
                                	<p-checkbox name="update" id="update" native-value="Update" v-model="form.strategy">Update</p-checkbox>
                                	<p-checkbox name="disable" id="disable" native-value="Disable" v-model="form.strategy">Disable</p-checkbox>
                                	<p-checkbox name="delete" id="delete" native-value="Delete" v-model="form.strategy">Delete</p-checkbox>
                                </p-checkbox-group>


                                <p-toggle
                                	name="backup"
                                	label="Backup"
                                	help="Backup data before importing?"
                                	v-model="form.backup">
                                </p-toggle>

							</div>
						</div>
					</p-card>
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import Form from '../../forms/Form'

	export default {
		data() {
			return {
				form: new Form({
					name: '',
					handle: '',
					url: '',
					module: 'users',
					strategy: [],
					backup: false
				})
			}
		},

		methods: {
			submit() {
				this.form.post('/api/imports').then((response) => {
					toast('Import successfully saved', 'success')

					this.$router.push(`/importer/${response.data.id}`)
				}).catch((response) => {
					toast(response.message, 'failed')
				})
			}
		}
	}
</script>