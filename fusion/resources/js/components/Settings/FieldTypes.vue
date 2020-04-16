<template>
	<div>
		<portal name="setting-actions" to="actions">
			<router-link :to="{ name: 'settings' }" class="button mr-3">Go Back</router-link>
			<button type="submit" @click.prevent="submit" class="button button--primary">Save Fieldtypes</button>
		</portal>

		<div class="row">
	        <div class="content-container">
	            <form @submit.prevent="submit" enctype="multipart/form-data">
	                <div class="col w-full xl:w-2/3 mx-auto">
	                    <p-card>
	                        <div v-for="(fieldtype) in fieldtypes" :key="fieldtype.handle">
	                            <div class="flex flex-col lg:flex-row lg:justify-between">
	                                <div class="mb-6 lg:mb-0">
	                                    <h3><fa-icon :icon="['fas', fieldtype.icon]" class="fa-fw mr-2"></fa-icon> {{ fieldtype.name }}</h3>

	                                    <p class="text-sm">{{ fieldtype.description }}</p>
	                                </div>

	                                <div>
	                                    <p-checkbox-group label="Available Stuctures">
	                                        <p-checkbox v-for="structure in structures" :name="structure.handle" :key="structure.handle" :id="structure.handle" :native-value="structure.handle" v-model="values[fieldtype.handle]">{{ structure.name }}</p-checkbox>
	                                    </p-checkbox-group>
	                                </div>
	                            </div>

	                            <hr>
	                        </div>
	                    </p-card>
	                </div>
	            </form>
	        </div>
	    </div>
	</div>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		name: 'settings-fieldtypes',

		data() {
            return {
                fieldtypes: [],
                structures: [],
                values:     [],
            }
        },

        props: {
			settings: {
				type: Array,
				required: true
			}
		},

		methods: {
			...mapActions({
				setSection: 'settings/setSection'
			}),

			submit() {
				axios.patch('/api/settings/fieldtypes', {
					'structures': JSON.stringify(this.values)
				}).then((response) => {
					this.setSection({
						handle: this.section,
						section: response.data.data
					})

				    toast('Settings have been updated.', 'success')
				}).catch(error => {
					toast(error.message, 'failed')
				})
			}
		},

		created() {
			axios.all([
			    axios.get('/api/fieldtypes'),
			    axios.get('/api/structures'),
			]).then(axios.spread(function (fieldtypesResponse, structuresResponse) {
				const setting    = _.find(this.settings, ['handle', 'structures'])
				let   values     = _.isEmpty(values) ? {} : JSON.parse(setting.value)
				const fieldtypes = fieldtypesResponse.data.data
				const structures = structuresResponse.data.data

				if (_.isEmpty(values)) {
				    _.each(fieldtypes, function(fieldtype) {
				        let enabled = _.reject(structures, function(structure) {
				            return _.includes(fieldtype.exclude, structure.handle)
				        })

				        values[fieldtype.handle] = _.map(enabled, function(structure) {
				            return structure.handle
				        })
				    })
				}

				this.fieldtypes = fieldtypes
				this.structures = structures
				this.values     = values
			}.bind(this)))
		}
	}
</script>