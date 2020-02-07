<template>
	<p-dropdown>
		<fa-icon class="fa-fw mr-1" :icon="['fas', options[display]]"></fa-icon>
		{{ display | capitalize  }}
		
		<template slot="options">
			<p-dropdown-item v-for="(icon, key) in options" class="w-48" :key="key" @click.prevent="setDisplay(key)">
				<fa-icon class="fa-fw mr-1" :icon="['fas', icon]"></fa-icon>
				{{ key | capitalize }}
			</p-dropdown-item>
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