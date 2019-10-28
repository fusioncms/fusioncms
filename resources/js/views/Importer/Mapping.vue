<template>
	<div>
		<portal to="actions">
			<router-link :to="{ name: 'importer'}" class="button mr-3">Go Back</router-link>
			<router-link :to="{ name: 'importer.edit', params: {name: this.id} }" class="button mr-3">Back to Edit</router-link>
			<button type="submit" @click.prevent="submit" class="button button--primary">Save</button>
		</portal>

		<div class="row">
			<div class="content-container">
				<form @submit.prevent="submit">
					<p-card>
						<div class="row border-b mb-3">
							<div class="col flex-1 font-bold">
								Field
							</div>
							<div class="col flex-1 font-bold">
								Column
							</div>
							<div class="col flex-1 font-bold">
								Default Value
							</div>
						</div>
						
						<user-mapping v-if="module == 'users'"></user-mapping>
					</p-card>	
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
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

		computed: {
			...mapGetters({
				formMappings: 'mapper/getFormMappings'
			})
		},

		methods: {
			...mapActions({
				setMappingOptions: 'mapper/setMappingOptions',
				setFormMappings: 'mapper/setFormMappings'
			}),

			submit() {
				axios.patch(`/api/imports/mapping/${this.id}`, {
                    mappings: this.formMappings,
                }).then((response) => {
					toast('Import Mapping successfully saved', 'success')
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
					vm.id      = response.data.data.id
					vm.module  = response.data.data.module

					let columns = response.data.data.preview[0][0]
					let preview = response.data.data.preview[0][1]
					let mapping = _.zipObject(columns, preview)
					let options = _.map(mapping, (label, value) => {
						return {
							'label': `<${value}> eg: ${label}`,
							'value': value
						}
					})

					vm.setMappingOptions(options)
					vm.setFormMappings(response.data.data.mappings || {})
				})
			}))
		}
	}
</script>