<template>
	<p-breadcrumbs class="mb-6 border-b border-gray-200 pb-3">
		<template v-for="(breadcrumb, index) in crumbs">
			<p-breadcrumb-divider v-if="index > 0" :key="breadcrumb.name + '-divider'"></p-breadcrumb-divider>

			<p-breadcrumb :key="breadcrumb.name" @click="navigate(breadcrumb)">
				{{ breadcrumb.name }}
			</p-breadcrumb>
		</template>
	</p-breadcrumbs>
</template>

<script>
	export default {
		name: 'file-manager-breadcrumb-action',

		mixins: [
			require('../../../mixins/filebrowser').default,
		],

		computed: {
			crumbs() {
				let breadcrumbs = [...this.breadcrumbs]

				if (! this.rootDirectory) {
					breadcrumbs.unshift({ id: null, name: 'Root' })
				}

				return breadcrumbs
			}
		}
	}
</script>