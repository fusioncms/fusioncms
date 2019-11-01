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
			:settings="field.settings"
		></component>
	</div>
</template>

<script>
	import FieldColor    from './Fields/Color.vue'
	import FieldDateTime from './Fields/DateTime.vue'
	import FieldInput    from './Fields/Input.vue'
	import FieldNone     from './Fields/None.vue'
	import FieldPrimary  from './Fields/Primary.vue'
	import FieldSelect   from './Fields/Select.vue'

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
					'color':    [ 'color-picker' ],
					'input':    [ 'textarea' ],
					'select':   [ 'radio','select','country','us-state' ],
					'datetime': [ 'datetime' ]
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
			'field-color':    FieldColor,
			'field-datetime': FieldDateTime,
			'field-input':    FieldInput,
			'field-none':     FieldNone,
			'field-primary':  FieldPrimary,
			'field-select':   FieldSelect,
		},

		created() {
			const vm = this

			axios.all([
				axios.get(`/api/taxonomies/${this.group}`)
			]).then(axios.spread(function (response) {
				_.forEach(response.data.data.fieldset.sections, function(section) {
					_.forEach(section.fields, function(field) {
						console.log(field.name, field.type.id)
						let properties = {
							'component': _.defaultTo(
								_.findKey(vm.fieldTypes, function(types) {
									return _.indexOf(types, field.type.id) != -1
								}),
								'none'
							),
							'name':      field.name,
							'required':  field.required,
							'help':      field.help,
							'settings':  _.isPlainObject(field.settings) ? field.settings : null,
							'metadata':  field.type.data,
						}

						if (_.size(field.type.data) > 0) {
							properties['settings'].options = _.map(field.type.data, (label, value) => {
								return {
									'label': label,
									'value': value
								}
							})
						}

						vm.fields.push(properties)
					})
				})
			}))
		}
	}
</script>