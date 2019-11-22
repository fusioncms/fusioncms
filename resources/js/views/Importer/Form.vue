<template>
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
						name="source"
						label="Source"
						help="Google Sheets sheet reference URL."
						autocomplete="off"
						required
						:has-error="form.errors.has('source')"
						:error-message="form.errors.get('source')"
						v-model="form.source">
					</p-input>

					<p-select
                        name="module"
                        label="Module"
                        help="Which module do you wish to import to?"
                        :options="[
                            {
                                'label': 'Users',
                                'value': 'users',
                            },
                            {
                            	'label': 'Taxonomies',
                            	'value': 'taxonomies',
                            },
                            {
                            	'label': 'Matrices',
                            	'value': 'matrices',
                            }
                        ]"
                        :has-error="form.errors.has('module')"
                        :error-message="form.errors.get('module')"
                        v-model="form.module">
                    </p-select>

                    <p-select
                    	v-if="groupOptions.length > 0"
                    	name="group"
                        label="Group"
                        help="Which group do you wish to import to?"
                        :options="groupOptions"
                        :has-error="form.errors.has('group')"
                        :error-message="form.errors.get('group')"
                    	v-model="form.group">
                    </p-select>

                    <p-checkbox-group
							label="Strategy"
							help="Strategy used when matching record is detected or missing from import (based on an unique identifier)."
							:has-error="form.errors.has('strategy')"
							:error-message="form.errors.get('strategy')">
						<p-checkbox name="create" id="create" native-value="create" v-model="form.strategy">
							Create <span class="text-gray-500 italic">- Adds new elements if they do not already exist.</span>
						</p-checkbox>
						<p-checkbox name="update" id="update" native-value="update" v-model="form.strategy">
							Update <span class="text-gray-500 italic">- Updates elements when matching record is found.</span>
						</p-checkbox>
						<p-checkbox name="disable" id="disable" native-value="disable" v-model="form.strategy">
							Disable <span class="text-gray-500 italic">- Disables any elements that are missing from the import.</span>
						</p-checkbox>
						<p-checkbox name="delete" id="delete" native-value="delete" v-model="form.strategy">
							Delete <span class="text-gray-500 italic">- Deletes any elements that are missing from the import.</span>
						</p-checkbox>
					</p-checkbox-group>

                    <!--
                    <p-toggle
                    	name="backup"
                    	label="Backup"
                    	help="Backup data before importing?"
                    	v-model="form.backup">
                    </p-toggle>
                	-->

				</div>
			</div>
		</p-card>
	</form>
</template>

<script>
	export default {
		data() {
			return {
				groups: {},
				groupOptions: []
			}
		},

		props: {
			form: {
				type: Object,
				required: true
			}
		},

		watch: {
			'form.module': function(value) {
				this.setFormGroup(value)
			}
		},

		methods: {
			setFormGroup: function(value) {
				this.groupOptions = []
				this.form.group   = 0

				if (_.has(this.groups, value)) {
					this.groupOptions = this.groups[value]

					if (this.form.group == 0) {
						this.form.group = _.head(this.groupOptions).value
					}
				}
			},

			// updateCron(expression) {
			// 	this.form.schedule = expression
			// }
		},

		created() {
			axios.all([
				axios.get('/api/taxonomies'),
				axios.get('/api/matrices')
			]).then(axios.spread(function (taxonomies, matrices) {
				this.groups['taxonomies'] = _.map(taxonomies.data.data, function(taxonomy) {
					return {
						'label': taxonomy.name,
						'value': taxonomy.id
					}
				})

				this.groups['matrices'] = _.reject(matrices.data.data, ['type', 'page'])
				this.groups['matrices'] = _.map(this.groups['matrices'], function(matrix) {
					return {
						'label': matrix.name,
						'value': matrix.id
					}
				})

				this.setFormGroup(this.form.module)
			}.bind(this)))
		}
	}
</script>