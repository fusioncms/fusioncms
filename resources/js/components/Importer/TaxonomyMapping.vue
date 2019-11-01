<template>
	<div>
		<portal to="title">
			<app-title icon="ship">Mapping for Taxonomy Import</app-title>
		</portal>

		<component v-for="field in fields"
			:key="field.name"
			:is="'field-' + field.component"
			:name="field.name"
			:required="field.required"
			:help="field.help"
			:defaultValue="field.default"
			:defaultOptions="field.options"
		></component>
	</div>
</template>

<script>
	import FieldColor from './Fields/Color.vue'
	import FieldInput from './Fields/Input.vue'
	import FieldPrimary from './Fields/Primary.vue'
	import FieldSelect from './Fields/Select.vue'

	export default {
		name: 'taxonomies-mapping',

		data() {
			return {
				fields: [
					{
						'component': 'primary',
						'name':      'ID',
						'required':  true
					},
					{
						'component': 'input',
						'name':      'Name',
						'required':  true
					},
					{
						'component': 'input',
						'name':      'Slug',
						'required':  true
					},
					{
						'component': 'select',
						'name':      'Status',
						'options':   [{'label':'Yes','value':true},{'label':'No','value':false}]
					}
				],
				fieldTypes: {
					'color':  ['color-picker'],
					'input':  ['textarea'],
					'select': ['radio','select']
				}
			}
		},

		props: {
			group: {
				type: Number,
				required: true
			}
		},

		components: {
			'field-color':   FieldColor,
			'field-input':   FieldInput,
			'field-primary': FieldPrimary,
			'field-select':  FieldSelect,
		},

		created() {
			const vm = this

			axios.all([
				axios.get(`/api/taxonomies/${this.group}`)
			]).then(axios.spread(function (response) {
				_.forEach(response.data.data.fieldset.sections, function(section) {
					_.forEach(section.fields, function(field) {
						vm.fields.push({
							'component': _.findKey(vm.fieldTypes, function(types) {
								return _.indexOf(types, field.type.id) != -1
							}),
							'name':      field.name,
							'required':  field.required,
							'help':      field.help,
							'default':   (_.has(field.settings, 'default') ? field.settings.default : null),
							'options':   (_.has(field.settings, 'options') ? field.settings.options : null)
						})
					})
				})
			}))
		}
	}
</script>