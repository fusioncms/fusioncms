<template>
	<div class="row form__group">
		<div class="col flex-1">
			<label v-text="mapping.name"/>
		</div>
		<div class="col flex-1">
			<p-select
                :name="mapping.handle"
                :options="options"
                v-model="mapping.column">
            </p-select>
		</div>
		<div class="col flex-1">
			<p-input v-if="mapping.default !== false"
				v-model="mapping.default">
			</p-input>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		props: [ 'name', 'default' ],

		computed: {
			...mapGetters({
				options:  'mapper/getMappingOptions',
				mappings: 'mapper/getFormMappings'
			}),

			handle: function() {
				return _.kebabCase(this.name)
			},

			mapping: function() {
				return this.mappings[this.handle]
			}
		},

		methods: {
			...mapActions({
				setFormMapping: 'mapper/setFormMapping'
			})
		},

		created() {
			if (! _.has(this.mappings, this.handle)) {
				this.setFormMapping({
					name:    this.name,
					handle:  this.handle,
					column:  this.handle,
					default: this.default
				})
			}
		}
	}
</script>