<template>
	<div>
		<portal to="title">
			<app-title icon="ship">Mapping for Matrix Import</app-title>
		</portal>

		<component v-for="field in fields"
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
	import DynamicMixin from './Mixins/dynamic'

	export default {
		name: 'matrix-mapping',
		mixins: [ DynamicMixin ],
	}
</script>