<template>
	<div class="flex inline-flex items-center">
		<p-button @click="openDirectory(null)" :disabled="currentDirectory == null">
			<fa-icon :icon="['fas', 'home']" class="fa-fw mr-1"></fa-icon> Root
		</p-button>
		
		<template v-for="(breadcrumb, index) in breadcrumbs">
			<span class="mx-2 font-bold">/</span>
			<p-button @click="openDirectory(breadcrumb)" :disabled="currentDirectory == breadcrumb.id">
				{{ breadcrumb.name }}
			</p-button>
		</template>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'file-manager-breadcrumb-action',

		mixins: [
            require('../../../mixins/fileview').default,
        ],

		computed: {
			...mapGetters({
				currentDirectory: 'filemanager/getCurrentDirectory',
				breadcrumbs: 'filemanager/getBreadcrumbs'
			}),
		}
	}
</script>