<template>
	<div>
		<portal to="title">
			<app-title icon="ship">Mapping for Users Import</app-title>
		</portal>

		<component v-for="field in fields"
			:key="field.name"
			:is="'field-' + field.component"
			:name="field.name"
			:required="field.required"
			:help="field.help"
			:defaultOptions="field.options"
		></component>
	</div>
</template>

<script>
	import FieldInput from './Fields/Input.vue'
	import FieldPrimary from './Fields/Primary.vue'
	import FieldSelect from './Fields/Select.vue'

	export default {
		name: 'user-mapping',

		data() {
			return {
				roles: []
			}
		},

		computed: {
			fields: function() {
				return [
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
						'name':      'Email',
						'required':  true
					},
					{
						'component': 'select',
						'name':      'Role',
						'help':      'Roles provide permissions for logged in users.',
						'required':  true,
						'options':   this.roles
					},
					{
						'component': 'select',
						'name':      'Status',
						'options':   [{'label':'Yes','value':true},{'label':'No','value':false}]
					}
				]
			}
		},

		components: {
			'field-input': FieldInput,
			'field-primary': FieldPrimary,
			'field-select': FieldSelect,
		},

		created() {
			axios.all([
				axios.get('/api/roles')
			]).then(axios.spread(function (response) {
				this.roles = _.map(response.data.data, (role) => {
					return {
						'label': role.name,
						'value': role.handle
					}
				})
			}.bind(this)))
		}
	}
</script>