<template>
	<div class="inline-flex">
		<p-button @click.prevent="toggleView('list')" :disabled="view == 'list'" class="rounded-l rounded-r-none">
			<fa-icon class="fa-fw" :icon="['fas', 'bars']"></fa-icon>
		</p-button>

		<p-button @click.prevent="toggleView('grid')" :disabled="view == 'grid'" class="rounded-r rounded-l-none">
			<fa-icon class="fa-fw" :icon="['fas', 'th-large']"></fa-icon>
		</p-button>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'file-manager-view-action',

		computed: {
			...mapGetters({
				view: 'filemanager/getView',				
			})
		},

		watch: {
			view(value) {
				this.fetchFilesAndDirectories()
			}
		},

		methods: {
			...mapActions({
				fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
				toggleView: 'filemanager/toggleView',
			})
		}
	}
</script>