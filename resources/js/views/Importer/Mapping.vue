<template>
	<div>
		<portal to="actions">
			<router-link :to="{ name: 'importer'}" class="button mr-3">Go Back</router-link>
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
						
						<component
							v-if="loaded"
							:is="mod + '-mapping'"
							:mod="mod"
							:group="group">
						</component>
					</p-card>	
				</form>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'
	import UserMapping from '../../components/Importer/UserMapping.vue'
	import MatrixMapping from '../../components/Importer/MatrixMapping.vue'
	import TaxonomyMapping from '../../components/Importer/TaxonomyMapping.vue'

	export default {
		head: {
            title() {
                return {
                    inner: 'Map Import'
                }
            }
		},
		
		data() {
			return {
				id: null,
				mod: null,
				group: 0,
				loaded: false
			}
		},

		components: {
			'users-mapping': UserMapping,
			'taxonomies-mapping': TaxonomyMapping,
			'matrices-mapping': MatrixMapping,
		},

		computed: {
			...mapGetters({
				formMappings: 'mapper/getFormMappings'
			})
		},

		methods: {
			...mapActions({
				setMappingOptions: 'mapper/setMappingOptions',
				setOrigMappings: 'mapper/setOrigMappings',
			}),

			submit() {
				axios.patch(`/api/imports/mapping/${this.id}`, {
                    mappings: this.formMappings,
                }).then((response) => {
					toast('Import Mapping successfully saved', 'success')

					this.$router.push(`/importer/view/${this.id}`)
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
					vm.id    = response.data.data.id
					vm.mod   = response.data.data.module
					vm.group = response.data.data.group

					let mapping = response.data.data.mappings || {}
					let columns = response.data.data.preview[0]
					let preview = response.data.data.preview[1]
					let optObj  = _.zipObject(columns, preview)
					let options = _.map(optObj, (label, value) => {
						return {
							'label': `[${value}] eg: ${label}`,
							'value': String(value).toLowerCase()
						}
					})

					options.unshift({
						'label': 'Use default',
						'value': null
					})

					options.unshift({
						'label': 'Don\'t import',
						'value': false
					})
					
					vm.setMappingOptions(options)
					vm.setOrigMappings(mapping)
					vm.loaded = true
				})
			}))
		}
	}
</script>