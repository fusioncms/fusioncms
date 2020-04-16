<template>
	<p-dropdown id="display-filters" right>
		<fa-icon class="icon" :icon="options[display]"></fa-icon>
		<span class="hidden md:inline">{{ display | capitalize  }}</span>

		<template v-slot:menu>
			<p-dropdown-link v-for="(icon, key) in options" :key="key" @click.prevent="setDisplay(key)">
				<fa-icon class="icon" :icon="icon"></fa-icon>

				{{ key | capitalize }}
			</p-dropdown-link>
		</template>
	</p-dropdown>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		name: 'file-manager-display-action',

		data() {
			return {
				options: {
					'everything': 'asterisk',
					'images': 'images',
					'videos': 'video',
					'audio': 'volume-up',
					'documents': 'file-alt',
				},
			}
		},

		computed: {
			...mapGetters({
				display: 'filemanager/getDisplay',
			})
		},

		filters: {
			capitalize(value) {
				return _.startCase(value)
			}
		},

		watch: {
			display(value) {
				this.fetchFilesAndDirectories()
			}
		},

		methods: {
			...mapActions({
				fetchFilesAndDirectories: 'filemanager/fetchFilesAndDirectories',
				setDisplay: 'filemanager/setDisplay',
			})
		}
	}
</script>