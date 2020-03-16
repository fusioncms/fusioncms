<template>
	<div class="=flex inline-flex items-center">
		<template v-for="(breadcrumb, index) in nav">
			<span class="mx-2 font-bold" v-if="index > 0">/</span>
			
			<p-button @click="navigate(breadcrumb)" :disabled="currentDirectory == breadcrumb.id">
				<fa-icon v-if="index == 0" :icon="['fas', 'home']" class="fa-fw mr-1"></fa-icon>
				{{ breadcrumb.name }}
			</p-button>
		</template>
	</div>
</template>

<script>
	export default {
		name: 'file-manager-breadcrumb-action',

		mixins: [
			require('../../../mixins/filebrowser').default,
		],

		computed: {
			nav() {
				let breadcrumbs = [...this.breadcrumbs]

				if (! this.rootDirectory) {
					breadcrumbs.unshift({ id: null, name: 'Root' })
				}

				return breadcrumbs
			}
		}
	}
</script>