import FieldColor    from '../Fields/Color.vue'
import FieldDateTime from '../Fields/DateTime.vue'
import FieldInput    from '../Fields/Input.vue'
import FieldNone     from '../Fields/None.vue'
import FieldNumber   from '../Fields/Number.vue'
import FieldPrimary  from '../Fields/Primary.vue'
import FieldSelect   from '../Fields/Select.vue'

export default {
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
				'number':   [ 'number' ],
				'select':   [ 'radio','select','country','us-state','toggle' ],
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
		'field-number':   FieldNumber,
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
						'settings':  _.isPlainObject(field.settings) ? field.settings : {},
					}

					if (field.type.id == 'toggle') {
						properties['settings'].options = [
							{ 'label': 'Enabled',  'value': 1 },
							{ 'label': 'Disabled', 'value': 0 },
						]
					} else if (_.size(field.type.data) > 0) {
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