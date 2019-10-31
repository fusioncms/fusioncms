<template>
	<div>
		<portal to="title">
			<app-title icon="ship">Edit Import</app-title>
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
	import EntryForm from './Forms/Entry.vue'

	export default {
		data() {
			return {
				id: null,
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
				this.form.patch(`/api/imports/${this.id}`).then((response) => {
					toast('Import successfully saved', 'success')

					this.$router.push(`/importer/mapping/${response.data.id}`)
				}).catch((response) => {
					toast(response.message, 'failed')
				})
			}
		},

		beforeRouteEnter(to, from, next) {
			axios.all([
				axios.get(`/api/imports/${to.params.importer}`)
			]).then(axios.spread(function (response) {
				next(function (vm) {
					vm.id = response.data.data.id

					_.forEach(response.data.data, function(value, key) {
						if (_.has(vm.form, key)) {
							vm.form[key] = value
						}
					})
				})
			}))
		}
	}
</script>