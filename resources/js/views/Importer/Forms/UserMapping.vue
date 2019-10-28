<template>
	<div>
		<portal to="title">
			<app-title icon="ship">Mapping for Users Import</app-title>
		</portal>

		<field name="ID" :default="false" />
		<field name="Name" />
		<field name="Email" />
	</div>
</template>

<script>
	import Field from './Field.vue'

	export default {
		components: {
			'field': Field
		}
	}
</script>