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
				<entry-form :form="form"></entry-form>
			</div>
		</div>
	</div>
</template>

<script>
	import Form from '../../forms/Form'
	import EntryForm from './Form.vue'

	export default {
		data() {
			return {
				form: new Form({
					name: '',
					handle: '',
					location: '',
					module: 'users',
					group: 0,
					strategy: [],
					backup: false
				})
			}
		},

		components: {
			'entry-form': EntryForm
		},

		methods: {
			submit() {
				this.form.post('/api/imports').then((response) => {
					toast('Import successfully saved', 'success')

					this.$router.push(`/importer/mapping/${response.data.id}`)
				}).catch((response) => {
					toast(response.message, 'failed')
				})
			}
		}
	}
</script>