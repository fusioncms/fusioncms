<template>
	<div>
		<portal to="title">
			<app-title icon="ship">Importer</app-title>
		</portal>

		<portal to="actions">
			<router-link :to="{ name: 'importer.create' }" class="button">Create</router-link>
		</portal>

		<div class="row">
			<div class="content-container">
				<!-- Data Tables -->
			</div>
		</div>

		<portal to="modals">
			<!-- Delete Import Feed -->
		</portal>
	</div>
</template>

<script>
	export default {}
</script>