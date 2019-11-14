<template>
	<div>
		<portal to="title">
			<app-title icon="ship">Mapping for Users Import</app-title>
		</portal>

		<component
			v-for="field in fields"
			:key="field.name"
			:is="'field-' + field.component"
			:name="field.name"
			:required="field.required"
			:help="field.help"
			:settings="field.settings"
			:cast="field.cast"
		></component>
	</div>
</template>

<script>
	import FieldBoolean from './Fields/Boolean.vue'
	import FieldInput   from './Fields/Input.vue'
	import FieldPrimary from './Fields/Primary.vue'
	import FieldSelect  from './Fields/Select.vue'

	export default {
		name: 'users-mapping',

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
						'required':  true,
						'cast':      'integer'
					},
					{
						'component': 'input',
						'name':      'Name',
						'required':  true,
						'cast':      'string'
					},
					{
						'component': 'input',
						'name':      'Email',
						'required':  true,
						'cast':      'string'
					},
					{
						'component': 'input',
						'name':      'Password',
						'required':  false,
						'cast':      'string'
					},
					{
						'component': 'select',
						'name':      'Role',
						'help':      'Roles provide permissions for logged in users.',
						'required':  true,
						'settings':   { 'options': this.roles },
						'cast':      'string'
					},
					{
						'component': 'boolean',
						'name':      'Status',
						'cast':      'boolean'
					}
				]
			}
		},

		components: {
			'field-boolean': FieldBoolean,
			'field-input':   FieldInput,
			'field-primary': FieldPrimary,
			'field-select':  FieldSelect,
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