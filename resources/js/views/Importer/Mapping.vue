<template>
	<div>
		<portal to="actions">
			<router-link :to="{ name: 'importer'}" class="button mr-3">Go Back</router-link>
			<router-link :to="{ name: 'importer.edit', params: {importer: this.id} }" class="button mr-3">Back to Edit</router-link>
			<button type="submit" @click.prevent="submit" class="button button--primary">Save</button>
		</portal>

		<div class="row">
			<user-mapping v-if="module == 'users'"></user-mapping>
		</div>
	</div>
</template>

<script>
	import UserMapping from './Forms/UserMapping.vue'

	export default {
		data() {
			return {
				id: null,
				module: null
			}
		},

		components: {
			'user-mapping': UserMapping
		},

		methods: {
			submit() {
				this.form.post(`/api/imports/mapping/${this.id}`).then((response) => {
					toast('Import Mapping successfully saved', 'success')

					this.$router.push('/importer')
				}).catch((response) => {
					toast(response.message, 'failed')
				})
			}
		},

		beforeRouteEnter(to, from, next) {
			axios.all([
				axios.get(`/api/imports/mapping/${to.params.importer}`)
			]).then(axios.spread(function (response) {
				next(function (vm) {
					vm.id     = response.data.data.id
					vm.module = response.data.data.module
				})
			}))
		}
	}
</script>